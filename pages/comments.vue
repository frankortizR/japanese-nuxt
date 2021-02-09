<template >
  <div class="comments_div_general">
    <h1 :class="'dm_t1_' + darkmode">Sugerencias y opiniones</h1>
    <div class="commetns_div_cont_insertions">
      <h2 :class="'comments_titulo_form dm_t1_' + darkmode">
        Envianos tu experiencia
      </h2>
      <form id="comments_form" class="comments_form">
        <input
          id="name"
          :class="'comments_nombre c_item_form dm_t3_' + darkmode"
          type="text"
          required
          autocomplete="off"
          placeholder="Nick name"
          maxlength="20"
        />
        <textarea
          :class="'comments_comentario c_item_form dm_t3_' + darkmode"
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
          :class="'commetns_boton_send c_item_form dm_border_' + darkmode"
        >
          Enviar
        </button>
      </form>
      <div
        v-show="invalid"
        :class="
          'commetns_invalid error_' + lighterror + ' dm_border_' + darkmode
        "
      >
        Favor ingrese datos validos
      </div>
      <div v-show="sended" :class="'commetns_sended dm_border_' + darkmode">
        Enviado correctamente
      </div>
    </div>

    <div class="model1-div-cont-separator"><hr class="model1-separator" /></div>

    <div class="div_cont_allcomments">
      <h2 :class="'comments_titulo_seccion_comentarios dm_t1_' + darkmode">
        Comentarios:
      </h2>
      <div v-show="loading" class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <commentIndividual
        v-for="(coment, index) in parcialComentarios"
        :key="index"
        :nombre="comentarios[index].nombre"
        :comentario="comentarios[index].comentario"
      />
      <div
        v-show="booleanshowmore"
        @click="moreComments"
        :class="'commetns_more dm_t3_' + darkmode"
      >
        Mas comentarios
      </div>
    </div>
  </div>
</template>
<script>
import CommentIndividual from "../components/CommentIndividual.vue";
import axios from "axios";
import { mapState } from "vuex";

export default {
  components: {
    CommentIndividual,
  },
  head() {
    return {
      title: "Sugerencias",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Sección de comentarios a disposición de los usuarios para poder brindar sus observaciones, sugerencias y experiencias en nuestra plataforma",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "japones, hiragana, práctica, practicar, aprender japones, aprender hiragana, memorizar hiragana",
        },
        {
          hid: "owner",
          name: "owner",
          content: "Rath",
        },
        {
          hid: "robots",
          name: "robots",
          content: "index,follow",
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#022E40",
        },
        {
          hid: "apple-mobile-web-app-capable",
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          hid: "apple-mobile-web-app-status-bar-style",
          name: "apple-mobile-web-app-status-bar-style",
          content: "yes",
        },
      ],
      htmlAttrs: {
        lang: "es",
      },
    };
  },
  data() {
    return {
      comentarios: [],
      parcialComentarios: [],
      indexParcialComments: 0,
      nombre: "",
      comentario: "",
      invalid: false,
      sended: false,
      lighterror: false,
      booleanshowmore: true,
      loading: true,
    };
  },
  computed: {
    ...mapState(["darkmode"]),
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
    lighter() {
      this.lighterror = false;
    },
    async getCommetns() {
      try {
        const respuesta = await axios.get(
          "https://japanese-backend.herokuapp.com/getcomments"
        );
        console.log(respuesta.data);
        this.comentarios = respuesta.data.reverse();
        setTimeout(this.moreComments, 500);
        console.log("no shit");
      } catch (error) {
        console.error(error);
        console.log(error);
      }
    },
    moreComments() {
      this.loading = false;
      let limit = this.indexParcialComments;
      for (let i = this.indexParcialComments; i < limit + 2; i++) {
        if (this.indexParcialComments < this.comentarios.length) {
          this.parcialComentarios.push(this.comentarios[i]);
          this.indexParcialComments++;
        } else {
          this.booleanshowmore = false;
          console.log("no hay mas por mostrar desde adentro");
        }
      }
    },
  },
  mounted() {
    this.getCommetns();
  },
};
</script>

