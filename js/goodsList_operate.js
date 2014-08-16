$(document).ready(function () {

    var itemList = LoadItem();
    //  localStorage.setItem('itemCount', itemList.length);
    localStorage.setItem('item', JSON.stringify(itemList));
    var item = JSON.parse(localStorage.getItem('item'));
    for (var m = 0; m < itemList.length; m++) {
        // var item = JSON.parse(localStorage.getItem('item' + m));
        $('#goodsList_table').append('<tr><td id="goodsList_category">' + item[m].category + '</td>'
                + '<td id="goodsList_name">' + item[m].name + '</td>'
                + '<td id="goodsList_price">' + item[m].price + '</td>'
                + '<td id="goodsList_unit">' + item[m].unit + '</td>'
                + '<td id="goodsList_addButton"><button type="button"class="btn btn-primary cartPlus_btn">添加 </button></td></tr>'
        );

    }
    localStorage.setItem('amounts', 0);
    $('.cartPlus_display').text(localStorage.amounts);
    $('.cartPlus_btn').on('click', function () {
        //var items = JSON.parse(localStorage.getItem(item[i].barcode));
        var items = item.barcode;
        console.log(items);
        var cartItem = new CartItem(items, 1);
        localStorage.setItem('cartItem' + localStorage.amounts, JSON.stringify(cartItem));
        localStorage.amounts = Number(localStorage.amounts) + 1;
        $('.cartPlus_display').text(localStorage.amounts);
        console.log(cartItem);
    });
});









