"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[8406],{81427:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=i(74848),o=i(28453);const r={sidebar_label:"Point of interest"},a="Point of interest",s={id:"pro/navigator/points-of-interest",title:"Point of interest",description:"The point of interest (POI) or fast travel locations are a common feature in open world games. Allowing players to quickly teleport (or fast travel) around large landscapes after discovering areas.",source:"@site/docs/pro/navigator/points-of-interest.md",sourceDirName:"pro/navigator",slug:"/pro/navigator/points-of-interest",permalink:"/narrative-documentation/pro/navigator/points-of-interest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Point of interest"},sidebar:"tutorialSidebar",previous:{title:"World map",permalink:"/narrative-documentation/pro/navigator/navigation-widgets/world-map"},next:{title:"NPCs",permalink:"/narrative-documentation/pro/npcs/"}},l={},d=[{value:"Adding POI",id:"adding-poi",level:2},{value:"Fast travel location",id:"fast-travel-location",level:2},{value:"Undiscovered POI",id:"undiscovered-poi",level:2},{value:"Undiscovered:",id:"undiscovered",level:3},{value:"Discovered:",id:"discovered",level:3}];function p(e){const t={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"point-of-interest",children:"Point of interest"})}),"\n",(0,n.jsx)(t.p,{children:"The point of interest (POI) or fast travel locations are a common feature in open world games. Allowing players to quickly teleport (or fast travel) around large landscapes after discovering areas."}),"\n",(0,n.jsx)(t.h2,{id:"adding-poi",children:"Adding POI"}),"\n",(0,n.jsx)(t.p,{children:"To add a POI, simply drag in the BP_PointOfInterst blueprint into your map placing it where you require."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"point-of-interest.webp",src:i(93128).A+"",width:"756",height:"324"})}),"\n",(0,n.jsx)(t.p,{children:"After placing the POI, you can set up the options required. The POI Display Name is the name of the fast travel marker on the world map."}),"\n",(0,n.jsx)(t.p,{children:"The POI Tags are a type of GamePlay tags and are used for saving, loading and checking if the player has access to the current POI. Make sure to name them unique."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"poi-tags.webp",src:i(43273).A+"",width:"478",height:"123"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"poi-map.webp",src:i(63310).A+"",width:"227",height:"129"})}),"\n",(0,n.jsx)(t.h2,{id:"fast-travel-location",children:"Fast travel location"}),"\n",(0,n.jsx)(t.p,{children:"The POI controls multiple predefined points for your game. It contains the POI marker which renders on the UI widgets and the fast travel location actor. This actor allows you to specifically define a location you wish the player to arrive at."}),"\n",(0,n.jsx)(t.p,{children:"It is common that you will have the world marker at one location but the player fast travels close by to another location."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"poi-fasttravel.webp",src:i(36850).A+"",width:"189",height:"85"})}),"\n",(0,n.jsx)(t.h2,{id:"undiscovered-poi",children:"Undiscovered POI"}),"\n",(0,n.jsx)(t.p,{children:"If a POI is undiscovered, Navigator will color the marker differently to indicate to the player if they have previously discovered it or not."}),"\n",(0,n.jsx)(t.h3,{id:"undiscovered",children:"Undiscovered:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"poi-undiscovered-world.webp",src:i(2204).A+"",width:"209",height:"147"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"po-undiscovered-map.webp",src:i(5611).A+"",width:"63",height:"46"})}),"\n",(0,n.jsx)(t.h3,{id:"discovered",children:"Discovered:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"poi-discoveredmap.webp",src:i(50388).A+"",width:"78",height:"67"})}),"\n",(0,n.jsx)(t.p,{children:"Upon discovering a POI, you can now select it from the world map to be teleported to the fast travel location."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"poi-discovered-world.webp",src:i(37827).A+"",width:"204",height:"114"})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5611:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAABwBQCdASo/AC4APm02lEgkIyIhKBVY4IANiWkAAEn0upvNtP4nwV9tYcoRazJ7CVUgiv0AAP7v3dZTMM2vhE74uJE8fIyk1ak2jXrW+tavmHgsvQbiUb2+MtaqKMLLmQNfVrhnTDOk3KXAgAA="},37827:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/webp;base64,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"},50388:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/webp;base64,UklGRmgBAABXRUJQVlA4IFwBAADQDACdASpOAEMAPm0wlUckIqIhJ7qqiIANiWcA1jGMs3WyqSL3RKXiJLm3KwXFZcwkzWyeLtyaopwlDkDw/VIqmO0ItE+eiDtloabOfELDCNVa30vMIq9qXrnTDICJy3xKiifp1U4VElI4gJDZkpAA/vCdz+975NUJoN3YSuS0WPCo8jX9ZnqJlTn/ISVy5S+qgXmGQzjG39aFa1BR2FCmEsD8qyqT3Q3Vw6b7CxwC6HEGqp3JavtTKAWtJRNs52XJDdOLBJ31+HmGtJjNsaW5kFTYLZHdJvHq4XpGZuSdtoZhnxUXu/XZjM1G7dvmuH+DhoxlLbPuSI44xTEigkAy2NrYvtypg9XgeewOblC0hI1rTqOBXgsfTCHiUF4AF+g5faINA8M0HoP6EnIZW7j2xfbSbOOESBaJ8FCX0Ypx1QEC1IPAp+QKTK1YQjvSYSenR0wsFdEFNp23AAA="},36850:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/webp;base64,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"},63310:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/webp;base64,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"},43273:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/webp;base64,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"},2204:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/webp;base64,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"},93128:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/point-of-interest-a11278b8e7098b5f27a6557bdcc0c76d.webp"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(96540);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);