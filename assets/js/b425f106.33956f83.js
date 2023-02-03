"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70177],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const r={slug:"fundamentals-day-5",title:"2-5. Kubernetes Fundamentals - Scaling Pods and Nodes",authors:["steven"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["scaling","kubernetes","aks","container-apps","cloud-native"],image:"https://azure.github.io/Cloud-Native/img/og/30-10.png",description:"Learning to Scale Pods and Nodes in Kubernetes on Azure",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},s=void 0,l={permalink:"/Cloud-Native/cnny-2023/fundamentals-day-5",source:"@site/blog-cnny/2023-02-03/scaling.md",title:"2-5. Kubernetes Fundamentals - Scaling Pods and Nodes",description:"Learning to Scale Pods and Nodes in Kubernetes on Azure",date:"2023-02-03T00:00:00.000Z",formattedDate:"February 3, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"}],readingTime:9.09,hasTruncateMarker:!1,authors:[{name:"Steven Murawski",title:"Principal Cloud Advocate",url:"https://github.com/smurawski",imageURL:"https://github.com/smurawski.png",key:"steven"}],frontMatter:{slug:"fundamentals-day-5",title:"2-5. Kubernetes Fundamentals - Scaling Pods and Nodes",authors:["steven"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["scaling","kubernetes","aks","container-apps","cloud-native"],image:"https://azure.github.io/Cloud-Native/img/og/30-10.png",description:"Learning to Scale Pods and Nodes in Kubernetes on Azure",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},nextItem:{title:"2-4. Kubernetes Fundamentals - Volumes, Mounts, and Claims",permalink:"/Cloud-Native/cnny-2023/fundamentals-day-4"}},i={authorsImageUrls:[void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Scaling Our Application",id:"scaling-our-application",level:2},{value:"Scaling Pods",id:"scaling-pods",level:2},{value:"Manually Scale Pods",id:"manually-scale-pods",level:3},{value:"Autoscale Pods with the Horizontal Pod Autoscaler",id:"autoscale-pods-with-the-horizontal-pod-autoscaler",level:3},{value:"Application Architecture Considerations",id:"application-architecture-considerations",level:3},{value:"Scaling Nodes",id:"scaling-nodes",level:2},{value:"Manually Scale Nodes",id:"manually-scale-nodes",level:3},{value:"Autoscale Nodes with the Cluster Autoscaler",id:"autoscale-nodes-with-the-cluster-autoscaler",level:3},{value:"Scaling on Different Events",id:"scaling-on-different-events",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Configure Horizontal Pod Autoscaler",id:"configure-horizontal-pod-autoscaler",level:3},{value:"Configure Cluster Autoscaler",id:"configure-cluster-autoscaler",level:3},{value:"Resources",id:"resources",level:2},{value:"Documentation",id:"documentation",level:3},{value:"Training",id:"training",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/fundamentals-day-5"}),(0,o.kt)("meta",{name:"twitter:title",content:"2-5. Kubernetes Fundamentals - Scaling Pods and Nodes"}),(0,o.kt)("meta",{name:"twitter:description",content:"Learning to Scale Pods and Nodes in Kubernetes on Azure"}),(0,o.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-10.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:creator",content:"@stevenmurawski"}),(0,o.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/fundamentals-day-5"})),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Day 5 of Week 2")," of #CloudNativeNewYear!"),(0,o.kt)("p",null,"The theme for this week is Kubernetes fundamentals. Yesterday we talked about adding persistent storage to our deployment. Today we'll explore the topic of scaling pods and nodes in our Kubernetes cluster."),(0,o.kt)("admonition",{title:"Friday, February 3rd at 11 AM PST",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Join us for a live demo and let us answer your questions."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/cnny/live-coding"},"We'll be live on YouTube walking through today's (and the rest of this week's) demos"),".  Join us Friday, February 3rd and bring your questions!")),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scaling Our Application"),(0,o.kt)("li",{parentName:"ul"},"Scaling Pods"),(0,o.kt)("li",{parentName:"ul"},"Scaling Nodes"),(0,o.kt)("li",{parentName:"ul"},"Exercise"),(0,o.kt)("li",{parentName:"ul"},"Resources")),(0,o.kt)("h2",{id:"scaling-our-application"},"Scaling Our Application"),(0,o.kt)("p",null,"One of our primary reasons to use a service like Kubernetes to orchestrate our workloads is the ability to scale.  We've approached scaling in a multitude of ways over the years, taking advantage of the ever-evolving levels of hardware and software. Kubernetes allows us to ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/concepts-scale?WT.mc_id=containers-84290-stmuraws#manually-scale-pods-or-nodes"},"scale our units of work, Pods"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/concepts-scale?WT.mc_id=containers-84290-stmuraws#cluster-autoscaler"},"the Nodes they run on"),".  This allows us to take advantage of both hardware and software scaling abilities.  Kubernetes can help improve the utilization of existing hardware (by scheduling Pods on Nodes that have resource capacity).  And, with the capabilities of virtualization and/or cloud hosting (or a bit more work, if you have a pool of physical machines), Kubernetes can expand (or contract) the number of Nodes capable of hosting Pods.  Scaling is primarily driven by resource utilization, but can be triggered by a variety of other sources thanks to projects like ",(0,o.kt)("a",{parentName:"p",href:"https://keda.sh/"},"Kubernetes Event-driven Autoscaling (KEDA)"),"."),(0,o.kt)("h2",{id:"scaling-pods"},"Scaling Pods"),(0,o.kt)("p",null,"Our first level of scaling is with our Pods. Earlier, when we worked on our deployment, we talked about how the Kubernetes would use the deployment configuration to ensure that we had the desired workloads running.  One thing we didn't explore was running more than one instance of a pod. We can define a number of replicas of a pod in our ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/concepts-clusters-workloads?WT.mc_id=containers-84290-stmuraws#deployments-and-yaml-manifests"},"Deployment"),"."),(0,o.kt)("h3",{id:"manually-scale-pods"},"Manually Scale Pods"),(0,o.kt)("p",null,"So, if we wanted to define more pods right at the start (or at any point really), we could update our deployment configuration file with the number of replicas and apply that configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"spec:\n  replicas: 5\n")),(0,o.kt)("p",null,"Or we could use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl scale")," command to update the deployment with a number of pods to create."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"kubectl scale --replicas=5 deployment/azure-voting-app\n")),(0,o.kt)("p",null,"Both of these approaches modify the running configuration of our Kubernetes cluster and request that it ensure that we have that set number of replicas running.  Because this was a manual change, the Kubernetes cluster won't automatically increase or decrease the number of pods.  It'll just ensure that there are always the specified number of pods running."),(0,o.kt)("h3",{id:"autoscale-pods-with-the-horizontal-pod-autoscaler"},"Autoscale Pods with the Horizontal Pod Autoscaler"),(0,o.kt)("p",null,"Another approach to scaling our pods is to allow the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/concepts-scale?WT.mc_id=containers-84290-stmuraws#horizontal-pod-autoscaler"},"Horizontal Pod Autoscaler")," to help us scale in response to resources being used by the pod.  This requires a bit more configuration up front.  When we define our pod in our deployment, we need to include resource requests and limits.  The requests help Kubernetes determine what nodes may have capacity for a new instance of a pod.  The limit tells us where the node should cap utilization for a particular instance of a pod.  For example, we'll update our deployment to request 0.25 CPU and set a limit of 0.5 CPU."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"    spec:\n      containers:\n      - image: acrudavoz.azurecr.io/cnny2023/azure-voting-app-rust:ca4\n        name: azure-voting-app-rust\n        ports:\n        - containerPort: 8080\n        env:\n        - name: DATABASE_URL\n          value: postgres://postgres:mypassword@10.244.0.29\n        resources:\n          requests:\n            cpu: 250m\n          limits:\n            cpu: 500m\n")),(0,o.kt)("p",null,"Now that we've given Kubernetes an allowed range and an idea of what free resources a node should have to place new pods, we can set up autoscaling.  Because autoscaling is a persistent configuration, I like to define it in a configuration file that I'll be able to keep with the rest of my cluster configuration.  We'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," command to help us write the configuration file.  We'll request that Kubernetes watch our pods and when the average CPU utilization if 50% of the requested usage (in our case if it's using more than 0.375 CPU across the current number of pods), it can grow the number of pods serving requests up to 10.  If the utilization drops, Kubernetes will have the permission to deprovision pods down to the minimum (three in our example)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"kubectl autoscale deployment azure-voting-app --cpu-percent=50 --min=3 --max=10 -o YAML --dry-run=client\n")),(0,o.kt)("p",null,"Which would give us:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: autoscaling/v1\nkind: HorizontalPodAutoscaler\nmetadata:\n  creationTimestamp: null\n  name: azure-voting-app\nspec:\n  maxReplicas: 10\n  minReplicas: 3\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: azure-voting-app\n  targetCPUUtilizationPercentage: 50\nstatus:\n  currentReplicas: 0\n  desiredReplicas: 0\n")),(0,o.kt)("p",null,"So, how often does the autoscaler check the metrics being monitored?  The autoscaler checks the Metrics API every 15 seconds, however the pods stats are only updated every 60 seconds.  This means that an autoscale event may be evaluated about once a minute.  Once an autoscale down event happens however, Kubernetes has a cooldown period to give the new pods a chance to distribute the workload and let the new metrics accumulate.  There is no delay on scale up events."),(0,o.kt)("h3",{id:"application-architecture-considerations"},"Application Architecture Considerations"),(0,o.kt)("p",null,"We've focused in this example on our front end, which is an easier scaling story.  When we start talking about scaling our database layers or anything that deals with persistent storage or has primary/replica configuration requirements things get a bit more complicated. Some of these applications may have built-in leader election or ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2016/01/simple-leader-election-with-kubernetes/"},"could use sidecars to help use existing features in Kubernetes to perform that function"),".  For shared storage scenarios, ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"persistent volumes")," (or ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/app-platform/aks/storage?WT.mc_id=containers-84290-stmuraws"},"persistent volumes with Azure"),") can be of help, if the application knows how to play well with shared file access."),(0,o.kt)("p",null,"Ultimately, you know your application architecture and, while Kubernetes may not have an exact match to how you are doing things today, the underlying capability is probably there under a different name.  This abstraction allows you to more effectively use Kubernetes to operate a variety of workloads with the levels of controls you need."),(0,o.kt)("h2",{id:"scaling-nodes"},"Scaling Nodes"),(0,o.kt)("p",null,"We've looked at how to scale our pods, but that assumes we have enough resources in our existing pool of nodes to accomodate those scaling requests.  Kubernetes can also help scale our available nodes to ensure that our applications have the necessary resources to meet their performance requirements."),(0,o.kt)("h3",{id:"manually-scale-nodes"},"Manually Scale Nodes"),(0,o.kt)("p",null,"Manually scaling nodes isn't a direct function of Kubernetes, so your operating environment instructions may vary.  On Azure, it's pretty straight forward.  Using the Azure CLI (or other tools), we can tell our AKS cluster to scale up or scale down the number of nodes in our node pool."),(0,o.kt)("p",null,"First, we'll check out how many nodes we currently have in our working environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"kubectl get nodes\n")),(0,o.kt)("p",null,"This will show us"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"azure-voting-app-rust \u276f  kubectl get nodes\nNAME                            STATUS   ROLES   AGE     VERSION\naks-pool0-37917684-vmss000000   Ready    agent   5d21h   v1.24.6\n")),(0,o.kt)("p",null,"Then, we'll scale it up to three nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"az aks scale --resource-group $ResourceGroup --name $AksName --node-count 3\n")),(0,o.kt)("p",null,"Then, we'll check out how many nodes we now have in our working environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"kubectl get nodes\n")),(0,o.kt)("p",null,"Which returns:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"azure-voting-app-rust \u276f  kubectl get nodes\nNAME                            STATUS   ROLES   AGE     VERSION\naks-pool0-37917684-vmss000000   Ready    agent   5d21h   v1.24.6\naks-pool0-37917684-vmss000001   Ready    agent   5m27s   v1.24.6\naks-pool0-37917684-vmss000002   Ready    agent   5m10s   v1.24.6\n")),(0,o.kt)("h3",{id:"autoscale-nodes-with-the-cluster-autoscaler"},"Autoscale Nodes with the Cluster Autoscaler"),(0,o.kt)("p",null,"Things get more interesting when we start working with ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/cluster-autoscaler?WT.mc_id=containers-84290-stmuraws"},"the Cluster Autoscaler"),".  The Cluster Autoscaler watches for the inability of Kubernetes to schedule the required number of pods due to resource constraints (and a few other criteria like affinity/anti-affinity).  If there are insufficient resources available on the existing nodes, the autoscaler can provision new nodes into the nodepool.  Likewise, the autoscaler watches to see if the existing pods could be consolidated to a smaller set of nodes and can remove excess nodes."),(0,o.kt)("p",null,"Enabling the autoscaler is likewise an update that can be dependent on where and how your Kubernetes cluster is hosted. Azure makes it easy with a simple Azure CLI command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"az aks update `\n  --resource-group $ResourceGroup `\n  --name $AksName `\n  --update-cluster-autoscaler `\n  --min-count 1 `\n  --max-count 5\n")),(0,o.kt)("p",null,"There are a ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/cluster-autoscaler#using-the-autoscaler-profile?WT.mc_id=containers-84290-stmuraws"},"variety of settings")," that can be configured to tune how the autoscaler works."),(0,o.kt)("h2",{id:"scaling-on-different-events"},"Scaling on Different Events"),(0,o.kt)("p",null,"CPU and memory utilization are the primary drivers for the Horizontal Pod Autoscaler, but those might not be the best measures as to when you might want to scale workloads.  There are other options for scaling triggers and one of the more common plugins to help with that is the ",(0,o.kt)("a",{parentName:"p",href:"https://keda.sh/"},"Kubernetes Event-driven Autoscaling (KEDA) project"),".  The KEDA project makes it easy to plug in different event sources to help drive scaling.  ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/keda-about?WT.mc_id=containers-84290-stmuraws"},"Find more information about using KEDA on AKS here.")),(0,o.kt)("h2",{id:"exercise"},"Exercise"),(0,o.kt)("p",null,"Let's try out the scaling configurations that we just walked through using ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/azure-voting-app-rust"},"our sample application"),".  If you still have your environment from Day 1, you can use that. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd NOTE: If you don't have an AKS cluster deployed, please head over to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-voting-app-rust/tree/week2/day4"},"Azure-Samples/azure-voting-app-rust"),", clone the repo, and follow the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-voting-app-rust/blob/main/README.md"},"README.md")," to execute the Azure deployment and setup your ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," context. Check out ",(0,o.kt)("a",{parentName:"p",href:"/Cloud-Native/cnny-2023/fundamentals-day-1#setting-up-a-kubernetes-environment-in-azure"},"the first post this week for more on the environment setup"),".")),(0,o.kt)("h3",{id:"configure-horizontal-pod-autoscaler"},"Configure Horizontal Pod Autoscaler"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Edit ",(0,o.kt)("inlineCode",{parentName:"li"},"./manifests/deployment-app.yaml")," to include resource requests and limits.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"        resources:\n          requests:\n            cpu: 250m\n          limits:\n            cpu: 500m\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Apply the updated deployment configuration.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"kubectl apply -f ./manifests/deployment-app.yaml\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create the horizontal pod autoscaler configuration and apply it")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"kubectl autoscale deployment azure-voting-app --cpu-percent=50 --min=3 --max=10 -o YAML --dry-run=client > ./manifests/scaler-app.yaml\nkubectl apply -f ./manifests/scaler-app.yaml\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check to see your pods scale out to the minimum.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"kubectl get pods\n")),(0,o.kt)("h3",{id:"configure-cluster-autoscaler"},"Configure Cluster Autoscaler"),(0,o.kt)("p",null,"Configuring the basic behavior of the Cluster Autoscaler is a bit simpler.  We just need to run the Azure CLI command to enable the autoscaler and define our lower and upper limits."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check the current nodes available (should be 1).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"kubectl get nodes\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update the cluster to enable the autoscaler")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"az aks update `\n  --resource-group $ResourceGroup `\n  --name $AksName `\n  --update-cluster-autoscaler `\n  --min-count 2 `\n  --max-count 5\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check to see the current number of nodes (should be 2 now).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"kubectl get nodes\n")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("h3",{id:"documentation"},"Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/concepts-scale?WT.mc_id=containers-84290-stmuraws#manually-scale-pods-or-nodes"},"Manually Scaling Pods and Nodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/concepts-clusters-workloads?WT.mc_id=containers-84290-stmuraws#deployments-and-yaml-manifests"},"Deployments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/concepts-scale?WT.mc_id=containers-84290-stmuraws#horizontal-pod-autoscaler"},"Horizontal Pod Autoscaler")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2016/01/simple-leader-election-with-kubernetes/"},"Leader Election in Kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Persistent Volumes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/app-platform/aks/storage?WT.mc_id=containers-84290-stmuraws"},"Persistent Volumes with Azure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/cluster-autoscaler?WT.mc_id=containers-84290-stmuraws"},"Cluster Autoscaler")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/cluster-autoscaler#using-the-autoscaler-profile?WT.mc_id=containers-84290-stmuraws"},"Cluster Autoscaler Profile Settings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://keda.sh/"},"Kubernetes Event-driven Autoscaling (KEDA) project")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/keda-about?WT.mc_id=containers-84290-stmuraws"},"KEDA on AKS"))),(0,o.kt)("h3",{id:"training"},"Training"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/aks-application-autoscaling-native?WT.mc_id=containers-84290-stmuraws"},"Application scalability on AKS with HorizontalPodAutoscalers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/aks-cluster-autoscaling?WT.mc_id=containers-84290-stmuraws"},"Cluster Autoscaling with AKS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/aks-app-scale-keda?WT.mc_id=containers-84290-stmuraws"},"Scale container applications in Azure Kubernetes Services using KEDA"))))}p.isMDXComponent=!0}}]);