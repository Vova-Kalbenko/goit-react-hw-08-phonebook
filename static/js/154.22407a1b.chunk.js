"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[154],{2639:function(e,n,t){t.d(n,{Z:function(){return a}});t(2791);var r="Loader_ldsspinner__Px-+7",o=t(184),a=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:r,children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]})})}},4154:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(9434),o="NOT_FOUND";var a=function(e,n){return e===n};function i(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,i=void 0===r?a:r,c=t.maxSize,u=void 0===c?1:c,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}}(i),d=1===u?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:o},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return o}return{get:r,put:function(n,a){r(n)===o&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,l);function f(){var n=d.get(arguments);if(n===o){if(n=e.apply(null,arguments),s){var t=d.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}d.put(arguments,n)}return n}return f.clearCache=function(){return d.clear()},f}function c(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function u(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a,i=0,u={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(u=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=u,d=l.memoizeOptions,f=void 0===d?t:d,h=Array.isArray(f)?f:[f],p=c(r),m=e.apply(void 0,[function(){return i++,s.apply(null,arguments)}].concat(h)),v=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return a=m.apply(null,e)}));return Object.assign(v,{resultFunc:s,memoizedResultFunc:m,dependencies:p,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return o}var s=u(i),l=function(e){return e.contacts.contacts},d=function(e){return e.contacts.isLoading},f=s([l,function(e){return e.filter.value}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),h=t(5653),p=t(5036),m=t(9439),v=t(2791),x="Phonebook_PhoneBookFormSection__GD998",j="Phonebook_PhoneBookFormForm__6eaQN",_="Phonebook_PhoneBookFormInput__6dhl8",y="Phonebook_PhoneBookFormSpan__FcEu4",b="Phonebook_PhoneBookFormButton__7x-b+",g=t(184),k=function(e){var n=e.onAddContact,t=(0,v.useState)(""),r=(0,m.Z)(t,2),o=r[0],a=r[1],i=(0,v.useState)(""),c=(0,m.Z)(i,2),u=c[0],s=c[1],l={name:o,number:u},d=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":a(r);break;case"number":s(r);break;default:return null}},f=function(){a(""),s("")};return(0,g.jsx)("section",{className:x,children:(0,g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(l),f()},className:j,children:[(0,g.jsxs)("label",{children:[(0,g.jsx)("span",{className:y,children:"Name"}),(0,g.jsx)("input",{onChange:d,type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]{4,8}*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Write name",className:_})]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("span",{className:y,children:"Number"}),(0,g.jsx)("input",{onChange:d,value:u,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Write number",className:_})]}),(0,g.jsx)("button",{type:"submit",className:b,children:"Add contact"})]})})},F="ContactList_ContactListFormSection__Yufk5",C="ContactList_ContactListFormForm__6XOAB",N="ContactList_ContactListdiv__RCvAc",A="ContactList_PhoneBookFormSpan__AVSOa",S=function(){var e=(0,r.I0)(),n=(0,r.v9)(l),t=(0,r.v9)(f);return(0,g.jsxs)("section",{className:F,children:[!n.length&&(0,g.jsx)("p",{children:"PhoneBook is empty"}),t.length>0?(0,g.jsx)("ul",{className:C,children:t.map((function(n){var t=n.name,r=n.number,o=n.id;return(0,g.jsx)("li",{"data-id":o,children:(0,g.jsxs)("div",{className:N,children:[(0,g.jsxs)("p",{className:A,children:[t,": ",r]}),(0,g.jsx)("button",{type:"button",name:"deleteBtn",onClick:function(){return function(n){e((0,p._f)(n))}(o)},children:"X"})]})},o)}))}):n.length>0&&(0,g.jsx)("p",{children:"PhoneBook is empty"})]})},w="Filter_FilterWrapper__B1ofT",P="Filter_FilterFormInput__jJb-w",B="Filter_FilterFormSpan__f-SYF",L=function(e){var n=e.onChangeFilter;return(0,g.jsx)("div",{className:w,children:(0,g.jsxs)("label",{children:[(0,g.jsx)("span",{className:B,children:"Search contact"}),(0,g.jsx)("input",{onChange:function(e){return n(e)},type:"text",name:"filter",placeholder:"Seacrh",className:P})]})})},z="Section_SectionTitle__WJ5ih",E=function(e){var n=e.title,t=e.children;return(0,g.jsxs)("section",{className:z,children:[(0,g.jsx)("h2",{children:n}),(0,g.jsx)(g.Fragment,{children:t})]})},O=t(2639),Z=function(){var e=(0,r.v9)(l),n=(0,r.v9)(d),t=(0,r.I0)();return(0,g.jsxs)("main",{children:[(0,g.jsx)(E,{title:"PhoneBook",children:(0,g.jsx)(k,{onAddContact:function(n){var r=e.find((function(e){return e.name===n.name}));r?console.log('"'.concat(r.name,'" \u0432\u0436\u0435 \u0454 \u0432 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456')):t((0,p.el)(n))}})}),(0,g.jsxs)(E,{title:"Contacts",children:[(0,g.jsx)(L,{onChangeFilter:function(e){t((0,h.a)(e.target.value))}}),(0,g.jsx)(S,{})]}),n&&(0,g.jsx)(O.Z,{})]})}}}]);
//# sourceMappingURL=154.22407a1b.chunk.js.map