(()=>{"use strict";const e=e=>{e.target.value=e.target.value.replace(/[^\d]/,"")},t=(e,t)=>(t||document).querySelector(e),r=e=>{e.preventDefault();const r=e.target.closest("form"),n=t("#validation",r),c=[...r.elements].filter((e=>e.required)).every((e=>e.value));return n.checked&&c?(t(".error-check-js").style.display="none",r.submit()):(t(".error-check-js").style.display="flex",!1)};t(".send-contact").addEventListener("click",r),t('input[type="number"]').addEventListener("input",e)})();
//# sourceMappingURL=contact.js.map