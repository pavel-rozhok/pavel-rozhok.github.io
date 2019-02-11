class About {
  constructor() {
    this.initAboutSlider();
  }

  initAboutSlider() {
    $('.j-about-slider').slick({
      slidesToShow: 7,
      infinite: true,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
}

/* eslint-disable-next-line no-unused-vars */
const about = new About();
