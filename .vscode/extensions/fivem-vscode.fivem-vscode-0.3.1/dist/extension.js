(()=>{"use strict";var e={854:(e,t,r)=>{r.r(t),r.d(t,{FetchError:()=>d,Headers:()=>E,Request:()=>F,Response:()=>H,default:()=>K});const n=require("stream"),o=require("http"),s=require("url"),i=require("https"),a=require("zlib"),c=n.Readable,u=Symbol("buffer"),l=Symbol("type");class p{constructor(){this[l]="";const e=arguments[0],t=arguments[1],r=[];let n=0;if(e){const t=e,o=Number(t.length);for(let e=0;e<o;e++){const o=t[e];let s;s=o instanceof Buffer?o:ArrayBuffer.isView(o)?Buffer.from(o.buffer,o.byteOffset,o.byteLength):o instanceof ArrayBuffer?Buffer.from(o):o instanceof p?o[u]:Buffer.from("string"==typeof o?o:String(o)),n+=s.length,r.push(s)}}this[u]=Buffer.concat(r);let o=t&&void 0!==t.type&&String(t.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[l]=o)}get size(){return this[u].length}get type(){return this[l]}text(){return Promise.resolve(this[u].toString())}arrayBuffer(){const e=this[u],t=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);return Promise.resolve(t)}stream(){const e=new c;return e._read=function(){},e.push(this[u]),e.push(null),e}toString(){return"[object Blob]"}slice(){const e=this.size,t=arguments[0],r=arguments[1];let n,o;n=void 0===t?0:t<0?Math.max(e+t,0):Math.min(t,e),o=void 0===r?e:r<0?Math.max(e+r,0):Math.min(r,e);const s=Math.max(o-n,0),i=this[u].slice(n,n+s),a=new p([],{type:arguments[2]});return a[u]=i,a}}function d(e,t,r){Error.call(this,e),this.message=e,this.type=t,r&&(this.code=this.errno=r.code),Error.captureStackTrace(this,this.constructor)}let f;Object.defineProperties(p.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}}),Object.defineProperty(p.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0}),d.prototype=Object.create(Error.prototype),d.prototype.constructor=d,d.prototype.name="FetchError";try{f=require("encoding").convert}catch(e){}const h=Symbol("Body internals"),m=n.PassThrough;function y(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.size;let s=void 0===o?0:o;var i=r.timeout;let a=void 0===i?0:i;null==e?e=null:g(e)?e=Buffer.from(e.toString()):v(e)||Buffer.isBuffer(e)||("[object ArrayBuffer]"===Object.prototype.toString.call(e)?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof n||(e=Buffer.from(String(e)))),this[h]={body:e,disturbed:!1,error:null},this.size=s,this.timeout=a,e instanceof n&&e.on("error",(function(e){const r="AbortError"===e.name?e:new d(`Invalid response body while trying to fetch ${t.url}: ${e.message}`,"system",e);t[h].error=r}))}function b(){var e=this;if(this[h].disturbed)return y.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[h].disturbed=!0,this[h].error)return y.Promise.reject(this[h].error);let t=this.body;if(null===t)return y.Promise.resolve(Buffer.alloc(0));if(v(t)&&(t=t.stream()),Buffer.isBuffer(t))return y.Promise.resolve(t);if(!(t instanceof n))return y.Promise.resolve(Buffer.alloc(0));let r=[],o=0,s=!1;return new y.Promise((function(n,i){let a;e.timeout&&(a=setTimeout((function(){s=!0,i(new d(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))}),e.timeout)),t.on("error",(function(t){"AbortError"===t.name?(s=!0,i(t)):i(new d(`Invalid response body while trying to fetch ${e.url}: ${t.message}`,"system",t))})),t.on("data",(function(t){if(!s&&null!==t){if(e.size&&o+t.length>e.size)return s=!0,void i(new d(`content size at ${e.url} over limit: ${e.size}`,"max-size"));o+=t.length,r.push(t)}})),t.on("end",(function(){if(!s){clearTimeout(a);try{n(Buffer.concat(r,o))}catch(t){i(new d(`Could not create Buffer from response body for ${e.url}: ${t.message}`,"system",t))}}}))}))}function g(e){return"object"==typeof e&&"function"==typeof e.append&&"function"==typeof e.delete&&"function"==typeof e.get&&"function"==typeof e.getAll&&"function"==typeof e.has&&"function"==typeof e.set&&("URLSearchParams"===e.constructor.name||"[object URLSearchParams]"===Object.prototype.toString.call(e)||"function"==typeof e.sort)}function v(e){return"object"==typeof e&&"function"==typeof e.arrayBuffer&&"string"==typeof e.type&&"function"==typeof e.stream&&"function"==typeof e.constructor&&"string"==typeof e.constructor.name&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function w(e){let t,r,o=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return o instanceof n&&"function"!=typeof o.getBoundary&&(t=new m,r=new m,o.pipe(t),o.pipe(r),e[h].body=t,o=r),o}function T(e){return null===e?null:"string"==typeof e?"text/plain;charset=UTF-8":g(e)?"application/x-www-form-urlencoded;charset=UTF-8":v(e)?e.type||null:Buffer.isBuffer(e)||"[object ArrayBuffer]"===Object.prototype.toString.call(e)||ArrayBuffer.isView(e)?null:"function"==typeof e.getBoundary?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof n?null:"text/plain;charset=UTF-8"}function P(e){const t=e.body;return null===t?0:v(t)?t.size:Buffer.isBuffer(t)?t.length:t&&"function"==typeof t.getLengthSync&&(t._lengthRetrievers&&0==t._lengthRetrievers.length||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}y.prototype={get body(){return this[h].body},get bodyUsed(){return this[h].disturbed},arrayBuffer(){return b.call(this).then((function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}))},blob(){let e=this.headers&&this.headers.get("content-type")||"";return b.call(this).then((function(t){return Object.assign(new p([],{type:e.toLowerCase()}),{[u]:t})}))},json(){var e=this;return b.call(this).then((function(t){try{return JSON.parse(t.toString())}catch(t){return y.Promise.reject(new d(`invalid json response body at ${e.url} reason: ${t.message}`,"invalid-json"))}}))},text(){return b.call(this).then((function(e){return e.toString()}))},buffer(){return b.call(this)},textConverted(){var e=this;return b.call(this).then((function(t){return function(e,t){if("function"!=typeof f)throw new Error("The package `encoding` must be installed to use the textConverted() function");const r=t.get("content-type");let n,o,s="utf-8";return r&&(n=/charset=([^;]*)/i.exec(r)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(s=n.pop(),"gb2312"!==s&&"gbk"!==s||(s="gb18030")),f(e,"UTF-8",s).toString()}(t,e.headers)}))}},Object.defineProperties(y.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}}),y.mixIn=function(e){for(const t of Object.getOwnPropertyNames(y.prototype))if(!(t in e)){const r=Object.getOwnPropertyDescriptor(y.prototype,t);Object.defineProperty(e,t,r)}},y.Promise=global.Promise;const S=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,x=/[^\t\x20-\x7e\x80-\xff]/;function j(e){if(e=`${e}`,S.test(e)||""===e)throw new TypeError(`${e} is not a legal HTTP header name`)}function O(e){if(e=`${e}`,x.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function A(e,t){t=t.toLowerCase();for(const r in e)if(r.toLowerCase()===t)return r}const $=Symbol("map");class E{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(this[$]=Object.create(null),e instanceof E){const t=e.raw(),r=Object.keys(t);for(const e of r)for(const r of t[e])this.append(e,r)}else if(null==e);else{if("object"!=typeof e)throw new TypeError("Provided initializer must be an object");{const t=e[Symbol.iterator];if(null!=t){if("function"!=typeof t)throw new TypeError("Header pairs must be iterable");const r=[];for(const t of e){if("object"!=typeof t||"function"!=typeof t[Symbol.iterator])throw new TypeError("Each header pair must be iterable");r.push(Array.from(t))}for(const e of r){if(2!==e.length)throw new TypeError("Each header pair must be a name/value tuple");this.append(e[0],e[1])}}else for(const t of Object.keys(e)){const r=e[t];this.append(t,r)}}}}get(e){j(e=`${e}`);const t=A(this[$],e);return void 0===t?null:this[$][t].join(", ")}forEach(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=C(this),n=0;for(;n<r.length;){var o=r[n];const s=o[0],i=o[1];e.call(t,i,s,this),r=C(this),n++}}set(e,t){t=`${t}`,j(e=`${e}`),O(t);const r=A(this[$],e);this[$][void 0!==r?r:e]=[t]}append(e,t){t=`${t}`,j(e=`${e}`),O(t);const r=A(this[$],e);void 0!==r?this[$][r].push(t):this[$][e]=[t]}has(e){return j(e=`${e}`),void 0!==A(this[$],e)}delete(e){j(e=`${e}`);const t=A(this[$],e);void 0!==t&&delete this[$][t]}raw(){return this[$]}keys(){return B(this,"key")}values(){return B(this,"value")}[Symbol.iterator](){return B(this,"key+value")}}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key+value";const r=Object.keys(e[$]).sort();return r.map("key"===t?function(e){return e.toLowerCase()}:"value"===t?function(t){return e[$][t].join(", ")}:function(t){return[t.toLowerCase(),e[$][t].join(", ")]})}E.prototype.entries=E.prototype[Symbol.iterator],Object.defineProperty(E.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(E.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});const k=Symbol("internal");function B(e,t){const r=Object.create(R);return r[k]={target:e,kind:t,index:0},r}const R=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==R)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[k];const t=e.target,r=e.kind,n=e.index,o=C(t,r);return n>=o.length?{value:void 0,done:!0}:(this[k].index=n+1,{value:o[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));function N(e){const t=Object.assign({__proto__:null},e[$]),r=A(e[$],"Host");return void 0!==r&&(t[r]=t[r][0]),t}Object.defineProperty(R,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});const L=Symbol("Response internals"),_=o.STATUS_CODES;class H{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y.call(this,e,t);const r=t.status||200,n=new E(t.headers);if(null!=e&&!n.has("Content-Type")){const t=T(e);t&&n.append("Content-Type",t)}this[L]={url:t.url,status:r,statusText:t.statusText||_[r],headers:n,counter:t.counter}}get url(){return this[L].url||""}get status(){return this[L].status}get ok(){return this[L].status>=200&&this[L].status<300}get redirected(){return this[L].counter>0}get statusText(){return this[L].statusText}get headers(){return this[L].headers}clone(){return new H(w(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}}y.mixIn(H.prototype),Object.defineProperties(H.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}}),Object.defineProperty(H.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});const z=Symbol("Request internals"),I=s.parse,q=s.format,U="destroy"in n.Readable.prototype;function M(e){return"object"==typeof e&&"object"==typeof e[z]}class F{constructor(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};M(e)?t=I(e.url):(t=e&&e.href?I(e.href):I(`${e}`),e={});let n=r.method||e.method||"GET";if(n=n.toUpperCase(),(null!=r.body||M(e)&&null!==e.body)&&("GET"===n||"HEAD"===n))throw new TypeError("Request with GET/HEAD method cannot have body");let o=null!=r.body?r.body:M(e)&&null!==e.body?w(e):null;y.call(this,o,{timeout:r.timeout||e.timeout||0,size:r.size||e.size||0});const s=new E(r.headers||e.headers||{});if(null!=o&&!s.has("Content-Type")){const e=T(o);e&&s.append("Content-Type",e)}let i=M(e)?e.signal:null;if("signal"in r&&(i=r.signal),null!=i&&!function(e){const t=e&&"object"==typeof e&&Object.getPrototypeOf(e);return!(!t||"AbortSignal"!==t.constructor.name)}(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[z]={method:n,redirect:r.redirect||e.redirect||"follow",headers:s,parsedURL:t,signal:i},this.follow=void 0!==r.follow?r.follow:void 0!==e.follow?e.follow:20,this.compress=void 0!==r.compress?r.compress:void 0===e.compress||e.compress,this.counter=r.counter||e.counter||0,this.agent=r.agent||e.agent}get method(){return this[z].method}get url(){return q(this[z].parsedURL)}get headers(){return this[z].headers}get redirect(){return this[z].redirect}get signal(){return this[z].signal}clone(){return new F(this)}}function D(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}y.mixIn(F.prototype),Object.defineProperty(F.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(F.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}}),D.prototype=Object.create(Error.prototype),D.prototype.constructor=D,D.prototype.name="AbortError";const G=n.PassThrough,W=s.resolve;function V(e,t){if(!V.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return y.Promise=V.Promise,new V.Promise((function(r,s){const c=new F(e,t),u=function(e){const t=e[z].parsedURL,r=new E(e[z].headers);if(r.has("Accept")||r.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof n.Readable&&!U)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let o=null;if(null==e.body&&/^(POST|PUT)$/i.test(e.method)&&(o="0"),null!=e.body){const t=P(e);"number"==typeof t&&(o=String(t))}o&&r.set("Content-Length",o),r.has("User-Agent")||r.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!r.has("Accept-Encoding")&&r.set("Accept-Encoding","gzip,deflate");let s=e.agent;return"function"==typeof s&&(s=s(t)),r.has("Connection")||s||r.set("Connection","close"),Object.assign({},t,{method:e.method,headers:N(r),agent:s})}(c),l=("https:"===u.protocol?i:o).request,p=c.signal;let f=null;const h=function(){let e=new D("The user aborted a request.");s(e),c.body&&c.body instanceof n.Readable&&c.body.destroy(e),f&&f.body&&f.body.emit("error",e)};if(p&&p.aborted)return void h();const m=function(){h(),g()},y=l(u);let b;function g(){y.abort(),p&&p.removeEventListener("abort",m),clearTimeout(b)}p&&p.addEventListener("abort",m),c.timeout&&y.once("socket",(function(e){b=setTimeout((function(){s(new d(`network timeout at: ${c.url}`,"request-timeout")),g()}),c.timeout)})),y.on("error",(function(e){s(new d(`request to ${c.url} failed, reason: ${e.message}`,"system",e)),g()})),y.on("response",(function(e){clearTimeout(b);const t=function(e){const t=new E;for(const r of Object.keys(e))if(!S.test(r))if(Array.isArray(e[r]))for(const n of e[r])x.test(n)||(void 0===t[$][r]?t[$][r]=[n]:t[$][r].push(n));else x.test(e[r])||(t[$][r]=[e[r]]);return t}(e.headers);if(V.isRedirect(e.statusCode)){const n=t.get("Location"),o=null===n?null:W(c.url,n);switch(c.redirect){case"error":return s(new d(`uri requested responds with a redirect, redirect mode is set to error: ${c.url}`,"no-redirect")),void g();case"manual":if(null!==o)try{t.set("Location",o)}catch(e){s(e)}break;case"follow":if(null===o)break;if(c.counter>=c.follow)return s(new d(`maximum redirect reached at: ${c.url}`,"max-redirect")),void g();const n={headers:new E(c.headers),follow:c.follow,counter:c.counter+1,agent:c.agent,compress:c.compress,method:c.method,body:c.body,signal:c.signal,timeout:c.timeout,size:c.size};return 303!==e.statusCode&&c.body&&null===P(c)?(s(new d("Cannot follow redirect with body being a readable stream","unsupported-redirect")),void g()):(303!==e.statusCode&&(301!==e.statusCode&&302!==e.statusCode||"POST"!==c.method)||(n.method="GET",n.body=void 0,n.headers.delete("content-length")),r(V(new F(o,n))),void g())}}e.once("end",(function(){p&&p.removeEventListener("abort",m)}));let n=e.pipe(new G);const o={url:c.url,status:e.statusCode,statusText:e.statusMessage,headers:t,size:c.size,timeout:c.timeout,counter:c.counter},i=t.get("Content-Encoding");if(!c.compress||"HEAD"===c.method||null===i||204===e.statusCode||304===e.statusCode)return f=new H(n,o),void r(f);const u={flush:a.Z_SYNC_FLUSH,finishFlush:a.Z_SYNC_FLUSH};if("gzip"==i||"x-gzip"==i)return n=n.pipe(a.createGunzip(u)),f=new H(n,o),void r(f);if("deflate"!=i&&"x-deflate"!=i){if("br"==i&&"function"==typeof a.createBrotliDecompress)return n=n.pipe(a.createBrotliDecompress()),f=new H(n,o),void r(f);f=new H(n,o),r(f)}else e.pipe(new G).once("data",(function(e){n=8==(15&e[0])?n.pipe(a.createInflate()):n.pipe(a.createInflateRaw()),f=new H(n,o),r(f)}))})),function(e,t){const r=t.body;null===r?e.end():v(r)?r.stream().pipe(e):Buffer.isBuffer(r)?(e.write(r),e.end()):r.pipe(e)}(y,c)}))}V.isRedirect=function(e){return 301===e||302===e||303===e||307===e||308===e},V.Promise=global.Promise;const K=V},666:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NativeService=void 0;const o=r(854),s=r(370),i=["https://runtime.fivem.net/doc/natives.json","https://runtime.fivem.net/doc/natives_cfx.json"];t.NativeService=class{static getAllNatives(){return n(this,void 0,void 0,(function*(){const e=s.specificFunctions,t=yield Promise.all(i.map((e=>this.fetchNatives(e))));for(const r of t)e.push(...r);return e}))}static fetchNatives(e){return n(this,void 0,void 0,(function*(){const t=yield o.default(e),r=yield t.json(),n=[];for(const e of Object.values(r))for(const t of Object.values(e))t.name&&(t.name=this.parseNativeName(t.name),t.description=t.description&&this.parseNativeDescription(t.description),t.params=this.parseNativeParams(t.params),t.results=t.results&&this.parseType(t.results),n.push(t));return n}))}static parseNativeName(e){return e.split("_").filter((e=>e.length>0)).map((e=>e.substr(0,1)+e.substr(1).toLowerCase())).join("")}static parseNativeDescription(e){const t=e.startsWith("```")?3:0,r=e.endsWith("```")?e.length-3:e.length;return e.substr(t,r-t)}static parseNativeParams(e){return e.map((e=>Object.assign(Object.assign({},e),{type:this.parseType(e.type)})))}static parseType(e){const t=e.replace("*","");switch(t){case"int":case"float":case"long":return"number";case"BOOL":return"boolean";case"char":return"string";case"Vector3":return"vector3";case"Any":return"any";case"void":return"";default:return t}}}},370:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.specificFunctions=void 0,t.specificFunctions=[{name:"CreateThread",description:"Creates a new scope for code execution, each thread is a coroutine which will be executed in a semi-consistent order.",results:"",params:[{name:"threadFunction",type:"function",description:"The thread handler function"}]},{name:"Wait",description:'This will "pause" the execution of the current thread for miliseconds amount of time',results:"",params:[{name:"msec",type:"number",description:"The amount of milliseconds to pause the current thread"}]},{name:"Trace",description:'Outputs the passed message to any trace listeners, including the console output and the log file. Does not add a newline by itself, therefore suffix a message with `"\\n"`',results:"",params:[{name:"message",type:"string"}]},{name:"quat",description:"Creates a new quaternion",results:"",params:[{name:"w",type:"number"},{name:"x",type:"number"},{name:"y",type:"number"},{name:"z",type:"number"}]},{name:"Await",results:"",params:[{name:"promise",type:"any"}]},{name:"SetTimeout",description:"This will execute the specified function after the specified amount of milliseconds",results:"",params:[{name:"msec",type:"number",description:"The amount of milliseconds to pause the current thread"},{name:"callback",type:"function",description:"The function to run after the timer completes"}]},{name:"AddEventHandler",description:"Use this to listen for events, see the [events](https://docs.fivem.net/docs/scripting-manual/working-with-events/listening-for-events/) page for more info",results:"table",params:[{name:"eventName",type:"string",description:"The name of the event you want to listen to"},{name:"callback",type:"function",description:"The function to run when the event is called"}]},{name:"RemoveEventHandler",results:"",description:"Removes the provided event handler",params:[{name:"eventData",type:"table",description:"The return value of AddEventHandler"}]},{name:"RegisterNetEvent",results:"",description:"Marks the event safe for network use. Aka, allows you to trigger the eventName event on the client, from a server side script. Providing a callback would be the same as adding an event handler.",params:[{name:"eventName",type:"string",description:"A string representing the event name to register"},{name:"callback",type:"function",description:"The function to run when the event is called"}]},{name:"TriggerEvent",description:"Triggers the specified event with optional data",results:"",params:[{name:"eventName",type:"string",description:"A string representing the event name to trigger"},{name:"...",type:"any",description:"Any additional data that should be passed along"}]},{name:"TriggerClientEvent",description:"Triggers an event on the specified client(s), and passes on any additional arguments",results:"",params:[{name:"eventName",type:"string",description:"A string representing the event name to call on the client"},{name:"playerId",type:"number",description:"The ID of the player to call the event for. Specify -1 for all clients"},{name:"...",type:"any",description:"Any additional data that should be passed along"}]},{name:"GetPlayerIdentifiers",description:"Returns a table containing all of the player’s identifiers",results:"table",params:[{name:"player",type:"number",description:"The ID of the player to get the identifiers from."}]},{name:"GetPlayers",description:"Returns a table of all connected players (server ID’s)",results:"table",params:[]},{name:"PerformHttpRequest",results:"",description:"Performs a http request using the specified parameters and returns the http response in a callback.",params:[{name:"url",type:"string",description:"A string of the URL to request"},{name:"callback",type:"function",description:"The callback function to call after the request is finished"},{name:"method",type:"string",description:"The HTTP method to use"},{name:"data",type:"table",description:"A string of data to send with the request"},{name:"headers",type:"table",description:"A table of request headers"}]},{name:"TriggerServerEvent",description:"riggers the specified event on the server with optional data",results:"",params:[{name:"eventName",type:"string",description:"A string representing the event name to call on the server"},{name:"...",type:"any",description:"Any additional data that should be passed along"}]},{name:"GetFunctionReference",results:"string",params:[{name:"func",type:"function"}]},{name:"RegisterNUICallback",results:"",params:[{name:"type",type:"string"},{name:"cb",type:"function"}]},{name:"SendNUIMessage",description:"Use this to send data to the NUI",results:"",params:[{name:"message",type:"table",description:"data that will be sent and received in NUI"}]},{name:"vector2",results:"",description:"Creates a new vector",params:[{name:"x",type:"number",description:"A floating point number representing the `x` value of your vector"},{name:"y",type:"number",description:"A floating point number representing the `y` value of your vector"}]},{name:"vector3",results:"",description:"Creates a new vector",params:[{name:"x",type:"number",description:"A floating point number representing the `x` value of your vector"},{name:"y",type:"number",description:"A floating point number representing the `y` value of your vector"},{name:"z",type:"number",description:"A floating point number representing the `z` value of your vector"}]},{name:"vector4",results:"",description:"Creates a new vector",params:[{name:"x",type:"number",description:"A floating point number representing the `x` value of your vector"},{name:"y",type:"number",description:"A floating point number representing the `y` value of your vector"},{name:"z",type:"number",description:"A floating point number representing the `z` value of your vector"},{name:"w",type:"number",description:"A floating point number representing the `w` value of your vector"}]}]},112:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const o=r(549),s=r(154),i=r(205),a=r(297),c=r(666);t.activate=function(e){return n(this,void 0,void 0,(function*(){console.log("Extension fivem-vscode loading");const t=yield c.NativeService.getAllNatives();let r=o.languages.registerHoverProvider("lua",new i.HoverProvider(t));e.subscriptions.push(r),r=o.languages.registerSignatureHelpProvider("lua",new a.SignatureHelpProvider(t),"(",","),e.subscriptions.push(r),r=o.languages.registerCompletionItemProvider("lua",new s.CompletionItemProvider(t)),e.subscriptions.push(r),console.log("Extension fivem-vscode activated !")}))},t.deactivate=function(){}},154:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CompletionItemProvider=void 0;const n=r(549);t.CompletionItemProvider=class{constructor(e){this.natives=[],this.previousResult=[],this.previousText="";for(const t of e)this.addNative(t)}provideCompletionItems(e,t,r,o){const s=e.getWordRangeAtPosition(new n.Position(t.line,t.character-1));if(!s)return;const i=e.getText(s).toLowerCase(),a=(i.startsWith(this.previousText)?this.previousResult:this.natives).filter((e=>-1!=e.name.indexOf(i)));return this.previousText=i,this.previousResult=a,a.map((e=>e.completionItem))}addNative(e){const t=new n.CompletionItem(e.name,n.CompletionItemKind.Function);t.documentation=new n.MarkdownString;const r=e.params.map((e=>`${e.name}: ${e.type}`)).join(", ");t.documentation.appendCodeblock(`${e.name}(${r})${e.results&&`: ${e.results}`}`),e.description&&t.documentation.appendMarkdown(`  \n\n${e.description}`),this.natives.push({name:e.name.toLowerCase(),completionItem:t})}}},205:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HoverProvider=void 0;const n=r(549);t.HoverProvider=class{constructor(e){this.natives={};for(const t of e)this.addNative(t)}provideHover(e,t,r){const o=e.getWordRangeAtPosition(t,/[\w]+/);if(!o)return;const s=e.getText(o),i=this.natives[s];return!!i&&new n.Hover(i,o)}addNative(e){const t=[],r=e.params.map((e=>`${e.name}: ${e.type}`)).join(", "),o=(new n.MarkdownString).appendCodeblock(`${e.name}(${r})${e.results&&`: ${e.results}`}`);if(t.push(o),e.description){const r=(new n.MarkdownString).appendMarkdown(e.description);t.push(r)}this.natives[e.name]=t}}},297:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SignatureHelpProvider=void 0;const n=r(549);t.SignatureHelpProvider=class{constructor(e){this.natives={};for(const t of e)this.addNative(t)}provideSignatureHelp(e,t,r,o){const s=e.getText(new n.Range(new n.Position(t.line,0),t));let i=0,a=0,c=0,u=s.length;for(;u>-1&&(","==s.charAt(u)&&a==c?i++:")"==s.charAt(u)?c++:"("==s.charAt(u)&&a++,!("("==s.charAt(u)&&a>c));)u--;const l=e.getWordRangeAtPosition(new n.Position(t.line,u),/[\w\.]+/);if(!l)return;const p=e.getText(l),d=this.natives[p];if(!d)return;if(d.parameters.length>0&&i>=d.parameters.length){const e=d.parameters[d.parameters.length-1].label;e&&e.startsWith("...:")&&(i=d.parameters.length-1)}let f=new n.SignatureHelp;return f.activeParameter=i,f.activeSignature=0,f.signatures.push(d),f}addNative(e){const t=e.params.map((e=>`${e.name}: ${e.type}`)).join(", "),r=new n.SignatureInformation(`${e.name}(${t})${e.results&&`: ${e.results}`}`);if(e.description&&(r.documentation=(new n.MarkdownString).appendMarkdown(e.description)),e.params)for(const t of e.params){const e=new n.ParameterInformation(`${t.name}: ${t.type}`,new n.MarkdownString(t.description));r.parameters.push(e)}this.natives[e.name]=r}}},549:e=>{e.exports=require("vscode")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n=r(112);module.exports=n})();