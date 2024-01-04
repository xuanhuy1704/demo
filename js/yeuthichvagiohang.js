let cartCount = 0; 

  function addToCart(productName, price) {
    cartCount++;

    document.getElementById("cartCount").innerText = cartCount;
  }

  let favoriteCount = 0; 

  function addToFavorites(productName) {
    favoriteCount++;

    document.getElementById("favoriteCount").innerText = favoriteCount;
  }
