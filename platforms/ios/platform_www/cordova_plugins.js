cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cc.fovea.cordova.purchase.InAppPurchase",
    "file": "plugins/cc.fovea.cordova.purchase/www/store-ios.js",
    "pluginId": "cc.fovea.cordova.purchase",
    "clobbers": [
      "store"
    ]
  },
  {
    "id": "cordova-plugin-admobpro.AdMob",
    "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
    "pluginId": "cordova-plugin-admobpro",
    "clobbers": [
      "window.AdMob"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cc.fovea.cordova.purchase": "7.0.2",
  "cordova-plugin-extension": "1.5.2",
  "cordova-plugin-admobpro": "2.29.24",
  "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});