"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>w});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var n=o.createContext({}),c=function(e){var t=o.useContext(n),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(n.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,n=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),w=i,m=d["".concat(n,".").concat(w)]||d[w]||p[w]||l;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function w(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var s={};for(var n in t)hasOwnProperty.call(t,n)&&(s[n]=t[n]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<l;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48692:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>n,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=r(87462),i=(r(67294),r(3905));const l={sidebar_position:1},a="Serverless Hacks",s={unversionedId:"videos/intro",id:"videos/intro",title:"Serverless Hacks",description:"Watch The Serverless Hacks Walkthrough playlist on YouTube!",source:"@site/docs/videos/intro.md",sourceDirName:"videos",slug:"/videos/intro",permalink:"/Cloud-Native/docs/videos/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Videos",permalink:"/Cloud-Native/docs/category/videos"}},n={},c=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Setup: Local Env",id:"2-setup-local-env",level:2},{value:"3. Build: Hello World",id:"3-build-hello-world",level:2},{value:"4. Provision: Resources",id:"4-provision-resources",level:2},{value:"5. Configure: Settings",id:"5-configure-settings",level:2},{value:"6. Deploy: Use VSCode",id:"6-deploy-use-vscode",level:2},{value:"7. Use: Azure Functions",id:"7-use-azure-functions",level:2},{value:"8. Use: App Insights",id:"8-use-app-insights",level:2},{value:"9. Use: Logic Apps",id:"9-use-logic-apps",level:2},{value:"10. Debug: View Errors",id:"10-debug-view-errors",level:2},{value:"11. Query: Cosmos DB",id:"11-query-cosmos-db",level:2},{value:"12. It&#39;s a Wrap!",id:"12-its-a-wrap",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"serverless-hacks"},"Serverless Hacks"),(0,i.kt)("admonition",{title:"VIDEO PLAYLIST",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Watch ",(0,i.kt)("a",{parentName:"p",href:"https://aka.ms/serverless-september/videos"},"The Serverless Hacks Walkthrough")," playlist on YouTube!")),(0,i.kt)("p",null,"In this series of 12 videos, Microsoft Cloud Advocate ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/madebygps"}," Gwyneth Pe\xf1a-Siguenza ")," walks you through building a .NET version of a Tollbooth app using Azure technologies as one approach to the ",(0,i.kt)("strong",{parentName:"p"},"Serverless Hacks")," Challenge."),(0,i.kt)("p",null,"Then:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Join the ",(0,i.kt)("a",{parentName:"li",href:"/serverless-september/ServerlessHacks#-complete-hacks"},"Serverless Hacks Challenge")),(0,i.kt)("li",{parentName:"ul"},"Attend ",(0,i.kt)("a",{parentName:"li",href:"/serverless-september/ServerlessHacks#-join-the-hack"},"Weekly Office Hours")," with Gwyn & guests."),(0,i.kt)("li",{parentName:"ul"},"Submit your hack ",(0,i.kt)("a",{parentName:"li",href:"/serverless-september/ServerlessHacks"},"to our Hall Of Fame"),"!")),(0,i.kt)("p",null,"Don't forget to bring your questions and insights to the weekly office hours to keep going. Explore the walkthrough videos below for inspiration."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"1-overview"},"1. Overview"),(0,i.kt)("iframe",{width:"600",height:"330",src:"https://www.youtube.com/embed/ABwDOd7K5is?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP",title:"Build a TollBooth app with Azure Serverless architecture [1/12]",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"2-setup-local-env"},"2. Setup: Local Env"),(0,i.kt)("iframe",{width:"600",height:"330",src:"https://www.youtube.com/embed/2FlJ7mI25aw?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP",title:"How to set up our local development environment [2 of 12]",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"3-build-hello-world"},"3. Build: Hello World"),(0,i.kt)("iframe",{width:"600",height:"330",src:"https://www.youtube.com/embed/K9wBqx6tnbo?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP",title:"How to create a Hello World Serverless Function locally [3 of 12]",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"4-provision-resources"},"4. Provision: Resources"),(0,i.kt)("iframe",{width:"600",height:"330",src:"https://www.youtube.com/embed/ZtogSgccj3c?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP",title:"How to provision resources in the Azure Portal [4 of 12]",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"5-configure-settings"},"5. Configure: Settings"),(0,i.kt)("iframe",{width:"600",height:"330",src:"https://www.youtube.com/embed/nlLVzKwZ9Vg?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP",title:"How to configure application settings in the Azure Portal [5 of 12]",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"6-deploy-use-vscode"},"6. Deploy: Use VSCode"),(0,i.kt)("iframe",{width:"600",height:"330",src:"https://www.youtube.com/embed/nJyOfvJ_JQY?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP",title:"How to deploy local serverless app to Azure with VS Code [6 of 12]",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"7-use-azure-functions"},"7. Use: Azure Functions"),(0,i.kt)("iframe",{width:"600",height:"330",src:"https://www.youtube.com/embed/GRVCGCUL5l4?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP",title:"How to create a Node.js Azure Function in the Azure Portal [7 of 12]",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"8-use-app-insights"},"8. Use: App Insights"),(0,i.kt)("iframe",{width:"600",height:"330",src:"https://www.youtube.com/embed/egie30wCQpk?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP",title:"How to integrate Azure Functions with Application Insights [8 of 12]",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"9-use-logic-apps"},"9. Use: Logic Apps"),(0,i.kt)("iframe",{width:"600",height:"330",src:"https://www.youtube.com/embed/vF6JI9wgEEw?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP",title:"How to build a Data Export Workflow with Azure Logic Apps and Azure Functions [9 of 12]",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"10-debug-view-errors"},"10. Debug: View Errors"),(0,i.kt)("iframe",{width:"600",height:"330",src:"https://www.youtube.com/embed/uPIoqxkxa50?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP",title:"How to view Azure Functions scaling errors in Application insights [10 of 12]",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"11-query-cosmos-db"},"11. Query: Cosmos DB"),(0,i.kt)("iframe",{width:"600",height:"330",src:"https://www.youtube.com/embed/q3PG-Gefvtw?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP",title:"How to query SQL data in Azure Cosmos DB from the portal [11 of 12]",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"12-its-a-wrap"},"12. It's a Wrap!"),(0,i.kt)("iframe",{width:"600",height:"330",src:"https://www.youtube.com/embed/DeNSa5VikVQ?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP",title:"Completing the WhatTheHack Serverless Project [12 of 12]",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);