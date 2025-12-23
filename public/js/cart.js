const cartSubmit = document.querySelectorAll('.cart-btn');
const quanBtn = document.querySelectorAll('.quantity-content');
const imageCard = document.querySelectorAll('.product-image');
const imgCard = document.querySelectorAll('.product-image-tablet');
const cardImage = document.querySelectorAll('.product-image-desktop');
const insertBtn = document.querySelectorAll('.increase-btn');
const deleteBtn =  document.querySelectorAll('.decrease-btn');



// this function sends the item to the cart
function addItemToCart(i){
  const output = document.querySelectorAll('#output')[i];
  const result = Number(output.innerText) + 1;
  let productItem = localStorage.getItem('addItemToCart');
  
  productItem = parseInt(productItem);

  if (result > 10 ){
    result = 0
  }

  output.innerText = result;

  quanBtn[i].style.display = 'block'
  imageCard[i].style.border = '2px solid #C73B0F'
  imgCard[i].style.border = '2px solid #C73B0F'
  cardImage[i].style.border = '2px solid #C73B0F'


  if (productItem){
    localStorage.setItem('addItemToCart', productItem + 1)
    document.getElementById('cart-output').textContent = productItem + 1;
  } else {
    localStorage.setItem('addItemToCart', 1)
    document.getElementById('cart-output').textContent = 1;
  }
  
}

function updateCart(){
  let productItem = localStorage.getItem('addItemToCart')

  if (productItem) {
    document.getElementById('cart-ouput').textContent = productItem
  }
}

updateCart()



// this function removes an item from the cart
function removeItemFromCart(i) {
  const output = document.querySelectorAll('#output')[i];
  const result = Number(output.innerText) - 1;


  if (result < 0 ) {
    result = 0
  }

  output.innerText = result

  if (result === 0 ) {
    quanBtn[i].style.display = 'none';
    imageCard[i].style.border = 'none'
    imgCard[i].style.border = 'none'
    cardImage[i].style.border = 'none'
  }
}




// this event listener is for the cart button when it is clicked
for(let i = 0; i < cartSubmit.length; i++){
    cartSubmit[i].addEventListener('click', function(){
      addItemToCart(i)
  })
}


// this event listener is for the increase button when it is clicked it makes the number go up
for (let i = 0 ; i < insertBtn.length; i++) {
  insertBtn[i].addEventListener('click', function(){
    addItemToCart(i)
  })
}


// this event listener is for the decrease button when it is clicked it makes the number go down
for(let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function(){
    removeItemFromCart(i)
  })
}
