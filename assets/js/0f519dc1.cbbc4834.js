"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5269],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5394:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(4137));const o={title:"30 Days Of Serverless"},i="Roadmap for #30Days",s={type:"mdx",permalink:"/Cloud-Native/serverless-september/30DaysOfServerless",source:"@site/src/pages/serverless-september/30DaysOfServerless.md",title:"30 Days Of Serverless",description:"30Days",frontMatter:{title:"30 Days Of Serverless"}},l=[{value:"Welcome!",id:"welcome",level:2},{value:"Sep 1: Kickoff",id:"sep-1-kickoff",level:2},{value:"Azure Functions",id:"azure-functions",level:2},{value:"Azure Container Apps",id:"azure-container-apps",level:2},{value:"Serverless Integrations",id:"serverless-integrations",level:2},{value:"Serverless End-To-End",id:"serverless-end-to-end",level:2},{value:"Sep 30: Summary",id:"sep-30-summary",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"roadmap-for-30days"},"Roadmap for #30Days"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"welcome"},"Welcome!"),(0,n.kt)("p",null,"This is a tentative roadmap for #30DaysOfServerless, a daily content series planned for the upcoming ",(0,n.kt)("strong",{parentName:"p"},"Serverless September")," project. It's a month-long celebration of ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/solutions/serverless/?WT.mc_id=javascript-74010-ninarasi"},"Serverless On Azure")," with a curated journey that takes you from understanding core technologies to developing solutions for end-to-end scenarios - organized into 4 stages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Go Serverless")," with Azure Functions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Deploy Microservices")," with Azure Container Apps"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Simplify Integrations")," with Azure Event Grid & Logic Apps"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Build End-to-End Solutions")," using familiar Dev Tools & Languages")),(0,n.kt)("admonition",{title:"\ud83d\udea8 SEP 08: CHANGE IN PUBLISHING SCHEDULE",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Starting from Week 2 (Sep 8), we'll be publishing blog posts in ",(0,n.kt)("em",{parentName:"p"},"batches")," rather than on a daily basis, so you can read a series of related posts together. ",(0,n.kt)("em",{parentName:"p"},"Don't want to miss updates?")," Just ",(0,n.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/blog/rss.xml"},"subscribe to the feed"))),(0,n.kt)("p",null,"Here are some actions you can take in the meantime:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit our ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/Cloud-Native/discussions"},"Discussions")," board and leave us feedback or requests under the #30DaysOfServerless topic!"),(0,n.kt)("li",{parentName:"ul"},"Register for the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-74010-ninarasi"},"Cloud Skills Challenge"),"."),(0,n.kt)("li",{parentName:"ul"},"Check out the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/users/leannturpin-6614/collections/kjqpsnzg4opdo2?WT.mc_id=javascript-74010-ninarasi"},"official Serverless September collection")," of learning modules and don't forget to ")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"sep-1-kickoff"},"Sep 1: Kickoff"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Welcome to our September Serverless kickoff!!")," Our Serverless September officially kicks off on September 1, 2022. However, we'll be sharing a few posts ahead of time, to share more information about the many awesome initiatives we are planning for you."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Kickoff",src:a(9931).Z,width:"1500",height:"630"})),(0,n.kt)("admonition",{title:"SERVERLESS SEPTEMBER INITIATIVES",type:"success"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/serverless-september/30DaysOfServerless"},(0,n.kt)("strong",{parentName:"a"},"30DaysOfServerless"))," - daily blog posts on this site and ",(0,n.kt)("a",{parentName:"li",href:"https://dev.to/azure"},"dev.to/azure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/serverless-september/ServerlessHacks"},(0,n.kt)("strong",{parentName:"a"},"Serverless Hacks"))," - weekly hack sessions at ",(0,n.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/reactor/?WT.mc_id=javascript-74010-ninarasi"},"Microsoft Reactor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/serverless-september/ZeroToHero"},(0,n.kt)("strong",{parentName:"a"},"Zero To Hero"))," - 4-part blog from Product Engineering teams on ",(0,n.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/bg-p/AppsonAzureBlog?WT.mc_id=javascript-74010-ninarasi"},"Microsoft Tech Community")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/serverless-september/CloudSkills"},(0,n.kt)("strong",{parentName:"a"},"Cloud Skills Challenge"))," - Interactive skilling ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-74010-ninarasi"},"competition")," that can help with certification."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/serverless-september/AskTheExpert"},(0,n.kt)("strong",{parentName:"a"},"Ask The Expert"))," - Live 30 minute broadcast to ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/shows/ask-the-expert/?WT.mc_id=javascript-74010-ninarasi"},"get questions answered")," by product experts "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/serverless-september/CommunityBuzz"},(0,n.kt)("strong",{parentName:"a"},"Community Buzz"))," - A chance for ",(0,n.kt)("em",{parentName:"li"},"you")," to showcase your posts or apps on this site."))),(0,n.kt)("admonition",{title:"LINKS TO POSTS",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Posts will be published nightly on our main ",(0,n.kt)("a",{parentName:"p",href:"/blog"},"blog")," page. Once the post is published, we will update the corresponding items in the sections below with direct links. You can ",(0,n.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/blog/rss.xml"},"subscribe")," to the blog to get updates delivered directly to your feed reader.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"azure-functions"},"Azure Functions"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Welcome to the Week 1 of your learning journey into Serverless technologies. Let's talk about Azure Functions - what it is, core features and tools, and best practices for getting started in the programming language of your choice.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Azure Functions",src:a(3239).Z,width:"1920",height:"1080"})),(0,n.kt)("admonition",{title:"WEEK 1 - AZURE FUNCTIONS",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Posts will be linked here once published.")),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Sep 02 - ",(0,n.kt)("a",{parentName:"li",href:"/blog/02-functions-intro"},"Learn Core Concepts")),(0,n.kt)("li",{parentName:"ul"},"Sep 03 - ",(0,n.kt)("a",{parentName:"li",href:"/blog/03-functions-quickstart"},"Build Your First Function")),(0,n.kt)("li",{parentName:"ul"},"Sep 04 - ",(0,n.kt)("a",{parentName:"li",href:"/blog/04-functions-java"},"Functions for Java Developers")),(0,n.kt)("li",{parentName:"ul"},"Sep 05 - ",(0,n.kt)("a",{parentName:"li",href:"/blog/05-functions-js"},"Functions for JavaScript Developers")),(0,n.kt)("li",{parentName:"ul"},"Sep 06 - ",(0,n.kt)("a",{parentName:"li",href:"/blog/06-functions-dotnet"},"Functions for .NET Developers")),(0,n.kt)("li",{parentName:"ul"},"Sep 07 - ",(0,n.kt)("a",{parentName:"li",href:"/blog/07-functions-python"},"Functions for Python Developers")),(0,n.kt)("li",{parentName:"ul"},"Sep 08 - Functions + Serverless On Azure"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"azure-container-apps"},"Azure Container Apps"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Welcome to Week 2. You've learnt how to build event-driven serverless backends using Azure Functions. But how can you orchestrate and scale more complex solutions? The answer lies in microservice architectures and containerized apps. This week we explore Azure Container Apps (ACA) - and learn how the Distributed Application Runtime (Dapr) technology can work alongside ACA to unlock richer capabilities and simplify developer experience.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Azure Container Apps and Dapr",src:a(8198).Z,width:"1500",height:"630"})),(0,n.kt)("admonition",{title:"WEEK 2 - AZURE CONTAINER APPS & DAPR",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Posts will be linked here once published.")),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Sep 09 - Learn Core Concepts"),(0,n.kt)("li",{parentName:"ul"},"Sep 10 - Build an ACA (with/out Dapr)"),(0,n.kt)("li",{parentName:"ul"},"Sep 11 - Learn About: Communication"),(0,n.kt)("li",{parentName:"ul"},"Sep 12 - Learn About: State Management"),(0,n.kt)("li",{parentName:"ul"},"Sep 13 - Learn About: Observability"),(0,n.kt)("li",{parentName:"ul"},"Sep 14 - Learn About: Secure Access"),(0,n.kt)("li",{parentName:"ul"},"Sep 15 - ACA + Serverless On Azure"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"serverless-integrations"},"Serverless Integrations"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Welcome to Week 3 - you've learned to build serverless applications using functions and microservices, orchestrated as containerized applications. Now let's explore a few core Azure services that streamline integrations with Azure and non-Azure services in standard, scalable ways.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Week 3 Roadmap",src:a(4376).Z,width:"1500",height:"630"}),"\n",(0,n.kt)("img",{alt:"Week 3 Roadmap",src:a(9094).Z,width:"1500",height:"630"})),(0,n.kt)("admonition",{title:"WEEK 3 - AZURE EVENT GRID & AZURE LOGIC APP",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Posts will be linked here once published.")),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Sep 16 - Logic Apps: Core Concepts"),(0,n.kt)("li",{parentName:"ul"},"Sep 17 - Logic Apps: Quickstart"),(0,n.kt)("li",{parentName:"ul"},"Sep 18 - Logic Apps: Best Practices"),(0,n.kt)("li",{parentName:"ul"},"Sep 19 - Event Grid: Core Concepts"),(0,n.kt)("li",{parentName:"ul"},"Sep 20 - Event Grid: Quickstart"),(0,n.kt)("li",{parentName:"ul"},"Sep 21 - Event Grid: Best Practices"),(0,n.kt)("li",{parentName:"ul"},"Sep 22 - Integrations + Serverless On Azure"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"serverless-end-to-end"},"Serverless End-To-End"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"It's the final week of Serverless September! So far we've talked about various components of a Serverless solution on Azure. Now let's explore various end-to-end examples and learn how we can make these components work together.")),(0,n.kt)("admonition",{title:"Week 4 ARTICLES",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Posts will be linked here once published.")),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Sep 23 -  TBA"),(0,n.kt)("li",{parentName:"ul"},"Sep 24 -  TBA"),(0,n.kt)("li",{parentName:"ul"},"Sep 25 -  TBA"),(0,n.kt)("li",{parentName:"ul"},"Sep 26 -  TBA"),(0,n.kt)("li",{parentName:"ul"},"Sep 27 -  TBA"),(0,n.kt)("li",{parentName:"ul"},"Sep 28 -  TBA"),(0,n.kt)("li",{parentName:"ul"},"Sep 29 -  TBA"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Week 4 Roadmap",src:a(7402).Z,width:"1500",height:"630"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"sep-30-summary"},"Sep 30: Summary"),(0,n.kt)("admonition",{title:"THANK YOU & NEXT STEPS",type:"success"},(0,n.kt)("p",{parentName:"admonition"},"Thank you for staying the course with us. In the final two posts of this series we'll do two things:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Look Back")," - with a quick retrospective of what was covered."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Look Ahead")," - with resources and suggestions for how you can skill up further!")),(0,n.kt)("p",{parentName:"admonition"},"We appreciate your time and attention and we hope you found this curated tour valuable. Feedback and suggestions are always welcome. From our entire team, we wish you ",(0,n.kt)("strong",{parentName:"p"},"good luck with the learning journey - now go build some apps and share your knowledge!")," \ud83c\udf89")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Thank You",src:a(7250).Z,width:"1500",height:"630"})),(0,n.kt)("hr",null))}u.isMDXComponent=!0},8198:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/container-apps-73a4a741e713a9b54094d18a7692589d.png"},7250:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/empty-aa2b864a979283fe6ccf15f14224bb44.png"},7402:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/end-to-end-fbef829b88adc40d0b435b9838e09e83.png"},4376:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/event-grid-1e3af78a0f9b029d58366b73f558b852.png"},9094:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/logic-apps-4681dc57aba2ac8a22b553fecf43a5f0.png"},9931:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/post-kickoff-4a04995b44f0cc4a784fb4ab5e29cf7c.png"},3239:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/roadmap-Week1-e6f2178c0374c42ef50be53bee433ad9.png"}}]);