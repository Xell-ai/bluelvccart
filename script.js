const swiper = new Swiper('.slider-content', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  freeMode: true,
  freeModeMomentum: true,
  freeModeMomentumVelocityRatio: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
  // Small phones
  0: {
    slidesPerView: 1,
  },
  // Large phones
  480: {
    slidesPerView: 2,
  },
  // Tablets
  768: {
    slidesPerView: 2,
  },
  // Small laptops
  1024: {
    slidesPerView: 4,
  },
  // Desktops and above
  1440: {
    slidesPerView: 4,
  },
}
});


let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // scrolling down → hide navbar
    header.style.top = "-100px"; 
  } else {
    // scrolling up → show navbar
    header.style.top = "0";
  }
  lastScrollY = window.scrollY;
});



const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener('click', () => {
 // Toggle mobile menu visibility
    document.body.classList.toggle('show-mobile-menu');
});
// Close the mobile menu when the close button is clicked
menuCloseButton.addEventListener('click', () => menuOpenButton.click ());












const carousel = {
    index: 0,
    container: document.querySelector('.carousel-slide'),
    images: document.querySelectorAll('.carousel-slide img'),
    
    getImgWidth() {
        return this.images[0].clientWidth;
    },

    next() {
        this.index = (this.index + 1) % this.images.length;
        this.update();
    },

    prev() {
        this.index = (this.index - 1 + this.images.length) % this.images.length;
        this.update();
    },

    update() {
        this.container.style.transform = `translateX(-${this.index * this.getImgWidth()}px)`;
    },

    init() {
        document.querySelector('.next-btn').addEventListener('click', () => this.next());
        document.querySelector('.prev-btn').addEventListener('click', () => this.prev());

        window.addEventListener('resize', () => this.update());
    }
};

// Initialize carousel
carousel.init();




