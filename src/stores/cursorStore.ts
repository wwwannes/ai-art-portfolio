import { defineStore } from "pinia";

export const useCursorStore = defineStore("cursor", {
  state: () => ({
    xPosCircle: 0,
    yPosCircle: 0,
    hoverClasses: "opacity-70 w-5 h-5",
  }),
  actions: {
    setCursorBehaviour(e: MouseEvent) {
      this.xPosCircle = e.clientX - 10;
      this.yPosCircle = e.clientY - 10;
    },
    setCursorHoverBehaviour(cursor: Element) {
      this.hoverClasses = "opacity-90 w-7 h-7";
    },
    resetCursorHoverBehaviour(cursor: Element) {
      this.hoverClasses = "opacity-70 w-5 h-5";
    },
  },
  getters: {
    circlePosition(): string {
      return `transform: translateX(${this.xPosCircle}px) translateY(${this.yPosCircle}px); `;
    },
    cicrleHover(): string {
      return this.hoverClasses;
    },
  },
});
