<template>
  <div class="usuario-editar">
      <h3>Usuario Editar</h3>
      <hr>
      <p><strong>Código: </strong> {{ id }}</p>

      <div id="rodape">
        <h3>
          Curso Vue
        </h3>
      </div>
  </div>
</template>

<script>
export default {
    props: ['id']
}
</script>

<style>
  #rodape{
    margin-top: 1000px;
  }
</style>