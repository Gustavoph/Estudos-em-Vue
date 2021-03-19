<template>
  <div id="app">
    <h1>Rotas com VueRouter</h1>
    <Router-view name="menu"></Router-view>
    <transition enter-active-class="animated rubberBand" leave-active-class="animated rollOut">
      <Router-view />
    </transition>
  </div>
</template>

<script>
//import Menu from './components/template/Menu.vue'
export default {
  //components: { Menu }
};
</script>


<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
