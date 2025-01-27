function fg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function rf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sf={exports:{}},so={},of={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei=Symbol.for("react.element"),hg=Symbol.for("react.portal"),pg=Symbol.for("react.fragment"),mg=Symbol.for("react.strict_mode"),gg=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),yg=Symbol.for("react.context"),wg=Symbol.for("react.forward_ref"),xg=Symbol.for("react.suspense"),_g=Symbol.for("react.memo"),Sg=Symbol.for("react.lazy"),Bc=Symbol.iterator;function Eg(e){return e===null||typeof e!="object"?null:(e=Bc&&e[Bc]||e["@@iterator"],typeof e=="function"?e:null)}var af={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lf=Object.assign,cf={};function mr(e,t,n){this.props=e,this.context=t,this.refs=cf,this.updater=n||af}mr.prototype.isReactComponent={};mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uf(){}uf.prototype=mr.prototype;function Il(e,t,n){this.props=e,this.context=t,this.refs=cf,this.updater=n||af}var kl=Il.prototype=new uf;kl.constructor=Il;lf(kl,mr.prototype);kl.isPureReactComponent=!0;var Vc=Array.isArray,df=Object.prototype.hasOwnProperty,Nl={current:null},ff={key:!0,ref:!0,__self:!0,__source:!0};function hf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)df.call(t,r)&&!ff.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ei,type:e,key:s,ref:o,props:i,_owner:Nl.current}}function Ig(e,t){return{$$typeof:Ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ei}function kg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wc=/\/+/g;function Oo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kg(""+e.key):t.toString(36)}function ss(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ei:case hg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Oo(o,0):r,Vc(i)?(n="",e!=null&&(n=e.replace(Wc,"$&/")+"/"),ss(i,t,n,"",function(u){return u})):i!=null&&(Cl(i)&&(i=Ig(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Vc(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Oo(s,a);o+=ss(s,t,n,l,i)}else if(l=Eg(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Oo(s,a++),o+=ss(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Mi(e,t,n){if(e==null)return e;var r=[],i=0;return ss(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Ng(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},os={transition:null},Cg={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:os,ReactCurrentOwner:Nl};function pf(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Mi,forEach:function(e,t,n){Mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mi(e,function(){t++}),t},toArray:function(e){return Mi(e,function(t){return t})||[]},only:function(e){if(!Cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=mr;A.Fragment=pg;A.Profiler=gg;A.PureComponent=Il;A.StrictMode=mg;A.Suspense=xg;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cg;A.act=pf;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Nl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)df.call(t,l)&&!ff.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ei,type:e.type,key:i,ref:s,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:yg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vg,_context:e},e.Consumer=e};A.createElement=hf;A.createFactory=function(e){var t=hf.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:wg,render:e}};A.isValidElement=Cl;A.lazy=function(e){return{$$typeof:Sg,_payload:{_status:-1,_result:e},_init:Ng}};A.memo=function(e,t){return{$$typeof:_g,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=os.transition;os.transition={};try{e()}finally{os.transition=t}};A.unstable_act=pf;A.useCallback=function(e,t){return ve.current.useCallback(e,t)};A.useContext=function(e){return ve.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};A.useEffect=function(e,t){return ve.current.useEffect(e,t)};A.useId=function(){return ve.current.useId()};A.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ve.current.useMemo(e,t)};A.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};A.useRef=function(e){return ve.current.useRef(e)};A.useState=function(e){return ve.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return ve.current.useTransition()};A.version="18.3.1";of.exports=A;var y=of.exports;const Tl=rf(y),Tg=fg({__proto__:null,default:Tl},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg=y,Pg=Symbol.for("react.element"),Rg=Symbol.for("react.fragment"),jg=Object.prototype.hasOwnProperty,Og=bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ag={key:!0,ref:!0,__self:!0,__source:!0};function mf(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)jg.call(t,r)&&!Ag.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Pg,type:e,key:s,ref:o,props:i,_owner:Og.current}}so.Fragment=Rg;so.jsx=mf;so.jsxs=mf;sf.exports=so;var c=sf.exports,gf={exports:{}},Ae={},vf={exports:{}},yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,R){var j=N.length;N.push(R);e:for(;0<j;){var G=j-1>>>1,ne=N[G];if(0<i(ne,R))N[G]=R,N[j]=ne,j=G;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var R=N[0],j=N.pop();if(j!==R){N[0]=j;e:for(var G=0,ne=N.length,Li=ne>>>1;G<Li;){var un=2*(G+1)-1,jo=N[un],dn=un+1,Di=N[dn];if(0>i(jo,j))dn<ne&&0>i(Di,jo)?(N[G]=Di,N[dn]=j,G=dn):(N[G]=jo,N[un]=j,G=un);else if(dn<ne&&0>i(Di,j))N[G]=Di,N[dn]=j,G=dn;else break e}}return R}function i(N,R){var j=N.sortIndex-R.sortIndex;return j!==0?j:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,p=3,v=!1,w=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=N)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function x(N){if(_=!1,g(N),!w)if(n(l)!==null)w=!0,Po(I);else{var R=n(u);R!==null&&Ro(x,R.startTime-N)}}function I(N,R){w=!1,_&&(_=!1,m(P),P=-1),v=!0;var j=p;try{for(g(R),f=n(l);f!==null&&(!(f.expirationTime>R)||N&&!Be());){var G=f.callback;if(typeof G=="function"){f.callback=null,p=f.priorityLevel;var ne=G(f.expirationTime<=R);R=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(l)&&r(l),g(R)}else r(l);f=n(l)}if(f!==null)var Li=!0;else{var un=n(u);un!==null&&Ro(x,un.startTime-R),Li=!1}return Li}finally{f=null,p=j,v=!1}}var T=!1,b=null,P=-1,$=5,O=-1;function Be(){return!(e.unstable_now()-O<$)}function Ir(){if(b!==null){var N=e.unstable_now();O=N;var R=!0;try{R=b(!0,N)}finally{R?kr():(T=!1,b=null)}}else T=!1}var kr;if(typeof h=="function")kr=function(){h(Ir)};else if(typeof MessageChannel<"u"){var zc=new MessageChannel,dg=zc.port2;zc.port1.onmessage=Ir,kr=function(){dg.postMessage(null)}}else kr=function(){E(Ir,0)};function Po(N){b=N,T||(T=!0,kr())}function Ro(N,R){P=E(function(){N(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Po(I))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var j=p;p=R;try{return N()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=p;p=N;try{return R()}finally{p=j}},e.unstable_scheduleCallback=function(N,R,j){var G=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?G+j:G):j=G,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=j+ne,N={id:d++,callback:R,priorityLevel:N,startTime:j,expirationTime:ne,sortIndex:-1},j>G?(N.sortIndex=j,t(u,N),n(l)===null&&N===n(u)&&(_?(m(P),P=-1):_=!0,Ro(x,j-G))):(N.sortIndex=ne,t(l,N),w||v||(w=!0,Po(I))),N},e.unstable_shouldYield=Be,e.unstable_wrapCallback=function(N){var R=p;return function(){var j=p;p=R;try{return N.apply(this,arguments)}finally{p=j}}}})(yf);vf.exports=yf;var Lg=vf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg=y,Oe=Lg;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wf=new Set,ti={};function jn(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for(ti[e]=t,e=0;e<t.length;e++)wf.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ya=Object.prototype.hasOwnProperty,Mg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hc={},qc={};function Ug(e){return ya.call(qc,e)?!0:ya.call(Hc,e)?!1:Mg.test(e)?qc[e]=!0:(Hc[e]=!0,!1)}function Fg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $g(e,t,n,r){if(t===null||typeof t>"u"||Fg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var bl=/[\-:]([a-z])/g;function Pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bl,Pl);le[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bl,Pl);le[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bl,Pl);le[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rl(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($g(t,n,i,r)&&(n=null),r||i===null?Ug(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nt=Dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),jl=Symbol.for("react.strict_mode"),wa=Symbol.for("react.profiler"),xf=Symbol.for("react.provider"),_f=Symbol.for("react.context"),Ol=Symbol.for("react.forward_ref"),xa=Symbol.for("react.suspense"),_a=Symbol.for("react.suspense_list"),Al=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Sf=Symbol.for("react.offscreen"),Kc=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=Kc&&e[Kc]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ao;function Dr(e){if(Ao===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ao=t&&t[1]||""}return`
`+Ao+e}var Lo=!1;function Do(e,t){if(!e||Lo)return"";Lo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function zg(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Do(e.type,!1),e;case 11:return e=Do(e.type.render,!1),e;case 1:return e=Do(e.type,!0),e;default:return""}}function Sa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case Un:return"Portal";case wa:return"Profiler";case jl:return"StrictMode";case xa:return"Suspense";case _a:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _f:return(e.displayName||"Context")+".Consumer";case xf:return(e._context.displayName||"Context")+".Provider";case Ol:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Al:return t=e.displayName||null,t!==null?t:Sa(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return Sa(e(t))}catch{}}return null}function Bg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sa(t);case 8:return t===jl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ef(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vg(e){var t=Ef(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fi(e){e._valueTracker||(e._valueTracker=Vg(e))}function If(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ef(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ea(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kf(e,t){t=t.checked,t!=null&&Rl(e,"checked",t,!1)}function Ia(e,t){kf(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ka(e,t.type,n):t.hasOwnProperty("defaultValue")&&ka(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ka(e,t,n){(t!=="number"||Es(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function Jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Mr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Nf(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ca(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $i,Tf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wg=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){Wg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function bf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function Pf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Hg=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(e,t){if(t){if(Hg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function ba(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function Ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,Xn=null,Zn=null;function Xc(e){if(e=Ni(e)){if(typeof Ra!="function")throw Error(S(280));var t=e.stateNode;t&&(t=uo(t),Ra(e.stateNode,e.type,t))}}function Rf(e){Xn?Zn?Zn.push(e):Zn=[e]:Xn=e}function jf(){if(Xn){var e=Xn,t=Zn;if(Zn=Xn=null,Xc(e),t)for(e=0;e<t.length;e++)Xc(t[e])}}function Of(e,t){return e(t)}function Af(){}var Mo=!1;function Lf(e,t,n){if(Mo)return e(t,n);Mo=!0;try{return Of(e,t,n)}finally{Mo=!1,(Xn!==null||Zn!==null)&&(Af(),jf())}}function ri(e,t){var n=e.stateNode;if(n===null)return null;var r=uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var ja=!1;if(yt)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){ja=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{ja=!1}function qg(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Wr=!1,Is=null,ks=!1,Oa=null,Kg={onError:function(e){Wr=!0,Is=e}};function Gg(e,t,n,r,i,s,o,a,l){Wr=!1,Is=null,qg.apply(Kg,arguments)}function Qg(e,t,n,r,i,s,o,a,l){if(Gg.apply(this,arguments),Wr){if(Wr){var u=Is;Wr=!1,Is=null}else throw Error(S(198));ks||(ks=!0,Oa=u)}}function On(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Df(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zc(e){if(On(e)!==e)throw Error(S(188))}function Yg(e){var t=e.alternate;if(!t){if(t=On(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zc(i),e;if(s===r)return Zc(i),t;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Mf(e){return e=Yg(e),e!==null?Uf(e):null}function Uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uf(e);if(t!==null)return t;e=e.sibling}return null}var Ff=Oe.unstable_scheduleCallback,eu=Oe.unstable_cancelCallback,Jg=Oe.unstable_shouldYield,Xg=Oe.unstable_requestPaint,Q=Oe.unstable_now,Zg=Oe.unstable_getCurrentPriorityLevel,Dl=Oe.unstable_ImmediatePriority,$f=Oe.unstable_UserBlockingPriority,Ns=Oe.unstable_NormalPriority,ev=Oe.unstable_LowPriority,zf=Oe.unstable_IdlePriority,oo=null,nt=null;function tv(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(oo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:iv,nv=Math.log,rv=Math.LN2;function iv(e){return e>>>=0,e===0?32:31-(nv(e)/rv|0)|0}var zi=64,Bi=4194304;function Ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ur(a):(s&=o,s!==0&&(r=Ur(s)))}else o=n&~i,o!==0?r=Ur(o):s!==0&&(r=Ur(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),i=1<<n,r|=e[n],t&=~i;return r}function sv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ov(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ge(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=sv(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bf(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function Uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function av(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ge(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Ml(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function Vf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wf,Ul,Hf,qf,Kf,La=!1,Vi=[],Vt=null,Wt=null,Ht=null,ii=new Map,si=new Map,Ot=[],lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tu(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function Tr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ni(t),t!==null&&Ul(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cv(e,t,n,r,i){switch(t){case"focusin":return Vt=Tr(Vt,e,t,n,r,i),!0;case"dragenter":return Wt=Tr(Wt,e,t,n,r,i),!0;case"mouseover":return Ht=Tr(Ht,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ii.set(s,Tr(ii.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,si.set(s,Tr(si.get(s)||null,e,t,n,r,i)),!0}return!1}function Gf(e){var t=mn(e.target);if(t!==null){var n=On(t);if(n!==null){if(t=n.tag,t===13){if(t=Df(n),t!==null){e.blockedOn=t,Kf(e.priority,function(){Hf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function as(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Da(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pa=r,n.target.dispatchEvent(r),Pa=null}else return t=Ni(n),t!==null&&Ul(t),e.blockedOn=n,!1;t.shift()}return!0}function nu(e,t,n){as(e)&&n.delete(t)}function uv(){La=!1,Vt!==null&&as(Vt)&&(Vt=null),Wt!==null&&as(Wt)&&(Wt=null),Ht!==null&&as(Ht)&&(Ht=null),ii.forEach(nu),si.forEach(nu)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,La||(La=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,uv)))}function oi(e){function t(i){return br(i,e)}if(0<Vi.length){br(Vi[0],e);for(var n=1;n<Vi.length;n++){var r=Vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&br(Vt,e),Wt!==null&&br(Wt,e),Ht!==null&&br(Ht,e),ii.forEach(t),si.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Gf(n),n.blockedOn===null&&Ot.shift()}var er=Nt.ReactCurrentBatchConfig,Ts=!0;function dv(e,t,n,r){var i=M,s=er.transition;er.transition=null;try{M=1,Fl(e,t,n,r)}finally{M=i,er.transition=s}}function fv(e,t,n,r){var i=M,s=er.transition;er.transition=null;try{M=4,Fl(e,t,n,r)}finally{M=i,er.transition=s}}function Fl(e,t,n,r){if(Ts){var i=Da(e,t,n,r);if(i===null)Go(e,t,r,bs,n),tu(e,r);else if(cv(i,e,t,n,r))r.stopPropagation();else if(tu(e,r),t&4&&-1<lv.indexOf(e)){for(;i!==null;){var s=Ni(i);if(s!==null&&Wf(s),s=Da(e,t,n,r),s===null&&Go(e,t,r,bs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Go(e,t,r,null,n)}}var bs=null;function Da(e,t,n,r){if(bs=null,e=Ll(r),e=mn(e),e!==null)if(t=On(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Df(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bs=e,null}function Qf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zg()){case Dl:return 1;case $f:return 4;case Ns:case ev:return 16;case zf:return 536870912;default:return 16}default:return 16}}var $t=null,$l=null,ls=null;function Yf(){if(ls)return ls;var e,t=$l,n=t.length,r,i="value"in $t?$t.value:$t.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ls=i.slice(e,1<r?1-r:void 0)}function cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function ru(){return!1}function Le(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wi:ru,this.isPropagationStopped=ru,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Le(gr),ki=q({},gr,{view:0,detail:0}),hv=Le(ki),Fo,$o,Pr,ao=q({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(Fo=e.screenX-Pr.screenX,$o=e.screenY-Pr.screenY):$o=Fo=0,Pr=e),Fo)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),iu=Le(ao),pv=q({},ao,{dataTransfer:0}),mv=Le(pv),gv=q({},ki,{relatedTarget:0}),zo=Le(gv),vv=q({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=Le(vv),wv=q({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xv=Le(wv),_v=q({},gr,{data:0}),su=Le(_v),Sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Iv[e])?!!t[e]:!1}function Bl(){return kv}var Nv=q({},ki,{key:function(e){if(e.key){var t=Sv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ev[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cv=Le(Nv),Tv=q({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ou=Le(Tv),bv=q({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),Pv=Le(bv),Rv=q({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jv=Le(Rv),Ov=q({},ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=Le(Ov),Lv=[9,13,27,32],Vl=yt&&"CompositionEvent"in window,Hr=null;yt&&"documentMode"in document&&(Hr=document.documentMode);var Dv=yt&&"TextEvent"in window&&!Hr,Jf=yt&&(!Vl||Hr&&8<Hr&&11>=Hr),au=" ",lu=!1;function Xf(e,t){switch(e){case"keyup":return Lv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Mv(e,t){switch(e){case"compositionend":return Zf(t);case"keypress":return t.which!==32?null:(lu=!0,au);case"textInput":return e=t.data,e===au&&lu?null:e;default:return null}}function Uv(e,t){if($n)return e==="compositionend"||!Vl&&Xf(e,t)?(e=Yf(),ls=$l=$t=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jf&&t.locale!=="ko"?null:t.data;default:return null}}var Fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fv[e.type]:t==="textarea"}function eh(e,t,n,r){Rf(r),t=Ps(t,"onChange"),0<t.length&&(n=new zl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qr=null,ai=null;function $v(e){dh(e,0)}function lo(e){var t=Vn(e);if(If(t))return e}function zv(e,t){if(e==="change")return t}var th=!1;if(yt){var Bo;if(yt){var Vo="oninput"in document;if(!Vo){var uu=document.createElement("div");uu.setAttribute("oninput","return;"),Vo=typeof uu.oninput=="function"}Bo=Vo}else Bo=!1;th=Bo&&(!document.documentMode||9<document.documentMode)}function du(){qr&&(qr.detachEvent("onpropertychange",nh),ai=qr=null)}function nh(e){if(e.propertyName==="value"&&lo(ai)){var t=[];eh(t,ai,e,Ll(e)),Lf($v,t)}}function Bv(e,t,n){e==="focusin"?(du(),qr=t,ai=n,qr.attachEvent("onpropertychange",nh)):e==="focusout"&&du()}function Vv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(ai)}function Wv(e,t){if(e==="click")return lo(t)}function Hv(e,t){if(e==="input"||e==="change")return lo(t)}function qv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:qv;function li(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ya.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hu(e,t){var n=fu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fu(n)}}function rh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ih(){for(var e=window,t=Es();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Es(e.document)}return t}function Wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kv(e){var t=ih(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rh(n.ownerDocument.documentElement,n)){if(r!==null&&Wl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=hu(n,s);var o=hu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gv=yt&&"documentMode"in document&&11>=document.documentMode,zn=null,Ma=null,Kr=null,Ua=!1;function pu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ua||zn==null||zn!==Es(r)||(r=zn,"selectionStart"in r&&Wl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&li(Kr,r)||(Kr=r,r=Ps(Ma,"onSelect"),0<r.length&&(t=new zl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bn={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Wo={},sh={};yt&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function co(e){if(Wo[e])return Wo[e];if(!Bn[e])return e;var t=Bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sh)return Wo[e]=t[n];return e}var oh=co("animationend"),ah=co("animationiteration"),lh=co("animationstart"),ch=co("transitionend"),uh=new Map,mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){uh.set(e,t),jn(t,[e])}for(var Ho=0;Ho<mu.length;Ho++){var qo=mu[Ho],Qv=qo.toLowerCase(),Yv=qo[0].toUpperCase()+qo.slice(1);rn(Qv,"on"+Yv)}rn(oh,"onAnimationEnd");rn(ah,"onAnimationIteration");rn(lh,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(ch,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function gu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qg(r,t,void 0,e),e.currentTarget=null}function dh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;gu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;gu(i,a,u),s=l}}}if(ks)throw e=Oa,ks=!1,Oa=null,e}function z(e,t){var n=t[Va];n===void 0&&(n=t[Va]=new Set);var r=e+"__bubble";n.has(r)||(fh(t,e,2,!1),n.add(r))}function Ko(e,t,n){var r=0;t&&(r|=4),fh(n,e,r,t)}var qi="_reactListening"+Math.random().toString(36).slice(2);function ci(e){if(!e[qi]){e[qi]=!0,wf.forEach(function(n){n!=="selectionchange"&&(Jv.has(n)||Ko(n,!1,e),Ko(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qi]||(t[qi]=!0,Ko("selectionchange",!1,t))}}function fh(e,t,n,r){switch(Qf(t)){case 1:var i=dv;break;case 4:i=fv;break;default:i=Fl}n=i.bind(null,t,n,e),i=void 0,!ja||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Go(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Lf(function(){var u=s,d=Ll(n),f=[];e:{var p=uh.get(e);if(p!==void 0){var v=zl,w=e;switch(e){case"keypress":if(cs(n)===0)break e;case"keydown":case"keyup":v=Cv;break;case"focusin":w="focus",v=zo;break;case"focusout":w="blur",v=zo;break;case"beforeblur":case"afterblur":v=zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Pv;break;case oh:case ah:case lh:v=yv;break;case ch:v=jv;break;case"scroll":v=hv;break;case"wheel":v=Av;break;case"copy":case"cut":case"paste":v=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ou}var _=(t&4)!==0,E=!_&&e==="scroll",m=_?p!==null?p+"Capture":null:p;_=[];for(var h=u,g;h!==null;){g=h;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=ri(h,m),x!=null&&_.push(ui(h,x,g)))),E)break;h=h.return}0<_.length&&(p=new v(p,w,null,n,d),f.push({event:p,listeners:_}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Pa&&(w=n.relatedTarget||n.fromElement)&&(mn(w)||w[wt]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?mn(w):null,w!==null&&(E=On(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(_=iu,x="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(_=ou,x="onPointerLeave",m="onPointerEnter",h="pointer"),E=v==null?p:Vn(v),g=w==null?p:Vn(w),p=new _(x,h+"leave",v,n,d),p.target=E,p.relatedTarget=g,x=null,mn(d)===u&&(_=new _(m,h+"enter",w,n,d),_.target=g,_.relatedTarget=E,x=_),E=x,v&&w)t:{for(_=v,m=w,h=0,g=_;g;g=Dn(g))h++;for(g=0,x=m;x;x=Dn(x))g++;for(;0<h-g;)_=Dn(_),h--;for(;0<g-h;)m=Dn(m),g--;for(;h--;){if(_===m||m!==null&&_===m.alternate)break t;_=Dn(_),m=Dn(m)}_=null}else _=null;v!==null&&vu(f,p,v,_,!1),w!==null&&E!==null&&vu(f,E,w,_,!0)}}e:{if(p=u?Vn(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var I=zv;else if(cu(p))if(th)I=Hv;else{I=Vv;var T=Bv}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(I=Wv);if(I&&(I=I(e,u))){eh(f,I,n,d);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&ka(p,"number",p.value)}switch(T=u?Vn(u):window,e){case"focusin":(cu(T)||T.contentEditable==="true")&&(zn=T,Ma=u,Kr=null);break;case"focusout":Kr=Ma=zn=null;break;case"mousedown":Ua=!0;break;case"contextmenu":case"mouseup":case"dragend":Ua=!1,pu(f,n,d);break;case"selectionchange":if(Gv)break;case"keydown":case"keyup":pu(f,n,d)}var b;if(Vl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $n?Xf(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Jf&&n.locale!=="ko"&&($n||P!=="onCompositionStart"?P==="onCompositionEnd"&&$n&&(b=Yf()):($t=d,$l="value"in $t?$t.value:$t.textContent,$n=!0)),T=Ps(u,P),0<T.length&&(P=new su(P,e,null,n,d),f.push({event:P,listeners:T}),b?P.data=b:(b=Zf(n),b!==null&&(P.data=b)))),(b=Dv?Mv(e,n):Uv(e,n))&&(u=Ps(u,"onBeforeInput"),0<u.length&&(d=new su("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=b))}dh(f,t)})}function ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ps(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ri(e,n),s!=null&&r.unshift(ui(e,s,i)),s=ri(e,t),s!=null&&r.push(ui(e,s,i))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ri(n,s),l!=null&&o.unshift(ui(n,l,a))):i||(l=ri(n,s),l!=null&&o.push(ui(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function yu(e){return(typeof e=="string"?e:""+e).replace(Xv,`
`).replace(Zv,"")}function Ki(e,t,n){if(t=yu(t),yu(e)!==t&&n)throw Error(S(425))}function Rs(){}var Fa=null,$a=null;function za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ba=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,wu=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof wu<"u"?function(e){return wu.resolve(null).then(e).catch(n0)}:Ba;function n0(e){setTimeout(function(){throw e})}function Qo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),oi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oi(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),tt="__reactFiber$"+vr,di="__reactProps$"+vr,wt="__reactContainer$"+vr,Va="__reactEvents$"+vr,r0="__reactListeners$"+vr,i0="__reactHandles$"+vr;function mn(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xu(e);e!==null;){if(n=e[tt])return n;e=xu(e)}return t}e=n,n=e.parentNode}return null}function Ni(e){return e=e[tt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function uo(e){return e[di]||null}var Wa=[],Wn=-1;function sn(e){return{current:e}}function B(e){0>Wn||(e.current=Wa[Wn],Wa[Wn]=null,Wn--)}function F(e,t){Wn++,Wa[Wn]=e.current,e.current=t}var tn={},fe=sn(tn),Ee=sn(!1),En=tn;function ar(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ie(e){return e=e.childContextTypes,e!=null}function js(){B(Ee),B(fe)}function _u(e,t,n){if(fe.current!==tn)throw Error(S(168));F(fe,t),F(Ee,n)}function hh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Bg(e)||"Unknown",i));return q({},n,r)}function Os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,En=fe.current,F(fe,e),F(Ee,Ee.current),!0}function Su(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=hh(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,B(Ee),B(fe),F(fe,e)):B(Ee),F(Ee,n)}var dt=null,fo=!1,Yo=!1;function ph(e){dt===null?dt=[e]:dt.push(e)}function s0(e){fo=!0,ph(e)}function on(){if(!Yo&&dt!==null){Yo=!0;var e=0,t=M;try{var n=dt;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,fo=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),Ff(Dl,on),i}finally{M=t,Yo=!1}}return null}var Hn=[],qn=0,As=null,Ls=0,De=[],Me=0,In=null,ft=1,ht="";function fn(e,t){Hn[qn++]=Ls,Hn[qn++]=As,As=e,Ls=t}function mh(e,t,n){De[Me++]=ft,De[Me++]=ht,De[Me++]=In,In=e;var r=ft;e=ht;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var s=32-Ge(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ft=1<<32-Ge(t)+i|n<<i|r,ht=s+e}else ft=1<<s|n<<i|r,ht=e}function Hl(e){e.return!==null&&(fn(e,1),mh(e,1,0))}function ql(e){for(;e===As;)As=Hn[--qn],Hn[qn]=null,Ls=Hn[--qn],Hn[qn]=null;for(;e===In;)In=De[--Me],De[Me]=null,ht=De[--Me],De[Me]=null,ft=De[--Me],De[Me]=null}var Pe=null,be=null,V=!1,qe=null;function gh(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Eu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,be=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:ft,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,be=null,!0):!1;default:return!1}}function Ha(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qa(e){if(V){var t=be;if(t){var n=t;if(!Eu(e,t)){if(Ha(e))throw Error(S(418));t=qt(n.nextSibling);var r=Pe;t&&Eu(e,t)?gh(r,n):(e.flags=e.flags&-4097|2,V=!1,Pe=e)}}else{if(Ha(e))throw Error(S(418));e.flags=e.flags&-4097|2,V=!1,Pe=e}}}function Iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Gi(e){if(e!==Pe)return!1;if(!V)return Iu(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!za(e.type,e.memoizedProps)),t&&(t=be)){if(Ha(e))throw vh(),Error(S(418));for(;t;)gh(e,t),t=qt(t.nextSibling)}if(Iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=Pe?qt(e.stateNode.nextSibling):null;return!0}function vh(){for(var e=be;e;)e=qt(e.nextSibling)}function lr(){be=Pe=null,V=!1}function Kl(e){qe===null?qe=[e]:qe.push(e)}var o0=Nt.ReactCurrentBatchConfig;function Rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Qi(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ku(e){var t=e._init;return t(e._payload)}function yh(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Yt(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,h,g,x){return h===null||h.tag!==6?(h=ra(g,m.mode,x),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,x){var I=g.type;return I===Fn?d(m,h,g.props.children,x,g.key):h!==null&&(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Rt&&ku(I)===h.type)?(x=i(h,g.props),x.ref=Rr(m,h,g),x.return=m,x):(x=gs(g.type,g.key,g.props,null,m.mode,x),x.ref=Rr(m,h,g),x.return=m,x)}function u(m,h,g,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=ia(g,m.mode,x),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function d(m,h,g,x,I){return h===null||h.tag!==7?(h=xn(g,m.mode,x,I),h.return=m,h):(h=i(h,g),h.return=m,h)}function f(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ra(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ui:return g=gs(h.type,h.key,h.props,null,m.mode,g),g.ref=Rr(m,null,h),g.return=m,g;case Un:return h=ia(h,m.mode,g),h.return=m,h;case Rt:var x=h._init;return f(m,x(h._payload),g)}if(Mr(h)||Nr(h))return h=xn(h,m.mode,g,null),h.return=m,h;Qi(m,h)}return null}function p(m,h,g,x){var I=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(m,h,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ui:return g.key===I?l(m,h,g,x):null;case Un:return g.key===I?u(m,h,g,x):null;case Rt:return I=g._init,p(m,h,I(g._payload),x)}if(Mr(g)||Nr(g))return I!==null?null:d(m,h,g,x,null);Qi(m,g)}return null}function v(m,h,g,x,I){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,a(h,m,""+x,I);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ui:return m=m.get(x.key===null?g:x.key)||null,l(h,m,x,I);case Un:return m=m.get(x.key===null?g:x.key)||null,u(h,m,x,I);case Rt:var T=x._init;return v(m,h,g,T(x._payload),I)}if(Mr(x)||Nr(x))return m=m.get(g)||null,d(h,m,x,I,null);Qi(h,x)}return null}function w(m,h,g,x){for(var I=null,T=null,b=h,P=h=0,$=null;b!==null&&P<g.length;P++){b.index>P?($=b,b=null):$=b.sibling;var O=p(m,b,g[P],x);if(O===null){b===null&&(b=$);break}e&&b&&O.alternate===null&&t(m,b),h=s(O,h,P),T===null?I=O:T.sibling=O,T=O,b=$}if(P===g.length)return n(m,b),V&&fn(m,P),I;if(b===null){for(;P<g.length;P++)b=f(m,g[P],x),b!==null&&(h=s(b,h,P),T===null?I=b:T.sibling=b,T=b);return V&&fn(m,P),I}for(b=r(m,b);P<g.length;P++)$=v(b,m,P,g[P],x),$!==null&&(e&&$.alternate!==null&&b.delete($.key===null?P:$.key),h=s($,h,P),T===null?I=$:T.sibling=$,T=$);return e&&b.forEach(function(Be){return t(m,Be)}),V&&fn(m,P),I}function _(m,h,g,x){var I=Nr(g);if(typeof I!="function")throw Error(S(150));if(g=I.call(g),g==null)throw Error(S(151));for(var T=I=null,b=h,P=h=0,$=null,O=g.next();b!==null&&!O.done;P++,O=g.next()){b.index>P?($=b,b=null):$=b.sibling;var Be=p(m,b,O.value,x);if(Be===null){b===null&&(b=$);break}e&&b&&Be.alternate===null&&t(m,b),h=s(Be,h,P),T===null?I=Be:T.sibling=Be,T=Be,b=$}if(O.done)return n(m,b),V&&fn(m,P),I;if(b===null){for(;!O.done;P++,O=g.next())O=f(m,O.value,x),O!==null&&(h=s(O,h,P),T===null?I=O:T.sibling=O,T=O);return V&&fn(m,P),I}for(b=r(m,b);!O.done;P++,O=g.next())O=v(b,m,P,O.value,x),O!==null&&(e&&O.alternate!==null&&b.delete(O.key===null?P:O.key),h=s(O,h,P),T===null?I=O:T.sibling=O,T=O);return e&&b.forEach(function(Ir){return t(m,Ir)}),V&&fn(m,P),I}function E(m,h,g,x){if(typeof g=="object"&&g!==null&&g.type===Fn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ui:e:{for(var I=g.key,T=h;T!==null;){if(T.key===I){if(I=g.type,I===Fn){if(T.tag===7){n(m,T.sibling),h=i(T,g.props.children),h.return=m,m=h;break e}}else if(T.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Rt&&ku(I)===T.type){n(m,T.sibling),h=i(T,g.props),h.ref=Rr(m,T,g),h.return=m,m=h;break e}n(m,T);break}else t(m,T);T=T.sibling}g.type===Fn?(h=xn(g.props.children,m.mode,x,g.key),h.return=m,m=h):(x=gs(g.type,g.key,g.props,null,m.mode,x),x.ref=Rr(m,h,g),x.return=m,m=x)}return o(m);case Un:e:{for(T=g.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=ia(g,m.mode,x),h.return=m,m=h}return o(m);case Rt:return T=g._init,E(m,h,T(g._payload),x)}if(Mr(g))return w(m,h,g,x);if(Nr(g))return _(m,h,g,x);Qi(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=ra(g,m.mode,x),h.return=m,m=h),o(m)):n(m,h)}return E}var cr=yh(!0),wh=yh(!1),Ds=sn(null),Ms=null,Kn=null,Gl=null;function Ql(){Gl=Kn=Ms=null}function Yl(e){var t=Ds.current;B(Ds),e._currentValue=t}function Ka(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){Ms=e,Gl=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Gl!==e)if(e={context:e,memoizedValue:t,next:null},Kn===null){if(Ms===null)throw Error(S(308));Kn=e,Ms.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return t}var gn=null;function Jl(e){gn===null?gn=[e]:gn.push(e)}function xh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Jl(t)):(n.next=i.next,i.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function Xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _h(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xt(e,n)}return i=r.interleaved,i===null?(t.next=t,Jl(r)):(t.next=i.next,i.next=t),r.interleaved=t,xt(e,n)}function us(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ml(e,n)}}function Nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Us(e,t,n,r){var i=e.updateQueue;jt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=u=l=null,a=s;do{var p=a.lane,v=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,_=a;switch(p=t,v=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){f=w.call(v,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,p=typeof w=="function"?w.call(v,f,p):w,p==null)break e;f=q({},f,p);break e;case 2:jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=f):d=d.next=v,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Nn|=o,e.lanes=o,e.memoizedState=f}}function Cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ci={},rt=sn(Ci),fi=sn(Ci),hi=sn(Ci);function vn(e){if(e===Ci)throw Error(S(174));return e}function Zl(e,t){switch(F(hi,t),F(fi,e),F(rt,Ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ca(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ca(t,e)}B(rt),F(rt,t)}function ur(){B(rt),B(fi),B(hi)}function Sh(e){vn(hi.current);var t=vn(rt.current),n=Ca(t,e.type);t!==n&&(F(fi,e),F(rt,n))}function ec(e){fi.current===e&&(B(rt),B(fi))}var W=sn(0);function Fs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jo=[];function tc(){for(var e=0;e<Jo.length;e++)Jo[e]._workInProgressVersionPrimary=null;Jo.length=0}var ds=Nt.ReactCurrentDispatcher,Xo=Nt.ReactCurrentBatchConfig,kn=0,H=null,ee=null,ie=null,$s=!1,Gr=!1,pi=0,a0=0;function ce(){throw Error(S(321))}function nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function rc(e,t,n,r,i,s){if(kn=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ds.current=e===null||e.memoizedState===null?d0:f0,e=n(r,i),Gr){s=0;do{if(Gr=!1,pi=0,25<=s)throw Error(S(301));s+=1,ie=ee=null,t.updateQueue=null,ds.current=h0,e=n(r,i)}while(Gr)}if(ds.current=zs,t=ee!==null&&ee.next!==null,kn=0,ie=ee=H=null,$s=!1,t)throw Error(S(300));return e}function ic(){var e=pi!==0;return pi=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?H.memoizedState=ie=e:ie=ie.next=e,ie}function ze(){if(ee===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ie===null?H.memoizedState:ie.next;if(t!==null)ie=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ie===null?H.memoizedState=ie=e:ie=ie.next=e}return ie}function mi(e,t){return typeof t=="function"?t(e):t}function Zo(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((kn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,H.lanes|=d,Nn|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ye(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,Nn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ea(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ye(s,t.memoizedState)||(Se=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Eh(){}function Ih(e,t){var n=H,r=ze(),i=t(),s=!Ye(r.memoizedState,i);if(s&&(r.memoizedState=i,Se=!0),r=r.queue,sc(Ch.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,gi(9,Nh.bind(null,n,r,i,t),void 0,null),se===null)throw Error(S(349));kn&30||kh(n,t,i)}return i}function kh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nh(e,t,n,r){t.value=n,t.getSnapshot=r,Th(t)&&bh(e)}function Ch(e,t,n){return n(function(){Th(t)&&bh(e)})}function Th(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function bh(e){var t=xt(e,1);t!==null&&Qe(t,e,1,-1)}function Tu(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t.queue=e,e=e.dispatch=u0.bind(null,H,e),[t.memoizedState,e]}function gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ph(){return ze().memoizedState}function fs(e,t,n,r){var i=et();H.flags|=e,i.memoizedState=gi(1|t,n,void 0,r===void 0?null:r)}function ho(e,t,n,r){var i=ze();r=r===void 0?null:r;var s=void 0;if(ee!==null){var o=ee.memoizedState;if(s=o.destroy,r!==null&&nc(r,o.deps)){i.memoizedState=gi(t,n,s,r);return}}H.flags|=e,i.memoizedState=gi(1|t,n,s,r)}function bu(e,t){return fs(8390656,8,e,t)}function sc(e,t){return ho(2048,8,e,t)}function Rh(e,t){return ho(4,2,e,t)}function jh(e,t){return ho(4,4,e,t)}function Oh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ah(e,t,n){return n=n!=null?n.concat([e]):null,ho(4,4,Oh.bind(null,t,e),n)}function oc(){}function Lh(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dh(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mh(e,t,n){return kn&21?(Ye(n,t)||(n=Bf(),H.lanes|=n,Nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function l0(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Xo.transition;Xo.transition={};try{e(!1),t()}finally{M=n,Xo.transition=r}}function Uh(){return ze().memoizedState}function c0(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fh(e))$h(t,n);else if(n=xh(e,t,n,r),n!==null){var i=me();Qe(n,e,r,i),zh(n,t,r)}}function u0(e,t,n){var r=Qt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fh(e))$h(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ye(a,o)){var l=t.interleaved;l===null?(i.next=i,Jl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=xh(e,t,i,r),n!==null&&(i=me(),Qe(n,e,r,i),zh(n,t,r))}}function Fh(e){var t=e.alternate;return e===H||t!==null&&t===H}function $h(e,t){Gr=$s=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ml(e,n)}}var zs={readContext:$e,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},d0={readContext:$e,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fs(4194308,4,Oh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return fs(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=c0.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Tu,useDebugValue:oc,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Tu(!1),t=e[0];return e=l0.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=et();if(V){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),se===null)throw Error(S(349));kn&30||kh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,bu(Ch.bind(null,r,s,e),[e]),r.flags|=2048,gi(9,Nh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=et(),t=se.identifierPrefix;if(V){var n=ht,r=ft;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=a0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},f0={readContext:$e,useCallback:Lh,useContext:$e,useEffect:sc,useImperativeHandle:Ah,useInsertionEffect:Rh,useLayoutEffect:jh,useMemo:Dh,useReducer:Zo,useRef:Ph,useState:function(){return Zo(mi)},useDebugValue:oc,useDeferredValue:function(e){var t=ze();return Mh(t,ee.memoizedState,e)},useTransition:function(){var e=Zo(mi)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Eh,useSyncExternalStore:Ih,useId:Uh,unstable_isNewReconciler:!1},h0={readContext:$e,useCallback:Lh,useContext:$e,useEffect:sc,useImperativeHandle:Ah,useInsertionEffect:Rh,useLayoutEffect:jh,useMemo:Dh,useReducer:ea,useRef:Ph,useState:function(){return ea(mi)},useDebugValue:oc,useDeferredValue:function(e){var t=ze();return ee===null?t.memoizedState=e:Mh(t,ee.memoizedState,e)},useTransition:function(){var e=ea(mi)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Eh,useSyncExternalStore:Ih,useId:Uh,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ga(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var po={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),i=Qt(e),s=vt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Kt(e,s,i),t!==null&&(Qe(t,e,i,r),us(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),i=Qt(e),s=vt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Kt(e,s,i),t!==null&&(Qe(t,e,i,r),us(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=Qt(e),i=vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kt(e,i,r),t!==null&&(Qe(t,e,r,n),us(t,e,r))}};function Pu(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!li(n,r)||!li(i,s):!0}function Bh(e,t,n){var r=!1,i=tn,s=t.contextType;return typeof s=="object"&&s!==null?s=$e(s):(i=Ie(t)?En:fe.current,r=t.contextTypes,s=(r=r!=null)?ar(e,i):tn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ru(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&po.enqueueReplaceState(t,t.state,null)}function Qa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Xl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=$e(s):(s=Ie(t)?En:fe.current,i.context=ar(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ga(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&po.enqueueReplaceState(i,i.state,null),Us(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,t){try{var n="",r=t;do n+=zg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ta(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ya(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var p0=typeof WeakMap=="function"?WeakMap:Map;function Vh(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vs||(Vs=!0,ol=r),Ya(e,t)},n}function Wh(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ya(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ya(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new p0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=T0.bind(null,e,t,n),t.then(e,e))}function Ou(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Au(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var m0=Nt.ReactCurrentOwner,Se=!1;function he(e,t,n,r){t.child=e===null?wh(t,null,n,r):cr(t,e.child,n,r)}function Lu(e,t,n,r,i){n=n.render;var s=t.ref;return tr(t,i),r=rc(e,t,n,r,s,i),n=ic(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_t(e,t,i)):(V&&n&&Hl(t),t.flags|=1,he(e,t,r,i),t.child)}function Du(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!pc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Hh(e,t,s,r,i)):(e=gs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:li,n(o,r)&&e.ref===t.ref)return _t(e,t,i)}return t.flags|=1,e=Yt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Hh(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(li(s,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,_t(e,t,i)}return Ja(e,t,n,r,i)}function qh(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Qn,Te),Te|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Qn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,F(Qn,Te),Te|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,F(Qn,Te),Te|=r;return he(e,t,i,n),t.child}function Kh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ja(e,t,n,r,i){var s=Ie(n)?En:fe.current;return s=ar(t,s),tr(t,i),n=rc(e,t,n,r,s,i),r=ic(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_t(e,t,i)):(V&&r&&Hl(t),t.flags|=1,he(e,t,n,i),t.child)}function Mu(e,t,n,r,i){if(Ie(n)){var s=!0;Os(t)}else s=!1;if(tr(t,i),t.stateNode===null)hs(e,t),Bh(t,n,r),Qa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=$e(u):(u=Ie(n)?En:fe.current,u=ar(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ru(t,o,r,u),jt=!1;var p=t.memoizedState;o.state=p,Us(t,r,o,i),l=t.memoizedState,a!==r||p!==l||Ee.current||jt?(typeof d=="function"&&(Ga(t,n,d,r),l=t.memoizedState),(a=jt||Pu(t,n,a,r,p,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,_h(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:We(t.type,a),o.props=u,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$e(l):(l=Ie(n)?En:fe.current,l=ar(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Ru(t,o,r,l),jt=!1,p=t.memoizedState,o.state=p,Us(t,r,o,i);var w=t.memoizedState;a!==f||p!==w||Ee.current||jt?(typeof v=="function"&&(Ga(t,n,v,r),w=t.memoizedState),(u=jt||Pu(t,n,u,r,p,w,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Xa(e,t,n,r,s,i)}function Xa(e,t,n,r,i,s){Kh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Su(t,n,!1),_t(e,t,s);r=t.stateNode,m0.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=cr(t,e.child,null,s),t.child=cr(t,null,a,s)):he(e,t,a,s),t.memoizedState=r.state,i&&Su(t,n,!0),t.child}function Gh(e){var t=e.stateNode;t.pendingContext?_u(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_u(e,t.context,!1),Zl(e,t.containerInfo)}function Uu(e,t,n,r,i){return lr(),Kl(i),t.flags|=256,he(e,t,n,r),t.child}var Za={dehydrated:null,treeContext:null,retryLane:0};function el(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qh(e,t,n){var r=t.pendingProps,i=W.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(W,i&1),e===null)return qa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vo(o,r,0,null),e=xn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=el(n),t.memoizedState=Za,e):ac(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return g0(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Yt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Yt(a,s):(s=xn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?el(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Za,r}return s=e.child,e=s.sibling,r=Yt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ac(e,t){return t=vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yi(e,t,n,r){return r!==null&&Kl(r),cr(t,e.child,null,n),e=ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function g0(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=ta(Error(S(422))),Yi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=vo({mode:"visible",children:r.children},i,0,null),s=xn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&cr(t,e.child,null,o),t.child.memoizedState=el(o),t.memoizedState=Za,s);if(!(t.mode&1))return Yi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=ta(s,r,void 0),Yi(e,t,o,r)}if(a=(o&e.childLanes)!==0,Se||a){if(r=se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xt(e,i),Qe(r,e,i,-1))}return hc(),r=ta(Error(S(421))),Yi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=b0.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,be=qt(i.nextSibling),Pe=t,V=!0,qe=null,e!==null&&(De[Me++]=ft,De[Me++]=ht,De[Me++]=In,ft=e.id,ht=e.overflow,In=t),t=ac(t,r.children),t.flags|=4096,t)}function Fu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ka(e.return,t,n)}function na(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Yh(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(he(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,n,t);else if(e.tag===19)Fu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(W,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Fs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),na(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}na(t,!0,n,null,s);break;case"together":na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function v0(e,t,n){switch(t.tag){case 3:Gh(t),lr();break;case 5:Sh(t);break;case 1:Ie(t.type)&&Os(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(Ds,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Qh(e,t,n):(F(W,W.current&1),e=_t(e,t,n),e!==null?e.sibling:null);F(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,qh(e,t,n)}return _t(e,t,n)}var Jh,tl,Xh,Zh;Jh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tl=function(){};Xh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,vn(rt.current);var s=null;switch(n){case"input":i=Ea(e,i),r=Ea(e,r),s=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),s=[];break;case"textarea":i=Na(e,i),r=Na(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rs)}Ta(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ti.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ti.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Zh=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function y0(e,t,n){var r=t.pendingProps;switch(ql(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return Ie(t.type)&&js(),ue(t),null;case 3:return r=t.stateNode,ur(),B(Ee),B(fe),tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(cl(qe),qe=null))),tl(e,t),ue(t),null;case 5:ec(t);var i=vn(hi.current);if(n=t.type,e!==null&&t.stateNode!=null)Xh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ue(t),null}if(e=vn(rt.current),Gi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[tt]=t,r[di]=s,e=(t.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<Fr.length;i++)z(Fr[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":Gc(r,s),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},z("invalid",r);break;case"textarea":Yc(r,s),z("invalid",r)}Ta(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ki(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ki(r.textContent,a,e),i=["children",""+a]):ti.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&z("scroll",r)}switch(n){case"input":Fi(r),Qc(r,s,!0);break;case"textarea":Fi(r),Jc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Rs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[tt]=t,e[di]=r,Jh(e,t,!1,!1),t.stateNode=e;e:{switch(o=ba(n,r),n){case"dialog":z("cancel",e),z("close",e),i=r;break;case"iframe":case"object":case"embed":z("load",e),i=r;break;case"video":case"audio":for(i=0;i<Fr.length;i++)z(Fr[i],e);i=r;break;case"source":z("error",e),i=r;break;case"img":case"image":case"link":z("error",e),z("load",e),i=r;break;case"details":z("toggle",e),i=r;break;case"input":Gc(e,r),i=Ea(e,r),z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),z("invalid",e);break;case"textarea":Yc(e,r),i=Na(e,r),z("invalid",e);break;default:i=r}Ta(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Pf(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tf(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ni(e,l):typeof l=="number"&&ni(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ti.hasOwnProperty(s)?l!=null&&s==="onScroll"&&z("scroll",e):l!=null&&Rl(e,s,l,o))}switch(n){case"input":Fi(e),Qc(e,r,!1);break;case"textarea":Fi(e),Jc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Jn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Rs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Zh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=vn(hi.current),vn(rt.current),Gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(s=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return ue(t),null;case 13:if(B(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&be!==null&&t.mode&1&&!(t.flags&128))vh(),lr(),t.flags|=98560,s=!1;else if(s=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(S(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[tt]=t}else lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),s=!1}else qe!==null&&(cl(qe),qe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?te===0&&(te=3):hc())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return ur(),tl(e,t),e===null&&ci(t.stateNode.containerInfo),ue(t),null;case 10:return Yl(t.type._context),ue(t),null;case 17:return Ie(t.type)&&js(),ue(t),null;case 19:if(B(W),s=t.memoizedState,s===null)return ue(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)jr(s,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Fs(e),o!==null){for(t.flags|=128,jr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(W,W.current&1|2),t.child}e=e.sibling}s.tail!==null&&Q()>fr&&(t.flags|=128,r=!0,jr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Fs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!V)return ue(t),null}else 2*Q()-s.renderingStartTime>fr&&n!==1073741824&&(t.flags|=128,r=!0,jr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Q(),t.sibling=null,n=W.current,F(W,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return fc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function w0(e,t){switch(ql(t),t.tag){case 1:return Ie(t.type)&&js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),B(Ee),B(fe),tc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ec(t),null;case 13:if(B(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(W),null;case 4:return ur(),null;case 10:return Yl(t.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var Ji=!1,de=!1,x0=typeof WeakSet=="function"?WeakSet:Set,k=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function nl(e,t,n){try{n()}catch(r){K(e,t,r)}}var $u=!1;function _0(e,t){if(Fa=Ts,e=ih(),Wl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===n&&++u===i&&(a=o),p===s&&++d===r&&(l=o),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($a={focusedElem:e,selectionRange:n},Ts=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,E=w.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?_:We(t.type,_),E);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){K(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return w=$u,$u=!1,w}function Qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&nl(t,n,s)}i=i.next}while(i!==r)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function rl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ep(e){var t=e.alternate;t!==null&&(e.alternate=null,ep(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[di],delete t[Va],delete t[r0],delete t[i0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tp(e){return e.tag===5||e.tag===3||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Rs));else if(r!==4&&(e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}function sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sl(e,t,n),e=e.sibling;e!==null;)sl(e,t,n),e=e.sibling}var oe=null,He=!1;function bt(e,t,n){for(n=n.child;n!==null;)np(e,t,n),n=n.sibling}function np(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(oo,n)}catch{}switch(n.tag){case 5:de||Gn(n,t);case 6:var r=oe,i=He;oe=null,bt(e,t,n),oe=r,He=i,oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?Qo(e.parentNode,n):e.nodeType===1&&Qo(e,n),oi(e)):Qo(oe,n.stateNode));break;case 4:r=oe,i=He,oe=n.stateNode.containerInfo,He=!0,bt(e,t,n),oe=r,He=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nl(n,t,o),i=i.next}while(i!==r)}bt(e,t,n);break;case 1:if(!de&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,bt(e,t,n),de=r):bt(e,t,n);break;default:bt(e,t,n)}}function Bu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new x0),t.forEach(function(r){var i=P0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,He=!1;break e;case 3:oe=a.stateNode.containerInfo,He=!0;break e;case 4:oe=a.stateNode.containerInfo,He=!0;break e}a=a.return}if(oe===null)throw Error(S(160));np(s,o,i),oe=null,He=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rp(t,e),t=t.sibling}function rp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Ze(e),r&4){try{Qr(3,e,e.return),mo(3,e)}catch(_){K(e,e.return,_)}try{Qr(5,e,e.return)}catch(_){K(e,e.return,_)}}break;case 1:Ve(t,e),Ze(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(Ve(t,e),Ze(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var i=e.stateNode;try{ni(i,"")}catch(_){K(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&kf(i,s),ba(a,o);var u=ba(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Pf(i,f):d==="dangerouslySetInnerHTML"?Tf(i,f):d==="children"?ni(i,f):Rl(i,d,f,u)}switch(a){case"input":Ia(i,s);break;case"textarea":Nf(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Jn(i,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?Jn(i,!!s.multiple,s.defaultValue,!0):Jn(i,!!s.multiple,s.multiple?[]:"",!1))}i[di]=s}catch(_){K(e,e.return,_)}}break;case 6:if(Ve(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){K(e,e.return,_)}}break;case 3:if(Ve(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(_){K(e,e.return,_)}break;case 4:Ve(t,e),Ze(e);break;case 13:Ve(t,e),Ze(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uc=Q())),r&4&&Bu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||d,Ve(t,e),de=u):Ve(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(k=e,d=e.child;d!==null;){for(f=k=d;k!==null;){switch(p=k,v=p.child,p.tag){case 0:case 11:case 14:case 15:Qr(4,p,p.return);break;case 1:Gn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){K(r,n,_)}}break;case 5:Gn(p,p.return);break;case 22:if(p.memoizedState!==null){Wu(f);continue}}v!==null?(v.return=p,k=v):Wu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bf("display",o))}catch(_){K(e,e.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){K(e,e.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ve(t,e),Ze(e),r&4&&Bu(e);break;case 21:break;default:Ve(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ni(i,""),r.flags&=-33);var s=zu(e);sl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=zu(e);il(e,a,o);break;default:throw Error(S(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function S0(e,t,n){k=e,ip(e)}function ip(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ji;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||de;a=Ji;var u=de;if(Ji=o,(de=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?Hu(i):l!==null?(l.return=o,k=l):Hu(i);for(;s!==null;)k=s,ip(s),s=s.sibling;k=i,Ji=a,de=u}Vu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Vu(e)}}function Vu(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Cu(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cu(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&oi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}de||t.flags&512&&rl(t)}catch(p){K(t,t.return,p)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Wu(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Hu(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var s=t.return;try{rl(t)}catch(l){K(t,s,l)}break;case 5:var o=t.return;try{rl(t)}catch(l){K(t,o,l)}}}catch(l){K(t,t.return,l)}if(t===e){k=null;break}var a=t.sibling;if(a!==null){a.return=t.return,k=a;break}k=t.return}}var E0=Math.ceil,Bs=Nt.ReactCurrentDispatcher,lc=Nt.ReactCurrentOwner,Fe=Nt.ReactCurrentBatchConfig,L=0,se=null,Z=null,ae=0,Te=0,Qn=sn(0),te=0,vi=null,Nn=0,go=0,cc=0,Yr=null,_e=null,uc=0,fr=1/0,ct=null,Vs=!1,ol=null,Gt=null,Xi=!1,zt=null,Ws=0,Jr=0,al=null,ps=-1,ms=0;function me(){return L&6?Q():ps!==-1?ps:ps=Q()}function Qt(e){return e.mode&1?L&2&&ae!==0?ae&-ae:o0.transition!==null?(ms===0&&(ms=Bf()),ms):(e=M,e!==0||(e=window.event,e=e===void 0?16:Qf(e.type)),e):1}function Qe(e,t,n,r){if(50<Jr)throw Jr=0,al=null,Error(S(185));Ii(e,n,r),(!(L&2)||e!==se)&&(e===se&&(!(L&2)&&(go|=n),te===4&&At(e,ae)),ke(e,r),n===1&&L===0&&!(t.mode&1)&&(fr=Q()+500,fo&&on()))}function ke(e,t){var n=e.callbackNode;ov(e,t);var r=Cs(e,e===se?ae:0);if(r===0)n!==null&&eu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&eu(n),t===1)e.tag===0?s0(qu.bind(null,e)):ph(qu.bind(null,e)),t0(function(){!(L&6)&&on()}),n=null;else{switch(Vf(r)){case 1:n=Dl;break;case 4:n=$f;break;case 16:n=Ns;break;case 536870912:n=zf;break;default:n=Ns}n=fp(n,sp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sp(e,t){if(ps=-1,ms=0,L&6)throw Error(S(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=Cs(e,e===se?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Hs(e,r);else{t=r;var i=L;L|=2;var s=ap();(se!==e||ae!==t)&&(ct=null,fr=Q()+500,wn(e,t));do try{N0();break}catch(a){op(e,a)}while(!0);Ql(),Bs.current=s,L=i,Z!==null?t=0:(se=null,ae=0,t=te)}if(t!==0){if(t===2&&(i=Aa(e),i!==0&&(r=i,t=ll(e,i))),t===1)throw n=vi,wn(e,0),At(e,r),ke(e,Q()),n;if(t===6)At(e,r);else{if(i=e.current.alternate,!(r&30)&&!I0(i)&&(t=Hs(e,r),t===2&&(s=Aa(e),s!==0&&(r=s,t=ll(e,s))),t===1))throw n=vi,wn(e,0),At(e,r),ke(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:hn(e,_e,ct);break;case 3:if(At(e,r),(r&130023424)===r&&(t=uc+500-Q(),10<t)){if(Cs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ba(hn.bind(null,e,_e,ct),t);break}hn(e,_e,ct);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ge(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*E0(r/1960))-r,10<r){e.timeoutHandle=Ba(hn.bind(null,e,_e,ct),r);break}hn(e,_e,ct);break;case 5:hn(e,_e,ct);break;default:throw Error(S(329))}}}return ke(e,Q()),e.callbackNode===n?sp.bind(null,e):null}function ll(e,t){var n=Yr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=Hs(e,t),e!==2&&(t=_e,_e=n,t!==null&&cl(t)),e}function cl(e){_e===null?_e=e:_e.push.apply(_e,e)}function I0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ye(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~cc,t&=~go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function qu(e){if(L&6)throw Error(S(327));nr();var t=Cs(e,0);if(!(t&1))return ke(e,Q()),null;var n=Hs(e,t);if(e.tag!==0&&n===2){var r=Aa(e);r!==0&&(t=r,n=ll(e,r))}if(n===1)throw n=vi,wn(e,0),At(e,t),ke(e,Q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,_e,ct),ke(e,Q()),null}function dc(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(fr=Q()+500,fo&&on())}}function Cn(e){zt!==null&&zt.tag===0&&!(L&6)&&nr();var t=L;L|=1;var n=Fe.transition,r=M;try{if(Fe.transition=null,M=1,e)return e()}finally{M=r,Fe.transition=n,L=t,!(L&6)&&on()}}function fc(){Te=Qn.current,B(Qn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,e0(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(ql(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&js();break;case 3:ur(),B(Ee),B(fe),tc();break;case 5:ec(r);break;case 4:ur();break;case 13:B(W);break;case 19:B(W);break;case 10:Yl(r.type._context);break;case 22:case 23:fc()}n=n.return}if(se=e,Z=e=Yt(e.current,null),ae=Te=t,te=0,vi=null,cc=go=Nn=0,_e=Yr=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gn=null}return e}function op(e,t){do{var n=Z;try{if(Ql(),ds.current=zs,$s){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$s=!1}if(kn=0,ie=ee=H=null,Gr=!1,pi=0,lc.current=null,n===null||n.return===null){te=1,vi=t,Z=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ae,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Ou(o);if(v!==null){v.flags&=-257,Au(v,o,a,s,t),v.mode&1&&ju(s,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(l),t.updateQueue=_}else w.add(l);break e}else{if(!(t&1)){ju(s,u,t),hc();break e}l=Error(S(426))}}else if(V&&a.mode&1){var E=Ou(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Au(E,o,a,s,t),Kl(dr(l,a));break e}}s=l=dr(l,a),te!==4&&(te=2),Yr===null?Yr=[s]:Yr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Vh(s,l,t);Nu(s,m);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Gt===null||!Gt.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=Wh(s,a,t);Nu(s,x);break e}}s=s.return}while(s!==null)}cp(n)}catch(I){t=I,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function ap(){var e=Bs.current;return Bs.current=zs,e===null?zs:e}function hc(){(te===0||te===3||te===2)&&(te=4),se===null||!(Nn&268435455)&&!(go&268435455)||At(se,ae)}function Hs(e,t){var n=L;L|=2;var r=ap();(se!==e||ae!==t)&&(ct=null,wn(e,t));do try{k0();break}catch(i){op(e,i)}while(!0);if(Ql(),L=n,Bs.current=r,Z!==null)throw Error(S(261));return se=null,ae=0,te}function k0(){for(;Z!==null;)lp(Z)}function N0(){for(;Z!==null&&!Jg();)lp(Z)}function lp(e){var t=dp(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?cp(e):Z=t,lc.current=null}function cp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=w0(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Z=null;return}}else if(n=y0(n,t,Te),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);te===0&&(te=5)}function hn(e,t,n){var r=M,i=Fe.transition;try{Fe.transition=null,M=1,C0(e,t,n,r)}finally{Fe.transition=i,M=r}return null}function C0(e,t,n,r){do nr();while(zt!==null);if(L&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(av(e,s),e===se&&(Z=se=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xi||(Xi=!0,fp(Ns,function(){return nr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fe.transition,Fe.transition=null;var o=M;M=1;var a=L;L|=4,lc.current=null,_0(e,n),rp(n,e),Kv($a),Ts=!!Fa,$a=Fa=null,e.current=n,S0(n),Xg(),L=a,M=o,Fe.transition=s}else e.current=n;if(Xi&&(Xi=!1,zt=e,Ws=i),s=e.pendingLanes,s===0&&(Gt=null),tv(n.stateNode),ke(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vs)throw Vs=!1,e=ol,ol=null,e;return Ws&1&&e.tag!==0&&nr(),s=e.pendingLanes,s&1?e===al?Jr++:(Jr=0,al=e):Jr=0,on(),null}function nr(){if(zt!==null){var e=Vf(Ws),t=Fe.transition,n=M;try{if(Fe.transition=null,M=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,Ws=0,L&6)throw Error(S(331));var i=L;for(L|=4,k=e.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:Qr(8,d,s)}var f=d.child;if(f!==null)f.return=d,k=f;else for(;k!==null;){d=k;var p=d.sibling,v=d.return;if(ep(d),d===u){k=null;break}if(p!==null){p.return=v,k=p;break}k=v}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,k=m;break e}k=s.return}}var h=e.current;for(k=h;k!==null;){o=k;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,k=g;else e:for(o=h;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mo(9,a)}}catch(I){K(a,a.return,I)}if(a===o){k=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,k=x;break e}k=a.return}}if(L=i,on(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(oo,e)}catch{}r=!0}return r}finally{M=n,Fe.transition=t}}return!1}function Ku(e,t,n){t=dr(n,t),t=Vh(e,t,1),e=Kt(e,t,1),t=me(),e!==null&&(Ii(e,1,t),ke(e,t))}function K(e,t,n){if(e.tag===3)Ku(e,e,n);else for(;t!==null;){if(t.tag===3){Ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=dr(n,e),e=Wh(t,e,1),t=Kt(t,e,1),e=me(),t!==null&&(Ii(t,1,e),ke(t,e));break}}t=t.return}}function T0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ae&n)===n&&(te===4||te===3&&(ae&130023424)===ae&&500>Q()-uc?wn(e,0):cc|=n),ke(e,t)}function up(e,t){t===0&&(e.mode&1?(t=Bi,Bi<<=1,!(Bi&130023424)&&(Bi=4194304)):t=1);var n=me();e=xt(e,t),e!==null&&(Ii(e,t,n),ke(e,n))}function b0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),up(e,n)}function P0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),up(e,n)}var dp;dp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,v0(e,t,n);Se=!!(e.flags&131072)}else Se=!1,V&&t.flags&1048576&&mh(t,Ls,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;hs(e,t),e=t.pendingProps;var i=ar(t,fe.current);tr(t,n),i=rc(null,t,r,e,i,n);var s=ic();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(s=!0,Os(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xl(t),i.updater=po,t.stateNode=i,i._reactInternals=t,Qa(t,r,e,n),t=Xa(null,t,r,!0,s,n)):(t.tag=0,V&&s&&Hl(t),he(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(hs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=j0(r),e=We(r,e),i){case 0:t=Ja(null,t,r,e,n);break e;case 1:t=Mu(null,t,r,e,n);break e;case 11:t=Lu(null,t,r,e,n);break e;case 14:t=Du(null,t,r,We(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Ja(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Mu(e,t,r,i,n);case 3:e:{if(Gh(t),e===null)throw Error(S(387));r=t.pendingProps,s=t.memoizedState,i=s.element,_h(e,t),Us(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=dr(Error(S(423)),t),t=Uu(e,t,r,n,i);break e}else if(r!==i){i=dr(Error(S(424)),t),t=Uu(e,t,r,n,i);break e}else for(be=qt(t.stateNode.containerInfo.firstChild),Pe=t,V=!0,qe=null,n=wh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lr(),r===i){t=_t(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return Sh(t),e===null&&qa(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,za(r,i)?o=null:s!==null&&za(r,s)&&(t.flags|=32),Kh(e,t),he(e,t,o,n),t.child;case 6:return e===null&&qa(t),null;case 13:return Qh(e,t,n);case 4:return Zl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Lu(e,t,r,i,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,F(Ds,r._currentValue),r._currentValue=o,s!==null)if(Ye(s.value,o)){if(s.children===i.children&&!Ee.current){t=_t(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=vt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ka(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ka(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}he(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,tr(t,n),i=$e(i),r=r(i),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,i=We(r,t.pendingProps),i=We(r.type,i),Du(e,t,r,i,n);case 15:return Hh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),hs(e,t),t.tag=1,Ie(r)?(e=!0,Os(t)):e=!1,tr(t,n),Bh(t,r,i),Qa(t,r,i,n),Xa(null,t,r,!0,e,n);case 19:return Yh(e,t,n);case 22:return qh(e,t,n)}throw Error(S(156,t.tag))};function fp(e,t){return Ff(e,t)}function R0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new R0(e,t,n,r)}function pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function j0(e){if(typeof e=="function")return pc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ol)return 11;if(e===Al)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function gs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")pc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Fn:return xn(n.children,i,s,t);case jl:o=8,i|=8;break;case wa:return e=Ue(12,n,t,i|2),e.elementType=wa,e.lanes=s,e;case xa:return e=Ue(13,n,t,i),e.elementType=xa,e.lanes=s,e;case _a:return e=Ue(19,n,t,i),e.elementType=_a,e.lanes=s,e;case Sf:return vo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xf:o=10;break e;case _f:o=9;break e;case Ol:o=11;break e;case Al:o=14;break e;case Rt:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ue(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function xn(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function vo(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Sf,e.lanes=n,e.stateNode={isHidden:!1},e}function ra(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function ia(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function O0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uo(0),this.expirationTimes=Uo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mc(e,t,n,r,i,s,o,a,l){return e=new O0(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ue(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xl(s),e}function A0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hp(e){if(!e)return tn;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ie(n))return hh(e,n,t)}return t}function pp(e,t,n,r,i,s,o,a,l){return e=mc(n,r,!0,e,i,s,o,a,l),e.context=hp(null),n=e.current,r=me(),i=Qt(n),s=vt(r,i),s.callback=t??null,Kt(n,s,i),e.current.lanes=i,Ii(e,i,r),ke(e,r),e}function yo(e,t,n,r){var i=t.current,s=me(),o=Qt(i);return n=hp(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(i,t,o),e!==null&&(Qe(e,i,o,s),us(e,i,o)),o}function qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gc(e,t){Gu(e,t),(e=e.alternate)&&Gu(e,t)}function L0(){return null}var mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function vc(e){this._internalRoot=e}wo.prototype.render=vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));yo(e,t,null,null)};wo.prototype.unmount=vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){yo(null,e,null,null)}),t[wt]=null}};function wo(e){this._internalRoot=e}wo.prototype.unstable_scheduleHydration=function(e){if(e){var t=qf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Gf(e)}};function yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qu(){}function D0(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=qs(o);s.call(u)}}var o=pp(t,r,e,0,null,!1,!1,"",Qu);return e._reactRootContainer=o,e[wt]=o.current,ci(e.nodeType===8?e.parentNode:e),Cn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=qs(l);a.call(u)}}var l=mc(e,0,!1,null,null,!1,!1,"",Qu);return e._reactRootContainer=l,e[wt]=l.current,ci(e.nodeType===8?e.parentNode:e),Cn(function(){yo(t,l,n,r)}),l}function _o(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=qs(o);a.call(l)}}yo(t,o,e,i)}else o=D0(n,t,e,i,r);return qs(o)}Wf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ur(t.pendingLanes);n!==0&&(Ml(t,n|1),ke(t,Q()),!(L&6)&&(fr=Q()+500,on()))}break;case 13:Cn(function(){var r=xt(e,1);if(r!==null){var i=me();Qe(r,e,1,i)}}),gc(e,1)}};Ul=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=me();Qe(t,e,134217728,n)}gc(e,134217728)}};Hf=function(e){if(e.tag===13){var t=Qt(e),n=xt(e,t);if(n!==null){var r=me();Qe(n,e,t,r)}gc(e,t)}};qf=function(){return M};Kf=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Ra=function(e,t,n){switch(t){case"input":if(Ia(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=uo(r);if(!i)throw Error(S(90));If(r),Ia(r,i)}}}break;case"textarea":Nf(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};Of=dc;Af=Cn;var M0={usingClientEntryPoint:!1,Events:[Ni,Vn,uo,Rf,jf,dc]},Or={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U0={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mf(e),e===null?null:e.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||L0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zi.isDisabled&&Zi.supportsFiber)try{oo=Zi.inject(U0),nt=Zi}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(t))throw Error(S(200));return A0(e,t,null,n)};Ae.createRoot=function(e,t){if(!yc(e))throw Error(S(299));var n=!1,r="",i=mp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=mc(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,ci(e.nodeType===8?e.parentNode:e),new vc(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Mf(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Cn(e)};Ae.hydrate=function(e,t,n){if(!xo(t))throw Error(S(200));return _o(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!yc(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=pp(t,null,e,1,n??null,i,!1,s,o),e[wt]=t.current,ci(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new wo(t)};Ae.render=function(e,t,n){if(!xo(t))throw Error(S(200));return _o(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!xo(e))throw Error(S(40));return e._reactRootContainer?(Cn(function(){_o(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ae.unstable_batchedUpdates=dc;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return _o(e,t,n,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function gp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gp)}catch(e){console.error(e)}}gp(),gf.exports=Ae;var F0=gf.exports,vp,Yu=F0;vp=Yu.createRoot,Yu.hydrateRoot;/**
 * @remix-run/router v1.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yi(){return yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yi.apply(this,arguments)}var Bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bt||(Bt={}));const Ju="popstate";function $0(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return ul("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ks(i)}return B0(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function z0(){return Math.random().toString(36).substr(2,8)}function Xu(e,t){return{usr:e.state,key:e.key,idx:t}}function ul(e,t,n,r){return n===void 0&&(n=null),yi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yr(t):t,{state:n,key:t&&t.key||r||z0()})}function Ks(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function B0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Bt.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(yi({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Bt.Pop;let E=d(),m=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:m})}function p(E,m){a=Bt.Push;let h=ul(_.location,E,m);u=d()+1;let g=Xu(h,u),x=_.createHref(h);try{o.pushState(g,"",x)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(x)}s&&l&&l({action:a,location:_.location,delta:1})}function v(E,m){a=Bt.Replace;let h=ul(_.location,E,m);u=d();let g=Xu(h,u),x=_.createHref(h);o.replaceState(g,"",x),s&&l&&l({action:a,location:_.location,delta:0})}function w(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:Ks(E);return h=h.replace(/ $/,"%20"),Y(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let _={get action(){return a},get location(){return e(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ju,f),l=E,()=>{i.removeEventListener(Ju,f),l=null}},createHref(E){return t(i,E)},createURL:w,encodeLocation(E){let m=w(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:v,go(E){return o.go(E)}};return _}var Zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Zu||(Zu={}));function V0(e,t,n){return n===void 0&&(n="/"),W0(e,t,n,!1)}function W0(e,t,n,r){let i=typeof t=="string"?yr(t):t,s=wc(i.pathname||"/",n);if(s==null)return null;let o=wp(e);H0(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=ny(s);a=ey(o[l],u,r)}return a}function wp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Jt([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Y(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),wp(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:X0(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of xp(s.path))i(s,o,l)}),t}function xp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=xp(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function H0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Z0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const q0=/^:[\w-]+$/,K0=3,G0=2,Q0=1,Y0=10,J0=-2,ed=e=>e==="*";function X0(e,t){let n=e.split("/"),r=n.length;return n.some(ed)&&(r+=J0),t&&(r+=G0),n.filter(i=>!ed(i)).reduce((i,s)=>i+(q0.test(s)?K0:s===""?Q0:Y0),r)}function Z0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ey(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=td({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=td({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Jt([s,f.pathname]),pathnameBase:oy(Jt([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Jt([s,f.pathnameBase]))}return o}function td(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ty(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:v}=d;if(p==="*"){let _=a[f]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const w=a[f];return v&&!w?u[p]=void 0:u[p]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function ty(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),yp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ny(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return yp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ry(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?yr(e):e;return{pathname:n?n.startsWith("/")?n:iy(n,t):t,search:ay(r),hash:ly(i)}}function iy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function xc(e,t){let n=sy(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function _c(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=yr(e):(i=yi({},e),Y(!i.pathname||!i.pathname.includes("?"),sa("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),sa("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),sa("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=ry(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Jt=e=>e.join("/").replace(/\/\/+/g,"/"),oy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ay=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ly=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _p=["post","put","patch","delete"];new Set(_p);const uy=["get",..._p];new Set(uy);/**
 * React Router v6.28.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wi.apply(this,arguments)}const Sc=y.createContext(null),dy=y.createContext(null),an=y.createContext(null),So=y.createContext(null),Ct=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Sp=y.createContext(null);function fy(e,t){let{relative:n}=t===void 0?{}:t;wr()||Y(!1);let{basename:r,navigator:i}=y.useContext(an),{hash:s,pathname:o,search:a}=Ip(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Jt([r,o])),i.createHref({pathname:l,search:a,hash:s})}function wr(){return y.useContext(So)!=null}function Ti(){return wr()||Y(!1),y.useContext(So).location}function Ep(e){y.useContext(an).static||y.useLayoutEffect(e)}function xr(){let{isDataRoute:e}=y.useContext(Ct);return e?Ny():hy()}function hy(){wr()||Y(!1);let e=y.useContext(Sc),{basename:t,future:n,navigator:r}=y.useContext(an),{matches:i}=y.useContext(Ct),{pathname:s}=Ti(),o=JSON.stringify(xc(i,n.v7_relativeSplatPath)),a=y.useRef(!1);return Ep(()=>{a.current=!0}),y.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=_c(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Jt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function py(){let{matches:e}=y.useContext(Ct),t=e[e.length-1];return t?t.params:{}}function Ip(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(an),{matches:i}=y.useContext(Ct),{pathname:s}=Ti(),o=JSON.stringify(xc(i,r.v7_relativeSplatPath));return y.useMemo(()=>_c(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function my(e,t){return gy(e,t)}function gy(e,t,n,r){wr()||Y(!1);let{navigator:i}=y.useContext(an),{matches:s}=y.useContext(Ct),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ti(),d;if(t){var f;let E=typeof t=="string"?yr(t):t;l==="/"||(f=E.pathname)!=null&&f.startsWith(l)||Y(!1),d=E}else d=u;let p=d.pathname||"/",v=p;if(l!=="/"){let E=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(E.length).join("/")}let w=V0(e,{pathname:v}),_=_y(w&&w.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Jt([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Jt([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return t&&_?y.createElement(So.Provider,{value:{location:wi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Bt.Pop}},_):_}function vy(){let e=ky(),t=cy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:i},n):null,null)}const yy=y.createElement(vy,null);class wy extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(Ct.Provider,{value:this.props.routeContext},y.createElement(Sp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xy(e){let{routeContext:t,match:n,children:r}=e,i=y.useContext(Sc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Ct.Provider,{value:t},r)}function _y(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Y(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:v}=n,w=f.route.loader&&p[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||w){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let v,w=!1,_=null,E=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,_=f.route.errorElement||yy,l&&(u<0&&p===0?(w=!0,E=null):u===p&&(w=!0,E=f.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,p+1)),h=()=>{let g;return v?g=_:w?g=E:f.route.Component?g=y.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,y.createElement(xy,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?y.createElement(wy,{location:n.location,revalidation:n.revalidation,component:_,error:v,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var kp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(kp||{}),Gs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gs||{});function Sy(e){let t=y.useContext(Sc);return t||Y(!1),t}function Ey(e){let t=y.useContext(dy);return t||Y(!1),t}function Iy(e){let t=y.useContext(Ct);return t||Y(!1),t}function Np(e){let t=Iy(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function ky(){var e;let t=y.useContext(Sp),n=Ey(Gs.UseRouteError),r=Np(Gs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ny(){let{router:e}=Sy(kp.UseNavigateStable),t=Np(Gs.UseNavigateStable),n=y.useRef(!1);return Ep(()=>{n.current=!0}),y.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,wi({fromRouteId:t},s)))},[e,t])}const nd={};function Cy(e,t){nd[t]||(nd[t]=!0,console.warn(t))}const rd=(e,t,n)=>Cy(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function Ty(e,t){(e==null?void 0:e.v7_startTransition)===void 0&&rd("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(e==null?void 0:e.v7_relativeSplatPath)===void 0&&!t&&rd("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function by(e){let{to:t,replace:n,state:r,relative:i}=e;wr()||Y(!1);let{future:s,static:o}=y.useContext(an),{matches:a}=y.useContext(Ct),{pathname:l}=Ti(),u=xr(),d=_c(t,xc(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return y.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function re(e){Y(!1)}function Py(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Bt.Pop,navigator:s,static:o=!1,future:a}=e;wr()&&Y(!1);let l=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:l,navigator:s,static:o,future:wi({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=yr(r));let{pathname:d="/",search:f="",hash:p="",state:v=null,key:w="default"}=r,_=y.useMemo(()=>{let E=wc(d,l);return E==null?null:{location:{pathname:E,search:f,hash:p,state:v,key:w},navigationType:i}},[l,d,f,p,v,w,i]);return _==null?null:y.createElement(an.Provider,{value:u},y.createElement(So.Provider,{children:n,value:_}))}function Ry(e){let{children:t,location:n}=e;return my(dl(t),n)}new Promise(()=>{});function dl(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let s=[...t,i];if(r.type===y.Fragment){n.push.apply(n,dl(r.props.children,s));return}r.type!==re&&Y(!1),!r.props.index||!r.props.children||Y(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=dl(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fl.apply(this,arguments)}function jy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Oy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ay(e,t){return e.button===0&&(!t||t==="_self")&&!Oy(e)}const Ly=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Dy="6";try{window.__reactRouterVersion=Dy}catch{}const My="startTransition",id=Tg[My];function Uy(e){let{basename:t,children:n,future:r,window:i}=e,s=y.useRef();s.current==null&&(s.current=$0({window:i,v5Compat:!0}));let o=s.current,[a,l]=y.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=y.useCallback(f=>{u&&id?id(()=>l(f)):l(f)},[l,u]);return y.useLayoutEffect(()=>o.listen(d),[o,d]),y.useEffect(()=>Ty(r),[r]),y.createElement(Py,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Fy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$y=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D=y.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,viewTransition:f}=t,p=jy(t,Ly),{basename:v}=y.useContext(an),w,_=!1;if(typeof u=="string"&&$y.test(u)&&(w=u,Fy))try{let g=new URL(window.location.href),x=u.startsWith("//")?new URL(g.protocol+u):new URL(u),I=wc(x.pathname,v);x.origin===g.origin&&I!=null?u=I+x.search+x.hash:_=!0}catch{}let E=fy(u,{relative:i}),m=zy(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function h(g){r&&r(g),g.defaultPrevented||m(g)}return y.createElement("a",fl({},p,{href:w||E,onClick:_||s?r:h,ref:n,target:l}))});var sd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sd||(sd={}));var od;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(od||(od={}));function zy(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,l=xr(),u=Ti(),d=Ip(e,{relative:o});return y.useCallback(f=>{if(Ay(f,n)){f.preventDefault();let p=r!==void 0?r:Ks(u)===Ks(d);l(e,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,d,r,i,n,e,s,o,a])}let By={data:""},Vy=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||By,Wy=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Hy=/\/\*[^]*?\*\/|  +/g,ad=/\n+/g,Lt=(e,t)=>{let n="",r="",i="";for(let s in e){let o=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Lt(o,s):s+"{"+Lt(o,s[1]=="k"?"":t)+"}":typeof o=="object"?r+=Lt(o,t?t.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Lt.p?Lt.p(s,o):s+":"+o+";")}return n+(t&&i?t+"{"+i+"}":i)+r},lt={},Cp=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Cp(e[n]);return t}return e},qy=(e,t,n,r,i)=>{let s=Cp(e),o=lt[s]||(lt[s]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(s));if(!lt[o]){let l=s!==e?e:(u=>{let d,f,p=[{}];for(;d=Wy.exec(u.replace(Hy,""));)d[4]?p.shift():d[3]?(f=d[3].replace(ad," ").trim(),p.unshift(p[0][f]=p[0][f]||{})):p[0][d[1]]=d[2].replace(ad," ").trim();return p[0]})(e);lt[o]=Lt(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&lt.g?lt.g:null;return n&&(lt.g=lt[o]),((l,u,d,f)=>{f?u.data=u.data.replace(f,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(lt[o],t,r,a),o},Ky=(e,t,n)=>e.reduce((r,i,s)=>{let o=t[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Lt(a,""):a===!1?"":a}return r+i+(o??"")},"");function Eo(e){let t=this||{},n=e.call?e(t.p):e;return qy(n.unshift?n.raw?Ky(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,Vy(t.target),t.g,t.o,t.k)}let Tp,hl,pl;Eo.bind({g:1});let St=Eo.bind({k:1});function Gy(e,t,n,r){Lt.p=t,Tp=e,hl=n,pl=r}function ln(e,t){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:hl&&hl()},a),n.o=/ *go\d+/.test(l),a.className=Eo.apply(n,r)+(l?" "+l:"");let u=e;return e[0]&&(u=a.as||e,delete a.as),pl&&u[0]&&pl(a),Tp(u,a)}return i}}var Qy=e=>typeof e=="function",Qs=(e,t)=>Qy(e)?e(t):e,Yy=(()=>{let e=0;return()=>(++e).toString()})(),bp=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Jy=20,Pp=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Jy)};case 1:return{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:n}=t;return Pp(e,{type:e.toasts.find(s=>s.id===n.id)?1:0,toast:n});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(s=>s.id===r||r===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},vs=[],ys={toasts:[],pausedAt:void 0},An=e=>{ys=Pp(ys,e),vs.forEach(t=>{t(ys)})},Xy={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Zy=(e={})=>{let[t,n]=y.useState(ys);y.useEffect(()=>(vs.push(n),()=>{let i=vs.indexOf(n);i>-1&&vs.splice(i,1)}),[t]);let r=t.toasts.map(i=>{var s,o,a;return{...e,...e[i.type],...i,removeDelay:i.removeDelay||((s=e[i.type])==null?void 0:s.removeDelay)||(e==null?void 0:e.removeDelay),duration:i.duration||((o=e[i.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||Xy[i.type],style:{...e.style,...(a=e[i.type])==null?void 0:a.style,...i.style}}});return{...t,toasts:r}},ew=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Yy()}),bi=e=>(t,n)=>{let r=ew(t,e,n);return An({type:2,toast:r}),r.id},pe=(e,t)=>bi("blank")(e,t);pe.error=bi("error");pe.success=bi("success");pe.loading=bi("loading");pe.custom=bi("custom");pe.dismiss=e=>{An({type:3,toastId:e})};pe.remove=e=>An({type:4,toastId:e});pe.promise=(e,t,n)=>{let r=pe.loading(t.loading,{...n,...n==null?void 0:n.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let s=t.success?Qs(t.success,i):void 0;return s?pe.success(s,{id:r,...n,...n==null?void 0:n.success}):pe.dismiss(r),i}).catch(i=>{let s=t.error?Qs(t.error,i):void 0;s?pe.error(s,{id:r,...n,...n==null?void 0:n.error}):pe.dismiss(r)}),e};var tw=(e,t)=>{An({type:1,toast:{id:e,height:t}})},nw=()=>{An({type:5,time:Date.now()})},Xr=new Map,rw=1e3,iw=(e,t=rw)=>{if(Xr.has(e))return;let n=setTimeout(()=>{Xr.delete(e),An({type:4,toastId:e})},t);Xr.set(e,n)},sw=e=>{let{toasts:t,pausedAt:n}=Zy(e);y.useEffect(()=>{if(n)return;let s=Date.now(),o=t.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&pe.dismiss(a.id);return}return setTimeout(()=>pe.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[t,n]);let r=y.useCallback(()=>{n&&An({type:6,time:Date.now()})},[n]),i=y.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},d=t.filter(v=>(v.position||u)===(s.position||u)&&v.height),f=d.findIndex(v=>v.id===s.id),p=d.filter((v,w)=>w<f&&v.visible).length;return d.filter(v=>v.visible).slice(...a?[p+1]:[0,p]).reduce((v,w)=>v+(w.height||0)+l,0)},[t]);return y.useEffect(()=>{t.forEach(s=>{if(s.dismissed)iw(s.id,s.removeDelay);else{let o=Xr.get(s.id);o&&(clearTimeout(o),Xr.delete(s.id))}})},[t]),{toasts:t,handlers:{updateHeight:tw,startPause:nw,endPause:r,calculateOffset:i}}},ow=St`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,aw=St`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,lw=St`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,cw=ln("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ow} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${aw} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${lw} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,uw=St`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,dw=ln("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${uw} 1s linear infinite;
`,fw=St`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,hw=St`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,pw=ln("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fw} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${hw} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,mw=ln("div")`
  position: absolute;
`,gw=ln("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,vw=St`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,yw=ln("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${vw} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ww=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?y.createElement(yw,null,t):t:n==="blank"?null:y.createElement(gw,null,y.createElement(dw,{...r}),n!=="loading"&&y.createElement(mw,null,n==="error"?y.createElement(cw,{...r}):y.createElement(pw,{...r})))},xw=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,_w=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Sw="0%{opacity:0;} 100%{opacity:1;}",Ew="0%{opacity:1;} 100%{opacity:0;}",Iw=ln("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,kw=ln("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Nw=(e,t)=>{let n=e.includes("top")?1:-1,[r,i]=bp()?[Sw,Ew]:[xw(n),_w(n)];return{animation:t?`${St(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${St(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Cw=y.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?Nw(e.position||t||"top-center",e.visible):{opacity:0},s=y.createElement(ww,{toast:e}),o=y.createElement(kw,{...e.ariaProps},Qs(e.message,e));return y.createElement(Iw,{className:e.className,style:{...i,...n,...e.style}},typeof r=="function"?r({icon:s,message:o}):y.createElement(y.Fragment,null,s,o))});Gy(y.createElement);var Tw=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let s=y.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(e,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return y.createElement("div",{ref:s,className:t,style:n},i)},bw=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:bp()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},Pw=Eo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=16,Rw=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=sw(n);return y.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:es,left:es,right:es,bottom:es,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let d=u.position||t,f=l.calculateOffset(u,{reverseOrder:e,gutter:r,defaultPosition:t}),p=bw(d,f);return y.createElement(Tw,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?Pw:"",style:p},u.type==="custom"?Qs(u.message,u):i?i(u):y.createElement(Cw,{toast:u,position:d}))}))},J=pe;const jw={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},ld=e=>{let t;const n=new Set,r=(d,f)=>{const p=typeof d=="function"?d(t):d;if(!Object.is(p,t)){const v=t;t=f??(typeof p!="object"||p===null)?p:Object.assign({},t,p),n.forEach(w=>w(t,v))}},i=()=>t,l={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(jw?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,l);return l},Ow=e=>e?ld(e):ld;var Rp={exports:{}},jp={},Op={exports:{}},Ap={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hr=y;function Aw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lw=typeof Object.is=="function"?Object.is:Aw,Dw=hr.useState,Mw=hr.useEffect,Uw=hr.useLayoutEffect,Fw=hr.useDebugValue;function $w(e,t){var n=t(),r=Dw({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return Uw(function(){i.value=n,i.getSnapshot=t,oa(i)&&s({inst:i})},[e,n,t]),Mw(function(){return oa(i)&&s({inst:i}),e(function(){oa(i)&&s({inst:i})})},[e]),Fw(n),n}function oa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lw(e,n)}catch{return!0}}function zw(e,t){return t()}var Bw=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?zw:$w;Ap.useSyncExternalStore=hr.useSyncExternalStore!==void 0?hr.useSyncExternalStore:Bw;Op.exports=Ap;var Vw=Op.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=y,Ww=Vw;function Hw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qw=typeof Object.is=="function"?Object.is:Hw,Kw=Ww.useSyncExternalStore,Gw=Io.useRef,Qw=Io.useEffect,Yw=Io.useMemo,Jw=Io.useDebugValue;jp.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=Gw(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Yw(function(){function l(v){if(!u){if(u=!0,d=v,v=r(v),i!==void 0&&o.hasValue){var w=o.value;if(i(w,v))return f=w}return f=v}if(w=f,qw(d,v))return w;var _=r(v);return i!==void 0&&i(w,_)?(d=v,w):(d=v,f=_)}var u=!1,d,f,p=n===void 0?null:n;return[function(){return l(t())},p===null?void 0:function(){return l(p())}]},[t,n,r,i]);var a=Kw(e,s[0],s[1]);return Qw(function(){o.hasValue=!0,o.value=a},[a]),Jw(a),a};Rp.exports=jp;var Xw=Rp.exports;const Zw=rf(Xw),Lp={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},{useDebugValue:ex}=Tl,{useSyncExternalStoreWithSelector:tx}=Zw;let cd=!1;const nx=e=>e;function rx(e,t=nx,n){(Lp?"production":void 0)!=="production"&&n&&!cd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),cd=!0);const r=tx(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return ex(r),r}const ud=e=>{(Lp?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Ow(e):e,n=(r,i)=>rx(t,r,i);return Object.assign(n,t),n},Dp=e=>e?ud(e):ud;var dd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ix=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(p=64)),r.push(n[d],n[f],n[p],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Mp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ix(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new sx;const p=s<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class sx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ox=function(e){const t=Mp(e);return Up.encodeByteArray(t,!0)},Fp=function(e){return ox(e).replace(/\./g,"")},$p=function(e){try{return Up.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=()=>ax().__FIREBASE_DEFAULTS__,cx=()=>{if(typeof process>"u"||typeof dd>"u")return;const e=dd.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ux=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$p(e[1]);return t&&JSON.parse(t)},Ec=()=>{try{return lx()||cx()||ux()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},dx=e=>{var t,n;return(n=(t=Ec())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},zp=()=>{var e;return(e=Ec())===null||e===void 0?void 0:e.config},Bp=e=>{var t;return(t=Ec())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function px(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function mx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gx(){const e=ge();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Wp(){try{return typeof indexedDB=="object"}catch{return!1}}function Hp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function vx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx="FirebaseError";class at extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=yx,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ln.prototype.create)}}class Ln{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?wx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new at(i,a,r)}}function wx(e,t){return e.replace(xx,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const xx=/\{\$([^}]+)}/g;function _x(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function xi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(fd(s)&&fd(o)){if(!xi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function $r(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function zr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Sx(e,t){const n=new Ex(e,t);return n.subscribe.bind(n)}class Ex{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ix(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=aa),i.error===void 0&&(i.error=aa),i.complete===void 0&&(i.complete=aa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ix(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function aa(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=1e3,Nx=2,Cx=4*60*60*1e3,Tx=.5;function hd(e,t=kx,n=Nx){const r=t*Math.pow(n,e),i=Math.round(Tx*r*(Math.random()-.5)*2);return Math.min(Cx,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e){return e&&e._delegate?e._delegate:e}class ot{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new fx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Rx(t))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=pn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=pn){return this.instances.has(t)}getOptions(t=pn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Px(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=pn){return this.component?this.component.multipleInstances?t:pn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Px(e){return e===pn?void 0:e}function Rx(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new bx(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const Ox={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Ax=U.INFO,Lx={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Dx=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Lx[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ic{constructor(t){this.name=t,this._logLevel=Ax,this._logHandler=Dx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ox[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Mx=(e,t)=>t.some(n=>e instanceof n);let pd,md;function Ux(){return pd||(pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fx(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qp=new WeakMap,ml=new WeakMap,Kp=new WeakMap,la=new WeakMap,kc=new WeakMap;function $x(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Xt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&qp.set(n,e)}).catch(()=>{}),kc.set(t,e),t}function zx(e){if(ml.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ml.set(e,t)}let gl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ml.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Kp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Bx(e){gl=e(gl)}function Vx(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ca(this),t,...n);return Kp.set(r,t.sort?t.sort():[t]),Xt(r)}:Fx().includes(e)?function(...t){return e.apply(ca(this),t),Xt(qp.get(this))}:function(...t){return Xt(e.apply(ca(this),t))}}function Wx(e){return typeof e=="function"?Vx(e):(e instanceof IDBTransaction&&zx(e),Mx(e,Ux())?new Proxy(e,gl):e)}function Xt(e){if(e instanceof IDBRequest)return $x(e);if(la.has(e))return la.get(e);const t=Wx(e);return t!==e&&(la.set(e,t),kc.set(t,e)),t}const ca=e=>kc.get(e);function Gp(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Xt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xt(o.result),l.oldVersion,l.newVersion,Xt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Hx=["get","getKey","getAll","getAllKeys","count"],qx=["put","add","delete","clear"],ua=new Map;function gd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ua.get(t))return ua.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=qx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ua.set(t,s),s}Bx(e=>({...e,get:(t,n,r)=>gd(t,n)||e.get(t,n,r),has:(t,n)=>!!gd(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gx(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const vl="@firebase/app",vd="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new Ic("@firebase/app"),Qx="@firebase/app-compat",Yx="@firebase/analytics-compat",Jx="@firebase/analytics",Xx="@firebase/app-check-compat",Zx="@firebase/app-check",e1="@firebase/auth",t1="@firebase/auth-compat",n1="@firebase/database",r1="@firebase/data-connect",i1="@firebase/database-compat",s1="@firebase/functions",o1="@firebase/functions-compat",a1="@firebase/installations",l1="@firebase/installations-compat",c1="@firebase/messaging",u1="@firebase/messaging-compat",d1="@firebase/performance",f1="@firebase/performance-compat",h1="@firebase/remote-config",p1="@firebase/remote-config-compat",m1="@firebase/storage",g1="@firebase/storage-compat",v1="@firebase/firestore",y1="@firebase/vertexai-preview",w1="@firebase/firestore-compat",x1="firebase",_1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="[DEFAULT]",S1={[vl]:"fire-core",[Qx]:"fire-core-compat",[Jx]:"fire-analytics",[Yx]:"fire-analytics-compat",[Zx]:"fire-app-check",[Xx]:"fire-app-check-compat",[e1]:"fire-auth",[t1]:"fire-auth-compat",[n1]:"fire-rtdb",[r1]:"fire-data-connect",[i1]:"fire-rtdb-compat",[s1]:"fire-fn",[o1]:"fire-fn-compat",[a1]:"fire-iid",[l1]:"fire-iid-compat",[c1]:"fire-fcm",[u1]:"fire-fcm-compat",[d1]:"fire-perf",[f1]:"fire-perf-compat",[h1]:"fire-rc",[p1]:"fire-rc-compat",[m1]:"fire-gcs",[g1]:"fire-gcs-compat",[v1]:"fire-fst",[w1]:"fire-fst-compat",[y1]:"fire-vertex","fire-js":"fire-js",[x1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new Map,E1=new Map,wl=new Map;function yd(e,t){try{e.container.addComponent(t)}catch(n){Et.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function It(e){const t=e.name;if(wl.has(t))return Et.debug(`There were multiple attempts to register component ${t}.`),!1;wl.set(t,e);for(const n of Ys.values())yd(n,e);for(const n of E1.values())yd(n,e);return!0}function Sr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ke(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new Ln("app","Firebase",I1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=_1;function Qp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:yl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(n||(n=zp()),!n)throw Zt.create("no-options");const s=Ys.get(i);if(s){if(xi(n,s.options)&&xi(r,s.config))return s;throw Zt.create("duplicate-app",{appName:i})}const o=new jx(i);for(const l of wl.values())o.addComponent(l);const a=new k1(n,r,o);return Ys.set(i,a),a}function Yp(e=yl){const t=Ys.get(e);if(!t&&e===yl&&zp())return Qp();if(!t)throw Zt.create("no-app",{appName:e});return t}function it(e,t,n){var r;let i=(r=S1[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Et.warn(a.join(" "));return}It(new ot(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="firebase-heartbeat-database",C1=1,_i="firebase-heartbeat-store";let da=null;function Jp(){return da||(da=Gp(N1,C1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(_i)}catch(n){console.warn(n)}}}}).catch(e=>{throw Zt.create("idb-open",{originalErrorMessage:e.message})})),da}async function T1(e){try{const n=(await Jp()).transaction(_i),r=await n.objectStore(_i).get(Xp(e));return await n.done,r}catch(t){if(t instanceof at)Et.warn(t.message);else{const n=Zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Et.warn(n.message)}}}async function wd(e,t){try{const r=(await Jp()).transaction(_i,"readwrite");await r.objectStore(_i).put(t,Xp(e)),await r.done}catch(n){if(n instanceof at)Et.warn(n.message);else{const r=Zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Et.warn(r.message)}}}function Xp(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=1024,P1=30*24*60*60*1e3;class R1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new O1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xd();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=P1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Et.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xd(),{heartbeatsToSend:r,unsentEntries:i}=j1(this._heartbeatsCache.heartbeats),s=Fp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Et.warn(n),""}}}function xd(){return new Date().toISOString().substring(0,10)}function j1(e,t=b1){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_d(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_d(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class O1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wp()?Hp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await T1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function _d(e){return Fp(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(e){It(new ot("platform-logger",t=>new Kx(t),"PRIVATE")),It(new ot("heartbeat",t=>new R1(t),"PRIVATE")),it(vl,vd,e),it(vl,vd,"esm2017"),it("fire-js","")}A1("");function Nc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Zp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const L1=Zp,em=new Ln("auth","Firebase",Zp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Ic("@firebase/auth");function D1(e,...t){Js.logLevel<=U.WARN&&Js.warn(`Auth (${Pi}): ${e}`,...t)}function ws(e,...t){Js.logLevel<=U.ERROR&&Js.error(`Auth (${Pi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e,...t){throw Cc(e,...t)}function Re(e,...t){return Cc(e,...t)}function tm(e,t,n){const r=Object.assign(Object.assign({},L1()),{[t]:n});return new Ln("auth","Firebase",r).create(t,{appName:e.name})}function st(e){return tm(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return em.create(e,...t)}function C(e,t,...n){if(!e)throw Cc(t,...n)}function pt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ws(t),new Error(t)}function kt(e,t){e||pt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function nm(){return Sd()==="http:"||Sd()==="https:"}function Sd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nm()||Vp()||"connection"in navigator)?navigator.onLine:!0}function U1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,n){this.shortDelay=t,this.longDelay=n,kt(n>t,"Short delay should be less than long delay!"),this.isMobile=hx()||mx()}get(){return M1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(e,t){kt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=new Ri(3e4,6e4);function xe(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ce(e,t,n,r,i={}){return im(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=_r(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},s);return px()||(u.referrerPolicy="no-referrer"),rm.fetch()(sm(e,e.config.apiHost,n,a),u)})}async function im(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},F1),t);try{const i=new B1(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Br(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Br(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Br(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Br(e,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tm(e,d,u);Je(e,d)}}catch(i){if(i instanceof at)throw i;Je(e,"network-request-failed",{message:String(i)})}}async function cn(e,t,n,r,i={}){const s=await Ce(e,t,n,r,i);return"mfaPendingCredential"in s&&Je(e,"multi-factor-auth-required",{_serverResponse:s}),s}function sm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Tc(e.config,i):`${e.config.apiScheme}://${i}`}function z1(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class B1{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Re(this.auth,"network-request-failed")),$1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Br(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Re(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(e){return e!==void 0&&e.getResponse!==void 0}function Id(e){return e!==void 0&&e.enterprise!==void 0}class V1{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return z1(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(e){return(await Ce(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function H1(e,t){return Ce(e,"GET","/v2/recaptchaConfig",xe(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(e,t){return Ce(e,"POST","/v1/accounts:delete",t)}async function om(e,t){return Ce(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function K1(e,t=!1){const n=we(e),r=await n.getIdToken(t),i=bc(r);C(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zr(fa(i.auth_time)),issuedAtTime:Zr(fa(i.iat)),expirationTime:Zr(fa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fa(e){return Number(e)*1e3}function bc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ws("JWT malformed, contained fewer than 3 sections"),null;try{const i=$p(n);return i?JSON.parse(i):(ws("Failed to decode base64 JWT payload"),null)}catch(i){return ws("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kd(e){const t=bc(e);return C(t,"internal-error"),C(typeof t.exp<"u","internal-error"),C(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof at&&G1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function G1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zr(this.lastLoginAt),this.creationTime=Zr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await pr(e,om(n,{idToken:r}));C(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?am(s.providerUserInfo):[],a=J1(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _l(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}async function Y1(e){const t=we(e);await Xs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function J1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function am(e){return e.map(t=>{var{providerId:n}=t,r=Nc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X1(e,t){const n=await im(e,{},async()=>{const r=_r({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=sm(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Z1(e,t){return Ce(e,"POST","/v2/accounts:revokeToken",xe(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){C(t.idToken,"internal-error"),C(typeof t.idToken<"u","internal-error"),C(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):kd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){C(t.length!==0,"internal-error");const n=kd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await X1(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new rr;return r&&(C(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(C(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(C(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rr,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(e,t){C(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class mt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Nc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _l(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await pr(this,this.stsTokenManager.getToken(this.auth,t));return C(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return K1(this,t)}reload(){return Y1(this)}_assign(t){this!==t&&(C(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new mt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Xs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(st(this.auth));const t=await this.getIdToken();return await pr(this,q1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:x,isAnonymous:I,providerData:T,stsTokenManager:b}=n;C(g&&b,t,"internal-error");const P=rr.fromJSON(this.name,b);C(typeof g=="string",t,"internal-error"),Pt(f,t.name),Pt(p,t.name),C(typeof x=="boolean",t,"internal-error"),C(typeof I=="boolean",t,"internal-error"),Pt(v,t.name),Pt(w,t.name),Pt(_,t.name),Pt(E,t.name),Pt(m,t.name),Pt(h,t.name);const $=new mt({uid:g,auth:t,email:p,emailVerified:x,displayName:f,isAnonymous:I,photoURL:w,phoneNumber:v,tenantId:_,stsTokenManager:P,createdAt:m,lastLoginAt:h});return T&&Array.isArray(T)&&($.providerData=T.map(O=>Object.assign({},O))),E&&($._redirectEventId=E),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new rr;i.updateFromServerResponse(n);const s=new mt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Xs(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];C(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?am(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new rr;a.updateFromIdToken(r);const l=new mt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _l(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new Map;function gt(e){kt(e instanceof Function,"Expected a class definition");let t=Nd.get(e);return t?(kt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Nd.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}lm.type="NONE";const Cd=lm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(e,t,n){return`firebase:${e}:${t}:${n}`}class ir{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xs(this.userKey,i.apiKey,s),this.fullPersistenceKey=xs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?mt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ir(gt(Cd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||gt(Cd);const o=xs(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const f=mt._fromJSON(t,d);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ir(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ir(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(cm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pm(t))return"Blackberry";if(mm(t))return"Webos";if(um(t))return"Safari";if((t.includes("chrome/")||dm(t))&&!t.includes("edge/"))return"Chrome";if(hm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cm(e=ge()){return/firefox\//i.test(e)}function um(e=ge()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dm(e=ge()){return/crios\//i.test(e)}function fm(e=ge()){return/iemobile/i.test(e)}function hm(e=ge()){return/android/i.test(e)}function pm(e=ge()){return/blackberry/i.test(e)}function mm(e=ge()){return/webos/i.test(e)}function Pc(e=ge()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function e_(e=ge()){var t;return Pc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function t_(){return gx()&&document.documentMode===10}function gm(e=ge()){return Pc(e)||hm(e)||mm(e)||pm(e)||/windows phone/i.test(e)||fm(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(e,t=[]){let n;switch(e){case"Browser":n=Td(ge());break;case"Worker":n=`${Td(ge())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_(e,t={}){return Ce(e,"GET","/v2/passwordPolicy",xe(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=6;class s_{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:i_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bd(this),this.idTokenSubscription=new bd(this),this.beforeStateQueue=new n_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=em,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=gt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ir.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await om(this,{idToken:t}),r=await mt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Xs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=U1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ke(this.app))return Promise.reject(st(this));const n=t?we(t):null;return n&&C(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&C(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ke(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await r_(this),n=new s_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ln("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Z1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&gt(t)||this._popupRedirectResolver;C(n,this,"argument-error"),this.redirectPersistenceManager=await ir.create(this,[gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&D1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xe(e){return we(e)}class bd{constructor(t){this.auth=t,this.observer=null,this.addObserver=Sx(n=>this.observer=n)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function a_(e){ji=e}function Rc(e){return ji.loadJS(e)}function l_(){return ji.recaptchaV2Script}function c_(){return ji.recaptchaEnterpriseScript}function u_(){return ji.gapiScript}function ym(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const d_="recaptcha-enterprise",f_="NO_RECAPTCHA";class h_{constructor(t){this.type=d_,this.auth=Xe(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{H1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new V1(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Id(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(f_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Id(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=c_();l.length!==0&&(l+=a),Rc(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Pd(e,t,n,r=!1){const i=new h_(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Zs(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Pd(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Pd(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(e,t){const n=Sr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xi(s,t??{}))return i;Je(i,"already-initialized")}return n.initialize({options:t})}function m_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function g_(e,t,n){const r=Xe(e);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=wm(t),{host:o,port:a}=v_(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),y_()}function wm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function v_(e){const t=wm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Rd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Rd(o)}}}function Rd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function y_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(t){return pt("not implemented")}_linkToIdToken(t,n){return pt("not implemented")}_getReauthenticationResolver(t){return pt("not implemented")}}async function w_(e,t){return Ce(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(e,t){return cn(e,"POST","/v1/accounts:signInWithPassword",xe(e,t))}async function __(e,t){return Ce(e,"POST","/v1/accounts:sendOobCode",xe(e,t))}async function S_(e,t){return __(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(e,t){return cn(e,"POST","/v1/accounts:signInWithEmailLink",xe(e,t))}async function I_(e,t){return cn(e,"POST","/v1/accounts:signInWithEmailLink",xe(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends ko{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Si(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Si(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zs(t,n,"signInWithPassword",x_);case"emailLink":return E_(t,{email:this._email,oobCode:this._password});default:Je(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zs(t,r,"signUpPassword",w_);case"emailLink":return I_(t,{idToken:n,email:this._email,oobCode:this._password});default:Je(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t){return cn(e,"POST","/v1/accounts:signInWithIdp",xe(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="http://localhost";class Tn extends ko{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Tn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Nc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Tn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return sr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,sr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,sr(t,n)}buildRequest(){const t={requestUri:k_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=_r(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(e,t){return Ce(e,"POST","/v1/accounts:sendVerificationCode",xe(e,t))}async function C_(e,t){return cn(e,"POST","/v1/accounts:signInWithPhoneNumber",xe(e,t))}async function T_(e,t){const n=await cn(e,"POST","/v1/accounts:signInWithPhoneNumber",xe(e,t));if(n.temporaryProof)throw Br(e,"account-exists-with-different-credential",n);return n}const b_={USER_NOT_FOUND:"user-not-found"};async function P_(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return cn(e,"POST","/v1/accounts:signInWithPhoneNumber",xe(e,n),b_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends ko{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,n){return new _n({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new _n({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(t){return C_(t,this._makeVerificationRequest())}_linkToIdToken(t,n){return T_(t,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return P_(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){typeof t=="string"&&(t=JSON.parse(t));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=t;return!r&&!n&&!i&&!s?null:new _n({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function j_(e){const t=$r(zr(e)).link,n=t?$r(zr(t)).deep_link_id:null,r=$r(zr(e)).deep_link_id;return(r?$r(zr(r)).link:null)||r||n||t||e}class jc{constructor(t){var n,r,i,s,o,a;const l=$r(zr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=R_((i=l.mode)!==null&&i!==void 0?i:null);C(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=j_(t);try{return new jc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.providerId=Er.PROVIDER_ID}static credential(t,n){return Si._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=jc.parseLink(n);return C(r,"argument-error"),Si._fromEmailAndCode(t,r.code,r.tenantId)}}Er.PROVIDER_ID="password";Er.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Er.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends xm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Oi{constructor(){super("facebook.com")}static credential(t){return Tn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dt.credential(t.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Tn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Oi{constructor(){super("github.com")}static credential(t){return Tn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ut.credential(t.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Oi{constructor(){super("twitter.com")}static credential(t,n){return Tn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ft.credential(n,r)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(e,t){return cn(e,"POST","/v1/accounts:signUp",xe(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await mt._fromIdTokenResponse(t,r,i),o=jd(r);return new bn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=jd(r);return new bn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function jd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends at{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,eo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new eo(t,n,r,i)}}function _m(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?eo._fromErrorAndOperation(e,s,t,r):s})}async function A_(e,t,n=!1){const r=await pr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return bn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(e,t,n=!1){const{auth:r}=e;if(Ke(r.app))return Promise.reject(st(r));const i="reauthenticate";try{const s=await pr(e,_m(r,i,t,e),n);C(s.idToken,r,"internal-error");const o=bc(s.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(e.uid===a,r,"user-mismatch"),bn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sm(e,t,n=!1){if(Ke(e.app))return Promise.reject(st(e));const r="signIn",i=await _m(e,r,t),s=await bn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Em(e,t){return Sm(Xe(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(e){const t=Xe(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function D_(e,t,n){const r=Xe(e);await Zs(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",S_)}async function M_(e,t,n){if(Ke(e.app))return Promise.reject(st(e));const r=Xe(e),o=await Zs(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",O_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Im(e),l}),a=await bn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function U_(e,t,n){return Ke(e.app)?Promise.reject(st(e)):Em(we(e),Er.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Im(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(e,t){return Ce(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=we(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await pr(r,F_(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(e,t){return we(e).setPersistence(t)}function B_(e,t,n,r){return we(e).onIdTokenChanged(t,n,r)}function V_(e,t,n){return we(e).beforeAuthStateChanged(t,n)}function W_(e,t,n,r){return we(e).onAuthStateChanged(t,n,r)}function H_(e){return we(e).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(e,t){return Ce(e,"POST","/v2/accounts/mfaEnrollment:start",xe(e,t))}const to="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(to,"1"),this.storage.removeItem(to),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=1e3,G_=10;class Nm extends km{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);t_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,G_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},K_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Nm.type="LOCAL";const Cm=Nm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm extends km{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Tm.type="SESSION";const bm=Tm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new No(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Q_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Oc("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return window}function J_(e){X().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){return typeof X().WorkerGlobalScope<"u"&&typeof X().importScripts=="function"}async function X_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function eS(){return Ac()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="firebaseLocalStorageDb",tS=1,no="firebaseLocalStorage",Rm="fbase_key";class Ai{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Co(e,t){return e.transaction([no],t?"readwrite":"readonly").objectStore(no)}function nS(){const e=indexedDB.deleteDatabase(Pm);return new Ai(e).toPromise()}function Sl(){const e=indexedDB.open(Pm,tS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(no,{keyPath:Rm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(no)?t(r):(r.close(),await nS(),t(await Sl()))})})}async function Od(e,t,n){const r=Co(e,!0).put({[Rm]:t,value:n});return new Ai(r).toPromise()}async function rS(e,t){const n=Co(e,!1).get(t),r=await new Ai(n).toPromise();return r===void 0?null:r.value}function Ad(e,t){const n=Co(e,!0).delete(t);return new Ai(n).toPromise()}const iS=800,sS=3;class jm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>sS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ac()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(eS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await X_(),!this.activeServiceWorker)return;this.sender=new Y_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Z_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Sl();return await Od(t,to,"1"),await Ad(t,to),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Od(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>rS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ad(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Co(i,!1).getAll();return new Ai(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jm.type="LOCAL";const oS=jm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(e,t){return Ce(e,"POST","/v2/accounts/mfaSignIn:start",xe(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=500,cS=6e4,ts=1e12;class uS{constructor(t){this.auth=t,this.counter=ts,this._widgets=new Map}render(t,n){const r=this.counter;return this._widgets.set(r,new dS(t,this.auth.name,n||{})),this.counter++,r}reset(t){var n;const r=t||ts;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(t){var n;const r=t||ts;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(t){var n;const r=t||ts;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class dS{constructor(t,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof t=="string"?document.getElementById(t):t;C(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=fS(50);const{callback:t,"expired-callback":n}=this.params;if(t)try{t(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},cS)},lS))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function fS(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=ym("rcb"),hS=new Ri(3e4,6e4);class pS{constructor(){var t;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((t=X().grecaptcha)===null||t===void 0)&&t.render)}load(t,n=""){return C(mS(n),t,"argument-error"),this.shouldResolveImmediately(n)&&Ed(X().grecaptcha)?Promise.resolve(X().grecaptcha):new Promise((r,i)=>{const s=X().setTimeout(()=>{i(Re(t,"network-request-failed"))},hS.get());X()[ha]=()=>{X().clearTimeout(s),delete X()[ha];const a=X().grecaptcha;if(!a||!Ed(a)){i(Re(t,"internal-error"));return}const l=a.render;a.render=(u,d)=>{const f=l(u,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${l_()}?${_r({onload:ha,render:"explicit",hl:n})}`;Rc(o).catch(()=>{clearTimeout(s),i(Re(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){var n;return!!(!((n=X().grecaptcha)===null||n===void 0)&&n.render)&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function mS(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class gS{async load(t){return new uS(t)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="recaptcha",vS={theme:"light",type:"image"};class yS{constructor(t,n,r=Object.assign({},vS)){this.parameters=r,this.type=Om,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Xe(t),this.isInvisible=this.parameters.size==="invisible",C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;C(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new gS:new pS,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(t);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof t=="function")t(n);else if(typeof t=="string"){const r=X()[t];typeof r=="function"&&r(n)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const n=document.createElement("div");t.appendChild(n),t=n}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){C(nm()&&!Ac(),this.auth,"internal-error"),await wS(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await W1(this.auth);C(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function wS(){let e=null;return new Promise(t=>{if(document.readyState==="complete"){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(t,n){this.verificationId=t,this.onConfirmation=n}confirm(t){const n=_n._fromVerification(this.verificationId,t);return this.onConfirmation(n)}}async function _S(e,t,n){if(Ke(e.app))return Promise.reject(st(e));const r=Xe(e),i=await Am(r,t,we(n));return new xS(i,s=>Em(r,s))}async function Am(e,t,n){var r;const i=await n.verify();try{C(typeof i=="string",e,"argument-error"),C(n.type===Om,e,"argument-error");let s;if(typeof t=="string"?s={phoneNumber:t}:s=t,"session"in s){const o=s.session;if("phoneNumber"in s)return C(o.type==="enroll",e,"internal-error"),(await q_(e,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{C(o.type==="signin",e,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return C(a,e,"missing-multi-factor-info"),(await aS(e,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await N_(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t){this.providerId=Sn.PROVIDER_ID,this.auth=Xe(t)}verifyPhoneNumber(t,n){return Am(this.auth,t,we(n))}static credential(t,n){return _n._fromVerification(t,n)}static credentialFromResult(t){const n=t;return Sn.credentialFromTaggedObject(n)}static credentialFromError(t){return Sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:n,temporaryProof:r}=t;return n&&r?_n._fromTokenResponse(n,r):null}}Sn.PROVIDER_ID="phone";Sn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(e,t){return t?gt(t):(C(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends ko{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return sr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return sr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return sr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ES(e){return Sm(e.auth,new Lc(e),e.bypassAuthState)}function IS(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),L_(n,new Lc(e),e.bypassAuthState)}async function kS(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),A_(n,new Lc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ES;case"linkViaPopup":case"linkViaRedirect":return kS;case"reauthViaPopup":case"reauthViaRedirect":return IS;default:Je(this.auth,"internal-error")}}resolve(t){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=new Ri(2e3,1e4);class Yn extends Lm{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return C(t,this.auth,"internal-error"),t}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const t=Oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,NS.get())};t()}}Yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="pendingRedirect",_s=new Map;class TS extends Lm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=_s.get(this.auth._key());if(!t){try{const r=await bS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}_s.set(this.auth._key(),t)}return this.bypassAuthState||_s.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bS(e,t){const n=jS(t),r=RS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function PS(e,t){_s.set(e._key(),t)}function RS(e){return gt(e._redirectPersistence)}function jS(e){return xs(CS,e.config.apiKey,e.name)}async function OS(e,t,n=!1){if(Ke(e.app))return Promise.reject(st(e));const r=Xe(e),i=SS(r,t),o=await new TS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=10*60*1e3;class LS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!DS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Dm(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Re(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=AS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ld(t))}saveEventToCache(t){this.cachedEventUids.add(Ld(t)),this.lastProcessedEventTime=Date.now()}}function Ld(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Dm({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function DS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dm(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(e,t={}){return Ce(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FS=/^https?/;async function $S(e){if(e.config.emulator)return;const{authorizedDomains:t}=await MS(e);for(const n of t)try{if(zS(n))return}catch{}Je(e,"unauthorized-domain")}function zS(e){const t=xl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FS.test(n))return!1;if(US.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=new Ri(3e4,6e4);function Dd(){const e=X().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function VS(e){return new Promise((t,n)=>{var r,i,s;function o(){Dd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n(Re(e,"network-request-failed"))},timeout:BS.get()})}if(!((i=(r=X().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=X().gapi)===null||s===void 0)&&s.load)o();else{const a=ym("iframefcb");return X()[a]=()=>{gapi.load?o():n(Re(e,"network-request-failed"))},Rc(`${u_()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ss=null,t})}let Ss=null;function WS(e){return Ss=Ss||VS(e),Ss}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=new Ri(5e3,15e3),qS="__/auth/iframe",KS="emulator/auth/iframe",GS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YS(e){const t=e.config;C(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Tc(t,KS):`https://${e.config.authDomain}/${qS}`,r={apiKey:t.apiKey,appName:e.name,v:Pi},i=QS.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_r(r).slice(1)}`}async function JS(e){const t=await WS(e),n=X().gapi;return C(n,e,"internal-error"),t.open({where:document.body,url:YS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Re(e,"network-request-failed"),a=X().setTimeout(()=>{s(o)},HS.get());function l(){X().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZS=500,eE=600,tE="_blank",nE="http://localhost";class Md{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rE(e,t,n,r=ZS,i=eE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},XS),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ge().toLowerCase();n&&(a=dm(u)?tE:n),cm(u)&&(t=t||nE,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[v,w])=>`${p}${v}=${w},`,"");if(e_(u)&&a!=="_self")return iE(t||"",a),new Md(null);const f=window.open(t||"",a,d);C(f,e,"popup-blocked");try{f.focus()}catch{}return new Md(f)}function iE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="__/auth/handler",oE="emulator/auth/handler",aE=encodeURIComponent("fac");async function Ud(e,t,n,r,i,s){C(e.config.authDomain,e,"auth-domain-config-required"),C(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Pi,eventId:i};if(t instanceof xm){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",_x(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(t instanceof Oi){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${aE}=${encodeURIComponent(l)}`:"";return`${lE(e)}?${_r(a).slice(1)}${u}`}function lE({config:e}){return e.emulator?Tc(e,oE):`https://${e.authDomain}/${sE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="webStorageSupport";class cE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bm,this._completeRedirectFn=OS,this._overrideRedirectResult=PS}async _openPopup(t,n,r,i){var s;kt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ud(t,n,r,xl(),i);return rE(t,o,Oc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Ud(t,n,r,xl(),i);return J_(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await JS(t),r=new LS(t);return n.register("authEvent",i=>(C(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(pa,{type:pa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[pa];o!==void 0&&n(!!o),Je(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$S(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return gm()||um()||Pc()}}const uE=cE;var Fd="@firebase/auth",$d="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hE(e){It(new ot("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vm(e)},u=new o_(r,i,s,l);return m_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),It(new ot("auth-internal",t=>{const n=Xe(t.getProvider("auth").getImmediate());return(r=>new dE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(Fd,$d,fE(e)),it(Fd,$d,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=5*60,mE=Bp("authIdTokenMaxAge")||pE;let zd=null;const gE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mE)return;const i=n==null?void 0:n.token;zd!==i&&(zd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vE(e=Yp()){const t=Sr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=p_(e,{popupRedirectResolver:uE,persistence:[oS,Cm,bm]}),r=Bp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gE(s.toString());V_(n,o,()=>o(n.currentUser)),B_(n,a=>o(a))}}const i=dx("auth");return i&&g_(n,`http://${i}`),n}function yE(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}a_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Re("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hE("Browser");var wE="firebase",xE="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it(wE,xE,"app");const Mm="@firebase/installations",Dc="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=1e4,Fm=`w:${Dc}`,$m="FIS_v2",_E="https://firebaseinstallations.googleapis.com/v1",SE=60*60*1e3,EE="installations",IE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Pn=new Ln(EE,IE,kE);function zm(e){return e instanceof at&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm({projectId:e}){return`${_E}/projects/${e}/installations`}function Vm(e){return{token:e.token,requestStatus:2,expiresIn:CE(e.expiresIn),creationTime:Date.now()}}async function Wm(e,t){const r=(await t.json()).error;return Pn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Hm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function NE(e,{refreshToken:t}){const n=Hm(e);return n.append("Authorization",TE(t)),n}async function qm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function CE(e){return Number(e.replace("s","000"))}function TE(e){return`${$m} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Bm(e),i=Hm(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:$m,appId:e.appId,sdkVersion:Fm},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await qm(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Vm(u.authToken)}}else throw await Wm("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=/^[cdef][\w-]{21}$/,El="";function jE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=OE(e);return RE.test(n)?n:El}catch{return El}}function OE(e){return PE(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Map;function Qm(e,t){const n=To(e);Ym(n,t),AE(n,t)}function Ym(e,t){const n=Gm.get(e);if(n)for(const r of n)r(t)}function AE(e,t){const n=LE();n&&n.postMessage({key:e,fid:t}),DE()}let yn=null;function LE(){return!yn&&"BroadcastChannel"in self&&(yn=new BroadcastChannel("[Firebase] FID Change"),yn.onmessage=e=>{Ym(e.data.key,e.data.fid)}),yn}function DE(){Gm.size===0&&yn&&(yn.close(),yn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="firebase-installations-database",UE=1,Rn="firebase-installations-store";let ma=null;function Mc(){return ma||(ma=Gp(ME,UE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Rn)}}})),ma}async function ro(e,t){const n=To(e),i=(await Mc()).transaction(Rn,"readwrite"),s=i.objectStore(Rn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Qm(e,t.fid),t}async function Jm(e){const t=To(e),r=(await Mc()).transaction(Rn,"readwrite");await r.objectStore(Rn).delete(t),await r.done}async function bo(e,t){const n=To(e),i=(await Mc()).transaction(Rn,"readwrite"),s=i.objectStore(Rn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Qm(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(e){let t;const n=await bo(e.appConfig,r=>{const i=FE(r),s=$E(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===El?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function FE(e){const t=e||{fid:jE(),registrationStatus:0};return Xm(t)}function $E(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Pn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=zE(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:BE(e)}:{installationEntry:t}}async function zE(e,t){try{const n=await bE(e,t);return ro(e.appConfig,n)}catch(n){throw zm(n)&&n.customData.serverCode===409?await Jm(e.appConfig):await ro(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function BE(e){let t=await Bd(e.appConfig);for(;t.registrationStatus===1;)await Km(100),t=await Bd(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Uc(e);return r||n}return t}function Bd(e){return bo(e,t=>{if(!t)throw Pn.create("installation-not-found");return Xm(t)})}function Xm(e){return VE(e)?{fid:e.fid,registrationStatus:0}:e}function VE(e){return e.registrationStatus===1&&e.registrationTime+Um<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE({appConfig:e,heartbeatServiceProvider:t},n){const r=HE(e,n),i=NE(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Fm,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await qm(()=>fetch(r,a));if(l.ok){const u=await l.json();return Vm(u)}else throw await Wm("Generate Auth Token",l)}function HE(e,{fid:t}){return`${Bm(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(e,t=!1){let n;const r=await bo(e.appConfig,s=>{if(!Zm(s))throw Pn.create("not-registered");const o=s.authToken;if(!t&&GE(o))return s;if(o.requestStatus===1)return n=qE(e,t),s;{if(!navigator.onLine)throw Pn.create("app-offline");const a=YE(s);return n=KE(e,a),a}});return n?await n:r.authToken}async function qE(e,t){let n=await Vd(e.appConfig);for(;n.authToken.requestStatus===1;)await Km(100),n=await Vd(e.appConfig);const r=n.authToken;return r.requestStatus===0?Fc(e,t):r}function Vd(e){return bo(e,t=>{if(!Zm(t))throw Pn.create("not-registered");const n=t.authToken;return JE(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function KE(e,t){try{const n=await WE(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ro(e.appConfig,r),n}catch(n){if(zm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Jm(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ro(e.appConfig,r)}throw n}}function Zm(e){return e!==void 0&&e.registrationStatus===2}function GE(e){return e.requestStatus===2&&!QE(e)}function QE(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+SE}function YE(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function JE(e){return e.requestStatus===1&&e.requestTime+Um<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(e){const t=e,{installationEntry:n,registrationPromise:r}=await Uc(t);return r?r.catch(console.error):Fc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(e,t=!1){const n=e;return await eI(n),(await Fc(n,t)).token}async function eI(e){const{registrationPromise:t}=await Uc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(e){if(!e||!e.options)throw ga("App Configuration");if(!e.name)throw ga("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ga(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ga(e){return Pn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="installations",nI="installations-internal",rI=e=>{const t=e.getProvider("app").getImmediate(),n=tI(t),r=Sr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},iI=e=>{const t=e.getProvider("app").getImmediate(),n=Sr(t,eg).getImmediate();return{getId:()=>XE(n),getToken:i=>ZE(n,i)}};function sI(){It(new ot(eg,rI,"PUBLIC")),It(new ot(nI,iI,"PRIVATE"))}sI();it(Mm,Dc);it(Mm,Dc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="analytics",oI="firebase_id",aI="origin",lI=60*1e3,cI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$c="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new Ic("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},je=new Ln("analytics","Analytics",uI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(e){if(!e.startsWith($c)){const t=je.create("invalid-gtag-resource",{gtagURL:e});return Ne.warn(t.message),""}return e}function tg(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function fI(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function hI(e,t){const n=fI("firebase-js-sdk-policy",{createScriptURL:dI}),r=document.createElement("script"),i=`${$c}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function pI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function mI(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await tg(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Ne.error(a)}e("config",i,s)}async function gI(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await tg(n);for(const l of o){const u=a.find(f=>f.measurementId===l),d=u&&t[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Ne.error(s)}}function vI(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await gI(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await mI(e,t,n,r,a,l)}else if(s==="consent"){const[a,l]=o;e("consent",a,l)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){Ne.error(a)}}return i}function yI(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=vI(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function wI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes($c)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=30,_I=1e3;class SI{constructor(t={},n=_I){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ng=new SI;function EI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function II(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:EI(r)},s=cI.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw je.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function kI(e,t=ng,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw je.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw je.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new TI;return setTimeout(async()=>{a.abort()},lI),rg({appId:r,apiKey:i,measurementId:s},o,a,t)}async function rg(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=ng){var s;const{appId:o,measurementId:a}=e;try{await NI(r,t)}catch(l){if(a)return Ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await II(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!CI(u)){if(i.deleteThrottleMetadata(o),a)return Ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?hd(n,i.intervalMillis,xI):hd(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),Ne.debug(`Calling attemptFetch again in ${d} millis`),rg(e,f,r,i)}}function NI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(je.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function CI(e){if(!(e instanceof at)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class TI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function bI(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(){if(Wp())try{await Hp()}catch(e){return Ne.warn(je.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ne.warn(je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function RI(e,t,n,r,i,s,o){var a;const l=kI(e);l.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&Ne.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Ne.error(v)),t.push(l);const u=PI().then(v=>{if(v)return r.getId()}),[d,f]=await Promise.all([l,u]);wI(s)||hI(s,d.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[aI]="firebase",p.update=!0,f!=null&&(p[oI]=f),i("config",d.measurementId,p),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(t){this.app=t}_delete(){return delete ei[this.app.options.appId],Promise.resolve()}}let ei={},Wd=[];const Hd={};let va="dataLayer",OI="gtag",qd,ig,Kd=!1;function AI(){const e=[];if(Vp()&&e.push("This is a browser extension environment."),vx()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=je.create("invalid-analytics-context",{errorInfo:t});Ne.warn(n.message)}}function LI(e,t,n){AI();const r=e.options.appId;if(!r)throw je.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw je.create("no-api-key");if(ei[r]!=null)throw je.create("already-exists",{id:r});if(!Kd){pI(va);const{wrappedGtag:s,gtagCore:o}=yI(ei,Wd,Hd,va,OI);ig=s,qd=o,Kd=!0}return ei[r]=RI(e,Wd,Hd,t,qd,va,n),new jI(e)}function DI(e=Yp()){e=we(e);const t=Sr(e,io);return t.isInitialized()?t.getImmediate():MI(e)}function MI(e,t={}){const n=Sr(e,io);if(n.isInitialized()){const i=n.getImmediate();if(xi(t,n.getOptions()))return i;throw je.create("already-initialized")}return n.initialize({options:t})}function UI(e,t,n,r){e=we(e),bI(ig,ei[e.app.options.appId],t,n,r).catch(i=>Ne.error(i))}const Gd="@firebase/analytics",Qd="0.10.8";function FI(){It(new ot(io,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return LI(r,i,n)},"PUBLIC")),It(new ot("analytics-internal",e,"PRIVATE")),it(Gd,Qd),it(Gd,Qd,"esm2017");function e(t){try{const n=t.getProvider(io).getImmediate();return{logEvent:(r,i,s)=>UI(n,r,i,s)}}catch(n){throw je.create("interop-component-reg-failed",{reason:n})}}}FI();const $I={apiKey:"AIzaSyAFxrIs_-QGDWl-5scOK9ZnUNNt9g4i8vc",authDomain:"sr-clothing-a581a.firebaseapp.com",projectId:"sr-clothing-a581a",storageBucket:"sr-clothing-a581a.firebasestorage.app",messagingSenderId:"820264914177",appId:"1:820264914177:web:d5df13c9c6528e6be61f00",measurementId:"G-6Q0XJ4VNDV"},sg=Qp($I);DI(sg);const ut=vE(sg);z_(ut,Cm).catch(e=>{console.error("Error setting auth persistence:",e)});const nn=Dp(e=>({user:null,loading:!0,setUser:t=>e({user:t,loading:!1}),signUp:async(t,n,r)=>{try{const i=await M_(ut,t,n);await $_(i.user,{displayName:r}),e({user:i.user}),J.success("Account created successfully!")}catch(i){throw J.error(i.message),i}},signIn:async(t,n)=>{try{const r=await U_(ut,t,n);e({user:r.user}),J.success("Signed in successfully!")}catch(r){throw J.error(r.message),r}},signOut:async()=>{try{await H_(ut),e({user:null}),J.success("Signed out successfully!")}catch(t){throw J.error(t.message),t}},resetPassword:async t=>{try{await D_(ut,t),J.success("Password reset email sent!")}catch(n){throw J.error(n.message),n}},setupPhoneAuth:t=>{try{window.recaptchaVerifier||(window.recaptchaVerifier=new yS(ut,t,{size:"invisible",callback:()=>{}}))}catch(n){throw console.error("Error setting up phone auth:",n),n}},startPhoneSignIn:async t=>{try{const n=window.recaptchaVerifier;if(!n)throw new Error("reCAPTCHA not properly initialized");const r=await _S(ut,t,n);return window.confirmationResult=r,J.success("OTP sent successfully!"),r}catch(n){throw J.error(n.message),n}},verifyPhoneCode:async(t,n)=>{try{const r=Sn.credential(t,n),i=await ut.signInWithCredential(r);e({user:i.user}),J.success("Phone number verified successfully!")}catch(r){throw J.error(r.message),r}}}));W_(ut,e=>{nn.getState().setUser(e)});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Tt=(e,t)=>{const n=y.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},d)=>y.createElement("svg",{ref:d,...zI,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${BI(e)}`,a].join(" "),...u},[...t.map(([f,p])=>y.createElement(f,p)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=Tt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=Tt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=Tt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=Tt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=Tt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=Tt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=Tt("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=Tt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=Tt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ag=Dp((e,t)=>({items:[],addItem:(n,r,i,s)=>{e(o=>{const a=o.items.find(l=>l.id===n.id&&l.selectedSize===i&&l.selectedColor===s);return a?{items:o.items.map(l=>l===a?{...l,quantity:l.quantity+r}:l)}:{items:[...o.items,{...n,quantity:r,selectedSize:i,selectedColor:s}]}})},removeItem:n=>{e(r=>({items:r.items.filter(i=>i.id!==n)}))},updateQuantity:(n,r)=>{e(i=>({items:i.items.map(s=>s.id===n?{...s,quantity:r}:s)}))},clearCart:()=>e({items:[]}),total:()=>t().items.reduce((r,i)=>r+i.price*i.quantity,0)}));var lg="https://js.stripe.com/v3",QI=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Xd="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",YI=function(){for(var t=document.querySelectorAll('script[src^="'.concat(lg,'"]')),n=0;n<t.length;n++){var r=t[n];if(QI.test(r.src))return r}return null},Zd=function(t){var n="",r=document.createElement("script");r.src="".concat(lg).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(r),r},JI=function(t,n){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"2.4.0",startTime:n})},Ar=null,ns=null,rs=null,XI=function(t){return function(){t(new Error("Failed to load Stripe.js"))}},ZI=function(t,n){return function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))}},ek=function(t){return Ar!==null?Ar:(Ar=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&t&&console.warn(Xd),window.Stripe){n(window.Stripe);return}try{var i=YI();if(i&&t)console.warn(Xd);else if(!i)i=Zd(t);else if(i&&rs!==null&&ns!==null){var s;i.removeEventListener("load",rs),i.removeEventListener("error",ns),(s=i.parentNode)===null||s===void 0||s.removeChild(i),i=Zd(t)}rs=ZI(n,r),ns=XI(r),i.addEventListener("load",rs),i.addEventListener("error",ns)}catch(o){r(o);return}}),Ar.catch(function(n){return Ar=null,Promise.reject(n)}))},tk=function(t,n,r){if(t===null)return null;var i=t.apply(void 0,n);return JI(i,r),i},Lr,cg=!1,ug=function(){return Lr||(Lr=ek(null).catch(function(t){return Lr=null,Promise.reject(t)}),Lr)};Promise.resolve().then(function(){return ug()}).catch(function(e){cg||console.warn(e)});var nk=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];cg=!0;var i=Date.now();return ug().then(function(s){return tk(s,n,i)})};const rk=nk("your_publishable_key"),ik=async e=>{try{const t=await rk;if(!t)throw new Error("Stripe failed to load");const r=await(await fetch("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:e})})).json(),i=await t.redirectToCheckout({sessionId:r.id});if(i.error)throw new Error(i.error.message)}catch(t){throw console.error("Error in checkout:",t),t}},ef=()=>{const{items:e,removeItem:t,updateQuantity:n,total:r}=ag(),[i,s]=Tl.useState(!1),o=async()=>{try{await ik(e)}catch{J.error("Checkout failed. Please try again.")}};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{onClick:()=>s(!0),className:"relative p-2 text-gray-700 hover:text-gray-900",children:[c.jsx(Jd,{className:"h-6 w-6"}),e.length>0&&c.jsx("span",{className:"absolute -top-1 -right-1 bg-amber-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",children:e.length})]}),i&&c.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 bg-black/30",onClick:()=>s(!1)}),c.jsx("div",{className:"absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl",children:c.jsxs("div",{className:"flex h-full flex-col",children:[c.jsxs("div",{className:"flex items-center justify-between px-4 py-6 border-b",children:[c.jsx("h2",{className:"text-lg font-medium",children:"Shopping Cart"}),c.jsx("button",{onClick:()=>s(!1),children:c.jsx(og,{className:"h-6 w-6"})})]}),c.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-6",children:e.length===0?c.jsxs("div",{className:"text-center py-12",children:[c.jsx(Jd,{className:"mx-auto h-12 w-12 text-gray-400"}),c.jsx("p",{className:"mt-4 text-gray-500",children:"Your cart is empty"})]}):c.jsx("div",{className:"space-y-8",children:e.map(a=>c.jsxs("div",{className:"flex gap-4",children:[c.jsx("img",{src:a.image,alt:a.name,className:"h-24 w-24 object-cover"}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"font-medium",children:a.name}),c.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:[a.selectedSize&&`Size: ${a.selectedSize}`,a.selectedColor&&` • Color: ${a.selectedColor}`]}),c.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[c.jsx("button",{onClick:()=>n(a.id,Math.max(0,a.quantity-1)),className:"p-1 hover:bg-gray-100 rounded",children:c.jsx(qI,{className:"h-4 w-4"})}),c.jsx("span",{children:a.quantity}),c.jsx("button",{onClick:()=>n(a.id,a.quantity+1),className:"p-1 hover:bg-gray-100 rounded",children:c.jsx(KI,{className:"h-4 w-4"})})]})]}),c.jsxs("div",{className:"text-right",children:[c.jsxs("p",{className:"font-medium",children:["$",a.price*a.quantity]}),c.jsx("button",{onClick:()=>t(a.id),className:"text-sm text-red-600 hover:text-red-500 mt-2",children:"Remove"})]})]},a.id))})}),e.length>0&&c.jsxs("div",{className:"border-t px-4 py-6",children:[c.jsxs("div",{className:"flex justify-between text-base font-medium text-gray-900 mb-4",children:[c.jsx("p",{children:"Subtotal"}),c.jsxs("p",{children:["$",r()]})]}),c.jsx("button",{onClick:o,className:"w-full bg-amber-800 text-white py-3 hover:bg-amber-700 transition-colors",children:"Checkout"})]})]})})]})]})},sk=()=>{const[e,t]=y.useState(!1),[n,r]=y.useState(!1),[i,s]=y.useState(null),o=y.useRef(),a=xr(),{user:l,signOut:u}=nn(),d=async()=>{try{await u(),a("/signin")}catch(w){console.error("Error signing out:",w)}},f=()=>{l?r(!n):a("/signin")},p=w=>{o.current&&clearTimeout(o.current),s(w)},v=()=>{o.current=setTimeout(()=>{s(null)},200)};return y.useEffect(()=>()=>{o.current&&clearTimeout(o.current)},[]),c.jsxs("nav",{className:"fixed w-full bg-white/80 backdrop-blur-md z-50",children:[c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"flex justify-between items-center h-16",children:[c.jsx("div",{className:"flex items-center",children:c.jsxs(D,{to:"/",className:"text-2xl font-serif font-bold",children:[c.jsx("span",{className:"text-gray-600",children:"S"}),c.jsx("span",{className:"text-amber-800",children:"R"})]})}),c.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[c.jsxs("div",{className:"relative",onMouseEnter:()=>p("exclusive"),onMouseLeave:v,children:[c.jsx("button",{className:"text-gray-700 hover:text-gray-900 py-2",children:"SR Exclusive"}),i==="exclusive"&&c.jsxs("div",{className:"absolute left-0 mt-0 w-48 bg-white shadow-lg py-2 transition-all duration-200 ease-in-out",children:[c.jsx(D,{to:"/exclusive/women",className:"block px-4 py-3 text-gray-700 hover:bg-gray-50",children:"S Collection (Women)"}),c.jsx(D,{to:"/exclusive/men",className:"block px-4 py-3 text-gray-700 hover:bg-gray-50",children:"R Collection (Men)"})]})]}),c.jsx(D,{to:"/new-arrivals",className:"text-gray-700 hover:text-gray-900 py-2",children:"New Arrivals"}),c.jsxs("div",{className:"relative",onMouseEnter:()=>p("collections"),onMouseLeave:v,children:[c.jsx("button",{className:"text-gray-700 hover:text-gray-900 py-2",children:"Collections"}),i==="collections"&&c.jsxs("div",{className:"absolute left-0 mt-0 w-48 bg-white shadow-lg py-2",children:[c.jsx(D,{to:"/collections/summer",className:"block px-4 py-3 text-gray-700 hover:bg-gray-50",children:"Summer Collection"}),c.jsx(D,{to:"/collections/winter",className:"block px-4 py-3 text-gray-700 hover:bg-gray-50",children:"Winter Collection"}),c.jsx(D,{to:"/collections/autumn",className:"block px-4 py-3 text-gray-700 hover:bg-gray-50",children:"Autumn Collection"}),c.jsx(D,{to:"/collections/rainy",className:"block px-4 py-3 text-gray-700 hover:bg-gray-50",children:"Rainy Collection"})]})]}),c.jsxs("div",{className:"relative",onMouseEnter:()=>p("about"),onMouseLeave:v,children:[c.jsx("button",{className:"text-gray-700 hover:text-gray-900 py-2",children:"About Us"}),i==="about"&&c.jsxs("div",{className:"absolute left-0 mt-0 w-48 bg-white shadow-lg py-2",children:[c.jsx(D,{to:"/about/sr",className:"block px-4 py-3 text-gray-700 hover:bg-gray-50",children:"About SR"}),c.jsx(D,{to:"/about/promises",className:"block px-4 py-3 text-gray-700 hover:bg-gray-50",children:"Our Promises"}),c.jsx(D,{to:"/about/motto",className:"block px-4 py-3 text-gray-700 hover:bg-gray-50",children:"Brand Motto"})]})]}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsx(ef,{}),c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:f,className:"p-2 text-gray-700 hover:text-gray-900 flex items-center space-x-2",children:[c.jsx(GI,{className:"h-6 w-6"}),l&&c.jsx("span",{className:"text-sm",children:l.displayName||"User"})]}),l&&n&&c.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-white shadow-lg py-2",children:[c.jsx(D,{to:"/profile",className:"block px-4 py-2 text-gray-700 hover:bg-gray-50",onClick:()=>r(!1),children:"Profile"}),c.jsx(D,{to:"/orders",className:"block px-4 py-2 text-gray-700 hover:bg-gray-50",onClick:()=>r(!1),children:"Orders"}),c.jsxs("button",{onClick:d,className:"w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center",children:[c.jsx(Yd,{className:"h-4 w-4 mr-2"}),"Sign Out"]})]})]})]})]}),c.jsxs("div",{className:"md:hidden flex items-center",children:[c.jsx(ef,{}),c.jsx("button",{onClick:()=>t(!e),className:"ml-4",children:e?c.jsx(og,{className:"h-6 w-6 text-gray-700"}):c.jsx(HI,{className:"h-6 w-6 text-gray-700"})})]})]})}),e&&c.jsx("div",{className:"md:hidden",children:c.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 bg-white",children:[c.jsxs("div",{className:"border-b pb-2",children:[c.jsx("div",{className:"px-3 py-2 font-medium",children:"SR Exclusive"}),c.jsx(D,{to:"/exclusive/women",className:"block px-6 py-2 text-gray-600",children:"S Collection (Women)"}),c.jsx(D,{to:"/exclusive/men",className:"block px-6 py-2 text-gray-600",children:"R Collection (Men)"})]}),c.jsx(D,{to:"/new-arrivals",className:"block px-3 py-2 text-gray-700",children:"New Arrivals"}),c.jsxs("div",{className:"border-b pb-2",children:[c.jsx("div",{className:"px-3 py-2 font-medium",children:"Collections"}),c.jsx(D,{to:"/collections/summer",className:"block px-6 py-2 text-gray-600",children:"Summer Collection"}),c.jsx(D,{to:"/collections/winter",className:"block px-6 py-2 text-gray-600",children:"Winter Collection"}),c.jsx(D,{to:"/collections/autumn",className:"block px-6 py-2 text-gray-600",children:"Autumn Collection"}),c.jsx(D,{to:"/collections/rainy",className:"block px-6 py-2 text-gray-600",children:"Rainy Collection"})]}),c.jsxs("div",{className:"border-b pb-2",children:[c.jsx("div",{className:"px-3 py-2 font-medium",children:"About Us"}),c.jsx(D,{to:"/about/sr",className:"block px-6 py-2 text-gray-600",children:"About SR"}),c.jsx(D,{to:"/about/promises",className:"block px-6 py-2 text-gray-600",children:"Our Promises"}),c.jsx(D,{to:"/about/motto",className:"block px-6 py-2 text-gray-600",children:"Brand Motto"})]}),l?c.jsxs(c.Fragment,{children:[c.jsx(D,{to:"/profile",className:"block px-3 py-2 text-gray-700",children:"Profile"}),c.jsx(D,{to:"/orders",className:"block px-3 py-2 text-gray-700",children:"Orders"}),c.jsxs("button",{onClick:d,className:"block w-full text-left px-3 py-2 text-gray-700 flex items-center",children:[c.jsx(Yd,{className:"h-4 w-4 mr-2"}),"Sign Out"]})]}):c.jsx(D,{to:"/signin",className:"block px-3 py-2 text-gray-700",children:"Sign In"})]})})]})},Mn=[{id:1,name:"Summer Collection 2024",description:"Discover our latest summer essentials",image:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80"},{id:2,name:"SR Exclusive Men",description:"Premium collection for the modern gentleman",image:"https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80"},{id:3,name:"SR Exclusive Women",description:"Elegance redefined for the contemporary woman",image:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80"}],ok=()=>{const[e,t]=y.useState(0);y.useEffect(()=>{const i=setInterval(()=>{t(s=>(s+1)%Mn.length)},5e3);return()=>clearInterval(i)},[]);const n=()=>{t(i=>(i+1)%Mn.length)},r=()=>{t(i=>(i-1+Mn.length)%Mn.length)};return c.jsxs("div",{className:"relative h-screen overflow-hidden",children:[Mn.map((i,s)=>c.jsxs("div",{className:`absolute inset-0 transition-opacity duration-1000 ${s===e?"opacity-100":"opacity-0"}`,children:[c.jsx("img",{src:i.image,alt:i.name,className:"w-full h-full object-cover"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/60 to-transparent",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center",children:c.jsxs("div",{className:"max-w-lg",children:[c.jsx("h2",{className:"text-4xl md:text-6xl font-serif font-bold text-white mb-4",children:i.name}),c.jsx("p",{className:"text-lg text-gray-200 mb-8",children:i.description}),c.jsx("button",{className:"bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors",children:"Shop Now"})]})})})]},i.id)),c.jsx("button",{onClick:r,className:"absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full",children:c.jsx(VI,{className:"h-6 w-6 text-white"})}),c.jsx("button",{onClick:n,className:"absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full",children:c.jsx(WI,{className:"h-6 w-6 text-white"})}),c.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2",children:Mn.map((i,s)=>c.jsx("button",{onClick:()=>t(s),className:`w-2 h-2 rounded-full ${s===e?"bg-white":"bg-white/50"}`},s))})]})},ak=[{id:1,name:"Neutral Essentials",description:"Timeless pieces that transcend gender boundaries",price:"Starting at $89",image:"https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80",category:"Gender Neutral"},{id:2,name:"Urban Sophistication",description:"Contemporary elegance for the modern woman",price:"Starting at $129",image:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80",category:"Women"},{id:3,name:"Modern Classic",description:"Refined essentials for the contemporary man",price:"Starting at $99",image:"https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80",category:"Men"},{id:4,name:"Fluid Fashion",description:"Breaking boundaries with bold, fluid designs",price:"Starting at $149",image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80",category:"Gender Neutral"},{id:5,name:"Seasonal Harmony",description:"Where style meets seasonal versatility",price:"Starting at $119",image:"https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",category:"Gender Neutral"},{id:6,name:"Evening Balance",description:"Elegant evening wear for all",price:"Starting at $199",image:"https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",category:"Gender Neutral"}],lk=()=>c.jsx("section",{className:"py-20 bg-white",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h2",{className:"text-3xl font-serif font-bold text-gray-900 mb-4",children:"Featured Collections"}),c.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Discover our latest collections that celebrate individuality and balance"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:ak.map(e=>c.jsx("div",{className:"group cursor-pointer",children:c.jsxs("div",{className:"relative overflow-hidden",children:[c.jsx("img",{src:e.image,alt:e.name,className:"w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",children:c.jsxs("div",{className:"absolute inset-0 flex flex-col justify-end p-6",children:[c.jsx("span",{className:"text-white text-sm mb-2",children:e.category}),c.jsx("h3",{className:"text-white text-xl font-medium mb-2",children:e.name}),c.jsx("p",{className:"text-white/80 text-sm mb-2",children:e.description}),c.jsx("p",{className:"text-white font-medium",children:e.price})]})})]})},e.id))}),c.jsx("div",{className:"mt-12 text-center",children:c.jsx("button",{className:"bg-amber-800 text-white px-8 py-3 hover:bg-amber-700 transition-colors",children:"View All Collections"})})]})}),ck=()=>c.jsx("footer",{className:"bg-gray-900 text-gray-300",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[c.jsxs("div",{children:[c.jsxs("span",{className:"text-2xl font-serif font-bold text-white",children:[c.jsx("span",{className:"text-gray-400",children:"S"}),c.jsx("span",{className:"text-amber-700",children:"R"})]}),c.jsx("p",{className:"mt-4 text-sm",children:"Where fashion embodies balance and equality. Wear your values, wear SR."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-semibold text-white uppercase tracking-wider",children:"Shop"}),c.jsxs("ul",{className:"mt-4 space-y-2",children:[c.jsx("li",{children:c.jsx("a",{href:"#",className:"text-sm hover:text-white",children:"New Arrivals"})}),c.jsx("li",{children:c.jsx("a",{href:"#",className:"text-sm hover:text-white",children:"Gender Neutral"})}),c.jsx("li",{children:c.jsx("a",{href:"#",className:"text-sm hover:text-white",children:"Women"})}),c.jsx("li",{children:c.jsx("a",{href:"#",className:"text-sm hover:text-white",children:"Men"})})]})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-semibold text-white uppercase tracking-wider",children:"Company"}),c.jsxs("ul",{className:"mt-4 space-y-2",children:[c.jsx("li",{children:c.jsx("a",{href:"#",className:"text-sm hover:text-white",children:"About Us"})}),c.jsx("li",{children:c.jsx("a",{href:"#",className:"text-sm hover:text-white",children:"Sustainability"})}),c.jsx("li",{children:c.jsx("a",{href:"#",className:"text-sm hover:text-white",children:"Careers"})}),c.jsx("li",{children:c.jsx("a",{href:"#",className:"text-sm hover:text-white",children:"Contact"})})]})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-semibold text-white uppercase tracking-wider",children:"Newsletter"}),c.jsx("p",{className:"mt-4 text-sm",children:"Subscribe to receive updates, access to exclusive deals, and more."}),c.jsxs("form",{className:"mt-4",children:[c.jsx("input",{type:"email",placeholder:"Enter your email",className:"w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-none focus:outline-none focus:ring-2 focus:ring-amber-800"}),c.jsx("button",{className:"mt-2 w-full bg-amber-800 text-white px-4 py-2 hover:bg-amber-700 transition-colors",children:"Subscribe"})]})]})]}),c.jsx("div",{className:"mt-12 pt-8 border-t border-gray-800 text-sm text-center",children:c.jsxs("p",{children:["© ",new Date().getFullYear()," SR Clothing. All rights reserved."]})})]})}),uk=()=>{py();const e=ag(u=>u.addItem),[t,n]=y.useState(""),[r,i]=y.useState(""),[s,o]=y.useState(1),a={id:1,name:"Neutral Essentials Jacket",description:"A timeless piece that transcends gender boundaries. Made with sustainable materials.",price:89,image:"https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80",category:"Gender Neutral",sizes:["XS","S","M","L","XL"],colors:["Black","Gray","Brown"]},l=()=>{if(!t||!r){J.error("Please select size and color");return}e(a,s,t,r),J.success("Added to cart")};return c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[c.jsx("div",{className:"aspect-square overflow-hidden",children:c.jsx("img",{src:a.image,alt:a.name,className:"w-full h-full object-cover"})}),c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-3xl font-serif font-bold text-gray-900",children:a.name}),c.jsxs("p",{className:"text-xl text-gray-900 mt-2",children:["$",a.price]})]}),c.jsx("p",{className:"text-gray-600",children:a.description}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-medium text-gray-900 mb-4",children:"Size"}),c.jsx("div",{className:"grid grid-cols-5 gap-2",children:a.sizes.map(u=>c.jsx("button",{onClick:()=>n(u),className:`py-2 text-sm font-medium ${t===u?"bg-amber-800 text-white":"bg-gray-100 text-gray-900 hover:bg-gray-200"}`,children:u},u))})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-medium text-gray-900 mb-4",children:"Color"}),c.jsx("div",{className:"grid grid-cols-3 gap-2",children:a.colors.map(u=>c.jsx("button",{onClick:()=>i(u),className:`py-2 text-sm font-medium ${r===u?"bg-amber-800 text-white":"bg-gray-100 text-gray-900 hover:bg-gray-200"}`,children:u},u))})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-medium text-gray-900 mb-4",children:"Quantity"}),c.jsx("select",{value:s,onChange:u=>o(Number(u.target.value)),className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-none shadow-sm focus:outline-none focus:ring-amber-800 focus:border-amber-800 sm:text-sm",children:[1,2,3,4,5].map(u=>c.jsx("option",{value:u,children:u},u))})]}),c.jsx("button",{onClick:l,className:"w-full bg-amber-800 text-white py-3 hover:bg-amber-700 transition-colors",children:"Add to Cart"})]})]})})},dk=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[i,s]=y.useState(!1),o=xr(),{signIn:a}=nn(),l=async u=>{u.preventDefault(),s(!0);try{await a(e,n),o("/")}catch(d){console.error(d)}finally{s(!1)}};return c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-md w-full space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"mt-6 text-center text-3xl font-serif font-bold text-gray-900",children:"Sign in to your account"}),c.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",c.jsx(D,{to:"/signup",className:"font-medium text-amber-800 hover:text-amber-700",children:"create a new account"})]})]}),c.jsxs("form",{className:"mt-8 space-y-6",onSubmit:l,children:[c.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),c.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,value:e,onChange:u=>t(u.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm",placeholder:"Email address"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),c.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:n,onChange:u=>r(u.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm",placeholder:"Password"})]})]}),c.jsx("div",{className:"flex items-center justify-between",children:c.jsx("div",{className:"text-sm",children:c.jsx(D,{to:"/reset-password",className:"font-medium text-amber-800 hover:text-amber-700",children:"Forgot your password?"})})}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:i,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50",children:i?"Signing in...":"Sign in"})})]}),c.jsxs("div",{className:"mt-6",children:[c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute inset-0 flex items-center",children:c.jsx("div",{className:"w-full border-t border-gray-300"})}),c.jsx("div",{className:"relative flex justify-center text-sm",children:c.jsx("span",{className:"px-2 bg-gray-50 text-gray-500",children:"Or continue with"})})]}),c.jsx("div",{className:"mt-6",children:c.jsx(D,{to:"/phone-signin",className:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-none shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:"Sign in with Phone Number"})})]})]})})},fk=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[i,s]=y.useState(""),[o,a]=y.useState(!1),l=xr(),{signUp:u}=nn(),d=async f=>{f.preventDefault(),a(!0);try{await u(n,i,e),l("/")}catch(p){console.error(p)}finally{a(!1)}};return c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-md w-full space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"mt-6 text-center text-3xl font-serif font-bold text-gray-900",children:"Create your account"}),c.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",c.jsx(D,{to:"/signin",className:"font-medium text-amber-800 hover:text-amber-700",children:"sign in to your account"})]})]}),c.jsxs("form",{className:"mt-8 space-y-6",onSubmit:d,children:[c.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"name",className:"sr-only",children:"Full Name"}),c.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:e,onChange:f=>t(f.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm",placeholder:"Full Name"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),c.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,value:n,onChange:f=>r(f.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm",placeholder:"Email address"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),c.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"new-password",required:!0,value:i,onChange:f=>s(f.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm",placeholder:"Password"})]})]}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:o,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50",children:o?"Creating account...":"Create account"})})]})]})})},hk=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[i,s]=y.useState(""),[o,a]=y.useState(1),[l,u]=y.useState(!1),d=xr(),{setupPhoneAuth:f,startPhoneSignIn:p,verifyPhoneCode:v}=nn();y.useEffect(()=>{try{f("recaptcha-container")}catch(E){console.error("Error setting up phone auth:",E),J.error("Phone authentication is currently unavailable. Please try email sign in."),d("/signin")}},[d]);const w=async E=>{E.preventDefault(),u(!0);try{if(!e.match(/^\+[1-9]\d{1,14}$/))throw new Error("Please enter a valid phone number with country code (e.g., +1234567890)");const m=await p(e);s(m.verificationId),a(2)}catch(m){console.error("Error sending code:",m),J.error(m.message||"Failed to send verification code. Please try again."),m.code==="auth/configuration-not-found"&&(J.error("Phone authentication is not properly configured. Please try email sign in."),d("/signin"))}finally{u(!1)}},_=async E=>{E.preventDefault(),u(!0);try{await v(i,n),J.success("Successfully signed in!"),d("/")}catch(m){console.error("Error verifying code:",m),J.error(m.message||"Failed to verify code. Please try again.")}finally{u(!1)}};return c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-md w-full space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"mt-6 text-center text-3xl font-serif font-bold text-gray-900",children:"Sign in with Phone Number"}),c.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",c.jsx("button",{onClick:()=>d("/signin"),className:"font-medium text-amber-800 hover:text-amber-700",children:"use email instead"})]})]}),o===1?c.jsxs("form",{onSubmit:w,className:"mt-8 space-y-6",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"phone",className:"sr-only",children:"Phone Number"}),c.jsx("input",{id:"phone",type:"tel",required:!0,value:e,onChange:E=>t(E.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm",placeholder:"Phone Number (e.g., +1234567890)"})]}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:l,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50",children:l?"Sending code...":"Send Verification Code"})}),c.jsx("div",{id:"recaptcha-container"})]}):c.jsxs("form",{onSubmit:_,className:"mt-8 space-y-6",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"code",className:"sr-only",children:"Verification Code"}),c.jsx("input",{id:"code",type:"text",required:!0,value:n,onChange:E=>r(E.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm",placeholder:"Enter verification code"})]}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:l,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50",children:l?"Verifying...":"Verify Code"})})]})]})})},pk=()=>c.jsxs("section",{className:"min-h-screen flex items-center justify-center bg-neutral-50 py-20 relative overflow-hidden",children:[c.jsx("div",{className:"absolute -top-40 -left-40 w-80 h-80 bg-amber-800/10 rounded-full blur-3xl"}),c.jsx("div",{className:"absolute -bottom-40 -right-40 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl"}),c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",children:c.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[c.jsx("h2",{className:"text-4xl font-serif font-bold text-gray-900 mb-8 transition-all duration-700 hover:text-amber-800",children:"About SR"}),c.jsxs("div",{className:"space-y-8 text-gray-600 leading-relaxed",children:[c.jsx("p",{className:"transition-all duration-500 hover:text-gray-900",children:"SR is more than just a clothing brand; it's a celebration of balance, respect, and inclusivity. With a unique focus on gender neutrality, SR represents the harmonious blend of masculine and feminine energies. The 'S' and 'R' in our name symbolize women and men, respectively, embodied in a palette of grey and brown tones, reflecting equality and mutual respect."}),c.jsx("p",{className:"transition-all duration-500 hover:text-gray-900",children:"Our designs are crafted to embody modern sophistication while championing unity and diversity, creating a fashion statement that stands for balance in every aspect of life. Join us on a journey where style meets purpose, and fashion speaks the language of equality."})]})]})})]}),mk=()=>c.jsxs("section",{className:"min-h-screen bg-white py-20 relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-1/4 left-0 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl"}),c.jsx("div",{className:"absolute bottom-1/4 right-0 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl"}),c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[c.jsxs("div",{className:"relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-amber-800/10 to-gray-400/10",children:[c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsx("div",{className:"w-32 h-32 rounded-full bg-amber-800/20 animate-pulse"})}),c.jsx("div",{className:"absolute inset-0 backdrop-blur-sm"})]}),c.jsxs("div",{className:"text-left",children:[c.jsx("h2",{className:"text-4xl font-serif font-bold text-gray-900 mb-8 transition-all duration-700 hover:text-amber-800",children:"Our Promise"}),c.jsxs("div",{className:"space-y-8",children:[c.jsx("p",{className:"text-gray-600 leading-relaxed transition-all duration-500 hover:text-gray-900",children:"At SR, we believe that every interaction with our brand should be as seamless and enjoyable as the clothing we create. From browsing to buying, we focus on providing an intuitive and personalized shopping experience, ensuring our customers feel valued every step of the way."}),c.jsx("p",{className:"text-gray-600 leading-relaxed transition-all duration-500 hover:text-gray-900",children:"Our commitment to quality goes beyond our designs—it's embedded in the entire experience, from effortless navigation to timely delivery and customer support. We put our buyers first, because your satisfaction is the heart of everything we do."})]})]})]})})]}),gk=()=>c.jsxs("section",{className:"min-h-screen flex items-center justify-center bg-neutral-50 py-20 relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl"}),c.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl"}),c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative",children:c.jsxs("div",{className:"max-w-3xl mx-auto",children:[c.jsx("h2",{className:"text-4xl font-serif font-bold text-gray-900 mb-12 transition-all duration-700 hover:text-amber-800",children:"Our Brand Motto"}),c.jsxs("div",{className:"space-y-8",children:[c.jsx("p",{className:"text-2xl text-amber-800 italic leading-relaxed transition-all duration-500 hover:scale-105 transform",children:'"Where fashion embodies balance and equality."'}),c.jsx("p",{className:"text-xl text-gray-600 leading-relaxed transition-all duration-500 hover:text-gray-900",children:"Embrace the strength of unity through designs that speak to both men and women."}),c.jsx("p",{className:"text-xl font-serif text-amber-800 transition-all duration-500 hover:scale-105 transform",children:"Wear your values, wear SR."})]})]})})]}),tf=({gender:e})=>{const t=e==="women"?[{id:1,name:"Elegant Evening Dress",price:299,image:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80",description:"A stunning evening dress perfect for special occasions"},{id:2,name:"Professional Blazer",price:199,image:"https://images.unsplash.com/photo-1548624149-f20d8aa1b3c6?auto=format&fit=crop&q=80",description:"A sophisticated blazer for the modern professional woman"}]:[{id:3,name:"Classic Suit",price:499,image:"https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80",description:"A timeless suit for the modern gentleman"},{id:4,name:"Casual Blazer",price:299,image:"https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80",description:"A versatile blazer perfect for both casual and formal occasions"}];return c.jsx("div",{className:"pt-16 min-h-screen bg-neutral-50",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("h1",{className:"text-4xl font-serif font-bold text-gray-900 mb-8",children:e==="women"?"S Collection":"R Collection"}),c.jsx("p",{className:"text-gray-600 mb-12 max-w-3xl",children:e==="women"?"Discover our exclusive collection for women, where elegance meets contemporary style. Each piece is crafted to empower and inspire.":"Explore our premium collection for men, combining classic sophistication with modern design. Every garment tells a story of refinement and confidence."}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map(n=>c.jsxs("div",{className:"group",children:[c.jsxs("div",{className:"relative aspect-square overflow-hidden bg-gray-100",children:[c.jsx("img",{src:n.image,alt:n.name,className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"}),c.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity",children:c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsx("button",{className:"bg-white text-gray-900 px-6 py-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300",children:"View Details"})})})]}),c.jsxs("div",{className:"mt-4 space-y-2",children:[c.jsx("h3",{className:"text-lg font-medium text-gray-900",children:n.name}),c.jsx("p",{className:"text-gray-500",children:n.description}),c.jsxs("p",{className:"text-lg font-medium text-amber-800",children:["$",n.price]})]})]},n.id))})]})})},vk=[{id:1,name:"Limited Edition Jacket",price:399,image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80",description:"Exclusive new arrival, limited quantities available"},{id:2,name:"Designer Collection Dress",price:299,image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80",description:"Part of our latest designer collaboration"},{id:3,name:"Premium Denim Collection",price:199,image:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80",description:"Sustainable denim with modern styling"}],yk=()=>c.jsx("div",{className:"pt-16 min-h-screen bg-neutral-50",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h1",{className:"text-4xl font-serif font-bold text-gray-900 mb-4",children:"New Arrivals"}),c.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Be the first to explore our latest collections. Each piece is carefully curated to bring you the best in contemporary fashion."})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:vk.map(e=>c.jsxs("div",{className:"group",children:[c.jsxs("div",{className:"relative aspect-square overflow-hidden bg-gray-100",children:[c.jsx("img",{src:e.image,alt:e.name,className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"}),c.jsx("div",{className:"absolute top-4 left-4",children:c.jsx("span",{className:"bg-amber-800 text-white px-3 py-1 text-sm",children:"New"})}),c.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity",children:c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsx("button",{className:"bg-white text-gray-900 px-6 py-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300",children:"View Details"})})})]}),c.jsxs("div",{className:"mt-4 space-y-2",children:[c.jsx("h3",{className:"text-lg font-medium text-gray-900",children:e.name}),c.jsx("p",{className:"text-gray-500",children:e.description}),c.jsxs("p",{className:"text-lg font-medium text-amber-800",children:["$",e.price]})]})]},e.id))})]})}),wk={summer:{title:"Summer Collection",description:"Light, breathable pieces perfect for warm days",image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80",products:[{id:1,name:"Linen Blend Shirt",price:89,image:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80",description:"Breathable linen blend for summer comfort"},{id:2,name:"Cotton Dress",price:129,image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80",description:"Light and airy summer dress"}]},winter:{title:"Winter Collection",description:"Warm, stylish pieces for the cold season",image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",products:[{id:3,name:"Wool Coat",price:299,image:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80",description:"Premium wool blend winter coat"},{id:4,name:"Cashmere Sweater",price:199,image:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80",description:"Luxurious cashmere for winter warmth"}]},autumn:{title:"Autumn Collection",description:"Transitional pieces for the changing season",image:"https://images.unsplash.com/photo-1511401139252-f158d3209c17?auto=format&fit=crop&q=80",products:[{id:5,name:"Leather Jacket",price:249,image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80",description:"Classic leather jacket for autumn style"},{id:6,name:"Knit Sweater",price:149,image:"https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80",description:"Comfortable knit for autumn days"}]},rainy:{title:"Rainy Collection",description:"Waterproof and stylish pieces for wet weather",image:"https://images.unsplash.com/photo-1522431745718-63082a85fe6e?auto=format&fit=crop&q=80",products:[{id:7,name:"Waterproof Jacket",price:179,image:"https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?auto=format&fit=crop&q=80",description:"Stylish protection from the rain"},{id:8,name:"Rain Boots",price:129,image:"https://images.unsplash.com/photo-1541750072-95ea2c98e0a1?auto=format&fit=crop&q=80",description:"Fashion-forward waterproof boots"}]}},is=({season:e})=>{const{title:t,description:n,image:r,products:i}=wk[e];return c.jsxs("div",{className:"pt-16 min-h-screen bg-neutral-50",children:[c.jsxs("div",{className:"relative h-96 overflow-hidden",children:[c.jsx("img",{src:r,alt:t,className:"w-full h-full object-cover"}),c.jsx("div",{className:"absolute inset-0 bg-black/50 flex items-center justify-center text-center",children:c.jsxs("div",{children:[c.jsx("h1",{className:"text-4xl font-serif font-bold text-white mb-4",children:t}),c.jsx("p",{className:"text-white/90 max-w-2xl mx-auto px-4",children:n})]})})]}),c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:i.map(s=>c.jsxs("div",{className:"group",children:[c.jsxs("div",{className:"relative aspect-square overflow-hidden bg-gray-100",children:[c.jsx("img",{src:s.image,alt:s.name,className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"}),c.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity",children:c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsx("button",{className:"bg-white text-gray-900 px-6 py-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300",children:"View Details"})})})]}),c.jsxs("div",{className:"mt-4 space-y-2",children:[c.jsx("h3",{className:"text-lg font-medium text-gray-900",children:s.name}),c.jsx("p",{className:"text-gray-500",children:s.description}),c.jsxs("p",{className:"text-lg font-medium text-amber-800",children:["$",s.price]})]})]},s.id))})})]})},xk=()=>{const e=nn(t=>t.user);return c.jsx("div",{className:"pt-24 min-h-screen bg-neutral-50",children:c.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"bg-white shadow-lg p-8",children:[c.jsx("h1",{className:"text-3xl font-serif font-bold text-gray-900 mb-8",children:"Profile"}),c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-2",children:"Personal Information"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Name"}),c.jsx("p",{className:"mt-1 text-gray-900",children:(e==null?void 0:e.displayName)||"Not set"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Email"}),c.jsx("p",{className:"mt-1 text-gray-900",children:(e==null?void 0:e.email)||"Not set"})]})]})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-2",children:"Account Settings"}),c.jsxs("div",{className:"space-y-4",children:[c.jsx("button",{className:"text-amber-800 hover:text-amber-700",children:"Change Password"}),c.jsx("div",{className:"block",children:c.jsx("button",{className:"text-amber-800 hover:text-amber-700",children:"Update Profile Information"})})]})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-2",children:"Preferences"}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx("input",{id:"marketing",type:"checkbox",className:"h-4 w-4 text-amber-800 focus:ring-amber-500 border-gray-300 rounded"}),c.jsx("label",{htmlFor:"marketing",className:"ml-2 text-gray-700",children:"Receive marketing emails"})]}),c.jsxs("div",{className:"flex items-center",children:[c.jsx("input",{id:"notifications",type:"checkbox",className:"h-4 w-4 text-amber-800 focus:ring-amber-500 border-gray-300 rounded"}),c.jsx("label",{htmlFor:"notifications",className:"ml-2 text-gray-700",children:"Order status notifications"})]})]})]})]})]})})})},_k=[{id:"1234",date:"2024-01-20",status:"Delivered",total:299.99,items:[{id:1,name:"Classic Suit",quantity:1,price:299.99,image:"https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80"}]},{id:"1235",date:"2024-01-15",status:"Processing",total:528.98,items:[{id:2,name:"Evening Dress",quantity:1,price:299.99,image:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80"},{id:3,name:"Casual Blazer",quantity:1,price:228.99,image:"https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80"}]}],Sk=()=>c.jsx("div",{className:"pt-24 min-h-screen bg-neutral-50",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsx("h1",{className:"text-3xl font-serif font-bold text-gray-900 mb-8",children:"Your Orders"}),c.jsx("div",{className:"space-y-6",children:_k.map(e=>c.jsxs("div",{className:"bg-white shadow-lg p-6",children:[c.jsxs("div",{className:"flex justify-between items-start border-b border-gray-200 pb-4 mb-4",children:[c.jsxs("div",{children:[c.jsxs("p",{className:"text-sm text-gray-600",children:["Order #",e.id]}),c.jsxs("p",{className:"text-sm text-gray-600",children:["Placed on ",e.date]})]}),c.jsxs("div",{className:"text-right",children:[c.jsxs("p",{className:"text-lg font-medium text-amber-800",children:["$",e.total.toFixed(2)]}),c.jsx("span",{className:`inline-block px-3 py-1 text-sm rounded-full ${e.status==="Delivered"?"bg-green-100 text-green-800":"bg-amber-100 text-amber-800"}`,children:e.status})]})]}),c.jsx("div",{className:"space-y-4",children:e.items.map(t=>c.jsxs("div",{className:"flex gap-4",children:[c.jsx("div",{className:"w-20 h-20 flex-shrink-0",children:c.jsx("img",{src:t.image,alt:t.name,className:"w-full h-full object-cover"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"text-lg font-medium text-gray-900",children:t.name}),c.jsxs("p",{className:"text-gray-600",children:["Quantity: ",t.quantity]}),c.jsxs("p",{className:"text-gray-900",children:["$",t.price.toFixed(2)]})]})]},t.id))}),c.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200",children:c.jsx("button",{className:"text-amber-800 hover:text-amber-700",children:"View Order Details"})})]},e.id))})]})}),nf=({children:e})=>{const t=nn(r=>r.user);return nn(r=>r.loading)?c.jsx("div",{className:"min-h-screen flex items-center justify-center",children:"Loading..."}):t?c.jsx(c.Fragment,{children:e}):c.jsx(by,{to:"/signin"})};function Ek(){return c.jsx(Uy,{children:c.jsxs("div",{className:"min-h-screen bg-neutral-50",children:[c.jsx(sk,{}),c.jsxs(Ry,{children:[c.jsx(re,{path:"/",element:c.jsxs("main",{children:[c.jsx(ok,{}),c.jsx(lk,{})]})}),c.jsx(re,{path:"/signin",element:c.jsx(dk,{})}),c.jsx(re,{path:"/signup",element:c.jsx(fk,{})}),c.jsx(re,{path:"/phone-signin",element:c.jsx(hk,{})}),c.jsx(re,{path:"/product/:id",element:c.jsx(uk,{})}),c.jsx(re,{path:"/exclusive/women",element:c.jsx(tf,{gender:"women"})}),c.jsx(re,{path:"/exclusive/men",element:c.jsx(tf,{gender:"men"})}),c.jsx(re,{path:"/new-arrivals",element:c.jsx(yk,{})}),c.jsx(re,{path:"/collections/summer",element:c.jsx(is,{season:"summer"})}),c.jsx(re,{path:"/collections/winter",element:c.jsx(is,{season:"winter"})}),c.jsx(re,{path:"/collections/autumn",element:c.jsx(is,{season:"autumn"})}),c.jsx(re,{path:"/collections/rainy",element:c.jsx(is,{season:"rainy"})}),c.jsx(re,{path:"/about/sr",element:c.jsx(pk,{})}),c.jsx(re,{path:"/about/promises",element:c.jsx(mk,{})}),c.jsx(re,{path:"/about/motto",element:c.jsx(gk,{})}),c.jsx(re,{path:"/profile",element:c.jsx(nf,{children:c.jsx(xk,{})})}),c.jsx(re,{path:"/orders",element:c.jsx(nf,{children:c.jsx(Sk,{})})})]}),c.jsx(ck,{}),c.jsx(Rw,{position:"top-center"})]})})}vp(document.getElementById("root")).render(c.jsx(y.StrictMode,{children:c.jsx(Ek,{})}));
