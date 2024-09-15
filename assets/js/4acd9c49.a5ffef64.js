"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[6790],{42325:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(74848),a=t(28453);const i={sidebar_label:"Quest Design"},r="Quest Design",o={id:"quests-and-dialogue/quests/quest-design",title:"Quest Design",description:"When creating quests in a game, it's important to consider the design approach, as this can greatly simplify the game's development process.",source:"@site/docs/quests-and-dialogue/quests/quest-design.md",sourceDirName:"quests-and-dialogue/quests",slug:"/quests-and-dialogue/quests/quest-design",permalink:"/quests-and-dialogue/quests/quest-design",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Quest Design"},sidebar:"tutorialSidebar",previous:{title:"Community Tasks",permalink:"/quests-and-dialogue/quests/tasks/community-tasks"},next:{title:"Quest Journal",permalink:"/quests-and-dialogue/quests/quest-journal"}},d={},l=[{value:"Decentralized Quests",id:"decentralized-quests",level:2},{value:"Disadvantages of Decentralized Quests",id:"disadvantages-of-decentralized-quests",level:3},{value:"Self-contained Quests",id:"self-contained-quests",level:2},{value:"Advantages of Self-contained Quests",id:"advantages-of-self-contained-quests",level:3},{value:"Disadvantages of Self-contained Quests",id:"disadvantages-of-self-contained-quests",level:3},{value:"Summary",id:"summary",level:2}];function c(e){const s={em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"quest-design",children:"Quest Design"})}),"\n",(0,n.jsx)(s.p,{children:"When creating quests in a game, it's important to consider the design approach, as this can greatly simplify the game's development process."}),"\n",(0,n.jsxs)(s.p,{children:["There are two main methods for creating quests: ",(0,n.jsx)(s.strong,{children:"Self-contained quests"})," and ",(0,n.jsx)(s.strong,{children:"Decentralized quests"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Most games will have actors (such as NPCs or objects) that load in and out during quests. This is particularly common in open-world games, but it's also applicable to many other types of games. For example, in ",(0,n.jsx)(s.em,{children:"Grand Theft Auto: San Andreas"}),", you can enter and exit quests at will, with quest-specific actors only becoming available when the quest starts and specific conditions are met. Some quests even change the game world or grant abilities that can be used later."]}),"\n",(0,n.jsx)(s.h2,{id:"decentralized-quests",children:"Decentralized Quests"}),"\n",(0,n.jsx)(s.p,{children:"Decentralized quests are the most common and often the faster method to implement. In this approach:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Each item or NPC is manually placed into the world."}),"\n",(0,n.jsx)(s.li,{children:"Actors destroy themselves when the quest is completed or reaches a certain state."}),"\n",(0,n.jsx)(s.li,{children:"This approach allows for quick setup and provides a better visualization of how the quest is laid out in the game world."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"disadvantages-of-decentralized-quests",children:"Disadvantages of Decentralized Quests"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Repeatability and Load Times"}),": If a player fails a quest or wants to repeat it from a quest selection screen, all actors need to be reloaded or respawned. This increases load times."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Initial Loading Delays"}),": When a level first loads, every quest-based actor must check its own state. As the number of actors increases, this can lead to delays."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Decentralized quests are often found in games with a linear story structure, like ",(0,n.jsx)(s.em,{children:"Tomb Raider"}),", where jumping between quests is less of an issue."]}),"\n",(0,n.jsx)(s.h2,{id:"self-contained-quests",children:"Self-contained Quests"}),"\n",(0,n.jsxs)(s.p,{children:["Self-contained quests take a different approach where the quest itself handles the spawning and despawning of the necessary actors. Games like ",(0,n.jsx)(s.em,{children:"Grand Theft Auto: San Andreas"})," or ",(0,n.jsx)(s.em,{children:"The Elder Scrolls V: Skyrim"})," use this method. For example, you may arrive at a location that is empty or locked until a specific quest is active."]}),"\n",(0,n.jsx)(s.h3,{id:"advantages-of-self-contained-quests",children:"Advantages of Self-contained Quests"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Optimized Load Times"}),": Since items and NPCs are only spawned or despawned when a quest starts or ends, load times are reduced."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Easy Quest Selection"}),': The lifespan of each actor is controlled by the quest, making it easy to manage quest selection screens. You can simply call "Begin Quest" and have everything ready.']}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"disadvantages-of-self-contained-quests",children:"Disadvantages of Self-contained Quests"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Less Artist-Friendly"}),": Because the quest graph controls the actor's lifespan, you can't just browse the world to place actors. The process involves placing an actor in the world, copying its location, rotation, and other details, and then adding the corresponding narrative event with the necessary details."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(s.p,{children:"Both methodologies\u2014decentralized and self-contained quests\u2014are viable for quest design. Consider how you want your game to function and plan your design early to avoid complications later on."})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(96540);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);