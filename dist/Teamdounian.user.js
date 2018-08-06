// ==UserScript==
// @name         teamdounian
// @namespace    https://github.com/libook
// @version      1.1.0
// @description  Tools for teambition
// @author       libook7@gmail.com
// @match        https://www.teambition.com/project/*/tasks/scrum/*
// @grant        none
// ==/UserScript==
// 为了便于维护和提升运行效率，执行脚本进行了合并和压缩，完整源代码在GitHub上
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class o{constructor(){this.element=document.createElement("span"),this.element.id="toolb-entrance",this.element.className="logo",this.element.textContent="¯\\_(ツ)_/¯逗年TB工具箱",this.element.addEventListener("click",e=>{e.stopPropagation()});Object.assign(this.element.style,{fontWeight:900});let e=document.querySelector('span[class^="logo"]');e.parentElement.replaceChild(this.element,e);try{document.querySelector('div[class^="trigger"]').remove()}catch(e){}return this.element}}class r{constructor(e){const t=document.getElementById("toolb-menu");t&&t.remove(),this.element=document.createElement("div"),this.element.id="toolb-menu",this.element.className="toolb";const n=e.getBoundingClientRect(),o={zIndex:1e3,position:"fixed",color:"gray",backgroundColor:"white",top:n.bottom+"px",left:n.left+"px",display:"none",boxShadow:"0 2px 12px 0 rgba(0,0,0,.12)",borderRadius:"4px"};return Object.assign(this.element.style,o),e.addEventListener("mouseover",()=>{this.element.style.display="block"}),this.element.addEventListener("mouseleave",()=>{this.element.style.display="none"}),window.addEventListener("resize",()=>{const t=e.getBoundingClientRect();this.element.style.top=t.bottom+"px",this.element.style.left=t.left+"px"}),document.body.appendChild(this.element),this.element}}class s{constructor(e){this.element=document.createElement("a");return this.element.addEventListener("mouseover",()=>{this.element.style.backgroundColor="#eee"}),this.element.addEventListener("mouseleave",()=>{this.element.style.backgroundColor="white"}),Object.assign(this.element.style,{color:"gray",backgroundColor:"white",lineHeight:"14px",fontSize:"14px",fontFamily:"Helvetica Neue,PingFang SC,Microsoft Yahei,微软雅黑,STXihei,华文细黑,sans-serif",left:"50%",margin:"8px 8px 0 8px",padding:"8px 8px 8px 8px",textAlign:"center",borderRadius:"4px"}),e.appendChild(this.element),this.element}}function l(){let e,t,n;const o=window.location.href.split("/");for(let r=0;r<o.length;r++)switch(o[r]){case"project":e=o[r+1];break;case"scrum":t=o[r+1];break;case"task":n=o[r+1]}return{projectId:e,scrumId:t,taskId:n}}class c{constructor(e){const t=function(t,n){const o=new s(e);o.text=t,o.addEventListener("click",()=>{document.querySelector(n).scrollIntoView()})};fetch(`https://www.teambition.com/api/stages?_tasklistId=${l().scrumId}&_=${Date.now()}`).then(e=>e.json()).then(e=>{for(let n of e)n.name.indexOf("※")>=0&&t(n.name.replace(/※/,""),`[data-id="${n._id}"]`)})}}function i(){return document.querySelector('div[class^="user-info-trigger"]>span').attributes.style.value}class a{constructor(e){for(let e=0;e<2;e++)document.querySelector("a.nav-menu-handler[data-menu=filter]").click();const t=document.querySelector(`div.filter-category>ul.list>li.member-wrap>span[style='${i()}']`),n=new s(e);n.text="只看我自己",n.addEventListener("click",()=>{t.click()})}}let d;class u{constructor(){d&&window.clearInterval(d);d=window.setInterval(function(){const e=document.querySelectorAll(`\n                            #content > \n                            div.project-app-view > \n                            div > \n                            div > \n                            ul > \n                            li > \n                            div > \n                            section > \n                            ul.scrum-stage-tasks > \n                            li > \n                            div > \n                            div.task-content-set > \n                            header > \n                            span[style='${i()}']\n                            `);for(let t of e)t.parentElement.parentElement.parentElement.style.backgroundColor="yellow"},2e3)}}class m{constructor(e){const t=new s(e);t.text="设置开始时间为现在",t.addEventListener("click",()=>{const{taskId:e}=l();e?fetch(`https://www.teambition.com/api/tasks/${e}`,{method:"PUT",body:JSON.stringify({startDate:(new Date).toISOString()}),headers:new Headers({"Content-Type":"application/json"})}).then(e=>e.json()).catch(e=>console.error("Error:",e)).then(e=>console.log("Success:",e)):alert("请先打开一个任务。")})}}class p{constructor(e){const t=document.createElement("ul");Object.assign(t.style,{display:"flex",flexDirection:"column",paddingBottom:"8px"}),e.appendChild(t),new c(t),new a(t),new m(t),new u}}let f={};setInterval(()=>{const e=l();document.querySelector('span[class^="logo"]')&&document.querySelector(".task-card-mode")&&(f.projectId!==e.projectId||f.scrumId!==e.scrumId)&&(f=e,function(){const e=new o,t=new r(e);new p(t)}())},1e3)}]);