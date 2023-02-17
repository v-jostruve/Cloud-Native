"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={slug:"cnny-wrap-up",title:"4-5. Cloud Native New Year Wrap Up",authors:["cory","steven","paul","josh","nitya","vinicius","jorge","devanshi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloud-native","containers","decision-tree","kubernetes","serverless","microservices"],image:"https://azure.github.io/Cloud-Native/img/og/30-20.png",description:"A review of all the great things we have learned during CNNY and how to keep the learning journey going!",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},i=void 0,s={permalink:"/Cloud-Native/cnny-2023/cnny-wrap-up",source:"@site/blog-cnny/2023-02-17/cnny-wrap-up.md",title:"4-5. Cloud Native New Year Wrap Up",description:"A review of all the great things we have learned during CNNY and how to keep the learning journey going!",date:"2023-02-17T00:00:00.000Z",formattedDate:"February 17, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"}],readingTime:5.04,hasTruncateMarker:!1,authors:[{name:"Cory Skimming",title:"Sr. Product Marketing Manager",url:"https://twitter.com/cskimming",imageURL:"https://pbs.twimg.com/profile_images/1493684068227055617/iC9r8v6Z_400x400.jpg",key:"cory"},{name:"Steven Murawski",title:"Principal Cloud Advocate",url:"https://github.com/smurawski",imageURL:"https://github.com/smurawski.png",key:"steven"},{name:"Paul Yu",title:"Senior Cloud Advocate",url:"https://github.com/pauldotyu",imageURL:"https://github.com/pauldotyu.png",key:"paul"},{name:"Josh Duffney",title:"Cloud-Native Advocate @Microsoft",url:"https://github.com/duffney",imageURL:"https://github.com/duffney.png",key:"josh"},{name:"Nitya Narasimhan",title:"Senior Cloud Advocate, Illustrator",url:"https://github.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"},{name:"Vinicius Apolinario",title:"Senior Cloud Advocate",url:"https://github.com/vrapolinario",imageURL:"https://github.com/vrapolinario.png",key:"vinicius"},{name:"Jorge Arteiro",title:"Senior Cloud Advocate",url:"https://github.com/jorgearteiro",imageURL:"https://github.com/jorgearteiro.png",key:"jorge"},{name:"Devanshi Joshi",title:"Product Marketing Manager",url:"https://github.com/devanshidiaries",imageURL:"https://pbs.twimg.com/profile_images/1520928730230652928/00BaK5xn_400x400.jpg",key:"devanshi"}],frontMatter:{slug:"cnny-wrap-up",title:"4-5. Cloud Native New Year Wrap Up",authors:["cory","steven","paul","josh","nitya","vinicius","jorge","devanshi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloud-native","containers","decision-tree","kubernetes","serverless","microservices"],image:"https://azure.github.io/Cloud-Native/img/og/30-20.png",description:"A review of all the great things we have learned during CNNY and how to keep the learning journey going!",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},nextItem:{title:"4-4. Azure Kubernetes Services Add-ons and Extensions",permalink:"/Cloud-Native/cnny-2023/aks-extensions-addons"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Week 1: Cloud-native Fundamentals",id:"week-1-cloud-native-fundamentals",level:2},{value:"Week 2: Kubernetes Fundamentals",id:"week-2-kubernetes-fundamentals",level:2},{value:"Keep the Learning Going!",id:"keep-the-learning-going",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/cnny-wrap-up"}),(0,r.kt)("meta",{name:"twitter:title",content:"Cloud Native New Year Wrap Up"}),(0,r.kt)("meta",{name:"twitter:description",content:"A review of all the great things we have learned during CNNY and how to keep the learning journey going!"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-20.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@cskimm"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/cnny-wrap-up"})),(0,r.kt)("p",null,"And that's a wrap on the inaugural #CloudNativeNewYear! Thank you for joining us to kick off the new year with this learning journey into cloud-native! In this final post of the 2023 celebration of all things cloud-native, we'll do two things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Look Back")," - with a quick retrospective of what was covered."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Look Ahead")," - with resources and suggestions for how you can continue your skilling journey!")),(0,r.kt)("p",null,"We appreciate your time and attention and we hope you found this curated learning valuable. Feedback and suggestions are always welcome. From our entire team, we wish you good luck with the learning journey - now go build some apps and share your knowledge! \ud83c\udf89"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(25704).Z,width:"3840",height:"654"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cloud-native fundamentals"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes fundamentals"),(0,r.kt)("li",{parentName:"ul"},"Bringing your applications to Kubernetes"),(0,r.kt)("li",{parentName:"ul"},"Go further with cloud-native"),(0,r.kt)("li",{parentName:"ul"},"Resources to keep the celebration going!")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"week-1-cloud-native-fundamentals"},"Week 1: Cloud-native Fundamentals"),(0,r.kt)("p",null,"In Week 1, we took a tour through the fundamentals of cloud-native technologies, including a walkthrough of the core concepts of containers, microservices, and Kubernetes. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jan 23 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/cloud-native-fundamentals"},"Cloud-native Fundamentals")),": The answers to life and all the universe - what is cloud-native? What makes an application cloud-native? What are the benefits? (yes, we all know it's 42, but hey, gotta start somewhere!)"),(0,r.kt)("li",{parentName:"ul"},"Jan 24 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/containers-101"},"Containers 101")),": Containers are an essential component of cloud-native development. In this intro post, we cover how containers work and why they have become so popular. "),(0,r.kt)("li",{parentName:"ul"},"Jan 25 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/Kubernetes-101"},"Kubernetes 101")),": Kuber-what-now? Learn the basics of Kubernetes and how it enables us to deploy and manage our applications effectively and consistently.")),(0,r.kt)("admonition",{title:"A QUICKSTART GUIDE TO KUBERNETES CONCEPTS",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Missed it Live? Tune in to ",(0,r.kt)("a",{parentName:"p",href:"https://info.microsoft.com/ww-ondemand-a-quickstart-guide-to-kubernetes-concepts.html?lcid=en-us"},"A Quickstart Guide to Kubernetes Concepts")," on demand, now!")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jan 26 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/microservices-101"},"Microservices 101")),": What is a microservices architecture and how can we go about designing one? "),(0,r.kt)("li",{parentName:"ul"},"Jan 27 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/explore-options"},"Exploring your Cloud Native Options")),": ",(0,r.kt)("em",{parentName:"li"},"Cloud-native"),", while catchy, can be a very broad term. What technologies should you use? Learn some basic guidelines for when it is optimal to use different technologies for your project. ")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"week-2-kubernetes-fundamentals"},"Week 2: Kubernetes Fundamentals"),(0,r.kt)("p",null,"In Week 2, we took a deeper dive into the Fundamentals of Kubernetes. The posts and live demo from this week took us through how to build a simple application on Kubernetes, covering everything from deployment to networking and scaling. Note: for our samples and demo we have used Azure Kubernetes Service, but the principles apply to any Kubernetes!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jan 30 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-1"},"Pods and Deployments")),": how to use pods and deployments in Kubernetes. "),(0,r.kt)("li",{parentName:"ul"},"Jan 31 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-2"},"Services and Ingress")),": how to use services and ingress and a walk through the steps of making our containers accessible internally and externally!"),(0,r.kt)("li",{parentName:"ul"},"Feb 1 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-3"},"ConfigMaps and Secrets")),": how to of passing configuration and secrets to our applications in Kubernetes with ConfigMaps and Secrets."),(0,r.kt)("li",{parentName:"ul"},"Feb 2 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-4"},"Volumes, Mounts, and Claims")),": how to use persistent storage on Kubernetes (and ensure your data can survive container restarts!)."),(0,r.kt)("li",{parentName:"ul"},"Feb 3 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-5"},"Scaling Pods and Nodes")),": how to scale pods and nodes in our Kubernetes cluster.")),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/mLm9uskCrq0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("admonition",{title:"ASK THE EXPERTS: AZURE KUBERNETES SERVICE",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Missed it Live? Tune in to ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/shows/ask-the-expert/cloud-native-new-year-azure-kubernetes-service"},"Ask the Expert with Azure Kubernetes Service")," on demand, now!")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"week-3-bringing-your-applications-to-kubernetes"},"Week 3: Bringing your applications to Kubernetes"),(0,r.kt)("p",null,"So, you have learned how to build an application on Kubernetes. What about your existing applications? In Week 3, we explored how to take an existing application and set it up to run in Kubernetes:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Feb 6 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-1"},"CI/CD")),": learn how to get an existing application running in Kubernetes with a full pipeline in GitHub Actions."),(0,r.kt)("li",{parentName:"ul"},"Feb 7 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-2"},"Adapting Storage, Secrets, and Configuration")),": how to evaluate our sample application's configuration, storage, and networking requirements and implement using Kubernetes."),(0,r.kt)("li",{parentName:"ul"},"Feb 8 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-3"},"Opening your Application with Ingress")),": how to expose the eShopOnWeb app so that customers can reach it over the internet using a custom domain name and TLS."),(0,r.kt)("li",{parentName:"ul"},"Feb 9 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-4"},"Debugging and Instrumentation")),": how to debug and instrument your application now that it is on Kubernetes. "),(0,r.kt)("li",{parentName:"ul"},"Feb 10 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-5"},"CI/CD Secure Supply Chain")),": now that we have set up our application on Kubernetes, let's talk about container image signing and how to set up a secure supply change.")),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/CMZ0XudQ4HA",title:"YouTube video player",frameborder:"0",allow:"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"week-4-go-further-with-cloud-native"},"Week 4: Go ",(0,r.kt)("em",{parentName:"h1"},"Further")," with Cloud-Native"),(0,r.kt)("p",null,"This week we have gone further with Cloud-native by exploring advanced topics and best practices for the Cloud-native practitioner."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Feb 13 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/serverless-containers"},"Serverless Container Options")),": explore if you should go serverless, when that is a great option, and what your serverless compute options are on Azure."),(0,r.kt)("li",{parentName:"ul"},"Feb 14 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/building-with-draft"},"Jumpstart your applications with Draft")),": learn the basics of the open-source project Draft and how it can be used to easily create and deploy applications to Kubernetes."),(0,r.kt)("li",{parentName:"ul"},"Feb 15 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/windows-containers"},"Windows Containers")),": learn how you can use Windows containers on Kubernetes. "),(0,r.kt)("li",{parentName:"ul"},"Feb 16 - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/aks-extensions-addons"},"Azure Kubernetes Service Add-ons and Extensions")),": explore add-ons and extensions available to Azure Kubernetes Service (AKS).")),(0,r.kt)("p",null,"And today, February 17th, with this one post to rule (er, collect) them all! "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"keep-the-learning-going"},"Keep the Learning Going!"),(0,r.kt)("p",null,"Learning is great, so why stop here? We have a host of great resources and samples for you to continue your cloud-native journey with Azure below: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Learning Paths:")," ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/users/nityan/collections/xz6ehr3z7o7e1q?WT.mc_id=javascript-84290-ninarasi"},"Cloud Native New Year Learning Path Collection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Samples:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Azure-Samples"},"Azure Samples on GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hacks:")," ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/WhatTheHack/"},"What the Hack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"eBook:")," ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/resources/cloud-native-infrastructure-with-microsoft-azure/?WT.mc_id=javascript-84290-ninarasi"},"Cloud Native Infrastructure with Azure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"eBook:")," ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/resources/azure-cloud-native-architecture-mapbook/?WT.mc_id=javascript-84290-ninarasi"},"Cloud-native Architecture Mapbook"))),(0,r.kt)("hr",null))}c.isMDXComponent=!0},25704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hero-banner-991129dffd470b38678db8972274c09a.png"}}]);