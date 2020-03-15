<template>
      <div class="attend-card col-9 col-md-7 col-lg-5 col-xl-3">
        <div class="card-title"><p>Czy chcesz wziąść udział?</p></div>
        <div class="card-content">
          <img src="../assets/ribbon.png" alt="">
          <form @submit.prevent="attend(code)">
          <input class="form-control" v-model="code" type="text">
          <input type="submit" value="Dołącz">
          </form>
        </div>
      </div>
</template>

<script>
import { LOGIN } from "@/store/actions.type";
export default {
  name: 'Attend',
  props: {
    msg: String
  },
  methods:{
    attend(code){
        this.$store
            .dispatch(LOGIN, { code })
            .then(() => this.$router.push({ name: "About" }));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.attend-card{
  height: 500px;
  padding: 0px;
  max-width: 400px;
}
.card-title{
  position: relative;
  background-color: white;
  height: 100px;
  width: 100%;
  margin-bottom:0px;
}
.card-title p{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
}
.card-content{
  background-color: rgb(255, 251, 236);
  height: 400px;
  width: 100%;
  padding-top:20px;
  padding-left: 40px;
  padding-right: 40px;
}
.card-content input[type=text] {
  border-radius: 0px;
  border:none;
  border-bottom: 2px solid rgb(255, 230, 202);
    margin-bottom: 30px;
  transition: 0.5s;
}
.card-content input[type=text]:focus{
  box-shadow: none;
  border-bottom: 2px solid rgb(238, 199, 154);
}
.card-content input[type=submit] {
  border-radius: 0px;
  border:none;
  border-bottom: 2px solid rgb(255, 230, 202);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 3px 30px;
  margin-bottom: 30px;
  transition: 0.5s;
  background-color: rgb(255, 230, 202);
}
.card-content input[type=submit]:hover {
  padding: 3px 35px;
  background-color: rgb(255, 217, 175);
}
.card-content input[type=submit]:focus{
  box-shadow: none;
  border-bottom: 2px solid rgb(238, 199, 154);
}
.card-content img{
  width:150px;
  margin-bottom: 80px;
}
</style>
