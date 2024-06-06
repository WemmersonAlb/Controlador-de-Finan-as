<script>
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
export default {
  data(){
    return{
      loginForm: false,
      email:null,
      senha:null,
      loading:false,
      rules:{
        required: value => !!value ||  'Campo ausente.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'E-mail inválido.'
        },
      }
    }
  },
  methods:{
    async fazerLogin(){
      if(!this.loginForm) return
      this.loading = true
      setTimeout(()=>(this.loading = false), 1500);
      console.log(`form: email: ${this.email}  senha: ${this.senha}`)

      const { email, senha } = this;
      try {
        const res = await signInWithEmailAndPassword(auth, email, senha);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<template>
  <main>
    <v-card title="Boas vindas!" subtitle="Faça seu login" class="loginContainer mx-auto px-6 py-8">
      <v-form v-model="loginForm" @submit.prevent="fazerLogin">

        <v-text-field
          type="email"
          v-model="email"
          label="E-mail"
          class="input"
          clearable
          :readonly="loading"
          :rules="[rules.required, rules.email]">
        </v-text-field>

        <v-text-field
          type="password"
          v-model="senha"
          label="Password"
          class="input"
          :readonly="loading"
          :rules="[rules.required]"
          clearable
          placeholder="Digite sua senha">
        </v-text-field>

        <v-btn
          class="mt-2 botao-primario"
          type="submit"
          block
          :disabled="!loginForm"
          :loading="loading"
          variant="elevated">
          Entrar
        </v-btn>

      </v-form>
    </v-card>
  </main>
</template>
<style lang="scss" scoped>
main{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginContainer{
  background-color: var(--lighter);
  width: 350px;
}
.input{
  margin-top: 10px;
}
</style>
