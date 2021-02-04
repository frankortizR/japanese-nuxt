<template>
  <div class="home-div-cont-home">
    
    <div class="home-parte1">
      <div class="home-div-cont-menu">
        <div class="titulo-principal">
          <h1 :class="'title dm_t1_'+darkmode">Practica de Hiragana</h1>
        </div>
        <div class="model1-div-cont-adver">
          <div class="home-div-cont-modelos">

            <nuxt-link class="link-pagina" to="/model2">
              <div class=" modelos">
                <div class="home-modelo-head">
                  <div class="home-modelo-head1">
                    <h3 class="home-modelo-title model-text">Modelo A</h3>
                    <p class="home-modelo-related model-text">Stylus</p>
                  </div>
                  <div class="home-modelo-head2">
                    <img class="home-stylus-icon" :src="stylusmoodelIcon" alt="">
                  </div>
                </div>
                
                  <ul class="home-modelo-description model-text">
                    <li>Practica de la escritura</li><br>
                    <li>Campo de escritura en pantalla</li><br>
                    <li>Con Stylus mouse o touch </li><br>

                  </ul>
                
              </div>
            </nuxt-link>

            <nuxt-link class="link-pagina" to="/model3">
              <div class=" modelos">
                <div class="home-modelo-head">
                  <div class="home-modelo-head1">
                    <h3 class="home-modelo-title model-text">Modelo B</h3>
                    <p class="home-modelo-related model-text">Target</p>
                  </div>
                  <div class="home-modelo-head2">
                    <img class="home-stylus-icon" :src="targetmodelIcon" alt="">
                  </div>
                </div>
                
                  <ul class="home-modelo-description model-text">
                    <li>Selecciona el caracter correcto</li><br>
                    <li>3 opciones para elegir</li><br>
                    <li>Compruebe su respuesta </li><br>
                  </ul>
                
              </div>
            </nuxt-link>

            <nuxt-link class="link-pagina" to="/model1">
              <div class=" modelos">
                <div class="home-modelo-head">
                  <div class="home-modelo-head1">
                    <h3 class="home-modelo-title model-text">Modelo C</h3>
                    <p class="home-modelo-related model-text">Notebook</p>
                  </div>
                  <div class="home-modelo-head2">
                    <img class="home-stylus-icon" :src="bookmodelIcon" alt="">
                  </div>
                </div>
                
                  <ul class="home-modelo-description model-text">
                    <li>Practica de la escritura </li><br>
                    <li>En su cuaderno escriba <br> la letra correspondiente</li><br>
                    <li>Compruebe su respuesta</li>
                  </ul>
                
              </div>
            </nuxt-link>

          </div>
          <div class="home-div-cont-advertaisment">Advertisment</div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  // @ is an alias to /src

  import Navbar from "../components/Navbar.vue";
  import Cfooter from "../components/Footer";
  import { mapState } from "vuex";

  export default {
    name: "Home",
    components: {
      Navbar,
      Cfooter,
    },
    data() {
      return {
        stylusmoodelIcon: require("../assets/img/icons/quill-drawing-a-line.svg"),
        targetmodelIcon: require("../assets/img/icons/target.svg"),
        bookmodelIcon: require("../assets/img/icons/open-book.svg"),
      };
    },
    computed: {
    ...mapState(["darkmode"]),
  },
  };
</script>