"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[3414],{83878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(74848),i=n(28453);const r={sidebar_label:"Interactable component",sidebar_position:2},c="Interactable component",o={id:"interaction/interactables/index",title:"Interactable component",description:"Interactables are components that you add to actors to give them interactable functionality.",source:"@site/docs/interaction/interactables/index.md",sourceDirName:"interaction/interactables",slug:"/interaction/interactables/",permalink:"/narrative-documentation/interaction/interactables/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Interactable component",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Interaction component",permalink:"/narrative-documentation/interaction/interaction-component"},next:{title:"Functions",permalink:"/narrative-documentation/interaction/interactables/functions"}},s={},l=[{value:"Creation",id:"creation",level:2},{value:"Activate / Deactivate",id:"activate--deactivate",level:2},{value:"Chaining interactable components",id:"chaining-interactable-components",level:2},{value:"Multiplayer",id:"multiplayer",level:2},{value:"Focused Overlay Material",id:"focused-overlay-material",level:2},{value:"Interaction Properties",id:"interaction-properties",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"interactable-component",children:"Interactable component"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Interactables"})," are components that you add to actors to give them interactable functionality."]}),"\n",(0,a.jsx)(t.p,{children:"For example, if you add the interactable 'Interactable_ItemPickup' that actor will now allow you to pick up an item."}),"\n",(0,a.jsx)(t.h2,{id:"creation",children:"Creation"}),"\n",(0,a.jsxs)(t.p,{children:["To start creating a new interaction right click in the ",(0,a.jsx)(t.strong,{children:"Content Drawer"})," -> ",(0,a.jsx)(t.strong,{children:"Blueprint Class"})," -> ",(0,a.jsx)(t.strong,{children:"Narrative Interactable"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["There is an example of a custom interaction for a ",(0,a.jsx)(t.a,{href:"/narrative-documentation/interaction/door-example",children:"Door here"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"activate--deactivate",children:"Activate / Deactivate"}),"\n",(0,a.jsxs)(t.p,{children:["It is common to disable and enable an ",(0,a.jsx)(t.strong,{children:"interactable"})," item depending on your games state. For example a character holding an item might not be able to pick things up, or they might not have unlocked the right ability just yet."]}),"\n",(0,a.jsx)(t.p,{children:"This can easily be toggled using Unreal's built in Activate and Deactivate events."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"interactable_Activatedeactivate.png",src:n(96471).A+"",width:"556",height:"355"})}),"\n",(0,a.jsx)(t.h2,{id:"chaining-interactable-components",children:"Chaining interactable components"}),"\n",(0,a.jsx)(t.p,{children:"You can also link multiple Interaction components together to cause a chain reaction."}),"\n",(0,a.jsxs)(t.p,{children:["Either call ",(0,a.jsx)(t.a,{href:"/narrative-documentation/interaction/#activate--deactivate",children:"activate / deactivate"})," on the ",(0,a.jsx)(t.strong,{children:"interactable"}),", or adjust the properties of the ",(0,a.jsx)(t.strong,{children:"interactable"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"multiplayer",children:"Multiplayer"}),"\n",(0,a.jsx)(t.p,{children:"Interactables are fully replicated right out of the box. Make sure any variables you use are replicated to make it work."}),"\n",(0,a.jsxs)(t.p,{children:["There is an example in the ",(0,a.jsx)(t.a,{href:"/narrative-documentation/interaction/door-example#multiplayer",children:"door example"})," where we replicate the door."]}),"\n",(0,a.jsx)(t.h2,{id:"focused-overlay-material",children:"Focused Overlay Material"}),"\n",(0,a.jsx)(t.p,{children:"By default, when an item is interactable, Narrative will apply a material to indicate its intractability. This however can be set to anything you require or cleared out to simply be ignored."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["It is good ",(0,a.jsx)(t.a,{href:"https://www.accessibilitychecker.org/blog/video-game-accessibility-gaming-for-all/",children:"accessibility practice"})," to have an option to highlight interaction items for people who require further assistance."]})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"It has been discovered that in Unreal 5.0, 5.1 and 5.2 that overlay materials do not work on meshes that have Nanite enabled. You can get around this by creating a decal instead of an overlay material but this works in Unreal 5.3 onwards."})}),"\n",(0,a.jsx)(t.h2,{id:"interaction-properties",children:"Interaction Properties"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"InteractionTime"}),(0,a.jsx)(t.td,{children:"float"}),(0,a.jsx)(t.td,{children:"The time the player must hold the interact key to interact with this object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"InteractionDistance"}),(0,a.jsx)(t.td,{children:"float"}),(0,a.jsx)(t.td,{children:"The max distance the player can be away from this actor to interact."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"InteractableNameText"}),(0,a.jsx)(t.td,{children:"FText"}),(0,a.jsx)(t.td,{children:"The name that will be shown when the player looks at the interactable."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"InteractableActionText"}),(0,a.jsx)(t.td,{children:"FText"}),(0,a.jsx)(t.td,{children:'The verb that describes how the interaction works (e.g., "Sit", "Eat", "Light").'})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"FocusedOverlayMaterial"}),(0,a.jsx)(t.td,{children:"UMaterialInterface"}),(0,a.jsx)(t.td,{children:"A material to draw over any mesh components when this interactable is focused."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},96471:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/interactable_Activatedeactivate-e440a29cc0e9cb11ab320acaff2e31f0.png"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function c(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);