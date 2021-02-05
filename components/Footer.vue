<template>
  <div :class="'cfooter-div-padre-footer dm_f_'+darkmode">
    <div class="cfooter-div-cont-footer">
      <h2 :class="'cfooter-title text dm_t1_'+darkmode">Rath</h2>
      <p :class="'cfooter-description text dm_t1_'+darkmode">
        Inspirados en el aprendizaje y la constante practica ofrecemos nuestra
        plataforma para la ayuda de la memorización de los caracteres del idioma
        japones tanto del Hiragana como del Katakana
      </p>
      <h3 :class="'cfooter-fecha text dm_t1_'+darkmode">@2021</h3>
    </div>
  </div>
</template>


<script>
//imports
import { mapState } from "vuex";

export default {
  name: "Cfooter",
  components: {},
  computed: {
    ...mapState(["muted", "hidenRomaji", "darkmode"]),
  },
};
</script>