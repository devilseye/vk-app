(this["webpackJsonpvk-app"]=this["webpackJsonpvk-app"]||[]).push([[0],{161:function(e,t,c){},162:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(53),a=c.n(s),r=c(37),i=c.n(r),o=c(62),d=c.n(o),j=c(65),h=c(59),b=c(35),l=c(48),p=c(27),u=(c(159),c(13)),O=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(u.jsxs)(p.i,{id:t,children:[Object(u.jsx)(p.j,{children:"VK Mini Test App"}),n&&Object(u.jsx)(p.g,{header:Object(u.jsx)(p.h,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(u.jsx)(p.e,{before:n.photo_200?Object(u.jsx)(p.c,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:"",children:"".concat(n.first_name," ").concat(n.last_name)})}),Object(u.jsx)(p.g,{header:Object(u.jsx)(p.h,{mode:"secondary",children:"Hello there"}),children:Object(u.jsx)(p.f,{children:Object(u.jsx)(p.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"Show me the Persik, please"})})})]})},f=c(45),x=c(46),m=c(51),g=c.p+"static/media/persik.ae9f0072.png",k=(c(161),function(e){return Object(u.jsxs)(f.a,{id:e.id,children:[Object(u.jsx)(x.a,{left:Object(u.jsx)(m.a,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(u.jsx)("img",{className:"Persik",src:g,alt:"Persik The Cat"})]})}),v=function(){var e=Object(n.useState)("home"),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),r=Object(h.a)(a,2),o=r[0],f=r[1],x=Object(n.useState)(Object(u.jsx)(l.a,{size:"large"})),m=Object(h.a)(x,2),g=m[0],v=m[1];Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,f(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var y=function(e){s(e.currentTarget.dataset.to)};return Object(u.jsx)(p.a,{children:Object(u.jsx)(p.b,{children:Object(u.jsxs)(b.a,{activePanel:c,popout:g,children:[Object(u.jsx)(O,{id:"home",fetchedUser:o,go:y}),Object(u.jsx)(k,{id:"persik",go:y})]})})})};i.a.send("VKWebAppInit"),a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.8b64b655.chunk.js.map