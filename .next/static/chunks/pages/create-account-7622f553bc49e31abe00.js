(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{5130:function(e,t,r){"use strict";r.d(t,{l0:function(){return a},gN:function(){return o},Kj:function(){return s},jj:function(){return l}});var n=r(701);var a=(0,n.Z)("form",{target:"e13gp4hl3"})({name:"n77sy1",styles:"max-width:600px;width:95%;margin:5rem auto 0 auto;fieldset{margin:2rem 0;border:1px solid #e1e1e1;font-size:2rem;padding:2rem;}"}),o=(0,n.Z)("div",{target:"e13gp4hl2"})({name:"118f3y4",styles:"margin-bottom:2rem;display:flex;align-items:center;label{flex:0 0 150px;font-size:1.8rem;}input,textarea{flex:1;padding:1rem;}textarea{height:400px;}"}),s=(0,n.Z)("input",{target:"e13gp4hl1"})({name:"1bhb9p4",styles:'background-color:var(--orange);width:100%;padding:1.5rem;text-align:center;color:#FFF;font-size:1.8rem;text-transform:uppercase;border:none;font-family:"PT Sans",sans-serif;font-weight:700;&:hover{cursor:pointer;}'}),l=(0,n.Z)("p",{target:"e13gp4hl0"})({name:"174mgo5",styles:'background-color:red;padding:1rem;font-family:"PT Sans",sans-serif;font-weight:700;font-size:1.4rem;color:#FFF;text-align:center;text-transform:uppercase;margin:2rem 0'})},9861:function(e,t,r){"use strict";var n=r(6156),a=r(7294);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e,t,r){var o=(0,a.useState)(e),l=o[0],i=o[1],u=(0,a.useState)({}),c=u[0],m=u[1],p=(0,a.useState)(!1),d=p[0],f=p[1];(0,a.useEffect)((function(){d&&(0===Object.keys(c).length&&r(),f(!1))}),[c]);return{values:l,errors:c,handleSubmit:function(e){e.preventDefault();var r=t(l);m(r),f(!0)},handleChange:function(e){i(s(s({},l),{},(0,n.Z)({},e.target.name,e.target.value)))},handleBlur:function(){var e=t(l);m(e)}}}},7758:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(7757),a=r.n(n),o=r(2137),s=r(7294),l=r(1163),i=r(778),u=r(5130),c=r(9405),m=r(9861);function p(e){var t={};return e.name||(t.name="Name is required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email"):t.email="Email is required",e.password?e.password.length<6&&(t.password="The password must have more than 6 characters"):t.password="Password is required",t}var d=r(917);var f={name:"",email:"",password:""},g={name:"craf4i",styles:"text-align:center;margin-top:5rem"},h=function(){var e=(0,s.useState)(!1),t=e[0],r=e[1],n=(0,m.Z)(f,p,(function(){return y.apply(this,arguments)})),h=n.values,w=n.errors,v=n.handleSubmit,b=n.handleChange,Z=n.handleBlur;function y(){return(y=(0,o.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.register(h.name,h.email,h.password);case 3:l.default.push("/"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("There are an error: ",e.t0.message),r(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return(0,d.tZ)("div",null,(0,d.tZ)(i.Z,null,(0,d.tZ)("h1",{css:g},"Create Account"),(0,d.tZ)(u.l0,{onSubmit:v,noValidate:!0},(0,d.tZ)(u.gN,null,(0,d.tZ)("label",{htmlFor:"name"},"Name"),(0,d.tZ)("input",{type:"text",id:"name",placeholder:"Your name",name:"name",value:h.name,onChange:b,onBlur:Z})),w.name&&(0,d.tZ)(u.jj,null,w.name),(0,d.tZ)(u.gN,null,(0,d.tZ)("label",{htmlFor:"email"},"Email"),(0,d.tZ)("input",{type:"email",id:"email",placeholder:"Your email",name:"email",value:h.email,onChange:b,onBlur:Z})),w.email&&(0,d.tZ)(u.jj,null,w.email),(0,d.tZ)(u.gN,null,(0,d.tZ)("label",{htmlFor:"password"},"Password"),(0,d.tZ)("input",{type:"password",id:"password",placeholder:"Your password",name:"password",value:h.password,onChange:b,onBlur:Z})),w.password&&(0,d.tZ)(u.jj,null,w.password),t&&(0,d.tZ)(u.jj,null,t),(0,d.tZ)(u.Kj,{type:"submit",value:"Create Account"}))))}},8101:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-account",function(){return r(7758)}])}},function(e){e.O(0,[774,929,834,351,985,302,778],(function(){return t=8101,e(e.s=t);var t}));var t=e.O();_N_E=t}]);