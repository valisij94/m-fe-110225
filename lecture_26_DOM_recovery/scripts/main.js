

class Slider {

  // ссылка на родительский ДОМ-элемент
  #rootNode;
  // номер картинки, которую слайдер показывает в данный момент
  #currentImgIndex = 0;
  // массив с адресами изображений
  #imagesArray;
  // ссылка на ДОМ-элемент ленты изображений
  #imagesContainerEl;

  constructor(selector, imagesArray) {
    const parent = document.querySelector(selector);
    if (!parent) {
      throw new Error('Incorrect selector: cannot find root node!')
    }
    this.#rootNode = parent;
    this.#imagesArray = imagesArray;
    this.#init();
  }

  #movePrev() {
    let nextSlideIndex = this.#currentImgIndex - 1;
    if (nextSlideIndex < 0) {
      nextSlideIndex = this.#imagesArray.length - 1;
    }
    // меняем состояние слайдера: говорим что показываем след.слайд
    this.#currentImgIndex = nextSlideIndex;
    // синхронизируем смещение ленты с индексом того слайда, который показываем
    this.#imagesContainerEl.style.left = (-1 * this.#currentImgIndex * 100) + '%';
  }

  #moveNext() {
    let nextSlideIndex = this.#currentImgIndex + 1;
    if (nextSlideIndex >= this.#imagesArray.length ) {
      nextSlideIndex = 0;
    }
    // меняем состояние слайдера: говорим что показываем след.слайд
    this.#currentImgIndex = nextSlideIndex;
    // синхронизируем смещение ленты с индексом того слайда, который показываем
    this.#imagesContainerEl.style.left = (-1 * this.#currentImgIndex * 100) + '%';
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
    sliderViewEl.append(imagesContainerEl);
    sliderContainerEl.append(navContainerEl, sliderViewEl);
    // добавляем контейнер слайдера в родительский ДОМ-узел
    this.#rootNode.append(sliderContainerEl);
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