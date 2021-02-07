<template>
  <div class="comment_div_general">
    <div class="comment_div_cont_name">
      <h3 :class="'comment_name dm_t4_'+darkmode">{{ nombre }}</h3>
    </div>
    <div class="comment_div_cont_comment">
      <p :class="'comment_comment dm_t1_'+darkmode">{{ comentario }}</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: {
    nombre: {
      type: String,
      default: "Nombre de fulano",
      require: true,
    },
    comentario: {
      type: String,
      default: "Feed back del personal",
      require: true,
    },
  },
  computed: {
    ...mapState(["darkmode"]),
  },
};
</script>
<style lang="">
</style>