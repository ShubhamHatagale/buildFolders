"use strict";(self.webpackChunkikore_pilates=self.webpackChunkikore_pilates||[]).push([[569,942],{942:function(e,s,t){t.r(s);var o=t(1413),i=t(885),a=t(2791),n=t(3360),r=t(2677),l=t(3855),m=t(9743),c=t(6355),d=t(1633),p=t(8995),_=t(184);s.default=function(e){console.log(Object.keys(e).length);var s=Object.keys(e).length>0?e.blogData.blogid:0,t=(0,p.cI)({mode:"onChange"}),h=t.register,g=t.handleSubmit,u=t.reset,f=t.formState.errors,x=(0,a.useState)(!1),b=(0,i.Z)(x,2),j=b[0],k=b[1],N="https://phpstack-899220-3121256.cloudwaysapps.com";return(0,_.jsx)("section",{className:"form_section pd3 pd6",children:(0,_.jsx)("div",{className:"container",children:(0,_.jsxs)("div",{className:"row",children:[(0,_.jsx)("h2",{className:"headings text-center pd4",children:"Let\u2019s get going, Shall we?"}),(0,_.jsxs)("div",{className:"col-lg-12",children:[j?(0,_.jsxs)("div",{className:"row",style:{textAlign:"center"},children:[(0,_.jsx)("div",{className:"col-lg-4"}),(0,_.jsx)("div",{className:"col-lg-4",children:(0,_.jsxs)("p",{style:{background:"#ed8c13",color:"white",boxShadow:"1px 1px gray",borderRadius:"4px"},children:["Thank you for getting in touch! ",(0,_.jsx)("br",{}),"One of our colleagues will get back in touch with you soon! Have a great day!"]})}),(0,_.jsx)("div",{className:"col-lg-4"})]}):null,(0,_.jsxs)(l.Z,{className:"home_form",onSubmit:g((function(e){console.log(e),console.log(N);var s=new Headers;s.append("Content-Type","application/json"),fetch("".concat(N,"/enroll/course"),{method:"POST",headers:s,body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e),k(!0),u(),setTimeout((function(){k(!1)}),5e3)})).catch((function(e){return console.log(e)}))})),children:[(0,_.jsxs)(m.Z,{className:"mb-2 home_from_row",children:[(0,_.jsxs)(l.Z.Group,{className:"col-md-6",controlId:"formGridName",children:[(0,_.jsx)(l.Z.Label,{className:"modal_label",children:"Name"}),(0,_.jsx)(l.Z.Control,(0,o.Z)((0,o.Z)({type:"text"},h("name",{required:!0,pattern:[/[a-z]/,/[A-Z]/,/[0-9]/]})),{},{name:"name",placeholder:"Enter Name"})),(0,_.jsx)(c.m3W,{className:"form_icon_modal"}),f.name&&(0,_.jsx)("p",{className:"form_error_message modal_error_msg",children:"Please Enter Name"})]}),(0,_.jsxs)(l.Z.Group,{className:"col-md-6",controlId:"formGridEmail",children:[(0,_.jsx)(l.Z.Label,{className:"modal_label",children:"Email"}),(0,_.jsx)(l.Z.Control,(0,o.Z)((0,o.Z)({type:"text"},h("email",{required:!0,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i})),{},{name:"email",placeholder:"Enter email"})),(0,_.jsx)(c.SRX,{className:"form_icon_modal"}),f.email&&(0,_.jsx)("p",{className:"form_error_message modal_error_msg",children:"Please Check Email"})]})]}),(0,_.jsxs)(m.Z,{className:"mb-2 home_from_row",children:[(0,_.jsxs)(l.Z.Group,{className:"col-md-6",controlId:"formGridPhone",children:[(0,_.jsx)(l.Z.Label,{className:"modal_label",children:"Phone"}),(0,_.jsx)(l.Z.Control,(0,o.Z)((0,o.Z)({type:"number"},h("phone",{required:!0,maxLength:10,minLength:10})),{},{name:"phone",placeholder:"Enter Phone Number"})),(0,_.jsx)(c.DNl,{className:"form_icon_modal"}),f.phone&&(0,_.jsx)("p",{className:"form_error_message modal_error_msg",children:"Please Enter 10 Digit Phone Number"})]}),(0,_.jsxs)(l.Z.Group,{className:"col-md-6",controlId:"formGridState",children:[(0,_.jsx)(l.Z.Label,{className:"modal_label",children:"Course"}),(0,_.jsxs)(l.Z.Select,(0,o.Z)((0,o.Z)({name:"course"},h("course",{required:!0})),{},{children:[(0,_.jsx)("option",{value:""}),d.Z.map((function(e,t){return(0,_.jsx)("option",{selected:e.id===s,value:e.post_title,children:e.post_title})}))]})),(0,_.jsx)(c.V_i,{className:"form_icon_modal"}),f.course&&(0,_.jsx)("p",{className:"form_error_message modal_error_msg",children:"Please Select Course "})]})]}),(0,_.jsx)(m.Z,{className:"mb-3",children:(0,_.jsxs)(l.Z.Group,{as:r.Z,controlId:"formGridPhone",children:[(0,_.jsx)(l.Z.Label,{className:"modal_label",children:"Message"}),(0,_.jsx)(l.Z.Control,(0,o.Z)((0,o.Z)({as:"textarea",rows:3},h("message",{required:!0,pattern:[/[a-z]/,/[A-Z]/,/[0-9]/]})),{},{name:"message"})),f.message&&(0,_.jsx)("p",{className:"form_error_message modal_error_msg",children:"Please Enter Message "})]})}),(0,_.jsx)(n.Z,{className:"form_btn",type:"submit",children:"Submit"})]})]})]})})})}},1633:function(e,s){s.Z=[{id:1,post_title:"Movement Principle",post_img_link:"#",post_imgsrc:"assets/img/movement.png",post_title_link:"#",post_description:"Learn how to recognize, improve and teach fundamental movement patterns with the Movement",post_btn_link:"#"},{id:2,post_title:"Mat 1 (Basic)",post_img_link:"#",post_imgsrc:"assets/img/mat-1.png",post_title_link:"#",post_description:"Foundation of the Pilates method; it includes an introduction to the principles of the Pilates method.",post_btn_link:"#"},{id:3,post_title:"Mat 2 (Intermediate)",post_img_link:"#",post_imgsrc:"assets/img/matt-2.png",post_title_link:"#",post_description:"Intermediate and advanced level Mat exercises for a complete understanding of the Mat program.",post_btn_link:"#"},{id:4,post_title:"Mat 3",post_img_link:"#",post_imgsrc:"assets/img/matt-3.png",post_title_link:"#",post_description:"Enhanced Pilates Mat completes the mat training by adding rings, rollers, bands and balls to the traditional Mat exercises.",post_btn_link:"#"},{id:5,post_title:"Reformer 1 (Basic)",post_img_link:"#",post_imgsrc:"assets/img/reformer-1.png",post_title_link:"#",post_description:"This course introduces the Universal Reformer, the center piece of the Pilates equipment studio and an invaluable training tool.",post_btn_link:"#"},{id:6,post_title:"Reformer 2 (Intermediate)",post_img_link:"#",post_imgsrc:"assets/img/reformer-2.png",post_title_link:"#",post_description:"Reformer 2 expands the potential of the Reformer with intermediate and advanced exercises and modifications, along with programme designs.",post_btn_link:"#"},{id:7,post_title:"Reformer 3",post_img_link:"#",post_imgsrc:"assets/img/reformer-3.png",post_title_link:"#",post_description:"Reformer 3 is the pinnacle of the Reformer work and includes advanced and super advanced exercises for best results.",post_btn_link:"#"},{id:8,post_title:"Trapeze Table",post_img_link:"#",post_imgsrc:"assets/img/trapezetable.png",post_title_link:"#",post_description:"Introduction to Trapeze Table and Tower exercises as well as applications for beginning, post\u2013rehabilitation and advanced clients.",post_btn_link:"#"},{id:9,post_title:"Chair",post_img_link:"#",post_imgsrc:"assets/img/chair.png",post_title_link:"#",post_description:"Chair Pilates includes exercises and variations for the original Wunda chair, the EXO chair and the split pedal Combo Chair.",post_btn_link:"#"}]}}]);
//# sourceMappingURL=569.c72a6241.chunk.js.map