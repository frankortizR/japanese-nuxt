<template>
  <div class="drop-div-cont-drop">
    <router-link class="d-link" to="/">
      <svg class="drop-icono-home drop-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M 8 20 H 3 V 10 H 0 L 10 0 l 10 10 h -3 v 10 h -5 v -6 H 8 v 6 Z" /></svg>
      
      Inicio
    </router-link>
    <router-link class="d-link" to="/about">
      <svg class="drop-icono-about drop-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M 2.93 17.07 A 10 10 0 1 1 17.07 2.93 A 10 10 0 0 1 2.93 17.07 Z M 9 11 v 4 h 2 V 9 H 9 v 2 Z m 0 -6 v 2 h 2 V 5 H 9 Z" /></svg>
      
      Info
    </router-link>
    <div class="d-link">
      <svg class="drop-icono-opt drop-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M 20 10 a 10 10 0 1 1 -20 0 a 10 10 0 0 1 20 0 Z M 10 2 a 8 8 0 1 0 0 16 a 8 8 0 0 0 0 -16 Z m -0.7 10.54 L 5.75 9 l 1.41 -1.41 L 10 10.4 l 2.83 -2.82 L 14.24 9 L 10 13.24 l -0.7 -0.7 Z" /></svg>
      Opciones
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  
};
</script>