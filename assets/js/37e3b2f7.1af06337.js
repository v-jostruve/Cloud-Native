"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7613],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={slug:"15-microservices-azure",title:"15. ACA + Serverless On Azure",authors:["nitya","devanshi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Recap of Week 2: Microservices, Azure Container Apps and Dapr",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr"]},o=void 0,i={permalink:"/Cloud-Native/blog/15-microservices-azure",source:"@site/blog/2022-09-15/index.md",title:"15. ACA + Serverless On Azure",description:"Recap of Week 2: Microservices, Azure Container Apps and Dapr",date:"2022-09-15T00:00:00.000Z",formattedDate:"September 15, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"}],readingTime:3.54,hasTruncateMarker:!1,authors:[{name:"Nitya Narasimhan",title:"Senior Cloud Advocate, Illustrator",url:"https://github.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"},{name:"Devanshi Joshi",title:"Product Marketing Manager",url:"https://github.com/devanshidiaries",imageURL:"https://pbs.twimg.com/profile_images/1520928730230652928/00BaK5xn_400x400.jpg",key:"devanshi"}],frontMatter:{slug:"15-microservices-azure",title:"15. ACA + Serverless On Azure",authors:["nitya","devanshi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Recap of Week 2: Microservices, Azure Container Apps and Dapr",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr"]},prevItem:{title:"14. Build ACA with Dapr",permalink:"/Cloud-Native/blog/14-dapr-aca-quickstart"},nextItem:{title:"\ud83d\ude80 | Observability with ACA",permalink:"/Cloud-Native/blog/zero2hero-aca-06"}},l={image:a(4795).Z,authorsImageUrls:[void 0,void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"This Week In Events",id:"this-week-in-events",level:2},{value:"This Week in #30Days",id:"this-week-in-30days",level:2},{value:"Self Study: Code Samples &amp; Tutorials",id:"self-study-code-samples--tutorials",level:2},{value:"What&#39;s Next: Serverless Integrations!",id:"whats-next-serverless-integrations",level:2},{value:"Take the Challenge!",id:"take-the-challenge",level:2}],u={toc:p};function c(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/15-microservices-azure"}),(0,n.kt)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Azure Functions Fundamentals"}),(0,n.kt)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Azure Functions Fundamentals"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/15-microservices-azure"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Welcome to ",(0,n.kt)("inlineCode",{parentName:"p"},"Day 15")," of #30DaysOfServerless!"),(0,n.kt)("p",null,"This post marks the midpoint of our Serverless on Azure journey! Our ",(0,n.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/serverless-september/30DaysOfServerless/"},"Week 2 Roadmap")," showcased two key technologies - ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/container-apps/"},"Azure Container Apps (ACA)")," and ",(0,n.kt)("a",{parentName:"p",href:"https://dapr.io"},"Dapr")," - for building serverless microservices. We'll also look at what happened elsewhere in #ServerlessSeptember, then set the stage for our next week's focus: Serverless Integrations."),(0,n.kt)("p",null,"Ready? Let's Go!"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ICYMI"),": This Week on #ServerlessSeptember"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Recap"),": Microservices, Azure Container Apps & Dapr"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Coming Next:")," Serverless Integrations"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Exercise"),": ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-74010-ninarasi"},"Take the Cloud Skills Challenge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Resources"),": For self-study!")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4795).Z,width:"1600",height:"672"})),(0,n.kt)("h2",{id:"this-week-in-events"},"This Week In Events"),(0,n.kt)("p",null,"We had a number of activities happen this week - here's a quick summary:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On ",(0,n.kt)("strong",{parentName:"li"},"Zero To Hero:")," ",(0,n.kt)("br",null),"Anthony Chu took us on a ",(0,n.kt)("a",{parentName:"li",href:"http://localhost:3000/Cloud-Native/blog/zero2hero-aca-04"},"Journey to the Cloud with Azure Container Apps")," exploring tools to simplify develop-deploy workflows for ACA. And Melony Qin talked about ",(0,n.kt)("a",{parentName:"li",href:"http://localhost:3000/Cloud-Native/blog/zero2hero-func-03"},"Using Custom Handlers For Go"),", explaining how this allows extended languages support in Azure Functions."),(0,n.kt)("li",{parentName:"ul"},"On ",(0,n.kt)("strong",{parentName:"li"},"Serverless Hacks:"),"  ",(0,n.kt)("br",null),"Gwyn was joined by Liam Hampton as they talked about ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=EcsAcm22GqI"},"How to DevOps and Serverless The Right Way"),". And it's not too late to complete the hack and ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/serverless-september/ServerlessHacks/"},"submit your solution to our hall of fame"),"."),(0,n.kt)("li",{parentName:"ul"},"On ",(0,n.kt)("strong",{parentName:"li"},"Ask The Expert:")," ",(0,n.kt)("br",null),"We had our first Live Q&A Session featuring members of the Azure Functions team, hosted by Gwyn. Catch up on the ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=wB5Va1a-MeY"},"recording")," for useful tips and guidance.")),(0,n.kt)("h2",{id:"this-week-in-30days"},"This Week in #30Days"),(0,n.kt)("p",null,"In our #30Days series we focused on Azure Container Apps and Dapr."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/09-aca-fundamentals"},"Hello Container Apps")," we learned how Azure Container Apps helps you run microservices and containerized apps on serverless platforms. And we build and deployed our first ACA."),(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/microservices-10"},"Microservices Communication")," we explored concepts like ",(0,n.kt)("em",{parentName:"li"},"environments")," and ",(0,n.kt)("em",{parentName:"li"},"virtual networking"),", with a hands-on example to show how two microservices communicate in a deployed ACA."),(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/11-scaling-container-apps"},"Scaling Your Container Apps")," we learned about KEDA (Kubernetes Event-Driven Autoscaler) and how to configure autoscaling for your ACA based on KEDA-supported triggers."),(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/12-build-with-dapr"},"Build with Dapr")," we introduced the Distributed Application Runtime (Dapr) and learned how its Building Block APIs and sidecar architecture make it easier to develop microservices with ACA."),(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/13-aca-managed-id"},"Secure ACA Access")," we learned how to secure ACA access to external services with - and without - Dapr, covering Secret Stores and Managed Identity."),(0,n.kt)("li",{parentName:"ul"},"Finally, ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/14-dapr-aca-quickstart"},"Build ACA with Dapr")," tied it all together with a enterprise app scenario where an orders processor (ACA) uses Dapr APIs (PubSub, State Management) to receive and store order messages from Azure Service Bus.")),(0,n.kt)("h2",{id:"self-study-code-samples--tutorials"},"Self Study: Code Samples & Tutorials"),(0,n.kt)("p",null,"There's no better way to get familiar with the concepts, than to dive in and play with code samples and hands-on tutorials. Here are 4 resources to bookmark and try out:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.dapr.io/getting-started/quickstarts/"},"Dapr Quickstarts")," - these walk you through samples showcasing individual Building Block APIs - with multiple language options available."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.dapr.io/getting-started/tutorials/"},"Dapr Tutorials")," provides more complex examples of microservices applications and tools usage, including a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dapr/quickstarts/tree/master/tutorials/distributed-calculator"},"Distributed Calculator")," polyglot app."),(0,n.kt)("li",{parentName:"ol"},"Next, try to ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/container-apps/microservices-dapr?tabs=bash"},"Deploy a Dapr application to Azure Container Apps")," to get familiar with the process of setting up the environment, then deploying the app."),(0,n.kt)("li",{parentName:"ol"},"Or, explore the many ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/container-apps/samples?source=recommendations"},"Azure Container Apps samples")," showcasing various features and more complex architectures tied to real world scenarios.")),(0,n.kt)("h2",{id:"whats-next-serverless-integrations"},"What's Next: Serverless Integrations!"),(0,n.kt)("p",null,"So far we've talked about core technologies (Azure Functions, Azure Container Apps, Dapr) that provide foundational support for your serverless solution. Next, we'll look at ",(0,n.kt)("strong",{parentName:"p"},"Serverless Integrations")," - specifically at technologies like Azure Logic Apps and Azure Event Grid that ",(0,n.kt)("em",{parentName:"p"},"automate workflows")," and create seamless end-to-end solutions that integrate ",(0,n.kt)("em",{parentName:"p"},"other")," Azure services in serverless-friendly ways."),(0,n.kt)("h2",{id:"take-the-challenge"},"Take the Challenge!"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-74010-ninarasi"},(0,n.kt)("strong",{parentName:"a"},"Cloud Skills Challenge"))," is still going on, and we've already had hundreds of participants join and complete the learning modules to skill up on Serverless."),(0,n.kt)("p",null,"There's still time to join and get yourself on the leaderboard. Get familiar with Azure Functions, SignalR, Logic Apps, Azure SQL and more - in serverless contexts!! "),(0,n.kt)("hr",null))}c.isMDXComponent=!0},4795:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-fd0bd63946ac545c6404a026fc1d19af.png"}}]);