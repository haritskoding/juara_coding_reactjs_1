(this.webpackJsonpteguh_ujian_react_1=this.webpackJsonpteguh_ujian_react_1||[]).push([[0],[,,,,,,,function(t,e,a){},function(t,e,a){},,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var c=a(0),i=a(1),s=a.n(i),n=a(9),r=a.n(n),o=a(10),l=a(2),d=a(3),j=a(5),u=a(4),h=(a(8),function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(t){return Object(l.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.id,a=t.title,i=(t.image,t.category),s=t.price,n=t.description,r=t.tambah;return Object(c.jsx)("div",{className:"col",children:Object(c.jsxs)("div",{className:"card menuCard",style:{width:"18rem"},children:[Object(c.jsx)("img",{src:this.props.image,className:"card-img-top",alt:"Maaf data tidak tampil",style:{maxHeight:"200px"},width:"200px"}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsx)("h5",{className:"card-title"})}),Object(c.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(c.jsxs)("li",{className:"list-group-item",children:["Title : ",a]}),Object(c.jsxs)("li",{className:"list-group-item",children:["Category : ",i]}),Object(c.jsxs)("li",{className:"list-group-item",children:["Prices : ",parseFloat(s)]}),Object(c.jsxs)("li",{className:"list-group-item  desc",children:["Description : ",n]}),Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)("button",{id:e,className:"btn",style:{background:"white",border:"none"},onClick:r,children:Object(c.jsx)("i",{className:"fa fa-shopping-basket",style:{color:"rgb(247,73,125)",fontSize:"36px",cursor:"pointer"},children:"Add To Cart"})})})]})]},e)})}}]),a}(i.Component)),p=(i.Component,a(16),function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=(t.tambah,t.counter);return Object(c.jsx)("div",{className:"cart",children:Object(c.jsxs)("button",{type:"button",className:"btn",style:{color:"white",fontSize:"18px"},children:[Object(c.jsx)("i",{className:"fa fa-shopping-basket",style:{color:"white",fontSize:"36px"}}),Object(c.jsx)("span",{className:"badge badge-light",children:Object(c.jsx)("h4",{children:e})})]})})}}]),a}(i.Component)),b=(a(7),function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.title,a=t.price,i=t.image,s=t.description;return console.log("ogutaq ",a),console.log("image ",i),Object(c.jsxs)("div",{className:"data",children:[Object(c.jsx)("li",{style:{"justify-content":"center"},children:Object(c.jsx)("img",{src:i,style:{width:"80px",height:"80px"}})}),Object(c.jsx)("li",{style:{fontSize:"16px"},children:Object(c.jsxs)("span",{children:[e,"   ",Object(c.jsx)("i",{onClick:{},className:"fa fa-trash",style:{color:"white",fontSize:"33px"}})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("span",{className:"gaji",children:["$ ",a]})}),Object(c.jsxs)("li",{style:{fontSize:"14px",maxHeight:"120px",overflow:"hidden"},children:["Description: ",s]})]})}}]),a}(i.Component)),m=(a(17),function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.counter,a=t.totalPrice;return Object(c.jsxs)("span",{className:"total",children:[Object(c.jsxs)("li",{children:["TOTAL :",Object(c.jsx)("span",{children:e})]}),Object(c.jsxs)("li",{children:["Harga Total :",Object(c.jsx)("span",{children:a})]})]})}}]),a}(i.Component)),g=function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=(t.datas,t.getData);t.image;return console.log("der ",e),Object(c.jsx)("div",{className:"menuK",children:Object(c.jsx)("ul",{children:e&&e.map((function(t){return Object(c.jsx)(b,{description:t.description,image:t.image,title:t.title,price:t.price})}))})})}}]),a}(i.Component),O=function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=(t.tambah,t.counter),a=t.datas,i=t.getData,s=(t.key,t.title),n=t.price,r=t.totalPrice,o=t.handleData,l=t.description,d=t.image;return Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)(p,{counter:e}),Object(c.jsx)(g,{datas:a,getData:i,title:s,price:n,description:l,handleData:o,image:d}),Object(c.jsx)(m,{counter:e,totalPrice:r})]})}}]),a}(i.Component),x=(a(18),function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(t){var c;return Object(l.a)(this,a),(c=e.call(this,t)).handleData=function(t){t.preventDefault();var e=t.currentTarget.id;console.log("data-r ",c.state.datas[e]),c.setState({id:e,title:c.state.datas[e].title})},c.tambah=function(t){var e=t.currentTarget.id;t.preventDefault();var a=c.state.counter+1,i=0;i+=parseFloat(c.state.datas[e-1].price);var s={id:t.currentTarget.id,title:c.state.datas[e-1].title,price:c.state.datas[e-1].price,category:c.state.datas[e-1].category,description:c.state.datas[e-1].description,image:c.state.datas[e-1].image,getData:c.state.getData,totalPrice:i},n=[].concat(Object(o.a)(c.state.getData),[s]);c.setState({getData:n,counter:a,price:c.state.price,totalPrice:c.state.totalPrice+c.state.datas[e-1].price}),console.log("getData",c.state.getData),console.log("image ",c.state.image)},c.state={datas:[],id:0,title:"",category:"",description:"",price:0,totalPrice:0,image:"",counter:0,getData:[]},c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"loopData",value:function(t){for(var e=[];0<t.length;t++)e.push(t[0]);return e}},{key:"getData",value:function(){var t=this;fetch("https://fakestoreapi.com/products").then((function(t){if(console.log(t),200===t.status)return t.json();throw Error(t.statusText)})).then((function(e){t.setState({datas:e})})).catch((function(t){alert(t)}))}},{key:"render",value:function(){var t=this.state,e=t.title,a=(t.category,t.price),i=t.totalPrice,s=t.description,n=t.getData,r=t.datas,o=t.key,l=t.image,d=this.tambah;return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-9 mt-5",children:[Object(c.jsx)("h1",{className:"mb-4",style:{zIndex:"1000"},children:"Menu Item"}),Object(c.jsx)("h5",{children:"\xa9 Teguh M Harits"}),Object(c.jsx)("div",{className:"row",children:r.map((function(t){return Object(c.jsx)(h,{id:t.id,title:t.title,image:t.image,price:t.price,category:t.category,description:t.description,tambah:d},t.id)}))})]}),Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)(O,{datas:r,getData:n,title:e,price:a,tambah:d,totalPrice:i,handleData:this.handleData,counter:this.state.counter,description:s,image:l},o)})]})}}]),a}(i.Component)),f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(e){var a=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,n=e.getTTFB;a(t),c(t),i(t),s(t),n(t)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.1623cf90.chunk.js.map