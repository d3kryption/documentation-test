"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[137],{8223:(A,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>K,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var e=t(4848),a=t(8453);const n={sidebar_label:"Player Controller",sidebar_position:1},r="Player Controller",i={id:"quests-and-dialogue/installation/player-controller",title:"Player Controller",description:"Before we can move on, we need to create a PlayerController. Simply right-click in your Content Drawer, select Blueprint Class and choose Player Controller. We will name this BP_PlayerController.",source:"@site/docs/quests-and-dialogue/installation/player-controller.md",sourceDirName:"quests-and-dialogue/installation",slug:"/quests-and-dialogue/installation/player-controller",permalink:"/documentation-test/quests-and-dialogue/installation/player-controller",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Player Controller",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Common UI",permalink:"/documentation-test/quests-and-dialogue/installation/common-ui"}},l={},c=[];function f(A){const o={h1:"h1",header:"header",img:"img",p:"p",...(0,a.R)(),...A.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.header,{children:(0,e.jsx)(o.h1,{id:"player-controller",children:"Player Controller"})}),"\n",(0,e.jsx)(o.p,{children:"Before we can move on, we need to create a PlayerController. Simply right-click in your Content Drawer, select Blueprint Class and choose Player Controller. We will name this BP_PlayerController."}),"\n",(0,e.jsx)(o.p,{children:(0,e.jsx)(o.img,{alt:"Pick your parent class",src:t(6468).A+"",width:"814",height:"555"})}),"\n",(0,e.jsx)(o.p,{children:"Inside the BP_PlayerController, add the Narrative component. If you can\u2019t find this, make sure the Narrative plugin is enabled above."}),"\n",(0,e.jsx)(o.p,{children:"Now open the BP_ThirdPersonGameMode and set the Player Controller class to your newly created BP_PlayerController."}),"\n",(0,e.jsx)(o.p,{children:(0,e.jsx)(o.img,{alt:"Third person game mode",src:t(4008).A+"",width:"1188",height:"704"})}),"\n",(0,e.jsx)(o.p,{children:"Now open your Player Controller and add the Narrative component to the components list."}),"\n",(0,e.jsx)(o.p,{children:(0,e.jsx)(o.img,{alt:"Components",src:t(8327).A+"",width:"352",height:"178"})})]})}function K(A={}){const{wrapper:o}={...(0,a.R)(),...A.components};return o?(0,e.jsx)(o,{...A,children:(0,e.jsx)(f,{...A})}):f(A)}},8327:(A,o,t)=>{t.d(o,{A:()=>e});const e="data:image/jpeg;base64,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I44UjXeRgthQOT39aYGbWdN/x8y/7w/kK0azpv8Aj5l/3h/IUANB25bGdoLfkK0dDmmtPCuuX9kzC/DwxNKv344WLbiD2yQoJ/xrOU4YHGfam2d3f6HeG7sJSoKlSdoZWU9VcHgj2NAGr4Purm6vrrT7iWSXTZ7WZrtXYlVCoWD89CGC4P8AjXLV00Pje+gfYljpsdo/FxbQWqxpcL0IYgZ7nHpWJqZsDqEraYJltGwyLNjcmRyuR1wcjPegB9rI0dsADJFuk4lQZycD5SPT/GphbQJua5CbmmZGC7sLjH3cd+e9Z0c0sWfLkdM9drEZoSaWPd5crru67WIzQBegtInhAdV3NG7hstuwM4OOgHHekMEJuUiEXAhEhAY5c7M4/OqazzKmxZZAn90McU3zH3h97bhjBzyMdKAL8JQR3D/Z9imAEoScH5x074qtdxokiGNdqvGr7c5xkVE00rsxaR2LDDEsTke9NZmbG5icDAyegoASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopyRvK2EUsfagC5ZsWgZT/AAsMfj/+qkuf4fxqaKMQxCPIJzliPWobn+H8aAJIQDCAenNSZb/npJ/32f8AGqin5RS0AWst/wA9JP8Avs/40Zb/AJ6Sf99n/GqtFAFrLf8APST/AL7P+NGW/wCekn/fZ/xqrRQBay3/AD0k/wC+z/jRlv8AnpJ/32f8aq0UAWst/wA9JP8Avs/40gAHSq1FAFqlBI6Ej6VUooAueY/99vzo8x/77fnVOigC55j/AN9vzo8x/wC+351TooAueY/99vzo8x/77fnVOigC55j/AN9vzo8x/wC+351TooAueY/99vzo8x/77fnVOigC55j/AN9vzo8x/wC+351TooAueY/99vzo8x/77fnVOigC55j/AN9vzo8x/wC+351TooAueY/99vzo8x/77fnVOigC55j/AN9vzo8x/wC+351TooAueY/99vzo8x/77fnVOigC55j/AN9vzo8x/wC+351TooAueY/99vzo8x/77fnVOigC55j/AN9vzo8x/wC+351TooAueY/99vzpC7HqxP1NVKKALVV7n+H8abTXPAFACr90VsaLpdleJLPqV6bO1QiNWVAzO5PYEjgDk+31rHX7orrdG8X22keFJtL/ALLS4uWn89JJG+QN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"},6468:(A,o,t)=>{t.d(o,{A:()=>e});const e=t.p+"assets/images/playercontroller-10a474452c2b995097baa9020e564d02.jpg"},4008:(A,o,t)=>{t.d(o,{A:()=>e});const e=t.p+"assets/images/thirdpersongamemode-cd60f1a82e78d0cf37dcbda79176a182.jpg"},8453:(A,o,t)=>{t.d(o,{R:()=>r,x:()=>i});var e=t(6540);const a={},n=e.createContext(a);function r(A){const o=e.useContext(n);return e.useMemo((function(){return"function"==typeof A?A(o):{...o,...A}}),[o,A])}function i(A){let o;return o=A.disableParentContext?"function"==typeof A.components?A.components(a):A.components||a:r(A.components),e.createElement(n.Provider,{value:o},A.children)}}}]);