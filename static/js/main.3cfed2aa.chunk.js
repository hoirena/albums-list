(this["webpackJsonpalbums-list"]=this["webpackJsonpalbums-list"]||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},55:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(26),s=n.n(r),i=(n(33),n(11)),o=n.n(i),u=n(13),l=n(8),j=n(2),b={development:{baseURL:"http://localhost:3004"},production:{baseURL:"https://my-json-server.typicode.com/hoirena/albums-list"}},h=(n(35),n(1)),d=function(e){var t=e.title,n=e.setSearch;return Object(h.jsx)("header",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:t}),n?Object(h.jsx)("div",{className:"search-wrapper",children:Object(h.jsx)("input",{type:"text",placeholder:"Search",onKeyDown:function(e){if("Enter"===e.key){var t=e.target.value.toLowerCase();n(t)}}})}):null]})})},f=n(10),p=n(27),O=b.production,x=n.n(p).a.create({baseURL:O.baseURL}),m=(n(55),function(e){var t=e.album,n=e.author,a=Object(c.useState)(t.favorite),r=Object(l.a)(a,2),s=r[0],i=r[1],o=new Date(t.releaseDate),u=s?"Remove favorite":"Mark as favorite",j=s?"active":"",d=b.production;return Object(h.jsxs)("article",{children:[Object(h.jsxs)("div",{className:"album-wrapper",children:[Object(h.jsx)("img",{src:t.imageUrl,alt:"tmp"}),Object(h.jsxs)("div",{className:"name-wrapper",children:[Object(h.jsx)("h2",{children:Object(h.jsx)("cite",{children:t.title})}),Object(h.jsx)("address",{className:"gray-text",rel:"author",children:Object(h.jsx)(f.b,{to:"/artist/"+n.id,children:n.title})})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"gray-text",children:"Released: "}),o.getFullYear()]}),Object(h.jsx)("div",{children:t.price}),Object(h.jsx)("div",{className:"mark-as-favorit ".concat(j),onClick:function(){x.patch("".concat(d.baseURL,"/albums/").concat(t.id),{favorite:!s}),i(!s)},children:u})]})});var v=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(l.a)(r,2),i=s[0],f=s[1],p=Object(c.useState)(""),O=Object(l.a)(p,2),x=O[0],v=O[1],g=b.production,L=[],w=Object(j.e)();function y(){return(y=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("".concat(g.baseURL,"/artists/")),e.next=3,fetch("".concat(g.baseURL,"/artists/")).then((function(e){return e.json()}));case 3:return t=e.sent,e.next=6,fetch("".concat(g.baseURL,"/albums/")).then((function(e){return e.json()}));case 6:n=e.sent,a(n),f(t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(Object(c.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[x]),"?limit="===w.search.substr(0,7)){var R=w.search.match(/=([0-9]+)$/);L=R?n.slice(0,R[1]):n.slice(0,10)}else L=n.slice(0,10);if(x){for(var S=[],U=0;U<L.length;U++)L[U].title.toLowerCase().includes(x)&&S.push(L[U]);L=S}var k=L.map((function(e,t){var n=i.find((function(t){return t.id===e.artistId}));return Object(h.jsx)(m,{album:e,author:n,env:g},t)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{title:"Albums list",setSearch:v}),n.length?null:Object(h.jsx)("p",{children:"Loading albums..."}),i.length?k:null]})};var g=function(){var e=Object(j.f)().id,t=parseInt(e),n=Object(c.useState)([]),a=Object(l.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)({}),f=Object(l.a)(i,2),p=f[0],O=f[1],x=b.production;function v(){return(v=Object(u.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x.baseURL,"/artists/").concat(t)).then((function(e){return e.json()}));case 2:return n=e.sent,e.next=5,fetch("".concat(x.baseURL,"/albums/")).then((function(e){return e.json()}));case 5:c=e.sent,s(c),O(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=r.map((function(e,n){return e.artistId===t?Object(h.jsx)(m,{album:e,author:p},n):null}));return Object(c.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{title:p.title}),r.length?null:Object(h.jsx)("p",{children:"Loading author's albums..."}),g]})};n(64);var L=function(){return Object(h.jsx)(f.a,{children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(j.a,{path:"/",exact:!0,component:v}),Object(h.jsx)(j.a,{path:"/artist/:id",exact:!0,component:g})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),w()}},[[65,1,2]]]);
//# sourceMappingURL=main.3cfed2aa.chunk.js.map