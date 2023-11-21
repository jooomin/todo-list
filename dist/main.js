(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),c=t(645),a=t.n(c)()(r());a.push([e.id,"body {\n  margin: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 80px 1fr 50px;\n  /* Header, Main Content, Footer */\n  min-height: 100vh;\n}\n\nheader,\nfooter {\n  background-color: #333;\n  color: white;\n  padding: 10px;\n  gap: 10px;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n}\n\n#header-title {\n  font-size: 40px;\n}\n\n#app-logo {\n  height: 30px;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 200px minmax(500px, 1fr);\n\n  /* min-height: 100%; */\n  background-color: #ccc;\n  /* overflow-y: auto; Enable vertical scrollbar if needed */\n}\n\n#sidebar {\n  display: grid;\n  grid-template-rows: repeat(4, 6%) auto;\n  gap: 10px;\n\n  background-color: red;\n  padding: 10px;\n}\n\n.sidebar-button {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  background-color: transparent;\n  border: none;\n}\n\n.sidebar-button:hover {\n  cursor: pointer;\n\n  background-color: #ccc;\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.sidebar-button.active{\n  background-color: #ccc;\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.sidebar-icon {\n  height: 30px;\n}\n\n#notes-view {\n  background-color: blue;\n  padding: 10px;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n\n  bottom: 0;\n  left: 0;\n\n  width: 100%;\n}\n\n#creator {\n  display: flex;\n  align-items: center;\n  margin: 0;\n\n  font-size: 15px;\n}\n\n#github-logo {\n  height: 30px;\n  transition: transform 0.3s ease;\n}\n\n#github-logo:hover {\n  transform: scale(1.2) rotate(360deg);\n}\n\n#popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  z-index: 1000; /* Set a high z-index value */\n}\n",""]);const i=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=c[s]||0,p="".concat(s," ").concat(l);c[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=t(c[a]);n[i].references--}for(var d=o(e,r),s=0;s<c.length;s++){var l=t(c[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var c=n[o]={id:o,exports:{}};return e[o](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"97ed8e7eef60d61ca469.svg";function n(){const e=document.getElementById("project-name").value;e?alert(`Project added!\nProject name: ${e}`):alert("Please fill out all fields.")}function o(){const e=document.getElementById("popup");e&&document.body.removeChild(e)}function r(){const t=document.createElement("main");return t.append(function(){const t=document.createElement("div");return t.id="sidebar",t.append(function(){const n=document.createElement("button");n.classList.add("sidebar-button");const t=new Image;t.classList.add("sidebar-icon"),t.src=e;const o=document.createElement("p");return o.textContent="Inbox",n.append(t),n.append(o),n.addEventListener("click",(e=>{console.log("Inbox button has been clicked"),c(n),function(){const e=document.getElementById("notes-view");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.id="inbox";const n=document.createElement("h2");return n.id="inbox-title",n.textContent="Inbox",e.appendChild(n),e}())}()})),n}()),t.append(function(){const n=document.createElement("button");n.classList.add("sidebar-button");const t=new Image;t.classList.add("sidebar-icon"),t.src=e;const o=document.createElement("p");return o.textContent="Today",n.append(t),n.append(o),n.addEventListener("click",(e=>{console.log("Today button has been clicked"),c(n),function(){const e=document.getElementById("notes-view");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.id="today";const n=document.createElement("h2");return n.id="today-title",n.textContent="Today",e.appendChild(n),e}())}()})),n}()),t.append(function(){const n=document.createElement("button");n.classList.add("sidebar-button");const t=new Image;t.classList.add("sidebar-icon"),t.src=e;const o=document.createElement("p");return o.textContent="This Week",n.append(t),n.append(o),n.addEventListener("click",(e=>{console.log("This Week button has been clicked"),c(n),function(){const e=document.getElementById("notes-view");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.id="this-week";const n=document.createElement("h2");return n.id="this-week-title",n.textContent="This Week",e.appendChild(n),e}())}()})),n}()),t.append(function(){const t=document.createElement("button");t.classList.add("sidebar-button");const r=new Image;r.classList.add("sidebar-icon"),r.src=e;const c=document.createElement("p");return c.textContent="Add Project",t.append(r),t.append(c),t.addEventListener("click",(e=>{console.log("Add Project button has been clicked"),function(){const e=document.createElement("div");e.id="popup";const t=function(){const e=document.createElement("form");e.id="add-project-form";const t=document.createElement("label");t.textContent="Project Name:",e.appendChild(t);const r=document.createElement("input");r.type="text",r.id="project-name",r.name="name",e.appendChild(r),e.appendChild(document.createElement("br"));const c=document.createElement("button");c.type="button",c.textContent="Add",c.addEventListener("click",n),e.appendChild(c);const a=document.createElement("button");return a.textContent="Close",a.addEventListener("click",o),e.appendChild(a),e}();e.appendChild(t),document.body.appendChild(e)}()})),t}()),t}()),t.append(function(){const e=document.createElement("div");return e.id="notes-view",e}()),t}function c(e){document.querySelectorAll(".sidebar-button").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}var a=t(379),i=t.n(a),d=t(795),s=t.n(d),l=t(569),p=t.n(l),u=t(565),m=t.n(u),f=t(216),h=t.n(f),b=t(589),g=t.n(b),v=t(426),x={};x.styleTagTransform=g(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=h(),i()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals,function(){const n=document.getElementById("content");n.appendChild(function(){const n=document.createElement("header"),t=document.createElement("p");t.id="header-title",t.textContent="Todo List";const o=new Image;return o.id="app-logo",o.src=e,n.appendChild(t),n.appendChild(o),n}()),n.appendChild(r()),n.appendChild(function(){const n=document.createElement("footer");n.id="footer";const t=document.createElement("p");t.id="creator",t.textContent="Created by jooomin";const o=document.createElement("a");o.setAttribute("href","https://github.com/jooomin");const r=new Image;return r.id="github-logo",r.src=e,n.append(t),n.append(o),o.append(r),n}())}()})()})();