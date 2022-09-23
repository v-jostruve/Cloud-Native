"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3099],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),m=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=m(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=m(r),u=n,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return r?a.createElement(f,i(i({ref:e},s),{},{components:r})):a.createElement(f,i({ref:e},s))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43274:(t,e,r)=>{r.r(e),r.d(e,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"Zero to Hero"},i="Zero To Hero",p={type:"mdx",permalink:"/Cloud-Native/serverless-september/ZeroToHero",source:"@site/src/pages/serverless-september/ZeroToHero.md",title:"Zero to Hero",description:"Zero-to-Hero is a series of blog posts from our Product Engineering teams, that will be published on the Microsoft Tech Community: Apps On Azure blog and links updated below for convenience.",frontMatter:{title:"Zero to Hero"}},l=[{value:"Azure Functions",id:"azure-functions",level:2},{value:"Azure Container Apps",id:"azure-container-apps",level:2}],m={toc:l};function s(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"zero-to-hero"},"Zero To Hero"),(0,n.kt)("admonition",{title:"About This Series",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Zero-to-Hero is a series of blog posts from our ",(0,n.kt)("em",{parentName:"p"},"Product Engineering")," teams, that will be published on the ",(0,n.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/bg-p/AppsonAzureBlog?WT.mc_id=javascript-74010-ninarasi"},"Microsoft Tech Community: Apps On Azure")," blog and links updated below for convenience."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u2728 4-part series focused on developer journey from concepts to best practices."),(0,n.kt)("li",{parentName:"ul"},"\u2728 Associated ",(0,n.kt)("a",{parentName:"li",href:"AskTheExpert"},"Ask The Expert"),"live Q&A! ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://github.com/Azure/Cloud-Native/issues/new?assignees=&labels=ask+the+expert&template=---ask-the-expert-.md&title=%5BAsk+The+Expert%5D++"},(0,n.kt)("strong",{parentName:"a"},"Submit questions early")))," for prioritization!"))),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"azure-functions"},"Azure Functions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Published On"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Topic"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Author / Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 5, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/a-walkthrough-of-durable-entities/ba-p/3616832?WT.mc_id=javascript-74010-cxa"},"A walkthrough of Durable Entities")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://devblogs.microsoft.com/azure-sdk/author/jiayma/?WT.mc_id=javascript-74010-cxa"}," Lily Ma")," ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/936926?WT.mc_id=javascript-74010-cxa"},"David Justo"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 12, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/building-serverless-go-applications-with-azure-functions-custom/ba-p/3623617?WT.mc_id=javascript-74010-cxa"},"Building serverless Go applications with Azure functions with Custom Handlers")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://twitter.com/MelonyQ"}," Melony Qin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 15, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udfa4 ",(0,n.kt)("strong",{parentName:"td"},"Ask The Expert")," ",(0,n.kt)("br",null)," Live Q&A with Azure Functions Team"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://reactor.microsoft.com/reactor/events/17000/?WT.mc_id=javascript-74010-cxa"},"\ud83c\udf1f Register Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 19, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error Handling with Kafka extension  - and what's new with the Kafka trigger"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://twitter.com/ramyaoncloud"},"Ramya Oruganti"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 26, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},"How to monitor and troubleshoot applications in Azure Functions"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://twitter.com/madhura0110"}," Madhura Bharadwaj"))))),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"azure-container-apps"},"Azure Container Apps"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Published On"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Topic"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Author"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 5, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/go-cloud-native-with-azure-container-apps/ba-p/3616407"},"Go Cloud Native With Azure Container Apps")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://twitter.com/KendallRoden?WT.mc_id=javascript-74010-cxa"},"Kendall Roden"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 12, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/journey-to-the-cloud-with-azure-container-apps/ba-p/3622609?WT.mc_id=javascript-74010-cxa"},"Journey to the cloud with Azure Container Apps")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://twitter.com/nthonyChu"},"Anthony Chu"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 19, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Azure Container Apps observability"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://twitter.com/BigMorty"},"Mike Morton"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 26, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},"End-to-End solution development with code"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://twitter.com/KendallRoden"},"Kendall Roden"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sep 29, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udfa4 ",(0,n.kt)("strong",{parentName:"td"},"Ask The Expert"),"  ",(0,n.kt)("br",null)," Live Q&A with Azure Container Apps Team"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://reactor.microsoft.com/reactor/events/17000/?WT.mc_id=javascript-74010-cxa"},"\ud83c\udf1f Register Now"))))))}s.isMDXComponent=!0}}]);