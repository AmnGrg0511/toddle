(this.webpackJsonptoddle=this.webpackJsonptoddle||[]).push([[0],{54:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(42),r=n.n(a),l=(n(54),n(21)),s=n(28),o=n.n(s),d=n(40),u=n(8),j=n(14),h=n(77),f=n(76),b=n(29),p=n(34),O=n(4);var v=function(){var e=Object(c.useState)(-1),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(-2),r=Object(j.a)(a,2),s=r[0],v=r[1],x=Object(c.useState)(0),g=Object(j.a)(x,2),y=g[0],m=g[1],w=Object(c.useState)([{title:"",depth:0}]),k=Object(j.a)(w,2),C=k[0],S=k[1],z=Object(c.useRef)(null);Object(c.useEffect)((function(){z.current&&z.current.focus()}),[y]);var D=function e(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=[],i=0;i<t.length;i++)t[i].depth===n&&(t[i].childs=e(t.slice(i,E(t,i)),n+1),c.push(t[i]));return c},J=function e(t){for(var n=[],c=0;c<t.length;c++)n.push({title:t[c].title,depth:t[c].depth}),n.push.apply(n,Object(u.a)(e(t[c].childs)));return n},R=function(){var e=Object(d.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=new FileReader).onload=function(){var e=Object(d.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.result,S(J(JSON.parse(n)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.readAsText(t.target.files[0]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e,t){if(!(t<0)){for(var n=t+1,c=e[t].depth,i=t+1;i<e.length&&!(e[i].depth<=c);i++)n=i+1;return n}};return Object(O.jsxs)("div",{onDragEnd:function(){-1!==n&&-2!==s&&S((function(e){var t=E(C,n),c=e.slice(n,t);e=e.filter((function(e,c){return c<n||c>=t}));var i=n<=s?s+1-t+n:s+1;return[].concat(Object(u.a)(e.slice(0,i)),Object(u.a)(c),Object(u.a)(e.slice(i)))})),v(-2),i(-1)},style:{width:"80%",margin:"50px auto"},children:[Object(O.jsx)("div",{style:{display:"flex"},children:Object(O.jsx)("textarea",{rows:"1",defaultValue:"Title",style:{fontSize:30,fontWeight:"bold",fontFamily:"Monospace",alignItems:"center",color:"#ccc",resizable:"none"}})}),Object(O.jsx)("div",{onDragOver:function(){C[n].depth-1<=0&&(!C[0]||C[0].depth<=C[n].depth)&&v(-1)},style:{width:"100%",height:-1===s?40:4,backgroundColor:-1===s?"#bde0f5":"#eee",transition:"all ease .2s"}}),C.map((function(e,t){var c=e.title,a=e.depth;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{draggable:!0,onDragStart:function(){i(t)},style:{display:"flex",opacity:t>=n&&t<E(C,n)?.2:1,alignItems:"center"},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(h.a,{size:"small",onClick:function(){},children:Object(O.jsx)(b.d,{})}),Object(O.jsx)(h.a,{size:"small",onClick:function(){0!==t&&a>0&&S((function(e){return e.map((function(n,c){return c>=t&&c<E(e,t)?Object(l.a)(Object(l.a)({},n),{},{depth:n.depth-1}):n}))}))},children:Object(O.jsx)(b.a,{})}),Object(O.jsx)(h.a,{size:"small",onClick:function(){0!==t&&a<=C[t-1].depth&&S((function(e){return e.map((function(e,n){return t===n?Object(l.a)(Object(l.a)({},e),{},{depth:e.depth+1}):e}))}))},children:Object(O.jsx)(b.b,{})}),Object(O.jsx)(h.a,{size:"small",onClick:function(){return S((function(e){return e.filter((function(n,c){return c<t||c>=E(e,t)}))}))},children:Object(O.jsx)(b.c,{})})]}),Object(O.jsx)("div",{style:{height:56,width:28,backgroundColor:"#fafafa",marginLeft:15+14*a,marginRight:15}}),Object(O.jsx)("textarea",{rows:"1",ref:t===y?z:null,value:c,style:{opacity:1-.1*a,fontSize:1.75-.15625*a+"em"},onChange:function(e){var n=e.target.value,c=n.split("\n");n=c[0];var i=C.map((function(e,c){return t===c?Object(l.a)(Object(l.a)({},e),{},{title:n}):e}));if(c.length>1){var a={title:c[1],depth:C[t].depth};i=[].concat(Object(u.a)(i.slice(0,t+1)),[a],Object(u.a)(i.slice(t+1))),m(t+1)}S(i)}})]},t),Object(O.jsx)("div",{onDragOver:function(){C[n].depth-1<=a&&(!C[t+1]||C[t+1].depth<=C[n].depth)&&v(t)},style:{width:"100%",height:s===t?40:4,backgroundColor:s===t?"#bde0f5":"#eee",transition:"all ease .2s"}})]})})),Object(O.jsx)("div",{style:{display:"flex"},children:Object(O.jsxs)(f.a,{variant:"contained",style:{flex:1,margin:5},onClick:function(){S((function(e){var t,n;return[].concat(Object(u.a)(e),[{title:"",depth:null!==(t=null===(n=e[e.length-1])||void 0===n?void 0:n.depth)&&void 0!==t?t:0}])}))},children:[Object(O.jsx)(p.a,{style:{width:40,height:20}}),"Add"]})}),Object(O.jsxs)("div",{style:{display:"flex"},children:[Object(O.jsxs)(f.a,{style:{flex:1,margin:5},variant:"outlined",onClick:function(){var e=document.createElement("a"),t=new Blob([[JSON.stringify(D(C))]]);e.href=URL.createObjectURL(t),e.download="userFile.json",document.body.appendChild(e),e.click()},children:[Object(O.jsx)(p.b,{style:{width:40,height:20}}),"Save"]}),Object(O.jsxs)("label",{style:{flex:1,margin:5},htmlFor:"button-file",children:[Object(O.jsx)("input",{style:{display:"none"},accept:"application/JSON",onChange:R,id:"button-file",multiple:!0,type:"file"}),Object(O.jsxs)(f.a,{variant:"outlined",component:"span",style:{width:"100%"},children:[Object(O.jsx)(p.c,{style:{width:40,height:20}}),"Load"]})]})]})]})};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(v,{passedData:[{title:""}]})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.25bc060d.chunk.js.map