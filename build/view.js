import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

const {
  actions
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('mosne-text-to-speech-block', {
  state: {
    isPlaying: false,
    currentVoice: null,
    utterance: null,
    voices: [],
    currentSpeed: 1,
    currentPitch: 1
  },
  actions: {
    async loadVoices() {
      // console.log( 'loadVoices' );
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const availableVoices = window.speechSynthesis.getVoices();
      // console.log( 'voices', availableVoices );
      context.voices = availableVoices;
      context.currentVoice = availableVoices[0];

      // get current docuemtn locale
      const currentLocale = document.documentElement.lang;
      // console.log( 'currentLocale', currentLocale );

      // Set default French voice or first available
      const localVoices = availableVoices.filter(voice => voice.lang.startsWith(currentLocale));
      console.log('localVoices', localVoices);
      if (localVoices.length > 0) {
        context.voices = localVoices;
        context.currentVoice = localVoices[0];
        //	console.log( 'current', context.currentVoice );
        //	console.log( 'voices', context.voices );
      }
      // Create initial utterance
      actions.createUtterance();
    },
    createUtterance() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const content = actions.getContent();
      const newUtterance = new SpeechSynthesisUtterance(content);
      newUtterance.lang = document.documentElement.lang;
      newUtterance.rate = context.currentSpeed;
      newUtterance.pitch = context.currentPitch;
      if (context.currentVoice) {
        newUtterance.voice = context.currentVoice;
      }
      context.utterance = newUtterance;
      //console.log( 'utterance', context.utterance );
    },
    upadateUtterance() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const utterance = context.utterance;
      if (utterance) {
        window.speechSynthesis.cancel();
        context.isPlaying = false;
        actions.createUtterance();
      }
    },
    Play() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.isPlaying = true;
      // console.log( 'play', context.utterance );
      // console.log( 'status', window.speechSynthesis );
      // init speach to text
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else if (context.utterance) {
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(context.utterance);
      }
    },
    Pause() {
      //console.log('pause');
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.isPlaying = false;
      window.speechSynthesis.pause();
      // pause speach to text
    },
    Restart() {
      //console.log('pause');
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.isPlaying = false;
      window.speechSynthesis.cancel();
    },
    changeVoice(e) {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.isPlaying = false;
      const voice = context.voices.find(v => v.voiceURI === e.target.value);
      if (voice) {
        context.currentVoice = voice;
        // console.log('change',context.currentVoice);
        actions.upadateUtterance();
      }
    },
    changeSpeed(e) {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.currentSpeed = e.target.value;
      actions.upadateUtterance();
    },
    changePitch(e) {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.currentPitch = e.target.value;
      actions.upadateUtterance();
    },
    toggleSettings() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.showSettings = !context.showSettings;
    },
    getContent() {
      // grab all the text content from the page inside the main element exclude recursivelly the text inside the class skip-speach
      let content = '';
      let cloneMain = document.querySelector('main').cloneNode(true);
      if (cloneMain) {
        const skip = cloneMain.querySelectorAll('.skip-speech');
        skip.forEach(el => {
          el.remove();
        });
        content = cloneMain.textContent;
        cloneMain = null;
      }
      return content;
    }
  },
  callbacks: {
    init() {
      // Initialize voices when available
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
        actions.loadVoices();
        //console.log('init1');
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = actions.loadVoices;
          //console.log('init2');
        }
      }
    },
    isSelected() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      //console.log('isSelected',context.voice.voiceURI, context.currentVoice.voiceURI);
      return context.voice.voiceURI === context.currentVoice.voiceURI;
    }
  }
});
})();


//# sourceMappingURL=view.js.map