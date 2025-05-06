function renderProduct(product){
  const productCard = document.createElement('div');
  productCard.classList.add('productCard');

  productCard.addEventListener('click', () => {
      productCard.classList.toggle('productCardHighlighted');
  });

  const productTitle = document.createElement('h3');
  productTitle.textContent = product.title;
  productTitle.classList.add('productTitle');

  const productPrice = document.createElement('p');
  productPrice.textContent = product.price;
  productPrice.classList.add('productPrice');

  const productCategory = document.createElement('p');
  productCategory.textContent = product.category;
  productCategory.classList.add('productCategory');

  const productImg = document.createElement('img');
  productImg.src = !!product.images[0] ? product.images[0] : '';
  productImg.classList.add('productImg');

  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;
  productDescription.classList.add('productDescription');

  productCard.append(productImg, productTitle, productPrice, productCategory, productDescription);

  return productCard;
}

const productsContainerEl = document.querySelector('.productsContainer');
const selectEl = document.createElement('select');

const loaderEl = document.createElement('div');
loaderEl.classList.add('loader');
loaderEl.textContent = 'Please wait!';

productsContainerEl.before(selectEl);

selectEl.before(loaderEl);
loaderEl.style.display = 'none';

fetch('https://dummyjson.com/products/categories')
  .then( response => {
    if (!response.ok) {
      console.log('Something went wrong! HTTP:' + response.status );
    } else {
      return response.json();
    }
  })
  .then( data => {
    const placeholderOptionEl = document.createElement('option');
    placeholderOptionEl.disabled = 'true';
    placeholderOptionEl.selected = 'true';
    placeholderOptionEl.textContent = 'Select something';
    selectEl.append(placeholderOptionEl);
    data.forEach( (category) => {
      const optionEl = document.createElement('option');
      optionEl.textContent = category.name;
      optionEl.value = category.slug;
      selectEl.append(optionEl);
    });
  });

function getProducts(categoryName) {
  let url = `https://dummyjson.com/products`;
  if (!!categoryName) {
    url += `/category/${categoryName}`;
  }
  loaderEl.style.display = 'block';
  fetch(url)
    .then( response => response.json() )
    .then( data => {
      productsContainerEl.innerHTML = '';
      data.products.forEach( product => {
        const productEl = renderProduct(product);
        productsContainerEl.append(productEl);
      });
    })
    .finally( () => {
      loaderEl.style.display = 'none';
    });
}

getProducts()

selectEl.addEventListener( 'change', (event) => {
  getProducts(event.target.value);
});