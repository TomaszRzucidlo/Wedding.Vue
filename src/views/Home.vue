<template>
  <div>
    <div class="home">
      <img id="image1" src="../assets/photo1.png" />
      <img id="image2" src="../assets/photo2.png" />
      <div @click="slide()" class="prev"></div>
      <div @click="slide()" class="next"></div>
      <div class="image-text">
        <p>John & Sarah</p>
      </div>
    </div>
    <div class="ceremony-content row m-0 justify-content-around">
      <div class="col-6 col-xl-4">
        <img src="../assets/man.jpg" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante lorem, consectetur et imperdiet ac, dapibus sed eros. Aliquam erat volutpat. Suspendisse potenti. Aenean ac est pharetra, varius quam sit amet, venenatis est.</p>
      </div>
      <div class="col-6 col-xl-4">
        <img src="../assets/woman.jpg" />
        <p>Vestibulum in cursus sapien, nec congue urna. Pellentesque imperdiet auctor pretium. Fusce gravida quam lectus, in venenatis arcu tempus a. Sed vehicula, augue eu cursus luctus, lorem arcu pellentesque neque, in sagittis ipsum enim eu massa.</p>
      </div>
    </div>
    <div class="timer">
      <countdown :time="2 * 24 * 60 * 60 * 1000">
        <template
          slot-scope="props"
        >{{ props.days }} dzień, {{ props.hours }} godzin, {{ props.minutes }} minut, {{ props.seconds }} sekund.</template>
      </countdown>
    </div>
    <div class="parallax row m-0 justify-content-end">
      <Attend />
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Attend from "../components/Attend";
export default {
  name: "Home",
  components: {Attend},
  data() {
    return {
      image: 1,
      imageone: "",
      imagetwo: "",
      code:"bb1ae82f"
    };
  },
  methods: {
    slide() {
      this.imageone = "#image" + this.image;
      if (this.image == 2) this.image = this.image - 2;
      this.imagetwo = "#image" + (this.image + 1);
      this.image = this.image + 1;
      window.$(this.imageone).fadeTo(1000, 0);
      window.$(this.imagetwo).fadeTo(1000, 1);
    },
    resize() {
      window.$(".home").height(window.$("#image1").height());
      window.$(".prev").css("top", window.$("#image1").height() / 2);
      window.$(".next").css("top", window.$("#image1").height() / 2);
      window
        .$(".image-text p")
        .css("top", window.$("#image1").height() * (4 / 5));
      window
        .$(".image-text p")
        .css("font-size", window.$("#image1").height() * (1 / 10));
    },
  },
  mounted: function() {
    this.interval = setInterval(() => this.slide(), 4000);

    setTimeout(() => {
      window.$(".image-text p").fadeTo(1000, 1);
    }, 1200);

    window.addEventListener("resize", this.resize);

    window.$(document).ready(function() {
      window.$(".home").height(window.$("#image1").height());
      window.$(".prev").css("top", window.$("#image1").height() / 2);
      window.$(".next").css("top", window.$("#image1").height() / 2);
      window
        .$(".image-text p")
        .css("top", window.$("#image1").height() * (4 / 5));
      window
        .$(".image-text p")
        .css("font-size", window.$("#image1").height() * (1 / 10));
    });
  }
};
</script>
<style scoped>
.home {
  height: max-content;
}
.home img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
}
#image1 {
  opacity: 1;
}
#image2 {
  opacity: 0;
}
.prev {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0px;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 0px solid white;
  border-bottom: 50px solid transparent;
  transition: all 0.3s;
}
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0px;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 0px solid white;
  border-bottom: 50px solid transparent;
  transition: all 0.3s;
}
.home:hover .prev {
  border-left: 50px solid white;
}
.home:hover .next {
  border-right: 50px solid white;
}
.image-text p {
  position: absolute;
  top: 85%;
  right: 20%;
  z-index: 1;
  font-size: 55px;
  color: white;
  display: none;
  animation: example 0.4s 1 ease-in-out;
}
@keyframes example {
  0% {
    right: 10%;
    opacity: 0;
  }
  100% {
    right: 20%;
    opacity: 1;
  }
}
.ceremony-content {
  background-color: white;
  padding: 50px 0px;
}
.ceremony-content img {
  width: 50%;
  border-radius: 50%;
}
.ceremony-content p {
  margin-top: 15px;
  font-size: 13px;
}
.timer {
  background-color: rgb(255, 151, 151);
  padding: 50px 0px;
}
.timer span {
  font-size: 35px;
  color: white;
}
.parallax {
  background-image: url("../assets/attending_card.jpg");
  height: 600px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding-top:50px;
  padding-right: 50px;
}
.footer{
  height: 152px;
  background-color: rgb(171, 171, 171);
}
</style>