"use strict";(self.webpackChunkapp_phonebook=self.webpackChunkapp_phonebook||[]).push([[354],{1976:function(e,n,r){r.d(n,{C:function(){return s}});var t=r(2791),a=r(7689),o=r(9434),i=r(7441),s=function(e,n){var r=(0,a.s0)(),s=(0,o.v9)(i.uo);(0,t.useEffect)((function(){s===e&&r(n,{replace:!0})}),[r,s,n,e])}},3354:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var t=r(9434),a=r(1538),o=r(2102),i=r(9784),s=r(9090),l=r(9227),d=r(1421),c=r(3329),u=function(){var e=(0,t.I0)();return(0,c.jsx)(o.lL,{children:(0,c.jsxs)(i.Z,{sx:{width:350,mx:"auto",my:4,py:1,px:2,display:"flex",flexDirection:"column",gap:2,borderRadius:"sx",boxShadow:"md"},variant:"outlined",children:[(0,c.jsxs)(s.Z,{children:["Filter Contacts",(0,c.jsx)(d.Z,{sx:{fontSize:30,mx:3}})]}),(0,c.jsx)(l.ZP,{onInput:function(n){var r=n.target.value.trim().toLowerCase();e((0,a.Qt)(r))},type:"text",placeholder:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]})})},m=r(2419),x=r(7756),h=r(3192),p=r(661),b=r(3168),j=r(2011),f=r(6052),Z=r(5206),v=r(5705),g=r(2797),y=g.Ry().shape({name:g.Z_().min(2,"Too Short!").max(50,"Too Long!").matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","only letters!").required("Required"),number:g.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(8).required("A phone number is required")}),C=function(){var e=(0,t.v9)(a.Af),n=(0,t.I0)(),r=(0,v.TA)({initialValues:{name:"",number:""},validationSchema:y,onSubmit:function(t){var a=e.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}));a?Z.Am.info("".concat(a.name," is already in contacts"),{position:"top-right",autoClose:1700,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"}):(n((0,f.qL)(t)),r.resetForm())}}),d=r.errors,u=r.touched;return(0,c.jsxs)(o.lL,{children:[(0,c.jsxs)(p.Z,{onSubmit:r.handleSubmit,component:"form",sx:{width:350,mx:"auto",my:4,py:3,px:2,display:"flex",flexDirection:"column",gap:2,borderRadius:"sx",boxShadow:"md"},variant:"outlined",children:[(0,c.jsx)(b.C,{sx:{mx:"auto"},level:"h5",component:"h1",children:(0,c.jsx)("b",{children:" Create new contact!"})}),(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(x.Z,{sx:{fontSize:20,mr:3}}),(0,c.jsx)(b.C,{sx:{color:"red",fontSize:10},children:d.name&&u.name?d.name:null})]}),(0,c.jsx)(l.ZP,{placeholder:"name",name:"name",type:"text",required:!0,onChange:r.handleChange,value:r.values.name})]}),(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(h.Z,{sx:{fontSize:20,mr:3}}),(0,c.jsx)(b.C,{sx:{color:"red",fontSize:10},children:d.number&&u.number?d.number:null})]}),(0,c.jsx)(l.ZP,{name:"number",type:"tel",placeholder:"number",required:!0,onChange:r.handleChange,value:r.values.number})]}),(0,c.jsxs)(j.Z,{type:"submit",size:"md",sx:function(e){return{background:"linear-gradient(-45deg, ".concat(e.vars.palette.primary[800],", ").concat(e.vars.palette.primary[500],")"),fontWeight:"lg","&:hover":{background:"linear-gradient(-45deg, ".concat(e.vars.palette.primary[900],", ").concat(e.vars.palette.primary[600],")")}}},children:["Add Contact ",(0,c.jsx)(m.Z,{sx:{mx:2}})]})]}),(0,c.jsx)(Z.Ix,{})]})};var w=r(9439),A=r(9276),S=r(2791),z=r(1747),k=r(4251),q=r(9984),L=r(890),I=r(3400),F=r(8870),R=r(5176),T=r(8096),D=r(4925),E=r(3697),O=r(2575),P=r(2027);function M(e){var n=e.openModal,r=e.handleClose,a=e.contactObj,o=(0,t.I0)();return(0,c.jsx)(R.Z,{open:n,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,c.jsxs)(F.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:450,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},component:"form",onSubmit:function(e){e.preventDefault();var n=a.id,t=e.target.name.value.trim(),i=e.target.number.value.trim();o((0,f.Tk)({id:n,name:t,number:i})),r()},children:[(0,c.jsx)(L.Z,{sx:{mb:2},level:"h6",color:"primary",component:"h2",children:(0,c.jsx)("b",{children:" Edit contact"})}),a?(0,c.jsxs)(F.Z,{children:[(0,c.jsxs)(T.Z,{variant:"standard",children:[(0,c.jsx)(D.Z,{htmlFor:"name",children:"Name"}),(0,c.jsx)(E.Z,{id:"name",defaultValue:null===a||void 0===a?void 0:a.name,name:"name",type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]}),(0,c.jsxs)(T.Z,{variant:"standard",sx:{mx:2},children:[(0,c.jsx)(D.Z,{htmlFor:"number",children:"Number"}),(0,c.jsx)(E.Z,{id:"number",defaultValue:a.number,name:"number",type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0})]}),(0,c.jsx)(I.Z,{color:"primary","aria-label":"edit",type:"submit",children:(0,c.jsx)(O.Z,{sx:{fontSize:30}})})]}):(0,c.jsx)(P.Z,{})]})})}var V=function(){var e=(0,t.v9)(a.Af),n=(0,t.v9)(a.AD),r=(0,t.v9)(a.yF),o=(0,t.I0)(),i=(0,S.useState)(!1),s=(0,w.Z)(i,2),l=s[0],d=s[1],u=(0,S.useState)(null),m=(0,w.Z)(u,2),x=m[0],h=m[1],b=(0,S.useMemo)((function(){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}),[n,e]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(A.Z,{component:"ul",children:r?(0,c.jsx)(P.Z,{}):b.map((function(e){var n=e.id,r=e.name,t=e.number;return(0,c.jsxs)(p.Z,{component:"li",sx:{width:520,mx:"auto",my:1,py:1,px:2,display:"flex",alignItems:"center",justifyContent:"space-between",gap:1,borderRadius:"sm",boxShadow:"sx",position:"relative"},variant:"outlined",children:[(0,c.jsx)(z.Z,{}),(0,c.jsxs)(A.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,c.jsxs)(L.Z,{level:"h6",component:"p",sx:{width:220,textAlign:"center",textTransform:"capitalize"},children:[(0,c.jsx)("b",{children:r}),":"]}),(0,c.jsx)(L.Z,{level:"p",component:"p",sx:{width:170},children:t})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(I.Z,{color:"primary","aria-label":"delete",onClick:function(){h({id:n,name:r,number:t}),d(!0)},children:(0,c.jsx)(k.Z,{})}),(0,c.jsx)(I.Z,{color:"primary","aria-label":"delete",onClick:function(){return o((0,f.Lg)(n))},children:(0,c.jsx)(q.Z,{})})]})]},n)}))}),l&&(0,c.jsx)(M,{contactObj:x,openModal:l,handleClose:function(){d(!1),h(null)}})]})},$=r(1976),_=r(8155),N=function(){var e=(0,t.I0)();return(0,S.useEffect)((function(){e((0,f.CL)())}),[e]),(0,$.C)(!1,_.Z.home),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(C,{}),(0,c.jsx)(u,{}),(0,c.jsx)(V,{})]})}}}]);
//# sourceMappingURL=354.6b1ba7ec.chunk.js.map