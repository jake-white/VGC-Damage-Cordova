cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-admobpro.AdMob",
    "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
    "pluginId": "cordova-plugin-admobpro",
    "clobbers": [
      "window.AdMob"
    ]
  },
  {
    "id": "cordova-plugin-inapppurchase.PaymentsPlugin",
    "file": "plugins/cordova-plugin-inapppurchase/www/index-ios.js",
    "pluginId": "cordova-plugin-inapppurchase",
    "clobbers": [
      "inAppPurchase"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-extension": "1.5.2",
  "cordova-plugin-admobpro": "2.29.24",
  "cordova-plugin-whitelist": "1.3.2",
  "cordova-plugin-inapppurchase": "1.1.0"
};
// BOTTOM OF METADATA
});