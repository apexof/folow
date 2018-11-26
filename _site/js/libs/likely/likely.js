/*!
 * Likely 2.3.0 by Ilya Birman (ilyabirman.net)
 * Rewritten sans jQuery by Evgeny Steblinsky (volter9.github.io)
 * Supported by Ivan Akulov (iamakulov.com), Viktor Karpov (vitkarpov.com), and contributors
 * Inspired by Social Likes by Artem Sapegin (sapegin.me)
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.likely=e():t.likely=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=20)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"each",function(){return o}),n.d(e,"toArray",function(){return u}),n.d(e,"merge",function(){return c}),n.d(e,"extend",function(){return a}),n.d(e,"getDataset",function(){return s}),n.d(e,"bools",function(){return l}),n.d(e,"template",function(){return p}),n.d(e,"makeUrl",function(){return h}),n.d(e,"query",function(){return f}),n.d(e,"set",function(){return v}),n.d(e,"getDefaultUrl",function(){return d}),n.d(e,"isBrowserEnv",function(){return m});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i={yes:!0,no:!1},o=function(t,e){for(var n in t)t.hasOwnProperty(n)&&e(t[n],n)},u=function(t){return Array.prototype.slice.call(t)},c=function(){for(var t={},e=Array.prototype.slice.call(arguments),n=0;n<e.length;n++){var r=e[n];if(r)for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])}return t},a=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},s=function(t){if("object"===r(t.dataset))return t.dataset;var e=void 0,n={},i=t.attributes,o=void 0,u=void 0,c=function(t){return t.charAt(1).toUpperCase()};for(e=i.length-1;e>=0;e--)o=i[e],o&&o.name&&/^data-\w[\w\-]*$/.test(o.name)&&(u=o.name.substr(5).replace(/-./g,c),n[u]=o.value);return n},l=function(t){var e={},n=s(t);for(var r in n)if(n.hasOwnProperty(r)){var o=n[r];e[r]=i[o]||o}return e},p=function(t,e){return t?t.replace(/\{([^\}]+)\}/g,function(t,n){return n in e?e[n]:t}):""},h=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(e[n]=encodeURIComponent(e[n]));return p(t,e)},f=function t(e){var n=encodeURIComponent,t=[];for(var i in e)"object"!==r(e[i])&&t.push(n(i)+"="+n(e[i]));return t.join("&")},v=function(t,e,n){var r=e.split("."),i=null;r.forEach(function(e,n){"undefined"==typeof t[e]&&(t[e]={}),n!==r.length-1&&(t=t[e]),i=e}),t[i]=n},d=function(){var t=document.querySelector('link[rel="canonical"]');return t?t.href:window.location.href.replace(window.location.hash,"")},m="undefined"!=typeof window&&"undefined"!=typeof document&&document.createElement},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0);n.d(e,"global",function(){return o}),n.d(e,"wrapSVG",function(){return a}),n.d(e,"createNode",function(){return s}),n.d(e,"getScript",function(){return l}),n.d(e,"getJSON",function(){return p}),n.d(e,"find",function(){return h}),n.d(e,"findAll",function(){return f}),n.d(e,"openPopup",function(){return v}),n.d(e,"createTempLink",function(){return d});var i={},o=r.isBrowserEnv?window:i,u=r.isBrowserEnv?document.createElement("div"):{},c=0;o.__likelyCallbacks={};var a=function(t){return'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M'+t+'z"/></svg>'},s=function(t){return u.innerHTML=t,u.children[0]},l=function(t){var e=document.createElement("script"),n=document.head;e.type="text/javascript",e.src=t,n.appendChild(e),n.removeChild(e)},p=function(t,e){var n=encodeURIComponent("random_fun_"+ ++c),r=t.replace(/callback=(\?)/,"callback=__likelyCallbacks."+n);o.__likelyCallbacks[n]=e,l(r)},h=function(t,e){return(e||document).querySelector(t)},f=function(t,e){return Array.prototype.slice.call((e||document).querySelectorAll(t))},v=function(t,e,n,r){var i=Math.round(screen.width/2-n/2),o=0;screen.height>r&&(o=Math.round(screen.height/3-r/2));var u="left="+i+",top="+o+",width="+n+",height="+r+",personalbar=0,toolbar=0,scrollbars=1,resizable=1",c=window.open(t,e,u);return c?(c.focus(),c):(location.href=t,null)},d=function(t){var e=document.createElement("a");e.href=t,e.style="display: none",document.body.appendChild(e),setTimeout(function(){e.click(),document.body.removeChild(e)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"likely",prefix:"likely__"}},function(t,e,n){"use strict";var r=n(9),i=n(0),o=n(10),u=n(11),c=n(12),a=n(13),s=n(14),l=n(15),p=n(16),h=n(17),f=n(18),v={facebook:o.a,gplus:u.a,linkedin:c.a,odnoklassniki:a.a,pinterest:s.a,telegram:l.a,twitter:p.a,vkontakte:h.a,whatsapp:f.a};n.i(i.each)(v,function(t,e){n.i(r.a)(t),t.name=e}),e.a=v},function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(0),u=o.bools,c=o.getDefaultUrl,a=o.merge,s=n(19).default,l=n(2).default,p=n(1),h=p.findAll,f=n(8).default,v=function(t,e){var n=e||{},r={counters:!0,timeout:1e3,zeroes:!1,title:document.title,wait:500,url:c()},i=t[l.name],o=a({},r,n,u(t));return i?i.update(o):t[l.name]=new s(t,o),i},d=function(){function t(){return r(this,t),console.warn("likely function is DEPRECATED and will be removed in 3.0. Use likely.initiate instead."),t.initiate.apply(t,arguments)}return i(t,null,[{key:"initate",value:function(){return console.warn("likely.initate function is DEPRECATED and will be removed in 3.0. Use likely.initiate instead."),t.initiate.apply(t,arguments)}},{key:"initiate",value:function(t,e){function n(){r.forEach(function(t){v(t,i)})}var r=void 0,i=void 0;Array.isArray(t)?(r=t,i=e):t instanceof Node?(r=[t],i=e):(r=h("."+l.name),i=t),n(),f.onUrlChange(n)}}]),t}();t.exports=d},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(1),o=n(0),u=n(2),c=n(7),a=n(3),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l='<span class="{className}">{content}</span>',p=function(){function t(e,i,u){r(this,t),this.widget=e,this.likely=i,this.options=n.i(o.merge)(u),this.init()}return s(t,[{key:"init",value:function(){this.detectService(),this.detectParams(),this.service&&(this.initHtml(),setTimeout(this.initCounter.bind(this),0))}},{key:"update",value:function(t){var e="."+u.default.prefix+"counter",r=n.i(i.findAll)(e,this.widget);n.i(o.extend)(this.options,n.i(o.merge)({forceUpdate:!1},t)),r.forEach(function(t){t.parentNode.removeChild(t)}),this.initCounter()}},{key:"detectService",value:function(){var t=this.widget,e=n.i(o.getDataset)(t).service;e||(e=Object.keys(a.a).filter(function(e){return t.classList.contains(e)})[0]),e&&(this.service=e,n.i(o.extend)(this.options,a.a[e]))}},{key:"detectParams",value:function(){var t=this.options,e=n.i(o.getDataset)(this.widget);if(e.counter){var r=parseInt(e.counter,10);isNaN(r)?t.counterUrl=e.counter:t.counterNumber=r}t.title=e.title||t.title,t.url=e.url||t.url}},{key:"initHtml",value:function(){var t=this.options,e=this.widget,r=e.innerHTML;e.addEventListener("click",this.click.bind(this)),e.classList.remove(this.service),e.className+=" "+this.className("widget");var u=n.i(o.template)(l,{className:this.className("button"),content:r}),c=n.i(o.template)(l,{className:this.className("icon"),content:n.i(i.wrapSVG)(t.svgIconPath)});e.innerHTML=c+u}},{key:"initCounter",value:function(){var t=this.options;t.counters&&t.counterNumber?this.updateCounter(t.counterNumber):t.counterUrl&&n.i(c.a)(this.service,t.url,t)(this.updateCounter.bind(this))}},{key:"className",value:function(t){var e=u.default.prefix+t;return e+" "+e+"_"+this.service}},{key:"updateCounter",value:function(t){var e=parseInt(t,10)||0,r=n.i(i.find)("."+u.default.name+"__counter",this.widget);r&&r.parentNode.removeChild(r);var c={className:this.className("counter"),content:e};e||this.options.zeroes||(c.className+=" "+u.default.prefix+"counter_empty",c.content=""),this.widget.appendChild(n.i(i.createNode)(n.i(o.template)(l,c))),this.likely.updateCounter(this.service,e)}},{key:"click",value:function(){var t=this.options;if(t.click.call(this)){var e=n.i(o.makeUrl)(t.popupUrl,{url:t.url,title:t.title});if(t.openPopup===!1)return n.i(i.createTempLink)(this.addAdditionalParamsToUrl(e)),!1;n.i(i.openPopup)(this.addAdditionalParamsToUrl(e),u.default.prefix+this.service,t.popupWidth,t.popupHeight)}return!1}},{key:"addAdditionalParamsToUrl",value:function(t){var e=n.i(o.query)(n.i(o.merge)(this.widget.dataset,this.options.data)),r=t.indexOf("?")===-1?"?":"&";return""===e?t:t+r+e}}]),t}();e.a=p},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a=function(t){var e=[];return function(n){var i="undefined"==typeof n?"undefined":r(n);return"undefined"===i?t:void("function"===i?e.push(n):(t=n,e.forEach(function(t){t(n)})))}}},function(t,e,n){"use strict";var r=n(6),i=n(0),o=n(3),u={};e.a=function(t,e,c){u[t]||(u[t]={});var a=u[t],s=a[e];if(!c.forceUpdate&&s)return s;s=n.i(r.a)();var l=n.i(i.makeUrl)(c.counterUrl,{url:e});return o.a[t].counter(l,s,e),a[e]=s,s}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=[],i=function(){r.forEach(function(t){t()})},o=function(){var t=window.history.pushState;window.history.pushState=function(){return setTimeout(i,0),t.apply(window.history,arguments)};var e=window.history.replaceState;window.history.replaceState=function(){return setTimeout(i,0),e.apply(window.history,arguments)},window.addEventListener("popstate",i)},u=!1,c={onUrlChange:function(t){u||(o(),u=!0),r.push(t)}};e.default=c},function(t,e,n){"use strict";var r=n(1),i=function(t,e){var i=this;n.i(r.getJSON)(t,function(t){try{var n="function"==typeof i.convertNumber?i.convertNumber(t):t;e(n)}catch(t){}})};e.a=function(t){t.counter=r.global.__likelyCounterMock||t.counter||i,t.click=t.click||function(){return!0}}},function(t,e,n){"use strict";e.a={counterUrl:"https://graph.facebook.com/?id={url}&callback=?",convertNumber:function(t){return t.share.share_count},popupUrl:"https://www.facebook.com/sharer/sharer.php?u={url}",popupWidth:600,popupHeight:500,svgIconPath:"15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"}},function(t,e,n){"use strict";e.a={counterUrl:"https://clients6.google.com/rpc",counter:function(t,e,n){var r=new XMLHttpRequest;r.open("POST",t),r.setRequestHeader("Content-Type","application/json"),r.addEventListener("load",function(){var t=JSON.parse(r.responseText)[0].result.metadata.globalCounts.count;e(t)}),r.send(JSON.stringify([{method:"pos.plusones.get",id:"p",params:{nolog:!0,id:n,source:"widget",userId:"@viewer",groupId:"@self"},jsonrpc:"2.0",key:"p",apiVersion:"v1"}]))},popupUrl:"https://plus.google.com/share?url={url}",popupWidth:700,popupHeight:500,svgIconPath:"8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8"}},function(t,e,n){"use strict";e.a={counterUrl:"https://www.linkedin.com/countserv/count/share?url={url}&format=jsonp&callback=?",convertNumber:function(t){return t.count},popupUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}",popupWidth:600,popupHeight:500,svgIconPath:"2.4,6h2.4v7.6H2.4V6z M3.6,2.2c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5C2.8,5,2.2,4.3,2.2,3.6C2.2,2.8,2.8,2.2,3.6,2.2C3.6,2.2,3.6,2.2,3.6,2.2 M6.2,6h2.3v1h0C9,6.2,9.9,5.8,10.8,5.8c2.4,0,2.8,1.6,2.8,3.6v4.2h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6z M13,0H3C1,0,0,1,0,3v10c0,2,1,3,3,3h10c2,0,3-1,3-3V3C16,1,15,0,13,0z"}},function(t,e,n){"use strict";var r=n(1),i=n(0),o={counterUrl:"https://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",counter:function(t,e){this.promises.push(e),n.i(r.getScript)(n.i(i.makeUrl)(t,{index:this.promises.length-1}))},promises:[],popupUrl:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",popupWidth:640,popupHeight:400,svgIconPath:"8 6.107c.888 0 1.607-.72 1.607-1.607 0-.888-.72-1.607-1.607-1.607s-1.607.72-1.607 1.607c0 .888.72 1.607 1.607 1.607zM13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zM8 .75c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75S4.25 6.57 4.25 4.5C4.25 2.43 5.93.75 8 .75zm3.826 12.634c.42.42.42 1.097 0 1.515-.21.208-.483.313-.758.313-.274 0-.548-.105-.758-.314L8 12.59 5.69 14.9c-.42.418-1.098.418-1.516 0s-.42-1.098 0-1.516L6.357 11.2c-1.303-.386-2.288-1.073-2.337-1.11-.473-.354-.57-1.025-.214-1.5.354-.47 1.022-.567 1.496-.216.03.022 1.4.946 2.698.946 1.31 0 2.682-.934 2.693-.943.474-.355 1.146-.258 1.5.213.355.474.26 1.146-.214 1.5-.05.036-1.035.723-2.338 1.11l2.184 2.184"};n.i(i.set)(r.global,"ODKL.updateCount",function(t,e){o.promises[t](e)}),e.a=o},function(t,e,n){"use strict";e.a={counterUrl:"https://api.pinterest.com/v1/urls/count.json?url={url}&callback=?",convertNumber:function(t){return t.count},popupUrl:"https://pinterest.com/pin/create/button/?url={url}&description={title}",popupWidth:630,popupHeight:270,svgIconPath:"7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8"}},function(t,e,n){"use strict";e.a={popupUrl:"https://telegram.me/share/url?url={url}",popupWidth:600,popupHeight:500,svgIconPath:"6,11.960784l-1,-3l11,-8l-15.378,5.914c0,0 -0.672,0.23 -0.619,0.655c0.053,0.425 0.602,0.619 0.602,0.619l3.575,1.203l1.62,5.154l2.742,-2.411l-0.007,-0.005l3.607,2.766c0.973,0.425 1.327,-0.46 1.327,-0.46l2.531,-13.435l-10,11z"}},function(t,e,n){"use strict";e.a={popupUrl:"https://twitter.com/intent/tweet?url={url}&text={title}",popupWidth:600,popupHeight:450,click:function(){return/[\.\?:\-–—]\s*$/.test(this.options.title)||(this.options.title+=":"),!0},svgIconPath:"15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353"}},function(t,e,n){"use strict";var r=n(1),i=n(0),o={counterUrl:"https://vk.com/share.php?act=count&url={url}&index={index}",counter:function(t,e){this.promises.push(e),n.i(r.getScript)(n.i(i.makeUrl)(t,{index:this.promises.length-1}))},promises:[],popupUrl:"https://vk.com/share.php?url={url}&title={title}",popupWidth:550,popupHeight:330,svgIconPath:"7.828 12.526h.957s.288-.032.436-.19c.14-.147.14-.42.14-.42s-.02-1.284.58-1.473c.59-.187 1.34 1.24 2.14 1.788.61.42 1.07.33 1.07.33l2.14-.03s1.12-.07.59-.95c-.04-.07-.3-.65-1.58-1.84-1.34-1.24-1.16-1.04.45-3.19.98-1.31 1.38-2.11 1.25-2.45-.11-.32-.84-.24-.84-.24l-2.4.02s-.18-.02-.31.06-.21.26-.21.26-.38 1.02-.89 1.88C10.27 7.9 9.84 8 9.67 7.88c-.403-.26-.3-1.053-.3-1.62 0-1.76.27-2.5-.52-2.69-.26-.06-.454-.1-1.123-.11-.86-.01-1.585.006-1.996.207-.27.135-.48.434-.36.45.16.02.52.098.71.358.25.337.24 1.09.24 1.09s.14 2.077-.33 2.335c-.33.174-.77-.187-1.73-1.837-.49-.84-.86-1.78-.86-1.78s-.07-.17-.2-.27c-.15-.11-.37-.15-.37-.15l-2.29.02s-.34.01-.46.16c-.11.13-.01.41-.01.41s1.79 4.19 3.82 6.3c1.86 1.935 3.97 1.81 3.97 1.81"};n.i(i.set)(r.global,"VK.Share.count",function(t,e){o.promises[t](e)}),e.a=o},function(t,e,n){"use strict";e.a={popupUrl:"whatsapp://send?text={title}%0D%0A%0D%0A{url}",openPopup:!1,svgIconPath:"8.0292969 0 C 3.6412969 0 0.06940625 3.5557344 0.06640625 7.9277344 C 0.06640625 9.3247344 0.43385936 10.688578 1.1308594 11.892578 L 0 16 L 4.2226562 14.898438 C 5.3866562 15.528438 6.6962969 15.862281 8.0292969 15.863281 L 8.0332031 15.863281 C 12.423199 15.863281 15.998 12.306594 16 7.9335938 C 16 5.8165938 15.172922 3.8222186 13.669922 2.3242188 L 13.679688 2.3007812 C 12.159653 0.8307817 10.159297 -2.9605947e-016 8.0292969 0 z M 4.4589844 3.2382812 C 4.6263665 3.2382813 4.7936277 3.2373139 4.9394531 3.25 C 5.095423 3.25 5.306878 3.189055 5.5097656 3.6835938 C 5.7202615 4.1781321 6.2237071 5.418117 6.2871094 5.5449219 C 6.3505124 5.6717267 6.3922846 5.8107546 6.3085938 5.9882812 C 6.2223663 6.1531272 6.1809093 6.2560375 6.0566406 6.4082031 C 5.9298358 6.560369 5.7918587 6.7393913 5.6777344 6.8535156 C 5.5509298 6.9803204 5.4193132 7.1174841 5.5664062 7.3710938 C 5.7147679 7.6247032 6.220019 8.4490288 6.9707031 9.1210938 C 7.9344191 9.9833661 8.7483437 10.250149 9.0019531 10.376953 C 9.2530266 10.491078 9.3997816 10.477349 9.546875 10.3125 C 9.6939686 10.145117 10.178322 9.5818366 10.345703 9.3320312 C 10.514354 9.0784218 10.683278 9.1181658 10.914062 9.203125 C 11.146116 9.286816 12.383111 9.8946797 12.636719 10.021484 L 12.646484 9.9589844 C 12.900093 10.073108 13.06355 10.137829 13.126953 10.251953 C 13.190353 10.366078 13.192128 10.859096 12.976562 11.455078 C 12.766067 12.05106 11.759099 12.584074 11.273438 12.660156 C 10.838496 12.723556 10.287183 12.74881 9.6835938 12.558594 C 9.3158512 12.431788 8.8457781 12.280954 8.2421875 12.027344 C 5.7111649 10.936823 4.0584453 8.3992212 3.9316406 8.234375 C 3.8061039 8.0568483 2.9023438 6.8647716 2.9023438 5.6347656 C 2.9023438 4.4047596 3.5524185 3.7946251 3.7832031 3.5410156 C 4.0139878 3.3000865 4.2890659 3.2382812 4.4589844 3.2382812"}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),o=n(2),u=n(0),c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(e,n){r(this,t),this.container=e,this.options=n,this.countersLeft=0,this.buttons=[],this.number=0,this.init()}return c(t,[{key:"init",value:function(){n.i(u.toArray)(this.container.children).forEach(this.addButton.bind(this)),this.options.counters?(this.timer=setTimeout(this.appear.bind(this),this.options.wait),this.timeout=setTimeout(this.ready.bind(this),this.options.timeout)):this.appear()}},{key:"addButton",value:function(t){var e=new i.a(t,this,this.options);this.buttons.push(e),e.options.counterUrl&&this.countersLeft++}},{key:"update",value:function(t){(t.forceUpdate||t.url&&t.url!==this.options.url)&&(this.countersLeft=this.buttons.length,this.number=0,this.buttons.forEach(function(e){e.update(t)}))}},{key:"updateCounter",value:function(t,e){e&&(this.number+=e),this.countersLeft--,0===this.countersLeft&&(this.appear(),this.ready())}},{key:"appear",value:function(){this.container.classList.add(o.default.name+"_visible")}},{key:"ready",value:function(){this.timeout&&(clearTimeout(this.timeout),this.container.classList.add(o.default.name+"_ready"))}}]),t}();e.default=a},function(t,e,n){var r=n(4);window.addEventListener("load",function(){r.initiate()}),t.exports=r}])});
