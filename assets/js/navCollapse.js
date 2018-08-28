
// class NavbarCollapse {
//   constructor() {
//     this.init();
//     this.toggleMenu();
//   }
//   init() {
//     this.hambIcon = document.querySelector('nav  .nav-content .btn-nav .box');
//     this.menu = document.querySelector('#header .nav-collapse');
//   }

//   toggleMenu() {
//     let clicker = 1;
//     this.hambIcon.addEventListener('click', () => {
//       if (clicker % 2 === 0) {
//         this.menu.style.marginLeft = '-200px';
//       }else {
//         this.menu.style.marginLeft = 0;
//       }
//       clicker += 1;
//       console.log(clicker);
//     });
//   }
// }

// const navbarCollapse = new NavbarCollapse();

$(document).ready(()=>{
  const hamburger = $('.btn-nav .box');
  const menu = $('.nav-collapse');
  const close =$('.nav-collapse i');

  hamburger.click(()=>{
    $('.title').toggleClass('blur')
    $('.nav-content img').toggleClass('blur');
    menu.slideToggle();
    hamburger.fadeToggle();
  });
  close.click(()=>{
    menu.slideToggle();
    $('.title').toggleClass('blur');
    $('.nav-content img').toggleClass('blur');
    hamburger.fadeToggle();
  });
});