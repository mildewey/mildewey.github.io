import{S as y,i as _,s as S,e as v,x as I,c as D,a as b,y as w,d as m,b as A,g as J,z as N,r as O,p as U,C as q}from"../../../chunks/index-432774c0.js";import"../../../chunks/controls-ef78b98b.js";import{C as z}from"../../../chunks/Character-c7ea71e6.js";import{g as d}from"../../../chunks/navigation-13fd7038.js";import"../../../chunks/Stats-978c3425.js";import"../../../chunks/singletons-d1fb5791.js";function B(e){let t,a,o;return a=new z({props:{sys:e[0],choices:e[1],saveChar:e[3],deleteChar:e[2]}}),{c(){t=v("div"),I(a.$$.fragment),this.h()},l(r){t=D(r,"DIV",{class:!0});var s=b(t);w(a.$$.fragment,s),s.forEach(m),this.h()},h(){A(t,"class","content")},m(r,s){J(r,t,s),N(a,t,null),o=!0},p(r,[s]){const c={};s&1&&(c.sys=r[0]),s&2&&(c.choices=r[1]),s&8&&(c.saveChar=r[3]),s&4&&(c.deleteChar=r[2]),a.$set(c)},i(r){o||(O(a.$$.fragment,r),o=!0)},o(r){U(a.$$.fragment,r),o=!1},d(r){r&&m(t),q(a)}}}async function M({params:e,fetch:t,session:a,stuff:o}){return{status:200,props:{sys:o.allSystems[e.sys],characterID:e.char}}}function E(){return{name:"Unnamed",blurb:"",elements:{character:void 0}}}function u(e){return JSON.parse(localStorage.getItem(`${e}-characters`)||"{}")}function C(e,t){localStorage.setItem(`${e}-characters`,JSON.stringify(t))}function V(e,t){const a=u(e);return t in a?a[t]:E()}function j(e,t,a){let o,r,s,{sys:c}=t,{characterID:i}=t;function p(n,h,l){const f=u(n);f[h]=l,C(n,f),d(`/${n}/character/${h}`,{replaceState:!0})}function g(n,h){const l=u(n);delete l[h],C(n,l),d(`/${n}/character/new`,{replaceState:!0})}return e.$$set=n=>{"sys"in n&&a(0,c=n.sys),"characterID"in n&&a(4,i=n.characterID)},e.$$.update=()=>{e.$$.dirty&17&&a(1,o=V(c.sysID,i)),e.$$.dirty&19&&a(3,r=()=>p(c.sysID,i,o)),e.$$.dirty&17&&a(2,s=()=>g(c.sysID,i))},[c,o,s,r,i]}class P extends y{constructor(t){super(),_(this,t,j,B,S,{sys:0,characterID:4})}}export{P as default,M as load};
