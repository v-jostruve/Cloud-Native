"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={slug:"bring-your-app-day-1",title:"3-1. Bringing Your Application to Kubernetes - CI/CD",authors:["steven"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["pods","deployments","kubernetes","aks","container-apps","cloud-native","github-actions","ci-cd"],image:"https://azure.github.io/Cloud-Native/img/og/30-11.png",description:"Taking a existing application, containerizing it, and publishing to Kubernetes in GitHub Actions.",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},o=void 0,l={permalink:"/Cloud-Native/cnny-2023/bring-your-app-day-1",source:"@site/blog-cnny/2023-02-06/index.md",title:"3-1. Bringing Your Application to Kubernetes - CI/CD",description:"Taking a existing application, containerizing it, and publishing to Kubernetes in GitHub Actions.",date:"2023-02-06T00:00:00.000Z",formattedDate:"February 6, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"}],readingTime:13.12,hasTruncateMarker:!1,authors:[{name:"Steven Murawski",title:"Principal Cloud Advocate",url:"https://github.com/smurawski",imageURL:"https://github.com/smurawski.png",key:"steven"}],frontMatter:{slug:"bring-your-app-day-1",title:"3-1. Bringing Your Application to Kubernetes - CI/CD",authors:["steven"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["pods","deployments","kubernetes","aks","container-apps","cloud-native","github-actions","ci-cd"],image:"https://azure.github.io/Cloud-Native/img/og/30-11.png",description:"Taking a existing application, containerizing it, and publishing to Kubernetes in GitHub Actions.",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},prevItem:{title:"3-2. Bringing Your Application to Kubernetes - Adapting Storage, Secrets, and Configuration",permalink:"/Cloud-Native/cnny-2023/bring-your-app-day-2"},nextItem:{title:"2-5. Kubernetes Fundamentals - Scaling Pods and Nodes",permalink:"/Cloud-Native/cnny-2023/fundamentals-day-5"}},s={authorsImageUrls:[void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Our Application",id:"our-application",level:2},{value:"Adding Some Infrastructure as Code",id:"adding-some-infrastructure-as-code",level:2},{value:"Federated Identity",id:"federated-identity",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Set Up Some Defaults",id:"set-up-some-defaults",level:4},{value:"Create an Azure AD Application",id:"create-an-azure-ad-application",level:4},{value:"Set Up Federation for that Azure AD Application",id:"set-up-federation-for-that-azure-ad-application",level:4},{value:"Create a Service Principal for the Azure AD Application",id:"create-a-service-principal-for-the-azure-ad-application",level:4},{value:"Give that Service Principal Rights to Azure Resources",id:"give-that-service-principal-rights-to-azure-resources",level:3},{value:"Add Secrets to GitHub Repository",id:"add-secrets-to-github-repository",level:4},{value:"Creating a Bicep Deployment",id:"creating-a-bicep-deployment",level:3},{value:"Resuable Workflows",id:"resuable-workflows",level:4},{value:"Adding the Bicep Deployment",id:"adding-the-bicep-deployment",level:3},{value:"Permissions",id:"permissions",level:4},{value:"Deploy AKS Job",id:"deploy-aks-job",level:4},{value:"Building and Publishing a Container Image",id:"building-and-publishing-a-container-image",level:2},{value:"Add a Reusable Workflow",id:"add-a-reusable-workflow",level:3},{value:"Build the Container Images",id:"build-the-container-images",level:4},{value:"Scan the Container Images",id:"scan-the-container-images",level:4},{value:"Publish the Container Images",id:"publish-the-container-images",level:4},{value:"Update the Build With the Image Build and Publish",id:"update-the-build-with-the-image-build-and-publish",level:3},{value:"Deploying to Kubernetes",id:"deploying-to-kubernetes",level:2},{value:"Starting the Reusable Workflow to Deploy to AKS",id:"starting-the-reusable-workflow-to-deploy-to-aks",level:3},{value:"Edit the Deployment For Our Current Image Tag",id:"edit-the-deployment-for-our-current-image-tag",level:3},{value:"Kustomize Definition",id:"kustomize-definition",level:4},{value:"Replacing Values in our Build",id:"replacing-values-in-our-build",level:4},{value:"Deploying the Manifests",id:"deploying-the-manifests",level:3},{value:"Summary",id:"summary",level:2},{value:"Resources",id:"resources",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-1"}),(0,i.kt)("meta",{name:"twitter:title",content:"3-1. Bringing Your Application to Kubernetes - CI/CD"}),(0,i.kt)("meta",{name:"twitter:description",content:"Taking a existing application, containerizing it, and publishing to Kubernetes in GitHub Actions."}),(0,i.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-11.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@stevenmurawski"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-1"})),(0,i.kt)("p",null,"Welcome to ",(0,i.kt)("inlineCode",{parentName:"p"},"Day 1 of Week 3")," of #CloudNativeNewYear!"),(0,i.kt)("p",null,"The theme for this week is Bringing Your Application to Kubernetes. Last we talked about Kubernetes Fundamentals. Today we'll explore getting an existing application running in Kubernetes with a full pipeline in GitHub Actions."),(0,i.kt)("admonition",{title:"Ask the Experts Thursday, February 9th at 9 AM PST",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://aka.ms/cnny/ate"},"Join us for a live Q&A with Experts from the Azure Kubernetes Service product team!"))),(0,i.kt)("admonition",{title:"Friday, February 10th at 11 AM PST",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Join us for a live demo and let us answer your questions."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://aka.ms/cnny/live-coding"},"We'll be live on YouTube walking through today's (and the rest of this week's) demos"),".  Join us Friday, February 10th and bring your questions!")),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Our Application"),(0,i.kt)("li",{parentName:"ul"},"Adding Some Infrastructure as Code"),(0,i.kt)("li",{parentName:"ul"},"Building and Publishing a Container Image"),(0,i.kt)("li",{parentName:"ul"},"Deploying to Kubernetes"),(0,i.kt)("li",{parentName:"ul"},"Summary"),(0,i.kt)("li",{parentName:"ul"},"Resources")),(0,i.kt)("h2",{id:"our-application"},"Our Application"),(0,i.kt)("p",null,"This week we'll be taking an exisiting application - something similar to a typical line of business application - and setting it up to run in Kubernetes.  Over the course of the week, we'll address different concerns.  Today we'll focus on updating our CI/CD process to handle standing up (or validating that we have) an ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/intro-kubernetes?WT.mc_id=containers-84290-stmuraws"},"Azure Kubernetes Service (AKS)")," environment, building and publishing container images for our web site and API server, and getting those services running in Kubernetes."),(0,i.kt)("p",null,"The application we'll be starting with is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/eShopOnAKS"},"eShopOnWeb"),".  This application has a web site and API which are backed by a SQL Server instance.  It's built in .NET 7, so it's cross-platform."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For the enterprising among you, you may notice that there are a number of different eShopOn* variants on GitHub, including ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotnet-architecture/eShopOnContainers"},"eShopOnContainers"),".  We aren't using that example as it's more of an end state than a starting place. Afterwards, feel free to check out that example as what this solution could look like as a series of microservices.")),(0,i.kt)("h2",{id:"adding-some-infrastructure-as-code"},"Adding Some Infrastructure as Code"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/Cloud-Native/cnny-2023/fundamentals-day-1#setting-up-a-kubernetes-environment-in-azure"},"Just like last week"),", we need to stand up an AKS environment.  This week, however, rather than running commands in our own shell, we'll set up GitHub Actions to do that for us."),(0,i.kt)("p",null,"There is a ",(0,i.kt)("strong",{parentName:"p"},"LOT")," of plumbing in this section, ",(0,i.kt)("strong",{parentName:"p"},"but")," once it's set up, it'll make our lives a lot easier.  This section ensures that we have an environment to deploy our application into configured the way we want.  We can easily extend this to accomodate multiple environments or add additional microservices with minimal new effort."),(0,i.kt)("h3",{id:"federated-identity"},"Federated Identity"),(0,i.kt)("p",null,"Setting up a federated identity will allow us a more securable and auditable way of accessing Azure from GitHub Actions.  For more about setting up a federated identity, Microsoft Learn has the details on ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/developer/github/connect-from-azure?tabs=azure-portal%2Cwindows&WT.mc_id=containers-84290-stmuraws"},"connecting GitHub Actions to Azure"),"."),(0,i.kt)("p",null,"Here, we'll just walk through the setup of the identity and configure GitHub to use that idenity to deploy our AKS environment and interact with our Azure Container Registry."),(0,i.kt)("p",null,"The examples will use PowerShell, but a Bash version of the setup commands is available in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/eShopOnAKS/tree/week3/day1"},"week3/day1 branch"),"."),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To follow along, you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a GitHub account"),(0,i.kt)("li",{parentName:"ul"},"an Azure Subscription"),(0,i.kt)("li",{parentName:"ul"},"the Azure CLI"),(0,i.kt)("li",{parentName:"ul"},"and the Git CLI.")),(0,i.kt)("p",null,"You'll need to fork the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/eShopOnAKS"},"source repository")," under your GitHub user or organization where you can manage secrets and GitHub Actions."),(0,i.kt)("p",null,"It would be helpful to have the ",(0,i.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI"),", but it's not required."),(0,i.kt)("h4",{id:"set-up-some-defaults"},"Set Up Some Defaults"),(0,i.kt)("p",null,"You will need to update one or more of the variables (your user or organization, what branch you want to work off of, and possibly the Azure AD application name if there is a conflict)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"# Replace the gitHubOrganizationName value\n# with the user or organization you forked\n# the repository under.\n\n$githubOrganizationName = 'Azure-Samples'\n$githubRepositoryName  = 'eShopOnAKS'\n$branchName = 'week3/day1'\n$applicationName = 'cnny-week3-day1'\n")),(0,i.kt)("h4",{id:"create-an-azure-ad-application"},"Create an Azure AD Application"),(0,i.kt)("p",null,"Next, we need to create an Azure AD application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"# Create an Azure AD application\n$aksDeploymentApplication = New-AzADApplication -DisplayName $applicationName\n")),(0,i.kt)("h4",{id:"set-up-federation-for-that-azure-ad-application"},"Set Up Federation for that Azure AD Application"),(0,i.kt)("p",null,"And configure that application to allow federated credential requests from our GitHub repository for a particular branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"# Create a federated identity credential for the application\nNew-AzADAppFederatedCredential `\n   -Name $applicationName `\n   -ApplicationObjectId $aksDeploymentApplication.Id `\n   -Issuer 'https://token.actions.githubusercontent.com' `\n   -Audience 'api://AzureADTokenExchange' `\n   -Subject \"repo:$($githubOrganizationName)/$($githubRepositoryName):ref:refs/heads/$branchName\"\n")),(0,i.kt)("h4",{id:"create-a-service-principal-for-the-azure-ad-application"},"Create a Service Principal for the Azure AD Application"),(0,i.kt)("p",null,"Once the application has been created, we need a service principal tied to that application.  The service principal can be granted rights in Azure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"# Create a service principal for the application\nNew-AzADServicePrincipal -AppId $($aksDeploymentApplication.AppId)\n")),(0,i.kt)("h3",{id:"give-that-service-principal-rights-to-azure-resources"},"Give that Service Principal Rights to Azure Resources"),(0,i.kt)("p",null,"Because our Bicep deployment exists at the subscription level and we are creating role assignments, we need to give it Owner rights. If we changed the scope of the deployment to just a resource group, we could apply more scoped permissions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"$azureContext = Get-AzContext\nNew-AzRoleAssignment `\n   -ApplicationId $($aksDeploymentApplication.AppId) `\n   -RoleDefinitionName Owner `\n   -Scope $azureContext.Subscription.Id\n")),(0,i.kt)("h4",{id:"add-secrets-to-github-repository"},"Add Secrets to GitHub Repository"),(0,i.kt)("p",null,"If you have the GitHub CLI, you can use that right from your shell to set the secrets needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"gh secret set AZURE_CLIENT_ID --body $aksDeploymentApplication.AppId\ngh secret set AZURE_TENANT_ID --body $azureContext.Tenant.Id\ngh secret set AZURE_SUBSCRIPTION_ID --body $azureContext.Subscription.Id\n")),(0,i.kt)("p",null,"Otherwise, you can create them through the web interface like I did in the Learn Live event below."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It may look like the whole video will play, but it'll stop after configuring the secrets in GitHub (after about 9 minutes)"),(0,i.kt)("p",{parentName:"admonition"},"The video shows creating the Azure AD application, service principals, and configuring the federated identity in Azure AD and GitHub.")),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/sZ0Z-4r08so?start=1613&end=2124",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("h3",{id:"creating-a-bicep-deployment"},"Creating a Bicep Deployment"),(0,i.kt)("h4",{id:"resuable-workflows"},"Resuable Workflows"),(0,i.kt)("p",null,"We'll create our Bicep deployment in a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/actions/using-workflows/reusing-workflows"},"reusable workflows"),".  What are they?  The previous link has the documentation or the video below has ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/brandonmartinez"},"my colleague Brandon Martinez")," and I talking about them."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/sZ0Z-4r08so?start=1065&end=1524",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("p",null,"This workflow is basically ",(0,i.kt)("a",{parentName:"p",href:"/Cloud-Native/cnny-2023/fundamentals-day-1#setting-up-a-kubernetes-environment-in-azure"},"the same deployment")," we did in last week's series, just in GitHub Actions."),(0,i.kt)("p",null,"Start by creating a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy_aks.yml")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows")," directory with the below contents."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"name: deploy\n\non:\n  workflow_call:\n    inputs:\n      resourceGroupName:\n        required: true\n        type: string\n    secrets:\n      AZURE_CLIENT_ID:\n        required: true\n      AZURE_TENANT_ID:\n        required: true\n      AZURE_SUBSCRIPTION_ID:\n        required: true\n    outputs:\n      containerRegistryName:\n        description: Container Registry Name\n        value: ${{ jobs.deploy.outputs.containerRegistryName }}\n      containerRegistryUrl:\n        description: Container Registry Login Url\n        value: ${{ jobs.deploy.outputs.containerRegistryUrl }}\n      resourceGroupName:\n        description: Resource Group Name\n        value: ${{ jobs.deploy.outputs.resourceGroupName }}\n      aksName:\n        description: Azure Kubernetes Service Cluster Name\n        value: ${{ jobs.deploy.outputs.aksName }}\n\npermissions:\n  id-token: write\n  contents: read\n\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - uses: azure/login@v1\n      name: Sign in to Azure\n      with:\n        client-id: ${{ secrets.AZURE_CLIENT_ID }}\n        tenant-id: ${{ secrets.AZURE_TENANT_ID }}\n        subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}\n    - uses: azure/arm-deploy@v1\n      name: Run preflight validation\n      with:\n        deploymentName: ${{ github.run_number }}\n        scope: subscription\n        region: eastus\n        template: ./deploy/main.bicep\n        parameters: >\n          resourceGroup=${{ inputs.resourceGroupName }}\n        deploymentMode: Validate\n\n  deploy:\n    needs: validate\n    runs-on: ubuntu-latest\n    outputs:\n      containerRegistryName: ${{ steps.deploy.outputs.acr_name }}\n      containerRegistryUrl: ${{ steps.deploy.outputs.acr_login_server_url }}\n      resourceGroupName: ${{ steps.deploy.outputs.resource_group_name }}\n      aksName: ${{ steps.deploy.outputs.aks_name }}\n    steps:\n    - uses: actions/checkout@v2\n    - uses: azure/login@v1\n      name: Sign in to Azure\n      with:\n        client-id: ${{ secrets.AZURE_CLIENT_ID }}\n        tenant-id: ${{ secrets.AZURE_TENANT_ID }}\n        subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}\n    - uses: azure/arm-deploy@v1\n      id: deploy\n      name: Deploy Bicep file\n      with:\n        failOnStdErr: false\n        deploymentName: ${{ github.run_number }}\n        scope: subscription\n        region: eastus\n        template: ./deploy/main.bicep\n        parameters: >\n          resourceGroup=${{ inputs.resourceGroupName }}\n")),(0,i.kt)("h3",{id:"adding-the-bicep-deployment"},"Adding the Bicep Deployment"),(0,i.kt)("p",null,"Once we have the Bicep deployment workflow, we can add it to the primary build definition in ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/dotnetcore.yml")),(0,i.kt)("h4",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"First, we need to add a permissions block to let the workflow request our Azure AD token.  This can go towards the top of the YAML file (I started it on line 5)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"permissions:\n  id-token: write\n  contents: read\n")),(0,i.kt)("h4",{id:"deploy-aks-job"},"Deploy AKS Job"),(0,i.kt)("p",null,"Next, we'll add a reference to our reusable workflow.  This will go after the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," job."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"  deploy_aks:\n    needs: [build]\n    uses: ./.github/workflows/deploy_aks.yml\n    with:\n      resourceGroupName: 'cnny-week3'\n    secrets:\n      AZURE_CLIENT_ID: ${{ secrets.AZURE_CLIENT_ID }}\n      AZURE_TENANT_ID: ${{ secrets.AZURE_TENANT_ID }}\n      AZURE_SUBSCRIPTION_ID: ${{ secrets.AZURE_SUBSCRIPTION_ID }}\n")),(0,i.kt)("h2",{id:"building-and-publishing-a-container-image"},"Building and Publishing a Container Image"),(0,i.kt)("p",null,"Now that we have our target environment in place and an Azure Container Registry, we can build and publish our container images."),(0,i.kt)("h3",{id:"add-a-reusable-workflow"},"Add a Reusable Workflow"),(0,i.kt)("p",null,"First, we'll create a new file for our reusable workflow at ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/publish_container_image.yml"),"."),(0,i.kt)("p",null,"We'll start the file with a name, the parameters it needs to run, and the permissions requirements for the federated identity request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"name: Publish Container Images\n\non: \n  workflow_call:\n    inputs:\n      containerRegistryName:\n        required: true\n        type: string\n      containerRegistryUrl:\n        required: true\n        type: string\n      githubSha:\n        required: true\n        type: string\n    secrets:\n      AZURE_CLIENT_ID:\n        required: true\n      AZURE_TENANT_ID:\n        required: true\n      AZURE_SUBSCRIPTION_ID:\n        required: true\n\npermissions:\n  id-token: write\n  contents: read\n")),(0,i.kt)("h4",{id:"build-the-container-images"},"Build the Container Images"),(0,i.kt)("p",null,"Our next step is to build the two container images we'll need for the application, the website and the API.  We'll build the container images on our build worker and tag it with the git SHA, so there'll be a direct tie between the point in time in our codebase and the container images that represent it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"jobs:\n  publish_container_image:\n    runs-on: ubuntu-latest\n\n    steps:\n    - uses: actions/checkout@v2\n    - name: docker build\n      run: |\n        docker build . -f src/Web/Dockerfile -t ${{ inputs.containerRegistryUrl }}/web:${{ inputs.githubSha }}\n        docker build . -f src/PublicApi/Dockerfile -t ${{ inputs.containerRegistryUrl }}/api:${{ inputs.githubSha}}\n")),(0,i.kt)("h4",{id:"scan-the-container-images"},"Scan the Container Images"),(0,i.kt)("p",null,"Before we publish those container images, we'll scan them for vulnerabilities and best practice violations.  We can add these two steps (one scan for each image)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"    - name: scan web container image\n      uses: Azure/container-scan@v0\n      with:\n        image-name: ${{ inputs.containerRegistryUrl }}/web:${{ inputs.githubSha}}\n    - name: scan api container image\n      uses: Azure/container-scan@v0\n      with:\n        image-name: ${{ inputs.containerRegistryUrl }}/web:${{ inputs.githubSha}}\n")),(0,i.kt)("p",null,"The container images provided have a few items that'll be found. We can create an allowed list at ",(0,i.kt)("inlineCode",{parentName:"p"},".github/containerscan/allowedlist.yaml")," to define vulnerabilities or best practice violations that we'll explictly allow to ",(0,i.kt)("strong",{parentName:"p"},"not")," fail our build."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"general:\n  vulnerabilities:\n    - CVE-2022-29458\n    - CVE-2022-3715\n    - CVE-2022-1304\n    - CVE-2021-33560\n    - CVE-2020-16156\n    - CVE-2019-8457\n    - CVE-2018-8292\n  bestPracticeViolations:\n    - CIS-DI-0001\n    - CIS-DI-0005  \n    - CIS-DI-0006 \n    - CIS-DI-0008  \n")),(0,i.kt)("h4",{id:"publish-the-container-images"},"Publish the Container Images"),(0,i.kt)("p",null,"Finally, we'll log in to Azure, then log in to our Azure Container Registry, and push our images."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"    - uses: azure/login@v1\n      name: Sign in to Azure\n      with:\n        client-id: ${{ secrets.AZURE_CLIENT_ID }}\n        tenant-id: ${{ secrets.AZURE_TENANT_ID }}\n        subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}\n    - name: acr login \n      run: az acr login --name ${{ inputs.containerRegistryName  }}\n    - name: docker push\n      run: |\n        docker push ${{ inputs.containerRegistryUrl }}/web:${{ inputs.githubSha}}\n        docker push ${{ inputs.containerRegistryUrl }}/api:${{ inputs.githubSha}}\n")),(0,i.kt)("h3",{id:"update-the-build-with-the-image-build-and-publish"},"Update the Build With the Image Build and Publish"),(0,i.kt)("p",null,"Now that we have our reusable workflow to create and publish our container images, we can include that in our primary build defnition at ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/dotnetcore.yml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"  publish_container_image:\n    needs: [deploy_aks]\n    uses: ./.github/workflows/publish_container_image.yml\n    with:\n      containerRegistryName: ${{ needs.deploy_aks.outputs.containerRegistryName }}\n      containerRegistryUrl: ${{ needs.deploy_aks.outputs.containerRegistryUrl }}\n      githubSha: ${{ github.sha }}\n    secrets:\n      AZURE_CLIENT_ID: ${{ secrets.AZURE_CLIENT_ID }}\n      AZURE_TENANT_ID: ${{ secrets.AZURE_TENANT_ID }}\n      AZURE_SUBSCRIPTION_ID: ${{ secrets.AZURE_SUBSCRIPTION_ID }}\n")),(0,i.kt)("h2",{id:"deploying-to-kubernetes"},"Deploying to Kubernetes"),(0,i.kt)("p",null,"Finally, we've gotten enough set up that a commit to the target branch will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"build and test our application code"),(0,i.kt)("li",{parentName:"ul"},"set up (or validate) our AKS and ACR environment"),(0,i.kt)("li",{parentName:"ul"},"and create, scan, and publish our container images to ACR")),(0,i.kt)("p",null,"Our last step will be to deploy our application to Kubernetes.  We'll use the basic building blocks we worked with last week, ",(0,i.kt)("a",{parentName:"p",href:"/Cloud-Native/cnny-2023/fundamentals-day-1#creating-the-deployment"},"deployments")," and ",(0,i.kt)("a",{parentName:"p",href:"/Cloud-Native/cnny-2023/fundamentals-day-2#exposing-pods-via-service"},"services"),"."),(0,i.kt)("h3",{id:"starting-the-reusable-workflow-to-deploy-to-aks"},"Starting the Reusable Workflow to Deploy to AKS"),(0,i.kt)("p",null,"We'll start our workflow with our parameters that we need, as well as the permissions to access the token to log in to Azure."),(0,i.kt)("p",null,"We'll check out our code, then log in to Azure, and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"az")," CLI to get credentials for our AKS cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"name: deploy_to_aks\n\non:\n  workflow_call:\n    inputs:\n      aksName:\n        required: true\n        type: string\n      resourceGroupName:\n        required: true\n        type: string\n      containerRegistryUrl:\n        required: true\n        type: string\n      githubSha:\n        required: true\n        type: string\n    secrets:\n      AZURE_CLIENT_ID:\n        required: true\n      AZURE_TENANT_ID:\n        required: true\n      AZURE_SUBSCRIPTION_ID:\n        required: true\n\npermissions:\n  id-token: write\n  contents: read\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:  \n      - uses: actions/checkout@v2\n      - uses: azure/login@v1\n        name: Sign in to Azure\n        with:\n          client-id: ${{ secrets.AZURE_CLIENT_ID }}\n          tenant-id: ${{ secrets.AZURE_TENANT_ID }}\n          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}\n      - name: Get AKS Credentials\n        run: |\n          az aks get-credentials --resource-group ${{ inputs.resourceGroupName }} --name ${{ inputs.aksName }}\n")),(0,i.kt)("h3",{id:"edit-the-deployment-for-our-current-image-tag"},"Edit the Deployment For Our Current Image Tag"),(0,i.kt)("p",null,"Let's add the Kubernetes manifests to our repo.  This post is long enough, so you can find the content for the manifests folder ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/eShopOnAKS/tree/week3/day1/manifests"},"in the manifests folder in the source repo under the ",(0,i.kt)("inlineCode",{parentName:"a"},"week3/day1")," branch"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you only forked the main branch of the source repo, you can easily get the updated manifests by using the following ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," commands:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"git remote add upstream https://github.com/Azure-Samples/eShopOnAks\ngit fetch upstream week3/day1\ngit checkout upstream/week3/day1 manifests\n")),(0,i.kt)("p",{parentName:"admonition"},"This will make the ",(0,i.kt)("inlineCode",{parentName:"p"},"week3/day1")," branch available locally and then we can update the manifests directory to match the state of that branch.")),(0,i.kt)("p",null,"The deployments and the service defintions should be familiar from last week's content (but not the same).  This week, however, there's a new file in the manifests - ",(0,i.kt)("inlineCode",{parentName:"p"},"./manifests/kustomization.yaml")),(0,i.kt)("p",null,"This file helps us more dynamically edit our kubernetes manifests and support is baked right in to the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," command."),(0,i.kt)("h4",{id:"kustomize-definition"},"Kustomize Definition"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kustomize.io/"},"Kustomize")," allows us to specify specific resource manifests and areas of that manifest to replace.  We've put some placeholders in our file as well, so we can replace those for each run of our CI/CD system."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"./manifests/kustomization.yaml")," you will see:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"resources:\n- deployment-api.yaml\n- deployment-web.yaml\n\n# Change the image name and version\nimages:\n- name: notavalidregistry.azurecr.io/api:v0.1.0\n  newName: <YOUR_ACR_SERVER>/api\n  newTag: <YOUR_IMAGE_TAG>\n- name: notavalidregistry.azurecr.io/web:v0.1.0\n  newName: <YOUR_ACR_SERVER>/web\n  newTag: <YOUR_IMAGE_TAG>\n")),(0,i.kt)("h4",{id:"replacing-values-in-our-build"},"Replacing Values in our Build"),(0,i.kt)("p",null,"Now, we encounter a little problem - our deployment files need to know the tag and ACR server.  We can do a bit of ",(0,i.kt)("inlineCode",{parentName:"p"},"sed")," magic to edit the file on the fly."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/deploy_to_aks.yml"),", we'll add:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'      - name: replace_placeholders_with_current_run\n        run: |\n          sed -i "s/<YOUR_ACR_SERVER>/${{ inputs.containerRegistryUrl }}/g" ./manifests/kustomization.yaml\n          sed -i "s/<YOUR_IMAGE_TAG>/${{ inputs.githubSha }}/g" ./manifests/kustomization.yaml\n')),(0,i.kt)("h3",{id:"deploying-the-manifests"},"Deploying the Manifests"),(0,i.kt)("p",null,"We have our manifests in place and our ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," file (with commands to update it at runtime) ready to go, we can deploy our manifests."),(0,i.kt)("p",null,"First, we'll deploy our database (deployment and service).\nNext, we'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-k")," parameter on ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to tell it to look for a ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomize")," configuration, transform the requested manifests and apply those.\nFinally, we apply the service defintions for the web and API deployments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"        run: |\n          kubectl apply -f ./manifests/deployment-db.yaml \\\n                        -f ./manifests/service-db.yaml\n          kubectl apply -k ./manifests\n          kubectl apply -f ./manifests/service-api.yaml \\\n                        -f ./manifests/service-web.yaml\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"We've covered a lot of ground in today's post.  We set up federated credentials with GitHub.  Then we added reusable workflows to deploy an AKS environment and build/scan/publish our container images, and then to deploy them into our AKS environment."),(0,i.kt)("p",null,"This sets us up to start making changes to our application and Kubernetes configuration and have those changes automatically validated and deployed by our CI/CD system.  Tomorrow, we'll look at updating our application environment with runtime configuration, persistent storage, and more."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("admonition",{title:"Take the Cloud Skills Challenge!",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/training/challenges?id=a0e385b9-f970-4182-b2e2-3b4619b6c356"},"Enroll")," in the Cloud Skills Challenge! "),(0,i.kt)("p",{parentName:"admonition"},"Don't miss out on this opportunity to level up your skills and stay ahead of the curve in the world of cloud native. ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/intro-kubernetes?WT.mc_id=containers-84290-stmuraws"},"Azure Kubernetes Service (AKS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/actions/using-workflows/reusing-workflows"},"Reusable workflows in GitHub Actions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/developer/github/connect-from-azure?tabs=azure-portal%2Cwindows&WT.mc_id=containers-84290-stmuraws"},"Connecting GitHub Actions to Azure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kustomize.io/"},"Kustomize")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cli.github.com/"},"GitHub CLI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Azure-Samples/eShopOnAKS"},"eShopOnAKS"))))}d.isMDXComponent=!0}}]);