(this["webpackJsonpalbums-list"]=this["webpackJsonpalbums-list"]||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},55:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(26),r=n.n(s),i=(n(33),n(11)),o=n.n(i),l=n(13),u=n(8),j=n(2),b={development:{baseURL:"http://localhost:3004"},production:{baseURL:"https://my-json-server.typicode.com/hoirena/albums-list"}},h=(n(35),n(1)),d=function(e){var t=e.title,n=e.setSearch;return Object(h.jsx)("header",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:t}),n?Object(h.jsx)("div",{className:"search-wrapper",children:Object(h.jsx)("input",{type:"text",placeholder:"Search",onKeyDown:function(e){if("Enter"===e.key){var t=e.target.value.toLowerCase();n(t)}}})}):null]})})},O=n(9),p=n(27),f=b.production,m=n.n(p).a.create({baseURL:f.baseURL}),x=(n(55),function(e){var t=e.album,n=e.author,a=Object(c.useState)(t.favorite),s=Object(u.a)(a,2),r=s[0],i=s[1],o=new Date(t.releaseDate),l=r?"Remove favorite":"Mark as favorite",j=r?"active":"",d=b.production;return Object(h.jsxs)("article",{children:[Object(h.jsxs)("div",{className:"album-wrapper",children:[Object(h.jsx)("img",{src:t.imageUrl,alt:"tmp"}),Object(h.jsxs)("div",{className:"name-wrapper",children:[Object(h.jsx)("h2",{children:Object(h.jsx)("cite",{children:t.title})}),Object(h.jsx)("address",{className:"gray-text",rel:"author",children:Object(h.jsx)(O.b,{to:"/artist/"+n.id,children:n.title})})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"gray-text",children:"Released: "}),o.getFullYear()]}),Object(h.jsx)("div",{children:t.price}),Object(h.jsx)("div",{className:"mark-as-favorit ".concat(j),onClick:function(){m.patch("".concat(d.baseURL,"/albums/").concat(t.id),{favorite:!r}),i(!r)},children:l})]})});var v=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(u.a)(s,2),i=r[0],O=r[1],p=Object(c.useState)(""),f=Object(u.a)(p,2),m=f[0],v=f[1],g=b.production,L=[],S=Object(j.e)();function R(){return(R=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("".concat(g.baseURL,"/artists/")),e.next=3,fetch("".concat(g.baseURL,"/artists/")).then((function(e){return e.json()}));case 3:return t=e.sent,e.next=6,fetch("".concat(g.baseURL,"/albums/")).then((function(e){return e.json()}));case 6:n=e.sent,a(n),O(t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(Object(c.useEffect)((function(){!function(){R.apply(this,arguments)}()}),[m]),"?limit="===S.search.substr(0,7)){var U=S.search.match(/=([0-9]+)$/);L=U?n.slice(0,U[1]):n.slice(0,10)}else L=n.slice(0,10);if(m){for(var w=[],C=0;C<L.length;C++)L[C].title.toLowerCase().includes(m)&&w.push(L[C]);L=w}var y=L.map((function(e,t){var n=i.find((function(t){return t.id===e.artistId}));return Object(h.jsx)(x,{album:e,author:n,env:g},t)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{title:"Albums list",setSearch:v}),n.length?null:Object(h.jsx)("p",{children:"Loading albums..."}),i.length?y:null]})};var g=function(){var e=Object(j.f)().id,t=parseInt(e),n=Object(c.useState)([]),a=Object(u.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)({}),O=Object(u.a)(i,2),p=O[0],f=O[1],m=b.production;function v(){return(v=Object(l.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m.baseURL,"/artists/").concat(t)).then((function(e){return e.json()}));case 2:return n=e.sent,e.next=5,fetch("".concat(m.baseURL,"/albums/")).then((function(e){return e.json()}));case 5:c=e.sent,r(c),f(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=s.map((function(e,n){return e.artistId===t?Object(h.jsx)(x,{album:e,author:p},n):null}));return Object(c.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{title:p.title}),s.length?null:Object(h.jsx)("p",{children:"Loading author's albums..."}),g]})};n(64);var L=function(){var e=Object(j.e)();return console.log("LOCATION: ",e),console.log("PUBLICC_URL-: ","".concat(".","/")),console.log("---\x3e","".concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),"/"),e),Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(j.a,{path:"".concat(e.pathname,"/"),exact:!0,component:v}),Object(h.jsx)(j.a,{path:"".concat(e.pathname,"/artist/:id"),exact:!0,component:g})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O.a,{children:Object(h.jsx)(L,{})})}),document.getElementById("root")),S()}},[[65,1,2]]]);
//# sourceMappingURL=main.3c5bd8da.chunk.js.map