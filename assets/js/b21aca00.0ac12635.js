"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[3645],{19648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=t(74848),o=t(28453);const r={sidebar_label:"Conditions"},s="Conditions",d={id:"pro/conditions/index",title:"Conditions",description:"Conditions are a powerful tool that allows you to control the flow of dialogue based on any condition you require.",source:"@site/docs/pro/conditions/index.md",sourceDirName:"pro/conditions",slug:"/pro/conditions/",permalink:"/narrative-documentation/pro/conditions/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Conditions"},sidebar:"tutorialSidebar",previous:{title:"Books - COMING SOON",permalink:"/narrative-documentation/pro/books/"},next:{title:"Default Conditions",permalink:"/narrative-documentation/pro/conditions/default-conditions"}},a={},l=[{value:"Using Conditions",id:"using-conditions",level:2},{value:"Default Conditions",id:"default-conditions",level:2},{value:"Creating Conditions",id:"creating-conditions",level:2},{value:"Properties",id:"properties",level:2},{value:"EPartyEventPolicy",id:"epartyeventpolicy",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"conditions",children:"Conditions"})}),"\n",(0,i.jsx)(n.p,{children:"Conditions are a powerful tool that allows you to control the flow of dialogue based on any condition you require."}),"\n",(0,i.jsxs)(n.p,{children:["They are small portions of code (mainly generic and reusable, but they can also be specific) that allow you to check a value and have it act as the gate to the next ",(0,i.jsx)(n.a,{href:"../dialogue/dialogue-nodes",children:"dialogue node"})," to enter."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Should a node only be used if the player has a specific item? Add a condition."}),"\n",(0,i.jsx)(n.li,{children:"Do you want to only go down a nodes route if the player has completed a quest? Add a condition."}),"\n",(0,i.jsx)(n.li,{children:"Want to only play a node a single time? Add a condition."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Conditions allow you to add multiple conditions to a node. All of these conditions must be met for ",(0,i.jsx)(n.a,{href:"../dialogue",children:"Dialogue"})," to proceed."]}),"\n",(0,i.jsx)(n.p,{children:'If even one is not met, the node will be rejected for use. If you require "this or that" logic, use two nodes instead.'}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Quest conditions currently do not work. You can archive the same result using ",(0,i.jsx)(n.a,{href:"/narrative-documentation/pro/quests/branches",children:"branches"}),"."]}),(0,i.jsx)(n.p,{children:"It has been left here since there is a discussion in the community to whether it should be made available or not."})]}),"\n",(0,i.jsx)(n.h2,{id:"using-conditions",children:"Using Conditions"}),"\n",(0,i.jsx)(n.p,{children:"To add a condition to a node, simply select the node and in the details screen and add as many conditions to your Conditions list as you require."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"conditions-list.webp",src:t(901).A+"",width:"595",height:"369"})}),"\n",(0,i.jsx)(n.h2,{id:"default-conditions",children:"Default Conditions"}),"\n",(0,i.jsxs)(n.p,{children:["Narrative comes with a bunch of ",(0,i.jsx)(n.a,{href:"/narrative-documentation/pro/conditions/default-conditions",children:"default conditions"})," to help kickstart your game."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-conditions",children:"Creating Conditions"}),"\n",(0,i.jsx)(n.p,{children:"It is very common to create your own conditions to implement logic. This could be to interface with other plugins or to do something unique for your game."}),"\n",(0,i.jsxs)(n.p,{children:["Creating Conditions are really easy. Create a new condition by right-clicking in the ",(0,i.jsx)(n.strong,{children:"Content Drawer"})," -> ",(0,i.jsx)(n.strong,{children:"Narrative"})," -> ",(0,i.jsx)(n.strong,{children:"Condition"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Simply override ",(0,i.jsx)(n.code,{children:"CheckCondition"})," and action your request."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"A key thing to remember with Conditions is to always make it return true or false. If you don\u2019t, it can cause issues with Narrative waiting for the condition to finish."}),(0,i.jsx)(n.p,{children:"If you return true, it will allow the node to be used. If you return false, it will look for another node, otherwise end the dialogue."})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"You do not need to build a NOT / invert for your condition. Narrative Conditions build this in by default."})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Not"}),(0,i.jsx)(n.td,{children:"Bool"}),(0,i.jsx)(n.td,{children:"Inverts the result of the condition when executed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Party Event Policy"}),(0,i.jsx)(n.td,{children:"EPartyEventPolicy"}),(0,i.jsx)(n.td,{children:"Defines how events should be executed when the dialogue is playing as a party. Ignore if not in a party."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"epartyeventpolicy",children:"EPartyEventPolicy"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Enum Value"}),(0,i.jsx)(n.th,{children:"Display Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Party"}),(0,i.jsx)(n.td,{children:"Party"}),(0,i.jsx)(n.td,{children:"The condition is run on the party itself. Use this if you want the condition to check anyone in the party."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AllPartyMembers"}),(0,i.jsx)(n.td,{children:"All Party Members"}),(0,i.jsx)(n.td,{children:"The condition is run on every party member. Use this if you want the condition to check every single party member."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PartyLeader"}),(0,i.jsx)(n.td,{children:"Party Leader"}),(0,i.jsx)(n.td,{children:"The condition is run on the party leader. Use this if you want the condition to just check the leader."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},901:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/conditions-list-47b1d3dc45c7e89254080aff629134ea.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);