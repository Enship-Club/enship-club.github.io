_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"3Z9Z":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),s=n("TSYQ"),c=n.n(s),i=n("q1tI"),o=n.n(i),u=n("vUet"),l=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.noGutters,d=e.as,f=void 0===d?"div":d,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(u.a)(n,"row"),b=m+"-cols",v=[];return l.forEach((function(e){var t,n=p[e];delete p[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&v.push(""+b+a+"-"+t)})),o.a.createElement(f,Object(a.a)({ref:t},p,{className:c.a.apply(void 0,[s,m,i&&"no-gutters"].concat(v))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"7vrA":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),s=n("TSYQ"),c=n.n(s),i=n("q1tI"),o=n.n(i),u=n("vUet"),l=o.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.fluid,i=e.as,l=void 0===i?"div":i,d=e.className,f=Object(r.a)(e,["bsPrefix","fluid","as","className"]),p=Object(u.a)(n,"container"),m="string"===typeof s?"-"+s:"-fluid";return o.a.createElement(l,Object(a.a)({ref:t},f,{className:c()(d,s?""+p+m:p)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.a=l},GR68:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/alumni",function(){return n("ln66")}])},JI6e:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),s=n("TSYQ"),c=n.n(s),i=n("q1tI"),o=n.n(i),u=n("vUet"),l=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.as,d=void 0===i?"div":i,f=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(u.a)(n,"col"),m=[],b=[];return l.forEach((function(e){var t,n,a,r=f[e];if(delete f[e],"object"===typeof r&&null!=r){var s=r.span;t=void 0===s||s,n=r.offset,a=r.order}else t=r;var c="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+p+c:""+p+c+"-"+t),null!=a&&b.push("order"+c+"-"+a),null!=n&&b.push("offset"+c+"-"+n)})),m.length||m.push(p),o.a.createElement(d,Object(a.a)({},f,{ref:t,className:c.a.apply(void 0,[s].concat(m,b))}))}));d.displayName="Col",t.a=d},KVby:function(e,t,n){e.exports={memberCard:"MemberCard_memberCard__mqO9C"}},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===s)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},VVLG:function(e,t,n){e.exports={standard:"MemberSection_standard__3eYp9"}},chyJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("nKUr"),r=n("3Z9Z"),s=n("JI6e"),c=n("KVby"),i=n.n(c);function o(e){var t=e.name,n=e.post;return Object(a.jsx)(s.a,{xs:3,className:i.a.memberCard,children:Object(a.jsxs)("div",{className:"text",children:[Object(a.jsx)("div",{className:"name",children:Object(a.jsx)("strong",{children:t})}),Object(a.jsx)("div",{className:"post",children:n})]})})}var u=n("VVLG"),l=n.n(u);function d(e){var t=e.standard,n=e.students;return Object(a.jsxs)("div",{className:l.a.section,children:[Object(a.jsx)("h2",{style:{textAlign:"center",margin:"40px 0"},children:t}),Object(a.jsx)(r.a,{style:{justifyContent:"center"},children:n.map((function(e){return Object(a.jsx)(o,{name:e.name,post:e.post})}))})]})}},ln66:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n("nKUr"),r=n("7vrA"),s=[{batch:"2019-2020",students:[{name:"Aditya Batra",post:"President"},{name:"Tanish Goel",post:"President"},{name:"Shravan Gupta",post:"Vice President"},{name:"Aarushi Nema",post:"Vice President"}]},{batch:"2018-2019",students:[{name:"Shreeya Singhal",post:"President"},{name:"Sharanya Verma",post:"President"},{name:"Shobhan Bhatia",post:"Vice President"},{name:"Rohit Kumar",post:"Director"}]},{batch:"2017-2018",students:[{name:"Anu Khandelwal",post:"President"},{name:"Nitya Agarwal",post:"Vice President"},{name:"Manya Duggal",post:"Director"}]}],c=n("chyJ");function i(){return Object(a.jsx)(r.a,{children:s.map((function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(c.a,{standard:"Batch of "+e.batch,students:e.students})})}))})}},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("wx14");var a=n("q1tI"),r=n.n(a),s=r.a.createContext({});s.Consumer,s.Provider;function c(e,t){var n=Object(a.useContext)(s);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}},[["GR68",0,1]]]);