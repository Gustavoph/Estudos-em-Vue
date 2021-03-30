<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <p><strong>Código: </strong>{{ id }}</p>
      <router-link :to="{name: 'editarUsuario', params: { id }}"
        tag="button" primario>
        Editar
    </router-link>
  </div>
</template>

<script>
export default {
   props: ["id"],
   methods: {
       vaiParaEditar(){
           this.$router.push({ path: 'usuario/1/editar'})
       }
   },
}
</script>

<style>

</style>