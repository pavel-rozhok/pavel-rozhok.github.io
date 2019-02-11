(() => {
  $(window).scroll(() => {
    $('.navbar').toggleClass('navbar--scroll', $(window).scrollTop() > 50);
  });
})();

class Navbar {
  constructor($navbar) {
    this.$hamburger = $navbar.find('.j-navbar-hamburger');

    this.bindEvents();
  }

  bindEvents() {
    this.$hamburger.on('click', this.toggleNavbar.bind(this));
  }

  toggleNavbar() {
    this.$hamburger.toggleClass('is-active');
    $('.navbar__links').toggleClass('navbar__links--active');
  }
}

/* eslint-disable-next-line no-unused-vars */
const navbar = new Navbar($('#j-navbar'));
