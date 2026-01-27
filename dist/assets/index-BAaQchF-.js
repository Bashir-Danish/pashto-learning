(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function p(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(d){if(d.ep)return;d.ep=!0;const m=p(d);fetch(d.href,m)}})();function Zd(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Xr={exports:{}},Ki={};var wd;function V0(){if(wd)return Ki;wd=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function p(u,d,m){var h=null;if(m!==void 0&&(h=""+m),d.key!==void 0&&(h=""+d.key),"key"in d){m={};for(var b in d)b!=="key"&&(m[b]=d[b])}else m=d;return d=m.ref,{$$typeof:l,type:u,key:h,ref:d!==void 0?d:null,props:m}}return Ki.Fragment=c,Ki.jsx=p,Ki.jsxs=p,Ki}var kd;function J0(){return kd||(kd=1,Xr.exports=V0()),Xr.exports}var o=J0(),Wr={exports:{}},$={};var jd;function F0(){if(jd)return $;jd=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),h=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),B=Symbol.iterator;function z(w){return w===null||typeof w!="object"?null:(w=B&&w[B]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,_={};function q(w,U,Y){this.props=w,this.context=U,this.refs=_,this.updater=Y||M}q.prototype.isReactComponent={},q.prototype.setState=function(w,U){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,U,"setState")},q.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function H(){}H.prototype=q.prototype;function X(w,U,Y){this.props=w,this.context=U,this.refs=_,this.updater=Y||M}var ua=X.prototype=new H;ua.constructor=X,R(ua,q.prototype),ua.isPureReactComponent=!0;var ca=Array.isArray;function ja(){}var F={H:null,A:null,T:null,S:null},Ta=Object.prototype.hasOwnProperty;function Ya(w,U,Y){var G=Y.ref;return{$$typeof:l,type:w,key:U,ref:G!==void 0?G:null,props:Y}}function gt(w,U){return Ya(w.type,U,w.props)}function Ot(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function $a(w){var U={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(Y){return U[Y]})}var _e=/\/+/g;function Qt(w,U){return typeof w=="object"&&w!==null&&w.key!=null?$a(""+w.key):U.toString(36)}function Pt(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ja,ja):(w.status="pending",w.then(function(U){w.status==="pending"&&(w.status="fulfilled",w.value=U)},function(U){w.status==="pending"&&(w.status="rejected",w.reason=U)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function D(w,U,Y,G,I){var na=typeof w;(na==="undefined"||na==="boolean")&&(w=null);var ha=!1;if(w===null)ha=!0;else switch(na){case"bigint":case"string":case"number":ha=!0;break;case"object":switch(w.$$typeof){case l:case c:ha=!0;break;case A:return ha=w._init,D(ha(w._payload),U,Y,G,I)}}if(ha)return I=I(w),ha=G===""?"."+Qt(w,0):G,ca(I)?(Y="",ha!=null&&(Y=ha.replace(_e,"$&/")+"/"),D(I,U,Y,"",function(Fn){return Fn})):I!=null&&(Ot(I)&&(I=gt(I,Y+(I.key==null||w&&w.key===I.key?"":(""+I.key).replace(_e,"$&/")+"/")+ha)),U.push(I)),1;ha=0;var Ja=G===""?".":G+":";if(ca(w))for(var Ca=0;Ca<w.length;Ca++)G=w[Ca],na=Ja+Qt(G,Ca),ha+=D(G,U,Y,na,I);else if(Ca=z(w),typeof Ca=="function")for(w=Ca.call(w),Ca=0;!(G=w.next()).done;)G=G.value,na=Ja+Qt(G,Ca++),ha+=D(G,U,Y,na,I);else if(na==="object"){if(typeof w.then=="function")return D(Pt(w),U,Y,G,I);throw U=String(w),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ha}function Q(w,U,Y){if(w==null)return w;var G=[],I=0;return D(w,G,"","",function(na){return U.call(Y,na,I++)}),G}function J(w){if(w._status===-1){var U=w._result;U=U(),U.then(function(Y){(w._status===0||w._status===-1)&&(w._status=1,w._result=Y)},function(Y){(w._status===0||w._status===-1)&&(w._status=2,w._result=Y)}),w._status===-1&&(w._status=0,w._result=U)}if(w._status===1)return w._result.default;throw w._result}var ga=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},wa={map:Q,forEach:function(w,U,Y){Q(w,function(){U.apply(this,arguments)},Y)},count:function(w){var U=0;return Q(w,function(){U++}),U},toArray:function(w){return Q(w,function(U){return U})||[]},only:function(w){if(!Ot(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return $.Activity=k,$.Children=wa,$.Component=q,$.Fragment=p,$.Profiler=d,$.PureComponent=X,$.StrictMode=u,$.Suspense=v,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,$.__COMPILER_RUNTIME={__proto__:null,c:function(w){return F.H.useMemoCache(w)}},$.cache=function(w){return function(){return w.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(w,U,Y){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var G=R({},w.props),I=w.key;if(U!=null)for(na in U.key!==void 0&&(I=""+U.key),U)!Ta.call(U,na)||na==="key"||na==="__self"||na==="__source"||na==="ref"&&U.ref===void 0||(G[na]=U[na]);var na=arguments.length-2;if(na===1)G.children=Y;else if(1<na){for(var ha=Array(na),Ja=0;Ja<na;Ja++)ha[Ja]=arguments[Ja+2];G.children=ha}return Ya(w.type,I,G)},$.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:m,_context:w},w},$.createElement=function(w,U,Y){var G,I={},na=null;if(U!=null)for(G in U.key!==void 0&&(na=""+U.key),U)Ta.call(U,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(I[G]=U[G]);var ha=arguments.length-2;if(ha===1)I.children=Y;else if(1<ha){for(var Ja=Array(ha),Ca=0;Ca<ha;Ca++)Ja[Ca]=arguments[Ca+2];I.children=Ja}if(w&&w.defaultProps)for(G in ha=w.defaultProps,ha)I[G]===void 0&&(I[G]=ha[G]);return Ya(w,na,I)},$.createRef=function(){return{current:null}},$.forwardRef=function(w){return{$$typeof:b,render:w}},$.isValidElement=Ot,$.lazy=function(w){return{$$typeof:A,_payload:{_status:-1,_result:w},_init:J}},$.memo=function(w,U){return{$$typeof:y,type:w,compare:U===void 0?null:U}},$.startTransition=function(w){var U=F.T,Y={};F.T=Y;try{var G=w(),I=F.S;I!==null&&I(Y,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(ja,ga)}catch(na){ga(na)}finally{U!==null&&Y.types!==null&&(U.types=Y.types),F.T=U}},$.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},$.use=function(w){return F.H.use(w)},$.useActionState=function(w,U,Y){return F.H.useActionState(w,U,Y)},$.useCallback=function(w,U){return F.H.useCallback(w,U)},$.useContext=function(w){return F.H.useContext(w)},$.useDebugValue=function(){},$.useDeferredValue=function(w,U){return F.H.useDeferredValue(w,U)},$.useEffect=function(w,U){return F.H.useEffect(w,U)},$.useEffectEvent=function(w){return F.H.useEffectEvent(w)},$.useId=function(){return F.H.useId()},$.useImperativeHandle=function(w,U,Y){return F.H.useImperativeHandle(w,U,Y)},$.useInsertionEffect=function(w,U){return F.H.useInsertionEffect(w,U)},$.useLayoutEffect=function(w,U){return F.H.useLayoutEffect(w,U)},$.useMemo=function(w,U){return F.H.useMemo(w,U)},$.useOptimistic=function(w,U){return F.H.useOptimistic(w,U)},$.useReducer=function(w,U,Y){return F.H.useReducer(w,U,Y)},$.useRef=function(w){return F.H.useRef(w)},$.useState=function(w){return F.H.useState(w)},$.useSyncExternalStore=function(w,U,Y){return F.H.useSyncExternalStore(w,U,Y)},$.useTransition=function(){return F.H.useTransition()},$.version="19.2.3",$}var Nd;function ou(){return Nd||(Nd=1,Wr.exports=F0()),Wr.exports}var T=ou();const $0=Zd(T);var Vr={exports:{}},Gi={},Jr={exports:{}},Fr={};var Sd;function I0(){return Sd||(Sd=1,(function(l){function c(D,Q){var J=D.length;D.push(Q);a:for(;0<J;){var ga=J-1>>>1,wa=D[ga];if(0<d(wa,Q))D[ga]=Q,D[J]=wa,J=ga;else break a}}function p(D){return D.length===0?null:D[0]}function u(D){if(D.length===0)return null;var Q=D[0],J=D.pop();if(J!==Q){D[0]=J;a:for(var ga=0,wa=D.length,w=wa>>>1;ga<w;){var U=2*(ga+1)-1,Y=D[U],G=U+1,I=D[G];if(0>d(Y,J))G<wa&&0>d(I,Y)?(D[ga]=I,D[G]=J,ga=G):(D[ga]=Y,D[U]=J,ga=U);else if(G<wa&&0>d(I,J))D[ga]=I,D[G]=J,ga=G;else break a}}return Q}function d(D,Q){var J=D.sortIndex-Q.sortIndex;return J!==0?J:D.id-Q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;l.unstable_now=function(){return m.now()}}else{var h=Date,b=h.now();l.unstable_now=function(){return h.now()-b}}var v=[],y=[],A=1,k=null,B=3,z=!1,M=!1,R=!1,_=!1,q=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function ua(D){for(var Q=p(y);Q!==null;){if(Q.callback===null)u(y);else if(Q.startTime<=D)u(y),Q.sortIndex=Q.expirationTime,c(v,Q);else break;Q=p(y)}}function ca(D){if(R=!1,ua(D),!M)if(p(v)!==null)M=!0,ja||(ja=!0,$a());else{var Q=p(y);Q!==null&&Pt(ca,Q.startTime-D)}}var ja=!1,F=-1,Ta=5,Ya=-1;function gt(){return _?!0:!(l.unstable_now()-Ya<Ta)}function Ot(){if(_=!1,ja){var D=l.unstable_now();Ya=D;var Q=!0;try{a:{M=!1,R&&(R=!1,H(F),F=-1),z=!0;var J=B;try{t:{for(ua(D),k=p(v);k!==null&&!(k.expirationTime>D&&gt());){var ga=k.callback;if(typeof ga=="function"){k.callback=null,B=k.priorityLevel;var wa=ga(k.expirationTime<=D);if(D=l.unstable_now(),typeof wa=="function"){k.callback=wa,ua(D),Q=!0;break t}k===p(v)&&u(v),ua(D)}else u(v);k=p(v)}if(k!==null)Q=!0;else{var w=p(y);w!==null&&Pt(ca,w.startTime-D),Q=!1}}break a}finally{k=null,B=J,z=!1}Q=void 0}}finally{Q?$a():ja=!1}}}var $a;if(typeof X=="function")$a=function(){X(Ot)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Qt=_e.port2;_e.port1.onmessage=Ot,$a=function(){Qt.postMessage(null)}}else $a=function(){q(Ot,0)};function Pt(D,Q){F=q(function(){D(l.unstable_now())},Q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ta=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return B},l.unstable_next=function(D){switch(B){case 1:case 2:case 3:var Q=3;break;default:Q=B}var J=B;B=Q;try{return D()}finally{B=J}},l.unstable_requestPaint=function(){_=!0},l.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=B;B=D;try{return Q()}finally{B=J}},l.unstable_scheduleCallback=function(D,Q,J){var ga=l.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ga+J:ga):J=ga,D){case 1:var wa=-1;break;case 2:wa=250;break;case 5:wa=1073741823;break;case 4:wa=1e4;break;default:wa=5e3}return wa=J+wa,D={id:A++,callback:Q,priorityLevel:D,startTime:J,expirationTime:wa,sortIndex:-1},J>ga?(D.sortIndex=J,c(y,D),p(v)===null&&D===p(y)&&(R?(H(F),F=-1):R=!0,Pt(ca,J-ga))):(D.sortIndex=wa,c(v,D),M||z||(M=!0,ja||(ja=!0,$a()))),D},l.unstable_shouldYield=gt,l.unstable_wrapCallback=function(D){var Q=B;return function(){var J=B;B=Q;try{return D.apply(this,arguments)}finally{B=J}}}})(Fr)),Fr}var zd;function ay(){return zd||(zd=1,Jr.exports=I0()),Jr.exports}var $r={exports:{}},Va={};var Td;function ty(){if(Td)return Va;Td=1;var l=ou();function c(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)y+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(){}var u={d:{f:p,r:function(){throw Error(c(522))},D:p,C:p,L:p,m:p,X:p,S:p,M:p},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(v,y,A){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:k==null?null:""+k,children:v,containerInfo:y,implementation:A}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Va.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Va.createPortal=function(v,y){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(c(299));return m(v,y,null,A)},Va.flushSync=function(v){var y=h.T,A=u.p;try{if(h.T=null,u.p=2,v)return v()}finally{h.T=y,u.p=A,u.d.f()}},Va.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,u.d.C(v,y))},Va.prefetchDNS=function(v){typeof v=="string"&&u.d.D(v)},Va.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var A=y.as,k=b(A,y.crossOrigin),B=typeof y.integrity=="string"?y.integrity:void 0,z=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;A==="style"?u.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:k,integrity:B,fetchPriority:z}):A==="script"&&u.d.X(v,{crossOrigin:k,integrity:B,fetchPriority:z,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Va.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var A=b(y.as,y.crossOrigin);u.d.M(v,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&u.d.M(v)},Va.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var A=y.as,k=b(A,y.crossOrigin);u.d.L(v,A,{crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Va.preloadModule=function(v,y){if(typeof v=="string")if(y){var A=b(y.as,y.crossOrigin);u.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else u.d.m(v)},Va.requestFormReset=function(v){u.d.r(v)},Va.unstable_batchedUpdates=function(v,y){return v(y)},Va.useFormState=function(v,y,A){return h.H.useFormState(v,y,A)},Va.useFormStatus=function(){return h.H.useHostTransitionStatus()},Va.version="19.2.3",Va}var Ed;function ey(){if(Ed)return $r.exports;Ed=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),$r.exports=ty(),$r.exports}var Md;function ny(){if(Md)return Gi;Md=1;var l=ay(),c=ou(),p=ey();function u(a){var t="https://react.dev/errors/"+a;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+a+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function m(a){var t=a,e=a;if(a.alternate)for(;t.return;)t=t.return;else{a=t;do t=a,(t.flags&4098)!==0&&(e=t.return),a=t.return;while(a)}return t.tag===3?e:null}function h(a){if(a.tag===13){var t=a.memoizedState;if(t===null&&(a=a.alternate,a!==null&&(t=a.memoizedState)),t!==null)return t.dehydrated}return null}function b(a){if(a.tag===31){var t=a.memoizedState;if(t===null&&(a=a.alternate,a!==null&&(t=a.memoizedState)),t!==null)return t.dehydrated}return null}function v(a){if(m(a)!==a)throw Error(u(188))}function y(a){var t=a.alternate;if(!t){if(t=m(a),t===null)throw Error(u(188));return t!==a?null:a}for(var e=a,n=t;;){var i=e.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){e=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===e)return v(i),a;if(s===n)return v(i),t;s=s.sibling}throw Error(u(188))}if(e.return!==n.return)e=i,n=s;else{for(var r=!1,f=i.child;f;){if(f===e){r=!0,e=i,n=s;break}if(f===n){r=!0,n=i,e=s;break}f=f.sibling}if(!r){for(f=s.child;f;){if(f===e){r=!0,e=s,n=i;break}if(f===n){r=!0,n=s,e=i;break}f=f.sibling}if(!r)throw Error(u(189))}}if(e.alternate!==n)throw Error(u(190))}if(e.tag!==3)throw Error(u(188));return e.stateNode.current===e?a:t}function A(a){var t=a.tag;if(t===5||t===26||t===27||t===6)return a;for(a=a.child;a!==null;){if(t=A(a),t!==null)return t;a=a.sibling}return null}var k=Object.assign,B=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ua=Symbol.for("react.forward_ref"),ca=Symbol.for("react.suspense"),ja=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Ta=Symbol.for("react.lazy"),Ya=Symbol.for("react.activity"),gt=Symbol.for("react.memo_cache_sentinel"),Ot=Symbol.iterator;function $a(a){return a===null||typeof a!="object"?null:(a=Ot&&a[Ot]||a["@@iterator"],typeof a=="function"?a:null)}var _e=Symbol.for("react.client.reference");function Qt(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===_e?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case R:return"Fragment";case q:return"Profiler";case _:return"StrictMode";case ca:return"Suspense";case ja:return"SuspenseList";case Ya:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case M:return"Portal";case X:return a.displayName||"Context";case H:return(a._context.displayName||"Context")+".Consumer";case ua:var t=a.render;return a=a.displayName,a||(a=t.displayName||t.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case F:return t=a.displayName||null,t!==null?t:Qt(a.type)||"Memo";case Ta:t=a._payload,a=a._init;try{return Qt(a(t))}catch{}}return null}var Pt=Array.isArray,D=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ga=[],wa=-1;function w(a){return{current:a}}function U(a){0>wa||(a.current=ga[wa],ga[wa]=null,wa--)}function Y(a,t){wa++,ga[wa]=a.current,a.current=t}var G=w(null),I=w(null),na=w(null),ha=w(null);function Ja(a,t){switch(Y(na,t),Y(I,a),Y(G,null),t.nodeType){case 9:case 11:a=(a=t.documentElement)&&(a=a.namespaceURI)?Kf(a):0;break;default:if(a=t.tagName,t=t.namespaceURI)t=Kf(t),a=Gf(t,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}U(G),Y(G,a)}function Ca(){U(G),U(I),U(na)}function Fn(a){a.memoizedState!==null&&Y(ha,a);var t=G.current,e=Gf(t,a.type);t!==e&&(Y(I,a),Y(G,e))}function as(a){I.current===a&&(U(G),U(I)),ha.current===a&&(U(ha),qi._currentValue=J)}var Mo,vu;function qe(a){if(Mo===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Mo=t&&t[1]||"",vu=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mo+a+vu}var Ao=!1;function Po(a,t){if(!a||Ao)return"";Ao=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(P){var E=P}Reflect.construct(a,[],L)}else{try{L.call()}catch(P){E=P}a.call(L.prototype)}}else{try{throw Error()}catch(P){E=P}(L=a())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(P){if(P&&E&&typeof P.stack=="string")return[P.stack,E.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),r=s[0],f=s[1];if(r&&f){var g=r.split(`
`),S=f.split(`
`);for(i=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;if(n===g.length||i===S.length)for(n=g.length-1,i=S.length-1;1<=n&&0<=i&&g[n]!==S[i];)i--;for(;1<=n&&0<=i;n--,i--)if(g[n]!==S[i]){if(n!==1||i!==1)do if(n--,i--,0>i||g[n]!==S[i]){var C=`
`+g[n].replace(" at new "," at ");return a.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",a.displayName)),C}while(1<=n&&0<=i);break}}}finally{Ao=!1,Error.prepareStackTrace=e}return(e=a?a.displayName||a.name:"")?qe(e):""}function zh(a,t){switch(a.tag){case 26:case 27:case 5:return qe(a.type);case 16:return qe("Lazy");case 13:return a.child!==t&&t!==null?qe("Suspense Fallback"):qe("Suspense");case 19:return qe("SuspenseList");case 0:case 15:return Po(a.type,!1);case 11:return Po(a.type.render,!1);case 1:return Po(a.type,!0);case 31:return qe("Activity");default:return""}}function xu(a){try{var t="",e=null;do t+=zh(a,e),e=a,a=a.return;while(a);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Co=Object.prototype.hasOwnProperty,Ro=l.unstable_scheduleCallback,Bo=l.unstable_cancelCallback,Th=l.unstable_shouldYield,Eh=l.unstable_requestPaint,lt=l.unstable_now,Mh=l.unstable_getCurrentPriorityLevel,wu=l.unstable_ImmediatePriority,ku=l.unstable_UserBlockingPriority,ts=l.unstable_NormalPriority,Ah=l.unstable_LowPriority,ju=l.unstable_IdlePriority,Ph=l.log,Ch=l.unstable_setDisableYieldValue,$n=null,rt=null;function pe(a){if(typeof Ph=="function"&&Ch(a),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode($n,a)}catch{}}var ut=Math.clz32?Math.clz32:Dh,Rh=Math.log,Bh=Math.LN2;function Dh(a){return a>>>=0,a===0?32:31-(Rh(a)/Bh|0)|0}var es=256,ns=262144,is=4194304;function He(a){var t=a&42;if(t!==0)return t;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return a&261888;case 262144:case 524288:case 1048576:case 2097152:return a&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function ss(a,t,e){var n=a.pendingLanes;if(n===0)return 0;var i=0,s=a.suspendedLanes,r=a.pingedLanes;a=a.warmLanes;var f=n&134217727;return f!==0?(n=f&~s,n!==0?i=He(n):(r&=f,r!==0?i=He(r):e||(e=f&~a,e!==0&&(i=He(e))))):(f=n&~s,f!==0?i=He(f):r!==0?i=He(r):e||(e=n&~a,e!==0&&(i=He(e)))),i===0?0:t!==0&&t!==i&&(t&s)===0&&(s=i&-i,e=t&-t,s>=e||s===32&&(e&4194048)!==0)?t:i}function In(a,t){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&t)===0}function Oh(a,t){switch(a){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nu(){var a=is;return is<<=1,(is&62914560)===0&&(is=4194304),a}function Do(a){for(var t=[],e=0;31>e;e++)t.push(a);return t}function ai(a,t){a.pendingLanes|=t,t!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function Lh(a,t,e,n,i,s){var r=a.pendingLanes;a.pendingLanes=e,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=e,a.entangledLanes&=e,a.errorRecoveryDisabledLanes&=e,a.shellSuspendCounter=0;var f=a.entanglements,g=a.expirationTimes,S=a.hiddenUpdates;for(e=r&~e;0<e;){var C=31-ut(e),L=1<<C;f[C]=0,g[C]=-1;var E=S[C];if(E!==null)for(S[C]=null,C=0;C<E.length;C++){var P=E[C];P!==null&&(P.lane&=-536870913)}e&=~L}n!==0&&Su(a,n,0),s!==0&&i===0&&a.tag!==0&&(a.suspendedLanes|=s&~(r&~t))}function Su(a,t,e){a.pendingLanes|=t,a.suspendedLanes&=~t;var n=31-ut(t);a.entangledLanes|=t,a.entanglements[n]=a.entanglements[n]|1073741824|e&261930}function zu(a,t){var e=a.entangledLanes|=t;for(a=a.entanglements;e;){var n=31-ut(e),i=1<<n;i&t|a[n]&t&&(a[n]|=t),e&=~i}}function Tu(a,t){var e=t&-t;return e=(e&42)!==0?1:Oo(e),(e&(a.suspendedLanes|t))!==0?0:e}function Oo(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function Lo(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function Eu(){var a=Q.p;return a!==0?a:(a=window.event,a===void 0?32:hd(a.type))}function Mu(a,t){var e=Q.p;try{return Q.p=a,t()}finally{Q.p=e}}var fe=Math.random().toString(36).slice(2),Ka="__reactFiber$"+fe,Ia="__reactProps$"+fe,cn="__reactContainer$"+fe,Uo="__reactEvents$"+fe,Uh="__reactListeners$"+fe,_h="__reactHandles$"+fe,Au="__reactResources$"+fe,ti="__reactMarker$"+fe;function _o(a){delete a[Ka],delete a[Ia],delete a[Uo],delete a[Uh],delete a[_h]}function pn(a){var t=a[Ka];if(t)return t;for(var e=a.parentNode;e;){if(t=e[cn]||e[Ka]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(a=$f(a);a!==null;){if(e=a[Ka])return e;a=$f(a)}return t}a=e,e=a.parentNode}return null}function fn(a){if(a=a[Ka]||a[cn]){var t=a.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return a}return null}function ei(a){var t=a.tag;if(t===5||t===26||t===27||t===6)return a.stateNode;throw Error(u(33))}function dn(a){var t=a[Au];return t||(t=a[Au]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ha(a){a[ti]=!0}var Pu=new Set,Cu={};function Qe(a,t){hn(a,t),hn(a+"Capture",t)}function hn(a,t){for(Cu[a]=t,a=0;a<t.length;a++)Pu.add(t[a])}var qh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ru={},Bu={};function Hh(a){return Co.call(Bu,a)?!0:Co.call(Ru,a)?!1:qh.test(a)?Bu[a]=!0:(Ru[a]=!0,!1)}function os(a,t,e){if(Hh(t))if(e===null)a.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":a.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){a.removeAttribute(t);return}}a.setAttribute(t,""+e)}}function ls(a,t,e){if(e===null)a.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(t);return}a.setAttribute(t,""+e)}}function Yt(a,t,e,n){if(n===null)a.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(e);return}a.setAttributeNS(t,e,""+n)}}function bt(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function Du(a){var t=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qh(a,t,e){var n=Object.getOwnPropertyDescriptor(a.constructor.prototype,t);if(!a.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(a,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){e=""+r,s.call(this,r)}}),Object.defineProperty(a,t,{enumerable:n.enumerable}),{getValue:function(){return e},setValue:function(r){e=""+r},stopTracking:function(){a._valueTracker=null,delete a[t]}}}}function qo(a){if(!a._valueTracker){var t=Du(a)?"checked":"value";a._valueTracker=Qh(a,t,""+a[t])}}function Ou(a){if(!a)return!1;var t=a._valueTracker;if(!t)return!0;var e=t.getValue(),n="";return a&&(n=Du(a)?a.checked?"true":"false":a.value),a=n,a!==e?(t.setValue(a),!0):!1}function rs(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var Yh=/[\n"\\]/g;function vt(a){return a.replace(Yh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ho(a,t,e,n,i,s,r,f){a.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?a.type=r:a.removeAttribute("type"),t!=null?r==="number"?(t===0&&a.value===""||a.value!=t)&&(a.value=""+bt(t)):a.value!==""+bt(t)&&(a.value=""+bt(t)):r!=="submit"&&r!=="reset"||a.removeAttribute("value"),t!=null?Qo(a,r,bt(t)):e!=null?Qo(a,r,bt(e)):n!=null&&a.removeAttribute("value"),i==null&&s!=null&&(a.defaultChecked=!!s),i!=null&&(a.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?a.name=""+bt(f):a.removeAttribute("name")}function Lu(a,t,e,n,i,s,r,f){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(a.type=s),t!=null||e!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){qo(a);return}e=e!=null?""+bt(e):"",t=t!=null?""+bt(t):e,f||t===a.value||(a.value=t),a.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,a.checked=f?a.checked:!!n,a.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(a.name=r),qo(a)}function Qo(a,t,e){t==="number"&&rs(a.ownerDocument)===a||a.defaultValue===""+e||(a.defaultValue=""+e)}function mn(a,t,e,n){if(a=a.options,t){t={};for(var i=0;i<e.length;i++)t["$"+e[i]]=!0;for(e=0;e<a.length;e++)i=t.hasOwnProperty("$"+a[e].value),a[e].selected!==i&&(a[e].selected=i),i&&n&&(a[e].defaultSelected=!0)}else{for(e=""+bt(e),t=null,i=0;i<a.length;i++){if(a[i].value===e){a[i].selected=!0,n&&(a[i].defaultSelected=!0);return}t!==null||a[i].disabled||(t=a[i])}t!==null&&(t.selected=!0)}}function Uu(a,t,e){if(t!=null&&(t=""+bt(t),t!==a.value&&(a.value=t),e==null)){a.defaultValue!==t&&(a.defaultValue=t);return}a.defaultValue=e!=null?""+bt(e):""}function _u(a,t,e,n){if(t==null){if(n!=null){if(e!=null)throw Error(u(92));if(Pt(n)){if(1<n.length)throw Error(u(93));n=n[0]}e=n}e==null&&(e=""),t=e}e=bt(t),a.defaultValue=e,n=a.textContent,n===e&&n!==""&&n!==null&&(a.value=n),qo(a)}function yn(a,t){if(t){var e=a.firstChild;if(e&&e===a.lastChild&&e.nodeType===3){e.nodeValue=t;return}}a.textContent=t}var Kh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qu(a,t,e){var n=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?n?a.setProperty(t,""):t==="float"?a.cssFloat="":a[t]="":n?a.setProperty(t,e):typeof e!="number"||e===0||Kh.has(t)?t==="float"?a.cssFloat=e:a[t]=(""+e).trim():a[t]=e+"px"}function Hu(a,t,e){if(t!=null&&typeof t!="object")throw Error(u(62));if(a=a.style,e!=null){for(var n in e)!e.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?a.setProperty(n,""):n==="float"?a.cssFloat="":a[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&e[i]!==n&&qu(a,i,n)}else for(var s in t)t.hasOwnProperty(s)&&qu(a,s,t[s])}function Yo(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function us(a){return Zh.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}function Kt(){}var Ko=null;function Go(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var gn=null,bn=null;function Qu(a){var t=fn(a);if(t&&(a=t.stateNode)){var e=a[Ia]||null;a:switch(a=t.stateNode,t.type){case"input":if(Ho(a,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=a;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var n=e[t];if(n!==a&&n.form===a.form){var i=n[Ia]||null;if(!i)throw Error(u(90));Ho(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<e.length;t++)n=e[t],n.form===a.form&&Ou(n)}break a;case"textarea":Uu(a,e.value,e.defaultValue);break a;case"select":t=e.value,t!=null&&mn(a,!!e.multiple,t,!1)}}}var Zo=!1;function Yu(a,t,e){if(Zo)return a(t,e);Zo=!0;try{var n=a(t);return n}finally{if(Zo=!1,(gn!==null||bn!==null)&&(Js(),gn&&(t=gn,a=bn,bn=gn=null,Qu(t),a)))for(t=0;t<a.length;t++)Qu(a[t])}}function ni(a,t){var e=a.stateNode;if(e===null)return null;var n=e[Ia]||null;if(n===null)return null;e=n[t];a:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(a=a.type,n=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!n;break a;default:a=!1}if(a)return null;if(e&&typeof e!="function")throw Error(u(231,t,typeof e));return e}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xo=!1;if(Gt)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){Xo=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{Xo=!1}var de=null,Wo=null,cs=null;function Ku(){if(cs)return cs;var a,t=Wo,e=t.length,n,i="value"in de?de.value:de.textContent,s=i.length;for(a=0;a<e&&t[a]===i[a];a++);var r=e-a;for(n=1;n<=r&&t[e-n]===i[s-n];n++);return cs=i.slice(a,1<n?1-n:void 0)}function ps(a){var t=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&t===13&&(a=13)):a=t,a===10&&(a=13),32<=a||a===13?a:0}function fs(){return!0}function Gu(){return!1}function at(a){function t(e,n,i,s,r){this._reactName=e,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var f in a)a.hasOwnProperty(f)&&(e=a[f],this[f]=e?e(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fs:Gu,this.isPropagationStopped=Gu,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=fs)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=fs)},persist:function(){},isPersistent:fs}),t}var Ye={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ds=at(Ye),si=k({},Ye,{view:0,detail:0}),Xh=at(si),Vo,Jo,oi,hs=k({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$o,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==oi&&(oi&&a.type==="mousemove"?(Vo=a.screenX-oi.screenX,Jo=a.screenY-oi.screenY):Jo=Vo=0,oi=a),Vo)},movementY:function(a){return"movementY"in a?a.movementY:Jo}}),Zu=at(hs),Wh=k({},hs,{dataTransfer:0}),Vh=at(Wh),Jh=k({},si,{relatedTarget:0}),Fo=at(Jh),Fh=k({},Ye,{animationName:0,elapsedTime:0,pseudoElement:0}),$h=at(Fh),Ih=k({},Ye,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),am=at(Ih),tm=k({},Ye,{data:0}),Xu=at(tm),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(a){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(a):(a=im[a])?!!t[a]:!1}function $o(){return sm}var om=k({},si,{key:function(a){if(a.key){var t=em[a.key]||a.key;if(t!=="Unidentified")return t}return a.type==="keypress"?(a=ps(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?nm[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$o,charCode:function(a){return a.type==="keypress"?ps(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?ps(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),lm=at(om),rm=k({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wu=at(rm),um=k({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$o}),cm=at(um),pm=k({},Ye,{propertyName:0,elapsedTime:0,pseudoElement:0}),fm=at(pm),dm=k({},hs,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=at(dm),mm=k({},Ye,{newState:0,oldState:0}),ym=at(mm),gm=[9,13,27,32],Io=Gt&&"CompositionEvent"in window,li=null;Gt&&"documentMode"in document&&(li=document.documentMode);var bm=Gt&&"TextEvent"in window&&!li,Vu=Gt&&(!Io||li&&8<li&&11>=li),Ju=" ",Fu=!1;function $u(a,t){switch(a){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var vn=!1;function vm(a,t){switch(a){case"compositionend":return Iu(t);case"keypress":return t.which!==32?null:(Fu=!0,Ju);case"textInput":return a=t.data,a===Ju&&Fu?null:a;default:return null}}function xm(a,t){if(vn)return a==="compositionend"||!Io&&$u(a,t)?(a=Ku(),cs=Wo=de=null,vn=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vu&&t.locale!=="ko"?null:t.data;default:return null}}var wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(a){var t=a&&a.nodeName&&a.nodeName.toLowerCase();return t==="input"?!!wm[a.type]:t==="textarea"}function tc(a,t,e,n){gn?bn?bn.push(n):bn=[n]:gn=n,t=no(t,"onChange"),0<t.length&&(e=new ds("onChange","change",null,e,n),a.push({event:e,listeners:t}))}var ri=null,ui=null;function km(a){Uf(a,0)}function ms(a){var t=ei(a);if(Ou(t))return a}function ec(a,t){if(a==="change")return t}var nc=!1;if(Gt){var al;if(Gt){var tl="oninput"in document;if(!tl){var ic=document.createElement("div");ic.setAttribute("oninput","return;"),tl=typeof ic.oninput=="function"}al=tl}else al=!1;nc=al&&(!document.documentMode||9<document.documentMode)}function sc(){ri&&(ri.detachEvent("onpropertychange",oc),ui=ri=null)}function oc(a){if(a.propertyName==="value"&&ms(ui)){var t=[];tc(t,ui,a,Go(a)),Yu(km,t)}}function jm(a,t,e){a==="focusin"?(sc(),ri=t,ui=e,ri.attachEvent("onpropertychange",oc)):a==="focusout"&&sc()}function Nm(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return ms(ui)}function Sm(a,t){if(a==="click")return ms(t)}function zm(a,t){if(a==="input"||a==="change")return ms(t)}function Tm(a,t){return a===t&&(a!==0||1/a===1/t)||a!==a&&t!==t}var ct=typeof Object.is=="function"?Object.is:Tm;function ci(a,t){if(ct(a,t))return!0;if(typeof a!="object"||a===null||typeof t!="object"||t===null)return!1;var e=Object.keys(a),n=Object.keys(t);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var i=e[n];if(!Co.call(t,i)||!ct(a[i],t[i]))return!1}return!0}function lc(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function rc(a,t){var e=lc(a);a=0;for(var n;e;){if(e.nodeType===3){if(n=a+e.textContent.length,a<=t&&n>=t)return{node:e,offset:t-a};a=n}a:{for(;e;){if(e.nextSibling){e=e.nextSibling;break a}e=e.parentNode}e=void 0}e=lc(e)}}function uc(a,t){return a&&t?a===t?!0:a&&a.nodeType===3?!1:t&&t.nodeType===3?uc(a,t.parentNode):"contains"in a?a.contains(t):a.compareDocumentPosition?!!(a.compareDocumentPosition(t)&16):!1:!1}function cc(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var t=rs(a.document);t instanceof a.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)a=t.contentWindow;else break;t=rs(a.document)}return t}function el(a){var t=a&&a.nodeName&&a.nodeName.toLowerCase();return t&&(t==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||t==="textarea"||a.contentEditable==="true")}var Em=Gt&&"documentMode"in document&&11>=document.documentMode,xn=null,nl=null,pi=null,il=!1;function pc(a,t,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;il||xn==null||xn!==rs(n)||(n=xn,"selectionStart"in n&&el(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),pi&&ci(pi,n)||(pi=n,n=no(nl,"onSelect"),0<n.length&&(t=new ds("onSelect","select",null,t,e),a.push({event:t,listeners:n}),t.target=xn)))}function Ke(a,t){var e={};return e[a.toLowerCase()]=t.toLowerCase(),e["Webkit"+a]="webkit"+t,e["Moz"+a]="moz"+t,e}var wn={animationend:Ke("Animation","AnimationEnd"),animationiteration:Ke("Animation","AnimationIteration"),animationstart:Ke("Animation","AnimationStart"),transitionrun:Ke("Transition","TransitionRun"),transitionstart:Ke("Transition","TransitionStart"),transitioncancel:Ke("Transition","TransitionCancel"),transitionend:Ke("Transition","TransitionEnd")},sl={},fc={};Gt&&(fc=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function Ge(a){if(sl[a])return sl[a];if(!wn[a])return a;var t=wn[a],e;for(e in t)if(t.hasOwnProperty(e)&&e in fc)return sl[a]=t[e];return a}var dc=Ge("animationend"),hc=Ge("animationiteration"),mc=Ge("animationstart"),Mm=Ge("transitionrun"),Am=Ge("transitionstart"),Pm=Ge("transitioncancel"),yc=Ge("transitionend"),gc=new Map,ol="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ol.push("scrollEnd");function Ct(a,t){gc.set(a,t),Qe(t,[a])}var ys=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},xt=[],kn=0,ll=0;function gs(){for(var a=kn,t=ll=kn=0;t<a;){var e=xt[t];xt[t++]=null;var n=xt[t];xt[t++]=null;var i=xt[t];xt[t++]=null;var s=xt[t];if(xt[t++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}s!==0&&bc(e,i,s)}}function bs(a,t,e,n){xt[kn++]=a,xt[kn++]=t,xt[kn++]=e,xt[kn++]=n,ll|=n,a.lanes|=n,a=a.alternate,a!==null&&(a.lanes|=n)}function rl(a,t,e,n){return bs(a,t,e,n),vs(a)}function Ze(a,t){return bs(a,null,null,t),vs(a)}function bc(a,t,e){a.lanes|=e;var n=a.alternate;n!==null&&(n.lanes|=e);for(var i=!1,s=a.return;s!==null;)s.childLanes|=e,n=s.alternate,n!==null&&(n.childLanes|=e),s.tag===22&&(a=s.stateNode,a===null||a._visibility&1||(i=!0)),a=s,s=s.return;return a.tag===3?(s=a.stateNode,i&&t!==null&&(i=31-ut(e),a=s.hiddenUpdates,n=a[i],n===null?a[i]=[t]:n.push(t),t.lane=e|536870912),s):null}function vs(a){if(50<Ri)throw Ri=0,gr=null,Error(u(185));for(var t=a.return;t!==null;)a=t,t=a.return;return a.tag===3?a.stateNode:null}var jn={};function Cm(a,t,e,n){this.tag=a,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(a,t,e,n){return new Cm(a,t,e,n)}function ul(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Zt(a,t){var e=a.alternate;return e===null?(e=pt(a.tag,t,a.key,a.mode),e.elementType=a.elementType,e.type=a.type,e.stateNode=a.stateNode,e.alternate=a,a.alternate=e):(e.pendingProps=t,e.type=a.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=a.flags&65011712,e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=a.sibling,e.index=a.index,e.ref=a.ref,e.refCleanup=a.refCleanup,e}function vc(a,t){a.flags&=65011714;var e=a.alternate;return e===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,a.type=e.type,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a}function xs(a,t,e,n,i,s){var r=0;if(n=a,typeof a=="function")ul(a)&&(r=1);else if(typeof a=="string")r=L0(a,e,G.current)?26:a==="html"||a==="head"||a==="body"?27:5;else a:switch(a){case Ya:return a=pt(31,e,t,i),a.elementType=Ya,a.lanes=s,a;case R:return Xe(e.children,i,s,t);case _:r=8,i|=24;break;case q:return a=pt(12,e,t,i|2),a.elementType=q,a.lanes=s,a;case ca:return a=pt(13,e,t,i),a.elementType=ca,a.lanes=s,a;case ja:return a=pt(19,e,t,i),a.elementType=ja,a.lanes=s,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case X:r=10;break a;case H:r=9;break a;case ua:r=11;break a;case F:r=14;break a;case Ta:r=16,n=null;break a}r=29,e=Error(u(130,a===null?"null":typeof a,"")),n=null}return t=pt(r,e,t,i),t.elementType=a,t.type=n,t.lanes=s,t}function Xe(a,t,e,n){return a=pt(7,a,n,t),a.lanes=e,a}function cl(a,t,e){return a=pt(6,a,null,t),a.lanes=e,a}function xc(a){var t=pt(18,null,null,0);return t.stateNode=a,t}function pl(a,t,e){return t=pt(4,a.children!==null?a.children:[],a.key,t),t.lanes=e,t.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},t}var wc=new WeakMap;function wt(a,t){if(typeof a=="object"&&a!==null){var e=wc.get(a);return e!==void 0?e:(t={value:a,source:t,stack:xu(t)},wc.set(a,t),t)}return{value:a,source:t,stack:xu(t)}}var Nn=[],Sn=0,ws=null,fi=0,kt=[],jt=0,he=null,Lt=1,Ut="";function Xt(a,t){Nn[Sn++]=fi,Nn[Sn++]=ws,ws=a,fi=t}function kc(a,t,e){kt[jt++]=Lt,kt[jt++]=Ut,kt[jt++]=he,he=a;var n=Lt;a=Ut;var i=32-ut(n)-1;n&=~(1<<i),e+=1;var s=32-ut(t)+i;if(30<s){var r=i-i%5;s=(n&(1<<r)-1).toString(32),n>>=r,i-=r,Lt=1<<32-ut(t)+i|e<<i|n,Ut=s+a}else Lt=1<<s|e<<i|n,Ut=a}function fl(a){a.return!==null&&(Xt(a,1),kc(a,1,0))}function dl(a){for(;a===ws;)ws=Nn[--Sn],Nn[Sn]=null,fi=Nn[--Sn],Nn[Sn]=null;for(;a===he;)he=kt[--jt],kt[jt]=null,Ut=kt[--jt],kt[jt]=null,Lt=kt[--jt],kt[jt]=null}function jc(a,t){kt[jt++]=Lt,kt[jt++]=Ut,kt[jt++]=he,Lt=t.id,Ut=t.overflow,he=a}var Ga=null,Na=null,ra=!1,me=null,Nt=!1,hl=Error(u(519));function ye(a){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw di(wt(t,a)),hl}function Nc(a){var t=a.stateNode,e=a.type,n=a.memoizedProps;switch(t[Ka]=a,t[Ia]=n,e){case"dialog":sa("cancel",t),sa("close",t);break;case"iframe":case"object":case"embed":sa("load",t);break;case"video":case"audio":for(e=0;e<Di.length;e++)sa(Di[e],t);break;case"source":sa("error",t);break;case"img":case"image":case"link":sa("error",t),sa("load",t);break;case"details":sa("toggle",t);break;case"input":sa("invalid",t),Lu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":sa("invalid",t);break;case"textarea":sa("invalid",t),_u(t,n.value,n.defaultValue,n.children)}e=n.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||n.suppressHydrationWarning===!0||Qf(t.textContent,e)?(n.popover!=null&&(sa("beforetoggle",t),sa("toggle",t)),n.onScroll!=null&&sa("scroll",t),n.onScrollEnd!=null&&sa("scrollend",t),n.onClick!=null&&(t.onclick=Kt),t=!0):t=!1,t||ye(a,!0)}function Sc(a){for(Ga=a.return;Ga;)switch(Ga.tag){case 5:case 31:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:Ga=Ga.return}}function zn(a){if(a!==Ga)return!1;if(!ra)return Sc(a),ra=!0,!1;var t=a.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=a.type,e=!(e!=="form"&&e!=="button")||Cr(a.type,a.memoizedProps)),e=!e),e&&Na&&ye(a),Sc(a),t===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));Na=Ff(a)}else if(t===31){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));Na=Ff(a)}else t===27?(t=Na,Ae(a.type)?(a=Lr,Lr=null,Na=a):Na=t):Na=Ga?zt(a.stateNode.nextSibling):null;return!0}function We(){Na=Ga=null,ra=!1}function ml(){var a=me;return a!==null&&(it===null?it=a:it.push.apply(it,a),me=null),a}function di(a){me===null?me=[a]:me.push(a)}var yl=w(null),Ve=null,Wt=null;function ge(a,t,e){Y(yl,t._currentValue),t._currentValue=e}function Vt(a){a._currentValue=yl.current,U(yl)}function gl(a,t,e){for(;a!==null;){var n=a.alternate;if((a.childLanes&t)!==t?(a.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),a===e)break;a=a.return}}function bl(a,t,e,n){var i=a.child;for(i!==null&&(i.return=a);i!==null;){var s=i.dependencies;if(s!==null){var r=i.child;s=s.firstContext;a:for(;s!==null;){var f=s;s=i;for(var g=0;g<t.length;g++)if(f.context===t[g]){s.lanes|=e,f=s.alternate,f!==null&&(f.lanes|=e),gl(s.return,e,a),n||(r=null);break a}s=f.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(u(341));r.lanes|=e,s=r.alternate,s!==null&&(s.lanes|=e),gl(r,e,a),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===a){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function Tn(a,t,e,n){a=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var f=i.type;ct(i.pendingProps.value,r.value)||(a!==null?a.push(f):a=[f])}}else if(i===ha.current){if(r=i.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(a!==null?a.push(qi):a=[qi])}i=i.return}a!==null&&bl(t,a,e,n),t.flags|=262144}function ks(a){for(a=a.firstContext;a!==null;){if(!ct(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Je(a){Ve=a,Wt=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function Za(a){return zc(Ve,a)}function js(a,t){return Ve===null&&Je(a),zc(a,t)}function zc(a,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Wt===null){if(a===null)throw Error(u(308));Wt=t,a.dependencies={lanes:0,firstContext:t},a.flags|=524288}else Wt=Wt.next=t;return e}var Rm=typeof AbortController<"u"?AbortController:function(){var a=[],t=this.signal={aborted:!1,addEventListener:function(e,n){a.push(n)}};this.abort=function(){t.aborted=!0,a.forEach(function(e){return e()})}},Bm=l.unstable_scheduleCallback,Dm=l.unstable_NormalPriority,Oa={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vl(){return{controller:new Rm,data:new Map,refCount:0}}function hi(a){a.refCount--,a.refCount===0&&Bm(Dm,function(){a.controller.abort()})}var mi=null,xl=0,En=0,Mn=null;function Om(a,t){if(mi===null){var e=mi=[];xl=0,En=jr(),Mn={status:"pending",value:void 0,then:function(n){e.push(n)}}}return xl++,t.then(Tc,Tc),t}function Tc(){if(--xl===0&&mi!==null){Mn!==null&&(Mn.status="fulfilled");var a=mi;mi=null,En=0,Mn=null;for(var t=0;t<a.length;t++)(0,a[t])()}}function Lm(a,t){var e=[],n={status:"pending",value:null,reason:null,then:function(i){e.push(i)}};return a.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<e.length;i++)(0,e[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<e.length;i++)(0,e[i])(void 0)}),n}var Ec=D.S;D.S=function(a,t){ff=lt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Om(a,t),Ec!==null&&Ec(a,t)};var Fe=w(null);function wl(){var a=Fe.current;return a!==null?a:ka.pooledCache}function Ns(a,t){t===null?Y(Fe,Fe.current):Y(Fe,t.pool)}function Mc(){var a=wl();return a===null?null:{parent:Oa._currentValue,pool:a}}var An=Error(u(460)),kl=Error(u(474)),Ss=Error(u(542)),zs={then:function(){}};function Ac(a){return a=a.status,a==="fulfilled"||a==="rejected"}function Pc(a,t,e){switch(e=a[e],e===void 0?a.push(t):e!==t&&(t.then(Kt,Kt),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw a=t.reason,Rc(a),a;default:if(typeof t.status=="string")t.then(Kt,Kt);else{if(a=ka,a!==null&&100<a.shellSuspendCounter)throw Error(u(482));a=t,a.status="pending",a.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw a=t.reason,Rc(a),a}throw Ie=t,An}}function $e(a){try{var t=a._init;return t(a._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ie=e,An):e}}var Ie=null;function Cc(){if(Ie===null)throw Error(u(459));var a=Ie;return Ie=null,a}function Rc(a){if(a===An||a===Ss)throw Error(u(483))}var Pn=null,yi=0;function Ts(a){var t=yi;return yi+=1,Pn===null&&(Pn=[]),Pc(Pn,a,t)}function gi(a,t){t=t.props.ref,a.ref=t!==void 0?t:null}function Es(a,t){throw t.$$typeof===B?Error(u(525)):(a=Object.prototype.toString.call(t),Error(u(31,a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)))}function Bc(a){function t(j,x){if(a){var N=j.deletions;N===null?(j.deletions=[x],j.flags|=16):N.push(x)}}function e(j,x){if(!a)return null;for(;x!==null;)t(j,x),x=x.sibling;return null}function n(j){for(var x=new Map;j!==null;)j.key!==null?x.set(j.key,j):x.set(j.index,j),j=j.sibling;return x}function i(j,x){return j=Zt(j,x),j.index=0,j.sibling=null,j}function s(j,x,N){return j.index=N,a?(N=j.alternate,N!==null?(N=N.index,N<x?(j.flags|=67108866,x):N):(j.flags|=67108866,x)):(j.flags|=1048576,x)}function r(j){return a&&j.alternate===null&&(j.flags|=67108866),j}function f(j,x,N,O){return x===null||x.tag!==6?(x=cl(N,j.mode,O),x.return=j,x):(x=i(x,N),x.return=j,x)}function g(j,x,N,O){var W=N.type;return W===R?C(j,x,N.props.children,O,N.key):x!==null&&(x.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Ta&&$e(W)===x.type)?(x=i(x,N.props),gi(x,N),x.return=j,x):(x=xs(N.type,N.key,N.props,null,j.mode,O),gi(x,N),x.return=j,x)}function S(j,x,N,O){return x===null||x.tag!==4||x.stateNode.containerInfo!==N.containerInfo||x.stateNode.implementation!==N.implementation?(x=pl(N,j.mode,O),x.return=j,x):(x=i(x,N.children||[]),x.return=j,x)}function C(j,x,N,O,W){return x===null||x.tag!==7?(x=Xe(N,j.mode,O,W),x.return=j,x):(x=i(x,N),x.return=j,x)}function L(j,x,N){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=cl(""+x,j.mode,N),x.return=j,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case z:return N=xs(x.type,x.key,x.props,null,j.mode,N),gi(N,x),N.return=j,N;case M:return x=pl(x,j.mode,N),x.return=j,x;case Ta:return x=$e(x),L(j,x,N)}if(Pt(x)||$a(x))return x=Xe(x,j.mode,N,null),x.return=j,x;if(typeof x.then=="function")return L(j,Ts(x),N);if(x.$$typeof===X)return L(j,js(j,x),N);Es(j,x)}return null}function E(j,x,N,O){var W=x!==null?x.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return W!==null?null:f(j,x,""+N,O);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case z:return N.key===W?g(j,x,N,O):null;case M:return N.key===W?S(j,x,N,O):null;case Ta:return N=$e(N),E(j,x,N,O)}if(Pt(N)||$a(N))return W!==null?null:C(j,x,N,O,null);if(typeof N.then=="function")return E(j,x,Ts(N),O);if(N.$$typeof===X)return E(j,x,js(j,N),O);Es(j,N)}return null}function P(j,x,N,O,W){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return j=j.get(N)||null,f(x,j,""+O,W);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case z:return j=j.get(O.key===null?N:O.key)||null,g(x,j,O,W);case M:return j=j.get(O.key===null?N:O.key)||null,S(x,j,O,W);case Ta:return O=$e(O),P(j,x,N,O,W)}if(Pt(O)||$a(O))return j=j.get(N)||null,C(x,j,O,W,null);if(typeof O.then=="function")return P(j,x,N,Ts(O),W);if(O.$$typeof===X)return P(j,x,N,js(x,O),W);Es(x,O)}return null}function K(j,x,N,O){for(var W=null,pa=null,Z=x,ta=x=0,la=null;Z!==null&&ta<N.length;ta++){Z.index>ta?(la=Z,Z=null):la=Z.sibling;var fa=E(j,Z,N[ta],O);if(fa===null){Z===null&&(Z=la);break}a&&Z&&fa.alternate===null&&t(j,Z),x=s(fa,x,ta),pa===null?W=fa:pa.sibling=fa,pa=fa,Z=la}if(ta===N.length)return e(j,Z),ra&&Xt(j,ta),W;if(Z===null){for(;ta<N.length;ta++)Z=L(j,N[ta],O),Z!==null&&(x=s(Z,x,ta),pa===null?W=Z:pa.sibling=Z,pa=Z);return ra&&Xt(j,ta),W}for(Z=n(Z);ta<N.length;ta++)la=P(Z,j,ta,N[ta],O),la!==null&&(a&&la.alternate!==null&&Z.delete(la.key===null?ta:la.key),x=s(la,x,ta),pa===null?W=la:pa.sibling=la,pa=la);return a&&Z.forEach(function(De){return t(j,De)}),ra&&Xt(j,ta),W}function V(j,x,N,O){if(N==null)throw Error(u(151));for(var W=null,pa=null,Z=x,ta=x=0,la=null,fa=N.next();Z!==null&&!fa.done;ta++,fa=N.next()){Z.index>ta?(la=Z,Z=null):la=Z.sibling;var De=E(j,Z,fa.value,O);if(De===null){Z===null&&(Z=la);break}a&&Z&&De.alternate===null&&t(j,Z),x=s(De,x,ta),pa===null?W=De:pa.sibling=De,pa=De,Z=la}if(fa.done)return e(j,Z),ra&&Xt(j,ta),W;if(Z===null){for(;!fa.done;ta++,fa=N.next())fa=L(j,fa.value,O),fa!==null&&(x=s(fa,x,ta),pa===null?W=fa:pa.sibling=fa,pa=fa);return ra&&Xt(j,ta),W}for(Z=n(Z);!fa.done;ta++,fa=N.next())fa=P(Z,j,ta,fa.value,O),fa!==null&&(a&&fa.alternate!==null&&Z.delete(fa.key===null?ta:fa.key),x=s(fa,x,ta),pa===null?W=fa:pa.sibling=fa,pa=fa);return a&&Z.forEach(function(W0){return t(j,W0)}),ra&&Xt(j,ta),W}function xa(j,x,N,O){if(typeof N=="object"&&N!==null&&N.type===R&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case z:a:{for(var W=N.key;x!==null;){if(x.key===W){if(W=N.type,W===R){if(x.tag===7){e(j,x.sibling),O=i(x,N.props.children),O.return=j,j=O;break a}}else if(x.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Ta&&$e(W)===x.type){e(j,x.sibling),O=i(x,N.props),gi(O,N),O.return=j,j=O;break a}e(j,x);break}else t(j,x);x=x.sibling}N.type===R?(O=Xe(N.props.children,j.mode,O,N.key),O.return=j,j=O):(O=xs(N.type,N.key,N.props,null,j.mode,O),gi(O,N),O.return=j,j=O)}return r(j);case M:a:{for(W=N.key;x!==null;){if(x.key===W)if(x.tag===4&&x.stateNode.containerInfo===N.containerInfo&&x.stateNode.implementation===N.implementation){e(j,x.sibling),O=i(x,N.children||[]),O.return=j,j=O;break a}else{e(j,x);break}else t(j,x);x=x.sibling}O=pl(N,j.mode,O),O.return=j,j=O}return r(j);case Ta:return N=$e(N),xa(j,x,N,O)}if(Pt(N))return K(j,x,N,O);if($a(N)){if(W=$a(N),typeof W!="function")throw Error(u(150));return N=W.call(N),V(j,x,N,O)}if(typeof N.then=="function")return xa(j,x,Ts(N),O);if(N.$$typeof===X)return xa(j,x,js(j,N),O);Es(j,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,x!==null&&x.tag===6?(e(j,x.sibling),O=i(x,N),O.return=j,j=O):(e(j,x),O=cl(N,j.mode,O),O.return=j,j=O),r(j)):e(j,x)}return function(j,x,N,O){try{yi=0;var W=xa(j,x,N,O);return Pn=null,W}catch(Z){if(Z===An||Z===Ss)throw Z;var pa=pt(29,Z,null,j.mode);return pa.lanes=O,pa.return=j,pa}}}var an=Bc(!0),Dc=Bc(!1),be=!1;function jl(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nl(a,t){a=a.updateQueue,t.updateQueue===a&&(t.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function ve(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function xe(a,t,e){var n=a.updateQueue;if(n===null)return null;if(n=n.shared,(da&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=vs(a),bc(a,null,e),t}return bs(a,n,t,e),vs(a)}function bi(a,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var n=t.lanes;n&=a.pendingLanes,e|=n,t.lanes=e,zu(a,e)}}function Sl(a,t){var e=a.updateQueue,n=a.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var i=null,s=null;if(e=e.firstBaseUpdate,e!==null){do{var r={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};s===null?i=s=r:s=s.next=r,e=e.next}while(e!==null);s===null?i=s=t:s=s.next=t}else i=s=t;e={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},a.updateQueue=e;return}a=e.lastBaseUpdate,a===null?e.firstBaseUpdate=t:a.next=t,e.lastBaseUpdate=t}var zl=!1;function vi(){if(zl){var a=Mn;if(a!==null)throw a}}function xi(a,t,e,n){zl=!1;var i=a.updateQueue;be=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var g=f,S=g.next;g.next=null,r===null?s=S:r.next=S,r=g;var C=a.alternate;C!==null&&(C=C.updateQueue,f=C.lastBaseUpdate,f!==r&&(f===null?C.firstBaseUpdate=S:f.next=S,C.lastBaseUpdate=g))}if(s!==null){var L=i.baseState;r=0,C=S=g=null,f=s;do{var E=f.lane&-536870913,P=E!==f.lane;if(P?(oa&E)===E:(n&E)===E){E!==0&&E===En&&(zl=!0),C!==null&&(C=C.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});a:{var K=a,V=f;E=t;var xa=e;switch(V.tag){case 1:if(K=V.payload,typeof K=="function"){L=K.call(xa,L,E);break a}L=K;break a;case 3:K.flags=K.flags&-65537|128;case 0:if(K=V.payload,E=typeof K=="function"?K.call(xa,L,E):K,E==null)break a;L=k({},L,E);break a;case 2:be=!0}}E=f.callback,E!==null&&(a.flags|=64,P&&(a.flags|=8192),P=i.callbacks,P===null?i.callbacks=[E]:P.push(E))}else P={lane:E,tag:f.tag,payload:f.payload,callback:f.callback,next:null},C===null?(S=C=P,g=L):C=C.next=P,r|=E;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;P=f,f=P.next,P.next=null,i.lastBaseUpdate=P,i.shared.pending=null}}while(!0);C===null&&(g=L),i.baseState=g,i.firstBaseUpdate=S,i.lastBaseUpdate=C,s===null&&(i.shared.lanes=0),Se|=r,a.lanes=r,a.memoizedState=L}}function Oc(a,t){if(typeof a!="function")throw Error(u(191,a));a.call(t)}function Lc(a,t){var e=a.callbacks;if(e!==null)for(a.callbacks=null,a=0;a<e.length;a++)Oc(e[a],t)}var Cn=w(null),Ms=w(0);function Uc(a,t){a=ie,Y(Ms,a),Y(Cn,t),ie=a|t.baseLanes}function Tl(){Y(Ms,ie),Y(Cn,Cn.current)}function El(){ie=Ms.current,U(Cn),U(Ms)}var ft=w(null),St=null;function we(a){var t=a.alternate;Y(Ra,Ra.current&1),Y(ft,a),St===null&&(t===null||Cn.current!==null||t.memoizedState!==null)&&(St=a)}function Ml(a){Y(Ra,Ra.current),Y(ft,a),St===null&&(St=a)}function _c(a){a.tag===22?(Y(Ra,Ra.current),Y(ft,a),St===null&&(St=a)):ke()}function ke(){Y(Ra,Ra.current),Y(ft,ft.current)}function dt(a){U(ft),St===a&&(St=null),U(Ra)}var Ra=w(0);function As(a){for(var t=a;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Dr(e)||Or(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jt=0,aa=null,ba=null,La=null,Ps=!1,Rn=!1,tn=!1,Cs=0,wi=0,Bn=null,Um=0;function Ma(){throw Error(u(321))}function Al(a,t){if(t===null)return!1;for(var e=0;e<t.length&&e<a.length;e++)if(!ct(a[e],t[e]))return!1;return!0}function Pl(a,t,e,n,i,s){return Jt=s,aa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=a===null||a.memoizedState===null?kp:Zl,tn=!1,s=e(n,i),tn=!1,Rn&&(s=Hc(t,e,n,i)),qc(a),s}function qc(a){D.H=Ni;var t=ba!==null&&ba.next!==null;if(Jt=0,La=ba=aa=null,Ps=!1,wi=0,Bn=null,t)throw Error(u(300));a===null||Ua||(a=a.dependencies,a!==null&&ks(a)&&(Ua=!0))}function Hc(a,t,e,n){aa=a;var i=0;do{if(Rn&&(Bn=null),wi=0,Rn=!1,25<=i)throw Error(u(301));if(i+=1,La=ba=null,a.updateQueue!=null){var s=a.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=jp,s=t(e,n)}while(Rn);return s}function _m(){var a=D.H,t=a.useState()[0];return t=typeof t.then=="function"?ki(t):t,a=a.useState()[0],(ba!==null?ba.memoizedState:null)!==a&&(aa.flags|=1024),t}function Cl(){var a=Cs!==0;return Cs=0,a}function Rl(a,t,e){t.updateQueue=a.updateQueue,t.flags&=-2053,a.lanes&=~e}function Bl(a){if(Ps){for(a=a.memoizedState;a!==null;){var t=a.queue;t!==null&&(t.pending=null),a=a.next}Ps=!1}Jt=0,La=ba=aa=null,Rn=!1,wi=Cs=0,Bn=null}function Fa(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return La===null?aa.memoizedState=La=a:La=La.next=a,La}function Ba(){if(ba===null){var a=aa.alternate;a=a!==null?a.memoizedState:null}else a=ba.next;var t=La===null?aa.memoizedState:La.next;if(t!==null)La=t,ba=a;else{if(a===null)throw aa.alternate===null?Error(u(467)):Error(u(310));ba=a,a={memoizedState:ba.memoizedState,baseState:ba.baseState,baseQueue:ba.baseQueue,queue:ba.queue,next:null},La===null?aa.memoizedState=La=a:La=La.next=a}return La}function Rs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ki(a){var t=wi;return wi+=1,Bn===null&&(Bn=[]),a=Pc(Bn,a,t),t=aa,(La===null?t.memoizedState:La.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?kp:Zl),a}function Bs(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return ki(a);if(a.$$typeof===X)return Za(a)}throw Error(u(438,String(a)))}function Dl(a){var t=null,e=aa.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var n=aa.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=Rs(),aa.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(a),n=0;n<a;n++)e[n]=gt;return t.index++,e}function Ft(a,t){return typeof t=="function"?t(a):t}function Ds(a){var t=Ba();return Ol(t,ba,a)}function Ol(a,t,e){var n=a.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=a.baseQueue,s=n.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}t.baseQueue=i=s,n.pending=null}if(s=a.baseState,i===null)a.memoizedState=s;else{t=i.next;var f=r=null,g=null,S=t,C=!1;do{var L=S.lane&-536870913;if(L!==S.lane?(oa&L)===L:(Jt&L)===L){var E=S.revertLane;if(E===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),L===En&&(C=!0);else if((Jt&E)===E){S=S.next,E===En&&(C=!0);continue}else L={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},g===null?(f=g=L,r=s):g=g.next=L,aa.lanes|=E,Se|=E;L=S.action,tn&&e(s,L),s=S.hasEagerState?S.eagerState:e(s,L)}else E={lane:L,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},g===null?(f=g=E,r=s):g=g.next=E,aa.lanes|=L,Se|=L;S=S.next}while(S!==null&&S!==t);if(g===null?r=s:g.next=f,!ct(s,a.memoizedState)&&(Ua=!0,C&&(e=Mn,e!==null)))throw e;a.memoizedState=s,a.baseState=r,a.baseQueue=g,n.lastRenderedState=s}return i===null&&(n.lanes=0),[a.memoizedState,n.dispatch]}function Ll(a){var t=Ba(),e=t.queue;if(e===null)throw Error(u(311));e.lastRenderedReducer=a;var n=e.dispatch,i=e.pending,s=t.memoizedState;if(i!==null){e.pending=null;var r=i=i.next;do s=a(s,r.action),r=r.next;while(r!==i);ct(s,t.memoizedState)||(Ua=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),e.lastRenderedState=s}return[s,n]}function Qc(a,t,e){var n=aa,i=Ba(),s=ra;if(s){if(e===void 0)throw Error(u(407));e=e()}else e=t();var r=!ct((ba||i).memoizedState,e);if(r&&(i.memoizedState=e,Ua=!0),i=i.queue,ql(Gc.bind(null,n,i,a),[a]),i.getSnapshot!==t||r||La!==null&&La.memoizedState.tag&1){if(n.flags|=2048,Dn(9,{destroy:void 0},Kc.bind(null,n,i,e,t),null),ka===null)throw Error(u(349));s||(Jt&127)!==0||Yc(n,t,e)}return e}function Yc(a,t,e){a.flags|=16384,a={getSnapshot:t,value:e},t=aa.updateQueue,t===null?(t=Rs(),aa.updateQueue=t,t.stores=[a]):(e=t.stores,e===null?t.stores=[a]:e.push(a))}function Kc(a,t,e,n){t.value=e,t.getSnapshot=n,Zc(t)&&Xc(a)}function Gc(a,t,e){return e(function(){Zc(t)&&Xc(a)})}function Zc(a){var t=a.getSnapshot;a=a.value;try{var e=t();return!ct(a,e)}catch{return!0}}function Xc(a){var t=Ze(a,2);t!==null&&st(t,a,2)}function Ul(a){var t=Fa();if(typeof a=="function"){var e=a;if(a=e(),tn){pe(!0);try{e()}finally{pe(!1)}}}return t.memoizedState=t.baseState=a,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:a},t}function Wc(a,t,e,n){return a.baseState=e,Ol(a,ba,typeof n=="function"?n:Ft)}function qm(a,t,e,n,i){if(Us(a))throw Error(u(485));if(a=t.action,a!==null){var s={payload:i,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};D.T!==null?e(!0):s.isTransition=!1,n(s),e=t.pending,e===null?(s.next=t.pending=s,Vc(t,s)):(s.next=e.next,t.pending=e.next=s)}}function Vc(a,t){var e=t.action,n=t.payload,i=a.state;if(t.isTransition){var s=D.T,r={};D.T=r;try{var f=e(i,n),g=D.S;g!==null&&g(r,f),Jc(a,t,f)}catch(S){_l(a,t,S)}finally{s!==null&&r.types!==null&&(s.types=r.types),D.T=s}}else try{s=e(i,n),Jc(a,t,s)}catch(S){_l(a,t,S)}}function Jc(a,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(n){Fc(a,t,n)},function(n){return _l(a,t,n)}):Fc(a,t,e)}function Fc(a,t,e){t.status="fulfilled",t.value=e,$c(t),a.state=e,t=a.pending,t!==null&&(e=t.next,e===t?a.pending=null:(e=e.next,t.next=e,Vc(a,e)))}function _l(a,t,e){var n=a.pending;if(a.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=e,$c(t),t=t.next;while(t!==n)}a.action=null}function $c(a){a=a.listeners;for(var t=0;t<a.length;t++)(0,a[t])()}function Ic(a,t){return t}function ap(a,t){if(ra){var e=ka.formState;if(e!==null){a:{var n=aa;if(ra){if(Na){t:{for(var i=Na,s=Nt;i.nodeType!==8;){if(!s){i=null;break t}if(i=zt(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Na=zt(i.nextSibling),n=i.data==="F!";break a}}ye(n)}n=!1}n&&(t=e[0])}}return e=Fa(),e.memoizedState=e.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ic,lastRenderedState:t},e.queue=n,e=vp.bind(null,aa,n),n.dispatch=e,n=Ul(!1),s=Gl.bind(null,aa,!1,n.queue),n=Fa(),i={state:t,dispatch:null,action:a,pending:null},n.queue=i,e=qm.bind(null,aa,i,s,e),i.dispatch=e,n.memoizedState=a,[t,e,!1]}function tp(a){var t=Ba();return ep(t,ba,a)}function ep(a,t,e){if(t=Ol(a,t,Ic)[0],a=Ds(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ki(t)}catch(r){throw r===An?Ss:r}else n=t;t=Ba();var i=t.queue,s=i.dispatch;return e!==t.memoizedState&&(aa.flags|=2048,Dn(9,{destroy:void 0},Hm.bind(null,i,e),null)),[n,s,a]}function Hm(a,t){a.action=t}function np(a){var t=Ba(),e=ba;if(e!==null)return ep(t,e,a);Ba(),t=t.memoizedState,e=Ba();var n=e.queue.dispatch;return e.memoizedState=a,[t,n,!1]}function Dn(a,t,e,n){return a={tag:a,create:e,deps:n,inst:t,next:null},t=aa.updateQueue,t===null&&(t=Rs(),aa.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=a.next=a:(n=e.next,e.next=a,a.next=n,t.lastEffect=a),a}function ip(){return Ba().memoizedState}function Os(a,t,e,n){var i=Fa();aa.flags|=a,i.memoizedState=Dn(1|t,{destroy:void 0},e,n===void 0?null:n)}function Ls(a,t,e,n){var i=Ba();n=n===void 0?null:n;var s=i.memoizedState.inst;ba!==null&&n!==null&&Al(n,ba.memoizedState.deps)?i.memoizedState=Dn(t,s,e,n):(aa.flags|=a,i.memoizedState=Dn(1|t,s,e,n))}function sp(a,t){Os(8390656,8,a,t)}function ql(a,t){Ls(2048,8,a,t)}function Qm(a){aa.flags|=4;var t=aa.updateQueue;if(t===null)t=Rs(),aa.updateQueue=t,t.events=[a];else{var e=t.events;e===null?t.events=[a]:e.push(a)}}function op(a){var t=Ba().memoizedState;return Qm({ref:t,nextImpl:a}),function(){if((da&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function lp(a,t){return Ls(4,2,a,t)}function rp(a,t){return Ls(4,4,a,t)}function up(a,t){if(typeof t=="function"){a=a();var e=t(a);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return a=a(),t.current=a,function(){t.current=null}}function cp(a,t,e){e=e!=null?e.concat([a]):null,Ls(4,4,up.bind(null,t,a),e)}function Hl(){}function pp(a,t){var e=Ba();t=t===void 0?null:t;var n=e.memoizedState;return t!==null&&Al(t,n[1])?n[0]:(e.memoizedState=[a,t],a)}function fp(a,t){var e=Ba();t=t===void 0?null:t;var n=e.memoizedState;if(t!==null&&Al(t,n[1]))return n[0];if(n=a(),tn){pe(!0);try{a()}finally{pe(!1)}}return e.memoizedState=[n,t],n}function Ql(a,t,e){return e===void 0||(Jt&1073741824)!==0&&(oa&261930)===0?a.memoizedState=t:(a.memoizedState=e,a=hf(),aa.lanes|=a,Se|=a,e)}function dp(a,t,e,n){return ct(e,t)?e:Cn.current!==null?(a=Ql(a,e,n),ct(a,t)||(Ua=!0),a):(Jt&42)===0||(Jt&1073741824)!==0&&(oa&261930)===0?(Ua=!0,a.memoizedState=e):(a=hf(),aa.lanes|=a,Se|=a,t)}function hp(a,t,e,n,i){var s=Q.p;Q.p=s!==0&&8>s?s:8;var r=D.T,f={};D.T=f,Gl(a,!1,t,e);try{var g=i(),S=D.S;if(S!==null&&S(f,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var C=Lm(g,n);ji(a,t,C,yt(a))}else ji(a,t,n,yt(a))}catch(L){ji(a,t,{then:function(){},status:"rejected",reason:L},yt())}finally{Q.p=s,r!==null&&f.types!==null&&(r.types=f.types),D.T=r}}function Ym(){}function Yl(a,t,e,n){if(a.tag!==5)throw Error(u(476));var i=mp(a).queue;hp(a,i,t,J,e===null?Ym:function(){return yp(a),e(n)})}function mp(a){var t=a.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:J},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},next:null},a.memoizedState=t,a=a.alternate,a!==null&&(a.memoizedState=t),t}function yp(a){var t=mp(a);t.next===null&&(t=a.alternate.memoizedState),ji(a,t.next.queue,{},yt())}function Kl(){return Za(qi)}function gp(){return Ba().memoizedState}function bp(){return Ba().memoizedState}function Km(a){for(var t=a.return;t!==null;){switch(t.tag){case 24:case 3:var e=yt();a=ve(e);var n=xe(t,a,e);n!==null&&(st(n,t,e),bi(n,t,e)),t={cache:vl()},a.payload=t;return}t=t.return}}function Gm(a,t,e){var n=yt();e={lane:n,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Us(a)?xp(t,e):(e=rl(a,t,e,n),e!==null&&(st(e,a,n),wp(e,t,n)))}function vp(a,t,e){var n=yt();ji(a,t,e,n)}function ji(a,t,e,n){var i={lane:n,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Us(a))xp(t,i);else{var s=a.alternate;if(a.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,f=s(r,e);if(i.hasEagerState=!0,i.eagerState=f,ct(f,r))return bs(a,t,i,0),ka===null&&gs(),!1}catch{}if(e=rl(a,t,i,n),e!==null)return st(e,a,n),wp(e,t,n),!0}return!1}function Gl(a,t,e,n){if(n={lane:2,revertLane:jr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Us(a)){if(t)throw Error(u(479))}else t=rl(a,e,n,2),t!==null&&st(t,a,2)}function Us(a){var t=a.alternate;return a===aa||t!==null&&t===aa}function xp(a,t){Rn=Ps=!0;var e=a.pending;e===null?t.next=t:(t.next=e.next,e.next=t),a.pending=t}function wp(a,t,e){if((e&4194048)!==0){var n=t.lanes;n&=a.pendingLanes,e|=n,t.lanes=e,zu(a,e)}}var Ni={readContext:Za,use:Bs,useCallback:Ma,useContext:Ma,useEffect:Ma,useImperativeHandle:Ma,useLayoutEffect:Ma,useInsertionEffect:Ma,useMemo:Ma,useReducer:Ma,useRef:Ma,useState:Ma,useDebugValue:Ma,useDeferredValue:Ma,useTransition:Ma,useSyncExternalStore:Ma,useId:Ma,useHostTransitionStatus:Ma,useFormState:Ma,useActionState:Ma,useOptimistic:Ma,useMemoCache:Ma,useCacheRefresh:Ma};Ni.useEffectEvent=Ma;var kp={readContext:Za,use:Bs,useCallback:function(a,t){return Fa().memoizedState=[a,t===void 0?null:t],a},useContext:Za,useEffect:sp,useImperativeHandle:function(a,t,e){e=e!=null?e.concat([a]):null,Os(4194308,4,up.bind(null,t,a),e)},useLayoutEffect:function(a,t){return Os(4194308,4,a,t)},useInsertionEffect:function(a,t){Os(4,2,a,t)},useMemo:function(a,t){var e=Fa();t=t===void 0?null:t;var n=a();if(tn){pe(!0);try{a()}finally{pe(!1)}}return e.memoizedState=[n,t],n},useReducer:function(a,t,e){var n=Fa();if(e!==void 0){var i=e(t);if(tn){pe(!0);try{e(t)}finally{pe(!1)}}}else i=t;return n.memoizedState=n.baseState=i,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:i},n.queue=a,a=a.dispatch=Gm.bind(null,aa,a),[n.memoizedState,a]},useRef:function(a){var t=Fa();return a={current:a},t.memoizedState=a},useState:function(a){a=Ul(a);var t=a.queue,e=vp.bind(null,aa,t);return t.dispatch=e,[a.memoizedState,e]},useDebugValue:Hl,useDeferredValue:function(a,t){var e=Fa();return Ql(e,a,t)},useTransition:function(){var a=Ul(!1);return a=hp.bind(null,aa,a.queue,!0,!1),Fa().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,t,e){var n=aa,i=Fa();if(ra){if(e===void 0)throw Error(u(407));e=e()}else{if(e=t(),ka===null)throw Error(u(349));(oa&127)!==0||Yc(n,t,e)}i.memoizedState=e;var s={value:e,getSnapshot:t};return i.queue=s,sp(Gc.bind(null,n,s,a),[a]),n.flags|=2048,Dn(9,{destroy:void 0},Kc.bind(null,n,s,e,t),null),e},useId:function(){var a=Fa(),t=ka.identifierPrefix;if(ra){var e=Ut,n=Lt;e=(n&~(1<<32-ut(n)-1)).toString(32)+e,t="_"+t+"R_"+e,e=Cs++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=Um++,t="_"+t+"r_"+e.toString(32)+"_";return a.memoizedState=t},useHostTransitionStatus:Kl,useFormState:ap,useActionState:ap,useOptimistic:function(a){var t=Fa();t.memoizedState=t.baseState=a;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=Gl.bind(null,aa,!0,e),e.dispatch=t,[a,t]},useMemoCache:Dl,useCacheRefresh:function(){return Fa().memoizedState=Km.bind(null,aa)},useEffectEvent:function(a){var t=Fa(),e={impl:a};return t.memoizedState=e,function(){if((da&2)!==0)throw Error(u(440));return e.impl.apply(void 0,arguments)}}},Zl={readContext:Za,use:Bs,useCallback:pp,useContext:Za,useEffect:ql,useImperativeHandle:cp,useInsertionEffect:lp,useLayoutEffect:rp,useMemo:fp,useReducer:Ds,useRef:ip,useState:function(){return Ds(Ft)},useDebugValue:Hl,useDeferredValue:function(a,t){var e=Ba();return dp(e,ba.memoizedState,a,t)},useTransition:function(){var a=Ds(Ft)[0],t=Ba().memoizedState;return[typeof a=="boolean"?a:ki(a),t]},useSyncExternalStore:Qc,useId:gp,useHostTransitionStatus:Kl,useFormState:tp,useActionState:tp,useOptimistic:function(a,t){var e=Ba();return Wc(e,ba,a,t)},useMemoCache:Dl,useCacheRefresh:bp};Zl.useEffectEvent=op;var jp={readContext:Za,use:Bs,useCallback:pp,useContext:Za,useEffect:ql,useImperativeHandle:cp,useInsertionEffect:lp,useLayoutEffect:rp,useMemo:fp,useReducer:Ll,useRef:ip,useState:function(){return Ll(Ft)},useDebugValue:Hl,useDeferredValue:function(a,t){var e=Ba();return ba===null?Ql(e,a,t):dp(e,ba.memoizedState,a,t)},useTransition:function(){var a=Ll(Ft)[0],t=Ba().memoizedState;return[typeof a=="boolean"?a:ki(a),t]},useSyncExternalStore:Qc,useId:gp,useHostTransitionStatus:Kl,useFormState:np,useActionState:np,useOptimistic:function(a,t){var e=Ba();return ba!==null?Wc(e,ba,a,t):(e.baseState=a,[a,e.queue.dispatch])},useMemoCache:Dl,useCacheRefresh:bp};jp.useEffectEvent=op;function Xl(a,t,e,n){t=a.memoizedState,e=e(n,t),e=e==null?t:k({},t,e),a.memoizedState=e,a.lanes===0&&(a.updateQueue.baseState=e)}var Wl={enqueueSetState:function(a,t,e){a=a._reactInternals;var n=yt(),i=ve(n);i.payload=t,e!=null&&(i.callback=e),t=xe(a,i,n),t!==null&&(st(t,a,n),bi(t,a,n))},enqueueReplaceState:function(a,t,e){a=a._reactInternals;var n=yt(),i=ve(n);i.tag=1,i.payload=t,e!=null&&(i.callback=e),t=xe(a,i,n),t!==null&&(st(t,a,n),bi(t,a,n))},enqueueForceUpdate:function(a,t){a=a._reactInternals;var e=yt(),n=ve(e);n.tag=2,t!=null&&(n.callback=t),t=xe(a,n,e),t!==null&&(st(t,a,e),bi(t,a,e))}};function Np(a,t,e,n,i,s,r){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(n,s,r):t.prototype&&t.prototype.isPureReactComponent?!ci(e,n)||!ci(i,s):!0}function Sp(a,t,e,n){a=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,n),t.state!==a&&Wl.enqueueReplaceState(t,t.state,null)}function en(a,t){var e=t;if("ref"in t){e={};for(var n in t)n!=="ref"&&(e[n]=t[n])}if(a=a.defaultProps){e===t&&(e=k({},e));for(var i in a)e[i]===void 0&&(e[i]=a[i])}return e}function zp(a){ys(a)}function Tp(a){console.error(a)}function Ep(a){ys(a)}function _s(a,t){try{var e=a.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Mp(a,t,e){try{var n=a.onCaughtError;n(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Vl(a,t,e){return e=ve(e),e.tag=3,e.payload={element:null},e.callback=function(){_s(a,t)},e}function Ap(a){return a=ve(a),a.tag=3,a}function Pp(a,t,e,n){var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;a.payload=function(){return i(s)},a.callback=function(){Mp(t,e,n)}}var r=e.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(a.callback=function(){Mp(t,e,n),typeof i!="function"&&(ze===null?ze=new Set([this]):ze.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})})}function Zm(a,t,e,n,i){if(e.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=e.alternate,t!==null&&Tn(t,e,i,!0),e=ft.current,e!==null){switch(e.tag){case 31:case 13:return St===null?Fs():e.alternate===null&&Aa===0&&(Aa=3),e.flags&=-257,e.flags|=65536,e.lanes=i,n===zs?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([n]):t.add(n),xr(a,n,i)),!1;case 22:return e.flags|=65536,n===zs?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([n]):e.add(n)),xr(a,n,i)),!1}throw Error(u(435,e.tag))}return xr(a,n,i),Fs(),!1}if(ra)return t=ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==hl&&(a=Error(u(422),{cause:n}),di(wt(a,e)))):(n!==hl&&(t=Error(u(423),{cause:n}),di(wt(t,e))),a=a.current.alternate,a.flags|=65536,i&=-i,a.lanes|=i,n=wt(n,e),i=Vl(a.stateNode,n,i),Sl(a,i),Aa!==4&&(Aa=2)),!1;var s=Error(u(520),{cause:n});if(s=wt(s,e),Ci===null?Ci=[s]:Ci.push(s),Aa!==4&&(Aa=2),t===null)return!0;n=wt(n,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,a=i&-i,e.lanes|=a,a=Vl(e.stateNode,n,a),Sl(e,a),!1;case 1:if(t=e.type,s=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ze===null||!ze.has(s))))return e.flags|=65536,i&=-i,e.lanes|=i,i=Ap(i),Pp(i,a,e,n),Sl(e,i),!1}e=e.return}while(e!==null);return!1}var Jl=Error(u(461)),Ua=!1;function Xa(a,t,e,n){t.child=a===null?Dc(t,null,e,n):an(t,a.child,e,n)}function Cp(a,t,e,n,i){e=e.render;var s=t.ref;if("ref"in n){var r={};for(var f in n)f!=="ref"&&(r[f]=n[f])}else r=n;return Je(t),n=Pl(a,t,e,r,s,i),f=Cl(),a!==null&&!Ua?(Rl(a,t,i),$t(a,t,i)):(ra&&f&&fl(t),t.flags|=1,Xa(a,t,n,i),t.child)}function Rp(a,t,e,n,i){if(a===null){var s=e.type;return typeof s=="function"&&!ul(s)&&s.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=s,Bp(a,t,s,n,i)):(a=xs(e.type,null,n,t,t.mode,i),a.ref=t.ref,a.return=t,t.child=a)}if(s=a.child,!ir(a,i)){var r=s.memoizedProps;if(e=e.compare,e=e!==null?e:ci,e(r,n)&&a.ref===t.ref)return $t(a,t,i)}return t.flags|=1,a=Zt(s,n),a.ref=t.ref,a.return=t,t.child=a}function Bp(a,t,e,n,i){if(a!==null){var s=a.memoizedProps;if(ci(s,n)&&a.ref===t.ref)if(Ua=!1,t.pendingProps=n=s,ir(a,i))(a.flags&131072)!==0&&(Ua=!0);else return t.lanes=a.lanes,$t(a,t,i)}return Fl(a,t,e,n,i)}function Dp(a,t,e,n){var i=n.children,s=a!==null?a.memoizedState:null;if(a===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|e:e,a!==null){for(n=t.child=a.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,t.child=null;return Op(a,t,s,e,n)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},a!==null&&Ns(t,s!==null?s.cachePool:null),s!==null?Uc(t,s):Tl(),_c(t);else return n=t.lanes=536870912,Op(a,t,s!==null?s.baseLanes|e:e,e,n)}else s!==null?(Ns(t,s.cachePool),Uc(t,s),ke(),t.memoizedState=null):(a!==null&&Ns(t,null),Tl(),ke());return Xa(a,t,i,e),t.child}function Si(a,t){return a!==null&&a.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Op(a,t,e,n,i){var s=wl();return s=s===null?null:{parent:Oa._currentValue,pool:s},t.memoizedState={baseLanes:e,cachePool:s},a!==null&&Ns(t,null),Tl(),_c(t),a!==null&&Tn(a,t,n,!0),t.childLanes=i,null}function qs(a,t){return t=Qs({mode:t.mode,children:t.children},a.mode),t.ref=a.ref,a.child=t,t.return=a,t}function Lp(a,t,e){return an(t,a.child,null,e),a=qs(t,t.pendingProps),a.flags|=2,dt(t),t.memoizedState=null,a}function Xm(a,t,e){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,a===null){if(ra){if(n.mode==="hidden")return a=qs(t,n),t.lanes=536870912,Si(null,a);if(Ml(t),(a=Na)?(a=Jf(a,Nt),a=a!==null&&a.data==="&"?a:null,a!==null&&(t.memoizedState={dehydrated:a,treeContext:he!==null?{id:Lt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},e=xc(a),e.return=t,t.child=e,Ga=t,Na=null)):a=null,a===null)throw ye(t);return t.lanes=536870912,null}return qs(t,n)}var s=a.memoizedState;if(s!==null){var r=s.dehydrated;if(Ml(t),i)if(t.flags&256)t.flags&=-257,t=Lp(a,t,e);else if(t.memoizedState!==null)t.child=a.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ua||Tn(a,t,e,!1),i=(e&a.childLanes)!==0,Ua||i){if(n=ka,n!==null&&(r=Tu(n,e),r!==0&&r!==s.retryLane))throw s.retryLane=r,Ze(a,r),st(n,a,r),Jl;Fs(),t=Lp(a,t,e)}else a=s.treeContext,Na=zt(r.nextSibling),Ga=t,ra=!0,me=null,Nt=!1,a!==null&&jc(t,a),t=qs(t,n),t.flags|=4096;return t}return a=Zt(a.child,{mode:n.mode,children:n.children}),a.ref=t.ref,t.child=a,a.return=t,a}function Hs(a,t){var e=t.ref;if(e===null)a!==null&&a.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(u(284));(a===null||a.ref!==e)&&(t.flags|=4194816)}}function Fl(a,t,e,n,i){return Je(t),e=Pl(a,t,e,n,void 0,i),n=Cl(),a!==null&&!Ua?(Rl(a,t,i),$t(a,t,i)):(ra&&n&&fl(t),t.flags|=1,Xa(a,t,e,i),t.child)}function Up(a,t,e,n,i,s){return Je(t),t.updateQueue=null,e=Hc(t,n,e,i),qc(a),n=Cl(),a!==null&&!Ua?(Rl(a,t,s),$t(a,t,s)):(ra&&n&&fl(t),t.flags|=1,Xa(a,t,e,s),t.child)}function _p(a,t,e,n,i){if(Je(t),t.stateNode===null){var s=jn,r=e.contextType;typeof r=="object"&&r!==null&&(s=Za(r)),s=new e(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Wl,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},jl(t),r=e.contextType,s.context=typeof r=="object"&&r!==null?Za(r):jn,s.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Xl(t,e,r,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Wl.enqueueReplaceState(s,s.state,null),xi(t,n,s,i),vi(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(a===null){s=t.stateNode;var f=t.memoizedProps,g=en(e,f);s.props=g;var S=s.context,C=e.contextType;r=jn,typeof C=="object"&&C!==null&&(r=Za(C));var L=e.getDerivedStateFromProps;C=typeof L=="function"||typeof s.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,C||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f||S!==r)&&Sp(t,s,n,r),be=!1;var E=t.memoizedState;s.state=E,xi(t,n,s,i),vi(),S=t.memoizedState,f||E!==S||be?(typeof L=="function"&&(Xl(t,e,L,n),S=t.memoizedState),(g=be||Np(t,e,g,n,E,S,r))?(C||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=S),s.props=n,s.state=S,s.context=r,n=g):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Nl(a,t),r=t.memoizedProps,C=en(e,r),s.props=C,L=t.pendingProps,E=s.context,S=e.contextType,g=jn,typeof S=="object"&&S!==null&&(g=Za(S)),f=e.getDerivedStateFromProps,(S=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==L||E!==g)&&Sp(t,s,n,g),be=!1,E=t.memoizedState,s.state=E,xi(t,n,s,i),vi();var P=t.memoizedState;r!==L||E!==P||be||a!==null&&a.dependencies!==null&&ks(a.dependencies)?(typeof f=="function"&&(Xl(t,e,f,n),P=t.memoizedState),(C=be||Np(t,e,C,n,E,P,g)||a!==null&&a.dependencies!==null&&ks(a.dependencies))?(S||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,P,g),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,P,g)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===a.memoizedProps&&E===a.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===a.memoizedProps&&E===a.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=P),s.props=n,s.state=P,s.context=g,n=C):(typeof s.componentDidUpdate!="function"||r===a.memoizedProps&&E===a.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===a.memoizedProps&&E===a.memoizedState||(t.flags|=1024),n=!1)}return s=n,Hs(a,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,e=n&&typeof e.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,a!==null&&n?(t.child=an(t,a.child,null,i),t.child=an(t,null,e,i)):Xa(a,t,e,i),t.memoizedState=s.state,a=t.child):a=$t(a,t,i),a}function qp(a,t,e,n){return We(),t.flags|=256,Xa(a,t,e,n),t.child}var $l={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Il(a){return{baseLanes:a,cachePool:Mc()}}function ar(a,t,e){return a=a!==null?a.childLanes&~e:0,t&&(a|=mt),a}function Hp(a,t,e){var n=t.pendingProps,i=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=a!==null&&a.memoizedState===null?!1:(Ra.current&2)!==0),r&&(i=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,a===null){if(ra){if(i?we(t):ke(),(a=Na)?(a=Jf(a,Nt),a=a!==null&&a.data!=="&"?a:null,a!==null&&(t.memoizedState={dehydrated:a,treeContext:he!==null?{id:Lt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},e=xc(a),e.return=t,t.child=e,Ga=t,Na=null)):a=null,a===null)throw ye(t);return Or(a)?t.lanes=32:t.lanes=536870912,null}var f=n.children;return n=n.fallback,i?(ke(),i=t.mode,f=Qs({mode:"hidden",children:f},i),n=Xe(n,i,e,null),f.return=t,n.return=t,f.sibling=n,t.child=f,n=t.child,n.memoizedState=Il(e),n.childLanes=ar(a,r,e),t.memoizedState=$l,Si(null,n)):(we(t),tr(t,f))}var g=a.memoizedState;if(g!==null&&(f=g.dehydrated,f!==null)){if(s)t.flags&256?(we(t),t.flags&=-257,t=er(a,t,e)):t.memoizedState!==null?(ke(),t.child=a.child,t.flags|=128,t=null):(ke(),f=n.fallback,i=t.mode,n=Qs({mode:"visible",children:n.children},i),f=Xe(f,i,e,null),f.flags|=2,n.return=t,f.return=t,n.sibling=f,t.child=n,an(t,a.child,null,e),n=t.child,n.memoizedState=Il(e),n.childLanes=ar(a,r,e),t.memoizedState=$l,t=Si(null,n));else if(we(t),Or(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var S=r.dgst;r=S,n=Error(u(419)),n.stack="",n.digest=r,di({value:n,source:null,stack:null}),t=er(a,t,e)}else if(Ua||Tn(a,t,e,!1),r=(e&a.childLanes)!==0,Ua||r){if(r=ka,r!==null&&(n=Tu(r,e),n!==0&&n!==g.retryLane))throw g.retryLane=n,Ze(a,n),st(r,a,n),Jl;Dr(f)||Fs(),t=er(a,t,e)}else Dr(f)?(t.flags|=192,t.child=a.child,t=null):(a=g.treeContext,Na=zt(f.nextSibling),Ga=t,ra=!0,me=null,Nt=!1,a!==null&&jc(t,a),t=tr(t,n.children),t.flags|=4096);return t}return i?(ke(),f=n.fallback,i=t.mode,g=a.child,S=g.sibling,n=Zt(g,{mode:"hidden",children:n.children}),n.subtreeFlags=g.subtreeFlags&65011712,S!==null?f=Zt(S,f):(f=Xe(f,i,e,null),f.flags|=2),f.return=t,n.return=t,n.sibling=f,t.child=n,Si(null,n),n=t.child,f=a.child.memoizedState,f===null?f=Il(e):(i=f.cachePool,i!==null?(g=Oa._currentValue,i=i.parent!==g?{parent:g,pool:g}:i):i=Mc(),f={baseLanes:f.baseLanes|e,cachePool:i}),n.memoizedState=f,n.childLanes=ar(a,r,e),t.memoizedState=$l,Si(a.child,n)):(we(t),e=a.child,a=e.sibling,e=Zt(e,{mode:"visible",children:n.children}),e.return=t,e.sibling=null,a!==null&&(r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)),t.child=e,t.memoizedState=null,e)}function tr(a,t){return t=Qs({mode:"visible",children:t},a.mode),t.return=a,a.child=t}function Qs(a,t){return a=pt(22,a,null,t),a.lanes=0,a}function er(a,t,e){return an(t,a.child,null,e),a=tr(t,t.pendingProps.children),a.flags|=2,t.memoizedState=null,a}function Qp(a,t,e){a.lanes|=t;var n=a.alternate;n!==null&&(n.lanes|=t),gl(a.return,t,e)}function nr(a,t,e,n,i,s){var r=a.memoizedState;r===null?a.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:i,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=e,r.tailMode=i,r.treeForkCount=s)}function Yp(a,t,e){var n=t.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var r=Ra.current,f=(r&2)!==0;if(f?(r=r&1|2,t.flags|=128):r&=1,Y(Ra,r),Xa(a,t,n,e),n=ra?fi:0,!f&&a!==null&&(a.flags&128)!==0)a:for(a=t.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Qp(a,e,t);else if(a.tag===19)Qp(a,e,t);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break a;for(;a.sibling===null;){if(a.return===null||a.return===t)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}switch(i){case"forwards":for(e=t.child,i=null;e!==null;)a=e.alternate,a!==null&&As(a)===null&&(i=e),e=e.sibling;e=i,e===null?(i=t.child,t.child=null):(i=e.sibling,e.sibling=null),nr(t,!1,i,e,s,n);break;case"backwards":case"unstable_legacy-backwards":for(e=null,i=t.child,t.child=null;i!==null;){if(a=i.alternate,a!==null&&As(a)===null){t.child=i;break}a=i.sibling,i.sibling=e,e=i,i=a}nr(t,!0,e,null,s,n);break;case"together":nr(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function $t(a,t,e){if(a!==null&&(t.dependencies=a.dependencies),Se|=t.lanes,(e&t.childLanes)===0)if(a!==null){if(Tn(a,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(a!==null&&t.child!==a.child)throw Error(u(153));if(t.child!==null){for(a=t.child,e=Zt(a,a.pendingProps),t.child=e,e.return=t;a.sibling!==null;)a=a.sibling,e=e.sibling=Zt(a,a.pendingProps),e.return=t;e.sibling=null}return t.child}function ir(a,t){return(a.lanes&t)!==0?!0:(a=a.dependencies,!!(a!==null&&ks(a)))}function Wm(a,t,e){switch(t.tag){case 3:Ja(t,t.stateNode.containerInfo),ge(t,Oa,a.memoizedState.cache),We();break;case 27:case 5:Fn(t);break;case 4:Ja(t,t.stateNode.containerInfo);break;case 10:ge(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ml(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(we(t),t.flags|=128,null):(e&t.child.childLanes)!==0?Hp(a,t,e):(we(t),a=$t(a,t,e),a!==null?a.sibling:null);we(t);break;case 19:var i=(a.flags&128)!==0;if(n=(e&t.childLanes)!==0,n||(Tn(a,t,e,!1),n=(e&t.childLanes)!==0),i){if(n)return Yp(a,t,e);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(Ra,Ra.current),n)break;return null;case 22:return t.lanes=0,Dp(a,t,e,t.pendingProps);case 24:ge(t,Oa,a.memoizedState.cache)}return $t(a,t,e)}function Kp(a,t,e){if(a!==null)if(a.memoizedProps!==t.pendingProps)Ua=!0;else{if(!ir(a,e)&&(t.flags&128)===0)return Ua=!1,Wm(a,t,e);Ua=(a.flags&131072)!==0}else Ua=!1,ra&&(t.flags&1048576)!==0&&kc(t,fi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var n=t.pendingProps;if(a=$e(t.elementType),t.type=a,typeof a=="function")ul(a)?(n=en(a,n),t.tag=1,t=_p(null,t,a,n,e)):(t.tag=0,t=Fl(null,t,a,n,e));else{if(a!=null){var i=a.$$typeof;if(i===ua){t.tag=11,t=Cp(null,t,a,n,e);break a}else if(i===F){t.tag=14,t=Rp(null,t,a,n,e);break a}}throw t=Qt(a)||a,Error(u(306,t,""))}}return t;case 0:return Fl(a,t,t.type,t.pendingProps,e);case 1:return n=t.type,i=en(n,t.pendingProps),_p(a,t,n,i,e);case 3:a:{if(Ja(t,t.stateNode.containerInfo),a===null)throw Error(u(387));n=t.pendingProps;var s=t.memoizedState;i=s.element,Nl(a,t),xi(t,n,null,e);var r=t.memoizedState;if(n=r.cache,ge(t,Oa,n),n!==s.cache&&bl(t,[Oa],e,!0),vi(),n=r.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=qp(a,t,n,e);break a}else if(n!==i){i=wt(Error(u(424)),t),di(i),t=qp(a,t,n,e);break a}else for(a=t.stateNode.containerInfo,a.nodeType===9?a=a.body:a=a.nodeName==="HTML"?a.ownerDocument.body:a,Na=zt(a.firstChild),Ga=t,ra=!0,me=null,Nt=!0,e=Dc(t,null,n,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(We(),n===i){t=$t(a,t,e);break a}Xa(a,t,n,e)}t=t.child}return t;case 26:return Hs(a,t),a===null?(e=ed(t.type,null,t.pendingProps,null))?t.memoizedState=e:ra||(e=t.type,a=t.pendingProps,n=io(na.current).createElement(e),n[Ka]=t,n[Ia]=a,Wa(n,e,a),Ha(n),t.stateNode=n):t.memoizedState=ed(t.type,a.memoizedProps,t.pendingProps,a.memoizedState),null;case 27:return Fn(t),a===null&&ra&&(n=t.stateNode=If(t.type,t.pendingProps,na.current),Ga=t,Nt=!0,i=Na,Ae(t.type)?(Lr=i,Na=zt(n.firstChild)):Na=i),Xa(a,t,t.pendingProps.children,e),Hs(a,t),a===null&&(t.flags|=4194304),t.child;case 5:return a===null&&ra&&((i=n=Na)&&(n=N0(n,t.type,t.pendingProps,Nt),n!==null?(t.stateNode=n,Ga=t,Na=zt(n.firstChild),Nt=!1,i=!0):i=!1),i||ye(t)),Fn(t),i=t.type,s=t.pendingProps,r=a!==null?a.memoizedProps:null,n=s.children,Cr(i,s)?n=null:r!==null&&Cr(i,r)&&(t.flags|=32),t.memoizedState!==null&&(i=Pl(a,t,_m,null,null,e),qi._currentValue=i),Hs(a,t),Xa(a,t,n,e),t.child;case 6:return a===null&&ra&&((a=e=Na)&&(e=S0(e,t.pendingProps,Nt),e!==null?(t.stateNode=e,Ga=t,Na=null,a=!0):a=!1),a||ye(t)),null;case 13:return Hp(a,t,e);case 4:return Ja(t,t.stateNode.containerInfo),n=t.pendingProps,a===null?t.child=an(t,null,n,e):Xa(a,t,n,e),t.child;case 11:return Cp(a,t,t.type,t.pendingProps,e);case 7:return Xa(a,t,t.pendingProps,e),t.child;case 8:return Xa(a,t,t.pendingProps.children,e),t.child;case 12:return Xa(a,t,t.pendingProps.children,e),t.child;case 10:return n=t.pendingProps,ge(t,t.type,n.value),Xa(a,t,n.children,e),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Je(t),i=Za(i),n=n(i),t.flags|=1,Xa(a,t,n,e),t.child;case 14:return Rp(a,t,t.type,t.pendingProps,e);case 15:return Bp(a,t,t.type,t.pendingProps,e);case 19:return Yp(a,t,e);case 31:return Xm(a,t,e);case 22:return Dp(a,t,e,t.pendingProps);case 24:return Je(t),n=Za(Oa),a===null?(i=wl(),i===null&&(i=ka,s=vl(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=e),i=s),t.memoizedState={parent:n,cache:i},jl(t),ge(t,Oa,i)):((a.lanes&e)!==0&&(Nl(a,t),xi(t,null,null,e),vi()),i=a.memoizedState,s=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ge(t,Oa,n)):(n=s.cache,ge(t,Oa,n),n!==i.cache&&bl(t,[Oa],e,!0))),Xa(a,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function It(a){a.flags|=4}function sr(a,t,e,n,i){if((t=(a.mode&32)!==0)&&(t=!1),t){if(a.flags|=16777216,(i&335544128)===i)if(a.stateNode.complete)a.flags|=8192;else if(bf())a.flags|=8192;else throw Ie=zs,kl}else a.flags&=-16777217}function Gp(a,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!ld(t))if(bf())a.flags|=8192;else throw Ie=zs,kl}function Ys(a,t){t!==null&&(a.flags|=4),a.flags&16384&&(t=a.tag!==22?Nu():536870912,a.lanes|=t,_n|=t)}function zi(a,t){if(!ra)switch(a.tailMode){case"hidden":t=a.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?a.tail=null:e.sibling=null;break;case"collapsed":e=a.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t||a.tail===null?a.tail=null:a.tail.sibling=null:n.sibling=null}}function Sa(a){var t=a.alternate!==null&&a.alternate.child===a.child,e=0,n=0;if(t)for(var i=a.child;i!==null;)e|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=a,i=i.sibling;else for(i=a.child;i!==null;)e|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=a,i=i.sibling;return a.subtreeFlags|=n,a.childLanes=e,t}function Vm(a,t,e){var n=t.pendingProps;switch(dl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sa(t),null;case 1:return Sa(t),null;case 3:return e=t.stateNode,n=null,a!==null&&(n=a.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Vt(Oa),Ca(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(a===null||a.child===null)&&(zn(t)?It(t):a===null||a.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ml())),Sa(t),null;case 26:var i=t.type,s=t.memoizedState;return a===null?(It(t),s!==null?(Sa(t),Gp(t,s)):(Sa(t),sr(t,i,null,n,e))):s?s!==a.memoizedState?(It(t),Sa(t),Gp(t,s)):(Sa(t),t.flags&=-16777217):(a=a.memoizedProps,a!==n&&It(t),Sa(t),sr(t,i,a,n,e)),null;case 27:if(as(t),e=na.current,i=t.type,a!==null&&t.stateNode!=null)a.memoizedProps!==n&&It(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Sa(t),null}a=G.current,zn(t)?Nc(t):(a=If(i,n,e),t.stateNode=a,It(t))}return Sa(t),null;case 5:if(as(t),i=t.type,a!==null&&t.stateNode!=null)a.memoizedProps!==n&&It(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Sa(t),null}if(s=G.current,zn(t))Nc(t);else{var r=io(na.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}s[Ka]=t,s[Ia]=n;a:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break a;for(;r.sibling===null;){if(r.return===null||r.return===t)break a;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;a:switch(Wa(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break a;case"img":n=!0;break a;default:n=!1}n&&It(t)}}return Sa(t),sr(t,t.type,a===null?null:a.memoizedProps,t.pendingProps,e),null;case 6:if(a&&t.stateNode!=null)a.memoizedProps!==n&&It(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(a=na.current,zn(t)){if(a=t.stateNode,e=t.memoizedProps,n=null,i=Ga,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}a[Ka]=t,a=!!(a.nodeValue===e||n!==null&&n.suppressHydrationWarning===!0||Qf(a.nodeValue,e)),a||ye(t,!0)}else a=io(a).createTextNode(n),a[Ka]=t,t.stateNode=a}return Sa(t),null;case 31:if(e=t.memoizedState,a===null||a.memoizedState!==null){if(n=zn(t),e!==null){if(a===null){if(!n)throw Error(u(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(557));a[Ka]=t}else We(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Sa(t),a=!1}else e=ml(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=e),a=!0;if(!a)return t.flags&256?(dt(t),t):(dt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Sa(t),null;case 13:if(n=t.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(i=zn(t),n!==null&&n.dehydrated!==null){if(a===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Ka]=t}else We(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Sa(t),i=!1}else i=ml(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(dt(t),t):(dt(t),null)}return dt(t),(t.flags&128)!==0?(t.lanes=e,t):(e=n!==null,a=a!==null&&a.memoizedState!==null,e&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),e!==a&&e&&(t.child.flags|=8192),Ys(t,t.updateQueue),Sa(t),null);case 4:return Ca(),a===null&&Tr(t.stateNode.containerInfo),Sa(t),null;case 10:return Vt(t.type),Sa(t),null;case 19:if(U(Ra),n=t.memoizedState,n===null)return Sa(t),null;if(i=(t.flags&128)!==0,s=n.rendering,s===null)if(i)zi(n,!1);else{if(Aa!==0||a!==null&&(a.flags&128)!==0)for(a=t.child;a!==null;){if(s=As(a),s!==null){for(t.flags|=128,zi(n,!1),a=s.updateQueue,t.updateQueue=a,Ys(t,a),t.subtreeFlags=0,a=e,e=t.child;e!==null;)vc(e,a),e=e.sibling;return Y(Ra,Ra.current&1|2),ra&&Xt(t,n.treeForkCount),t.child}a=a.sibling}n.tail!==null&&lt()>Ws&&(t.flags|=128,i=!0,zi(n,!1),t.lanes=4194304)}else{if(!i)if(a=As(s),a!==null){if(t.flags|=128,i=!0,a=a.updateQueue,t.updateQueue=a,Ys(t,a),zi(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!ra)return Sa(t),null}else 2*lt()-n.renderingStartTime>Ws&&e!==536870912&&(t.flags|=128,i=!0,zi(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(a=n.last,a!==null?a.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(a=n.tail,n.rendering=a,n.tail=a.sibling,n.renderingStartTime=lt(),a.sibling=null,e=Ra.current,Y(Ra,i?e&1|2:e&1),ra&&Xt(t,n.treeForkCount),a):(Sa(t),null);case 22:case 23:return dt(t),El(),n=t.memoizedState!==null,a!==null?a.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(e&536870912)!==0&&(t.flags&128)===0&&(Sa(t),t.subtreeFlags&6&&(t.flags|=8192)):Sa(t),e=t.updateQueue,e!==null&&Ys(t,e.retryQueue),e=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(t.flags|=2048),a!==null&&U(Fe),null;case 24:return e=null,a!==null&&(e=a.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Vt(Oa),Sa(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Jm(a,t){switch(dl(t),t.tag){case 1:return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 3:return Vt(Oa),Ca(),a=t.flags,(a&65536)!==0&&(a&128)===0?(t.flags=a&-65537|128,t):null;case 26:case 27:case 5:return as(t),null;case 31:if(t.memoizedState!==null){if(dt(t),t.alternate===null)throw Error(u(340));We()}return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 13:if(dt(t),a=t.memoizedState,a!==null&&a.dehydrated!==null){if(t.alternate===null)throw Error(u(340));We()}return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 19:return U(Ra),null;case 4:return Ca(),null;case 10:return Vt(t.type),null;case 22:case 23:return dt(t),El(),a!==null&&U(Fe),a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 24:return Vt(Oa),null;case 25:return null;default:return null}}function Zp(a,t){switch(dl(t),t.tag){case 3:Vt(Oa),Ca();break;case 26:case 27:case 5:as(t);break;case 4:Ca();break;case 31:t.memoizedState!==null&&dt(t);break;case 13:dt(t);break;case 19:U(Ra);break;case 10:Vt(t.type);break;case 22:case 23:dt(t),El(),a!==null&&U(Fe);break;case 24:Vt(Oa)}}function Ti(a,t){try{var e=t.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var i=n.next;e=i;do{if((e.tag&a)===a){n=void 0;var s=e.create,r=e.inst;n=s(),r.destroy=n}e=e.next}while(e!==i)}}catch(f){ya(t,t.return,f)}}function je(a,t,e){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&a)===a){var r=n.inst,f=r.destroy;if(f!==void 0){r.destroy=void 0,i=t;var g=e,S=f;try{S()}catch(C){ya(i,g,C)}}}n=n.next}while(n!==s)}}catch(C){ya(t,t.return,C)}}function Xp(a){var t=a.updateQueue;if(t!==null){var e=a.stateNode;try{Lc(t,e)}catch(n){ya(a,a.return,n)}}}function Wp(a,t,e){e.props=en(a.type,a.memoizedProps),e.state=a.memoizedState;try{e.componentWillUnmount()}catch(n){ya(a,t,n)}}function Ei(a,t){try{var e=a.ref;if(e!==null){switch(a.tag){case 26:case 27:case 5:var n=a.stateNode;break;case 30:n=a.stateNode;break;default:n=a.stateNode}typeof e=="function"?a.refCleanup=e(n):e.current=n}}catch(i){ya(a,t,i)}}function _t(a,t){var e=a.ref,n=a.refCleanup;if(e!==null)if(typeof n=="function")try{n()}catch(i){ya(a,t,i)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(i){ya(a,t,i)}else e.current=null}function Vp(a){var t=a.type,e=a.memoizedProps,n=a.stateNode;try{a:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&n.focus();break a;case"img":e.src?n.src=e.src:e.srcSet&&(n.srcset=e.srcSet)}}catch(i){ya(a,a.return,i)}}function or(a,t,e){try{var n=a.stateNode;b0(n,a.type,e,t),n[Ia]=t}catch(i){ya(a,a.return,i)}}function Jp(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&Ae(a.type)||a.tag===4}function lr(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||Jp(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&Ae(a.type)||a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function rr(a,t,e){var n=a.tag;if(n===5||n===6)a=a.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(a,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(a),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Kt));else if(n!==4&&(n===27&&Ae(a.type)&&(e=a.stateNode,t=null),a=a.child,a!==null))for(rr(a,t,e),a=a.sibling;a!==null;)rr(a,t,e),a=a.sibling}function Ks(a,t,e){var n=a.tag;if(n===5||n===6)a=a.stateNode,t?e.insertBefore(a,t):e.appendChild(a);else if(n!==4&&(n===27&&Ae(a.type)&&(e=a.stateNode),a=a.child,a!==null))for(Ks(a,t,e),a=a.sibling;a!==null;)Ks(a,t,e),a=a.sibling}function Fp(a){var t=a.stateNode,e=a.memoizedProps;try{for(var n=a.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Wa(t,n,e),t[Ka]=a,t[Ia]=e}catch(s){ya(a,a.return,s)}}var ae=!1,_a=!1,ur=!1,$p=typeof WeakSet=="function"?WeakSet:Set,Qa=null;function Fm(a,t){if(a=a.containerInfo,Ar=po,a=cc(a),el(a)){if("selectionStart"in a)var e={start:a.selectionStart,end:a.selectionEnd};else a:{e=(e=a.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{e.nodeType,s.nodeType}catch{e=null;break a}var r=0,f=-1,g=-1,S=0,C=0,L=a,E=null;t:for(;;){for(var P;L!==e||i!==0&&L.nodeType!==3||(f=r+i),L!==s||n!==0&&L.nodeType!==3||(g=r+n),L.nodeType===3&&(r+=L.nodeValue.length),(P=L.firstChild)!==null;)E=L,L=P;for(;;){if(L===a)break t;if(E===e&&++S===i&&(f=r),E===s&&++C===n&&(g=r),(P=L.nextSibling)!==null)break;L=E,E=L.parentNode}L=P}e=f===-1||g===-1?null:{start:f,end:g}}else e=null}e=e||{start:0,end:0}}else e=null;for(Pr={focusedElem:a,selectionRange:e},po=!1,Qa=t;Qa!==null;)if(t=Qa,a=t.child,(t.subtreeFlags&1028)!==0&&a!==null)a.return=t,Qa=a;else for(;Qa!==null;){switch(t=Qa,s=t.alternate,a=t.flags,t.tag){case 0:if((a&4)!==0&&(a=t.updateQueue,a=a!==null?a.events:null,a!==null))for(e=0;e<a.length;e++)i=a[e],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((a&1024)!==0&&s!==null){a=void 0,e=t,i=s.memoizedProps,s=s.memoizedState,n=e.stateNode;try{var K=en(e.type,i);a=n.getSnapshotBeforeUpdate(K,s),n.__reactInternalSnapshotBeforeUpdate=a}catch(V){ya(e,e.return,V)}}break;case 3:if((a&1024)!==0){if(a=t.stateNode.containerInfo,e=a.nodeType,e===9)Br(a);else if(e===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Br(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(u(163))}if(a=t.sibling,a!==null){a.return=t.return,Qa=a;break}Qa=t.return}}function Ip(a,t,e){var n=e.flags;switch(e.tag){case 0:case 11:case 15:ee(a,e),n&4&&Ti(5,e);break;case 1:if(ee(a,e),n&4)if(a=e.stateNode,t===null)try{a.componentDidMount()}catch(r){ya(e,e.return,r)}else{var i=en(e.type,t.memoizedProps);t=t.memoizedState;try{a.componentDidUpdate(i,t,a.__reactInternalSnapshotBeforeUpdate)}catch(r){ya(e,e.return,r)}}n&64&&Xp(e),n&512&&Ei(e,e.return);break;case 3:if(ee(a,e),n&64&&(a=e.updateQueue,a!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{Lc(a,t)}catch(r){ya(e,e.return,r)}}break;case 27:t===null&&n&4&&Fp(e);case 26:case 5:ee(a,e),t===null&&n&4&&Vp(e),n&512&&Ei(e,e.return);break;case 12:ee(a,e);break;case 31:ee(a,e),n&4&&ef(a,e);break;case 13:ee(a,e),n&4&&nf(a,e),n&64&&(a=e.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(e=o0.bind(null,e),z0(a,e))));break;case 22:if(n=e.memoizedState!==null||ae,!n){t=t!==null&&t.memoizedState!==null||_a,i=ae;var s=_a;ae=n,(_a=t)&&!s?ne(a,e,(e.subtreeFlags&8772)!==0):ee(a,e),ae=i,_a=s}break;case 30:break;default:ee(a,e)}}function af(a){var t=a.alternate;t!==null&&(a.alternate=null,af(t)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(t=a.stateNode,t!==null&&_o(t)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var za=null,tt=!1;function te(a,t,e){for(e=e.child;e!==null;)tf(a,t,e),e=e.sibling}function tf(a,t,e){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount($n,e)}catch{}switch(e.tag){case 26:_a||_t(e,t),te(a,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:_a||_t(e,t);var n=za,i=tt;Ae(e.type)&&(za=e.stateNode,tt=!1),te(a,t,e),Li(e.stateNode),za=n,tt=i;break;case 5:_a||_t(e,t);case 6:if(n=za,i=tt,za=null,te(a,t,e),za=n,tt=i,za!==null)if(tt)try{(za.nodeType===9?za.body:za.nodeName==="HTML"?za.ownerDocument.body:za).removeChild(e.stateNode)}catch(s){ya(e,t,s)}else try{za.removeChild(e.stateNode)}catch(s){ya(e,t,s)}break;case 18:za!==null&&(tt?(a=za,Wf(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.stateNode),Xn(a)):Wf(za,e.stateNode));break;case 4:n=za,i=tt,za=e.stateNode.containerInfo,tt=!0,te(a,t,e),za=n,tt=i;break;case 0:case 11:case 14:case 15:je(2,e,t),_a||je(4,e,t),te(a,t,e);break;case 1:_a||(_t(e,t),n=e.stateNode,typeof n.componentWillUnmount=="function"&&Wp(e,t,n)),te(a,t,e);break;case 21:te(a,t,e);break;case 22:_a=(n=_a)||e.memoizedState!==null,te(a,t,e),_a=n;break;default:te(a,t,e)}}function ef(a,t){if(t.memoizedState===null&&(a=t.alternate,a!==null&&(a=a.memoizedState,a!==null))){a=a.dehydrated;try{Xn(a)}catch(e){ya(t,t.return,e)}}}function nf(a,t){if(t.memoizedState===null&&(a=t.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{Xn(a)}catch(e){ya(t,t.return,e)}}function $m(a){switch(a.tag){case 31:case 13:case 19:var t=a.stateNode;return t===null&&(t=a.stateNode=new $p),t;case 22:return a=a.stateNode,t=a._retryCache,t===null&&(t=a._retryCache=new $p),t;default:throw Error(u(435,a.tag))}}function Gs(a,t){var e=$m(a);t.forEach(function(n){if(!e.has(n)){e.add(n);var i=l0.bind(null,a,n);n.then(i,i)}})}function et(a,t){var e=t.deletions;if(e!==null)for(var n=0;n<e.length;n++){var i=e[n],s=a,r=t,f=r;a:for(;f!==null;){switch(f.tag){case 27:if(Ae(f.type)){za=f.stateNode,tt=!1;break a}break;case 5:za=f.stateNode,tt=!1;break a;case 3:case 4:za=f.stateNode.containerInfo,tt=!0;break a}f=f.return}if(za===null)throw Error(u(160));tf(s,r,i),za=null,tt=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)sf(t,a),t=t.sibling}var Rt=null;function sf(a,t){var e=a.alternate,n=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:et(t,a),nt(a),n&4&&(je(3,a,a.return),Ti(3,a),je(5,a,a.return));break;case 1:et(t,a),nt(a),n&512&&(_a||e===null||_t(e,e.return)),n&64&&ae&&(a=a.updateQueue,a!==null&&(n=a.callbacks,n!==null&&(e=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=e===null?n:e.concat(n))));break;case 26:var i=Rt;if(et(t,a),nt(a),n&512&&(_a||e===null||_t(e,e.return)),n&4){var s=e!==null?e.memoizedState:null;if(n=a.memoizedState,e===null)if(n===null)if(a.stateNode===null){a:{n=a.type,e=a.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[ti]||s[Ka]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),Wa(s,n,e),s[Ka]=a,Ha(s),n=s;break a;case"link":var r=sd("link","href",i).get(n+(e.href||""));if(r){for(var f=0;f<r.length;f++)if(s=r[f],s.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&s.getAttribute("rel")===(e.rel==null?null:e.rel)&&s.getAttribute("title")===(e.title==null?null:e.title)&&s.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){r.splice(f,1);break t}}s=i.createElement(n),Wa(s,n,e),i.head.appendChild(s);break;case"meta":if(r=sd("meta","content",i).get(n+(e.content||""))){for(f=0;f<r.length;f++)if(s=r[f],s.getAttribute("content")===(e.content==null?null:""+e.content)&&s.getAttribute("name")===(e.name==null?null:e.name)&&s.getAttribute("property")===(e.property==null?null:e.property)&&s.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&s.getAttribute("charset")===(e.charSet==null?null:e.charSet)){r.splice(f,1);break t}}s=i.createElement(n),Wa(s,n,e),i.head.appendChild(s);break;default:throw Error(u(468,n))}s[Ka]=a,Ha(s),n=s}a.stateNode=n}else od(i,a.type,a.stateNode);else a.stateNode=id(i,n,a.memoizedProps);else s!==n?(s===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):s.count--,n===null?od(i,a.type,a.stateNode):id(i,n,a.memoizedProps)):n===null&&a.stateNode!==null&&or(a,a.memoizedProps,e.memoizedProps)}break;case 27:et(t,a),nt(a),n&512&&(_a||e===null||_t(e,e.return)),e!==null&&n&4&&or(a,a.memoizedProps,e.memoizedProps);break;case 5:if(et(t,a),nt(a),n&512&&(_a||e===null||_t(e,e.return)),a.flags&32){i=a.stateNode;try{yn(i,"")}catch(K){ya(a,a.return,K)}}n&4&&a.stateNode!=null&&(i=a.memoizedProps,or(a,i,e!==null?e.memoizedProps:i)),n&1024&&(ur=!0);break;case 6:if(et(t,a),nt(a),n&4){if(a.stateNode===null)throw Error(u(162));n=a.memoizedProps,e=a.stateNode;try{e.nodeValue=n}catch(K){ya(a,a.return,K)}}break;case 3:if(lo=null,i=Rt,Rt=so(t.containerInfo),et(t,a),Rt=i,nt(a),n&4&&e!==null&&e.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(K){ya(a,a.return,K)}ur&&(ur=!1,of(a));break;case 4:n=Rt,Rt=so(a.stateNode.containerInfo),et(t,a),nt(a),Rt=n;break;case 12:et(t,a),nt(a);break;case 31:et(t,a),nt(a),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,Gs(a,n)));break;case 13:et(t,a),nt(a),a.child.flags&8192&&a.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Xs=lt()),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,Gs(a,n)));break;case 22:i=a.memoizedState!==null;var g=e!==null&&e.memoizedState!==null,S=ae,C=_a;if(ae=S||i,_a=C||g,et(t,a),_a=C,ae=S,nt(a),n&8192)a:for(t=a.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(e===null||g||ae||_a||nn(a)),e=null,t=a;;){if(t.tag===5||t.tag===26){if(e===null){g=e=t;try{if(s=g.stateNode,i)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{f=g.stateNode;var L=g.memoizedProps.style,E=L!=null&&L.hasOwnProperty("display")?L.display:null;f.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(K){ya(g,g.return,K)}}}else if(t.tag===6){if(e===null){g=t;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(K){ya(g,g.return,K)}}}else if(t.tag===18){if(e===null){g=t;try{var P=g.stateNode;i?Vf(P,!0):Vf(g.stateNode,!1)}catch(K){ya(g,g.return,K)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===a)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break a;for(;t.sibling===null;){if(t.return===null||t.return===a)break a;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=a.updateQueue,n!==null&&(e=n.retryQueue,e!==null&&(n.retryQueue=null,Gs(a,e))));break;case 19:et(t,a),nt(a),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,Gs(a,n)));break;case 30:break;case 21:break;default:et(t,a),nt(a)}}function nt(a){var t=a.flags;if(t&2){try{for(var e,n=a.return;n!==null;){if(Jp(n)){e=n;break}n=n.return}if(e==null)throw Error(u(160));switch(e.tag){case 27:var i=e.stateNode,s=lr(a);Ks(a,s,i);break;case 5:var r=e.stateNode;e.flags&32&&(yn(r,""),e.flags&=-33);var f=lr(a);Ks(a,f,r);break;case 3:case 4:var g=e.stateNode.containerInfo,S=lr(a);rr(a,S,g);break;default:throw Error(u(161))}}catch(C){ya(a,a.return,C)}a.flags&=-3}t&4096&&(a.flags&=-4097)}function of(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var t=a;of(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),a=a.sibling}}function ee(a,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ip(a,t.alternate,t),t=t.sibling}function nn(a){for(a=a.child;a!==null;){var t=a;switch(t.tag){case 0:case 11:case 14:case 15:je(4,t,t.return),nn(t);break;case 1:_t(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Wp(t,t.return,e),nn(t);break;case 27:Li(t.stateNode);case 26:case 5:_t(t,t.return),nn(t);break;case 22:t.memoizedState===null&&nn(t);break;case 30:nn(t);break;default:nn(t)}a=a.sibling}}function ne(a,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=a,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:ne(i,s,e),Ti(4,s);break;case 1:if(ne(i,s,e),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(S){ya(n,n.return,S)}if(n=s,i=n.updateQueue,i!==null){var f=n.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)Oc(g[i],f)}catch(S){ya(n,n.return,S)}}e&&r&64&&Xp(s),Ei(s,s.return);break;case 27:Fp(s);case 26:case 5:ne(i,s,e),e&&n===null&&r&4&&Vp(s),Ei(s,s.return);break;case 12:ne(i,s,e);break;case 31:ne(i,s,e),e&&r&4&&ef(i,s);break;case 13:ne(i,s,e),e&&r&4&&nf(i,s);break;case 22:s.memoizedState===null&&ne(i,s,e),Ei(s,s.return);break;case 30:break;default:ne(i,s,e)}t=t.sibling}}function cr(a,t){var e=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(a!=null&&a.refCount++,e!=null&&hi(e))}function pr(a,t){a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&hi(a))}function Bt(a,t,e,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)lf(a,t,e,n),t=t.sibling}function lf(a,t,e,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Bt(a,t,e,n),i&2048&&Ti(9,t);break;case 1:Bt(a,t,e,n);break;case 3:Bt(a,t,e,n),i&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&hi(a)));break;case 12:if(i&2048){Bt(a,t,e,n),a=t.stateNode;try{var s=t.memoizedProps,r=s.id,f=s.onPostCommit;typeof f=="function"&&f(r,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(g){ya(t,t.return,g)}}else Bt(a,t,e,n);break;case 31:Bt(a,t,e,n);break;case 13:Bt(a,t,e,n);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?Bt(a,t,e,n):Mi(a,t):s._visibility&2?Bt(a,t,e,n):(s._visibility|=2,On(a,t,e,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&cr(r,t);break;case 24:Bt(a,t,e,n),i&2048&&pr(t.alternate,t);break;default:Bt(a,t,e,n)}}function On(a,t,e,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=a,r=t,f=e,g=n,S=r.flags;switch(r.tag){case 0:case 11:case 15:On(s,r,f,g,i),Ti(8,r);break;case 23:break;case 22:var C=r.stateNode;r.memoizedState!==null?C._visibility&2?On(s,r,f,g,i):Mi(s,r):(C._visibility|=2,On(s,r,f,g,i)),i&&S&2048&&cr(r.alternate,r);break;case 24:On(s,r,f,g,i),i&&S&2048&&pr(r.alternate,r);break;default:On(s,r,f,g,i)}t=t.sibling}}function Mi(a,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=a,n=t,i=n.flags;switch(n.tag){case 22:Mi(e,n),i&2048&&cr(n.alternate,n);break;case 24:Mi(e,n),i&2048&&pr(n.alternate,n);break;default:Mi(e,n)}t=t.sibling}}var Ai=8192;function Ln(a,t,e){if(a.subtreeFlags&Ai)for(a=a.child;a!==null;)rf(a,t,e),a=a.sibling}function rf(a,t,e){switch(a.tag){case 26:Ln(a,t,e),a.flags&Ai&&a.memoizedState!==null&&U0(e,Rt,a.memoizedState,a.memoizedProps);break;case 5:Ln(a,t,e);break;case 3:case 4:var n=Rt;Rt=so(a.stateNode.containerInfo),Ln(a,t,e),Rt=n;break;case 22:a.memoizedState===null&&(n=a.alternate,n!==null&&n.memoizedState!==null?(n=Ai,Ai=16777216,Ln(a,t,e),Ai=n):Ln(a,t,e));break;default:Ln(a,t,e)}}function uf(a){var t=a.alternate;if(t!==null&&(a=t.child,a!==null)){t.child=null;do t=a.sibling,a.sibling=null,a=t;while(a!==null)}}function Pi(a){var t=a.deletions;if((a.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var n=t[e];Qa=n,pf(n,a)}uf(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)cf(a),a=a.sibling}function cf(a){switch(a.tag){case 0:case 11:case 15:Pi(a),a.flags&2048&&je(9,a,a.return);break;case 3:Pi(a);break;case 12:Pi(a);break;case 22:var t=a.stateNode;a.memoizedState!==null&&t._visibility&2&&(a.return===null||a.return.tag!==13)?(t._visibility&=-3,Zs(a)):Pi(a);break;default:Pi(a)}}function Zs(a){var t=a.deletions;if((a.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var n=t[e];Qa=n,pf(n,a)}uf(a)}for(a=a.child;a!==null;){switch(t=a,t.tag){case 0:case 11:case 15:je(8,t,t.return),Zs(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,Zs(t));break;default:Zs(t)}a=a.sibling}}function pf(a,t){for(;Qa!==null;){var e=Qa;switch(e.tag){case 0:case 11:case 15:je(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var n=e.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:hi(e.memoizedState.cache)}if(n=e.child,n!==null)n.return=e,Qa=n;else a:for(e=a;Qa!==null;){n=Qa;var i=n.sibling,s=n.return;if(af(n),n===e){Qa=null;break a}if(i!==null){i.return=s,Qa=i;break a}Qa=s}}}var Im={getCacheForType:function(a){var t=Za(Oa),e=t.data.get(a);return e===void 0&&(e=a(),t.data.set(a,e)),e},cacheSignal:function(){return Za(Oa).controller.signal}},a0=typeof WeakMap=="function"?WeakMap:Map,da=0,ka=null,ia=null,oa=0,ma=0,ht=null,Ne=!1,Un=!1,fr=!1,ie=0,Aa=0,Se=0,sn=0,dr=0,mt=0,_n=0,Ci=null,it=null,hr=!1,Xs=0,ff=0,Ws=1/0,Vs=null,ze=null,qa=0,Te=null,qn=null,se=0,mr=0,yr=null,df=null,Ri=0,gr=null;function yt(){return(da&2)!==0&&oa!==0?oa&-oa:D.T!==null?jr():Eu()}function hf(){if(mt===0)if((oa&536870912)===0||ra){var a=ns;ns<<=1,(ns&3932160)===0&&(ns=262144),mt=a}else mt=536870912;return a=ft.current,a!==null&&(a.flags|=32),mt}function st(a,t,e){(a===ka&&(ma===2||ma===9)||a.cancelPendingCommit!==null)&&(Hn(a,0),Ee(a,oa,mt,!1)),ai(a,e),((da&2)===0||a!==ka)&&(a===ka&&((da&2)===0&&(sn|=e),Aa===4&&Ee(a,oa,mt,!1)),qt(a))}function mf(a,t,e){if((da&6)!==0)throw Error(u(327));var n=!e&&(t&127)===0&&(t&a.expiredLanes)===0||In(a,t),i=n?n0(a,t):vr(a,t,!0),s=n;do{if(i===0){Un&&!n&&Ee(a,t,0,!1);break}else{if(e=a.current.alternate,s&&!t0(e)){i=vr(a,t,!1),s=!1;continue}if(i===2){if(s=t,a.errorRecoveryDisabledLanes&s)var r=0;else r=a.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;a:{var f=a;i=Ci;var g=f.current.memoizedState.isDehydrated;if(g&&(Hn(f,r).flags|=256),r=vr(f,r,!1),r!==2){if(fr&&!g){f.errorRecoveryDisabledLanes|=s,sn|=s,i=4;break a}s=it,it=i,s!==null&&(it===null?it=s:it.push.apply(it,s))}i=r}if(s=!1,i!==2)continue}}if(i===1){Hn(a,0),Ee(a,t,0,!0);break}a:{switch(n=a,s=i,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ee(n,t,mt,!Ne);break a;case 2:it=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Xs+300-lt(),10<i)){if(Ee(n,t,mt,!Ne),ss(n,0,!0)!==0)break a;se=t,n.timeoutHandle=Zf(yf.bind(null,n,e,it,Vs,hr,t,mt,sn,_n,Ne,s,"Throttled",-0,0),i);break a}yf(n,e,it,Vs,hr,t,mt,sn,_n,Ne,s,null,-0,0)}}break}while(!0);qt(a)}function yf(a,t,e,n,i,s,r,f,g,S,C,L,E,P){if(a.timeoutHandle=-1,L=t.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kt},rf(t,s,L);var K=(s&62914560)===s?Xs-lt():(s&4194048)===s?ff-lt():0;if(K=_0(L,K),K!==null){se=s,a.cancelPendingCommit=K(Nf.bind(null,a,t,s,e,n,i,r,f,g,C,L,null,E,P)),Ee(a,s,r,!S);return}}Nf(a,t,s,e,n,i,r,f,g)}function t0(a){for(var t=a;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var n=0;n<e.length;n++){var i=e[n],s=i.getSnapshot;i=i.value;try{if(!ct(s(),i))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ee(a,t,e,n){t&=~dr,t&=~sn,a.suspendedLanes|=t,a.pingedLanes&=~t,n&&(a.warmLanes|=t),n=a.expirationTimes;for(var i=t;0<i;){var s=31-ut(i),r=1<<s;n[s]=-1,i&=~r}e!==0&&Su(a,e,t)}function Js(){return(da&6)===0?(Bi(0),!1):!0}function br(){if(ia!==null){if(ma===0)var a=ia.return;else a=ia,Wt=Ve=null,Bl(a),Pn=null,yi=0,a=ia;for(;a!==null;)Zp(a.alternate,a),a=a.return;ia=null}}function Hn(a,t){var e=a.timeoutHandle;e!==-1&&(a.timeoutHandle=-1,w0(e)),e=a.cancelPendingCommit,e!==null&&(a.cancelPendingCommit=null,e()),se=0,br(),ka=a,ia=e=Zt(a.current,null),oa=t,ma=0,ht=null,Ne=!1,Un=In(a,t),fr=!1,_n=mt=dr=sn=Se=Aa=0,it=Ci=null,hr=!1,(t&8)!==0&&(t|=t&32);var n=a.entangledLanes;if(n!==0)for(a=a.entanglements,n&=t;0<n;){var i=31-ut(n),s=1<<i;t|=a[i],n&=~s}return ie=t,gs(),e}function gf(a,t){aa=null,D.H=Ni,t===An||t===Ss?(t=Cc(),ma=3):t===kl?(t=Cc(),ma=4):ma=t===Jl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,ia===null&&(Aa=1,_s(a,wt(t,a.current)))}function bf(){var a=ft.current;return a===null?!0:(oa&4194048)===oa?St===null:(oa&62914560)===oa||(oa&536870912)!==0?a===St:!1}function vf(){var a=D.H;return D.H=Ni,a===null?Ni:a}function xf(){var a=D.A;return D.A=Im,a}function Fs(){Aa=4,Ne||(oa&4194048)!==oa&&ft.current!==null||(Un=!0),(Se&134217727)===0&&(sn&134217727)===0||ka===null||Ee(ka,oa,mt,!1)}function vr(a,t,e){var n=da;da|=2;var i=vf(),s=xf();(ka!==a||oa!==t)&&(Vs=null,Hn(a,t)),t=!1;var r=Aa;a:do try{if(ma!==0&&ia!==null){var f=ia,g=ht;switch(ma){case 8:br(),r=6;break a;case 3:case 2:case 9:case 6:ft.current===null&&(t=!0);var S=ma;if(ma=0,ht=null,Qn(a,f,g,S),e&&Un){r=0;break a}break;default:S=ma,ma=0,ht=null,Qn(a,f,g,S)}}e0(),r=Aa;break}catch(C){gf(a,C)}while(!0);return t&&a.shellSuspendCounter++,Wt=Ve=null,da=n,D.H=i,D.A=s,ia===null&&(ka=null,oa=0,gs()),r}function e0(){for(;ia!==null;)wf(ia)}function n0(a,t){var e=da;da|=2;var n=vf(),i=xf();ka!==a||oa!==t?(Vs=null,Ws=lt()+500,Hn(a,t)):Un=In(a,t);a:do try{if(ma!==0&&ia!==null){t=ia;var s=ht;t:switch(ma){case 1:ma=0,ht=null,Qn(a,t,s,1);break;case 2:case 9:if(Ac(s)){ma=0,ht=null,kf(t);break}t=function(){ma!==2&&ma!==9||ka!==a||(ma=7),qt(a)},s.then(t,t);break a;case 3:ma=7;break a;case 4:ma=5;break a;case 7:Ac(s)?(ma=0,ht=null,kf(t)):(ma=0,ht=null,Qn(a,t,s,7));break;case 5:var r=null;switch(ia.tag){case 26:r=ia.memoizedState;case 5:case 27:var f=ia;if(r?ld(r):f.stateNode.complete){ma=0,ht=null;var g=f.sibling;if(g!==null)ia=g;else{var S=f.return;S!==null?(ia=S,$s(S)):ia=null}break t}}ma=0,ht=null,Qn(a,t,s,5);break;case 6:ma=0,ht=null,Qn(a,t,s,6);break;case 8:br(),Aa=6;break a;default:throw Error(u(462))}}i0();break}catch(C){gf(a,C)}while(!0);return Wt=Ve=null,D.H=n,D.A=i,da=e,ia!==null?0:(ka=null,oa=0,gs(),Aa)}function i0(){for(;ia!==null&&!Th();)wf(ia)}function wf(a){var t=Kp(a.alternate,a,ie);a.memoizedProps=a.pendingProps,t===null?$s(a):ia=t}function kf(a){var t=a,e=t.alternate;switch(t.tag){case 15:case 0:t=Up(e,t,t.pendingProps,t.type,void 0,oa);break;case 11:t=Up(e,t,t.pendingProps,t.type.render,t.ref,oa);break;case 5:Bl(t);default:Zp(e,t),t=ia=vc(t,ie),t=Kp(e,t,ie)}a.memoizedProps=a.pendingProps,t===null?$s(a):ia=t}function Qn(a,t,e,n){Wt=Ve=null,Bl(t),Pn=null,yi=0;var i=t.return;try{if(Zm(a,i,t,e,oa)){Aa=1,_s(a,wt(e,a.current)),ia=null;return}}catch(s){if(i!==null)throw ia=i,s;Aa=1,_s(a,wt(e,a.current)),ia=null;return}t.flags&32768?(ra||n===1?a=!0:Un||(oa&536870912)!==0?a=!1:(Ne=a=!0,(n===2||n===9||n===3||n===6)&&(n=ft.current,n!==null&&n.tag===13&&(n.flags|=16384))),jf(t,a)):$s(t)}function $s(a){var t=a;do{if((t.flags&32768)!==0){jf(t,Ne);return}a=t.return;var e=Vm(t.alternate,t,ie);if(e!==null){ia=e;return}if(t=t.sibling,t!==null){ia=t;return}ia=t=a}while(t!==null);Aa===0&&(Aa=5)}function jf(a,t){do{var e=Jm(a.alternate,a);if(e!==null){e.flags&=32767,ia=e;return}if(e=a.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(a=a.sibling,a!==null)){ia=a;return}ia=a=e}while(a!==null);Aa=6,ia=null}function Nf(a,t,e,n,i,s,r,f,g){a.cancelPendingCommit=null;do Is();while(qa!==0);if((da&6)!==0)throw Error(u(327));if(t!==null){if(t===a.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=ll,Lh(a,e,s,r,f,g),a===ka&&(ia=ka=null,oa=0),qn=t,Te=a,se=e,mr=s,yr=i,df=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,r0(ts,function(){return Mf(),null})):(a.callbackNode=null,a.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,i=Q.p,Q.p=2,r=da,da|=4;try{Fm(a,t,e)}finally{da=r,Q.p=i,D.T=n}}qa=1,Sf(),zf(),Tf()}}function Sf(){if(qa===1){qa=0;var a=Te,t=qn,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=D.T,D.T=null;var n=Q.p;Q.p=2;var i=da;da|=4;try{sf(t,a);var s=Pr,r=cc(a.containerInfo),f=s.focusedElem,g=s.selectionRange;if(r!==f&&f&&f.ownerDocument&&uc(f.ownerDocument.documentElement,f)){if(g!==null&&el(f)){var S=g.start,C=g.end;if(C===void 0&&(C=S),"selectionStart"in f)f.selectionStart=S,f.selectionEnd=Math.min(C,f.value.length);else{var L=f.ownerDocument||document,E=L&&L.defaultView||window;if(E.getSelection){var P=E.getSelection(),K=f.textContent.length,V=Math.min(g.start,K),xa=g.end===void 0?V:Math.min(g.end,K);!P.extend&&V>xa&&(r=xa,xa=V,V=r);var j=rc(f,V),x=rc(f,xa);if(j&&x&&(P.rangeCount!==1||P.anchorNode!==j.node||P.anchorOffset!==j.offset||P.focusNode!==x.node||P.focusOffset!==x.offset)){var N=L.createRange();N.setStart(j.node,j.offset),P.removeAllRanges(),V>xa?(P.addRange(N),P.extend(x.node,x.offset)):(N.setEnd(x.node,x.offset),P.addRange(N))}}}}for(L=[],P=f;P=P.parentNode;)P.nodeType===1&&L.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<L.length;f++){var O=L[f];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}po=!!Ar,Pr=Ar=null}finally{da=i,Q.p=n,D.T=e}}a.current=t,qa=2}}function zf(){if(qa===2){qa=0;var a=Te,t=qn,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=D.T,D.T=null;var n=Q.p;Q.p=2;var i=da;da|=4;try{Ip(a,t.alternate,t)}finally{da=i,Q.p=n,D.T=e}}qa=3}}function Tf(){if(qa===4||qa===3){qa=0,Eh();var a=Te,t=qn,e=se,n=df;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qa=5:(qa=0,qn=Te=null,Ef(a,a.pendingLanes));var i=a.pendingLanes;if(i===0&&(ze=null),Lo(e),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot($n,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=D.T,i=Q.p,Q.p=2,D.T=null;try{for(var s=a.onRecoverableError,r=0;r<n.length;r++){var f=n[r];s(f.value,{componentStack:f.stack})}}finally{D.T=t,Q.p=i}}(se&3)!==0&&Is(),qt(a),i=a.pendingLanes,(e&261930)!==0&&(i&42)!==0?a===gr?Ri++:(Ri=0,gr=a):Ri=0,Bi(0)}}function Ef(a,t){(a.pooledCacheLanes&=t)===0&&(t=a.pooledCache,t!=null&&(a.pooledCache=null,hi(t)))}function Is(){return Sf(),zf(),Tf(),Mf()}function Mf(){if(qa!==5)return!1;var a=Te,t=mr;mr=0;var e=Lo(se),n=D.T,i=Q.p;try{Q.p=32>e?32:e,D.T=null,e=yr,yr=null;var s=Te,r=se;if(qa=0,qn=Te=null,se=0,(da&6)!==0)throw Error(u(331));var f=da;if(da|=4,cf(s.current),lf(s,s.current,r,e),da=f,Bi(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot($n,s)}catch{}return!0}finally{Q.p=i,D.T=n,Ef(a,t)}}function Af(a,t,e){t=wt(e,t),t=Vl(a.stateNode,t,2),a=xe(a,t,2),a!==null&&(ai(a,2),qt(a))}function ya(a,t,e){if(a.tag===3)Af(a,a,e);else for(;t!==null;){if(t.tag===3){Af(t,a,e);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ze===null||!ze.has(n))){a=wt(e,a),e=Ap(2),n=xe(t,e,2),n!==null&&(Pp(e,n,t,a),ai(n,2),qt(n));break}}t=t.return}}function xr(a,t,e){var n=a.pingCache;if(n===null){n=a.pingCache=new a0;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(e)||(fr=!0,i.add(e),a=s0.bind(null,a,t,e),t.then(a,a))}function s0(a,t,e){var n=a.pingCache;n!==null&&n.delete(t),a.pingedLanes|=a.suspendedLanes&e,a.warmLanes&=~e,ka===a&&(oa&e)===e&&(Aa===4||Aa===3&&(oa&62914560)===oa&&300>lt()-Xs?(da&2)===0&&Hn(a,0):dr|=e,_n===oa&&(_n=0)),qt(a)}function Pf(a,t){t===0&&(t=Nu()),a=Ze(a,t),a!==null&&(ai(a,t),qt(a))}function o0(a){var t=a.memoizedState,e=0;t!==null&&(e=t.retryLane),Pf(a,e)}function l0(a,t){var e=0;switch(a.tag){case 31:case 13:var n=a.stateNode,i=a.memoizedState;i!==null&&(e=i.retryLane);break;case 19:n=a.stateNode;break;case 22:n=a.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),Pf(a,e)}function r0(a,t){return Ro(a,t)}var ao=null,Yn=null,wr=!1,to=!1,kr=!1,Me=0;function qt(a){a!==Yn&&a.next===null&&(Yn===null?ao=Yn=a:Yn=Yn.next=a),to=!0,wr||(wr=!0,c0())}function Bi(a,t){if(!kr&&to){kr=!0;do for(var e=!1,n=ao;n!==null;){if(a!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var r=n.suspendedLanes,f=n.pingedLanes;s=(1<<31-ut(42|a)+1)-1,s&=i&~(r&~f),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(e=!0,Df(n,s))}else s=oa,s=ss(n,n===ka?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||In(n,s)||(e=!0,Df(n,s));n=n.next}while(e);kr=!1}}function u0(){Cf()}function Cf(){to=wr=!1;var a=0;Me!==0&&x0()&&(a=Me);for(var t=lt(),e=null,n=ao;n!==null;){var i=n.next,s=Rf(n,t);s===0?(n.next=null,e===null?ao=i:e.next=i,i===null&&(Yn=e)):(e=n,(a!==0||(s&3)!==0)&&(to=!0)),n=i}qa!==0&&qa!==5||Bi(a),Me!==0&&(Me=0)}function Rf(a,t){for(var e=a.suspendedLanes,n=a.pingedLanes,i=a.expirationTimes,s=a.pendingLanes&-62914561;0<s;){var r=31-ut(s),f=1<<r,g=i[r];g===-1?((f&e)===0||(f&n)!==0)&&(i[r]=Oh(f,t)):g<=t&&(a.expiredLanes|=f),s&=~f}if(t=ka,e=oa,e=ss(a,a===t?e:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),n=a.callbackNode,e===0||a===t&&(ma===2||ma===9)||a.cancelPendingCommit!==null)return n!==null&&n!==null&&Bo(n),a.callbackNode=null,a.callbackPriority=0;if((e&3)===0||In(a,e)){if(t=e&-e,t===a.callbackPriority)return t;switch(n!==null&&Bo(n),Lo(e)){case 2:case 8:e=ku;break;case 32:e=ts;break;case 268435456:e=ju;break;default:e=ts}return n=Bf.bind(null,a),e=Ro(e,n),a.callbackPriority=t,a.callbackNode=e,t}return n!==null&&n!==null&&Bo(n),a.callbackPriority=2,a.callbackNode=null,2}function Bf(a,t){if(qa!==0&&qa!==5)return a.callbackNode=null,a.callbackPriority=0,null;var e=a.callbackNode;if(Is()&&a.callbackNode!==e)return null;var n=oa;return n=ss(a,a===ka?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),n===0?null:(mf(a,n,t),Rf(a,lt()),a.callbackNode!=null&&a.callbackNode===e?Bf.bind(null,a):null)}function Df(a,t){if(Is())return null;mf(a,t,!0)}function c0(){k0(function(){(da&6)!==0?Ro(wu,u0):Cf()})}function jr(){if(Me===0){var a=En;a===0&&(a=es,es<<=1,(es&261888)===0&&(es=256)),Me=a}return Me}function Of(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:us(""+a)}function Lf(a,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,a.id&&e.setAttribute("form",a.id),t.parentNode.insertBefore(e,t),a=new FormData(a),e.parentNode.removeChild(e),a}function p0(a,t,e,n,i){if(t==="submit"&&e&&e.stateNode===i){var s=Of((i[Ia]||null).action),r=n.submitter;r&&(t=(t=r[Ia]||null)?Of(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var f=new ds("action","action",null,n,i);a.push({event:f,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Me!==0){var g=r?Lf(i,r):new FormData(i);Yl(e,{pending:!0,data:g,method:i.method,action:s},null,g)}}else typeof s=="function"&&(f.preventDefault(),g=r?Lf(i,r):new FormData(i),Yl(e,{pending:!0,data:g,method:i.method,action:s},s,g))},currentTarget:i}]})}}for(var Nr=0;Nr<ol.length;Nr++){var Sr=ol[Nr],f0=Sr.toLowerCase(),d0=Sr[0].toUpperCase()+Sr.slice(1);Ct(f0,"on"+d0)}Ct(dc,"onAnimationEnd"),Ct(hc,"onAnimationIteration"),Ct(mc,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(Mm,"onTransitionRun"),Ct(Am,"onTransitionStart"),Ct(Pm,"onTransitionCancel"),Ct(yc,"onTransitionEnd"),hn("onMouseEnter",["mouseout","mouseover"]),hn("onMouseLeave",["mouseout","mouseover"]),hn("onPointerEnter",["pointerout","pointerover"]),hn("onPointerLeave",["pointerout","pointerover"]),Qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Di));function Uf(a,t){t=(t&4)!==0;for(var e=0;e<a.length;e++){var n=a[e],i=n.event;n=n.listeners;a:{var s=void 0;if(t)for(var r=n.length-1;0<=r;r--){var f=n[r],g=f.instance,S=f.currentTarget;if(f=f.listener,g!==s&&i.isPropagationStopped())break a;s=f,i.currentTarget=S;try{s(i)}catch(C){ys(C)}i.currentTarget=null,s=g}else for(r=0;r<n.length;r++){if(f=n[r],g=f.instance,S=f.currentTarget,f=f.listener,g!==s&&i.isPropagationStopped())break a;s=f,i.currentTarget=S;try{s(i)}catch(C){ys(C)}i.currentTarget=null,s=g}}}}function sa(a,t){var e=t[Uo];e===void 0&&(e=t[Uo]=new Set);var n=a+"__bubble";e.has(n)||(_f(t,a,2,!1),e.add(n))}function zr(a,t,e){var n=0;t&&(n|=4),_f(e,a,n,t)}var eo="_reactListening"+Math.random().toString(36).slice(2);function Tr(a){if(!a[eo]){a[eo]=!0,Pu.forEach(function(e){e!=="selectionchange"&&(h0.has(e)||zr(e,!1,a),zr(e,!0,a))});var t=a.nodeType===9?a:a.ownerDocument;t===null||t[eo]||(t[eo]=!0,zr("selectionchange",!1,t))}}function _f(a,t,e,n){switch(hd(t)){case 2:var i=Q0;break;case 8:i=Y0;break;default:i=Qr}e=i.bind(null,t,e,a),i=void 0,!Xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?a.addEventListener(t,e,{capture:!0,passive:i}):a.addEventListener(t,e,!0):i!==void 0?a.addEventListener(t,e,{passive:i}):a.addEventListener(t,e,!1)}function Er(a,t,e,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)a:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var f=n.stateNode.containerInfo;if(f===i)break;if(r===4)for(r=n.return;r!==null;){var g=r.tag;if((g===3||g===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;f!==null;){if(r=pn(f),r===null)return;if(g=r.tag,g===5||g===6||g===26||g===27){n=s=r;continue a}f=f.parentNode}}n=n.return}Yu(function(){var S=s,C=Go(e),L=[];a:{var E=gc.get(a);if(E!==void 0){var P=ds,K=a;switch(a){case"keypress":if(ps(e)===0)break a;case"keydown":case"keyup":P=lm;break;case"focusin":K="focus",P=Fo;break;case"focusout":K="blur",P=Fo;break;case"beforeblur":case"afterblur":P=Fo;break;case"click":if(e.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Vh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=cm;break;case dc:case hc:case mc:P=$h;break;case yc:P=fm;break;case"scroll":case"scrollend":P=Xh;break;case"wheel":P=hm;break;case"copy":case"cut":case"paste":P=am;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Wu;break;case"toggle":case"beforetoggle":P=ym}var V=(t&4)!==0,xa=!V&&(a==="scroll"||a==="scrollend"),j=V?E!==null?E+"Capture":null:E;V=[];for(var x=S,N;x!==null;){var O=x;if(N=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||N===null||j===null||(O=ni(x,j),O!=null&&V.push(Oi(x,O,N))),xa)break;x=x.return}0<V.length&&(E=new P(E,K,null,e,C),L.push({event:E,listeners:V}))}}if((t&7)===0){a:{if(E=a==="mouseover"||a==="pointerover",P=a==="mouseout"||a==="pointerout",E&&e!==Ko&&(K=e.relatedTarget||e.fromElement)&&(pn(K)||K[cn]))break a;if((P||E)&&(E=C.window===C?C:(E=C.ownerDocument)?E.defaultView||E.parentWindow:window,P?(K=e.relatedTarget||e.toElement,P=S,K=K?pn(K):null,K!==null&&(xa=m(K),V=K.tag,K!==xa||V!==5&&V!==27&&V!==6)&&(K=null)):(P=null,K=S),P!==K)){if(V=Zu,O="onMouseLeave",j="onMouseEnter",x="mouse",(a==="pointerout"||a==="pointerover")&&(V=Wu,O="onPointerLeave",j="onPointerEnter",x="pointer"),xa=P==null?E:ei(P),N=K==null?E:ei(K),E=new V(O,x+"leave",P,e,C),E.target=xa,E.relatedTarget=N,O=null,pn(C)===S&&(V=new V(j,x+"enter",K,e,C),V.target=N,V.relatedTarget=xa,O=V),xa=O,P&&K)t:{for(V=m0,j=P,x=K,N=0,O=j;O;O=V(O))N++;O=0;for(var W=x;W;W=V(W))O++;for(;0<N-O;)j=V(j),N--;for(;0<O-N;)x=V(x),O--;for(;N--;){if(j===x||x!==null&&j===x.alternate){V=j;break t}j=V(j),x=V(x)}V=null}else V=null;P!==null&&qf(L,E,P,V,!1),K!==null&&xa!==null&&qf(L,xa,K,V,!0)}}a:{if(E=S?ei(S):window,P=E.nodeName&&E.nodeName.toLowerCase(),P==="select"||P==="input"&&E.type==="file")var pa=ec;else if(ac(E))if(nc)pa=zm;else{pa=Nm;var Z=jm}else P=E.nodeName,!P||P.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?S&&Yo(S.elementType)&&(pa=ec):pa=Sm;if(pa&&(pa=pa(a,S))){tc(L,pa,e,C);break a}Z&&Z(a,E,S),a==="focusout"&&S&&E.type==="number"&&S.memoizedProps.value!=null&&Qo(E,"number",E.value)}switch(Z=S?ei(S):window,a){case"focusin":(ac(Z)||Z.contentEditable==="true")&&(xn=Z,nl=S,pi=null);break;case"focusout":pi=nl=xn=null;break;case"mousedown":il=!0;break;case"contextmenu":case"mouseup":case"dragend":il=!1,pc(L,e,C);break;case"selectionchange":if(Em)break;case"keydown":case"keyup":pc(L,e,C)}var ta;if(Io)a:{switch(a){case"compositionstart":var la="onCompositionStart";break a;case"compositionend":la="onCompositionEnd";break a;case"compositionupdate":la="onCompositionUpdate";break a}la=void 0}else vn?$u(a,e)&&(la="onCompositionEnd"):a==="keydown"&&e.keyCode===229&&(la="onCompositionStart");la&&(Vu&&e.locale!=="ko"&&(vn||la!=="onCompositionStart"?la==="onCompositionEnd"&&vn&&(ta=Ku()):(de=C,Wo="value"in de?de.value:de.textContent,vn=!0)),Z=no(S,la),0<Z.length&&(la=new Xu(la,a,null,e,C),L.push({event:la,listeners:Z}),ta?la.data=ta:(ta=Iu(e),ta!==null&&(la.data=ta)))),(ta=bm?vm(a,e):xm(a,e))&&(la=no(S,"onBeforeInput"),0<la.length&&(Z=new Xu("onBeforeInput","beforeinput",null,e,C),L.push({event:Z,listeners:la}),Z.data=ta)),p0(L,a,S,e,C)}Uf(L,t)})}function Oi(a,t,e){return{instance:a,listener:t,currentTarget:e}}function no(a,t){for(var e=t+"Capture",n=[];a!==null;){var i=a,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=ni(a,e),i!=null&&n.unshift(Oi(a,i,s)),i=ni(a,t),i!=null&&n.push(Oi(a,i,s))),a.tag===3)return n;a=a.return}return[]}function m0(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function qf(a,t,e,n,i){for(var s=t._reactName,r=[];e!==null&&e!==n;){var f=e,g=f.alternate,S=f.stateNode;if(f=f.tag,g!==null&&g===n)break;f!==5&&f!==26&&f!==27||S===null||(g=S,i?(S=ni(e,s),S!=null&&r.unshift(Oi(e,S,g))):i||(S=ni(e,s),S!=null&&r.push(Oi(e,S,g)))),e=e.return}r.length!==0&&a.push({event:t,listeners:r})}var y0=/\r\n?/g,g0=/\u0000|\uFFFD/g;function Hf(a){return(typeof a=="string"?a:""+a).replace(y0,`
`).replace(g0,"")}function Qf(a,t){return t=Hf(t),Hf(a)===t}function va(a,t,e,n,i,s){switch(e){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||yn(a,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&yn(a,""+n);break;case"className":ls(a,"class",n);break;case"tabIndex":ls(a,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ls(a,e,n);break;case"style":Hu(a,n,s);break;case"data":if(t!=="object"){ls(a,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||e!=="href")){a.removeAttribute(e);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){a.removeAttribute(e);break}n=us(""+n),a.setAttribute(e,n);break;case"action":case"formAction":if(typeof n=="function"){a.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(e==="formAction"?(t!=="input"&&va(a,t,"name",i.name,i,null),va(a,t,"formEncType",i.formEncType,i,null),va(a,t,"formMethod",i.formMethod,i,null),va(a,t,"formTarget",i.formTarget,i,null)):(va(a,t,"encType",i.encType,i,null),va(a,t,"method",i.method,i,null),va(a,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){a.removeAttribute(e);break}n=us(""+n),a.setAttribute(e,n);break;case"onClick":n!=null&&(a.onclick=Kt);break;case"onScroll":n!=null&&sa("scroll",a);break;case"onScrollEnd":n!=null&&sa("scrollend",a);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(e=n.__html,e!=null){if(i.children!=null)throw Error(u(60));a.innerHTML=e}}break;case"multiple":a.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":a.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){a.removeAttribute("xlink:href");break}e=us(""+n),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(e,""+n):a.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(e,""):a.removeAttribute(e);break;case"capture":case"download":n===!0?a.setAttribute(e,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(e,n):a.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?a.setAttribute(e,n):a.removeAttribute(e);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?a.removeAttribute(e):a.setAttribute(e,n);break;case"popover":sa("beforetoggle",a),sa("toggle",a),os(a,"popover",n);break;case"xlinkActuate":Yt(a,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Yt(a,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Yt(a,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Yt(a,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Yt(a,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Yt(a,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Yt(a,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Yt(a,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Yt(a,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":os(a,"is",n);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Gh.get(e)||e,os(a,e,n))}}function Mr(a,t,e,n,i,s){switch(e){case"style":Hu(a,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(e=n.__html,e!=null){if(i.children!=null)throw Error(u(60));a.innerHTML=e}}break;case"children":typeof n=="string"?yn(a,n):(typeof n=="number"||typeof n=="bigint")&&yn(a,""+n);break;case"onScroll":n!=null&&sa("scroll",a);break;case"onScrollEnd":n!=null&&sa("scrollend",a);break;case"onClick":n!=null&&(a.onclick=Kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cu.hasOwnProperty(e))a:{if(e[0]==="o"&&e[1]==="n"&&(i=e.endsWith("Capture"),t=e.slice(2,i?e.length-7:void 0),s=a[Ia]||null,s=s!=null?s[e]:null,typeof s=="function"&&a.removeEventListener(t,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(e in a?a[e]=null:a.hasAttribute(e)&&a.removeAttribute(e)),a.addEventListener(t,n,i);break a}e in a?a[e]=n:n===!0?a.setAttribute(e,""):os(a,e,n)}}}function Wa(a,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":sa("error",a),sa("load",a);var n=!1,i=!1,s;for(s in e)if(e.hasOwnProperty(s)){var r=e[s];if(r!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:va(a,t,s,r,e,null)}}i&&va(a,t,"srcSet",e.srcSet,e,null),n&&va(a,t,"src",e.src,e,null);return;case"input":sa("invalid",a);var f=s=r=i=null,g=null,S=null;for(n in e)if(e.hasOwnProperty(n)){var C=e[n];if(C!=null)switch(n){case"name":i=C;break;case"type":r=C;break;case"checked":g=C;break;case"defaultChecked":S=C;break;case"value":s=C;break;case"defaultValue":f=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:va(a,t,n,C,e,null)}}Lu(a,s,f,g,S,r,i,!1);return;case"select":sa("invalid",a),n=r=s=null;for(i in e)if(e.hasOwnProperty(i)&&(f=e[i],f!=null))switch(i){case"value":s=f;break;case"defaultValue":r=f;break;case"multiple":n=f;default:va(a,t,i,f,e,null)}t=s,e=r,a.multiple=!!n,t!=null?mn(a,!!n,t,!1):e!=null&&mn(a,!!n,e,!0);return;case"textarea":sa("invalid",a),s=i=n=null;for(r in e)if(e.hasOwnProperty(r)&&(f=e[r],f!=null))switch(r){case"value":n=f;break;case"defaultValue":i=f;break;case"children":s=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(u(91));break;default:va(a,t,r,f,e,null)}_u(a,n,i,s);return;case"option":for(g in e)e.hasOwnProperty(g)&&(n=e[g],n!=null)&&(g==="selected"?a.selected=n&&typeof n!="function"&&typeof n!="symbol":va(a,t,g,n,e,null));return;case"dialog":sa("beforetoggle",a),sa("toggle",a),sa("cancel",a),sa("close",a);break;case"iframe":case"object":sa("load",a);break;case"video":case"audio":for(n=0;n<Di.length;n++)sa(Di[n],a);break;case"image":sa("error",a),sa("load",a);break;case"details":sa("toggle",a);break;case"embed":case"source":case"link":sa("error",a),sa("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in e)if(e.hasOwnProperty(S)&&(n=e[S],n!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:va(a,t,S,n,e,null)}return;default:if(Yo(t)){for(C in e)e.hasOwnProperty(C)&&(n=e[C],n!==void 0&&Mr(a,t,C,n,e,void 0));return}}for(f in e)e.hasOwnProperty(f)&&(n=e[f],n!=null&&va(a,t,f,n,e,null))}function b0(a,t,e,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,r=null,f=null,g=null,S=null,C=null;for(P in e){var L=e[P];if(e.hasOwnProperty(P)&&L!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":g=L;default:n.hasOwnProperty(P)||va(a,t,P,null,n,L)}}for(var E in n){var P=n[E];if(L=e[E],n.hasOwnProperty(E)&&(P!=null||L!=null))switch(E){case"type":s=P;break;case"name":i=P;break;case"checked":S=P;break;case"defaultChecked":C=P;break;case"value":r=P;break;case"defaultValue":f=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(u(137,t));break;default:P!==L&&va(a,t,E,P,n,L)}}Ho(a,r,f,g,S,C,s,i);return;case"select":P=r=f=E=null;for(s in e)if(g=e[s],e.hasOwnProperty(s)&&g!=null)switch(s){case"value":break;case"multiple":P=g;default:n.hasOwnProperty(s)||va(a,t,s,null,n,g)}for(i in n)if(s=n[i],g=e[i],n.hasOwnProperty(i)&&(s!=null||g!=null))switch(i){case"value":E=s;break;case"defaultValue":f=s;break;case"multiple":r=s;default:s!==g&&va(a,t,i,s,n,g)}t=f,e=r,n=P,E!=null?mn(a,!!e,E,!1):!!n!=!!e&&(t!=null?mn(a,!!e,t,!0):mn(a,!!e,e?[]:"",!1));return;case"textarea":P=E=null;for(f in e)if(i=e[f],e.hasOwnProperty(f)&&i!=null&&!n.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:va(a,t,f,null,n,i)}for(r in n)if(i=n[r],s=e[r],n.hasOwnProperty(r)&&(i!=null||s!=null))switch(r){case"value":E=i;break;case"defaultValue":P=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==s&&va(a,t,r,i,n,s)}Uu(a,E,P);return;case"option":for(var K in e)E=e[K],e.hasOwnProperty(K)&&E!=null&&!n.hasOwnProperty(K)&&(K==="selected"?a.selected=!1:va(a,t,K,null,n,E));for(g in n)E=n[g],P=e[g],n.hasOwnProperty(g)&&E!==P&&(E!=null||P!=null)&&(g==="selected"?a.selected=E&&typeof E!="function"&&typeof E!="symbol":va(a,t,g,E,n,P));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in e)E=e[V],e.hasOwnProperty(V)&&E!=null&&!n.hasOwnProperty(V)&&va(a,t,V,null,n,E);for(S in n)if(E=n[S],P=e[S],n.hasOwnProperty(S)&&E!==P&&(E!=null||P!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,t));break;default:va(a,t,S,E,n,P)}return;default:if(Yo(t)){for(var xa in e)E=e[xa],e.hasOwnProperty(xa)&&E!==void 0&&!n.hasOwnProperty(xa)&&Mr(a,t,xa,void 0,n,E);for(C in n)E=n[C],P=e[C],!n.hasOwnProperty(C)||E===P||E===void 0&&P===void 0||Mr(a,t,C,E,n,P);return}}for(var j in e)E=e[j],e.hasOwnProperty(j)&&E!=null&&!n.hasOwnProperty(j)&&va(a,t,j,null,n,E);for(L in n)E=n[L],P=e[L],!n.hasOwnProperty(L)||E===P||E==null&&P==null||va(a,t,L,E,n,P)}function Yf(a){switch(a){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function v0(){if(typeof performance.getEntriesByType=="function"){for(var a=0,t=0,e=performance.getEntriesByType("resource"),n=0;n<e.length;n++){var i=e[n],s=i.transferSize,r=i.initiatorType,f=i.duration;if(s&&f&&Yf(r)){for(r=0,f=i.responseEnd,n+=1;n<e.length;n++){var g=e[n],S=g.startTime;if(S>f)break;var C=g.transferSize,L=g.initiatorType;C&&Yf(L)&&(g=g.responseEnd,r+=C*(g<f?1:(f-S)/(g-S)))}if(--n,t+=8*(s+r)/(i.duration/1e3),a++,10<a)break}}if(0<a)return t/a/1e6}return navigator.connection&&(a=navigator.connection.downlink,typeof a=="number")?a:5}var Ar=null,Pr=null;function io(a){return a.nodeType===9?a:a.ownerDocument}function Kf(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gf(a,t){if(a===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&t==="foreignObject"?0:a}function Cr(a,t){return a==="textarea"||a==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rr=null;function x0(){var a=window.event;return a&&a.type==="popstate"?a===Rr?!1:(Rr=a,!0):(Rr=null,!1)}var Zf=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,k0=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(a){return Xf.resolve(null).then(a).catch(j0)}:Zf;function j0(a){setTimeout(function(){throw a})}function Ae(a){return a==="head"}function Wf(a,t){var e=t,n=0;do{var i=e.nextSibling;if(a.removeChild(e),i&&i.nodeType===8)if(e=i.data,e==="/$"||e==="/&"){if(n===0){a.removeChild(i),Xn(t);return}n--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")n++;else if(e==="html")Li(a.ownerDocument.documentElement);else if(e==="head"){e=a.ownerDocument.head,Li(e);for(var s=e.firstChild;s;){var r=s.nextSibling,f=s.nodeName;s[ti]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&s.rel.toLowerCase()==="stylesheet"||e.removeChild(s),s=r}}else e==="body"&&Li(a.ownerDocument.body);e=i}while(e);Xn(t)}function Vf(a,t){var e=a;a=0;do{var n=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),n&&n.nodeType===8)if(e=n.data,e==="/$"){if(a===0)break;a--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||a++;e=n}while(e)}function Br(a){var t=a.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Br(e),_o(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}a.removeChild(e)}}function N0(a,t,e,n){for(;a.nodeType===1;){var i=e;if(a.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(n){if(!a[ti])switch(t){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(s=a.getAttribute("rel"),s==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(s!==i.rel||a.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||a.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||a.getAttribute("title")!==(i.title==null?null:i.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(s=a.getAttribute("src"),(s!==(i.src==null?null:i.src)||a.getAttribute("type")!==(i.type==null?null:i.type)||a.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(t==="input"&&a.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&a.getAttribute("name")===s)return a}else return a;if(a=zt(a.nextSibling),a===null)break}return null}function S0(a,t,e){if(t==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!e||(a=zt(a.nextSibling),a===null))return null;return a}function Jf(a,t){for(;a.nodeType!==8;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!t||(a=zt(a.nextSibling),a===null))return null;return a}function Dr(a){return a.data==="$?"||a.data==="$~"}function Or(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState!=="loading"}function z0(a,t){var e=a.ownerDocument;if(a.data==="$~")a._reactRetry=t;else if(a.data!=="$?"||e.readyState!=="loading")t();else{var n=function(){t(),e.removeEventListener("DOMContentLoaded",n)};e.addEventListener("DOMContentLoaded",n),a._reactRetry=n}}function zt(a){for(;a!=null;a=a.nextSibling){var t=a.nodeType;if(t===1||t===3)break;if(t===8){if(t=a.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return a}var Lr=null;function Ff(a){a=a.nextSibling;for(var t=0;a;){if(a.nodeType===8){var e=a.data;if(e==="/$"||e==="/&"){if(t===0)return zt(a.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}a=a.nextSibling}return null}function $f(a){a=a.previousSibling;for(var t=0;a;){if(a.nodeType===8){var e=a.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return a;t--}else e!=="/$"&&e!=="/&"||t++}a=a.previousSibling}return null}function If(a,t,e){switch(t=io(e),a){case"html":if(a=t.documentElement,!a)throw Error(u(452));return a;case"head":if(a=t.head,!a)throw Error(u(453));return a;case"body":if(a=t.body,!a)throw Error(u(454));return a;default:throw Error(u(451))}}function Li(a){for(var t=a.attributes;t.length;)a.removeAttributeNode(t[0]);_o(a)}var Tt=new Map,ad=new Set;function so(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var oe=Q.d;Q.d={f:T0,r:E0,D:M0,C:A0,L:P0,m:C0,X:B0,S:R0,M:D0};function T0(){var a=oe.f(),t=Js();return a||t}function E0(a){var t=fn(a);t!==null&&t.tag===5&&t.type==="form"?yp(t):oe.r(a)}var Kn=typeof document>"u"?null:document;function td(a,t,e){var n=Kn;if(n&&typeof t=="string"&&t){var i=vt(t);i='link[rel="'+a+'"][href="'+i+'"]',typeof e=="string"&&(i+='[crossorigin="'+e+'"]'),ad.has(i)||(ad.add(i),a={rel:a,crossOrigin:e,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Wa(t,"link",a),Ha(t),n.head.appendChild(t)))}}function M0(a){oe.D(a),td("dns-prefetch",a,null)}function A0(a,t){oe.C(a,t),td("preconnect",a,t)}function P0(a,t,e){oe.L(a,t,e);var n=Kn;if(n&&a&&t){var i='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&e&&e.imageSrcSet?(i+='[imagesrcset="'+vt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(i+='[imagesizes="'+vt(e.imageSizes)+'"]')):i+='[href="'+vt(a)+'"]';var s=i;switch(t){case"style":s=Gn(a);break;case"script":s=Zn(a)}Tt.has(s)||(a=k({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:a,as:t},e),Tt.set(s,a),n.querySelector(i)!==null||t==="style"&&n.querySelector(Ui(s))||t==="script"&&n.querySelector(_i(s))||(t=n.createElement("link"),Wa(t,"link",a),Ha(t),n.head.appendChild(t)))}}function C0(a,t){oe.m(a,t);var e=Kn;if(e&&a){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+vt(n)+'"][href="'+vt(a)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Zn(a)}if(!Tt.has(s)&&(a=k({rel:"modulepreload",href:a},t),Tt.set(s,a),e.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(_i(s)))return}n=e.createElement("link"),Wa(n,"link",a),Ha(n),e.head.appendChild(n)}}}function R0(a,t,e){oe.S(a,t,e);var n=Kn;if(n&&a){var i=dn(n).hoistableStyles,s=Gn(a);t=t||"default";var r=i.get(s);if(!r){var f={loading:0,preload:null};if(r=n.querySelector(Ui(s)))f.loading=5;else{a=k({rel:"stylesheet",href:a,"data-precedence":t},e),(e=Tt.get(s))&&Ur(a,e);var g=r=n.createElement("link");Ha(g),Wa(g,"link",a),g._p=new Promise(function(S,C){g.onload=S,g.onerror=C}),g.addEventListener("load",function(){f.loading|=1}),g.addEventListener("error",function(){f.loading|=2}),f.loading|=4,oo(r,t,n)}r={type:"stylesheet",instance:r,count:1,state:f},i.set(s,r)}}}function B0(a,t){oe.X(a,t);var e=Kn;if(e&&a){var n=dn(e).hoistableScripts,i=Zn(a),s=n.get(i);s||(s=e.querySelector(_i(i)),s||(a=k({src:a,async:!0},t),(t=Tt.get(i))&&_r(a,t),s=e.createElement("script"),Ha(s),Wa(s,"link",a),e.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function D0(a,t){oe.M(a,t);var e=Kn;if(e&&a){var n=dn(e).hoistableScripts,i=Zn(a),s=n.get(i);s||(s=e.querySelector(_i(i)),s||(a=k({src:a,async:!0,type:"module"},t),(t=Tt.get(i))&&_r(a,t),s=e.createElement("script"),Ha(s),Wa(s,"link",a),e.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function ed(a,t,e,n){var i=(i=na.current)?so(i):null;if(!i)throw Error(u(446));switch(a){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=Gn(e.href),e=dn(i).hoistableStyles,n=e.get(t),n||(n={type:"style",instance:null,count:0,state:null},e.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){a=Gn(e.href);var s=dn(i).hoistableStyles,r=s.get(a);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(a,r),(s=i.querySelector(Ui(a)))&&!s._p&&(r.instance=s,r.state.loading=5),Tt.has(a)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Tt.set(a,e),s||O0(i,a,e,r.state))),t&&n===null)throw Error(u(528,""));return r}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Zn(e),e=dn(i).hoistableScripts,n=e.get(t),n||(n={type:"script",instance:null,count:0,state:null},e.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,a))}}function Gn(a){return'href="'+vt(a)+'"'}function Ui(a){return'link[rel="stylesheet"]['+a+"]"}function nd(a){return k({},a,{"data-precedence":a.precedence,precedence:null})}function O0(a,t,e,n){a.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=a.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Wa(t,"link",e),Ha(t),a.head.appendChild(t))}function Zn(a){return'[src="'+vt(a)+'"]'}function _i(a){return"script[async]"+a}function id(a,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var n=a.querySelector('style[data-href~="'+vt(e.href)+'"]');if(n)return t.instance=n,Ha(n),n;var i=k({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return n=(a.ownerDocument||a).createElement("style"),Ha(n),Wa(n,"style",i),oo(n,e.precedence,a),t.instance=n;case"stylesheet":i=Gn(e.href);var s=a.querySelector(Ui(i));if(s)return t.state.loading|=4,t.instance=s,Ha(s),s;n=nd(e),(i=Tt.get(i))&&Ur(n,i),s=(a.ownerDocument||a).createElement("link"),Ha(s);var r=s;return r._p=new Promise(function(f,g){r.onload=f,r.onerror=g}),Wa(s,"link",n),t.state.loading|=4,oo(s,e.precedence,a),t.instance=s;case"script":return s=Zn(e.src),(i=a.querySelector(_i(s)))?(t.instance=i,Ha(i),i):(n=e,(i=Tt.get(s))&&(n=k({},e),_r(n,i)),a=a.ownerDocument||a,i=a.createElement("script"),Ha(i),Wa(i,"link",n),a.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,oo(n,e.precedence,a));return t.instance}function oo(a,t,e){for(var n=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,r=0;r<n.length;r++){var f=n[r];if(f.dataset.precedence===t)s=f;else if(s!==i)break}s?s.parentNode.insertBefore(a,s.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(a,t.firstChild))}function Ur(a,t){a.crossOrigin==null&&(a.crossOrigin=t.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=t.referrerPolicy),a.title==null&&(a.title=t.title)}function _r(a,t){a.crossOrigin==null&&(a.crossOrigin=t.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=t.referrerPolicy),a.integrity==null&&(a.integrity=t.integrity)}var lo=null;function sd(a,t,e){if(lo===null){var n=new Map,i=lo=new Map;i.set(e,n)}else i=lo,n=i.get(e),n||(n=new Map,i.set(e,n));if(n.has(a))return n;for(n.set(a,null),e=e.getElementsByTagName(a),i=0;i<e.length;i++){var s=e[i];if(!(s[ti]||s[Ka]||a==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=a+r;var f=n.get(r);f?f.push(s):n.set(r,[s])}}return n}function od(a,t,e){a=a.ownerDocument||a,a.head.insertBefore(e,t==="title"?a.querySelector("head > title"):null)}function L0(a,t,e){if(e===1||t.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(a=t.disabled,typeof t.precedence=="string"&&a==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ld(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}function U0(a,t,e,n){if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Gn(n.href),s=t.querySelector(Ui(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=ro.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=s,Ha(s);return}s=t.ownerDocument||t,n=nd(n),(i=Tt.get(i))&&Ur(n,i),s=s.createElement("link"),Ha(s);var r=s;r._p=new Promise(function(f,g){r.onload=f,r.onerror=g}),Wa(s,"link",n),e.instance=s}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=ro.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}var qr=0;function _0(a,t){return a.stylesheets&&a.count===0&&co(a,a.stylesheets),0<a.count||0<a.imgCount?function(e){var n=setTimeout(function(){if(a.stylesheets&&co(a,a.stylesheets),a.unsuspend){var s=a.unsuspend;a.unsuspend=null,s()}},6e4+t);0<a.imgBytes&&qr===0&&(qr=62500*v0());var i=setTimeout(function(){if(a.waitingForImages=!1,a.count===0&&(a.stylesheets&&co(a,a.stylesheets),a.unsuspend)){var s=a.unsuspend;a.unsuspend=null,s()}},(a.imgBytes>qr?50:800)+t);return a.unsuspend=e,function(){a.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function ro(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)co(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var uo=null;function co(a,t){a.stylesheets=null,a.unsuspend!==null&&(a.count++,uo=new Map,t.forEach(q0,a),uo=null,ro.call(a))}function q0(a,t){if(!(t.state.loading&4)){var e=uo.get(a);if(e)var n=e.get(null);else{e=new Map,uo.set(a,e);for(var i=a.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var r=i[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(e.set(r.dataset.precedence,r),n=r)}n&&e.set(null,n)}i=t.instance,r=i.getAttribute("data-precedence"),s=e.get(r)||n,s===n&&e.set(null,i),e.set(r,i),this.count++,n=ro.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(i,a.firstChild)),t.state.loading|=4}}var qi={$$typeof:X,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function H0(a,t,e,n,i,s,r,f,g){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Do(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.hiddenUpdates=Do(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function rd(a,t,e,n,i,s,r,f,g,S,C,L){return a=new H0(a,t,e,r,g,S,C,L,f),t=1,s===!0&&(t|=24),s=pt(3,null,null,t),a.current=s,s.stateNode=a,t=vl(),t.refCount++,a.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:e,cache:t},jl(s),a}function ud(a){return a?(a=jn,a):jn}function cd(a,t,e,n,i,s){i=ud(i),n.context===null?n.context=i:n.pendingContext=i,n=ve(t),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=xe(a,n,t),e!==null&&(st(e,a,t),bi(e,a,t))}function pd(a,t){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var e=a.retryLane;a.retryLane=e!==0&&e<t?e:t}}function Hr(a,t){pd(a,t),(a=a.alternate)&&pd(a,t)}function fd(a){if(a.tag===13||a.tag===31){var t=Ze(a,67108864);t!==null&&st(t,a,67108864),Hr(a,67108864)}}function dd(a){if(a.tag===13||a.tag===31){var t=yt();t=Oo(t);var e=Ze(a,t);e!==null&&st(e,a,t),Hr(a,t)}}var po=!0;function Q0(a,t,e,n){var i=D.T;D.T=null;var s=Q.p;try{Q.p=2,Qr(a,t,e,n)}finally{Q.p=s,D.T=i}}function Y0(a,t,e,n){var i=D.T;D.T=null;var s=Q.p;try{Q.p=8,Qr(a,t,e,n)}finally{Q.p=s,D.T=i}}function Qr(a,t,e,n){if(po){var i=Yr(n);if(i===null)Er(a,t,n,fo,e),md(a,n);else if(G0(i,a,t,e,n))n.stopPropagation();else if(md(a,n),t&4&&-1<K0.indexOf(a)){for(;i!==null;){var s=fn(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=He(s.pendingLanes);if(r!==0){var f=s;for(f.pendingLanes|=2,f.entangledLanes|=2;r;){var g=1<<31-ut(r);f.entanglements[1]|=g,r&=~g}qt(s),(da&6)===0&&(Ws=lt()+500,Bi(0))}}break;case 31:case 13:f=Ze(s,2),f!==null&&st(f,s,2),Js(),Hr(s,2)}if(s=Yr(n),s===null&&Er(a,t,n,fo,e),s===i)break;i=s}i!==null&&n.stopPropagation()}else Er(a,t,n,null,e)}}function Yr(a){return a=Go(a),Kr(a)}var fo=null;function Kr(a){if(fo=null,a=pn(a),a!==null){var t=m(a);if(t===null)a=null;else{var e=t.tag;if(e===13){if(a=h(t),a!==null)return a;a=null}else if(e===31){if(a=b(t),a!==null)return a;a=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;a=null}else t!==a&&(a=null)}}return fo=a,null}function hd(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mh()){case wu:return 2;case ku:return 8;case ts:case Ah:return 32;case ju:return 268435456;default:return 32}default:return 32}}var Gr=!1,Pe=null,Ce=null,Re=null,Hi=new Map,Qi=new Map,Be=[],K0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function md(a,t){switch(a){case"focusin":case"focusout":Pe=null;break;case"dragenter":case"dragleave":Ce=null;break;case"mouseover":case"mouseout":Re=null;break;case"pointerover":case"pointerout":Hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(t.pointerId)}}function Yi(a,t,e,n,i,s){return a===null||a.nativeEvent!==s?(a={blockedOn:t,domEventName:e,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=fn(t),t!==null&&fd(t)),a):(a.eventSystemFlags|=n,t=a.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),a)}function G0(a,t,e,n,i){switch(t){case"focusin":return Pe=Yi(Pe,a,t,e,n,i),!0;case"dragenter":return Ce=Yi(Ce,a,t,e,n,i),!0;case"mouseover":return Re=Yi(Re,a,t,e,n,i),!0;case"pointerover":var s=i.pointerId;return Hi.set(s,Yi(Hi.get(s)||null,a,t,e,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Qi.set(s,Yi(Qi.get(s)||null,a,t,e,n,i)),!0}return!1}function yd(a){var t=pn(a.target);if(t!==null){var e=m(t);if(e!==null){if(t=e.tag,t===13){if(t=h(e),t!==null){a.blockedOn=t,Mu(a.priority,function(){dd(e)});return}}else if(t===31){if(t=b(e),t!==null){a.blockedOn=t,Mu(a.priority,function(){dd(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){a.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}a.blockedOn=null}function ho(a){if(a.blockedOn!==null)return!1;for(var t=a.targetContainers;0<t.length;){var e=Yr(a.nativeEvent);if(e===null){e=a.nativeEvent;var n=new e.constructor(e.type,e);Ko=n,e.target.dispatchEvent(n),Ko=null}else return t=fn(e),t!==null&&fd(t),a.blockedOn=e,!1;t.shift()}return!0}function gd(a,t,e){ho(a)&&e.delete(t)}function Z0(){Gr=!1,Pe!==null&&ho(Pe)&&(Pe=null),Ce!==null&&ho(Ce)&&(Ce=null),Re!==null&&ho(Re)&&(Re=null),Hi.forEach(gd),Qi.forEach(gd)}function mo(a,t){a.blockedOn===t&&(a.blockedOn=null,Gr||(Gr=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Z0)))}var yo=null;function bd(a){yo!==a&&(yo=a,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){yo===a&&(yo=null);for(var t=0;t<a.length;t+=3){var e=a[t],n=a[t+1],i=a[t+2];if(typeof n!="function"){if(Kr(n||e)===null)continue;break}var s=fn(e);s!==null&&(a.splice(t,3),t-=3,Yl(s,{pending:!0,data:i,method:e.method,action:n},n,i))}}))}function Xn(a){function t(g){return mo(g,a)}Pe!==null&&mo(Pe,a),Ce!==null&&mo(Ce,a),Re!==null&&mo(Re,a),Hi.forEach(t),Qi.forEach(t);for(var e=0;e<Be.length;e++){var n=Be[e];n.blockedOn===a&&(n.blockedOn=null)}for(;0<Be.length&&(e=Be[0],e.blockedOn===null);)yd(e),e.blockedOn===null&&Be.shift();if(e=(a.ownerDocument||a).$$reactFormReplay,e!=null)for(n=0;n<e.length;n+=3){var i=e[n],s=e[n+1],r=i[Ia]||null;if(typeof s=="function")r||bd(e);else if(r){var f=null;if(s&&s.hasAttribute("formAction")){if(i=s,r=s[Ia]||null)f=r.formAction;else if(Kr(i)!==null)continue}else f=r.action;typeof f=="function"?e[n+1]=f:(e.splice(n,3),n-=3),bd(e)}}}function vd(){function a(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(e,20)}function e(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",a),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){n=!0,navigation.removeEventListener("navigate",a),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Zr(a){this._internalRoot=a}go.prototype.render=Zr.prototype.render=function(a){var t=this._internalRoot;if(t===null)throw Error(u(409));var e=t.current,n=yt();cd(e,n,a,t,null,null)},go.prototype.unmount=Zr.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var t=a.containerInfo;cd(a.current,2,null,a,null,null),Js(),t[cn]=null}};function go(a){this._internalRoot=a}go.prototype.unstable_scheduleHydration=function(a){if(a){var t=Eu();a={blockedOn:null,target:a,priority:t};for(var e=0;e<Be.length&&t!==0&&t<Be[e].priority;e++);Be.splice(e,0,a),e===0&&yd(a)}};var xd=c.version;if(xd!=="19.2.3")throw Error(u(527,xd,"19.2.3"));Q.findDOMNode=function(a){var t=a._reactInternals;if(t===void 0)throw typeof a.render=="function"?Error(u(188)):(a=Object.keys(a).join(","),Error(u(268,a)));return a=y(t),a=a!==null?A(a):null,a=a===null?null:a.stateNode,a};var X0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{$n=bo.inject(X0),rt=bo}catch{}}return Gi.createRoot=function(a,t){if(!d(a))throw Error(u(299));var e=!1,n="",i=zp,s=Tp,r=Ep;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=rd(a,1,!1,null,null,e,n,null,i,s,r,vd),a[cn]=t.current,Tr(a),new Zr(t)},Gi.hydrateRoot=function(a,t,e){if(!d(a))throw Error(u(299));var n=!1,i="",s=zp,r=Tp,f=Ep,g=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.formState!==void 0&&(g=e.formState)),t=rd(a,1,!0,t,e??null,n,i,g,s,r,f,vd),t.context=ud(null),e=t.current,n=yt(),n=Oo(n),i=ve(n),i.callback=null,xe(e,i,n),e=n,t.current.lanes=e,ai(t,e),qt(t),a[cn]=t.current,Tr(a),new go(t)},Gi.version="19.2.3",Gi}var Ad;function iy(){if(Ad)return Vr.exports;Ad=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Vr.exports=ny(),Vr.exports}var sy=iy();const oy=Zd(sy);var Pd="popstate";function ly(l={}){function c(u,d){let{pathname:m,search:h,hash:b}=u.location;return eu("",{pathname:m,search:h,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function p(u,d){return typeof d=="string"?d:Wi(d)}return uy(c,p,null,l)}function Ea(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function Dt(l,c){if(!l){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function ry(){return Math.random().toString(36).substring(2,10)}function Cd(l,c){return{usr:l.state,key:l.key,idx:c}}function eu(l,c,p=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof c=="string"?Vn(c):c,state:p,key:c&&c.key||u||ry()}}function Wi({pathname:l="/",search:c="",hash:p=""}){return c&&c!=="?"&&(l+=c.charAt(0)==="?"?c:"?"+c),p&&p!=="#"&&(l+=p.charAt(0)==="#"?p:"#"+p),l}function Vn(l){let c={};if(l){let p=l.indexOf("#");p>=0&&(c.hash=l.substring(p),l=l.substring(0,p));let u=l.indexOf("?");u>=0&&(c.search=l.substring(u),l=l.substring(0,u)),l&&(c.pathname=l)}return c}function uy(l,c,p,u={}){let{window:d=document.defaultView,v5Compat:m=!1}=u,h=d.history,b="POP",v=null,y=A();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function A(){return(h.state||{idx:null}).idx}function k(){b="POP";let _=A(),q=_==null?null:_-y;y=_,v&&v({action:b,location:R.location,delta:q})}function B(_,q){b="PUSH";let H=eu(R.location,_,q);y=A()+1;let X=Cd(H,y),ua=R.createHref(H);try{h.pushState(X,"",ua)}catch(ca){if(ca instanceof DOMException&&ca.name==="DataCloneError")throw ca;d.location.assign(ua)}m&&v&&v({action:b,location:R.location,delta:1})}function z(_,q){b="REPLACE";let H=eu(R.location,_,q);y=A();let X=Cd(H,y),ua=R.createHref(H);h.replaceState(X,"",ua),m&&v&&v({action:b,location:R.location,delta:0})}function M(_){return cy(_)}let R={get action(){return b},get location(){return l(d,h)},listen(_){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(Pd,k),v=_,()=>{d.removeEventListener(Pd,k),v=null}},createHref(_){return c(d,_)},createURL:M,encodeLocation(_){let q=M(_);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:B,replace:z,go(_){return h.go(_)}};return R}function cy(l,c=!1){let p="http://localhost";typeof window<"u"&&(p=window.location.origin!=="null"?window.location.origin:window.location.href),Ea(p,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:Wi(l);return u=u.replace(/ $/,"%20"),!c&&u.startsWith("//")&&(u=p+u),new URL(u,p)}function Xd(l,c,p="/"){return py(l,c,p,!1)}function py(l,c,p,u){let d=typeof c=="string"?Vn(c):c,m=ce(d.pathname||"/",p);if(m==null)return null;let h=Wd(l);fy(h);let b=null;for(let v=0;b==null&&v<h.length;++v){let y=jy(m);b=wy(h[v],y,u)}return b}function Wd(l,c=[],p=[],u="",d=!1){let m=(h,b,v=d,y)=>{let A={relativePath:y===void 0?h.path||"":y,caseSensitive:h.caseSensitive===!0,childrenIndex:b,route:h};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(u)&&v)return;Ea(A.relativePath.startsWith(u),`Absolute route path "${A.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(u.length)}let k=re([u,A.relativePath]),B=p.concat(A);h.children&&h.children.length>0&&(Ea(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${k}".`),Wd(h.children,c,B,k,v)),!(h.path==null&&!h.index)&&c.push({path:k,score:vy(k,h.index),routesMeta:B})};return l.forEach((h,b)=>{if(h.path===""||!h.path?.includes("?"))m(h,b);else for(let v of Vd(h.path))m(h,b,!0,v)}),c}function Vd(l){let c=l.split("/");if(c.length===0)return[];let[p,...u]=c,d=p.endsWith("?"),m=p.replace(/\?$/,"");if(u.length===0)return d?[m,""]:[m];let h=Vd(u.join("/")),b=[];return b.push(...h.map(v=>v===""?m:[m,v].join("/"))),d&&b.push(...h),b.map(v=>l.startsWith("/")&&v===""?"/":v)}function fy(l){l.sort((c,p)=>c.score!==p.score?p.score-c.score:xy(c.routesMeta.map(u=>u.childrenIndex),p.routesMeta.map(u=>u.childrenIndex)))}var dy=/^:[\w-]+$/,hy=3,my=2,yy=1,gy=10,by=-2,Rd=l=>l==="*";function vy(l,c){let p=l.split("/"),u=p.length;return p.some(Rd)&&(u+=by),c&&(u+=my),p.filter(d=>!Rd(d)).reduce((d,m)=>d+(dy.test(m)?hy:m===""?yy:gy),u)}function xy(l,c){return l.length===c.length&&l.slice(0,-1).every((u,d)=>u===c[d])?l[l.length-1]-c[c.length-1]:0}function wy(l,c,p=!1){let{routesMeta:u}=l,d={},m="/",h=[];for(let b=0;b<u.length;++b){let v=u[b],y=b===u.length-1,A=m==="/"?c:c.slice(m.length)||"/",k=No({path:v.relativePath,caseSensitive:v.caseSensitive,end:y},A),B=v.route;if(!k&&y&&p&&!u[u.length-1].route.index&&(k=No({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},A)),!k)return null;Object.assign(d,k.params),h.push({params:d,pathname:re([m,k.pathname]),pathnameBase:Ty(re([m,k.pathnameBase])),route:B}),k.pathnameBase!=="/"&&(m=re([m,k.pathnameBase]))}return h}function No(l,c){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[p,u]=ky(l.path,l.caseSensitive,l.end),d=c.match(p);if(!d)return null;let m=d[0],h=m.replace(/(.)\/+$/,"$1"),b=d.slice(1);return{params:u.reduce((y,{paramName:A,isOptional:k},B)=>{if(A==="*"){let M=b[B]||"";h=m.slice(0,m.length-M.length).replace(/(.)\/+$/,"$1")}const z=b[B];return k&&!z?y[A]=void 0:y[A]=(z||"").replace(/%2F/g,"/"),y},{}),pathname:m,pathnameBase:h,pattern:l}}function ky(l,c=!1,p=!0){Dt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,b,v)=>(u.push({paramName:b,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(u.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):p?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,c?void 0:"i"),u]}function jy(l){try{return l.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Dt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),l}}function ce(l,c){if(c==="/")return l;if(!l.toLowerCase().startsWith(c.toLowerCase()))return null;let p=c.endsWith("/")?c.length-1:c.length,u=l.charAt(p);return u&&u!=="/"?null:l.slice(p)||"/"}var Jd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ny=l=>Jd.test(l);function Sy(l,c="/"){let{pathname:p,search:u="",hash:d=""}=typeof l=="string"?Vn(l):l,m;if(p)if(Ny(p))m=p;else{if(p.includes("//")){let h=p;p=p.replace(/\/\/+/g,"/"),Dt(!1,`Pathnames cannot have embedded double slashes - normalizing ${h} -> ${p}`)}p.startsWith("/")?m=Bd(p.substring(1),"/"):m=Bd(p,c)}else m=c;return{pathname:m,search:Ey(u),hash:My(d)}}function Bd(l,c){let p=c.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?p.length>1&&p.pop():d!=="."&&p.push(d)}),p.length>1?p.join("/"):"/"}function Ir(l,c,p,u){return`Cannot include a '${l}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${p}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zy(l){return l.filter((c,p)=>p===0||c.route.path&&c.route.path.length>0)}function Fd(l){let c=zy(l);return c.map((p,u)=>u===c.length-1?p.pathname:p.pathnameBase)}function $d(l,c,p,u=!1){let d;typeof l=="string"?d=Vn(l):(d={...l},Ea(!d.pathname||!d.pathname.includes("?"),Ir("?","pathname","search",d)),Ea(!d.pathname||!d.pathname.includes("#"),Ir("#","pathname","hash",d)),Ea(!d.search||!d.search.includes("#"),Ir("#","search","hash",d)));let m=l===""||d.pathname==="",h=m?"/":d.pathname,b;if(h==null)b=p;else{let k=c.length-1;if(!u&&h.startsWith("..")){let B=h.split("/");for(;B[0]==="..";)B.shift(),k-=1;d.pathname=B.join("/")}b=k>=0?c[k]:"/"}let v=Sy(d,b),y=h&&h!=="/"&&h.endsWith("/"),A=(m||h===".")&&p.endsWith("/");return!v.pathname.endsWith("/")&&(y||A)&&(v.pathname+="/"),v}var re=l=>l.join("/").replace(/\/\/+/g,"/"),Ty=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Ey=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,My=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Ay=class{constructor(l,c,p,u=!1){this.status=l,this.statusText=c||"",this.internal=u,p instanceof Error?(this.data=p.toString(),this.error=p):this.data=p}};function Py(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Cy(l){return l.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Id=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ah(l,c){let p=l;if(typeof p!="string"||!Jd.test(p))return{absoluteURL:void 0,isExternal:!1,to:p};let u=p,d=!1;if(Id)try{let m=new URL(window.location.href),h=p.startsWith("//")?new URL(m.protocol+p):new URL(p),b=ce(h.pathname,c);h.origin===m.origin&&b!=null?p=b+h.search+h.hash:d=!0}catch{Dt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:d,to:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var th=["POST","PUT","PATCH","DELETE"];new Set(th);var Ry=["GET",...th];new Set(Ry);var Jn=T.createContext(null);Jn.displayName="DataRouter";var So=T.createContext(null);So.displayName="DataRouterState";var By=T.createContext(!1),eh=T.createContext({isTransitioning:!1});eh.displayName="ViewTransition";var Dy=T.createContext(new Map);Dy.displayName="Fetchers";var Oy=T.createContext(null);Oy.displayName="Await";var At=T.createContext(null);At.displayName="Navigation";var Ji=T.createContext(null);Ji.displayName="Location";var Ht=T.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var lu=T.createContext(null);lu.displayName="RouteError";var nh="REACT_ROUTER_ERROR",Ly="REDIRECT",Uy="ROUTE_ERROR_RESPONSE";function _y(l){if(l.startsWith(`${nh}:${Ly}:{`))try{let c=JSON.parse(l.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function qy(l){if(l.startsWith(`${nh}:${Uy}:{`))try{let c=JSON.parse(l.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Ay(c.status,c.statusText,c.data)}catch{}}function Hy(l,{relative:c}={}){Ea(Fi(),"useHref() may be used only in the context of a <Router> component.");let{basename:p,navigator:u}=T.useContext(At),{hash:d,pathname:m,search:h}=$i(l,{relative:c}),b=m;return p!=="/"&&(b=m==="/"?p:re([p,m])),u.createHref({pathname:b,search:h,hash:d})}function Fi(){return T.useContext(Ji)!=null}function ln(){return Ea(Fi(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Ji).location}var ih="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sh(l){T.useContext(At).static||T.useLayoutEffect(l)}function ru(){let{isDataRoute:l}=T.useContext(Ht);return l?ag():Qy()}function Qy(){Ea(Fi(),"useNavigate() may be used only in the context of a <Router> component.");let l=T.useContext(Jn),{basename:c,navigator:p}=T.useContext(At),{matches:u}=T.useContext(Ht),{pathname:d}=ln(),m=JSON.stringify(Fd(u)),h=T.useRef(!1);return sh(()=>{h.current=!0}),T.useCallback((v,y={})=>{if(Dt(h.current,ih),!h.current)return;if(typeof v=="number"){p.go(v);return}let A=$d(v,JSON.parse(m),d,y.relative==="path");l==null&&c!=="/"&&(A.pathname=A.pathname==="/"?c:re([c,A.pathname])),(y.replace?p.replace:p.push)(A,y.state,y)},[c,p,m,d,l])}T.createContext(null);function zo(){let{matches:l}=T.useContext(Ht),c=l[l.length-1];return c?c.params:{}}function $i(l,{relative:c}={}){let{matches:p}=T.useContext(Ht),{pathname:u}=ln(),d=JSON.stringify(Fd(p));return T.useMemo(()=>$d(l,JSON.parse(d),u,c==="path"),[l,d,u,c])}function Yy(l,c){return oh(l,c)}function oh(l,c,p,u,d){Ea(Fi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=T.useContext(At),{matches:h}=T.useContext(Ht),b=h[h.length-1],v=b?b.params:{},y=b?b.pathname:"/",A=b?b.pathnameBase:"/",k=b&&b.route;{let H=k&&k.path||"";rh(y,!k||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let B=ln(),z;if(c){let H=typeof c=="string"?Vn(c):c;Ea(A==="/"||H.pathname?.startsWith(A),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${H.pathname}" was given in the \`location\` prop.`),z=H}else z=B;let M=z.pathname||"/",R=M;if(A!=="/"){let H=A.replace(/^\//,"").split("/");R="/"+M.replace(/^\//,"").split("/").slice(H.length).join("/")}let _=Xd(l,{pathname:R});Dt(k||_!=null,`No routes matched location "${z.pathname}${z.search}${z.hash}" `),Dt(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=Wy(_&&_.map(H=>Object.assign({},H,{params:Object.assign({},v,H.params),pathname:re([A,m.encodeLocation?m.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?A:re([A,m.encodeLocation?m.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),h,p,u,d);return c&&q?T.createElement(Ji.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...z},navigationType:"POP"}},q):q}function Ky(){let l=Iy(),c=Py(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),p=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:m},"ErrorBoundary")," or"," ",T.createElement("code",{style:m},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},c),p?T.createElement("pre",{style:d},p):null,h)}var Gy=T.createElement(Ky,null),lh=class extends T.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,c){return c.location!==l.location||c.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:c.error,location:c.location,revalidation:l.revalidation||c.revalidation}}componentDidCatch(l,c){this.props.onError?this.props.onError(l,c):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const p=qy(l.digest);p&&(l=p)}let c=l!==void 0?T.createElement(Ht.Provider,{value:this.props.routeContext},T.createElement(lu.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?T.createElement(Zy,{error:l},c):c}};lh.contextType=By;var au=new WeakMap;function Zy({children:l,error:c}){let{basename:p}=T.useContext(At);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let u=_y(c.digest);if(u){let d=au.get(c);if(d)throw d;let m=ah(u.location,p);if(Id&&!au.get(c))if(m.isExternal||u.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:u.replace}));throw au.set(c,h),h}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return l}function Xy({routeContext:l,match:c,children:p}){let u=T.useContext(Jn);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),T.createElement(Ht.Provider,{value:l},p)}function Wy(l,c=[],p=null,u=null,d=null){if(l==null){if(!p)return null;if(p.errors)l=p.matches;else if(c.length===0&&!p.initialized&&p.matches.length>0)l=p.matches;else return null}let m=l,h=p?.errors;if(h!=null){let A=m.findIndex(k=>k.route.id&&h?.[k.route.id]!==void 0);Ea(A>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),m=m.slice(0,Math.min(m.length,A+1))}let b=!1,v=-1;if(p)for(let A=0;A<m.length;A++){let k=m[A];if((k.route.HydrateFallback||k.route.hydrateFallbackElement)&&(v=A),k.route.id){let{loaderData:B,errors:z}=p,M=k.route.loader&&!B.hasOwnProperty(k.route.id)&&(!z||z[k.route.id]===void 0);if(k.route.lazy||M){b=!0,v>=0?m=m.slice(0,v+1):m=[m[0]];break}}}let y=p&&u?(A,k)=>{u(A,{location:p.location,params:p.matches?.[0]?.params??{},unstable_pattern:Cy(p.matches),errorInfo:k})}:void 0;return m.reduceRight((A,k,B)=>{let z,M=!1,R=null,_=null;p&&(z=h&&k.route.id?h[k.route.id]:void 0,R=k.route.errorElement||Gy,b&&(v<0&&B===0?(rh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,_=null):v===B&&(M=!0,_=k.route.hydrateFallbackElement||null)));let q=c.concat(m.slice(0,B+1)),H=()=>{let X;return z?X=R:M?X=_:k.route.Component?X=T.createElement(k.route.Component,null):k.route.element?X=k.route.element:X=A,T.createElement(Xy,{match:k,routeContext:{outlet:A,matches:q,isDataRoute:p!=null},children:X})};return p&&(k.route.ErrorBoundary||k.route.errorElement||B===0)?T.createElement(lh,{location:p.location,revalidation:p.revalidation,component:R,error:z,children:H(),routeContext:{outlet:null,matches:q,isDataRoute:!0},onError:y}):H()},null)}function uu(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vy(l){let c=T.useContext(Jn);return Ea(c,uu(l)),c}function Jy(l){let c=T.useContext(So);return Ea(c,uu(l)),c}function Fy(l){let c=T.useContext(Ht);return Ea(c,uu(l)),c}function cu(l){let c=Fy(l),p=c.matches[c.matches.length-1];return Ea(p.route.id,`${l} can only be used on routes that contain a unique "id"`),p.route.id}function $y(){return cu("useRouteId")}function Iy(){let l=T.useContext(lu),c=Jy("useRouteError"),p=cu("useRouteError");return l!==void 0?l:c.errors?.[p]}function ag(){let{router:l}=Vy("useNavigate"),c=cu("useNavigate"),p=T.useRef(!1);return sh(()=>{p.current=!0}),T.useCallback(async(d,m={})=>{Dt(p.current,ih),p.current&&(typeof d=="number"?await l.navigate(d):await l.navigate(d,{fromRouteId:c,...m}))},[l,c])}var Dd={};function rh(l,c,p){!c&&!Dd[l]&&(Dd[l]=!0,Dt(!1,p))}T.memo(tg);function tg({routes:l,future:c,state:p,onError:u}){return oh(l,void 0,p,u,c)}function Et(l){Ea(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function eg({basename:l="/",children:c=null,location:p,navigationType:u="POP",navigator:d,static:m=!1,unstable_useTransitions:h}){Ea(!Fi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),v=T.useMemo(()=>({basename:b,navigator:d,static:m,unstable_useTransitions:h,future:{}}),[b,d,m,h]);typeof p=="string"&&(p=Vn(p));let{pathname:y="/",search:A="",hash:k="",state:B=null,key:z="default"}=p,M=T.useMemo(()=>{let R=ce(y,b);return R==null?null:{location:{pathname:R,search:A,hash:k,state:B,key:z},navigationType:u}},[b,y,A,k,B,z,u]);return Dt(M!=null,`<Router basename="${b}"> is not able to match the URL "${y}${A}${k}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:T.createElement(At.Provider,{value:v},T.createElement(Ji.Provider,{children:c,value:M}))}function ng({children:l,location:c}){return Yy(nu(l),c)}function nu(l,c=[]){let p=[];return T.Children.forEach(l,(u,d)=>{if(!T.isValidElement(u))return;let m=[...c,d];if(u.type===T.Fragment){p.push.apply(p,nu(u.props.children,m));return}Ea(u.type===Et,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ea(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=nu(u.props.children,m)),p.push(h)}),p}var ko="get",jo="application/x-www-form-urlencoded";function To(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function ig(l){return To(l)&&l.tagName.toLowerCase()==="button"}function sg(l){return To(l)&&l.tagName.toLowerCase()==="form"}function og(l){return To(l)&&l.tagName.toLowerCase()==="input"}function lg(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function rg(l,c){return l.button===0&&(!c||c==="_self")&&!lg(l)}var vo=null;function ug(){if(vo===null)try{new FormData(document.createElement("form"),0),vo=!1}catch{vo=!0}return vo}var cg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function tu(l){return l!=null&&!cg.has(l)?(Dt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${jo}"`),null):l}function pg(l,c){let p,u,d,m,h;if(sg(l)){let b=l.getAttribute("action");u=b?ce(b,c):null,p=l.getAttribute("method")||ko,d=tu(l.getAttribute("enctype"))||jo,m=new FormData(l)}else if(ig(l)||og(l)&&(l.type==="submit"||l.type==="image")){let b=l.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=l.getAttribute("formaction")||b.getAttribute("action");if(u=v?ce(v,c):null,p=l.getAttribute("formmethod")||b.getAttribute("method")||ko,d=tu(l.getAttribute("formenctype"))||tu(b.getAttribute("enctype"))||jo,m=new FormData(b,l),!ug()){let{name:y,type:A,value:k}=l;if(A==="image"){let B=y?`${y}.`:"";m.append(`${B}x`,"0"),m.append(`${B}y`,"0")}else y&&m.append(y,k)}}else{if(To(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');p=ko,u=null,d=jo,h=l}return m&&d==="text/plain"&&(h=m,m=void 0),{action:u,method:p.toLowerCase(),encType:d,formData:m,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pu(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function fg(l,c,p,u){let d=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return p?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${u}`:d.pathname=`${d.pathname}.${u}`:d.pathname==="/"?d.pathname=`_root.${u}`:c&&ce(d.pathname,c)==="/"?d.pathname=`${c.replace(/\/$/,"")}/_root.${u}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${u}`,d}async function dg(l,c){if(l.id in c)return c[l.id];try{let p=await import(l.module);return c[l.id]=p,p}catch(p){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(p),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hg(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function mg(l,c,p){let u=await Promise.all(l.map(async d=>{let m=c.routes[d.route.id];if(m){let h=await dg(m,p);return h.links?h.links():[]}return[]}));return vg(u.flat(1).filter(hg).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Od(l,c,p,u,d,m){let h=(v,y)=>p[y]?v.route.id!==p[y].route.id:!0,b=(v,y)=>p[y].pathname!==v.pathname||p[y].route.path?.endsWith("*")&&p[y].params["*"]!==v.params["*"];return m==="assets"?c.filter((v,y)=>h(v,y)||b(v,y)):m==="data"?c.filter((v,y)=>{let A=u.routes[v.route.id];if(!A||!A.hasLoader)return!1;if(h(v,y)||b(v,y))return!0;if(v.route.shouldRevalidate){let k=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:p[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function yg(l,c,{includeHydrateFallback:p}={}){return gg(l.map(u=>{let d=c.routes[u.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),p&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function gg(l){return[...new Set(l)]}function bg(l){let c={},p=Object.keys(l).sort();for(let u of p)c[u]=l[u];return c}function vg(l,c){let p=new Set;return new Set(c),l.reduce((u,d)=>{let m=JSON.stringify(bg(d));return p.has(m)||(p.add(m),u.push({key:m,link:d})),u},[])}function uh(){let l=T.useContext(Jn);return pu(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function xg(){let l=T.useContext(So);return pu(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var fu=T.createContext(void 0);fu.displayName="FrameworkContext";function ch(){let l=T.useContext(fu);return pu(l,"You must render this element inside a <HydratedRouter> element"),l}function wg(l,c){let p=T.useContext(fu),[u,d]=T.useState(!1),[m,h]=T.useState(!1),{onFocus:b,onBlur:v,onMouseEnter:y,onMouseLeave:A,onTouchStart:k}=c,B=T.useRef(null);T.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let R=q=>{q.forEach(H=>{h(H.isIntersecting)})},_=new IntersectionObserver(R,{threshold:.5});return B.current&&_.observe(B.current),()=>{_.disconnect()}}},[l]),T.useEffect(()=>{if(u){let R=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(R)}}},[u]);let z=()=>{d(!0)},M=()=>{d(!1),h(!1)};return p?l!=="intent"?[m,B,{}]:[m,B,{onFocus:Zi(b,z),onBlur:Zi(v,M),onMouseEnter:Zi(y,z),onMouseLeave:Zi(A,M),onTouchStart:Zi(k,z)}]:[!1,B,{}]}function Zi(l,c){return p=>{l&&l(p),p.defaultPrevented||c(p)}}function kg({page:l,...c}){let{router:p}=uh(),u=T.useMemo(()=>Xd(p.routes,l,p.basename),[p.routes,l,p.basename]);return u?T.createElement(Ng,{page:l,matches:u,...c}):null}function jg(l){let{manifest:c,routeModules:p}=ch(),[u,d]=T.useState([]);return T.useEffect(()=>{let m=!1;return mg(l,c,p).then(h=>{m||d(h)}),()=>{m=!0}},[l,c,p]),u}function Ng({page:l,matches:c,...p}){let u=ln(),{future:d,manifest:m,routeModules:h}=ch(),{basename:b}=uh(),{loaderData:v,matches:y}=xg(),A=T.useMemo(()=>Od(l,c,y,m,u,"data"),[l,c,y,m,u]),k=T.useMemo(()=>Od(l,c,y,m,u,"assets"),[l,c,y,m,u]),B=T.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let R=new Set,_=!1;if(c.forEach(H=>{let X=m.routes[H.route.id];!X||!X.hasLoader||(!A.some(ua=>ua.route.id===H.route.id)&&H.route.id in v&&h[H.route.id]?.shouldRevalidate||X.hasClientLoader?_=!0:R.add(H.route.id))}),R.size===0)return[];let q=fg(l,b,d.unstable_trailingSlashAwareDataRequests,"data");return _&&R.size>0&&q.searchParams.set("_routes",c.filter(H=>R.has(H.route.id)).map(H=>H.route.id).join(",")),[q.pathname+q.search]},[b,d.unstable_trailingSlashAwareDataRequests,v,u,m,A,c,l,h]),z=T.useMemo(()=>yg(k,m),[k,m]),M=jg(k);return T.createElement(T.Fragment,null,B.map(R=>T.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...p})),z.map(R=>T.createElement("link",{key:R,rel:"modulepreload",href:R,...p})),M.map(({key:R,link:_})=>T.createElement("link",{key:R,nonce:p.nonce,..._})))}function Sg(...l){return c=>{l.forEach(p=>{typeof p=="function"?p(c):p!=null&&(p.current=c)})}}var zg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zg&&(window.__reactRouterVersion="7.12.0")}catch{}function Tg({basename:l,children:c,unstable_useTransitions:p,window:u}){let d=T.useRef();d.current==null&&(d.current=ly({window:u,v5Compat:!0}));let m=d.current,[h,b]=T.useState({action:m.action,location:m.location}),v=T.useCallback(y=>{p===!1?b(y):T.startTransition(()=>b(y))},[p]);return T.useLayoutEffect(()=>m.listen(v),[m,v]),T.createElement(eg,{basename:l,children:c,location:h.location,navigationType:h.action,navigator:m,unstable_useTransitions:p})}var ph=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pa=T.forwardRef(function({onClick:c,discover:p="render",prefetch:u="none",relative:d,reloadDocument:m,replace:h,state:b,target:v,to:y,preventScrollReset:A,viewTransition:k,unstable_defaultShouldRevalidate:B,...z},M){let{basename:R,unstable_useTransitions:_}=T.useContext(At),q=typeof y=="string"&&ph.test(y),H=ah(y,R);y=H.to;let X=Hy(y,{relative:d}),[ua,ca,ja]=wg(u,z),F=Ag(y,{replace:h,state:b,target:v,preventScrollReset:A,relative:d,viewTransition:k,unstable_defaultShouldRevalidate:B,unstable_useTransitions:_});function Ta(gt){c&&c(gt),gt.defaultPrevented||F(gt)}let Ya=T.createElement("a",{...z,...ja,href:H.absoluteURL||X,onClick:H.isExternal||m?c:Ta,ref:Sg(M,ca),target:v,"data-discover":!q&&p==="render"?"true":void 0});return ua&&!q?T.createElement(T.Fragment,null,Ya,T.createElement(kg,{page:X})):Ya});Pa.displayName="Link";var iu=T.forwardRef(function({"aria-current":c="page",caseSensitive:p=!1,className:u="",end:d=!1,style:m,to:h,viewTransition:b,children:v,...y},A){let k=$i(h,{relative:y.relative}),B=ln(),z=T.useContext(So),{navigator:M,basename:R}=T.useContext(At),_=z!=null&&Dg(k)&&b===!0,q=M.encodeLocation?M.encodeLocation(k).pathname:k.pathname,H=B.pathname,X=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;p||(H=H.toLowerCase(),X=X?X.toLowerCase():null,q=q.toLowerCase()),X&&R&&(X=ce(X,R)||X);const ua=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let ca=H===q||!d&&H.startsWith(q)&&H.charAt(ua)==="/",ja=X!=null&&(X===q||!d&&X.startsWith(q)&&X.charAt(q.length)==="/"),F={isActive:ca,isPending:ja,isTransitioning:_},Ta=ca?c:void 0,Ya;typeof u=="function"?Ya=u(F):Ya=[u,ca?"active":null,ja?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let gt=typeof m=="function"?m(F):m;return T.createElement(Pa,{...y,"aria-current":Ta,className:Ya,ref:A,style:gt,to:h,viewTransition:b},typeof v=="function"?v(F):v)});iu.displayName="NavLink";var Eg=T.forwardRef(({discover:l="render",fetcherKey:c,navigate:p,reloadDocument:u,replace:d,state:m,method:h=ko,action:b,onSubmit:v,relative:y,preventScrollReset:A,viewTransition:k,unstable_defaultShouldRevalidate:B,...z},M)=>{let{unstable_useTransitions:R}=T.useContext(At),_=Rg(),q=Bg(b,{relative:y}),H=h.toLowerCase()==="get"?"get":"post",X=typeof b=="string"&&ph.test(b),ua=ca=>{if(v&&v(ca),ca.defaultPrevented)return;ca.preventDefault();let ja=ca.nativeEvent.submitter,F=ja?.getAttribute("formmethod")||h,Ta=()=>_(ja||ca.currentTarget,{fetcherKey:c,method:F,navigate:p,replace:d,state:m,relative:y,preventScrollReset:A,viewTransition:k,unstable_defaultShouldRevalidate:B});R&&p!==!1?T.startTransition(()=>Ta()):Ta()};return T.createElement("form",{ref:M,method:H,action:q,onSubmit:u?v:ua,...z,"data-discover":!X&&l==="render"?"true":void 0})});Eg.displayName="Form";function Mg(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fh(l){let c=T.useContext(Jn);return Ea(c,Mg(l)),c}function Ag(l,{target:c,replace:p,state:u,preventScrollReset:d,relative:m,viewTransition:h,unstable_defaultShouldRevalidate:b,unstable_useTransitions:v}={}){let y=ru(),A=ln(),k=$i(l,{relative:m});return T.useCallback(B=>{if(rg(B,c)){B.preventDefault();let z=p!==void 0?p:Wi(A)===Wi(k),M=()=>y(l,{replace:z,state:u,preventScrollReset:d,relative:m,viewTransition:h,unstable_defaultShouldRevalidate:b});v?T.startTransition(()=>M()):M()}},[A,y,k,p,u,c,l,d,m,h,b,v])}var Pg=0,Cg=()=>`__${String(++Pg)}__`;function Rg(){let{router:l}=fh("useSubmit"),{basename:c}=T.useContext(At),p=$y(),u=l.fetch,d=l.navigate;return T.useCallback(async(m,h={})=>{let{action:b,method:v,encType:y,formData:A,body:k}=pg(m,c);if(h.navigate===!1){let B=h.fetcherKey||Cg();await u(B,p,h.action||b,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:A,body:k,formMethod:h.method||v,formEncType:h.encType||y,flushSync:h.flushSync})}else await d(h.action||b,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:A,body:k,formMethod:h.method||v,formEncType:h.encType||y,replace:h.replace,state:h.state,fromRouteId:p,flushSync:h.flushSync,viewTransition:h.viewTransition})},[u,d,c,p])}function Bg(l,{relative:c}={}){let{basename:p}=T.useContext(At),u=T.useContext(Ht);Ea(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),m={...$i(l||".",{relative:c})},h=ln();if(l==null){m.search=h.search;let b=new URLSearchParams(m.search),v=b.getAll("index");if(v.some(A=>A==="")){b.delete("index"),v.filter(k=>k).forEach(k=>b.append("index",k));let A=b.toString();m.search=A?`?${A}`:""}}return(!l||l===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),p!=="/"&&(m.pathname=m.pathname==="/"?p:re([p,m.pathname])),Wi(m)}function Dg(l,{relative:c}={}){let p=T.useContext(eh);Ea(p!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=fh("useViewTransitionState"),d=$i(l,{relative:c});if(!p.isTransitioning)return!1;let m=ce(p.currentLocation.pathname,u)||p.currentLocation.pathname,h=ce(p.nextLocation.pathname,u)||p.nextLocation.pathname;return No(d.pathname,h)!=null||No(d.pathname,m)!=null}const dh=T.createContext(null),Ld="pashto-learning-current-user",Wn=[{id:"user1",name:"User 1",nameEn:"User 1",color:"#3b82f6"},{id:"user2",name:"User 2",nameEn:"User 2",color:"#ec4899"},{id:"user3",name:"User 3",nameEn:"User 3",color:"#10b981"}];function Og({children:l}){const[c,p]=T.useState(()=>{try{const h=localStorage.getItem(Ld);if(h){const b=JSON.parse(h);if(Wn.find(v=>v.id===b))return b}return Wn[0]?.id||null}catch{return Wn[0]?.id||null}});T.useEffect(()=>{c&&localStorage.setItem(Ld,JSON.stringify(c))},[c]);const m={users:Wn,currentUser:c,setCurrentUser:h=>{Wn.find(b=>b.id===h)&&p(h)},getCurrentUserData:()=>Wn.find(h=>h.id===c)||null};return o.jsx(dh.Provider,{value:m,children:l})}function Ii(){const l=T.useContext(dh);if(!l)throw new Error("useUser must be used within a UserProvider");return l}const Lg=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hh=(...l)=>l.filter((c,p,u)=>!!c&&c.trim()!==""&&u.indexOf(c)===p).join(" ").trim();var Ug={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const _g=T.forwardRef(({color:l="currentColor",size:c=24,strokeWidth:p=2,absoluteStrokeWidth:u,className:d="",children:m,iconNode:h,...b},v)=>T.createElement("svg",{ref:v,...Ug,width:c,height:c,stroke:l,strokeWidth:u?Number(p)*24/Number(c):p,className:hh("lucide",d),...b},[...h.map(([y,A])=>T.createElement(y,A)),...Array.isArray(m)?m:[m]]));const ea=(l,c)=>{const p=T.forwardRef(({className:u,...d},m)=>T.createElement(_g,{ref:m,iconNode:c,className:hh(`lucide-${Lg(l)}`,u),...d}));return p.displayName=`${l}`,p};const qg=ea("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const ue=ea("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const ot=ea("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const Hg=ea("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);const Oe=ea("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const Qg=ea("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const on=ea("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);const Mt=ea("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Yg=ea("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);const Kg=ea("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const Gg=ea("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const Zg=ea("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);const du=ea("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);const Xg=ea("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);const mh=ea("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);const yh=ea("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);const Wg=ea("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);const Eo=ea("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const gh=ea("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);const Vg=ea("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);const Jg=ea("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);const bh=ea("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);const Fg=ea("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const Ue=ea("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);const hu=ea("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);const vh=ea("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);const mu=ea("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const xh=ea("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);const $g=ea("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const yu=ea("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const wh=ea("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);const Ig=ea("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);const kh=ea("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const jh=ea("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);const Le=ea("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);const ab=ea("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);const rn=ea("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);const Nh=ea("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);const tb=ea("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const gu=ea("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const su=ea("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),eb=[{id:"user1",name:"User 1",nameEn:"User 1",color:"#3b82f6",progress:{completedLessons:[],completedPractices:[],completedPhases:[],currentStreak:0,totalXP:0,lastStudyDate:null}},{id:"user2",name:"User 2",nameEn:"User 2",color:"#ec4899",progress:{completedLessons:[],completedPractices:[],completedPhases:[],currentStreak:0,totalXP:0,lastStudyDate:null}},{id:"user3",name:"User 3",nameEn:"User 3",color:"#10b981",progress:{completedLessons:[],completedPractices:[],completedPhases:[],currentStreak:0,totalXP:0,lastStudyDate:null}}],nb={users:eb},le=[{phase:1,title:"مرحله ۱: الفبا و صداهای اصیل",titlePashto:"لومړی پړاو: الفبا او غږونه",duration:"۱-۲ هفته",icon:ot,color:"emerald",description:"شروع یادگیری با الفبای ۴۴ حرفی و تلفظ خاص کندهاری",goals:["شناخت تمام حروف خاص پشتو (ښ، ږ، ځ، څ)","تمرین صداهای برگشته (ټ، ډ، ړ، ڼ)","آشنایی با مصوت‌ها و صدای شوا (ə)","اعداد ۱ تا ۱۰"],lessons:[{id:"alphabet-intro",title:"آشنایی با الفبا"},{id:"unique-letters",title:"حروف خاص پښتو"},{id:"kandahari-sounds",title:"صداهای کندهاری"},{id:"vowels",title:"مصوت‌ها و انواع «ی»"},{id:"numbers-1-10",title:"اعداد ۱ تا ۱۰"}],tips:"تلفظ حروف ښ و ږ در قندهار کلید اصلی لهجه شماست. هر روز تمرین کنید."},{phase:2,title:"مرحله ۲: ارتباطات و معرفی",titlePashto:"دویم پړاو: سلام او معرفي",duration:"۱ هفته",icon:Ue,color:"pink",description:"یادگیری عبارات اولیه برای شروع یک زندگی روزمره در محیط پشتو",goals:["سلام و احوالپرسی گرم کندهاری","معرفی نام، سن و شغل","درک تفاوت احترام در زبان رسمی"],lessons:[{id:"basic-greetings",title:"سلام و خداحافظی"},{id:"how-are-you",title:"حالت چطور است؟"},{id:"introductions",title:"معرفی خود"},{id:"formal-informal",title:"رسمی و غیررسمی"}],tips:'در قندهار احوالپرسی طولانی نشانه احترام است. عبارات "څنګه یاست" را خوب یاد بگیرید.'},{phase:3,title:"مرحله ۳: بلوک‌های ساختمان جمله",titlePashto:"دریم پړاو: د جملې جوړښت پایه",duration:"۱-۲ هفته",icon:rn,color:"blue",description:"شناخت اجزای اصلی جملات قبل از ورود به دنیای فعل‌ها",goals:["ضمایر شخصی و ملکی (زما، ستا)","ضمایر اشاره نزدیک و دور","ترتیب فاعل، مفعول و فعل (SOV)"],lessons:[{id:"pronouns",title:"ضمایر شخصی"},{id:"possessive-pronouns",title:"ضمایر ملکی"},{id:"demonstratives",title:"ضمایر اشاره"},{id:"conjunctions",title:"کلمات ربط (هم، او، خو)"},{id:"sentence-structure",title:"ساختار جمله SOV"}],tips:"پشتو برخلاف انگلیسی، فعل را همیشه در انتهای جمله می‌آورد."},{phase:4,title:"مرحله ۴: قواعد ظریف دستوری",titlePashto:"څلورم پړاو: منځنی ګرامر",duration:"۲ هفته",icon:su,color:"red",description:"یادگیری جنسیت و حالاتی که بر کل جمله تاثیر می‌گذارند",goals:["تشخیص اسامی مذکر و مونث","قواعد جمع بستن اسامی","صفت‌ها و تطابق آن‌ها با موصوف","حروف اضافه مکانی و زمانی"],lessons:[{id:"gender",title:"جنسیت اسم‌ها"},{id:"plural",title:"جمع بستن"},{id:"adjectives",title:"صفت‌ها"},{id:"prepositions",title:"حروف اضافه"},{id:"questions",title:"جملات سوالی"},{id:"negation",title:"جملات منفی"},{id:"directional-prefixes",title:"جادوی پیشوندهای جهتی (Rā/Dar/War)"},{id:"compound-prepositions",title:"ترکیب‌های جادویی (درڅخه/ورڅخه)"},{id:"oblique-case",title:"تغییر شکل کلمات (حالت مغیره)"},{id:"vocative-case",title:"چطور کسی را صدا بزنیم؟ (حالت ندایی)"}],tips:"به پایان کلمات دقت کنید؛ تقریا تمام قواعد به حرف آخر کلمه وابسته است."},{phase:5,title:"مرحله ۵: واژگان و فرهنگ کاربردی",titlePashto:"پنځم پړاو: بنسټیز لغاتونه",duration:"۲ هفته",icon:Vg,color:"teal",description:"گسترش دایره لغات در موضوعات حیاتی زندگی",goals:["روابط خانوادگی گسترده","شمارش تا ۱۰۰ (سیستم شل)","غذاهای سنتی و میوه‌های قندهار","اعضای کامل بدن و رنگ‌ها"],lessons:[{id:"family",title:"خانواده و فامیل"},{id:"numbers-11-100",title:"اعداد ۱۱-۱۰۰"},{id:"food",title:"غذا و نوشیدنی"},{id:"body-parts",title:"اعضای بدن"},{id:"colors",title:"رنگ‌ها"},{id:"days-months",title:"روزها و ماه‌ها"},{id:"household-objects",title:"اشیاء خانگی"},{id:"clothing-appearance",title:"لباس و ظاهر"},{id:"city-locations",title:"شهر و مکان‌ها"},{id:"emotions-feelings",title:"احساسات و عواطف"},{id:"weather-nature",title:"آب و هوا و طبیعت"}],tips:'از سیستم سنتی "شل" (۲۰تایی) برای اعداد استفاده کنید تا مثل یک بومی به نظر برسید.'},{phase:6,title:"مرحله ۶: استادی در افعال (Verb Mastery)",titlePashto:"شپږم پړاو: د فعلونو بشپړ تسلط",duration:"۴-۶ هفته",icon:mu,color:"amber",description:"بزرگترین بخش برنامه؛ یادگیری تمام ۴۰ فعل اصلی در هر سه زمان (حال، گذشته، آینده)",goals:["تسلط بر تمام افعال لازم (Intransitive)","یادگیری سیستم پیچیده ارگتیو برای افعال متعدی","توانایی بیان فعالیت‌های روزمره در گذشته و آینده","درک تفاوت‌های لهجه کندهاری در گردان افعال"],lessons:[{id:"verbs-unified-rules",title:"قواعد جامع افعال"},{id:"progressive-tenses",title:"زمان‌های جاری (استمراری)"},{id:"verb-comp-to-be",title:"۱. بودن (اوسېدل)"},{id:"verb-comp-to-go",title:"۲. رفتن (تلل)"},{id:"verb-comp-to-come",title:"۳. آمدن (راتلل)"},{id:"verb-comp-to-stand",title:"۴. ایستادن (درېدل)"},{id:"verb-comp-to-sit",title:"۵. نشستن (کېناستل)"},{id:"verb-comp-to-sleep",title:"۶. خوابیدن (ویدېدل)"},{id:"verb-comp-to-become",title:"۷. شدن (کېدل)"},{id:"verb-comp-to-understand",title:"۸. فهمیدن (پوهېدل)"},{id:"verb-comp-to-arrive",title:"۹. رسیدن (رسېدل)"},{id:"verb-comp-to-wake-up",title:"۱۰. بیدار شدن (پاڅېدل)"},{id:"verb-comp-to-walk",title:"۱۱. گشتن (ګرځېدل)"},{id:"verb-comp-to-eat",title:"۱۲. خوردن (خوړل)"},{id:"verb-comp-to-drink",title:"۱۳. نوشیدن (څښل)"},{id:"verb-comp-to-do",title:"۱۴. کردن (کول)"},{id:"verb-comp-to-want",title:"۱۵. خواستن (غوښتل)"},{id:"verb-comp-to-see",title:"۱۶. دیدن (لیدل)"},{id:"verb-comp-to-say",title:"۱۷. گفتن (ویل)"},{id:"verb-comp-to-hear",title:"۱۸. شنیدن (اورېدل)"},{id:"verb-comp-to-write",title:"۱۹. نوشتن (لیکل)"},{id:"verb-comp-to-read",title:"۲۰. خواندن (لوستل)"},{id:"verb-comp-to-have",title:"۲۱. داشتن (لرل)"},{id:"verb-comp-to-hit",title:"۲۲. زدن (وهل)"},{id:"verb-comp-to-wash",title:"۲۳. شستن (مینځل)"},{id:"verb-comp-to-give",title:"۲۴. دادن (ورکول)"},{id:"verb-comp-to-take",title:"۲۵. گرفتن (نیول)"},{id:"verb-comp-to-run",title:"۲۶. دویدن (منډې وهل)"},{id:"verb-comp-to-close",title:"۲۷. بستن (ترل)"},{id:"verb-comp-to-open",title:"۲۸. باز کردن (خلاصول)"},{id:"verb-comp-to-carry",title:"۲۹. بردن (وړل)"},{id:"verb-comp-to-bring",title:"۳۰. آوردن (راوړل)"},{id:"verb-comp-to-love",title:"۳۱. دوست داشتن (خوښول)"},{id:"verb-comp-to-work",title:"۳۲. کار کردن (کار کول)"},{id:"verb-comp-to-speak",title:"۳۳. صحبت کردن (خبرې کول)"},{id:"verb-comp-to-live",title:"۳۴. زندگی کردن (ژوند کول)"},{id:"verb-comp-to-learn",title:"۳۵. یاد گرفتن (زده کول)"},{id:"verb-comp-to-pour",title:"۳۶. ریختن (اچول)"},{id:"verb-comp-to-leave",title:"۳۷. ماندن (پرېښودل)"},{id:"verb-comp-to-start",title:"۳۸. مشغول بودن (لګېدل)"},{id:"verb-comp-to-extract",title:"۳۹. بیرون کردن (ایستل)"},{id:"comprehensive-verbs",title:"۴۰. بررسی نهایی تمام افعال"}],tips:"این مرحله سنگین‌ترین بخش گرامری است. صبور باشید و برای هر فعل، جملات تمرینی بخش Drills را خوب تکرار کنید."},{phase:7,title:"مرحله ۷: مکالمات واقعی در قندهار",titlePashto:"اووم پړاو: ژوندي مکالمې",duration:"۳ هفته",icon:Ue,color:"orange",description:"استفاده از تمام آموخته‌ها در سناریوهای کاربردی",goals:["خرید در بازار، چانه زدن و حل اختلاف کندهاری","سفارش غذا و آداب گرم مهمانی در قندهار","مکالمات تلفنی و تشریح علائم بیماری به داکتر","گرفتن تاکسی، آدرس دادن و مصاحبه کاری رسمی"],lessons:[{id:"conv-shopping",title:"در بازار"},{id:"conv-taxi",title:"در تاکسی"},{id:"conv-directions",title:"آدرس و نقشه"},{id:"conv-restaurant",title:"در رستوران"},{id:"conv-guest",title:"آداب مهمانی"},{id:"conv-phone",title:"مکالمه تلفنی"},{id:"conv-doctor",title:"در مطب داکتر"},{id:"conv-market-dispute",title:"حل اختلاف (بازار)"},{id:"conv-job-interview",title:"مصاحبه کاری (رسمی)"},{id:"requests",title:"خواسته‌ها و تقاضا"}],tips:"نقش‌بازی (Role-play) بهترین راه برای شکستن ترس از صحبت کردن است."},{phase:8,title:"مرحله ۸: پیشرفته، فرهنگ و حکمت",titlePashto:"اتم پړاو: کلتور او اصطلاحات",duration:"مداوم",icon:Le,color:"purple",description:"صحبت کردن مانند یک کندهاری اصیل با استفاده از ضرب‌المثل‌ها",goals:["درک اسلنگ‌ها و اصطلاحات کوچه‌بازاری",'استفاده از "متل‌ها" در زمان مناسب',"اصطلاحات تخصصی آشپزی و بدن"],lessons:[{id:"retroflex",title:"صداهای برگشته پیشرفته"},{id:"idioms",title:"اصطلاحات کاربردی"},{id:"proverbs",title:"ضرب‌المثل‌ها (متلونه)"},{id:"kandahari-slang",title:"اسلنگ کندهاری"},{id:"advanced-food-cooking",title:"آشپزی و فعل پخول"},{id:"advanced-body-parts",title:"اعضای داخلی بدن"}],tips:"ضرب‌المثل‌ها روح زبان پشتو هستند. یادگیری آن‌ها شما را به قلب فرهنگ پختون می‌برد."}],Sh=T.createContext(null),Ud="pashto-learning-progress-multi",_d=()=>le,xo=()=>({completedLessons:[],completedPractices:[],completedPhases:[],currentStreak:0,totalXP:0,lastStudyDate:null});function ib({children:l}){const{currentUser:c}=Ii(),[p,u]=T.useState(()=>{try{const z=localStorage.getItem(Ud);if(z)return JSON.parse(z);const M={};return nb.users.forEach(R=>{M[R.id]=R.progress||xo()}),M}catch{return{}}}),d=p[c]||xo();T.useEffect(()=>{localStorage.setItem(Ud,JSON.stringify(p))},[p]);const m=z=>{u(M=>({...M,[c]:{...xo(),...M[c],...z}}))},B={progress:d,allProgress:p,completeLesson:(z,M=10)=>{if(d.completedLessons.includes(z))return;const R=new Date().toDateString(),_=d.lastStudyDate,q=new Date(Date.now()-864e5).toDateString();let H=d.currentStreak;_===q?H+=1:_!==R&&(H=1);const X=[...d.completedLessons,z],ua=[...d.completedPhases];_d().forEach(ja=>{ua.includes(ja.phase)||ja.lessons.every(Ta=>X.includes(Ta.id))&&ua.push(ja.phase)}),m({completedLessons:X,completedPhases:ua,totalXP:d.totalXP+M,currentStreak:H,lastStudyDate:R})},uncompleteLesson:z=>{const M=d.completedLessons.filter(_=>_!==z),R=d.completedPhases.filter(_=>{const H=_d().find(X=>X.phase===_);return H?H.lessons.every(X=>M.includes(X.id)):!0});m({completedLessons:M,completedPhases:R})},completePractice:(z,M=5)=>{d.completedPractices.includes(z)||m({completedPractices:[...d.completedPractices,z],totalXP:d.totalXP+M})},exportProgress:()=>{const z="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(d)),M=document.createElement("a");M.setAttribute("href",z),M.setAttribute("download",`pashto_progress_${c}.json`),document.body.appendChild(M),M.click(),M.remove()},importProgress:z=>{try{const M=typeof z=="string"?JSON.parse(z):z;return m(M),!0}catch(M){return console.error("Import failed",M),!1}},resetAllProgress:()=>{m(xo())},isLessonComplete:z=>d.completedLessons.includes(z),isLessonCompleted:z=>d.completedLessons.includes(z),isPhaseCompleted:z=>d.completedPhases.includes(z),getCategoryProgress:z=>{if(!z||z.length===0)return 0;const M=z.filter(R=>d.completedLessons.includes(R.id)).length;return Math.round(M/z.length*100)},getProgressPercentage:z=>{if(!z||z.length===0)return 0;const M=z.filter(R=>d.completedLessons.includes(R.id)).length;return Math.round(M/z.length*100)}};return o.jsx(Sh.Provider,{value:B,children:l})}function un(){const l=T.useContext(Sh);if(!l)throw new Error("useProgress must be used within a ProgressProvider");return l}function sb({onMenuClick:l}){const{progress:c}=un(),{currentUser:p,users:u,setCurrentUser:d,getCurrentUserData:m}=Ii(),[h,b]=T.useState(!1),[v,y]=T.useState(!1),A=m(),k=z=>{d(z),b(!1)},B=()=>{y(!0),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(z=>{z.forEach(M=>{M.update().then(()=>{M.waiting&&M.waiting.postMessage({type:"SKIP_WAITING"})})})}),setTimeout(()=>{window.location.reload()},500)};return o.jsx("header",{className:"fixed top-0 left-0 right-0 h-14 sm:h-16 bg-slate-900/95 border-b border-slate-700/50 z-50 backdrop-blur-md shadow-lg shadow-black/20",children:o.jsx("div",{className:"h-full px-3 sm:px-6 lg:px-8 max-w-[1920px] mx-auto",children:o.jsxs("div",{className:"flex items-center justify-between h-full",children:[o.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[o.jsx("button",{onClick:l,className:"p-2 hover:bg-slate-800 rounded-xl lg:hidden transition-all border border-slate-700 active:scale-95 group","aria-label":"منو",children:o.jsx(Fg,{className:"w-5 h-5 text-emerald-400 group-hover:rotate-180 transition-transform duration-500"})}),o.jsxs(Pa,{to:"/",className:"flex items-center gap-2.5 sm:gap-4 group",children:[o.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all group-hover:scale-110 active:scale-95",children:o.jsx("span",{className:"text-amber-300 font-bold text-xl sm:text-2xl drop-shadow-sm",children:"ښ"})}),o.jsxs("div",{className:"hidden xs:flex flex-col",children:[o.jsx("h1",{className:"text-sm sm:text-xl font-black text-emerald-400 leading-none tracking-tight",children:"یادگیری پښتو"}),o.jsx("p",{className:"text-[9px] sm:text-xs text-slate-400 font-bold leading-tight mt-0.5 uppercase tracking-widest opacity-80",children:"د پښتو زده کړه"})]})]})]}),o.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[o.jsx("button",{onClick:B,disabled:v,className:"p-2 sm:p-2.5 hover:bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all disabled:opacity-50 hidden sm:flex items-center justify-center group active:scale-90",title:"تازه‌سازی",children:o.jsx(xh,{className:`w-5 h-5 text-cyan-400 transition-all ${v?"animate-spin":"group-hover:rotate-180 duration-500"}`})}),o.jsxs("div",{className:"flex items-center gap-1.5 px-2 sm:px-4 py-1.5 sm:py-2.5 bg-slate-800/40 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all shadow-inner shadow-orange-500/5 group",children:[o.jsx(du,{className:"w-4 h-4 sm:w-5 sm:h-5 text-orange-400 animate-pulse group-hover:scale-110 transition-transform"}),o.jsx("span",{className:"text-xs sm:text-base font-black text-orange-400 drop-shadow-sm",children:c.currentStreak}),o.jsx("span",{className:"hidden sm:inline text-[10px] text-orange-400/60 font-bold uppercase tracking-widest",children:"روز"})]}),o.jsxs("div",{className:"flex items-center gap-1.5 px-2 sm:px-4 py-1.5 sm:py-2.5 bg-slate-800/40 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all shadow-inner shadow-amber-500/5 group",children:[o.jsx(Le,{className:"w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:rotate-12 transition-transform"}),o.jsx("span",{className:"text-xs sm:text-base font-black text-amber-400 drop-shadow-sm",children:c.totalXP}),o.jsx("span",{className:"hidden sm:inline text-[10px] text-amber-400/60 font-bold uppercase tracking-widest",children:"XP"})]}),o.jsxs("div",{className:"relative",children:[o.jsxs("button",{onClick:()=>b(!h),className:`flex items-center gap-2 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-xl border transition-all active:scale-95 ${h?"bg-indigo-500/20 border-indigo-500 shadow-lg shadow-indigo-500/20":"bg-slate-800/40 border-indigo-500/20 hover:border-indigo-500/40"}`,children:[o.jsx("div",{className:"w-5 h-5 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-white text-[10px] sm:text-xs font-black shadow-md",style:{backgroundColor:A?.color||"#6366f1"},children:A?.name.charAt(0)}),o.jsx("span",{className:"hidden sm:inline text-xs sm:text-sm font-black text-indigo-300 tracking-wide uppercase",children:A?.name}),o.jsx(rn,{className:`hidden xs:block w-3.5 h-3.5 text-indigo-400/60 transition-transform duration-300 ${h?"rotate-180":""}`})]}),h&&o.jsxs("div",{className:"absolute top-full left-0 sm:right-0 mt-3 w-56 bg-slate-900/98 rounded-2xl border border-slate-700 shadow-2xl z-[60] py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-200 backdrop-blur-xl",children:[o.jsx("div",{className:"px-4 py-2 border-b border-slate-800 mb-1",children:o.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest",children:"انتخاب کاربر"})}),o.jsx("div",{className:"px-2 space-y-1",children:u.map(z=>o.jsxs("button",{onClick:()=>k(z.id),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${p===z.id?"bg-indigo-500 text-white shadow-lg shadow-indigo-500/25":"hover:bg-slate-800 text-slate-300"}`,children:[o.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black shadow-sm transition-transform group-hover:scale-110 ${p===z.id?"bg-white/20":""}`,style:{backgroundColor:p===z.id?void 0:z.color},children:z.name.charAt(0)}),o.jsxs("div",{className:"text-left flex-1",children:[o.jsx("div",{className:`text-sm font-black leading-none ${p===z.id?"text-white":"text-slate-200"}`,children:z.name}),o.jsx("div",{className:`text-[10px] mt-1 font-bold ${p===z.id?"text-indigo-100/70":"text-slate-500"}`,children:z.nameEn})]}),p===z.id&&o.jsx("div",{className:"w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-sm shadow-white/50"})]},z.id))})]})]}),o.jsx("div",{className:"hidden md:flex items-center gap-3 px-4 py-2 bg-slate-800/40 rounded-xl border border-emerald-500/20 shadow-inner shadow-emerald-500/5",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center",children:o.jsx(Hg,{className:"w-4 h-4 text-emerald-400"})}),o.jsxs("div",{children:[o.jsx("div",{className:"text-[10px] uppercase tracking-wide text-slate-500 font-bold",children:"پیشرفت"}),o.jsxs("div",{className:"text-sm font-black text-slate-200 leading-none mt-0.5",children:[c.completedLessons?.length||0," درس"]})]})]})})]})]})})})}const ob=JSON.parse('[{"id":"basics","name":"۱. مقدماتی","namePashto":"۱. بنسټیز","nameFa":"مقدماتی","icon":"BookOpen","color":"#22c55e","description":"شروع یادگیری پښتو از صفر","order":1,"lessons":[{"id":"alphabet-intro","title":"آشنایی با الفبا","titleFa":"آشنایی با الفبا","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"unique-letters","title":"حروف خاص پښتو","titleFa":"حروف خاص پښتو","difficulty":"easy","duration":"۲۰ دقیقه"},{"id":"kandahari-sounds","title":"صداهای کندهاری","titleFa":"صداهای کندهاری","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"vowels","title":"مصوت‌ها و انواع «ی»","titleFa":"مصوت‌ها و انواع «ی»","difficulty":"easy","duration":"۲۰ دقیقه"},{"id":"numbers-1-10","title":"اعداد ۱ تا ۱۰","titleFa":"اعداد ۱ تا ۱۰","difficulty":"easy","duration":"۱۰ دقیقه"}]},{"id":"greetings","name":"۲. سلام و احوالپرسی","namePashto":"۲. سلام او حال احوال","nameFa":"سلام و احوالپرسی","icon":"MessageCircle","color":"#ec4899","description":"سلام کردن و احوالپرسی روزمره","order":2,"lessons":[{"id":"basic-greetings","title":"سلام و خداحافظی","titleFa":"سلام و خداحافظی","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"how-are-you","title":"حالت چطور است؟","titleFa":"حالت چطور است؟","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"introductions","title":"معرفی خود","titleFa":"معرفی خود","difficulty":"easy","duration":"۲۰ دقیقه"},{"id":"formal-informal","title":"رسمی و غیررسمی","titleFa":"رسمی و غیررسمی","difficulty":"medium","duration":"۲۰ دقیقه"}]},{"id":"pronouns-basics","name":"۳. ضمایر و پایه‌ها","namePashto":"۳. ضمیرونه او بنسټونه","nameFa":"ضمایر و پایه‌ها","icon":"Users","color":"#3b82f6","description":"ضمایر شخصی و ساختار پایه","order":3,"lessons":[{"id":"pronouns","title":"ضمایر شخصی","titleFa":"ضمایر شخصی","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"possessive-pronouns","title":"ضمایر ملکی","titleFa":"ضمایر ملکی","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"demonstratives","title":"ضمایر اشاره","titleFa":"ضمایر اشاره","difficulty":"easy"},{"id":"conjunctions","title":"کلمات ربط","titleFa":"کلمات ربط (هم، او، خو)","difficulty":"easy","duration":"۲۰ دقیقه"},{"id":"sentence-structure","title":"ساختار جمله SOV","titleFa":"ساختار جمله SOV","difficulty":"medium","duration":"۲۰ دقیقه"}]},{"id":"grammar-intermediate","name":"۴. دستور زبان میانی","namePashto":"۴. منځنی ګرامر","nameFa":"دستور زبان میانی","icon":"BookOpen","color":"#ef4444","description":"قواعد دستوری پیشرفته‌تر","order":4,"lessons":[{"id":"gender","title":"جنسیت اسم‌ها","titleFa":"جنسیت اسم‌ها","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"plural","title":"جمع بستن","titleFa":"جمع بستن","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"adjectives","title":"صفت‌ها","titleFa":"صفت‌ها","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"prepositions","title":"حروف اضافه","titleFa":"حروف اضافه","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"questions","title":"جملات سوالی","titleFa":"جملات سوالی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"negation","title":"جملات منفی","titleFa":"جملات منفی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"directional-prefixes","title":"۱. جادوی پیشوندهای جهتی (Rā/Dar/War)","titleFa":"۱. جادوی پیشوندهای جهتی (Rā/Dar/War)","difficulty":"hard","duration":"۲۵ دقیقه"},{"id":"compound-prepositions","title":"ترکیب‌های جادویی (درڅخه/ورڅخه)","titleFa":"ترکیب‌های جادویی (درڅخه/ورڅخه)","difficulty":"hard","duration":"۳۰ دقیقه"},{"id":"oblique-case","title":"۲. تغییر شکل کلمات (حالت مغیره)","titleFa":"۲. تغییر شکل کلمات (حالت مغیره)","difficulty":"hard","duration":"۳۰ دقیقه"},{"id":"vocative-case","title":"۳. چطور کسی را صدا بزنیم؟ (حالت ندایی)","titleFa":"۳. چطور کسی را صدا بزنیم؟ (حالت ندایی)","difficulty":"medium","duration":"۱۵ دقیقه"}]},{"id":"vocabulary-basic","name":"۵. واژگان پایه","namePashto":"۵. بنسټیز لغات","nameFa":"واژگان پایه","icon":"Library","color":"#14b8a6","description":"کلمات ضروری برای مکالمه روزمره","order":5,"lessons":[{"id":"family","title":"خانواده","titleFa":"خانواده","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"numbers-11-100","title":"اعداد ۱۱ تا ۱۰۰","titleFa":"اعداد ۱۱ تا ۱۰۰","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"food","title":"غذا و نوشیدنی","titleFa":"غذا و نوشیدنی","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"body-parts","title":"اعضای بدن","titleFa":"اعضای بدن","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"colors","title":"رنگ‌ها","titleFa":"رنگ‌ها","difficulty":"easy","duration":"۱۰ دقیقه"},{"id":"days-months","title":"روزها و ماه‌ها","titleFa":"روزها و ماه‌ها","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"household-objects","title":"اشیاء خانه","titleFa":"اشیاء خانه","difficulty":"easy","duration":"۲۰ دقیقه"},{"id":"clothing-appearance","title":"لباس و ظاهر","titleFa":"لباس و ظاهر","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"city-locations","title":"شهر و مکان‌ها","titleFa":"شهر و مکان‌ها","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"emotions-feelings","title":"احساسات و عواطف","titleFa":"احساسات و عواطف","difficulty":"easy","duration":"۱۵ دقیقه"},{"id":"weather-nature","title":"آب و هوا و طبیعت","titleFa":"آب و هوا و طبیعت","difficulty":"easy","duration":"۱۵ دقیقه"}]},{"id":"comprehensive-verbs","name":"۶. راهنمای جامع افعال","namePashto":"۶. د فعلونو جامع لارښود","nameFa":"راهنمای جامع افعال","icon":"BookOpen","color":"#f59e0b","description":"آموزش کامل ۳۲ فعل اصلی (حال، گذشته، آینده و امری) با تمام ضمایر","order":6,"lessons":[{"id":"verbs-unified-rules","title":"۱. نقشه‌ی راه افعال (قواعد کلی)","titleFa":"۱. نقشه‌ی راه افعال (قواعد کلی)","difficulty":"hard","duration":"۳۰ دقیقه"},{"id":"progressive-tenses","title":"زمان‌های جاری (استمراری)","titleFa":"زمان‌های جاری (استمراری)","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-be","title":"۲. بودن (اوسېدل) - لازم","titleFa":"۲. بودن (اوسېدل) - لازم","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-go","title":"۳. رفتن (تلل) - لازم","titleFa":"۳. رفتن (تلل) - لازم","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-come","title":"۴. آمدن (راتلل) - لازم","titleFa":"۴. آمدن (راتلل) - لازم","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-stand","title":"۵. ایستادن (درېدل) - لازم","titleFa":"۵. ایستادن (درېدل) - لازم","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-sit","title":"۶. نشستن (کېناستل) - لازم","titleFa":"۶. نشستن (کېناستل) - لازم","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-sleep","title":"۷. خوابیدن (ویدېدل) - لازم","titleFa":"۷. خوابیدن (ویدېدل) - لازم","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-become","title":"۸. شدن (کېدل) - لازم","titleFa":"۸. شدن (کېدل) - لازم","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-understand","title":"۹. فهمیدن (پوهېدل) - لازم","titleFa":"۹. فهمیدن (پوهېدل) - لازم","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-arrive","title":"۱۰. رسیدن (رسېدل) - لازم","titleFa":"۱۰. رسیدن (رسېدل) - لازم","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-wake-up","title":"۱۱. بیدار شدن (پاڅېدل) - لازم","titleFa":"۱۱. بیدار شدن (پاڅېدل) - لازم","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-walk","title":"۱۲. گشتن (ګرځېدل) - لازم","titleFa":"۱۲. گشتن (ګرځېدل) - لازم","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-eat","title":"۱۳. خوردن (خوړل) - متعدی","titleFa":"۱۳. خوردن (خوړل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-drink","title":"۱۴. نوشیدن (څښل) - متعدی","titleFa":"۱۴. نوشیدن (څښل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-do","title":"۱۵. کردن (کول) - متعدی","titleFa":"۱۵. کردن (کول) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-want","title":"۱۶. خواستن (غوښتل) - متعدی","titleFa":"۱۶. خواستن (غوښتل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-see","title":"۱۷. دیدن (لیدل) - متعدی","titleFa":"۱۷. دیدن (لیدل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-say","title":"۱۸. گفتن (ویل) - متعدی","titleFa":"۱۸. گفتن (ویل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-hear","title":"۱۹. شنیدن (اورېدل) - متعدی","titleFa":"۱۹. شنیدن (اورېدل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-write","title":"۲۰. نوشتن (لیکل) - متعدی","titleFa":"۲۰. نوشتن (لیکل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-read","title":"۲۱. خواندن (لوستل) - متعدی","titleFa":"۲۱. خواندن (لوستل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-have","title":"۲۲. داشتن (لرل) - متعدی","titleFa":"۲۲. داشتن (لرل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-hit","title":"۲۳. زدن (وهل) - متعدی","titleFa":"۲۳. زدن (وهل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-wash","title":"۲۴. شستن (مینځل) - متعدی","titleFa":"۲۴. شستن (مینځل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-give","title":"۲۵. دادن (ورکول) - متعدی","titleFa":"۲۵. دادن (ورکول) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-take","title":"۲۶. گرفتن (نیول) - متعدی","titleFa":"۲۶. گرفتن (نیول) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-run","title":"۲۷. دویدن (منډې وهل) - متعدی","titleFa":"۲۷. دویدن (منډې وهل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-close","title":"۲۸. بستن (ترل) - متعدی","titleFa":"۲۸. بستن (ترل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-open","title":"۲۹. باز کردن (خلاصول) - متعدی","titleFa":"۲۹. باز کردن (خلاصول) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-carry","title":"۳۰. بردن (وړل) - متعدی","titleFa":"۳۰. بردن (وړل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-bring","title":"۳۱. آوردن (راوړل) - متعدی","titleFa":"۳۱. آوردن (راوړل) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-love","title":"۳۲. دوست داشتن (خوښول) - متعدی","titleFa":"۳۲. دوست داشتن (خوښول) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-work","title":"۳۳. کار کردن (کار کول) - متعدی","titleFa":"۳۳. کار کردن (کار کول) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-speak","title":"۳۴. صحبت کردن (خبرې کول) - متعدی","titleFa":"۳۴. صحبت کردن (خبرې کول) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-live","title":"۳۵. زندگی کردن (ژوند کول) - متعدی","titleFa":"۳۵. زندگی کردن (ژوند کول) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-learn","title":"۳۶. یاد گرفتن (زده کول) - متعدی","titleFa":"۳۶. یاد گرفتن (زده کول) - متعدی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-pour","title":"۳۷. ریختن (اچول) - متعدی","titleFa":"۳۷. ریختن (اچول) - متعدی","difficulty":"hard","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-leave","title":"۳۸. ماندن (پرېښودل) - متعدی","titleFa":"۳۸. ماندن (پرېښودل) - متعدی","difficulty":"hard","duration":"۲۰ دقیقه"},{"id":"verb-comp-to-start","title":"۳۹. مشغول بودن (لګېدل) - مختلط","titleFa":"۳۹. مشغول بودن (لګېدل) - مختلط","difficulty":"hard","duration":"۲۵ دقیقه"},{"id":"verb-comp-to-extract","title":"۴۰. بیرون کردن (ایستل) - متعدی","titleFa":"۴۰. بیرون کردن (ایستل) - متعدی","difficulty":"hard","duration":"۲۰ دقیقه"},{"id":"comprehensive-verbs","title":"۴۱. بررسی نهایی تمام افعال","titleFa":"۴۱. بررسی نهایی تمام افعال","difficulty":"hard","duration":"۴۵ دقیقه"}]},{"id":"conversations","name":"۷. مکالمات روزمره","namePashto":"۷. ورځنۍ خبرې","nameFa":"مکالمات روزمره","icon":"MessageSquare","color":"#f97316","description":"مکالمات عملی در موقعیت‌های مختلف","order":8,"lessons":[{"id":"conv-shopping","title":"در بازار","titleFa":"در بازار","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"conv-taxi","title":"در تاکسی","titleFa":"در تاکسی","difficulty":"medium","duration":"۲۰ دقیقه"},{"id":"conv-directions","title":"آدرس و نقشه","titleFa":"آدرس و نقشه","difficulty":"medium","duration":"۳۰ دقیقه"},{"id":"conv-restaurant","title":"در رستوران","titleFa":"در رستوران","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"conv-guest","title":"مهمانی","titleFa":"مهمانی","difficulty":"medium","duration":"۳۰ دقیقه"},{"id":"conv-phone","title":"مکالمه تلفنی","titleFa":"مکالمه تلفنی","difficulty":"medium","duration":"۲۵ دقیقه"},{"id":"conv-doctor","title":"در مطب داکتر","titleFa":"در مطب داکتر","difficulty":"hard","duration":"۳۰ دقیقه"},{"id":"conv-market-dispute","title":"حل اختلاف (بازار)","titleFa":"حل اختلاف (بازار)","difficulty":"hard","duration":"۳۰ دقیقه"},{"id":"conv-job-interview","title":"مصاحبه کاری","titleFa":"مصاحبه کاری","difficulty":"hard","duration":"۳۵ دقیقه"},{"id":"requests","title":"خواسته‌ها و تقاضا","titleFa":"خواسته‌ها و تقاضا","difficulty":"medium","duration":"۲۰ دقیقه"}]},{"id":"advanced","name":"۸. پیشرفته","namePashto":"۸. پرمختللی","nameFa":"پیشرفته","icon":"Star","color":"#a855f7","description":"موضوعات پیشرفته و اصطلاحات","order":9,"lessons":[{"id":"retroflex","title":"صداهای برگشته","titleFa":"صداهای برگشته","difficulty":"hard","duration":"۲۵ دقیقه"},{"id":"idioms","title":"اصطلاحات","titleFa":"اصطلاحات","difficulty":"hard","duration":"۳۰ دقیقه"},{"id":"proverbs","title":"ضرب‌المثل‌ها","titleFa":"ضرب‌المثل‌ها","difficulty":"hard","duration":"۳۰ دقیقه"},{"id":"kandahari-slang","title":"اصطلاحات کندهاری","titleFa":"اصطلاحات کندهاری","difficulty":"hard","duration":"۲۵ دقیقه"},{"id":"advanced-food-cooking","title":"کولو (Cooking)","titleFa":"کولو (Cooking)","difficulty":"hard","duration":"۲۵ دقیقه"},{"id":"advanced-body-parts","title":"جسم کے حصے","titleFa":"جسم کے حصے","difficulty":"hard","duration":"۲۵ دقیقه"}]}]'),Vi={categories:ob},lb={Languages:Eo,BookOpen:ot,MessageCircle:Ue,Hash:mh,Users:rn,Heart:yh,Utensils:Nh,Palette:vh,Play:mu,MessageSquareText:hu,Layers:gh},rb=[{id:"roadmap",path:"/roadmap",icon:bh,label:"نقشه راه",labelPs:"لارښود",color:"#6366f1"},{id:"alphabet",path:"/alphabet",icon:Eo,label:"الفبا",labelPs:"الفبا",color:"#10b981"},{id:"conjugation",path:"/conjugation",icon:Ig,label:"گردان فعل",labelPs:"فعلونه",color:"#f59e0b"},{id:"conversations",path:"/conversation",icon:Ue,label:"مکالمات",labelPs:"خبرې",color:"#8b5cf6"}];function ub({isOpen:l,onClose:c}){const{isLessonComplete:p,getCategoryProgress:u}=un(),[d,m]=T.useState("basics"),h=b=>{m(d===b?null:b)};return o.jsxs(o.Fragment,{children:[l&&o.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden",onClick:c}),o.jsxs("aside",{className:`
          fixed top-14 sm:top-16 bottom-0 z-30 bg-slate-800 border-slate-700
          w-64 sm:w-72 transition-transform duration-300 ease-in-out
          right-0 border-l
          ${l?"translate-x-0":"translate-x-full"}
          lg:translate-x-0
          overflow-hidden flex flex-col
        `,children:[o.jsxs("div",{className:"flex items-center justify-between p-3 sm:p-4 border-b border-slate-700 bg-slate-800 flex-shrink-0",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center",children:o.jsx(gh,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400"})}),o.jsx("h2",{className:"font-bold text-slate-200 text-sm sm:text-base",children:"دسته‌بندی‌ها"})]}),o.jsx("button",{onClick:c,className:"lg:hidden p-1.5 sm:p-2 hover:bg-slate-700 rounded-lg transition-colors",children:o.jsx(gu,{className:"w-4 h-4 sm:w-5 sm:h-5 text-slate-400"})})]}),o.jsx("div",{className:"p-2 sm:p-3 border-b border-slate-700 flex-shrink-0",children:o.jsx("div",{className:"grid grid-cols-4 gap-1 sm:gap-2",children:rb.map(b=>{const v=b.icon;return o.jsxs(iu,{to:b.path,onClick:c,className:({isActive:y})=>`flex flex-col items-center gap-0.5 sm:gap-1 p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all ${y?"bg-slate-700 border border-emerald-500/50":"hover:bg-slate-700/50 border border-transparent"}`,children:[o.jsx("div",{className:"w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center",style:{backgroundColor:`${b.color}20`},children:o.jsx(v,{className:"w-3 h-3 sm:w-4 sm:h-4",style:{color:b.color}})}),o.jsx("span",{className:"text-[8px] sm:text-[10px] font-medium text-slate-400 text-center leading-tight",children:b.label})]},b.id)})})}),o.jsx("nav",{className:"flex-1 overflow-y-auto p-2 sm:p-3 space-y-1.5 sm:space-y-2",children:Vi.categories.map((b,v)=>{const y=lb[b.icon]||ot,A=u?u(b.lessons):0,k=d===b.id,B=b.lessons?.filter(R=>p(R.id)).length||0,z=b.lessons?.length||0,M=B===z&&z>0;return o.jsxs("div",{className:`rounded-lg sm:rounded-xl overflow-hidden border transition-all duration-200 ${k?"border-slate-600 bg-slate-700/50":"border-slate-700 bg-slate-800 hover:bg-slate-700/30 hover:border-slate-600"}`,children:[o.jsxs("button",{onClick:()=>h(b.id),className:`
                    w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 text-right transition-all
                    ${k?"bg-slate-700/50":"hover:bg-slate-700/30"}
                  `,children:[o.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0",style:{background:`${b.color}20`,border:`1px solid ${b.color}40`},children:o.jsx(y,{className:"w-4 h-4 sm:w-5 sm:h-5",style:{color:b.color}})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-center gap-1 sm:gap-2",children:[o.jsxs("span",{className:"font-semibold text-slate-200 text-xs sm:text-sm truncate",children:[v+1,". ",b.nameFa]}),M&&o.jsx(Mt,{className:"w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0"})]}),o.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1",children:[o.jsx("div",{className:"flex-1 h-1 sm:h-1.5 bg-slate-600 rounded-full overflow-hidden",children:o.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${A}%`,background:`linear-gradient(90deg, ${b.color}, ${b.color}cc)`}})}),o.jsxs("span",{className:"text-[10px] sm:text-xs font-medium text-slate-500 whitespace-nowrap",children:[B,"/",z]})]})]}),o.jsx("div",{className:`w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg flex items-center justify-center transition-all ${k?"bg-slate-600":"bg-slate-700"}`,children:k?o.jsx(Oe,{className:"w-3 h-3 sm:w-4 sm:h-4 text-slate-400"}):o.jsx(Qg,{className:"w-3 h-3 sm:w-4 sm:h-4 text-slate-500"})})]}),k&&b.lessons&&o.jsx("div",{className:"border-t border-slate-600 bg-slate-800/50",children:o.jsx("ul",{className:"py-1.5 sm:py-2 px-1.5 sm:px-2 space-y-0.5 sm:space-y-1",children:b.lessons.map(R=>{const _=p(R.id);return o.jsx("li",{children:o.jsxs(iu,{to:`/lesson/${R.id}`,onClick:c,className:({isActive:q})=>`flex items-center gap-2 px-2 sm:px-3 py-2 sm:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm transition-all ${q?"bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 font-semibold":"text-slate-400 hover:bg-slate-700/50 hover:text-slate-300 border border-transparent"}`,children:[_?o.jsx("div",{className:"w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500/30 flex items-center justify-center flex-shrink-0",children:o.jsx(Mt,{className:"w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400"})}):o.jsx("div",{className:"w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-slate-600 flex-shrink-0 bg-slate-700"}),o.jsx("span",{className:"truncate flex-1",children:R.titleFa||R.title})]})},R.id)})})})]},b.id)})}),o.jsx("div",{className:"p-3 sm:p-4 border-t border-slate-700 bg-slate-800 flex-shrink-0",children:o.jsxs("div",{className:"flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate-500",children:[o.jsx(yu,{className:"w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400"}),o.jsx("span",{className:"font-medium",children:"پښتو کندهاری"})]})})]})]})}function cb({children:l}){const[c,p]=T.useState(!1);return o.jsxs("div",{className:"min-h-screen bg-slate-900 rtl flex flex-col",dir:"rtl",children:[o.jsx(sb,{onMenuClick:()=>p(!0)}),o.jsxs("div",{className:"flex flex-1 pt-14 sm:pt-16",children:[o.jsx(ub,{isOpen:c,onClose:()=>p(!1)}),o.jsx("main",{className:"flex-1 p-3 sm:p-4 md:p-6 lg:p-8 overflow-auto min-h-[calc(100vh-64px)] lg:mr-72",children:l})]})]})}function pb(){const[l,c]=T.useState(!1),[p,u]=T.useState(null);T.useEffect(()=>{if(!("serviceWorker"in navigator))return;const h=v=>{v.waiting&&(u(v),c(!0))};navigator.serviceWorker.ready.then(v=>{v.addEventListener("controllerchange",()=>{window.location.reload()}),v.waiting&&h(v)}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.location.reload()});const b=setInterval(()=>{navigator.serviceWorker.getRegistrations().then(v=>{v.forEach(y=>{y.update(),y.waiting&&h(y)})})},6e4);return()=>clearInterval(b)},[]);const d=()=>{p?.waiting&&(p.waiting.postMessage({type:"SKIP_WAITING"}),c(!1))},m=()=>{c(!1)};return l?o.jsx("div",{className:"fixed bottom-4 right-4 z-[9999] max-w-sm pointer-events-auto",children:o.jsx("div",{className:"bg-slate-800 border border-emerald-500/50 rounded-xl p-4 shadow-2xl",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0",children:o.jsx(xh,{className:"w-5 h-5 text-emerald-400 animate-spin"})}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"font-bold text-white mb-1",children:"نسخه جدید موجود است"}),o.jsx("p",{className:"text-sm text-slate-400 mb-3",children:"یک نسخه جدید از اپلیکیشن دریافت شده است. برای استفاده از آن، صفحه را تازه‌سازی کنید."}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{onClick:d,className:"flex-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors",children:"تازه‌سازی"}),o.jsx("button",{onClick:m,className:"px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-semibold rounded-lg transition-colors",children:"بعدا"})]})]}),o.jsx("button",{onClick:m,className:"text-slate-400 hover:text-slate-300 transition-colors flex-shrink-0",children:o.jsx(gu,{className:"w-5 h-5"})})]})})}):null}function fb(){const l=ru(),{users:c,setCurrentUser:p}=Ii(),u=d=>{p(d),l("/")};return o.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",children:o.jsxs("div",{className:"w-full max-w-2xl",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsx("div",{className:"flex items-center justify-center gap-3 mb-4",children:o.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30",children:o.jsx(rn,{className:"w-8 h-8 text-white"})})}),o.jsx("h1",{className:"text-4xl font-bold text-white mb-2",children:"انتخاب کاربر"}),o.jsx("p",{className:"text-slate-400",children:"کاربر خود را انتخاب کنید"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:c.map(d=>o.jsxs("button",{onClick:()=>u(d.id),className:"group relative overflow-hidden rounded-2xl p-6 bg-slate-800 border border-slate-700 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/20",children:[o.jsx("div",{className:"absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity",style:{backgroundColor:d.color}}),o.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-4",children:[o.jsx("div",{className:"w-20 h-20 rounded-xl flex items-center justify-center text-white font-bold text-3xl shadow-lg",style:{backgroundColor:d.color},children:d.name.charAt(0)}),o.jsxs("div",{className:"text-center",children:[o.jsx("h3",{className:"text-2xl font-bold text-white",children:d.name}),o.jsx("p",{className:"text-sm text-slate-400",children:d.nameEn})]}),o.jsx(Jg,{className:"w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors"})]})]},d.id))}),o.jsx("div",{className:"bg-indigo-500/10 rounded-2xl p-4 border border-indigo-500/30 text-center",children:o.jsx("p",{className:"text-sm text-indigo-300",children:"هر کاربر پیشرفت خود را جداگانه ذخیره می‌کند"})})]})})}function db(){const{users:l,currentUser:c,setCurrentUser:p}=Ii(),{progress:u,exportProgress:d,importProgress:m}=un(),[h,b]=T.useState({}),v=T.useRef(null);T.useEffect(()=>{try{const M=localStorage.getItem("pashto-learning-progress-multi");M&&b(JSON.parse(M))}catch{b({})}},[u]);const y=M=>h[M]||{completedLessons:[],completedPractices:[],completedPhases:[],currentStreak:0,totalXP:0,lastStudyDate:null},A=()=>le.reduce((M,R)=>M+R.lessons.length,0),k=M=>{const R=y(M),_=R.completedLessons?.length||0,q=A(),H=Math.min(100,Math.round(_/q*100));return{completedLessons:_,totalLessons:q,percentage:H,xp:R.totalXP||0,streak:R.currentStreak||0,phases:R.completedPhases?.length||0}},B=M=>{const R=M.target.files[0];if(R){const _=new FileReader;_.onload=q=>{const H=q.target.result;m(H),alert("اطلاعات با موفقیت بازیابی شد!")},_.readAsText(R)}},z=[...l].sort((M,R)=>{const _=k(M.id);return k(R.id).percentage-_.percentage});return o.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30",children:o.jsx(rn,{className:"w-7 h-7 text-white"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:"تحصیلات و آمار"}),o.jsx("p",{className:"text-slate-400",children:"مدیریت پیشرفت و دیتای محلی"})]})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsxs("button",{onClick:d,className:"flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl transition-all shadow-lg shadow-emerald-500/20",children:[o.jsx(Zg,{className:"w-4 h-4"}),o.jsx("span",{className:"text-sm font-bold",children:"پشتیبان‌گیری (JSON)"})]}),o.jsxs("button",{onClick:()=>v.current.click(),className:"flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-xl transition-all border border-slate-600",children:[o.jsx(ab,{className:"w-4 h-4"}),o.jsx("span",{className:"text-sm font-bold",children:"بازیابی اطلاعات"})]}),o.jsx("input",{type:"file",ref:v,onChange:B,accept:".json",className:"hidden"})]})]}),o.jsxs("div",{className:"bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-4 flex items-start gap-4",children:[o.jsx($g,{className:"w-6 h-6 text-indigo-400 shrink-0 mt-1"}),o.jsxs("div",{className:"text-sm text-indigo-200/80 leading-relaxed",children:[o.jsx("p",{className:"font-bold text-indigo-300 mb-1",children:"امنیت داده‌های شما:"}),"با استفاده از دکمه پشتیبان‌گیری، می‌توانید پیشرفت خود را به صورت یک فایل ذخیره کرده و در هر زمان (حتی پس از آپدیت سیستم یا تغییر مرورگر) دوباره بازیابی کنید. این فایل شامل تمام دروس تیک خورده و امتیازات شماست."]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:z.map((M,R)=>{const _=k(M.id),q=c===M.id;return o.jsxs("div",{className:`rounded-2xl p-6 border transition-all cursor-pointer relative overflow-hidden ${q?"bg-slate-800 border-indigo-500/50 shadow-lg shadow-indigo-500/20":"bg-slate-800 border-slate-700 hover:border-slate-600"}`,onClick:()=>p(M.id),children:[R===0&&o.jsxs("div",{className:"absolute top-4 right-4 bg-amber-500/20 border border-amber-500/50 rounded-lg px-3 py-1 flex items-center gap-2",children:[o.jsx(Le,{className:"w-4 h-4 text-amber-400"}),o.jsx("span",{className:"text-xs font-bold text-amber-300",children:"رتبه ۱"})]}),o.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[o.jsx("div",{className:"w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg",style:{backgroundColor:M.color},children:M.name.charAt(0)}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"text-lg font-bold text-white",children:M.name}),o.jsx("p",{className:"text-sm text-slate-400",children:M.nameEn})]})]}),o.jsxs("div",{className:"mb-6",children:[o.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[o.jsx("span",{className:"text-slate-400",children:"پیشرفت کل"}),o.jsxs("span",{className:"text-indigo-400 font-bold",children:[_.percentage,"%"]})]}),o.jsx("div",{className:"h-2 bg-slate-700 rounded-full overflow-hidden",children:o.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500",style:{width:`${_.percentage}%`}})})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[o.jsxs("div",{className:"bg-slate-700/30 rounded-lg p-3 border border-slate-600/50",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx(ot,{className:"w-4 h-4 text-emerald-400"}),o.jsx("span",{className:"text-xs text-slate-400",children:"درس‌ها"})]}),o.jsxs("p",{className:"text-lg font-bold text-white",children:[_.completedLessons,"/",_.totalLessons]})]}),o.jsxs("div",{className:"bg-slate-700/30 rounded-lg p-3 border border-slate-600/50",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx(Le,{className:"w-4 h-4 text-amber-400"}),o.jsx("span",{className:"text-xs text-slate-400",children:"امتیاز"})]}),o.jsx("p",{className:"text-lg font-bold text-white",children:_.xp})]}),o.jsxs("div",{className:"bg-slate-700/30 rounded-lg p-3 border border-slate-600/50",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx(du,{className:"w-4 h-4 text-orange-400"}),o.jsx("span",{className:"text-xs text-slate-400",children:"رشته"})]}),o.jsx("p",{className:"text-lg font-bold text-white",children:_.streak})]}),o.jsxs("div",{className:"bg-slate-700/30 rounded-lg p-3 border border-slate-600/50",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx(jh,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{className:"text-xs text-slate-400",children:"مراحل"})]}),o.jsxs("p",{className:"text-lg font-bold text-white",children:[_.phases,"/",le.length]})]})]}),q&&o.jsx("div",{className:"mt-4 pt-4 border-t border-slate-700 flex justify-center",children:o.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",children:"کاربر فعال"})})]},M.id)})}),o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[o.jsxs("h2",{className:"text-xl font-bold text-white mb-4 flex items-center gap-2",children:[o.jsx(Le,{className:"w-6 h-6 text-amber-400"}),"جدول قهرمانان"]}),o.jsx("div",{className:"space-y-2",children:z.map((M,R)=>{const _=k(M.id),q=["🥇","🥈","🥉"];return o.jsxs("div",{className:"flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-slate-500 transition-all",children:[o.jsx("div",{className:"text-2xl font-bold w-8 text-center",children:R<3?q[R]:`${R+1}.`}),o.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold shadow-md",style:{backgroundColor:M.color},children:M.name.charAt(0)}),o.jsxs("div",{className:"flex-1",children:[o.jsx("p",{className:"font-semibold text-white",children:M.name}),o.jsxs("p",{className:"text-xs text-slate-400",children:[_.completedLessons," درس با موفقیت گذرانده شده"]})]}),o.jsxs("div",{className:"text-right",children:[o.jsxs("p",{className:"text-lg font-bold text-indigo-400",children:[_.percentage,"%"]}),o.jsxs("p",{className:"text-xs text-slate-400",children:[_.xp," XP"]})]})]},M.id)})})]})]})}function hb(){const{progress:l}=un();return o.jsxs("div",{className:"max-w-4xl mx-auto space-y-8",children:[o.jsxs("div",{className:"bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl",children:[o.jsxs("div",{className:"flex items-start justify-between mb-4",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-3xl font-bold mb-2",children:"به یادگیری پښتو خوش آمدید"}),o.jsx("p",{className:"text-emerald-100 text-lg",children:"د پښتو زده کړې ته ښه راغلاست"})]}),o.jsx("div",{className:"w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center",children:o.jsx("span",{className:"text-4xl font-bold",children:"پ"})})]}),o.jsx("p",{className:"text-emerald-50 mb-6",children:"پښتو کندهاری را با تمرین‌های تعاملی یاد بگیرید"}),o.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[o.jsxs("div",{className:"bg-white/20 backdrop-blur rounded-xl p-4 text-center",children:[o.jsx(Le,{className:"w-8 h-8 mx-auto mb-2"}),o.jsx("div",{className:"text-3xl font-bold",children:l.totalXP}),o.jsx("div",{className:"text-sm text-emerald-100",children:"امتیاز XP"})]}),o.jsxs("div",{className:"bg-white/20 backdrop-blur rounded-xl p-4 text-center",children:[o.jsx(du,{className:"w-8 h-8 mx-auto mb-2"}),o.jsx("div",{className:"text-3xl font-bold",children:l.currentStreak}),o.jsx("div",{className:"text-sm text-emerald-100",children:"روزهای متوالی"})]}),o.jsxs("div",{className:"bg-white/20 backdrop-blur rounded-xl p-4 text-center",children:[o.jsx(kh,{className:"w-8 h-8 mx-auto mb-2"}),o.jsx("div",{className:"text-3xl font-bold",children:l.completedLessons?.length||0}),o.jsx("div",{className:"text-sm text-emerald-100",children:"درس تکمیل شده"})]})]})]}),o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[o.jsxs("h2",{className:"text-xl font-bold text-slate-200 mb-6 flex items-center gap-3",children:[o.jsx("div",{className:"w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center",children:o.jsx(jh,{className:"w-5 h-5 text-emerald-400"})}),"شروع سریع"]}),o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[o.jsxs(Pa,{to:"/alphabet",className:"bg-slate-700/50 rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-slate-700 transition-all flex flex-col items-center text-center group",children:[o.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30",children:o.jsx(Eo,{className:"w-8 h-8 text-white"})}),o.jsx("span",{className:"font-bold text-slate-200 text-lg",children:"الفبا"}),o.jsx("span",{className:"text-sm text-slate-400 mt-1",children:"۴۴ حرف پښتو"})]}),o.jsxs(Pa,{to:"/vocabulary",className:"bg-slate-700/50 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 hover:bg-slate-700 transition-all flex flex-col items-center text-center group",children:[o.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30",children:o.jsx(ot,{className:"w-8 h-8 text-white"})}),o.jsx("span",{className:"font-bold text-slate-200 text-lg",children:"واژگان"}),o.jsx("span",{className:"text-sm text-slate-400 mt-1",children:"۹ دسته‌بندی"})]}),o.jsxs(Pa,{to:"/conversation",className:"bg-slate-700/50 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 hover:bg-slate-700 transition-all flex flex-col items-center text-center group",children:[o.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30",children:o.jsx(Ue,{className:"w-8 h-8 text-white"})}),o.jsx("span",{className:"font-bold text-slate-200 text-lg",children:"مکالمات"}),o.jsx("span",{className:"text-sm text-slate-400 mt-1",children:"۶ موقعیت"})]}),o.jsxs(Pa,{to:"/vocabulary/slang",className:"bg-slate-700/50 rounded-xl p-6 border border-amber-500/30 hover:border-amber-500/60 hover:bg-slate-700 transition-all flex flex-col items-center text-center group",children:[o.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30",children:o.jsx(hu,{className:"w-8 h-8 text-white"})}),o.jsx("span",{className:"font-bold text-slate-200 text-lg",children:"اصطلاحات"}),o.jsx("span",{className:"text-sm text-slate-400 mt-1",children:"کندهاری"})]})]})]}),o.jsx("div",{className:"bg-slate-800 rounded-2xl p-6 border border-amber-500/30 shadow-lg",children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0",children:o.jsx(yu,{className:"w-6 h-6 text-amber-400"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-bold text-amber-300 text-lg mb-2",children:"نکته یادگیری"}),o.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["در گویش کندهاری، حروف ",o.jsx("span",{className:"font-bold text-amber-400 text-xl mx-1",children:"ښ"})," و ",o.jsx("span",{className:"font-bold text-amber-400 text-xl mx-1",children:"ږ"}),' صداهای برگشته (retroflex) دارند. برای تلفظ صحیح، نوک زبان را به سمت سقف دهان ببرید و صدای "ش" یا "ژ" عمیق‌تری بدهید.']})]})]})})]})}const mb={id:"alphabet-intro",title:"آشنایی با الفبای پښتو",titlePashto:"د پښتو الفبا پېژندنه",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
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
`,hasPractice:!0,practiceId:"alphabet-intro"},yb={id:"unique-letters",title:"حروف خاص پښتو",titlePashto:"د پښتو ځانګړي توري",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
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
`,hasPractice:!0,practiceId:"unique-letters"},gb={id:"kandahari-sounds",title:"صداهای کندهاری (ښ و ږ)",titlePashto:"کندهارۍ غږونه (ښ او ږ)",difficulty:"medium",estimatedTime:"۱۵ دقیقه",content:`
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
`,hasPractice:!0,practiceId:"kandahari-sounds"},bb={id:"vowels",title:"مصوت‌ها و انواع «ی»",titlePashto:"غږونه او د «ی» ډولونه",difficulty:"easy",estimatedTime:"۲۰ دقیقه",content:`
# راهنمای جامع مصوت‌ها و انواع «ی» در پښتو

در زبان پښتو، دقت در تلفظ مصوت‌ها (صداها) تفاوت بین کلمات را مشخص می‌کند. این درس زیربنای خواندن و نوشتن شماست.

---

## ۱. حرکات (Short Vowels / Diacritics)

پشتو از حرکات مشابه فارسی استفاده می‌کند، اما یک صدای اضافی و بسیار مهم دارد:

| حرکت | نام پښتو | تلفظ | مثال | معنی |
|:---:|:---|:---:|:---|:---|
| **ـَـ** | **زوار** (Zwar) | a | **کَر** (Kar) | کار / کشت |
| **ـِـ** | **زېر** (Zer) | i | **دِل** (Dil) | دل |
| **ـُـ** | **پېش** (Pesh) | u | **پُل** (Pul) | پل |
| **ـًـ** | **زوارکی** (Zwarakay) | **ə** | **ميز** (Məz) | میز |

> **نکته طلایی (Zwarakay):** حرف «زوارکی» (ə) یک صدای بسیار کوتاه و خنثی است (شبیه صدای آخر 'e' در کلمه انگلیسی 'The'). این صدا در لهجه کندهاری بسیار شنیده می‌شود.

---

## ۲. پنج نوع «ی» (The 5 Types of Ya)

این بخش قلب تپنده نگارش پښتو است. هر «ی» کاربرد گرامری خاصی دارد:

### ۱. ی (یای نرم / Nar-ina Ya)
- **تلفظ**: شبیه 'i' کشیده یا 'ay' (در انتهای کلمات مذکر).
- **مثال**: **سَړی** (Saṛay - مَرد)، **زْمَری** (Zmaray - شیر).

### ۲. ې (یای مجکول / Malima Ya)
- **تلفظ**: شبیه 'e' کشیده (مثل 'Hey' در انگلیسی).
- **مثال**: **ښې** (Ṣ̌e - خوب/مونث)، **ناوې** (Nāwe - عروس).

### ۳. ۍ (یای ثقیله / Barkhara Ya)
- **تلفظ**: صدایی بین 'ay' و 'i' (بسیار کوتاه و محکم).
- **مثال**: **نارۍ** (Nārəy - لقمه)، **دوستۍ** (Dosti - دوستی)، **څوکۍ** (Tsokəy - صندلی).

### ۴. ئ (یای همزه‌دار / Dzwal Ya)
- **تلفظ**: شبیه 'əy' (بسیار کوتاه).
- **مثال**: **خوَرئ** (Khwarəy - بخورید)، **راشئ** (Rā-ṣ̌əy - بیایید).

### ۵. یـ / ی (یای اصلی)
- **تلفظ**: همان 'y' یا 'i' معمولی در وسط کلمات.
- **مثال**: **یاد** (Yād)، **تِیر** (Ter).

---

## ۳. جدول مقایسه‌ای با اِعراب (Arabic Style)

| شکل ی | نام | مثال با اعراب | تلفظ فارسی |
|:---:|:---|:---|:---|
| **ی** | یای مـذکر | **زوی** | زوی (پسر) |
| **ې** | یای کشیده | **ښې** | شې (خوب‌ها) |
| **ۍ** | یای مـونث | **ډوډۍ** | دو‌دَی (نان) |
| **ئ** | یای جـمع | **کښینئ** | کِـشینَی (بنشینید) |

---

## ۵. جدول نهایی راهنمای تلفظ (خلاصه برای یادگیری سریع)

این جدول تمام انواع «ی» را با اِعراب کامل نشان می‌دهد. این بخش را یک بار با دقت بخوانید تا برای همیشه در ذهنتان بماند:

| شکل ی | نام کامل | حرکت قبلی | مثال با اعراب | تلفظ فارسی | کاربرد اصلی |
|:---:|:---|:---:|:---|:---|:---|
| **ی** | یای نـرینه (نرم) | **ـَـ** (زوار) | **سَړی** | سَـدَی | کلمات مـذکر مفرد |
| **ې** | یای مجهول (کشیده) | **ـِـ** (زیر) | **ناوې** | ناوی (کشیده) | کلمات مـونث / جمع |
| **ۍ** | یای ثقیله (سخت) | **ـِـ** (زیر) | **ډوډۍ** | دو‌دَی (سخت) | کلمات مـونث مفرد |
| **ئ** | یای همزه‌دار | **ـَـ** (زوار) | **خورئ** | خوَرَی (سریع) | فاعل جمع / امری |
| **یـ** | یای اصلی | هر حرکتی | **مِینه** | مینه | وسط کلمه |

---

## ۶. اِعراب اختصاصی: زوارکی (ـًـ)

در پښتو، حرکتی داریم که در عربی و فارسی نیست. به آن **«زوارکی» (ə)** می‌گوییم. تلفظ آن بسیار سریع و بین **ـَـ** و **ـِـ** است.

- **مًیز** (Məz - میز)
- **شًل** (Shəl - بیست)

> **خلاصه طلایی:** اگر قبل از «ی» صدای **ـَـ** بیاید، معمولاً صدای **Nar-ina** (مذکر) می‌دهد. اگر صدای **ـِـ** بیاید، بسته به شکل ی، صدای **Feminine** (مونث) یا **Makhul** (کشیده) می‌دهد.
`,hasPractice:!0,practiceId:"vowels-mastery"},vb={id:"numbers-1-10",title:"اعداد ۱ تا ۱۰",titlePashto:"له ۱ نه تر ۱۰ پورې شمېرې",difficulty:"easy",estimatedTime:"۱۰ دقیقه",content:`
# اعداد ۱ تا ۱۰ در پښتو

## جدول اعداد

| عدد | پښتو | تلفظ | فارسی |
|-----|------|------|-------|
| ۱ | یو | yaw | یک |
| ۲ | دوه | dwa | دو |
| ۳ | درې | dre | سه |
| ۴ | څلور | **tsalór** | چهار |
| ۵ | پنځه | **pindza** | پنج |
| ۶ | شپږ | **ṣ̌pəẓ̌** | شش |
| ۷ | اووه | owa | هفت |
| ۸ | اته | ata | هشت |
| ۹ | نهه | naha | نه |
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
`,hasPractice:!0,practiceId:"numbers-1-10"},xb={id:"basic-greetings",title:"سلام و خداحافظی",titlePashto:"سلام او خدای پامان",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# سلام و احوالپرسی در پښتو (لهجه کندهاری)

احوالپرسی در قندهار یک هنر است! مردم معمولاً با یک سلسله جملات محبت‌آمیز از هم استقبال می‌کنند.

## ۱. سلام کردن (Greetings)

| پښتو | فارسی | تلفظ کندهاری | مخاطب |
|------|-------|--------------|-------|
| سلام علیکم | سلام علیکم | Salām Alaykum | عمومی |
| ستړی مه شې | خسته نباشی | **Staṛay ma ṣ̌e** | مرد |
| ستړی مه شه | خسته نباشی | **Staṛay ma ṣ̌a** | زن |
| هرکله راشې | خوش آمدی | Harkala rā-ṣ̌e | صمیمانه |
| په خیر راغلې | به خیر آمدی | Pa khair rā-ghle | عمومی |
| ښه راغلاست | خوش آمدید | Ṣ̌a rā-ghlāst | رسمی |

## ۲. زنجیره احوالپرسی (The Greeting Chain)

در قندهار، فقط به «چطوری» بسنده نمی‌کنند. این زنجیره را یاد بگیرید:

| پښتو | فارسی | تلفظ |
|------|-------|------|
| څنګه یې؟ | چطوری؟ | Tsanga ye? |
| جور یې؟ | سالمی؟ (جوری؟) | Joṛ ye? |
| خوشحاله یې؟ | خوشحالی؟ | Khush-hāla ye? |
| کینت (صحت) خو دې ښه دی؟ | حالت خوب است؟ | Sehát kho de ṣ̌a day? |
| کور اباد! | خانه‌ات آباد! | Kor ābād! |

## ۳. پاسخ‌های رایج

| پښتو | فارسی | تلفظ |
|------|-------|------|
| ښه یم، مننه | خوبم، ممنون | Ṣ̌a yam, manana |
| شکر دی | شکر است | Shukar day |
| ته څنګه یې؟ | تو چطوری؟ | Ta tsanga ye? |
| په سترګو! | روی چشم! | **Pa stargo!** |

## ۴. خداحافظی (Farewell)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| خدای پامان | خداحافظ | Khudāy pāmān |
| په مخه دې ښه | به سلامت | **Pa mukha de ṣ̌a** |
| بیا به سره وینو | باز هم را می‌بینیم | Byā ba sara vino |
| د خدای په امان | در پناه خدا | Da Khudāy pa amān |

## ۵. مکالمه کامل (زنجیره کندهاری)

**احمد:** سلام علیکم، ستړی مه شې لالیه!
**محمود:** و علیکم السلام، ستړی مه شې. څنګه یې؟ جوړ یې؟
**احمد:** مننه، کور دې آباد. ته څنګه یې؟ کور اباد دی؟
**محمود:** شکر دی، الحمدلله. هرکله راشې!
**احمد:** په خیر اوسې. خدای پامان.
**محمود:** په مخه دې ښه!

> **نکته فرهنگی:** در قندهار، هنگام سلام کردن معمولاً دست راست را روی سینه می‌گذارند که نشانه احترام عمیق است.
`,contentPashto:`
# په پښتو کې سلام او احوالپرسي (کندهاری لهجه)

په کندهار کې احوالپرسي یو کلتوري هنر دی! خلک معمولاً د محبت ډکې عادتي جملې کاروي.

## ۱. سلام کول (Greetings)

| پښتو | فارسي | تلفظ |
|------|-------|------|
| سلام علیکم | سلام علیکم | Salām Alaykum |
| ستړی مه شې | خسته نباشی | **Staṛay ma ṣ̌e** |
| ستړی مه شه | خسته نباشی (ښځې ته) | **Staṛay ma ṣ̌a** |
| هرکله راشې | خوش آمدی | Harkala rā-ṣ̌e |
| په خیر راغلې | به خیر آمدی | Pa khair rā-ghle |

## ۲. د احوالپرسۍ لړۍ (Greeting Chain)

په کندهار کې یوازې پر «څنګه یې» بسنه نه کېږي:

| پښتو | مانا | تلفظ |
|------|-------|------|
| څنګه یې؟ | چطوری؟ | Tsanga ye? |
| جوړ یې؟ | سالمی؟ | Joṛ ye? |
| خوښ او خوشحاله یې؟ | خوشحالی؟ | Khush-hāla ye? |
| صحت خو دې ښه دی؟ | حالت ښه دی؟ | Sehát kho de ṣ̌a day? |

## ۳. د خدای پامانۍ عبارات

| پښتو | مانا | تلفظ |
|------|-------|------|
| خدای پامان | خداحافظ | Khudāy pāmān |
| په مخه دې ښه | به سلامت | **Pa mukha de ṣ̌a** |
| د خدای په امان | در پناه خدا | Da Khudāy pa amān |

> **یادونه:** په کندهار کې د سلام پر مهال لاس پر سینه ایښودل د اخلاص او درناوي نښه ده.
`,hasPractice:!0,practiceId:"basic-greetings"},wb={id:"how-are-you",title:"حالت چطور است؟",titlePashto:"څنګه یې؟",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
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
`,hasPractice:!1},kb={id:"introductions",title:"معرفی خود",titlePashto:"ځان پېژندنه",difficulty:"easy",estimatedTime:"۲۰ دقیقه",content:`
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
`,hasPractice:!1},jb={id:"formal-informal",title:"رسمی و غیررسمی",titlePashto:"رسمي او غیررسمي",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
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

| غیررسمی | رسمی | فارسی | تلفظ کندهاری (غ/ر) |
|---------|------|-------|-----------------------|
| سلام | سلام علیکم | سلام | Salām / Salām Alaykum |
| ستړی مه شې | ستړی مه شئ | خسته نباشی | Staṛay ma ṣ̌e/ṣ̌əy |
| څنګه یې؟ | څنګه یاست؟ | چطوری؟ | Tsanga ye/yāst? |
| خدای پامان | خدای مو په امان | خداحافظ | Khudāy pāmān |

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
`,hasPractice:!1},Nb={id:"pronouns",title:"ضمایر",titlePashto:"ضمیرونه",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# ضمایر در پښتو کندهاری

## ضمایر فاعلی (شخصی)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| زه | من | za |
| ته | تو | ta |
| هغه | او (مذکر) | hagha |
| هغه | او (مؤنث) | hagha |
| موږ | ما | **muẓ̌** |
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

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| زما | مال من | zmā |
| ستا | مال تو | stā |
| د هغه | مال او (مذکر) | da hagha |
| د هغې | مال او (مونث) | da hage |
| زموږ | مال ما | **zmuẓ̌** |
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

---

## ۸. ضمایر جهتی (Directional Clitics) - **رَاتَه**

این بخش یکی از پرکاربردترین قسمت‌های پښتو کندهاری است. کلمات **رَاتَه** (Rā-ta)، **دَارته** (Dār-ta) و **وَرته** (War-ta) به معنای «به من/تو/او» هستند.

| کلمه | اِعراب | معـنی | کاربرد |
|:---:|:---:|:---|:---|
| **رَاتَه** | **رَاتَه** | **به مَن** | وقتی چیزی به سمت «من» یا «ما» می‌آید |
| **دَارته** | **دَارتَه** | **به تُو** | وقتی چیزی به سمت «تو» یا «شما» می‌رود |
| **وَرته** | **وَرته** | **به او / به آن‌ها** | وقتی چیزی به سمت «شخص سوم» می‌رود |

### مثال‌های کاربردی (بسیار مهم):

1. **رَاتَه ووایه!** (Rā-ta wu-wāya) -> **به من بگو!**
2. **رَاتَه راکړه!** (Rā-ta rā-kṛa) -> **به من بده!**
3. **مَا وَرته وویل.** (Mā war-ta wu-wayal) -> **من به او گفتم.**
4. **دَارتَه به یې راوړم.** (Dārta bi ye rā-wṛam) -> **برایت (به تو) خواهم آورد.**

---

## ۹. تفاوت «ته» (te) و «راته» (rā-ta)

- **ته (ta)**: برای جهت فیزیکی به سمت جای خاص (مثلاً: کور ته - به خانه).
- **راته (rā-ta)**: وقتی جهت به سمت **یک شخص** است، مخصوصاً در گفتار و بخشیدن چیزی.

---

## ۱۰. رسمی vs غیررسمی

| غیررسمی | رسمی | معنی |
|:---:|:---:|:---|
| **ته** | **تاسو** | تو / شما |
| **ستا** | **ستاسو** | مال تو / مال شما |
| **تا** | **تاسو** | تو را / شما را |

> **نکته:** در موقعیت‌های رسمی، با بزرگترها، یا برای احترام، همیشه از **تاسو** استفاده کنید.
`,hasPractice:!1},Sb={id:"possessive-pronouns",title:"ضمایر ملکی",titlePashto:"ملکي ضمیرونه",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# ضمایر ملکی در پښتو

ضمایر ملکی برای نشان دادن مالکیت استفاده می‌شوند.

## ضمایر ملکی

| زه | زما | من / مال من | zmā |
| ته | ستا | تو / مال تو | stā |
| هغه (مذکر) | د هغه | او / مال او | da hagha |
| هغه (مونث) | د هغې | او / مال او | da hage |
| موږ | زموږ | ما / مال ما | **zmuẓ̌** |
| تاسو | ستاسو | شما / مال شما | stāso |
| هغوی | د هغوی | آنها / مال آنها | da haghwey |

## ساختار ملکی

در پښتو، ضمیر ملکی قبل از اسم می‌آید:

| پښتو | فارسی |
|------|-------|
| زما کور | خانه من |
| ستا کتاب | کتاب تو |
| د هغه موټر | موتر او |
| زموږ کورنۍ | خانواده ما |
| ستاسو ملک | کشور شما |

---

## ۳. ضمیر انعکاسی «خپل» (The Magic of **خپل**)

این مهم‌ترین تفاوت پښتو با فارسی و انگلیسی در بحث مالکیت است. 

کلمه **«خپل» (Khpal)** به معنای **«مال خود» (own)** است. 

> **قانون طلایی:** اگر فاعل (انجام‌دهنده کار) و مالکِ یک شیء یک نفر باشند، شما **نباید** از «زما»، «ستا» و ... استفاده کنید؛ بلکه **باید** از **«خپل»** استفاده کنید.

### مثال‌های مقایسه‌ای:

| فارسی | پښتو (غلط) | پښتو (درست) | نکته |
|:---|:---|:---|:---|
| من به خانه **خودم** می‌روم | زه **زما** کور ته ځم ❌ | زه **خپل** کور ته ځم ✅ | چون مالک خانه، خودِ من هستم |
| تو کتاب **خودت** را بخوان | ته **ستا** کتاب ولوله ❌ | ته **خپل** کتاب ولوله ✅ | چون مالک کتاب، خودِ تو هستی |
| او (احمد) پدر **او** (محمود) را دید | هغه د هغه پلار ولید ✅ | - | در اینجا مالک پدر، شخص دیگری است |
| او (احمد) پدر **خودش** را دید | - | هغه **خپل** پلار ولید ✅ | فاعل و مالک یک نفر هستند |

---

## ۴. تغییرات شکل «خپل» (مطابقت جنسیتی)

کلمه «خپل» مثل یک صفت عمل می‌کند و با اسم بعد از خود (مفعول) مطابقت می‌کند:

| حالت | پښتو | مثال | معنی |
|:---:|:---|:---|:---|
| **مذکر (واحد)** | **خپل** | خپل مـوټر | ماشین خودش |
| **مونث (واحد)** | **خپله** | خپله خـور | خواهر خودش |
| **جمع (همه)** | **خپل** / **خپلو** | خپل کـتابونه | کتاب‌های خودش |

---

## ۵. مثال‌های کاربردی در کندهاری (با اعراب)

- **خپله ډوډۍ وخوره.** (Khpala ḍoḍəy wakhura) -> نان خودت را بخور.
- **خپلو ملګرو سره وګوره.** (Khpalu malgaro sara ...) -> با دوست‌های خودت ملاقات کن.
- **خپل کار وکړه!** (Khpal kār wukṛa) -> کار خودت را انجام بده! (به کار خودت برس).

> **نکته:** استفاده نکردن از «خپل» در جایی که لازم است، جمله شما را بسیار ابتدایی و غیرطبیعی جلوه می‌دهد. پښتون‌ها همیشه از خپل استفاده می‌کنند.
`,hasPractice:!1},zb={id:"demonstratives",title:"ضمایر اشاره",titlePashto:"اشاري ضمیرونه",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
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

| نزدیک | دور | فارسی | تلفظ کندهاری (زمانی) |
|-------|-----|-------|------------------------|
| دا کتاب | هغه کتاب | این کتاب / آن کتاب | Dā / Hagha |
| دا سړی | هغه سړی | این مرد / آن مرد | Dā / Hagha |
| دلته | هلته | اینجا / آنجا | Dalta / Halta |
| دا ځای | هغه ځای | این جا / آن جا | Dā dzāy |

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
## ضمایر اشاره تاکیدی (Emphatic Demonstratives)

گاهی می‌خواهیم دقیقاً به **همین** یا **همان** چیز اشاره کنیم (تاکید).

| پښتو | فارسی | مثال |
|------|-------|------|
| **همدغه / همدا** | همین / همین یکی | **همدغه** کتاب راکړه (دقیقاً **همین** کتاب را بده) |
| **همداسې** | همین‌طور / همین‌جور | **همداسې** وکړه (دقیقاً **همین‌طور** انجام بده) |
| **همهغه** | همان / همان یکی | **همهغه** سړی (دقیقاً **همان** مرد) |
| **همهغسې** | همان‌طور / همان‌جور | **همهغسې** مه کوه (**همان‌طور** نکن) |

> **نکته:** پیشوند **«همـ»** در پښتو مثل فارسی برای تاکید استفاده می‌شود.

`,hasPractice:!1},Tb={id:"sentence-structure",title:"ساختار جمله (SOV)",titlePashto:"د جملې جوړښت",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
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
`,hasPractice:!1},Eb={id:"conjunctions",title:"کلمات ربط و مهم",titlePashto:"ښکېل کونکي توري",difficulty:"easy",estimatedTime:"۲۰ دقیقه",content:`
# کلمات کوچک اما قدرتمند

در این درس، کلماتی را یاد می‌گیریم که جملات را به هم وصل می‌کنند. این کلمات بسیار پرکاربرد هستند (مثل "و"، "یا"، "اگر"، "هم").

## ۱. هم (Ham) - هم / نیز
کلمه **«هم»** دقیقاً مثل فارسی استفاده می‌شود. برای تاکید یا اضافه کردن چیزی.

| پښتو | فارسی | تلفظ |
|------|-------|------|
| زه **هم** راځم | من **هم** می‌آیم | Zə **ham** rādzam |
| دا **هم** زما دی | این **هم** مال من است | Dā **ham** zmā day |
| هغه **هم** ښه دی | او **هم** خوب است | Haghə **ham** ṣ̌ə day |

---

## ۲. او (Aw) - و
برای اتصال دو کلمه یا دو جمله.

| پښتو | فارسی | مثال |
|------|-------|------|
| زه **او** ته | من **و** تو | Zə **aw** tə |
| چای **او** بوره | چای **و** شکر | Chāy **aw** bura |
| راشه **او** کښېنه | بیا **و** بشین | Rāsha **aw** k ṣ̌ena |

---

## ۳. خو (Kho) - اما / ولی
برای بیان تضاد یا شرط.

| پښتو | فارسی | مثال |
|------|-------|------|
| زه غواړم، **خو** وخت نلرم | من می‌خواهم، **اما** وقت ندارم |
| ډوډۍ شته، **خو** سړه ده | نان هست، **ولی** سرد است |
| ګران دی، **خو** کیفیت لري | گران است، **اما** کیفیت دارد |

---

## ۴. که (Ka) - اگر
برای جملات شرطی. معمولاً در اول جمله می‌آید.

| پښتو | فارسی | مثال |
|------|-------|------|
| **که** ته راشې | **اگر** تو بیایی |
| **که** پیسې لرې | **اگر** پول داری |
| **که** باران واوړي | **اگر** باران ببارد |

---

## ۵. یا (Yā) - یا
برای انتخاب بین دو چیز.

| پښتو | فارسی | مثال |
|------|-------|------|
| چای **یا** قهوه؟ | چای **یا** قهوه؟ |
| نن **یا** سبا | امروز **یا** فردا |
| زه **یا** هغه | من **یا** او |

---

## ۶. چې (Che) - که / وقتی که
این کلمه (Che) کاربردهای زیادی دارد. معمولاً دو جمله را به هم وصل می‌کند.

| پښتو | فارسی | توضیح |
|------|-------|-------|
| فکر کوم **چې** هغه راغی | فکر می‌کنم **که** او آمد | اتصال دو جمله |
| هغه سړی **چې** پرون مې ولید | آن مردی **که** دیروز دیدم | توصیف (Relative Clause) |
| **چې** کور ته ورسېدم | **وقتی که** به خانه رسیدم | زمان (When) |

---

## تمرین کنید
سعی کنید این کلمات را در جملات روزمره خود استفاده کنید.
- **زه هم**: من هم
- **چای او اوبه**: چای و آب
- **که وخت لرې**: اگر وقت داری
`,hasPractice:!0},Mb={id:"verbs-unified-rules",title:"۱. نقشه‌ی راه افعال (قواعد کلی)",titlePashto:"د فعلونو جامع قواعد",difficulty:"hard",estimatedTime:"۳۰ دقیقه",content:`
# راهنمای کامل و گام‌به‌گام افعال در پښتو (لهجه کندهاری)

در زبان پښتو، افعال قلب جملات هستند. یادگیری اصولی آن‌ها به شما اجازه می‌دهد هزاران جمله بسازید.

---

## 🗺️ نقشه‌ی راه یادگیری افعال (۳۵ مرحله تا تسلط)

برای یادگیری اصولی افعال کندهاری، ما این مسیر را برای شما طراحی کردیم:

1.  **فاز اول (افعال لازم - Intransitive):** ۱۱ فعل که مفعول ندارند. یادگیری این‌ها ساده است چون در گذشته با **فاعل** مطابقت می‌کنند.
2.  **فاز دوم (افعال متعدی - Transitive):** ۲۴ فعل که مفعول دارند. اینجاست که با قدرت واقعی پشتو و سیستم **ارگتیو** آشنا می‌شوید (تطبیق با مفعول در گذشته).

---

---

## ۱. زمان حال (Present Tense)
ساختن زمان حال ساده است. شما یک «ریشه فعل» دارید و با توجه به شخص، یک پسوند به آن اضافه می‌کنید.

### پسوندهای شخصی (ماده مضارع):
| ضمیر | پسوند | مثال (فعل خور- / خوردن) | ترجمه |
|:---|:---:|:---|:---|
| **زه** (من) | **ـم** | زه خور**م** | من می‌خورم |
| **موږ** (ما) | **ـو** | موږ خور**و** | ما می‌خوریم |
| **ته** (تو) | **ـې** | ته خور**ې** | تو می‌خوری |
| **تاسو** (شما) | **ـئ** | تاسو خور**ئ** | شما می‌خورید |
| **هغه** (او) | **ـي** | هغه خور**ي** | او می‌خورد |
| **هغوی** (ایشان) | **ـي** | هغوی خور**ي** | ایشان می‌خورند |

> **نکته منفی کردن**: برای منفی کردن حال، کلمه **«نه» (na)** را قبل از فعل بگذارید:  
> **زه نه خورم.** (من نمی‌خورم)

---

## ۲. زمان گذشته (Past Tense) - قلب تپنده پښتو
زمان گذشته در پښتو دو دنیای متفاوت دارد که بسیار مهم است:

### الف) افعال لازم (Intransitive):
افعالی که مفعول نمی‌خواهند (مثل رفتن، آمدن، نشستن). اینجا فعل با **فاعل** مطابقت دارد.
- مثال: **زه لاړم** (من رفتم) | **هغه لاړ** (او رفت).

### ب) افعال متعدی (Transitive) - سیستم ارگتیو:
افعالی که مفعول دارند (مثل خوردن، دیدن، گفتن). در گذشته، ذهن شما باید بچرخد! فعل با **مفعول** مطابقت می‌کند.
- **تطبیق جنسیت در گذشته (مهم!)**:
  - اگر مفعول **مذکر** باشد: **ما مڼه وخوړ.** (من سیب خوردم).
  - اگر مفعول **مونث** باشد: **ما ډوډۍ وخوړله.** (من نان خوردم).

---

### قانون طلایی: جادوی پیشوند «و-» (Wu Prefix)
پیشوند **«و-»** نشان‌دهنده **«کامل شدن»** یا **«یک‌باره بودن»** یک کار است و بیشتر در گذشته و امری کاربرد دارد.

**تفاوت در یک نگاه:**
- **بدون و- (ناتمام/استمراری):** کاری که تکرار می‌شد یا در حال انجام بود.
- **با و- (کامل/قاطع):** کاری که یک بار اتفاق افتاد و تمام شد.

**مثال‌های مقایسه‌ای:**
| فعل | حالت ناتمام (بدون و-) | حالت کامل (با و-) |
|:---|:---|:---|
| **خوردن** | **ما ډوډۍ خوړله.** (نان می‌خوردم) | **ما ډوډۍ وخوړله.** (نان را خوردم) |
| **نوشتن** | **ما خط لیکی.** (نامه می‌نوشتم) | **ما خط ولیکی.** (نامه را نوشتم) |
| **زدن** | **ده ما واهه.** (او مرا می‌زد) | **ده زه ووهلم.** (او مرا زد) |

> **نکته**: در زمان **حال** از «و-» استفاده نمی‌بایست کرد.

---

## ۳. زمان آینده (Future Tense)
آینده در پښتو راحت است. فقط کافیست پارتیکل **«به» (ba)** را قبل از فعل زمان حال بگذارید.

- **فرمول**: ضمیر + **به** + فعل زمان حال
- **مثال**:
  - زه کار کوم (من کار می‌کنم).
  - زه **به** کار کوم (من کار خواهم کرد).

---

## ۴. حالت امری (Imperative)
وقتی می‌خواهید دستور بدهید یا درخواستی بکنید:
۱. به ابتدای فعل معمولاً **«و-» (Wu)** اضافه می‌شود.  
۲. برای مفرد از پسوند **«ـه»** و برای جمع از پسوند **«ـئ»** استفاده می‌شود.

- **مثال (فعل نشستن/کېناستل)**:
  - **کېنه!** (بنشین!)
  - **کېنئ!** (بنشینید!)
  - **مه کېنه!** (ننشین!) -> کلمه **مه (ma)** برای دستور منفی است.

---

## ۵. افعال مرکب (Compound Verbs) - بسیار مهم!
بسیاری از افعال در پښتو از ترکیب یک **«اسم یا صفت»** با یک **«فعل کمکی»** (معمولاً **کول** یا **کېدل**) ساخته می‌شوند.
- **قانون طلایی:** در این افعال، قسمت اول (اسم/صفت) ثابت می‌ماند و فقط فعل کمکی آخر تغییر (گردان) می‌کند.

**مثال:**
- **کار کول** (کار کردن): زه **کار کوم** (من کار می‌کنم).
- **غصه کېدل** (غمگین شدن): هغه **غصه شو** (او غمگین شد).
- **یاد کول** (یاد کردن): موږ **یادوو** (ما یاد می‌کنیم).

---

## ۶. منفی کردن در تمام زمان‌ها
برای اینکه جملات را منفی کنید، به این الگوها دقت کنید:

| زمان | کلمه منفی‌ساز | مثال مثبت | مثال منفی |
|:---|:---:|:---|:---|
| **حال / گذشته** | **نه** (na) | زه ځم (می‌روم) | زه **نه** ځم (نمی‌روم) |
| **آینده** | **به نه** (ba na) | زه به ځم (خواهم رفت) | زه **به نه** ځم (نخواهم رفت) |
| **امری (دستوری)** | **مه** (ma) | کېنه (بنشین) | **مه** کېنه (ننشین) |

---

## جدول نهایی ضمایر برای تمام زمان‌ها
این جدول را به خاطر بسپارید، چون در ۳۲ درس آینده با آن زندگی خواهیم کرد:

| ضمیر | فاعل (حال/آینده) | فاعل (گذشته متعدی) |
|:---|:---:|:---:|
| من | **زه** | **ما** |
| ما | **موږ** | **موږ** |
| تو | **ته** | **تا** |
| شما | **تاسو** | **تاسو** |
| او (مرد) | **هغه** | **هغه** |
| او (زن) | **هغه** | **هغې** |
| ایشان | **هغوی** | **هغوی** |

در درس‌های بعدی، هر فعل را به صورت جداگانه در تمام این حالت‌ها کالبدشکافی می‌کنیم. آماده‌اید؟
`,hasPractice:!0},Ab={id:"progressive-tenses",title:"زمان‌های جاری (استمراری)",titlePashto:"اوسنۍ روانه زمانه",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# زمان‌های استمراری (Progressive Tenses)

در زبان پښتو، مفهوم "استمرار" (کاری که در حال انجام شدن است) کمی با انگلیسی یا فارسی متفاوت است.

## ۱. حال استمراری (Present Continuous)

در پښتو، **زمان حال ساده** معمولاً هر دو معنی را می‌دهد:
1.  **عادت:** من کار می‌کنم (I work).
2.  **الان:** من دارم کار می‌کنم (I am working).

مثال:
- **زه کار کوم** = من کار می‌کنم / من دارم کار می‌کنم.

### فرمول تاکید بر "الان" (Emphatic Continuous)
اگر می‌خواهید تاکید کنید که **همین الان** مشغول کاری هستید، از کلمه **«لګیا» (Lagya)** یا **«بوخت» (Bokht)** استفاده کنید.

| پښتو | تلفظ | فارسی |
|------|------|-------|
| **زه په کار لګیا یم** | Zə pə kār lagyā yam | من **مشغول/در حال** کار هستم |
| **هغه په درس لګیا دی** | Haghə pə dars lagyā day | او **مشغول** درس خواندن است |

> **نکته:** کلمه **لګیا** نشان‌دهنده "مشغول بودن" یا "سرگرم بودن" با یک کار است.

---

## ۲. گذشته استمراری (Past Continuous)

این زمان در پښتو بسیار مهم است و ساختار خاص خود را دارد (بدون پیشوند "و").

- **فرمول:** ریشه فعل + پسوند گذشته (بدون "و-")

| فعل | گذشته ساده (انجام شد) | گذشته استمراری (داشت انجام می‌شد) |
|-----|----------------------|-----------------------------------|
| **خوړل** (خوردن) | **ما وخواړه** (خوردم) | **ما خواړه** (می‌خوردم/داشتم می‌خوردم) |
| **لیکل** (نوشتن) | **ما ولیکه** (نوشتم) | **ما لیکه** (می‌نوشتم/داشتم می‌نوشتم) |
| **تلل** (رفتن) | **زه لاړم** (رفتم) | **زه تللم** (می‌رفتم/داشتم می‌رفتم) |

> **قانون طلایی:** در گذشته، اگر **«و-» (wu)** اول فعل نیاید، فعل **استمراری/ناتمام** است.

---

## ۳. آینده استمراری (Future Continuous)

برای گفتن "من خواهم بود در حال انجام..." باز هم از حالت بدون "و" استفاده می‌کنیم، اما با "به".

- **فرمول:** به + فعل حال (بدون پیشوند)

| پښتو | فارسی | معنی |
|------|-------|------|
| **زه به کار کوم** | من کار خواهم کرد (مداوم) | I will be working |
| **زه به انتظار کوم** | من منتظر خواهم بود | I will be waiting |

---

## تمرین (Practice)
سعی کنید این جملات را ترجمه کنید:

1.  زه ډوډۍ خورم. (من نان می‌خورم / دارم نان می‌خورم)
2.  زه په ډوډۍ خوړلو لګیا یم. (من مشغول نان خوردن هستم)
3.  ما ډوډۍ خوړله. (من داشتم نان می‌خوردم)
`,hasPractice:!0},Pb={id:"verb-comp-to-be",title:"۲. بودن (اوسېدل)",titlePashto:"د اوسېدلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «بودن» (اوسېدل)

فعل بودن، پرکاربردترین فعل در هر زبانی است. در اینجا تمام حالت‌های آن را با جزئیات کامل می‌بینیم.

---

## ۱. زمان حال (هستن)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **یم** | Yam | هستم |
| موږ | **یو** | Yu | هستیم |
| ته | **یې** | Ye | هستی |
| تاسو | **یاست** | Yāst | هستید |
| هغه (مذکر) | **دی** | Day | است (او مرد) |
| هغه (مونث) | **ده** | Da | است (او زن) |
| هغوی | **دي** | Di | هستند |

---

## ۲. زمان گذشته (بودن)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **وم** | Wam | بودم |
| موږ | **وو** | Wu | بودیم |
| ته | **وې** | We | بودی |
| تاسو | **وئ** | Wey | بودید |
| هغه (مذکر) | **و** | Wu | بود |
| هغه (مونث) | **وه** | Wa | بود |
| هغوی | **ول / وو** | Wal / Wu | بودند |

---

## ۳. زمان آینده (خواهم بود)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به یم** | Ba yam | خواهم بود |
| موږ | **به یو** | Ba yu | خواهیم بود |
| ته | **به یې** | Ba ye | خواهی بود |
| تاسو | **به یاست** | Ba yāst | خواهید بود |
| هغه | **به دی** | Ba day | خواهد بود |
| هغوی | **به دي** | Ba di | خواهند بود |

---

## ۴. حالت امری (باش / نباش)
- **یه!** (Ya!) -> باش!
- **یاست!** (Yāst!) -> باشید! (جمع یا محترمانه)
- **مه یه!** (Ma ya!) -> نباش!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه دلته یم.** (من اینجا هستم) - Positive
- **زه دلته نه یم.** (من اینجا نیستم) - Negative
- **آیا ته دلته یې؟** (آیا تو اینجا هستی؟) - Question

### زمان گذشته (Past)
- **موږ پرون خوشحاله وو.** (ما دیروز خوشحال بودیم) - Positive
- **موږ پرون خوشحاله نه وو.** (ما دیروز خوشحال نبودیم) - Negative
- **آیا هغه پرون خوشحاله و؟** (آیا او دیروز خوشحال بود؟) - Question

### زمان آینده (Future)
- **سبا به هوا توده وي.** (فردا هوا گرم خواهد بود) - Positive
- **سبا به هوا توده نه وي.** (فردا هوا گرم نخواهد بود) - Negative
- **آیا سبا به باران وي؟** (آیا فردا باران خواهد بود؟) - Question
`,hasPractice:!0},Cb={id:"verb-comp-to-go",title:"۳. رفتن (تلل)",titlePashto:"د تللو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «رفتن» (تلل)

فعل «تلل» در زمان حال ریشه متفاوتی پیدا می‌کند (**ځ-**).

---

## ۱. زمان حال (می‌روم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **ځم** | Dzam | می‌روم |
| موږ | **ځو** | Dzu | می‌رویم |
| ته | **ځې** | Dze | می‌روی |
| تاسو | **ځئ** | Dzey | می‌روید |
| هغه | **ځي** | Dzi | می‌رود |
| هغوی | **ځي** | Dzi | می‌روند |

---

## ۲. زمان گذشته (رفتم)
*فعل رفتن در گذشته ریشه کاملاً متفاوتی دارد (**لاړ-**).*

| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **لاړم** | LaaRam | رفتم |
| موږ | **لاړو** | LaaRu | رفتیم |
| ته | **لاړې** | LaaRe | رفتی |
| تاسو | **لاړئ** | LaaRey | رفتید |
| هغه (مذکر) | **لاړ** | LaaR | رفت (او مرد) |
| هغه (مونث) | **لاړه** | LaaRa | رفت (او زن) |
| هغوی | **لاړل** | LaaRal | رفتند |

---

## ۳. زمان آینده (خواهم رفت)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به ځم** | Ba dzam | خواهم رفت |
| موږ | **به ځو** | Ba dzu | خواهیم رفت |
| ته | **به ځې** | Ba dze | خواهی رفت |
| تاسو | **به ځئ** | Ba dzey | خواهید رفت |
| هغه | **به ځي** | Ba dzi | خواهد رفت |
| هغوی | **به ځي** | Ba dzi | خواهند رفت |

---

## ۴. حالت امری (برو / نرو)
- **ځه!** (Dza!) -> برو!
- **ځئ!** (Dzey!) -> بروید!
- **مه ځه!** (Ma dza!) -> نرو!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه بازار ته ځم.** (من به بازار می‌روم) - Positive
- **زه نن نه ځم.** (من امروز نمی‌روم) - Negative
- **آیا ته کابل ته ځې؟** (آیا تو به کابل می‌روی؟) - Question

### زمان گذشته (Past)
- **هغه کور ته لاړ.** (او به خانه رفت) - Positive
- **هغه پرون نه لاړ.** (او دیروز نرفت) - Negative
- **آیا هغوی لاړل؟** (آیا آن‌ها رفتند؟) - Question

### زمان آینده (Future)
- **موږ به سبا ځو.** (ما فردا خواهیم رفت) - Positive
- **موږ به نن نه ځو.** (ما امروز نخواهیم رفت) - Negative
- **آیا ته به راسره ځې؟** (آیا تو با من خواهی رفت؟) - Question
`,hasPractice:!0},Rb={id:"verb-comp-to-come",title:"۴. آمدن (راتلل)",titlePashto:"د راتللو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «آمدن» (راتلل)

این فعل مکمل فعل «رفتن» است و در حال و گذشته ریشه‌های خاصی دارد.

---

## ۱. زمان حال (می‌آیم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **راځم** | Rādzam | می‌آیم |
| موږ | **راځو** | Rādzu | می‌آییم |
| ته | **راځې** | Rādze | می‌آیی |
| تاسو | **راځئ** | Rādzey | می‌آیید |
| هغه | **راځي** | Rādzi | می‌آید |
| هغوی | **راځي** | Rādzi | می‌آیند |

---

## ۲. زمان گذشته (آمدم)
*ریشه گذشته: **راغلی / راغـ***

| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **راغلم** | Rāghlam | آمدم |
| موږ | **راغلو** | Rāghlu | آمدیم |
| ته | **راغلې** | Rāghle | آمدی |
| تاسو | **راغلی** | Rāghley | آمدید |
| هغه (مذکر) | **راغی** | Rāghay | آمد (او مرد - کندهاری) |
| هغه (مونث) | **راغله** | Rāghla | آمد (او زن) |
| هغوی | **راغلل** | Rāghlal | آمدند |

---

## ۳. زمان آینده (خواهم آمد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به راځم** | Ba rādzam | خواهم آمد |
| موږ | **به راځو** | Ba rādzu | خواهیم آمد |
| ته | **به راځې** | Ba rādze | خواهی آمد |
| تاسو | **به راځئ** | Ba rādzey | خواهید آمد |
| هغه | **به راځي** | Ba rādzi | خواهد آمد |
| هغوی | **به راځي** | Ba rādzi | خواهند آمد |

---

## ۴. حالت امری (بیا / نیا)
- **راځه!** (Rādza!) -> بیا!
- **راځئ!** (Rādzey!) -> بیایید!
- **مه راځه!** (Ma rādza!) -> نیا!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه هره ورځ دلته راځم.** (من هر روز اینجا می‌آیم) - Positive
- **زه نن نه راځم.** (من امروز نمی‌آیم) - Negative
- **آیا ته کور ته راځې؟** (آیا تو به خانه می‌آیی؟) - Question

### زمان گذشته (Past)
- **احمد پرون راغی.** (احمد دیروز آمد) - Positive
- **هغه پرون رانه غی.** (او دیروز نیامد) - Negative
- **آیا پلار دې راغی؟** (آیا پدرت آمد؟) - Question

### زمان آینده (Future)
- **موږ به ماښام راځو.** (ما شام خواهیم آمد) - Positive
- **موږ به نن نه راځو.** (ما امروز نخواهیم آمد) - Negative
- **آیا ته به سبا راځې؟** (آیا تو فردا خواهی آمد؟) - Question
`,hasPractice:!0},Bb={id:"verb-comp-to-eat",title:"۵. خوردن (خوړل)",titlePashto:"د خوړلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «خوردن» (خوړل)

خوړل یک فعل متعدی (Transitive) است، پس در زمان گذشته از سیستم ارگتیو استفاده می‌کند.

---

## ۱. زمان حال (می‌خورم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **خورم** | Khoram | می‌خورم |
| موږ | **خورو** | Khoru | می‌خوریم |
| ته | **خورې** | Khore | می‌خوری |
| تاسو | **خورئ** | Khorey | می‌خورید |
| هغه | **خوري** | Kholi | می‌خورد |
| هغوی | **خوري** | Khori | می‌خورند |

---

## ۲. زمان گذشته (خوردم)
*در گذشته، فعل با **مفعول** مطابقت می‌کند. فرض بر این است که مفعول یک چیز مذکر است.*

| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **وخوړ** | Wa-khwor | خوردم |
| موږ | **وخوړ** | Wa-khwor | خوردیم |
| تا | **وخوړ** | Wa-khwor | خوردی |
| تاسو | **وخوړ** | Wa-khwor | خوردید |
| هغه | **وخوړی** | Wa-khworay | او خورد (کندهاری) |
| هغوی | **وخوړله** | Wa-khworulu | آنها خوردند (کندهاری) |

---

## ۳. زمان آینده (خواهم خورد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به خورم** | Ba khoram | خواهم خورد |
| موږ | **به خورو** | Ba khoru | خواهیم خورد |
| ته | **به خورې** | Ba khore | خواهی خورد |
| تاسو | **به خورئ** | Ba khorey | خواهید خورد |
| هغه | **به خوري** | Ba khori | خواهد خورد |
| هغوی | **به خوري** | Ba khori | خواهند خورد |

---

## ۴. حالت امری (بخور / نخور)
- **وخوره!** (Wakhwora!) -> بخور!
- **وخورئ!** (Wakhworey!) -> بخورید!
- **مه خوره!** (Ma khwora!) -> نخور!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه نانوایی کې ډوډۍ خورم.** (من در نانوایی نان می‌خورم) - Positive
- **زه غوښه نه خورم.** (من گوشت نمی‌خورم) - Negative
- **آیا ته مڼه خورې؟** (آیا تو سیب می‌خوری؟) - Question

### زمان گذشته (Past - Ergative)
- **ما نن سهار چاینه وخوړه.** (من امروز صبحانه خوردم) - Positive
- **هغه ډوډۍ ونه خوړه.** (او نان نخورد) - Negative
- **آیا تا انار وخوړ؟** (آیا تو انار خوردی؟) - Question

### زمان آینده (Future)
- **زه به سبا مېلمستیا کې ډوډۍ خورم.** (من فردا در مهمانی غذا خواهم خورد) - Positive
- **زه نن شپه ډوډۍ نه خورم.** (من امشب غذا نمی‌خورم) - Negative
- **آیا ته به راسره میوه خورې؟** (آیا تو با من میوه خواهی خورد؟) - Question
`,hasPractice:!0},Db={id:"verb-comp-to-drink",title:"۶. نوشیدن (څښل)",titlePashto:"د څښلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «نوشیدن» (څښل)

فعل «څښل» در زمان حال ریشه **«څښ»** دارد و در گذشته پیشوند **«و-»** می‌گیرد.

---

## ۱. زمان حال (می‌نوشم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **څښم** | Tsṣ̌am | می‌نوشم |
| موږ | **څښو** | Tsṣ̌u | می‌نوشیم |
| ته | **څښې** | Tsṣ̌e | می‌نوشی |
| تاسو | **څښئ** | Tsṣ̌ey | می‌نوشید |
| هغه | **څښي** | Tsṣ̌i | می‌نوشد |
| هغوی | **څښي** | Tsṣ̌i | می‌نوشند |

---

## ۲. زمان گذشته (نوشیدم)
*این فعل متعدی است.*

| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **وڅښه / وڅښ** | Watsṣ̌a | نوشیدم |
| موږ | **وڅښه** | Watsṣ̌a | نوشیدیم |
| تا | **وڅښه** | Watsṣ̌a | نوشیدی |
| تاسو | **وڅښه** | Watsṣ̌a | نوشیدید |
| هغه | **وڅښی** | Watsṣ̌ay | نوشید (کندهاری) |
| هغوی | **وڅښله** | Watsṣ̌ulu | نوشیدند (کندهاری) |

---

## ۳. زمان آینده (خواهم نوشید)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به څښم** | Ba tsṣ̌am | خواهم نوشید |
| موږ | **به څښو** | Ba tsṣ̌u | خواهیم نوشید |
| ته | **به څښې** | Ba tsṣ̌e | خواهی نوشید |
| تاسو | **به څښئ** | Ba tsṣ̌ey | خواهید نوشید |
| هغه | **به څښي** | Ba tsṣ̌i | خواهد نوشید |
| هغوی | **به څښي** | Ba tsṣ̌i | خواهند نوشید |

---

## ۴. حالت امری (بنوش / ننوش)
- **وڅښه!** (Watsṣ̌a!) -> بنوش!
- **وڅښئ!** (Watsṣ̌ey!) -> بنوشید!
- **مه څښه!** (Ma tsṣ̌a!) -> ننوش!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه چای څښم.** (من چای می‌نوشم) - Positive
- **زه شربت نه څښم.** (من شربت نمی‌نوشم) - Negative
- **آیا ته اوبه څښې؟** (آیا تو آب می‌نوشی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون ډېرې اوبه وڅښلې.** (من دیروز آب‌های زیادی نوشیدم) - Positive
- **هغه چای ونه څښه.** (او چای ننوشید) - Negative
- **آیا تا شیدې وڅښلې؟** (آیا تو شیر نوشیدی؟) - Question

### زمان آینده (Future)
- **زه به سبا قهوه څښم.** (من فردا قهوه خواهم نوشید) - Positive
- **زه به نن هیڅ نه څښم.** (من امروز هیچ نخواهم نوشید) - Negative
- **آیا ته به یخې اوبه څښې؟** (آیا تو آب یخ خواهی نوشید؟) - Question
`,hasPractice:!0},Ob={id:"verb-comp-to-do",title:"۷. کردن (کول)",titlePashto:"د کولو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «کردن» (کول)

فعل «کول» (Kawul) کلیدی‌ترین فعل برای ساختن افعال مرکب در پښتو است.

---

## ۱. زمان حال (می‌کنم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **کوم** | Kawam | می‌کنم |
| موږ | **کوو** | Kawu | می‌کنیم |
| ته | **کوې** | Kawe | می‌کنی |
| تاسو | **کوئ** | Kawey | می‌کنید |
| هغه | **کوي** | Kawi | می‌کند |
| هغوی | **کوی** | Kawi | می‌کنند |

---

## ۲. زمان گذشته (کردم)
*ریشه گذشته: **وکړ-***

| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **وکړ** | Wa-kṛ | کردم |
| موږ | **وکړ** | Wa-kṛ | کردیم |
| تا | **وکړ** | Wa-kṛ | کردی |
| تاسو | **وکړ** | Wa-kṛ | کردید |
| هغه | **وکړی** | Wa-kṛay | کرد (کندهاری) |
| هغوی | **وکړله** | Wa-kṛulu | کردند (کندهاری) |

---

## ۳. زمان آینده (خواهم کرد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به کوم** | Ba kawam | خواهم کرد |
| موږ | **به کوو** | Ba kawu | خواهیم کرد |
| ته | **به کوې** | Ba kawe | خواهی کرد |
| تاسو | **به کوئ** | Ba kawey | خواهید کرد |
| هغه | **به کوي** | Ba kawi | خواهد کرد |
| هغوی | **به کوي** | Ba kawi | خواهند کرد |

---

## ۴. حالت امری (بکن / نکن)
- **وکړه!** (Wakṛa!) -> بکن!
- **وکړئ!** (Wakṛey!) -> بکنید!
- **مه کوه!** (Ma kawa!) -> نکن!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه خپل کار کوم.** (من کار خود را انجام می‌دهم) - Positive
- **زه نن کار نه کوم.** (من امروز کار نمی‌کنم) - Negative
- **آیا ته مرسته کوې؟** (آیا تو کمک می‌کنی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون دا کار وکړ.** (من دیروز این کار را انجام دادم) - Positive
- **تا هیڅ ونه کړل.** (تو هیچ کاری نکردی) - Negative
- **آیا هغه مرسته وکړه؟** (آیا او کمک کرد؟) - Question

### زمان آینده (Future)
- **زه به سبا ډېر کار کوم.** (من فردا خیلی کار خواهم کرد) - Positive
- **موږ به نن لوبه نه کوو.** (ما امروز بازی نخواهیم کرد) - Negative
- **آیا ته به سبا ورزش کوې؟** (آیا تو فردا ورزش خواهی کرد؟) - Question
`,hasPractice:!0},Lb={id:"verb-comp-to-want",title:"۸. خواستن (غوښتل)",titlePashto:"د غوښتلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «خواستن» (غوښتل)

فعل «غوښتل» در حال ریشه **«غواړ-»** و در گذشته ریشه **«وغوښت-»** دارد.

---

## ۱. زمان حال (می‌خواهم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **غواړم** | Ghwāṛam | می‌خواهم |
| موږ | **غواړو** | Ghwāṛu | می‌خواهیم |
| ته | **غواړې** | Ghwāṛe | می‌خواهی |
| تاسو | **غواړئ** | Ghwāṛey | می‌خواهید |
| هغه | **غواړي** | Ghwāṛi | می‌خواهد |
| هغوی | **غواړي** | Ghwāṛi | می‌خواهند |

---

## ۲. زمان گذشته (خواستم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **وغوښت** | Wa-ghwuṣ̌t | خواستم |
| موږ | **وغوښت** | Wa-ghwuṣ̌t | خواستیم |
| تا | **وغوښت** | Wa-ghwuṣ̌t | خواستی |
| تاسو | **وغوښت** | Wa-ghwuṣ̌t | خواستید |
| هغه | **وغوښتی** | Wa-ghwuṣ̌tay | خواست (کندهاری) |
| هغوی | **وغوښتله** | Wa-ghwuṣ̌tulu | خواستند (کندهاری) |

---

## ۳. زمان آینده (خواهم خواست)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به غواړم** | Ba ghwāṛam | خواهم خواست |
| موږ | **به غواړو** | Ba ghwāṛu | خواهیم خواست |
| ته | **به غواړې** | Ba ghwāṛe | خواهی خواست |
| تاسو | **به غواړئ** | Ba ghwāṛey | خواهید خواست |
| هغه | **به غواړي** | Ba ghwāṛi | خواهد خواست |
| هغوی | **به غواړي** | Ba ghwāṛi | خواهند خواست |

---

## ۴. حالت امری (بخواه / نخواه)
- **وغواړه!** (Waghwāṛa!) -> بخواه!
- **وغواړئ!** (Waghwāṛey!) -> بخواهید!
- **مه غواړه!** (Ma ghwāṛa!) -> نخواه!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه یو کتاب غواړم.** (من یک کتاب می‌خواهم) - Positive
- **زه جګړه نه غواړم.** (من جنگ نمی‌خواهم) - Negative
- **آیا ته اوبه غواړې؟** (آیا تو آب می‌خواهی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون ستا لیدل وغوښتل.** (من دیروز دیدن تو را خواستم) - Positive
- **هغه هیڅ ونه غوښتل.** (او هیچ چیزی نخواست) - Negative
- **آیا تا مرسته وغوښتله؟** (آیا تو کمک خواستی؟) - Question

### زمان آینده (Future)
- **زه به سبا اجازه غواړم.** (من فردا اجازه خواهم خواست) - Positive
- **زه ستا غوسه نه غواړم.** (من غصه/خشم تو را نمی‌خواهم) - Negative
- **آیا ته به بیا رخصتي غواړې؟** (آیا تو باز هم رخصتی خواهی خواست؟) - Question
`,hasPractice:!0},Ub={id:"verb-comp-to-see",title:"۹. دیدن (لیدل)",titlePashto:"د لیدلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «دیدن» (لیدل)

فعل «لیدل» در زمان حال ریشه **«وین-»** و در گذشته ریشه **«ولید-»** دارد.

---

## ۱. زمان حال (می‌بینم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **وینم** | Weenam | می‌بینم |
| موږ | **وینو** | Weeno | می‌بینیم |
| ته | **وینې** | Weene | می‌بینی |
| تاسو | **وینئ** | Weeney | می‌بینید |
| هغه | **ویني** | Weeni | می‌بیند |
| هغوی | **ویني** | Weeni | می‌بینند |

---

## ۲. زمان گذشته (دیدم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **ولید** | Wa-leed | دیدم |
| موږ | **ولید** | Wa-leed | دیدیم |
| تا | **ولید** | Wa-leed | دیدی |
| تاسو | **ولید** | Wa-leed | دیدید |
| هغه | **ولیدی** | Wa-leeday | دید (کندهاری) |
| هغوی | **ولیدله** | Wa-leedulu | دیدند (کندهاری) |

---

## ۳. زمان آینده (خواهم دید)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به وینم** | Ba weenam | خواهم دید |
| موږ | **به وینو** | Ba weeno | خواهیم دید |
| ته | **به وینې** | Ba weene | خواهی دید |
| تاسو | **به وینئ** | Ba weeney | خواهید دید |
| هغه | **به ویني** | Ba weeni | خواهد دید |
| هغوی | **به ویني** | Ba weeni | خواهند دید |

---

## ۴. حالت امری (ببین / نبین)
- **ووینه! / وګوره!** (Wagora!) -> ببین / نگاه کن!
- **وگورئ!** (Wagorey!) -> ببینید!
- **مه ګوره!** (Ma gora!) -> نبین!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه پر سړک موټر وینم.** (من در جاده ماشین می‌بینم) - Positive
- **زه په تیاره کې هیڅ نه وینم.** (من در تاریکی هیچ چیزی نمی‌بینم) - Negative
- **آیا ته ما وینې؟** (آیا تو مرا می‌بینی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون هغه فلم ولید.** (من دیروز آن فیلم را دیدم) - Positive
- **احمد نن څوک ونه لیدل.** (احمد امروز کسی را ندید) - Negative
- **آیا تا زما کتاب ولید؟** (آیا تو کتاب مرا دیدی؟) - Question

### زمان آینده (Future)
- **زه به سبا ته ستوری وینم.** (من فردا ستاره‌ها را خواهم دید) - Positive
- **زه هیڅ بد نه وینم.** (من هیچ بدی نخواهم دید) - Negative
- **آیا ته به سبا ما وینې؟** (آیا تو فردا مرا خواهی دید؟) - Question
`,hasPractice:!0},_b={id:"verb-comp-to-say",title:"۱۰. گفتن (ویل)",titlePashto:"د ویلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «گفتن» (ویل)

فعل «ویل» (Wayul) در زمان حال ریشه **«وای-»** و در گذشته ریشه **«وویل-»** دارد.

---

## ۱. زمان حال (می‌گویم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **وایم** | Waayam | می‌گویم |
| موږ | **وایو** | Waayu | می‌گوییم |
| ته | **وایې** | Waaye | می‌گویی |
| تاسو | **وایئ** | Waayey | می‌گویید |
| هغه | **وایي** | Waayi | می‌گوید |
| هغوی | **وایي** | Waayi | می‌گویند |

---

## ۲. زمان گذشته (گفتم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **وویل** | Wa-wayul | گفتم |
| موږ | **وویل** | Wa-wayul | گفتیم |
| تا | **وویل** | Wa-wayul | گفتی |
| تاسو | **وویل** | Wa-wayul | گفتید |
| هغه | **وویلی** | Wa-wayulay | گفت (کندهاری) |
| هغوی | **وویلله** | Wa-wayululu | گفتند (کندهاری) |

---

## ۳. زمان آینده (خواهم گفت)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به وایم** | Ba waayam | خواهم گفت |
| موږ | **به وایو** | Ba waayu | خواهیم گفت |
| ته | **به وایې** | Ba waaye | خواهی گفت |
| تاسو | **به وایئ** | Ba waayey | خواهید گفت |
| هغه | **به وایي** | Ba waayi | خواهد گفت |
| هغوی | **به وایي** | Ba waayi | خواهند گفت |

---

## ۴. حالت امری (بگو / نگو)
- **ووایه!** (Wwaaya!) -> بگو!
- **ووایئ!** (Wwaayey!) -> بگویید!
- **مه وایه!** (Ma waaya!) -> نگو!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه هر وخت ریښتیا وایم.** (من همیشه راست می‌گویم) - Positive
- **زه دروغ نه وایم.** (من دروغ نمی‌گویم) - Negative
- **آیا ته خپله خبره وایې؟** (آیا تو حرف خود را می‌گویی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون هغه ته دا خبره وویله.** (من دیروز به او این حرف را گفتم) - Positive
- **هغه هیڅ ونه ویل.** (او هیچ چیزی نگفت) - Negative
- **آیا تا حقیقت وویلی؟** (آیا تو حقیقت را گفتی؟) - Question

### زمان آینده (Future)
- **زه به بیا تاته دا کیسه وایم.** (من باز هم به تو این داستان را خواهم گفت) - Positive
- **زه به هیڅ بد خبر ونه وایم.** (من هیچ خبر بدی نخواهم گفت) - Negative
- **آیا ته به بیا هغه ته حال وایې؟** (آیا تو باز هم به او حال (توضیح) خواهی داد؟) - Question
`,hasPractice:!0},qb={id:"verb-comp-to-hear",title:"۱۱. شنیدن (اورېدل)",titlePashto:"د اورېدلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «شنیدن» (اورېدل)

فعل «اورېدل» در زمان حال ریشه **«اور-»** و در گذشته ریشه **«واورېد-»** دارد.

---

## ۱. زمان حال (می‌شنوم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **اورم** | Awram | می‌شنوم |
| موږ | **اورو** | Awru | می‌شنویم |
| ته | **اورې** | Awre | می‌شنوی |
| تاسو | **اورئ** | Awrey | می‌شنوید |
| هغه | **اوري** | Awri | می‌شنود |
| هغوی | **اوري** | Awri | می‌شنوند |

---

## ۲. زمان گذشته (شنیدم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **واورېدل** | Wa-wredal | شنیدم |
| موږ | **واورېدل** | Wa-wredal | شنیدیم |
| تا | **واورېدل** | Wa-wredal | شنیدی |
| تاسو | **واورېدل** | Wa-wredal | شنیدید |
| هغه | **واورېدی** | Wa-wreday | شنید (کندهاری) |
| هغوی | **واورېدله** | Wa-wredulu | شنیدند (کندهاری) |

---

## ۳. زمان آینده (خواهم شنید)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به اورم** | Ba awram | خواهم شنید |
| موږ | **به اورو** | Ba awru | خواهیم شنید |
| ته | **به اورې** | Ba awre | خواهی شنید |
| تاسو | **به اورئ** | Ba awrey | خواهید شنید |
| هغه | **به اوري** | Ba awri | خواهد شنید |
| هغوی | **به اوري** | Ba awri | خواهند شنید |

---

## ۴. حالت امری (بشنو / نشنو)
- **واوره!** (Wa-wra!) -> بشنو!
- **واورئ!** (Wa-wrey!) -> بشنوید!
- **مه اوره!** (Ma awra!) -> نشنو!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه ستا غږ اورم.** (من صدای تو را می‌شنوم) - Positive
- **زه ستا غږ نه اورم.** (من صدای تو را نمی‌شنوم) - Negative
- **آیا ته ما اورې؟** (آیا تو صدای مرا می‌شنوی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون یوه خبره واورېدله.** (من دیروز یک حرفی شنیدم) - Positive
- **هغه هیڅ ونه اورېدل.** (او هیچ چیزی نشنید) - Negative
- **آیا تا د هغه کیسه واورېده؟** (آیا تو داستان او را شنیدی؟) - Question

### زمان آینده (Future)
- **زه به بیا تاته غوږ ونیسم.** (من باز هم به تو گوش خواهم داد/خواهم شنید) - Positive
- **زه به هیڅ بد خبر ونه اورم.** (من هیچ خبر بدی نخواهم شنید) - Negative
- **آیا ته به سبا زما غږ اورې؟** (آیا تو فردا صدای مرا خواهی شنید؟) - Question
`,hasPractice:!0},Hb={id:"verb-comp-to-write",title:"۱۲. نوشتن (لیکل)",titlePashto:"د لیکلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «نوشتن» (لیکل)

فعل «لیکل» در زمان حال ریشه **«لیک-»** و در گذشته ریشه **«ولیکل-»** دارد.

---

## ۱. زمان حال (می‌نویسم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **لیکم** | Leekam | می‌نویسم |
| موږ | **لیکو** | Leeku | می‌نویسیم |
| ته | **لیکې** | Leeke | می‌نویسی |
| تاسو | **لیکئ** | Leekey | می‌نویسید |
| هغه | **لیکي** | Leeki | می‌نویسد |
| هغوی | **لیکي** | Leeki | می‌نویسند |

---

## ۲. زمان گذشته (نوشتم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **ولیکل** | Wa-leekal | نوشتم |
| موږ | **ولیکل** | Wa-leekal | نوشتیم |
| تا | **ولیکل** | Wa-leekal | نوشتی |
| تاسو | **ولیکل** | Wa-leekal | نوشتید |
| هغه | **ولیکی** | Wa-leekay | نوشت (کندهاری) |
| هغوی | **ولیکله** | Wa-leekulu | نوشتند (کندهاری) |

---

## ۳. زمان آینده (خواهم نوشت)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به لیکم** | Ba leekam | خواهم نوشت |
| موږ | **به لیکو** | Ba leeku | خواهیم نوشت |
| ته | **به لیکې** | Ba leeke | خواهی نوشت |
| تاسو | **به لیکئ** | Ba leekey | خواهید نوشت |
| هغه | **به لیکي** | Ba leeki | خواهد نوشت |
| هغوی | **به لیکي** | Ba leeki | خواهند نوشت |

---

## ۴. حالت امری (بنویس / ننویس)
- **ولیکه!** (Waleeka!) -> بنویس!
- **ولیکئ!** (Waleekey!) -> بنویسید!
- **مه لیکه!** (Ma leeka!) -> ننویس!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه هر ورځ لیکم.** (من هر روز می‌نویسم) - Positive
- **زه نن خط نه لیکم.** (من امروز نامه نمی‌نویسم) - Negative
- **آیا ته خپل نوم لیکې؟** (آیا تو اسم خودت را می‌نویسی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون خپل درس ولیکل.** (من دیروز درسم را نوشتم) - Positive
- **تا هیڅ ونه لیکل.** (تو هیچ چیزی ننوشتی) - Negative
- **آیا هغه کتاب ولیکی؟** (آیا او کتاب را نوشت؟) - Question

### زمان آینده (Future)
- **زه به سبا یو کتاب لیکم.** (من فردا یک کتاب خواهم نوشت) - Positive
- **زه به هیڅ بد ونه لیکم.** (من هیچ بدی نخواهم نوشت) - Negative
- **آیا ته به راسره لیکنه کوې؟** (آیا تو با من خواهی نوشت؟) - Question
`,hasPractice:!0},Qb={id:"verb-comp-to-read",title:"۱۳. خواندن (لوستل)",titlePashto:"د لوستلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «خواندن» (لوستل)

فعل «لوستل» در حال ریشه **«لول-»** و در گذشته ریشه **«ولوست-»** دارد.

---

## ۱. زمان حال (می‌خوانم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **لولم** | Lwalam | می‌خوانم |
| موږ | **لولو** | Lwalu | می‌خوانیم |
| ته | **لولې** | Lwale | می‌خوانی |
| تاسو | **لولئ** | Lwaley | می‌خوانید |
| هغه | **لولي** | Lwali | می‌خواند |
| هغوی | **لولي** | Lwali | می‌خوانند |

---

## ۲. زمان گذشته (خواندم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **ولوست** | Wa-lwast | خواندم |
| موږ | **ولوست** | Wa-lwast | خواندیم |
| تا | **ولوست** | Wa-lwast | خواندی |
| تاسو | **ولوست** | Wa-lwast | خواندید |
| هغه | **ولوستی** | Wa-lwastay | خواند (کندهاری) |
| هغوی | **ولوستله** | Wa-lwastulu | خواندند (کندهاری) |

---

## ۳. زمان آینده (خواهم خواند)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به لولم** | Ba lwalam | خواهم خواند |
| موږ | **به لولو** | Ba lwalu | خواهیم خواند |
| ته | **به لولې** | Ba lwale | خواهی خواند |
| تاسو | **به لولئ** | Ba lwaley | خواهید خواند |
| هغه | **به لولي** | Ba lwali | خواهد خواند |
| هغوی | **به لولي** | Ba lwali | خواهند خواند |

---

## ۴. حالت امری (بخوان / نخوان)
- **ولوله!** (Walwala!) -> بخوان!
- **ولولئ!** (Walwaley!) -> بخوانید!
- **مه لوله!** (Ma lwala!) -> نخوان!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه کتاب لولم.** (من کتاب می‌خوانم) - Positive
- **زه دا لیک نه شم لوستلی.** (من این نامه را نمی‌توانم بخوانم/نمی‌خوانم) - Negative
- **آیا ته اخبار لولې؟** (آیا تو روزنامه می‌خوانی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون ستا سبق ولوست.** (من دیروز درس تو را خواندم) - Positive
- **هغه هیڅ ونه لوستل.** (او هیچ چیزی نخواند) - Negative
- **آیا تا هغه کتاب ولوستی؟** (آیا تو آن کتاب را خواندی؟) - Question

### زمان آینده (Future)
- **زه به سبا یو بل کتاب لولم.** (من فردا یک کتاب دیگر خواهم خواند) - Positive
- **زه به نن هیڅ ونه لولم.** (من امروز هیچ نخواهم خواند) - Negative
- **آیا ته به سبا زما لیک لولې؟** (آیا تو فردا نامه مرا خواهی خواند؟) - Question
`,hasPractice:!0},Yb={id:"verb-comp-to-have",title:"۱۴. داشتن (لرل)",titlePashto:"د لرلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «داشتن» (لرل)

فعل «لرل» در گذشته ریشه بی‌قاعده **«درلود-»** دارد.

---

## ۱. زمان حال (دارم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **لرم** | Laram | دارم |
| موږ | **لرو** | Laru | داریم |
| ته | **لرې** | Lare | داری |
| تاسو | **لرئ** | Larey | دارید |
| هغه | **لري** | Lari | دارد |
| هغوی | **لري** | Lari | دارند |

---

## ۲. زمان گذشته (داشتم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **درلود** | Darlod | داشتم |
| موږ | **درلود** | Darlod | داشتیم |
| تا | **درلود** | Darlod | داشتی |
| تاسو | **درلود** | Darlod | داشتید |
| هغه | **درلودی** | Darloday | داشت (کندهاری) |
| هغوی | **درلودله** | Darlodulu | داشتند (کندهاری) |

---

## ۳. زمان آینده (خواهم داشت)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به لرم** | Ba laram | خواهم داشت |
| موږ | **به لرو** | Ba laru | خواهیم داشت |
| ته | **به لرې** | Ba lare | خواهی داشت |
| تاسو | **به لرئ** | Ba larey | خواهید داشت |
| هغه | **به لري** | Ba lari | خواهد داشت |
| هغوی | **به لري** | Ba lari | خواهند داشت |

---

## ۴. حالت امری (داشته باش)
- **ولره!** (Walara!) -> داشته باش!
- **ولرئ!** (Walarey!) -> داشته باشید!
- **مه لره!** (Ma lara!) -> نداشته باش!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه یو موټر لرم.** (من یک ماشین دارم) - Positive
- **زه هیڅ پیسې نه لرم.** (من هیچ پولی ندارم) - Negative
- **آیا ته وخت لرې؟** (آیا تو وقت داری؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پخوا ډېر ملګري درلودل.** (من قبلاً دوست‌های زیادی داشتم) - Positive
- **هغه هیڅ کور نه درلود.** (او هیچ خانه‌ای نداشت) - Negative
- **آیا تا قلم درلودی؟** (آیا تو قلم داشتی؟) - Question

### زمان آینده (Future)
- **زه به سبا یو نوی کتاب لرم.** (من فردا یک کتاب جدید خواهم داشت) - Positive
- **زه به هیڅ جنجال ونه لرم.** (من هیچ جنجالی نخواهم داشت) - Negative
- **آیا ته به سبا رخصتي لرې؟** (آیا تو فردا رخصتی خواهی داشت؟) - Question
`,hasPractice:!0},Kb={id:"verb-comp-to-hit",title:"۱۵. زدن (وهل)",titlePashto:"د وهلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «زدن» (وهل)

فعل «وهل» در زمان حال ریشه **«وه-»** و در گذشته پیشوند **«و-»** می‌گیرد که با ابتدای آن ادغام شده و **«ووه-»** تلفظ می‌شود.

---

## ۱. زمان حال (می‌زنم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **وهم** | Waham | می‌زنم |
| موږ | **وهو** | Wahu | می‌زنیم |
| ته | **وهې** | Wahe | می‌زنی |
| تاسو | **وهئ** | Wahey | می‌زنید |
| هغه | **وهي** | Wahi | می‌زند |
| هغوی | **وهي** | Wahi | می‌زنند |

---

## ۲. زمان گذشته (زدم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **ووه** | Wa-wa | زدم |
| موږ | **ووه** | Wa-wa | زدیم |
| تا | **ووه** | Wa-wa | زدی |
| تاسو | **ووه** | Wa-wa | زدید |
| هغه | **ووهی** | Wa-way | زد (کندهاری) |
| هغوی | **ووهله** | Wa-wulu | زدند (کندهاری) |

---

## ۳. زمان آینده (خواهم زد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به وهم** | Ba waham | خواهم زد |
| موږ | **به وهو** | Ba wahu | خواهیم زد |
| ته | **به وهې** | Ba wahe | خواهی زد |
| تاسو | **به وهئ** | Ba wahey | خواهید زد |
| هغه | **به وهي** | Ba wahi | خواهد زد |
| هغوی | **به وهي** | Ba wahi | خواهند زد |

---

## ۴. حالت امری (بزن / نزن)
- **ووهه!** (Wawaha!) -> بزن!
- **ووهئ!** (Wawahey!) -> بزنید!
- **مه وهه!** (Ma waha!) -> نزن!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه توپ وهم.** (من توپ می‌زنم) - Positive
- **زه څوک نه وهم.** (من کسی را نمی‌زنم) - Negative
- **آیا ته دروازه وهې؟** (آیا تو در می‌زنی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون هغه مېخ وواهه.** (من دیروز آن میخ را زدم) - Positive
- **هغه هیڅ ونه واهه.** (او هیچ چیزی نزد) - Negative
- **آیا تا هغه ووهی؟** (آیا تو او را زدی؟) - Question

### زمان آینده (Future)
- **زه به سبا دروازه وهم.** (من فردا در خواهم زد) - Positive
- **زه به بیا تاته لاس ونه وهم.** (من باز هم به تو دست نخواهم زد) - Negative
- **آیا ته به دا توپ وهې؟** (آیا تو این توپ را خواهی زد؟) - Question
`,hasPractice:!0},Gb={id:"verb-comp-to-wash",title:"۱۶. شستن (مینځل)",titlePashto:"د مینځلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «شستن» (مینځل)

فعل «مینځل» در زمان حال ریشه **«مینځ-»** و در گذشته پیشوند **«و-»** می‌گیرد.

---

## ۱. زمان حال (می‌شویم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **مینځم** | Meendzam | می‌شویم |
| موږ | **مینځو** | Meendzu | می‌شوییم |
| ته | **مینځې** | Meendze | می‌شویی |
| تاسو | **مینځئ** | Meendzey | می‌شویید |
| هغه | **مینځي** | Meendzi | می‌شوید |
| هغوی | **مینځي** | Meendzi | می‌شویند |

---

## ۲. زمان گذشته (شستم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **ومینځ** | Wa-meendz | شستم |
| موږ | **ومینځ** | Wa-meendz | شستیم |
| تا | **ومینځ** | Wa-meendz | شستی |
| تاسو | **ومینځ** | Wa-meendz | شستید |
| هغه | **ومینځی** | Wa-meendzay | شست (کندهاری) |
| هغوی | **ومینځله** | Wa-meendzulu | شستند (کندهاری) |

---

## ۳. زمان آینده (خواهم شست)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به مینځم** | Ba meendzam | خواهم شست |
| موږ | **به مینځو** | Ba meendzu | خواهیم شست |
| ته | **به مینځې** | Ba meendze | خواهی شست |
| تاسو | **به مینځئ** | Ba meendzey | خواهید شست |
| هغه | **به مینځي** | Ba meendzi | خواهد شست |
| هغوی | **به مینځي** | Ba meendzi | خواهند شست |

---

## ۴. حالت امری (بشوی / نشوی)
- **ومینځه!** (Wameendza!) -> بشوی!
- **ومینځئ!** (Wameendzey!) -> بشویید!
- **مه مینځه!** (Ma meendza!) -> نشوی!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه خپل کالي مینځم.** (من لباس‌هایم را می‌شویم) - Positive
- **زه نن لاسونه نه مینځم.** (من امروز دست‌هایم را نمی‌شویم) - Negative
- **آیا ته خپل موټر مینځې؟** (آیا تو ماشین خودت را می‌شویی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون خپل کالي ومینځل.** (من دیروز لباس‌هایم را شستم) - Positive
- **هغه خپل مخ ونه مینځه.** (او صورتش را نشُست) - Negative
- **آیا تا لوښي ومینځل؟** (آیا تو ظرف‌ها را شستی؟) - Question

### زمان آینده (Future)
- **زه به سبا خپل موټر مینځم.** (من فردا ماشینم را خواهم شست) - Positive
- **هغه به بیا جامې ونه مینځي.** (او باز هم لباس‌ها را نخواهد شست) - Negative
- **آیا ته به سبا ستا کوټه ومینځې؟** (آیا تو فردا اتاقت را خواهی شست/تمیز خواهی کرد؟) - Question
`,hasPractice:!0},Zb={id:"verb-comp-to-give",title:"۱۷. دادن (ورکول)",titlePashto:"د ورکولو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «دادن» (ورکول)

فعل «ورکول» از پیشوند جهتی **«ور-»** و فعل **«کول»** ساخته شده است.

---

## ۱. زمان حال (می‌دهم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **ورکوم** | Warkawam | می‌دهم |
| موږ | **ورکوو** | Warkawu | می‌دهیم |
| ته | **ورکوې** | Warkawe | می‌دهی |
| تاسو | **ورکوئ** | Warkawey | می‌دهید |
| هغه | **ورکوي** | Warkawi | می‌دهد |
| هغوی | **ورکوي** | Warkawi | می‌دهند |

---

## ۲. زمان گذشته (دادم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **ورکړ** | Warkṛ | دادم |
| موږ | **ورکړ** | Warkṛ | دادیم |
| تا | **ورکړ** | Warkṛ | دادی |
| تاسو | **ورکړ** | Warkṛ | دادید |
| هغه | **ورکړی** | Warkṛay | داد (کندهاری) |
| هغوی | **ورکړله** | Warkṛulu | دادند (کندهاری) |

---

## ۳. زمان آینده (خواهم داد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به ورکوم** | Ba warkawam | خواهم داد |
| موږ | **به ورکوو** | Ba warkawu | خواهیم داد |
| ته | **به ورکوې** | Ba warkawe | خواهی داد |
| تاسو | **به ورکوئ** | Ba warkawey | خواهید داد |
| هغه | **به ورکوي** | Ba warkawi | خواهد داد |
| هغوی | **به ورکوي** | Ba warkawi | خواهند داد |

---

## ۴. حالت امری (بده / نده)
- **ورکړه!** (Warkṛa!) -> بده!
- **ورکړئ!** (Warkṛey!) -> بدهید!
- **مه ورکوه!** (Ma warkawa!) -> نده!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه تاته کتاب ورکوم.** (من به تو کتاب می‌دهم) - Positive
- **زه تاته هیڅ نه ورکوم.** (من به تو هیچ چیزی نمی‌دهم) - Negative
- **آیا ته ما ته قلم ورکوی؟** (آیا تو به من قلم می‌دهی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون احمد ته خط ورکړ.** (من دیروز به احمد نامه دادم) - Positive
- **هغه هیڅ پیسې ورکنه کړې.** (او هیچ پولی نداد) - Negative
- **آیا تا هغه ته اجازه ورکړه؟** (آیا تو به او اجازه دادی؟) - Question

### زمان آینده (Future)
- **زه به سبا تاته ډالی ورکوم.** (من فردا به تو هدیه خواهم داد) - Positive
- **زه به بیا تاته هیڅ ونه ورکوم.** (من باز هم به تو هیچ نخواهم داد) - Negative
- **آیا ته به بیا ماته وخت ورکوی؟** (آیا تو باز هم به من وقت خواهی داد؟) - Question
`,hasPractice:!0},Xb={id:"verb-comp-to-take",title:"۱۸. گرفتن (نیول)",titlePashto:"د نیولو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «گرفتن» (نیول)

فعل «نیول» در زمان حال ریشه **«نیس-»** و در گذشته پیشوند **«و-»** می‌گیرد.

---

## ۱. زمان حال (می‌گیرم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **نیسم** | Neesam | می‌گیرم |
| موږ | **نیسو** | Neesu | می‌گیریم |
| ته | **نیسې** | Neese | می‌گیری |
| تاسو | **نیسئ** | Neesey | می‌گیرید |
| هغه | **نیسي** | Neesi | می‌گیرد |
| هغوی | **نیسي** | Neesi | می‌گیرند |

---

## ۲. زمان گذشته (گرفتم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **ونیول** | Wa-neewal | گرفتم |
| موږ | **ونیول** | Wa-neewal | گرفتیم |
| تا | **ونیول** | Wa-neewal | گرفتی |
| تاسو | **ونیول** | Wa-neewal | گرفتید |
| هغه | **ونیوی** | Wa-neeway | گرفت (کندهاری) |
| هغوی | **ونیوله** | Wa-neewulu | گرفتند (کندهاری) |

---

## ۳. زمان آینده (خواهم گرفت)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به نیسم** | Ba neesam | خواهم گرفت |
| موږ | **به نیسو** | Ba neesu | خواهیم گرفت |
| ته | **به نیسې** | Ba neese | خواهی گرفت |
| تاسو | **به نیسئ** | Ba neesey | خواهید گرفت |
| هغه | **به نیسي** | Ba neesi | خواهد گرفت |
| هغوی | **به نیسي** | Ba neesi | خواهند گرفت |

---

## ۴. حالت امری (بگیر / نگیر)
- **ونیسه!** (Waneesa!) -> بگیر!
- **ونیسئ!** (Waneesey!) -> بگیرید!
- **مه نیسه!** (Ma neesa!) -> نگیر!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه له بازار څخه میوه نیسم.** (من از بازار میوه می‌گیرم/می‌خرم) - Positive
- **زه له چا څخه پیسې نه نیسم.** (من از کسی پول نمی‌گیرم) - Negative
- **آیا ته زما لاس نیسې؟** (آیا تو دست مرا می‌گیری؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون یو نوی کتاب ونیول.** (من دیروز یک کتاب جدید گرفتم) - Positive
- **هغه هیڅ ونه نیول.** (او هیچ چیزی نگرفت) - Negative
- **آیا تا اجازه ونیوله؟** (آیا تو اجازه گرفتی؟) - Question

### زمان آینده (Future)
- **زه به سبا خپله تنخواه نیسم.** (من فردا حقوقم را خواهم گرفت) - Positive
- **زه به له هیچ چا څخه پور ونه نیسم.** (من از هیچ کسی قرض نخواهم گرفت) - Negative
- **آیا ته به سبا رخصتي نیسې؟** (آیا تو فردا رخصتی خواهی گرفت؟) - Question
`,hasPractice:!0},Wb={id:"verb-comp-to-stand",title:"۱۹. ایستادن / توقف (درېدل)",titlePashto:"د درېدلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «ایستادن / توقف» (درېدل)

فعل «درېدل» (Dredal) برای ایستادن، توقف کردن و صبر کردن استفاده می‌شود. 

---

## ۱. زمان حال (می‌ایستم)
| ضمیر | پښتو | تلفظ (کندهاری) | فارسی |
|:---|:---|:---|:---|
| زه | **درېږم** | Dreẓ̌am | می‌ایستم |
| موږ | **درېږو** | Dreẓ̌u | می‌ایستیم |
| ته | **درېږې** | Dreẓ̌e | می‌ایستی |
| تاسو | **درېږئ** | Dreẓ̌əy | می‌ایستید |
| هغه | **درېږي** | Dreẓ̌i | می‌ایستد |
| هغوی | **درېږي** | Dreẓ̌i | می‌ایستند |

---

## ۲. زمان گذشته (ایستادم / توقف کردم)
| ضمیر | پښتو | تلفظ (کندهاری) | فارسی |
|:---|:---|:---|:---|
| زه | **ودرېدم** | Wa-dredam | ایستادم |
| موږ | **ودرېدو** | Wa-dredu | ایستادیم |
| ته | **ودرېدې** | Wa-drede | ایستادی |
| تاسو | **ودرېدئ** | Wa-dredəy | ایستادید |
| هغه (مذکر) | **ودرېدی** | Wa-dreday | ایستاد (کندهاری) |
| هغه (مونث) | **ودرېدله** | Wa-dredala | ایستاد |
| هغوی | **ودرېدل** | Wa-dredal | ایستادند |

---

## ۳. زمان آینده (خواهم ایستاد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به درېږم** | Ba dreẓ̌am | خواهم ایستاد |
| موږ | **به درېږو** | Ba dreẓ̌u | خواهیم ایستاد |
| ته | **به درېږې** | Ba dreẓ̌e | خواهی ایستاد |
| تاسو | **به درېږئ** | Ba dreẓ̌əy | خواهید ایستاد |
| هغه | **به درېږي** | Ba dreẓ̌i | خواهد ایستاد |
| هغوی | **به درېږي** | Ba dreẓ̌i | خواهند ایستاد |

---

## ۴. حالت امری (بایست / ایستاد شو)
- **ودرېږه!** (Wa-dreẓ̌a!) -> بایست! / ایستاد شو!
- **ودرېږئ!** (Wa-dreẓ̌əy!) -> بایستید!
- **مه درېږه!** (Ma dreẓ̌a!) -> نایست! / توقف نکن!

> **نکته لهجه کندهاری**: در تلفظ کندهاری، کلمه **ودرېږه** ممکن است شبیه به «ودریژه» شنیده شود، زیرا حرف **«ږ»** به صورت غلیظ و متمایل به «ژ» تلفظ می‌شود.

---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه دلته درېږم.** (من اینجا می‌ایستم) - Positive
- **زه په لاره کې نه درېږم.** (من در راه نمی‌ایستم) - Negative
- **آیا ته هلته درېږې؟** (آیا تو آنجا می‌ایستی؟) - Question

### زمان گذشته (Past)
- **موټر په تمځای کې ودرېد.** (ماشین در ایستگاه ایستاد) - Positive
- **هغه پرون ونه درېدی.** (او دیروز نایستاد - کندهاری) - Negative
- **آیا ته پرون زما لپاره ودرېدې؟** (آیا تو دیروز برای من ایستادی/صبر کردی؟) - Question

### زمان آینده (Future)
- **زه به سبا تر هغه وخته درېږم.** (من فردا تا آن وقت خواهم ایستاد/منتظر خواهم بود) - Positive
- **هغه به دلته ونه درېږي.** (او اینجا نخواهد ایستاد) - Negative
- **آیا ته به بیا زما تر څنګ درېږې؟** (آیا تو باز هم کنار من خواهی ایستاد؟) - Question
`,hasPractice:!0},Vb={id:"verb-comp-to-run",title:"۲۰. دویدن (منډې وهل)",titlePashto:"د منډې وهلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «دویدن» (منډې وهل)

این یک فعل ترکیبی است: **منډې** (دویدن‌ها) + **وهل** (زدن).

---

## ۱. زمان حال (می‌دوم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **منډې وهم** | Munḍe waham | می‌دوم |
| موږ | **منډې وهو** | Munḍe wahu | می‌دویم |
| ته | **منډې وهې** | Munḍe wahe | می‌دوی |
| تاسو | **منډې وهئ** | Munḍe wahey | می‌دوید |
| هغه | **منډې وهي** | Munḍe wahi | می‌دود |
| هغوی | **منډې وهي** | Munḍe wahi | می‌دوند |

---

## ۲. زمان گذشته (دویدم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **منډه ووهله** | Munḍa wa-wah-la | دویدم |
| موږ | **منډې ووهلې** | Munḍe wa-wah-le | دویدیم |
| تا | **منډه ووهله** | Munḍa wa-wah-la | دویدی |
| تاسو | **منډې ووهلې** | Munḍe wa-wah-le | دویدید |
| هغه | **منډه ووهله** | Munḍa wa-wah-la | او دوید |
| هغوی | **منډې ووهلې** | Munḍe wa-wah-le | آنها دویدند |

---

## ۳. زمان آینده (خواهم دوید)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به منډې وهم** | Ba munḍe waham | خواهم دوید |
| موږ | **به منډې وهو** | Ba munḍe wahu | خواهیم دوید |
| ته | **به منډې وهې** | Ba munḍe wahe | خواهی دوید |
| تاسو | **به منډې وهئ** | Ba munḍe wahey | خواهید دوید |
| هغه | **به منډې وهي** | Ba munḍe wahi | خواهد دوید |
| هغوی | **به منډې وهي** | Ba munḍe wahi | خواهند دوید |

---

## ۴. حالت امری (بدو / ندو)
- **منډه ووهه!** (Munḍa wawaha!) -> بدو!
- **منډې ووهئ!** (Munḍe wawahey!) -> بدوید!
- **منډه مه وهه!** (Munḍa ma waha!) -> ندو!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه په میدان کې منډې وهم.** (من در میدان می‌دوم) - Positive
- **زه نن منډې نه وهم.** (من امروز نمی‌دوم) - Negative
- **آیا ته هره ورځ منډې وهې؟** (آیا تو هر روز می‌دوی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون ډېره منډه ووهله.** (من دیروز خیلی دویدم) - Positive
- **موږ پرون منډې و نه وهلې.** (ما دیروز ندوییدیم) - Negative
- **آیا هغه هم منډه ووهله؟** (آیا او هم دوید؟) - Question

### زمان آینده (Future)
- **زه به سبا سهار منډې وهم.** (من فردا صبح خواهم دوید) - Positive
- **زه به نن غرمه منډې ونه وهم.** (من امروز چاشت نخواهم دوید) - Negative
- **آیا ته به راسره منډې وهې؟** (آیا تو با من خواهی دوید؟) - Question
`,hasPractice:!0},Jb={id:"verb-comp-to-close",title:"۲۱. بستن (ترل)",titlePashto:"د تړلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «بستن» (ترل)

فعل «ترل» (Tarul) به معنای بستن یا گره زدن است و در کندهاری کاربرد زیادی دارد.

---

## ۱. زمان حال (می‌بندم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **ترم** | Taram | می‌بندم |
| موږ | **ترو** | Taru | می‌بندیم |
| ته | **ترې** | Tare | می‌بندی |
| تاسو | **ترئ** | Tarey | می‌بندید |
| هغه | **تري** | Tari | می‌بندد |
| هغوی | **تري** | Tari | می‌بندند |

---

## ۲. زمان گذشته (بستم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **وتر** | Wa-tar | بستم |
| موږ | **وتر** | Wa-tar | بستیم |
| تا | **وتر** | Wa-tar | بستی |
| تاسو | **وتر** | Wa-tar | بستید |
| هغه | **وتری** | Wa-taray | بست (کندهاری) |
| هغوی | **وترله** | Wa-tarulu | بستند (کندهاری) |

---

## ۳. زمان آینده (خواهم بست)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به ترم** | Ba taram | خواهم بست |
| موږ | **به ترو** | Ba taru | خواهیم بست |
| ته | **به ترې** | Ba tare | خواهی بست |
| تاسو | **به ترئ** | Ba tarey | خواهید بست |
| هغه | **به تري** | Ba tari | خواهد بست |
| هغوی | **به تري** | Ba tari | خواهند بست |

---

## ۴. حالت امری (ببند / نبند)
- **وتره!** (Watara!) -> ببند!
- **وترئ!** (Watarey!) -> ببندید!
- **مه تره!** (Ma tara!) -> نبند!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه دروازه ترم.** (من در را می‌بندم) - Positive
- **زه کړکۍ نه ترم.** (من پنجره را نمی‌بندم) - Negative
- **آیا ته خپل بوټونه ترې؟** (آیا تو کفش‌هایت را می‌بندی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون بکس وتر.** (من دیروز کیف را بستم) - Positive
- **هغه دروازه ونه ترله.** (او در را نبست) - Negative
- **آیا تا مزی وتری؟** (آیا تو طناب را بستی؟) - Question

### زمان آینده (Future)
- **زه به سبا دوکان ترم.** (من فردا دکان را خواهم بست) - Positive
- **زه به هیڅکله دروازه خلاصه ونه ساتم (وترم).** (من هیچوقت در را باز نخواهم گذاشت/خواهم بست) - Negative
- **آیا ته به ماخوستن دروازه ترې؟** (آیا تو سر شب در را می‌بندی؟) - Question
`,hasPractice:!0},Fb={id:"verb-comp-to-open",title:"۲۲. باز کردن (خلاصول)",titlePashto:"د خلاصولو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «باز کردن» (خلاصول)

فعل «خلاصول» در کندهاری بسیار کاربردی است.

---

## ۱. زمان حال (باز می‌کنم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **خلاصوم** | Khlaasawam | باز می‌کنم |
| موږ | **خلاصوو** | Khlaasawu | باز می‌کنیم |
| ته | **خلاصوې** | Khlaasawe | باز می‌کنی |
| تاسو | **خلاصوئ** | Khlaasawey | باز می‌کنید |
| هغه | **خلاصوي** | Khlaasawi | باز می‌کند |
| هغوی | **خلاصوي** | Khlaasawi | باز می‌کنند |

---

## ۲. زمان گذشته (باز کردم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **وخلاص** | Wa-khlaas | باز کردم |
| موږ | **وخلاص** | Wa-khlaas | باز کردیم |
| تا | **وخلاص** | Wa-khlaas | باز کردی |
| تاسو | **وخلاص** | Wa-khlaas | باز کردید |
| هغه | **وخلاصی** | Wa-khlaasay | باز کرد (کندهاری) |
| هغوی | **وخلاصله** | Wa-khlaasulu | باز کردند (کندهاری) |

---

## ۳. زمان آینده (باز خواهم کرد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به خلاصوم** | Ba khlaasawam | باز خواهم کرد |
| موږ | **به خلاصوو** | Ba khlaasawu | باز خواهیم کرد |
| ته | **به خلاصوې** | Ba khlaasawe | باز خواهی کرد |
| تاسو | **به خلاصوئ** | Ba khlaasawey | باز خواهید کرد |
| هغه | **به خلاصوي** | Ba khlaasawi | باز خواهد کرد |
| هغوی | **به خلاصوي** | Ba khlaasawi | باز خواهند کرد |

---

## ۴. حالت امری (باز کن / باز نکن)
- **وخلاصه!** (Wakhlaasa!) -> باز کن!
- **وخلاصئ!** (Wakhlaasay!) -> باز کنید!
- **مه خلاصه!** (Ma khlaasa!) -> باز نکن!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه خپل کتاب خلاصوم.** (من کتابم را باز می‌کنم) - Positive
- **زه دا دروازه نه خلاصوم.** (من این در را باز نمی‌کنم) - Negative
- **آیا ته کړکۍ خلاصوې؟** (آیا تو پنجره را باز می‌کنی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون دا بکس وخلاص.** (من دیروز این کیف را باز کردم) - Positive
- **هغه خپله خوله ونه خلاصه کړه.** (او دهانش را باز نکرد) - Negative
- **آیا تا دروازه وخلاصه؟** (آیا تو در را باز کردی؟) - Question

### زمان آینده (Future)
- **زه به سبا دوکان خلاصوم.** (من فردا دکان را باز خواهم کرد) - Positive
- **زه به بیا ستا راز ښکاره (خلاص) نه کړم.** (من باز هم راز تو را فاش/باز نخواهم کرد) - Negative
- **آیا ته به بیا دغه بکس خلاصوې؟** (آیا تو باز هم این کیف را باز خواهی کرد؟) - Question
`,hasPractice:!0},$b={id:"verb-comp-to-carry",title:"۲۳. بردن (وړل)",titlePashto:"د وړلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «بردن» (وړل)

فعل «وړل» در گذشته ریشه کاملاً بی‌قاعده (**یووړ-**) دارد.

---

## ۱. زمان حال (می‌برم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **وړم** | Waṛam | می‌برم |
| موږ | **وړو** | Waṛu | می‌بریم |
| ته | **وړې** | Waṛe | می‌بری |
| تاسو | **وړئ** | Waṛey | می‌برید |
| هغه | **وړي** | Waṛi | می‌برد |
| هغوی | **وړي** | Waṛi | می‌برند |

---

## ۲. زمان گذشته (بردم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **یووړ** | Yūwaṛ | بردم |
| موږ | **یووړ** | Yūwaṛ | بردیم |
| تا | **یووړ** | Yūwaṛ | بردی |
| تاسو | **یووړ** | Yūwaṛ | بردید |
| هغه | **یووړی** | Yūwaṛay | برد (کندهاری) |
| هغوی | **یووړله** | Yūwaṛulu | بردند (کندهاری) |

---

## ۳. زمان آینده (خواهم برد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به وړم** | Ba waṛam | خواهم برد |
| موږ | **به وړو** | Ba waṛu | خواهیم برد |
| ته | **به وړې** | Ba waṛe | خواهی برد |
| تاسو | **به وړئ** | Ba waṛey | خواهید برد |
| هغه | **به وړي** | Ba waṛi | خواهد برد |
| هغوی | **به وړي** | Ba waṛi | خواهند برد |

---

## ۴. حالت امری (ببر / نبر)
- **یوسه!** (Yusa!) -> ببر!
- **یوسئ!** (Yusey!) -> ببرید!
- **مه وړه!** (Ma waṛa!) -> نبر!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه بار کور ته وړم.** (من بار را به خانه می‌برم) - Positive
- **زه ستا کتاب نه وړم.** (من کتاب تو را نمی‌برم) - Negative
- **آیا ته دا بکس وړې؟** (آیا تو این کیف را می‌بری؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون سودا یووړه.** (من دیروز خریدها را بردم) - Positive
- **هغه هیڅ شی یو نه وړ.** (او هیچ چیزی نبرد) - Negative
- **آیا تا قلم یووړ؟** (آیا تو قلم را بردی؟) - Question

### زمان آینده (Future)
- **زه به سبا خپل کالي وړم.** (من فردا لباس‌هایم را خواهم برد) - Positive
- **زه به ستا راز له ځانه سره ونه وړم.** (من راز تو را با خودم نخواهم برد) - Negative
- **آیا ته به دا بار وړې؟** (آیا تو این بار را خواهی برد؟) - Question
`,hasPractice:!0},Ib={id:"verb-comp-to-bring",title:"۲۴. آوردن (راوړل)",titlePashto:"د راوړلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «آوردن» (راوړل)

فعل «راوړل» برعکس فعل «بردن» است و در گذشته سیستم ارگتیو دارد.

---

## ۱. زمان حال (می‌آورم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **راوړم** | Rāwaṛam | می‌آورم |
| موږ | **راوړو** | Rāwaṛu | می‌آوریم |
| ته | **راوړې** | Rāwaṛe | می‌آوری |
| تاسو | **راوړئ** | Rāwaṛey | می‌آورید |
| هغه | **راوړي** | Rāwaṛi | می‌آورد |
| هغوی | **راوړي** | Rāwaṛi | می‌آورند |

---

## ۲. زمان گذشته (آوردم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **راوړ** | Rāwaṛ | آوردم |
| موږ | **راوړ** | Rāwaṛ | آوردیم |
| تا | **راوړ** | Rāwaṛ | آوردی |
| تاسو | **راوړ** | Rāwaṛ | آوردید |
| هغه | **راوړی** | Rāwaṛay | آورد (کندهاری) |
| هغوی | **راوړله** | Rāwaṛulu | آوردند (کندهاری) |

---

## ۳. زمان آینده (خواهم آورد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به راوړم** | Ba rāwaṛam | خواهم آورد |
| موږ | **به راوړو** | Ba rāwaṛu | خواهیم آورد |
| ته | **به راوړې** | Ba rāwaṛe | خواهی آورد |
| تاسو | **به راوړئ** | Ba rāwaṛey | خواهید آورد |
| هغه | **به راوړي** | Ba rāwaṛi | خواهد آورد |
| هغوی | **به راوړي** | Ba rāwaṛi | خواهند آورد |

---

## ۴. حالت امری (بیاور / نیاور)
- **راوړه!** (Rāwaṛa!) -> بیاور!
- **راوړئ!** (Rāwaṛey!) -> بیاورید!
- **مه راوړه!** (Ma rāwaṛa!) -> نیاور!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه تاته میوه راوړم.** (من برای تو میوه می‌آورم) - Positive
- **زه نن اوبه نه راوړم.** (من امروز آب نمی‌آورم) - Negative
- **آیا ته ما ته کتاب راوړې؟** (آیا تو برای من کتاب می‌آوری؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون ستا لپاره ډالۍ راوړه.** (من دیروز برای تو هدیه آوردم) - Positive
- **هغه پرون ډوډۍ را نه وړه.** (او دیروز غذا نیاورد) - Negative
- **آیا تا قلم راوړ؟** (آیا تو قلم آوردی؟) - Question

### زمان آینده (Future)
- **زه به سبا تاته خبر راوړم.** (من فردا برای تو خبر خواهم آورد) - Positive
- **زه به نن ماښام هیڅ ونه راوړم.** (من امروز شام هیچ نخواهم آورد) - Negative
- **آیا ته به بیا راسره مرسته راوړې؟** (آیا تو باز هم با من کمک خواهی آورد؟) - Question
`,hasPractice:!0},av={id:"verb-comp-to-understand",title:"۲۵. فهمیدن (پوهېدل)",titlePashto:"د پوهېدو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «فهمیدن» (پوهېدل)

این فعل از ترکیب صفت «پوه» (فهمیده) و فعل «کېدل» (شدن) ساخته شده است.

---

## ۱. زمان حال (می‌فهمم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **پوهېږم** | Poheẓ̌am | می‌فهمم |
| موږ | **پوهېږو** | Poheẓ̌u | می‌فهمیم |
| ته | **پوهېږې** | Poheẓ̌e | می‌فهمی |
| تاسو | **پوهېږئ** | Poheẓ̌ey | می‌فهمید |
| هغه | **پوهېږي** | Poheẓ̌i | می‌فهمد |
| هغوی | **پوهېږي** | Poheẓ̌i | می‌فهمند |

---

## ۲. زمان گذشته (فهمیدم)
*در گذشته از فعل شو/شول استفاده می‌شود.*

| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **پوه شوم** | Poh shwam | فهمیدم |
| موږ | **پوه شوو** | Poh shwu | فهمیدیم |
| ته | **پوه شوې** | Poh shwe | فهمیدی |
| تاسو | **پوه شوئ** | Poh shwey | فهمیدید |
| هغه (مذکر) | **پوه شو** | Poh sho | فهمید |
| هغوی | **پوه شول** | Poh shwal | فهمیدند |

---

## ۳. زمان آینده (خواهم فهمید)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به پوه شم** | Ba poh sham | خواهم فهمید |
| موږ | **به پوه شو** | Ba poh shu | خواهیم فهمید |
| ته | **به پوه شې** | Ba poh she | خواهی فهمید |
| تاسو | **به پوه شئ** | Ba poh shey | خواهید فهمید |
| هغه | **به پوه شي** | Ba poh shi | خواهد فهمید |
| هغوی | **به پوه شي** | Ba poh shi | خواهند فهمید |

---

## ۴. حالت امری (بفهم / نفهم)
- **پوه شه!** (Poh sha!) -> بفهم! / متوجه باش!
- **پوه شئ!** (Poh shey!) -> بفهمید!
- **مه پوهېږه!** (Ma poheẓ̌a!) -> نفهم!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه پښتو پوهېږم.** (من پشتو می‌فهمم) - Positive
- **زه په دې خبره نه پوهېږم.** (من این حرف را نمی‌فهمم) - Negative
- **آیا ته په پښتو پوهېږې؟** (آیا تو پشتو می‌فهمی؟) - Question

### زمان گذشته (Past)
- **احمد په کیسه پوه شو.** (احمد در داستان پوه شد/فهمید) - Positive
- **موږ هیڅ پوه نه شوو.** (ما هیچ چیزی نفهمیدیم) - Negative
- **آیا ته پوه شوې؟** (آیا تو فهمیدی؟) - Question

### زمان آینده (Future)
- **زه به سبا پوه شم.** (من فردا خواهم فهمید) - Positive
- **هغه به هیڅکله پوه نه شي.** (او هیچگاه نخواهد فهمید) - Negative
- **آیا ته به په حقیقت پوه شې؟** (آیا تو به حقیقت پی خواهی برد؟) - Question
`,hasPractice:!0},tv={id:"verb-comp-to-sit",title:"۲۶. نشستن (کېناستل)",titlePashto:"د کېناستلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «نشستن» (کېناستل)

فعل «کېناستل» یک فعل لازم (Intransitive) است.

---

## ۱. زمان حال (می‌نشینم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **کېنم** | Kenam | می‌نشینم |
| موږ | **کېنو** | Kenu | می‌نشینیم |
| ته | **کېنې** | Kene | می‌نشینی |
| تاسو | **کېنئ** | Keney | می‌نشینید |
| هغه | **کېني** | Keni | می‌نشیند |
| هغوی | **کېني** | Keni | می‌نشینند |

---

## ۲. زمان گذشته (نشستم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **کېناستم** | Kenâstam | نشستم |
| موږ | **کېناستو** | Kenâstu | نشستیم |
| ته | **کېناستې** | Kenâste | نشستی |
| تاسو | **کېناستئ** | Kenâstey | نشستید |
| هغه (مذکر) | **کېناستی** | Kenâstay | نشست (کندهاری) |
| هغه (مونث) | **کېناستله** | Kenâstala | نشست |
| هغوی | **کېناستلو** | Kenâstulu | نشستند (کندهاری) |

---

## ۳. زمان آینده (خواهم نشست)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به کېنم** | Ba kenam | خواهم نشست |
| موږ | **به کېنو** | Ba kenu | خواهیم نشست |
| ته | **به کېنې** | Ba kene | خواهی نشست |
| تاسو | **به کېنئ** | Ba keney | خواهید نشست |
| هغه | **به کېني** | Ba keni | خواهد نشست |
| هغوی | **به کېني** | Ba keni | خواهند نشست |

---

## ۴. حالت امری (بنشین / ننشین)
- **کېنه!** (Kena!) -> بنشین!
- **کېنئ!** (Keney!) -> بنشینید!
- **مه کېنه!** (Ma kena!) -> ننشین!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه پر ځای کېنم.** (من بر سر جایم می‌نشینم) - Positive
- **زه پر مځکه نه کېنم.** (من روی زمین نمی‌نشینم) - Negative
- **آیا ته زما تر څنګ کېنې؟** (آیا تو کنار من می‌نشینی؟) - Question

### زمان گذشته (Past)
- **موږ ټول کډه کېناستلو.** (ما همه با هم نشستیم) - Positive
- **هغه دلته کې نه ناستی.** (او اینجا ننشست) - Negative
- **آیا ته پر چوکۍ کېناستې؟** (آیا تو روی صندلی نشستی؟) - Question

### زمان آینده (Future)
- **زه به سبا دلته کېنم.** (من فردا اینجا خواهم نشست) - Positive
- **هغوی به نن نه کېني.** (آن‌ها امروز نخواهند نشست) - Negative
- **آیا ته به زما په کوټه کې کېنې؟** (آیا تو در اتاق من خواهی نشست؟) - Question
`,hasPractice:!0},ev={id:"verb-comp-to-sleep",title:"۲۷. خوابیدن (ویدېدل)",titlePashto:"د ویدېدلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «خوابیدن» (ویدېدل)

این فعل معمولاً با ترکیب «ویده» (خوابیده) + فعل «کېدل» ساخته می‌شود.

---

## ۱. زمان حال (می‌خوابم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **ویده کېږم** | Wida keẓ̌am | می‌خوابم |
| موږ | **ویده کېږو** | Wida keẓ̌u | می‌خوابیم |
| ته | **ویده کېږې** | Wida keẓ̌e | می‌خوابی |
| تاسو | **ویده کېږئ** | Wida keẓ̌ey | می‌خوابید |
| هغه | **ویده کېږي** | Wida keẓ̌i | می‌خوابد |
| هغوی | **ویده کېږي** | Wida keẓ̌i | می‌خوابند |

---

## ۲. زمان گذشته (خوابیدم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **ویده شوم** | Wida shwam | خوابیدم |
| موږ | **ویده شوو** | Wida shwu | خوابیدیم |
| ته | **ویده شوې** | Wida shwe | خوابیدی |
| تاسو | **ویده شوئ** | Wida shwey | خوابیدید |
| هغه (مذکر) | **ویده شو** | Wida sho | خوابید |
| هغوی | **ویده شول** | Wida shwal | خوابیدند |

---

## ۳. زمان آینده (خواهم خوابید)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به ویده شم** | Ba wida sham | خواهم خوابید |
| موږ | **به ویده شو** | Ba wida shu | خواهیم خوابید |
| ته | **به ویده شې** | Ba wida she | خواهی خوابید |
| تاسو | **به ویده شئ** | Ba wida shey | خواهید خوابید |
| هغه | **به ویده شي** | Ba wida shi | خواهد خوابید |
| هغوی | **به ویده شي** | Ba wida shi | خواهند خوابید |

---

## ۴. حالت امری (ببخواب / نخواب)
- **ویده شه!** (Wida sha!) -> بخواب!
- **ویده شئ!** (Wida shey!) -> بخوابید!
- **مه ویده کېږه!** (Ma wida keẓ̌a!) -> نخواب!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه اوس ویده کېږم.** (من الان می‌خوابم) - Positive
- **زه نن نه ویده کېږم.** (من امروز نمی‌خوابم) - Negative
- **آیا ته وختي ویده کېږې؟** (آیا تو زود می‌خوابی؟) - Question

### زمان گذشته (Past)
- **ماشوم پرون ویده شو.** (بچه دیروز خوابید) - Positive
- **هغه تر اوسه نه دی ویده شوی.** (او تا هنوز نخوابیده است) - Negative
- **آیا هغه پرون ویده شو؟** (آیا او دیروز خوابید؟) - Question

### زمان آینده (Future)
- **زه به سبا ویده شم.** (من فردا خواهم خوابید) - Positive
- **زه به نن نه ویده کېږم.** (من امروز نخواهم خوابید) - Negative
- **آیا ته به دلته ویده شې؟** (آیا تو اینجا خواهی خوابید؟) - Question
`,hasPractice:!0},nv={id:"verb-comp-to-become",title:"۲۸. شدن (کېدل)",titlePashto:"د کېدلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «شدن» (کېدل)

فعل «کېدل» زیربنای افعال مرکب و مجهول در پښتو است.

---

## ۱. زمان حال (می‌شوم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **کېږم** | Keẓ̌am | می‌شوم |
| موږ | **کېږو** | Keẓ̌u | می‌شویم |
| ته | **کېږې** | Keẓ̌e | می‌شوی |
| تاسو | **کېږئ** | Keẓ̌ey | می‌شوید |
| هغه | **کېږي** | Keẓ̌i | می‌شود |
| هغوی | **کېږي** | Keẓ̌i | می‌شوند |

---

## ۲. زمان گذشته (شدم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **شوم** | Shwam | شدم |
| موږ | **شوو** | Shwu | شدیم |
| ته | **شوې** | Shwe | شدی |
| تاسو | **شوئ** | Shwey | شدید |
| هغه (مذکر) | **شو** | Sho | شد |
| هغوی | **شول** | Shwal | شدند |

---

## ۳. زمان آینده (خواهم شد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به شم** | Ba sham | خواهم شد |
| موږ | **به شو** | Ba shu | خواهیم شد |
| ته | **به شې** | Ba she | خواهی شد |
| تاسو | **به شئ** | Ba shey | خواهید شد |
| هغه | **به شي** | Ba shi | خواهد شد |
| هغوی | **به شي** | Ba shi | خواهند شد |

---

## ۴. حالت امری (بشو / نشو)
- **شه!** (Sha!) -> بشو!
- **شئ!** (Shey!) -> بشوید!
- **مه کېږه!** (Ma keẓ̌a!) -> نشو!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **هوا ګرمه کېږي.** (هوا گرم می‌شود) - Positive
- **هوا یخه نه کېږي.** (هوا سرد نمی‌شود) - Negative
- **آیا ته ډاکټر کېږې؟** (آیا تو دکتر می‌شوی؟) - Question

### زمان گذشته (Past)
- **او په کار بوخت شو.** (او مصروف کار شد) - Positive
- **هغه پرون خفه نه شو.** (او دیروز ناراحت نشد) - Negative
- **آیا کار تمام شو؟** (آیا کار تمام شد؟) - Question

### زمان آینده (Future)
- **هر څه به ښه شي.** (همه چیز خوب خواهد شد) - Positive
- **دا به خراب نه شي.** (این خراب نخواهد شد) - Negative
- **آیا ته به خوشحاله شې؟** (آیا تو خوشحال خواهی شد؟) - Question
`,hasPractice:!0},iv={id:"verb-comp-to-love",title:"۲۹. دوست داشتن (خوښول)",titlePashto:"د خوښولو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «دوست داشتن» (خوښول)

در پښتو، «خوښول» معمولاً با ساختار غیرمستقیم (ما ته خوښېږي) استفاده می‌شود.

---

## ۱. زمان حال (دوست دارم)
| ضمیر (مفعول-مانند) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما ته | **خوښېږي** | Mā ta khwax̌eẓ̌i | من دوست دارم |
| موږ ته | **خوښېږي** | Moẓ̌ ta khwax̌eẓ̌i | ما دوست داریم |
| تاته | **خوښېږي** | Tā ta khwax̌eẓ̌i | تو دوست داری |
| تاسو ته | **خوښېږي** | Tāsu ta khwax̌eẓ̌i | شما دوست دارید |
| هغه ته | **خوښېږي** | Hagha ta khwax̌eẓ̌i | او دوست دارد |
| هغوی ته | **خوښېږي** | Haghuy ta khwax̌eẓ̌i | ایشان دوست دارند |

---

## ۲. زمان گذشته (دوست داشتم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما ته | **خوښېده** | Mā ta khwax̌eda | من دوست داشتم |
| موږ ته | **خوښېده** | Moẓ̌ ta khwax̌eda | ما دوست داشتیم |
| تا ته | **خوښېده** | Tā ta khwax̌eda | تو دوست داشتی |
| تاسو ته | **خوښېده** | Tāsu ta khwax̌eda | شما دوست داشتید |
| هغه ته | **خوښېده** | Hagha ta khwax̌eda | او دوست داشت |
| هغوی ته | **خوښېده** | Haghuy ta khwax̌eda | ایشان دوست داشتند |

---

## ۳. زمان آینده (دوست خواهم داشت)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به خوښوم** | Ba khwax̌awam | دوست خواهم داشت |
| موږ | **به خوښوو** | Ba khwax̌awu | دوست خواهیم داشت |
| ته | **به خوښوې** | Ba khwax̌awe | دوست خواهی داشت |
| تاسو | **به خوښوئ** | Ba khwax̌awey | دوست خواهید داشت |
| هغه | **به خوښوي** | Ba khwax̌awi | دوست خواهد داشت |
| هغوی | **به خوښوي** | Ba khwax̌awi | دوست خواهند داشت |

---

## ۴. حالت امری (دوست بدار / انتخاب کن)
- **خوښه کړه!** (Khwax̌a kṛa!) -> دوست بدار (انتخاب کن)!
- **مه خوښوه!** (Ma khwax̌awa!) -> دوست مدار!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **ما ته پښتو خوښېږي.** (من پشتو را دوست دارم) - Positive
- **هغه ته دا رنګ نه خوښېږي.** (او این رنگ را دوست ندارد) - Negative
- **آیا تاته چای خوښېږي؟** (آیا تو چای دوست داری؟) - Question

### زمان گذشته (Past)
- **موږ ته هغه کور خوښېده.** (ما آن خانه را دوست داشتیم) - Positive
- **ما ته هیڅ نه خوښېده.** (من هیچ چیزی را دوست نداشتم) - Negative
- **آیا تاته دغه فلم خوښېده؟** (آیا تو این فیلم را دوست داشتی؟) - Question

### زمان آینده (Future)
- **زه به پښتو خوښوم.** (من پشتو را دوست خواهم داشت/انتخاب خواهم کرد) - Positive
- **زه به بد کالي نه خوښوم.** (من لباس‌های بد را نخواهم پسندید) - Negative
- **آیا ته به راسره ملګرتیا خوښوې؟** (آیا تو با من دوستی را خواهی پسندید؟) - Question
`,hasPractice:!0},sv={id:"verb-comp-to-work",title:"۳۰. کار کردن (کار کول)",titlePashto:"د کار کولو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «کار کردن» (کار کول)

این یک فعل مرکب از اسم «کار» و فعل «کول» است.

---

## ۱. زمان حال (کار می‌کنم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **کار کوم** | Kaar kawam | کار می‌کنم |
| موږ | **کار کوو** | Kaar kawu | کار می‌کنیم |
| ته | **کار کوې** | Kaar kawe | کار می‌کنی |
| تاسو | **کار کوئ** | Kaar kawey | کار می‌کنید |
| هغه | **کار کوي** | Kaar kawi | کار می‌کند |
| هغوی | **کار کوي** | Kaar kawi | کار می‌کنند |

---

## ۲. زمان گذشته (کار کردم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **کار وکړ** | Kaar wa-kṛ | کار کردم |
| موږ | **کار وکړ** | Kaar wa-kṛ | کار کردیم |
| تا | **کار وکړ** | Kaar wa-kṛ | کار کردی |
| تاسو | **کار وکړ** | Kaar wa-kṛ | کار کردید |
| هغه | **کار وکړی** | Kaar wa-kṛay | کار کرد (کندهاری) |
| هغوی | **کار وکړله** | Kaar wa-kṛulu | کار کردند (کندهاری) |

---

## ۳. زمان آینده (کار خواهم کرد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به کار کوم** | Ba kaar kawam | کار خواهم کرد |
| موږ | **به کار کوو** | Ba kaar kawu | کار خواهیم کرد |
| ته | **به کار کوې** | Ba kaar kawe | کار خواهی کرد |
| تاسو | **به کار کوئ** | Ba kaar kawey | کار خواهید کرد |
| هغه | **به کار کوي** | Ba kaar kawi | کار خواهد کرد |
| هغوی | **به کار کوي** | Ba kaar kawi | کار خواهند کرد |

---

## ۴. حالت امری (کار بکن)
- **کار وکړه!** (Kaar wakṛa!) -> کار بکن!
- **کار وکړئ!** (Kaar wakṛey!) -> کار بکنید!
- **کار مه کوه!** (Kaar ma kawa!) -> کار نکن!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه په دفتر کې کار کوم.** (من در دفتر کار می‌کنم) - Positive
- **زه نن کار نه کوم.** (من امروز کار نمی‌کنم) - Negative
- **آیا ته هره ورځ کار کوې؟** (آیا تو هر روز کار می‌کنی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون ډېر کار وکړ.** (من دیروز خیلی کار کردم) - Positive
- **هغه هیڅ کار ونه کړ.** (او هیچ کاری نکرد) - Negative
- **آیا تا پلټنه (څېړنه) وکړه؟** (آیا تو جستجو/تحقیق کردی؟) - Question

### زمان آینده (Future)
- **زه به سبا تر غرمې کار کوم.** (من فردا تا چاشت کار خواهم کرد) - Positive
- **زه به نن شپه کار ونه کوم.** (من امشب کار نخواهم کرد) - Negative
- **آیا ته به راتلونکې اونۍ کار کوې؟** (آیا تو هفته آینده کار خواهی کرد؟) - Question
`,hasPractice:!0},ov={id:"verb-comp-to-speak",title:"۳۱. صحبت کردن (خبرې کول)",titlePashto:"د خبرو کولو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «صحبت کردن» (خبرې کول)

این فعل از ترکیب «خبرې» (حرف‌ها) و فعل «کول» ساخته شده است.

---

## ۱. زمان حال (صحبت می‌کنم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **خبرې کوم** | Khabre kawam | صحبت می‌کنم |
| موږ | **خبرې کوو** | Khabre kawu | صحبت می‌کنیم |
| ته | **خبرې کوې** | Khabre kawe | صحبت می‌کنی |
| تاسو | **خبرې کوئ** | Khabre kawey | صحبت می‌کنید |
| هغه | **خبرې کوي** | Khabre kawi | صحبت می‌کند |
| هغوی | **خبرې کوي** | Khabre kawi | صحبت می‌کنند |

---

## ۲. زمان گذشته (صحبت کردم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **خبرې وکړې** | Khabre wa-kṛ-e | صحبت کردم |
| موږ | **خبرې وکړې** | Khabre wa-kṛ-e | صحبت کردیم |
| تا | **خبرې وکړې** | Khabre wa-kṛ-e | صحبت کردی |
| تاسو | **خبرې وکړې** | Khabre wa-kṛ-e | صحبت کردید |
| هغه | **خبرې وکړې** | Khabre wa-kṛ-e | او صحبت کرد |
| هغوی | **خبرې وکړې** | Khabre wa-kṛ-e | آنها صحبت کردند |

---

## ۳. زمان آینده (صحبت خواهم کرد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به خبرې کوم** | Ba khabre kawam | صحبت خواهم کرد |
| موږ | **به خبرې کوو** | Ba khabre kawu | صحبت خواهیم کرد |
| ته | **به خبرې کوې** | Ba khabre kawe | صحبت خواهی کرد |
| تاسو | **به خبرې کوئ** | Ba khabre kawey | صحبت خواهید کرد |
| هغه | **به خبرې کوي** | Ba khabre kawi | صحبت خواهد کرد |
| هغوی | **به خبرې کوي** | Ba khabre kawi | صحبت خواهند کرد |

---

## ۴. حالت امری (صحبت بکن)
- **خبرې وکړه!** (Khabre wakṛa!) -> صحبت بکن!
- **خبرې وکړئ!** (Khabre wakṛey!) -> صحبت بکنید!
- **خبرې مه کوه!** (Khabre ma kawa!) -> صحبت نکن!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه په پښتو خبرې کوم.** (من به پشتو صحبت می‌کنم) - Positive
- **زه په انګلیسي خبرې نه کوم.** (من به انگلیسی صحبت نمی‌کنم) - Negative
- **آیا ته کندهاري خبرې کوې؟** (آیا تو کندهاری صحبت می‌کنی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون له احمد سره خبرې وکړې.** (من دیروز با احمد صحبت کردم) - Positive
- **هغه هیڅ خبره ونه کړه.** (او هیچ حرفی نزد) - Negative
- **آیا تا له پلار سره خبرې وکړې؟** (آیا تو با پدر صحبت کردی؟) - Question

### زمان آینده (Future)
- **زه به سبا له تاته ټول احوال وایم (خبرې کوم).** (من فردا با تو مفصل صحبت خواهم کرد) - Positive
- **زه به بیا په دې اړه خبرې ونه کوم.** (من باز هم در این باره صحبت نخواهم کرد) - Negative
- **آیا ته به بیا ورسره خبرې کوې؟** (آیا تو باز هم با او صحبت خواهی کرد؟) - Question
`,hasPractice:!0},lv={id:"verb-comp-to-live",title:"۳۲. زندگی کردن (ژوند کول)",titlePashto:"د ژوند کولو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «زندگی کردن» (ژوند کول)

این فعل از ترکیب «ژوند» (زندگی) و فعل «کول» ساخته شده است.

---

## ۱. زمان حال (زندگی می‌کنم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **ژوند کوم** | Zhwand kawam | زندگی می‌کنم |
| موږ | **ژوند کوو** | Zhwand kawu | زندگی می‌کنیم |
| ته | **ژوند کوې** | Zhwand kawe | زندگی می‌کنی |
| تاسو | **ژوند کوئ** | Zhwand kawey | زندگی می‌کنید |
| هغه | **ژوند کوي** | Zhwand kawi | زندگی می‌کند |
| هغوی | **ژوند کوي** | Zhwand kawi | زندگی می‌کنند |

---

## ۲. زمان گذشته (زندگی کردم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **ژوند وکړ** | Zhwand wakṛ | زندگی کردم |
| موږ | **ژوند وکړ** | Zhwand wakṛ | زندگی کردیم |
| تا | **ژوند وکړ** | Zhwand wakṛ | زندگی کردی |
| تاسو | **ژوند وکړ** | Zhwand wakṛ | زندگی کردید |
| هغه | **ژوند وکړی** | Zhwand wakṛay | زندگی کرد (کندهاری) |
| هغوی | **ژوند وکړله** | Zhwand wakṛulu | زندگی کردند (کندهاری) |

---

## ۳. زمان آینده (زندگی خواهم کرد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به ژوند کوم** | Ba zhwand kawam | زندگی خواهم کرد |
| موږ | **به ژوند کوو** | Ba zhwand kawu | زندگی خواهیم کرد |
| ته | **به ژوند کوې** | Ba zhwand kawe | زندگی خواهی کرد |
| تاسو | **به ژوند کوئ** | Ba zhwand kawey | زندگی خواهید کرد |
| هغه | **به ژوند کوي** | Ba zhwand kawi | زندگی خواهد کرد |
| هغوی | **به ژوند کوي** | Ba zhwand kawi | زندگی خواهند کرد |

---

## ۴. حالت امری (زندگی بکن)
- **ژوند وکړه!** (Zhwand wakṛa!) -> زندگی بکن!
- **بد ژوند مه کوه!** (Ma zhwand kawa!) -> زندگی بد نکن!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه په کندهار کې ژوند کوم.** (من در قندهار زندگی می‌کنم) - Positive
- **زه په هجرت کې ژوند نه کوم.** (من در مهاجرت زندگی نمی‌کنم) - Negative
- **آیا ته دلته ژوند کوې؟** (آیا تو اینجا زندگی می‌کنی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما لس کاله په کابل کې ژوند وکړ.** (من ده سال در کابل زندگی کردم) - Positive
- **هغوی په غربت کې ژوند ونه کړ.** (آن‌ها در فقر زندگی نکردند) - Negative
- **آیا تا په خوښۍ ژوند وکړ؟** (آیا تو با خوشحالی زندگی کردی؟) - Question

### زمان آینده (Future)
- **زه به په خپل هیواد کې ژوند کوم.** (من در کشور خودم زندگی خواهم کرد) - Positive
- **زه به هیڅکله په دروغو ژوند ونه کوم.** (من هیچوقت با دروغ زندگی نخواهم کرد) - Negative
- **آیا ته به بیا دغلته ژوند کوې؟** (آیا تو باز هم اینجا زندگی خواهی کرد؟) - Question
`,hasPractice:!0},rv={id:"verb-comp-to-learn",title:"۳۳. یاد گرفتن (زده کول)",titlePashto:"د زده کولو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «یاد گرفتن» (زده کول)

این فعل یکی از مهم‌ترین افعال برای زبان‌آموزان است.

---

## ۱. زمان حال (یاد می‌گیرم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **زده کوم** | Zda kawam | یاد می‌گیرم |
| موږ | **زده کوو** | Zda kawu | یاد می‌گیریم |
| ته | **زده کوې** | Zda kawe | یاد می‌گیری |
| تاسو | **زده کوئ** | Zda kawey | یاد می‌گیرید |
| هغه | **زده کوي** | Zda kawi | یاد می‌گیرد |
| هغوی | **زده کوي** | Zda kawi | یاد می‌گیرند |

---

## ۲. زمان گذشته (یاد گرفتم)
| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **زده کړ** | Zda kṛ | یاد گرفتم |
| موږ | **زده کړ** | Zda kṛ | یاد گرفتیم |
| تا | **زده کړ** | Zda kṛ | یاد گرفتی |
| تاسو | **زده کړ** | Zda kṛ | یاد گرفتید |
| هغه | **زده کړی** | Zda kṛay | یاد گرفت (کندهاری) |
| هغوی | **زده کړله** | Zda kṛulu | یاد گرفتند (کندهاری) |

---

## ۳. زمان آینده (یاد خواهم گرفت)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به زده کوم** | Ba zda kawam | یاد خواهم گرفت |
| موږ | **به زده کوو** | Ba zda kawu | یاد خواهیم گرفت |
| ته | **به زده کوې** | Ba zda kawe | یاد خواهی گرفت |
| تاسو | **به زده کوئ** | Ba zda kawey | یاد خواهید گرفت |
| هغه | **به زده کوي** | Ba zda kawi | یاد خواهد گرفت |
| هغوی | **به زده کوي** | Ba zda kawi | یاد خواهند گرفت |

---

## ۴. حالت امری (یاد بگیر)
- **زده کړه!** (Zda kṛa!) -> یاد بگیر!
- **زده یې کړه!** (Zda ye kṛa!) -> یادش بگیر!
- **مه زده کوه!** (Ma zda kawa!) -> یاد نگیر!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه نوې ژبه زده کوم.** (من زبان جدید یاد می‌گیرم) - Positive
- **زه اوس هیڅ نه زده کوم.** (من الان هیچ چیزی یاد نمی‌گیرم) - Negative
- **آیا ته پښتو زده کوې؟** (آیا تو پشتو یاد می‌گیری؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون ډېر نوي لغات زده کړل.** (من دیروز لغات جدید زیادی یاد گرفتم) - Positive
- **هغه دا سبق زده نه کړ.** (او این درس را یاد نگرفت) - Negative
- **آیا تا لایسنس زده کړ؟** (آیا تو رانندگی/گواهینامه یاد گرفتی؟) - Question

### زمان آینده (Future)
- **زه به تر سبا دا ټول کتاب زده کوم.** (من تا فردا این تمام کتاب را یاد خواهم گرفت) - Positive
- **زه به هیڅ بد عادت زده نه کړم.** (من هیچ عادت بدی یاد نخواهم گرفت) - Negative
- **آیا ته به بیا دغه سبق زده کوې؟** (آیا تو باز هم این درس را تمرین/یاد خواهی کرد؟) - Question
`,hasPractice:!0},uv={id:"verb-comp-to-arrive",title:"۳۴. رسیدن (رسېدل)",titlePashto:"د رسېدلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «رسیدن» (رسېدل)

این یک فعل لازم (Intransitive) است. در گذشته با فاعل مطابقت دارد.

---

## ۱. زمان حال (می‌رسم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **رسېږم** | Raseẓ̌am | می‌رسم |
| موږ | **رسېږو** | Raseẓ̌u | می‌رسیم |
| ته | **رسېږې** | Raseẓ̌e | می‌رسی |
| تاسو | **رسېږئ** | Raseẓ̌ey | می‌رسید |
| هغه | **رسېږي** | Raseẓ̌i | می‌رسد |
| هغوی | **رسېږي** | Raseẓ̌i | می‌رسند |

---

## ۲. زمان گذشته (رسیدم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **ورسېدم** | Wa-rasedam | رسیدم |
| موږ | **ورسېدو** | Wa-rasedu | رسیدیم |
| ته | **ورسېدې** | Wa-rasede | رسیدی |
| تاسو | **ورسېدئ** | Wa-rasedey | رسیدید |
| هغه (مذکر) | **ورسېدی** | Wa-raseday | رسید (کندهاری) |
| هغه (مونث) | **ورسېدله** | Wa-rasedala | رسید |
| هغوی | **ورسېدل** | Wa-rasedal | رسیدند |

---

## ۳. زمان آینده (خواهم رسید)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به ورسېږم** | Ba wa-raseẓ̌am | خواهم رسید |
| موږ | **به ورسېږو** | Ba wa-raseẓ̌u | خواهیم رسید |
| ته | **به ورسېږې** | Ba wa-raseẓ̌e | خواهی رسید |
| تاسو | **به ورسېږئ** | Ba wa-raseẓ̌ey | خواهید رسید |
| هغه | **به ورسېږي** | Ba wa-raseẓ̌i | خواهد رسید |
| هغوی | **به ورسېږي** | Ba wa-raseẓ̌i | خواهند رسید |

---

## ۴. حالت امری (برس / نرس)
- **ورسېږه!** (Wa-raseẓ̌a!) -> برس!
- **ورسېږئ!** (Wa-raseẓ̌ey!) -> برسید!
- **مه رسېږه!** (Ma raseẓ̌a!) -> نرس!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه اوس کور ته رسېږم.** (من الان به خانه می‌رسم) - Positive
- **موږ نن غره ته نه رسېږو.** (ما امروز به کوه نمی‌رسیم) - Negative
- **آیا ته بازار ته رسېږې؟** (آیا تو به بازار می‌رسی؟) - Question

### زمان گذشته (Past)
- **احمد کابل ته ورسېدی.** (احمد به کابل رسید) - Positive
- **موږ تر اوسه نه یو ورسېدلي.** (ما تا هنوز نرسیده‌ایم) - Negative
- **آیا ته پرون ورسېدې؟** (آیا تو دیروز رسیدی؟) - Question

### زمان آینده (Future)
- **موږ به سبا رسېږو.** (ما فردا خواهیم رسید) - Positive
- **هغه به هیڅکله ونه رسېږي.** (او هیچوقت نخواهد رسید) - Negative
- **آیا ته به وختي ورسېږې؟** (آیا تو زود خواهی رسید؟) - Question
`,hasPractice:!0},cv={id:"verb-comp-to-wake-up",title:"۳۵. بیدار شدن (پاڅېدل)",titlePashto:"د پاڅېدلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «بیدار شدن / برخاستن» (پاڅېدل)

این فعل هم برای بیدار شدن از خواب و هم برای بلند شدن از جا استفاده می‌شود (لازم).

---

## ۱. زمان حال (بیدار می‌شوم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **پاڅېږم** | Pâtseẓ̌am | بیدار می‌شوم / بلند می‌شوم |
| موږ | **پاڅېږو** | Pâtseẓ̌u | بیدار می‌شویم |
| ته | **پاڅېږې** | Pâtseẓ̌e | بیدار می‌شوی |
| تاسو | **پاڅېږئ** | Pâtseẓ̌ey | بیدار می‌شوید |
| هغه | **پاڅېږي** | Pâtseẓ̌i | بیدار می‌شود |
| هغوی | **پاڅېږي** | Pâtseẓ̌i | بیدار می‌شوند |

---

## ۲. زمان گذشته (بیدار شدم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **پاڅېدم** | Pâtsedam | بیدار شدم |
| موږ | **پاڅېدو** | Pâtsedu | بیدار شدیم |
| ته | **پاڅېدې** | Pâtsede | بیدار شدی |
| تاسو | **پاڅېدئ** | Pâtsedey | بیدار شدید |
| هغه (مذکر) | **پاڅېدی** | Pâtseday | بیدار شد (کندهاری) |
| هغه (مونث) | **پاڅېدله** | Pâtsedala | بیدار شد |
| هغوی | **پاڅېدل** | Pâtsedal | بیدار شدند |

---

## ۳. زمان آینده (خواهم برخاست)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به پاڅېږم** | Ba pâtseẓ̌am | بیدار خواهم شد |
| موږ | **به پاڅېږو** | Ba pâtseẓ̌u | خواهیم برخاست |
| ته | **به پاڅېږې** | Ba pâtseẓ̌e | خواهی برخاست |
| تاسو | **به پاڅېږئ** | Ba pâtseẓ̌ey | خواهید برخاست |
| هغه | **به پاڅېږي** | Ba pâtseẓ̌i | خواهد برخاست |
| هغوی | **به پاڅېږي** | Ba pâtseẓ̌i | خواهند برخاست |

---

## ۴. حالت امری (بلند شو / بیدار شو)
- **پاڅه!** (Pâtsa!) -> بلند شو! / بیدار شو!
- **پاڅئ!** (Pâtsey!) -> بلند شوید!
- **مه پاڅېږه!** (Ma pâtseẓ̌a!) -> بلند نشو!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه سهار وختي پاڅېږم.** (من صبح زود بیدار می‌شوم) - Positive
- **زه نن نه پاڅېږم.** (من امروز بیدار نمی‌شوم) - Negative
- **آیا ته ژر پاڅېږې؟** (آیا تو زود بیدار می‌شوی؟) - Question

### زمان گذشته (Past)
- **هغه له خوبه پاڅېدی.** (او از خواب بیدار شد) - Positive
- **هغه پرون نه پاڅېدی.** (او دیروز بیدار نشد) - Negative
- **آیا ته پرون پر وخت پاڅېدې؟** (آیا تو دیروز سر وقت بیدار شدی؟) - Question

### زمان آینده (Future)
- **زه به سبا وختی پاڅېږم.** (من فردا زود بیدار خواهم شد) - Positive
- **هغه به سبا نه پاڅېږي.** (او فردا بیدار نخواهد شد) - Negative
- **آیا ته به سبا پاڅېږې؟** (آیا تو فردا بیدار خواهی شد؟) - Question
`,hasPractice:!0},pv={id:"verb-comp-to-walk",title:"۳۶. گشتن/قدم زدن (ګرځېدل)",titlePashto:"د ګرځېدلو جامع فعل",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «گشتن / قدم زدن» (ګرځېدل)

فعل «ګرځېدل» (Gartsedal) هم به معنای راه رفتن و هم به معنای دور زدن یا گشتن است.

---

## ۱. زمان حال (می‌گردم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **ګرځم** | Gartsam | می‌گردم / قدم می‌زنم |
| موږ | **ګرځو** | Gartsu | می‌گردیم |
| ته | **ګرځې** | Gartse | می‌گردی |
| تاسو | **ګرځئ** | Gartsey | می‌گردید |
| هغه | **ګرځي** | Gartsi | می‌گردد |
| هغوی | **ګرځي** | Gartsi | می‌گردند |

---

## ۲. زمان گذشته (گشتم)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **وګرځېدم** | Wa-gartsedam | گشتم |
| موږ | **وګرځېدو** | Wa-gartsedu | گشتیم |
| ته | **وګرځېدې** | Wa-gartsede | گشتی |
| تاسو | **وګرځېدئ** | Wa-gartsedey | گشتید |
| هغه (مذکر) | **وګرځېدی** | Wa-gartseday | گشت (کندهاری) |
| هغه (مونث) | **وګرځېدله** | Wa-gartsedala | گشت |
| هغوی | **وګرځېدل** | Wa-gartsedal | گشتند |

---

## ۳. زمان آینده (خواهم گشت)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به وګرځم** | Ba wa-gartsam | خواهم گشت |
| موږ | **به وګرځو** | Ba wa-gartsu | خواهیم گشت |
| ته | **به وګرځې** | Ba wa-gartse | خواهی گشت |
| تاسو | **به وګرځئ** | Ba wa-gartsey | خواهید گشت |
| هغه | **به وګرځي** | Ba wa-gartsi | خواهد گشت |
| هغوی | **به وګرځي** | Ba wa-gartsi | خواهند گشت |

---

## ۴. حالت امری (بگرد / نگرد)
- **وګرځه!** (Wa-gartsa!) -> بگرد! / قدم بزن!
- **وګرځئ!** (Wa-gartsey!) -> بگردید!
- **مه ګرځه!** (Ma gartsa!) -> نگرد!

---


---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه په بازار کې ګرځم.** (من در بازار می‌گردم/قدم می‌زنم) - Positive
- **زه نن بهر نه ګرځم.** (من امروز بیرون نمی‌گردم) - Negative
- **آیا ته هم ګرځې؟** (آیا تو هم می‌گردی؟) - Question

### زمان گذشته (Past)
- **احمد پرون ډېر وګرځېدی.** (احمد دیروز خیلی گشت) - Positive
- **موږ پرون و نه ګرځېدو.** (ما دیروز نگشتیم) - Negative
- **آیا ته پرون وګرځېدې؟** (آیا تو دیروز گشتی؟) - Question

### زمان آینده (Future)
- **زه به سبا په باغ کې وګرځم.** (من فردا در باغ خواهم گشت) - Positive
- **هغه به نن نه وګرځي.** (او امروز نخواهد گشت) - Negative
- **آیا ته به راسره وګرځې؟** (آیا تو با من خواهی گشت؟) - Question
`,hasPractice:!0},fv={id:"verb-comp-to-pour",title:"۳۷. ریختن / انداختن (اچول)",titlePashto:"اچول (واچول)",difficulty:"hard",estimatedTime:"۲۰ دقیقه",content:`
# فعل اچول (Pour / Throw / Put in)

در لهجه کندهاری، فعل **«اچول» (Achawul)** بسیار پرکاربرد است. این فعل هم برای «ریختن چای/آب»، هم برای «انداختن چیزی» و هم برای «پوشیدن لباس (اچول/اغوستل)» به کار می‌رود.

---

## ۱. زمان حال (Present Tense)
ریشه حال: **اچو- (Acha-)**

| ضمیر | حالت مثبت | تلفظ | فارسی |
|:---|:---|:---|:---|
| **زه** | زه چای **اچوم** | Za chāy achawam | من چای می‌ریزم |
| **موږ** | موږ چای **اچوو** | Muẓ̌ chāy achawu | ما چای می‌ریزیم |
| **ته** | ته چای **اچوې** | Ta chāy achawe | تو چای می‌ریزی |
| **تاسو** | تاسو چای **اچوئ** | Tāso chāy achawəy | شما چای می‌ریزید |
| **هغه** | هغه چای **اچوي** | Hagha chāy achawi | او چای می‌ریزد |
| **هغوی** | هغوی چای **اچوي** | Haghwey chāy achawi | ایشان چای می‌ریزند |

---

## ۲. زمان گذشته (Past Tense) - سیستم ارگتیو
**اچول** یک فعل **متعدی** است. یعنی در گذشته با **مفعول** مطابقت می‌کند.

### حالت کامل (یک‌باره / تمام شده):
پیشوند **«وا-» (Wā-)** به ابتدای فعل اضافه می‌شود.

| مفعول | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| **مذکر (واحد)** | ما چای **واچاوه** | Mā chāy wā-chāwa | من چای را ریختم |
| **مونث (واحد)** | ما اوبه **واچولې** | Mā oba wā-chawala | من آب را ریختم |
| **جمع (مذکر/مونث)** | ما کتابونه **واچول** | Mā kitābuna wā-chawul | من کتاب‌ها را انداختم |

---

## ۳. زمان آینده (Future Tense)
فرمول: **به + فعل زمان حال**

- زه به چای **اچوم**. (من چای خواهم ریخت)
- هغه به چای **واچوي**. (او چای خواهد ریخت)

---

## ۴. حالت امری (Imperative)
- **واچوه!** (Wā-chawa) -> بریز! / بنداز!
- **واچوئ!** (Wā-chawəy) -> بریزید! / بندازید!

---

## ۵. مثال‌های کندهاری (زمینه کاربرد)

1.  **چای اچول**: «لږ چای واچوه» (کمی چای بریز).
2.  **لباس اچول**: «خپل کتان واچوه» (کتان/لباس خود را بپوش - در قندهار به جای اغوستل گاهی اچول می‌گویند).
3.  **کثافات اچول**: «کثافات دلته مه اچوه» (آشغال اینجا ننداز).

---


---

## ۷. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه چای اچوم.** (من چای می‌ریزم) - Positive
- **زه په اوبو کې کثافات نه اچوم.** (من در آب آشغال نمی‌اندازم) - Negative
- **آیا ته په چای کې بوره اچوې؟** (آیا تو در چای شکر می‌ریزی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون په ګلدان کې اوبه واچولې.** (من دیروز در گلدان آب ریختم) - Positive
- **هغه کثافات وانه چول.** (او آشغال‌ها را نینداخت) - Negative
- **آیا تا کتاب په بکس کې واچاوه؟** (آیا تو کتاب را در کیف انداختی؟) - Question

### زمان آینده (Future)
- **زه به سبا په باغ کې تخم اچوم.** (من فردا در باغ تخم خواهم پاشید/ریخت) - Positive
- **زه به بیا تاته په زړه کې بد نه اچوم.** (من باز هم به دل تو بدی نخواهم ریخت/نخواهم آورد) - Negative
- **آیا ته به په موټر کې تېل اچوې؟** (آیا تو در ماشین بنزین خواهی ریخت؟) - Question
`,hasPractice:!0,practiceQuestions:[{id:"q1",question:"«من چای می‌ریزم» به پښتو چه می‌شود؟",options:["زه چای اچوم","زه چای واچول","زه چای کوم"],correctAnswer:0},{id:"q2",question:"حالت امری «بریز (مفرد)» کدام است؟",options:["واچوئ","اچوه","واچوه"],correctAnswer:2},{id:"q3",question:"در جمله «ما چای واچاوه»، چرا فعل «واچاوه» است؟",options:["چون فاعل من هستم","چون مفعول (چای) مذکر است","چون زمان آینده است"],correctAnswer:1}]},dv={id:"verb-comp-to-leave",title:"۳۸. ماندن / گذاشتن (پرېښودل)",titlePashto:"پرېښودل (پرېږدل)",difficulty:"hard",estimatedTime:"۲۰ دقیقه",content:`
# فعل پرېښودل (To Leave / Let go / Put down)

در لهجه کندهاری، فعل **«پرېښودل» (Preṣ̌odul)** که در محاوره بیشتر **«پرېږدل» (Preẓ̌dal)** شنیده می‌شود، یکی از مهم‌ترین افعال برای بیان ترک کردن، اجازه دادن و یا گذاشتن چیزی بجای دیگر است.

---

## ۱. زمان حال (Present Tense)
ریشه حال: **پرېږدو- (Preẓ̌du-)**

| ضمیر | حالت مثبت | تلفظ | فارسی |
|:---|:---|:---|:---|
| **زه** | زه دا **پرېږدم** | Za dā preẓ̌dam | من این را می‌گذارم |
| **موږ** | موږ دا **پرېږدو** | Muẓ̌ dā preẓ̌du | ما این را می‌گذاریم |
| **ته** | ته دا **پرېږدي** | Ta dā preẓ̌de | تو این را می‌گذاری |
| **تاسو** | تاسو دا **پرېږدئ** | Tāso dā preẓ̌dəy | شما این را می‌گذارید |
| **هغه** | هغه دا **پرېږدي** | Hagha dā preẓ̌di | او این را می‌گذارد |

> **نکته**: به معنای «اجازه دادن» هم به کار می‌رود: **ما پرېږده!** (به من اجازه بده / مرا رها کن).

---

## ۲. زمان گذشته (Past Tense) - سیستم ارگتیو
این فعل **متعدی** است.

### حالت کامل:
پیشوند خاص کندهاری ندارد و خود کلمه تغییر می‌کند.

| مفعول | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| **مذکر** | ما کتاب **پرېښود** | Mā kitāb pre-ṣ̌od | من کتاب را گذاشتم/ماندم |
| **مونث** | ما ډوډۍ **پرېښودله** | Mā ḍoḍəy pre-ṣ̌odala | من غذا را ماندم/ترک کردم |
| **جمع** | ما هلکان **پرېښول** | Mā halakān pre-ṣ̌awul | من بچه‌ها را رها کردم |

---

## ۳. زمان آینده (Future Tense)
- زه به دا **پرېږدم**. (من این را خواهم گذاشت / رها خواهم کرد).

---

## ۴. حالت امری (Imperative)
- **پرېږده!** (Pre-ẓ̌da) -> بمان! / رها کن! / اجازه بده!
- **پرېږدئ!** (Pre-ẓ̌dəy) -> بمانید! / رها کنید!

---

## ۵. مثال‌های کندهاری

1.  **اجازه دادن**: «ما پرېږده چې ولاړ شم» (بگذار بروم).
2.  **ترک کردن محل**: «کور مو پرېښود» (خانه را ترک کردیم).
3.  **گذاشتن شی**: «موبایل دلته پرېږده» (موبایل را اینجا بگذار).

---


---

## ۷. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه دا قلم دلته پرېږدم.** (من این قلم را اینجا می‌گذارم) - Positive
- **زه کلي په کور کې نه پرېږدم.** (من کلید را در خانه نمی‌گذارم) - Negative
- **آیا ته ما تنها پرېږدې؟** (آیا تو مرا تنها می‌گذاری؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون کور پرېښود.** (من دیروز خانه را ترک کردم) - Positive
- **هغه ډوډۍ ونه پرېښودله.** (او غذا را نماند/تمام کرد) - Negative
- **آیا تا وظیفه پرېښوده؟** (آیا تو وظیفه/کار را ترک کردی؟) - Question

### زمان آینده (Future)
- **زه به سبا خپل کتاب تاته پرېږدم.** (من فردا کتابم را به تو خواهم گذاشت) - Positive
- **زه به هیڅکله خپل ملګری ونه پرېږدم.** (من هیچوقت دوستم را رها نخواهم کرد) - Negative
- **آیا ته به بیا دغلته بوټونه پرېږدې؟** (آیا تو باز هم اینجا کفش‌ها را خواهی گذاشت؟) - Question
`,hasPractice:!0},hv={id:"verb-comp-to-start",title:"۳۹. لګېدل (شروع شدن / لګېدل)",titlePashto:"لګېدل / لګول",difficulty:"hard",estimatedTime:"۲۵ دقیقه",content:`
# فعل لګېدل (To Hit / To be busy / To start)

فعل **«لګېدل» (Lagedal)** در پښتو مثل یک «آچار فرانسه» است! مفاهیم بسیار زیادی را پوشش می‌دهد.

---

## ۱. زمان حال (Present Tense)
ریشه حال: **لګېږ- (Lageẓ̌-)**

| ضمیر | حالت مثبت | تلفظ | فارسی |
|:---|:---|:---|:---|
| **زه** | زه کار باندې **لګېږم** | Za kār bānde lageẓ̌am | من روی کار (سر کار) هستم / مشغولم |
| **ته** | ته په څه **لګېږې**؟ | Ta pə tsə lageẓ̌e? | تو مشغول چی هستی؟ |
| **هغه** | باران **لګېږي** | Bārān lageẓ̌i | باران شروع شده / می‌بارد |

---

## ۲. زمان گذشته (Past Tense)
نکته: «لګېدل» چون لازم است (خودش اتفاق می‌افتد)، با **فاعل** مطابقت دارد. اما «لګول» (متعدی) است.

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| زه **ولګېدم** | Za wa-lagedam | من (به چیزی) خوردم / شروع کردم |
| هغه **ولګېد** | Hagha wa-laged | او مشغول شد / شروع کرد |
| وخت **ولګېد** | Wakht wa-laged | وقت گذشت / صرف شد |

---

## ۳. جادوی لګېدل (کاربردهای مختلف)

1.  **مشغول بودن**: «زه په کار لګېدلی یم» (من سرگرم کار هستم).
2.  **شروع شدن**: «جګړه ولګېده» (جنگ شروع شد).
3.  **اصابت کردن**: «غشی په نښه ولګېد» (تیر به هدف خورد).
4.  **صرف شدن**: «ډېرې پیسې ولګېدې» (پول زیادی خرج شد).
5.  **سوختن/آتش گرفتن**: «اور ولګېد» (آتش گرفت).

---

## ۴. فعل متعدی: لګول (Lagawul) - به کار بردن / زدن
اگر بخواهید بگویید «من پول خرج کردم» یا «من وقت گذاشتم»:
- ما پیسې **ولګولې** (من پول خرج کردم).
- ما وخت **ولګاوه** (من وقت گذاشتم).

---


---

## ۶. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه په مطالعه لګېږم.** (من مشغول مطالعه می‌شوم) - Positive
- **زه په عبث کار نه لګېږم.** (من مشغول کار بیهوده نمی‌شوم) - Negative
- **آیا ته په کار لګېږې؟** (آیا تو سرگرم کار می‌شوی؟) - Question

### زمان گذشته (Past)
- **پرون باران ولګېد.** (دیروز باران شروع شد/بارید) - Positive
- **هغه په نښه ونه لګېد.** (او به هدف نخورد) - Negative
- **آیا تا ته ډېر وخت ولګېد؟** (آیا برای تو وقت زیادی صرف شد؟) - Question

### زمان آینده (Future)
- **سبا به جګړه ختمه (ولګېږي) شي.** (فردا جنگ تمام/شروع خواهد شد) - Positive
- **زه به په بدو خبرو نه لګېږم.** (من مشغول حرف‌های بد نخواهم شد) - Negative
- **آیا ته به سبا په لیکلو لګېږې؟** (آیا تو فردا مشغول نوشتن خواهی شد؟) - Question
`,hasPractice:!0},mv={id:"verb-comp-to-extract",title:"۴۰. بیرون کردن / کشیدن (ایستل)",titlePashto:"د ایستلو جامع فعل",difficulty:"hard",estimatedTime:"۲۰ دقیقه",content:`
# آموزش جامع فعل «کشیدن / بیرون کردن» (ایستل)

فعل «ایستل» (Istwal / Aystal) به معنای بیرون آوردن، کشیدن چیزی از جایی یا اخراج کردن است. این فعل متعدی (Transitive) است.

---

## ۱. زمان حال (می‌کشم / بیرون می‌کنم)
ریشه حال: **باس- (Bās-)**

| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **باسوم** | Bāsawam | بیرون می‌کنم |
| موږ | **باسوو** | Bāsawu | بیرون می‌کنیم |
| ته | **باسې** | Bāse | بیرون می‌کنی |
| تاسو | **باسئ** | Bāseəy | بیرون می‌کنید |
| هغه | **باسي** | Bāsi | بیرون می‌کند |
| هغوی | **باسي** | Bāsi | بیرون می‌کنند |

---

## ۲. زمان گذشته (کشیدم / بیرون کردم)
*در گذشته با مفعول مطابقت می‌کند (ارگتیو).*

| ضمیر (فاعل) | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| ما | **وایست** | Wa-āyst | بیرون کردم |
| موږ | **وایست** | Wa-āyst | بیرون کردیم |
| تا | **وایست** | Wa-āyst | بیرون کردی |
| تاسو | **وایست** | Wa-āyst | بیرون کردید |
| هغه | **وایستی** | Wa-āystay | بیرون کرد (کندهاری) |
| هغوی | **وایستله** | Wa-āystulu | بیرون کردند (کندهاری) |

---

## ۳. زمان آینده (بیرون خواهم کرد)
| ضمیر | پښتو | تلفظ | فارسی |
|:---|:---|:---|:---|
| زه | **به باسوم** | Ba bāsawam | بیرون خواهم کرد |
| موږ | **به باسوو** | Ba bāsawu | خواهیم کرد |
| ته | **به باسې** | Ba bāse | خواهی کرد |
| تاسو | **به باسئ** | Ba bāseəy | خواهید کرد |
| هغه | **به باسي** | Ba bāsi | خواهد کرد |
| هغوی | **به باسي** | Ba bāsi | خواهند کرد |

---

## ۴. حالت امری (بکش / بیرون کن)
- **وباسه!** (Wa-bāsa!) -> بیرون کن!
- **وباسئ!** (Wa-bāseəy!) -> بیرون کنید!
- **مه باسه!** (Ma bāsa!) -> بیرون نکن!

---

## ۵. تمرین جملات جامع (Drills)

### زمان حال (Present)
- **زه له بکس څخه کتاب باسوم.** (من از کیف کتاب را بیرون می‌کنم) - Positive
- **زه کثافات بهر نه باسوم.** (من آشغال‌ها را بیرون نمی‌برم/نمی‌کشم) - Negative
- **آیا ته میخ له دیواله باسې؟** (آیا تو میخ را از دیوار می‌کشی؟) - Question

### زمان گذشته (Past - Ergative)
- **ما پرون ډېرې پیسې وایستلې.** (من دیروز پول زیادی [از بانک] کشیدم) - Positive
- **هغه هیڅ شی و نه ایستل.** (او هیچ چیزی بیرون نکرد) - Negative
- **آیا تا هغه له کوټې وایستی؟** (آیا تو او را از اتاق بیرون کردی؟) - Question

### زمان آینده (Future)
- **زه به سبا ټول کالي له بکس څخه باسوم.** (من فردا تمام لباس‌ها را از کیف بیرون خواهم کرد) - Positive
- **زه به هیڅکله ته له کاره ونه باسوم.** (من هیچوقت تو را از کار اخراج نخواهم کرد) - Negative
- **آیا ته به بیا دغه غاښ باسې؟** (آیا تو باز هم این دندان را خواهی کشید؟) - Question
`,hasPractice:!0},yv={id:"comprehensive-verbs",title:"Comprehensive Verb Conjugation",titlePashto:"فعل‌های اساسی - تمام زمان‌ها",difficulty:"hard",estimatedTime:"۴۵ دقیقه",content:`
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
`,hasPractice:!1},gv={id:"family",title:"خانواده",titlePashto:"کورنۍ",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# واژگان خانواده در پښتو

## اعضای نزدیک خانواده

| پښتو | فارسی | تلفظ کندهاری | نقش |
|------|-------|--------------|-----|
| پلار | پدر | Plār | سرپرست |
| مور | مادر | Mor | محبت |
| لالا / لالی | برادر بزرگ | **Lālāt / Lalay** | احترام |
| ادې | مادر (صمیمانه) | **Ade** | صمیمانه |
| خورکۍ | خواهر (صمیمانه) | Khorkəy | صمیمانه |
| آکا | عمو / بزرگتر | **Akā** | حترامی |
| ماما | دایی | Māmā | مادر |

## پدربزرگ و مادربزرگ

| پښتو | فارسی | تلفظ |
|------|-------|------|
| نیکه | پدربزرگ | Nika |
| نیا / انا | مادربزرگ | Nyā / Anā |

## خاله، عمه و عمو (Detailed Relatives)

| پښتو | فارسی | تلفظ کندهاری | نسبت |
|------|-------|--------------|------|
| تره / آکا | عمو | Tra / Akā | برادرِ پدر |
| ترور | عمه | Tror | خواهرِ پدر |
| ماما | دایی | Māmā | برادرِ مادر |
| خاله | خاله | Khāla | خواهرِ مادر |

## برادرزاده و خواهرزاده (Nieces & Nephews)

| پښتو | فارسی | تلفظ کندهاری | توضیح |
|------|-------|--------------|-------|
| وراره | برادرزاده (پسر) | **Wrārazáy** | پسرِ برادر |
| ورارزه | برادرزاده (دختر) | **Wrārazəy** | دخترِ برادر |
| خورزی | خواهرزاده (پسر) | **Khwarzay** | پسرِ خواهر |
| خورزه | خواهرزاده (دختر) | **Khwarzəy** | دخترِ خواهر |

## نوه و نسل‌های بعد (Descendants)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| لمسی | نوه (پسر) | Lamasáy |
| لمسۍ | نوه (دختر) | Lamasəy |
| کړوسی | نتیجه | Kṛosáy |

## بچه‌های کاکا و ماما (Cousins)

| پښتو | فارسی | تلفظ کندهاری | نسبت |
|------|-------|--------------|------|
| اکازوی | پسرِ عمو | **Akāzáy** | پسرِ برادرِ پدر |
| اکاتور / اکالور | دخترِ عمو | **Akālúr** | دخترِ برادرِ پدر |
| ماماتور / مامازوی | پسرِ دایی | Māmāzáy | پسرِ برادرِ مادر |
| مامالور | دخترِ دایی | Māmālúr | دخترِ برادرِ مادر |

## همسر و فرزندان

| پښتو | فارسی | تلفظ |
|------|-------|------|
| ښځه / مېرمن | همسر (زن) | Ṣ̌ədza / Merman |
| خاوند | همسر (شوهر) | Khāwand |
| زوی | پسر | Zoy |
| لور | دختر | Lur |
| ماشوم | بچه | Māshom |

## خویشاوندان سببی (In-laws)

| پښتو | فارسی | تلفظ |
|------|-------|------|
| خسر | پدرزن / پدرشوهر | Khwasar |
| خواښې | مادرزن / مادرشوهر | Khwāṣ̌e |
| اوښی | برادرزن / برادرشوهر | Oṣ̌ay |
| اینګور | عروس | Ingor |
| زوم | داماد | Zum |

## جملات مفید و کاربردی

| پښتو | فارسی |
|------|-------|
| ستا د کور خلک ښه دي؟ | اهل خانه ات خوب هستند؟ |
| زما لایي کابل ته لاړ | برادر بزرگم به کابل رفت |
| ستاسو کورنۍ څومره غړي لري؟ | خانواده شما چند عضو دارد؟ |
| هغه زما د اکا زوی دی | او پسرعموی من است |

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
`,hasPractice:!1},bv={id:"numbers-11-100",title:"اعداد ۱۱ تا ۱۰۰",titlePashto:"له ۱۱ نه تر ۱۰۰ پورې شمېرې",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
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

| عدد | پښتو | تلفظ کندهاری |
|-----|------|--------------|
| ۱۰ | لس | Las |
| ۲۰ | شل | **Shəl** |
| ۳۰ | دېرش | Dersh |
| ۴۰ | څلوېښت | **Tsalwesht** |
| ۵۰ | پنځوس | **Pindzos** |
| ۶۰ | شپېته | Shpeta |
| ۷۰ | اویا | Awyā |
| ۸۰ | اتیا | Atyā |
| ۹۰ | نوي | Nawey |
| ۱۰۰ | سل | Səl |

---

## سیستم شمارش سنتی (Shal System)

در قندهار، به خصوص بین بزرگان، هنوز از سیستم شمارش بر پایه **۲۰ (شل)** استفاده می‌شود:

- **شل (۲۰)** = ۲۰
- **دوه شله (۴۰)** = ۴۰ (به جای څلوېښت)
- **درې شله (۶۰)** = ۶۰ (به جای شپېته)
- **څلور شله (۸۰)** = ۸۰ (به جای اتیا)
- **پنځه شله (۱۰۰)** = ۱۰۰ (به جای سل)

---

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
`,hasPractice:!1},vv={id:"food",title:"غذا و نوشیدنی",titlePashto:"خواړه او څښاک",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# غذا و نوشیدنی در پښتو کندهاری

## غذاهای اصلی و محلی (Kandahari Specials)

| پښتو | فارسی | تلفظ کندهاری | ویژگی |
|------|-------|--------------|-------|
| ډوډۍ | نان / غذا | Ḍoḍəy | پایه |
| پلو | برنج (پلو) | Palaw | مجلسی |
| لاندی | گوشت لاندی | **Lānday** | در زمستان |
| قورمه | خورشت | Qorma | متنوع |
| شوربا | آبگوشت | Shorbā | سنتی |
| کباب | کباب | Kabāb | تنوری |
| منتو / آشک | منتو / آشک | Mantú / Āshak | بخارپز |
| کندهاری شېر یخ | بستنی قندهاری | **Sheer-yakh** | مشهور |

## سبزیجات (Tarāri)

| پښتو | فارسی | تلفظ |
|------|-------|------|
| کچالو | سیب‌زمینی | Kachālu |
| تور بانجان | بادمجان | Tor bānjān |
| سور بانجان / رومی | گوجه فرنگی | Sur bānjān |
| مرچ | فلفل | Mirch |
| پیاز | پیاز | Pyāz |
| ګاجره | هویج | Gājra |
| بادرنګ | خیار | Bādrang |
| پالک | اسفناج | Pālak |

## میوه‌ها و خشکبار (Kandahari Fruits)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| مڼه | سیب | Maṇa |
| انګور | انگور | Angúr |
| انار | انار | **Anār (Kandahāri)** |
| بادام | بادام | Bādām |
| شفتالو | هلو | Shaftālu |
| تربوز / هنډوانه | هندوانه | Tarbuz |
| خربوزه | خربزه | Kharbuza |
| کیله | موز | Kela |

## نوشیدنی‌ها (Tsṣ̌ak)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| چای | چای | Chāy |
| شین چای | چای سبز | Shin chāy |
| اوبه | آب | Oba |
| دوغ | دوغ | Shlombe / Dogh |
| شیدې | شیر | **Shidé** |
| شربت | شربت | Sharbat |

## لبنیات و روغن

| پښتو | فارسی | تلفظ |
|------|-------|------|
| مستې | ماست | Maste |
| کوړت | کشک | Koṛt |
| سپین غوړي | روغن حیوانی | Spin ghwaṛi |
| پنیر | پنیر | Panir |
| مسکه | کره | Máṣ̌ka |

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
`,hasPractice:!1},xv={id:"body-parts",title:"اعضای بدن",titlePashto:"د بدن غړي",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# اعضای بدن در پښتو کندهاری

## سر و صورت (Srə aw Makh)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| سر | سر | Sar |
| مخ | صورت | Makh |
| سترګه | چشم | Starga |
| پوزه | بینی | Puza |
| غوږ | گوش | Ghwaẓ̌ |
| خوله | دهان | Khula |
| وریځې | ابرو | Wredze |
| باڼه | مژه | Bāṇa |
| اننګي | گونه | Anangay |
| زنه | چانه | Zana |
| غاښ | دندان | Ghāṣ̌ |
| ژبه | زبان | Zhəba |

## تنه و اندام‌ها

| پښتو | فارسی | تلفظ |
|------|-------|------|
| غاړه | گردن | Ghāṛa |
| اوږه | شانه | Uẓ̌a |
| څنګل | آرنج | Tsangəl |
| لاس | دست | Lās |
| ګوته | انگشت | Guta |
| نوک | ناخن | Nok |
| سینه | سینه | Sina |
| ملا | کمر | Mlā |
| خېټه | شکم | Kheṭa |

## پا (Pṣ̌a)

| پښتو | فارسی | تلفظ |
|------|-------|------|
| پښه | پا | Pṣ̌a |
| ورون | ران | Wrun |
| زنګون | زانو | Zangún |
| پونده | پاشنه | Punda |

## اعضای داخلی (Interal)

| پښتو | فارسی | تلفظ |
|------|-------|------|
| زړه | قلب | Zṛa |
| اینه | جگر | Ina |
| سږي | ریه / شش | Sẓ̌i |
| بډوډي | کلیه / گرده | Baḍoḍi |
| معده | معده | Mi'da |
| وینه | خون | Wina |
| هډوکی | استخوان | Haḍukay |

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
`,hasPractice:!1},wv={id:"colors",title:"رنگ‌ها",titlePashto:"رنګونه",difficulty:"easy",estimatedTime:"۱۰ دقیقه",content:`
# رنگ‌ها در پښتو

رنگ‌ها در پښتو با جنسیت اسم موصوف تغییر می‌کنند.

## رنگ‌های اصلی (Rangūna)

| مذکر | مونث | فارسی | تلفظ کندهاری |
|------|------|-------|--------------|
| سپین | سپینه | سفید | Spin / Spina |
| تور | توره | سیاه | Tor / Tora |
| سور | سره | سرخ | Sur / Sra |
| شین | شنه | سبز / آبی | **Shin / Shna** |
| ژېړ | ژېړه | زرد | Ẓ̌eṛ / Ẓ̌eṛa |

## رنگ‌های تکمیلی

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| آسماني | آبی روشن | Āsmāni |
| نارنجي | نارنجی | Nārenjí |
| نسواري | قهوه‌ای | Naswāri |
| شاتوت | جگری/بنفش | Shātut |
| ګلابي | صورتی | Gulābi |
| خړ | خاکستری | Khwaṛ |

## غلظت و روشنی رنگ (Nuances)

| کلمه | معنی | مثال |
|------|-------|------|
| **شېخ** | روشن / جیغ | شېخ سور (قرمز روشن) |
| **تت / پيکه** | کمرنگ / مات | تت شین (سبز مات) |
| **تېز / تات** | پررنگ / تیره | تېز ژېړ (زرد تند) |
| **تک** | کاملاً (تاکیدی) | تک تور (کاملاً سیاه) |

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
`,hasPractice:!1},kv={id:"days-months",title:"روزها و ماه‌ها",titlePashto:"ورځې او میاشتې",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
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

## کلمات زمان و فواصل (Wakt)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| نن | امروز | Nan |
| پرون | دیروز | Parún |
| وړمه ورځ | پریروز | **Wṛama wraz** |
| سبا | فردا | Sabā |
| بل سبا | پس‌فردا | Bəl sabā |
| همدا اوس | همین الان | **Hamdā os** |
| یو وخت | یک وقت / زمانی | Yaw wakt |

## اوقات شبانه‌روز

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| سهار وختي | صبح زود | Sabā-vakti |
| سهار | صبح | Sahār |
| نیمه غرمه | نیم روز / ظهر | **Nima gharma** |
| ماسپښین | بعد از ظهر | **Māṣ̌pṣ̌in** |
| مازدیګر | عصر | Māzdigár |
| ماښام | شام / غروب | Māṣ̌ām |
| ماسخوتن | شب (دیر وقت) | **Māṣ̌khotan** |
| نیمه شپه | نیمه شب | Nima shpa |

## فصل‌ها (Fasluna)

| پښتو | فارسی | تلفظ |
|------|-------|------|
| پسرلی | بهار | Pasarlay |
| دوبی | تابستان | Dobay |
| منی | پاییز | Manay |
| ژمی | زمستان | Ẓ̌amay |

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
`,hasPractice:!1},jv={id:"household-objects",title:"اشیاء خانه و آشپزخانه",titlePashto:"د کور شیان",difficulty:"easy",estimatedTime:"۲۰ دقیقه",content:`
# اشیاء خانه در پښتو کندهاری

برای زندگی روزمره، شناخت نام وسایل خانه ضروری است. در اینجا لیست پرکاربردترین وسایل را با تلفظ کندهاری یاد می‌گیریم.

---

## ۱. اتاق نشیمن (Living Room)

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **څوکۍ** | Tsokəy | صندلی |
| **مېز** | Mez (Məz) | میز |
| **توشک** | Toshak | تشک / زیرانداز |
| **بالښت** | Bālaṣ̌t | بالش |
| **طلایه** | Talāya | پرده / پوشش |
| **قالی** | Qāli | قالی / فرش |

---

## ۲. آشپزخانه (Kitchen / Ash-paz-khāna)

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **پیاله** | Pyāla | استکان / فنجان |
| **غوری** | Ghore | قوری |
| **کاچوغه** | Kāchugha | قاشق |
| **پنجه** | Panja | چنگال |
| **چاقو** | Chāqu | چاقو |
| **دغالی** | De-ghāli | دیگ / قابلمه |
| **بخار** | Bukhār | زودپز |

---

## ۳. وسایل برقی و عمومی

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **ګروپ** | Group | لامپ |
| **یخچال** | Yakh-chāl | یخچال |
| **مبایل** | Mobāyl | موبایل |
| **تلویزیون** | Tele-wizyon | تلویزیون |
| **اریکین** | Arikēn | چراغ دستی / فانوس |

---

## ۴. کلمات کاربردی کندهاری
- **درباز** (Dar-bāz): در اتاق (در قندهار معمولا درباز می‌گویند).
- **کړکۍ** (Karkəy): پنجره.
- **تار** (Tār): نخ / سیم.
- **سطل** (Saṭal): سطل.

---

## ۵. مثال در جمله (با اعراب)

1. **پِیاله راوړه.** (Pyāla rā-wṛa) -> استکان را بیاور.
2. **په څوکۍ کښېنه.** (Pa tsokəy kxenəya) -> روی صندلی بنشین.
3. **دَروازه خلاصه کړه.** (Dar-wāza khlāsa kṛa) -> در را باز کن.
`,hasPractice:!0},Nv={id:"clothing-appearance",title:"لباس و ظاهر شخصی",titlePashto:"کالي او ظاهري بڼه",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# لباس و ظاهر در پښتو کندهاری

در این درس با کلمات مربوط به پوشاک سنتی و مدرن و مفاهیم اولیه ظاهر آشنا می‌شویم.

---

## ۱. لباس‌های سنتی (Traditional Clothes)

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **کتان** | Katān | پیراهن (مردانه) |
| **کمیس** | Kamīs | پیراهن |
| **پرتاګ** | Parthog | شلوار |
| **پګړۍ** | Pagṛəy | لنگی / دستار |
| **خولۍ** | Kholəy | کلاه |
| **واسګټ** | Wāsgat | جلیقه |
| **څادر** | Tsādar | چادر / شال بزرگ |

---

## ۲. کفش و متعلقات

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **څپلی** | Tsaplay | صندل / دمپایی |
| **بوټان** | Boṭān | کفش‌ها |
| **جرابې** | Jarābe | جوراب‌ها |
| **ساعت** | Sāat | ساعت مچی |
| **عینکې** | Aynake | عینک |

---

## ۳. مفاهیم ظاهر (Appearance)

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **ښکلی** | Ṣ̌kulay | زیبا |
| **بدرنګه** | Badránga | زشت |
| **قد** | Qad | قد |
| **ږیره** | Ẓ̌ira | ریش |
| **بریتونه** | Brētuna | سبیل |

---

## ۴. افعال مرتبط (پوشیدن)
در قندهار برای پوشیدن لباس از فعل **«اچول»** (که قبلا خواندیم) یا **«اغوستل»** استفاده می‌شود.

- **کالي واغونده.** (Kāli wāghunda) -> لباس بپوش.
- **عینکې مه‌اچوه.** (Aynake ma-achawa) -> عینک نزن.

---

## ۵. مثال در جمله

1. **دا کتان مې خوښ دی.** (Dā katān me ṣ̌a day) -> این پیراهن را دوست دارم.
2. **تا ښکلي بوټان اخیستي.** (Tā ṣ̌kulay boṭān ...) -> تو کفش‌های زیبایی خریده‌ای.
`,hasPractice:!0},Sv={id:"city-locations",title:"شهر و مکان‌های عمومی",titlePashto:"ښار او ځایونه",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# شهر و مکان‌ها در پښتو کندهاری

در این درس با نام مکان‌های عمومی و اصطلاحات مربوط به تردد در شهر آشنا می‌شویم.

---

## ۱. مکان‌های پرکاربرد (Public Places)

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **ښار** | Ṣ̌ār / Sār | شهر |
| **بازار** | Bāzār | بازار |
| **روغتون** | Roghtun | بیمارستان |
| **مسجد** | Masjid | مسجد |
| **ښوونځی** | Ṣ̌owan-dzay | مدرسه |
| **پوهنتون** | Pohantun | دانشگاه |
| **هوټل** | Hoṭal | رستوران / هتل |

---

## ۲. در مسیر (Transportation)

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **سړک** | Saṛak | خیابان / جاده |
| **ادره** | Ada | ایستگاه (تاکسی/بس) |
| **پل** | Pul | پل |
| **مازدیګر** | Māz-digar | عصر (زمانِ شلوغی) |

---

## ۳. جهت‌ها و آدرس‌دهی

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **مستقیم** | Mustaqīm (سم نیغ) | مستقیم |
| **چپ** | Kīn | چپ |
| **رایست** | Rāyist | راست |
| **نژدې** | Niẓ̌de | نزدیک |
| **لیرې** | Līre | دور |

---

## ۴. مثال در جمله

1. **روغتون چېرته دی؟** (Roghtun cherta day?) -> بیمارستان کجاست؟
2. **بازار ته ځم.** (Bāzār ta zam) -> به بازار می‌روم.
3. **سم نیغ ولاړ شه.** (Sam nigh walār-ṣ̌a) -> مستقیم برو.
`,hasPractice:!0},zv={id:"emotions-feelings",title:"احساسات و عواطف",titlePashto:"احساسات او عواطف",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# احساسات و عواطف در پښتو کندهاری

در این درس یاد می‌گیریم که چطور حالات درونی و احساسی خود را بیان کنیم.

---

## ۱. احساسات مثبت (Positive Feelings)

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **خوشحاله** | Khush-hāla | خوشحال |
| **ارام** | Ārām | آرام |
| **مینه** | Mīna | عشق / محبت |
| **خندېدل** | Khandedal | خندیدن |

---

## ۲. احساسات منفی (Negative Feelings)

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **خفه** | Khafa | ناراحت / غمگین |
| **قهر** | Qahr | عصبانی |
| **وېره** | Wēra | ترس |
| **ستړی** | Staṛay | خسته |
| **ناجوړه** | Nā-joṛa | مریض / ناخوش |

---

## ۳. بیان حال خود

- **زه خوشحاله یم.** (Za khush-hāla yam) -> من خوشحال هستم.
- **هغه خفه دی.** (Hagha khafa day) -> او ناراحت است.
- **مه قهرېږه.** (Ma qahreẓ̌a) -> عصبانی نشو.

---

## ۴. کلمات کاربردی در مکالمه
- **ډېر** (Der): خیلی. (مثال: ډېر خوشحاله یم).
- **لږ** (Liẓ̌): کمی. (مثال: لږ ستړی یم).
- **ولې؟** (Wale?): چرا؟

---

## ۵. مثال در جمله

1. **ولې خفه یې؟** (Wale khafa ye?) -> چرا ناراحتی؟
2. **زه خپل لالیه سره ډېره مینه لرم.** (Za khpal laliye sara...) -> من برادر (دوست) خود را خیلی دوست دارم.
`,hasPractice:!0},Tv={id:"weather-nature",title:"آب و هوا و طبیعت",titlePashto:"هوا او طبیعت",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# آب و هوا و طبیعت در پښتو کندهاری

در این درس با کلمات مربوط به اقلیم و پدیده‌های طبیعی آشنا می‌شویم.

---

## ۱. وضعیت هوایی (Weather Context)

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **هوا** | Hawā | هوا |
| **ګرمي** | Garmi | گرما |
| **یخي** | Yakhi | سرما |
| **باران** | Bārān | باران |
| **باد** | Bād | باد |
| **لمر** | Lmar | خورشید / آفتاب |

---

## ۲. چهار فصل (The 4 Seasons)

| پښتو | تلفظ | فارسی |
|:---|:---|:---|
| **پسرلی** | Pasarlay | بهار |
| **دوبی** | Dobay | تابستان |
| **منې** | Mane | پاییز |
| **ژمی** | Ẓ̌amay | زمستان |

---

## ۳. توصیف هوا

- **هوا ګرمه ده.** (Hawā garma da) -> هوا گرم است.
- **نن باد لګېږي.** (Nan bād lageẓ̌i) -> امروز باد می‌وزد.
- **لمر ډېر تود دی.** (Lmar der tod day) -> آفتاب خیلی داغ (گرم) است.

---

## ۴. طبیعت (Nature)
- **مځکه** (Mdzaka): زمین.
- **غر** (Ghar): کوه.
- **دره** (Dara): دره.
- **ونه** (Wana): درخت.

---

## ۵. مثال در جمله

1. **باران شروع شو.** (Bārān shuru sho) -> باران شروع شد.
2. **په ژمي کې ډېره یخي وي.** (Pa ẓ̌ame ke dera yakhi wi) -> در زمستان سرمای زیادی هست.
`,hasPractice:!0},Ev={id:"gender",title:"جنسیت اسم‌ها",titlePashto:"د نومونو جنس",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
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

| پښتو | فارسی | تلفظ کندهاری | پایان |
|------|-------|--------------|-------|
| سړی | مرد | Saṛay | ی |
| کور | خانه | Kor | صامت |
| ورور | برادر | Wror | صامت |
| پلار | پدر | Plār | صامت |
| ځوان | جوان | Zwan | صامت |
| ملګری | دوست | Malgaray | ی |

## مثال‌های مؤنث

| پښتو | فارسی | تلفظ کندهاری | پایان |
|------|-------|--------------|-------|
| ښځه | زن | **Ṣ̌ədza** | ه |
| لور | دختر | Lur | صامت (استثنا) |
| مور | مادر | Mor | صامت (استثنا) |
| خور | خواهر | Khor | صامت (استثنا) |
| کورنۍ | خانواده | Koranəy | ۍ |
| ډوډۍ | نان | Ḍoḍəy | ۍ |

## تأثیر جنسیت بر صفت

صفت‌ها با جنسیت اسم تغییر می‌کنند:

| مذکر | مؤنث | تلفظ (م/م) | معنی |
|------|------|------------|------|
| ښه | ښه | **Ṣ̌a / Ṣ̌a** | خوب |
| ستړی | ستړې | Staṛay / Staṛe | خسته |
| زوړ | زړه | Zoṛ / Zaṛa | کهنه |
| نوی | نوې | Naway / Nawe | نو |
| لوی | لویه | Loy / Loya | بزرگ |

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
`,hasPractice:!1},Mv={id:"plural",title:"جمع بستن",titlePashto:"ګڼ جوړول",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
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
`,hasPractice:!1},Av={id:"adjectives",title:"صفت‌ها",titlePashto:"صفتونه",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# صفت‌ها در پښتو

در پښتو، صفت‌ها با جنسیت و عدد اسم موصوف مطابقت می‌کنند.

## صفت‌های رایج

| مذکر | مونث | فارسی | تلفظ کندهاری |
|------|------|-------|--------------|
| ښه | ښه | خوب | **Ṣ̌a / Ṣ̌a** |
| بد | بده | بد | Bad / Bada |
| لوی | لویه | بزرگ | Loy / Loya |
| کوچنی | کوچنۍ | کوچک | Kuchnay / Kuchnəy |
| نوی | نوې | نو | Naway / Nawe |
| زوړ | زړه | کهنه | Zoṛ / Zaṛa |
| ګرم | ګرمه | گرم | Garm / Garma |
| سوړ | سړه | سرد | Sor / Sra |
| اوږد | اوږده | بلند | **Uẓ̌d / Uẓ̌da** |
| لنډ | لنډه | کوتاه | Lanḍ / Lanḍa |
| روغ | روغه | سالم | Rogh / Rogha |

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
`,hasPractice:!1},Pv={id:"prepositions",title:"حروف اضافه",titlePashto:"اړیکي توري",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# حروف اضافه در پښتو

حروف اضافه در پښتو برای نشان دادن رابطه مکانی، زمانی و دیگر روابط استفاده می‌شوند.

## حروف اضافه مکانی

| پښتو | فارسی | مثال کندهاری |
|------|-------|------|
| په ... کې | در | په کور کې (Pə kor ke) |
| له ... نه | از | له کوره نه (Lə kora na) |
| ته | به | کور ته (Kor ta) |
| پر / باندی | روی | پر مېز / مېز باندی |
| لاندې | زیر | د مېز لاندې (Da mez lānde) |
| مخکې | جلو | د کور مخکې |
| شاته | پشت | د کور شاته |
| سره | با | **ما سره** (Mā sara) |
| پسې | به دنبال / پشتِ | **ستا پسې** (Stā pase) |
| بې | بدون | بې تا (Be tā) |

> **نکته کندهاری:** در قندهار، در ترکیب «سره»، معمولاً کلمه **«له»** حذف می‌شود. مثلاً به جای «له ما سره» می‌گویند: **«ما سره»**.

## حروف اضافه زمانی

| پښتو | فارسی | مثال |
|------|-------|------|
| مخکې | قبل | له ډوډۍ مخکې (قبل از غذا) |
| وروسته | بعد | له ډوډۍ وروسته (بعد از غذا) |
| تر ... پورې | تا | تر سبا پورې (تا فردا) |
| له ... راهیسې | از | له سهاره راهیسې (از صبح) |
| له ... څخه | از | له کوره څخه (Lə kora tsakha) |

> **نکته مهم:** کلمه **«څخه»** (Tsakha) دقیقاً هم‌معنی **«نه»** (Na) است. 
> - **له کوره نه** = **له کوره څخه** (هر دو یعنی: از خانه).
> در نوشتار رسمی، «څخه» بیشتر استفاده می‌شود.

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
| له کوره څخه | از خانه (رسمی‌تر) |
| له تا څخه | از تو |

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

## مثال‌ها با «پسې»

| پښتو | فارسی |
|------|-------|
| زه ستا پسې ګرځم | من به دنبال تو می‌گردم |
| هغه ما پسې راځي | او به دنبال من (پشت من) می‌آید |
| احمد خپل کتاب پسې ګوري | احمد به دنبال کتاب خود می‌گردد |
| موږ هغه پسې منډې وهو | ما به دنبال او می‌دویم |

> **نکته:** کلمه **پسې** همیشه بعد از اسم یا ضمیر می‌آید و به معنای تعقیب کردن یا جستجو کردن است.

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
`,hasPractice:!1},Cv={id:"questions",title:"جملات سوالی",titlePashto:"پوښتنې",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
# جملات سوالی در پښتو

در پښتو، سوالات با کلمات پرسشی یا با تغییر لحن ساخته می‌شوند.

## کلمات پرسشی

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| څه | چه | tsa |
| چا | کی (مفعول) | chā |
| څوک | کی (فاعل) | tsok |
| چېرته | کجا | **cherta / tserta** |
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
`,hasPractice:!1},Rv={id:"negation",title:"جملات منفی",titlePashto:"منفي جملې",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
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
| لاړم | نه لاړم | رفتم / نرفتم | Na lāṛam |
| راغلم | نه راغلم | آمدم / نیامدم | Na rāghlam |
| وخوړم | ونه خوړم | خوردم / نخوردم | **Wa-na-khwaṛam** |
| ولیدم | ونه لیدم | دیدم / ندیدم | **Wa-na-lidam** |

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
`,hasPractice:!1},Bv={id:"directional-prefixes",title:"۱. جادوی پیشوندهای جهتی (Rā/Dar/War)",titlePashto:"جهتي مختاړي (را، در، ور)",difficulty:"hard",estimatedTime:"۲۵ دقیقه",content:`
# جادوی پیشوندهای جهتی (The Directional Triad)

این یکی از جذاب‌ترین و عجیب‌ترین بخش‌های زبان پښتو است. در پښتو، ما می‌توانیم با اضافه کردن یک هجا به ابتدای فعل، «جهت» آن را مشخص کنیم بدون اینکه نیاز باشد بگوییم «به من» یا «به تو».

---

## ۱. سه پیشوند اصلی

| پیشوند | معنای نهفته | جهت |
|:---:|:---|:---|
| **را (Rā)** | **به سمت من / ما** | اول شخص |
| **در (Dar)** | **به سمت تو / شما** | دوم شخص |
| **ور (War)** | **به سمت او / آن‌ها** | سوم شخص |

---

## ۲. مثال اول: فعل «کړل» (دادن/کردن)

این پرکاربردترین مثال است که احتمالاً شنیده‌اید:

- **رَاکړه** (Rā-kṛa) -> به **مَن** بده.
- **دَرکړه** (Dar-kṛa) -> به **تُو** بدهد (مثلاً او به تو بدهد).
- **وَرکړه** (War-kṛa) -> به **اُو** بده.

---

## ۳. مثال دوم: فعل «وړل» (آوردن/بردن)

ببینید چطور یک کلمه، سه معنای کاملاً متفاوت می‌گیرد:

| پښتو | تلفظ | فارسی دقیق |
|:---|:---|:---|
| **رَاوړه** | Rā-wṛa | بیاور **اینجا** (سمت من) |
| **دَروړه** | Dar-wṛa | ببر **آنجا** (سمت تو) |
| **وَرُوړه** | War-wṛa | ببر **بغل دستش** (سمت او) |

---

## ۴. مثال سوم: فعل «کتل» (دیدن/نگاه کردن)

- **رَاته ګوره** (Rā-ta gura) -> به **من** نگاه کن.
- **دَارته ګوری** (Dār-ta guri) -> به **تو** نگاه می‌کند.
- **وَرته ګوره** (War-ta gura) -> به **او** نگاه کن.

---

## ۵. چرا این سیستم واقعیت دارد؟

این سیستم باعث می‌شود زبان پښتو بسیار «اقتصادی» باشد. یعنی شما با کمترین کلمه، بیشترین مفهوم را می‌رسانید. 

در قندهار، اگر بگویید «کتاب رَاکړه»، یعنی کتاب را به من بده. اگر بگویید «کتاب وَرکړه»، یعنی کتاب را به آن شخص بده. حتی نیاز نیست به آن شخص اشاره کنید!

> **نکته طلایی:** 
> - **را (Rā)** همیشه یعنی **اینجا / سمت من**.
> - **در (Dar)** همیشه یعنی **آنجا / سمت تو**.
> - **ور (War)** همیشه یعنی **اونجا / سمت او**.

---

## ۶. تمرین ذهنی
اگر فعل «لیږل» (Leẓ̌al) به معنای فرستادن باشد، کلمات زیر چه معنایی دارند؟
1. **رَالیږل**: ؟ (فرستادن به سمت من)
2. **دَرلیږل**: ؟ (فرستادن به سمت تو)
3. **وَرلیږل**: ؟ (فرستادن به سمت او)
`,hasPractice:!0},Dv={id:"compound-prepositions",title:"ترکیب‌های جادویی (درڅخه/ورڅخه)",titlePashto:"ترکیبي سربلونه",difficulty:"hard",estimatedTime:"۳۰ دقیقه",content:`
# جادوی ترکیب‌ها در قندهار

در درس‌های قبل با پیشوندهای جهتی (**را، در، ور**) آشنا شدید. حالا می‌خواهیم یاد بگیریم چطور مثل یک قندهاری اصیل، آن‌ها را با حروف اضافه ترکیب کنیم.

## فرمول جادویی
به جای اینکه بگوییم **«له تا څخه»** (از تو)، قندهاری‌ها این دو را ترکیب می‌کنند:
> **در** (تو) + **څخه** (از) = **درڅخه** (از تو)

این ساختار بسیار رایج است و کلام شما را کوتاه و شیوا می‌کند.

---

## ۱. ترکیب با «څخه» (از)

| ترکیب | اجزاء | معنا | مثال |
|:---:|:---:|:---:|:---|
| **راڅخه** (Rā-tsakha) | را + څخه | **از من / از ما** | کتاب **راڅخه** واخله (کتاب را **از من** بگیر) |
| **درڅخه** (Dar-tsakha) | در + څخه | **از تو / از شما** | یوه پوښتنه **درڅخه** لرم (یک سوال **از تو** دارم) |
| **ورڅخه** (War-tsakha) | ور + څخه | **از او / از آن‌ها** | پیسې **ورڅخه** وغواړه (پول را **از او** بخواه) |

---

## ۲. ترکیب با «سره» (با)

| ترکیب | اجزاء | معنا | مثال |
|:---:|:---:|:---:|:---|
| **راسره** (Rā-sara) | را + سره | **با من / با ما** | **راسره** راځې؟ ( **با من** می‌آیی؟) |
| **درسره** (Dar-sara) | در + سره | **با تو / با شما** | خدای **درسره** مل شه (خدا **با تو** همراه شود) |
| **ورسره** (War-sara) | ور + سره | **با او / با آن‌ها** | زه **ورسره** نه ځم (من **با او** نمی‌روم) |

---

## ۳. ترکیب با «ته» (به)

| ترکیب | اجزاء | معنا | مثال |
|:---:|:---:|:---:|:---|
| **راته** (Rā-ta) | را + ته | **به من / به ما** | حقیقت **راته** ووایه (حقیقت را **به من** بگو) |
| **درته** (Dar-ta) | در + ته | **به تو / به شما** | زه **درته** وایم (من **به تو** می‌گویم) |
| **ورته** (War-ta) | ور + ته | **به او / به آن‌ها** | سلام **ورته** ووایه (سلام **به او** برسان) |

---

## ۴. ترکیب‌های دیگر (کره / پسې / باندې)

علاوه بر موارد بالا، این پیشوندها با کلمات دیگر هم ترکیب می‌شوند:

- **راکره** (Rā-kara): پیش من (در خانه من)
- **درکره** (Dar-kara): پیش تو (در خانه تو)
- **ورکره** (War-kara): پیش او (در خانه او)

- **راپسې** (Rā-pase): دنبال من
- **درپسې** (Dar-pase): دنبال تو
- **ورپسې** (War-pase): دنبال او

- **راباندې** (Rā-bānde): روی من / بالای من (معمولاً برای فشار یا قرض)
- **درباندې** (Dar-bānde): روی تو
- **ورباندې** (War-bānde): روی او

---

## تمرین کنید (ترجمه کنید)

1. **زه درڅخه خوشحاله یم.** (من از تو خوشحال هستم)
2. **احمد ورسره مرسته وکړه.** (احمد با او کمک کرد)
3. **راپسې مه راځه.** (دنبال من نیا)
4. **دا کتاب درته ډالۍ دی.** (این کتاب هدیه‌ای برای توست)

> **نکته طلایی:** اگر می‌خواهید قندهاری صحبت کنید، هرگز نگویید «له تا سره»... همیشه بگویید **«درسره»**!
`,hasPractice:!0},Ov={id:"oblique-case",title:"۲. تغییر شکل کلمات (حالت مغیره)",titlePashto:"حالت مغیره (تغیرېدونکي نومونه)",difficulty:"hard",estimatedTime:"۳۰ دقیقه",content:`
# حالت مغیره (Oblique Case)

در پښتو، کلمات «ثابت» نیستند! وقتی یک حرف اضافه (مثل: ته، سره، په، کې) بیاید، اسم قبل از آن **تغییر شکل** می‌دهد. به این حالت، **حالت مغیره** می‌گوییم.

---

## ۱. چرا کلمات تغییر می‌کنند؟

در فارسی ما می‌گوییم: «به مرد گفتم». کلمه «مرد» تغییری نمی‌کند.
اما در پښتو باید بگوییم: **«سړي ته مې وویل»**. کلمه **سړی** (مرد) تبدیل شد به **سړي**. 

---

## ۲. قوانین تغییر اسامی مذکر

اگر کلمه مذکر باشد و به **«ی»** ختم شود، به **«ي»** (یای مجهول) تبدیل می‌شود:

| کلمه اصلی (مستقیم) | حالت مغیره (با حرف اضافه) | مثال |
|:---|:---|:---|
| **سړی** (Saṛay) | **سړي** (Saṛi) | سړي ته (به مرد) |
| **زمری** (Zmaray) | **زمري** (Zmari) | زمري سره (با شیر) |
| **ملګری** (Malgaray) | **ملګري** (Malgari) | ملګري لپاره (برای دوست) |

---

## ۳. قوانین تغییر اسامی مونث

اسامی مونثی که به **«ه»** ختم می‌شوند، معمولاً به **«ې»** یا **«و»** (در جمع) تبدیل می‌شوند:

| کلمه اصلی | حالت مغیره | مثال |
|:---|:---|:---|
| **ښځه** (Ṣ̌adza) | **ښځې** (Ṣ̌adze) | ښځې ته (به زن) |
| **اوبه** (Oba) | **اوبو** (Obo) | اوبو کې (در آب) |
| **خور** (Khor) | **خور** (بدون تغییر) | خور ته (به خواهر) |

---

## ۴. اعدادی که تغییر می‌کنند

حتی اعداد هم در حالت مغیره تغییر می‌کنند! 
مثلاً عدد ۲ (**دوه**) وقتی با حرف اضافه بیاید می‌شود **دواړو**:
- **دواړو ته** (به هر دو).

---

## ۵. ضمیرهایی که مغیره می‌شوند

این بخش بسیار مهم است. ضمیر «زه» در حالت مغیره می‌شود «ما»:
- **زه** (من - فاعل) -> **ما سره** (با من).
- **ته** (تو - فاعل) -> **تا سره** (با تو).

---

## ۶. خلاصه قانون

هر وقت یکی از این‌ها را دیدید، اسم قبلش را تغییر دهید:
1. **ته** (به)
2. **سره** (با)
3. **لپاره** (برای)
4. **کې** (در)
5. **څخه / له** (از)

> **مثال نهایی:** 
> «در خانه» -> **کور کې** ✅ (کلمه کور چون به صامت ختم شده تغییر ظاهری کمی دارد).
> «به سگ» -> **سپي ته** ✅ (سپی شد سپي).
`,hasPractice:!0},Lv={id:"vocative-case",title:"۳. چطور کسی را صدا بزنیم؟ (حالت ندایی)",titlePashto:"غږیز حالت (ندایه)",difficulty:"easy",estimatedTime:"۱۵ دقیقه",content:`
# حالت ندایی (How to Call People)

در لهجه کندهاری، صدا زدن یک فرد فقط گفتن نام او نیست. ما معمولاً یک «پسوند» به انتهای نام اضافه می‌کنیم تا طرف مقابل متوجه شود که او را صدا می‌زنیم.

---

## ۱. صدا زدن آقایان (پسوند -َ ه / -a)

وقتی یک مرد را صدا می‌زنید، به انتهای نامش یک **«ه» (زوار)** اضافه کنید:

| نام | نحوه صدا زدن | تلفظ |
|:---|:---|:---|
| **احمد** | **احمده!** | Ahmed-a |
| **محمود** | **محموده!** | Mahmud-a |
| **لالی** (برادر) | **لالیه!** | Lali-ye |
| **ورور** (برادر) | **وروره!** | Wror-a |

---

## ۲. صدا زدن خانم‌ها (پسوند - ې / -e)

وقتی یک خانم را صدا می‌زنید، انتهای نام معمولاً به **«ې»** ختم می‌شود:

| نام | نحوه صدا زدن | تلفظ |
|:---|:---|:---|
| **ملالۍ** | **ملالۍ!** | Malaləy (بدون تغییر زیاد) |
| **خور** (خواهر) | **خورې!** | Khor-e |
| **مور** (مادر) | **مورې!** | Mor-e |

---

## ۳. صدا زدن جمع (پسوند - و / -o)

وقتی گروهی از مردم را صدا می‌زنید، از پسوند **«و»** استفاده کنید:

| کلمه | نحوه صدا زدن | تلفظ |
|:---|:---|:---|
| **ملګري** (دوستان) | **ملګرو!** | Malgaro! |
| **ورونه** (برادران) | **ورونو!** | Wruno! |
| **پښتانه** | **پښتنو!** | Pashtano! |

---

## ۴. کلمات صمیمانه و کاربردی در قندهار

صدا زدن غریبه‌ها یا دوستان در قندهار آداب خاصی دارد:

- **لالیه!** (Lali-ye) -> برادر جان! (بسیار رایج)
- **کاکا!** (Kākā) -> عمو! (برای احترام به مسن‌ترها)
- **ترورې!** (Tror-e) -> عمه/خاله جان!
- **ماشومانو!** (Māshumāno) -> ای بچه‌ها!

---

## ۵. چرا این بخش مهم است؟

اگر در قندهار کسی را بدون این پسوندها صدا بزنید، جمله شما کمی «سخت» و «خشک» به نظر می‌رسد. اضافه کردن این صداهای کوتاه (-َ ه) به کلمات، به گفتار شما روح کندهاری و صمیمیت می‌بخشد.

> **مثال:**
> به جای: احمد، راشه. (احمد، بیا) ❌
> بگو: **احمده، راشه!** (Ahmed-a, rā-ṣ̌a) ✅
`,hasPractice:!0},Uv={id:"requests",title:"درخواست کردن",titlePashto:"غوښتنه کول",difficulty:"medium",estimatedTime:"۲۰ دقیقه",content:`
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
`,hasPractice:!1},_v={id:"conv-shopping",title:"در بازار",titlePashto:"په بازار کې",difficulty:"medium",estimatedTime:"۳۰ دقیقه",content:`
# مکالمه در بازار (Bazaar Conversation)

خرید در بازارهای قندهار نیاز به دانستن اصطلاحات خاص و فنون چانه زدن دارد.

## واژگان جدید و کندهاری

| پښتو | فارسی | تلفظ | کاربرد |
|------|-------|------|--------|
| روپۍ | پول | Rope | رایج‌ترین کلمه در قندهار |
| اکا | عمو | Akā | خطاب محترمانه به فروشنده مسن |
| رور | برادر | Ror | خطاب صمیمی به فروشنده جوان |
| حیران یم | متعجبم / مانده‌ام | Hayrān yam | وقتی قیمت خیلی بالاست |
| بیه / نرخ | قیمت | Narkh | پرسیدن قیمت |
| ارزانه | ارزان | Arzāna | درخواست تخفیف |

## عبارات کلیدی خرید

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| دا په څو ده؟ | این چند است؟ | Dā pə tso da? |
| آخري نرخ یې څه دی؟ | قیمت آخرش چند است؟ | Ākhari narkh ye tsa day? |
| یو څه جوړ را سره وکړه | کمی با من راه بیا (تخفیف) | Yo tsa jor rā sara wakṛa |
| تاوان کوم | ضرر می‌کنم (پاسخ فروشنده) | Tāwān kawam |
| رښتیا وایه | راست بگو | Rištiā wāya |

## مکالمه کامل: خرید کلاه (خولی)

**میلمه:** سلام علیکم اکا! ستړی مه شې.
**دوکاندار:** و علیکم السلام روره! په خیر راغلې، څه خدمت وکړم؟
**میلمه:** دا کندهاری خولۍ (کلاه) په څو ده؟
**دوکاندار:** دا ډېره ښه خولۍ ده، ستا لپاره په پنځه سوه (۵۰۰) روپۍ.
**میلمه:** اوه! حیران یم روره! دا خو ډېره ګرانه ده. په بازار کې په درې سوه ده.
**دوکاندار:** نه روره، دا د لاس کار دی. داسې خولۍ بل ځای نه پیدا کېږي.
**میلمه:** یو څه جوړ را سره وکړه، زه مېلمه یم. آخري نرخ یې څه دی؟
**دوکاندار:** ښه، ستا خاطر لپاره په څلور سوه (۴۰۰) روپۍ دا واخیستله.
**میلمه:** په درې نیم سوه (۳۵۰) یې نه راکوې؟
**دوکاندار:** تاوان کوم، خو خیر... واخله! مبارک دې شه.
**میلمه:** کور دې ودان اکا، دا واخلئ روپۍ.
**دوکاندار:** مننه، بیا راشئ!

## جدول تخفیف و چانه زدن

| پښتو | فارسی |
|------|-------|
| ډېره زیاته ده! | خیلی زیاد است! |
| په ما تاوان دی | برای من ضرر است |
| خیر دی، لږ کم یې کړه | عیب ندارد، کمی کمش کن |
| بله دوکان ته ځم | به دکان دیگر می‌روم |
| دا زما آخري بیه ده | این آخرین قیمت من است |

> **نکته کندهاری:** در قندهار استفاده از کلماتی مثل **«رور»** (برادر) و **«اکا»** (عمو) صمیمیت ایجاد کرده و باعث می‌شود فروشنده تخفیف بهتری به شما بدهد.
`,hasPractice:!1},qv={id:"conv-restaurant",title:"در رستوران",titlePashto:"په رستورانت کې",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# مکالمه در رستوران

یادگیری سفارش غذا در رستوران.

## واژگان رستوران

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| رستورانت / هوټل | رستوران | Huṭal |
| مینو | منو | Mino |
| ډوډۍ | غذا | Ḍoḍəy |
| چای | چای | Chāy |
| اوبه | آب | Oba |
| بل | صورتحساب | Bill |
| ویټر | گارسون | Waiter |

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
`,hasPractice:!1},Hv={id:"conv-taxi",title:"در تاکسی و آدرس",titlePashto:"په ټکسي کې",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# مکالمه با راننده تاکسی در قندهار

سفر با تاکسی در قندهار معمولاً با توافق روی قیمت قبل از حرکت شروع می‌شود.

## واژگان آدرس و حرکت

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| چوک | میدان (فلکه) | Chawk |
| نېغه لاړ شه | مستقیم برو | Negh rātsha |
| ښي لاس ته | به دست راست | Ší lās ta |
| چپ لاس ته | به دست چپ | Tsap lās ta |
| دلته ودرېږه | اینجا توقف کن | Dalta wadreža |
| څومره کېږي؟ | چقدر می‌شود؟ | Tsomra keǧi? |

## نقاط مشهور قندهار (Landmarks)

| پښتو | فارسی |
|------|-------|
| مدد خان چوک | میدان مدد خان (مرکز شهر) |
| عیدګاه چوک | میدان عیدگاه |
| شکارپور دروازه | دروازه شکارپور |
| پوهنتون | دانشگاه |

## مکالمه کامل: کرایه تاکسی

**سپرلۍ (مسافر):** سلام علیکم روره! تر مدد خان چوک پورې ځې؟
**ډرېور:** و علیکم السلام! هو ځم، تشریف راوړئ.
**سپرلۍ:** بیه یې څومره ده؟
**ډرېور:** ستا لپاره سل (۱۰۰) روپۍ.
**سپرلۍ:** نه روره، ډېره ده. په پنځوس روپۍ ځو.
**ډرېور:** لږ یې زیات کړه، تېل ګران شوي دي. په اتیا (۸۰) روپۍ دا ده.
**سپرلۍ:** پراخ شه (Prakh sha)، اتیا روپۍ ومنل شوه. حرکت وکړه چې ناوخته دی.

## مکالمه در مسیر (Directing)

**سپرلۍ:** روره، دلته نېغه لاړ شه.
**ډرېور:** عیدګاه چوک ته ورسېدو، اوس کوم خوا؟
**سپرلۍ:** ښي لاس ته وګرځه، تر هغه لوی مسجد پورې.
**ډرېور:** سمه ده، پوه شوم.
**سپرلۍ:** همدلته د دوکان مخکې ودرېږه.
**ډرېور:** سمه ده، ورسېدو.
**سپرلۍ:** دا ستا پیسې، مننه.
**ډرېور:** په خیر اوسې روره، خدای پامان!

## عبارات کاربردی اضافی

| پښتو | فارسی |
|------|-------|
| لږ چټک لاړ شه | کمی سریع‌تر برو |
| لږ انتظار وکړه | کمی منتظر بمان |
| همدلته ښه دی | همین‌جا خوب است |
| مننډه وکړه | عجله کن |
| پاتې پیسې دې واخله | باقی پولت را بگیر |

> **نکته کندهاری:** در قندهار، رانندگان تاکسی معمولاً مسافران را «رور» (برادر) خطاب می‌کنند و چانه زدن برای کرایه قبل از سوار شدن کاملاً عادی است.
`,hasPractice:!1},Qv={id:"conv-phone",title:"مکالمه تلفنی",titlePashto:"تلفوني خبرې",difficulty:"medium",estimatedTime:"۲۵ دقیقه",content:`
# مکالمه تلفنی به زبان پشتو

تماس‌های تلفنی در قندهار معمولاً با احوالپرسی‌های گرم شروع می‌شوند.

## واژگان تلفن

| پښتو | فارسی | تلفظ |
|------|-------|------|
| زنګ وهم | زنگ می‌زنم | Zang waham |
| ځواب ورکړه | جواب بده | Jawab rākṛa |
| غږ / اواز | صدا | Ghaž / Awāz |
| بند شو | قطع شد | Band sho |
| مسېج / پیغام | پیامک | Message / Payghām |

## عبارات شروع مکالمه

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| هلو، څوک یې؟ | هلو، کی هستی؟ | Halo, tsok ye? |
| اواز دې نه راځي | صدایت نمی‌آید | Awāz de na rādzi |
| غږ دې بند دی | صدایت قطع است | Ghaž de band day |
| زه وروسته زنګ وهم | من بعداً زنگ می‌زنم | Za wrusta zang waham |

## مکالمه کامل: زنگ زدن به دوست

**احمد:** هلو، سلام علیکم!
**محمود:** و علیکم السلام احمد جانه! په خیر یاست؟
**احمد:** مننه محموده، ته څنګه یې؟ کورنۍ ښه ده؟
**محمود:** شکر دی، ټول روغ دي. ته ولې زنګ وهلی و؟
**احمد:** غوښتل مې پوښتنه دې وکړم، سبا وزګار (بیکار) یې؟
**محمود:** هو روره، سبا مې رخصتي ده. څه کار و؟
**احمد:** غواړم مېلمستیا ته دې دعوت کړم. ماښام زموږ کور ته راځه.
**محمود:** ډېره مننه، په سترګو! حتماً درځم.
**احمد:** ښه محمود جانه، اواز دې لږ خراب راځي، زما کریډیټ هم خلاصېږي. بیا به خبرې وکړو.
**محمود:** سمه ده روره، په خیر اوسې. خدای پامان!

## عبارات کاربردی دیجیتال

| پښتو | فارسی |
|------|-------|
| کریډیټ مې خلاص شو | اعتبارم تمام شد |
| چارج نه لرم | شارژ (باتری) ندارم |
| مسېج وکړه | پیام بده |
| نمبر دې راکړه | شماره‌ات را بده |
| اواز دې پس کړه | صدایت را بلند کن |

> **نکته کندهاری:** در تماس‌های تلفنی، استفاده از پسوند **«جان»** (مانند احمد جان، محمود جان) نشان‌دهنده احترام و صمیمیت زیاد در لهجه کندهاری است.
`,hasPractice:!1},Yv={id:"conv-doctor",title:"در مطب داکتر",titlePashto:"د ډاکټر په کتنځي کې",difficulty:"hard",estimatedTime:"۳۰ دقیقه",content:`
# مکالمه با داکتر در قندهار

توضیح دقیق علائم بیماری به زبان پشتو برای درمان صحیح بسیار مهم است.

## اعضای بدن و علائم (Symptoms)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| زړه مې بدېږي | دل‌بدی (تهوع) دارم | Zṛa me bade-ǧi |
| سر مې ګرځي | سرم گیج می‌رود | Sar me garzi |
| تبه لرم | تب دارم | Taba laram |
| پرهر / ټپ | زخم | Prahar / Tap |
| درد کوي | درد می‌کند | Dard kawi |
| نس مې درد کوي | شکمم درد می‌کند | Nas me dard kawi |

## مکالمه کامل: معاینه توسط داکتر

**ناروغ (بیمار):** سلام علیکم ډاکټر صاحب!
**ډاکټر:** و علیکم السلام! په خیر راغلې، څه تکلیف لرې؟
**ناروغ:** ډاکټر صاحب، له پرون راهیسې مې زړه بدېږي او سر مې ګرځي.
**ډاکټر:** تبه هم لرې؟
**ناروغ:** هو، لږ تبه لرم او هډوکي مې ټول درد کوي.
**ډاکټر:** راځه دلته کښېنه چې فشار دې وګورم. څه دې خوړلي وو؟
**ناروغ:** پرون مې په بازار کې د باندې ډوډۍ خوړلې وه.
**ډاکټر:** ښه، معلومېږي چې معده دې خرابه شوې ده. دا نسخه واخله او دا دواګانې په وخت وخوره.
**ناروغ:** ډېره مننه ډاکټر صاحب. پرهیز څه لرم؟
**ډاکټر:** غوړ او تریخ شی مه خوره، یوازې سپکه ډوډۍ وخوره.
**ناروغ:** کور دې ودان، خدای پامان.

## واژگان دواخانه (Pharmacy)

| پښتو | فارسی |
|------|-------|
| دوا | دارو |
| نسخه | نسخه |
| پیچکاري | آمپول |
| ګولۍ | قرص |
| شربت | شربت |
| ډاکټر صاحب | آقای دکتر (خطاب محترمانه) |

## عبارات کاربردی در مطب

| پښتو | فارسی |
|------|-------|
| چېرته درد کوي؟ | کجا درد می‌کند؟ |
| خوله دې خلاصه کړه | دهانت را باز کن |
| ژوره ساه واخله | نفس عمیق بکش |
| ښه به شې انشاءالله | خوب می‌شوی انشاءالله |

> **نکته کندهاری:** در قندهار عبارت **«زړه مې بدېږي»** به معنای حالت تهوع و دل‌بدی است، نه لزوماً درد قلب. کلمه **«نس»** نیز برای شکم بسیار رایج است.
`,hasPractice:!1},Kv={id:"conv-guest",title:"مهمانی و آداب آن",titlePashto:"مېلمستیا او دودونه",difficulty:"medium",estimatedTime:"۳۰ دقیقه",content:`
# آداب مهمانی در قندهار (Hospitality Customs)

مهمان در فرهنگ پښتون «د خدای حبیب» (دوست خدا) است. عبارات خوش‌آمدگویی در قندهار بسیار گرم و طولانی هستند.

## عبارات خوش‌آمدگویی کندهاری

| پښتو | فارسی | کاربرد |
|------|-------|--------|
| په خیر راغلې | خوش آمدی (به سلامت آمدی) | ورود مهمان |
| سترګې مې روښانه | چشمانم روشن شد | ابراز خوشحالی زیاد |
| کور مو ودان | خانه‌تان آباد | تشکر از میزبان |
| ډېر انتظار مو وکښ | خیلی منتظر ماندیم | صمیمیت |
| دوعا کوئ | دعا کنید | هنگام خداحافظی |

## مکالمه کامل: ورود و احوالپرسی گرم

**میزبان:** سلام علیکم! په خیر راغلې روره، په خیر راغلې!
**مهمان:** و علیکم السلام! ستړی مه شې اکا، په خیر اوسې.
**میزبان:** په سترګو راغلی، تشریف راوړی. ستاسو په انتظار وو.
**مهمان:** کور دې ودان، ډېره مننه.
**میزبان:** څنګه یاست؟ صحت مو ښه دی؟ کورنۍ، ماشومان ټول روغ دي؟
**مهمان:** الحمدلله، ستا له برکته ټول ښه دي. تاسي څنګه یاست؟ جوړ یاست؟
**میزبان:** ډېره شکر ده، راځه دلته کښېنه، تکیه وکړه.

## پذیرایی و تعارفات کندهاری

در قندهار، میزبان اصرار زیادی به خوردن دارد.

| پښتو | فارسی |
|------|-------|
| یو څه خو وخوره! | یک چیزی بخور دیگر! |
| موږ سره په قصه شه | با ما همکلام شو (صحبت کردن) |
| چای تود دی، ویې څښه | چای داغ است، بنوش |
| لږ نور کېنه، څه عجله ده؟ | کمی بیشتر بنشین، چه عجلەای است؟ |

## مکالمه: تعارف چای و میوه

**کوربه:** روره، چای وڅښه. دا سبز چای دی، ډېر ښه دی.
**میلمه:** مننه، کور دې ودان. رښتیا هم ستړی وم.
**کوربه:** دا انار هم وخوره، دا زموږ د ارغنداب انار دي.
**میلمه:** ماشاءالله! د ارغنداب انار خو په دنیا کې یو دي. ډېره مننه.
**کوربه:** لږ نور کښېنه، ډوډۍ هم تیاره ده.
**میلمه:** نه اکا، مننه. بل وخت به انشاءالله.
**کوربه:** نه، بې ډوډۍ خو موږ نې پېږدو (نمی‌گذاریم بروی). دا زموږ رواج دی.

## عبارات خداحافظی صمیمانه

| پښتو | فارسی |
|------|-------|
| په مخه دې ښه | راهت بخیر (بدرقه) |
| خدای مو په امان | خدا به همراهتان |
| بیا راشئ، دا مو خپل کور دی | باز بیایید، اینجا خانه خودتان است |
| مننه له مېلمستیا نه | ممنون از مهمان‌نوازی‌تان |

> **نکته فرهنگی:** در قندهار، احوالپرسی شامل پرسیدن از تمام اعضای خانواده (صحت، کار، ماشومان) است و جواب معمولاً «شکر دی» یا «الحمدلله» است.
`,hasPractice:!1},Gv={id:"conv-market-dispute",title:"حل اختلاف در بازار",titlePashto:"په بازار کې دعوه حلول",difficulty:"hard",estimatedTime:"۳۰ دقیقه",content:`
# حل اختلاف و شکایت در بازار

گاهی اوقات جنسی که می‌خرید خراب است یا قیمت آن با چیزی که توافق شده فرق دارد. این درس نحوه برخورد محترمانه اما قاطع را آموزش می‌دهد.

## واژگان شکایت (Complaining)

| پښتو | فارسی | تلفظ |
|------|-------|------|
| خراب | خراب / معیوب | Kharāb |
| نا حقه | ناعادلانه / ناحق | Nā-haqqa |
| بدل | تعویض کردن | Badal |
| رښتیا | حقیقت | Rištiā |
| ملامت | مقصر | Malāmat |

## عبارات کلیدی برای شکایت

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| دا خو خرابه ده | این که خراب است | Dā kho kharāba da |
| پیسې مې بیرته راکړه | پولم را پس بده | Payse me berta rākṛa |
| دا زما ملامتیا نه ده | این تقصیر من نیست | Dā zamā malāmatiā na da |
| بل یې راکړه | یکی دیگر (سالم) بده | Bəl ye rākṛa |

## مکالمه کامل: پس دادن جنس خراب

**مشتري:** سلام علیکم اکا! ما پرون دا ماشین له تا نه وړی و، خو کار نه کوي.
**دوکاندار:** و علیکم السلام. ناممکن ده روره! ما خپله چک کړی و.
**مشتري:** رښتیا وایم، کور ته چې لاړم، هیڅ چالان نه شو. دا یې وګوره!
**دوکاندار:** ښه... شاید په لاره کې ضربه خوړلې وي.
**مشتري:** نه اکا، ما په احتیاط وړی و. دا خو ستا ملامتیا ده. یا یې بدل کړه یا مې پیسې راکړه.
**دوکاندار:** پیسې خو نشم ورکولی، خو بل ماشین درکوم چې نوی وي.
**مشتري:** سمه ده، خو دا ځل یې همدلته چالان کړه چې بیا حیران نشم.
**دوکاندار:** په سترګو روره، دا بل وګوره، دا بیخي نوی دی.
**مشتري:** مننه اکا، کور دې ودان.

## عبارات قاطع اما محترمانه

| پښتو | فارسی |
|------|-------|
| ما ته ناحقه مه وایه | به من ناحق نگو |
| زه له تا نه دا تمه نه لرم | من از تو این انتظار را ندارم |
| انصاف وکړه | انصاف داشته باش |
| خیر دی، تېر به شو | عیب ندارد، گذشت می‌کنیم |

> **نکته کندهاری:** در قندهار، استفاده از کلمه **«انصاف»** و **«حق»** در مشاجرات بسیار تاثیرگذار است و باعث می‌شود طرف مقابل احساس مسئولیت اخلاقی کند.
`,hasPractice:!1},Zv={id:"conv-job-interview",title:"مصاحبه کاری (رسمی)",titlePashto:"کاري مرکه (رسمي)",difficulty:"hard",estimatedTime:"۳۵ دقیقه",content:`
# مکالمه رسمی: مصاحبه کاری

در محیط‌های رسمی و کاری، لحن صحبت تغییر کرده و از واژگان مودبانه‌تر و رسمی‌تر استفاده می‌شود.

## واژگان رسمی (Formal Vocabulary)

| پښتو | فارسی | تلفظ |
|------|-------|------|
| منصب / دنده | وظیفه | Mandzab / Danda |
| تجربه | تجربه | Tajreba |
| معاش | حقوق | Ma-āsh |
| شرایط | شرایط | Sharāyet |
| مسئولیت | مسئولیت | Mas-uliyat |

## عبارات کلیدی رسمی

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| مننه چې وخت مو راکړ | ممنون که وقت دادید | Manana che wakht mo rākṛ |
| زه په دې کار کې لایق یم | من در این کار لایق هستم | Za pə de kār ke lāyeq yam |
| زما تخصص په ... کې دی | تخصص من در ... است | Zama takhasus pə ... ke day |
| غواړم له تاسي سره کار وکړم | می‌خواهم با شما کار کنم | Ghwāṛam la tāsi sara kār wakṛam |

## مکالمه کامل: مصاحبه برای وظیفه

**مدیر:** سلام علیکم! تشریف راوړئ، کښېنئ.
**کاندید:** و علیکم السلام! ډېره مننه مدیر صاحب، په خیر اوسئ.
**مدیر:** مهرباني وکړه، خپل ځان معرفي کړه.
**کاندید:** زما نوم احمد دی. زه د اقتصاد له پوهنتون څخه فارغ یم او درې کاله تجربه لرم.
**مدیر:** په کومو ځایونو کې دې کار کړی دی؟
**کاندید:** ما په یوه خصوصي شرکت کې د محاسب په توګه کار کړی دی.
**مدیر:** زموږ د کار شرایط څنګه دي؟ کولای شې په سختو وختونو کې کار وکړې؟
**کاندید:** هو صاحب، زه له خپلو مسئولیتونو سره پوره بلد یم او هڅه کوم چې اداره بریالۍ شي.
**مدیر:** ډېر ښه. معاش څومره غواړې؟
**کاندید:** معاش دې د اصولو مطابق وي، خو زما تمه پنځوس زره (۵۰۰۰۰) روپۍ ده.
**مدیر:** سمه ده، موږ به ستا په اړه فکر وکړو او بیا به درسره زنګ وهم.
**کاندید:** مننه مدیر صاحب، په مخه مو ښه.

## صفات مثبت در مصاحبه

| پښتو | فارسی |
|------|-------|
| سخت‌کوش | پر تلاش |
| صادق | صادق |
| په وخت پابند | وقت‌شناس |
| د ډلې کار | کار تیمی |

> **نکته فرهنگی:** در مصاحبه‌های رسمی، صفت **«صاحب»** را بعد از عنوان (مانند مدیر صاحب، انجنیر صاحب) حتماً استفاده کنید تا احترام شما حفظ شود.
`,hasPractice:!1},Xv={id:"conv-directions",title:"آدرس و نقشه",titlePashto:"پته او لارښود",difficulty:"medium",estimatedTime:"۳۰ دقیقه",content:`
# پرسیدن آدرس و جهت‌یابی

در قندهار، آدرس دادن معمولاً بر اساس نقاط مشهور (چوک‌ها) و نشانه‌های محلی انجام می‌شود.

## واژگان جهت‌یابی (Navigation)

| پښتو | فارسی | تلفظ |
|------|-------|------|
| پته | آدرس | Patta |
| سړک | جاده / خیابان | Saṛak |
| کوڅه | کوچه | Kutsa |
| نژدې | نزدیک | Nižde |
| لیرې | دور | Lire |

## عبارات کلیدی آدرس

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| دا پته چېرته ده؟ | این آدرس کجاست؟ | Dā patta tserte da? |
| کوم خوا لاړ شم؟ | به کدام طرف بروم؟ | Kom khwā lārshyam? |
| مسجد ته نژدې دی | نزدیک مسجد است | Masjid ta nižde day |
| څومره لاره پاتې ده؟ | چقدر راه باقی مانده؟ | Tsomra lāra pāte da? |

## مکالمه کامل: پیدا کردن یک هتل

**مسافر:** سلام علیکم اکا! ستړی مه شې.
**لاروی (پیاده):** و علیکم السلام روره! په خیر اوسې.
**مسافر:** بخښنه غواړم، «طلوع هوټل» چېرته دی؟ پته یې پېژنې؟
**لاروی:** هو روره، همدې سړک ته نېغه لاړ شه، تر هغه لوی چوک پورې.
**مسافر:** کوم چوک؟ مدد خان چوک؟
**لاروی:** نه، مدد خان چوک نه، عیدګاه چوک ته چې ورسېدې، ښي لاس ته وګرځه.
**مسافر:** بیا نو څومره لاره ده؟
**لاروی:** ډېره نژدې ده، یوه دقيقه لاره ده. هوټل د کوڅې په خوله کې دی.
**مسافر:** ډېره مننه اکا، کور دې ودان.
**لاروی:** په خیر اوسې روره، خدای پامان.

## نقاط جهت‌یابی رایج

| پښتو | فارسی |
|------|-------|
| د جومات مخ ته | روبروی مسجد |
| د پل تر څنګ | کنار پل |
| د سړک پر سر | بر جاده |
| په همدې کوڅه کې | در همین کوچه |

> **نکته کندهاری:** در قندهار به جای «کجا» (چېرته) در لهجه محلی گاهی **«چېرې»** (Chere) نیز شنیده می‌شود. پرسیدن مودبانه با «بخښنه غواړم» (ببخشید) بسیار مرسوم است.
`,hasPractice:!1},Wv={id:"retroflex",title:"صداهای برگشته",titlePashto:"شاته تاوېدونکي غږونه",difficulty:"hard",estimatedTime:"۲۵ دقیقه",content:`
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
`,hasPractice:!1},Vv={id:"idioms",title:"اصطلاحات",titlePashto:"محاورې",difficulty:"hard",estimatedTime:"۳۰ دقیقه",content:`
# اصطلاحات پښتو

اصطلاحات عبارات ثابتی هستند که معنی آنها از معنی کلمات جداگانه متفاوت است.

## اصطلاحات رایج

| پښتو | معنی واقعی | تلفظ کندهاری |
|------|------------|--------------|
| **په سترګو** | روی چشم (اطاعت) | Pa stargo |
| سر ورکول | فدا شدن | Sar warkawul |
| لاس ورکول | کمک کردن | Lās warkawul |
| زړه ماتول | ناامید کردن | Zṛa mātawul |
| غوږ نیول | گوش دادن | Ghwaẓ̌ niyul |

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
`,hasPractice:!1},Jv={id:"proverbs",title:"ضرب‌المثل‌ها",titlePashto:"متلونه",difficulty:"hard",estimatedTime:"۳۰ دقیقه",content:`
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

## ضرب‌المثل‌های کندهاری (Kandahari Matals)

| پښتو | فارسی | تلفظ کندهاری |
|------|-------|--------------|
| چې اوبه تېرې شي، پل جوړوي | وقتی آب رفت، پل می‌سازد | Tsə oba tere ṣ̌i, pəl joṛawi |
| یو ګل سره پسرلی نه راځي | با یک گل بهار نمی‌آید | Yaw gul sara pasarlay na rā-dzi |
| چې زړه کې وي، په مخ کې ښکاري | آنچه در دل است، در چهره پیداست | Tsə zṛa ke wi, pə makh ke ṣ̌kāri |

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
`,hasPractice:!1},Fv={id:"kandahari-slang",title:"اصطلاحات کندهاری",titlePashto:"کندهاري محاورې",difficulty:"hard",estimatedTime:"۲۵ دقیقه",content:`
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

| حرف | صدای کندهاری | مثال | معادل کابلی |
|-----|-------------|------|-------------|
| **ښ** | **Ṣ̌** (ش سنگین) | **ښه** (Ṣ̌a) | Kha |
| **ږ** | **Ẓ̌** (ژ سنگین) | **ږیره** (Ẓ̌ira) | Gira |
| **څ** | **Ts** (ت+س) | **څه** (Tsa) | Sa |
| **ځ** | **Dz** (د+ز) | **ځم** (Dzama) | Zama |

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

## مقایسه لهجه کندهاری و کابلی
در کندهاری، حروف خاص پښتو به شکل اصلی و تاریخی خود تلفظ می‌شوند.

| کلمه | معنی | تلفظ کندهاری | تلفظ کابلی |
|---------|-------|--------------|------------|
| **ښه** | خوب | Ṣ̌a | Kha |
| **ږیره** | ریش | Ẓ̌ira | Gira |
| **څه** | چه | Tsa | Sa |
| **ځم** | می‌روم | Dzama | Zama |
| **ورور** | برادر | Wror (با 'ر' سنگین) | Ror |

## نکات مهم

- در کندهاری، «ښ» واضح‌تر تلفظ می‌شود
- «ږ» به «ژ» نزدیک‌تر است
- «څ» و «ځ» واضح‌تر از کابلی تلفظ می‌شوند
- لحن کندهاری آهنگین‌تر است

## نکات طلایی جمله‌سازی (Golden Sentence Points)

این‌ها همان رازهایی هستند که شما را شبیه یک بومی نشان می‌دهند:

### ۱. کنی (Kani) - مگه نه؟
این کلمه جادویی در آخر جمله می‌آید و تایید می‌گیرد.
- **تـه راځې، کنی؟** (تو می‌آیی، مگه نه؟)
- **دا خوندور دی، کنی؟** (این خوشمزه است، مگه نه؟)

### ۲. والله (Vallah) - واقعاً / به خدا
رایج‌ترین شروع کننده جمله برای تاکید یا بیان حقیقت.
- **والله، زه خبر نه یم.** (به خدا/واقعاً من خبر ندارم.)
- **والله، ډېر یخ دی.** (واقعاً خیلی سرد است.)

### ۳. یاره (Yaara) - رفیق / پسر
پرکاربردترین کلمه برای شروع صحبت غیررسمی (حتی با کسانی که رفیق صمیمی نیستند).
- **یاره، دا څه کوي؟** (رفیق/پسر، این چه کار می‌کند؟)
- **یاره، نن هوا ښه ده.** (پسر، امروز هوا خوب است.)

### ۴. ګوره (Gora) - ببین / گوش کن
برای جلب توجه طرف مقابل.
- **ګوره، دلته راشه.** (ببین، بیا اینجا.)
- **ګوره، زه وخت نه لرم.** (ببین/گوش کن، من وقت ندارم.)

### ۵. بیخي (Bihi) - اصلاً / کاملاً
برای تاکید زیاد.
- **بیخي لیونۍ شو.** (کاملاً دیوانه شد.)
- **بیخي نه پوهیږم.** (اصلاً نمی‌فهمم.)

> **نکته:** لهجه کندهاری یکی از اصیل‌ترین لهجه‌های پښتو محسوب می‌شود و حروف خاص پښتو در آن واضح‌تر تلفظ می‌شوند.
`,hasPractice:!1},$v={id:"advanced-food-cooking",title:"کولو (Cooking)",titlePashto:"کولو - پخول",difficulty:"hard",estimatedTime:"۲۵ دقیقه",content:`
# کولو - پخول (Cooking and Food Preparation)

## مقدمه

پخول یا کولو یکی از مهم‌ترین فعل‌های روزمره است. در این درس، ما فعل‌های مربوط به پخت و پز، غذاهای مختلف، و نحوه بیان توانایی و ترجیح در مورد غذا را یاد می‌گیریم.

## فعل‌های اصلی پخت و پز

| پښتو | فارسی | تلفظ کندهاری | معنی |
|------|-------|------------|------|
| پخول | پختن | Pakhowul | to cook |
| تیارول | آماده کردن | Tayārawul | to prepare |
| خوړل | خوردن | Khwaṛəl | to eat |
| څښل | نوشیدن | **Tsṣ̌əl** | to drink |
| ګډول | مخلوط کردن | Gaḍawul | to mix |
| پریکول | برش دادن | Prekawul | to cut |

## فعل‌های کمکی (Modal Verbs)

فعل‌های کمکی برای بیان توانایی، الزام، و ترجیح استفاده می‌شوند:

| پښتو | فارسی | تلفظ کندهاری | معنی |
|------|-------|------------|------|
| کولای | توانستن | kulāy | can/able to |
| نشی | نتوانستن | nəshi | cannot |
| باید | باید | bāyad | should/must |
| خوښ | دوست داشتن | khwṣ | like/prefer |

### مثال‌های استفاده:

- **زه کولای شم ډوډۍ پخه کړم** - من می‌توانم نان بپزم.
- **هغه نشي کولای قورمه جوړه کړي** - او نمی‌تواند قورمه درست کند.
- **ما ته دا غذا خوښېږي** - من این غذا را دوست دارم (لغوی: به من این غذا خوش می‌آید).

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
`,hasPractice:!1},Iv={id:"advanced-body-parts",title:"Advanced Body Parts",titlePashto:"جسم کے حصے",difficulty:"hard",estimatedTime:"۲۵ دقیقه",content:`
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
`,hasPractice:!1},ax=[mb,yb,gb,bb,vb,xb,wb,kb,jb,Nb,Sb,zb,Eb,Tb,Mb,Ab,Pb,Cb,Rb,Wb,tv,ev,nv,av,uv,cv,pv,Bb,Db,Ob,Lb,Ub,_b,qb,Hb,Qb,Yb,Kb,Gb,Zb,Xb,Vb,Jb,Fb,$b,Ib,iv,sv,ov,lv,rv,fv,dv,hv,mv,yv,gv,bv,vv,xv,wv,kv,jv,Nv,Sv,zv,Tv,Ev,Mv,Av,Pv,Cv,Rv,Bv,Dv,Ov,Lv,_v,qv,Hv,Qv,Yv,Kv,Gv,Zv,Xv,Uv,Wv,Vv,Jv,Fv,$v,Iv];function bu(l){return ax.find(c=>c.id===l)}function tx(l){const c=Vi.categories.flatMap(d=>d.lessons.map(m=>m.id)),p=c.indexOf(l);if(p===-1||p===c.length-1)return null;const u=c[p+1];return bu(u)||{id:u,title:Vi.categories.flatMap(d=>d.lessons).find(d=>d.id===u)?.title||u}}function ex(l){const c=Vi.categories.flatMap(d=>d.lessons.map(m=>m.id)),p=c.indexOf(l);if(p<=0)return null;const u=c[p-1];return bu(u)||{id:u,title:Vi.categories.flatMap(d=>d.lessons).find(d=>d.id===u)?.title||u}}function nx(){const{lessonId:l}=zo();ru();const{completeLesson:c,uncompleteLesson:p,isLessonCompleted:u}=un(),d=bu(l),m=u(l),h=tx(l),b=ex(l);if(!d)return o.jsxs("div",{className:"max-w-3xl mx-auto text-center py-12",children:[o.jsx(ot,{className:"w-16 h-16 text-slate-600 mx-auto mb-4"}),o.jsx("h1",{className:"text-xl font-bold text-slate-200 mb-2",children:"درس پیدا نشد"}),o.jsx("p",{className:"text-slate-500 mb-6",children:"این درس هنوز آماده نشده است"}),o.jsxs(Pa,{to:"/",className:"inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300",children:[o.jsx(ue,{className:"w-4 h-4"}),"بازگشت به خانه"]})]});const v=()=>{c(l,10)},y=()=>{p(l)};return o.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[o.jsxs(Pa,{to:"/",className:"inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 mb-4 text-sm",children:[o.jsx(ue,{className:"w-4 h-4"}),"بازگشت به خانه"]}),o.jsxs("div",{className:"flex items-start justify-between gap-4",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-bold text-slate-100 mb-1",children:d.title}),o.jsx("p",{className:"text-slate-400",children:d.titlePashto})]}),m&&o.jsxs("div",{className:"flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/30",children:[o.jsx(Mt,{className:"w-4 h-4"}),o.jsx("span",{className:"text-sm font-medium",children:"تکمیل شده"})]})]}),o.jsxs("div",{className:"flex items-center gap-4 mt-3 text-sm text-slate-500",children:[o.jsxs("span",{children:["⏱️ ",d.estimatedTime]}),o.jsx("span",{className:`px-2 py-0.5 rounded-full ${d.difficulty==="easy"?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30":d.difficulty==="medium"?"bg-yellow-500/20 text-yellow-400 border border-yellow-500/30":"bg-red-500/20 text-red-400 border border-red-500/30"}`,children:d.difficulty==="easy"?"آسان":d.difficulty==="medium"?"متوسط":"سخت"})]})]}),o.jsx("div",{className:"bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-lg",children:o.jsx("div",{className:"prose prose-invert max-w-none prose-headings:text-slate-200 prose-p:text-slate-300 prose-strong:text-slate-200",children:o.jsx("div",{className:"lesson-content",dangerouslySetInnerHTML:{__html:qd(d.content)}})})}),d.contentPashto&&o.jsxs("details",{className:"bg-slate-800 rounded-2xl border border-slate-700 shadow-lg",children:[o.jsx("summary",{className:"p-4 cursor-pointer font-medium text-slate-300 hover:text-slate-100",children:"📖 مشاهده به پښتو"}),o.jsx("div",{className:"p-6 pt-0 border-t border-slate-700",children:o.jsx("div",{className:"prose prose-invert max-w-none",dangerouslySetInnerHTML:{__html:qd(d.contentPashto)}})})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[!m&&o.jsxs("button",{onClick:v,className:"flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2",children:[o.jsx(Mt,{className:"w-5 h-5"}),"تکمیل درس (+10 XP)"]}),m&&o.jsxs("button",{onClick:y,className:"flex-1 py-3 bg-slate-600 hover:bg-slate-500 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2",children:[o.jsx(Mt,{className:"w-5 h-5"}),"لغو تکمیل"]}),d.hasPractice&&o.jsx(Pa,{to:`/practice/${d.practiceId||l}`,className:"flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-xl transition-colors text-center",children:"شروع تمرین"})]}),o.jsxs("div",{className:"flex justify-between pt-6 border-t border-slate-700",children:[b?o.jsxs(Pa,{to:`/lesson/${b.id}`,className:"flex items-center gap-2 text-slate-400 hover:text-slate-200",children:[o.jsx(ue,{className:"w-4 h-4"}),o.jsx("span",{children:b.title})]}):o.jsx("div",{}),h?o.jsxs(Pa,{to:`/lesson/${h.id}`,className:"flex items-center gap-2 text-slate-400 hover:text-slate-200",children:[o.jsx("span",{children:h.title}),o.jsx(qg,{className:"w-4 h-4"})]}):o.jsx("div",{})]})]})}function qd(l){if(!l)return"";if(Array.isArray(l))return l.map(m=>{let h="";return m.type==="intro"?(h+=`<h2 class="text-xl font-bold mt-8 mb-4 text-slate-200">${m.title}</h2>`,h+=`<p class="mb-3 text-slate-300">${m.text}</p>`):m.type==="conjugation"?(h+=`<h3 class="text-lg font-bold mt-6 mb-3 text-slate-200">${m.title}</h3>`,h+='<table class="w-full border-collapse my-4 text-sm">',h+='<tr><th class="border border-slate-600 px-3 py-2 bg-slate-700 font-bold text-slate-200">ضمیر</th>',h+='<th class="border border-slate-600 px-3 py-2 bg-slate-700 font-bold text-slate-200">پشتو</th>',h+='<th class="border border-slate-600 px-3 py-2 bg-slate-700 font-bold text-slate-200">انگلیسی</th>',h+='<th class="border border-slate-600 px-3 py-2 bg-slate-700 font-bold text-slate-200">مثال</th></tr>',m.conjugations.forEach(b=>{h+="<tr>",h+=`<td class="border border-slate-600 px-3 py-2 text-slate-300">${b.pronoun}</td>`,h+=`<td class="border border-slate-600 px-3 py-2 text-slate-300">${b.pashto}</td>`,h+=`<td class="border border-slate-600 px-3 py-2 text-slate-300">${b.english}</td>`,h+=`<td class="border border-slate-600 px-3 py-2 text-slate-300">${b.example}</td>`,h+="</tr>"}),h+="</table>"):m.type==="examples"?(h+=`<h3 class="text-lg font-bold mt-6 mb-3 text-slate-200">${m.title}</h3>`,m.examples.forEach(b=>{h+='<div class="mb-4 p-3 bg-slate-700/50 rounded-lg border border-slate-600">',h+=`<p class="text-slate-300"><strong class="text-emerald-400">پشتو:</strong> ${b.pashto}</p>`,h+=`<p class="text-slate-300"><strong class="text-emerald-400">انگلیسی:</strong> ${b.english}</p>`,h+=`<p class="text-slate-300"><strong class="text-emerald-400">فارسی:</strong> ${b.farsi}</p>`,h+="</div>"})):m.type==="practice"&&(h+=`<h3 class="text-lg font-bold mt-6 mb-3 text-slate-200">${m.title}</h3>`,m.exercises.forEach((b,v)=>{h+='<div class="mb-4 p-3 bg-slate-700/50 rounded-lg border border-slate-600">',h+=`<p class="text-slate-300 mb-2">${b.question}</p>`,h+='<div class="flex gap-2 flex-wrap">',b.options.forEach(y=>{h+=`<button class="px-3 py-1 bg-slate-600 hover:bg-slate-500 text-slate-300 rounded text-sm">${y}</button>`}),h+="</div>",h+="</div>"})),h}).join("");const c=m=>{const h=m.trim().split(`
`);if(h.length<2)return m;let b='<table class="w-full border-collapse my-4 text-sm">';return h.forEach((v,y)=>{if(v.match(/^\|[\s-:|]+\|$/))return;const A=v.split("|").filter(z=>z.trim()!=="");if(A.length===0)return;const k=y===0?"th":"td",B=y===0?"bg-slate-700 font-bold text-slate-200":"text-slate-300";b+="<tr>",A.forEach(z=>{b+=`<${k} class="border border-slate-600 px-3 py-2 ${B}">${z.trim()}</${k}>`}),b+="</tr>"}),b+="</table>",b};let p=l;const u=/(\|.+\|\n)+/g;return p=p.replace(u,m=>c(m)),p=p.replace(/^### (.+)$/gm,'<h3 class="text-lg font-bold mt-6 mb-3 text-slate-200">$1</h3>').replace(/^## (.+)$/gm,'<h2 class="text-xl font-bold mt-8 mb-4 text-slate-200">$1</h2>').replace(/^# (.+)$/gm,'<h1 class="text-2xl font-bold mt-8 mb-4 text-slate-100">$1</h1>').replace(/\*\*(.+?)\*\*/g,'<strong class="text-emerald-400">$1</strong>').replace(/\*(.+?)\*/g,'<em class="text-slate-300">$1</em>').replace(/^> (.+)$/gm,'<blockquote class="border-r-4 border-emerald-500 pr-4 my-4 text-slate-400 bg-slate-700/50 py-2 rounded-l">$1</blockquote>').replace(/^(\d+)\. (.+)$/gm,'<li class="mb-2 mr-4 text-slate-300">$2</li>').replace(/^- (.+)$/gm,'<li class="mb-1 mr-4 text-slate-300">$1</li>'),p=p.split(`
`).map(m=>{const h=m.trim();return h?h.startsWith("<")?m:`<p class="mb-3 text-slate-300">${m}</p>`:""}).join(`
`),p}const ix=[{id:"alphabet-intro",title:"تمرین الفبای پښتو",titlePashto:"د پښتو الفبا تمرین",questions:[{question:"الفبای پښتو چند حرف دارد؟",options:["۳۲ حرف","۴۴ حرف","۲۸ حرف","۳۵ حرف"],correct:"۴۴ حرف",explanation:"الفبای پښتو ۴۴ حرف دارد که ۹ تای آن خاص پښتو است."},{question:"کدام حرف خاص پښتو است؟",options:["ب","ټ","ت","پ"],correct:"ټ",explanation:"ټ یک حرف برگشته است که فقط در پښتو وجود دارد."},{question:"پښتو از کدام سمت نوشته می‌شود؟",options:["چپ به راست","راست به چپ","بالا به پایین","هر دو طرف"],correct:"راست به چپ",explanation:"پښتو مثل فارسی و عربی از راست به چپ نوشته می‌شود."},{question:"چند حرف خاص پښتو وجود دارد؟",options:["۵ حرف","۷ حرف","۹ حرف","۱۲ حرف"],correct:"۹ حرف",explanation:"پښتو ۹ حرف خاص دارد: ټ، ډ، ړ، ڼ، څ، ځ، ښ، ږ، ګ"}]},{id:"unique-letters",title:"تمرین حروف خاص",titlePashto:"د ځانګړو تورو تمرین",questions:[{question:"حرف «ټ» چه نوع صدایی دارد؟",options:["ت معمولی","ت برگشته","د برگشته","س"],correct:"ت برگشته",explanation:"ټ یک «ت» برگشته است که با برگرداندن زبان تلفظ می‌شود."},{question:"حرف «څ» چه صدایی دارد؟",options:["چ","ج","تس","س"],correct:"تس",explanation:"څ ترکیب صداهای «ت» و «س» است."},{question:"کدام حرف صدای «دز» دارد؟",options:["ځ","څ","ږ","ښ"],correct:"ځ",explanation:"ځ ترکیب صداهای «د» و «ز» است."},{question:"«ډوډۍ» به چه معناست؟",options:["آب","نان","خانه","کتاب"],correct:"نان",explanation:"ډوډۍ به معنای نان است و با حرف خاص ډ شروع می‌شود."}]},{id:"kandahari-sounds",title:"تمرین صداهای کندهاری",titlePashto:"د کندهارۍ غږونو تمرین",questions:[{question:"حرف «ښ» در گویش کندهاری چه صدایی دارد؟",options:["خ","ش برگشته","گ","ژ"],correct:"ش برگشته",explanation:"در کندهاری، ښ صدای «ش» برگشته دارد، نه «خ»."},{question:"حرف «ږ» در گویش کابلی چه صدایی دارد؟",options:["ژ","گ","ش","خ"],correct:"گ",explanation:"در کابلی، ږ صدای «گ» دارد، اما در کندهاری «ژ» برگشته."},{question:"«ښه» به چه معناست؟",options:["بد","خوب","بزرگ","کوچک"],correct:"خوب",explanation:"ښه به معنای «خوب» است."},{question:"گویش کندهاری در کدام منطقه صحبت می‌شود؟",options:["کابل","قندهار","مزار","هرات"],correct:"قندهار",explanation:"گویش کندهاری در قندهار و مناطق جنوبی افغانستان رایج است."}]},{id:"vowels",title:"تمرین مصوت‌ها",titlePashto:"د غږلرونکو تورو تمرین",questions:[{question:"پشتو چند مصوت اصلی دارد؟",options:["۴","۵","۶","۷"],correct:"۷",explanation:"پشتو ۷ مصوت اصلی دارد."},{question:"کدام مصوت کوتاه است؟",options:["ا","ې","َ","ی"],correct:"َ",explanation:"َ (فتحه) یک مصوت کوتاه است."},{question:"«ا» چه صدایی دارد؟",options:["a کوتاه","ā بلند","e","i"],correct:"ā بلند",explanation:"ا یک مصوت بلند است."},{question:"مصوت خاص کندهاری کدام است؟",options:["ا","ې","ə (شوا)","ی"],correct:"ə (شوا)",explanation:"ə (شوا) یک مصوت خاص در کندهاری است."}]},{id:"numbers-1-10",title:"تمرین اعداد ۱ تا ۱۰",titlePashto:"د ۱ نه تر ۱۰ شمېرو تمرین",questions:[{question:"«یو» به چه معناست؟",options:["دو","یک","سه","صفر"],correct:"یک",explanation:"یو در پښتو به معنای یک است."},{question:"عدد ۵ در پښتو چیست؟",options:["څلور","پنځه","شپږ","اوه"],correct:"پنځه",explanation:"پنځه به معنای پنج است."},{question:"«لس» چند است؟",options:["۸","۹","۱۰","۱۱"],correct:"۱۰",explanation:"لس در پښتو به معنای ده است."},{question:"کدام عدد «اته» است؟",options:["۶","۷","۸","۹"],correct:"۸",explanation:"اته به معنای هشت است."}]},{id:"basic-greetings",title:"تمرین سلام و احوالپرسی",titlePashto:"د سلام او حال احوال تمرین",questions:[{question:"«ستړی مه شې» به چه معناست؟",options:["خداحافظ","خسته نباشی","صبح بخیر","شب بخیر"],correct:"خسته نباشی",explanation:"ستړی مه شې یک سلام رایج پښتو است به معنای خسته نباشی."},{question:"«څنګه یې؟» یعنی چه؟",options:["کجایی؟","چطوری؟","چه می‌کنی؟","کی هستی؟"],correct:"چطوری؟",explanation:"څنګه یې؟ برای پرسیدن حال استفاده می‌شود."},{question:"خداحافظی در پښتو چیست؟",options:["سلام","مننه","خدای پامان","ښه یم"],correct:"خدای پامان",explanation:"خدای پامان به معنای خداحافظ است."},{question:"«مننه» به چه معناست؟",options:["سلام","ممنون","ببخشید","خوبم"],correct:"ممنون",explanation:"مننه برای تشکر کردن استفاده می‌شود."}]}],sx=[...ix];function ox(l){return sx.find(c=>c.id===l)}function lx(){const{practiceId:l}=zo(),{completePractice:c}=un(),p=ox(l),[u,d]=T.useState(0),[m,h]=T.useState(null),[b,v]=T.useState(!1),[y,A]=T.useState(0),[k,B]=T.useState(!1);if(!p)return o.jsxs("div",{className:"max-w-3xl mx-auto text-center py-12",children:[o.jsx("h1",{className:"text-xl font-bold text-slate-200 mb-2",children:"تمرین پیدا نشد"}),o.jsx("p",{className:"text-slate-500 mb-6",children:"این تمرین هنوز آماده نشده است"}),o.jsxs(Pa,{to:"/",className:"inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300",children:[o.jsx(ue,{className:"w-4 h-4"}),"بازگشت به خانه"]})]});const z=p.questions[u],M=p.questions.length,R=q=>{b||(h(q),v(!0),q===z.correct&&A(H=>H+1))},_=()=>{u<M-1?(d(q=>q+1),h(null),v(!1)):(B(!0),c(l,5))};if(k){const q=Math.round(y/M*100);return o.jsxs("div",{className:"max-w-md mx-auto text-center py-12",children:[o.jsx("div",{className:`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${q>=70?"bg-emerald-500/20 border border-emerald-500/30":"bg-amber-500/20 border border-amber-500/30"}`,children:o.jsx(Le,{className:`w-10 h-10 ${q>=70?"text-emerald-400":"text-amber-400"}`})}),o.jsx("h1",{className:"text-2xl font-bold text-slate-100 mb-2",children:q>=70?"آفرین!":"تلاش خوب بود!"}),o.jsx("p",{className:"text-slate-500 mb-6",children:q>=70?"ډیره ښه!":"بیا هڅه وکړه!"}),o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 mb-8 border border-slate-700",children:[o.jsxs("div",{className:"text-4xl font-bold text-slate-100 mb-2",children:[y,"/",M]}),o.jsx("div",{className:"text-slate-500",children:"پاسخ صحیح"}),o.jsx("div",{className:"mt-4 text-emerald-400 font-medium",children:"+5 XP"})]}),o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(Pa,{to:"/",className:"py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors",children:"بازگشت به خانه"}),o.jsx("button",{onClick:()=>{d(0),h(null),v(!1),A(0),B(!1)},className:"py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium rounded-xl transition-colors border border-slate-600",children:"تکرار تمرین"})]})]})}return o.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[o.jsxs(Pa,{to:"/",className:"inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 mb-4 text-sm",children:[o.jsx(ue,{className:"w-4 h-4"}),"بازگشت"]}),o.jsx("h1",{className:"text-xl font-bold text-slate-100",children:p.title}),o.jsx("p",{className:"text-slate-500 text-sm",children:p.titlePashto})]}),o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[o.jsxs("div",{className:"flex justify-between text-sm text-slate-500 mb-2",children:[o.jsxs("span",{children:["سوال ",u+1," از ",M]}),o.jsxs("span",{children:[y," پاسخ صحیح"]})]}),o.jsx("div",{className:"h-2 bg-slate-700 rounded-full overflow-hidden",children:o.jsx("div",{className:"h-full bg-emerald-500 transition-all duration-300",style:{width:`${(u+1)/M*100}%`}})})]}),o.jsxs("div",{className:"bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-lg",children:[o.jsx("h2",{className:"text-lg font-medium text-slate-200 mb-6",children:z.question}),o.jsx("div",{className:"space-y-3",children:z.options.map((q,H)=>{const X=m===q,ua=q===z.correct;let ca="border-slate-600 hover:border-emerald-500/50 hover:bg-emerald-500/10";return b?ua?ca="border-emerald-500 bg-emerald-500/20":X&&!ua&&(ca="border-red-500 bg-red-500/20"):X&&(ca="border-emerald-500 bg-emerald-500/20"),o.jsx("button",{onClick:()=>R(q),disabled:b,className:`w-full p-4 text-right rounded-xl border-2 transition-all ${ca}`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-slate-200",children:q}),b&&ua&&o.jsx(Mt,{className:"w-5 h-5 text-emerald-400"}),b&&X&&!ua&&o.jsx(Yg,{className:"w-5 h-5 text-red-400"})]})},H)})})]}),b&&o.jsxs("div",{className:`p-4 rounded-xl border ${m===z.correct?"bg-emerald-500/20 text-emerald-300 border-emerald-500/30":"bg-red-500/20 text-red-300 border-red-500/30"}`,children:[m===z.correct?o.jsx("p",{className:"font-medium",children:"✅ آفرین! پاسخ صحیح است."}):o.jsxs("p",{className:"font-medium",children:["❌ پاسخ صحیح: ",z.correct]}),z.explanation&&o.jsx("p",{className:"text-sm mt-2 opacity-80",children:z.explanation})]}),b&&o.jsx("button",{onClick:_,className:"w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors",children:u<M-1?"سوال بعدی":"مشاهده نتیجه"})]})}const Xi=[{id:"alef",letter:"ا",name:"الف",namePashto:"الف",sound:"/ɑ, a/",latinEquivalent:"a, aa",category:"basic",examples:[{word:"اتل",meaning:"قهرمان",transliteration:"atal"},{word:"اوبه",meaning:"آب",transliteration:"oba"}]},{id:"be",letter:"ب",name:"ب",namePashto:"ب",sound:"/b/",latinEquivalent:"b",category:"basic",examples:[{word:"باد",meaning:"باد",transliteration:"bād"},{word:"بچی",meaning:"بچه",transliteration:"bachay"}]},{id:"pe",letter:"پ",name:"پ",namePashto:"پ",sound:"/p/",latinEquivalent:"p",category:"basic",examples:[{word:"پلار",meaning:"پدر",transliteration:"plār"},{word:"پښتو",meaning:"پښتو",transliteration:"pashto"}]},{id:"te",letter:"ت",name:"ت",namePashto:"ت",sound:"/t/",latinEquivalent:"t",category:"basic",examples:[{word:"تور",meaning:"سیاه",transliteration:"tor"},{word:"تاسو",meaning:"شما",transliteration:"tāso"}]},{id:"Te",letter:"ټ",name:"ټ (ت برگشته)",namePashto:"ټ",sound:"/ʈ/",latinEquivalent:"ṭ",category:"unique",isUnique:!0,examples:[{word:"ټوپک",meaning:"تفنگ",transliteration:"ṭopak"},{word:"ټول",meaning:"همه",transliteration:"ṭol"}]},{id:"se",letter:"ث",name:"ث",namePashto:"ث",sound:"/s/",latinEquivalent:"s",category:"basic",examples:[{word:"ثواب",meaning:"ثواب",transliteration:"sawāb"}]},{id:"jim",letter:"ج",name:"ج",namePashto:"ج",sound:"/dʒ/",latinEquivalent:"j",category:"basic",examples:[{word:"جنګ",meaning:"جنگ",transliteration:"jang"},{word:"جومات",meaning:"مسجد",transliteration:"jomāt"}]},{id:"che",letter:"چ",name:"چ",namePashto:"چ",sound:"/tʃ/",latinEquivalent:"ch",category:"basic",examples:[{word:"چای",meaning:"چای",transliteration:"chāy"},{word:"چرګ",meaning:"مرغ",transliteration:"charg"}]},{id:"tse",letter:"څ",name:"څ (تس)",namePashto:"څ",sound:"/ts/",latinEquivalent:"ts",category:"unique",isUnique:!0,examples:[{word:"څه",meaning:"چه",transliteration:"tsa"},{word:"څلور",meaning:"چهار",transliteration:"tsalor"}]},{id:"dze",letter:"ځ",name:"ځ (دز)",namePashto:"ځ",sound:"/dz/",latinEquivalent:"dz",category:"unique",isUnique:!0,examples:[{word:"ځان",meaning:"خود",transliteration:"dzān"},{word:"ځای",meaning:"جا",transliteration:"dzāy"}]},{id:"he",letter:"ح",name:"ح",namePashto:"ح",sound:"/h/",latinEquivalent:"h",category:"basic",examples:[{word:"حال",meaning:"حال",transliteration:"hāl"}]},{id:"khe",letter:"خ",name:"خ",namePashto:"خ",sound:"/x/",latinEquivalent:"kh",category:"basic",examples:[{word:"خور",meaning:"خواهر",transliteration:"khor"},{word:"خوب",meaning:"خواب",transliteration:"khob"}]},{id:"dal",letter:"د",name:"د",namePashto:"د",sound:"/d/",latinEquivalent:"d",category:"basic",examples:[{word:"دوست",meaning:"دوست",transliteration:"dost"},{word:"دا",meaning:"این",transliteration:"dā"}]},{id:"Dal",letter:"ډ",name:"ډ (د برگشته)",namePashto:"ډ",sound:"/ɖ/",latinEquivalent:"ḍ",category:"unique",isUnique:!0,examples:[{word:"ډوډۍ",meaning:"نان",transliteration:"ḍoḍəy"},{word:"ډېر",meaning:"زیاد",transliteration:"ḍer"}]},{id:"zal",letter:"ذ",name:"ذ",namePashto:"ذ",sound:"/z/",latinEquivalent:"z",category:"basic",examples:[{word:"ذکر",meaning:"ذکر",transliteration:"zikr"}]},{id:"re",letter:"ر",name:"ر",namePashto:"ر",sound:"/r/",latinEquivalent:"r",category:"basic",examples:[{word:"رنګ",meaning:"رنگ",transliteration:"rang"},{word:"روغ",meaning:"سالم",transliteration:"rogh"}]},{id:"Re",letter:"ړ",name:"ړ (ر برگشته)",namePashto:"ړ",sound:"/ɽ/",latinEquivalent:"ṛ",category:"unique",isUnique:!0,examples:[{word:"سړی",meaning:"مرد",transliteration:"saṛay"},{word:"ړندون",meaning:"کور",transliteration:"ṛandon"}]},{id:"ze",letter:"ز",name:"ز",namePashto:"ز",sound:"/z/",latinEquivalent:"z",category:"basic",examples:[{word:"زړه",meaning:"قلب",transliteration:"zṛa"},{word:"زه",meaning:"من",transliteration:"za"}]},{id:"zhe",letter:"ژ",name:"ژ",namePashto:"ژ",sound:"/ʒ/",latinEquivalent:"zh",category:"basic",examples:[{word:"ژوند",meaning:"زندگی",transliteration:"zhwand"},{word:"ژبه",meaning:"زبان",transliteration:"zhəba"}]},{id:"Zhe",letter:"ږ",name:"ږ (ژ برگشته کندهاری)",namePashto:"ږ",sound:"/ʐ/",soundKandahari:"/ʐ/ (صدای ژ برگشته)",soundOther:"/g/ یا /ʒ/ در گویش‌های دیگر",latinEquivalent:"ẓ̌",category:"unique",isUnique:!0,isKandahariSpecial:!0,examples:[{word:"ږمنځ",meaning:"شانه",transliteration:"ẓ̌mənz"},{word:"وږی",meaning:"گرسنه",transliteration:"waẓ̌ay"}]},{id:"sin",letter:"س",name:"س",namePashto:"س",sound:"/s/",latinEquivalent:"s",category:"basic",examples:[{word:"سر",meaning:"سر",transliteration:"sar"},{word:"سپین",meaning:"سفید",transliteration:"spin"}]},{id:"shin",letter:"ش",name:"ش",namePashto:"ش",sound:"/ʃ/",latinEquivalent:"sh",category:"basic",examples:[{word:"شپه",meaning:"شب",transliteration:"shpa"},{word:"ښه",meaning:"خوب",transliteration:"sha"}]},{id:"Shin",letter:"ښ",name:"ښ (ش برگشته کندهاری)",namePashto:"ښ",sound:"/ʂ/",soundKandahari:"/ʂ/ (صدای ش برگشته)",soundOther:"/x/ یا /ʃ/ در گویش‌های دیگر",latinEquivalent:"ṣ̌",category:"unique",isUnique:!0,isKandahariSpecial:!0,examples:[{word:"ښځه",meaning:"زن",transliteration:"ṣ̌əza"},{word:"ښه",meaning:"خوب",transliteration:"ṣ̌a"}]},{id:"swad",letter:"ص",name:"ص",namePashto:"ص",sound:"/s/",latinEquivalent:"s",category:"basic",examples:[{word:"صبر",meaning:"صبر",transliteration:"sabr"}]},{id:"zwad",letter:"ض",name:"ض",namePashto:"ض",sound:"/z/",latinEquivalent:"z",category:"basic",examples:[{word:"ضرور",meaning:"ضروری",transliteration:"zarūr"}]},{id:"twe",letter:"ط",name:"ط",namePashto:"ط",sound:"/t/",latinEquivalent:"t",category:"basic",examples:[{word:"طالب",meaning:"دانشجو",transliteration:"tālib"}]},{id:"zwe",letter:"ظ",name:"ظ",namePashto:"ظ",sound:"/z/",latinEquivalent:"z",category:"basic",examples:[{word:"ظلم",meaning:"ظلم",transliteration:"zulm"}]},{id:"ayn",letter:"ع",name:"ع",namePashto:"ع",sound:"/ʔ/",latinEquivalent:"a",category:"basic",examples:[{word:"علم",meaning:"علم",transliteration:"ilm"}]},{id:"ghayn",letter:"غ",name:"غ",namePashto:"غ",sound:"/ɣ/",latinEquivalent:"gh",category:"basic",examples:[{word:"غر",meaning:"کوه",transliteration:"ghar"},{word:"غوښه",meaning:"گوشت",transliteration:"ghwəṣ̌a"}]},{id:"fe",letter:"ف",name:"ف",namePashto:"ف",sound:"/f/",latinEquivalent:"f",category:"basic",examples:[{word:"فکر",meaning:"فکر",transliteration:"fikr"}]},{id:"qaf",letter:"ق",name:"ق",namePashto:"ق",sound:"/q/",latinEquivalent:"q",category:"basic",examples:[{word:"قلم",meaning:"قلم",transliteration:"qalam"}]},{id:"kaf",letter:"ک",name:"ک",namePashto:"ک",sound:"/k/",latinEquivalent:"k",category:"basic",examples:[{word:"کور",meaning:"خانه",transliteration:"kor"},{word:"کتاب",meaning:"کتاب",transliteration:"kitāb"}]},{id:"gaf",letter:"ګ",name:"ګ (گ پښتو)",namePashto:"ګ",sound:"/ɡ/",latinEquivalent:"g",category:"unique",isUnique:!0,examples:[{word:"ګل",meaning:"گل",transliteration:"gul"},{word:"ګران",meaning:"عزیز",transliteration:"grān"}]},{id:"lam",letter:"ل",name:"ل",namePashto:"ل",sound:"/l/",latinEquivalent:"l",category:"basic",examples:[{word:"لار",meaning:"راه",transliteration:"lār"},{word:"لوی",meaning:"بزرگ",transliteration:"loy"}]},{id:"mim",letter:"م",name:"م",namePashto:"م",sound:"/m/",latinEquivalent:"m",category:"basic",examples:[{word:"مور",meaning:"مادر",transliteration:"mor"},{word:"مڼه",meaning:"سیب",transliteration:"maṇa"}]},{id:"nun",letter:"ن",name:"ن",namePashto:"ن",sound:"/n/",latinEquivalent:"n",category:"basic",examples:[{word:"نوم",meaning:"نام",transliteration:"nom"},{word:"نن",meaning:"امروز",transliteration:"nan"}]},{id:"Nun",letter:"ڼ",name:"ڼ (ن برگشته)",namePashto:"ڼ",sound:"/ɳ/",latinEquivalent:"ṇ",category:"unique",isUnique:!0,examples:[{word:"مڼه",meaning:"سیب",transliteration:"maṇa"},{word:"پاڼه",meaning:"برگ",transliteration:"pāṇa"}]},{id:"waw",letter:"و",name:"و",namePashto:"و",sound:"/w, u, o/",latinEquivalent:"w, u, o",category:"vowel",examples:[{word:"ورور",meaning:"برادر",transliteration:"wror"},{word:"وړ",meaning:"کوچک",transliteration:"waṛ"}]},{id:"he2",letter:"ه",name:"ه",namePashto:"ه",sound:"/h, a/",latinEquivalent:"h, a",category:"basic",examples:[{word:"هغه",meaning:"او",transliteration:"hagha"},{word:"هره",meaning:"هر",transliteration:"hara"}]},{id:"schwa",letter:"ۀ",name:"ۀ (شوا)",namePashto:"ۀ",sound:"/ə/",latinEquivalent:"ə",category:"vowel",examples:[{word:"کۀ",meaning:"اگر",transliteration:"kə"}]},{id:"ye",letter:"ی",name:"ی (یے)",namePashto:"ی",sound:"/j, i, ai, iː, ə/",soundEnglish:'y (as in "yes"), ee (as in "see"), ay (as in "say"), long-ee, schwa',latinEquivalent:"y, i, ay, ī, ə",category:"vowel",description:"The letter ی has 5 different types with different pronunciations depending on position and function in the word",types:[{type:1,name:"ی as initial consonant",sound:"/j/",englishSound:'y (as in "yes")',position:"Beginning of word",example:{word:"یو",meaning:"یک",transliteration:"yo",englishSound:'yo (like "yoke")'},description:"When ی appears at the start of a word, it functions as a consonant with a y-sound"},{type:2,name:"ی as final vowel (short)",sound:"/i/",englishSound:'ee (as in "see")',position:"End of word",example:{word:"ملی",meaning:"ملی",transliteration:"milli",englishSound:'mil-lee (like "silly")'},description:"When ی appears at the end of a word, it functions as a short vowel with an ee-sound"},{type:3,name:"ی as final vowel (diphthong)",sound:"/ai/ or /əi/",englishSound:'ay (as in "say")',position:"End of word after consonant",example:{word:"سړی",meaning:"مرد",transliteration:"saṛay",englishSound:'sar-ay (like "say")'},description:"When ی appears at the end after a consonant, it creates a diphthong sound (ay or əy)"},{type:4,name:"ی as long vowel",sound:"/iː/",englishSound:'long-ee (as in "tree")',position:"Middle or end of word",example:{word:"کی",meaning:"کی",transliteration:"kī",englishSound:'kee (like "tree")'},description:"When ی represents a long vowel, it has an extended ee-sound"},{type:5,name:"ی as schwa vowel",sound:"/ə/",englishSound:'uh (as in "about")',position:"Unstressed syllables",example:{word:"بچی",meaning:"بچه",transliteration:"bəchay",englishSound:"buh-chay"},description:"In unstressed syllables, ی can represent a schwa sound (ə)"}],kandahariNotes:"In Kandahari dialect, the retroflex sounds (ش/ښ) can vary. For example: راشه (rāsha) may be pronounced as راسه (rāsa), and ولارشه (walārsha) may be pronounced as ولارسه (walārsa). This shows dialectal variation in retroflex consonants.",examples:[{word:"یو",meaning:"یک",transliteration:"yo",englishSound:'yo (like "yoke")',type:1},{word:"سړی",meaning:"مرد",transliteration:"saṛay",englishSound:'sar-ay (like "say")',type:3},{word:"ملی",meaning:"ملی",transliteration:"milli",englishSound:'mil-lee (like "silly")',type:2},{word:"کی",meaning:"کی",transliteration:"kī",englishSound:'kee (like "tree")',type:4},{word:"بچی",meaning:"بچه",transliteration:"bəchay",englishSound:"buh-chay",type:5}]},{id:"e",letter:"ې",name:"ې",namePashto:"ې",sound:"/e/",latinEquivalent:"e",category:"vowel",examples:[{word:"ښځې",meaning:"زنان",transliteration:"ṣ̌əze"},{word:"ملګرې",meaning:"دوست (مونث)",transliteration:"malgəre"}]},{id:"əy",letter:"ۍ",name:"ۍ (مونث)",namePashto:"ۍ",sound:"/əi/",latinEquivalent:"əy",category:"vowel",examples:[{word:"ښځۍ",meaning:"زن",transliteration:"ṣ̌əzəy"},{word:"ډوډۍ",meaning:"نان",transliteration:"ḍoḍəy"}]}],rx=["ټ","ډ","ړ","ڼ","څ","ځ","ښ","ږ","ګ"];Xi.forEach(l=>{l.isUniqueToPashto=rx.includes(l.letter)});const wo={ښ:{kandahari:"/ʂ/ - ش برگشته (retroflex)",kabuli:"/x/ - خ",ghazni:"/ç/ - صدای میانی",quetta:"/ʃ/ - ش",description:'در کندهاری، نوک زبان را به سمت سقف دهان ببرید و صدای "ش" برگشته بدهید',descriptionPashto:'په کندهاري کې، د ژبې سر د خولې چت ته یوسئ او شاته تاوېدونکی "ش" غږ وکړئ'},ږ:{kandahari:"/ʐ/ - ژ برگشته (retroflex)",kabuli:"/ɡ/ - گ",ghazni:"/ʝ/ - صدای میانی",quetta:"/ʒ/ - ژ",description:'در کندهاری، نوک زبان را به سمت سقف دهان ببرید و صدای "ژ" برگشته بدهید',descriptionPashto:'په کندهاري کې، د ژبې سر د خولې چت ته یوسئ او شاته تاوېدونکی "ژ" غږ وکړئ'}};function ux(){const[l,c]=T.useState(null),[p,u]=T.useState("all"),d=Xi.filter(h=>p==="all"?!0:p==="unique"?h.isUnique:p==="kandahari"?h.isKandahariSpecial:h.category===p),m=[{id:"all",label:"همه",count:Xi.length},{id:"unique",label:"خاص پښتو",count:Xi.filter(h=>h.isUnique).length},{id:"kandahari",label:"کندهاری",count:Xi.filter(h=>h.isKandahariSpecial).length}];return o.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[o.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30",children:o.jsx(Eo,{className:"w-7 h-7 text-white"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:"الفبای پښتو"}),o.jsx("p",{className:"text-slate-400",children:"د پښتو الفبا - ۴۴ حرف با تمرکز بر گویش کندهاری"})]})]}),o.jsx("div",{className:"flex flex-wrap gap-2",children:m.map(h=>o.jsxs("button",{onClick:()=>u(h.id),className:`px-4 py-2 rounded-xl text-sm font-medium transition-all ${p===h.id?"bg-emerald-500 text-white shadow-md":"bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600"}`,children:[h.label," (",h.count,")"]},h.id))})]}),o.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-3",children:d.map(h=>o.jsxs("button",{onClick:()=>c(h),className:`relative bg-slate-800 rounded-xl p-4 shadow-lg border transition-all hover:shadow-xl hover:scale-105 ${h.isKandahariSpecial?"border-amber-500/50 bg-gradient-to-br from-amber-500/20 to-orange-500/20":h.isUnique?"border-emerald-500/50 bg-gradient-to-br from-emerald-500/20 to-green-500/20":"border-slate-700 hover:border-emerald-500/50"}`,children:[h.isKandahariSpecial&&o.jsx(wh,{className:"absolute top-1 left-1 w-4 h-4 text-amber-400"}),o.jsx("div",{className:"text-4xl font-bold text-slate-100 mb-1",children:h.letter}),o.jsx("div",{className:"text-xs text-slate-400 truncate",children:h.name})]},h.id))}),o.jsx("div",{className:"bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700",children:o.jsxs("div",{className:"flex flex-wrap gap-6 text-sm",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-4 h-4 rounded bg-gradient-to-br from-emerald-500/30 to-green-500/30 border border-emerald-500/50"}),o.jsx("span",{className:"text-slate-300",children:"حروف خاص پښتو (۹ حرف)"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-4 h-4 rounded bg-gradient-to-br from-amber-500/30 to-orange-500/30 border border-amber-500/50"}),o.jsx("span",{className:"text-slate-300",children:"تلفظ خاص کندهاری (ښ و ږ)"})]})]})}),l&&o.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:()=>c(null),children:o.jsx("div",{className:"bg-slate-800 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700",onClick:h=>h.stopPropagation(),children:o.jsxs("div",{className:"p-6",children:[o.jsxs("div",{className:"flex items-start justify-between mb-6",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`w-20 h-20 rounded-2xl flex items-center justify-center text-5xl font-bold ${l.isKandahariSpecial?"bg-gradient-to-br from-amber-500/30 to-orange-500/30 text-amber-400 border border-amber-500/50":l.isUnique?"bg-gradient-to-br from-emerald-500/30 to-green-500/30 text-emerald-400 border border-emerald-500/50":"bg-slate-700 text-slate-200 border border-slate-600"}`,children:l.letter}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl font-bold text-slate-100",children:l.name}),o.jsx("p",{className:"text-slate-400",children:l.namePashto})]})]}),o.jsx("button",{onClick:()=>c(null),className:"p-2 hover:bg-slate-700 rounded-xl",children:o.jsx(gu,{className:"w-6 h-6 text-slate-400"})})]}),o.jsxs("div",{className:"bg-slate-700/50 rounded-xl p-4 mb-4 border border-slate-600",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[o.jsx(tb,{className:"w-5 h-5 text-emerald-400"}),o.jsx("span",{className:"font-medium text-slate-200",children:"صدا"})]}),o.jsx("p",{className:"text-xl text-slate-100 font-mono",children:l.sound}),o.jsxs("p",{className:"text-sm text-slate-400 mt-1",children:["معادل لاتین: ",l.latinEquivalent]})]}),l.isKandahariSpecial&&wo[l.letter]&&o.jsxs("div",{className:"bg-amber-500/20 rounded-xl p-4 mb-4 border border-amber-500/30",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[o.jsx(Wg,{className:"w-5 h-5 text-amber-400"}),o.jsx("span",{className:"font-bold text-amber-300",children:"تلفظ کندهاری"})]}),o.jsxs("div",{className:"space-y-2 text-sm",children:[o.jsxs("p",{className:"text-slate-300",children:[o.jsx("span",{className:"font-medium text-amber-400",children:"کندهاری:"})," ",wo[l.letter].kandahari]}),o.jsxs("p",{className:"text-slate-300",children:[o.jsx("span",{className:"font-medium text-amber-400",children:"کابلی:"})," ",wo[l.letter].kabuli]}),o.jsx("p",{className:"text-slate-400 mt-3",children:wo[l.letter].description})]})]}),l.examples&&l.examples.length>0&&o.jsxs("div",{children:[o.jsx("h3",{className:"font-bold text-slate-200 mb-3",children:"مثال‌ها"}),o.jsx("div",{className:"space-y-2",children:l.examples.map((h,b)=>o.jsxs("div",{className:"flex items-center justify-between bg-slate-700/50 rounded-lg p-3 border border-slate-600",children:[o.jsx("span",{className:"text-xl font-bold text-emerald-400",children:h.word}),o.jsxs("div",{className:"text-left",children:[o.jsx("span",{className:"text-slate-300",children:h.meaning}),o.jsx("span",{className:"text-xs text-slate-500 block",children:h.transliteration})]})]},b))})]})]})})})]})}const cx={head:[{pashto:"سر",farsi:"سر",pronunciation:"sar"},{pashto:"مخ",farsi:"صورت",pronunciation:"makh"},{pashto:"سترګې",farsi:"چشم‌ها",pronunciation:"stərge"},{pashto:"سترګه",farsi:"چشم",pronunciation:"stərga"},{pashto:"غوږ",farsi:"گوش",pronunciation:"ghwaẓ̌"},{pashto:"غوږونه",farsi:"گوش‌ها",pronunciation:"ghwaẓ̌úna"},{pashto:"پوزه",farsi:"بینی",pronunciation:"póza"},{pashto:"خوله",farsi:"دهان",pronunciation:"khwla"},{pashto:"ژبه",farsi:"زبان",pronunciation:"zhəba"},{pashto:"غاښ",farsi:"دندان",pronunciation:"ghāṣ̌"},{pashto:"غاښونه",farsi:"دندان‌ها",pronunciation:"ghāṣ̌úna"},{pashto:"شونډې",farsi:"لب‌ها",pronunciation:"shwánḍe"},{pashto:"وریځې",farsi:"ابرو",pronunciation:"wrídze"},{pashto:"باڼه",farsi:"مژه",pronunciation:"bāṇa"},{pashto:"ږیره",farsi:"ریش",pronunciation:"ẓ̌ira"},{pashto:"بریتونه",farsi:"سبیل",pronunciation:"britúna"},{pashto:"ویښته",farsi:"مو",pronunciation:"wéṣ̌ta"},{pashto:"تندی",farsi:"پیشانی",pronunciation:"tandáy"},{pashto:"زنه",farsi:"چانه",pronunciation:"zəna"}],body:[{pashto:"غاړه",farsi:"گردن",pronunciation:"ghāṛa"},{pashto:"ږمنځ",farsi:"شانه",pronunciation:"ẓ̌mənz"},{pashto:"سینه",farsi:"سینه",pronunciation:"sína"},{pashto:"شا",farsi:"پشت/کمر",pronunciation:"shā"},{pashto:"خېټه",farsi:"شکم",pronunciation:"kheṭa"},{pashto:"نوم",farsi:"ناف",pronunciation:"nom"},{pashto:"ملا",farsi:"کمر",pronunciation:"mlā"}],limbs:[{pashto:"لاس",farsi:"دست",pronunciation:"lās"},{pashto:"لاسونه",farsi:"دست‌ها",pronunciation:"lāsúna"},{pashto:"ګوته",farsi:"انگشت",pronunciation:"gúta"},{pashto:"ګوتې",farsi:"انگشت‌ها",pronunciation:"gúte"},{pashto:"نوک",farsi:"ناخن",pronunciation:"nok"},{pashto:"څنګل",farsi:"آرنج",pronunciation:"tsangál"},{pashto:"مټ",farsi:"بازو",pronunciation:"maṭ"},{pashto:"پښه",farsi:"پا",pronunciation:"pṣ̌a"},{pashto:"پښې",farsi:"پاها",pronunciation:"pṣ̌e"},{pashto:"زنګون",farsi:"زانو",pronunciation:"zangún"},{pashto:"پونده",farsi:"پاشنه",pronunciation:"pwnda"},{pashto:"تلی",farsi:"کف پا",pronunciation:"taláy"}],internal:[{pashto:"زړه",farsi:"قلب",pronunciation:"zṛa"},{pashto:"سږی",farsi:"ریه",pronunciation:"sẓ̌áy"},{pashto:"اینه",farsi:"کبد/جگر",pronunciation:"ína"},{pashto:"معده",farsi:"معده",pronunciation:"mi'da"},{pashto:"وینه",farsi:"خون",pronunciation:"wína"},{pashto:"هډوکی",farsi:"استخوان",pronunciation:"haḍukáy"},{pashto:"پوست",farsi:"پوست",pronunciation:"post"}],sentences:[{pashto:"زما سر خوږیږي",farsi:"سرم درد می‌کند",pronunciation:"zmā sar khwẓ̌éẓ̌i"},{pashto:"زما خېټه خوږیږي",farsi:"شکمم درد می‌کند",pronunciation:"zmā kheṭa khwẓ̌éẓ̌i"},{pashto:"سترګې مې خوږیږي",farsi:"چشم‌هایم درد می‌کند",pronunciation:"stərge me khwẓ̌éẓ̌i"},{pashto:"لاسونه ومینځه",farsi:"دست‌هایت را بشور",pronunciation:"lāsúna wamíndza"},{pashto:"غاښونه مې خوږیږي",farsi:"دندان‌هایم درد می‌کند",pronunciation:"ghāṣ̌úna me khwẓ̌éẓ̌i"},{pashto:"زما پښه مات شوه",farsi:"پایم شکست",pronunciation:"zmā pṣ̌a māt shwa"}]},px={basic:[{number:1,pashto:"یو",farsi:"یک",pronunciation:"yo"},{number:2,pashto:"دوه",farsi:"دو",pronunciation:"dwa"},{number:3,pashto:"درې",farsi:"سه",pronunciation:"dre"},{number:4,pashto:"څلور",farsi:"چهار",pronunciation:"tsalór"},{number:5,pashto:"پنځه",farsi:"پنج",pronunciation:"pindzá"},{number:6,pashto:"شپږ",farsi:"شش",pronunciation:"shpaẓ̌"},{number:7,pashto:"اووه",farsi:"هفت",pronunciation:"owá"},{number:8,pashto:"اته",farsi:"هشت",pronunciation:"atá"},{number:9,pashto:"نهه",farsi:"نه",pronunciation:"nahá"},{number:10,pashto:"لس",farsi:"ده",pronunciation:"las"}],teens:[{number:11,pashto:"یوولس",farsi:"یازده",pronunciation:"yowólas"},{number:12,pashto:"دولس",farsi:"دوازده",pronunciation:"dwólas"},{number:13,pashto:"دیارلس",farsi:"سیزده",pronunciation:"dyārlas"},{number:14,pashto:"څوارلس",farsi:"چهارده",pronunciation:"tswarlas"},{number:15,pashto:"پنځلس",farsi:"پانزده",pronunciation:"pindzálas"},{number:16,pashto:"شپاړس",farsi:"شانزده",pronunciation:"shpāṛas"},{number:17,pashto:"اوولس",farsi:"هفده",pronunciation:"owólas"},{number:18,pashto:"اتلس",farsi:"هجده",pronunciation:"atlas"},{number:19,pashto:"نولس",farsi:"نوزده",pronunciation:"nolas"},{number:20,pashto:"شل",farsi:"بیست",pronunciation:"shəl"}],tens:[{number:10,pashto:"لس",farsi:"ده",pronunciation:"las"},{number:20,pashto:"شل",farsi:"بیست",pronunciation:"shəl"},{number:30,pashto:"دېرش",farsi:"سی",pronunciation:"dérsh"},{number:40,pashto:"څلوېښت",farsi:"چهل",pronunciation:"tsalwéṣ̌t"},{number:50,pashto:"پنځوس",farsi:"پنجاه",pronunciation:"pindzós"},{number:60,pashto:"شپېته",farsi:"شصت",pronunciation:"shpéta"},{number:70,pashto:"اویا",farsi:"هفتاد",pronunciation:"awyā"},{number:80,pashto:"اتیا",farsi:"هشتاد",pronunciation:"atyā"},{number:90,pashto:"نوي",farsi:"نود",pronunciation:"nawí"},{number:100,pashto:"سل",farsi:"صد",pronunciation:"sal"}],twenties:[{number:21,pashto:"یویشت",farsi:"بیست و یک",pronunciation:"yowísht"},{number:22,pashto:"دوه ویشت",farsi:"بیست و دو",pronunciation:"dwa wísht"},{number:23,pashto:"درې ویشت",farsi:"بیست و سه",pronunciation:"dre wísht"},{number:24,pashto:"څلور ویشت",farsi:"بیست و چهار",pronunciation:"tsalór wísht"},{number:25,pashto:"پنځه ویشت",farsi:"بیست و پنج",pronunciation:"pindzá wísht"}],large:[{number:100,pashto:"سل",farsi:"صد",pronunciation:"sal"},{number:200,pashto:"دوه سوه",farsi:"دویست",pronunciation:"dwa swa"},{number:1e3,pashto:"زر",farsi:"هزار",pronunciation:"zar"},{number:1e4,pashto:"لس زره",farsi:"ده هزار",pronunciation:"las zára"},{number:1e5,pashto:"سل زره",farsi:"صد هزار",pronunciation:"sal zára"},{number:1e6,pashto:"میلیون",farsi:"میلیون",pronunciation:"milyón"}],sentences:[{pashto:"زه پنځه کاله لرم",farsi:"من پنج سال دارم",pronunciation:"za pindzá kāla laram"},{pashto:"دا کتاب دوه سوه افغانۍ دی",farsi:"این کتاب دویست افغانی است",pronunciation:"dā kitāb dwa swa afghānəy day"},{pashto:"زما درې وروڼه دي",farsi:"من سه برادر دارم",pronunciation:"zmā dre wroṇa di"},{pashto:"ساعت څو ده؟",farsi:"ساعت چند است؟",pronunciation:"sā'at tso da?"},{pashto:"ساعت لس ده",farsi:"ساعت ده است",pronunciation:"sā'at las da"}]},fx={mainDishes:[{pashto:"ډوډۍ",farsi:"نان",pronunciation:"ḍoḍəy"},{pashto:"وریژې",farsi:"برنج",pronunciation:"wríže"},{pashto:"غوښه",farsi:"گوشت",pronunciation:"ghwṣ̌a"},{pashto:"مرغه",farsi:"مرغ",pronunciation:"murgha"},{pashto:"کباب",farsi:"کباب",pronunciation:"kabāb"},{pashto:"قورمه",farsi:"قورمه",pronunciation:"qorma"},{pashto:"پلو",farsi:"پلو",pronunciation:"paláw"},{pashto:"شوروا",farsi:"آش/سوپ",pronunciation:"shorwā"},{pashto:"منتو",farsi:"منتو",pronunciation:"mantú"},{pashto:"آشک",farsi:"آشک",pronunciation:"āshak"},{pashto:"بولانی",farsi:"بولانی",pronunciation:"bolāní"}],vegetables:[{pashto:"کچالو",farsi:"سیب‌زمینی",pronunciation:"kachāló"},{pashto:"بانجان",farsi:"بادنجان",pronunciation:"bānján"},{pashto:"مرچ",farsi:"فلفل",pronunciation:"mirch"},{pashto:"پیاز",farsi:"پیاز",pronunciation:"pyāz"},{pashto:"اوږه",farsi:"سیر",pronunciation:"wẓ̌a"},{pashto:"بادرنګ",farsi:"خیار",pronunciation:"bādrang"},{pashto:"رومی بانجان",farsi:"گوجه فرنگی",pronunciation:"rúmi bānján"},{pashto:"ګاجره",farsi:"هویج",pronunciation:"gājra"},{pashto:"شلغم",farsi:"شلغم",pronunciation:"shalgham"},{pashto:"پالک",farsi:"اسفناج",pronunciation:"pālak"},{pashto:"کرم",farsi:"کلم",pronunciation:"karam"}],fruits:[{pashto:"مڼه",farsi:"سیب",pronunciation:"maṇa"},{pashto:"انګور",farsi:"انگور",pronunciation:"angúr"},{pashto:"شفتالو",farsi:"هلو",pronunciation:"shaftāló"},{pashto:"زردالو",farsi:"زردآلو",pronunciation:"zardāló"},{pashto:"انار",farsi:"انار",pronunciation:"anār"},{pashto:"تربوز",farsi:"هندوانه",pronunciation:"tarbúz"},{pashto:"خربوزه",farsi:"خربزه",pronunciation:"kharbúza"},{pashto:"کیله",farsi:"موز",pronunciation:"kéla"},{pashto:"نارنج",farsi:"پرتقال",pronunciation:"nāranj"},{pashto:"لیمو",farsi:"لیمو",pronunciation:"limú"},{pashto:"توت",farsi:"توت",pronunciation:"tut"}],drinks:[{pashto:"اوبه",farsi:"آب",pronunciation:"óba"},{pashto:"چای",farsi:"چای",pronunciation:"chāy"},{pashto:"شیدې",farsi:"شیر",pronunciation:"shíde"},{pashto:"دوغ",farsi:"دوغ",pronunciation:"dogh"},{pashto:"شربت",farsi:"شربت",pronunciation:"sharbat"},{pashto:"قهوه",farsi:"قهوه",pronunciation:"qahwa"}],dairy:[{pashto:"شیدې",farsi:"شیر",pronunciation:"shíde"},{pashto:"مسکه",farsi:"کره",pronunciation:"máska"},{pashto:"پنیر",farsi:"پنیر",pronunciation:"panír"},{pashto:"ماست",farsi:"ماست",pronunciation:"māst"},{pashto:"قیماق",farsi:"سرشیر",pronunciation:"qaymāq"}],spices:[{pashto:"مالګه",farsi:"نمک",pronunciation:"mālga"},{pashto:"مرچ",farsi:"فلفل",pronunciation:"mirch"},{pashto:"زیره",farsi:"زیره",pronunciation:"zíra"},{pashto:"دارچینی",farsi:"دارچین",pronunciation:"dārchíni"},{pashto:"هېل",farsi:"هل",pronunciation:"hel"},{pashto:"زعفران",farsi:"زعفران",pronunciation:"za'farān"}],sentences:[{pashto:"زه وږی یم",farsi:"من گرسنه‌ام",pronunciation:"za waẓ̌áy yam"},{pashto:"زه تږی یم",farsi:"من تشنه‌ام",pronunciation:"za taẓ̌áy yam"},{pashto:"ډوډۍ چمتو ده؟",farsi:"غذا آماده است؟",pronunciation:"ḍoḍəy chamtó da?"},{pashto:"راځه ډوډۍ وخوره",farsi:"بیا غذا بخور",pronunciation:"rādza ḍoḍəy wakhwra"},{pashto:"ډېره خوندوره ده",farsi:"خیلی خوشمزه است",pronunciation:"ḍéra khwandwára da"},{pashto:"یو ګیلاس اوبه راکړه",farsi:"یک لیوان آب بده",pronunciation:"yo gilās óba rākṛa"},{pashto:"چای څښې؟",farsi:"چای می‌خوری؟",pronunciation:"chāy tsṣ̌e?"},{pashto:"مننه، ماړه شوم",farsi:"ممنون، سیر شدم",pronunciation:"manána, māṛa shwam"}]},dx={basic:[{pashto:"سور",farsi:"قرمز",pronunciation:"sur"},{pashto:"شین",farsi:"سبز/آبی",pronunciation:"shin"},{pashto:"تور",farsi:"سیاه",pronunciation:"tor"},{pashto:"سپین",farsi:"سفید",pronunciation:"spin"},{pashto:"ژیړ",farsi:"زرد",pronunciation:"zhiṛ"},{pashto:"نیلي",farsi:"آبی",pronunciation:"níli"},{pashto:"ارغواني",farsi:"بنفش",pronunciation:"arghawāní"},{pashto:"نارنجي",farsi:"نارنجی",pronunciation:"nāranji"},{pashto:"خړ",farsi:"خاکستری",pronunciation:"khaṛ"},{pashto:"نسواري",farsi:"قهوه‌ای",pronunciation:"naswāri"},{pashto:"ګلابي",farsi:"صورتی",pronunciation:"gulābí"}],shades:[{pashto:"تیاره سور",farsi:"قرمز تیره",pronunciation:"tyāra sur"},{pashto:"روښانه سور",farsi:"قرمز روشن",pronunciation:"roṣ̌āna sur"},{pashto:"تیاره شین",farsi:"سبز تیره",pronunciation:"tyāra shin"},{pashto:"روښانه شین",farsi:"سبز روشن",pronunciation:"roṣ̌āna shin"},{pashto:"آسماني",farsi:"آبی آسمانی",pronunciation:"āsmāní"},{pashto:"سره زرغون",farsi:"سبز طلایی",pronunciation:"sra zarghún"}],adjectives:[{pashto:"روښانه",farsi:"روشن",pronunciation:"roṣ̌āna"},{pashto:"تیاره",farsi:"تیره",pronunciation:"tyāra"},{pashto:"رنګین",farsi:"رنگارنگ",pronunciation:"rangín"},{pashto:"بې رنګه",farsi:"بی‌رنگ",pronunciation:"be ranga"}],sentences:[{pashto:"دا رنګ څه دی؟",farsi:"این چه رنگی است؟",pronunciation:"dā rang tsa day?"},{pashto:"دا سور دی",farsi:"این قرمز است",pronunciation:"dā sur day"},{pashto:"زما خوښ رنګ شین دی",farsi:"رنگ مورد علاقه‌ام سبز است",pronunciation:"zmā khwáṣ̌ rang shin day"},{pashto:"آسمان نیلي دی",farsi:"آسمان آبی است",pronunciation:"āsmān níli day"},{pashto:"واښه شین دي",farsi:"چمن سبز است",pronunciation:"wāṣ̌a shin di"},{pashto:"سپین کمیس راکړه",farsi:"پیراهن سفید بده",pronunciation:"spin kamís rākṛa"},{pashto:"تور موټر ښکلی دی",farsi:"ماشین سیاه قشنگ است",pronunciation:"tor moṭar ṣ̌kuláy day"}],nature:[{pashto:"آسمان نیلي دی",farsi:"آسمان آبی است",pronunciation:"āsmān níli day"},{pashto:"لمر ژیړ دی",farsi:"خورشید زرد است",pronunciation:"lmar zhiṛ day"},{pashto:"واښه شین دي",farsi:"علف سبز است",pronunciation:"wāṣ̌a shin di"},{pashto:"واوره سپینه ده",farsi:"برف سفید است",pronunciation:"wāwra spína da"},{pashto:"ګل سور دی",farsi:"گل قرمز است",pronunciation:"gul sur day"}]},hx={basic:[{infinitive:"کول",farsi:"کردن",pronunciation:"kawəl",present:"کوم",presentPronunciation:"kawəm",past:"وکړم",pastPronunciation:"wkṛam"},{infinitive:"تلل",farsi:"رفتن",pronunciation:"tlal",present:"ځم",presentPronunciation:"dzam",past:"لاړم",pastPronunciation:"lāṛam"},{infinitive:"راتلل",farsi:"آمدن",pronunciation:"rātlal",present:"راځم",presentPronunciation:"rādzam",past:"راغلم",pastPronunciation:"rāghlam"},{infinitive:"خوړل",farsi:"خوردن",pronunciation:"khwaṛal",present:"خورم",presentPronunciation:"khwram",past:"وخوړم",pastPronunciation:"wkhwaṛam"},{infinitive:"څښل",farsi:"نوشیدن",pronunciation:"tsṣ̌al",present:"څښم",presentPronunciation:"tsṣ̌am",past:"وڅښلم",pastPronunciation:"wtsṣ̌lam"},{infinitive:"لیدل",farsi:"دیدن",pronunciation:"lidal",present:"ګورم",presentPronunciation:"gwram",past:"ولیدم",pastPronunciation:"wlidam"},{infinitive:"اورېدل",farsi:"شنیدن",pronunciation:"awredal",present:"اورم",presentPronunciation:"awram",past:"واورېدم",pastPronunciation:"wawredam"},{infinitive:"ویل",farsi:"گفتن",pronunciation:"wayal",present:"وایم",presentPronunciation:"wāyam",past:"وویل",pastPronunciation:"wwayal"},{infinitive:"لوستل",farsi:"خواندن",pronunciation:"lwastal",present:"لولم",presentPronunciation:"lwlam",past:"ولوستم",pastPronunciation:"wlwastam"},{infinitive:"لیکل",farsi:"نوشتن",pronunciation:"likal",present:"لیکم",presentPronunciation:"likam",past:"ولیکم",pastPronunciation:"wlikam"}],movement:[{infinitive:"ناستل",farsi:"نشستن",pronunciation:"nāstal",present:"کېنم",presentPronunciation:"kenam"},{infinitive:"پاڅېدل",farsi:"بلند شدن",pronunciation:"pātseḍal",present:"پاڅېږم",presentPronunciation:"pātseẓ̌am"},{infinitive:"منډه وهل",farsi:"دویدن",pronunciation:"manḍa wahal",present:"منډه وهم",presentPronunciation:"manḍa waham"},{infinitive:"ګرځېدل",farsi:"گشتن",pronunciation:"gardzedal",present:"ګرځم",presentPronunciation:"gardzam"}],daily:[{infinitive:"ویده کېدل",farsi:"خوابیدن",pronunciation:"wída kedal",present:"ویده کېږم",presentPronunciation:"wída keẓ̌am"},{infinitive:"پاڅېدل",farsi:"بیدار شدن",pronunciation:"pātseḍal",present:"پاڅېږم",presentPronunciation:"pātseẓ̌am"},{infinitive:"مینځل",farsi:"شستن",pronunciation:"mindzal",present:"مینځم",presentPronunciation:"mindzam"},{infinitive:"اغوستل",farsi:"پوشیدن",pronunciation:"aghwastal",present:"اغوندم",presentPronunciation:"aghwandam"},{infinitive:"کار کول",farsi:"کار کردن",pronunciation:"kār kawəl",present:"کار کوم",presentPronunciation:"kār kawəm"}],emotional:[{infinitive:"خوښول",farsi:"دوست داشتن",pronunciation:"khwáṣ̌awəl",present:"خوښوم",presentPronunciation:"khwáṣ̌awəm"},{infinitive:"خندل",farsi:"خندیدن",pronunciation:"khandal",present:"خاندم",presentPronunciation:"khāndam"},{infinitive:"ژړل",farsi:"گریه کردن",pronunciation:"zhṛal",present:"ژاړم",presentPronunciation:"zhāṛam"},{infinitive:"ډارېدل",farsi:"ترسیدن",pronunciation:"ḍāredal",present:"ډارېږم",presentPronunciation:"ḍāreẓ̌am"}],essential:[{infinitive:"زدن",farsi:"زدن",pronunciation:"zadan",present:"زنم",presentPronunciation:"zanam",past:"وزدم",pastPronunciation:"wazadam"},{infinitive:"شستل",farsi:"شستن",pronunciation:"shastəl",present:"شونم",presentPronunciation:"shwanam",past:"وشستم",pastPronunciation:"washastam"},{infinitive:"ورکول",farsi:"دادن",pronunciation:"warkawəl",present:"ورکوم",presentPronunciation:"warkawəm",past:"ورکړ",pastPronunciation:"warkṛ"},{infinitive:"نیول",farsi:"گرفتن",pronunciation:"niyawəl",present:"نیسم",presentPronunciation:"nisam",past:"ونیول",pastPronunciation:"waniyawəl"},{infinitive:"ایستل",farsi:"ایستادن",pronunciation:"āystal",present:"ایسته‌ږم",presentPronunciation:"āysteẓ̌am",past:"ایسته",pastPronunciation:"āysta"},{infinitive:"ناستل",farsi:"نشستن",pronunciation:"nāstal",present:"کېنم",presentPronunciation:"kenam",past:"ناست",pastPronunciation:"nāst"}],sentences:[{pashto:"زه کور ته ځم",farsi:"من به خانه می‌روم",pronunciation:"za kor ta dzam"},{pashto:"هغه راغی",farsi:"او آمد",pronunciation:"hagha rāghay"},{pashto:"موږ ډوډۍ خورو",farsi:"ما غذا می‌خوریم",pronunciation:"mwẓ̌ ḍoḍəy khwrú"},{pashto:"ته څه کوې؟",farsi:"تو چه می‌کنی؟",pronunciation:"ta tsa kawe?"},{pashto:"زه کتاب لولم",farsi:"من کتاب می‌خوانم",pronunciation:"za kitāb lwlam"},{pashto:"هغه پښتو زده کوي",farsi:"او پښتو یاد می‌گیرد",pronunciation:"hagha pṣ̌to zda kawi"},{pashto:"زه ستړی یم",farsi:"من خسته‌ام",pronunciation:"za staṛáy yam"},{pashto:"راځه چای وڅښو",farsi:"بیا چای بنوشیم",pronunciation:"rādza chāy wtsṣ̌ú"}],conjugation:{verb:"کول",meaning:"کردن",present:[{person:"زه",form:"کوم",pronunciation:"kawəm"},{person:"ته",form:"کوې",pronunciation:"kawe"},{person:"هغه",form:"کوي",pronunciation:"kawi"},{person:"موږ",form:"کوو",pronunciation:"kawú"},{person:"تاسو",form:"کوئ",pronunciation:"kawəy"},{person:"هغوی",form:"کوي",pronunciation:"kawi"}],past:[{person:"زه",form:"وکړم",pronunciation:"wkṛam"},{person:"ته",form:"وکړې",pronunciation:"wkṛe"},{person:"هغه",form:"وکړ",pronunciation:"wkṛ"},{person:"موږ",form:"وکړو",pronunciation:"wkṛú"},{person:"تاسو",form:"وکړئ",pronunciation:"wkṛəy"},{person:"هغوی",form:"وکړل",pronunciation:"wkṛal"}]}},mx={formal:[{pashto:"سلام علیکم",farsi:"سلام علیکم",pronunciation:"salām alaykum",response:"وعلیکم السلام",responsePronunciation:"wa alaykum as-salām",usage:"برای همه موقعیت‌ها مناسب است"},{pashto:"ستړی مه شئ",farsi:"خسته نباشید (رسمی)",pronunciation:"staṛáy ma shey",response:"تاسو هم ستړي مه شئ",responsePronunciation:"tāso ham staṛáy ma shey",usage:"برای بزرگترها و افراد رسمی"},{pashto:"حال مو څنګه دی؟",farsi:"حالتان چطور است؟",pronunciation:"hāl mo tsanga day?",response:"الحمدلله ښه یم، مننه",responsePronunciation:"alhamdulillāh ṣ̌a yam, manána",usage:"احوالپرسی رسمی"},{pashto:"خدای پامان",farsi:"خداحافظ",pronunciation:"khudāy pāmān",response:"په مخه دې ښه",responsePronunciation:"pa makha de ṣ̌a",usage:"خداحافظی رسمی"},{pashto:"تشریف راوړئ",farsi:"بفرمایید (دعوت)",pronunciation:"tashríf rāwṛey",usage:"دعوت کردن رسمی"}],informal:[{pashto:"سلام",farsi:"سلام",pronunciation:"salām",usage:"برای دوستان و همسالان"},{pashto:"ستړی مه شې",farsi:"خسته نباشی",pronunciation:"staṛáy ma she",response:"ته هم ستړی مه شې",responsePronunciation:"ta ham staṛáy ma she",usage:"برای دوستان و کوچکترها"},{pashto:"څنګه یې؟",farsi:"چطوری؟",pronunciation:"tsanga ye?",response:"ښه یم، ته څنګه یې؟",responsePronunciation:"ṣ̌a yam, ta tsanga ye?",usage:"احوالپرسی دوستانه"},{pashto:"څه حال دی؟",farsi:"چه حالی؟",pronunciation:"tsa hāl day?",usage:"احوالپرسی خودمانی"},{pashto:"ښه یې؟",farsi:"خوبی؟",pronunciation:"ṣ̌a ye?",usage:"سوال کوتاه"},{pashto:"بیا وینو",farsi:"بعداً می‌بینمت",pronunciation:"byā wino",usage:"خداحافظی دوستانه"}],comparison:[{context:"سلام کردن",formal:{pashto:"سلام علیکم",farsi:"سلام علیکم"},informal:{pashto:"سلام",farsi:"سلام"}},{context:"خسته نباشی",formal:{pashto:"ستړی مه شئ",farsi:"خسته نباشید"},informal:{pashto:"ستړی مه شې",farsi:"خسته نباشی"}},{context:"چطوری؟",formal:{pashto:"حال مو څنګه دی؟",farsi:"حالتان چطور است؟"},informal:{pashto:"څنګه یې؟",farsi:"چطوری؟"}},{context:"خوبم",formal:{pashto:"الحمدلله ښه یم",farsi:"الحمدلله خوبم"},informal:{pashto:"ښه یم",farsi:"خوبم"}},{context:"خداحافظ",formal:{pashto:"خدای پامان",farsi:"خداحافظ"},informal:{pashto:"بیا وینو",farsi:"بعداً می‌بینمت"}},{context:"بفرمایید",formal:{pashto:"تشریف راوړئ",farsi:"بفرمایید"},informal:{pashto:"راشه",farsi:"بیا"}}],howAreYou:[{pashto:"څنګه یې؟",farsi:"چطوری؟",pronunciation:"tsanga ye?",type:"غیررسمی"},{pashto:"څنګه یاست؟",farsi:"چطور هستید؟",pronunciation:"tsanga yāst?",type:"رسمی"},{pashto:"حال مو څنګه دی؟",farsi:"حالتان چطور است؟",pronunciation:"hāl mo tsanga day?",type:"رسمی"},{pashto:"روغ جوړ یې؟",farsi:"سالم هستی؟",pronunciation:"rogh joṛ ye?",type:"غیررسمی"},{pashto:"کورنۍ څنګه ده؟",farsi:"خانواده چطور است؟",pronunciation:"koranəy tsanga da?",type:"هر دو"},{pashto:"ماشومان ښه دي؟",farsi:"بچه‌ها خوبند؟",pronunciation:"māshomān ṣ̌a di?",type:"هر دو"}],responses:[{pashto:"ښه یم، مننه",farsi:"خوبم، ممنون",pronunciation:"ṣ̌a yam, manána",type:"غیررسمی"},{pashto:"الحمدلله ښه یم",farsi:"الحمدلله خوبم",pronunciation:"alhamdulillāh ṣ̌a yam",type:"رسمی"},{pashto:"ډېر ښه یم",farsi:"خیلی خوبم",pronunciation:"ḍer ṣ̌a yam",type:"غیررسمی"},{pashto:"ته څنګه یې؟",farsi:"تو چطوری؟",pronunciation:"ta tsanga ye?",type:"غیررسمی"},{pashto:"تاسو څنګه یاست؟",farsi:"شما چطور هستید؟",pronunciation:"tāso tsanga yāst?",type:"رسمی"},{pashto:"ټول ښه دي، الحمدلله",farsi:"همه خوبند، الحمدلله",pronunciation:"ṭol ṣ̌a di, alhamdulillāh",type:"هر دو"}],timeOfDay:[{pashto:"سهار مو په خیر",farsi:"صبح بخیر",pronunciation:"sahār mo pa khayr",type:"رسمی"},{pashto:"سهار دې په خیر",farsi:"صبحت بخیر",pronunciation:"sahār de pa khayr",type:"غیررسمی"},{pashto:"ماښام مو په خیر",farsi:"عصر بخیر",pronunciation:"māṣ̌ām mo pa khayr",type:"رسمی"},{pashto:"شپه مو په خیر",farsi:"شب بخیر",pronunciation:"shpa mo pa khayr",type:"رسمی"},{pashto:"شپه دې په خیر",farsi:"شبت بخیر",pronunciation:"shpa de pa khayr",type:"غیررسمی"}],thanksAndApology:[{pashto:"مننه",farsi:"ممنون",pronunciation:"manána",type:"غیررسمی"},{pashto:"ډېره مننه",farsi:"خیلی ممنون",pronunciation:"ḍera manána",type:"هر دو"},{pashto:"ستاسو مننه",farsi:"از شما ممنون",pronunciation:"stāso manána",type:"رسمی"},{pashto:"هیڅ نه",farsi:"خواهش می‌کنم",pronunciation:"hits na",type:"غیررسمی"},{pashto:"بخښنه غواړم",farsi:"ببخشید",pronunciation:"bakhṣ̌əna ghwāṛam",type:"رسمی"},{pashto:"بخښه",farsi:"ببخش",pronunciation:"bakhṣ̌a",type:"غیررسمی"},{pashto:"معذرت غواړم",farsi:"معذرت می‌خواهم",pronunciation:"ma'zarat ghwāṛam",type:"رسمی"}],welcome:[{pashto:"په خیر راغلاست",farsi:"خوش آمدید",pronunciation:"pa khayr rāghlāst",type:"رسمی"},{pashto:"په خیر راغلې",farsi:"خوش آمدی",pronunciation:"pa khayr rāghle",type:"غیررسمی"},{pashto:"تشریف راوړئ",farsi:"بفرمایید",pronunciation:"tashríf rāwṛey",type:"رسمی"},{pashto:"راشه",farsi:"بیا",pronunciation:"rāsha",type:"غیررسمی"},{pashto:"کور دې آباد",farsi:"خانه‌ات آباد",pronunciation:"kor de ābād",type:"غیررسمی"},{pashto:"کور مو آباد",farsi:"خانه‌تان آباد",pronunciation:"kor mo ābād",type:"رسمی"}],sampleConversation:[{speaker:"A",pashto:"سلام علیکم!",farsi:"سلام علیکم!"},{speaker:"B",pashto:"و علیکم السلام! ستړی مه شې",farsi:"و علیکم السلام! خسته نباشی"},{speaker:"A",pashto:"ته هم ستړی مه شې. څنګه یې؟",farsi:"تو هم خسته نباشی. چطوری؟"},{speaker:"B",pashto:"الحمدلله ښه یم. ته څنګه یې؟",farsi:"الحمدلله خوبم. تو چطوری؟"},{speaker:"A",pashto:"زه هم ښه یم، مننه. کورنۍ ښه ده؟",farsi:"من هم خوبم، ممنون. خانواده خوب است؟"},{speaker:"B",pashto:"ټول ښه دي، الحمدلله. ستاسو کورنۍ؟",farsi:"همه خوبند، الحمدلله. خانواده شما؟"},{speaker:"A",pashto:"هغوی هم ښه دي. خو اوس باید لاړ شم",farsi:"آنها هم خوبند. ولی حالا باید بروم"},{speaker:"B",pashto:"ښه، خدای پامان!",farsi:"خوب، خداحافظ!"},{speaker:"A",pashto:"په مخه دې ښه، بیا وینو!",farsi:"به سلامت، بعداً می‌بینمت!"}],culturalNote:{pashto:"په پښتو کې «ستړی مه شې» یو ډېر مهم سلام دی. دا د درناوي او مینې نښه ده. کله چې یو څوک کار کوي یا له سفره راځي، پښتانه ورته وایي «ستړی مه شې». جواب یې «ته هم ستړی مه شې» یا «مننه» دی.",farsi:"در پښتو «ستړی مه شې» (خسته نباشی) یک سلام بسیار مهم است. این نشانه احترام و محبت است. وقتی کسی کار می‌کند یا از سفر برمی‌گردد، پښتون‌ها به او می‌گویند «ستړی مه شې». جواب آن «ته هم ستړی مه شې» (تو هم خسته نباشی) یا «مننه» (ممنون) است."}},yx={common:[{pashto:"یار",farsi:"رفیق/دوست",pronunciation:"yār",usage:"برای صدا زدن دوست",example:"یاره، راځه!",exampleFarsi:"رفیق، بیا!"},{pashto:"ورور",farsi:"برادر (برای دوست)",pronunciation:"wror",usage:"برای صدا زدن دوست صمیمی",example:"وروره، څه کوې؟",exampleFarsi:"برادر، چه می‌کنی؟"},{pashto:"ملګری",farsi:"رفیق",pronunciation:"malgáray",usage:"دوست صمیمی",example:"زما ملګری دی",exampleFarsi:"رفیق من است"},{pashto:"بس کړه",farsi:"بس کن",pronunciation:"bas kṛa",usage:"وقتی می‌خواهی کسی کاری را متوقف کند",example:"بس کړه، ډېر شو",exampleFarsi:"بس کن، زیاد شد"},{pashto:"چپ شه",farsi:"ساکت شو",pronunciation:"chup sha",usage:"غیررسمی برای ساکت شدن",example:"چپ شه، غږ مه کوه",exampleFarsi:"ساکت شو، صدا نکن"}],exclamations:[{pashto:"واه واه!",farsi:"عالی!/چه خوب!",pronunciation:"wāh wāh!",usage:"برای تعریف و تمجید"},{pashto:"افسوس!",farsi:"افسوس!/حیف!",pronunciation:"afsós!",usage:"برای ابراز تأسف"},{pashto:"ای خدایه!",farsi:"ای خدا!",pronunciation:"ay khudāya!",usage:"برای تعجب یا ناراحتی"},{pashto:"ماشاالله!",farsi:"ماشاالله!",pronunciation:"māshāallāh!",usage:"برای تعریف و دور کردن چشم بد"},{pashto:"انشاالله",farsi:"انشاالله",pronunciation:"inshāallāh",usage:"برای آینده و امید"},{pashto:"توبه!",farsi:"توبه!/عجب!",pronunciation:"tawba!",usage:"برای تعجب یا ناباوری"}],kandahariSpecific:[{pashto:"ښه خو",farsi:"خوب دیگه",pronunciation:"ṣ̌a kho",usage:"برای پایان دادن به بحث یا موافقت"},{pashto:"څه وشول؟",farsi:"چه شد؟",pronunciation:"tsa wshwal?",usage:"پرسیدن درباره اتفاق"},{pashto:"هیڅ نه",farsi:"هیچی نه",pronunciation:"hets na",usage:"جواب منفی"},{pashto:"ولې نه؟",farsi:"چرا نه؟",pronunciation:"wale na?",usage:"سوال کردن"},{pashto:"کوم خبره؟",farsi:"چه خبر؟",pronunciation:"kum khabara?",usage:"پرسیدن خبر"}],friendly:[{pashto:"زړه مې خوښ شو",farsi:"خوشحال شدم",pronunciation:"zṛa me khwáṣ̌ sho",usage:"ابراز خوشحالی"},{pashto:"ستا مخ ته",farsi:"به خاطر تو",pronunciation:"stā makh ta",usage:"احترام گذاشتن"},{pashto:"خدای دې مل شه",farsi:"خدا همراهت باشد",pronunciation:"khudāy de mal sha",usage:"دعای خیر"},{pashto:"ژوند دې اوږد شه",farsi:"عمرت دراز باشد",pronunciation:"zhwand de wẓ̌d sha",usage:"دعای خیر"}],negative:[{pashto:"لاړ شه",farsi:"برو",pronunciation:"lāṛ sha",usage:"گفتن به کسی که برود (می‌تواند بی‌ادبانه باشد)"},{pashto:"پرېږده",farsi:"ولش کن",pronunciation:"preẓ̌da",usage:"رها کردن موضوع"},{pashto:"ستړی کوې",farsi:"خسته می‌کنی",pronunciation:"staṛáy kawe",usage:"وقتی کسی اذیت می‌کند"}],proverbs:[{pashto:"چې اوبه تېرې شي، پل جوړوي",farsi:"وقتی آب رفت، پل می‌سازد",meaning:"کار از کار گذشته",pronunciation:"che óba tére shi, pul joṛawi"},{pashto:"یو ګل سره پسرلی نه راځي",farsi:"با یک گل بهار نمی‌آید",meaning:"یک نفر کافی نیست",pronunciation:"yo gul sara psarláy na rādzi"},{pashto:"چې زړه کې وي، په مخ کې ښکاري",farsi:"آنچه در دل است، در صورت پیداست",meaning:"احساسات پنهان نمی‌مانند",pronunciation:"che zṛa ke wi, pa makh ke ṣ̌kāri"},{pashto:"د خپل کور ډوډۍ خوږه ده",farsi:"نان خانه خودت شیرین است",meaning:"خانه خود بهتر است",pronunciation:"da khpal kor ḍoḍəy khwẓ̌a da"}],sampleConversation:[{speaker:"A",pashto:"یاره، څه کوې؟",farsi:"رفیق، چه می‌کنی؟"},{speaker:"B",pashto:"هیڅ نه، ناست یم",farsi:"هیچی، نشستم"},{speaker:"A",pashto:"راځه بازار ته لاړ شو",farsi:"بیا بریم بازار"},{speaker:"B",pashto:"ولې؟ څه کار لرې؟",farsi:"چرا؟ چه کار داری؟"},{speaker:"A",pashto:"یو څه اخیستل غواړم",farsi:"یه چیزی می‌خوام بخرم"},{speaker:"B",pashto:"ښه خو، لاړ شه",farsi:"خوب دیگه، بریم"},{speaker:"A",pashto:"واه واه، ډېره مننه وروره",farsi:"عالی، خیلی ممنون برادر"}]},Da={shopping:{title:"در شاه‌بازار - خرید لباس",titlePashto:"په شاه‌بازار کې - پېرود",description:"چانه زدن عمیق در بازار شاه‌بازار کندهار - با اصطلاحات محلی و روپۍ",dialogue:[{speaker:"پېرودونکی (مشتري)",pashto:"سلام علیکم اکا! ستړی مه شې، په خیر اوسې.",farsi:"سلام علیکم عمو! خسته نباشی، سلامت باشی."},{speaker:"دوکاندار",pashto:"و علیکم السلام روره! په خیر راغلې. راشه کېنه، چای وڅښه!",farsi:"و علیکم السلام برادر! خوش آمدی. بیا بشین، چای بنوش!"},{speaker:"پېرودونکی",pashto:"کور دې ودان. دا کندهاري کمیسونه په څو دي؟ بیه یې څه ده؟",farsi:"خانه‌ات آباد. این پیراهن‌های کندهاری چند هستند؟ قیمتش چیست؟"},{speaker:"دوکاندار",pashto:"دا بیخي نوي مالونه دي، ستا لپاره په دوه زره (۲۰۰۰) روپۍ.",farsi:"این‌ها کاملاً جنس‌های جدید هستند، برای تو به دو هزار روپیه."},{speaker:"پېرودونکی",pashto:"اوه اکا! حیران یم روره. دا خو ډېر ګران دي. په نورو دوکانونو کې ارزانه دي.",farsi:"اوه عمو! متعجب شدم. این که خیلی گران است. در دیگر دکان‌ها ارزان‌تر است."},{speaker:"دوکاندار",pashto:"نه روره، دا اصلي ګنډل دي. وګوره دا تکمه او ټوکر یې بیخي فرق لري.",farsi:"نه برادر، این گلدوزی اصل است. ببین این دکمه و پارچه‌اش کاملاً فرق دارد."},{speaker:"پېرودونکی",pashto:"پوهېږم اکا، خو یو څه جوړ را سره وکړه. زه مېلمه یم، لږ مراعات مې وکړه.",farsi:"می‌فهمم عمو، اما کمی با من راه بیا. من مهمان هستم، کمی مراعاتم را بکن."},{speaker:"دوکاندار",pashto:"ښه روره، ستا د خاطره مې زر اته سوه (۱۸۰۰) روپۍ کړه. آخري نرخ دی.",farsi:"خوب برادر، به خاطر تو هزار و هشتصد روپیه کردم. آخرین قیمت است."},{speaker:"پېرودونکی",pashto:"والله لا هم زیاته ده. په زر پنځه سوه (۱۵۰۰) یې نه راکوې؟ خیر دی اکا.",farsi:"والله باز هم زیاد است. به هزار و پانصد نمی‌دهی؟ عیبی ندارد عمو."},{speaker:"دوکاندار",pashto:"ټینګ مه نیسه روره! په ما تاوان دی. خو ستا خوشحالي مې بد نه راځي، واخله په زر اووه سوه.",farsi:"سخت نگیر برادر! برای من ضرر است. اما خوشحالی تو را دوست دارم، بگیر به ۱۷۰۰."},{speaker:"پېرودونکی",pashto:"ښه، زر شپږ سوه یې کړه چې هم ته نفع وکړې او هم زه. دا دی پیسې نغدې دي.",farsi:"خوب، ۱۶۰۰ کن که هم تو سود کنی هم من. این هم پول نقد است."},{speaker:"دوکاندار",pashto:"ښه روره، مبارک دې شه! تېر به شو. دا یې واخله، بکس کې یې واچوم؟",farsi:"خوب برادر، مبارکت باشد! گذشت می‌کنیم. بگیرش، توی کیسه بگذارم؟"},{speaker:"پېرودونکی",pashto:"هو اکا، مننه. کور دې ودان، بیا به هم درځم انشاالله.",farsi:"بله عمو، ممنون. خانه‌ات آباد، باز هم می‌آیم ان‌شاءالله."},{speaker:"دوکاندار",pashto:"بیا راشه، په مخه دې ښه روره!",farsi:"باز بیا، راهت بخیر برادر!"}],vocabulary:[{pashto:"روپۍ",farsi:"پول (واحد رایج در قندهار)",pronunciation:"Rope"},{pashto:"اکا",farsi:"عمو (خطاب محترمانه)",pronunciation:"Akā"},{pashto:"حیران یم",farsi:"متعجبم (از قیمت)",pronunciation:"Hayrān yam"},{pashto:"ټینګ مه نیسه",farsi:"سخت نگیر",pronunciation:"Ting ma nīsa"}],usefulPhrases:[{pashto:"جوړ را سره وکړه",farsi:"با من راه بیا / تخفیف بده",pronunciation:"Jor rā sara wakṛa"},{pashto:"په ما تاوان دی",farsi:"برای من ضرر است",pronunciation:"Pa mā tāwān day"}]},restaurant:{title:"در هوټل کندهاری - سفارش غذا",titlePashto:"په هوټل کې - د ډوډۍ فرمایش",description:"سفارش کامل غذا در هوټل کندهاری - با تمام جزئیات و تعارفات",dialogue:[{speaker:"خدمتګار (ګارسن)",pashto:"سلام علیکم صاحبانو! په خیر راغلاست، تشریف راوړئ، دا ښه ځای دی.",farsi:"سلام علیکم آقایان! خوش آمدید، تشریف بیاورید، اینجا جای خوبی است."},{speaker:"مشتري",pashto:"و علیکم السلام ورور. مننه، اوبه راوړه چې تږی یم، بیا مینو راښیه.",farsi:"و علیکم السلام برادر. ممنون، آب بیار که تشنه هستم، بعد منو را نشان بده."},{speaker:"خدمتګار",pashto:"په سترګو صاحب! نن زموږ کابلي پلو او چپلي کباب بیخي تازه دي. غواړئ؟",farsi:"به روی چشم آقا! امروز پلو کابلی و چپلی کباب ما کاملاً تازه هستند. می‌خواهید؟"},{speaker:"مشتري",pashto:"پلو دې غوښه ډېره لري؟ او کباب مو تند دی که څنګه؟",farsi:"پلوتان گوشت زیاد دارد؟ و کبابتان تند است یا چطور؟"},{speaker:"خدمتګار",pashto:"پلو مو بیخي پاخه غوښه لري. کباب هم ستا په خوښه، که مرچ غواړې زیات یې کړم.",farsi:"پلو ما کاملاً گوشت پخته دارد. کباب هم به میل شما، اگر فلفل می‌خواهید زیادش کنم."},{speaker:"مشتري",pashto:"نه، بې مرچ یې راوړه. یو پلیټ پلو او دوه دانې کباب. سلاد هم لرئ؟",farsi:"نه، بدون فلفل بیار. یک بشقاب پلو و دو تا کباب. سالاد هم دارید؟"},{speaker:"خدمتګار",pashto:"هو صاحب، تازه باکولي (بامیه) او سلاد دواړه لرو. کوم یو راوړم؟",farsi:"بله آقا، بامیه تازه و سالاد هر دو را داریم. کدام را بیاورم؟"},{speaker:"مشتري",pashto:"دواړه راوړه. اوبه سړې وي، یخ هم پکی واچوه.",farsi:"هر دو را بیاور. آب سرد باشد، یخ هم تویش بینداز."},{speaker:"خدمتګار",pashto:"ډوډۍ تیاره ده صاحب. نوش جان وشي! نور څه خدمت وکړم؟",farsi:"غذا آماده است آقا. نوش جان باشد! دیگر چه خدمتی بکنم؟"},{speaker:"مشتري",pashto:"واه واه! لاس دې صفا، بیخي مزه داره وه. شین چای مو پاخه دی؟",farsi:"واه واه! دستت درد نکند، کاملاً مزه‌دار بود. چای سبزتان دم کشیده است؟"},{speaker:"خدمتګار",pashto:"هو صاحب، اوس دم شوی دی. چاکلیټ هم ورسره راوړم؟",farsi:"بله آقا، همین الان دم کشیده. شکلات هم باهاش بیاورم؟"},{speaker:"مشتري",pashto:"هو، راوړه یې. حساب څومره شو ورور؟",farsi:"بله، بیاورش. حساب چقدر شد برادر؟"},{speaker:"خدمتګار",pashto:"ټول سلاد او چای سره اته سوه (۸۰۰) روپۍ شول صاحب.",farsi:"همه با سالاد و چای هشتصد روپیه شد آقا."},{speaker:"مشتري",pashto:"دا زر واخله، باقي ستا. ډېره مننه له ښه خدمت نه.",farsi:"این هزار را بگیر، باقی مال تو. خیلی ممنون از خدمت خوبت."},{speaker:"خدمتګار",pashto:"خدای دې کامیاب کړه صاحب! بیا تشریف راوړئ.",farsi:"خدا موفقت کند آقا! باز تشریف بیاورید."}],vocabulary:[{pashto:"وږی یم",farsi:"گرسنه هستم",pronunciation:"Wažay yam"},{pashto:"تنده مې ده",farsi:"تشنه هستم",pronunciation:"Tanda me da"},{pashto:"باکولي",farsi:"بامیه (خورشت)",pronunciation:"Bākuli"},{pashto:"پاخه",farsi:"پخته / رسیده",pronunciation:"Pākha"}],usefulPhrases:[{pashto:"لاس دې صفا",farsi:"دستت درد نکند / هنرمندانه بود",pronunciation:"Lās de safā"},{pashto:"بیا تشریف راوړئ",farsi:"باز تشریف بیاورید",pronunciation:"Byā tashrīf rāwṛay"}]},introduction:{title:"معرفی و احوالپرسی گرم",titlePashto:"پېژندنه او توده ستړې مشې",description:"زنجیره کامل و سنتی احوالپرسی کندهاری بین دو نفر",dialogue:[{speaker:"احمد",pashto:"سلام علیکم! ستړی مه شې، په خیر اوسې.",farsi:"سلام علیکم! خسته نباشی، سلامت باشی."},{speaker:"محمود",pashto:"و علیکم السلام! په خیر راغلې، ته هم ستړی مه شې. په سترګو راغلې.",farsi:"و علیکم السلام! خوش آمدی، تو هم خسته نباشی. خیلی خوش آمدی."},{speaker:"احمد",pashto:"څنګه یې؟ جوړ یې؟ شکر دی جوړ یې؟ کار او بار څنګه دی؟",farsi:"چطوری؟ سالمی؟ شکر است سالمی؟ کسب و کارت چطور است؟"},{speaker:"محمود",pashto:"الحمدلله، شکر دی. ډېر جوړ یم. ته څنګه یې؟ کورنۍ روغه ده؟ ماشومان ټول روغ دي؟",farsi:"الحمدلله، شکر است. خیلی سالمم. تو چطوری؟ خانواده سلامت است؟ بچه‌ها همه خوبند؟"},{speaker:"احمد",pashto:"ټول ښه دي، تاته دعا کوي. شکر دی چې ومې لیدې. زما نوم احمد دی.",farsi:"همه خوبند، به تو دعا می‌کنند. شکر است که دیدمت. اسم من احمد است."},{speaker:"محمود",pashto:"خوشحاله شوم احمد جانه! زه محمود یم. ته اصلاً له کومه ځایه یې؟",farsi:"خوشحال شدم احمد جان! من محمود هستم. تو اصلاً از کجا هستی؟"},{speaker:"احمد",pashto:"زه اصلاً د ارغنداب یم، خو اوس په شهر (قندهار) کې اوسیږم. ته؟",farsi:"من اصلاً از ارغنداب هستم، اما حالا در شهر (قندهار) زندگی می‌کنم. تو؟"},{speaker:"محمود",pashto:"زه هم د زړې شهر والا یم. په کومه برخه کې کار کوې؟",farsi:"من هم اهل شهر کهنه هستم. در کدام بخش کار می‌کنی؟"},{speaker:"احمد",pashto:"زه په پوهنتون کې محصل یم، د اقتصاد په پوهنځی کې.",farsi:"من در دانشگاه دانشجو هستم، در دانشکده اقتصاد."},{speaker:"محمود",pashto:"ماشاءالله! ډېر ښه. یو ورځ حتماً موږ ته راځه، چای به سره وڅښو.",farsi:"ماشاءالله! خیلی خوب. یک روز حتماً پیش ما بیا، با هم چای بخوریم."},{speaker:"احمد",pashto:"په سترګو روره، کور دې ودان. بیا به حتماً سره ګورو.",farsi:"به روی چشم برادر، خانه‌ات آباد. باز حتماً همدیگر را می‌بینیم."},{speaker:"محمود",pashto:"ښه احمد جانه، خدای پامان! په مخه دې ښه.",farsi:"خوب احمد جان، خداحافظ! راهت بخیر."},{speaker:"احمد",pashto:"خدای مو په امان، په خیر اوسې.",farsi:"خدا به همراهتان، سلامت باشی."}],vocabulary:[{pashto:"ستړی مه شې",farsi:"خسته نباشی (سلام رایج)",pronunciation:"Staṛay ma she"},{pashto:"په سترګو راغلې",farsi:"خیلی خوش آمدی (روی چشم آمدی)",pronunciation:"Pa stargo rāghle"},{pashto:"جوړ یې؟",farsi:"خوبی؟ / سالمی؟",pronunciation:"Joṛ ye?"},{pashto:"اوسیږم",farsi:"زندگی می‌کنم",pronunciation:"Osīžam"}],usefulPhrases:[{pashto:"خوشحاله شوم",farsi:"خوشحال شدم (از دیدارت)",pronunciation:"Khoshhāla shwam"},{pashto:"بیا به سره ګورو",farsi:"باز همدیگر را می‌بینیم",pronunciation:"Byā ba sara goro"}]},taxi:{title:"در تاکسی و آدرس",titlePashto:"په ټکسي کې - سفر",description:"گرفتن تاکسی در کندهار به مقصد مدد خان چوک - با جزئیات کامل مسیر",dialogue:[{speaker:"مسافر",pashto:"سلام علیکم رور! تر مدد خان چوک پورې ځې؟ خالي یې؟",farsi:"سلام علیکم برادر! تا میدان مدد خان می‌روی؟ خالی هستی؟"},{speaker:"ډرېور",pashto:"و علیکم السلام! هو رور ځم، خالي یم. کېنه، په خیر راغلې.",farsi:"و علیکم السلام! بله برادر می‌روم، خالی‌ام. بشین، خوش آمدی."},{speaker:"مسافر",pashto:"بیه یې څومره ده؟ جوړ را سره وکړه، ډېره ګراني ده.",farsi:"قیمت آن چقدر است؟ با من راه بیا، خیلی گرانی است."},{speaker:"ډرېور",pashto:"ستا لپاره سل (۱۰۰) روپۍ. تېل ډېر ګران شوي دي، لاره هم بنده ده.",farsi:"برای تو صد (۱۰۰) روپیه. بنزین خیلی گران شده، راه هم بسته است."},{speaker:"مسافر",pashto:"سل؟! نه اکا، ډېره ده. اتیا (۸۰) روپۍ به درکړم. لاره بیخي نژدې ده.",farsi:"صد؟! نه عمو، زیاد است. هشتاد روپیه بهت می‌دهم. راه کاملاً نزدیک است."},{speaker:"ډرېور",pashto:"ښه، پراخ شه! اتیا یې کړه، ستا خوشحالي مې کار ده. کوم خوا لاړ شم؟",farsi:"خوب، بفرما (بنشین)! هشتاد کن، خوشحالی تو برای من مهم است. به کدام طرف بروم؟"},{speaker:"مسافر",pashto:"نېغه لاړ شه، عیدګاه چوک ته چې ورسېدو، بیا وګرځه.",farsi:"مستقیم برو، به میدان عیدگاه که رسیدیم، بعد بپیچ."},{speaker:"ډرېور",pashto:"اوس عیدګاه چوک دی، ښي لاس ته وګرځم که چپ لاس ته؟",farsi:"الان میدان عیدگاه است، به دست راست بپیچم یا به دست چپ؟"},{speaker:"مسافر",pashto:"ښي لاس ته وګرځه، تر هغه لوی جومات پورې ځو.",farsi:"به دست راست بپیچ، تا آن مسجد بزرگ می‌رویم."},{speaker:"ډرېور",pashto:"پوه شوم. روره! ته د قندهار نه یې؟ اواز دې لږ فرق کوي.",farsi:"فهمیدم. برادر! تو از قندهار نیستی؟ صدایت کمی فرق می‌کند."},{speaker:"مسافر",pashto:"هو، زه اصلاً د کابل یم، خو دلته مې مېلمستیا ده.",farsi:"بله، من اصلاً از کابل هستم، اما اینجا مهمان (مهمانی) هستم."},{speaker:"ډرېور",pashto:"په خیر راغلې! قندهار ستا خپل کور دی. ورسېدو، همدا جومات دی؟",farsi:"خوش آمدی! قندهار خانه خودت است. رسیدیم، همین مسجد است؟"},{speaker:"مسافر",pashto:"هو، همدلته د دوکان مخکې ودریږه. دا ستا اتیا روپۍ، مننه.",farsi:"بله، همین‌جا جلوی دکان وایستا. این هشتاد روپیه تو، ممنون."},{speaker:"ډرېور",pashto:"مننه روره، په امان د خدای! بیا به سره ګورو.",farsi:"ممنون برادر، در امان خدا! باز همدیگر را می‌بینیم."}],vocabulary:[{pashto:"چوک",farsi:"چهارراه / میدان",pronunciation:"Chawk"},{pashto:"نېغه",farsi:"مستقیم",pronunciation:"Negha"},{pashto:"وګرځه",farsi:"بپیچ",pronunciation:"Wagarza"},{pashto:"پراخ شه",farsi:"بفرما (بنشین)",pronunciation:"Prakh sha"}],usefulPhrases:[{pashto:"ښي لاس ته",farsi:"به دست راست",pronunciation:"Ší lās ta"},{pashto:"چپ لاس ته",farsi:"به دست چپ",pronunciation:"Tsap lās ta"},{pashto:"همدلته ودریږه",farsi:"همینجا وایستا",pronunciation:"Dalta wadreža"}]},phone:{title:"مکالمه تلفنی",titlePashto:"تلفوني خبرې",description:"دعوت به مېلمستیا و هماهنگی وقت از طریق تلفن",dialogue:[{speaker:"احمد",pashto:"هلو، سلام علیکم! غږ مې اورې؟",farsi:"هلو، سلام علیکم! صدایم را می‌شنوی؟"},{speaker:"محمود",pashto:"و علیکم السلام احمد جانه! هو اورم یې، جوړ یې؟ په خیر یاست؟",farsi:"و علیکم السلام احمد جان! بله می‌شنوم، خوبی؟ به سلامت هستید؟"},{speaker:"احمد",pashto:"شکر دی، مننه. اواز دې ستا لږ خراب راځي، غږ دې بند بند کېږي.",farsi:"شکر است، ممنون. صدای تو کمی خراب می‌آید، صدایت قطع و وصل می‌شود."},{speaker:"محمود",pashto:"والله لاین خراب دی، زه به د باندې برامد شم. اوس څنګه دی؟",farsi:"والله خط خراب است، من بیرون می‌روم. الان چطور است؟"},{speaker:"احمد",pashto:"اوس ښه شو. غوښتل مې ووایم چې سبا ماښام زموږ کور ته راځې؟",farsi:"الان خوب شد. می‌خواستم بگویم که فردا شب به خانه ما می‌آیی؟"},{speaker:"محمود",pashto:"سبا؟ اجازه غواړم چې وګورم... هو، سبا وزګار یم. څه خبره ده؟",farsi:"فردا؟ اجازه می‌خواهم که ببینم... بله، فردا بیکارم. چه خبری است؟"},{speaker:"احمد",pashto:"هیڅ، مېلمستیا ده. نصیر او نصار هم راځي، یو ځای به کښینو.",farsi:"هیچی، مهمانی است. نصیر و نصار هم می‌آیند، دور هم می‌نشینیم."},{speaker:"محمود",pashto:"ډېره ښه خبره ده! په کومه ساعت درشم؟",farsi:"خیلی خبر خوبی است! ساعت چند بیایم؟"},{speaker:"احمد",pashto:"د ماښام د لمانځه وروسته درځه، اته بجې به ډوډۍ وخورو.",farsi:"بعد از نماز مغرب بیا، ساعت هشت شام می‌خوریم."},{speaker:"محمود",pashto:"په سترګو احمد جانه! حتماً درځم. نمبر دې مسېج کړه چې یاد مې وي.",farsi:"به روی چشم احمد جان! حتماً می‌آیم. شماره‌ات را پیامک کن که یادم باشد."},{speaker:"احمد",pashto:"سمه ده، اوس یې در مسېج کوم. کریډیټ مې هم خلاصېږي.",farsi:"درست است، الان پیامک می‌کنم. اعتبارم (شارژم) هم دارد تمام می‌شود."},{speaker:"محمود",pashto:"ښه روره، خوشحاله اوسې. سبا وینو انشاالله.",farsi:"خوب برادر، خوشحال باشی. فردا می‌بینیم ان‌شاءالله."}],vocabulary:[{pashto:"هلو",farsi:"هلو (شروع تماس)",pronunciation:"Halo"},{pashto:"غږ / اواز",farsi:"صدا",pronunciation:"Ghaž / Awāz"},{pashto:"وزګار",farsi:"بیکار / آزاد",pronunciation:"Wuzgār"},{pashto:"مسېج",farsi:"پیامک",pronunciation:"Message"}],usefulPhrases:[{pashto:"اواز دې نه راځي",farsi:"صدایت نمی‌آید",pronunciation:"Awāz de na rādzi"},{pashto:"کریډیټ مې خلاصېږي",farsi:"اعتبارم تمام می‌شود",pronunciation:"Credit me khlāseži"}]},doctor:{title:"در مطب داکتر",titlePashto:"د ډاکټر په کتنځي کې",description:"تشریح علائم بیماری (دل‌بدی، تبه و درد هډوکي) به داکتر در قندهار",dialogue:[{speaker:"داکتر",pashto:"سلام علیکم! په خیر راغلې. څه تکلیف لرې اسد جانه؟",farsi:"سلام علیکم! خوش آمدی. چه ناراحتی داری اسد جان؟"},{speaker:"ناروغ",pashto:"و علیکم السلام ډاکټر صاحب! ډېر بې‌حاله یم، زړه مې بدېږي او سر مې ګرځي.",farsi:"و علیکم السلام آقای دکتر! خیلی بی‌حالم، دل‌بدی (تهوع) دارم و سرم گیج می‌رود."},{speaker:"داکتر",pashto:"له کله راهیسې دا حالت لرې؟ څه شی دې خوړلي وو؟",farsi:"از کی این حالت را داری؟ چی خورده بودی؟"},{speaker:"ناروغ",pashto:"له پرون ماښام راهیسې، په بازار کې مې یوه توده روټۍ او غوښه وخوړل.",farsi:"از دیروز عصر، در بازار یک نان گرم و گوشت خوردم."},{speaker:"داکتر",pashto:"تبه هم لرې؟ هډوکي دې درد کوي؟ ژبه دې را وباسه.",farsi:"تب هم داری؟ استخوان‌هایت درد می‌کند؟ زبانت را بیرون بیاور."},{speaker:"ناروغ",pashto:"هو صاحب، تبه لرم او نس مې هم ډېر درد کوي. شپې مې خوب نه دی کړی.",farsi:"بله آقا، تب دارم و شکمم هم خیلی درد می‌کند. شب خواب نکرده‌ام."},{speaker:"داکتر",pashto:"راشه دلته پر چپرکټ کښېنه چې فشار دې وګورم. سا واخله... ژوره سا!",farsi:"بیا اینجا روی تخت بنشین که فشارت را ببینم. نفس بکش... نفس عمیق!"},{speaker:"ناروغ",pashto:"ډاکټر صاحب! خطرناکه خو به نه وي؟",farsi:"آقای دکتر! خطرناک که نخواهد بود؟"},{speaker:"داکتر",pashto:"نه، هیڅ خبره نه ده. معده دې لږ خرابه شوې ده، شاید میده میده مکروب وي.",farsi:"نه،‌ هیچ مشکلی نیست. معده‌ات کمی خراب شده، شاید کمی میکروب باشد."},{speaker:"ناروغ",pashto:"دوا راکوې؟ پیچکاري مې بد راځي، ګولۍ راکړه.",farsi:"دوا می‌دهی؟ از آمپول بدم می‌آید، قرص بده."},{speaker:"داکتر",pashto:"ښه، پیچکاري نه درکوم. دا نسخه واخله، دا دواګانې په وخت وخوره.",farsi:"خوب، آمپول نمی‌دهم. این نسخه را بگیر، این داروها را به موقع بخور."},{speaker:"ناروغ",pashto:"پرهیز څه لرم؟ څه باید ونه خورم؟",farsi:"پرهیز چی دارم؟ چی نباید بخورم؟"},{speaker:"داکتر",pashto:"غوړ او تریخ شی مه خوره، یوازې سپکه ډوډۍ او شیدې وخوره.",farsi:"چیز چرب و تند نخور، فقط غذای سبک و شیر بخور."},{speaker:"ناروغ",pashto:"مننه ډاکټر صاحب، فیس مو څومره دی؟",farsi:"ممنون آقای دکتر، ویزیتتان چقدر است؟"},{speaker:"داکتر",pashto:"پنځه سوه (۵۰۰) روپۍ. ښه به شې انشاءالله، بیا راشه.",farsi:"پانصد (۵۰۰) روپیه. خوب می‌شوی ان‌شاءالله، باز بیا."}],vocabulary:[{pashto:"زړه مې بدېږي",farsi:"دل‌بدی / تهوع دارم",pronunciation:"Zṛa me bade-ǧi"},{pashto:"بې‌حاله",farsi:"بی‌حال / ضعیف",pronunciation:"Be-hāla"},{pashto:"چپرکټ",farsi:"تخت خواب / مرقد داکتر",pronunciation:"Chaparkat"},{pashto:"میده میده",farsi:"کم کم / خرد خرد",pronunciation:"Maida maida"}],usefulPhrases:[{pashto:"ژوره ساه واخله",farsi:"نفس عمیق بکش",pronunciation:"Zhawa-ra sā wākhla"},{pashto:"پیچکاري مې بد راځي",farsi:"از آمپول بدم می‌آید",pronunciation:"Pichkāri me bad rādzi"}]},guestVisit:{title:"مهمانی و مېلمستیا",titlePashto:"مېلمستیا او بلنه",description:"آداب پذیرایی سنتی، تعارفات گرم و شب‌نشینی در قندهار",dialogue:[{speaker:"کوربه (میزبان)",pashto:"سلام علیکم! په خیر راغلې، په سترګو راغلې! ستړی مه شې.",farsi:"سلام علیکم! خوش آمدی، خیلی خوش آمدی! خسته نباشی."},{speaker:"مېلمه",pashto:"و علیکم السلام! کور دې ودان، ته هم ستړی مه شې. جوړ یې؟",farsi:"و علیکم السلام! خانه‌ات آباد، تو هم خسته نباشی. خوبی؟"},{speaker:"کوربه",pashto:"شکر دی، ستا دعا ده. راشه تشریف راوړئ، پر دې توشکه کښېنه.",farsi:"شکر است، دعای توست. بیا تشریف بیاور، روی این تشک بنشین."},{speaker:"مېلمه",pashto:"مننه وروره، زحمت مو وکښ. کورنۍ څنګه ده؟ ماشومان ښه دي؟",farsi:"ممنون برادر، زحمت کشیدید. خانواده چطور است؟ بچه‌ها خوبند؟"},{speaker:"کوربه",pashto:"الحمدلله ټول روغ رمټ دي. تاته دعا کوي. شربت راوړم که چای؟",farsi:"الحمدلله همه صحیح و سلامت هستند. به تو دعا می‌کنند. شربت بیاورم یا چای؟"},{speaker:"مېلمه",pashto:"اوس خو شربت راوړه چې هوا ګرمه ده، بیا به چای وڅښو.",farsi:"فعلاً شربت بیاور که هوا گرم است، بعداً چای می‌خوریم."},{speaker:"کوربه",pashto:"په سترګو! دا یخ شربت نوش جان کړه. څه نوي خبرې دي؟",farsi:"به روی چشم! این شربت یخ را نوش جان کن. چه خبرهای جدیدی هست؟"},{speaker:"مېلمه",pashto:"هیڅ، شکر دی. کارونه لږ زیات شوي دي، وخت نه پیدا کېږي.",farsi:"هیچی، شکر است. کارها کمی زیاد شده‌اند، وقت پیدا نمی‌شود."},{speaker:"کوربه",pashto:"خیر دی، ژوند همداسې دی. نن مې ستا لپاره کوفته او پلو پخ کړي دي.",farsi:"عیبی ندارد، زندگی همین است. امروز برایت کوفته و پلو پخته‌ام."},{speaker:"مېلمه",pashto:"اوه روره! ولې دې دومره زحمت ایستلی؟ یو ساده شی بس و.",farsi:"اوه برادر! چرا اینقدر زحمت کشیدی؟ یک چیز ساده کافی بود."},{speaker:"کوربه",pashto:"تاسو مېلمانه یاست، ستاسو حق دی. ډوډۍ چمتو ده، راشئ دسترخوان ته.",farsi:"شما مهمان هستید، حق شماست. غذا آماده است، بیایید سر سفره."},{speaker:"مېلمه",pashto:"واه واه! لاس دې صفا، بیخي خوندور دي. ستاسو لاس ته برکت.",farsi:"واه واه! دستت درد نکند، کاملاً خوشمزه هستند. برکت به دستت."},{speaker:"کوربه",pashto:"نور وخوره، کم دې وخوړل. مړه نه شوې؟",farsi:"بیشتر بخور، کم خوردی. سیر نشدی؟"},{speaker:"مېلمه",pashto:"نه والله، ډېر موړ شوم. اوس باید اجازه واخم، ناوېخته شو.",farsi:"نه والله، خیلی سیر شدم. حالا باید اجازه بگیرم، دیر شد."},{speaker:"کوربه",pashto:"دومره ژر؟ لږ نور قصه وکړه. موږ خو تاته ډېر خوشحاله شوو.",farsi:"به این زودی؟ کمی بیشتر گپ بزن. ما که از دیدنت خیلی خوشحال شدیم."},{speaker:"مېلمه",pashto:"زه هم ډېر خوشحاله شوم، خو کور کې انتظار دي. بیا به حتماً درځم.",farsi:"من هم خیلی خوشحال شدم، اما در خانه منتظرند. باز حتماً می‌آیم."},{speaker:"کوربه",pashto:"ښه، په مخه دې ښه روره! بیا راشئ، کور مو آباد.",farsi:"خوب، راهت بخیر برادر! باز بیایید، خانه‌تان آباد."}],vocabulary:[{pashto:"روغ رمټ",farsi:"صحیح و سلامت",pronunciation:"Rogh ramat"},{pashto:"توشکه",farsi:"تشک (نشیمن)",pronunciation:"Toshaka"},{pashto:"زحمت ایستل",farsi:"زحمت کشیدن",pronunciation:"Zahmat istal"},{pashto:"موړ شوم",farsi:"سیر شدم",pronunciation:"Moṛ shwam"}],usefulPhrases:[{pashto:"لاس دې صفا",farsi:"دستت درد نکند (هنرمندانه بود)",pronunciation:"Lās de safā"},{pashto:"په سترګو راغلې",farsi:"خیلی خوش آمدی",pronunciation:"Pa stargo rāghle"}]},tailor:{title:"در خیاطی - سفارش لباس",titlePashto:"په خیاطي کې - پېرزوينه",description:"سفارش کامل کمیس کندهاری با جزئیات گلدوزی و اندازه‌گیری دقیق",dialogue:[{speaker:"مشتري",pashto:"سلام علیکم خلیفه صاحب! ستړی مه شې. یو جوړه کالی ګنډې؟",farsi:"سلام علیکم استاد (خلیفه)! خسته نباشی. یک دست لباس می‌دوزی؟"},{speaker:"خلیفه (خیاط)",pashto:"و علیکم السلام روره! په خیر راغلې. هو ولې نه، ټوکر دې راوړی دی؟",farsi:"و علیکم السلام برادر! خوش آمدی. بله چرا که نه، پارچه آورده‌ای؟"},{speaker:"مشتري",pashto:"هو، دا سپین ټوکر دی. غواړم کندهاري ګنډل ور باندې وکړې، خو ډېر پاک.",farsi:"بله، این پارچه سفید است. می‌خواهم گلدوزی کندهاری روش انجام بدی، اما خیلی تمیز."},{speaker:"خلیفه",pashto:"ښه، کوم رقم ګنډل غواړې؟ زنځیري، پولی که ساده پښۍ؟",farsi:"خوب، چه رقمی گلدوزی می‌خواهی؟ زنجیری، پولی یا پاچه ساده؟"},{speaker:"مشتري",pashto:"زنځیري یې کړه، پر غاړه او لستوڼو باندې. ډیزاین یې باید نوی وي.",farsi:"زنجیری‌اش کن، روی یقه و آستین‌ها. دیزاینش باید جدید باشد."},{speaker:"خلیفه",pashto:"سمه ده. اوس راشه چې اندازه دې واخلم. اوږه دې نېغه ونیوله.",farsi:"درست است. حالا بیا که اندازه‌ات را بگیرم. شانه‌ات را مستقیم بگیر."},{speaker:"مشتري",pashto:"خلیفه صاحب! کمیس مې لږ لنډ کړه، او پرتوګ مې پراخ غواړم.",farsi:"استاد صاحب! پیراهنم را کمی کوتاه کن، و شلوارم را گشاد (پراخ) می‌خواهم."},{speaker:"خلیفه",pashto:"په سترګو، ستا په خوښه به وي. جیبونه یې څنګه وي؟ پټ که ښکاره؟",farsi:"به روی چشم، طبق میل تو خواهد بود. جیب‌هایش چطور باشد؟ مخفی یا آشکار؟"},{speaker:"مشتري",pashto:"جیبونه یې پټ کړه. تر اختر پورې خلاصېږي؟ بیخي کمه موده ده.",farsi:"جیب‌هایش را مخفی کن. تا عید تمام می‌شود؟ زمان خیلی کمی است."},{speaker:"خلیفه",pashto:"والله مزدوران مې کم دي، خو ستا لپاره به کوښښ وکړم. لس ورځې وروسته راشه.",farsi:"والله شاگردانم کم هستند، اما برای تو تلاش می‌کنم. ده روز بعد بیا."},{speaker:"مشتري",pashto:"مزدوري دې څومره کېږي؟ د ګنډلو قیمت راته ووایه.",farsi:"دستمزدت چقدر می‌شود؟ قیمت دوخت را بهم بگو."},{speaker:"خلیفه",pashto:"ګنډل او ګلدوزي سره زر (۱۰۰۰) روپۍ کېږي. ښه ډال (Design) درته وهم.",farsi:"دوخت و گلدوزی با هم هزار (۱۰۰۰) روپیه می‌شود. طرح (ډال) خوبی برایت می‌زنم."},{speaker:"مشتري",pashto:"سمه ده، دا پنځه سوه روپۍ بیعانه (Advance) واخله. خدای پامان!",farsi:"درست است، این پانصد روپیه بیعانه را بگیر. خداحافظ!"},{speaker:"خلیفه",pashto:"په امان د خدای روره! په خیر اوسې.",farsi:"در امان خدا برادر! سلامت باشی."}],vocabulary:[{pashto:"خلیفه",farsi:"استاد / خیاط ماهر",pronunciation:"Khalifa"},{pashto:"ګنډل",farsi:"دوختن / گلدوزی",pronunciation:"Ganḍal"},{pashto:"لستوڼي",farsi:"آستین‌ها",pronunciation:"Lastoṇi"},{pashto:"بیعانه",farsi:"پیش‌پرداخت",pronunciation:"Bay-āna"}],usefulPhrases:[{pashto:"اندازه مې واخله",farsi:"اندازه‌ام را بگیر",pronunciation:"Andāza me wākhla"},{pashto:"تنف کړه (Tanaf)",farsi:"پرو کن",pronunciation:"Tanaf kṛa"}]},mechanic:{title:"در ترمیمگاه - مستری",titlePashto:"په مستریتوب کې - د موټر جوړول",description:"عیب‌یابی موتر و چانه زدن برای قیمت پرزه‌ها و دستمزد مستری",dialogue:[{speaker:"صاحب موټر",pashto:"سلام اکا! ستړی مه شې. موټر مې خراب شوی، یو ځل یې وګوره.",farsi:"سلام عمو! خسته نباشی. موترم خراب شده، یک بار ببینش."},{speaker:"مستري",pashto:"و علیکم السلام! په خیر راغلې. څه تکلیف لري؟ اواز کوي؟",farsi:"و علیکم السلام! خوش آمدی. چه مشکلی دارد؟ صدا می‌دهد؟"},{speaker:"صاحب موټر",pashto:"هو، په بریک کې غږ کوي او تودېږي هم. په پورته کې بیخي زور نه کوي.",farsi:"بله، در ترمز صدا می‌دهد و داغ هم می‌کند. در سربالایی اصلاً زور نمی‌زند."},{speaker:"مستري",pashto:"کینیټه (Hood) خلاصه کړه... اوه، دا یې خو وټرپمپ خراب دی، اوبه یې ټولې تویه کړې.",farsi:"کاپوت را باز کن... اوه، این که واترپمپش خراب است، کل آب را خالی کرده."},{speaker:"صاحب موټر",pashto:"اوه، والله دا خو غټه کیسه ده. جوړېږي؟ څومره مصرف لري؟",farsi:"اوه، والله این که ماجرای بزرگی است. درست می‌شود؟ چقدر هزینه دارد؟"},{speaker:"مستري",pashto:"هو جوړېږي، نوی وټرپمپ باید واخلې. دا یې پکه هم خلاصه شوې ده.",farsi:"بله درست می‌شود، باید واترپمپ نو بخری. این پروانه‌اش (پکه) هم شل شده است."},{speaker:"صاحب موټر",pashto:"پرزې یې په بازار کې پیدا کېږي؟ ته یې لرې؟",farsi:"قطعاتش در بازار پیدا می‌شود؟ تو داری؟"},{speaker:"مستري",pashto:"زه یې نلرم، خو مدد خان چوک ته لاړ شه، هلته یې اصلي پاکستاني پرزې شته.",farsi:"من ندارم، اما برو میدان مدد خان، آنجا قطعات اصل پاکستانی هست."},{speaker:"صاحب موټر",pashto:"ښه، مزدوري دې څومره ده؟ جوړ را سره وکړه، ډېر مشکلات دي.",farsi:"خوب، دستمزت چقدر است؟ با من راه بیا، مشکلات زیاد است."},{speaker:"مستري",pashto:"ستا لپاره زر (۱۰۰۰) روپۍ مزدوري اخلم. ډېر کار لري، ټول انجن باید وګورم.",farsi:"برای تو هزار (۱۰۰۰) روپیه دستمزد می‌گیرم. خیلی کار دارد، باید کل موتور را ببینم."},{speaker:"صاحب موټر",pashto:"اوه اکا! زر خو ډېر دي. په اووه سوه یې کړه، بیا به هم همدلته درځم.",farsi:"اوه عمو! هزار که خیلی زیاد است. هفتصد کن، باز هم همین‌جا می‌آیم."},{speaker:"مستري",pashto:"ښه خیر، اته سوه (۸۰۰) یې کړه. تر غرمې پورې به یې درته خلاص کړم.",farsi:"خوب عیبی ندارد، هشتصد کن. تا چاشت برایت تمامش می‌کنم."},{speaker:"صاحب موټر",pashto:"سمه ده، دا یې کیلي. زه غرمه درځم. کور دې ودان!",farsi:"درست است، این هم کلیدش. من چاشت می‌آیم. خانه‌ات آباد!"}],vocabulary:[{pashto:"مستري",farsi:"مکانیک",pronunciation:"Mustari"},{pashto:"کینیټه",farsi:"کاپوت موتر",pronunciation:"Kainita"},{pashto:"پکه",farsi:"پروانه (فن)",pronunciation:"Paka"},{pashto:"مزدوري",farsi:"دستمزد",pronunciation:"Mazduri"}],usefulPhrases:[{pashto:"بریک نه نیسي",farsi:"ترمز نمی‌گیرد",pronunciation:"Brake na nīsi"},{pashto:"پرزې یې لرې؟",farsi:"قطعاتش (پرزه) را داری؟",pronunciation:"Parze ye lare?"}]},airport:{title:"در میدان هوایی قندهار",titlePashto:"په هوایي ډګر کې",description:"مکالمات چک‌این، وزن بکس‌ها و جریمه در میدان هوایی بین‌المللی احمدشاه بابا",dialogue:[{speaker:"مسافر",pashto:"سلام علیکم صاحب! ستړی مه شې. د کابل پرواز په کومه ساعت دی؟",farsi:"سلام علیکم آقا! خسته نباشی. پرواز کابل ساعت چند است؟"},{speaker:"مامور",pashto:"و علیکم السلام! په خیر راغلې. د غرمې په دولس (۱۲) بجو دی. تذکره دې راکړه.",farsi:"و علیکم السلام! خوش آمدی. ساعت ۱۲ چاشت است. تذکره‌ات را بده."},{speaker:"مسافر",pashto:"دا مې تذکره او ټکټ. طیاره په وخت کشېږي که لږ ناوخته کېږي؟",farsi:"این تذکره و بلیطم. هواپیما به موقع بلند می‌شود یا کمی دیر می‌شود؟"},{speaker:"مامور",pashto:"انشاالله په وخت ده. بکسونه چېرته دي؟ دلته یې د تلي (Scale) پر سر کېږده.",farsi:"ان‌شاءالله به موقع است. چمدان‌ها کجایند؟ اینجا روی ترازو بگذارشان."},{speaker:"مسافر",pashto:"دا مې دوه بکسونه دي. هیله ده چې وزن یې سم وي.",farsi:"این دو تا چمدان‌هایم هستند. امیدوارم وزنش درست باشد."},{speaker:"مامور",pashto:"اوه روره! وزن دې زیات دی. ته یوازې ۳۰ کیلو اجازه لرې، خو دا ۳۵ کیلو دی.",farsi:"اوه برادر! وزنت زیاد است. تو فقط ۳۰ کیلو اجازه داری، اما این ۳۵ کیلو است."},{speaker:"مسافر",pashto:"والله؟! په بکس کې مې کندهاري انار او وچې مېوې دي، ځکه دروند دی.",farsi:"والله؟! در چمدانم انار کندهاری و میوه‌های خشک است، برای همین سنگین است."},{speaker:"مامور",pashto:"پوهېږم روره، خو پنځه کیلو اضافه بار لرې. باید جریمه ورکړې.",farsi:"می‌فهمم برادر، اما پنج کیلو اضافه بار داری. باید جریمه بدهی."},{speaker:"مسافر",pashto:"لږ تېر شه (گذشت کن) اکا، زه خو مېلمه یم. بیخي لږ پیسې لرم.",farsi:"کمی گذشت کن عمو، من که مهمان هستم. اصلاً پول کمی دارم."},{speaker:"مامور",pashto:"والله زما په لاس کې نه ده، کمپیوټر یې حسابوي. جریمه یې زر روپۍ کېږي.",farsi:"والله دست من نیست، کامپیوتر حساب می‌کند. جریمه‌اش هزار روپیه می‌شود."},{speaker:"مسافر",pashto:"ښه خیر، دا یې زر روپۍ. ټکټ مې راکړه چې طیاره رانه پاتې نشي.",farsi:"خوب عیبی ندارد، این هزار روپیه. بلیطم را بده که هواپیما از دستم نرود."},{speaker:"مامور",pashto:"واخله، دا دې ټکټ. د دوهم نمبر دروازې ته لاړ شه. په خیر لاړ شې!",farsi:"بگیر، این هم بلیطت. به دروازه شماره دو برو. به سلامت بروی!"}],vocabulary:[{pashto:"هوایي ډګر",farsi:"فرودگاه",pronunciation:"Hawāyi ḍagar"},{pashto:"تله",farsi:"ترازو",pronunciation:"Tala"},{pashto:"اضافه بار",farsi:"بار اضافی",pronunciation:"Idzāfa bār"},{pashto:"کشېږي",farsi:"بلند می‌شود (تیک‌آف)",pronunciation:"Kasheži"}],usefulPhrases:[{pashto:"ټکټ مې ورک دی",farsi:"بلیطم گم شده",pronunciation:"Ticket me wark day"},{pashto:"وزن یې زیات دی",farsi:"وزنش زیاد است",pronunciation:"Wazan ye zyāt day"}]},family_gathering:{title:"مجلس فامیلی و میتینگ",titlePashto:"کورنۍ ناسته او قصه",description:"صحبات‌های صمیمانه، قصه‌های قدیمی و احوالپرسی‌های گرم در یک عصرانه فامیلی",dialogue:[{speaker:"تربور (پسرعمو)",pashto:"احمد جانه! ستړی مه شې. نن خو دې هیڅ قصه ونکړه، ولې پټ ناست یې؟",farsi:"احمد جان! خسته نباشی. امروز که اصلاً صحبت نکردی، چرا ساکت نشستی؟"},{speaker:"احمد",pashto:"هیڅ نه روره، په خیر اوسې. لږ د کارونو فکر وړی یم، سر مې دروند دی.",farsi:"هیچی برادر، سلامت باشی. کمی فکر کارها را می‌کردم، سرم سنگین است."},{speaker:"مشر (بزرگ)",pashto:"ځوانه! ډېر فکر مه کوه، توکل په خدای کړه. ژوند همداسې دی، کله تریخ کله خوږ.",farsi:"جوان! زیاد فکر نکن، توکل بر خدا کن. زندگی همین است، گاهی تلخ گاهی شیرین."},{speaker:"کشر (کوچکتر)",pashto:"اکا! مهرباني وکړه هغه د پخواني وختونو قصه راته وکړه، چې په باغ کې اوسېدو.",farsi:"عمو! لطفاً آن قصه زمان‌های قدیم را برایمان بگو، زمانی که در باغ زندگی می‌کردیم."},{speaker:"مشر",pashto:"ښه، هغه وخت چې موږ په ارغنداب کې وو... بیخي بېله دنیا وه. د انارو موسم و.",farsi:"خوب، آن زمانی که ما در ارغنداب بودیم... اصلاً دنیای دیگری بود. فصل انار بود."},{speaker:"تربور",pashto:"رښتیا اکا؟ هغه وخت خو اوبه هم ډېرې وې، او خلکو یو بل سره ډېره مینه لرله.",farsi:"واقعاً عمو؟ آن زمان آب هم زیاد بود، و مردم با هم خیلی محبت داشتند."},{speaker:"مشر",pashto:"هو بچیه، هغه وخت داسې مشکلات نه وو. اوس خو هر سړی په خپل غم کې غرق دی.",farsi:"بله فرزندم، آن زمان اینطور مشکلات نبود. حالا هر کسی در غم خودش غرق است."},{speaker:"احمد",pashto:"اکا! ستا خبرې بیخي رښتیا دي. زموږ قندهار همیشه د مېلمه پالنې ځای و.",farsi:"عمو! حرف‌هایت کاملاً راست است. قندهار ما همیشه جای مهمان‌نوازی بود."},{speaker:"مشر",pashto:"الحمدلله، اوس هم شته. ځه، احمد جانه! هغه پګړۍ مې راوړه چې لمانځه ته ځو.",farsi:"الحمدلله، الان هم هست. برو احمد جان! آن لنگی‌ام را بیار که به نماز می‌رویم."},{speaker:"احمد",pashto:"په سترګو اکا، همدا اوس یې درته راوړم. بوټونه دې هم پاک کړم؟",farsi:"به روی چشم عمو، همین الان برایت می‌آورم. کفش‌هایت را هم تمیز کنم؟"},{speaker:"مشر",pashto:"نه بچیه، کور دې ودان. خدای دې نېکبخته کړه.",farsi:"نه فرزندم، خانه‌ات آباد. خدا خوشبختت کند."}],vocabulary:[{pashto:"تربور",farsi:"پسرعمو",pronunciation:"Tarbur"},{pashto:"پټ",farsi:"خاموش / پنهان",pronunciation:"Put"},{pashto:"پګړۍ",farsi:"لنگی (دستار کندهاری)",pronunciation:"Pagṛəy"},{pashto:"غوږ شه",farsi:"گوش کن",pronunciation:"Gwaǧ sha"}],usefulPhrases:[{pashto:"موږ سره په قصه شه",farsi:"با ما همکلام شو",pronunciation:"Muž sara pa qissa sha"},{pashto:"توکل په خدای کړه",farsi:"بر خدا توکل کن",pronunciation:"Tawakul pa khoday kṛa"}]},pharmacy:{title:"در داروخانه",titlePashto:"په دواخانه کې",description:"خرید دارو برای زکام، تبه و توضیحات داروساز درباره نحوه مصرف",dialogue:[{speaker:"مشتري",pashto:"سلام علیکم ورور! ستړی مه شې. د تبې او زکام دوا لرې؟",farsi:"سلام علیکم برادر! خسته نباشی. داروی تب و سرماخوردگی داری؟"},{speaker:"دوا پلورونکی",pashto:"و علیکم السلام! هو روره، ډېر خلک زکام شوي دي. څه تکلیف لرې؟",farsi:"و علیکم السلام! بله برادر، خیلی‌ها سرما خورده‌اند. چه مشکلی داری؟"},{speaker:"مشتري",pashto:"سر مې خوږېږي، ستونی مې هم درد کوي او پزه مې بنده ده.",farsi:"سرم درد می‌کند، گلویم هم درد می‌کند و بینیم بسته است."},{speaker:"دوا پلورونکی",pashto:"ښه، دا ګولۍ شپه او سهار وخوره. دا شربت هم درکوم، د ټوخي لپاره بیخي ښه دی.",farsi:"خوب، این قرص را شب و صبح بخور. این شربت را هم می‌دهم، برای سرفه عالی است."},{speaker:"مشتري",pashto:"دا دواګانې څنګه وخورم؟ تر ډوډۍ مخکې که وروسته؟",farsi:"این داروها را چطور بخورم؟ قبل از غذا یا بعد از آن؟"},{speaker:"دوا پلورونکی",pashto:"ګولۍ له ډوډۍ وروسته وخوره، خو شربت په ورځ کې درې وخته، یو یو قاشوق.",farsi:"قرص را بعد از غذا بخور، اما شربت را روزی سه بار، هر بار یک قاشق."},{speaker:"مشتري",pashto:"د ماشومانو لپاره هم څه لرې؟ زوی مې هم لږ تبه لري.",farsi:"برای بچه‌ها هم چیزی داری؟ پسرم هم کمی تب دارد."},{speaker:"دوا پلورونکی",pashto:"هو، د هغوی لپاره دا مخصوص شربت شته. د ماشوم عمر یې څومره دی؟",farsi:"بله، برای آن‌ها این شربت مخصوص هست. سن کودک چقدر است؟"},{speaker:"مشتري",pashto:"پنځه کلن دی. دا دواګانې اصلي دي که نه؟",farsi:"پنج ساله است. این داروها اصلی هستند یا نه؟"},{speaker:"دوا پلورونکی",pashto:"بیخي اصلي دي روره، له نوي جرمني کمپنیو راغلي دي.",farsi:"کاملاً اصلی هستند برادر، از کمپانی‌های جدید آلمانی آمده‌اند."},{speaker:"مشتري",pashto:"ټول څومره روپۍ شول؟ حساب وکړه.",farsi:"همه چقدر روپیه شد؟ حساب کن."},{speaker:"دوا پلورونکی",pashto:"دواړه شربتونه او ګولۍ سره څلور سوه (۴۰۰) روپۍ کېږي.",farsi:"هر دو شربت و قرص با هم چهارصد روپیه می‌شود."},{speaker:"مشتري",pashto:"دا یې پیسې، مننه. خدای دې خیر درکړي.",farsi:"این هم پولش، ممنون. خداوند خیرت بدهد."},{speaker:"دوا پلورونکی",pashto:"په خیر اوسې روره! روغ جوړ شې انشاالله.",farsi:"سلامت باشی برادر! سالم شوی ان‌شاءالله."}],vocabulary:[{pashto:"ګولۍ",farsi:"قرص",pronunciation:"Golay"},{pashto:"ستونی",farsi:"گلو",pronunciation:"Stonay"},{pashto:"قاشوق",farsi:"قاشق",pronunciation:"Qāshoq"},{pashto:"پزه",farsi:"بینی",pronunciation:"Paza"}],usefulPhrases:[{pashto:"دا دوا څنګه وخورم؟",farsi:"این دارو را چطور بخورم؟",pronunciation:"Dā dawā tsanga wakhuram?"},{pashto:"نسخه لرم",farsi:"نسخه دارم",pronunciation:"Nuskha laram"}]},bank:{title:"در صرافی - تبدیل پول",titlePashto:"په صرافۍ کې - بدلون",description:"تبدیل کلدار به روپۍ یا افغانۍ در صرافی‌های قندهار با چانه زدن نرخ",dialogue:[{speaker:"مشتري",pashto:"سلام اکا! ستړی مه شې. نن د ډالر نرخ څه دی؟",farsi:"سلام عمو! خسته نباشی. امروز نرخ دلار چنده؟"},{speaker:"صراف",pashto:"و علیکم السلام! په خیر راغلې. نن یو ډالر په نوي (۹۰) افغانۍ یا کندهاري روپۍ دی.",farsi:"و علیکم السلام! خوش آمدی. امروز یک دلار ۹۰ افغانی یا همان روپیه کندهاری است."},{speaker:"مشتري",pashto:"اوه، والله نن خو بیخي لوېدلی دی. پرون ۹۵ و، ولې دومره کم شو؟",farsi:"اوه، والله امروز که اصلاً سقوط کرده. دیروز ۹۵ بود، چرا اینقدر کم شد؟"},{speaker:"صراف",pashto:"بازار همداسې دی روره، نرخونه پورته کښته کېږي. څومره ډالر لرې؟",farsi:"بازار همین است برادر، نرخ‌ها بالا و پایین می‌شوند. چقدر دلار داری؟"},{speaker:"مشتري",pashto:"پنځه سوه (۵۰۰) ډالره لرم، غواړم ټول په روپۍ بدل کړم.",farsi:"پانصد دلار دارم، می‌خواهم همه را به روپیه عوض کنم."},{speaker:"صراف",pashto:"ښه، پنځه سوه ډالره ستا کېږي ۴۵ زره روپۍ. کلدار (روپیه پاکستان) هم غواړې؟",farsi:"خوب، پانصد دلار تو می‌شود ۴۵ هزار روپیه. کلدار هم می‌خواهی؟"},{speaker:"مشتري",pashto:"هو، لس زره کلدار هم راکړه، چمن ته ځم، مصرف لرم.",farsi:"بله، ده هزار کلدار هم بده، به چمن (مرز) می‌روم، هزینه دارم."},{speaker:"صراف",pashto:"په سترګو، همدا اوس یې حسابوم. دا دې روپۍ، وې شمېره چې کمې نه وي.",farsi:"به روی چشم، همین الان حسابش می‌کنم. این هم روپیه‌هایت، بشمارشون که کم نباشه."},{speaker:"مشتري",pashto:"یو، دوه، درې... اکا! دا یو نوټ بیخي زوړ دی، دا بدل کړه.",farsi:"یک، دو، سه... عمو! این یک اسکناس (نوټ) خیلی کهنه است، این را عوض کن."},{speaker:"صراف",pashto:"خیر دی، همدا نوی دی واخله. بل څه خدمت؟",farsi:"عیبی ندارد، بیا این نو را بگیر. دیگر چه خدمتی؟"},{speaker:"مشتري",pashto:"نه اکا، مننه. خوردې پیسې (Change) هم لږ راکړه.",farsi:"نه عمو، ممنون. پول خرد هم کمی بهم بده."},{speaker:"صراف",pashto:"واخله دا دې خوردې پیسې. په خیر لاړ شې!",farsi:"بگیر این هم پول خرد. به سلامت بروی!"},{speaker:"مشتري",pashto:"کور دې ودان، خدای پامان!",farsi:"خانه‌ات آباد، خداحافظ!"}],vocabulary:[{pashto:"صراف",farsi:"صراف",pronunciation:"Sarrāf"},{pashto:"نرخ",farsi:"قیمت / نرخ",pronunciation:"Narkh"},{pashto:"خوردې پیسې",farsi:"پول خرد",pronunciation:"Khorde payse"},{pashto:"زوړ نوټ",farsi:"اسکناس کهنه",pronunciation:"Zoṛ not"}],usefulPhrases:[{pashto:"جعلي خو به نه وي؟",farsi:"جعلی که نخواهد بود؟",pronunciation:"Jacli kho ba na wi?"},{pashto:"دا بدل کړه",farsi:"این را عوض کن",pronunciation:"Dā badal kṛa"}]},mosque:{title:"در مسجد - بعد از نماز",titlePashto:"په جومات کې",description:"احوالپرسی سنتی، مذهبی و دعوت‌های معاشرتی بعد از ادای نماز جماعت در قندهار",dialogue:[{speaker:"لمونځ کوونکی ۱",pashto:"سلام علیکم وروره! لمونځ دې قبول شه، په خیر اوسې.",farsi:"سلام علیکم برادر! نمازت قبول باشد، سلامت باشی."},{speaker:"لمونځ کوونکی ۲",pashto:"و علیکم السلام! ستا هم قبول شه، په خیر راغلې. جوړ یې؟",farsi:"و علیکم السلام! از تو هم قبول باشد، خوش آمدی. خوبی؟"},{speaker:"لمونځ کوونکی ۱",pashto:"الحمدلله، شکر دی. ډېر وخت شو چې نه مې وې لیدلی، خیر خو و؟",farsi:"الحمدلله، شکر است. خیلی وقت بود که ندیده بودمت، خیر بود؟"},{speaker:"لمونځ کوونکی ۲",pashto:"هو رور، لږ مسافر شوی وم، هلمند ته لاړم. اوس بېرته راغلم.",farsi:"بله برادر، کمی مسافر شده بودم، به هلمند رفتم. حالا برگشتم."},{speaker:"لمونځ کوونکی ۱",pashto:"ماشاءالله! په خیر راغلې. کورنۍ مو روغه ده؟ ټول ښه دي؟",farsi:"ماشاءالله! خوش آمدی. خانواده‌تان سلامت است؟ همه خوبند؟"},{speaker:"لمونځ کوونکی ۲",pashto:"ټول ستا دعا کوي، مننه. ستا ماشومان څنګه دي؟ لمانځه ته نه راځي؟",farsi:"همه به تو دعا می‌کنند، ممنون. بچه‌های تو چطورند؟ به نماز نمی‌آیند؟"},{speaker:"لمونځ کوونکی ۱",pashto:"هغوی هم ښه دي، مکتب ته ځي. مشر زوی مې کله کله راځي خو نن کور کې و.",farsi:"آن‌ها هم خوبند، به مدرسه می‌روند. پسر بزرگم گاهی می‌آید اما امروز در خانه بود."},{speaker:"لمونځ کوونکی ۲",pashto:"خدای دې نېک کړي. یو وخت مېلمستیا ته زموږ کور ته راشه.",farsi:"خدا صالحشان کند. یک وقتی برای مهمانی به خانه‌مان بیا."},{speaker:"لمونځ کوونکی ۱",pashto:"په سترګو، حتماً درځم. انشاءالله سبا به سره ګورو.",farsi:"به روی چشم، حتماً می‌آیم. ان‌شاءالله فردا همدیگر را می‌بینیم."},{speaker:"لمونځ کوونکی ۲",pashto:"ښه وروره، په امان د خدای! خدای دې اجر درکړي.",farsi:"خوب برادر، در امان خدا! خداوند به تو اجر دهد."},{speaker:"لمونځ کوونکی ۱",pashto:"په امان د خدای، په خیر اوسې.",farsi:"در امان خدا، سلامت باشی."}],vocabulary:[{pashto:"لمونځ",farsi:"نماز",pronunciation:"Lmudz"},{pashto:"قبول",farsi:"قبول",pronunciation:"Qabul"},{pashto:"مسافر",farsi:"مسافر / دور از خانه",pronunciation:"Musāfir"},{pashto:"اجر",farsi:"پاداش / ثواب",pronunciation:"Ajr"}],usefulPhrases:[{pashto:"لمونځ دې قبول شه",farsi:"نمازت قبول باشد",pronunciation:"Lmudz de qabul sha"},{pashto:"په امان د خدای",farsi:"در امان خدا",pronunciation:"Pa amān da khoday"}]},wedding:{title:"در عروسی (واده)",titlePashto:"په واده کې",description:"تبریک گفتن، تعارفات شادی و آرزوهای خیر در مراسم عروسی کندهاری",dialogue:[{speaker:"مېلمه",pashto:"سلام علیکم اکا! واده مو مبارک شه! خدای دې ډېر اباد لري.",farsi:"سلام علیکم عمو! عروسیتان مبارک باشد! خدا خیلی آباد داشته باشدتان."},{speaker:"میزبان",pashto:"و علیکم السلام! مننه روره، په خیر راغلې، په سترګو راغلې. ستاسو هم مبارک شه.",farsi:"و علیکم السلام! ممنون برادر، خوش آمدی، خیلی خوش آمدی. از شما هم مبارک باشد."},{speaker:"مېلمه",pashto:"زوم چېرته دی؟ غواړم مبارکي ورته ووایم.",farsi:"داماد کجاست؟ می‌خواهم به او تبریک بگویم."},{speaker:"میزبان",pashto:"زوم دننه د ملګرو سره ناست دی، اوس راوځي. بفرما چای وڅښه.",farsi:"داماد داخل با دوستانش نشسته، الان بیرون می‌آید. بفرما چای بنوش."},{speaker:"مېلمه",pashto:"مننه، ډېره ښه مېلمستیا مو کړې ده. مجلس بیخي تود دی.",farsi:"ممنون، خیلی مهمانی خوبی گرفته‌اید. مجلس کاملاً گرم است."},{speaker:"میزبان",pashto:"ستا مهرباني ده روره. انشاءالله ستا د اولادونو په خوشحالۍ کې درشو.",farsi:"لطف توست برادر. ان‌شاءالله در شادی فرزندانت بیاییم."},{speaker:"مېلمه",pashto:"کور دې ودان. ناوې او زوم ته د بختور ژوند دعا کوم.",farsi:"خانه‌ات آباد. برای عروس و داماد دعای زندگی خوشبخت (بختور) می‌کنم."},{speaker:"میزبان",pashto:"آمین، خدای دې ستا دعا قبوله کړي. راشه ډوډۍ وخوره، اوس یې صادر کوو.",farsi:"آمین، خدا دعایت را قبول کند. بیا غذا بخور، همین الان سرو می‌کنیم."},{speaker:"مېلمه",pashto:"په سترګو، حتماً. تر ډوډۍ وروسته باید اجازه واخم، لاره لیرې ده.",farsi:"به روی چشم، حتماً. بعد از غذا باید اجازه بگیرم، راه دور است."},{speaker:"میزبان",pashto:"ښه روره، خو بیا یو ځل سهار راشه چې ناشته وکړو.",farsi:"خوب برادر، اما باز یک بار صبح بیا که صبحانه بخوریم."},{speaker:"مېلمه",pashto:"انشاءالله که ژوند و، بیا به سره ګورو. بختور شئ!",farsi:"ان‌شاءالله اگر زنده بودیم، باز همدیگر را می‌بینیم. خوشبخت شوید!"},{speaker:"میزبان",pashto:"په خیر اوسې، خدای مو په امان.",farsi:"سلامت باشی، خدا به همراهتان."}],vocabulary:[{pashto:"زوم",farsi:"داماد",pronunciation:"Zum"},{pashto:"ناوې",farsi:"عروس",pronunciation:"Nāwe"},{pashto:"بختور",farsi:"خوشبخت",pronunciation:"Bakhtawar"},{pashto:"تود مجلس",farsi:"مجلس گرم / پرشور",pronunciation:"Tawd majlis"}],usefulPhrases:[{pashto:"واده مو مبارک شه",farsi:"عروسیتان مبارک باشد",pronunciation:"Wāda mo mubārak sha"},{pashto:"ښه جوړه شوه",farsi:"جفت خوبی شدند",pronunciation:"Ṣ̌a joṛa shwa"}]},fruitShop:{title:"در میوه فروشی",titlePashto:"په میوه پلورنځي کې",description:"خرید انار و انگور معروف قندهار، بررسی کیفیت و چانه زدن بر سر قیمت",dialogue:[{speaker:"خریدار",pashto:"سلام اکا! ستړی مه شې. ارغنداب انار لرې؟",farsi:"سلام عمو! خسته نباشی. انار ارغنداب داری؟"},{speaker:"دوکاندار",pashto:"و علیکم السلام روره! په خیر راغلې. هو لرم، دا د تازه باغ انار دي. بیخي سره دي.",farsi:"و علیکم السلام برادر! خوش آمدی. بله دارم، این انارهای تازه باغ هستند. کاملاً قرمزند."},{speaker:"خریدار",pashto:"کیلو په څو ده؟ په بکس کې یې راکوې که په تول؟",farsi:"کیلویی چند است؟ در کارتن (باکس) می‌دهی یا وزنی (تول)؟"},{speaker:"دوکاندار",pashto:"ستا په خوښه، که بکس اخلې ارزانه درته تمامېږي. کیلو په سل (۱۰۰) روپۍ ده.",farsi:"به میل تو، اگر کارتن بخری ارزان‌تر برایت تمام می‌شود. کیلویی صد روپیه است."},{speaker:"خریدار",pashto:"سل روپۍ؟! نه اکا، بازار کې مې په اتیا (۸۰) روپۍ ولیدل. لږ جوړ را سره وکړه.",farsi:"صد روپیه؟! نه عمو، در بازار به هشتاد روپیه دیدم. کمی با من راه بیا."},{speaker:"دوکاندار",pashto:"روره! هغه د نورو ځایونو دي، دا زموږ د خپل باغ انار دي. چکه یې کړه، بیخي شات دي.",farsi:"برادر! آن‌ها مال جاهای دیگرند، این انار باغ خودمان است. بچش، اصلاً مثل عسل (شات) است."},{speaker:"خریدار",pashto:"واه، رښتیا هم خوږ دي. ښه، پنځه کیلو انار او دوه کیلو هغه تک ژیړ انګور را کړه.",farsi:"واه، واقعاً هم شیرین هستند. خوب، پنج کیلو انار و دو کیلو از آن انگورهای کاملاً زرد بده."},{speaker:"دوکاندار",pashto:"په سترګو، همدا اوس یې درته وتلم. انګور مو هم بیخي تازه دي، نن له باغه راغلي.",farsi:"به روی چشم، همین الان برایت می‌کشم. انگورمان هم کاملاً تازه است، امروز از باغ آمده."},{speaker:"خریدار",pashto:"ښه، ټول څومره شول؟ لږ مراعات راته وکړه، دایمي مشتري دې یم.",farsi:"خوب، همه چقدر شد؟ کمی مراعاتم را بکن، مشتری دائمی‌ات هستم."},{speaker:"دوکاندار",pashto:"انار ۵۰۰ او انګور ۲۰۰، ټول ۷۰۰ روپۍ شول، خو ستا لپاره ۶۵۰ روپۍ.",farsi:"انار ۵۰۰ و انگور ۲۰۰، کلاً ۷۰۰ روپیه شد، اما برای تو ۶۵۰ روپیه."},{speaker:"خریدار",pashto:"مننه اکا، کور دې ودان. دا یې پیسې، خدای دې برکت درکړي.",farsi:"ممنون عمو، خانه‌ات آباد. این هم پولش، خدا برکتت بدهد."},{speaker:"دوکاندار",pashto:"خیر یوسې روره! بیا راشئ، په مخه دې ښه.",farsi:"خیر ببینی برادر! باز بیایید، راهت بخیر."}],vocabulary:[{pashto:"انار",farsi:"انار",pronunciation:"Anār"},{pashto:"انګور",farsi:"انگور",pronunciation:"Angur"},{pashto:"تک ژیړ",farsi:"کاملاً زرد",pronunciation:"Tak žyaṛ"},{pashto:"شات",farsi:"عسل (استعاره از شیرینی)",pronunciation:"Shāt"}],usefulPhrases:[{pashto:"چکه یې کړه",farsi:"بچش / امتحان کن",pronunciation:"Chaka ye kṛa"},{pashto:"کیلو په څو ده؟",farsi:"کیلویی چند است؟",pronunciation:"Kilo pa tsomra da?"}]},bakery:{title:"در نانوایی (خبازی)",titlePashto:"په ډوډۍ پلورنځي کې",description:"خرید نان گرم کندهاری، صحبت درباره کیفیت پخت و نوبت تنور",dialogue:[{speaker:"خریدار",pashto:"سلام علیکم خلیفه صاحب! ستړی مه شې. روټۍ شته؟ ګرمه ده؟",farsi:"سلام علیکم استاد! خسته نباشی. نان هست؟ گرم است؟"},{speaker:"نانوای",pashto:"و علیکم السلام روره! په خیر راغلې. هو، اوس له تنور نه راوتلې، بیخي سره ده.",farsi:"و علیکم السلام برادر! خوش آمدی. بله، الان از تنور درآمده، کاملاً پخته (سره) است."},{speaker:"خریدار",pashto:"ښه، لس دانې روټۍ راکړه. د لرګیو ده که د ګازو؟",farsi:"خوب، ده تا نان بده. مال هیزم است یا گاز؟"},{speaker:"نانوای",pashto:"زموږ ټولې روټۍ پر لرګیو پخیږي، ځکه ډېر خوند لري. وګوره دا یې نښه ده.",farsi:"همه نان‌های ما روی هیزم پخته می‌شوند، برای همین خیلی لذیذند. ببین این هم نشانه‌اش است."},{speaker:"خریدار",pashto:"رښتیا هم ښه بوی لري. لږ صبر وکړم که تیاره ده؟",farsi:"واقعاً هم بوی خوبی دارد. کمی صبر کنم یا آماده است؟"},{speaker:"نانوای",pashto:"پنځه دقیقې صبر وکړه، اوس درته تازه یې لګوم. پراټه (Paratha) هم غواړې؟",farsi:"پنج دقیقه صبر کن، الان برایت تازه‌اش را می‌زنم. پراتا هم می‌خواهی؟"},{speaker:"خریدار",pashto:"نه، یوازې ساده روټۍ راکړه. ټول څومره پیسې شوې؟",farsi:"نه، فقط نان ساده بده. کلاً چقدر پول شد؟"},{speaker:"نانوای",pashto:"هره روټۍ په شل (۲۰) روپۍ ده، لس دانې دې شوې دوه سوه (۲۰۰) روپۍ.",farsi:"هر نان بیست روپیه است، ده تایت شد دویست روپیه."},{speaker:"خریدار",pashto:"دا یې دوه سوه روپۍ. روټۍ په بټوه (کیسه) کې راکړه چې سړه نشي.",farsi:"این هم دویست روپیه. نان را در سفره (کیسه) بده که سرد نشود."},{speaker:"نانوای",pashto:"په سترګو، دا یې واخله. مبارک دې شه! بیا راشه.",farsi:"به روی چشم، این را بگیر. مبارکت باشد! باز بیا."},{speaker:"خریدار",pashto:"مننه خلیفه صاحب، کور دې آباد. خدای پامان!",farsi:"ممنون استاد صاحب، خانه‌ات آباد. خداحافظ!"}],vocabulary:[{pashto:"روټۍ",farsi:"نان",pronunciation:"Roṭay"},{pashto:"تنور",farsi:"تنور",pronunciation:"Tanur"},{pashto:"پر لرګیو",farsi:"روی هیزم",pronunciation:"Pa largyo"},{pashto:"پراټه",farsi:"نان پراتا (نان روغنی)",pronunciation:"Parāṭa"}],usefulPhrases:[{pashto:"ګرمه ده؟",farsi:"گرم (داغ) است؟",pronunciation:"Garma da?"},{pashto:"څو دانې راکړم؟",farsi:"چند تا (دانه) بدهم؟",pronunciation:"Tsomra dāne rākṛam?"}]},publicBath:{title:"در حمام عمومی",titlePashto:"په حمام کې",description:"رفتن به حمام سنتی در کندهار، صحبت با حمامی درباره کیفیت اوبه و خدمات دلاک",dialogue:[{speaker:"مشتري",pashto:"سلام علیکم اکا! ستړی مه شې. حمام خالي دی؟ اوبه ګرمې دي؟",farsi:"سلام علیکم عمو! خسته نباشی. حمام خالی است؟ آب‌ها گرمند؟"},{speaker:"حمامي",pashto:"و علیکم السلام روره! په خیر راغلې. هو، سهار وختي مې اوبه ګرمې کړې دي، بیخي سرې دي.",farsi:"و علیکم السلام برادر! خوش آمدی. بله، صبح زود آب‌ها را گرم کرده‌ام، کاملاً داغ (سره) هستند."},{speaker:"مشتري",pashto:"ښه، یو خالي کوټه (نمره) راکړه. صابون او شامپو هم لرې؟",farsi:"خوب، یک اتاق (نمره) خالی بده. صابون و شامپو هم داری؟"},{speaker:"حمامي",pashto:"هو لرم، دا نوی صابون واخله، د بدن لپاره بیخي ښه دی. تولیه هم غواړې؟",farsi:"بله دارم، این صابون جدید را بگیر، برای بدن خیلی خوب است. حوله هم می‌خواهی؟"},{speaker:"مشتري",pashto:"هو، یوه پاکه تولیه هم راکړه. دلاک شته؟ غواړم لاس او پښې مې وغږوي.",farsi:"بله، یک حوله تمیز هم بده. دلاک هست؟ می‌خواهم دست و پایم را ماساژ دهد (بمالد)."},{speaker:"حمامي",pashto:"هو رور، ګل آغا دلاک شته، بیخي تکړه دی. پنځه دقیقې وروسته به درشي.",farsi:"بله برادر، گل آقا دلاک هست، خیلی ماهر است. پنج دقیقه بعد پیشت می‌آید."},{speaker:"مشتري",pashto:"ډېره ښه ده. ټول څومره روپۍ کېږي؟ حساب وکړه.",farsi:"خیلی خوب است. کلاً چقدر روپیه می‌شود؟ حساب کن."},{speaker:"حمامي",pashto:"حمام ۵۰، دلاک ۵۰، صابون او تولیه سره ۲۰۰ روپۍ کېږي.",farsi:"حمام ۵۰، دلاک ۵۰، صابون و حوله با هم ۲۰۰ روپیه می‌شود."},{speaker:"مشتري",pashto:"دا یې دوه سوه روپۍ. کالي مېرته چېرته کېږدم؟",farsi:"این هم دویست روپیه. لباس‌هایم را کجا بگذارم؟"},{speaker:"حمامي",pashto:"په هغه بکس کې یې کېږده، کلې یې له ځان سره واخله. په خیر لاړ شه!",farsi:"در آن کمد (بکس) بگذار، کلیدش را با خودت بردار. به سلامت بروی!"},{speaker:"مشتري",pashto:"مننه اکا، کور دې ودان!",farsi:"ممنون عمو، خانه‌ات آباد!"}],vocabulary:[{pashto:"حمام",farsi:"حمام",pronunciation:"Hamām"},{pashto:"دلاک",farsi:"ماساژور / کیسه‌کش",pronunciation:"Dallāk"},{pashto:"تولیه",farsi:"حوله",pronunciation:"Tawliya"},{pashto:"سرې اوبه",farsi:"آب خیلی داغ",pronunciation:"Sre oba"}],usefulPhrases:[{pashto:"اوبه سړې دي",farsi:"آب سرد است",pronunciation:"Oba saṛe di"},{pashto:"صابون راکړه",farsi:"صابون بده",pronunciation:"Sābun rākṛa"}]},mobileShop:{title:"در موبایل فروشی",titlePashto:"په موبایل دوکان کې",description:"خرید کارت اعتبار، اینترنت و حل مشکل سیم‌کارت در دکان موبایل",dialogue:[{speaker:"مشتري",pashto:"سلام علیکم ورور! ستړی مه شې. روشن پنځوسیز (۵۰) کارت لرې؟",farsi:"سلام علیکم برادر! خسته نباشی. کارت ۵۰ روشن داری؟"},{speaker:"دوکاندار",pashto:"و علیکم السلام! په خیر راغلې. هو لرم، دا یې واخله. انټرنیټ هم غواړې؟",farsi:"و علیکم السلام! خوش آمدی. بله دارم، این را بگیر. اینترنت هم می‌خواهی؟"},{speaker:"مشتري",pashto:"هو، د یوې میاشتې پیکج مې فعال کړه. کوم یو یې ښه دی؟",farsi:"بله، پکیج یک ماهه برایم فعال کن. کدامش خوب است؟"},{speaker:"دوکاندار",pashto:"د یو جی‌بي (1GB) پیکج په درې سوه (۳۰۰) روپۍ دی، بیخي چټک دی.",farsi:"پکیج یک گیگ به سیصد روپیه است، خیلی سریع است."},{speaker:"مشتري",pashto:"ښه، همدا فعال کړه. بل مې دا سیم کارت هم لږ ستونزه لري، غږ نه کوي.",farsi:"خوب، همین را فعال کن. دیگر این که سیم‌کارتم کمی مشکل دارد، تماس نمی‌گیرد."},{speaker:"دوکاندار",pashto:"را ویې ښیه... دا خو دې بیلانس خلاص شوی، ځکه بند دی.",farsi:"بده ببینم... این که اعتبارت تمام شده، برای همین قطع است."},{speaker:"مشتري",pashto:"اوه، والله ما فکر کاوه چې خراب شوی دی. مننه چې ویې کتل.",farsi:"اوه، والله من فکر می‌کردم خراب شده است. ممنون که دیدیش."},{speaker:"دوکاندار",pashto:"هیڅ خبره نه ده. نوی موبایل نه اخلې؟ ښه ایفونونه مې راوړي دي.",farsi:"هیچ مشکلی نیست. موبایل نو نمی‌خری؟ آیفون‌های خوبی آورده‌ام."},{speaker:"مشتري",pashto:"اوس خو پیسې نه لرم، بل وخت به یې وګورم. دا یې د کارت پیسې.",farsi:"فعلاً پول ندارم، وقت دیگر خواهم دید. این هم پول کارت."},{speaker:"دوکاندار",pashto:"سمه ده روره، په خیر اوسې. بیا راشه.",farsi:"درست است برادر، سلامت باشی. باز بیا."}],vocabulary:[{pashto:"کارت",farsi:"کارت اعتبار",pronunciation:"Kārt"},{pashto:"پیکج",farsi:"بسته اینترنت",pronunciation:"Pakij"},{pashto:"چټک",farsi:"سریع",pronunciation:"Chaṭak"},{pashto:"بیلانس",farsi:"شارژ / اعتبار",pronunciation:"Bilāns"}],usefulPhrases:[{pashto:"بیلانس مې خلاص شو",farsi:"شارژم تمام شد",pronunciation:"Bilāns me khlās sho"},{pashto:"سیم کارت مې بند دی",farsi:"سیم‌کارتم مسدود است",pronunciation:"Sim kārt me band day"}]},guestHouse:{title:"در سرای (مهمانخانه)",titlePashto:"په سرای کې - پاتې کېدل",description:"گرفتن اتاق در سرای محلی، صحبت درباره قیمت، امنیت و سهولت‌های اقامت",dialogue:[{speaker:"مسافر",pashto:"سلام علیکم! ستړی مه شې. خالي کوټه لرئ؟ یوه شپه پاتې کېږو.",farsi:"سلام علیکم! خسته نباشی. اتاق خالی دارید؟ یک شب می‌مانیم."},{speaker:"صاحب سرای",pashto:"و علیکم السلام! په خیر راغلې. هو لرم، ډېره ښه کوټه ده. څو کسان یاست؟",farsi:"و علیکم السلام! خوش آمدی. بله دارم، اتاق خیلی خوبی است. چند نفر هستید؟"},{speaker:"مسافر",pashto:"موږ دوه کسان یو. کوټه مو پاکه ده؟ بستره مو تازه ده؟",farsi:"ما دو نفر هستیم. اتاقتان تمیز است؟ رختخوابتان تازه است؟"},{speaker:"صاحب سرای",pashto:"بیخي پاکه ده، هره ورځ یې صفا کوو. پنکه او سړې اوبه هم لري.",farsi:"کاملاً تمیز است، هر روز تمیزش می‌کنیم. پنکه و آب سرد هم دارد."},{speaker:"مسافر",pashto:"ډېره ښه ده. امنیت یې څنګه دی؟ موږ سره لږ سامان شته.",farsi:"خیلی خوب است. امنیتش چطور است؟ ما کمی وسایل داریم."},{speaker:"صاحب سرای",pashto:"امنیت یې بیخي سم دی، دلته هیڅوک نه درځي. چوکیدار هم لرو.",farsi:"امنیتش کاملاً درست است، اینجا هیچ کسی نمی‌آید. نگهبان هم داریم."},{speaker:"مسافر",pashto:"قیمت یې څومره دی؟ په روپۍ کېږي که په افغانۍ؟",farsi:"قیمتش چقدر است؟ به روپیه می‌شود یا به افغانی؟"},{speaker:"صاحب سرای",pashto:"شپه په درې سوه (۳۰۰) روپۍ ده. ناشته هم په همدې قیمت کې ده.",farsi:"شبی ۳۰۰ روپیه است. صبحانه هم در همین قیمت است."},{speaker:"مسافر",pashto:"ښه، دا یې درې سوه روپۍ. کوټه را وښیه چې ستړي یو.",farsi:"خوب، این هم سیصد روپیه. اتاق را نشان بده که خسته هستیم."},{speaker:"صاحب سرای",pashto:"په سترګو، راشئ دا لومړۍ کوټه ستاسو ده. په خیر اوسئ!",farsi:"به روی چشم، بیایید این اولین اتاق مال شماست. سلامت باشید!"},{speaker:"مسافر",pashto:"مننه اکا، کور دې آباد.",farsi:"ممنون عمو، خانه‌ات آباد."}],vocabulary:[{pashto:"سرای",farsi:"کاروانسرا / مسافرخانه",pronunciation:"Sarāy"},{pashto:"کوټه",farsi:"اتاق",pronunciation:"Koṭa"},{pashto:"بستره",farsi:"رختخواب",pronunciation:"Bistra"},{pashto:"چوکیدار",farsi:"نگهبان",pronunciation:"Chokidār"}],usefulPhrases:[{pashto:"امنیت یې سم دی؟",farsi:"امنیتش درست است؟",pronunciation:"Amniyat ye sam day?"},{pashto:"ناشته لرئ؟",farsi:"صبحانه دارید؟",pronunciation:"Nāshta larey?"}]}},gx={immediate:[{pashto:"پلار",farsi:"پدر",pronunciation:"plār"},{pashto:"مور",farsi:"مادر",pronunciation:"mor"},{pashto:"ورور",farsi:"برادر",pronunciation:"wror"},{pashto:"خور",farsi:"خواهر",pronunciation:"khor"},{pashto:"زوی",farsi:"پسر",pronunciation:"zoy"},{pashto:"لور",farsi:"دختر",pronunciation:"lor"},{pashto:"وروڼه",farsi:"برادرها",pronunciation:"wroṇa"},{pashto:"خویندې",farsi:"خواهرها",pronunciation:"khwaynde"}],grandparents:[{pashto:"نیکه",farsi:"پدربزرگ",pronunciation:"níka"},{pashto:"نیا",farsi:"مادربزرگ",pronunciation:"nyā"},{pashto:"لمسی",farsi:"نوه (پسر)",pronunciation:"lmasáy"},{pashto:"لمسۍ",farsi:"نوه (دختر)",pronunciation:"lmasəy"}],auntsUncles:[{pashto:"تره",farsi:"عمو",pronunciation:"tra"},{pashto:"ترور",farsi:"عمه",pronunciation:"tror"},{pashto:"ماما",farsi:"دایی",pronunciation:"māmā"},{pashto:"خاله",farsi:"خاله",pronunciation:"khāla"},{pashto:"ترزوی",farsi:"پسرعمو",pronunciation:"tarzóy"},{pashto:"ترلور",farsi:"دخترعمو",pronunciation:"tarlór"},{pashto:"مامازوی",farsi:"پسردایی",pronunciation:"māmāzóy"},{pashto:"مامالور",farsi:"دختردایی",pronunciation:"māmālór"}],marriage:[{pashto:"میرمن",farsi:"همسر (زن)",pronunciation:"mérman"},{pashto:"خاوند",farsi:"همسر (شوهر)",pronunciation:"khāwand"},{pashto:"ناوې",farsi:"عروس",pronunciation:"nāwe"},{pashto:"زوم",farsi:"داماد",pronunciation:"zum"},{pashto:"خسر",farsi:"پدرشوهر/پدرزن",pronunciation:"khsər"},{pashto:"خواښې",farsi:"مادرشوهر/مادرزن",pronunciation:"khwāṣ̌e"},{pashto:"اور",farsi:"زن برادر",pronunciation:"or"},{pashto:"لیور",farsi:"برادر شوهر",pronunciation:"lewár"},{pashto:"ندرور",farsi:"خواهر شوهر",pronunciation:"ndrór"}],children:[{pashto:"ماشوم",farsi:"بچه",pronunciation:"māshúm"},{pashto:"ماشومان",farsi:"بچه‌ها",pronunciation:"māshumān"},{pashto:"هلک",farsi:"پسربچه",pronunciation:"halák"},{pashto:"نجلۍ",farsi:"دختربچه",pronunciation:"njəláy"},{pashto:"ماشوم وړوکی",farsi:"نوزاد",pronunciation:"māshúm waṛukáy"}],adjectives:[{pashto:"لوی",farsi:"بزرگ",pronunciation:"loy"},{pashto:"وړوکی",farsi:"کوچک",pronunciation:"waṛukáy"},{pashto:"مشر",farsi:"بزرگتر",pronunciation:"mashár"},{pashto:"کشر",farsi:"کوچکتر",pronunciation:"kashár"},{pashto:"زوړ",farsi:"پیر",pronunciation:"zoṛ"},{pashto:"ځوان",farsi:"جوان",pronunciation:"dzwān"}],sentences:[{pashto:"زما کورنۍ لویه ده",farsi:"خانواده من بزرگ است",pronunciation:"zmā korənəy lóya da"},{pashto:"زما دوه وروڼه دي",farsi:"من دو برادر دارم",pronunciation:"zmā dwa wroṇa di"},{pashto:"زما یوه خور ده",farsi:"من یک خواهر دارم",pronunciation:"zmā yówa khor da"},{pashto:"ستا پلار څه کار کوي؟",farsi:"پدرت چه کار می‌کند؟",pronunciation:"stā plār tsa kār kawi?"},{pashto:"زما مور ښوونکې ده",farsi:"مادرم معلم است",pronunciation:"zmā mor ṣ̌owunke da"},{pashto:"زما نیکه زوړ دی",farsi:"پدربزرگم پیر است",pronunciation:"zmā níka zoṛ day"},{pashto:"زما ورور واده کوي",farsi:"برادرم ازدواج می‌کند",pronunciation:"zmā wror wāda kawi"},{pashto:"کورنۍ مو څنګه ده؟",farsi:"خانواده‌تان چطور است؟",pronunciation:"korənəy mo tsanga da?"}],sampleConversation:[{speaker:"A",pashto:"ستا کورنۍ څومره لویه ده؟",farsi:"خانواده‌ات چقدر بزرگ است؟"},{speaker:"B",pashto:"زما پنځه غړي دي",farsi:"ما پنج نفریم"},{speaker:"A",pashto:"څوک څوک؟",farsi:"کی‌ها؟"},{speaker:"B",pashto:"پلار، مور، زه، یو ورور او یوه خور",farsi:"پدر، مادر، من، یک برادر و یک خواهر"},{speaker:"A",pashto:"ستا ورور مشر دی که کشر؟",farsi:"برادرت بزرگتر است یا کوچکتر؟"},{speaker:"B",pashto:"هغه مشر دی",farsi:"او بزرگتر است"},{speaker:"A",pashto:"هغه څه کار کوي؟",farsi:"او چه کار می‌کند؟"},{speaker:"B",pashto:"هغه ډاکټر دی",farsi:"او داکتر است"}],culturalNote:{farsi:"در فرهنگ پښتون، خانواده بسیار مهم است. کلمه «کورنۍ» از «کور» (خانه) می‌آید که نشان‌دهنده اهمیت خانه و خانواده است. پښتون‌ها معمولاً در خانواده‌های گسترده زندگی می‌کنند و احترام به بزرگترها بسیار مهم است.",pashto:"په پښتون کلتور کې، کورنۍ ډیره مهمه ده. کلمه «کورنۍ» له «کور» نه راځي چې د کور او کورنۍ اهمیت ښیي. پښتانه عموماً په پراخو کورنیو کې ژوند کوي او د مشرانو درناوی ډیر مهم دی."}},Hd=[{id:"greetings",title:"سلام و احوالپرسی",titlePashto:"سلام او حال احوال",description:"سلام‌ها، خداحافظی و عبارات روزمره"},{id:"family",title:"خانواده",titlePashto:"کورنۍ",description:"اعضای خانواده و خویشاوندان"},{id:"numbers",title:"اعداد",titlePashto:"شمېرې",description:"اعداد ۱ تا ۱۰۰ و بیشتر"},{id:"body-parts",title:"اعضای بدن",titlePashto:"د بدن غړي",description:"سر، دست، پا و اعضای داخلی"},{id:"food",title:"غذا و خوراکی",titlePashto:"خواړه",description:"غذاها، میوه‌ها، سبزیجات و نوشیدنی‌ها"},{id:"colors",title:"رنگ‌ها",titlePashto:"رنګونه",description:"رنگ‌های اصلی و ترکیبی"},{id:"verbs",title:"فعل‌ها",titlePashto:"فعلونه",description:"فعل‌های رایج و صرف آنها"},{id:"slang",title:"اصطلاحات عامیانه",titlePashto:"عامیانه اصطلاحات",description:"عبارات محاوره‌ای و ضرب‌المثل‌ها"},{id:"conversations",title:"مکالمات",titlePashto:"خبرې اترې",description:"مکالمات روزمره در موقعیت‌های مختلف"}],bx={greetings:mx,family:gx,numbers:px,"body-parts":cx,food:fx,colors:dx,verbs:hx,slang:yx,conversations:Da},Qd={greetings:Xg,family:rn,numbers:mh,"body-parts":yh,food:Nh,colors:vh,verbs:mu,slang:hu,conversations:Ue};function Yd(){const{categoryId:l}=zo(),[c,p]=T.useState(null);if(!l)return o.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[o.jsx("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:o.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[o.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30",children:o.jsx(ot,{className:"w-7 h-7 text-white"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:"واژگان پښتو کندهاری"}),o.jsx("p",{className:"text-slate-400",children:"دسته‌بندی مورد نظر را انتخاب کنید"})]})]})}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:Hd.map(B=>{const z=Qd[B.id]||ot;return o.jsxs(Pa,{to:`/vocabulary/${B.id}`,className:"bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-700 hover:border-blue-500/50 text-center flex flex-col items-center group",children:[o.jsx("div",{className:"w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border border-blue-500/30",children:o.jsx(z,{className:"w-7 h-7 text-blue-400"})}),o.jsx("h3",{className:"font-bold text-slate-200 mb-1",children:B.title}),o.jsx("p",{className:"text-sm text-blue-400",children:B.titlePashto}),o.jsx("p",{className:"text-xs text-slate-500 mt-2",children:B.description})]},B.id)})})]});const u=Hd.find(B=>B.id===l),d=bx[l],m=Qd[l]||ot;if(!u||!d)return o.jsxs("div",{className:"max-w-3xl mx-auto text-center py-12",children:[o.jsx(ot,{className:"w-16 h-16 text-slate-600 mx-auto mb-4"}),o.jsx("p",{className:"text-xl text-slate-400 mb-4",children:"دسته‌بندی پیدا نشد"}),o.jsxs(Pa,{to:"/vocabulary",className:"text-blue-400 hover:text-blue-300 inline-flex items-center gap-2",children:[o.jsx(ue,{className:"w-4 h-4"}),"بازگشت به لیست"]})]});const h=(B,z,M)=>{if(!z||z.length===0)return null;const R=c===M;return o.jsxs("div",{className:"mb-4",children:[o.jsxs("button",{onClick:()=>p(R?null:M),className:"w-full bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg p-4 text-right flex justify-between items-center transition-colors border border-emerald-500/30",children:[o.jsx("span",{className:"font-bold text-emerald-400",children:B}),R?o.jsx(on,{className:"w-5 h-5 text-emerald-400"}):o.jsx(Oe,{className:"w-5 h-5 text-emerald-400"})]}),R&&o.jsx("div",{className:"bg-slate-700/50 rounded-b-lg border border-t-0 border-emerald-500/30 p-4",children:o.jsx("div",{className:"space-y-3",children:z.map((_,q)=>o.jsxs("div",{className:"flex justify-between items-center p-3 bg-slate-800 rounded-lg border border-slate-600",children:[o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-xl font-bold text-emerald-400 block",children:_.pashto}),o.jsx("span",{className:"text-sm text-slate-500",children:_.pronunciation})]}),o.jsx("span",{className:"text-slate-300",children:_.farsi})]},q))})})]},M)},b=B=>{if(!B||B.length===0)return null;const z=c==="sentences";return o.jsxs("div",{className:"mb-4",children:[o.jsxs("button",{onClick:()=>p(z?null:"sentences"),className:"w-full bg-amber-500/20 hover:bg-amber-500/30 rounded-lg p-4 text-right flex justify-between items-center transition-colors border border-amber-500/30",children:[o.jsx("span",{className:"font-bold text-amber-400",children:"جملات مفید"}),z?o.jsx(on,{className:"w-5 h-5 text-amber-400"}):o.jsx(Oe,{className:"w-5 h-5 text-amber-400"})]}),z&&o.jsx("div",{className:"bg-slate-700/50 rounded-b-lg border border-t-0 border-amber-500/30 p-4",children:o.jsx("div",{className:"space-y-4",children:B.map((M,R)=>o.jsxs("div",{className:"p-4 bg-amber-500/20 rounded-lg border border-amber-500/30",children:[o.jsx("p",{className:"text-xl font-bold text-amber-300 mb-1",children:M.pashto}),o.jsx("p",{className:"text-slate-300 mb-1",children:M.farsi}),o.jsx("p",{className:"text-sm text-slate-500",children:M.pronunciation})]},R))})})]})},v=(B,z="مکالمه نمونه")=>{if(!B||B.length===0)return null;const M=c==="conversation";return o.jsxs("div",{className:"mb-4",children:[o.jsxs("button",{onClick:()=>p(M?null:"conversation"),className:"w-full bg-blue-500/20 hover:bg-blue-500/30 rounded-lg p-4 text-right flex justify-between items-center transition-colors border border-blue-500/30",children:[o.jsx("span",{className:"font-bold text-blue-400",children:z}),M?o.jsx(on,{className:"w-5 h-5 text-blue-400"}):o.jsx(Oe,{className:"w-5 h-5 text-blue-400"})]}),M&&o.jsx("div",{className:"bg-slate-700/50 rounded-b-lg border border-t-0 border-blue-500/30 p-4",children:o.jsx("div",{className:"space-y-3",children:B.map((R,_)=>o.jsxs("div",{className:`p-3 rounded-lg ${R.speaker==="A"?"bg-blue-500/20 mr-8 border border-blue-500/30":"bg-slate-700 ml-8 border border-slate-600"}`,children:[o.jsx("span",{className:"text-xs text-slate-500 block mb-1",children:R.speaker}),o.jsx("p",{className:"font-bold text-slate-200",children:R.pashto}),o.jsx("p",{className:"text-sm text-slate-400",children:R.farsi})]},_))})})]})},y=B=>{if(!B||B.length===0)return null;const z=c==="comparison";return o.jsxs("div",{className:"mb-4",children:[o.jsxs("button",{onClick:()=>p(z?null:"comparison"),className:"w-full bg-purple-500/20 hover:bg-purple-500/30 rounded-lg p-4 text-right flex justify-between items-center transition-colors border border-purple-500/30",children:[o.jsx("span",{className:"font-bold text-purple-400",children:"مقایسه رسمی و غیررسمی"}),z?o.jsx(on,{className:"w-5 h-5 text-purple-400"}):o.jsx(Oe,{className:"w-5 h-5 text-purple-400"})]}),z&&o.jsx("div",{className:"bg-slate-700/50 rounded-b-lg border border-t-0 border-purple-500/30 p-4",children:o.jsx("div",{className:"space-y-4",children:B.map((M,R)=>o.jsxs("div",{className:"border border-slate-600 rounded-xl overflow-hidden",children:[o.jsx("div",{className:"bg-slate-700 px-4 py-2 text-center",children:o.jsx("span",{className:"font-bold text-slate-300",children:M.context})}),o.jsxs("div",{className:"grid grid-cols-2 divide-x divide-slate-600",children:[o.jsxs("div",{className:"p-4 bg-blue-500/20",children:[o.jsx("div",{className:"text-xs text-blue-400 font-bold mb-2 text-center",children:"رسمی"}),o.jsx("p",{className:"text-lg font-bold text-blue-300 text-center",children:M.formal.pashto}),o.jsx("p",{className:"text-sm text-slate-400 text-center",children:M.formal.farsi})]}),o.jsxs("div",{className:"p-4 bg-emerald-500/20",children:[o.jsx("div",{className:"text-xs text-emerald-400 font-bold mb-2 text-center",children:"غیررسمی"}),o.jsx("p",{className:"text-lg font-bold text-emerald-300 text-center",children:M.informal.pashto}),o.jsx("p",{className:"text-sm text-slate-400 text-center",children:M.informal.farsi})]})]})]},R))})})]})},k=(()=>{const B=[],z={basic:"پایه",head:"سر و صورت",body:"تنه",limbs:"دست و پا",internal:"اعضای داخلی",teens:"۱۱ تا ۲۰",tens:"دهگان‌ها",twenties:"۲۱ تا ۲۵",large:"اعداد بزرگ",mainDishes:"غذاهای اصلی",vegetables:"سبزیجات",fruits:"میوه‌ها",drinks:"نوشیدنی‌ها",dairy:"لبنیات",spices:"ادویه‌ها",shades:"سایه‌ها",adjectives:"صفت‌ها",nature:"در طبیعت",movement:"حرکتی",daily:"روزمره",emotional:"احساسی",formal:"رسمی",informal:"غیررسمی",howAreYou:"احوالپرسی",responses:"پاسخ‌ها",timeOfDay:"وقت روز",thanksAndApology:"تشکر و عذرخواهی",welcome:"خوش‌آمدگویی",common:"رایج",exclamations:"تعجب",kandahariSpecific:"خاص کندهاری",friendly:"دوستانه",negative:"منفی",proverbs:"ضرب‌المثل‌ها",immediate:"خانواده نزدیک",grandparents:"پدربزرگ و مادربزرگ",auntsUncles:"عمو و خاله",marriage:"ازدواج",children:"بچه‌ها"};return Object.keys(d).forEach(M=>{if(M==="sentences"||M==="sampleConversation"||M==="culturalNote"||M==="conjugation"||M==="comparison")return;const R=d[M];Array.isArray(R)&&R.length>0&&R[0].pashto&&B.push({key:M,title:z[M]||M,items:R})}),B})();return o.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[o.jsxs(Pa,{to:"/vocabulary",className:"text-blue-400 hover:text-blue-300 mb-4 inline-flex items-center gap-2 text-sm",children:[o.jsx(ue,{className:"w-4 h-4"}),"بازگشت به واژگان"]}),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:"w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30",children:o.jsx(m,{className:"w-8 h-8 text-blue-400"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:u.title}),o.jsx("p",{className:"text-blue-400",children:u.titlePashto})]})]})]}),o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 space-y-4",children:[d.comparison&&y(d.comparison),k.map(B=>h(B.title,B.items,B.key)),d.sentences&&b(d.sentences),d.sampleConversation&&v(d.sampleConversation)]}),d.culturalNote&&o.jsxs("div",{className:"bg-purple-500/20 rounded-2xl p-6 border border-purple-500/30 shadow-lg",children:[o.jsx("h3",{className:"font-bold text-purple-300 mb-2",children:"نکته فرهنگی"}),o.jsx("p",{className:"text-slate-300 leading-relaxed",children:d.culturalNote.farsi})]})]})}const Kd=[{id:"shopping",...Da.shopping},{id:"restaurant",...Da.restaurant},{id:"introduction",...Da.introduction},{id:"taxi",...Da.taxi},{id:"phone",...Da.phone},{id:"doctor",...Da.doctor},{id:"guestVisit",...Da.guestVisit},{id:"tailor",...Da.tailor},{id:"mechanic",...Da.mechanic},{id:"airport",...Da.airport},{id:"family_gathering",...Da.family_gathering},{id:"pharmacy",...Da.pharmacy},{id:"bank",...Da.bank},{id:"mosque",...Da.mosque},{id:"wedding",...Da.wedding},{id:"fruitShop",...Da.fruitShop},{id:"bakery",...Da.bakery},{id:"publicBath",...Da.publicBath},{id:"mobileShop",...Da.mobileShop},{id:"guestHouse",...Da.guestHouse}];function Gd(){const{conversationId:l}=zo(),[c,p]=T.useState(!1),[u,d]=T.useState(!1),[m,h]=T.useState(!0);if(!l)return o.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[o.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30",children:o.jsx(Ue,{className:"w-7 h-7 text-white"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:"مکالمات روزمره"}),o.jsx("p",{className:"text-slate-400",children:"خبرې اترې - یادگیری مکالمه در موقعیت‌های مختلف"})]})]}),o.jsx("p",{className:"text-sm text-slate-300 bg-purple-500/20 p-3 rounded-xl border border-purple-500/30",children:"در هر مکالمه، نسخه‌های رسمی و غیررسمی جملات نشان داده می‌شود تا بتوانید در موقعیت‌های مختلف از آنها استفاده کنید."})]}),o.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:Kd.map(y=>o.jsxs(Pa,{to:`/conversation/${y.id}`,className:"bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-700 hover:border-purple-500/50 group",children:[o.jsx("h3",{className:"font-bold text-slate-200 text-xl mb-1 group-hover:text-purple-400",children:y.title}),o.jsx("p",{className:"text-purple-400 mb-2",children:y.titlePashto}),y.description&&o.jsx("p",{className:"text-sm text-slate-500 mb-3",children:y.description}),o.jsxs("div",{className:"flex items-center gap-4 text-xs text-slate-500",children:[o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(rn,{className:"w-3 h-3"}),y.dialogue.length," خط"]}),y.vocabulary&&o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(ot,{className:"w-3 h-3"}),y.vocabulary.length," واژه"]})]})]},y.id))})]});const b=Kd.find(y=>y.id===l);if(!b)return o.jsxs("div",{className:"max-w-3xl mx-auto text-center py-12",children:[o.jsx(Ue,{className:"w-16 h-16 text-slate-600 mx-auto mb-4"}),o.jsx("p",{className:"text-xl text-slate-400 mb-4",children:"مکالمه پیدا نشد"}),o.jsxs(Pa,{to:"/conversation",className:"text-purple-400 hover:text-purple-300 inline-flex items-center gap-2",children:[o.jsx(ue,{className:"w-4 h-4"}),"بازگشت به لیست"]})]});const v=b.dialogue.some(y=>y.formalAlt||y.informalAlt);return o.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[o.jsxs(Pa,{to:"/conversation",className:"text-purple-400 hover:text-purple-300 mb-4 inline-flex items-center gap-2 text-sm",children:[o.jsx(ue,{className:"w-4 h-4"}),"بازگشت به مکالمات"]}),o.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:b.title}),o.jsx("p",{className:"text-purple-400 mb-2",children:b.titlePashto}),b.description&&o.jsx("p",{className:"text-sm text-slate-500",children:b.description}),v&&o.jsx("div",{className:"mt-4 flex items-center gap-3",children:o.jsx("button",{onClick:()=>h(!m),className:`px-4 py-2 rounded-xl text-sm font-medium transition-all ${m?"bg-purple-500 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600"}`,children:m?"✓ نمایش رسمی/غیررسمی":"نمایش رسمی/غیررسمی"})})]}),o.jsx("div",{className:"bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-6",children:o.jsx("div",{className:"space-y-4",children:b.dialogue.map((y,A)=>{const k=A%2===0,B=y.formalAlt||y.informalAlt;return o.jsxs("div",{className:"space-y-2",children:[o.jsx("div",{className:`flex ${k?"justify-end":"justify-start"}`,children:o.jsxs("div",{className:`max-w-[85%] p-4 rounded-2xl ${k?"bg-purple-600 text-white rounded-br-sm":"bg-slate-700 text-slate-200 rounded-bl-sm border border-slate-600"}`,children:[o.jsx("span",{className:`text-xs block mb-1 ${k?"text-purple-200":"text-slate-500"}`,children:y.speaker}),o.jsx("p",{className:"font-bold text-lg leading-relaxed",children:y.pashto}),o.jsx("p",{className:`text-sm mt-1 ${k?"text-purple-100":"text-slate-400"}`,children:y.farsi})]})}),m&&B&&o.jsx("div",{className:`flex ${k?"justify-end":"justify-start"}`,children:o.jsxs("div",{className:`max-w-[85%] p-3 rounded-xl border-2 border-dashed ${k?"border-purple-500/50 bg-purple-500/10":"border-slate-600 bg-slate-700/50"}`,children:[o.jsx("span",{className:`text-xs font-medium block mb-1 ${y.formalAlt?"text-emerald-400":"text-amber-400"}`,children:y.formalAlt?"📋 رسمی:":"💬 غیررسمی:"}),o.jsx("p",{className:"font-bold text-slate-200",children:y.formalAlt||y.informalAlt}),o.jsx("p",{className:"text-sm text-slate-500 mt-1",children:y.formalAltFarsi||y.informalAltFarsi})]})})]},A)})})}),b.vocabulary&&o.jsxs("div",{className:"bg-slate-800 rounded-2xl shadow-lg border border-slate-700 overflow-hidden",children:[o.jsxs("button",{onClick:()=>p(!c),className:"w-full p-4 bg-amber-500/20 hover:bg-amber-500/30 transition-colors flex justify-between items-center border-b border-amber-500/30",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(ot,{className:"w-5 h-5 text-amber-400"}),o.jsxs("span",{className:"font-bold text-amber-300",children:["واژگان کلیدی (",b.vocabulary.length,")"]})]}),c?o.jsx(on,{className:"w-5 h-5 text-amber-400"}):o.jsx(Oe,{className:"w-5 h-5 text-amber-400"})]}),c&&o.jsx("div",{className:"p-4",children:o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:b.vocabulary.map((y,A)=>o.jsxs("div",{className:"bg-amber-500/10 rounded-lg p-3 hover:bg-amber-500/20 transition-colors border border-amber-500/20",children:[o.jsx("p",{className:"font-bold text-amber-300 text-lg",children:y.pashto}),o.jsx("p",{className:"text-sm text-slate-300",children:y.farsi}),o.jsx("p",{className:"text-xs text-slate-500 font-mono",children:y.pronunciation})]},A))})})]}),b.usefulPhrases&&o.jsxs("div",{className:"bg-slate-800 rounded-2xl shadow-lg border border-slate-700 overflow-hidden",children:[o.jsxs("button",{onClick:()=>d(!u),className:"w-full p-4 bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors flex justify-between items-center border-b border-emerald-500/30",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(yu,{className:"w-5 h-5 text-emerald-400"}),o.jsxs("span",{className:"font-bold text-emerald-300",children:["عبارات مفید (",b.usefulPhrases.length,")"]})]}),u?o.jsx(on,{className:"w-5 h-5 text-emerald-400"}):o.jsx(Oe,{className:"w-5 h-5 text-emerald-400"})]}),u&&o.jsx("div",{className:"p-4 space-y-3",children:b.usefulPhrases.map((y,A)=>o.jsxs("div",{className:"bg-emerald-500/10 rounded-lg p-4 hover:bg-emerald-500/20 transition-colors border border-emerald-500/20",children:[o.jsx("p",{className:"font-bold text-emerald-300 text-lg",children:y.pashto}),o.jsx("p",{className:"text-slate-300",children:y.farsi}),o.jsx("p",{className:"text-xs text-slate-500 font-mono mt-1",children:y.pronunciation})]},A))})]})]})}const vx={"to-be":{id:"to-be",infinitive:"اوسېدل",infinitiveFarsi:"بودن",root:"یم/دی",type:"irregular",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"یم",farsi:"هستم",pronunciation:"yam"},{pronoun:"ته",pashto:"یې",farsi:"هستی",pronunciation:"ye"},{pronoun:"هغه (م)",pashto:"دی",farsi:"است",pronunciation:"day"},{pronoun:"هغه (ز)",pashto:"ده",farsi:"است",pronunciation:"da"},{pronoun:"موږ",pashto:"یو",farsi:"هستیم",pronunciation:"yu"},{pronoun:"تاسو",pashto:"یاست",farsi:"هستید",pronunciation:"yāst"},{pronoun:"هغوی",pashto:"دي",farsi:"هستند",pronunciation:"di"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"وم",farsi:"بودم",pronunciation:"wam"},{pronoun:"ته",pashto:"وې",farsi:"بودی",pronunciation:"we"},{pronoun:"هغه (م)",pashto:"و",farsi:"بود",pronunciation:"wu"},{pronoun:"هغه (ز)",pashto:"وه",farsi:"بود",pronunciation:"wa"},{pronoun:"موږ",pashto:"وو",farsi:"بودیم",pronunciation:"wu"},{pronoun:"تاسو",pashto:"وئ",farsi:"بودید",pronunciation:"wey"},{pronoun:"هغوی",pashto:"ول",farsi:"بودند",pronunciation:"wal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به یم",farsi:"خواهم بود",pronunciation:"ba yam"},{pronoun:"ته",pashto:"به یې",farsi:"خواهی بود",pronunciation:"ba ye"},{pronoun:"هغه",pashto:"به دی",farsi:"خواهد بود",pronunciation:"ba day"},{pronoun:"موږ",pashto:"به یو",farsi:"خواهیم بود",pronunciation:"ba yu"},{pronoun:"تاسو",pashto:"به یاست",farsi:"خواهید بود",pronunciation:"ba yāst"},{pronoun:"هغوی",pashto:"به دي",farsi:"خواهند بود",pronunciation:"ba di"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"یه",farsi:"باش",pronunciation:"ya"},{pronoun:"تاسو",pashto:"یاست",farsi:"باشید",pronunciation:"yāst"}],negative:[{pronoun:"ته",pashto:"مه یه",farsi:"نباش",pronunciation:"ma ya"},{pronoun:"تاسو",pashto:"مه یاست",farsi:"نباشید",pronunciation:"ma yāst"}]}},examples:[{pashto:"زه ښه یم",farsi:"من خوبم"},{pashto:"هغه داکتر دی",farsi:"او داکتر است"},{pashto:"زه پرون کور کې وم",farsi:"من دیروز در خانه بودم"}]},"to-go":{id:"to-go",infinitive:"تلل",infinitiveFarsi:"رفتن",root:"ځ",pastRoot:"لاړ",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ځم",farsi:"می‌روم",pronunciation:"dzam"},{pronoun:"ته",pashto:"ځې",farsi:"می‌روی",pronunciation:"dze"},{pronoun:"هغه",pashto:"ځي",farsi:"می‌رود",pronunciation:"dzi"},{pronoun:"موږ",pashto:"ځو",farsi:"می‌رویم",pronunciation:"dzu"},{pronoun:"تاسو",pashto:"ځئ",farsi:"می‌روید",pronunciation:"dzey"},{pronoun:"هغوی",pashto:"ځي",farsi:"می‌روند",pronunciation:"dzi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"لاړم",farsi:"رفتم",pronunciation:"lāṛam"},{pronoun:"ته",pashto:"لاړې",farsi:"رفتی",pronunciation:"lāṛe"},{pronoun:"هغه (م)",pashto:"لاړ",farsi:"رفت",pronunciation:"lāṛ"},{pronoun:"هغه (ز)",pashto:"لاړه",farsi:"رفت",pronunciation:"lāṛa"},{pronoun:"موږ",pashto:"لاړو",farsi:"رفتیم",pronunciation:"lāṛu"},{pronoun:"تاسو",pashto:"لاړئ",farsi:"رفتید",pronunciation:"lāṛey"},{pronoun:"هغوی",pashto:"لاړل",farsi:"رفتند",pronunciation:"lāṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ځم",farsi:"خواهم رفت",pronunciation:"ba dzam"},{pronoun:"ته",pashto:"به ځې",farsi:"خواهی رفت",pronunciation:"ba dze"},{pronoun:"هغه",pashto:"به ځي",farsi:"خواهد رفت",pronunciation:"ba dzi"},{pronoun:"موږ",pashto:"به ځو",farsi:"خواهیم رفت",pronunciation:"ba dzu"},{pronoun:"تاسو",pashto:"به ځئ",farsi:"خواهید رفت",pronunciation:"ba dzey"},{pronoun:"هغوی",pashto:"به ځي",farsi:"خواهند رفت",pronunciation:"ba dzi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"لاړ شه",farsi:"برو",pronunciation:"lāṛ sha"},{pronoun:"تاسو",pashto:"لاړ شئ",farsi:"بروید",pronunciation:"lāṛ shey"}],negative:[{pronoun:"ته",pashto:"مه ځه",farsi:"نرو",pronunciation:"ma dza"},{pronoun:"تاسو",pashto:"مه ځئ",farsi:"نروید",pronunciation:"ma dzey"}]}},examples:[{pashto:"زه کور ته ځم",farsi:"من به خانه می‌روم"},{pashto:"هغه پرون بازار ته لاړ",farsi:"او دیروز به بازار رفت"},{pashto:"زه به سبا کابل ته ځم",farsi:"من فردا به کابل خواهم رفت"}]},"to-come":{id:"to-come",infinitive:"راتلل",infinitiveFarsi:"آمدن",root:"راځ",pastRoot:"راغل",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"راځم",farsi:"می‌آیم",pronunciation:"rādzam"},{pronoun:"ته",pashto:"راځې",farsi:"می‌آیی",pronunciation:"rādze"},{pronoun:"هغه",pashto:"راځي",farsi:"می‌آید",pronunciation:"rādzi"},{pronoun:"موږ",pashto:"راځو",farsi:"می‌آییم",pronunciation:"rādzu"},{pronoun:"تاسو",pashto:"راځئ",farsi:"می‌آیید",pronunciation:"rādzey"},{pronoun:"هغوی",pashto:"راځي",farsi:"می‌آیند",pronunciation:"rādzi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"راغلم",farsi:"آمدم",pronunciation:"rāghlam"},{pronoun:"ته",pashto:"راغلې",farsi:"آمدی",pronunciation:"rāghle"},{pronoun:"هغه (م)",pashto:"راغی",farsi:"آمد",pronunciation:"rāghay"},{pronoun:"هغه (ز)",pashto:"راغله",farsi:"آمد",pronunciation:"rāghla"},{pronoun:"موږ",pashto:"راغلو",farsi:"آمدیم",pronunciation:"rāghlu"},{pronoun:"تاسو",pashto:"راغلئ",farsi:"آمدید",pronunciation:"rāghley"},{pronoun:"هغوی",pashto:"راغلل",farsi:"آمدند",pronunciation:"rāghlal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به راځم",farsi:"خواهم آمد",pronunciation:"ba rādzam"},{pronoun:"ته",pashto:"به راځې",farsi:"خواهی آمد",pronunciation:"ba rādze"},{pronoun:"هغه",pashto:"به راځي",farsi:"خواهد آمد",pronunciation:"ba rādzi"},{pronoun:"موږ",pashto:"به راځو",farsi:"خواهیم آمد",pronunciation:"ba rādzu"},{pronoun:"تاسو",pashto:"به راځئ",farsi:"خواهید آمد",pronunciation:"ba rādzey"},{pronoun:"هغوی",pashto:"به راځي",farsi:"خواهند آمد",pronunciation:"ba rādzi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"راشه",farsi:"بیا",pronunciation:"rāsha"},{pronoun:"تاسو",pashto:"راشئ",farsi:"بیایید",pronunciation:"rāshey"}],negative:[{pronoun:"ته",pashto:"مه راځه",farsi:"نیا",pronunciation:"ma rādza"},{pronoun:"تاسو",pashto:"مه راځئ",farsi:"نیایید",pronunciation:"ma rādzey"}]}},examples:[{pashto:"زه اوس راځم",farsi:"من الان می‌آیم"},{pashto:"هغه پرون راغی",farsi:"او دیروز آمد"},{pashto:"راشه!",farsi:"بیا!"}]},"to-eat":{id:"to-eat",infinitive:"خوړل",infinitiveFarsi:"خوردن",root:"خور",pastRoot:"وخوړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"خورم",farsi:"می‌خورم",pronunciation:"khoram"},{pronoun:"ته",pashto:"خورې",farsi:"می‌خوری",pronunciation:"khore"},{pronoun:"هغه",pashto:"خوري",farsi:"می‌خورد",pronunciation:"khori"},{pronoun:"موږ",pashto:"خورو",farsi:"می‌خوریم",pronunciation:"khoru"},{pronoun:"تاسو",pashto:"خورئ",farsi:"می‌خورید",pronunciation:"khorey"},{pronoun:"هغوی",pashto:"خوري",farsi:"می‌خورند",pronunciation:"khori"}]},past:{name:"گذشته",namePashto:"تېرمهال",note:"فعل متعدی - با مفعول مطابقت می‌کند",conjugations:[{pronoun:"ما",pashto:"وخوړ",farsi:"خوردم (مذکر)",pronunciation:"wakhoṛ"},{pronoun:"ما",pashto:"وخوړه",farsi:"خوردم (مونث)",pronunciation:"wakhoṛa"},{pronoun:"تا",pashto:"وخوړ",farsi:"خوردی",pronunciation:"wakhoṛ"},{pronoun:"هغه",pashto:"وخوړ",farsi:"خورد",pronunciation:"wakhoṛ"},{pronoun:"موږ",pashto:"وخوړل",farsi:"خوردیم",pronunciation:"wakhoṛal"},{pronoun:"تاسو",pashto:"وخوړل",farsi:"خوردید",pronunciation:"wakhoṛal"},{pronoun:"هغوی",pashto:"وخوړل",farsi:"خوردند",pronunciation:"wakhoṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به خورم",farsi:"خواهم خورد",pronunciation:"ba khoram"},{pronoun:"ته",pashto:"به خورې",farsi:"خواهی خورد",pronunciation:"ba khore"},{pronoun:"هغه",pashto:"به خوري",farsi:"خواهد خورد",pronunciation:"ba khori"},{pronoun:"موږ",pashto:"به خورو",farsi:"خواهیم خورد",pronunciation:"ba khoru"},{pronoun:"تاسو",pashto:"به خورئ",farsi:"خواهید خورد",pronunciation:"ba khorey"},{pronoun:"هغوی",pashto:"به خوري",farsi:"خواهند خورد",pronunciation:"ba khori"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وخوره",farsi:"بخور",pronunciation:"wakhora"},{pronoun:"تاسو",pashto:"وخورئ",farsi:"بخورید",pronunciation:"wakhorey"}],negative:[{pronoun:"ته",pashto:"مه خوره",farsi:"نخور",pronunciation:"ma khora"},{pronoun:"تاسو",pashto:"مه خورئ",farsi:"نخورید",pronunciation:"ma khorey"}]}},examples:[{pashto:"زه ډوډۍ خورم",farsi:"من غذا می‌خورم"},{pashto:"ما ډوډۍ وخوړه",farsi:"من غذا خوردم"},{pashto:"وخوره!",farsi:"بخور!"}]},"to-drink":{id:"to-drink",infinitive:"څښل",infinitiveFarsi:"نوشیدن",root:"څښ",pastRoot:"وڅښ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"څښم",farsi:"می‌نوشم",pronunciation:"tsṣ̌am"},{pronoun:"ته",pashto:"څښې",farsi:"می‌نوشی",pronunciation:"tsṣ̌e"},{pronoun:"هغه",pashto:"څښي",farsi:"می‌نوشد",pronunciation:"tsṣ̌i"},{pronoun:"موږ",pashto:"څښو",farsi:"می‌نوشیم",pronunciation:"tsṣ̌u"},{pronoun:"تاسو",pashto:"څښئ",farsi:"می‌نوشید",pronunciation:"tsṣ̌ey"},{pronoun:"هغوی",pashto:"څښي",farsi:"می‌نوشند",pronunciation:"tsṣ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"وڅښه",farsi:"نوشیدم",pronunciation:"watsṣ̌a"},{pronoun:"تا",pashto:"وڅښه",farsi:"نوشیدی",pronunciation:"watsṣ̌a"},{pronoun:"هغه",pashto:"وڅښه",farsi:"نوشید",pronunciation:"watsṣ̌a"},{pronoun:"موږ",pashto:"وڅښل",farsi:"نوشیدیم",pronunciation:"watsṣ̌al"},{pronoun:"تاسو",pashto:"وڅښل",farsi:"نوشیدید",pronunciation:"watsṣ̌al"},{pronoun:"هغوی",pashto:"وڅښل",farsi:"نوشیدند",pronunciation:"watsṣ̌al"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به څښم",farsi:"خواهم نوشید",pronunciation:"ba tsṣ̌am"},{pronoun:"ته",pashto:"به څښې",farsi:"خواهی نوشید",pronunciation:"ba tsṣ̌e"},{pronoun:"هغه",pashto:"به څښي",farsi:"خواهد نوشید",pronunciation:"ba tsṣ̌i"},{pronoun:"موږ",pashto:"به څښو",farsi:"خواهیم نوشید",pronunciation:"ba tsṣ̌u"},{pronoun:"تاسو",pashto:"به څښئ",farsi:"خواهید نوشید",pronunciation:"ba tsṣ̌ey"},{pronoun:"هغوی",pashto:"به څښي",farsi:"خواهند نوشید",pronunciation:"ba tsṣ̌i"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وڅښه",farsi:"بنوش",pronunciation:"watsṣ̌a"},{pronoun:"تاسو",pashto:"وڅښئ",farsi:"بنوشید",pronunciation:"watsṣ̌ey"}],negative:[{pronoun:"ته",pashto:"مه څښه",farsi:"ننوش",pronunciation:"ma tsṣ̌a"},{pronoun:"تاسو",pashto:"مه څښئ",farsi:"ننوشید",pronunciation:"ma tsṣ̌ey"}]}},examples:[{pashto:"زه چای څښم",farsi:"من چای می‌نوشم"},{pashto:"ما اوبه وڅښلې",farsi:"من آب نوشیدم"}]},"to-do":{id:"to-do",infinitive:"کول",infinitiveFarsi:"کردن",root:"کو",pastRoot:"وکړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"کوم",farsi:"می‌کنم",pronunciation:"kawam"},{pronoun:"ته",pashto:"کوې",farsi:"می‌کنی",pronunciation:"kawe"},{pronoun:"هغه",pashto:"کوي",farsi:"می‌کند",pronunciation:"kawi"},{pronoun:"موږ",pashto:"کوو",farsi:"می‌کنیم",pronunciation:"kawu"},{pronoun:"تاسو",pashto:"کوئ",farsi:"می‌کنید",pronunciation:"kawey"},{pronoun:"هغوی",pashto:"کوي",farsi:"می‌کنند",pronunciation:"kawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"وکړ",farsi:"کردم (مذکر)",pronunciation:"wakṛ"},{pronoun:"ما",pashto:"وکړه",farsi:"کردم (مونث)",pronunciation:"wakṛa"},{pronoun:"تا",pashto:"وکړ",farsi:"کردی",pronunciation:"wakṛ"},{pronoun:"هغه",pashto:"وکړ",farsi:"کرد",pronunciation:"wakṛ"},{pronoun:"موږ",pashto:"وکړل",farsi:"کردیم",pronunciation:"wakṛal"},{pronoun:"تاسو",pashto:"وکړل",farsi:"کردید",pronunciation:"wakṛal"},{pronoun:"هغوی",pashto:"وکړل",farsi:"کردند",pronunciation:"wakṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به کوم",farsi:"خواهم کرد",pronunciation:"ba kawam"},{pronoun:"ته",pashto:"به کوې",farsi:"خواهی کرد",pronunciation:"ba kawe"},{pronoun:"هغه",pashto:"به کوي",farsi:"خواهد کرد",pronunciation:"ba kawi"},{pronoun:"موږ",pashto:"به کوو",farsi:"خواهیم کرد",pronunciation:"ba kawu"},{pronoun:"تاسو",pashto:"به کوئ",farsi:"خواهید کرد",pronunciation:"ba kawey"},{pronoun:"هغوی",pashto:"به کوي",farsi:"خواهند کرد",pronunciation:"ba kawi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وکړه",farsi:"بکن",pronunciation:"wakṛa"},{pronoun:"تاسو",pashto:"وکړئ",farsi:"بکنید",pronunciation:"wakṛey"}],negative:[{pronoun:"ته",pashto:"مه کوه",farsi:"نکن",pronunciation:"ma kawa"},{pronoun:"تاسو",pashto:"مه کوئ",farsi:"نکنید",pronunciation:"ma kawey"}]}},examples:[{pashto:"زه کار کوم",farsi:"من کار می‌کنم"},{pashto:"ما کار وکړ",farsi:"من کار کردم"}]},"to-want":{id:"to-want",infinitive:"غوښتل",infinitiveFarsi:"خواستن",root:"غواړ",pastRoot:"وغوښت",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"غواړم",farsi:"می‌خواهم",pronunciation:"ghwāṛam"},{pronoun:"ته",pashto:"غواړې",farsi:"می‌خواهی",pronunciation:"ghwāṛe"},{pronoun:"هغه",pashto:"غواړي",farsi:"می‌خواهد",pronunciation:"ghwāṛi"},{pronoun:"موږ",pashto:"غواړو",farsi:"می‌خواهیم",pronunciation:"ghwāṛu"},{pronoun:"تاسو",pashto:"غواړئ",farsi:"می‌خواهید",pronunciation:"ghwāṛey"},{pronoun:"هغوی",pashto:"غواړي",farsi:"می‌خواهند",pronunciation:"ghwāṛi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"وغوښتل",farsi:"خواستم",pronunciation:"waghwuṣ̌tal"},{pronoun:"تا",pashto:"وغوښتل",farsi:"خواستی",pronunciation:"waghwuṣ̌tal"},{pronoun:"هغه",pashto:"وغوښتل",farsi:"خواست",pronunciation:"waghwuṣ̌tal"},{pronoun:"موږ",pashto:"وغوښتل",farsi:"خواستیم",pronunciation:"waghwuṣ̌tal"},{pronoun:"تاسو",pashto:"وغوښتل",farsi:"خواستید",pronunciation:"waghwuṣ̌tal"},{pronoun:"هغوی",pashto:"وغوښتل",farsi:"خواستند",pronunciation:"waghwuṣ̌tal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به غواړم",farsi:"خواهم خواست",pronunciation:"ba ghwāṛam"},{pronoun:"ته",pashto:"به غواړې",farsi:"خواهی خواست",pronunciation:"ba ghwāṛe"},{pronoun:"هغه",pashto:"به غواړي",farsi:"خواهد خواست",pronunciation:"ba ghwāṛi"},{pronoun:"موږ",pashto:"به غواړو",farsi:"خواهیم خواست",pronunciation:"ba ghwāṛu"},{pronoun:"تاسو",pashto:"به غواړئ",farsi:"خواهید خواست",pronunciation:"ba ghwāṛey"},{pronoun:"هغوی",pashto:"به غواړي",farsi:"خواهند خواست",pronunciation:"ba ghwāṛi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"غواړه",farsi:"بخواه",pronunciation:"ghwāṛa"},{pronoun:"تاسو",pashto:"غواړئ",farsi:"بخواهید",pronunciation:"ghwāṛey"}],negative:[{pronoun:"ته",pashto:"مه غواړه",farsi:"نخواه",pronunciation:"ma ghwāṛa"},{pronoun:"تاسو",pashto:"مه غواړئ",farsi:"نخواهید",pronunciation:"ma ghwāṛey"}]}},examples:[{pashto:"زه چای غواړم",farsi:"من چای می‌خواهم"},{pashto:"ته څه غواړې؟",farsi:"تو چه می‌خواهی؟"}]},"to-see":{id:"to-see",infinitive:"لیدل",infinitiveFarsi:"دیدن",root:"وین",pastRoot:"ولید",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"وینم",farsi:"می‌بینم",pronunciation:"winam"},{pronoun:"ته",pashto:"وینې",farsi:"می‌بینی",pronunciation:"wine"},{pronoun:"هغه",pashto:"ویني",farsi:"می‌بیند",pronunciation:"wini"},{pronoun:"موږ",pashto:"وینو",farsi:"می‌بینیم",pronunciation:"winu"},{pronoun:"تاسو",pashto:"وینئ",farsi:"می‌بینید",pronunciation:"winey"},{pronoun:"هغوی",pashto:"ویني",farsi:"می‌بینند",pronunciation:"wini"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ولید",farsi:"دیدم (مذکر)",pronunciation:"walid"},{pronoun:"ما",pashto:"ولیده",farsi:"دیدم (مونث)",pronunciation:"walida"},{pronoun:"تا",pashto:"ولید",farsi:"دیدی",pronunciation:"walid"},{pronoun:"هغه",pashto:"ولید",farsi:"دید",pronunciation:"walid"},{pronoun:"موږ",pashto:"ولیدل",farsi:"دیدیم",pronunciation:"walidal"},{pronoun:"تاسو",pashto:"ولیدل",farsi:"دیدید",pronunciation:"walidal"},{pronoun:"هغوی",pashto:"ولیدل",farsi:"دیدند",pronunciation:"walidal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به وینم",farsi:"خواهم دید",pronunciation:"ba winam"},{pronoun:"ته",pashto:"به وینې",farsi:"خواهی دید",pronunciation:"ba wine"},{pronoun:"هغه",pashto:"به ویني",farsi:"خواهد دید",pronunciation:"ba wini"},{pronoun:"موږ",pashto:"به وینو",farsi:"خواهیم دید",pronunciation:"ba winu"},{pronoun:"تاسو",pashto:"به وینئ",farsi:"خواهید دید",pronunciation:"ba winey"},{pronoun:"هغوی",pashto:"به ویني",farsi:"خواهند دید",pronunciation:"ba wini"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وګوره",farsi:"ببین",pronunciation:"wgora"},{pronoun:"تاسو",pashto:"وګورئ",farsi:"ببینید",pronunciation:"wgorey"}],negative:[{pronoun:"ته",pashto:"مه ګوره",farsi:"نبین",pronunciation:"ma gora"},{pronoun:"تاسو",pashto:"مه ګورئ",farsi:"نبینید",pronunciation:"ma gorey"}]}},examples:[{pashto:"زه تا وینم",farsi:"من تو را می‌بینم"},{pashto:"ما هغه ولید",farsi:"من او را دیدم"},{pashto:"بیا وینو!",farsi:"باز می‌بینیم!"}]},"to-say":{id:"to-say",infinitive:"ویل",infinitiveFarsi:"گفتن",root:"وای",pastRoot:"وویل",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"وایم",farsi:"می‌گویم",pronunciation:"wāyam"},{pronoun:"ته",pashto:"وایې",farsi:"می‌گویی",pronunciation:"wāye"},{pronoun:"هغه",pashto:"وایي",farsi:"می‌گوید",pronunciation:"wāyi"},{pronoun:"موږ",pashto:"وایو",farsi:"می‌گوییم",pronunciation:"wāyu"},{pronoun:"تاسو",pashto:"وایئ",farsi:"می‌گویید",pronunciation:"wāyey"},{pronoun:"هغوی",pashto:"وایي",farsi:"می‌گویند",pronunciation:"wāyi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"وویل",farsi:"گفتم",pronunciation:"wawayal"},{pronoun:"تا",pashto:"وویل",farsi:"گفتی",pronunciation:"wawayal"},{pronoun:"هغه",pashto:"وویل",farsi:"گفت",pronunciation:"wawayal"},{pronoun:"موږ",pashto:"وویل",farsi:"گفتیم",pronunciation:"wawayal"},{pronoun:"تاسو",pashto:"وویل",farsi:"گفتید",pronunciation:"wawayal"},{pronoun:"هغوی",pashto:"وویل",farsi:"گفتند",pronunciation:"wawayal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به وایم",farsi:"خواهم گفت",pronunciation:"ba wāyam"},{pronoun:"ته",pashto:"به وایې",farsi:"خواهی گفت",pronunciation:"ba wāye"},{pronoun:"هغه",pashto:"به وایي",farsi:"خواهد گفت",pronunciation:"ba wāyi"},{pronoun:"موږ",pashto:"به وایو",farsi:"خواهیم گفت",pronunciation:"ba wāyu"},{pronoun:"تاسو",pashto:"به وایئ",farsi:"خواهید گفت",pronunciation:"ba wāyey"},{pronoun:"هغوی",pashto:"به وایي",farsi:"خواهند گفت",pronunciation:"ba wāyi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ووایه",farsi:"بگو",pronunciation:"wawāya"},{pronoun:"تاسو",pashto:"ووایئ",farsi:"بگویید",pronunciation:"wawāyey"}],negative:[{pronoun:"ته",pashto:"مه وایه",farsi:"نگو",pronunciation:"ma wāya"},{pronoun:"تاسو",pashto:"مه وایئ",farsi:"نگویید",pronunciation:"ma wāyey"}]}},examples:[{pashto:"زه رښتیا وایم",farsi:"من راست می‌گویم"},{pashto:"هغه څه وویل؟",farsi:"او چه گفت؟"}]},"to-hear":{id:"to-hear",infinitive:"اورېدل",infinitiveFarsi:"شنیدن",root:"اور",pastRoot:"واورېد",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"اورم",farsi:"می‌شنوم",pronunciation:"awram"},{pronoun:"ته",pashto:"اورې",farsi:"می‌شنوی",pronunciation:"awre"},{pronoun:"هغه",pashto:"اوري",farsi:"می‌شنود",pronunciation:"awri"},{pronoun:"موږ",pashto:"اورو",farsi:"می‌شنویم",pronunciation:"awru"},{pronoun:"تاسو",pashto:"اورئ",farsi:"می‌شنوید",pronunciation:"awrey"},{pronoun:"هغوی",pashto:"اوري",farsi:"می‌شنوند",pronunciation:"awri"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"واورېدل",farsi:"شنیدم",pronunciation:"wāwredal"},{pronoun:"تا",pashto:"واورېدل",farsi:"شنیدی",pronunciation:"wāwredal"},{pronoun:"هغه",pashto:"واورېدل",farsi:"شنید",pronunciation:"wāwredal"},{pronoun:"موږ",pashto:"واورېدل",farsi:"شنیدیم",pronunciation:"wāwredal"},{pronoun:"تاسو",pashto:"واورېدل",farsi:"شنیدید",pronunciation:"wāwredal"},{pronoun:"هغوی",pashto:"واورېدل",farsi:"شنیدند",pronunciation:"wāwredal"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"واوره",farsi:"بشنو",pronunciation:"wāwra"},{pronoun:"تاسو",pashto:"واورئ",farsi:"بشنوید",pronunciation:"wāwrey"}],negative:[{pronoun:"ته",pashto:"مه اوره",farsi:"نشنو",pronunciation:"ma awra"},{pronoun:"تاسو",pashto:"مه اورئ",farsi:"نشنوید",pronunciation:"ma awrey"}]}},examples:[{pashto:"زه غږ اورم",farsi:"من صدا می‌شنوم"},{pashto:"واوره!",farsi:"بشنو!"}]},"to-write":{id:"to-write",infinitive:"لیکل",infinitiveFarsi:"نوشتن",root:"لیک",pastRoot:"ولیک",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"لیکم",farsi:"می‌نویسم",pronunciation:"likam"},{pronoun:"ته",pashto:"لیکې",farsi:"می‌نویسی",pronunciation:"like"},{pronoun:"هغه",pashto:"لیکي",farsi:"می‌نویسد",pronunciation:"liki"},{pronoun:"موږ",pashto:"لیکو",farsi:"می‌نویسیم",pronunciation:"liku"},{pronoun:"تاسو",pashto:"لیکئ",farsi:"می‌نویسید",pronunciation:"likey"},{pronoun:"هغوی",pashto:"لیکي",farsi:"می‌نویسند",pronunciation:"liki"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ولیکل",farsi:"نوشتم",pronunciation:"walikal"},{pronoun:"تا",pashto:"ولیکل",farsi:"نوشتی",pronunciation:"walikal"},{pronoun:"هغه",pashto:"ولیکل",farsi:"نوشت",pronunciation:"walikal"},{pronoun:"موږ",pashto:"ولیکل",farsi:"نوشتیم",pronunciation:"walikal"},{pronoun:"تاسو",pashto:"ولیکل",farsi:"نوشتید",pronunciation:"walikal"},{pronoun:"هغوی",pashto:"ولیکل",farsi:"نوشتند",pronunciation:"walikal"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ولیکه",farsi:"بنویس",pronunciation:"walika"},{pronoun:"تاسو",pashto:"ولیکئ",farsi:"بنویسید",pronunciation:"walikey"}],negative:[{pronoun:"ته",pashto:"مه لیکه",farsi:"ننویس",pronunciation:"ma lika"},{pronoun:"تاسو",pashto:"مه لیکئ",farsi:"ننویسید",pronunciation:"ma likey"}]}},examples:[{pashto:"زه لیک لیکم",farsi:"من نامه می‌نویسم"},{pashto:"ولیکه!",farsi:"بنویس!"}]},"to-read":{id:"to-read",infinitive:"لوستل",infinitiveFarsi:"خواندن",root:"لول",pastRoot:"ولوست",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"لولم",farsi:"می‌خوانم",pronunciation:"lwalam"},{pronoun:"ته",pashto:"لولې",farsi:"می‌خوانی",pronunciation:"lwale"},{pronoun:"هغه",pashto:"لولي",farsi:"می‌خواند",pronunciation:"lwali"},{pronoun:"موږ",pashto:"لولو",farsi:"می‌خوانیم",pronunciation:"lwalu"},{pronoun:"تاسو",pashto:"لولئ",farsi:"می‌خوانید",pronunciation:"lwaley"},{pronoun:"هغوی",pashto:"لولي",farsi:"می‌خوانند",pronunciation:"lwali"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ولوستل",farsi:"خواندم",pronunciation:"walwastal"},{pronoun:"تا",pashto:"ولوستل",farsi:"خواندی",pronunciation:"walwastal"},{pronoun:"هغه",pashto:"ولوستل",farsi:"خواند",pronunciation:"walwastal"},{pronoun:"موږ",pashto:"ولوستل",farsi:"خواندیم",pronunciation:"walwastal"},{pronoun:"تاسو",pashto:"ولوستل",farsi:"خواندید",pronunciation:"walwastal"},{pronoun:"هغوی",pashto:"ولوستل",farsi:"خواندند",pronunciation:"walwastal"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ولوله",farsi:"بخوان",pronunciation:"walwala"},{pronoun:"تاسو",pashto:"ولولئ",farsi:"بخوانید",pronunciation:"walwaley"}]}},examples:[{pashto:"زه کتاب لولم",farsi:"من کتاب می‌خوانم"},{pashto:"ما کتاب ولوستل",farsi:"من کتاب خواندم"}]},"to-have":{id:"to-have",infinitive:"لرل",infinitiveFarsi:"داشتن",root:"لر",pastRoot:"درلود",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"لرم",farsi:"دارم",pronunciation:"laram"},{pronoun:"ته",pashto:"لرې",farsi:"داری",pronunciation:"lare"},{pronoun:"هغه",pashto:"لري",farsi:"دارد",pronunciation:"lari"},{pronoun:"موږ",pashto:"لرو",farsi:"داریم",pronunciation:"laru"},{pronoun:"تاسو",pashto:"لرئ",farsi:"دارید",pronunciation:"larey"},{pronoun:"هغوی",pashto:"لري",farsi:"دارند",pronunciation:"lari"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"درلود",farsi:"داشتم",pronunciation:"darlod"},{pronoun:"تا",pashto:"درلودې",farsi:"داشتی",pronunciation:"darlode"},{pronoun:"هغه",pashto:"درلود",farsi:"داشت",pronunciation:"darlod"},{pronoun:"موږ",pashto:"درلودل",farsi:"داشتیم",pronunciation:"darlodal"},{pronoun:"تاسو",pashto:"درلودل",farsi:"داشتید",pronunciation:"darlodal"},{pronoun:"هغوی",pashto:"درلودل",farsi:"داشتند",pronunciation:"darlodal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به لرم",farsi:"خواهم داشت",pronunciation:"ba laram"},{pronoun:"ته",pashto:"به لرې",farsi:"خواهی داشت",pronunciation:"ba lare"},{pronoun:"هغه",pashto:"به لري",farsi:"خواهد داشت",pronunciation:"ba lari"},{pronoun:"موږ",pashto:"به لرو",farsi:"خواهیم داشت",pronunciation:"ba laru"},{pronoun:"تاسو",pashto:"به لرئ",farsi:"خواهید داشت",pronunciation:"ba larey"},{pronoun:"هغوی",pashto:"به لري",farsi:"خواهند داشت",pronunciation:"ba lari"}]}},examples:[{pashto:"زه یو کور لرم",farsi:"من یک خانه دارم"},{pashto:"هغه ډېر پیسې لري",farsi:"او پول زیادی دارد"},{pashto:"ما یو موټر درلود",farsi:"من یک ماشین داشتم"}]},"to-give":{id:"to-give",infinitive:"ورکول",infinitiveFarsi:"دادن",root:"ورکو",pastRoot:"ورکړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ورکوم",farsi:"می‌دهم",pronunciation:"warkawam"},{pronoun:"ته",pashto:"ورکوې",farsi:"می‌دهی",pronunciation:"warkawe"},{pronoun:"هغه",pashto:"ورکوي",farsi:"می‌دهد",pronunciation:"warkawi"},{pronoun:"موږ",pashto:"ورکوو",farsi:"می‌دهیم",pronunciation:"warkawu"},{pronoun:"تاسو",pashto:"ورکوئ",farsi:"می‌دهید",pronunciation:"warkawey"},{pronoun:"هغوی",pashto:"ورکوي",farsi:"می‌دهند",pronunciation:"warkawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ورکړ",farsi:"دادم",pronunciation:"warkṛ"},{pronoun:"تا",pashto:"ورکړ",farsi:"دادی",pronunciation:"warkṛ"},{pronoun:"هغه",pashto:"ورکړ",farsi:"داد",pronunciation:"warkṛ"},{pronoun:"موږ",pashto:"ورکړل",farsi:"دادیم",pronunciation:"warkṛal"},{pronoun:"تاسو",pashto:"ورکړل",farsi:"دادید",pronunciation:"warkṛal"},{pronoun:"هغوی",pashto:"ورکړل",farsi:"دادند",pronunciation:"warkṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ورکوم",farsi:"خواهم داد",pronunciation:"ba warkawam"},{pronoun:"ته",pashto:"به ورکوې",farsi:"خواهی داد",pronunciation:"ba warkawe"},{pronoun:"هغه",pashto:"به ورکوي",farsi:"خواهد داد",pronunciation:"ba warkawi"},{pronoun:"موږ",pashto:"به ورکوو",farsi:"خواهیم داد",pronunciation:"ba warkawu"},{pronoun:"تاسو",pashto:"به ورکوئ",farsi:"خواهید داد",pronunciation:"ba warkawey"},{pronoun:"هغوی",pashto:"به ورکوي",farsi:"خواهند داد",pronunciation:"ba warkawi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ورکړه",farsi:"بده",pronunciation:"warkṛa"},{pronoun:"تاسو",pashto:"ورکړئ",farsi:"بدهید",pronunciation:"warkṛey"}],negative:[{pronoun:"ته",pashto:"مه ورکوه",farsi:"نده",pronunciation:"ma warkawa"},{pronoun:"تاسو",pashto:"مه ورکوئ",farsi:"ندهید",pronunciation:"ma warkawey"}]}},examples:[{pashto:"زه تا ته کتاب ورکوم",farsi:"من به تو کتاب می‌دهم"},{pashto:"ما هغه ته پیسې ورکړې",farsi:"من به او پول دادم"},{pashto:"ورکړه!",farsi:"بده!"}]},"to-take":{id:"to-take",infinitive:"اخیستل",infinitiveFarsi:"گرفتن",root:"اخل",pastRoot:"واخیست",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"اخلم",farsi:"می‌گیرم",pronunciation:"akhlam"},{pronoun:"ته",pashto:"اخلې",farsi:"می‌گیری",pronunciation:"akhle"},{pronoun:"هغه",pashto:"اخلي",farsi:"می‌گیرد",pronunciation:"akhli"},{pronoun:"موږ",pashto:"اخلو",farsi:"می‌گیریم",pronunciation:"akhlu"},{pronoun:"تاسو",pashto:"اخلئ",farsi:"می‌گیرید",pronunciation:"akhley"},{pronoun:"هغوی",pashto:"اخلي",farsi:"می‌گیرند",pronunciation:"akhli"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"واخیستل",farsi:"گرفتم",pronunciation:"wākhīstal"},{pronoun:"تا",pashto:"واخیستل",farsi:"گرفتی",pronunciation:"wākhīstal"},{pronoun:"هغه",pashto:"واخیستل",farsi:"گرفت",pronunciation:"wākhīstal"},{pronoun:"موږ",pashto:"واخیستل",farsi:"گرفتیم",pronunciation:"wākhīstal"},{pronoun:"تاسو",pashto:"واخیستل",farsi:"گرفتید",pronunciation:"wākhīstal"},{pronoun:"هغوی",pashto:"واخیستل",farsi:"گرفتند",pronunciation:"wākhīstal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به اخلم",farsi:"خواهم گرفت",pronunciation:"ba akhlam"},{pronoun:"ته",pashto:"به اخلې",farsi:"خواهی گرفت",pronunciation:"ba akhle"},{pronoun:"هغه",pashto:"به اخلي",farsi:"خواهد گرفت",pronunciation:"ba akhli"},{pronoun:"موږ",pashto:"به اخلو",farsi:"خواهیم گرفت",pronunciation:"ba akhlu"},{pronoun:"تاسو",pashto:"به اخلئ",farsi:"خواهید گرفت",pronunciation:"ba akhley"},{pronoun:"هغوی",pashto:"به اخلي",farsi:"خواهند گرفت",pronunciation:"ba akhli"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"واخله",farsi:"بگیر",pronunciation:"wākhla"},{pronoun:"تاسو",pashto:"واخلئ",farsi:"بگیرید",pronunciation:"wākhley"}],negative:[{pronoun:"ته",pashto:"مه اخله",farsi:"نگیر",pronunciation:"ma akhla"},{pronoun:"تاسو",pashto:"مه اخلئ",farsi:"نگیرید",pronunciation:"ma akhley"}]}},examples:[{pashto:"زه کتاب اخلم",farsi:"من کتاب می‌گیرم"},{pashto:"ما پیسې واخیستلې",farsi:"من پول گرفتم"},{pashto:"واخله!",farsi:"بگیر!"}]},"to-carry":{id:"to-carry",infinitive:"وړل",infinitiveFarsi:"بردن",root:"وړ",pastRoot:"یووړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"وړم",farsi:"می‌برم",pronunciation:"waṛam"},{pronoun:"ته",pashto:"وړې",farsi:"می‌بری",pronunciation:"waṛe"},{pronoun:"هغه",pashto:"وړي",farsi:"می‌برد",pronunciation:"waṛi"},{pronoun:"موږ",pashto:"وړو",farsi:"می‌بریم",pronunciation:"waṛu"},{pronoun:"تاسو",pashto:"وړئ",farsi:"می‌برید",pronunciation:"waṛey"},{pronoun:"هغوی",pashto:"وړي",farsi:"می‌برند",pronunciation:"waṛi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"یووړ",farsi:"بردم",pronunciation:"yūwaṛ"},{pronoun:"تا",pashto:"یووړ",farsi:"بردی",pronunciation:"yūwaṛ"},{pronoun:"هغه",pashto:"یووړ",farsi:"برد",pronunciation:"yūwaṛ"},{pronoun:"موږ",pashto:"یووړل",farsi:"بردیم",pronunciation:"yūwaṛal"},{pronoun:"تاسو",pashto:"یووړل",farsi:"بردید",pronunciation:"yūwaṛal"},{pronoun:"هغوی",pashto:"یووړل",farsi:"بردند",pronunciation:"yūwaṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به وړم",farsi:"خواهم برد",pronunciation:"ba waṛam"},{pronoun:"ته",pashto:"به وړې",farsi:"خواهی برد",pronunciation:"ba waṛe"},{pronoun:"هغه",pashto:"به وړي",farsi:"خواهد برد",pronunciation:"ba waṛi"},{pronoun:"موږ",pashto:"به وړو",farsi:"خواهیم برد",pronunciation:"ba waṛu"},{pronoun:"تاسو",pashto:"به وړئ",farsi:"خواهید برد",pronunciation:"ba waṛey"},{pronoun:"هغوی",pashto:"به وړي",farsi:"خواهند برد",pronunciation:"ba waṛi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"یوسه",farsi:"ببر",pronunciation:"yūsa"},{pronoun:"تاسو",pashto:"یوسئ",farsi:"ببرید",pronunciation:"yūsey"}],negative:[{pronoun:"ته",pashto:"مه وړه",farsi:"نبر",pronunciation:"ma waṛa"},{pronoun:"تاسو",pashto:"مه وړئ",farsi:"نبرید",pronunciation:"ma waṛey"}]}},examples:[{pashto:"زه کتاب وړم",farsi:"من کتاب می‌برم"},{pashto:"هغه بکس یووړ",farsi:"او چمدان برد"},{pashto:"یوسه!",farsi:"ببر!"}]},"to-bring":{id:"to-bring",infinitive:"راوړل",infinitiveFarsi:"آوردن",root:"راوړ",pastRoot:"راوړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"راوړم",farsi:"می‌آورم",pronunciation:"rāwaṛam"},{pronoun:"ته",pashto:"راوړې",farsi:"می‌آوری",pronunciation:"rāwaṛe"},{pronoun:"هغه",pashto:"راوړي",farsi:"می‌آورد",pronunciation:"rāwaṛi"},{pronoun:"موږ",pashto:"راوړو",farsi:"می‌آوریم",pronunciation:"rāwaṛu"},{pronoun:"تاسو",pashto:"راوړئ",farsi:"می‌آورید",pronunciation:"rāwaṛey"},{pronoun:"هغوی",pashto:"راوړي",farsi:"می‌آورند",pronunciation:"rāwaṛi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"راوړل",farsi:"آوردم",pronunciation:"rāwaṛal"},{pronoun:"تا",pashto:"راوړل",farsi:"آوردی",pronunciation:"rāwaṛal"},{pronoun:"هغه",pashto:"راوړل",farsi:"آورد",pronunciation:"rāwaṛal"},{pronoun:"موږ",pashto:"راوړل",farsi:"آوردیم",pronunciation:"rāwaṛal"},{pronoun:"تاسو",pashto:"راوړل",farsi:"آوردید",pronunciation:"rāwaṛal"},{pronoun:"هغوی",pashto:"راوړل",farsi:"آوردند",pronunciation:"rāwaṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به راوړم",farsi:"خواهم آورد",pronunciation:"ba rāwaṛam"},{pronoun:"ته",pashto:"به راوړې",farsi:"خواهی آورد",pronunciation:"ba rāwaṛe"},{pronoun:"هغه",pashto:"به راوړي",farsi:"خواهد آورد",pronunciation:"ba rāwaṛi"},{pronoun:"موږ",pashto:"به راوړو",farsi:"خواهیم آورد",pronunciation:"ba rāwaṛu"},{pronoun:"تاسو",pashto:"به راوړئ",farsi:"خواهید آورد",pronunciation:"ba rāwaṛey"},{pronoun:"هغوی",pashto:"به راوړي",farsi:"خواهند آورد",pronunciation:"ba rāwaṛi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"راوړه",farsi:"بیاور",pronunciation:"rāwaṛa"},{pronoun:"تاسو",pashto:"راوړئ",farsi:"بیاورید",pronunciation:"rāwaṛey"}],negative:[{pronoun:"ته",pashto:"مه راوړه",farsi:"نیاور",pronunciation:"ma rāwaṛa"},{pronoun:"تاسو",pashto:"مه راوړئ",farsi:"نیاورید",pronunciation:"ma rāwaṛey"}]}},examples:[{pashto:"زه چای راوړم",farsi:"من چای می‌آورم"},{pashto:"هغه ډوډۍ راوړله",farsi:"او غذا آورد"},{pashto:"راوړه!",farsi:"بیاور!"}]},"to-understand":{id:"to-understand",infinitive:"پوهېدل",infinitiveFarsi:"فهمیدن",root:"پوه",pastRoot:"پوه شو",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"پوهېږم",farsi:"می‌فهمم",pronunciation:"poheẓ̌am"},{pronoun:"ته",pashto:"پوهېږې",farsi:"می‌فهمی",pronunciation:"poheẓ̌e"},{pronoun:"هغه",pashto:"پوهېږي",farsi:"می‌فهمد",pronunciation:"poheẓ̌i"},{pronoun:"موږ",pashto:"پوهېږو",farsi:"می‌فهمیم",pronunciation:"poheẓ̌u"},{pronoun:"تاسو",pashto:"پوهېږئ",farsi:"می‌فهمید",pronunciation:"poheẓ̌ey"},{pronoun:"هغوی",pashto:"پوهېږي",farsi:"می‌فهمند",pronunciation:"poheẓ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"پوه شوم",farsi:"فهمیدم",pronunciation:"poh shwam"},{pronoun:"ته",pashto:"پوه شوې",farsi:"فهمیدی",pronunciation:"poh shwe"},{pronoun:"هغه (م)",pashto:"پوه شو",farsi:"فهمید",pronunciation:"poh sho"},{pronoun:"هغه (ز)",pashto:"پوه شوه",farsi:"فهمید",pronunciation:"poh shwa"},{pronoun:"موږ",pashto:"پوه شوو",farsi:"فهمیدیم",pronunciation:"poh shwu"},{pronoun:"تاسو",pashto:"پوه شوئ",farsi:"فهمیدید",pronunciation:"poh shwey"},{pronoun:"هغوی",pashto:"پوه شول",farsi:"فهمیدند",pronunciation:"poh shwal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به پوهېږم",farsi:"خواهم فهمید",pronunciation:"ba poheẓ̌am"},{pronoun:"ته",pashto:"به پوهېږې",farsi:"خواهی فهمید",pronunciation:"ba poheẓ̌e"},{pronoun:"هغه",pashto:"به پوهېږي",farsi:"خواهد فهمید",pronunciation:"ba poheẓ̌i"},{pronoun:"موږ",pashto:"به پوهېږو",farsi:"خواهیم فهمید",pronunciation:"ba poheẓ̌u"},{pronoun:"تاسو",pashto:"به پوهېږئ",farsi:"خواهید فهمید",pronunciation:"ba poheẓ̌ey"},{pronoun:"هغوی",pashto:"به پوهېږي",farsi:"خواهند فهمید",pronunciation:"ba poheẓ̌i"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"پوه شه",farsi:"بفهم",pronunciation:"poh sha"},{pronoun:"تاسو",pashto:"پوه شئ",farsi:"بفهمید",pronunciation:"poh shey"}],negative:[{pronoun:"ته",pashto:"مه پوهېږه",farsi:"نفهم",pronunciation:"ma poheẓ̌a"},{pronoun:"تاسو",pashto:"مه پوهېږئ",farsi:"نفهمید",pronunciation:"ma poheẓ̌ey"}]}},examples:[{pashto:"زه پوهېږم",farsi:"من می‌فهمم"},{pashto:"ته پښتو پوهېږې؟",farsi:"تو پشتو می‌فهمی؟"},{pashto:"زه پوه شوم",farsi:"من فهمیدم"}]},"to-sit":{id:"to-sit",infinitive:"کېناستل",infinitiveFarsi:"نشستن",root:"کېن",pastRoot:"کېناست",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"کېنم",farsi:"می‌نشینم",pronunciation:"kenam"},{pronoun:"ته",pashto:"کېنې",farsi:"می‌نشینی",pronunciation:"kene"},{pronoun:"هغه",pashto:"کېني",farsi:"می‌نشیند",pronunciation:"keni"},{pronoun:"موږ",pashto:"کېنو",farsi:"می‌نشینیم",pronunciation:"kenu"},{pronoun:"تاسو",pashto:"کېنئ",farsi:"می‌نشینید",pronunciation:"keney"},{pronoun:"هغوی",pashto:"کېني",farsi:"می‌نشینند",pronunciation:"keni"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"کېناستم",farsi:"نشستم",pronunciation:"kenāstam"},{pronoun:"ته",pashto:"کېناستې",farsi:"نشستی",pronunciation:"kenāste"},{pronoun:"هغه (م)",pashto:"کېناست",farsi:"نشست",pronunciation:"kenāst"},{pronoun:"هغه (ز)",pashto:"کېناسته",farsi:"نشست",pronunciation:"kenāsta"},{pronoun:"موږ",pashto:"کېناستو",farsi:"نشستیم",pronunciation:"kenāstu"},{pronoun:"تاسو",pashto:"کېناستئ",farsi:"نشستید",pronunciation:"kenāstey"},{pronoun:"هغوی",pashto:"کېناستل",farsi:"نشستند",pronunciation:"kenāstal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به کېنم",farsi:"خواهم نشست",pronunciation:"ba kenam"},{pronoun:"ته",pashto:"به کېنې",farsi:"خواهی نشست",pronunciation:"ba kene"},{pronoun:"هغه",pashto:"به کېني",farsi:"خواهد نشست",pronunciation:"ba keni"},{pronoun:"موږ",pashto:"به کېنو",farsi:"خواهیم نشست",pronunciation:"ba kenu"},{pronoun:"تاسو",pashto:"به کېنئ",farsi:"خواهید نشست",pronunciation:"ba keney"},{pronoun:"هغوی",pashto:"به کېني",farsi:"خواهند نشست",pronunciation:"ba keni"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"کېنه",farsi:"بنشین",pronunciation:"kena"},{pronoun:"تاسو",pashto:"کېنئ",farsi:"بنشینید",pronunciation:"keney"}],negative:[{pronoun:"ته",pashto:"مه کېنه",farsi:"ننشین",pronunciation:"ma kena"},{pronoun:"تاسو",pashto:"مه کېنئ",farsi:"ننشینید",pronunciation:"ma keney"}]}},examples:[{pashto:"زه دلته کېنم",farsi:"من اینجا می‌نشینم"},{pashto:"کېنه!",farsi:"بنشین!"},{pashto:"هغه کېناست",farsi:"او نشست"}]},"to-stand":{id:"to-stand",infinitive:"ودرېدل",infinitiveFarsi:"ایستادن",root:"ودرېږ",pastRoot:"ودرېد",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ودرېږم",farsi:"می‌ایستم",pronunciation:"wadreẓ̌am"},{pronoun:"ته",pashto:"ودرېږې",farsi:"می‌ایستی",pronunciation:"wadreẓ̌e"},{pronoun:"هغه",pashto:"ودرېږي",farsi:"می‌ایستد",pronunciation:"wadreẓ̌i"},{pronoun:"موږ",pashto:"ودرېږو",farsi:"می‌ایستیم",pronunciation:"wadreẓ̌u"},{pronoun:"تاسو",pashto:"ودرېږئ",farsi:"می‌ایستید",pronunciation:"wadreẓ̌ey"},{pronoun:"هغوی",pashto:"ودرېږي",farsi:"می‌ایستند",pronunciation:"wadreẓ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"ودرېدم",farsi:"ایستادم",pronunciation:"wadredam"},{pronoun:"ته",pashto:"ودرېدې",farsi:"ایستادی",pronunciation:"wadrede"},{pronoun:"هغه (م)",pashto:"ودرېد",farsi:"ایستاد",pronunciation:"wadred"},{pronoun:"هغه (ز)",pashto:"ودرېده",farsi:"ایستاد",pronunciation:"wadreda"},{pronoun:"موږ",pashto:"ودرېدو",farsi:"ایستادیم",pronunciation:"wadredu"},{pronoun:"تاسو",pashto:"ودرېدئ",farsi:"ایستادید",pronunciation:"wadredey"},{pronoun:"هغوی",pashto:"ودرېدل",farsi:"ایستادند",pronunciation:"wadredal"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ودرېږه",farsi:"بایست",pronunciation:"wadreẓ̌a"},{pronoun:"تاسو",pashto:"ودرېږئ",farsi:"بایستید",pronunciation:"wadreẓ̌ey"}],negative:[{pronoun:"ته",pashto:"مه ودرېږه",farsi:"نایست",pronunciation:"ma wadreẓ̌a"},{pronoun:"تاسو",pashto:"مه ودرېږئ",farsi:"نایستید",pronunciation:"ma wadreẓ̌ey"}]}},examples:[{pashto:"زه دلته ودرېږم",farsi:"من اینجا می‌ایستم"},{pashto:"ودرېږه!",farsi:"بایست!"},{pashto:"هغه ودرېد",farsi:"او ایستاد"}]},"to-sleep":{id:"to-sleep",infinitive:"ویدېدل",infinitiveFarsi:"خوابیدن",root:"ویده",pastRoot:"ویده شو",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ویده کېږم",farsi:"می‌خوابم",pronunciation:"wida keẓ̌am"},{pronoun:"ته",pashto:"ویده کېږې",farsi:"می‌خوابی",pronunciation:"wida keẓ̌e"},{pronoun:"هغه",pashto:"ویده کېږي",farsi:"می‌خوابد",pronunciation:"wida keẓ̌i"},{pronoun:"موږ",pashto:"ویده کېږو",farsi:"می‌خوابیم",pronunciation:"wida keẓ̌u"},{pronoun:"تاسو",pashto:"ویده کېږئ",farsi:"می‌خوابید",pronunciation:"wida keẓ̌ey"},{pronoun:"هغوی",pashto:"ویده کېږي",farsi:"می‌خوابند",pronunciation:"wida keẓ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"ویده شوم",farsi:"خوابیدم",pronunciation:"wida shwam"},{pronoun:"ته",pashto:"ویده شوې",farsi:"خوابیدی",pronunciation:"wida shwe"},{pronoun:"هغه (م)",pashto:"ویده شو",farsi:"خوابید",pronunciation:"wida sho"},{pronoun:"هغه (ز)",pashto:"ویده شوه",farsi:"خوابید",pronunciation:"wida shwa"},{pronoun:"موږ",pashto:"ویده شوو",farsi:"خوابیدیم",pronunciation:"wida shwu"},{pronoun:"تاسو",pashto:"ویده شوئ",farsi:"خوابیدید",pronunciation:"wida shwey"},{pronoun:"هغوی",pashto:"ویده شول",farsi:"خوابیدند",pronunciation:"wida shwal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ویده شم",farsi:"خواهم خوابید",pronunciation:"ba wida sham"},{pronoun:"ته",pashto:"به ویده شې",farsi:"خواهی خوابید",pronunciation:"ba wida she"},{pronoun:"هغه",pashto:"به ویده شي",farsi:"خواهد خوابید",pronunciation:"ba wida shi"},{pronoun:"موږ",pashto:"به ویده شو",farsi:"خواهیم خوابید",pronunciation:"ba wida shu"},{pronoun:"تاسو",pashto:"به ویده شئ",farsi:"خواهید خوابید",pronunciation:"ba wida shey"},{pronoun:"هغوی",pashto:"به ویده شي",farsi:"خواهند خوابید",pronunciation:"ba wida shi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ویده شه",farsi:"بخواب",pronunciation:"wida sha"},{pronoun:"تاسو",pashto:"ویده شئ",farsi:"بخوابید",pronunciation:"wida shey"}],negative:[{pronoun:"ته",pashto:"مه ویده کېږه",farsi:"نخواب",pronunciation:"ma wida keẓ̌a"},{pronoun:"تاسو",pashto:"مه ویده کېږئ",farsi:"نخوابید",pronunciation:"ma wida keẓ̌ey"}]}},examples:[{pashto:"زه ویده کېږم",farsi:"من می‌خوابم"},{pashto:"هغه ویده شو",farsi:"او خوابید"},{pashto:"ویده شه!",farsi:"بخواب!"}]},"to-become":{id:"to-become",infinitive:"کېدل",infinitiveFarsi:"شدن",root:"کېږ",pastRoot:"شو",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"کېږم",farsi:"می‌شوم",pronunciation:"keẓ̌am"},{pronoun:"ته",pashto:"کېږې",farsi:"می‌شوی",pronunciation:"keẓ̌e"},{pronoun:"هغه",pashto:"کېږي",farsi:"می‌شود",pronunciation:"keẓ̌i"},{pronoun:"موږ",pashto:"کېږو",farsi:"می‌شویم",pronunciation:"keẓ̌u"},{pronoun:"تاسو",pashto:"کېږئ",farsi:"می‌شوید",pronunciation:"keẓ̌ey"},{pronoun:"هغوی",pashto:"کېږي",farsi:"می‌شوند",pronunciation:"keẓ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"شوم",farsi:"شدم",pronunciation:"shwam"},{pronoun:"ته",pashto:"شوې",farsi:"شدی",pronunciation:"shwe"},{pronoun:"هغه (م)",pashto:"شو",farsi:"شد",pronunciation:"sho"},{pronoun:"هغه (ز)",pashto:"شوه",farsi:"شد",pronunciation:"shwa"},{pronoun:"موږ",pashto:"شوو",farsi:"شدیم",pronunciation:"shwu"},{pronoun:"تاسو",pashto:"شوئ",farsi:"شدید",pronunciation:"shwey"},{pronoun:"هغوی",pashto:"شول",farsi:"شدند",pronunciation:"shwal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به شم",farsi:"خواهم شد",pronunciation:"ba sham"},{pronoun:"ته",pashto:"به شې",farsi:"خواهی شد",pronunciation:"ba she"},{pronoun:"هغه",pashto:"به شي",farsi:"خواهد شد",pronunciation:"ba shi"},{pronoun:"موږ",pashto:"به شو",farsi:"خواهیم شد",pronunciation:"ba shu"},{pronoun:"تاسو",pashto:"به شئ",farsi:"خواهید شد",pronunciation:"ba shey"},{pronoun:"هغوی",pashto:"به شي",farsi:"خواهند شد",pronunciation:"ba shi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"شه",farsi:"بشو",pronunciation:"sha"},{pronoun:"تاسو",pashto:"شئ",farsi:"بشوید",pronunciation:"shey"}],negative:[{pronoun:"ته",pashto:"مه کېږه",farsi:"نشو",pronunciation:"ma keẓ̌a"},{pronoun:"تاسو",pashto:"مه کېږئ",farsi:"نشوید",pronunciation:"ma keẓ̌ey"}]}},examples:[{pashto:"زه ستړی کېږم",farsi:"من خسته می‌شوم"},{pashto:"هغه داکتر شو",farsi:"او داکتر شد"},{pashto:"ښه شه!",farsi:"خوب شو!"}]},"to-love":{id:"to-love",infinitive:"خوښول",infinitiveFarsi:"دوست داشتن",root:"خوښ",pastRoot:"خوښ کړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",note:'در پشتو معمولاً با ساختار "ما خوښېږي" استفاده می‌شود',conjugations:[{pronoun:"ما",pashto:"خوښېږي",farsi:"دوست دارم",pronunciation:"khwax̌eẓ̌i"},{pronoun:"تا",pashto:"خوښېږي",farsi:"دوست داری",pronunciation:"khwax̌eẓ̌i"},{pronoun:"هغه",pashto:"خوښېږي",farsi:"دوست دارد",pronunciation:"khwax̌eẓ̌i"},{pronoun:"موږ",pashto:"خوښېږي",farsi:"دوست داریم",pronunciation:"khwax̌eẓ̌i"},{pronoun:"تاسو",pashto:"خوښېږي",farsi:"دوست دارید",pronunciation:"khwax̌eẓ̌i"},{pronoun:"هغوی",pashto:"خوښېږي",farsi:"دوست دارند",pronunciation:"khwax̌eẓ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"خوښېده",farsi:"دوست داشتم",pronunciation:"khwax̌eda"},{pronoun:"تا",pashto:"خوښېده",farsi:"دوست داشتی",pronunciation:"khwax̌eda"},{pronoun:"هغه",pashto:"خوښېده",farsi:"دوست داشت",pronunciation:"khwax̌eda"},{pronoun:"موږ",pashto:"خوښېده",farsi:"دوست داشتیم",pronunciation:"khwax̌eda"},{pronoun:"تاسو",pashto:"خوښېده",farsi:"دوست داشتید",pronunciation:"khwax̌eda"},{pronoun:"هغوی",pashto:"خوښېده",farsi:"دوست داشتند",pronunciation:"khwax̌eda"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به خوښم",farsi:"خواهم دوست داشت",pronunciation:"ba khwaxam"},{pronoun:"ته",pashto:"به خوښې",farsi:"خواهی دوست داشت",pronunciation:"ba khwaxe"},{pronoun:"هغه",pashto:"به خوښي",farsi:"خواهد دوست داشت",pronunciation:"ba khwaxi"},{pronoun:"موږ",pashto:"به خوښو",farsi:"خواهیم دوست داشت",pronunciation:"ba khwaxu"},{pronoun:"تاسو",pashto:"به خوښئ",farsi:"خواهید دوست داشت",pronunciation:"ba khwaxey"},{pronoun:"هغوی",pashto:"به خوښي",farsi:"خواهند دوست داشت",pronunciation:"ba khwaxi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"خوښه",farsi:"دوست بدار",pronunciation:"khwaxа"},{pronoun:"تاسو",pashto:"خوښئ",farsi:"دوست بدارید",pronunciation:"khwaxey"}],negative:[{pronoun:"ته",pashto:"مه خوښه",farsi:"دوست مدار",pronunciation:"ma khwaxа"},{pronoun:"تاسو",pashto:"مه خوښئ",farsi:"دوست مدارید",pronunciation:"ma khwaxey"}]}},examples:[{pashto:"ما ته خوښېږې",farsi:"من تو را دوست دارم"},{pashto:"ما چای خوښېږي",farsi:"من چای دوست دارم"},{pashto:"هغه ته خوښېږم",farsi:"او مرا دوست دارد"}]},"to-work":{id:"to-work",infinitive:"کار کول",infinitiveFarsi:"کار کردن",root:"کار کو",pastRoot:"کار وکړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"کار کوم",farsi:"کار می‌کنم",pronunciation:"kār kawam"},{pronoun:"ته",pashto:"کار کوې",farsi:"کار می‌کنی",pronunciation:"kār kawe"},{pronoun:"هغه",pashto:"کار کوي",farsi:"کار می‌کند",pronunciation:"kār kawi"},{pronoun:"موږ",pashto:"کار کوو",farsi:"کار می‌کنیم",pronunciation:"kār kawu"},{pronoun:"تاسو",pashto:"کار کوئ",farsi:"کار می‌کنید",pronunciation:"kār kawey"},{pronoun:"هغوی",pashto:"کار کوي",farsi:"کار می‌کنند",pronunciation:"kār kawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"کار وکړ",farsi:"کار کردم",pronunciation:"kār wakṛ"},{pronoun:"تا",pashto:"کار وکړ",farsi:"کار کردی",pronunciation:"kār wakṛ"},{pronoun:"هغه",pashto:"کار وکړ",farsi:"کار کرد",pronunciation:"kār wakṛ"},{pronoun:"موږ",pashto:"کار وکړل",farsi:"کار کردیم",pronunciation:"kār wakṛal"},{pronoun:"تاسو",pashto:"کار وکړل",farsi:"کار کردید",pronunciation:"kār wakṛal"},{pronoun:"هغوی",pashto:"کار وکړل",farsi:"کار کردند",pronunciation:"kār wakṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به کار کوم",farsi:"کار خواهم کرد",pronunciation:"ba kār kawam"},{pronoun:"ته",pashto:"به کار کوې",farsi:"کار خواهی کرد",pronunciation:"ba kār kawe"},{pronoun:"هغه",pashto:"به کار کوي",farsi:"کار خواهد کرد",pronunciation:"ba kār kawi"},{pronoun:"موږ",pashto:"به کار کوو",farsi:"کار خواهیم کرد",pronunciation:"ba kār kawu"},{pronoun:"تاسو",pashto:"به کار کوئ",farsi:"کار خواهید کرد",pronunciation:"ba kār kawey"},{pronoun:"هغوی",pashto:"به کار کوي",farsi:"کار خواهند کرد",pronunciation:"ba kār kawi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"کار وکړه",farsi:"کار بکن",pronunciation:"kār wakṛa"},{pronoun:"تاسو",pashto:"کار وکړئ",farsi:"کار بکنید",pronunciation:"kār wakṛey"}],negative:[{pronoun:"ته",pashto:"مه کار کوه",farsi:"کار مکن",pronunciation:"ma kār kawa"},{pronoun:"تاسو",pashto:"مه کار کوئ",farsi:"کار مکنید",pronunciation:"ma kār kawey"}]}},examples:[{pashto:"زه په دفتر کې کار کوم",farsi:"من در دفتر کار می‌کنم"},{pashto:"هغه ډېر کار کوي",farsi:"او زیاد کار می‌کند"},{pashto:"ما پرون کار وکړ",farsi:"من دیروز کار کردم"}]},"to-speak":{id:"to-speak",infinitive:"خبرې کول",infinitiveFarsi:"صحبت کردن",root:"خبرې کو",pastRoot:"خبرې وکړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"خبرې کوم",farsi:"صحبت می‌کنم",pronunciation:"khabre kawam"},{pronoun:"ته",pashto:"خبرې کوې",farsi:"صحبت می‌کنی",pronunciation:"khabre kawe"},{pronoun:"هغه",pashto:"خبرې کوي",farsi:"صحبت می‌کند",pronunciation:"khabre kawi"},{pronoun:"موږ",pashto:"خبرې کوو",farsi:"صحبت می‌کنیم",pronunciation:"khabre kawu"},{pronoun:"تاسو",pashto:"خبرې کوئ",farsi:"صحبت می‌کنید",pronunciation:"khabre kawey"},{pronoun:"هغوی",pashto:"خبرې کوي",farsi:"صحبت می‌کنند",pronunciation:"khabre kawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"خبرې وکړې",farsi:"صحبت کردم",pronunciation:"khabre wakṛe"},{pronoun:"تا",pashto:"خبرې وکړې",farsi:"صحبت کردی",pronunciation:"khabre wakṛe"},{pronoun:"هغه",pashto:"خبرې وکړې",farsi:"صحبت کرد",pronunciation:"khabre wakṛe"},{pronoun:"موږ",pashto:"خبرې وکړې",farsi:"صحبت کردیم",pronunciation:"khabre wakṛe"},{pronoun:"تاسو",pashto:"خبرې وکړې",farsi:"صحبت کردید",pronunciation:"khabre wakṛe"},{pronoun:"هغوی",pashto:"خبرې وکړې",farsi:"صحبت کردند",pronunciation:"khabre wakṛe"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به خبرې کوم",farsi:"صحبت خواهم کرد",pronunciation:"ba khabre kawam"},{pronoun:"ته",pashto:"به خبرې کوې",farsi:"صحبت خواهی کرد",pronunciation:"ba khabre kawe"},{pronoun:"هغه",pashto:"به خبرې کوي",farsi:"صحبت خواهد کرد",pronunciation:"ba khabre kawi"},{pronoun:"موږ",pashto:"به خبرې کوو",farsi:"صحبت خواهیم کرد",pronunciation:"ba khabre kawu"},{pronoun:"تاسو",pashto:"به خبرې کوئ",farsi:"صحبت خواهید کرد",pronunciation:"ba khabre kawey"},{pronoun:"هغوی",pashto:"به خبرې کوي",farsi:"صحبت خواهند کرد",pronunciation:"ba khabre kawi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"خبرې وکړه",farsi:"صحبت بکن",pronunciation:"khabre wakṛa"},{pronoun:"تاسو",pashto:"خبرې وکړئ",farsi:"صحبت بکنید",pronunciation:"khabre wakṛey"}],negative:[{pronoun:"ته",pashto:"مه خبرې کوه",farsi:"صحبت مکن",pronunciation:"ma khabre kawa"},{pronoun:"تاسو",pashto:"مه خبرې کوئ",farsi:"صحبت مکنید",pronunciation:"ma khabre kawey"}]}},examples:[{pashto:"زه پښتو خبرې کوم",farsi:"من پشتو صحبت می‌کنم"},{pashto:"ته پښتو خبرې کوې؟",farsi:"تو پشتو صحبت می‌کنی؟"},{pashto:"موږ خبرې وکړې",farsi:"ما صحبت کردیم"}]},"to-live":{id:"to-live",infinitive:"ژوند کول",infinitiveFarsi:"زندگی کردن",root:"ژوند کو",pastRoot:"ژوند وکړ",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ژوند کوم",farsi:"زندگی می‌کنم",pronunciation:"zhwand kawam"},{pronoun:"ته",pashto:"ژوند کوې",farsi:"زندگی می‌کنی",pronunciation:"zhwand kawe"},{pronoun:"هغه",pashto:"ژوند کوي",farsi:"زندگی می‌کند",pronunciation:"zhwand kawi"},{pronoun:"موږ",pashto:"ژوند کوو",farsi:"زندگی می‌کنیم",pronunciation:"zhwand kawu"},{pronoun:"تاسو",pashto:"ژوند کوئ",farsi:"زندگی می‌کنید",pronunciation:"zhwand kawey"},{pronoun:"هغوی",pashto:"ژوند کوي",farsi:"زندگی می‌کنند",pronunciation:"zhwand kawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"زه",pashto:"ژوند وکړ",farsi:"زندگی کردم",pronunciation:"zhwand wakṛ"},{pronoun:"ته",pashto:"ژوند وکړ",farsi:"زندگی کردی",pronunciation:"zhwand wakṛ"},{pronoun:"هغه",pashto:"ژوند وکړ",farsi:"زندگی کرد",pronunciation:"zhwand wakṛ"},{pronoun:"موږ",pashto:"ژوند وکړل",farsi:"زندگی کردیم",pronunciation:"zhwand wakṛal"},{pronoun:"تاسو",pashto:"ژوند وکړل",farsi:"زندگی کردید",pronunciation:"zhwand wakṛal"},{pronoun:"هغوی",pashto:"ژوند وکړل",farsi:"زندگی کردند",pronunciation:"zhwand wakṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ژوند کوم",farsi:"زندگی خواهم کرد",pronunciation:"ba zhwand kawam"},{pronoun:"ته",pashto:"به ژوند کوې",farsi:"زندگی خواهی کرد",pronunciation:"ba zhwand kawe"},{pronoun:"هغه",pashto:"به ژوند کوي",farsi:"زندگی خواهد کرد",pronunciation:"ba zhwand kawi"},{pronoun:"موږ",pashto:"به ژوند کوو",farsi:"زندگی خواهیم کرد",pronunciation:"ba zhwand kawu"},{pronoun:"تاسو",pashto:"به ژوند کوئ",farsi:"زندگی خواهید کرد",pronunciation:"ba zhwand kawey"},{pronoun:"هغوی",pashto:"به ژوند کوي",farsi:"زندگی خواهند کرد",pronunciation:"ba zhwand kawi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ژوند وکړه",farsi:"زندگی بکن",pronunciation:"zhwand wakṛa"},{pronoun:"تاسو",pashto:"ژوند وکړئ",farsi:"زندگی بکنید",pronunciation:"zhwand wakṛey"}],negative:[{pronoun:"ته",pashto:"مه ژوند کوه",farsi:"زندگی مکن",pronunciation:"ma zhwand kawa"},{pronoun:"تاسو",pashto:"مه ژوند کوئ",farsi:"زندگی مکنید",pronunciation:"ma zhwand kawey"}]}},examples:[{pashto:"زه په کابل کې ژوند کوم",farsi:"من در کابل زندگی می‌کنم"},{pashto:"هغه په کندهار کې ژوند کوي",farsi:"او در قندهار زندگی می‌کند"},{pashto:"موږ دلته ژوند کوو",farsi:"ما اینجا زندگی می‌کنیم"}]},"to-learn":{id:"to-learn",infinitive:"زده کول",infinitiveFarsi:"یاد گرفتن",root:"زده کو",pastRoot:"زده کړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"زده کوم",farsi:"یاد می‌گیرم",pronunciation:"zda kawam"},{pronoun:"ته",pashto:"زده کوې",farsi:"یاد می‌گیری",pronunciation:"zda kawe"},{pronoun:"هغه",pashto:"زده کوي",farsi:"یاد می‌گیرد",pronunciation:"zda kawi"},{pronoun:"موږ",pashto:"زده کوو",farsi:"یاد می‌گیریم",pronunciation:"zda kawu"},{pronoun:"تاسو",pashto:"زده کوئ",farsi:"یاد می‌گیرید",pronunciation:"zda kawey"},{pronoun:"هغوی",pashto:"زده کوي",farsi:"یاد می‌گیرند",pronunciation:"zda kawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"زده کړل",farsi:"یاد گرفتم",pronunciation:"zda kṛal"},{pronoun:"تا",pashto:"زده کړل",farsi:"یاد گرفتی",pronunciation:"zda kṛal"},{pronoun:"هغه",pashto:"زده کړل",farsi:"یاد گرفت",pronunciation:"zda kṛal"},{pronoun:"موږ",pashto:"زده کړل",farsi:"یاد گرفتیم",pronunciation:"zda kṛal"},{pronoun:"تاسو",pashto:"زده کړل",farsi:"یاد گرفتید",pronunciation:"zda kṛal"},{pronoun:"هغوی",pashto:"زده کړل",farsi:"یاد گرفتند",pronunciation:"zda kṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به زده کوم",farsi:"یاد خواهم گرفت",pronunciation:"ba zda kawam"},{pronoun:"ته",pashto:"به زده کوې",farsi:"یاد خواهی گرفت",pronunciation:"ba zda kawe"},{pronoun:"هغه",pashto:"به زده کوي",farsi:"یاد خواهد گرفت",pronunciation:"ba zda kawi"},{pronoun:"موږ",pashto:"به زده کوو",farsi:"یاد خواهیم گرفت",pronunciation:"ba zda kawu"},{pronoun:"تاسو",pashto:"به زده کوئ",farsi:"یاد خواهید گرفت",pronunciation:"ba zda kawey"},{pronoun:"هغوی",pashto:"به زده کوي",farsi:"یاد خواهند گرفت",pronunciation:"ba zda kawi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"زده وکړه",farsi:"یاد بگیر",pronunciation:"zda wakṛa"},{pronoun:"تاسو",pashto:"زده وکړئ",farsi:"یاد بگیرید",pronunciation:"zda wakṛey"}],negative:[{pronoun:"ته",pashto:"مه زده کوه",farsi:"یاد مگیر",pronunciation:"ma zda kawa"},{pronoun:"تاسو",pashto:"مه زده کوئ",farsi:"یاد مگیرید",pronunciation:"ma zda kawey"}]}},examples:[{pashto:"زه پښتو زده کوم",farsi:"من پشتو یاد می‌گیرم"},{pashto:"ما پښتو زده کړل",farsi:"من پشتو یاد گرفتم"},{pashto:"ته څه زده کوې؟",farsi:"تو چه یاد می‌گیری؟"}]},"to-hit":{id:"to-hit",infinitive:"وهل",infinitiveFarsi:"زدن",root:"وه",pastRoot:"وو",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"وهم",farsi:"می‌زنم",pronunciation:"waham"},{pronoun:"ته",pashto:"وهې",farsi:"می‌زنی",pronunciation:"wahe"},{pronoun:"هغه",pashto:"وهي",farsi:"می‌زند",pronunciation:"wahi"},{pronoun:"موږ",pashto:"وهو",farsi:"می‌زنیم",pronunciation:"wahu"},{pronoun:"تاسو",pashto:"وهئ",farsi:"می‌زنید",pronunciation:"wahey"},{pronoun:"هغوی",pashto:"وهي",farsi:"می‌زنند",pronunciation:"wahi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ووهم",farsi:"زدم",pronunciation:"wawaham"},{pronoun:"تا",pashto:"ووهې",farsi:"زدی",pronunciation:"wawahe"},{pronoun:"هغه",pashto:"ووه",farsi:"زد",pronunciation:"wawa"},{pronoun:"موږ",pashto:"ووهل",farsi:"زدیم",pronunciation:"wawal"},{pronoun:"تاسو",pashto:"ووهل",farsi:"زدید",pronunciation:"wawal"},{pronoun:"هغوی",pashto:"ووهل",farsi:"زدند",pronunciation:"wawal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به وهم",farsi:"خواهم زد",pronunciation:"ba waham"},{pronoun:"ته",pashto:"به وهې",farsi:"خواهی زد",pronunciation:"ba wahe"},{pronoun:"هغه",pashto:"به وهي",farsi:"خواهد زد",pronunciation:"ba wahi"},{pronoun:"موږ",pashto:"به وهو",farsi:"خواهیم زد",pronunciation:"ba wahu"},{pronoun:"تاسو",pashto:"به وهئ",farsi:"خواهید زد",pronunciation:"ba wahey"},{pronoun:"هغوی",pashto:"به وهي",farsi:"خواهند زد",pronunciation:"ba wahi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وه",farsi:"بزن",pronunciation:"wa"},{pronoun:"تاسو",pashto:"وهئ",farsi:"بزنید",pronunciation:"wahey"}],negative:[{pronoun:"ته",pashto:"مه وه",farsi:"نزن",pronunciation:"ma wa"},{pronoun:"تاسو",pashto:"مه وهئ",farsi:"نزنید",pronunciation:"ma wahey"}]}}},"to-wash":{id:"to-wash",infinitive:"مینځل",infinitiveFarsi:"شستن",root:"مینځ",pastRoot:"ومینځ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"مینځم",farsi:"می‌شوم",pronunciation:"mindzam"},{pronoun:"ته",pashto:"مینځې",farsi:"می‌شوی",pronunciation:"mindze"},{pronoun:"هغه",pashto:"مینځي",farsi:"می‌شود",pronunciation:"mindzi"},{pronoun:"موږ",pashto:"مینځو",farsi:"می‌شویم",pronunciation:"mindzu"},{pronoun:"تاسو",pashto:"مینځئ",farsi:"می‌شوید",pronunciation:"mindzey"},{pronoun:"هغوی",pashto:"مینځي",farsi:"می‌شوند",pronunciation:"mindzi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ومینځم",farsi:"شستم",pronunciation:"wamindzam"},{pronoun:"تا",pashto:"ومینځې",farsi:"شستی",pronunciation:"wamindze"},{pronoun:"هغه",pashto:"ومینځ",farsi:"شست",pronunciation:"wamindz"},{pronoun:"موږ",pashto:"ومینځل",farsi:"شستیم",pronunciation:"wamindzal"},{pronoun:"تاسو",pashto:"ومینځل",farsi:"شستید",pronunciation:"wamindzal"},{pronoun:"هغوی",pashto:"ومینځل",farsi:"شستند",pronunciation:"wamindzal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به مینځم",farsi:"خواهم شست",pronunciation:"ba mindzam"},{pronoun:"ته",pashto:"به مینځې",farsi:"خواهی شست",pronunciation:"ba mindze"},{pronoun:"هغه",pashto:"به مینځي",farsi:"خواهد شست",pronunciation:"ba mindzi"},{pronoun:"موږ",pashto:"به مینځو",farsi:"خواهیم شست",pronunciation:"ba mindzu"},{pronoun:"تاسو",pashto:"به مینځئ",farsi:"خواهید شست",pronunciation:"ba mindzey"},{pronoun:"هغوی",pashto:"به مینځي",farsi:"خواهند شست",pronunciation:"ba mindzi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ومینځه",farsi:"بشو",pronunciation:"wamindza"},{pronoun:"تاسو",pashto:"ومینځئ",farsi:"بشوید",pronunciation:"wamindzey"}],negative:[{pronoun:"ته",pashto:"مه مینځه",farsi:"نشو",pronunciation:"ma mindza"},{pronoun:"تاسو",pashto:"مه مینځئ",farsi:"نشوید",pronunciation:"ma mindzey"}]}}},"to-give":{id:"to-give",infinitive:"ورکول",infinitiveFarsi:"دادن",root:"ورکو",pastRoot:"ورکړ",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ورکوم",farsi:"می‌دهم",pronunciation:"warkawam"},{pronoun:"ته",pashto:"ورکوې",farsi:"می‌دهی",pronunciation:"warkawe"},{pronoun:"هغه",pashto:"ورکوي",farsi:"می‌دهد",pronunciation:"warkawi"},{pronoun:"موږ",pashto:"ورکوو",farsi:"می‌دهیم",pronunciation:"warkawu"},{pronoun:"تاسو",pashto:"ورکوئ",farsi:"می‌دهید",pronunciation:"warkawy"},{pronoun:"هغوی",pashto:"ورکوي",farsi:"می‌دهند",pronunciation:"warkawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ورکړ",farsi:"دادم",pronunciation:"warkṛ"},{pronoun:"تا",pashto:"ورکړې",farsi:"دادی",pronunciation:"warkṛe"},{pronoun:"هغه",pashto:"ورکړ",farsi:"داد",pronunciation:"warkṛ"},{pronoun:"موږ",pashto:"ورکړل",farsi:"دادیم",pronunciation:"warkṛal"},{pronoun:"تاسو",pashto:"ورکړل",farsi:"دادید",pronunciation:"warkṛal"},{pronoun:"هغوی",pashto:"ورکړل",farsi:"دادند",pronunciation:"warkṛal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ورکوم",farsi:"خواهم داد",pronunciation:"ba warkawam"},{pronoun:"ته",pashto:"به ورکوې",farsi:"خواهی داد",pronunciation:"ba warkawe"},{pronoun:"هغه",pashto:"به ورکوي",farsi:"خواهد داد",pronunciation:"ba warkawi"},{pronoun:"موږ",pashto:"به ورکوو",farsi:"خواهیم داد",pronunciation:"ba warkawu"},{pronoun:"تاسو",pashto:"به ورکوئ",farsi:"خواهید داد",pronunciation:"ba warkawy"},{pronoun:"هغوی",pashto:"به ورکوي",farsi:"خواهند داد",pronunciation:"ba warkawi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ورکره",farsi:"بده",pronunciation:"warkara"},{pronoun:"تاسو",pashto:"ورکرئ",farsi:"بدهید",pronunciation:"warkarey"}],negative:[{pronoun:"ته",pashto:"مه ورکره",farsi:"نده",pronunciation:"ma warkara"},{pronoun:"تاسو",pashto:"مه ورکرئ",farsi:"ندهید",pronunciation:"ma warkarey"}]}}},"to-take":{id:"to-take",infinitive:"نیول",infinitiveFarsi:"گرفتن",root:"نیس",pastRoot:"ونیول",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"نیسم",farsi:"می‌گیرم",pronunciation:"nisam"},{pronoun:"ته",pashto:"نیسې",farsi:"می‌گیری",pronunciation:"nise"},{pronoun:"هغه",pashto:"نیسي",farsi:"می‌گیرد",pronunciation:"nisi"},{pronoun:"موږ",pashto:"نیسو",farsi:"می‌گیریم",pronunciation:"nisu"},{pronoun:"تاسو",pashto:"نیسئ",farsi:"می‌گیرید",pronunciation:"nisey"},{pronoun:"هغوی",pashto:"نیسي",farsi:"می‌گیرند",pronunciation:"nisi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ونیول",farsi:"گرفتم",pronunciation:"waniyawəl"},{pronoun:"تا",pashto:"ونیول",farsi:"گرفتی",pronunciation:"waniyawəl"},{pronoun:"هغه",pashto:"ونیول",farsi:"گرفت",pronunciation:"waniyawəl"},{pronoun:"موږ",pashto:"ونیول",farsi:"گرفتیم",pronunciation:"waniyawəl"},{pronoun:"تاسو",pashto:"ونیول",farsi:"گرفتید",pronunciation:"waniyawəl"},{pronoun:"هغوی",pashto:"ونیول",farsi:"گرفتند",pronunciation:"waniyawəl"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به نیسم",farsi:"خواهم گرفت",pronunciation:"ba nisam"},{pronoun:"ته",pashto:"به نیسې",farsi:"خواهی گرفت",pronunciation:"ba nise"},{pronoun:"هغه",pashto:"به نیسي",farsi:"خواهد گرفت",pronunciation:"ba nisi"},{pronoun:"موږ",pashto:"به نیسو",farsi:"خواهیم گرفت",pronunciation:"ba nisu"},{pronoun:"تاسو",pashto:"به نیسئ",farsi:"خواهید گرفت",pronunciation:"ba nisey"},{pronoun:"هغوی",pashto:"به نیسي",farsi:"خواهند گرفت",pronunciation:"ba nisi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ونیسه",farsi:"بگیر",pronunciation:"wanisa"},{pronoun:"تاسو",pashto:"ونیسئ",farsi:"بگیرید",pronunciation:"wanisey"}],negative:[{pronoun:"ته",pashto:"مه نیسه",farsi:"نگیر",pronunciation:"ma nisa"},{pronoun:"تاسو",pashto:"مه نیسئ",farsi:"نگیرید",pronunciation:"ma nisey"}]}}},"to-stand":{id:"to-stand",infinitive:"ایستل",infinitiveFarsi:"ایستادن",root:"ایسته‌ږ",pastRoot:"ایسته",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ایسته‌ږم",farsi:"می‌ایستم",pronunciation:"āysteẓ̌am"},{pronoun:"ته",pashto:"ایسته‌ږې",farsi:"می‌ایستی",pronunciation:"āysteẓ̌e"},{pronoun:"هغه",pashto:"ایسته‌ږي",farsi:"می‌ایستد",pronunciation:"āysteẓ̌i"},{pronoun:"موږ",pashto:"ایسته‌ږو",farsi:"می‌ایستیم",pronunciation:"āysteẓ̌u"},{pronoun:"تاسو",pashto:"ایسته‌ږئ",farsi:"می‌ایستید",pronunciation:"āysteẓ̌ey"},{pronoun:"هغوی",pashto:"ایسته‌ږي",farsi:"می‌ایستند",pronunciation:"āysteẓ̌i"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"ایسته",farsi:"ایستادم",pronunciation:"āysta"},{pronoun:"تا",pashto:"ایسته",farsi:"ایستادی",pronunciation:"āysta"},{pronoun:"هغه",pashto:"ایسته",farsi:"ایستاد",pronunciation:"āysta"},{pronoun:"موږ",pashto:"ایستل",farsi:"ایستادیم",pronunciation:"āystal"},{pronoun:"تاسو",pashto:"ایستل",farsi:"ایستادید",pronunciation:"āystal"},{pronoun:"هغوی",pashto:"ایستل",farsi:"ایستادند",pronunciation:"āystal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ایسته‌ږم",farsi:"خواهم ایستاد",pronunciation:"ba āysteẓ̌am"},{pronoun:"ته",pashto:"به ایسته‌ږې",farsi:"خواهی ایستاد",pronunciation:"ba āysteẓ̌e"},{pronoun:"هغه",pashto:"به ایسته‌ږي",farsi:"خواهد ایستاد",pronunciation:"ba āysteẓ̌i"},{pronoun:"موږ",pashto:"به ایسته‌ږو",farsi:"خواهیم ایستاد",pronunciation:"ba āysteẓ̌u"},{pronoun:"تاسو",pashto:"به ایسته‌ږئ",farsi:"خواهید ایستاد",pronunciation:"ba āysteẓ̌ey"},{pronoun:"هغوی",pashto:"به ایسته‌ږي",farsi:"خواهند ایستاد",pronunciation:"ba āysteẓ̌i"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"ایسته‌ږه",farsi:"بایست",pronunciation:"āysteẓ̌a"},{pronoun:"تاسو",pashto:"ایسته‌ږئ",farsi:"بایستید",pronunciation:"āysteẓ̌ey"}],negative:[{pronoun:"ته",pashto:"مه ایسته‌ږه",farsi:"نایست",pronunciation:"ma āysteẓ̌a"},{pronoun:"تاسو",pashto:"مه ایسته‌ږئ",farsi:"نایستید",pronunciation:"ma āysteẓ̌ey"}]}}},"to-run":{id:"to-run",infinitive:"منډې وهل",infinitiveFarsi:"دویدن",root:"منډې وه",pastRoot:"منډې وو",type:"intransitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"منډې وهم",farsi:"می‌دوم",pronunciation:"munḍe waham"},{pronoun:"ته",pashto:"منډې وهې",farsi:"می‌دوی",pronunciation:"munḍe wahe"},{pronoun:"هغه",pashto:"منډې وهي",farsi:"می‌دود",pronunciation:"munḍe wahi"},{pronoun:"موږ",pashto:"منډې وهو",farsi:"می‌دویم",pronunciation:"munḍe wahu"},{pronoun:"تاسو",pashto:"منډې وهئ",farsi:"می‌دوید",pronunciation:"munḍe wahey"},{pronoun:"هغوی",pashto:"منډې وهي",farsi:"می‌دوند",pronunciation:"munḍe wahi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"منډې ووهم",farsi:"دویدم",pronunciation:"munḍe wawaham"},{pronoun:"تا",pashto:"منډې ووهې",farsi:"دویدی",pronunciation:"munḍe wawahe"},{pronoun:"هغه",pashto:"منډې ووه",farsi:"دوید",pronunciation:"munḍe wawa"},{pronoun:"موږ",pashto:"منډې ووهل",farsi:"دویدیم",pronunciation:"munḍe wawal"},{pronoun:"تاسو",pashto:"منډې ووهل",farsi:"دویدید",pronunciation:"munḍe wawal"},{pronoun:"هغوی",pashto:"منډې ووهل",farsi:"دویدند",pronunciation:"munḍe wawal"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به منډې وهم",farsi:"خواهم دوید",pronunciation:"ba munḍe waham"},{pronoun:"ته",pashto:"به منډې وهې",farsi:"خواهی دوید",pronunciation:"ba munḍe wahe"},{pronoun:"هغه",pashto:"به منډې وهي",farsi:"خواهد دوید",pronunciation:"ba munḍe wahi"},{pronoun:"موږ",pashto:"به منډې وهو",farsi:"خواهیم دوید",pronunciation:"ba munḍe wahu"},{pronoun:"تاسو",pashto:"به منډې وهئ",farsi:"خواهید دوید",pronunciation:"ba munḍe wahey"},{pronoun:"هغوی",pashto:"به منډې وهي",farsi:"خواهند دوید",pronunciation:"ba munḍe wahi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"منډې وه",farsi:"بدو",pronunciation:"munḍe wa"},{pronoun:"تاسو",pashto:"منډې وهئ",farsi:"بدوید",pronunciation:"munḍe wahey"}],negative:[{pronoun:"ته",pashto:"مه منډې وه",farsi:"ندو",pronunciation:"ma munḍe wa"},{pronoun:"تاسو",pashto:"مه منډې وهئ",farsi:"ندوید",pronunciation:"ma munḍe wahey"}]}}},"to-close":{id:"to-close",infinitive:"ترل",infinitiveFarsi:"بستن",root:"تر",pastRoot:"وتر",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"ترم",farsi:"می‌بندم",pronunciation:"taram"},{pronoun:"ته",pashto:"تره",farsi:"می‌بندی",pronunciation:"tara"},{pronoun:"هغه",pashto:"تري",farsi:"می‌بندد",pronunciation:"tari"},{pronoun:"موږ",pashto:"ترو",farsi:"می‌بندیم",pronunciation:"taru"},{pronoun:"تاسو",pashto:"تره",farsi:"می‌بندید",pronunciation:"tara"},{pronoun:"هغوی",pashto:"تري",farsi:"می‌بندند",pronunciation:"tari"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"وترم",farsi:"بستم",pronunciation:"wtaram"},{pronoun:"تا",pashto:"وتره",farsi:"بستی",pronunciation:"wtara"},{pronoun:"هغه",pashto:"وتر",farsi:"بست",pronunciation:"wtar"},{pronoun:"موږ",pashto:"وترل",farsi:"بستیم",pronunciation:"wtaral"},{pronoun:"تاسو",pashto:"وترل",farsi:"بستید",pronunciation:"wtaral"},{pronoun:"هغوی",pashto:"وترل",farsi:"بستند",pronunciation:"wtaral"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به ترم",farsi:"خواهم بست",pronunciation:"ba taram"},{pronoun:"ته",pashto:"به تره",farsi:"خواهی بست",pronunciation:"ba tara"},{pronoun:"هغه",pashto:"به تري",farsi:"خواهد بست",pronunciation:"ba tari"},{pronoun:"موږ",pashto:"به تरو",farsi:"خواهیم بست",pronunciation:"ba taru"},{pronoun:"تاسو",pashto:"به تره",farsi:"خواهید بست",pronunciation:"ba tara"},{pronoun:"هغوی",pashto:"به تري",farsi:"خواهند بست",pronunciation:"ba tari"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وتره",farsi:"ببند",pronunciation:"wtara"},{pronoun:"تاسو",pashto:"وترئ",farsi:"ببندید",pronunciation:"wtarey"}],negative:[{pronoun:"ته",pashto:"مه تره",farsi:"نبند",pronunciation:"ma tara"},{pronoun:"تاسو",pashto:"مه ترئ",farsi:"نبندید",pronunciation:"ma tarey"}]}}},"to-open":{id:"to-open",infinitive:"خلاصول",infinitiveFarsi:"باز کردن",root:"خلاص",pastRoot:"وخلاص",type:"transitive",tenses:{present:{name:"حال",namePashto:"اوسمهال",conjugations:[{pronoun:"زه",pashto:"خلاصوم",farsi:"می‌کنم",pronunciation:"khlaasawam"},{pronoun:"ته",pashto:"خلاصوې",farsi:"می‌کنی",pronunciation:"khlaasawe"},{pronoun:"هغه",pashto:"خلاصوي",farsi:"می‌کند",pronunciation:"khlaasawi"},{pronoun:"موږ",pashto:"خلاصوو",farsi:"می‌کنیم",pronunciation:"khlaasawu"},{pronoun:"تاسو",pashto:"خلاصوئ",farsi:"می‌کنید",pronunciation:"khlaasawy"},{pronoun:"هغوی",pashto:"خلاصوي",farsi:"می‌کنند",pronunciation:"khlaasawi"}]},past:{name:"گذشته",namePashto:"تېرمهال",conjugations:[{pronoun:"ما",pashto:"وخلاصم",farsi:"کردم",pronunciation:"wkhlaasam"},{pronoun:"تا",pashto:"وخلاصې",farsi:"کردی",pronunciation:"wkhlaase"},{pronoun:"هغه",pashto:"وخلاص",farsi:"کرد",pronunciation:"wkhlaas"},{pronoun:"موږ",pashto:"وخلاصل",farsi:"کردیم",pronunciation:"wkhlaasəl"},{pronoun:"تاسو",pashto:"وخلاصل",farsi:"کردید",pronunciation:"wkhlaasəl"},{pronoun:"هغوی",pashto:"وخلاصل",farsi:"کردند",pronunciation:"wkhlaasəl"}]},future:{name:"آینده",namePashto:"راتلونکی",conjugations:[{pronoun:"زه",pashto:"به خلاصوم",farsi:"خواهم کرد",pronunciation:"ba khlaasawam"},{pronoun:"ته",pashto:"به خلاصوې",farsi:"خواهی کرد",pronunciation:"ba khlaasawe"},{pronoun:"هغه",pashto:"به خلاصوي",farsi:"خواهد کرد",pronunciation:"ba khlaasawi"},{pronoun:"موږ",pashto:"به خلاصوو",farsi:"خواهیم کرد",pronunciation:"ba khlaasawu"},{pronoun:"تاسو",pashto:"به خلاصوئ",farsi:"خواهید کرد",pronunciation:"ba khlaasawy"},{pronoun:"هغوی",pashto:"به خلاصوي",farsi:"خواهند کرد",pronunciation:"ba khlaasawi"}]},imperative:{name:"امری",namePashto:"امري",conjugations:[{pronoun:"ته",pashto:"وخلاصه",farsi:"باز کن",pronunciation:"wkhlaasa"},{pronoun:"تاسو",pashto:"وخلاصئ",farsi:"باز کنید",pronunciation:"wkhlaasay"}],negative:[{pronoun:"ته",pashto:"مه خلاصه",farsi:"باز نکن",pronunciation:"ma khlaasa"},{pronoun:"تاسو",pashto:"مه خلاصئ",farsi:"باز نکنید",pronunciation:"ma khlaasay"}]}}}},xx=[{id:"to-be",name:"بودن",namePashto:"اوسېدل",root:"یم/دی"},{id:"to-go",name:"رفتن",namePashto:"تلل",root:"ځ"},{id:"to-come",name:"آمدن",namePashto:"راتلل",root:"راځ"},{id:"to-eat",name:"خوردن",namePashto:"خوړل",root:"خور"},{id:"to-drink",name:"نوشیدن",namePashto:"څښل",root:"څښ"},{id:"to-do",name:"کردن",namePashto:"کول",root:"کو"},{id:"to-want",name:"خواستن",namePashto:"غوښتل",root:"غواړ"},{id:"to-see",name:"دیدن",namePashto:"لیدل",root:"وین"},{id:"to-say",name:"گفتن",namePashto:"ویل",root:"وای"},{id:"to-hear",name:"شنیدن",namePashto:"اورېدل",root:"اور"},{id:"to-write",name:"نوشتن",namePashto:"لیکل",root:"لیک"},{id:"to-read",name:"خواندن",namePashto:"لوستل",root:"لول"},{id:"to-have",name:"داشتن",namePashto:"لرل",root:"لر"},{id:"to-hit",name:"زدن",namePashto:"وهل",root:"وه"},{id:"to-wash",name:"شستن",namePashto:"مینځل",root:"مینځ"},{id:"to-give",name:"دادن",namePashto:"ورکول",root:"ورکو"},{id:"to-take",name:"گرفتن",namePashto:"نیول",root:"نیس"},{id:"to-stand",name:"ایستادن",namePashto:"ایستل",root:"ایسته‌ږ"},{id:"to-run",name:"دویدن",namePashto:"منډې وهل",root:"منډې وه"},{id:"to-close",name:"بستن",namePashto:"ترل",root:"تر"},{id:"to-open",name:"باز کردن",namePashto:"خلاصول",root:"خلاص"},{id:"to-carry",name:"بردن",namePashto:"وړل",root:"وړ"},{id:"to-bring",name:"آوردن",namePashto:"راوړل",root:"راوړ"},{id:"to-understand",name:"فهمیدن",namePashto:"پوهېدل",root:"پوه"},{id:"to-sit",name:"نشستن",namePashto:"کېناستل",root:"کېن"},{id:"to-sleep",name:"خوابیدن",namePashto:"ویدېدل",root:"ویده"},{id:"to-become",name:"شدن",namePashto:"کېدل",root:"کېږ"},{id:"to-love",name:"دوست داشتن",namePashto:"خوښول",root:"خوښ"},{id:"to-work",name:"کار کردن",namePashto:"کار کول",root:"کار کو"},{id:"to-speak",name:"صحبت کردن",namePashto:"خبرې کول",root:"خبرې کو"},{id:"to-live",name:"زندگی کردن",namePashto:"ژوند کول",root:"ژوند کو"},{id:"to-learn",name:"یاد گرفتن",namePashto:"زده کول",root:"زده کو"}];function wx(){const[l,c]=T.useState("to-go"),p=vx[l],u=["present","past","future","imperative"],d={present:"۱",past:"۲",future:"۳",imperative:"۴"},m={present:"from-emerald-600 to-green-600",past:"from-blue-600 to-indigo-600",future:"from-purple-600 to-violet-600",imperative:"from-orange-600 to-amber-600"};return o.jsx("div",{className:"p-6 min-h-screen",dir:"rtl",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[o.jsx("div",{className:"w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center",children:o.jsx(ot,{className:"w-6 h-6 text-blue-400"})}),o.jsx("h1",{className:"text-2xl font-bold text-slate-200",children:"گردان فعل‌های پښتو"})]}),o.jsxs("div",{className:"bg-slate-800 rounded-xl p-4 mb-6 shadow-lg border border-slate-700",children:[o.jsx("label",{className:"block text-slate-400 font-medium mb-2",children:"انتخاب فعل:"}),o.jsx("select",{value:l,onChange:h=>c(h.target.value),className:"w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-slate-200 text-lg focus:border-emerald-500 focus:outline-none transition-colors",children:xx.map((h,b)=>o.jsxs("option",{value:h.id,children:[b+1,". ",h.namePashto," - ",h.name," (",h.root,")"]},h.id))})]}),p&&o.jsx("div",{className:"bg-slate-800 rounded-xl p-4 mb-6 shadow-lg border border-slate-700",children:o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-center",children:[o.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3",children:[o.jsx("div",{className:"text-slate-500 text-sm",children:"مصدر پښتو"}),o.jsx("div",{className:"text-xl font-bold text-slate-200",children:p.infinitive})]}),o.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3",children:[o.jsx("div",{className:"text-slate-500 text-sm",children:"مصدر فارسی"}),o.jsx("div",{className:"text-xl font-bold text-slate-200",children:p.infinitiveFarsi})]}),o.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3",children:[o.jsx("div",{className:"text-slate-500 text-sm",children:"ریشه"}),o.jsx("div",{className:"text-xl font-bold text-emerald-400",children:p.root})]}),o.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3",children:[o.jsx("div",{className:"text-slate-500 text-sm",children:"نوع"}),o.jsx("div",{className:"text-lg font-medium text-slate-300",children:p.type==="transitive"?"متعدی":p.type==="intransitive"?"لازم":"بی‌قاعده"})]})]})}),p&&u.map((h,b)=>{const v=p.tenses[h];return v?o.jsxs("div",{className:"bg-slate-800 rounded-xl mb-6 shadow-lg border border-slate-700 overflow-hidden",children:[o.jsxs("div",{className:`p-4 flex items-center gap-3 bg-gradient-to-r ${m[h]||"from-slate-600 to-slate-700"} text-white`,children:[o.jsx("div",{className:"w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg",children:d[h]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-xl font-bold",children:v.namePashto}),o.jsxs("span",{className:"text-lg opacity-80 mr-2",children:["(",v.name,")"]})]})]}),o.jsxs("div",{className:"p-4",children:[v.note&&o.jsxs("div",{className:"bg-amber-500/20 text-amber-300 p-3 rounded-lg mb-4 text-sm border border-amber-500/30",children:["⚠️ ",v.note]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"bg-slate-700",children:[o.jsx("th",{className:"p-3 text-right text-slate-300 font-semibold",children:"ضمیر"}),o.jsx("th",{className:"p-3 text-right text-slate-300 font-semibold",children:"پښتو"}),o.jsx("th",{className:"p-3 text-right text-slate-300 font-semibold",children:"فارسی"}),o.jsx("th",{className:"p-3 text-right text-slate-300 font-semibold",children:"تلفظ"})]})}),o.jsx("tbody",{children:v.conjugations.map((y,A)=>o.jsxs("tr",{className:A%2===0?"bg-slate-800":"bg-slate-750",children:[o.jsx("td",{className:"p-3 font-medium text-slate-400",children:y.pronoun}),o.jsx("td",{className:"p-3 text-xl font-bold text-emerald-400",children:y.pashto}),o.jsx("td",{className:"p-3 text-slate-300",children:y.farsi}),o.jsx("td",{className:"p-3 text-slate-500 text-sm",dir:"ltr",children:y.pronunciation})]},A))})]})}),v.negative&&o.jsxs("div",{className:"mt-4",children:[o.jsx("h4",{className:"font-bold text-red-400 mb-2",children:"منفی (نهی):"}),o.jsx("div",{className:"overflow-x-auto",children:o.jsx("table",{className:"w-full",children:o.jsx("tbody",{children:v.negative.map((y,A)=>o.jsxs("tr",{className:"bg-red-500/10 border border-red-500/20",children:[o.jsx("td",{className:"p-3 font-medium text-slate-400",children:y.pronoun}),o.jsx("td",{className:"p-3 text-xl font-bold text-red-400",children:y.pashto}),o.jsx("td",{className:"p-3 text-slate-300",children:y.farsi}),o.jsx("td",{className:"p-3 text-slate-500 text-sm",dir:"ltr",children:y.pronunciation})]},A))})})})]})]})]},h):null}),p&&p.examples&&o.jsxs("div",{className:"bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700",children:[o.jsx("h3",{className:"text-lg font-bold text-slate-200 mb-3",children:"مثال‌ها:"}),o.jsx("div",{className:"space-y-2",children:p.examples.map((h,b)=>o.jsxs("div",{className:"bg-slate-700/50 p-3 rounded-lg flex justify-between items-center border border-slate-600",children:[o.jsx("span",{className:"text-emerald-400 font-bold",children:h.pashto}),o.jsx("span",{className:"text-slate-400",children:h.farsi})]},b))})]}),o.jsxs("div",{className:"mt-6 bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700",children:[o.jsx("h3",{className:"text-lg font-bold text-slate-200 mb-3",children:"راهنمای سریع:"}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[o.jsxs("div",{className:"bg-slate-700/50 p-3 rounded-lg border border-slate-600",children:[o.jsx("div",{className:"font-bold text-emerald-400 mb-1",children:"پسوندهای حال:"}),o.jsx("div",{className:"text-slate-400",children:"م، ې، ي، و، ئ، ي"})]}),o.jsxs("div",{className:"bg-slate-700/50 p-3 rounded-lg border border-slate-600",children:[o.jsx("div",{className:"font-bold text-purple-400 mb-1",children:"علامت آینده:"}),o.jsx("div",{className:"text-slate-400",children:"به + فعل حال"})]}),o.jsxs("div",{className:"bg-slate-700/50 p-3 rounded-lg border border-slate-600",children:[o.jsx("div",{className:"font-bold text-blue-400 mb-1",children:"علامت گذشته:"}),o.jsx("div",{className:"text-slate-400",children:"پیشوند «و» + ریشه گذشته"})]}),o.jsxs("div",{className:"bg-slate-700/50 p-3 rounded-lg border border-slate-600",children:[o.jsx("div",{className:"font-bold text-red-400 mb-1",children:"منفی‌ساز:"}),o.jsx("div",{className:"text-slate-400",children:"نه (خبری) / مه (امری)"})]})]})]})]})})}const kx={emerald:{bg:"bg-emerald-500/20",border:"border-emerald-500/50",text:"text-emerald-400",icon:"bg-emerald-500"},pink:{bg:"bg-pink-500/20",border:"border-pink-500/50",text:"text-pink-400",icon:"bg-pink-500"},blue:{bg:"bg-blue-500/20",border:"border-blue-500/50",text:"text-blue-400",icon:"bg-blue-500"},amber:{bg:"bg-amber-500/20",border:"border-amber-500/50",text:"text-amber-400",icon:"bg-amber-500"},teal:{bg:"bg-teal-500/20",border:"border-teal-500/50",text:"text-teal-400",icon:"bg-teal-500"},violet:{bg:"bg-violet-500/20",border:"border-violet-500/50",text:"text-violet-400",icon:"bg-violet-500"},red:{bg:"bg-red-500/20",border:"border-red-500/50",text:"text-red-400",icon:"bg-red-500"},cyan:{bg:"bg-cyan-500/20",border:"border-cyan-500/50",text:"text-cyan-400",icon:"bg-cyan-500"},orange:{bg:"bg-orange-500/20",border:"border-orange-500/50",text:"text-orange-400",icon:"bg-orange-500"},purple:{bg:"bg-purple-500/20",border:"border-purple-500/50",text:"text-purple-400",icon:"bg-purple-500"},indigo:{bg:"bg-indigo-500/20",border:"border-indigo-500/50",text:"text-indigo-400",icon:"bg-indigo-500"}};function jx(){const[l,c]=T.useState(1),{progress:p,completePhase:u,uncompletePhase:d,isPhaseCompleted:m}=un(),h=k=>{c(l===k?null:k)},b=k=>{m(k)?d(k):u(k)},v=p?.completedPhases?.length||0,y=v/le.length*100,A=le.reduce((k,B)=>k+B.lessons.length,0);return o.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[o.jsxs("div",{className:"bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[o.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30",children:o.jsx(bh,{className:"w-7 h-7 text-white"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-bold text-slate-100",children:"نقشه راه یادگیری"}),o.jsx("p",{className:"text-slate-400",children:"د زده کړې لارښود - مسیر کامل یادگیری پشتو کندهاری"})]})]}),o.jsxs("div",{className:"mt-4",children:[o.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[o.jsx("span",{className:"text-slate-400",children:"پیشرفت کلی"}),o.jsxs("span",{className:"text-indigo-400 font-bold",children:[Math.round(y),"%"]})]}),o.jsx("div",{className:"h-3 bg-slate-700 rounded-full overflow-hidden",children:o.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500",style:{width:`${y}%`}})}),o.jsxs("p",{className:"text-xs text-slate-500 mt-2",children:[v," از ",le.length," مرحله تکمیل شده"]})]})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[o.jsxs("div",{className:"bg-slate-800 rounded-xl p-4 border border-slate-700 text-center shadow-md",children:[o.jsx(kh,{className:"w-8 h-8 text-emerald-400 mx-auto mb-2"}),o.jsx("p",{className:"text-2xl font-bold text-slate-100",children:le.length}),o.jsx("p",{className:"text-xs text-slate-500 font-medium",children:"مرحله"})]}),o.jsxs("div",{className:"bg-slate-800 rounded-xl p-4 border border-slate-700 text-center shadow-md",children:[o.jsx(su,{className:"w-8 h-8 text-amber-400 mx-auto mb-2"}),o.jsx("p",{className:"text-2xl font-bold text-slate-100",children:A}),o.jsx("p",{className:"text-xs text-slate-500 font-medium",children:"درس کل"})]}),o.jsxs("div",{className:"bg-slate-800 rounded-xl p-4 border border-slate-700 text-center shadow-md",children:[o.jsx(Le,{className:"w-8 h-8 text-purple-400 mx-auto mb-2"}),o.jsx("p",{className:"text-2xl font-bold text-slate-100",children:"۸۰٪"}),o.jsx("p",{className:"text-xs text-slate-500 font-medium",children:"رضایت کاربران"})]})]}),o.jsx("div",{className:"space-y-4",children:le.map((k,B)=>{const z=kx[k.color],M=l===k.phase,R=m(k.phase),_=k.icon;return o.jsxs("div",{className:`bg-slate-800 rounded-2xl border transition-all ${R?"border-emerald-500/50":"border-slate-700"}`,children:[o.jsxs("button",{onClick:()=>h(k.phase),className:"w-full p-4 flex items-center gap-4 text-right",children:[o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${z.icon} shadow-lg`,children:o.jsx(_,{className:"w-6 h-6 text-white"})}),R&&o.jsx("div",{className:"absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center",children:o.jsx(Mt,{className:"w-4 h-4 text-white"})}),B<le.length-1&&o.jsx("div",{className:`absolute top-12 right-1/2 w-0.5 h-8 ${R?"bg-emerald-500":"bg-slate-600"}`})]}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"flex items-center gap-2 mb-1",children:o.jsx("h3",{className:`font-bold ${R?"text-emerald-400":"text-slate-100"}`,children:k.title})}),o.jsx("p",{className:`text-sm ${z.text}`,children:k.titlePashto}),o.jsxs("div",{className:"flex items-center gap-4 mt-1 text-xs text-slate-500",children:[o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(Gg,{className:"w-3 h-3"}),k.duration]}),o.jsxs("span",{children:[k.lessons.length," درس"]})]})]}),o.jsx("div",{className:"text-slate-500",children:M?o.jsx(on,{className:"w-5 h-5"}):o.jsx(Oe,{className:"w-5 h-5"})})]}),M&&o.jsxs("div",{className:"px-4 pb-4 border-t border-slate-700 pt-4",children:[o.jsx("p",{className:"text-slate-300 mb-4",children:k.description}),o.jsxs("div",{className:`${z.bg} rounded-xl p-4 mb-4 border ${z.border}`,children:[o.jsx("h4",{className:`font-bold ${z.text} mb-2`,children:"اهداف این مرحله:"}),o.jsx("ul",{className:"space-y-1",children:k.goals.map((q,H)=>o.jsxs("li",{className:"flex items-center gap-2 text-sm text-slate-300",children:[o.jsx(Kg,{className:`w-2 h-2 ${z.text}`}),q]},H))})]}),o.jsxs("div",{className:"mb-4",children:[o.jsx("h4",{className:"font-bold text-slate-300 mb-2",children:"درس‌ها:"}),o.jsx("div",{className:"grid grid-cols-2 gap-2",children:k.lessons.map(q=>o.jsxs(Pa,{to:`/lesson/${q.id}`,className:"bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2",children:[o.jsx(ot,{className:"w-4 h-4 text-slate-500"}),q.title]},q.id))})]}),o.jsxs("div",{className:"bg-amber-500/10 rounded-xl p-4 border border-amber-500/30",children:[o.jsxs("h4",{className:"font-bold text-amber-400 mb-1 flex items-center gap-2",children:[o.jsx(su,{className:"w-4 h-4"}),"نکته:"]}),o.jsx("p",{className:"text-sm text-slate-300",children:k.tips})]}),o.jsx("button",{onClick:()=>b(k.phase),className:`mt-4 w-full py-3 rounded-xl font-bold transition-all ${R?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/50":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:R?"✓ تکمیل شده":"علامت‌گذاری به عنوان تکمیل شده"})]})]},k.phase)})}),o.jsxs("div",{className:"bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30",children:[o.jsxs("h3",{className:"text-xl font-bold text-indigo-300 mb-4 flex items-center gap-2",children:[o.jsx(wh,{className:"w-6 h-6"}),"نکات مهم برای موفقیت"]}),o.jsxs("ul",{className:"space-y-3 text-slate-300",children:[o.jsxs("li",{className:"flex items-start gap-2",children:[o.jsx(Mt,{className:"w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"}),o.jsx("span",{children:"هر روز حداقل ۳۰ دقیقه تمرین کنید - ثبات مهم‌تر از مدت است"})]}),o.jsxs("li",{className:"flex items-start gap-2",children:[o.jsx(Mt,{className:"w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"}),o.jsx("span",{children:"با صدای بلند تمرین کنید - تلفظ کندهاری نیاز به تمرین دارد"})]}),o.jsxs("li",{className:"flex items-start gap-2",children:[o.jsx(Mt,{className:"w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"}),o.jsx("span",{children:"از صفحه صرف فعل برای تمرین گردان فعل‌ها استفاده کنید"})]}),o.jsxs("li",{className:"flex items-start gap-2",children:[o.jsx(Mt,{className:"w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"}),o.jsx("span",{children:"مکالمات را با نقش‌بازی تمرین کنید - هر دو طرف مکالمه را بخوانید"})]}),o.jsxs("li",{className:"flex items-start gap-2",children:[o.jsx(Mt,{className:"w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"}),o.jsx("span",{children:"اگر امکان دارد با پشتوزبانان صحبت کنید - تمرین واقعی بهترین روش است"})]})]})]})]})}function Nx(){const{currentUser:l}=Ii();return l?o.jsxs(o.Fragment,{children:[o.jsx(pb,{}),o.jsx(cb,{children:o.jsxs(ng,{children:[o.jsx(Et,{path:"/",element:o.jsx(hb,{})}),o.jsx(Et,{path:"/users",element:o.jsx(db,{})}),o.jsx(Et,{path:"/lesson/:lessonId",element:o.jsx(nx,{})}),o.jsx(Et,{path:"/practice/:practiceId",element:o.jsx(lx,{})}),o.jsx(Et,{path:"/alphabet",element:o.jsx(ux,{})}),o.jsx(Et,{path:"/vocabulary",element:o.jsx(Yd,{})}),o.jsx(Et,{path:"/vocabulary/:categoryId",element:o.jsx(Yd,{})}),o.jsx(Et,{path:"/conversation",element:o.jsx(Gd,{})}),o.jsx(Et,{path:"/conversation/:conversationId",element:o.jsx(Gd,{})}),o.jsx(Et,{path:"/conjugation",element:o.jsx(wx,{})}),o.jsx(Et,{path:"/roadmap",element:o.jsx(jx,{})})]})})]}):o.jsx(fb,{})}oy.createRoot(document.getElementById("root")).render(o.jsx($0.StrictMode,{children:o.jsx(Tg,{children:o.jsx(Og,{children:o.jsx(ib,{children:o.jsx(Nx,{})})})})}));
