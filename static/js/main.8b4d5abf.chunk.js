(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c,a,r,i=n(0),u=n.n(i),o=n(8),s=n.n(o),l=(n(27),n(12)),j=n(13),b=j.a.div(c||(c=Object(l.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n"]))),d=j.a.input(a||(a=Object(l.a)(["\n    width: 50vw;\n    text-align: center;\n"]))),h=n(3),O=n(15),v=n(6),f=n(7),A=n(10),p="CHANGE_DNA_INPUT",m="MAKE_PRIMER",S=Object(A.createAction)(p)(),N=Object(A.createAction)(m)(),g=Object(A.createReducer)({DNASequence:"",revertedSeq:"",complementarySeq:""},(r={},Object(v.a)(r,p,(function(e,t){return Object(f.a)(Object(f.a)({},e),{},{DNASequence:t.payload})})),Object(v.a)(r,m,(function(e){var t=x(e.DNASequence),n=D(t);return Object(f.a)(Object(f.a)({},e),{},{revertedSeq:t,complementarySeq:n})})),r)),x=function(e){var t,n=[],c=Object(O.a)(e);try{for(c.s();!(t=c.n()).done;){var a=t.value;n.unshift(a)}}catch(r){c.e(r)}finally{c.f()}return n.join("")},D=function(e){var t,n=[],c=Object(O.a)(e);try{for(c.s();!(t=c.n()).done;){switch(t.value){case"a":case"A":n.push("t");break;case"t":case"T":n.push("a");break;case"g":case"G":n.push("c");break;case"c":case"C":n.push("g")}}}catch(a){c.e(a)}finally{c.f()}return n.join("")},q=g,C=function(){var e=Object(h.c)((function(e){return e.DNA.DNASequence})),t=Object(h.c)((function(e){return e.DNA.revertedSeq})),n=Object(h.c)((function(e){return e.DNA.complementarySeq})),c=Object(h.b)();return{DNASequence:e,revertedDNA:t,complementarySeq:n,setDNASequence:Object(i.useCallback)((function(e){return c(S(e))}),[c]),wholeInOne:Object(i.useCallback)((function(){return c(N())}),[c])}},y=n(22),k={initialValue:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=e.initialValue,n=void 0===t?"":t,c=e.validator,a=void 0===c?void 0:c,r=e.callback,u=void 0===r?void 0:r,o=Object(i.useState)(n),s=Object(y.a)(o,2),l=s[0],j=s[1],b=function(e){var t=e.target.value;(!a||a(t))&&(j(t),u&&u(t))};return{value:l,onChange:b}},W=n(1);var I=function(){var e=C(),t=e.revertedDNA,n=e.complementarySeq,c=e.setDNASequence,a=e.wholeInOne,r=w({validator:function(e){return e.endsWith("a")||e.endsWith("A")||e.endsWith("t")||e.endsWith("T")||e.endsWith("g")||e.endsWith("G")||e.endsWith("c")||e.endsWith("C")},callback:c}),i=r.value,u=r.onChange;return Object(W.jsxs)(b,{children:[Object(W.jsx)("h2",{children:" Input DNA "}),Object(W.jsx)(d,{type:"text",value:i,onChange:u}),Object(W.jsx)("button",{onClick:a,children:"Make Primer"}),Object(W.jsx)("h2",{children:" Reverted DNA "}),Object(W.jsxs)("h3",{children:[" ",t," "]}),Object(W.jsx)("h2",{children:" Complement Combination Sequence "}),Object(W.jsxs)("h3",{children:[" ",n," "]})]})};var F=function(){return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(I,{})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},T=n(2),E=Object(T.c)({DNA:q}),M=n(21),R=Object(T.d)(E,Object(T.a)(M.a));s.a.render(Object(W.jsx)(u.a.StrictMode,{children:Object(W.jsx)(h.a,{store:R,children:Object(W.jsx)(F,{})})}),document.getElementById("root")),P()}},[[36,1,2]]]);
//# sourceMappingURL=main.8b4d5abf.chunk.js.map