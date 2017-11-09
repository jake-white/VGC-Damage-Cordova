var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-1585074682884657/4793534712',
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-1585074682884657/4793534712',
  };
} else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-1585074682884657/4793534712',
  };
}

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.TOP_CENTER,
    isTesting: false, // TODO: remove this line when release
    overlap: true,
    offsetTopBar: false,
    bgColor: 'black'
  } );
}
function checkAds() {
  if(!NO_ADS_OWNED) {
    if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
        document.addEventListener('deviceready', initApp, false);
    } else {
        initApp();
    }
  }
}

document.addEventListener('onAdFailLoad', function(e){
    setTimeout(checkAds, 15000);
});


var  NO_ADS_OWNED = false;


// We must wait for the "deviceready" event to fire
// before we can use the store object.
function onLoad() {
  console.log("Working...");
  document.addEventListener("deviceready", initializeShit, false);
}

function initializeShit() {
  $('#noads_button').click(function(){
      if(!NO_ADS_OWNED) {
        console.log("no ads clicked");
        store.order("noads");
      }
    });
    initializeStore();
}
function initializeStore() {
    console.log("store initialized.");

    // Let's set a pretty low verbosity level
    store.verbosity = store.INFO;

    //here's the No Ads product
    store.register({
        id:    "remove_ads",
        alias: "noads",
        type: store.NON_CONSUMABLE
    });

    // After we've done our setup, we tell the store to do
    // it's first refresh. Nothing will happen if we do not call store.refresh()
    store.refresh();


    // When every goes as expected, it's time to celebrate!
    // The "ready" event should be welcomed with music and fireworks,
    // go ask your boss about it! (just in case)
    store.ready(function() {
      //store is ready, doing nothing for now
    });

    store.when("noads").approved(function (order) {
        NO_ADS_OWNED = true;
        //alert("You have successfully bought the no ads version. This should take effect immediately, if this does not happen it will take effect when you restart the app.");
        $("label[for='noads_button']").attr('id', "purchased");
        $("label[for='noads_button']").text("Purchased :)");
        $("#noads_button").prop("disabled", true);
        AdMob.removeBanner();
        checkAds();
        order.finish();
    });
    store.when("noads").cancelled(function (order) {
        alert("Thanks for considering! Don't worry, this app will always be free to use.");
        order.finish();
    });
    store.when("noads").error(function (order) {
        alert("Something seems to have gone wrong with your payment or order! Please try again.");
        order.finish();
    });


    checkAds();
}
