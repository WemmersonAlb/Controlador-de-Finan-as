<script>
import { /*RouterLink,*/ RouterView } from 'vue-router'
//import BaseSpinner from './components/BaseSpinner.vue'
export default{
  components:{
    //RouterLink,
    RouterView
  }
}
</script>

<template>
  <v-app class="base-app">
    <RouterView/>
  </v-app>
</template>

<style scoped lang="scss">
.base-app{
  background-color: var(--darker);
}
</style>
