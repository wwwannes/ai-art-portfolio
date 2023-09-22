import { Fx8 } from "./ImageHoverEffect";

export class DoubleImageEffect {
  DOM = {
    el: null,
  };
  effects = {
    8: "Fx8",
  };
  classMap = { Fx8 };

  constructor(DOM_el) {
    this.DOM.el = DOM_el;
    this.effectName = "Fx8";
    this.effect = new this.classMap[this.effectName](this.DOM.el);
    this.initEvents();
  }
  initEvents() {
    this.DOM.el.addEventListener("mouseenter", () => {
      this.effect.mouseenter();
    });

    this.DOM.el.addEventListener("mouseleave", () => {
      this.effect.mouseleave();
    });
  }
}
