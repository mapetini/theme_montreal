
$(document).ready(() => {
  const hamburger = $('.btn-nav .box');
  const menu = $('.nav-collapse');
  const close = $('.nav-collapse i');
  const title = $('.title');
  const logo = $('.nav-content img');

  hamburger.click(() => {
    title.toggleClass('blur')
    logo.toggleClass('blur');
    menu.slideToggle();
    hamburger.fadeToggle();
  });
  close.click(() => {
    menu.slideToggle();
    title.toggleClass('blur');
    logo.toggleClass('blur');
    hamburger.fadeToggle();
  });
});