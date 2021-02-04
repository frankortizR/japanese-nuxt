<template>
  <div :class="'default_layout dm_b1_'+darkmode">
    <navbar/>
    <Nuxt />
    <Cfooter/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Cfooter from '../components/Footer'
import { mapState } from "vuex";

export default {
  components:{
    Navbar,
    Cfooter
  },
  computed: {
    ...mapState(["darkmode"]),
  },
}
</script>

<style lang="scss" src="../scss/main.scss">

</style>

