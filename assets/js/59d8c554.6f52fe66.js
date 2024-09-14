"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[4694],{51996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(74848),o=n(28453);const i={sidebar_label:"Functions"},a="Functions",s={id:"pro/tales-component/functions",title:"Functions",description:"Get Narrative Component",source:"@site/docs/pro/tales-component/functions.md",sourceDirName:"pro/tales-component",slug:"/pro/tales-component/functions",permalink:"/narrative-documentation/pro/tales-component/functions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Functions"},sidebar:"tutorialSidebar",previous:{title:"Tales Component",permalink:"/narrative-documentation/pro/tales-component/"},next:{title:"UI - COMING SOON",permalink:"/narrative-documentation/pro/ui/"}},c={},l=[{value:"Get Narrative Component",id:"get-narrative-component",level:2},{value:"Output",id:"output",level:3},{value:"Get Narrative Component From Target",id:"get-narrative-component-from-target",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Output",id:"output-1",level:3}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"functions",children:"Functions"})}),"\n",(0,r.jsx)(t.h2,{id:"get-narrative-component",children:"Get Narrative Component"}),"\n",(0,r.jsxs)(t.p,{children:["When you want to start any ",(0,r.jsx)(t.a,{href:"../dialogue",children:"dialogue"})," or ",(0,r.jsx)(t.a,{href:"../quests",children:"quest"}),", you need to get hold of the Tales component."]}),"\n",(0,r.jsxs)(t.p,{children:["This component is the driver that handles all ",(0,r.jsx)(t.a,{href:"../dialogue",children:"dialogue"})," or ",(0,r.jsx)(t.a,{href:"../quests",children:"quests"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This function will attempt to load the component from the target passed into it (self by default), then the owning controller then the pawn."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"get-narrative-component.png",src:n(71164).A+"",width:"261",height:"98"})}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["Under the hood, this function simply calls ",(0,r.jsx)(t.strong,{children:"Get Narrative Component From Target"})," passing in ",(0,r.jsx)(t.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Kismet/UGameplayStatics/GetPlayerController",children:"GetPlayerController"}),"."]}),(0,r.jsxs)(t.p,{children:["If you are working in a multi-player environment with multiple Narrative components, use ",(0,r.jsx)(t.a,{href:"#get-narrative-component-from-target",children:"Get Narrative Component From Target"})," instead."]})]}),"\n",(0,r.jsx)(t.h3,{id:"output",children:"Output"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Return Value"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/narrative-documentation/pro/tales-component/",children:"UTalesComponent"})}),(0,r.jsx)(t.td,{children:"The Narrative component found on the actor."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"get-narrative-component-from-target",children:"Get Narrative Component From Target"}),"\n",(0,r.jsxs)(t.p,{children:["Another method of getting hold of the ",(0,r.jsx)(t.a,{href:"/narrative-documentation/pro/tales-component/",children:"tales component"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["This function allows you to specify which target you want to get the ",(0,r.jsx)(t.a,{href:"/narrative-documentation/pro/tales-component/",children:"Tales Component"})," from."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"get-narrative-component-from-target.png",src:n(4541).A+"",width:"342",height:"128"})}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["This function is more useful for multiplayer games when you have multiple ",(0,r.jsx)(t.a,{href:"/narrative-documentation/pro/tales-component/",children:"Tales Components"}),"."]}),(0,r.jsxs)(t.p,{children:["If you are working in a single player environment, ",(0,r.jsx)(t.a,{href:"#get-narrative-component",children:"GetNarrativeComponent"})," is sufficient."]})]}),"\n",(0,r.jsx)(t.h3,{id:"inputs",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Target"}),(0,r.jsx)(t.td,{children:"AActor"}),(0,r.jsxs)(t.td,{children:["The actor to try and find the ",(0,r.jsx)(t.a,{href:"/narrative-documentation/pro/tales-component/",children:"tales component"})," on."]})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"output-1",children:"Output"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Return Value"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/narrative-documentation/pro/tales-component/",children:"UTalesComponent"})}),(0,r.jsx)(t.td,{children:"The Narrative component found on the actor."})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4541:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/get-narrative-component-from-target-6af67dc1a0a2643b6f6397ca12b20911.png"},71164:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/get-narrative-component-7e2a8ec39703d3124a63577f51485d98.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(96540);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);