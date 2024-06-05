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
  },
  mounted(){
    try {
      console.log('Firebase App:', this.$firebase);  // Verifique se o Firebase está corretamente inicializado
      console.log('Firebase Config:', this.$firebase.options);  // Verifique a configuração do Firebase
    } catch (error) {
      console.error('Erro ao inicializar o Firebase:', error);
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
.base-app{
  background-color: var(--darker);
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
