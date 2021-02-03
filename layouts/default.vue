<template>
  <div>
    <navbar/>
    <Nuxt />
    <Cfooter/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Cfooter from '../components/Footer'

export default {
  components:{
    Navbar,
    Cfooter
  }
}
</script>

<style lang="scss" src="../scss/main.scss">

</style>

