(() => {
  $(window).scroll(() => {
    $('.scroll-to-top').toggleClass('scroll-to-top--scroll', $(window).scrollTop() > 100);
  });

  $('.scroll-to-top').on('click', (event) => {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, 800);
  });
})();
