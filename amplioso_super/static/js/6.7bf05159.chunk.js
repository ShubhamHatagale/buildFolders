(this.webpackJsonpamplioso=this.webpackJsonpamplioso||[]).push([[6],{1257:function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return S})),n.d(t,"getFCP",(function(){return g})),n.d(t,"getFID",(function(){return C})),n.d(t,"getLCP",(function(){return P})),n.d(t,"getTTFB",(function(){return D}));var i,r,a,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},s=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},f=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},d="function"==typeof WeakSet?new WeakSet:new Set,m=function(e,t,n){var i;return function(){t.value>=0&&(n||d.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},v=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},l=function(){s((function(e){var t=e.timeStamp;v=t}),!0)},h=function(){return v<0&&(v=p(),l(),f((function(){setTimeout((function(){v=p(),l()}),0)}))),{get firstHiddenTime(){return v}}},g=function(e,t){var n,i=h(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(s&&s.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),d.add(r),n()))},o=performance.getEntriesByName("first-contentful-paint")[0],s=o?null:c("paint",a);(o||s)&&(n=m(e,r,t),o&&a(o),f((function(i){r=u("FCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,d.add(r),n()}))}))})))},T=!1,y=-1,S=function(e,t){T||(g((function(e){y=e.value})),T=!0);var n,i=function(t){y>-1&&e(t)},r=u("CLS",0),a=0,o=[],d=function(e){if(!e.hadRecentInput){var t=o[0],i=o[o.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]),a>r.value&&(r.value=a,r.entries=o,n())}},v=c("layout-shift",d);v&&(n=m(i,r,t),s((function(){v.takeRecords().map(d),n()})),f((function(){a=0,y=-1,r=u("CLS",0),n=m(i,r,t)})))},E={passive:!0,capture:!0},w=new Date,L=function(e,t){i||(i=t,r=e,a=new Date,k(removeEventListener),b())},b=function(){if(r>=0&&r<a-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(t){t(e)})),o=[]}},F=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){L(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,E),removeEventListener("pointercancel",i,E)};addEventListener("pointerup",n,E),addEventListener("pointercancel",i,E)}(t,e):L(t,e)}},k=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,F,E)}))},C=function(e,t){var n,a=h(),v=u("FID"),p=function(e){e.startTime<a.firstHiddenTime&&(v.value=e.processingStart-e.startTime,v.entries.push(e),d.add(v),n())},l=c("first-input",p);n=m(e,v,t),l&&s((function(){l.takeRecords().map(p),l.disconnect()}),!0),l&&f((function(){var a;v=u("FID"),n=m(e,v,t),o=[],r=-1,i=null,k(addEventListener),a=p,o.push(a),b()}))},P=function(e,t){var n,i=h(),r=u("LCP"),a=function(e){var t=e.startTime;t<i.firstHiddenTime&&(r.value=t,r.entries.push(e)),n()},o=c("largest-contentful-paint",a);if(o){n=m(e,r,t);var v=function(){d.has(r)||(o.takeRecords().map(a),o.disconnect(),d.add(r),n())};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),s(v,!0),f((function(i){r=u("LCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,d.add(r),n()}))}))}))}},D=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}}}]);
//# sourceMappingURL=6.7bf05159.chunk.js.map