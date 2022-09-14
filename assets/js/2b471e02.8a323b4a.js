"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6995],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(4137));const r={slug:"03-functions-quickstart",title:"03. Build Your First Function",authors:["nitya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Let's build our first Azure Functions app - and get familiar with the relevant developer tools and resources!",tags:["serverless-september","30-days-of-serverless","azure-functions","vscode","devtools"]},i=void 0,s={permalink:"/Cloud-Native/blog/03-functions-quickstart",source:"@site/blog/2022-09-03/index.md",title:"03. Build Your First Function",description:"Let's build our first Azure Functions app - and get familiar with the relevant developer tools and resources!",date:"2022-09-03T00:00:00.000Z",formattedDate:"September 3, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"},{label:"vscode",permalink:"/Cloud-Native/blog/tags/vscode"},{label:"devtools",permalink:"/Cloud-Native/blog/tags/devtools"}],readingTime:8.155,hasTruncateMarker:!1,authors:[{name:"Nitya Narasimhan",title:"Senior Cloud Advocate, Illustrator",url:"https://github.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"}],frontMatter:{slug:"03-functions-quickstart",title:"03. Build Your First Function",authors:["nitya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Let's build our first Azure Functions app - and get familiar with the relevant developer tools and resources!",tags:["serverless-september","30-days-of-serverless","azure-functions","vscode","devtools"]},prevItem:{title:"02. Learn Core Concepts",permalink:"/Cloud-Native/blog/02-functions-intro"},nextItem:{title:"04. Functions For Java Devs",permalink:"/Cloud-Native/blog/04-functions-java"}},l={image:n(6459).Z,authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Developer Guidance",id:"developer-guidance",level:2},{value:"My First Function App",id:"my-first-function-app",level:2},{value:"Install VSCode Extension",id:"install-vscode-extension",level:3},{value:"Create First Function App",id:"create-first-function-app",level:3},{value:"Explore the Code",id:"explore-the-code",level:3},{value:"Preview Function App Locally",id:"preview-function-app-locally",level:3},{value:"(Re)Deploy to Azure",id:"redeploy-to-azure",level:3},{value:"About Core Tools",id:"about-core-tools",level:2},{value:"About Local Testing",id:"about-local-testing",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/03-functions-quickstart"}),(0,a.kt)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Build Your First Function"}),(0,a.kt)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Build Your First Function"}),(0,a.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,a.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,a.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,a.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/03-functions-quickstart"})),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Welcome to ",(0,a.kt)("inlineCode",{parentName:"p"},"Day 3")," of #30DaysOfServerless!"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Yesterday")," we learned core concepts and terminology for Azure Functions, the signature ",(0,a.kt)("em",{parentName:"p"},"Functions-as-a-Service")," option on Azure. ",(0,a.kt)("em",{parentName:"p"},"Today")," we take our first steps into building and deploying an Azure Functions app, and validate local development setup."),(0,a.kt)("p",null,"Ready? Let's go."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Review the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/functions-reference?tabs=blob&WT.mc_id=javascript-74010-ninarasi"},"Azure Functions Developer Guide")),(0,a.kt)("li",{parentName:"ul"},"Build your first Function App ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-node?WT.mc_id=javascript-74010-ninarasi"},"with VS Code")),(0,a.kt)("li",{parentName:"ul"},"Develop locally ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2"},"using Azure Functions Core Tools")),(0,a.kt)("li",{parentName:"ul"},"Review ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/functions-develop-local?WT.mc_id=javascript-74010-ninarasi"},"Local Testing & Development")," guidelines"),(0,a.kt)("li",{parentName:"ul"},"Check out the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/durable/quickstart-js-vscode?WT.mc_id=javascript-74010-ninarasi"},"Durable Functions Quickstart")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Exercise"),": Take the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-74010-ninarasi"},"Cloud Skills Challenge"),"!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Resources"),": ",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/30DaysOfServerless/collection"},"#30DaysOfServerless Collection"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6459).Z,width:"1600",height:"672"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"developer-guidance"},"Developer Guidance"),(0,a.kt)("p",null,"Before we jump into development, let's familiarize ourselves with language-specific guidance from the Azure Functions Developer Guide. We'll review the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/functions-reference?tabs=blob&WT.mc_id=javascript-74010-ninarasi"},"JavaScript version")," but guides for F#, Java, Python, C# and PowerShell are also available."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"function")," is defined by two things: ",(0,a.kt)("em",{parentName:"p"},"code")," (written in a supported programming language) and ",(0,a.kt)("em",{parentName:"p"},"configuration")," (specified in a ",(0,a.kt)("inlineCode",{parentName:"p"},"functions.json")," file, declaring the triggers, bindings and other context for execution).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"function app")," is the ",(0,a.kt)("em",{parentName:"p"},"unit of deployment")," for your functions, and is associated with a single execution context or runtime. It can contain multiple functions, but they ",(0,a.kt)("em",{parentName:"p"},"must")," be in the same language. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"host configuration")," is ",(0,a.kt)("em",{parentName:"p"},"runtime-specific configuration")," that affects all functions running in a given function app instance. It is defined in a ",(0,a.kt)("inlineCode",{parentName:"p"},"host.json")," file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A recommended ",(0,a.kt)("strong",{parentName:"p"},"folder structure")," is defined for the function app, but may vary based on the programming language used. Check ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/functions-reference?tabs=blob#folder-structure&WT.mc_id=javascript-74010-ninarasi"},"the documentation on folder structures")," to learn the default for ",(0,a.kt)("em",{parentName:"p"},"your")," preferred language."))),(0,a.kt)("p",null,"Here's an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/functions-reference-node?WT.mc_id=javascript-74010-ninarasi"},"example of the JavaScript folder structure")," for a function app containing two functions with some shared dependencies. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"host.json")," (runtime configuration) is defined once, in the root directory. And ",(0,a.kt)("inlineCode",{parentName:"p"},"function.json")," is defined separately for each function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FunctionsProject\n | - MyFirstFunction\n | | - index.js\n | | - function.json\n | - MySecondFunction\n | | - index.js\n | | - function.json\n | - SharedCode\n | | - myFirstHelperFunction.js\n | | - mySecondHelperFunction.js\n | - node_modules\n | - host.json\n | - package.json\n | - local.settings.json\n")),(0,a.kt)("p",null,"We'll dive into what the contents of these files look like, when we build and deploy the first function. We'll cover ",(0,a.kt)("inlineCode",{parentName:"p"},"local.settings.json")," in the ",(0,a.kt)("em",{parentName:"p"},"About Local Testing")," section at the end."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"my-first-function-app"},"My First Function App"),(0,a.kt)("p",null,"The documentation provides ",(0,a.kt)("strong",{parentName:"p"},"quickstart")," options for all supported languages. We'll walk through the ",(0,a.kt)("em",{parentName:"p"},"JavaScript")," versions in this article. You have two options for development: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-node"},"Visual Studio Code")," for an IDE-driven experience"),(0,a.kt)("li",{parentName:"ul"},"using ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-cli-node?tabs=azure-cli%2Cbrowser"},"Azure CLI")," for a commandline-driven experience.")),(0,a.kt)("p",null,"I'm a huge fan of VS Code - so I'll be working through that tutorial today. "),(0,a.kt)("admonition",{title:"PRE-REQUISITES",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Have an Azure account (with active subscription) | ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://azure.microsoft.com/free/?ref=microsoft.com&utm_source=microsoft.com&utm_medium=docs&utm_campaign=visualstudio"},"Create one for free"))),(0,a.kt)("li",{parentName:"ul"},"Install Azure Functions Core Tools | ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local#v2"},"Verify it's version 4.x"))),(0,a.kt)("li",{parentName:"ul"},"Install Azure Functions VS Code Extension | ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions"},"Currently v 1.7.4"))),(0,a.kt)("li",{parentName:"ul"},"Install Node.js v16 or v18 (preview) | ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/nvm-sh/nvm"},"Manage versions with NVM")))),(0,a.kt)("p",{parentName:"admonition"},"Don't forget to validate your setup by checking the versions of installed software.")),(0,a.kt)("h3",{id:"install-vscode-extension"},"Install VSCode Extension"),(0,a.kt)("p",null,"Installing the Visual Studio Code extension should automatically open this page in your IDE with similar quickstart instructions, but potentially more recent screenshots."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Visual Studio Code Extension for VS Code",src:n(2523).Z,width:"1318",height:"968"})),(0,a.kt)("p",null," Note that it may make sense to install the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack"},"Azure tools for Visual Studio Code")," extensions pack if you plan on working through the many projects in Serverless September. This includes the Azure Functions extension by default."),(0,a.kt)("h3",{id:"create-first-function-app"},"Create First Function App"),(0,a.kt)("p",null,"Walk through the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-node#create-an-azure-functions-project"},"Create local [project]")," steps of the quickstart. The process is quick and painless and scaffolds out this folder structure and files. Note the existence (and locations) of ",(0,a.kt)("inlineCode",{parentName:"p"},"functions.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"host.json")," files."),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"Final screenshot for VS Code workflow",src:n(4267).Z,width:"1299",height:"898"})),(0,a.kt)("h3",{id:"explore-the-code"},"Explore the Code"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Check out the ",(0,a.kt)("inlineCode",{parentName:"strong"},"functions.json")," configuration file.")," It shows that the function is activated by an ",(0,a.kt)("inlineCode",{parentName:"p"},"httpTrigger")," with an input binding (tied to ",(0,a.kt)("inlineCode",{parentName:"p"},"req")," payload) and an output binding (tied to ",(0,a.kt)("inlineCode",{parentName:"p"},"res")," payload). And it supports both GET and POST requests on the exposed URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bindings": [\n    {\n      "authLevel": "anonymous",\n      "type": "httpTrigger",\n      "direction": "in",\n      "name": "req",\n      "methods": [\n        "get",\n        "post"\n      ]\n    },\n    {\n      "type": "http",\n      "direction": "out",\n      "name": "res"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Check out ",(0,a.kt)("inlineCode",{parentName:"strong"},"index.js")," - the function implementation"),". We see it logs a message to the console when invoked. It then extracts a ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," value from the input payload (req) and crafts a different ",(0,a.kt)("inlineCode",{parentName:"p"},"responseMessage")," based on the presence/absence of a valid name. It returns this response in the output payload (res)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = async function (context, req) {\n    context.log(\'JavaScript HTTP trigger function processed a request.\');\n\n    const name = (req.query.name || (req.body && req.body.name));\n    const responseMessage = name\n        ? "Hello, " + name + ". This HTTP triggered function executed successfully."\n        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";\n\n    context.res = {\n        // status: 200, /* Defaults to 200 */\n        body: responseMessage\n    };\n}\n')),(0,a.kt)("h3",{id:"preview-function-app-locally"},"Preview Function App Locally"),(0,a.kt)("p",null,"You can now run this function app locally using ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local"},"Azure Functions Core Tools"),". VS Code integrates seamlessly with this CLI-based tool, making it possible for you to exploit all its capabilities without leaving the IDE. In fact, the workflow will even prompt you to ",(0,a.kt)("em",{parentName:"p"},"install")," those tools if they didn't already exist in your local dev environment."),(0,a.kt)("p",null,'Now run the function app locally by clicking on the "Run and Debug" icon in the activity bar (highlighted, left) and pressing the "\u25b6\ufe0f" (',(0,a.kt)("inlineCode",{parentName:"p"},"Attach to Node Functions"),") to start execution. On success, your console output should show something like this. "),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"Final screenshot for VS Code workflow",src:n(5798).Z,width:"1298",height:"896"})),(0,a.kt)("p",null,"You can test the function locally by visiting the Function Url shown (",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:7071/api/HttpTrigger1"),") or by opening the ",(0,a.kt)("em",{parentName:"p"},"Workspace")," region of the Azure extension, and selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Execute Function now")," menu item as shown."),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"Final screenshot for VS Code workflow",src:n(2126).Z,width:"1298",height:"713"})),(0,a.kt)("p",null,"In the latter case, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter request body")," popup will show a pre-populated request of ",(0,a.kt)("inlineCode",{parentName:"p"},'{"name":"Azure"}')," that you can submit. "),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"Final screenshot for VS Code workflow",src:n(8449).Z,width:"810",height:"86"})),(0,a.kt)("p",null," On successful execution, your VS Code window will show a notification as follows. Take note of the console output - it shows the message encoded in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),"."),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"Final screenshot for VS Code workflow",src:n(568).Z,width:"670",height:"234"})),(0,a.kt)("p",null,"You can also visit the deployed function URL directly in a local browser - testing the case for a request made with no ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," payload attached. Note how the response in the browser now shows the non-personalized version of the message!"),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"Final screenshot for VS Code workflow",src:n(682).Z,width:"442",height:"95"})),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\ud83c\udf89 ",(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Congratulations")),(0,a.kt)("p",{parentName:"admonition"},"You created and ran a function app locally!")),(0,a.kt)("h3",{id:"redeploy-to-azure"},"(Re)Deploy to Azure"),(0,a.kt)("p",null,"Now, just follow the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-node#publish-the-project-to-azure"},"creating a function app in Azure")," steps to deploy it to Azure, using an active subscription! The deployed app resource should now show up under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Function App")," Resources where you can click ",(0,a.kt)("inlineCode",{parentName:"p"},"Execute Function Now")," to test the Azure-deployed version instead. You can also look up the function URL in the portal and visit that link in your local browser to trigger the function without the name context."),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\ud83c\udf89 ",(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Congratulations")),(0,a.kt)("p",{parentName:"admonition"},"You have an Azure-hosted serverless function app!")),(0,a.kt)("p",null,"Challenge yourself and try to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-node#run-the-function-in-azure"},"change the code and redeploy")," to Azure to return something different. ",(0,a.kt)("em",{parentName:"p"},"You have effectively created a serverless API endpoint!")," "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"about-core-tools"},"About Core Tools"),(0,a.kt)("p",null,"That was a lot to cover! In the next few days we'll have more examples for Azure Functions app development - focused on different programming languages. So let's wrap today's post by reviewing two helpful resources."),(0,a.kt)("p",null,"First, let's talk about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2"},"Azure Functions Core Tools")," - the command-line tool that lets you develop, manage, and deploy, Azure Functions projects from your ",(0,a.kt)("strong",{parentName:"p"},"local development environment"),". It is used transparently by the VS Code extension - but you can use it directly from a terminal for a powerful command-line end-to-end developer experience! The Core Tools commands are organized into the following contexts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-init"},(0,a.kt)("inlineCode",{parentName:"a"},"func"))," - commands to create and run functions locally"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-azure-functionapp-fetch-app-settings"},(0,a.kt)("inlineCode",{parentName:"a"},"func azure"))," - work with resource slike Azure Functions and Azure Storage"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-durable-delete-task-hub"},(0,a.kt)("inlineCode",{parentName:"a"},"func durable"))," - work with Durable Functions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-extensions-install"},(0,a.kt)("inlineCode",{parentName:"a"},"func extensions"))," - manage extensions (default nuget.org)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-kubernetes-deploy"},(0,a.kt)("inlineCode",{parentName:"a"},"func kubernetes"))," - work with Kubernetes and Azure Functions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-settings-decrypt"},(0,a.kt)("inlineCode",{parentName:"a"},"func settings"))," - manage environment settings for local Functions host"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-templates-list"},(0,a.kt)("inlineCode",{parentName:"a"},"func templates"))," - list available templates")),(0,a.kt)("p",null,"Learn how to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local?tabs=v4%2Cmacos%2Ccsharp%2Cportal%2Cbash"},"work with Azure Functions Core Tools"),". Not only can it help with quick command execution, it can also be invaluable for debugging issues that may not always be visible or understandable in an IDE."),(0,a.kt)("h2",{id:"about-local-testing"},"About Local Testing"),(0,a.kt)("p",null,"You might have noticed that the scaffold also produced a ",(0,a.kt)("inlineCode",{parentName:"p"},"local.settings.json")," file. What is that and why is it useful? By definition, the local.settings.json file ",(0,a.kt)("em",{parentName:"p"},'"stores app settings and settings used by local development tools. Settings in the local.settings.json file are used only when you\'re running your project locally."')),(0,a.kt)("p",null,"Read the guidance on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/functions-develop-local?WT.mc_id=javascript-74010-ninarasi#local-settings-file"},"Code and test Azure Functions Locally")," to learn more about how to configure development environments locally, for your preferred programming language, to support testing and debugging on the local Functions runtime."),(0,a.kt)("h2",{id:"exercise"},"Exercise"),(0,a.kt)("p",null,"We made it! Now it's your turn!! Here are a few things you can try to apply what you learned and reinforce your understanding:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Walk through this quickstart on your own!"),(0,a.kt)("li",{parentName:"ul"},"Then try the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/durable/quickstart-js-vscode?WT.mc_id=javascript-74010-ninarasi"},"Durable Functions Quickstart")," as a stretch goal!"),(0,a.kt)("li",{parentName:"ul"},"And take the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-74010-ninarasi"},"Cloud Skills Challenge")," to skill up in fun ways")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,"Bookmark and visit the ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/30DaysOfServerless/collection"},"#30DaysOfServerless Collection"),". It's the one-stop collection of resources we will keep updated with links to relevant documentation and learning resources."))}p.isMDXComponent=!0},6459:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/banner-6b30abae3a64206ec53107075cc227e0.png"},568:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-10-bd3741ae917136d4fdf6cc65960275ac.png"},682:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-11-430e971fc73867eb792a9eadac4430f8.png"},4267:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-6-5d66f662cb59d39b41f90ab0bf78380e.png"},5798:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-7-2f28ace0fb1cb00d05da8286d02f310b.png"},2126:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-8-bbc6b836396915dda8611f19a2db7914.png"},8449:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-9-fe412b128bece77a4f0846dc33f6eb7c.png"},2523:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-1a329646eebc0a4dc8c1abca1d7295fc.png"}}]);