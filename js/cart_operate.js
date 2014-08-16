$(document).ready(function () {

    var cartItemList = [];
    if(localStorage.getItem('cartItem') === null) {
        localStorage.setItem('cartItem', JSON.stringify(cartItemList));
    }
    var cartItem = JSON.parse(localStorage.getItem('cartItem'));

   
});









