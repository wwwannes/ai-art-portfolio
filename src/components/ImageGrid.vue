<script setup lang="ts">
import router from "@/router";
import { getProjects } from "@/use/useProjectsQuery";

let lenis;

// Initialize Lenis smooth scrolling
const initSmoothScrolling = () => {
  lenis = new Lenis({
    smooth: true,
  });

  const scrollFn = (time) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };

  requestAnimationFrame(scrollFn);
};

const { data, isLoading } = getProjects();
const toDetailPage = (name: string) => {
  const slug = name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  router.push({ name: "project-detail", params: { name: slug } });
};
</script>

<template>
  <div class="grid grid-cols-2">
    <div
      class="flex-1 grid items-center relative"
      v-for="project in data"
      :key="project.id"
      @click="toDetailPage(project.title)"
    >
      <h3
        class="absolute bottom-0 z-10 p-5 text-xl bg-gradient-to-t from-black w-full"
      >
        {{ project.title }}
      </h3>
      <div
        class="grid aspect-4/2-5 w-full relative overflow-hidden cursor-pointer brightness-75 hover:brightness-100 double"
        style="
          background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/4f45e0179041531.64f256eb150dc.png);
        "
      ></div>
    </div>
  </div>
</template>

<style>
.double__img {
  grid-area: 1 / 1 / -1 / -1;
  background: url(../img/1.jpg) no-repeat 50% 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
