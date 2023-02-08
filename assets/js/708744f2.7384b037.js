"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={slug:"bring-your-app-day-3",title:"3-3. Bringing Your Application to Kubernetes - Opening your Application with Ingress",authors:["paul"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloudnative","azure","kubernetes","configmaps","persistent-volumes","secrets","azure-files","azure-key-vault","azure-workload-identity","best-practices"],image:"https://azure.github.io/Cloud-Native/img/og/30-13.png",description:"Expose your web application on Azure Kubernetes Service with ease using the Web Application Routing add-on. Benefit from automatic installation of a NGINX Ingress Controller, integration with Azure DNS for custom domains, and secure TLS with Azure Key Vault. Follow our step-by-step guide to enhance the accessibility and security of your web application.",tags:["cloud-native-new-year","azure-kubernetes-service","aks","kubernetes","ingress","nginx-ingress-controller","azure-dns","azure-key-vault"]},o=void 0,s={permalink:"/Cloud-Native/cnny-2023/bring-your-app-day-3",source:"@site/blog-cnny/2023-02-08/index.md",title:"3-3. Bringing Your Application to Kubernetes - Opening your Application with Ingress",description:"Expose your web application on Azure Kubernetes Service with ease using the Web Application Routing add-on. Benefit from automatic installation of a NGINX Ingress Controller, integration with Azure DNS for custom domains, and secure TLS with Azure Key Vault. Follow our step-by-step guide to enhance the accessibility and security of your web application.",date:"2023-02-08T00:00:00.000Z",formattedDate:"February 8, 2023",tags:[{label:"cloud-native-new-year",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native-new-year"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"},{label:"aks",permalink:"/Cloud-Native/cnny-2023/tags/aks"},{label:"kubernetes",permalink:"/Cloud-Native/cnny-2023/tags/kubernetes"},{label:"ingress",permalink:"/Cloud-Native/cnny-2023/tags/ingress"},{label:"nginx-ingress-controller",permalink:"/Cloud-Native/cnny-2023/tags/nginx-ingress-controller"},{label:"azure-dns",permalink:"/Cloud-Native/cnny-2023/tags/azure-dns"},{label:"azure-key-vault",permalink:"/Cloud-Native/cnny-2023/tags/azure-key-vault"}],readingTime:9.855,hasTruncateMarker:!1,authors:[{name:"Paul Yu",title:"Senior Cloud Advocate",url:"https://github.com/pauldotyu",imageURL:"https://github.com/pauldotyu.png",key:"paul"}],frontMatter:{slug:"bring-your-app-day-3",title:"3-3. Bringing Your Application to Kubernetes - Opening your Application with Ingress",authors:["paul"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloudnative","azure","kubernetes","configmaps","persistent-volumes","secrets","azure-files","azure-key-vault","azure-workload-identity","best-practices"],image:"https://azure.github.io/Cloud-Native/img/og/30-13.png",description:"Expose your web application on Azure Kubernetes Service with ease using the Web Application Routing add-on. Benefit from automatic installation of a NGINX Ingress Controller, integration with Azure DNS for custom domains, and secure TLS with Azure Key Vault. Follow our step-by-step guide to enhance the accessibility and security of your web application.",tags:["cloud-native-new-year","azure-kubernetes-service","aks","kubernetes","ingress","nginx-ingress-controller","azure-dns","azure-key-vault"]},nextItem:{title:"3-2. Bringing Your Application to Kubernetes - Adapting Storage, Secrets, and Configuration",permalink:"/Cloud-Native/cnny-2023/bring-your-app-day-2"}},l={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Gather requirements",id:"gather-requirements",level:2},{value:"Generate TLS certificate and store in Azure Key Vault",id:"generate-tls-certificate-and-store-in-azure-key-vault",level:2},{value:"Implement custom DNS with Azure DNS",id:"implement-custom-dns-with-azure-dns",level:2},{value:"Enable Web Application Routing add-on for AKS",id:"enable-web-application-routing-add-on-for-aks",level:2},{value:"Implement Ingress for the web application",id:"implement-ingress-for-the-web-application",level:2},{value:"Why is the Admin page broken?",id:"why-is-the-admin-page-broken",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Resources",id:"resources",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-3"}),(0,i.kt)("meta",{name:"twitter:title",content:"3-3. Bringing Your Application to Kubernetes - Opening your Application with Ingress"}),(0,i.kt)("meta",{name:"twitter:description",content:"Expose your web application on Azure Kubernetes Service with ease using the Web Application Routing add-on. Benefit from automatic installation of a NGINX Ingress Controller, integration with Azure DNS for custom domains, and secure TLS with Azure Key Vault. Follow our step-by-step guide to enhance the accessibility and security of your web application."}),(0,i.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-13.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@pauldotyu"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-3"})),(0,i.kt)("p",null,"Welcome to ",(0,i.kt)("inlineCode",{parentName:"p"},"Day #3 of Week 3")," of #CloudNativeNewYear!"),(0,i.kt)("p",null,"The theme for this week is Bringing Your Application to Kubernetes. Yesterday we added configuration, secrets, and storage to our app. Today we'll explore how to expose the eShopOnWeb app so that customers can reach it over the internet using a custom domain name and TLS."),(0,i.kt)("admonition",{title:"Ask the Experts Thursday, February 9th at 9 AM PST",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://aka.ms/cnny/ate"},"Join us for a live Q&A with Experts from the Azure Kubernetes Service product team!"))),(0,i.kt)("admonition",{title:"Friday, February 10th at 11 AM PST",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Join us for a live demo and let us answer your questions."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://aka.ms/cnny/live-coding"},"We'll be live on YouTube walking through today's (and the rest of this week's) demos"),".  Join us Friday, February 10th and bring your questions!")),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gather requirements"),(0,i.kt)("li",{parentName:"ul"},"Generate TLS certificate and store in Azure Key Vault"),(0,i.kt)("li",{parentName:"ul"},"Implement custom DNS using Azure DNS"),(0,i.kt)("li",{parentName:"ul"},"Enable Web Application Routing add-on for AKS"),(0,i.kt)("li",{parentName:"ul"},"Implement Ingress for the web application"),(0,i.kt)("li",{parentName:"ul"},"Conclusion"),(0,i.kt)("li",{parentName:"ul"},"Resources")),(0,i.kt)("h2",{id:"gather-requirements"},"Gather requirements"),(0,i.kt)("p",null,"Currently, our eShopOnWeb app has three Kubernetes services deployed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"db")," exposed internally via ",(0,i.kt)("inlineCode",{parentName:"li"},"ClusterIP")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"api")," exposed externally via ",(0,i.kt)("inlineCode",{parentName:"li"},"LoadBalancer")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"web")," exposed externally via ",(0,i.kt)("inlineCode",{parentName:"li"},"LoadBalancer"))),(0,i.kt)("p",null,"As mentioned in ",(0,i.kt)("a",{parentName:"p",href:"/Cloud-Native/cnny-2023/fundamentals-day-2"},"my post last week"),", Services allow applications to communicate with each other using DNS names. Kubernetes has service discovery capabilities built-in that allows Pods to resolve Services simply by using their names."),(0,i.kt)("p",null,"In the case of our ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," deployments, they can simply reach the database by calling its name. The service type of ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," can remain as-is since it only needs to be accessed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," apps."),(0,i.kt)("p",null,"On the other hand, ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," both need to be accessed over the public internet. Currently, these services are using service type ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," which tells AKS to provision an Azure Load Balancer with a public IP address. No one is going to remember the IP addresses, so we need to make the app more accessible by adding a custom domain name and securing it with a TLS certificate."),(0,i.kt)("p",null,"Here's what we're going to need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom domain name for our app"),(0,i.kt)("li",{parentName:"ul"},"TLS certificate for the custom domain name"),(0,i.kt)("li",{parentName:"ul"},"Routing rule to ensure requests with ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/")," in the URL is routed to the backend REST API"),(0,i.kt)("li",{parentName:"ul"},"Routing rule to ensure requests without ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/")," in the URL is routing to the web UI")),(0,i.kt)("p",null,"Just like last week, we will use the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/web-app-routing?WT.mc_id=containers-84290-pauyu&tabs=without-osm"},"Web Application Routing")," add-on for AKS. But this time, we'll integrate it with Azure DNS and Azure Key Vault to satisfy all of our requirements above."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"At the time of this writing the add-on is still in Public Preview")),(0,i.kt)("h2",{id:"generate-tls-certificate-and-store-in-azure-key-vault"},"Generate TLS certificate and store in Azure Key Vault"),(0,i.kt)("p",null,"We deployed an Azure Key Vault ",(0,i.kt)("a",{parentName:"p",href:"/Cloud-Native/cnny-2023/bring-your-app-day-2"},"yesterday")," to store secrets. We'll use it again to store a TLS certificate too."),(0,i.kt)("p",null,"Let's create and export a self-signed certificate for the custom domain."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'DNS_NAME=eshoponweb$RANDOM.com\nopenssl req -new -x509 -nodes -out web-tls.crt -keyout web-tls.key -subj "/CN=${DNS_NAME}" -addext "subjectAltName=DNS:${DNS_NAME}"\nopenssl pkcs12 -export -in web-tls.crt -inkey web-tls.key -out web-tls.pfx -password pass:\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For learning purposes we'll use a self-signed certificate and a fake custom domain name."),(0,i.kt)("p",{parentName:"admonition"},"To browse to the site using the fake domain, we'll mimic a DNS lookup by adding an entry to your host file which maps the public IP address assigned to the ingress controller to the custom domain."),(0,i.kt)("p",{parentName:"admonition"},"In a production scenario, you will need to have a real domain delegated to Azure DNS and a valid TLS certificate for the domain.")),(0,i.kt)("p",null,"Grab your Azure Key Vault name and set the value in a variable for later use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'RESOURCE_GROUP=cnny-week3\n\nAKV_NAME=$(az resource list \\\n  --resource-group $RESOURCE_GROUP \\\n  --resource-type Microsoft.KeyVault/vaults \\\n  --query "[0].name" -o tsv)\n')),(0,i.kt)("p",null,"Grant yourself permissions to ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"list"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," certificates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"MY_USER_NAME=$(az account show --query user.name -o tsv)\nMY_USER_OBJECT_ID=$(az ad user show --id $MY_USER_NAME --query id -o tsv)\n\naz keyvault set-policy \\\n  --name $AKV_NAME \\\n  --object-id $MY_USER_OBJECT_ID \\\n  --certificate-permissions get list import\n")),(0,i.kt)("p",null,"Upload the TLS certificate to Azure Key Vault and grab its certificate URI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"WEB_TLS_CERT_ID=$(az keyvault certificate import \\\n  --vault-name $AKV_NAME \\\n  --name web-tls \\\n  --file web-tls.pfx \\\n  --query id \\\n  --output tsv)\n")),(0,i.kt)("h2",{id:"implement-custom-dns-with-azure-dns"},"Implement custom DNS with Azure DNS"),(0,i.kt)("p",null,"Create a custom domain for our application and grab its Azure resource id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"DNS_NAME=eshoponweb$RANDOM.com\n\nDNS_ZONE_ID=$(az network dns zone create \\\n  --name $DNS_NAME \\\n  --resource-group $RESOURCE_GROUP \\\n  --query id \\\n  --output tsv)\n")),(0,i.kt)("h2",{id:"enable-web-application-routing-add-on-for-aks"},"Enable Web Application Routing add-on for AKS"),(0,i.kt)("p",null,"As we enable the Web Application Routing add-on, we'll also pass in the Azure DNS Zone resource id which triggers the installation of the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/web-app-routing?WT.mc_id=containers-84290-pauyu&tabs=without-osm#web-application-routing-add-on-overview:~:text=external%2Ddns%20controller%3A%20Watches%20for%20Kubernetes%20Ingress%20resources%20and%20creates%20DNS%20A%20records%20in%20the%20cluster%2Dspecific%20DNS%20zone.%20Note%20that%20this%20is%20only%20deployed%20when%20you%20pass%20in%20the%20%2D%2Ddns%2Dzone%2Dresource%2Did%20argument."},(0,i.kt)("inlineCode",{parentName:"a"},"external-dns")," controller")," in your Kubernetes cluster. This controller will be able to write Azure DNS zone entries on your behalf as you deploy Ingress manifests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'AKS_NAME=$(az resource list \\\n  --resource-group $RESOURCE_GROUP \\\n  --resource-type Microsoft.ContainerService/managedClusters \\\n  --query "[0].name" -o tsv)\n\naz aks enable-addons \\\n  --name $AKS_NAME \\\n  --resource-group $RESOURCE_GROUP \\\n  --addons web_application_routing \\\n  --dns-zone-resource-id=$DNS_ZONE_ID\n')),(0,i.kt)("p",null,"The add-on will also deploy a new Azure Managed Identity which is used by the ",(0,i.kt)("inlineCode",{parentName:"p"},"external-dns")," controller when writing Azure DNS zone entries. Currently, it does not have permission to do that, so let's grant it permission."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# This is where resources are automatically deployed by AKS\nNODE_RESOURCE_GROUP=$(az aks show \\\n  --name $AKS_NAME \\\n  --resource-group $RESOURCE_GROUP \\\n  --query nodeResourceGroup -o tsv)\n\n# This is the managed identity created by the Web Application Routing add-on\nMANAGED_IDENTTIY_OBJECT_ID=$(az resource show \\\n  --name webapprouting-${AKS_NAME} \\\n  --resource-group $NODE_RESOURCE_GROUP \\\n  --resource-type Microsoft.ManagedIdentity/userAssignedIdentities \\\n  --query properties.principalId \\\n  --output tsv)\n\n# Grant the managed identity permissions to write DNS entries\naz role assignment create \\\n  --role "DNS Zone Contributor" \\\n  --assignee $MANAGED_IDENTTIY_OBJECT_ID \\\n  --scope $DNS_ZONE_ID\n')),(0,i.kt)("p",null,"The Azure Managed Identity will also be used to retrieve and rotate TLS certificates from Azure Key Vault. So we'll need to grant it permission for that too."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"az keyvault set-policy \\\n  --name $AKV_NAME \\\n  --object-id $MANAGED_IDENTTIY_OBJECT_ID \\\n  --secret-permissions get \\\n  --certificate-permissions get\n")),(0,i.kt)("h2",{id:"implement-ingress-for-the-web-application"},"Implement Ingress for the web application"),(0,i.kt)("p",null,"Before we create a new Ingress manifest, let's update the existing services to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),". With an Ingress in place, there is no reason why we need the Service resources to be accessible from outside the cluster. The new Ingress will be the only entrypoint for external users."),(0,i.kt)("p",null,"We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl patch")," command to update the services"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch service api -p \'{"spec": {"type": "ClusterIP"}}\'\nkubectl patch service web -p \'{"spec": {"type": "ClusterIP"}}\'\n')),(0,i.kt)("p",null,"Deploy a new Ingress to place in front of the ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," Service. Notice there is a special ",(0,i.kt)("inlineCode",{parentName:"p"},"annotations")," entry for ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes.azure.com/tls-cert-keyvault-uri")," which points back to our self-signed certificate that was uploaded to Azure Key Vault."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.azure.com/tls-cert-keyvault-uri: ${WEB_TLS_CERT_ID}\n  name: web\nspec:\n  ingressClassName: webapprouting.kubernetes.azure.com\n  rules:\n  - host: ${DNS_NAME}\n    http:\n      paths:\n      - backend:\n          service:\n            name: web\n            port:\n              number: 80\n        path: /\n        pathType: Prefix\n      - backend:\n          service:\n            name: api\n            port:\n              number: 80\n        path: /api\n        pathType: Prefix\n  tls:\n  - hosts:\n    - ${DNS_NAME}\n    secretName: web-tls\nEOF\n")),(0,i.kt)("p",null,"In our manifest above, we've also configured the Ingress route the traffic to either the ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," services based on the URL path requested. If the request URL includes ",(0,i.kt)("inlineCode",{parentName:"p"},"/api"),"/ then it will send traffic to the ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," backend service. Otherwise, it will send traffic to the ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," service."),(0,i.kt)("p",null,"Within a few minutes, the ",(0,i.kt)("inlineCode",{parentName:"p"},"external-dns")," controller will add an ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," record to Azure DNS which points to the Ingress resource's public IP. With the custom domain in place, we can simply browse using this domain name."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As mentioned above, since this is not a real domain name, we need to modify our host file to make it seem like our custom domain is resolving to the Ingress' public IP address."),(0,i.kt)("p",{parentName:"admonition"},"To get the ingress public IP, run the following:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Get the IP\nkubectl get ingress web -o jsonpath="{.status.loadBalancer.ingress[0].ip}"\n\n# Get the hostname\nkubectl get ingress web -o jsonpath="{.spec.tls[0].hosts[0]}"\n')),(0,i.kt)("p",{parentName:"admonition"},"Next, open your host file and add an entry using the format ",(0,i.kt)("inlineCode",{parentName:"p"},"<YOUR_PUBLIC_IP> <YOUR_CUSTOM_DOMAIN>"),". Below is an example of what it should look like."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"20.237.116.224 eshoponweb11265.com\n")),(0,i.kt)("p",{parentName:"admonition"},"See this ",(0,i.kt)("a",{parentName:"p",href:"https://linuxize.com/post/how-to-edit-your-hosts-file/"},"doc")," for more info on how to do this.")),(0,i.kt)("p",null,"When browsing to the website, you may be presented with a warning about the connection not being private. This is due to the fact that we are using a self-signed certificate. This is expected, so go ahead and proceed anyway to load up the page."),(0,i.kt)("h3",{id:"why-is-the-admin-page-broken"},"Why is the Admin page broken?"),(0,i.kt)("p",null,"If you log in using the ",(0,i.kt)("inlineCode",{parentName:"p"},"admin@microsoft.com")," account and browse to the ",(0,i.kt)("strong",{parentName:"p"},"Admin")," page, you'll notice no products are loaded on the page."),(0,i.kt)("p",null,"This is because the admin page is built using Blazor and compiled as a WebAssembly application that runs in your browser. When the application was compiled, it packed the ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.Development.json")," file as an embedded resource. This file contains the base URL for the public API and it currently points to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://localhost:5099"),". Now that we have a domain name, we can update the base URL and point it to our custom domain."),(0,i.kt)("p",null,"From the root of the ",(0,i.kt)("inlineCode",{parentName:"p"},"eShopOnWeb")," repo, update the configuration file using a ",(0,i.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/sed-command-in-linux-unix-with-examples/"},(0,i.kt)("inlineCode",{parentName:"a"},"sed")," command"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i -e "s/localhost:5099/${DNS_NAME}/g" ./src/BlazorAdmin/wwwroot/appsettings.Development.json\n')),(0,i.kt)("p",null,"Rebuild and push the container to Azure Container Registry."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Grab the name of your Azure Container Registry\nACR_NAME=$(az resource list \\\n  --resource-group $RESOURCE_GROUP \\\n  --resource-type Microsoft.ContainerRegistry/registries \\\n  --query "[0].name" -o tsv)\n\n# Invoke a build and publish job\naz acr build \\\n  --registry $ACR_NAME \\\n  --image $ACR_NAME.azurecr.io/web:v0.1.0 \\\n  --file ./src/Web/Dockerfile .\n')),(0,i.kt)("p",null,"Once the container build has completed, we can issue a ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl patch")," command to quickly update the ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," deployment to test our change."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch deployment web -p "$(cat <<EOF\n{\n  "spec": {\n    "template": {\n      "spec": {\n        "containers": [\n          {\n            "name": "web",\n            "image": "${ACR_NAME}.azurecr.io/web:v0.1.0"\n          }\n        ]\n      }\n    }\n  }\n}\nEOF\n)"\n')),(0,i.kt)("p",null,"If all went well, you will be able to browse the admin page again and confirm product data is being loaded \ud83e\udd73"),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"The Web Application Routing add-on for AKS aims to streamline the process of exposing it to the public using the open-source ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/"},"NGINX Ingress Controller"),". With the add-on being managed by Azure, it natively integrates with other Azure services like Azure DNS and eliminates the need to manually create DNS entries. It can also integrate with Azure Key Vault to automatically pull in TLS certificates and rotate them as needed to further reduce operational overhead."),(0,i.kt)("p",null,"We are one step closer to production and in the upcoming posts we'll further operationalize and secure our deployment, so stay tuned!"),(0,i.kt)("p",null,"In the meantime, check out the resources listed below for further reading."),(0,i.kt)("p",null,"You can also find manifests with all the changes made in today's post in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/eShopOnAKS/tree/week3/day3"},"Azure-Samples/eShopOnAKS")," repository."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("admonition",{title:"Take the Cloud Skills Challenge!",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/training/challenges?id=a0e385b9-f970-4182-b2e2-3b4619b6c356"},"Enroll")," in the Cloud Skills Challenge! "),(0,i.kt)("p",{parentName:"admonition"},"Don't miss out on this opportunity to level up your skills and stay ahead of the curve in the world of cloud native. ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/web-app-routing?WT.mc_id=containers-84290-pauyu&tabs=without-osm"},"Web Application Routing (Preview)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/azure/web-application-routing-on-aks-58ap"},"Web Application Routing on AKS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/aks-webapp-routing-lab"},"Lab: Web Application Routing with AKS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/"},"NGINX Ingress Controller")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/dns/dns-overview?WT.mc_id=containers-84290-pauyu"},"What is Azure DNS?"))))}c.isMDXComponent=!0}}]);