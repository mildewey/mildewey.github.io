import{S as i,i as m,s as u,e as f,x as l,c as h,a as p,y,d as c,b as _,g as d,z as g,r as C,p as v,C as S}from"../../../chunks/index-432774c0.js";import"../../../chunks/controls-ef78b98b.js";import{C as D}from"../../../chunks/Character-c7ea71e6.js";import"../../../chunks/Stats-978c3425.js";function b(n){let s,e,r;return e=new D({props:{sys:n[0],choices:n[1]}}),{c(){s=f("div"),l(e.$$.fragment),this.h()},l(t){s=h(t,"DIV",{class:!0});var o=p(s);y(e.$$.fragment,o),o.forEach(c),this.h()},h(){_(s,"class","content")},m(t,o){d(t,s,o),g(e,s,null),r=!0},p(t,[o]){const a={};o&1&&(a.sys=t[0]),o&2&&(a.choices=t[1]),e.$set(a)},i(t){r||(C(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){t&&c(s),S(e)}}}async function E({params:n,fetch:s,session:e,stuff:r}){return{status:200,props:{sys:r.allSystems[n.sys],proto:n.proto}}}function q(n,s,e){let r,{sys:t}=s,{proto:o}=s;return n.$$set=a=>{"sys"in a&&e(0,t=a.sys),"proto"in a&&e(2,o=a.proto)},n.$$.update=()=>{n.$$.dirty&5&&e(1,r=t.prototypes[o])},[t,r,o]}class I extends i{constructor(s){super(),m(this,s,q,b,u,{sys:0,proto:2})}}export{I as default,E as load};