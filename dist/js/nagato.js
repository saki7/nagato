var Nagato=function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=19)}([function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){"use strict";n.__esModule=!0;var o=e(25),r=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default=r.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},function(t,n,e){var o=e(6),r=e(1),i=e(28),c=e(30),u=function(t,n,e){var a,f,l,s=t&u.F,p=t&u.G,y=t&u.S,d=t&u.P,v=t&u.B,g=t&u.W,h=p?r:r[n]||(r[n]={}),b=h.prototype,x=p?o:y?o[n]:(o[n]||{}).prototype;p&&(e=n);for(a in e)(f=!s&&x&&void 0!==x[a])&&a in h||(l=f?x[a]:e[a],h[a]=p&&"function"!=typeof x[a]?e[a]:v&&f?i(l,o):g&&x[a]==l?function(t){var n=function(n,e,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,o)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((h.virtual||(h.virtual={}))[a]=l,t&u.R&&b&&!b[a]&&c(b,a,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){(function(n){t.exports=n.Nagato=e(52)}).call(n,e(0))},function(t,n,e){var o=e(31),r=e(32),i=e(34),c=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(o(t),n=i(n,!0),o(e),r)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var o=e(37),r=e(46);t.exports=Object.keys||function(t){return o(t,r)}},function(t,n,e){var o=e(13),r=e(14);t.exports=function(t){return o(r(t))}},function(t,n,e){var o=e(39);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:e)(t)}},function(t,n,e){var o=e(14);t.exports=function(t){return Object(o(t))}},function(t,n,e){"use strict";n.__esModule=!0;var o=e(49),r=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}()},function(t,n,e){(function(n){t.exports=n.Nagato=e(57)}).call(n,e(0))},function(t,n,e){(function(n){t.exports=n.Nagato=e(20)}).call(n,e(0))},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(21);e.n(o),e.o(o,"Logger")&&e.d(n,"Logger",function(){return o.Logger});var r=e(18);e.n(r),e.o(r,"Option")&&e.d(n,"Option",function(){return r.Option});var i=e(9);e.n(i),e.o(i,"Style")&&e.d(n,"Style",function(){return i.Style})},function(t,n,e){(function(n){t.exports=n.Nagato=e(22)}).call(n,e(0))},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(23);e.n(o),e.o(o,"Logger")&&e.d(n,"Logger",function(){return o.Logger})},function(t,n,e){(function(n){t.exports=n.Nagato=e(24)}).call(n,e(0))},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"Logger",function(){return p});var o=e(4),r=e.n(o),i=e(8),c=e.n(i),u=e(17),a=e.n(u),f=e(9),l=(e.n(f),e(18)),s=(e.n(l),e(58)),p=(e.n(s),function(){function t(n,e){if(c()(this,t),!n||!n.length)throw new Error("no context supplied for Logger initialization");if(this.orig_ctx=[].concat(n),this.ctx=[].concat(n),this.opts=new l.Option(t.defaultOptions.data),e){if(!(e instanceof l.Option))throw new Error("unrecognized option type; did you mean: ['option1', 'option2', ...]");this.opts.data=r()(this.opts.data,e.data)}}return a()(t,[{key:"originalContext",value:function(){return this.orig_ctx}},{key:"makeContext",value:function(n,e){if(!n||!n.length)throw new Error("name must be supplied");var o=new t(this.orig_ctx.concat(n),new l.Option(r()({},this.opts.data,e?e.data:{})));return o.orig_ctx=r()([],this.orig_ctx),o}},{key:"debug",value:function(){return this.log_impl.apply(this,[s.Level.debug].concat(Array.prototype.slice.call(arguments)))}},{key:"info",value:function(){return this.log_impl.apply(this,[s.Level.info].concat(Array.prototype.slice.call(arguments)))}},{key:"warn",value:function(){return this.log_impl.apply(this,[s.Level.warn].concat(Array.prototype.slice.call(arguments)))}},{key:"error",value:function(){return this.log_impl.apply(this,[s.Level.error].concat(Array.prototype.slice.call(arguments)))}},{key:"disableBacktrace",value:function(t){this.opts.data.disableBacktrace=function(){return t}}},{key:"log_impl",value:function(n,e){if(this.need_log(n)){var o=n.intensity>=s.Level.error.intensity?console.group:console.groupCollapsed,r=this.opts.data.icon?"%c"+this.opts.data.icon.text+"  ":"%c",i=this.opts.data.icon?t.PartStyle.icon.clone({color:this.opts.data.icon.color}).join():"";o("%c"+n.icon+" %c"+n.label+"%c [%c"+this.ctx.join("::")+"%c] "+r+"%c"+e,n.style.clone({"text-decoration":"none"}).join(),n.style.join(),"",this.opts.data.ctx.style.join(),"",i,t.PartStyle.message_body.join());for(var c=arguments.length,u=Array(c>2?c-2:0),a=2;a<c;a++)u[a-2]=arguments[a];if(u.length){var f;console.group("%cmessage",t.PartStyle.message.join()),(f=console).log.apply(f,u),console.groupEnd()}this.opts.data.disableBacktrace()||(console.groupCollapsed("%cbacktrace",t.PartStyle.backtrace.join()),console.trace(),console.groupEnd()),console.groupEnd()}}},{key:"need_log",value:function(t){return t.intensity!==s.Level.debug.intensity&&t.intensity>=this.opts.data.ctx.level.intensity}}]),t}());p.Style=f.Style,p.Option=l.Option,p.Level=s.Level,p.PartStyle={message:new f.Style({"font-weight":"bold","text-decoration":"underline",color:"#aaa"}),message_body:new f.Style({"font-family":"monospace","font-weight":"normal","text-decoration":"none",color:"#222"}),backtrace:new f.Style({"font-weight":"bold","text-decoration":"underline",color:"#aaa"}),icon:new f.Style({"font-family":"sans-serif"})},p.defaultLevel=s.Level.debug,p.defaultOptions=new l.Option({disableBacktrace:function(){return!0},ctx:{level:p.defaultLevel,style:new f.Style({"font-weight":"bold",color:"#222222"})}})},function(t,n,e){t.exports={default:e(26),__esModule:!0}},function(t,n,e){e(27),t.exports=e(1).Object.assign},function(t,n,e){var o=e(5);o(o.S+o.F,"Object",{assign:e(36)})},function(t,n,e){var o=e(29);t.exports=function(t,n,e){if(o(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,o){return t.call(n,e,o)};case 3:return function(e,o,r){return t.call(n,e,o,r)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var o=e(10),r=e(35);t.exports=e(2)?function(t,n,e){return o.f(t,n,r(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var o=e(7);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(2)&&!e(3)(function(){return 7!=Object.defineProperty(e(33)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var o=e(7),r=e(6).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,n,e){var o=e(7);t.exports=function(t,n){if(!o(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!o(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){"use strict";var o=e(11),r=e(47),i=e(48),c=e(16),u=e(13),a=Object.assign;t.exports=!a||e(3)(function(){var t={},n={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach(function(t){n[t]=t}),7!=a({},t)[e]||Object.keys(a({},n)).join("")!=o})?function(t,n){for(var e=c(t),a=arguments.length,f=1,l=r.f,s=i.f;a>f;)for(var p,y=u(arguments[f++]),d=l?o(y).concat(l(y)):o(y),v=d.length,g=0;v>g;)s.call(y,p=d[g++])&&(e[p]=y[p]);return e}:a},function(t,n,e){var o=e(38),r=e(12),i=e(40)(!1),c=e(43)("IE_PROTO");t.exports=function(t,n){var e,u=r(t),a=0,f=[];for(e in u)e!=c&&o(u,e)&&f.push(e);for(;n.length>a;)o(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var o=e(12),r=e(41),i=e(42);t.exports=function(t){return function(n,e,c){var u,a=o(n),f=r(a.length),l=i(c,f);if(t&&e!=e){for(;f>l;)if((u=a[l++])!=u)return!0}else for(;f>l;l++)if((t||l in a)&&a[l]===e)return t||l||0;return!t&&-1}}},function(t,n,e){var o=e(15),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,n,e){var o=e(15),r=Math.max,i=Math.min;t.exports=function(t,n){return t=o(t),t<0?r(t+n,0):i(t,n)}},function(t,n,e){var o=e(44)("keys"),r=e(45);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,n,e){var o=e(6),r=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,n){var e=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+o).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){t.exports={default:e(50),__esModule:!0}},function(t,n,e){e(51);var o=e(1).Object;t.exports=function(t,n,e){return o.defineProperty(t,n,e)}},function(t,n,e){var o=e(5);o(o.S+o.F*!e(2),"Object",{defineProperty:e(10).f})},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"Style",function(){return s});var o=e(4),r=e.n(o),i=e(53),c=e.n(i),u=e(8),a=e.n(u),f=e(17),l=e.n(f),s=function(){function t(n){a()(this,t),this.kv=n}return l()(t,[{key:"join",value:function(){var t=this;return c()(this.kv).map(function(n){return n+":"+t.kv[n]}).join(";")}},{key:"toString",value:function(){return this.join()}},{key:"clone",value:function(n){return new t(r()({},this.kv,n))}}]),t}()},function(t,n,e){t.exports={default:e(54),__esModule:!0}},function(t,n,e){e(55),t.exports=e(1).Object.keys},function(t,n,e){var o=e(16),r=e(11);e(56)("keys",function(){return function(t){return r(o(t))}})},function(t,n,e){var o=e(5),r=e(1),i=e(3);t.exports=function(t,n){var e=(r.Object||{})[t]||Object[t],c={};c[t]=n(e),o(o.S+o.F*i(function(){e(1)}),"Object",c)}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"Option",function(){return u});var o=e(4),r=e.n(o),i=e(8),c=e.n(i),u=function t(n){c()(this,t),this.data=r()({},n)}},function(t,n,e){(function(n){t.exports=n.Nagato=e(59)}).call(n,e(0))},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"Level",function(){return r});var o=e(9),r=(e.n(o),{debug:{intensity:-1,label:"DEBUG",out:console.debug,style:new o.Style({"font-family":"sans-serif","font-weight":"bold","text-decoration":"underline",color:"#B40486"}),icon:"⚒️"},info:{intensity:0,label:"INFO ",out:console.info,style:new o.Style({"font-family":"sans-serif",color:"#BBB"}),icon:"📝"},warn:{intensity:1,label:"WARN ",out:console.warn,style:new o.Style({"font-family":"sans-serif","font-weight":"bold",color:"#ff8c00"}),icon:"⚠️"},error:{intensity:2,label:"ERROR",out:console.error,style:new o.Style({"font-family":"sans-serif","font-weight":"bold",color:"#e62670"}),icon:"🚫"}})}]);