(this.webpackJsonpkatarite=this.webpackJsonpkatarite||[]).push([[0],{37:function(t,e,c){},38:function(t,e,c){},43:function(t,e,c){},44:function(t,e,c){},45:function(t,e,c){},46:function(t,e,c){},71:function(t,e,c){},72:function(t,e,c){},73:function(t,e,c){},74:function(t,e,c){},75:function(t,e,c){},76:function(t,e,c){},77:function(t,e,c){},78:function(t,e,c){},79:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),i=c.n(a),r=c(28),s=c.n(r),d=(c(37),c(4)),j=c(2),o=c(5),l=(c(38),function(t){var e=t.text,c=t.url,a=void 0===c?"#":c;return Object(n.jsx)("li",{children:Object(n.jsx)(d.c,{to:a,activeClassName:"active",children:e})})}),u=(c(43),c.p+"static/media/cart.891d6e79.svg"),b=c(31),O=c(6),h=i.a.createContext();function x(t){var e=t.children,c=Object(a.useState)({cantidadTotal:0,data:[]}),i=Object(o.a)(c,2),r=i[0],s=i[1],d=function(){return r.data.reduce((function(t,e){return t+e.data.quantity}),0)};return Object(n.jsx)(h.Provider,{value:{cart:r,setCart:s,addOnCart:function(t,e){if(r.data.find((function(e){return e.id===t.id}))){var c=r.data.findIndex((function(e){return e.id===t.id}));r.data[c].data.quantity=r.data[c].data.quantity+e,s(Object(O.a)(Object(O.a)({},r),{},{cantidadTotal:d()}))}else t.data.quantity=e,s(Object(O.a)(Object(O.a)({},r),{},{cantidadTotal:d()+e,data:[].concat(Object(b.a)(r.data),[t])}))},cartLength:d,cartPrice:function(){return r.data.reduce((function(t,e){return t+e.data.quantity*e.data.price}),0)},dropCart:function(){s({cantidadTotal:0,data:[]})},deleteItem:function(t){console.log(t);var e=r.data.findIndex((function(e){return e.id===t.id})),c=r.data.filter((function(e){return e.id!==t.id}));s(Object(O.a)(Object(O.a)({},r),{},{cantidadTotal:d()-r.data[e].data.quantity,data:c}))},changeQty:function(t,e){var c=r.data.findIndex((function(e){return e.id===t.id}));r.data[c].data.quantity="-"===e?r.data[c].data.quantity-1:r.data[c].data.quantity+1,s(Object(O.a)(Object(O.a)({},r),{},{cantidadTotal:d()}))}},children:e})}var f=function(t){var e=t.action,c=Object(a.useContext)(h).cart;return Object(n.jsxs)("div",{className:"navCart",onClick:e,children:[Object(n.jsx)("img",{src:u,width:"40",alt:"cart"}),Object(n.jsx)("span",{children:c.cantidadTotal})]})};var p=function(t){var e=t.titulo,c=t.action;return Object(n.jsx)("nav",{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{children:Object(n.jsx)(d.b,{to:"/",children:e})}),Object(n.jsx)("p",{children:"LIBROS"}),Object(n.jsx)("ul",{children:[{texto:"Terror",ruta:"/terror"},{texto:"Ciencia Ficci\xf3n",ruta:"/ciencia-ficcion"},{texto:"Fantas\xeda",ruta:"/fantasia"},{texto:"Misterio",ruta:"/misterio"}].map((function(t,e){return Object(n.jsx)(l,{text:t.texto,url:t.ruta},e)}))}),Object(n.jsx)(f,{action:c,qty:1})]})})},m=(c(44),function(t){var e=t.show,c=t.action,i=Object(a.useContext)(h),r=i.dropCart,s=i.cart,j=i.deleteItem,o=i.changeQty;return Object(a.useEffect)((function(){console.log(s)}),[]),Object(n.jsxs)("div",{className:"widgetCart ".concat(e?"open":"close"),children:[Object(n.jsx)("button",{onClick:c,children:"x"}),s.data.map((function(t){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)("h2",{children:t.data.title}),Object(n.jsx)("h3",{children:t.data.author}),Object(n.jsxs)("p",{children:["$",t.data.price," x ",t.data.quantity]}),Object(n.jsx)("button",{onClick:function(){return o(t,"-")},children:"-"}),Object(n.jsx)("button",{onClick:function(){return o(t,"+")},children:"+"})]},t.id),Object(n.jsxs)("p",{children:["Codigo: ",t.id]}),Object(n.jsx)("button",{onClick:function(){j(t)},children:"Eliminar"})]})})),Object(n.jsx)("button",{onClick:function(){return r()},children:"Vaciar Carrito"}),Object(n.jsxs)(d.b,{to:"/cart",children:[" ",Object(n.jsx)("button",{children:"Comprar"})," "]})]})}),g=function(){var t=Object(a.useState)(!1),e=Object(o.a)(t,2),c=e[0],i=e[1],r=function(){i(!c)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{titulo:"KATARITE",action:r}),Object(n.jsx)(m,{show:c,action:r})]})},v=(c(45),function(t){var e=t.prods,c=t.genre_name,i=c?e.filter((function(t){return t.data.genre===c})):e;return Object(a.useEffect)((function(){console.log(e),console.log(c)}),[]),Object(n.jsx)(n.Fragment,{children:i.map((function(t){return Object(n.jsxs)("article",{className:"productCard",children:[Object(n.jsx)("img",{src:t.data.image,alt:"productos",width:"300"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:t.data.title}),Object(n.jsxs)("p",{children:["$",t.data.price]}),Object(n.jsx)(d.b,{to:"/".concat(t.data.title.replaceAll(" ","-").toLowerCase(),"/").concat(t.id),children:"Ver detalle"})]})]},t.id)}))})}),C=(c(46),c(15)),y=c.n(C),N=(c(49),C.initializeApp({apiKey:"AIzaSyDnvtILNNV6g_KXCNMhnBd11-Lx6qOPx64",authDomain:"katarite.firebaseapp.com",projectId:"katarite",storageBucket:"katarite.appspot.com",messagingSenderId:"274931686380",appId:"1:274931686380:web:3948b081f8b32070b6bec9"}));function k(){return C.firestore(N)}var S=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),c=e[0],i=e[1],r=k();return Object(a.useEffect)((function(){r.collection("items").where("outstanding","==",!0).get().then((function(t){var e=[];t.forEach((function(t){e.push({id:t.id,data:t.data()})})),i(e)})).catch((function(t){return console.log(t)}))}),[]),Object(n.jsx)("section",{className:"featuredProducts",children:Object(n.jsx)("div",{className:"container",children:c.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"Best Sellers"}),Object(n.jsx)("ul",{children:Object(n.jsx)(v,{prods:c})})]}):Object(n.jsx)("p",{className:"cargando",children:"Cargando items..."})})})},w=c(30),T=c.n(w),q=(c(69),c(70),c(71),c.p+"static/media/libro1.e47abd1d.jpg"),E=c.p+"static/media/libro2.b7808989.jpg",I=c.p+"static/media/libro3.0fc82f56.jpg",F=function(){return Object(n.jsx)("section",{className:"slider",children:Object(n.jsxs)(T.a,Object(O.a)(Object(O.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:q,alt:"Slide 1",className:"slider_img"})}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:E,alt:"Slide 1",className:"slider_img"})}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:I,alt:"Slide 1",className:"slider_img"})})]}))})},P=(c(72),function(){return Object(n.jsx)("section",{className:"newsletter",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h2",{children:"\xa1Suscribite a nuestro newsletter!"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{type:"text",placeholder:"E-mail"}),Object(n.jsx)("input",{type:"submit",value:"Enviar"})]})]})})}),_=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(F,{}),Object(n.jsx)(S,{}),Object(n.jsx)(P,{})]})},B=(c(73),function(t){var e=t.prods,c=t.genre_name;return Object(n.jsx)("section",{className:"products",children:Object(n.jsx)("ul",{children:Object(n.jsx)("li",{children:Object(n.jsx)(v,{prods:e,genre_name:c})})})})}),K=(c(74),function(){var t=Object(j.g)().genre_name,e=Object(a.useState)([]),c=Object(o.a)(e,2),i=c[0],r=c[1],s=k();return Object(a.useEffect)((function(){s.collection("items").get().then((function(t){var e=[];t.forEach((function(t){e.push({id:t.id,data:t.data()})})),r(e)}))}),[]),Object(n.jsxs)("section",{className:"category",children:[Object(n.jsx)("h2",{children:t.split("-").join(" ")}),Object(n.jsx)(B,{prods:i,genre_name:t})]})}),A=(c(75),function(t){var e=t.product,c=Object(a.useState)(1),i=Object(o.a)(c,2),r=i[0],s=i[1],d=Object(a.useContext)(h).addOnCart;return Object(n.jsxs)("article",{className:"product",children:[Object(n.jsx)("div",{className:"foto",children:Object(n.jsx)("img",{src:e.data.image,alt:""})}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("h1",{className:"title",children:e.data.title}),Object(n.jsxs)("h3",{style:{color:"black"},children:["$",e.data.price]}),Object(n.jsxs)("div",{className:"contador",children:[Object(n.jsx)("button",{onClick:function(){0!==r&&s((function(){return r-1}))},children:"-"}),Object(n.jsx)("p",{children:r}),Object(n.jsx)("button",{onClick:function(){return s((function(){return r+1}))},children:"+"})]}),Object(n.jsx)("button",{onClick:function(){return function(t,e){d(t,e),s(1)}(e,r)},className:"btn",children:"Agregar al carrito"})]})]})}),$=(c(76),function(){var t=Object(j.g)().id,e=Object(a.useState)(null),c=Object(o.a)(e,2),i=c[0],r=c[1],s=k();return Object(a.useEffect)((function(){s.collection("items").doc(t).get().then((function(e){e.exists&&r({id:t,data:e.data()})})).catch((function(t){return console.log(t)}))}),[]),Object(n.jsx)(n.Fragment,{children:i?Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("ol",{className:"breadcrum",children:Object(n.jsx)("li",{children:i.data.title})}),Object(n.jsx)(A,{product:i})]}):Object(n.jsx)("p",{children:"cargando productos"})})}),D=(c(77),function(){var t=Object(a.useContext)(h),e=t.cart,c=t.cartPrice,i=t.dropCart,r=t.deleteItem,s=t.changeQty,j=c();return Object(n.jsxs)("section",{className:"cart",children:[Object(n.jsx)("h1",{children:"Cart"}),Object(n.jsxs)("ul",{children:[e.data.map((function(t){return Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{src:t.data.image,alt:""}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:t.data.title}),Object(n.jsx)("h3",{children:t.data.author}),Object(n.jsxs)("p",{children:["Cantidad: ",t.data.quantity]}),Object(n.jsxs)("p",{children:["Precio por unidad: ",Object(n.jsxs)("strong",{children:["$",t.data.price]})]}),Object(n.jsxs)("p",{children:["Precio total: ",Object(n.jsxs)("strong",{children:["$",t.data.price*t.data.quantity]})]}),Object(n.jsx)("button",{onClick:function(){return r(t)},children:"Eliminar producto"}),Object(n.jsx)("button",{onClick:function(){return s(t,"+")},children:" + "}),Object(n.jsx)("button",{onClick:function(){return s(t,"-")},children:" - "})]})]},t.id)})),Object(n.jsx)("button",{style:{padding:"10px 50px 10px 50px"},onClick:function(){return i()},children:"Vaciar carrito"})]}),Object(n.jsxs)("div",{className:"final",children:[Object(n.jsxs)("p",{children:["Precio total: $",j," "]}),Object(n.jsx)(d.b,{to:"/checkout",children:"Finalizar compra"})]})]})}),L=c(18),z=(c(78),function(){var t=Object(a.useContext)(h),e=t.cart,c=t.cartPrice,i=Object(a.useState)(),r=Object(o.a)(i,2),s=r[0],d=r[1],j=Object(a.useState)(null),l=Object(o.a)(j,2),u=l[0],b=l[1],x=k(),f=c(),p={usuariodata:s,items:e.data,date:y.a.firestore.Timestamp.fromDate(new Date),precioFinal:f},m=function(t){d(Object(O.a)(Object(O.a)({},s),{},Object(L.a)({},t.target.name,t.target.value)))};return Object(n.jsx)("section",{className:"checkout",children:Object(n.jsxs)("div",{className:"container ".concat(u?"hide":"show"),children:[Object(n.jsx)("h2",{children:"Checkout"}),e.data.map((function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:t.data.title}),Object(n.jsxs)("p",{children:[t.data.author,", $",t.data.price," x ",t.data.quantity]}),Object(n.jsx)("p",{children:t.data.description}),Object(n.jsxs)("p",{children:["Codigo:",t.id]})]},t.id)})),Object(n.jsxs)("h2",{children:["Total: ",f," "]}),Object(n.jsxs)("form",{method:"POST",onSubmit:function(t){t.preventDefault(),x.collection("orders").add(p).then((function(t){var e=t.id;return b(e)})).catch((function(t){return console.log(t)}))},children:[Object(n.jsx)("input",{onKeyUp:m,onBlur:m,type:"text",name:"nombre",placeholder:"Nombre"}),Object(n.jsx)("input",{onKeyUp:m,onBlur:m,type:"text",name:"apellido",placeholder:"Apellido"}),Object(n.jsx)("input",{onKeyUp:m,onBlur:m,type:"email",name:"email",placeholder:"E-mail"}),Object(n.jsx)("input",{onKeyUp:m,onBlur:m,type:"tel",name:"tel",placeholder:"Tel\xe9fono"}),Object(n.jsx)("button",{children:"Pagar"})]}),Object(n.jsxs)("div",{className:"compraFinalizad ".concat(u?"show":"hide"),children:[Object(n.jsx)("h2",{children:"\xa1Compra exitosa!"}),Object(n.jsxs)("p",{children:["Este es tu numero de seguimiento: ",u]})]})]})})}),U=function(){return Object(n.jsx)(x,{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(g,{}),Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{exact:!0,path:"/",children:Object(n.jsx)(_,{})}),Object(n.jsx)(j.b,{exact:!0,path:"/Katarite-eCommerce",children:Object(n.jsx)(j.a,{to:"/"})}),Object(n.jsx)(j.b,{path:"/cart",children:Object(n.jsx)(D,{})}),Object(n.jsx)(j.b,{path:"/checkout",children:Object(n.jsx)(z,{})}),Object(n.jsx)(j.b,{exact:!0,path:"/:genre_name",children:Object(n.jsx)(K,{})}),Object(n.jsx)(j.b,{exact:!0,path:"/:genre_name/:id",children:Object(n.jsx)($,{})})]})]})})};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.f6d33687.chunk.js.map