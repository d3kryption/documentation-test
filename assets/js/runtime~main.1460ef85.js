(()=>{"use strict";var e,t,r,a,o,n={},d={};function i(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,i.c=d,e=[],i.O=(t,r,a,o)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var d=!0,c=0;c<r.length;c++)(!1&o||n>=o)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(d=!1,o<n&&(n=o));if(d){e.splice(u--,1);var f=a();void 0!==f&&(t=f)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var d=2&a&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,i.d(o,n),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({48:"a94703ab",61:"1f391b9e",98:"a7bd4aaa",116:"d27d2a72",134:"393be207",137:"b8e33d92",235:"a7456010",361:"c377a04b",401:"17896441",403:"f21c27d9",410:"7d140528",518:"e9823cc5",545:"0129d5ef",627:"ccbadcf8",647:"5e95c892",742:"aba21aa0",896:"85026e94",935:"1624197d"}[e]||e)+"."+{48:"92ca775a",61:"0a5a0eae",98:"498c6e6e",116:"130435c9",134:"574ef761",137:"3f1ba26a",235:"4d4d87ca",237:"9a09f49b",361:"229368ab",401:"eaac11b9",403:"b3eec170",408:"3aa4fd3e",410:"f061a4d5",518:"13b08c55",545:"c48f9bd1",627:"9e3a4d10",647:"8f177f42",742:"f99ce011",896:"95a9c31e",935:"6f856728"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="narrative-docs:",i.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var d,c;if(void 0!==r)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var l=f[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){d=l;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",o+r),d.src=e),a[e]=[t];var s=(t,r)=>{d.onerror=d.onload=null,clearTimeout(b);var o=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),c&&document.head.appendChild(d)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/documentation-test/",i.gca=function(e){return e={17896441:"401",a94703ab:"48","1f391b9e":"61",a7bd4aaa:"98",d27d2a72:"116","393be207":"134",b8e33d92:"137",a7456010:"235",c377a04b:"361",f21c27d9:"403","7d140528":"410",e9823cc5:"518","0129d5ef":"545",ccbadcf8:"627","5e95c892":"647",aba21aa0:"742","85026e94":"896","1624197d":"935"}[e]||e,i.p+i.u(e)},(()=>{var e={354:0,869:0};i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=i.p+i.u(t),d=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,a[1](d)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],d=r[1],c=r[2],f=0;if(n.some((t=>0!==e[t]))){for(a in d)i.o(d,a)&&(i.m[a]=d[a]);if(c)var u=c(i)}for(t&&t(r);f<n.length;f++)o=n[f],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},r=self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();