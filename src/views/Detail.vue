<script setup lang="ts">
// import { preloadImages } from "../utils/utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "scrollreveal";

let lenis;

const initSmoothScrolling = () => {
  // Instantiate the Lenis object with specified properties
  lenis = new Lenis({
    lerp: 0.15, // Lower values create a smoother scroll effect
    smoothWheel: true, // Enables smooth scrolling for mouse wheel events
  });

  // Update ScrollTrigger each time the user scrolls
  lenis.on("scroll", () => ScrollTrigger.update());

  // Define a function to run at each animation frame
  const scrollFn = (time) => {
    lenis.raf(time); // Run Lenis' requestAnimationFrame method
    requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
  };
  // Start the animation frame loop
  requestAnimationFrame(scrollFn);
};

// PReloader faker
setTimeout(() => {
  initSmoothScrolling();
  ScrollReveal().reveal(".grid_item", {
    delay: 200,
    duration: 1000,
    origin: "left",
    scale: 1.3,
    distance: "50px",
    cleanup: true,
  });
}, 500);
/*
preloadImages(".grid_item-img-inner").then(() => {
  initSmoothScrolling();
  scroll();
  document.body.classList.remove("loading");
});
*/
</script>

<template>
  <div
    class="grid grid-cols-8 w-full relative mt-10vh mx-auto p-8 gap-8 text-gray-100 px-8 self-end h-[85vh]"
  >
    <div class="col-span-1 text-right text-8xl col-start-2 col-end-5 self-end">
      He who watches
    </div>
    <div class="align-baseline col-start-5 col-end-8 self-end">
      <i>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias,
        eum eos itaque repellendus distinctio cupiditate cum ipsa inventore
        maxime obcaecati laboriosam officiis nulla consectetur voluptas, dolores
        ab. Praesentium, porro?
      </i>
      <div class="mt-4">
        <b class="text-lg text-gray-200">Tags</b>
        <div>
          <a href="#" class="text-gray-500 hover:text-gray-400 capitalize"
            >skull</a
          >,
          <a href="#" class="text-gray-500 hover:text-gray-400 capitalize"
            >hellish</a
          >,
          <a href="#" class="text-gray-500 hover:text-gray-400 capitalize"
            >hell</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-8 w-full relative mt-10vh mx-auto mb-50vh p-8">
    <figure
      class="grid_item relative grid-rows-1 col-start-1 col-end-6 m-0 block my-3"
    >
      <div
        class="grid_item-img relative grid overflow-hidden place-items-center w-full h-auto aspect-4/2-5"
      >
        <div
          class="grid_item-img-inner w-full h-full bg-center bg-cover relative"
          style="
            background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/4f45e0179041531.64f256eb150dc.png);
          "
        ></div>
      </div>
    </figure>
    <figure
      class="grid_item relative row-start-2 row-end-auto col-start-4 col-end-9 m-0 block my-3"
    >
      <div
        class="grid_item-img relative grid overflow-hidden place-items-center w-full h-auto aspect-4/2-5"
      >
        <div
          class="grid_item-img-inner w-full h-full bg-center bg-cover relative"
          style="
            background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/16a85b179041531.64f256eb14428.png);
          "
        ></div>
      </div>
    </figure>
  </div>
</template>

<style scoped></style>
