"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={slug:"bring-your-app-day-2",title:"3-2. Bringing Your Application to Kubernetes - Adapting Storage, Secrets, and Configuration",authors:["paul"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloudnative","azure","kubernetes","configmaps","persistent-volumes","secrets","azure-files","azure-key-vault","azure-workload-identity","best-practices"],image:"https://azure.github.io/Cloud-Native/img/og/30-12.png",description:"Learn how to optimize your Kubernetes environment by implementing ConfigMaps for environment variable management, Azure Files for persistent storage, and Azure Workload Identity plus Azure Key Vault for secure secret management.",tags:["cloud-native-new-year","azure-kubernetes-service","aks","kubernetes","configmaps","persistent-storage","secrets-management","workload-identity"]},o=void 0,i={permalink:"/Cloud-Native/cnny-2023/bring-your-app-day-2",source:"@site/blog-cnny/2023-02-07/index.md",title:"3-2. Bringing Your Application to Kubernetes - Adapting Storage, Secrets, and Configuration",description:"Learn how to optimize your Kubernetes environment by implementing ConfigMaps for environment variable management, Azure Files for persistent storage, and Azure Workload Identity plus Azure Key Vault for secure secret management.",date:"2023-02-07T00:00:00.000Z",formattedDate:"February 7, 2023",tags:[{label:"cloud-native-new-year",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native-new-year"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"},{label:"aks",permalink:"/Cloud-Native/cnny-2023/tags/aks"},{label:"kubernetes",permalink:"/Cloud-Native/cnny-2023/tags/kubernetes"},{label:"configmaps",permalink:"/Cloud-Native/cnny-2023/tags/configmaps"},{label:"persistent-storage",permalink:"/Cloud-Native/cnny-2023/tags/persistent-storage"},{label:"secrets-management",permalink:"/Cloud-Native/cnny-2023/tags/secrets-management"},{label:"workload-identity",permalink:"/Cloud-Native/cnny-2023/tags/workload-identity"}],readingTime:11.115,hasTruncateMarker:!1,authors:[{name:"Paul Yu",title:"Senior Cloud Advocate",url:"https://github.com/pauldotyu",imageURL:"https://github.com/pauldotyu.png",key:"paul"}],frontMatter:{slug:"bring-your-app-day-2",title:"3-2. Bringing Your Application to Kubernetes - Adapting Storage, Secrets, and Configuration",authors:["paul"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloudnative","azure","kubernetes","configmaps","persistent-volumes","secrets","azure-files","azure-key-vault","azure-workload-identity","best-practices"],image:"https://azure.github.io/Cloud-Native/img/og/30-12.png",description:"Learn how to optimize your Kubernetes environment by implementing ConfigMaps for environment variable management, Azure Files for persistent storage, and Azure Workload Identity plus Azure Key Vault for secure secret management.",tags:["cloud-native-new-year","azure-kubernetes-service","aks","kubernetes","configmaps","persistent-storage","secrets-management","workload-identity"]},prevItem:{title:"3-3. Bringing Your Application to Kubernetes - Opening your Application with Ingress",permalink:"/Cloud-Native/cnny-2023/bring-your-app-day-3"},nextItem:{title:"3-1. Bringing Your Application to Kubernetes - CI/CD",permalink:"/Cloud-Native/cnny-2023/bring-your-app-day-1"}},l={authorsImageUrls:[void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Gather requirements",id:"gather-requirements",level:2},{value:"Database server",id:"database-server",level:3},{value:"Web UI and REST API service",id:"web-ui-and-rest-api-service",level:3},{value:"Implement environment variables using ConfigMaps",id:"implement-environment-variables-using-configmaps",level:2},{value:"Implement persistent volumes using Azure Files",id:"implement-persistent-volumes-using-azure-files",level:2},{value:"Implement secrets using Azure Key Vault",id:"implement-secrets-using-azure-key-vault",level:2},{value:"Pods authentication using Azure Workload Identity",id:"pods-authentication-using-azure-workload-identity",level:3},{value:"Re-package deployments",id:"re-package-deployments",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Resources",id:"resources",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-2"}),(0,r.kt)("meta",{name:"twitter:title",content:"3-2. Bringing Your Application to Kubernetes - Adapting Storage, Secrets, and Configuration"}),(0,r.kt)("meta",{name:"twitter:description",content:"Learn how to optimize your Kubernetes environment by implementing ConfigMaps for environment variable management, Azure Files for persistent storage, and Azure Workload Identity plus Azure Key Vault for secure secret management."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-12.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@pauldotyu"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-2"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 2 of Week 3")," of #CloudNativeNewYear!"),(0,r.kt)("p",null,"The theme for this week is Bringing Your Application to Kubernetes. Yesterday we talked about getting an existing application running in Kubernetes with a full pipeline in GitHub Actions. Today we'll evaluate our sample application's configuration, storage, and networking requirements and implement using Kubernetes and Azure resources."),(0,r.kt)("admonition",{title:"Ask the Experts Thursday, February 9th at 9 AM PST",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/cnny/ate"},"Join us for a live Q&A with Experts from the Azure Kubernetes Service product team!"))),(0,r.kt)("admonition",{title:"Friday, February 10th at 11 AM PST",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Join us for a live demo and let us answer your questions."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/cnny/live-coding"},"We'll be live on YouTube walking through today's (and the rest of this week's) demos"),".  Join us Friday, February 10th and bring your questions!")),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gather requirements"),(0,r.kt)("li",{parentName:"ul"},"Implement environment variables using ConfigMaps"),(0,r.kt)("li",{parentName:"ul"},"Implement persistent volumes using Azure Files"),(0,r.kt)("li",{parentName:"ul"},"Implement secrets using Azure Key Vault"),(0,r.kt)("li",{parentName:"ul"},"Re-package deployments"),(0,r.kt)("li",{parentName:"ul"},"Conclusion"),(0,r.kt)("li",{parentName:"ul"},"Resources")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Before you begin, make sure you've gone through yesterday's ",(0,r.kt)("a",{parentName:"p",href:"/Cloud-Native/cnny-2023/bring-your-app-day-1"},"post")," to set up your AKS cluster.")),(0,r.kt)("h2",{id:"gather-requirements"},"Gather requirements"),(0,r.kt)("p",null,"The eShopOnWeb application is written in .NET 7 and has two major pieces of functionality. The web UI is where customers can browse and shop. The web UI also includes an admin portal for managing the product catalog. This admin portal, is packaged as a WebAssembly application and relies on a separate REST API service. Both the web UI and the REST API connect to the same SQL Server container."),(0,r.kt)("p",null,"Looking through the source code which can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/eShopOnAKS/tree/main/src"},"here")," we can identify requirements for configs, persistent storage, and secrets."),(0,r.kt)("h3",{id:"database-server"},"Database server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Need to store the password for the ",(0,r.kt)("inlineCode",{parentName:"li"},"sa")," account as a secure secret"),(0,r.kt)("li",{parentName:"ul"},"Need persistent storage volume for data directory"),(0,r.kt)("li",{parentName:"ul"},"Need to inject environment variables for SQL Server license type and EULA acceptance")),(0,r.kt)("h3",{id:"web-ui-and-rest-api-service"},"Web UI and REST API service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Need to store database connection string as a secure secret"),(0,r.kt)("li",{parentName:"ul"},"Need to inject ASP.NET environment variables to override app settings"),(0,r.kt)("li",{parentName:"ul"},"Need persistent storage volume for ASP.NET key storage")),(0,r.kt)("h2",{id:"implement-environment-variables-using-configmaps"},"Implement environment variables using ConfigMaps"),(0,r.kt)("p",null,"ConfigMaps are relatively straight-forward to create. If you were following along with the examples last week, this should be review \ud83d\ude09"),(0,r.kt)("p",null,"Create a ConfigMap to store database environment variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: mssql-settings\ndata:\n  MSSQL_PID: Developer\n  ACCEPT_EULA: "Y"\nEOF\n')),(0,r.kt)("p",null,"Create another ConfigMap to store ASP.NET environment variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: aspnet-settings\ndata:\n  ASPNETCORE_ENVIRONMENT: Development\nEOF\n")),(0,r.kt)("h2",{id:"implement-persistent-volumes-using-azure-files"},"Implement persistent volumes using Azure Files"),(0,r.kt)("p",null,"Similar to last week, we'll take advantage of storage classes built into AKS. For our SQL Server data, we'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"azurefile-csi-premium")," storage class and leverage an ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/storage/files/storage-files-introduction?WT.mc_id=containers-84290-pauyu"},"Azure Files")," resource as our PersistentVolume."),(0,r.kt)("p",null,"Create a PersistentVolumeClaim (PVC) for persisting SQL Server data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: mssql-data\nspec:\n  accessModes:\n  - ReadWriteMany\n  storageClassName: azurefile-csi-premium\n  resources:\n    requests:\n      storage: 5Gi\nEOF\n")),(0,r.kt)("p",null,"Create another PVC for persisting ASP.NET data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: aspnet-data\nspec:\n  accessModes:\n  - ReadWriteMany\n  storageClassName: azurefile-csi-premium\n  resources:\n    requests:\n      storage: 5Gi\nEOF\n")),(0,r.kt)("h2",{id:"implement-secrets-using-azure-key-vault"},"Implement secrets using Azure Key Vault"),(0,r.kt)("p",null,"It's a well known fact that Kubernetes secretes are not really secrets. They're just base64-encoded values and not secure, especially if malicious users have access to your Kubernetes cluster. "),(0,r.kt)("p",null,"In a production scenario, you will want to leverage an external vault like ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/key-vault?WT.mc_id=containers-84290-pauyu"},"Azure Key Vault")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"HashiCorp Vault")," to encrypt and store secrets."),(0,r.kt)("p",null,"With AKS, we can enable the ",(0,r.kt)("a",{parentName:"p",href:"https://secrets-store-csi-driver.sigs.k8s.io/"},"Secrets Store CSI driver")," add-on which will allow us to leverage Azure Key Vault."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Set some variables\nRG_NAME=<YOUR_RESOURCE_GROUP_NAME>\nAKS_NAME=<YOUR_AKS_CLUSTER_NAME>\nACR_NAME=<YOUR_ACR_NAME>\n\naz aks enable-addons \\\n  --addons azure-keyvault-secrets-provider \\\n  --name $AKS_NAME \\\n  --resource-group $RG_NAME\n")),(0,r.kt)("p",null,"With the add-on enabled, you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"aks-secrets-store-csi-driver")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"aks-secrets-store-provider-azure")," resources installed on each node in your Kubernetes cluster. "),(0,r.kt)("p",null,"Run the command below to verify."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods \\\n  --namespace kube-system \\\n  --selector 'app in (secrets-store-csi-driver, secrets-store-provider-azure)'\n")),(0,r.kt)("p",null,"The Secrets Store CSI driver allows us to use secret stores via Container Storage Interface (CSI) volumes. This provider offers capabilities such as mounting and syncing between the secure vault and Kubernetes Secrets. On AKS, the ",(0,r.kt)("a",{parentName:"p",href:"https://azure.github.io/secrets-store-csi-driver-provider-azure/docs/"},"Azure Key Vault Provider for Secrets Store CSI Driver")," enables integration with ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/key-vault/general/overview?WT.mc_id=containers-84290-pauyu"},"Azure Key Vault"),"."),(0,r.kt)("p",null,"You may not have an Azure Key Vault created yet, so let's create one and add some secrets to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'AKV_NAME=$(az keyvault create \\\n  --name akv-eshop$RANDOM \\\n  --resource-group $RG_NAME \\\n  --query name -o tsv)\n\n# Database server password\naz keyvault secret set \\\n  --vault-name $AKV_NAME \\\n  --name mssql-password \\\n  --value "@someThingComplicated1234"\n\n# Catalog database connection string\naz keyvault secret set \\\n  --vault-name $AKV_NAME \\\n  --name mssql-connection-catalog \\\n  --value "Server=db;Database=Microsoft.eShopOnWeb.CatalogDb;User Id=sa;Password=@someThingComplicated1234;TrustServerCertificate=True;"\n\n# Identity database connection string\naz keyvault secret set \\\n  --vault-name $AKV_NAME \\\n  --name mssql-connection-identity \\\n  --value "Server=db;Database=Microsoft.eShopOnWeb.Identity;User Id=sa;Password=@someThingComplicated1234;TrustServerCertificate=True;"\n')),(0,r.kt)("h3",{id:"pods-authentication-using-azure-workload-identity"},"Pods authentication using Azure Workload Identity"),(0,r.kt)("p",null,"In order for our Pods to retrieve secrets from Azure Key Vault, we'll need to set up a way for the Pod to authenticate against Azure AD. This can be achieved by implementing the new ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/workload-identity-overview?WT.mc_id=containers-84290-pauyu"},"Azure Workload Identity")," feature of AKS."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"At the time of this writing, the workload identity feature of AKS is in Preview.")),(0,r.kt)("p",null,"The workload identity feature within AKS allows us to leverage native Kubernetes resources and link a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},"Kubernetes ServiceAccount")," to an ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview?WT.mc_id=containers-84290-pauyu"},"Azure Managed Identity")," to authenticate against ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis?WT.mc_id=containers-84290-pauyu"},"Azure AD"),"."),(0,r.kt)("p",null,"For the authentication flow, our Kubernetes cluster will act as an Open ID Connect (OIDC) issuer and will be able issue identity tokens to ServiceAccounts which will be assigned to our Pods."),(0,r.kt)("p",null,"The Azure Managed Identity will be granted permission to access secrets in our Azure Key Vault and with the ServiceAccount being assigned to our Pods, they will be able to retrieve our secrets."),(0,r.kt)("p",null,"For more information on how the authentication mechanism all works, check out this ",(0,r.kt)("a",{parentName:"p",href:"https://azure.github.io/azure-workload-identity/docs/introduction.html#how-it-works"},"doc"),"."),(0,r.kt)("p",null,"To implement all this, start by enabling the new preview feature for AKS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az feature register \\\n  --namespace "Microsoft.ContainerService" \\\n  --name "EnableWorkloadIdentityPreview"\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This can take several minutes to complete.")),(0,r.kt)("p",null,"Check the status and ensure the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," shows ",(0,r.kt)("inlineCode",{parentName:"p"},"Regestered")," before moving forward."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az feature show \\\n  --namespace "Microsoft.ContainerService" \\\n  --name "EnableWorkloadIdentityPreview"\n')),(0,r.kt)("p",null,"Update your AKS cluster to enable the workload identity feature and enable the OIDC issuer endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"az aks update \\\n  --name $AKS_NAME \\\n  --resource-group $RG_NAME \\\n  --enable-workload-identity \\\n  --enable-oidc-issuer \n")),(0,r.kt)("p",null,"Create an Azure Managed Identity and retrieve its client ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"MANAGED_IDENTITY_CLIENT_ID=$(az identity create \\\n  --name aks-workload-identity \\\n  --resource-group $RG_NAME \\\n  --subscription $(az account show --query id -o tsv) \\\n  --query 'clientId' -o tsv)\n")),(0,r.kt)("p",null,"Create the Kubernetes ServiceAccount."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Set namespace (this must align with the namespace that your app is deployed into)\nSERVICE_ACCOUNT_NAMESPACE=default\n\n# Set the service account name\nSERVICE_ACCOUNT_NAME=eshop-serviceaccount\n\n# Create the service account\nkubectl apply -f - <<EOF\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  annotations:\n    azure.workload.identity/client-id: ${MANAGED_IDENTITY_CLIENT_ID}\n  labels:\n    azure.workload.identity/use: "true"\n  name: ${SERVICE_ACCOUNT_NAME}\n  namespace: ${SERVICE_ACCOUNT_NAMESPACE}\nEOF\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note to enable this ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," to work with Azure Workload Identity, you must annotate the resource with ",(0,r.kt)("inlineCode",{parentName:"p"},"azure.workload.identity/client-id"),", and add a label of ",(0,r.kt)("inlineCode",{parentName:"p"},'azure.workload.identity/use: "true"'))),(0,r.kt)("p",null,"That was a lot... Let's review what we just did."),(0,r.kt)("p",null,"We have an Azure Managed Identity (object in Azure AD), an OIDC issuer URL (endpoint in our Kubernetes cluster), and a Kubernetes ServiceAccount."),(0,r.kt)("p",null,'The next step is to "tie" these components together and establish a ',(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/graph/api/resources/federatedidentitycredentials-overview?WT.mc_id=containers-84290-pauyu&view=graph-rest-1.0"},"Federated Identity Credential")," so that Azure AD can trust authentication requests from your Kubernetes cluster."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This identity federation can be established between Azure AD any Kubernetes cluster; not just AKS \ud83e\udd17")),(0,r.kt)("p",null,"To establish the federated credential, we'll need the OIDC issuer URL, and a subject which points to your Kubernetes ServiceAccount."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Get the OIDC issuer URL\nOIDC_ISSUER_URL=$(az aks show \\\n  --name $AKS_NAME \\\n  --resource-group $RG_NAME \\\n  --query "oidcIssuerProfile.issuerUrl" -o tsv)\n\n# Set the subject name using this format: `system:serviceaccount:<YOUR_SERVICE_ACCOUNT_NAMESPACE>:<YOUR_SERVICE_ACCOUNT_NAME>`\nSUBJECT=system:serviceaccount:$SERVICE_ACCOUNT_NAMESPACE:$SERVICE_ACCOUNT_NAME\n\naz identity federated-credential create \\\n  --name aks-federated-credential \\\n  --identity-name aks-workload-identity \\\n  --resource-group $RG_NAME \\\n  --issuer $OIDC_ISSUER_URL \\\n  --subject $SUBJECT\n')),(0,r.kt)("p",null,"With the authentication components set, we can now create a ",(0,r.kt)("a",{parentName:"p",href:"https://secrets-store-csi-driver.sigs.k8s.io/getting-started/usage.html"},"SecretProviderClass")," which includes details about the Azure Key Vault, the secrets to pull out from the vault, and identity used to access the vault."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Get the tenant id for the key vault\nTENANT_ID=$(az keyvault show \\\n  --name $AKV_NAME \\\n  --resource-group $RG_NAME \\\n  --query properties.tenantId -o tsv)\n\n# Create the secret provider for azure key vault\nkubectl apply -f - <<EOF\napiVersion: secrets-store.csi.x-k8s.io/v1\nkind: SecretProviderClass\nmetadata:\n  name: eshop-azure-keyvault\nspec:\n  provider: azure\n  parameters:\n    usePodIdentity: "false"\n    useVMManagedIdentity: "false"   \n    clientID: "${MANAGED_IDENTITY_CLIENT_ID}"\n    keyvaultName: "${AKV_NAME}"\n    cloudName: ""\n    objects:  |\n      array:\n        - |\n          objectName: mssql-password\n          objectType: secret\n          objectVersion: ""\n        - |\n          objectName: mssql-connection-catalog\n          objectType: secret\n          objectVersion: ""\n        - |\n          objectName: mssql-connection-identity\n          objectType: secret\n          objectVersion: ""\n    tenantId: "${TENANT_ID}"\n  secretObjects:\n  - secretName: eshop-secrets\n    type: Opaque\n    data:\n      - objectName: mssql-password\n        key: mssql-password\n      - objectName: mssql-connection-catalog\n        key: mssql-connection-catalog\n      - objectName: mssql-connection-identity\n        key: mssql-connection-identity\nEOF\n')),(0,r.kt)("p",null,"Finally, lets grant the Azure Managed Identity permissions to retrieve secrets from the Azure Key Vault."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"az keyvault set-policy \\\n  --name $AKV_NAME \\\n  --secret-permissions get \\\n  --spn $MANAGED_IDENTITY_CLIENT_ID\n")),(0,r.kt)("h2",{id:"re-package-deployments"},"Re-package deployments"),(0,r.kt)("p",null,"Update your database deployment to load environment variables from our ConfigMap, attach the PVC and SecretProviderClass as volumes, mount the volumes into the Pod, and use the ServiceAccount to retrieve secrets."),(0,r.kt)("p",null,"Additionally, you may notice the database Pod is set to use ",(0,r.kt)("inlineCode",{parentName:"p"},"fsGroup:10001")," as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"securityContext"),". This is required as the MSSQL container runs using a non-root account called ",(0,r.kt)("inlineCode",{parentName:"p"},"mssql")," and this account has the proper permissions to read/write data at the ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/opt/mssql")," mount path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: db\n  labels:\n    app: db\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: db\n  template:\n    metadata:\n      labels:\n        app: db\n    spec:\n      securityContext:\n        fsGroup: 10001\n      serviceAccountName: ${SERVICE_ACCOUNT_NAME}\n      containers:\n        - name: db\n          image: mcr.microsoft.com/mssql/server:2019-latest\n          ports:\n            - containerPort: 1433\n          envFrom:\n            - configMapRef:\n                name: mssql-settings\n          env:\n            - name: MSSQL_SA_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: eshop-secrets\n                  key: mssql-password\n          resources: {}\n          volumeMounts:\n            - name: mssqldb\n              mountPath: /var/opt/mssql\n            - name: eshop-secrets\n              mountPath: "/mnt/secrets-store"\n              readOnly: true\n      volumes:\n        - name: mssqldb\n          persistentVolumeClaim:\n            claimName: mssql-data\n        - name: eshop-secrets\n          csi:\n            driver: secrets-store.csi.k8s.io\n            readOnly: true\n            volumeAttributes:\n              secretProviderClass: eshop-azure-keyvault\nEOF\n')),(0,r.kt)("p",null,"We'll update the API and Web deployments in a similar way."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Set the image tag\nIMAGE_TAG=<YOUR_IMAGE_TAG>\n\n# API deployment\nkubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: api\n  labels:\n    app: api\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: api\n  template:\n    metadata:\n      labels:\n        app: api\n    spec:\n      serviceAccount: ${SERVICE_ACCOUNT_NAME}\n      containers:\n        - name: api\n          image: ${ACR_NAME}.azurecr.io/api:${IMAGE_TAG}\n          ports:\n            - containerPort: 80\n          envFrom:\n            - configMapRef:\n                name: aspnet-settings\n          env:\n            - name: ConnectionStrings__CatalogConnection\n              valueFrom:\n                secretKeyRef:\n                  name: eshop-secrets\n                  key: mssql-connection-catalog\n            - name: ConnectionStrings__IdentityConnection\n              valueFrom:\n                secretKeyRef:\n                  name: eshop-secrets\n                  key: mssql-connection-identity\n          resources: {}\n          volumeMounts:\n            - name: aspnet\n              mountPath: ~/.aspnet/https:/root/.aspnet/https:ro\n            - name: eshop-secrets\n              mountPath: "/mnt/secrets-store"\n              readOnly: true\n      volumes:\n        - name: aspnet\n          persistentVolumeClaim:\n            claimName: aspnet-data\n        - name: eshop-secrets\n          csi:\n            driver: secrets-store.csi.k8s.io\n            readOnly: true\n            volumeAttributes:\n                secretProviderClass: eshop-azure-keyvault\nEOF\n\n## Web deployment\nkubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web\n  labels:\n    app: web\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: web\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      serviceAccount: ${SERVICE_ACCOUNT_NAME}\n      containers:\n        - name: web\n          image: ${ACR_NAME}.azurecr.io/web:${IMAGE_TAG}\n          ports:\n            - containerPort: 80\n          envFrom:\n            - configMapRef:\n                name: aspnet-settings\n          env:\n            - name: ConnectionStrings__CatalogConnection\n              valueFrom:\n                secretKeyRef:\n                  name: eshop-secrets\n                  key: mssql-connection-catalog\n            - name: ConnectionStrings__IdentityConnection\n              valueFrom:\n                secretKeyRef:\n                  name: eshop-secrets\n                  key: mssql-connection-identity\n          resources: {}\n          volumeMounts:\n            - name: aspnet\n              mountPath: ~/.aspnet/https:/root/.aspnet/https:ro\n            - name: eshop-secrets\n              mountPath: "/mnt/secrets-store"\n              readOnly: true\n      volumes:\n        - name: aspnet\n          persistentVolumeClaim:\n            claimName: aspnet-data\n        - name: eshop-secrets\n          csi:\n            driver: secrets-store.csi.k8s.io\n            readOnly: true\n            volumeAttributes:\n                secretProviderClass: eshop-azure-keyvault\nEOF\n')),(0,r.kt)("p",null,"If all went well with your deployment updates, you should be able to browse to your website and buy some merchandise again \ud83e\udd73"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"http://$(kubectl get service web -o jsonpath='{.status.loadBalancer.ingress[0].ip}')\"\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Although there is no visible changes on with our website, we've made a ton of changes on the Kubernetes backend to make this application much more secure and resilient."),(0,r.kt)("p",null,"We used a combination of Kubernetes resources and AKS-specific features to achieve our goal of securing our secrets and ensuring data is not lost on container crashes and restarts."),(0,r.kt)("p",null,"To learn more about the components we leveraged here today, checkout the resources and additional tutorials listed below. "),(0,r.kt)("p",null,"You can also find manifests with all the changes made in today's post in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/eShopOnAKS/tree/week3/day2"},"Azure-Samples/eShopOnAKS")," repository."),(0,r.kt)("p",null,"See you in the next post!"),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("admonition",{title:"Take the Cloud Skills Challenge!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/training/challenges?id=a0e385b9-f970-4182-b2e2-3b4619b6c356"},"Enroll")," in the Cloud Skills Challenge! "),(0,r.kt)("p",{parentName:"admonition"},"Don't miss out on this opportunity to level up your skills and stay ahead of the curve in the world of cloud native. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/sql/linux/quickstart-sql-server-containers-kubernetes?WT.mc_id=containers-84290-pauyu&view=sql-server-ver16"},"Quickstart: Deploy a SQL Server container with Azure Kubernetes Services (AKS)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://secrets-store-csi-driver.sigs.k8s.io/"},"Secrets Store CSI Driver")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azure.github.io/secrets-store-csi-driver-provider-azure/docs/"},"Azure Key Vault Provider for Secrets Store CSI Driver")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Azure/azure-workload-identity"},"Azure/azure-workload-identity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azure.github.io/azure-workload-identity/docs/introduction.html"},"Azure AD Workload Identity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/learn/tutorial-kubernetes-workload-identity?WT.mc_id=containers-84290-pauyu"},"Tutorial: Use a workload identity with an application on Azure Kubernetes Service (AKS)"))))}p.isMDXComponent=!0}}]);