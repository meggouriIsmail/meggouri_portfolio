(this.webpackJsonpmeggo_portfolio=this.webpackJsonpmeggo_portfolio||[]).push([[0],{13:function(e,t,s){},17:function(e,t,s){},18:function(e){e.exports=JSON.parse('[{"id":1,"img":"/assets/images/weathApp.jpeg","url":"https://meggouriismail.github.io/Weathering_Me/","name":"Weather Website","techs":"React / NodeJs"},{"id":2,"img":"/assets/images/movieApp.jpeg","url":"https://the-smily-movie-app.herokuapp.com","name":"Movie Website","techs":"Javascripy / NodeJs"},{"id":3,"img":"/assets/icons/int1S.png","url":"https://github.com/meggouriIsmail/Gestion-Relative-Humidity","name":"Humidity Application","techs":"Bootstrap / ASP.Net Core"},{"id":4,"img":"/assets/icons/int2F.png","url":"https://github.com/BRAAMSIF/Administration","name":"Administration App","techs":"Bunifo / C# WinForms"}]')},19:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(7),n=s.n(i),o=(s(13),s(8)),l=s.n(o),r=s(0),j=function(){return Object(r.jsxs)("section",{className:"form-section",id:"contact",children:[Object(r.jsx)("h1",{className:"title",children:"Contact Me"}),Object(r.jsx)("div",{className:"form-bloc",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.a.sendForm("service_hf36b55","template_7u0jdqr",e.target,"user_2BiEFUsiuNSWJjvX8J1fz").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(r.jsxs)("div",{className:"contact-info",children:[Object(r.jsx)("input",{type:"text",className:"form__input",placeholder:" ",name:"name"}),Object(r.jsx)("label",{htmlFor:"",className:"form__label",children:"your name"})]}),Object(r.jsxs)("div",{className:"contact-info",children:[Object(r.jsx)("input",{type:"text",className:"form__input",placeholder:" ",name:"email"}),Object(r.jsx)("label",{htmlFor:"",className:"form__label",children:"your email"})]}),Object(r.jsxs)("div",{className:"subject",children:[Object(r.jsx)("input",{type:"text",className:"form__input",placeholder:" ",name:"subject"}),Object(r.jsx)("label",{htmlFor:"",className:"form__label",children:"subject"})]}),Object(r.jsxs)("div",{className:"contact-msg",children:[Object(r.jsx)("textarea",{className:"form__textarea",placeholder:" ",name:"message"}),Object(r.jsx)("label",{htmlFor:"",className:"form__label1",children:"message"})]}),Object(r.jsx)("button",{type:"submit",value:"Send",className:"send-btn",children:Object(r.jsx)("img",{src:"".concat("/meggouri_portfolio","/assets/icons/paper_plane_28px.png"),alt:"Send"})})]})})]})},m=function(){return Object(r.jsxs)("section",{className:"education-section",children:[Object(r.jsx)("h1",{className:"title",children:"Education"}),Object(r.jsxs)("div",{className:"bloc",children:[Object(r.jsxs)("div",{className:"bac-bloc",children:[Object(r.jsx)("img",{src:"".concat("/meggouri_portfolio","/assets/icons/medal_96px.png"),alt:"diploma"}),Object(r.jsx)("p",{children:"Baccaloriat"}),Object(r.jsx)("p",{children:"2017 / 2018"})]}),Object(r.jsxs)("div",{className:"ista-bloc",children:[Object(r.jsx)("img",{src:"".concat("/meggouri_portfolio","/assets/icons/certificate_96px.png"),alt:"diploma"}),Object(r.jsx)("p",{children:"CS Deplomat"}),Object(r.jsx)("p",{children:"2019 / 2021"})]})]})]})},b=s(2),d=s(3),g=s(5),h=s(4),u=function(e){Object(g.a)(s,e);var t=Object(h.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=document.querySelector(".typed-text"),t=document.querySelector(".cursor"),s=[" MEGGOURI ISMAIL"," a Full Stack Developer"],c=0,a=0;function i(){a<s[c].length?(t.classList.contains("typing")||t.classList.add("typing"),e.textContent+=s[c].charAt(a),a++,setTimeout(i,200)):(t.classList.remove("typing"),setTimeout(n,2e3))}function n(){a>0?(t.classList.contains("typing")||t.classList.add("typing"),e.textContent=s[c].substring(0,a-1),a--,setTimeout(n,100)):(t.classList.remove("typing"),++c>=s.length&&(c=0),setTimeout(i,1300))}s.length&&setTimeout(i,2250)}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"name",children:Object(r.jsxs)("h1",{className:"fullName",children:["I Am",Object(r.jsx)("span",{className:"typed-text"}),Object(r.jsx)("span",{className:"cursor",children:"\xa0"})]})})}}]),s}(a.a.Component),p=function(e){Object(g.a)(s,e);var t=Object(h.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=document.querySelector(".nav-links"),t=document.querySelector(".navbar"),s=document.querySelector(".humburbr");s.addEventListener("click",(function(){e.classList.toggle("nav-links-active"),s.classList.toggle("toggle"),e.classList.add("nav-links-display"),document.querySelectorAll(".link").forEach((function(t){t.addEventListener("click",(function(){e.classList.remove("nav-links-active"),s.classList.remove("toggle")}))}))})),window.addEventListener("scroll",(function(){window.scrollY>20?t.classList.add("navbar-bg"):t.classList.remove("navbar-bg")}))}},{key:"render",value:function(){return Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"nav-container",children:[Object(r.jsx)("a",{className:"logo",href:"#about",children:"Meggo"}),Object(r.jsx)("div",{className:"nav-links",children:Object(r.jsxs)("ul",{className:"links",children:[Object(r.jsx)("li",{className:"link",children:Object(r.jsx)("a",{href:"#about",children:"About"})}),Object(r.jsx)("li",{className:"link",children:Object(r.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(r.jsx)("li",{className:"link",children:Object(r.jsx)("a",{href:"#contact",children:"Contact"})})]})}),Object(r.jsxs)("div",{className:"humburbr",children:[Object(r.jsx)("div",{className:"toogle toogle1"}),Object(r.jsx)("div",{className:"toogle toogle2"}),Object(r.jsx)("div",{className:"toogle toogle3"})]})]})})}}]),s}(a.a.Component),x=(s(17),function(){return Object(r.jsxs)("section",{className:"hero",id:"about",children:[Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)("h2",{className:"profile",children:"\ud83c\udd7c\ud83c\udd74\ud83c\udd76\ud83c\udd76\ud83c\udd7e\ud83c\udd84\ud83c\udd81\ud83c\udd78 \ud83c\udd78\ud83c\udd82\ud83c\udd7c\ud83c\udd70\ud83c\udd78\ud83c\udd7b"}),Object(r.jsx)("img",{src:"".concat("/meggouri_portfolio","/assets/images/alsoMee.jpeg"),alt:"avatar",className:"avatar"})]}),Object(r.jsx)(p,{}),Object(r.jsx)(u,{})]})}),O=function(){var e=s(18);return Object(r.jsxs)("section",{className:"portfolio-section",id:"portfolio",children:[Object(r.jsx)("h1",{className:"title",children:"Potfolio"}),Object(r.jsx)("div",{className:"projects",children:e.map((function(e){return Object(r.jsxs)("div",{className:"project",children:[Object(r.jsx)("img",{src:"/meggouri_portfolio"+e.img,className:"img",alt:e.name}),Object(r.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("div",{className:"overlay",children:Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)("h2",{children:e.name}),Object(r.jsx)("em",{children:e.techs})]})})})]},e.id)}))})]})},f=function(){return Object(r.jsxs)("footer",{children:[Object(r.jsxs)("div",{className:"social",children:[Object(r.jsxs)("p",{children:["Connect socially with ",Object(r.jsx)("span",{className:"logo-footer",children:" Meggo "})]}),Object(r.jsxs)("div",{className:"social-media",children:[Object(r.jsx)("a",{href:"https://ma.linkedin.com/in/ismail-meggouri-7437a71b4",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:"".concat("/meggouri_portfolio","/assets/icons/linkedin_64px.png"),className:"fa",alt:"linkedin"})}),Object(r.jsx)("a",{href:"https://www.instagram.com/ismail_meggouri/?hl=en",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:"".concat("/meggouri_portfolio","/assets/icons/instagram_64px.png"),className:"fa",alt:"instagram"})}),Object(r.jsx)("a",{href:"https://www.facebook.com/el.meggo",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:"".concat("/meggouri_portfolio","/assets/icons/facebook_64px.png"),className:"fa",alt:"facebook"})}),Object(r.jsx)("a",{href:"https://github.com/meggouriIsmail",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:"".concat("/meggouri_portfolio","/assets/icons/github_64px.png"),className:"fa",alt:"github"})})]}),Object(r.jsx)("img",{src:"".concat("/meggouri_portfolio","/assets/icons/Portfolio_Logo_sm.png"),className:"footer-logo",alt:"Meggo"})]}),Object(r.jsx)("div",{className:"nav-bottom",children:Object(r.jsxs)("h3",{className:"copy-right",children:["Copyright \xa9 ",Object(r.jsx)("span",{className:"logo-footer",children:" Meggo "}),"2021"]})})]})};var v=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{}),Object(r.jsx)(m,{}),Object(r.jsx)(O,{}),Object(r.jsx)(j,{}),Object(r.jsx)(f,{})]})};n.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9cb58c54.chunk.js.map