"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[2999],{17743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=n(74848),r=n(28453);const i={sidebar_label:"Weapons"},a="Weapons",d={id:"pro/inventory/items/equipment/weapons",title:"Weapons",description:"Properties",source:"@site/docs/pro/inventory/items/equipment/weapons.md",sourceDirName:"pro/inventory/items/equipment",slug:"/pro/inventory/items/equipment/weapons",permalink:"/documentation/pro/inventory/items/equipment/weapons",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Weapons"},sidebar:"tutorialSidebar",previous:{title:"Functions",permalink:"/documentation/pro/inventory/items/equipment/functions"},next:{title:"Loot Tables",permalink:"/documentation/pro/inventory/loot-tables"}},o={},l=[{value:"Properties",id:"properties",level:2},{value:"Functions",id:"functions",level:2},{value:"Can Fire",id:"can-fire",level:2},{value:"Is Holstered",id:"is-holstered",level:2},{value:"Reload",id:"reload",level:2},{value:"Wants Reload",id:"wants-reload",level:2}];function c(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"weapons",children:"Weapons"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WeaponAnimLayer"}),(0,s.jsx)(t.td,{children:"TSubclassOf<UAnimInstance>"}),(0,s.jsx)(t.td,{children:"Anim BP we'll apply to the owner when the weapon is unholstered"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WeaponVisualClass"}),(0,s.jsx)(t.td,{children:"TSubclassOf<AActor>"}),(0,s.jsx)(t.td,{children:"Weapon visual actor to spawn"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WeaponVisualAttachBone"}),(0,s.jsx)(t.td,{children:"FName"}),(0,s.jsx)(t.td,{children:"Weapon visual bone to attach to"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WeaponVisualHolsteredAttachBone"}),(0,s.jsx)(t.td,{children:"FName"}),(0,s.jsx)(t.td,{children:"Weapon visual bone to attach to for holstered state"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WeaponVisualAttachOffset"}),(0,s.jsx)(t.td,{children:"FTransform"}),(0,s.jsx)(t.td,{children:"Weapon visual offset from attach"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WeaponVisualHolsteredAttachOffset"}),(0,s.jsx)(t.td,{children:"FTransform"}),(0,s.jsx)(t.td,{children:"Weapon visual offset from attach for holster"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AttackDamage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Base damage this weapon should do"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RequiredAmmo"}),(0,s.jsx)(t.td,{children:"TSoftClassPtr<UAmmoItem>"}),(0,s.jsx)(t.td,{children:"Ammo item class for this weapon"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ClipSize"}),(0,s.jsx)(t.td,{children:"int32"}),(0,s.jsx)(t.td,{children:"The amount of ammo loaded into the clip of the weapon"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AmmoInClip"}),(0,s.jsx)(t.td,{children:"int32"}),(0,s.jsx)(t.td,{children:"The amount of ammo currently in the clip"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TraceData"}),(0,s.jsx)(t.td,{children:"FCombatTraceData"}),(0,s.jsx)(t.td,{children:"Weapon trace distance when doing a hitscan"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BashTraceData"}),(0,s.jsx)(t.td,{children:"FCombatTraceData"}),(0,s.jsx)(t.td,{children:"Weapon trace distance when doing a weapon bash"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(t.h2,{id:"can-fire",children:"Can Fire"}),"\n",(0,s.jsx)(t.p,{children:"Check if the weapon can fire."}),"\n",(0,s.jsx)(t.h2,{id:"is-holstered",children:"Is Holstered"}),"\n",(0,s.jsx)(t.p,{children:"Check if the weapon is holstered."}),"\n",(0,s.jsx)(t.h2,{id:"reload",children:"Reload"}),"\n",(0,s.jsx)(t.p,{children:"Update the ammo in our clip."}),"\n",(0,s.jsx)(t.h2,{id:"wants-reload",children:"Wants Reload"}),"\n",(0,s.jsx)(t.p,{children:"Check if the weapon wants to reload."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);