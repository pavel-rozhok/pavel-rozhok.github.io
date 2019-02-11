class Squirell {
  constructor() {
    this.initCounter();
    this.bindEvents();
  }

  bindEvents() {
    $(window).on('scroll', this.checkWindowPosition.bind(this));
  }

  checkWindowPosition() {
    const $counterSection = $('.j-counter-section');
    const counterPosition = $counterSection.offset().top;
    const counterHeight = $counterSection.height();
    const windowPosition = $(window).scrollTop();

    if (counterPosition < windowPosition || (counterHeight + counterPosition) > windowPosition) {
      this.initCounterProgress();
    }
  }

  initCounterProgress() {
    $('.j-counter-wrapper').each((index, item) => {
      const $wrapper = $(item);
      const $number = $wrapper.find('.j-counter-number');
      const $counterLine = $wrapper.find('.j-counter-line');
      const countTo = $number.attr('data-count');

      $({ countNum: $number.text() }).animate({
        countNum: countTo,
      },
      {
        duration: 1500,
        easing: 'linear',
        step() {
          const count = Math.floor(this.countNum);

          $counterLine.css('width', `${count}%`);
          $number.text(count);
        },
        complete() {
          $counterLine.css('width', `${this.countNum}%`);
          $number.text(this.countNum);
        },
      });
    });
  }

  initCounter() {
    const $counter = $('.j-counter');
    const countTo = $counter.attr('data-count');

    $({ countNum: $counter.text() }).animate({
      countNum: countTo,
    },
    {
      duration: 1500,
      easing: 'linear',
      step() {
        const count = Math.floor(this.countNum);

        $counter.text(count);
      },
      complete() {
        $counter.text(this.countNum);
      },
    });
  }
}

/* eslint-disable-next-line no-unused-vars */
const squirell = new Squirell();
