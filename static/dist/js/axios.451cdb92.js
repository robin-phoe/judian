var Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function er(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Yr(e){var r=e.default;if(typeof r=="function"){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(a){var n=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,n.get?n:{enumerable:!0,get:function(){return e[a]}})}),t}var De={exports:{}},ne={exports:{}},_e=function(r,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return r.apply(t,n)}},rr=_e,w=Object.prototype.toString;function ae(e){return Array.isArray(e)}function re(e){return typeof e>"u"}function tr(e){return e!==null&&!re(e)&&e.constructor!==null&&!re(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function $e(e){return w.call(e)==="[object ArrayBuffer]"}function nr(e){return w.call(e)==="[object FormData]"}function ar(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&$e(e.buffer),r}function ir(e){return typeof e=="string"}function sr(e){return typeof e=="number"}function Ie(e){return e!==null&&typeof e=="object"}function T(e){if(w.call(e)!=="[object Object]")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}function or(e){return w.call(e)==="[object Date]"}function ur(e){return w.call(e)==="[object File]"}function fr(e){return w.call(e)==="[object Blob]"}function ke(e){return w.call(e)==="[object Function]"}function lr(e){return Ie(e)&&ke(e.pipe)}function cr(e){return w.call(e)==="[object URLSearchParams]"}function dr(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function hr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function ie(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ae(e))for(var t=0,a=e.length;t<a;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function te(){var e={};function r(n,i){T(e[i])&&T(n)?e[i]=te(e[i],n):T(n)?e[i]=te({},n):ae(n)?e[i]=n.slice():e[i]=n}for(var t=0,a=arguments.length;t<a;t++)ie(arguments[t],r);return e}function pr(e,r,t){return ie(r,function(n,i){t&&typeof n=="function"?e[i]=rr(n,t):e[i]=n}),e}function mr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var p={isArray:ae,isArrayBuffer:$e,isBuffer:tr,isFormData:nr,isArrayBufferView:ar,isString:ir,isNumber:sr,isObject:Ie,isPlainObject:T,isUndefined:re,isDate:or,isFile:ur,isBlob:fr,isFunction:ke,isStream:lr,isURLSearchParams:cr,isStandardBrowserEnv:hr,forEach:ie,merge:te,extend:pr,trim:dr,stripBOM:mr},O=p;function de(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Fe=function(r,t,a){if(!t)return r;var n;if(a)n=a(t);else if(O.isURLSearchParams(t))n=t.toString();else{var i=[];O.forEach(t,function(l,d){l===null||typeof l>"u"||(O.isArray(l)?d=d+"[]":l=[l],O.forEach(l,function(s){O.isDate(s)?s=s.toISOString():O.isObject(s)&&(s=JSON.stringify(s)),i.push(de(d)+"="+de(s))}))}),n=i.join("&")}if(n){var u=r.indexOf("#");u!==-1&&(r=r.slice(0,u)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},vr=p;function j(){this.handlers=[]}j.prototype.use=function(r,t,a){return this.handlers.push({fulfilled:r,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};j.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};j.prototype.forEach=function(r){vr.forEach(this.handlers,function(a){a!==null&&r(a)})};var yr=j,br=p,Er=function(r,t){br.forEach(r,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[i])})},He=function(r,t,a,n,i){return r.config=t,a&&(r.code=a),r.request=n,r.response=i,r.isAxiosError=!0,r.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},r},Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$,he;function Je(){if(he)return $;he=1;var e=He;return $=function(t,a,n,i,u){var o=new Error(t);return e(o,a,n,i,u)},$}var I,pe;function wr(){if(pe)return I;pe=1;var e=Je();return I=function(t,a,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):a(e("Request failed with status code "+n.status,n.config,null,n.request,n))},I}var k,me;function Rr(){if(me)return k;me=1;var e=p;return k=e.isStandardBrowserEnv()?function(){return{write:function(a,n,i,u,o,l){var d=[];d.push(a+"="+encodeURIComponent(n)),e.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),e.isString(u)&&d.push("path="+u),e.isString(o)&&d.push("domain="+o),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(a){var n=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),k}var F,ve;function Cr(){return ve||(ve=1,F=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}),F}var H,ye;function Sr(){return ye||(ye=1,H=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r}),H}var M,be;function Or(){if(be)return M;be=1;var e=Cr(),r=Sr();return M=function(a,n){return a&&!e(n)?r(a,n):n},M}var J,Ee;function xr(){if(Ee)return J;Ee=1;var e=p,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return J=function(a){var n={},i,u,o;return a&&e.forEach(a.split(`
`),function(d){if(o=d.indexOf(":"),i=e.trim(d.substr(0,o)).toLowerCase(),u=e.trim(d.substr(o+1)),i){if(n[i]&&r.indexOf(i)>=0)return;i==="set-cookie"?n[i]=(n[i]?n[i]:[]).concat([u]):n[i]=n[i]?n[i]+", "+u:u}}),n},J}var z,we;function qr(){if(we)return z;we=1;var e=p;return z=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a"),n;function i(u){var o=u;return t&&(a.setAttribute("href",o),o=a.href),a.setAttribute("href",o),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return n=i(window.location.href),function(o){var l=e.isString(o)?i(o):o;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}(),z}var V,Re;function L(){if(Re)return V;Re=1;function e(r){this.message=r}return e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,V=e,V}var X,Ce;function Se(){if(Ce)return X;Ce=1;var e=p,r=wr(),t=Rr(),a=Fe,n=Or(),i=xr(),u=qr(),o=Je(),l=Me,d=L();return X=function(s){return new Promise(function(m,q){var g=s.data,A=s.headers,N=s.responseType,C;function ue(){s.cancelToken&&s.cancelToken.unsubscribe(C),s.signal&&s.signal.removeEventListener("abort",C)}e.isFormData(g)&&delete A["Content-Type"];var f=new XMLHttpRequest;if(s.auth){var Ye=s.auth.username||"",Qe=s.auth.password?unescape(encodeURIComponent(s.auth.password)):"";A.Authorization="Basic "+btoa(Ye+":"+Qe)}var fe=n(s.baseURL,s.url);f.open(s.method.toUpperCase(),a(fe,s.params,s.paramsSerializer),!0),f.timeout=s.timeout;function le(){if(!!f){var y="getAllResponseHeaders"in f?i(f.getAllResponseHeaders()):null,S=!N||N==="text"||N==="json"?f.responseText:f.response,R={data:S,status:f.status,statusText:f.statusText,headers:y,config:s,request:f};r(function(_){m(_),ue()},function(_){q(_),ue()},R),f=null}}if("onloadend"in f?f.onloadend=le:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(le)},f.onabort=function(){!f||(q(o("Request aborted",s,"ECONNABORTED",f)),f=null)},f.onerror=function(){q(o("Network Error",s,null,f)),f=null},f.ontimeout=function(){var S=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded",R=s.transitional||l;s.timeoutErrorMessage&&(S=s.timeoutErrorMessage),q(o(S,s,R.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",f)),f=null},e.isStandardBrowserEnv()){var ce=(s.withCredentials||u(fe))&&s.xsrfCookieName?t.read(s.xsrfCookieName):void 0;ce&&(A[s.xsrfHeaderName]=ce)}"setRequestHeader"in f&&e.forEach(A,function(S,R){typeof g>"u"&&R.toLowerCase()==="content-type"?delete A[R]:f.setRequestHeader(R,S)}),e.isUndefined(s.withCredentials)||(f.withCredentials=!!s.withCredentials),N&&N!=="json"&&(f.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&f.addEventListener("progress",s.onDownloadProgress),typeof s.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",s.onUploadProgress),(s.cancelToken||s.signal)&&(C=function(y){!f||(q(!y||y&&y.type?new d("canceled"):y),f.abort(),f=null)},s.cancelToken&&s.cancelToken.subscribe(C),s.signal&&(s.signal.aborted?C():s.signal.addEventListener("abort",C))),g||(g=null),f.send(g)})},X}var h=p,Oe=Er,gr=He,Ar=Me,Nr={"Content-Type":"application/x-www-form-urlencoded"};function xe(e,r){!h.isUndefined(e)&&h.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function Pr(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Se()),e}function Tr(e,r,t){if(h.isString(e))try{return(r||JSON.parse)(e),h.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(e)}var B={transitional:Ar,adapter:Pr(),transformRequest:[function(r,t){return Oe(t,"Accept"),Oe(t,"Content-Type"),h.isFormData(r)||h.isArrayBuffer(r)||h.isBuffer(r)||h.isStream(r)||h.isFile(r)||h.isBlob(r)?r:h.isArrayBufferView(r)?r.buffer:h.isURLSearchParams(r)?(xe(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString()):h.isObject(r)||t&&t["Content-Type"]==="application/json"?(xe(t,"application/json"),Tr(r)):r}],transformResponse:[function(r){var t=this.transitional||B.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&h.isString(r)&&r.length)try{return JSON.parse(r)}catch(u){if(i)throw u.name==="SyntaxError"?gr(u,this,"E_JSON_PARSE"):u}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};h.forEach(["delete","get","head"],function(r){B.headers[r]={}});h.forEach(["post","put","patch"],function(r){B.headers[r]=h.merge(Nr)});var se=B,Ur=p,jr=se,Lr=function(r,t,a){var n=this||jr;return Ur.forEach(a,function(u){r=u.call(n,r,t)}),r},W,qe;function ze(){return qe||(qe=1,W=function(r){return!!(r&&r.__CANCEL__)}),W}var ge=p,K=Lr,Br=ze(),Dr=se,_r=L();function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _r("canceled")}var $r=function(r){G(r),r.headers=r.headers||{},r.data=K.call(r,r.data,r.headers,r.transformRequest),r.headers=ge.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),ge.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||Dr.adapter;return t(r).then(function(n){return G(r),n.data=K.call(r,n.data,n.headers,r.transformResponse),n},function(n){return Br(n)||(G(r),n&&n.response&&(n.response.data=K.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},v=p,Ve=function(r,t){t=t||{};var a={};function n(c,s){return v.isPlainObject(c)&&v.isPlainObject(s)?v.merge(c,s):v.isPlainObject(s)?v.merge({},s):v.isArray(s)?s.slice():s}function i(c){if(v.isUndefined(t[c])){if(!v.isUndefined(r[c]))return n(void 0,r[c])}else return n(r[c],t[c])}function u(c){if(!v.isUndefined(t[c]))return n(void 0,t[c])}function o(c){if(v.isUndefined(t[c])){if(!v.isUndefined(r[c]))return n(void 0,r[c])}else return n(void 0,t[c])}function l(c){if(c in t)return n(r[c],t[c]);if(c in r)return n(void 0,r[c])}var d={url:u,method:u,data:u,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return v.forEach(Object.keys(r).concat(Object.keys(t)),function(s){var E=d[s]||i,m=E(s);v.isUndefined(m)&&E!==l||(a[s]=m)}),a},Y,Ae;function Xe(){return Ae||(Ae=1,Y={version:"0.26.1"}),Y}var Ir=Xe().version,oe={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){oe[e]=function(a){return typeof a===e||"a"+(r<1?"n ":" ")+e}});var Ne={};oe.transitional=function(r,t,a){function n(i,u){return"[Axios v"+Ir+"] Transitional option '"+i+"'"+u+(a?". "+a:"")}return function(i,u,o){if(r===!1)throw new Error(n(u," has been removed"+(t?" in "+t:"")));return t&&!Ne[u]&&(Ne[u]=!0,console.warn(n(u," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(i,u,o):!0}};function kr(e,r,t){if(typeof e!="object")throw new TypeError("options must be an object");for(var a=Object.keys(e),n=a.length;n-- >0;){var i=a[n],u=r[i];if(u){var o=e[i],l=o===void 0||u(o,i,e);if(l!==!0)throw new TypeError("option "+i+" must be "+l);continue}if(t!==!0)throw Error("Unknown option "+i)}}var Fr={assertOptions:kr,validators:oe},We=p,Hr=Fe,Pe=yr,Te=$r,D=Ve,Ke=Fr,x=Ke.validators;function P(e){this.defaults=e,this.interceptors={request:new Pe,response:new Pe}}P.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=D(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&Ke.assertOptions(a,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(i=i&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});var o;if(!i){var l=[Te,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(u),o=Promise.resolve(t);l.length;)o=o.then(l.shift(),l.shift());return o}for(var d=t;n.length;){var c=n.shift(),s=n.shift();try{d=c(d)}catch(E){s(E);break}}try{o=Te(d)}catch(E){return Promise.reject(E)}for(;u.length;)o=o.then(u.shift(),u.shift());return o};P.prototype.getUri=function(r){return r=D(this.defaults,r),Hr(r.url,r.params,r.paramsSerializer).replace(/^\?/,"")};We.forEach(["delete","get","head","options"],function(r){P.prototype[r]=function(t,a){return this.request(D(a||{},{method:r,url:t,data:(a||{}).data}))}});We.forEach(["post","put","patch"],function(r){P.prototype[r]=function(t,a,n){return this.request(D(n||{},{method:r,url:t,data:a}))}});var Mr=P,Q,Ue;function Jr(){if(Ue)return Q;Ue=1;var e=L();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(u){a=u});var n=this;this.promise.then(function(i){if(!!n._listeners){var u,o=n._listeners.length;for(u=0;u<o;u++)n._listeners[u](i);n._listeners=null}}),this.promise.then=function(i){var u,o=new Promise(function(l){n.subscribe(l),u=l}).then(i);return o.cancel=function(){n.unsubscribe(u)},o},t(function(u){n.reason||(n.reason=new e(u),a(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]},r.prototype.unsubscribe=function(a){if(!!this._listeners){var n=this._listeners.indexOf(a);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var a,n=new r(function(u){a=u});return{token:n,cancel:a}},Q=r,Q}var Z,je;function zr(){return je||(je=1,Z=function(r){return function(a){return r.apply(null,a)}}),Z}var ee,Le;function Vr(){if(Le)return ee;Le=1;var e=p;return ee=function(t){return e.isObject(t)&&t.isAxiosError===!0},ee}var Be=p,Xr=_e,U=Mr,Wr=Ve,Kr=se;function Ge(e){var r=new U(e),t=Xr(U.prototype.request,r);return Be.extend(t,U.prototype,r),Be.extend(t,r),t.create=function(n){return Ge(Wr(e,n))},t}var b=Ge(Kr);b.Axios=U;b.Cancel=L();b.CancelToken=Jr();b.isCancel=ze();b.VERSION=Xe().version;b.all=function(r){return Promise.all(r)};b.spread=zr();b.isAxiosError=Vr();ne.exports=b;ne.exports.default=b;(function(e){e.exports=ne.exports})(De);const Qr=er(De.exports);export{Qr as a,Gr as c,Yr as g};
