"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1426],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={slug:"serverless-status-post",title:"Serverless September - In a Nutshell",authors:["devanshi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","serverless","event grid","logic apps","cloudevents"],image:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png",description:"A wrap-up post from Serverless September, referencing the many initiatives and resources",tags:["serverless-september","azure-container-apps","dapr","azure-event-grid","azure-logic-apps","azure-functions"]},i=void 0,s={permalink:"/Cloud-Native/blog/serverless-status-post",source:"@site/blog/2022-10-04/index.md",title:"Serverless September - In a Nutshell",description:"A wrap-up post from Serverless September, referencing the many initiatives and resources",date:"2022-10-04T00:00:00.000Z",formattedDate:"October 4, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"},{label:"azure-event-grid",permalink:"/Cloud-Native/blog/tags/azure-event-grid"},{label:"azure-logic-apps",permalink:"/Cloud-Native/blog/tags/azure-logic-apps"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"}],readingTime:6.89,hasTruncateMarker:!1,authors:[{name:"Devanshi Joshi",title:"Product Marketing Manager",url:"https://github.com/devanshidiaries",imageURL:"https://pbs.twimg.com/profile_images/1520928730230652928/00BaK5xn_400x400.jpg",key:"devanshi"}],frontMatter:{slug:"serverless-status-post",title:"Serverless September - In a Nutshell",authors:["devanshi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","serverless","event grid","logic apps","cloudevents"],image:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png",description:"A wrap-up post from Serverless September, referencing the many initiatives and resources",tags:["serverless-september","azure-container-apps","dapr","azure-event-grid","azure-logic-apps","azure-functions"]},prevItem:{title:"Oct | `awesome-azd` Templates",permalink:"/Cloud-Native/blog/29-awesome-azd"},nextItem:{title:"29. Code to Cloud with `azd`",permalink:"/Cloud-Native/blog/29-azure-developer-cli"}},l={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Building Cloud-native Apps",id:"building-cloud-native-apps",level:2},{value:"Functions-as-a-Service (FaaS)",id:"functions-as-a-service-faas",level:2},{value:"Microservices and Containers",id:"microservices-and-containers",level:2},{value:"Serverless Integrations",id:"serverless-integrations",level:2},{value:"End-to-End Solutions",id:"end-to-end-solutions",level:2},{value:"Developer Tools",id:"developer-tools",level:2},{value:"Join us at Microsoft Ignite!",id:"join-us-at-microsoft-ignite",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/serverless-status-post"}),(0,n.kt)("meta",{name:"twitter:title",content:"#ServerlessSeptember: In A Nutshell"}),(0,n.kt)("meta",{name:"twitter:description",content:"#ServerlessSeptember: In A Nutshell"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/21-cloudevents-via-event-grid"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,"It's ",(0,n.kt)("inlineCode",{parentName:"p"},"Serverless September")," in a Nutshell! Join us as we unpack our month-long learning journey exploring the core technology pillars for Serverless architectures on Azure. Then end with a look at next steps to build your Cloud-native applications on Azure."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Functions-as-a-Service (FaaS)"),(0,n.kt)("li",{parentName:"ul"},"Microservices and Containers"),(0,n.kt)("li",{parentName:"ul"},"Serverless Integrations"),(0,n.kt)("li",{parentName:"ul"},"End-to-End Solutions"),(0,n.kt)("li",{parentName:"ul"},"Developer Tools & #Hacktoberfest")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Banner for Serverless September",src:a(51614).Z,width:"1920",height:"1080"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"building-cloud-native-apps"},"Building Cloud-native Apps"),(0,n.kt)("p",null,"By definition, ",(0,n.kt)("em",{parentName:"p"},"cloud-native technologies empower organizations to ",(0,n.kt)("strong",{parentName:"em"},"build and run scalable applications")," in modern, dynamic environments such as public, private, and hybrid clouds.")," You can learn more about cloud-native in Kendall Roden's #ServerlessSeptember post on ",(0,n.kt)("a",{parentName:"p",href:"/blog/zero2hero-aca-01"},"Going Cloud-native with Azure Container Apps"),"."),(0,n.kt)("p",null,"Serveless technologies accelerate productivity and minimize costs for deploying applications at cloud scale. So, what can we build with serverless technologies in cloud-native on Azure? ",(0,n.kt)("em",{parentName:"p"},"Anything that is event-driven")," - examples include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Microservices")," - scaled by KEDA-compliant triggers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Public API Endpoints")," - scaled by #concurrent HTTP requests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Event-Driven Applications")," - scaled by length of message queue"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Web Applications")," - scaled by #concurrent HTTP requests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Background Process")," - scaled by CPU and Memory usage")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(33983).Z,width:"1280",height:"720"})),(0,n.kt)("p",null,"Great - but as developers, we really want to know ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"how")," we can get started building and deploying serverless solutions on Azure"),". That was the focus of our #ServerlessSeptember journey. Let's take a quick look at the four key themes."),(0,n.kt)("h2",{id:"functions-as-a-service-faas"},"Functions-as-a-Service (FaaS)"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Functions-as-a-Service")," (FaaS) is the epitome of developer productivity for full-stack modern apps. As developers, you don't manage infrastructure and focus only on business logic and application code. And, with ",(0,n.kt)("strong",{parentName:"p"},"Serverless Compute")," you ",(0,n.kt)("em",{parentName:"p"},"only pay for when your code runs")," - making this the simplest first step to begin migrating your application to cloud-native."),(0,n.kt)("p",null,"In Azure, FaaS is provided by Azure Functions. Check out our ",(0,n.kt)("a",{parentName:"p",href:"/Cloud-Native/blog/08-functions-azure"},"Functions + Serverless on Azure")," to go from learning core concepts, to building your first Functions app in your programming language of choice. Azure functions support multiple programming languages including C#, F#, Java, JavaScript, Python, Typescript, and PowerShell. "),(0,n.kt)("p",null,"Want to get extended language support for languages like Go, and Rust? You can ",(0,n.kt)("a",{parentName:"p",href:"/blog/zero2hero-func-03"},"Use Custom Handlers")," to make this happen! But what if you want to have long-running functions, or create complex workflows involving more than one function? Read our ",(0,n.kt)("a",{parentName:"p",href:"/blog/zero2hero-func-02"},"post on Durable Entities")," to learn how you can ",(0,n.kt)("em",{parentName:"p"},"orchestrate")," this with Azure Functions."),(0,n.kt)("p",null,"Check out this recent ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/ATEonDemand"},"AskTheExpert")," Q&A session with the Azure Functions team to get answers to popular community questions on Azure Functions features and usage."),(0,n.kt)("iframe",{src:"https://learn-video.azurefd.net/vod/player?show=ask-the-expert&ep=serverless-september-azure-functions",width:"600",height:"400"}),(0,n.kt)("h2",{id:"microservices-and-containers"},"Microservices and Containers"),(0,n.kt)("p",null,"Functions-as-a-Service is an ideal first step towards serverless development. But Functions are just ",(0,n.kt)("em",{parentName:"p"},"one of the 5 pillars")," of ",(0,n.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/blog/zero2hero-aca-01"},"cloud-native"),". This week we'll look at two of the other pillars: ",(0,n.kt)("strong",{parentName:"p"},"microservices")," and ",(0,n.kt)("strong",{parentName:"p"},"containers")," - with specific focus on two core technologies: Azure Container Apps and Dapr (Distributed Application Runtime)."),(0,n.kt)("p",null,"In this 6-part series of posts, we walk through each technology independently, before looking at the value of building Azure Container Apps ",(0,n.kt)("strong",{parentName:"p"},"with Dapr"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/09-aca-fundamentals"},"Hello Container Apps")," we learned core concepts & deployed our first ACA."),(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/microservices-10"},"Microservices Communication")," we learned about ACA environments and virtual networks, and how microservices communicate in ACA with a hands-on tutorial."),(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/11-scaling-container-apps"},"Scaling Your Container Apps")," we learned about KEDA (Kubernetes Event-Driven Autoscaler) and configuring ACA for autoscaling with KEDA-compliant triggers."),(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/12-build-with-dapr"},"Build with Dapr")," we introduced the Distributed Application Runtime (Dapr), exploring its Building Block APIs and sidecar architecture for working with ACA."),(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/13-aca-managed-id"},"Secure ACA Access")," we learned how to secure ACA access to external services with - and without - Dapr, covering Secret Stores and Managed Identity."),(0,n.kt)("li",{parentName:"ul"},"Finally, ",(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/14-dapr-aca-quickstart"},"Build ACA with Dapr")," tied it all together with a enterprise app scenario where an orders processor (ACA) uses Dapr APIs (PubSub, State Management) to receive and store order messages from Azure Service Bus.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Azure/Cloud-Native/blob/41cc0890acd204a9069836dfcc5727c48d5fca97/website/blog/2022-09-14/img/ACA-Tutorial-AsyncComm-0922.jpg",alt:"Build ACA with Dapr"})),(0,n.kt)("p",null,"Check out this recent ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/ATEonDemand"},"AskTheExpert")," Q&A session with the Azure Container Apps team for answers to popular community questions on core features and usage."),(0,n.kt)("iframe",{src:"https://learn-video.azurefd.net/vod/player?show=ask-the-expert&ep=serverless-september-azure-container-apps",width:"640",height:"360"}),(0,n.kt)("h2",{id:"serverless-integrations"},"Serverless Integrations"),(0,n.kt)("p",null,"In the first half of the month we looked at ",(0,n.kt)("em",{parentName:"p"},"compute")," resources for building and deploying serverless applications. In the second half, we look at ",(0,n.kt)("em",{parentName:"p"},"integration")," tools and resources that automate developer workflows to streamline the end-to-end developer experience."),(0,n.kt)("p",null,"In Azure, this is enabled by services like ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/logic-apps/logic-apps-overview"},"Azure Logic Apps")," and ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/event-grid/overview"},"Azure Event Grid"),". Azure Logic Apps provides a visual designer to ",(0,n.kt)("em",{parentName:"p"},"create and automate workflows")," with little or no code involved. Azure Event Grid provides a ",(0,n.kt)("em",{parentName:"p"},"highly-scable event broker")," with support for pub/sub communications to drive async event-driven architectures. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/blog/17-integrate-cosmosdb"},"Tracking Weather Data Changes With Logic Apps")," we look at how you can use Logic Apps to  integrate the MSN weather service with Azure CosmosDB, allowing automated collection of weather data on changes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/blog/18-cloudmail"},"Teach the Cloud to Read & Categorize Mail"),' we take it a step further, using Logic Apps to automate a workflow that includes a Computer Vision service to "read" images and store the results to CosmosDB.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/blog/20-events-graph"},"Integrate with Microsoft Graph")," we explore a multi-cloud scenario (Azure + M365) where change notifications from Microsoft Graph can be integrated using Logic Apps and Event Hubs to power an onboarding workflow.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/blog/21-cloudevents-via-event-grid"},"Cloud Events with Event Grid")," we learn about the CloudEvents specification (for consistently describing event data) - and learn how Event Grid brokers events in this format. Azure Logic Apps can be an Event handler (subscriber) that uses the event to trigger an automated workflow on receipt."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://azure.github.io/Cloud-Native/assets/images/21-cloudevents-via-event-grid-01-694e11ff4422f7f4f28ae03f08580170.png",alt:"Azure Event Grid And Logic Apps"})))),(0,n.kt)("p",null,"Want to explore other such integrations? Browse ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/architecture/browse/?filter-products=Logic%20A&products=azure-event-grid%2Cazure-logic-apps"},"Azure Architectures")," and filter by selected Azure services for more real-world scenarios."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"end-to-end-solutions"},"End-to-End Solutions"),(0,n.kt)("p",null,"We've covered serverless ",(0,n.kt)("em",{parentName:"p"},"compute")," solutions (for building your serverless applications) and serverless ",(0,n.kt)("em",{parentName:"p"},"integration")," services to automate end-to-end workflows in synchronous or asynchronous event-driven architectures. In this final week, we want to leave you with a sense of ",(0,n.kt)("em",{parentName:"p"},"end-to-end")," development tools and use cases that can be enabled by Serverless on Azure. Here are some  key examples:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Article"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://azure.github.io/Cloud-Native/assets/images/architecture-a2d16c0719ab5f90fe9e4b66a40198bc.png",alt:null})),(0,n.kt)("td",{parentName:"tr",align:"left"},"In ",(0,n.kt)("a",{parentName:"td",href:"https://azure.github.io/Cloud-Native/blog/24-aca-dotnet"},(0,n.kt)("strong",{parentName:"a"},"this tutorial")),", you'll learn to deploy a containerized ASP.NET Core 6.0 application to Azure Container Apps - with a Blazor front-end and two Web API projects")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://azure.github.io/Cloud-Native/assets/images/acr-portal-01-56ad80e74d4597e32bb2bb534148d10d.png",alt:"Deploy Java containers to cloud"})),(0,n.kt)("td",{parentName:"tr",align:"left"},"In ",(0,n.kt)("a",{parentName:"td",href:"https://azure.github.io/Cloud-Native/blog/24-aca-dotnet"},(0,n.kt)("strong",{parentName:"a"},"this tutorial"))," you learn to build and deploy a Java application running on Spring Boot, by publishing it in a container to Azure Container Registry, then deploying to Azure Container Apps,, from ACR, via the Azure Portal.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://azure.github.io/Cloud-Native/assets/images/28-serverless-power-platform-custom-connector-01-d6fac44727880dd526e03e2010938f0a.png",alt:"**Where am I? My GPS Location with Serverless Power Platform Custom Connector**"})),(0,n.kt)("td",{parentName:"tr",align:"left"},"In ",(0,n.kt)("a",{parentName:"td",href:"https://azure.github.io/Cloud-Native/blog/28-where-am-i"},(0,n.kt)("strong",{parentName:"a"},"this step-by-step tutorial"))," you learn to integrate a serverless application (built on Azure Functions and OpenAPI) with Power Platforms custom connectors via Azure API Management (API-M).This pattern can empower a new ecosystem of ",(0,n.kt)("em",{parentName:"td"},"fusion apps")," for cases like inventory management.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://microsoft.github.io/WhatTheHack/015-Serverless/images/preferred-solution.png",alt:null})),(0,n.kt)("td",{parentName:"tr",align:"left"},"And in our ",(0,n.kt)("a",{parentName:"td",href:"https://microsoft.github.io/WhatTheHack/015-Serverless/images/preferred-solution.png"},(0,n.kt)("strong",{parentName:"a"},"Serverless Hacks"))," initiative, we walked through an 8-step hack to build a serverless tollbooth. Check out ",(0,n.kt)("a",{parentName:"td",href:"https://aka.ms/serverless-september/videos"},(0,n.kt)("strong",{parentName:"a"},"this 12-part video walkthrough"))," of a reference solution using .NET.")))),(0,n.kt)("h2",{id:"developer-tools"},"Developer Tools"),(0,n.kt)("p",null,"But wait - there's more. Those are a sample of the end-to-end application scenarios that are built on serverless on Azure. But what about the ",(0,n.kt)("strong",{parentName:"p"},"developer experience"),"? In ",(0,n.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/blog/29-azure-developer-cli"},(0,n.kt)("strong",{parentName:"a"},"this article")),", we say hello to the ",(0,n.kt)("em",{parentName:"p"},"Azure Developer CLI")," - an open-source tool that streamlines your develop-deploy workflow, with simple commands that map to core stages of your development journey. ",(0,n.kt)("strong",{parentName:"p"},"Go from code to cloud with one CLI")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://azure.github.io/Cloud-Native/assets/images/azd-workflow-163d61cf5c6aa44a23dd4dda9858a296.png",alt:null})),(0,n.kt)("p",null,"And ",(0,n.kt)("strong",{parentName:"p"},"watch this space for more such tutorials and content through October"),", including a special #Hacktoberfest focused initiative to encourage and support first-time contributors to open-source. Here's a sneak peek at the project we plan to share - the new ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/awesome-azd"},"awesome-azd templates")," gallery."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(98953).Z,width:"1894",height:"942"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"join-us-at-microsoft-ignite"},"Join us at Microsoft Ignite!"),(0,n.kt)("p",null,"Want to continue your learning journey, and learn about what's next for Serverless on Azure?\n",(0,n.kt)("strong",{parentName:"p"},"Microsoft Ignite")," happens Oct 12-14 this year and has multiple sessions on relevant technologies and tools. Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://ignite.microsoft.com/sessions?q=cloud%2520native%2520architectures&f=%255B%257B%2522name%2522%253A%2522Breakout%2522%252C%2522facetName%2522%253A%2522sessionType%2522%257D%255D&s=%257B%2522name%2522%253A%2522translate.refine.label.sort.relevance%2522%252C%2522type%2522%253A0%257D&t=%257B%2522from%2522%253A%25222022-10-12T00%253A00%253A00-07%253A00%2522%252C%2522to%2522%253A%25222022-10-13T23%253A59%253A59-07%253A00%2522%257D&g=%255B%257B%2522name%2522%253A%2522live-now-and-upcoming%2522%252C%2522enabled%2522%253Afalse%257D%255Dl"},"Session Catalog")," and ",(0,n.kt)("a",{parentName:"p",href:"https://ignite.microsoft.com/sessions/8950b2b1-62eb-48f9-90ef-5ad779ce8e22?source=sessions"},"register here")," to attend online."))}c.isMDXComponent=!0},51614:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-a09093dd5ad62259887d4b7b430f2365.png"},33983:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-native-f4c230814d34747c8920a9f01729ccca.png"},98953:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gallery-6c6684d3eb7048353a6641b17b689046.gif"}}]);