(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={container:"FormStyles_container__2cl7a",headingForm:"FormStyles_headingForm__2VADU",contactList:"FormStyles_contactList__3X3kR",form:"FormStyles_form__2_eIn",labelName:"FormStyles_labelName__3VoOo",labelNumber:"FormStyles_labelNumber__1oNu8",btnForm:"FormStyles_btnForm__3c9r7",containerSearch:"FormStyles_containerSearch__39lw_",btnList:"FormStyles_btnList__PlxAD"}},17:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(11),o=n.n(r),s=(n(17),n(5)),i=n(12),l=n(6),u=n(7),m=n(9),b=n(8),d=n(3),h=n.n(d),j=n(1),f=n.n(j),p=n(0),v=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.InputValues=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(s.a)({},a,c))},e.addContact=function(t){t.preventDefault(),e.props.contactList({name:e.state.name})?alert("You already have this contact name!!"):(e.props.onSubmit({id:h.a.generate(),name:e.state.name,number:e.state.number}),e.resetInputValues())},e.resetInputValues=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=h.a.generate(),t=h.a.generate();return Object(p.jsxs)("form",{className:f.a.form,onSubmit:this.addContact,children:[Object(p.jsx)("label",{className:f.a.labelName,htmlFor:e,children:"Name"}),Object(p.jsx)("input",{id:e,type:"text",name:"name",value:this.state.name,onChange:this.InputValues,autoComplete:"off"}),Object(p.jsx)("label",{className:f.a.labelNumber,htmlFor:t,children:"Phone number"}),Object(p.jsx)("input",{id:t,type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",name:"number",value:this.state.number,onChange:this.InputValues,autoComplete:"off",required:!0}),Object(p.jsx)("button",{className:f.a.btnForm,type:"submit",children:"Add contact"})]})}}]),n}(a.Component);var O=function(e){var t=e.contactList,n=e.onDeleted;return Object(p.jsx)("ul",{className:"js-list",children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(p.jsxs)("li",{children:[a,": ",c,Object(p.jsx)("button",{className:f.a.btnList,type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})};var _=function(e){var t=e.value,n=e.SearchContact,a=h.a.generate();return Object(p.jsxs)("div",{className:f.a.containerSearch,children:[Object(p.jsx)("label",{className:f.a.labelSearch,htmlFor:a,children:"Search contact by name"}),Object(p.jsx)("input",{className:f.a.inputSearch,type:"text",name:"filter",value:t,onChange:n,id:a})]})},S=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){e.setState({contacts:[t].concat(Object(i.a)(e.state.contacts))})},e.valuesFilter=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(s.a)({},a,c))},e.getFilter=function(){var t=e.state,n=t.filter,a=t.contacts,c=n.toLocaleLowerCase();return a.filter((function(e){return e.name.toLocaleLowerCase().includes(c)}))},e.checkName=function(t){return e.state.contacts.some((function(e){return e.name===Object.values(t).join("")}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.getFilter();return Object(p.jsxs)("div",{className:f.a.container,children:[Object(p.jsx)("h1",{className:f.a.headingForm,children:"Phone Book"}),Object(p.jsx)(v,{onSubmit:this.addContact,contactList:this.checkName}),Object(p.jsx)("h2",{className:f.a.contactList,children:"Contacts"}),Object(p.jsx)(_,{value:this.state.filter,SearchContact:this.valuesFilter}),Object(p.jsx)(O,{contactList:e,onDeleted:this.deleteContact})]})}}]),n}(c.a.Component);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f64e1f0a.chunk.js.map