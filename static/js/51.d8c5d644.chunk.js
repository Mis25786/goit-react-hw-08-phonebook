"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[51],{1051:function(e,t,r){r.r(t),r.d(t,{RegistrationPage:function(){return h},default:function(){return d}});r(2791);var a=r(9434),n=r(1087),s=r(5861),i=r(4687),l=r.n(i),c=r(1243),o=r(9829);c.Z.defaults.baseURL="https://connections-api.herokuapp.com";var u=(0,o.hg)("auth/register",function(){var e=(0,s.Z)(l().mark((function e(t,r){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.post("users/signup",t);case 3:return a=e.sent,n=a.data.token,c.Z.defaults.headers.common.Authorization="Bearer ".concat(n),e.abrupt("return",a.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",r.rejectWithValue(e.t0.message));case 11:case"end":return e.stop()}var n}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()),m=((0,o.hg)("auth/login",function(){var e=(0,s.Z)(l().mark((function e(t,r){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),(0,o.hg)("auth/logout",function(){var e=(0,s.Z)(l().mark((function e(t,r){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),(0,o.hg)("auth/refresh",function(){var e=(0,s.Z)(l().mark((function e(t,r){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),r(184)),p=function(){var e=(0,a.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"container",children:(0,m.jsx)(n.rU,{to:"/",className:"btn btn-success mt-5",children:"Go Home"})}),(0,m.jsxs)("div",{className:"card position-absolute top-50 start-50 translate-middle p-2",style:{minWidth:"350px"},children:[(0,m.jsx)("h1",{className:"text-center",children:"REGISTER"}),(0,m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.currentTarget;e(u({name:r.elements.name.value,email:r.elements.email.value,password:r.elements.password.value})),r.reset()},children:[(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"exampleInputName1",className:"form-label",children:"Name"}),(0,m.jsx)("input",{name:"name",type:"text",className:"form-control",id:"exampleInputName1"})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),(0,m.jsx)("input",{name:"email",type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),(0,m.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),(0,m.jsx)("input",{name:"password",type:"password",className:"form-control",id:"exampleInputPassword1"})]}),(0,m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register"})]})]})]})},h=function(){return(0,m.jsx)(p,{})},d=h}}]);
//# sourceMappingURL=51.d8c5d644.chunk.js.map