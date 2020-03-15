<template>
    <div id="nav">
      <router-link to="/">About Us</router-link>
      <router-link to="/about">Events</router-link>
      <router-link to="/about">Guests</router-link>
      <router-link to="/about">Photos</router-link>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
  methods:{
    handleScroll () {
         if(window.$(window).scrollTop() === 0) {
           window.$("#nav").removeClass("nav-scroll");
           window.$("#nav a").css("color", 'white');
          }
          else{
           window.$("#nav").addClass("nav-scroll");
                      window.$("#nav a").css("color", 'black');
          }
    }
  },
  mounted: function() { 
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 30px;
  z-index: 5;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: white;
  margin: 10px;
}

#nav a:hover {
  text-decoration: none;
  color: #bf9230;
}

#nav a.router-link-exact-active {
  color:rgb(233, 233, 233);
}
.nav-scroll{
  background-color: white;
  animation: nav-anime 0.7s 1 ease-in;
}
@keyframes nav-anime {
  0% {height: 0px;opacity: 0.3}
  100% {height: 84px; opacity:1}
}
</style>
