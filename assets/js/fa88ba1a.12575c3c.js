"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[61],{80031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(74848),o=n(28453);const s={sidebar_label:"Custom Dialogue Shots",sidebar_position:1},a="Custom Dialogue Shots",r={id:"pro/dialogue/dialogue-sequence/custom-dialogue-shots",title:"Custom Dialogue Shots",description:"Narrative provides a bunch of dialogue shots you can use to get the shot you want.",source:"@site/docs/pro/dialogue/dialogue-sequence/custom-dialogue-shots.md",sourceDirName:"pro/dialogue/dialogue-sequence",slug:"/pro/dialogue/dialogue-sequence/custom-dialogue-shots",permalink:"/narrative-documentation/pro/dialogue/dialogue-sequence/custom-dialogue-shots",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Custom Dialogue Shots",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Shots",permalink:"/narrative-documentation/pro/dialogue/dialogue-sequence/shots"},next:{title:"Functions",permalink:"/narrative-documentation/pro/dialogue/functions"}},u={},d=[{value:"Level Sequence Asset",id:"level-sequence-asset",level:2},{value:"Named binding error / warning",id:"named-binding-error--warning",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"custom-dialogue-shots",children:"Custom Dialogue Shots"})}),"\n",(0,i.jsxs)(t.p,{children:["Narrative provides a ",(0,i.jsx)(t.a,{href:"/narrative-documentation/pro/dialogue/dialogue-sequence/shots",children:"bunch of dialogue shots"})," you can use to get the shot you want."]}),"\n",(0,i.jsx)(t.p,{children:"However, sometimes this just won\u2019t work for your needs. You may need something specific or different. This is where the power of the sequencer comes in."}),"\n",(0,i.jsx)(t.p,{children:"You can add your own custom sequences to get the exact shot you want."}),"\n",(0,i.jsx)(t.h2,{id:"level-sequence-asset",children:"Level Sequence Asset"}),"\n",(0,i.jsx)(t.p,{children:"This shot is used when you want to use a custom sequence asset you have created. Really useful for cutscene-based dialogue."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"shots-level-sequence-asset.webp",src:n(92075).A+"",width:"615",height:"181"})}),"\n",(0,i.jsx)(t.h2,{id:"named-binding-error--warning",children:"Named binding error / warning"}),"\n",(0,i.jsx)(t.p,{children:"When creating your own custom shots, if you have a camera within the shot it's common to receive a warning regarding a named binding."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Warning: Attempted to find a named binding that did not exist [Dialogue Name]"})}),"\n",(0,i.jsx)(t.p,{children:"This is easily resolved by right-clicking on your Cinecam in the sequencer, and adding a tag of:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ini",children:"Cinecam\n"})}),"\n",(0,i.jsx)(t.p,{children:"This tag is important as it allows Narrative to locate the correct camera and add any specific features, aim it in the right location and apply any transitions required."})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},92075:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/webp;base64,UklGRu4VAABXRUJQVlA4IOIVAACwdgCdASpnArUAPm00lkkkIqIkIZDJiIANiWlu/CPl5V9Ed2JdADwZ+sn9b/Hzwg/tv5SeePiO8t/sH7O8rzrDzM/lH2G/P+Vv+i8R/fN/D/bt8gv5F/Kf814oP9F3Ducf6X/D+oR64/K/+F/evDU/t/Qb8s/rf+s9wD+M/0f/Vfbx81f4DwYe9v99/ivxy+wD+df1X/Q/37/LftT9J/8L/2v8t+YXtZ/Pv8N/1/8x/o/kF/nP9b/7H947Un7W////2/C7+zf/5ENHvtryR9LyRsHuJLFl4ZfctFpNO1j5s/ifVHC7DvpvIRvlU8e9DHhmr/Eo7U9yC/W+UmRetNv2ajMZvPAREBIScS2xQ1HE00UmZ0Emdfn8qTn8yrln2l9pHjb3RjFJzwr99ncbawqhB+GssuPHeen3+SVMwAH+baCpSOIuqSCrSN/Pcs9GX3hY9fst8L5VyK23qI7VqmC978ucTlXPwnzCx+KGr9WbqijuOHNpX2FJ+LILvhMDzvqjqLlIC8T3YPUhJ9gzO9AH9kmmiQPWnnLEbLwzC7fw+5BMhRoDuJG9l4VHtfyddbMNjHdwo2SxD4SzLkuhWo1eAIgJGyiBG+6jhv4fdXm7I2D3Eliy8Mwu38FDgDIHqTPMyw9v0oSmZNtOeg3WpCdoQ5YrdtHKss11Qi8kbB6IF3tdXgFEvJi3U08F9IEP6DXUYotW3SM6NcoiB8QyfKYbGjOcnyApCjDgQ2IdC9Xm/IBLtTFSBdGwe4kKbr6Z+bJbml4/JGwe4hR/HjZ79EC5c2Yhc1zKS8Jo/PnwM42we4ksTYVhrXUf+4A0oYsnX7ozE+45unyV8nUMTtjPJBwzB1soqAyQQi/7kp96xu/j9ykrMGN7nV0pXij6LkmWtAUN/HsMS/qz1qbO501k1fEZZ7tdRAHyTWRIn6+eKgjzAN+nEDFJHvDVwiyS7eSjEN6Ezw9gO1XkWXhmFX4PsvK3TP0HW8CInkQAGi7VM4fFgq2RyB+a3m7G9BD1Q3IWAwDZm1Vb3ocd56fzbDrc3UOcMs6BqzYYnn54nDtSSA+zlxJJNJ7Mw6rrGblQswKpWPsaWNRbxuLn58hsyUE6qUuacqaHQ9rG72acCgtVwPASHLaPSljDZB1Y6qowNaaNcpj3XGpMvCVxlalkNSwFhPFh6KZmaHNDodi8BGswshQ/LxfcHuJLFl37yA0wRLeBS+kSBpTxMmc3y2y60aKlVEPQs/P4fdXm7Ix3G8biSxZeGYXb+CeN3rG71jd6xuqAAP65eMtGwu0ASAJyb0MXqujNajNB5JZJOaDKuqEfuL5Q8zzdrvbJj9/wPlMQlcRBV8UcAMh75ttg1cFlNiXWa8elmYGU+AHY6YmsJWDek3lK/aW+cgMbkkIgTNdQTaq/xqGlI2cC+CarnzOV43I9FZiKhqfdSv3luzLUgCpvmE+jptqsbNXAy9r97rQuke1jWvK3doESYGJ4o8H5qWjN91Na+3XmH5ZgfkDeGvQl0iKUvJu07HRbLOwV2KbENAP+7uCpEUR8BebqDzdaDU+g7y0B/zzR6DFsQtLF+ztGW6nalWkmzAkp3MLnIe4tLxAfWMe7SOtBVgmYrO5/Lin7J9yfLCWHS0EHGPePI4mSbR/tWAxsczKKzeD/1522YAgbgRfdTjG516ClyGqanpqJPlpsdTe4JtOKgb9TgfQnJ0PtKDEdnALbOH2BqTwFCxrTZOC7IsCpu0VzhbNt4KYBxd4hvS7pks7IzGMr+VCbKEgfH27/QdoGtR4QI8KWSYS6HaYgCXkIP4jdDsd97oIVFmgvOUwvViZjW8NbO0tchP7Rl1OFHHVBaf2xCVbm1t/zSSdlA1p6Iu20DZCNlswUeROrvDR54jUPWc6mKwAji1AJ5wDUxPOzO2TYXxm6L/FNkRs9HY5vrLkxr2fe2F+puKjJJHAQb8Iob+OVT8J41QNrZnU6dstKOwrm3NQckDo8CRcRmIQvFqsedeu1KeL9vSx4ku/jxYaeW9p72OimHx/14pUtZDOw8Rj42qY2LwjTj3gQHQx2D3S9Nsbqe1BXABbgNyySLkzofEhOpnuOVRaBRkKWQ4czFAmfO/glAR6oTuBJlzfOoJzQMV+aZq1cUn/XF+S/eITLhCKnjQ+wr1h3m9MwMSF5g7Hx1DDY6dX/aa6M/vrv52btZ3WA9untebaGI+UUttjX3gQ6JrH3XVtgq/hkFqSJARixmmGpf7ieo8w41RRmVYfeyOAskxnCpT1/+/5N6XWR7jJUUTwwijokb/2pStorO9qqLBXpLVhdwuxWkr3nv/Eh79DmO0IYWQ+T4RHb/+CGBO2g86KXsZby2FwzkgF0jNpt1kbTW38d1QrB/mLoOUMxlBCoZCJwT5YPxIzwuiB2pR8jHUuilWCh8M/V3zp9FpW/gj6z2Pux7yOwcy1VlD4d+A5bZ44Tzni8mdWImrQatUEUusWSHuWX0RMxRo+ErZ3471lV+2G59kuW0o4yMlT2OhPpp0769U6DwoTyNyczPFHmBQIjgSaWQ8nmv4pO9R8PtIK3lI14ZLeRUx41NC0ElRTN0pVgvwr3VfTrL9weUE5fino7uFjMCIHmcG1t9A50cWKQCuZVojlGAuVoe9Eg1BU2rJSkWU9mfw1vOVPmLOFeEvg6Spchsmq/Widfl4SBg2LibKLD4KFG9J2jkBXWqPHDyu1tMngPKfE2wam3Z/WhNNKHNFEK8zTPUMxaeffJ8AkRo8682mRbGart/8E0SucNLGzYnrJB/Lur/sPtqcbWiZt1lxWXiLv7rIh3khiQW+CJSDDJZ+0NULQ/W9v0LrkcwziXb+5SVaxoF4WLNNDtuYva3DM/WMo4noFkBXFXPvZv7dvmBbqlTn9U9uTGyF0BuNM+6OpXlJD2bksnj9iESTJBA6v3vd85C/UiP4+2IRQ1l4wAXp2E3OhXNJYaxpUqfiiO1Y0P0FX2dcpiTldFFiDqmISuaQvLWxtdfyqToMl3sYk83Et1vVBtsfBzRiGmyWZ/jIZEv/iroZ5e37S7o0oC9qK4BWe1p14Mp9vhxpZDAPNFRLvHm4VqWxj7MJQzFyhvSB7MZRwLCqYXkiejJOYVJMO90i0W8kfaeEFLrsuUbj/vipMTTnL1lXwiQJ2FiHm/3ABwgZ4wJpRBWRAPyVQFVN7IPNwr+Xez6p66LXkSCfbXGyAfKnYxL3NvQmnE53I36tdr0wvAzOoXMyuT6jFfbN2X4ii27iIcTKRm9XrkELalMMf3nr2i12vYpvwik3BpSJbFooucIALRaTQOkfGgCEDLKPlR1JEue+GfKoC/IvpfTqeJ3PDkbDmypR1pFIGP6KzGobUGR5LWDlN7yCbhG4yLa2QV8tQDg8tk5UvzIazEI4g3mTw62DxZr2paHJBk5I99avEvQEe0kC0V2RxhguHmfFq1BF9EeXMopdGtcd0dB9tEYhzwPI/K/vEHNePlvQZ3+1gY+4eW4sUiOiNHnX/1DTyA+OHeEtTSthNdxObFpvT2nJ9AKd+mINegW+P4oQSEmS7C6dbqe4BRSHeDAYMwiSTrhI67a2f134Z5QdLHNCo5s45kDp4fyE+L5OBiGEVzdir15/NthtjRWtCeCtOQpBlVSXOpnSGXEH8HaNlC6u9oScSuCu+eQ9mCSc0UJdLOhSoSoUGgSsmTseWkTBHxkwA7flvNK2HZpBbWrZwPLqN1msAZvxVT4mZvJsAp/MwuGNG9j3BelTGZaE21MakNKDq801rdwKaA9fE/0jCB+g0zuBxKJHJG0mIr411sP/6IU7A/WEHuDSK3fU07JMczeHsYCq9MX0zbdK1SGtdlHpG6AnMOwHGKP8NmjElJ16piHrW7Kfg5EZQAEk1yTDXk+lYdJ+oT9UDTEVGOVBpTvcUnMKBO8Mq1ORkxM3wjYltL3xRIwPU9IlnQZ3+1gY+yIJ2zzqID23UGud1HLqMYbLtf9Xyk4gDhcwc407E3C8iTSB0Wox+GE2zWKq7CBh8/XnwtB6U7CCkUQRD6vEJYfUyZ95Xe6pUYcxf/F6xbP9FXlCnzZOSCUti73fHlUdvBpX7TfVXNa11cBP2fQZ0WZgQWL+Gt6PnWM6SSNuiAxODstD4eup8bdPQ35k6JuCDKNOMFwxSMymTh5zBuKiq62W07/QDpaOQOTGa9RRYFZ3PeYgIPVev3h5E6PMSS+eKjm9BOeUlkym8POye8QtGD6OE84aa3mtGtRaSR8fRfSlwRUEBV3q42m4CYl/7X0bWbCbM9v1RIYmVCCQ+KaZ55tzlojg9WlJIO9rxJi76PH5JS5gmeOqys60LOJ/KKu2rODXOItMCMPwFU7ha0AKf0hi2V2KwzHjbN0Q3C/siU+DR5cD8MWs0srKpYS1JicXgigRjHC3dvnXtfPYwoMkDmvPAMJRLuqGhQxIQ5cZxdDD/Lsldp3O/lZ0lrNGV7OOlVVjoCMVjyUbxkCOd64cPNxBNsYeXtbne5NA1asx7wpwqNMRq0LPhpNMTFDsIau4q5E5+29M3jNFIngBYFPembBJ/ci81hkjlhpkXX+AXJ/BZu/99ViN1JxCxf10rQN5/Cn+1fXynmbvckho8Kfs8BZtnCwOgzmQKYkVPpX3x2HO4eQ2CtmxV5QJp4gAt50TW33TUI1+gNWbckAwrUEGb1Qv7piy2ePAJffyKN7HymVkhegrd5AXHvHLTwidjpNXbLcPM3Ba7qhOnG87iN2CahwOkCC7lLuwUxBDQfqo+bpC7s3IkflnKgWECJJ4FrCoslylREn3bALxRTUbmXp+L8QC/okBAQU2UU3VzfXriDu9cvPUUdXuDzVB4cfM/KPZrW7PHNhDpkPq9OqbIudov1jCtCPRhnzWdqUxf+puRPajdzLO3tGn7UwA/jz4FBXfi+WDjyN7Xd+PlBlkyK9Yq9TD/16FqP0TuIoRpLzCPvtJ4ttMopuMVwiZ7D/anZnSXNLmtlz0z69snSVSWcgB4QeUxpr3Ew4u7H9CSGL5EvhtUETrvfYtTYrRz/1/L+sEGKv4WN3n/wY9m/u66uXRifPIPnlJlJZuSoStTCN3+rI+Vy+G9S5cEBhDG/BnIUv7G1s5nhvyJjLuDQ/A0EMnUPtCRLBZdz3PJgO0IuDNF6ADNMseCF3DS29OkNlQ5mPlq/oRDlsf1p8/gvIoxpLEvBOvgypnbDLAv9yGSo/tDUPMuZTcz70Wh/5VbBXNm81CvvUQAlsE8nUQ0bCudTPAsouupqd6VkNr/Y1W++typBKu82OUakSpr1Mc0IWMu21bsbvEIDSZP7QVEqBDF+m7/c23VHU1Lsy7/1dI4rj2PTRSE6DwT80HMrCIEiJoTJmSAz3fgzTPokDIUP8qNofaN+v0tWfXrPs8ofq8Ru6tULfkNVcIYULOpF8IEMz3M65ho10XNOuI+2bQSgM10ZeWNIDDw0RWQJ9yi7yR5Vh4iS7zN+F40gIXBfqdVrQwD333X8orDxGTk225bixSLlEjNSYNKCcAjoRZUI+jhPAcqzobSOmrIrykBIwr61lEnZhRGX0t9hgT4xPTxI/ZzC/6MH2MTeZ+z4AYtaYSEoIX3CRW14itDFWhigQEFIw7/kP41Cy0rRUPUIeZJ2LAD0bL6WUDBneFGUTmYdxVmZkOiyJ9sBsk/OrdMdzxtVpPOX2WR3W5cM+hsr2UcqpFvumuw2JviI78Ld2F0DXXS2W5XYOt22QXJM6nFfuFRDs7BFQYvvHnXkOcrhrPWVF7xP0UeaP8eO3F532HZoxmjvLuWk6tznX1CsH+IUr8rneNHc5xi/EW27sLoHSg2R8LGuSRTAQvu2Z7EPqwfvOJ6jZgrTZUOA6gXUZ1d0ecrdJ8W4+v8y1QwoKM5zF8n7yW3DFrX6DCuvaXCglZcX7/XCqk4ZptiakycSV4pjPB6meR4qtm3JqlYuzTGFuUFU3tJ+PtYBctBUnNppqlDB3LXx7NzTuq+T5EIU8xyIqDl3QMgF1Y7ekHIxCYOkD/aGVmWNgbht27n0PlLEpeGlyL9HVkq2rwdRFbV8IyR70yfAmSh2ghcGoCEmeiGja/5XBKQcV9nN3+lkbcd2vXM1SW/Yx6nV6JHZyvmX3XNWaP8nOYmKVRpHtN/mplwbHKz62ZKcQW6JqltVaD1xXFr8dBUV2d3e6ZKCiPXgp0S26SGhcDCqWfJ4L2lYZKoFsuT7iPHABYIH2J5Z+VrTMFTSzwdQh0MAISAUBPl3SzuS0xqBzWbyRf+Mh1mfv3d0GlHD8qrEts61vP/FOnf/DAALZgLIIi7CK9ESn3OGn3epasqxXV+t+UEjyssDVtL2KfBPSpa2FjruVEzwfJTQmR0lT/mZ8/t7uPF2ymiydncOPByIzMg25cEALif2bX91sh7mGSongrpyLQTgdVGyGwBzM/tmPgmFX9gt3/KwST5GcuZ2LL/FmK1jJVgwDgkmeMJKNBtue8bgtduwBuQQHNLzuibVrkjAi0tbvdpdf29KR4WbxHlLKau7BAn4BCUzJH9i47PoAr7i8nTC26jOKZShtlcKxcEH4/PdwASypyThoLmr9xI3xKxnOH/ZsPFaJJxRgt+oIm1PILAzdyhuYZK3Np4XbsF3nTHNSLyY9JBzIDC520lS1AVKtIdWFP4TqzMtUG3XwFNLC91wjjEKASMIoDDvxNQeEPdKlKSeZ+1x3+fwHrVbS7AvhU4ucChrCKHVZlcUBYQ0p2GYHB8ob2N2jWSzB1RrtmUxiezBEiZEIWRPxnAmtsJItEE1ohYfcJou4txg5YD7HPaeFbcjwwuqeLsOQnGhEugCp4IZIXcoSthQzsx8DRiRH+RKea1vJG+8GIXVToMszxR0pQmhKPLn/eUDTh5dmOP7ZaxrgyRbxygVLZ42/dAqZ1RRlB79NwvA3fVFe3yqHUwTqE+bgCqz+ROi826M6W+lJG19NCWktOQLgbmval6WXRE8XU3yhLUsZDg/D+YmchGbSEWzjKLKtUrnwn007LKoYbYycyu5fQH7dhqgbwUZ9E8ciOGJtsCjaQM7N8VVGcNJpoSASP76NF8669BhttChJxkmt2+lee5IoWQDlN3o90nLBmidxoD9eEEki97eFinaR4Edtfse0DyyMvJFwB0OgPSm4yO236oI75AsQiD654UWcFReKng520h5tpv3nGa0gdRdEjx4kPvHdraZ1dvfHZr50IXtaV4KH0siARaO1UnTVICAABHqsH+gCfkDgX6ACZ7S8dSP0PUPCq9nETiRweYdv55aM/7CA7gB75qUewC2sq8ARvVJZI4g3CKa8N4LgtNQPFIBiaonPVhzPn0jT6MilfzH7aMCQDdsYO+fCcXPtfT1c16naVLzett/hbnm+A9PvLKicUID70emd5N0m87BYrh+Js2JW5YpDABAkpQskZ2a60992GQ7TOnX9rUCdXsBQJAONvHQYCCP/gHiBy+ghvJPkOzQkg4Zh3wAAAAA"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);