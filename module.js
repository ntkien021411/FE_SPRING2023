
//Change img product when clicked 
// var big_img = document.querySelector('.big_img');
var sub_img = document.querySelectorAll('.sub_img');
sub_img.forEach(function (item) {
    item.onclick = function () {
        var big_img = item.parentElement.parentElement.previousElementSibling;
        big_img.src = item.src;
        var parentE = item.parentElement.parentElement.children;
        // console.log(parentE);
        Array.from(parentE).forEach((item) => {
            item.classList.remove('border_product');
        });
        item.parentElement.classList.add('border_product');

    };
});


//Hiện subproduct 
var product_cate = document.querySelector('.product_cate');
var sub_product = document.querySelector('.sub_product');
// console.log(product_cate,sub_product);
product_cate.onmouseover = function (e) {
    sub_product.style.display = 'block';
    // console.log(event.target);
};
sub_product.onmouseover = function () {
    sub_product.style.display = 'block';
};
sub_product.onmouseout = function () {
    sub_product.style.display = 'none';
};


// const VND = new Intl.NumberFormat('vi-VN', {
//     style: 'currency',
//     currency: 'VND',
//   });
// console.log(  VND.format(10000000));