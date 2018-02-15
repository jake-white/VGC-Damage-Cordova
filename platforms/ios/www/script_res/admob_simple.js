var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-1585074682884657/2566821736',
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-1585074682884657/2566821736',
  };
} else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-1585074682884657/2566821736',
  };
}

checkAds();
function initApp() {
  if(!REMOVE_ADS) {
  // this will create a banner on startup
    AdMob.createBanner( {
      adSize: 'SMART_BANNER',
      adId: admobid.banner,
      position: AdMob.AD_POSITION.TOP_CENTER,
      isTesting: false, // TODO: remove this line when release
      overlap: true,
      offsetTopBar: false,
      bgColor: 'black'
    } );
  }
}
function checkAds() {
  if(!REMOVE_ADS) {
    if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
        document.addEventListener('deviceready', initApp, false);
        document.addEventListener('deviceready', initStore, false);
    }
  }
}

document.addEventListener('onAdFailLoad', function(e){
    setTimeout(initApp, 15000);
});
