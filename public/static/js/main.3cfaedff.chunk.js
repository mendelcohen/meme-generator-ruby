(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(24),o=n.n(c),i=n(16),s=n(4),r=n(1);var l=function(){return Object(r.jsx)("header",{children:Object(r.jsx)("p",{children:"Meme Generator"})})};var j=function(e){var t=e.imgUrl,n=e.topText,a=e.bottomText,c=e.likes;return Object(r.jsxs)("div",{className:"meme",children:[Object(r.jsx)("img",{src:t,alt:""}),Object(r.jsx)("h2",{className:"top",children:n}),Object(r.jsx)("h2",{className:"bottom",children:a}),Object(r.jsx)("p",{children:c})]})},b=n(2);var d=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),d=l[0],h=l[1],u=Object(a.useState)("http://i.imgflip.com/1bij.jpg"),p=Object(s.a)(u,2),m=p[0],O=p[1],x=Object(a.useState)([]),g=Object(s.a)(x,2),f=g[0],v=g[1],y=Object(b.f)();function S(e){var t=e.target,n=t.name,a=t.value;"topText"===n?o(a):h(a)}return Object(a.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){var t=e.data.memes;v(t)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{className:"meme-form",onSubmit:function(e){e.preventDefault();var t=Math.floor(Math.random()*f.length),n=f[t].url;O(n)},children:[Object(r.jsx)("input",{type:"text",name:"topText",placeholder:"Top Text",value:c,onChange:S}),Object(r.jsx)("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:d,onChange:S}),Object(r.jsx)("button",{children:"Gen"})]}),Object(r.jsx)(j,{imgUrl:m,topText:c,bottomText:d}),Object(r.jsx)("div",{children:e.loggedIn?Object(r.jsx)("button",{className:"meme-save",onClick:function(e){var t={topText:c,bottomText:d,imgUrl:m,likes:0},n=localStorage.getItem("token"),a={method:"POST",body:JSON.stringify(t),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}};fetch("/api/memes",a).then((function(e){return e.json()})).then((function(e){console.log(e),y.push("/Memes")}))},children:"Save"}):Object(r.jsx)("button",{className:"meme-save",disabled:!0,children:"Sign in to save"})})]})},h=n(28),u=n(18);var p,m,O,x,g,f,v,y=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("http://localhost:3000/api/memes").then((function(e){return e.json()})).then((function(e){console.log(e),c(e)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("h2",{className:"",children:"Memes"})}),Object(r.jsx)("div",{className:"cards",children:n.map((function(e){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)(j,{id:e.id,imgUrl:e.img_url,topText:e.top_text,bottomText:e.bottom_text}),Object(r.jsxs)("p",{onClick:function(){return t=e,n.forEach((function(e){if(e.id===t.id){e.likes++;var n={likes:e.likes},a=localStorage.getItem("token"),c={method:"PATCH",body:JSON.stringify(n),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}};fetch("/api/memes/".concat(e.id),c)}})),void c(Object(h.a)(n));var t},children:[Object(r.jsx)(u.b,{}),Object(r.jsx)("br",{}),e.likes]})]},e.id)}))})]})},S=n(9),w=n(8),C=n(10),N=C.a.nav(p||(p=Object(S.a)(["\n  background: #63D471;\n  height: 85px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.2rem calc((100vw - 1000px) / 2);\n  z-index: 12;\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]))),T=Object(C.a)(w.b)(m||(m=Object(S.a)(["\n  color: #808080;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #000000;\n  }\n"]))),k=(Object(C.a)(u.a)(O||(O=Object(S.a)(["\n  display: none;\n  color: #808080;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),C.a.div(x||(x=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"])))),I=C.a.nav(g||(g=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),A=Object(C.a)(w.b)(f||(f=Object(S.a)(["\n  border-radius: 4px;\n  background: #808080;\n  padding: 10px 22px;\n  color: #000000;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #808080;\n  }\n"]))),M=(Object(C.a)(w.b)(v||(v=Object(S.a)(["\n  border-radius: 4px;\n  background: #808080;\n  padding: 10px 22px;\n  color: #000000;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #808080;\n  }\n"]))),function(e){return e.loggedIn?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(N,{children:[Object(r.jsxs)(k,{children:[Object(r.jsx)(T,{to:"/MemeGenerator",activeStyle:!0,children:"Meme Generator"}),Object(r.jsx)(T,{to:"/memes",activeStyle:!0,children:"Memes"})]}),Object(r.jsx)(I,{children:Object(r.jsx)(A,{onClick:function(){localStorage.clear(),e.setLoggedIn(!1)},to:"/sign-in",children:"Logout"})})]})}):Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(N,{children:[Object(r.jsx)(k,{}),Object(r.jsxs)(I,{children:[Object(r.jsx)(A,{to:"/sign-in",children:"Sign In"}),Object(r.jsx)(A,{to:"/sign-up",children:"Sign Up"})]})]})})}),G=function(){return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"Right",alignItems:"Right",height:"100vh"},children:Object(r.jsx)("h1",{children:'Meme Generator is where you create new and "surprising" memes'})})};var P=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],j=i[1],d=Object(a.useState)(""),h=Object(s.a)(d,2),u=h[0],p=h[1],m=Object(a.useState)(""),O=Object(s.a)(m,2),x=O[0],g=O[1],f=Object(a.useState)(""),v=Object(s.a)(f,2),y=v[0],S=v[1],w=Object(b.f)();function C(e){var t=e.target,n=t.name,a=t.value;"firstName"===n?c(a):"lastName"===n?j(a):"email"===n?p(a):"password"===n?g(a):"passwordConfirmation"===n&&S(a)}return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"Right",alignItems:"Right",height:"100vh"},children:Object(r.jsxs)("form",{className:"signup-form",onSubmit:function(e){e.preventDefault(),console.log("new user");var t={firstName:n,lastName:l,email:u,password:x,passwordConfirmation:y},a={method:"POST",body:JSON.stringify(t),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}};fetch("/api/users",a).then((function(e){return e.json()})).then((function(e){console.log(e),w.push("/sign-in")}))},children:[Object(r.jsx)("h1",{children:"Sign Up"}),Object(r.jsx)("input",{type:"text",name:"firstName",placeholder:"First Name",value:n,onChange:C}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"lastName",placeholder:"Last Name",value:l,onChange:C}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:u,onChange:C}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"password",placeholder:"Password",value:x,onChange:C}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"passwordConfirmation",placeholder:"Password Confirmation",value:y,onChange:C}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Create Account"})]})})};var E=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),j=l[0],d=l[1],h=Object(b.f)();function u(e){var t=e.target,n=t.name,a=t.value;"email"===n?o(a):d(a)}return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"Right",alignItems:"Right",height:"100vh"},children:Object(r.jsxs)("form",{className:"signup-form",onSubmit:function(t){t.preventDefault();var n={email:c,password:j},a={method:"POST",body:JSON.stringify(n),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}};fetch("/api/sessions",a).then((function(e){return e.json()})).then((function(t){localStorage.setItem("token",t.jwt),e.setLoggedIn(!0),h.push("/MemeGenerator")}))},children:[Object(r.jsx)("h1",{children:"Sign In"}),Object(r.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:c,onChange:u}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"password",placeholder:"Password",value:j,onChange:u}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Sign In"})]})})},J=localStorage.getItem("token");var L=function(){var e=Object(a.useState)(J),t=Object(s.a)(e,2),n=t[0],c=t[1];return console.log(n),Object(r.jsxs)(w.a,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(M,{loggedIn:n,setLoggedIn:c}),Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{path:"/",exact:!0,component:d}),Object(r.jsx)(b.a,{path:"/about",component:G}),Object(r.jsx)(b.a,{path:"/sign-up",component:P}),Object(r.jsx)(b.a,{path:"/sign-in",render:function(e){return Object(r.jsx)(E,Object(i.a)(Object(i.a)({},e),{},{setLoggedIn:c}))}}),Object(r.jsx)(b.a,{path:"/MemeGenerator",render:function(e){return Object(r.jsx)(d,Object(i.a)(Object(i.a)({},e),{},{loggedIn:n}))}}),Object(r.jsx)(b.a,{path:"/Memes",component:y})]})]})};n(40);o.a.render(Object(r.jsx)(L,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.3cfaedff.chunk.js.map