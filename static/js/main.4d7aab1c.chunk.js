(this["webpackJsonpevents-form"]=this["webpackJsonpevents-form"]||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){},115:function(e,t,n){},119:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(31),s=n.n(r),i=(n(112),n(2)),j=(n(113),n(114),n(1)),o=n(33),d=n.n(o),l=n(190),u=n(191),b=n(67),f=(n(115),n(8)),m=function(e){var t=e.countEvent,n=e.incrementCount,c=e.decrementCount;return Object(f.jsxs)("div",{className:"form-btns",children:[Object(f.jsxs)("div",{className:"set-count-btns",children:[Object(f.jsx)(b.a,{className:"add",onClick:n,children:"+"}),Object(f.jsx)(b.a,{className:"remove",danger:!0,disabled:!(t>1),onClick:c,children:"-"})]}),Object(f.jsx)(b.a,{className:"submit-btn",htmlType:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},O=n(51),v=(n(119),function(e){var t=e.setCountEvent,n=e.setData,c=e.countEvent,a=Object(O.b)({mode:"onBlur"}),r=a.handleSubmit,s=a.control,i=a.formState.errors,o=a.unregister;return Object(f.jsxs)("form",{onSubmit:r((function(e){var t=e.startDate;delete e.startDate,Object.keys(e).forEach((function(n){e[n].diffDate=e[n].eventDate.diff(t,"days"),e[n].diffDate<1&&e[n].eventDate.format("DD-MM-YYYY")!==t.format("DD-MM-YYYY")&&(e[n].diffDate=e[n].diffDate-1),e[n].eventDate=e[n].eventDate.format("DD-MM-YYYY")})),n(e)})),children:[Object(f.jsx)("label",{htmlFor:"currDate",children:"\u0414\u0430\u0442\u0430 \u043e\u0442\u0441\u0447\u0435\u0442\u0430:"}),Object(f.jsx)(O.a,{control:s,defaultValue:d()(),name:"startDate",render:function(e){var t=e.field;return Object(f.jsx)(l.a,Object(j.a)(Object(j.a)({},t),{},{id:"currDate",format:"DD-MM-YYYY",className:"current-date"}))}}),new Array(c).fill("").map((function(e,t){return Object(f.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("label",{htmlFor:"eventName",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f: "}),Object(f.jsx)(O.a,{name:"".concat(t,".event"),control:s,rules:{required:!0},render:function(e){var t=e.field;return Object(f.jsx)(u.a,Object(j.a)(Object(j.a)({},t),{},{id:"eventName",className:"event__name",placeholder:"Enter event name, please",size:"big",type:"text"}))}}),Object(f.jsx)("label",{htmlFor:"eventDate",children:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f: "}),Object(f.jsx)(O.a,{name:"".concat(t,".eventDate"),control:s,rules:{required:!0},render:function(e){var t=e.field;return Object(f.jsx)(l.a,Object(j.a)(Object(j.a)({},t),{},{id:"eventDate",format:"DD-MM-YYYY",className:"event__date"}))}})]}),i["".concat(t)]?i["".concat(t)].event&&Object(f.jsx)("div",{className:"error",children:"\u0412\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}):"",i["".concat(t)]?i["".concat(t)].eventDate&&Object(f.jsx)("div",{className:"error",children:"\u0412\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}):""]},t)})),Object(f.jsx)(m,{countEvent:c,incrementCount:function(){return t((function(e){return e+1}))},decrementCount:function(){o("".concat(c-1)),t((function(e){return e-1}))}})]})}),h=(n(187),function(e){var t=e.event,n=function(e){switch(e){case 0:return"\u0441\u0435\u0433\u043e\u0434\u043d\u044f";case 1:return"\u0437\u0430\u0432\u0442\u0440\u0430";case-1:return"\u0432\u0447\u0435\u0440\u0430";case 2:case 3:case 4:case-2:case-3:case-4:return"\u0434\u043d\u044f";default:return"\u0434\u043d\u0435\u0439"}}(t.diffDate);return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("strong",{children:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435 "}),Object(f.jsx)("span",{children:t.event}),t.diffDate>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("strong",{children:" \u041f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0435\u0442 "}),Object(f.jsx)("span",{children:t.diffDate>1?Object(f.jsxs)(f.Fragment,{children:["\u0447\u0435\u0440\u0435\u0437 ",t.diffDate," ",n]}):Object(f.jsxs)(f.Fragment,{children:[n," "]})})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("strong",{children:[" \u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e ",0===t.diffDate?Object(f.jsx)(f.Fragment,{children:"/\u041f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0435\u0442 "}):""]}),Object(f.jsx)("span",{children:-1===t.diffDate||0===t.diffDate?Object(f.jsxs)(f.Fragment,{children:[n," "]}):Object(f.jsxs)(f.Fragment,{children:[Math.abs(t.diffDate)," ",n," \u043d\u0430\u0437\u0430\u0434"]})})]})]})}),x=function(e){var t=e.events;return Object(f.jsx)("div",{className:"sended-events",children:Object.keys(t).map((function(e){return Object(f.jsx)(h,{event:t[e]},e)}))})},D=function(){var e=Object(c.useState)(1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({}),s=Object(i.a)(r,2),j=s[0],o=s[1];return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(v,{setCountEvent:a,setData:o,countEvent:n}),Object.keys(j).length?Object(f.jsx)(x,{events:j}):""]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root")),g()}},[[188,1,2]]]);
//# sourceMappingURL=main.4d7aab1c.chunk.js.map