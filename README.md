# Cordova Text-to-Speech Languages Plugin

## About

Gets a list of languages supported by TTS only; does not include TTS functionality.
- Can be used as input to another TTS plugin, like `<plugin name="cordova-plugin-tts" version="0.2.3" />`
- "checkLanguage()" derivevd from not-released functionality (as of 0.2.3) of cordova-plugin-tts: https://github.com/vilic/cordova-plugin-tts/tree/b4eef24a0476503b905fab092651d748530f2565

## Usage

```javascript
// make sure your the code gets executed only after `deviceready`.
document.addEventListener('deviceready', function () {
    // basic usage
    TTS_gu1.checkLanguage().then(function (langsStr) {
        alert('success - ' + langsStr);
        // Output format example: "success - ko_KR,mr_IN,ru_RU,zh_TW,hu_HU,th_TH,ur_PK,nb_NO,da_DK,tr_TR,et_EE,bs,sw,pt_PT,vi_VN,en_US,sv_SE,ar,su_ID,bn_BD,gu_IN,kn_IN,el_GR,hi_IN,fi_FI,km_KH,bn_IN,fr_FR,uk_UA,en_AU,nl_NL,fr_CA,sr,pt_BR,ml_IN,si_LK,de_DE,ku,cs_CZ,pl_PL,sk_SK,fil_PH,it_IT,ne_NP,hr,en_NG,zh_CN,es_ES,cy,ta_IN,ja_JP,sq,yue_HK,en_IN,es_US,jv_ID,la,in_ID,te_IN,ro_RO,ca,en_GB"

        // A value from this list can be used as input to cordova-plugin-tts@0.2.3, like...
        //var locale = langsStr.split(",")[0].replace("_", "-");
        //TTS.speak({ locale: locale }, onSuccess, onError);

    }, function (reason) {
        alert(reason);
    });

}, false);
```

