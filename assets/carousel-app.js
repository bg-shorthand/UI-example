const carousel = ($container, images) => {
  const duration = 500;
  let currentSlide = 1;

  const image = images.map(image => `<img src="${image}"/>`);

  $container.innerHTML = `
  <div class="carousel-slides">
  <img src="${images[images.length - 1]}"/>
  ${image.join('')}
  <img src="${images[0]}"/>
  </div>
  <button class="carousel-control prev">&laquo;</button>
  <button class="carousel-control next">&raquo;</button>`;

  const $carouselSlides = document.querySelector('.carousel-slides');
  $carouselSlides.style.setProperty('--duration', duration);
  $carouselSlides.style.setProperty('--currentSlide', currentSlide);

  const $img = document.querySelector('img');

  window.addEventListener('load', () => {
    $container.style.width = $img.offsetWidth + 'px';
    $container.style.opacity = '1';
  });

  const firstSlide = 1;
  const lastSlide = images.length;

  let enableBtn = true;

  const $carouselControlNext = document.querySelector('.carousel-control.next');
  const $carouselControlPrev = document.querySelector('.carousel-control.prev');

  const durationInit = duration => {
    $carouselSlides.style.setProperty('--duration', duration);
  };
  const changeSlide = num => {
    if (enableBtn) {
      $carouselSlides.style.setProperty('--currentSlide', currentSlide += num);
      durationInit(duration);
      enableBtn = false;
    }
  };

  $carouselControlNext.addEventListener('click', () => {
    changeSlide(1);
  });

  $carouselControlPrev.addEventListener('click', () => {
    changeSlide(-1);
  });

  $carouselSlides.addEventListener('transitionend', () => {
    durationInit(0);
    if (currentSlide === lastSlide + 1) {
      currentSlide = firstSlide;
      $carouselSlides.style.setProperty('--currentSlide', currentSlide);
    } else if (currentSlide === firstSlide - 1) {
      currentSlide = lastSlide;
      $carouselSlides.style.setProperty('--currentSlide', currentSlide);
    }
    enableBtn = true;
  });
};

carousel(document.querySelector('.carousel'), [
  './movies/movie-1.jpg',
  './movies/movie-2.jpg',
  './movies/movie-3.jpg',
  './movies/movie-4.jpg'
]);