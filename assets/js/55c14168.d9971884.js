"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[714],{78662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(74848),a=n(28453);const r={sidebar_label:"NPCs"},i="NPCs",d={id:"pro/npcs/index",title:"NPCs",description:"Narrative Pro has a new NPC Subsystem which handles the spawning, creation, finding and all properties for NPCs.",source:"@site/docs/pro/npcs/index.md",sourceDirName:"pro/npcs",slug:"/pro/npcs/",permalink:"/documentation-test/pro/npcs/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"NPCs"},sidebar:"tutorialSidebar",previous:{title:"Points of Interest",permalink:"/documentation-test/pro/navigator/pointsofinterest"},next:{title:"Parties",permalink:"/documentation-test/pro/parties/"}},l={},c=[{value:"Creating a new NPC",id:"creating-a-new-npc",level:2},{value:"Spawning an NPC",id:"spawning-an-npc",level:2},{value:"Data Asset Properties",id:"data-asset-properties",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"npcs",children:"NPCs"})}),"\n",(0,s.jsx)(t.p,{children:"Narrative Pro has a new NPC Subsystem which handles the spawning, creation, finding and all properties for NPCs."}),"\n",(0,s.jsx)(t.p,{children:"All NPC details are stored as data assets, then spawned and managed by the Subsystem."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"npc-data-assets.png",src:n(57577).A+"",width:"1589",height:"1148"})}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-new-npc",children:"Creating a new NPC"}),"\n",(0,s.jsx)(t.p,{children:"To create a new NPC, Narrative Pro comes packaged with a data asset type called ``."}),"\n",(0,s.jsxs)(t.p,{children:["Open Your ",(0,s.jsx)(t.strong,{children:"Content Drawer"})," -> Go to the folder where you want to store ",(0,s.jsx)(t.strong,{children:"NPC Data Assets"})," -> Right Click -> ",(0,s.jsx)(t.strong,{children:"Miscellaneous"})," -> ",(0,s.jsx)(t.strong,{children:"Data Asset"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"npc-new-data-asset.png",src:n(57711).A+"",width:"1351",height:"566"})}),"\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.code,{children:"NPCDefinition"})," and name it after your NPC. It will automatically populate some of the information based on the file name."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"npc-new-data-asset-autofill.png",src:n(86952).A+"",width:"1589",height:"904"})}),"\n",(0,s.jsx)(t.h2,{id:"spawning-an-npc",children:"Spawning an NPC"}),"\n",(0,s.jsxs)(t.p,{children:["Using the NPC Manager you can spawn NPCs by getting the ",(0,s.jsx)(t.strong,{children:"Narrative NPC Subsystem"})," -> ",(0,s.jsx)(t.strong,{children:"Spawn NPC"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"npc-spawning.png",src:n(8504).A+"",width:"1003",height:"376"})}),"\n",(0,s.jsxs)(t.p,{children:["Another method of spawning NPC's into the world is to use ",(0,s.jsx)(t.a,{href:"../settlements",children:"Settlements"})]}),"\n",(0,s.jsx)(t.h2,{id:"data-asset-properties",children:"Data Asset Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NPCID"}),(0,s.jsx)(t.td,{children:"FName"}),(0,s.jsx)(t.td,{children:"FName ID for this NPC"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NPCName"}),(0,s.jsx)(t.td,{children:"FText"}),(0,s.jsx)(t.td,{children:"The name of this NPC. Will be used for the interaction and navigation markers."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Faction"}),(0,s.jsxs)(t.td,{children:["ObjectPtr<class ",(0,s.jsx)(t.a,{href:"/documentation-test/pro/factions/",children:"UFactionDefinition"}),">"]}),(0,s.jsx)(t.td,{children:"The NPC's faction, if one applies."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bAllowMultipleInstances"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Is this NPC unique, or can we spawn multiple of them? Main characters, for example, generally only want a max of one spawned at a time, whilst a generic bandit might have as many instances as we want."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bInvulnerable"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"If true, we'll apply the Narrative.State.Invulnerable tag to this NPC by default - it can be removed if needed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"UniqueNPCGUID"}),(0,s.jsx)(t.td,{children:"FGuid"}),(0,s.jsx)(t.td,{children:"If this NPC is unique, we'll use this as the NPC's save system GUID. Since there is only one unique GUID defined here, this will nicely guarantee unique NPCs only ever have 1 save record created per NPC."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NPCClassPath"}),(0,s.jsxs)(t.td,{children:["TSoftClassPtr<",(0,s.jsx)(t.a,{href:"/documentation-test/pro/npcs/",children:"ANarrativeNPCCharacter"}),">"]}),(0,s.jsx)(t.td,{children:"The default class to create when spawning this NPC."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Dialogue"}),(0,s.jsxs)(t.td,{children:["TSoftClassPtr<",(0,s.jsx)(t.a,{href:"/documentation-test/pro/dialogue/",children:"UDialogue"}),">"]}),(0,s.jsx)(t.td,{children:"The dialogue that should play when we interact with this NPC."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TaggedDialogues"}),(0,s.jsxs)(t.td,{children:["TArray<",(0,s.jsx)(t.a,{href:"/documentation-test/pro/dialogue/tagged-dialogue",children:"FTaggedDialogue"}),">"]}),(0,s.jsx)(t.td,{children:'The NPC\'s tagged dialogues; these are essentially dialogue, usually free movement that can be kicked off via a tag "TaggedDialogue.Taunt, TaggedDialogue.Greet, etc."'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bIsVendor"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Whether this NPC's inventory should be a vendor inventory."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TradingCurrency"}),(0,s.jsx)(t.td,{children:"int32"}),(0,s.jsx)(t.td,{children:"Default currency this character should have in their inventory."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TradingItemLoadout"}),(0,s.jsxs)(t.td,{children:["TArray<",(0,s.jsx)(t.a,{href:"/documentation-test/pro/inventory/loot-tables",children:"FLootTableRoll"}),">"]}),(0,s.jsx)(t.td,{children:"The items we should grant the character by default."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ShopFriendlyName"}),(0,s.jsx)(t.td,{children:"FText"}),(0,s.jsx)(t.td,{children:"The name of the vendor's shop, if this NPC is a vendor."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},57577:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/npc-data-assets-3a9fb3decd01304e723508215346d8fa.png"},86952:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/npc-new-data-asset-autofill-6b4ace334285fae349c35a63092f2148.png"},57711:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/npc-new-data-asset-6126998825ea1bbd9cc053a53cfb540f.png"},8504:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/npc-spawning-6381284097ffa5e4dd7b13187a259586.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);