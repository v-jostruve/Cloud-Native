"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6785],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=o,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||n;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={slug:"zero2hero-aca-06",title:"\ud83d\ude80 | Observability with ACA",authors:["mikemorton"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","containerapps","serverless","concepts"],image:"./img/banner.png",description:"Azure Container Apps provides several observability features to help you debug and diagnose your apps. There are both Azure portal and CLI options you can use to help understand the health of your apps and help identify when issues arise. Let's explore the options.",tags:["serverless-september","zero-to-hero","azure-container-apps","dapr"]},i=void 0,s={permalink:"/Cloud-Native/blog/zero2hero-aca-06",source:"@site/blog/zero-to-hero/2022-09-19-containerapps.md",title:"\ud83d\ude80 | Observability with ACA",description:"Azure Container Apps provides several observability features to help you debug and diagnose your apps. There are both Azure portal and CLI options you can use to help understand the health of your apps and help identify when issues arise. Let's explore the options.",date:"2022-09-19T00:00:00.000Z",formattedDate:"September 19, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"zero-to-hero",permalink:"/Cloud-Native/blog/tags/zero-to-hero"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"}],readingTime:4.835,hasTruncateMarker:!1,authors:[{name:"Mike Morton",title:"Principal PM, Container Apps @Microsoft",url:"https://github.com/BigMorty",imageURL:"https://github.com/BigMorty.png",key:"mikemorton"}],frontMatter:{slug:"zero2hero-aca-06",title:"\ud83d\ude80 | Observability with ACA",authors:["mikemorton"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","containerapps","serverless","concepts"],image:"./img/banner.png",description:"Azure Container Apps provides several observability features to help you debug and diagnose your apps. There are both Azure portal and CLI options you can use to help understand the health of your apps and help identify when issues arise. Let's explore the options.",tags:["serverless-september","zero-to-hero","azure-container-apps","dapr"]},prevItem:{title:"14. Build ACA with Dapr",permalink:"/Cloud-Native/blog/14-dapr-aca-quickstart"},nextItem:{title:"\ud83d\ude80 | Error Handling w/ Apache Kafka",permalink:"/Cloud-Native/blog/zero2hero-func-05"}},l={image:a(77360).Z,authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Log Streaming",id:"log-streaming",level:2},{value:"Console Connect",id:"console-connect",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Log Analytics",id:"log-analytics",level:2},{value:"Alerts",id:"alerts",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/zero2hero-aca-06"}),(0,o.kt)("meta",{name:"twitter:title",content:"#ZeroToHero: Observability with Azure Container Apps"}),(0,o.kt)("meta",{name:"twitter:description",content:"#ZeroToHero: Observability with Azure Container Apps"}),(0,o.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/serverless-zero2hero.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,o.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/observability-with-azure-container-apps/ba-p/3627909"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Day 19")," of #30DaysOfServerless!"),(0,o.kt)("p",null,"Today, we have a special set of posts from our ",(0,o.kt)("a",{parentName:"p",href:"/serverless-september/ZeroToHero"},"Zero To Hero \ud83d\ude80")," initiative, featuring blog posts authored by our Product Engineering teams for #ServerlessSeptember. ",(0,o.kt)("em",{parentName:"p"},"Posts were originally published on the ",(0,o.kt)("a",{parentName:"em",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/observability-with-azure-container-apps/ba-p/3627909?WT.mc_id=javascript-74010-cxa"},"Apps on Azure")," blog on Microsoft Tech Community.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Log Streaming - in Azure Portal"),(0,o.kt)("li",{parentName:"ul"},"Console Connect - in Azure Portal"),(0,o.kt)("li",{parentName:"ul"},"Metrics - using Azure Monitor"),(0,o.kt)("li",{parentName:"ul"},"Log Analytics - using Azure Monitor"),(0,o.kt)("li",{parentName:"ul"},"Metric Alerts and Log Alerts - using Azure Monitor")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(57120).Z,width:"1600",height:"672"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In past weeks, ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/296868"},"@kendallroden")," wrote about ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/go-cloud-native-with-azure-container-apps/ba-p/3616407"},"what it means to be cloud native")," and ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/236816"},"@Anthony Chu")," the various ways to ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/journey-to-the-cloud-with-azure-container-apps/ba-p/3622609"},"get your apps running on Azure Container Apps"),". Today, we will talk about the ",(0,o.kt)("strong",{parentName:"p"},"observability tools")," you can use to observe, debug, and diagnose your Azure Container Apps."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Azure Container Apps")," provides several observability features to help you debug and diagnose your apps. There are both Azure portal and CLI options you can use to help understand the health of your apps and help identify when issues arise."),(0,o.kt)("p",null,"While these features are helpful throughout your container app\u2019s lifetime, there are two that are especially helpful.  Log streaming and console connect can be a huge help in the initial stages when issues often rear their ugly head. Let's dig into both of these a little."),(0,o.kt)("h2",{id:"log-streaming"},"Log Streaming"),(0,o.kt)("p",null,"Log streaming allows you to use the Azure portal to view the streaming logs from your app. You\u2019ll see the logs written from the app to the container\u2019s console (stderr and stdout). If your app is running multiple revisions, you can choose from which revision to view logs. You can also select a specific replica if your app is configured to scale. Lastly, you can choose from which container to view the log output. This is useful when you are running a custom or Dapr sidecar container.\n",(0,o.kt)("img",{alt:"view streaming logs",src:a(88740).Z,width:"549",height:"334"})),(0,o.kt)("p",null,"Here\u2019s an example CLI command to view the logs of a container app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az containerapp logs show -n MyContainerapp -g MyResourceGroup\n")),(0,o.kt)("p",null,"You can find more information about the different options in our ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/container-apps/logs-cli"},"CLI docs"),"."),(0,o.kt)("h2",{id:"console-connect"},"Console Connect"),(0,o.kt)("p",null,"In the Azure portal, you can connect to the console of a container in your app. Like log streaming, you can select the revision, replica, and container if applicable. After connecting to the console of the container, you can execute shell commands and utilities that you have installed in your container.  You can view files and their contents, monitor processes, and perform other debugging tasks."),(0,o.kt)("p",null,"This can be great for checking configuration files or even modifying a setting or library your container is using. Of course, updating a container in this fashion is not something you should do to a production app, but tweaking and re-testing an app in a non-production environment can speed up development."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(38276).Z,width:"550",height:"336"})),(0,o.kt)("p",null,"Here\u2019s an example CLI command to connect to the console of a container app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az containerapp exec -n MyContainerapp -g MyResourceGroup\n")),(0,o.kt)("p",null,"You can find more information about the different options in our ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/container-apps/exec-cli"},"CLI docs"),"."),(0,o.kt)("h2",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"Azure Monitor collects metric data from your container app at regular intervals to help you gain insights into the performance and health of your container app. Container apps provide these metrics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CPU usage"),(0,o.kt)("li",{parentName:"ul"},"Memory working set bytes"),(0,o.kt)("li",{parentName:"ul"},"Network in bytes"),(0,o.kt)("li",{parentName:"ul"},"Network out bytes"),(0,o.kt)("li",{parentName:"ul"},"Requests"),(0,o.kt)("li",{parentName:"ul"},"Replica count"),(0,o.kt)("li",{parentName:"ul"},"Replica restart count")),(0,o.kt)("p",null,"Here you can see the metrics explorer showing the replica count for an app as it scaled from one replica to fifteen, and then back down to one."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(18427).Z,width:"550",height:"319"})),(0,o.kt)("p",null,"You can also retrieve metric data through ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/container-apps/azure-monitor-metrics-cli"},"the Azure CLI"),"."),(0,o.kt)("h2",{id:"log-analytics"},"Log Analytics"),(0,o.kt)("p",null,"Azure Monitor Log Analytics is great for viewing your historical logs emitted from your container apps. There are two custom tables of interest, the ContainerAppConsoleLogs_CL which contains all the log messages written by your app (stdout and stderr), and the ContainerAppSystemLogs_CL which contain the system messages from the Azure Container Apps service.\t"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(29181).Z,width:"550",height:"345"})),(0,o.kt)("p",null,"You can also query Log Analytics through the ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/container-apps/azure-monitor-logs-cli"},"Azure CLI"),"."),(0,o.kt)("h2",{id:"alerts"},"Alerts"),(0,o.kt)("p",null,"Azure Monitor alerts notify you so that you can respond quickly to critical issues. There are two types of alerts that you can define:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-monitor/alerts/alerts-types#metric-alerts"},"Metric alerts")," based on Azure Monitor metric data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-monitor/alerts/alerts-types#log-alerts"},"Log alerts")," based on Azure Monitor Log Analytics data")),(0,o.kt)("p",null,"You can create alert rules from metric charts in the metric explorer and from queries in Log Analytics. You can also define and manage alerts from the ",(0,o.kt)("strong",{parentName:"p"},"Monitor|Alerts")," page."),(0,o.kt)("p",null,"Here is what creating an alert looks like in the Azure portal. In this case we are setting an alert rule from the metric explorer to trigger an alert if the replica restart count for a specific container app is greater than two within the last fifteen minutes."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(14190).Z,width:"550",height:"302"})),(0,o.kt)("p",null,"To learn more about alerts, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-monitor/alerts/alerts-overview"},"Overview of alerts in Microsoft Azure"),"."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this article, we looked at the several ways to observe, debug, and diagnose your Azure Container Apps. As you can see there are rich portal tools and a complete set of CLI commands to use. All the tools are helpful throughout the lifecycle of your app, be sure to take advantage of them when having an issue and/or to prevent issues."),(0,o.kt)("p",null,"To learn more, visit ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/containerapps"},"Azure Container Apps | Microsoft Azure")," today!"),(0,o.kt)("admonition",{title:"ASK THE EXPERT: LIVE Q&A",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Azure Container Apps team will answer questions live on ",(0,o.kt)("strong",{parentName:"p"},"September 29"),". "),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactor.microsoft.com/reactor/events/17004/?WT.mc_id=javascript-74010-ninarasi"},"Sign up to attend")," for live Q&A with the team"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Azure/Cloud-Native/issues/new?assignees=&labels=ask+the+expert&template=---ask-the-expert-.md&title=%5BAsk+The+Expert%5D++"},"submit your questions")," ahead of time, for prioritization."))))}c.isMDXComponent=!0},77360:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-89c6e86cfbf02935e85318d7a3d3b4ff.png"},57120:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mike-aca-observability-fdc8af07553b1411298f719b22ceca15.png"},88740:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mike-observability-1-f28ac55d716d668659b11621cee6119c.png"},38276:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mike-observability-2-2e21617739406a5d9b090b9580b95dd3.png"},18427:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mike-observability-3-fcd3dd1c9bc4cc4ab8df18c1321502a8.png"},29181:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mike-observability-4-d284a4303e3c243917edb8eb2685f1ac.png"},14190:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mike-observability-5-b64a5cdcac00d2090c8efdd42861e339.png"}}]);