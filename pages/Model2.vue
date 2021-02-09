<template>
  
  <div class="model2-div-cont-part1">
    <div class="model2-div-cont-beforeadver">

      <div class="titulo-principal">
        <h1 :class="'title dm_t1_'+darkmode">Práctica de Hiragana</h1>
      </div>

      <div class="model2-div-cont-modelo1 ">
        <div class="model2-div-cont-info">
          <div class="model2-modelo-head">
            <h3 :class="'model2-modelo-title model2-text dm_t1_'+darkmode">Modelo A</h3>
            <img class="model2-stylus-icon" :src="stylusmoodelIcon" alt="">
          </div>
          
            <ul :class="'modelo1-modelo-description model2-text-description dm_t1_'+darkmode">
              <li>Practica de la escritura</li><br>
              <li>Campo de escritura en pantalla</li><br>
              <li>Con Stylus mouse o touch </li><br>
              <strong>Enfatiza la escritura</strong>
            </ul>
          
        </div>
        <div class="model2-div-cont-configs">
          <div :class="'model2-boton-practica-auto' + this.emptyA+' dm_border_'+darkmode" v-on:click="autoPressed">
            <strong>
              Start Auto
            </strong>
          </div>
          <!-- <div
        :class="'model2-boton-practica-mute opt' + this.mute"
        v-on:click="mute = !mute"
      >
        Mute
      </div> -->
        </div>
      </div>

      <div class="model2-div-cont-separator">
        <hr class="model2-separator" />
      </div>

      <div class="model2-div-cont-practice">
        <div class="model2-div-cont-canvas">
          <div class="model2_marca_deagua"></div>
          <canvas :class="'canvasIndid dm_border_'+darkmode" id="model2-mycanvas" :width="canvas_with" :height="canvas_height"
            style="min-width: 120px; min-height: 120px;">
          
            </canvas>
          <div :class="'model2-boton-clear-canvas dm_b2_'+darkmode+' dm_t2_'+darkmode" @click="clearCanvas">Clear</div>
        </div>
        <div class="model2-div-cont-practice-content">
          <div class="model2-div-cont-play">

            <img :class="'model2-icono-play dm_b2_'+darkmode" v-on:click="playSound" :src="iconPlay" alt="icono-play">

            <h3 :class="'model2-reproducir dm_t1_'+darkmode">Pronunciación</h3>
          </div>
          <div class="model2-div-cont-practica-conromaji">
            <!-- <div :class="'model2-boton-practica-conromaji ' + this.emptyR" v-on:click="pRomaji">
              Ocultar Romaji
            </div> -->
            <div class="model2-div-cont-practica">
              <div class="model2-texto-practica" :class="this.showRs">
                <h3 :class="'model2-texto-practica-static dm_t1_'+darkmode">abc</h3>
              </div>
              <div class="model2-texto-practica-dinamic" :class="this.showRd">
                <h3 :class="'dm_t1_'+darkmode" id="dinamico-romaji"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="model2-div-cont-separator">
        <hr class="model2-separator" />
      </div>

      <div class="model2-div-cont-answer">
        <div class="model2-div-cont-show">
          <div :class="'model2-texto-show dm_b2_'+darkmode+' dm_t2_'+darkmode" v-on:click="showAnsPressed">
            Mostrar respuesta
          </div>
          <div :class="'model2-icono-show ' + this.showAs">
            <h3 :class="'model-icono-noshow dm_t1_'+darkmode">?</h3>
          </div>
          <div :class="'model2-div-imagen-answear ' + this.showAd">
            <img :class="'model2-imagen-answear dm_b3_'+darkmode" :src="this.hiraganaC[index]" alt="letra-a-hiragana" />
          </div>
        </div>

        <div :class="'model2-div-cont-progresbar dm_pbo_'+darkmode">
          <span :class="progres+' dm_pbi_'+darkmode"></span>
        </div>

        <div :class="'model2-boton-next dm_b2_'+darkmode" v-on:click="nextOnePressed">
          <p :class="'model2-boton-next-text dm_t1_'+darkmode">Next</p>
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
  name: "model2",
  components: {
    Navbar,
    Cfooter,
  },
  head(){
      return{
        title: 'Modelo de practica A',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Practica de escritura con stylus, lápiz digital, mouse o touch pad, de los caracteres del hiragana en la practica del japones'
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
      showRd: "",
      showRs: "hide",
      showAd: "hide",
      showAs: "",
      pressedR: "model2-pressed",
      emptyR: "",
      pressedA: "model2-pressed",
      emptyA: "",
      auto: false,
      progres: "model2-start",
      mute: false,
      interval: Number,
      canvas_with: 220,
      canvas_height: 120,
      iconPlay: require("../assets/img/icons/play.svg"),
      stylusmoodelIcon: require("../assets/img/icons/quill-drawing-a-line.svg"),
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
      player: null,
      index: Math.floor(Math.random() * (1 + 45 - 0) + 0),
      xm : 0,
      ym : 0,
      isDrawingm : false,
      canvasm : null,
      isPenm : false,
      cm : null,
      canvasm :null
    };
  },
  computed: {
    ...mapState(["muted", "hidenRomaji", "darkmode"]),
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
      this.clearCanvas();
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
      this.player = new Audio();
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
      if (control == true) this.progres = "model2-start";
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
        this.progres = "model2-end";
        let wasactivated = true;
        this.nextOneEx(wasactivated);
        this.interval = setInterval(() => {
          this.progres = "model2-end";
          this.nextOneEx(wasactivated);
        }, 6000);
      }
    },
    clearCanvas() {
      let c = document.getElementById("model2-mycanvas");
      let ctx2 = c.getContext("2d");
      ctx2.clearRect(0, 0, this.canvas_with, this.canvas_height);
    },
    beginDrawingm(e){
      if (e.pointerType === "pen") {
          this.isPenm = true;
        } else {
          this.isPenm = false;
        }
        this.xm = e.offsetX;
        this.ym = e.offsetY;
        this.isDrawingm = true;
    },
    keepDrawingm(e){
      if (this.isDrawingm === true) {
          this.drawLinem(this.xm, this.ym, e.offsetX, e.offsetY);
          this.xm = e.offsetX;
          this.ym = e.offsetY;
        }
    },
    stopDrawingm(e){
      if (this.isDrawingm === true) {
          this.drawLinem(this.xm, this.ym, e.offsetX, e.offsetY);
          this.xm = 0;
          this.ym = 0;
          this.isDrawingm = false;
        }
    },
    drawLinem(x1, y1, x2, y2){
      let ctx = this.canvasm;
        ctx.beginPath();
        ctx.strokeStyle = "#022E40";
        if(this.darkmode == true) ctx.strokeStyle = "#D93B3B";
        ctx.lineWidth = 4;
        ctx.lineCap = "bevel";
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    },
    listenerGeneral() {
      //---- PArte de prueba para modificacion hacia metodaos
      this.cm = document.getElementById("model2-mycanvas");
      this.canvasm = this.cm.getContext("2d");
      this.cm.addEventListener("mousedown", this.beginDrawingm);
      this.cm.addEventListener("mousemove", this.keepDrawingm);
      this.cm.addEventListener("mouseup", this.stopDrawingm);
      this.cm.addEventListener("pointerdown", this.beginDrawingm, {
        capture: true,
      });
      this.cm.addEventListener("pointermove", this.keepDrawingm);
      this.cm.addEventListener("pointerup", this.stopDrawingm);
      this.cm.addEventListener(
        "touchstart",
        function (e) {
          if (this.isPenm) {
            e.preventDefault();
            beginDrawing(TouchEvent);
          }
          e.preventDefault();
        },
        {
          passive: false,
          capture: false,
        }
      );
      //---- final parte de prueba
      /*
      let x = 0;
      let y = 0;
      let isDrawing = false;
      let canvas = null;
      let isPen = false;
      let c = document.getElementById("model2-mycanvas");
      canvas = c.getContext("2d");
      c.addEventListener("mousedown", beginDrawing);
      c.addEventListener("mousemove", keepDrawing);
      c.addEventListener("mouseup", stopDrawing);
      c.addEventListener("pointerdown", beginDrawing, {
        capture: true,
      });
      c.addEventListener("pointermove", keepDrawing);
      c.addEventListener("pointerup", stopDrawing);
      c.addEventListener(
        "touchstart",
        function (e) {
          if (isPen) {
            e.preventDefault();
            beginDrawing(TouchEvent);
          }
          e.preventDefault();
        },
        {
          passive: false,
          capture: false,
        }
      );
      //   ------------  EXECUTIONERS ------------------------
      function drawLine(x1, y1, x2, y2) {
        let ctx = canvas;
        ctx.beginPath();
        ctx.strokeStyle = "#022E40";
        ctx.lineWidth = 4;
        ctx.lineCap = "bevel";
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
      }

      function beginDrawing(e) {
        if (e.pointerType === "pen") {
          isPen = true;
        } else {
          isPen = false;
        }
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
      }

      function keepDrawing(e) {
        if (isDrawing === true) {
          drawLine(x, y, e.offsetX, e.offsetY);
          x = e.offsetX;
          y = e.offsetY;
        }
      }

      function stopDrawing(e) {
        if (isDrawing === true) {
          drawLine(x, y, e.offsetX, e.offsetY);
          x = 0;
          y = 0;
          isDrawing = false;
        }
      }
      */
    },
    romajiChecker(val){
      if (val == false) {
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
    this.listenerGeneral();
    this.romajiChecker(this.hidenRomaji);
    
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