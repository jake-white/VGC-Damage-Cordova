REMOVE_ADS = false;


function initStore() {
  console.log("Store initializing...");
  store.verbosity = store.INFO;
  // Register the non-renewing subscription product with the store. You must
  // create this in iTunes Connect.
  store.register({
      id: "remove_ads",
      alias: "remove_ads",
      type: store.NON_RENEWING_SUBSCRIPTION
  });

  $('#noads_button').click(function(){
      if(!REMOVE_ADS) {
        store.order("remove_ads");
      }
    });

  // Called when store.order("my_product_id") is executed. The user can
  // still cancel after this has been called.
  store.when("remove_ads").initiated(function(p) {
      // Write a function that identifies this product ID as having been
      // initiated to purchase.
      my_app_utils.setIsProductPurchaseInitiated("remove_ads", true);
  });

  // Called when the user has cancelled purchasing the product, after it has
  // been initiated.
  store.when("remove_ads").cancelled(function(p) {
      // Write a function that marks this product ID as not being purchased
      my_app_utils.setIsProductPurchaseInitiated("remove_ads", false);
  });

  // Called when the product purchase is finished. This gets called every time
  // the app starts after the product has been purchased, so we use a helper
  // function to determine if we actually need to purchase the non-renewing
  // subscription on our own server.
  store.when("remove_ads").approved(function(p) {
      if(store.get("remove_ads").owned) {
        console.log("Product owned!");
        REMOVE_ADS = true;
        $("label[for='noads_button']").text("Purchased :)");
        $("#noads_button").prop("disabled", true);
        AdMob.removeBanner();
        checkAds();
      }

      my_product_id.purchaseNonRenewingSubscription(p.id, function success() {

          // Purchase has been executed successfully.
          // Must call finish to charge the user and allow the purchase to be
          // made again.

          p.finish();

          // Update the UI to allow another purchase
          console.log("Approved....?");
          my_app_utils.setIsProductPurchaseInitiated("remove_ads", false);
          REMOVE_ADS = true;
          $("label[for='noads_button']").text("Purchased :)");
          $("#noads_button").prop("disabled", true);
          AdMob.removeBanner();
          checkAds();

      }, function error(err) {

          // Failed to deliver the subscription (link issue with server?).
          // Report to user, do not finish the transaction (so it pops up
          // next time the user starts the app).

          my_app_utils.alertUserAboutServerError({
              title: 'Subscription Purchase Error',
              template: 'We could not store your new subscription status on our server. ' +
                      'No worries, you have not been charged. Please ensure you are ' +
                      'connected to the Internet and try again.'
          });

          my_app_utils.setIsProductPurchaseInitiated("remove_ads", false);
      });
  });

  // Errors communicating with the iTunes server happen quite often,
  // so it's highly recommended you implement some feedback to the user.
  store.error(function(e){
      console.log("storekit ERROR " + e.code + ": " + e.message);
      my_app_utils.alertUserAboutITunesError({
          title: 'Subscription Purchase Error',
          template: 'We could not reach the Apple iTunes ordering server. ' +
                    'Please ensure you are connected to the Internet and try ' +
                    'again.'
      });
  });

  // Refresh the store to start everything
  store.refresh();
}
