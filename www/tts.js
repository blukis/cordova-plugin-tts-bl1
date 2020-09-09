/*
    Cordova Text-to-Speech Plugin
    https://github.com/vilic/cordova-plugin-tts
 
    by VILIC VANE
    https://github.com/vilic
 
    MIT License
*/

exports.checkLanguage = function() {
    return new Promise(function (resolve, reject) {
        cordova.exec(resolve, reject, 'TTS_gu1', 'checkLanguage', []);
    });
};

