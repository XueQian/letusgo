function LocalStorage (){
    var itemList = LoadItem();
   // localStorage.setItem('itemCount', itemList.length);
    localStorage.setItem('itemList', JSON.stringify(itemList));
   // var item = JSON.parse(localStorage.getItem('item'));

    var cartItemList = [];
    if(localStorage.getItem('cartItemList') === null) {
        localStorage.setItem('cartItemList', JSON.stringify(cartItemList));
    }
}
LocalStorage.prototype.getItemList = function () {
  return JSON.parse(localStorage.getItem('item'));
};

//LocalStorage.prototype.setCartList = function () {
//    if(localStorage.getItem('cartItem') === null) {
//        localStorage.setItem('cartItem', JSON.stringify(cartItemList));
//    }
//    return localStorage.setItem('cartItem',JSON.stringify(cartItemList));
//};
LocalStorage.property.getItemList = function (cartItemList) {
    return JSON.parse(localStorage.getItem('cartItemList'));
};