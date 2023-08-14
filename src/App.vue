<script setup>
//Navbar Component
import NavBar from './components/Navbar.vue';
</script>

<!-- Main code wrapper in <template> -->
<template>
  <header>
    <NavBar />
  </header>

  <main>
    <!-- Contains all pages -->
    <RouterView />
  </main>
</template>