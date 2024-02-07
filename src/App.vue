<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex justify-center">
      <RouterLink to="/about">about</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
