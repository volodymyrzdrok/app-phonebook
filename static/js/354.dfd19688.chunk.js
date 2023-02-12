"use strict";(self.webpackChunkapp_phonebook=self.webpackChunkapp_phonebook||[]).push([[354],{3354:function(e,n,r){r.r(n),r.d(n,{default:function(){return $}});var a=r(9434),t=r(1538),i=r(2102),o=r(9784),s=r(9090),l=r(9227),d=r(1421),c=r(3329),u=function(){var e=(0,a.I0)();return(0,c.jsx)(i.lL,{children:(0,c.jsxs)(o.Z,{sx:{width:350,mx:"auto",my:4,py:1,px:2,display:"flex",flexDirection:"column",gap:2,borderRadius:"sx",boxShadow:"md"},variant:"outlined",children:[(0,c.jsxs)(s.Z,{children:["Filter Contacts",(0,c.jsx)(d.Z,{sx:{fontSize:30,mx:3}})]}),(0,c.jsx)(l.ZP,{onInput:function(n){var r=n.target.value.trim().toLowerCase();e((0,t.Qt)(r))},type:"text",placeholder:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]})})},m=r(2419),x=r(7756),h=r(3192),p=r(661),b=r(3168),j=r(2011),f=r(6052),Z=r(5206),v=r(5705),g=r(2797),y=g.Ry().shape({name:g.Z_().min(2,"Too Short!").max(50,"Too Long!").matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","only letters!").required("Required"),number:g.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(8).required("A phone number is required")}),C=function(){var e=(0,a.v9)(t.Af),n=(0,a.I0)(),r=(0,v.TA)({initialValues:{name:"",number:""},validationSchema:y,onSubmit:function(a){var t=e.find((function(e){return e.name.toLowerCase()===a.name.toLowerCase()}));t?Z.Am.info("".concat(t.name," is already in contacts"),{position:"top-right",autoClose:1700,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"}):(n((0,f.qL)(a)),r.resetForm())}}),d=r.errors,u=r.touched;return(0,c.jsxs)(i.lL,{children:[(0,c.jsxs)(p.Z,{onSubmit:r.handleSubmit,component:"form",sx:{width:350,mx:"auto",my:4,py:3,px:2,display:"flex",flexDirection:"column",gap:2,borderRadius:"sx",boxShadow:"md"},variant:"outlined",children:[(0,c.jsx)(b.C,{sx:{mx:"auto"},level:"h5",component:"h1",children:(0,c.jsx)("b",{children:" Create new contact!"})}),(0,c.jsxs)(o.Z,{children:[(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(x.Z,{sx:{fontSize:20,mr:3}}),(0,c.jsx)(b.C,{sx:{color:"red",fontSize:10},children:d.name&&u.name?d.name:null})]}),(0,c.jsx)(l.ZP,{placeholder:"name",name:"name",type:"text",required:!0,onChange:r.handleChange,value:r.values.name})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(h.Z,{sx:{fontSize:20,mr:3}}),(0,c.jsx)(b.C,{sx:{color:"red",fontSize:10},children:d.number&&u.number?d.number:null})]}),(0,c.jsx)(l.ZP,{name:"number",type:"tel",placeholder:"number",required:!0,onChange:r.handleChange,value:r.values.number})]}),(0,c.jsxs)(j.Z,{type:"submit",size:"md",sx:function(e){return{background:"linear-gradient(-45deg, ".concat(e.vars.palette.primary[800],", ").concat(e.vars.palette.primary[500],")"),fontWeight:"lg","&:hover":{background:"linear-gradient(-45deg, ".concat(e.vars.palette.primary[900],", ").concat(e.vars.palette.primary[600],")")}}},children:["Add Contact ",(0,c.jsx)(m.Z,{sx:{mx:2}})]})]}),(0,c.jsx)(Z.Ix,{})]})};var w=r(9439),A=r(9276),S=r(2791),z=r(1747),k=r(4251),q=r(9984),L=r(890),I=r(3400),F=r(8870),R=r(5176),T=r(8096),D=r(4925),O=r(3697),P=r(2575),E=r(2027);function M(e){var n=e.openModal,r=e.handleClose,t=e.contactObj,i=(0,a.I0)();return(0,c.jsx)(R.Z,{open:n,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,c.jsxs)(F.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:450,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},component:"form",onSubmit:function(e){e.preventDefault();var n=t.id,a=e.target.name.value.trim(),o=e.target.number.value.trim();i((0,f.Tk)({id:n,name:a,number:o})),r()},children:[(0,c.jsx)(L.Z,{sx:{mb:2},level:"h6",color:"primary",component:"h2",children:(0,c.jsx)("b",{children:" Edit contact"})}),t?(0,c.jsxs)(F.Z,{children:[(0,c.jsxs)(T.Z,{variant:"standard",children:[(0,c.jsx)(D.Z,{htmlFor:"name",children:"Name"}),(0,c.jsx)(O.Z,{id:"name",defaultValue:null===t||void 0===t?void 0:t.name,name:"name",type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]}),(0,c.jsxs)(T.Z,{variant:"standard",sx:{mx:2},children:[(0,c.jsx)(D.Z,{htmlFor:"number",children:"Number"}),(0,c.jsx)(O.Z,{id:"number",defaultValue:t.number,name:"number",type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0})]}),(0,c.jsx)(I.Z,{color:"primary","aria-label":"edit",type:"submit",children:(0,c.jsx)(P.Z,{sx:{fontSize:30}})})]}):(0,c.jsx)(E.Z,{})]})})}var V=function(){var e=(0,a.v9)(t.Af),n=(0,a.v9)(t.AD),r=(0,a.v9)(t.yF),i=(0,a.I0)(),o=(0,S.useState)(!1),s=(0,w.Z)(o,2),l=s[0],d=s[1],u=(0,S.useState)(null),m=(0,w.Z)(u,2),x=m[0],h=m[1],b=(0,S.useMemo)((function(){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}),[n,e]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(A.Z,{component:"ul",children:r?(0,c.jsx)(E.Z,{}):b.map((function(e){var n=e.id,r=e.name,a=e.number;return(0,c.jsxs)(p.Z,{component:"li",sx:{width:520,mx:"auto",my:1,py:1,px:2,display:"flex",alignItems:"center",justifyContent:"space-between",gap:1,borderRadius:"sm",boxShadow:"sx",position:"relative"},variant:"outlined",children:[(0,c.jsx)(z.Z,{}),(0,c.jsxs)(A.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,c.jsxs)(L.Z,{level:"h6",component:"p",sx:{width:220,textAlign:"center",textTransform:"capitalize"},children:[(0,c.jsx)("b",{children:r}),":"]}),(0,c.jsx)(L.Z,{level:"p",component:"p",sx:{width:170},children:a})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(I.Z,{color:"primary","aria-label":"delete",onClick:function(){h({id:n,name:r,number:a}),d(!0)},children:(0,c.jsx)(k.Z,{})}),(0,c.jsx)(I.Z,{color:"primary","aria-label":"delete",onClick:function(){return i((0,f.Lg)(n))},children:(0,c.jsx)(q.Z,{})})]})]},n)}))}),l&&(0,c.jsx)(M,{contactObj:x,openModal:l,handleClose:function(){d(!1),h(null)}})]})},$=function(){var e=(0,a.I0)();return(0,S.useEffect)((function(){e((0,f.CL)())}),[e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(C,{}),(0,c.jsx)(u,{}),(0,c.jsx)(V,{})]})}}}]);
//# sourceMappingURL=354.dfd19688.chunk.js.map