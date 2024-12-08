(()=>{"use strict";var e,t={597:()=>{const e=window.wp.blocks,t=window.wp.i18n,o=window.wp.blockEditor,s=window.ReactJSXRuntime,c=JSON.parse('{"UU":"mosne/speech-to-text"}');(0,e.registerBlockType)(c.UU,{edit:function({attributes:e,setAttributes:c}){const l=(0,o.useBlockProps)(),{label:n}=e;return(0,s.jsxs)("div",{...l,children:[(0,s.jsx)(o.RichText,{tagName:"p",className:"wp-block-mosne-speech-to-text__title",allowedFormats:["core/image","core/italic","core/bold"],value:n,placeholder:(0,t.__)("Listen to this article","mosne-speech-to-text-block"),onChange:e=>{c({label:e})}}),(0,s.jsxs)("div",{className:"wp-block-mosne-speech-to-text__content",children:[(0,s.jsx)("div",{className:"wp-block-mosne-speech-to-text__controls",children:(0,s.jsx)("button",{className:"wp-block-mosne-speech-to-text__button wp-element-button",children:(0,t.__)("Play","mosne-speech-to-text-block")})}),(0,s.jsxs)("div",{className:"wp-block-mosne-speech-to-text__voices",children:[(0,s.jsx)("label",{htmlFor:"voices",className:"wp-block-mosne-speech-to-text__label",children:(0,t.__)("Voice","mosne-speech-to-text-block")}),(0,s.jsx)("select",{id:"voices",className:"wp-block-mosne-speech-to-text__select",children:(0,s.jsx)("option",{value:"",children:(0,t.__)("Select a voice","mosne-speech-to-text-block")})})]})]})]})}})}},o={};function s(e){var c=o[e];if(void 0!==c)return c.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,s),l.exports}s.m=t,e=[],s.O=(t,o,c,l)=>{if(!o){var n=1/0;for(p=0;p<e.length;p++){for(var[o,c,l]=e[p],r=!0,i=0;i<o.length;i++)(!1&l||n>=l)&&Object.keys(s.O).every((e=>s.O[e](o[i])))?o.splice(i--,1):(r=!1,l<n&&(n=l));if(r){e.splice(p--,1);var a=c();void 0!==a&&(t=a)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[o,c,l]},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};s.O.j=t=>0===e[t];var t=(t,o)=>{var c,l,[n,r,i]=o,a=0;if(n.some((t=>0!==e[t]))){for(c in r)s.o(r,c)&&(s.m[c]=r[c]);if(i)var p=i(s)}for(t&&t(o);a<n.length;a++)l=n[a],s.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return s.O(p)},o=globalThis.webpackChunkmosne_speech_to_text_block=globalThis.webpackChunkmosne_speech_to_text_block||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var c=s.O(void 0,[350],(()=>s(597)));c=s.O(c)})();