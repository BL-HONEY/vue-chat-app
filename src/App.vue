<template>
 <router-view> </router-view>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { MdCard, 
         MdField,
         MdButton,
         MdSnackbar 
         } from 'vue-material/dist/components'
import VueLogger from 'vuejs-logger';
const isProduction = process.env.NODE_ENV === 'production';
 
const options = {
    isEnabled: true,
    logLevel : isProduction ? 'error' : 'debug',
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : true,
    separator: '|',
    showConsoleColors: true
};

Vue.use(VueMaterial)
Vue.use(VueLogger, options);
Vue.use(MdCard)
Vue.use(MdField)
Vue.use(MdButton)
Vue.use(MdSnackbar)

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
body {
  font-family: Arial, Helvetica;
  height: 100%;
  width: 100%;
}
</style>
