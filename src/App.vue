<template>
  <div id="app">
    <div v-if="loader" class="heartload"></div>
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  },
    data() {
    return {
     loader : false
    };
  },
};
</script>
<style>
@font-face {
  font-family: Lemonada;
  src: url(assets/font/Lemonada-Light.ttf);
}
#app {
  font-family: Lemonada;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.heartload{
  position:fixed;
  top:50%;
  left:50%;
  width: 30px;
  height: 30px;
  background: red;
  transform: rotate(45deg);
  animation: example 1.0s infinite ease-in-out;
  z-index: 1;
}
.heartload:before{
  content: '';
  width: 100%;
  height: 100%;
  top:-50%;
  left: 0;
  position:fixed;
  background: red;
  border-radius: 50%;
}
.heartload:after{
  content: '';
  width: 100%;
  height: 100%;
  top:0;
  left: -50%;
  position:fixed;
  background: red;
  border-radius: 50%;
}
@keyframes example {
  0% {width: 30px;height: 30px;}
  50% {width: 20px;height: 20px; transform: rotate(200deg)}
  100% {width: 30px;height: 30px; transform: rotate(400deg)}
}
</style>
