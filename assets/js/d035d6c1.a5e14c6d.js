"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[641],{28791:(t,o,e)=>{e.r(o),e.d(o,{assets:()=>r,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>A,toc:()=>s});var n=e(74848),i=e(28453);const a={sidebar_label:"Chaining interactable components",sidebar_position:1},c="Chaining interactable components",A={id:"interaction/custom-interact-functionality/chaining-interactable-components/index",title:"Chaining interactable components",description:"You can also link multiple Interaction components together to cause a chain reaction. In this example, we will deactivate the door interactable component by default, then have a new blueprint class for a button that will unlock the door.",source:"@site/docs/interaction/custom-interact-functionality/chaining-interactable-components/index.md",sourceDirName:"interaction/custom-interact-functionality/chaining-interactable-components",slug:"/interaction/custom-interact-functionality/chaining-interactable-components/",permalink:"/documentation-test/interaction/custom-interact-functionality/chaining-interactable-components/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Chaining interactable components",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Activate / Deactivate",permalink:"/documentation-test/interaction/custom-interact-functionality/activate-deactivate/"},next:{title:"Door example continued",permalink:"/documentation-test/interaction/custom-interact-functionality/door-example-continued/"}},r={},s=[];function l(t){const o={h1:"h1",header:"header",img:"img",p:"p",...(0,i.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"chaining-interactable-components",children:"Chaining interactable components"})}),"\n",(0,n.jsx)(o.p,{children:"You can also link multiple Interaction components together to cause a chain reaction. In this example, we will deactivate the door interactable component by default, then have a new blueprint class for a button that will unlock the door."}),"\n",(0,n.jsx)(o.p,{children:"Start by deactivating the door interactable component then create your new button blueprint class just like you did for the Door example continued."}),"\n",(0,n.jsx)(o.p,{children:"Next, create a variable of type BP_Door to link to the correct door."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"chaining-interactable-components-variable.jpg",src:e(60557).A+"",width:"594",height:"64"})}),"\n",(0,n.jsx)(o.p,{children:"Then add a Narrative interactable component. Add the event On Interacted, get the door and then the doors interactable and set the unlocked property to true."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"chaining-interactable-components-on-interacted-event.jpg",src:e(13407).A+"",width:"1007",height:"306"})}),"\n",(0,n.jsx)(o.p,{children:"Now when you run up to the door, it will be locked by default."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"chaining-interactable-components-door.jpg",src:e(10357).A+"",width:"449",height:"600"})}),"\n",(0,n.jsx)(o.p,{children:"But when you interact with the button."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"chaining-interactable-components-unlock.jpg",src:e(53541).A+"",width:"481",height:"348"})}),"\n",(0,n.jsx)(o.p,{children:"The door will now be unlocked."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"chaining-interactable-components-unlocked.jpg",src:e(22742).A+"",width:"381",height:"622"})})]})}function g(t={}){const{wrapper:o}={...(0,i.R)(),...t.components};return o?(0,n.jsx)(o,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},10357:(t,o,e)=>{e.d(o,{A:()=>n});const n=e.p+"assets/images/chaining-interactable-components-door-66e1f8ac635eca3c22b14219c0c25ab4.jpg"},13407:(t,o,e)=>{e.d(o,{A:()=>n});const n=e.p+"assets/images/chaining-interactable-components-on-interacted-event-fb75ec3e70da9dfe2cc517bcc3456b76.jpg"},53541:(t,o,e)=>{e.d(o,{A:()=>n});const n=e.p+"assets/images/chaining-interactable-components-unlock-59027f30b2ee70d809b526ab65874572.jpg"},22742:(t,o,e)=>{e.d(o,{A:()=>n});const n=e.p+"assets/images/chaining-interactable-components-unlocked-fe8b7faaeac9e1917012b91e9638a333.jpg"},60557:(t,o,e)=>{e.d(o,{A:()=>n});const n="data:image/jpeg;base64,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"},28453:(t,o,e)=>{e.d(o,{R:()=>c,x:()=>A});var n=e(96540);const i={},a=n.createContext(i);function c(t){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(o):{...o,...t}}),[o,t])}function A(t){let o;return o=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),n.createElement(a.Provider,{value:o},t.children)}}}]);