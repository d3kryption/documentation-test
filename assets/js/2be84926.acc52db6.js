"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[6161],{3226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(74848),a=n(28453);const r={sidebar_label:"Interactable",sidebar_position:0},c="Interactable",o={id:"pro/interaction/interactables/index",title:"Interactable",description:"Interactables are components that you add to actors to give them interactable functionality.",source:"@site/docs/pro/interaction/interactables/index.md",sourceDirName:"pro/interaction/interactables",slug:"/pro/interaction/interactables/",permalink:"/pro/interaction/interactables/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Interactable",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Interaction",permalink:"/pro/interaction/"},next:{title:"Functions",permalink:"/pro/interaction/interactables/functions"}},l={},s=[{value:"Creation",id:"creation",level:2},{value:"Activate / Deactivate",id:"activate--deactivate",level:2},{value:"Chaining interactable components",id:"chaining-interactable-components",level:2},{value:"Multiplayer",id:"multiplayer",level:2},{value:"Focused Overlay Material",id:"focused-overlay-material",level:2},{value:"Interaction Properties",id:"interaction-properties",level:2}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"interactable",children:"Interactable"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Interactables"})," are components that you add to actors to give them interactable functionality."]}),"\n",(0,i.jsx)(t.p,{children:"For example, if you add the interactable 'Interactable_ItemPickup' that actor will now allow you to pick up an item."}),"\n",(0,i.jsx)(t.h2,{id:"creation",children:"Creation"}),"\n",(0,i.jsxs)(t.p,{children:["To start creating a new interaction right click in the ",(0,i.jsx)(t.strong,{children:"Content Drawer"})," -> ",(0,i.jsx)(t.strong,{children:"Blueprint Class"})," -> ",(0,i.jsx)(t.strong,{children:"Narrative Interactable"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["There is an example of a custom interaction for a ",(0,i.jsx)(t.a,{href:"/pro/interaction/door-example",children:"Door here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"activate--deactivate",children:"Activate / Deactivate"}),"\n",(0,i.jsxs)(t.p,{children:["It is common to disable and enable an ",(0,i.jsx)(t.strong,{children:"interactable"})," item depending on your games state. For example a character holding an item might not be able to pick things up, or they might not have unlocked the right ability just yet."]}),"\n",(0,i.jsx)(t.p,{children:"This can easily be toggled using Unreal's built in Activate and Deactivate events."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"interactable_Activatedeactivate.webp",src:n(81940).A+"",width:"556",height:"355"})}),"\n",(0,i.jsx)(t.h2,{id:"chaining-interactable-components",children:"Chaining interactable components"}),"\n",(0,i.jsx)(t.p,{children:"You can also link multiple Interaction components together to cause a chain reaction."}),"\n",(0,i.jsxs)(t.p,{children:["Either call ",(0,i.jsx)(t.a,{href:"/pro/interaction/#activate--deactivate",children:"activate / deactivate"})," on the ",(0,i.jsx)(t.strong,{children:"interactable"}),", or adjust the properties of the ",(0,i.jsx)(t.strong,{children:"interactable"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"multiplayer",children:"Multiplayer"}),"\n",(0,i.jsx)(t.p,{children:"Interactables are fully replicated right out of the box. Make sure any variables you use are replicated to make it work."}),"\n",(0,i.jsxs)(t.p,{children:["There is an example in the ",(0,i.jsx)(t.a,{href:"/pro/interaction/door-example#multiplayer",children:"door example"})," where we replicate the door."]}),"\n",(0,i.jsx)(t.h2,{id:"focused-overlay-material",children:"Focused Overlay Material"}),"\n",(0,i.jsx)(t.p,{children:"By default, when an item is interactable, Narrative will apply a material to indicate its intractability. This however can be set to anything you require or cleared out to simply be ignored."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["It is good ",(0,i.jsx)(t.a,{href:"https://www.accessibilitychecker.org/blog/video-game-accessibility-gaming-for-all/",children:"accessibility practice"})," to have an option to highlight interaction items for people who require further assistance."]})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"It has been discovered that in Unreal 5.0, 5.1 and 5.2 that overlay materials do not work on meshes that have Nanite enabled. You can get around this by creating a decal instead of an overlay material but this works in Unreal 5.3 onwards."})}),"\n",(0,i.jsx)(t.h2,{id:"interaction-properties",children:"Interaction Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"InteractionTime"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"The time the player must hold the interact key to interact with this object."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"InteractionDistance"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"The max distance the player can be away from this actor to interact."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"InteractableNameText"}),(0,i.jsx)(t.td,{children:"FText"}),(0,i.jsx)(t.td,{children:"The name that will be shown when the player looks at the interactable."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"InteractableActionText"}),(0,i.jsx)(t.td,{children:"FText"}),(0,i.jsx)(t.td,{children:'The verb that describes how the interaction works (e.g., "Sit", "Eat", "Light").'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FocusedOverlayMaterial"}),(0,i.jsx)(t.td,{children:"UMaterialInterface"}),(0,i.jsx)(t.td,{children:"A material to draw over any mesh components when this interactable is focused."})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},81940:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/webp;base64,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"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var i=n(96540);const a={},r=i.createContext(a);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);