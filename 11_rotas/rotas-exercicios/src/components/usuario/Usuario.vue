<template>
  <div class="usuario">
      <h2>Usuario</h2>
      <hr>
      <router-view />
      <button sucesso @click="irParaHome">Voltar</button>
  </div>
</template>

<script>
export default {
    methods: {
        irParaHome() {
            this.$router.push({ path: '/'})
        }
    },
}
</script>

<style>

</style>