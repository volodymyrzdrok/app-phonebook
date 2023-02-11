"use strict";(self.webpackChunkapp_phonebook=self.webpackChunkapp_phonebook||[]).push([[734],{3549:function(e,n,a){var o=a(1413),s=a(2102),r=a(661),i=a(3168),l=a(9784),t=a(9090),d=a(9227),u=a(2011),m=a(5705),c=a(2797),h=a(3329);function p(e){var n={email:c.Z_().min(2,"Too Short!").max(50,"Too Long!").matches("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$","must be a valid email").required(),password:c.Z_().min(8,"Too Short!").max(50,"Too Long!").required()};return c.Ry().shape("register"===e?(0,o.Z)({name:c.Z_().min(2,"Too Short!").max(50,"Too Long!").matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","only letters!").required()},n):n)}n.Z=function(e){var n=e.title,a=e.subTitle,o=e.onSubmitFunc,c=e.authType,x=(0,m.TA)({initialValues:"register"===c?{name:"",email:"",password:""}:{email:"",password:""},validationSchema:p(c),onSubmit:function(e){o(e)}}),f=x.errors,j=x.touched;return(0,h.jsx)(s.lL,{children:(0,h.jsxs)(r.Z,{onSubmit:x.handleSubmit,component:"form",sx:{width:400,mx:"auto",my:4,py:3,px:2,display:"flex",flexDirection:"column",gap:2,borderRadius:"sm",boxShadow:"md"},variant:"outlined",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(i.C,{level:"h4",component:"h1",children:(0,h.jsx)("b",{children:n})}),(0,h.jsxs)(i.C,{level:"body2",children:[a," to continue."]})]}),"register"===c&&(0,h.jsxs)(l.Z,{children:[(0,h.jsxs)(t.Z,{children:["Name",(0,h.jsx)(i.C,{sx:{color:"red",fontSize:10,ml:3},children:f.name&&j.name?f.name:null})]}),(0,h.jsx)(d.ZP,{name:"name",type:"text",placeholder:"Name and surname",onChange:x.handleChange,value:x.values.name})]}),(0,h.jsxs)(l.Z,{children:[(0,h.jsxs)(t.Z,{children:["Email",(0,h.jsx)(i.C,{sx:{color:"red",fontSize:10,ml:3},children:f.email&&j.email?f.email:null})]}),(0,h.jsx)(d.ZP,{name:"email",type:"email",placeholder:"johndoe@email.com",onChange:x.handleChange,value:x.values.email})]}),(0,h.jsxs)(l.Z,{children:[(0,h.jsxs)(t.Z,{children:["Password",(0,h.jsx)(i.C,{sx:{color:"red",fontSize:10,ml:3},children:f.password&&j.password?f.password:null})]}),(0,h.jsx)(d.ZP,{name:"password",type:"password",placeholder:"password",onChange:x.handleChange,value:x.values.password})]}),(0,h.jsx)(u.Z,{type:"submit",sx:{mt:1},children:a})]})})}},1976:function(e,n,a){a.d(n,{C:function(){return l}});var o=a(2791),s=a(7689),r=a(9434),i=a(7441),l=function(e,n){var a=(0,s.s0)(),l=(0,r.v9)(i.uo);(0,o.useEffect)((function(){l===e&&a(n,{replace:!0})}),[a,l,n,e])}},5734:function(e,n,a){a.r(n),a.d(n,{default:function(){return u}});var o=a(9434),s=a(3549),r=a(5822),i=a(3329),l=function(){var e=(0,o.I0)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{authType:"login",title:"Log In",subTitle:"Sign In",onSubmitFunc:function(n){var a=n.email,o=n.password;e((0,r.pH)({email:a,password:o}))}})})},t=a(8155),d=a(1976),u=function(){return(0,d.C)(!0,t.Z.contacts),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l,{})})}}}]);
//# sourceMappingURL=734.c0963e82.chunk.js.map