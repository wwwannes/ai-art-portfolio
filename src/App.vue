<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader";
</script>

<template>
  <TheHeader />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped></style>
