<template>
  <main>
    <Nav />
    <router-view />
  </main>
</template>

<script setup>
import Nav from "./components/Nav.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
