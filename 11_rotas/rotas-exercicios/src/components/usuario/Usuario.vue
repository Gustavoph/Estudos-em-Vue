<template>
  <div class="usuario">
      <h2>Usuário</h2>
      <hr>
      <Router-view/>
      <button @click="irParaInicio()" sucesso>Voltar</button>
  </div>
</template>

<script>
export default {
    methods:{
        irParaInicio() {
            // this.$router.push({path: '/'})
            this.$router.push({name: 'inicio'})
        }
    }
}
</script>

<style>

</style>