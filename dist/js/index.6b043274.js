(function(t){function n(n){for(var o,l,r=n[0],u=n[1],s=n[2],p=0,d=[];p<r.length;p++)l=r[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);c&&c(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,r=1;r<e.length;r++){var u=e[r];0!==a[u]&&(o=!1)}o&&(i.splice(n--,1),t=l(l.s=e[0]))}return t}var o={},a={index:0},i=[];function l(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=o,l.d=function(t,n,e){l.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,n){if(1&n&&(t=l(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)l.d(e,o,function(n){return t[n]}.bind(null,o));return e},l.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(n,"a",n),n},l.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=n,r=r.slice();for(var s=0;s<r.length;s++)n(r[s]);var c=u;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("b158")},"74a6":function(t,n,e){},b158:function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("z-button",{attrs:{disabled:"",loading:"",type:"text",icon:"icon-tuichu"}},[t._v("sfsadf")]),e("z-button",{attrs:{type:"text"}},[t._v("sfsadf")]),e("z-button",{attrs:{plain:"",type:"primary"}},[t._v("sfsadf")]),e("z-button",{attrs:{plain:"",disabled:"",type:"primary"}},[t._v("sfsadf")]),e("z-button",{attrs:{circle:"",type:"primary",size:"small"}},[t._v("1")]),e("z-button",{attrs:{round:"",type:"primary",size:"small"}},[t._v("1")]),e("z-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("1")]),e("z-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("1")]),e("z-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("1")]),e("z-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("1")]),e("z-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("1")])],1)},i=[],l={data:function(){return{radio:"",xx:""}},components:{},watch:{radio:function(t){console.log(t)},xx:function(t){console.log(t)}}},r=l,u=e("2877"),s=Object(u["a"])(r,a,i,!1,null,null,null),c=s.exports,p=(e("4160"),e("b0c0"),e("159b"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{ref:"button",class:t.buttonClass,attrs:{disabled:t.disabled||t.loading,type:t.nativeType,autofocus:t.autofocus},on:{click:function(n){return t.$emit("click")}}},[t.icon&&!t.loading?e("i",{class:t.icon}):t._e(),t.loading?e("i",{staticClass:"icon-arrows_anticlockwise_dashed icon-loading"}):t._e(),t.$slots.default?e("span",[t._t("default")],2):t._e()])}),d=[],f=(e("caad"),{name:"ZButton",props:{type:{type:String,default:"default",validator:function(t){return["default","primary","success","warning","danger","info","text"].includes(t)}},nativeType:{type:String,default:"button",validator:function(t){return["button","submit","reset"].includes(t)}},size:{type:String,validator:function(t){return["medium","small","mini"].includes(t)}},loading:Boolean,icon:String,plain:Boolean,round:Boolean,circle:Boolean,disabled:Boolean,autofocus:Boolean},computed:{buttonClass:function(){return["z-button",this.type?"z-button--"+this.type:"",this.size?"z-button--"+this.size:"",{"is-plain":this.plain,"is-round":this.round,"is-circle":this.circle,"is-disabled":this.disabled}]}}}),m=f,b=Object(u["a"])(m,p,d,!1,null,null,null),v=b.exports;v.install=function(t){t.component(v.name,v)};var y=v,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"z-button-group"},[t._t("default")],2)},h=[],g={name:"ZButtonGroup"},z=g,x=Object(u["a"])(z,_,h,!1,null,null,null),w=x.exports;w.install=function(t){t.component(w.name,w)};var O=w,j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("i",{class:"z-icon"+t.name})},$=[],B={name:"ZIcon",props:{name:{type:String}}},E=B,S=Object(u["a"])(E,j,$,!1,null,null,null),P=S.exports;P.install=function(t){t.component(P.name,P)};var C=P,k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"z-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],attrs:{type:"text"},domProps:{value:t.model},on:{input:function(n){n.target.composing||(t.model=n.target.value)}}})])},I=[],T={name:"ZInput",props:{},computed:{model:{get:function(){return""},set:function(t){this.$emit("input",t)}}}},Z=T,M=Object(u["a"])(Z,k,I,!1,null,null,null),G=M.exports;G.install=function(t){t.component(G.name,G)};var R=G,N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("label",{staticClass:"z-radio"},[e("span",{staticClass:"z-radio__input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],attrs:{type:"radio"},domProps:{value:t.label,checked:t._q(t.model,t.label)},on:{change:function(n){t.model=t.label}}})]),e("span",{staticClass:"z-radio__label"},[t._t("default"),t.$slots.default?t._e():[t._v(t._s(t.label))]],2)])},J=[],V={name:"ZRadio",props:{disabled:Boolean,label:String},data:function(){return{}},methods:{},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},q=V,L=Object(u["a"])(q,N,J,!1,null,null,null),A=L.exports;A.install=function(t){t.component(A.name,A)};var D=A,F=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div")},H=[],K={name:"ZRadioGroup",data:function(){}},Q=K,U=Object(u["a"])(Q,F,H,!1,null,null,null),W=U.exports;W.install=function(t){t.component(W.name,W)};var X=W,Y=[y,O,C,R,D,X];console.log(Y);var tt=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Y.forEach((function(n){t.component(n.name,n)})),t.prototype.$ELEMENT={size:n.size||"",zIndex:n.zIndex||2e3}};"undefined"!==typeof window&&window.Vue&&tt(window.Vue);var nt={version:"0.0.3",install:tt,Button:y,ButtonGroup:O,Icon:C,Input:R,Radio:D,RadioGroup:X};e("74a6");o["a"].use(nt),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=index.6b043274.js.map