(()=>{"use strict";const e=(e,s)=>(s||document).querySelector(e),s=e=>{const s=e.target,r=s.dataset.form,t=s.dataset.event;return d(t,r)},d=(e,s)=>{let d={edit:()=>{r("#container-addresses-list","#container-addresses-forms"),r(`.address-container[data-form="${s}"]`,`.form-edit-addresse[data-form="${s}"]`)},new:()=>{r("#btn-new_addresse","#containers-new-addresse")},"cancel-new":()=>{r("#containers-new-addresse","#btn-new_addresse")}};if(!e in d){return(()=>{r("#container-addresses-forms","#container-addresses-list"),r(`.form-edit-addresse[data-form="${s}"]`,`.address-container[data-form="${s}"]`)})()}return d[e]()},r=(s,d)=>{e(s).classList.add("hidden"),e(d).classList.remove("hidden")};(()=>{const e=(d=".edit-addresse",[...(r||document).querySelectorAll(d)]);var d,r;for(let d of e)d.addEventListener("click",(e=>{s(e)}))})()})();
//# sourceMappingURL=customer.js.map