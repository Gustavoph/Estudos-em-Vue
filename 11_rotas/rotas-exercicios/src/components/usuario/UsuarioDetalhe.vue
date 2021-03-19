<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <hr>
      <p><strong>Código: </strong> {{ id }}</p>
      <!-- :to="`/usuario/${ this.$route.params.id}/editar`"  -->
      <router-link 
      tag="button" primario
        :to="{ name: 'editUser', params: { id: id }}"
      >

        Editar
      </router-link>
  </div>
</template>

<script>
export default {
    props: ['id'],
    // data(){
    //     return {
    //         id: this.$route.params.id 
    //     }
    // },
    // watch:{
    //     $route(to, from){
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>

</style>