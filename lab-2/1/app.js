function run() {
  new Vue({
    el: '#app',
    data: {
      message: '',
      resultText: ''
    },
    methods: {
      doSomething: function () {
        if (this.message === '123') {
          this.resultText = 'Mesajul este egal cu 123';
        } else {

          this.resultText = ''; 
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});