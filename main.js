(()=>{var e={562:()=>{const e=document.querySelector("#open-btn");e.addEventListener("click",(()=>{const t=document.querySelector(".note__content");"true"===t.dataset.open?(t.dataset.open="false",t.style.maxHeight="",t.style.paddingTop="0",e.textContent="Open"):(t.dataset.open="true",t.style.maxHeight=`${t.scrollHeight+10}px`,t.style.paddingTop="10px",e.textContent="Close")}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(562)})()})();