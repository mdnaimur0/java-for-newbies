cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-connectivity-monitor.connectivity",
        "file": "plugins/cordova-connectivity-monitor/www/connectivity.js",
        "pluginId": "cordova-connectivity-monitor",
        "clobbers": [
            "window.connectivity"
        ]
    },
    {
        "id": "phonegap-admob.AdMobAds",
        "file": "plugins/phonegap-admob/www/admob.js",
        "pluginId": "phonegap-admob",
        "clobbers": [
            "window.admob",
            "window.tappx"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-connectivity-monitor": "1.2.2",
    "cordova-google-play-services": "25.0.0",
    "phonegap-admob": "5.1.0",
    "cordova-plugin-splashscreen": "3.2.2"
};
// BOTTOM OF METADATA
});