"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[4356],{45393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=n(74848),a=n(28453);const s={sidebar_label:"World map"},i="World map",r={id:"pro/navigator/navigation-widgets/world-map",title:"World map",description:"This is the world map widget that gives players access to view the entire map. It is not commonly added to the HUD but instead using the OpenMenu option via a key press instead.",source:"@site/docs/pro/navigator/navigation-widgets/world-map.md",sourceDirName:"pro/navigator/navigation-widgets",slug:"/pro/navigator/navigation-widgets/world-map",permalink:"/narrative-documentation/pro/navigator/navigation-widgets/world-map",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"World map"},sidebar:"tutorialSidebar",previous:{title:"Screen Space markers",permalink:"/narrative-documentation/pro/navigator/navigation-widgets/screen-space-markers"},next:{title:"Point of interest",permalink:"/narrative-documentation/pro/navigator/points-of-interest"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Custom waypoints",id:"custom-waypoints",level:2},{value:"Waypoints on top of the world map",id:"waypoints-on-top-of-the-world-map",level:2},{value:"Zoom Distance",id:"zoom-distance",level:2}];function c(e){const t={h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"world-map",children:"World map"})}),"\n",(0,o.jsx)(t.p,{children:"This is the world map widget that gives players access to view the entire map. It is not commonly added to the HUD but instead using the OpenMenu option via a key press instead."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"introduction.png",src:n(91774).A+"",width:"2555",height:"1440"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["You just need to call ",(0,o.jsx)(t.strong,{children:"OpenMenu"})," from a key press, passing the ",(0,o.jsx)(t.strong,{children:"W_NarrativeMenu_WorldMap"})," option."]}),"\n",(0,o.jsx)("iframe",{src:"https://blueprintue.com/render/c42mnyp6/",width:"100%",height:"400",scrolling:"no",allowfullscreen:!0}),"\n",(0,o.jsx)(t.p,{children:"Now, pressing the key will spawn the world map on the screen."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"navigator-worldmap.png",src:n(3380).A+"",width:"1818",height:"1279"})}),"\n",(0,o.jsx)(t.h2,{id:"custom-waypoints",children:"Custom waypoints"}),"\n",(0,o.jsx)(t.p,{children:"The world map gives the player the ability to add custom waypoints allowing them to remember locations in game."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"waypoint-buttons.png",src:n(93667).A+"",width:"620",height:"85"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"waypoint-remove.png",src:n(38998).A+"",width:"232",height:"89"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"waypoint-world.png",src:n(41592).A+"",width:"279",height:"117"})}),"\n",(0,o.jsx)(t.h2,{id:"waypoints-on-top-of-the-world-map",children:"Waypoints on top of the world map"}),"\n",(0,o.jsx)(t.p,{children:"If your waypoints are on top of your map, you need to change the render order of the widgets in your HUD."}),"\n",(0,o.jsxs)(t.p,{children:["Make sure to move the ",(0,o.jsx)(t.strong,{children:"WBP_NarrativeHUD"})," to the bottom of the other widgets so the menus sit on top of the markers."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"waypoint-order.png",src:n(15900).A+"",width:"528",height:"138"})}),"\n",(0,o.jsx)(t.h2,{id:"zoom-distance",children:"Zoom Distance"}),"\n",(0,o.jsx)(t.p,{children:"The world map allows you to change how far in and out you can zoom."}),"\n",(0,o.jsxs)(t.p,{children:["To change the zoom distance, open the ",(0,o.jsx)(t.strong,{children:"WBP_Navigator_Map_World"})," widget and select the ",(0,o.jsx)(t.strong,{children:"WBP_Navigator_Map"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"worldmap-worldmapwidget.png",src:n(34089).A+"",width:"466",height:"251"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"worldmap-worldmapcomponent.png",src:n(41928).A+"",width:"530",height:"124"})}),"\n",(0,o.jsxs)(t.p,{children:["From here, you can adjust the ",(0,o.jsx)(t.strong,{children:"Min Zoom Amount"})," and ",(0,o.jsx)(t.strong,{children:"Max Zoom Amount"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Adjusting the ",(0,o.jsx)(t.strong,{children:"Min Zoom Amount"})," will change how much you can zoom out and changing the ",(0,o.jsx)(t.strong,{children:"max zoom amount"})," changes how far you can zoom into the map."]}),"\n",(0,o.jsx)(t.p,{children:"Note, unless you generate high quality map tiles, it is advised to not let the user zoom in too much otherwise it will start to look pixelated."})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},91774:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/introduction-9365babcb20094d421c97ad4d565c4f6.png"},3380:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/navigator-worldmap-0c2700a6019b6542249591c3e9cf0b6a.png"},93667:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/waypoint-buttons-e89f61e2e463b7af967b0944d4d84669.png"},15900:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/waypoint-order-86064d959eb25fe3655b96f51d2bbf47.png"},38998:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/waypoint-remove-1030ebe356dcc40b550fcab2b9befa27.png"},41592:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/waypoint-world-048b8f6bd42fb2c91749c71c6bb277b7.png"},41928:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/worldmap-worldmapcomponent-0d5b39bb39fca601894d7e8e958b10d2.png"},34089:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/worldmap-worldmapwidget-629d09799f1495a824e885d9eae3ee78.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(96540);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);