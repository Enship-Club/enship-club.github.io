_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"default",(function(){return je}));var a=n("nKUr"),o=(n("q4sD"),n("8Kt/")),i=n.n(o),c=n("8lYe"),s=n("YFqc"),l=n.n(s),u=n("wx14"),f=n("zLVn"),d=n("TSYQ"),p=n.n(d),b=n("q1tI"),v=n.n(b),h=n("JCAc"),j=n("YdCC"),m=n("vUet"),y=v.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,o=Object(f.a)(e,["bsPrefix","className","as"]);n=Object(m.a)(n,"navbar-brand");var i=a||(o.href?"a":"span");return v.a.createElement(i,Object(u.a)({},o,{ref:t,className:p()(r,n)}))}));y.displayName="NavbarBrand";var x,O=y,g=n("7j6X"),w=n("YECM"),E=n("dRu9"),C=n("Qg85"),N=n("z+q/"),P={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function k(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=P[e];return n+parseInt(Object(g.a)(t,r[0]),10)+parseInt(Object(g.a)(t,r[1]),10)}var _=((x={})[E.c]="collapse",x[E.d]="collapsing",x[E.b]="collapsing",x[E.a]="collapse show",x),S={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:k},M=v.a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,a=e.onEntered,o=e.onExit,i=e.onExiting,c=e.className,s=e.children,l=e.dimension,d=void 0===l?"height":l,h=e.getDimensionValue,j=void 0===h?k:h,m=Object(f.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),y="function"===typeof d?d():d,x=Object(b.useMemo)((function(){return Object(C.a)((function(e){e.style[y]="0"}),n)}),[y,n]),O=Object(b.useMemo)((function(){return Object(C.a)((function(e){var t="scroll"+y[0].toUpperCase()+y.slice(1);e.style[y]=e[t]+"px"}),r)}),[y,r]),g=Object(b.useMemo)((function(){return Object(C.a)((function(e){e.style[y]=null}),a)}),[y,a]),P=Object(b.useMemo)((function(){return Object(C.a)((function(e){e.style[y]=j(y,e)+"px",Object(N.a)(e)}),o)}),[o,j,y]),S=Object(b.useMemo)((function(){return Object(C.a)((function(e){e.style[y]=null}),i)}),[y,i]);return v.a.createElement(E.e,Object(u.a)({ref:t,addEndListener:w.a},m,{"aria-expanded":m.role?m.in:null,onEnter:x,onEntering:O,onEntered:g,onExit:P,onExiting:S}),(function(e,t){return v.a.cloneElement(s,Object(u.a)({},t,{className:p()(c,s.props.className,_[e],"width"===y&&"width")}))}))}));M.defaultProps=S;var I=M,A=v.a.createContext(null);A.displayName="NavbarContext";var R=A,D=v.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,a=Object(f.a)(e,["children","bsPrefix"]);return r=Object(m.a)(r,"navbar-collapse"),v.a.createElement(R.Consumer,null,(function(e){return v.a.createElement(I,Object(u.a)({in:!(!e||!e.expanded)},a),v.a.createElement("div",{ref:t,className:r},n))}))}));D.displayName="NavbarCollapse";var K=D,T=n("ZCiN"),L=v.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.label,i=e.as,c=void 0===i?"button":i,s=e.onClick,l=Object(f.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(m.a)(n,"navbar-toggler");var d=Object(b.useContext)(R)||{},h=d.onToggle,j=d.expanded,y=Object(T.a)((function(e){s&&s(e),h&&h()}));return"button"===c&&(l.type="button"),v.a.createElement(c,Object(u.a)({},l,{ref:t,onClick:y,"aria-label":o,className:p()(r,n,!j&&"collapsed")}),a||v.a.createElement("span",{className:n+"-icon"}))}));L.displayName="NavbarToggle",L.defaultProps={label:"Toggle navigation"};var q=L,H=v.a.createContext(null),J=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},Y=H,U=Object(j.a)("navbar-text",{Component:"span"}),W=v.a.forwardRef((function(e,t){var n=Object(h.a)(e,{expanded:"onToggle"}),r=n.bsPrefix,a=n.expand,o=n.variant,i=n.bg,c=n.fixed,s=n.sticky,l=n.className,d=n.children,j=n.as,y=void 0===j?"nav":j,x=n.expanded,O=n.onToggle,g=n.onSelect,w=n.collapseOnSelect,E=Object(f.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),C=Object(m.a)(r,"navbar"),N=Object(b.useCallback)((function(){g&&g.apply(void 0,arguments),w&&x&&O&&O(!1)}),[g,w,x,O]);void 0===E.role&&"nav"!==y&&(E.role="navigation");var P=C+"-expand";"string"===typeof a&&(P=P+"-"+a);var k=Object(b.useMemo)((function(){return{onToggle:function(){return O&&O(!x)},bsPrefix:C,expanded:!!x}}),[C,x,O]);return v.a.createElement(R.Provider,{value:k},v.a.createElement(Y.Provider,{value:N},v.a.createElement(y,Object(u.a)({ref:t},E,{className:p()(l,C,a&&P,o&&C+"-"+o,i&&"bg-"+i,s&&"sticky-"+s,c&&"fixed-"+c)}),d)))}));W.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},W.displayName="Navbar",W.Brand=O,W.Toggle=q,W.Collapse=K,W.Text=U;var F=W,B=(n("K9S6"),v.a.createContext(null));B.displayName="CardContext";var Z=B,z=n("Zeqi"),Q=n("YGJp"),V=n("lcWJ"),X=v.a.createContext(null);X.displayName="NavContext";var G=X,$=v.a.createContext(null),ee=function(){},te=v.a.forwardRef((function(e,t){var n,r,a=e.as,o=void 0===a?"ul":a,i=e.onSelect,c=e.activeKey,s=e.role,l=e.onKeyDown,d=Object(f.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),p=Object(Q.a)(),h=Object(b.useRef)(!1),j=Object(b.useContext)(Y),m=Object(b.useContext)($);m&&(s=s||"tablist",c=m.activeKey,n=m.getControlledId,r=m.getControllerId);var y=Object(b.useRef)(null),x=function(e){var t=y.current;if(!t)return null;var n=Object(z.a)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var a=n.indexOf(r);if(-1===a)return null;var o=a+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},O=function(e,t){null!=e&&(i&&i(e,t),j&&j(e,t))};Object(b.useEffect)((function(){if(y.current&&h.current){var e=y.current.querySelector("[data-rb-event-key].active");e&&e.focus()}h.current=!1}));var g=Object(V.a)(t,y);return v.a.createElement(Y.Provider,{value:O},v.a.createElement(G.Provider,{value:{role:s,activeKey:J(c),getControlledId:n||ee,getControllerId:r||ee}},v.a.createElement(o,Object(u.a)({},d,{onKeyDown:function(e){var t;switch(l&&l(e),e.key){case"ArrowLeft":case"ArrowUp":t=x(-1);break;case"ArrowRight":case"ArrowDown":t=x(1);break;default:return}t&&(e.preventDefault(),O(t.dataset.rbEventKey,e),h.current=!0,p())},ref:g,role:s}))))})),ne=v.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.as,i=void 0===o?"div":o,c=Object(f.a)(e,["bsPrefix","className","children","as"]);return n=Object(m.a)(n,"nav-item"),v.a.createElement(i,Object(u.a)({},c,{ref:t,className:p()(r,n)}),a)}));ne.displayName="NavItem";var re=ne,ae=n("dbZe"),oe=(n("2W6z"),v.a.forwardRef((function(e,t){var n=e.active,r=e.className,a=e.eventKey,o=e.onSelect,i=e.onClick,c=e.as,s=Object(f.a)(e,["active","className","eventKey","onSelect","onClick","as"]),l=J(a,s.href),d=Object(b.useContext)(Y),h=Object(b.useContext)(G),j=n;if(h){s.role||"tablist"!==h.role||(s.role="tab");var m=h.getControllerId(l),y=h.getControlledId(l);s["data-rb-event-key"]=l,s.id=m||s.id,s["aria-controls"]=y||s["aria-controls"],j=null==n&&null!=l?h.activeKey===l:n}"tab"===s.role&&(s.tabIndex=j?s.tabIndex:-1,s["aria-selected"]=j);var x=Object(T.a)((function(e){i&&i(e),null!=l&&(o&&o(l,e),d&&d(l,e))}));return v.a.createElement(c,Object(u.a)({},s,{ref:t,onClick:x,className:p()(r,j&&"active")}))})));oe.defaultProps={disabled:!1};var ie=oe,ce={disabled:!1,as:ae.a},se=v.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,a=e.className,o=e.href,i=e.eventKey,c=e.onSelect,s=e.as,l=Object(f.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(m.a)(n,"nav-link"),v.a.createElement(ie,Object(u.a)({},l,{href:o,ref:t,eventKey:i,as:s,disabled:r,onSelect:c,className:p()(a,n,r&&"disabled")}))}));se.displayName="NavLink",se.defaultProps=ce;var le=se,ue=v.a.forwardRef((function(e,t){var n,r,a,o=Object(h.a)(e,{activeKey:"onSelect"}),i=o.as,c=void 0===i?"div":i,s=o.bsPrefix,l=o.variant,d=o.fill,j=o.justify,y=o.navbar,x=o.className,O=o.children,g=o.activeKey,w=Object(f.a)(o,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),E=Object(m.a)(s,"nav"),C=!1,N=Object(b.useContext)(R),P=Object(b.useContext)(Z);return N?(r=N.bsPrefix,C=null==y||y):P&&(a=P.cardHeaderBsPrefix),v.a.createElement(te,Object(u.a)({as:c,ref:t,activeKey:g,className:p()(x,(n={},n[E]=!C,n[r+"-nav"]=C,n[a+"-"+l]=!!a,n[E+"-"+l]=!!l,n[E+"-fill"]=d,n[E+"-justified"]=j,n))},w),O)}));ue.displayName="Nav",ue.defaultProps={justify:!1,fill:!1},ue.Item=re,ue.Link=le;var fe=ue,de=n("rYLu"),pe=n.n(de);function be(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(F,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top",className:pe.a.navbar,children:[Object(a.jsx)(l.a,{href:"/",children:Object(a.jsx)(F.Brand,{children:"Enship"})}),Object(a.jsx)(F.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsx)(F.Collapse,{id:"responsive-navbar-nav",children:Object(a.jsxs)(fe,{className:"mr-auto",children:[Object(a.jsx)(fe.Link,{href:"/",children:"Home"}),Object(a.jsx)(fe.Link,{href:"/about",children:"About"}),Object(a.jsx)(fe.Link,{href:"/events",children:"Events"}),Object(a.jsx)(fe.Link,{href:"/faculty",children:"Faculty"}),Object(a.jsx)(fe.Link,{href:"/members",children:"Members"}),Object(a.jsx)(fe.Link,{href:"/alumni",children:"Alumni"})]})})]})})}function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function je(e){var t=e.Component,n=e.pageProps;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(i.a,{children:[Object(a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",rel:"stylesheet"}),Object(a.jsx)("script",{src:"https://kit.fontawesome.com/a271827d0d.js",crossorigin:"anonymous"}),Object(a.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),Object(a.jsx)("title",{children:"Enship Official Website"})]}),Object(a.jsx)(be,{}),Object(a.jsx)(t,he({style:{fontFamily:"IBM Plex Sans",backgroundColor:"#f1f1f1"}},n)),Object(a.jsx)(c.a,{})]})}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var l=d[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var u=a.props[l],f=r[l]||new Set;f.has(u)?o=!1:(f.add(u),r[l]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}b.rewind=function(){};var v=b;t.default=v},"8lYe":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("nKUr"),a=n("MX0m"),o=n.n(a),i=n("3Z9Z"),c=n("JI6e"),s=n("nOHt");function l(){var e=null;if("/faculty"===Object(s.useRouter)().pathname)e="0px";return Object(r.jsxs)("div",{style:{bottom:e},className:"jsx-1061465374 footer",children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)(c.a,{sm:5,children:Object(r.jsx)("p",{className:"jsx-1061465374",children:"\xa9 Enship - The Entrepreneurship Club of Delhi Public School, R.K. Puram"})}),Object(r.jsx)(c.a,{sm:7,style:{textAlign:"right"},children:Object(r.jsxs)("ul",{class:"contacts",className:"jsx-1061465374",children:[Object(r.jsx)("a",{href:"mailto:enship@dpsrkp.net",target:"_blank",className:"jsx-1061465374",children:Object(r.jsx)("li",{style:{margin:"10px"},className:"jsx-1061465374",children:Object(r.jsx)("i",{class:"fas fa-at",className:"jsx-1061465374"})})}),Object(r.jsx)("a",{href:"https://www.facebook.com/enshipdpsrkp/",target:"_blank",className:"jsx-1061465374",children:Object(r.jsx)("li",{style:{margin:"10px"},className:"jsx-1061465374",children:Object(r.jsx)("i",{class:"fab fa-facebook",className:"jsx-1061465374"})})}),Object(r.jsx)("a",{href:"https://www.instagram.com/enshipclub/",target:"_blank",className:"jsx-1061465374",children:Object(r.jsx)("li",{style:{margin:"10px"},className:"jsx-1061465374",children:Object(r.jsx)("i",{class:"fab fa-instagram",className:"jsx-1061465374"})})})]})})]}),Object(r.jsx)(o.a,{id:"1061465374",children:[".footer.jsx-1061465374{background-color:#000;padding:20px;color:#ffffff;position:absolute;width:100%;height:72px;}",".footer.jsx-1061465374>a.jsx-1061465374,li.jsx-1061465374,ul.jsx-1061465374{color:#ffffff;}",".footer.jsx-1061465374>li.jsx-1061465374,ul.jsx-1061465374{list-style-type:none;display:inline;}",".contacts.jsx-1061465374{color:#fff;}",".contacts.jsx-1061465374>ul.jsx-1061465374,li.jsx-1061465374{color:#fff;padding:0px;margin:0px;display:inline;}"]})]})}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("wx14"),a=n("zLVn"),o=n("q1tI");n("QLaP");function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function s(e,t){return Object.keys(t).reduce((function(n,s){var l,u=n,f=u[i(s)],d=u[s],p=Object(a.a)(u,[i(s),s].map(c)),b=t[s],v=function(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),i=a[0],c=a[1],s=void 0!==e,l=r.current;return r.current=s,!s&&l&&i!==t&&c(t),[s?e:i,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(d,f,e[b]),h=v[0],j=v[1];return Object(r.a)({},p,((l={})[s]=h,l[b]=j,l))}),e)}n("dI71");function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function u(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function f(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}l.__suppressDeprecationWarning=!0,u.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n("pvIh"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,i,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,i,c],u=0;(s=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},Qg85:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),f=function(e){i(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),s=n("nOHt"),l=new Map,u=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var b=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],l=a[1],b=(0,s.useRouter)(),v=b&&b.pathname||"/",h=i.default.useMemo((function(){var t=(0,c.resolveHref)(v,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,c.resolveHref)(v,e.as):o||a}}),[v,e.href,e.as]),j=h.href,m=h.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,c.isLocalURL)(j)&&!f[j+"%"+m])return d(o,(function(){p(b,j,m)}))}),[t,o,j,m,b]);var y=e.children,x=e.replace,O=e.shallow,g=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var w=i.Children.only(y),E={ref:function(e){e&&l(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,b,j,m,x,O,g)}};return t&&(E.onMouseEnter=function(e){(0,c.isLocalURL)(j)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),p(b,j,m,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(E.href=(0,c.addBasePath)((0,c.addLocale)(m,b&&b.locale,b&&b.defaultLocale))),i.default.cloneElement(w,E)};t.default=b},dbZe:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("Qg85");function s(e){return!e||"#"===e.trim()}var l=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,l=e.disabled,u=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(l||s(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return s(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),l&&(f.tabIndex=-1,f["aria-disabled"]=!0),i.a.createElement(o,Object(r.a)({ref:t},f,{onClick:d,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),u)}))}));l.displayName="SafeAnchor",t.a=l},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lcWJ:function(e,t,n){"use strict";var r=n("q1tI"),a=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var c=a||"<<anonymous>>",s=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+s+"` was not specified in `"+c+"`."):null;for(var l=arguments.length,u=Array(l>6?l-6:0),f=6;f<l;f++)u[f-6]=arguments[f];return e.apply(void 0,[n,r,c,o,s].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},q4sD:function(e,t,n){},rYLu:function(e,t,n){e.exports={navbar:"Navbar_navbar__xfM49"}}},[[0,0,1,6,2,4,3]]]);