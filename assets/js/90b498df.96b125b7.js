"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?i.createElement(h,r(r({ref:t},c),{},{components:a})):i.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79984:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const o={slug:"zero2hero-aca-01",title:"\ud83d\ude80 | Go Cloud Native with ACA",authors:["kendall"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","containerapps","serverless","concepts"],image:"./img/banner.png",description:"In this article, we discuss how Azure Container Apps is purpose-built to support cloud native applications.",tags:["serverless-september","zero-to-hero","azure-functions","azure-container-apps","dapr"]},r=void 0,s={permalink:"/Cloud-Native/blog/zero2hero-aca-01",source:"@site/blog/zero-to-hero/2022-09-06-containerapps.md",title:"\ud83d\ude80 | Go Cloud Native with ACA",description:"In this article, we discuss how Azure Container Apps is purpose-built to support cloud native applications.",date:"2022-09-06T00:00:00.000Z",formattedDate:"September 6, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"zero-to-hero",permalink:"/Cloud-Native/blog/tags/zero-to-hero"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"}],readingTime:7.595,hasTruncateMarker:!1,authors:[{name:"Kendall Roden",title:"Azure Container Apps PM @Microsoft",url:"https://github.com/kendallroden",imageURL:"https://github.com/kendallroden.png",key:"kendall"}],frontMatter:{slug:"zero2hero-aca-01",title:"\ud83d\ude80 | Go Cloud Native with ACA",authors:["kendall"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","containerapps","serverless","concepts"],image:"./img/banner.png",description:"In this article, we discuss how Azure Container Apps is purpose-built to support cloud native applications.",tags:["serverless-september","zero-to-hero","azure-functions","azure-container-apps","dapr"]},prevItem:{title:"05. Functions for JS Devs",permalink:"/Cloud-Native/blog/05-functions-js"},nextItem:{title:"\ud83d\ude80 | Durable Entities Walkthrough",permalink:"/Cloud-Native/blog/zero2hero-func-02"}},l={image:a(77360).Z,authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Defining Cloud Native",id:"defining-cloud-native",level:2},{value:"Azure Container Apps",id:"azure-container-apps",level:2},{value:"Dapr in Azure Container Apps",id:"dapr-in-azure-container-apps",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/zero2hero-aca-01"}),(0,n.kt)("meta",{name:"twitter:title",content:"#ZeroToHero: Go Cloud Native With Azure Container Apps"}),(0,n.kt)("meta",{name:"twitter:description",content:"#ZeroToHero: Go Cloud Native With Azure Container Apps"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/serverless-zero2hero.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/go-cloud-native-with-azure-container-apps/ba-p/3616407"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Welcome to ",(0,n.kt)("inlineCode",{parentName:"p"},"Day 6")," of #30DaysOfServerless!"),(0,n.kt)("p",null,"Today, we have a special set of posts from our ",(0,n.kt)("a",{parentName:"p",href:"/serverless-september/ZeroToHero"},"Zero To Hero \ud83d\ude80")," initiative, featuring blog posts authored by our Product Engineering teams for #ServerlessSeptember. ",(0,n.kt)("em",{parentName:"p"},"Posts were originally published on the ",(0,n.kt)("a",{parentName:"em",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/go-cloud-native-with-azure-container-apps/ba-p/3616407?WT.mc_id=javascript-74010-cxa"},"Apps on Azure")," blog on Microsoft Tech Community.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Defining Cloud Native"),(0,n.kt)("li",{parentName:"ul"},"Introduction to Azure Container Apps"),(0,n.kt)("li",{parentName:"ul"},"Dapr In Azure Container Apps"),(0,n.kt)("li",{parentName:"ul"},"Conclusion")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(56793).Z,width:"1600",height:"672"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"defining-cloud-native"},"Defining Cloud Native"),(0,n.kt)("p",null,"While I\u2019m positive I\u2019m not the first person to ask this, I think it\u2019s an appropriate way for us to kick off this article: ",(0,n.kt)("strong",{parentName:"p"},"\u201cHow many developers does it take to define cloud native?\u201d")," I hope you aren\u2019t waiting for a punch line because I seriously want to know your thoughts (drop your perspectives in the comments..) but if you ask me, the limit does not exist!"),(0,n.kt)("p",null,'A quick online search of the topic returns a laundry list of articles, e-books, twitter threads, etc. all trying to nail down the one true definition. While diving into the rabbit hole of cloud native, you will inevitably find yourself on the Cloud Native Computing Foundation (CNCF) site. The CNCF is part of the Linux Foundation and aims to make "cloud native computing ubiquitous" through deep open source project and community involvement. The CNCF has also published arguably the most popularized definition of cloud native which begins with the following statement:'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'\u201cCloud native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds."')),(0,n.kt)("p",null,'Over the past four years, my day-to-day work has been driven primarily by the surging demand for application containerization and the drastic adoption of Kubernetes as the de-facto container orchestrator. Customers are eager to learn and leverage patterns, practices and technologies that enable building "loosely coupled systems that are resilient, manageable, and observable". Enterprise developers at these organizations are being tasked with rapidly deploying event-driven, horizontally-scalable, polyglot services via repeatable, code-to-cloud pipelines.'),(0,n.kt)("p",null,"While building cloud native solutions can enable rapid innovation, the transition to adopting a cloud native architectural approach comes with a steep learning curve and a new set of considerations. In a document published by Microsoft called What is Cloud Native?, there are a few key areas highlighted to aid customers in the adoption of best practices for building modern, portable applications which I will summarize below:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cloud infrastructure")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud native applications leverage cloud infrastructure and make use of Platform-as-a-service offerings"),(0,n.kt)("li",{parentName:"ul"},"Cloud native applications depend on highly-elastic infrastructure with automatic scaling, self-healing, and monitoring capabilities")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Modern application design")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud native applications should be constructed using principles outlined in the 12 factor methodology")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Microservices")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud native applications are typically composed of microservices where each core function, or service, is built and deployed independently")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Containers")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud native applications are typically deployed using containers as a packaging mechanism where an application's code and dependencies are bundled together for consistency of deployment"),(0,n.kt)("li",{parentName:"ul"},"Cloud native applications leverage container orchestration technologies- primarily Kubernetes- for achieving capabilities such as workload scheduling, self-healing, auto-scale, etc.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Backing services")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud native applications are ideally stateless workloads which retrieve and store data in data stores external to the application hosting infrastructure. Cloud providers like Azure provide an array of backing data services which can be securely accessed from application code and provide capabilities for ensuring application data is highly-available")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Automation")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud native solutions should use deployment automation for backing cloud infrastructure via versioned, parameterized Infrastructure as Code (IaC) templates which provide a consistent, repeatable process for provisioning cloud resources."),(0,n.kt)("li",{parentName:"ul"},"Cloud native solutions should make use of modern CI/CD practices and pipelines to ensure successful, reliable infrastructure and application deployment.")),(0,n.kt)("h2",{id:"azure-container-apps"},"Azure Container Apps"),(0,n.kt)("p",null,"In many of the conversations I've had with customers that involve talk of Kubernetes and containers, the topics of cost-optimization, security, networking, and reducing infrastructure and operations inevitably arise. I personally have yet to meet with any customers eager to have their developers get more involved with infrastructure concerns."),(0,n.kt)("p",null,"One of my former colleagues, Jeff Hollan, made a statement while appearing on a 2019 episode of The Cloud Native Show where he shared his perspective on Cloud Native:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'"When I think about cloud native... it\'s writing applications in a way where you are specifically thinking about the benefits the cloud can provide... to me, serverless is the perfect realization of that because the only reason you can write serverless applications is because the cloud exists."')),(0,n.kt)("p",null,"I must say that I agree with Jeff's perspective. In addition to optimizing development practices for the cloud native world, reducing infrastructure exposure and operations is equally as important to many organizations and can be achieved as a result of cloud platform innovation."),(0,n.kt)("p",null,"In May of 2022, Microsoft announced the general availability of Azure Container Apps. Azure Container Apps provides customers with the ability to run microservices and containerized applications on a serverless, consumption-based platform. "),(0,n.kt)("p",null,"For those interested in taking advantage of the open source ecosystem while reaping the benefits of a managed platform experience, Container Apps run on Kubernetes and provides a set of managed open source projects embedded directly into the platform including the Kubernetes Event Driven Autoscaler (KEDA), the Distributed Application Runtime (Dapr) and Envoy."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://techcommunity.microsoft.com/t5/image/serverpage/image-id/401287i073CFBD50CB3A0B9/image-size/large?v=v2&px=999&WT.mc_id=javascript-74010-cxa",alt:"Azure Kubernetes Service vs. Azure Container Apps"})),(0,n.kt)("p",null,"Container apps provides other cloud native features and capabilities in addition to those above including, but not limited to: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/application-lifecycle-management?WT.mc_id=javascript-74010-cxa"},"Revisions"),": immutable snapshot representative of a specific version of a container app which can take advantage of the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/revisions-manage?tabs=bash&WT.mc_id=javascript-74010-cxa"},"managed traffic splitting capability")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/health-probes?tabs=arm-template?WT.mc_id=javascript-74010-cxa"},"Health probes"),": Based on ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/?WT.mc_id=javascript-74010-cxa"},"Kubernetes health probes")," with support for Readiness, Liveness and Startup "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/authentication-openid?WT.mc_id=javascript-74010-cxa"},"Built-in authentication")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/managed-identity?tabs=portal%2Cdotnet&WT.mc_id=javascript-74010-cxa"},"Managed Identity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/custom-domains-certificates?WT.mc_id=javascript-74010-cxa"},"Custom domain names and certificates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/networking?WT.mc_id=javascript-74010-cxa"},"Virtual Network injection")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/observability?tabs=bash&WT.mc_id=javascript-74010-cxa"},"Platform observability")," : log streaming, console connect, Azure monitor ")),(0,n.kt)("p",null,"The ability to dynamically scale and support growing numbers of users, events, and requests is one of the core requirements for most cloud native, distributed applications. Azure Container Apps is purpose-built with this and other cloud native tenants in mind. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://techcommunity.microsoft.com/t5/image/serverpage/image-id/401522iACA9C8FFC49FE161/image-size/large?v=v2&px=999",alt:"What can you build with Azure Container Apps?"})),(0,n.kt)("h2",{id:"dapr-in-azure-container-apps"},"Dapr in Azure Container Apps"),(0,n.kt)("p",null,"As a quick personal note before we dive into this section I will say I am a bit bias about Dapr. When Dapr was first released, I had an opportunity to immediately get involved and became an early advocate for the project. It is created by developers for developers, and solves tangible problems customers architecting distributed systems face:"),(0,n.kt)("admonition",{title:"HOW DO I",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"integrate with external systems that my app has to react and respond to?"),(0,n.kt)("li",{parentName:"ul"},"create event driven apps which reliably send events from one service to another?"),(0,n.kt)("li",{parentName:"ul"},"observe the calls and events between my services to diagnose issues in production?"),(0,n.kt)("li",{parentName:"ul"},"access secrets securely from within my application?"),(0,n.kt)("li",{parentName:"ul"},"discover other services and call methods on them?"),(0,n.kt)("li",{parentName:"ul"},"prevent committing to a technology early and have the flexibility to swap out an alternative based on project or environment changes?"))),(0,n.kt)("p",null,'While existing solutions were in the market which could be used to address some of the concerns above, there was not a lightweight, CNCF-backed project which could provide a unified approach to solve the more fundamental ask from customers: "How do I make it easy for developers to build microservices based on cloud native best practices?"'),(0,n.kt)("admonition",{title:"Enter Dapr!",type:"success"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("a",{parentName:"p",href:"https://dapr.io/"},"Distributed Application Runtime (Dapr)"),' provides APIs that simplify microservice connectivity. Whether your communication pattern is service to service invocation or pub/sub messaging, Dapr helps you write resilient and secured microservices. By letting Dapr\u2019s sidecar take care of the complex challenges such as service discovery, message broker integration, encryption, observability, and secret management, you can focus on business logic and keep your code simple."')),(0,n.kt)("p",null,"The Container Apps platform provides a managed and supported Dapr integration which eliminates the need for deploying and managing the Dapr OSS project. In addition to providing managed upgrades, the platform also exposes a simplified Dapr interaction model to increase developer productivity and reduce the friction required to leverage Dapr capabilities. While the Dapr integration makes it easier for customers to adopt cloud native best practices in container apps it is not required to make use of the container apps platform. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://techcommunity.microsoft.com/t5/image/serverpage/image-id/401284iA1296A6F33D804B2/image-size/large?v=v2&px=999",alt:"Image on Dapr"})),(0,n.kt)("p",null,"For additional insight into the dapr integration visit aka.ms/aca-dapr. "),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Backed by and integrated with powerful cloud native technologies, Azure Container Apps strives to make developers productive, while reducing the operational overhead and learning curve that typically accompanies adopting a cloud-native strategy. "),(0,n.kt)("p",null,"If you are interested in building resilient, portable and highly-scalable apps visit ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/container-apps/"},"Azure Container Apps | Microsoft Azure")," today!"),(0,n.kt)("admonition",{title:"ASK THE EXPERT: LIVE Q&A",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The Azure Container Apps team will answer questions live on ",(0,n.kt)("strong",{parentName:"p"},"September 29"),". "),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://reactor.microsoft.com/reactor/events/17004/?WT.mc_id=javascript-74010-ninarasi"},"Sign up to attend")," for live Q&A with the team"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/Cloud-Native/issues/new?assignees=&labels=ask+the+expert&template=---ask-the-expert-.md&title=%5BAsk+The+Expert%5D++"},"submit your questions")," ahead of time, for prioritization."))))}u.isMDXComponent=!0},77360:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-89c6e86cfbf02935e85318d7a3d3b4ff.png"},56793:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/zero-to-hero-kendall-b022e8dde332ed17596b3cd761631148.png"}}]);