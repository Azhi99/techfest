(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fcd23050"],{"4b85":function(t,r,i){},a523:function(t,r,i){"use strict";i("20f6"),i("4b85");var n=i("e8f2"),s=i("d9f7");r["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:r,data:i,children:n}){let a;const{attrs:e}=i;return e&&(i.attrs={},a=Object.keys(e).filter(t=>{if("slot"===t)return!1;const r=e[t];return t.startsWith("data-")?(i.attrs[t]=r,!1):r||"string"===typeof r})),r.id&&(i.domProps=i.domProps||{},i.domProps.id=r.id),t(r.tag,Object(s["a"])(i,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(a||[])}),n)}})},a722:function(t,r,i){"use strict";i("20f6");var n=i("e8f2");r["a"]=Object(n["a"])("layout")},bb51:function(t,r,i){"use strict";i.r(r);var n=i("a523"),s=i("a722"),a=function(){var t=this,r=t._self._c;return r("div",[r(n["a"],[r(s["a"],{attrs:{row:"",wrap:"","mt-4":""}})],1)],1)},e=[],o={computed:{navigation_links(){return[{path:"/users-list",title:"users"},{path:"/visitors-list",title:"visitors"},{path:"/visitor_check_in-list",title:"visitor_check_in"}]}}},c=o,d=i("2877"),u=Object(d["a"])(c,a,e,!1,null,null,null);r["default"]=u.exports},e8f2:function(t,r,i){"use strict";i.d(r,"a",(function(){return s}));var n=i("2b0e");function s(t){return n["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(r,{props:i,data:n,children:s}){n.staticClass=`${t} ${n.staticClass||""}`.trim();const{attrs:a}=n;if(a){n.attrs={};const t=Object.keys(a).filter(t=>{if("slot"===t)return!1;const r=a[t];return t.startsWith("data-")?(n.attrs[t]=r,!1):r||"string"===typeof r});t.length&&(n.staticClass+=" "+t.join(" "))}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),r(i.tag,n,s)}})}}}]);
//# sourceMappingURL=chunk-fcd23050.5ff8af43.js.map