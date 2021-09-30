/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={141:()=>{!function(e){e.fn.readmore=function(n){e(this).find(".has-readmore").each((function(){var t=0,r=e(this).find("p"),a=0;if(e(r).each((function(e){t++})),t>n.num){for(var i=0;i<n.num;i++)a+=e(r).eq(i).outerHeight()+parseInt(e(r).eq(i).css("margin-bottom"));e(this).css({height:a,overflow:"hidden"}),0!==e(this).parent().find(".read-more").length&&e(this).parent().find(".read-more").each((function(){e(this).remove()})),e(this).parent().append('<div class="info-block__read-more read-more read-more_more"><p class="read-more__text">Читати більше</p><div class="read-more__icon"><i class="bi bi-chevron-down"></i></div></div>'),e(this).parent().find(".read-more_more").click((function(){var n=0;e(r).each((function(){n+=e(this).outerHeight()+parseInt(e(this).css("margin-bottom"))})),e(this).parent().find(".has-readmore").animate({height:n}),e(this).parent().find(".read-more_less").css("display","flex"),e(this).css("display","none")})),e(this).parent().append('<div class="info-block__read-more read-more read-more_less" style="display: none;"><p class="read-more__text">Приховати</p><div class="read-more__icon"><i class="bi bi-chevron-up"></i></div></div>'),e(this).parent().find(".read-more_less").click((function(){var n=e(this)[0].getBoundingClientRect().top,t=e(this).parent().find(".has-readmore").offset().top+a-n;e("html, body").animate({scrollTop:t},400),e(this).parent().find(".has-readmore").animate({height:a},400),e(this).css("display","none"),e(this).parent().find(".read-more_more").css("display","flex")}))}}))}}(jQuery)},222:()=>{$(document).ready((function(){$(".tab__name").click((function(){$(".tab__name").each((function(){$(this).removeClass("is-active")})),$(this).addClass("is-active");var e=$(this).find(".tab__name-text").text().toLowerCase();$(".tab__body").each((function(){$(this).attr("data-name")==e?($(this).addClass("is-visible"),$(this).find(".tab__main").readmore({num:3})):$(this).removeClass("is-visible")}))})),setTimeout((function(){$("#courses .tab__main").readmore({num:3})}),500)}))},809:(e,n,t)=>{"use strict";t.r(n);var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],o={CSS:{},springs:{}};function s(e,n,t){return Math.min(Math.max(e,n),t)}function u(e,n){return e.indexOf(n)>-1}function c(e,n){return e.apply(null,n)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return u(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return l.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!r.hasOwnProperty(e)&&!a.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function d(e){var n=/\(([^)]+)\)/.exec(e);return n?n[1].split(",").map((function(e){return parseFloat(e)})):[]}function f(e,n){var t=d(e),r=s(l.und(t[0])?1:t[0],.1,100),a=s(l.und(t[1])?100:t[1],.1,100),i=s(l.und(t[2])?10:t[2],.1,100),u=s(l.und(t[3])?0:t[3],.1,100),c=Math.sqrt(a/r),f=i/(2*Math.sqrt(a*r)),h=f<1?c*Math.sqrt(1-f*f):0,p=f<1?(f*c-u)/h:-u+c;function m(e){var t=n?n*e/1e3:e;return t=f<1?Math.exp(-t*f*c)*(1*Math.cos(h*t)+p*Math.sin(h*t)):(1+p*t)*Math.exp(-t*c),0===e||1===e?e:1-t}return n?m:function(){var n=o.springs[e];if(n)return n;for(var t=1/6,r=0,a=0;;)if(1===m(r+=t)){if(++a>=16)break}else a=0;var i=r*t*1e3;return o.springs[e]=i,i}}function h(e){return void 0===e&&(e=10),function(n){return Math.ceil(s(n,1e-6,1)*e)*(1/e)}}var p,m,v=function(){var e=.1;function n(e,n){return 1-3*n+3*e}function t(e,n){return 3*n-6*e}function r(e){return 3*e}function a(e,a,i){return((n(a,i)*e+t(a,i))*e+r(a))*e}function i(e,a,i){return 3*n(a,i)*e*e+2*t(a,i)*e+r(a)}return function(n,t,r,o){if(0<=n&&n<=1&&0<=r&&r<=1){var s=new Float32Array(11);if(n!==t||r!==o)for(var u=0;u<11;++u)s[u]=a(u*e,n,r);return function(u){return n===t&&r===o||0===u||1===u?u:a(function(t){for(var o=0,u=1;10!==u&&s[u]<=t;++u)o+=e;--u;var c=o+(t-s[u])/(s[u+1]-s[u])*e,l=i(c,n,r);return l>=.001?function(e,n,t,r){for(var o=0;o<4;++o){var s=i(n,t,r);if(0===s)return n;n-=(a(n,t,r)-e)/s}return n}(t,c,n,r):0===l?c:function(e,n,t,r,i){var o,s,u=0;do{(o=a(s=n+(t-n)/2,r,i)-e)>0?t=s:n=s}while(Math.abs(o)>1e-7&&++u<10);return s}(t,o,o+e,n,r)}(u),t,o)}}}}(),g=(p={linear:function(){return function(e){return e}}},m={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var n,t=4;e<((n=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*n-2)/22-e,2)}},Elastic:function(e,n){void 0===e&&(e=1),void 0===n&&(n=.5);var t=s(e,1,10),r=s(n,.1,2);return function(e){return 0===e||1===e?e:-t*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,n){m[e]=function(){return function(e){return Math.pow(e,n+2)}}})),Object.keys(m).forEach((function(e){var n=m[e];p["easeIn"+e]=n,p["easeOut"+e]=function(e,t){return function(r){return 1-n(e,t)(1-r)}},p["easeInOut"+e]=function(e,t){return function(r){return r<.5?n(e,t)(2*r)/2:1-n(e,t)(-2*r+2)/2}},p["easeOutIn"+e]=function(e,t){return function(r){return r<.5?(1-n(e,t)(1-2*r))/2:(n(e,t)(2*r-1)+1)/2}}})),p);function y(e,n){if(l.fnc(e))return e;var t=e.split("(")[0],r=g[t],a=d(e);switch(t){case"spring":return f(e,n);case"cubicBezier":return c(v,a);case"steps":return c(h,a);default:return c(r,a)}}function b(e){try{return document.querySelectorAll(e)}catch(e){return}}function w(e,n){for(var t=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<t;i++)if(i in e){var o=e[i];n.call(r,o,i,e)&&a.push(o)}return a}function _(e){return e.reduce((function(e,n){return e.concat(l.arr(n)?_(n):n)}),[])}function x(e){return l.arr(e)?e:(l.str(e)&&(e=b(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function k(e,n){return e.some((function(e){return e===n}))}function I(e){var n={};for(var t in e)n[t]=e[t];return n}function M(e,n){var t=I(e);for(var r in e)t[r]=n.hasOwnProperty(r)?n[r]:e[r];return t}function C(e,n){var t=I(e);for(var r in n)t[r]=l.und(e[r])?n[r]:e[r];return t}function O(e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(n)return n[1]}function B(e,n){return l.fnc(e)?e(n.target,n.id,n.total):e}function T(e,n){return e.getAttribute(n)}function E(e,n,t){if(k([t,"deg","rad","turn"],O(n)))return n;var r=o.CSS[n+t];if(!l.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+t;var s=100/a.offsetWidth;i.removeChild(a);var u=s*parseFloat(n);return o.CSS[n+t]=u,u}function S(e,n,t){if(n in e.style){var r=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[n]||getComputedStyle(e).getPropertyValue(r)||"0";return t?E(e,a,t):a}}function P(e,n){return l.dom(e)&&!l.inp(e)&&(!l.nil(T(e,n))||l.svg(e)&&e[n])?"attribute":l.dom(e)&&k(i,n)?"transform":l.dom(e)&&"transform"!==n&&S(e,n)?"css":null!=e[n]?"object":void 0}function F(e){if(l.dom(e)){for(var n,t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;n=r.exec(t);)a.set(n[1],n[2]);return a}}function A(e,n,t,r){switch(P(e,n)){case"transform":return function(e,n,t,r){var a=u(n,"scale")?1:0+function(e){return u(e,"translate")||"perspective"===e?"px":u(e,"rotate")||u(e,"skew")?"deg":void 0}(n),i=F(e).get(n)||a;return t&&(t.transforms.list.set(n,i),t.transforms.last=n),r?E(e,i,r):i}(e,n,r,t);case"css":return S(e,n,t);case"attribute":return T(e,n);default:return e[n]||0}}function L(e,n){var t=/^(\*=|\+=|-=)/.exec(e);if(!t)return e;var r=O(e)||0,a=parseFloat(n),i=parseFloat(e.replace(t[0],""));switch(t[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function N(e,n){if(l.col(e))return function(e){return l.rgb(e)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n=e))?"rgba("+t[1]+",1)":n:l.hex(e)?function(e){var n=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,n,t,r){return n+n+t+t+r+r})),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return"rgba("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+",1)"}(e):l.hsl(e)?function(e){var n,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,s=parseInt(a[3],10)/100,u=a[4]||1;function c(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(n-e)*t:t<.5?n:t<2/3?e+(n-e)*(2/3-t)*6:e}if(0==o)n=t=r=s;else{var l=s<.5?s*(1+o):s+o-s*o,d=2*s-l;n=c(d,l,i+1/3),t=c(d,l,i),r=c(d,l,i-1/3)}return"rgba("+255*n+","+255*t+","+255*r+","+u+")"}(e):void 0;var n,t}(e);if(/\s/g.test(e))return e;var t=O(e),r=t?e.substr(0,e.length-t.length):e;return n?r+n:r}function D(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function H(e){for(var n,t=e.points,r=0,a=0;a<t.numberOfItems;a++){var i=t.getItem(a);a>0&&(r+=D(n,i)),n=i}return r}function V(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*T(e,"r")}(e);case"rect":return function(e){return 2*T(e,"width")+2*T(e,"height")}(e);case"line":return function(e){return D({x:T(e,"x1"),y:T(e,"y1")},{x:T(e,"x2"),y:T(e,"y2")})}(e);case"polyline":return H(e);case"polygon":return function(e){var n=e.points;return H(e)+D(n.getItem(n.numberOfItems-1),n.getItem(0))}(e)}}function q(e,n){var t=n||{},r=t.el||function(e){for(var n=e.parentNode;l.svg(n)&&l.svg(n.parentNode);)n=n.parentNode;return n}(e),a=r.getBoundingClientRect(),i=T(r,"viewBox"),o=a.width,s=a.height,u=t.viewBox||(i?i.split(" "):[0,0,o,s]);return{el:r,viewBox:u,x:u[0]/1,y:u[1]/1,w:o,h:s,vW:u[2],vH:u[3]}}function j(e,n,t){function r(t){void 0===t&&(t=0);var r=n+t>=1?n+t:0;return e.el.getPointAtLength(r)}var a=q(e.el,e.svg),i=r(),o=r(-1),s=r(1),u=t?1:a.w/a.vW,c=t?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*u;case"y":return(i.y-a.y)*c;case"angle":return 180*Math.atan2(s.y-o.y,s.x-o.x)/Math.PI}}function Y(e,n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=N(l.pth(e)?e.totalLength:e,n)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:l.str(e)||n?r.split(t):[]}}function W(e){return w(e?_(l.arr(e)?e.map(x):x(e)):[],(function(e,n,t){return t.indexOf(e)===n}))}function z(e){var n=W(e);return n.map((function(e,t){return{target:e,id:t,total:n.length,transforms:{list:F(e)}}}))}function X(e,n){var t=I(n);if(/^spring/.test(t.easing)&&(t.duration=f(t.easing)),l.arr(e)){var r=e.length;2!==r||l.obj(e[0])?l.fnc(n.duration)||(t.duration=n.duration/r):e={value:e}}var a=l.arr(e)?e:[e];return a.map((function(e,t){var r=l.obj(e)&&!l.pth(e)?e:{value:e};return l.und(r.delay)&&(r.delay=t?0:n.delay),l.und(r.endDelay)&&(r.endDelay=t===a.length-1?n.endDelay:0),r})).map((function(e){return C(e,t)}))}var G={css:function(e,n,t){return e.style[n]=t},attribute:function(e,n,t){return e.setAttribute(n,t)},object:function(e,n,t){return e[n]=t},transform:function(e,n,t,r,a){if(r.list.set(n,t),n===r.last||a){var i="";r.list.forEach((function(e,n){i+=n+"("+e+") "})),e.style.transform=i}}};function Q(e,n){z(e).forEach((function(e){for(var t in n){var r=B(n[t],e),a=e.target,i=O(r),o=A(a,t,i,e),s=L(N(r,i||O(o)),o),u=P(a,t);G[u](a,t,s,e.transforms,!0)}}))}function R(e,n){return w(_(e.map((function(e){return n.map((function(n){return function(e,n){var t=P(e.target,n.name);if(t){var r=function(e,n){var t;return e.tweens.map((function(r){var a=function(e,n){var t={};for(var r in e){var a=B(e[r],n);l.arr(a)&&1===(a=a.map((function(e){return B(e,n)}))).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,n),i=a.value,o=l.arr(i)?i[1]:i,s=O(o),u=A(n.target,e.name,s,n),c=t?t.to.original:u,d=l.arr(i)?i[0]:c,f=O(d)||O(u),h=s||f;return l.und(o)&&(o=c),a.from=Y(d,h),a.to=Y(L(o,d),h),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=l.pth(i),a.isPathTargetInsideSVG=a.isPath&&l.svg(n.target),a.isColor=l.col(a.from.original),a.isColor&&(a.round=1),t=a,a}))}(n,e),a=r[r.length-1];return{type:t,property:n.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,n)}))}))),(function(e){return!l.und(e)}))}function Z(e,n){var t=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):n.duration,a.delay=t?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):n.delay,a.endDelay=t?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):n.endDelay,a}var K=0,J=[],U=function(){var e;function n(t){for(var r=J.length,a=0;a<r;){var i=J[a];i.paused?(J.splice(a,1),r--):(i.tick(t),a++)}e=a>0?requestAnimationFrame(n):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ne.suspendWhenDocumentHidden&&(ee()?e=cancelAnimationFrame(e):(J.forEach((function(e){return e._onDocumentVisibility()})),U()))})),function(){e||ee()&&ne.suspendWhenDocumentHidden||!(J.length>0)||(e=requestAnimationFrame(n))}}();function ee(){return!!document&&document.hidden}function ne(e){void 0===e&&(e={});var n,t=0,i=0,o=0,u=0,c=null;function d(e){var n=window.Promise&&new Promise((function(e){return c=e}));return e.finished=n,n}var f=function(e){var n=M(r,e),t=M(a,e),i=function(e,n){var t=[],r=n.keyframes;for(var a in r&&(n=C(function(e){for(var n=w(_(e.map((function(e){return Object.keys(e)}))),(function(e){return l.key(e)})).reduce((function(e,n){return e.indexOf(n)<0&&e.push(n),e}),[]),t={},r=function(r){var a=n[r];t[a]=e.map((function(e){var n={};for(var t in e)l.key(t)?t==a&&(n.value=e[t]):n[t]=e[t];return n}))},a=0;a<n.length;a++)r(a);return t}(r),n)),n)l.key(a)&&t.push({name:a,tweens:X(n[a],e)});return t}(t,e),o=z(e.targets),s=R(o,i),u=Z(s,t),c=K;return K++,C(n,{id:c,children:[],animatables:o,animations:s,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}(e);function h(){var e=f.direction;"alternate"!==e&&(f.direction="normal"!==e?"normal":"reverse"),f.reversed=!f.reversed,n.forEach((function(e){return e.reversed=f.reversed}))}function p(e){return f.reversed?f.duration-e:e}function m(){t=0,i=p(f.currentTime)*(1/ne.speed)}function v(e,n){n&&n.seek(e-n.timelineOffset)}function g(e){for(var n=0,t=f.animations,r=t.length;n<r;){var a=t[n],i=a.animatable,o=a.tweens,u=o.length-1,c=o[u];u&&(c=w(o,(function(n){return e<n.end}))[0]||c);for(var l=s(e-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(l)?1:c.easing(l),h=c.to.strings,p=c.round,m=[],v=c.to.numbers.length,g=void 0,y=0;y<v;y++){var b=void 0,_=c.to.numbers[y],x=c.from.numbers[y]||0;b=c.isPath?j(c.value,d*_,c.isPathTargetInsideSVG):x+d*(_-x),p&&(c.isColor&&y>2||(b=Math.round(b*p)/p)),m.push(b)}var k=h.length;if(k){g=h[0];for(var $=0;$<k;$++){h[$];var I=h[$+1],M=m[$];isNaN(M)||(g+=I?M+I:M+" ")}}else g=m[0];G[a.type](i.target,a.property,g,i.transforms),a.currentValue=g,n++}}function y(e){f[e]&&!f.passThrough&&f[e](f)}function b(e){var r=f.duration,a=f.delay,l=r-f.endDelay,m=p(e);f.progress=s(m/r*100,0,100),f.reversePlayback=m<f.currentTime,n&&function(e){if(f.reversePlayback)for(var t=u;t--;)v(e,n[t]);else for(var r=0;r<u;r++)v(e,n[r])}(m),!f.began&&f.currentTime>0&&(f.began=!0,y("begin")),!f.loopBegan&&f.currentTime>0&&(f.loopBegan=!0,y("loopBegin")),m<=a&&0!==f.currentTime&&g(0),(m>=l&&f.currentTime!==r||!r)&&g(r),m>a&&m<l?(f.changeBegan||(f.changeBegan=!0,f.changeCompleted=!1,y("changeBegin")),y("change"),g(m)):f.changeBegan&&(f.changeCompleted=!0,f.changeBegan=!1,y("changeComplete")),f.currentTime=s(m,0,r),f.began&&y("update"),e>=r&&(i=0,f.remaining&&!0!==f.remaining&&f.remaining--,f.remaining?(t=o,y("loopComplete"),f.loopBegan=!1,"alternate"===f.direction&&h()):(f.paused=!0,f.completed||(f.completed=!0,y("loopComplete"),y("complete"),!f.passThrough&&"Promise"in window&&(c(),d(f)))))}return d(f),f.reset=function(){var e=f.direction;f.passThrough=!1,f.currentTime=0,f.progress=0,f.paused=!0,f.began=!1,f.loopBegan=!1,f.changeBegan=!1,f.completed=!1,f.changeCompleted=!1,f.reversePlayback=!1,f.reversed="reverse"===e,f.remaining=f.loop,n=f.children;for(var t=u=n.length;t--;)f.children[t].reset();(f.reversed&&!0!==f.loop||"alternate"===e&&1===f.loop)&&f.remaining++,g(f.reversed?f.duration:0)},f._onDocumentVisibility=m,f.set=function(e,n){return Q(e,n),f},f.tick=function(e){o=e,t||(t=o),b((o+(i-t))*ne.speed)},f.seek=function(e){b(p(e))},f.pause=function(){f.paused=!0,m()},f.play=function(){f.paused&&(f.completed&&f.reset(),f.paused=!1,J.push(f),m(),U())},f.reverse=function(){h(),f.completed=!f.reversed,m()},f.restart=function(){f.reset(),f.play()},f.remove=function(e){re(W(e),f)},f.reset(),f.autoplay&&f.play(),f}function te(e,n){for(var t=n.length;t--;)k(e,n[t].animatable.target)&&n.splice(t,1)}function re(e,n){var t=n.animations,r=n.children;te(e,t);for(var a=r.length;a--;){var i=r[a],o=i.animations;te(e,o),o.length||i.children.length||r.splice(a,1)}t.length||r.length||n.pause()}ne.version="3.2.1",ne.speed=1,ne.suspendWhenDocumentHidden=!0,ne.running=J,ne.remove=function(e){for(var n=W(e),t=J.length;t--;)re(n,J[t])},ne.get=A,ne.set=Q,ne.convertPx=E,ne.path=function(e,n){var t=l.str(e)?b(e)[0]:e,r=n||100;return function(e){return{property:e,el:t,svg:q(t),totalLength:V(t)*(r/100)}}},ne.setDashoffset=function(e){var n=V(e);return e.setAttribute("stroke-dasharray",n),n},ne.stagger=function(e,n){void 0===n&&(n={});var t=n.direction||"normal",r=n.easing?y(n.easing):null,a=n.grid,i=n.axis,o=n.from||0,s="first"===o,u="center"===o,c="last"===o,d=l.arr(e),f=d?parseFloat(e[0]):parseFloat(e),h=d?parseFloat(e[1]):0,p=O(d?e[1]:e)||0,m=n.start||0+(d?f:0),v=[],g=0;return function(e,n,l){if(s&&(o=0),u&&(o=(l-1)/2),c&&(o=l-1),!v.length){for(var y=0;y<l;y++){if(a){var b=u?(a[0]-1)/2:o%a[0],w=u?(a[1]-1)/2:Math.floor(o/a[0]),_=b-y%a[0],x=w-Math.floor(y/a[0]),k=Math.sqrt(_*_+x*x);"x"===i&&(k=-_),"y"===i&&(k=-x),v.push(k)}else v.push(Math.abs(o-y));g=Math.max.apply(Math,v)}r&&(v=v.map((function(e){return r(e/g)*g}))),"reverse"===t&&(v=v.map((function(e){return i?e<0?-1*e:-e:Math.abs(g-e)})))}return m+(d?(h-f)/g:f)*(Math.round(100*v[n])/100)+p}},ne.timeline=function(e){void 0===e&&(e={});var n=ne(e);return n.duration=0,n.add=function(t,r){var i=J.indexOf(n),o=n.children;function s(e){e.passThrough=!0}i>-1&&J.splice(i,1);for(var u=0;u<o.length;u++)s(o[u]);var c=C(t,M(a,e));c.targets=c.targets||e.targets;var d=n.duration;c.autoplay=!1,c.direction=n.direction,c.timelineOffset=l.und(r)?d:L(r,d),s(n),n.seek(c.timelineOffset);var f=ne(c);s(f),o.push(f);var h=Z(o,e);return n.delay=h.delay,n.endDelay=h.endDelay,n.duration=h.duration,n.seek(0),n.reset(),n.autoplay&&n.play(),n},n},ne.easing=y,ne.penner=g,ne.random=function(e,n){return Math.floor(Math.random()*(n-e+1))+e},$(document).ready((function(){setTimeout((function(){$(".loader").addClass("is-hidden"),$(".intro__action").click((function(){"g"===$(this).attr("data-mode")?(console.log("hiding E"),$('[data-selector="tab-german"]').show(),$('[data-selector="tab-english"]').hide()):(console.log("hiding G"),$('[data-selector="tab-english"]').show(),$('[data-selector="tab-german"]').hide()),setTimeout((function(){$(".intro").addClass("is-hidden"),$("html").css("overflow-y","auto"),window.scrollTo(0,0)}),1)}))}),1700)}))},64:(e,n,t)=>{var r=t(566);window.pageYOffset,window.addEventListener("scroll",(function(){window.pageYOffset;window.pageYOffset>0?$(".nav").addClass("is-sticked"):$(".nav").hasClass("is-sticked")&&$(".nav").removeClass("is-sticked")})),new r(document.getElementById("topmenu"),{menuItemSelector:"p[data-target]",activeClass:"is-active",threshold:15,enableLocationHash:!0,hashTimeout:600,callback:null})},795:()=>{$(document).ready((function(){$.each($(".ibg"),(function(e,n){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}))},669:()=>{$(document).ready((function(){var e=new function(e){var n=this;this.id="#topmenu",this.itemsOnBreakpoint=[],this.ifExpandMenuHasAClickListener=!1,this.transportItem=function(e){var t;"last"==e?t=$(n.id+" .nav__menu-item").length-1:"number"==typeof e&&(t=e-1);var r=$(n.id+" .nav__menu-item").eq(t).clone().removeClass().addClass("nav__menu-item_expand");$(n.id+" .nav__menu-item").eq(t).remove(),$(n.id+" .nav__expand-menu").append(r)},this.getNumOfItem=function(e){if("menu"==e)return $(n.id+" .nav__menu-item").length},this.setItemsOnBreakpoint=function(e,t){n.itemsOnBreakpoint.push({items:e,breakpoint:t})},this.adaptize=function(){var e=function(){var e=[];for(i=0;i<n.itemsOnBreakpoint.length;i++)e.push(n.itemsOnBreakpoint[i].breakpoint);var t=[],r=$(window).width();for(i=0;i<e.length;i++)t[i]=e[i]-r;var a=t[0];for(i=0;i<e.length;i++)t[i]>a&&(a=t[i]);var o=a,s=null;for(i=0;i<e.length;i++)t[i]<=o&&t[i]>0&&(o=t[i],s=i);return null!=s?e[s]:null};if(null!=e()){var t=function(e){for(i=0;i<n.itemsOnBreakpoint.length;i++)if(n.itemsOnBreakpoint[i].breakpoint==e)return n.itemsOnBreakpoint[i].items}(e());if(null!=t){n.createExpand();var r=n.getNumOfItem("menu"),a=r-t;for(i=0;i<a;i++)n.transportItem(r-a+1)}}},this.createExpand=function(){$(n.id+" .nav__menu").append("<div class='nav__expand'></div>"),$(n.id+" .nav__expand").append("<div class='nav__expand-btn show'></div>");for(var e=0;e<3;e++)$(n.id+" .nav__expand-btn").append("<span></span>");$(n.id+" .nav__expand").append("<div class='nav__expand-menu'></div>"),n.AddClickFunctionality()},this.AddClickFunctionality=function(e){var t=n.id,r=n.ifExpandMenuHasAClickListener;$(n.id+" .nav__btn").click((function(){$(t).toggleClass("nav_is-open"),$(t+" .hamburger").toggleClass("is-active")})),$(n.id+" .nav__expand-btn").click((function(){$(t+" .nav__expand-menu").fadeToggle("fast"),r||($(this.id+" .nav__menu-item_expand .nav__link").click((function(){$(t+" .nav__expand-menu").fadeToggle("fast")})),r=!0)})),$(n.id+" .nav__menu-item .nav__link").click((function(){$(this.id+" .nav__menu-item").each((function(){$(this).removeClass("is-active")})),$(this).parent(".nav__menu-item").addClass("is-active"),$(this).parents(".nav").removeClass("nav_is-open"),$(this).parents(".nav").find(".hamburger").removeClass("is-active")}))},this.AddClickFunctionality()}("topmenu");/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)?e.setItemsOnBreakpoint(3,1200):e.setItemsOnBreakpoint(4,1200),e.setItemsOnBreakpoint(null,992),e.adaptize()}))},566:function(e){e.exports=function(){"use strict";var e=function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e},n=function(e){var n=e.getBoundingClientRect();return{top:n.top+window.pageYOffset,left:n.left+window.pageXOffset}},t=function(){return window.pageYOffset||document.documentElement.scrollTop},r=function(e,n){if(e.classList)e.classList.add(n);else{var t=e.className.split(" ");-1===t.indexOf(n)&&t.push(n),e.className=t.join(" ")}},a=function(e,n){e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")},i=function(e,n){var t=null;return function(){var r=arguments,a=this;t||(t=setTimeout((function(){return t=0,e.apply(a,r)}),n))}},o=function(n,r){var a=this;if(n){this.element="string"==typeof n?document.querySelector(n):n,this.options=e({menuItemSelector:'a[href^="#"]',activeClass:"active",threshold:15,enableLocationHash:!0,hashTimeout:600,callback:null},r),this.assignValues(),this.debouncedAssignValuesFn=i((function(){return a.assignValues()})),window.addEventListener("resize",this.debouncedAssignValuesFn),this.debouncedHashFn=i((function(){var e=a.lastInViewElm?"#"+a.lastInViewElm.id:"#";if(history.replaceState)history.replaceState(null,null,e);else{var n=t();window.location.hash=e,window.scrollTo(0,n)}}),this.options.hashTimeout),this.cacheItems(),this.scrollFn()}};return o.prototype.assignValues=function(){this.currScrollTop=0,this.lastInViewElm=null,this.menuHeight=this.element.offsetHeight+this.options.threshold,this.menuItems=[].slice.call(this.element.querySelectorAll(this.options.menuItemSelector)),this.raf=null},o.prototype.cacheItems=function(){this.scrollItems=this.menuItems.map((function(e){var t=e.dataset.target?document.querySelector(e.dataset.target):document.getElementById(e.hash.slice(1));return!!t&&{elm:e,target:t,offset:Math.floor(n(t).top)}})),this.scrollItems=this.scrollItems.filter(Boolean).sort((function(e,n){return e.offset-n.offset}))},o.prototype.tick=function(){var e=this.currScrollTop+this.menuHeight,n=this.scrollItems.filter((function(n){return n.offset<e}));this.activateItem(n.pop())},o.prototype.activateItem=function(e){var n=this,t=this.options,i=t.activeClass,o=t.callback;if(!e)return this.scrollItems.forEach((function(e){return a(e.elm.parentNode,i)})),this.lastInViewElm=null,void(this.options.enableLocationHash&&this.debouncedHashFn());this.lastInViewElm!==e.target&&(this.lastInViewElm=e.target,this.scrollItems.forEach((function(t){a(t.elm.parentNode,i),t.target===e.target&&(r(t.elm.parentNode,i),"function"==typeof o&&o.call(n,t),n.options.enableLocationHash&&n.debouncedHashFn())})))},o.prototype.scrollFn=function(){var e=t();this.currScrollTop!==e&&(this.currScrollTop=e,this.tick()),this.raf=window.requestAnimationFrame(this.scrollFn.bind(this))},o.prototype.destroy=function(){this.raf&&window.cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.debouncedAssignValuesFn)},o}()}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(795),t(669),t(141),t(809),t(222),t(64)})();