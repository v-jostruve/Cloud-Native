"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9129],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?o.createElement(h,i(i({ref:t},u),{},{components:a})):o.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={slug:"29-azure-developer-cli",title:"29. Code to Cloud with `azd`",authors:["savannah"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"<FIXME>",tags:["serverless-september","30-days-of-serverless","microservices","azd","azure-developer-cli"]},i=void 0,l={permalink:"/Cloud-Native/blog/29-azure-developer-cli",source:"@site/blog/2022-09-29/index.md",title:"29. Code to Cloud with `azd`",description:"<FIXME>",date:"2022-09-29T00:00:00.000Z",formattedDate:"September 29, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"microservices",permalink:"/Cloud-Native/blog/tags/microservices"},{label:"azd",permalink:"/Cloud-Native/blog/tags/azd"},{label:"azure-developer-cli",permalink:"/Cloud-Native/blog/tags/azure-developer-cli"}],readingTime:8.895,hasTruncateMarker:!1,authors:[{name:"Savannah Ostrowski",title:"Senior Product Manager @Microsoft",url:"https://twitter.com/savostrowski",imageURL:"https://github.com/savannahostrowski.png",key:"savannah"}],frontMatter:{slug:"29-azure-developer-cli",title:"29. Code to Cloud with `azd`",authors:["savannah"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"<FIXME>",tags:["serverless-september","30-days-of-serverless","microservices","azd","azure-developer-cli"]},prevItem:{title:"Serverless September - In a Nutshell",permalink:"/Cloud-Native/blog/serverless-status-post"},nextItem:{title:"28. Serverless + Power Platforms",permalink:"/Cloud-Native/blog/28-where-am-i"}},s={image:a(51999).Z,authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"<strong>A new tool has entered the chat:</strong> What is the Azure Developer CLI (<code>azd</code>)?",id:"a-new-tool-has-entered-the-chat-what-is-the-azure-developer-cli-azd",level:2},{value:"<strong>(Template) Anatomy 101</strong>: What makes an <code>azd</code> template?",id:"template-anatomy-101-what-makes-an-azd-template",level:2},{value:"Azure Developer CLI-specific files",id:"azure-developer-cli-specific-files",level:3},{value:"Application development support (code, run, debug, test)",id:"application-development-support-code-run-debug-test",level:3},{value:"Infrastructure as Code (provisioning and deploying infrastructure on Azure, programmatically)",id:"infrastructure-as-code-provisioning-and-deploying-infrastructure-on-azure-programmatically",level:3},{value:"CI/CD",id:"cicd",level:3},{value:"<strong>End-to-end support:</strong> Move code to cloud in a single step!",id:"end-to-end-support-move-code-to-cloud-in-a-single-step",level:2},{value:"If you want to follow along in this section and don&#39;t already have the Azure Developer CLI installed, check out these instructions to install it on Windows, Linux or MacOS in your favorite terminal!",id:"if-you-want-to-follow-along-in-this-section-and-dont-already-have-the-azure-developer-cli-installed-check-out-these-instructions-to-install-it-on-windows-linux-or-macos-in-your-favorite-terminal",level:3},{value:"Best practices: Monitoring and CI/CD!",id:"best-practices-monitoring-and-cicd",level:2},{value:"Application Monitoring",id:"application-monitoring",level:3},{value:"CI/CD",id:"cicd-1",level:3},{value:"<strong>Exercise:</strong> Try it yourself or create your own template!",id:"exercise-try-it-yourself-or-create-your-own-template",level:2},{value:"<strong>Resources</strong>",id:"resources",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/29-azure-developer-cli"}),(0,n.kt)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Code to Cloud with Azure Developer CLI"}),(0,n.kt)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Code to Cloud with Azure Developer CLI"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"@savostrowski"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/29-azure-developer-cli"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Welcome to ",(0,n.kt)("inlineCode",{parentName:"p"},"Day 29")," of #30DaysOfServerless!"),(0,n.kt)("p",null,"We are in the final days of the 30-day journey so it seemed appropriate to end the ",(0,n.kt)("em",{parentName:"p"},"End-to-End")," Developer Journey with a discussion on ",(0,n.kt)("em",{parentName:"p"},"tooling")," that can simplify and enhance the developer experience from development to deployment and beyond. Say hello to the ",(0,n.kt)("strong",{parentName:"p"},"Azure Developer CLI"),"."),(0,n.kt)("p",null,"Ready? Let's go!"),(0,n.kt)("admonition",{title:"Updated: October 6, 2022",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Today marked the ",(0,n.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/azure-sdk/azure-developer-cli-azd-october-2022-release/"},"October 22 release")," of the Azure Developer CLI - bringing with it a few new features and community-targeted resources. Look out for a follow-up post to this one that dives into more details, just in time for ",(0,n.kt)("strong",{parentName:"p"},"#Hacktoberfest!")," \ud83c\udf1f")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A new tool has entered the chat:")," Azure Developer CLI (",(0,n.kt)("inlineCode",{parentName:"li"},"azd"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"(Template) Anatomy 101"),": What makes an ",(0,n.kt)("inlineCode",{parentName:"li"},"azd")," template?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"End-to-end support:")," Move code to cloud in a single step!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Best practices:")," Monitor your application and run CI/CD on every commit"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Exercise:")," Try this yourself or create your own ",(0,n.kt)("inlineCode",{parentName:"li"},"azd")," template"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Resources:")," For self-study!")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(51999).Z,width:"1600",height:"672"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"a-new-tool-has-entered-the-chat-what-is-the-azure-developer-cli-azd"},(0,n.kt)("strong",{parentName:"h2"},"A new tool has entered the chat:")," What is the Azure Developer CLI (",(0,n.kt)("inlineCode",{parentName:"h2"},"azd"),")?"),(0,n.kt)("p",null,"The Azure Developer CLI (",(0,n.kt)("inlineCode",{parentName:"p"},"azd"),") is a new, open source tool that makes it quick and simple for you to move your application from your local development environment to Azure while considering your end-to-end developer workflow. You might be familiar with other CLIs that focus on Infrastructure as Code or scaffolding your application but the Azure Developer CLI does all that and more!"),(0,n.kt)("p",null,"The Azure Developer CLI commands are simple, high-level and map to core stages in your developer workflow. Think project initialization/creation, build, deploy, repeat!"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(90722).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,"By using ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/azure-dev/templates?source=serverless-september"},"idiomatic and flexible application templates"),", the Azure Developer CLI uses recipes for common application architectures that you can customize for your use case. These templates include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"best practices"),(0,n.kt)("li",{parentName:"ul"},'sample application code that goes beyond "Hello World!"'),(0,n.kt)("li",{parentName:"ul"},"infrastructure as code assets so you can move your code to the cloud and set up monitoring for your application, and"),(0,n.kt)("li",{parentName:"ul"},"all the bits to set up CI/CD to run on every commit to your repo against resources on Azure")),(0,n.kt)("p",null,"...all in the language(s) you're most comfortable in. You can use an ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/azure-dev/templates?source=serverless-september"},"existing template")," or even create your own (more on that later!)."),(0,n.kt)("h2",{id:"template-anatomy-101-what-makes-an-azd-template"},(0,n.kt)("strong",{parentName:"h2"},"(Template) Anatomy 101"),": What makes an ",(0,n.kt)("inlineCode",{parentName:"h2"},"azd")," template?"),(0,n.kt)("p",null,"So now that you've been introduced to the Azure Developer CLI, let's take a look at an ",(0,n.kt)("inlineCode",{parentName:"p"},"azd"),"-enabled codebase, which we call a template. You can think of a template as a recipe - it provides a solid foundation that you can customize depending on your preference/use case/requirements. "),(0,n.kt)("p",null,"To make this concrete and because it's #ServerlessSeptember, we're going to walk through this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/todo-python-mongo-swa-func"},"ToDo application template")," that uses Azure Static Web Apps and Azure Functions."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(46934).Z,width:"1475",height:"1509"})),(0,n.kt)("p",null,"Let's talk about the files in terms of their purpose:"),(0,n.kt)("h3",{id:"azure-developer-cli-specific-files"},"Azure Developer CLI-specific files"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"azure.yaml")," - contains metadata that describes the application (Azure hosts, languages, template name) and serves as an entrypoint for functionality in Visual Studio Code (oh yeah, you can also use ",(0,n.kt)("inlineCode",{parentName:"li"},"azd")," using ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-dev/vscode-ext?source=serverless-september"},"a VS Code extension"),"!).")),(0,n.kt)("h3",{id:"application-development-support-code-run-debug-test"},"Application development support (code, run, debug, test)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".devcontainer/")," - support for if you're ",(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/remote/containers"},"writing code in a container")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".vscode/")," - support for local development in Visual Studio Code via ",(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/debugging"},"launch.json")," (for debugging) and ",(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/tasks"},"tasks.json")," (for spinning up the web app for local development)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/")," - contains all the sample application code which you can modify or swap out for your own application"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tests/")," - test for the application, written using ",(0,n.kt)("a",{parentName:"li",href:"https://playwright.dev/"},"Playwright"))),(0,n.kt)("h3",{id:"infrastructure-as-code-provisioning-and-deploying-infrastructure-on-azure-programmatically"},"Infrastructure as Code (provisioning and deploying infrastructure on Azure, programmatically)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"infra/")," - contains all infrastructure as code (IaC) assets written in ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-resource-manager/bicep/overview?tabs=bicep"},"Bicep")," or ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-dev/terraform"},"Terraform"),"; includes logic to set up all components we need to set up the application on Azure, wire everything up securely, and monitor application health, performance and usage!")),(0,n.kt)("h3",{id:"cicd"},"CI/CD"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".github/")," - contains a GitHub Actions workflow to set up a CI/CD pipeline that runs on every new commit to the repo"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".azdo/")," - contains a Azure Pipelines workflow to set up a CI/CD pipeline that runs on every new commit to the repo")),(0,n.kt)("h2",{id:"end-to-end-support-move-code-to-cloud-in-a-single-step"},(0,n.kt)("strong",{parentName:"h2"},"End-to-end support:")," Move code to cloud in a single step!"),(0,n.kt)("h3",{id:"if-you-want-to-follow-along-in-this-section-and-dont-already-have-the-azure-developer-cli-installed-check-out-these-instructions-to-install-it-on-windows-linux-or-macos-in-your-favorite-terminal"},"If you want to follow along in this section and don't already have the Azure Developer CLI installed, check out ",(0,n.kt)("a",{parentName:"h3",href:"https://aka.ms/azure-dev/install-instructions?source=serverless-september"},"these instructions")," to install it on Windows, Linux or MacOS in your favorite terminal!"),(0,n.kt)("p",null,"So now that we've gone over what this template contains on GitHub, let's pull this template code down to our local machine, set it up for local development, provision the right infrastructure, and deploy the code on Azure in a ",(0,n.kt)("strong",{parentName:"p"},"single step"),"."),(0,n.kt)("p",null,"When designing the CLI, we wanted the experience to be both flexible and non-magical (no side effects, easy to understand). So, we're going to run this all with ",(0,n.kt)("inlineCode",{parentName:"p"},"azd up")," but you could alternatively run a series of three commands and the outcome would be the same - ",(0,n.kt)("inlineCode",{parentName:"p"},"azd init --t Azure-Samples/todo-python-mongo-swa-func")," (to pull the code down to your machine), ",(0,n.kt)("inlineCode",{parentName:"p"},"azd provision")," (to provision infrastructure) and then ",(0,n.kt)("inlineCode",{parentName:"p"},"azd deploy")," (to deploy application code on Azure). Choose your own adventure!"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(98578).Z,width:"1226",height:"366"})),(0,n.kt)("p",null,"So let's walk through it. On running ",(0,n.kt)("inlineCode",{parentName:"p"},"azd up -t todo-python-mongo-swa-func"),", I'm prompted for a couple pieces of information as part of the ",(0,n.kt)("inlineCode",{parentName:"p"},"azd init")," process being run under the hood:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- **An environment name** - the prefix for the resource group that will be created to hold all Azure resources\n- **An Azure region** - the Azure location where your resources will be deployed\n- **An Azure subscription** - the Azure subscription where your resources will be deployed\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9205).Z,width:"1352",height:"122"})),(0,n.kt)("p",null,"Once that information is provided, ",(0,n.kt)("inlineCode",{parentName:"p"},"azd")," will pull down the code from GitHub and create a ",(0,n.kt)("inlineCode",{parentName:"p"},".azure/")," directory in the project root that contains all Azure Developer CLI environment information that you just entered. This directory will be important when it comes time to provision and deploy infrastructure in the next step in the ",(0,n.kt)("inlineCode",{parentName:"p"},"up")," process."),(0,n.kt)("p",null,"The next step here is provisioning. ",(0,n.kt)("inlineCode",{parentName:"p"},"azd")," is running ",(0,n.kt)("inlineCode",{parentName:"p"},"azd provision")," on your behalf and leveraging the IaC assets in the ",(0,n.kt)("inlineCode",{parentName:"p"},".infra/")," directory in the project. As the tool works to provision, you'll see an output of each resource (name alongside a unique identifier which you can use to reference back to the Azure Portal, if you want)\n",(0,n.kt)("img",{src:a(46046).Z,width:"1878",height:"265"})),(0,n.kt)("p",null,"Finally, the final step here in running ",(0,n.kt)("inlineCode",{parentName:"p"},"azd up")," is deployment. ",(0,n.kt)("inlineCode",{parentName:"p"},"azd")," is running ",(0,n.kt)("inlineCode",{parentName:"p"},"azd deploy")," and deploying the application code to the resources that we're provisioned in the previous phase of the process. Once this has completed, you'll be able to click on two different endpoint URLs - one for the backend and one for the frontend.\n",(0,n.kt)("img",{src:a(37944).Z,width:"1234",height:"201"})),(0,n.kt)("p",null,"The backend endpoint (",(0,n.kt)("inlineCode",{parentName:"p"},"service api"),") hosts the specification for the API via the ",(0,n.kt)("inlineCode",{parentName:"p"},"openapi.yaml")," file that's also in the root of the project template. You can explore the endpoints that are available in the web app here.\n",(0,n.kt)("img",{src:a(85760).Z,width:"1466",height:"883"})),(0,n.kt)("p",null,"The frontend endpoint (",(0,n.kt)("inlineCode",{parentName:"p"},"service web"),") hosts a fully-fledged and functional ToDo web app with a UI, Cosmos DB for the database and Key Vault for application secrets. This isn't just application hosting. It's really everything you need to be successful and productive, all set up on your behalf by the Azure Developer CLI.\n",(0,n.kt)("img",{src:a(80069).Z,width:"1916",height:"767"})),(0,n.kt)("p",null,"...and that's it! We've successfully deployed our application on Azure! "),(0,n.kt)("p",null,"But there's more!"),(0,n.kt)("h2",{id:"best-practices-monitoring-and-cicd"},"Best practices: Monitoring and CI/CD!"),(0,n.kt)("p",null,"In my opinion, it's not enough to ",(0,n.kt)("em",{parentName:"p"},"just")," set up the application on Azure! I want to know that my web app is performant and serving my users reliably! I also want to make sure that I'm not inadvertently breaking my application as I continue to make changes to it. Thankfully, the Azure Developer CLI also handles all of this via two additional commands - ",(0,n.kt)("inlineCode",{parentName:"p"},"azd monitor")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"azd pipeline config"),"."),(0,n.kt)("h3",{id:"application-monitoring"},"Application Monitoring"),(0,n.kt)("p",null,"When we provisioned all of our infrastructure, we also set up application monitoring via a Bicep file in our ",(0,n.kt)("inlineCode",{parentName:"p"},".infra/")," directory that spec'd out an Application Insights dashboard. By running ",(0,n.kt)("inlineCode",{parentName:"p"},"azd monitor")," we can see the dashboard with live metrics that was configured for the application.\n",(0,n.kt)("img",{src:a(99074).Z,width:"1653",height:"764"})),(0,n.kt)("p",null,"We can also navigate to the Application Dashboard by clicking on the resource group name, where you can set a specific refresh rate for the dashboard, and see usage, reliability, and performance metrics over time.\n",(0,n.kt)("img",{src:a(39902).Z,width:"1553",height:"865"})),(0,n.kt)("p",null,"I don't know about everyone else but I have spent a ton of time building out similar dashboards. It can be super time-consuming to write all the queries and create the visualizations so this feels like a real time saver."),(0,n.kt)("h3",{id:"cicd-1"},"CI/CD"),(0,n.kt)("p",null,"Finally let's talk about setting up CI/CD! This might be my favorite ",(0,n.kt)("inlineCode",{parentName:"p"},"azd")," feature. As I mentioned before, the Azure Developer CLI has a command, ",(0,n.kt)("inlineCode",{parentName:"p"},"azd pipeline config"),", which uses the files in the ",(0,n.kt)("inlineCode",{parentName:"p"},".github/")," directory to set up a GitHub Action. More than that, if there is no upstream repo, the Developer CLI will actually help you create one. But what does this mean exactly? Because our GitHub Action is using the same commands you'd run in the CLI under the hood, we're actually going to have CI/CD set up to run on every commit into the repo, against real Azure resources. What a sweet collaboration feature!"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(10268).Z,width:"1798",height:"960"})),(0,n.kt)("p",null,"That's it! We've gone end-to-end with the Azure Developer CLI - initialized a project, provisioned the resources on Azure, deployed our code on Azure, set up monitoring logs and dashboards, and set up a CI/CD pipeline with GitHub Actions to run on every commit into the repo (on real Azure resources!)."),(0,n.kt)("h2",{id:"exercise-try-it-yourself-or-create-your-own-template"},(0,n.kt)("strong",{parentName:"h2"},"Exercise:")," Try it yourself or create your own template!"),(0,n.kt)("p",null,"As an exercise, try out the workflow above with ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/azure-dev/templates"},"any template on GitHub"),"!"),(0,n.kt)("p",null,"Or, try turning your own project into an Azure Developer CLI-enabled template by following ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/azure-dev/enabletemplate"},"this guidance"),". If you create your own template, don't forget to tag the repo with the ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/azure-dev/templates"},(0,n.kt)("inlineCode",{parentName:"a"},"azd-templates")," topic")," on GitHub to help others find it (unfamiliar with GitHub topics? ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics#adding-topics-to-your-repository"},"Learn how to add topics to your repo"),")! We'd also love to chat with you about your experience creating an ",(0,n.kt)("inlineCode",{parentName:"p"},"azd")," template - if you're open to providing feedback around this, please fill out ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/azd-user-research-signup?source=serverless-september"},"this form"),"!"),(0,n.kt)("h2",{id:"resources"},(0,n.kt)("strong",{parentName:"h2"},"Resources")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/announcing-azure-dev-cli?source=serverless-september"},"Read more about the Azure Developer CLI preview release")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-dev/install-instructions?source=serverless-september"},"Install the Azure Developer CLI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azd?source=serverless-september"},"Familiarize yourself with our Developer Hub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-dev/templates?source=serverless-september"},"Take a look at some foundational templates on GitHub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-dev/vscode-ext?source=serverless-september"},"Download the Azure Developer CLI VS Code extension"))))}d.isMDXComponent=!0},46934:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/arch-diagram-9fc83dea79bdc2778665a6129823c6cd.png"},90722:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/azd-workflow-163d61cf5c6aa44a23dd4dda9858a296.png"},85760:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/backend-61ff7bb024093a01f81ff1b2efcc5630.png"},51999:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/banner-ae42f77f55dd26f67623a51594c4d1e7.png"},39902:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dashboard-97724f78d1fcc7c1e075e41498f62fa4.png"},37944:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/deploy-up-6d2e9abe348976287738e4acde709a80.png"},80069:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/frontend-2c29ef61f79ab80a1f5486d3d29b242d.png"},99074:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/metrics-a7988df3076a04e473ddb210c80c95cf.png"},10268:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/pipeline-config-40319f9d957eb87325aa11427e1801eb.png"},46046:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/provision-up-dd676acea00f3760ddd140713ce9169a.png"},98578:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/single-step-b78e3ff4650026486170cea1a4931152.png"},9205:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/start-up-93fc105dd5d9305c5b28c5912481341d.png"}}]);