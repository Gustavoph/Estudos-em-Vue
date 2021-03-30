<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <p><strong>Código: </strong>{{ id }}</p>
      <router-link :to="{name: 'editarUsuario', params: { id }, hash: '#rodape'}"
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
   beforeRouteEnter(to, from, next){
     //console.log('Rota dentro do componente')
     const autenticado = true

     if(autenticado){
       next()
     }else{
       next(false)
     }
   }
}
</script>

<style>

</style>