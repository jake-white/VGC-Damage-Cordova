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
