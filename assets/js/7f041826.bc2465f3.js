"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[9699],{77486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var l=r(74848),i=r(28453);const n={sidebar_label:"Loot Tables"},s="Loot Tables",o={id:"pro/inventory/loot-tables",title:"Loot Tables",description:"Loot tables are used to provide items to Inventories, whether it's the players, a trader or a blueprint.",source:"@site/docs/pro/inventory/loot-tables.md",sourceDirName:"pro/inventory",slug:"/pro/inventory/loot-tables",permalink:"/narrative-documentation/pro/inventory/loot-tables",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Loot Tables"},sidebar:"tutorialSidebar",previous:{title:"Gameplay Effect Items",permalink:"/narrative-documentation/pro/inventory/items/gameplay-effect-items"},next:{title:"Looting",permalink:"/narrative-documentation/pro/inventory/looting/"}},a={},d=[{value:"Creation",id:"creation",level:2},{value:"LootTableRow Properties",id:"loottablerow-properties",level:2},{value:"FItemWithQuantity Properties",id:"fitemwithquantity-properties",level:2},{value:"UItemCollection Properties",id:"uitemcollection-properties",level:2},{value:"FLootTableRoll Properties",id:"floottableroll-properties",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"loot-tables",children:"Loot Tables"})}),"\n",(0,l.jsxs)(t.p,{children:["Loot tables are used to provide items to Inventories, whether it's the players, ",(0,l.jsx)(t.a,{href:"./looting",children:"a trader"})," or a blueprint."]}),"\n",(0,l.jsx)(t.h2,{id:"creation",children:"Creation"}),"\n",(0,l.jsxs)(t.p,{children:["To create a new loot table, ",(0,l.jsx)(t.strong,{children:"Right Click"})," in the ",(0,l.jsx)(t.strong,{children:"Content Drawer"})," -> ",(0,l.jsx)(t.strong,{children:"Miscellaneous"})," -> ",(0,l.jsx)(t.strong,{children:"Data Table"}),"."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"loot-table-creation.webp",src:r(52856).A+"",width:"845",height:"455"})}),"\n",(0,l.jsxs)(t.p,{children:["Select the ",(0,l.jsx)(t.strong,{children:"LootTableRow"})," data structure."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"loot-table-row.webp",src:r(57191).A+"",width:"514",height:"353"})}),"\n",(0,l.jsx)(t.p,{children:"You can now populate all the items the Loot Table needs to use."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"loot-table-empty.webp",src:r(47366).A+"",width:"2024",height:"925"})}),"\n",(0,l.jsx)(t.h2,{id:"loottablerow-properties",children:"LootTableRow Properties"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Variable Name"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ItemsToGrant"}),(0,l.jsx)(t.td,{children:"TArray<FItemWithQuantity>"}),(0,l.jsx)(t.td,{children:"The items to grant if this row is given to the inventory"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ItemCollectionsToGrant"}),(0,l.jsx)(t.td,{children:"TArray<TObjectPtr<UItemCollection>>"}),(0,l.jsx)(t.td,{children:"Item collections to grant"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"SubTablesToRoll"}),(0,l.jsx)(t.td,{children:"TArray<FLootTableRoll>"}),(0,l.jsx)(t.td,{children:"Subloot tables that this loot table will roll"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Chance"}),(0,l.jsx)(t.td,{children:"float"}),(0,l.jsx)(t.td,{children:"The chance this row will actually be given if selected"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"fitemwithquantity-properties",children:"FItemWithQuantity Properties"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Variable Name"}),(0,l.jsx)(t.th,{children:"Type"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Item"}),(0,l.jsxs)(t.td,{children:["TSoftClassPtr<",(0,l.jsx)(t.a,{href:"./items",children:"UNarrativeItem"}),">"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Quantity"}),(0,l.jsx)(t.td,{children:"int32"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"uitemcollection-properties",children:"UItemCollection Properties"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Variable Name"}),(0,l.jsx)(t.th,{children:"Type"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Items"}),(0,l.jsx)(t.td,{children:"TArray<FItemWithQuantity>"})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"floottableroll-properties",children:"FLootTableRoll Properties"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Variable Name"}),(0,l.jsx)(t.th,{children:"Type"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"TableToRoll"}),(0,l.jsx)(t.td,{children:"TObjectPtr<UDataTable>"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"NumRolls"}),(0,l.jsx)(t.td,{children:"int32"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Chance"}),(0,l.jsx)(t.td,{children:"float"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},52856:(e,t,r)=>{r.d(t,{A:()=>l});const l=r.p+"assets/images/loot-table-creation-dbc0ea388548982b11597df11f6220a9.webp"},47366:(e,t,r)=>{r.d(t,{A:()=>l});const l=r.p+"assets/images/loot-table-empty-7a72deaacca39c7ad515eba01a118622.webp"},57191:(e,t,r)=>{r.d(t,{A:()=>l});const l=r.p+"assets/images/loot-table-row-58f5e56a7933d298361ae742912c7c60.webp"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var l=r(96540);const i={},n=l.createContext(i);function s(e){const t=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(n.Provider,{value:t},e.children)}}}]);