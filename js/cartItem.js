function CartItem(item, num){
    this.item = item;
    this.num = num;
}

CartItem.prototype.smallCaculate = function() {
    return this.item.price * this.num ;
};

