const throttle = require('lodash.throttle');

const $carousel = document.querySelector('.carousel');

const carousel = ($container, images) => {
  // Do something!
  let currentSlide = 1;

  const $frag = document.createDocumentFragment();
  const $carouselSlides = document.createElement('div');
  const $prevBtn = document.createElement('button');
  const $nextBtn = document.createElement('button');
  const $lastImg = document.createElement('img');
  const $firstImg = document.createElement('img');

  $carouselSlides.classList.add('carousel-slides');
  $prevBtn.classList.add('carousel-control', 'prev');
  $nextBtn.classList.add('carousel-control', 'next');
  $prevBtn.textContent = '«';
  $nextBtn.textContent = '»';
  $lastImg.setAttribute('src', images[images.length - 1]);
  $firstImg.setAttribute('src', images[0]);

  $frag.appendChild($carouselSlides);
  $frag.appendChild($prevBtn);
  $frag.appendChild($nextBtn);
  $carouselSlides.appendChild($lastImg);

  images.forEach(v => {
    const $img = document.createElement('img');
    $img.setAttribute('src', v);
    $carouselSlides.appendChild($img);
  });

  $carouselSlides.appendChild($firstImg);

  $container.appendChild($frag);
  $carouselSlides.style.setProperty('--currentSlide', currentSlide);

  window.addEventListener('load', () => {
    $carousel.style.width = $carouselSlides.firstElementChild.clientWidth + 'px';
    $carousel.style.opacity = '1';
  });

  $carouselSlides.style.setProperty('--duration', '500');

  $nextBtn.addEventListener('click', throttle(() => {
    currentSlide += 1;
    $carouselSlides.style.setProperty('--currentSlide', currentSlide);

    if (currentSlide === 7) {
      setTimeout(() => {
        $carouselSlides.style.transition = 'transform 0ms';
        currentSlide = 1;
        $carouselSlides.style.setProperty('--currentSlide', currentSlide);
      }, 500);
    }

    $carouselSlides.style.transition = 'transform calc(var(--duration) * 1ms) ease-out';
  }, 500));

  $prevBtn.addEventListener('click', throttle(() => {
    currentSlide -= 1;
    $carouselSlides.style.setProperty('--currentSlide', currentSlide);

    if (currentSlide === 0) {
      setTimeout(() => {
        $carouselSlides.style.transition = 'transform 0ms';
        currentSlide = 6;
        $carouselSlides.style.setProperty('--currentSlide', currentSlide);
      }, 500);
    }

    $carouselSlides.style.transition = 'transform calc(var(--duration) * 1ms) ease-out';
  }, 500));
};

carousel(document.querySelector('.carousel'), [
  'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcZQXIucIN_xRu1gyK_fb9U4zOPM7N_0uUh0zT9caSez5blf---4foEcBqrOGp5fjpLSjyfJRQc76BT1tewf1-5Go0HJWwVb5qguK2xgvel2F3rMunc132yG337r.jpg?r=449',
  'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUWABujkk_IMCnztl0EhuJjaQz7O1kpAxSVvFqpst0hCNTXygWVdyw-xFBy7xwzO7LR-TmuordV7NlZDg2jKGC9YnuKsXAEL9j28FEUS5ZtdKa_R9vOvYAIeIUA5.jpg?r=dd1',
  'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWex9f-iWrovQQkWnoA74IkLGjtkFIzpswvO0cIep2p78WCHSVKgWsh3B6yvnbhpCdifBBfI9NqF8geBUhffxNxXEwpHp7jvCoNB3ubqgVtANvhGjINSjLrzxO3v.jpg?r=c9f',
  'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWnpIDCyg-rliVC_FlI3eGe1oxm5Av006G6HBy8110kB1WKslaT5Hw9oGgDUknjbH4LHJNZuv3lL7boVd7lSDKJBo48.webp?r=f76',
  'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQWmVqG2mSMPhkWTbi0wjk99HpptvpXHpSk5Q5vZWYanLtZreY2gN_09N_8w9K-pDZ8mSsjIWKWTUP4kcadmUJug71QsW8WV1SASyuhforonZcWsQMnIZjSyx-RU.jpg?r=742',
  'https://occ-0-1007-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfRunIgRuibk6xdSBIdlJVg3r3rA3gPYCJA70qUFLC4db7nAJPL3r_15txbOjQnALfQ_WM02ejbym72r3KIoWUYTcUY.webp?r=8d0'
]);