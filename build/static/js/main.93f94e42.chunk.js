(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{65:function(t,e,n){},90:function(t,e,n){},92:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n(27),o=n.n(r),i=n(28),s=n(8),l=n(9),j=n(11),h=n(10),d=(n(65),n(24)),u=n(100),b=n(99),x=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(u.a,{bg:"dark",variant:"dark",children:[Object(a.jsx)(u.a.Brand,{as:i.c,to:"/",children:"React-Admin"}),Object(a.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(b.a,{className:"mr-auto",children:[Object(a.jsx)(b.a.Link,{as:i.c,to:"/categorys",children:"Danh m\u1ee5c"}),Object(a.jsx)(b.a.Link,{as:i.c,to:"/project",children:"Project"})]})})]})}}]),n}(c.Component),O=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(x,Object(d.a)({},this.props))}}]),n}(c.Component),m=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:"Home"})}}]),n}(c.Component),g=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(m,Object(d.a)({},this.props))}}]),n}(c.Component),p=n.p+"static/media/logo.6ce24c58.svg",f=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("img",{src:p,className:"App-logo",alt:"logo"})}),Object(a.jsx)("h1",{children:"404! Kh\xf4ng t\xecm th\u1ea5y trang \ud83d\ude25"})]})}}]),n}(c.Component),v=n(33),y=n.n(v),C=n(40),w=n(30),N=n(94),k=n(95),S=n(96),D=n(97),M=function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.index+1}),Object(a.jsx)("td",{children:t.name}),Object(a.jsxs)("td",{className:"text-center",children:[Object(a.jsx)("button",{className:"btn btn-warning mr-10 white",onClick:function(){return e=t._id,void t.onEdit(e);var e},children:"S\u1eeda"}),Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){return e=t._id,void(confirm("B\u1ea1n c\xf3 mu\u1ed1n x\xf3a ".concat(t.name," ? "))&&t.onDelete(e));var e},children:"X\xf3a"})]})]})},_="http://localhost:4000",H=n(19),L=n.n(H),T=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).getCategory=function(){L.a.get("".concat(_,"/api/category")).then((function(t){a.setState({categorys:t.data})})).catch((function(t){return console.log(t)}))},a.onEdit=function(t){L()("".concat(_,"/api/category/").concat(t)).then((function(e){a.setState({id:t,showModal:!0,title:"S\u1eeda danh m\u1ee5c",txtName:e.data.nameCategory}),console.log(a.state.id)})).catch((function(t){return console.log(t)}))},a.onDelete=function(t){var e=a.state.categorys;L.a.delete("".concat(_,"/api/category/").concat(t)).then((function(n){if(200===n.status){var c=a.findIndex(e,t);-1!==c&&(e.splice(c,1),window.location.reload())}})).catch((function(t){return console.log(t)}))},a.findIndex=function(t,e){var n=-1;return t.forEach((function(t,a){t.id===e&&(n=a)})),n},a.onChange=function(t){var e=t.target,n=e.name,c=e.value;a.setState(Object(w.a)({},n,c))},a.onSave=function(t){t.preventDefault();var e=a.state,n=e.txtName,c=e.id;console.log(c),c?L.a.post("".concat(_,"/api/category/update/").concat(c),{nameCategory:n}).then((function(t){a.setState({showModal:!a.state.showModal}),a.getCategory()})).catch((function(t){return console.log(t)})):(a.setState({txtName:""}),L.a.post("".concat(_,"/api/category/add"),{nameCategory:n}).then((function(t){a.setState({showModal:!a.state.showModal,txtName:""}),a.getCategory()})).catch((function(t){return console.log(t)})))},a.state={id:"",categorys:[],title:"",showModal:!1,txtName:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=Object(C.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getCategory();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"showCategory",value:function(t){var e=this;return t.length>0?t.map((function(t,n){return Object(a.jsx)(M,{index:n,_id:t._id,name:t.nameCategory,onDelete:e.onDelete,onEdit:e.onEdit},n)})):Object(a.jsx)(N.a,{animation:"grow",variant:"success",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})}},{key:"render",value:function(){var t=this,e=this.state,n=e.categorys,c=e.showModal,r=e.txtName,o=e.title;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Danh m\u1ee5c"}),Object(a.jsx)("div",{className:"text-right",children:Object(a.jsx)(k.a,{type:"button",className:"btn btn-primary mb-10",onClick:function(){t.setState({showModal:!0,title:"Th\xeam danh m\u1ee5c"})},children:"Th\xeam danh m\u1ee5c"})}),Object(a.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"T\xean danh m\u1ee5c"}),Object(a.jsx)("th",{children:"H\xe0nh \u0111\u1ed9ng"})]})}),Object(a.jsx)("tbody",{children:this.showCategory(n)})]}),Object(a.jsx)(D.a,{show:c,onHide:function(){t.setState({showModal:!1})},children:Object(a.jsxs)("form",{onSubmit:this.onSave,children:[Object(a.jsx)(D.a.Header,{closeButton:!0,children:Object(a.jsx)(D.a.Title,{children:o.toString()})}),Object(a.jsxs)(D.a.Body,{children:[Object(a.jsx)("label",{children:"T\xean danh m\u1ee5c"}),Object(a.jsx)("input",{className:"form-control",type:"text",name:"txtName",value:r,onChange:this.onChange})]}),Object(a.jsxs)(D.a.Footer,{children:[Object(a.jsx)(k.a,{variant:"secondary",type:"button",onClick:function(){t.setState({showModal:!1,txtName:""})},children:"\u0110\xf3ng"}),Object(a.jsx)(k.a,{variant:"primary",type:"submit",children:"Save changes"})]})]})})]})}}]),n}(c.Component),U=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(T,Object(d.a)({},this.props))}}]),n}(c.Component),B=n(98),E=function(t){function e(t){if(t.length>25)return t.substring(0,25)+"..."}return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.index+1}),Object(a.jsx)("td",{children:t.name}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:t.image,width:"80",height:"80",alt:"img"})}),Object(a.jsx)("td",{children:e(t.github_url)}),Object(a.jsx)("td",{children:e(t.deployed_url)}),Object(a.jsx)("td",{children:t.nameCategory}),Object(a.jsxs)("td",{className:"text-center",children:[Object(a.jsx)("button",{className:"btn btn-warning mr-10 white",onClick:function(){return e=t._id,void t.onEdit(e);var e},children:"S\u1eeda"}),Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){return e=t._id,void(confirm("B\u1ea1n c\xf3 mu\u1ed1n x\xf3a ".concat(t._id," ? "))&&t.onDelete(e));var e},children:"X\xf3a"})]})]})},I=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).getData=Object(C.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.a.get("".concat(_,"/api/projects")).then((function(t){a.setState({isLoading:!1,projects:t.data.project})})).catch((function(t){return console.log(t)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("error",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])}))),a.onChange=function(t){var e=t.target,n=e.name,c=e.value;a.setState(Object(w.a)({},n,c))},a.onDelete=function(t){var e=a.state.projects;a.setState({isLoading:!0}),L.a.delete("".concat(_,"/api/projects/").concat(t)).then((function(n){if(200===n.status){var c=a.findIndex(e,t);-1!==c&&(e.splice(c,1),a.setState({isLoading:!1,projects:e})),window.location.reload()}})).catch((function(t){return console.log(t)}))},a.findIndex=function(t,e){var n=-1;return t.forEach((function(t,a){t.id===e&&(n=a)})),n},a.onSave=function(t){t.preventDefault();var e=a.state,n=e.txtName,c=e.txtUrl,r=e.txtGitHub,o=e.image,i=e.selectCategory,s=new FormData;s.append("name",n),s.append("deployed_url",c),s.append("github_url",r),s.append("image",o),s.append("category",i);try{L.a.post("".concat(_,"/api/projects/add"),s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){console.log(t),a.setState({showModal:!1},(function(){return a.getData()}))})).catch((function(t){return console.log("error",t)}))}catch(l){console.log(l)}},a.state={projects:[],id:"",title:"",txtName:"",txtUrl:"",txtGitHub:"",image:"",imageName:"",selectCategory:"",category:null,showModal:!1,isLoading:!1,uploadPercentage:0},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.getData(),L.a.get("".concat(_,"/api/category")).then((function(e){t.setState({category:e.data})})).catch((function(t){return console.log(t)}))}},{key:"showProject",value:function(t){var e=this;return t.length>0?t.map((function(t,n){return Object(a.jsx)(E,{index:n,_id:t._id,name:t.name,deployed_url:t.deployed_url,github_url:t.github_url,image:t.image,nameCategory:t.category[0].nameCategory,onDelete:e.onDelete},n)})):Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)(N.a,{animation:"grow",variant:"success",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})})}},{key:"render",value:function(){var t=this,e=this.state,n=e.projects,c=e.title,r=e.txtName,o=e.txtUrl,i=e.txtGitHub,s=e.selectCategory,l=e.showModal,j=e.isLoading,h=e.image,d=!0===j?Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)(N.a,{animation:"grow",variant:"success",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})}):Object(a.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:"lg",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"T\xean "}),Object(a.jsx)("th",{children:"H\xecnh \u1ea3nh"}),Object(a.jsx)("th",{children:"Page-Url"}),Object(a.jsx)("th",{children:"Github-URL"}),Object(a.jsx)("th",{children:"Danh m\u1ee5c"}),Object(a.jsx)("th",{children:"H\xe0nh \u0111\u1ed9ng"})]})}),Object(a.jsx)("tbody",{children:this.showProject(n)})]});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Projects"}),Object(a.jsx)("div",{className:"text-right",children:Object(a.jsx)(k.a,{type:"button",className:"btn btn-primary mb-10",onClick:function(){t.setState({showModal:!0,title:"Th\xeam project"})},children:"Th\xeam Project"})}),d,Object(a.jsx)(D.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:l,onHide:function(){t.setState({showModal:!1})},children:Object(a.jsxs)(B.a,{onSubmit:this.onSave,children:[Object(a.jsx)(D.a.Header,{closeButton:!0,children:Object(a.jsx)(D.a.Title,{children:c.toString()})}),Object(a.jsxs)(D.a.Body,{children:[Object(a.jsx)("label",{children:"T\xean"}),Object(a.jsx)("input",{className:"form-control",type:"text",name:"txtName",value:r,onChange:this.onChange}),Object(a.jsx)("label",{children:"H\xecnh \u1ea3nh"}),Object(a.jsx)(B.a.File,{id:"custom-file-translate-scss",label:"H\xecnh \u1ea3nh",lang:"en",custom:!0,type:"file",onChange:function(e){t.setState({image:e.target.files[0],imageName:e.target.files[0].name}),console.log(e.target.files[0])}}),this.state.imageName,this.state.image?Object(a.jsx)("div",{className:"",children:Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(a.jsx)("img",{src:URL.createObjectURL(h),width:"100%",height:"auto",alt:this.state.imageName})})}):null,Object(a.jsx)("label",{children:"URL"}),Object(a.jsx)("input",{className:"form-control",type:"text",name:"txtUrl",value:o,onChange:this.onChange}),Object(a.jsx)("label",{children:"GITHUB"}),Object(a.jsx)("input",{className:"form-control",type:"text",name:"txtGitHub",value:i,onChange:this.onChange}),Object(a.jsx)("label",{children:"Danh M\u1ee5c"}),Object(a.jsxs)("select",{className:"form-control",size:"as",as:"select",onChange:this.onChange,value:s,name:"selectCategory",children:[Object(a.jsx)("option",{children:"---Th\xeam danh m\u1ee5c---"}),this.state.category&&this.state.category.map((function(t,e){return Object(a.jsxs)("option",{value:t._id,children:[" ",t.nameCategory]},e)}))]})]}),Object(a.jsxs)(D.a.Footer,{children:[Object(a.jsx)(k.a,{variant:"secondary",type:"button",onClick:function(){t.setState({showModal:!1})},children:"\u0110\xf3ng"}),Object(a.jsx)(k.a,{type:"submit",children:"L\u01b0u"})]})]})})]})}}]),n}(c.Component),P=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(I,Object(d.a)({},this.props))}}]),n}(c.Component),F=[{path:"/",exact:!0,main:function(){return Object(a.jsx)(g,{})}},{path:"/categorys",exact:!1,main:function(){return Object(a.jsx)(U,{})}},{path:"/project",exact:!1,main:function(){return Object(a.jsx)(P,{})}},{path:"",exact:!1,main:function(){return Object(a.jsx)(f,{})}}],G=n(7),A=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).showContent=function(t){var e=null;return t.length>0&&(e=t.map((function(t,e){return Object(a.jsx)(G.a,{path:t.path,exact:t.exact,component:t.main},e)}))),Object(a.jsx)(G.c,{children:e})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(O,{}),Object(a.jsx)("div",{className:"container",children:this.showContent(F)})]})}}]),n}(c.Component);n(90),n(91);o.a.render(Object(a.jsx)(i.a,{children:Object(a.jsx)(i.b,{children:Object(a.jsx)(A,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.93f94e42.chunk.js.map