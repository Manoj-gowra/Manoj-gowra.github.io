(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[2],{114:function(e,t,n){},115:function(e,t,n){},249:function(e,t,n){var c={"./hello.md":46};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=a,e.exports=r,r.id=249},250:function(e,t,n){var c={"./pinned/hello.md":46};function r(e){return Promise.resolve().then((function(){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n(c[e])}))}r.keys=function(){return Object.keys(c)},r.id=250,e.exports=r},256:function(e,t,n){var c={"./About/about.md":[106,0],"./contact/contact.md":[107,1],"./hello.md":[60],"./pinned/hello.md":[46],"./second.md":[61],"./third.md":[62]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(c)},r.id=256,e.exports=r},257:function(e,t,n){var c={"./hello.md":60,"./second.md":61,"./third.md":62};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=a,e.exports=r,r.id=257},258:function(e,t,n){var c={"./About/about.md":[106,0],"./contact/contact.md":[107,1],"./hello.md":[60],"./pinned/hello.md":[46],"./second.md":[61],"./third.md":[62]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(c)},r.id=258,e.exports=r},259:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(100),s=n.n(a),i=(n(114),n(27)),o=(n(115),n(14)),d=n(3),l=n(32),j=n.n(l),u=n(25),h=n(48),b=n(13),m=n(18),O=n.n(m),f=n(19),x=n(1),v=function(){var e=n(249).keys().reverse(),t=Object(c.useState)([]),r=Object(b.a)(t,2),a=r[0],s=r[1];return Object(c.useEffect)(Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s([]),t.next=3,e.map((function(e){n(250)("./pinned".concat(e.slice(1))).then((function(e){fetch("https://raw.githubusercontent.com/Manoj-gowra/react-testing/gh-pages/static/media/".concat(e.default.split("/").slice(-1)[0])).then((function(e){return e.text()})).then((function(e){return Object(f.a)(e)})).then((function(e){return s((function(t){return[].concat(Object(u.a)(t),[e])}))}))})).catch((function(e){return console.log(e)}))}));case 3:case"end":return t.stop()}}),t)}))),[]),Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:a.map((function(e,t){return Object(x.jsxs)("div",{className:"card",id:"carding",children:[Object(x.jsx)("div",{children:Object(x.jsx)(o.b,{to:"/Post/".concat(e.metadata.id),className:"post-title",children:Object(x.jsx)("h2",{className:"card-header",children:e.metadata.title})})}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("p",{className:"card-text",children:Object(x.jsx)(O.a,{children:e.content.split("\x3c!---more---\x3e")[0]})}),Object(x.jsx)(o.b,{to:"/Post/".concat(e.metadata.id),className:"post-ext",children:"Read More"})]})]},t)}))})})},p=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Home"}),Object(x.jsx)(v,{})]})},N=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),r=t[0],a=t[1];return Object(c.useEffect)((function(){n.e(0).then(n.bind(null,106)).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){return Object(f.a)(e)})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}))}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"About"}),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(O.a,{children:r.content})})]})},g=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),r=t[0],a=t[1];return Object(c.useEffect)((function(){n.e(1).then(n.bind(null,107)).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){return Object(f.a)(e)})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}))}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Contact"}),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(O.a,{children:r.content})})]})},w=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"404 Error"})})},k=n(276),y=n(273),E=n.p+"static/media/manoj_g.eb0f42b8.jpeg",P=Object(y.a)((function(e){return{large:{width:e.spacing(12),height:e.spacing(12)}}})),C=function(){var e=P();return Object(x.jsxs)("div",{children:[Object(x.jsx)("center",{id:"image",children:Object(x.jsx)(k.a,{src:E,alt:E,className:e.large})}),Object(x.jsx)("h1",{className:"ui header",children:"Manoj Gowra"})]})},D=function(e){var t=Object(c.useState)(),r=Object(b.a)(t,2),a=r[0],s=r[1],i=e.match.params.id;return Object(c.useEffect)((function(){n(256)("./".concat(i,".md")).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){return Object(f.a)(e)})).then((function(e){return s(e)}))}))}),[i]),Object(x.jsx)("div",{className:"post-card",children:a?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{className:"card-header",children:a.metadata.title}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsx)("p",{className:"card-text",children:Object(x.jsx)(O.a,{children:a.content.replace("\x3c!---more---\x3e","")})})})]}):Object(x.jsx)(x.Fragment,{children:"loading..."})})},F=function(){var e=n(257).keys().reverse(),t=Object(c.useState)([]),r=Object(b.a)(t,2),a=r[0],s=r[1];return Object(c.useEffect)(Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s([]),t.next=3,e.map((function(e){n(258)("./".concat(e.slice(2))).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){return Object(f.a)(e)})).then((function(e){return s((function(t){return[].concat(Object(u.a)(t),[e])}))}))})).catch((function(e){return console.log(e)}))}));case 3:case"end":return t.stop()}}),t)}))),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Projects"}),Object(x.jsx)("div",{children:a.map((function(e,t){return Object(x.jsxs)("div",{className:"card",id:"carding",children:[Object(x.jsx)("div",{children:Object(x.jsx)(o.b,{to:"/Post/".concat(e.metadata.id),className:"post-title",children:Object(x.jsx)("h3",{className:"card-header",children:e.metadata.title})})}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("p",{className:"card-text",children:Object(x.jsx)(O.a,{children:e.content.split("\x3c!---more---\x3e")[0]})}),Object(x.jsx)(o.b,{to:"/Post/".concat(e.metadata.id),className:"post-ext",children:"Read More"})]})]},t)}))})]})};var M=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(o.a,{children:Object(x.jsx)("div",{className:"container",id:"whole",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-2 ",children:Object(x.jsxs)("div",{className:"sidebar",children:[Object(x.jsx)(C,{}),Object(x.jsx)("ul",{className:"nav flex-md-column flex-lg-column flex-xxl-column flex-xl-column",children:Object(x.jsxs)("div",{id:"items",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{className:"button-side",children:Object(x.jsx)(o.b,{to:"/",className:"nav-link",children:"Home"})})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{className:"button-side",children:Object(x.jsx)(o.b,{to:"/Projects",className:"nav-link",children:"Projects"})})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{className:"button-side",children:Object(x.jsx)(o.b,{to:"/About",className:"nav-link",children:"About"})})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{className:"button-side",children:Object(x.jsx)(o.b,{to:"/Contact",className:"nav-link",children:"Contact"})})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{className:"button-side",children:Object(x.jsx)("a",{className:"nav-link",href:"http://github.com/Manoj-gowra",children:"Github"})})})]})})]})}),Object(x.jsx)("div",{className:"col-md-1"}),Object(x.jsx)("div",{className:"col-md-9 col-lg-9 col-xl-9 col-xxl-9 col-sm-12 ",children:Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/",exact:!0,component:p}),Object(x.jsx)(d.a,{path:"/About",exact:!0,component:N}),Object(x.jsx)(d.a,{path:"/Contact",exact:!0,component:g}),Object(x.jsx)(d.a,{path:"/Projects",exact:!0,component:F}),Object(x.jsx)(d.a,{exact:!0,path:"/Post/:id",render:function(e){return Object(x.jsx)(D,Object(i.a)({},e))}}),Object(x.jsx)(d.a,{component:w})]})})]})})})})},_=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,278)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root")),_()},46:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/hello.e9caa70c.md"},60:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/hello.e9caa70c.md"},61:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/second.382d5674.md"},62:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/third.0094f4ad.md"}},[[259,3,4]]]);
//# sourceMappingURL=main.0463bbb7.chunk.js.map