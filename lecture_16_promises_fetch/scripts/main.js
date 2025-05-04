function renderProduct(product){
  const productCard = document.createElement('div');
  productCard.classList.add('productCard');

  productCard.addEventListener('click', (event) => {
      productCard.classList.toggle('productCardHighlighted');
  });

  const productTitle = document.createElement('h3');
  productTitle.textContent = product.name;
  productTitle.classList.add('productTitle');

  const productPrice = document.createElement('p');
  productPrice.textContent = product.price;
  productPrice.classList.add('productPrice');

  const productCategory = document.createElement('p');
  productCategory.textContent = product.category;
  productCategory.classList.add('productCategory');

  const productImg = document.createElement('img');
  productImg.src = !!product.img ? product.img : '';
  productImg.classList.add('productImg');

  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;
  productDescription.classList.add('productDescription');

  productCard.append(productImg, productTitle, productPrice, productCategory, productDescription);

  return productCard;
}