function run() {
  new Vue({
    el: '#app',
    data: {
      users: [],

      newName: '',
      newCity: '',

      editIndex: null,
      editName: '',
      editCity: ''
    },
    created: function () {
      this.refreshUsers();
    },
    methods: {
      getUsers: function() {
          return axios.get('http://localhost:3000/users');
      },


      refreshUsers: function() {
          this.getUsers().then(response => (this.users = response.data));
      },

      // 1. add user
      addUser: function() {
          if (this.newName && this.newCity) {
              axios.post('http://localhost:3000/users', {
                  name: this.newName,
                  city: this.newCity
              }).then(() => {
                  this.refreshUsers();
                  this.newName = '';
                  this.newCity = '';
              });
          }
      },

      // 2. del user
      deleteUser: function(index) {
          axios.delete('http://localhost:3000/users/' + index).then(() => {
              this.refreshUsers();
          });
      },

      // 3. edit user
      startEdit: function(index, user) {
          this.editIndex = index;
          this.editName = user.name;
          this.editCity = user.city;
      },


      saveEdit: function() {
          if (this.editIndex !== null) {
              axios.put('http://localhost:3000/users/' + this.editIndex, {
                  name: this.editName,
                  city: this.editCity
              }).then(() => {
                  this.refreshUsers();
                  this.editIndex = null;
              });
          }
      },


      cancelEdit: function() {
          this.editIndex = null;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});