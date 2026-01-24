(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))u(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const d of m.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function f(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(h){if(h.ep)return;h.ep=!0;const m=f(h);fetch(h.href,m)}})();function Zh(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Zr={exports:{}},Gi={};var kh;function F0(){if(kh)return Gi;kh=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(u,h,m){var d=null;if(m!==void 0&&(d=""+m),h.key!==void 0&&(d=""+h.key),"key"in h){m={};for(var b in h)b!=="key"&&(m[b]=h[b])}else m=h;return h=m.ref,{$$typeof:l,type:u,key:d,ref:h!==void 0?h:null,props:m}}return Gi.Fragment=c,Gi.jsx=f,Gi.jsxs=f,Gi}var jh;function $0(){return jh||(jh=1,Zr.exports=F0()),Zr.exports}var s=$0(),Kr={exports:{}},W={};var Nh;function W0(){if(Nh)return W;Nh=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),d=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),A=Symbol.iterator;function R(w){return w===null||typeof w!="object"?null:(w=A&&w[A]||w["@@iterator"],typeof w=="function"?w:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,P={};function U(w,D,G){this.props=w,this.context=D,this.refs=P,this.updater=G||L}U.prototype.isReactComponent={},U.prototype.setState=function(w,D){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,D,"setState")},U.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function B(){}B.prototype=U.prototype;function X(w,D,G){this.props=w,this.context=D,this.refs=P,this.updater=G||L}var ta=X.prototype=new B;ta.constructor=X,H(ta,U.prototype),ta.isPureReactComponent=!0;var na=Array.isArray;function ma(){}var F={H:null,A:null,T:null,S:null},Na=Object.prototype.hasOwnProperty;function Ba(w,D,G){var V=G.ref;return{$$typeof:l,type:w,key:D,ref:V!==void 0?V:null,props:G}}function Ja(w,D){return Ba(w.type,D,w.props)}function Ct(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function Fa(w){var D={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(G){return D[G]})}var Ue=/\/+/g;function Gt(w,D){return typeof w=="object"&&w!==null&&w.key!=null?Fa(""+w.key):D.toString(36)}function Mt(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ma,ma):(w.status="pending",w.then(function(D){w.status==="pending"&&(w.status="fulfilled",w.value=D)},function(D){w.status==="pending"&&(w.status="rejected",w.reason=D)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function M(w,D,G,V,I){var oa=typeof w;(oa==="undefined"||oa==="boolean")&&(w=null);var da=!1;if(w===null)da=!0;else switch(oa){case"bigint":case"string":case"number":da=!0;break;case"object":switch(w.$$typeof){case l:case c:da=!0;break;case k:return da=w._init,M(da(w._payload),D,G,V,I)}}if(da)return I=I(w),da=V===""?"."+Gt(w,0):V,na(I)?(G="",da!=null&&(G=da.replace(Ue,"$&/")+"/"),M(I,D,G,"",function(Fn){return Fn})):I!=null&&(Ct(I)&&(I=Ja(I,G+(I.key==null||w&&w.key===I.key?"":(""+I.key).replace(Ue,"$&/")+"/")+da)),D.push(I)),1;da=0;var Wa=V===""?".":V+":";if(na(w))for(var Ma=0;Ma<w.length;Ma++)V=w[Ma],oa=Wa+Gt(V,Ma),da+=M(V,D,G,oa,I);else if(Ma=R(w),typeof Ma=="function")for(w=Ma.call(w),Ma=0;!(V=w.next()).done;)V=V.value,oa=Wa+Gt(V,Ma++),da+=M(V,D,G,oa,I);else if(oa==="object"){if(typeof w.then=="function")return M(Mt(w),D,G,V,I);throw D=String(w),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return da}function Y(w,D,G){if(w==null)return w;var V=[],I=0;return M(w,V,"","",function(oa){return D.call(G,oa,I++)}),V}function $(w){if(w._status===-1){var D=w._result;D=D(),D.then(function(G){(w._status===0||w._status===-1)&&(w._status=1,w._result=G)},function(G){(w._status===0||w._status===-1)&&(w._status=2,w._result=G)}),w._status===-1&&(w._status=0,w._result=D)}if(w._status===1)return w._result.default;throw w._result}var ba=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},ka={map:Y,forEach:function(w,D,G){Y(w,function(){D.apply(this,arguments)},G)},count:function(w){var D=0;return Y(w,function(){D++}),D},toArray:function(w){return Y(w,function(D){return D})||[]},only:function(w){if(!Ct(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return W.Activity=N,W.Children=ka,W.Component=U,W.Fragment=f,W.Profiler=h,W.PureComponent=X,W.StrictMode=u,W.Suspense=x,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,W.__COMPILER_RUNTIME={__proto__:null,c:function(w){return F.H.useMemoCache(w)}},W.cache=function(w){return function(){return w.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(w,D,G){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var V=H({},w.props),I=w.key;if(D!=null)for(oa in D.key!==void 0&&(I=""+D.key),D)!Na.call(D,oa)||oa==="key"||oa==="__self"||oa==="__source"||oa==="ref"&&D.ref===void 0||(V[oa]=D[oa]);var oa=arguments.length-2;if(oa===1)V.children=G;else if(1<oa){for(var da=Array(oa),Wa=0;Wa<oa;Wa++)da[Wa]=arguments[Wa+2];V.children=da}return Ba(w.type,I,V)},W.createContext=function(w){return w={$$typeof:d,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:m,_context:w},w},W.createElement=function(w,D,G){var V,I={},oa=null;if(D!=null)for(V in D.key!==void 0&&(oa=""+D.key),D)Na.call(D,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(I[V]=D[V]);var da=arguments.length-2;if(da===1)I.children=G;else if(1<da){for(var Wa=Array(da),Ma=0;Ma<da;Ma++)Wa[Ma]=arguments[Ma+2];I.children=Wa}if(w&&w.defaultProps)for(V in da=w.defaultProps,da)I[V]===void 0&&(I[V]=da[V]);return Ba(w,oa,I)},W.createRef=function(){return{current:null}},W.forwardRef=function(w){return{$$typeof:b,render:w}},W.isValidElement=Ct,W.lazy=function(w){return{$$typeof:k,_payload:{_status:-1,_result:w},_init:$}},W.memo=function(w,D){return{$$typeof:g,type:w,compare:D===void 0?null:D}},W.startTransition=function(w){var D=F.T,G={};F.T=G;try{var V=w(),I=F.S;I!==null&&I(G,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ma,ba)}catch(oa){ba(oa)}finally{D!==null&&G.types!==null&&(D.types=G.types),F.T=D}},W.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},W.use=function(w){return F.H.use(w)},W.useActionState=function(w,D,G){return F.H.useActionState(w,D,G)},W.useCallback=function(w,D){return F.H.useCallback(w,D)},W.useContext=function(w){return F.H.useContext(w)},W.useDebugValue=function(){},W.useDeferredValue=function(w,D){return F.H.useDeferredValue(w,D)},W.useEffect=function(w,D){return F.H.useEffect(w,D)},W.useEffectEvent=function(w){return F.H.useEffectEvent(w)},W.useId=function(){return F.H.useId()},W.useImperativeHandle=function(w,D,G){return F.H.useImperativeHandle(w,D,G)},W.useInsertionEffect=function(w,D){return F.H.useInsertionEffect(w,D)},W.useLayoutEffect=function(w,D){return F.H.useLayoutEffect(w,D)},W.useMemo=function(w,D){return F.H.useMemo(w,D)},W.useOptimistic=function(w,D){return F.H.useOptimistic(w,D)},W.useReducer=function(w,D,G){return F.H.useReducer(w,D,G)},W.useRef=function(w){return F.H.useRef(w)},W.useState=function(w){return F.H.useState(w)},W.useSyncExternalStore=function(w,D,G){return F.H.useSyncExternalStore(w,D,G)},W.useTransition=function(){return F.H.useTransition()},W.version="19.2.3",W}var zh;function lu(){return zh||(zh=1,Kr.exports=W0()),Kr.exports}var T=lu();const I0=Zh(T);var Jr={exports:{}},Xi={},Fr={exports:{}},$r={};var Sh;function ag(){return Sh||(Sh=1,(function(l){function c(M,Y){var $=M.length;M.push(Y);a:for(;0<$;){var ba=$-1>>>1,ka=M[ba];if(0<h(ka,Y))M[ba]=Y,M[$]=ka,$=ba;else break a}}function f(M){return M.length===0?null:M[0]}function u(M){if(M.length===0)return null;var Y=M[0],$=M.pop();if($!==Y){M[0]=$;a:for(var ba=0,ka=M.length,w=ka>>>1;ba<w;){var D=2*(ba+1)-1,G=M[D],V=D+1,I=M[V];if(0>h(G,$))V<ka&&0>h(I,G)?(M[ba]=I,M[V]=$,ba=V):(M[ba]=G,M[D]=$,ba=D);else if(V<ka&&0>h(I,$))M[ba]=I,M[V]=$,ba=V;else break a}}return Y}function h(M,Y){var $=M.sortIndex-Y.sortIndex;return $!==0?$:M.id-Y.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;l.unstable_now=function(){return m.now()}}else{var d=Date,b=d.now();l.unstable_now=function(){return d.now()-b}}var x=[],g=[],k=1,N=null,A=3,R=!1,L=!1,H=!1,P=!1,U=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function ta(M){for(var Y=f(g);Y!==null;){if(Y.callback===null)u(g);else if(Y.startTime<=M)u(g),Y.sortIndex=Y.expirationTime,c(x,Y);else break;Y=f(g)}}function na(M){if(H=!1,ta(M),!L)if(f(x)!==null)L=!0,ma||(ma=!0,Fa());else{var Y=f(g);Y!==null&&Mt(na,Y.startTime-M)}}var ma=!1,F=-1,Na=5,Ba=-1;function Ja(){return P?!0:!(l.unstable_now()-Ba<Na)}function Ct(){if(P=!1,ma){var M=l.unstable_now();Ba=M;var Y=!0;try{a:{L=!1,H&&(H=!1,B(F),F=-1),R=!0;var $=A;try{t:{for(ta(M),N=f(x);N!==null&&!(N.expirationTime>M&&Ja());){var ba=N.callback;if(typeof ba=="function"){N.callback=null,A=N.priorityLevel;var ka=ba(N.expirationTime<=M);if(M=l.unstable_now(),typeof ka=="function"){N.callback=ka,ta(M),Y=!0;break t}N===f(x)&&u(x),ta(M)}else u(x);N=f(x)}if(N!==null)Y=!0;else{var w=f(g);w!==null&&Mt(na,w.startTime-M),Y=!1}}break a}finally{N=null,A=$,R=!1}Y=void 0}}finally{Y?Fa():ma=!1}}}var Fa;if(typeof X=="function")Fa=function(){X(Ct)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,Gt=Ue.port2;Ue.port1.onmessage=Ct,Fa=function(){Gt.postMessage(null)}}else Fa=function(){U(Ct,0)};function Mt(M,Y){F=U(function(){M(l.unstable_now())},Y)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(M){M.callback=null},l.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Na=0<M?Math.floor(1e3/M):5},l.unstable_getCurrentPriorityLevel=function(){return A},l.unstable_next=function(M){switch(A){case 1:case 2:case 3:var Y=3;break;default:Y=A}var $=A;A=Y;try{return M()}finally{A=$}},l.unstable_requestPaint=function(){P=!0},l.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=A;A=M;try{return Y()}finally{A=$}},l.unstable_scheduleCallback=function(M,Y,$){var ba=l.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ba+$:ba):$=ba,M){case 1:var ka=-1;break;case 2:ka=250;break;case 5:ka=1073741823;break;case 4:ka=1e4;break;default:ka=5e3}return ka=$+ka,M={id:k++,callback:Y,priorityLevel:M,startTime:$,expirationTime:ka,sortIndex:-1},$>ba?(M.sortIndex=$,c(g,M),f(x)===null&&M===f(g)&&(H?(B(F),F=-1):H=!0,Mt(na,$-ba))):(M.sortIndex=ka,c(x,M),L||R||(L=!0,ma||(ma=!0,Fa()))),M},l.unstable_shouldYield=Ja,l.unstable_wrapCallback=function(M){var Y=A;return function(){var $=A;A=Y;try{return M.apply(this,arguments)}finally{A=$}}}})($r)),$r}var Eh;function tg(){return Eh||(Eh=1,Fr.exports=ag()),Fr.exports}var Wr={exports:{}},$a={};var Th;function eg(){if(Th)return $a;Th=1;var l=lu();function c(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)g+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},h=Symbol.for("react.portal");function m(x,g,k){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:N==null?null:""+N,children:x,containerInfo:g,implementation:k}}var d=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return $a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,$a.createPortal=function(x,g){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(c(299));return m(x,g,null,k)},$a.flushSync=function(x){var g=d.T,k=u.p;try{if(d.T=null,u.p=2,x)return x()}finally{d.T=g,u.p=k,u.d.f()}},$a.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(x,g))},$a.prefetchDNS=function(x){typeof x=="string"&&u.d.D(x)},$a.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var k=g.as,N=b(k,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;k==="style"?u.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:N,integrity:A,fetchPriority:R}):k==="script"&&u.d.X(x,{crossOrigin:N,integrity:A,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},$a.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var k=b(g.as,g.crossOrigin);u.d.M(x,{crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(x)},$a.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var k=g.as,N=b(k,g.crossOrigin);u.d.L(x,k,{crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},$a.preloadModule=function(x,g){if(typeof x=="string")if(g){var k=b(g.as,g.crossOrigin);u.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(x)},$a.requestFormReset=function(x){u.d.r(x)},$a.unstable_batchedUpdates=function(x,g){return x(g)},$a.useFormState=function(x,g,k){return d.H.useFormState(x,g,k)},$a.useFormStatus=function(){return d.H.useHostTransitionStatus()},$a.version="19.2.3",$a}var _h;function ng(){if(_h)return Wr.exports;_h=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Wr.exports=eg(),Wr.exports}var Ah;function ig(){if(Ah)return Xi;Ah=1;var l=tg(),c=lu(),f=ng();function u(a){var t="https://react.dev/errors/"+a;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+a+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function m(a){var t=a,e=a;if(a.alternate)for(;t.return;)t=t.return;else{a=t;do t=a,(t.flags&4098)!==0&&(e=t.return),a=t.return;while(a)}return t.tag===3?e:null}function d(a){if(a.tag===13){var t=a.memoizedState;if(t===null&&(a=a.alternate,a!==null&&(t=a.memoizedState)),t!==null)return t.dehydrated}return null}function b(a){if(a.tag===31){var t=a.memoizedState;if(t===null&&(a=a.alternate,a!==null&&(t=a.memoizedState)),t!==null)return t.dehydrated}return null}function x(a){if(m(a)!==a)throw Error(u(188))}function g(a){var t=a.alternate;if(!t){if(t=m(a),t===null)throw Error(u(188));return t!==a?null:a}for(var e=a,n=t;;){var i=e.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){e=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===e)return x(i),a;if(o===n)return x(i),t;o=o.sibling}throw Error(u(188))}if(e.return!==n.return)e=i,n=o;else{for(var r=!1,p=i.child;p;){if(p===e){r=!0,e=i,n=o;break}if(p===n){r=!0,n=i,e=o;break}p=p.sibling}if(!r){for(p=o.child;p;){if(p===e){r=!0,e=o,n=i;break}if(p===n){r=!0,n=o,e=i;break}p=p.sibling}if(!r)throw Error(u(189))}}if(e.alternate!==n)throw Error(u(190))}if(e.tag!==3)throw Error(u(188));return e.stateNode.current===e?a:t}function k(a){var t=a.tag;if(t===5||t===26||t===27||t===6)return a;for(a=a.child;a!==null;){if(t=k(a),t!==null)return t;a=a.sibling}return null}var N=Object.assign,A=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ta=Symbol.for("react.forward_ref"),na=Symbol.for("react.suspense"),ma=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Na=Symbol.for("react.lazy"),Ba=Symbol.for("react.activity"),Ja=Symbol.for("react.memo_cache_sentinel"),Ct=Symbol.iterator;function Fa(a){return a===null||typeof a!="object"?null:(a=Ct&&a[Ct]||a["@@iterator"],typeof a=="function"?a:null)}var Ue=Symbol.for("react.client.reference");function Gt(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===Ue?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case H:return"Fragment";case U:return"Profiler";case P:return"StrictMode";case na:return"Suspense";case ma:return"SuspenseList";case Ba:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case L:return"Portal";case X:return a.displayName||"Context";case B:return(a._context.displayName||"Context")+".Consumer";case ta:var t=a.render;return a=a.displayName,a||(a=t.displayName||t.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case F:return t=a.displayName||null,t!==null?t:Gt(a.type)||"Memo";case Na:t=a._payload,a=a._init;try{return Gt(a(t))}catch{}}return null}var Mt=Array.isArray,M=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ba=[],ka=-1;function w(a){return{current:a}}function D(a){0>ka||(a.current=ba[ka],ba[ka]=null,ka--)}function G(a,t){ka++,ba[ka]=a.current,a.current=t}var V=w(null),I=w(null),oa=w(null),da=w(null);function Wa(a,t){switch(G(oa,t),G(I,a),G(V,null),t.nodeType){case 9:case 11:a=(a=t.documentElement)&&(a=a.namespaceURI)?Qf(a):0;break;default:if(a=t.tagName,t=t.namespaceURI)t=Qf(t),a=Vf(t,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}D(V),G(V,a)}function Ma(){D(V),D(I),D(oa)}function Fn(a){a.memoizedState!==null&&G(da,a);var t=V.current,e=Vf(t,a.type);t!==e&&(G(I,a),G(V,e))}function Ii(a){I.current===a&&(D(V),D(I)),da.current===a&&(D(da),Hi._currentValue=$)}var _s,vu;function Le(a){if(_s===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);_s=t&&t[1]||"",vu=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_s+a+vu}var As=!1;function Cs(a,t){if(!a||As)return"";As=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(_){var E=_}Reflect.construct(a,[],q)}else{try{q.call()}catch(_){E=_}a.call(q.prototype)}}else{try{throw Error()}catch(_){E=_}(q=a())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(_){if(_&&E&&typeof _.stack=="string")return[_.stack,E.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),r=o[0],p=o[1];if(r&&p){var y=r.split(`
`),S=p.split(`
`);for(i=n=0;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;for(;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;if(n===y.length||i===S.length)for(n=y.length-1,i=S.length-1;1<=n&&0<=i&&y[n]!==S[i];)i--;for(;1<=n&&0<=i;n--,i--)if(y[n]!==S[i]){if(n!==1||i!==1)do if(n--,i--,0>i||y[n]!==S[i]){var C=`
`+y[n].replace(" at new "," at ");return a.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",a.displayName)),C}while(1<=n&&0<=i);break}}}finally{As=!1,Error.prepareStackTrace=e}return(e=a?a.displayName||a.name:"")?Le(e):""}function Ed(a,t){switch(a.tag){case 26:case 27:case 5:return Le(a.type);case 16:return Le("Lazy");case 13:return a.child!==t&&t!==null?Le("Suspense Fallback"):Le("Suspense");case 19:return Le("SuspenseList");case 0:case 15:return Cs(a.type,!1);case 11:return Cs(a.type.render,!1);case 1:return Cs(a.type,!0);case 31:return Le("Activity");default:return""}}function wu(a){try{var t="",e=null;do t+=Ed(a,e),e=a,a=a.return;while(a);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ms=Object.prototype.hasOwnProperty,Rs=l.unstable_scheduleCallback,Os=l.unstable_cancelCallback,Td=l.unstable_shouldYield,_d=l.unstable_requestPaint,rt=l.unstable_now,Ad=l.unstable_getCurrentPriorityLevel,ku=l.unstable_ImmediatePriority,ju=l.unstable_UserBlockingPriority,ao=l.unstable_NormalPriority,Cd=l.unstable_LowPriority,Nu=l.unstable_IdlePriority,Md=l.log,Rd=l.unstable_setDisableYieldValue,$n=null,ut=null;function ce(a){if(typeof Md=="function"&&Rd(a),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode($n,a)}catch{}}var ct=Math.clz32?Math.clz32:Dd,Od=Math.log,qd=Math.LN2;function Dd(a){return a>>>=0,a===0?32:31-(Od(a)/qd|0)|0}var to=256,eo=262144,no=4194304;function He(a){var t=a&42;if(t!==0)return t;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return a&261888;case 262144:case 524288:case 1048576:case 2097152:return a&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function io(a,t,e){var n=a.pendingLanes;if(n===0)return 0;var i=0,o=a.suspendedLanes,r=a.pingedLanes;a=a.warmLanes;var p=n&134217727;return p!==0?(n=p&~o,n!==0?i=He(n):(r&=p,r!==0?i=He(r):e||(e=p&~a,e!==0&&(i=He(e))))):(p=n&~o,p!==0?i=He(p):r!==0?i=He(r):e||(e=n&~a,e!==0&&(i=He(e)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,e=t&-t,o>=e||o===32&&(e&4194048)!==0)?t:i}function Wn(a,t){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&t)===0}function Ud(a,t){switch(a){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zu(){var a=no;return no<<=1,(no&62914560)===0&&(no=4194304),a}function qs(a){for(var t=[],e=0;31>e;e++)t.push(a);return t}function In(a,t){a.pendingLanes|=t,t!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function Ld(a,t,e,n,i,o){var r=a.pendingLanes;a.pendingLanes=e,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=e,a.entangledLanes&=e,a.errorRecoveryDisabledLanes&=e,a.shellSuspendCounter=0;var p=a.entanglements,y=a.expirationTimes,S=a.hiddenUpdates;for(e=r&~e;0<e;){var C=31-ct(e),q=1<<C;p[C]=0,y[C]=-1;var E=S[C];if(E!==null)for(S[C]=null,C=0;C<E.length;C++){var _=E[C];_!==null&&(_.lane&=-536870913)}e&=~q}n!==0&&Su(a,n,0),o!==0&&i===0&&a.tag!==0&&(a.suspendedLanes|=o&~(r&~t))}function Su(a,t,e){a.pendingLanes|=t,a.suspendedLanes&=~t;var n=31-ct(t);a.entangledLanes|=t,a.entanglements[n]=a.entanglements[n]|1073741824|e&261930}function Eu(a,t){var e=a.entangledLanes|=t;for(a=a.entanglements;e;){var n=31-ct(e),i=1<<n;i&t|a[n]&t&&(a[n]|=t),e&=~i}}function Tu(a,t){var e=t&-t;return e=(e&42)!==0?1:Ds(e),(e&(a.suspendedLanes|t))!==0?0:e}function Ds(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function Us(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function _u(){var a=Y.p;return a!==0?a:(a=window.event,a===void 0?32:mh(a.type))}function Au(a,t){var e=Y.p;try{return Y.p=a,t()}finally{Y.p=e}}var pe=Math.random().toString(36).slice(2),Ga="__reactFiber$"+pe,tt="__reactProps$"+pe,rn="__reactContainer$"+pe,Ls="__reactEvents$"+pe,Hd="__reactListeners$"+pe,Bd="__reactHandles$"+pe,Cu="__reactResources$"+pe,ai="__reactMarker$"+pe;function Hs(a){delete a[Ga],delete a[tt],delete a[Ls],delete a[Hd],delete a[Bd]}function un(a){var t=a[Ga];if(t)return t;for(var e=a.parentNode;e;){if(t=e[rn]||e[Ga]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(a=If(a);a!==null;){if(e=a[Ga])return e;a=If(a)}return t}a=e,e=a.parentNode}return null}function cn(a){if(a=a[Ga]||a[rn]){var t=a.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return a}return null}function ti(a){var t=a.tag;if(t===5||t===26||t===27||t===6)return a.stateNode;throw Error(u(33))}function pn(a){var t=a[Cu];return t||(t=a[Cu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pa(a){a[ai]=!0}var Mu=new Set,Ru={};function Be(a,t){fn(a,t),fn(a+"Capture",t)}function fn(a,t){for(Ru[a]=t,a=0;a<t.length;a++)Mu.add(t[a])}var Pd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ou={},qu={};function Yd(a){return Ms.call(qu,a)?!0:Ms.call(Ou,a)?!1:Pd.test(a)?qu[a]=!0:(Ou[a]=!0,!1)}function oo(a,t,e){if(Yd(t))if(e===null)a.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":a.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){a.removeAttribute(t);return}}a.setAttribute(t,""+e)}}function so(a,t,e){if(e===null)a.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(t);return}a.setAttribute(t,""+e)}}function Xt(a,t,e,n){if(n===null)a.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(e);return}a.setAttributeNS(t,e,""+n)}}function bt(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function Du(a){var t=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gd(a,t,e){var n=Object.getOwnPropertyDescriptor(a.constructor.prototype,t);if(!a.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(a,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){e=""+r,o.call(this,r)}}),Object.defineProperty(a,t,{enumerable:n.enumerable}),{getValue:function(){return e},setValue:function(r){e=""+r},stopTracking:function(){a._valueTracker=null,delete a[t]}}}}function Bs(a){if(!a._valueTracker){var t=Du(a)?"checked":"value";a._valueTracker=Gd(a,t,""+a[t])}}function Uu(a){if(!a)return!1;var t=a._valueTracker;if(!t)return!0;var e=t.getValue(),n="";return a&&(n=Du(a)?a.checked?"true":"false":a.value),a=n,a!==e?(t.setValue(a),!0):!1}function lo(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var Xd=/[\n"\\]/g;function xt(a){return a.replace(Xd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ps(a,t,e,n,i,o,r,p){a.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?a.type=r:a.removeAttribute("type"),t!=null?r==="number"?(t===0&&a.value===""||a.value!=t)&&(a.value=""+bt(t)):a.value!==""+bt(t)&&(a.value=""+bt(t)):r!=="submit"&&r!=="reset"||a.removeAttribute("value"),t!=null?Ys(a,r,bt(t)):e!=null?Ys(a,r,bt(e)):n!=null&&a.removeAttribute("value"),i==null&&o!=null&&(a.defaultChecked=!!o),i!=null&&(a.checked=i&&typeof i!="function"&&typeof i!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?a.name=""+bt(p):a.removeAttribute("name")}function Lu(a,t,e,n,i,o,r,p){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(a.type=o),t!=null||e!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Bs(a);return}e=e!=null?""+bt(e):"",t=t!=null?""+bt(t):e,p||t===a.value||(a.value=t),a.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,a.checked=p?a.checked:!!n,a.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(a.name=r),Bs(a)}function Ys(a,t,e){t==="number"&&lo(a.ownerDocument)===a||a.defaultValue===""+e||(a.defaultValue=""+e)}function hn(a,t,e,n){if(a=a.options,t){t={};for(var i=0;i<e.length;i++)t["$"+e[i]]=!0;for(e=0;e<a.length;e++)i=t.hasOwnProperty("$"+a[e].value),a[e].selected!==i&&(a[e].selected=i),i&&n&&(a[e].defaultSelected=!0)}else{for(e=""+bt(e),t=null,i=0;i<a.length;i++){if(a[i].value===e){a[i].selected=!0,n&&(a[i].defaultSelected=!0);return}t!==null||a[i].disabled||(t=a[i])}t!==null&&(t.selected=!0)}}function Hu(a,t,e){if(t!=null&&(t=""+bt(t),t!==a.value&&(a.value=t),e==null)){a.defaultValue!==t&&(a.defaultValue=t);return}a.defaultValue=e!=null?""+bt(e):""}function Bu(a,t,e,n){if(t==null){if(n!=null){if(e!=null)throw Error(u(92));if(Mt(n)){if(1<n.length)throw Error(u(93));n=n[0]}e=n}e==null&&(e=""),t=e}e=bt(t),a.defaultValue=e,n=a.textContent,n===e&&n!==""&&n!==null&&(a.value=n),Bs(a)}function dn(a,t){if(t){var e=a.firstChild;if(e&&e===a.lastChild&&e.nodeType===3){e.nodeValue=t;return}}a.textContent=t}var Qd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pu(a,t,e){var n=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?n?a.setProperty(t,""):t==="float"?a.cssFloat="":a[t]="":n?a.setProperty(t,e):typeof e!="number"||e===0||Qd.has(t)?t==="float"?a.cssFloat=e:a[t]=(""+e).trim():a[t]=e+"px"}function Yu(a,t,e){if(t!=null&&typeof t!="object")throw Error(u(62));if(a=a.style,e!=null){for(var n in e)!e.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?a.setProperty(n,""):n==="float"?a.cssFloat="":a[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&e[i]!==n&&Pu(a,i,n)}else for(var o in t)t.hasOwnProperty(o)&&Pu(a,o,t[o])}function Gs(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ro(a){return Zd.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}function Qt(){}var Xs=null;function Qs(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var mn=null,gn=null;function Gu(a){var t=cn(a);if(t&&(a=t.stateNode)){var e=a[tt]||null;a:switch(a=t.stateNode,t.type){case"input":if(Ps(a,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=a;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+xt(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var n=e[t];if(n!==a&&n.form===a.form){var i=n[tt]||null;if(!i)throw Error(u(90));Ps(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<e.length;t++)n=e[t],n.form===a.form&&Uu(n)}break a;case"textarea":Hu(a,e.value,e.defaultValue);break a;case"select":t=e.value,t!=null&&hn(a,!!e.multiple,t,!1)}}}var Vs=!1;function Xu(a,t,e){if(Vs)return a(t,e);Vs=!0;try{var n=a(t);return n}finally{if(Vs=!1,(mn!==null||gn!==null)&&(Fo(),mn&&(t=mn,a=gn,gn=mn=null,Gu(t),a)))for(t=0;t<a.length;t++)Gu(a[t])}}function ei(a,t){var e=a.stateNode;if(e===null)return null;var n=e[tt]||null;if(n===null)return null;e=n[t];a:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(a=a.type,n=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!n;break a;default:a=!1}if(a)return null;if(e&&typeof e!="function")throw Error(u(231,t,typeof e));return e}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zs=!1;if(Vt)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{Zs=!1}var fe=null,Ks=null,uo=null;function Qu(){if(uo)return uo;var a,t=Ks,e=t.length,n,i="value"in fe?fe.value:fe.textContent,o=i.length;for(a=0;a<e&&t[a]===i[a];a++);var r=e-a;for(n=1;n<=r&&t[e-n]===i[o-n];n++);return uo=i.slice(a,1<n?1-n:void 0)}function co(a){var t=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&t===13&&(a=13)):a=t,a===10&&(a=13),32<=a||a===13?a:0}function po(){return!0}function Vu(){return!1}function et(a){function t(e,n,i,o,r){this._reactName=e,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=r,this.currentTarget=null;for(var p in a)a.hasOwnProperty(p)&&(e=a[p],this[p]=e?e(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?po:Vu,this.isPropagationStopped=Vu,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var Pe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=et(Pe),ii=N({},Pe,{view:0,detail:0}),Kd=et(ii),Js,Fs,oi,ho=N({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==oi&&(oi&&a.type==="mousemove"?(Js=a.screenX-oi.screenX,Fs=a.screenY-oi.screenY):Fs=Js=0,oi=a),Js)},movementY:function(a){return"movementY"in a?a.movementY:Fs}}),Zu=et(ho),Jd=N({},ho,{dataTransfer:0}),Fd=et(Jd),$d=N({},ii,{relatedTarget:0}),$s=et($d),Wd=N({},Pe,{animationName:0,elapsedTime:0,pseudoElement:0}),Id=et(Wd),am=N({},Pe,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),tm=et(am),em=N({},Pe,{data:0}),Ku=et(em),nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(a){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(a):(a=om[a])?!!t[a]:!1}function Ws(){return sm}var lm=N({},ii,{key:function(a){if(a.key){var t=nm[a.key]||a.key;if(t!=="Unidentified")return t}return a.type==="keypress"?(a=co(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?im[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(a){return a.type==="keypress"?co(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?co(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),rm=et(lm),um=N({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ju=et(um),cm=N({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),pm=et(cm),fm=N({},Pe,{propertyName:0,elapsedTime:0,pseudoElement:0}),hm=et(fm),dm=N({},ho,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=et(dm),gm=N({},Pe,{newState:0,oldState:0}),ym=et(gm),bm=[9,13,27,32],Is=Vt&&"CompositionEvent"in window,si=null;Vt&&"documentMode"in document&&(si=document.documentMode);var xm=Vt&&"TextEvent"in window&&!si,Fu=Vt&&(!Is||si&&8<si&&11>=si),$u=" ",Wu=!1;function Iu(a,t){switch(a){case"keyup":return bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ac(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var yn=!1;function vm(a,t){switch(a){case"compositionend":return ac(t);case"keypress":return t.which!==32?null:(Wu=!0,$u);case"textInput":return a=t.data,a===$u&&Wu?null:a;default:return null}}function wm(a,t){if(yn)return a==="compositionend"||!Is&&Iu(a,t)?(a=Qu(),uo=Ks=fe=null,yn=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fu&&t.locale!=="ko"?null:t.data;default:return null}}var km={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tc(a){var t=a&&a.nodeName&&a.nodeName.toLowerCase();return t==="input"?!!km[a.type]:t==="textarea"}function ec(a,t,e,n){mn?gn?gn.push(n):gn=[n]:mn=n,t=ns(t,"onChange"),0<t.length&&(e=new fo("onChange","change",null,e,n),a.push({event:e,listeners:t}))}var li=null,ri=null;function jm(a){Hf(a,0)}function mo(a){var t=ti(a);if(Uu(t))return a}function nc(a,t){if(a==="change")return t}var ic=!1;if(Vt){var al;if(Vt){var tl="oninput"in document;if(!tl){var oc=document.createElement("div");oc.setAttribute("oninput","return;"),tl=typeof oc.oninput=="function"}al=tl}else al=!1;ic=al&&(!document.documentMode||9<document.documentMode)}function sc(){li&&(li.detachEvent("onpropertychange",lc),ri=li=null)}function lc(a){if(a.propertyName==="value"&&mo(ri)){var t=[];ec(t,ri,a,Qs(a)),Xu(jm,t)}}function Nm(a,t,e){a==="focusin"?(sc(),li=t,ri=e,li.attachEvent("onpropertychange",lc)):a==="focusout"&&sc()}function zm(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return mo(ri)}function Sm(a,t){if(a==="click")return mo(t)}function Em(a,t){if(a==="input"||a==="change")return mo(t)}function Tm(a,t){return a===t&&(a!==0||1/a===1/t)||a!==a&&t!==t}var pt=typeof Object.is=="function"?Object.is:Tm;function ui(a,t){if(pt(a,t))return!0;if(typeof a!="object"||a===null||typeof t!="object"||t===null)return!1;var e=Object.keys(a),n=Object.keys(t);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var i=e[n];if(!Ms.call(t,i)||!pt(a[i],t[i]))return!1}return!0}function rc(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function uc(a,t){var e=rc(a);a=0;for(var n;e;){if(e.nodeType===3){if(n=a+e.textContent.length,a<=t&&n>=t)return{node:e,offset:t-a};a=n}a:{for(;e;){if(e.nextSibling){e=e.nextSibling;break a}e=e.parentNode}e=void 0}e=rc(e)}}function cc(a,t){return a&&t?a===t?!0:a&&a.nodeType===3?!1:t&&t.nodeType===3?cc(a,t.parentNode):"contains"in a?a.contains(t):a.compareDocumentPosition?!!(a.compareDocumentPosition(t)&16):!1:!1}function pc(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var t=lo(a.document);t instanceof a.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)a=t.contentWindow;else break;t=lo(a.document)}return t}function el(a){var t=a&&a.nodeName&&a.nodeName.toLowerCase();return t&&(t==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||t==="textarea"||a.contentEditable==="true")}var _m=Vt&&"documentMode"in document&&11>=document.documentMode,bn=null,nl=null,ci=null,il=!1;function fc(a,t,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;il||bn==null||bn!==lo(n)||(n=bn,"selectionStart"in n&&el(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ci&&ui(ci,n)||(ci=n,n=ns(nl,"onSelect"),0<n.length&&(t=new fo("onSelect","select",null,t,e),a.push({event:t,listeners:n}),t.target=bn)))}function Ye(a,t){var e={};return e[a.toLowerCase()]=t.toLowerCase(),e["Webkit"+a]="webkit"+t,e["Moz"+a]="moz"+t,e}var xn={animationend:Ye("Animation","AnimationEnd"),animationiteration:Ye("Animation","AnimationIteration"),animationstart:Ye("Animation","AnimationStart"),transitionrun:Ye("Transition","TransitionRun"),transitionstart:Ye("Transition","TransitionStart"),transitioncancel:Ye("Transition","TransitionCancel"),transitionend:Ye("Transition","TransitionEnd")},ol={},hc={};Vt&&(hc=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function Ge(a){if(ol[a])return ol[a];if(!xn[a])return a;var t=xn[a],e;for(e in t)if(t.hasOwnProperty(e)&&e in hc)return ol[a]=t[e];return a}var dc=Ge("animationend"),mc=Ge("animationiteration"),gc=Ge("animationstart"),Am=Ge("transitionrun"),Cm=Ge("transitionstart"),Mm=Ge("transitioncancel"),yc=Ge("transitionend"),bc=new Map,sl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sl.push("scrollEnd");function Rt(a,t){bc.set(a,t),Be(t,[a])}var go=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},vt=[],vn=0,ll=0;function yo(){for(var a=vn,t=ll=vn=0;t<a;){var e=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var i=vt[t];vt[t++]=null;var o=vt[t];if(vt[t++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}o!==0&&xc(e,i,o)}}function bo(a,t,e,n){vt[vn++]=a,vt[vn++]=t,vt[vn++]=e,vt[vn++]=n,ll|=n,a.lanes|=n,a=a.alternate,a!==null&&(a.lanes|=n)}function rl(a,t,e,n){return bo(a,t,e,n),xo(a)}function Xe(a,t){return bo(a,null,null,t),xo(a)}function xc(a,t,e){a.lanes|=e;var n=a.alternate;n!==null&&(n.lanes|=e);for(var i=!1,o=a.return;o!==null;)o.childLanes|=e,n=o.alternate,n!==null&&(n.childLanes|=e),o.tag===22&&(a=o.stateNode,a===null||a._visibility&1||(i=!0)),a=o,o=o.return;return a.tag===3?(o=a.stateNode,i&&t!==null&&(i=31-ct(e),a=o.hiddenUpdates,n=a[i],n===null?a[i]=[t]:n.push(t),t.lane=e|536870912),o):null}function xo(a){if(50<Mi)throw Mi=0,yr=null,Error(u(185));for(var t=a.return;t!==null;)a=t,t=a.return;return a.tag===3?a.stateNode:null}var wn={};function Rm(a,t,e,n){this.tag=a,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(a,t,e,n){return new Rm(a,t,e,n)}function ul(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Zt(a,t){var e=a.alternate;return e===null?(e=ft(a.tag,t,a.key,a.mode),e.elementType=a.elementType,e.type=a.type,e.stateNode=a.stateNode,e.alternate=a,a.alternate=e):(e.pendingProps=t,e.type=a.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=a.flags&65011712,e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=a.sibling,e.index=a.index,e.ref=a.ref,e.refCleanup=a.refCleanup,e}function vc(a,t){a.flags&=65011714;var e=a.alternate;return e===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,a.type=e.type,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a}function vo(a,t,e,n,i,o){var r=0;if(n=a,typeof a=="function")ul(a)&&(r=1);else if(typeof a=="string")r=L0(a,e,V.current)?26:a==="html"||a==="head"||a==="body"?27:5;else a:switch(a){case Ba:return a=ft(31,e,t,i),a.elementType=Ba,a.lanes=o,a;case H:return Qe(e.children,i,o,t);case P:r=8,i|=24;break;case U:return a=ft(12,e,t,i|2),a.elementType=U,a.lanes=o,a;case na:return a=ft(13,e,t,i),a.elementType=na,a.lanes=o,a;case ma:return a=ft(19,e,t,i),a.elementType=ma,a.lanes=o,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case X:r=10;break a;case B:r=9;break a;case ta:r=11;break a;case F:r=14;break a;case Na:r=16,n=null;break a}r=29,e=Error(u(130,a===null?"null":typeof a,"")),n=null}return t=ft(r,e,t,i),t.elementType=a,t.type=n,t.lanes=o,t}function Qe(a,t,e,n){return a=ft(7,a,n,t),a.lanes=e,a}function cl(a,t,e){return a=ft(6,a,null,t),a.lanes=e,a}function wc(a){var t=ft(18,null,null,0);return t.stateNode=a,t}function pl(a,t,e){return t=ft(4,a.children!==null?a.children:[],a.key,t),t.lanes=e,t.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},t}var kc=new WeakMap;function wt(a,t){if(typeof a=="object"&&a!==null){var e=kc.get(a);return e!==void 0?e:(t={value:a,source:t,stack:wu(t)},kc.set(a,t),t)}return{value:a,source:t,stack:wu(t)}}var kn=[],jn=0,wo=null,pi=0,kt=[],jt=0,he=null,Ut=1,Lt="";function Kt(a,t){kn[jn++]=pi,kn[jn++]=wo,wo=a,pi=t}function jc(a,t,e){kt[jt++]=Ut,kt[jt++]=Lt,kt[jt++]=he,he=a;var n=Ut;a=Lt;var i=32-ct(n)-1;n&=~(1<<i),e+=1;var o=32-ct(t)+i;if(30<o){var r=i-i%5;o=(n&(1<<r)-1).toString(32),n>>=r,i-=r,Ut=1<<32-ct(t)+i|e<<i|n,Lt=o+a}else Ut=1<<o|e<<i|n,Lt=a}function fl(a){a.return!==null&&(Kt(a,1),jc(a,1,0))}function hl(a){for(;a===wo;)wo=kn[--jn],kn[jn]=null,pi=kn[--jn],kn[jn]=null;for(;a===he;)he=kt[--jt],kt[jt]=null,Lt=kt[--jt],kt[jt]=null,Ut=kt[--jt],kt[jt]=null}function Nc(a,t){kt[jt++]=Ut,kt[jt++]=Lt,kt[jt++]=he,Ut=t.id,Lt=t.overflow,he=a}var Xa=null,za=null,ca=!1,de=null,Nt=!1,dl=Error(u(519));function me(a){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fi(wt(t,a)),dl}function zc(a){var t=a.stateNode,e=a.type,n=a.memoizedProps;switch(t[Ga]=a,t[tt]=n,e){case"dialog":la("cancel",t),la("close",t);break;case"iframe":case"object":case"embed":la("load",t);break;case"video":case"audio":for(e=0;e<Oi.length;e++)la(Oi[e],t);break;case"source":la("error",t);break;case"img":case"image":case"link":la("error",t),la("load",t);break;case"details":la("toggle",t);break;case"input":la("invalid",t),Lu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":la("invalid",t);break;case"textarea":la("invalid",t),Bu(t,n.value,n.defaultValue,n.children)}e=n.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||n.suppressHydrationWarning===!0||Gf(t.textContent,e)?(n.popover!=null&&(la("beforetoggle",t),la("toggle",t)),n.onScroll!=null&&la("scroll",t),n.onScrollEnd!=null&&la("scrollend",t),n.onClick!=null&&(t.onclick=Qt),t=!0):t=!1,t||me(a,!0)}function Sc(a){for(Xa=a.return;Xa;)switch(Xa.tag){case 5:case 31:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:Xa=Xa.return}}function Nn(a){if(a!==Xa)return!1;if(!ca)return Sc(a),ca=!0,!1;var t=a.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=a.type,e=!(e!=="form"&&e!=="button")||Mr(a.type,a.memoizedProps)),e=!e),e&&za&&me(a),Sc(a),t===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));za=Wf(a)}else if(t===31){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));za=Wf(a)}else t===27?(t=za,_e(a.type)?(a=Ur,Ur=null,za=a):za=t):za=Xa?St(a.stateNode.nextSibling):null;return!0}function Ve(){za=Xa=null,ca=!1}function ml(){var a=de;return a!==null&&(st===null?st=a:st.push.apply(st,a),de=null),a}function fi(a){de===null?de=[a]:de.push(a)}var gl=w(null),Ze=null,Jt=null;function ge(a,t,e){G(gl,t._currentValue),t._currentValue=e}function Ft(a){a._currentValue=gl.current,D(gl)}function yl(a,t,e){for(;a!==null;){var n=a.alternate;if((a.childLanes&t)!==t?(a.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),a===e)break;a=a.return}}function bl(a,t,e,n){var i=a.child;for(i!==null&&(i.return=a);i!==null;){var o=i.dependencies;if(o!==null){var r=i.child;o=o.firstContext;a:for(;o!==null;){var p=o;o=i;for(var y=0;y<t.length;y++)if(p.context===t[y]){o.lanes|=e,p=o.alternate,p!==null&&(p.lanes|=e),yl(o.return,e,a),n||(r=null);break a}o=p.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(u(341));r.lanes|=e,o=r.alternate,o!==null&&(o.lanes|=e),yl(r,e,a),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===a){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function zn(a,t,e,n){a=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var p=i.type;pt(i.pendingProps.value,r.value)||(a!==null?a.push(p):a=[p])}}else if(i===da.current){if(r=i.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(a!==null?a.push(Hi):a=[Hi])}i=i.return}a!==null&&bl(t,a,e,n),t.flags|=262144}function ko(a){for(a=a.firstContext;a!==null;){if(!pt(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Ke(a){Ze=a,Jt=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function Qa(a){return Ec(Ze,a)}function jo(a,t){return Ze===null&&Ke(a),Ec(a,t)}function Ec(a,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Jt===null){if(a===null)throw Error(u(308));Jt=t,a.dependencies={lanes:0,firstContext:t},a.flags|=524288}else Jt=Jt.next=t;return e}var Om=typeof AbortController<"u"?AbortController:function(){var a=[],t=this.signal={aborted:!1,addEventListener:function(e,n){a.push(n)}};this.abort=function(){t.aborted=!0,a.forEach(function(e){return e()})}},qm=l.unstable_scheduleCallback,Dm=l.unstable_NormalPriority,qa={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xl(){return{controller:new Om,data:new Map,refCount:0}}function hi(a){a.refCount--,a.refCount===0&&qm(Dm,function(){a.controller.abort()})}var di=null,vl=0,Sn=0,En=null;function Um(a,t){if(di===null){var e=di=[];vl=0,Sn=jr(),En={status:"pending",value:void 0,then:function(n){e.push(n)}}}return vl++,t.then(Tc,Tc),t}function Tc(){if(--vl===0&&di!==null){En!==null&&(En.status="fulfilled");var a=di;di=null,Sn=0,En=null;for(var t=0;t<a.length;t++)(0,a[t])()}}function Lm(a,t){var e=[],n={status:"pending",value:null,reason:null,then:function(i){e.push(i)}};return a.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<e.length;i++)(0,e[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<e.length;i++)(0,e[i])(void 0)}),n}var _c=M.S;M.S=function(a,t){hf=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Um(a,t),_c!==null&&_c(a,t)};var Je=w(null);function wl(){var a=Je.current;return a!==null?a:ja.pooledCache}function No(a,t){t===null?G(Je,Je.current):G(Je,t.pool)}function Ac(){var a=wl();return a===null?null:{parent:qa._currentValue,pool:a}}var Tn=Error(u(460)),kl=Error(u(474)),zo=Error(u(542)),So={then:function(){}};function Cc(a){return a=a.status,a==="fulfilled"||a==="rejected"}function Mc(a,t,e){switch(e=a[e],e===void 0?a.push(t):e!==t&&(t.then(Qt,Qt),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw a=t.reason,Oc(a),a;default:if(typeof t.status=="string")t.then(Qt,Qt);else{if(a=ja,a!==null&&100<a.shellSuspendCounter)throw Error(u(482));a=t,a.status="pending",a.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw a=t.reason,Oc(a),a}throw $e=t,Tn}}function Fe(a){try{var t=a._init;return t(a._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?($e=e,Tn):e}}var $e=null;function Rc(){if($e===null)throw Error(u(459));var a=$e;return $e=null,a}function Oc(a){if(a===Tn||a===zo)throw Error(u(483))}var _n=null,mi=0;function Eo(a){var t=mi;return mi+=1,_n===null&&(_n=[]),Mc(_n,a,t)}function gi(a,t){t=t.props.ref,a.ref=t!==void 0?t:null}function To(a,t){throw t.$$typeof===A?Error(u(525)):(a=Object.prototype.toString.call(t),Error(u(31,a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)))}function qc(a){function t(j,v){if(a){var z=j.deletions;z===null?(j.deletions=[v],j.flags|=16):z.push(v)}}function e(j,v){if(!a)return null;for(;v!==null;)t(j,v),v=v.sibling;return null}function n(j){for(var v=new Map;j!==null;)j.key!==null?v.set(j.key,j):v.set(j.index,j),j=j.sibling;return v}function i(j,v){return j=Zt(j,v),j.index=0,j.sibling=null,j}function o(j,v,z){return j.index=z,a?(z=j.alternate,z!==null?(z=z.index,z<v?(j.flags|=67108866,v):z):(j.flags|=67108866,v)):(j.flags|=1048576,v)}function r(j){return a&&j.alternate===null&&(j.flags|=67108866),j}function p(j,v,z,O){return v===null||v.tag!==6?(v=cl(z,j.mode,O),v.return=j,v):(v=i(v,z),v.return=j,v)}function y(j,v,z,O){var K=z.type;return K===H?C(j,v,z.props.children,O,z.key):v!==null&&(v.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Na&&Fe(K)===v.type)?(v=i(v,z.props),gi(v,z),v.return=j,v):(v=vo(z.type,z.key,z.props,null,j.mode,O),gi(v,z),v.return=j,v)}function S(j,v,z,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==z.containerInfo||v.stateNode.implementation!==z.implementation?(v=pl(z,j.mode,O),v.return=j,v):(v=i(v,z.children||[]),v.return=j,v)}function C(j,v,z,O,K){return v===null||v.tag!==7?(v=Qe(z,j.mode,O,K),v.return=j,v):(v=i(v,z),v.return=j,v)}function q(j,v,z){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=cl(""+v,j.mode,z),v.return=j,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case R:return z=vo(v.type,v.key,v.props,null,j.mode,z),gi(z,v),z.return=j,z;case L:return v=pl(v,j.mode,z),v.return=j,v;case Na:return v=Fe(v),q(j,v,z)}if(Mt(v)||Fa(v))return v=Qe(v,j.mode,z,null),v.return=j,v;if(typeof v.then=="function")return q(j,Eo(v),z);if(v.$$typeof===X)return q(j,jo(j,v),z);To(j,v)}return null}function E(j,v,z,O){var K=v!==null?v.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return K!==null?null:p(j,v,""+z,O);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case R:return z.key===K?y(j,v,z,O):null;case L:return z.key===K?S(j,v,z,O):null;case Na:return z=Fe(z),E(j,v,z,O)}if(Mt(z)||Fa(z))return K!==null?null:C(j,v,z,O,null);if(typeof z.then=="function")return E(j,v,Eo(z),O);if(z.$$typeof===X)return E(j,v,jo(j,z),O);To(j,z)}return null}function _(j,v,z,O,K){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return j=j.get(z)||null,p(v,j,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case R:return j=j.get(O.key===null?z:O.key)||null,y(v,j,O,K);case L:return j=j.get(O.key===null?z:O.key)||null,S(v,j,O,K);case Na:return O=Fe(O),_(j,v,z,O,K)}if(Mt(O)||Fa(O))return j=j.get(z)||null,C(v,j,O,K,null);if(typeof O.then=="function")return _(j,v,z,Eo(O),K);if(O.$$typeof===X)return _(j,v,z,jo(v,O),K);To(v,O)}return null}function Q(j,v,z,O){for(var K=null,pa=null,Z=v,ea=v=0,ua=null;Z!==null&&ea<z.length;ea++){Z.index>ea?(ua=Z,Z=null):ua=Z.sibling;var fa=E(j,Z,z[ea],O);if(fa===null){Z===null&&(Z=ua);break}a&&Z&&fa.alternate===null&&t(j,Z),v=o(fa,v,ea),pa===null?K=fa:pa.sibling=fa,pa=fa,Z=ua}if(ea===z.length)return e(j,Z),ca&&Kt(j,ea),K;if(Z===null){for(;ea<z.length;ea++)Z=q(j,z[ea],O),Z!==null&&(v=o(Z,v,ea),pa===null?K=Z:pa.sibling=Z,pa=Z);return ca&&Kt(j,ea),K}for(Z=n(Z);ea<z.length;ea++)ua=_(Z,j,ea,z[ea],O),ua!==null&&(a&&ua.alternate!==null&&Z.delete(ua.key===null?ea:ua.key),v=o(ua,v,ea),pa===null?K=ua:pa.sibling=ua,pa=ua);return a&&Z.forEach(function(Oe){return t(j,Oe)}),ca&&Kt(j,ea),K}function J(j,v,z,O){if(z==null)throw Error(u(151));for(var K=null,pa=null,Z=v,ea=v=0,ua=null,fa=z.next();Z!==null&&!fa.done;ea++,fa=z.next()){Z.index>ea?(ua=Z,Z=null):ua=Z.sibling;var Oe=E(j,Z,fa.value,O);if(Oe===null){Z===null&&(Z=ua);break}a&&Z&&Oe.alternate===null&&t(j,Z),v=o(Oe,v,ea),pa===null?K=Oe:pa.sibling=Oe,pa=Oe,Z=ua}if(fa.done)return e(j,Z),ca&&Kt(j,ea),K;if(Z===null){for(;!fa.done;ea++,fa=z.next())fa=q(j,fa.value,O),fa!==null&&(v=o(fa,v,ea),pa===null?K=fa:pa.sibling=fa,pa=fa);return ca&&Kt(j,ea),K}for(Z=n(Z);!fa.done;ea++,fa=z.next())fa=_(Z,j,ea,fa.value,O),fa!==null&&(a&&fa.alternate!==null&&Z.delete(fa.key===null?ea:fa.key),v=o(fa,v,ea),pa===null?K=fa:pa.sibling=fa,pa=fa);return a&&Z.forEach(function(J0){return t(j,J0)}),ca&&Kt(j,ea),K}function wa(j,v,z,O){if(typeof z=="object"&&z!==null&&z.type===H&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case R:a:{for(var K=z.key;v!==null;){if(v.key===K){if(K=z.type,K===H){if(v.tag===7){e(j,v.sibling),O=i(v,z.props.children),O.return=j,j=O;break a}}else if(v.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Na&&Fe(K)===v.type){e(j,v.sibling),O=i(v,z.props),gi(O,z),O.return=j,j=O;break a}e(j,v);break}else t(j,v);v=v.sibling}z.type===H?(O=Qe(z.props.children,j.mode,O,z.key),O.return=j,j=O):(O=vo(z.type,z.key,z.props,null,j.mode,O),gi(O,z),O.return=j,j=O)}return r(j);case L:a:{for(K=z.key;v!==null;){if(v.key===K)if(v.tag===4&&v.stateNode.containerInfo===z.containerInfo&&v.stateNode.implementation===z.implementation){e(j,v.sibling),O=i(v,z.children||[]),O.return=j,j=O;break a}else{e(j,v);break}else t(j,v);v=v.sibling}O=pl(z,j.mode,O),O.return=j,j=O}return r(j);case Na:return z=Fe(z),wa(j,v,z,O)}if(Mt(z))return Q(j,v,z,O);if(Fa(z)){if(K=Fa(z),typeof K!="function")throw Error(u(150));return z=K.call(z),J(j,v,z,O)}if(typeof z.then=="function")return wa(j,v,Eo(z),O);if(z.$$typeof===X)return wa(j,v,jo(j,z),O);To(j,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,v!==null&&v.tag===6?(e(j,v.sibling),O=i(v,z),O.return=j,j=O):(e(j,v),O=cl(z,j.mode,O),O.return=j,j=O),r(j)):e(j,v)}return function(j,v,z,O){try{mi=0;var K=wa(j,v,z,O);return _n=null,K}catch(Z){if(Z===Tn||Z===zo)throw Z;var pa=ft(29,Z,null,j.mode);return pa.lanes=O,pa.return=j,pa}}}var We=qc(!0),Dc=qc(!1),ye=!1;function jl(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nl(a,t){a=a.updateQueue,t.updateQueue===a&&(t.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function be(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function xe(a,t,e){var n=a.updateQueue;if(n===null)return null;if(n=n.shared,(ha&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=xo(a),xc(a,null,e),t}return bo(a,n,t,e),xo(a)}function yi(a,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var n=t.lanes;n&=a.pendingLanes,e|=n,t.lanes=e,Eu(a,e)}}function zl(a,t){var e=a.updateQueue,n=a.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var i=null,o=null;if(e=e.firstBaseUpdate,e!==null){do{var r={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};o===null?i=o=r:o=o.next=r,e=e.next}while(e!==null);o===null?i=o=t:o=o.next=t}else i=o=t;e={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},a.updateQueue=e;return}a=e.lastBaseUpdate,a===null?e.firstBaseUpdate=t:a.next=t,e.lastBaseUpdate=t}var Sl=!1;function bi(){if(Sl){var a=En;if(a!==null)throw a}}function xi(a,t,e,n){Sl=!1;var i=a.updateQueue;ye=!1;var o=i.firstBaseUpdate,r=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var y=p,S=y.next;y.next=null,r===null?o=S:r.next=S,r=y;var C=a.alternate;C!==null&&(C=C.updateQueue,p=C.lastBaseUpdate,p!==r&&(p===null?C.firstBaseUpdate=S:p.next=S,C.lastBaseUpdate=y))}if(o!==null){var q=i.baseState;r=0,C=S=y=null,p=o;do{var E=p.lane&-536870913,_=E!==p.lane;if(_?(ra&E)===E:(n&E)===E){E!==0&&E===Sn&&(Sl=!0),C!==null&&(C=C.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});a:{var Q=a,J=p;E=t;var wa=e;switch(J.tag){case 1:if(Q=J.payload,typeof Q=="function"){q=Q.call(wa,q,E);break a}q=Q;break a;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=J.payload,E=typeof Q=="function"?Q.call(wa,q,E):Q,E==null)break a;q=N({},q,E);break a;case 2:ye=!0}}E=p.callback,E!==null&&(a.flags|=64,_&&(a.flags|=8192),_=i.callbacks,_===null?i.callbacks=[E]:_.push(E))}else _={lane:E,tag:p.tag,payload:p.payload,callback:p.callback,next:null},C===null?(S=C=_,y=q):C=C.next=_,r|=E;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;_=p,p=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);C===null&&(y=q),i.baseState=y,i.firstBaseUpdate=S,i.lastBaseUpdate=C,o===null&&(i.shared.lanes=0),Ne|=r,a.lanes=r,a.memoizedState=q}}function Uc(a,t){if(typeof a!="function")throw Error(u(191,a));a.call(t)}function Lc(a,t){var e=a.callbacks;if(e!==null)for(a.callbacks=null,a=0;a<e.length;a++)Uc(e[a],t)}var An=w(null),_o=w(0);function Hc(a,t){a=oe,G(_o,a),G(An,t),oe=a|t.baseLanes}function El(){G(_o,oe),G(An,An.current)}function Tl(){oe=_o.current,D(An),D(_o)}var ht=w(null),zt=null;function ve(a){var t=a.alternate;G(Ra,Ra.current&1),G(ht,a),zt===null&&(t===null||An.current!==null||t.memoizedState!==null)&&(zt=a)}function _l(a){G(Ra,Ra.current),G(ht,a),zt===null&&(zt=a)}function Bc(a){a.tag===22?(G(Ra,Ra.current),G(ht,a),zt===null&&(zt=a)):we()}function we(){G(Ra,Ra.current),G(ht,ht.current)}function dt(a){D(ht),zt===a&&(zt=null),D(Ra)}var Ra=w(0);function Ao(a){for(var t=a;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||qr(e)||Dr(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $t=0,aa=null,xa=null,Da=null,Co=!1,Cn=!1,Ie=!1,Mo=0,vi=0,Mn=null,Hm=0;function _a(){throw Error(u(321))}function Al(a,t){if(t===null)return!1;for(var e=0;e<t.length&&e<a.length;e++)if(!pt(a[e],t[e]))return!1;return!0}function Cl(a,t,e,n,i,o){return $t=o,aa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=a===null||a.memoizedState===null?jp:Vl,Ie=!1,o=e(n,i),Ie=!1,Cn&&(o=Yc(t,e,n,i)),Pc(a),o}function Pc(a){M.H=ji;var t=xa!==null&&xa.next!==null;if($t=0,Da=xa=aa=null,Co=!1,vi=0,Mn=null,t)throw Error(u(300));a===null||Ua||(a=a.dependencies,a!==null&&ko(a)&&(Ua=!0))}function Yc(a,t,e,n){aa=a;var i=0;do{if(Cn&&(Mn=null),vi=0,Cn=!1,25<=i)throw Error(u(301));if(i+=1,Da=xa=null,a.updateQueue!=null){var o=a.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=Np,o=t(e,n)}while(Cn);return o}function Bm(){var a=M.H,t=a.useState()[0];return t=typeof t.then=="function"?wi(t):t,a=a.useState()[0],(xa!==null?xa.memoizedState:null)!==a&&(aa.flags|=1024),t}function Ml(){var a=Mo!==0;return Mo=0,a}function Rl(a,t,e){t.updateQueue=a.updateQueue,t.flags&=-2053,a.lanes&=~e}function Ol(a){if(Co){for(a=a.memoizedState;a!==null;){var t=a.queue;t!==null&&(t.pending=null),a=a.next}Co=!1}$t=0,Da=xa=aa=null,Cn=!1,vi=Mo=0,Mn=null}function Ia(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Da===null?aa.memoizedState=Da=a:Da=Da.next=a,Da}function Oa(){if(xa===null){var a=aa.alternate;a=a!==null?a.memoizedState:null}else a=xa.next;var t=Da===null?aa.memoizedState:Da.next;if(t!==null)Da=t,xa=a;else{if(a===null)throw aa.alternate===null?Error(u(467)):Error(u(310));xa=a,a={memoizedState:xa.memoizedState,baseState:xa.baseState,baseQueue:xa.baseQueue,queue:xa.queue,next:null},Da===null?aa.memoizedState=Da=a:Da=Da.next=a}return Da}function Ro(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wi(a){var t=vi;return vi+=1,Mn===null&&(Mn=[]),a=Mc(Mn,a,t),t=aa,(Da===null?t.memoizedState:Da.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?jp:Vl),a}function Oo(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return wi(a);if(a.$$typeof===X)return Qa(a)}throw Error(u(438,String(a)))}function ql(a){var t=null,e=aa.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var n=aa.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=Ro(),aa.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(a),n=0;n<a;n++)e[n]=Ja;return t.index++,e}function Wt(a,t){return typeof t=="function"?t(a):t}function qo(a){var t=Oa();return Dl(t,xa,a)}function Dl(a,t,e){var n=a.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=a.baseQueue,o=n.pending;if(o!==null){if(i!==null){var r=i.next;i.next=o.next,o.next=r}t.baseQueue=i=o,n.pending=null}if(o=a.baseState,i===null)a.memoizedState=o;else{t=i.next;var p=r=null,y=null,S=t,C=!1;do{var q=S.lane&-536870913;if(q!==S.lane?(ra&q)===q:($t&q)===q){var E=S.revertLane;if(E===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),q===Sn&&(C=!0);else if(($t&E)===E){S=S.next,E===Sn&&(C=!0);continue}else q={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},y===null?(p=y=q,r=o):y=y.next=q,aa.lanes|=E,Ne|=E;q=S.action,Ie&&e(o,q),o=S.hasEagerState?S.eagerState:e(o,q)}else E={lane:q,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},y===null?(p=y=E,r=o):y=y.next=E,aa.lanes|=q,Ne|=q;S=S.next}while(S!==null&&S!==t);if(y===null?r=o:y.next=p,!pt(o,a.memoizedState)&&(Ua=!0,C&&(e=En,e!==null)))throw e;a.memoizedState=o,a.baseState=r,a.baseQueue=y,n.lastRenderedState=o}return i===null&&(n.lanes=0),[a.memoizedState,n.dispatch]}function Ul(a){var t=Oa(),e=t.queue;if(e===null)throw Error(u(311));e.lastRenderedReducer=a;var n=e.dispatch,i=e.pending,o=t.memoizedState;if(i!==null){e.pending=null;var r=i=i.next;do o=a(o,r.action),r=r.next;while(r!==i);pt(o,t.memoizedState)||(Ua=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),e.lastRenderedState=o}return[o,n]}function Gc(a,t,e){var n=aa,i=Oa(),o=ca;if(o){if(e===void 0)throw Error(u(407));e=e()}else e=t();var r=!pt((xa||i).memoizedState,e);if(r&&(i.memoizedState=e,Ua=!0),i=i.queue,Bl(Vc.bind(null,n,i,a),[a]),i.getSnapshot!==t||r||Da!==null&&Da.memoizedState.tag&1){if(n.flags|=2048,Rn(9,{destroy:void 0},Qc.bind(null,n,i,e,t),null),ja===null)throw Error(u(349));o||($t&127)!==0||Xc(n,t,e)}return e}function Xc(a,t,e){a.flags|=16384,a={getSnapshot:t,value:e},t=aa.updateQueue,t===null?(t=Ro(),aa.updateQueue=t,t.stores=[a]):(e=t.stores,e===null?t.stores=[a]:e.push(a))}function Qc(a,t,e,n){t.value=e,t.getSnapshot=n,Zc(t)&&Kc(a)}function Vc(a,t,e){return e(function(){Zc(t)&&Kc(a)})}function Zc(a){var t=a.getSnapshot;a=a.value;try{var e=t();return!pt(a,e)}catch{return!0}}function Kc(a){var t=Xe(a,2);t!==null&&lt(t,a,2)}function Ll(a){var t=Ia();if(typeof a=="function"){var e=a;if(a=e(),Ie){ce(!0);try{e()}finally{ce(!1)}}}return t.memoizedState=t.baseState=a,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:a},t}function Jc(a,t,e,n){return a.baseState=e,Dl(a,xa,typeof n=="function"?n:Wt)}function Pm(a,t,e,n,i){if(Lo(a))throw Error(u(485));if(a=t.action,a!==null){var o={payload:i,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){o.listeners.push(r)}};M.T!==null?e(!0):o.isTransition=!1,n(o),e=t.pending,e===null?(o.next=t.pending=o,Fc(t,o)):(o.next=e.next,t.pending=e.next=o)}}function Fc(a,t){var e=t.action,n=t.payload,i=a.state;if(t.isTransition){var o=M.T,r={};M.T=r;try{var p=e(i,n),y=M.S;y!==null&&y(r,p),$c(a,t,p)}catch(S){Hl(a,t,S)}finally{o!==null&&r.types!==null&&(o.types=r.types),M.T=o}}else try{o=e(i,n),$c(a,t,o)}catch(S){Hl(a,t,S)}}function $c(a,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(n){Wc(a,t,n)},function(n){return Hl(a,t,n)}):Wc(a,t,e)}function Wc(a,t,e){t.status="fulfilled",t.value=e,Ic(t),a.state=e,t=a.pending,t!==null&&(e=t.next,e===t?a.pending=null:(e=e.next,t.next=e,Fc(a,e)))}function Hl(a,t,e){var n=a.pending;if(a.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=e,Ic(t),t=t.next;while(t!==n)}a.action=null}function Ic(a){a=a.listeners;for(var t=0;t<a.length;t++)(0,a[t])()}function ap(a,t){return t}function tp(a,t){if(ca){var e=ja.formState;if(e!==null){a:{var n=aa;if(ca){if(za){t:{for(var i=za,o=Nt;i.nodeType!==8;){if(!o){i=null;break t}if(i=St(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){za=St(i.nextSibling),n=i.data==="F!";break a}}me(n)}n=!1}n&&(t=e[0])}}return e=Ia(),e.memoizedState=e.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ap,lastRenderedState:t},e.queue=n,e=vp.bind(null,aa,n),n.dispatch=e,n=Ll(!1),o=Ql.bind(null,aa,!1,n.queue),n=Ia(),i={state:t,dispatch:null,action:a,pending:null},n.queue=i,e=Pm.bind(null,aa,i,o,e),i.dispatch=e,n.memoizedState=a,[t,e,!1]}function ep(a){var t=Oa();return np(t,xa,a)}function np(a,t,e){if(t=Dl(a,t,ap)[0],a=qo(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=wi(t)}catch(r){throw r===Tn?zo:r}else n=t;t=Oa();var i=t.queue,o=i.dispatch;return e!==t.memoizedState&&(aa.flags|=2048,Rn(9,{destroy:void 0},Ym.bind(null,i,e),null)),[n,o,a]}function Ym(a,t){a.action=t}function ip(a){var t=Oa(),e=xa;if(e!==null)return np(t,e,a);Oa(),t=t.memoizedState,e=Oa();var n=e.queue.dispatch;return e.memoizedState=a,[t,n,!1]}function Rn(a,t,e,n){return a={tag:a,create:e,deps:n,inst:t,next:null},t=aa.updateQueue,t===null&&(t=Ro(),aa.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=a.next=a:(n=e.next,e.next=a,a.next=n,t.lastEffect=a),a}function op(){return Oa().memoizedState}function Do(a,t,e,n){var i=Ia();aa.flags|=a,i.memoizedState=Rn(1|t,{destroy:void 0},e,n===void 0?null:n)}function Uo(a,t,e,n){var i=Oa();n=n===void 0?null:n;var o=i.memoizedState.inst;xa!==null&&n!==null&&Al(n,xa.memoizedState.deps)?i.memoizedState=Rn(t,o,e,n):(aa.flags|=a,i.memoizedState=Rn(1|t,o,e,n))}function sp(a,t){Do(8390656,8,a,t)}function Bl(a,t){Uo(2048,8,a,t)}function Gm(a){aa.flags|=4;var t=aa.updateQueue;if(t===null)t=Ro(),aa.updateQueue=t,t.events=[a];else{var e=t.events;e===null?t.events=[a]:e.push(a)}}function lp(a){var t=Oa().memoizedState;return Gm({ref:t,nextImpl:a}),function(){if((ha&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function rp(a,t){return Uo(4,2,a,t)}function up(a,t){return Uo(4,4,a,t)}function cp(a,t){if(typeof t=="function"){a=a();var e=t(a);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return a=a(),t.current=a,function(){t.current=null}}function pp(a,t,e){e=e!=null?e.concat([a]):null,Uo(4,4,cp.bind(null,t,a),e)}function Pl(){}function fp(a,t){var e=Oa();t=t===void 0?null:t;var n=e.memoizedState;return t!==null&&Al(t,n[1])?n[0]:(e.memoizedState=[a,t],a)}function hp(a,t){var e=Oa();t=t===void 0?null:t;var n=e.memoizedState;if(t!==null&&Al(t,n[1]))return n[0];if(n=a(),Ie){ce(!0);try{a()}finally{ce(!1)}}return e.memoizedState=[n,t],n}function Yl(a,t,e){return e===void 0||($t&1073741824)!==0&&(ra&261930)===0?a.memoizedState=t:(a.memoizedState=e,a=mf(),aa.lanes|=a,Ne|=a,e)}function dp(a,t,e,n){return pt(e,t)?e:An.current!==null?(a=Yl(a,e,n),pt(a,t)||(Ua=!0),a):($t&42)===0||($t&1073741824)!==0&&(ra&261930)===0?(Ua=!0,a.memoizedState=e):(a=mf(),aa.lanes|=a,Ne|=a,t)}function mp(a,t,e,n,i){var o=Y.p;Y.p=o!==0&&8>o?o:8;var r=M.T,p={};M.T=p,Ql(a,!1,t,e);try{var y=i(),S=M.S;if(S!==null&&S(p,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var C=Lm(y,n);ki(a,t,C,yt(a))}else ki(a,t,n,yt(a))}catch(q){ki(a,t,{then:function(){},status:"rejected",reason:q},yt())}finally{Y.p=o,r!==null&&p.types!==null&&(r.types=p.types),M.T=r}}function Xm(){}function Gl(a,t,e,n){if(a.tag!==5)throw Error(u(476));var i=gp(a).queue;mp(a,i,t,$,e===null?Xm:function(){return yp(a),e(n)})}function gp(a){var t=a.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:$},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},next:null},a.memoizedState=t,a=a.alternate,a!==null&&(a.memoizedState=t),t}function yp(a){var t=gp(a);t.next===null&&(t=a.alternate.memoizedState),ki(a,t.next.queue,{},yt())}function Xl(){return Qa(Hi)}function bp(){return Oa().memoizedState}function xp(){return Oa().memoizedState}function Qm(a){for(var t=a.return;t!==null;){switch(t.tag){case 24:case 3:var e=yt();a=be(e);var n=xe(t,a,e);n!==null&&(lt(n,t,e),yi(n,t,e)),t={cache:xl()},a.payload=t;return}t=t.return}}function Vm(a,t,e){var n=yt();e={lane:n,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Lo(a)?wp(t,e):(e=rl(a,t,e,n),e!==null&&(lt(e,a,n),kp(e,t,n)))}function vp(a,t,e){var n=yt();ki(a,t,e,n)}function ki(a,t,e,n){var i={lane:n,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Lo(a))wp(t,i);else{var o=a.alternate;if(a.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var r=t.lastRenderedState,p=o(r,e);if(i.hasEagerState=!0,i.eagerState=p,pt(p,r))return bo(a,t,i,0),ja===null&&yo(),!1}catch{}if(e=rl(a,t,i,n),e!==null)return lt(e,a,n),kp(e,t,n),!0}return!1}function Ql(a,t,e,n){if(n={lane:2,revertLane:jr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Lo(a)){if(t)throw Error(u(479))}else t=rl(a,e,n,2),t!==null&&lt(t,a,2)}function Lo(a){var t=a.alternate;return a===aa||t!==null&&t===aa}function wp(a,t){Cn=Co=!0;var e=a.pending;e===null?t.next=t:(t.next=e.next,e.next=t),a.pending=t}function kp(a,t,e){if((e&4194048)!==0){var n=t.lanes;n&=a.pendingLanes,e|=n,t.lanes=e,Eu(a,e)}}var ji={readContext:Qa,use:Oo,useCallback:_a,useContext:_a,useEffect:_a,useImperativeHandle:_a,useLayoutEffect:_a,useInsertionEffect:_a,useMemo:_a,useReducer:_a,useRef:_a,useState:_a,useDebugValue:_a,useDeferredValue:_a,useTransition:_a,useSyncExternalStore:_a,useId:_a,useHostTransitionStatus:_a,useFormState:_a,useActionState:_a,useOptimistic:_a,useMemoCache:_a,useCacheRefresh:_a};ji.useEffectEvent=_a;var jp={readContext:Qa,use:Oo,useCallback:function(a,t){return Ia().memoizedState=[a,t===void 0?null:t],a},useContext:Qa,useEffect:sp,useImperativeHandle:function(a,t,e){e=e!=null?e.concat([a]):null,Do(4194308,4,cp.bind(null,t,a),e)},useLayoutEffect:function(a,t){return Do(4194308,4,a,t)},useInsertionEffect:function(a,t){Do(4,2,a,t)},useMemo:function(a,t){var e=Ia();t=t===void 0?null:t;var n=a();if(Ie){ce(!0);try{a()}finally{ce(!1)}}return e.memoizedState=[n,t],n},useReducer:function(a,t,e){var n=Ia();if(e!==void 0){var i=e(t);if(Ie){ce(!0);try{e(t)}finally{ce(!1)}}}else i=t;return n.memoizedState=n.baseState=i,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:i},n.queue=a,a=a.dispatch=Vm.bind(null,aa,a),[n.memoizedState,a]},useRef:function(a){var t=Ia();return a={current:a},t.memoizedState=a},useState:function(a){a=Ll(a);var t=a.queue,e=vp.bind(null,aa,t);return t.dispatch=e,[a.memoizedState,e]},useDebugValue:Pl,useDeferredValue:function(a,t){var e=Ia();return Yl(e,a,t)},useTransition:function(){var a=Ll(!1);return a=mp.bind(null,aa,a.queue,!0,!1),Ia().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,t,e){var n=aa,i=Ia();if(ca){if(e===void 0)throw Error(u(407));e=e()}else{if(e=t(),ja===null)throw Error(u(349));(ra&127)!==0||Xc(n,t,e)}i.memoizedState=e;var o={value:e,getSnapshot:t};return i.queue=o,sp(Vc.bind(null,n,o,a),[a]),n.flags|=2048,Rn(9,{destroy:void 0},Qc.bind(null,n,o,e,t),null),e},useId:function(){var a=Ia(),t=ja.identifierPrefix;if(ca){var e=Lt,n=Ut;e=(n&~(1<<32-ct(n)-1)).toString(32)+e,t="_"+t+"R_"+e,e=Mo++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=Hm++,t="_"+t+"r_"+e.toString(32)+"_";return a.memoizedState=t},useHostTransitionStatus:Xl,useFormState:tp,useActionState:tp,useOptimistic:function(a){var t=Ia();t.memoizedState=t.baseState=a;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=Ql.bind(null,aa,!0,e),e.dispatch=t,[a,t]},useMemoCache:ql,useCacheRefresh:function(){return Ia().memoizedState=Qm.bind(null,aa)},useEffectEvent:function(a){var t=Ia(),e={impl:a};return t.memoizedState=e,function(){if((ha&2)!==0)throw Error(u(440));return e.impl.apply(void 0,arguments)}}},Vl={readContext:Qa,use:Oo,useCallback:fp,useContext:Qa,useEffect:Bl,useImperativeHandle:pp,useInsertionEffect:rp,useLayoutEffect:up,useMemo:hp,useReducer:qo,useRef:op,useState:function(){return qo(Wt)},useDebugValue:Pl,useDeferredValue:function(a,t){var e=Oa();return dp(e,xa.memoizedState,a,t)},useTransition:function(){var a=qo(Wt)[0],t=Oa().memoizedState;return[typeof a=="boolean"?a:wi(a),t]},useSyncExternalStore:Gc,useId:bp,useHostTransitionStatus:Xl,useFormState:ep,useActionState:ep,useOptimistic:function(a,t){var e=Oa();return Jc(e,xa,a,t)},useMemoCache:ql,useCacheRefresh:xp};Vl.useEffectEvent=lp;var Np={readContext:Qa,use:Oo,useCallback:fp,useContext:Qa,useEffect:Bl,useImperativeHandle:pp,useInsertionEffect:rp,useLayoutEffect:up,useMemo:hp,useReducer:Ul,useRef:op,useState:function(){return Ul(Wt)},useDebugValue:Pl,useDeferredValue:function(a,t){var e=Oa();return xa===null?Yl(e,a,t):dp(e,xa.memoizedState,a,t)},useTransition:function(){var a=Ul(Wt)[0],t=Oa().memoizedState;return[typeof a=="boolean"?a:wi(a),t]},useSyncExternalStore:Gc,useId:bp,useHostTransitionStatus:Xl,useFormState:ip,useActionState:ip,useOptimistic:function(a,t){var e=Oa();return xa!==null?Jc(e,xa,a,t):(e.baseState=a,[a,e.queue.dispatch])},useMemoCache:ql,useCacheRefresh:xp};Np.useEffectEvent=lp;function Zl(a,t,e,n){t=a.memoizedState,e=e(n,t),e=e==null?t:N({},t,e),a.memoizedState=e,a.lanes===0&&(a.updateQueue.baseState=e)}var Kl={enqueueSetState:function(a,t,e){a=a._reactInternals;var n=yt(),i=be(n);i.payload=t,e!=null&&(i.callback=e),t=xe(a,i,n),t!==null&&(lt(t,a,n),yi(t,a,n))},enqueueReplaceState:function(a,t,e){a=a._reactInternals;var n=yt(),i=be(n);i.tag=1,i.payload=t,e!=null&&(i.callback=e),t=xe(a,i,n),t!==null&&(lt(t,a,n),yi(t,a,n))},enqueueForceUpdate:function(a,t){a=a._reactInternals;var e=yt(),n=be(e);n.tag=2,t!=null&&(n.callback=t),t=xe(a,n,e),t!==null&&(lt(t,a,e),yi(t,a,e))}};function zp(a,t,e,n,i,o,r){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(n,o,r):t.prototype&&t.prototype.isPureReactComponent?!ui(e,n)||!ui(i,o):!0}function Sp(a,t,e,n){a=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,n),t.state!==a&&Kl.enqueueReplaceState(t,t.state,null)}function an(a,t){var e=t;if("ref"in t){e={};for(var n in t)n!=="ref"&&(e[n]=t[n])}if(a=a.defaultProps){e===t&&(e=N({},e));for(var i in a)e[i]===void 0&&(e[i]=a[i])}return e}function Ep(a){go(a)}function Tp(a){console.error(a)}function _p(a){go(a)}function Ho(a,t){try{var e=a.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ap(a,t,e){try{var n=a.onCaughtError;n(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Jl(a,t,e){return e=be(e),e.tag=3,e.payload={element:null},e.callback=function(){Ho(a,t)},e}function Cp(a){return a=be(a),a.tag=3,a}function Mp(a,t,e,n){var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;a.payload=function(){return i(o)},a.callback=function(){Ap(t,e,n)}}var r=e.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(a.callback=function(){Ap(t,e,n),typeof i!="function"&&(ze===null?ze=new Set([this]):ze.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})})}function Zm(a,t,e,n,i){if(e.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=e.alternate,t!==null&&zn(t,e,i,!0),e=ht.current,e!==null){switch(e.tag){case 31:case 13:return zt===null?$o():e.alternate===null&&Aa===0&&(Aa=3),e.flags&=-257,e.flags|=65536,e.lanes=i,n===So?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([n]):t.add(n),vr(a,n,i)),!1;case 22:return e.flags|=65536,n===So?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([n]):e.add(n)),vr(a,n,i)),!1}throw Error(u(435,e.tag))}return vr(a,n,i),$o(),!1}if(ca)return t=ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==dl&&(a=Error(u(422),{cause:n}),fi(wt(a,e)))):(n!==dl&&(t=Error(u(423),{cause:n}),fi(wt(t,e))),a=a.current.alternate,a.flags|=65536,i&=-i,a.lanes|=i,n=wt(n,e),i=Jl(a.stateNode,n,i),zl(a,i),Aa!==4&&(Aa=2)),!1;var o=Error(u(520),{cause:n});if(o=wt(o,e),Ci===null?Ci=[o]:Ci.push(o),Aa!==4&&(Aa=2),t===null)return!0;n=wt(n,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,a=i&-i,e.lanes|=a,a=Jl(e.stateNode,n,a),zl(e,a),!1;case 1:if(t=e.type,o=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ze===null||!ze.has(o))))return e.flags|=65536,i&=-i,e.lanes|=i,i=Cp(i),Mp(i,a,e,n),zl(e,i),!1}e=e.return}while(e!==null);return!1}var Fl=Error(u(461)),Ua=!1;function Va(a,t,e,n){t.child=a===null?Dc(t,null,e,n):We(t,a.child,e,n)}function Rp(a,t,e,n,i){e=e.render;var o=t.ref;if("ref"in n){var r={};for(var p in n)p!=="ref"&&(r[p]=n[p])}else r=n;return Ke(t),n=Cl(a,t,e,r,o,i),p=Ml(),a!==null&&!Ua?(Rl(a,t,i),It(a,t,i)):(ca&&p&&fl(t),t.flags|=1,Va(a,t,n,i),t.child)}function Op(a,t,e,n,i){if(a===null){var o=e.type;return typeof o=="function"&&!ul(o)&&o.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=o,qp(a,t,o,n,i)):(a=vo(e.type,null,n,t,t.mode,i),a.ref=t.ref,a.return=t,t.child=a)}if(o=a.child,!ir(a,i)){var r=o.memoizedProps;if(e=e.compare,e=e!==null?e:ui,e(r,n)&&a.ref===t.ref)return It(a,t,i)}return t.flags|=1,a=Zt(o,n),a.ref=t.ref,a.return=t,t.child=a}function qp(a,t,e,n,i){if(a!==null){var o=a.memoizedProps;if(ui(o,n)&&a.ref===t.ref)if(Ua=!1,t.pendingProps=n=o,ir(a,i))(a.flags&131072)!==0&&(Ua=!0);else return t.lanes=a.lanes,It(a,t,i)}return $l(a,t,e,n,i)}function Dp(a,t,e,n){var i=n.children,o=a!==null?a.memoizedState:null;if(a===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|e:e,a!==null){for(n=t.child=a.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~o}else n=0,t.child=null;return Up(a,t,o,e,n)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},a!==null&&No(t,o!==null?o.cachePool:null),o!==null?Hc(t,o):El(),Bc(t);else return n=t.lanes=536870912,Up(a,t,o!==null?o.baseLanes|e:e,e,n)}else o!==null?(No(t,o.cachePool),Hc(t,o),we(),t.memoizedState=null):(a!==null&&No(t,null),El(),we());return Va(a,t,i,e),t.child}function Ni(a,t){return a!==null&&a.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Up(a,t,e,n,i){var o=wl();return o=o===null?null:{parent:qa._currentValue,pool:o},t.memoizedState={baseLanes:e,cachePool:o},a!==null&&No(t,null),El(),Bc(t),a!==null&&zn(a,t,n,!0),t.childLanes=i,null}function Bo(a,t){return t=Yo({mode:t.mode,children:t.children},a.mode),t.ref=a.ref,a.child=t,t.return=a,t}function Lp(a,t,e){return We(t,a.child,null,e),a=Bo(t,t.pendingProps),a.flags|=2,dt(t),t.memoizedState=null,a}function Km(a,t,e){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,a===null){if(ca){if(n.mode==="hidden")return a=Bo(t,n),t.lanes=536870912,Ni(null,a);if(_l(t),(a=za)?(a=$f(a,Nt),a=a!==null&&a.data==="&"?a:null,a!==null&&(t.memoizedState={dehydrated:a,treeContext:he!==null?{id:Ut,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},e=wc(a),e.return=t,t.child=e,Xa=t,za=null)):a=null,a===null)throw me(t);return t.lanes=536870912,null}return Bo(t,n)}var o=a.memoizedState;if(o!==null){var r=o.dehydrated;if(_l(t),i)if(t.flags&256)t.flags&=-257,t=Lp(a,t,e);else if(t.memoizedState!==null)t.child=a.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ua||zn(a,t,e,!1),i=(e&a.childLanes)!==0,Ua||i){if(n=ja,n!==null&&(r=Tu(n,e),r!==0&&r!==o.retryLane))throw o.retryLane=r,Xe(a,r),lt(n,a,r),Fl;$o(),t=Lp(a,t,e)}else a=o.treeContext,za=St(r.nextSibling),Xa=t,ca=!0,de=null,Nt=!1,a!==null&&Nc(t,a),t=Bo(t,n),t.flags|=4096;return t}return a=Zt(a.child,{mode:n.mode,children:n.children}),a.ref=t.ref,t.child=a,a.return=t,a}function Po(a,t){var e=t.ref;if(e===null)a!==null&&a.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(u(284));(a===null||a.ref!==e)&&(t.flags|=4194816)}}function $l(a,t,e,n,i){return Ke(t),e=Cl(a,t,e,n,void 0,i),n=Ml(),a!==null&&!Ua?(Rl(a,t,i),It(a,t,i)):(ca&&n&&fl(t),t.flags|=1,Va(a,t,e,i),t.child)}function Hp(a,t,e,n,i,o){return Ke(t),t.updateQueue=null,e=Yc(t,n,e,i),Pc(a),n=Ml(),a!==null&&!Ua?(Rl(a,t,o),It(a,t,o)):(ca&&n&&fl(t),t.flags|=1,Va(a,t,e,o),t.child)}function Bp(a,t,e,n,i){if(Ke(t),t.stateNode===null){var o=wn,r=e.contextType;typeof r=="object"&&r!==null&&(o=Qa(r)),o=new e(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Kl,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},jl(t),r=e.contextType,o.context=typeof r=="object"&&r!==null?Qa(r):wn,o.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Zl(t,e,r,n),o.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&Kl.enqueueReplaceState(o,o.state,null),xi(t,n,o,i),bi(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(a===null){o=t.stateNode;var p=t.memoizedProps,y=an(e,p);o.props=y;var S=o.context,C=e.contextType;r=wn,typeof C=="object"&&C!==null&&(r=Qa(C));var q=e.getDerivedStateFromProps;C=typeof q=="function"||typeof o.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,C||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p||S!==r)&&Sp(t,o,n,r),ye=!1;var E=t.memoizedState;o.state=E,xi(t,n,o,i),bi(),S=t.memoizedState,p||E!==S||ye?(typeof q=="function"&&(Zl(t,e,q,n),S=t.memoizedState),(y=ye||zp(t,e,y,n,E,S,r))?(C||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=S),o.props=n,o.state=S,o.context=r,n=y):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Nl(a,t),r=t.memoizedProps,C=an(e,r),o.props=C,q=t.pendingProps,E=o.context,S=e.contextType,y=wn,typeof S=="object"&&S!==null&&(y=Qa(S)),p=e.getDerivedStateFromProps,(S=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r!==q||E!==y)&&Sp(t,o,n,y),ye=!1,E=t.memoizedState,o.state=E,xi(t,n,o,i),bi();var _=t.memoizedState;r!==q||E!==_||ye||a!==null&&a.dependencies!==null&&ko(a.dependencies)?(typeof p=="function"&&(Zl(t,e,p,n),_=t.memoizedState),(C=ye||zp(t,e,C,n,E,_,y)||a!==null&&a.dependencies!==null&&ko(a.dependencies))?(S||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,_,y),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,_,y)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||r===a.memoizedProps&&E===a.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===a.memoizedProps&&E===a.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=_),o.props=n,o.state=_,o.context=y,n=C):(typeof o.componentDidUpdate!="function"||r===a.memoizedProps&&E===a.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===a.memoizedProps&&E===a.memoizedState||(t.flags|=1024),n=!1)}return o=n,Po(a,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,e=n&&typeof e.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,a!==null&&n?(t.child=We(t,a.child,null,i),t.child=We(t,null,e,i)):Va(a,t,e,i),t.memoizedState=o.state,a=t.child):a=It(a,t,i),a}function Pp(a,t,e,n){return Ve(),t.flags|=256,Va(a,t,e,n),t.child}var Wl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Il(a){return{baseLanes:a,cachePool:Ac()}}function ar(a,t,e){return a=a!==null?a.childLanes&~e:0,t&&(a|=gt),a}function Yp(a,t,e){var n=t.pendingProps,i=!1,o=(t.flags&128)!==0,r;if((r=o)||(r=a!==null&&a.memoizedState===null?!1:(Ra.current&2)!==0),r&&(i=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,a===null){if(ca){if(i?ve(t):we(),(a=za)?(a=$f(a,Nt),a=a!==null&&a.data!=="&"?a:null,a!==null&&(t.memoizedState={dehydrated:a,treeContext:he!==null?{id:Ut,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},e=wc(a),e.return=t,t.child=e,Xa=t,za=null)):a=null,a===null)throw me(t);return Dr(a)?t.lanes=32:t.lanes=536870912,null}var p=n.children;return n=n.fallback,i?(we(),i=t.mode,p=Yo({mode:"hidden",children:p},i),n=Qe(n,i,e,null),p.return=t,n.return=t,p.sibling=n,t.child=p,n=t.child,n.memoizedState=Il(e),n.childLanes=ar(a,r,e),t.memoizedState=Wl,Ni(null,n)):(ve(t),tr(t,p))}var y=a.memoizedState;if(y!==null&&(p=y.dehydrated,p!==null)){if(o)t.flags&256?(ve(t),t.flags&=-257,t=er(a,t,e)):t.memoizedState!==null?(we(),t.child=a.child,t.flags|=128,t=null):(we(),p=n.fallback,i=t.mode,n=Yo({mode:"visible",children:n.children},i),p=Qe(p,i,e,null),p.flags|=2,n.return=t,p.return=t,n.sibling=p,t.child=n,We(t,a.child,null,e),n=t.child,n.memoizedState=Il(e),n.childLanes=ar(a,r,e),t.memoizedState=Wl,t=Ni(null,n));else if(ve(t),Dr(p)){if(r=p.nextSibling&&p.nextSibling.dataset,r)var S=r.dgst;r=S,n=Error(u(419)),n.stack="",n.digest=r,fi({value:n,source:null,stack:null}),t=er(a,t,e)}else if(Ua||zn(a,t,e,!1),r=(e&a.childLanes)!==0,Ua||r){if(r=ja,r!==null&&(n=Tu(r,e),n!==0&&n!==y.retryLane))throw y.retryLane=n,Xe(a,n),lt(r,a,n),Fl;qr(p)||$o(),t=er(a,t,e)}else qr(p)?(t.flags|=192,t.child=a.child,t=null):(a=y.treeContext,za=St(p.nextSibling),Xa=t,ca=!0,de=null,Nt=!1,a!==null&&Nc(t,a),t=tr(t,n.children),t.flags|=4096);return t}return i?(we(),p=n.fallback,i=t.mode,y=a.child,S=y.sibling,n=Zt(y,{mode:"hidden",children:n.children}),n.subtreeFlags=y.subtreeFlags&65011712,S!==null?p=Zt(S,p):(p=Qe(p,i,e,null),p.flags|=2),p.return=t,n.return=t,n.sibling=p,t.child=n,Ni(null,n),n=t.child,p=a.child.memoizedState,p===null?p=Il(e):(i=p.cachePool,i!==null?(y=qa._currentValue,i=i.parent!==y?{parent:y,pool:y}:i):i=Ac(),p={baseLanes:p.baseLanes|e,cachePool:i}),n.memoizedState=p,n.childLanes=ar(a,r,e),t.memoizedState=Wl,Ni(a.child,n)):(ve(t),e=a.child,a=e.sibling,e=Zt(e,{mode:"visible",children:n.children}),e.return=t,e.sibling=null,a!==null&&(r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)),t.child=e,t.memoizedState=null,e)}function tr(a,t){return t=Yo({mode:"visible",children:t},a.mode),t.return=a,a.child=t}function Yo(a,t){return a=ft(22,a,null,t),a.lanes=0,a}function er(a,t,e){return We(t,a.child,null,e),a=tr(t,t.pendingProps.children),a.flags|=2,t.memoizedState=null,a}function Gp(a,t,e){a.lanes|=t;var n=a.alternate;n!==null&&(n.lanes|=t),yl(a.return,t,e)}function nr(a,t,e,n,i,o){var r=a.memoizedState;r===null?a.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:i,treeForkCount:o}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=e,r.tailMode=i,r.treeForkCount=o)}function Xp(a,t,e){var n=t.pendingProps,i=n.revealOrder,o=n.tail;n=n.children;var r=Ra.current,p=(r&2)!==0;if(p?(r=r&1|2,t.flags|=128):r&=1,G(Ra,r),Va(a,t,n,e),n=ca?pi:0,!p&&a!==null&&(a.flags&128)!==0)a:for(a=t.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Gp(a,e,t);else if(a.tag===19)Gp(a,e,t);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break a;for(;a.sibling===null;){if(a.return===null||a.return===t)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}switch(i){case"forwards":for(e=t.child,i=null;e!==null;)a=e.alternate,a!==null&&Ao(a)===null&&(i=e),e=e.sibling;e=i,e===null?(i=t.child,t.child=null):(i=e.sibling,e.sibling=null),nr(t,!1,i,e,o,n);break;case"backwards":case"unstable_legacy-backwards":for(e=null,i=t.child,t.child=null;i!==null;){if(a=i.alternate,a!==null&&Ao(a)===null){t.child=i;break}a=i.sibling,i.sibling=e,e=i,i=a}nr(t,!0,e,null,o,n);break;case"together":nr(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function It(a,t,e){if(a!==null&&(t.dependencies=a.dependencies),Ne|=t.lanes,(e&t.childLanes)===0)if(a!==null){if(zn(a,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(a!==null&&t.child!==a.child)throw Error(u(153));if(t.child!==null){for(a=t.child,e=Zt(a,a.pendingProps),t.child=e,e.return=t;a.sibling!==null;)a=a.sibling,e=e.sibling=Zt(a,a.pendingProps),e.return=t;e.sibling=null}return t.child}function ir(a,t){return(a.lanes&t)!==0?!0:(a=a.dependencies,!!(a!==null&&ko(a)))}function Jm(a,t,e){switch(t.tag){case 3:Wa(t,t.stateNode.containerInfo),ge(t,qa,a.memoizedState.cache),Ve();break;case 27:case 5:Fn(t);break;case 4:Wa(t,t.stateNode.containerInfo);break;case 10:ge(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,_l(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ve(t),t.flags|=128,null):(e&t.child.childLanes)!==0?Yp(a,t,e):(ve(t),a=It(a,t,e),a!==null?a.sibling:null);ve(t);break;case 19:var i=(a.flags&128)!==0;if(n=(e&t.childLanes)!==0,n||(zn(a,t,e,!1),n=(e&t.childLanes)!==0),i){if(n)return Xp(a,t,e);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Ra,Ra.current),n)break;return null;case 22:return t.lanes=0,Dp(a,t,e,t.pendingProps);case 24:ge(t,qa,a.memoizedState.cache)}return It(a,t,e)}function Qp(a,t,e){if(a!==null)if(a.memoizedProps!==t.pendingProps)Ua=!0;else{if(!ir(a,e)&&(t.flags&128)===0)return Ua=!1,Jm(a,t,e);Ua=(a.flags&131072)!==0}else Ua=!1,ca&&(t.flags&1048576)!==0&&jc(t,pi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var n=t.pendingProps;if(a=Fe(t.elementType),t.type=a,typeof a=="function")ul(a)?(n=an(a,n),t.tag=1,t=Bp(null,t,a,n,e)):(t.tag=0,t=$l(null,t,a,n,e));else{if(a!=null){var i=a.$$typeof;if(i===ta){t.tag=11,t=Rp(null,t,a,n,e);break a}else if(i===F){t.tag=14,t=Op(null,t,a,n,e);break a}}throw t=Gt(a)||a,Error(u(306,t,""))}}return t;case 0:return $l(a,t,t.type,t.pendingProps,e);case 1:return n=t.type,i=an(n,t.pendingProps),Bp(a,t,n,i,e);case 3:a:{if(Wa(t,t.stateNode.containerInfo),a===null)throw Error(u(387));n=t.pendingProps;var o=t.memoizedState;i=o.element,Nl(a,t),xi(t,n,null,e);var r=t.memoizedState;if(n=r.cache,ge(t,qa,n),n!==o.cache&&bl(t,[qa],e,!0),bi(),n=r.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Pp(a,t,n,e);break a}else if(n!==i){i=wt(Error(u(424)),t),fi(i),t=Pp(a,t,n,e);break a}else for(a=t.stateNode.containerInfo,a.nodeType===9?a=a.body:a=a.nodeName==="HTML"?a.ownerDocument.body:a,za=St(a.firstChild),Xa=t,ca=!0,de=null,Nt=!0,e=Dc(t,null,n,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Ve(),n===i){t=It(a,t,e);break a}Va(a,t,n,e)}t=t.child}return t;case 26:return Po(a,t),a===null?(e=nh(t.type,null,t.pendingProps,null))?t.memoizedState=e:ca||(e=t.type,a=t.pendingProps,n=is(oa.current).createElement(e),n[Ga]=t,n[tt]=a,Za(n,e,a),Pa(n),t.stateNode=n):t.memoizedState=nh(t.type,a.memoizedProps,t.pendingProps,a.memoizedState),null;case 27:return Fn(t),a===null&&ca&&(n=t.stateNode=ah(t.type,t.pendingProps,oa.current),Xa=t,Nt=!0,i=za,_e(t.type)?(Ur=i,za=St(n.firstChild)):za=i),Va(a,t,t.pendingProps.children,e),Po(a,t),a===null&&(t.flags|=4194304),t.child;case 5:return a===null&&ca&&((i=n=za)&&(n=z0(n,t.type,t.pendingProps,Nt),n!==null?(t.stateNode=n,Xa=t,za=St(n.firstChild),Nt=!1,i=!0):i=!1),i||me(t)),Fn(t),i=t.type,o=t.pendingProps,r=a!==null?a.memoizedProps:null,n=o.children,Mr(i,o)?n=null:r!==null&&Mr(i,r)&&(t.flags|=32),t.memoizedState!==null&&(i=Cl(a,t,Bm,null,null,e),Hi._currentValue=i),Po(a,t),Va(a,t,n,e),t.child;case 6:return a===null&&ca&&((a=e=za)&&(e=S0(e,t.pendingProps,Nt),e!==null?(t.stateNode=e,Xa=t,za=null,a=!0):a=!1),a||me(t)),null;case 13:return Yp(a,t,e);case 4:return Wa(t,t.stateNode.containerInfo),n=t.pendingProps,a===null?t.child=We(t,null,n,e):Va(a,t,n,e),t.child;case 11:return Rp(a,t,t.type,t.pendingProps,e);case 7:return Va(a,t,t.pendingProps,e),t.child;case 8:return Va(a,t,t.pendingProps.children,e),t.child;case 12:return Va(a,t,t.pendingProps.children,e),t.child;case 10:return n=t.pendingProps,ge(t,t.type,n.value),Va(a,t,n.children,e),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Ke(t),i=Qa(i),n=n(i),t.flags|=1,Va(a,t,n,e),t.child;case 14:return Op(a,t,t.type,t.pendingProps,e);case 15:return qp(a,t,t.type,t.pendingProps,e);case 19:return Xp(a,t,e);case 31:return Km(a,t,e);case 22:return Dp(a,t,e,t.pendingProps);case 24:return Ke(t),n=Qa(qa),a===null?(i=wl(),i===null&&(i=ja,o=xl(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=e),i=o),t.memoizedState={parent:n,cache:i},jl(t),ge(t,qa,i)):((a.lanes&e)!==0&&(Nl(a,t),xi(t,null,null,e),bi()),i=a.memoizedState,o=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ge(t,qa,n)):(n=o.cache,ge(t,qa,n),n!==i.cache&&bl(t,[qa],e,!0))),Va(a,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function ae(a){a.flags|=4}function or(a,t,e,n,i){if((t=(a.mode&32)!==0)&&(t=!1),t){if(a.flags|=16777216,(i&335544128)===i)if(a.stateNode.complete)a.flags|=8192;else if(xf())a.flags|=8192;else throw $e=So,kl}else a.flags&=-16777217}function Vp(a,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!rh(t))if(xf())a.flags|=8192;else throw $e=So,kl}function Go(a,t){t!==null&&(a.flags|=4),a.flags&16384&&(t=a.tag!==22?zu():536870912,a.lanes|=t,Un|=t)}function zi(a,t){if(!ca)switch(a.tailMode){case"hidden":t=a.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?a.tail=null:e.sibling=null;break;case"collapsed":e=a.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t||a.tail===null?a.tail=null:a.tail.sibling=null:n.sibling=null}}function Sa(a){var t=a.alternate!==null&&a.alternate.child===a.child,e=0,n=0;if(t)for(var i=a.child;i!==null;)e|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=a,i=i.sibling;else for(i=a.child;i!==null;)e|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=a,i=i.sibling;return a.subtreeFlags|=n,a.childLanes=e,t}function Fm(a,t,e){var n=t.pendingProps;switch(hl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sa(t),null;case 1:return Sa(t),null;case 3:return e=t.stateNode,n=null,a!==null&&(n=a.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ft(qa),Ma(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(a===null||a.child===null)&&(Nn(t)?ae(t):a===null||a.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ml())),Sa(t),null;case 26:var i=t.type,o=t.memoizedState;return a===null?(ae(t),o!==null?(Sa(t),Vp(t,o)):(Sa(t),or(t,i,null,n,e))):o?o!==a.memoizedState?(ae(t),Sa(t),Vp(t,o)):(Sa(t),t.flags&=-16777217):(a=a.memoizedProps,a!==n&&ae(t),Sa(t),or(t,i,a,n,e)),null;case 27:if(Ii(t),e=oa.current,i=t.type,a!==null&&t.stateNode!=null)a.memoizedProps!==n&&ae(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Sa(t),null}a=V.current,Nn(t)?zc(t):(a=ah(i,n,e),t.stateNode=a,ae(t))}return Sa(t),null;case 5:if(Ii(t),i=t.type,a!==null&&t.stateNode!=null)a.memoizedProps!==n&&ae(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Sa(t),null}if(o=V.current,Nn(t))zc(t);else{var r=is(oa.current);switch(o){case 1:o=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:o=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":o=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":o=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":o=r.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}o[Ga]=t,o[tt]=n;a:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)o.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break a;for(;r.sibling===null;){if(r.return===null||r.return===t)break a;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=o;a:switch(Za(o,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break a;case"img":n=!0;break a;default:n=!1}n&&ae(t)}}return Sa(t),or(t,t.type,a===null?null:a.memoizedProps,t.pendingProps,e),null;case 6:if(a&&t.stateNode!=null)a.memoizedProps!==n&&ae(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(a=oa.current,Nn(t)){if(a=t.stateNode,e=t.memoizedProps,n=null,i=Xa,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}a[Ga]=t,a=!!(a.nodeValue===e||n!==null&&n.suppressHydrationWarning===!0||Gf(a.nodeValue,e)),a||me(t,!0)}else a=is(a).createTextNode(n),a[Ga]=t,t.stateNode=a}return Sa(t),null;case 31:if(e=t.memoizedState,a===null||a.memoizedState!==null){if(n=Nn(t),e!==null){if(a===null){if(!n)throw Error(u(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(557));a[Ga]=t}else Ve(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Sa(t),a=!1}else e=ml(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=e),a=!0;if(!a)return t.flags&256?(dt(t),t):(dt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Sa(t),null;case 13:if(n=t.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(i=Nn(t),n!==null&&n.dehydrated!==null){if(a===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Ga]=t}else Ve(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Sa(t),i=!1}else i=ml(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(dt(t),t):(dt(t),null)}return dt(t),(t.flags&128)!==0?(t.lanes=e,t):(e=n!==null,a=a!==null&&a.memoizedState!==null,e&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048)),e!==a&&e&&(t.child.flags|=8192),Go(t,t.updateQueue),Sa(t),null);case 4:return Ma(),a===null&&Er(t.stateNode.containerInfo),Sa(t),null;case 10:return Ft(t.type),Sa(t),null;case 19:if(D(Ra),n=t.memoizedState,n===null)return Sa(t),null;if(i=(t.flags&128)!==0,o=n.rendering,o===null)if(i)zi(n,!1);else{if(Aa!==0||a!==null&&(a.flags&128)!==0)for(a=t.child;a!==null;){if(o=Ao(a),o!==null){for(t.flags|=128,zi(n,!1),a=o.updateQueue,t.updateQueue=a,Go(t,a),t.subtreeFlags=0,a=e,e=t.child;e!==null;)vc(e,a),e=e.sibling;return G(Ra,Ra.current&1|2),ca&&Kt(t,n.treeForkCount),t.child}a=a.sibling}n.tail!==null&&rt()>Ko&&(t.flags|=128,i=!0,zi(n,!1),t.lanes=4194304)}else{if(!i)if(a=Ao(o),a!==null){if(t.flags|=128,i=!0,a=a.updateQueue,t.updateQueue=a,Go(t,a),zi(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!ca)return Sa(t),null}else 2*rt()-n.renderingStartTime>Ko&&e!==536870912&&(t.flags|=128,i=!0,zi(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(a=n.last,a!==null?a.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(a=n.tail,n.rendering=a,n.tail=a.sibling,n.renderingStartTime=rt(),a.sibling=null,e=Ra.current,G(Ra,i?e&1|2:e&1),ca&&Kt(t,n.treeForkCount),a):(Sa(t),null);case 22:case 23:return dt(t),Tl(),n=t.memoizedState!==null,a!==null?a.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(e&536870912)!==0&&(t.flags&128)===0&&(Sa(t),t.subtreeFlags&6&&(t.flags|=8192)):Sa(t),e=t.updateQueue,e!==null&&Go(t,e.retryQueue),e=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(t.flags|=2048),a!==null&&D(Je),null;case 24:return e=null,a!==null&&(e=a.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Ft(qa),Sa(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function $m(a,t){switch(hl(t),t.tag){case 1:return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 3:return Ft(qa),Ma(),a=t.flags,(a&65536)!==0&&(a&128)===0?(t.flags=a&-65537|128,t):null;case 26:case 27:case 5:return Ii(t),null;case 31:if(t.memoizedState!==null){if(dt(t),t.alternate===null)throw Error(u(340));Ve()}return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 13:if(dt(t),a=t.memoizedState,a!==null&&a.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ve()}return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 19:return D(Ra),null;case 4:return Ma(),null;case 10:return Ft(t.type),null;case 22:case 23:return dt(t),Tl(),a!==null&&D(Je),a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 24:return Ft(qa),null;case 25:return null;default:return null}}function Zp(a,t){switch(hl(t),t.tag){case 3:Ft(qa),Ma();break;case 26:case 27:case 5:Ii(t);break;case 4:Ma();break;case 31:t.memoizedState!==null&&dt(t);break;case 13:dt(t);break;case 19:D(Ra);break;case 10:Ft(t.type);break;case 22:case 23:dt(t),Tl(),a!==null&&D(Je);break;case 24:Ft(qa)}}function Si(a,t){try{var e=t.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var i=n.next;e=i;do{if((e.tag&a)===a){n=void 0;var o=e.create,r=e.inst;n=o(),r.destroy=n}e=e.next}while(e!==i)}}catch(p){ya(t,t.return,p)}}function ke(a,t,e){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&a)===a){var r=n.inst,p=r.destroy;if(p!==void 0){r.destroy=void 0,i=t;var y=e,S=p;try{S()}catch(C){ya(i,y,C)}}}n=n.next}while(n!==o)}}catch(C){ya(t,t.return,C)}}function Kp(a){var t=a.updateQueue;if(t!==null){var e=a.stateNode;try{Lc(t,e)}catch(n){ya(a,a.return,n)}}}function Jp(a,t,e){e.props=an(a.type,a.memoizedProps),e.state=a.memoizedState;try{e.componentWillUnmount()}catch(n){ya(a,t,n)}}function Ei(a,t){try{var e=a.ref;if(e!==null){switch(a.tag){case 26:case 27:case 5:var n=a.stateNode;break;case 30:n=a.stateNode;break;default:n=a.stateNode}typeof e=="function"?a.refCleanup=e(n):e.current=n}}catch(i){ya(a,t,i)}}function Ht(a,t){var e=a.ref,n=a.refCleanup;if(e!==null)if(typeof n=="function")try{n()}catch(i){ya(a,t,i)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(i){ya(a,t,i)}else e.current=null}function Fp(a){var t=a.type,e=a.memoizedProps,n=a.stateNode;try{a:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&n.focus();break a;case"img":e.src?n.src=e.src:e.srcSet&&(n.srcset=e.srcSet)}}catch(i){ya(a,a.return,i)}}function sr(a,t,e){try{var n=a.stateNode;x0(n,a.type,e,t),n[tt]=t}catch(i){ya(a,a.return,i)}}function $p(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&_e(a.type)||a.tag===4}function lr(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||$p(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&_e(a.type)||a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function rr(a,t,e){var n=a.tag;if(n===5||n===6)a=a.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(a,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(a),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Qt));else if(n!==4&&(n===27&&_e(a.type)&&(e=a.stateNode,t=null),a=a.child,a!==null))for(rr(a,t,e),a=a.sibling;a!==null;)rr(a,t,e),a=a.sibling}function Xo(a,t,e){var n=a.tag;if(n===5||n===6)a=a.stateNode,t?e.insertBefore(a,t):e.appendChild(a);else if(n!==4&&(n===27&&_e(a.type)&&(e=a.stateNode),a=a.child,a!==null))for(Xo(a,t,e),a=a.sibling;a!==null;)Xo(a,t,e),a=a.sibling}function Wp(a){var t=a.stateNode,e=a.memoizedProps;try{for(var n=a.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Za(t,n,e),t[Ga]=a,t[tt]=e}catch(o){ya(a,a.return,o)}}var te=!1,La=!1,ur=!1,Ip=typeof WeakSet=="function"?WeakSet:Set,Ya=null;function Wm(a,t){if(a=a.containerInfo,Ar=ps,a=pc(a),el(a)){if("selectionStart"in a)var e={start:a.selectionStart,end:a.selectionEnd};else a:{e=(e=a.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{e.nodeType,o.nodeType}catch{e=null;break a}var r=0,p=-1,y=-1,S=0,C=0,q=a,E=null;t:for(;;){for(var _;q!==e||i!==0&&q.nodeType!==3||(p=r+i),q!==o||n!==0&&q.nodeType!==3||(y=r+n),q.nodeType===3&&(r+=q.nodeValue.length),(_=q.firstChild)!==null;)E=q,q=_;for(;;){if(q===a)break t;if(E===e&&++S===i&&(p=r),E===o&&++C===n&&(y=r),(_=q.nextSibling)!==null)break;q=E,E=q.parentNode}q=_}e=p===-1||y===-1?null:{start:p,end:y}}else e=null}e=e||{start:0,end:0}}else e=null;for(Cr={focusedElem:a,selectionRange:e},ps=!1,Ya=t;Ya!==null;)if(t=Ya,a=t.child,(t.subtreeFlags&1028)!==0&&a!==null)a.return=t,Ya=a;else for(;Ya!==null;){switch(t=Ya,o=t.alternate,a=t.flags,t.tag){case 0:if((a&4)!==0&&(a=t.updateQueue,a=a!==null?a.events:null,a!==null))for(e=0;e<a.length;e++)i=a[e],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((a&1024)!==0&&o!==null){a=void 0,e=t,i=o.memoizedProps,o=o.memoizedState,n=e.stateNode;try{var Q=an(e.type,i);a=n.getSnapshotBeforeUpdate(Q,o),n.__reactInternalSnapshotBeforeUpdate=a}catch(J){ya(e,e.return,J)}}break;case 3:if((a&1024)!==0){if(a=t.stateNode.containerInfo,e=a.nodeType,e===9)Or(a);else if(e===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Or(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(u(163))}if(a=t.sibling,a!==null){a.return=t.return,Ya=a;break}Ya=t.return}}function af(a,t,e){var n=e.flags;switch(e.tag){case 0:case 11:case 15:ne(a,e),n&4&&Si(5,e);break;case 1:if(ne(a,e),n&4)if(a=e.stateNode,t===null)try{a.componentDidMount()}catch(r){ya(e,e.return,r)}else{var i=an(e.type,t.memoizedProps);t=t.memoizedState;try{a.componentDidUpdate(i,t,a.__reactInternalSnapshotBeforeUpdate)}catch(r){ya(e,e.return,r)}}n&64&&Kp(e),n&512&&Ei(e,e.return);break;case 3:if(ne(a,e),n&64&&(a=e.updateQueue,a!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{Lc(a,t)}catch(r){ya(e,e.return,r)}}break;case 27:t===null&&n&4&&Wp(e);case 26:case 5:ne(a,e),t===null&&n&4&&Fp(e),n&512&&Ei(e,e.return);break;case 12:ne(a,e);break;case 31:ne(a,e),n&4&&nf(a,e);break;case 13:ne(a,e),n&4&&of(a,e),n&64&&(a=e.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(e=l0.bind(null,e),E0(a,e))));break;case 22:if(n=e.memoizedState!==null||te,!n){t=t!==null&&t.memoizedState!==null||La,i=te;var o=La;te=n,(La=t)&&!o?ie(a,e,(e.subtreeFlags&8772)!==0):ne(a,e),te=i,La=o}break;case 30:break;default:ne(a,e)}}function tf(a){var t=a.alternate;t!==null&&(a.alternate=null,tf(t)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(t=a.stateNode,t!==null&&Hs(t)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var Ea=null,nt=!1;function ee(a,t,e){for(e=e.child;e!==null;)ef(a,t,e),e=e.sibling}function ef(a,t,e){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount($n,e)}catch{}switch(e.tag){case 26:La||Ht(e,t),ee(a,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:La||Ht(e,t);var n=Ea,i=nt;_e(e.type)&&(Ea=e.stateNode,nt=!1),ee(a,t,e),Di(e.stateNode),Ea=n,nt=i;break;case 5:La||Ht(e,t);case 6:if(n=Ea,i=nt,Ea=null,ee(a,t,e),Ea=n,nt=i,Ea!==null)if(nt)try{(Ea.nodeType===9?Ea.body:Ea.nodeName==="HTML"?Ea.ownerDocument.body:Ea).removeChild(e.stateNode)}catch(o){ya(e,t,o)}else try{Ea.removeChild(e.stateNode)}catch(o){ya(e,t,o)}break;case 18:Ea!==null&&(nt?(a=Ea,Jf(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.stateNode),Qn(a)):Jf(Ea,e.stateNode));break;case 4:n=Ea,i=nt,Ea=e.stateNode.containerInfo,nt=!0,ee(a,t,e),Ea=n,nt=i;break;case 0:case 11:case 14:case 15:ke(2,e,t),La||ke(4,e,t),ee(a,t,e);break;case 1:La||(Ht(e,t),n=e.stateNode,typeof n.componentWillUnmount=="function"&&Jp(e,t,n)),ee(a,t,e);break;case 21:ee(a,t,e);break;case 22:La=(n=La)||e.memoizedState!==null,ee(a,t,e),La=n;break;default:ee(a,t,e)}}function nf(a,t){if(t.memoizedState===null&&(a=t.alternate,a!==null&&(a=a.memoizedState,a!==null))){a=a.dehydrated;try{Qn(a)}catch(e){ya(t,t.return,e)}}}function of(a,t){if(t.memoizedState===null&&(a=t.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{Qn(a)}catch(e){ya(t,t.return,e)}}function Im(a){switch(a.tag){case 31:case 13:case 19:var t=a.stateNode;return t===null&&(t=a.stateNode=new Ip),t;case 22:return a=a.stateNode,t=a._retryCache,t===null&&(t=a._retryCache=new Ip),t;default:throw Error(u(435,a.tag))}}function Qo(a,t){var e=Im(a);t.forEach(function(n){if(!e.has(n)){e.add(n);var i=r0.bind(null,a,n);n.then(i,i)}})}function it(a,t){var e=t.deletions;if(e!==null)for(var n=0;n<e.length;n++){var i=e[n],o=a,r=t,p=r;a:for(;p!==null;){switch(p.tag){case 27:if(_e(p.type)){Ea=p.stateNode,nt=!1;break a}break;case 5:Ea=p.stateNode,nt=!1;break a;case 3:case 4:Ea=p.stateNode.containerInfo,nt=!0;break a}p=p.return}if(Ea===null)throw Error(u(160));ef(o,r,i),Ea=null,nt=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)sf(t,a),t=t.sibling}var Ot=null;function sf(a,t){var e=a.alternate,n=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:it(t,a),ot(a),n&4&&(ke(3,a,a.return),Si(3,a),ke(5,a,a.return));break;case 1:it(t,a),ot(a),n&512&&(La||e===null||Ht(e,e.return)),n&64&&te&&(a=a.updateQueue,a!==null&&(n=a.callbacks,n!==null&&(e=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=e===null?n:e.concat(n))));break;case 26:var i=Ot;if(it(t,a),ot(a),n&512&&(La||e===null||Ht(e,e.return)),n&4){var o=e!==null?e.memoizedState:null;if(n=a.memoizedState,e===null)if(n===null)if(a.stateNode===null){a:{n=a.type,e=a.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":o=i.getElementsByTagName("title")[0],(!o||o[ai]||o[Ga]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(n),i.head.insertBefore(o,i.querySelector("head > title"))),Za(o,n,e),o[Ga]=a,Pa(o),n=o;break a;case"link":var r=sh("link","href",i).get(n+(e.href||""));if(r){for(var p=0;p<r.length;p++)if(o=r[p],o.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&o.getAttribute("rel")===(e.rel==null?null:e.rel)&&o.getAttribute("title")===(e.title==null?null:e.title)&&o.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){r.splice(p,1);break t}}o=i.createElement(n),Za(o,n,e),i.head.appendChild(o);break;case"meta":if(r=sh("meta","content",i).get(n+(e.content||""))){for(p=0;p<r.length;p++)if(o=r[p],o.getAttribute("content")===(e.content==null?null:""+e.content)&&o.getAttribute("name")===(e.name==null?null:e.name)&&o.getAttribute("property")===(e.property==null?null:e.property)&&o.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&o.getAttribute("charset")===(e.charSet==null?null:e.charSet)){r.splice(p,1);break t}}o=i.createElement(n),Za(o,n,e),i.head.appendChild(o);break;default:throw Error(u(468,n))}o[Ga]=a,Pa(o),n=o}a.stateNode=n}else lh(i,a.type,a.stateNode);else a.stateNode=oh(i,n,a.memoizedProps);else o!==n?(o===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):o.count--,n===null?lh(i,a.type,a.stateNode):oh(i,n,a.memoizedProps)):n===null&&a.stateNode!==null&&sr(a,a.memoizedProps,e.memoizedProps)}break;case 27:it(t,a),ot(a),n&512&&(La||e===null||Ht(e,e.return)),e!==null&&n&4&&sr(a,a.memoizedProps,e.memoizedProps);break;case 5:if(it(t,a),ot(a),n&512&&(La||e===null||Ht(e,e.return)),a.flags&32){i=a.stateNode;try{dn(i,"")}catch(Q){ya(a,a.return,Q)}}n&4&&a.stateNode!=null&&(i=a.memoizedProps,sr(a,i,e!==null?e.memoizedProps:i)),n&1024&&(ur=!0);break;case 6:if(it(t,a),ot(a),n&4){if(a.stateNode===null)throw Error(u(162));n=a.memoizedProps,e=a.stateNode;try{e.nodeValue=n}catch(Q){ya(a,a.return,Q)}}break;case 3:if(ls=null,i=Ot,Ot=os(t.containerInfo),it(t,a),Ot=i,ot(a),n&4&&e!==null&&e.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(Q){ya(a,a.return,Q)}ur&&(ur=!1,lf(a));break;case 4:n=Ot,Ot=os(a.stateNode.containerInfo),it(t,a),ot(a),Ot=n;break;case 12:it(t,a),ot(a);break;case 31:it(t,a),ot(a),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,Qo(a,n)));break;case 13:it(t,a),ot(a),a.child.flags&8192&&a.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Zo=rt()),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,Qo(a,n)));break;case 22:i=a.memoizedState!==null;var y=e!==null&&e.memoizedState!==null,S=te,C=La;if(te=S||i,La=C||y,it(t,a),La=C,te=S,ot(a),n&8192)a:for(t=a.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(e===null||y||te||La||tn(a)),e=null,t=a;;){if(t.tag===5||t.tag===26){if(e===null){y=e=t;try{if(o=y.stateNode,i)r=o.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{p=y.stateNode;var q=y.memoizedProps.style,E=q!=null&&q.hasOwnProperty("display")?q.display:null;p.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(Q){ya(y,y.return,Q)}}}else if(t.tag===6){if(e===null){y=t;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch(Q){ya(y,y.return,Q)}}}else if(t.tag===18){if(e===null){y=t;try{var _=y.stateNode;i?Ff(_,!0):Ff(y.stateNode,!1)}catch(Q){ya(y,y.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===a)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break a;for(;t.sibling===null;){if(t.return===null||t.return===a)break a;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=a.updateQueue,n!==null&&(e=n.retryQueue,e!==null&&(n.retryQueue=null,Qo(a,e))));break;case 19:it(t,a),ot(a),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,Qo(a,n)));break;case 30:break;case 21:break;default:it(t,a),ot(a)}}function ot(a){var t=a.flags;if(t&2){try{for(var e,n=a.return;n!==null;){if($p(n)){e=n;break}n=n.return}if(e==null)throw Error(u(160));switch(e.tag){case 27:var i=e.stateNode,o=lr(a);Xo(a,o,i);break;case 5:var r=e.stateNode;e.flags&32&&(dn(r,""),e.flags&=-33);var p=lr(a);Xo(a,p,r);break;case 3:case 4:var y=e.stateNode.containerInfo,S=lr(a);rr(a,S,y);break;default:throw Error(u(161))}}catch(C){ya(a,a.return,C)}a.flags&=-3}t&4096&&(a.flags&=-4097)}function lf(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var t=a;lf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),a=a.sibling}}function ne(a,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)af(a,t.alternate,t),t=t.sibling}function tn(a){for(a=a.child;a!==null;){var t=a;switch(t.tag){case 0:case 11:case 14:case 15:ke(4,t,t.return),tn(t);break;case 1:Ht(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Jp(t,t.return,e),tn(t);break;case 27:Di(t.stateNode);case 26:case 5:Ht(t,t.return),tn(t);break;case 22:t.memoizedState===null&&tn(t);break;case 30:tn(t);break;default:tn(t)}a=a.sibling}}function ie(a,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=a,o=t,r=o.flags;switch(o.tag){case 0:case 11:case 15:ie(i,o,e),Si(4,o);break;case 1:if(ie(i,o,e),n=o,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(S){ya(n,n.return,S)}if(n=o,i=n.updateQueue,i!==null){var p=n.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)Uc(y[i],p)}catch(S){ya(n,n.return,S)}}e&&r&64&&Kp(o),Ei(o,o.return);break;case 27:Wp(o);case 26:case 5:ie(i,o,e),e&&n===null&&r&4&&Fp(o),Ei(o,o.return);break;case 12:ie(i,o,e);break;case 31:ie(i,o,e),e&&r&4&&nf(i,o);break;case 13:ie(i,o,e),e&&r&4&&of(i,o);break;case 22:o.memoizedState===null&&ie(i,o,e),Ei(o,o.return);break;case 30:break;default:ie(i,o,e)}t=t.sibling}}function cr(a,t){var e=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(a!=null&&a.refCount++,e!=null&&hi(e))}function pr(a,t){a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&hi(a))}function qt(a,t,e,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rf(a,t,e,n),t=t.sibling}function rf(a,t,e,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:qt(a,t,e,n),i&2048&&Si(9,t);break;case 1:qt(a,t,e,n);break;case 3:qt(a,t,e,n),i&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&hi(a)));break;case 12:if(i&2048){qt(a,t,e,n),a=t.stateNode;try{var o=t.memoizedProps,r=o.id,p=o.onPostCommit;typeof p=="function"&&p(r,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(y){ya(t,t.return,y)}}else qt(a,t,e,n);break;case 31:qt(a,t,e,n);break;case 13:qt(a,t,e,n);break;case 23:break;case 22:o=t.stateNode,r=t.alternate,t.memoizedState!==null?o._visibility&2?qt(a,t,e,n):Ti(a,t):o._visibility&2?qt(a,t,e,n):(o._visibility|=2,On(a,t,e,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&cr(r,t);break;case 24:qt(a,t,e,n),i&2048&&pr(t.alternate,t);break;default:qt(a,t,e,n)}}function On(a,t,e,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=a,r=t,p=e,y=n,S=r.flags;switch(r.tag){case 0:case 11:case 15:On(o,r,p,y,i),Si(8,r);break;case 23:break;case 22:var C=r.stateNode;r.memoizedState!==null?C._visibility&2?On(o,r,p,y,i):Ti(o,r):(C._visibility|=2,On(o,r,p,y,i)),i&&S&2048&&cr(r.alternate,r);break;case 24:On(o,r,p,y,i),i&&S&2048&&pr(r.alternate,r);break;default:On(o,r,p,y,i)}t=t.sibling}}function Ti(a,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=a,n=t,i=n.flags;switch(n.tag){case 22:Ti(e,n),i&2048&&cr(n.alternate,n);break;case 24:Ti(e,n),i&2048&&pr(n.alternate,n);break;default:Ti(e,n)}t=t.sibling}}var _i=8192;function qn(a,t,e){if(a.subtreeFlags&_i)for(a=a.child;a!==null;)uf(a,t,e),a=a.sibling}function uf(a,t,e){switch(a.tag){case 26:qn(a,t,e),a.flags&_i&&a.memoizedState!==null&&H0(e,Ot,a.memoizedState,a.memoizedProps);break;case 5:qn(a,t,e);break;case 3:case 4:var n=Ot;Ot=os(a.stateNode.containerInfo),qn(a,t,e),Ot=n;break;case 22:a.memoizedState===null&&(n=a.alternate,n!==null&&n.memoizedState!==null?(n=_i,_i=16777216,qn(a,t,e),_i=n):qn(a,t,e));break;default:qn(a,t,e)}}function cf(a){var t=a.alternate;if(t!==null&&(a=t.child,a!==null)){t.child=null;do t=a.sibling,a.sibling=null,a=t;while(a!==null)}}function Ai(a){var t=a.deletions;if((a.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var n=t[e];Ya=n,ff(n,a)}cf(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)pf(a),a=a.sibling}function pf(a){switch(a.tag){case 0:case 11:case 15:Ai(a),a.flags&2048&&ke(9,a,a.return);break;case 3:Ai(a);break;case 12:Ai(a);break;case 22:var t=a.stateNode;a.memoizedState!==null&&t._visibility&2&&(a.return===null||a.return.tag!==13)?(t._visibility&=-3,Vo(a)):Ai(a);break;default:Ai(a)}}function Vo(a){var t=a.deletions;if((a.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var n=t[e];Ya=n,ff(n,a)}cf(a)}for(a=a.child;a!==null;){switch(t=a,t.tag){case 0:case 11:case 15:ke(8,t,t.return),Vo(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,Vo(t));break;default:Vo(t)}a=a.sibling}}function ff(a,t){for(;Ya!==null;){var e=Ya;switch(e.tag){case 0:case 11:case 15:ke(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var n=e.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:hi(e.memoizedState.cache)}if(n=e.child,n!==null)n.return=e,Ya=n;else a:for(e=a;Ya!==null;){n=Ya;var i=n.sibling,o=n.return;if(tf(n),n===e){Ya=null;break a}if(i!==null){i.return=o,Ya=i;break a}Ya=o}}}var a0={getCacheForType:function(a){var t=Qa(qa),e=t.data.get(a);return e===void 0&&(e=a(),t.data.set(a,e)),e},cacheSignal:function(){return Qa(qa).controller.signal}},t0=typeof WeakMap=="function"?WeakMap:Map,ha=0,ja=null,sa=null,ra=0,ga=0,mt=null,je=!1,Dn=!1,fr=!1,oe=0,Aa=0,Ne=0,en=0,hr=0,gt=0,Un=0,Ci=null,st=null,dr=!1,Zo=0,hf=0,Ko=1/0,Jo=null,ze=null,Ha=0,Se=null,Ln=null,se=0,mr=0,gr=null,df=null,Mi=0,yr=null;function yt(){return(ha&2)!==0&&ra!==0?ra&-ra:M.T!==null?jr():_u()}function mf(){if(gt===0)if((ra&536870912)===0||ca){var a=eo;eo<<=1,(eo&3932160)===0&&(eo=262144),gt=a}else gt=536870912;return a=ht.current,a!==null&&(a.flags|=32),gt}function lt(a,t,e){(a===ja&&(ga===2||ga===9)||a.cancelPendingCommit!==null)&&(Hn(a,0),Ee(a,ra,gt,!1)),In(a,e),((ha&2)===0||a!==ja)&&(a===ja&&((ha&2)===0&&(en|=e),Aa===4&&Ee(a,ra,gt,!1)),Bt(a))}function gf(a,t,e){if((ha&6)!==0)throw Error(u(327));var n=!e&&(t&127)===0&&(t&a.expiredLanes)===0||Wn(a,t),i=n?i0(a,t):xr(a,t,!0),o=n;do{if(i===0){Dn&&!n&&Ee(a,t,0,!1);break}else{if(e=a.current.alternate,o&&!e0(e)){i=xr(a,t,!1),o=!1;continue}if(i===2){if(o=t,a.errorRecoveryDisabledLanes&o)var r=0;else r=a.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;a:{var p=a;i=Ci;var y=p.current.memoizedState.isDehydrated;if(y&&(Hn(p,r).flags|=256),r=xr(p,r,!1),r!==2){if(fr&&!y){p.errorRecoveryDisabledLanes|=o,en|=o,i=4;break a}o=st,st=i,o!==null&&(st===null?st=o:st.push.apply(st,o))}i=r}if(o=!1,i!==2)continue}}if(i===1){Hn(a,0),Ee(a,t,0,!0);break}a:{switch(n=a,o=i,o){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ee(n,t,gt,!je);break a;case 2:st=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Zo+300-rt(),10<i)){if(Ee(n,t,gt,!je),io(n,0,!0)!==0)break a;se=t,n.timeoutHandle=Zf(yf.bind(null,n,e,st,Jo,dr,t,gt,en,Un,je,o,"Throttled",-0,0),i);break a}yf(n,e,st,Jo,dr,t,gt,en,Un,je,o,null,-0,0)}}break}while(!0);Bt(a)}function yf(a,t,e,n,i,o,r,p,y,S,C,q,E,_){if(a.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qt},uf(t,o,q);var Q=(o&62914560)===o?Zo-rt():(o&4194048)===o?hf-rt():0;if(Q=B0(q,Q),Q!==null){se=o,a.cancelPendingCommit=Q(zf.bind(null,a,t,o,e,n,i,r,p,y,C,q,null,E,_)),Ee(a,o,r,!S);return}}zf(a,t,o,e,n,i,r,p,y)}function e0(a){for(var t=a;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var n=0;n<e.length;n++){var i=e[n],o=i.getSnapshot;i=i.value;try{if(!pt(o(),i))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ee(a,t,e,n){t&=~hr,t&=~en,a.suspendedLanes|=t,a.pingedLanes&=~t,n&&(a.warmLanes|=t),n=a.expirationTimes;for(var i=t;0<i;){var o=31-ct(i),r=1<<o;n[o]=-1,i&=~r}e!==0&&Su(a,e,t)}function Fo(){return(ha&6)===0?(Ri(0),!1):!0}function br(){if(sa!==null){if(ga===0)var a=sa.return;else a=sa,Jt=Ze=null,Ol(a),_n=null,mi=0,a=sa;for(;a!==null;)Zp(a.alternate,a),a=a.return;sa=null}}function Hn(a,t){var e=a.timeoutHandle;e!==-1&&(a.timeoutHandle=-1,k0(e)),e=a.cancelPendingCommit,e!==null&&(a.cancelPendingCommit=null,e()),se=0,br(),ja=a,sa=e=Zt(a.current,null),ra=t,ga=0,mt=null,je=!1,Dn=Wn(a,t),fr=!1,Un=gt=hr=en=Ne=Aa=0,st=Ci=null,dr=!1,(t&8)!==0&&(t|=t&32);var n=a.entangledLanes;if(n!==0)for(a=a.entanglements,n&=t;0<n;){var i=31-ct(n),o=1<<i;t|=a[i],n&=~o}return oe=t,yo(),e}function bf(a,t){aa=null,M.H=ji,t===Tn||t===zo?(t=Rc(),ga=3):t===kl?(t=Rc(),ga=4):ga=t===Fl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,sa===null&&(Aa=1,Ho(a,wt(t,a.current)))}function xf(){var a=ht.current;return a===null?!0:(ra&4194048)===ra?zt===null:(ra&62914560)===ra||(ra&536870912)!==0?a===zt:!1}function vf(){var a=M.H;return M.H=ji,a===null?ji:a}function wf(){var a=M.A;return M.A=a0,a}function $o(){Aa=4,je||(ra&4194048)!==ra&&ht.current!==null||(Dn=!0),(Ne&134217727)===0&&(en&134217727)===0||ja===null||Ee(ja,ra,gt,!1)}function xr(a,t,e){var n=ha;ha|=2;var i=vf(),o=wf();(ja!==a||ra!==t)&&(Jo=null,Hn(a,t)),t=!1;var r=Aa;a:do try{if(ga!==0&&sa!==null){var p=sa,y=mt;switch(ga){case 8:br(),r=6;break a;case 3:case 2:case 9:case 6:ht.current===null&&(t=!0);var S=ga;if(ga=0,mt=null,Bn(a,p,y,S),e&&Dn){r=0;break a}break;default:S=ga,ga=0,mt=null,Bn(a,p,y,S)}}n0(),r=Aa;break}catch(C){bf(a,C)}while(!0);return t&&a.shellSuspendCounter++,Jt=Ze=null,ha=n,M.H=i,M.A=o,sa===null&&(ja=null,ra=0,yo()),r}function n0(){for(;sa!==null;)kf(sa)}function i0(a,t){var e=ha;ha|=2;var n=vf(),i=wf();ja!==a||ra!==t?(Jo=null,Ko=rt()+500,Hn(a,t)):Dn=Wn(a,t);a:do try{if(ga!==0&&sa!==null){t=sa;var o=mt;t:switch(ga){case 1:ga=0,mt=null,Bn(a,t,o,1);break;case 2:case 9:if(Cc(o)){ga=0,mt=null,jf(t);break}t=function(){ga!==2&&ga!==9||ja!==a||(ga=7),Bt(a)},o.then(t,t);break a;case 3:ga=7;break a;case 4:ga=5;break a;case 7:Cc(o)?(ga=0,mt=null,jf(t)):(ga=0,mt=null,Bn(a,t,o,7));break;case 5:var r=null;switch(sa.tag){case 26:r=sa.memoizedState;case 5:case 27:var p=sa;if(r?rh(r):p.stateNode.complete){ga=0,mt=null;var y=p.sibling;if(y!==null)sa=y;else{var S=p.return;S!==null?(sa=S,Wo(S)):sa=null}break t}}ga=0,mt=null,Bn(a,t,o,5);break;case 6:ga=0,mt=null,Bn(a,t,o,6);break;case 8:br(),Aa=6;break a;default:throw Error(u(462))}}o0();break}catch(C){bf(a,C)}while(!0);return Jt=Ze=null,M.H=n,M.A=i,ha=e,sa!==null?0:(ja=null,ra=0,yo(),Aa)}function o0(){for(;sa!==null&&!Td();)kf(sa)}function kf(a){var t=Qp(a.alternate,a,oe);a.memoizedProps=a.pendingProps,t===null?Wo(a):sa=t}function jf(a){var t=a,e=t.alternate;switch(t.tag){case 15:case 0:t=Hp(e,t,t.pendingProps,t.type,void 0,ra);break;case 11:t=Hp(e,t,t.pendingProps,t.type.render,t.ref,ra);break;case 5:Ol(t);default:Zp(e,t),t=sa=vc(t,oe),t=Qp(e,t,oe)}a.memoizedProps=a.pendingProps,t===null?Wo(a):sa=t}function Bn(a,t,e,n){Jt=Ze=null,Ol(t),_n=null,mi=0;var i=t.return;try{if(Zm(a,i,t,e,ra)){Aa=1,Ho(a,wt(e,a.current)),sa=null;return}}catch(o){if(i!==null)throw sa=i,o;Aa=1,Ho(a,wt(e,a.current)),sa=null;return}t.flags&32768?(ca||n===1?a=!0:Dn||(ra&536870912)!==0?a=!1:(je=a=!0,(n===2||n===9||n===3||n===6)&&(n=ht.current,n!==null&&n.tag===13&&(n.flags|=16384))),Nf(t,a)):Wo(t)}function Wo(a){var t=a;do{if((t.flags&32768)!==0){Nf(t,je);return}a=t.return;var e=Fm(t.alternate,t,oe);if(e!==null){sa=e;return}if(t=t.sibling,t!==null){sa=t;return}sa=t=a}while(t!==null);Aa===0&&(Aa=5)}function Nf(a,t){do{var e=$m(a.alternate,a);if(e!==null){e.flags&=32767,sa=e;return}if(e=a.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(a=a.sibling,a!==null)){sa=a;return}sa=a=e}while(a!==null);Aa=6,sa=null}function zf(a,t,e,n,i,o,r,p,y){a.cancelPendingCommit=null;do Io();while(Ha!==0);if((ha&6)!==0)throw Error(u(327));if(t!==null){if(t===a.current)throw Error(u(177));if(o=t.lanes|t.childLanes,o|=ll,Ld(a,e,o,r,p,y),a===ja&&(sa=ja=null,ra=0),Ln=t,Se=a,se=e,mr=o,gr=i,df=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,u0(ao,function(){return Af(),null})):(a.callbackNode=null,a.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null,i=Y.p,Y.p=2,r=ha,ha|=4;try{Wm(a,t,e)}finally{ha=r,Y.p=i,M.T=n}}Ha=1,Sf(),Ef(),Tf()}}function Sf(){if(Ha===1){Ha=0;var a=Se,t=Ln,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=M.T,M.T=null;var n=Y.p;Y.p=2;var i=ha;ha|=4;try{sf(t,a);var o=Cr,r=pc(a.containerInfo),p=o.focusedElem,y=o.selectionRange;if(r!==p&&p&&p.ownerDocument&&cc(p.ownerDocument.documentElement,p)){if(y!==null&&el(p)){var S=y.start,C=y.end;if(C===void 0&&(C=S),"selectionStart"in p)p.selectionStart=S,p.selectionEnd=Math.min(C,p.value.length);else{var q=p.ownerDocument||document,E=q&&q.defaultView||window;if(E.getSelection){var _=E.getSelection(),Q=p.textContent.length,J=Math.min(y.start,Q),wa=y.end===void 0?J:Math.min(y.end,Q);!_.extend&&J>wa&&(r=wa,wa=J,J=r);var j=uc(p,J),v=uc(p,wa);if(j&&v&&(_.rangeCount!==1||_.anchorNode!==j.node||_.anchorOffset!==j.offset||_.focusNode!==v.node||_.focusOffset!==v.offset)){var z=q.createRange();z.setStart(j.node,j.offset),_.removeAllRanges(),J>wa?(_.addRange(z),_.extend(v.node,v.offset)):(z.setEnd(v.node,v.offset),_.addRange(z))}}}}for(q=[],_=p;_=_.parentNode;)_.nodeType===1&&q.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<q.length;p++){var O=q[p];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}ps=!!Ar,Cr=Ar=null}finally{ha=i,Y.p=n,M.T=e}}a.current=t,Ha=2}}function Ef(){if(Ha===2){Ha=0;var a=Se,t=Ln,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=M.T,M.T=null;var n=Y.p;Y.p=2;var i=ha;ha|=4;try{af(a,t.alternate,t)}finally{ha=i,Y.p=n,M.T=e}}Ha=3}}function Tf(){if(Ha===4||Ha===3){Ha=0,_d();var a=Se,t=Ln,e=se,n=df;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ha=5:(Ha=0,Ln=Se=null,_f(a,a.pendingLanes));var i=a.pendingLanes;if(i===0&&(ze=null),Us(e),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot($n,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=M.T,i=Y.p,Y.p=2,M.T=null;try{for(var o=a.onRecoverableError,r=0;r<n.length;r++){var p=n[r];o(p.value,{componentStack:p.stack})}}finally{M.T=t,Y.p=i}}(se&3)!==0&&Io(),Bt(a),i=a.pendingLanes,(e&261930)!==0&&(i&42)!==0?a===yr?Mi++:(Mi=0,yr=a):Mi=0,Ri(0)}}function _f(a,t){(a.pooledCacheLanes&=t)===0&&(t=a.pooledCache,t!=null&&(a.pooledCache=null,hi(t)))}function Io(){return Sf(),Ef(),Tf(),Af()}function Af(){if(Ha!==5)return!1;var a=Se,t=mr;mr=0;var e=Us(se),n=M.T,i=Y.p;try{Y.p=32>e?32:e,M.T=null,e=gr,gr=null;var o=Se,r=se;if(Ha=0,Ln=Se=null,se=0,(ha&6)!==0)throw Error(u(331));var p=ha;if(ha|=4,pf(o.current),rf(o,o.current,r,e),ha=p,Ri(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot($n,o)}catch{}return!0}finally{Y.p=i,M.T=n,_f(a,t)}}function Cf(a,t,e){t=wt(e,t),t=Jl(a.stateNode,t,2),a=xe(a,t,2),a!==null&&(In(a,2),Bt(a))}function ya(a,t,e){if(a.tag===3)Cf(a,a,e);else for(;t!==null;){if(t.tag===3){Cf(t,a,e);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ze===null||!ze.has(n))){a=wt(e,a),e=Cp(2),n=xe(t,e,2),n!==null&&(Mp(e,n,t,a),In(n,2),Bt(n));break}}t=t.return}}function vr(a,t,e){var n=a.pingCache;if(n===null){n=a.pingCache=new t0;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(e)||(fr=!0,i.add(e),a=s0.bind(null,a,t,e),t.then(a,a))}function s0(a,t,e){var n=a.pingCache;n!==null&&n.delete(t),a.pingedLanes|=a.suspendedLanes&e,a.warmLanes&=~e,ja===a&&(ra&e)===e&&(Aa===4||Aa===3&&(ra&62914560)===ra&&300>rt()-Zo?(ha&2)===0&&Hn(a,0):hr|=e,Un===ra&&(Un=0)),Bt(a)}function Mf(a,t){t===0&&(t=zu()),a=Xe(a,t),a!==null&&(In(a,t),Bt(a))}function l0(a){var t=a.memoizedState,e=0;t!==null&&(e=t.retryLane),Mf(a,e)}function r0(a,t){var e=0;switch(a.tag){case 31:case 13:var n=a.stateNode,i=a.memoizedState;i!==null&&(e=i.retryLane);break;case 19:n=a.stateNode;break;case 22:n=a.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),Mf(a,e)}function u0(a,t){return Rs(a,t)}var as=null,Pn=null,wr=!1,ts=!1,kr=!1,Te=0;function Bt(a){a!==Pn&&a.next===null&&(Pn===null?as=Pn=a:Pn=Pn.next=a),ts=!0,wr||(wr=!0,p0())}function Ri(a,t){if(!kr&&ts){kr=!0;do for(var e=!1,n=as;n!==null;){if(a!==0){var i=n.pendingLanes;if(i===0)var o=0;else{var r=n.suspendedLanes,p=n.pingedLanes;o=(1<<31-ct(42|a)+1)-1,o&=i&~(r&~p),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(e=!0,Df(n,o))}else o=ra,o=io(n,n===ja?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||Wn(n,o)||(e=!0,Df(n,o));n=n.next}while(e);kr=!1}}function c0(){Rf()}function Rf(){ts=wr=!1;var a=0;Te!==0&&w0()&&(a=Te);for(var t=rt(),e=null,n=as;n!==null;){var i=n.next,o=Of(n,t);o===0?(n.next=null,e===null?as=i:e.next=i,i===null&&(Pn=e)):(e=n,(a!==0||(o&3)!==0)&&(ts=!0)),n=i}Ha!==0&&Ha!==5||Ri(a),Te!==0&&(Te=0)}function Of(a,t){for(var e=a.suspendedLanes,n=a.pingedLanes,i=a.expirationTimes,o=a.pendingLanes&-62914561;0<o;){var r=31-ct(o),p=1<<r,y=i[r];y===-1?((p&e)===0||(p&n)!==0)&&(i[r]=Ud(p,t)):y<=t&&(a.expiredLanes|=p),o&=~p}if(t=ja,e=ra,e=io(a,a===t?e:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),n=a.callbackNode,e===0||a===t&&(ga===2||ga===9)||a.cancelPendingCommit!==null)return n!==null&&n!==null&&Os(n),a.callbackNode=null,a.callbackPriority=0;if((e&3)===0||Wn(a,e)){if(t=e&-e,t===a.callbackPriority)return t;switch(n!==null&&Os(n),Us(e)){case 2:case 8:e=ju;break;case 32:e=ao;break;case 268435456:e=Nu;break;default:e=ao}return n=qf.bind(null,a),e=Rs(e,n),a.callbackPriority=t,a.callbackNode=e,t}return n!==null&&n!==null&&Os(n),a.callbackPriority=2,a.callbackNode=null,2}function qf(a,t){if(Ha!==0&&Ha!==5)return a.callbackNode=null,a.callbackPriority=0,null;var e=a.callbackNode;if(Io()&&a.callbackNode!==e)return null;var n=ra;return n=io(a,a===ja?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),n===0?null:(gf(a,n,t),Of(a,rt()),a.callbackNode!=null&&a.callbackNode===e?qf.bind(null,a):null)}function Df(a,t){if(Io())return null;gf(a,t,!0)}function p0(){j0(function(){(ha&6)!==0?Rs(ku,c0):Rf()})}function jr(){if(Te===0){var a=Sn;a===0&&(a=to,to<<=1,(to&261888)===0&&(to=256)),Te=a}return Te}function Uf(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:ro(""+a)}function Lf(a,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,a.id&&e.setAttribute("form",a.id),t.parentNode.insertBefore(e,t),a=new FormData(a),e.parentNode.removeChild(e),a}function f0(a,t,e,n,i){if(t==="submit"&&e&&e.stateNode===i){var o=Uf((i[tt]||null).action),r=n.submitter;r&&(t=(t=r[tt]||null)?Uf(t.formAction):r.getAttribute("formAction"),t!==null&&(o=t,r=null));var p=new fo("action","action",null,n,i);a.push({event:p,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Te!==0){var y=r?Lf(i,r):new FormData(i);Gl(e,{pending:!0,data:y,method:i.method,action:o},null,y)}}else typeof o=="function"&&(p.preventDefault(),y=r?Lf(i,r):new FormData(i),Gl(e,{pending:!0,data:y,method:i.method,action:o},o,y))},currentTarget:i}]})}}for(var Nr=0;Nr<sl.length;Nr++){var zr=sl[Nr],h0=zr.toLowerCase(),d0=zr[0].toUpperCase()+zr.slice(1);Rt(h0,"on"+d0)}Rt(dc,"onAnimationEnd"),Rt(mc,"onAnimationIteration"),Rt(gc,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Am,"onTransitionRun"),Rt(Cm,"onTransitionStart"),Rt(Mm,"onTransitionCancel"),Rt(yc,"onTransitionEnd"),fn("onMouseEnter",["mouseout","mouseover"]),fn("onMouseLeave",["mouseout","mouseover"]),fn("onPointerEnter",["pointerout","pointerover"]),fn("onPointerLeave",["pointerout","pointerover"]),Be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Be("onBeforeInput",["compositionend","keypress","textInput","paste"]),Be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oi));function Hf(a,t){t=(t&4)!==0;for(var e=0;e<a.length;e++){var n=a[e],i=n.event;n=n.listeners;a:{var o=void 0;if(t)for(var r=n.length-1;0<=r;r--){var p=n[r],y=p.instance,S=p.currentTarget;if(p=p.listener,y!==o&&i.isPropagationStopped())break a;o=p,i.currentTarget=S;try{o(i)}catch(C){go(C)}i.currentTarget=null,o=y}else for(r=0;r<n.length;r++){if(p=n[r],y=p.instance,S=p.currentTarget,p=p.listener,y!==o&&i.isPropagationStopped())break a;o=p,i.currentTarget=S;try{o(i)}catch(C){go(C)}i.currentTarget=null,o=y}}}}function la(a,t){var e=t[Ls];e===void 0&&(e=t[Ls]=new Set);var n=a+"__bubble";e.has(n)||(Bf(t,a,2,!1),e.add(n))}function Sr(a,t,e){var n=0;t&&(n|=4),Bf(e,a,n,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function Er(a){if(!a[es]){a[es]=!0,Mu.forEach(function(e){e!=="selectionchange"&&(m0.has(e)||Sr(e,!1,a),Sr(e,!0,a))});var t=a.nodeType===9?a:a.ownerDocument;t===null||t[es]||(t[es]=!0,Sr("selectionchange",!1,t))}}function Bf(a,t,e,n){switch(mh(t)){case 2:var i=G0;break;case 8:i=X0;break;default:i=Yr}e=i.bind(null,t,e,a),i=void 0,!Zs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?a.addEventListener(t,e,{capture:!0,passive:i}):a.addEventListener(t,e,!0):i!==void 0?a.addEventListener(t,e,{passive:i}):a.addEventListener(t,e,!1)}function Tr(a,t,e,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)a:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var p=n.stateNode.containerInfo;if(p===i)break;if(r===4)for(r=n.return;r!==null;){var y=r.tag;if((y===3||y===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;p!==null;){if(r=un(p),r===null)return;if(y=r.tag,y===5||y===6||y===26||y===27){n=o=r;continue a}p=p.parentNode}}n=n.return}Xu(function(){var S=o,C=Qs(e),q=[];a:{var E=bc.get(a);if(E!==void 0){var _=fo,Q=a;switch(a){case"keypress":if(co(e)===0)break a;case"keydown":case"keyup":_=rm;break;case"focusin":Q="focus",_=$s;break;case"focusout":Q="blur",_=$s;break;case"beforeblur":case"afterblur":_=$s;break;case"click":if(e.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=pm;break;case dc:case mc:case gc:_=Id;break;case yc:_=hm;break;case"scroll":case"scrollend":_=Kd;break;case"wheel":_=mm;break;case"copy":case"cut":case"paste":_=tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ju;break;case"toggle":case"beforetoggle":_=ym}var J=(t&4)!==0,wa=!J&&(a==="scroll"||a==="scrollend"),j=J?E!==null?E+"Capture":null:E;J=[];for(var v=S,z;v!==null;){var O=v;if(z=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||z===null||j===null||(O=ei(v,j),O!=null&&J.push(qi(v,O,z))),wa)break;v=v.return}0<J.length&&(E=new _(E,Q,null,e,C),q.push({event:E,listeners:J}))}}if((t&7)===0){a:{if(E=a==="mouseover"||a==="pointerover",_=a==="mouseout"||a==="pointerout",E&&e!==Xs&&(Q=e.relatedTarget||e.fromElement)&&(un(Q)||Q[rn]))break a;if((_||E)&&(E=C.window===C?C:(E=C.ownerDocument)?E.defaultView||E.parentWindow:window,_?(Q=e.relatedTarget||e.toElement,_=S,Q=Q?un(Q):null,Q!==null&&(wa=m(Q),J=Q.tag,Q!==wa||J!==5&&J!==27&&J!==6)&&(Q=null)):(_=null,Q=S),_!==Q)){if(J=Zu,O="onMouseLeave",j="onMouseEnter",v="mouse",(a==="pointerout"||a==="pointerover")&&(J=Ju,O="onPointerLeave",j="onPointerEnter",v="pointer"),wa=_==null?E:ti(_),z=Q==null?E:ti(Q),E=new J(O,v+"leave",_,e,C),E.target=wa,E.relatedTarget=z,O=null,un(C)===S&&(J=new J(j,v+"enter",Q,e,C),J.target=z,J.relatedTarget=wa,O=J),wa=O,_&&Q)t:{for(J=g0,j=_,v=Q,z=0,O=j;O;O=J(O))z++;O=0;for(var K=v;K;K=J(K))O++;for(;0<z-O;)j=J(j),z--;for(;0<O-z;)v=J(v),O--;for(;z--;){if(j===v||v!==null&&j===v.alternate){J=j;break t}j=J(j),v=J(v)}J=null}else J=null;_!==null&&Pf(q,E,_,J,!1),Q!==null&&wa!==null&&Pf(q,wa,Q,J,!0)}}a:{if(E=S?ti(S):window,_=E.nodeName&&E.nodeName.toLowerCase(),_==="select"||_==="input"&&E.type==="file")var pa=nc;else if(tc(E))if(ic)pa=Em;else{pa=zm;var Z=Nm}else _=E.nodeName,!_||_.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?S&&Gs(S.elementType)&&(pa=nc):pa=Sm;if(pa&&(pa=pa(a,S))){ec(q,pa,e,C);break a}Z&&Z(a,E,S),a==="focusout"&&S&&E.type==="number"&&S.memoizedProps.value!=null&&Ys(E,"number",E.value)}switch(Z=S?ti(S):window,a){case"focusin":(tc(Z)||Z.contentEditable==="true")&&(bn=Z,nl=S,ci=null);break;case"focusout":ci=nl=bn=null;break;case"mousedown":il=!0;break;case"contextmenu":case"mouseup":case"dragend":il=!1,fc(q,e,C);break;case"selectionchange":if(_m)break;case"keydown":case"keyup":fc(q,e,C)}var ea;if(Is)a:{switch(a){case"compositionstart":var ua="onCompositionStart";break a;case"compositionend":ua="onCompositionEnd";break a;case"compositionupdate":ua="onCompositionUpdate";break a}ua=void 0}else yn?Iu(a,e)&&(ua="onCompositionEnd"):a==="keydown"&&e.keyCode===229&&(ua="onCompositionStart");ua&&(Fu&&e.locale!=="ko"&&(yn||ua!=="onCompositionStart"?ua==="onCompositionEnd"&&yn&&(ea=Qu()):(fe=C,Ks="value"in fe?fe.value:fe.textContent,yn=!0)),Z=ns(S,ua),0<Z.length&&(ua=new Ku(ua,a,null,e,C),q.push({event:ua,listeners:Z}),ea?ua.data=ea:(ea=ac(e),ea!==null&&(ua.data=ea)))),(ea=xm?vm(a,e):wm(a,e))&&(ua=ns(S,"onBeforeInput"),0<ua.length&&(Z=new Ku("onBeforeInput","beforeinput",null,e,C),q.push({event:Z,listeners:ua}),Z.data=ea)),f0(q,a,S,e,C)}Hf(q,t)})}function qi(a,t,e){return{instance:a,listener:t,currentTarget:e}}function ns(a,t){for(var e=t+"Capture",n=[];a!==null;){var i=a,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=ei(a,e),i!=null&&n.unshift(qi(a,i,o)),i=ei(a,t),i!=null&&n.push(qi(a,i,o))),a.tag===3)return n;a=a.return}return[]}function g0(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function Pf(a,t,e,n,i){for(var o=t._reactName,r=[];e!==null&&e!==n;){var p=e,y=p.alternate,S=p.stateNode;if(p=p.tag,y!==null&&y===n)break;p!==5&&p!==26&&p!==27||S===null||(y=S,i?(S=ei(e,o),S!=null&&r.unshift(qi(e,S,y))):i||(S=ei(e,o),S!=null&&r.push(qi(e,S,y)))),e=e.return}r.length!==0&&a.push({event:t,listeners:r})}var y0=/\r\n?/g,b0=/\u0000|\uFFFD/g;function Yf(a){return(typeof a=="string"?a:""+a).replace(y0,`
`).replace(b0,"")}function Gf(a,t){return t=Yf(t),Yf(a)===t}function va(a,t,e,n,i,o){switch(e){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||dn(a,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&dn(a,""+n);break;case"className":so(a,"class",n);break;case"tabIndex":so(a,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":so(a,e,n);break;case"style":Yu(a,n,o);break;case"data":if(t!=="object"){so(a,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||e!=="href")){a.removeAttribute(e);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){a.removeAttribute(e);break}n=ro(""+n),a.setAttribute(e,n);break;case"action":case"formAction":if(typeof n=="function"){a.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(e==="formAction"?(t!=="input"&&va(a,t,"name",i.name,i,null),va(a,t,"formEncType",i.formEncType,i,null),va(a,t,"formMethod",i.formMethod,i,null),va(a,t,"formTarget",i.formTarget,i,null)):(va(a,t,"encType",i.encType,i,null),va(a,t,"method",i.method,i,null),va(a,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){a.removeAttribute(e);break}n=ro(""+n),a.setAttribute(e,n);break;case"onClick":n!=null&&(a.onclick=Qt);break;case"onScroll":n!=null&&la("scroll",a);break;case"onScrollEnd":n!=null&&la("scrollend",a);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(e=n.__html,e!=null){if(i.children!=null)throw Error(u(60));a.innerHTML=e}}break;case"multiple":a.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":a.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){a.removeAttribute("xlink:href");break}e=ro(""+n),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(e,""+n):a.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(e,""):a.removeAttribute(e);break;case"capture":case"download":n===!0?a.setAttribute(e,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(e,n):a.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?a.setAttribute(e,n):a.removeAttribute(e);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?a.removeAttribute(e):a.setAttribute(e,n);break;case"popover":la("beforetoggle",a),la("toggle",a),oo(a,"popover",n);break;case"xlinkActuate":Xt(a,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Xt(a,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Xt(a,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Xt(a,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Xt(a,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Xt(a,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Xt(a,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Xt(a,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Xt(a,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":oo(a,"is",n);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Vd.get(e)||e,oo(a,e,n))}}function _r(a,t,e,n,i,o){switch(e){case"style":Yu(a,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(e=n.__html,e!=null){if(i.children!=null)throw Error(u(60));a.innerHTML=e}}break;case"children":typeof n=="string"?dn(a,n):(typeof n=="number"||typeof n=="bigint")&&dn(a,""+n);break;case"onScroll":n!=null&&la("scroll",a);break;case"onScrollEnd":n!=null&&la("scrollend",a);break;case"onClick":n!=null&&(a.onclick=Qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ru.hasOwnProperty(e))a:{if(e[0]==="o"&&e[1]==="n"&&(i=e.endsWith("Capture"),t=e.slice(2,i?e.length-7:void 0),o=a[tt]||null,o=o!=null?o[e]:null,typeof o=="function"&&a.removeEventListener(t,o,i),typeof n=="function")){typeof o!="function"&&o!==null&&(e in a?a[e]=null:a.hasAttribute(e)&&a.removeAttribute(e)),a.addEventListener(t,n,i);break a}e in a?a[e]=n:n===!0?a.setAttribute(e,""):oo(a,e,n)}}}function Za(a,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":la("error",a),la("load",a);var n=!1,i=!1,o;for(o in e)if(e.hasOwnProperty(o)){var r=e[o];if(r!=null)switch(o){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:va(a,t,o,r,e,null)}}i&&va(a,t,"srcSet",e.srcSet,e,null),n&&va(a,t,"src",e.src,e,null);return;case"input":la("invalid",a);var p=o=r=i=null,y=null,S=null;for(n in e)if(e.hasOwnProperty(n)){var C=e[n];if(C!=null)switch(n){case"name":i=C;break;case"type":r=C;break;case"checked":y=C;break;case"defaultChecked":S=C;break;case"value":o=C;break;case"defaultValue":p=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:va(a,t,n,C,e,null)}}Lu(a,o,p,y,S,r,i,!1);return;case"select":la("invalid",a),n=r=o=null;for(i in e)if(e.hasOwnProperty(i)&&(p=e[i],p!=null))switch(i){case"value":o=p;break;case"defaultValue":r=p;break;case"multiple":n=p;default:va(a,t,i,p,e,null)}t=o,e=r,a.multiple=!!n,t!=null?hn(a,!!n,t,!1):e!=null&&hn(a,!!n,e,!0);return;case"textarea":la("invalid",a),o=i=n=null;for(r in e)if(e.hasOwnProperty(r)&&(p=e[r],p!=null))switch(r){case"value":n=p;break;case"defaultValue":i=p;break;case"children":o=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(91));break;default:va(a,t,r,p,e,null)}Bu(a,n,i,o);return;case"option":for(y in e)e.hasOwnProperty(y)&&(n=e[y],n!=null)&&(y==="selected"?a.selected=n&&typeof n!="function"&&typeof n!="symbol":va(a,t,y,n,e,null));return;case"dialog":la("beforetoggle",a),la("toggle",a),la("cancel",a),la("close",a);break;case"iframe":case"object":la("load",a);break;case"video":case"audio":for(n=0;n<Oi.length;n++)la(Oi[n],a);break;case"image":la("error",a),la("load",a);break;case"details":la("toggle",a);break;case"embed":case"source":case"link":la("error",a),la("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in e)if(e.hasOwnProperty(S)&&(n=e[S],n!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:va(a,t,S,n,e,null)}return;default:if(Gs(t)){for(C in e)e.hasOwnProperty(C)&&(n=e[C],n!==void 0&&_r(a,t,C,n,e,void 0));return}}for(p in e)e.hasOwnProperty(p)&&(n=e[p],n!=null&&va(a,t,p,n,e,null))}function x0(a,t,e,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,r=null,p=null,y=null,S=null,C=null;for(_ in e){var q=e[_];if(e.hasOwnProperty(_)&&q!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":y=q;default:n.hasOwnProperty(_)||va(a,t,_,null,n,q)}}for(var E in n){var _=n[E];if(q=e[E],n.hasOwnProperty(E)&&(_!=null||q!=null))switch(E){case"type":o=_;break;case"name":i=_;break;case"checked":S=_;break;case"defaultChecked":C=_;break;case"value":r=_;break;case"defaultValue":p=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(u(137,t));break;default:_!==q&&va(a,t,E,_,n,q)}}Ps(a,r,p,y,S,C,o,i);return;case"select":_=r=p=E=null;for(o in e)if(y=e[o],e.hasOwnProperty(o)&&y!=null)switch(o){case"value":break;case"multiple":_=y;default:n.hasOwnProperty(o)||va(a,t,o,null,n,y)}for(i in n)if(o=n[i],y=e[i],n.hasOwnProperty(i)&&(o!=null||y!=null))switch(i){case"value":E=o;break;case"defaultValue":p=o;break;case"multiple":r=o;default:o!==y&&va(a,t,i,o,n,y)}t=p,e=r,n=_,E!=null?hn(a,!!e,E,!1):!!n!=!!e&&(t!=null?hn(a,!!e,t,!0):hn(a,!!e,e?[]:"",!1));return;case"textarea":_=E=null;for(p in e)if(i=e[p],e.hasOwnProperty(p)&&i!=null&&!n.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:va(a,t,p,null,n,i)}for(r in n)if(i=n[r],o=e[r],n.hasOwnProperty(r)&&(i!=null||o!=null))switch(r){case"value":E=i;break;case"defaultValue":_=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==o&&va(a,t,r,i,n,o)}Hu(a,E,_);return;case"option":for(var Q in e)E=e[Q],e.hasOwnProperty(Q)&&E!=null&&!n.hasOwnProperty(Q)&&(Q==="selected"?a.selected=!1:va(a,t,Q,null,n,E));for(y in n)E=n[y],_=e[y],n.hasOwnProperty(y)&&E!==_&&(E!=null||_!=null)&&(y==="selected"?a.selected=E&&typeof E!="function"&&typeof E!="symbol":va(a,t,y,E,n,_));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in e)E=e[J],e.hasOwnProperty(J)&&E!=null&&!n.hasOwnProperty(J)&&va(a,t,J,null,n,E);for(S in n)if(E=n[S],_=e[S],n.hasOwnProperty(S)&&E!==_&&(E!=null||_!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,t));break;default:va(a,t,S,E,n,_)}return;default:if(Gs(t)){for(var wa in e)E=e[wa],e.hasOwnProperty(wa)&&E!==void 0&&!n.hasOwnProperty(wa)&&_r(a,t,wa,void 0,n,E);for(C in n)E=n[C],_=e[C],!n.hasOwnProperty(C)||E===_||E===void 0&&_===void 0||_r(a,t,C,E,n,_);return}}for(var j in e)E=e[j],e.hasOwnProperty(j)&&E!=null&&!n.hasOwnProperty(j)&&va(a,t,j,null,n,E);for(q in n)E=n[q],_=e[q],!n.hasOwnProperty(q)||E===_||E==null&&_==null||va(a,t,q,E,n,_)}function Xf(a){switch(a){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function v0(){if(typeof performance.getEntriesByType=="function"){for(var a=0,t=0,e=performance.getEntriesByType("resource"),n=0;n<e.length;n++){var i=e[n],o=i.transferSize,r=i.initiatorType,p=i.duration;if(o&&p&&Xf(r)){for(r=0,p=i.responseEnd,n+=1;n<e.length;n++){var y=e[n],S=y.startTime;if(S>p)break;var C=y.transferSize,q=y.initiatorType;C&&Xf(q)&&(y=y.responseEnd,r+=C*(y<p?1:(p-S)/(y-S)))}if(--n,t+=8*(o+r)/(i.duration/1e3),a++,10<a)break}}if(0<a)return t/a/1e6}return navigator.connection&&(a=navigator.connection.downlink,typeof a=="number")?a:5}var Ar=null,Cr=null;function is(a){return a.nodeType===9?a:a.ownerDocument}function Qf(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vf(a,t){if(a===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&t==="foreignObject"?0:a}function Mr(a,t){return a==="textarea"||a==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rr=null;function w0(){var a=window.event;return a&&a.type==="popstate"?a===Rr?!1:(Rr=a,!0):(Rr=null,!1)}var Zf=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,j0=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(a){return Kf.resolve(null).then(a).catch(N0)}:Zf;function N0(a){setTimeout(function(){throw a})}function _e(a){return a==="head"}function Jf(a,t){var e=t,n=0;do{var i=e.nextSibling;if(a.removeChild(e),i&&i.nodeType===8)if(e=i.data,e==="/$"||e==="/&"){if(n===0){a.removeChild(i),Qn(t);return}n--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")n++;else if(e==="html")Di(a.ownerDocument.documentElement);else if(e==="head"){e=a.ownerDocument.head,Di(e);for(var o=e.firstChild;o;){var r=o.nextSibling,p=o.nodeName;o[ai]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&o.rel.toLowerCase()==="stylesheet"||e.removeChild(o),o=r}}else e==="body"&&Di(a.ownerDocument.body);e=i}while(e);Qn(t)}function Ff(a,t){var e=a;a=0;do{var n=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),n&&n.nodeType===8)if(e=n.data,e==="/$"){if(a===0)break;a--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||a++;e=n}while(e)}function Or(a){var t=a.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Or(e),Hs(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}a.removeChild(e)}}function z0(a,t,e,n){for(;a.nodeType===1;){var i=e;if(a.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(n){if(!a[ai])switch(t){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(o=a.getAttribute("rel"),o==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(o!==i.rel||a.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||a.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||a.getAttribute("title")!==(i.title==null?null:i.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(o=a.getAttribute("src"),(o!==(i.src==null?null:i.src)||a.getAttribute("type")!==(i.type==null?null:i.type)||a.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(t==="input"&&a.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&a.getAttribute("name")===o)return a}else return a;if(a=St(a.nextSibling),a===null)break}return null}function S0(a,t,e){if(t==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!e||(a=St(a.nextSibling),a===null))return null;return a}function $f(a,t){for(;a.nodeType!==8;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!t||(a=St(a.nextSibling),a===null))return null;return a}function qr(a){return a.data==="$?"||a.data==="$~"}function Dr(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState!=="loading"}function E0(a,t){var e=a.ownerDocument;if(a.data==="$~")a._reactRetry=t;else if(a.data!=="$?"||e.readyState!=="loading")t();else{var n=function(){t(),e.removeEventListener("DOMContentLoaded",n)};e.addEventListener("DOMContentLoaded",n),a._reactRetry=n}}function St(a){for(;a!=null;a=a.nextSibling){var t=a.nodeType;if(t===1||t===3)break;if(t===8){if(t=a.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return a}var Ur=null;function Wf(a){a=a.nextSibling;for(var t=0;a;){if(a.nodeType===8){var e=a.data;if(e==="/$"||e==="/&"){if(t===0)return St(a.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}a=a.nextSibling}return null}function If(a){a=a.previousSibling;for(var t=0;a;){if(a.nodeType===8){var e=a.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return a;t--}else e!=="/$"&&e!=="/&"||t++}a=a.previousSibling}return null}function ah(a,t,e){switch(t=is(e),a){case"html":if(a=t.documentElement,!a)throw Error(u(452));return a;case"head":if(a=t.head,!a)throw Error(u(453));return a;case"body":if(a=t.body,!a)throw Error(u(454));return a;default:throw Error(u(451))}}function Di(a){for(var t=a.attributes;t.length;)a.removeAttributeNode(t[0]);Hs(a)}var Et=new Map,th=new Set;function os(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var le=Y.d;Y.d={f:T0,r:_0,D:A0,C:C0,L:M0,m:R0,X:q0,S:O0,M:D0};function T0(){var a=le.f(),t=Fo();return a||t}function _0(a){var t=cn(a);t!==null&&t.tag===5&&t.type==="form"?yp(t):le.r(a)}var Yn=typeof document>"u"?null:document;function eh(a,t,e){var n=Yn;if(n&&typeof t=="string"&&t){var i=xt(t);i='link[rel="'+a+'"][href="'+i+'"]',typeof e=="string"&&(i+='[crossorigin="'+e+'"]'),th.has(i)||(th.add(i),a={rel:a,crossOrigin:e,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Za(t,"link",a),Pa(t),n.head.appendChild(t)))}}function A0(a){le.D(a),eh("dns-prefetch",a,null)}function C0(a,t){le.C(a,t),eh("preconnect",a,t)}function M0(a,t,e){le.L(a,t,e);var n=Yn;if(n&&a&&t){var i='link[rel="preload"][as="'+xt(t)+'"]';t==="image"&&e&&e.imageSrcSet?(i+='[imagesrcset="'+xt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(i+='[imagesizes="'+xt(e.imageSizes)+'"]')):i+='[href="'+xt(a)+'"]';var o=i;switch(t){case"style":o=Gn(a);break;case"script":o=Xn(a)}Et.has(o)||(a=N({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:a,as:t},e),Et.set(o,a),n.querySelector(i)!==null||t==="style"&&n.querySelector(Ui(o))||t==="script"&&n.querySelector(Li(o))||(t=n.createElement("link"),Za(t,"link",a),Pa(t),n.head.appendChild(t)))}}function R0(a,t){le.m(a,t);var e=Yn;if(e&&a){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+xt(n)+'"][href="'+xt(a)+'"]',o=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Xn(a)}if(!Et.has(o)&&(a=N({rel:"modulepreload",href:a},t),Et.set(o,a),e.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Li(o)))return}n=e.createElement("link"),Za(n,"link",a),Pa(n),e.head.appendChild(n)}}}function O0(a,t,e){le.S(a,t,e);var n=Yn;if(n&&a){var i=pn(n).hoistableStyles,o=Gn(a);t=t||"default";var r=i.get(o);if(!r){var p={loading:0,preload:null};if(r=n.querySelector(Ui(o)))p.loading=5;else{a=N({rel:"stylesheet",href:a,"data-precedence":t},e),(e=Et.get(o))&&Lr(a,e);var y=r=n.createElement("link");Pa(y),Za(y,"link",a),y._p=new Promise(function(S,C){y.onload=S,y.onerror=C}),y.addEventListener("load",function(){p.loading|=1}),y.addEventListener("error",function(){p.loading|=2}),p.loading|=4,ss(r,t,n)}r={type:"stylesheet",instance:r,count:1,state:p},i.set(o,r)}}}function q0(a,t){le.X(a,t);var e=Yn;if(e&&a){var n=pn(e).hoistableScripts,i=Xn(a),o=n.get(i);o||(o=e.querySelector(Li(i)),o||(a=N({src:a,async:!0},t),(t=Et.get(i))&&Hr(a,t),o=e.createElement("script"),Pa(o),Za(o,"link",a),e.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function D0(a,t){le.M(a,t);var e=Yn;if(e&&a){var n=pn(e).hoistableScripts,i=Xn(a),o=n.get(i);o||(o=e.querySelector(Li(i)),o||(a=N({src:a,async:!0,type:"module"},t),(t=Et.get(i))&&Hr(a,t),o=e.createElement("script"),Pa(o),Za(o,"link",a),e.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function nh(a,t,e,n){var i=(i=oa.current)?os(i):null;if(!i)throw Error(u(446));switch(a){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=Gn(e.href),e=pn(i).hoistableStyles,n=e.get(t),n||(n={type:"style",instance:null,count:0,state:null},e.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){a=Gn(e.href);var o=pn(i).hoistableStyles,r=o.get(a);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(a,r),(o=i.querySelector(Ui(a)))&&!o._p&&(r.instance=o,r.state.loading=5),Et.has(a)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Et.set(a,e),o||U0(i,a,e,r.state))),t&&n===null)throw Error(u(528,""));return r}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Xn(e),e=pn(i).hoistableScripts,n=e.get(t),n||(n={type:"script",instance:null,count:0,state:null},e.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,a))}}function Gn(a){return'href="'+xt(a)+'"'}function Ui(a){return'link[rel="stylesheet"]['+a+"]"}function ih(a){return N({},a,{"data-precedence":a.precedence,precedence:null})}function U0(a,t,e,n){a.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=a.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Za(t,"link",e),Pa(t),a.head.appendChild(t))}function Xn(a){return'[src="'+xt(a)+'"]'}function Li(a){return"script[async]"+a}function oh(a,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var n=a.querySelector('style[data-href~="'+xt(e.href)+'"]');if(n)return t.instance=n,Pa(n),n;var i=N({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return n=(a.ownerDocument||a).createElement("style"),Pa(n),Za(n,"style",i),ss(n,e.precedence,a),t.instance=n;case"stylesheet":i=Gn(e.href);var o=a.querySelector(Ui(i));if(o)return t.state.loading|=4,t.instance=o,Pa(o),o;n=ih(e),(i=Et.get(i))&&Lr(n,i),o=(a.ownerDocument||a).createElement("link"),Pa(o);var r=o;return r._p=new Promise(function(p,y){r.onload=p,r.onerror=y}),Za(o,"link",n),t.state.loading|=4,ss(o,e.precedence,a),t.instance=o;case"script":return o=Xn(e.src),(i=a.querySelector(Li(o)))?(t.instance=i,Pa(i),i):(n=e,(i=Et.get(o))&&(n=N({},e),Hr(n,i)),a=a.ownerDocument||a,i=a.createElement("script"),Pa(i),Za(i,"link",n),a.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,ss(n,e.precedence,a));return t.instance}function ss(a,t,e){for(var n=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,o=i,r=0;r<n.length;r++){var p=n[r];if(p.dataset.precedence===t)o=p;else if(o!==i)break}o?o.parentNode.insertBefore(a,o.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(a,t.firstChild))}function Lr(a,t){a.crossOrigin==null&&(a.crossOrigin=t.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=t.referrerPolicy),a.title==null&&(a.title=t.title)}function Hr(a,t){a.crossOrigin==null&&(a.crossOrigin=t.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=t.referrerPolicy),a.integrity==null&&(a.integrity=t.integrity)}var ls=null;function sh(a,t,e){if(ls===null){var n=new Map,i=ls=new Map;i.set(e,n)}else i=ls,n=i.get(e),n||(n=new Map,i.set(e,n));if(n.has(a))return n;for(n.set(a,null),e=e.getElementsByTagName(a),i=0;i<e.length;i++){var o=e[i];if(!(o[ai]||o[Ga]||a==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var r=o.getAttribute(t)||"";r=a+r;var p=n.get(r);p?p.push(o):n.set(r,[o])}}return n}function lh(a,t,e){a=a.ownerDocument||a,a.head.insertBefore(e,t==="title"?a.querySelector("head > title"):null)}function L0(a,t,e){if(e===1||t.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(a=t.disabled,typeof t.precedence=="string"&&a==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rh(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}function H0(a,t,e,n){if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Gn(n.href),o=t.querySelector(Ui(i));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=rs.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=o,Pa(o);return}o=t.ownerDocument||t,n=ih(n),(i=Et.get(i))&&Lr(n,i),o=o.createElement("link"),Pa(o);var r=o;r._p=new Promise(function(p,y){r.onload=p,r.onerror=y}),Za(o,"link",n),e.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=rs.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}var Br=0;function B0(a,t){return a.stylesheets&&a.count===0&&cs(a,a.stylesheets),0<a.count||0<a.imgCount?function(e){var n=setTimeout(function(){if(a.stylesheets&&cs(a,a.stylesheets),a.unsuspend){var o=a.unsuspend;a.unsuspend=null,o()}},6e4+t);0<a.imgBytes&&Br===0&&(Br=62500*v0());var i=setTimeout(function(){if(a.waitingForImages=!1,a.count===0&&(a.stylesheets&&cs(a,a.stylesheets),a.unsuspend)){var o=a.unsuspend;a.unsuspend=null,o()}},(a.imgBytes>Br?50:800)+t);return a.unsuspend=e,function(){a.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function rs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cs(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var us=null;function cs(a,t){a.stylesheets=null,a.unsuspend!==null&&(a.count++,us=new Map,t.forEach(P0,a),us=null,rs.call(a))}function P0(a,t){if(!(t.state.loading&4)){var e=us.get(a);if(e)var n=e.get(null);else{e=new Map,us.set(a,e);for(var i=a.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var r=i[o];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(e.set(r.dataset.precedence,r),n=r)}n&&e.set(null,n)}i=t.instance,r=i.getAttribute("data-precedence"),o=e.get(r)||n,o===n&&e.set(null,i),e.set(r,i),this.count++,n=rs.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),o?o.parentNode.insertBefore(i,o.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(i,a.firstChild)),t.state.loading|=4}}var Hi={$$typeof:X,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Y0(a,t,e,n,i,o,r,p,y){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qs(0),this.hiddenUpdates=qs(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function uh(a,t,e,n,i,o,r,p,y,S,C,q){return a=new Y0(a,t,e,r,y,S,C,q,p),t=1,o===!0&&(t|=24),o=ft(3,null,null,t),a.current=o,o.stateNode=a,t=xl(),t.refCount++,a.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:e,cache:t},jl(o),a}function ch(a){return a?(a=wn,a):wn}function ph(a,t,e,n,i,o){i=ch(i),n.context===null?n.context=i:n.pendingContext=i,n=be(t),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=xe(a,n,t),e!==null&&(lt(e,a,t),yi(e,a,t))}function fh(a,t){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var e=a.retryLane;a.retryLane=e!==0&&e<t?e:t}}function Pr(a,t){fh(a,t),(a=a.alternate)&&fh(a,t)}function hh(a){if(a.tag===13||a.tag===31){var t=Xe(a,67108864);t!==null&&lt(t,a,67108864),Pr(a,67108864)}}function dh(a){if(a.tag===13||a.tag===31){var t=yt();t=Ds(t);var e=Xe(a,t);e!==null&&lt(e,a,t),Pr(a,t)}}var ps=!0;function G0(a,t,e,n){var i=M.T;M.T=null;var o=Y.p;try{Y.p=2,Yr(a,t,e,n)}finally{Y.p=o,M.T=i}}function X0(a,t,e,n){var i=M.T;M.T=null;var o=Y.p;try{Y.p=8,Yr(a,t,e,n)}finally{Y.p=o,M.T=i}}function Yr(a,t,e,n){if(ps){var i=Gr(n);if(i===null)Tr(a,t,n,fs,e),gh(a,n);else if(V0(i,a,t,e,n))n.stopPropagation();else if(gh(a,n),t&4&&-1<Q0.indexOf(a)){for(;i!==null;){var o=cn(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var r=He(o.pendingLanes);if(r!==0){var p=o;for(p.pendingLanes|=2,p.entangledLanes|=2;r;){var y=1<<31-ct(r);p.entanglements[1]|=y,r&=~y}Bt(o),(ha&6)===0&&(Ko=rt()+500,Ri(0))}}break;case 31:case 13:p=Xe(o,2),p!==null&&lt(p,o,2),Fo(),Pr(o,2)}if(o=Gr(n),o===null&&Tr(a,t,n,fs,e),o===i)break;i=o}i!==null&&n.stopPropagation()}else Tr(a,t,n,null,e)}}function Gr(a){return a=Qs(a),Xr(a)}var fs=null;function Xr(a){if(fs=null,a=un(a),a!==null){var t=m(a);if(t===null)a=null;else{var e=t.tag;if(e===13){if(a=d(t),a!==null)return a;a=null}else if(e===31){if(a=b(t),a!==null)return a;a=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;a=null}else t!==a&&(a=null)}}return fs=a,null}function mh(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ad()){case ku:return 2;case ju:return 8;case ao:case Cd:return 32;case Nu:return 268435456;default:return 32}default:return 32}}var Qr=!1,Ae=null,Ce=null,Me=null,Bi=new Map,Pi=new Map,Re=[],Q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gh(a,t){switch(a){case"focusin":case"focusout":Ae=null;break;case"dragenter":case"dragleave":Ce=null;break;case"mouseover":case"mouseout":Me=null;break;case"pointerover":case"pointerout":Bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(t.pointerId)}}function Yi(a,t,e,n,i,o){return a===null||a.nativeEvent!==o?(a={blockedOn:t,domEventName:e,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=cn(t),t!==null&&hh(t)),a):(a.eventSystemFlags|=n,t=a.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),a)}function V0(a,t,e,n,i){switch(t){case"focusin":return Ae=Yi(Ae,a,t,e,n,i),!0;case"dragenter":return Ce=Yi(Ce,a,t,e,n,i),!0;case"mouseover":return Me=Yi(Me,a,t,e,n,i),!0;case"pointerover":var o=i.pointerId;return Bi.set(o,Yi(Bi.get(o)||null,a,t,e,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Pi.set(o,Yi(Pi.get(o)||null,a,t,e,n,i)),!0}return!1}function yh(a){var t=un(a.target);if(t!==null){var e=m(t);if(e!==null){if(t=e.tag,t===13){if(t=d(e),t!==null){a.blockedOn=t,Au(a.priority,function(){dh(e)});return}}else if(t===31){if(t=b(e),t!==null){a.blockedOn=t,Au(a.priority,function(){dh(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){a.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}a.blockedOn=null}function hs(a){if(a.blockedOn!==null)return!1;for(var t=a.targetContainers;0<t.length;){var e=Gr(a.nativeEvent);if(e===null){e=a.nativeEvent;var n=new e.constructor(e.type,e);Xs=n,e.target.dispatchEvent(n),Xs=null}else return t=cn(e),t!==null&&hh(t),a.blockedOn=e,!1;t.shift()}return!0}function bh(a,t,e){hs(a)&&e.delete(t)}function Z0(){Qr=!1,Ae!==null&&hs(Ae)&&(Ae=null),Ce!==null&&hs(Ce)&&(Ce=null),Me!==null&&hs(Me)&&(Me=null),Bi.forEach(bh),Pi.forEach(bh)}function ds(a,t){a.blockedOn===t&&(a.blockedOn=null,Qr||(Qr=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Z0)))}var ms=null;function xh(a){ms!==a&&(ms=a,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){ms===a&&(ms=null);for(var t=0;t<a.length;t+=3){var e=a[t],n=a[t+1],i=a[t+2];if(typeof n!="function"){if(Xr(n||e)===null)continue;break}var o=cn(e);o!==null&&(a.splice(t,3),t-=3,Gl(o,{pending:!0,data:i,method:e.method,action:n},n,i))}}))}function Qn(a){function t(y){return ds(y,a)}Ae!==null&&ds(Ae,a),Ce!==null&&ds(Ce,a),Me!==null&&ds(Me,a),Bi.forEach(t),Pi.forEach(t);for(var e=0;e<Re.length;e++){var n=Re[e];n.blockedOn===a&&(n.blockedOn=null)}for(;0<Re.length&&(e=Re[0],e.blockedOn===null);)yh(e),e.blockedOn===null&&Re.shift();if(e=(a.ownerDocument||a).$$reactFormReplay,e!=null)for(n=0;n<e.length;n+=3){var i=e[n],o=e[n+1],r=i[tt]||null;if(typeof o=="function")r||xh(e);else if(r){var p=null;if(o&&o.hasAttribute("formAction")){if(i=o,r=o[tt]||null)p=r.formAction;else if(Xr(i)!==null)continue}else p=r.action;typeof p=="function"?e[n+1]=p:(e.splice(n,3),n-=3),xh(e)}}}function vh(){function a(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(e,20)}function e(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",a),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){n=!0,navigation.removeEventListener("navigate",a),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Vr(a){this._internalRoot=a}gs.prototype.render=Vr.prototype.render=function(a){var t=this._internalRoot;if(t===null)throw Error(u(409));var e=t.current,n=yt();ph(e,n,a,t,null,null)},gs.prototype.unmount=Vr.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var t=a.containerInfo;ph(a.current,2,null,a,null,null),Fo(),t[rn]=null}};function gs(a){this._internalRoot=a}gs.prototype.unstable_scheduleHydration=function(a){if(a){var t=_u();a={blockedOn:null,target:a,priority:t};for(var e=0;e<Re.length&&t!==0&&t<Re[e].priority;e++);Re.splice(e,0,a),e===0&&yh(a)}};var wh=c.version;if(wh!=="19.2.3")throw Error(u(527,wh,"19.2.3"));Y.findDOMNode=function(a){var t=a._reactInternals;if(t===void 0)throw typeof a.render=="function"?Error(u(188)):(a=Object.keys(a).join(","),Error(u(268,a)));return a=g(t),a=a!==null?k(a):null,a=a===null?null:a.stateNode,a};var K0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{$n=ys.inject(K0),ut=ys}catch{}}return Xi.createRoot=function(a,t){if(!h(a))throw Error(u(299));var e=!1,n="",i=Ep,o=Tp,r=_p;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=uh(a,1,!1,null,null,e,n,null,i,o,r,vh),a[rn]=t.current,Er(a),new Vr(t)},Xi.hydrateRoot=function(a,t,e){if(!h(a))throw Error(u(299));var n=!1,i="",o=Ep,r=Tp,p=_p,y=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError),e.formState!==void 0&&(y=e.formState)),t=uh(a,1,!0,t,e??null,n,i,y,o,r,p,vh),t.context=ch(null),e=t.current,n=yt(),n=Ds(n),i=be(n),i.callback=null,xe(e,i,n),e=n,t.current.lanes=e,In(t,e),Bt(t),a[rn]=t.current,Er(a),new gs(t)},Xi.version="19.2.3",Xi}var Ch;function og(){if(Ch)return Jr.exports;Ch=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Jr.exports=ig(),Jr.exports}var sg=og();const lg=Zh(sg);var Mh="popstate";function rg(l={}){function c(u,h){let{pathname:m,search:d,hash:b}=u.location;return iu("",{pathname:m,search:d,hash:b},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function f(u,h){return typeof h=="string"?h:Zi(h)}return cg(c,f,null,l)}function Ta(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function Dt(l,c){if(!l){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function ug(){return Math.random().toString(36).substring(2,10)}function Rh(l,c){return{usr:l.state,key:l.key,idx:c}}function iu(l,c,f=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof c=="string"?Zn(c):c,state:f,key:c&&c.key||u||ug()}}function Zi({pathname:l="/",search:c="",hash:f=""}){return c&&c!=="?"&&(l+=c.charAt(0)==="?"?c:"?"+c),f&&f!=="#"&&(l+=f.charAt(0)==="#"?f:"#"+f),l}function Zn(l){let c={};if(l){let f=l.indexOf("#");f>=0&&(c.hash=l.substring(f),l=l.substring(0,f));let u=l.indexOf("?");u>=0&&(c.search=l.substring(u),l=l.substring(0,u)),l&&(c.pathname=l)}return c}function cg(l,c,f,u={}){let{window:h=document.defaultView,v5Compat:m=!1}=u,d=h.history,b="POP",x=null,g=k();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function k(){return(d.state||{idx:null}).idx}function N(){b="POP";let P=k(),U=P==null?null:P-g;g=P,x&&x({action:b,location:H.location,delta:U})}function A(P,U){b="PUSH";let B=iu(H.location,P,U);g=k()+1;let X=Rh(B,g),ta=H.createHref(B);try{d.pushState(X,"",ta)}catch(na){if(na instanceof DOMException&&na.name==="DataCloneError")throw na;h.location.assign(ta)}m&&x&&x({action:b,location:H.location,delta:1})}function R(P,U){b="REPLACE";let B=iu(H.location,P,U);g=k();let X=Rh(B,g),ta=H.createHref(B);d.replaceState(X,"",ta),m&&x&&x({action:b,location:H.location,delta:0})}function L(P){return pg(P)}let H={get action(){return b},get location(){return l(h,d)},listen(P){if(x)throw new Error("A history only accepts one active listener");return h.addEventListener(Mh,N),x=P,()=>{h.removeEventListener(Mh,N),x=null}},createHref(P){return c(h,P)},createURL:L,encodeLocation(P){let U=L(P);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:A,replace:R,go(P){return d.go(P)}};return H}function pg(l,c=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Ta(f,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:Zi(l);return u=u.replace(/ $/,"%20"),!c&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function Kh(l,c,f="/"){return fg(l,c,f,!1)}function fg(l,c,f,u){let h=typeof c=="string"?Zn(c):c,m=ue(h.pathname||"/",f);if(m==null)return null;let d=Jh(l);hg(d);let b=null;for(let x=0;b==null&&x<d.length;++x){let g=Ng(m);b=kg(d[x],g,u)}return b}function Jh(l,c=[],f=[],u="",h=!1){let m=(d,b,x=h,g)=>{let k={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:b,route:d};if(k.relativePath.startsWith("/")){if(!k.relativePath.startsWith(u)&&x)return;Ta(k.relativePath.startsWith(u),`Absolute route path "${k.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(u.length)}let N=re([u,k.relativePath]),A=f.concat(k);d.children&&d.children.length>0&&(Ta(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),Jh(d.children,c,A,N,x)),!(d.path==null&&!d.index)&&c.push({path:N,score:vg(N,d.index),routesMeta:A})};return l.forEach((d,b)=>{if(d.path===""||!d.path?.includes("?"))m(d,b);else for(let x of Fh(d.path))m(d,b,!0,x)}),c}function Fh(l){let c=l.split("/");if(c.length===0)return[];let[f,...u]=c,h=f.endsWith("?"),m=f.replace(/\?$/,"");if(u.length===0)return h?[m,""]:[m];let d=Fh(u.join("/")),b=[];return b.push(...d.map(x=>x===""?m:[m,x].join("/"))),h&&b.push(...d),b.map(x=>l.startsWith("/")&&x===""?"/":x)}function hg(l){l.sort((c,f)=>c.score!==f.score?f.score-c.score:wg(c.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var dg=/^:[\w-]+$/,mg=3,gg=2,yg=1,bg=10,xg=-2,Oh=l=>l==="*";function vg(l,c){let f=l.split("/"),u=f.length;return f.some(Oh)&&(u+=xg),c&&(u+=gg),f.filter(h=>!Oh(h)).reduce((h,m)=>h+(dg.test(m)?mg:m===""?yg:bg),u)}function wg(l,c){return l.length===c.length&&l.slice(0,-1).every((u,h)=>u===c[h])?l[l.length-1]-c[c.length-1]:0}function kg(l,c,f=!1){let{routesMeta:u}=l,h={},m="/",d=[];for(let b=0;b<u.length;++b){let x=u[b],g=b===u.length-1,k=m==="/"?c:c.slice(m.length)||"/",N=js({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},k),A=x.route;if(!N&&g&&f&&!u[u.length-1].route.index&&(N=js({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},k)),!N)return null;Object.assign(h,N.params),d.push({params:h,pathname:re([m,N.pathname]),pathnameBase:Tg(re([m,N.pathnameBase])),route:A}),N.pathnameBase!=="/"&&(m=re([m,N.pathnameBase]))}return d}function js(l,c){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[f,u]=jg(l.path,l.caseSensitive,l.end),h=c.match(f);if(!h)return null;let m=h[0],d=m.replace(/(.)\/+$/,"$1"),b=h.slice(1);return{params:u.reduce((g,{paramName:k,isOptional:N},A)=>{if(k==="*"){let L=b[A]||"";d=m.slice(0,m.length-L.length).replace(/(.)\/+$/,"$1")}const R=b[A];return N&&!R?g[k]=void 0:g[k]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:d,pattern:l}}function jg(l,c=!1,f=!0){Dt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],h="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,b,x)=>(u.push({paramName:b,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(u.push({paramName:"*"}),h+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?h+="\\/*$":l!==""&&l!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,c?void 0:"i"),u]}function Ng(l){try{return l.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Dt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),l}}function ue(l,c){if(c==="/")return l;if(!l.toLowerCase().startsWith(c.toLowerCase()))return null;let f=c.endsWith("/")?c.length-1:c.length,u=l.charAt(f);return u&&u!=="/"?null:l.slice(f)||"/"}var $h=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zg=l=>$h.test(l);function Sg(l,c="/"){let{pathname:f,search:u="",hash:h=""}=typeof l=="string"?Zn(l):l,m;if(f)if(zg(f))m=f;else{if(f.includes("//")){let d=f;f=f.replace(/\/\/+/g,"/"),Dt(!1,`Pathnames cannot have embedded double slashes - normalizing ${d} -> ${f}`)}f.startsWith("/")?m=qh(f.substring(1),"/"):m=qh(f,c)}else m=c;return{pathname:m,search:_g(u),hash:Ag(h)}}function qh(l,c){let f=c.replace(/\/+$/,"").split("/");return l.split("/").forEach(h=>{h===".."?f.length>1&&f.pop():h!=="."&&f.push(h)}),f.length>1?f.join("/"):"/"}function Ir(l,c,f,u){return`Cannot include a '${l}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Eg(l){return l.filter((c,f)=>f===0||c.route.path&&c.route.path.length>0)}function Wh(l){let c=Eg(l);return c.map((f,u)=>u===c.length-1?f.pathname:f.pathnameBase)}function Ih(l,c,f,u=!1){let h;typeof l=="string"?h=Zn(l):(h={...l},Ta(!h.pathname||!h.pathname.includes("?"),Ir("?","pathname","search",h)),Ta(!h.pathname||!h.pathname.includes("#"),Ir("#","pathname","hash",h)),Ta(!h.search||!h.search.includes("#"),Ir("#","search","hash",h)));let m=l===""||h.pathname==="",d=m?"/":h.pathname,b;if(d==null)b=f;else{let N=c.length-1;if(!u&&d.startsWith("..")){let A=d.split("/");for(;A[0]==="..";)A.shift(),N-=1;h.pathname=A.join("/")}b=N>=0?c[N]:"/"}let x=Sg(h,b),g=d&&d!=="/"&&d.endsWith("/"),k=(m||d===".")&&f.endsWith("/");return!x.pathname.endsWith("/")&&(g||k)&&(x.pathname+="/"),x}var re=l=>l.join("/").replace(/\/\/+/g,"/"),Tg=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),_g=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Ag=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Cg=class{constructor(l,c,f,u=!1){this.status=l,this.statusText=c||"",this.internal=u,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Mg(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Rg(l){return l.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ad=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function td(l,c){let f=l;if(typeof f!="string"||!$h.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let u=f,h=!1;if(ad)try{let m=new URL(window.location.href),d=f.startsWith("//")?new URL(m.protocol+f):new URL(f),b=ue(d.pathname,c);d.origin===m.origin&&b!=null?f=b+d.search+d.hash:h=!0}catch{Dt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:h,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ed=["POST","PUT","PATCH","DELETE"];new Set(ed);var Og=["GET",...ed];new Set(Og);var Kn=T.createContext(null);Kn.displayName="DataRouter";var zs=T.createContext(null);zs.displayName="DataRouterState";var qg=T.createContext(!1),nd=T.createContext({isTransitioning:!1});nd.displayName="ViewTransition";var Dg=T.createContext(new Map);Dg.displayName="Fetchers";var Ug=T.createContext(null);Ug.displayName="Await";var At=T.createContext(null);At.displayName="Navigation";var Ji=T.createContext(null);Ji.displayName="Location";var Yt=T.createContext({outlet:null,matches:[],isDataRoute:!1});Yt.displayName="Route";var ru=T.createContext(null);ru.displayName="RouteError";var id="REACT_ROUTER_ERROR",Lg="REDIRECT",Hg="ROUTE_ERROR_RESPONSE";function Bg(l){if(l.startsWith(`${id}:${Lg}:{`))try{let c=JSON.parse(l.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function Pg(l){if(l.startsWith(`${id}:${Hg}:{`))try{let c=JSON.parse(l.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Cg(c.status,c.statusText,c.data)}catch{}}function Yg(l,{relative:c}={}){Ta(Fi(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=T.useContext(At),{hash:h,pathname:m,search:d}=$i(l,{relative:c}),b=m;return f!=="/"&&(b=m==="/"?f:re([f,m])),u.createHref({pathname:b,search:d,hash:h})}function Fi(){return T.useContext(Ji)!=null}function sn(){return Ta(Fi(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Ji).location}var od="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sd(l){T.useContext(At).static||T.useLayoutEffect(l)}function uu(){let{isDataRoute:l}=T.useContext(Yt);return l?ty():Gg()}function Gg(){Ta(Fi(),"useNavigate() may be used only in the context of a <Router> component.");let l=T.useContext(Kn),{basename:c,navigator:f}=T.useContext(At),{matches:u}=T.useContext(Yt),{pathname:h}=sn(),m=JSON.stringify(Wh(u)),d=T.useRef(!1);return sd(()=>{d.current=!0}),T.useCallback((x,g={})=>{if(Dt(d.current,od),!d.current)return;if(typeof x=="number"){f.go(x);return}let k=Ih(x,JSON.parse(m),h,g.relative==="path");l==null&&c!=="/"&&(k.pathname=k.pathname==="/"?c:re([c,k.pathname])),(g.replace?f.replace:f.push)(k,g.state,g)},[c,f,m,h,l])}T.createContext(null);function Ss(){let{matches:l}=T.useContext(Yt),c=l[l.length-1];return c?c.params:{}}function $i(l,{relative:c}={}){let{matches:f}=T.useContext(Yt),{pathname:u}=sn(),h=JSON.stringify(Wh(f));return T.useMemo(()=>Ih(l,JSON.parse(h),u,c==="path"),[l,h,u,c])}function Xg(l,c){return ld(l,c)}function ld(l,c,f,u,h){Ta(Fi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=T.useContext(At),{matches:d}=T.useContext(Yt),b=d[d.length-1],x=b?b.params:{},g=b?b.pathname:"/",k=b?b.pathnameBase:"/",N=b&&b.route;{let B=N&&N.path||"";ud(g,!N||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let A=sn(),R;if(c){let B=typeof c=="string"?Zn(c):c;Ta(k==="/"||B.pathname?.startsWith(k),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${B.pathname}" was given in the \`location\` prop.`),R=B}else R=A;let L=R.pathname||"/",H=L;if(k!=="/"){let B=k.replace(/^\//,"").split("/");H="/"+L.replace(/^\//,"").split("/").slice(B.length).join("/")}let P=Kh(l,{pathname:H});Dt(N||P!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),Dt(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=Jg(P&&P.map(B=>Object.assign({},B,{params:Object.assign({},x,B.params),pathname:re([k,m.encodeLocation?m.encodeLocation(B.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?k:re([k,m.encodeLocation?m.encodeLocation(B.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),d,f,u,h);return c&&U?T.createElement(Ji.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},U):U}function Qg(){let l=ay(),c=Mg(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),f=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},d=null;return console.error("Error handled by React Router default ErrorBoundary:",l),d=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:m},"ErrorBoundary")," or"," ",T.createElement("code",{style:m},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},c),f?T.createElement("pre",{style:h},f):null,d)}var Vg=T.createElement(Qg,null),rd=class extends T.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,c){return c.location!==l.location||c.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:c.error,location:c.location,revalidation:l.revalidation||c.revalidation}}componentDidCatch(l,c){this.props.onError?this.props.onError(l,c):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const f=Pg(l.digest);f&&(l=f)}let c=l!==void 0?T.createElement(Yt.Provider,{value:this.props.routeContext},T.createElement(ru.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?T.createElement(Zg,{error:l},c):c}};rd.contextType=qg;var au=new WeakMap;function Zg({children:l,error:c}){let{basename:f}=T.useContext(At);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let u=Bg(c.digest);if(u){let h=au.get(c);if(h)throw h;let m=td(u.location,f);if(ad&&!au.get(c))if(m.isExternal||u.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:u.replace}));throw au.set(c,d),d}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return l}function Kg({routeContext:l,match:c,children:f}){let u=T.useContext(Kn);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),T.createElement(Yt.Provider,{value:l},f)}function Jg(l,c=[],f=null,u=null,h=null){if(l==null){if(!f)return null;if(f.errors)l=f.matches;else if(c.length===0&&!f.initialized&&f.matches.length>0)l=f.matches;else return null}let m=l,d=f?.errors;if(d!=null){let k=m.findIndex(N=>N.route.id&&d?.[N.route.id]!==void 0);Ta(k>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),m=m.slice(0,Math.min(m.length,k+1))}let b=!1,x=-1;if(f)for(let k=0;k<m.length;k++){let N=m[k];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(x=k),N.route.id){let{loaderData:A,errors:R}=f,L=N.route.loader&&!A.hasOwnProperty(N.route.id)&&(!R||R[N.route.id]===void 0);if(N.route.lazy||L){b=!0,x>=0?m=m.slice(0,x+1):m=[m[0]];break}}}let g=f&&u?(k,N)=>{u(k,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:Rg(f.matches),errorInfo:N})}:void 0;return m.reduceRight((k,N,A)=>{let R,L=!1,H=null,P=null;f&&(R=d&&N.route.id?d[N.route.id]:void 0,H=N.route.errorElement||Vg,b&&(x<0&&A===0?(ud("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,P=null):x===A&&(L=!0,P=N.route.hydrateFallbackElement||null)));let U=c.concat(m.slice(0,A+1)),B=()=>{let X;return R?X=H:L?X=P:N.route.Component?X=T.createElement(N.route.Component,null):N.route.element?X=N.route.element:X=k,T.createElement(Kg,{match:N,routeContext:{outlet:k,matches:U,isDataRoute:f!=null},children:X})};return f&&(N.route.ErrorBoundary||N.route.errorElement||A===0)?T.createElement(rd,{location:f.location,revalidation:f.revalidation,component:H,error:R,children:B(),routeContext:{outlet:null,matches:U,isDataRoute:!0},onError:g}):B()},null)}function cu(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fg(l){let c=T.useContext(Kn);return Ta(c,cu(l)),c}function $g(l){let c=T.useContext(zs);return Ta(c,cu(l)),c}function Wg(l){let c=T.useContext(Yt);return Ta(c,cu(l)),c}function pu(l){let c=Wg(l),f=c.matches[c.matches.length-1];return Ta(f.route.id,`${l} can only be used on routes that contain a unique "id"`),f.route.id}function Ig(){return pu("useRouteId")}function ay(){let l=T.useContext(ru),c=$g("useRouteError"),f=pu("useRouteError");return l!==void 0?l:c.errors?.[f]}function ty(){let{router:l}=Fg("useNavigate"),c=pu("useNavigate"),f=T.useRef(!1);return sd(()=>{f.current=!0}),T.useCallback(async(h,m={})=>{Dt(f.current,od),f.current&&(typeof h=="number"?await l.navigate(h):await l.navigate(h,{fromRouteId:c,...m}))},[l,c])}var Dh={};function ud(l,c,f){!c&&!Dh[l]&&(Dh[l]=!0,Dt(!1,f))}T.memo(ey);function ey({routes:l,future:c,state:f,onError:u}){return ld(l,void 0,f,u,c)}function Tt(l){Ta(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ny({basename:l="/",children:c=null,location:f,navigationType:u="POP",navigator:h,static:m=!1,unstable_useTransitions:d}){Ta(!Fi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),x=T.useMemo(()=>({basename:b,navigator:h,static:m,unstable_useTransitions:d,future:{}}),[b,h,m,d]);typeof f=="string"&&(f=Zn(f));let{pathname:g="/",search:k="",hash:N="",state:A=null,key:R="default"}=f,L=T.useMemo(()=>{let H=ue(g,b);return H==null?null:{location:{pathname:H,search:k,hash:N,state:A,key:R},navigationType:u}},[b,g,k,N,A,R,u]);return Dt(L!=null,`<Router basename="${b}"> is not able to match the URL "${g}${k}${N}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:T.createElement(At.Provider,{value:x},T.createElement(Ji.Provider,{children:c,value:L}))}function iy({children:l,location:c}){return Xg(ou(l),c)}function ou(l,c=[]){let f=[];return T.Children.forEach(l,(u,h)=>{if(!T.isValidElement(u))return;let m=[...c,h];if(u.type===T.Fragment){f.push.apply(f,ou(u.props.children,m));return}Ta(u.type===Tt,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ta(!u.props.index||!u.props.children,"An index route cannot have child routes.");let d={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(d.children=ou(u.props.children,m)),f.push(d)}),f}var ws="get",ks="application/x-www-form-urlencoded";function Es(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function oy(l){return Es(l)&&l.tagName.toLowerCase()==="button"}function sy(l){return Es(l)&&l.tagName.toLowerCase()==="form"}function ly(l){return Es(l)&&l.tagName.toLowerCase()==="input"}function ry(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function uy(l,c){return l.button===0&&(!c||c==="_self")&&!ry(l)}var bs=null;function cy(){if(bs===null)try{new FormData(document.createElement("form"),0),bs=!1}catch{bs=!0}return bs}var py=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function tu(l){return l!=null&&!py.has(l)?(Dt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ks}"`),null):l}function fy(l,c){let f,u,h,m,d;if(sy(l)){let b=l.getAttribute("action");u=b?ue(b,c):null,f=l.getAttribute("method")||ws,h=tu(l.getAttribute("enctype"))||ks,m=new FormData(l)}else if(oy(l)||ly(l)&&(l.type==="submit"||l.type==="image")){let b=l.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=l.getAttribute("formaction")||b.getAttribute("action");if(u=x?ue(x,c):null,f=l.getAttribute("formmethod")||b.getAttribute("method")||ws,h=tu(l.getAttribute("formenctype"))||tu(b.getAttribute("enctype"))||ks,m=new FormData(b,l),!cy()){let{name:g,type:k,value:N}=l;if(k==="image"){let A=g?`${g}.`:"";m.append(`${A}x`,"0"),m.append(`${A}y`,"0")}else g&&m.append(g,N)}}else{if(Es(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=ws,u=null,h=ks,d=l}return m&&h==="text/plain"&&(d=m,m=void 0),{action:u,method:f.toLowerCase(),encType:h,formData:m,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fu(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function hy(l,c,f,u){let h=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return f?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${u}`:h.pathname=`${h.pathname}.${u}`:h.pathname==="/"?h.pathname=`_root.${u}`:c&&ue(h.pathname,c)==="/"?h.pathname=`${c.replace(/\/$/,"")}/_root.${u}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${u}`,h}async function dy(l,c){if(l.id in c)return c[l.id];try{let f=await import(l.module);return c[l.id]=f,f}catch(f){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function my(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function gy(l,c,f){let u=await Promise.all(l.map(async h=>{let m=c.routes[h.route.id];if(m){let d=await dy(m,f);return d.links?d.links():[]}return[]}));return vy(u.flat(1).filter(my).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function Uh(l,c,f,u,h,m){let d=(x,g)=>f[g]?x.route.id!==f[g].route.id:!0,b=(x,g)=>f[g].pathname!==x.pathname||f[g].route.path?.endsWith("*")&&f[g].params["*"]!==x.params["*"];return m==="assets"?c.filter((x,g)=>d(x,g)||b(x,g)):m==="data"?c.filter((x,g)=>{let k=u.routes[x.route.id];if(!k||!k.hasLoader)return!1;if(d(x,g)||b(x,g))return!0;if(x.route.shouldRevalidate){let N=x.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function yy(l,c,{includeHydrateFallback:f}={}){return by(l.map(u=>{let h=c.routes[u.route.id];if(!h)return[];let m=[h.module];return h.clientActionModule&&(m=m.concat(h.clientActionModule)),h.clientLoaderModule&&(m=m.concat(h.clientLoaderModule)),f&&h.hydrateFallbackModule&&(m=m.concat(h.hydrateFallbackModule)),h.imports&&(m=m.concat(h.imports)),m}).flat(1))}function by(l){return[...new Set(l)]}function xy(l){let c={},f=Object.keys(l).sort();for(let u of f)c[u]=l[u];return c}function vy(l,c){let f=new Set;return new Set(c),l.reduce((u,h)=>{let m=JSON.stringify(xy(h));return f.has(m)||(f.add(m),u.push({key:m,link:h})),u},[])}function cd(){let l=T.useContext(Kn);return fu(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function wy(){let l=T.useContext(zs);return fu(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var hu=T.createContext(void 0);hu.displayName="FrameworkContext";function pd(){let l=T.useContext(hu);return fu(l,"You must render this element inside a <HydratedRouter> element"),l}function ky(l,c){let f=T.useContext(hu),[u,h]=T.useState(!1),[m,d]=T.useState(!1),{onFocus:b,onBlur:x,onMouseEnter:g,onMouseLeave:k,onTouchStart:N}=c,A=T.useRef(null);T.useEffect(()=>{if(l==="render"&&d(!0),l==="viewport"){let H=U=>{U.forEach(B=>{d(B.isIntersecting)})},P=new IntersectionObserver(H,{threshold:.5});return A.current&&P.observe(A.current),()=>{P.disconnect()}}},[l]),T.useEffect(()=>{if(u){let H=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(H)}}},[u]);let R=()=>{h(!0)},L=()=>{h(!1),d(!1)};return f?l!=="intent"?[m,A,{}]:[m,A,{onFocus:Qi(b,R),onBlur:Qi(x,L),onMouseEnter:Qi(g,R),onMouseLeave:Qi(k,L),onTouchStart:Qi(N,R)}]:[!1,A,{}]}function Qi(l,c){return f=>{l&&l(f),f.defaultPrevented||c(f)}}function jy({page:l,...c}){let{router:f}=cd(),u=T.useMemo(()=>Kh(f.routes,l,f.basename),[f.routes,l,f.basename]);return u?T.createElement(zy,{page:l,matches:u,...c}):null}function Ny(l){let{manifest:c,routeModules:f}=pd(),[u,h]=T.useState([]);return T.useEffect(()=>{let m=!1;return gy(l,c,f).then(d=>{m||h(d)}),()=>{m=!0}},[l,c,f]),u}function zy({page:l,matches:c,...f}){let u=sn(),{future:h,manifest:m,routeModules:d}=pd(),{basename:b}=cd(),{loaderData:x,matches:g}=wy(),k=T.useMemo(()=>Uh(l,c,g,m,u,"data"),[l,c,g,m,u]),N=T.useMemo(()=>Uh(l,c,g,m,u,"assets"),[l,c,g,m,u]),A=T.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let H=new Set,P=!1;if(c.forEach(B=>{let X=m.routes[B.route.id];!X||!X.hasLoader||(!k.some(ta=>ta.route.id===B.route.id)&&B.route.id in x&&d[B.route.id]?.shouldRevalidate||X.hasClientLoader?P=!0:H.add(B.route.id))}),H.size===0)return[];let U=hy(l,b,h.unstable_trailingSlashAwareDataRequests,"data");return P&&H.size>0&&U.searchParams.set("_routes",c.filter(B=>H.has(B.route.id)).map(B=>B.route.id).join(",")),[U.pathname+U.search]},[b,h.unstable_trailingSlashAwareDataRequests,x,u,m,k,c,l,d]),R=T.useMemo(()=>yy(N,m),[N,m]),L=Ny(N);return T.createElement(T.Fragment,null,A.map(H=>T.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...f})),R.map(H=>T.createElement("link",{key:H,rel:"modulepreload",href:H,...f})),L.map(({key:H,link:P})=>T.createElement("link",{key:H,nonce:f.nonce,...P})))}function Sy(...l){return c=>{l.forEach(f=>{typeof f=="function"?f(c):f!=null&&(f.current=c)})}}var Ey=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ey&&(window.__reactRouterVersion="7.12.0")}catch{}function Ty({basename:l,children:c,unstable_useTransitions:f,window:u}){let h=T.useRef();h.current==null&&(h.current=rg({window:u,v5Compat:!0}));let m=h.current,[d,b]=T.useState({action:m.action,location:m.location}),x=T.useCallback(g=>{f===!1?b(g):T.startTransition(()=>b(g))},[f]);return T.useLayoutEffect(()=>m.listen(x),[m,x]),T.createElement(ny,{basename:l,children:c,location:d.location,navigationType:d.action,navigator:m,unstable_useTransitions:f})}var fd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ca=T.forwardRef(function({onClick:c,discover:f="render",prefetch:u="none",relative:h,reloadDocument:m,replace:d,state:b,target:x,to:g,preventScrollReset:k,viewTransition:N,unstable_defaultShouldRevalidate:A,...R},L){let{basename:H,unstable_useTransitions:P}=T.useContext(At),U=typeof g=="string"&&fd.test(g),B=td(g,H);g=B.to;let X=Yg(g,{relative:h}),[ta,na,ma]=ky(u,R),F=Cy(g,{replace:d,state:b,target:x,preventScrollReset:k,relative:h,viewTransition:N,unstable_defaultShouldRevalidate:A,unstable_useTransitions:P});function Na(Ja){c&&c(Ja),Ja.defaultPrevented||F(Ja)}let Ba=T.createElement("a",{...R,...ma,href:B.absoluteURL||X,onClick:B.isExternal||m?c:Na,ref:Sy(L,na),target:x,"data-discover":!U&&f==="render"?"true":void 0});return ta&&!U?T.createElement(T.Fragment,null,Ba,T.createElement(jy,{page:X})):Ba});Ca.displayName="Link";var su=T.forwardRef(function({"aria-current":c="page",caseSensitive:f=!1,className:u="",end:h=!1,style:m,to:d,viewTransition:b,children:x,...g},k){let N=$i(d,{relative:g.relative}),A=sn(),R=T.useContext(zs),{navigator:L,basename:H}=T.useContext(At),P=R!=null&&Dy(N)&&b===!0,U=L.encodeLocation?L.encodeLocation(N).pathname:N.pathname,B=A.pathname,X=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;f||(B=B.toLowerCase(),X=X?X.toLowerCase():null,U=U.toLowerCase()),X&&H&&(X=ue(X,H)||X);const ta=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let na=B===U||!h&&B.startsWith(U)&&B.charAt(ta)==="/",ma=X!=null&&(X===U||!h&&X.startsWith(U)&&X.charAt(U.length)==="/"),F={isActive:na,isPending:ma,isTransitioning:P},Na=na?c:void 0,Ba;typeof u=="function"?Ba=u(F):Ba=[u,na?"active":null,ma?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let Ja=typeof m=="function"?m(F):m;return T.createElement(Ca,{...g,"aria-current":Na,className:Ba,ref:k,style:Ja,to:d,viewTransition:b},typeof x=="function"?x(F):x)});su.displayName="NavLink";var _y=T.forwardRef(({discover:l="render",fetcherKey:c,navigate:f,reloadDocument:u,replace:h,state:m,method:d=ws,action:b,onSubmit:x,relative:g,preventScrollReset:k,viewTransition:N,unstable_defaultShouldRevalidate:A,...R},L)=>{let{unstable_useTransitions:H}=T.useContext(At),P=Oy(),U=qy(b,{relative:g}),B=d.toLowerCase()==="get"?"get":"post",X=typeof b=="string"&&fd.test(b),ta=na=>{if(x&&x(na),na.defaultPrevented)return;na.preventDefault();let ma=na.nativeEvent.submitter,F=ma?.getAttribute("formmethod")||d,Na=()=>P(ma||na.currentTarget,{fetcherKey:c,method:F,navigate:f,replace:h,state:m,relative:g,preventScrollReset:k,viewTransition:N,unstable_defaultShouldRevalidate:A});H&&f!==!1?T.startTransition(()=>Na()):Na()};return T.createElement("form",{ref:L,method:B,action:U,onSubmit:u?x:ta,...R,"data-discover":!X&&l==="render"?"true":void 0})});_y.displayName="Form";function Ay(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hd(l){let c=T.useContext(Kn);return Ta(c,Ay(l)),c}function Cy(l,{target:c,replace:f,state:u,preventScrollReset:h,relative:m,viewTransition:d,unstable_defaultShouldRevalidate:b,unstable_useTransitions:x}={}){let g=uu(),k=sn(),N=$i(l,{relative:m});return T.useCallback(A=>{if(uy(A,c)){A.preventDefault();let R=f!==void 0?f:Zi(k)===Zi(N),L=()=>g(l,{replace:R,state:u,preventScrollReset:h,relative:m,viewTransition:d,unstable_defaultShouldRevalidate:b});x?T.startTransition(()=>L()):L()}},[k,g,N,f,u,c,l,h,m,d,b,x])}var My=0,Ry=()=>`__${String(++My)}__`;function Oy(){let{router:l}=hd("useSubmit"),{basename:c}=T.useContext(At),f=Ig(),u=l.fetch,h=l.navigate;return T.useCallback(async(m,d={})=>{let{action:b,method:x,encType:g,formData:k,body:N}=fy(m,c);if(d.navigate===!1){let A=d.fetcherKey||Ry();await u(A,f,d.action||b,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:k,body:N,formMethod:d.method||x,formEncType:d.encType||g,flushSync:d.flushSync})}else await h(d.action||b,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:k,body:N,formMethod:d.method||x,formEncType:d.encType||g,replace:d.replace,state:d.state,fromRouteId:f,flushSync:d.flushSync,viewTransition:d.viewTransition})},[u,h,c,f])}function qy(l,{relative:c}={}){let{basename:f}=T.useContext(At),u=T.useContext(Yt);Ta(u,"useFormAction must be used inside a RouteContext");let[h]=u.matches.slice(-1),m={...$i(l||".",{relative:c})},d=sn();if(l==null){m.search=d.search;let b=new URLSearchParams(m.search),x=b.getAll("index");if(x.some(k=>k==="")){b.delete("index"),x.filter(N=>N).forEach(N=>b.append("index",N));let k=b.toString();m.search=k?`?${k}`:""}}return(!l||l===".")&&h.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(m.pathname=m.pathname==="/"?f:re([f,m.pathname])),Zi(m)}function Dy(l,{relative:c}={}){let f=T.useContext(nd);Ta(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=hd("useViewTransitionState"),h=$i(l,{relative:c});if(!f.isTransitioning)return!1;let m=ue(f.currentLocation.pathname,u)||f.currentLocation.pathname,d=ue(f.nextLocation.pathname,u)||f.nextLocation.pathname;return js(h.pathname,d)!=null||js(h.pathname,m)!=null}const dd=T.createContext(null),Lh="pashto-learning-current-user",Vn=[{id:"user1",name:"User 1",nameEn:"User 1",color:"#3b82f6"},{id:"user2",name:"User 2",nameEn:"User 2",color:"#ec4899"},{id:"user3",name:"User 3",nameEn:"User 3",color:"#10b981"}];function Uy({children:l}){const[c,f]=T.useState(()=>{try{const d=localStorage.getItem(Lh);if(d){const b=JSON.parse(d);if(Vn.find(x=>x.id===b))return b}return Vn[0]?.id||null}catch{return Vn[0]?.id||null}});T.useEffect(()=>{c&&localStorage.setItem(Lh,JSON.stringify(c))},[c]);const m={users:Vn,currentUser:c,setCurrentUser:d=>{Vn.find(b=>b.id===d)&&f(d)},getCurrentUserData:()=>Vn.find(d=>d.id===c)||null};return s.jsx(dd.Provider,{value:m,children:l})}function Wi(){const l=T.useContext(dd);if(!l)throw new Error("useUser must be used within a UserProvider");return l}const Ly=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),md=(...l)=>l.filter((c,f,u)=>!!c&&c.trim()!==""&&u.indexOf(c)===f).join(" ").trim();var Hy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const By=T.forwardRef(({color:l="currentColor",size:c=24,strokeWidth:f=2,absoluteStrokeWidth:u,className:h="",children:m,iconNode:d,...b},x)=>T.createElement("svg",{ref:x,...Hy,width:c,height:c,stroke:l,strokeWidth:u?Number(f)*24/Number(c):f,className:md("lucide",h),...b},[...d.map(([g,k])=>T.createElement(g,k)),...Array.isArray(m)?m:[m]]));const ia=(l,c)=>{const f=T.forwardRef(({className:u,...h},m)=>T.createElement(By,{ref:m,iconNode:c,className:md(`lucide-${Ly(l)}`,u),...h}));return f.displayName=`${l}`,f};const Py=ia("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const Pt=ia("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const at=ia("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const Yy=ia("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);const qe=ia("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const Gy=ia("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const nn=ia("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);const _t=ia("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Xy=ia("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);const Qy=ia("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const gd=ia("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const du=ia("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);const Vy=ia("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);const yd=ia("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);const bd=ia("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);const Zy=ia("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);const Ts=ia("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const xd=ia("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);const Ky=ia("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);const Jy=ia("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);const vd=ia("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);const Fy=ia("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const De=ia("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);const mu=ia("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);const wd=ia("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);const Ns=ia("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const kd=ia("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);const gu=ia("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const yu=ia("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);const $y=ia("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);const jd=ia("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const Nd=ia("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);const on=ia("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);const Jn=ia("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);const zd=ia("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);const Wy=ia("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const bu=ia("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const Hh=ia("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Iy=[{id:"user1",name:"User 1",nameEn:"User 1",color:"#3b82f6",progress:{completedLessons:[],completedPractices:[],completedPhases:[],currentStreak:0,totalXP:0,lastStudyDate:null}},{id:"user2",name:"User 2",nameEn:"User 2",color:"#ec4899",progress:{completedLessons:[],completedPractices:[],completedPhases:[],currentStreak:0,totalXP:0,lastStudyDate:null}},{id:"user3",name:"User 3",nameEn:"User 3",color:"#10b981",progress:{completedLessons:[],completedPractices:[],completedPhases:[],currentStreak:0,totalXP:0,lastStudyDate:null}}],ab={users:Iy},Sd=T.createContext(null),Bh="pashto-learning-progress-multi",eu=()=>[{phase:1,lessons:[{id:"alphabet-intro"},{id:"unique-letters"},{id:"kandahari-sounds"},{id:"vowels"}]},{phase:2,lessons:[{id:"basic-greetings"},{id:"how-are-you"},{id:"introductions"},{id:"formal-informal"}]},{phase:3,lessons:[{id:"pronouns"},{id:"possessive-pronouns"},{id:"demonstratives"},{id:"sentence-structure"}]},{phase:4,lessons:[{id:"gender"},{id:"plural"},{id:"adjectives"},{id:"prepositions"},{id:"questions"},{id:"negation"}]},{phase:5,lessons:[{id:"family"},{id:"numbers-11-100"},{id:"food"},{id:"body-parts"},{id:"colors"},{id:"days-months"}]},{phase:6,lessons:[{id:"verb-to-be"},{id:"verb-to-go"},{id:"verb-to-come"},{id:"verb-to-eat"},{id:"verb-to-drink"},{id:"verb-to-do"},{id:"verb-to-pour"},{id:"verb-to-want"},{id:"modal-verbs"},{id:"transitive-verbs"}]},{phase:7,lessons:[{id:"past-simple"},{id:"past-to-be"},{id:"past-to-go"},{id:"past-to-come"},{id:"past-to-eat"},{id:"past-to-drink"},{id:"past-to-do"},{id:"past-to-pour"},{id:"past-to-see"}]},{phase:8,lessons:[{id:"future-tense"},{id:"future-to-be"},{id:"future-to-go"},{id:"future-to-come"},{id:"future-to-eat"},{id:"future-to-drink"},{id:"future-to-do"},{id:"future-to-pour"},{id:"imperative"},{id:"imperative-formal"},{id:"requests"}]},{phase:9,lessons:[{id:"comprehensive-verbs"}]},{phase:10,lessons:[{id:"conv-shopping"},{id:"conv-restaurant"},{id:"conv-taxi"},{id:"conv-phone"},{id:"conv-doctor"},{id:"conv-guest"}]},{phase:11,lessons:[{id:"retroflex"},{id:"idioms"},{id:"proverbs"},{id:"kandahari-slang"},{id:"advanced-food-cooking"},{id:"advanced-body-parts"}]}],nu=()=>({completedLessons:[],completedPractices:[],completedPhases:[],currentStreak:0,totalXP:0,lastStudyDate:null});function tb({children:l}){const{currentUser:c}=Wi(),[f,u]=T.useState(()=>{try{const U=localStorage.getItem(Bh);if(U)return JSON.parse(U);const B={};return ab.users.forEach(X=>{B[X.id]=X.progress||nu()}),B}catch{return{}}}),h=f[c]||nu();T.useEffect(()=>{localStorage.setItem(Bh,JSON.stringify(f))},[f]);const m=U=>{u(B=>({...B,[c]:{...nu(),...B[c],...U}}))},P={progress:h,completeLesson:(U,B=10)=>{if(h.completedLessons.includes(U))return;const X=new Date().toDateString(),ta=h.lastStudyDate,na=new Date(Date.now()-864e5).toDateString();let ma=h.currentStreak;ta===na?ma+=1:ta!==X&&(ma=1);const F=[...h.completedLessons,U],Na=[...h.completedPhases];eu().forEach(Ja=>{Na.includes(Ja.phase)||Ja.lessons.every(Fa=>F.includes(Fa.id))&&Na.push(Ja.phase)}),m({completedLessons:F,completedPhases:Na,totalXP:h.totalXP+B,currentStreak:ma,lastStudyDate:X})},uncompleteLesson:U=>{const B=h.completedLessons.filter(ta=>ta!==U),X=h.completedPhases.filter(ta=>{const ma=eu().find(F=>F.phase===ta);return ma?ma.lessons.every(F=>B.includes(F.id)):!0});m({completedLessons:B,completedPhases:X})},completePractice:(U,B=5)=>{h.completedPractices.includes(U)||m({completedPractices:[...h.completedPractices,U],totalXP:h.totalXP+B})},completePhase:U=>{if(h.completedPhases.includes(U))return;const X=eu().find(na=>na.phase===U);if(!X)return;const ta=[...h.completedLessons];X.lessons.forEach(na=>{ta.includes(na.id)||ta.push(na.id)}),m({completedPhases:[...h.completedPhases,U],completedLessons:ta})},uncompletePhase:U=>{m({completedPhases:h.completedPhases.filter(B=>B!==U)})},isLessonCompleted:U=>h.completedLessons.includes(U),isLessonComplete:U=>h.completedLessons.includes(U),isPhaseCompleted:U=>h.completedPhases.includes(U),getProgressPercentage:U=>{if(!U||U.length===0)return 0;const B=U.filter(X=>h.completedLessons.includes(X.id)).length;return Math.round(B/U.length*100)},getCategoryProgress:U=>{if(!U||U.length===0)return 0;const B=U.filter(X=>h.completedLessons.includes(X.id)).length;return Math.round(B/U.length*100)}};return s.jsx(Sd.Provider,{value:P,children:l})}function ln(){const l=T.useContext(Sd);if(!l)throw new Error("useProgress must be used within a ProgressProvider");return l}function eb({onMenuClick:l}){const{progress:c}=ln(),{currentUser:f,users:u,setCurrentUser:h,getCurrentUserData:m}=Wi(),[d,b]=T.useState(!1),[x,g]=T.useState(!1),k=m(),N=R=>{h(R),b(!1)},A=()=>{g(!0),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(R=>{R.forEach(L=>{L.update().then(()=>{L.waiting&&L.waiting.postMessage({type:"SKIP_WAITING"})})})}),setTimeout(()=>{window.location.reload()},500)};return s.jsx("header",{className:"fixed top-0 left-0 right-0 h-16 bg-slate-800 border-b border-slate-700 z-50 backdrop-blur-sm bg-opacity-95",children:s.jsx("div",{className:"h-full px-3 sm:px-4 md:px-6 lg:px-8",children:s.jsxs("div",{className:"flex items-center justify-between h-full",children:[s.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[s.jsx("button",{onClick:l,className:"p-2 hover:bg-slate-700 rounded-xl lg:hidden transition-all border border-slate-600",children:s.jsx(Fy,{className:"w-5 h-5 text-emerald-400"})}),s.jsxs(Ca,{to:"/",className:"flex items-center gap-2 sm:gap-3 group",children:[s.jsx("div",{className:"w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all group-hover:scale-105",children:s.jsx("span",{className:"text-amber-300 font-bold text-xl sm:text-2xl",children:"ښ"})}),s.jsxs("div",{className:"hidden sm:block",children:[s.jsx("h1",{className:"text-base sm:text-lg font-bold text-emerald-400",children:"یادگیری پښتو"}),s.jsx("p",{className:"text-[10px] sm:text-xs text-slate-400 font-medium",children:"د پښتو زده کړه - کندهاری"})]})]})]}),s.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 md:gap-3",children:[s.jsx("button",{onClick:A,disabled:x,className:"p-2 hover:bg-slate-700 rounded-lg sm:rounded-xl border border-slate-600 hover:border-cyan-500/50 transition-all disabled:opacity-50",title:"تازه‌سازی",children:s.jsx(kd,{className:`w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 ${x?"animate-spin":""}`})}),s.jsxs("div",{className:"relative",children:[s.jsxs("button",{onClick:()=>b(!d),className:"flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700/50 rounded-lg sm:rounded-xl border border-indigo-500/30 hover:border-indigo-500/50 transition-all",children:[s.jsx("div",{className:"w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold",style:{backgroundColor:k?.color||"#3b82f6"},children:k?.name.charAt(0)}),s.jsx("span",{className:"hidden sm:inline text-xs sm:text-sm font-semibold text-indigo-300",children:k?.name})]}),d&&s.jsx("div",{className:"absolute top-full right-0 mt-2 w-48 bg-slate-800 rounded-xl border border-slate-700 shadow-lg z-50",children:s.jsx("div",{className:"p-2",children:u.map(R=>s.jsxs("button",{onClick:()=>N(R.id),className:`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${f===R.id?"bg-indigo-500/20 border border-indigo-500/50":"hover:bg-slate-700"}`,children:[s.jsx("div",{className:"w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold",style:{backgroundColor:R.color},children:R.name.charAt(0)}),s.jsxs("div",{className:"text-left flex-1",children:[s.jsx("div",{className:"text-sm font-semibold text-white",children:R.name}),s.jsx("div",{className:"text-xs text-slate-400",children:R.nameEn})]}),f===R.id&&s.jsx("div",{className:"w-2 h-2 bg-indigo-400 rounded-full"})]},R.id))})})]}),s.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700/50 rounded-lg sm:rounded-xl border border-orange-500/30",children:[s.jsx(du,{className:"w-4 h-4 sm:w-5 sm:h-5 text-orange-400"}),s.jsx("span",{className:"text-xs sm:text-sm font-bold text-orange-300",children:c.currentStreak}),s.jsx("span",{className:"hidden sm:inline text-[10px] sm:text-xs text-orange-400/70",children:"روز"})]}),s.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700/50 rounded-lg sm:rounded-xl border border-amber-500/30",children:[s.jsx(on,{className:"w-4 h-4 sm:w-5 sm:h-5 text-amber-400"}),s.jsx("span",{className:"text-xs sm:text-sm font-bold text-amber-300",children:c.totalXP}),s.jsx("span",{className:"hidden sm:inline text-[10px] sm:text-xs text-amber-400/70",children:"XP"})]}),s.jsx("div",{className:"hidden md:flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-700/50 rounded-xl border border-emerald-500/30",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center",children:s.jsx(Yy,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400"})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-[9px] sm:text-[10px] uppercase tracking-wide text-slate-400 font-semibold",children:"پیشرفت"}),s.jsxs("div",{className:"text-xs sm:text-sm font-bold text-slate-200",children:[c.completedLessons?.length||0," درس"]})]})]})})]})]})})})}const nb=JSON.parse('[{"id":"basics","name":"۱. مقدماتی","namePashto":"۱. بنسټیز","nameFa":"مقدماتی","icon":"BookOpen","color":"#22c55e","description":"شروع یادگیری پښتو از صفر","order":1,"lessons":[{"id":"alphabet-intro","title":"آشنایی با الفبا","titleFa":"آشنایی با الفبا","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"unique-letters","title":"حروف خاص پښتو","titleFa":"حروف خاص پښتو","difficulty":"easy","duration":"۲۰ دقیقه"},{"id":"kandahari-sounds","title":"صداهای کندهاری","titleFa":"صداهای کندهاری","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"vowels","title":"مصوت‌ها","titleFa":"مصوت‌ها","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"numbers-1-10","title":"اعداد ۱ تا ۱۰","titleFa":"اعداد ۱ تا ۱۰","difficulty":"easy","duration":"۱۰ دقیقه"}]},{"id":"greetings","name":"۲. سلام و احوالپرسی","namePashto":"۲. سلام او حال احوال","nameFa":"سلام و احوالپرسی","icon":"MessageCircle","color":"#ec4899","description":"سلام کردن و احوالپرسی روزمره","order":2,"lessons":[{"id":"basic-greetings","title":"سلام و خداحافظی","titleFa":"سلام و خداحافظی","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"how-are-you","title":"حالت چطور است؟","titleFa":"حالت چطور است؟","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"introductions","title":"معرفی خود","titleFa":"معرفی خود","difficulty":"easy","duration":"۲۰ دقیقه"},{"id":"formal-informal","title":"رسمی و غیررسمی","titleFa":"رسمی و غیررسمی","difficulty":"medium","duration":"۲۰ دقیقه"}]},{"id":"pronouns-basics","name":"۳. ضمایر و پایه‌ها","namePashto":"۳. ضمیرونه او بنسټونه","nameFa":"ضمایر و پایه‌ها","icon":"Users","color":"#3b82f6","description":"ضمایر شخصی و ساختار پایه","order":3,"lessons":[{"id":"pronouns","title":"ضمایر شخصی","titleFa":"ضمایر شخصی","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"possessive-pronouns","title":"ضمایر ملکی","titleFa":"ضمایر ملکی","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"demonstratives","title":"ضمایر اشاره","titleFa":"ضمایر اشاره","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"sentence-structure","title":"ساختار جمله SOV","titleFa":"ساختار جمله SOV","difficulty":"medium","duration":"۲۰ دقیقه"}]},{"id":"grammar-intermediate","name":"۴. دستور زبان میانی","namePashto":"۴. منځنی ګرامر","nameFa":"دستور زبان میانی","icon":"BookOpen","color":"#ef4444","description":"قواعد دستوری پیشرفته‌تر","order":4,"lessons":[{"id":"gender","title":"جنسیت اسم‌ها","titleFa":"جنسیت اسم‌ها","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"plural","title":"جمع بستن","titleFa":"جمع بستن","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"adjectives","title":"صفت‌ها","titleFa":"صفت‌ها","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"prepositions","title":"حروف اضافه","titleFa":"حروف اضافه","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"questions","title":"جملات سوالی","titleFa":"جملات سوالی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"negation","title":"جملات منفی","titleFa":"جملات منفی","difficulty":"medium","duration":"۲۰ دقیقه"}]},{"id":"vocabulary-basic","name":"۵. واژگان پایه","namePashto":"۵. بنسټیز لغات","nameFa":"واژگان پایه","icon":"Library","color":"#14b8a6","description":"کلمات ضروری برای مکالمه روزمره","order":5,"lessons":[{"id":"family","title":"خانواده","titleFa":"خانواده","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"numbers-11-100","title":"اعداد ۱۱ تا ۱۰۰","titleFa":"اعداد ۱۱ تا ۱۰۰","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"food","title":"غذا و نوشیدنی","titleFa":"غذا و نوشیدنی","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"body-parts","title":"اعضای بدن","titleFa":"اعضای بدن","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"colors","title":"رنگ‌ها","titleFa":"رنگ‌ها","difficulty":"easy","duration":"۱۰ دقیقه"},{"id":"days-months","title":"روزها و ماه‌ها","titleFa":"روزها و ماه‌ها","difficulty":"easy","duration":"۱۵ دقیقه"}]},{"id":"verbs-present","name":"۶. فعل حال","namePashto":"۶. اوسمهال فعلونه","nameFa":"فعل حال","icon":"Play","color":"#f59e0b","description":"گردان فعل‌ها در زمان حال","order":6,"lessons":[{"id":"verb-to-be","title":"فعل بودن (یم/دی)","titleFa":"فعل بودن (یم/دی)","difficulty":"easy","duration":"۲۰ دقیقه"},{"id":"verb-to-go","title":"فعل رفتن (ځم)","titleFa":"فعل رفتن (ځم)","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"verb-to-come","title":"فعل آمدن (راځم)","titleFa":"فعل آمدن (راځم)","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"verb-to-eat","title":"فعل خوردن (خورم)","titleFa":"فعل خوردن (خورم)","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"verb-to-drink","title":"فعل نوشیدن (څښم)","titleFa":"فعل نوشیدن (څښم)","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"verb-to-do","title":"فعل کردن (کوم)","titleFa":"فعل کردن (کوم)","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"verb-to-pour","title":"فعل ریختن (ریختم)","titleFa":"فعل ریختن (ریختم)","difficulty":"medium","duration":"۲۵ دقیقه","hasPractice":false},{"id":"verb-to-want","title":"فعل خواستن (غواړم)","titleFa":"فعل خواستن (غواړم)","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"verb-to-hit","title":"فعل زدن (زنم)","titleFa":"فعل زدن (زنم)","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-to-wash","title":"فعل شستل (شونم)","titleFa":"فعل شستل (شونم)","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-to-give","title":"فعل ورکول (ورکوم)","titleFa":"فعل ورکول (ورکوم)","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-to-take","title":"فعل نیول (نیسم)","titleFa":"فعل نیول (نیسم)","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-to-stand","title":"فعل ایستل (ایسته‌ږم)","titleFa":"فعل ایستل (ایسته‌ږم)","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-to-run","title":"فعل منډې وهل (دویدن)","titleFa":"فعل منډې وهل (دویدن)","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-to-close","title":"فعل ترل (بستن)","titleFa":"فعل ترل (بستن)","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-to-open","title":"فعل خلاصول (باز کردن)","titleFa":"فعل خلاصول (باز کردن)","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"modal-verbs","title":"فعل‌های کمکی (Modal Verbs)","titleFa":"فعل‌های کمکی","difficulty":"medium","duration":"۳۰ دقیقه"},{"id":"transitive-verbs","title":"فعل‌های انتقالی","titleFa":"فعل‌های انتقالی","difficulty":"medium","duration":"۲۵ دقیقه"}]},{"id":"verbs-past","name":"۷. فعل گذشته","namePashto":"۷. تېرمهال فعلونه","nameFa":"فعل گذشته","icon":"Clock","color":"#8b5cf6","description":"گردان فعل‌ها در زمان گذشته","order":7,"lessons":[{"id":"past-simple","title":"گذشته ساده","titleFa":"گذشته ساده","difficulty":"medium","duration":"۳۰ دقیقه"},{"id":"past-to-be","title":"بودم (وم)","titleFa":"بودم (وم)","difficulty":"easy","duration":"۲۰ دقیقه","hasPractice":false},{"id":"past-to-go","title":"رفتم (لاړم)","titleFa":"رفتم (لاړم)","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"past-to-come","title":"آمدم (راغلم)","titleFa":"آمدم (راغلم)","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"past-to-eat","title":"خوردم (وخوړم)","titleFa":"خوردم (وخوړم)","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"past-to-drink","title":"نوشیدم (وڅښم)","titleFa":"نوشیدم (وڅښم)","difficulty":"medium","duration":"۲۵ دقیقه","hasPractice":false},{"id":"past-to-do","title":"کردم (وکړم)","titleFa":"کردم (وکړم)","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"past-to-pour","title":"ریختم (وریخت)","titleFa":"ریختم (وریخت)","difficulty":"medium","duration":"۲۵ دقیقه","hasPractice":false},{"id":"past-to-see","title":"دیدم (ولیدم)","titleFa":"دیدم (ولیدم)","difficulty":"medium","duration":"۲۵ دقیقه"}]},{"id":"verbs-future","name":"۸. فعل آینده و امری","namePashto":"۸. راتلونکي او امري فعلونه","nameFa":"فعل آینده و امری","icon":"ArrowRight","color":"#06b6d4","description":"زمان آینده و دستوری","order":8,"lessons":[{"id":"future-tense","title":"زمان آینده","titleFa":"زمان آینده","difficulty":"medium","duration":"۳۰ دقیقه"},{"id":"future-to-be","title":"خواهم بود (به یم)","titleFa":"خواهم بود (به یم)","difficulty":"medium","duration":"۲۵ دقیقه","hasPractice":false},{"id":"future-to-go","title":"خواهم رفت (به ځم)","titleFa":"خواهم رفت (به ځم)","difficulty":"medium","duration":"۲۵ دقیقه","hasPractice":false},{"id":"future-to-come","title":"خواهم آمد (به راځم)","titleFa":"خواهم آمد (به راځم)","difficulty":"medium","duration":"۲۵ دقیقه","hasPractice":false},{"id":"future-to-eat","title":"خواهم خورد (به خورم)","titleFa":"خواهم خورد (به خورم)","difficulty":"medium","duration":"۲۵ دقیقه","hasPractice":false},{"id":"future-to-drink","title":"خواهم نوشید (به څښم)","titleFa":"خواهم نوشید (به څښم)","difficulty":"medium","duration":"۲۵ دقیقه","hasPractice":false},{"id":"future-to-do","title":"خواهم کرد (به کوم)","titleFa":"خواهم کرد (به کوم)","difficulty":"medium","duration":"۲۵ دقیقه","hasPractice":false},{"id":"future-to-pour","title":"خواهم ریخت (به ریختم)","titleFa":"خواهم ریخت (به ریختم)","difficulty":"medium","duration":"۲۵ دقیقه","hasPractice":false},{"id":"imperative","title":"فعل امری","titleFa":"فعل امری","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"imperative-formal","title":"امری رسمی","titleFa":"امری رسمی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"requests","title":"درخواست کردن","titleFa":"درخواست کردن","difficulty":"medium","duration":"۲۰ دقیقه"}]},{"id":"verbs-comprehensive","name":"۹. فعل‌های جامع","namePashto":"۹. د فعلونو مجموعه","nameFa":"فعل‌های جامع","icon":"Play","color":"#f59e0b","description":"فعل‌های اساسی در تمام زمان‌ها","order":9,"lessons":[{"id":"comprehensive-verbs","title":"فعل‌های اساسی - تمام زمان‌ها","titleFa":"فعل‌های اساسی - تمام زمان‌ها","difficulty":"hard","duration":"۴۵ دقیقه"}]},{"id":"conversations","name":"۱۰. مکالمات روزمره","namePashto":"۱۰. ورځنۍ خبرې","nameFa":"مکالمات روزمره","icon":"MessageSquare","color":"#f97316","description":"مکالمات عملی در موقعیت‌های مختلف","order":10,"lessons":[{"id":"conv-shopping","title":"در بازار","titleFa":"در بازار","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"conv-restaurant","title":"در رستوران","titleFa":"در رستوران","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"conv-taxi","title":"در تاکسی","titleFa":"در تاکسی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"conv-phone","title":"مکالمه تلفنی","titleFa":"مکالمه تلفنی","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"conv-doctor","title":"در مطب داکتر","titleFa":"در مطب داکتر","difficulty":"hard","duration":"۳۰ دقیقه"},{"id":"conv-guest","title":"مهمانی","titleFa":"مهمانی","difficulty":"medium","duration":"۲۵ دقیقه"}]},{"id":"advanced","name":"۱۱. پیشرفته","namePashto":"۱۱. پرمختللی","nameFa":"پیشرفته","icon":"Star","color":"#a855f7","description":"موضوعات پیشرفته و اصطلاحات","order":11,"lessons":[{"id":"retroflex","title":"صداهای برگشته","titleFa":"صداهای برگشته","difficulty":"hard","duration":"۲۵ دقیقه"},{"id":"idioms","title":"اصطلاحات","titleFa":"اصطلاحات","difficulty":"hard","duration":"۳۰ دقیقه"},{"id":"proverbs","title":"ضرب‌المثل‌ها","titleFa":"ضرب‌المثل‌ها","difficulty":"hard","duration":"۳۰ دقیقه"},{"id":"kandahari-slang","title":"اصطلاحات کندهاری","titleFa":"اصطلاحات کندهاری","difficulty":"hard","duration":"۲۵ دقیقه"},{"id":"advanced-food-cooking","title":"کولو (Cooking)","titleFa":"کولو (Cooking)","difficulty":"hard","duration":"۲۵ دقیقه"},{"id":"advanced-body-parts","title":"جسم کے حصے","titleFa":"جسم کے حصے","difficulty":"hard","duration":"۲۵ دقیقه"}]}]'),Ki={categories:nb},ib={Languages:Ts,BookOpen:at,MessageCircle:De,Hash:yd,Users:Jn,Heart:bd,Utensils:zd,Palette:wd,Play:Ns,MessageSquareText:mu,Layers:xd},ob=[{id:"roadmap",path:"/roadmap",icon:vd,label:"نقشه راه",labelPs:"لارښود",color:"#6366f1"},{id:"alphabet",path:"/alphabet",icon:Ts,label:"الفبا",labelPs:"الفبا",color:"#10b981"},{id:"conjugation",path:"/conjugation",icon:$y,label:"گردان فعل",labelPs:"فعلونه",color:"#f59e0b"},{id:"conversations",path:"/conversation",icon:De,label:"مکالمات",labelPs:"خبرې",color:"#8b5cf6"}];function sb({isOpen:l,onClose:c}){const{isLessonComplete:f,getCategoryProgress:u}=ln(),[h,m]=T.useState(["alphabet"]),d=b=>{m(x=>x.includes(b)?x.filter(g=>g!==b):[...x,b])};return s.jsxs(s.Fragment,{children:[l&&s.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden",onClick:c}),s.jsxs("aside",{className:`
          fixed top-16 bottom-0 z-30 bg-slate-800 border-slate-700
          w-64 sm:w-72 transition-transform duration-300 ease-in-out
          right-0 border-l
          ${l?"translate-x-0":"translate-x-full"}
          lg:translate-x-0
          overflow-hidden flex flex-col
        `,children:[s.jsxs("div",{className:"flex items-center justify-between p-3 sm:p-4 border-b border-slate-700 bg-slate-800 flex-shrink-0",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center",children:s.jsx(xd,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400"})}),s.jsx("h2",{className:"font-bold text-slate-200 text-sm sm:text-base",children:"دسته‌بندی‌ها"})]}),s.jsx("button",{onClick:c,className:"lg:hidden p-1.5 sm:p-2 hover:bg-slate-700 rounded-lg transition-colors",children:s.jsx(bu,{className:"w-4 h-4 sm:w-5 sm:h-5 text-slate-400"})})]}),s.jsx("div",{className:"p-2 sm:p-3 border-b border-slate-700 flex-shrink-0",children:s.jsx("div",{className:"grid grid-cols-4 gap-1 sm:gap-2",children:ob.map(b=>{const x=b.icon;return s.jsxs(su,{to:b.path,onClick:c,className:({isActive:g})=>`flex flex-col items-center gap-0.5 sm:gap-1 p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all ${g?"bg-slate-700 border border-emerald-500/50":"hover:bg-slate-700/50 border border-transparent"}`,children:[s.jsx("div",{className:"w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center",style:{backgroundColor:`${b.color}20`},children:s.jsx(x,{className:"w-3 h-3 sm:w-4 sm:h-4",style:{color:b.color}})}),s.jsx("span",{className:"text-[8px] sm:text-[10px] font-medium text-slate-400 text-center leading-tight",children:b.label})]},b.id)})})}),s.jsx("nav",{className:"flex-1 overflow-y-auto p-2 sm:p-3 space-y-1.5 sm:space-y-2",children:Ki.categories.map((b,x)=>{const g=ib[b.icon]||at,k=u?u(b.lessons):0,N=h.includes(b.id),A=b.lessons?.filter(H=>f(H.id)).length||0,R=b.lessons?.length||0,L=A===R&&R>0;return s.jsxs("div",{className:`rounded-lg sm:rounded-xl overflow-hidden border transition-all duration-200 ${N?"border-slate-600 bg-slate-700/50":"border-slate-700 bg-slate-800 hover:bg-slate-700/30 hover:border-slate-600"}`,children:[s.jsxs("button",{onClick:()=>d(b.id),className:`
                    w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 text-right transition-all
                    ${N?"bg-slate-700/50":"hover:bg-slate-700/30"}
                  `,children:[s.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0",style:{background:`${b.color}20`,border:`1px solid ${b.color}40`},children:s.jsx(g,{className:"w-4 h-4 sm:w-5 sm:h-5",style:{color:b.color}})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"flex items-center gap-1 sm:gap-2",children:[s.jsxs("span",{className:"font-semibold text-slate-200 text-xs sm:text-sm truncate",children:[x+1,". ",b.nameFa]}),L&&s.jsx(_t,{className:"w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0"})]}),s.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1",children:[s.jsx("div",{className:"flex-1 h-1 sm:h-1.5 bg-slate-600 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${k}%`,background:`linear-gradient(90deg, ${b.color}, ${b.color}cc)`}})}),s.jsxs("span",{className:"text-[10px] sm:text-xs font-medium text-slate-500 whitespace-nowrap",children:[A,"/",R]})]})]}),s.jsx("div",{className:`w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg flex items-center justify-center transition-all ${N?"bg-slate-600":"bg-slate-700"}`,children:N?s.jsx(qe,{className:"w-3 h-3 sm:w-4 sm:h-4 text-slate-400"}):s.jsx(Gy,{className:"w-3 h-3 sm:w-4 sm:h-4 text-slate-500"})})]}),N&&b.lessons&&s.jsx("div",{className:"border-t border-slate-600 bg-slate-800/50",children:s.jsx("ul",{className:"py-1.5 sm:py-2 px-1.5 sm:px-2 space-y-0.5 sm:space-y-1",children:b.lessons.map(H=>{const P=f(H.id);return s.jsx("li",{children:s.jsxs(su,{to:`/lesson/${H.id}`,onClick:c,className:({isActive:U})=>`flex items-center gap-2 px-2 sm:px-3 py-2 sm:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm transition-all ${U?"bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 font-semibold":"text-slate-400 hover:bg-slate-700/50 hover:text-slate-300 border border-transparent"}`,children:[P?s.jsx("div",{className:"w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500/30 flex items-center justify-center flex-shrink-0",children:s.jsx(_t,{className:"w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400"})}):s.jsx("div",{className:"w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-slate-600 flex-shrink-0 bg-slate-700"}),s.jsx("span",{className:"truncate flex-1",children:H.titleFa||H.title})]})},H.id)})})})]},b.id)})}),s.jsx("div",{className:"p-3 sm:p-4 border-t border-slate-700 bg-slate-800 flex-shrink-0",children:s.jsxs("div",{className:"flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate-500",children:[s.jsx(gu,{className:"w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400"}),s.jsx("span",{className:"font-medium",children:"پښتو کندهاری"})]})})]})]})}function lb({children:l}){const[c,f]=T.useState(!1);return s.jsxs("div",{className:"min-h-screen bg-slate-900 rtl flex flex-col",dir:"rtl",children:[s.jsx(eb,{onMenuClick:()=>f(!0)}),s.jsxs("div",{className:"flex flex-1 pt-16",children:[s.jsx(sb,{isOpen:c,onClose:()=>f(!1)}),s.jsx("main",{className:"flex-1 p-3 sm:p-4 md:p-6 lg:p-8 overflow-auto min-h-[calc(100vh-64px)] lg:mr-72",children:l})]})]})}function rb(){const[l,c]=T.useState(!1),[f,u]=T.useState(null);T.useEffect(()=>{if(!("serviceWorker"in navigator))return;const d=x=>{x.waiting&&(u(x),c(!0))};navigator.serviceWorker.ready.then(x=>{x.addEventListener("controllerchange",()=>{window.location.reload()}),x.waiting&&d(x)}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.location.reload()});const b=setInterval(()=>{navigator.serviceWorker.getRegistrations().then(x=>{x.forEach(g=>{g.update(),g.waiting&&d(g)})})},6e4);return()=>clearInterval(b)},[]);const h=()=>{f?.waiting&&(f.waiting.postMessage({type:"SKIP_WAITING"}),c(!1))},m=()=>{c(!1)};return l?s.jsx("div",{className:"fixed bottom-4 right-4 z-[9999] max-w-sm pointer-events-auto",children:s.jsx("div",{className:"bg-slate-800 border border-emerald-500/50 rounded-xl p-4 shadow-2xl",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0",children:s.jsx(kd,{className:"w-5 h-5 text-emerald-400 animate-spin"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"font-bold text-white mb-1",children:"نسخه جدید موجود است"}),s.jsx("p",{className:"text-sm text-slate-400 mb-3",children:"یک نسخه جدید از اپلیکیشن دریافت شده است. برای استفاده از آن، صفحه را تازه‌سازی کنید."}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{onClick:h,className:"flex-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors",children:"تازه‌سازی"}),s.jsx("button",{onClick:m,className:"px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-semibold rounded-lg transition-colors",children:"بعدا"})]})]}),s.jsx("button",{onClick:m,className:"text-slate-400 hover:text-slate-300 transition-colors flex-shrink-0",children:s.jsx(bu,{className:"w-5 h-5"})})]})})}):null}function ub(){const l=uu(),{users:c,setCurrentUser:f}=Wi(),u=h=>{f(h),l("/")};return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",children:s.jsxs("div",{className:"w-full max-w-2xl",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsx("div",{className:"flex items-center justify-center gap-3 mb-4",children:s.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30",children:s.jsx(Jn,{className:"w-8 h-8 text-white"})})}),s.jsx("h1",{className:"text-4xl font-bold text-white mb-2",children:"انتخاب کاربر"}),s.jsx("p",{className:"text-slate-400",children:"کاربر خود را انتخاب کنید"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:c.map(h=>s.jsxs("button",{onClick:()=>u(h.id),className:"group relative overflow-hidden rounded-2xl p-6 bg-slate-800 border border-slate-700 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/20",children:[s.jsx("div",{className:"absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity",style:{backgroundColor:h.color}}),s.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-4",children:[s.jsx("div",{className:"w-20 h-20 rounded-xl flex items-center justify-center text-white font-bold text-3xl shadow-lg",style:{backgroundColor:h.color},children:h.name.charAt(0)}),s.jsxs("div",{className:"text-center",children:[s.jsx("h3",{className:"text-2xl font-bold text-white",children:h.name}),s.jsx("p",{className:"text-sm text-slate-400",children:h.nameEn})]}),s.jsx(Jy,{className:"w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors"})]})]},h.id))}),s.jsx("div",{className:"bg-indigo-500/10 rounded-2xl p-4 border border-indigo-500/30 text-center",children:s.jsx("p",{className:"text-sm text-indigo-300",children:"هر کاربر پیشرفت خود را جداگانه ذخیره می‌کند"})})]})})}function cb(){const{users:l,currentUser:c,setCurrentUser:f}=Wi(),{progress:u}=ln(),[h,m]=T.useState({});T.useEffect(()=>{try{const k=localStorage.getItem("pashto-learning-progress-multi");k&&m(JSON.parse(k))}catch{m({})}},[]);const d=k=>h[k]||{completedLessons:[],completedPractices:[],completedPhases:[],currentStreak:0,totalXP:0,lastStudyDate:null},b=()=>57,x=k=>{const N=d(k),A=N.completedLessons?.length||0,R=b(),L=Math.round(A/R*100);return{completedLessons:A,totalLessons:R,percentage:L,xp:N.totalXP||0,streak:N.currentStreak||0,phases:N.completedPhases?.length||0}},g=[...l].sort((k,N)=>{const A=x(k.id);return x(N.id).percentage-A.percentage});return s.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[s.jsx("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:s.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[s.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30",children:s.jsx(Jn,{className:"w-7 h-7 text-white"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:"آمار کاربران"}),s.jsx("p",{className:"text-slate-400",children:"مقایسه پیشرفت تمام کاربران"})]})]})}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:g.map((k,N)=>{const A=x(k.id),R=c===k.id;return s.jsxs("div",{className:`rounded-2xl p-6 border transition-all cursor-pointer ${R?"bg-slate-800 border-indigo-500/50 shadow-lg shadow-indigo-500/20":"bg-slate-800 border-slate-700 hover:border-slate-600"}`,onClick:()=>f(k.id),children:[N===0&&s.jsxs("div",{className:"absolute top-4 right-4 bg-amber-500/20 border border-amber-500/50 rounded-lg px-3 py-1 flex items-center gap-2",children:[s.jsx(on,{className:"w-4 h-4 text-amber-400"}),s.jsx("span",{className:"text-xs font-bold text-amber-300",children:"رتبه ۱"})]}),s.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[s.jsx("div",{className:"w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg",style:{backgroundColor:k.color},children:k.name.charAt(0)}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"text-lg font-bold text-white",children:k.name}),s.jsx("p",{className:"text-sm text-slate-400",children:k.nameEn})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[s.jsx("span",{className:"text-slate-400",children:"پیشرفت"}),s.jsxs("span",{className:"text-indigo-400 font-bold",children:[A.percentage,"%"]})]}),s.jsx("div",{className:"h-2 bg-slate-700 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500",style:{width:`${A.percentage}%`}})})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3 border border-slate-600",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx(at,{className:"w-4 h-4 text-emerald-400"}),s.jsx("span",{className:"text-xs text-slate-400",children:"درس‌ها"})]}),s.jsxs("p",{className:"text-lg font-bold text-white",children:[A.completedLessons,"/",A.totalLessons]})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3 border border-slate-600",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx(on,{className:"w-4 h-4 text-amber-400"}),s.jsx("span",{className:"text-xs text-slate-400",children:"امتیاز"})]}),s.jsx("p",{className:"text-lg font-bold text-white",children:A.xp})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3 border border-slate-600",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx(du,{className:"w-4 h-4 text-orange-400"}),s.jsx("span",{className:"text-xs text-slate-400",children:"رشته"})]}),s.jsx("p",{className:"text-lg font-bold text-white",children:A.streak})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3 border border-slate-600",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx(Nd,{className:"w-4 h-4 text-cyan-400"}),s.jsx("span",{className:"text-xs text-slate-400",children:"مراحل"})]}),s.jsxs("p",{className:"text-lg font-bold text-white",children:[A.phases,"/11"]})]})]}),R&&s.jsx("div",{className:"mt-4 pt-4 border-t border-slate-700",children:s.jsx("div",{className:"text-center",children:s.jsx("span",{className:"text-xs font-semibold text-indigo-400",children:"✓ کاربر فعلی"})})})]},k.id)})}),s.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[s.jsxs("h2",{className:"text-xl font-bold text-white mb-4 flex items-center gap-2",children:[s.jsx(on,{className:"w-6 h-6 text-amber-400"}),"جدول رتبه‌بندی"]}),s.jsx("div",{className:"space-y-2",children:g.map((k,N)=>{const A=x(k.id),R=["🥇","🥈","🥉"];return s.jsxs("div",{className:"flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-slate-500 transition-all",children:[s.jsx("div",{className:"text-2xl font-bold w-8 text-center",children:N<3?R[N]:`${N+1}.`}),s.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold",style:{backgroundColor:k.color},children:k.name.charAt(0)}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"font-semibold text-white",children:k.name}),s.jsxs("p",{className:"text-xs text-slate-400",children:[A.completedLessons," درس تکمیل شده"]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("p",{className:"text-lg font-bold text-indigo-400",children:[A.percentage,"%"]}),s.jsxs("p",{className:"text-xs text-slate-400",children:[A.xp," XP"]})]})]},k.id)})})]})]})}function pb(){const{progress:l}=ln();return s.jsxs("div",{className:"max-w-4xl mx-auto space-y-8",children:[s.jsxs("div",{className:"bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl",children:[s.jsxs("div",{className:"flex items-start justify-between mb-4",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"text-3xl font-bold mb-2",children:"به یادگیری پښتو خوش آمدید"}),s.jsx("p",{className:"text-emerald-100 text-lg",children:"د پښتو زده کړې ته ښه راغلاست"})]}),s.jsx("div",{className:"w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center",children:s.jsx("span",{className:"text-4xl font-bold",children:"پ"})})]}),s.jsx("p",{className:"text-emerald-50 mb-6",children:"پښتو کندهاری را با تمرین‌های تعاملی یاد بگیرید"}),s.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[s.jsxs("div",{className:"bg-white/20 backdrop-blur rounded-xl p-4 text-center",children:[s.jsx(on,{className:"w-8 h-8 mx-auto mb-2"}),s.jsx("div",{className:"text-3xl font-bold",children:l.totalXP}),s.jsx("div",{className:"text-sm text-emerald-100",children:"امتیاز XP"})]}),s.jsxs("div",{className:"bg-white/20 backdrop-blur rounded-xl p-4 text-center",children:[s.jsx(du,{className:"w-8 h-8 mx-auto mb-2"}),s.jsx("div",{className:"text-3xl font-bold",children:l.currentStreak}),s.jsx("div",{className:"text-sm text-emerald-100",children:"روزهای متوالی"})]}),s.jsxs("div",{className:"bg-white/20 backdrop-blur rounded-xl p-4 text-center",children:[s.jsx(jd,{className:"w-8 h-8 mx-auto mb-2"}),s.jsx("div",{className:"text-3xl font-bold",children:l.completedLessons?.length||0}),s.jsx("div",{className:"text-sm text-emerald-100",children:"درس تکمیل شده"})]})]})]}),s.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-200 mb-6 flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center",children:s.jsx(Nd,{className:"w-5 h-5 text-emerald-400"})}),"شروع سریع"]}),s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[s.jsxs(Ca,{to:"/alphabet",className:"bg-slate-700/50 rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-slate-700 transition-all flex flex-col items-center text-center group",children:[s.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30",children:s.jsx(Ts,{className:"w-8 h-8 text-white"})}),s.jsx("span",{className:"font-bold text-slate-200 text-lg",children:"الفبا"}),s.jsx("span",{className:"text-sm text-slate-400 mt-1",children:"۴۴ حرف پښتو"})]}),s.jsxs(Ca,{to:"/vocabulary",className:"bg-slate-700/50 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 hover:bg-slate-700 transition-all flex flex-col items-center text-center group",children:[s.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30",children:s.jsx(at,{className:"w-8 h-8 text-white"})}),s.jsx("span",{className:"font-bold text-slate-200 text-lg",children:"واژگان"}),s.jsx("span",{className:"text-sm text-slate-400 mt-1",children:"۹ دسته‌بندی"})]}),s.jsxs(Ca,{to:"/conversation",className:"bg-slate-700/50 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 hover:bg-slate-700 transition-all flex flex-col items-center text-center group",children:[s.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30",children:s.jsx(De,{className:"w-8 h-8 text-white"})}),s.jsx("span",{className:"font-bold text-slate-200 text-lg",children:"مکالمات"}),s.jsx("span",{className:"text-sm text-slate-400 mt-1",children:"۶ موقعیت"})]}),s.jsxs(Ca,{to:"/vocabulary/slang",className:"bg-slate-700/50 rounded-xl p-6 border border-amber-500/30 hover:border-amber-500/60 hover:bg-slate-700 transition-all flex flex-col items-center text-center group",children:[s.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30",children:s.jsx(mu,{className:"w-8 h-8 text-white"})}),s.jsx("span",{className:"font-bold text-slate-200 text-lg",children:"اصطلاحات"}),s.jsx("span",{className:"text-sm text-slate-400 mt-1",children:"کندهاری"})]})]})]}),s.jsx("div",{className:"bg-slate-800 rounded-2xl p-6 border border-amber-500/30 shadow-lg",children:s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:"w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0",children:s.jsx(gu,{className:"w-6 h-6 text-amber-400"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-amber-300 text-lg mb-2",children:"نکته یادگیری"}),s.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["در گویش کندهاری، حروف ",s.jsx("span",{className:"font-bold text-amber-400 text-xl mx-1",children:"ښ"})," و ",s.jsx("span",{className:"font-bold text-amber-400 text-xl mx-1",children:"ږ"}),' صداهای برگشته (retroflex) دارند. برای تلفظ صحیح، نوک زبان را به سمت سقف دهان ببرید و صدای "ش" یا "ژ" عمیق‌تری بدهید.']})]})]})})]})}const fb={id:"alphabet-intro",title:"آشنایی با الفبای پښتو",titlePashto:"د پښتو الفبا پېژندنه",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# آشنایی با الفبای پښتو

## الفبای پښتو چیست؟

الفبای پښتو یک نسخه تغییر یافته از خط عربی-فارسی است که شامل **۴۴ حرف** می‌شود. این الفبا از راست به چپ نوشته می‌شود، درست مثل فارسی.

## تفاوت با فارسی

اگر فارسی بلدید، خبر خوب این است که بیشتر حروف مشترک هستند! اما پښتو **۹ حرف خاص** دارد که در فارسی وجود ندارند:

| حرف | نام | صدا |
|-----|-----|-----|
| ټ | ټ | ت برگشته |
| ډ | ډ | د برگشته |
| ړ | ړ | ر برگشته |
| ڼ | ڼ | ن برگشته |
| څ | څ | تس |
| ځ | ځ | دز |
| ښ | ښ | ش برگشته (کندهاری) |
| ږ | ږ | ژ برگشته (کندهاری) |
| ګ | ګ | گ |

## صداهای برگشته چیست؟

صداهای برگشته (retroflex) با برگرداندن نوک زبان به سمت سقف دهان تولید می‌شوند. این صداها در فارسی وجود ندارند اما در پښتو بسیار مهم هستند.

## گویش کندهاری

در این اپلیکیشن، تمرکز ما بر گویش **کندهاری** است که قدیمی‌ترین و اصیل‌ترین گویش پښتو محسوب می‌شود. 

دو حرف **ښ** و **ږ** در کندهاری صدای خاصی دارند:
- **ښ** = /ʂ/ (ش برگشته)
- **ږ** = /ʐ/ (ژ برگشته)

## شروع یادگیری

بهترین راه یادگیری الفبا:
1. ابتدا حروف مشترک با فارسی را مرور کنید
2. سپس ۹ حرف خاص پښتو را یاد بگیرید
3. تمرین تلفظ با گوش دادن به گویشوران بومی

> **نکته:** صفحه الفبا را باز کنید و روی هر حرف کلیک کنید تا جزئیات آن را ببینید!
`,contentPashto:`
# د پښتو الفبا پېژندنه

## د پښتو الفبا څه شی دی؟

د پښتو الفبا د عربي-فارسي لیک یوه بدله شوې بڼه ده چې **۴۴ توري** لري. دا الفبا له ښي نه کیڼ ته لیکل کیږي، لکه فارسي.

## له فارسي سره توپیر

که تاسو فارسي پوهیږئ، ښه خبر دا دی چې ډیری توري ګډ دي! خو پښتو **۹ ځانګړي توري** لري چې په فارسي کې نشته:

| توری | نوم | غږ |
|-----|-----|-----|
| ټ | ټ | شاته تاوېدونکی ت |
| ډ | ډ | شاته تاوېدونکی د |
| ړ | ړ | شاته تاوېدونکی ر |
| ڼ | ڼ | شاته تاوېدونکی ن |
| څ | څ | تس |
| ځ | ځ | دز |
| ښ | ښ | شاته تاوېدونکی ش (کندهاري) |
| ږ | ږ | شاته تاوېدونکی ژ (کندهاري) |
| ګ | ګ | ګ |

## شاته تاوېدونکي غږونه څه شی دي؟

شاته تاوېدونکي غږونه د ژبې سر د خولې چت ته شاته تاوولو سره جوړیږي. دا غږونه په فارسي کې نشته خو په پښتو کې ډیر مهم دي.

## کندهارۍ لهجه

پدې اپلیکیشن کې، زموږ تمرکز د **کندهارۍ** لهجې باندې دی چې د پښتو ترټولو زړه او اصلي لهجه ګڼل کیږي.

دوه توري **ښ** او **ږ** په کندهاري کې ځانګړی غږ لري:
- **ښ** = /ʂ/ (شاته تاوېدونکی ش)
- **ږ** = /ʐ/ (شاته تاوېدونکی ژ)

## د زده کړې پیل

د الفبا زده کړې غوره لار:
۱. لومړی له فارسي سره ګډ توري مرور کړئ
۲. بیا د پښتو ۹ ځانګړي توري زده کړئ
۳. د اصلي ویونکو اورېدلو سره تلفظ تمرین کړئ

> **یادونه:** د الفبا پاڼه خلاصه کړئ او په هر توري کلیک وکړئ ترڅو جزئیات یې وګورئ!
`,hasPractice:!0,practiceId:"alphabet-intro"},hb={id:"unique-letters",title:"حروف خاص پښتو",titlePashto:"د پښتو ځانګړي توري",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# حروف خاص پښتو

## ۹ حرف منحصر به فرد

پښتو ۹ حرف دارد که در فارسی وجود ندارند. این حروف صداهای خاصی دارند که باید با دقت یاد بگیرید.

## ۱. حروف برگشته (Retroflex)

این حروف با برگرداندن نوک زبان به سمت سقف دهان تلفظ می‌شوند:

### ټ (ټی)
- صدا: مثل «ت» اما با زبان برگشته
- مثال: **ټوپک** (تفنگ)

### ډ (ډال)
- صدا: مثل «د» اما با زبان برگشته
- مثال: **ډوډۍ** (نان)

### ړ (ړی)
- صدا: مثل «ر» اما با زبان برگشته
- مثال: **وړ** (کوچک)

### ڼ (ڼون)
- صدا: مثل «ن» اما با زبان برگشته
- مثال: **مڼه** (سیب)

## ۲. حروف ترکیبی

### څ (څی)
- صدا: ترکیب «ت» و «س» = /ts/
- مثال: **څه** (چه)

### ځ (ځی)
- صدا: ترکیب «د» و «ز» = /dz/
- مثال: **ځان** (خود)

## ۳. حروف کندهاری

### ښ (ښین)
- صدا در کندهاری: /ʂ/ (ش برگشته)
- صدا در کابلی: /x/ (خ)
- مثال: **ښه** (خوب)

### ږ (ږی)
- صدا در کندهاری: /ʐ/ (ژ برگشته)
- صدا در کابلی: /g/
- مثال: **ږمنځ** (شانه)

## ۴. گاف پښتو

### ګ (ګاف)
- صدا: مثل «گ» فارسی
- مثال: **ګل** (گل)

> **نکته مهم:** تمرین تلفظ این حروف بسیار مهم است. سعی کنید به گویشوران بومی گوش دهید.
`,contentPashto:`
# د پښتو ځانګړي توري

## ۹ ځانګړي توري

پښتو ۹ توري لري چې په فارسي کې نشته. دا توري ځانګړي غږونه لري چې باید په دقت زده کړئ.

## ۱. شاته تاوېدونکي توري

دا توري د ژبې سر د خولې چت ته شاته تاوولو سره تلفظ کیږي:

### ټ (ټی)
- غږ: لکه «ت» خو له شاته تاوېدونکې ژبې سره
- بېلګه: **ټوپک**

### ډ (ډال)
- غږ: لکه «د» خو له شاته تاوېدونکې ژبې سره
- بېلګه: **ډوډۍ**

### ړ (ړی)
- غږ: لکه «ر» خو له شاته تاوېدونکې ژبې سره
- بېلګه: **وړ**

### ڼ (ڼون)
- غږ: لکه «ن» خو له شاته تاوېدونکې ژبې سره
- بېلګه: **مڼه**

## ۲. یوځای شوي توري

### څ (څی)
- غږ: د «ت» او «س» یوځای کول = /ts/
- بېلګه: **څه**

### ځ (ځی)
- غږ: د «د» او «ز» یوځای کول = /dz/
- بېلګه: **ځان**

## ۳. کندهارۍ توري

### ښ (ښین)
- په کندهاري کې غږ: /ʂ/ (شاته تاوېدونکی ش)
- په کابلي کې غږ: /x/ (خ)
- بېلګه: **ښه**

### ږ (ږی)
- په کندهاري کې غږ: /ʐ/ (شاته تاوېدونکی ژ)
- په کابلي کې غږ: /g/
- بېلګه: **ږمنځ**

## ۴. د پښتو ګاف

### ګ (ګاف)
- غږ: لکه فارسي «گ»
- بېلګه: **ګل**

> **مهمه یادونه:** د دې تورو تلفظ تمرین ډیر مهم دی. هڅه وکړئ اصلي ویونکو ته غوږ ونیسئ.
`,hasPractice:!0,practiceId:"unique-letters"},db={id:"kandahari-sounds",title:"صداهای کندهاری (ښ و ږ)",titlePashto:"کندهارۍ غږونه (ښ او ږ)",difficulty:"medium",estimatedTime:"۱۵ دقیقه",content:`
# صداهای کندهاری

## گویش کندهاری چیست؟

گویش کندهاری (یا جنوبی) قدیمی‌ترین و اصیل‌ترین گویش پښتو است. این گویش در قندهار، هلمند، زابل و مناطق جنوبی افغانستان صحبت می‌شود.

## تفاوت اصلی با گویش کابلی

بزرگترین تفاوت در تلفظ دو حرف **ښ** و **ږ** است:

### حرف ښ (ښین)

| گویش | تلفظ | مثال |
|------|------|------|
| کندهاری | /ʂ/ (ش برگشته) | ښه = شَه |
| کابلی | /x/ (خ) | ښه = خه |

**نحوه تلفظ کندهاری:**
- نوک زبان را به سمت سقف دهان ببرید
- مثل «ش» تلفظ کنید اما با زبان برگشته
- صدایی شبیه «ش» اما عمیق‌تر

### حرف ږ (ږی)

| گویش | تلفظ | مثال |
|------|------|------|
| کندهاری | /ʐ/ (ژ برگشته) | ږمنځ = ژمنځ |
| کابلی | /g/ (گ) | ږمنځ = گمنځ |

**نحوه تلفظ کندهاری:**
- نوک زبان را به سمت سقف دهان ببرید
- مثل «ژ» تلفظ کنید اما با زبان برگشته
- صدایی شبیه «ژ» اما عمیق‌تر

## کلمات مهم با ښ

| کلمه | معنی | تلفظ کندهاری | تلفظ جایگزین |
|------|------|--------------|--------------|
| ښه | خوب | شَه | سَه |
| ښځه | زن | شَځه | سَځه |
| ښار | شهر | شار | سار |
| ښودل | نشان دادن | شودَل | سودَل |
| ښکاره | آشکار | شکاره | سکاره |

**نکته:** در برخی از گویش‌های کندهاری، حرف **ښ** می‌تواند به صورت **س** نیز تلفظ شود. هر دو تلفظ قابل قبول است.

## کلمات مهم با ږ

| کلمه | معنی | تلفظ کندهاری |
|------|------|--------------|
| ږمنځ | شانه | ژمنځ |
| ږیره | ریش | ژیره |
| ږغ | صدا | ژغ |
| ږوږ | سر و صدا | ژوژ |

## چرا کندهاری مهم است؟

1. **اصالت:** قدیمی‌ترین شکل پښتو
2. **شعر:** بیشتر شعر کلاسیک پښتو به این گویش است
3. **موسیقی:** آهنگ‌های سنتی پښتو معمولاً کندهاری هستند
4. **هویت:** نشانه هویت پښتون‌های جنوبی

## تنوع‌های لهجه‌ای در کندهاری

حتی در خود کندهاری، تنوع‌های منطقه‌ای وجود دارد:

### تغییر ش ↔ س

برخی از گویشوران کندهاری، خاصه در مناطق مختلف، ممکن است حرف **ش** را به صورت **س** تلفظ کنند:

| کلمه | تلفظ اول | تلفظ جایگزین |
|------|----------|--------------|
| راشه | rāsha | rāsa |
| ولارشه | walārsha | walārsa |
| ښه | sha | sa |
| ششپه | shpa | sspa |

**مثال:** 
- "راشه" (بیا) = "راسه" (هر دو صحیح است)
- "ولارشه" (بیایید) = "ولارسه" (هر دو صحیح است)

### تغییر ژ ↔ ز

به طور مشابه، حرف **ژ** ممکن است به صورت **ز** تلفظ شود:

| کلمه | تلفظ اول | تلفظ جایگزین |
|------|----------|--------------|
| ژوند | zhwand | zwand |
| ږمنځ | ẓ̌mənz | zmənz |

> **نکته مهم:** این تنوع‌ها طبیعی و قابل قبول هستند. هر دو تلفظ درست است و نشان‌دهنده تنوع زبانی طبیعی در کندهاری است. با گویشوران مختلف تمرین کنید تا به هر دو تلفظ عادت کنید.

> **نکته:** اگر می‌خواهید پښتو اصیل یاد بگیرید، تلفظ کندهاری را تمرین کنید!
`,contentPashto:`
# کندهارۍ غږونه

## کندهارۍ لهجه څه شی ده؟

کندهارۍ (یا سویلي) لهجه د پښتو ترټولو زړه او اصلي لهجه ده. دا لهجه په کندهار، هلمند، زابل او د افغانستان سویلي سیمو کې ویل کیږي.

## له کابلۍ لهجې سره اصلي توپیر

ترټولو لوی توپیر د دوو تورو **ښ** او **ږ** تلفظ کې دی:

### توری ښ (ښین)

| لهجه | تلفظ | بېلګه |
|------|------|------|
| کندهارۍ | /ʂ/ (شاته تاوېدونکی ش) | ښه = شَه |
| کابلۍ | /x/ (خ) | ښه = خه |

**د کندهارۍ تلفظ طریقه:**
- د ژبې سر د خولې چت ته یوسئ
- لکه «ش» تلفظ کړئ خو له شاته تاوېدونکې ژبې سره
- یو غږ لکه «ش» خو ژور

### توری ږ (ږی)

| لهجه | تلفظ | بېلګه |
|------|------|------|
| کندهارۍ | /ʐ/ (شاته تاوېدونکی ژ) | ږمنځ = ژمنځ |
| کابلۍ | /g/ (ګ) | ږمنځ = ګمنځ |

**د کندهارۍ تلفظ طریقه:**
- د ژبې سر د خولې چت ته یوسئ
- لکه «ژ» تلفظ کړئ خو له شاته تاوېدونکې ژبې سره
- یو غږ لکه «ژ» خو ژور

## له ښ سره مهمې کلمې

| کلمه | معنی | کندهارۍ تلفظ |
|------|------|--------------|
| ښه | ښه | شَه |
| ښځه | ښځه | شَځه |
| ښار | ښار | شار |
| ښودل | ښودل | شودَل |
| ښکاره | ښکاره | شکاره |

## له ږ سره مهمې کلمې

| کلمه | معنی | کندهارۍ تلفظ |
|------|------|--------------|
| ږمنځ | ږمنځ | ژمنځ |
| ږیره | ږیره | ژیره |
| ږغ | ږغ | ژغ |
| ږوږ | ږوږ | ژوژ |

## کندهارۍ ولې مهمه ده؟

۱. **اصالت:** د پښتو ترټولو زړه بڼه
۲. **شعر:** ډیری کلاسیک پښتو شعر پدې لهجه کې دی
۳. **موسیقي:** دودیز پښتو سندرې عموماً کندهارۍ دي
۴. **هویت:** د سویلي پښتنو هویت نښه

> **یادونه:** که تاسو غواړئ اصلي پښتو زده کړئ، کندهارۍ تلفظ تمرین کړئ!
`,hasPractice:!0,practiceId:"kandahari-sounds"},mb={id:"vowels",title:"مصوت‌ها",titlePashto:"غږلرونکي توري",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# مصوت‌ها در پښتو کندهاری

پښتو دارای ۷ مصوت اصلی است که تلفظ آنها در لهجه کندهاری کمی متفاوت است.

## مصوت‌های کوتاه

| نماد | تلفظ | مثال پښتو | معنی |
|------|------|-----------|------|
| ـَـ | a (فتحه) | کَر | کار |
| ـِـ | i (کسره) | دِل | دل |
| ـُـ | u (ضمه) | پُل | پل |

## مصوت‌های بلند

| نماد | تلفظ | مثال پښتو | معنی |
|------|------|-----------|------|
| ا | ā | نان | نان |
| ې | e | ښې | خوب (مؤنث) |
| ی | i | سړی | مرد |
| و | u/o | لور | دختر |

## مصوت خاص کندهاری: ə (شوا)

در لهجه کندهاری، یک مصوت خاص وجود دارد که به آن «شوا» می‌گویند:

| نماد | تلفظ | مثال |
|------|------|------|
| ـ | ə | کور (خانه) |

این صدا شبیه «ـُـ» کوتاه است ولی کمی متفاوت تلفظ می‌شود.

## تفاوت کندهاری و کابلی

| کلمه | کندهاری | کابلی |
|------|---------|-------|
| خانه | کور (kor) | کُر (kur) |
| دختر | لور (lor) | لُر (lur) |
| پسر | زوی (zoy) | زُی (zuy) |

## نکات مهم

1. در کندهاری، مصوت «و» معمولاً به صورت «o» تلفظ می‌شود
2. مصوت «ې» در کندهاری واضح‌تر از کابلی است
3. شوا (ə) در کندهاری بیشتر استفاده می‌شود

> **نکته:** گوش دادن به گویندگان بومی کندهاری بهترین راه یادگیری تلفظ صحیح است.
`,hasPractice:!0,practiceId:"vowels"},gb={id:"numbers-1-10",title:"اعداد ۱ تا ۱۰",titlePashto:"له ۱ نه تر ۱۰ پورې شمېرې",difficulty:"easy",estimatedTime:"۱۰ دقیقه",content:`
# اعداد ۱ تا ۱۰ در پښتو

## جدول اعداد

| عدد | پښتو | تلفظ | فارسی |
|-----|------|------|-------|
| ۱ | یو | yo | یک |
| ۲ | دوه | dwa | دو |
| ۳ | درې | dre | سه |
| ۴ | څلور | tsalor | چهار |
| ۵ | پنځه | pənza | پنج |
| ۶ | شپږ | shpag | شش |
| ۷ | اووه | owa | هفت |
| ۸ | اته | ata | هشت |
| ۹ | نهه | nəha | نه |
| ۱۰ | لس | las | ده |

## نکات مهم

### عدد ۴ (څلور)
این عدد با حرف **څ** شروع می‌شود که صدای "تس" می‌دهد. تلفظ: **تسَلور**

### عدد ۶ (شپږ)
این عدد شامل حرف **ږ** است که در کندهاری صدای برگشته دارد.

### عدد ۵ (پنځه)
حرف **ځ** صدای "دز" می‌دهد. تلفظ: **پَنزه**

## تمرین

سعی کنید این اعداد را با صدای بلند بخوانید:
- یو، دوه، درې
- څلور، پنځه، شپږ
- اووه، اته، نهه، لس

## مثال‌های کاربردی

| پښتو | فارسی |
|------|-------|
| یو کتاب | یک کتاب |
| دوه سړي | دو مرد |
| درې ښځې | سه زن |
| څلور کوره | چهار خانه |
`,contentPashto:`
# له ۱ نه تر ۱۰ پورې شمېرې

## د شمېرو جدول

| شمېره | پښتو | تلفظ | فارسي |
|-----|------|------|-------|
| ۱ | یو | yo | یک |
| ۲ | دوه | dwa | دو |
| ۳ | درې | dre | سه |
| ۴ | څلور | tsalor | چهار |
| ۵ | پنځه | pənza | پنج |
| ۶ | شپږ | shpag | شش |
| ۷ | اووه | owa | هفت |
| ۸ | اته | ata | هشت |
| ۹ | نهه | nəha | نه |
| ۱۰ | لس | las | ده |

## مهمې یادونې

### شمېره ۴ (څلور)
دا شمېره د **څ** توري سره پیلیږي چې د "تس" غږ لري. تلفظ: **تسَلور**

### شمېره ۶ (شپږ)
دا شمېره د **ږ** توری لري چې په کندهاري کې شاته تاوېدونکی غږ لري.

### شمېره ۵ (پنځه)
د **ځ** توری د "دز" غږ لري. تلفظ: **پَنزه**

## تمرین

هڅه وکړئ دا شمېرې په لوړ غږ ولولئ:
- یو، دوه، درې
- څلور، پنځه، شپږ
- اووه، اته، نهه، لس

## کارېدونکي مثالونه

| پښتو | فارسي |
|------|-------|
| یو کتاب | یک کتاب |
| دوه سړي | دو مرد |
| درې ښځې | سه زن |
| څلور کوره | چهار خانه |
`,hasPractice:!0,practiceId:"numbers-1-10"},yb={id:"basic-greetings",title:"سلام و خداحافظی",titlePashto:"سلام او خدای پامان",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# سلام و خداحافظی در پښتو

## سلام کردن

### سلام رسمی
| پښتو | فارسی | تلفظ |
|------|-------|------|
| سلام علیکم | سلام علیکم | سلام علیکم |
| و علیکم السلام | و علیکم السلام | و علیکم السلام |

### سلام غیررسمی
| پښتو | فارسی | تلفظ |
|------|-------|------|
| سلام | سلام | سلام |
| ستړی مه شې | خسته نباشی | ستَړی مه شې |
| ستړی مه شه | خسته نباشی (به زن) | ستَړی مه شه |

## احوالپرسی

| پښتو | فارسی |
|------|-------|
| څنګه یې؟ | چطوری؟ |
| ښه یم، مننه | خوبم، ممنون |
| ته څنګه یې؟ | تو چطوری؟ |
| ټول ښه دي؟ | همه خوبند؟ |
| الحمدلله | الحمدلله |

## خداحافظی

| پښتو | فارسی |
|------|-------|
| خدای پامان | خداحافظ |
| په مخه ده | به سلامت |
| بیا به سره ګورو | باز همدیگر را می‌بینیم |
| شپه مو په خیر | شب بخیر |
| سبا به سره ګورو | فردا می‌بینمت |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| مننه | ممنون |
| ډیره مننه | خیلی ممنون |
| هیڅ نه | خواهش می‌کنم |
| بخښنه غواړم | ببخشید |
| ستا نوم څه دی؟ | اسمت چیه؟ |
| زما نوم ... دی | اسم من ... است |

## مکالمه نمونه

**احمد:** سلام علیکم!
**محمود:** و علیکم السلام! څنګه یې؟
**احمد:** ښه یم، مننه. ته څنګه یې؟
**محمود:** الحمدلله، ښه یم.
**احمد:** خدای پامان!
**محمود:** په مخه ده!

> **نکته:** پښتون‌ها معمولاً با «ستړی مه شې» (خسته نباشی) سلام می‌کنند که نشان‌دهنده احترام است.
`,contentPashto:`
# په پښتو کې سلام او خدای پامان

## سلام کول

### رسمي سلام
| پښتو | فارسي | تلفظ |
|------|-------|------|
| سلام علیکم | سلام علیکم | سلام علیکم |
| و علیکم السلام | و علیکم السلام | و علیکم السلام |

### غیر رسمي سلام
| پښتو | فارسي | تلفظ |
|------|-------|------|
| سلام | سلام | سلام |
| ستړی مه شې | خسته نباشی | ستَړی مه شې |
| ستړی مه شه | خسته نباشی (ښځې ته) | ستَړی مه شه |

## حال احوال

| پښتو | فارسي |
|------|-------|
| څنګه یې؟ | چطوری؟ |
| ښه یم، مننه | خوبم، ممنون |
| ته څنګه یې؟ | تو چطوری؟ |
| ټول ښه دي؟ | همه خوبند؟ |
| الحمدلله | الحمدلله |

## خدای پامان

| پښتو | فارسي |
|------|-------|
| خدای پامان | خداحافظ |
| په مخه ده | به سلامت |
| بیا به سره ګورو | باز همدیگر را می‌بینیم |
| شپه مو په خیر | شب بخیر |
| سبا به سره ګورو | فردا می‌بینمت |

## ګټورې جملې

| پښتو | فارسي |
|------|-------|
| مننه | ممنون |
| ډیره مننه | خیلی ممنون |
| هیڅ نه | خواهش می‌کنم |
| بخښنه غواړم | ببخشید |
| ستا نوم څه دی؟ | اسمت چیه؟ |
| زما نوم ... دی | اسم من ... است |

## بېلګه خبرې

**احمد:** سلام علیکم!
**محمود:** و علیکم السلام! څنګه یې؟
**احمد:** ښه یم، مننه. ته څنګه یې؟
**محمود:** الحمدلله، ښه یم.
**احمد:** خدای پامان!
**محمود:** په مخه ده!

> **یادونه:** پښتانه عموماً له «ستړی مه شې» سره سلام کوي چې د درناوي نښه ده.
`,hasPractice:!0,practiceId:"basic-greetings"},bb={id:"how-are-you",title:"حالت چطور است؟",titlePashto:"څنګه یې؟",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# احوالپرسی در پښتو کندهاری

## پرسیدن حال - غیررسمی

| پښتو | فارسی | تلفظ |
|------|-------|------|
| څنګه یې؟ | چطوری؟ | tsanga ye? |
| ښه یې؟ | خوبی؟ | ṣ̌a ye? |
| څه حال دی؟ | چه حالی؟ | tsa hāl day? |
| روغ جوړ یې؟ | سالم هستی؟ | rogh joṛ ye? |

## پرسیدن حال - رسمی

| پښتو | فارسی | تلفظ |
|------|-------|------|
| څنګه یاست؟ | چطور هستید؟ | tsanga yāst? |
| حال مو څنګه دی؟ | حالتان چطور است؟ | hāl mo tsanga day? |
| روغ جوړ یاست؟ | سالم هستید؟ | rogh joṛ yāst? |
| ښه یاست؟ | خوب هستید؟ | ṣ̌a yāst? |

## پاسخ دادن - غیررسمی

| پښتو | فارسی | تلفظ |
|------|-------|------|
| ښه یم | خوبم | ṣ̌a yam |
| ډېر ښه یم | خیلی خوبم | ḍer ṣ̌a yam |
| ښه یم، مننه | خوبم، ممنون | ṣ̌a yam, manána |
| ته څنګه یې؟ | تو چطوری؟ | ta tsanga ye? |

## پاسخ دادن - رسمی

| پښتو | فارسی | تلفظ |
|------|-------|------|
| الحمدلله ښه یم | الحمدلله خوبم | alhamdulillāh ṣ̌a yam |
| ښه یم، ستاسو مننه | خوبم، از شما ممنون | ṣ̌a yam, stāso manána |
| تاسو څنګه یاست؟ | شما چطور هستید؟ | tāso tsanga yāst? |

## پرسیدن حال خانواده

| پښتو | فارسی | تلفظ |
|------|-------|------|
| کورنۍ څنګه ده؟ | خانواده چطور است؟ | koranəy tsanga da? |
| ماشومان ښه دي؟ | بچه‌ها خوبند؟ | māshomān ṣ̌a di? |
| ټول ښه دي؟ | همه خوبند؟ | ṭol ṣ̌a di? |
| مور او پلار ښه دي؟ | مادر و پدر خوبند؟ | mor aw plār ṣ̌a di? |

## پاسخ درباره خانواده

| پښتو | فارسی | تلفظ |
|------|-------|------|
| ټول ښه دي، الحمدلله | همه خوبند، الحمدلله | ṭol ṣ̌a di, alhamdulillāh |
| هغوی هم ښه دي | آنها هم خوبند | haghwey ham ṣ̌a di |
| ستاسو کورنۍ؟ | خانواده شما؟ | stāso koranəy? |

## مکالمه نمونه

**احمد:** سلام علیکم! څنګه یې؟
**محمود:** و علیکم السلام! الحمدلله ښه یم. ته څنګه یې؟
**احمد:** زه هم ښه یم، مننه. کورنۍ ښه ده؟
**محمود:** ټول ښه دي، الحمدلله. ستاسو کورنۍ؟
**احمد:** هغوی هم ښه دي، مننه.

## نکات فرهنگی

1. در فرهنگ پښتون، پرسیدن حال خانواده بسیار مهم است
2. همیشه بعد از پاسخ، حال طرف مقابل را هم بپرسید
3. استفاده از «الحمدلله» نشان‌دهنده شکرگزاری است
4. در موقعیت‌های رسمی، از «تاسو» به جای «ته» استفاده کنید

> **نکته:** پښتون‌ها معمولاً چند بار حال همدیگر را می‌پرسند. این نشانه احترام و علاقه است.
`,hasPractice:!1},xb={id:"introductions",title:"معرفی خود",titlePashto:"ځان پېژندنه",difficulty:"easy",estimatedTime:"۲۰ دقیقه",content:`
# معرفی خود در پښتو

یادگیری نحوه معرفی خود یکی از اولین مهارت‌های مکالمه است.

## عبارات معرفی

| پښتو | فارسی |
|------|-------|
| زما نوم ... دی | اسم من ... است |
| زه له ... نه یم | من از ... هستم |
| زه ... کاله لرم | من ... سال دارم |
| زه ... یم | من ... هستم (شغل) |

## سوالات معرفی

| پښتو | فارسی |
|------|-------|
| ستا نوم څه دی؟ | اسمت چیست؟ |
| ته له کومه یې؟ | تو از کجایی؟ |
| څو کاله لرې؟ | چند سال داری؟ |
| ته څه کار کوې؟ | تو چه کار می‌کنی؟ |

## معرفی نام

| پښتو | فارسی |
|------|-------|
| زما نوم احمد دی | اسم من احمد است |
| ستا نوم څه دی؟ | اسمت چیست؟ |
| زما نوم محمود دی | اسم من محمود است |
| خوشحاله شوم چې وپېژندم | خوشحال شدم که آشنا شدم |

## معرفی محل

| پښتو | فارسی |
|------|-------|
| زه له کندهاره یم | من از کندهار هستم |
| زه افغان یم | من افغان هستم |
| زه په کندهار کې اوسېږم | من در کندهار زندگی می‌کنم |
| زما کور په ... کې دی | خانه من در ... است |

## معرفی سن

| پښتو | فارسی |
|------|-------|
| زه شل کاله لرم | من بیست سال دارم |
| زه پنځه ویشت کاله لرم | من بیست و پنج سال دارم |
| ته څو کاله لرې؟ | تو چند سال داری؟ |

## معرفی شغل

| پښتو | فارسی |
|------|-------|
| زه معلم یم | من معلم هستم |
| زه زده‌کوونکی یم | من دانش‌آموز هستم |
| زه داکتر یم | من داکتر هستم |
| زه انجنیر یم | من مهندس هستم |
| زه کاروبار کوم | من تجارت می‌کنم |

## معرفی خانواده

| پښتو | فارسی |
|------|-------|
| زه واده شوی یم | من ازدواج کرده‌ام (مرد) |
| زه واده شوې یم | من ازدواج کرده‌ام (زن) |
| زه مجرد یم | من مجرد هستم |
| زه دوه ماشومان لرم | من دو بچه دارم |

## معرفی رسمی

| پښتو | فارسی |
|------|-------|
| زما نوم ... دی | اسم من ... است |
| زه د ... په توګه کار کوم | من به عنوان ... کار می‌کنم |
| خوشحاله شوم چې تاسو وپېژندم | خوشحال شدم که شما را شناختم |
| ستاسو نوم څه دی؟ | اسم شما چیست؟ |

## مکالمه نمونه ۱ - غیررسمی

**احمد:** سلام! ستا نوم څه دی؟
**محمود:** سلام! زما نوم محمود دی. ستا نوم؟
**احمد:** زما نوم احمد دی. ته له کومه یې؟
**محمود:** زه له کندهاره یم. ته؟
**احمد:** زه هم له کندهاره یم!
**محمود:** ډېر ښه! خوشحاله شوم چې وپېژندم.
**احمد:** زه هم خوشحاله شوم.

## مکالمه نمونه ۲ - رسمی

**احمد:** سلام علیکم! زما نوم احمد دی.
**محمود:** و علیکم السلام! زما نوم محمود دی.
**احمد:** تاسو څه کار کوئ؟
**محمود:** زه معلم یم. تاسو؟
**احمد:** زه انجنیر یم.
**محمود:** خوشحاله شوم چې تاسو وپېژندم.

> **نکته:** در معرفی رسمی از «تاسو» و در غیررسمی از «ته» استفاده کنید.
`,hasPractice:!1},vb={id:"formal-informal",title:"رسمی و غیررسمی",titlePashto:"رسمي او غیررسمي",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# رسمی و غیررسمی در پښتو

در پښتو، تفاوت مهمی بین زبان رسمی و غیررسمی وجود دارد.

## ضمایر رسمی و غیررسمی

| غیررسمی | رسمی | فارسی |
|---------|------|-------|
| ته | تاسو | تو / شما |
| ستا | ستاسو | مال تو / مال شما |

## فعل‌ها در حالت رسمی و غیررسمی

| غیررسمی | رسمی | فارسی |
|---------|------|-------|
| یې | یاست | هستی / هستید |
| ځې | ځئ | می‌روی / می‌روید |
| راځې | راځئ | می‌آیی / می‌آیید |
| خورې | خورئ | می‌خوری / می‌خورید |
| کوې | کوئ | می‌کنی / می‌کنید |

## سلام رسمی و غیررسمی

| غیررسمی | رسمی | فارسی |
|---------|------|-------|
| سلام | سلام علیکم | سلام |
| ستړی مه شې | ستړی مه شئ | خسته نباشی/ید |
| څنګه یې؟ | څنګه یاست؟ | چطوری/ید؟ |
| خدای پامان | خدای مو په امان | خداحافظ |

## امری رسمی و غیررسمی

| غیررسمی | رسمی | فارسی |
|---------|------|-------|
| راشه | راشئ | بیا / بیایید |
| کېنه | کېنئ | بنشین / بنشینید |
| وخوره | وخورئ | بخور / بخورید |
| ووایه | ووایئ | بگو / بگویید |

## کی از رسمی استفاده کنیم؟

- با بزرگترها
- با غریبه‌ها
- در محیط کاری
- با افراد محترم
- در موقعیت‌های رسمی

## کی از غیررسمی استفاده کنیم؟

- با دوستان
- با همسالان
- با کوچکترها
- در خانواده (معمولاً)
- در موقعیت‌های دوستانه

## مکالمه غیررسمی

**احمد:** سلام! څنګه یې؟
**محمود:** ښه یم، ته څنګه یې؟
**احمد:** زه هم ښه یم. چېرته ځې؟
**محمود:** بازار ته ځم. ته راځې؟
**احمد:** هو، راځم!

## مکالمه رسمی

**احمد:** سلام علیکم! څنګه یاست؟
**محمود:** و علیکم السلام! الحمدلله ښه یم. تاسو څنګه یاست؟
**احمد:** زه هم ښه یم، مننه. تاسو چېرته تشریف وړئ؟
**محمود:** زه دفتر ته ځم.
**احمد:** ښه، خدای مو په امان!

## عبارات مودبانه رسمی

| پښتو | فارسی |
|------|-------|
| که مهربانی وکړئ | لطفاً |
| ستاسو مهرباني | لطف شماست |
| بخښنه غواړم | ببخشید |
| معذرت غواړم | معذرت می‌خواهم |
| تشریف راوړئ | بفرمایید |

> **نکته مهم:** در پښتو، استفاده از شکل رسمی نشان‌دهنده احترام است. همیشه با بزرگترها و غریبه‌ها از شکل رسمی استفاده کنید.
`,hasPractice:!1},wb={id:"pronouns",title:"ضمایر",titlePashto:"ضمیرونه",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# ضمایر در پښتو کندهاری

## ضمایر فاعلی (شخصی)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| زه | من | za |
| ته | تو | ta |
| هغه | او (مذکر) | hagha |
| هغه | او (مؤنث) | hagha |
| موږ | ما | muẓ̌ |
| تاسو | شما | tāso |
| هغوی | آنها | haghwey |

## ضمایر مفعولی

| پښتو | فارسی | تلفظ |
|------|-------|------|
| ما | مرا | mā |
| تا | تو را | tā |
| هغه | او را | hagha |
| موږ | ما را | muẓ̌ |
| تاسو | شما را | tāso |
| هغوی | آنها را | haghwey |

## ضمایر ملکی

| پښتو | فارسی | تلفظ |
|------|-------|------|
| زما | مال من | zmā |
| ستا | مال تو | stā |
| د هغه | مال او | da hagha |
| زموږ | مال ما | zmuẓ̌ |
| ستاسو | مال شما | stāso |
| د هغوی | مال آنها | da haghwey |

## مثال‌های ضمایر ملکی

| پښتو | فارسی |
|------|-------|
| زما کور | خانه من |
| ستا نوم | اسم تو |
| د هغه کتاب | کتاب او |
| زموږ کورنۍ | خانواده ما |
| ستاسو موټر | ماشین شما |

## ضمایر اشاره

| پښتو | فارسی | تلفظ |
|------|-------|------|
| دا | این | dā |
| هغه | آن | hagha |
| دوی | اینها | duy |
| هغوی | آنها | haghwey |

## مثال‌های ضمایر اشاره

| پښتو | فارسی |
|------|-------|
| دا کتاب دی | این کتاب است |
| هغه سړی دی | آن مرد است |
| دا څه دی؟ | این چیست؟ |
| هغه څوک دی؟ | آن کیست؟ |

## ضمایر پرسشی

| پښتو | فارسی | تلفظ |
|------|-------|------|
| څوک | کی | tsok |
| څه | چه | tsa |
| کوم | کدام | kom |
| څومره | چقدر | tsomra |

## مثال در جمله

| پښتو | فارسی |
|------|-------|
| زه کور ته ځم | من به خانه می‌روم |
| ته چرته ځې؟ | تو کجا می‌روی؟ |
| هغه ډاکټر دی | او داکتر است |
| موږ پښتانه یو | ما پښتون هستیم |
| تاسو له کومه یاست؟ | شما از کجا هستید؟ |
| هغوی زموږ ملګري دي | آنها دوستان ما هستند |

## رسمی vs غیررسمی

| غیررسمی | رسمی | معنی |
|---------|------|------|
| ته | تاسو | تو/شما |
| ستا | ستاسو | مال تو/شما |
| تا | تاسو | تو را/شما را |

> **نکته:** در موقعیت‌های رسمی یا با بزرگترها، از «تاسو» به جای «ته» استفاده کنید.
`,hasPractice:!1},kb={id:"possessive-pronouns",title:"ضمایر ملکی",titlePashto:"ملکي ضمیرونه",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# ضمایر ملکی در پښتو

ضمایر ملکی برای نشان دادن مالکیت استفاده می‌شوند.

## ضمایر ملکی

| ضمیر شخصی | ضمیر ملکی | فارسی |
|-----------|-----------|-------|
| زه | زما | من / مال من |
| ته | ستا | تو / مال تو |
| هغه (مذکر) | د هغه | او / مال او |
| هغه (مونث) | د هغې | او / مال او |
| موږ | زموږ | ما / مال ما |
| تاسو | ستاسو | شما / مال شما |
| هغوی | د هغوی | آنها / مال آنها |

## ساختار ملکی

در پښتو، ضمیر ملکی قبل از اسم می‌آید:

| پښتو | فارسی |
|------|-------|
| زما کور | خانه من |
| ستا کتاب | کتاب تو |
| د هغه موټر | موتر او |
| زموږ کورنۍ | خانواده ما |
| ستاسو ملک | کشور شما |

## مثال‌ها با اعضای خانواده

| پښتو | فارسی |
|------|-------|
| زما پلار | پدر من |
| زما مور | مادر من |
| ستا ورور | برادر تو |
| ستا خور | خواهر تو |
| زموږ ماشومان | بچه‌های ما |
| ستاسو کورنۍ | خانواده شما |

## مثال‌ها با اشیاء

| پښتو | فارسی |
|------|-------|
| زما قلم | قلم من |
| ستا تلیفون | تلفن تو |
| د هغه کمپیوټر | کامپیوتر او |
| زموږ کور | خانه ما |
| ستاسو موټر | موتر شما |

## سوالات ملکی

| پښتو | فارسی |
|------|-------|
| دا د چا دی؟ | این مال کیست؟ |
| دا ستا دی؟ | این مال توست؟ |
| دا زما دی | این مال من است |
| دا د هغه دی | این مال اوست |

## مثال‌ها در جمله

| پښتو | فارسی |
|------|-------|
| زما نوم احمد دی | اسم من احمد است |
| ستا کور چېرته دی؟ | خانه‌ات کجاست؟ |
| د هغه پلار داکتر دی | پدرش داکتر است |
| زموږ ملک ښکلی دی | کشور ما زیباست |
| ستاسو مرسته ته اړتیا لرم | به کمک شما نیاز دارم |

## ضمایر ملکی با حروف اضافه

| پښتو | فارسی |
|------|-------|
| زما سره | با من |
| ستا لپاره | برای تو |
| د هغه په اړه | درباره او |
| زموږ کور ته | به خانه ما |

## مکالمه نمونه

**احمد:** دا د چا موټر دی؟
**محمود:** دا زما موټر دی.
**احمد:** ستا موټر ډېر ښکلی دی!
**محمود:** مننه! ستا موټر هم ښه دی.
**احمد:** زما موټر زوړ دی.
**محمود:** خو بیا هم ښه دی.

> **نکته:** «زما» و «ستا» مستقیماً قبل از اسم می‌آیند، اما برای سوم شخص از «د» استفاده می‌شود.
`,hasPractice:!1},jb={id:"demonstratives",title:"ضمایر اشاره",titlePashto:"اشاري ضمیرونه",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# ضمایر اشاره در پښتو

ضمایر اشاره برای اشاره به اشیاء یا افراد نزدیک یا دور استفاده می‌شوند.

## ضمایر اشاره نزدیک

| پښتو | فارسی | کاربرد |
|------|-------|--------|
| دا | این | مفرد نزدیک |
| دغه | همین | تاکید بر نزدیکی |
| دلته | اینجا | مکان نزدیک |

## ضمایر اشاره دور

| پښتو | فارسی | کاربرد |
|------|-------|--------|
| هغه | آن | مفرد دور |
| هلته | آنجا | مکان دور |

## مثال‌ها با «دا» (این)

| پښتو | فارسی |
|------|-------|
| دا څه دی؟ | این چیست؟ |
| دا کتاب دی | این کتاب است |
| دا زما دی | این مال من است |
| دا سړی څوک دی؟ | این مرد کیست؟ |
| دا ښه دی | این خوب است |

## مثال‌ها با «هغه» (آن)

| پښتو | فارسی |
|------|-------|
| هغه څه دی؟ | آن چیست؟ |
| هغه کور دی | آن خانه است |
| هغه د چا دی؟ | آن مال کیست؟ |
| هغه سړی راغی | آن مرد آمد |
| هغه ښه نه دی | آن خوب نیست |

## مثال‌ها با «دلته» و «هلته»

| پښتو | فارسی |
|------|-------|
| دلته راشه | اینجا بیا |
| هلته ولاړ شه | آنجا بایست |
| دلته کېنه | اینجا بنشین |
| هلته وګوره | آنجا ببین |
| دلته څه دی؟ | اینجا چیست؟ |

## مقایسه نزدیک و دور

| نزدیک | دور | فارسی |
|-------|-----|-------|
| دا کتاب | هغه کتاب | این کتاب / آن کتاب |
| دا سړی | هغه سړی | این مرد / آن مرد |
| دلته | هلته | اینجا / آنجا |
| دا ځای | هغه ځای | این جا / آن جا |

## ضمایر اشاره با صفت

| پښتو | فارسی |
|------|-------|
| دا ښه کتاب | این کتاب خوب |
| هغه لوی کور | آن خانه بزرگ |
| دا نوی موټر | این موتر نو |
| هغه زوړ کتاب | آن کتاب کهنه |

## جملات سوالی با ضمایر اشاره

| پښتو | فارسی |
|------|-------|
| دا څه دی؟ | این چیست؟ |
| دا څوک دی؟ | این کیست؟ |
| دا د چا دی؟ | این مال کیست؟ |
| هغه چېرته دی؟ | آن کجاست؟ |

## مکالمه نمونه

**احمد:** دا څه دی؟
**محمود:** دا کتاب دی.
**احمد:** دا ستا دی؟
**محمود:** نه، دا زما نه دی. هغه زما دی.
**احمد:** هغه کوم؟
**محمود:** هغه چې هلته پروت دی.
**احمد:** آه، هغه ښه کتاب دی!

> **نکته:** «دا» برای نزدیک و «هغه» برای دور استفاده می‌شود.
`,hasPractice:!1},Nb={id:"sentence-structure",title:"ساختار جمله (SOV)",titlePashto:"د جملې جوړښت",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# ساختار جمله در پښتو

پښتو یک زبان SOV است، یعنی ترتیب کلمات: **فاعل + مفعول + فعل**

## مقایسه با فارسی

| زبان | ترتیب | مثال |
|------|-------|------|
| فارسی | SOV | من نان می‌خورم |
| پښتو | SOV | زه ډوډۍ خورم |
| انگلیسی | SVO | I eat bread |

## ساختار جمله ساده

### فاعل + فعل

| پښتو | فارسی |
|------|-------|
| زه ځم | من می‌روم |
| ته راځې | تو می‌آیی |
| هغه ویده دی | او خوابیده است |

### فاعل + مفعول + فعل

| پښتو | فارسی |
|------|-------|
| زه ډوډۍ خورم | من نان می‌خورم |
| هغه کتاب لولي | او کتاب می‌خواند |
| موږ چای څښو | ما چای می‌نوشیم |

## ضمایر فاعلی

| پښتو | فارسی | تلفظ |
|------|-------|------|
| زه | من | za |
| ته | تو | ta |
| هغه | او (مذکر) | hagha |
| هغه | او (مؤنث) | hagha |
| موږ | ما | muẓ̌ |
| تاسو | شما | tāso |
| هغوی | آنها | haghwey |

## جملات منفی

برای منفی کردن، «نه» قبل از فعل می‌آید:

| مثبت | منفی |
|------|------|
| زه ځم (می‌روم) | زه نه ځم (نمی‌روم) |
| هغه راځي (می‌آید) | هغه نه راځي (نمی‌آید) |
| موږ خورو (می‌خوریم) | موږ نه خورو (نمی‌خوریم) |

## جملات سوالی

### با کلمه پرسشی

| پښتو | فارسی |
|------|-------|
| ته چرته ځې؟ | تو کجا می‌روی؟ |
| دا څه دی؟ | این چیست؟ |
| هغه څوک دی؟ | او کیست؟ |
| ته کله راځې؟ | تو کی می‌آیی؟ |

### کلمات پرسشی

| پښتو | فارسی | تلفظ |
|------|-------|------|
| څه | چه | tsa |
| څوک | کی | tsok |
| چرته | کجا | charta |
| کله | کی (زمان) | kala |
| ولې | چرا | wale |
| څومره | چقدر | tsomra |
| څنګه | چطور | tsanga |

## مثال‌های بیشتر

| پښتو | فارسی |
|------|-------|
| زه کور ته ځم | من به خانه می‌روم |
| هغه ښوونځي کې دی | او در مدرسه است |
| موږ کندهار کې اوسیږو | ما در قندهار زندگی می‌کنیم |
| تاسو څه کار کوئ؟ | شما چه کار می‌کنید؟ |

> **نکته:** در پښتو، فعل همیشه در آخر جمله می‌آید. این مهم‌ترین قاعده است!
`,hasPractice:!1},zb={id:"verb-to-be",title:"فعل بودن (یم/دی)",titlePashto:"د اوسېدو فعل",difficulty:"easy",estimatedTime:"۲۰ دقیقه",content:`
# فعل بودن در پښتو

فعل «بودن» یکی از مهم‌ترین فعل‌ها در هر زبانی است. در پښتو این فعل به صورت پسوند به جمله اضافه می‌شود.

## گردان فعل بودن - زمان حال

### غیررسمی (ته - تو)

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه یم | من هستم | za yam |
| ته | ته یې | تو هستی | ta ye |
| هغه (مذکر) | هغه دی | او است | hagha day |
| هغه (مونث) | هغه ده | او است | hagha da |
| موږ | موږ یو | ما هستیم | moẓ yu |
| تاسو | تاسو یاست | شما هستید | tāso yāst |
| هغوی | هغوی دي | آنها هستند | haghwey di |

### رسمی (تاسو - شما)

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه یم | من هستم | za yam |
| تاسو | تاسو یاست | شما هستید | tāso yāst |
| هغه (مذکر) | هغه دی | او است | hagha day |
| هغه (مونث) | هغه ده | او است | hagha da |
| موږ | موږ یو | ما هستیم | moẓ yu |
| هغوی | هغوی دي | آنها هستند | haghwey di |

## مثال‌ها با صفت

| پښتو | فارسی |
|------|-------|
| زه ښه یم | من خوبم |
| ته ستړی یې | تو خسته‌ای |
| هغه ناروغ دی | او مریض است |
| هغه ښکلې ده | او زیباست (زن) |
| موږ خوشحاله یو | ما خوشحالیم |
| تاسو کور کې یاست؟ | شما در خانه هستید؟ |
| هغوی دلته دي | آنها اینجا هستند |

## مثال‌ها با اسم

| پښتو | فارسی |
|------|-------|
| زه معلم یم | من معلم هستم |
| ته زده‌کوونکی یې | تو دانش‌آموز هستی |
| هغه داکتر دی | او داکتر است |
| هغه نرس ده | او نرس است (زن) |
| موږ افغانان یو | ما افغان هستیم |
| هغوی ملګري دي | آنها دوست هستند |

## جملات منفی

برای منفی کردن از «نه» استفاده می‌شود:

| پښتو | فارسی |
|------|-------|
| زه ستړی نه یم | من خسته نیستم |
| ته دلته نه یې | تو اینجا نیستی |
| هغه کور کې نه دی | او در خانه نیست |
| موږ ناروغ نه یو | ما مریض نیستیم |
| هغوی افغانان نه دي | آنها افغان نیستند |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| ته ښه یې؟ | تو خوبی؟ |
| هغه کور کې دی؟ | او در خانه است؟ |
| تاسو معلم یاست؟ | شما معلم هستید؟ |
| هغوی دلته دي؟ | آنها اینجا هستند؟ |

## مکالمه نمونه

**احمد:** سلام! ته څنګه یې؟
**محمود:** ښه یم، مننه. ته څنګه یې؟
**احمد:** زه هم ښه یم. ته کور کې یې؟
**محمود:** نه، زه بازار کې یم.
**احمد:** ستا ورور چېرته دی؟
**محمود:** هغه کور کې دی.

> **نکته:** در پښتو فعل بودن با جنسیت فاعل تغییر می‌کند: «دی» برای مذکر و «ده» برای مونث.
`,hasPractice:!1},Sb={id:"verb-to-go",title:"فعل رفتن (ځم)",titlePashto:"د تللو فعل",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# فعل رفتن در پښتو

فعل «تلل» (رفتن) یکی از پرکاربردترین فعل‌ها در پښتو است. ریشه این فعل «ځ» است.

## گردان فعل رفتن - زمان حال

### غیررسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه ځم | من می‌روم | za dzam |
| ته | ته ځې | تو می‌روی | ta dze |
| هغه | هغه ځي | او می‌رود | hagha dzi |
| موږ | موږ ځو | ما می‌رویم | moẓ dzu |
| تاسو | تاسو ځئ | شما می‌روید | tāso dzey |
| هغوی | هغوی ځي | آنها می‌روند | haghwey dzi |

### رسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه ځم | من می‌روم | za dzam |
| تاسو | تاسو ځئ | شما می‌روید | tāso dzey |
| هغه | هغه ځي | او می‌رود | hagha dzi |
| موږ | موږ ځو | ما می‌رویم | moẓ dzu |
| هغوی | هغوی ځي | آنها می‌روند | haghwey dzi |

## مثال‌ها با مکان

| پښتو | فارسی |
|------|-------|
| زه کور ته ځم | من به خانه می‌روم |
| ته چېرته ځې؟ | تو کجا می‌روی؟ |
| هغه بازار ته ځي | او به بازار می‌رود |
| موږ مکتب ته ځو | ما به مکتب می‌رویم |
| تاسو کابل ته ځئ؟ | شما به کابل می‌روید؟ |
| هغوی کندهار ته ځي | آنها به کندهار می‌روند |

## جملات با زمان

| پښتو | فارسی |
|------|-------|
| زه اوس ځم | من الان می‌روم |
| ته سبا ځې؟ | تو فردا می‌روی؟ |
| هغه هره ورځ ځي | او هر روز می‌رود |
| موږ ناوخته ځو | ما دیر می‌رویم |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه نه ځم | من نمی‌روم |
| ته ولې نه ځې؟ | تو چرا نمی‌روی؟ |
| هغه کور ته نه ځي | او به خانه نمی‌رود |
| موږ نن نه ځو | ما امروز نمی‌رویم |
| هغوی هلته نه ځي | آنها آنجا نمی‌روند |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| ته چېرته ځې؟ | تو کجا می‌روی؟ |
| کله ځې؟ | کی می‌روی؟ |
| ولې ځې؟ | چرا می‌روی؟ |
| له چا سره ځې؟ | با کی می‌روی؟ |
| څنګه ځې؟ | چطور می‌روی؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| راځه، لاړ شو | بیا، برویم |
| زه لاړ شم؟ | من بروم؟ |
| ته هم راځې؟ | تو هم می‌آیی؟ |
| موږ یوځای ځو | ما با هم می‌رویم |
| هغه پلی ځي | او پیاده می‌رود |
| زه په موټر ځم | من با موتر می‌روم |

## مکالمه نمونه

**احمد:** سلام! چېرته ځې؟
**محمود:** سلام! زه بازار ته ځم.
**احمد:** زه هم بازار ته ځم. یوځای ځو؟
**محمود:** هو، راځه!
**احمد:** په موټر ځو که پلی؟
**محمود:** پلی ځو، لرې نه ده.

> **نکته کندهاری:** در لهجه کندهاری، «ځ» به صورت واضح‌تر تلفظ می‌شود (مثل dz در انگلیسی).
`,hasPractice:!1},Eb={id:"verb-to-come",title:"فعل آمدن (راځم)",titlePashto:"د راتللو فعل",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# فعل آمدن در پښتو

فعل «راتلل» (آمدن) از ترکیب پیشوند «را» و فعل «تلل» ساخته شده. این فعل برای حرکت به سمت گوینده استفاده می‌شود.

## گردان فعل آمدن - زمان حال

### غیررسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه راځم | من می‌آیم | za rādzam |
| ته | ته راځې | تو می‌آیی | ta rādze |
| هغه | هغه راځي | او می‌آید | hagha rādzi |
| موږ | موږ راځو | ما می‌آییم | moẓ rādzu |
| تاسو | تاسو راځئ | شما می‌آیید | tāso rādzey |
| هغوی | هغوی راځي | آنها می‌آیند | haghwey rādzi |

### رسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه راځم | من می‌آیم | za rādzam |
| تاسو | تاسو راځئ | شما می‌آیید | tāso rādzey |
| هغه | هغه راځي | او می‌آید | hagha rādzi |
| موږ | موږ راځو | ما می‌آییم | moẓ rādzu |
| هغوی | هغوی راځي | آنها می‌آیند | haghwey rādzi |

## مقایسه رفتن و آمدن

| رفتن | آمدن | فارسی |
|------|------|-------|
| ځم | راځم | می‌روم / می‌آیم |
| ځې | راځې | می‌روی / می‌آیی |
| ځي | راځي | می‌رود / می‌آید |
| ځو | راځو | می‌رویم / می‌آییم |
| ځئ | راځئ | می‌روید / می‌آیید |
| ځي | راځي | می‌روند / می‌آیند |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه اوس راځم | من الان می‌آیم |
| ته کله راځې؟ | تو کی می‌آیی؟ |
| هغه سبا راځي | او فردا می‌آید |
| موږ ناوخته راځو | ما دیر می‌آییم |
| تاسو زموږ کور ته راځئ؟ | شما به خانه ما می‌آیید؟ |
| هغوی له کابله راځي | آنها از کابل می‌آیند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه نه راځم | من نمی‌آیم |
| ته ولې نه راځې؟ | تو چرا نمی‌آیی؟ |
| هغه نن نه راځي | او امروز نمی‌آید |
| موږ نه شو راتلی | ما نتوانستیم بیاییم |
| هغوی هیڅکله نه راځي | آنها هیچوقت نمی‌آیند |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| ته راځې؟ | تو می‌آیی؟ |
| کله راځې؟ | کی می‌آیی؟ |
| له چا سره راځې؟ | با کی می‌آیی؟ |
| څنګه راځې؟ | چطور می‌آیی؟ |
| ولې نه راځې؟ | چرا نمی‌آیی؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| راشه! | بیا! |
| راځه! | بیا! (دوستانه) |
| راشئ! | بیایید! (رسمی) |
| زر راشه | زود بیا |
| ته هم راځې؟ | تو هم می‌آیی؟ |
| زه درځم | من پیشت می‌آیم |
| هغه راروان دی | او در راه است |

## مکالمه نمونه

**احمد:** الو، سلام! چېرته یې؟
**محمود:** سلام! زه لاره کې یم.
**احمد:** کله راځې؟
**محمود:** زه اوس راځم، لس دقیقې وروسته رسېږم.
**احمد:** ښه، زر راشه!
**محمود:** هو، راروان یم.

> **نکته:** پیشوند «را» نشان‌دهنده حرکت به سمت گوینده است. «درځم» یعنی به سمت تو می‌آیم.
`,hasPractice:!1},Tb={id:"verb-to-eat",title:"فعل خوردن (خورم)",titlePashto:"د خوړلو فعل",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# فعل خوردن در پښتو

فعل «خوړل» (خوردن) یکی از فعل‌های پرکاربرد روزمره است. ریشه این فعل «خور» است.

## گردان فعل خوردن - زمان حال

### غیررسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه خورم | من می‌خورم | za khoram |
| ته | ته خورې | تو می‌خوری | ta khore |
| هغه | هغه خوري | او می‌خورد | hagha khori |
| موږ | موږ خورو | ما می‌خوریم | moẓ khoru |
| تاسو | تاسو خورئ | شما می‌خورید | tāso khorey |
| هغوی | هغوی خوري | آنها می‌خورند | haghwey khori |

### رسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه خورم | من می‌خورم | za khoram |
| تاسو | تاسو خورئ | شما می‌خورید | tāso khorey |
| هغه | هغه خوري | او می‌خورد | hagha khori |
| موږ | موږ خورو | ما می‌خوریم | moẓ khoru |
| هغوی | هغوی خوري | آنها می‌خورند | haghwey khori |

## مثال‌ها با غذا

| پښتو | فارسی |
|------|-------|
| زه ډوډۍ خورم | من نان می‌خورم |
| ته څه خورې؟ | تو چه می‌خوری؟ |
| هغه پلاو خوري | او پلو می‌خورد |
| موږ غوښه خورو | ما گوشت می‌خوریم |
| تاسو میوه خورئ؟ | شما میوه می‌خورید؟ |
| هغوی کباب خوري | آنها کباب می‌خورند |

## غذاهای رایج

| پښتو | فارسی | تلفظ |
|------|-------|------|
| ډوډۍ | نان | ḍoḍəy |
| پلاو | پلو | palāw |
| غوښه | گوشت | ghwasha |
| کباب | کباب | kabāb |
| شوروا | آش/سوپ | shorwā |
| میوه | میوه | mewa |
| سبزي | سبزی | sabzi |
| ورېژې | برنج | wreže |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه غوښه نه خورم | من گوشت نمی‌خورم |
| ته ولې نه خورې؟ | تو چرا نمی‌خوری؟ |
| هغه ډوډۍ نه خوري | او نان نمی‌خورد |
| موږ لږ خورو | ما کم می‌خوریم |
| هغوی هیڅ نه خوري | آنها هیچی نمی‌خورند |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| ته څه خورې؟ | تو چه می‌خوری؟ |
| ډوډۍ خورې؟ | نان می‌خوری؟ |
| غوښه خورې که نه؟ | گوشت می‌خوری یا نه؟ |
| تاسو وږی یاست؟ | شما گرسنه هستید؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| زه وږی یم | من گرسنه‌ام |
| ته وږی یې؟ | تو گرسنه‌ای؟ |
| راځه ډوډۍ وخورو | بیا نان بخوریم |
| ډوډۍ تیاره ده | غذا آماده است |
| نوش جان! | نوش جان! |
| ډېره خوندوره ده | خیلی خوشمزه است |
| زه موړ شوم | من سیر شدم |

## مکالمه نمونه

**مور:** راځه، ډوډۍ وخوره!
**زوی:** مور، څه پخلی دی؟
**مور:** نن پلاو پخلی دی.
**زوی:** ډېره مننه! زه وږی یم.
**مور:** نوش جان! ډېر وخوره.
**زوی:** ډېره خوندوره ده!
**مور:** موړ شوې؟
**زوی:** هو، موړ شوم. مننه مور!

> **نکته:** در پښتو «ډوډۍ» هم به معنی نان است و هم به معنی غذا به طور کلی.
`,hasPractice:!1},_b={id:"verb-to-drink",title:"فعل نوشیدن (څښم)",titlePashto:"د څښلو فعل",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# فعل نوشیدن در پښتو

فعل «څښل» (نوشیدن) برای همه نوشیدنی‌ها استفاده می‌شود. ریشه این فعل «څښ» است.

## گردان فعل نوشیدن - زمان حال

### غیررسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه څښم | من می‌نوشم | za tsṣ̌am |
| ته | ته څښې | تو می‌نوشی | ta tsṣ̌e |
| هغه | هغه څښي | او می‌نوشد | hagha tsṣ̌i |
| موږ | موږ څښو | ما می‌نوشیم | moẓ tsṣ̌u |
| تاسو | تاسو څښئ | شما می‌نوشید | tāso tsṣ̌ey |
| هغوی | هغوی څښي | آنها می‌نوشند | haghwey tsṣ̌i |

### رسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه څښم | من می‌نوشم | za tsṣ̌am |
| تاسو | تاسو څښئ | شما می‌نوشید | tāso tsṣ̌ey |
| هغه | هغه څښي | او می‌نوشد | hagha tsṣ̌i |
| موږ | موږ څښو | ما می‌نوشیم | moẓ tsṣ̌u |
| هغوی | هغوی څښي | آنها می‌نوشند | haghwey tsṣ̌i |

## نوشیدنی‌های رایج

| پښتو | فارسی | تلفظ |
|------|-------|------|
| اوبه | آب | oba |
| چای | چای | chāy |
| شیدې | شیر | shide |
| لسي | دوغ | lassi |
| شربت | شربت | sharbat |
| قهوه | قهوه | qahwa |
| کوکاکولا | کوکاکولا | kokākola |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه اوبه څښم | من آب می‌نوشم |
| ته چای څښې؟ | تو چای می‌نوشی؟ |
| هغه شیدې څښي | او شیر می‌نوشد |
| موږ شربت څښو | ما شربت می‌نوشیم |
| تاسو څه څښئ؟ | شما چه می‌نوشید؟ |
| هغوی لسي څښي | آنها دوغ می‌نوشند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه قهوه نه څښم | من قهوه نمی‌نوشم |
| ته ولې اوبه نه څښې؟ | تو چرا آب نمی‌نوشی؟ |
| هغه چای نه څښي | او چای نمی‌نوشد |
| موږ سړې اوبه نه څښو | ما آب سرد نمی‌نوشیم |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| ته څه څښې؟ | تو چه می‌نوشی؟ |
| چای څښې که قهوه؟ | چای می‌نوشی یا قهوه؟ |
| تاسو تږی یاست؟ | شما تشنه هستید؟ |
| اوبه راوړم؟ | آب بیاورم؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| زه تږی یم | من تشنه‌ام |
| ته تږی یې؟ | تو تشنه‌ای؟ |
| اوبه راکړه | آب بده |
| چای راوړه | چای بیاور |
| ګرم چای | چای داغ |
| سړې اوبه | آب سرد |
| شین چای | چای سبز |
| تور چای | چای سیاه |

## مکالمه نمونه

**میلمه:** سلام علیکم!
**کوربه:** و علیکم السلام! راشئ، کېنئ.
**میلمه:** مننه.
**کوربه:** چای څښئ که قهوه؟
**میلمه:** چای، مننه.
**کوربه:** شین چای که تور چای؟
**میلمه:** شین چای، که زحمت نه وي.
**کوربه:** هیڅ نه، اوس راوړم.

> **نکته کندهاری:** در کندهاری «څ» به صورت واضح تلفظ می‌شود. «څښل» یعنی نوشیدن.
`,hasPractice:!1},Ab={id:"verb-to-do",title:"فعل کردن (کوم)",titlePashto:"د کولو فعل",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# فعل کردن در پښتو

فعل «کول» (کردن) یکی از پرکاربردترین فعل‌ها در پښتو است. این فعل برای ساختن فعل‌های مرکب هم استفاده می‌شود.

## گردان فعل کردن - زمان حال

### غیررسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه کوم | من می‌کنم | za kawam |
| ته | ته کوې | تو می‌کنی | ta kawe |
| هغه | هغه کوي | او می‌کند | hagha kawi |
| موږ | موږ کوو | ما می‌کنیم | moẓ kawu |
| تاسو | تاسو کوئ | شما می‌کنید | tāso kawey |
| هغوی | هغوی کوي | آنها می‌کنند | haghwey kawi |

### رسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه کوم | من می‌کنم | za kawam |
| تاسو | تاسو کوئ | شما می‌کنید | tāso kawey |
| هغه | هغه کوي | او می‌کند | hagha kawi |
| موږ | موږ کوو | ما می‌کنیم | moẓ kawu |
| هغوی | هغوی کوي | آنها می‌کنند | haghwey kawi |

## فعل‌های مرکب با «کول»

| پښتو | فارسی | تلفظ |
|------|-------|------|
| کار کول | کار کردن | kār kawəl |
| خبرې کول | صحبت کردن | khabəre kawəl |
| مرسته کول | کمک کردن | mrasta kawəl |
| پوښتنه کول | سوال کردن | puṣ̌tana kawəl |
| انتظار کول | انتظار کشیدن | intizār kawəl |
| فکر کول | فکر کردن | fikr kawəl |
| زده کول | یاد گرفتن | zda kawəl |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه کار کوم | من کار می‌کنم |
| ته څه کوې؟ | تو چه می‌کنی؟ |
| هغه زده کوي | او یاد می‌گیرد |
| موږ خبرې کوو | ما صحبت می‌کنیم |
| تاسو څه کار کوئ؟ | شما چه کار می‌کنید؟ |
| هغوی مرسته کوي | آنها کمک می‌کنند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه دا نه کوم | من این را نمی‌کنم |
| ته ولې کار نه کوې؟ | تو چرا کار نمی‌کنی؟ |
| هغه هیڅ نه کوي | او هیچ کاری نمی‌کند |
| موږ دا کار نه کوو | ما این کار را نمی‌کنیم |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| ته څه کوې؟ | تو چه می‌کنی؟ |
| دا څنګه کوې؟ | این را چطور می‌کنی؟ |
| ولې دا کوې؟ | چرا این کار را می‌کنی؟ |
| کله کار کوې؟ | کی کار می‌کنی؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| زه کار کوم | من کار می‌کنم |
| ته څه کار کوې؟ | تو چه کاری می‌کنی؟ |
| زه زده کوم | من یاد می‌گیرم |
| مرسته وکړه | کمک کن |
| دا مه کوه | این کار را نکن |
| ښه کار وکړ | کار خوبی کردی |

## مکالمه نمونه

**احمد:** سلام! څه کوې؟
**محمود:** سلام! زه کار کوم.
**احمد:** څه کار کوې؟
**محمود:** زه پښتو زده کوم.
**احمد:** ډېر ښه! زه هم غواړم زده کړم.
**محمود:** راځه، یوځای زده کوو!
**احمد:** ښه، مننه!

> **نکته:** فعل «کول» برای ساختن بسیاری از فعل‌های مرکب استفاده می‌شود. مثلاً: کار کول، خبرې کول، مرسته کول.
`,hasPractice:!1},Cb={id:"verb-to-pour",title:"فعل اچول (اچم)",titleFa:"فعل ریختن (اچم)",titlePashto:"اچم",description:"فعل اچول (ریختن) در زمان حال",difficulty:"medium",duration:"۲۵ دقیقه",content:[{type:"intro",title:"فعل اچول در حال",text:'در این درس یاد می‌گیریم چگونه فعل "اچول" (ریختن) را در زمان حال استفاده کنیم. این فعل برای ریختن مایعات مثل چای، آب و شیر استفاده می‌شود.'},{type:"conjugation",title:"گردان فعل اچول - حال",conjugations:[{pronoun:"زه",pashto:"اچم",english:"I pour",example:"زه برایت چای اچم"},{pronoun:"ته",pashto:"اچې",english:"you pour",example:"ته آب اچې"},{pronoun:"هغه",pashto:"اچي",english:"he/she pours",example:"هغه شیر اچي"},{pronoun:"موږ",pashto:"اچو",english:"we pour",example:"موږ چای اچو"},{pronoun:"تاسو",pashto:"اچئ",english:"you (pl) pour",example:"تاسو آب اچئ"},{pronoun:"هغوی",pashto:"اچي",english:"they pour",example:"هغوی شربت اچي"}]},{type:"examples",title:"مثال‌های عملی",examples:[{pashto:"برایت چای اچم؟",english:"Shall I pour tea for you?",farsi:"برایت چای بریزم؟"},{pashto:"ته آب اچې",english:"You pour water",farsi:"تو آب می‌ریزی"},{pashto:"هغه شیر اچي",english:"He pours milk",farsi:"او شیر می‌ریزد"},{pashto:"موږ چای اچو",english:"We pour tea",farsi:"ما چای می‌ریزیم"}]},{type:"practice",title:"تمرین",exercises:[{question:"برایت چای _____ ؟",options:["اچم","اچي","واچ"],answer:"اچم"},{question:"ته آب _____ ؟",options:["اچې","اچي","واچ"],answer:"اچې"},{question:"هغه شیر _____ ؟",options:["اچي","اچم","اچې"],answer:"اچي"}]}]},Mb={id:"verb-to-want",title:"فعل خواستن (غواړم)",titlePashto:"د غوښتلو فعل",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# فعل خواستن در پښتو

فعل «غوښتل» (خواستن) برای بیان خواسته‌ها و آرزوها استفاده می‌شود. ریشه این فعل «غواړ» است.

## گردان فعل خواستن - زمان حال

### غیررسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه غواړم | من می‌خواهم | za ghwāṛam |
| ته | ته غواړې | تو می‌خواهی | ta ghwāṛe |
| هغه | هغه غواړي | او می‌خواهد | hagha ghwāṛi |
| موږ | موږ غواړو | ما می‌خواهیم | moẓ ghwāṛu |
| تاسو | تاسو غواړئ | شما می‌خواهید | tāso ghwāṛey |
| هغوی | هغوی غواړي | آنها می‌خواهند | haghwey ghwāṛi |

### رسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه غواړم | من می‌خواهم | za ghwāṛam |
| تاسو | تاسو غواړئ | شما می‌خواهید | tāso ghwāṛey |
| هغه | هغه غواړي | او می‌خواهد | hagha ghwāṛi |
| موږ | موږ غواړو | ما می‌خواهیم | moẓ ghwāṛu |
| هغوی | هغوی غواړي | آنها می‌خواهند | haghwey ghwāṛi |

## مثال‌ها با اسم

| پښتو | فارسی |
|------|-------|
| زه اوبه غواړم | من آب می‌خواهم |
| ته څه غواړې؟ | تو چه می‌خواهی؟ |
| هغه چای غواړي | او چای می‌خواهد |
| موږ ډوډۍ غواړو | ما غذا می‌خواهیم |
| تاسو څه غواړئ؟ | شما چه می‌خواهید؟ |
| هغوی مرسته غواړي | آنها کمک می‌خواهند |

## مثال‌ها با فعل (می‌خواهم که...)

| پښتو | فارسی |
|------|-------|
| زه غواړم لاړ شم | می‌خواهم بروم |
| ته غواړې راشې؟ | می‌خواهی بیایی؟ |
| هغه غواړي زده کړي | او می‌خواهد یاد بگیرد |
| موږ غواړو ووینو | ما می‌خواهیم ببینیم |
| هغوی غواړي پوه شي | آنها می‌خواهند بفهمند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه نه غواړم | من نمی‌خواهم |
| ته ولې نه غواړې؟ | تو چرا نمی‌خواهی؟ |
| هغه دا نه غواړي | او این را نمی‌خواهد |
| موږ نه غواړو لاړ شو | ما نمی‌خواهیم برویم |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| ته څه غواړې؟ | تو چه می‌خواهی؟ |
| غواړې راشې؟ | می‌خواهی بیایی؟ |
| تاسو څه غواړئ؟ | شما چه می‌خواهید؟ |
| هغه څه غواړي؟ | او چه می‌خواهد؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| زه غواړم... | من می‌خواهم... |
| که غواړې | اگر می‌خواهی |
| هر څه چې غواړې | هر چه می‌خواهی |
| زه دا غواړم | من این را می‌خواهم |
| زه هغه نه غواړم | من آن را نمی‌خواهم |
| ته څومره غواړې؟ | تو چقدر می‌خواهی؟ |

## درخواست مودبانه

| پښتو | فارسی |
|------|-------|
| زه غواړم چای وڅښم | می‌خواهم چای بنوشم |
| که مهربانی وکړئ | لطفاً |
| زه غواړم پوښتنه وکړم | می‌خواهم سوال کنم |
| تاسو غواړئ کېنئ؟ | می‌خواهید بنشینید؟ |

## مکالمه نمونه

**پلورونکی:** سلام! څه غواړئ؟
**پېرودونکی:** سلام! زه میوه غواړم.
**پلورونکی:** کومه میوه غواړئ؟
**پېرودونکی:** زه سیب غواړم.
**پلورونکی:** څومره غواړئ؟
**پېرودونکی:** یو کیلو غواړم.
**پلورونکی:** نور څه غواړئ؟
**پېرودونکی:** نه، مننه. همدومره غواړم.

> **نکته:** «غواړم» هم برای خواستن چیزی و هم برای بیان قصد (می‌خواهم که...) استفاده می‌شود.
`,hasPractice:!1},Rb={id:"verb-to-hit",title:"فعل وهل",titlePashto:"د وهلو فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# فعل وهل در پښتو

فعل «وهل» یکی از فعل‌های اصلی و پرکاربرد در پښتو است. این فعل برای بیان ضربه زدن، کوبیدن و یا انجام کار با قوت استفاده می‌شود.

## گردان فعل وهل - زمان حال

### غیررسمی

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه وهم | من می‌زنم | za waham |
| ته | ته وهې | تو می‌زنی | ta wahe |
| هغه | هغه وهي | او می‌زند | hagha wahi |
| موږ | موږ وهو | ما می‌زنیم | moẓ wahu |
| تاسو | تاسو وهئ | شما می‌زنید | tāso wahey |
| هغوی | هغوی وهي | آنها می‌زنند | haghwey wahi |

## گردان فعل وهل - زمان گذشته

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| ما | ما ووهم | من زدم | ma wawaham |
| تا | تا ووهې | تو زدی | ta wawahe |
| هغه | هغه ووه | او زد | hagha wawa |
| موږ | موږ ووهل | ما زدیم | moẓ wawal |
| تاسو | تاسو ووهل | شما زدید | tāso wawal |
| هغوی | هغوی ووهل | آنها زدند | haghwey wawal |

## فعل‌های مرکب با «وهل»

| پښتو | فارسی | تلفظ |
|------|-------|------|
| در وهل | در زدن | dar wahal |
| تالۍ وهل | تالی زدن | tāli wahal |
| ډرم وهل | طبل زدن | ḍram wahal |
| سر وهل | سر زدن | sar wahal |
| لاس وهل | دست زدن | lās wahal |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه در وهم | من در می‌زنم |
| ته ډرم وهې؟ | تو طبل می‌زنی؟ |
| هغه تالۍ وهي | او تالی می‌زند |
| موږ سر وهو | ما سر می‌زنیم |
| تاسو لاس وهئ | شما دست می‌زنید |
| هغوی ډرم وهي | آنها طبل می‌زنند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه دا نه وهم | من این را نمی‌زنم |
| ته ولې در نه وهې؟ | تو چرا در نمی‌زنی؟ |
| هغه هیڅ نه وهي | او هیچ کاری نمی‌زند |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| ته څه وهې؟ | تو چه می‌زنی؟ |
| دا څنګه وهې؟ | این را چطور می‌زنی؟ |
| کله ووه؟ | کی زدی؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| در وه | در بزن |
| ډرم وه | طبل بزن |
| تالۍ وه | تالی بزن |
| مه وه | نزن |
| ښه ووه | خوب زد |

## مکالمه نمونه

**احمد:** سلام! ته ډرم وهې؟
**محمود:** هو، زه ډرم وهم.
**احمد:** ډرم وه!
**محمود:** ښه، اوس وهم.
**احمد:** ډېر ښه! ډرم خوب وهې.
**محمود:** مننه!

> **نکته:** فعل «وهل» برای بیان ضربه زدن و کوبیدن استفاده می‌شود. مثلاً: در وهل، ڈرم وهل، تالی وهل.
`,hasPractice:!1},Ob={id:"verb-to-wash",title:"فعل مینځل",titlePashto:"د مینځلو فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# فعل مینځل در پښتو

فعل «مینځل» یکی از فعل‌های اصلی و روزمره در پښتو است. این فعل برای شستن و پاک کردن استفاده می‌شود.

## گردان فعل مینځل - زمان حال

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه مینځم | من می‌شوم | za mindzam |
| ته | ته مینځې | تو می‌شوی | ta mindze |
| هغه | هغه مینځي | او می‌شود | hagha mindzi |
| موږ | موږ مینځو | ما می‌شویم | moẓ mindzu |
| تاسو | تاسو مینځئ | شما می‌شوید | tāso mindzey |
| هغوی | هغوی مینځي | آنها می‌شوند | haghwey mindzi |

## گردان فعل مینځل - زمان گذشته

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| ما | ما ومینځم | من شستم | ma wamindzam |
| تا | تا ومینځې | تو شستی | ta wamindze |
| هغه | هغه ومینځ | او شست | hagha wamindz |
| موږ | موږ ومینځل | ما شستیم | moẓ wamindzal |
| تاسو | تاسو ومینځل | شما شستید | tāso wamindzal |
| هغوی | هغوی ومینځل | آنها شستند | haghwey wamindzal |

## فعل‌های مرکب با «مینځل»

| پښتو | فارسی | تلفظ |
|------|-------|------|
| لاس مینځل | دست شستن | lās mindzal |
| مخ مینځل | صورت شستن | makh mindzal |
| پاې مینځل | پا شستن | pāy mindzal |
| کپڑې مینځل | لباس شستن | kapṛe mindzal |
| ظرف مینځل | ظرف شستن | zarf mindzal |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه لاس مینځم | من دست می‌شوم |
| ته مخ مینځې؟ | تو صورت می‌شوی؟ |
| هغه پاې مینځي | او پا می‌شود |
| موږ کپڑې مینځو | ما لباس می‌شویم |
| تاسو ظرف مینځئ | شما ظرف می‌شوید |
| هغوی لاس مینځي | آنها دست می‌شوند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه لاس نه مینځم | من دست نمی‌شوم |
| ته ولې مخ نه مینځې؟ | تو چرا صورت نمی‌شوی؟ |
| هغه هیڅ نه مینځي | او هیچ کاری نمی‌شود |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| ته څه مینځې؟ | تو چه می‌شوی؟ |
| دا څنګه مینځې؟ | این را چطور می‌شوی؟ |
| کله ومینځ؟ | کی شست؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| لاس مینځه | دست شو |
| مخ مینځه | صورت شو |
| پاې مینځه | پا شو |
| کپڑې مینځه | لباس شو |
| ظرف مینځه | ظرف شو |

## مکالمه نمونه

**مور:** ته لاس مینځې؟
**زوی:** هو، زه لاس مینځم.
**مور:** مخ هم مینځ؟
**زوی:** هو، مخ هم ومینځ.
**مور:** ډېر ښه! اوس کپڑې مینځ.
**زوی:** ښه، اوس مینځم.

> **نکته:** فعل «مینځل» برای بیان شستن و پاک کردن استفاده می‌شود. مثلاً: لاس مینځل، مخ مینځل، کپڑې مینځل.
`,hasPractice:!1},qb={id:"verb-to-give",title:"فعل ورکول",titlePashto:"د ورکولو فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# فعل ورکول در پښتو

فعل «ورکول» یکی از فعل‌های اصلی و پرکاربرد در پښتو است. این فعل برای بیان دادن و تقدیم کردن استفاده می‌شود.

## گردان فعل ورکول - زمان حال

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه ورکوم | من می‌دهم | za warkawam |
| ته | ته ورکوې | تو می‌دهی | ta warkawе |
| هغه | هغه ورکوي | او می‌دهد | hagha warkawi |
| موږ | موږ ورکوو | ما می‌دهیم | moẓ warkawu |
| تاسو | تاسو ورکوئ | شما می‌دهید | tāso warkawy |
| هغوی | هغوی ورکوي | آنها می‌دهند | haghwey warkawi |

## گردان فعل ورکول - زمان گذشته

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| ما | ما ورکړ | من دادم | ma warkṛ |
| تا | تا ورکړې | تو دادی | ta warkṛe |
| هغه | هغه ورکړ | او داد | hagha warkṛ |
| موږ | موږ ورکړل | ما دادیم | moẓ warkṛal |
| تاسو | تاسو ورکړل | شما دادید | tāso warkṛal |
| هغوی | هغوی ورکړل | آنها دادند | haghwey warkṛal |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه تا کتاب ورکوم | من تو را کتاب می‌دهم |
| ته ما پیسې ورکوې؟ | تو مرا پول می‌دهی؟ |
| هغه هغې ډوډۍ ورکوي | او او را غذا می‌دهد |
| موږ هغوی مرسته ورکوو | ما آنها را کمک می‌دهیم |
| تاسو ما وقت ورکوئ | شما مرا وقت می‌دهید |
| هغوی ما نصیحت ورکوي | آنها مرا نصیحت می‌دهند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه دا نه ورکوم | من این را نمی‌دهم |
| ته ولې کتاب نه ورکوې؟ | تو چرا کتاب نمی‌دهی؟ |
| هغه هیڅ نه ورکوي | او هیچ کاری نمی‌دهد |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| کتاب ورکه | کتاب بده |
| پیسې ورکه | پول بده |
| مرسته ورکه | کمک بده |
| نصیحت ورکه | نصیحت بده |
| وقت ورکه | وقت بده |

## مکالمه نمونه

**احمد:** ته ما کتاب ورکوې؟
**محمود:** هو، زه تا کتاب ورکوم.
**احمد:** مننه!
**محمود:** خوشحال شم.

> **نکته:** فعل «ورکول» برای بیان دادن و تقدیم کردن استفاده می‌شود.
`,hasPractice:!1},Db={id:"verb-to-take",title:"فعل نیول",titlePashto:"د نیولو فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# فعل نیول در پښتو

فعل «نیول» یکی از فعل‌های اصلی و پرکاربرد در پښتو است. این فعل برای بیان گرفتن و برداشتن استفاده می‌شود.

## گردان فعل نیول - زمان حال

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه نیسم | من می‌گیرم | za nisam |
| ته | ته نیسې | تو می‌گیری | ta nise |
| هغه | هغه نیسي | او می‌گیرد | hagha nisi |
| موږ | موږ نیسو | ما می‌گیریم | moẓ nisu |
| تاسو | تاسو نیسئ | شما می‌گیرید | tāso nisey |
| هغوی | هغوی نیسي | آنها می‌گیرند | haghwey nisi |

## گردان فعل نیول - زمان گذشته

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| ما | ما ونیول | من گرفتم | ma waniyawəl |
| تا | تا ونیول | تو گرفتی | ta waniyawəl |
| هغه | هغه ونیول | او گرفت | hagha waniyawəl |
| موږ | موږ ونیول | ما گرفتیم | moẓ waniyawəl |
| تاسو | تاسو ونیول | شما گرفتید | tāso waniyawəl |
| هغوی | هغوی ونیول | آنها گرفتند | haghwey waniyawəl |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه کتاب نیسم | من کتاب می‌گیرم |
| ته ما پیسې نیسې؟ | تو مرا پول می‌گیری؟ |
| هغه ډوډۍ نیسي | او غذا می‌گیرد |
| موږ هغوی سره نیسو | ما آنها را می‌گیریم |
| تاسو وقت نیسئ | شما وقت می‌گیرید |
| هغوی مرسته نیسي | آنها کمک می‌گیرند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه دا نه نیسم | من این را نمی‌گیرم |
| ته ولې کتاب نه نیسې؟ | تو چرا کتاب نمی‌گیری؟ |
| هغه هیڅ نه نیسي | او هیچ کاری نمی‌گیرد |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| کتاب نیسه | کتاب بگیر |
| پیسې نیسه | پول بگیر |
| مرسته نیسه | کمک بگیر |
| وقت نیسه | وقت بگیر |
| دا نیسه | این را بگیر |

## مکالمه نمونه

**احمد:** ته کتاب نیسې؟
**محمود:** هو، زه کتاب نیسم.
**احمد:** مننه!
**محمود:** خوشحال شم.

> **نکته:** فعل «نیول» برای بیان گرفتن و برداشتن استفاده می‌شود.
`,hasPractice:!1},Ub={id:"verb-to-stand",title:"فعل ایستل",titlePashto:"د ایستلو فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# فعل ایستل در پښتو

فعل «ایستل» یکی از فعل‌های اصلی و روزمره در پښتو است. این فعل برای بیان ایستادن و بلند شدن استفاده می‌شود.

## گردان فعل ایستل - زمان حال

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه ایسته‌ږم | من می‌ایستم | za āysteẓ̌am |
| ته | ته ایسته‌ږې | تو می‌ایستی | ta āysteẓ̌e |
| هغه | هغه ایسته‌ږي | او می‌ایستد | hagha āysteẓ̌i |
| موږ | موږ ایسته‌ږو | ما می‌ایستیم | moẓ āysteẓ̌u |
| تاسو | تاسو ایسته‌ږئ | شما می‌ایستید | tāso āysteẓ̌ey |
| هغوی | هغوی ایسته‌ږي | آنها می‌ایستند | haghwey āysteẓ̌i |

## گردان فعل ایستل - زمان گذشته

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| ما | ما ایسته | من ایستادم | ma āysta |
| تا | تا ایسته | تو ایستادی | ta āysta |
| هغه | هغه ایسته | او ایستاد | hagha āysta |
| موږ | موږ ایستل | ما ایستادیم | moẓ āystal |
| تاسو | تاسو ایستل | شما ایستادید | tāso āystal |
| هغوی | هغوی ایستل | آنها ایستادند | haghwey āystal |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه ایسته‌ږم | من می‌ایستم |
| ته ایسته‌ږې؟ | تو می‌ایستی؟ |
| هغه ایسته‌ږي | او می‌ایستد |
| موږ ایسته‌ږو | ما می‌ایستیم |
| تاسو ایسته‌ږئ | شما می‌ایستید |
| هغوی ایسته‌ږي | آنها می‌ایستند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه نه ایسته‌ږم | من نمی‌ایستم |
| ته ولې نه ایسته‌ږې؟ | تو چرا نمی‌ایستی؟ |
| هغه نه ایسته‌ږي | او نمی‌ایستد |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| ایسته شه | بایست |
| ایسته شئ | بایستید |
| مه ایسته | نایست |
| ایسته کېنه | بایست |

## مکالمه نمونه

**مور:** ته ایسته شه!
**زوی:** ښه، زه ایسته‌ږم.
**مور:** ډېر ښه!

> **نکته:** فعل «ایستل» برای بیان ایستادن و بلند شدن استفاده می‌شود.
`,hasPractice:!1},Lb={id:"verb-to-run",title:"فعل منډې وهل",titlePashto:"د منډې وهلو فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# فعل منډې وهل در پښتو

فعل «منډې وهل» یکی از فعل‌های حرکتی در پښتو است. این فعل برای بیان دویدن و تیز رفتن استفاده می‌شود.

## گردان فعل منډې وهل - زمان حال

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه منډې وهم | من می‌دوم | za munḍe waham |
| ته | ته منډې وهې | تو می‌دوی | ta munḍe wahe |
| هغه | هغه منډې وهي | او می‌دود | hagha munḍe wahi |
| موږ | موږ منډې وهو | ما می‌دویم | moẓ munḍe wahu |
| تاسو | تاسو منډې وهئ | شما می‌دوید | tāso munḍe wahey |
| هغوی | هغوی منډې وهي | آنها می‌دوند | haghwey munḍe wahi |

## گردان فعل منډې وهل - زمان گذشته

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| ما | ما منډې ووهم | من دویدم | ma munḍe wawaham |
| تا | تا منډې ووهې | تو دویدی | ta munḍe wawahe |
| هغه | هغه منډې ووه | او دوید | hagha munḍe wawa |
| موږ | موږ منډې ووهل | ما دویدیم | moẓ munḍe wawal |
| تاسو | تاسو منډې ووهل | شما دویدید | tāso munḍe wawal |
| هغوی | هغوی منډې ووهل | آنها دویدند | haghwey munḍe wawal |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه منډې وهم | من می‌دوم |
| ته ولې منډې وهې؟ | تو چرا می‌دوی؟ |
| هغه ډېر منډې وهي | او خیلی می‌دود |
| موږ سکول ته منډې وهو | ما به مدرسه می‌دویم |
| تاسو کوم ځای ته منډې وهئ؟ | شما کجا می‌دوید؟ |
| هغوی پارک کې منډې وهي | آنها در پارک می‌دوند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه نه منډې وهم | من نمی‌دوم |
| ته منډې نه وهې | تو نمی‌دوی |
| هغه منډې نه وهي | او نمی‌دود |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| منډې وه! | بدو! |
| ډېر منډې وه | خیلی بدو |
| آهسته منډې وه | آهسته بدو |
| تیز منډې وه | تند بدو |

## مکالمه نمونه

**علی:** ته کوم ځای ته منډې وهې؟
**فاطمه:** زه سکول ته منډې وهم.
**علی:** منډې وه، دیر شې!
**فاطمه:** ښه، خدا حافظ!

> **نکته:** فعل «منډې وهل» برای بیان دویدن و تیز رفتن استفاده می‌شود.
`,hasPractice:!1},Hb={id:"verb-to-close",title:"فعل ترل",titlePashto:"د ترلو فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# فعل ترل در پښتو (کندهاری)

فعل «ترل» یکی از فعل‌های متعدی در پښتو است. این فعل برای بیان بستن و بسته کردن استفاده می‌شود، خاصه در لهجه کندهاری.

## گردان فعل ترل - زمان حال

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه دروازه ترم | من در را می‌بندم | za darwāza taram |
| ته | ته دروازه تره | تو در را می‌بندی | ta darwāza tara |
| هغه | هغه دروازه تري | او در را می‌بندد | hagha darwāza tari |
| موږ | موږ دروازه ترو | ما در را می‌بندیم | moẓ darwāza taru |
| تاسو | تاسو دروازه تره | شما در را می‌بندید | tāso darwāza tara |
| هغوی | هغوی دروازه تري | آنها در را می‌بندند | haghwey darwāza tari |

## گردان فعل ترل - زمان گذشته

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| ما | ما دروازه وترم | من در را بستم | ma darwāza wtaram |
| تا | تا دروازه وتره | تو در را بستی | ta darwāza wtara |
| هغه | هغه دروازه وتر | او در را بست | hagha darwāza wtar |
| موږ | موږ دروازه وترل | ما در را بستیم | moẓ darwāza wtaral |
| تاسو | تاسو دروازه وترل | شما در را بستید | tāso darwāza wtaral |
| هغوی | هغوی دروازه وترل | آنها در را بستند | haghwey darwāza wtaral |

## گردان فعل ترل - زمان آینده

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه به دروازه ترم | من خواهم بست | za ba darwāza taram |
| ته | ته به دروازه تره | تو خواهی بست | ta ba darwāza tara |
| هغه | هغه به دروازه تري | او خواهد بست | hagha ba darwāza tari |
| موږ | موږ به دروازه ترو | ما خواهیم بست | moẓ ba darwāza taru |
| تاسو | تاسو به دروازه تره | شما خواهید بست | tāso ba darwāza tara |
| هغوی | هغوی به دروازه تري | آنها خواهند بست | haghwey ba darwāza tari |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه دروازه ترم | من در را می‌بندم |
| ته کتاب تره؟ | تو کتاب را می‌بندی؟ |
| هغه پنجره تري | او پنجره را می‌بندد |
| موږ دروازه ترو | ما در را می‌بندیم |
| تاسو ډبه تره | شما صندوق را می‌بندید |
| هغوی سندوق تري | آنها صندوق را می‌بندند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه دروازه نه ترم | من در را نمی‌بندم |
| ته پنجره نه تره | تو پنجره را نمی‌بندی |
| هغه دروازه نه تري | او در را نمی‌بندد |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| دروازه تر که | در را ببند |
| پنجره تر که | پنجره را ببند |
| کتاب تر که | کتاب را ببند |
| ډبه تر که | صندوق را ببند |

## مکالمه نمونه

**مادر:** ته دروازه تر که!
**پسر:** ښه، ما دروازه ترم.
**مادر:** مننه!
**پسر:** خوشحال شم.

> **نکته:** فعل «ترل» برای بیان بستن و بسته کردن استفاده می‌شود، خاصه در لهجه کندهاری.
`,hasPractice:!1},Bb={id:"verb-to-open",title:"فعل خلاصول",titlePashto:"د خلاصولو فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# فعل خلاصول در پښتو

فعل «خلاصول» یکی از فعل‌های متعدی در پښتو است. این فعل برای بیان باز کردن و گشودن استفاده می‌شود. در کندهاری، مردم می‌گویند "دروازه خلاص کر" (باز کن در را).

## گردان فعل خلاصول - زمان حال

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| زه | زه دروازه خلاصوم | من در را می‌کنم | za darwāza khlaasawam |
| ته | ته دروازه خلاصوې | تو در را می‌کنی | ta darwāza khlaasawe |
| هغه | هغه دروازه خلاصوي | او در را می‌کند | hagha darwāza khlaasawi |
| موږ | موږ دروازه خلاصوو | ما در را می‌کنیم | moẓ darwāza khlaasawu |
| تاسو | تاسو دروازه خلاصوئ | شما در را می‌کنید | tāso darwāza khlaasawy |
| هغوی | هغوی دروازه خلاصوي | آنها در را می‌کنند | haghwey darwāza khlaasawi |

## گردان فعل خلاصول - زمان گذشته

| ضمیر | پښتو کامل | فارسی | تلفظ |
|------|----------|-------|------|
| ما | ما دروازه وخلاصم | من در را کردم | ma darwāza wkhlaasam |
| تا | تا دروازه وخلاصې | تو در را کردی | ta darwāza wkhlaase |
| هغه | هغه دروازه وخلاص | او در را کرد | hagha darwāza wkhlaas |
| موږ | موږ دروازه وخلاصل | ما در را کردیم | moẓ darwāza wkhlaasəl |
| تاسو | تاسو دروازه وخلاصل | شما در را کردید | tāso darwāza wkhlaasəl |
| هغوی | هغوی دروازه وخلاصل | آنها در را کردند | haghwey darwāza wkhlaasəl |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه دروازه خلاصوم | من در را می‌کنم |
| ته کتاب خلاصوې؟ | تو کتاب را می‌کنی؟ |
| هغه پنجره خلاصوي | او پنجره را می‌کند |
| موږ دروازه خلاصوو | ما در را می‌کنیم |
| تاسو ډبه خلاصوئ | شما صندوق را می‌کنید |
| هغوی سندوق خلاصوي | آنها صندوق را می‌کنند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه دروازه نه خلاصوم | من در را نمی‌کنم |
| ته پنجره نه خلاصوې | تو پنجره را نمی‌کنی |
| هغه دروازه نه خلاصوي | او در را نمی‌کند |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| دروازه خلاص کر | در را بکن |
| پنجره خلاص کر | پنجره را بکن |
| کتاب خلاص کر | کتاب را بکن |
| ډبه خلاص کر | صندوق را بکن |

## مکالمه نمونه

**مهمان:** دروازه خلاص کر!
**صاحب خانه:** ښه، ما دروازه خلاصوم.
**مهمان:** مننه!
**صاحب خانه:** خوشحال شم.

> **نکته:** فعل «خلاصول» برای بیان باز کردن و گشودن استفاده می‌شود. در کندهاری، مردم می‌گویند "دروازه خلاص کر".
`,hasPractice:!1},Pb={id:"modal-verbs",title:"فعل‌های کمکی (Modal Verbs)",titlePashto:"د حسم کی حصی فعلونه",difficulty:"medium",estimatedTime:"۳۰ دقیقه",content:`
# فعل‌های کمکی در پشتو

فعل‌های کمکی (Modal Verbs) برای بیان توانایی، ضرورت، اجازه و خواسته استفاده می‌شوند.

## ۱. باید (bāyad) - ضرورت و وظیفه

معنی: باید، شاید، لازم است

### ساختار

**باید + فعل (مصدر)**

### مثال‌ها

| پشتو | فارسی | تلفظ |
|------|-------|------|
| زه باید لاړ شم | من باید بروم | za bāyad lāṛ sham |
| ته باید کار وکړې | تو باید کار کنی | ta bāyad kār wakṛe |
| هغه باید زده کړي | او باید یاد بگیرد | hagha bāyad zda kṛi |
| موږ باید ووینو | ما باید ببینیم | moẓ bāyad wweeno |
| تاسو باید راشئ | شما باید بیایید | tāso bāyad rāshay |
| هغوی باید پوه شي | آنها باید بفهمند | haghwey bāyad poh shi |

### جملات منفی

| پشتو | فارسی |
|------|-------|
| زه نه باید لاړ شم | من نباید بروم |
| ته نه باید دا وکړې | تو نباید این را کنی |
| هغه نه باید خوب وکړي | او نباید خواب کند |

### جملات سوالی

| پشتو | فارسی |
|------|-------|
| ایا زه باید لاړ شم؟ | آیا من باید بروم؟ |
| ایا ته باید کار وکړې؟ | آیا تو باید کار کنی؟ |
| ایا هغه باید راشي؟ | آیا او باید بیاید؟ |

---

## ۲. کولی شی (koli shay) - توانایی و امکان

معنی: می‌تواند، می‌شود، ممکن است

### ساختار

**کولی شی + فعل (مصدر)**

### مثال‌ها

| پشتو | فارسی | تلفظ |
|------|-------|------|
| زه کولی شم لاړ شم | من می‌توانم بروم | za koli sham lāṛ sham |
| ته کولی شې راشې | تو می‌توانی بیایی | ta koli she rāshe |
| هغه کولی شي کار وکړي | او می‌تواند کار کند | hagha koli shi kār wakṛi |
| موږ کولی شو ووینو | ما می‌توانیم ببینیم | moẓ koli sho wweeno |
| تاسو کولی شئ خوب وکړئ | شما می‌توانید خواب کنید | tāso koli shay khob wakṛay |
| هغوی کولی شي پوه شي | آنها می‌توانند بفهمند | haghwey koli shi poh shi |

### جملات منفی

| پشتو | فارسی |
|------|-------|
| زه نه کولی شم لاړ شم | من نمی‌توانم بروم |
| ته نه کولی شې دا وکړې | تو نمی‌توانی این را کنی |
| هغه نه کولی شي راشي | او نمی‌تواند بیاید |

### جملات سوالی

| پشتو | فارسی |
|------|-------|
| ایا زه کولی شم لاړ شم؟ | آیا من می‌توانم بروم؟ |
| ایا ته کولی شې کار وکړې؟ | آیا تو می‌توانی کار کنی؟ |
| ایا هغه کولی شي راشي؟ | آیا او می‌تواند بیاید؟ |

---

## ۳. توانیدل (tawānidəl) - توانایی (فعل مستقل)

معنی: توانستن، قادر بودن

### ساختار

**توانیدل + فعل (مصدر)**

### مثال‌ها

| پشتو | فارسی | تلفظ |
|------|-------|------|
| زه توانم لاړ شم | من می‌توانم بروم | za tawānam lāṛ sham |
| ته توانې راشې | تو می‌توانی بیایی | ta tawāne rāshe |
| هغه توانی کار وکړي | او می‌تواند کار کند | hagha tawāni kār wakṛi |
| موږ توانو ووینو | ما می‌توانیم ببینیم | moẓ tawāno wweeno |
| تاسو توانئ خوب وکړئ | شما می‌توانید خواب کنید | tāso tawānay khob wakṛay |
| هغوی توانی پوه شي | آنها می‌توانند بفهمند | haghwey tawāni poh shi |

### گذشته

| پشتو | فارسی |
|------|-------|
| زه وتوانیدم لاړ شم | من توانستم بروم |
| ته وتوانیدې راشې | تو توانستی بیایی |
| هغه وتوانید کار وکړي | او توانست کار کند |

---

## ۴. دې (de) - دستور و خواسته

معنی: بگذار، شاید، باید (دستور)

### ساختار

**دې + فعل (مصدر)**

### مثال‌ها

| پشتو | فارسی | تلفظ |
|------|-------|------|
| دې لاړ شم | بگذار بروم | de lāṛ sham |
| دې راشې | بگذار بیایی | de rāshe |
| دې کار وکړي | بگذار کار کند | de kār wakṛi |
| دې ووینو | بگذار ببینیم | de wweeno |
| دې خوب وکړئ | بگذار خواب کنید | de khob wakṛay |
| دې پوه شي | بگذار بفهمند | de poh shi |

### استفاده در دستورات

| پشتو | فارسی |
|------|-------|
| دې خاموش شې | بگذار خاموش شو |
| دې بیرته راشې | بگذار برگرد |
| دې مرسته وکړې | بگذار کمک کن |

---

## ۵. غواړم (ghwāṛam) - خواسته

معنی: می‌خواهم، می‌خواهی (قبلاً آموخته شده)

### ساختار

**غواړم + فعل (مصدر)**

### مثال‌ها

| پشتو | فارسی | تلفظ |
|------|-------|------|
| زه غواړم لاړ شم | من می‌خواهم بروم | za ghwāṛam lāṛ sham |
| ته غواړې راشې | تو می‌خواهی بیایی | ta ghwāṛe rāshe |
| هغه غواړي کار وکړي | او می‌خواهد کار کند | hagha ghwāṛi kār wakṛi |
| موږ غواړو ووینو | ما می‌خواهیم ببینیم | moẓ ghwāṛo wweeno |
| تاسو غواړئ خوب وکړئ | شما می‌خواهید خواب کنید | tāso ghwāṛay khob wakṛay |
| هغوی غواړي پوه شي | آنها می‌خواهند بفهمند | haghwey ghwāṛi poh shi |

---

## مقایسه فعل‌های کمکی

| فعل | معنی | مثال |
|------|------|------|
| باید | ضرورت | زه باید لاړ شم |
| کولی شی | توانایی | زه کولی شم لاړ شم |
| توانیدل | توانایی | زه توانم لاړ شم |
| دې | دستور | دې لاړ شم |
| غواړم | خواسته | زه غواړم لاړ شم |

---

## مکالمه نمونه

**A:** ایا ته کولی شې راشې؟
**B:** هو، زه کولی شم راشم. لکن زه باید اول کار وکړم.
**A:** چې وخت کولی شې راشې؟
**B:** زه کولی شم دوه بجو راشم.
**A:** ښه ده. دې راشې.

---

## نکات مهم

1. **باید** برای ضرورت و وظیفه استفاده می‌شود
2. **کولی شی** و **توانیدل** برای توانایی و امکان
3. **دې** برای دستورات و اجازه
4. **غواړم** برای بیان خواسته‌ها
5. تمام این فعل‌ها با مصدر فعل استفاده می‌شوند

> **تمرین:** هر یک از این فعل‌های کمکی را با فعل‌های مختلف تمرین کنید!
`,contentPashto:`
# د حسم کی حصی فعلونه

د حسم کی حصی فعلونه د توانایی، ضرورت، اجازې او غوښتنې د بیانولو لپاره کارول کیږي.

## ۱. باید (bāyad) - ضرورت

معنی: باید، شاید، لازم دی

### ساختار

**باید + فعل (مصدر)**

### بېلګې

| پښتو | معنی | تلفظ |
|------|------|------|
| زه باید لاړ شم | زه باید لاړ شم | za bāyad lāṛ sham |
| ته باید کار وکړې | ته باید کار وکړې | ta bāyad kār wakṛe |
| هغه باید زده کړي | هغه باید زده کړي | hagha bāyad zda kṛi |

---

## ۲. کولی شی (koli shay) - توانایی

معنی: کولی شی، شي، کیدی شي

### ساختار

**کولی شی + فعل (مصدر)**

### بېلګې

| پښتو | معنی |
|------|------|
| زه کولی شم لاړ شم | زه کولی شم لاړ شم |
| ته کولی شې راشې | ته کولی شې راشې |
| هغه کولی شي کار وکړي | هغه کولی شي کار وکړي |

---

## ۳. توانیدل (tawānidəl) - توانایی

معنی: توانیدل، کولی کیدل

### بېلګې

| پښتو | معنی |
|------|------|
| زه توانم لاړ شم | زه توانم لاړ شم |
| ته توانې راشې | ته توانې راشې |
| هغه توانی کار وکړي | هغه توانی کار وکړي |

---

## ۴. دې (de) - دستور

معنی: دې، بگذار، شاید

### بېلګې

| پښتو | معنی |
|------|------|
| دې لاړ شم | دې لاړ شم |
| دې راشې | دې راشې |
| دې کار وکړي | دې کار وکړي |

---

## ۵. غواړم (ghwāṛam) - غوښتنه

معنی: غواړم، غوښتل

### بېلګې

| پښتو | معنی |
|------|------|
| زه غواړم لاړ شم | زه غواړم لاړ شم |
| ته غواړې راشې | ته غواړې راشې |
| هغه غواړي کار وکړي | هغه غواړي کار وکړي |

> **یادونه:** د حسم کی حصی فعلونه د مصدر فعل سره کارول کیږي!
`,hasPractice:!1},Yb={id:"transitive-verbs",title:"فعل‌های انتقالی (Transitive Verbs)",titlePashto:"د انتقالی فعلونو درس",difficulty:"medium",estimatedTime:"۳۰ دقیقه",content:`
# فعل‌های انتقالی در پشتو

فعل‌های انتقالی فعل‌هایی هستند که یک شیء را از یک جا به جای دیگر منتقل می‌کنند یا تغییر می‌دهند.

## فعل‌های انتقالی رایج

### ۱. بگیر (نیول) - Take/Grab

معنی: گرفتن، برداشتن

| پشتو کامل | فارسی | تلفظ |
|----------|-------|------|
| زه کتاب نیولم | من کتاب گرفتم | za kitāb niyolam |
| ته پیسې نیوې | تو پول گرفتی | ta pese niyowe |
| هغه چنګ نیوی | او دست گرفت | hagha chang niyawi |
| موږ توپ نیولو | ما توپ گرفتیم | moẓ top niyolu |
| تاسو کاغذ نیولئ | شما کاغذ گرفتید | tāso kāghaz niyoley |
| هغوی کتابونه نیولي | آنها کتاب‌ها گرفتند | haghwey kitābūna niyoli |

### ۲. بده (ورکول) - Give

معنی: دادن، دهندگی کردن

| پشتو کامل | فارسی | تلفظ |
|----------|-------|------|
| زه کتاب ورکړم | من کتاب می‌دهم | za kitāb warkṛam |
| ته پیسې ورکړې | تو پول می‌دهی | ta pese warkṛe |
| هغه چنګ ورکړي | او دست می‌دهد | hagha chang warkṛi |
| موږ توپ ورکړو | ما توپ می‌دهیم | moẓ top warkṛu |
| تاسو کاغذ ورکړئ | شما کاغذ می‌دهید | tāso kāghaz warkṛey |
| هغوی کتابونه ورکړي | آنها کتاب‌ها می‌دهند | haghwey kitābūna warkṛi |

### ۳. بگذار (پرېږدل) - Leave/Put

معنی: گذاشتن، رها کردن

| پشتو کامل | فارسی | تلفظ |
|----------|-------|------|
| زه کتاب پرېږدم | من کتاب می‌گذارم | za kitāb preẓ̌dam |
| ته پیسې پرېږدې | تو پول می‌گذاری | ta pese preẓ̌de |
| هغه چنګ پرېږدي | او دست می‌گذارد | hagha chang preẓ̌di |
| موږ توپ پرېږدو | ما توپ می‌گذاریم | moẓ top preẓ̌du |
| تاسو کاغذ پرېږدئ | شما کاغذ می‌گذارید | tāso kāghaz preẓ̌dey |
| هغوی کتابونه پرېږدي | آنها کتاب‌ها می‌گذارند | haghwey kitābūna preẓ̌di |

### ۴. بردار (اخیستل) - Carry/Lift

معنی: برداشتن، حمل کردن

| پشتو کامل | فارسی | تلفظ |
|----------|-------|------|
| زه کتاب اخیستم | من کتاب برداشتم | za kitāb akhistam |
| ته پیسې اخیستې | تو پول برداشتی | ta pese akhiste |
| هغه چنګ اخیستی | او دست برداشت | hagha chang akhisti |
| موږ توپ اخیستو | ما توپ برداشتیم | moẓ top akhistu |
| تاسو کاغذ اخیستئ | شما کاغذ برداشتید | tāso kāghaz akhistey |
| هغوی کتابونه اخیستي | آنها کتاب‌ها برداشتند | haghwey kitābūna akhisti |

### ۵. پرتاپ (پرتول) - Throw

معنی: پرتاب کردن، انداختن

| پشتو کامل | فارسی | تلفظ |
|----------|-------|------|
| زه توپ پرتولم | من توپ پرتاب کردم | za top partolam |
| ته سنګ پرتولې | تو سنگ انداختی | ta sang partole |
| هغه توپ پرتولی | او توپ پرتاب کرد | hagha top partoli |
| موږ سنګ پرتولو | ما سنگ انداختیم | moẓ sang partolu |
| تاسو توپ پرتولئ | شما توپ پرتاب کردید | tāso top partoley |
| هغوی سنګ پرتولي | آنها سنگ انداختند | haghwey sang partoli |

### ۶. وهل (ضربت کول) - Hit/Strike

معنی: زدن، ضربت زدن

| پشتو کامل | فارسی | تلفظ |
|----------|-------|------|
| زه درې وهم | من در می‌زنم | za dre wahəm |
| ته توپ وهې | تو توپ می‌زنی | ta top wahe |
| هغه درې وهي | او در می‌زند | hagha dre wahi |
| موږ توپ وهو | ما توپ می‌زنیم | moẓ top wahu |
| تاسو درې وهئ | شما در می‌زنید | tāso dre wahey |
| هغوی توپ وهي | آنها توپ می‌زنند | haghwey top wahi |

### ۷. لیکل (لیکل) - Write

معنی: نوشتن

| پشتو کامل | فارسی | تلفظ |
|----------|-------|------|
| زه خط لیکم | من نامه می‌نویسم | za khat likam |
| ته کتاب لیکې | تو کتاب می‌نویسی | ta kitāb like |
| هغه خط لیکي | او نامه می‌نویسد | hagha khat liki |
| موږ کتاب لیکو | ما کتاب می‌نویسیم | moẓ kitāb liku |
| تاسو خط لیکئ | شما نامه می‌نویسید | tāso khat likey |
| هغوی کتابونه لیکي | آنها کتاب‌ها می‌نویسند | haghwey kitābūna liki |

### ۸. اچول (اچول) - Throw/Cast

معنی: انداختن، پرتاب کردن

| پشتو کامل | فارسی | تلفظ |
|----------|-------|------|
| زه سنګ اچولم | من سنگ انداختم | za sang achulam |
| ته توپ اچولې | تو توپ انداختی | ta top achule |
| هغه سنګ اچولی | او سنگ انداخت | hagha sang achuli |
| موږ توپ اچولو | ما توپ انداختیم | moẓ top achulu |
| تاسو سنګ اچولئ | شما سنگ انداختید | tāso sang achuley |
| هغوی توپ اچولي | آنها توپ انداختند | haghwey top achuli |

---

## ساختار جملات انتقالی

فعل‌های انتقالی معمولاً دو شیء دارند:
1. **فاعل** (کسی که عمل را انجام می‌دهد)
2. **مفعول** (شیئی که منتقل می‌شود)

### مثال‌ها

| پشتو | فارسی | ساختار |
|------|-------|--------|
| زه کتاب نیولم | من کتاب گرفتم | فاعل + مفعول + فعل |
| ته پیسې ورکړې | تو پول دادی | فاعل + مفعول + فعل |
| هغه توپ پرتولی | او توپ پرتاب کرد | فاعل + مفعول + فعل |

---

## جملات منفی

| پشتو | فارسی |
|------|-------|
| زه کتاب نه نیولم | من کتاب نگرفتم |
| ته پیسې نه ورکړې | تو پول ندادی |
| هغه توپ نه پرتولی | او توپ نپرتاب کرد |

---

## جملات سوالی

| پشتو | فارسی |
|------|-------|
| ایا ته کتاب نیولې؟ | آیا تو کتاب گرفتی؟ |
| ایا هغه پیسې ورکړې؟ | آیا او پول داد؟ |
| ایا موږ توپ پرتولو؟ | آیا ما توپ پرتاب کردیم؟ |

---

## نکات مهم

1. فعل‌های انتقالی معمولاً دو شیء (فاعل و مفعول) دارند
2. ترتیب جمله در پشتو: فاعل + مفعول + فعل
3. فعل در انتهای جمله می‌آید
4. جنسیت و شخص فعل با فاعل تطابق دارد

> **تمرین:** هر یک از این فعل‌ها را با اشیاء مختلف تمرین کنید!
`,contentPashto:`
# د انتقالی فعلونو درس

د انتقالی فعلونه هغه فعلونه دي چې یو شی له یوې ځایه بل ځایته انتقال کوي یا بدل کوي.

## د انتقالی فعلونو بېلګې

### ۱. نیول (Take/Grab)

معنی: نیول، برداشتل

| پښتو کامل | معنی | تلفظ |
|----------|------|------|
| زه کتاب نیولم | زه کتاب نیولم | za kitāb niyolam |
| ته پیسې نیوې | ته پیسې نیوې | ta pese niyowe |
| هغه چنګ نیوی | هغه چنګ نیوی | hagha chang niyawi |

### ۲. ورکول (Give)

معنی: ورکول، دهل

| پښتو کامل | معنی |
|----------|------|
| زه کتاب ورکړم | زه کتاب ورکړم |
| ته پیسې ورکړې | ته پیسې ورکړې |
| هغه چنګ ورکړي | هغه چنګ ورکړي |

### ۳. پرېږدل (Leave/Put)

معنی: پرېږدل، ایستل

| پښتو کامل | معنی |
|----------|------|
| زه کتاب پرېږدم | زه کتاب پرېږدم |
| ته پیسې پرېږدې | ته پیسې پرېږدې |
| هغه چنګ پرېږدي | هغه چنګ پرېږدي |

### ۴. اخیستل (Carry/Lift)

معنی: اخیستل، حمل کول

| پښتو کامل | معنی |
|----------|------|
| زه کتاب اخیستم | زه کتاب اخیستم |
| ته پیسې اخیستې | ته پیسې اخیستې |
| هغه چنګ اخیستی | هغه چنګ اخیستی |

### ۵. پرتول (Throw)

معنی: پرتول، اچول

| پښتو کامل | معنی |
|----------|------|
| زه توپ پرتولم | زه توپ پرتولم |
| ته سنګ پرتولې | ته سنګ پرتولې |
| هغه توپ پرتولی | هغه توپ پرتولی |

> **یادونه:** د انتقالی فعلونه دوه شیان لري - فاعل او مفعول!
`,hasPractice:!1},Gb={id:"comprehensive-verbs",title:"Comprehensive Verb Conjugation",titlePashto:"فعل‌های اساسی - تمام زمان‌ها",difficulty:"hard",estimatedTime:"۴۵ دقیقه",content:`
# فعل‌های اساسی - تمام زمان‌ها (Comprehensive Verb Conjugation)

## مقدمه

در این درس، ما هفت فعل اساسی پشتو را در سه زمان مختلف (حال، گذشته، آینده) یاد می‌گیریم. این فعل‌ها بنیاد زبان پشتو هستند و در تمام مکالمات روزمره استفاده می‌شوند.

---

## ۱. فعل بودن (To Be) - یم/دی

### زمان حال (Present Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | یم | هستم | yam |
| تو | یې | هستی | ye |
| او/او | دی/ده | است | day/da |
| ما | یو | هستیم | yo |
| تاسو | یاست | هستید | yāst |
| آنها | دي | هستند | di |

**مثال‌های حال:**
- زه یم (من هستم) - I am
- تو یې (تو هستی) - You are
- هغه دی (او است) - He is
- ما یو (ما هستیم) - We are

### زمان گذشته (Past Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | وم | بودم | wam |
| تو | وې | بودی | we |
| او/او | و/وه | بود | wa/wa |
| ما | وو | بودیم | wo |
| تاسو | واست | بودید | wāst |
| آنها | وو | بودند | wo |

**مثال‌های گذشته:**
- زه وم (من بودم) - I was
- تو وې (تو بودی) - You were
- هغه و (او بود) - He was
- ما وو (ما بودیم) - We were

### زمان آینده (Future Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | به یم | خواهم بود | ba yam |
| تو | به یې | خواهی بود | ba ye |
| او/او | به دی/به ده | خواهد بود | ba day/ba da |
| ما | به یو | خواهیم بود | ba yo |
| تاسو | به یاست | خواهید بود | ba yāst |
| آنها | به دي | خواهند بود | ba di |

**مثال‌های آینده:**
- زه به یم (من خواهم بود) - I will be
- تو به یې (تو خواهی بود) - You will be
- هغه به دی (او خواهد بود) - He will be

---

## ۲. فعل شدن (To Become) - شم/شې

### زمان حال (Present Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | شم | می‌شوم | sham |
| تو | شې | می‌شوی | she |
| او/او | شي/شي | می‌شود | shi/shi |
| ما | شو | می‌شویم | sho |
| تاسو | شئ | می‌شوید | shay |
| آنها | شي | می‌شوند | shi |

**مثال‌های حال:**
- زه شم (من می‌شوم) - I become
- هغه شي (او می‌شود) - He becomes
- ما شو (ما می‌شویم) - We become

### زمان گذشته (Past Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | شوم | شدم | shwam |
| تو | شوې | شدی | shwe |
| او/او | شو/شوه | شد | sho/shwa |
| ما | شوو | شدیم | shwo |
| تاسو | شواست | شدید | shwāst |
| آنها | شول | شدند | shwol |

**مثال‌های گذشته:**
- زه شوم (من شدم) - I became
- هغه شو (او شد) - He became
- ما شوو (ما شدیم) - We became

### زمان آینده (Future Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | به شم | خواهم شد | ba sham |
| تو | به شې | خواهی شد | ba she |
| او/او | به شي | خواهد شد | ba shi |
| ما | به شو | خواهیم شد | ba sho |
| تاسو | به شئ | خواهید شد | ba shay |
| آنها | به شي | خواهند شد | ba shi |

---

## ۳. فعل کردن (To Do/Make) - کوم/کوې

### زمان حال (Present Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | کوم | می‌کنم | kúm |
| تو | کوې | می‌کنی | kúe |
| او/او | کوي/کوي | می‌کند | kúi/kúi |
| ما | کوو | می‌کنیم | kúo |
| تاسو | کوئ | می‌کنید | kúy |
| آنها | کوي | می‌کنند | kúi |

**مثال‌های حال:**
- زه کوم (من می‌کنم) - I do
- هغه کوي (او می‌کند) - He does
- ما کوو (ما می‌کنیم) - We do

### زمان گذشته (Past Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | وکړم | کردم | wakṛam |
| تو | وکړې | کردی | wakṛe |
| او/او | وکړ/وکړه | کرد | wakṛ/wakṛa |
| ما | وکړو | کردیم | wakṛo |
| تاسو | وکړاست | کردید | wakṛāst |
| آنها | وکړل | کردند | wakṛal |

**مثال‌های گذشته:**
- زه وکړم (من کردم) - I did
- هغه وکړ (او کرد) - He did
- ما وکړو (ما کردیم) - We did

### زمان آینده (Future Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | به کوم | خواهم کرد | ba kúm |
| تو | به کوې | خواهی کرد | ba kúe |
| او/او | به کوي | خواهد کرد | ba kúi |
| ما | به کوو | خواهیم کرد | ba kúo |
| تاسو | به کوئ | خواهید کرد | ba kúy |
| آنها | به کوي | خواهند کرد | ba kúi |

---

## ۴. فعل رفتن (To Go) - ځم/ځې

### زمان حال (Present Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | ځم | می‌روم | dzam |
| تو | ځې | می‌روی | dze |
| او/او | ځي/ځي | می‌رود | dzi/dzi |
| ما | ځو | می‌رویم | dzo |
| تاسو | ځئ | می‌روید | dzay |
| آنها | ځي | می‌روند | dzi |

**مثال‌های حال:**
- زه ځم (من می‌روم) - I go
- هغه ځي (او می‌رود) - He goes
- ما ځو (ما می‌رویم) - We go

### زمان گذشته (Past Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | لاړم | رفتم | lāṛam |
| تو | لاړې | رفتی | lāṛe |
| او/او | لاړ/لاړه | رفت | lāṛ/lāṛa |
| ما | لاړو | رفتیم | lāṛo |
| تاسو | لاړاست | رفتید | lāṛāst |
| آنها | لاړل | رفتند | lāṛal |

**مثال‌های گذشته:**
- زه لاړم (من رفتم) - I went
- هغه لاړ (او رفت) - He went
- ما لاړو (ما رفتیم) - We went

### زمان آینده (Future Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | به ځم | خواهم رفت | ba dzam |
| تو | به ځې | خواهی رفت | ba dze |
| او/او | به ځي | خواهد رفت | ba dzi |
| ما | به ځو | خواهیم رفت | ba dzo |
| تاسو | به ځئ | خواهید رفت | ba dzay |
| آنها | به ځي | خواهند رفت | ba dzi |

---

## ۵. فعل آمدن (To Come) - راځم/راځې

### زمان حال (Present Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | راځم | می‌آیم | rādzam |
| تو | راځې | می‌آیی | rādze |
| او/او | راځي/راځي | می‌آید | rādzi/rādzi |
| ما | راځو | می‌آییم | rādzo |
| تاسو | راځئ | می‌آیید | rādzay |
| آنها | راځي | می‌آیند | rādzi |

**مثال‌های حال:**
- زه راځم (من می‌آیم) - I come
- هغه راځي (او می‌آید) - He comes
- ما راځو (ما می‌آییم) - We come

### زمان گذشته (Past Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | راغلم | آمدم | rāghalam |
| تو | راغلې | آمدی | rāghale |
| او/او | راغل/راغله | آمد | rāghal/rāghala |
| ما | راغلو | آمدیم | rāghalo |
| تاسو | راغلاست | آمدید | rāghalāst |
| آنها | راغلل | آمدند | rāghall |

**مثال‌های گذشته:**
- زه راغلم (من آمدم) - I came
- هغه راغل (او آمد) - He came
- ما راغلو (ما آمدیم) - We came

### زمان آینده (Future Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | به راځم | خواهم آمد | ba rādzam |
| تو | به راځې | خواهی آمد | ba rādze |
| او/او | به راځي | خواهد آمد | ba rādzi |
| ما | به راځو | خواهیم آمد | ba rādzo |
| تاسو | به راځئ | خواهید آمد | ba rādzay |
| آنها | به راځي | خواهند آمد | ba rādzi |

---

## ۶. فعل خوردن (To Eat) - خورم/خوری

### زمان حال (Present Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | خورم | می‌خورم | khúram |
| تو | خوری | می‌خوری | khúri |
| او/او | خوري/خوري | می‌خورد | khúri/khúri |
| ما | خورو | می‌خوریم | khúro |
| تاسو | خورئ | می‌خورید | khúray |
| آنها | خوري | می‌خورند | khúri |

**مثال‌های حال:**
- زه خورم (من می‌خورم) - I eat
- هغه خوري (او می‌خورد) - He eats
- ما خورو (ما می‌خوریم) - We eat

### زمان گذشته (Past Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | وخوړم | خوردم | wakhúṛam |
| تو | وخوړې | خوردی | wakhúṛe |
| او/او | وخوړ/وخوړه | خورد | wakhúṛ/wakhúṛa |
| ما | وخوړو | خوردیم | wakhúṛo |
| تاسو | وخوړاست | خوردید | wakhúṛāst |
| آنها | وخوړل | خوردند | wakhúṛal |

**مثال‌های گذشته:**
- زه وخوړم (من خوردم) - I ate
- هغه وخوړ (او خورد) - He ate
- ما وخوړو (ما خوردیم) - We ate

### زمان آینده (Future Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | به خورم | خواهم خورد | ba khúram |
| تو | به خوری | خواهی خورد | ba khúri |
| او/او | به خوري | خواهد خورد | ba khúri |
| ما | به خورو | خواهیم خورد | ba khúro |
| تاسو | به خورئ | خواهید خورد | ba khúray |
| آنها | به خوري | خواهند خورد | ba khúri |

---

## ۷. فعل دیدن (To See) - لیدم/لیدې

### زمان حال (Present Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | لیدم | می‌بینم | lídam |
| تو | لیدې | می‌بینی | líde |
| او/او | لیدي/لیدي | می‌بیند | lídi/lídi |
| ما | لیدو | می‌بینیم | lído |
| تاسو | لیدئ | می‌بینید | líday |
| آنها | لیدي | می‌بینند | lídi |

**مثال‌های حال:**
- زه لیدم (من می‌بینم) - I see
- هغه لیدي (او می‌بیند) - He sees
- ما لیدو (ما می‌بینیم) - We see

### زمان گذشته (Past Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | ولیدم | دیدم | walídam |
| تو | ولیدې | دیدی | walíde |
| او/او | ولید/ولیده | دید | walíd/walída |
| ما | ولیدو | دیدیم | walído |
| تاسو | ولیداست | دیدید | walídāst |
| آنها | ولیدل | دیدند | walídal |

**مثال‌های گذشته:**
- زه ولیدم (من دیدم) - I saw
- هغه ولید (او دید) - He saw
- ما ولیدو (ما دیدیم) - We saw

### زمان آینده (Future Tense)

| شخص | پښتو | فارسی | تلفظ کندهاری |
|------|------|-------|------------|
| من | به لیدم | خواهم دید | ba lídam |
| تو | به لیدې | خواهی دید | ba líde |
| او/او | به لیدي | خواهد دید | ba lídi |
| ما | به لیدو | خواهیم دید | ba lído |
| تاسو | به لیدئ | خواهید دید | ba líday |
| آنها | به لیدي | خواهند دید | ba lídi |

---

## مثال‌های عملی - جملات کامل

### حال (Present)
- زه یم او کوم (من هستم و می‌کنم) - I am and I do
- تو ځې او لیدې (تو می‌روی و می‌بینی) - You go and you see
- هغه راځي او خوري (او می‌آید و می‌خورد) - He comes and eats
- ما شو او کوو (ما می‌شویم و می‌کنیم) - We become and we do

### گذشته (Past)
- زه وم او وکړم (من بودم و کردم) - I was and I did
- تو لاړې او وخوړې (تو رفتی و خوردی) - You went and ate
- هغه راغل او ولید (او آمد و دید) - He came and saw
- ما شوو او وکړو (ما شدیم و کردیم) - We became and did

### آینده (Future)
- زه به یم او به کوم (من خواهم بود و خواهم کرد) - I will be and will do
- تو به ځې او به لیدې (تو خواهی رفت و خواهی دید) - You will go and will see
- هغه به راځي او به خوري (او خواهد آمد و خواهد خورد) - He will come and will eat
- ما به شو او به کوو (ما خواهیم شد و خواهیم کرد) - We will become and will do

---

## نکات مهم

- **دو ریشه فعل:** اکثر فعل‌های پشتو دو ریشه دارند - یک ریشه برای حال و یک ریشه برای گذشته
- **تغییرات شخصی:** فعل‌ها بر اساس شخص (من، تو، او، ما، تاسو، آنها) تغییر می‌کنند
- **زمان آینده:** زمان آینده معمولاً با "به" شروع می‌شود و سپس فعل حال می‌آید
- **تلفظ کندهاری:** در کندهاری، برخی حروف واضح‌تر تلفظ می‌شوند
- **استفاده عملی:** این فعل‌ها بنیاد تمام مکالمات روزمره هستند

> **نکته:** تمرین منظم این فعل‌ها بسیار مهم است. هر روز این جداول را تکرار کنید تا به خاطر بسپارید.
`,hasPractice:!1},Xb={id:"family",title:"خانواده",titlePashto:"کورنۍ",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# واژگان خانواده در پښتو

## اعضای نزدیک خانواده

| پښتو | فارسی | تلفظ |
|------|-------|------|
| پلار | پدر | پلار |
| مور | مادر | مور |
| ورور | برادر | وَرور |
| خور | خواهر | خور |
| زوی | پسر | زوی |
| لور | دختر | لور |

## پدربزرگ و مادربزرگ

| پښتو | فارسی |
|------|-------|
| نیکه | پدربزرگ |
| نیا | مادربزرگ |

## عمو و خاله

| پښتو | فارسی |
|------|-------|
| تره | عمو |
| ترور | عمه |
| ماما | دایی |
| خاله | خاله |

## همسر و فرزندان

| پښتو | فارسی |
|------|-------|
| میرمن | همسر (زن) |
| خاوند | همسر (شوهر) |
| ماشوم | بچه |
| ماشومان | بچه‌ها |

## خویشاوندان دیگر

| پښتو | فارسی |
|------|-------|
| ترزوی | پسرعمو |
| ترلور | دخترعمو |
| خسر | پدرشوهر/پدرزن |
| خواښې | مادرشوهر/مادرزن |
| اور | زن برادر |
| لیور | برادر شوهر |

## جملات مفید

| پښتو | فارسی |
|------|-------|
| زما کورنۍ لویه ده | خانواده من بزرگ است |
| زما دوه وروڼه دي | من دو برادر دارم |
| زما یوه خور ده | من یک خواهر دارم |
| ستا پلار څه کار کوي؟ | پدرت چه کار می‌کند؟ |
| زما مور ښوونکې ده | مادرم معلم است |

## نکته فرهنگی

در فرهنگ پښتون، خانواده بسیار مهم است. کلمه **کورنۍ** از **کور** (خانه) می‌آید که نشان‌دهنده اهمیت خانه و خانواده است.

> **یادآوری:** پښتون‌ها معمولاً در خانواده‌های گسترده زندگی می‌کنند و احترام به بزرگترها بسیار مهم است.
`,contentPashto:`
# په پښتو کې د کورنۍ لغات

## نږدې کورنۍ غړي

| پښتو | فارسي | تلفظ |
|------|-------|------|
| پلار | پدر | پلار |
| مور | مادر | مور |
| ورور | برادر | وَرور |
| خور | خواهر | خور |
| زوی | پسر | زوی |
| لور | دختر | لور |

## نیکه او نیا

| پښتو | فارسي |
|------|-------|
| نیکه | پدربزرگ |
| نیا | مادربزرگ |

## تره او خاله

| پښتو | فارسي |
|------|-------|
| تره | عمو |
| ترور | عمه |
| ماما | دایی |
| خاله | خاله |

## میرمن او ماشومان

| پښتو | فارسي |
|------|-------|
| میرمن | همسر (زن) |
| خاوند | همسر (شوهر) |
| ماشوم | بچه |
| ماشومان | بچه‌ها |

## نور خپلوان

| پښتو | فارسي |
|------|-------|
| ترزوی | پسرعمو |
| ترلور | دخترعمو |
| خسر | پدرشوهر/پدرزن |
| خواښې | مادرشوهر/مادرزن |
| اور | زن برادر |
| لیور | برادر شوهر |

## ګټورې جملې

| پښتو | فارسي |
|------|-------|
| زما کورنۍ لویه ده | خانواده من بزرگ است |
| زما دوه وروڼه دي | من دو برادر دارم |
| زما یوه خور ده | من یک خواهر دارم |
| ستا پلار څه کار کوي؟ | پدرت چه کار می‌کند؟ |
| زما مور ښوونکې ده | مادرم معلم است |

## کلتوري یادونه

په پښتون کلتور کې، کورنۍ ډیره مهمه ده. کلمه **کورنۍ** له **کور** نه راځي چې د کور او کورنۍ اهمیت ښیي.

> **یادونه:** پښتانه عموماً په پراخو کورنیو کې ژوند کوي او د مشرانو درناوی ډیر مهم دی.
`,hasPractice:!1},Qb={id:"numbers-11-100",title:"اعداد ۱۱ تا ۱۰۰",titlePashto:"له ۱۱ نه تر ۱۰۰ پورې شمېرې",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# اعداد ۱۱ تا ۱۰۰ در پښتو کندهاری

## اعداد ۱۱ تا ۲۰

| عدد | پښتو | تلفظ کندهاری |
|-----|------|--------------|
| ۱۱ | یوولس | yāwalas |
| ۱۲ | دوولس | dwālas |
| ۱۳ | دیارلس | dyārlas |
| ۱۴ | څوارلس | tswarlas |
| ۱۵ | پنځلس | pindzalas |
| ۱۶ | شپاړس | shpāṛas |
| ۱۷ | اووه لس | owa las |
| ۱۸ | اتلس | atlas |
| ۱۹ | نولس | nolas |
| ۲۰ | شل | shəl |

## دهگان‌ها

| عدد | پښتو | تلفظ کندهاری |
|-----|------|--------------|
| ۱۰ | لس | las |
| ۲۰ | شل | shəl |
| ۳۰ | دېرش | dersh |
| ۴۰ | څلوېښت | tsalwesht |
| ۵۰ | پنځوس | pindzos |
| ۶۰ | شپېته | shpeta |
| ۷۰ | اویا | awyā |
| ۸۰ | اتیا | atyā |
| ۹۰ | نوي | nawey |
| ۱۰۰ | سل | sal |

## ترکیب اعداد (۲۱ تا ۹۹)

در پښتو، اعداد مرکب به صورت «یکان + و + دهگان» ساخته می‌شوند:

| عدد | پښتو | تلفظ |
|-----|------|------|
| ۲۱ | یو ویشت | yaw wisht |
| ۲۵ | پنځه ویشت | pindza wisht |
| ۳۲ | دوه دېرش | dwa dersh |
| ۴۵ | پنځه څلوېښت | pindza tsalwesht |
| ۵۷ | اووه پنځوس | owa pindzos |
| ۶۳ | درې شپېته | dre shpeta |
| ۷۸ | اته اویا | ata awyā |
| ۸۴ | څلور اتیا | tsalor atyā |
| ۹۹ | نهه نوي | naha nawey |

## اعداد بزرگ

| عدد | پښتو | تلفظ |
|-----|------|------|
| ۱۰۰ | سل | sal |
| ۲۰۰ | دوه سوه | dwa sawa |
| ۵۰۰ | پنځه سوه | pindza sawa |
| ۱۰۰۰ | زر | zar |

## مثال‌های کاربردی

| جمله پښتو | فارسی |
|-----------|-------|
| دا پنځوس افغانۍ دی | این پنجاه افغانی است |
| زه شل کاله لرم | من بیست سال دارم |
| دوه سوه متره لرې دی | دویست متر دور است |

> **نکته:** در کندهاری، تلفظ اعداد کمی نرم‌تر از لهجه کابلی است.
`,hasPractice:!1},Vb={id:"food",title:"غذا و نوشیدنی",titlePashto:"خواړه او څښاک",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# غذا و نوشیدنی در پښتو کندهاری

## غذاهای اصلی

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| ډوډۍ | نان/غذا | ḍoḍəy |
| پلو | پلو | palaw |
| کابلي پلو | پلو کابلی | kābuli palaw |
| قورمه | قورمه | qorma |
| شوربا | سوپ | shorbā |
| کباب | کباب | kabāb |
| منتو | منتو | mantú |
| آشک | آشک | āshak |
| بولانی | بولانی | bolāni |

## سبزیجات

| پښتو | فارسی | تلفظ |
|------|-------|------|
| کچالو | سیب‌زمینی | kachālu |
| بانجان | بادنجان | bānján |
| مرچ | فلفل | march |
| پیاز | پیاز | pyāz |
| ګاجره | هویج | gājra |
| بادرنګ | خیار | bādrang |
| رومی بانجان | گوجه | rumi bānján |

## میوه‌ها

| پښتو | فارسی | تلفظ |
|------|-------|------|
| مڼه | سیب | maṇa |
| انګور | انگور | angúr |
| شفتالو | هلو | shaftālu |
| انار | انار | anār |
| تربوز | هندوانه | tarbúz |
| خربوزه | خربزه | kharbúza |
| کیله | موز | kela |

## نوشیدنی‌ها

| پښتو | فارسی | تلفظ |
|------|-------|------|
| چای | چای | chāy |
| شین چای | چای سبز | shin chāy |
| تور چای | چای سیاه | tor chāy |
| اوبه | آب | oba |
| دوغ | دوغ | dogh |
| شیدې | شیر | shide |
| شربت | شربت | sharbát |

## لبنیات

| پښتو | فارسی | تلفظ |
|------|-------|------|
| شیدې | شیر | shide |
| مستې | ماست | maste |
| کوړت | کشک | koṛt |
| پنیر | پنیر | panír |
| غوړي | روغن | ghwaṛi |

## جملات مفید

| پښتو | فارسی |
|------|-------|
| زه وږی یم | من گرسنه‌ام |
| زه تږی یم | من تشنه‌ام |
| ډوډۍ چمتو ده؟ | غذا آماده است؟ |
| ډېره خوندوره ده | خیلی خوشمزه است |
| نور نه شم خوړلی | دیگر نمی‌توانم بخورم |
| موړ شوم | سیر شدم |
| اوبه راوړه | آب بیار |
| چای راوړه | چای بیار |

## در رستوران

| پښتو | فارسی |
|------|-------|
| مینو راوړه | منو بیار |
| دا څومره دی؟ | این چقدر است؟ |
| حساب راکړه | حساب بده |
| نوش جان | نوش جان |
| لاس مو درد نکړي | دستتان درد نکند |

## مکالمه نمونه

**مهمان:** سلام، زه وږی یم.
**میزبان:** راشه، ډوډۍ چمتو ده.
**مهمان:** څه لرې؟
**میزبان:** پلو او قورمه لرم. چای هم شته.
**مهمان:** پلو راوړه، مننه.
**میزبان:** نوش جان!
**مهمان:** ډېره خوندوره ده، لاس مو درد نکړي.

> **نکته:** در فرهنگ پښتون، مهمان‌نوازی بسیار مهم است و همیشه به مهمان غذا تعارف می‌شود.
`,hasPractice:!1},Zb={id:"body-parts",title:"اعضای بدن",titlePashto:"د بدن غړي",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# اعضای بدن در پښتو کندهاری

## سر و صورت

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| سر | سر | sar |
| مخ | صورت | makh |
| سترګه | چشم | starga |
| غوږ | گوش | ghwaẓ̌ |
| پوزه | بینی | puza |
| خوله | دهان | khula |
| ژبه | زبان | zhəba |
| غاښ | دندان | ghāṣ̌ |
| شونډې | لب | shunḍe |
| وریځې | ابرو | wredze |
| باڼه | مژه | bāṇa |

## تنه

| پښتو | فارسی | تلفظ |
|------|-------|------|
| غاړه | گردن | ghāṛa |
| اوږه | شانه | uẓ̌a |
| سینه | سینه | sina |
| شا | پشت | shā |
| خېټه | شکم | kheṭa |
| ملا | کمر | mlā |

## دست و پا

| پښتو | فارسی | تلفظ |
|------|-------|------|
| لاس | دست | lās |
| ګوته | انگشت | guta |
| نوک | ناخن | nok |
| څنګل | آرنج | tsangəl |
| پښه | پا | pṣ̌a |
| زنګون | زانو | zangún |
| پونده | پاشنه | punda |

## اعضای داخلی

| پښتو | فارسی | تلفظ |
|------|-------|------|
| زړه | قلب | zṛa |
| سږي | ریه | sẓ̌i |
| اینه | جگر | ina |
| معده | معده | mi'da |
| وینه | خون | wina |
| هډوکی | استخوان | haḍukay |

## صفت‌های مرتبط

| پښتو | فارسی | تلفظ |
|------|-------|------|
| لوی | بزرگ | loy |
| وړوکی | کوچک | waṛukay |
| اوږد | بلند | uẓ̌d |
| لنډ | کوتاه | lanḍ |
| پلن | پهن | plan |
| نری | باریک | naray |

## جملات مفید

| پښتو | فارسی |
|------|-------|
| سر مې خوږیږي | سرم درد می‌کند |
| خېټه مې خوږیږي | شکمم درد می‌کند |
| سترګې مې خوږیږي | چشمم درد می‌کند |
| لاس مې مات شو | دستم شکست |
| پښه مې خوږیږي | پایم درد می‌کند |
| غاښ مې خوږیږي | دندانم درد می‌کند |

## در داکتر

| پښتو | فارسی |
|------|-------|
| چرته خوږیږي؟ | کجا درد می‌کند؟ |
| دلته خوږیږي | اینجا درد می‌کند |
| له کله راهیسې؟ | از کی؟ |
| له پرون راهیسې | از دیروز |
| ډېر خوږیږي | خیلی درد می‌کند |
| لږ خوږیږي | کمی درد می‌کند |

## جمع اعضای بدن

| مفرد | جمع | معنی |
|------|-----|------|
| سترګه | سترګې | چشم/چشم‌ها |
| غوږ | غوږونه | گوش/گوش‌ها |
| لاس | لاسونه | دست/دست‌ها |
| پښه | پښې | پا/پاها |
| ګوته | ګوتې | انگشت/انگشت‌ها |

> **نکته:** در پښتو، برای بیان درد از فعل «خوږیږي» (درد می‌کند) استفاده می‌شود.
`,hasPractice:!1},Kb={id:"colors",title:"رنگ‌ها",titlePashto:"رنګونه",difficulty:"easy",estimatedTime:"۱۰ دقیقه",content:`
# رنگ‌ها در پښتو

رنگ‌ها در پښتو با جنسیت اسم موصوف تغییر می‌کنند.

## رنگ‌های اصلی

| مذکر | مونث | فارسی | تلفظ |
|------|------|-------|------|
| سپین | سپینه | سفید | spin |
| تور | توره | سیاه | tor |
| سور | سره | سرخ/قرمز | sur |
| شین | شنه | سبز | shin |
| ژېړ | ژېړه | زرد | žeṛ |
| نیلي | نیلي | آبی | nili |

## رنگ‌های دیگر

| مذکر | مونث | فارسی |
|------|------|-------|
| نارنجي | نارنجي | نارنجی |
| بنفش | بنفش | بنفش |
| خړ | خړه | خاکستری |
| نسواري | نسواري | قهوه‌ای |
| ګلابي | ګلابي | صورتی |

## مثال‌ها با اسم مذکر

| پښتو | فارسی |
|------|-------|
| سپین کور | خانه سفید |
| تور موټر | موتر سیاه |
| سور قلم | قلم قرمز |
| شین کتاب | کتاب سبز |
| ژېړ ګل | گل زرد |

## مثال‌ها با اسم مونث

| پښتو | فارسی |
|------|-------|
| سپینه ښځه | زن سفیدپوست |
| توره پیشو | گربه سیاه |
| سره میوه | میوه قرمز |
| شنه چای | چای سبز |
| ژېړه ګلابي | گل زرد |

## سوالات درباره رنگ

| پښتو | فارسی |
|------|-------|
| دا کوم رنګ دی؟ | این چه رنگی است؟ |
| ستا خوښ رنګ کوم دی؟ | رنگ مورد علاقه‌ات چیست؟ |
| دا سور دی که نارنجي؟ | این قرمز است یا نارنجی؟ |

## پاسخ‌ها

| پښتو | فارسی |
|------|-------|
| دا سور دی | این قرمز است |
| زما خوښ رنګ شین دی | رنگ مورد علاقه‌ام سبز است |
| دا نارنجي دی | این نارنجی است |

## رنگ‌ها در جمله

| پښتو | فارسی |
|------|-------|
| اسمان نیلي دی | آسمان آبی است |
| واښه شنه ده | چمن سبز است |
| لمر ژېړ دی | خورشید زرد است |
| شپه توره ده | شب سیاه است |
| واوره سپینه ده | برف سفید است |

## مکالمه نمونه

**احمد:** ستا خوښ رنګ کوم دی؟
**محمود:** زما خوښ رنګ شین دی. ستا؟
**احمد:** زما خوښ رنګ نیلي دی.
**محمود:** دا ستا نوی موټر دی؟
**احمد:** هو، تور موټر دی.
**محمود:** ډېر ښکلی دی!

> **نکته:** رنگ‌ها در پښتو صفت هستند و با جنسیت اسم تغییر می‌کنند.
`,hasPractice:!1},Jb={id:"days-months",title:"روزها و ماه‌ها",titlePashto:"ورځې او میاشتې",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# روزها و ماه‌ها در پښتو

## روزهای هفته

| پښتو | فارسی | تلفظ |
|------|-------|------|
| شنبه | شنبه | shamba |
| یکشنبه | یکشنبه | yakshamba |
| دوشنبه | دوشنبه | doshamba |
| سه‌شنبه | سه‌شنبه | seshamba |
| چهارشنبه | چهارشنبه | chahārshamba |
| پنجشنبه | پنجشنبه | panjshamba |
| جمعه | جمعه | jum'a |

## ماه‌های شمسی

| پښتو | فارسی |
|------|-------|
| وری | حمل/فروردین |
| غویی | ثور/اردیبهشت |
| غبرګولی | جوزا/خرداد |
| چنګاښ | سرطان/تیر |
| زمری | اسد/مرداد |
| وږی | سنبله/شهریور |
| تله | میزان/مهر |
| لړم | عقرب/آبان |
| لیندۍ | قوس/آذر |
| مرغومی | جدی/دی |
| سلواغه | دلو/بهمن |
| کب | حوت/اسفند |

## کلمات زمان

| پښتو | فارسی |
|------|-------|
| نن | امروز |
| پرون | دیروز |
| سبا | فردا |
| بل سبا | پس‌فردا |
| پروسږکال | پارسال |
| سږکال | امسال |
| راتلونکی کال | سال آینده |

## اوقات روز

| پښتو | فارسی |
|------|-------|
| سهار | صبح |
| غرمه | ظهر |
| ماښام | عصر |
| ماښام | شام |
| شپه | شب |

## فصل‌ها

| پښتو | فارسی |
|------|-------|
| پسرلی | بهار |
| دوبی | تابستان |
| منی | پاییز |
| ژمی | زمستان |

## سوالات درباره زمان

| پښتو | فارسی |
|------|-------|
| نن کومه ورځ ده؟ | امروز چه روزی است؟ |
| نن څه نېټه ده؟ | امروز چه تاریخی است؟ |
| کومه میاشت ده؟ | چه ماهی است؟ |
| کوم کال دی؟ | چه سالی است؟ |

## پاسخ‌ها

| پښتو | فارسی |
|------|-------|
| نن جمعه ده | امروز جمعه است |
| نن لسمه ده | امروز دهم است |
| دا میاشت وری ده | این ماه حمل است |
| دا کال ۱۴۰۴ دی | این سال ۱۴۰۴ است |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| هره ورځ | هر روز |
| هره اونۍ | هر هفته |
| هره میاشت | هر ماه |
| هر کال | هر سال |
| تېره اونۍ | هفته گذشته |
| راتلونکې اونۍ | هفته آینده |

## مکالمه نمونه

**احمد:** نن کومه ورځ ده؟
**محمود:** نن جمعه ده.
**احمد:** سبا څه کوې؟
**محمود:** سبا شنبه ده، زه کار ته ځم.
**احمد:** کله رخصتي لرې؟
**محمود:** راتلونکې اونۍ رخصتي لرم.

> **نکته:** در افغانستان از تقویم شمسی استفاده می‌شود.
`,hasPractice:!1},Fb={id:"past-simple",title:"گذشته ساده",titlePashto:"ساده تېرمهال",difficulty:"medium",estimatedTime:"۳۰ دقیقه",content:`
# زمان گذشته ساده در پښتو

در پښتو، زمان گذشته با تغییر ریشه فعل و اضافه کردن پسوندهای خاص ساخته می‌شود.

## ساختار گذشته ساده

در گذشته ساده، فعل با فاعل از نظر جنسیت و عدد مطابقت می‌کند.

### فعل بودن در گذشته

| ضمیر | مذکر | مونث | فارسی |
|------|------|------|-------|
| زه | وم | وم | بودم |
| ته | وې | وې | بودی |
| هغه | و | وه | بود |
| موږ | وو | وو | بودیم |
| تاسو | وئ | وئ | بودید |
| هغوی | ول | وې | بودند |

## مثال‌ها با فعل بودن

| پښتو | فارسی |
|------|-------|
| زه کور کې وم | من در خانه بودم |
| ته چېرته وې؟ | تو کجا بودی؟ |
| هغه ناروغ و | او مریض بود (مرد) |
| هغه ناروغه وه | او مریض بود (زن) |
| موږ بازار کې وو | ما در بازار بودیم |
| تاسو کله راغلئ؟ | شما کی آمدید؟ |
| هغوی دلته ول | آنها اینجا بودند |

## پسوندهای گذشته برای فعل‌های متعدی

برای فعل‌های متعدی (مثل خوردن، دیدن)، پسوند با مفعول مطابقت می‌کند:

| مفعول | پسوند مذکر | پسوند مونث |
|-------|-----------|-----------|
| مفرد | -ه/-و | -ه |
| جمع | -ل | -ې |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| ما ډوډۍ وخوړه | من غذا خوردم |
| تا کتاب ولوست | تو کتاب خواندی |
| هغه چای وڅښه | او چای نوشید |
| موږ فلم ولید | ما فیلم دیدیم |
| هغوی کار وکړ | آنها کار کردند |

## جملات منفی در گذشته

| پښتو | فارسی |
|------|-------|
| زه نه وم | من نبودم |
| ته دلته نه وې | تو اینجا نبودی |
| هغه نه راغی | او نیامد |
| موږ ونه لیدل | ما ندیدیم |
| هغوی ونه خوړل | آنها نخوردند |

## جملات سوالی در گذشته

| پښتو | فارسی |
|------|-------|
| ته چېرته وې؟ | تو کجا بودی؟ |
| هغه راغی؟ | او آمد؟ |
| تاسو ولیدل؟ | شما دیدید؟ |
| څه وشول؟ | چه شد؟ |
| کله راغلې؟ | کی آمدی؟ |

## کلمات زمان گذشته

| پښتو | فارسی |
|------|-------|
| پرون | دیروز |
| نن سهار | امروز صبح |
| تېره اونۍ | هفته گذشته |
| تېره میاشت | ماه گذشته |
| تېر کال | سال گذشته |
| مخکې | قبلاً |

## مکالمه نمونه

**احمد:** سلام! پرون چېرته وې؟
**محمود:** سلام! زه کندهار کې وم.
**احمد:** هلته څه وکړل؟
**محمود:** زه خپل کورنۍ سره ولیدم.
**احمد:** ښه وخت تېر کړ؟
**محمود:** هو، ډېر ښه وخت تېر کړم.

> **نکته مهم:** در پښتو، فعل‌های متعدی در گذشته با مفعول مطابقت می‌کنند، نه با فاعل. این یکی از ویژگی‌های خاص پښتو است.
`,hasPractice:!1},$b={id:"past-to-be",title:"بودم (وم)",titleFa:"بودم (وم)",titlePashto:"وم",description:"فعل بودن در زمان گذشته",difficulty:"easy",duration:"۲۰ دقیقه",content:[{type:"intro",title:"فعل بودن در گذشته",text:'در این درس یاد می‌گیریم چگونه فعل "بودن" را در زمان گذشته استفاده کنیم.'},{type:"conjugation",title:"گردان فعل بودن - گذشته",conjugations:[{pronoun:"زه",pashto:"وم",english:"I was",example:"زه خانه کې وم"},{pronoun:"ته",pashto:"وې",english:"you were",example:"ته خانه کې وې"},{pronoun:"هغه",pashto:"و",english:"he/she was",example:"هغه خانه کې و"},{pronoun:"موږ",pashto:"وو",english:"we were",example:"موږ خانه کې وو"},{pronoun:"تاسو",pashto:"وئ",english:"you (pl) were",example:"تاسو خانه کې وئ"},{pronoun:"هغوی",pashto:"و",english:"they were",example:"هغوی خانه کې و"}]},{type:"examples",title:"مثال‌های عملی",examples:[{pashto:"زه دیروز خانه کې وم",english:"I was at home yesterday",farsi:"من دیروز در خانه بودم"},{pashto:"ته مکتب کې وې",english:"You were at school",farsi:"تو در مدرسه بودی"},{pashto:"هغه بازار کې و",english:"He was at the market",farsi:"او در بازار بود"},{pashto:"موږ کار کې وو",english:"We were at work",farsi:"ما در کار بودیم"}]},{type:"practice",title:"تمرین",exercises:[{question:"زه دیروز خانه کې _____ ؟",options:["وم","یم","به یم"],answer:"وم"},{question:"ته مکتب کې _____ ؟",options:["وې","یې","به یې"],answer:"وې"},{question:"هغه بازار کې _____ ؟",options:["و","وي","به وي"],answer:"و"}]}]},Wb={id:"past-to-go",title:"رفتم (لاړم)",titlePashto:"لاړم (تېرمهال)",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# فعل رفتن در زمان گذشته

فعل «تلل» (رفتن) در گذشته به «لاړ» تبدیل می‌شود. این فعل لازم است و با فاعل مطابقت می‌کند.

## گردان فعل رفتن - گذشته ساده

### غیررسمی

| ضمیر | مذکر | مونث | فارسی |
|------|------|------|-------|
| زه | لاړم | لاړم | رفتم |
| ته | لاړې | لاړې | رفتی |
| هغه | لاړ | لاړه | رفت |
| موږ | لاړو | لاړو | رفتیم |
| تاسو | لاړئ | لاړئ | رفتید |
| هغوی | لاړل | لاړې | رفتند |

### رسمی

| ضمیر | پښتو | فارسی |
|------|------|-------|
| زه | لاړم | رفتم |
| تاسو | لاړئ | رفتید |
| هغه | لاړ/لاړه | رفت |
| موږ | لاړو | رفتیم |
| هغوی | لاړل | رفتند |

## مقایسه حال و گذشته

| حال | گذشته | فارسی |
|-----|-------|-------|
| ځم | لاړم | می‌روم / رفتم |
| ځې | لاړې | می‌روی / رفتی |
| ځي | لاړ | می‌رود / رفت |
| ځو | لاړو | می‌رویم / رفتیم |
| ځئ | لاړئ | می‌روید / رفتید |
| ځي | لاړل | می‌روند / رفتند |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه پرون کور ته لاړم | من دیروز به خانه رفتم |
| ته چېرته لاړې؟ | تو کجا رفتی؟ |
| هغه بازار ته لاړ | او به بازار رفت (مرد) |
| هغه مکتب ته لاړه | او به مکتب رفت (زن) |
| موږ کندهار ته لاړو | ما به کندهار رفتیم |
| تاسو کله لاړئ؟ | شما کی رفتید؟ |
| هغوی کابل ته لاړل | آنها به کابل رفتند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه نه لاړم | من نرفتم |
| ته ولې نه لاړې؟ | تو چرا نرفتی؟ |
| هغه کور ته نه لاړ | او به خانه نرفت |
| موږ هلته نه لاړو | ما آنجا نرفتیم |
| هغوی نه لاړل | آنها نرفتند |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| ته چېرته لاړې؟ | تو کجا رفتی؟ |
| کله لاړې؟ | کی رفتی؟ |
| ولې لاړې؟ | چرا رفتی؟ |
| له چا سره لاړې؟ | با کی رفتی؟ |
| څنګه لاړې؟ | چطور رفتی؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| زه لاړم او راغلم | من رفتم و آمدم |
| هغه لاړ او نه راغی | او رفت و نیامد |
| موږ یوځای لاړو | ما با هم رفتیم |
| هغه پلی لاړ | او پیاده رفت |
| زه په موټر لاړم | من با موتر رفتم |

## مکالمه نمونه

**احمد:** سلام! پرون چېرته لاړې؟
**محمود:** سلام! زه بازار ته لاړم.
**احمد:** څه واخیستل؟
**محمود:** میوه واخیستم.
**احمد:** له چا سره لاړې؟
**محمود:** له ورور سره لاړم.
**احمد:** ښه، زه هم غواړم لاړ شم.

> **نکته:** فعل «لاړ» برای مذکر و «لاړه» برای مونث استفاده می‌شود.
`,hasPractice:!1},Ib={id:"past-to-come",title:"آمدم (راغلم)",titlePashto:"راغلم (تېرمهال)",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# فعل آمدن در زمان گذشته

فعل «راتلل» (آمدن) در گذشته به «راغل» تبدیل می‌شود. این فعل لازم است و با فاعل مطابقت می‌کند.

## گردان فعل آمدن - گذشته ساده

### غیررسمی

| ضمیر | مذکر | مونث | فارسی |
|------|------|------|-------|
| زه | راغلم | راغلم | آمدم |
| ته | راغلې | راغلې | آمدی |
| هغه | راغی | راغله | آمد |
| موږ | راغلو | راغلو | آمدیم |
| تاسو | راغلئ | راغلئ | آمدید |
| هغوی | راغلل | راغلې | آمدند |

### رسمی

| ضمیر | پښتو | فارسی |
|------|------|-------|
| زه | راغلم | آمدم |
| تاسو | راغلئ | آمدید |
| هغه | راغی/راغله | آمد |
| موږ | راغلو | آمدیم |
| هغوی | راغلل | آمدند |

## مقایسه حال و گذشته

| حال | گذشته | فارسی |
|-----|-------|-------|
| راځم | راغلم | می‌آیم / آمدم |
| راځې | راغلې | می‌آیی / آمدی |
| راځي | راغی | می‌آید / آمد |
| راځو | راغلو | می‌آییم / آمدیم |
| راځئ | راغلئ | می‌آیید / آمدید |
| راځي | راغلل | می‌آیند / آمدند |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| زه پرون راغلم | من دیروز آمدم |
| ته کله راغلې؟ | تو کی آمدی؟ |
| هغه نن سهار راغی | او امروز صبح آمد (مرد) |
| هغه له کابله راغله | او از کابل آمد (زن) |
| موږ ناوخته راغلو | ما دیر آمدیم |
| تاسو کله راغلئ؟ | شما کی آمدید؟ |
| هغوی له کندهاره راغلل | آنها از کندهار آمدند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| زه نه راغلم | من نیامدم |
| ته ولې نه راغلې؟ | تو چرا نیامدی؟ |
| هغه نه راغی | او نیامد |
| موږ نه شو راتلی | ما نتوانستیم بیاییم |
| هغوی نه راغلل | آنها نیامدند |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| ته کله راغلې؟ | تو کی آمدی؟ |
| له کومه راغلې؟ | از کجا آمدی؟ |
| ولې راغلې؟ | چرا آمدی؟ |
| له چا سره راغلې؟ | با کی آمدی؟ |
| څنګه راغلې؟ | چطور آمدی؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| هغه نوی راغی | او تازه آمد |
| زه اوس راغلم | من الان آمدم |
| هغوی له لرې راغلل | آنها از دور آمدند |
| میلمانه راغلل | مهمان‌ها آمدند |
| ښه راغلاست! | خوش آمدید! |

## مکالمه نمونه

**احمد:** سلام! کله راغلې؟
**محمود:** سلام! زه نن سهار راغلم.
**احمد:** له کومه راغلې؟
**محمود:** له کابله راغلم.
**احمد:** څنګه راغلې؟ په الوتکه؟
**محمود:** نه، په موټر راغلم.
**احمد:** ښه راغلې! ستړی مه شې!
**محمود:** مننه!

> **نکته:** «راغی» برای مذکر و «راغله» برای مونث استفاده می‌شود.
`,hasPractice:!1},ax={id:"past-to-eat",title:"خوردم (وخوړم)",titlePashto:"وخوړم (تېرمهال)",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# فعل خوردن در زمان گذشته

فعل «خوړل» (خوردن) در گذشته با پیشوند «و» ساخته می‌شود. این فعل متعدی است و با مفعول مطابقت می‌کند.

## گردان فعل خوردن - گذشته ساده

### با مفعول مذکر مفرد

| ضمیر | پښتو | فارسی |
|------|------|-------|
| ما | وخوړ | من خوردم |
| تا | وخوړ | تو خوردی |
| هغه | وخوړ | او خورد |
| موږ | وخوړ | ما خوردیم |
| تاسو | وخوړ | شما خوردید |
| هغوی | وخوړ | آنها خوردند |

### با مفعول مونث مفرد (مثل ډوډۍ)

| ضمیر | پښتو | فارسی |
|------|------|-------|
| ما | وخوړه | من خوردم |
| تا | وخوړه | تو خوردی |
| هغه | وخوړه | او خورد |
| موږ | وخوړه | ما خوردیم |
| تاسو | وخوړه | شما خوردید |
| هغوی | وخوړه | آنها خوردند |

## نکته مهم

در پښتو، فعل‌های متعدی در گذشته با مفعول مطابقت می‌کنند:
- مفعول مذکر مفرد: وخوړ
- مفعول مونث مفرد: وخوړه
- مفعول جمع: وخوړل

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| ما ډوډۍ وخوړه | من غذا خوردم |
| تا کباب وخوړ | تو کباب خوردی |
| هغه پلاو وخوړ | او پلو خورد |
| موږ میوه وخوړه | ما میوه خوردیم |
| تاسو څه وخوړل؟ | شما چه خوردید؟ |
| هغوی غوښه وخوړه | آنها گوشت خوردند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| ما ډوډۍ ونه خوړه | من غذا نخوردم |
| تا ولې ونه خوړه؟ | تو چرا نخوردی؟ |
| هغه هیڅ ونه خوړل | او هیچی نخورد |
| موږ سهار ډوډۍ ونه خوړه | ما صبحانه نخوردیم |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| تا څه وخوړل؟ | تو چه خوردی؟ |
| ډوډۍ وخوړه؟ | غذا خوردی؟ |
| خوند درکړ؟ | خوشمزه بود؟ |
| موړ شوې؟ | سیر شدی؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| ما ډوډۍ وخوړه | من غذا خوردم |
| زه موړ شوم | من سیر شدم |
| ډېره خوندوره وه | خیلی خوشمزه بود |
| ما ډېره وخوړه | من زیاد خوردم |
| ما لږه وخوړه | من کم خوردم |

## مکالمه نمونه

**مور:** ډوډۍ وخوړه؟
**زوی:** هو مور، وخوړه.
**مور:** خوند درکړ؟
**زوی:** هو، ډېره خوندوره وه!
**مور:** موړ شوې؟
**زوی:** هو، موړ شوم. مننه مور!
**مور:** نوش جان!

> **نکته:** پیشوند «و» نشانه گذشته است. «خورم» (می‌خورم) → «وخوړم» (خوردم)
`,hasPractice:!1},tx={id:"past-to-drink",title:"نوشیدم (وڅښم)",titleFa:"نوشیدم (وڅښم)",titlePashto:"وڅښم",description:"فعل نوشیدن در زمان گذشته",difficulty:"medium",duration:"۲۵ دقیقه",content:[{type:"intro",title:"فعل نوشیدن در گذشته",text:'در این درس یاد می‌گیریم چگونه فعل "نوشیدن" را در زمان گذشته استفاده کنیم.'},{type:"conjugation",title:"گردان فعل نوشیدن - گذشته",conjugations:[{pronoun:"زه",pashto:"وڅښم",english:"I drank",example:"زه چای وڅښم"},{pronoun:"ته",pashto:"وڅښې",english:"you drank",example:"ته چای وڅښې"},{pronoun:"هغه",pashto:"وڅښ",english:"he/she drank",example:"هغه چای وڅښ"},{pronoun:"موږ",pashto:"وڅښو",english:"we drank",example:"موږ چای وڅښو"},{pronoun:"تاسو",pashto:"وڅښئ",english:"you (pl) drank",example:"تاسو چای وڅښئ"},{pronoun:"هغوی",pashto:"وڅښل",english:"they drank",example:"هغوی چای وڅښل"}]},{type:"examples",title:"مثال‌های عملی",examples:[{pashto:"زه دیروز چای وڅښم",english:"I drank tea yesterday",farsi:"من دیروز چای نوشیدم"},{pashto:"ته آب وڅښې",english:"You drank water",farsi:"تو آب نوشیدی"},{pashto:"هغه شیر وڅښ",english:"He drank milk",farsi:"او شیر نوشید"},{pashto:"موږ شربت وڅښو",english:"We drank juice",farsi:"ما آب میوه نوشیدیم"}]},{type:"practice",title:"تمرین",exercises:[{question:"زه دیروز چای _____ ؟",options:["وڅښم","څښم","به څښم"],answer:"وڅښم"},{question:"ته آب _____ ؟",options:["وڅښې","څښې","به څښي"],answer:"وڅښې"},{question:"هغه شیر _____ ؟",options:["وڅښ","څښ","به څښي"],answer:"وڅښ"}]}]},ex={id:"past-to-do",title:"کردم (وکړم)",titlePashto:"وکړم (تېرمهال)",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# فعل کردن در زمان گذشته

فعل «کول» (کردن) در گذشته به «وکړ» تبدیل می‌شود. این فعل متعدی است و با مفعول مطابقت می‌کند.

## گردان فعل کردن - گذشته ساده

### با مفعول مذکر مفرد

| ضمیر | پښتو | فارسی |
|------|------|-------|
| ما | وکړ | من کردم |
| تا | وکړ | تو کردی |
| هغه | وکړ | او کرد |
| موږ | وکړ | ما کردیم |
| تاسو | وکړ | شما کردید |
| هغوی | وکړ | آنها کردند |

### با مفعول مونث مفرد

| ضمیر | پښتو | فارسی |
|------|------|-------|
| ما | وکړه | من کردم |
| تا | وکړه | تو کردی |
| هغه | وکړه | او کرد |
| موږ | وکړه | ما کردیم |
| تاسو | وکړه | شما کردید |
| هغوی | وکړه | آنها کردند |

## فعل‌های مرکب در گذشته

| حال | گذشته | فارسی |
|-----|-------|-------|
| کار کوم | کار وکړ | کار می‌کنم / کار کردم |
| خبرې کوم | خبرې وکړې | صحبت می‌کنم / صحبت کردم |
| مرسته کوم | مرسته وکړه | کمک می‌کنم / کمک کردم |
| پوښتنه کوم | پوښتنه وکړه | سوال می‌کنم / سوال کردم |
| فکر کوم | فکر وکړ | فکر می‌کنم / فکر کردم |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| ما کار وکړ | من کار کردم |
| تا څه وکړل؟ | تو چه کردی؟ |
| هغه مرسته وکړه | او کمک کرد |
| موږ خبرې وکړې | ما صحبت کردیم |
| تاسو ښه کار وکړ | شما کار خوبی کردید |
| هغوی هیڅ ونه کړل | آنها هیچ کاری نکردند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| ما دا ونه کړل | من این کار را نکردم |
| تا ولې ونه کړل؟ | تو چرا نکردی؟ |
| هغه کار ونه کړ | او کار نکرد |
| موږ هیڅ ونه کړل | ما هیچ کاری نکردیم |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| تا څه وکړل؟ | تو چه کردی؟ |
| دا ولې وکړل؟ | این را چرا کردی؟ |
| کار وکړ؟ | کار کردی؟ |
| څنګه وکړل؟ | چطور کردی؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| ما کار وکړ | من کار کردم |
| ښه کار وکړ | کار خوبی کردی |
| دا مه کوه | این کار را نکن |
| ما غلطي وکړه | من اشتباه کردم |
| تا سم کار وکړ | تو درست کردی |
| هغه ډېر کار وکړ | او زیاد کار کرد |

## مکالمه نمونه

**احمد:** نن څه وکړل؟
**محمود:** زه کور کې کار وکړ.
**احمد:** کوم کار وکړ؟
**محمود:** ما کور پاک کړ او ډوډۍ پخه کړه.
**احمد:** ښه کار وکړ!
**محمود:** مننه. ته څه وکړل؟
**احمد:** زه مکتب ته لاړم.

> **نکته:** «کول» یکی از مهم‌ترین فعل‌ها برای ساختن فعل‌های مرکب است.
`,hasPractice:!1},nx={id:"past-to-pour",title:"واچم (گذشته)",titleFa:"ریختم (واچم)",titlePashto:"واچم",description:"فعل اچول (ریختن) در زمان گذشته",difficulty:"medium",duration:"۲۵ دقیقه",content:[{type:"intro",title:"فعل اچول در گذشته",text:'در این درس یاد می‌گیریم چگونه فعل "اچول" (ریختن) را در زمان گذشته استفاده کنیم. در پشتو، پیشوند "و" نشانه گذشته است.'},{type:"conjugation",title:"گردان فعل اچول - گذشته",conjugations:[{pronoun:"زه",pashto:"واچم",english:"I poured",example:"زه برایت چای واچم"},{pronoun:"ته",pashto:"واچې",english:"you poured",example:"ته آب واچې"},{pronoun:"هغه",pashto:"واچ",english:"he/she poured",example:"هغه شیر واچ"},{pronoun:"موږ",pashto:"واچو",english:"we poured",example:"موږ چای واچو"},{pronoun:"تاسو",pashto:"واچئ",english:"you (pl) poured",example:"تاسو آب واچئ"},{pronoun:"هغوی",pashto:"واچل",english:"they poured",example:"هغوی شربت واچل"}]},{type:"examples",title:"مثال‌های عملی",examples:[{pashto:"زه دیروز برایت چای واچم",english:"I poured tea for you yesterday",farsi:"من دیروز برایت چای ریختم"},{pashto:"ته آب واچې",english:"You poured water",farsi:"تو آب ریختی"},{pashto:"هغه شیر واچ",english:"He poured milk",farsi:"او شیر ریخت"},{pashto:"موږ چای واچو",english:"We poured tea",farsi:"ما چای ریختیم"}]},{type:"practice",title:"تمرین",exercises:[{question:"زه برایت چای _____ ؟",options:["واچم","اچم","به اچم"],answer:"واچم"},{question:"ته آب _____ ؟",options:["واچې","اچې","به اچې"],answer:"واچې"},{question:"هغه شیر _____ ؟",options:["واچ","اچي","به اچي"],answer:"واچ"}]}]},ix={id:"past-to-see",title:"دیدم (ولیدم)",titlePashto:"ولیدم (تېرمهال)",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# فعل دیدن در زمان گذشته

فعل «لیدل» (دیدن) در گذشته با پیشوند «و» ساخته می‌شود. این فعل متعدی است و با مفعول مطابقت می‌کند.

## گردان فعل دیدن - گذشته ساده

### با مفعول مذکر مفرد

| ضمیر | پښتو | فارسی |
|------|------|-------|
| ما | ولید | من دیدم |
| تا | ولید | تو دیدی |
| هغه | ولید | او دید |
| موږ | ولید | ما دیدیم |
| تاسو | ولید | شما دیدید |
| هغوی | ولید | آنها دیدند |

### با مفعول مونث مفرد

| ضمیر | پښتو | فارسی |
|------|------|-------|
| ما | ولیده | من دیدم |
| تا | ولیده | تو دیدی |
| هغه | ولیده | او دید |
| موږ | ولیده | ما دیدیم |
| تاسو | ولیده | شما دیدید |
| هغوی | ولیده | آنها دیدند |

### با مفعول جمع

| ضمیر | پښتو | فارسی |
|------|------|-------|
| ما | ولیدل | من دیدم |
| تا | ولیدل | تو دیدی |
| هغه | ولیدل | او دید |
| موږ | ولیدل | ما دیدیم |
| تاسو | ولیدل | شما دیدید |
| هغوی | ولیدل | آنها دیدند |

## مقایسه حال و گذشته

| حال | گذشته | فارسی |
|-----|-------|-------|
| وینم | ولیدم | می‌بینم / دیدم |
| وینې | ولیدې | می‌بینی / دیدی |
| ویني | ولید | می‌بیند / دید |
| وینو | ولیدو | می‌بینیم / دیدیم |
| وینئ | ولیدئ | می‌بینید / دیدید |
| ویني | ولیدل | می‌بینند / دیدند |

## مثال‌ها

| پښتو | فارسی |
|------|-------|
| ما هغه ولید | من او را دیدم (مرد) |
| ما هغه ولیده | من او را دیدم (زن) |
| تا فلم ولید؟ | تو فیلم دیدی؟ |
| هغه خپل ملګری ولید | او دوستش را دید |
| موږ ښکلی ځای ولید | ما جای زیبایی دیدیم |
| تاسو څه ولیدل؟ | شما چه دیدید؟ |
| هغوی هیڅ ونه لیدل | آنها هیچی ندیدند |

## جملات منفی

| پښتو | فارسی |
|------|-------|
| ما ونه لید | من ندیدم |
| تا ولې ونه لید؟ | تو چرا ندیدی؟ |
| هغه هیڅ ونه لیدل | او هیچی ندید |
| موږ هغه ونه لید | ما او را ندیدیم |

## جملات سوالی

| پښتو | فارسی |
|------|-------|
| تا ولیدل؟ | تو دیدی؟ |
| څه ولیدل؟ | چه دیدی؟ |
| چا ولید؟ | کی را دیدی؟ |
| چېرته ولیدل؟ | کجا دیدی؟ |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| ما ولید | من دیدم |
| ما ونه لید | من ندیدم |
| بیا وینو | باز می‌بینیم |
| ډېر وخت شو چې ونه لیدم | خیلی وقت شد که ندیدم |
| خوشحاله شوم چې ولیدم | خوشحال شدم که دیدم |

## مکالمه نمونه

**احمد:** سلام! پرون احمد ولید؟
**محمود:** هو، ما هغه بازار کې ولید.
**احمد:** هغه څنګه و؟
**محمود:** هغه ښه و. له تا یې سلام ویلی.
**احمد:** ښه، مننه. زه هم غواړم هغه ووینم.
**محمود:** سبا یوځای ځو، هغه وینو.

> **نکته:** فعل «لیدل» در حال به «وینم» تبدیل می‌شود که ریشه متفاوتی دارد.
`,hasPractice:!1},ox={id:"gender",title:"جنسیت اسم‌ها",titlePashto:"د نومونو جنس",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# جنسیت اسم‌ها در پښتو

در پښتو، همه اسم‌ها یا مذکر هستند یا مؤنث. این بر صرف فعل و صفت تأثیر می‌گذارد.

## قواعد کلی

### اسم‌های مذکر معمولاً:
- به صامت ختم می‌شوند
- به «ی» ختم می‌شوند

### اسم‌های مؤنث معمولاً:
- به «ه» یا «ا» ختم می‌شوند
- به «ۍ» ختم می‌شوند

## مثال‌های مذکر

| پښتو | فارسی | پایان |
|------|-------|-------|
| سړی | مرد | ی |
| کور | خانه | صامت |
| ورور | برادر | صامت |
| پلار | پدر | صامت |
| ځوان | جوان | صامت |
| ملګری | دوست | ی |

## مثال‌های مؤنث

| پښتو | فارسی | پایان |
|------|-------|-------|
| ښځه | زن | ه |
| لور | دختر | صامت (استثنا) |
| مور | مادر | صامت (استثنا) |
| خور | خواهر | صامت (استثنا) |
| کورنۍ | خانواده | ۍ |
| ډوډۍ | نان | ۍ |

## تأثیر جنسیت بر صفت

صفت‌ها با جنسیت اسم تغییر می‌کنند:

| مذکر | مؤنث | معنی |
|------|------|------|
| ښه | ښه | خوب |
| ستړی | ستړې | خسته |
| زوړ | زړه | کهنه |
| نوی | نوې | نو |
| لوی | لویه | بزرگ |

## مثال در جمله

### مذکر
| پښتو | فارسی |
|------|-------|
| ښه سړی | مرد خوب |
| ستړی ځوان | جوان خسته |
| نوی کور | خانه نو |

### مؤنث
| پښتو | فارسی |
|------|-------|
| ښه ښځه | زن خوب |
| ستړې لور | دختر خسته |
| نوې کورنۍ | خانواده نو |

## تأثیر جنسیت بر فعل

فعل «دی/ده» (است) با جنسیت تغییر می‌کند:

| جنس | فعل | مثال |
|-----|-----|------|
| مذکر | دی | هغه ښه دی (او خوب است) |
| مؤنث | ده | هغه ښه ده (او خوب است) |

## استثناها

برخی کلمات استثنا هستند:

| پښتو | جنس | توضیح |
|------|-----|-------|
| لور | مؤنث | به صامت ختم می‌شود ولی مؤنث است |
| مور | مؤنث | به صامت ختم می‌شود ولی مؤنث است |
| خور | مؤنث | به صامت ختم می‌شود ولی مؤنث است |
| اوبه | مؤنث جمع | آب |

> **نکته:** یادگیری جنسیت اسم‌ها نیاز به تمرین دارد. بهتر است هر کلمه را با جنسیتش حفظ کنید.
`,hasPractice:!1},sx={id:"plural",title:"جمع بستن",titlePashto:"ګڼ جوړول",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# جمع بستن در پښتو

در پښتو، جمع بستن اسم‌ها قواعد خاصی دارد که بر اساس جنسیت و پایان کلمه متفاوت است.

## قواعد جمع بستن مذکر

### اسم‌های مذکر با پایان صامت

پسوند «ان» یا «ونه» اضافه می‌شود:

| مفرد | جمع | فارسی |
|------|-----|-------|
| سړی | سړي | مرد / مردها |
| ملګری | ملګري | دوست / دوستان |
| معلم | معلمان | معلم / معلمان |
| داکتر | داکتران | داکتر / داکتران |
| کتاب | کتابونه | کتاب / کتاب‌ها |
| کور | کورونه | خانه / خانه‌ها |

### اسم‌های مذکر با پایان «ی»

«ی» به «ي» تبدیل می‌شود:

| مفرد | جمع | فارسی |
|------|-----|-------|
| هلک | هلکان | پسر / پسرها |
| ورور | وروڼه | برادر / برادرها |
| پلار | پلرونه | پدر / پدرها |

## قواعد جمع بستن مونث

### اسم‌های مونث با پایان «ه»

«ه» به «ې» تبدیل می‌شود:

| مفرد | جمع | فارسی |
|------|-----|-------|
| ښځه | ښځې | زن / زنان |
| نجلۍ | نجونې | دختر / دخترها |
| مور | میندې | مادر / مادرها |
| خور | خویندې | خواهر / خواهرها |

### اسم‌های مونث با پایان «ۍ»

«ۍ» به «ې» تبدیل می‌شود:

| مفرد | جمع | فارسی |
|------|-----|-------|
| ډوډۍ | ډوډۍ | نان / نان‌ها |
| کورنۍ | کورنۍ | خانواده / خانواده‌ها |

## جمع‌های بی‌قاعده

| مفرد | جمع | فارسی |
|------|-----|-------|
| ماشوم | ماشومان | بچه / بچه‌ها |
| سترګه | سترګې | چشم / چشم‌ها |
| غوږ | غوږونه | گوش / گوش‌ها |
| لاس | لاسونه | دست / دست‌ها |
| پښه | پښې | پا / پاها |

## مثال‌ها در جمله

| پښتو | فارسی |
|------|-------|
| دوه سړي راغلل | دو مرد آمدند |
| ماشومان لوبې کوي | بچه‌ها بازی می‌کنند |
| کتابونه پر مېز دي | کتاب‌ها روی میز هستند |
| ښځې کار کوي | زنان کار می‌کنند |
| هلکان مکتب ته ځي | پسرها به مکتب می‌روند |

## اعداد با جمع

| پښتو | فارسی |
|------|-------|
| یو سړی | یک مرد |
| دوه سړي | دو مرد |
| درې کتابونه | سه کتاب |
| څلور ښځې | چهار زن |
| پنځه ماشومان | پنج بچه |

## مکالمه نمونه

**احمد:** ستا څو وروڼه دي؟
**محمود:** زما دوه وروڼه دي.
**احمد:** خویندې هم لرې؟
**محمود:** هو، یوه خور لرم.
**احمد:** ماشومان لرې؟
**محمود:** هو، درې ماشومان لرم.

> **نکته:** در پښتو، جمع بستن با جنسیت اسم ارتباط مستقیم دارد.
`,hasPractice:!1},lx={id:"adjectives",title:"صفت‌ها",titlePashto:"صفتونه",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# صفت‌ها در پښتو

در پښتو، صفت‌ها با جنسیت و عدد اسم موصوف مطابقت می‌کنند.

## صفت‌های رایج

| مذکر | مونث | فارسی |
|------|------|-------|
| ښه | ښه | خوب |
| بد | بده | بد |
| لوی | لویه | بزرگ |
| کوچنی | کوچنۍ | کوچک |
| نوی | نوې | نو |
| زوړ | زړه | کهنه |
| ګرم | ګرمه | گرم |
| سوړ | سړه | سرد |
| اوږد | اوږده | بلند |
| لنډ | لنډه | کوتاه |

## صفت‌های رنگ

| مذکر | مونث | فارسی |
|------|------|-------|
| سپین | سپینه | سفید |
| تور | توره | سیاه |
| سور | سره | سرخ |
| شین | شنه | سبز |
| ژېړ | ژېړه | زرد |
| نیلي | نیلي | آبی |

## ترتیب صفت و اسم

در پښتو، صفت قبل از اسم می‌آید:

| پښتو | فارسی |
|------|-------|
| ښه سړی | مرد خوب |
| ښه ښځه | زن خوب |
| لوی کور | خانه بزرگ |
| کوچنی ماشوم | بچه کوچک |
| نوی موټر | موتر نو |
| زوړ کتاب | کتاب کهنه |

## مطابقت صفت با اسم

### مذکر مفرد

| پښتو | فارسی |
|------|-------|
| لوی سړی | مرد بزرگ |
| ښه ملګری | دوست خوب |
| نوی کور | خانه نو |

### مونث مفرد

| پښتو | فارسی |
|------|-------|
| لویه ښځه | زن بزرگ |
| ښه نجلۍ | دختر خوب |
| نوې موټر | موتر نو |

### جمع

| پښتو | فارسی |
|------|-------|
| لوی سړي | مردان بزرگ |
| ښې ښځې | زنان خوب |
| نوي کورونه | خانه‌های نو |

## صفت‌های مقایسه‌ای

| ساده | تفضیلی | عالی | فارسی |
|------|--------|------|-------|
| ښه | ښه | ترټولو ښه | خوب / بهتر / بهترین |
| لوی | لوی | ترټولو لوی | بزرگ / بزرگتر / بزرگترین |
| کوچنی | کوچنی | ترټولو کوچنی | کوچک / کوچکتر / کوچکترین |

## مثال‌های مقایسه

| پښتو | فارسی |
|------|-------|
| دا له هغه ښه دی | این از آن بهتر است |
| هغه ترما لوی دی | او از من بزرگتر است |
| دا ترټولو ښه دی | این بهترین است |

## مکالمه نمونه

**احمد:** ستا نوی کور څنګه دی؟
**محمود:** ډېر ښه دی! لوی دی او ښکلی دی.
**احمد:** څو کوټې لري؟
**محمود:** درې لویې کوټې لري.
**احمد:** باغچه هم لري؟
**محمود:** هو، یوه کوچنۍ باغچه لري.

> **نکته:** صفت‌ها در پښتو با جنسیت اسم تغییر می‌کنند.
`,hasPractice:!1},rx={id:"prepositions",title:"حروف اضافه",titlePashto:"اړیکي توري",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# حروف اضافه در پښتو

حروف اضافه در پښتو برای نشان دادن رابطه مکانی، زمانی و دیگر روابط استفاده می‌شوند.

## حروف اضافه مکانی

| پښتو | فارسی | مثال |
|------|-------|------|
| په ... کې | در | په کور کې (در خانه) |
| له ... نه | از | له کوره نه (از خانه) |
| ته | به | کور ته (به خانه) |
| پر | روی | پر مېز (روی میز) |
| لاندې | زیر | د مېز لاندې (زیر میز) |
| مخکې | جلو | د کور مخکې (جلوی خانه) |
| شاته | پشت | د کور شاته (پشت خانه) |
| سره | با | له ما سره (با من) |
| بې | بدون | بې تا (بدون تو) |

## حروف اضافه زمانی

| پښتو | فارسی | مثال |
|------|-------|------|
| مخکې | قبل | له ډوډۍ مخکې (قبل از غذا) |
| وروسته | بعد | له ډوډۍ وروسته (بعد از غذا) |
| تر ... پورې | تا | تر سبا پورې (تا فردا) |
| له ... راهیسې | از | له سهاره راهیسې (از صبح) |

## مثال‌ها با «په ... کې»

| پښتو | فارسی |
|------|-------|
| زه په کور کې یم | من در خانه هستم |
| هغه په بازار کې دی | او در بازار است |
| کتاب په مېز کې دی | کتاب در میز است |
| موږ په کندهار کې اوسېږو | ما در کندهار زندگی می‌کنیم |

## مثال‌ها با «له ... نه»

| پښتو | فارسی |
|------|-------|
| زه له کوره راغلم | من از خانه آمدم |
| هغه له کابله راغی | او از کابل آمد |
| له چا نه؟ | از کی؟ |
| له کومه نه؟ | از کجا؟ |

## مثال‌ها با «ته»

| پښتو | فارسی |
|------|-------|
| زه کور ته ځم | من به خانه می‌روم |
| هغه بازار ته لاړ | او به بازار رفت |
| ما ته راکړه | به من بده |
| تا ته | به تو |

## مثال‌ها با «سره»

| پښتو | فارسی |
|------|-------|
| له ما سره | با من |
| له تا سره | با تو |
| له هغه سره | با او |
| له ملګرو سره | با دوستان |

## حروف اضافه ترکیبی

| پښتو | فارسی |
|------|-------|
| د ... لپاره | برای |
| د ... په اړه | درباره |
| د ... په ځای | به جای |
| د ... تر څنګ | کنار |

## مثال‌ها در جمله

| پښتو | فارسی |
|------|-------|
| دا د تا لپاره دی | این برای توست |
| د دې په اړه خبرې وکړه | درباره این صحبت کن |
| د کور تر څنګ | کنار خانه |
| د مېز لاندې | زیر میز |

## مکالمه نمونه

**احمد:** ته چېرته یې؟
**محمود:** زه په کور کې یم.
**احمد:** له چا سره یې؟
**محمود:** له کورنۍ سره یم.
**احمد:** کله راځې؟
**محمود:** له یوې ساعت وروسته راځم.
**احمد:** چېرته به سره وینو؟
**محمود:** د بازار مخکې.

> **نکته:** در پښتو، حروف اضافه معمولاً قبل از اسم می‌آیند.
`,hasPractice:!1},ux={id:"questions",title:"جملات سوالی",titlePashto:"پوښتنې",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# جملات سوالی در پښتو

در پښتو، سوالات با کلمات پرسشی یا با تغییر لحن ساخته می‌شوند.

## کلمات پرسشی

| پښتو | فارسی | تلفظ |
|------|-------|------|
| څه | چه | tsa |
| چا | کی (مفعول) | chā |
| څوک | کی (فاعل) | tsok |
| چېرته | کجا | cherta |
| کله | کی (زمان) | kala |
| ولې | چرا | wale |
| څنګه | چطور | tsanga |
| څومره | چقدر | tsomra |
| کوم | کدام | kom |
| څو | چند | tso |

## سوالات با «څه»

| پښتو | فارسی |
|------|-------|
| دا څه دی؟ | این چیست؟ |
| ته څه کوې؟ | تو چه می‌کنی؟ |
| ستا نوم څه دی؟ | اسمت چیست؟ |
| څه وخت دی؟ | ساعت چند است؟ |
| څه غواړې؟ | چه می‌خواهی؟ |

## سوالات با «څوک» و «چا»

| پښتو | فارسی |
|------|-------|
| دا څوک دی؟ | این کیست؟ |
| څوک راغی؟ | کی آمد؟ |
| له چا سره؟ | با کی؟ |
| د چا دی؟ | مال کیست؟ |
| چا وکړل؟ | کی کرد؟ |

## سوالات با «چېرته»

| پښتو | فارسی |
|------|-------|
| ته چېرته یې؟ | تو کجایی؟ |
| چېرته ځې؟ | کجا می‌روی؟ |
| کور چېرته دی؟ | خانه کجاست؟ |
| له چېرته راغلې؟ | از کجا آمدی؟ |

## سوالات با «کله»

| پښتو | فارسی |
|------|-------|
| کله راځې؟ | کی می‌آیی؟ |
| کله لاړې؟ | کی رفتی؟ |
| کله پیل کوې؟ | کی شروع می‌کنی؟ |
| تر کله؟ | تا کی؟ |

## سوالات با «ولې»

| پښتو | فارسی |
|------|-------|
| ولې؟ | چرا؟ |
| ولې نه راځې؟ | چرا نمی‌آیی؟ |
| ولې دا وکړل؟ | چرا این کار را کردی؟ |
| ولې ناوخته راغلې؟ | چرا دیر آمدی؟ |

## سوالات با «څنګه»

| پښتو | فارسی |
|------|-------|
| څنګه یې؟ | چطوری؟ |
| دا څنګه کوې؟ | این را چطور می‌کنی؟ |
| څنګه راغلې؟ | چطور آمدی؟ |
| حال څنګه دی؟ | حالت چطور است؟ |

## سوالات با «څومره» و «څو»

| پښتو | فارسی |
|------|-------|
| دا څومره دی؟ | این چقدر است؟ |
| څو کاله لرې؟ | چند سال داری؟ |
| څو وروڼه لرې؟ | چند برادر داری؟ |
| څومره وخت؟ | چقدر وقت؟ |

## سوالات بله/نه

| پښتو | فارسی |
|------|-------|
| ته افغان یې؟ | تو افغان هستی؟ |
| راځې؟ | می‌آیی؟ |
| پوهېږې؟ | می‌فهمی؟ |
| خوښ دی؟ | خوشت می‌آید؟ |

## مکالمه نمونه

**احمد:** سلام! ستا نوم څه دی؟
**محمود:** زما نوم محمود دی. ستا نوم؟
**احمد:** زما نوم احمد دی. ته له کومه یې؟
**محمود:** زه له کندهاره یم. ته؟
**احمد:** زه هم له کندهاره یم. څو کاله لرې؟
**محمود:** زه شل کاله لرم.

> **نکته:** در پښتو، کلمه پرسشی معمولاً در جای خود در جمله می‌ماند.
`,hasPractice:!1},cx={id:"negation",title:"جملات منفی",titlePashto:"منفي جملې",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# جملات منفی در پښتو

در پښتو، برای منفی کردن جملات از کلمات مختلفی استفاده می‌شود.

## کلمات منفی‌ساز

| پښتو | فارسی | کاربرد |
|------|-------|--------|
| نه | نه/نیست | فعل‌ها |
| مه | نکن | امری |
| هیڅ | هیچ | اسم‌ها |
| هیڅکله | هیچوقت | زمان |
| هیچا | هیچکس | شخص |

## منفی کردن فعل بودن

| مثبت | منفی | فارسی |
|------|------|-------|
| یم | نه یم | هستم / نیستم |
| یې | نه یې | هستی / نیستی |
| دی | نه دی | است / نیست |
| ده | نه ده | است / نیست |
| یو | نه یو | هستیم / نیستیم |
| یاست | نه یاست | هستید / نیستید |
| دي | نه دي | هستند / نیستند |

## مثال‌ها با فعل بودن

| پښتو | فارسی |
|------|-------|
| زه دلته نه یم | من اینجا نیستم |
| هغه کور کې نه دی | او در خانه نیست |
| موږ ستړي نه یو | ما خسته نیستیم |
| دا سم نه دی | این درست نیست |

## منفی کردن فعل‌های حال

| مثبت | منفی | فارسی |
|------|------|-------|
| ځم | نه ځم | می‌روم / نمی‌روم |
| راځم | نه راځم | می‌آیم / نمی‌آیم |
| خورم | نه خورم | می‌خورم / نمی‌خورم |
| کوم | نه کوم | می‌کنم / نمی‌کنم |
| وینم | نه وینم | می‌بینم / نمی‌بینم |

## مثال‌ها با فعل‌های حال

| پښتو | فارسی |
|------|-------|
| زه نه ځم | من نمی‌روم |
| ته ولې نه راځې؟ | تو چرا نمی‌آیی؟ |
| هغه غوښه نه خوري | او گوشت نمی‌خورد |
| موږ نه پوهېږو | ما نمی‌فهمیم |

## منفی کردن فعل‌های گذشته

| مثبت | منفی | فارسی |
|------|------|-------|
| لاړم | نه لاړم | رفتم / نرفتم |
| راغلم | نه راغلم | آمدم / نیامدم |
| وخوړم | ونه خوړم | خوردم / نخوردم |
| ولیدم | ونه لیدم | دیدم / ندیدم |

## مثال‌ها با فعل‌های گذشته

| پښتو | فارسی |
|------|-------|
| زه نه لاړم | من نرفتم |
| هغه نه راغی | او نیامد |
| ما ونه خوړه | من نخوردم |
| موږ ونه لیدل | ما ندیدیم |

## منفی کردن امری (نهی)

| مثبت | منفی | فارسی |
|------|------|-------|
| راشه | مه راځه | بیا / نیا |
| وخوره | مه خوره | بخور / نخور |
| ووایه | مه وایه | بگو / نگو |
| وکړه | مه کوه | بکن / نکن |

## مثال‌ها با نهی

| پښتو | فارسی |
|------|-------|
| مه ځه! | نرو! |
| مه کوه! | نکن! |
| مه ویرېږه! | نترس! |
| مه هېروه! | فراموش نکن! |

## کلمات منفی دیگر

| پښتو | فارسی |
|------|-------|
| هیڅ نه | هیچی نه |
| هیڅکله نه | هیچوقت نه |
| هیچا ته نه | به هیچکس نه |
| هیڅ ځای نه | هیچ جا نه |

## مکالمه نمونه

**احمد:** ته سبا راځې؟
**محمود:** نه، زه نه شم راتلی.
**احمد:** ولې نه راځې؟
**محمود:** زه کار لرم.
**احمد:** بل اونۍ؟
**محمود:** هو، بل اونۍ راځم.

> **نکته:** «نه» برای فعل‌های خبری و «مه» برای فعل‌های امری استفاده می‌شود.
`,hasPractice:!1},px={id:"future-tense",title:"زمان آینده",titlePashto:"راتلونکی مهال",difficulty:"medium",estimatedTime:"۳۰ دقیقه",content:`
# زمان آینده در پښتو

در پښتو، زمان آینده با استفاده از کلمه «به» قبل از فعل ساخته می‌شود.

## ساختار زمان آینده

**فاعل + به + فعل حال**

## گردان فعل رفتن در آینده

### غیررسمی

| ضمیر | پښتو | فارسی | تلفظ |
|------|------|-------|------|
| زه | به ځم | خواهم رفت | ba dzam |
| ته | به ځې | خواهی رفت | ba dze |
| هغه | به ځي | خواهد رفت | ba dzi |
| موږ | به ځو | خواهیم رفت | ba dzu |
| تاسو | به ځئ | خواهید رفت | ba dzey |
| هغوی | به ځي | خواهند رفت | ba dzi |

### رسمی

| ضمیر | پښتو | فارسی |
|------|------|-------|
| زه | به ځم | خواهم رفت |
| تاسو | به ځئ | خواهید رفت |
| هغه | به ځي | خواهد رفت |
| موږ | به ځو | خواهیم رفت |
| هغوی | به ځي | خواهند رفت |

## مثال‌ها با فعل‌های مختلف

| پښتو | فارسی |
|------|-------|
| زه به ځم | من خواهم رفت |
| زه به راځم | من خواهم آمد |
| زه به خورم | من خواهم خورد |
| زه به وینم | من خواهم دید |
| زه به کوم | من خواهم کرد |
| زه به وایم | من خواهم گفت |

## مثال‌ها در جمله

| پښتو | فارسی |
|------|-------|
| زه به سبا راځم | من فردا خواهم آمد |
| ته به کله راشې؟ | تو کی خواهی آمد؟ |
| هغه به کار کوي | او کار خواهد کرد |
| موږ به یوځای ځو | ما با هم خواهیم رفت |
| تاسو به څه وخورئ؟ | شما چه خواهید خورد؟ |
| هغوی به راشي | آنها خواهند آمد |

## جملات منفی در آینده

| پښتو | فارسی |
|------|-------|
| زه به نه ځم | من نخواهم رفت |
| ته به نه راځې؟ | تو نخواهی آمد؟ |
| هغه به نه کوي | او نخواهد کرد |
| موږ به نه خورو | ما نخواهیم خورد |
| هغوی به نه راشي | آنها نخواهند آمد |

## جملات سوالی در آینده

| پښتو | فارسی |
|------|-------|
| ته به راشې؟ | تو خواهی آمد؟ |
| کله به راشې؟ | کی خواهی آمد؟ |
| چېرته به ځې؟ | کجا خواهی رفت؟ |
| څه به وکړې؟ | چه خواهی کرد؟ |

## کلمات زمان آینده

| پښتو | فارسی |
|------|-------|
| سبا | فردا |
| بل اونۍ | هفته آینده |
| بله میاشت | ماه آینده |
| بل کال | سال آینده |
| وروسته | بعداً |
| ژر | به زودی |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| زه به ووینم | خواهم دید |
| به وګورو | خواهیم دید |
| به فکر وکړم | فکر خواهم کرد |
| به هڅه وکړم | تلاش خواهم کرد |
| انشاءالله به شي | انشاءالله خواهد شد |

## مکالمه نمونه

**احمد:** سبا څه به وکړې؟
**محمود:** زه به کندهار ته ځم.
**احمد:** کله به لاړ شې؟
**محمود:** سهار به لاړ شم.
**احمد:** کله به راشې؟
**محمود:** بله اونۍ به راشم.
**احمد:** ښه، په مخه دې ښه!
**محمود:** مننه، بیا به سره وینو!

> **نکته:** «به» همیشه قبل از فعل می‌آید و نشان‌دهنده آینده است.
`,hasPractice:!1},fx={id:"future-to-be",title:"خواهم بود (به یم)",titleFa:"خواهم بود (به یم)",titlePashto:"به یم",description:"فعل بودن در زمان آینده",difficulty:"medium",duration:"۲۵ دقیقه",content:[{type:"intro",title:"فعل بودن در آینده",text:'در این درس یاد می‌گیریم چگونه فعل "بودن" را در زمان آینده استفاده کنیم.'},{type:"conjugation",title:"گردان فعل بودن - آینده",conjugations:[{pronoun:"زه",pashto:"به یم",english:"I will be",example:"زه معلم به یم"},{pronoun:"ته",pashto:"به یې",english:"you will be",example:"ته معلم به یې"},{pronoun:"هغه",pashto:"به وي",english:"he/she will be",example:"هغه معلم به وي"},{pronoun:"موږ",pashto:"به یو",english:"we will be",example:"موږ معلمان به یو"},{pronoun:"تاسو",pashto:"به یاست",english:"you (pl) will be",example:"تاسو معلمان به یاست"},{pronoun:"هغوی",pashto:"به وي",english:"they will be",example:"هغوی معلمان به وي"}]},{type:"examples",title:"مثال‌های عملی",examples:[{pashto:"زه فردا خانه کې به یم",english:"I will be at home tomorrow",farsi:"من فردا در خانه خواهم بود"},{pashto:"ته کار کې به یې",english:"You will be at work",farsi:"تو در کار خواهی بود"},{pashto:"هغه بازار کې به وي",english:"He will be at the market",farsi:"او در بازار خواهد بود"},{pashto:"موږ مکتب کې به یو",english:"We will be at school",farsi:"ما در مدرسه خواهیم بود"}]},{type:"practice",title:"تمرین",exercises:[{question:"زه فردا کجا _____ ؟",options:["به یم","یم","وم"],answer:"به یم"},{question:"ته کار کې _____ ؟",options:["به یې","یې","وې"],answer:"به یې"},{question:"هغه خانه کې _____ ؟",options:["به وي","وي","یم"],answer:"به وي"}]}]},hx={id:"future-to-go",title:"خواهم رفت (به ځم)",titleFa:"خواهم رفت (به ځم)",titlePashto:"به ځم",description:"فعل رفتن در زمان آینده",difficulty:"medium",duration:"۲۵ دقیقه",content:[{type:"intro",title:"فعل رفتن در آینده",text:'در این درس یاد می‌گیریم چگونه فعل "رفتن" را در زمان آینده استفاده کنیم.'},{type:"conjugation",title:"گردان فعل رفتن - آینده",conjugations:[{pronoun:"زه",pashto:"به ځم",english:"I will go",example:"زه بازار ته به ځم"},{pronoun:"ته",pashto:"به ځې",english:"you will go",example:"ته بازار ته به ځې"},{pronoun:"هغه",pashto:"به ځي",english:"he/she will go",example:"هغه بازار ته به ځي"},{pronoun:"موږ",pashto:"به ځو",english:"we will go",example:"موږ بازار ته به ځو"},{pronoun:"تاسو",pashto:"به ځئ",english:"you (pl) will go",example:"تاسو بازار ته به ځئ"},{pronoun:"هغوی",pashto:"به ځي",english:"they will go",example:"هغوی بازار ته به ځي"}]},{type:"examples",title:"مثال‌های عملی",examples:[{pashto:"زه فردا کابل ته به ځم",english:"I will go to Kabul tomorrow",farsi:"من فردا به کابل خواهم رفت"},{pashto:"ته مکتب ته به ځې",english:"You will go to school",farsi:"تو به مدرسه خواهی رفت"},{pashto:"هغه کار ته به ځي",english:"He will go to work",farsi:"او به کار خواهد رفت"},{pashto:"موږ بازار ته به ځو",english:"We will go to the market",farsi:"ما به بازار خواهیم رفت"}]},{type:"practice",title:"تمرین",exercises:[{question:"زه فردا کابل ته _____ ؟",options:["به ځم","ځم","لاړم"],answer:"به ځم"},{question:"ته مکتب ته _____ ؟",options:["به ځې","ځې","لاړې"],answer:"به ځې"},{question:"هغه کار ته _____ ؟",options:["به ځي","ځي","لاړ"],answer:"به ځي"}]}]},dx={id:"future-to-come",title:"خواهم آمد (به راځم)",titleFa:"خواهم آمد (به راځم)",titlePashto:"به راځم",description:"فعل آمدن در زمان آینده",difficulty:"medium",duration:"۲۵ دقیقه",content:[{type:"intro",title:"فعل آمدن در آینده",text:'در این درس یاد می‌گیریم چگونه فعل "آمدن" را در زمان آینده استفاده کنیم.'},{type:"conjugation",title:"گردان فعل آمدن - آینده",conjugations:[{pronoun:"زه",pashto:"به راځم",english:"I will come",example:"زه فردا به راځم"},{pronoun:"ته",pashto:"به راځې",english:"you will come",example:"ته فردا به راځې"},{pronoun:"هغه",pashto:"به راځي",english:"he/she will come",example:"هغه فردا به راځي"},{pronoun:"موږ",pashto:"به راځو",english:"we will come",example:"موږ فردا به راځو"},{pronoun:"تاسو",pashto:"به راځئ",english:"you (pl) will come",example:"تاسو فردا به راځئ"},{pronoun:"هغوی",pashto:"به راځي",english:"they will come",example:"هغوی فردا به راځي"}]},{type:"examples",title:"مثال‌های عملی",examples:[{pashto:"زه فردا خانه ته به راځم",english:"I will come home tomorrow",farsi:"من فردا به خانه خواهم آمد"},{pashto:"ته کار ته به راځې",english:"You will come to work",farsi:"تو به کار خواهی آمد"},{pashto:"هغه مهمانۍ ته به راځي",english:"He will come to the party",farsi:"او به مهمانی خواهد آمد"},{pashto:"موږ مکتب ته به راځو",english:"We will come to school",farsi:"ما به مدرسه خواهیم آمد"}]},{type:"practice",title:"تمرین",exercises:[{question:"زه فردا _____ ؟",options:["به راځم","راځم","راغلم"],answer:"به راځم"},{question:"ته خانه ته _____ ؟",options:["به راځې","راځې","راغلې"],answer:"به راځې"},{question:"هغه مهمانۍ ته _____ ؟",options:["به راځي","راځي","راغل"],answer:"به راځي"}]}]},mx={id:"future-to-eat",title:"خواهم خورد (به خورم)",titleFa:"خواهم خورد (به خورم)",titlePashto:"به خورم",description:"فعل خوردن در زمان آینده",difficulty:"medium",duration:"۲۵ دقیقه",content:[{type:"intro",title:"فعل خوردن در آینده",text:'در این درس یاد می‌گیریم چگونه فعل "خوردن" را در زمان آینده استفاده کنیم.'},{type:"conjugation",title:"گردان فعل خوردن - آینده",conjugations:[{pronoun:"زه",pashto:"به خورم",english:"I will eat",example:"زه فردا به خورم"},{pronoun:"ته",pashto:"به خوري",english:"you will eat",example:"ته فردا به خوري"},{pronoun:"هغه",pashto:"به خوري",english:"he/she will eat",example:"هغه فردا به خوري"},{pronoun:"موږ",pashto:"به خوریو",english:"we will eat",example:"موږ فردا به خوریو"},{pronoun:"تاسو",pashto:"به خورئ",english:"you (pl) will eat",example:"تاسو فردا به خورئ"},{pronoun:"هغوی",pashto:"به خوري",english:"they will eat",example:"هغوی فردا به خوري"}]},{type:"examples",title:"مثال‌های عملی",examples:[{pashto:"زه فردا غذا به خورم",english:"I will eat food tomorrow",farsi:"من فردا غذا خواهم خورد"},{pashto:"ته نان به خوري",english:"You will eat bread",farsi:"تو نان خواهی خورد"},{pashto:"هغه میوه به خوري",english:"He will eat fruit",farsi:"او میوه خواهد خورد"},{pashto:"موږ ناشتا به خوریو",english:"We will eat breakfast",farsi:"ما صبحانه خواهیم خورد"}]},{type:"practice",title:"تمرین",exercises:[{question:"زه فردا _____ ؟",options:["به خورم","خورم","وخوړم"],answer:"به خورم"},{question:"ته نان _____ ؟",options:["به خوري","خوري","وخوړې"],answer:"به خوري"},{question:"هغه میوه _____ ؟",options:["به خوري","خوري","وخوړ"],answer:"به خوري"}]}]},gx={id:"future-to-drink",title:"خواهم نوشید (به څښم)",titleFa:"خواهم نوشید (به څښم)",titlePashto:"به څښم",description:"فعل نوشیدن در زمان آینده",difficulty:"medium",duration:"۲۵ دقیقه",content:[{type:"intro",title:"فعل نوشیدن در آینده",text:'در این درس یاد می‌گیریم چگونه فعل "نوشیدن" را در زمان آینده استفاده کنیم.'},{type:"conjugation",title:"گردان فعل نوشیدن - آینده",conjugations:[{pronoun:"زه",pashto:"به څښم",english:"I will drink",example:"زه آب به څښم"},{pronoun:"ته",pashto:"به څښي",english:"you will drink",example:"ته آب به څښي"},{pronoun:"هغه",pashto:"به څښي",english:"he/she will drink",example:"هغه آب به څښي"},{pronoun:"موږ",pashto:"به څښیو",english:"we will drink",example:"موږ آب به څښیو"},{pronoun:"تاسو",pashto:"به څښئ",english:"you (pl) will drink",example:"تاسو آب به څښئ"},{pronoun:"هغوی",pashto:"به څښي",english:"they will drink",example:"هغوی آب به څښي"}]},{type:"examples",title:"مثال‌های عملی",examples:[{pashto:"زه چای به څښم",english:"I will drink tea",farsi:"من چای خواهم نوشید"},{pashto:"ته آب به څښي",english:"You will drink water",farsi:"تو آب خواهی نوشید"},{pashto:"هغه شیر به څښي",english:"He will drink milk",farsi:"او شیر خواهد نوشید"},{pashto:"موږ شربت به څښیو",english:"We will drink juice",farsi:"ما آب میوه خواهیم نوشید"}]},{type:"practice",title:"تمرین",exercises:[{question:"زه چای _____ ؟",options:["به څښم","څښم","وڅښم"],answer:"به څښم"},{question:"ته آب _____ ؟",options:["به څښي","څښي","وڅښې"],answer:"به څښي"},{question:"هغه شیر _____ ؟",options:["به څښي","څښي","وڅښ"],answer:"به څښي"}]}]},yx={id:"future-to-do",title:"خواهم کرد (به کوم)",titleFa:"خواهم کرد (به کوم)",titlePashto:"به کوم",description:"فعل کردن در زمان آینده",difficulty:"medium",duration:"۲۵ دقیقه",content:[{type:"intro",title:"فعل کردن در آینده",text:'در این درس یاد می‌گیریم چگونه فعل "کردن" را در زمان آینده استفاده کنیم.'},{type:"conjugation",title:"گردان فعل کردن - آینده",conjugations:[{pronoun:"زه",pashto:"به کوم",english:"I will do",example:"زه کار به کوم"},{pronoun:"ته",pashto:"به کوي",english:"you will do",example:"ته کار به کوي"},{pronoun:"هغه",pashto:"به کوي",english:"he/she will do",example:"هغه کار به کوي"},{pronoun:"موږ",pashto:"به کویو",english:"we will do",example:"موږ کار به کویو"},{pronoun:"تاسو",pashto:"به کوئ",english:"you (pl) will do",example:"تاسو کار به کوئ"},{pronoun:"هغوی",pashto:"به کوي",english:"they will do",example:"هغوی کار به کوي"}]},{type:"examples",title:"مثال‌های عملی",examples:[{pashto:"زه فردا کار به کوم",english:"I will do work tomorrow",farsi:"من فردا کار خواهم کرد"},{pashto:"ته تکالیف به کوي",english:"You will do homework",farsi:"تو تکالیف خواهی کرد"},{pashto:"هغه ورزش به کوي",english:"He will do exercise",farsi:"او ورزش خواهد کرد"},{pashto:"موږ پروژه به کویو",english:"We will do a project",farsi:"ما پروژه خواهیم کرد"}]},{type:"practice",title:"تمرین",exercises:[{question:"زه فردا _____ ؟",options:["به کوم","کوم","وکړم"],answer:"به کوم"},{question:"ته تکالیف _____ ؟",options:["به کوي","کوي","وکړې"],answer:"به کوي"},{question:"هغه ورزش _____ ؟",options:["به کوي","کوي","وکړ"],answer:"به کوي"}]}]},bx={id:"future-to-pour",title:"به اچم (آینده)",titleFa:"خواهم ریخت (به اچم)",titlePashto:"به اچم",description:"فعل اچول (ریختن) در زمان آینده",difficulty:"medium",duration:"۲۵ دقیقه",content:[{type:"intro",title:"فعل اچول در آینده",text:'در این درس یاد می‌گیریم چگونه فعل "اچول" (ریختن) را در زمان آینده استفاده کنیم. برای آینده از "به" + فعل استفاده می‌شود.'},{type:"conjugation",title:"گردان فعل اچول - آینده",conjugations:[{pronoun:"زه",pashto:"به اچم",english:"I will pour",example:"زه برایت چای به اچم"},{pronoun:"ته",pashto:"به اچې",english:"you will pour",example:"ته آب به اچې"},{pronoun:"هغه",pashto:"به اچي",english:"he/she will pour",example:"هغه شیر به اچي"},{pronoun:"موږ",pashto:"به اچو",english:"we will pour",example:"موږ چای به اچو"},{pronoun:"تاسو",pashto:"به اچئ",english:"you (pl) will pour",example:"تاسو آب به اچئ"},{pronoun:"هغوی",pashto:"به اچي",english:"they will pour",example:"هغوی شربت به اچي"}]},{type:"examples",title:"مثال‌های عملی",examples:[{pashto:"زه فردا برایت چای به اچم",english:"I will pour tea for you tomorrow",farsi:"من فردا برایت چای خواهم ریخت"},{pashto:"ته آب به اچې",english:"You will pour water",farsi:"تو آب خواهی ریخت"},{pashto:"هغه شیر به اچي",english:"He will pour milk",farsi:"او شیر خواهد ریخت"},{pashto:"موږ چای به اچو",english:"We will pour tea",farsi:"ما چای خواهیم ریخت"}]},{type:"practice",title:"تمرین",exercises:[{question:"زه فردا برایت چای _____ ؟",options:["به اچم","اچم","واچم"],answer:"به اچم"},{question:"ته آب _____ ؟",options:["به اچې","اچې","واچې"],answer:"به اچې"},{question:"هغه شیر _____ ؟",options:["به اچي","اچي","واچ"],answer:"به اچي"}]}]},xx={id:"imperative",title:"فعل امری",titlePashto:"امري فعل",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# فعل امری در پښتو

فعل امری برای دستور دادن، درخواست کردن یا پیشنهاد دادن استفاده می‌شود.

## ساختار فعل امری

### غیررسمی (ته - تو)

برای «ته» (تو)، از ریشه فعل + پسوند «ه» استفاده می‌شود.

### رسمی (تاسو - شما)

برای «تاسو» (شما)، از ریشه فعل + پسوند «ئ» استفاده می‌شود.

## فعل‌های امری رایج

| مصدر | غیررسمی | رسمی | فارسی |
|------|---------|------|-------|
| تلل | لاړ شه | لاړ شئ | برو |
| راتلل | راشه | راشئ | بیا |
| کول | وکړه | وکړئ | بکن |
| خوړل | وخوره | وخورئ | بخور |
| څښل | وڅښه | وڅښئ | بنوش |
| لیدل | وګوره | وګورئ | ببین |
| اورېدل | واوره | واورئ | بشنو |
| ویل | ووایه | ووایئ | بگو |
| کېناستل | کېنه | کېنئ | بنشین |
| پاڅېدل | پاڅه | پاڅئ | بلند شو |

## مثال‌ها

### غیررسمی (به دوست یا کوچکتر)

| پښتو | فارسی |
|------|-------|
| راشه! | بیا! |
| کېنه! | بنشین! |
| وخوره! | بخور! |
| وګوره! | ببین! |
| واوره! | بشنو! |
| ووایه! | بگو! |

### رسمی (به بزرگتر یا غریبه)

| پښتو | فارسی |
|------|-------|
| راشئ! | بیایید! |
| کېنئ! | بنشینید! |
| وخورئ! | بخورید! |
| وګورئ! | ببینید! |
| واورئ! | بشنوید! |
| ووایئ! | بگویید! |

## امری منفی (نهی)

برای منفی کردن از «مه» استفاده می‌شود:

| مثبت | منفی | فارسی |
|------|------|-------|
| راشه | مه راځه | نیا |
| وخوره | مه خوره | نخور |
| ووایه | مه وایه | نگو |
| وکړه | مه کوه | نکن |
| لاړ شه | مه ځه | نرو |

## مثال‌های منفی

| پښتو | فارسی |
|------|-------|
| مه ځه! | نرو! |
| مه کوه! | نکن! |
| مه وایه! | نگو! |
| مه خوره! | نخور! |
| مه ویرېږه! | نترس! |

## عبارات مودبانه

| پښتو | فارسی |
|------|-------|
| که مهربانی وکړئ | لطفاً |
| راشئ، کېنئ | بفرمایید، بنشینید |
| چای وڅښئ | چای بنوشید |
| ډوډۍ وخورئ | غذا بخورید |
| تشریف راوړئ | بفرمایید |

## امری با «راځه» (بیا)

| پښتو | فارسی |
|------|-------|
| راځه، لاړ شو! | بیا، برویم! |
| راځه، ډوډۍ وخورو! | بیا، غذا بخوریم! |
| راځه، وګورو! | بیا، ببینیم! |
| راځه، خبرې وکړو! | بیا، صحبت کنیم! |

## مکالمه نمونه

**کوربه:** سلام! راشئ، کېنئ!
**میلمه:** مننه!
**کوربه:** چای وڅښئ!
**میلمه:** ډېره مننه!
**کوربه:** ډوډۍ هم وخورئ!
**میلمه:** نه مننه، موړ یم.
**کوربه:** یو څه خو وخورئ!
**میلمه:** ښه، لږ وخورم.

> **نکته:** در پښتو، امری رسمی با «ئ» و غیررسمی با «ه» پایان می‌یابد.
`,hasPractice:!1},vx={id:"imperative-formal",title:"امری رسمی",titlePashto:"رسمي امري",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# امری رسمی در پښتو

در موقعیت‌های رسمی یا با بزرگترها، از شکل رسمی فعل امری استفاده می‌شود.

## تفاوت رسمی و غیررسمی

| غیررسمی (ته) | رسمی (تاسو) | فارسی |
|-------------|-------------|-------|
| راشه | راشئ | بیا / بیایید |
| کېنه | کېنئ | بنشین / بنشینید |
| وخوره | وخورئ | بخور / بخورید |
| وڅښه | وڅښئ | بنوش / بنوشید |
| وګوره | وګورئ | ببین / ببینید |
| ووایه | ووایئ | بگو / بگویید |
| واوره | واورئ | بشنو / بشنوید |
| پاڅه | پاڅئ | بلند شو / بلند شوید |

## عبارات رسمی مهمان‌نوازی

| پښتو | فارسی |
|------|-------|
| تشریف راوړئ | بفرمایید |
| راشئ، کېنئ | بیایید، بنشینید |
| چای وڅښئ | چای بنوشید |
| ډوډۍ وخورئ | غذا بخورید |
| آرام واخلئ | استراحت کنید |
| خپل کور دی | خانه خودتان است |

## درخواست مودبانه

| پښتو | فارسی |
|------|-------|
| که مهربانی وکړئ | لطفاً |
| که زحمت نه وي | اگر زحمت نیست |
| که ممکنه وي | اگر ممکن است |
| مهرباني وکړئ | لطف کنید |

## مثال‌ها در جمله

| پښتو | فارسی |
|------|-------|
| مهرباني وکړئ، کېنئ | لطفاً بنشینید |
| که زحمت نه وي، دروازه خلاصه کړئ | اگر زحمت نیست، در را باز کنید |
| تشریف راوړئ، چای تیار دی | بفرمایید، چای آماده است |
| که ممکنه وي، سبا راشئ | اگر ممکن است، فردا بیایید |

## امری منفی رسمی

| مثبت | منفی | فارسی |
|------|------|-------|
| راشئ | مه راځئ | نیایید |
| کېنئ | مه کېنئ | ننشینید |
| وخورئ | مه خورئ | نخورید |
| ووایئ | مه وایئ | نگویید |
| وکړئ | مه کوئ | نکنید |

## عبارات احترام‌آمیز

| پښتو | فارسی |
|------|-------|
| ستاسو مهرباني | لطف شماست |
| ډېره مننه | خیلی ممنون |
| بخښنه غواړم | ببخشید |
| معذرت غواړم | معذرت می‌خواهم |
| خدای مو په امان | خدا نگهدار |

## موقعیت‌های استفاده

### در مهمانی
| پښتو | فارسی |
|------|-------|
| راشئ، کور ته ښه راغلاست | بیایید، خوش آمدید |
| کېنئ، ستړي مه شئ | بنشینید، خسته نباشید |
| چای وڅښئ | چای بنوشید |
| نور وخورئ | بیشتر بخورید |

### در اداره
| پښتو | فارسی |
|------|-------|
| کېنئ، څه خدمت وکړم؟ | بنشینید، چه خدمتی کنم؟ |
| فورمه ډکه کړئ | فرم را پر کنید |
| دلته لاسلیک وکړئ | اینجا امضا کنید |
| سبا بیا راشئ | فردا دوباره بیایید |

## مکالمه نمونه

**منشي:** سلام علیکم! تشریف راوړئ.
**میلمه:** و علیکم السلام!
**منشي:** کېنئ، څه خدمت وکړم؟
**میلمه:** زه غواړم مدیر صاحب سره ووینم.
**منشي:** مهرباني وکړئ، لږ انتظار وکړئ.
**میلمه:** ښه، مننه.
**منشي:** چای وڅښئ؟
**میلمه:** هو، مننه.

> **نکته:** در پښتو، استفاده از شکل رسمی نشان‌دهنده احترام است و در موقعیت‌های رسمی ضروری است.
`,hasPractice:!1},wx={id:"requests",title:"درخواست کردن",titlePashto:"غوښتنه کول",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# درخواست کردن در پښتو

یادگیری نحوه درخواست مودبانه یکی از مهم‌ترین مهارت‌های زبانی است.

## عبارات درخواست

### غیررسمی

| پښتو | فارسی |
|------|-------|
| راکړه | بده |
| راوړه | بیاور |
| مرسته وکړه | کمک کن |
| ووایه | بگو |
| وښایه | نشان بده |

### رسمی

| پښتو | فارسی |
|------|-------|
| راکړئ | بدهید |
| راوړئ | بیاورید |
| مرسته وکړئ | کمک کنید |
| ووایئ | بگویید |
| وښایئ | نشان بدهید |

## عبارات مودبانه

| پښتو | فارسی |
|------|-------|
| که مهربانی وکړئ | لطفاً |
| که زحمت نه وي | اگر زحمت نیست |
| که ممکنه وي | اگر ممکن است |
| که وخت لرئ | اگر وقت دارید |
| که کولی شئ | اگر می‌توانید |

## درخواست چیزی

| پښتو | فارسی |
|------|-------|
| اوبه راکړئ | آب بدهید |
| چای راوړئ | چای بیاورید |
| قلم راکړئ | قلم بدهید |
| دا راکړئ | این را بدهید |
| هغه راکړئ | آن را بدهید |

## درخواست کمک

| پښتو | فارسی |
|------|-------|
| مرسته وکړئ | کمک کنید |
| ما سره مرسته وکړئ | به من کمک کنید |
| که کولی شئ، مرسته وکړئ | اگر می‌توانید، کمک کنید |
| زه ستاسو مرسته غواړم | من کمک شما را می‌خواهم |

## درخواست اجازه

| پښتو | فارسی |
|------|-------|
| کولی شم...؟ | می‌توانم...؟ |
| اجازه ده...؟ | اجازه است...؟ |
| شاید...؟ | شاید...؟ |
| ممکنه ده...؟ | ممکن است...؟ |

## مثال‌های درخواست اجازه

| پښتو | فارسی |
|------|-------|
| کولی شم کېنم؟ | می‌توانم بنشینم؟ |
| اجازه ده لاړ شم؟ | اجازه است بروم؟ |
| کولی شم پوښتنه وکړم؟ | می‌توانم سوال کنم؟ |
| ممکنه ده دا واخلم؟ | ممکن است این را بردارم؟ |

## پاسخ به درخواست

### مثبت

| پښتو | فارسی |
|------|-------|
| هو، البته | بله، البته |
| ولې نه | چرا که نه |
| هیڅ نه | خواهش می‌کنم |
| په خوښۍ سره | با کمال میل |

### منفی (مودبانه)

| پښتو | فارسی |
|------|-------|
| بخښنه، نه شم کولی | ببخشید، نمی‌توانم |
| معذرت، اوس نه شم کولی | معذرت، الان نمی‌توانم |
| افسوس، ممکنه نه ده | متاسفانه، ممکن نیست |

## مکالمه نمونه ۱ - در رستوران

**میلمه:** سلام! مینو راکړئ.
**ویټر:** دا واخلئ.
**میلمه:** مننه. یو پلاو راوړئ.
**ویټر:** نور څه غواړئ؟
**میلمه:** اوبه هم راوړئ.
**ویټر:** ښه، اوس راوړم.

## مکالمه نمونه ۲ - درخواست کمک

**احمد:** بخښنه، کولی شئ مرسته وکړئ؟
**محمود:** هو، څه خدمت وکړم؟
**احمد:** زه لاره ورکه کړې. بازار چېرته دی؟
**محمود:** مستقیم لاړ شئ، بیا ښي لاس ته.
**احمد:** ډېره مننه!
**محمود:** هیڅ نه!

> **نکته:** در پښتو، استفاده از «که مهربانی وکړئ» درخواست را بسیار مودبانه می‌کند.
`,hasPractice:!1},kx={id:"conv-shopping",title:"در بازار",titlePashto:"په بازار کې",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# مکالمه در بازار

یادگیری خرید کردن در بازار یکی از مهم‌ترین مهارت‌های مکالمه است.

## واژگان بازار

| پښتو | فارسی |
|------|-------|
| بازار | بازار |
| دوکان | دکان |
| پلورونکی | فروشنده |
| پېرودونکی | خریدار |
| بیه | قیمت |
| ارزان | ارزان |
| ګران | گران |
| پیسې | پول |

## عبارات خرید

| پښتو | فارسی |
|------|-------|
| دا څومره دی؟ | این چقدر است؟ |
| بیه یې څه ده؟ | قیمتش چند است؟ |
| ډېر ګران دی | خیلی گران است |
| لږ ارزان کړئ | کمی ارزان کنید |
| دا راکړئ | این را بدهید |
| نور څه لرئ؟ | دیگر چه دارید؟ |

## اعداد و پول

| پښتو | فارسی |
|------|-------|
| سل افغانۍ | صد افغانی |
| دوه سوه افغانۍ | دوصد افغانی |
| زر افغانۍ | هزار افغانی |
| پنځه زره افغانۍ | پنج هزار افغانی |

## مکالمه ۱ - خرید میوه

**پېرودونکی:** سلام علیکم!
**پلورونکی:** و علیکم السلام! څه خدمت وکړم؟
**پېرودونکی:** سیب لرئ؟
**پلورونکی:** هو، ډېر ښه سیب لرم.
**پېرودونکی:** کیلو یې څومره دی؟
**پلورونکی:** کیلو یې پنځوس افغانۍ دی.
**پېرودونکی:** دوه کیلو راکړئ.
**پلورونکی:** نور څه غواړئ؟
**پېرودونکی:** انګور هم راکړئ، یو کیلو.
**پلورونکی:** ټول یې سل پنځوس افغانۍ شول.
**پېرودونکی:** دا واخلئ.
**پلورونکی:** مننه، بیا راشئ!

## مکالمه ۲ - خرید لباس

**پېرودونکی:** سلام! دا کمیس څومره دی؟
**پلورونکی:** سلام! دا دوه زره افغانۍ دی.
**پېرودونکی:** ډېر ګران دی! لږ ارزان کړئ.
**پلورونکی:** ستاسو لپاره زر اته سوه.
**پېرودونکی:** زر پنځه سوه؟
**پلورونکی:** ښه، زر پنځه سوه.
**پېرودونکی:** ښه، دا واخلم.

## عبارات چانه زدن

| پښتو | فارسی |
|------|-------|
| ډېر ګران دی | خیلی گران است |
| لږ ارزان کړئ | کمی ارزان کنید |
| آخري بیه څه ده؟ | آخرین قیمت چند است؟ |
| دا نه اخلم | این را نمی‌خرم |
| بله دوکان ته ځم | به دکان دیگر می‌روم |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| دا ښه دی؟ | این خوب است؟ |
| بل رنګ لرئ؟ | رنگ دیگر دارید؟ |
| لوی سایز لرئ؟ | سایز بزرگ دارید؟ |
| دا امتحان کړم؟ | این را امتحان کنم؟ |
| پیسې نه لرم | پول ندارم |

> **نکته:** در بازارهای افغانستان، چانه زدن معمول است. از «لږ ارزان کړئ» استفاده کنید.
`,hasPractice:!1},jx={id:"conv-restaurant",title:"در رستوران",titlePashto:"په رستورانت کې",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# مکالمه در رستوران

یادگیری سفارش غذا در رستوران.

## واژگان رستوران

| پښتو | فارسی |
|------|-------|
| رستورانت | رستوران |
| مینو | منو |
| ډوډۍ | غذا |
| چای | چای |
| اوبه | آب |
| بل | صورتحساب |
| ویټر | گارسون |

## غذاهای رایج

| پښتو | فارسی |
|------|-------|
| پلاو | پلو |
| کباب | کباب |
| منتو | منتو |
| بولانی | بولانی |
| آشک | آشک |
| شوروا | سوپ |
| سلاد | سالاد |

## عبارات سفارش

| پښتو | فارسی |
|------|-------|
| مینو راکړئ | منو بدهید |
| څه لرئ؟ | چه دارید؟ |
| زه ... غواړم | من ... می‌خواهم |
| دا راوړئ | این را بیاورید |
| بل راوړئ | صورتحساب بیاورید |

## مکالمه ۱ - سفارش غذا

**ویټر:** سلام علیکم! تشریف راوړئ.
**میلمه:** و علیکم السلام!
**ویټر:** مینو واخلئ.
**میلمه:** مننه. نن څه ښه لرئ؟
**ویټر:** نن کباب ډېر ښه دی.
**میلمه:** ښه، یو پلیټ کباب راوړئ.
**ویټر:** نور څه غواړئ؟
**میلمه:** سلاد هم راوړئ.
**ویټر:** د څښلو لپاره؟
**میلمه:** یو شین چای.
**ویټر:** ښه، اوس راوړم.

## مکالمه ۲ - پرداخت

**میلمه:** بل راوړئ.
**ویټر:** دا واخلئ. ټول پنځه سوه افغانۍ شول.
**میلمه:** دا واخلئ.
**ویټر:** مننه! بیا راشئ!
**میلمه:** ډوډۍ ډېره خوندوره وه!
**ویټر:** ستاسو مهرباني!

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| ډوډۍ خوندوره وه | غذا خوشمزه بود |
| نور راوړئ | بیشتر بیاورید |
| بس دی، مننه | کافی است، ممنون |
| زه موړ شوم | من سیر شدم |
| اوبه راوړئ | آب بیاورید |

## سوالات رایج

| پښتو | فارسی |
|------|-------|
| دا څه دی؟ | این چیست؟ |
| دا تریخ دی؟ | این تند است؟ |
| غوښه لري؟ | گوشت دارد؟ |
| څومره وخت نیسي؟ | چقدر طول می‌کشد؟ |

## پاسخ‌های ویټر

| پښتو | فارسی |
|------|-------|
| اوس راوړم | الان می‌آورم |
| لږ صبر وکړئ | کمی صبر کنید |
| نور څه غواړئ؟ | دیگر چه می‌خواهید؟ |
| نوش جان! | نوش جان! |

> **نکته:** در رستوران‌های افغانستان، معمولاً چای رایگان است و بعد از غذا سرو می‌شود.
`,hasPractice:!1},Nx={id:"conv-taxi",title:"در تاکسی",titlePashto:"په ټکسي کې",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# مکالمه در تاکسی

یادگیری نحوه استفاده از تاکسی در افغانستان.

## واژگان حمل و نقل

| پښتو | فارسی |
|------|-------|
| ټکسي | تاکسی |
| موټر | موتر |
| دریور | راننده |
| کرایه | کرایه |
| لاره | راه |
| چوک | چهارراه |
| ایستګاه | ایستگاه |

## عبارات تاکسی

| پښتو | فارسی |
|------|-------|
| ټکسي! | تاکسی! |
| ... ته ځې؟ | به ... می‌روی؟ |
| کرایه څومره ده؟ | کرایه چقدر است؟ |
| دلته ودرېږه | اینجا بایست |
| زر لاړ شه | زود برو |
| ورو لاړ شه | آهسته برو |

## مکالمه ۱ - گرفتن تاکسی

**مسافر:** ټکسي! بازار ته ځې؟
**دریور:** هو، کېنئ.
**مسافر:** کرایه څومره ده؟
**دریور:** پنځوس افغانۍ.
**مسافر:** ډېره ده، دېرش کړه.
**دریور:** ښه، څلوېښت.
**مسافر:** ښه، لاړ شه.

## مکالمه ۲ - در مسیر

**مسافر:** دا لاره ولې؟
**دریور:** هغه لاره بنده ده.
**مسافر:** څومره وخت نیسي؟
**دریور:** لس دقیقې.
**مسافر:** ښه.
...
**مسافر:** دلته ودرېږه!
**دریور:** دلته؟
**مسافر:** هو، دا واخله.
**دریور:** مننه!

## جهت‌ها

| پښتو | فارسی |
|------|-------|
| مستقیم | مستقیم |
| ښي لاس ته | به راست |
| کیڼ لاس ته | به چپ |
| شاته | عقب |
| مخکې | جلو |

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| دلته ودرېږه | اینجا بایست |
| لږ مخکې | کمی جلوتر |
| هغه چوک کې | در آن چهارراه |
| د ... مخکې | جلوی ... |
| زر لاړ شه | زود برو |
| ورو لاړ شه | آهسته برو |
| AC چالان کړه | کولر را روشن کن |

## سوالات رایج

| پښتو | فارسی |
|------|-------|
| څومره لرې ده؟ | چقدر دور است؟ |
| څومره وخت نیسي؟ | چقدر طول می‌کشد؟ |
| دا سمه لاره ده؟ | این راه درست است؟ |
| رسېدو؟ | رسیدیم؟ |

## مکالمه ۳ - پرسیدن آدرس

**مسافر:** ته دا ځای پېژنې؟
**دریور:** کوم ځای؟
**مسافر:** شهنواز هوټل.
**دریور:** هو، پوهېږم. کېنئ.
**مسافر:** مننه.

> **نکته:** در افغانستان، معمولاً قبل از سوار شدن قیمت را توافق کنید.
`,hasPractice:!1},zx={id:"conv-phone",title:"مکالمه تلفنی",titlePashto:"تلیفوني خبرې",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# مکالمه تلفنی در پښتو

یادگیری نحوه صحبت کردن در تلفن.

## واژگان تلفن

| پښتو | فارسی |
|------|-------|
| تلیفون | تلفن |
| موبایل | موبایل |
| زنګ | زنگ |
| نمبر | شماره |
| پیغام | پیام |
| مسج | پیامک |

## عبارات تلفنی

| پښتو | فارسی |
|------|-------|
| الو | الو |
| څوک یې؟ | کی هستی؟ |
| زه ... یم | من ... هستم |
| ... شته؟ | ... هست؟ |
| لږ صبر وکړئ | کمی صبر کنید |
| بیا زنګ ووهه | دوباره زنگ بزن |

## مکالمه ۱ - زنگ زدن به دوست

**احمد:** الو؟
**محمود:** الو، سلام! زه محمود یم.
**احمد:** سلام محمود! څنګه یې؟
**محمود:** ښه یم، مننه. ته څنګه یې؟
**احمد:** زه هم ښه یم.
**محمود:** نن ماښام وخت لرې؟
**احمد:** هو، ولې؟
**محمود:** راځه چای وڅښو.
**احمد:** ښه، چېرته؟
**محمود:** زما کور ته راشه.
**احمد:** ښه، کله راشم؟
**محمود:** شپږ بجې.
**احمد:** ښه، بیا وینو!

## مکالمه ۲ - زنگ زدن به اداره

**منشي:** الو، سلام علیکم!
**زنګ وهونکی:** و علیکم السلام! مدیر صاحب شته؟
**منشي:** څوک یاست؟
**زنګ وهونکی:** زه احمد یم، له کندهاره.
**منشي:** لږ صبر وکړئ...
**منشي:** بخښنه، مدیر صاحب په غونډه کې دی.
**زنګ وهونکی:** کله خلاصېږي؟
**منشي:** یوه ساعت وروسته.
**زنګ وهونکی:** ښه، بیا زنګ وهم.
**منشي:** پیغام پرېږدئ؟
**زنګ وهونکی:** هو، ووایئ چې احمد زنګ وهلی و.
**منشي:** ښه، ووایم.
**زنګ وهونکی:** مننه، خدای پامان!

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| غږ نه اورم | صدا نمی‌شنوم |
| لوړ خبرې وکړه | بلندتر صحبت کن |
| لاین خراب دی | خط خراب است |
| بیا زنګ ووهه | دوباره زنگ بزن |
| زه بیا زنګ وهم | من دوباره زنگ می‌زنم |
| پیغام پرېږده | پیام بگذار |

## سوالات تلفنی

| پښتو | فارسی |
|------|-------|
| څوک یې؟ | کی هستی؟ |
| له کومه زنګ وهې؟ | از کجا زنگ می‌زنی؟ |
| ... شته؟ | ... هست؟ |
| کله راځې؟ | کی می‌آیی؟ |
| چېرته یې؟ | کجایی؟ |

## پایان مکالمه

| پښتو | فارسی |
|------|-------|
| ښه، بیا وینو | خوب، بعداً می‌بینمت |
| خدای پامان | خداحافظ |
| بیا زنګ وهه | دوباره زنگ بزن |
| مننه چې زنګ وهلی | ممنون که زنگ زدی |

> **نکته:** در پښتو، «الو» برای شروع مکالمه تلفنی استفاده می‌شود.
`,hasPractice:!1},Sx={id:"conv-doctor",title:"در مطب داکتر",titlePashto:"د داکتر کلینیک کې",difficulty:"hard",estimatedTime:"۳۰ دقیقه",content:`
# مکالمه در مطب داکتر

یادگیری نحوه صحبت با داکتر درباره مشکلات صحی.

## واژگان صحی

| پښتو | فارسی |
|------|-------|
| داکتر | داکتر |
| ناروغ | مریض |
| ناروغي | بیماری |
| درد | درد |
| دوا | دوا |
| نسخه | نسخه |
| کلینیک | کلینیک |
| شفاخانه | بیمارستان |

## اعضای بدن

| پښتو | فارسی |
|------|-------|
| سر | سر |
| خېټه | شکم |
| زړه | قلب |
| سینه | سینه |
| ملا | کمر |
| لاس | دست |
| پښه | پا |
| سترګه | چشم |
| غوږ | گوش |
| ستونی | گلو |

## علائم بیماری

| پښتو | فارسی |
|------|-------|
| سر مې خوږي | سرم درد می‌کند |
| تبه لرم | تب دارم |
| ټوخی لرم | سرفه دارم |
| زکام لرم | سرماخوردگی دارم |
| خېټه مې خوږي | شکمم درد می‌کند |
| ستړی یم | خسته‌ام |
| سرګرځي | سرگیجه دارم |

## مکالمه ۱ - ویزیت داکتر

**داکتر:** سلام علیکم! کېنئ. څه تکلیف لرئ؟
**ناروغ:** و علیکم السلام! سر مې خوږي او تبه لرم.
**داکتر:** له کله راهیسې؟
**ناروغ:** له پرونه راهیسې.
**داکتر:** نور څه تکلیف لرئ؟
**ناروغ:** ټوخی هم لرم.
**داکتر:** راځئ، معاینه مو کړم.
...
**داکتر:** زکام لرئ. دا دوا واخلئ.
**ناروغ:** څنګه واخلم؟
**داکتر:** ورځې درې ځله، له ډوډۍ وروسته.
**ناروغ:** مننه داکتر صاحب!

## مکالمه ۲ - در دواخانه

**ناروغ:** سلام! دا نسخه لرم.
**دواخانه‌دار:** سلام! راکړئ... دا دوا شته.
**ناروغ:** څومره کېږي؟
**دواخانه‌دار:** دوه سوه افغانۍ.
**ناروغ:** دا واخلئ.
**دواخانه‌دار:** دا دوا ورځې درې ځله واخلئ.
**ناروغ:** مننه!

## عبارات مفید

| پښتو | فارسی |
|------|-------|
| زه ناروغ یم | من مریض هستم |
| داکتر ته اړتیا لرم | به داکتر نیاز دارم |
| دلته خوږي | اینجا درد می‌کند |
| درد ډېر دی | درد زیاد است |
| ښه نه یم | خوب نیستم |
| دوا راکړئ | دوا بدهید |

## سوالات داکتر

| پښتو | فارسی |
|------|-------|
| څه تکلیف لرئ؟ | چه مشکلی دارید؟ |
| چېرته خوږي؟ | کجا درد می‌کند؟ |
| له کله راهیسې؟ | از کی؟ |
| دوا اخلئ؟ | دوا می‌خورید؟ |
| الرژي لرئ؟ | آلرژی دارید؟ |

## پاسخ‌ها

| پښتو | فارسی |
|------|-------|
| له پرونه راهیسې | از دیروز |
| له یوې اونۍ راهیسې | از یک هفته |
| نه، الرژي نه لرم | نه، آلرژی ندارم |
| هو، دا دوا اخلم | بله، این دوا را می‌خورم |

> **نکته:** در افغانستان، به داکتر «داکتر صاحب» می‌گویند که نشانه احترام است.
`,hasPractice:!1},Ex={id:"conv-guest",title:"مهمانی",titlePashto:"میلمستیا",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# مکالمه در مهمانی

مهمان‌نوازی در فرهنگ پښتون بسیار مهم است. یادگیری عبارات مهمانی ضروری است.

## واژگان مهمانی

| پښتو | فارسی |
|------|-------|
| میلمه | مهمان |
| کوربه | میزبان |
| میلمستیا | مهمان‌نوازی |
| کور | خانه |
| دسترخوان | سفره |
| چای | چای |
| ډوډۍ | غذا |

## عبارات خوش‌آمدگویی

| پښتو | فارسی |
|------|-------|
| په خیر راغلاست! | خوش آمدید! |
| تشریف راوړئ | بفرمایید |
| کېنئ | بنشینید |
| خپل کور دی | خانه خودتان است |
| ستړی مه شئ | خسته نباشید |

## مکالمه ۱ - ورود مهمان

**کوربه:** سلام علیکم! په خیر راغلاست!
**میلمه:** و علیکم السلام! مننه!
**کوربه:** تشریف راوړئ، کېنئ!
**میلمه:** مننه، ستړی مه شئ!
**کوربه:** تاسو هم ستړی مه شئ! څنګه یاست؟
**میلمه:** الحمدلله ښه یم. تاسو څنګه یاست؟
**کوربه:** الحمدلله! کورنۍ ښه ده؟
**میلمه:** ټول ښه دي، مننه.

## مکالمه ۲ - پذیرایی

**کوربه:** چای وڅښئ!
**میلمه:** مننه!
**کوربه:** شین چای که تور چای؟
**میلمه:** شین چای، مننه.
**کوربه:** کلچه هم واخلئ!
**میلمه:** ډېره مننه!
**کوربه:** نور واخلئ!
**میلمه:** بس دی، مننه.

## مکالمه ۳ - دعوت به غذا

**کوربه:** ډوډۍ تیاره ده، تشریف راوړئ!
**میلمه:** مننه، زحمت مو کش کړ.
**کوربه:** هیڅ نه، خپل کور دی. کېنئ!
**میلمه:** مننه.
**کوربه:** نور وخورئ!
**میلمه:** موړ شوم، ډېره مننه!
**کوربه:** لږ نور وخورئ!
**میلمه:** نه مننه، ډېره خوندوره وه!

## مکالمه ۴ - خداحافظی

**میلمه:** اوس باید لاړ شم.
**کوربه:** ولې؟ لږ نور کېنئ!
**میلمه:** نه مننه، ناوخته شوه.
**کوربه:** ښه، بیا راشئ!
**میلمه:** انشاءالله! ډېره مننه له میلمستیا نه!
**کوربه:** خدای پامان! په مخه دې ښه!
**میلمه:** خدای مو په امان!

## عبارات مودبانه

| پښتو | فارسی |
|------|-------|
| زحمت مو کش کړ | زحمت کشیدید |
| ستاسو مهرباني | لطف شماست |
| خپل کور دی | خانه خودتان است |
| بیا راشئ | باز بیایید |
| کور مو آباد | خانه‌تان آباد |

## تعارفات

| پښتو | فارسی |
|------|-------|
| نور وخورئ | بیشتر بخورید |
| نور واخلئ | بیشتر بردارید |
| لږ نور کېنئ | کمی بیشتر بنشینید |
| چای سړ شو، ګرم راوړم | چای سرد شد، گرم می‌آورم |

> **نکته فرهنگی:** در فرهنگ پښتون، رد کردن پذیرایی بی‌ادبی محسوب می‌شود. حداقل کمی بخورید یا بنوشید.
`,hasPractice:!1},Tx={id:"retroflex",title:"صداهای برگشته",titlePashto:"شاته تاوېدونکي غږونه",difficulty:"hard",estimatedTime:"۲۵ دقیقه",content:`
# صداهای برگشته (Retroflex) در پښتو

صداهای برگشته از ویژگی‌های خاص پښتو هستند که در فارسی وجود ندارند.

## حروف برگشته پښتو

| حرف | نام | تلفظ | توضیح |
|-----|-----|------|-------|
| ټ | ټی | ṭ | ت برگشته |
| ډ | ډال | ḍ | د برگشته |
| ړ | ړی | ṛ | ر برگشته |
| ڼ | ڼون | ṇ | ن برگشته |

## نحوه تلفظ

برای تلفظ صداهای برگشته:
1. نوک زبان را به سقف دهان (کام سخت) بچسبانید
2. زبان را کمی به عقب ببرید
3. صدا را از این موقعیت تولید کنید

## مقایسه با حروف معمولی

| برگشته | معمولی | مثال برگشته | مثال معمولی |
|--------|--------|-------------|-------------|
| ټ | ت | ټول (همه) | تور (سیاه) |
| ډ | د | ډوډۍ (نان) | دود (دود) |
| ړ | ر | وړ (ببر) | ور (در) |
| ڼ | ن | مڼه (سیب) | منه (نه) |

## کلمات پرکاربرد با حروف برگشته

### با ټ (ṭ)
| پښتو | فارسی | تلفظ |
|------|-------|------|
| ټول | همه | ṭol |
| ټوپک | تفنگ | ṭopak |
| ټیکری | تکه | ṭikray |

### با ډ (ḍ)
| پښتو | فارسی | تلفظ |
|------|-------|------|
| ډوډۍ | نان/غذا | ḍoḍəy |
| ډېر | زیاد | ḍer |
| ډاکټر | داکتر | ḍākṭar |

### با ړ (ṛ)
| پښتو | فارسی | تلفظ |
|------|-------|------|
| وړ | ببر | waṛ |
| ستړی | خسته | staṛay |
| زوړ | کهنه | zoṛ |

### با ڼ (ṇ)
| پښتو | فارسی | تلفظ |
|------|-------|------|
| مڼه | سیب | maṇa |
| پڼه | برگ | paṇa |
| اوږڼ | بلند | uẓ̌aṇ |

## تمرین تلفظ

سعی کنید این جفت کلمات را تلفظ کنید:

1. **تور** (سیاه) vs **ټول** (همه)
2. **دود** (دود) vs **ډوډۍ** (نان)
3. **ور** (در) vs **وړ** (ببر)

> **نکته مهم:** تلفظ صحیح این حروف نیاز به تمرین زیاد دارد. از گویندگان بومی بخواهید تلفظ را برایتان تکرار کنند.
`,hasPractice:!1},_x={id:"idioms",title:"اصطلاحات",titlePashto:"محاورې",difficulty:"hard",estimatedTime:"۳۰ دقیقه",content:`
# اصطلاحات پښتو

اصطلاحات عبارات ثابتی هستند که معنی آنها از معنی کلمات جداگانه متفاوت است.

## اصطلاحات رایج

| پښتو | معنی تحت‌اللفظی | معنی واقعی |
|------|----------------|------------|
| سر ورکول | سر دادن | فدا شدن |
| لاس ورکول | دست دادن | کمک کردن |
| زړه ماتول | دل شکستن | ناامید کردن |
| سترګې پټول | چشم پنهان کردن | نادیده گرفتن |
| غوږ نیول | گوش گرفتن | گوش دادن |

## اصطلاحات با اعضای بدن

| پښتو | فارسی |
|------|-------|
| سر په کار کول | فکر کردن |
| لاس تر زنې کول | دست روی دست گذاشتن |
| پښه ایښودل | قدم گذاشتن |
| زړه سوځي | دلسوزی کردن |
| سترګې خلاصول | چشم باز کردن (فهمیدن) |

## اصطلاحات روزمره

| پښتو | فارسی |
|------|-------|
| خدای دې وکړي | انشاءالله |
| خدای مه کړه | خدا نکند |
| خدای دې په خیر کړي | خدا به خیر کند |
| الله اکبر | خدا بزرگ است |
| ماشاءالله | ماشاءالله |

## اصطلاحات تشویقی

| پښتو | فارسی |
|------|-------|
| شاباش! | آفرین! |
| ډېر ښه! | خیلی خوب! |
| زړه مې خوښ کړ | خوشحالم کردی |
| کور دې آباد! | خانه‌ات آباد! |
| لاس دې درد نه کړي! | دستت درد نکند! |

## اصطلاحات همدردی

| پښتو | فارسی |
|------|-------|
| خدای دې صبر درکړي | خدا صبر بدهد |
| غم مه خوره | غم نخور |
| زړه خراب مه کوه | ناراحت نشو |
| انشاءالله ښه کېږي | انشاءالله خوب می‌شود |

## اصطلاحات خداحافظی

| پښتو | فارسی |
|------|-------|
| په مخه دې ښه | به سلامت |
| خدای پامان | خداحافظ |
| خدای دې مل شه | خدا همراهت باشد |
| بیا به سره وینو | باز همدیگر را می‌بینیم |

## اصطلاحات در جمله

| پښتو | فارسی |
|------|-------|
| هغه زما لپاره سر ورکوي | او برای من فدا می‌شود |
| ما ته لاس راکړه | به من کمک کن |
| زما زړه مات شو | دلم شکست |
| غوږ ونیسه! | گوش کن! |
| سترګې خلاصې کړه! | چشمت را باز کن! |

## مکالمه نمونه

**احمد:** سلام! څنګه یې؟
**محمود:** سلام! ښه یم، خدای ته شکر.
**احمد:** کار څنګه روان دی؟
**محمود:** الحمدلله، خدای دې وکړي چې داسې پاتې شي.
**احمد:** انشاءالله! خدای دې برکت درکړي!
**محمود:** ستا هم، کور دې آباد!

> **نکته:** اصطلاحات در مکالمه روزمره بسیار استفاده می‌شوند و یادگیری آنها مهم است.
`,hasPractice:!1},Ax={id:"proverbs",title:"ضرب‌المثل‌ها",titlePashto:"متلونه",difficulty:"hard",estimatedTime:"۳۰ دقیقه",content:`
# ضرب‌المثل‌های پښتو

ضرب‌المثل‌ها حکمت‌های قدیمی هستند که در مکالمات روزمره استفاده می‌شوند.

## ضرب‌المثل‌های معروف

### درباره صبر

| پښتو | فارسی |
|------|-------|
| صبر تلخ دی خو میوه یې خوږه ده | صبر تلخ است اما میوه‌اش شیرین است |
| چې صبر وکړې، زر به رسې | اگر صبر کنی، زود می‌رسی |

### درباره دوستی

| پښتو | فارسی |
|------|-------|
| ملګری په تنګۍ کې پېژندل کېږي | دوست در سختی شناخته می‌شود |
| زوړ ملګری له نوي نه ښه دی | دوست قدیمی از نو بهتر است |

### درباره کار

| پښتو | فارسی |
|------|-------|
| کار عبادت دی | کار عبادت است |
| چې کار وکړې، نو خوراک به ومومې | اگر کار کنی، غذا پیدا می‌کنی |
| لاس چې کار نه کوي، خوله هم نه خوري | دستی که کار نکند، دهان هم نمی‌خورد |

### درباره علم

| پښتو | فارسی |
|------|-------|
| علم له ګهواره تر ګوره | علم از گهواره تا گور |
| پوه سړی لږ خبرې کوي | آدم دانا کم حرف می‌زند |

### درباره خانواده

| پښتو | فارسی |
|------|-------|
| کور له مور نه جوړېږي | خانه با مادر ساخته می‌شود |
| د پلار دعا په زوی اغېزه کوي | دعای پدر بر پسر اثر می‌کند |

## ضرب‌المثل‌های کندهاری

| پښتو | فارسی |
|------|-------|
| چې اوبه تېرې شي، پل جوړوي | وقتی آب رفت، پل می‌سازد (کار از کار گذشته) |
| یو ګل سره پسرلی نه راځي | با یک گل بهار نمی‌آید |
| چې زړه کې وي، په مخ کې ښکاري | آنچه در دل است، در چهره پیداست |

## ضرب‌المثل‌های حکمت‌آمیز

| پښتو | فارسی |
|------|-------|
| ژبه له غاښو نه نرمه ده | زبان از دندان نرم‌تر است |
| چې ډېر خبرې وکړې، ډېر غلطي کوې | هر چه بیشتر حرف بزنی، بیشتر اشتباه می‌کنی |
| د بل په سترګو مه ګوره | با چشم دیگران نگاه نکن |

## استفاده در مکالمه

**احمد:** ولې دومره ناوخته راغلې؟
**محمود:** ترافیک ډېر و.
**احمد:** صبر تلخ دی خو میوه یې خوږه ده!
**محمود:** سمه ده، صبر وکړم.

**مور:** زویه، کار وکړه!
**زوی:** مور، ستړی یم.
**مور:** لاس چې کار نه کوي، خوله هم نه خوري!

> **نکته:** ضرب‌المثل‌ها در فرهنگ پښتون بسیار ارزشمند هستند و استفاده از آنها نشان‌دهنده دانش و فرهنگ است.
`,hasPractice:!1},Cx={id:"kandahari-slang",title:"اصطلاحات کندهاری",titlePashto:"کندهاري محاورې",difficulty:"hard",estimatedTime:"۲۵ دقیقه",content:`
# اصطلاحات خاص کندهاری

لهجه کندهاری اصطلاحات و کلمات خاص خود را دارد که در سایر مناطق کمتر استفاده می‌شود.

## کلمات خاص کندهاری

| کندهاری | پښتو معیاری | فارسی |
|---------|------------|-------|
| څه کوې؟ | څه کوې؟ | چه می‌کنی؟ |
| ولاړ شه | ودرېږه | بایست |
| راځه | راشه | بیا |
| ورځه | لاړ شه | برو |

## تلفظ کندهاری

در لهجه کندهاری، برخی حروف متفاوت تلفظ می‌شوند:

| حرف | تلفظ کندهاری | مثال |
|-----|-------------|------|
| ږ | ژ | لوږی → لوژی |
| ښ | ش | ښه → شه |
| څ | س | څه → سه |
| ځ | ز | ځم → زم |

## عبارات محلی کندهاری

| کندهاری | فارسی |
|---------|-------|
| څه حال دی؟ | چه حالی؟ |
| ټیک یې؟ | خوبی؟ |
| بس کړه! | بس کن! |
| چل! | برو! |
| راځه! | بیا! |

## اصطلاحات دوستانه

| کندهاری | فارسی |
|---------|-------|
| یاره! | رفیق! |
| ورور! | برادر! |
| ملګریه! | دوست! |
| خلکو! | مردم! |

## عبارات تعجب

| کندهاری | فارسی |
|---------|-------|
| واه! | وای! |
| آخ! | آخ! |
| اوه! | اوه! |
| خدایه! | خدایا! |

## عبارات روزمره کندهاری

| کندهاری | فارسی |
|---------|-------|
| چېرته ځې؟ | کجا می‌روی؟ |
| کله راغلې؟ | کی آمدی؟ |
| څومره شو؟ | چقدر شد؟ |
| ولې نه راځې؟ | چرا نمی‌آیی؟ |

## مکالمه به لهجه کندهاری

**احمد:** سلام یاره! څه حال دی؟
**محمود:** سلام! ټیک یم، ته څنګه یې؟
**احمد:** زه هم ښه یم. چېرته ځې؟
**محمود:** بازار ته ځم. راځې؟
**احمد:** هو، راځم. چل!

## تفاوت با لهجه کابلی

| کندهاری | کابلی | فارسی |
|---------|-------|-------|
| ښه | ښه | خوب |
| څنګه | سنګه | چطور |
| ځم | زم | می‌روم |
| څه | سه | چه |

## نکات مهم

- در کندهاری، «ښ» واضح‌تر تلفظ می‌شود
- «ږ» به «ژ» نزدیک‌تر است
- «څ» و «ځ» واضح‌تر از کابلی تلفظ می‌شوند
- لحن کندهاری آهنگین‌تر است

> **نکته:** لهجه کندهاری یکی از اصیل‌ترین لهجه‌های پښتو محسوب می‌شود و حروف خاص پښتو در آن واضح‌تر تلفظ می‌شوند.
`,hasPractice:!1},Mx={id:"advanced-food-cooking",title:"کولو (Cooking)",titlePashto:"کولو - پخول",difficulty:"hard",estimatedTime:"۲۵ دقیقه",content:`
# کولو - پخول (Cooking and Food Preparation)

## مقدمه

پخول یا کولو یکی از مهم‌ترین فعل‌های روزمره است. در این درس، ما فعل‌های مربوط به پخت و پز، غذاهای مختلف، و نحوه بیان توانایی و ترجیح در مورد غذا را یاد می‌گیریم.

## فعل‌های اصلی پخت و پز

| پښتو | فارسی | تلفظ کندهاری | معنی |
|------|-------|------------|------|
| کول | پختن | kol | to cook |
| پخول | پختن | pakhol | to cook (alternative) |
| جوړول | آماده کردن | joṛol | to prepare |
| خوړول | خوردن | khwṛol | to eat |
| څښل | نوشیدن | tsṣal | to drink |
| ملاوول | مخلوط کردن | malāwol | to mix |
| کاتل | برش دادن | kātal | to cut |
| ډاډ کول | تکان دادن | ḍāḍ kol | to stir |

## فعل‌های کمکی (Modal Verbs)

فعل‌های کمکی برای بیان توانایی، الزام، و ترجیح استفاده می‌شوند:

| پښتو | فارسی | تلفظ کندهاری | معنی |
|------|-------|------------|------|
| کولای | توانستن | kulāy | can/able to |
| نشی | نتوانستن | nəshi | cannot |
| باید | باید | bāyad | should/must |
| خوښ | دوست داشتن | khwṣ | like/prefer |

### مثال‌های استفاده:

- **زه کولای شم ډوډۍ پخول** - من می‌توانم نان بپزم (I can cook bread)
- **هغه نشی کولی قورمه جوړول** - او نمی‌تواند قورمه درست کند (He cannot prepare curry)
- **باید تاسو مرچ ملاوول** - شما باید فلفل را اضافه کنید (You should add pepper)
- **ما خوښ کولو** - من پختن را دوست دارم (I like cooking)

## غذاهای اصلی (Main Dishes)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|------------|
| ډوډۍ | نان | ḍoḍəy |
| وریژې | برنج | wríže |
| غوښه | گوشت | ghwṣ̌a |
| مرغه | مرغ | murgha |
| کباب | کباب | kabāb |
| قورمه | قورمه | qorma |
| پلو | پلو | paláw |
| شوروا | آش/سوپ | shorwā |
| منتو | منتو | mantú |
| آشک | آشک | āshak |

## خفیف غذاها (Snacks)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|------------|
| بولانی | بولانی | bolāní |
| سموسه | سموسه | samosa |
| کبابی | کباب کوچک | kabābí |

## شیرینی‌ها (Desserts)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|------------|
| حلوا | حلوا | halwā |
| فیرنی | فیرنی | firnī |
| خیر | خیر | khair |

## نوشیدنی‌ها (Beverages)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|------------|
| چای | چای | chāy |
| قهوه | قهوه | qahwa |
| شربت | شربت | sharbat |
| دوغ | دوغ | dogh |

## لبنیات (Dairy Products)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|------------|
| شیدې | شیر | shíde |
| مسکه | کره | máska |
| پنیر | پنیر | panír |
| ماست | ماست | māst |

## ادویه‌ها (Spices)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|------------|
| مالګه | نمک | mālga |
| مرچ | فلفل | mirch |
| زیره | زیره | zíra |
| دارچینی | دارچین | dārchíni |

## مثال‌های عملی

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|------------|
| زه کولای شم ډوډۍ پخول | من می‌توانم نان بپزم | za kulāy sham ḍoḍəy pakhol |
| هغه نشی کولی قورمه جوړول | او نمی‌تواند قورمه درست کند | hagha nəshi koli qorma joṛol |
| باید تاسو مرچ ملاوول | شما باید فلفل را اضافه کنید | bāyad tāso march malāwol |
| ما خوښ کولو شوروا | من آش را دوست دارم | mā khwṣ kolo shorwā |
| زه کولای شم چای پخول | من می‌توانم چای بپزم | za kulāy sham chāy pakhol |
| هغه باید کباب جوړول | او باید کباب درست کند | hagha bāyad kabāb joṛol |
| ما خوښ کولو پلو | من پلو را دوست دارم | mā khwṣ kolo paláw |
| تاسو نشی کولی پنیر کاتل | شما نمی‌توانید پنیر را برش دهید | tāso nəshi koli panír kātal |

## مثال مکالمه

**فاطمه:** سلام! تاسو کولای یاست ډوډۍ پخول؟
**Fatima:** Hello! Can you cook bread?

**احمد:** هو، زه کولای شم ډوډۍ پخول. تاسو خوښ کوئ؟
**Ahmad:** Yes, I can cook bread. Do you like it?

**فاطمه:** هو، ډېره خوندوره ده! باید مرچ هم ملاوول؟
**Fatima:** Yes, it's very delicious! Should we add pepper too?

**احمد:** هو، مرچ ډېر خوب دی. ما خوښ کولو مرچ!
**Ahmad:** Yes, pepper is very good. I like pepper!

## نکات مهم

- فعل **کول** یکی از فعل‌های اساسی در پشتو است و می‌تواند معنی‌های مختلفی داشته باشد
- فعل‌های کمکی (modal verbs) برای بیان توانایی، الزام، و ترجیح بسیار مهم هستند
- در کندهاری، تلفظ برخی حروف متفاوت است، مثلاً **ښ** واضح‌تر تلفظ می‌شود
- غذاهای افغانی بسیار متنوع هستند و هر منطقه غذاهای خاص خود را دارد
- یادگیری نام‌های غذاها و فعل‌های مربوط به پخت و پز برای مکالمات روزمره بسیار مفید است

> **نکته:** در فرهنگ افغانی، پخت و پز و غذا خوردن با خانواده بسیار مهم است. یادگیری این واژگان به شما کمک می‌کند تا بهتر با مردم افغان ارتباط برقرار کنید.
`,hasPractice:!1},Rx={id:"advanced-body-parts",title:"Advanced Body Parts",titlePashto:"جسم کے حصے",difficulty:"hard",estimatedTime:"۲۵ دقیقه",content:`
# جسم کے حصے (Body Parts)

## مقدمه

جسم انسان بسیار پیچیده است و بسیاری از حصه‌های مختلف دارد. در این درس، ما تمام حصه‌های اصلی جسم، فعل‌های مربوط به حرکت جسم، و صفت‌های توصیف‌کننده را یاد می‌گیریم.

## حصه‌های سر (Head Region)

| پښتو | فارسی | تلفظ کندهاری | معنی |
|------|-------|------------|------|
| سر | سر | sar | head |
| مخ | صورت | makh | face |
| ستوری | چشم | stúri | eye |
| پوزه | بینی | púza | nose |
| دهان | دهان | dahān | mouth |
| غوږ | گوش | ghwṛ | ear |
| پیشانی | پیشانی | pishāní | forehead |
| ګونې | گونه | gúne | cheek |
| ږاب | چانه | ẓāb | chin |
| جبڑه | فک | jabṛa | jaw |
| غاښې | دندان | ghāṣ̌e | teeth |
| ژبه | زبان | žba | tongue |
| لب | لب | lab | lip |

## حصه‌های تنه (Torso Region)

| پښتو | فارسی | تلفظ کندهاری | معنی |
|------|-------|------------|------|
| ستن | گردن | stan | neck |
|肩 | شانه | shāna | shoulder |
| سینه | سینه | síne | chest |
| پشت | پشت | pasht | back |
| پوږې | شکم | púže | stomach |
| کمر | کمر | kamar | waist |
| پسلیاں | دنده | pasliyān | ribs |

## حصه‌های اطراف (Limbs Region)

| پښتو | فارسی | تلفظ کندهاری | معنی |
|------|-------|------------|------|
| بازو | بازو | bāzú | arm |
| لاس | دست | lās | hand |
| انگشت | انگشت | angusht | finger |
| شست | شست | shast | thumb |
| کف | کف دست | kaf | palm |
| پا | پا | pā | leg |
| پای | پا | pāy | foot |
| انگشت پا | انگشت پا | angusht pā | toe |
| زانو | زانو | zānú | knee |
| ران | ران | rān | thigh |
| پنجه | ساق | panja | calf |
| پاشنه | پاشنه | pāshna | heel |

## فعل‌های جسم (Body Verbs)

| پښتو | فارسی | تلفظ کندهاری | معنی |
|------|-------|------------|------|
| ورتلل | راه رفتن | wartəl | to walk |
| دوڼ | دویدن | dúṇ | to run |
| کېناستل | نشستن | kenāstəl | to sit |
| ولاړ کېدل | ایستادن | walāṛ kedəl | to stand |
| پرتلل | پریدن | pərtəl | to jump |
| رقص کول | رقص کردن | raqṣ kol | to dance |
| کشش کول | کشش دادن | kashsh kol | to stretch |
| خم کول | خم شدن | kham kol | to bend |
| لوړ کول | بلند کردن | loṛ kol | to lift |
| فشار کول | فشار دادن | fshār kol | to push |
| کشل | کشیدن | kashal | to pull |
| پرې کول | پرتاب کردن | pre kol | to throw |
| نیول | گرفتن | niyol | to catch |
| تالی زدل | دست زدن | tāli zadəl | to clap |
| لمبول | تکان دادن | lambúl | to wave |

## صفت‌های جسم (Body Adjectives)

| پښتو | فارسی | تلفظ کندهاری | معنی |
|------|-------|------------|------|
| لوی | بزرگ | lúy | big |
| کوچنی | کوچک | kúchni | small |
| قوی | قوی | qúy | strong |
| ضعیف | ضعیف | dhaíf | weak |
| صحت‌مند | سالم | sahát-mand | healthy |
| ناروغ | بیمار | nārúgh | sick |
| اوږد | قد بلند | úẓad | tall |
| کوتاه | قد کوتاه | kutāh | short |
| موټی | ضخیم | múṭi | thick |
| نازک | نازک | nāzak | thin |
| اوږد | طویل | úẓad | long |
| کوتاه | کوتاه | kutāh | short (for hair) |

## مثال‌های عملی

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|------------|
| زه لاسونه سره کار کوم | من با دست‌ها کار می‌کنم | za lāsúna sara kār kúm |
| هغه پایونه سره ورتلي | او با پاها راه می‌رود | hagha pāyúna sara wartəli |
| ما قوی بازو لرم | من بازوهای قوی دارم | mā qúy bāzú laram |
| تاسو اوږد سر لرئ | شما سر بلند دارید | tāso úẓad sar larəy |
| هغه دوڼ کولای شي | او می‌تواند بدود | hagha dúṇ kulāy shi |
| ما رقص کول خوښ کوم | من رقص کردن را دوست دارم | mā raqṣ kol khwṣ kúm |
| زه کشش کولای شم | من می‌توانم کشش بدهم | za kashsh kúlāy sham |
| هغه خم کول نشي کولي | او نمی‌تواند خم شود | hagha kham kol nəshi koli |
| تاسو تالی زدل کولای یاست | شما می‌توانید دست بزنید | tāso tāli zadəl kulāy yāst |
| ما پرې کول خوښ کوم | من پرتاب کردن را دوست دارم | mā pre kol khwṣ kúm |

## مثال مکالمه

**علی:** سلام! تاسو قوی یاست؟
**Ali:** Hello! Are you strong?

**فاطمه:** هو، زه قوی یم. تاسو؟
**Fatima:** Yes, I am strong. You?

**علی:** زه هم قوی یم. تاسو دوڼ کولای یاست؟
**Ali:** I am also strong. Can you run?

**فاطمه:** هو، زه دوڼ کولای شم. ما رقص کول خوښ کوم!
**Fatima:** Yes, I can run. I like dancing!

**علی:** ما هم رقص کول خوښ کوم. راځه رقص کو!
**Ali:** I also like dancing. Let's dance!

## نکات مهم

- حصه‌های جسم در پشتو نام‌های خاص دارند و هر منطقه ممکن است تلفظ متفاوتی داشته باشد
- فعل‌های حرکت جسم برای توصیف فعالیت‌های روزمره بسیار مهم هستند
- صفت‌های توصیف‌کننده جسم برای بیان خصوصیات فیزیکی استفاده می‌شوند
- در کندهاری، برخی حروف واضح‌تر تلفظ می‌شوند، مثلاً **ړ** و **ږ**
- یادگیری این واژگان به شما کمک می‌کند تا بهتر درباره سلامت و فعالیت‌های جسمی صحبت کنید

> **نکته:** در فرهنگ افغانی، ورزش و فعالیت‌های جسمی بسیار مهم هستند. یادگیری این واژگان به شما کمک می‌کند تا بهتر با مردم افغان درباره سلامت و ورزش صحبت کنید.
`,hasPractice:!1},Ox=[fb,hb,db,mb,gb,yb,bb,xb,vb,wb,kb,jb,Nb,zb,Sb,Eb,Tb,_b,Ab,Cb,Mb,Rb,Ob,qb,Db,Ub,Lb,Hb,Bb,Pb,Yb,Gb,Xb,Qb,Vb,Zb,Kb,Jb,Fb,$b,Wb,Ib,ax,tx,ex,nx,ix,ox,sx,lx,rx,ux,cx,px,fx,hx,dx,mx,gx,yx,bx,xx,vx,wx,kx,jx,Nx,zx,Sx,Ex,Tx,_x,Ax,Cx,Mx,Rx];function xu(l){return Ox.find(c=>c.id===l)}function qx(l){const c=Ki.categories.flatMap(h=>h.lessons.map(m=>m.id)),f=c.indexOf(l);if(f===-1||f===c.length-1)return null;const u=c[f+1];return xu(u)||{id:u,title:Ki.categories.flatMap(h=>h.lessons).find(h=>h.id===u)?.title||u}}function Dx(l){const c=Ki.categories.flatMap(h=>h.lessons.map(m=>m.id)),f=c.indexOf(l);if(f<=0)return null;const u=c[f-1];return xu(u)||{id:u,title:Ki.categories.flatMap(h=>h.lessons).find(h=>h.id===u)?.title||u}}function Ux(){const{lessonId:l}=Ss();uu();const{completeLesson:c,uncompleteLesson:f,isLessonCompleted:u}=ln(),h=xu(l),m=u(l),d=qx(l),b=Dx(l);if(!h)return s.jsxs("div",{className:"max-w-3xl mx-auto text-center py-12",children:[s.jsx(at,{className:"w-16 h-16 text-slate-600 mx-auto mb-4"}),s.jsx("h1",{className:"text-xl font-bold text-slate-200 mb-2",children:"درس پیدا نشد"}),s.jsx("p",{className:"text-slate-500 mb-6",children:"این درس هنوز آماده نشده است"}),s.jsxs(Ca,{to:"/",className:"inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300",children:[s.jsx(Pt,{className:"w-4 h-4"}),"بازگشت به خانه"]})]});const x=()=>{c(l,10)},g=()=>{f(l)};return s.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[s.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[s.jsxs(Ca,{to:"/",className:"inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 mb-4 text-sm",children:[s.jsx(Pt,{className:"w-4 h-4"}),"بازگشت به خانه"]}),s.jsxs("div",{className:"flex items-start justify-between gap-4",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"text-2xl font-bold text-slate-100 mb-1",children:h.title}),s.jsx("p",{className:"text-slate-400",children:h.titlePashto})]}),m&&s.jsxs("div",{className:"flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/30",children:[s.jsx(_t,{className:"w-4 h-4"}),s.jsx("span",{className:"text-sm font-medium",children:"تکمیل شده"})]})]}),s.jsxs("div",{className:"flex items-center gap-4 mt-3 text-sm text-slate-500",children:[s.jsxs("span",{children:["⏱️ ",h.estimatedTime]}),s.jsx("span",{className:`px-2 py-0.5 rounded-full ${h.difficulty==="easy"?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30":h.difficulty==="medium"?"bg-yellow-500/20 text-yellow-400 border border-yellow-500/30":"bg-red-500/20 text-red-400 border border-red-500/30"}`,children:h.difficulty==="easy"?"آسان":h.difficulty==="medium"?"متوسط":"سخت"})]})]}),s.jsx("div",{className:"bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-lg",children:s.jsx("div",{className:"prose prose-invert max-w-none prose-headings:text-slate-200 prose-p:text-slate-300 prose-strong:text-slate-200",children:s.jsx("div",{className:"lesson-content",dangerouslySetInnerHTML:{__html:Ph(h.content)}})})}),h.contentPashto&&s.jsxs("details",{className:"bg-slate-800 rounded-2xl border border-slate-700 shadow-lg",children:[s.jsx("summary",{className:"p-4 cursor-pointer font-medium text-slate-300 hover:text-slate-100",children:"📖 مشاهده به پښتو"}),s.jsx("div",{className:"p-6 pt-0 border-t border-slate-700",children:s.jsx("div",{className:"prose prose-invert max-w-none",dangerouslySetInnerHTML:{__html:Ph(h.contentPashto)}})})]}),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[!m&&s.jsxs("button",{onClick:x,className:"flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2",children:[s.jsx(_t,{className:"w-5 h-5"}),"تکمیل درس (+10 XP)"]}),m&&s.jsxs("button",{onClick:g,className:"flex-1 py-3 bg-slate-600 hover:bg-slate-500 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2",children:[s.jsx(_t,{className:"w-5 h-5"}),"لغو تکمیل"]}),h.hasPractice&&s.jsx(Ca,{to:`/practice/${h.practiceId||l}`,className:"flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-xl transition-colors text-center",children:"شروع تمرین"})]}),s.jsxs("div",{className:"flex justify-between pt-6 border-t border-slate-700",children:[b?s.jsxs(Ca,{to:`/lesson/${b.id}`,className:"flex items-center gap-2 text-slate-400 hover:text-slate-200",children:[s.jsx(Pt,{className:"w-4 h-4"}),s.jsx("span",{children:b.title})]}):s.jsx("div",{}),d?s.jsxs(Ca,{to:`/lesson/${d.id}`,className:"flex items-center gap-2 text-slate-400 hover:text-slate-200",children:[s.jsx("span",{children:d.title}),s.jsx(Py,{className:"w-4 h-4"})]}):s.jsx("div",{})]})]})}function Ph(l){if(!l)return"";if(Array.isArray(l))return l.map(m=>{let d="";return m.type==="intro"?(d+=`<h2 class="text-xl font-bold mt-8 mb-4 text-slate-200">${m.title}</h2>`,d+=`<p class="mb-3 text-slate-300">${m.text}</p>`):m.type==="conjugation"?(d+=`<h3 class="text-lg font-bold mt-6 mb-3 text-slate-200">${m.title}</h3>`,d+='<table class="w-full border-collapse my-4 text-sm">',d+='<tr><th class="border border-slate-600 px-3 py-2 bg-slate-700 font-bold text-slate-200">ضمیر</th>',d+='<th class="border border-slate-600 px-3 py-2 bg-slate-700 font-bold text-slate-200">پشتو</th>',d+='<th class="border border-slate-600 px-3 py-2 bg-slate-700 font-bold text-slate-200">انگلیسی</th>',d+='<th class="border border-slate-600 px-3 py-2 bg-slate-700 font-bold text-slate-200">مثال</th></tr>',m.conjugations.forEach(b=>{d+="<tr>",d+=`<td class="border border-slate-600 px-3 py-2 text-slate-300">${b.pronoun}</td>`,d+=`<td class="border border-slate-600 px-3 py-2 text-slate-300">${b.pashto}</td>`,d+=`<td class="border border-slate-600 px-3 py-2 text-slate-300">${b.english}</td>`,d+=`<td class="border border-slate-600 px-3 py-2 text-slate-300">${b.example}</td>`,d+="</tr>"}),d+="</table>"):m.type==="examples"?(d+=`<h3 class="text-lg font-bold mt-6 mb-3 text-slate-200">${m.title}</h3>`,m.examples.forEach(b=>{d+='<div class="mb-4 p-3 bg-slate-700/50 rounded-lg border border-slate-600">',d+=`<p class="text-slate-300"><strong class="text-emerald-400">پشتو:</strong> ${b.pashto}</p>`,d+=`<p class="text-slate-300"><strong class="text-emerald-400">انگلیسی:</strong> ${b.english}</p>`,d+=`<p class="text-slate-300"><strong class="text-emerald-400">فارسی:</strong> ${b.farsi}</p>`,d+="</div>"})):m.type==="practice"&&(d+=`<h3 class="text-lg font-bold mt-6 mb-3 text-slate-200">${m.title}</h3>`,m.exercises.forEach((b,x)=>{d+='<div class="mb-4 p-3 bg-slate-700/50 rounded-lg border border-slate-600">',d+=`<p class="text-slate-300 mb-2">${b.question}</p>`,d+='<div class="flex gap-2 flex-wrap">',b.options.forEach(g=>{d+=`<button class="px-3 py-1 bg-slate-600 hover:bg-slate-500 text-slate-300 rounded text-sm">${g}</button>`}),d+="</div>",d+="</div>"})),d}).join("");const c=m=>{const d=m.trim().split(`
`);if(d.length<2)return m;let b='<table class="w-full border-collapse my-4 text-sm">';return d.forEach((x,g)=>{if(x.match(/^\|[\s-:|]+\|$/))return;const k=x.split("|").filter(R=>R.trim()!=="");if(k.length===0)return;const N=g===0?"th":"td",A=g===0?"bg-slate-700 font-bold text-slate-200":"text-slate-300";b+="<tr>",k.forEach(R=>{b+=`<${N} class="border border-slate-600 px-3 py-2 ${A}">${R.trim()}</${N}>`}),b+="</tr>"}),b+="</table>",b};let f=l;const u=/(\|.+\|\n)+/g;return f=f.replace(u,m=>c(m)),f=f.replace(/^### (.+)$/gm,'<h3 class="text-lg font-bold mt-6 mb-3 text-slate-200">$1</h3>').replace(/^## (.+)$/gm,'<h2 class="text-xl font-bold mt-8 mb-4 text-slate-200">$1</h2>').replace(/^# (.+)$/gm,'<h1 class="text-2xl font-bold mt-8 mb-4 text-slate-100">$1</h1>').replace(/\*\*(.+?)\*\*/g,'<strong class="text-emerald-400">$1</strong>').replace(/\*(.+?)\*/g,'<em class="text-slate-300">$1</em>').replace(/^> (.+)$/gm,'<blockquote class="border-r-4 border-emerald-500 pr-4 my-4 text-slate-400 bg-slate-700/50 py-2 rounded-l">$1</blockquote>').replace(/^(\d+)\. (.+)$/gm,'<li class="mb-2 mr-4 text-slate-300">$2</li>').replace(/^- (.+)$/gm,'<li class="mb-1 mr-4 text-slate-300">$1</li>'),f=f.split(`
`).map(m=>{const d=m.trim();return d?d.startsWith("<")?m:`<p class="mb-3 text-slate-300">${m}</p>`:""}).join(`
`),f}const Lx=[{id:"alphabet-intro",title:"تمرین الفبای پښتو",titlePashto:"د پښتو الفبا تمرین",questions:[{question:"الفبای پښتو چند حرف دارد؟",options:["۳۲ حرف","۴۴ حرف","۲۸ حرف","۳۵ حرف"],correct:"۴۴ حرف",explanation:"الفبای پښتو ۴۴ حرف دارد که ۹ تای آن خاص پښتو است."},{question:"کدام حرف خاص پښتو است؟",options:["ب","ټ","ت","پ"],correct:"ټ",explanation:"ټ یک حرف برگشته است که فقط در پښتو وجود دارد."},{question:"پښتو از کدام سمت نوشته می‌شود؟",options:["چپ به راست","راست به چپ","بالا به پایین","هر دو طرف"],correct:"راست به چپ",explanation:"پښتو مثل فارسی و عربی از راست به چپ نوشته می‌شود."},{question:"چند حرف خاص پښتو وجود دارد؟",options:["۵ حرف","۷ حرف","۹ حرف","۱۲ حرف"],correct:"۹ حرف",explanation:"پښتو ۹ حرف خاص دارد: ټ، ډ، ړ، ڼ، څ، ځ، ښ، ږ، ګ"}]},{id:"unique-letters",title:"تمرین حروف خاص",titlePashto:"د ځانګړو تورو تمرین",questions:[{question:"حرف «ټ» چه نوع صدایی دارد؟",options:["ت معمولی","ت برگشته","د برگشته","س"],correct:"ت برگشته",explanation:"ټ یک «ت» برگشته است که با برگرداندن زبان تلفظ می‌شود."},{question:"حرف «څ» چه صدایی دارد؟",options:["چ","ج","تس","س"],correct:"تس",explanation:"څ ترکیب صداهای «ت» و «س» است."},{question:"کدام حرف صدای «دز» دارد؟",options:["ځ","څ","ږ","ښ"],correct:"ځ",explanation:"ځ ترکیب صداهای «د» و «ز» است."},{question:"«ډوډۍ» به چه معناست؟",options:["آب","نان","خانه","کتاب"],correct:"نان",explanation:"ډوډۍ به معنای نان است و با حرف خاص ډ شروع می‌شود."}]},{id:"kandahari-sounds",title:"تمرین صداهای کندهاری",titlePashto:"د کندهارۍ غږونو تمرین",questions:[{question:"حرف «ښ» در گویش کندهاری چه صدایی دارد؟",options:["خ","ش برگشته","گ","ژ"],correct:"ش برگشته",explanation:"در کندهاری، ښ صدای «ش» برگشته دارد، نه «خ»."},{question:"حرف «ږ» در گویش کابلی چه صدایی دارد؟",options:["ژ","گ","ش","خ"],correct:"گ",explanation:"در کابلی، ږ صدای «گ» دارد، اما در کندهاری «ژ» برگشته."},{question:"«ښه» به چه معناست؟",options:["بد","خوب","بزرگ","کوچک"],correct:"خوب",explanation:"ښه به معنای «خوب» است."},{question:"گویش کندهاری در کدام منطقه صحبت می‌شود؟",options:["کابل","قندهار","مزار","هرات"],correct:"قندهار",explanation:"گویش کندهاری در قندهار و مناطق جنوبی افغانستان رایج است."}]},{id:"vowels",title:"تمرین مصوت‌ها",titlePashto:"د غږلرونکو تورو تمرین",questions:[{question:"پشتو چند مصوت اصلی دارد؟",options:["۴","۵","۶","۷"],correct:"۷",explanation:"پشتو ۷ مصوت اصلی دارد."},{question:"کدام مصوت کوتاه است؟",options:["ا","ې","َ","ی"],correct:"َ",explanation:"َ (فتحه) یک مصوت کوتاه است."},{question:"«ا» چه صدایی دارد؟",options:["a کوتاه","ā بلند","e","i"],correct:"ā بلند",explanation:"ا یک مصوت بلند است."},{question:"مصوت خاص کندهاری کدام است؟",options:["ا","ې","ə (شوا)","ی"],correct:"ə (شوا)",explanation:"ə (شوا) یک مصوت خاص در کندهاری است."}]},{id:"numbers-1-10",title:"تمرین اعداد ۱ تا ۱۰",titlePashto:"د ۱ نه تر ۱۰ شمېرو تمرین",questions:[{question:"«یو» به چه معناست؟",options:["دو","یک","سه","صفر"],correct:"یک",explanation:"یو در پښتو به معنای یک است."},{question:"عدد ۵ در پښتو چیست؟",options:["څلور","پنځه","شپږ","اوه"],correct:"پنځه",explanation:"پنځه به معنای پنج است."},{question:"«لس» چند است؟",options:["۸","۹","۱۰","۱۱"],correct:"۱۰",explanation:"لس در پښتو به معنای ده است."},{question:"کدام عدد «اته» است؟",options:["۶","۷","۸","۹"],correct:"۸",explanation:"اته به معنای هشت است."}]},{id:"basic-greetings",title:"تمرین سلام و احوالپرسی",titlePashto:"د سلام او حال احوال تمرین",questions:[{question:"«ستړی مه شې» به چه معناست؟",options:["خداحافظ","خسته نباشی","صبح بخیر","شب بخیر"],correct:"خسته نباشی",explanation:"ستړی مه شې یک سلام رایج پښتو است به معنای خسته نباشی."},{question:"«څنګه یې؟» یعنی چه؟",options:["کجایی؟","چطوری؟","چه می‌کنی؟","کی هستی؟"],correct:"چطوری؟",explanation:"څنګه یې؟ برای پرسیدن حال استفاده می‌شود."},{question:"خداحافظی در پښتو چیست؟",options:["سلام","مننه","خدای پامان","ښه یم"],correct:"خدای پامان",explanation:"خدای پامان به معنای خداحافظ است."},{question:"«مننه» به چه معناست؟",options:["سلام","ممنون","ببخشید","خوبم"],correct:"ممنون",explanation:"مننه برای تشکر کردن استفاده می‌شود."}]}],Hx=[...Lx];function Bx(l){return Hx.find(c=>c.id===l)}function Px(){const{practiceId:l}=Ss(),{completePractice:c}=ln(),f=Bx(l),[u,h]=T.useState(0),[m,d]=T.useState(null),[b,x]=T.useState(!1),[g,k]=T.useState(0),[N,A]=T.useState(!1);if(!f)return s.jsxs("div",{className:"max-w-3xl mx-auto text-center py-12",children:[s.jsx("h1",{className:"text-xl font-bold text-slate-200 mb-2",children:"تمرین پیدا نشد"}),s.jsx("p",{className:"text-slate-500 mb-6",children:"این تمرین هنوز آماده نشده است"}),s.jsxs(Ca,{to:"/",className:"inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300",children:[s.jsx(Pt,{className:"w-4 h-4"}),"بازگشت به خانه"]})]});const R=f.questions[u],L=f.questions.length,H=U=>{b||(d(U),x(!0),U===R.correct&&k(B=>B+1))},P=()=>{u<L-1?(h(U=>U+1),d(null),x(!1)):(A(!0),c(l,5))};if(N){const U=Math.round(g/L*100);return s.jsxs("div",{className:"max-w-md mx-auto text-center py-12",children:[s.jsx("div",{className:`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${U>=70?"bg-emerald-500/20 border border-emerald-500/30":"bg-amber-500/20 border border-amber-500/30"}`,children:s.jsx(on,{className:`w-10 h-10 ${U>=70?"text-emerald-400":"text-amber-400"}`})}),s.jsx("h1",{className:"text-2xl font-bold text-slate-100 mb-2",children:U>=70?"آفرین!":"تلاش خوب بود!"}),s.jsx("p",{className:"text-slate-500 mb-6",children:U>=70?"ډیره ښه!":"بیا هڅه وکړه!"}),s.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 mb-8 border border-slate-700",children:[s.jsxs("div",{className:"text-4xl font-bold text-slate-100 mb-2",children:[g,"/",L]}),s.jsx("div",{className:"text-slate-500",children:"پاسخ صحیح"}),s.jsx("div",{className:"mt-4 text-emerald-400 font-medium",children:"+5 XP"})]}),s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsx(Ca,{to:"/",className:"py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors",children:"بازگشت به خانه"}),s.jsx("button",{onClick:()=>{h(0),d(null),x(!1),k(0),A(!1)},className:"py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium rounded-xl transition-colors border border-slate-600",children:"تکرار تمرین"})]})]})}return s.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[s.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[s.jsxs(Ca,{to:"/",className:"inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 mb-4 text-sm",children:[s.jsx(Pt,{className:"w-4 h-4"}),"بازگشت"]}),s.jsx("h1",{className:"text-xl font-bold text-slate-100",children:f.title}),s.jsx("p",{className:"text-slate-500 text-sm",children:f.titlePashto})]}),s.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[s.jsxs("div",{className:"flex justify-between text-sm text-slate-500 mb-2",children:[s.jsxs("span",{children:["سوال ",u+1," از ",L]}),s.jsxs("span",{children:[g," پاسخ صحیح"]})]}),s.jsx("div",{className:"h-2 bg-slate-700 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-emerald-500 transition-all duration-300",style:{width:`${(u+1)/L*100}%`}})})]}),s.jsxs("div",{className:"bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-lg",children:[s.jsx("h2",{className:"text-lg font-medium text-slate-200 mb-6",children:R.question}),s.jsx("div",{className:"space-y-3",children:R.options.map((U,B)=>{const X=m===U,ta=U===R.correct;let na="border-slate-600 hover:border-emerald-500/50 hover:bg-emerald-500/10";return b?ta?na="border-emerald-500 bg-emerald-500/20":X&&!ta&&(na="border-red-500 bg-red-500/20"):X&&(na="border-emerald-500 bg-emerald-500/20"),s.jsx("button",{onClick:()=>H(U),disabled:b,className:`w-full p-4 text-right rounded-xl border-2 transition-all ${na}`,children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-slate-200",children:U}),b&&ta&&s.jsx(_t,{className:"w-5 h-5 text-emerald-400"}),b&&X&&!ta&&s.jsx(Xy,{className:"w-5 h-5 text-red-400"})]})},B)})})]}),b&&s.jsxs("div",{className:`p-4 rounded-xl border ${m===R.correct?"bg-emerald-500/20 text-emerald-300 border-emerald-500/30":"bg-red-500/20 text-red-300 border-red-500/30"}`,children:[m===R.correct?s.jsx("p",{className:"font-medium",children:"✅ آفرین! پاسخ صحیح است."}):s.jsxs("p",{className:"font-medium",children:["❌ پاسخ صحیح: ",R.correct]}),R.explanation&&s.jsx("p",{className:"text-sm mt-2 opacity-80",children:R.explanation})]}),b&&s.jsx("button",{onClick:P,className:"w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors",children:u<L-1?"سوال بعدی":"مشاهده نتیجه"})]})}const Vi=[{id:"alef",letter:"ا",name:"الف",namePashto:"الف",sound:"/ɑ, a/",latinEquivalent:"a, aa",category:"basic",examples:[{word:"اتل",meaning:"قهرمان",transliteration:"atal"},{word:"اوبه",meaning:"آب",transliteration:"oba"}]},{id:"be",letter:"ب",name:"ب",namePashto:"ب",sound:"/b/",latinEquivalent:"b",category:"basic",examples:[{word:"باد",meaning:"باد",transliteration:"bād"},{word:"بچی",meaning:"بچه",transliteration:"bachay"}]},{id:"pe",letter:"پ",name:"پ",namePashto:"پ",sound:"/p/",latinEquivalent:"p",category:"basic",examples:[{word:"پلار",meaning:"پدر",transliteration:"plār"},{word:"پښتو",meaning:"پښتو",transliteration:"pashto"}]},{id:"te",letter:"ت",name:"ت",namePashto:"ت",sound:"/t/",latinEquivalent:"t",category:"basic",examples:[{word:"تور",meaning:"سیاه",transliteration:"tor"},{word:"تاسو",meaning:"شما",transliteration:"tāso"}]},{id:"Te",letter:"ټ",name:"ټ (ت برگشته)",namePashto:"ټ",sound:"/ʈ/",latinEquivalent:"ṭ",category:"unique",isUnique:!0,examples:[{word:"ټوپک",meaning:"تفنگ",transliteration:"ṭopak"},{word:"ټول",meaning:"همه",transliteration:"ṭol"}]},{id:"se",letter:"ث",name:"ث",namePashto:"ث",sound:"/s/",latinEquivalent:"s",category:"basic",examples:[{word:"ثواب",meaning:"ثواب",transliteration:"sawāb"}]},{id:"jim",letter:"ج",name:"ج",namePashto:"ج",sound:"/dʒ/",latinEquivalent:"j",category:"basic",examples:[{word:"جنګ",meaning:"جنگ",transliteration:"jang"},{word:"جومات",meaning:"مسجد",transliteration:"jomāt"}]},{id:"che",letter:"چ",name:"چ",namePashto:"چ",sound:"/tʃ/",latinEquivalent:"ch",category:"basic",examples:[{word:"چای",meaning:"چای",transliteration:"chāy"},{word:"چرګ",meaning:"مرغ",transliteration:"charg"}]},{id:"tse",letter:"څ",name:"څ (تس)",namePashto:"څ",sound:"/ts/",latinEquivalent:"ts",category:"unique",isUnique:!0,examples:[{word:"څه",meaning:"چه",transliteration:"tsa"},{word:"څلور",meaning:"چهار",transliteration:"tsalor"}]},{id:"dze",letter:"ځ",name:"ځ (دز)",namePashto:"ځ",sound:"/dz/",latinEquivalent:"dz",category:"unique",isUnique:!0,examples:[{word:"ځان",meaning:"خود",transliteration:"dzān"},{word:"ځای",meaning:"جا",transliteration:"dzāy"}]},{id:"he",letter:"ح",name:"ح",namePashto:"ح",sound:"/h/",latinEquivalent:"h",category:"basic",examples:[{word:"حال",meaning:"حال",transliteration:"hāl"}]},{id:"khe",letter:"خ",name:"خ",namePashto:"خ",sound:"/x/",latinEquivalent:"kh",category:"basic",examples:[{word:"خور",meaning:"خواهر",transliteration:"khor"},{word:"خوب",meaning:"خواب",transliteration:"khob"}]},{id:"dal",letter:"د",name:"د",namePashto:"د",sound:"/d/",latinEquivalent:"d",category:"basic",examples:[{word:"دوست",meaning:"دوست",transliteration:"dost"},{word:"دا",meaning:"این",transliteration:"dā"}]},{id:"Dal",letter:"ډ",name:"ډ (د برگشته)",namePashto:"ډ",sound:"/ɖ/",latinEquivalent:"ḍ",category:"unique",isUnique:!0,examples:[{word:"ډوډۍ",meaning:"نان",transliteration:"ḍoḍəy"},{word:"ډېر",meaning:"زیاد",transliteration:"ḍer"}]},{id:"zal",letter:"ذ",name:"ذ",namePashto:"ذ",sound:"/z/",latinEquivalent:"z",category:"basic",examples:[{word:"ذکر",meaning:"ذکر",transliteration:"zikr"}]},{id:"re",letter:"ر",name:"ر",namePashto:"ر",sound:"/r/",latinEquivalent:"r",category:"basic",examples:[{word:"رنګ",meaning:"رنگ",transliteration:"rang"},{word:"روغ",meaning:"سالم",transliteration:"rogh"}]},{id:"Re",letter:"ړ",name:"ړ (ر برگشته)",namePashto:"ړ",sound:"/ɽ/",latinEquivalent:"ṛ",category:"unique",isUnique:!0,examples:[{word:"سړی",meaning:"مرد",transliteration:"saṛay"},{word:"ړندون",meaning:"کور",transliteration:"ṛandon"}]},{id:"ze",letter:"ز",name:"ز",namePashto:"ز",sound:"/z/",latinEquivalent:"z",category:"basic",examples:[{word:"زړه",meaning:"قلب",transliteration:"zṛa"},{word:"زه",meaning:"من",transliteration:"za"}]},{id:"zhe",letter:"ژ",name:"ژ",namePashto:"ژ",sound:"/ʒ/",latinEquivalent:"zh",category:"basic",examples:[{word:"ژوند",meaning:"زندگی",transliteration:"zhwand"},{word:"ژبه",meaning:"زبان",transliteration:"zhəba"}]},{id:"Zhe",letter:"ږ",name:"ږ (ژ برگشته کندهاری)",namePashto:"ږ",sound:"/ʐ/",soundKandahari:"/ʐ/ (صدای ژ برگشته)",soundOther:"/g/ یا /ʒ/ در گویش‌های دیگر",latinEquivalent:"ẓ̌",category:"unique",isUnique:!0,isKandahariSpecial:!0,examples:[{word:"ږمنځ",meaning:"شانه",transliteration:"ẓ̌mənz"},{word:"وږی",meaning:"گرسنه",transliteration:"waẓ̌ay"}]},{id:"sin",letter:"س",name:"س",namePashto:"س",sound:"/s/",latinEquivalent:"s",category:"basic",examples:[{word:"سر",meaning:"سر",transliteration:"sar"},{word:"سپین",meaning:"سفید",transliteration:"spin"}]},{id:"shin",letter:"ش",name:"ش",namePashto:"ش",sound:"/ʃ/",latinEquivalent:"sh",category:"basic",examples:[{word:"شپه",meaning:"شب",transliteration:"shpa"},{word:"ښه",meaning:"خوب",transliteration:"sha"}]},{id:"Shin",letter:"ښ",name:"ښ (ش برگشته کندهاری)",namePashto:"ښ",sound:"/ʂ/",soundKandahari:"/ʂ/ (صدای ش برگشته)",soundOther:"/x/ یا /ʃ/ در گویش‌های دیگر",latinEquivalent:"ṣ̌",category:"unique",isUnique:!0,isKandahariSpecial:!0,examples:[{word:"ښځه",meaning:"زن",transliteration:"ṣ̌əza"},{word:"ښه",meaning:"خوب",transliteration:"ṣ̌a"}]},{id:"swad",letter:"ص",name:"ص",namePashto:"ص",sound:"/s/",latinEquivalent:"s",category:"basic",examples:[{word:"صبر",meaning:"صبر",transliteration:"sabr"}]},{id:"zwad",letter:"ض",name:"ض",namePashto:"ض",sound:"/z/",latinEquivalent:"z",category:"basic",examples:[{word:"ضرور",meaning:"ضروری",transliteration:"zarūr"}]},{id:"twe",letter:"ط",name:"ط",namePashto:"ط",sound:"/t/",latinEquivalent:"t",category:"basic",examples:[{word:"طالب",meaning:"دانشجو",transliteration:"tālib"}]},{id:"zwe",letter:"ظ",name:"ظ",namePashto:"ظ",sound:"/z/",latinEquivalent:"z",category:"basic",examples:[{word:"ظلم",meaning:"ظلم",transliteration:"zulm"}]},{id:"ayn",letter:"ع",name:"ع",namePashto:"ع",sound:"/ʔ/",latinEquivalent:"a",category:"basic",examples:[{word:"علم",meaning:"علم",transliteration:"ilm"}]},{id:"ghayn",letter:"غ",name:"غ",namePashto:"غ",sound:"/ɣ/",latinEquivalent:"gh",category:"basic",examples:[{word:"غر",meaning:"کوه",transliteration:"ghar"},{word:"غوښه",meaning:"گوشت",transliteration:"ghwəṣ̌a"}]},{id:"fe",letter:"ف",name:"ف",namePashto:"ف",sound:"/f/",latinEquivalent:"f",category:"basic",examples:[{word:"فکر",meaning:"فکر",transliteration:"fikr"}]},{id:"qaf",letter:"ق",name:"ق",namePashto:"ق",sound:"/q/",latinEquivalent:"q",category:"basic",examples:[{word:"قلم",meaning:"قلم",transliteration:"qalam"}]},{id:"kaf",letter:"ک",name:"ک",namePashto:"ک",sound:"/k/",latinEquivalent:"k",category:"basic",examples:[{word:"کور",meaning:"خانه",transliteration:"kor"},{word:"کتاب",meaning:"کتاب",transliteration:"kitāb"}]},{id:"gaf",letter:"ګ",name:"ګ (گ پښتو)",namePashto:"ګ",sound:"/ɡ/",latinEquivalent:"g",category:"unique",isUnique:!0,examples:[{word:"ګل",meaning:"گل",transliteration:"gul"},{word:"ګران",meaning:"عزیز",transliteration:"grān"}]},{id:"lam",letter:"ل",name:"ل",namePashto:"ل",sound:"/l/",latinEquivalent:"l",category:"basic",examples:[{word:"لار",meaning:"راه",transliteration:"lār"},{word:"لوی",meaning:"بزرگ",transliteration:"loy"}]},{id:"mim",letter:"م",name:"م",namePashto:"م",sound:"/m/",latinEquivalent:"m",category:"basic",examples:[{word:"مور",meaning:"مادر",transliteration:"mor"},{word:"مڼه",meaning:"سیب",transliteration:"maṇa"}]},{id:"nun",letter:"ن",name:"ن",namePashto:"ن",sound:"/n/",latinEquivalent:"n",category:"basic",examples:[{word:"نوم",meaning:"نام",transliteration:"nom"},{word:"نن",meaning:"امروز",transliteration:"nan"}]},{id:"Nun",letter:"ڼ",name:"ڼ (ن برگشته)",namePashto:"ڼ",sound:"/ɳ/",latinEquivalent:"ṇ",category:"unique",isUnique:!0,examples:[{word:"مڼه",meaning:"سیب",transliteration:"maṇa"},{word:"پاڼه",meaning:"برگ",transliteration:"pāṇa"}]},{id:"waw",letter:"و",name:"و",namePashto:"و",sound:"/w, u, o/",latinEquivalent:"w, u, o",category:"vowel",examples:[{word:"ورور",meaning:"برادر",transliteration:"wror"},{word:"وړ",meaning:"کوچک",transliteration:"waṛ"}]},{id:"he2",letter:"ه",name:"ه",namePashto:"ه",sound:"/h, a/",latinEquivalent:"h, a",category:"basic",examples:[{word:"هغه",meaning:"او",transliteration:"hagha"},{word:"هره",meaning:"هر",transliteration:"hara"}]},{id:"schwa",letter:"ۀ",name:"ۀ (شوا)",namePashto:"ۀ",sound:"/ə/",latinEquivalent:"ə",category:"vowel",examples:[{word:"کۀ",meaning:"اگر",transliteration:"kə"}]},{id:"ye",letter:"ی",name:"ی (یے)",namePashto:"ی",sound:"/j, i, ai, iː, ə/",soundEnglish:'y (as in "yes"), ee (as in "see"), ay (as in "say"), long-ee, schwa',latinEquivalent:"y, i, ay, ī, ə",category:"vowel",description:"The letter ی has 5 different types with different pronunciations depending on position and function in the word",types:[{type:1,name:"ی as initial consonant",sound:"/j/",englishSound:'y (as in "yes")',position:"Beginning of word",example:{word:"یو",meaning:"یک",transliteration:"yo",englishSound:'yo (like "yoke")'},description:"When ی appears at the start of a word, it functions as a consonant with a y-sound"},{type:2,name:"ی as final vowel (short)",sound:"/i/",englishSound:'ee (as in "see")',position:"End of word",example:{word:"ملی",meaning:"ملی",transliteration:"milli",englishSound:'mil-lee (like "silly")'},description:"When ی appears at the end of a word, it functions as a short vowel with an ee-sound"},{type:3,name:"ی as final vowel (diphthong)",sound:"/ai/ or /əi/",englishSound:'ay (as in "say")',position:"End of word after consonant",example:{word:"سړی",meaning:"مرد",transliteration:"saṛay",englishSound:'sar-ay (like "say")'},description:"When ی appears at the end after a consonant, it creates a diphthong sound (ay or əy)"},{type:4,name:"ی as long vowel",sound:"/iː/",englishSound:'long-ee (as in "tree")',position:"Middle or end of word",example:{word:"کی",meaning:"کی",transliteration:"kī",englishSound:'kee (like "tree")'},description:"When ی represents a long vowel, it has an extended ee-sound"},{type:5,name:"ی as schwa vowel",sound:"/ə/",englishSound:'uh (as in "about")',position:"Unstressed syllables",example:{word:"بچی",meaning:"بچه",transliteration:"bəchay",englishSound:"buh-chay"},description:"In unstressed syllables, ی can represent a schwa sound (ə)"}],kandahariNotes:"In Kandahari dialect, the retroflex sounds (ش/ښ) can vary. For example: راشه (rāsha) may be pronounced as راسه (rāsa), and ولارشه (walārsha) may be pronounced as ولارسه (walārsa). This shows dialectal variation in retroflex consonants.",examples:[{word:"یو",meaning:"یک",transliteration:"yo",englishSound:'yo (like "yoke")',type:1},{word:"سړی",meaning:"مرد",transliteration:"saṛay",englishSound:'sar-ay (like "say")',type:3},{word:"ملی",meaning:"ملی",transliteration:"milli",englishSound:'mil-lee (like "silly")',type:2},{word:"کی",meaning:"کی",transliteration:"kī",englishSound:'kee (like "tree")',type:4},{word:"بچی",meaning:"بچه",transliteration:"bəchay",englishSound:"buh-chay",type:5}]},{id:"e",letter:"ې",name:"ې",namePashto:"ې",sound:"/e/",latinEquivalent:"e",category:"vowel",examples:[{word:"ښځې",meaning:"زنان",transliteration:"ṣ̌əze"},{word:"ملګرې",meaning:"دوست (مونث)",transliteration:"malgəre"}]},{id:"əy",letter:"ۍ",name:"ۍ (مونث)",namePashto:"ۍ",sound:"/əi/",latinEquivalent:"əy",category:"vowel",examples:[{word:"ښځۍ",meaning:"زن",transliteration:"ṣ̌əzəy"},{word:"ډوډۍ",meaning:"نان",transliteration:"ḍoḍəy"}]}],Yx=["ټ","ډ","ړ","ڼ","څ","ځ","ښ","ږ","ګ"];Vi.forEach(l=>{l.isUniqueToPashto=Yx.includes(l.letter)});const xs={ښ:{kandahari:"/ʂ/ - ش برگشته (retroflex)",kabuli:"/x/ - خ",ghazni:"/ç/ - صدای میانی",quetta:"/ʃ/ - ش",description:'در کندهاری، نوک زبان را به سمت سقف دهان ببرید و صدای "ش" برگشته بدهید',descriptionPashto:'په کندهاري کې، د ژبې سر د خولې چت ته یوسئ او شاته تاوېدونکی "ش" غږ وکړئ'},ږ:{kandahari:"/ʐ/ - ژ برگشته (retroflex)",kabuli:"/ɡ/ - گ",ghazni:"/ʝ/ - صدای میانی",quetta:"/ʒ/ - ژ",description:'در کندهاری، نوک زبان را به سمت سقف دهان ببرید و صدای "ژ" برگشته بدهید',descriptionPashto:'په کندهاري کې، د ژبې سر د خولې چت ته یوسئ او شاته تاوېدونکی "ژ" غږ وکړئ'}};function Gx(){const[l,c]=T.useState(null),[f,u]=T.useState("all"),h=Vi.filter(d=>f==="all"?!0:f==="unique"?d.isUnique:f==="kandahari"?d.isKandahariSpecial:d.category===f),m=[{id:"all",label:"همه",count:Vi.length},{id:"unique",label:"خاص پښتو",count:Vi.filter(d=>d.isUnique).length},{id:"kandahari",label:"کندهاری",count:Vi.filter(d=>d.isKandahariSpecial).length}];return s.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[s.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[s.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30",children:s.jsx(Ts,{className:"w-7 h-7 text-white"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:"الفبای پښتو"}),s.jsx("p",{className:"text-slate-400",children:"د پښتو الفبا - ۴۴ حرف با تمرکز بر گویش کندهاری"})]})]}),s.jsx("div",{className:"flex flex-wrap gap-2",children:m.map(d=>s.jsxs("button",{onClick:()=>u(d.id),className:`px-4 py-2 rounded-xl text-sm font-medium transition-all ${f===d.id?"bg-emerald-500 text-white shadow-md":"bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600"}`,children:[d.label," (",d.count,")"]},d.id))})]}),s.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-3",children:h.map(d=>s.jsxs("button",{onClick:()=>c(d),className:`relative bg-slate-800 rounded-xl p-4 shadow-lg border transition-all hover:shadow-xl hover:scale-105 ${d.isKandahariSpecial?"border-amber-500/50 bg-gradient-to-br from-amber-500/20 to-orange-500/20":d.isUnique?"border-emerald-500/50 bg-gradient-to-br from-emerald-500/20 to-green-500/20":"border-slate-700 hover:border-emerald-500/50"}`,children:[d.isKandahariSpecial&&s.jsx(yu,{className:"absolute top-1 left-1 w-4 h-4 text-amber-400"}),s.jsx("div",{className:"text-4xl font-bold text-slate-100 mb-1",children:d.letter}),s.jsx("div",{className:"text-xs text-slate-400 truncate",children:d.name})]},d.id))}),s.jsx("div",{className:"bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700",children:s.jsxs("div",{className:"flex flex-wrap gap-6 text-sm",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-4 h-4 rounded bg-gradient-to-br from-emerald-500/30 to-green-500/30 border border-emerald-500/50"}),s.jsx("span",{className:"text-slate-300",children:"حروف خاص پښتو (۹ حرف)"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-4 h-4 rounded bg-gradient-to-br from-amber-500/30 to-orange-500/30 border border-amber-500/50"}),s.jsx("span",{className:"text-slate-300",children:"تلفظ خاص کندهاری (ښ و ږ)"})]})]})}),l&&s.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:()=>c(null),children:s.jsx("div",{className:"bg-slate-800 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700",onClick:d=>d.stopPropagation(),children:s.jsxs("div",{className:"p-6",children:[s.jsxs("div",{className:"flex items-start justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:`w-20 h-20 rounded-2xl flex items-center justify-center text-5xl font-bold ${l.isKandahariSpecial?"bg-gradient-to-br from-amber-500/30 to-orange-500/30 text-amber-400 border border-amber-500/50":l.isUnique?"bg-gradient-to-br from-emerald-500/30 to-green-500/30 text-emerald-400 border border-emerald-500/50":"bg-slate-700 text-slate-200 border border-slate-600"}`,children:l.letter}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-slate-100",children:l.name}),s.jsx("p",{className:"text-slate-400",children:l.namePashto})]})]}),s.jsx("button",{onClick:()=>c(null),className:"p-2 hover:bg-slate-700 rounded-xl",children:s.jsx(bu,{className:"w-6 h-6 text-slate-400"})})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-xl p-4 mb-4 border border-slate-600",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[s.jsx(Wy,{className:"w-5 h-5 text-emerald-400"}),s.jsx("span",{className:"font-medium text-slate-200",children:"صدا"})]}),s.jsx("p",{className:"text-xl text-slate-100 font-mono",children:l.sound}),s.jsxs("p",{className:"text-sm text-slate-400 mt-1",children:["معادل لاتین: ",l.latinEquivalent]})]}),l.isKandahariSpecial&&xs[l.letter]&&s.jsxs("div",{className:"bg-amber-500/20 rounded-xl p-4 mb-4 border border-amber-500/30",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx(Zy,{className:"w-5 h-5 text-amber-400"}),s.jsx("span",{className:"font-bold text-amber-300",children:"تلفظ کندهاری"})]}),s.jsxs("div",{className:"space-y-2 text-sm",children:[s.jsxs("p",{className:"text-slate-300",children:[s.jsx("span",{className:"font-medium text-amber-400",children:"کندهاری:"})," ",xs[l.letter].kandahari]}),s.jsxs("p",{className:"text-slate-300",children:[s.jsx("span",{className:"font-medium text-amber-400",children:"کابلی:"})," ",xs[l.letter].kabuli]}),s.jsx("p",{className:"text-slate-400 mt-3",children:xs[l.letter].description})]})]}),l.examples&&l.examples.length>0&&s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-slate-200 mb-3",children:"مثال‌ها"}),s.jsx("div",{className:"space-y-2",children:l.examples.map((d,b)=>s.jsxs("div",{className:"flex items-center justify-between bg-slate-700/50 rounded-lg p-3 border border-slate-600",children:[s.jsx("span",{className:"text-xl font-bold text-emerald-400",children:d.word}),s.jsxs("div",{className:"text-left",children:[s.jsx("span",{className:"text-slate-300",children:d.meaning}),s.jsx("span",{className:"text-xs text-slate-500 block",children:d.transliteration})]})]},b))})]})]})})})]})}const Xx={head:[{pashto:"سر",farsi:"سر",pronunciation:"sar"},{pashto:"مخ",farsi:"صورت",pronunciation:"makh"},{pashto:"سترګې",farsi:"چشم‌ها",pronunciation:"stərge"},{pashto:"سترګه",farsi:"چشم",pronunciation:"stərga"},{pashto:"غوږ",farsi:"گوش",pronunciation:"ghwaẓ̌"},{pashto:"غوږونه",farsi:"گوش‌ها",pronunciation:"ghwaẓ̌úna"},{pashto:"پوزه",farsi:"بینی",pronunciation:"póza"},{pashto:"خوله",farsi:"دهان",pronunciation:"khwla"},{pashto:"ژبه",farsi:"زبان",pronunciation:"zhəba"},{pashto:"غاښ",farsi:"دندان",pronunciation:"ghāṣ̌"},{pashto:"غاښونه",farsi:"دندان‌ها",pronunciation:"ghāṣ̌úna"},{pashto:"شونډې",farsi:"لب‌ها",pronunciation:"shwánḍe"},{pashto:"وریځې",farsi:"ابرو",pronunciation:"wrídze"},{pashto:"باڼه",farsi:"مژه",pronunciation:"bāṇa"},{pashto:"ږیره",farsi:"ریش",pronunciation:"ẓ̌ira"},{pashto:"بریتونه",farsi:"سبیل",pronunciation:"britúna"},{pashto:"ویښته",farsi:"مو",pronunciation:"wéṣ̌ta"},{pashto:"تندی",farsi:"پیشانی",pronunciation:"tandáy"},{pashto:"زنه",farsi:"چانه",pronunciation:"zəna"}],body:[{pashto:"غاړه",farsi:"گردن",pronunciation:"ghāṛa"},{pashto:"ږمنځ",farsi:"شانه",pronunciation:"ẓ̌mənz"},{pashto:"سینه",farsi:"سینه",pronunciation:"sína"},{pashto:"شا",farsi:"پشت/کمر",pronunciation:"shā"},{pashto:"خېټه",farsi:"شکم",pronunciation:"kheṭa"},{pashto:"نوم",farsi:"ناف",pronunciation:"nom"},{pashto:"ملا",farsi:"کمر",pronunciation:"mlā"}],limbs:[{pashto:"لاس",farsi:"دست",pronunciation:"lās"},{pashto:"لاسونه",farsi:"دست‌ها",pronunciation:"lāsúna"},{pashto:"ګوته",farsi:"انگشت",pronunciation:"gúta"},{pashto:"ګوتې",farsi:"انگشت‌ها",pronunciation:"gúte"},{pashto:"نوک",farsi:"ناخن",pronunciation:"nok"},{pashto:"څنګل",farsi:"آرنج",pronunciation:"tsangál"},{pashto:"مټ",farsi:"بازو",pronunciation:"maṭ"},{pashto:"پښه",farsi:"پا",pronunciation:"pṣ̌a"},{pashto:"پښې",farsi:"پاها",pronunciation:"pṣ̌e"},{pashto:"زنګون",farsi:"زانو",pronunciation:"zangún"},{pashto:"پونده",farsi:"پاشنه",pronunciation:"pwnda"},{pashto:"تلی",farsi:"کف پا",pronunciation:"taláy"}],internal:[{pashto:"زړه",farsi:"قلب",pronunciation:"zṛa"},{pashto:"سږی",farsi:"ریه",pronunciation:"sẓ̌áy"},{pashto:"اینه",farsi:"کبد/جگر",pronunciation:"ína"},{pashto:"معده",farsi:"معده",pronunciation:"mi'da"},{pashto:"وینه",farsi:"خون",pronunciation:"wína"},{pashto:"هډوکی",farsi:"استخوان",pronunciation:"haḍukáy"},{pashto:"پوست",farsi:"پوست",pronunciation:"post"}],sentences:[{pashto:"زما سر خوږیږي",farsi:"سرم درد می‌کند",pronunciation:"zmā sar khwẓ̌éẓ̌i"},{pashto:"زما خېټه خوږیږي",farsi:"شکمم درد می‌کند",pronunciation:"zmā kheṭa khwẓ̌éẓ̌i"},{pashto:"سترګې مې خوږیږي",farsi:"چشم‌هایم درد می‌کند",pronunciation:"stərge me khwẓ̌éẓ̌i"},{pashto:"لاسونه ومینځه",farsi:"دست‌هایت را بشور",pronunciation:"lāsúna wamíndza"},{pashto:"غاښونه مې خوږیږي",farsi:"دندان‌هایم درد می‌کند",pronunciation:"ghāṣ̌úna me khwẓ̌éẓ̌i"},{pashto:"زما پښه مات شوه",farsi:"پایم شکست",pronunciation:"zmā pṣ̌a māt shwa"}]},Qx={basic:[{number:1,pashto:"یو",farsi:"یک",pronunciation:"yo"},{number:2,pashto:"دوه",farsi:"دو",pronunciation:"dwa"},{number:3,pashto:"درې",farsi:"سه",pronunciation:"dre"},{number:4,pashto:"څلور",farsi:"چهار",pronunciation:"tsalór"},{number:5,pashto:"پنځه",farsi:"پنج",pronunciation:"pindzá"},{number:6,pashto:"شپږ",farsi:"شش",pronunciation:"shpaẓ̌"},{number:7,pashto:"اووه",farsi:"هفت",pronunciation:"owá"},{number:8,pashto:"اته",farsi:"هشت",pronunciation:"atá"},{number:9,pashto:"نهه",farsi:"نه",pronunciation:"nahá"},{number:10,pashto:"لس",farsi:"ده",pronunciation:"las"}],teens:[{number:11,pashto:"یوولس",farsi:"یازده",pronunciation:"yowólas"},{number:12,pashto:"دولس",farsi:"دوازده",pronunciation:"dwólas"},{number:13,pashto:"دیارلس",farsi:"سیزده",pronunciation:"dyārlas"},{number:14,pashto:"څوارلس",farsi:"چهارده",pronunciation:"tswarlas"},{number:15,pashto:"پنځلس",farsi:"پانزده",pronunciation:"pindzálas"},{number:16,pashto:"شپاړس",farsi:"شانزده",pronunciation:"shpāṛas"},{number:17,pashto:"اوولس",farsi:"هفده",pronunciation:"owólas"},{number:18,pashto:"اتلس",farsi:"هجده",pronunciation:"atlas"},{number:19,pashto:"نولس",farsi:"نوزده",pronunciation:"nolas"},{number:20,pashto:"شل",farsi:"بیست",pronunciation:"shəl"}],tens:[{number:10,pashto:"لس",farsi:"ده",pronunciation:"las"},{number:20,pashto:"شل",farsi:"بیست",pronunciation:"shəl"},{number:30,pashto:"دېرش",farsi:"سی",pronunciation:"dérsh"},{number:40,pashto:"څلوېښت",farsi:"چهل",pronunciation:"tsalwéṣ̌t"},{number:50,pashto:"پنځوس",farsi:"پنجاه",pronunciation:"pindzós"},{number:60,pashto:"شپېته",farsi:"شصت",pronunciation:"shpéta"},{number:70,pashto:"اویا",farsi:"هفتاد",pronunciation:"awyā"},{number:80,pashto:"اتیا",farsi:"هشتاد",pronunciation:"atyā"},{number:90,pashto:"نوي",farsi:"نود",pronunciation:"nawí"},{number:100,pashto:"سل",farsi:"صد",pronunciation:"sal"}],twenties:[{number:21,pashto:"یویشت",farsi:"بیست و یک",pronunciation:"yowísht"},{number:22,pashto:"دوه ویشت",farsi:"بیست و دو",pronunciation:"dwa wísht"},{number:23,pashto:"درې ویشت",farsi:"بیست و سه",pronunciation:"dre wísht"},{number:24,pashto:"څلور ویشت",farsi:"بیست و چهار",pronunciation:"tsalór wísht"},{number:25,pashto:"پنځه ویشت",farsi:"بیست و پنج",pronunciation:"pindzá wísht"}],large:[{number:100,pashto:"سل",farsi:"صد",pronunciation:"sal"},{number:200,pashto:"دوه سوه",farsi:"دویست",pronunciation:"dwa swa"},{number:1e3,pashto:"زر",farsi:"هزار",pronunciation:"zar"},{number:1e4,pashto:"لس زره",farsi:"ده هزار",pronunciation:"las zára"},{number:1e5,pashto:"سل زره",farsi:"صد هزار",pronunciation:"sal zára"},{number:1e6,pashto:"میلیون",farsi:"میلیون",pronunciation:"milyón"}],sentences:[{pashto:"زه پنځه کاله لرم",farsi:"من پنج سال دارم",pronunciation:"za pindzá kāla laram"},{pashto:"دا کتاب دوه سوه افغانۍ دی",farsi:"این کتاب دویست افغانی است",pronunciation:"dā kitāb dwa swa afghānəy day"},{pashto:"زما درې وروڼه دي",farsi:"من سه برادر دارم",pronunciation:"zmā dre wroṇa di"},{pashto:"ساعت څو ده؟",farsi:"ساعت چند است؟",pronunciation:"sā'at tso da?"},{pashto:"ساعت لس ده",farsi:"ساعت ده است",pronunciation:"sā'at las da"}]},Vx={mainDishes:[{pashto:"ډوډۍ",farsi:"نان",pronunciation:"ḍoḍəy"},{pashto:"وریژې",farsi:"برنج",pronunciation:"wríže"},{pashto:"غوښه",farsi:"گوشت",pronunciation:"ghwṣ̌a"},{pashto:"مرغه",farsi:"مرغ",pronunciation:"murgha"},{pashto:"کباب",farsi:"کباب",pronunciation:"kabāb"},{pashto:"قورمه",farsi:"قورمه",pronunciation:"qorma"},{pashto:"پلو",farsi:"پلو",pronunciation:"paláw"},{pashto:"شوروا",farsi:"آش/سوپ",pronunciation:"shorwā"},{pashto:"منتو",farsi:"منتو",pronunciation:"mantú"},{pashto:"آشک",farsi:"آشک",pronunciation:"āshak"},{pashto:"بولانی",farsi:"بولانی",pronunciation:"bolāní"}],vegetables:[{pashto:"کچالو",farsi:"سیب‌زمینی",pronunciation:"kachāló"},{pashto:"بانجان",farsi:"بادنجان",pronunciation:"bānján"},{pashto:"مرچ",farsi:"فلفل",pronunciation:"mirch"},{pashto:"پیاز",farsi:"پیاز",pronunciation:"pyāz"},{pashto:"اوږه",farsi:"سیر",pronunciation:"wẓ̌a"},{pashto:"بادرنګ",farsi:"خیار",pronunciation:"bādrang"},{pashto:"رومی بانجان",farsi:"گوجه فرنگی",pronunciation:"rúmi bānján"},{pashto:"ګاجره",farsi:"هویج",pronunciation:"gājra"},{pashto:"شلغم",farsi:"شلغم",pronunciation:"shalgham"},{pashto:"پالک",farsi:"اسفناج",pronunciation:"pālak"},{pashto:"کرم",farsi:"کلم",pronunciation:"karam"}],fruits:[{pashto:"مڼه",farsi:"سیب",pronunciation:"maṇa"},{pashto:"انګور",farsi:"انگور",pronunciation:"angúr"},{pashto:"شفتالو",farsi:"هلو",pronunciation:"shaftāló"},{pashto:"زردالو",farsi:"زردآلو",pronunciation:"zardāló"},{pashto:"انار",farsi:"انار",pronunciation:"anār"},{pashto:"تربوز",farsi:"هندوانه",pronunciation:"tarbúz"},{pashto:"خربوزه",farsi:"خربزه",pronunciation:"kharbúza"},{pashto:"کیله",farsi:"موز",pronunciation:"kéla"},{pashto:"نارنج",farsi:"پرتقال",pronunciation:"nāranj"},{pashto:"لیمو",farsi:"لیمو",pronunciation:"limú"},{pashto:"توت",farsi:"توت",pronunciation:"tut"}],drinks:[{pashto:"اوبه",farsi:"آب",pronunciation:"óba"},{pashto:"چای",farsi:"چای",pronunciation:"chāy"},{pashto:"شیدې",farsi:"شیر",pronunciation:"shíde"},{pashto:"دوغ",farsi:"دوغ",pronunciation:"dogh"},{pashto:"شربت",farsi:"شربت",pronunciation:"sharbat"},{pashto:"قهوه",farsi:"قهوه",pronunciation:"qahwa"}],dairy:[{pashto:"شیدې",farsi:"شیر",pronunciation:"shíde"},{pashto:"مسکه",farsi:"کره",pronunciation:"máska"},{pashto:"پنیر",farsi:"پنیر",pronunciation:"panír"},{pashto:"ماست",farsi:"ماست",pronunciation:"māst"},{pashto:"قیماق",farsi:"سرشیر",pronunciation:"qaymāq"}],spices:[{pashto:"مالګه",farsi:"نمک",pronunciation:"mālga"},{pashto:"مرچ",farsi:"فلفل",pronunciation:"mirch"},{pashto:"زیره",farsi:"زیره",pronunciation:"zíra"},{pashto:"دارچینی",farsi:"دارچین",pronunciation:"dārchíni"},{pashto:"هېل",farsi:"هل",pronunciation:"hel"},{pashto:"زعفران",farsi:"زعفران",pronunciation:"za'farān"}],sentences:[{pashto:"زه وږی یم",farsi:"من گرسنه‌ام",pronunciation:"za waẓ̌áy yam"},{pashto:"زه تږی یم",farsi:"من تشنه‌ام",pronunciation:"za taẓ̌áy yam"},{pashto:"ډوډۍ چمتو ده؟",farsi:"غذا آماده است؟",pronunciation:"ḍoḍəy chamtó da?"},{pashto:"راځه ډوډۍ وخوره",farsi:"بیا غذا بخور",pronunciation:"rādza ḍoḍəy wakhwra"},{pashto:"ډېره خوندوره ده",farsi:"خیلی خوشمزه است",pronunciation:"ḍéra khwandwára da"},{pashto:"یو ګیلاس اوبه راکړه",farsi:"یک لیوان آب بده",pronunciation:"yo gilās óba rākṛa"},{pashto:"چای څښې؟",farsi:"چای می‌خوری؟",pronunciation:"chāy tsṣ̌e?"},{pashto:"مننه، ماړه شوم",farsi:"ممنون، سیر شدم",pronunciation:"manána, māṛa shwam"}]},Zx={basic:[{pashto:"سور",farsi:"قرمز",pronunciation:"sur"},{pashto:"شین",farsi:"سبز/آبی",pronunciation:"shin"},{pashto:"تور",farsi:"سیاه",pronunciation:"tor"},{pashto:"سپین",farsi:"سفید",pronunciation:"spin"},{pashto:"ژیړ",farsi:"زرد",pronunciation:"zhiṛ"},{pashto:"نیلي",farsi:"آبی",pronunciation:"níli"},{pashto:"ارغواني",farsi:"بنفش",pronunciation:"arghawāní"},{pashto:"نارنجي",farsi:"نارنجی",pronunciation:"nāranji"},{pashto:"خړ",farsi:"خاکستری",pronunciation:"khaṛ"},{pashto:"نسواري",farsi:"قهوه‌ای",pronunciation:"naswāri"},{pashto:"ګلابي",farsi:"صورتی",pronunciation:"gulābí"}],shades:[{pashto:"تیاره سور",farsi:"قرمز تیره",pronunciation:"tyāra sur"},{pashto:"روښانه سور",farsi:"قرمز روشن",pronunciation:"roṣ̌āna sur"},{pashto:"تیاره شین",farsi:"سبز تیره",pronunciation:"tyāra shin"},{pashto:"روښانه شین",farsi:"سبز روشن",pronunciation:"roṣ̌āna shin"},{pashto:"آسماني",farsi:"آبی آسمانی",pronunciation:"āsmāní"},{pashto:"سره زرغون",farsi:"سبز طلایی",pronunciation:"sra zarghún"}],adjectives:[{pashto:"روښانه",farsi:"روشن",pronunciation:"roṣ̌āna"},{pashto:"تیاره",farsi:"تیره",pronunciation:"tyāra"},{pashto:"رنګین",farsi:"رنگارنگ",pronunciation:"rangín"},{pashto:"بې رنګه",farsi:"بی‌رنگ",pronunciation:"be ranga"}],sentences:[{pashto:"دا رنګ څه دی؟",farsi:"این چه رنگی است؟",pronunciation:"dā rang tsa day?"},{pashto:"دا سور دی",farsi:"این قرمز است",pronunciation:"dā sur day"},{pashto:"زما خوښ رنګ شین دی",farsi:"رنگ مورد علاقه‌ام سبز است",pronunciation:"zmā khwáṣ̌ rang shin day"},{pashto:"آسمان نیلي دی",farsi:"آسمان آبی است",pronunciation:"āsmān níli day"},{pashto:"واښه شین دي",farsi:"چمن سبز است",pronunciation:"wāṣ̌a shin di"},{pashto:"سپین کمیس راکړه",farsi:"پیراهن سفید بده",pronunciation:"spin kamís rākṛa"},{pashto:"تور موټر ښکلی دی",farsi:"ماشین سیاه قشنگ است",pronunciation:"tor moṭar ṣ̌kuláy day"}],nature:[{pashto:"آسمان نیلي دی",farsi:"آسمان آبی است",pronunciation:"āsmān níli day"},{pashto:"لمر ژیړ دی",farsi:"خورشید زرد است",pronunciation:"lmar zhiṛ day"},{pashto:"واښه شین دي",farsi:"علف سبز است",pronunciation:"wāṣ̌a shin di"},{pashto:"واوره سپینه ده",farsi:"برف سفید است",pronunciation:"wāwra spína da"},{pashto:"ګل سور دی",farsi:"گل قرمز است",pronunciation:"gul sur day"}]},Kx={basic:[{infinitive:"کول",farsi:"کردن",pronunciation:"kawəl",present:"کوم",presentPronunciation:"kawəm",past:"وکړم",pastPronunciation:"wkṛam"},{infinitive:"تلل",farsi:"رفتن",pronunciation:"tlal",present:"ځم",presentPronunciation:"dzam",past:"لاړم",pastPronunciation:"lāṛam"},{infinitive:"راتلل",farsi:"آمدن",pronunciation:"rātlal",present:"راځم",presentPronunciation:"rādzam",past:"راغلم",pastPronunciation:"rāghlam"},{infinitive:"خوړل",farsi:"خوردن",pronunciation:"khwaṛal",present:"خورم",presentPronunciation:"khwram",past:"وخوړم",pastPronunciation:"wkhwaṛam"},{infinitive:"څښل",farsi:"نوشیدن",pronunciation:"tsṣ̌al",present:"څښم",presentPronunciation:"tsṣ̌am",past:"وڅښلم",pastPronunciation:"wtsṣ̌lam"},{infinitive:"لیدل",farsi:"دیدن",pronunciation:"lidal",present:"ګورم",presentPronunciation:"gwram",past:"ولیدم",pastPronunciation:"wlidam"},{infinitive:"اورېدل",farsi:"شنیدن",pronunciation:"awredal",present:"اورم",presentPronunciation:"awram",past:"واورېدم",pastPronunciation:"wawredam"},{infinitive:"ویل",farsi:"گفتن",pronunciation:"wayal",present:"وایم",presentPronunciation:"wāyam",past:"وویل",pastPronunciation:"wwayal"},{infinitive:"لوستل",farsi:"خواندن",pronunciation:"lwastal",present:"لولم",presentPronunciation:"lwlam",past:"ولوستم",pastPronunciation:"wlwastam"},{infinitive:"لیکل",farsi:"نوشتن",pronunciation:"likal",present:"لیکم",presentPronunciation:"likam",past:"ولیکم",pastPronunciation:"wlikam"}],movement:[{infinitive:"ناستل",farsi:"نشستن",pronunciation:"nāstal",present:"کېنم",presentPronunciation:"kenam"},{infinitive:"پاڅېدل",farsi:"بلند شدن",pronunciation:"pātseḍal",present:"پاڅېږم",presentPronunciation:"pātseẓ̌am"},{infinitive:"منډه وهل",farsi:"دویدن",pronunciation:"manḍa wahal",present:"منډه وهم",presentPronunciation:"manḍa waham"},{infinitive:"ګرځېدل",farsi:"گشتن",pronunciation:"gardzedal",present:"ګرځم",presentPronunciation:"gardzam"}],daily:[{infinitive:"ویده کېدل",farsi:"خوابیدن",pronunciation:"wída kedal",present:"ویده کېږم",presentPronunciation:"wída keẓ̌am"},{infinitive:"پاڅېدل",farsi:"بیدار شدن",pronunciation:"pātseḍal",present:"پاڅېږم",presentPronunciation:"pātseẓ̌am"},{infinitive:"مینځل",farsi:"شستن",pronunciation:"mindzal",present:"مینځم",presentPronunciation:"mindzam"},{infinitive:"اغوستل",farsi:"پوشیدن",pronunciation:"aghwastal",present:"اغوندم",presentPronunciation:"aghwandam"},{infinitive:"کار کول",farsi:"کار کردن",pronunciation:"kār kawəl",present:"کار کوم",presentPronunciation:"kār kawəm"}],emotional:[{infinitive:"خوښول",farsi:"دوست داشتن",pronunciation:"khwáṣ̌awəl",present:"خوښوم",presentPronunciation:"khwáṣ̌awəm"},{infinitive:"خندل",farsi:"خندیدن",pronunciation:"khandal",present:"خاندم",presentPronunciation:"khāndam"},{infinitive:"ژړل",farsi:"گریه کردن",pronunciation:"zhṛal",present:"ژاړم",presentPronunciation:"zhāṛam"},{infinitive:"ډارېدل",farsi:"ترسیدن",pronunciation:"ḍāredal",present:"ډارېږم",presentPronunciation:"ḍāreẓ̌am"}],essential:[{infinitive:"زدن",farsi:"زدن",pronunciation:"zadan",present:"زنم",presentPronunciation:"zanam",past:"وزدم",pastPronunciation:"wazadam"},{infinitive:"شستل",farsi:"شستن",pronunciation:"shastəl",present:"شونم",presentPronunciation:"shwanam",past:"وشستم",pastPronunciation:"washastam"},{infinitive:"ورکول",farsi:"دادن",pronunciation:"warkawəl",present:"ورکوم",presentPronunciation:"warkawəm",past:"ورکړ",pastPronunciation:"warkṛ"},{infinitive:"نیول",farsi:"گرفتن",pronunciation:"niyawəl",present:"نیسم",presentPronunciation:"nisam",past:"ونیول",pastPronunciation:"waniyawəl"},{infinitive:"ایستل",farsi:"ایستادن",pronunciation:"āystal",present:"ایسته‌ږم",presentPronunciation:"āysteẓ̌am",past:"ایسته",pastPronunciation:"āysta"},{infinitive:"ناستل",farsi:"نشستن",pronunciation:"nāstal",present:"کېنم",presentPronunciation:"kenam",past:"ناست",pastPronunciation:"nāst"}],sentences:[{pashto:"زه کور ته ځم",farsi:"من به خانه می‌روم",pronunciation:"za kor ta dzam"},{pashto:"هغه راغی",farsi:"او آمد",pronunciation:"hagha rāghay"},{pashto:"موږ ډوډۍ خورو",farsi:"ما غذا می‌خوریم",pronunciation:"mwẓ̌ ḍoḍəy khwrú"},{pashto:"ته څه کوې؟",farsi:"تو چه می‌کنی؟",pronunciation:"ta tsa kawe?"},{pashto:"زه کتاب لولم",farsi:"من کتاب می‌خوانم",pronunciation:"za kitāb lwlam"},{pashto:"هغه پښتو زده کوي",farsi:"او پښتو یاد می‌گیرد",pronunciation:"hagha pṣ̌to zda kawi"},{pashto:"زه ستړی یم",farsi:"من خسته‌ام",pronunciation:"za staṛáy yam"},{pashto:"راځه چای وڅښو",farsi:"بیا چای بنوشیم",pronunciation:"rādza chāy wtsṣ̌ú"}],conjugation:{verb:"کول",meaning:"کردن",present:[{person:"زه",form:"کوم",pronunciation:"kawəm"},{person:"ته",form:"کوې",pronunciation:"kawe"},{person:"هغه",form:"کوي",pronunciation:"kawi"},{person:"موږ",form:"کوو",pronunciation:"kawú"},{person:"تاسو",form:"کوئ",pronunciation:"kawəy"},{person:"هغوی",form:"کوي",pronunciation:"kawi"}],past:[{person:"زه",form:"وکړم",pronunciation:"wkṛam"},{person:"ته",form:"وکړې",pronunciation:"wkṛe"},{person:"هغه",form:"وکړ",pronunciation:"wkṛ"},{person:"موږ",form:"وکړو",pronunciation:"wkṛú"},{person:"تاسو",form:"وکړئ",pronunciation:"wkṛəy"},{person:"هغوی",form:"وکړل",pronunciation:"wkṛal"}]}},Jx={formal:[{pashto:"سلام علیکم",farsi:"سلام علیکم",pronunciation:"salām alaykum",response:"وعلیکم السلام",responsePronunciation:"wa alaykum as-salām",usage:"برای همه موقعیت‌ها مناسب است"},{pashto:"ستړی مه شئ",farsi:"خسته نباشید (رسمی)",pronunciation:"staṛáy ma shey",response:"تاسو هم ستړي مه شئ",responsePronunciation:"tāso ham staṛáy ma shey",usage:"برای بزرگترها و افراد رسمی"},{pashto:"حال مو څنګه دی؟",farsi:"حالتان چطور است؟",pronunciation:"hāl mo tsanga day?",response:"الحمدلله ښه یم، مننه",responsePronunciation:"alhamdulillāh ṣ̌a yam, manána",usage:"احوالپرسی رسمی"},{pashto:"خدای پامان",farsi:"خداحافظ",pronunciation:"khudāy pāmān",response:"په مخه دې ښه",responsePronunciation:"pa makha de ṣ̌a",usage:"خداحافظی رسمی"},{pashto:"تشریف راوړئ",farsi:"بفرمایید (دعوت)",pronunciation:"tashríf rāwṛey",usage:"دعوت کردن رسمی"}],informal:[{pashto:"سلام",farsi:"سلام",pronunciation:"salām",usage:"برای دوستان و همسالان"},{pashto:"ستړی مه شې",farsi:"خسته نباشی",pronunciation:"staṛáy ma she",response:"ته هم ستړی مه شې",responsePronunciation:"ta ham staṛáy ma she",usage:"برای دوستان و کوچکترها"},{pashto:"څنګه یې؟",farsi:"چطوری؟",pronunciation:"tsanga ye?",response:"ښه یم، ته څنګه یې؟",responsePronunciation:"ṣ̌a yam, ta tsanga ye?",usage:"احوالپرسی دوستانه"},{pashto:"څه حال دی؟",farsi:"چه حالی؟",pronunciation:"tsa hāl day?",usage:"احوالپرسی خودمانی"},{pashto:"ښه یې؟",farsi:"خوبی؟",pronunciation:"ṣ̌a ye?",usage:"سوال کوتاه"},{pashto:"بیا وینو",farsi:"بعداً می‌بینمت",pronunciation:"byā wino",usage:"خداحافظی دوستانه"}],comparison:[{context:"سلام کردن",formal:{pashto:"سلام علیکم",farsi:"سلام علیکم"},informal:{pashto:"سلام",farsi:"سلام"}},{context:"خسته نباشی",formal:{pashto:"ستړی مه شئ",farsi:"خسته نباشید"},informal:{pashto:"ستړی مه شې",farsi:"خسته نباشی"}},{context:"چطوری؟",formal:{pashto:"حال مو څنګه دی؟",farsi:"حالتان چطور است؟"},informal:{pashto:"څنګه یې؟",farsi:"چطوری؟"}},{context:"خوبم",formal:{pashto:"الحمدلله ښه یم",farsi:"الحمدلله خوبم"},informal:{pashto:"ښه یم",farsi:"خوبم"}},{context:"خداحافظ",formal:{pashto:"خدای پامان",farsi:"خداحافظ"},informal:{pashto:"بیا وینو",farsi:"بعداً می‌بینمت"}},{context:"بفرمایید",formal:{pashto:"تشریف راوړئ",farsi:"بفرمایید"},informal:{pashto:"راشه",farsi:"بیا"}}],howAreYou:[{pashto:"څنګه یې؟",farsi:"چطوری؟",pronunciation:"tsanga ye?",type:"غیررسمی"},{pashto:"څنګه یاست؟",farsi:"چطور هستید؟",pronunciation:"tsanga yāst?",type:"رسمی"},{pashto:"حال مو څنګه دی؟",farsi:"حالتان چطور است؟",pronunciation:"hāl mo tsanga day?",type:"رسمی"},{pashto:"روغ جوړ یې؟",farsi:"سالم هستی؟",pronunciation:"rogh joṛ ye?",type:"غیررسمی"},{pashto:"کورنۍ څنګه ده؟",farsi:"خانواده چطور است؟",pronunciation:"koranəy tsanga da?",type:"هر دو"},{pashto:"ماشومان ښه دي؟",farsi:"بچه‌ها خوبند؟",pronunciation:"māshomān ṣ̌a di?",type:"هر دو"}],responses:[{pashto:"ښه یم، مننه",farsi:"خوبم، ممنون",pronunciation:"ṣ̌a yam, manána",type:"غیررسمی"},{pashto:"الحمدلله ښه یم",farsi:"الحمدلله خوبم",pronunciation:"alhamdulillāh ṣ̌a yam",type:"رسمی"},{pashto:"ډېر ښه یم",farsi:"خیلی خوبم",pronunciation:"ḍer ṣ̌a yam",type:"غیررسمی"},{pashto:"ته څنګه یې؟",farsi:"تو چطوری؟",pronunciation:"ta tsanga ye?",type:"غیررسمی"},{pashto:"تاسو څنګه یاست؟",farsi:"شما چطور هستید؟",pronunciation:"tāso tsanga yāst?",type:"رسمی"},{pashto:"ټول ښه دي، الحمدلله",farsi:"همه خوبند، الحمدلله",pronunciation:"ṭol ṣ̌a di, alhamdulillāh",type:"هر دو"}],timeOfDay:[{pashto:"سهار مو په خیر",farsi:"صبح بخیر",pronunciation:"sahār mo pa khayr",type:"رسمی"},{pashto:"سهار دې په خیر",farsi:"صبحت بخیر",pronunciation:"sahār de pa khayr",type:"غیررسمی"},{pashto:"ماښام مو په خیر",farsi:"عصر بخیر",pronunciation:"māṣ̌ām mo pa khayr",type:"رسمی"},{pashto:"شپه مو په خیر",farsi:"شب بخیر",pronunciation:"shpa mo pa khayr",type:"رسمی"},{pashto:"شپه دې په خیر",farsi:"شبت بخیر",pronunciation:"shpa de pa khayr",type:"غیررسمی"}],thanksAndApology:[{pashto:"مننه",farsi:"ممنون",pronunciation:"manána",type:"غیررسمی"},{pashto:"ډېره مننه",farsi:"خیلی ممنون",pronunciation:"ḍera manána",type:"هر دو"},{pashto:"ستاسو مننه",farsi:"از شما ممنون",pronunciation:"stāso manána",type:"رسمی"},{pashto:"هیڅ نه",farsi:"خواهش می‌کنم",pronunciation:"hits na",type:"غیررسمی"},{pashto:"بخښنه غواړم",farsi:"ببخشید",pronunciation:"bakhṣ̌əna ghwāṛam",type:"رسمی"},{pashto:"بخښه",farsi:"ببخش",pronunciation:"bakhṣ̌a",type:"غیررسمی"},{pashto:"معذرت غواړم",farsi:"معذرت می‌خواهم",pronunciation:"ma'zarat ghwāṛam",type:"رسمی"}],welcome:[{pashto:"په خیر راغلاست",farsi:"خوش آمدید",pronunciation:"pa khayr rāghlāst",type:"رسمی"},{pashto:"په خیر راغلې",farsi:"خوش آمدی",pronunciation:"pa khayr rāghle",type:"غیررسمی"},{pashto:"تشریف راوړئ",farsi:"بفرمایید",pronunciation:"tashríf rāwṛey",type:"رسمی"},{pashto:"راشه",farsi:"بیا",pronunciation:"rāsha",type:"غیررسمی"},{pashto:"کور دې آباد",farsi:"خانه‌ات آباد",pronunciation:"kor de ābād",type:"غیررسمی"},{pashto:"کور مو آباد",farsi:"خانه‌تان آباد",pronunciation:"kor mo ābād",type:"رسمی"}],sampleConversation:[{speaker:"A",pashto:"سلام علیکم!",farsi:"سلام علیکم!"},{speaker:"B",pashto:"و علیکم السلام! ستړی مه شې",farsi:"و علیکم السلام! خسته نباشی"},{speaker:"A",pashto:"ته هم ستړی مه شې. څنګه یې؟",farsi:"تو هم خسته نباشی. چطوری؟"},{speaker:"B",pashto:"الحمدلله ښه یم. ته څنګه یې؟",farsi:"الحمدلله خوبم. تو چطوری؟"},{speaker:"A",pashto:"زه هم ښه یم، مننه. کورنۍ ښه ده؟",farsi:"من هم خوبم، ممنون. خانواده خوب است؟"},{speaker:"B",pashto:"ټول ښه دي، الحمدلله. ستاسو کورنۍ؟",farsi:"همه خوبند، الحمدلله. خانواده شما؟"},{speaker:"A",pashto:"هغوی هم ښه دي. خو اوس باید لاړ شم",farsi:"آنها هم خوبند. ولی حالا باید بروم"},{speaker:"B",pashto:"ښه، خدای پامان!",farsi:"خوب، خداحافظ!"},{speaker:"A",pashto:"په مخه دې ښه، بیا وینو!",farsi:"به سلامت، بعداً می‌بینمت!"}],culturalNote:{pashto:"په پښتو کې «ستړی مه شې» یو ډېر مهم سلام دی. دا د درناوي او مینې نښه ده. کله چې یو څوک کار کوي یا له سفره راځي، پښتانه ورته وایي «ستړی مه شې». جواب یې «ته هم ستړی مه شې» یا «مننه» دی.",farsi:"در پښتو «ستړی مه شې» (خسته نباشی) یک سلام بسیار مهم است. این نشانه احترام و محبت است. وقتی کسی کار می‌کند یا از سفر برمی‌گردد، پښتون‌ها به او می‌گویند «ستړی مه شې». جواب آن «ته هم ستړی مه شې» (تو هم خسته نباشی) یا «مننه» (ممنون) است."}},Fx={common:[{pashto:"یار",farsi:"رفیق/دوست",pronunciation:"yār",usage:"برای صدا زدن دوست",example:"یاره، راځه!",exampleFarsi:"رفیق، بیا!"},{pashto:"ورور",farsi:"برادر (برای دوست)",pronunciation:"wror",usage:"برای صدا زدن دوست صمیمی",example:"وروره، څه کوې؟",exampleFarsi:"برادر، چه می‌کنی؟"},{pashto:"ملګری",farsi:"رفیق",pronunciation:"malgáray",usage:"دوست صمیمی",example:"زما ملګری دی",exampleFarsi:"رفیق من است"},{pashto:"بس کړه",farsi:"بس کن",pronunciation:"bas kṛa",usage:"وقتی می‌خواهی کسی کاری را متوقف کند",example:"بس کړه، ډېر شو",exampleFarsi:"بس کن، زیاد شد"},{pashto:"چپ شه",farsi:"ساکت شو",pronunciation:"chup sha",usage:"غیررسمی برای ساکت شدن",example:"چپ شه، غږ مه کوه",exampleFarsi:"ساکت شو، صدا نکن"}],exclamations:[{pashto:"واه واه!",farsi:"عالی!/چه خوب!",pronunciation:"wāh wāh!",usage:"برای تعریف و تمجید"},{pashto:"افسوس!",farsi:"افسوس!/حیف!",pronunciation:"afsós!",usage:"برای ابراز تأسف"},{pashto:"ای خدایه!",farsi:"ای خدا!",pronunciation:"ay khudāya!",usage:"برای تعجب یا ناراحتی"},{pashto:"ماشاالله!",farsi:"ماشاالله!",pronunciation:"māshāallāh!",usage:"برای تعریف و دور کردن چشم بد"},{pashto:"انشاالله",farsi:"انشاالله",pronunciation:"inshāallāh",usage:"برای آینده و امید"},{pashto:"توبه!",farsi:"توبه!/عجب!",pronunciation:"tawba!",usage:"برای تعجب یا ناباوری"}],kandahariSpecific:[{pashto:"ښه خو",farsi:"خوب دیگه",pronunciation:"ṣ̌a kho",usage:"برای پایان دادن به بحث یا موافقت"},{pashto:"څه وشول؟",farsi:"چه شد؟",pronunciation:"tsa wshwal?",usage:"پرسیدن درباره اتفاق"},{pashto:"هیڅ نه",farsi:"هیچی نه",pronunciation:"hets na",usage:"جواب منفی"},{pashto:"ولې نه؟",farsi:"چرا نه؟",pronunciation:"wale na?",usage:"سوال کردن"},{pashto:"کوم خبره؟",farsi:"چه خبر؟",pronunciation:"kum khabara?",usage:"پرسیدن خبر"}],friendly:[{pashto:"زړه مې خوښ شو",farsi:"خوشحال شدم",pronunciation:"zṛa me khwáṣ̌ sho",usage:"ابراز خوشحالی"},{pashto:"ستا مخ ته",farsi:"به خاطر تو",pronunciation:"stā makh ta",usage:"احترام گذاشتن"},{pashto:"خدای دې مل شه",farsi:"خدا همراهت باشد",pronunciation:"khudāy de mal sha",usage:"دعای خیر"},{pashto:"ژوند دې اوږد شه",farsi:"عمرت دراز باشد",pronunciation:"zhwand de wẓ̌d sha",usage:"دعای خیر"}],negative:[{pashto:"لاړ شه",farsi:"برو",pronunciation:"lāṛ sha",usage:"گفتن به کسی که برود (می‌تواند بی‌ادبانه باشد)"},{pashto:"پرېږده",farsi:"ولش کن",pronunciation:"preẓ̌da",usage:"رها کردن موضوع"},{pashto:"ستړی کوې",farsi:"خسته می‌کنی",pronunciation:"staṛáy kawe",usage:"وقتی کسی اذیت می‌کند"}],proverbs:[{pashto:"چې اوبه تېرې شي، پل جوړوي",farsi:"وقتی آب رفت، پل می‌سازد",meaning:"کار از کار گذشته",pronunciation:"che óba tére shi, pul joṛawi"},{pashto:"یو ګل سره پسرلی نه راځي",farsi:"با یک گل بهار نمی‌آید",meaning:"یک نفر کافی نیست",pronunciation:"yo gul sara psarláy na rādzi"},{pashto:"چې زړه کې وي، په مخ کې ښکاري",farsi:"آنچه در دل است، در صورت پیداست",meaning:"احساسات پنهان نمی‌مانند",pronunciation:"che zṛa ke wi, pa makh ke ṣ̌kāri"},{pashto:"د خپل کور ډوډۍ خوږه ده",farsi:"نان خانه خودت شیرین است",meaning:"خانه خود بهتر است",pronunciation:"da khpal kor ḍoḍəy khwẓ̌a da"}],sampleConversation:[{speaker:"A",pashto:"یاره، څه کوې؟",farsi:"رفیق، چه می‌کنی؟"},{speaker:"B",pashto:"هیڅ نه، ناست یم",farsi:"هیچی، نشستم"},{speaker:"A",pashto:"راځه بازار ته لاړ شو",farsi:"بیا بریم بازار"},{speaker:"B",pashto:"ولې؟ څه کار لرې؟",farsi:"چرا؟ چه کار داری؟"},{speaker:"A",pashto:"یو څه اخیستل غواړم",farsi:"یه چیزی می‌خوام بخرم"},{speaker:"B",pashto:"ښه خو، لاړ شه",farsi:"خوب دیگه، بریم"},{speaker:"A",pashto:"واه واه، ډېره مننه وروره",farsi:"عالی، خیلی ممنون برادر"}]},Ka={shopping:{title:"در بازار - خرید کردن",titlePashto:"په بازار کې - پېرود",description:"چانه زدن واقعی در بازار شاه‌بازار کندهار - با اصطلاحات محلی",dialogue:[{speaker:"خریدار",pashto:"سلام علیکم ورور! څنګه یې؟",farsi:"سلام علیکم برادر! چطوری؟",formalAlt:"سلام علیکم صاحب! جوړ یاست؟",formalAltFarsi:"سلام علیکم آقا! حالتان خوب است؟"},{speaker:"فروشنده",pashto:"و علیکم السلام! الحمدلله ښه یم. راشه ورور، کېنه! چای راوړم؟",farsi:"و علیکم السلام! الحمدلله خوبم. بیا برادر، بشین! چای بیارم؟",formalAlt:"و علیکم السلام! راشئ صاحب، تشریف راوړئ!",formalAltFarsi:"و علیکم السلام! بیایید آقا، تشریف بیاورید!"},{speaker:"خریدار",pashto:"نه مننه ورور، چای مو وخوړ. دا کمیسونه راښیه، کوم ښه دی؟",farsi:"نه ممنون برادر، چای خوردیم. این پیراهن‌ها را نشان بده، کدام خوب است؟"},{speaker:"فروشنده",pashto:"دا وګوره ورور! دا اصلي پاکستاني مال دی، کراچۍ نه راغلی. ډېر ښه کیفیت لري",farsi:"این را ببین برادر! این جنس اصل پاکستانی است، از کراچی آمده. کیفیت خیلی خوب دارد"},{speaker:"خریدار",pashto:"هو ښه ښکاري. دا څومره دی؟",farsi:"آره خوب به نظر می‌رسد. این چند است؟"},{speaker:"فروشنده",pashto:"دا دوه زره پنځه سوه افغانۍ دی ورور",farsi:"این دو هزار و پانصد افغانی است برادر"},{speaker:"خریدار",pashto:"دوه زره پنځه سوه؟! ورور دا خو ډېر ګران دی! زه خو بله دوکان کې زر اته سوه ولیدل",farsi:"دو هزار و پانصد؟! برادر این خیلی گران است! من در دکان دیگر هزار و هشتصد دیدم"},{speaker:"فروشنده",pashto:"ورور هغه مال بل دی، دا اصلي مال دی. وګوره دا ګلدوزي، دا تکمه، دا ټوکر!",farsi:"برادر آن جنس فرق دارد، این جنس اصل است. ببین این گلدوزی، این دکمه، این پارچه!"},{speaker:"خریدار",pashto:"ښه ورور پوهیږم، خو زر پنځه سوه کوه. زه دایمي مشتري یم",farsi:"خوب برادر می‌فهمم، ولی هزار و پانصد کن. من مشتری دائمی هستم",formalAlt:"پوهیږم صاحب، خو که شي زر پنځه سوه کړئ، مهرباني",formalAltFarsi:"می‌فهمم آقا، ولی اگر می‌شود هزار و پانصد کنید، لطفاً"},{speaker:"فروشنده",pashto:"ورور والله دا نه کیږي، زه پکې نفع نلرم. دوه زره آخري قیمت، د خدای لپاره",farsi:"برادر والله این نمی‌شود، من سودی ندارم. دو هزار آخرین قیمت، به خدا"},{speaker:"خریدار",pashto:"ښه زر اووه سوه؟ زه دوه دانې اخلم، یو د ځان لپاره یو د ورور لپاره",farsi:"خوب هزار و هفتصد؟ من دو تا می‌خرم، یکی برای خودم یکی برای برادرم"},{speaker:"فروشنده",pashto:"ښه ورور، ستا د خاطر زر اته سوه. دوه دانې درې زره شپږ سوه کیږي",farsi:"خوب برادر، به خاطر تو هزار و هشتصد. دو تا سه هزار و ششصد می‌شود"},{speaker:"خریدار",pashto:"درې زره پنځه سوه کوه، قبول ده",farsi:"سه هزار و پانصد کن، قبول است"},{speaker:"فروشنده",pashto:"ښه ورور، ستا خوشحالي. دا واخله، بکس کې یې اچوم",farsi:"خوب برادر، خوشحالی تو. این بگیر، توی کیسه می‌ذارمش"},{speaker:"خریدار",pashto:"مننه ورور، خدای دې برکت درکړي. خدای پامان!",farsi:"ممنون برادر، خدا برکتت بدهد. خداحافظ!"},{speaker:"فروشنده",pashto:"خدای پامان ورور! بیا راشه، کور دې آباد!",farsi:"خداحافظ برادر! باز بیا، خانه‌ات آباد!"}],vocabulary:[{pashto:"څومره",farsi:"چقدر",pronunciation:"tsómra"},{pashto:"قیمت",farsi:"قیمت",pronunciation:"qimát"},{pashto:"ګران",farsi:"گران",pronunciation:"grān"},{pashto:"ارزان",farsi:"ارزان",pronunciation:"arzān"},{pashto:"کم کړه",farsi:"کم کن",pronunciation:"kam kṛa"},{pashto:"واخله",farsi:"بگیر/ببر",pronunciation:"wākhla"},{pashto:"پیسې",farsi:"پول",pronunciation:"payse"},{pashto:"بازار",farsi:"بازار",pronunciation:"bāzār"},{pashto:"پېرود",farsi:"خرید",pronunciation:"perod"},{pashto:"کمیس",farsi:"پیراهن",pronunciation:"kamís"},{pashto:"مال",farsi:"جنس",pronunciation:"māl"},{pashto:"کیفیت",farsi:"کیفیت",pronunciation:"kayfiyát"},{pashto:"دانه",farsi:"عدد/تا",pronunciation:"dāna"},{pashto:"بکس",farsi:"کیسه",pronunciation:"baks"},{pashto:"دایمي مشتري",farsi:"مشتری دائمی",pronunciation:"dāyimí mushtarí"},{pashto:"نفع",farsi:"سود",pronunciation:"náfa"},{pashto:"ګلدوزي",farsi:"گلدوزی",pronunciation:"guldozí"},{pashto:"تکمه",farsi:"دکمه",pronunciation:"takma"},{pashto:"ټوکر",farsi:"پارچه",pronunciation:"ṭokar"}],usefulPhrases:[{pashto:"دا ښه شی دی؟",farsi:"این جنس خوب است؟",pronunciation:"dā ṣ̌a shay day?"},{pashto:"بل رنګ لرې؟",farsi:"رنگ دیگر داری؟",pronunciation:"bal rang lare?"},{pashto:"دا نوی دی که زوړ؟",farsi:"این نو است یا کهنه؟",pronunciation:"dā naway day ka zoṛ?"},{pashto:"آخري قیمت څه دی؟",farsi:"آخرین قیمت چند است؟",pronunciation:"ākhirí qimát tsa day?"},{pashto:"لوی سایز لرې؟",farsi:"سایز بزرگ داری؟",pronunciation:"loy sāyz lare?"},{pashto:"دا امتحان کړم؟",farsi:"این را امتحان کنم؟",pronunciation:"dā imtihān kṛam?"},{pashto:"بله دوکان ته ځم",farsi:"به دکان دیگر می‌روم",pronunciation:"bala dokān ta dzam"},{pashto:"خدای دې برکت درکړي",farsi:"خدا برکتت بدهد",pronunciation:"khodāy de barkat darkṛi"},{pashto:"کور دې آباد",farsi:"خانه‌ات آباد",pronunciation:"kor de ābād"},{pashto:"زه دایمي مشتري یم",farsi:"من مشتری دائمی هستم",pronunciation:"za dāyimí mushtarí yam"}]},restaurant:{title:"در رستوران - سفارش غذا",titlePashto:"په هوټل کې - د ډوډۍ فرمایش",description:"سفارش غذا در هوټل کندهاری - با اصطلاحات محلی و غذاهای سنتی",dialogue:[{speaker:"گارسون",pashto:"سلام علیکم صاحبانو! په خیر راغلاست، تشریف راوړئ!",farsi:"سلام علیکم آقایان! خوش آمدید، تشریف بیاورید!"},{speaker:"مشتری",pashto:"و علیکم السلام ورور، مننه. دلته کېنو؟",farsi:"و علیکم السلام برادر، ممنون. اینجا بنشینیم؟"},{speaker:"گارسون",pashto:"هو صاحب، دلته کېنئ، دا ښه ځای دی، هوا ښه ده. اوبه راوړم؟",farsi:"بله آقا، اینجا بنشینید، این جای خوب است، هوا خوب است. آب بیارم؟"},{speaker:"مشتری",pashto:"هو مننه، سړې اوبه راوړه. نن څه تازه لرئ؟",farsi:"بله ممنون، آب سرد بیار. امروز چه تازه دارید؟"},{speaker:"گارسون",pashto:"نن کابلي پلو ډېر خوندور دی، تازه جوړ شوی. قورمه، چپلي کباب، او شورنخود هم لرو",farsi:"امروز پلو کابلی خیلی خوشمزه است، تازه درست شده. قورمه، چپلی کباب، و شورنخود هم داریم"},{speaker:"مشتری",pashto:"کابلي پلو څومره دی؟ او چپلي کباب؟",farsi:"پلو کابلی چند است؟ و چپلی کباب؟"},{speaker:"گارسون",pashto:"پلو دوه سوه پنځوس، چپلي کباب سل پنځوس. ډبل پلیټ پلو څلور سوه کیږي",farsi:"پلو دویست و پنجاه، چپلی کباب صد و پنجاه. بشقاب دوبل پلو چهارصد می‌شود"},{speaker:"مشتری",pashto:"یو ډبل پلیټ کابلي پلو راوړه، او دوه دانې چپلي کباب. سلاد هم ورسره",farsi:"یک بشقاب دوبل پلو کابلی بیار، و دو تا چپلی کباب. سلاد هم باهاش",formalAlt:"یو ډبل پلیټ کابلي پلو راوړئ، او دوه دانې چپلي کباب. سلاد هم که مهرباني وکړئ",formalAltFarsi:"یک بشقاب دوبل پلو کابلی بیاورید، و دو تا چپلی کباب. سلاد هم لطفاً"},{speaker:"گارسون",pashto:"څه څښاک غواړئ؟ چای، دوغ، کوکاکولا، یا شربت؟ نن تازه دوغ لرو",farsi:"چه نوشیدنی می‌خواهید؟ چای، دوغ، کوکاکولا، یا شربت؟ امروز دوغ تازه داریم"},{speaker:"مشتری",pashto:"دوه دوغ راوړه، ښه سړه وي",farsi:"دو تا دوغ بیار، خوب سرد باشد"},{speaker:"گارسون",pashto:"ډوډۍ چمتو ده صاحب! دا پلو، دا کباب، دا سلاد. نوش جان وشي!",farsi:"غذا آماده است آقا! این پلو، این کباب، این سلاد. نوش جان باشد!"},{speaker:"مشتری",pashto:"مننه ورور. واه واه! دا ډېره خوندوره ده! لاس مو درد نکړي، ډېر مزه دار دی",farsi:"ممنون برادر. واه واه! این خیلی خوشمزه است! دستتان درد نکند، خیلی مزه‌دار است"},{speaker:"گارسون",pashto:"نوش جان صاحب! نور څه غواړئ؟ ډوډۍ بسیا ده؟",farsi:"نوش جان آقا! چیز دیگری می‌خواهید؟ غذا کافی است؟"},{speaker:"مشتری",pashto:"هو بسیا ده مننه. وروسته یو شین چای راوړه، او فرني هم لرئ؟",farsi:"بله کافی است ممنون. بعداً یک چای سبز بیار، و فرنی هم دارید؟"},{speaker:"گارسون",pashto:"هو صاحب، تازه فرني لرو. چای او فرني راوړم",farsi:"بله آقا، فرنی تازه داریم. چای و فرنی می‌آورم"},{speaker:"مشتری",pashto:"حساب راکړه ورور، ټول څومره شول؟",farsi:"حساب بده برادر، همه چقدر شد؟"},{speaker:"گارسون",pashto:"پلو څلور سوه، کباب درې سوه، سلاد پنځوس، دوغ پنځوس، چای شل، فرني پنځوس. ټول اته سوه اویا افغانۍ",farsi:"پلو چهارصد، کباب سیصد، سلاد پنجاه، دوغ پنجاه، چای بیست، فرنی پنجاه. همه هشتصد و هفتاد افغانی"},{speaker:"مشتری",pashto:"دا زر واخله، باقي ستا. ډېره مننه، ډوډۍ ډېره خوندوره وه!",farsi:"این هزار بگیر، باقی مال تو. خیلی ممنون، غذا خیلی خوشمزه بود!"},{speaker:"گارسون",pashto:"ډېره مننه صاحب! خدای مو مالدار کړي! بیا تشریف راوړئ، کور مو آباد!",farsi:"خیلی ممنون آقا! خدا مالدارتان کند! باز تشریف بیاورید، خانه‌تان آباد!"}],vocabulary:[{pashto:"هوټل",farsi:"رستوران",pronunciation:"hoṭál"},{pashto:"مینو",farsi:"منو",pronunciation:"menú"},{pashto:"ډوډۍ",farsi:"غذا/نان",pronunciation:"ḍoḍəy"},{pashto:"راوړه",farsi:"بیار",pronunciation:"rāwṛa"},{pashto:"څښاک",farsi:"نوشیدنی",pronunciation:"tsṣ̌āk"},{pashto:"خوندور",farsi:"خوشمزه",pronunciation:"khwandwár"},{pashto:"حساب",farsi:"حساب",pronunciation:"hisāb"},{pashto:"چمتو",farsi:"آماده",pronunciation:"chamtó"},{pashto:"نوش جان",farsi:"نوش جان",pronunciation:"nosh jān"},{pashto:"پلیټ",farsi:"بشقاب",pronunciation:"pleṭ"},{pashto:"ډبل",farsi:"دوبل",pronunciation:"ḍabal"},{pashto:"تازه",farsi:"تازه",pronunciation:"tāza"},{pashto:"سړه",farsi:"سرد",pronunciation:"saṛa"},{pashto:"ګرم",farsi:"گرم",pronunciation:"garm"},{pashto:"چپلي کباب",farsi:"چپلی کباب",pronunciation:"chaplí kabāb"},{pashto:"کابلي پلو",farsi:"پلو کابلی",pronunciation:"kābulí palaw"},{pashto:"قورمه",farsi:"قورمه",pronunciation:"qorma"},{pashto:"شورنخود",farsi:"شورنخود",pronunciation:"shornakhód"},{pashto:"فرني",farsi:"فرنی",pronunciation:"firnī"},{pashto:"بسیا",farsi:"کافی",pronunciation:"basyā"},{pashto:"مزه دار",farsi:"مزه‌دار",pronunciation:"maza dār"}],usefulPhrases:[{pashto:"دا تریخ دی؟",farsi:"این تند است؟",pronunciation:"dā trikh day?"},{pashto:"بې مرچ جوړ کړه",farsi:"بدون فلفل درست کن",pronunciation:"be march joṛ kṛa"},{pashto:"اوبه راوړه",farsi:"آب بیار",pronunciation:"oba rāwṛa"},{pashto:"ډوډۍ تازه ده؟",farsi:"غذا تازه است؟",pronunciation:"ḍoḍəy tāza da?"},{pashto:"نور راوړه",farsi:"بیشتر بیار",pronunciation:"nor rāwṛa"},{pashto:"بس دی مننه",farsi:"بس است ممنون",pronunciation:"bas day manana"},{pashto:"ډېر خوندور و",farsi:"خیلی خوشمزه بود",pronunciation:"ḍer khwandwár wo"},{pashto:"خدای مو مالدار کړي",farsi:"خدا مالدارتان کند",pronunciation:"khodāy mo māldār kṛi"},{pashto:"واه واه!",farsi:"واه واه! (تعجب از خوشمزگی)",pronunciation:"wāh wāh!"},{pashto:"ډوډۍ بسیا ده؟",farsi:"غذا کافی است؟",pronunciation:"ḍoḍəy basyā da?"}]},introduction:{title:"معرفی و آشنایی",titlePashto:"پېژندنه او معرفي",description:"معرفی خود و آشنایی با دیگران",dialogue:[{speaker:"احمد",pashto:"سلام علیکم",farsi:"سلام علیکم"},{speaker:"محمود",pashto:"و علیکم السلام، څنګه یاست؟",farsi:"و علیکم السلام، چطور هستید؟",informalAlt:"و علیکم السلام، څنګه یې؟",informalAltFarsi:"و علیکم السلام، چطوری؟"},{speaker:"احمد",pashto:"ښه یم، مننه. زما نوم احمد دی",farsi:"خوبم، ممنون. اسم من احمد است"},{speaker:"محمود",pashto:"زما نوم محمود دی. خوشحاله شوم چې پېژندم تاسو",farsi:"اسم من محمود است. خوشحال شدم که آشنا شدم",informalAlt:"زما نوم محمود دی. خوشحاله شوم",informalAltFarsi:"اسم من محمود است. خوشحال شدم"},{speaker:"احمد",pashto:"تاسو له کومه ځایه یاست؟",farsi:"شما از کجا هستید؟",informalAlt:"ته له کومه ځایه یې؟",informalAltFarsi:"تو از کجایی؟"},{speaker:"محمود",pashto:"زه له کندهاره یم، له ارغنداب ولسوالۍ",farsi:"من از قندهارم، از ولسوالی ارغنداب"},{speaker:"احمد",pashto:"زه هم کندهاری یم، له شهر نه",farsi:"من هم قندهاری‌ام، از شهر"},{speaker:"محمود",pashto:"تاسو څه کار کوئ؟",farsi:"شما چه کار می‌کنید؟",informalAlt:"ته څه کار کوې؟",informalAltFarsi:"تو چه کار می‌کنی؟"},{speaker:"احمد",pashto:"زه انجنیر یم، په یوه شرکت کې کار کوم",farsi:"من مهندس هستم، در یک شرکت کار می‌کنم"},{speaker:"محمود",pashto:"زه ښوونکی یم، په لیسه کې درس ورکوم",farsi:"من معلم هستم، در لیسه درس می‌دهم"},{speaker:"احمد",pashto:"ډېر ښه، کورنۍ مو څنګه ده؟",farsi:"خیلی خوب، خانواده‌تان چطور است؟"},{speaker:"محمود",pashto:"الحمدلله ټول ښه دي. ستاسو کورنۍ؟",farsi:"الحمدلله همه خوبند. خانواده شما؟"},{speaker:"احمد",pashto:"هغوی هم ښه دي، مننه. خوشحاله شوم چې ولیدم تاسو",farsi:"آنها هم خوبند، ممنون. خوشحال شدم که دیدمتان"},{speaker:"محمود",pashto:"زه هم خوشحاله شوم. بیا به سره ګورو",farsi:"من هم خوشحال شدم. باز همدیگر را می‌بینیم"}],vocabulary:[{pashto:"نوم",farsi:"اسم",pronunciation:"nom"},{pashto:"پېژندنه",farsi:"آشنایی/معرفی",pronunciation:"pezhandəna"},{pashto:"له کومه ځایه",farsi:"از کجا",pronunciation:"la kúma dzāya"},{pashto:"څه کار",farsi:"چه کار",pronunciation:"tsa kār"},{pashto:"انجنیر",farsi:"مهندس",pronunciation:"injinír"},{pashto:"ښوونکی",farsi:"معلم",pronunciation:"ṣ̌owunkáy"},{pashto:"محصل",farsi:"دانشجو",pronunciation:"muhássil"},{pashto:"ډاکټر",farsi:"داکتر",pronunciation:"ḍākṭár"},{pashto:"کورنۍ",farsi:"خانواده",pronunciation:"koranəy"},{pashto:"خوشحاله",farsi:"خوشحال",pronunciation:"khoshhāla"}],usefulPhrases:[{pashto:"ستاسو تلیفون نمبر څه دی؟",farsi:"شماره تلفن شما چیست؟",pronunciation:"stāso telefón nambar tsa day?"},{pashto:"چرته اوسیږئ؟",farsi:"کجا زندگی می‌کنید؟",pronunciation:"chárta osíẓ̌ey?"},{pashto:"واده شوی یاست؟",farsi:"ازدواج کرده‌اید؟",pronunciation:"wāda shaway yāst?"}]},taxi:{title:"در تاکسی - مسافرت",titlePashto:"په ټکسي کې - سفر",description:"گرفتن تاکسی در کندهار و رفتن به مقصد - با اصطلاحات محلی",dialogue:[{speaker:"مسافر",pashto:"سلام ورور! خالي یې؟",farsi:"سلام برادر! خالی هستی؟",formalAlt:"سلام علیکم صاحب! تاسو خالي یاست؟",formalAltFarsi:"سلام علیکم آقا! شما خالی هستید؟"},{speaker:"راننده",pashto:"و علیکم السلام! هو خالي یم. کوم ځای ته ځې؟",farsi:"و علیکم السلام! بله خالی‌ام. کجا می‌روی؟"},{speaker:"مسافر",pashto:"شاه‌بازار ته ځم، د لویې جومات خوا ته",farsi:"به شاه‌بازار می‌روم، طرف مسجد بزرگ"},{speaker:"راننده",pashto:"شاه‌بازار؟ سل افغانۍ کیږي ورور",farsi:"شاه‌بازار؟ صد افغانی می‌شود برادر"},{speaker:"مسافر",pashto:"سل؟! ورور دا ډېر دی! اویا کوه، نږدې ده",farsi:"صد؟! برادر این زیاد است! هفتاد کن، نزدیک است",formalAlt:"لږ ډېر دی صاحب، که شي اویا کړئ",formalAltFarsi:"کمی زیاد است آقا، اگر می‌شود هفتاد کنید"},{speaker:"راننده",pashto:"ورور ترافیک ډېر دی، تیل هم ګران شوی. اتیا کوم",farsi:"برادر ترافیک زیاد است، بنزین هم گران شده. هشتاد می‌کنم"},{speaker:"مسافر",pashto:"ښه قبول ده، کېنم. لاړ شه",farsi:"خوب قبول است، می‌نشینم. برو"},{speaker:"راننده",pashto:"کېنه ورور. کمربند وتړه",farsi:"بشین برادر. کمربند ببند"},{speaker:"مسافر",pashto:"ورور مهرباني وکړه ورو ځه، زه عجله نلرم",farsi:"برادر لطفاً آهسته برو، من عجله ندارم"},{speaker:"راننده",pashto:"ښه ورور، هیڅ خبره نده. ته کندهاری یې؟",farsi:"خوب برادر، مشکلی نیست. تو قندهاری هستی؟"},{speaker:"مسافر",pashto:"نه، زه کابل نه راغلی یم. خو کندهار ډېر خوښیږي",farsi:"نه، من از کابل آمده‌ام. ولی قندهار خیلی خوشم می‌آید"},{speaker:"راننده",pashto:"کندهار ښه ځای دی، خلک مهربانه دي. دلته ښي خوا ته وګرځم؟",farsi:"قندهار جای خوبی است، مردم مهربان هستند. اینجا به راست بپیچم؟"},{speaker:"مسافر",pashto:"هو، ښي خوا ته وګرځه، بیا مخکې ځه",farsi:"بله، به راست بپیچ، بعد مستقیم برو"},{speaker:"راننده",pashto:"دلته ودریږم؟ دا جومات دی",farsi:"اینجا وایستم؟ این مسجد است"},{speaker:"مسافر",pashto:"هو همدلته ودریږه. دا سل واخله، باقي ستا",farsi:"بله همینجا وایستا. این صد بگیر، باقی مال تو"},{speaker:"راننده",pashto:"مننه ورور! خدای پامان، په خیر ځه!",farsi:"ممنون برادر! خداحافظ، به سلامت برو!"},{speaker:"مسافر",pashto:"خدای پامان، خدای دې ساتي!",farsi:"خداحافظ، خدا نگهدارت!"}],vocabulary:[{pashto:"ټکسي",farsi:"تاکسی",pronunciation:"ṭaksí"},{pashto:"خالي",farsi:"خالی",pronunciation:"khālí"},{pashto:"چرته",farsi:"کجا",pronunciation:"chárta"},{pashto:"ځای",farsi:"جا/مکان",pronunciation:"dzāy"},{pashto:"لاړ شه",farsi:"برو",pronunciation:"lāṛ sha"},{pashto:"ودریږه",farsi:"وایستا",pronunciation:"wadréẓ̌a"},{pashto:"رسېدو",farsi:"رسیدیم",pronunciation:"rasedo"},{pashto:"ورو",farsi:"آهسته",pronunciation:"wro"},{pashto:"ګړندی",farsi:"تند/سریع",pronunciation:"gaṛandáy"},{pashto:"عجله",farsi:"عجله",pronunciation:"ajala"},{pashto:"ترافیک",farsi:"ترافیک",pronunciation:"trāfík"},{pashto:"تیل",farsi:"بنزین",pronunciation:"tel"},{pashto:"کمربند",farsi:"کمربند",pronunciation:"kamarband"},{pashto:"شاه‌بازار",farsi:"شاه‌بازار (بازار معروف کندهار)",pronunciation:"shāh-bāzār"}],usefulPhrases:[{pashto:"له دې لارې ځه",farsi:"از این راه برو",pronunciation:"la de lāre dza"},{pashto:"ښي خوا ته وګرځه",farsi:"به راست بپیچ",pronunciation:"ṣ̌i khwā ta wgardza"},{pashto:"کیڼ خوا ته وګرځه",farsi:"به چپ بپیچ",pronunciation:"kiṇ khwā ta wgardza"},{pashto:"مخکې ځه",farsi:"مستقیم برو",pronunciation:"makhke dza"},{pashto:"څومره وخت لګیږي؟",farsi:"چقدر وقت می‌برد؟",pronunciation:"tsómra wakht lagíẓ̌i?"},{pashto:"دلته ودریږه",farsi:"اینجا وایستا",pronunciation:"dalta wadréẓ̌a"},{pashto:"خدای دې ساتي",farsi:"خدا نگهدارت",pronunciation:"khodāy de sāti"},{pashto:"په خیر ځه",farsi:"به سلامت برو",pronunciation:"pa khayr dza"}]},phone:{title:"مکالمه تلفنی",titlePashto:"تلیفوني خبرې",description:"صحبت کردن پشت تلفن",dialogue:[{speaker:"احمد",pashto:"الو، سلام علیکم",farsi:"الو، سلام علیکم"},{speaker:"محمود",pashto:"و علیکم السلام، څوک یاست؟",farsi:"و علیکم السلام، کی هستید؟",informalAlt:"و علیکم السلام، څوک یې؟",informalAltFarsi:"و علیکم السلام، کی هستی؟"},{speaker:"احمد",pashto:"زه احمد یم، د کریم ملګری",farsi:"من احمد هستم، دوست کریم"},{speaker:"محمود",pashto:"اوه احمده! څنګه یې وروره؟ ډېر وخت شو چې نه دې لیدلی",farsi:"اوه احمد! چطوری برادر؟ خیلی وقت شد که ندیدمت"},{speaker:"احمد",pashto:"ښه یم الحمدلله، ته څنګه یې؟ کورنۍ ښه ده؟",farsi:"خوبم الحمدلله، تو چطوری؟ خانواده خوب است؟"},{speaker:"محمود",pashto:"ټول ښه دي، مننه. ته چرته یې؟",farsi:"همه خوبند، ممنون. تو کجایی؟"},{speaker:"احمد",pashto:"زه کور کې یم. غوښتل چې ووایم نن ماښام راځې کور ته؟",farsi:"من خانه‌ام. می‌خواستم بگم امشب می‌آیی خانه؟"},{speaker:"محمود",pashto:"هو انشاالله، په کومه ساعت؟",farsi:"بله انشاالله، ساعت چند؟"},{speaker:"احمد",pashto:"په اتو بجو، ډوډۍ به سره وخورو",farsi:"ساعت هشت، با هم شام می‌خوریم"},{speaker:"محمود",pashto:"ډېر ښه، انشاالله راځم. بل څوک هم راځي؟",farsi:"خیلی خوب، انشاالله می‌آیم. کس دیگری هم می‌آید؟"},{speaker:"احمد",pashto:"هو، کریم او نصیر هم راځي",farsi:"بله، کریم و نصیر هم می‌آیند"},{speaker:"محمود",pashto:"ښه، بیا وینو. خدای پامان",farsi:"خوب، بعداً می‌بینمت. خداحافظ"},{speaker:"احمد",pashto:"خدای پامان، منتظر یم",farsi:"خداحافظ، منتظرم"}],vocabulary:[{pashto:"الو",farsi:"الو",pronunciation:"aló"},{pashto:"څوک",farsi:"کی",pronunciation:"tsok"},{pashto:"تلیفون",farsi:"تلفن",pronunciation:"telefón"},{pashto:"زنګ ووهه",farsi:"زنگ بزن",pronunciation:"zang wowaha"},{pashto:"نن",farsi:"امروز",pronunciation:"nan"},{pashto:"سبا",farsi:"فردا",pronunciation:"sabā"},{pashto:"ماښام",farsi:"شب/عصر",pronunciation:"māṣ̌ām"},{pashto:"ساعت",farsi:"ساعت",pronunciation:"sā'at"},{pashto:"منتظر",farsi:"منتظر",pronunciation:"muntazír"},{pashto:"ملګری",farsi:"دوست",pronunciation:"malgáray"}],usefulPhrases:[{pashto:"ستا غږ نه اورم",farsi:"صدایت را نمی‌شنوم",pronunciation:"stā ghag na awram"},{pashto:"بیا زنګ ووهه",farsi:"دوباره زنگ بزن",pronunciation:"byā zang wowaha"},{pashto:"لاین خراب دی",farsi:"خط خراب است",pronunciation:"lāyn kharāb day"},{pashto:"وروسته زنګ درته وهم",farsi:"بعداً بهت زنگ می‌زنم",pronunciation:"wrosta zang darta waham"}]},doctor:{title:"در مطب داکتر",titlePashto:"د ډاکټر کلینیک کې",description:"مراجعه به داکتر و توضیح بیماری",dialogue:[{speaker:"منشی",pashto:"سلام علیکم، نوبت لرئ؟",farsi:"سلام علیکم، نوبت دارید؟"},{speaker:"مریض",pashto:"و علیکم السلام، هو د لسو بجو نوبت لرم",farsi:"و علیکم السلام، بله نوبت ساعت ده دارم"},{speaker:"منشی",pashto:"ښه، کېنئ، ډاکټر صاحب اوس راځي",farsi:"خوب، بنشینید، داکتر صاحب الان می‌آید"},{speaker:"داکتر",pashto:"سلام علیکم، راشئ دننه. څه ستونزه لرئ؟",farsi:"سلام علیکم، بیایید داخل. چه مشکلی دارید؟"},{speaker:"مریض",pashto:"سلام ډاکټر صاحب، سر مې ډېر خوږیږي او تبه هم لرم",farsi:"سلام داکتر صاحب، سرم خیلی درد می‌کند و تب هم دارم"},{speaker:"داکتر",pashto:"له کله راهیسې دا حالت لرئ؟",farsi:"از کی این حالت را دارید؟"},{speaker:"مریض",pashto:"له پرون راهیسې، شپه ډېره سخته تېره شوه",farsi:"از دیروز، شب خیلی سخت گذشت"},{speaker:"داکتر",pashto:"ستونی هم خوږیږي؟ ټوخی لرئ؟",farsi:"گلو هم درد می‌کند؟ سرفه دارید؟"},{speaker:"مریض",pashto:"هو، ستونی هم خوږیږي او لږ ټوخی هم لرم",farsi:"بله، گلو هم درد می‌کند و کمی سرفه هم دارم"},{speaker:"داکتر",pashto:"راشئ معاینه مو کړم. خوله خلاصه کړئ",farsi:"بیایید معاینه‌تان کنم. دهان را باز کنید"},{speaker:"داکتر",pashto:"تاسو زکام شوي یاست. دا دوا واخلئ، درې ورځې سهار او ماښام",farsi:"شما سرما خورده‌اید. این دوا بخورید، سه روز صبح و شب"},{speaker:"مریض",pashto:"ډاکټر صاحب، څه وخورم او څه ونه خورم؟",farsi:"داکتر صاحب، چه بخورم و چه نخورم؟"},{speaker:"داکتر",pashto:"ډېره اوبه وڅښئ، شوربا وخورئ، سړه شیان مه خورئ",farsi:"آب زیاد بخورید، سوپ بخورید، چیزهای سرد نخورید"},{speaker:"مریض",pashto:"ډېره مننه ډاکټر صاحب، فیس څومره شو؟",farsi:"خیلی ممنون داکتر صاحب، ویزیت چقدر شد؟"},{speaker:"داکتر",pashto:"پنځه سوه افغانۍ. که ښه نشوئ بیا راشئ",farsi:"پانصد افغانی. اگر خوب نشدید دوباره بیایید"}],vocabulary:[{pashto:"ډاکټر",farsi:"داکتر",pronunciation:"ḍākṭár"},{pashto:"ناروغ/مریض",farsi:"بیمار",pronunciation:"nārogh/maríz"},{pashto:"ستونزه",farsi:"مشکل",pronunciation:"stunza"},{pashto:"خوږیږي",farsi:"درد می‌کند",pronunciation:"khwẓ̌éẓ̌i"},{pashto:"تبه",farsi:"تب",pronunciation:"tába"},{pashto:"ټوخی",farsi:"سرفه",pronunciation:"ṭokhay"},{pashto:"ستونی",farsi:"گلو",pronunciation:"stonáy"},{pashto:"دوا",farsi:"دوا",pronunciation:"dawā"},{pashto:"معاینه",farsi:"معاینه",pronunciation:"mu'āyina"},{pashto:"زکام",farsi:"سرماخوردگی",pronunciation:"zukām"},{pashto:"نوبت",farsi:"نوبت",pronunciation:"nobát"}],usefulPhrases:[{pashto:"خېټه مې خوږیږي",farsi:"شکمم درد می‌کند",pronunciation:"kheṭa me khwẓ̌éẓ̌i"},{pashto:"سینه مې خوږیږي",farsi:"سینه‌ام درد می‌کند",pronunciation:"sina me khwẓ̌éẓ̌i"},{pashto:"ملا مې خوږیږي",farsi:"کمرم درد می‌کند",pronunciation:"mlā me khwẓ̌éẓ̌i"},{pashto:"سر مې ګرځي",farsi:"سرم گیج می‌رود",pronunciation:"sar me gardzi"},{pashto:"زړه مې بدیږي",farsi:"حالت تهوع دارم",pronunciation:"zṛa me badíẓ̌i"}]},guestVisit:{title:"مهمانی و دعوت",titlePashto:"میلمستیا او بلنه",description:"رفتن به مهمانی و پذیرایی",dialogue:[{speaker:"میزبان",pashto:"سلام علیکم، په خیر راغلاست! راشئ دننه",farsi:"سلام علیکم، خوش آمدید! بیایید داخل"},{speaker:"مهمان",pashto:"و علیکم السلام، مننه. کور دې آباد",farsi:"و علیکم السلام، ممنون. خانه‌ات آباد"},{speaker:"میزبان",pashto:"ستاسو راتلل مو خوښ کړل. دلته کېنئ",farsi:"از آمدنتان خوشحال شدیم. اینجا بنشینید"},{speaker:"مهمان",pashto:"کورنۍ څنګه ده؟ ماشومان ښه دي؟",farsi:"خانواده چطور است؟ بچه‌ها خوبند؟"},{speaker:"میزبان",pashto:"الحمدلله ټول ښه دي. چای راوړم که شربت؟",farsi:"الحمدلله همه خوبند. چای بیارم یا شربت؟"},{speaker:"مهمان",pashto:"چای راوړه، مننه. زیاتې زحمتې مه کوه",farsi:"چای بیار، ممنون. زحمت زیاد نکش",formalAlt:"چای راوړئ، مننه. زیاتې زحمتې مه کوئ",formalAltFarsi:"چای بیاورید، ممنون. زحمت زیاد نکشید"},{speaker:"میزبان",pashto:"هیڅ زحمت نشته، تاسو میلمانه یاست",farsi:"هیچ زحمتی نیست، شما مهمان هستید"},{speaker:"میزبان",pashto:"دا چای او کلچه، نوش جان",farsi:"این چای و کلوچه، نوش جان"},{speaker:"مهمان",pashto:"ډېره مننه، لاس مو درد نکړي",farsi:"خیلی ممنون، دستتان درد نکند"},{speaker:"میزبان",pashto:"ډوډۍ چمتو ده، راشئ دسترخوان ته",farsi:"غذا آماده است، بیایید سر سفره"},{speaker:"مهمان",pashto:"ډېره خوندوره ده، ستاسو لاس ته صفا",farsi:"خیلی خوشمزه است، دست شما درد نکند"},{speaker:"میزبان",pashto:"نور وخورئ، کم خوړل",farsi:"بیشتر بخورید، کم خوردید"},{speaker:"مهمان",pashto:"مننه، ډېر موړ شوم. اوس باید لاړ شو",farsi:"ممنون، خیلی سیر شدم. حالا باید برویم"},{speaker:"میزبان",pashto:"دومره ژر؟ لږ نور کېنئ",farsi:"اینقدر زود؟ کمی بیشتر بمانید"},{speaker:"مهمان",pashto:"بل ځل انشاالله. ډېره مننه د میلمستیا",farsi:"دفعه بعد انشاالله. خیلی ممنون از مهمان‌نوازی"},{speaker:"میزبان",pashto:"بیا راشئ، کور ستاسو دی",farsi:"باز بیایید، خانه مال شماست"}],vocabulary:[{pashto:"میلمه",farsi:"مهمان",pronunciation:"melmá"},{pashto:"میلمستیا",farsi:"مهمان‌نوازی",pronunciation:"melmastiyā"},{pashto:"دسترخوان",farsi:"سفره",pronunciation:"dastarkhwān"},{pashto:"کلچه",farsi:"کلوچه/شیرینی",pronunciation:"kulchá"},{pashto:"شربت",farsi:"شربت",pronunciation:"sharbát"},{pashto:"موړ",farsi:"سیر",pronunciation:"moṛ"},{pashto:"وږی",farsi:"گرسنه",pronunciation:"waẓ̌áy"},{pashto:"تږی",farsi:"تشنه",pronunciation:"taẓ̌áy"},{pashto:"زحمت",farsi:"زحمت",pronunciation:"zahmat"}],usefulPhrases:[{pashto:"کور دې آباد",farsi:"خانه‌ات آباد",pronunciation:"kor de ābād"},{pashto:"لاس مو درد نکړي",farsi:"دستتان درد نکند",pronunciation:"lās mo dard nakṛi"},{pashto:"نور مه راوړه",farsi:"دیگر نیار",pronunciation:"nor ma rāwṛa"},{pashto:"ډېر موړ یم",farsi:"خیلی سیرم",pronunciation:"ḍer moṛ yam"}]},pharmacy:{title:"در داروخانه",titlePashto:"په دواخانه کې",description:"خرید دوا و مشورت با داروساز",dialogue:[{speaker:"مشتری",pashto:"سلام علیکم",farsi:"سلام علیکم"},{speaker:"داروساز",pashto:"و علیکم السلام، څه خدمت وکړم؟",farsi:"و علیکم السلام، چه خدمتی کنم؟"},{speaker:"مشتری",pashto:"سر مې خوږیږي، د سر درد دوا لرئ؟",farsi:"سرم درد می‌کند، داروی سردرد دارید؟"},{speaker:"داروساز",pashto:"هو لرم. پاراسیتامول غواړئ که ایبوپروفین؟",farsi:"بله دارم. پاراستامول می‌خواهید یا ایبوپروفن؟"},{speaker:"مشتری",pashto:"کوم یو ښه دی؟",farsi:"کدام یکی بهتر است؟"},{speaker:"داروساز",pashto:"پاراسیتامول ښه دی، خېټه نه خوږوي",farsi:"پاراستامول بهتر است، شکم را درد نمی‌کند"},{speaker:"مشتری",pashto:"ښه، هغه راکړئ. څومره دی؟",farsi:"خوب، آن را بدهید. چند است؟"},{speaker:"داروساز",pashto:"پنځوس افغانۍ. ورځې کې دوه ځله وخورئ، له ډوډۍ وروسته",farsi:"پنجاه افغانی. روزی دو بار بخورید، بعد از غذا"},{speaker:"مشتری",pashto:"د زکام دوا هم لرئ؟ ټوخی هم لرم",farsi:"داروی سرماخوردگی هم دارید؟ سرفه هم دارم"},{speaker:"داروساز",pashto:"هو، دا شربت واخلئ. شپه او سهار یو قاشوق",farsi:"بله، این شربت بخورید. شب و صبح یک قاشق"},{speaker:"مشتری",pashto:"ټول څومره شول؟",farsi:"همه چقدر شد؟"},{speaker:"داروساز",pashto:"سل پنځوس افغانۍ",farsi:"صد و پنجاه افغانی"},{speaker:"مشتری",pashto:"دا واخلئ، مننه",farsi:"این بگیرید، ممنون"},{speaker:"داروساز",pashto:"روغ جوړ شئ انشاالله",farsi:"سالم شوید انشاالله"}],vocabulary:[{pashto:"دواخانه",farsi:"داروخانه",pronunciation:"dawākhāna"},{pashto:"دوا",farsi:"دارو",pronunciation:"dawā"},{pashto:"شربت",farsi:"شربت",pronunciation:"sharbat"},{pashto:"ګولۍ",farsi:"قرص",pronunciation:"goləy"},{pashto:"قاشوق",farsi:"قاشق",pronunciation:"qāshoq"},{pashto:"روغ جوړ",farsi:"سالم",pronunciation:"rogh joṛ"}],usefulPhrases:[{pashto:"دا دوا څنګه وخورم؟",farsi:"این دارو چطور بخورم؟",pronunciation:"dā dawā tsanga wakhuram?"},{pashto:"ورځې کې څو ځله؟",farsi:"روزی چند بار؟",pronunciation:"wradze ke tso dzala?"},{pashto:"له ډوډۍ مخکې که وروسته؟",farsi:"قبل از غذا یا بعد؟",pronunciation:"la ḍoḍəy makhke ka wrosta?"}]},bank:{title:"در صرافی - تبدیل پول",titlePashto:"په صرافۍ کې",description:"تبدیل پول و کارهای مالی",dialogue:[{speaker:"مشتری",pashto:"سلام علیکم",farsi:"سلام علیکم"},{speaker:"صراف",pashto:"و علیکم السلام، څه خدمت وکړم؟",farsi:"و علیکم السلام، چه خدمتی کنم؟"},{speaker:"مشتری",pashto:"غواړم ډالر په افغانۍ بدل کړم",farsi:"می‌خواهم دلار به افغانی تبدیل کنم"},{speaker:"صراف",pashto:"نن یو ډالر اویا افغانۍ دی. څومره ډالر لرئ؟",farsi:"امروز یک دلار هفتاد افغانی است. چقدر دلار دارید؟"},{speaker:"مشتری",pashto:"سل ډالر لرم",farsi:"صد دلار دارم"},{speaker:"صراف",pashto:"سل ډالر اووه زره افغانۍ کیږي",farsi:"صد دلار هفت هزار افغانی می‌شود"},{speaker:"مشتری",pashto:"ښه، دا ډالر واخلئ",farsi:"خوب، این دلار را بگیرید"},{speaker:"صراف",pashto:"دا اووه زره افغانۍ، وشمېرئ",farsi:"این هفت هزار افغانی، بشمارید"},{speaker:"مشتری",pashto:"سم دی، مننه",farsi:"درست است، ممنون"},{speaker:"صراف",pashto:"بیا راشئ، خدای پامان",farsi:"باز بیایید، خداحافظ"}],vocabulary:[{pashto:"صرافي",farsi:"صرافی",pronunciation:"sarāfí"},{pashto:"ډالر",farsi:"دلار",pronunciation:"ḍālar"},{pashto:"افغانۍ",farsi:"افغانی",pronunciation:"afghānəy"},{pashto:"بدلول",farsi:"تبدیل کردن",pronunciation:"badlawəl"},{pashto:"شمېرل",farsi:"شمردن",pronunciation:"shmerawəl"}],usefulPhrases:[{pashto:"نن د ډالر قیمت څومره دی؟",farsi:"امروز قیمت دلار چند است؟",pronunciation:"nan da ḍālar qimát tsómra day?"},{pashto:"کلدار لرئ؟",farsi:"کلدار (روپیه پاکستان) دارید؟",pronunciation:"kaldār larey?"}]},mosque:{title:"در مسجد - بعد از نماز",titlePashto:"په جومات کې",description:"مکالمه در مسجد و بعد از نماز",dialogue:[{speaker:"شخص ۱",pashto:"سلام علیکم ورور",farsi:"سلام علیکم برادر"},{speaker:"شخص ۲",pashto:"و علیکم السلام، نماز قبول شه",farsi:"و علیکم السلام، نمازت قبول باشد"},{speaker:"شخص ۱",pashto:"ستا هم قبول شه. څنګه یې ورور؟",farsi:"مال تو هم قبول باشد. چطوری برادر؟"},{speaker:"شخص ۲",pashto:"الحمدلله ښه یم. ته څنګه یې؟",farsi:"الحمدلله خوبم. تو چطوری؟"},{speaker:"شخص ۱",pashto:"الحمدلله. کورنۍ ښه ده؟",farsi:"الحمدلله. خانواده خوب است؟"},{speaker:"شخص ۲",pashto:"ټول ښه دي، ستا دعا ده",farsi:"همه خوبند، دعای توست"},{speaker:"شخص ۱",pashto:"یو ورځ کور ته راشه، چای وڅښو",farsi:"یک روز خانه بیا، چای بخوریم"},{speaker:"شخص ۲",pashto:"انشاالله ورور، ډېره مننه",farsi:"انشاالله برادر، خیلی ممنون"},{speaker:"شخص ۱",pashto:"خدای پامان، په امان د خدای",farsi:"خداحافظ، به امان خدا"}],vocabulary:[{pashto:"جومات",farsi:"مسجد",pronunciation:"jomāt"},{pashto:"نماز",farsi:"نماز",pronunciation:"namāz"},{pashto:"قبول",farsi:"قبول",pronunciation:"qabúl"},{pashto:"دعا",farsi:"دعا",pronunciation:"du'ā"}],usefulPhrases:[{pashto:"نماز قبول شه",farsi:"نمازت قبول باشد",pronunciation:"namāz qabúl sha"},{pashto:"خدای دې کامیاب کړي",farsi:"خدا موفقت کند",pronunciation:"khodāy de kāmyāb kṛi"},{pashto:"په امان د خدای",farsi:"به امان خدا",pronunciation:"pa amān da khodāy"}]},wedding:{title:"در عروسی",titlePashto:"په واده کې",description:"تبریک گفتن و مکالمه در مراسم عروسی",dialogue:[{speaker:"مهمان",pashto:"سلام علیکم! مبارک شه!",farsi:"سلام علیکم! مبارک باشد!"},{speaker:"میزبان",pashto:"و علیکم السلام! ډېره مننه چې راغلاست",farsi:"و علیکم السلام! خیلی ممنون که آمدید"},{speaker:"مهمان",pashto:"خدای دې خوشحاله ساتي، ښه جوړه شوه",farsi:"خدا خوشحالتان نگه دارد، جفت خوبی شدند"},{speaker:"میزبان",pashto:"ستا هم واده ژر شه انشاالله",farsi:"عروسی تو هم زود باشد انشاالله"},{speaker:"مهمان",pashto:"انشاالله. ناوې ډېره ښکلې ده",farsi:"انشاالله. عروس خیلی زیباست"},{speaker:"میزبان",pashto:"مننه. راشئ ډوډۍ وخورئ",farsi:"ممنون. بیایید غذا بخورید"},{speaker:"مهمان",pashto:"ډېره خوندوره ده، لاس مو درد نکړي",farsi:"خیلی خوشمزه است، دستتان درد نکند"},{speaker:"میزبان",pashto:"نوش جان، نور وخورئ",farsi:"نوش جان، بیشتر بخورید"}],vocabulary:[{pashto:"واده",farsi:"عروسی",pronunciation:"wāda"},{pashto:"ناوې",farsi:"عروس",pronunciation:"nāwe"},{pashto:"زوم",farsi:"داماد",pronunciation:"zum"},{pashto:"مبارک",farsi:"مبارک",pronunciation:"mubārak"},{pashto:"جوړه",farsi:"جفت/زوج",pronunciation:"joṛa"},{pashto:"ښکلې",farsi:"زیبا",pronunciation:"ṣ̌kúle"}],usefulPhrases:[{pashto:"واده مو مبارک شه",farsi:"عروسیتان مبارک باشد",pronunciation:"wāda mo mubārak sha"},{pashto:"خدای دې خوشحاله ساتي",farsi:"خدا خوشحالتان نگه دارد",pronunciation:"khodāy de khoshhāla sāti"},{pashto:"ستا هم واده ژر شه",farsi:"عروسی تو هم زود باشد",pronunciation:"stā ham wāda zhar sha"}]},fruitShop:{title:"در میوه فروشی",titlePashto:"په میوه پلورنځي کې",description:"خرید میوه تازه از بازار کندهار - با چانه زدن واقعی",dialogue:[{speaker:"خریدار",pashto:"سلام علیکم ورور! میوه تازه لرې؟",farsi:"سلام علیکم برادر! میوه تازه داری؟"},{speaker:"فروشنده",pashto:"و علیکم السلام! هو ورور، نن تازه میوه راغلې. انګور، مڼه، شفتالو، ټول تازه دي",farsi:"و علیکم السلام! بله برادر، امروز میوه تازه آمده. انگور، سیب، هلو، همه تازه هستند"},{speaker:"خریدار",pashto:"انګور څومره دی کیلو؟",farsi:"انگور کیلویی چند است؟"},{speaker:"فروشنده",pashto:"دا شمشمي انګور سل افغانۍ کیلو دی، ډېر خوږ دی. دا تور انګور اویا دی",farsi:"این انگور شمشمی صد افغانی کیلو است، خیلی شیرین است. این انگور سیاه هفتاد است"},{speaker:"خریدار",pashto:"دا شمشمي چکه کړه، خوږ دی؟",farsi:"این شمشمی را بچشم، شیرین است؟"},{speaker:"فروشنده",pashto:"هو ورور چکه کړه! وګوره لکه شکر خوږ دی",farsi:"بله برادر بچش! ببین مثل شکر شیرین است"},{speaker:"خریدار",pashto:"واه! ډېر خوږ دی. دوه کیلو راکړه. مڼه هم غواړم",farsi:"واه! خیلی شیرین است. دو کیلو بده. سیب هم می‌خواهم"},{speaker:"فروشنده",pashto:"دا سره مڼه اتیا افغانۍ ده، دا شنه مڼه شپیته ده",farsi:"این سیب قرمز هشتاد افغانی است، این سیب سبز شصت است"},{speaker:"خریدار",pashto:"یو کیلو سره مڼه راکړه. ټول څومره شول؟",farsi:"یک کیلو سیب قرمز بده. همه چقدر شد؟"},{speaker:"فروشنده",pashto:"انګور دوه سوه، مڼه اتیا. ټول دوه سوه اتیا افغانۍ",farsi:"انگور دویست، سیب هشتاد. همه دویست و هشتاد افغانی"},{speaker:"خریدار",pashto:"دوه سوه پنځوس کوه ورور",farsi:"دویست و پنجاه کن برادر"},{speaker:"فروشنده",pashto:"ښه ورور، ستا خوشحالي. دا واخله، نوش جان!",farsi:"خوب برادر، خوشحالی تو. این بگیر، نوش جان!"},{speaker:"خریدار",pashto:"مننه ورور، خدای پامان!",farsi:"ممنون برادر، خداحافظ!"}],vocabulary:[{pashto:"میوه",farsi:"میوه",pronunciation:"mewá"},{pashto:"انګور",farsi:"انگور",pronunciation:"angúr"},{pashto:"مڼه",farsi:"سیب",pronunciation:"maṇá"},{pashto:"شفتالو",farsi:"هلو",pronunciation:"shaftāló"},{pashto:"خوږ",farsi:"شیرین",pronunciation:"khwaẓ̌"},{pashto:"ترش",farsi:"ترش",pronunciation:"tursh"},{pashto:"کیلو",farsi:"کیلو",pronunciation:"kílo"},{pashto:"چکه کړه",farsi:"بچش",pronunciation:"chaka kṛa"},{pashto:"شمشمي",farsi:"شمشمی (نوع انگور)",pronunciation:"shamshamí"}],usefulPhrases:[{pashto:"دا تازه دی؟",farsi:"این تازه است؟",pronunciation:"dā tāza day?"},{pashto:"دا خوږ دی که ترش؟",farsi:"این شیرین است یا ترش؟",pronunciation:"dā khwaẓ̌ day ka tursh?"},{pashto:"نیم کیلو راکړه",farsi:"نیم کیلو بده",pronunciation:"nim kílo rākṛa"},{pashto:"دا پخه ده؟",farsi:"این رسیده است؟",pronunciation:"dā pakha da?"}]},bakery:{title:"در نانوایی",titlePashto:"په ډوډۍ پلورنځي کې",description:"خرید نان تازه از نانوایی کندهاری",dialogue:[{speaker:"خریدار",pashto:"سلام علیکم! نان تازه لرې؟",farsi:"سلام علیکم! نان تازه داری؟"},{speaker:"نانوا",pashto:"و علیکم السلام! هو ورور، اوس تازه راوتل. څومره غواړې؟",farsi:"و علیکم السلام! بله برادر، الان تازه درآمد. چقدر می‌خواهی؟"},{speaker:"خریدار",pashto:"پنځه دانې روټۍ راکړه، او دوه دانې پراټه هم",farsi:"پنج تا نان بده، و دو تا پراتا هم"},{speaker:"نانوا",pashto:"روټۍ لس افغانۍ دانه ده، پراټه شل افغانۍ",farsi:"نان ده افغانی دانه است، پراتا بیست افغانی"},{speaker:"خریدار",pashto:"ښه، دا ګرمې راکړه، سړې نه غواړم",farsi:"خوب، این گرم‌ها را بده، سرد نمی‌خواهم"},{speaker:"نانوا",pashto:"دا تازه له تنور نه راوتلې، ګرمې دي. ټول نوي افغانۍ شول",farsi:"این تازه از تنور درآمده، گرم هستند. همه نود افغانی شد"},{speaker:"خریدار",pashto:"دا سل واخله، باقي ستا",farsi:"این صد بگیر، باقی مال تو"},{speaker:"نانوا",pashto:"مننه ورور! نوش جان، بیا راشه!",farsi:"ممنون برادر! نوش جان، باز بیا!"}],vocabulary:[{pashto:"روټۍ",farsi:"نان",pronunciation:"roṭəy"},{pashto:"پراټه",farsi:"پراتا",pronunciation:"parāṭa"},{pashto:"تنور",farsi:"تنور",pronunciation:"tanúr"},{pashto:"ګرم",farsi:"گرم",pronunciation:"garm"},{pashto:"سړه",farsi:"سرد",pronunciation:"saṛa"},{pashto:"نانوا",farsi:"نانوا",pronunciation:"nānwā"}],usefulPhrases:[{pashto:"تازه روټۍ کله راوځي؟",farsi:"نان تازه کی درمی‌آید؟",pronunciation:"tāza roṭəy kala rāwdzi?"},{pashto:"دا ګرمه ده؟",farsi:"این گرم است؟",pronunciation:"dā garma da?"},{pashto:"لږ صبر وکړه",farsi:"کمی صبر کن",pronunciation:"lag sabr wakṛa"}]},publicBath:{title:"در حمام عمومی",titlePashto:"په حمام کې",description:"رفتن به حمام عمومی در کندهار",dialogue:[{speaker:"مشتری",pashto:"سلام علیکم! حمام خالي دی؟",farsi:"سلام علیکم! حمام خالی است؟"},{speaker:"حمامی",pashto:"و علیکم السلام! هو ورور، راشه. اوبه ګرمې دي",farsi:"و علیکم السلام! بله برادر، بیا. آب گرم است"},{speaker:"مشتری",pashto:"څومره کیږي؟",farsi:"چقدر می‌شود؟"},{speaker:"حمامی",pashto:"پنځوس افغانۍ. صابون او تولیه غواړې؟",farsi:"پنجاه افغانی. صابون و حوله می‌خواهی؟"},{speaker:"مشتری",pashto:"هو، صابون راکړه. تولیه لرم",farsi:"بله، صابون بده. حوله دارم"},{speaker:"حمامی",pashto:"صابون لس افغانۍ. ټول شپیته شول",farsi:"صابون ده افغانی. همه شصت شد"},{speaker:"مشتری",pashto:"ښه، دا واخله",farsi:"خوب، این بگیر"},{speaker:"حمامی",pashto:"دا خونه کې ځه، اوبه ګرمې دي. که سړې وي راته ووایه",farsi:"به این اتاق برو، آب گرم است. اگر سرد بود بهم بگو"},{speaker:"مشتری",pashto:"مننه ورور",farsi:"ممنون برادر"}],vocabulary:[{pashto:"حمام",farsi:"حمام",pronunciation:"hamām"},{pashto:"اوبه",farsi:"آب",pronunciation:"obá"},{pashto:"صابون",farsi:"صابون",pronunciation:"sābún"},{pashto:"تولیه",farsi:"حوله",pronunciation:"tawliyá"},{pashto:"ګرم",farsi:"گرم",pronunciation:"garm"},{pashto:"سړه",farsi:"سرد",pronunciation:"saṛa"}],usefulPhrases:[{pashto:"اوبه ډېرې ګرمې دي",farsi:"آب خیلی گرم است",pronunciation:"oba ḍere garme di"},{pashto:"اوبه سړې دي",farsi:"آب سرد است",pronunciation:"oba saṛe di"},{pashto:"نور اوبه راکړه",farsi:"آب بیشتر بده",pronunciation:"nor oba rākṛa"}]},mobileShop:{title:"در مغازه موبایل",titlePashto:"په موبایل دوکان کې",description:"خرید کارت شارژ و خدمات موبایل",dialogue:[{speaker:"مشتری",pashto:"سلام علیکم! روشن کارت لرې؟",farsi:"سلام علیکم! کارت روشن داری؟"},{speaker:"فروشنده",pashto:"و علیکم السلام! هو لرم. څومره غواړې؟",farsi:"و علیکم السلام! بله دارم. چقدر می‌خواهی؟"},{speaker:"مشتری",pashto:"پنځوس افغانۍ کارت راکړه",farsi:"کارت پنجاه افغانی بده"},{speaker:"فروشنده",pashto:"دا واخله. بل څه غواړې؟ انټرنیټ پیکج هم لرو",farsi:"این بگیر. چیز دیگر می‌خواهی؟ پکیج اینترنت هم داریم"},{speaker:"مشتری",pashto:"انټرنیټ پیکج څومره دی؟",farsi:"پکیج اینترنت چند است؟"},{speaker:"فروشنده",pashto:"یو هفته لپاره سل افغانۍ، یو میاشت لپاره درې سوه",farsi:"برای یک هفته صد افغانی، برای یک ماه سیصد"},{speaker:"مشتری",pashto:"یو هفته والا راکړه. ټول سل پنځوس شول؟",farsi:"یک هفته‌ای بده. همه صد و پنجاه شد؟"},{speaker:"فروشنده",pashto:"هو ورور، سل پنځوس افغانۍ",farsi:"بله برادر، صد و پنجاه افغانی"},{speaker:"مشتری",pashto:"دا واخله، مننه",farsi:"این بگیر، ممنون"},{speaker:"فروشنده",pashto:"مننه ورور، بیا راشه!",farsi:"ممنون برادر، باز بیا!"}],vocabulary:[{pashto:"موبایل",farsi:"موبایل",pronunciation:"mobāyl"},{pashto:"کارت",farsi:"کارت",pronunciation:"kārt"},{pashto:"انټرنیټ",farsi:"اینترنت",pronunciation:"inṭarneṭ"},{pashto:"پیکج",farsi:"پکیج",pronunciation:"pekij"},{pashto:"هفته",farsi:"هفته",pronunciation:"hafta"},{pashto:"میاشت",farsi:"ماه",pronunciation:"myāsht"}],usefulPhrases:[{pashto:"زما بیلانس څومره دی؟",farsi:"بالانس من چقدر است؟",pronunciation:"zma bilāns tsómra day?"},{pashto:"سیم کارت لرې؟",farsi:"سیم کارت داری؟",pronunciation:"sim kārt lare?"},{pashto:"موبایل مې چارج کړه",farsi:"موبایلم را شارژ کن",pronunciation:"mobāyl me chārj kṛa"}]},guestHouse:{title:"در سرای - اقامت",titlePashto:"په سرای کې",description:"گرفتن اتاق در سرای یا مهمانخانه کندهار",dialogue:[{speaker:"مسافر",pashto:"سلام علیکم! خالي کوټه لرئ؟",farsi:"سلام علیکم! اتاق خالی دارید؟"},{speaker:"صاحب سرای",pashto:"و علیکم السلام! هو لرو. یوازې یاست که ملګري هم لرئ؟",farsi:"و علیکم السلام! بله داریم. تنها هستید یا همراه هم دارید؟"},{speaker:"مسافر",pashto:"دوه کسه یو. یوه شپه لپاره کوټه غواړو",farsi:"دو نفریم. برای یک شب اتاق می‌خواهیم"},{speaker:"صاحب سرای",pashto:"دوه کسه لپاره کوټه پنځه سوه افغانۍ شپه ده. ناشته شامل ده",farsi:"اتاق برای دو نفر پانصد افغانی شب است. صبحانه شامل است"},{speaker:"مسافر",pashto:"ښه، قبول ده. کوټه راښیه",farsi:"خوب، قبول است. اتاق را نشان بده"},{speaker:"صاحب سرای",pashto:"راشئ، دا کوټه ده. بستره تازه ده، حمام هم لري",farsi:"بیایید، این اتاق است. رختخواب تازه است، حمام هم دارد"},{speaker:"مسافر",pashto:"ښه ده. ناشته په کومه ساعت ده؟",farsi:"خوب است. صبحانه ساعت چند است؟"},{speaker:"صاحب سرای",pashto:"ناشته له اووو نه تر لسو پورې ده. چای، روټۍ، هګۍ، او کچالو",farsi:"صبحانه از هفت تا ده است. چای، نان، تخم‌مرغ، و کچالو"},{speaker:"مسافر",pashto:"ډېره مننه. دا پیسې واخلئ",farsi:"خیلی ممنون. این پول را بگیرید"},{speaker:"صاحب سرای",pashto:"مننه. که څه غوښتل راته ووایئ. ښه شپه!",farsi:"ممنون. اگر چیزی خواستید بهم بگویید. شب خوش!"}],vocabulary:[{pashto:"سرای",farsi:"مهمانخانه/هتل",pronunciation:"sarāy"},{pashto:"کوټه",farsi:"اتاق",pronunciation:"koṭa"},{pashto:"شپه",farsi:"شب",pronunciation:"shpa"},{pashto:"ناشته",farsi:"صبحانه",pronunciation:"nāshta"},{pashto:"بستره",farsi:"رختخواب",pronunciation:"bistra"},{pashto:"هګۍ",farsi:"تخم‌مرغ",pronunciation:"hagəy"},{pashto:"کچالو",farsi:"سیب‌زمینی",pronunciation:"kachāló"}],usefulPhrases:[{pashto:"کوټه پاکه ده؟",farsi:"اتاق تمیز است؟",pronunciation:"koṭa pāka da?"},{pashto:"وای فای لرئ؟",farsi:"وای‌فای دارید؟",pronunciation:"wāy fāy larey?"},{pashto:"څومره شپې پاتې کیږئ؟",farsi:"چند شب می‌مانید؟",pronunciation:"tsómra shpe pāte kéẓ̌ey?"},{pashto:"ښه شپه!",farsi:"شب خوش!",pronunciation:"ṣ̌a shpa!"}]}},$x={immediate:[{pashto:"پلار",farsi:"پدر",pronunciation:"plār"},{pashto:"مور",farsi:"مادر",pronunciation:"mor"},{pashto:"ورور",farsi:"برادر",pronunciation:"wror"},{pashto:"خور",farsi:"خواهر",pronunciation:"khor"},{pashto:"زوی",farsi:"پسر",pronunciation:"zoy"},{pashto:"لور",farsi:"دختر",pronunciation:"lor"},{pashto:"وروڼه",farsi:"برادرها",pronunciation:"wroṇa"},{pashto:"خویندې",farsi:"خواهرها",pronunciation:"khwaynde"}],grandparents:[{pashto:"نیکه",farsi:"پدربزرگ",pronunciation:"níka"},{pashto:"نیا",farsi:"مادربزرگ",pronunciation:"nyā"},{pashto:"لمسی",farsi:"نوه (پسر)",pronunciation:"lmasáy"},{pashto:"لمسۍ",farsi:"نوه (دختر)",pronunciation:"lmasəy"}],auntsUncles:[{pashto:"تره",farsi:"عمو",pronunciation:"tra"},{pashto:"ترور",farsi:"عمه",pronunciation:"tror"},{pashto:"ماما",farsi:"دایی",pronunciation:"māmā"},{pashto:"خاله",farsi:"خاله",pronunciation:"khāla"},{pashto:"ترزوی",farsi:"پسرعمو",pronunciation:"tarzóy"},{pashto:"ترلور",farsi:"دخترعمو",pronunciation:"tarlór"},{pashto:"مامازوی",farsi:"پسردایی",pronunciation:"māmāzóy"},{pashto:"مامالور",farsi:"دختردایی",pronunciation:"māmālór"}],marriage:[{pashto:"میرمن",farsi:"همسر (زن)",pronunciation:"mérman"},{pashto:"خاوند",farsi:"همسر (شوهر)",pronunciation:"khāwand"},{pashto:"ناوې",farsi:"عروس",pronunciation:"nāwe"},{pashto:"زوم",farsi:"داماد",pronunciation:"zum"},{pashto:"خسر",farsi:"پدرشوهر/پدرزن",pronunciation:"khsər"},{pashto:"خواښې",farsi:"مادرشوهر/مادرزن",pronunciation:"khwāṣ̌e"},{pashto:"اور",farsi:"زن برادر",pronunciation:"or"},{pashto:"لیور",farsi:"برادر شوهر",pronunciation:"lewár"},{pashto:"ندرور",farsi:"خواهر شوهر",pronunciation:"ndrór"}],children:[{pashto:"ماشوم",farsi:"بچه",pronunciation:"māshúm"},{pashto:"ماشومان",farsi:"بچه‌ها",pronunciation:"māshumān"},{pashto:"هلک",farsi:"پسربچه",pronunciation:"halák"},{pashto:"نجلۍ",farsi:"دختربچه",pronunciation:"njəláy"},{pashto:"ماشوم وړوکی",farsi:"نوزاد",pronunciation:"māshúm waṛukáy"}],adjectives:[{pashto:"لوی",farsi:"بزرگ",pronunciation:"loy"},{pashto:"وړوکی",farsi:"کوچک",pronunciation:"waṛukáy"},{pashto:"مشر",farsi:"بزرگتر",pronunciation:"mashár"},{pashto:"کشر",farsi:"کوچکتر",pronunciation:"kashár"},{pashto:"زوړ",farsi:"پیر",pronunciation:"zoṛ"},{pashto:"ځوان",farsi:"جوان",pronunciation:"dzwān"}],sentences:[{pashto:"زما کورنۍ لویه ده",farsi:"خانواده من بزرگ است",pronunciation:"zmā korənəy lóya da"},{pashto:"زما دوه وروڼه دي",farsi:"من دو برادر دارم",pronunciation:"zmā dwa wroṇa di"},{pashto:"زما یوه خور ده",farsi:"من یک خواهر دارم",pronunciation:"zmā yówa khor da"},{pashto:"ستا پلار څه کار کوي؟",farsi:"پدرت چه کار می‌کند؟",pronunciation:"stā plār tsa kār kawi?"},{pashto:"زما مور ښوونکې ده",farsi:"مادرم معلم است",pronunciation:"zmā mor ṣ̌owunke da"},{pashto:"زما نیکه زوړ دی",farsi:"پدربزرگم پیر است",pronunciation:"zmā níka zoṛ day"},{pashto:"زما ورور واده کوي",farsi:"برادرم ازدواج می‌کند",pronunciation:"zmā wror wāda kawi"},{pashto:"کورنۍ مو څنګه ده؟",farsi:"خانواده‌تان چطور است؟",pronunciation:"korənəy mo tsanga da?"}],sampleConversation:[{speaker:"A",pashto:"ستا کورنۍ څومره لویه ده؟",farsi:"خانواده‌ات چقدر بزرگ است؟"},{speaker:"B",pashto:"زما پنځه غړي دي",farsi:"ما پنج نفریم"},{speaker:"A",pashto:"څوک څوک؟",farsi:"کی‌ها؟"},{speaker:"B",pashto:"پلار، مور، زه، یو ورور او یوه خور",farsi:"پدر، مادر، من، یک برادر و یک خواهر"},{speaker:"A",pashto:"ستا ورور مشر دی که کشر؟",farsi:"برادرت بزرگتر است یا کوچکتر؟"},{speaker:"B",pashto:"هغه مشر دی",farsi:"او بزرگتر است"},{speaker:"A",pashto:"هغه څه کار کوي؟",farsi:"او چه کار می‌کند؟"},{speaker:"B",pashto:"هغه ډاکټر دی",farsi:"او داکتر است"}],culturalNote:{farsi:"در فرهنگ پښتون، خانواده بسیار مهم است. کلمه «کورنۍ» از «کور» (خانه) می‌آید که نشان‌دهنده اهمیت خانه و خانواده است. پښتون‌ها معمولاً در خانواده‌های گسترده زندگی می‌کنند و احترام به بزرگترها بسیار مهم است.",pashto:"په پښتون کلتور کې، کورنۍ ډیره مهمه ده. کلمه «کورنۍ» له «کور» نه راځي چې د کور او کورنۍ اهمیت ښیي. پښتانه عموماً په پراخو کورنیو کې ژوند کوي او د مشرانو درناوی ډیر مهم دی."}},Yh=[{id:"greetings",title:"سلام و احوالپرسی",titlePashto:"سلام او حال احوال",description:"سلام‌ها، خداحافظی و عبارات روزمره"},{id:"family",title:"خانواده",titlePashto:"کورنۍ",description:"اعضای خانواده و خویشاوندان"},{id:"numbers",title:"اعداد",titlePashto:"شمېرې",description:"اعداد ۱ تا ۱۰۰ و بیشتر"},{id:"body-parts",title:"اعضای بدن",titlePashto:"د بدن غړي",description:"سر، دست، پا و اعضای داخلی"},{id:"food",title:"غذا و خوراکی",titlePashto:"خواړه",description:"غذاها، میوه‌ها، سبزیجات و نوشیدنی‌ها"},{id:"colors",title:"رنگ‌ها",titlePashto:"رنګونه",description:"رنگ‌های اصلی و ترکیبی"},{id:"verbs",title:"فعل‌ها",titlePashto:"فعلونه",description:"فعل‌های رایج و صرف آنها"},{id:"slang",title:"اصطلاحات عامیانه",titlePashto:"عامیانه اصطلاحات",description:"عبارات محاوره‌ای و ضرب‌المثل‌ها"},{id:"conversations",title:"مکالمات",titlePashto:"خبرې اترې",description:"مکالمات روزمره در موقعیت‌های مختلف"}],Wx={greetings:Jx,family:$x,numbers:Qx,"body-parts":Xx,food:Vx,colors:Zx,verbs:Kx,slang:Fx,conversations:Ka},Gh={greetings:Vy,family:Jn,numbers:yd,"body-parts":bd,food:zd,colors:wd,verbs:Ns,slang:mu,conversations:De};function Xh(){const{categoryId:l}=Ss(),[c,f]=T.useState(null);if(!l)return s.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[s.jsx("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:s.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[s.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30",children:s.jsx(at,{className:"w-7 h-7 text-white"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:"واژگان پښتو کندهاری"}),s.jsx("p",{className:"text-slate-400",children:"دسته‌بندی مورد نظر را انتخاب کنید"})]})]})}),s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:Yh.map(A=>{const R=Gh[A.id]||at;return s.jsxs(Ca,{to:`/vocabulary/${A.id}`,className:"bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-700 hover:border-blue-500/50 text-center flex flex-col items-center group",children:[s.jsx("div",{className:"w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border border-blue-500/30",children:s.jsx(R,{className:"w-7 h-7 text-blue-400"})}),s.jsx("h3",{className:"font-bold text-slate-200 mb-1",children:A.title}),s.jsx("p",{className:"text-sm text-blue-400",children:A.titlePashto}),s.jsx("p",{className:"text-xs text-slate-500 mt-2",children:A.description})]},A.id)})})]});const u=Yh.find(A=>A.id===l),h=Wx[l],m=Gh[l]||at;if(!u||!h)return s.jsxs("div",{className:"max-w-3xl mx-auto text-center py-12",children:[s.jsx(at,{className:"w-16 h-16 text-slate-600 mx-auto mb-4"}),s.jsx("p",{className:"text-xl text-slate-400 mb-4",children:"دسته‌بندی پیدا نشد"}),s.jsxs(Ca,{to:"/vocabulary",className:"text-blue-400 hover:text-blue-300 inline-flex items-center gap-2",children:[s.jsx(Pt,{className:"w-4 h-4"}),"بازگشت به لیست"]})]});const d=(A,R,L)=>{if(!R||R.length===0)return null;const H=c===L;return s.jsxs("div",{className:"mb-4",children:[s.jsxs("button",{onClick:()=>f(H?null:L),className:"w-full bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg p-4 text-right flex justify-between items-center transition-colors border border-emerald-500/30",children:[s.jsx("span",{className:"font-bold text-emerald-400",children:A}),H?s.jsx(nn,{className:"w-5 h-5 text-emerald-400"}):s.jsx(qe,{className:"w-5 h-5 text-emerald-400"})]}),H&&s.jsx("div",{className:"bg-slate-700/50 rounded-b-lg border border-t-0 border-emerald-500/30 p-4",children:s.jsx("div",{className:"space-y-3",children:R.map((P,U)=>s.jsxs("div",{className:"flex justify-between items-center p-3 bg-slate-800 rounded-lg border border-slate-600",children:[s.jsxs("div",{className:"text-right",children:[s.jsx("span",{className:"text-xl font-bold text-emerald-400 block",children:P.pashto}),s.jsx("span",{className:"text-sm text-slate-500",children:P.pronunciation})]}),s.jsx("span",{className:"text-slate-300",children:P.farsi})]},U))})})]},L)},b=A=>{if(!A||A.length===0)return null;const R=c==="sentences";return s.jsxs("div",{className:"mb-4",children:[s.jsxs("button",{onClick:()=>f(R?null:"sentences"),className:"w-full bg-amber-500/20 hover:bg-amber-500/30 rounded-lg p-4 text-right flex justify-between items-center transition-colors border border-amber-500/30",children:[s.jsx("span",{className:"font-bold text-amber-400",children:"جملات مفید"}),R?s.jsx(nn,{className:"w-5 h-5 text-amber-400"}):s.jsx(qe,{className:"w-5 h-5 text-amber-400"})]}),R&&s.jsx("div",{className:"bg-slate-700/50 rounded-b-lg border border-t-0 border-amber-500/30 p-4",children:s.jsx("div",{className:"space-y-4",children:A.map((L,H)=>s.jsxs("div",{className:"p-4 bg-amber-500/20 rounded-lg border border-amber-500/30",children:[s.jsx("p",{className:"text-xl font-bold text-amber-300 mb-1",children:L.pashto}),s.jsx("p",{className:"text-slate-300 mb-1",children:L.farsi}),s.jsx("p",{className:"text-sm text-slate-500",children:L.pronunciation})]},H))})})]})},x=(A,R="مکالمه نمونه")=>{if(!A||A.length===0)return null;const L=c==="conversation";return s.jsxs("div",{className:"mb-4",children:[s.jsxs("button",{onClick:()=>f(L?null:"conversation"),className:"w-full bg-blue-500/20 hover:bg-blue-500/30 rounded-lg p-4 text-right flex justify-between items-center transition-colors border border-blue-500/30",children:[s.jsx("span",{className:"font-bold text-blue-400",children:R}),L?s.jsx(nn,{className:"w-5 h-5 text-blue-400"}):s.jsx(qe,{className:"w-5 h-5 text-blue-400"})]}),L&&s.jsx("div",{className:"bg-slate-700/50 rounded-b-lg border border-t-0 border-blue-500/30 p-4",children:s.jsx("div",{className:"space-y-3",children:A.map((H,P)=>s.jsxs("div",{className:`p-3 rounded-lg ${H.speaker==="A"?"bg-blue-500/20 mr-8 border border-blue-500/30":"bg-slate-700 ml-8 border border-slate-600"}`,children:[s.jsx("span",{className:"text-xs text-slate-500 block mb-1",children:H.speaker}),s.jsx("p",{className:"font-bold text-slate-200",children:H.pashto}),s.jsx("p",{className:"text-sm text-slate-400",children:H.farsi})]},P))})})]})},g=A=>{if(!A||A.length===0)return null;const R=c==="comparison";return s.jsxs("div",{className:"mb-4",children:[s.jsxs("button",{onClick:()=>f(R?null:"comparison"),className:"w-full bg-purple-500/20 hover:bg-purple-500/30 rounded-lg p-4 text-right flex justify-between items-center transition-colors border border-purple-500/30",children:[s.jsx("span",{className:"font-bold text-purple-400",children:"مقایسه رسمی و غیررسمی"}),R?s.jsx(nn,{className:"w-5 h-5 text-purple-400"}):s.jsx(qe,{className:"w-5 h-5 text-purple-400"})]}),R&&s.jsx("div",{className:"bg-slate-700/50 rounded-b-lg border border-t-0 border-purple-500/30 p-4",children:s.jsx("div",{className:"space-y-4",children:A.map((L,H)=>s.jsxs("div",{className:"border border-slate-600 rounded-xl overflow-hidden",children:[s.jsx("div",{className:"bg-slate-700 px-4 py-2 text-center",children:s.jsx("span",{className:"font-bold text-slate-300",children:L.context})}),s.jsxs("div",{className:"grid grid-cols-2 divide-x divide-slate-600",children:[s.jsxs("div",{className:"p-4 bg-blue-500/20",children:[s.jsx("div",{className:"text-xs text-blue-400 font-bold mb-2 text-center",children:"رسمی"}),s.jsx("p",{className:"text-lg font-bold text-blue-300 text-center",children:L.formal.pashto}),s.jsx("p",{className:"text-sm text-slate-400 text-center",children:L.formal.farsi})]}),s.jsxs("div",{className:"p-4 bg-emerald-500/20",children:[s.jsx("div",{className:"text-xs text-emerald-400 font-bold mb-2 text-center",children:"غیررسمی"}),s.jsx("p",{className:"text-lg font-bold text-emerald-300 text-center",children:L.informal.pashto}),s.jsx("p",{className:"text-sm text-slate-400 text-center",children:L.informal.farsi})]})]})]},H))})})]})},N=(()=>{const A=[],R={basic:"پایه",head:"سر و صورت",body:"تنه",limbs:"دست و پا",internal:"اعضای داخلی",teens:"۱۱ تا ۲۰",tens:"دهگان‌ها",twenties:"۲۱ تا ۲۵",large:"اعداد بزرگ",mainDishes:"غذاهای اصلی",vegetables:"سبزیجات",fruits:"میوه‌ها",drinks:"نوشیدنی‌ها",dairy:"لبنیات",spices:"ادویه‌ها",shades:"سایه‌ها",adjectives:"صفت‌ها",nature:"در طبیعت",movement:"حرکتی",daily:"روزمره",emotional:"احساسی",formal:"رسمی",informal:"غیررسمی",howAreYou:"احوالپرسی",responses:"پاسخ‌ها",timeOfDay:"وقت روز",thanksAndApology:"تشکر و عذرخواهی",welcome:"خوش‌آمدگویی",common:"رایج",exclamations:"تعجب",kandahariSpecific:"خاص کندهاری",friendly:"دوستانه",negative:"منفی",proverbs:"ضرب‌المثل‌ها",immediate:"خانواده نزدیک",grandparents:"پدربزرگ و مادربزرگ",auntsUncles:"عمو و خاله",marriage:"ازدواج",children:"بچه‌ها"};return Object.keys(h).forEach(L=>{if(L==="sentences"||L==="sampleConversation"||L==="culturalNote"||L==="conjugation"||L==="comparison")return;const H=h[L];Array.isArray(H)&&H.length>0&&H[0].pashto&&A.push({key:L,title:R[L]||L,items:H})}),A})();return s.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[s.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[s.jsxs(Ca,{to:"/vocabulary",className:"text-blue-400 hover:text-blue-300 mb-4 inline-flex items-center gap-2 text-sm",children:[s.jsx(Pt,{className:"w-4 h-4"}),"بازگشت به واژگان"]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30",children:s.jsx(m,{className:"w-8 h-8 text-blue-400"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:u.title}),s.jsx("p",{className:"text-blue-400",children:u.titlePashto})]})]})]}),s.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 space-y-4",children:[h.comparison&&g(h.comparison),N.map(A=>d(A.title,A.items,A.key)),h.sentences&&b(h.sentences),h.sampleConversation&&x(h.sampleConversation)]}),h.culturalNote&&s.jsxs("div",{className:"bg-purple-500/20 rounded-2xl p-6 border border-purple-500/30 shadow-lg",children:[s.jsx("h3",{className:"font-bold text-purple-300 mb-2",children:"نکته فرهنگی"}),s.jsx("p",{className:"text-slate-300 leading-relaxed",children:h.culturalNote.farsi})]})]})}const Qh=[{id:"shopping",...Ka.shopping},{id:"restaurant",...Ka.restaurant},{id:"introduction",...Ka.introduction},{id:"taxi",...Ka.taxi},{id:"phone",...Ka.phone},{id:"doctor",...Ka.doctor},{id:"guestVisit",...Ka.guestVisit},{id:"pharmacy",...Ka.pharmacy},{id:"bank",...Ka.bank},{id:"mosque",...Ka.mosque},{id:"wedding",...Ka.wedding},{id:"fruitShop",...Ka.fruitShop},{id:"bakery",...Ka.bakery},{id:"publicBath",...Ka.publicBath},{id:"mobileShop",...Ka.mobileShop},{id:"guestHouse",...Ka.guestHouse}];function Vh(){const{conversationId:l}=Ss(),[c,f]=T.useState(!1),[u,h]=T.useState(!1),[m,d]=T.useState(!0);if(!l)return s.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[s.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[s.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30",children:s.jsx(De,{className:"w-7 h-7 text-white"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:"مکالمات روزمره"}),s.jsx("p",{className:"text-slate-400",children:"خبرې اترې - یادگیری مکالمه در موقعیت‌های مختلف"})]})]}),s.jsx("p",{className:"text-sm text-slate-300 bg-purple-500/20 p-3 rounded-xl border border-purple-500/30",children:"در هر مکالمه، نسخه‌های رسمی و غیررسمی جملات نشان داده می‌شود تا بتوانید در موقعیت‌های مختلف از آنها استفاده کنید."})]}),s.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:Qh.map(g=>s.jsxs(Ca,{to:`/conversation/${g.id}`,className:"bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-700 hover:border-purple-500/50 group",children:[s.jsx("h3",{className:"font-bold text-slate-200 text-xl mb-1 group-hover:text-purple-400",children:g.title}),s.jsx("p",{className:"text-purple-400 mb-2",children:g.titlePashto}),g.description&&s.jsx("p",{className:"text-sm text-slate-500 mb-3",children:g.description}),s.jsxs("div",{className:"flex items-center gap-4 text-xs text-slate-500",children:[s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx(Jn,{className:"w-3 h-3"}),g.dialogue.length," خط"]}),g.vocabulary&&s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx(at,{className:"w-3 h-3"}),g.vocabulary.length," واژه"]})]})]},g.id))})]});const b=Qh.find(g=>g.id===l);if(!b)return s.jsxs("div",{className:"max-w-3xl mx-auto text-center py-12",children:[s.jsx(De,{className:"w-16 h-16 text-slate-600 mx-auto mb-4"}),s.jsx("p",{className:"text-xl text-slate-400 mb-4",children:"مکالمه پیدا نشد"}),s.jsxs(Ca,{to:"/conversation",className:"text-purple-400 hover:text-purple-300 inline-flex items-center gap-2",children:[s.jsx(Pt,{className:"w-4 h-4"}),"بازگشت به لیست"]})]});const x=b.dialogue.some(g=>g.formalAlt||g.informalAlt);return s.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[s.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[s.jsxs(Ca,{to:"/conversation",className:"text-purple-400 hover:text-purple-300 mb-4 inline-flex items-center gap-2 text-sm",children:[s.jsx(Pt,{className:"w-4 h-4"}),"بازگشت به مکالمات"]}),s.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:b.title}),s.jsx("p",{className:"text-purple-400 mb-2",children:b.titlePashto}),b.description&&s.jsx("p",{className:"text-sm text-slate-500",children:b.description}),x&&s.jsx("div",{className:"mt-4 flex items-center gap-3",children:s.jsx("button",{onClick:()=>d(!m),className:`px-4 py-2 rounded-xl text-sm font-medium transition-all ${m?"bg-purple-500 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600"}`,children:m?"✓ نمایش رسمی/غیررسمی":"نمایش رسمی/غیررسمی"})})]}),s.jsx("div",{className:"bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-6",children:s.jsx("div",{className:"space-y-4",children:b.dialogue.map((g,k)=>{const N=k%2===0,A=g.formalAlt||g.informalAlt;return s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:`flex ${N?"justify-end":"justify-start"}`,children:s.jsxs("div",{className:`max-w-[85%] p-4 rounded-2xl ${N?"bg-purple-600 text-white rounded-br-sm":"bg-slate-700 text-slate-200 rounded-bl-sm border border-slate-600"}`,children:[s.jsx("span",{className:`text-xs block mb-1 ${N?"text-purple-200":"text-slate-500"}`,children:g.speaker}),s.jsx("p",{className:"font-bold text-lg leading-relaxed",children:g.pashto}),s.jsx("p",{className:`text-sm mt-1 ${N?"text-purple-100":"text-slate-400"}`,children:g.farsi})]})}),m&&A&&s.jsx("div",{className:`flex ${N?"justify-end":"justify-start"}`,children:s.jsxs("div",{className:`max-w-[85%] p-3 rounded-xl border-2 border-dashed ${N?"border-purple-500/50 bg-purple-500/10":"border-slate-600 bg-slate-700/50"}`,children:[s.jsx("span",{className:`text-xs font-medium block mb-1 ${g.formalAlt?"text-emerald-400":"text-amber-400"}`,children:g.formalAlt?"📋 رسمی:":"💬 غیررسمی:"}),s.jsx("p",{className:"font-bold text-slate-200",children:g.formalAlt||g.informalAlt}),s.jsx("p",{className:"text-sm text-slate-500 mt-1",children:g.formalAltFarsi||g.informalAltFarsi})]})})]},k)})})}),b.vocabulary&&s.jsxs("div",{className:"bg-slate-800 rounded-2xl shadow-lg border border-slate-700 overflow-hidden",children:[s.jsxs("button",{onClick:()=>f(!c),className:"w-full p-4 bg-amber-500/20 hover:bg-amber-500/30 transition-colors flex justify-between items-center border-b border-amber-500/30",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(at,{className:"w-5 h-5 text-amber-400"}),s.jsxs("span",{className:"font-bold text-amber-300",children:["واژگان کلیدی (",b.vocabulary.length,")"]})]}),c?s.jsx(nn,{className:"w-5 h-5 text-amber-400"}):s.jsx(qe,{className:"w-5 h-5 text-amber-400"})]}),c&&s.jsx("div",{className:"p-4",children:s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:b.vocabulary.map((g,k)=>s.jsxs("div",{className:"bg-amber-500/10 rounded-lg p-3 hover:bg-amber-500/20 transition-colors border border-amber-500/20",children:[s.jsx("p",{className:"font-bold text-amber-300 text-lg",children:g.pashto}),s.jsx("p",{className:"text-sm text-slate-300",children:g.farsi}),s.jsx("p",{className:"text-xs text-slate-500 font-mono",children:g.pronunciation})]},k))})})]}),b.usefulPhrases&&s.jsxs("div",{className:"bg-slate-800 rounded-2xl shadow-lg border border-slate-700 overflow-hidden",children:[s.jsxs("button",{onClick:()=>h(!u),className:"w-full p-4 bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors flex justify-between items-center border-b border-emerald-500/30",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(gu,{className:"w-5 h-5 text-emerald-400"}),s.jsxs("span",{className:"font-bold text-emerald-300",children:["عبارات مفید (",b.usefulPhrases.length,")"]})]}),u?s.jsx(nn,{className:"w-5 h-5 text-emerald-400"}):s.jsx(qe,{className:"w-5 h-5 text-emerald-400"})]}),u&&s.jsx("div",{className:"p-4 space-y-3",children:b.usefulPhrases.map((g,k)=>s.jsxs("div",{className:"bg-emerald-500/10 rounded-lg p-4 hover:bg-emerald-500/20 transition-colors border border-emerald-500/20",children:[s.jsx("p",{className:"font-bold text-emerald-300 text-lg",children:g.pashto}),s.jsx("p",{className:"text-slate-300",children:g.farsi}),s.jsx("p",{className:"text-xs text-slate-500 font-mono mt-1",children:g.pronunciation})]},k))})]})]})}const Ix={"to-be":{id:"to-be",infinitive:"اوسېدل",infinitiveFarsi:"بودن",root:"یم/دی",type:"irregular",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"یم",farsi:"هستم",pronunciation:"yam"},{pronoun:"ته",pashto:"یې",farsi:"هستی",pronunciation:"ye"},{pronoun:"هغه (م)",pashto:"دی",farsi:"است",pronunciation:"day"},{pronoun:"هغه (ز)",pashto:"ده",farsi:"است",pronunciation:"da"},{pronoun:"موږ",pashto:"یو",farsi:"هستیم",pronunciation:"yu"},{pronoun:"تاسو",pashto:"یاست",farsi:"هستید",pronunciation:"yāst"},{pronoun:"هغوی",pashto:"دي",farsi:"هستند",pronunciation:"di"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"وم",farsi:"بودم",pronunciation:"wam"},{pronoun:"ته",pashto:"وې",farsi:"بودی",pronunciation:"we"},{pronoun:"هغه (م)",pashto:"و",farsi:"بود",pronunciation:"wu"},{pronoun:"هغه (ز)",pashto:"وه",farsi:"بود",pronunciation:"wa"},{pronoun:"موږ",pashto:"وو",farsi:"بودیم",pronunciation:"wu"},{pronoun:"تاسو",pashto:"وئ",farsi:"بودید",pronunciation:"wey"},{pronoun:"هغوی",pashto:"ول",farsi:"بودند",pronunciation:"wal"}]}},examples:[{pashto:"زه ښه یم",farsi:"من خوبم"},{pashto:"هغه داکتر دی",farsi:"او داکتر است"},{pashto:"زه پرون کور کې وم",farsi:"من دیروز در خانه بودم"}]},"to-go":{id:"to-go",infinitive:"تلل",infinitiveFarsi:"رفتن",root:"ځ",pastRoot:"لاړ",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ځم",farsi:"می‌روم",pronunciation:"dzam"},{pronoun:"ته",pashto:"ځې",farsi:"می‌روی",pronunciation:"dze"},{pronoun:"هغه",pashto:"ځي",farsi:"می‌رود",pronunciation:"dzi"},{pronoun:"موږ",pashto:"ځو",farsi:"می‌رویم",pronunciation:"dzu"},{pronoun:"تاسو",pashto:"ځئ",farsi:"می‌روید",pronunciation:"dzey"},{pronoun:"هغوی",pashto:"ځي",farsi:"می‌روند",pronunciation:"dzi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"لاړم",farsi:"رفتم",pronunciation:"lāṛam"},{pronoun:"ته",pashto:"لاړې",farsi:"رفتی",pronunciation:"lāṛe"},{pronoun:"هغه (م)",pashto:"لاړ",farsi:"رفت",pronunciation:"lāṛ"},{pronoun:"هغه (ز)",pashto:"لاړه",farsi:"رفت",pronunciation:"lāṛa"},{pronoun:"موږ",pashto:"لاړو",farsi:"رفتیم",pronunciation:"lāṛu"},{pronoun:"تاسو",pashto:"لاړئ",farsi:"رفتید",pronunciation:"lāṛey"},{pronoun:"هغوی",pashto:"لاړل",farsi:"رفتند",pronunciation:"lāṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ځم",farsi:"خواهم رفت",pronunciation:"ba dzam"},{pronoun:"ته",pashto:"به ځې",farsi:"خواهی رفت",pronunciation:"ba dze"},{pronoun:"هغه",pashto:"به ځي",farsi:"خواهد رفت",pronunciation:"ba dzi"},{pronoun:"موږ",pashto:"به ځو",farsi:"خواهیم رفت",pronunciation:"ba dzu"},{pronoun:"تاسو",pashto:"به ځئ",farsi:"خواهید رفت",pronunciation:"ba dzey"},{pronoun:"هغوی",pashto:"به ځي",farsi:"خواهند رفت",pronunciation:"ba dzi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"لاړ شه",farsi:"برو",pronunciation:"lāṛ sha"},{pronoun:"تاسو",pashto:"لاړ شئ",farsi:"بروید",pronunciation:"lāṛ shey"}],negative:[{pronoun:"ته",pashto:"مه ځه",farsi:"نرو",pronunciation:"ma dza"},{pronoun:"تاسو",pashto:"مه ځئ",farsi:"نروید",pronunciation:"ma dzey"}]}},examples:[{pashto:"زه کور ته ځم",farsi:"من به خانه می‌روم"},{pashto:"هغه پرون بازار ته لاړ",farsi:"او دیروز به بازار رفت"},{pashto:"زه به سبا کابل ته ځم",farsi:"من فردا به کابل خواهم رفت"}]},"to-come":{id:"to-come",infinitive:"راتلل",infinitiveFarsi:"آمدن",root:"راځ",pastRoot:"راغل",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"راځم",farsi:"می‌آیم",pronunciation:"rādzam"},{pronoun:"ته",pashto:"راځې",farsi:"می‌آیی",pronunciation:"rādze"},{pronoun:"هغه",pashto:"راځي",farsi:"می‌آید",pronunciation:"rādzi"},{pronoun:"موږ",pashto:"راځو",farsi:"می‌آییم",pronunciation:"rādzu"},{pronoun:"تاسو",pashto:"راځئ",farsi:"می‌آیید",pronunciation:"rādzey"},{pronoun:"هغوی",pashto:"راځي",farsi:"می‌آیند",pronunciation:"rādzi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"راغلم",farsi:"آمدم",pronunciation:"rāghlam"},{pronoun:"ته",pashto:"راغلې",farsi:"آمدی",pronunciation:"rāghle"},{pronoun:"هغه (م)",pashto:"راغی",farsi:"آمد",pronunciation:"rāghay"},{pronoun:"هغه (ز)",pashto:"راغله",farsi:"آمد",pronunciation:"rāghla"},{pronoun:"موږ",pashto:"راغلو",farsi:"آمدیم",pronunciation:"rāghlu"},{pronoun:"تاسو",pashto:"راغلئ",farsi:"آمدید",pronunciation:"rāghley"},{pronoun:"هغوی",pashto:"راغلل",farsi:"آمدند",pronunciation:"rāghlal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به راځم",farsi:"خواهم آمد",pronunciation:"ba rādzam"},{pronoun:"ته",pashto:"به راځې",farsi:"خواهی آمد",pronunciation:"ba rādze"},{pronoun:"هغه",pashto:"به راځي",farsi:"خواهد آمد",pronunciation:"ba rādzi"},{pronoun:"موږ",pashto:"به راځو",farsi:"خواهیم آمد",pronunciation:"ba rādzu"},{pronoun:"تاسو",pashto:"به راځئ",farsi:"خواهید آمد",pronunciation:"ba rādzey"},{pronoun:"هغوی",pashto:"به راځي",farsi:"خواهند آمد",pronunciation:"ba rādzi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"راشه",farsi:"بیا",pronunciation:"rāsha"},{pronoun:"تاسو",pashto:"راشئ",farsi:"بیایید",pronunciation:"rāshey"}],negative:[{pronoun:"ته",pashto:"مه راځه",farsi:"نیا",pronunciation:"ma rādza"},{pronoun:"تاسو",pashto:"مه راځئ",farsi:"نیایید",pronunciation:"ma rādzey"}]}},examples:[{pashto:"زه اوس راځم",farsi:"من الان می‌آیم"},{pashto:"هغه پرون راغی",farsi:"او دیروز آمد"},{pashto:"راشه!",farsi:"بیا!"}]},"to-eat":{id:"to-eat",infinitive:"خوړل",infinitiveFarsi:"خوردن",root:"خور",pastRoot:"وخوړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"خورم",farsi:"می‌خورم",pronunciation:"khoram"},{pronoun:"ته",pashto:"خورې",farsi:"می‌خوری",pronunciation:"khore"},{pronoun:"هغه",pashto:"خوري",farsi:"می‌خورد",pronunciation:"khori"},{pronoun:"موږ",pashto:"خورو",farsi:"می‌خوریم",pronunciation:"khoru"},{pronoun:"تاسو",pashto:"خورئ",farsi:"می‌خورید",pronunciation:"khorey"},{pronoun:"هغوی",pashto:"خوري",farsi:"می‌خورند",pronunciation:"khori"}]},past:{name:"گذشته",namePashto:"تېرمهال",note:"فعل متعدی - با مفعول مطابقت می‌کند",conjugations:[{pronoun:"ما",pashto:"وخوړ",farsi:"خوردم (مذکر)",pronunciation:"wakhoṛ"},{pronoun:"ما",pashto:"وخوړه",farsi:"خوردم (مونث)",pronunciation:"wakhoṛa"},{pronoun:"تا",pashto:"وخوړ",farsi:"خوردی",pronunciation:"wakhoṛ"},{pronoun:"هغه",pashto:"وخوړ",farsi:"خورد",pronunciation:"wakhoṛ"},{pronoun:"موږ",pashto:"وخوړل",farsi:"خوردیم",pronunciation:"wakhoṛal"},{pronoun:"تاسو",pashto:"وخوړل",farsi:"خوردید",pronunciation:"wakhoṛal"},{pronoun:"هغوی",pashto:"وخوړل",farsi:"خوردند",pronunciation:"wakhoṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به خورم",farsi:"خواهم خورد",pronunciation:"ba khoram"},{pronoun:"ته",pashto:"به خورې",farsi:"خواهی خورد",pronunciation:"ba khore"},{pronoun:"هغه",pashto:"به خوري",farsi:"خواهد خورد",pronunciation:"ba khori"},{pronoun:"موږ",pashto:"به خورو",farsi:"خواهیم خورد",pronunciation:"ba khoru"},{pronoun:"تاسو",pashto:"به خورئ",farsi:"خواهید خورد",pronunciation:"ba khorey"},{pronoun:"هغوی",pashto:"به خوري",farsi:"خواهند خورد",pronunciation:"ba khori"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وخوره",farsi:"بخور",pronunciation:"wakhora"},{pronoun:"تاسو",pashto:"وخورئ",farsi:"بخورید",pronunciation:"wakhorey"}],negative:[{pronoun:"ته",pashto:"مه خوره",farsi:"نخور",pronunciation:"ma khora"},{pronoun:"تاسو",pashto:"مه خورئ",farsi:"نخورید",pronunciation:"ma khorey"}]}},examples:[{pashto:"زه ډوډۍ خورم",farsi:"من غذا می‌خورم"},{pashto:"ما ډوډۍ وخوړه",farsi:"من غذا خوردم"},{pashto:"وخوره!",farsi:"بخور!"}]},"to-drink":{id:"to-drink",infinitive:"څښل",infinitiveFarsi:"نوشیدن",root:"څښ",pastRoot:"وڅښ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"څښم",farsi:"می‌نوشم",pronunciation:"tsṣ̌am"},{pronoun:"ته",pashto:"څښې",farsi:"می‌نوشی",pronunciation:"tsṣ̌e"},{pronoun:"هغه",pashto:"څښي",farsi:"می‌نوشد",pronunciation:"tsṣ̌i"},{pronoun:"موږ",pashto:"څښو",farsi:"می‌نوشیم",pronunciation:"tsṣ̌u"},{pronoun:"تاسو",pashto:"څښئ",farsi:"می‌نوشید",pronunciation:"tsṣ̌ey"},{pronoun:"هغوی",pashto:"څښي",farsi:"می‌نوشند",pronunciation:"tsṣ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"وڅښه",farsi:"نوشیدم",pronunciation:"watsṣ̌a"},{pronoun:"تا",pashto:"وڅښه",farsi:"نوشیدی",pronunciation:"watsṣ̌a"},{pronoun:"هغه",pashto:"وڅښه",farsi:"نوشید",pronunciation:"watsṣ̌a"},{pronoun:"موږ",pashto:"وڅښل",farsi:"نوشیدیم",pronunciation:"watsṣ̌al"},{pronoun:"تاسو",pashto:"وڅښل",farsi:"نوشیدید",pronunciation:"watsṣ̌al"},{pronoun:"هغوی",pashto:"وڅښل",farsi:"نوشیدند",pronunciation:"watsṣ̌al"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به څښم",farsi:"خواهم نوشید",pronunciation:"ba tsṣ̌am"},{pronoun:"ته",pashto:"به څښې",farsi:"خواهی نوشید",pronunciation:"ba tsṣ̌e"},{pronoun:"هغه",pashto:"به څښي",farsi:"خواهد نوشید",pronunciation:"ba tsṣ̌i"},{pronoun:"موږ",pashto:"به څښو",farsi:"خواهیم نوشید",pronunciation:"ba tsṣ̌u"},{pronoun:"تاسو",pashto:"به څښئ",farsi:"خواهید نوشید",pronunciation:"ba tsṣ̌ey"},{pronoun:"هغوی",pashto:"به څښي",farsi:"خواهند نوشید",pronunciation:"ba tsṣ̌i"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وڅښه",farsi:"بنوش",pronunciation:"watsṣ̌a"},{pronoun:"تاسو",pashto:"وڅښئ",farsi:"بنوشید",pronunciation:"watsṣ̌ey"}],negative:[{pronoun:"ته",pashto:"مه څښه",farsi:"ننوش",pronunciation:"ma tsṣ̌a"},{pronoun:"تاسو",pashto:"مه څښئ",farsi:"ننوشید",pronunciation:"ma tsṣ̌ey"}]}},examples:[{pashto:"زه چای څښم",farsi:"من چای می‌نوشم"},{pashto:"ما اوبه وڅښلې",farsi:"من آب نوشیدم"}]},"to-do":{id:"to-do",infinitive:"کول",infinitiveFarsi:"کردن",root:"کو",pastRoot:"وکړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"کوم",farsi:"می‌کنم",pronunciation:"kawam"},{pronoun:"ته",pashto:"کوې",farsi:"می‌کنی",pronunciation:"kawe"},{pronoun:"هغه",pashto:"کوي",farsi:"می‌کند",pronunciation:"kawi"},{pronoun:"موږ",pashto:"کوو",farsi:"می‌کنیم",pronunciation:"kawu"},{pronoun:"تاسو",pashto:"کوئ",farsi:"می‌کنید",pronunciation:"kawey"},{pronoun:"هغوی",pashto:"کوي",farsi:"می‌کنند",pronunciation:"kawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"وکړ",farsi:"کردم (مذکر)",pronunciation:"wakṛ"},{pronoun:"ما",pashto:"وکړه",farsi:"کردم (مونث)",pronunciation:"wakṛa"},{pronoun:"تا",pashto:"وکړ",farsi:"کردی",pronunciation:"wakṛ"},{pronoun:"هغه",pashto:"وکړ",farsi:"کرد",pronunciation:"wakṛ"},{pronoun:"موږ",pashto:"وکړل",farsi:"کردیم",pronunciation:"wakṛal"},{pronoun:"تاسو",pashto:"وکړل",farsi:"کردید",pronunciation:"wakṛal"},{pronoun:"هغوی",pashto:"وکړل",farsi:"کردند",pronunciation:"wakṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به کوم",farsi:"خواهم کرد",pronunciation:"ba kawam"},{pronoun:"ته",pashto:"به کوې",farsi:"خواهی کرد",pronunciation:"ba kawe"},{pronoun:"هغه",pashto:"به کوي",farsi:"خواهد کرد",pronunciation:"ba kawi"},{pronoun:"موږ",pashto:"به کوو",farsi:"خواهیم کرد",pronunciation:"ba kawu"},{pronoun:"تاسو",pashto:"به کوئ",farsi:"خواهید کرد",pronunciation:"ba kawey"},{pronoun:"هغوی",pashto:"به کوي",farsi:"خواهند کرد",pronunciation:"ba kawi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وکړه",farsi:"بکن",pronunciation:"wakṛa"},{pronoun:"تاسو",pashto:"وکړئ",farsi:"بکنید",pronunciation:"wakṛey"}],negative:[{pronoun:"ته",pashto:"مه کوه",farsi:"نکن",pronunciation:"ma kawa"},{pronoun:"تاسو",pashto:"مه کوئ",farsi:"نکنید",pronunciation:"ma kawey"}]}},examples:[{pashto:"زه کار کوم",farsi:"من کار می‌کنم"},{pashto:"ما کار وکړ",farsi:"من کار کردم"}]},"to-want":{id:"to-want",infinitive:"غوښتل",infinitiveFarsi:"خواستن",root:"غواړ",pastRoot:"وغوښت",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"غواړم",farsi:"می‌خواهم",pronunciation:"ghwāṛam"},{pronoun:"ته",pashto:"غواړې",farsi:"می‌خواهی",pronunciation:"ghwāṛe"},{pronoun:"هغه",pashto:"غواړي",farsi:"می‌خواهد",pronunciation:"ghwāṛi"},{pronoun:"موږ",pashto:"غواړو",farsi:"می‌خواهیم",pronunciation:"ghwāṛu"},{pronoun:"تاسو",pashto:"غواړئ",farsi:"می‌خواهید",pronunciation:"ghwāṛey"},{pronoun:"هغوی",pashto:"غواړي",farsi:"می‌خواهند",pronunciation:"ghwāṛi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"وغوښتل",farsi:"خواستم",pronunciation:"waghwuṣ̌tal"},{pronoun:"تا",pashto:"وغوښتل",farsi:"خواستی",pronunciation:"waghwuṣ̌tal"},{pronoun:"هغه",pashto:"وغوښتل",farsi:"خواست",pronunciation:"waghwuṣ̌tal"},{pronoun:"موږ",pashto:"وغوښتل",farsi:"خواستیم",pronunciation:"waghwuṣ̌tal"},{pronoun:"تاسو",pashto:"وغوښتل",farsi:"خواستید",pronunciation:"waghwuṣ̌tal"},{pronoun:"هغوی",pashto:"وغوښتل",farsi:"خواستند",pronunciation:"waghwuṣ̌tal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به غواړم",farsi:"خواهم خواست",pronunciation:"ba ghwāṛam"},{pronoun:"ته",pashto:"به غواړې",farsi:"خواهی خواست",pronunciation:"ba ghwāṛe"},{pronoun:"هغه",pashto:"به غواړي",farsi:"خواهد خواست",pronunciation:"ba ghwāṛi"},{pronoun:"موږ",pashto:"به غواړو",farsi:"خواهیم خواست",pronunciation:"ba ghwāṛu"},{pronoun:"تاسو",pashto:"به غواړئ",farsi:"خواهید خواست",pronunciation:"ba ghwāṛey"},{pronoun:"هغوی",pashto:"به غواړي",farsi:"خواهند خواست",pronunciation:"ba ghwāṛi"}]}},examples:[{pashto:"زه چای غواړم",farsi:"من چای می‌خواهم"},{pashto:"ته څه غواړې؟",farsi:"تو چه می‌خواهی؟"}]},"to-see":{id:"to-see",infinitive:"لیدل",infinitiveFarsi:"دیدن",root:"وین",pastRoot:"ولید",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"وینم",farsi:"می‌بینم",pronunciation:"winam"},{pronoun:"ته",pashto:"وینې",farsi:"می‌بینی",pronunciation:"wine"},{pronoun:"هغه",pashto:"ویني",farsi:"می‌بیند",pronunciation:"wini"},{pronoun:"موږ",pashto:"وینو",farsi:"می‌بینیم",pronunciation:"winu"},{pronoun:"تاسو",pashto:"وینئ",farsi:"می‌بینید",pronunciation:"winey"},{pronoun:"هغوی",pashto:"ویني",farsi:"می‌بینند",pronunciation:"wini"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ولید",farsi:"دیدم (مذکر)",pronunciation:"walid"},{pronoun:"ما",pashto:"ولیده",farsi:"دیدم (مونث)",pronunciation:"walida"},{pronoun:"تا",pashto:"ولید",farsi:"دیدی",pronunciation:"walid"},{pronoun:"هغه",pashto:"ولید",farsi:"دید",pronunciation:"walid"},{pronoun:"موږ",pashto:"ولیدل",farsi:"دیدیم",pronunciation:"walidal"},{pronoun:"تاسو",pashto:"ولیدل",farsi:"دیدید",pronunciation:"walidal"},{pronoun:"هغوی",pashto:"ولیدل",farsi:"دیدند",pronunciation:"walidal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به وینم",farsi:"خواهم دید",pronunciation:"ba winam"},{pronoun:"ته",pashto:"به وینې",farsi:"خواهی دید",pronunciation:"ba wine"},{pronoun:"هغه",pashto:"به ویني",farsi:"خواهد دید",pronunciation:"ba wini"},{pronoun:"موږ",pashto:"به وینو",farsi:"خواهیم دید",pronunciation:"ba winu"},{pronoun:"تاسو",pashto:"به وینئ",farsi:"خواهید دید",pronunciation:"ba winey"},{pronoun:"هغوی",pashto:"به ویني",farsi:"خواهند دید",pronunciation:"ba wini"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وګوره",farsi:"ببین",pronunciation:"wgora"},{pronoun:"تاسو",pashto:"وګورئ",farsi:"ببینید",pronunciation:"wgorey"}],negative:[{pronoun:"ته",pashto:"مه ګوره",farsi:"نبین",pronunciation:"ma gora"},{pronoun:"تاسو",pashto:"مه ګورئ",farsi:"نبینید",pronunciation:"ma gorey"}]}},examples:[{pashto:"زه تا وینم",farsi:"من تو را می‌بینم"},{pashto:"ما هغه ولید",farsi:"من او را دیدم"},{pashto:"بیا وینو!",farsi:"باز می‌بینیم!"}]},"to-say":{id:"to-say",infinitive:"ویل",infinitiveFarsi:"گفتن",root:"وای",pastRoot:"وویل",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"وایم",farsi:"می‌گویم",pronunciation:"wāyam"},{pronoun:"ته",pashto:"وایې",farsi:"می‌گویی",pronunciation:"wāye"},{pronoun:"هغه",pashto:"وایي",farsi:"می‌گوید",pronunciation:"wāyi"},{pronoun:"موږ",pashto:"وایو",farsi:"می‌گوییم",pronunciation:"wāyu"},{pronoun:"تاسو",pashto:"وایئ",farsi:"می‌گویید",pronunciation:"wāyey"},{pronoun:"هغوی",pashto:"وایي",farsi:"می‌گویند",pronunciation:"wāyi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"وویل",farsi:"گفتم",pronunciation:"wawayal"},{pronoun:"تا",pashto:"وویل",farsi:"گفتی",pronunciation:"wawayal"},{pronoun:"هغه",pashto:"وویل",farsi:"گفت",pronunciation:"wawayal"},{pronoun:"موږ",pashto:"وویل",farsi:"گفتیم",pronunciation:"wawayal"},{pronoun:"تاسو",pashto:"وویل",farsi:"گفتید",pronunciation:"wawayal"},{pronoun:"هغوی",pashto:"وویل",farsi:"گفتند",pronunciation:"wawayal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به وایم",farsi:"خواهم گفت",pronunciation:"ba wāyam"},{pronoun:"ته",pashto:"به وایې",farsi:"خواهی گفت",pronunciation:"ba wāye"},{pronoun:"هغه",pashto:"به وایي",farsi:"خواهد گفت",pronunciation:"ba wāyi"},{pronoun:"موږ",pashto:"به وایو",farsi:"خواهیم گفت",pronunciation:"ba wāyu"},{pronoun:"تاسو",pashto:"به وایئ",farsi:"خواهید گفت",pronunciation:"ba wāyey"},{pronoun:"هغوی",pashto:"به وایي",farsi:"خواهند گفت",pronunciation:"ba wāyi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ووایه",farsi:"بگو",pronunciation:"wawāya"},{pronoun:"تاسو",pashto:"ووایئ",farsi:"بگویید",pronunciation:"wawāyey"}],negative:[{pronoun:"ته",pashto:"مه وایه",farsi:"نگو",pronunciation:"ma wāya"},{pronoun:"تاسو",pashto:"مه وایئ",farsi:"نگویید",pronunciation:"ma wāyey"}]}},examples:[{pashto:"زه رښتیا وایم",farsi:"من راست می‌گویم"},{pashto:"هغه څه وویل؟",farsi:"او چه گفت؟"}]},"to-hear":{id:"to-hear",infinitive:"اورېدل",infinitiveFarsi:"شنیدن",root:"اور",pastRoot:"واورېد",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"اورم",farsi:"می‌شنوم",pronunciation:"awram"},{pronoun:"ته",pashto:"اورې",farsi:"می‌شنوی",pronunciation:"awre"},{pronoun:"هغه",pashto:"اوري",farsi:"می‌شنود",pronunciation:"awri"},{pronoun:"موږ",pashto:"اورو",farsi:"می‌شنویم",pronunciation:"awru"},{pronoun:"تاسو",pashto:"اورئ",farsi:"می‌شنوید",pronunciation:"awrey"},{pronoun:"هغوی",pashto:"اوري",farsi:"می‌شنوند",pronunciation:"awri"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"واورېدل",farsi:"شنیدم",pronunciation:"wāwredal"},{pronoun:"تا",pashto:"واورېدل",farsi:"شنیدی",pronunciation:"wāwredal"},{pronoun:"هغه",pashto:"واورېدل",farsi:"شنید",pronunciation:"wāwredal"},{pronoun:"موږ",pashto:"واورېدل",farsi:"شنیدیم",pronunciation:"wāwredal"},{pronoun:"تاسو",pashto:"واورېدل",farsi:"شنیدید",pronunciation:"wāwredal"},{pronoun:"هغوی",pashto:"واورېدل",farsi:"شنیدند",pronunciation:"wāwredal"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"واوره",farsi:"بشنو",pronunciation:"wāwra"},{pronoun:"تاسو",pashto:"واورئ",farsi:"بشنوید",pronunciation:"wāwrey"}],negative:[{pronoun:"ته",pashto:"مه اوره",farsi:"نشنو",pronunciation:"ma awra"},{pronoun:"تاسو",pashto:"مه اورئ",farsi:"نشنوید",pronunciation:"ma awrey"}]}},examples:[{pashto:"زه غږ اورم",farsi:"من صدا می‌شنوم"},{pashto:"واوره!",farsi:"بشنو!"}]},"to-write":{id:"to-write",infinitive:"لیکل",infinitiveFarsi:"نوشتن",root:"لیک",pastRoot:"ولیک",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"لیکم",farsi:"می‌نویسم",pronunciation:"likam"},{pronoun:"ته",pashto:"لیکې",farsi:"می‌نویسی",pronunciation:"like"},{pronoun:"هغه",pashto:"لیکي",farsi:"می‌نویسد",pronunciation:"liki"},{pronoun:"موږ",pashto:"لیکو",farsi:"می‌نویسیم",pronunciation:"liku"},{pronoun:"تاسو",pashto:"لیکئ",farsi:"می‌نویسید",pronunciation:"likey"},{pronoun:"هغوی",pashto:"لیکي",farsi:"می‌نویسند",pronunciation:"liki"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ولیکل",farsi:"نوشتم",pronunciation:"walikal"},{pronoun:"تا",pashto:"ولیکل",farsi:"نوشتی",pronunciation:"walikal"},{pronoun:"هغه",pashto:"ولیکل",farsi:"نوشت",pronunciation:"walikal"},{pronoun:"موږ",pashto:"ولیکل",farsi:"نوشتیم",pronunciation:"walikal"},{pronoun:"تاسو",pashto:"ولیکل",farsi:"نوشتید",pronunciation:"walikal"},{pronoun:"هغوی",pashto:"ولیکل",farsi:"نوشتند",pronunciation:"walikal"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ولیکه",farsi:"بنویس",pronunciation:"walika"},{pronoun:"تاسو",pashto:"ولیکئ",farsi:"بنویسید",pronunciation:"walikey"}],negative:[{pronoun:"ته",pashto:"مه لیکه",farsi:"ننویس",pronunciation:"ma lika"},{pronoun:"تاسو",pashto:"مه لیکئ",farsi:"ننویسید",pronunciation:"ma likey"}]}},examples:[{pashto:"زه لیک لیکم",farsi:"من نامه می‌نویسم"},{pashto:"ولیکه!",farsi:"بنویس!"}]},"to-read":{id:"to-read",infinitive:"لوستل",infinitiveFarsi:"خواندن",root:"لول",pastRoot:"ولوست",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"لولم",farsi:"می‌خوانم",pronunciation:"lwalam"},{pronoun:"ته",pashto:"لولې",farsi:"می‌خوانی",pronunciation:"lwale"},{pronoun:"هغه",pashto:"لولي",farsi:"می‌خواند",pronunciation:"lwali"},{pronoun:"موږ",pashto:"لولو",farsi:"می‌خوانیم",pronunciation:"lwalu"},{pronoun:"تاسو",pashto:"لولئ",farsi:"می‌خوانید",pronunciation:"lwaley"},{pronoun:"هغوی",pashto:"لولي",farsi:"می‌خوانند",pronunciation:"lwali"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ولوستل",farsi:"خواندم",pronunciation:"walwastal"},{pronoun:"تا",pashto:"ولوستل",farsi:"خواندی",pronunciation:"walwastal"},{pronoun:"هغه",pashto:"ولوستل",farsi:"خواند",pronunciation:"walwastal"},{pronoun:"موږ",pashto:"ولوستل",farsi:"خواندیم",pronunciation:"walwastal"},{pronoun:"تاسو",pashto:"ولوستل",farsi:"خواندید",pronunciation:"walwastal"},{pronoun:"هغوی",pashto:"ولوستل",farsi:"خواندند",pronunciation:"walwastal"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ولوله",farsi:"بخوان",pronunciation:"walwala"},{pronoun:"تاسو",pashto:"ولولئ",farsi:"بخوانید",pronunciation:"walwaley"}]}},examples:[{pashto:"زه کتاب لولم",farsi:"من کتاب می‌خوانم"},{pashto:"ما کتاب ولوستل",farsi:"من کتاب خواندم"}]},"to-have":{id:"to-have",infinitive:"لرل",infinitiveFarsi:"داشتن",root:"لر",pastRoot:"درلود",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"لرم",farsi:"دارم",pronunciation:"laram"},{pronoun:"ته",pashto:"لرې",farsi:"داری",pronunciation:"lare"},{pronoun:"هغه",pashto:"لري",farsi:"دارد",pronunciation:"lari"},{pronoun:"موږ",pashto:"لرو",farsi:"داریم",pronunciation:"laru"},{pronoun:"تاسو",pashto:"لرئ",farsi:"دارید",pronunciation:"larey"},{pronoun:"هغوی",pashto:"لري",farsi:"دارند",pronunciation:"lari"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"درلود",farsi:"داشتم",pronunciation:"darlod"},{pronoun:"تا",pashto:"درلودې",farsi:"داشتی",pronunciation:"darlode"},{pronoun:"هغه",pashto:"درلود",farsi:"داشت",pronunciation:"darlod"},{pronoun:"موږ",pashto:"درلودل",farsi:"داشتیم",pronunciation:"darlodal"},{pronoun:"تاسو",pashto:"درلودل",farsi:"داشتید",pronunciation:"darlodal"},{pronoun:"هغوی",pashto:"درلودل",farsi:"داشتند",pronunciation:"darlodal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به لرم",farsi:"خواهم داشت",pronunciation:"ba laram"},{pronoun:"ته",pashto:"به لرې",farsi:"خواهی داشت",pronunciation:"ba lare"},{pronoun:"هغه",pashto:"به لري",farsi:"خواهد داشت",pronunciation:"ba lari"},{pronoun:"موږ",pashto:"به لرو",farsi:"خواهیم داشت",pronunciation:"ba laru"},{pronoun:"تاسو",pashto:"به لرئ",farsi:"خواهید داشت",pronunciation:"ba larey"},{pronoun:"هغوی",pashto:"به لري",farsi:"خواهند داشت",pronunciation:"ba lari"}]}},examples:[{pashto:"زه یو کور لرم",farsi:"من یک خانه دارم"},{pashto:"هغه ډېر پیسې لري",farsi:"او پول زیادی دارد"},{pashto:"ما یو موټر درلود",farsi:"من یک ماشین داشتم"}]},"to-give":{id:"to-give",infinitive:"ورکول",infinitiveFarsi:"دادن",root:"ورکو",pastRoot:"ورکړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ورکوم",farsi:"می‌دهم",pronunciation:"warkawam"},{pronoun:"ته",pashto:"ورکوې",farsi:"می‌دهی",pronunciation:"warkawe"},{pronoun:"هغه",pashto:"ورکوي",farsi:"می‌دهد",pronunciation:"warkawi"},{pronoun:"موږ",pashto:"ورکوو",farsi:"می‌دهیم",pronunciation:"warkawu"},{pronoun:"تاسو",pashto:"ورکوئ",farsi:"می‌دهید",pronunciation:"warkawey"},{pronoun:"هغوی",pashto:"ورکوي",farsi:"می‌دهند",pronunciation:"warkawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ورکړ",farsi:"دادم",pronunciation:"warkṛ"},{pronoun:"تا",pashto:"ورکړ",farsi:"دادی",pronunciation:"warkṛ"},{pronoun:"هغه",pashto:"ورکړ",farsi:"داد",pronunciation:"warkṛ"},{pronoun:"موږ",pashto:"ورکړل",farsi:"دادیم",pronunciation:"warkṛal"},{pronoun:"تاسو",pashto:"ورکړل",farsi:"دادید",pronunciation:"warkṛal"},{pronoun:"هغوی",pashto:"ورکړل",farsi:"دادند",pronunciation:"warkṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ورکوم",farsi:"خواهم داد",pronunciation:"ba warkawam"},{pronoun:"ته",pashto:"به ورکوې",farsi:"خواهی داد",pronunciation:"ba warkawe"},{pronoun:"هغه",pashto:"به ورکوي",farsi:"خواهد داد",pronunciation:"ba warkawi"},{pronoun:"موږ",pashto:"به ورکوو",farsi:"خواهیم داد",pronunciation:"ba warkawu"},{pronoun:"تاسو",pashto:"به ورکوئ",farsi:"خواهید داد",pronunciation:"ba warkawey"},{pronoun:"هغوی",pashto:"به ورکوي",farsi:"خواهند داد",pronunciation:"ba warkawi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ورکړه",farsi:"بده",pronunciation:"warkṛa"},{pronoun:"تاسو",pashto:"ورکړئ",farsi:"بدهید",pronunciation:"warkṛey"}],negative:[{pronoun:"ته",pashto:"مه ورکوه",farsi:"نده",pronunciation:"ma warkawa"},{pronoun:"تاسو",pashto:"مه ورکوئ",farsi:"ندهید",pronunciation:"ma warkawey"}]}},examples:[{pashto:"زه تا ته کتاب ورکوم",farsi:"من به تو کتاب می‌دهم"},{pashto:"ما هغه ته پیسې ورکړې",farsi:"من به او پول دادم"},{pashto:"ورکړه!",farsi:"بده!"}]},"to-take":{id:"to-take",infinitive:"اخیستل",infinitiveFarsi:"گرفتن",root:"اخل",pastRoot:"واخیست",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"اخلم",farsi:"می‌گیرم",pronunciation:"akhlam"},{pronoun:"ته",pashto:"اخلې",farsi:"می‌گیری",pronunciation:"akhle"},{pronoun:"هغه",pashto:"اخلي",farsi:"می‌گیرد",pronunciation:"akhli"},{pronoun:"موږ",pashto:"اخلو",farsi:"می‌گیریم",pronunciation:"akhlu"},{pronoun:"تاسو",pashto:"اخلئ",farsi:"می‌گیرید",pronunciation:"akhley"},{pronoun:"هغوی",pashto:"اخلي",farsi:"می‌گیرند",pronunciation:"akhli"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"واخیستل",farsi:"گرفتم",pronunciation:"wākhīstal"},{pronoun:"تا",pashto:"واخیستل",farsi:"گرفتی",pronunciation:"wākhīstal"},{pronoun:"هغه",pashto:"واخیستل",farsi:"گرفت",pronunciation:"wākhīstal"},{pronoun:"موږ",pashto:"واخیستل",farsi:"گرفتیم",pronunciation:"wākhīstal"},{pronoun:"تاسو",pashto:"واخیستل",farsi:"گرفتید",pronunciation:"wākhīstal"},{pronoun:"هغوی",pashto:"واخیستل",farsi:"گرفتند",pronunciation:"wākhīstal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به اخلم",farsi:"خواهم گرفت",pronunciation:"ba akhlam"},{pronoun:"ته",pashto:"به اخلې",farsi:"خواهی گرفت",pronunciation:"ba akhle"},{pronoun:"هغه",pashto:"به اخلي",farsi:"خواهد گرفت",pronunciation:"ba akhli"},{pronoun:"موږ",pashto:"به اخلو",farsi:"خواهیم گرفت",pronunciation:"ba akhlu"},{pronoun:"تاسو",pashto:"به اخلئ",farsi:"خواهید گرفت",pronunciation:"ba akhley"},{pronoun:"هغوی",pashto:"به اخلي",farsi:"خواهند گرفت",pronunciation:"ba akhli"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"واخله",farsi:"بگیر",pronunciation:"wākhla"},{pronoun:"تاسو",pashto:"واخلئ",farsi:"بگیرید",pronunciation:"wākhley"}],negative:[{pronoun:"ته",pashto:"مه اخله",farsi:"نگیر",pronunciation:"ma akhla"},{pronoun:"تاسو",pashto:"مه اخلئ",farsi:"نگیرید",pronunciation:"ma akhley"}]}},examples:[{pashto:"زه کتاب اخلم",farsi:"من کتاب می‌گیرم"},{pashto:"ما پیسې واخیستلې",farsi:"من پول گرفتم"},{pashto:"واخله!",farsi:"بگیر!"}]},"to-carry":{id:"to-carry",infinitive:"وړل",infinitiveFarsi:"بردن",root:"وړ",pastRoot:"یووړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"وړم",farsi:"می‌برم",pronunciation:"waṛam"},{pronoun:"ته",pashto:"وړې",farsi:"می‌بری",pronunciation:"waṛe"},{pronoun:"هغه",pashto:"وړي",farsi:"می‌برد",pronunciation:"waṛi"},{pronoun:"موږ",pashto:"وړو",farsi:"می‌بریم",pronunciation:"waṛu"},{pronoun:"تاسو",pashto:"وړئ",farsi:"می‌برید",pronunciation:"waṛey"},{pronoun:"هغوی",pashto:"وړي",farsi:"می‌برند",pronunciation:"waṛi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"یووړ",farsi:"بردم",pronunciation:"yūwaṛ"},{pronoun:"تا",pashto:"یووړ",farsi:"بردی",pronunciation:"yūwaṛ"},{pronoun:"هغه",pashto:"یووړ",farsi:"برد",pronunciation:"yūwaṛ"},{pronoun:"موږ",pashto:"یووړل",farsi:"بردیم",pronunciation:"yūwaṛal"},{pronoun:"تاسو",pashto:"یووړل",farsi:"بردید",pronunciation:"yūwaṛal"},{pronoun:"هغوی",pashto:"یووړل",farsi:"بردند",pronunciation:"yūwaṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به وړم",farsi:"خواهم برد",pronunciation:"ba waṛam"},{pronoun:"ته",pashto:"به وړې",farsi:"خواهی برد",pronunciation:"ba waṛe"},{pronoun:"هغه",pashto:"به وړي",farsi:"خواهد برد",pronunciation:"ba waṛi"},{pronoun:"موږ",pashto:"به وړو",farsi:"خواهیم برد",pronunciation:"ba waṛu"},{pronoun:"تاسو",pashto:"به وړئ",farsi:"خواهید برد",pronunciation:"ba waṛey"},{pronoun:"هغوی",pashto:"به وړي",farsi:"خواهند برد",pronunciation:"ba waṛi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"یوسه",farsi:"ببر",pronunciation:"yūsa"},{pronoun:"تاسو",pashto:"یوسئ",farsi:"ببرید",pronunciation:"yūsey"}],negative:[{pronoun:"ته",pashto:"مه وړه",farsi:"نبر",pronunciation:"ma waṛa"},{pronoun:"تاسو",pashto:"مه وړئ",farsi:"نبرید",pronunciation:"ma waṛey"}]}},examples:[{pashto:"زه کتاب وړم",farsi:"من کتاب می‌برم"},{pashto:"هغه بکس یووړ",farsi:"او چمدان برد"},{pashto:"یوسه!",farsi:"ببر!"}]},"to-bring":{id:"to-bring",infinitive:"راوړل",infinitiveFarsi:"آوردن",root:"راوړ",pastRoot:"راوړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"راوړم",farsi:"می‌آورم",pronunciation:"rāwaṛam"},{pronoun:"ته",pashto:"راوړې",farsi:"می‌آوری",pronunciation:"rāwaṛe"},{pronoun:"هغه",pashto:"راوړي",farsi:"می‌آورد",pronunciation:"rāwaṛi"},{pronoun:"موږ",pashto:"راوړو",farsi:"می‌آوریم",pronunciation:"rāwaṛu"},{pronoun:"تاسو",pashto:"راوړئ",farsi:"می‌آورید",pronunciation:"rāwaṛey"},{pronoun:"هغوی",pashto:"راوړي",farsi:"می‌آورند",pronunciation:"rāwaṛi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"راوړل",farsi:"آوردم",pronunciation:"rāwaṛal"},{pronoun:"تا",pashto:"راوړل",farsi:"آوردی",pronunciation:"rāwaṛal"},{pronoun:"هغه",pashto:"راوړل",farsi:"آورد",pronunciation:"rāwaṛal"},{pronoun:"موږ",pashto:"راوړل",farsi:"آوردیم",pronunciation:"rāwaṛal"},{pronoun:"تاسو",pashto:"راوړل",farsi:"آوردید",pronunciation:"rāwaṛal"},{pronoun:"هغوی",pashto:"راوړل",farsi:"آوردند",pronunciation:"rāwaṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به راوړم",farsi:"خواهم آورد",pronunciation:"ba rāwaṛam"},{pronoun:"ته",pashto:"به راوړې",farsi:"خواهی آورد",pronunciation:"ba rāwaṛe"},{pronoun:"هغه",pashto:"به راوړي",farsi:"خواهد آورد",pronunciation:"ba rāwaṛi"},{pronoun:"موږ",pashto:"به راوړو",farsi:"خواهیم آورد",pronunciation:"ba rāwaṛu"},{pronoun:"تاسو",pashto:"به راوړئ",farsi:"خواهید آورد",pronunciation:"ba rāwaṛey"},{pronoun:"هغوی",pashto:"به راوړي",farsi:"خواهند آورد",pronunciation:"ba rāwaṛi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"راوړه",farsi:"بیاور",pronunciation:"rāwaṛa"},{pronoun:"تاسو",pashto:"راوړئ",farsi:"بیاورید",pronunciation:"rāwaṛey"}],negative:[{pronoun:"ته",pashto:"مه راوړه",farsi:"نیاور",pronunciation:"ma rāwaṛa"},{pronoun:"تاسو",pashto:"مه راوړئ",farsi:"نیاورید",pronunciation:"ma rāwaṛey"}]}},examples:[{pashto:"زه چای راوړم",farsi:"من چای می‌آورم"},{pashto:"هغه ډوډۍ راوړله",farsi:"او غذا آورد"},{pashto:"راوړه!",farsi:"بیاور!"}]},"to-understand":{id:"to-understand",infinitive:"پوهېدل",infinitiveFarsi:"فهمیدن",root:"پوه",pastRoot:"پوه شو",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"پوهېږم",farsi:"می‌فهمم",pronunciation:"poheẓ̌am"},{pronoun:"ته",pashto:"پوهېږې",farsi:"می‌فهمی",pronunciation:"poheẓ̌e"},{pronoun:"هغه",pashto:"پوهېږي",farsi:"می‌فهمد",pronunciation:"poheẓ̌i"},{pronoun:"موږ",pashto:"پوهېږو",farsi:"می‌فهمیم",pronunciation:"poheẓ̌u"},{pronoun:"تاسو",pashto:"پوهېږئ",farsi:"می‌فهمید",pronunciation:"poheẓ̌ey"},{pronoun:"هغوی",pashto:"پوهېږي",farsi:"می‌فهمند",pronunciation:"poheẓ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"پوه شوم",farsi:"فهمیدم",pronunciation:"poh shwam"},{pronoun:"ته",pashto:"پوه شوې",farsi:"فهمیدی",pronunciation:"poh shwe"},{pronoun:"هغه (م)",pashto:"پوه شو",farsi:"فهمید",pronunciation:"poh sho"},{pronoun:"هغه (ز)",pashto:"پوه شوه",farsi:"فهمید",pronunciation:"poh shwa"},{pronoun:"موږ",pashto:"پوه شوو",farsi:"فهمیدیم",pronunciation:"poh shwu"},{pronoun:"تاسو",pashto:"پوه شوئ",farsi:"فهمیدید",pronunciation:"poh shwey"},{pronoun:"هغوی",pashto:"پوه شول",farsi:"فهمیدند",pronunciation:"poh shwal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به پوهېږم",farsi:"خواهم فهمید",pronunciation:"ba poheẓ̌am"},{pronoun:"ته",pashto:"به پوهېږې",farsi:"خواهی فهمید",pronunciation:"ba poheẓ̌e"},{pronoun:"هغه",pashto:"به پوهېږي",farsi:"خواهد فهمید",pronunciation:"ba poheẓ̌i"},{pronoun:"موږ",pashto:"به پوهېږو",farsi:"خواهیم فهمید",pronunciation:"ba poheẓ̌u"},{pronoun:"تاسو",pashto:"به پوهېږئ",farsi:"خواهید فهمید",pronunciation:"ba poheẓ̌ey"},{pronoun:"هغوی",pashto:"به پوهېږي",farsi:"خواهند فهمید",pronunciation:"ba poheẓ̌i"}]}},examples:[{pashto:"زه پوهېږم",farsi:"من می‌فهمم"},{pashto:"ته پښتو پوهېږې؟",farsi:"تو پشتو می‌فهمی؟"},{pashto:"زه پوه شوم",farsi:"من فهمیدم"}]},"to-sit":{id:"to-sit",infinitive:"کېناستل",infinitiveFarsi:"نشستن",root:"کېن",pastRoot:"کېناست",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"کېنم",farsi:"می‌نشینم",pronunciation:"kenam"},{pronoun:"ته",pashto:"کېنې",farsi:"می‌نشینی",pronunciation:"kene"},{pronoun:"هغه",pashto:"کېني",farsi:"می‌نشیند",pronunciation:"keni"},{pronoun:"موږ",pashto:"کېنو",farsi:"می‌نشینیم",pronunciation:"kenu"},{pronoun:"تاسو",pashto:"کېنئ",farsi:"می‌نشینید",pronunciation:"keney"},{pronoun:"هغوی",pashto:"کېني",farsi:"می‌نشینند",pronunciation:"keni"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"کېناستم",farsi:"نشستم",pronunciation:"kenāstam"},{pronoun:"ته",pashto:"کېناستې",farsi:"نشستی",pronunciation:"kenāste"},{pronoun:"هغه (م)",pashto:"کېناست",farsi:"نشست",pronunciation:"kenāst"},{pronoun:"هغه (ز)",pashto:"کېناسته",farsi:"نشست",pronunciation:"kenāsta"},{pronoun:"موږ",pashto:"کېناستو",farsi:"نشستیم",pronunciation:"kenāstu"},{pronoun:"تاسو",pashto:"کېناستئ",farsi:"نشستید",pronunciation:"kenāstey"},{pronoun:"هغوی",pashto:"کېناستل",farsi:"نشستند",pronunciation:"kenāstal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به کېنم",farsi:"خواهم نشست",pronunciation:"ba kenam"},{pronoun:"ته",pashto:"به کېنې",farsi:"خواهی نشست",pronunciation:"ba kene"},{pronoun:"هغه",pashto:"به کېني",farsi:"خواهد نشست",pronunciation:"ba keni"},{pronoun:"موږ",pashto:"به کېنو",farsi:"خواهیم نشست",pronunciation:"ba kenu"},{pronoun:"تاسو",pashto:"به کېنئ",farsi:"خواهید نشست",pronunciation:"ba keney"},{pronoun:"هغوی",pashto:"به کېني",farsi:"خواهند نشست",pronunciation:"ba keni"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"کېنه",farsi:"بنشین",pronunciation:"kena"},{pronoun:"تاسو",pashto:"کېنئ",farsi:"بنشینید",pronunciation:"keney"}],negative:[{pronoun:"ته",pashto:"مه کېنه",farsi:"ننشین",pronunciation:"ma kena"},{pronoun:"تاسو",pashto:"مه کېنئ",farsi:"ننشینید",pronunciation:"ma keney"}]}},examples:[{pashto:"زه دلته کېنم",farsi:"من اینجا می‌نشینم"},{pashto:"کېنه!",farsi:"بنشین!"},{pashto:"هغه کېناست",farsi:"او نشست"}]},"to-stand":{id:"to-stand",infinitive:"ودرېدل",infinitiveFarsi:"ایستادن",root:"ودرېږ",pastRoot:"ودرېد",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ودرېږم",farsi:"می‌ایستم",pronunciation:"wadreẓ̌am"},{pronoun:"ته",pashto:"ودرېږې",farsi:"می‌ایستی",pronunciation:"wadreẓ̌e"},{pronoun:"هغه",pashto:"ودرېږي",farsi:"می‌ایستد",pronunciation:"wadreẓ̌i"},{pronoun:"موږ",pashto:"ودرېږو",farsi:"می‌ایستیم",pronunciation:"wadreẓ̌u"},{pronoun:"تاسو",pashto:"ودرېږئ",farsi:"می‌ایستید",pronunciation:"wadreẓ̌ey"},{pronoun:"هغوی",pashto:"ودرېږي",farsi:"می‌ایستند",pronunciation:"wadreẓ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"ودرېدم",farsi:"ایستادم",pronunciation:"wadredam"},{pronoun:"ته",pashto:"ودرېدې",farsi:"ایستادی",pronunciation:"wadrede"},{pronoun:"هغه (م)",pashto:"ودرېد",farsi:"ایستاد",pronunciation:"wadred"},{pronoun:"هغه (ز)",pashto:"ودرېده",farsi:"ایستاد",pronunciation:"wadreda"},{pronoun:"موږ",pashto:"ودرېدو",farsi:"ایستادیم",pronunciation:"wadredu"},{pronoun:"تاسو",pashto:"ودرېدئ",farsi:"ایستادید",pronunciation:"wadredey"},{pronoun:"هغوی",pashto:"ودرېدل",farsi:"ایستادند",pronunciation:"wadredal"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ودرېږه",farsi:"بایست",pronunciation:"wadreẓ̌a"},{pronoun:"تاسو",pashto:"ودرېږئ",farsi:"بایستید",pronunciation:"wadreẓ̌ey"}],negative:[{pronoun:"ته",pashto:"مه ودرېږه",farsi:"نایست",pronunciation:"ma wadreẓ̌a"},{pronoun:"تاسو",pashto:"مه ودرېږئ",farsi:"نایستید",pronunciation:"ma wadreẓ̌ey"}]}},examples:[{pashto:"زه دلته ودرېږم",farsi:"من اینجا می‌ایستم"},{pashto:"ودرېږه!",farsi:"بایست!"},{pashto:"هغه ودرېد",farsi:"او ایستاد"}]},"to-sleep":{id:"to-sleep",infinitive:"ویدېدل",infinitiveFarsi:"خوابیدن",root:"ویده",pastRoot:"ویده شو",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ویده کېږم",farsi:"می‌خوابم",pronunciation:"wida keẓ̌am"},{pronoun:"ته",pashto:"ویده کېږې",farsi:"می‌خوابی",pronunciation:"wida keẓ̌e"},{pronoun:"هغه",pashto:"ویده کېږي",farsi:"می‌خوابد",pronunciation:"wida keẓ̌i"},{pronoun:"موږ",pashto:"ویده کېږو",farsi:"می‌خوابیم",pronunciation:"wida keẓ̌u"},{pronoun:"تاسو",pashto:"ویده کېږئ",farsi:"می‌خوابید",pronunciation:"wida keẓ̌ey"},{pronoun:"هغوی",pashto:"ویده کېږي",farsi:"می‌خوابند",pronunciation:"wida keẓ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"ویده شوم",farsi:"خوابیدم",pronunciation:"wida shwam"},{pronoun:"ته",pashto:"ویده شوې",farsi:"خوابیدی",pronunciation:"wida shwe"},{pronoun:"هغه (م)",pashto:"ویده شو",farsi:"خوابید",pronunciation:"wida sho"},{pronoun:"هغه (ز)",pashto:"ویده شوه",farsi:"خوابید",pronunciation:"wida shwa"},{pronoun:"موږ",pashto:"ویده شوو",farsi:"خوابیدیم",pronunciation:"wida shwu"},{pronoun:"تاسو",pashto:"ویده شوئ",farsi:"خوابیدید",pronunciation:"wida shwey"},{pronoun:"هغوی",pashto:"ویده شول",farsi:"خوابیدند",pronunciation:"wida shwal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ویده شم",farsi:"خواهم خوابید",pronunciation:"ba wida sham"},{pronoun:"ته",pashto:"به ویده شې",farsi:"خواهی خوابید",pronunciation:"ba wida she"},{pronoun:"هغه",pashto:"به ویده شي",farsi:"خواهد خوابید",pronunciation:"ba wida shi"},{pronoun:"موږ",pashto:"به ویده شو",farsi:"خواهیم خوابید",pronunciation:"ba wida shu"},{pronoun:"تاسو",pashto:"به ویده شئ",farsi:"خواهید خوابید",pronunciation:"ba wida shey"},{pronoun:"هغوی",pashto:"به ویده شي",farsi:"خواهند خوابید",pronunciation:"ba wida shi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ویده شه",farsi:"بخواب",pronunciation:"wida sha"},{pronoun:"تاسو",pashto:"ویده شئ",farsi:"بخوابید",pronunciation:"wida shey"}],negative:[{pronoun:"ته",pashto:"مه ویده کېږه",farsi:"نخواب",pronunciation:"ma wida keẓ̌a"},{pronoun:"تاسو",pashto:"مه ویده کېږئ",farsi:"نخوابید",pronunciation:"ma wida keẓ̌ey"}]}},examples:[{pashto:"زه ویده کېږم",farsi:"من می‌خوابم"},{pashto:"هغه ویده شو",farsi:"او خوابید"},{pashto:"ویده شه!",farsi:"بخواب!"}]},"to-become":{id:"to-become",infinitive:"کېدل",infinitiveFarsi:"شدن",root:"کېږ",pastRoot:"شو",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"کېږم",farsi:"می‌شوم",pronunciation:"keẓ̌am"},{pronoun:"ته",pashto:"کېږې",farsi:"می‌شوی",pronunciation:"keẓ̌e"},{pronoun:"هغه",pashto:"کېږي",farsi:"می‌شود",pronunciation:"keẓ̌i"},{pronoun:"موږ",pashto:"کېږو",farsi:"می‌شویم",pronunciation:"keẓ̌u"},{pronoun:"تاسو",pashto:"کېږئ",farsi:"می‌شوید",pronunciation:"keẓ̌ey"},{pronoun:"هغوی",pashto:"کېږي",farsi:"می‌شوند",pronunciation:"keẓ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"شوم",farsi:"شدم",pronunciation:"shwam"},{pronoun:"ته",pashto:"شوې",farsi:"شدی",pronunciation:"shwe"},{pronoun:"هغه (م)",pashto:"شو",farsi:"شد",pronunciation:"sho"},{pronoun:"هغه (ز)",pashto:"شوه",farsi:"شد",pronunciation:"shwa"},{pronoun:"موږ",pashto:"شوو",farsi:"شدیم",pronunciation:"shwu"},{pronoun:"تاسو",pashto:"شوئ",farsi:"شدید",pronunciation:"shwey"},{pronoun:"هغوی",pashto:"شول",farsi:"شدند",pronunciation:"shwal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به شم",farsi:"خواهم شد",pronunciation:"ba sham"},{pronoun:"ته",pashto:"به شې",farsi:"خواهی شد",pronunciation:"ba she"},{pronoun:"هغه",pashto:"به شي",farsi:"خواهد شد",pronunciation:"ba shi"},{pronoun:"موږ",pashto:"به شو",farsi:"خواهیم شد",pronunciation:"ba shu"},{pronoun:"تاسو",pashto:"به شئ",farsi:"خواهید شد",pronunciation:"ba shey"},{pronoun:"هغوی",pashto:"به شي",farsi:"خواهند شد",pronunciation:"ba shi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"شه",farsi:"بشو",pronunciation:"sha"},{pronoun:"تاسو",pashto:"شئ",farsi:"بشوید",pronunciation:"shey"}],negative:[{pronoun:"ته",pashto:"مه کېږه",farsi:"نشو",pronunciation:"ma keẓ̌a"},{pronoun:"تاسو",pashto:"مه کېږئ",farsi:"نشوید",pronunciation:"ma keẓ̌ey"}]}},examples:[{pashto:"زه ستړی کېږم",farsi:"من خسته می‌شوم"},{pashto:"هغه داکتر شو",farsi:"او داکتر شد"},{pashto:"ښه شه!",farsi:"خوب شو!"}]},"to-love":{id:"to-love",infinitive:"خوښول",infinitiveFarsi:"دوست داشتن",root:"خوښ",pastRoot:"خوښ کړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",note:'در پشتو معمولاً با ساختار "ما خوښېږي" استفاده می‌شود',conjugations:[{pronoun:"ما",pashto:"خوښېږي",farsi:"دوست دارم",pronunciation:"khwax̌eẓ̌i"},{pronoun:"تا",pashto:"خوښېږي",farsi:"دوست داری",pronunciation:"khwax̌eẓ̌i"},{pronoun:"هغه",pashto:"خوښېږي",farsi:"دوست دارد",pronunciation:"khwax̌eẓ̌i"},{pronoun:"موږ",pashto:"خوښېږي",farsi:"دوست داریم",pronunciation:"khwax̌eẓ̌i"},{pronoun:"تاسو",pashto:"خوښېږي",farsi:"دوست دارید",pronunciation:"khwax̌eẓ̌i"},{pronoun:"هغوی",pashto:"خوښېږي",farsi:"دوست دارند",pronunciation:"khwax̌eẓ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"خوښېده",farsi:"دوست داشتم",pronunciation:"khwax̌eda"},{pronoun:"تا",pashto:"خوښېده",farsi:"دوست داشتی",pronunciation:"khwax̌eda"},{pronoun:"هغه",pashto:"خوښېده",farsi:"دوست داشت",pronunciation:"khwax̌eda"},{pronoun:"موږ",pashto:"خوښېده",farsi:"دوست داشتیم",pronunciation:"khwax̌eda"},{pronoun:"تاسو",pashto:"خوښېده",farsi:"دوست داشتید",pronunciation:"khwax̌eda"},{pronoun:"هغوی",pashto:"خوښېده",farsi:"دوست داشتند",pronunciation:"khwax̌eda"}]}},examples:[{pashto:"ما ته خوښېږې",farsi:"من تو را دوست دارم"},{pashto:"ما چای خوښېږي",farsi:"من چای دوست دارم"},{pashto:"هغه ته خوښېږم",farsi:"او مرا دوست دارد"}]},"to-work":{id:"to-work",infinitive:"کار کول",infinitiveFarsi:"کار کردن",root:"کار کو",pastRoot:"کار وکړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"کار کوم",farsi:"کار می‌کنم",pronunciation:"kār kawam"},{pronoun:"ته",pashto:"کار کوې",farsi:"کار می‌کنی",pronunciation:"kār kawe"},{pronoun:"هغه",pashto:"کار کوي",farsi:"کار می‌کند",pronunciation:"kār kawi"},{pronoun:"موږ",pashto:"کار کوو",farsi:"کار می‌کنیم",pronunciation:"kār kawu"},{pronoun:"تاسو",pashto:"کار کوئ",farsi:"کار می‌کنید",pronunciation:"kār kawey"},{pronoun:"هغوی",pashto:"کار کوي",farsi:"کار می‌کنند",pronunciation:"kār kawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"کار وکړ",farsi:"کار کردم",pronunciation:"kār wakṛ"},{pronoun:"تا",pashto:"کار وکړ",farsi:"کار کردی",pronunciation:"kār wakṛ"},{pronoun:"هغه",pashto:"کار وکړ",farsi:"کار کرد",pronunciation:"kār wakṛ"},{pronoun:"موږ",pashto:"کار وکړل",farsi:"کار کردیم",pronunciation:"kār wakṛal"},{pronoun:"تاسو",pashto:"کار وکړل",farsi:"کار کردید",pronunciation:"kār wakṛal"},{pronoun:"هغوی",pashto:"کار وکړل",farsi:"کار کردند",pronunciation:"kār wakṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به کار کوم",farsi:"کار خواهم کرد",pronunciation:"ba kār kawam"},{pronoun:"ته",pashto:"به کار کوې",farsi:"کار خواهی کرد",pronunciation:"ba kār kawe"},{pronoun:"هغه",pashto:"به کار کوي",farsi:"کار خواهد کرد",pronunciation:"ba kār kawi"},{pronoun:"موږ",pashto:"به کار کوو",farsi:"کار خواهیم کرد",pronunciation:"ba kār kawu"},{pronoun:"تاسو",pashto:"به کار کوئ",farsi:"کار خواهید کرد",pronunciation:"ba kār kawey"},{pronoun:"هغوی",pashto:"به کار کوي",farsi:"کار خواهند کرد",pronunciation:"ba kār kawi"}]}},examples:[{pashto:"زه په دفتر کې کار کوم",farsi:"من در دفتر کار می‌کنم"},{pashto:"هغه ډېر کار کوي",farsi:"او زیاد کار می‌کند"},{pashto:"ما پرون کار وکړ",farsi:"من دیروز کار کردم"}]},"to-speak":{id:"to-speak",infinitive:"خبرې کول",infinitiveFarsi:"صحبت کردن",root:"خبرې کو",pastRoot:"خبرې وکړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"خبرې کوم",farsi:"صحبت می‌کنم",pronunciation:"khabre kawam"},{pronoun:"ته",pashto:"خبرې کوې",farsi:"صحبت می‌کنی",pronunciation:"khabre kawe"},{pronoun:"هغه",pashto:"خبرې کوي",farsi:"صحبت می‌کند",pronunciation:"khabre kawi"},{pronoun:"موږ",pashto:"خبرې کوو",farsi:"صحبت می‌کنیم",pronunciation:"khabre kawu"},{pronoun:"تاسو",pashto:"خبرې کوئ",farsi:"صحبت می‌کنید",pronunciation:"khabre kawey"},{pronoun:"هغوی",pashto:"خبرې کوي",farsi:"صحبت می‌کنند",pronunciation:"khabre kawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"خبرې وکړې",farsi:"صحبت کردم",pronunciation:"khabre wakṛe"},{pronoun:"تا",pashto:"خبرې وکړې",farsi:"صحبت کردی",pronunciation:"khabre wakṛe"},{pronoun:"هغه",pashto:"خبرې وکړې",farsi:"صحبت کرد",pronunciation:"khabre wakṛe"},{pronoun:"موږ",pashto:"خبرې وکړې",farsi:"صحبت کردیم",pronunciation:"khabre wakṛe"},{pronoun:"تاسو",pashto:"خبرې وکړې",farsi:"صحبت کردید",pronunciation:"khabre wakṛe"},{pronoun:"هغوی",pashto:"خبرې وکړې",farsi:"صحبت کردند",pronunciation:"khabre wakṛe"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به خبرې کوم",farsi:"صحبت خواهم کرد",pronunciation:"ba khabre kawam"},{pronoun:"ته",pashto:"به خبرې کوې",farsi:"صحبت خواهی کرد",pronunciation:"ba khabre kawe"},{pronoun:"هغه",pashto:"به خبرې کوي",farsi:"صحبت خواهد کرد",pronunciation:"ba khabre kawi"},{pronoun:"موږ",pashto:"به خبرې کوو",farsi:"صحبت خواهیم کرد",pronunciation:"ba khabre kawu"},{pronoun:"تاسو",pashto:"به خبرې کوئ",farsi:"صحبت خواهید کرد",pronunciation:"ba khabre kawey"},{pronoun:"هغوی",pashto:"به خبرې کوي",farsi:"صحبت خواهند کرد",pronunciation:"ba khabre kawi"}]}},examples:[{pashto:"زه پښتو خبرې کوم",farsi:"من پشتو صحبت می‌کنم"},{pashto:"ته پښتو خبرې کوې؟",farsi:"تو پشتو صحبت می‌کنی؟"},{pashto:"موږ خبرې وکړې",farsi:"ما صحبت کردیم"}]},"to-live":{id:"to-live",infinitive:"ژوند کول",infinitiveFarsi:"زندگی کردن",root:"ژوند کو",pastRoot:"ژوند وکړ",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ژوند کوم",farsi:"زندگی می‌کنم",pronunciation:"zhwand kawam"},{pronoun:"ته",pashto:"ژوند کوې",farsi:"زندگی می‌کنی",pronunciation:"zhwand kawe"},{pronoun:"هغه",pashto:"ژوند کوي",farsi:"زندگی می‌کند",pronunciation:"zhwand kawi"},{pronoun:"موږ",pashto:"ژوند کوو",farsi:"زندگی می‌کنیم",pronunciation:"zhwand kawu"},{pronoun:"تاسو",pashto:"ژوند کوئ",farsi:"زندگی می‌کنید",pronunciation:"zhwand kawey"},{pronoun:"هغوی",pashto:"ژوند کوي",farsi:"زندگی می‌کنند",pronunciation:"zhwand kawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"ژوند وکړ",farsi:"زندگی کردم",pronunciation:"zhwand wakṛ"},{pronoun:"ته",pashto:"ژوند وکړ",farsi:"زندگی کردی",pronunciation:"zhwand wakṛ"},{pronoun:"هغه",pashto:"ژوند وکړ",farsi:"زندگی کرد",pronunciation:"zhwand wakṛ"},{pronoun:"موږ",pashto:"ژوند وکړل",farsi:"زندگی کردیم",pronunciation:"zhwand wakṛal"},{pronoun:"تاسو",pashto:"ژوند وکړل",farsi:"زندگی کردید",pronunciation:"zhwand wakṛal"},{pronoun:"هغوی",pashto:"ژوند وکړل",farsi:"زندگی کردند",pronunciation:"zhwand wakṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ژوند کوم",farsi:"زندگی خواهم کرد",pronunciation:"ba zhwand kawam"},{pronoun:"ته",pashto:"به ژوند کوې",farsi:"زندگی خواهی کرد",pronunciation:"ba zhwand kawe"},{pronoun:"هغه",pashto:"به ژوند کوي",farsi:"زندگی خواهد کرد",pronunciation:"ba zhwand kawi"},{pronoun:"موږ",pashto:"به ژوند کوو",farsi:"زندگی خواهیم کرد",pronunciation:"ba zhwand kawu"},{pronoun:"تاسو",pashto:"به ژوند کوئ",farsi:"زندگی خواهید کرد",pronunciation:"ba zhwand kawey"},{pronoun:"هغوی",pashto:"به ژوند کوي",farsi:"زندگی خواهند کرد",pronunciation:"ba zhwand kawi"}]}},examples:[{pashto:"زه په کابل کې ژوند کوم",farsi:"من در کابل زندگی می‌کنم"},{pashto:"هغه په کندهار کې ژوند کوي",farsi:"او در قندهار زندگی می‌کند"},{pashto:"موږ دلته ژوند کوو",farsi:"ما اینجا زندگی می‌کنیم"}]},"to-learn":{id:"to-learn",infinitive:"زده کول",infinitiveFarsi:"یاد گرفتن",root:"زده کو",pastRoot:"زده کړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"زده کوم",farsi:"یاد می‌گیرم",pronunciation:"zda kawam"},{pronoun:"ته",pashto:"زده کوې",farsi:"یاد می‌گیری",pronunciation:"zda kawe"},{pronoun:"هغه",pashto:"زده کوي",farsi:"یاد می‌گیرد",pronunciation:"zda kawi"},{pronoun:"موږ",pashto:"زده کوو",farsi:"یاد می‌گیریم",pronunciation:"zda kawu"},{pronoun:"تاسو",pashto:"زده کوئ",farsi:"یاد می‌گیرید",pronunciation:"zda kawey"},{pronoun:"هغوی",pashto:"زده کوي",farsi:"یاد می‌گیرند",pronunciation:"zda kawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"زده کړل",farsi:"یاد گرفتم",pronunciation:"zda kṛal"},{pronoun:"تا",pashto:"زده کړل",farsi:"یاد گرفتی",pronunciation:"zda kṛal"},{pronoun:"هغه",pashto:"زده کړل",farsi:"یاد گرفت",pronunciation:"zda kṛal"},{pronoun:"موږ",pashto:"زده کړل",farsi:"یاد گرفتیم",pronunciation:"zda kṛal"},{pronoun:"تاسو",pashto:"زده کړل",farsi:"یاد گرفتید",pronunciation:"zda kṛal"},{pronoun:"هغوی",pashto:"زده کړل",farsi:"یاد گرفتند",pronunciation:"zda kṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به زده کوم",farsi:"یاد خواهم گرفت",pronunciation:"ba zda kawam"},{pronoun:"ته",pashto:"به زده کوې",farsi:"یاد خواهی گرفت",pronunciation:"ba zda kawe"},{pronoun:"هغه",pashto:"به زده کوي",farsi:"یاد خواهد گرفت",pronunciation:"ba zda kawi"},{pronoun:"موږ",pashto:"به زده کوو",farsi:"یاد خواهیم گرفت",pronunciation:"ba zda kawu"},{pronoun:"تاسو",pashto:"به زده کوئ",farsi:"یاد خواهید گرفت",pronunciation:"ba zda kawey"},{pronoun:"هغوی",pashto:"به زده کوي",farsi:"یاد خواهند گرفت",pronunciation:"ba zda kawi"}]}},examples:[{pashto:"زه پښتو زده کوم",farsi:"من پشتو یاد می‌گیرم"},{pashto:"ما پښتو زده کړل",farsi:"من پشتو یاد گرفتم"},{pashto:"ته څه زده کوې؟",farsi:"تو چه یاد می‌گیری؟"}]},"to-hit":{id:"to-hit",infinitive:"وهل",infinitiveFarsi:"زدن",root:"وه",pastRoot:"وو",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"وهم",farsi:"می‌زنم",pronunciation:"waham"},{pronoun:"ته",pashto:"وهې",farsi:"می‌زنی",pronunciation:"wahe"},{pronoun:"هغه",pashto:"وهي",farsi:"می‌زند",pronunciation:"wahi"},{pronoun:"موږ",pashto:"وهو",farsi:"می‌زنیم",pronunciation:"wahu"},{pronoun:"تاسو",pashto:"وهئ",farsi:"می‌زنید",pronunciation:"wahey"},{pronoun:"هغوی",pashto:"وهي",farsi:"می‌زنند",pronunciation:"wahi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ووهم",farsi:"زدم",pronunciation:"wawaham"},{pronoun:"تا",pashto:"ووهې",farsi:"زدی",pronunciation:"wawahe"},{pronoun:"هغه",pashto:"ووه",farsi:"زد",pronunciation:"wawa"},{pronoun:"موږ",pashto:"ووهل",farsi:"زدیم",pronunciation:"wawal"},{pronoun:"تاسو",pashto:"ووهل",farsi:"زدید",pronunciation:"wawal"},{pronoun:"هغوی",pashto:"ووهل",farsi:"زدند",pronunciation:"wawal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به وهم",farsi:"خواهم زد",pronunciation:"ba waham"},{pronoun:"ته",pashto:"به وهې",farsi:"خواهی زد",pronunciation:"ba wahe"},{pronoun:"هغه",pashto:"به وهي",farsi:"خواهد زد",pronunciation:"ba wahi"},{pronoun:"موږ",pashto:"به وهو",farsi:"خواهیم زد",pronunciation:"ba wahu"},{pronoun:"تاسو",pashto:"به وهئ",farsi:"خواهید زد",pronunciation:"ba wahey"},{pronoun:"هغوی",pashto:"به وهي",farsi:"خواهند زد",pronunciation:"ba wahi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وه",farsi:"بزن",pronunciation:"wa"},{pronoun:"تاسو",pashto:"وهئ",farsi:"بزنید",pronunciation:"wahey"}],negative:[{pronoun:"ته",pashto:"مه وه",farsi:"نزن",pronunciation:"ma wa"},{pronoun:"تاسو",pashto:"مه وهئ",farsi:"نزنید",pronunciation:"ma wahey"}]}}},"to-wash":{id:"to-wash",infinitive:"مینځل",infinitiveFarsi:"شستن",root:"مینځ",pastRoot:"ومینځ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"مینځم",farsi:"می‌شوم",pronunciation:"mindzam"},{pronoun:"ته",pashto:"مینځې",farsi:"می‌شوی",pronunciation:"mindze"},{pronoun:"هغه",pashto:"مینځي",farsi:"می‌شود",pronunciation:"mindzi"},{pronoun:"موږ",pashto:"مینځو",farsi:"می‌شویم",pronunciation:"mindzu"},{pronoun:"تاسو",pashto:"مینځئ",farsi:"می‌شوید",pronunciation:"mindzey"},{pronoun:"هغوی",pashto:"مینځي",farsi:"می‌شوند",pronunciation:"mindzi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ومینځم",farsi:"شستم",pronunciation:"wamindzam"},{pronoun:"تا",pashto:"ومینځې",farsi:"شستی",pronunciation:"wamindze"},{pronoun:"هغه",pashto:"ومینځ",farsi:"شست",pronunciation:"wamindz"},{pronoun:"موږ",pashto:"ومینځل",farsi:"شستیم",pronunciation:"wamindzal"},{pronoun:"تاسو",pashto:"ومینځل",farsi:"شستید",pronunciation:"wamindzal"},{pronoun:"هغوی",pashto:"ومینځل",farsi:"شستند",pronunciation:"wamindzal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به مینځم",farsi:"خواهم شست",pronunciation:"ba mindzam"},{pronoun:"ته",pashto:"به مینځې",farsi:"خواهی شست",pronunciation:"ba mindze"},{pronoun:"هغه",pashto:"به مینځي",farsi:"خواهد شست",pronunciation:"ba mindzi"},{pronoun:"موږ",pashto:"به مینځو",farsi:"خواهیم شست",pronunciation:"ba mindzu"},{pronoun:"تاسو",pashto:"به مینځئ",farsi:"خواهید شست",pronunciation:"ba mindzey"},{pronoun:"هغوی",pashto:"به مینځي",farsi:"خواهند شست",pronunciation:"ba mindzi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ومینځه",farsi:"بشو",pronunciation:"wamindza"},{pronoun:"تاسو",pashto:"ومینځئ",farsi:"بشوید",pronunciation:"wamindzey"}],negative:[{pronoun:"ته",pashto:"مه مینځه",farsi:"نشو",pronunciation:"ma mindza"},{pronoun:"تاسو",pashto:"مه مینځئ",farsi:"نشوید",pronunciation:"ma mindzey"}]}}},"to-give":{id:"to-give",infinitive:"ورکول",infinitiveFarsi:"دادن",root:"ورکو",pastRoot:"ورکړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ورکوم",farsi:"می‌دهم",pronunciation:"warkawam"},{pronoun:"ته",pashto:"ورکوې",farsi:"می‌دهی",pronunciation:"warkawe"},{pronoun:"هغه",pashto:"ورکوي",farsi:"می‌دهد",pronunciation:"warkawi"},{pronoun:"موږ",pashto:"ورکوو",farsi:"می‌دهیم",pronunciation:"warkawu"},{pronoun:"تاسو",pashto:"ورکوئ",farsi:"می‌دهید",pronunciation:"warkawy"},{pronoun:"هغوی",pashto:"ورکوي",farsi:"می‌دهند",pronunciation:"warkawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ورکړ",farsi:"دادم",pronunciation:"warkṛ"},{pronoun:"تا",pashto:"ورکړې",farsi:"دادی",pronunciation:"warkṛe"},{pronoun:"هغه",pashto:"ورکړ",farsi:"داد",pronunciation:"warkṛ"},{pronoun:"موږ",pashto:"ورکړل",farsi:"دادیم",pronunciation:"warkṛal"},{pronoun:"تاسو",pashto:"ورکړل",farsi:"دادید",pronunciation:"warkṛal"},{pronoun:"هغوی",pashto:"ورکړل",farsi:"دادند",pronunciation:"warkṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ورکوم",farsi:"خواهم داد",pronunciation:"ba warkawam"},{pronoun:"ته",pashto:"به ورکوې",farsi:"خواهی داد",pronunciation:"ba warkawe"},{pronoun:"هغه",pashto:"به ورکوي",farsi:"خواهد داد",pronunciation:"ba warkawi"},{pronoun:"موږ",pashto:"به ورکوو",farsi:"خواهیم داد",pronunciation:"ba warkawu"},{pronoun:"تاسو",pashto:"به ورکوئ",farsi:"خواهید داد",pronunciation:"ba warkawy"},{pronoun:"هغوی",pashto:"به ورکوي",farsi:"خواهند داد",pronunciation:"ba warkawi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ورکره",farsi:"بده",pronunciation:"warkara"},{pronoun:"تاسو",pashto:"ورکرئ",farsi:"بدهید",pronunciation:"warkarey"}],negative:[{pronoun:"ته",pashto:"مه ورکره",farsi:"نده",pronunciation:"ma warkara"},{pronoun:"تاسو",pashto:"مه ورکرئ",farsi:"ندهید",pronunciation:"ma warkarey"}]}}},"to-take":{id:"to-take",infinitive:"نیول",infinitiveFarsi:"گرفتن",root:"نیس",pastRoot:"ونیول",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"نیسم",farsi:"می‌گیرم",pronunciation:"nisam"},{pronoun:"ته",pashto:"نیسې",farsi:"می‌گیری",pronunciation:"nise"},{pronoun:"هغه",pashto:"نیسي",farsi:"می‌گیرد",pronunciation:"nisi"},{pronoun:"موږ",pashto:"نیسو",farsi:"می‌گیریم",pronunciation:"nisu"},{pronoun:"تاسو",pashto:"نیسئ",farsi:"می‌گیرید",pronunciation:"nisey"},{pronoun:"هغوی",pashto:"نیسي",farsi:"می‌گیرند",pronunciation:"nisi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ونیول",farsi:"گرفتم",pronunciation:"waniyawəl"},{pronoun:"تا",pashto:"ونیول",farsi:"گرفتی",pronunciation:"waniyawəl"},{pronoun:"هغه",pashto:"ونیول",farsi:"گرفت",pronunciation:"waniyawəl"},{pronoun:"موږ",pashto:"ونیول",farsi:"گرفتیم",pronunciation:"waniyawəl"},{pronoun:"تاسو",pashto:"ونیول",farsi:"گرفتید",pronunciation:"waniyawəl"},{pronoun:"هغوی",pashto:"ونیول",farsi:"گرفتند",pronunciation:"waniyawəl"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به نیسم",farsi:"خواهم گرفت",pronunciation:"ba nisam"},{pronoun:"ته",pashto:"به نیسې",farsi:"خواهی گرفت",pronunciation:"ba nise"},{pronoun:"هغه",pashto:"به نیسي",farsi:"خواهد گرفت",pronunciation:"ba nisi"},{pronoun:"موږ",pashto:"به نیسو",farsi:"خواهیم گرفت",pronunciation:"ba nisu"},{pronoun:"تاسو",pashto:"به نیسئ",farsi:"خواهید گرفت",pronunciation:"ba nisey"},{pronoun:"هغوی",pashto:"به نیسي",farsi:"خواهند گرفت",pronunciation:"ba nisi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ونیسه",farsi:"بگیر",pronunciation:"wanisa"},{pronoun:"تاسو",pashto:"ونیسئ",farsi:"بگیرید",pronunciation:"wanisey"}],negative:[{pronoun:"ته",pashto:"مه نیسه",farsi:"نگیر",pronunciation:"ma nisa"},{pronoun:"تاسو",pashto:"مه نیسئ",farsi:"نگیرید",pronunciation:"ma nisey"}]}}},"to-stand":{id:"to-stand",infinitive:"ایستل",infinitiveFarsi:"ایستادن",root:"ایسته‌ږ",pastRoot:"ایسته",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ایسته‌ږم",farsi:"می‌ایستم",pronunciation:"āysteẓ̌am"},{pronoun:"ته",pashto:"ایسته‌ږې",farsi:"می‌ایستی",pronunciation:"āysteẓ̌e"},{pronoun:"هغه",pashto:"ایسته‌ږي",farsi:"می‌ایستد",pronunciation:"āysteẓ̌i"},{pronoun:"موږ",pashto:"ایسته‌ږو",farsi:"می‌ایستیم",pronunciation:"āysteẓ̌u"},{pronoun:"تاسو",pashto:"ایسته‌ږئ",farsi:"می‌ایستید",pronunciation:"āysteẓ̌ey"},{pronoun:"هغوی",pashto:"ایسته‌ږي",farsi:"می‌ایستند",pronunciation:"āysteẓ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ایسته",farsi:"ایستادم",pronunciation:"āysta"},{pronoun:"تا",pashto:"ایسته",farsi:"ایستادی",pronunciation:"āysta"},{pronoun:"هغه",pashto:"ایسته",farsi:"ایستاد",pronunciation:"āysta"},{pronoun:"موږ",pashto:"ایستل",farsi:"ایستادیم",pronunciation:"āystal"},{pronoun:"تاسو",pashto:"ایستل",farsi:"ایستادید",pronunciation:"āystal"},{pronoun:"هغوی",pashto:"ایستل",farsi:"ایستادند",pronunciation:"āystal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ایسته‌ږم",farsi:"خواهم ایستاد",pronunciation:"ba āysteẓ̌am"},{pronoun:"ته",pashto:"به ایسته‌ږې",farsi:"خواهی ایستاد",pronunciation:"ba āysteẓ̌e"},{pronoun:"هغه",pashto:"به ایسته‌ږي",farsi:"خواهد ایستاد",pronunciation:"ba āysteẓ̌i"},{pronoun:"موږ",pashto:"به ایسته‌ږو",farsi:"خواهیم ایستاد",pronunciation:"ba āysteẓ̌u"},{pronoun:"تاسو",pashto:"به ایسته‌ږئ",farsi:"خواهید ایستاد",pronunciation:"ba āysteẓ̌ey"},{pronoun:"هغوی",pashto:"به ایسته‌ږي",farsi:"خواهند ایستاد",pronunciation:"ba āysteẓ̌i"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ایسته‌ږه",farsi:"بایست",pronunciation:"āysteẓ̌a"},{pronoun:"تاسو",pashto:"ایسته‌ږئ",farsi:"بایستید",pronunciation:"āysteẓ̌ey"}],negative:[{pronoun:"ته",pashto:"مه ایسته‌ږه",farsi:"نایست",pronunciation:"ma āysteẓ̌a"},{pronoun:"تاسو",pashto:"مه ایسته‌ږئ",farsi:"نایستید",pronunciation:"ma āysteẓ̌ey"}]}}},"to-run":{id:"to-run",infinitive:"منډې وهل",infinitiveFarsi:"دویدن",root:"منډې وه",pastRoot:"منډې وو",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"منډې وهم",farsi:"می‌دوم",pronunciation:"munḍe waham"},{pronoun:"ته",pashto:"منډې وهې",farsi:"می‌دوی",pronunciation:"munḍe wahe"},{pronoun:"هغه",pashto:"منډې وهي",farsi:"می‌دود",pronunciation:"munḍe wahi"},{pronoun:"موږ",pashto:"منډې وهو",farsi:"می‌دویم",pronunciation:"munḍe wahu"},{pronoun:"تاسو",pashto:"منډې وهئ",farsi:"می‌دوید",pronunciation:"munḍe wahey"},{pronoun:"هغوی",pashto:"منډې وهي",farsi:"می‌دوند",pronunciation:"munḍe wahi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"منډې ووهم",farsi:"دویدم",pronunciation:"munḍe wawaham"},{pronoun:"تا",pashto:"منډې ووهې",farsi:"دویدی",pronunciation:"munḍe wawahe"},{pronoun:"هغه",pashto:"منډې ووه",farsi:"دوید",pronunciation:"munḍe wawa"},{pronoun:"موږ",pashto:"منډې ووهل",farsi:"دویدیم",pronunciation:"munḍe wawal"},{pronoun:"تاسو",pashto:"منډې ووهل",farsi:"دویدید",pronunciation:"munḍe wawal"},{pronoun:"هغوی",pashto:"منډې ووهل",farsi:"دویدند",pronunciation:"munḍe wawal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به منډې وهم",farsi:"خواهم دوید",pronunciation:"ba munḍe waham"},{pronoun:"ته",pashto:"به منډې وهې",farsi:"خواهی دوید",pronunciation:"ba munḍe wahe"},{pronoun:"هغه",pashto:"به منډې وهي",farsi:"خواهد دوید",pronunciation:"ba munḍe wahi"},{pronoun:"موږ",pashto:"به منډې وهو",farsi:"خواهیم دوید",pronunciation:"ba munḍe wahu"},{pronoun:"تاسو",pashto:"به منډې وهئ",farsi:"خواهید دوید",pronunciation:"ba munḍe wahey"},{pronoun:"هغوی",pashto:"به منډې وهي",farsi:"خواهند دوید",pronunciation:"ba munḍe wahi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"منډې وه",farsi:"بدو",pronunciation:"munḍe wa"},{pronoun:"تاسو",pashto:"منډې وهئ",farsi:"بدوید",pronunciation:"munḍe wahey"}],negative:[{pronoun:"ته",pashto:"مه منډې وه",farsi:"ندو",pronunciation:"ma munḍe wa"},{pronoun:"تاسو",pashto:"مه منډې وهئ",farsi:"ندوید",pronunciation:"ma munḍe wahey"}]}}},"to-close":{id:"to-close",infinitive:"ترل",infinitiveFarsi:"بستن",root:"تر",pastRoot:"وتر",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ترم",farsi:"می‌بندم",pronunciation:"taram"},{pronoun:"ته",pashto:"تره",farsi:"می‌بندی",pronunciation:"tara"},{pronoun:"هغه",pashto:"تري",farsi:"می‌بندد",pronunciation:"tari"},{pronoun:"موږ",pashto:"ترو",farsi:"می‌بندیم",pronunciation:"taru"},{pronoun:"تاسو",pashto:"تره",farsi:"می‌بندید",pronunciation:"tara"},{pronoun:"هغوی",pashto:"تري",farsi:"می‌بندند",pronunciation:"tari"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"وترم",farsi:"بستم",pronunciation:"wtaram"},{pronoun:"تا",pashto:"وتره",farsi:"بستی",pronunciation:"wtara"},{pronoun:"هغه",pashto:"وتر",farsi:"بست",pronunciation:"wtar"},{pronoun:"موږ",pashto:"وترل",farsi:"بستیم",pronunciation:"wtaral"},{pronoun:"تاسو",pashto:"وترل",farsi:"بستید",pronunciation:"wtaral"},{pronoun:"هغوی",pashto:"وترل",farsi:"بستند",pronunciation:"wtaral"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ترم",farsi:"خواهم بست",pronunciation:"ba taram"},{pronoun:"ته",pashto:"به تره",farsi:"خواهی بست",pronunciation:"ba tara"},{pronoun:"هغه",pashto:"به تري",farsi:"خواهد بست",pronunciation:"ba tari"},{pronoun:"موږ",pashto:"به تरو",farsi:"خواهیم بست",pronunciation:"ba taru"},{pronoun:"تاسو",pashto:"به تره",farsi:"خواهید بست",pronunciation:"ba tara"},{pronoun:"هغوی",pashto:"به تري",farsi:"خواهند بست",pronunciation:"ba tari"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وتره",farsi:"ببند",pronunciation:"wtara"},{pronoun:"تاسو",pashto:"وترئ",farsi:"ببندید",pronunciation:"wtarey"}],negative:[{pronoun:"ته",pashto:"مه تره",farsi:"نبند",pronunciation:"ma tara"},{pronoun:"تاسو",pashto:"مه ترئ",farsi:"نبندید",pronunciation:"ma tarey"}]}}},"to-open":{id:"to-open",infinitive:"خلاصول",infinitiveFarsi:"باز کردن",root:"خلاص",pastRoot:"وخلاص",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"خلاصوم",farsi:"می‌کنم",pronunciation:"khlaasawam"},{pronoun:"ته",pashto:"خلاصوې",farsi:"می‌کنی",pronunciation:"khlaasawe"},{pronoun:"هغه",pashto:"خلاصوي",farsi:"می‌کند",pronunciation:"khlaasawi"},{pronoun:"موږ",pashto:"خلاصوو",farsi:"می‌کنیم",pronunciation:"khlaasawu"},{pronoun:"تاسو",pashto:"خلاصوئ",farsi:"می‌کنید",pronunciation:"khlaasawy"},{pronoun:"هغوی",pashto:"خلاصوي",farsi:"می‌کنند",pronunciation:"khlaasawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"وخلاصم",farsi:"کردم",pronunciation:"wkhlaasam"},{pronoun:"تا",pashto:"وخلاصې",farsi:"کردی",pronunciation:"wkhlaase"},{pronoun:"هغه",pashto:"وخلاص",farsi:"کرد",pronunciation:"wkhlaas"},{pronoun:"موږ",pashto:"وخلاصل",farsi:"کردیم",pronunciation:"wkhlaasəl"},{pronoun:"تاسو",pashto:"وخلاصل",farsi:"کردید",pronunciation:"wkhlaasəl"},{pronoun:"هغوی",pashto:"وخلاصل",farsi:"کردند",pronunciation:"wkhlaasəl"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به خلاصوم",farsi:"خواهم کرد",pronunciation:"ba khlaasawam"},{pronoun:"ته",pashto:"به خلاصوې",farsi:"خواهی کرد",pronunciation:"ba khlaasawe"},{pronoun:"هغه",pashto:"به خلاصوي",farsi:"خواهد کرد",pronunciation:"ba khlaasawi"},{pronoun:"موږ",pashto:"به خلاصوو",farsi:"خواهیم کرد",pronunciation:"ba khlaasawu"},{pronoun:"تاسو",pashto:"به خلاصوئ",farsi:"خواهید کرد",pronunciation:"ba khlaasawy"},{pronoun:"هغوی",pashto:"به خلاصوي",farsi:"خواهند کرد",pronunciation:"ba khlaasawi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وخلاصه",farsi:"باز کن",pronunciation:"wkhlaasa"},{pronoun:"تاسو",pashto:"وخلاصئ",farsi:"باز کنید",pronunciation:"wkhlaasay"}],negative:[{pronoun:"ته",pashto:"مه خلاصه",farsi:"باز نکن",pronunciation:"ma khlaasa"},{pronoun:"تاسو",pashto:"مه خلاصئ",farsi:"باز نکنید",pronunciation:"ma khlaasay"}]}}}},av=[{id:"to-be",name:"بودن",namePashto:"اوسېدل",root:"یم/دی"},{id:"to-go",name:"رفتن",namePashto:"تلل",root:"ځ"},{id:"to-come",name:"آمدن",namePashto:"راتلل",root:"راځ"},{id:"to-eat",name:"خوردن",namePashto:"خوړل",root:"خور"},{id:"to-drink",name:"نوشیدن",namePashto:"څښل",root:"څښ"},{id:"to-do",name:"کردن",namePashto:"کول",root:"کو"},{id:"to-want",name:"خواستن",namePashto:"غوښتل",root:"غواړ"},{id:"to-see",name:"دیدن",namePashto:"لیدل",root:"وین"},{id:"to-say",name:"گفتن",namePashto:"ویل",root:"وای"},{id:"to-hear",name:"شنیدن",namePashto:"اورېدل",root:"اور"},{id:"to-write",name:"نوشتن",namePashto:"لیکل",root:"لیک"},{id:"to-read",name:"خواندن",namePashto:"لوستل",root:"لول"},{id:"to-have",name:"داشتن",namePashto:"لرل",root:"لر"},{id:"to-hit",name:"زدن",namePashto:"وهل",root:"وه"},{id:"to-wash",name:"شستن",namePashto:"مینځل",root:"مینځ"},{id:"to-give",name:"دادن",namePashto:"ورکول",root:"ورکو"},{id:"to-take",name:"گرفتن",namePashto:"نیول",root:"نیس"},{id:"to-stand",name:"ایستادن",namePashto:"ایستل",root:"ایسته‌ږ"},{id:"to-run",name:"دویدن",namePashto:"منډې وهل",root:"منډې وه"},{id:"to-close",name:"بستن",namePashto:"ترل",root:"تر"},{id:"to-open",name:"باز کردن",namePashto:"خلاصول",root:"خلاص"},{id:"to-carry",name:"بردن",namePashto:"وړل",root:"وړ"},{id:"to-bring",name:"آوردن",namePashto:"راوړل",root:"راوړ"},{id:"to-understand",name:"فهمیدن",namePashto:"پوهېدل",root:"پوه"},{id:"to-sit",name:"نشستن",namePashto:"کېناستل",root:"کېن"},{id:"to-sleep",name:"خوابیدن",namePashto:"ویدېدل",root:"ویده"},{id:"to-become",name:"شدن",namePashto:"کېدل",root:"کېږ"},{id:"to-love",name:"دوست داشتن",namePashto:"خوښول",root:"خوښ"},{id:"to-work",name:"کار کردن",namePashto:"کار کول",root:"کار کو"},{id:"to-speak",name:"صحبت کردن",namePashto:"خبرې کول",root:"خبرې کو"},{id:"to-live",name:"زندگی کردن",namePashto:"ژوند کول",root:"ژوند کو"},{id:"to-learn",name:"یاد گرفتن",namePashto:"زده کول",root:"زده کو"}];function tv(){const[l,c]=T.useState("to-go"),f=Ix[l],u=["present","past","future","imperative"],h={present:"۱",past:"۲",future:"۳",imperative:"۴"},m={present:"from-emerald-600 to-green-600",past:"from-blue-600 to-indigo-600",future:"from-purple-600 to-violet-600",imperative:"from-orange-600 to-amber-600"};return s.jsx("div",{className:"p-6 min-h-screen",dir:"rtl",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center",children:s.jsx(at,{className:"w-6 h-6 text-blue-400"})}),s.jsx("h1",{className:"text-2xl font-bold text-slate-200",children:"گردان فعل‌های پښتو"})]}),s.jsxs("div",{className:"bg-slate-800 rounded-xl p-4 mb-6 shadow-lg border border-slate-700",children:[s.jsx("label",{className:"block text-slate-400 font-medium mb-2",children:"انتخاب فعل:"}),s.jsx("select",{value:l,onChange:d=>c(d.target.value),className:"w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-slate-200 text-lg focus:border-emerald-500 focus:outline-none transition-colors",children:av.map((d,b)=>s.jsxs("option",{value:d.id,children:[b+1,". ",d.namePashto," - ",d.name," (",d.root,")"]},d.id))})]}),f&&s.jsx("div",{className:"bg-slate-800 rounded-xl p-4 mb-6 shadow-lg border border-slate-700",children:s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-center",children:[s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3",children:[s.jsx("div",{className:"text-slate-500 text-sm",children:"مصدر پښتو"}),s.jsx("div",{className:"text-xl font-bold text-slate-200",children:f.infinitive})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3",children:[s.jsx("div",{className:"text-slate-500 text-sm",children:"مصدر فارسی"}),s.jsx("div",{className:"text-xl font-bold text-slate-200",children:f.infinitiveFarsi})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3",children:[s.jsx("div",{className:"text-slate-500 text-sm",children:"ریشه"}),s.jsx("div",{className:"text-xl font-bold text-emerald-400",children:f.root})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3",children:[s.jsx("div",{className:"text-slate-500 text-sm",children:"نوع"}),s.jsx("div",{className:"text-lg font-medium text-slate-300",children:f.type==="transitive"?"متعدی":f.type==="intransitive"?"لازم":"بی‌قاعده"})]})]})}),f&&u.map((d,b)=>{const x=f.tenses[d];return x?s.jsxs("div",{className:"bg-slate-800 rounded-xl mb-6 shadow-lg border border-slate-700 overflow-hidden",children:[s.jsxs("div",{className:`p-4 flex items-center gap-3 bg-gradient-to-r ${m[d]||"from-slate-600 to-slate-700"} text-white`,children:[s.jsx("div",{className:"w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg",children:h[d]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-xl font-bold",children:x.namePashto}),s.jsxs("span",{className:"text-lg opacity-80 mr-2",children:["(",x.name,")"]})]})]}),s.jsxs("div",{className:"p-4",children:[x.note&&s.jsxs("div",{className:"bg-amber-500/20 text-amber-300 p-3 rounded-lg mb-4 text-sm border border-amber-500/30",children:["⚠️ ",x.note]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"bg-slate-700",children:[s.jsx("th",{className:"p-3 text-right text-slate-300 font-semibold",children:"ضمیر"}),s.jsx("th",{className:"p-3 text-right text-slate-300 font-semibold",children:"پښتو"}),s.jsx("th",{className:"p-3 text-right text-slate-300 font-semibold",children:"فارسی"}),s.jsx("th",{className:"p-3 text-right text-slate-300 font-semibold",children:"تلفظ"})]})}),s.jsx("tbody",{children:x.conjugations.map((g,k)=>s.jsxs("tr",{className:k%2===0?"bg-slate-800":"bg-slate-750",children:[s.jsx("td",{className:"p-3 font-medium text-slate-400",children:g.pronoun}),s.jsx("td",{className:"p-3 text-xl font-bold text-emerald-400",children:g.pashto}),s.jsx("td",{className:"p-3 text-slate-300",children:g.farsi}),s.jsx("td",{className:"p-3 text-slate-500 text-sm",dir:"ltr",children:g.pronunciation})]},k))})]})}),x.negative&&s.jsxs("div",{className:"mt-4",children:[s.jsx("h4",{className:"font-bold text-red-400 mb-2",children:"منفی (نهی):"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsx("table",{className:"w-full",children:s.jsx("tbody",{children:x.negative.map((g,k)=>s.jsxs("tr",{className:"bg-red-500/10 border border-red-500/20",children:[s.jsx("td",{className:"p-3 font-medium text-slate-400",children:g.pronoun}),s.jsx("td",{className:"p-3 text-xl font-bold text-red-400",children:g.pashto}),s.jsx("td",{className:"p-3 text-slate-300",children:g.farsi}),s.jsx("td",{className:"p-3 text-slate-500 text-sm",dir:"ltr",children:g.pronunciation})]},k))})})})]})]})]},d):null}),f&&f.examples&&s.jsxs("div",{className:"bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700",children:[s.jsx("h3",{className:"text-lg font-bold text-slate-200 mb-3",children:"مثال‌ها:"}),s.jsx("div",{className:"space-y-2",children:f.examples.map((d,b)=>s.jsxs("div",{className:"bg-slate-700/50 p-3 rounded-lg flex justify-between items-center border border-slate-600",children:[s.jsx("span",{className:"text-emerald-400 font-bold",children:d.pashto}),s.jsx("span",{className:"text-slate-400",children:d.farsi})]},b))})]}),s.jsxs("div",{className:"mt-6 bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700",children:[s.jsx("h3",{className:"text-lg font-bold text-slate-200 mb-3",children:"راهنمای سریع:"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[s.jsxs("div",{className:"bg-slate-700/50 p-3 rounded-lg border border-slate-600",children:[s.jsx("div",{className:"font-bold text-emerald-400 mb-1",children:"پسوندهای حال:"}),s.jsx("div",{className:"text-slate-400",children:"م، ې، ي، و، ئ، ي"})]}),s.jsxs("div",{className:"bg-slate-700/50 p-3 rounded-lg border border-slate-600",children:[s.jsx("div",{className:"font-bold text-purple-400 mb-1",children:"علامت آینده:"}),s.jsx("div",{className:"text-slate-400",children:"به + فعل حال"})]}),s.jsxs("div",{className:"bg-slate-700/50 p-3 rounded-lg border border-slate-600",children:[s.jsx("div",{className:"font-bold text-blue-400 mb-1",children:"علامت گذشته:"}),s.jsx("div",{className:"text-slate-400",children:"پیشوند «و» + ریشه گذشته"})]}),s.jsxs("div",{className:"bg-slate-700/50 p-3 rounded-lg border border-slate-600",children:[s.jsx("div",{className:"font-bold text-red-400 mb-1",children:"منفی‌ساز:"}),s.jsx("div",{className:"text-slate-400",children:"نه (خبری) / مه (امری)"})]})]})]})]})})}const vs=[{phase:1,title:"مرحله ۱: آشنایی با الفبا و صداها",titlePashto:"لومړی پړاو: الفبا او غږونه",duration:"۱-۲ هفته",icon:at,color:"emerald",description:"یادگیری حروف الفبای پشتو و صداهای خاص کندهاری",goals:["شناخت ۴۴ حرف الفبای پشتو","یادگیری ۴ حرف خاص پشتو (ښ، ږ، ځ، څ)","تمرین صداهای برگشته (ټ، ډ، ړ، ڼ)","آشنایی با مصوت‌ها و تلفظ کندهاری"],lessons:[{id:"alphabet-intro",title:"آشنایی با الفبا"},{id:"unique-letters",title:"حروف خاص پښتو"},{id:"kandahari-sounds",title:"صداهای کندهاری"},{id:"vowels",title:"مصوت‌ها"}],tips:"هر روز ۱۵ دقیقه تمرین تلفظ کنید. از صفحه الفبا استفاده کنید."},{phase:2,title:"مرحله ۲: سلام و احوالپرسی",titlePashto:"دویم پړاو: سلام او حال احوال",duration:"۱ هفته",icon:De,color:"pink",description:"یادگیری عبارات اولیه برای شروع مکالمه",goals:["سلام کردن رسمی و غیررسمی","پرسیدن حال و جواب دادن","معرفی خود به دیگران","خداحافظی کردن"],lessons:[{id:"basic-greetings",title:"سلام و خداحافظی"},{id:"how-are-you",title:"حالت چطور است؟"},{id:"introductions",title:"معرفی خود"},{id:"formal-informal",title:"رسمی و غیررسمی"}],tips:"این عبارات را با صدای بلند تمرین کنید. سعی کنید هر روز استفاده کنید."},{phase:3,title:"مرحله ۳: ضمایر و ساختار جمله",titlePashto:"دریم پړاو: ضمیرونه او جملې جوړښت",duration:"۱-۲ هفته",icon:Jn,color:"blue",description:"یادگیری ضمایر و ساختار پایه جملات پشتو",goals:["ضمایر شخصی (زه، ته، هغه...)","ضمایر ملکی (زما، ستا، د هغه...)","ساختار SOV جملات پشتو","تفاوت رسمی و غیررسمی"],lessons:[{id:"pronouns",title:"ضمایر شخصی"},{id:"possessive-pronouns",title:"ضمایر ملکی"},{id:"demonstratives",title:"ضمایر اشاره"},{id:"sentence-structure",title:"ساختار جمله SOV"}],tips:"پشتو ساختار SOV دارد: فاعل + مفعول + فعل. این را همیشه به یاد داشته باشید."},{phase:4,title:"مرحله ۴: دستور زبان میانی",titlePashto:"څلورم پړاو: منځنی ګرامر",duration:"۲ هفته",icon:at,color:"red",description:"یادگیری قواعد دستوری پیشرفته‌تر",goals:["جنسیت اسم‌ها (مذکر/مونث)","جمع بستن اسم‌ها","صفت‌ها و تطابق","حروف اضافه","جملات سوالی و منفی"],lessons:[{id:"gender",title:"جنسیت اسم‌ها"},{id:"plural",title:"جمع بستن"},{id:"adjectives",title:"صفت‌ها"},{id:"prepositions",title:"حروف اضافه"},{id:"questions",title:"جملات سوالی"},{id:"negation",title:"جملات منفی"}],tips:"در پشتو جنسیت اسم‌ها مهم است و صفت باید با اسم تطابق داشته باشد."},{phase:5,title:"مرحله ۵: واژگان پایه",titlePashto:"پنځم پړاو: بنسټیز لغات",duration:"۲ هفته",icon:Ky,color:"teal",description:"یادگیری کلمات ضروری برای مکالمه روزمره",goals:["اعضای خانواده","اعداد ۱ تا ۱۰۰","غذا و نوشیدنی","اعضای بدن","رنگ‌ها و روزها"],lessons:[{id:"family",title:"خانواده"},{id:"numbers-11-100",title:"اعداد ۱۱-۱۰۰"},{id:"food",title:"غذا و نوشیدنی"},{id:"body-parts",title:"اعضای بدن"},{id:"colors",title:"رنگ‌ها"},{id:"days-months",title:"روزها و ماه‌ها"}],tips:"هر روز ۱۰ کلمه جدید یاد بگیرید. کارت‌های فلش درست کنید."},{phase:6,title:"مرحله ۶: فعل‌های زمان حال",titlePashto:"شپږم پړاو: اوسمهال فعلونه",duration:"۲-۳ هفته",icon:Ns,color:"amber",description:"یادگیری صرف فعل‌های پرکاربرد در زمان حال",goals:["فعل بودن (یم، یې، دی...)","فعل‌های حرکتی (ځم، راځم)","فعل‌های روزمره (خورم، څښم، کوم)","فعل خواستن (غواړم)","فعل‌های کمکی (باید، کولی شی، توانیدل)","فعل‌های انتقالی (نیول، ورکول، پرېږدل)"],lessons:[{id:"verb-to-be",title:"فعل بودن"},{id:"verb-to-go",title:"فعل رفتن"},{id:"verb-to-come",title:"فعل آمدن"},{id:"verb-to-eat",title:"فعل خوردن"},{id:"verb-to-drink",title:"فعل نوشیدن"},{id:"verb-to-do",title:"فعل کردن"},{id:"verb-to-pour",title:"فعل ریختن"},{id:"verb-to-want",title:"فعل خواستن"},{id:"modal-verbs",title:"فعل‌های کمکی"},{id:"transitive-verbs",title:"فعل‌های انتقالی"}],tips:"از صفحه صرف فعل استفاده کنید. هر فعل را با تمام ضمایر تمرین کنید."},{phase:7,title:"مرحله ۷: فعل‌های زمان گذشته",titlePashto:"اووم پړاو: تېرمهال فعلونه",duration:"۲ هفته",icon:gd,color:"violet",description:"یادگیری صرف فعل‌ها در زمان گذشته",goals:["ساختار گذشته ساده","فعل‌های بی‌قاعده در گذشته","تفاوت گذشته و حال","جملات منفی گذشته"],lessons:[{id:"past-simple",title:"گذشته ساده"},{id:"past-to-be",title:"بودم (وم)"},{id:"past-to-go",title:"رفتم (لاړم)"},{id:"past-to-come",title:"آمدم (راغلم)"},{id:"past-to-eat",title:"خوردم (وخوړم)"},{id:"past-to-drink",title:"نوشیدم (وڅښم)"},{id:"past-to-do",title:"کردم (وکړم)"},{id:"past-to-pour",title:"ریختم (وریخت)"},{id:"past-to-see",title:"دیدم (ولیدم)"}],tips:"در پشتو، پیشوند «و» معمولاً نشانه گذشته است."},{phase:8,title:"مرحله ۸: آینده و امری",titlePashto:"اتم پړاو: راتلونکي او امري",duration:"۲ هفته",icon:Pt,color:"cyan",description:"یادگیری زمان آینده و فعل امری",goals:["ساختار زمان آینده","فعل امری رسمی و غیررسمی","درخواست کردن مودبانه"],lessons:[{id:"future-tense",title:"زمان آینده"},{id:"future-to-be",title:"خواهم بود (به یم)"},{id:"future-to-go",title:"خواهم رفت (به ځم)"},{id:"future-to-come",title:"خواهم آمد (به راځم)"},{id:"future-to-eat",title:"خواهم خورد (به خورم)"},{id:"future-to-drink",title:"خواهم نوشید (به څښم)"},{id:"future-to-do",title:"خواهم کرد (به کوم)"},{id:"future-to-pour",title:"خواهم ریخت (به ریختم)"},{id:"imperative",title:"فعل امری"},{id:"imperative-formal",title:"امری رسمی"},{id:"requests",title:"درخواست کردن"}],tips:"برای آینده از «به» + فعل استفاده می‌شود."},{phase:9,title:"مرحله ۹: فعل‌های جامع",titlePashto:"نهم پړاو: د فعلونو مجموعه",duration:"۱ هفته",icon:Ns,color:"amber",description:"یادگیری فعل‌های اساسی در تمام زمان‌ها",goals:["فعل‌های اساسی در حال، گذشته و آینده","تطبیق فعل‌ها با ضمایر مختلف","درک الگوهای صرف فعل"],lessons:[{id:"comprehensive-verbs",title:"فعل‌های اساسی - تمام زمان‌ها"}],tips:"این درس جامع تمام زمان‌های فعل را پوشش می‌دهد. قبل از شروع، درس‌های فعل حال و گذشته را مرور کنید."},{phase:10,title:"مرحله ۱۰: مکالمات روزمره",titlePashto:"لسم پړاو: ورځنۍ خبرې",duration:"۳-۴ هفته",icon:De,color:"orange",description:"تمرین مکالمه در موقعیت‌های واقعی",goals:["خرید در بازار و چانه زدن","سفارش غذا در رستوران","گرفتن تاکسی و مسیریابی","مکالمه تلفنی","رفتن به داکتر","مهمانی و پذیرایی"],lessons:[{id:"conv-shopping",title:"در بازار"},{id:"conv-restaurant",title:"در رستوران"},{id:"conv-taxi",title:"در تاکسی"},{id:"conv-phone",title:"مکالمه تلفنی"},{id:"conv-doctor",title:"در مطب داکتر"},{id:"conv-guest",title:"مهمانی"}],tips:"این مکالمات را با صدای بلند تمرین کنید. نقش هر دو طرف را بازی کنید."},{phase:11,title:"مرحله ۱۱: پیشرفته و اصطلاحات",titlePashto:"یولسم پړاو: پرمختللی",duration:"مداوم",icon:yu,color:"purple",description:"یادگیری اصطلاحات و ضرب‌المثل‌های کندهاری",goals:["صداهای برگشته پیشرفته","اصطلاحات روزمره","ضرب‌المثل‌های پشتو","اصطلاحات خاص کندهاری","غذا و پخت و پز پیشرفته","اعضای بدن پیشرفته"],lessons:[{id:"retroflex",title:"صداهای برگشته"},{id:"idioms",title:"اصطلاحات"},{id:"proverbs",title:"ضرب‌المثل‌ها"},{id:"kandahari-slang",title:"اصطلاحات کندهاری"},{id:"advanced-food-cooking",title:"کولو (Cooking)"},{id:"advanced-body-parts",title:"جسم کے حصے"}],tips:"با پشتوزبانان صحبت کنید. فیلم و موسیقی پشتو گوش کنید. درس‌های پیشرفته را برای تعمق بیشتر ببینید."}],ev={emerald:{bg:"bg-emerald-500/20",border:"border-emerald-500/50",text:"text-emerald-400",icon:"bg-emerald-500"},pink:{bg:"bg-pink-500/20",border:"border-pink-500/50",text:"text-pink-400",icon:"bg-pink-500"},blue:{bg:"bg-blue-500/20",border:"border-blue-500/50",text:"text-blue-400",icon:"bg-blue-500"},amber:{bg:"bg-amber-500/20",border:"border-amber-500/50",text:"text-amber-400",icon:"bg-amber-500"},teal:{bg:"bg-teal-500/20",border:"border-teal-500/50",text:"text-teal-400",icon:"bg-teal-500"},violet:{bg:"bg-violet-500/20",border:"border-violet-500/50",text:"text-violet-400",icon:"bg-violet-500"},red:{bg:"bg-red-500/20",border:"border-red-500/50",text:"text-red-400",icon:"bg-red-500"},cyan:{bg:"bg-cyan-500/20",border:"border-cyan-500/50",text:"text-cyan-400",icon:"bg-cyan-500"},orange:{bg:"bg-orange-500/20",border:"border-orange-500/50",text:"text-orange-400",icon:"bg-orange-500"},purple:{bg:"bg-purple-500/20",border:"border-purple-500/50",text:"text-purple-400",icon:"bg-purple-500"},indigo:{bg:"bg-indigo-500/20",border:"border-indigo-500/50",text:"text-indigo-400",icon:"bg-indigo-500"}};function nv(){const[l,c]=T.useState(1),{progress:f,completePhase:u,uncompletePhase:h,isPhaseCompleted:m}=ln(),d=k=>{c(l===k?null:k)},b=k=>{m(k)?h(k):u(k)},x=f?.completedPhases?.length||0,g=x/vs.length*100;return s.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[s.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[s.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30",children:s.jsx(vd,{className:"w-7 h-7 text-white"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:"نقشه راه یادگیری"}),s.jsx("p",{className:"text-slate-400",children:"د زده کړې لارښود - مسیر کامل یادگیری پشتو کندهاری"})]})]}),s.jsxs("div",{className:"mt-4",children:[s.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[s.jsx("span",{className:"text-slate-400",children:"پیشرفت کلی"}),s.jsxs("span",{className:"text-indigo-400 font-bold",children:[Math.round(g),"%"]})]}),s.jsx("div",{className:"h-3 bg-slate-700 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500",style:{width:`${g}%`}})}),s.jsxs("p",{className:"text-xs text-slate-500 mt-2",children:[x," از ",vs.length," مرحله تکمیل شده"]})]})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[s.jsxs("div",{className:"bg-slate-800 rounded-xl p-4 border border-slate-700 text-center",children:[s.jsx(jd,{className:"w-8 h-8 text-emerald-400 mx-auto mb-2"}),s.jsx("p",{className:"text-2xl font-bold text-slate-100",children:"۱۱"}),s.jsx("p",{className:"text-xs text-slate-500",children:"مرحله"})]}),s.jsxs("div",{className:"bg-slate-800 rounded-xl p-4 border border-slate-700 text-center",children:[s.jsx(Hh,{className:"w-8 h-8 text-amber-400 mx-auto mb-2"}),s.jsx("p",{className:"text-2xl font-bold text-slate-100",children:"۵۷"}),s.jsx("p",{className:"text-xs text-slate-500",children:"درس"})]}),s.jsxs("div",{className:"bg-slate-800 rounded-xl p-4 border border-slate-700 text-center",children:[s.jsx(on,{className:"w-8 h-8 text-purple-400 mx-auto mb-2"}),s.jsx("p",{className:"text-2xl font-bold text-slate-100",children:"۳-۴"}),s.jsx("p",{className:"text-xs text-slate-500",children:"ماه"})]})]}),s.jsx("div",{className:"space-y-4",children:vs.map((k,N)=>{const A=ev[k.color],R=l===k.phase,L=m(k.phase),H=k.icon;return s.jsxs("div",{className:`bg-slate-800 rounded-2xl border transition-all ${L?"border-emerald-500/50":"border-slate-700"}`,children:[s.jsxs("button",{onClick:()=>d(k.phase),className:"w-full p-4 flex items-center gap-4 text-right",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${A.icon} shadow-lg`,children:s.jsx(H,{className:"w-6 h-6 text-white"})}),L&&s.jsx("div",{className:"absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center",children:s.jsx(_t,{className:"w-4 h-4 text-white"})}),N<vs.length-1&&s.jsx("div",{className:`absolute top-12 right-1/2 w-0.5 h-8 ${L?"bg-emerald-500":"bg-slate-600"}`})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"flex items-center gap-2 mb-1",children:s.jsx("h3",{className:`font-bold ${L?"text-emerald-400":"text-slate-100"}`,children:k.title})}),s.jsx("p",{className:`text-sm ${A.text}`,children:k.titlePashto}),s.jsxs("div",{className:"flex items-center gap-4 mt-1 text-xs text-slate-500",children:[s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx(gd,{className:"w-3 h-3"}),k.duration]}),s.jsxs("span",{children:[k.lessons.length," درس"]})]})]}),s.jsx("div",{className:"text-slate-500",children:R?s.jsx(nn,{className:"w-5 h-5"}):s.jsx(qe,{className:"w-5 h-5"})})]}),R&&s.jsxs("div",{className:"px-4 pb-4 border-t border-slate-700 pt-4",children:[s.jsx("p",{className:"text-slate-300 mb-4",children:k.description}),s.jsxs("div",{className:`${A.bg} rounded-xl p-4 mb-4 border ${A.border}`,children:[s.jsx("h4",{className:`font-bold ${A.text} mb-2`,children:"اهداف این مرحله:"}),s.jsx("ul",{className:"space-y-1",children:k.goals.map((P,U)=>s.jsxs("li",{className:"flex items-center gap-2 text-sm text-slate-300",children:[s.jsx(Qy,{className:`w-2 h-2 ${A.text}`}),P]},U))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h4",{className:"font-bold text-slate-300 mb-2",children:"درس‌ها:"}),s.jsx("div",{className:"grid grid-cols-2 gap-2",children:k.lessons.map(P=>s.jsxs(Ca,{to:`/lesson/${P.id}`,className:"bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2",children:[s.jsx(at,{className:"w-4 h-4 text-slate-500"}),P.title]},P.id))})]}),s.jsxs("div",{className:"bg-amber-500/10 rounded-xl p-4 border border-amber-500/30",children:[s.jsxs("h4",{className:"font-bold text-amber-400 mb-1 flex items-center gap-2",children:[s.jsx(Hh,{className:"w-4 h-4"}),"نکته:"]}),s.jsx("p",{className:"text-sm text-slate-300",children:k.tips})]}),s.jsx("button",{onClick:()=>b(k.phase),className:`mt-4 w-full py-3 rounded-xl font-bold transition-all ${L?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/50":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:L?"✓ تکمیل شده":"علامت‌گذاری به عنوان تکمیل شده"})]})]},k.phase)})}),s.jsxs("div",{className:"bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30",children:[s.jsxs("h3",{className:"text-xl font-bold text-indigo-300 mb-4 flex items-center gap-2",children:[s.jsx(yu,{className:"w-6 h-6"}),"نکات مهم برای موفقیت"]}),s.jsxs("ul",{className:"space-y-3 text-slate-300",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx(_t,{className:"w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"}),s.jsx("span",{children:"هر روز حداقل ۳۰ دقیقه تمرین کنید - ثبات مهم‌تر از مدت است"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx(_t,{className:"w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"}),s.jsx("span",{children:"با صدای بلند تمرین کنید - تلفظ کندهاری نیاز به تمرین دارد"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx(_t,{className:"w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"}),s.jsx("span",{children:"از صفحه صرف فعل برای تمرین گردان فعل‌ها استفاده کنید"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx(_t,{className:"w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"}),s.jsx("span",{children:"مکالمات را با نقش‌بازی تمرین کنید - هر دو طرف مکالمه را بخوانید"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx(_t,{className:"w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"}),s.jsx("span",{children:"اگر امکان دارد با پشتوزبانان صحبت کنید - تمرین واقعی بهترین روش است"})]})]})]})]})}function iv(){const{currentUser:l}=Wi();return l?s.jsxs(s.Fragment,{children:[s.jsx(rb,{}),s.jsx(lb,{children:s.jsxs(iy,{children:[s.jsx(Tt,{path:"/",element:s.jsx(pb,{})}),s.jsx(Tt,{path:"/users",element:s.jsx(cb,{})}),s.jsx(Tt,{path:"/lesson/:lessonId",element:s.jsx(Ux,{})}),s.jsx(Tt,{path:"/practice/:practiceId",element:s.jsx(Px,{})}),s.jsx(Tt,{path:"/alphabet",element:s.jsx(Gx,{})}),s.jsx(Tt,{path:"/vocabulary",element:s.jsx(Xh,{})}),s.jsx(Tt,{path:"/vocabulary/:categoryId",element:s.jsx(Xh,{})}),s.jsx(Tt,{path:"/conversation",element:s.jsx(Vh,{})}),s.jsx(Tt,{path:"/conversation/:conversationId",element:s.jsx(Vh,{})}),s.jsx(Tt,{path:"/conjugation",element:s.jsx(tv,{})}),s.jsx(Tt,{path:"/roadmap",element:s.jsx(nv,{})})]})})]}):s.jsx(ub,{})}lg.createRoot(document.getElementById("root")).render(s.jsx(I0.StrictMode,{children:s.jsx(Ty,{children:s.jsx(Uy,{children:s.jsx(tb,{children:s.jsx(iv,{})})})})}));
