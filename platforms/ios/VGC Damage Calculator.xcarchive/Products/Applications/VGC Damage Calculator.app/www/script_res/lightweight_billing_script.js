var REMOVE_ADS = false;

function removeAds() {
  console.log("Product owned!");
  REMOVE_ADS = true;
  $("label[for='noads_button']").attr('id', "purchased");
  $("label[for='noads_button']").text("Purchased :)");
  $("#noads_button").prop("disabled", true);
  AdMob.removeBanner();
  checkAds();
}

const productId = 'remove_ads';
$('#noads_button').click(function(){
  restoreRemoveAds();
});

function buyRemoveAds() {
  inAppPurchase.buy(productId)
  .then(function(data) {
    removeAds();
    window.localStorage.setItem("REMOVE_ADS", REMOVE_ADS);
  })
  .catch(function() {
    console.log(err);

    $("label[for='noads_button']").text("Remove Ads / Restore Purchase! :)");
  } );
}

function initStore() {
  console.log("Initializing store...");

  inAppPurchase
  .getProducts([productId])
  .then(function (products) {
    console.log(products);
    /*
       [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', currency: '...', price: '...', priceAsDecimal: '...' }, ...]
    */
  })
  .catch(function (err) {
    console.log(err);
  });
  if(window.localStorage.getItem("REMOVE_ADS") != null){
    REMOVE_ADS = window.localStorage.getItem("REMOVE_ADS");
  }
  if(REMOVE_ADS) {
    removeAds();
  }


}

function restoreRemoveAds() {
$("label[for='noads_button']").text("Checking purchases...");
  var successfulRestore = false;
  var productToRestore;
  inAppPurchase
    .restorePurchases()
    .then(function(purchases){
      purchases.forEach(function(purchase) {
        productToRestore = purchase
        if(productToRestore.productId = productId) {
          successfulRestore = true;
          removeAds();
          window.localStorage.setItem("REMOVE_ADS", REMOVE_ADS);
        }
      })
    },function(err) {console.log(err);} );

  if(!successfulRestore) {
    buyRemoveAds();
  }
}
