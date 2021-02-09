<template>
  <div class="model3-div-cont-part1">
    <div class="model3-div-cont-beforeadver">
      <div class="titulo-principal">
        <h1 :class="'title dm_t1_'+darkmode">Práctica de Hiragana</h1>
      </div>

      <div class="model3-div-cont-modelo1">
        <div class="model3-div-cont-info">
          <div class="model3-modelo-head">
            <h3 :class="'model3-modelo-title model3-text dm_t1_'+darkmode">Modelo B</h3>
            <img class="model3-icon-target" :src="targetmodelIcon" alt="" />
          </div>

          <ul :class="'modelo1-modelo-description model3-text-description dm_t1_'+darkmode">
            <li>Selecciona el caracter correcto</li>
            <br />
            <li>3 opciones para elegir</li>
            <br />
            <li>Compruebe su respuesta</li>
            <br />
          </ul>
        </div>
        <div class="model3-div-cont-configs">
          <div
            :class="'model3-boton-practica-auto' + this.emptyA+' dm_border_'+darkmode"
            v-on:click="autoPressed"
          >
            <strong> Start Auto </strong>
          </div>
          <!-- <div :class="'model3-boton-practica-mute opt' + this.mute" v-on:click="mute = !mute">
            Mute
          </div> -->
        </div>
      </div>

      <div class="model3-div-cont-separator">
        <hr class="model3-separator" />
      </div>

      <div class="model3-div-cont-practice">
        <div class="model3-div-cont-practice-content">
          <div class="model3-div-cont-practica-conromaji">
            <!--  <div :class="'model3-boton-practica-conromaji ' + this.emptyR" v-on:click="pRomaji">
              Ocultar Romaji
            </div> -->
            <div class="model3-div-cont-practica">
              <div class="model3-texto-practica" :class="this.showRs">
                <h3 :class="'model3-texto-practica-static dm_t1_'+darkmode">abc</h3>
              </div>
              <div class="model3-texto-practica-dinamic" :class="this.showRd">
                <h3 :class="'dm_t1_'+darkmode" id="dinamico-romaji"></h3>
              </div>
            </div>
          </div>
          <div class="model3-div-cont-play">
            <img
              :class="'model3-icono-play dm_b2_'+darkmode"
              v-on:click="playSound"
              :src="iconPlay"
              alt="icono-play"
            />
            <h3 :class="'model3-reproducir dm_t1_'+darkmode">Pronunciación</h3>
          </div>
        </div>

        <div class="model3-div-cont-selectorchar">
         
          <img
            @click="theselected2(2)"
            :class="
              'model3-div-cont-char char-select-' +
              computedChoosenChar2 +
              ' char-right-' +
              computedAnswer2
            "
            :src="this.hiraganaC[charsOpt[2]]"
            alt="none"
          />
          <img
            @click="theselected1(1)"
            :class="
              'model3-div-cont-char char-select-' +
              computedChoosenChar1 +
              ' char-right-' +
              computedAnswer1 
            "
            :src="this.hiraganaC[charsOpt[1]]"
            alt="none"
          />
          <img
            @click="theselected0(0)"
            :class="
              'model3-div-cont-char char-select-' +
              computedChoosenChar0 +
              ' char-right-' +
              computedAnswer0
            "
            :src="this.hiraganaC[charsOpt[0]]"
            alt="none"
          />
        </div>
      </div>

      <div class="model3-div-cont-separator">
        <hr class="model3-separator" />
      </div>

      <div class="model3-div-cont-answer">
        <div class="model3-div-cont-show">
          <div :class="'model3-texto-show dm_b2_'+darkmode+' dm_t2_'+darkmode" v-on:click="showAnsPressed">
            Mostrar respuesta
          </div>
          <div :class="'model3-icono-show ' + this.showAs">
            <h3 :class="'model-icono-noshow dm_t1_'+darkmode">?</h3>
          </div>
          <div :class="'model3-div-imagen-answear ' + this.showAd+' dm_b2_'+darkmode">
            <img
              class="model3-imagen-answear"
              :src="charinAns"
              alt="letra-a-hiragana"
            />
          </div>
        </div>

        <div :class="'model3-div-cont-progresbar dm_pbo_'+darkmode">
          <span :class="progres+' dm_pbi_'+darkmode"></span>
        </div>

        <div :class="'model3-boton-next dm_b2_'+darkmode" v-on:click="nextOnePressed">
          <p :class="'model3-boton-next-text dm_t1_'+darkmode">Next</p>
        </div>

        <div class="model3-div-cont-progress-task">
          <div
            :class="'model3_progress_task_box char-right-' + ProgresTasks[0] + ' dm_border_'+darkmode"
          ></div>
          <div
            :class="'model3_progress_task_box char-right-' + ProgresTasks[1] + ' dm_border_'+darkmode"
          ></div>
          <div
            :class="'model3_progress_task_box char-right-' + ProgresTasks[2] + ' dm_border_'+darkmode"
          ></div>
          <div
            :class="'model3_progress_task_box char-right-' + ProgresTasks[3] + ' dm_border_'+darkmode"
          ></div>
          <div
            :class="'model3_progress_task_box char-right-' + ProgresTasks[4] + ' dm_border_'+darkmode"
          ></div>
          <div
            :class="'model3_progress_task_box char-right-' + ProgresTasks[5] + ' dm_border_'+darkmode"
          ></div>
          <div
            :class="'model3_progress_task_box char-right-' + ProgresTasks[6] + ' dm_border_'+darkmode"
          ></div>
          <div
            :class="'model3_progress_task_box char-right-' + ProgresTasks[7] + ' dm_border_'+darkmode"
          ></div>
          <div
            :class="'model3_progress_task_box char-right-' + ProgresTasks[8] + ' dm_border_'+darkmode"
          ></div>
          <div
            :class="'model3_progress_task_box char-right-' + ProgresTasks[9] + ' dm_border_'+darkmode"
          ></div>
        </div>

        <div
          :class="'model3_final_message model3_div_congrats_' + showGrats[0]+' dm_border_'+darkmode"
        >
          <h6>¡¡Bien Hecho!!</h6>
        </div>
        <div :class="'model3_final_message model3_div_nograts_' + showGrats[1] +' dm_border_'+darkmode">
          <h6>Mas práctica! :D</h6>
        </div>
      </div>
    </div>

    <!-- <div class="home-div-cont-advertaisment">Advertisment</div> -->
  </div>
</template>

<script>
//imports
import Navbar from "../components/Navbar.vue";
import Cfooter from "../components/Footer.vue";
import { mapState } from "vuex";

export default {
  name: "model3",
  components: {
    Navbar,
    Cfooter,
  },
  head(){
      return{
        title: 'Modelo de practica B',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Practica de selección del ítem correcto con 3 opciones, ayuda a la memorización visual del hiragana en la practica del japones'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'japones, hiragana, práctica, practicar, aprender japones, aprender hiragana, memorizar hiragana'
          },
          {
            hid: 'owner',
            name: 'owner',
            content: 'Rath'
          },
          {
            hid: 'robots',
            name: 'robots',
            content: 'index,follow'
          },
          {
            hid: 'theme-color',
            name: 'theme-color',
            content: '#022E40'
          },
          {
            hid: 'apple-mobile-web-app-capable',
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
          },
          {
            hid: 'apple-mobile-web-app-status-bar-style',
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'yes'
          },
        ],
        htmlAttrs:{
          lang: 'es',
        }
      }
    },
  data() {
    return {
      charinAns:null,
      test: "shit",
      test1: "shit",
      test0: "shit",
      resresponse0:'shit',
      resresponse1:'shit',
      resresponse2:'shit',
      numerodeBuenas: 0,
      numerodeMalas: 0,
      showGrats: ["false", "false"],
      charRight: Number,
      answear: ["false", "false", "false"],
      selected: Number,
      select: ["false", "false", "false"],
      showRd: "",
      showRs: "hide",
      showAd: "hide",
      showAs: "",
      pressedR: "model3-pressed",
      emptyR: "",
      pressedA: "model3-pressed",
      emptyA: "",
      auto: false,
      progres: "model3-start",
      mute: false,
      interval: Number,
      canvas_with: 120,
      canvas_height: 120,
      charsOpt: [],
      ProgresTasks: [],
      indexProgresTasks: 0,
      iconPlay: require("../assets/img/icons/play.svg"),
      targetmodelIcon: require("../assets/img/icons/target.svg"),
      hiraganaS: [
        require("../assets/audio/hiragana/a.mp3"),
        require("../assets/audio/hiragana/i.mp3"),
        require("../assets/audio/hiragana/u.mp3"),
        require("../assets/audio/hiragana/e.mp3"),
        require("../assets/audio/hiragana/o.mp3"),
        require("../assets/audio/hiragana/ka.mp3"),
        require("../assets/audio/hiragana/ki.mp3"),
        require("../assets/audio/hiragana/ku.mp3"),
        require("../assets/audio/hiragana/ke.mp3"),
        require("../assets/audio/hiragana/ko.mp3"),
        require("../assets/audio/hiragana/sa.mp3"),
        require("../assets/audio/hiragana/shi.mp3"),
        require("../assets/audio/hiragana/su.mp3"),
        require("../assets/audio/hiragana/se.mp3"),
        require("../assets/audio/hiragana/so.mp3"),
        require("../assets/audio/hiragana/ta.mp3"),
        require("../assets/audio/hiragana/chi.mp3"),
        require("../assets/audio/hiragana/tsu.mp3"),
        require("../assets/audio/hiragana/te.mp3"),
        require("../assets/audio/hiragana/to.mp3"),
        require("../assets/audio/hiragana/na.mp3"),
        require("../assets/audio/hiragana/ni.mp3"),
        require("../assets/audio/hiragana/nu.mp3"),
        require("../assets/audio/hiragana/ne.mp3"),
        require("../assets/audio/hiragana/no.mp3"),
        require("../assets/audio/hiragana/ha.mp3"),
        require("../assets/audio/hiragana/hi.mp3"),
        require("../assets/audio/hiragana/fu.mp3"),
        require("../assets/audio/hiragana/he.mp3"),
        require("../assets/audio/hiragana/ho.mp3"),
        require("../assets/audio/hiragana/ma.mp3"),
        require("../assets/audio/hiragana/mi.mp3"),
        require("../assets/audio/hiragana/mu.mp3"),
        require("../assets/audio/hiragana/me.mp3"),
        require("../assets/audio/hiragana/mo.mp3"),
        require("../assets/audio/hiragana/ia.mp3"),
        require("../assets/audio/hiragana/iu.mp3"),
        require("../assets/audio/hiragana/io.mp3"),
        require("../assets/audio/hiragana/ra.mp3"),
        require("../assets/audio/hiragana/ri.mp3"),
        require("../assets/audio/hiragana/ru.mp3"),
        require("../assets/audio/hiragana/re.mp3"),
        require("../assets/audio/hiragana/ro.mp3"),
        require("../assets/audio/hiragana/wa.mp3"),
        require("../assets/audio/hiragana/wo.mp3"),
        require("../assets/audio/hiragana/n.mp3"),
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
        "Ta",
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
      player: null,
      index: Math.floor(Math.random() * (1 + 45 - 0) + 0),
    };
  },
  computed: {
    ...mapState(["muted", "hidenRomaji", "darkmode"]),
    
    //--- Caracteres elegidos
    computedChoosenChar0: function(){
      return this.test0;
    },
    computedChoosenChar1: function(){
      return this.test1
    },
    computedChoosenChar2: function(){
      return this.test
    },
    //----- Respuestas
    computedAnswer0: function(){
      return this.resresponse0;
    },
    computedAnswer1: function(){
      return this.resresponse1;
    },
    computedAnswer2: function(){
      return this.resresponse2;
    },
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
      this.insertChars();
      this.test = 'shit';
      this.test1 = 'shit';
      this.test0 = 'shit';
      this.resresponse2 = 'shit';
      this.resresponse1 = 'shit';
      this.resresponse0 = 'shit';
      this.selected = null;
      this.showAd = "hide";
      this.showAs = "";
      if (control === true) {
        setTimeout(() => {
          let autowasactive = true;
          this.showAnsEx(autowasactive);
        }, 2000);
      }
      if (this.muted == true) {
      } else this.player.play();
    },

    asignIndex() {
      this.player = new Audio();
      this.player.src = this.hiraganaS[this.index];
      let conRomaji = document.getElementById("dinamico-romaji");
      conRomaji.innerHTML = this.hiraganaR[this.index];
      this.charinAns = this.hiraganaC[this.index];
    },

    showAnsPressed() {
      if (this.auto == false) this.showAnsEx();
    },

    progressTaskFunction(control) {
      if (control == true && this.auto == true) {
        this.ProgresTasks[this.indexProgresTasks] = "true";
        this.indexProgresTasks++;
        this.numerodeBuenas++;
      }
      if (control == false && this.auto == true) {
        this.ProgresTasks[this.indexProgresTasks] = "wrong";
        this.indexProgresTasks++;
      }
    },

    showAnsEx(control) {
      let aux;
      aux = this.showAs;
      this.showAs = this.showAd;
      this.showAd = aux;
      if (control == true) this.progres = "model3-start";
      if (this.selected == this.charRight) {
        this.answear[this.selected] = "true";
        if(this.selected == 0) this.resresponse0 = this.answear[this.selected];
        if(this.selected == 1) this.resresponse1 = this.answear[this.selected];
        if(this.selected == 2) this.resresponse2 = this.answear[this.selected];
        this.progressTaskFunction(true);
      } else {
        this.answear[this.selected] = "wrong";
        if(this.selected == 0) this.resresponse0 = this.answear[this.selected];
        if(this.selected == 1) this.resresponse1 = this.answear[this.selected];
        if(this.selected == 2) this.resresponse2 = this.answear[this.selected];
        this.progressTaskFunction(false);
      }
      //---  copmprobador de resultados
      if (this.indexProgresTasks == 10) {
        if (this.numerodeBuenas >= 7) {
          this.showGrats[0] = "right";
          this.showGrats[1] = "false";
        }
        if (this.numerodeBuenas < 7) {
          this.showGrats[1] = "wrong";
          this.showGrats[0] = "false";
        }
        if (this.auto == true) this.autoPressed();
      }
    },
    autoPressed() {
      this.auto = !this.auto;
      // verifica si hubo ronda activa antes
      if (this.indexProgresTasks == 10 && this.auto == true) {
        for (let i = 0; i < this.ProgresTasks.length; i++) {
          this.ProgresTasks[i] = "false";
        }
        this.indexProgresTasks = 0;
        this.numerodeBuenas = 0;
        this.showGrats = ["false", "false"];
      }
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
        this.progres = "model3-end";
        let wasactivated = true;
        this.nextOneEx(wasactivated);
        this.interval = setInterval(() => {
          this.progres = "model3-end";
          this.nextOneEx(wasactivated);
        }, 4000);
      }
    },
    insertChars() {

      let indexchar1 = Math.floor(Math.random() * (1 + 2 - 0) + 0);
      let indexchar2;
      let indexchar3;
      do {
        indexchar3 = Math.floor(Math.random() * (1 + 2 - 0) + 0);
        indexchar2 = Math.floor(Math.random() * (1 + 2 - 0) + 0);
      } while (
        indexchar1 == indexchar2 ||
        indexchar1 == indexchar3 ||
        indexchar2 == indexchar3
      );
      this.charsOpt[indexchar1] = this.index;
      this.charRight = indexchar1;
      do {
        this.charsOpt[indexchar2] = Math.floor(
          Math.random() * (1 + 45 - 0) + 0
        );
        this.charsOpt[indexchar3] = Math.floor(
          Math.random() * (1 + 45 - 0) + 0
        );
      } while (
        this.charsOpt[indexchar1] == this.charsOpt[indexchar2] ||
        this.charsOpt[indexchar2] == this.charsOpt[indexchar3] ||
        this.charsOpt[indexchar1] == this.charsOpt[indexchar3]
      );
    },
    romajiChecker(val) {
      if (val == false) {
        this.showRs = "hide";
        this.showRd = "";
      } else {
        this.showRs = "";
        this.showRd = "hide";
      }
    },
    theselected2(payload) {
      this.test0 = "shit";
      this.test1 = "shit";
      this.test = "true";
      this.selected = payload;
    },
    theselected1(payload) {
      this.test0 = "shit";
      this.test = "shit";
      this.test1 = "true";
      this.selected = payload;
    },
    theselected0(payload) {
      this.test1 = "shit";
      this.test = "shit";
      this.test0 = "true";
      this.selected = payload;
    },
  },
  mounted() {
    this.asignIndex();
    this.romajiChecker(this.hidenRomaji);
  },
  beforeMount() {
    this.insertChars();
  },
  beforeUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval - 1);
  },
  beforeDestroy() {
    clearInterval(this.interval);
    clearInterval(this.interval - 1);
  },
};
</script>