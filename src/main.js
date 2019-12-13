import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io'

export const SocketInstance = new socketio('http://localhost:3000');

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketInstance
}))
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://metinseylan.com:1992',
//   vuex: {
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_'
//   },
//   // options: { path: "/my-app/" } //Optional options
// }))
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router,
//   sockets: {
//     connect: function () {
//         this.$log.info('socket connected')
//     }
// },
}).$mount('#app')
