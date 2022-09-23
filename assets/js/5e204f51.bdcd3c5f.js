"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[743],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85727:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={slug:"11-scaling-container-apps",title:"11. Scaling Container Apps",authors:["paul"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","container-apps","keda","serverless","concepts","scaling"],image:"./img/banner.png",description:"<FIXME>",tags:["serverless-september","30-days-of-serverless","azure-container-apps","keda","autoscaling"]},o=void 0,i={permalink:"/Cloud-Native/blog/11-scaling-container-apps",source:"@site/blog/2022-09-11/index.md",title:"11. Scaling Container Apps",description:"<FIXME>",date:"2022-09-11T00:00:00.000Z",formattedDate:"September 11, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"keda",permalink:"/Cloud-Native/blog/tags/keda"},{label:"autoscaling",permalink:"/Cloud-Native/blog/tags/autoscaling"}],readingTime:6.275,hasTruncateMarker:!1,authors:[{name:"Paul Yu",title:"Cloud Native Advocate @Microsoft",url:"https://github.com/pauldotyu",imageURL:"https://github.com/pauldotyu.png",key:"paul"}],frontMatter:{slug:"11-scaling-container-apps",title:"11. Scaling Container Apps",authors:["paul"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","container-apps","keda","serverless","concepts","scaling"],image:"./img/banner.png",description:"<FIXME>",tags:["serverless-september","30-days-of-serverless","azure-container-apps","keda","autoscaling"]},prevItem:{title:"10. Microservices Communication",permalink:"/Cloud-Native/blog/microservices-10"},nextItem:{title:"\ud83d\ude80 | Journey to the Cloud With ACA",permalink:"/Cloud-Native/blog/zero2hero-aca-04"}},l={image:a(73531).Z,authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"So, what makes Azure Container Apps &quot;serverless&quot;?",id:"so-what-makes-azure-container-apps-serverless",level:2},{value:"Scaling your Container Apps",id:"scaling-your-container-apps",level:2},{value:"What is KEDA?",id:"what-is-keda",level:3},{value:"Configuring ACA scale rules",id:"configuring-aca-scale-rules",level:3},{value:"Translating KEDA templates to Azure templates",id:"translating-keda-templates-to-azure-templates",level:3},{value:"See Container App scaling in action",id:"see-container-app-scaling-in-action",level:2},{value:"Autoscaling based on HTTP traffic load",id:"autoscaling-based-on-http-traffic-load",level:3},{value:"Autoscaling based on Azure Service Bus message queues",id:"autoscaling-based-on-azure-service-bus-message-queues",level:3},{value:"Summary",id:"summary",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/11-scaling-container-apps"}),(0,r.kt)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Scaling Your Container Apps"}),(0,r.kt)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Scaling Your Container Apps"}),(0,r.kt)("meta",{name:"twitter:image",content:"http://localhost:3000/Cloud-Native/assets/images/banner-3e6ce6ac4f59bb1c536972dced457df3.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/11-scaling-container-apps"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 11")," of #30DaysOfServerless!"),(0,r.kt)("p",null,"Yesterday we explored Azure Container Concepts related to environments, networking and microservices communication - and illustrated these with a deployment example. Today, we turn our attention to ",(0,r.kt)("em",{parentName:"p"},"scaling")," your container apps with demand."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What makes ACA Serverless?"),(0,r.kt)("li",{parentName:"ul"},"What is Keda?"),(0,r.kt)("li",{parentName:"ul"},"Scaling Your ACA"),(0,r.kt)("li",{parentName:"ul"},"ACA Scaling In Action"),(0,r.kt)("li",{parentName:"ul"},"Exercise: Explore ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/oss-labs"},"azure-opensource-labs")," examples"),(0,r.kt)("li",{parentName:"ul"},"Resources: For self-study!")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(73531).Z,width:"1600",height:"672"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"so-what-makes-azure-container-apps-serverless"},'So, what makes Azure Container Apps "serverless"?'),(0,r.kt)("p",null,'Today we are going to focus on what makes Azure Container Apps (ACA) a "serverless" offering. But what does the term "',(0,r.kt)("em",{parentName:"p"},"serverless"),'" really mean? As much as we\'d like to think there aren\'t any servers involved, that is certainly not the case. In general, "serverless" means that most (if not all) server maintenance has been abstracted away from you.'),(0,r.kt)("p",null,"With serverless, you don't spend any time managing and patching servers. This concern is offloaded to Azure and you simply focus on adding business value through application delivery. In addition to operational efficiency, cost efficiency can be achieved with serverless on-demand pricing models. Your workload horizontally scales out based on need and you only pay for what you use. To me, this is ",(0,r.kt)("strong",{parentName:"p"},"serverless"),", and my teammate ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/smurawski"},"@StevenMurawski"),' said it best... "',(0,r.kt)("em",{parentName:"p"},"being able to ",(0,r.kt)("strong",{parentName:"em"},"scale to zero "),"is what gives ACA it's serverless magic"),'."'),(0,r.kt)("h2",{id:"scaling-your-container-apps"},"Scaling your Container Apps"),(0,r.kt)("p",null,"If you don't know by now, ACA is built on a solid open-source foundation. Behind the scenes, it runs on a managed Kubernetes cluster and includes several open-source components out-of-the box including ",(0,r.kt)("a",{parentName:"p",href:"https://dapr.io/"},"Dapr")," to help you build and run microservices, ",(0,r.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/"},"Envoy Proxy")," for ingress capabilities, and ",(0,r.kt)("a",{parentName:"p",href:"https://keda.sh/"},"KEDA")," for event-driven autoscaling. Again, you do not need to install these components yourself. All you need to be concerned with is enabling and/or configuring your container app to leverage these components."),(0,r.kt)("p",null,"Let's take a closer look at autoscaling in ACA to help you optimize your container app."),(0,r.kt)("h3",{id:"what-is-keda"},"What is KEDA?"),(0,r.kt)("p",null,"KEDA stands for ",(0,r.kt)("strong",{parentName:"p"},"K"),"ubernetes ",(0,r.kt)("strong",{parentName:"p"},"E"),"vent-",(0,r.kt)("strong",{parentName:"p"},"D"),"riven ",(0,r.kt)("strong",{parentName:"p"},"A"),"utoscaler. It is an open-source project initially started by Microsoft and Red Hat and has been donated to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.cncf.io/"},"Cloud Native Computing Foundation (CNCF)"),". It is being maintained by a ",(0,r.kt)("a",{parentName:"p",href:"https://keda.sh/community/"},"community of 200+ contributors and adopted by many large organizations"),". In terms of its status as a CNCF project it is currently in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cncf/toc/blob/main/process/graduation_criteria.md#incubating-stage"},(0,r.kt)("strong",{parentName:"a"},"Incubating Stage"))," which means the project has gone through significant due diligence and on its way towards the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cncf/toc/blob/main/process/graduation_criteria.md#graduation-stage"},(0,r.kt)("strong",{parentName:"a"},"Graduation Stage")),"."),(0,r.kt)("p",null,"Prior to KEDA, horizontally scaling your Kubernetes deployment was achieved through the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"Horizontal Pod Autoscaler (HPA)")," which relies on resource metrics such as CPU and memory to determine when additional replicas should be deployed. Being limited to CPU and memory falls a bit short for certain workloads. This is especially true for apps that need to processes messages from a queue or HTTP-based apps that can handle a specific amount of incoming HTTP requests at a time. KEDA aims to fill that gap and provides a much more robust framework for scaling by working in conjunction with HPA. It offers many ",(0,r.kt)("a",{parentName:"p",href:"https://keda.sh/docs/scalers/"},"scalers")," for you to implement and even allows your deployments to ",(0,r.kt)("strong",{parentName:"p"},"scale to zero"),"! \ud83e\udd73"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"KEDA architecture",src:a(43789).Z,width:"1183",height:"966"})),(0,r.kt)("h3",{id:"configuring-aca-scale-rules"},"Configuring ACA scale rules"),(0,r.kt)("p",null,"As I mentioned above, ACA's autoscaling feature leverages KEDA and gives you the ability to configure the number of replicas to deploy based on rules (event triggers). The number of replicas can be configured as a static number or a range (minimum and maximum). So if you need your containers to run 24/7, set the min and max to be the same value. By default, when you deploy a container app, it is set to scale from 0 to 10 replicas. The default scaling rule uses ",(0,r.kt)("strong",{parentName:"p"},"HTTP scaling")," and defaults to a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/container-apps/scale-app#http"},"minimum of 10 concurrent requests")," per second. Once the threshold of 10 concurrent request per second is met, another replica will be deployed until it reaches the maximum number of replicas."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"At the time of this writing, a container app can have up to 30 replicas.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Default autoscaler",src:a(35651).Z,width:"908",height:"724"})),(0,r.kt)("p",null,"As a best practice, if you have a ",(0,r.kt)("strong",{parentName:"p"},"Min / max replicas")," range configured, you should configure a scaling rule even if it is just explicitly setting the default values."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding HTTP scaling rule",src:a(54492).Z,width:"896",height:"723"})),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("strong",{parentName:"p"},"HTTP scaling"),", you can also configure an ",(0,r.kt)("strong",{parentName:"p"},"Azure queue")," rule, which allows you to use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/storage/queues/storage-queues-introduction"},"Azure Storage Queues")," as an event data source."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding Azure Queue scaling rule",src:a(44013).Z,width:"890",height:"725"})),(0,r.kt)("p",null,"The most flexibility comes with the ",(0,r.kt)("strong",{parentName:"p"},"Custom")," rule type. This opens up a LOT more options for scaling. All of ",(0,r.kt)("a",{parentName:"p",href:"https://keda.sh/docs/scalers/"},"KEDA's event-based scalers")," are supported with this option \ud83d\ude80"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding Custom scaling rule",src:a(17278).Z,width:"894",height:"723"})),(0,r.kt)("h3",{id:"translating-keda-templates-to-azure-templates"},"Translating KEDA templates to Azure templates"),(0,r.kt)("p",null,"When you implement ",(0,r.kt)("strong",{parentName:"p"},"Custom")," rules, you need to become familiar with translating KEDA templates to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/container-apps/azure-resource-manager-api-spec?tabs=arm-template"},"Azure Resource Manager templates")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/container-apps/azure-resource-manager-api-spec?tabs=yaml"},"ACA YAML manifests"),". The ",(0,r.kt)("a",{parentName:"p",href:"https://keda.sh/docs/scalers/"},"KEDA scaler")," documentation is great and it should be simple to translate KEDA template ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," to an ACA rule ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),"."),(0,r.kt)("p",null,"The images below shows how to translated a scaling rule which uses Azure Service Bus as an event data source. The custom rule type is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"azure-servicebus")," and details of the service bus is added to the Metadata section. One important thing to note here is that the connection string to the service bus was added as a secret on the container app and the trigger parameter must be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"connection"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Azure Container App custom rule metadata",src:a(99026).Z,width:"1169",height:"885"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Azure Container App custom rule metadata",src:a(99057).Z,width:"1167",height:"888"})),(0,r.kt)("p",null,"Additional examples of KEDA scaler conversion can be found in the resources section and example video below."),(0,r.kt)("h2",{id:"see-container-app-scaling-in-action"},"See Container App scaling in action"),(0,r.kt)("p",null,"Now that we've built up some foundational knowledge on how ACA autoscaling is implemented and configured, let's look at a few examples."),(0,r.kt)("h3",{id:"autoscaling-based-on-http-traffic-load"},"Autoscaling based on HTTP traffic load"),(0,r.kt)("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},(0,r.kt)("iframe",{src:"https://player.vimeo.com/video/746678347?h=8f5ada4431&badge=0&autopause=0&player_id=0&app_id=58479",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"http-scaling"})),(0,r.kt)("script",{src:"https://player.vimeo.com/api/player.js"}),(0,r.kt)("h3",{id:"autoscaling-based-on-azure-service-bus-message-queues"},"Autoscaling based on Azure Service Bus message queues"),(0,r.kt)("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},(0,r.kt)("iframe",{src:"https://player.vimeo.com/video/746678266?h=89701121ed&badge=0&autopause=0&player_id=0&app_id=58479",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"event-driven-scaling.mp4"})),(0,r.kt)("script",{src:"https://player.vimeo.com/api/player.js"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"ACA brings you a true serverless experience and gives you the ability to configure autoscaling rules based on KEDA scaler templates. This gives you flexibility to scale based on a wide variety of data sources in an event-driven manner. With the amount built-in scalers currently available, there is probably a scaler out there for all your use cases. If not, I encourage you to get involved with the ",(0,r.kt)("a",{parentName:"p",href:"https://keda.sh/community/"},"KEDA community")," and help make it better!"),(0,r.kt)("h2",{id:"exercise"},"Exercise"),(0,r.kt)("p",null,"By now, you've probably read and seen enough and now ready to give this autoscaling thing a try. The example I walked through in the videos above can be found at the ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/oss-labs"},"azure-opensource-labs")," repo. I highly encourage you to head over to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-opensource-labs/tree/main/cloud-native/containerapps-terraform"},"containerapps-terraform")," folder and try the lab out. There you'll find instructions which will cover all the steps and tools you'll need implement autoscaling container apps within your own Azure subscription."),(0,r.kt)("p",null,"If you have any questions or feedback, please let us know in the comments below or reach out on Twitter ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/pauldotyu"},"@pauldotyu")),(0,r.kt)("p",null,"Have fun scaling your containers!"),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/scale-app"},"Set scaling rules in Azure Container Apps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://keda.sh/"},"Kubernetes Event-driven Autoscaling (KEDA)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://keda.sh/docs/scalers/"},"KEDA Scalers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/scale-app#keda-scalers-conversion"},"KEDA scalers conversion"))))}u.isMDXComponent=!0},99057:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aca-metadata-0e2c72a8f725a134927c493dde7d6c3e.png"},73531:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-3e6ce6ac4f59bb1c536972dced457df3.png"},17278:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom-rule-8b8243abebed96f7510e03e130741648.png"},35651:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/default-autoscaler-0be6a2dc11199a7e41b54c6902c80cf1.png"},54492:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/http-rule-0bab06ac77d779fb39cb439bd5e8d40f.png"},43789:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keda-arch-78fe1c48e2a47e18e6a933d96b90450a.png"},99026:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keda-metadata-cb6407e6b7c4f9265d18904fd60f417a.png"},44013:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/queue-rule-3405f4470633607d27599bedf3698d3f.png"}}]);