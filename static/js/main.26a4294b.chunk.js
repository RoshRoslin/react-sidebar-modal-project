(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.2bb7da65.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),o=(a(10),a(2)),i=l.a.createContext(),u=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(o.a)(a,2),r=c[0],u=c[1],m=Object(n.useState)(!1),s=Object(o.a)(m,2),d=s[0],E=s[1];return l.a.createElement(i.Provider,{value:{isModalOpen:d,isSidebarOpen:r,openModal:function(){E(!0)},openSidebar:function(){u(!0)},closeModal:function(){E(!1)},closeSidebar:function(){u(!1)}}},t)},m=function(){return Object(n.useContext)(i)},s=a(1),d=function(){var e=m(),t=e.isModalOpen,a=e.closeModal;return l.a.createElement("div",{className:"".concat(t?"modal-overlay show-modal ":"modal-overlay")},l.a.createElement("div",{className:"modal-container"},l.a.createElement("h3",null,"Modal Content"),l.a.createElement("button",{className:"close-modal-btn",onClick:a},l.a.createElement(s.i,null))))},E=(a(11),[{id:1,url:"/",text:"home",icon:l.a.createElement(s.f,null)},{id:2,url:"/team",text:"team",icon:l.a.createElement(s.k,null)},{id:3,url:"/projects",text:"projects",icon:l.a.createElement(s.e,null)},{id:4,url:"/calendar",text:"calendar",icon:l.a.createElement(s.c,null)},{id:5,url:"/documents",text:"documents",icon:l.a.createElement(s.l,null)}]),b=[{id:1,url:"https://www.twitter.com",icon:l.a.createElement(s.d,null)},{id:2,url:"https://www.twitter.com",icon:l.a.createElement(s.j,null)},{id:3,url:"https://www.twitter.com",icon:l.a.createElement(s.g,null)},{id:4,url:"https://www.twitter.com",icon:l.a.createElement(s.b,null)},{id:5,url:"https://www.twitter.com",icon:l.a.createElement(s.h,null)}],p=function(){var e=m(),t=e.isSidebarOpen,a=e.closeSidebar;return l.a.createElement("aside",{className:"".concat(t?"sidebar show-sidebar":"sidebar")},l.a.createElement("div",{className:"sidebar-header"},l.a.createElement("button",{className:"close-btn",onClick:a},l.a.createElement(s.i,null))),l.a.createElement("ul",{className:"links"},E.map((function(e){var t=e.id,a=e.url,n=e.text,c=e.icon;return l.a.createElement("li",{key:t},l.a.createElement("a",{href:a},c,n))}))),l.a.createElement("ul",{className:"social-icons"},b.map((function(e){var t=e.id,a=e.url,n=e.icon;return l.a.createElement("li",{key:t},l.a.createElement("a",{href:a},n))}))))},w=function(){var e=m(),t=e.openSidebar,a=e.openModal;return l.a.createElement("main",null,l.a.createElement("button",{className:"sidebar-toggle",onClick:t},l.a.createElement(s.a,null)),l.a.createElement("button",{className:"btn",onClick:a},"Show Modal"))};var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,null),l.a.createElement(d,null),l.a.createElement(p,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null,l.a.createElement(f,null))),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.26a4294b.chunk.js.map