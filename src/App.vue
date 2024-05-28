<template>
  <main>
    <Nav />
    <router-view />
  </main>
</template>

<script setup>
import Nav from "./components/Nav.vue";
import { useTitle } from "@vueuse/core";

const title = useTitle();
console.log(title.value); // print current title
title.value = "@Clinic-HOME"; // change current title
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
