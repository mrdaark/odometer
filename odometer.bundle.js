!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(window,function(){return o={},r.m=n=[function(t,e,n){n(1),t.exports=n(6)},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'.odometer.odometer-auto-theme, .odometer.odometer-theme-default {\n  display: inline-block;\n  vertical-align: middle;\n  *vertical-align: auto;\n  *zoom: 1;\n  *display: inline;\n  position: relative; }\n  .odometer.odometer-auto-theme .odometer-digit, .odometer.odometer-theme-default .odometer-digit {\n    display: inline-block;\n    vertical-align: middle;\n    *vertical-align: auto;\n    *zoom: 1;\n    *display: inline;\n    position: relative; }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer, .odometer.odometer-theme-default .odometer-digit .odometer-digit-spacer {\n      display: inline-block;\n      vertical-align: middle;\n      *vertical-align: auto;\n      *zoom: 1;\n      *display: inline;\n      visibility: hidden; }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner, .odometer.odometer-theme-default .odometer-digit .odometer-digit-inner {\n      text-align: left;\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      overflow: hidden; }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon, .odometer.odometer-theme-default .odometer-digit .odometer-ribbon {\n      display: block; }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner, .odometer.odometer-theme-default .odometer-digit .odometer-ribbon-inner {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-value, .odometer.odometer-theme-default .odometer-digit .odometer-value {\n      display: block;\n      -webkit-transform: translateZ(0); }\n      .odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value, .odometer.odometer-theme-default .odometer-digit .odometer-value.odometer-last-value {\n        position: absolute; }\n  .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-up .odometer-ribbon-inner {\n    -webkit-transition: -webkit-transform 2s;\n    -moz-transition: -moz-transform 2s;\n    -ms-transition: -ms-transform 2s;\n    -o-transition: -o-transform 2s;\n    transition: transform 2s; }\n  .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-up.odometer-animating .odometer-ribbon-inner {\n    -webkit-transform: translateY(-100%);\n    -moz-transform: translateY(-100%);\n    -ms-transform: translateY(-100%);\n    -o-transform: translateY(-100%);\n    transform: translateY(-100%); }\n  .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-down .odometer-ribbon-inner {\n    -webkit-transform: translateY(-100%);\n    -moz-transform: translateY(-100%);\n    -ms-transform: translateY(-100%);\n    -o-transform: translateY(-100%);\n    transform: translateY(-100%); }\n  .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-down.odometer-animating .odometer-ribbon-inner {\n    -webkit-transition: -webkit-transform 2s;\n    -moz-transition: -moz-transform 2s;\n    -ms-transition: -ms-transform 2s;\n    -o-transition: -o-transform 2s;\n    transition: transform 2s;\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0); }\n\n.odometer.odometer-auto-theme, .odometer.odometer-theme-default {\n  font-family: "Helvetica Neue", sans-serif;\n  line-height: 1.1em; }\n  .odometer.odometer-auto-theme .odometer-value, .odometer.odometer-theme-default .odometer-value {\n    text-align: center; }\n\n\n',""])},function(t,e,n){"use strict";t.exports=function(n){var s=[];return s.toString=function(){return this.map(function(t){var e=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}(o),i=o.sources.map(function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},s.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(n[r]=!0)}for(var i=0;i<t.length;i++){var a=t[i];null!=a[0]&&n[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="(".concat(a[2],") and (").concat(e,")")),s.push(a))}},s}},function(t,e,o){var n,r,i,u={},d=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),a=(i={},function(t,e){if("function"==typeof t)return t();if(void 0===i[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}i[t]=n}return i[t]}),s=null,l=0,m=[],c=o(5);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=u[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(y(o.parts[i],e))}else{var a=[];for(i=0;i<o.parts.length;i++)a.push(y(o.parts[i],e));u[o.id]={id:o.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function p(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=m[m.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,n);n.insertBefore(e,r)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=m.indexOf(t);0<=e&&m.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return o.nc}();n&&(t.attrs.nonce=n)}return b(e,t.attrs),p(t,e),e}function b(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function y(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=l++;n=s=s||g(t),o=x.bind(null,n,a,!1),r=x.bind(null,n,a,!0)}else r=e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),p(t,e),e}(t),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=c(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),function(){v(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}t.exports=function(t,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=d()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var s=h(t,a);return f(s,a),function(t){for(var e=[],n=0;n<s.length;n++){var o=s[n];(r=u[o.id]).refs--,e.push(r)}t&&f(h(t,a),a);for(n=0;n<e.length;n++){var r;if(0===(r=e[n]).refs){for(var i=0;i<r.parts.length;i++)r.parts[i]();delete u[r.id]}}}};var w,M=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=M(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,i=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var n,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(n=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(t,e,n){var o,u,r,a,d,i,s,j,l,c,f,m,h,p,v,g,b,y,A,w;function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}u=/^\(?([^)]*)\)?(?:(.)(d+))?$/,b=document.createElement("div").style,d=null!=b.transition||null!=b.webkitTransition||null!=b.mozTransition||null!=b.oTransition,v=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,l=function(t){var e;return(e=document.createElement("div")).innerHTML=t,e.children[0]},p=function(t,e){return t.className=t.className.replace(new RegExp("(^| )".concat(e.split(" ").join("|"),"( |$)"),"gi")," ")},j=function(t,e){return p(t,e),t.className+=" ".concat(e)},y=function(t,e){var n;if(null!=document.createEvent)return(n=document.createEvent("HTMLEvents")).initEvent(e,!0,!0),t.dispatchEvent(n)},f=function(){var t,e;return null!=(t=null!=(e=window.performance)&&"function"==typeof e.now?e.now():void 0)?t:+new Date},g=function(t,e){var n=1<arguments.length&&void 0!==e?e:0;return n?(t*=Math.pow(10,n),t+=.5,(t=Math.floor(t))/Math.pow(10,n)):Math.round(t)},A=function(t){return t<0?Math.ceil(t):Math.floor(t)},i=!(c=function(t){return t-g(t)}),(w=function(){var t,e,n,o,r;if(!i&&null!=window.jQuery){for(i=!0,r=[],t=0,e=(o=["html","text"]).length;t<e;t++)n=o[t],r.push(function(t){var n;return n=window.jQuery.fn[t],window.jQuery.fn[t]=function(t){var e;return null==t||null==(null!=(e=this[0])?e.odometer:void 0)?n.apply(this,arguments):this[0].odometer.update(t)}}(n));return r}})(),setTimeout(w,0),(a=function(){function m(t){var e,n,o,r,i,a,s,u,d,l=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,m),this.options=t,this.el=this.options.el,null!=this.el.odometer)return this.el.odometer;for(n in this.el.odometer=this,a=m.options)d=a[n],null==this.options[n]&&(this.options[n]=d);null==(e=this.options).duration&&(e.duration=2e3),this.MAX_VALUES=this.options.duration/(1e3/30)/2|0,this.resetFormat(),this.value=this.cleanValue(null!=(s=this.options.value)?s:""),this.renderInside(),this.render();try{for(o=0,r=(u=["innerHTML","innerText","textContent"]).length;o<r;o++)i=u[o],null!=this.el[i]&&function(e){Object.defineProperty(l.el,e,{get:function(){var t;return"innerHTML"===e?l.inside.outerHTML:null!=(t=l.inside.innerText)?t:l.inside.textContent},set:function(t){return l.update(t)}})}(i)}catch(t){t,this.watchForMutations()}}return function(t,e,n){e&&x(t.prototype,e),n&&x(t,n)}(m,[{key:"renderInside",value:function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)}},{key:"watchForMutations",value:function(){var n=this;if(null!=r)try{return null==this.observer&&(this.observer=new r(function(t){var e;return e=n.el.innerText,n.renderInside(),n.render(n.value),n.update(e)})),this.watchMutations=!0,this.startWatchingMutations()}catch(t){t}}},{key:"startWatchingMutations",value:function(){if(this.watchMutations)return this.observer.observe(this.el,{childList:!0})}},{key:"stopWatchingMutations",value:function(){var t;return null!=(t=this.observer)?t.disconnect():void 0}},{key:"cleanValue",value:function(t){var e;return"string"==typeof t&&(t=(t=(t=t.replace(null!=(e=this.format.radix)?e:".","<radix>")).replace(/[.,]/g,"")).replace("<radix>","."),t=parseFloat(t,10)||0),g(t,this.format.precision)}},{key:"bindTransitionEnd",value:function(){var t,e,n,o,r,i,a=this;if(!this.transitionEndBound){for(this.transitionEndBound=!0,r=!1,i=[],e=0,n=(o="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd".split(" ")).length;e<n;e++)t=o[e],i.push(this.el.addEventListener(t,function(){return r||(r=!0,setTimeout(function(){return a.render(),r=!1,y(a.el,"odometerdone")},0)),!0},!1));return i}}},{key:"resetFormat",value:function(){var t,e,n,o,r,i,a;if(t=(t=null!=(i=this.options.format)?i:"(,ddd).dd")||"d",!(n=u.exec(t)))throw new Error("Odometer: Unparsable digit format");var s=M(n.slice(1,4),3);return a=s[0],r=s[1],o=(null!=(e=s[2])?e.length:void 0)||0,this.format={repeating:a,radix:r,precision:o}}},{key:"render",value:function(t){var e,n,o,r,i,a,s,u=0<arguments.length&&void 0!==t?t:this.value;for(this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",s=this.options.theme,a=[],o=0,r=(e=this.el.className.split(" ")).length;o<r;o++)(n=e[o]).length&&((i=/^odometer-theme-(.+)$/.exec(n))?s=i[1]:/^odometer(-|$)/.test(n)||a.push(n));return a.push("odometer"),d||a.push("odometer-no-transitions"),s?a.push("odometer-theme-".concat(s)):a.push("odometer-auto-theme"),this.el.className=a.join(" "),this.ribbons={},this.formatDigits(u),this.startWatchingMutations()}},{key:"formatDigits",value:function(t){var e,n,o,r,i,a,s,u,d;if(this.digits=[],this.options.formatFunction)for(n=0,o=(a=this.options.formatFunction(t).split("").reverse()).length;n<o;n++)(u=a[n]).match(/0-9/)?((e=this.renderDigit()).querySelector(".odometer-value").innerHTML=u,j(e.querySelector(".odometer-value"),"odometer-value-"+u),this.digits.push(e),this.insertDigit(e)):this.addSpacer(u);else for(0<this.format.precision&&(t+=1/Math.pow(10,this.format.precision+1)),d=!this.format.precision||!c(t)||!1,i=0,r=(s=t.toFixed(this.format.precision).toString().split("").reverse()).length;i<r;i++)"."===(e=s[i])&&(d=!0),this.addDigit(e,d)}},{key:"update",value:function(t){var e,n=this;if(e=(t=this.cleanValue(t))-this.value)return p(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),j(this.el,0<e?"odometer-animating-up":"odometer-animating-down"),this.stopWatchingMutations(),this.animate(t),this.startWatchingMutations(),setTimeout(function(){return n.el.offsetHeight,j(n.el,"odometer-animating")},0),this.value=t}},{key:"renderDigit",value:function(){return l('<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value"></span></span></span></span></span>')}},{key:"insertDigit",value:function(t,e){return null!=e?this.inside.insertBefore(t,e):this.inside.children.length?this.inside.insertBefore(t,this.inside.children[0]):this.inside.appendChild(t)}},{key:"addSpacer",value:function(t,e,n){var o;return(o=l('<span class="odometer-formatting-mark"></span>')).innerHTML=t,n&&j(o,n),this.insertDigit(o,e)}},{key:"addDigit",value:function(t,e){var n,o,r,i,a=!(1<arguments.length&&void 0!==e)||e;if("-"===t)return this.addSpacer(t,null,"odometer-negation-mark");if("."===t)return this.addSpacer(null!=(r=this.format.radix)?r:".",null,"odometer-radix-mark");if(a)for(i=!1;;){if(!this.format.repeating.length){if(i)throw new Error("Bad odometer format without digits");this.resetFormat(),i=!0}if(n=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),"d"===n)break;this.addSpacer(n)}return(o=this.renderDigit()).querySelector(".odometer-value").innerHTML=t,j(o.querySelector(".odometer-value"),"odometer-value-"+t),this.digits.push(o),this.insertDigit(o)}},{key:"animate",value:function(t){return d&&"count"!==this.options.animation?this.animateSlide(t):this.animateCount(t)}},{key:"animateCount",value:function(n){var o,r,i,a,s,u=this;if(r=+n-this.value)return a=i=f(),o=this.value,(s=function(){var t,e;return f()-a>u.options.duration?(u.value=n,u.render(),void y(u.el,"odometerdone")):(50<(t=f()-i)&&(i=f(),e=t/u.options.duration,o+=r*e,u.render(Math.round(o))),null!=v?v(s):setTimeout(s,50))})()}},{key:"getDigitCount",value:function(){for(var t,e,n,o,r,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];for(t=e=0,n=a.length;e<n;t=++e)r=a[t],a[t]=Math.abs(r);return o=Math.max.apply(Math,a),Math.ceil(Math.log(o+1)/Math.log(10))}},{key:"getFractionalDigitCount",value:function(){var t,e,n,o,r,i;o=/^\-?\d*\.(\d*?)0*$/;for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];for(t=e=0,n=s.length;e<n;t=++e)i=s[t],s[t]=i.toString(),r=o.exec(s[t]),s[t]=null==r?0:r[1].length;return Math.max.apply(Math,s)}},{key:"resetDigits",value:function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()}},{key:"animateSlide",value:function(t){var e,n,o,r,i,a,s,u,d,l,m,c,f,h,p,v,g,b,y,w,M,x,k,S,T,E,L;if(S=this.value,(d=this.getFractionalDigitCount(S,t))&&(t*=Math.pow(10,d),S*=Math.pow(10,d)),r=t-S){for(this.bindTransitionEnd(),a=[],c=p=n=0,T=i=this.getDigitCount(S,t);0<=T?p<T:T<p;c=0<=T?++p:--p){if(L=A(S/Math.pow(10,i-c-1)),s=(u=A(t/Math.pow(10,i-c-1)))-L,Math.abs(s)>this.MAX_VALUES){for(m=[],f=s/(this.MAX_VALUES+this.MAX_VALUES*n*.5),o=L;0<s&&o<u||s<0&&u<o;)m.push(Math.round(o)),o+=f;m[m.length-1]!==u&&m.push(u),n++}else m=function(){for(var t=[],e=L;L<=u?e<=u:u<=e;L<=u?e++:e--)t.push(e);return t}.apply(this);for(c=y=0,v=m.length;y<v;c=++y)l=m[c],m[c]=Math.abs(l%10);a.push(m)}for(this.resetDigits(),c=M=0,g=(E=a.reverse()).length;M<g;c=++M)for(m=E[c],this.digits[c]||this.addDigit(" ",d<=c),null==(e=this.ribbons)[c]&&(e[c]=this.digits[c].querySelector(".odometer-ribbon-inner")),this.ribbons[c].innerHTML="",r<0&&(m=m.reverse()),h=k=0,b=m.length;k<b;h=++k)l=m[h],(x=document.createElement("div")).className="odometer-value",x.innerHTML=l,j(x,"odometer-value-"+l),this.ribbons[c].appendChild(x),h===m.length-1&&j(x,"odometer-last-value"),0===h&&j(x,"odometer-first-value");return L<0&&this.addDigit("-"),null!=(w=this.inside.querySelector(".odometer-radix-mark"))&&w.parent.removeChild(w),d?this.addSpacer(this.format.radix,this.digits[d-1],"odometer-radix-mark"):void 0}}}]),m}()).options=null!=(m=window.odometerOptions)?m:{},setTimeout(function(){var t,e,n,o,r;if(window.odometerOptions){for(e in o=[],n=window.odometerOptions)r=n[e],o.push(null!=(t=a.options)[e]?t[e]:t[e]=r);return o}},0),a.init=function(){var t,e,n,o,r,i;if(null!=document.querySelectorAll){for(i=[],n=0,o=(e=document.querySelectorAll(a.options.selector||".odometer")).length;n<o;n++)t=e[n],i.push(t.odometer=new a({el:t,value:null!=(r=t.innerText)?r:t.textContent}));return i}},null!=(null!=(h=document.documentElement)?h.doScroll:void 0)&&null!=document.createEventObject?(s=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&!1!==a.options.auto&&a.init(),null!=s?s.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",function(){if(!1!==a.options.auto)return a.init()},!1),void 0===(o=function(){return a}.apply(e,[]))||(t.exports=o)}],r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0);function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,o});