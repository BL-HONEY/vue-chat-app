<template>
     <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span>{{msg}}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
    </md-snackbar> 
</template>

<script>
export default {
      name: "SnackBar",
  data: () => ({
    showSnackbar: false,
    position: 'center',
    duration: 4000,
    isInfinity: false
  }),
  props: {
      msg:null
  }
}
</script>

<style scoped>

</style>