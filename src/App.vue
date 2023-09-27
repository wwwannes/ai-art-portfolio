<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader";
import TheCursor from "@/components/TheCursor";
</script>

<template>
  <TheCursor />
  <div class="grid relative grid-cols-vertical-grid font-family-nb">
    <TheHeader />
    <div class="container">
      <RouterView />
    </div>
  </div>
  <div
    class="fixed top-0 left-0 w-full h-120vh opacity-50 pointer-events-none z-100 translate-z-0 animate-noise"
    style="background-image: url(../noise-bg.png)"
  ></div>
</template>

<style scoped></style>
