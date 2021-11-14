(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(10),i=n.n(a),s=(n(15),n(9)),d=n(4),r=n(3),j=n(7),l=n(0),b=function(e){return Object(l.jsxs)("div",{className:"section category",children:[Object(l.jsx)("h2",{children:"Personal Information"}),Object(l.jsx)("input",{type:"text",id:"first",name:"first",placeholder:"First Name",onChange:e.onUpdate}),Object(l.jsx)("input",{type:"text",id:"last",name:"last",placeholder:"Last Name",onChange:e.onUpdate}),Object(l.jsx)("input",{type:"text",id:"location",name:"location",placeholder:"City, State",onChange:e.onUpdate}),Object(l.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email",onChange:e.onUpdate}),Object(l.jsx)("input",{type:"text",id:"github",name:"github",placeholder:"GitHub",onChange:e.onUpdate})]})},u=function(e){return Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("input",{type:"text",id:"position","data-id":e.id,name:"position",placeholder:"Position",onChange:e.onUpdate}),Object(l.jsx)("input",{type:"text",id:"company","data-id":e.id,name:"company",placeholder:"Company",onChange:e.onUpdate}),Object(l.jsx)("input",{type:"text",id:"location","data-id":e.id,name:"location",placeholder:"City, State",onChange:e.onUpdate}),Object(l.jsx)("input",{type:"text",id:"start","data-id":e.id,name:"start",placeholder:"Start Date",onChange:e.onUpdate}),Object(l.jsx)("input",{type:"text",id:"end","data-id":e.id,name:"end",placeholder:"End Date",onChange:e.onUpdate}),Object(l.jsx)("button",{type:"button",className:"btn remove-btn","data-id":e.id,onClick:e.onRemove,children:"Remove"})]})},p=function(e){var t=e.jobList.map((function(t){return Object(l.jsx)(u,{id:t.id,onUpdate:e.onJobInfoUpdate,onRemove:e.onDeleteJob},t.id)}));return Object(l.jsxs)("div",{className:"section category",children:[Object(l.jsx)("h2",{children:"Experience"}),t,Object(l.jsx)("button",{type:"button",className:"btn add-btn",onClick:e.onNewJob,children:"Add"})]})},h=function(e){return Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("input",{type:"text",id:"university","data-id":e.id,name:"university",placeholder:"University",onChange:e.onUpdate}),Object(l.jsx)("input",{type:"text",id:"location","data-id":e.id,name:"location",placeholder:"City, State",onChange:e.onUpdate}),Object(l.jsx)("input",{type:"text",id:"degree","data-id":e.id,name:"degree",placeholder:"Degree",onChange:e.onUpdate}),Object(l.jsx)("input",{type:"text",id:"subject","data-id":e.id,name:"subject",placeholder:"Subject",onChange:e.onUpdate}),Object(l.jsx)("input",{type:"text",id:"date","data-id":e.id,name:"date",placeholder:"Date Received",onChange:e.onUpdate}),Object(l.jsx)("button",{type:"button",className:"btn remove-btn","data-id":e.id,onClick:e.onRemove,children:"Remove"})]})},m=function(e){var t=e.schoolList.map((function(t){return Object(l.jsx)(h,{id:t.id,onUpdate:e.onSchoolInfoUpdate,onRemove:e.onDeleteSchool},t.id)}));return Object(l.jsxs)("div",{className:"section category",children:[Object(l.jsx)("h2",{children:"Education"}),t,Object(l.jsx)("button",{type:"button",className:"btn add-btn",onClick:e.onNewSchool,children:"Add"})]})},O=(n(17),function(e){return Object(l.jsx)("div",{className:"form-container",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(l.jsx)(b,{onUpdate:e.onPersonalUpdate}),Object(l.jsx)(p,{onJobInfoUpdate:e.onJobUpdate,onNewJob:e.onAddJob,onDeleteJob:e.onRemoveJob,jobList:e.jobs}),Object(l.jsx)(m,{onSchoolInfoUpdate:e.onSchoolUpdate,onNewSchool:e.onAddSchool,onDeleteSchool:e.onRemoveSchool,schoolList:e.schools})]})})}),x=n(2),f=n.n(x),y=(n(19),function(e){var t=e.experience.map((function(e){var t=e.entry,n=t.position,c=t.company,o=t.location,a=t.start,i=t.end;return Object(l.jsxs)("li",{className:"section-entry",children:[Object(l.jsxs)("div",{className:"entry-top",children:[Object(l.jsx)("h3",{children:n}),Object(l.jsxs)("p",{children:[a," - ",i]})]}),Object(l.jsxs)("div",{className:"entry-bottom",children:[Object(l.jsx)("p",{children:c}),Object(l.jsx)("p",{children:o})]})]},f()())})),n=e.education.map((function(e){var t=e.entry,n=t.university,c=t.location,o=t.degree,a=t.subject,i=t.date;return Object(l.jsxs)("li",{className:"section-entry",children:[Object(l.jsxs)("div",{className:"entry-top",children:[Object(l.jsx)("h3",{children:n}),Object(l.jsx)("p",{children:i})]}),Object(l.jsxs)("div",{className:"entry-bottom",children:[Object(l.jsxs)("p",{children:[o," - ",a]}),Object(l.jsx)("p",{children:c})]})]},f()())}));return Object(l.jsxs)("div",{className:"resume-body",children:[Object(l.jsxs)("div",{className:"resume-section",children:[Object(l.jsx)("h2",{className:"section-header",children:"Work Experience"}),Object(l.jsx)("ul",{children:t})]}),Object(l.jsxs)("div",{className:"resume-section",children:[Object(l.jsx)("h2",{className:"section-header",children:"Education"}),Object(l.jsx)("ul",{children:n})]})]})}),v=(n(20),function(e){var t=e.personal,n=t.first,c=t.last,o=t.location,a=t.email,i=t.github;return Object(l.jsxs)("div",{className:"resume-header",children:[Object(l.jsx)("h1",{className:"resume-name",children:"".concat(n," ").concat(c)}),Object(l.jsx)("p",{className:"personal-details",children:"".concat(o," | ").concat(a," | ").concat(i)})]})}),g=(n(21),function(e){return Object(l.jsxs)("div",{className:"resume-container",children:[Object(l.jsx)(v,{personal:e.personalInfo}),Object(l.jsx)(y,{experience:e.jobInfo,education:e.schoolInfo})]})}),N=(n(22),n(23),function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{className:"header",children:"Resume Builder"})})}),U=(n(24),function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("p",{className:"footer",children:"Copyright \xa9 2021 mdesanker"})})});var C=function(){var e=Object(c.useState)({first:"",last:"",location:"",email:"",github:""}),t=Object(j.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)([{entry:"",id:f()()}]),i=Object(j.a)(a,2),b=i[0],u=i[1],p=Object(c.useState)([{entry:"",id:f()()}]),h=Object(j.a)(p,2),m=h[0],x=h[1];return Object(c.useEffect)((function(){}),[n]),Object(c.useEffect)((function(){}),[b]),Object(c.useEffect)((function(){}),[m]),Object(l.jsxs)("div",{className:"app-container",children:[Object(l.jsx)(N,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(O,{onPersonalUpdate:function(e){var t=e.target,n=t.name,c=t.value;o((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(d.a)({},n,c))}))},onJobUpdate:function(e){var t=e.target,n=t.name,c=t.value;u((function(t){return t.map((function(t){return t.id===e.target.dataset.id?{entry:Object(r.a)(Object(r.a)({},t.entry),{},Object(d.a)({},n,c)),id:t.id}:t}))}))},onAddJob:function(){u((function(e){return[].concat(Object(s.a)(e),[{entry:"",id:f()()}])}))},onRemoveJob:function(e){u((function(t){return t.filter((function(t){return t.id!==e.target.dataset.id}))}))},jobs:b,onSchoolUpdate:function(e){var t=e.target,n=t.name,c=t.value;x((function(t){return t.map((function(t){return t.id===e.target.dataset.id?{entry:Object(r.a)(Object(r.a)({},t.entry),{},Object(d.a)({},n,c)),id:t.id}:t}))}))},onAddSchool:function(){x((function(e){return[].concat(Object(s.a)(e),[{entry:"",id:f()()}])}))},onRemoveSchool:function(e){x((function(t){return t.filter((function(t){return t.id!==e.target.dataset.id}))}))},schools:m}),Object(l.jsx)(g,{personalInfo:n,jobInfo:b,schoolInfo:m})]}),Object(l.jsx)(U,{})]})};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.151adde9.chunk.js.map