(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{56:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(29),r=n.n(c),i=n(8),o=n(2),l=n(17),j=n.n(l),m=n(30),u=n(11),d=n(12),b=n(14),h=n(13),p=n(31),v=n.n(p),O=(n(56),n(1));var x=function(e){var t=e.id,n=e.year,s=e.title,a=e.summary,c=e.poster,r=e.genres;return Object(O.jsx)("div",{className:"movie",children:Object(O.jsxs)(i.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:a,poster:c,genres:r}},children:[Object(O.jsx)("img",{src:c,alt:s,title:s}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:s}),Object(O.jsx)("h5",{className:"movie__year",children:n}),Object(O.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})})},f=(n(63),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(j.a.mark((function t(){var n,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:n.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component));n(64);var g=function(e){return console.log(e),Object(O.jsxs)("div",{className:"about__container",children:[Object(O.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(O.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},y=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(O.jsx)("span",{children:e.state.title}):null}}]),n}(a.a.Component);n(65);var _=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(i.b,{to:"/",children:"Home"}),Object(O.jsx)(i.b,{to:"/about",children:"About"})]})};n(66);var N=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(_,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(o.a,{path:"/about",component:g}),Object(O.jsx)(o.a,{path:"/movie/:id",component:y})]})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.c26e3f08.chunk.js.map