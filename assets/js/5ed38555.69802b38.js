"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[5493],{45780:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(74848),r=i(28453);const a={sidebar_label:"Functions",sidebar_position:0},s="Functions",o={id:"inventory/items/functions",title:"Functions",description:"Activated",source:"@site/docs/inventory/items/functions.md",sourceDirName:"inventory/items",slug:"/inventory/items/functions",permalink:"/narrative-documentation/inventory/items/functions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Functions",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Items",permalink:"/narrative-documentation/inventory/items/"},next:{title:"Equipment",permalink:"/narrative-documentation/inventory/items/equipment/"}},l={},c=[{value:"Activated",id:"activated",level:2},{value:"Can Be Removed",id:"can-be-removed",level:2},{value:"Can Use",id:"can-use",level:2},{value:"Deactivated",id:"deactivated",level:2},{value:"Get Parsed Description",id:"get-parsed-description",level:2},{value:"Get Raw Description",id:"get-raw-description",level:2},{value:"Get String Variable",id:"get-string-variable",level:2},{value:"Mark Dirty For Replication",id:"mark-dirty-for-replication",level:2},{value:"On Use",id:"on-use",level:2},{value:"Set Active",id:"set-active",level:2}];function d(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"functions",children:"Functions"})}),"\n",(0,n.jsx)(t.h2,{id:"activated",children:"Activated"}),"\n",(0,n.jsx)(t.p,{children:"If this item is activatable, this will be called when the item is activated"}),"\n",(0,n.jsx)(t.h2,{id:"can-be-removed",children:"Can Be Removed"}),"\n",(0,n.jsx)(t.p,{children:"Allows you to define whether the item can be dropped, nice for if you want to implement special quest items that cannot be dropped for example"}),"\n",(0,n.jsx)(t.h2,{id:"can-use",children:"Can Use"}),"\n",(0,n.jsx)(t.p,{children:"Allows you to define whether the item can be used or not."}),"\n",(0,n.jsx)(t.h2,{id:"deactivated",children:"Deactivated"}),"\n",(0,n.jsx)(t.p,{children:"If this item is activatable, this will be called when the item is deactivated"}),"\n",(0,n.jsx)(t.h2,{id:"get-parsed-description",children:"Get Parsed Description"}),"\n",(0,n.jsx)(t.p,{children:"Return the description, with any string variables parsed out"}),"\n",(0,n.jsx)(t.h2,{id:"get-raw-description",children:"Get Raw Description"}),"\n",(0,n.jsx)(t.p,{children:"Return the description - allows BPs to override this in case you want automatically dynamically generated descriptions based on the items properties."}),"\n",(0,n.jsx)(t.h2,{id:"get-string-variable",children:"Get String Variable"}),"\n",(0,n.jsx)(t.p,{children:"Allows you to use variables in your items description, ie Hello Item Name. Simply override this function, then check the value of variable name and return whatever value you like!"}),"\n",(0,n.jsx)(t.h2,{id:"mark-dirty-for-replication",children:"Mark Dirty For Replication"}),"\n",(0,n.jsx)(t.p,{children:"Mark the object as needing replication. We must call this internally after modifying any replicated properties"}),"\n",(0,n.jsx)(t.h2,{id:"on-use",children:"On Use"}),"\n",(0,n.jsx)(t.p,{children:"Called when the item is used. This is implemented in Blueprint."}),"\n",(0,n.jsx)(t.h2,{id:"set-active",children:"Set Active"}),"\n",(0,n.jsxs)(t.p,{children:["Set the active status of the item. The item will be activated or deactivated based on the value of ",(0,n.jsx)(t.strong,{children:"bNewActive"}),". If ",(0,n.jsx)(t.strong,{children:"bForce"})," is true, the item will be set to active or inactive regardless of current state."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(96540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);