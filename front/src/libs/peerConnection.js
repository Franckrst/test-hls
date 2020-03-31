class  ConnectionClient {
    constructor(options = {}) {
        options = {
            clearTimeout,
            host: '',
            prefix: '.',
            token: '',
            key: '',
            setTimeout,
            timeToHostCandidates: 3000,
            ...options
        };

        const {
            prefix,
            host,
            token,
            key
        } = options;

        this.createConnection = async (options = {}) => {
            options = {
                beforeAnswer() {},
                stereo: false,
                ...options
            };

            const {
                beforeAnswer,
                stereo
            } = options;

            const response1 = await fetch(`${host}${prefix}/connections`, {
                method: 'POST',
                headers : {
                    'Authorization': `Bearer ${token}`,
                    'X-key' : key
                }
            });

            const remotePeerConnection = await response1.json();
            const { id } = remotePeerConnection;

            const localPeerConnection = new RTCPeerConnection({
                sdpSemantics: 'unified-plan'
            });

            // NOTE(mroberts): This is a hack so that we can get a callback when the
            // RTCPeerConnection is closed. In the future, we can subscribe to
            // "connectionstatechange" events.
            localPeerConnection.close = function() {
                fetch(`${host}${prefix}/connections/${id}`, { method: 'delete',
                    headers : {
                        'Authorization': `Bearer ${token}`
                    } }).catch(() => {});
                return RTCPeerConnection.prototype.close.apply(this, arguments);
            };

            await localPeerConnection.setRemoteDescription(remotePeerConnection.localDescription);

            await beforeAnswer(localPeerConnection);

            const originalAnswer = await localPeerConnection.createAnswer();
            const updatedAnswer = new RTCSessionDescription({
                type: 'answer',
                sdp: stereo ? originalAnswer.sdp.replace(/a=fmtp:111/, 'a=fmtp:111 stereo=1\r\na=fmtp:111') : originalAnswer.sdp
            });
            await localPeerConnection.setLocalDescription(updatedAnswer);

            await fetch(`${host}${prefix}/connections/${id}/remote-description`, {
                method: 'POST',
                body: JSON.stringify(localPeerConnection.localDescription),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            return localPeerConnection;
        };
    }
}
module.exports = ConnectionClient;
