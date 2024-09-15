"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[6693],{59914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(74848),i=n(28453);const r={sidebar_label:"Interaction"},s="Interaction",o={id:"pro/interaction/index",title:"Interaction",description:"Interaction is a full interactive component that lets you interact with actors in the world. From starting dialogue to opening chests.",source:"@site/docs/pro/interaction/index.md",sourceDirName:"pro/interaction",slug:"/pro/interaction/",permalink:"/pro/interaction/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Interaction"},sidebar:"tutorialSidebar",previous:{title:"F.A.Qs",permalink:"/pro/faqs"},next:{title:"Interactable",permalink:"/pro/interaction/interactables/"}},c={},d=[{value:"Activate / Deactivate",id:"activate--deactivate",level:2},{value:"Changing keys",id:"changing-keys",level:2},{value:"Properties",id:"properties",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"interaction",children:"Interaction"})}),"\n",(0,a.jsx)(t.p,{children:"Interaction is a full interactive component that lets you interact with actors in the world. From starting dialogue to opening chests."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"./interactables",children:"Interactables"})," are components that you add to actors to give interactable functionality."]}),"\n",(0,a.jsxs)(t.p,{children:["For example, if you add the interactable, ",(0,a.jsx)(t.a,{href:"/pro/interaction/interactables/default-interactables#item-pickup",children:"Interactable_ItemPickup"})," that actor will now allow you to pick up an item."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"Interaction"})," component is the driver that checks for all ",(0,a.jsx)(t.strong,{children:"Interactables"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"activate--deactivate",children:"Activate / Deactivate"}),"\n",(0,a.jsxs)(t.p,{children:["It is common to disable and enable an ",(0,a.jsx)(t.strong,{children:"interaction"})," component depending on your games state. For example a character during a cutscene will not want to interact with anything."]}),"\n",(0,a.jsx)(t.p,{children:"This can easily be toggled using Unreal's built in Activate and Deactivate events.."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"interaction_activate.webp",src:n(47756).A+"",width:"499",height:"343"})}),"\n",(0,a.jsx)(t.h2,{id:"changing-keys",children:"Changing keys"}),"\n",(0,a.jsx)(t.p,{children:"By default, Narrative Interaction is set up to use the Gamepad Face Button Left (Square / X) or the E key. You can easily change these to match your exact requirements."}),"\n",(0,a.jsxs)(t.p,{children:["Inside the ",(0,a.jsx)(t.strong,{children:"NarrativeCommonUI"})," plugin folder there is a ",(0,a.jsx)(t.strong,{children:"CommonUIInputAction"})," asset called ",(0,a.jsx)(t.strong,{children:"DT_NarrativeInputActions"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"narrative-interaction-component-changingkeys.webp",src:n(55403).A+"",width:"171",height:"238"})}),"\n",(0,a.jsx)(t.p,{children:"Open this up and find the name of the key you wish to change. In this case, the Interact row name is going to handle the interact option. Select it and you can set the keyboard and gamepad input types."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"narrative-interaction-component-changingkeys-datatable.webp",src:n(99890).A+"",width:"1144",height:"697"})}),"\n",(0,a.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"RemainingInteractTime"}),(0,a.jsx)(t.td,{children:"float"}),(0,a.jsx)(t.td,{children:"The amount of time remaining before interaction completes on the current interactable. Stored per interactor."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"InteractionCheckFrequency"}),(0,a.jsx)(t.td,{children:"float"}),(0,a.jsx)(t.td,{children:"How often, in seconds, to check for an interactable object. Set to zero to check every tick."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"InteractionCheckDistance"}),(0,a.jsx)(t.td,{children:"float"}),(0,a.jsx)(t.td,{children:"The maximum distance for tracing when checking if the player is looking at an interactable object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"InteractionCheckSphereRadius"}),(0,a.jsx)(t.td,{children:"float"}),(0,a.jsx)(t.td,{children:"If greater than zero, a sphere trace will be used instead of a line trace for interaction checks."})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},47756:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/webp;base64,UklGRswiAABXRUJQVlA4IMAiAABwtACdASrzAVcBPm02mEikIyKhI3RZKIANiWdtN94ortTln/v/0Av/+LCegr4Lz1fI4KjZVWgzEX0oer2hZ+C62pj15r2k9rfZ/kbrFWKB31mR83mdj0w/4b1AP0h6iXmA/k/+W9aX0b/5H+4ewB/k/8l6zvqqf1P1AP4B/mfTg9mT+3/7n9z/aC//+sW9ZvB3+/f8D+zf1XzH8eHuj+7/bHmD9h+g380/An67+//ubyd/En519g713/qeEV2jzC/cj6h/ufzc/xPp7/5vof+f/3D/bf174AP5t/Rf9V+aX9q+Uf2x8v777/0/9L7gP85/q/+z/un7jf8P5G/+D/QflV7mP0P/Wf+X3B/5j/Xv+V/hvyZ8B37V//b3P/12/9Av1vAI0xTb9DGs/slwSYjfq6VSwL3l9N3oIZ9XSqWBe8vhRqDl7PXY/BzWPjUiT0vZ67H4Oax4lNv0Ma7XjUHL2eux+JU44ZFdRNhNyNhNyNhNyNhNyNhNyNXTisGN6qvzDDwy5VUUlPPfdixxFwBiz11V6Ato67m8iDgNcmiKn43G43G42+mXnHftw+0Du5w3JGPkjYTcjYTchzY/eYQLL2aK920mDL7eLnmsHACvyHyxfoCfAp6XcP0KjZyTN/1Oz9sAQLsPgRQ8I7a2+gGNFSWQei0oKcFsbnBtTxdugoTYphSImrpxWDG9VX5hhejm1zQpnkY4ogkwtN46M904rPXrnekqHRZUDPK+LPLIVo3vN3+IetIwXeXqk4+2hHwV/1Eji5YyLSYvK1rzX8InuGZcur1emY6Wwm4Zgfb6G8nwWbxmCr+zdZslNg5arTaxwYobWp1GtMnTVFbfi5FS+8hQ8PWAnx7XhPTj67hJcNhPHwUKBfVL8fwRiIBeXEhWz0KBwoQbiRVyRtndtkLSF2ySn231lglsSFFhq8ZWtdiea/h5fIzGgKRvbX6i5Dq87xsH9YRpn2aOJTNF+YUYQuL0f71XGxTypyv190/Y/R8MvYZewy9g00J7FSWroms6AVY2LQfDGoRd/WG0divf6JWJZMM6qTqcok6fjtC6tcNFgXycBRZ+cGJc9zWWBiNAxgtyjCiYQBN8wwhtYeGI0R0q0sOg9bwwGE0UQXvnoUM5R3erVmliei3+Fgx4dJ77uZJHQfBA/df5hh4Zhcx4eF9VfmGHhec58T1DUyzSl+t+YR6dhZVTmqR+zgFjaY8kQls0TOvUbzkWRENyNhNyNgvkDa0d7JNFl2f3v5DpNz85nxGHFFZnemL2ZaCWwt9/ujep2H3X+YYeF5rP4JRz4QB/GN6qsHC6kSS3pGKv9iRNvTkuZWETYTcjYTJgyjNjOaAsY4xW7ztH6UYPWpa+6i+nt3IDiFcmJVRA7IxXAwDdbrdbrdZSVF3BVf3aHdAhmDDDwzDDwvNaBuW1K9uuI4lt1mZbCrfjkgcYoHmNKtVwKP9AYJkCEsV9AJeCF66BugushUkuooPHxFH8A17tbXT4/EJTtUBdOOR50OGyhhuSNhNyNhMtviHzgrU+Mgfz7nHWP7gV81bxSBkP+NYMFFammCyEwPu4jWt8fXaHh71HuVbq71GRco9VRAoflrW4oY9z3Oz5lafl9P8gxvVV+YYd5D+zyqmmgTThYNVKNE+VjwfYPIbblCiklD7kb0NB/dS9X4jRHs+d9VfmGGFdByDF++WHGnGM8ZVHlGwAlGpJuBxebRPzvoCyIhuRsJuRsJjF2XQF/gnM+Ss4l0pYmfPuBQ2kOb5ixCDkup9qPwostucbsCGYMMPDMMPDMM+XS/WnDQtVUUeA+fEAiviGG6yDdj3I2DQ51hC238m2GYYeGYYeF5b5HtQoDT0Con6+3ZBw8L5NuCMq/u0O4aer66ibCbkbCbkbCbkbCbkbCbkbB5bPTphcCvV13sKqOHhmGHhmGHhmGHhmFYAA/udvMxd6M2Z8Iy6ImL9ZZVe7HL5lE+/qbaln5KY6Kk9RPQ736GnkLOlmvs9hgrzm4jQV3Wo2F15F0C4G3hjhdO6dJ9Wk2A4AtExqSJrGhtBXdajYW6tbAv0NPIWdLNfZ7DBXnNxGgrutRsLryLoFwNvDHC6d06T6tJsBwBaJjUkTWNDaCu61Gwx6nNeI3z8WOeK4Kya5y7XwvEbPaimxQJnCALRMakiaxobQV3Wo2F15F0C4G3hjhdO6dJvcdun6GnkLOlmvs9hgrzm4jQV3Wo2F15F0C4Gw6YUNePYFWyi7MptU8EcMMhV8dMe1rRxcGOji4McN0rty9dA5Rjo40J+23ilwY6OLgxw3Su3L1d80qyw51FOCgDrvExPBCCEEIIQQgdd4mJ4ISd3I6WLvZkcmdLApT4JE302qTyI257mkA3Pw70wVaI8ETIS8tuK15g5JmdG33XwC46tYQcZw134PPB4yfJ/HXqmwsXzqKObk94VWPV/pQH+Kpo34GNmO0RPXPzwvTfE61en7XUDysF1Fzi14lu54HnDdaYg/pnTIqMBKO1Gf7wi1VhS3eEhTnDIPkZGR6zN+kA55s1F9Yyi1exm/kLtkaA59Zy7/CTZq7TX5DQj+kXZVMZxXEzmOP8tNJ2rwTFCHYCdVWUQEWG+G0NdhSNJxS7asAvzO4zmrp9uPDKIOgBZ+h8zn1dpNsgq60YyKFa3x3arvfqFAx59QqgYFdmZUCoaXhgDNdO/oamJQB9FZO3trFDXyXVdq0Q5aIbmgW4G2dhP3VXgMvrXINHsp/lsAMrVIOignU5tACv1UouP58gOVwtMIOnV8VHW6jXFdk3XGpSsHc6SKi41KPKyDFib+1S971Bu1gfd+aXL0PfuH6ZV3H83cRVZ8uAgR9qDA3UK+zhyMAGFxYXhRMMOO/azgG+UtC49eQ1Y7lStybcm5+IK0WbB8rUufihNVS2qd7gjv9RtpdTKp/FqgrbNaQihEi5RhegHv4yx7B5HCF5gfsBmpBokxvqsnxHlCQjlNWArxUXwDl1z0rWfHKHR09moxvEEc52bXaM7Ra02canjF0R6kwJ4TrxCQc8YA5gIPmy9exq/W1Voo2ZKxRn0bNwjxOxTzRyV/cbJvfWnX8Gi8RaX6L+Y9J0aOOJn2V9t4dzlsdvs4rHJ85xnCcDCbixqS7XS8Nf+5gkkGESqqs7gZ+XSfd5eyTjx3buJI8rCW8qhUZYqerJ8aravX6yY/YZD7cAP1sGwRF+HJo4CFl6p1A6uZSrwIPOsEq+k8/ZTGySJ3Mm7QQFsqlwhFYZbyPZ7j8w68McrxF8dFJpeZ5yG2IVTfgaUZ/p8hFGonxNqY95mhV16m4gSY1jrfOs7fa7wIYbIf719WchU/L5Ca2kdsDsqIxUPXTyAZajI8aPuyk18Ty3O9cYS973m5c9rwdqfvJaygCjEOtY8CKFosJPUyMHWEs/iM7c1EmMVtXnSP8B14F3NUTfV4GqVwCEEIIQQghBCCA9/A9aXXTJ82frw/mQDTM4Ou6M39hOHeDmO80u59eFWztX6Cuu2S+BDg3xZFPEVIiBiMN4R10bXbxEuEctDlVGDfTTJs36W36IdpvqMRiKLQcREwwROJ/84HtkpACmV/DJx7uPKYChHOUeUpzCor55pIhOdnNeWdWAvxUxaDvGDe3kagOda5ZS77RmXEYAIvcVAkOsSz1wMPvJ5oyP5GB4OM/T89imnNER6fgadfE5dVLwpiMJPH2kaW1e5/3Zr9eOWgZex2DhGerOxNNEf2jo4nM8UlnC9bwRqfpLKHROCfO7VBho7yAeaLUi9MkZN3H6lU61FE/1lg0G1kgMiBDVfWlbJmYrGn9R0n3VqRu+bITmc6Lq/DTliBHaC+LG85Ek2iwY9n3IrY9zze187jF9J5v8RVBV83mdQ0RMGW5u4QeAkhWX5QGHwPZAHkbVRhFe+3J0ZkOJ87GT0u0GxbFlVFQjanSl739+sdsJ+OA/u+hqZb1JNWpmbHI7XAWG+R9jKwDMcUhxoO/0O0laPCldzi7lDmzYuIh60MrvnBfzgh9EUJvLCMCGpQo5Ehm2IEZ5jpRnEwA5Ik0xZn+ypXSkgode9kLvA8pnYkz6U5OgeMGXlzdaA8WYIuyagckR/yHZPlz9Rz4owMhFLtTz1rlSU4iafXca0lw+fMo03DmCrpuBlexNIy21e1QMNGiWzTS1oQvwuZ5BOqtkMhu2NreTzBCVyC+Qt02Gt8RUWPowRnupQrWyNKwunbcbWcF+Kl1ET/QniXRsUIwgNo/lzrhSuFAh3FEGPH3dHPNsGePrMeQ8Or0g+PkUHYDZpvgUvVskG8UQ4jcFG+d4XqumVBQePFrrNm6AWqXmy9WsxV29d5C1zGd+0eKNKR12Nkvn6jKmMaU9AVmRIyxrvg5DSzrOyo+0KM57etXRr+GOu5UUqYTtu0X8KVA7+3KxColzEG7RL623D+Y8AoNErNu5iNoIA78mb+JuhDFN+uMLBVLZQjZ49gE7Zs7Mo5ap9Wx/reZEgKO3mnBJ216eOlbYHCR6emMgUrx7xj96JplPrjhobNUMKQhKOVroxhCczxC/QjHIXlIJYW0/ZPxetJz5qO/BsfyQshBHLO/mdwo4XQKWDv/S9zTup1rGU9TndShDArqvBb2Ras3iaFpmHblx5fki+j6R7b/M7AwJsGdoV1aAAAFv1+qpSjJ74lddCDBgIuzfFPYVjCN6MNf0S0kf4PzQq7zQte/GL0LxDUWRkEug+QMyKl7SJqA+OqL0lcLk/c9qFr+8jcB51hoAziCCzmqVJZoIRuRpb2xATxfP1fYF9rLu6fKL87IsVil9wmUgIEjfjEqeurwGYPycQmNri4CpCNqI8mzSwiMunrakZJXFMO6dwFgu4F0HppmN8G+FzAx+vGXRsRAsTQzrBwUi2bzTOAHjfmUjmlcmpaqRvF1iqPH36uImhisv4EZ3Wpt6KNKX3H6aLqqh4jQIVPzgtTZfx8stqrvRuSaV8iXJKEmx2K1r+h/vbbad0Hu/yCBr/a2a0eu2cyBQ/P/6xuD8sJp4RigmUpalp+yIMpzDexE7DYrVQQlCJCkAWYHYETWN/eFecQDkuba2Q3y/+Fp4auDSthi1ubgcR8jpj9GU+VgITQP8GWjf+ZZnaShSCg96WRRvAFt3JF842FuddkGINSbO9PXweoQQ9jpbuKvDe/kxkXP/3D0E/akZyZf07pcaXJj2vMSlUq3dejmSMnXzxyYFDl1NoSSPHTTosUhrJqNtgYyNvLt2wJRK0jnfdbl2duDW//qDuE9c15y8HwhSqu48Fonj5mM1OULxWdeyzgc2dvzhna7slzv/Bf3GFenjcIGTtTY2HyWH4WshNMHjCMIDu04s3+jVEaUxh5c3CBhpQCcQDvN8dreCiHADNv+ewZo7o88lnuUm4rRUut75aO8jowJGaaZeXRdizZsoh68q3+XfkHvt5sgIHE7THsLW74ni9GfOJJT69xMrMhqmk7ICNZnCVEJ/kyg+BRIMGKi/dotTiUn+ulf6Gs8Mol86mmIZtrPwoqQFpn0JsnX7B9Iu4BxqzX9Q8B79nZweHn5jLsMUuiCNWNl342o0cHpUTlX8YRCdAxeFleJ0z2aHMtVmZW3vGBGrvq0mk1x83ofgbFgvm1AWRgcmaymL04QjIrGKPfg5SOoo9sBXlgQulIUpUBsAaiAnmRose5H8T76YTCwzmuQfKUDMhtM6HESigCnsDKE84LHQSSYaOhhzgOtKdc06ktaBmVpd2rph+WCb94Mfu/umsXg6bT4hY/Sn4R9tDe3C9HyeYUmPkgCDS/HKh4ZX8pZdwxajwnS1ZQqVyHyBl9pEl7Vae8OZttZU+8pwkiAmmKEzHHN0L8OMEBHh3kn0n1VhIYVodpgXEGz/unXjFe/WNxdBlTvWxIxdNXkIrL+ApA0Pfe0VJT8Ki07dW0nv+mqvUzd+nK67mdCdwVEY55/k2bMannzDc3TfsgCuXC3znc2aROYt+ub0Fv4eF070e3Tq9CHV+sfUjAAnK+T48zatnj5FIsAAI+88lsd/VJhvtEOUTT5pH4pWuirla3u4ZmRKhHD/XRZXcXZlNC4/75Uno/ZWP7KtKCM91KFa99zamMOE5WnmXAYaTRRH7YP8dQnuitke0LaQW0N4ghsZZqpxUP0nkD8QsnJBPMyEfNN+LZ1lncS2o1SkacZk/6phfvYeABJ9gOzeCohlcU+Fr97KUwMSY26VIKcpkYmswAMniSEXPP35FkWHHptTkbApWIAwPVwFrGUqPJo0kFhXChjcyOzRPl8Xw+FLpkg50S6xxepUVVJnxOyodUUor3yYl263/ye9317x8CXM5JJPjtWVGoeXQYm5HBdQ+x+rshO1qNv3x08TjVzFwMV2TlioEB4H+K5lmb1D0vJNmWUU14libXF68Xuite/ORdUR7K7QXzaXo6QVuGFQj2bLS4MMum826/lEVkP5irHF2G0ez6uYtqkX9HaE5lIl9zTOWI9VtRNoy625YmlGcQyf59qeza+FgdA9s/W7jXUy9/9aq76iFlP35g87vx3xUthTBGNjiPs94yiLobKxyGpwDdodKw+r0cZ+sZJQWncYT9a8spUq0cY5/rknT8A7r49O0xmlZNXsQ01+yfEPL7opSX8JOp5gXKUp5B8im/O6i8ighaFO+2Q2A6dZKAyrn9rmROxnv4TXbyHehCc0MNkbvwd6cTOgiIGv4p30Kzaw+GKChLiqJqUf4UHtaG1Mj6lijzOs3mRH6mcXnJAAAffnLXx60xtC88WZ7xZnUTwTJFCWWJ+8pVuJtUy3GU3qHExDDcjBeNmEoW6mxADZ5HlSGO4jv7v5WWOJzyu3LxgJuI7+/pPBN22MnGOHppf1WxD7HZ0uAwvr6jSDlPkOCbOyszXyR4/jnfiex3cM4rrevzu/4NtWjTJ/78943/Zmj3hW2vPYZlC+oMEaIux7tMs5s47El8oTexWjMBLHeFKNG4s8Ewmz3MSkWig2olmCaRu0G87aKXl6RRavgLEu9NPUbK2rPkIpU9YYhamdHfnZd326BAnfMlriOkx4ehN44FPW/u7b3cC/TW0UClevJSXJH0VLmJvDPYZ+5m4s4dGX92Ejlm+Wf8dGkd1TrwAPtNO7escBw3SQbFxfoDWST3UXzpABIcvU4tvKOXYN3CfDv5Q/VCaPW8sT/Led8axdG0noC3h8p2kjeP4dYd+2xd5Yar5Gd1+axtk0Qdow6gvdTUYHryRVyZ+21ngu1fuwGk+7IrlK3rGo+Bd1eoXl1qkFGzUjwgIcPUj06I1pjy/4UYCeAqbjxjQ6qpFks5I27gORxZQuvYs39oqELKm6av+MI93Om6NnAjLll+JWmLNWgnLsZ/4bJY/7lVOFQ793+eGuFJVkftTSlGZ5QWenA/U4tq0xpcFOh2YjMM05u/5WV3C7bMno0ypXPSmiHJ/W1dHA1LSGb5leXiZoT8Ggm6xfaTdJVhZKPUa6xRMXA4/8XRdyTQKplU+34MefZ724eADrfbj9ULVQvnkGYAg3hmw2gmbDkAcZ78/xnRUS0rzwpQRnupQrW8S2vxxypiQmkL1X4h/kUAA+YACEw7CwGoZ1gCNo6n+f4qNyxwk32Vw/a0GSvRq85VBRzt3S2h1ktm5Ryi3uYqWtEuXvEcrBqHy3km8OXxP39tc3Rh7N96wKyKOwTSidTyPuSQmklHFae3zo896kgjObGUHwY4ic8YIxzfmAQLCjia8Hr8wDQ9D3w++F7esnKVRIX064vtFnMkPq9s7qJsWuzQOamVc8ZPxrtwsoYAOgPrQp3hxRzUnDNJpNKIDUkSCbUg1fGCqZhQsUEk+RVDGs1ydmIHMHvio8ZrDFYJKwbsxvyBmZXV3ng7dPC3nAHM36lQrS7QUA89hdlZCE300/9303HXdNFRLRkncsI0H9JcjfSBxrgfaRdnmgljNWsQ9oOhYxlfQhStGJeCiDdqhhCBoAfGIwVvvf89Gp7gCp3373IS4YQgaAHx3+GofY79gejxWVYmdPKVvXMvR4ty66n4rLACjPX7cgFa5i2QVBfnCY+48VNsep4K8CSB1lEFyve3UuiQvj6MTE5jIdaFmKBKaDIq40sE46qAOteuliV4gflEO6Bvok37AfMSwToGVyCEht//SmOuf+mKoAMeENme4vsrxscZFuEqSpijMSd932c57B7DXyAkFMVMG3EUUuKMhYkQ9ruFSt2jgFtbgt2RKh1c7wRMgJ/Psnm3r533hWtGvDZPm+WnCGl2JOo0luD+xftEiBocbds9TRyVsameBrkTDAG1TcIbuYXIBBCxPYrkKxMWL8d6QgOGuC1WdEnMBTwOSlHir7z1Hacx5+pvj5w4pRR3arkjIt/F2kzupjQUUESauHNqCEDBuEg3TtXM9wluTB/EYxI5F9YtOiYQR3SOuM2/2Ca0GJpObOtFKqK254qTpX8rMCo6z9fnDzmBNXvJpF1qaDxI1CucsAocF861oBhyM6B7ETsyt6ELkWMq73/wr0AtgK4sbw58WNLW6BsVZYTsq41Id55pS6q0Dk3SHQWwzAQDEnCcFQZWoC2LIYJVmtSxI0oqHWvJagxwUErGdFoAk99xnapwNbCl4NNLqYCv+pIoAyhkte0na2Lv2shYFlI4zwGsn7vXPHK+YrJ0fOuMFqRetAicP4p+yr/yAVy/O28PCmVPEGyjJX7vBnqLoa3vELgJKrIqtAB1ppTSXcWRt2SG1FpeLLR6F9NRzqC1SUwSZu4iwHlZm/Jt+Bi55NtPRNBH7xUVnXsnfy+ZWyhAuJeqWdxBBlsPXIFAY1c17Snti3TwY4xrUjTL+k3OY0aUl0eFoXDMRw+yjxMQ1HowJ6IUVVtwInd2C30yoPiMc97pnW4D7zSWC5TzpuMy6QCaHz/PBZFU4Pl3Y23k9JhozSZXfj3KVJN+zqrD68NTxAAN8lzw07XkzOifOm5xKLLhGNsu8Q1zfBWeo7fnUhpAEAhTmzL+9HPoZMouh0rcp1VwUo8xys8JjTpOyBtMW5g2C3RLLOO3zzW0ZZtljDI1NQzB2ne/uePph4irYhYXeOsfTPJXQIv/+B75sjKrRkKrwNr0UsZ15LPT3opt5NBso2+a+3sc0wgfITJIoFyRfgGalNEzpVstM4ZRf/tjUBcEeKgj+A7UEwYxhSCa4Sp0tyFsjgnvbPh8y1JvzH5FEPonc4J367Jl0V7GG9XYKxgqUPDAr4e9dLK6P4OoSc9akSy+abFvbq5+SOVe8pWczihCrr1NxAkxrGoJ4LHBBQJ/wqAfDs2dWW/AzunJm2SPQjuo7hnkaBpnZVYisJ9/OQpWHkRyxnenci4Q+DsvreYjd/WmqOsgDXtQKj9nBTnybJ7CyK2kHaMj5uNte29b82QCuXRGGqyw51JiBqQtpynx++//H77/8fsB8xK/WR+tBWTsDWQJkSuvX43wCSHQse0cuSx3r2NmtOOpfLJthIPJoYrlQT0tfnVK9aXO0jONztEKkyLvUEKnOg5oqU2x5SwcZwG6Pq18NNvlAaPmGVkPYXHz0WXWJbaXWs5kkvtGieMoIGBX4BGvHnBa21fWX0CJhEPlxNYq6lq76FSwG3EGTGQKlSExqjRlyoZ5BWh+xHYipHmQc0ZytTNU79+Jzj+pLmuM+itlsAciDeJZwqBwEZckGiPCXrOpKQAYOQrRT0DgVrRYPfKuBk7RzDpF/m/YfI9JAJiKgCceaAa2IrQUbLcou8DyUBEF++I1KiWL7FXPr5TAfKgNtyJOHX/mQ6W1TlhOKnJTZ40FYaiBMJBudcm8/Wlb6vQuZ+1X/Ev3d/knrwoPq/ycSOBsKKETKT5nw7dshwMdj30TaJsKgZD4gXliRE6xy2uIX5Y+Vx8GE4upJq1MzY5HXw+B0+/wGL0YUVEDC2pFxrxH+8dbMF4RxVF8pTDp18N0tLYWyd95KXqTvSfX5SYvrVuJE0QK+4MjtkF9wR3jja3T4IT1jsudC8EWz8hPszD4Yx2tiDaYL5ZJemc3OOtEw35UrW1dLfAG7LiXkFk/e1bwxURtJeuGrfOhiRAn3TnNwxUJ8x8GTmXWtKdEDRPX5a7vW0Wr2qVUYNtPiKHTZ6nvopEktMQwLTbMoSrEFiFdQzuDDvFd9V1/2Dibo+XveIeNqLqO1nvxD/IoUSGxIGbbw8Ksdn/Fpr/zALZ03bvGe7EKpsXyzjDLt6xV7YcORf8i9P7aWbgYZ1K5qRFGL4sZWprI7f3X86Fdkr1gkwLvQeXaTeu8t1cUW0waqKWf+EFQsEYunMx1JqBmpq7M35Ivo+ke4SB7QfWdL0f2M2Rhh+AWojiLIoAAc/kN32/j+GXK8ohBNCoacuN0C8KfvXhxMDlHf9g6BFaqdEpBDqUynFJPeSEvMZXOmM3NUD6RR9sD0IY38DcB51hoA/9kHI6u2p6qfiHqp+IedBQB0E6BoPZvLT83pUcDoqkk+WPvQRfsxEULevlz6hCrD5N5fxt8QOij0S/AAddCQwohENEYoThiEoxqU+2GAB5XuHQHnwy5WUuKKcG4qtGxfnYQU8+Ybm6cmnNoyy0kYvEDZpr3Hkvg8rOY4bnJ0Ar2ZhGrAAB1SNlbJe8nT5FIscOOSIFxLCPGjrXKOqi/o8HhdFNdxcHZtYPz6kdemqE5iU+/E5u25PYBroyicw4GHyjBGe6lCtbxLa/HHKmJCaQvVfiH+RQAD5iV+s64U+JuuxhJMDUiHuEdzrRJ8P53xpUFkaPin04BML80TpiTFjhtM1VKpTjfYO55jsrqs19Wcog/f0T7BvsFv3faL4u7j8YVJFcTREWjM80BYJMWZ0LJiwM/G76gtUpySvu91+8hJEiFqEswxDDneluzc7HSj3+qq6V1r4h9iZE4ff/mqu+ohZT9+YPO8BTBLd42k1QXkFNZzdYhL2Y9HLm9Sw0Dc3m70e35b67NIqAA6Bo/jkKlLYtdQcV9MoGIMPTTbq7I2CkCLe4ZVO8/ayEFIIeL4ysYOahfY/0wSoxU9WtWdpjfEl1Jvhyy4Rb6FuyGOKpu6IL83TMoZphWb6xG1u8xzh51YFA/nk6NwvAy03ecIVjlxT9WbuwdhcSCfpn9ggZEvVyYn/yHAACeggTj1pjaF54tOT4nf2VfghaCliU/5O/aidbgSR2LX9mEdf2YR1+dt4eETkh0CtubSqPQa0VAcxJGXJAfgccvROkZtY4fzZxEJixojPqXkvEbbxsdzhAJv8InentPz/tinptCeiE20ZlpqNadezrHa28X/CC46vIXEVNtV5Vnb0LipUOWeHNbm6OnkGreuZrUfWNlbQfCyBR74kCXS9IAe4I5LZ3iZgI/0W6cnx0aR3VOvAA/g9ufVKAN9vB0bMHUV/Fp6ELDUr0IWgBXXCE+4+iaS+q482tA3NOePpIzzRAxqtppatm6JoBrfTp1fFR2mM4BS0adQV6PAApLj5q4iFNhKpqLiuyaUmj4uOs/olCl1yXSrcsO2qOX7CwmVn568sg1yYubWlj7JsoXZWq4pIL5mJEa0HGR4rHbW+EaNOcupll5Wx7k21J1041yYubWlj7JsoXZWq4Z+BkiyqAKnPUI1yYubWm1/qRgF1NSPzTXjX4jDaGb5SVuhNFDG8PhqssOdSi1ZCPNP/pldO1WftOqcQY8jHUyqwLOxHyJysmJ8VnfCcfZKZ69ydTD0GLTqOyfF4tlPjA7k3yr1BvlXqDfKvUG+VeoN8rUdUFzLm67Fjt7gTsyT23p18uvPWpSETrpvn5OvGoGPQP0PmBM7n5vfsE7BHRj7ytSqnaik5l7xbBHgoJUC6zi3A1Ax3F7BMNv2CYdLGT/+zFAu3iYoF27RJnmorFKaC9F+PwXovx+C9F+PwXovx88FA++d0vlalVDwUDwAAAA"},99890:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/narrative-interaction-component-changingkeys-datatable-bacbf29505f5945221a95d8752a57700.webp"},55403:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/webp;base64,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"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);