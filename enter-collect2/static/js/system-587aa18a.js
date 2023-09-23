import{t as dt,I as xt,g as ee,f as Wt,_ as be,s as we,d as _e,m as Ht,p as Zt,v as Gt,a as qe,w as Kt,j as Jt,x as Ut,o as Ie,y as Xt,z as ke,b as Yt}from"./index-f8ecfad0.js";import{m as G,c as b,M as Fe,d as K,t as Oe,a as ft,b as T,h as F,j as x,e as me,l as V,i as Le,q as vt,s as pt,r as h,W as mt,o as te,p as k,X as Rt,Y as en,k as B,I as tn,y as nn,T as on,E as rn,G as ln,F as an,C as Se,f as Ve,v as sn,x as un,L as ht,O as yt,Z as cn,_ as dn,$ as fn,a0 as Y,g as $e,a1 as vn,S as pn,a2 as ue,w as mn}from"./index-38b182f5.js";const gt=typeof window>"u"?global:window,hn=gt.requestAnimationFrame,Ae=gt.cancelAnimationFrame;function yn(e){let t=0;const n=(...o)=>{t&&Ae(t),t=hn(()=>{e(...o),t=0})};return n.cancel=()=>{Ae(t),t=0},n}var gn=Object.defineProperty,ze=Object.getOwnPropertySymbols,bn=Object.prototype.hasOwnProperty,wn=Object.prototype.propertyIsEnumerable,De=(e,t,n)=>t in e?gn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_n=(e,t)=>{for(var n in t||(t={}))bn.call(t,n)&&De(e,n,t[n]);if(ze)for(var n of ze(t))wn.call(t,n)&&De(e,n,t[n]);return e};const On=(e,t)=>{const n=_n({},e);for(const o of t)o in n&&delete n[o];return n},Sn=Symbol("ArcoFormItemContext"),$n=({size:e,disabled:t,error:n,uninject:o}={})=>{const r=o?{}:G(Sn,{}),l=b(()=>{var d;return(d=e==null?void 0:e.value)!=null?d:r.size}),a=b(()=>(t==null?void 0:t.value)||r.disabled),s=b(()=>(n==null?void 0:n.value)||r.error),i=Fe(r,"feedback"),c=Fe(r,"eventHandlers");return{formItemCtx:r,mergedSize:l,mergedDisabled:a,mergedError:s,feedback:i,eventHandlers:c}},Cn=(e,{defaultValue:t="medium"}={})=>{const n=G(dt,void 0);return{mergedSize:b(()=>{var r,l;return(l=(r=e==null?void 0:e.value)!=null?r:n==null?void 0:n.size)!=null?l:t})}},bt=Symbol("ArcoButtonGroup"),Pn=K({name:"Button",components:{IconLoading:xt},props:{type:{type:String},shape:{type:String},status:{type:String},size:{type:String},long:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean},htmlType:{type:String,default:"button"},href:String},emits:{click:e=>!0},setup(e,{emit:t}){const{size:n,disabled:o}=Oe(e),r=ee("btn"),l=G(bt,void 0),a=b(()=>{var g;return(g=n.value)!=null?g:l==null?void 0:l.size}),s=b(()=>Boolean(o.value||(l==null?void 0:l.disabled))),{mergedSize:i,mergedDisabled:c}=$n({size:a,disabled:s}),{mergedSize:d}=Cn(i),v=b(()=>{var g,O,S,P,$,w;return[r,`${r}-${(O=(g=e.type)!=null?g:l==null?void 0:l.type)!=null?O:"secondary"}`,`${r}-shape-${(P=(S=e.shape)!=null?S:l==null?void 0:l.shape)!=null?P:"square"}`,`${r}-size-${d.value}`,`${r}-status-${(w=($=e.status)!=null?$:l==null?void 0:l.status)!=null?w:"normal"}`,{[`${r}-long`]:e.long,[`${r}-loading`]:e.loading,[`${r}-disabled`]:c.value,[`${r}-link`]:Wt(e.href)}]});return{prefixCls:r,cls:v,mergedDisabled:c,handleClick:g=>{if(e.disabled||e.loading){g.preventDefault();return}t("click",g)}}}}),En=["href"],Tn=["type","disabled"];function Mn(e,t,n,o,r,l){const a=ft("icon-loading");return e.href?(T(),F("a",{key:0,class:x([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),href:e.mergedDisabled||e.loading?void 0:e.href,onClick:t[0]||(t[0]=(...s)=>e.handleClick&&e.handleClick(...s))},[e.loading||e.$slots.icon?(T(),F("span",{key:0,class:x(`${e.prefixCls}-icon`)},[e.loading?(T(),me(a,{key:0,spin:"true"})):V(e.$slots,"icon",{key:1})],2)):Le("v-if",!0),V(e.$slots,"default")],10,En)):(T(),F("button",{key:1,class:x([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),type:e.htmlType,disabled:e.mergedDisabled,onClick:t[1]||(t[1]=(...s)=>e.handleClick&&e.handleClick(...s))},[e.loading||e.$slots.icon?(T(),F("span",{key:0,class:x(`${e.prefixCls}-icon`)},[e.loading?(T(),me(a,{key:0,spin:!0})):V(e.$slots,"icon",{key:1})],2)):Le("v-if",!0),V(e.$slots,"default")],10,Tn))}var ce=be(Pn,[["render",Mn]]);const jn=K({name:"ButtonGroup",props:{type:{type:String},status:{type:String},shape:{type:String},size:{type:String},disabled:{type:Boolean}},setup(e){const{type:t,size:n,status:o,disabled:r,shape:l}=Oe(e),a=ee("btn-group");return vt(bt,pt({type:t,size:n,shape:l,status:o,disabled:r})),{prefixCls:a}}});function Bn(e,t,n,o,r,l){return T(),F("div",{class:x(e.prefixCls)},[V(e.$slots,"default")],2)}var de=be(jn,[["render",Bn]]);const br=Object.assign(ce,{Group:de,install:(e,t)=>{we(e,t);const n=_e(t);e.component(n+ce.name,ce),e.component(n+de.name,de)}});var qn=Object.defineProperty,Qe=Object.getOwnPropertySymbols,In=Object.prototype.hasOwnProperty,kn=Object.prototype.propertyIsEnumerable,Ne=(e,t,n)=>t in e?qn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,H=(e,t)=>{for(var n in t||(t={}))In.call(t,n)&&Ne(e,n,t[n]);if(Qe)for(var n of Qe(t))kn.call(t,n)&&Ne(e,n,t[n]);return e};const Fn=()=>({width:document.documentElement.clientWidth||window.innerWidth,height:document.documentElement.clientHeight||window.innerHeight}),xe=(e,t)=>{var n,o;const r=e.getBoundingClientRect();return{top:r.top,bottom:r.bottom,left:r.left,right:r.right,scrollTop:r.top-t.top,scrollBottom:r.bottom-t.top,scrollLeft:r.left-t.left,scrollRight:r.right-t.left,width:(n=e.offsetWidth)!=null?n:e.clientWidth,height:(o=e.offsetHeight)!=null?o:e.clientHeight}},Ln=e=>{switch(e){case"top":case"tl":case"tr":return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right";default:return"top"}},X=(e,t)=>{switch(t){case"top":switch(e){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return e}case"bottom":switch(e){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return e}case"left":switch(e){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return e}case"right":switch(e){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return e}default:return e}},Vn=(e,t,{containerRect:n,triggerRect:o,popupRect:r,offset:l,translate:a})=>{const s=Ln(e),i=Fn(),c={top:n.top+t.top,bottom:i.height-(n.top+t.top+r.height),left:n.left+t.left,right:i.width-(n.left+t.left+r.width)};let d=e;if(s==="top"&&c.top<0)if(o.top>r.height)t.top=-n.top;else{const v=Z("bottom",o,r,{offset:l,translate:a});i.height-(n.top+v.top+r.height)>0&&(d=X(e,"bottom"),t.top=v.top)}if(s==="bottom"&&c.bottom<0)if(i.height-o.bottom>r.height)t.top=-n.top+(i.height-r.height);else{const v=Z("top",o,r,{offset:l,translate:a});n.top+v.top>0&&(d=X(e,"top"),t.top=v.top)}if(s==="left"&&c.left<0)if(o.left>r.width)t.left=-n.left;else{const v=Z("right",o,r,{offset:l,translate:a});i.width-(n.left+v.left+r.width)>0&&(d=X(e,"right"),t.left=v.left)}if(s==="right"&&c.right<0)if(i.width-o.right>r.width)t.left=-n.left+(i.width-r.width);else{const v=Z("left",o,r,{offset:l,translate:a});n.left+v.left>0&&(d=X(e,"left"),t.left=v.left)}return(s==="top"||s==="bottom")&&(c.left<0?t.left=-n.left:c.right<0&&(t.left=-n.left+(i.width-r.width))),(s==="left"||s==="right")&&(c.top<0?t.top=-n.top:c.bottom<0&&(t.top=-n.top+(i.height-r.height))),{popupPosition:t,position:d}},Z=(e,t,n,{offset:o=0,translate:r=[0,0]}={})=>{var l;const a=(l=Ht(r)?r:r[e])!=null?l:[0,0];switch(e){case"top":return{left:t.scrollLeft+Math.round(t.width/2)-Math.round(n.width/2)+a[0],top:t.scrollTop-n.height-o+a[1]};case"tl":return{left:t.scrollLeft+a[0],top:t.scrollTop-n.height-o+a[1]};case"tr":return{left:t.scrollRight-n.width+a[0],top:t.scrollTop-n.height-o+a[1]};case"bottom":return{left:t.scrollLeft+Math.round(t.width/2)-Math.round(n.width/2)+a[0],top:t.scrollBottom+o+a[1]};case"bl":return{left:t.scrollLeft+a[0],top:t.scrollBottom+o+a[1]};case"br":return{left:t.scrollRight-n.width+a[0],top:t.scrollBottom+o+a[1]};case"left":return{left:t.scrollLeft-n.width-o+a[0],top:t.scrollTop+Math.round(t.height/2)-Math.round(n.height/2)+a[1]};case"lt":return{left:t.scrollLeft-n.width-o+a[0],top:t.scrollTop+a[1]};case"lb":return{left:t.scrollLeft-n.width-o+a[0],top:t.scrollBottom-n.height+a[1]};case"right":return{left:t.scrollRight+o+a[0],top:t.scrollTop+Math.round(t.height/2)-Math.round(n.height/2)+a[1]};case"rt":return{left:t.scrollRight+o+a[0],top:t.scrollTop+a[1]};case"rb":return{left:t.scrollRight+o+a[0],top:t.scrollBottom-n.height+a[1]};default:return{left:0,top:0}}},An=e=>{let t="0";["top","bottom"].includes(e)?t="50%":["left","lt","lb","tr","br"].includes(e)&&(t="100%");let n="0";return["left","right"].includes(e)?n="50%":["top","tl","tr","lt","rt"].includes(e)&&(n="100%"),`${t} ${n}`},zn=(e,t,n,o,{offset:r=0,translate:l=[0,0],customStyle:a={},autoFitPosition:s=!1}={})=>{let i=e,c=Z(e,n,o,{offset:r,translate:l});if(s){const v=Vn(e,c,{containerRect:t,popupRect:o,triggerRect:n,offset:r,translate:l});c=v.popupPosition,i=v.position}return{style:H({left:`${c.left}px`,top:`${c.top}px`},a),position:i}},Dn=(e,t,n,{customStyle:o={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(e)){let l=Math.abs(t.scrollLeft+t.width/2-n.scrollLeft);return l>n.width-8&&(t.width>n.width?l=n.width/2:l=n.width-8),["top","tl","tr"].includes(e)?H({left:`${l}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)"},o):H({left:`${l}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)"},o)}let r=Math.abs(t.scrollTop+t.height/2-n.scrollTop);return r>n.height-8&&(t.height>n.height?r=n.height/2:r=n.height-8),["left","lt","lb"].includes(e)?H({top:`${r}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)"},o):H({top:`${r}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)"},o)},Qn=e=>e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth,We=e=>{var t;const n=[];let o=e;for(;o&&o!==document.documentElement;)Qn(o)&&n.push(o),o=(t=o.parentElement)!=null?t:void 0;return n};function Nn(e,t){const n=h(e[t]);return mt(()=>{const o=e[t];n.value!==o&&(n.value=o)}),n}const He=Symbol("ArcoTrigger"),xn=({elementRef:e,onResize:t})=>{let n;return{createResizeObserver:()=>{!e.value||(n=new Zt(l=>{const a=l[0];Gt(t)&&t(a)}),n.observe(e.value))},destroyResizeObserver:()=>{n&&(n.disconnect(),n=null)}}};var Wn=K({name:"ClientOnly",setup(e,{slots:t}){const n=h(!1);return te(()=>n.value=!0),()=>{var o;return n.value?(o=t.default)==null?void 0:o.call(t):null}}});const Hn=({popupContainer:e,visible:t,defaultContainer:n="body",documentContainer:o})=>{const r=h(e.value),l=h(),a=()=>{const s=qe(e.value),i=s?e.value:n,c=s!=null?s:o?document.documentElement:qe(n);i!==r.value&&(r.value=i),c!==l.value&&(l.value=c)};return te(()=>a()),k(t,s=>{r.value!==e.value&&s&&a()}),{teleportContainer:r,containerRef:l}};var Zn=Object.defineProperty,Gn=Object.defineProperties,Kn=Object.getOwnPropertyDescriptors,Ze=Object.getOwnPropertySymbols,Jn=Object.prototype.hasOwnProperty,Un=Object.prototype.propertyIsEnumerable,Ge=(e,t,n)=>t in e?Zn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xn=(e,t)=>{for(var n in t||(t={}))Jn.call(t,n)&&Ge(e,n,t[n]);if(Ze)for(var n of Ze(t))Un.call(t,n)&&Ge(e,n,t[n]);return e},Yn=(e,t)=>Gn(e,Kn(t));const Rn=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"];var fe=K({name:"Trigger",inheritAttrs:!1,props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"bottom"},disabled:{type:Boolean,default:!1},popupOffset:{type:Number,default:0},popupTranslate:{type:[Array,Object]},showArrow:{type:Boolean,default:!1},alignPoint:{type:Boolean,default:!1},popupHoverStay:{type:Boolean,default:!0},blurToClose:{type:Boolean,default:!0},clickToClose:{type:Boolean,default:!0},clickOutsideToClose:{type:Boolean,default:!0},unmountOnClose:{type:Boolean,default:!0},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupStyle:{type:Object},animationName:{type:String,default:"fade-in"},duration:{type:[Number,Object]},mouseEnterDelay:{type:Number,default:100},mouseLeaveDelay:{type:Number,default:100},focusDelay:{type:Number,default:0},autoFitPopupWidth:{type:Boolean,default:!1},autoFitPopupMinWidth:{type:Boolean,default:!1},autoFixPosition:{type:Boolean,default:!0},popupContainer:{type:[String,Object]},updateAtScroll:{type:Boolean,default:!1},autoFitTransformOrigin:{type:Boolean,default:!1},hideEmpty:{type:Boolean,default:!1},openedClass:{type:[String,Array,Object]},autoFitPosition:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},preventFocus:{type:Boolean,default:!1}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,show:()=>!0,hide:()=>!0,resize:()=>!0},setup(e,{emit:t,slots:n,attrs:o}){const{popupContainer:r}=Oe(e),l=ee("trigger"),a=b(()=>On(o,Rn)),s=G(dt,void 0),i=b(()=>[].concat(e.trigger)),c=new Set,d=G(He,void 0),{children:v,firstElement:y}=Kt(),g=h(),O=h(e.defaultPopupVisible),S=h(e.position),P=h({}),$=h({}),w=h({}),q=h(),_=h({top:0,left:0}),m=b(()=>{var u;return(u=e.popupVisible)!=null?u:O.value}),{teleportContainer:z,containerRef:p}=Hn({popupContainer:r,visible:m,documentContainer:!0}),{zIndex:E}=Jt("popup",{visible:m});let M=0,L=!1;const jt=()=>{M&&(window.clearTimeout(M),M=0)},re=u=>{if(e.alignPoint){const{pageX:f,pageY:C}=u;_.value={top:C,left:f}}},D=()=>{if(!y.value||!g.value||!p.value)return;const u=p.value.getBoundingClientRect(),f=e.alignPoint?{top:_.value.top,bottom:_.value.top,left:_.value.left,right:_.value.left,scrollTop:_.value.top,scrollBottom:_.value.top,scrollLeft:_.value.left,scrollRight:_.value.left,width:0,height:0}:xe(y.value,u),C=xe(g.value,u),{style:Q,position:N}=zn(e.position,u,f,C,{offset:e.popupOffset,translate:e.popupTranslate,customStyle:e.popupStyle,autoFitPosition:e.autoFitPosition});e.autoFitTransformOrigin&&($.value={transformOrigin:An(N)}),e.autoFitPopupMinWidth?Q.minWidth=`${f.width}px`:e.autoFitPopupWidth&&(Q.width=`${f.width}px`),S.value!==N&&(S.value=N),P.value=Q,e.showArrow&&(w.value=Dn(N,f,C,{customStyle:e.arrowStyle}))},I=(u,f)=>{if(u===m.value&&M===0)return;const C=()=>{O.value=u,t("update:popupVisible",u),t("popupVisibleChange",u),u&&Se(()=>{D()})};f?(jt(),u!==m.value&&(M=window.setTimeout(C,f))):C()},Bt=u=>{var f;(f=o.onClick)==null||f.call(o,u),!(e.disabled||m.value&&!e.clickToClose)&&(i.value.includes("click")?(re(u),I(!m.value)):i.value.includes("contextMenu")&&m.value&&I(!1))},Pe=u=>{var f;(f=o.onMouseenter)==null||f.call(o,u),!(e.disabled||!i.value.includes("hover"))&&(re(u),I(!0,e.mouseEnterDelay))},Ee=u=>{d==null||d.onMouseenter(u),Pe(u)},Te=u=>{var f;(f=o.onMouseleave)==null||f.call(o,u),!(e.disabled||!i.value.includes("hover"))&&I(!1,e.mouseLeaveDelay)},Me=u=>{d==null||d.onMouseleave(u),Te(u)},qt=u=>{var f;(f=o.onFocusin)==null||f.call(o,u),!(e.disabled||!i.value.includes("focus"))&&I(!0,e.focusDelay)},It=u=>{var f;(f=o.onFocusout)==null||f.call(o,u),!(e.disabled||!i.value.includes("focus"))&&(!e.blurToClose||I(!1))},kt=u=>{var f;(f=o.onContextmenu)==null||f.call(o,u),!(e.disabled||!i.value.includes("contextMenu")||m.value&&!e.clickToClose)&&(re(u),I(!m.value),u.preventDefault())};vt(He,pt({onMouseenter:Ee,onMouseleave:Me,addChildRef:u=>{c.add(u),d==null||d.addChildRef(u)},removeChildRef:u=>{c.delete(u),d==null||d.removeChildRef(u)}}));const le=()=>{Yt(document.documentElement,"mousedown",ae),L=!1},je=Nn(n,"content"),Ft=b(()=>{var u;return e.hideEmpty&&Ut((u=je.value)==null?void 0:u.call(je))}),ae=u=>{var f,C,Q;if(!(((f=y.value)==null?void 0:f.contains(u.target))||((C=g.value)==null?void 0:C.contains(u.target)))){for(const N of c)if((Q=N.value)!=null&&Q.contains(u.target))return;le(),I(!1)}},J=yn(()=>{m.value&&D()}),se=()=>{m.value&&D()},Lt=()=>{se(),t("resize")},Vt=u=>{e.preventFocus&&u.preventDefault()};d==null||d.addChildRef(g);const At=b(()=>m.value?e.openedClass:void 0);let j;k(m,u=>{if(e.clickOutsideToClose&&(!u&&L?le():u&&!L&&(Ie(document.documentElement,"mousedown",ae),L=!0)),e.updateAtScroll||(s==null?void 0:s.updateAtScroll)){if(u){j=We(y.value);for(const f of j)f.addEventListener("scroll",J)}else if(j){for(const f of j)f.removeEventListener("scroll",J);j=void 0}}u&&(ie.value=!0)}),k(()=>[e.autoFitPopupWidth,e.autoFitPopupMinWidth],()=>{m.value&&D()});const{createResizeObserver:zt,destroyResizeObserver:Dt}=xn({elementRef:p,onResize:se});te(()=>{if(zt(),m.value&&(D(),e.clickOutsideToClose&&!L&&(Ie(document.documentElement,"mousedown",ae),L=!0),e.updateAtScroll||(s==null?void 0:s.updateAtScroll))){j=We(y.value);for(const u of j)u.addEventListener("scroll",J)}}),mt(()=>{m.value&&D()}),Rt(()=>{I(!1)}),en(()=>{if(d==null||d.removeChildRef(g),Dt(),L&&le(),j){for(const u of j)u.removeEventListener("scroll",J);j=void 0}});const ie=h(m.value),U=h(!1),Be=()=>{U.value=!0},Qt=()=>{U.value=!1,m.value&&t("show")},Nt=()=>{U.value=!1,m.value||(ie.value=!1,t("hide"))};return()=>{var u,f;return v.value=(f=(u=n.default)==null?void 0:u.call(n))!=null?f:[],Xt(v.value,{class:At.value,onClick:Bt,onMouseenter:Pe,onMouseleave:Te,onFocusin:qt,onFocusout:It,onContextmenu:kt}),B(an,null,[e.autoFixPosition?B(ke,{onResize:Lt},{default:()=>[v.value]}):v.value,B(Wn,null,{default:()=>[B(tn,{to:z.value,disabled:!e.renderToBody},{default:()=>[(!e.unmountOnClose||m.value||ie.value)&&!Ft.value&&B(ke,{onResize:se},{default:()=>[B("div",nn({ref:g,class:[`${l}-popup`,`${l}-position-${S.value}`],style:Yn(Xn({},P.value),{zIndex:E.value,pointerEvents:U.value?"none":"auto"}),"trigger-placement":S.value,onMouseenter:Ee,onMouseleave:Me,onMousedown:Vt},a.value),[B(on,{name:e.animationName,duration:e.duration,appear:!0,onBeforeEnter:Be,onAfterEnter:Qt,onBeforeLeave:Be,onAfterLeave:Nt},{default:()=>{var C;return[rn(B("div",{class:`${l}-popup-wrapper`,style:$.value},[B("div",{class:[`${l}-content`,e.contentClass],style:e.contentStyle},[(C=n.content)==null?void 0:C.call(n)]),e.showArrow&&B("div",{ref:q,class:[`${l}-arrow`,e.arrowClass],style:w.value},null)]),[[ln,m.value]])]}})])]})]})]})])}}});const eo=Object.assign(fe,{install:(e,t)=>{we(e,t);const n=_e(t);e.component(n+fe.name,fe)}});var to=Object.defineProperty,Ke=Object.getOwnPropertySymbols,no=Object.prototype.hasOwnProperty,oo=Object.prototype.propertyIsEnumerable,Je=(e,t,n)=>t in e?to(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ue=(e,t)=>{for(var n in t||(t={}))no.call(t,n)&&Je(e,n,t[n]);if(Ke)for(var n of Ke(t))oo.call(t,n)&&Je(e,n,t[n]);return e};const ro=K({name:"Tooltip",components:{Trigger:eo},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},content:String,position:{type:String,default:"top"},mini:{type:Boolean,default:!1},backgroundColor:{type:String},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:t}){const n=ee("tooltip"),o=h(e.defaultPopupVisible),r=b(()=>{var d;return(d=e.popupVisible)!=null?d:o.value}),l=d=>{o.value=d,t("update:popupVisible",d),t("popupVisibleChange",d)},a=b(()=>[`${n}-content`,e.contentClass,{[`${n}-mini`]:e.mini}]),s=b(()=>{if(e.backgroundColor||e.contentStyle)return Ue({backgroundColor:e.backgroundColor},e.contentStyle)}),i=b(()=>[`${n}-popup-arrow`,e.arrowClass]),c=b(()=>{if(e.backgroundColor||e.arrowStyle)return Ue({backgroundColor:e.backgroundColor},e.arrowStyle)});return{prefixCls:n,computedPopupVisible:r,contentCls:a,computedContentStyle:s,arrowCls:i,computedArrowStyle:c,handlePopupVisibleChange:l}}});function lo(e,t,n,o,r,l){const a=ft("Trigger");return T(),me(a,{class:x(e.prefixCls),trigger:"hover",position:e.position,"popup-visible":e.computedPopupVisible,"popup-offset":10,"show-arrow":"","content-class":e.contentCls,"content-style":e.computedContentStyle,"arrow-class":e.arrowCls,"arrow-style":e.computedArrowStyle,"popup-container":e.popupContainer,"animation-name":"zoom-in-fade-out","auto-fit-transform-origin":"",role:"tooltip",onPopupVisibleChange:e.handlePopupVisibleChange},{content:Ve(()=>[V(e.$slots,"content",{},()=>[sn(un(e.content),1)])]),default:Ve(()=>[V(e.$slots,"default")]),_:3},8,["class","position","popup-visible","content-class","content-style","arrow-class","arrow-style","popup-container","onPopupVisibleChange"])}var ve=be(ro,[["render",lo]]);const wr=Object.assign(ve,{install:(e,t)=>{we(e,t);const n=_e(t);e.component(n+ve.name,ve)}});var Xe;const W=typeof window<"u",he=e=>typeof e=="function",wt=e=>typeof e=="string",pe=()=>{};W&&((Xe=window==null?void 0:window.navigator)==null?void 0:Xe.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ne(e){return typeof e=="function"?e():yt(e)}function ao(e,t){function n(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return n}const _t=e=>e();function so(e=_t){const t=h(!0);function n(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:n,resume:o,eventFilter:(...l)=>{t.value&&e(...l)}}}function io(e){return e}function oe(e){return cn()?(dn(e),!0):!1}function uo(e){return typeof e=="function"?b(e):h(e)}function co(e,t=!0){ht()?fn(e):t?e():Se(e)}function Ot(e,t=!0){ht()?te(e):t?e():Se(e)}function fo(e,t,n={}){const{immediate:o=!0}=n,r=h(!1);let l=null;function a(){l&&(clearTimeout(l),l=null)}function s(){r.value=!1,a()}function i(...c){a(),r.value=!0,l=setTimeout(()=>{r.value=!1,l=null,e(...c)},ne(t))}return o&&(r.value=!0,W&&i()),oe(s),{isPending:r,start:i,stop:s}}var Ye=Object.getOwnPropertySymbols,vo=Object.prototype.hasOwnProperty,po=Object.prototype.propertyIsEnumerable,mo=(e,t)=>{var n={};for(var o in e)vo.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Ye)for(var o of Ye(e))t.indexOf(o)<0&&po.call(e,o)&&(n[o]=e[o]);return n};function ho(e,t,n={}){const o=n,{eventFilter:r=_t}=o,l=mo(o,["eventFilter"]);return k(e,ao(r,t),l)}var yo=Object.defineProperty,go=Object.defineProperties,bo=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable,Re=(e,t,n)=>t in e?yo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wo=(e,t)=>{for(var n in t||(t={}))St.call(t,n)&&Re(e,n,t[n]);if(R)for(var n of R(t))$t.call(t,n)&&Re(e,n,t[n]);return e},_o=(e,t)=>go(e,bo(t)),Oo=(e,t)=>{var n={};for(var o in e)St.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&R)for(var o of R(e))t.indexOf(o)<0&&$t.call(e,o)&&(n[o]=e[o]);return n};function So(e,t,n={}){const o=n,{eventFilter:r}=o,l=Oo(o,["eventFilter"]),{eventFilter:a,pause:s,resume:i,isActive:c}=so(r);return{stop:ho(e,t,_o(wo({},l),{eventFilter:a})),pause:s,resume:i,isActive:c}}function Ct(e){var t;const n=ne(e);return(t=n==null?void 0:n.$el)!=null?t:n}const A=W?window:void 0,$o=W?window.document:void 0,Co=W?window.navigator:void 0;W&&window.location;function Pt(...e){let t,n,o,r;if(wt(e[0])?([n,o,r]=e,t=A):[t,n,o,r]=e,!t)return pe;let l=pe;const a=k(()=>Ct(t),i=>{l(),i&&(i.addEventListener(n,o,r),l=()=>{i.removeEventListener(n,o,r),l=pe})},{immediate:!0,flush:"post"}),s=()=>{a(),l()};return oe(s),s}function Ce(e,t=!1){const n=h(),o=()=>n.value=Boolean(e());return o(),Ot(o,t),n}function Po(e,t={}){const{window:n=A}=t,o=Ce(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const l=h(!1),a=()=>{!o.value||(r||(r=n.matchMedia(e)),l.value=r.matches)};return co(()=>{a(),r&&("addEventListener"in r?r.addEventListener("change",a):r.addListener(a),oe(()=>{"removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a)}))}),l}function _r(e={}){const{navigator:t=Co,read:n=!1,source:o,copiedDuring:r=1500}=e,l=["copy","cut"],a=Ce(()=>t&&"clipboard"in t),s=h(""),i=h(!1),c=fo(()=>i.value=!1,r);function d(){t.clipboard.readText().then(y=>{s.value=y})}if(a.value&&n)for(const y of l)Pt(y,d);async function v(y=ne(o)){a.value&&y!=null&&(await t.clipboard.writeText(y),s.value=y,i.value=!0,c.start())}return{isSupported:a,text:s,copied:i,copy:v}}const ye=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ge="__vueuse_ssr_handlers__";ye[ge]=ye[ge]||{};const Eo=ye[ge];function Et(e,t){return Eo[e]||t}function To(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var Mo=Object.defineProperty,et=Object.getOwnPropertySymbols,jo=Object.prototype.hasOwnProperty,Bo=Object.prototype.propertyIsEnumerable,tt=(e,t,n)=>t in e?Mo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nt=(e,t)=>{for(var n in t||(t={}))jo.call(t,n)&&tt(e,n,t[n]);if(et)for(var n of et(t))Bo.call(t,n)&&tt(e,n,t[n]);return e};const qo={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Io(e,t,n,o={}){var r;const{flush:l="pre",deep:a=!0,listenToStorageChanges:s=!0,writeDefaults:i=!0,mergeDefaults:c=!1,shallow:d,window:v=A,eventFilter:y,onError:g=p=>{console.error(p)}}=o,O=(d?Y:h)(t);if(!n)try{n=Et("getDefaultStorage",()=>{var p;return(p=A)==null?void 0:p.localStorage})()}catch(p){g(p)}if(!n)return O;const S=ne(t),P=To(S),$=(r=o.serializer)!=null?r:qo[P],{pause:w,resume:q}=So(O,()=>_(O.value),{flush:l,deep:a,eventFilter:y});return v&&s&&Pt(v,"storage",z),z(),O;function _(p){try{p==null?n.removeItem(e):n.setItem(e,$.write(p))}catch(E){g(E)}}function m(p){if(!(p&&p.key!==e)){w();try{const E=p?p.newValue:n.getItem(e);if(E==null)return i&&S!==null&&n.setItem(e,$.write(S)),S;if(!p&&c){const M=$.read(E);return he(c)?c(M,S):P==="object"&&!Array.isArray(M)?nt(nt({},S),M):M}else return typeof E!="string"?E:$.read(E)}catch(E){g(E)}finally{q()}}}function z(p){p&&p.key!==e||(O.value=m(p))}}function Tt(e){return Po("(prefers-color-scheme: dark)",e)}var ko=Object.defineProperty,ot=Object.getOwnPropertySymbols,Fo=Object.prototype.hasOwnProperty,Lo=Object.prototype.propertyIsEnumerable,rt=(e,t,n)=>t in e?ko(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vo=(e,t)=>{for(var n in t||(t={}))Fo.call(t,n)&&rt(e,n,t[n]);if(ot)for(var n of ot(t))Lo.call(t,n)&&rt(e,n,t[n]);return e};function Mt(e={}){const{selector:t="html",attribute:n="class",initialValue:o="auto",window:r=A,storage:l,storageKey:a="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:i,emitAuto:c}=e,d=Vo({auto:"",light:"light",dark:"dark"},e.modes||{}),v=Tt({window:r}),y=b(()=>v.value?"dark":"light"),g=i||(a==null?h(o):Io(a,o,l,{window:r,listenToStorageChanges:s})),O=b({get(){return g.value==="auto"&&!c?y.value:g.value},set(w){g.value=w}}),S=Et("updateHTMLAttrs",(w,q,_)=>{const m=r==null?void 0:r.document.querySelector(w);if(!!m)if(q==="class"){const z=_.split(/\s/g);Object.values(d).flatMap(p=>(p||"").split(/\s/g)).filter(Boolean).forEach(p=>{z.includes(p)?m.classList.add(p):m.classList.remove(p)})}else m.setAttribute(q,_)});function P(w){var q;const _=w==="auto"?y.value:w;S(t,n,(q=d[_])!=null?q:_)}function $(w){e.onChanged?e.onChanged(w,P):P(w)}return k(O,$,{flush:"post",immediate:!0}),c&&k(y,()=>$(O.value),{flush:"post"}),Ot(()=>$(O.value)),O}function Or(e,t){var n;const o=Y((n=t==null?void 0:t.initialValue)!=null?n:e[0]),r=b({get(){var c;let d=t!=null&&t.getIndexOf?t.getIndexOf(o.value,e):e.indexOf(o.value);return d<0&&(d=(c=t==null?void 0:t.fallbackIndex)!=null?c:0),d},set(c){l(c)}});function l(c){const d=e.length,v=(c%d+d)%d,y=e[v];return o.value=y,y}function a(c=1){return l(r.value+c)}function s(c=1){return a(c)}function i(c=1){return a(-c)}return{state:o,index:r,next:s,prev:i}}var Ao=Object.defineProperty,zo=Object.defineProperties,Do=Object.getOwnPropertyDescriptors,lt=Object.getOwnPropertySymbols,Qo=Object.prototype.hasOwnProperty,No=Object.prototype.propertyIsEnumerable,at=(e,t,n)=>t in e?Ao(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xo=(e,t)=>{for(var n in t||(t={}))Qo.call(t,n)&&at(e,n,t[n]);if(lt)for(var n of lt(t))No.call(t,n)&&at(e,n,t[n]);return e},Wo=(e,t)=>zo(e,Do(t));function Sr(e={}){const{valueDark:t="dark",valueLight:n="",window:o=A}=e,r=Mt(Wo(xo({},e),{onChanged:(s,i)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,s==="dark"):i(s)},modes:{dark:t,light:n}})),l=Tt({window:o});return b({get(){return r.value==="dark"},set(s){s===l.value?r.value="auto":r.value=s?"dark":"light"}})}var st=Object.getOwnPropertySymbols,Ho=Object.prototype.hasOwnProperty,Zo=Object.prototype.propertyIsEnumerable,Go=(e,t)=>{var n={};for(var o in e)Ho.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&st)for(var o of st(e))t.indexOf(o)<0&&Zo.call(e,o)&&(n[o]=e[o]);return n};function Ko(e,t,n={}){const o=n,{window:r=A}=o,l=Go(o,["window"]);let a;const s=Ce(()=>r&&"MutationObserver"in r),i=()=>{a&&(a.disconnect(),a=void 0)},c=k(()=>Ct(e),v=>{i(),s.value&&r&&v&&(a=new MutationObserver(t),a.observe(v,l))},{immediate:!0}),d=()=>{i(),c()};return oe(d),{isSupported:s,stop:d}}var it;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(it||(it={}));function $r(e=null,t={}){var n,o;const{document:r=$o,observe:l=!1,titleTemplate:a="%s"}=t,s=uo((n=e!=null?e:r==null?void 0:r.title)!=null?n:null),i=e&&he(e);function c(d){return he(a)?a(d):yt(a).replace("%s",d)}return k(s,(d,v)=>{wt(d)&&d!==v&&r&&(r.title=c(d))},{immediate:!0}),l&&r&&!i&&Ko((o=r.head)==null?void 0:o.querySelector("title"),()=>{r&&r.title!==s.value&&(s.value=c(r.title))},{childList:!0}),s}var Jo=Object.defineProperty,ut=Object.getOwnPropertySymbols,Uo=Object.prototype.hasOwnProperty,Xo=Object.prototype.propertyIsEnumerable,ct=(e,t,n)=>t in e?Jo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yo=(e,t)=>{for(var n in t||(t={}))Uo.call(t,n)&&ct(e,n,t[n]);if(ut)for(var n of ut(t))Xo.call(t,n)&&ct(e,n,t[n]);return e};const Ro={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Yo({linear:io},Ro);const er={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},tr=$e("path",{fill:"currentColor",d:"M12 4q-.425 0-.712-.288Q11 3.425 11 3V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v1q0 .425-.287.712Q12.425 4 12 4Zm0 19q-.425 0-.712-.288Q11 22.425 11 22v-1q0-.425.288-.712Q11.575 20 12 20t.713.288Q13 20.575 13 21v1q0 .425-.287.712Q12.425 23 12 23Zm9-10q-.425 0-.712-.288Q20 12.425 20 12t.288-.713Q20.575 11 21 11h1q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h1q.425 0 .713.287Q4 11.575 4 12t-.287.712Q3.425 13 3 13Zm16-7q-.275-.275-.275-.688q0-.412.275-.712l.35-.375q.275-.3.7-.3q.425 0 .725.3t.3.725q0 .425-.3.725l-.375.35q-.3.275-.7.275q-.4 0-.7-.3ZM4.225 19.775q-.3-.3-.3-.725t.3-.725l.375-.35q.3-.275.7-.275q.4 0 .7.3q.275.275.288.7q.012.425-.288.7l-.35.375q-.275.3-.7.3q-.425 0-.725-.3Zm14.1 0l-.35-.375q-.275-.3-.275-.7q0-.4.3-.7q.275-.275.7-.288q.425-.012.7.288l.375.35q.3.275.3.7q0 .425-.3.725t-.725.3q-.425 0-.725-.3ZM4.6 6l-.375-.35q-.3-.275-.3-.7q0-.425.3-.725t.725-.3q.425 0 .725.3l.35.375q.275.3.275.7q0 .4-.3.7q-.275.275-.688.275Q4.9 6.275 4.6 6ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"},null,-1),nr=[tr];function or(e,t){return T(),F("svg",er,nr)}const rr={name:"material-symbols-wb-sunny-rounded",render:or},lr={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ar=$e("path",{fill:"currentColor",d:"M12 21q-3.775 0-6.388-2.613Q3 15.775 3 12q0-3.45 2.25-5.988Q7.5 3.475 11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375Q11.1 6.7 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q.775 0 1.538-.225q.762-.225 1.362-.625q.525-.35 1.075-.038q.55.313.475.988q-.35 3.45-2.937 5.725Q15.425 21 12 21Z"},null,-1),sr=[ar];function ir(e,t){return T(),F("svg",lr,sr)}const ur={name:"material-symbols-dark-mode-rounded",render:ir},cr={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},dr=$e("path",{fill:"currentColor",d:"M2 21q-.425 0-.712-.288Q1 20.425 1 20t.288-.712Q1.575 19 2 19h20q.425 0 .712.288q.288.287.288.712t-.288.712Q22.425 21 22 21Zm2-3q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18Z"},null,-1),fr=[dr];function vr(e,t){return T(),F("svg",cr,fr)}const pr={name:"material-symbols-computer",render:vr},Cr=vn("system",()=>{var s;const e=Y(null),t=Y([]),n=i=>{i&&i.length>0&&(t.value=[...i],e.value?e.value=t.value.find(c=>c.name===e.value.name):e.value=t.value[0])},o=h([{name:"auto",icon:ue(pr),title:"\u81EA\u52A8\u6A21\u5F0F"},{name:"light",icon:ue(rr),title:"\u4EAE\u8272\u6A21\u5F0F"},{name:"dark",icon:ue(ur),title:"\u6697\u8272\u6A21\u5F0F"}]),r=h(null),l=Mt({attribute:"arco-theme",emitAuto:!0,selector:"body",initialValue:(s=r.value)==null?void 0:s.name,storageKey:null});return mn(()=>{var i;return l.value=(i=r.value)==null?void 0:i.name}),{currentMode:r,modeList:o,initMode:()=>{r.value?r.value=o.value.find(i=>i.name===r.value.name):r.value=o.value[0]},currentSwitchlayout:e,switchLayoutList:t,initSwitchLayout:n}},{persist:{key:`${pn("appCode")}-pinia-system`,enabled:!0,storage:window.localStorage,paths:["currentSwitchlayout.name","currentMode.name"]}});export{br as B,eo as T,de as a,wr as b,Cr as c,Or as d,$r as e,$n as f,Cn as g,Sr as h,_r as i,On as o,yn as t,Nn as u};
