<template>
  <div class="model1-div-cont-part1">
    <div class="model1-div-cont-beforeadver">

      <div class="titulo-principal">
          <h1 class="title">Práctica de Hiragana</h1>
        </div>

    <div class="model1-div-cont-modelo1 ">
      <div class="model1-div-cont-info">
        <div class="model1-modelo-head">
          <h3 class="model1-modelo-title model1-text">Modelo C</h3>
          <img class="model1-book-icon" :src="bookmodelIcon" alt="">
        </div>
        
          <ul class="modelo1-modelo-description model1-text-description">
                    <li>Practica de la escritura </li><br>
                    <li>En su cuaderno escriba la letra correspondiente</li><br>
                    <li>Compare respuesta con la visualiuzacion</li><br>
                  <strong>Enfatiza la escritura</strong>
                  </ul>
        
      </div>
      <div class="model1-div-cont-configs">
      <div
        :class="'model1-boton-practica-auto' + this.emptyA"
        v-on:click="autoPressed"
      >
      <strong>
        Start auto
      </strong>
      </div>
      <!-- <div
        :class="'model1-boton-practica-mute opt' + this.mute"
        v-on:click="mute = !mute"
      >
        Mute
      </div> -->
      </div>
    </div>

    <div class="model1-div-cont-separator"><hr class="model1-separator" /></div>

    <div class="model1-div-cont-practice">
      <div class="model1-div-cont-play">
        
          <img class="model1-icono-play" v-on:click="playSound" :src="iconPlay" alt="icono-play">
          
        
        <h3 class="model1-reproducir">Pronunciación</h3>
      </div>
      <div class="model1-div-cont-practica-conromaji">
       <!--  <div
          :class="'model1-boton-practica-conromaji ' + this.emptyR"
          v-on:click="pRomaji"
        >
        <i>
          Romaji
        </i>
        </div> -->
        <div class="model1-div-cont-practica">
          <div class="model1-texto-practica" :class="this.showRs">
            <h3 class="model1-texto-practica-static">abc</h3>
          </div>
          <div class="model1-texto-practica-dinamic" :class="this.showRd">
            <h3 id="dinamico-romaji"></h3>
          </div>
        </div>
      </div>
    </div>

    <div class="model1-div-cont-separator"><hr class="model1-separator" /></div>

    <div class="model1-div-cont-answer">
      <div class="model1-div-cont-show">
        <div class="model1-texto-show" v-on:click="showAnsPressed">
          Mostrar respuesta
        </div>
        <div :class="'model1-icono-show ' + this.showAs">
          <h3 class="model-icono-noshow">?</h3>
        </div>
        <div :class="'model1-div-imagen-answear ' + this.showAd">
          <img
            class="model1-imagen-answear"
            :src="this.hiraganaC[index]"
            alt="letra-a-hiragana"
          />
        </div>
      </div>

      <div class="model1-div-cont-progresbar">
        <span :class="progres"></span>
      </div>

      <div class="model1-boton-next" v-on:click="nextOnePressed">
        <p class="model1-boton-next-text">Next</p>
      </div>
    </div>
    </div>

    <div class="home-div-cont-advertaisment">Advertisment</div>
  </div>
    
</template>

<script>
//imports
import Navbar from "../components/Navbar.vue";
import Cfooter from "../components/Footer.vue";
import { mapState } from "vuex";

export default {
  name: "Model1",
  components: {
    Navbar,
    Cfooter,
  },
  data() {
    return {
      showRd: "",
      showRs: "hide",
      showAd: "hide",
      showAs: "",
      pressedR: "model1-pressed",
      emptyR: "",
      pressedA: "model1-pressed",
      emptyA: "",
      auto: false,
      progres: "model1-start",
      mute: false,
      interval: Number,
      iconPlay: require("../assets/img/icons/play.svg"),
      bookmodelIcon: require("../assets/img/icons/open-book.svg"),
      /* hiraganaS2:[
        new Audio(require('../assets/audio/hiragana/a.mp3')),
        new Audio(require('../assets/audio/hiragana/i.mp3')),
        new Audio(require('../assets/audio/hiragana/u.mp3')),
        new Audio(require('../assets/audio/hiragana/e.mp3')),
        new Audio(require('../assets/audio/hiragana/o.mp3')),
        new Audio(require('../assets/audio/hiragana/ka.mp3')),
        new Audio(require('../assets/audio/hiragana/ki.mp3')),
        new Audio(require('../assets/audio/hiragana/ku.mp3')),
        new Audio(require('../assets/audio/hiragana/ke.mp3')),
        new Audio(require('../assets/audio/hiragana/ko.mp3')),
        new Audio(require('../assets/audio/hiragana/sa.mp3')),
        new Audio(require('../assets/audio/hiragana/shi.mp3')),
        new Audio(require('../assets/audio/hiragana/su.mp3')),
        new Audio(require('../assets/audio/hiragana/se.mp3')),
        new Audio(require('../assets/audio/hiragana/so.mp3')),
        new Audio(require('../assets/audio/hiragana/ta.mp3')),
        new Audio(require('../assets/audio/hiragana/chi.mp3')),
        new Audio(require('../assets/audio/hiragana/tsu.mp3')),
        new Audio(require('../assets/audio/hiragana/te.mp3')),
        new Audio(require('../assets/audio/hiragana/to.mp3')),
        new Audio(require('../assets/audio/hiragana/na.mp3')),
        new Audio(require('../assets/audio/hiragana/ni.mp3')),
        new Audio(require('../assets/audio/hiragana/nu.mp3')),
        new Audio(require('../assets/audio/hiragana/ne.mp3')),
        new Audio(require('../assets/audio/hiragana/no.mp3')),
        new Audio(require('../assets/audio/hiragana/ha.mp3')),
        new Audio(require('../assets/audio/hiragana/hi.mp3')),
        new Audio(require('../assets/audio/hiragana/fu.mp3')),
        new Audio(require('../assets/audio/hiragana/he.mp3')),
        new Audio(require('../assets/audio/hiragana/ho.mp3')),
        new Audio(require('../assets/audio/hiragana/ma.mp3')),
        new Audio(require('../assets/audio/hiragana/mi.mp3')),
        new Audio(require('../assets/audio/hiragana/mu.mp3')),
        new Audio(require('../assets/audio/hiragana/me.mp3')),
        new Audio(require('../assets/audio/hiragana/mo.mp3')),
        new Audio(require('../assets/audio/hiragana/ia.mp3')),
        
        new Audio(require('../assets/audio/hiragana/iu.mp3')),
        
        new Audio(require('../assets/audio/hiragana/io.mp3')),
        new Audio(require('../assets/audio/hiragana/ra.mp3')),
        new Audio(require('../assets/audio/hiragana/ri.mp3')),
        new Audio(require('../assets/audio/hiragana/ru.mp3')),
        new Audio(require('../assets/audio/hiragana/re.mp3')),
        new Audio(require('../assets/audio/hiragana/ro.mp3')),
        new Audio(require('../assets/audio/hiragana/wa.mp3')),
        
        new Audio(require('../assets/audio/hiragana/wo.mp3')),
        new Audio(require('../assets/audio/hiragana/n.mp3')),
        ], */
      hiraganaS: [
        require('../static/audio/hiragana/a.mp3'),
        require("../static/audio/hiragana/i.mp3"),
        require("../static/audio/hiragana/u.mp3"),
        require("../static/audio/hiragana/e.mp3"),
        require("../static/audio/hiragana/o.mp3"),
        require("../static/audio/hiragana/ka.mp3"),
        require("../static/audio/hiragana/ki.mp3"),
        require("../static/audio/hiragana/ku.mp3"),
        require("../static/audio/hiragana/ke.mp3"),
        require("../static/audio/hiragana/ko.mp3"),
        require("../static/audio/hiragana/sa.mp3"),
        require("../static/audio/hiragana/shi.mp3"),
        require("../static/audio/hiragana/su.mp3"),
        require("../static/audio/hiragana/se.mp3"),
        require("../static/audio/hiragana/so.mp3"),
        require("../static/audio/hiragana/ta.mp3"),
        require("../static/audio/hiragana/chi.mp3"),
        require("../static/audio/hiragana/tsu.mp3"),
        require("../static/audio/hiragana/te.mp3"),
        require("../static/audio/hiragana/to.mp3"),
        require("../static/audio/hiragana/na.mp3"),
        require("../static/audio/hiragana/ni.mp3"),
        require("../static/audio/hiragana/nu.mp3"),
        require("../static/audio/hiragana/ne.mp3"),
        require("../static/audio/hiragana/no.mp3"),
        require("../static/audio/hiragana/ha.mp3"),
        require("../static/audio/hiragana/hi.mp3"),
        require("../static/audio/hiragana/fu.mp3"),
        require("../static/audio/hiragana/he.mp3"),
        require("../static/audio/hiragana/ho.mp3"),
        require("../static/audio/hiragana/ma.mp3"),
        require("../static/audio/hiragana/mi.mp3"),
        require("../static/audio/hiragana/mu.mp3"),
        require("../static/audio/hiragana/me.mp3"),
        require("../static/audio/hiragana/mo.mp3"),
        require("../static/audio/hiragana/ia.mp3"),
        require("../static/audio/hiragana/iu.mp3"),
        require("../static/audio/hiragana/io.mp3"),
        require("../static/audio/hiragana/ra.mp3"),
        require("../static/audio/hiragana/ri.mp3"),
        require("../static/audio/hiragana/ru.mp3"),
        require("../static/audio/hiragana/re.mp3"),
        require("../static/audio/hiragana/ro.mp3"),
        require("../static/audio/hiragana/wa.mp3"),
        require("../static/audio/hiragana/wo.mp3"),
        require("../static/audio/hiragana/n.mp3"),
      ],
      hiraganaR: [
        "a",
        "i",
        "u",
        "e",
        "o",
        "Ka",
        "Ki",
        "Ku",
        "Ke",
        "Ko",
        "Sa",
        "Shi",
        "Su",
        "Se",
        "So",
        "Ya",
        "Chi",
        "Tsu",
        "Te",
        "To",
        "Na",
        "Ni",
        "Nu",
        "Ne",
        "No",
        "Ha",
        "Hi",
        "Fu",
        "He",
        "Ho",
        "Ma",
        "Mi",
        "Mu",
        "Me",
        "Mo",
        "ia",
        "iu",
        "io",
        "Ra",
        "Ri",
        "Ru",
        "Re",
        "Ro",
        "Wa",
        "Wo",
        "n",
      ],
      hiraganaC: [
        require("../assets/img/hiragana/a.svg"),
        require("../assets/img/hiragana/i.svg"),
        require("../assets/img/hiragana/u.svg"),
        require("../assets/img/hiragana/e.svg"),
        require("../assets/img/hiragana/o.svg"),
        require("../assets/img/hiragana/ka.svg"),
        require("../assets/img/hiragana/ki.svg"),
        require("../assets/img/hiragana/ku.svg"),
        require("../assets/img/hiragana/ke.svg"),
        require("../assets/img/hiragana/ko.svg"),
        require("../assets/img/hiragana/sa.svg"),
        require("../assets/img/hiragana/shi.svg"),
        require("../assets/img/hiragana/su.svg"),
        require("../assets/img/hiragana/se.svg"),
        require("../assets/img/hiragana/so.svg"),
        require("../assets/img/hiragana/ta.svg"),
        require("../assets/img/hiragana/chi.svg"),
        require("../assets/img/hiragana/tsu.svg"),
        require("../assets/img/hiragana/te.svg"),
        require("../assets/img/hiragana/to.svg"),
        require("../assets/img/hiragana/na.svg"),
        require("../assets/img/hiragana/ni.svg"),
        require("../assets/img/hiragana/nu.svg"),
        require("../assets/img/hiragana/ne.svg"),
        require("../assets/img/hiragana/no.svg"),
        require("../assets/img/hiragana/ha.svg"),
        require("../assets/img/hiragana/hi.svg"),
        require("../assets/img/hiragana/fu.svg"),
        require("../assets/img/hiragana/he.svg"),
        require("../assets/img/hiragana/ho.svg"),
        require("../assets/img/hiragana/ma.svg"),
        require("../assets/img/hiragana/mi.svg"),
        require("../assets/img/hiragana/mu.svg"),
        require("../assets/img/hiragana/me.svg"),
        require("../assets/img/hiragana/mo.svg"),
        require("../assets/img/hiragana/ia.svg"),
        require("../assets/img/hiragana/iu.svg"),
        require("../assets/img/hiragana/io.svg"),
        require("../assets/img/hiragana/ra.svg"),
        require("../assets/img/hiragana/ri.svg"),
        require("../assets/img/hiragana/ru.svg"),
        require("../assets/img/hiragana/re.svg"),
        require("../assets/img/hiragana/ro.svg"),
        require("../assets/img/hiragana/wa.svg"),
        require("../assets/img/hiragana/wo.svg"),
        require("../assets/img/hiragana/n.svg"),
      ],
      player: new Audio(),
      index: Math.floor(Math.random() * (1 + 45 - 0) + 0),
    };
  },
  computed: {
    ...mapState(["muted", "hidenRomaji"]),
  },
  watch: {
    hidenRomaji: function (val) {
      this.romajiChecker(val);
    },
  },
  methods: {
    playSound() {
      if (this.muted == true) {
      } else this.player.play();
    },

    nextOnePressed() {
      if (this.auto == false) this.nextOneEx();
    },

    nextOneEx(control) {
      this.index = Math.floor(Math.random() * (1 + 45 - 0) + 0);
      this.asignIndex();
      this.showAd = "hide";
      this.showAs = "";
      if (control === true) {
        setTimeout(() => {
          let autowasactive = true;
          this.showAnsEx(autowasactive);
        }, 4000);
      }
      if (this.muted == true) {
      } else this.player.play();
    },

    asignIndex() {
      this.player.src = this.hiraganaS[this.index];
      let conRomaji = document.getElementById("dinamico-romaji");
      conRomaji.innerHTML = this.hiraganaR[this.index];
    },

    showAnsPressed() {
      if (this.auto == false) this.showAnsEx();
    },

    showAnsEx(control) {
      let aux;
      aux = this.showAs;
      this.showAs = this.showAd;
      this.showAd = aux;
      if (control == true) this.progres = "model1-start";
    },
    autoPressed() {
      this.auto = !this.auto;
      // para cambiar estilo del boton
      let aux = this.pressedA;
      this.pressedA = this.emptyA;
      this.emptyA = aux;
      //intervalo
      if (this.auto == false) {
        clearInterval(this.interval);
        return false;
      }
      if (this.auto == true) {
        this.progres = "model1-end";
        let wasactivated = true;
        this.nextOneEx(wasactivated);
        this.interval = setInterval(() => {
          this.progres = "model1-end";
          this.nextOneEx(wasactivated);
        }, 6000);
      }
    },
    romajiChecker(val){
       console.log(val);
      if(val == false){
        this.showRs = "hide";
        this.showRd = "";
      } else {
        this.showRs = "";
        this.showRd = "hide";
      }
    }
  },
  
  mounted() {
    this.asignIndex();
    this.romajiChecker(this.hidenRomaji);
    
  },
  beforeUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval - 1);
  },
};
</script>