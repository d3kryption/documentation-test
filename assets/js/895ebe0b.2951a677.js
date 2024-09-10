"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[2361],{16356:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>h,toc:()=>c});var s=i(74848),n=i(28453);const r={sidebar_label:"Default Conditions",sidebar_position:0},d="Default Conditions",h={id:"pro/conditions/default-conditions",title:"Default Conditions",description:"Narrative comes with a bunch of default conditions to help kickstart your game.",source:"@site/docs/pro/conditions/default-conditions.md",sourceDirName:"pro/conditions",slug:"/pro/conditions/default-conditions",permalink:"/documentation-test/pro/conditions/default-conditions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Default Conditions",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Conditions",permalink:"/documentation-test/pro/conditions/"},next:{title:"Dialogue",permalink:"/documentation-test/pro/dialogue/"}},l={},c=[{value:"Check Difficulty",id:"check-difficulty",level:2},{value:"Properties",id:"properties",level:3},{value:"Check Level",id:"check-level",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Has Completed Data Task",id:"has-completed-data-task",level:2},{value:"Properties",id:"properties-2",level:3},{value:"Has Item In Inventory",id:"has-item-in-inventory",level:2},{value:"Properties",id:"properties-3",level:3},{value:"Is Following Player",id:"is-following-player",level:2},{value:"Properties",id:"properties-4",level:3},{value:"Is Item Equipped",id:"is-item-equipped",level:2},{value:"Properties",id:"properties-5",level:3},{value:"Is Quest At State",id:"is-quest-at-state",level:2},{value:"Properties",id:"properties-6",level:3},{value:"Is Quest Failed",id:"is-quest-failed",level:2},{value:"Properties",id:"properties-7",level:3},{value:"Is Quest In Progress",id:"is-quest-in-progress",level:2},{value:"Properties",id:"properties-8",level:3},{value:"Is Quest Started or Finished",id:"is-quest-started-or-finished",level:2},{value:"Properties",id:"properties-9",level:3},{value:"Is Quest Succeeded",id:"is-quest-succeeded",level:2},{value:"Properties",id:"properties-10",level:3}];function o(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"default-conditions",children:"Default Conditions"})}),"\n",(0,s.jsx)(t.p,{children:"Narrative comes with a bunch of default conditions to help kickstart your game."}),"\n",(0,s.jsx)(t.h2,{id:"check-difficulty",children:"Check Difficulty"}),"\n",(0,s.jsx)(t.p,{children:"Checks if the player's difficulty level matches the specified version. Useful for enabling dialogue on specific levels."}),"\n",(0,s.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Difficulty"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/documentation-test/pro/abilities/#difficulty",children:"ENarrativeGameplayDifficulty"})}),(0,s.jsx)(t.td,{children:"The difficulty level to check against the player's."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"check-level",children:"Check Level"}),"\n",(0,s.jsx)(t.p,{children:"Checks if the player's skill level matches the required version. Useful for enabling dialogue on specific levels."}),"\n",(0,s.jsx)(t.h3,{id:"properties-1",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RequiredLevel"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The required skill level for the player."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"has-completed-data-task",children:"Has Completed Data Task"}),"\n",(0,s.jsx)(t.p,{children:"This condition allows you to check if a Narrative Data Task has been completed to enter this node."}),"\n",(0,s.jsx)(t.p,{children:"Using Narrative\u2019s Data Tasks you can complete them simply by providing the task and the argument. You also have the option to provide a quantity if you want to only check if the data task has been completed a number of times."}),"\n",(0,s.jsx)(t.h3,{id:"properties-2",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Task"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/documentation-test/pro/conditions/",children:"UDataTask"})}),(0,s.jsx)(t.td,{children:"This is the data task in which the task will be completed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Argument"}),(0,s.jsx)(t.td,{children:"FName"}),(0,s.jsx)(t.td,{children:"The value that is assigned against the data task to be completed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Quantity"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of data task completions to check for."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"has-item-in-inventory",children:"Has Item In Inventory"}),"\n",(0,s.jsx)(t.p,{children:"Checks if a specific item is present in the player's inventory."}),"\n",(0,s.jsx)(t.h3,{id:"properties-3",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ItemClass"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/documentation-test/pro/inventory/items",children:"FItemClass"})}),(0,s.jsx)(t.td,{children:"The class of the item to check in the player's inventory."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Quantity"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of items to check for in the inventory."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Check Visibility"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Whether to check only if the item is visible in the inventory."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"is-following-player",children:"Is Following Player"}),"\n",(0,s.jsx)(t.p,{children:"Checks if the specified NPC is following the player."}),"\n",(0,s.jsx)(t.h3,{id:"properties-4",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NPC asset"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../npcs",children:"UNPCDefinition"})}),(0,s.jsx)(t.td,{children:"The NPC data asset to check for."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"is-item-equipped",children:"Is Item Equipped"}),"\n",(0,s.jsx)(t.p,{children:"Checks if a specific item is equipped by the player."}),"\n",(0,s.jsx)(t.h3,{id:"properties-5",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ItemClass"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/documentation-test/pro/inventory/items",children:"FItemClass"})}),(0,s.jsx)(t.td,{children:"The class of the item to check if equipped."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"is-quest-at-state",children:"Is Quest At State"}),"\n",(0,s.jsx)(t.p,{children:"This condition allows you to check if a specified quest has arrived at a specific state."}),"\n",(0,s.jsx)(t.p,{children:"Simply provide the Quest you want to check and the state ID in which it must have arrived."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"That this condition checks if the quest is currently AT a current state. Not if a past state has been completed."})}),"\n",(0,s.jsx)(t.h3,{id:"properties-6",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Quest"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../quests",children:"UQuest"})}),(0,s.jsx)(t.td,{children:"The quest that needs to be checked."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"State"}),(0,s.jsx)(t.td,{children:"Name"}),(0,s.jsx)(t.td,{children:"The quest state ID that needs to be checked."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"is-quest-failed",children:"Is Quest Failed"}),"\n",(0,s.jsx)(t.p,{children:"This condition checks if a quest has ever reached the failed state."}),"\n",(0,s.jsx)(t.p,{children:"Simply provide the Quest you want to check."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"That a quest will only retain a failed state whilst it has not been forgotten or restarted."})}),"\n",(0,s.jsx)(t.h3,{id:"properties-7",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Quest"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../quests",children:"UQuest"})}),(0,s.jsx)(t.td,{children:"The quest that needs to be checked."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"is-quest-in-progress",children:"Is Quest In Progress"}),"\n",(0,s.jsx)(t.p,{children:"This condition checks if a quest is currently in progress. This means it has not reached a success or failed state."}),"\n",(0,s.jsx)(t.p,{children:"Simply provide the Quest you want to check."}),"\n",(0,s.jsx)(t.h3,{id:"properties-8",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Quest"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../quests",children:"UQuest"})}),(0,s.jsx)(t.td,{children:"The quest that needs to be checked."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"is-quest-started-or-finished",children:"Is Quest Started or Finished"}),"\n",(0,s.jsx)(t.p,{children:"This condition checks if a quest has currently started or finished. This means it has been encountered and started at least once at any state."}),"\n",(0,s.jsx)(t.p,{children:"Simply provide the Quest you want to check."}),"\n",(0,s.jsx)(t.h3,{id:"properties-9",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Quest"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../quests",children:"UQuest"})}),(0,s.jsx)(t.td,{children:"The quest that needs to be checked."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"is-quest-succeeded",children:"Is Quest Succeeded"}),"\n",(0,s.jsx)(t.p,{children:"This condition checks if a quest has ever reached the success state."}),"\n",(0,s.jsx)(t.p,{children:"Simply provide the Quest you want to check."}),"\n",(0,s.jsx)(t.h3,{id:"properties-10",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Quest"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../quests",children:"UQuest"})}),(0,s.jsx)(t.td,{children:"The quest that needs to be checked."})]})})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"That a quest will only retain a success state whilst it has not been forgotten or restarted."})})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>h});var s=i(96540);const n={},r=s.createContext(n);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);