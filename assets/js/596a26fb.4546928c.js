"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[7678],{49732:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=s(74848),i=s(28453);const a={sidebar_label:"Quests",sidebar_position:3},o="Quests",r={id:"quests-and-dialogue/quests/index",title:"Quests",description:"Quests is a large part of the Narrative framework. It allows you to create rich, content filled quests with minimal work.",source:"@site/docs/quests-and-dialogue/quests/index.md",sourceDirName:"quests-and-dialogue/quests",slug:"/quests-and-dialogue/quests/",permalink:"/documentation/quests-and-dialogue/quests/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Quests",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dialogue Warnings",permalink:"/documentation/quests-and-dialogue/dialogue/warnings"},next:{title:"States",permalink:"/documentation/quests-and-dialogue/quests/states"}},d={},c=[{value:"Creation",id:"creation",level:2},{value:"Tabs",id:"tabs",level:3},{value:"Class Defaults",id:"class-defaults",level:3},{value:"Quest Properties",id:"quest-properties",level:3},{value:"Quest Logic",id:"quest-logic",level:2},{value:"Begin Quest",id:"begin-quest",level:2},{value:"Comments",id:"comments",level:2},{value:"Copy and pasting",id:"copy-and-pasting",level:2}];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"quests",children:"Quests"})}),"\n",(0,n.jsx)(t.p,{children:"Quests is a large part of the Narrative framework. It allows you to create rich, content filled quests with minimal work."}),"\n",(0,n.jsx)(t.h2,{id:"creation",children:"Creation"}),"\n",(0,n.jsxs)(t.p,{children:["Create a new quest by right-clicking in the ",(0,n.jsx)(t.strong,{children:"Content Drawer"})," -> ",(0,n.jsx)(t.strong,{children:"Narrative"})," -> ",(0,n.jsx)(t.strong,{children:"Quest"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"quest-creation.png",src:s(91806).A+"",width:"1183",height:"658"})}),"\n",(0,n.jsx)(t.h3,{id:"tabs",children:"Tabs"}),"\n",(0,n.jsxs)(t.p,{children:["Here you will see two tabs. The ",(0,n.jsx)(t.strong,{children:"Quest Graph"})," and the ",(0,n.jsx)(t.strong,{children:"Event Graph"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"The Event Graph"})," is where you can overwrite quest functions and add additional code to make your quest perform how you want."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"The Quest Graph"})," is how you build up the quest with ",(0,n.jsx)(t.a,{href:"/documentation/quests-and-dialogue/quests/branches",children:"quest branches"})," and ",(0,n.jsx)(t.a,{href:"./states",children:"quest states"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"quest-tabs.png",src:s(21045).A+"",width:"319",height:"74"})}),"\n",(0,n.jsx)(t.h3,{id:"class-defaults",children:"Class Defaults"}),"\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Class Defaults"})," button at the top, and we can now populate the ",(0,n.jsx)(t.strong,{children:"Quests default settings"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"creation-default-settings-class.png",src:s(83043).A+"",width:"752",height:"97"})}),"\n",(0,n.jsx)(t.p,{children:"The class defaults give you access to modify how your quest will work. It lets you change the quest title in the quest and more."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"quest-defaults.png",src:s(36315).A+"",width:"553",height:"302"})}),"\n",(0,n.jsx)(t.h3,{id:"quest-properties",children:"Quest Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"QuestName"}),(0,n.jsx)(t.td,{children:"FText"}),(0,n.jsx)(t.td,{children:"The name of the quest."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"QuestDescription"}),(0,n.jsx)(t.td,{children:"FText"}),(0,n.jsx)(t.td,{children:"The description of the overhaul quest, different to objectives."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tracked"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether or not the quest is marked as tracked. If tracked the navigation markers will be added, otherwise these will be hidden."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"InheritableStates"}),(0,n.jsx)(t.td,{children:"TArray<UQuestState>"}),(0,n.jsxs)(t.td,{children:["Inherited quest ",(0,n.jsx)(t.a,{href:"/documentation/quests-and-dialogue/quests/states",children:"states"}),". E.g. your parent quest could have a state called ",(0,n.jsx)(t.strong,{children:"RanOutOfTime"})," and that way any child quests could inherit the ",(0,n.jsx)(t.strong,{children:"RanOutOfTime"})," state instead of having to manually have one added to every quest."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"quest-logic",children:"Quest Logic"}),"\n",(0,n.jsx)(t.p,{children:"Understanding how quests work is the key to making AAA quests in no-time."}),"\n",(0,n.jsxs)(t.p,{children:["In Narrative, quests are made up of ",(0,n.jsx)(t.a,{href:"/documentation/quests-and-dialogue/quests/branches",children:"branches"})," and ",(0,n.jsx)(t.a,{href:"/documentation/quests-and-dialogue/quests/states",children:"states"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"States"})," are points within your quest where you are waiting for the player to complete the next task."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Branches"})," are the tasks within your quest that you need to complete. A quest can have multiple branches connected to a single ",(0,n.jsx)(t.strong,{children:"state"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Each quest will start with a State - the ",(0,n.jsx)(t.a,{href:"/documentation/quests-and-dialogue/quests/states#quest-start",children:"QuestStart"}),", a series of ",(0,n.jsx)(t.strong,{children:"branches"})," and connected ",(0,n.jsx)(t.strong,{children:"states"}),", and then it will end with a ",(0,n.jsx)(t.strong,{children:"State"})," the ",(0,n.jsx)(t.a,{href:"/documentation/quests-and-dialogue/quests/states#quest-success",children:"QuestSuccess"})," or ",(0,n.jsx)(t.a,{href:"/documentation/quests-and-dialogue/quests/states#quest-failure",children:"QuestFailure"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"quest-logic-1.png",src:s(7745).A+"",width:"1553",height:"207"})}),"\n",(0,n.jsx)(t.p,{children:"A state can also have multiple branches to create different paths in the quest. We will explore this more later."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"quest-logic-2.png",src:s(77162).A+"",width:"1600",height:"362"})}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.p,{children:["A common description is to think of ",(0,n.jsx)(t.strong,{children:"states"})," as rooms and ",(0,n.jsx)(t.strong,{children:"branches"})," as doors."]}),(0,n.jsxs)(t.p,{children:["You enter the room (",(0,n.jsx)(t.strong,{children:"state"}),") and wait. You then pick a door (",(0,n.jsx)(t.strong,{children:"branch"}),") and go through it which is you completing the task."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"quest-logic-3.png",src:s(32371).A+"",width:"500",height:"500"})})]}),"\n",(0,n.jsx)(t.h2,{id:"begin-quest",children:"Begin Quest"}),"\n",(0,n.jsxs)(t.p,{children:["The main function to start quests is the ",(0,n.jsx)(t.strong,{children:"Begin Quest"})," function built into the ",(0,n.jsx)(t.a,{href:"../tales-component",children:"Narrative Component"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"quests-beginquest.png",src:s(75281).A+"",width:"833",height:"353"})}),"\n",(0,n.jsx)(t.h2,{id:"comments",children:"Comments"}),"\n",(0,n.jsx)(t.p,{children:"You can add Unreal's comments around your quests to organise them or make them easier to debug at a glance."}),"\n",(0,n.jsxs)(t.p,{children:["Simply highlight your quest nodes and hit the ",(0,n.jsx)(t.strong,{children:"C"})," key to add the comment."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"quest-comments.png",src:s(36027).A+"",width:"1290",height:"255"})}),"\n",(0,n.jsx)(t.h2,{id:"copy-and-pasting",children:"Copy and pasting"}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsx)(t.p,{children:"Copying and pasting quest nodes have been disabled until further notice."}),(0,n.jsx)(t.p,{children:"It was causing corruption in assets and until it can be resolved up to the high Narrative standard, it has been removed."})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},83043:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/creation-default-settings-class-07d339e590c8e7c7d66d6a2ba8334863.png"},36027:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/quest-comments-39c5d87a67ffe9b1fc545de62d1e1eb6.png"},91806:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/quest-creation-be191d3d84edadc501d70d77fe35b3db.png"},36315:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/quest-defaults-97ffd94f057a0be365d9f4af4f4347c7.png"},7745:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/quest-logic-1-c690e3b840d0eedf389d9be9a4987ac3.png"},77162:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/quest-logic-2-da03e8f4cac16cbd942cfc1dff3f306c.png"},32371:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/quest-logic-3-d2ce639dd87244524383df11c9576d34.png"},21045:(e,t,s)=>{s.d(t,{A:()=>n});const n="data:image/png;base64,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"},75281:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/quests-beginquest-dd558a47a09055dc1827633dd1dd576b.png"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>r});var n=s(96540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);