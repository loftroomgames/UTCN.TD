document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      socket: null,
      messages: [],
      currentMessage: ''
    },
    created: function () {
      this.socket = io('http://localhost:8000');

      this.socket.on('chat-message', (msg) => {
        this.messages.push(msg);
      });
    },
    methods: {
      sendMessage: function () {
        if (this.currentMessage.trim() !== '') {
          this.socket.emit('chat-message', this.currentMessage);
          this.currentMessage = '';
        }
      }
    }
  });
});