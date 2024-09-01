"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[2545],{4957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(4848),a=n(8453);const r={sidebar_label:"Installation"},i="Installation",s={id:"common-ui/installation/index",title:"Installation",description:"To get started, you need to download the Narrative Common UI from the Epic Marketplace and you can install it to the engine (default) or move it into your project's Plugins folder (you may have to create this folder).",source:"@site/docs/common-ui/installation/index.md",sourceDirName:"common-ui/installation",slug:"/common-ui/installation/",permalink:"/documentation-test/common-ui/installation/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Common UI",permalink:"/documentation-test/common-ui/"},next:{title:"Adding Menus to the Screen",permalink:"/documentation-test/common-ui/installation/adding-menus-to-screen"}},l={},d=[];function c(e){const t={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"installation",children:"Installation"})}),"\n",(0,o.jsx)(t.p,{children:"To get started, you need to download the Narrative Common UI from the Epic Marketplace and you can install it to the engine (default) or move it into your project's Plugins folder (you may have to create this folder)."}),"\n",(0,o.jsx)(t.p,{children:"Make sure to enable the Narrative Common UI plugin by going to edit -> Plugins, and checking the box next to Narrative Common UI. (you may have to restart Unreal)"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"InstalledPlugins",src:n(9355).A+"",width:"1585",height:"303"})}),"\n",(0,o.jsx)(t.p,{children:"Then close Unreal and open your projects folder and navigate to the config folder. You should see your games' DefaultGame.ini file."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"DefaultGameIni.jpg",src:n(8952).A+"",width:"1397",height:"671"})}),"\n",(0,o.jsx)(t.p,{children:"In your DefaultGame.ini, add the following sections and save."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ini",children:"[/Script/CommonInput.CommonInputSettings]\r\nInputData=/NarrativeCommonUI/ControllerData/BP_NarrativeInputData.BP_NarrativeInputData_C\r\n\r\n[CommonInputPlatformSettings_Windows CommonInputPlatformSettings]\r\nDefaultInputType=MouseAndKeyboard\r\nbSupportsMouseAndKeyboard=True\r\nbSupportsTouch=False\r\nbSupportsGamepad=True\r\nDefaultGamepadName=Generic\r\nbCanChangeGamepadType=True\r\n+ControllerData=/NarrativeCommonUI/ControllerData/ControllerData_PC_Keyboard.ControllerData_PC_Keyboard_C\r\n+ControllerData=/NarrativeCommonUI/ControllerData/ControllerData_PC_Gamepad_Xbox.ControllerData_PC_Gamepad_Xbox_C\n"})}),"\n",(0,o.jsx)(t.p,{children:"Your DefaultGame.ini should now look something like this."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"ViewportChange.jpg",src:n(5263).A+"",width:"1582",height:"277"})}),"\n",(0,o.jsx)(t.p,{children:"Start your project and go to edit then Project Settings and search for a viewport. Find the Game Viewport Client Class set it to be \u201cCommonUI viewport client\u201d."})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8952:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/DefaultGameIni-b51b0256b12d2a404688a851b0f35771.jpg"},9355:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/InstalledPlugins-746bf27b4294d28af044e6f7ada6c079.jpg"},5263:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ViewportChange-db9b72b1e45e330188f930f2d16e4905.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(6540);const a={},r=o.createContext(a);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);