(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{17:function(e,n,t){e.exports=t.p+"static/media/Gameplay.f1767473.PNG"},28:function(e,n,t){e.exports=t.p+"static/media/Menu.b468186a.PNG"},30:function(e,n,t){e.exports=t(45)},35:function(e,n,t){},36:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(24),l=t.n(i),o=(t(35),t(36),t(37),t(6)),c=t(10),m=t(11),s=t(13),u=t(12),d=t(7);function p(){var e=Object(o.a)([" {\n    .caption {\n        text-align: center;\n    }\n    .thumbnail {\n        text-align: center;\n    }\n\n    img {\n        width: 42em;\n        padding: 3em;\n    }\n\n    h3 {\n        padding: 0.4em 0em;\n        color: var(--whites);\n    }\n}"]);return p=function(){return e},e}var f=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(v,{className:"col-md-6 col-sm-12 col-lg-6"},r.a.createElement("div",null,r.a.createElement("div",{className:"thumbnail"},r.a.createElement("img",{src:this.props.src,alt:"..."}),r.a.createElement("div",{className:"caption"},r.a.createElement("h3",null,this.props.caption)))))}}]),t}(a.Component),v=d.a.div(p()),g=t(28),b=t.n(g),h=t(17),E=t.n(h);function x(){var e=Object(o.a)([" {\n    p {\n        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n        font-color: var(--whites);\n        font-size: 1.5em;\n    }\n    \n    .content {\n        padding: 4em 5em;\n    }\n\n    .summary {\n        color: var(--whites);\n        padding: 4em 4em 1em 4em;\n        text-align: center;\n    }\n\n    .row {\n    }\n}"]);return x=function(){return e},e}var y=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"summary col-md-12 col-sm-12 "},r.a.createElement("p",null," The Raged Knight is an action-paced bow tower defense game currently under development"),r.a.createElement("p",null," Here you can check out weekly screenshots and updates.")),r.a.createElement(f,{src:b.a,caption:"Main Menu on 8-9"}),r.a.createElement(f,{src:E.a,caption:"Level 1 Snapshot on 8-9"}))))}}]),t}(a.Component),N=d.a.header(x()),w=y,k=t(19),O=t.n(k),S=t(29);function j(){var e=Object(o.a)([" {\n    \n    p {\n        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n        font-size: 1.5em;\n    }\n\n    #notification {\n        margin-top: -3em;\n        font-size: 1em;\n    }\n\n    #email {\n        border: 1px solid #ccc; \n        border-radius: 15px 0px 0px 15px;\n    }\n\n    .btn {\n        border: 1px solid btn-primary; \n        border-radius: 0px 15px 15px 0px;\n        margin-left: 0px;\n        margin-up: -5px;\n    }\n\n    img {\n        width: 50em;\n        margin: 2em;\n    }\n\n    .container-fluid {\n        color: var(--whites);\n        text-align: center;\n    }\n\n    btn {\n        margin-left: 1.2em;\n        width: 4em;\n    }\n\n    form {        \n        margin: 3em auto 4em auto;\n    }\n\n    .input-group {\n        width: 23em;\n        text-align: center;\n    }\n}"]);return j=function(){return e},e}var C=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(G,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("img",{src:E.a,alt:"..."}),r.a.createElement("p",null,"Coming to Android (and likely IOS) devices sometime in 2020"),r.a.createElement("p",null,"Join our mailing list to wishlist the game."),r.a.createElement("form",null,r.a.createElement("div",{className:"input-group container-fluid"},r.a.createElement("input",{id:"email",type:"text",className:"form-control",name:"email",placeholder:"Email"}),r.a.createElement("button",{onClick:M,className:"btn btn-primary bg-primary"},"Join"))),r.a.createElement("p",{id:"notification"},"(You'll be notified of its release.)")))}}]),t}(a.Component);function M(e){return T.apply(this,arguments)}function T(){return(T=Object(S.a)(O.a.mark((function e(n){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t=document.getElementById("email").value.toString(),a={email:t},fetch("/email",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){document.getElementById("notification").textContent=e}))})).catch((function(e){document.getElementById("notification").textContent="Error. Check your internet connection."}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=d.a.header(j());function B(){var e=Object(o.a)([" {\n.main-footer {\n    margin-top: 2em;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n }\n \n .footer-middle {\n   background: var(--darkPurples);\n   color: var(--whites);\n   font-weight: 430;\n   text-align: center;\n }\n \n .footer-bottom {\n   padding: 2em 0em 1em 0em;\n   text-align: center;\n }\n \n .text-sx-left {\n   font-size: 1.2em;\n   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n }\n}"]);return B=function(){return e},e}function P(){return r.a.createElement(z,null,r.a.createElement("div",{className:"main-footer"},r.a.createElement("div",{className:"footer-middle"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer-bottom"},r.a.createElement("p",{className:"text-sx-left"},"\xa9 ",(new Date).getFullYear()," Rage Knight - All Rights"))))))}var z=d.a.div(B()),I=t(8);function J(){var e=Object(o.a)([" {\n    .navbar {\n      background-color: var(--darkPurples);\n    }\n\n    ul {\n        width: 32em;\n    }\n\n    a {\n        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n        font-size: 1.5em;\n    }\n\n\n}"]);return J=function(){return e},e}function R(){return r.a.createElement(L,null,r.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-lg"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto container"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(I.b,{onClick:function(e){return A(e.target)},className:"nav-link",to:"/"},"Home ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(I.b,{onClick:function(e){return A(e.target)},className:"nav-link",to:"/posts"},"Posts")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(I.b,{onClick:function(e){return A(e.target)},className:"nav-link",to:"/requests"},"Requests"))))))}function A(e){for(var n=document.getElementsByClassName("nav-item"),t=0;t<n.length;t++)n[t].classList.remove("active");e.parentElement.classList.add("active")}var L=d.a.nav(J()),q=t(1);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null),r.a.createElement(q.c,null,r.a.createElement(q.a,{exact:!0,path:"/",component:C}),r.a.createElement(q.a,{path:"/posts",component:w})),r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.10d5ceea.chunk.js.map