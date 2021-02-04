<template>
  <div class="about-div-cont-padre">
    <div :class="'about-div-cont-info dm_t1_'+darkmode">
      <h1>Acerca de nosotros</h1>
      <div class="about-div-cont-mision space-text">
        <h2>Misión</h2>
        <p>
          El aprendizaje del idioma Japones presenta una dificultad extra muy peculiar de pocos idiomas. <br>
          Es el reto de aprender todo un diferente sistema de escritura junto con sus reglas gramaticales como de caligrafía. Esto requiere de la primordial memorización de los caracteres pertinentes. <br>
          Comenzando con el hiragana, que es donde nuestra plataforma se enfoca.  
        </p>
        <br>
        <ul>
          <li>Nuestra plataforma ofrece la disponibilidad de práctica con un stylus, lápiz electrónico, o cualquier otro dispositivo con este fin</li><br>
          <li>Se refuerza la escritura tradicional de los caracteres mediante un modelo de práctica simple
          </li><br>
          <li>Se pretende reforzar la asociación de la pronunciación estrictamente con los caracteres del Hiragana</li><br>
          <li>Dispone de la reproducción automática para mayor comodidad. <br>
          Con 4 segundos para escribir el caracter y durante 2 segundos se presentara la respuesta correcta</li><br>
          <li>Ofrecemos diferentes modelos de memorización para incrementar la eficiencia de cada uno, donde se recomienda utilizarlos de manera interpolada</li>
        </ul>
      </div>
      <div class="about-div-cont-vision space-text">
        <h2>Visión</h2>
        <p>
          La practica constante es quien nos proporcionará el aprendizaje más eficiente de este complejo idioma. <br>
          Pondremos a disposición nuestra plataforma para la práctica del Hirgana, sus reglas complejas, el Katakana, y otros modelos de memorización. 
          <br>
          La constante actualización de la plataforma pretende garantizar el correcto funcionamiento y disposición de nuevas funcionalidades para la práctica.
        </p>
      </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Cfooter from "../components/Footer.vue";
import { mapState } from "vuex";

export default {
  name:"About",
  components:{
    Navbar,
    Cfooter
  },
  computed: {
    ...mapState(["muted", "darkmode"]),
  },
}
</script>
