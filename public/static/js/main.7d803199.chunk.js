(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(24),o=n.n(c),i=n(9),r=n(4),s=n(1);var l=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("p",{children:"Meme Generator"})})};var j=function(e){var t=e.imgUrl,n=e.topText,a=e.bottomText,c=e.likes;return Object(s.jsxs)("div",{className:"meme",children:[Object(s.jsx)("img",{src:t,alt:""}),Object(s.jsx)("h2",{className:"top",children:n}),Object(s.jsx)("h2",{className:"bottom",children:a}),Object(s.jsx)("p",{children:c})]})},b=n(2);var d=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),l=Object(r.a)(i,2),d=l[0],u=l[1],h=Object(a.useState)("https://i.imgflip.com/1bij.jpg"),p=Object(r.a)(h,2),O=p[0],m=p[1],x=Object(a.useState)([]),g=Object(r.a)(x,2),f=g[0],v=g[1],y=Object(b.f)();function S(e){var t=e.target,n=t.name,a=t.value;"topText"===n?o(a):u(a)}return Object(a.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;v(n),console.log(e.PORT)}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{className:"meme-form",onSubmit:function(e){e.preventDefault();var t=Math.floor(Math.random()*f.length);f.map((function(e){if(e.url===f[t].url&&"112126428"===e.id||e.url===f[t].url&&"110163934"===e.id||e.url===f[t].url&&"21604248"===e.id||e.url===f[t].url&&"71428573"===e.id||e.url===f[t].url&&"17699"===e.id)return t+=1}));var n=f[t].url;m(n)},children:[Object(s.jsx)("input",{type:"text",name:"topText",placeholder:"Top Text",value:c,onChange:S}),Object(s.jsx)("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:d,onChange:S}),Object(s.jsx)("button",{children:"Gen"})]}),Object(s.jsx)(j,{imgUrl:O,topText:c,bottomText:d}),Object(s.jsx)("div",{children:e.loggedIn?Object(s.jsx)("button",{className:"meme-save",onClick:function(e){var t={topText:c,bottomText:d,imgUrl:O,likes:0},n=localStorage.getItem("token"),a={method:"POST",body:JSON.stringify(t),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}};fetch("/api/memes",a).then((function(e){return e.json()})).then((function(e){console.log(e),y.push("/Memes")}))},children:"Save"}):Object(s.jsx)("button",{className:"meme-save",disabled:!0,children:"Sign in to save"})})]})},u=n(28),h=n(18);var p,O,m,x,g,f,v,y=function(e){var t=Object(a.useState)([]),n=Object(r.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){fetch("/api/memes",{method:"GET",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e)}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("h2",{className:"",children:"Memes"})}),Object(s.jsx)("div",{className:"cards",children:c.map((function(e){return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)(j,{id:e.id,imgUrl:e.img_url,topText:e.top_text,bottomText:e.bottom_text}),Object(s.jsxs)("p",{onClick:function(){return t=e,c.forEach((function(e){if(e.id===t.id){e.likes++;var n={likes:e.likes},a=localStorage.getItem("token"),c={method:"PATCH",body:JSON.stringify(n),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}};fetch("/api/memes",c)}})),void o(Object(u.a)(c));var t},children:[Object(s.jsx)(h.b,{}),Object(s.jsx)("br",{}),e.likes]})]},e.id)}))})]})},S=n(10),w=n(8),T=n(11),C=T.a.nav(p||(p=Object(S.a)(["\n  background: #63D471;\n  height: 85px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.2rem calc((100vw - 1000px) / 2);\n  z-index: 12;\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]))),N=Object(T.a)(w.b)(O||(O=Object(S.a)(["\n  color: #808080;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #000000;\n  }\n"]))),k=(Object(T.a)(h.a)(m||(m=Object(S.a)(["\n  display: none;\n  color: #808080;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),T.a.div(x||(x=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"])))),I=T.a.nav(g||(g=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),A=Object(T.a)(w.b)(f||(f=Object(S.a)(["\n  border-radius: 4px;\n  background: #808080;\n  padding: 10px 22px;\n  color: #000000;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #808080;\n  }\n"]))),M=(Object(T.a)(w.b)(v||(v=Object(S.a)(["\n  border-radius: 4px;\n  background: #808080;\n  padding: 10px 22px;\n  color: #000000;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #808080;\n  }\n"]))),function(e){return e.loggedIn?Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(C,{children:[Object(s.jsxs)(k,{children:[Object(s.jsx)(N,{to:"/MemeGenerator",activeStyle:!0,children:"Meme Generator"}),Object(s.jsx)(N,{to:"/memes",activeStyle:!0,children:"Memes"})]}),Object(s.jsx)(I,{children:Object(s.jsx)(A,{onClick:function(){localStorage.clear(),e.setLoggedIn(!1)},to:"/sign-in",children:"Logout"})})]})}):Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(C,{children:[Object(s.jsx)(k,{}),Object(s.jsxs)(I,{children:[Object(s.jsx)(A,{to:"/sign-in",children:"Sign In"}),Object(s.jsx)(A,{to:"/sign-up",children:"Sign Up"})]})]})})}),P=function(){return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"Right",alignItems:"Right",height:"100vh"},children:Object(s.jsx)("h1",{children:'Meme Generator is where you create new and "surprising" memes'})})};var R=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),l=Object(r.a)(i,2),j=l[0],d=l[1],u=Object(a.useState)(""),h=Object(r.a)(u,2),p=h[0],O=h[1],m=Object(a.useState)(""),x=Object(r.a)(m,2),g=x[0],f=x[1],v=Object(a.useState)(""),y=Object(r.a)(v,2),S=y[0],w=y[1],T=Object(b.f)();function C(e){var t=e.target,n=t.name,a=t.value;"firstName"===n?o(a):"lastName"===n?d(a):"email"===n?O(a):"password"===n?f(a):"passwordConfirmation"===n&&w(a)}return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"Right",alignItems:"Right",height:"100vh"},children:Object(s.jsxs)("form",{className:"signup-form",onSubmit:function(e){e.preventDefault(),console.log("new user");var t={firstName:c,lastName:j,email:p,password:g,passwordConfirmation:S},n={method:"POST",body:JSON.stringify(t),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}};fetch("/api/users",n).then((function(e){return e.json()})).then((function(e){console.log(e),T.push("/sign-in")}))},children:[Object(s.jsx)("h1",{children:"Sign Up"}),Object(s.jsx)("input",{type:"text",name:"firstName",placeholder:"First Name",value:c,onChange:C}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"lastName",placeholder:"Last Name",value:j,onChange:C}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:p,onChange:C}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"password",placeholder:"Password",value:g,onChange:C}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"passwordConfirmation",placeholder:"Password Confirmation",value:S,onChange:C}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{children:"Create Account"})]})})};var G=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),l=Object(r.a)(i,2),j=l[0],d=l[1],u=Object(b.f)();function h(e){var t=e.target,n=t.name,a=t.value;"email"===n?o(a):d(a)}return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"Right",alignItems:"Right",height:"100vh"},children:Object(s.jsxs)("form",{className:"signup-form",onSubmit:function(t){t.preventDefault();var n={email:c,password:j},a={method:"POST",body:JSON.stringify(n),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"}};fetch("/api/sessions",a).then((function(e){return e.json()})).then((function(t){console.log(t),localStorage.setItem("token",t.jwt),e.setLoggedIn(!0),u.push("/MemeGenerator")}))},children:[Object(s.jsx)("h1",{children:"Sign In"}),Object(s.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:c,onChange:h}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"password",placeholder:"Password",value:j,onChange:h}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{children:"Sign In"})]})})},E=localStorage.getItem("token");var J=function(){var e=Object(a.useState)(E),t=Object(r.a)(e,2),n=t[0],c=t[1],o="http://localhost:3000";return console.log(n),Object(s.jsxs)(w.a,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(M,{loggedIn:n,setLoggedIn:c}),Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{path:"/",exact:!0,component:d}),Object(s.jsx)(b.a,{path:"/about",component:P}),Object(s.jsx)(b.a,{path:"/sign-up",render:function(e){return Object(s.jsx)(R,Object(i.a)(Object(i.a)({},e),{},{PORT:o}))}}),Object(s.jsx)(b.a,{path:"/sign-in",render:function(e){return Object(s.jsx)(G,Object(i.a)(Object(i.a)({},e),{},{setLoggedIn:c,PORT:o}))}}),Object(s.jsx)(b.a,{path:"/MemeGenerator",render:function(e){return Object(s.jsx)(d,Object(i.a)(Object(i.a)({},e),{},{loggedIn:n,PORT:o}))}}),Object(s.jsx)(b.a,{path:"/Memes",render:function(e){return Object(s.jsx)(y,Object(i.a)(Object(i.a)({},e),{},{PORT:o}))}})]})]})};n(40);o.a.render(Object(s.jsx)(J,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7d803199.chunk.js.map