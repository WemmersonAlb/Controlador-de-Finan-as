<script>
//import { RouterLink, RouterView } from 'vue-router'
import BaseSpinner from './components/BaseSpinner.vue'
export default{
  data(){
    return{
      visible: false,
    }
  },
  components:{
    BaseSpinner,
    //RouterLink,
    //RouterView
  },
  methods:{
    alternarVisibilidadeSpinner(){
      this.visible = !this.visible;
    }
  }
}
</script>

<template>
  <v-app class="base-app">
    <div class="flexbox">
      <BaseSpinner class="spinner" v-show="visible"/>
      <v-btn prepend-icon="mdi-eye" @click="alternarVisibilidadeSpinner" v-show="!visible" color="indigo">Mostrar</v-btn>
      <v-btn prepend-icon="mdi-eye-off" @click="alternarVisibilidadeSpinner" v-show="visible" color="indigo">Ocultar</v-btn>
    </div>
  </v-app>
</template>

<style scoped lang="scss">
@import '../src/assets/scss/variables';
.base-app{
  background-color: $darker;
}
.flexbox{
  display: flex;
  height: 100vh;
  justify-content:center;
  align-items: center;

}
.spinner{
  display: flex;
  margin: 30px;
  z-index: 100;
  position:absolute;
}
.v-btn{
  margin-top: 150px;
}
</style>
