<template>
  <div class="usuario-editar">
      <h3>Usuario Editar</h3>
      <p><strong>Código: </strong>{{ id }}</p>
      <router-link tag="button" primario :to="`/usuario/${id}`">Detalhes</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data(){
    return {
      //id_rota: this.route.params.id
    }
  },
  methods: {
    // voltar() {
    //     console.log(id_rota)
    // }
  }
}
</script>

<style>

</style>