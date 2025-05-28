

class Slider {

  // ссылка на родительский ДОМ-элемент
  #rootNode;
  // номер картинки, которую слайдер показывает в данный момент
  #currentImgIndex = 0;
  // массив с адресами изображений
  #imagesArray;
  // ссылка на ДОМ-элемент ленты изображений
  #imagesContainerEl;
  // ссылка на ДОМ-элемент контейнера точек навигации
  #dotsContainerEl;
  // ссылка на интервал автопрокрутки
  #autoPlayInterval;

  constructor(selector, imagesArray) {
    const parent = document.querySelector(selector);
    if (!parent) {
      throw new Error('Incorrect selector: cannot find root node!')
    }
    this.#rootNode = parent;
    this.#imagesArray = imagesArray;
    this.#init();
  }

  #goToSlide(slideNum) {
    let targetSlideIndex = slideNum;
    if (slideNum < 0) {
      targetSlideIndex = this.#imagesArray.length - 1;
    }
    if (slideNum >= this.#imagesArray.length ) {
      targetSlideIndex = 0;
    }
    // синхронизируем блок навигации
    const oldDot = this.#dotsContainerEl.querySelector(`span[data-img-index="${this.#currentImgIndex}"]`);
    const newDot = this.#dotsContainerEl.querySelector(`span[data-img-index="${targetSlideIndex}"]`);
    oldDot.classList.remove('sliderActiveDot');
    newDot.classList.add('sliderActiveDot');
    // меняем состояние слайдера: говорим что показываем целевой слайд
    this.#currentImgIndex = targetSlideIndex;
    // синхронизируем смещение ленты с индексом того слайда, который показываем
    this.#imagesContainerEl.style.left = (-1 * this.#currentImgIndex * 100) + '%';
  }

  #movePrev() {
    this.#goToSlide(this.#currentImgIndex - 1)
  }

  #moveNext() {
    this.#goToSlide(this.#currentImgIndex + 1)
  }

  #startAutoPlay() {
    this.#autoPlayInterval = setInterval(this.#moveNext.bind(this), 2000);
  }

  #init() {
    // создание ДОМ-элемента - контейнера слайдера целиком
    const sliderContainerEl = document.createElement('div');
    sliderContainerEl.classList.add('sliderContainer');
    // создание контейнера для кнопок навигации
    const navContainerEl = document.createElement('div');
    navContainerEl.classList.add('navigationContainer');
    // создание контейнера-перископа
    const sliderViewEl = document.createElement('div');
    sliderViewEl.classList.add('sliderView');
    // создание контейнера для ленты изображений
    const imagesContainerEl = document.createElement('div');
    imagesContainerEl.classList.add('imagesContainer');
    this.#imagesContainerEl = imagesContainerEl;
    // создание контейнера для точек навигации
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dotsContainer');
    // создание массива для точек навигации
    const dotsArray = this.#imagesArray.map( (img, idx) => {
      const point = document.createElement('span');
      point.classList.add('sliderDot');
      if (idx === 0) {
        point.classList.add('sliderActiveDot');
      }
      point.dataset.imgIndex = idx;
      return point;
    });
    dotsContainer.addEventListener( 'click', event => {
      if (event.target.nodeName !== 'SPAN') return;
      const targetIndex = event.target.dataset.imgIndex;
      this.#goToSlide(+targetIndex);
    });
    // запоминаем ссылку на контейнер навигации в приватное свойство класса
    this.#dotsContainerEl = dotsContainer;
    dotsContainer.append( ...dotsArray );

    // создание картинок, и добавление их в контейнер
    this.#imagesArray.forEach( imgData => {
      const imgEl = document.createElement('img');
      imgEl.classList.add('sliderImg');
      imgEl.src = imgData;
      imagesContainerEl.append(imgEl);
    });
    // добавляем кнопки в блок навигации
    const btnPrev = document.createElement('button');
    btnPrev.classList.add('sliderNavButton');
    btnPrev.textContent = 'Prev';
    // привязываем контекст явно, чтобы избежать утери контекста при передаче метода
    // в addEventListener
    btnPrev.addEventListener('click', this.#movePrev.bind(this));
    const btnNext = document.createElement('button');
    btnNext.classList.add('sliderNavButton');
    btnNext.textContent = 'Next';
    btnNext.addEventListener('click', this.#moveNext.bind(this));
    navContainerEl.append(btnPrev, btnNext);
    // собираем все воедино
    sliderViewEl.append(navContainerEl, imagesContainerEl);
    sliderContainerEl.append(sliderViewEl, dotsContainer);
    // добавляем контейнер слайдера в родительский ДОМ-узел
    this.#rootNode.append(sliderContainerEl);
    // запускаем автопрокрутку
    this.#startAutoPlay();
    this.#rootNode.addEventListener('mouseover', () => {
      clearInterval(this.#autoPlayInterval);
    });
    this.#rootNode.addEventListener('mouseout', () => {
      this.#startAutoPlay();
    });
  }
}


// Пример использования слайдера

const dataSource = [
  'https://images.prom.ua/1029691327_w600_h600_labrador-retriver.jpg',
  'https://www.happypet.care/_next/image?url=https%3A%2F%2Fhappypetproduction.s3.ap-south-1.amazonaws.com%2FbreedFiles%2Fdog%2F64d6461c7712a1493d6bc279%2FgalleryImages%2Flarge_file_1725051198278.webp&w=1080&q=75',
  'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=532,height=532,fit=cover/animal/breed/dog/adult/66fd0ed8598bc632838841.jpg'];

const sliderEl = new Slider('.dogsSlider', dataSource);

/**
 *
 * <div class="sliderContainer">
 *  <div class="navigationContainer">...</div>
 *  <div class="sliderView">
 *    <div class="imagesContainer">
 *      <img class="sliderImg" ... />
 *      <img class="sliderImg" ... />
 *      ....
 *    </div>
 *  </div>
 *  <div class="dotsContainer">...</div>
 * </div>
 */