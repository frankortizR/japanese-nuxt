<template>
  <div :class="'drop-div-cont-drop dm_b2_' + darkmode">
    <nuxt-link class="d-link" to="/">
      <svg
        class="drop-icono-home drop-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M 8 20 H 3 V 10 H 0 L 10 0 l 10 10 h -3 v 10 h -5 v -6 H 8 v 6 Z"
        />
      </svg>

      Inicio
    </nuxt-link>
    <nuxt-link class="d-link" to="/about">
      <svg
        class="drop-icono-about drop-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M 2.93 17.07 A 10 10 0 1 1 17.07 2.93 A 10 10 0 0 1 2.93 17.07 Z M 9 11 v 4 h 2 V 9 H 9 v 2 Z m 0 -6 v 2 h 2 V 5 H 9 Z"
        />
      </svg>

      Info
    </nuxt-link>
    <nuxt-link class="d-link" to="/comments">
      <svg
        class="drop-icono-opt drop-icon"
        viewBox="0 0 512 512"
        width="512"
        height="512"
        version="1.1"
      >
        <title />
        <g id="icomoon-ignore"></g>
        <path
          d="M 0 448 h 512 v 32 h -512 Z M 512 384 v 32 h -512 v -32 l 64 -128 h 128 v 64 h 128 v -64 h 128 Z M 112 160 l 144 -144 l 144 144 h -112 v 128 h -64 v -128 Z"
        />
      </svg>

      Sugerencias
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Dropdown",
  computed: {
    ...mapState(["darkmode"]),
  },
};
</script>