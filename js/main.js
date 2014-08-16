$(document).ready(function () {

    var itemList = LoadItem();
  //  localStorage.setItem('itemCount', itemList.length);
    localStorage.setItem('item',JSON.stringify(itemList));
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






//    var existPanel = [];
//    for (var j = 0; j < localStorage.getItem('itemCount'); j++) {
////        var item = JSON.parse(localStorage.getItem('item' + j));
//        if (notExist(item[j].category)) {
//            $('#goodsList_panel').append('<div class="panel panel-danger well well-sm " ><div class="panel-heading"><table><tr><th><h2 id="goodsList_category">'
//                    + item[j].category + '</h2></th><th><h4 class="text-right">GOODS LIST!!!</h4></th></tr></table></div>'
//                    + '<table class="table table-striped text-center" id="goodsList_table">'
//                    + '<tr id="goodsList_header"><th class="text-center">分类</th><th class="text-center">名称</th><th class="text-center">单价</th>' +
//                    '<th class="text-center">单位</th><th class="text-center">添加</th></tr>'
//                    + '<tr><td id="goodsList_category">' + item[j].category + '</td>'
//                    + '<td id="goodsList_name">' + item[j].name + '</td>'
//                    + '<td id="goodsList_price">' + item[j].price + '</td>'
//                    + '<td id="goodsList_unit">' + item[j].unit + '</td>'
//                    + '<td id="goodsList_addButton"><button type="button"class="btn btn-primary cartPlus_btn">添加 </button></td></tr>'
//                    + '</table></div>'
//            );
//            existPanel.push(item[j].category);
//        } else {
//            $('#goodsList_table').append('<tr><td id="goodsList_category">' + item[j].category + '</td>'
//                    + '<td id="goodsList_name">' + item[j].name + '</td>'
//                    + '<td id="goodsList_price">' + item[j].price + '</td>'
//                    + '<td id="goodsList_unit">' + item[j].unit + '</td>'
//                    + '<td id="goodsList_addButton"><button type="button"class="btn btn-primary cartPlus_btn">添加 </button></td></tr>'
//            );
//        }
//    }
//
//    function notExist() {
//        if (existPanel.length === 0) {
//            return true;
//        }
//        for (var k = 0; k < existPanel.length; k++) {
//            if (item[j].category === existPanel[k]) {
//                return false;
//            }
//        }
//        return true;
//    }
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

//
//function getcartList() {
//    var cartList[];
//
//}


//function cartPlusFunction() {
//
//    if (!localStorage.getItem("cartPlus")) {
//        localStorage.setItem("cartPlus", 0);
//    }
//
//    $('.cartPlus_btn').on('click', function () {
//
//        localStorage.cartPlus = parseInt(localStorage.getItem("cartPlus")) + 1;
//        $('.cartPlus_display').text(localStorage.cartPlus);
//
//    });
//
//}
//
//function cartMinusFunction() {
//
//    if (localStorage.getItem("cartPlus")) {
//        localStorage.setItem("cartMinus", localStorage.cartPlus);
//    }
//    $('.cartMinus_btn').on('click', function () {
//
//        localStorage.cartMinus = parseInt(localStorage.getItem("cartMinus")) - 1;
//        $('.cartPlus_display').text(localStorage.cartMinus);
//
//    });
//
//}
