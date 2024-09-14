"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[1955],{62485:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>I,contentTitle:()=>E,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var d=e(74848),t=e(28453);const r={sidebar_label:"Audio"},E="Audio",a={id:"pro/dialogue/dialogue-nodes/audio",title:"Audio",description:"Each dialogue node contains a Dialogue Sound variable that you can attach your sounds to.",source:"@site/docs/pro/dialogue/dialogue-nodes/audio.md",sourceDirName:"pro/dialogue/dialogue-nodes",slug:"/pro/dialogue/dialogue-nodes/audio",permalink:"/narrative-documentation/pro/dialogue/dialogue-nodes/audio",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Audio"},sidebar:"tutorialSidebar",previous:{title:"Animations",permalink:"/narrative-documentation/pro/dialogue/dialogue-nodes/animations"},next:{title:"Node Breakdown",permalink:"/narrative-documentation/pro/dialogue/dialogue-nodes/node-breakdown"}},I={},l=[{value:"Audio missing error",id:"audio-missing-error",level:2}];function c(i){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,t.R)(),...i.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"audio",children:"Audio"})}),"\n",(0,d.jsxs)(n.p,{children:["Each dialogue node contains a ",(0,d.jsx)(n.strong,{children:"Dialogue Sound"})," variable that you can attach your sounds to."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"dialogue-duration-audio.png",src:e(85190).A+"",width:"548",height:"96"})}),"\n",(0,d.jsx)(n.h2,{id:"audio-missing-error",children:"Audio missing error"}),"\n",(0,d.jsx)(n.p,{children:"Narrative will display an icon when a node is missing audio. This is a helpful hint to tell the user when they have missed it."}),"\n",(0,d.jsxs)(n.p,{children:["This can be disabled by going to ",(0,d.jsx)(n.strong,{children:"Edit"})," -> ",(0,d.jsx)(n.strong,{children:"Project Settings"})," -> ",(0,d.jsx)(n.strong,{children:"Narrative Dialogues - Editor"})," and unchecking ",(0,d.jsx)(n.code,{children:"Warn Missing Sound Cues"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"dialogue-warn-audio.png",src:e(31922).A+"",width:"590",height:"145"})})]})}function u(i={}){const{wrapper:n}={...(0,t.R)(),...i.components};return n?(0,d.jsx)(n,{...i,children:(0,d.jsx)(c,{...i})}):c(i)}},85190:(i,n,e)=>{e.d(n,{A:()=>d});const d="data:image/png;base64,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"},31922:(i,n,e)=>{e.d(n,{A:()=>d});const d="data:image/png;base64,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xMfH43A42Lp1K/v27ePEiRMMHz7cY+B79+4lNzcXu91O3759GTx4MG1tbWzfvp3MzExcLhcAFRUVGIZBXFwc33//PYsXL6a+vt5j/yIiIiJX8pg4uVwusrOzO5xVqqurIzs7252kdCYuLo7Zs2djtVr57//+b/70pz8xdOhQhg0bdlVdwzAAcDqdFwM0XztEwzAwmUxYLBacTudVsRw9epS0tDQqKyt56qmnSElJITAw8Jp9ioiIiHTEq83hDoeDzMxMGhsb3WWNjY1kZmbicDg8trdYLDz22GPMmjWLoUOHEh8f7+6jsLAQX19fnnzySRITE4mJieHIkSNUVVUBMHbsWBITE/Hz87vmGCdOnMDf35/HHnuM8ePHu5fqnn76aRYvXkxeXh579uwhNDSUsLAwb25bREREpB1LUFBQ6qUPffr06bRiW1sbZ86cISoqira2Nr777juam5u9GuTs2bM0NDQwbtw4pk6dSu/evfnqq6/4/vvvqaysxOl0MnnyZEaOHElOTg5fffUVlZWV9O/fn3HjxuF0Omlra6OpqYn6+nqGDx/Od999R1NTE8nJyVRWVrJt2zbCwsKYNGkSfn5+mM1mqqur2bZtG9HR0fzkJz9h4MCBZGRkeFxaFBEREemIKTw83Lj0YcCAAR4b+Pv7A9DS0nLrohIRERG5DXX5AEwlTCIiInKv0itXRERERLykxElERETES0qcRERERLykxElERETES0qcRERERLykxElERETES/8fIBtzYTrnKj4AAAAASUVORK5CYII="},28453:(i,n,e)=>{e.d(n,{R:()=>E,x:()=>a});var d=e(96540);const t={},r=d.createContext(t);function E(i){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function a(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:E(i.components),d.createElement(r.Provider,{value:n},i.children)}}}]);