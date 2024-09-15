"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[8698],{36634:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(74848),r=s(28453);const i={sidebar_label:"Branches",sidebar_position:1},a="Branches",o={id:"quests-and-dialogue/quests/branches",title:"Branches",description:"Narrative's branch system is the decision points for quests.",source:"@site/docs/quests-and-dialogue/quests/branches.md",sourceDirName:"quests-and-dialogue/quests",slug:"/quests-and-dialogue/quests/branches",permalink:"/narrative-documentation/quests-and-dialogue/quests/branches",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Branches",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"States",permalink:"/narrative-documentation/quests-and-dialogue/quests/states"},next:{title:"Tasks",permalink:"/narrative-documentation/quests-and-dialogue/quests/tasks/"}},d={},c=[{value:"Linear Quest example",id:"linear-quest-example",level:2},{value:"Non-linear Quest example",id:"non-linear-quest-example",level:2},{value:"Tasks",id:"tasks",level:2},{value:"Branch Properties",id:"branch-properties",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"branches",children:"Branches"})}),"\n",(0,n.jsx)(t.p,{children:"Narrative's branch system is the decision points for quests."}),"\n",(0,n.jsx)(t.p,{children:"If you want a linear quest where each objective is the only path you can take, then you will have a simple state / branch quest."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"quest-logic-1.webp",src:s(98362).A+"",width:"1553",height:"207"})}),"\n",(0,n.jsx)(t.p,{children:"However, many games like to have non-linear quests where the player can pick from different objectives to change the quest."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"quest-logic-2.webp",src:s(20731).A+"",width:"1600",height:"362"})}),"\n",(0,n.jsx)(t.p,{children:"A great example of linear vs non-linear quests."}),"\n",(0,n.jsx)(t.h2,{id:"linear-quest-example",children:"Linear Quest example"}),"\n",(0,n.jsxs)(t.p,{children:["A linear quest would be a quest such as ",(0,n.jsx)(t.strong,{children:"Ryder"})," from Grand Theft Auto: San Andreas."]}),"\n",(0,n.jsx)(t.p,{children:"A quest where you follow a character to a shop. You purchase a new hair cut. You then proceed to purchase food from a shop."}),"\n",(0,n.jsx)(t.p,{children:"You then drive home."}),"\n",(0,n.jsx)(t.p,{children:"Straight forward, no multiple objectives - great for lore expansion and games that don't need to provide options to the player."}),"\n",(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LbqKA7cYCQM?si=rSPuevdKoNw7oZ3C",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,n.jsx)(t.h2,{id:"non-linear-quest-example",children:"Non-linear Quest example"}),"\n",(0,n.jsx)(t.p,{children:"A non-linear quest example would be the opening quest from Elder Scrolls V: Skyrim."}),"\n",(0,n.jsx)(t.p,{children:"The quest has different twists and objectives that the player can take."}),"\n",(0,n.jsx)(t.p,{children:"An example is at some point in the quest, you have to choose which faction you want to go with. The Imperials or the Storm-cloaks."}),"\n",(0,n.jsx)(t.p,{children:"Taking one of the paths completely changes the rest of that quest."}),"\n",(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/MsmsmNBPUO4?si=cZ8m316pEryrfjX2",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,n.jsx)(t.h2,{id:"tasks",children:"Tasks"}),"\n",(0,n.jsx)(t.p,{children:"Tasks are objectives within your quest. Things that the player needs to accomplish in order to complete the current branch."}),"\n",(0,n.jsx)(t.p,{children:"A branch can contain multiple tasks which all need to be completed before the branch can move to the next state."}),"\n",(0,n.jsxs)(t.p,{children:["You can learn more about ",(0,n.jsx)(t.a,{href:"/narrative-documentation/quests-and-dialogue/quests/tasks/",children:"Narrative Tasks"})," here."]}),"\n",(0,n.jsx)(t.h2,{id:"branch-properties",children:"Branch Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ID"}),(0,n.jsx)(t.td,{children:"FText"}),(0,n.jsx)(t.td,{children:"The unique ID of the state. Used for saving the quests position."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"FText"}),(0,n.jsx)(t.td,{children:"The description of the current state. Used more so as a overview of the current position."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OnEnteredFuncName"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether or not the state has has any additional function code bound to it."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Conditions"}),(0,n.jsxs)(t.td,{children:["TArray<",(0,n.jsx)(t.a,{href:"../conditions/",children:"UNarrativeCondition"}),">"]}),(0,n.jsx)(t.td,{children:"Conditions are functions that run before this node is pending selection and contain boolean returns that allow this node to be run or ignored."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Events"}),(0,n.jsxs)(t.td,{children:["TArray<",(0,n.jsx)(t.a,{href:"../events",children:"UNarrativeEvent"}),">"]}),(0,n.jsxs)(t.td,{children:["Events are functions that can run at specific states on ",(0,n.jsx)(t.a,{href:"/narrative-documentation/quests-and-dialogue/quests/",children:"quests"})," & ",(0,n.jsx)(t.a,{href:"../dialogue",children:"dialogue"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"QuestTasks"}),(0,n.jsxs)(t.td,{children:["TArray<",(0,n.jsx)(t.a,{href:"./tasks",children:"UNarrativeTask"}),">"]}),(0,n.jsx)(t.td,{children:"Tasks needed to take this branch to its destination. Check Narrative/Content/DefaultTasks/ for examples and create custom tasks."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bHidden"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether this branch is hidden from the player on the UI. Useful for hidden quest options in the quest logic."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DestinationState"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/narrative-documentation/quests-and-dialogue/quests/states",children:"UQuestState"})}),(0,n.jsx)(t.td,{children:"The state to go to if this branch is taken. The branch is ignored if this is null."})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},98362:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/quest-logic-1-3ac4e32a82dd3107d4abdfa6d523d2b1.webp"},20731:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/quest-logic-2-4ea0629b05cb8acece903379299e9cbe.webp"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);