<template >
  <div class="comments_div_general">
    <h1>Sugerencias y opiniones</h1>
    <div class="commetns_div_cont_insertions">
      <h2 class="comments_titulo_form">Envianos tu experiencia</h2>
      <form id="comments_form" class="comments_form">
        <input
          id="name"
          class="comments_nombre c_item_form"
          type="text"
          required
          autocomplete="off"
          placeholder="Nick name"
          maxlength="20"
        />
        <textarea
          class="comments_comentario c_item_form"
          name="comentario"
          id="comentario"
          placeholder="Comentario"
          cols="30"
          rows="8"
          maxlength="250"
        ></textarea>
        <button
          @click="sendComment"
          type="submit"
          id="bot"
          class="commetns_boton_send c_item_form"
        >
          Enviar
        </button>
      </form>
      <div v-show="invalid" :class="'commetns_invalid error_'+lighterror">
        Favor ingrese datos validos
      </div>
      <div v-show="sended" class="commetns_sended">
        Enviado correctamente
      </div>
    </div>

    <div class="model1-div-cont-separator"><hr class="model1-separator" /></div>

    <div class="div_cont_allcomments">
      <h2 class="comments_titulo_seccion_comentarios">Comentarios:</h2>
      <commentIndividual
        v-for="(coment, index) in comentarios" :key="index"
        :nombre="comentarios[index].nombre"
        :comentario="comentarios[index].comentario"
      />
    </div>
  </div>
</template>
<script>
import CommentIndividual from "../components/CommentIndividual.vue";
import axios from "axios";
export default {
  components: {
    CommentIndividual,
  },
  data() {
    return {
      comentarios:[],
      nombre: "",
      comentario: "",
      invalid: false,
      sended: false,
      lighterror: false,
    };
  },
  methods: {
    sendComment(e) {
      e.preventDefault();
      let docnombre = document.getElementById("name");
      let doccoment = document.getElementById("comentario");
      let nombre = docnombre.value;
      let comentario = doccoment.value;
      if (
        nombre.length > 20 ||
        comentario.length > 250 ||
        nombre == "" ||
        comentario == "" 
      ) {
        docnombre.value = "";
        doccoment.value = "";
        docnombre.focus();
        this.invalid = true;
        this.sended = false;
        this.lighterror = true;
        //this.lighterror = false;
        setTimeout(this.lighter, 300);
        
        return;
      } else {
        let nombreClean = nombre.trim();
        let comentarioClean = comentario.trim();
        console.log(nombreClean);
        console.log(comentarioClean);
        axios({
          method: "POST",
          url: "https://japanese-backend.herokuapp.com/newcomment",
          data: {
            nombre: nombreClean,
            comentario: comentarioClean,
          },
        })
          .then((res) => {
            console.log(res.data);
            this.sended = true;
          })
          .catch((err) => console.log(err));
        docnombre.value = "";
        doccoment.value = "";
        this.invalid = false;
      }
      docnombre.value = "";
      doccoment.value = "";
    },
    lighter(){
      this.lighterror = false;
    },
    async getCommetns(){
      try {
        const respuesta = await axios.get('https://japanese-backend.herokuapp.com/getcomments');
        console.log(respuesta.data);
        this.comentarios = respuesta.data.reverse(); 
      } catch (error) {
        console.error(error);
        console.log(error);
      }
    },
  },
  mounted() {
    this.getCommetns();
  },
};
</script>
<style lang="">
</style>
