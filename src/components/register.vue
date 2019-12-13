<template>
  <div class="md-layout  md-alignment-center">
    <md-card  class="md-layout-item md-alignment-center md-size-40 md-xsmall-size-100">
      <md-card-header>
        <div class="md-title">Register</div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-alignment-center-space-between">
        <md-field class="md-layout-item md-size-45">
          <label>First Name</label>
          <md-input v-model="firstName"></md-input>
        </md-field>
        <md-field class="md-layout-item md-size-45">
          <label>Last Name</label>
          <md-input v-model="lastName"></md-input>
        </md-field>
        </div>
        <md-field>
          <label>Email</label>
          <md-input v-model="email"></md-input>
        </md-field>
        <md-field>
          <label>Password</label>
          <md-input v-model="password"></md-input>
        </md-field>
      </md-card-content>
      <md-button class="md-raised md-primary" v-on:click="submit">Submit</md-button>
    </md-card>
    <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span>{{msg}}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
    </md-snackbar>
  </div>
</template>

<script>
// import userService from "../services/userService";
import {HTTP} from '../services/httpService';
// import SnackBar from './snackbar.vue';
export default {
  name: "register",
  data: () => ({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    showSnackbar: false,
    position: 'center',
    duration: 4000,
    isInfinity: false,
    msg: ""
  }),

  methods: {
    submit: function() {
      let reqBody = {
        title: this.firstName,
        body: this.email
      }
      // userService
      //   .register(reqBody)
      // this.$http.post('http://jsonplaceholder.typicode.com/posts', reqBody)
      HTTP.post('posts', reqBody)
        .then(data => {
                  this.$log.info('test', data)
                  this.showSnackbar = true;
                  this.msg = "Registration done"
        })
        .catch(error => {
          alert(error);
        });
    }
  },
 
};
</script>

<style scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>