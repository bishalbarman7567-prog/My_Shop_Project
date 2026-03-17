<script>

// cart array
let cart = [];

// load cart from localStorage if available
if(localStorage.getItem("cart")){
cart = JSON.parse(localStorage.getItem("cart"));
}

// update cart count
function updateCartCount(){
document.getElementById("cart-count").innerText = cart.length;
}

// run once on page load
updateCartCount();

// select all add to cart buttons
let buttons = document.querySelectorAll(".add-cart");

buttons.forEach(function(button){

button.addEventListener("click", function(){

let productCard = button.parentElement;

let productName = productCard.querySelector("h3").innerText;
let productPrice = productCard.querySelector("p").innerText;
let productImage = productCard.querySelector("img").src;

let product = {
name: productName,
price: productPrice,
image: productImage
};

// add to cart
cart.push(product);

// save cart
localStorage.setItem("cart", JSON.stringify(cart));

// update UI
updateCartCount();

alert(productName + " added to cart!");

});

});

</script>