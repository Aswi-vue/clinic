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
@import "@/assets/styles/index.scss";
</style>
