# Cordova Text-to-Speech Plugin FORK

## About

This is a fork of https://github.com/vilic/cordova-plugin-tts, with only checkLanguage() functionality.

## Usage

```javascript
// make sure your the code gets executed only after `deviceready`.
document.addEventListener('deviceready', function () {
    // basic usage
    TTS
        .checkLanguage().then(function () {
            alert('success');
        }, function (reason) {
            alert(reason);
        });

}, false);
```

