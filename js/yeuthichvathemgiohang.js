 var favoriteItems = [];

 function addToFavorites(productName) {
     var isProductExists = favoriteItems.includes(productName);
 
     if (!isProductExists) {
         favoriteItems.push(productName);
 
         alert("Sản phẩm đã được thêm vào danh sách yêu thích!");
     } else {
         alert("Sản phẩm đã tồn tại trong danh sách yêu thích!");
     }
 
     updateFavoritesCount();
 }
 
 function updateFavoritesCount() {
     var favoritesCountElement = document.getElementById("favoritesCount");

    
     favoritesCountElement.innerHTML = favoriteItems.length;
 }

  var cartItems = [];
  
  function addToCart(productName, price) {
      var item = {
          name: productName,
          price: price
      };

      cartItems.push(item);

      alert("Sản phẩm đã được thêm vào giỏ hàng!");

      updateCartItemCount();
  }

  function updateCartItemCount() {
      var itemCountElement = document.getElementById("cartItemCount");

      itemCountElement.innerHTML = cartItems.length;
  }

updateCartItemCount();