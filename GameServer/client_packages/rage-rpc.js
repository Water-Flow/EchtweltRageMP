!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports=r():e.rpc=r()}("undefined"!=typeof self?self:this,function(){return function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=1)}([function(e,r,n){"use strict";function t(){const e=46656*Math.random()|0,r=46656*Math.random()|0;return("000"+e.toString(36)).slice(-3)+("000"+r.toString(36)).slice(-3)}function o(){return mp.joaat?"server":mp.game&&mp.game.joaat?"client":mp.trigger?"cef":void 0}function c(e){return JSON.stringify(e)}function s(e){return JSON.parse(e)}function i(e){try{e.url}catch(e){return!1}return!0}n.d(r,"e",function(){return t}),n.d(r,"a",function(){return o}),n.d(r,"d",function(){return c}),n.d(r,"c",function(){return s}),n.d(r,"b",function(){return i})},function(e,r,n){"use strict";n.r(r),function(e){n.d(r,"register",function(){return d}),n.d(r,"unregister",function(){return m}),n.d(r,"call",function(){return g}),n.d(r,"callServer",function(){return v}),n.d(r,"callClient",function(){return w}),n.d(r,"callBrowsers",function(){return y}),n.d(r,"callBrowser",function(){return P});var t=n(0);const o=t.a();if(!o)throw"Unknown RAGE environment";const c="PROCEDURE_NOT_FOUND",s="__rpc:id",i="__rpc:process",a="__rpc:browserRegister",l="__rpc:browserUnregister",u="cef"===o?window:e;if(!u[i])if(u.__rpcListeners={},u.__rpcPending={},u[i]=((e,r)=>{"server"!==o&&(r=e);const n=t.c(r);if(n.req){const r={id:n.id,environment:n.fenv||n.env};"server"===o&&(r.player=e);const c=p(n.name,n.args,r),s={ret:1,id:n.id,env:o};let a;switch(o){case"server":a=(e=>r.player.call(i,[t.d(e)]));break;case"client":if("server"===n.env)a=(e=>mp.events.callRemote(i,t.d(e)));else if("cef"===n.env){const e=n.b&&u.__rpcBrowsers[n.b];a=(r=>e&&t.b(e)&&f(e,r,!0))}break;case"cef":a=(e=>mp.trigger(i,t.d(e)))}a&&c.then(e=>a({...s,res:e})).catch(e=>a({...s,err:e}))}else if(n.ret){const r=u.__rpcPending[n.id];if("server"===o&&r.player!==e)return;r&&(n.err?r.reject(n.err):r.resolve(n.res),delete u.__rpcPending[n.id])}}),"cef"!==o){if(mp.events.add(i,u[i]),"client"===o){d("__rpc:callServer",([e,r],n)=>_(e,r,{fenv:n.environment})),d("__rpc:callBrowsers",([e,r],n)=>b(null,e,r,{fenv:n.environment})),u.__rpcBrowsers={};const e=e=>{const r=t.e();Object.keys(u.__rpcBrowsers).forEach(r=>{const n=u.__rpcBrowsers[r];n&&t.b(n)&&n!==e||delete u.__rpcBrowsers[r]}),u.__rpcBrowsers[r]=e,e.execute(`if(typeof window['${s}'] === 'undefined'){ window['${s}'] = Promise.resolve('${r}'); }else{ window['${s}:resolve']('${r}'); }`)};mp.browsers.forEach(e),mp.events.add("browserCreated",e),u.__rpcBrowserProcedures={},mp.events.add(a,e=>{const[r,n]=JSON.parse(e);u.__rpcBrowserProcedures[n]=r}),mp.events.add(l,e=>{const[r,n]=JSON.parse(e);u.__rpcBrowserProcedures[n]===r&&delete u.__rpcBrowserProcedures[n]})}}else void 0===u[s]&&(u[s]=new Promise(e=>{u[s+":resolve"]=e}));function f(e,r,n){const o=t.d(r);e.execute(`var process = window["${i}"]; if(process){ process('${o}'); }else{ ${n?"":`mp.trigger("${i}", '{"ret":1,"id":"${r.id}","err":"${c}","env":"cef"}');`} }`)}async function p(e,r,n){const t=u.__rpcListeners[e];if(!t)throw c;return t(r,n)}function d(e,r){if(2!==arguments.length)throw'register expects 2 arguments: "name" and "cb"';"cef"===o&&u[s].then(r=>mp.trigger(a,JSON.stringify([r,e]))),u.__rpcListeners[e]=r}function m(e){if(1!==arguments.length)throw'unregister expects 1 argument: "name"';"cef"===o&&u[s].then(r=>mp.trigger(l,JSON.stringify([r,e]))),u.__rpcListeners[e]=void 0}function g(e,r){return 1!==arguments.length&&2!==arguments.length?Promise.reject('call expects 1 or 2 arguments: "name" and optional "args"'):p(e,r,{environment:o})}function _(e,r,n={}){switch(o){case"server":return g(e,r);case"client":{const c=t.e();return new Promise((s,a)=>{u.__rpcPending[c]={resolve:s,reject:a};const l={req:1,id:c,name:e,env:o,args:r,...n};mp.events.callRemote(i,t.d(l))})}case"cef":return w("__rpc:callServer",[e,r])}}function v(e,r){return 1!==arguments.length&&2!==arguments.length?Promise.reject('callServer expects 1 or 2 arguments: "name" and optional "args"'):_(e,r,{})}function w(e,r,n){switch(o){case"client":return n=r,r=e,1!==arguments.length&&2!==arguments.length||"string"!=typeof r?Promise.reject('callClient from the client expects 1 or 2 arguments: "name" and optional "args"'):g(r,n);case"server":{if(2!==arguments.length&&3!==arguments.length||"object"!=typeof e)return Promise.reject('callClient from the server expects 2 or 3 arguments: "player", "name", and optional "args"');const c=t.e();return new Promise((s,a)=>{u.__rpcPending[c]={resolve:s,reject:a,player:e};const l={req:1,id:c,name:r,env:o,args:n};e.call(i,[t.d(l)])})}case"cef":{if(n=r,r=e,1!==arguments.length&&2!==arguments.length||"string"!=typeof r)return Promise.reject('callClient from the browser expects 1 or 2 arguments: "name" and optional "args"');const c=t.e();return u[s].then(e=>new Promise((s,a)=>{u.__rpcPending[c]={resolve:s,reject:a};const l={b:e,req:1,id:c,name:r,env:o,args:n};mp.trigger(i,t.d(l))}))}}}function h(e,r,n,t,c={}){return new Promise((s,i)=>{u.__rpcPending[e]={resolve:s,reject:i},f(r,{req:1,id:e,name:n,env:o,args:t,...c},!1)})}async function b(e,r,n,s={}){switch(o){case"client":const i=t.e(),a=u.__rpcBrowserProcedures[r];if(!a)throw c;const l=u.__rpcBrowsers[a];if(!l||!t.b(l))throw c;return h(i,l,r,n,s);case"server":return w(e,"__rpc:callBrowsers",[r,n]);case"cef":return w("__rpc:callBrowsers",[r,n])}}function y(e,r,n){switch(o){case"client":case"cef":return 1!==arguments.length&&2!==arguments.length?Promise.reject('callBrowsers from the client or browser expects 1 or 2 arguments: "name" and optional "args"'):b(null,e,r,{});case"server":return 2!==arguments.length&&3!==arguments.length?Promise.reject('callBrowsers from the server expects 2 or 3 arguments: "player", "name", and optional "args"'):b(e,r,n,{})}}function P(e,r,n){if("client"!==o)return Promise.reject("callBrowser can only be used in the client environment");if(2!==arguments.length&&3!==arguments.length)return Promise.reject('callBrowser expects 2 or 3 arguments: "browser", "name", and optional "args"');return h(t.e(),e,r,n,{})}}.call(this,n(2))},function(e,r){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])});