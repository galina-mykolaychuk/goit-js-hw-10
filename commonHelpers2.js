import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const a=document.querySelector(".form");a.addEventListener("submit",c);function c(r){r.preventDefault();const t={};new FormData(r.target).forEach((e,o)=>{t[o]=e});const s=t.delay,m=t.state;new Promise((e,o)=>{setTimeout(()=>{m==="fulfilled"?e(s):o(s)},s)}).then(e=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{i.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})}
//# sourceMappingURL=commonHelpers2.js.map
