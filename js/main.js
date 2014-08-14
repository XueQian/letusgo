$(document).ready(function () {
    cartPlusFunction();
    cartMinusFunction();




});
function cartPlusFunction(){
    if (!localStorage.getItem("cartPlus")) {
        localStorage.setItem("cartPlus", 0);
    }

    $('.cartPlus_btn').on('click', function () {

        localStorage.cartPlus = parseInt(localStorage.getItem("cartPlus")) + 1;
        $('.cartPlus_display').text(localStorage.cartPlus);

    });

}

function cartMinusFunction(){
    if (!localStorage.getItem("cartMinus")) {
        localStorage.setItem("cartMinus", 0);
    }

    $('.cartMinus_btn').on('click', function () {

        localStorage.cartMinus = parseInt(localStorage.getItem("cartPlus")) - 1;
        $('.cartPlus_display').text(localStorage.cartMinus);

    });

}
