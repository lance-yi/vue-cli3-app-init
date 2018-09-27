<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted () {
    this.$http.post({ type: 'formData', baseUrl: 'http://192.168.1.3:8081/RmarketShop', api: '/address/findprovinces.html' }, null, res => {
      console.log(res)
    })
  }
}
</script>
