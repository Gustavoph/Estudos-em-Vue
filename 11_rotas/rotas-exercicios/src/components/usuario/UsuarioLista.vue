<template>
  <div class="usuario-lista">
      <h3>Lista de Usuários</h3>
      <ul class="lista">
        <router-link to="/usuario/1" tag="li">
          <li class="item-lista">Usuário 1</li>
        </router-link>
        <router-link to="/usuario/2" tag="li">
          <li class="item-lista">Usuário 2</li>
        </router-link>
        <router-link to="/usuario/3" tag="li">
          <li class="item-lista">Usuário 3</li>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>