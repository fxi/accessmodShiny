!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).El={})}(this,function(e){const t={listeners:[],debug:!0,interval:null};function n(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}function r(e){return!!e&&"object"==typeof e&&Array.isArray(e)}function i(e){return o(e)&&/(<([^>]+)>)/i.test(e)}function s(e){return e instanceof Promise}function o(e){return"string"==typeof e}function a(e){return e instanceof Function}function c(e){return e instanceof Element}function l(){let e=t.listeners.length;if(!(e<1))for(;--e;){const n=t.listeners[e];if(!n)return;document.body.querySelector('[data-el_id_listener="'+n.target.dataset.el_id_listener+'"]')||(t.listeners.pop(),n.target.removeEventListener(n.tagName,n.listener))}}e.el=function(e){var f;t.interval||(t.interval=setInterval(l,1e4),window.el_config=t);var d=document.createElement(e);return[].slice.call(arguments,1).forEach(i=>{n(i)&&!r(i)&&Object.keys(i).forEach(s=>{f=i[s],"on"===s&&r(f)&&o(f[0])&&a(f[1])?(d.addEventListener(f[0],f[1]),d.dataset.el_id_listener=Math.random().toString(32),t.listeners.push({target:d,tagName:f[0],listener:f[1]})):"on"===s&&n(f)?Object.keys(f).forEach(e=>{a(f[e])&&(d.addEventListener(e,f[e]),d.dataset.el_id_listener=Math.random().toString(32),t.listeners.push({target:d,tagName:e,listener:f[e]}))}):"innerText"===s&&o(f)?d.innerText=f:"dataset"!==s&&"style"!==s||!n(f)?"class"===s&&r(f)?f.forEach(e=>d.classList.add(e)):"input"===e&&"checked"===s&&"checkbox"===i.type?d.checked=!0===f:d.setAttribute(s,i[s]):Object.keys(f).forEach(e=>{d[s][e]=f[e]})}),r(i)&&i.forEach(e=>{c(e)&&d.appendChild(e)}),c(i)&&d.appendChild(i),s(i)?i.then(u):u(i)}),d;function u(t){i(t)||"style"===e?d.innerHTML=t:o(t)&&(d.innerText=t)}}});
//# sourceMappingURL=el.umd.js.map
