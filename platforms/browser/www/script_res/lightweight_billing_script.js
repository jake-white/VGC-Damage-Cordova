var REMOVE_ADS = false;

$('#noads_button').click(function(){
  const productId = 'whitejaa.calc.remove_ads';
  inAppPurchase
  .buy(productId)
  .then((res) => {
    console.log('purchase completed!');
    // unlock level 1
    console.log("Product owned!");
    REMOVE_ADS = true;
    $("label[for='noads_button']").text("Purchased :)");
    $("#noads_button").prop("disabled", true);
    AdMob.removeBanner();
    checkAds();
  })
  .catch(err => console.log(err) );
});

function initStore() {
  inAppPurchase
    .restorePurchases()
    .then((purchases) => {
      purchases.forEach(purchase);
      if(purchase.productId == "whitejaa.calc.remove_ads") {
        REMOVE_ADS = true;
        console.log("restoring purchase!");
      }
    })
    .catch(err => console.log(err) );
  }
