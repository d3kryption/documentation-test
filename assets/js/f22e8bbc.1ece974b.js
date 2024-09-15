"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[2875],{12250:(e,i,t)=>{t.d(i,{Ay:()=>d,RM:()=>s});var n=t(74848),r=t(28453);const s=[];function a(e){const i={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"If you already have an existing HUD, add the below widgets to that. It's much better for performance than having multiple HUD's rendering."})})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},3092:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=t(74848),r=t(28453),s=t(12250);const a={sidebar_label:"UI",sidebar_position:3},d="UI",o={id:"navigator/installation/ui",title:"UI",description:"Narrative Navigator comes with several UI widgets to handle displaying the navigation info to the player. It can be added to your existing UI to keep it nice and clean.",source:"@site/docs/navigator/installation/ui.md",sourceDirName:"navigator/installation",slug:"/navigator/installation/ui",permalink:"/narrative-documentation/navigator/installation/ui",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"UI",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Player Controller",permalink:"/narrative-documentation/navigator/installation/player-controller"},next:{title:"Navigator Component",permalink:"/narrative-documentation/navigator/navigator-component"}},l={},c=[{value:"Creating your HUD",id:"creating-your-hud",level:2},...s.RM,{value:"Navigator Widgets",id:"navigator-widgets",level:3},{value:"Compass",id:"compass",level:4},{value:"Minimap",id:"minimap",level:4},{value:"World map",id:"world-map",level:4},{value:"Screen Space markers",id:"screen-space-markers",level:4},{value:"HUD display",id:"hud-display",level:3}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"ui",children:"UI"})}),"\n",(0,n.jsx)(i.p,{children:"Narrative Navigator comes with several UI widgets to handle displaying the navigation info to the player. It can be added to your existing UI to keep it nice and clean."}),"\n",(0,n.jsx)(i.h2,{id:"creating-your-hud",children:"Creating your HUD"}),"\n",(0,n.jsxs)(i.p,{children:["To set up a simple HUD, open your ",(0,n.jsx)(i.strong,{children:"Content Drawer"}),", right click -> ",(0,n.jsx)(i.strong,{children:"user interface"})," -> ",(0,n.jsx)(i.strong,{children:"Widget Blueprint"})," and name this ",(0,n.jsx)(i.code,{children:"WBP_HUD"}),"."]}),"\n",(0,n.jsx)(s.Ay,{}),"\n",(0,n.jsxs)(i.p,{children:["Open the HUD and add the ",(0,n.jsx)(i.a,{href:"./ui#navigator-widgets",children:"widgets"})," you require."]}),"\n",(0,n.jsx)(i.h3,{id:"navigator-widgets",children:"Navigator Widgets"}),"\n",(0,n.jsx)(i.p,{children:"Navigator comes with a series of widgets that you can use to customise your experience. These will be covered in more detail later in the docs."}),"\n",(0,n.jsx)(i.h4,{id:"compass",children:"Compass"}),"\n",(0,n.jsx)(i.p,{children:"This is the compass that sits normally at the top or bottom of the screen. Used as a replacement for a map by showing you what's in the direction you are facing."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"compass.webp",src:t(6901).A+"",width:"721",height:"135"})}),"\n",(0,n.jsxs)(i.p,{children:["Add the widget ",(0,n.jsx)(i.strong,{children:"WBP_Navigator_Compass"}),". Some good default details are:"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Value"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Anchors"}),(0,n.jsx)(i.td,{children:"0.5, 0, 0.5, 0"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Position X"}),(0,n.jsx)(i.td,{children:"0"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Position Y"}),(0,n.jsx)(i.td,{children:"0"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Size X"}),(0,n.jsx)(i.td,{children:"600"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Size Y"}),(0,n.jsx)(i.td,{children:"60"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Alignment"}),(0,n.jsx)(i.td,{children:"0.5, 0"})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"minimap",children:"Minimap"}),"\n",(0,n.jsx)(i.p,{children:"This is the minimap that sits in the corner and gives the player a map surrounding their location."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"minimap.webp",src:t(66334).A+"",width:"453",height:"397"})}),"\n",(0,n.jsxs)(i.p,{children:["Add the widget ",(0,n.jsx)(i.strong,{children:"WBP_Navigator_Map_Minimap"}),". Some good default details are:"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Value"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Anchors"}),(0,n.jsx)(i.td,{children:"1, 1, 1, 1"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Position X"}),(0,n.jsx)(i.td,{children:"0"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Position Y"}),(0,n.jsx)(i.td,{children:"0"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Size X"}),(0,n.jsx)(i.td,{children:"250"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Size Y"}),(0,n.jsx)(i.td,{children:"250"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Alignment"}),(0,n.jsx)(i.td,{children:"1, 1"})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"world-map",children:"World map"}),"\n",(0,n.jsx)(i.p,{children:"This is the world map widget that gives players access to view the entire map. It is not commonly added to the HUD but instead using the OpenMenu option via a key press instead."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"introduction.webp",src:t(6375).A+"",width:"2555",height:"1440"})}),"\n",(0,n.jsx)(i.p,{children:"You do not need to add this as a widget. We will open this via an event later."}),"\n",(0,n.jsx)(i.h4,{id:"screen-space-markers",children:"Screen Space markers"}),"\n",(0,n.jsx)(i.p,{children:"Screen space markers are the visible markers on screen in the player's viewport. They show in the 3d world."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"screen-space-markers.webp",src:t(31366).A+"",width:"502",height:"443"})}),"\n",(0,n.jsxs)(i.p,{children:["Add the widget ",(0,n.jsx)(i.strong,{children:"WBP_Navigator_ScreenSpaceMarkers"}),". This needs to be set to full screen and lowest priority order (put it at the top of your Hierarchy list)."]}),"\n",(0,n.jsx)(i.h3,{id:"hud-display",children:"HUD display"}),"\n",(0,n.jsxs)(i.p,{children:["Finally, go back into your ",(0,n.jsx)(i.a,{href:"/narrative-documentation/navigator/installation/player-controller",children:"Player Controller"}),", and on begin play, create the widget, promote it to a variable then add it to the viewport."]}),"\n",(0,n.jsx)("iframe",{src:"https://blueprintue.com/render/zpfvq3f1/",width:"100%",height:"400",scrolling:"no",allowfullscreen:!0})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},6901:(e,i,t)=>{t.d(i,{A:()=>n});const n="data:image/webp;base64,UklGRhQHAABXRUJQVlA4IAgHAAAQPQCdASrRAocAPm02lkkkIqKhIJVaKIANiWlu3sqOTSOJ2qLwhdsn92cMgyZB3KwWgEuB+YHcnfUGOFr0THySJxNyAeMATcAs/mB3Kx1DY3HcCVIrxpSqGMJU1GcusKF/mqJKAKgUd0BsFAJQiInijfDWCFgM99hOaIf9IhHVx/0tIi8lBsD9+AGX/xrAkXvYmu4AvvlAWRplfYYfje5G00L97d+WodHArm1aL142ftcBhUEjxS5ZvngUzDg11GFGPP4P/NnL5rw5pMf0FxEP0D8DdO2cg2SYKJTxb5tzeUIOaZadBFT8C0wwMhJa+QHlnV9bgMlEUyd3QrNjf7Ok11bN/DVuiZCyBEs38gUStH6d+OaQIsmOsJpHq377Po0fMJdE7laa6E6nbThr/evgE7Q9hcHjgFtoywiiFxj4ro+zFc5rLYpinyZbTHBA9cgPypGwuqrbS2B68BJhW6Opf78IZZ4BZ/MEHcsHze3KwW7ZrFf1dRgrORkBlaCZCOUOFP3RESsioDysUyGVE30LKV+YHhj9gsdIR59fNM4jmp5A1M8gk7fx1Pmo5qGzQeT5USRN8uoTu6fuUPxgF7KNxQK7wU2fZMWCmhmFMMqRXjlKBOhsfBli/TxLA/MDuVgs/1m1cQTLhuBvgeF4O0zOcAD++tJb3TMRzuOwk38yHGydMy96IoJV6eMq8LTPaq1f10Lw3OrH3R3k2fNSsDyiYmrfEicRha7NJw3qzT5eiIno8IIAC4Eu5DBMfCJdsDv0nHMI46owSmO8RjKwblUwj49DxhFqOBYiKYbE3bbP0dW/6WmbIaGqcLXNnZod+curoO9zPlkTekeLIZCwUABHwXAiW6z4aYfv4iiuLD4KfB0VIaH3KfF5ULkGcg8jIWmrhGmB7Y9eTwnbrHp9SvWuEej2aNifjldzXAg7YX8wNCj72T18TTEcO9VfrCelSt+UCKwMEG7IC+EiZ30e/cTdKkP7WkLvzLAndp60Z8+7foL77DKuXD18vhf0rFMxO9x/IXHYNRFAArIQsU+TimAH17SyP5mSgJS7WNTpWmWit1qarDzQ5LMvq6NSvPHC2/q+28nJP2MJbDtuWWxWYD4NFYcXWzUl6RTgm+khOlwxJh9Wkl5ddHptGeC5k1d5VjzsxAQKS/y5dMPsEiwtvCy5uKy8TTPx/Eitsfr5kFHydjN0ROGSoqltQVDrX8agncODA+VTKZG+2N7bHn1Zm+V4pQ0QDjy98sdjmBhQw2Yi+pSGTWvSdfquZii3X7g2qbKTflQG6dxB46qhAfBE6Kha28ed24uXvxXCY7Tn1j7GPT90vUZQxAlDGLL3GhZ5GplVwrWdQ8AUuyi+j9/e05lAgE/c5M2z92z0292x8UTkEKLZQlsKSwHqUK+In1k3f6c0QNdoWDdZfruMKVuTwQGr7SsTj9YsqY6x/v6hv3n0CTXi5Fqb90bYCL2OM1vjU0uwXSF5odRjpf4CedaIWwOyV8PUEtcCFzntqnKrNNWYoEgY1wTduRHxRVC5UQzFckpqjtReA3kXlYpLDisvIG61+3qWOW2aLdS+CdmhAXz42YMYPIPGYjFDUbg4vMZWSE65kV/4qNzR7Rz6ZM+nP5Fcq6aCGkCbc2GGQWm1eYwFoXGFuCct58snOJQBTYTNQi0ndkcOv5B86biQFFiL4cGHqGiGenSdiW6bV4iOIAqpjG9F8Ki8aX8bLrdqExIkEQnC8XTn8wDCrHbSuH2sy5kPavafHwEW8aKHx/wVzEy9bWeyl6XWcmEdTU3uMwmv2+u1ETKwwNObckkeei5EDaMgpdYoMYA3AfYqy2CnfugXxOo9MQLBLVMzxuOvAu6hrwkfeHvjM2NYvnrorc9iyf6xJ0vvUMD+BVIHNVdMrBAX22tmHhajyuy+BVUg0yF5fi+z3j6DPHeii7jErVrFouOpyEKRfIv5d3ZMzhFvRB+xmTZkMwLOf20uDqOgg3lpcEGW9ecUIKHWlRKc4hKNSh0lHXJvYRPAnqfVewlCWQX+/2QWN8z4rrB4RIlENinXOgq5ici5CMdXX7OZ7s6ebFrdcFDtiCFPWW8nufdrw5xwlykzY3BkH5zebm8ZLrl27OXEq6PB6IM9lkWC7PkgJ2OQA/z7JeFxkuSZe+9DkSyJWJDZiOruM/FM3dn3xer6WnOBmuyQb+4pQl5owpswjw/TXthA/GDqw96WtEL8M24r+fJ3AdsFp9P9gy3eaBvO4QkEvmyJJabTmQZacAucyWqSy6DHVmOLhMPdYp+7dwpU7EIiAlIB5T+OcVA66R+N2Pvx08hwOpKs7dU0WnrjopJ8SjsFVpmlVpAocadKjHoKloBwMBiSPIheo3tXipEigtv4j/oDCOdIPz6mgcY72zR00PUeaGXUoAA="},6375:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/introduction-a4549a25c29bcaf562d660ad1a0a4785.webp"},66334:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/minimap-27b21ec0af2fac33a718a4ce829d538f.webp"},31366:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/screen-space-markers-7875ac3bf4c43b1b0eb19bdc6dea3eb5.webp"},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>d});var n=t(96540);const r={},s=n.createContext(r);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);