(this["webpackJsonpslack-frontend"]=this["webpackJsonpslack-frontend"]||[]).push([[0],{115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},119:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(2),s=c.n(a),i=c(29),r=c.n(i),j=(c(85),c(16)),l=(c(86),c(87),c(60)),o=c.n(l),d=c(61),h=c.n(d),b=c(62),u=c.n(b),O=c(138),m=Object(a.createContext)(),x=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(n.jsx)(m.Provider,{value:Object(a.useReducer)(t,c),children:s})},p=function(){return Object(a.useContext)(m)};var v=function(){var e=p(),t=Object(j.a)(e,1)[0].user;return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsxs)("div",{className:"header_left",children:[Object(n.jsx)(O.a,{className:"header_avatar",src:null===t||void 0===t?void 0:t.photoURL,alt:null===t||void 0===t?void 0:t.displayName,style:{marginRight:"10px"}}),null===t||void 0===t?void 0:t.displayName,Object(n.jsx)(o.a,{})]}),Object(n.jsxs)("div",{className:"header_search",children:[Object(n.jsx)(h.a,{}),Object(n.jsx)("input",{placeholder:"write here"})]}),Object(n.jsx)("div",{className:"header_right",children:Object(n.jsx)(u.a,{})})]})},g=(c(92),c(64)),f=c.n(g),N=c(65),_=c.n(N),I=(c(93),c(9)),S=c(37),C=(S.a.initializeApp({apiKey:"AIzaSyBKs29gRgn9hFhU5Kl8t_WTNyLHvy8M4UI",authDomain:"slack-clone-ece34.firebaseapp.com",projectId:"slack-clone-ece34",storageBucket:"slack-clone-ece34.appspot.com",messagingSenderId:"56487654053",appId:"1:56487654053:web:60afa419dc39528a7d534c",measurementId:"G-2HSHJLBBKE"}).firestore(),S.a.auth()),k=new S.a.auth.GoogleAuthProvider,w=c(63),y=c.n(w).a.create({baseURL:"http://localhost:9000"});var L=function(e){var t=e.Icon,c=e.title,a=e.addChannelOption,s=e.id,i=Object(I.f)();return Object(n.jsxs)("div",{className:"sidebarOption",onClick:a?function(){var e=prompt("Please enter the channel name");e&&y.post("/new/channel",{channelName:e})}:function(){s&&i.push("/room/".concat(s))},children:[t&&Object(n.jsx)(t,{className:"sidebarOption__icon"}),t?Object(n.jsx)("h3",{children:c}):Object(n.jsxs)("h3",{className:"sidebarOption__channel",children:[Object(n.jsx)("span",{className:"sidebarOption__hash",children:"#"}),c]})]})},P=c(66),R=c.n(P),B=c(67),D=c.n(B),E=c(68),F=c.n(E),U=c(69),T=c.n(U),A=c(70),K=c.n(A),M=c(71),G=c.n(M),H=c(72),J=c.n(H),W=c(73),z=c.n(W),q=c(74),Q=c.n(q),V=c(75),X=c.n(V);var Y=function(){var e=p(),t=Object(j.a)(e,1)[0].user,c=Object(a.useState)([]),s=Object(j.a)(c,2),i=s[0],r=s[1];return Object(a.useEffect)((function(){y.get("/get/channelList").then((function(e){r(e.data)}))}),[]),Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsxs)("div",{className:"sidebar__header",children:[Object(n.jsx)("div",{className:"sidebar__info",children:Object(n.jsxs)("h3",{children:[Object(n.jsx)(f.a,{}),null===t||void 0===t?void 0:t.displayName]})}),Object(n.jsx)(_.a,{})]}),Object(n.jsx)(L,{Icon:R.a,title:"Threads"}),Object(n.jsx)(L,{Icon:D.a,title:"Mention & reaction"}),Object(n.jsx)(L,{Icon:F.a,title:"Saved items"}),Object(n.jsx)(L,{Icon:T.a,title:"Channel browser"}),Object(n.jsx)(L,{Icon:K.a,title:"People & user groups"}),Object(n.jsx)(L,{Icon:G.a,title:"Apps"}),Object(n.jsx)(L,{Icon:J.a,title:"File Browser"}),Object(n.jsx)(L,{Icon:z.a,title:"Show less"}),Object(n.jsx)("hr",{}),Object(n.jsx)(L,{Icon:Q.a,title:"Channel"}),Object(n.jsx)("hr",{}),Object(n.jsx)(L,{Icon:X.a,addChannelOption:!0,title:"Add Channel"}),i.map((function(e){return Object(n.jsx)(L,{title:e.name,id:e.id})}))]})},Z=c(40),$=(c(115),c(135)),ee=c(136);c(116);var te=function(e){var t=e.message,c=e.timestamp,a=e.user,s=e.userImage;return Object(n.jsxs)("div",{className:"message",children:[Object(n.jsx)("img",{src:s,alt:""}),Object(n.jsxs)("div",{className:"message__info",children:[Object(n.jsxs)("h4",{children:[a," ",Object(n.jsx)("span",{className:"message__timestamp",children:new Date(parseInt(c)).toUTCString()})]}),Object(n.jsx)("p",{children:t})]})]})};c(117);var ce=function(e){var t=e.channelName,c=e.channelId,s=Object(a.useState)(""),i=Object(j.a)(s,2),r=i[0],l=i[1],o=p(),d=Object(j.a)(o,1)[0].user;return Object(n.jsx)("div",{className:"chatInput",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{value:r,onChange:function(e){return l(e.target.value)},placeholder:"Message #".concat(null===t||void 0===t?void 0:t.toLowerCase())}),Object(n.jsx)("button",{type:"sumbit",onClick:function(e){e.preventDefault(),c&&y.post("/new/message?id=".concat(c),{message:r,timestamp:Date.now(),user:d.displayName,userImage:d.photoURL}),l("")},children:"SEND"})]})})};var ne=function(){var e=Object(I.g)().roomId,t=Object(a.useState)(null),c=Object(j.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)([]),l=Object(j.a)(r,2),o=l[0],d=l[1];return Object(a.useEffect)((function(){e&&y.get("/get/conversation?id=".concat(e)).then((function(e){i(e.data[0].channelName),d(e.data[0].conversation)}))}),[e]),Object(n.jsxs)("div",{className:"chat",children:[Object(n.jsxs)("div",{className:"chat__header",children:[Object(n.jsx)("div",{className:"chat__headerLeft",children:Object(n.jsxs)("h4",{className:"chat__channelName",children:[Object(n.jsxs)("strong",{children:[" # ",s," "]}),Object(n.jsx)($.a,{})]})}),Object(n.jsx)("div",{className:"chat__headerRight",children:Object(n.jsxs)("p",{children:[Object(n.jsx)(ee.a,{})," Details"]})})]}),Object(n.jsx)("div",{className:"chat__messages",children:o.map((function(e){var t=e.message,c=e.timestamp,a=e.user,s=e.userImage;return Object(n.jsx)(te,{message:t,timestamp:c,user:a,userImage:s})}))}),Object(n.jsx)(ce,{channelName:s,channelId:e})]})},ae=(c(118),c(137)),se=c(47),ie="SET_USER",re=function(e,t){switch(console.log(t),t.type){case ie:return Object(se.a)(Object(se.a)({},e),{},{user:t.user});default:return e}},je=function(){var e=p(),t=Object(j.a)(e,2),c=(t[0],t[1]);return Object(n.jsx)("div",{className:"login",children:Object(n.jsxs)("div",{className:"login__container",children:[Object(n.jsx)("img",{src:"https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",alt:""}),Object(n.jsx)("h1",{children:"Sign in to Clever Programmer"}),Object(n.jsx)("p",{children:"cleverprogrammer.slack.com"}),Object(n.jsx)(ae.a,{onClick:function(){C.signInWithPopup(k).then((function(e){c({type:ie,user:e.user})})).catch((function(e){alert(e.message)}))},children:"Sign in with Google"})]})})};var le=function(){var e=p(),t=Object(j.a)(e,2),c=t[0].user;return t[1],Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(Z.a,{children:c?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(v,{}),Object(n.jsxs)("div",{className:"app_body",children:[Object(n.jsx)(Y,{}),Object(n.jsxs)(I.c,{children:[Object(n.jsx)(I.a,{path:"/room/:roomId",children:Object(n.jsx)(ne,{})}),Object(n.jsx)(I.a,{path:"/",children:Object(n.jsx)("h1",{children:"Welcome"})})]})]})]}):Object(n.jsx)(je,{})})})},oe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,139)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x,{initialState:{user:null},reducer:re,children:Object(n.jsx)(le,{})})}),document.getElementById("root")),oe()},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){}},[[119,1,2]]]);
//# sourceMappingURL=main.0e603e8b.chunk.js.map