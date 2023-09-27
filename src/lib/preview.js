export class Preview {
  // DOM elements
  DOM = {
    // main element (.preview)
    el: null,
    // image wrap element (.preview_img-wrap)
    imageWrap: null,
    // image element (.preview_img)
    image: null,
    // image inner element (.preview_img-inner)
    imageInner: null,
    // title element (.preview_title)
    title: null,
    // inner title elements (.oh_inner)
    titleInner: null,
    // description element (.preview_desc)
    description: null,
  };

  /**
   * Constructor.
   * @param {Element} DOM_el - main element (.preview)
   */
  constructor(DOM_el, content_el) {
    this.DOM.el = DOM_el;
    this.DOM.imageWrap = this.DOM.el.querySelector(".preview_img-wrap");
    this.DOM.image = this.DOM.imageWrap.querySelector(".preview_img");
    this.DOM.imageInner = this.DOM.image.querySelector(".preview_img-inner");
  }
}
