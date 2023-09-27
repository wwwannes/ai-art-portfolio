<script setup lang="ts">
import { onMounted } from "vue";
import { useCursorStore } from "@/stores/cursorStore";
import { gsap } from "gsap";

const store = useCursorStore();

onMounted(() => {
  document.addEventListener("mousemove", (e) => {
    store.setCursorBehaviour(e);
  });

  const gridItems = document.querySelectorAll("a");
  gridItems.forEach((el) => {
    el.addEventListener("mouseenter", () => store.setCursorHoverBehaviour());
    el.addEventListener("mouseleave", () => store.resetCursorHoverBehaviour());
  });
});
</script>

<template>
  <div
    class="cursor fixed left-0 top-0 pointer-events-none select-none bg-gray-100 rounded-full z-50"
    :class="store.cicrleHover"
    :style="store.circlePosition"
  ></div>
</template>

<style scoped></style>
