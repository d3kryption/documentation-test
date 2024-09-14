"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[350],{49386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var i=n(74848),r=n(28453);const o={sidebar_label:"Functions",sidebar_position:0},l="Functions",s={id:"inventory/inventory-component/functions",title:"Functions",description:"The Inventory component contains a bunch of functions to help you use the inventory how you require.",source:"@site/docs/inventory/inventory-component/functions.md",sourceDirName:"inventory/inventory-component",slug:"/inventory/inventory-component/functions",permalink:"/narrative-documentation/inventory/inventory-component/functions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Functions",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Inventory Component",permalink:"/narrative-documentation/inventory/inventory-component/"},next:{title:"Items",permalink:"/narrative-documentation/inventory/items/"}},a={},h=[{value:"Add Currency",id:"add-currency",level:2},{value:"Allow Loot Item",id:"allow-loot-item",level:2},{value:"Allow Store Item",id:"allow-store-item",level:2},{value:"Client Refresh Inventory",id:"client-refresh-inventory",level:2},{value:"Consume Item",id:"consume-item",level:2},{value:"Find Item By Class",id:"find-item-by-class",level:2},{value:"Find Items Of Class",id:"find-items-of-class",level:2},{value:"Get Buy Price",id:"get-buy-price",level:2},{value:"Get Capacity",id:"get-capacity",level:2},{value:"Get Currency",id:"get-currency",level:2},{value:"Get Current Weight",id:"get-current-weight",level:2},{value:"Get Items",id:"get-items",level:2},{value:"Get Owning Controller",id:"get-owning-controller",level:2},{value:"Get Owning Pawn",id:"get-owning-pawn",level:2},{value:"Get Space For Item",id:"get-space-for-item",level:2},{value:"Get Weight Capacity",id:"get-weight-capacity",level:2},{value:"Has Item",id:"has-item",level:2},{value:"Perform Loot Item",id:"perform-loot-item",level:2},{value:"Perform Store Item",id:"perform-store-item",level:2},{value:"Remove Item",id:"remove-item",level:2},{value:"Request Loot Item",id:"request-loot-item",level:2},{value:"Request Store Item",id:"request-store-item",level:2},{value:"Set Capacity",id:"set-capacity",level:2},{value:"Set Currency",id:"set-currency",level:2},{value:"Set Inventory Friendly Name",id:"set-inventory-friendly-name",level:2},{value:"Set Is Vendor",id:"set-is-vendor",level:2},{value:"Set Loot Source",id:"set-loot-source",level:2},{value:"Set Weight Capacity",id:"set-weight-capacity",level:2},{value:"Stop Looting",id:"stop-looting",level:2},{value:"Try Add From Loot Table",id:"try-add-from-loot-table",level:2},{value:"Try Add Item From Class",id:"try-add-item-from-class",level:2},{value:"Use Item",id:"use-item",level:2},{value:"Get Sell Price",id:"get-sell-price",level:2},{value:"Give Default Items",id:"give-default-items",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"functions",children:"Functions"})}),"\n",(0,i.jsx)(t.p,{children:"The Inventory component contains a bunch of functions to help you use the inventory how you require."}),"\n",(0,i.jsxs)(t.p,{children:["If you import the ",(0,i.jsx)(t.a,{href:"/narrative-documentation/inventory/inventory-component/",children:"Inventory Component"}),", you can view the list of functions supported."]}),"\n",(0,i.jsx)(t.h2,{id:"add-currency",children:"Add Currency"}),"\n",(0,i.jsx)(t.p,{children:"Add some currency to the player's inventory. Can accept negative values."}),"\n",(0,i.jsx)(t.h2,{id:"allow-loot-item",children:"Allow Loot Item"}),"\n",(0,i.jsx)(t.p,{children:"Return true if the taker can loot the item from this inventory."}),"\n",(0,i.jsx)(t.h2,{id:"allow-store-item",children:"Allow Store Item"}),"\n",(0,i.jsx)(t.p,{children:"Return true if the storer can store the given item in this inventory."}),"\n",(0,i.jsx)(t.h2,{id:"client-refresh-inventory",children:"Client Refresh Inventory"}),"\n",(0,i.jsx)(t.p,{children:"Client-side function to refresh the inventory."}),"\n",(0,i.jsx)(t.h2,{id:"consume-item",children:"Consume Item"}),"\n",(0,i.jsx)(t.p,{children:"Take some quantity away from the item, and remove it from the inventory when quantity reaches zero. Useful for things like eating food, using ammo, etc."}),"\n",(0,i.jsx)(t.h2,{id:"find-item-by-class",children:"Find Item By Class"}),"\n",(0,i.jsx)(t.p,{children:"Return the first item with the same class as ItemClass."}),"\n",(0,i.jsx)(t.h2,{id:"find-items-of-class",children:"Find Items Of Class"}),"\n",(0,i.jsx)(t.p,{children:"Get all inventory items that are children of the supplied ItemClass."}),"\n",(0,i.jsx)(t.h2,{id:"get-buy-price",children:"Get Buy Price"}),"\n",(0,i.jsx)(t.p,{children:"Return the price we'll buy the given item for."}),"\n",(0,i.jsx)(t.h2,{id:"get-capacity",children:"Get Capacity"}),"\n",(0,i.jsx)(t.p,{children:"Get the capacity of the inventory."}),"\n",(0,i.jsx)(t.h2,{id:"get-currency",children:"Get Currency"}),"\n",(0,i.jsx)(t.p,{children:"Return the amount of currency we have."}),"\n",(0,i.jsx)(t.h2,{id:"get-current-weight",children:"Get Current Weight"}),"\n",(0,i.jsx)(t.p,{children:"Get the current weight of the inventory. To get the amount of items in the inventory, just do GetItems().Num()."}),"\n",(0,i.jsx)(t.h2,{id:"get-items",children:"Get Items"}),"\n",(0,i.jsx)(t.p,{children:"Get the items in the inventory."}),"\n",(0,i.jsx)(t.h2,{id:"get-owning-controller",children:"Get Owning Controller"}),"\n",(0,i.jsx)(t.p,{children:"Get the player controller owning this inventory component."}),"\n",(0,i.jsx)(t.h2,{id:"get-owning-pawn",children:"Get Owning Pawn"}),"\n",(0,i.jsx)(t.p,{children:"Get the pawn owning this inventory component."}),"\n",(0,i.jsx)(t.h2,{id:"get-space-for-item",children:"Get Space For Item"}),"\n",(0,i.jsx)(t.p,{children:"Return the amount of a given item that we have space for based on its weight, max stack size, etc. @param NoSpaceReason If we have no space for the item, this is the reason why."}),"\n",(0,i.jsx)(t.h2,{id:"get-weight-capacity",children:"Get Weight Capacity"}),"\n",(0,i.jsx)(t.p,{children:"Get the weight capacity of the inventory."}),"\n",(0,i.jsx)(t.h2,{id:"has-item",children:"Has Item"}),"\n",(0,i.jsx)(t.p,{children:"Return true if we have a given amount of an item. bCheckVisibility will only look for items that are visible in the inventory."}),"\n",(0,i.jsx)(t.h2,{id:"perform-loot-item",children:"Perform Loot Item"}),"\n",(0,i.jsx)(t.p,{children:"Remove the item from us, and give it to the taker. Return how much of the item was able to be looted."}),"\n",(0,i.jsx)(t.h2,{id:"perform-store-item",children:"Perform Store Item"}),"\n",(0,i.jsx)(t.p,{children:"Remove the item from the storer, and give it to us. Return how much of the item was able to be stored."}),"\n",(0,i.jsx)(t.h2,{id:"remove-item",children:"Remove Item"}),"\n",(0,i.jsx)(t.p,{children:"Remove the item from the inventory. We do actually allow clients to call this unlike AddItem, however the server will still validate that the item is allowed to be removed before removing the item, so still cheat safe."}),"\n",(0,i.jsx)(t.h2,{id:"request-loot-item",children:"Request Loot Item"}),"\n",(0,i.jsx)(t.p,{children:"Loot an item. Clients RPC to tell server they want to do this; server will validate to prevent cheating. If we're client return true/false if we notified server to loot. Server returns true if loot actually happened."}),"\n",(0,i.jsx)(t.h2,{id:"request-store-item",children:"Request Store Item"}),"\n",(0,i.jsx)(t.p,{children:"Store an item. Clients RPC to tell server they want to do this; server will validate to prevent cheating. If we're client return true/false if we notified server to store. Server returns true if store actually happened."}),"\n",(0,i.jsx)(t.h2,{id:"set-capacity",children:"Set Capacity"}),"\n",(0,i.jsx)(t.p,{children:"Set the capacity of the inventory."}),"\n",(0,i.jsx)(t.h2,{id:"set-currency",children:"Set Currency"}),"\n",(0,i.jsx)(t.p,{children:"Set the amount of currency the player has."}),"\n",(0,i.jsx)(t.h2,{id:"set-inventory-friendly-name",children:"Set Inventory Friendly Name"}),"\n",(0,i.jsx)(t.p,{children:"Set the friendly name of the inventory."}),"\n",(0,i.jsx)(t.h2,{id:"set-is-vendor",children:"Set Is Vendor"}),"\n",(0,i.jsx)(t.p,{children:"Set whether the inventory is a vendor."}),"\n",(0,i.jsx)(t.h2,{id:"set-loot-source",children:"Set Loot Source"}),"\n",(0,i.jsx)(t.p,{children:"Sets our loot source. Only the server can call this for obvious reasons!"}),"\n",(0,i.jsx)(t.h2,{id:"set-weight-capacity",children:"Set Weight Capacity"}),"\n",(0,i.jsx)(t.p,{children:"Set the weight capacity of the inventory."}),"\n",(0,i.jsx)(t.h2,{id:"stop-looting",children:"Stop Looting"}),"\n",(0,i.jsx)(t.p,{children:"Stop looting. Clients will RPC to the server to end looting."}),"\n",(0,i.jsx)(t.h2,{id:"try-add-from-loot-table",children:"Try Add From Loot Table"}),"\n",(0,i.jsx)(t.p,{children:"Add an item to our inventory using a loot table instead of an item class. Current loads the granted items synchronously and may cause hitching depending on how heavy the item is."}),"\n",(0,i.jsx)(t.h2,{id:"try-add-item-from-class",children:"Try Add Item From Class"}),"\n",(0,i.jsx)(t.p,{children:"Add an item to the inventory using the item class. @param ItemClass the item to add @param Quantity the amount of the item to add @param bCheckAutoUse if true, we'll check if the item wants to be auto-used on add. Clothing items do this for example to auto-equip. @return the amount of the item that was added to the inventory."}),"\n",(0,i.jsx)(t.h2,{id:"use-item",children:"Use Item"}),"\n",(0,i.jsx)(t.p,{children:"Use the given item. Return true if the item was successfully used - please note this will always return false on a client in a networked game as the server uses the item, not the client."}),"\n",(0,i.jsx)(t.h2,{id:"get-sell-price",children:"Get Sell Price"}),"\n",(0,i.jsx)(t.p,{children:"Return the price we'll sell the given item for."}),"\n",(0,i.jsx)(t.h2,{id:"give-default-items",children:"Give Default Items"}),"\n",(0,i.jsx)(t.p,{children:"Instead of calling this automatically on beginplay we let designers call this when they like."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);