"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[6772],{90475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=r(74848),n=r(28453);const i={sidebar_label:"Dialogue Sequence"},d="Dialogue Sequence",c={id:"pro/dialogue/dialogue-sequence/index",title:"Dialogue Sequence",description:"Encapsulates a Level Sequence, along with all extra data needed to play that level sequence in the context of a dialogue",source:"@site/docs/pro/dialogue/dialogue-sequence/index.md",sourceDirName:"pro/dialogue/dialogue-sequence",slug:"/pro/dialogue/dialogue-sequence/",permalink:"/pro/dialogue/dialogue-sequence/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Dialogue Sequence"},sidebar:"tutorialSidebar",previous:{title:"Orientation",permalink:"/pro/dialogue/dialogue-nodes/orientation"},next:{title:"Shots",permalink:"/pro/dialogue/dialogue-sequence/shots"}},o={},l=[{value:"Shots",id:"shots",level:2},{value:"Properties",id:"properties",level:2}];function a(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"dialogue-sequence",children:"Dialogue Sequence"})}),"\n",(0,s.jsx)(t.p,{children:"Encapsulates a Level Sequence, along with all extra data needed to play that level sequence in the context of a dialogue"}),"\n",(0,s.jsx)(t.h2,{id:"shots",children:"Shots"}),"\n",(0,s.jsxs)(t.p,{children:["Narrative comes packaged with many ",(0,s.jsx)(t.a,{href:"/pro/dialogue/dialogue-sequence/shots",children:"built-in shots"})," for you to use."]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FriendlyShotName"}),(0,s.jsx)(t.td,{children:"FText"}),(0,s.jsx)(t.td,{children:"A dev friendly name."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SequenceAssets"}),(0,s.jsx)(t.td,{children:"TArray<ULevelSequence>"}),(0,s.jsx)(t.td,{children:"The sequences to use - one will be selected at random."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PlaybackSettings"}),(0,s.jsx)(t.td,{children:"FMovieSceneSequencePlaybackSettings"}),(0,s.jsx)(t.td,{children:"Controls the playback settings for the sequence."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CropSettings"}),(0,s.jsx)(t.td,{children:"FPlateCropSettings"}),(0,s.jsx)(t.td,{children:"Controls the crop settings."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bShouldRestart"}),(0,s.jsx)(t.td,{children:"uint32"}),(0,s.jsx)(t.td,{children:"If narrative tries playing this sequence but it already started playing it from an earlier node, should we restart the shot or just let the existing one continue?"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AnchorOriginRule"}),(0,s.jsx)(t.td,{children:"EAnchorOriginRule"}),(0,s.jsx)(t.td,{children:"Sequence origin will be relative to the selected item."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AnchorOriginNudge"}),(0,s.jsx)(t.td,{children:"FVector"}),(0,s.jsx)(t.td,{children:"Allows you to nudge the shot upwards, downwards, etc. Extra offset applied to shot transform. Applied in speakers transform space."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AnchorRotationRule"}),(0,s.jsx)(t.td,{children:"EAnchorRotationRule"}),(0,s.jsx)(t.td,{children:"Sequence rotation will be relative to the selected item."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AnchorAvatarCustomID"}),(0,s.jsx)(t.td,{children:"FName"}),(0,s.jsx)(t.td,{children:"If AnchorAvatar is custom, this is the ID of the avatar to use as the override."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bUse180DegreeRule"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Force the player and all other speakers to be on opposite sides of the screen using Y-axis movement and Yaw."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"UnitsY180DegreeRule"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"If using 180 degree rule, how many degrees of yaw to push the shots in either direction."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DegreesYaw180DegreeRule"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"If using 180 degree rule, how many degrees of yaw to push the shots in either direction."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LookAtTrackingSettings"}),(0,s.jsx)(t.td,{children:"FShotTrackingSettings"}),(0,s.jsx)(t.td,{children:"What avatar should the camera track on if this is enabled."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FocusTrackingSettings"}),(0,s.jsx)(t.td,{children:"FShotTrackingSettings"}),(0,s.jsx)(t.td,{children:"What avatar should the camera focus on if this is enabled."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bDrawDebugFocusPoint"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"If true, the camera will draw a box showing the focus point."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Speaker"}),(0,s.jsx)(t.td,{children:"TWeakObjectPtr<AActor>"}),(0,s.jsx)(t.td,{children:"The speaker actor for the dialogue sequence."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Listener"}),(0,s.jsx)(t.td,{children:"TWeakObjectPtr<AActor>"}),(0,s.jsx)(t.td,{children:"The listener actor for the dialogue sequence."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AnchorActor"}),(0,s.jsx)(t.td,{children:"TWeakObjectPtr<AActor>"}),(0,s.jsx)(t.td,{children:"The anchor actor for the sequence."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LookAtActor"}),(0,s.jsx)(t.td,{children:"TWeakObjectPtr<AActor>"}),(0,s.jsx)(t.td,{children:"The actor to look at for the sequence."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FocusActor"}),(0,s.jsx)(t.td,{children:"TWeakObjectPtr<AActor>"}),(0,s.jsx)(t.td,{children:"The actor to focus on for the sequence."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SequenceActor"}),(0,s.jsx)(t.td,{children:"TWeakObjectPtr<ALevelSequenceActor>"}),(0,s.jsx)(t.td,{children:"The sequence actor associated with this dialogue sequence."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cinecam"}),(0,s.jsx)(t.td,{children:"TWeakObjectPtr<ACineCameraActor>"}),(0,s.jsx)(t.td,{children:"The cinecam spawned in by the sequence."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Dialogue"}),(0,s.jsxs)(t.td,{children:["TWeakObjectPtr",(0,s.jsx)(t.a,{href:"/pro/dialogue/dialogue-sequence/",children:"UDialogue"})]}),(0,s.jsx)(t.td,{children:"The dialogue object associated with this sequence."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var s=r(96540);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);