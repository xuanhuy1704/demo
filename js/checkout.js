let listCart = [];

function checkCart() {
  var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='));
  
  if (cookieValue) {
    listCart = JSON.parse(cookieValue.split('=')[1]);
  }
}

checkCart();
addCartToHTML();

function addCartToHTML() {
  // Xóa dữ liệu mặc định
  let listCartHTML = document.querySelector('.returnCart .list');
  listCartHTML.innerHTML = '';

  let totalQuantityHTML = document.querySelector('.totalQuantity');
  let totalPriceHTML = document.querySelector('.totalPrice');
  let totalQuantity = 0;
  let totalPrice = 0;

  // Nếu có sản phẩm trong giỏ hàng
  if (listCart) {
    listCart.forEach(product => {
      if (product) {
        let newCart = document.createElement('div');
        newCart.classList.add('item');
        newCart.innerHTML =
          `<img src="${product.image}">
          <div class="info">
              <div class="name">${product.name}</div>
              <div class="price">${product.price.toLocaleString('vi-VN')} VNĐ / 1 sản phẩm</div>
          </div>
          <div class="quantity">${product.quantity}</div>
          <div class="returnPrice">${(product.price * product.quantity).toLocaleString('vi-VN')} VNĐ</div>`;
        listCartHTML.appendChild(newCart);
        totalQuantity += product.quantity;
        totalPrice += product.price * product.quantity;
      }
    });
  }

  // Hiển thị giá trị thanh toán bằng VNĐ
  totalQuantityHTML.innerText = totalQuantity;
  totalPriceHTML.innerText = totalPrice.toLocaleString('vi-VN') + ' VNĐ';
}
// Chọn phần tử nút "Thanh Toán"
var thanhToanButton = document.querySelector('.buttonthanhtoan');

// Thêm lắng nghe sự kiện "click" cho nút "Thanh Toán"
thanhToanButton.addEventListener('click', function() {
  // Hiển thị thông báo đã thanh toán thành công
  alert('Đã thanh toán thành công!');
  
  // Chuyển hướng người dùng về trang chủ
  window.location.href = 'trangchu.html'; // Thay 'https://example.com' bằng URL của trang chủ thực tế
});