"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[6693],{59914:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>A});var i=n(74848),r=n(28453);const a={sidebar_label:"Interaction"},o="Interaction",c={id:"pro/interaction/index",title:"Interaction",description:"Interaction is a full interactive component that lets you interact with actors in the world. From starting dialogue to opening chests.",source:"@site/docs/pro/interaction/index.md",sourceDirName:"pro/interaction",slug:"/pro/interaction/",permalink:"/narrative-documentation/pro/interaction/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Interaction"},sidebar:"tutorialSidebar",previous:{title:"F.A.Qs",permalink:"/narrative-documentation/pro/faqs"},next:{title:"Interactable",permalink:"/narrative-documentation/pro/interaction/interactables/"}},s={},A=[{value:"Activate / Deactivate",id:"activate--deactivate",level:2},{value:"Changing keys",id:"changing-keys",level:2},{value:"Properties",id:"properties",level:2}];function d(t){const e={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"interaction",children:"Interaction"})}),"\n",(0,i.jsx)(e.p,{children:"Interaction is a full interactive component that lets you interact with actors in the world. From starting dialogue to opening chests."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"./interactables",children:"Interactables"})," are components that you add to actors to give interactable functionality."]}),"\n",(0,i.jsxs)(e.p,{children:["For example, if you add the interactable, ",(0,i.jsx)(e.a,{href:"/narrative-documentation/pro/interaction/interactables/default-interactables#item-pickup",children:"Interactable_ItemPickup"})," that actor will now allow you to pick up an item."]}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"Interaction"})," component is the driver that checks for all ",(0,i.jsx)(e.strong,{children:"Interactables"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"activate--deactivate",children:"Activate / Deactivate"}),"\n",(0,i.jsxs)(e.p,{children:["It is common to disable and enable an ",(0,i.jsx)(e.strong,{children:"interaction"})," component depending on your games state. For example a character during a cutscene will not want to interact with anything."]}),"\n",(0,i.jsx)(e.p,{children:"This can easily be toggled using Unreal's built in Activate and Deactivate events.."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"interaction_activate.png",src:n(93007).A+"",width:"499",height:"343"})}),"\n",(0,i.jsx)(e.h2,{id:"changing-keys",children:"Changing keys"}),"\n",(0,i.jsx)(e.p,{children:"By default, Narrative Interaction is set up to use the Gamepad Face Button Left (Square / X) or the E key. You can easily change these to match your exact requirements."}),"\n",(0,i.jsxs)(e.p,{children:["Inside the ",(0,i.jsx)(e.strong,{children:"NarrativeCommonUI"})," plugin folder there is a ",(0,i.jsx)(e.strong,{children:"CommonUIInputAction"})," asset called ",(0,i.jsx)(e.strong,{children:"DT_NarrativeInputActions"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"narrative-interaction-component-changingkeys.jpg",src:n(20638).A+"",width:"171",height:"238"})}),"\n",(0,i.jsx)(e.p,{children:"Open this up and find the name of the key you wish to change. In this case, the Interact row name is going to handle the interact option. Select it and you can set the keyboard and gamepad input types."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"narrative-interaction-component-changingkeys-datatable.jpg",src:n(70513).A+"",width:"1144",height:"697"})}),"\n",(0,i.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"RemainingInteractTime"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"The amount of time remaining before interaction completes on the current interactable. Stored per interactor."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"InteractionCheckFrequency"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"How often, in seconds, to check for an interactable object. Set to zero to check every tick."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"InteractionCheckDistance"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"The maximum distance for tracing when checking if the player is looking at an interactable object."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"InteractionCheckSphereRadius"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"If greater than zero, a sphere trace will be used instead of a line trace for interaction checks."})]})]})]})]})}function h(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},93007:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/interaction_activate-509736660c6eef0c450ff29a2a54a25a.png"},70513:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/narrative-interaction-component-changingkeys-datatable-6b8cc133c095305ab3204b35afa31876.jpg"},20638:(t,e,n)=>{n.d(e,{A:()=>i});const i="data:image/jpeg;base64,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"},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>c});var i=n(96540);const r={},a=i.createContext(r);function o(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);