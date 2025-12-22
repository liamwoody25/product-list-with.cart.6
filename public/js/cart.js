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

  if (result > 10 ){
    result = 0
  }

  output.innerText = result;

  quanBtn[i].style.display = 'block'
  imageCard[i].style.border = '2px solid #C73B0F'
  imgCard[i].style.border = '2px solid #C73B0F'
  cardImage[i].style.border = '2px solid #C73B0F'
}



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




for(let i = 0; i < cartSubmit.length; i++){
    cartSubmit[i].addEventListener('click', function(){
      addItemToCart(i)
  })
}

for (let i = 0 ; i < insertBtn.length; i++) {
  insertBtn[i].addEventListener('click', function(){
    addItemToCart(i)
  })
}

for(let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function(){
    removeItemFromCart(i)
  })
}
