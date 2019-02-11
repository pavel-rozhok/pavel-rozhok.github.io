class Longboard {
  constructor() {
    this.initLongboardSlider();
  }

  initLongboardSlider() {
    $('.j-longboard-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      dots: true,
      dotsClass: 'longboard__slider-dots',
    });
  }
}

/* eslint-disable-next-line no-unused-vars */
const longboard = new Longboard();
