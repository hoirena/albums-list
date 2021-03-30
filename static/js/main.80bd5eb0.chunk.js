(this["webpackJsonpalbums-list"]=this["webpackJsonpalbums-list"]||[]).push([[0],{34:function(t,e,c){},36:function(t,e,c){},56:function(t,e,c){},65:function(t,e,c){},66:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),s=c(27),r=c.n(s),i=(c(34),c(10)),o=c.n(i),l=c(13),u=c(7),j=c(3),b={development:{baseURL:"http://localhost:3004"},production:{baseURL:"https://my-json-server.typicode.com/hoirena/albums-list"}},h=(c(36),c(1)),d=function(t){var e=t.title,c=t.setSearch;return Object(h.jsx)("header",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:e}),c?Object(h.jsx)("div",{className:"search-wrapper",children:Object(h.jsx)("input",{type:"text",placeholder:"Search",onKeyDown:function(t){if("Enter"===t.key){var e=t.target.value.toLowerCase();c(e)}}})}):null]})})},f=c(8),p=c(28),O=b.production,m=c.n(p).a.create({baseURL:O.baseURL}),x=(c(56),function(t){var e=t.album,c=t.author,a=Object(n.useState)(e.favorite),s=Object(u.a)(a,2),r=s[0],i=s[1],o=new Date(e.releaseDate),l=r?"Remove favorite":"Mark as favorite",d=r?"active":"",p=b.production;Object(j.e)();return Object(h.jsxs)("article",{children:[Object(h.jsxs)("div",{className:"album-wrapper",children:[Object(h.jsx)("img",{src:e.imageUrl,alt:"tmp"}),Object(h.jsxs)("div",{className:"name-wrapper",children:[Object(h.jsx)("h2",{children:Object(h.jsx)("cite",{children:e.title})}),Object(h.jsxs)("address",{className:"gray-text",rel:"author",children:[Object(h.jsx)(f.b,{to:"".concat("/albums-list","/artist/")+c.id,children:c.title}),Object(h.jsx)("a",{href:"".concat("/albums-list","/artist/")+c.id,children:"lalala"})]})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"gray-text",children:"Released: "}),o.getFullYear()]}),Object(h.jsx)("div",{children:e.price}),Object(h.jsx)("div",{className:"mark-as-favorit ".concat(d),onClick:function(){console.log("------------ "+"".concat(p.baseURL,"/albums/").concat(e.id,"; current favorite="),r),m.patch("".concat(p.baseURL,"/albums/").concat(e.id),{favorite:!r}),i(!r)},children:l})]})});var v=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)([]),r=Object(u.a)(s,2),i=r[0],f=r[1],p=Object(n.useState)(""),O=Object(u.a)(p,2),m=O[0],v=O[1],g=b.production,L=[],w=Object(j.e)();function R(){return(R=Object(l.a)(o.a.mark((function t(){var e,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("".concat(g.baseURL,"/artists/")),t.next=3,fetch("".concat(g.baseURL,"/artists/")).then((function(t){return t.json()}));case 3:return e=t.sent,t.next=6,fetch("".concat(g.baseURL,"/albums/")).then((function(t){return t.json()}));case 6:c=t.sent,a(c),f(e);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(Object(n.useEffect)((function(){!function(){R.apply(this,arguments)}()}),[m]),"?limit="===w.search.substr(0,7)){var y=w.search.match(/=([0-9]+)$/);L=y?c.slice(0,y[1]):c.slice(0,10)}else L=c.slice(0,10);if(m){for(var U=[],S=0;S<L.length;S++)L[S].title.toLowerCase().includes(m)&&U.push(L[S]);L=U}var k=L.map((function(t,e){var c=i.find((function(e){return e.id===t.artistId}));return Object(h.jsx)(x,{album:t,author:c,env:g},e)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{title:"Albums list",setSearch:v}),c.length?null:Object(h.jsx)("p",{children:"Loading albums..."}),i.length?k:null]})};var g=function(){var t=Object(j.f)().id,e=parseInt(t),c=Object(n.useState)([]),a=Object(u.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)({}),f=Object(u.a)(i,2),p=f[0],O=f[1],m=b.production;function v(){return(v=Object(l.a)(o.a.mark((function t(){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m.baseURL,"/artists/").concat(e)).then((function(t){return t.json()}));case 2:return c=t.sent,t.next=5,fetch("".concat(m.baseURL,"/albums/")).then((function(t){return t.json()}));case 5:n=t.sent,r(n),O(c);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g=s.map((function(t,c){return t.artistId===e?Object(h.jsx)(x,{album:t,author:p},c):null}));return Object(n.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{title:p.title}),s.length?null:Object(h.jsx)("p",{children:"Loading author's albums..."}),g]})};c(65);var L=function(){return console.log("------------...>","".concat("/albums-list","/")),Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(j.a,{path:"".concat("/albums-list","/"),exact:!0,component:v}),Object(h.jsx)(j.a,{path:"".concat("/albums-list","/artist/:id"),exact:!0,component:g})]})},w=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),s(t),r(t)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f.a,{children:Object(h.jsx)(L,{})})}),document.getElementById("root")),w()}},[[66,1,2]]]);
//# sourceMappingURL=main.80bd5eb0.chunk.js.map