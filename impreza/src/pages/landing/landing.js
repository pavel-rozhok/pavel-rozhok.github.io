class Landing {
  constructor() {
    this.initHeaderSlider();
    this.initReviewsSlider();
  }

  initHeaderSlider() {
    $('.j-header-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      fade: true,
      arrows: true,
      dotsClass: 'header__slide-dots',
    });
  }

  initReviewsSlider() {
    $('.j-reviews-slider').slick({
      autoplay: true,
      arrows: false,
      dotsClass: 'reviews__slider-dots',
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
}

/* eslint-disable-next-line no-unused-vars */
const landing = new Landing();
