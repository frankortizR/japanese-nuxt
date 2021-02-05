<template>
  <div :class="'default_layout dm_b1_' + darkmode">
    <navbar />
    <Nuxt />
    <Cfooter />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Cfooter from "../components/Footer";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Navbar,
    Cfooter,
  },
  computed: {
    ...mapState(["darkmode"]),
  },
  methods: {
    ...mapMutations(["storeDarkmode", "localStorageVer"]),
    localStorageCheck() {
      if (localStorage.dark) {
        console.log("reconocio el valor en local sstorage");
        this.localStorageVer();
      }
    },
  },
  mounted() {
    this.localStorageCheck();
  },
};
</script>

<style lang="scss" src="../scss/main.scss">
</style>

