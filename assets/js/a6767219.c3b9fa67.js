"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,s(s({ref:t},l),{},{components:n})):a.createElement(g,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={slug:"13-aca-managed-id",title:"13. Secrets + Managed Identity",authors:["kendall"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Learn to make use of Container Apps (ACA) secrets and managed identities to securely access cloud-hosted resources that your ACA depends on! ",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},s=void 0,i={permalink:"/Cloud-Native/blog/13-aca-managed-id",source:"@site/blog/2022-09-13/index.md",title:"13. Secrets + Managed Identity",description:"Learn to make use of Container Apps (ACA) secrets and managed identities to securely access cloud-hosted resources that your ACA depends on! ",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"},{label:"microservices",permalink:"/Cloud-Native/blog/tags/microservices"}],readingTime:10.78,hasTruncateMarker:!1,authors:[{name:"Kendall Roden",title:"Azure Container Apps PM @Microsoft",url:"https://github.com/kendallroden",imageURL:"https://github.com/kendallroden.png",key:"kendall"}],frontMatter:{slug:"13-aca-managed-id",title:"13. Secrets + Managed Identity",authors:["kendall"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Learn to make use of Container Apps (ACA) secrets and managed identities to securely access cloud-hosted resources that your ACA depends on! ",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},prevItem:{title:"12. Build With Dapr!",permalink:"/Cloud-Native/blog/12-build-with-dapr"},nextItem:{title:"\ud83d\ude80 | Observability with ACA",permalink:"/Cloud-Native/blog/zero2hero-aca-06"}},p={image:n(15206).Z,authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Securing access to external services",id:"securing-access-to-external-services",level:2},{value:"Secure access to external services without Dapr",id:"secure-access-to-external-services-without-dapr",level:2},{value:"Leveraging Container Apps secrets at runtime",id:"leveraging-container-apps-secrets-at-runtime",level:3},{value:"Using Managed Identity to connect to Azure services",id:"using-managed-identity-to-connect-to-azure-services",level:3},{value:"Secure access to external services with Dapr",id:"secure-access-to-external-services-with-dapr",level:2},{value:"Using Container Apps secrets in Dapr components",id:"using-container-apps-secrets-in-dapr-components",level:3},{value:"Using Managed Identity with Dapr Components",id:"using-managed-identity-with-dapr-components",level:3},{value:"Using Dapr Secret Stores for runtime secrets and component references",id:"using-dapr-secret-stores-for-runtime-secrets-and-component-references",level:3},{value:"Setting up a component for a specific secret store solution",id:"setting-up-a-component-for-a-specific-secret-store-solution",level:4},{value:"Referencing secrets in Dapr component files",id:"referencing-secrets-in-dapr-component-files",level:4},{value:"Summary",id:"summary",level:2},{value:"Resources",id:"resources",level:2}],l={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/13-aca-managed-id"}),(0,r.kt)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Secrets in Azure Container Apps"}),(0,r.kt)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Secrets in Azure Container Apps"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@kendallroden"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/13-aca-managed-id"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 13")," of #30DaysOfServerless! "),(0,r.kt)("p",null,"In the previous post, we learned about all things Distributed Application Runtime (Dapr) and highlighted the capabilities you can unlock through managed Dapr in Azure Container Apps! Today, we'll dive into how we can make use of Container Apps secrets and managed identities to securely access cloud-hosted resources that your Container Apps depend on! "),(0,r.kt)("p",null,"Ready? Let's go."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Secure access to external services overview"),(0,r.kt)("li",{parentName:"ul"},"Using Container Apps Secrets"),(0,r.kt)("li",{parentName:"ul"},"Using Managed Identity for connecting to Azure resources"),(0,r.kt)("li",{parentName:"ul"},"Using Dapr secret store component references (Dapr-only)"),(0,r.kt)("li",{parentName:"ul"},"Conclusion   "),(0,r.kt)("li",{parentName:"ul"},"Resources: For self-study!")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(15206).Z,width:"1600",height:"672"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"securing-access-to-external-services"},"Securing access to external services"),(0,r.kt)("p",null,"In most, if not all, microservice-based applications, one or more services in the system will rely on other cloud-hosted resources; Think external services like databases, secret stores, message brokers, event sources, etc. To interact with these services, an application must have the ability to establish a secure connection. Traditionally, an application will authenticate to these backing resources using some type of connection string or password. "),(0,r.kt)("p",null,"I'm not sure if it was just me, but one of the first things I learned as a developer was to ensure credentials and other sensitive information were never checked into the codebase. The ability to inject these values at runtime is a non-negotiable."),(0,r.kt)("p",null,"In Azure Container Apps, applications can securely leverage connection information via ",(0,r.kt)("strong",{parentName:"p"},"Container Apps Secrets"),". If the resource is Azure-based, a more ideal solution that removes the dependence on secrets altogether is using Managed Identity. "),(0,r.kt)("p",null,"Specifically for Dapr-enabled container apps, users can now tap into the power of the ",(0,r.kt)("strong",{parentName:"p"},"Dapr secrets API!")," With this new capability unlocked in Container Apps, users can call the Dapr secrets API from application code to securely access secrets from Key Vault or other backing secret stores. In addition, customers can also make use of a secret store component reference when wiring up Dapr state store components and more! "),(0,r.kt)("p",null,"ALSO, I'm excited to share that ",(0,r.kt)("strong",{parentName:"p"},"support for  Dapr + Managed Identity is now available"),"!!. What does this mean? It means that you can enable Managed Identity for your container app - and when establishing connections via Dapr, the Dapr sidecar can use this identity! This means simplified components without the need for secrets when connecting to Azure services! "),(0,r.kt)("p",null,"Let's dive a bit deeper into the following three topics:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using Container Apps secrets in your container apps"),(0,r.kt)("li",{parentName:"ol"},"Using Managed Identity to connect to Azure services"),(0,r.kt)("li",{parentName:"ol"},"Connecting to services securely for Dapr-enabled apps\n")),(0,r.kt)("h2",{id:"secure-access-to-external-services-without-dapr"},"Secure access to external services without Dapr"),(0,r.kt)("h3",{id:"leveraging-container-apps-secrets-at-runtime"},"Leveraging Container Apps secrets at runtime"),(0,r.kt)("p",null,"Users can leverage this approach for any values which need to be securely stored, however, it is recommended to use Managed Identity where possible when connecting to Azure-specific resources. "),(0,r.kt)("p",null,"First, let's establish a few important points regarding secrets in container apps:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Secrets are scoped at the container app level, meaning secrets cannot be shared across container apps today "),(0,r.kt)("li",{parentName:"ul"},"When running in multiple-revision mode, ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"changes to secrets ",(0,r.kt)("strong",{parentName:"li"},"do not")," generate a new revision"),(0,r.kt)("li",{parentName:"ul"},"running revisions will not be automatically restarted to reflect changes. If you want to force-update existing container app revisions to reflect the changed secrets values, you will need to perform revision restarts. ")))),(0,r.kt)("admonition",{title:"STEP 1",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Provide the secure value as a secret parameter when creating your container app using the syntax ",(0,r.kt)("strong",{parentName:"p"},'"SECRET_NAME=SECRET_VALUE"'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az containerapp create \\\n  --resource-group "my-resource-group" \\\n  --name queuereader \\\n  --environment "my-environment-name" \\\n  --image demos/queuereader:v1 \\\n  --secrets "queue-connection-string=$CONNECTION_STRING"\n')),(0,r.kt)("admonition",{title:"STEP 2 ",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Create an environment variable which references the value of the secret created in step 1 using the syntax ",(0,r.kt)("strong",{parentName:"p"},'"ENV_VARIABLE_NAME=secretref:SECRET_NAME"'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az containerapp create \\\n  --resource-group "my-resource-group" \\\n  --name myQueueApp \\\n  --environment "my-environment-name" \\\n  --image demos/myQueueApp:v1 \\\n  --secrets "queue-connection-string=$CONNECTIONSTRING" \\\n  --env-vars "QueueName=myqueue" "ConnectionString=secretref:queue-connection-string"\n')),(0,r.kt)("p",null,"This ",(0,r.kt)("strong",{parentName:"p"},"ConnectionString")," environment variable can be used within your application code to securely access the connection string value at runtime."),(0,r.kt)("h3",{id:"using-managed-identity-to-connect-to-azure-services"},"Using Managed Identity to connect to Azure services"),(0,r.kt)("p",null,"A managed identity from Azure Active Directory (Azure AD) allows your container app to access other Azure AD-protected resources. This approach is recommended where possible as it eliminates the need for managing secret credentials in your container apps and allows you to properly scope the permissions needed for a given container app using role-based access control. Both system-assigned and user-assigned identities are available in container apps. For more background on managed identities in Azure AD, see ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview"},"Managed identities for Azure resources"),"."),(0,r.kt)("p",null,"To configure your app with a system-assigned managed identity you will follow similar steps to the following: "),(0,r.kt)("admonition",{title:"STEP 1",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Run the following command to create a system-assigned identity for your container app ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az containerapp identity assign \\\n  --name "myQueueApp" \\\n  --resource-group "my-resource-group" \\\n  --system-assigned\n')),(0,r.kt)("admonition",{title:"STEP 2",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Retrieve the identity details for your container app and store the Principal ID for the identity in a variable ",(0,r.kt)("strong",{parentName:"p"},'"PRINCIPAL_ID"'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az containerapp identity show \\\n  --name "myQueueApp" \\\n  --resource-group "my-resource-group"\n')),(0,r.kt)("admonition",{title:"STEP 3 ",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Assign the appropriate roles and permissions to your container app's managed identity using the Principal ID in step 2 based on the resources you need to access (example below)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az role assignment create \\\n  --role "Storage Queue Data Contributor" \\\n  --assignee $PRINCIPAL_ID \\\n  --scope "/subscriptions/<subscription>/resourceGroups/<resource-group>/providers/Microsoft.Storage/storageAccounts/<storage-account>/queueServices/default/queues/<queue>"\n')),(0,r.kt)("p",null,'After running the above commands, your container app will be able to access your Azure Store Queue because it\'s managed identity has been assigned the "Store Queue Data Contributor" role. The role assignments you create will be contingent solely on the resources your container app needs to access. To instrument your code to use this managed identity, see more details ',(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/container-apps/managed-identity?tabs=portal%2Cdotnet#connect-to-azure-services-in-app-code"},"here"),". "),(0,r.kt)("p",null,"In addition to using managed identity to access services from your container app, you can also use managed identity to ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/container-apps/containers#container-registries"},"pull your container images from Azure Container Registry"),"."),(0,r.kt)("h2",{id:"secure-access-to-external-services-with-dapr"},"Secure access to external services with Dapr"),(0,r.kt)("p",null,"For Dapr-enabled apps, there are a few ways to connect to the resources your solutions depend on. In this section, we will discuss when to use each approach. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using Container Apps secrets in your Dapr components"),(0,r.kt)("li",{parentName:"ol"},"Using Managed Identity with Dapr Components "),(0,r.kt)("li",{parentName:"ol"},"Using Dapr Secret Stores for runtime secrets and component references ")),(0,r.kt)("h3",{id:"using-container-apps-secrets-in-dapr-components"},"Using Container Apps secrets in Dapr components"),(0,r.kt)("p",null,"Prior to providing support for the Dapr Secret's Management building block, this was the only approach available for securely storing sensitive values for use in Dapr components. "),(0,r.kt)("p",null,'In Dapr OSS, when no secret store reference is provided in a Dapr component file, the default secret store is set to "Kubernetes secrets". In Container Apps, we do not expose the ability to use this default store. Rather, Container Apps secrets can be used in it\'s place. '),(0,r.kt)("p",null,"With the introduction of the Secrets API and the ability to use Dapr + Managed Identity, this approach is useful for a limited number of scenarios: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quick demos and dev/test scenarios using the Container Apps CLI "),(0,r.kt)("li",{parentName:"ul"},"Securing values when a secret store is not configured or available for use"),(0,r.kt)("li",{parentName:"ul"},"Using service principal credentials to configure an Azure Key Vault secret store component (Using Managed Identity is recommend) "),(0,r.kt)("li",{parentName:"ul"},"Securing access credentials which may be required when creating a non-Azure secret store component ")),(0,r.kt)("admonition",{title:"STEP 1 ",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Create a Dapr component which can be used by one or more services in the container apps environment. In the below example, you will create a secret to store the storage account key and reference this secret from the appropriate Dapr metadata property. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'   componentType: state.azure.blobstorage\n   version: v1\n   metadata:\n   - name: accountName\n     value: testStorage\n   - name: accountKey\n     secretRef: account-key\n   - name: containerName\n     value: myContainer\n   secrets:\n   - name: account-key\n     value: "<STORAGE_ACCOUNT_KEY>"\n   scopes:\n   - myApp\n')),(0,r.kt)("admonition",{title:"STEP 2",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Deploy the Dapr component using the below command with the appropriate arguments.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' az containerapp env dapr-component set \\\n   --name "my-environment" \\\n   --resource-group "my-resource-group" \\\n   --dapr-component-name statestore \\\n   --yaml "./statestore.yaml"\n')),(0,r.kt)("h3",{id:"using-managed-identity-with-dapr-components"},"Using Managed Identity with Dapr Components"),(0,r.kt)("p",null,"Dapr-enabled container apps can now make use of managed identities within Dapr components. This is the most ideal path for connecting to Azure services securely, and allows for the removal of sensitive values in the component itself. "),(0,r.kt)("p",null,"The Dapr sidecar makes use of the existing identities available within a given container app; Dapr itself does not have it's own identity. Therefore, the steps to enable Dapr + MI are similar to those in the section regarding managed identity for non-Dapr apps. See example steps below specifically for using a system-assigned identity: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a system-assigned identity for your container app ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Retrieve the identity details for your container app and store the Principal ID for the identity in a variable ",(0,r.kt)("strong",{parentName:"p"},'"PRINCIPAL_ID"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Assign the appropriate roles and permissions (for accessing resources backing your Dapr components) to your ACA's managed identity using the Principal ID")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a simplified Dapr component without any secrets required "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    componentType: state.azure.blobstorage\n    version: v1\n    metadata:\n    - name: accountName\n      value: testStorage\n    - name: containerName\n      value: myContainer\n    scopes:\n    - myApp\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy the component to test the connection from your container app via Dapr! "))),(0,r.kt)("p",null,"Keep in mind, all Dapr components will be loaded by each Dapr-enabled container app in an environment by default. In order to avoid apps without the appropriate permissions from loading a component unsuccessfully, use scopes. This will ensure that only applications with the appropriate identities to access the backing resource load the component. "),(0,r.kt)("h3",{id:"using-dapr-secret-stores-for-runtime-secrets-and-component-references"},"Using Dapr Secret Stores for runtime secrets and component references"),(0,r.kt)("p",null,"Dapr integrates with secret stores to provide apps and other components with secure storage and access to secrets such as access keys and passwords. The Dapr Secrets API is now available for use in Container Apps. "),(0,r.kt)("p",null,"Using Dapr\u2019s secret store building block typically involves the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setting up a component for a specific secret store solution."),(0,r.kt)("li",{parentName:"ul"},"Retrieving secrets using the Dapr secrets API in the application code."),(0,r.kt)("li",{parentName:"ul"},"Optionally, referencing secrets in Dapr component files.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(50788).Z,width:"1739",height:"1057"})),(0,r.kt)("p",null,"Let's walk through a couple sample workflows involving the use of Dapr's Secrets Management capabilities! "),(0,r.kt)("h4",{id:"setting-up-a-component-for-a-specific-secret-store-solution"},"Setting up a component for a specific secret store solution"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an Azure Key Vault instance for hosting the secrets required by your application."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az keyvault create --name "<your-unique-keyvault-name>" --resource-group "my-resource-group" --location "<your-location>"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an Azure Key Vault component in your environment without the secrets values, as the connection will be established to Azure Key Vault via Managed Identity."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'    componentType: secretstores.azure.keyvault\n    version: v1\n    metadata:\n    - name: vaultName\n      value: "[your_keyvault_name]"\n    scopes:\n    - myApp \n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az containerapp env dapr-component set \\\n  --name "my-environment" \\\n  --resource-group "my-resource-group" \\\n  --dapr-component-name secretstore \\\n  --yaml "./secretstore.yaml"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to create a system-assigned identity for your container app "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az containerapp identity assign \\\n  --name "myApp" \\\n  --resource-group "my-resource-group" \\\n  --system-assigned\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Retrieve the identity details for your container app and store the Principal ID for the identity in a variable ",(0,r.kt)("strong",{parentName:"p"},'"PRINCIPAL_ID"')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az containerapp identity show \\\n  --name "myApp" \\\n  --resource-group "my-resource-group"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Assign the appropriate roles and permissions to your container app's managed identity to access Azure Key Vault"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az role assignment create \\\n--role "Key Vault Secrets Officer" \\\n--assignee $PRINCIPAL_ID \\\n--scope /subscriptions/{subscriptionid}/resourcegroups/{resource-group-name}/providers/Microsoft.KeyVault/vaults/{key-vault-name}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Begin using the Dapr Secrets API in your application code to retrieve secrets! See additional details ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dapr.io/reference/api/secrets_api/"},"here"),"."))),(0,r.kt)("h4",{id:"referencing-secrets-in-dapr-component-files"},"Referencing secrets in Dapr component files"),(0,r.kt)("p",null,"Once a Dapr secret store component is available in the environment, it can be used to retrieve secrets for use in other components. For example, when creating a state store component, you can add a reference to the Dapr secret store from which you would like to source connection information. You will no longer use secrets directly in the component spec, but rather will instruct the Dapr sidecar to retrieve the secrets from the specified store. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'      componentType: state.azure.blobstorage\n      version: v1\n      metadata:\n      - name: accountName\n        value: testStorage\n      - name: accountKey\n        secretRef: account-key\n      - name: containerName\n        value: myContainer\n      secretStoreComponent: "<SECRET_STORE_COMPONENT_NAME>"\n      scopes:\n        - myApp\n')),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this post, we have covered the high-level details on how to work with secret values in Azure Container Apps for both Dapr and Non-Dapr apps. In the next article, we will walk through a complex Dapr example from end-to-end which makes use of the new support for Dapr + Managed Identity. Stayed tuned for additional documentation around Dapr secrets as it will be release in the next two weeks! "),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,"Here are the main resources to explore for self-study:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/container-apps/manage-secrets?tabs=azure-cli"},"Azure Container Apps Secrets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/container-apps/managed-identity?tabs=portal%2Cdotnet"},"Managed Identities in Azure Container Apps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://v1-9.docs.dapr.io/concepts/"},"Dapr Documentation: Core Concepts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.dapr.io/getting-started/quickstarts/"},"Dapr Quickstarts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.dapr.io/getting-started/tutorials/"},"Dapr Tutorials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/container-apps/dapr-overview"},"Azure Container Apps: Dapr Integration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/container-apps/microservices-dapr"},"Dapr-enabled Azure Container Apps: Using Azure CLI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/container-apps/microservices-dapr-azure-resource-manager"},"Dapr-enabled Azure Container Apps: Using Bicep or ARM"))))}u.isMDXComponent=!0},15206:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-9d61f89816a8e8b5682eae3c4fcdb71c.png"},50788:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/secrets-overview-cloud-stores-f0c9f823ba6a3246dac070c4da40a80a.png"}}]);