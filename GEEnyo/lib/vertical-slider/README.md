[All code is courtesy of tjordan and Roy Sutton](http://stackoverflow.com/questions/16560608/enyo-js-vertical-sliders). I only slightly tweaked the CSS.

Installation
============
Installs like any EnyoJS plugin: add as a git submodule, located in
lib/vertical-slider, to your project:

`git submodule add https://github.com/vtomilin/enyojs-onyx-vertical-slider.git lib/vertical-slider`


Add a dependency to your source/package.js:

```javascript
    enyo.depends(
        '$lib/layout',
        '$lib/onyx',
        '$lib/vertical-slider',
        // ... Other dependencies
    );
```

Use it in the code, kind `onyx.VSlider`.