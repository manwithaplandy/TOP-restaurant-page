(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),c=n(645),a=n.n(c)()(r());a.push([e.id,"#navbar {\n    display: flex;\n    justify-content: center;\n    gap: 3rem;\n    font-size: 2rem;\n    height: 5vh;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 1fr 3fr 1fr;\n    justify-items: center;\n    align-items: center;\n    height: 90vh;\n}\n\n#content>h1 {\n    font-size: 5rem;\n}\n\n#content>img {\n    width: 75vw;\n}\n\n#content>p {\n    width: 75vw;\n    font-size: 3rem;\n    text-align: center;\n}\n\n.menu-item {\n    font-size: 2.5rem;\n    text-align: center;\n    border: solid black 2px;\n}\n\n#menu {\n    grid-row: 2;\n    display: flex;\n    flex-direction: column;\n    gap: 5rem;\n}",""]);const i=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);o&&a[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],u=o.base?s[0]+o.base:s[0],d=c[u]||0,l="".concat(u," ").concat(d);c[u]=d+1;var m=n(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=i,t.splice(i,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=o(e,r),u=0;u<c.length;u++){var d=n(c[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}c=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},636:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},565:()=>{const e=document.getElementById("content"),t=document.querySelector("body"),n=document.createElement("div");n.id="navbar";const o=document.createElement("div");o.textContent="Home",o.id="home";const r=document.createElement("div");r.textContent="Contact",r.id="contact";const c=document.createElement("div");c.textContent="Menu",c.id="menu",n.append(o,c,r),t.insertBefore(n,e)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";n(565);var e=n(379),t=n.n(e),o=n(795),r=n.n(o),c=n(569),a=n.n(c),i=n(636),s=n.n(i),u=n(216),d=n.n(u),l=n(589),m=n.n(l),p=n(426),f={};function v(){const e=document.getElementById("content"),t=document.createElement("h1");t.textContent="Welcome to our restaurant, FOOLS!";const n=document.createElement("img");n.src="./images/elevate.jpg";const o=document.createElement("p");o.textContent="This restaurant is so sick we don't even use plates, we just throw a bunch of shit we found on the ground onto a piece of wood.",e.append(t,n,o)}f.styleTagTransform=m(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const h=document.getElementById("content");function y(){h.innerHTML=""}const g=document.getElementById("contact"),x=document.getElementById("menu");document.getElementById("home").addEventListener("click",(()=>{y(),v()})),g.addEventListener("click",(()=>{y(),function(){const e=document.getElementById("content"),t=document.createElement("h1");t.textContent="Contact Us";const n=document.createElement("p");n.textContent="We literally dont want you to contact us. Please send all complaints to comments@whitehouse.gov. You will be more likely to get in touch with someone who cares.",e.append(t,n)}()})),x.addEventListener("click",(()=>{y(),function(){const e=document.getElementById("content");document.createElement("h1").textContent="Menu";const t=document.createElement("div");t.id="menu";const n=document.createElement("div");n.classList.add("menu-item"),n.textContent="Steak. Medium-rare. That is it. Shut up.";const o=document.createElement("div");o.classList.add("menu-item"),o.textContent="Ground beef on a plain bun. Ketchup on the side. Quit complaining.",t.append(o,n),e.append(t)}()})),v()})()})();