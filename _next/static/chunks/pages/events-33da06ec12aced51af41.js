_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"7A6N":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t("q1tI");function o(){return Object(a.useState)(null)}},"7vrA":function(e,n,t){"use strict";var a=t("wx14"),o=t("zLVn"),r=t("TSYQ"),i=t.n(r),c=t("q1tI"),s=t.n(c),l=t("vUet"),d=s.a.forwardRef((function(e,n){var t=e.bsPrefix,r=e.fluid,c=e.as,d=void 0===c?"div":c,u=e.className,f=Object(o.a)(e,["bsPrefix","fluid","as","className"]),p=Object(l.a)(t,"container"),b="string"===typeof r?"-"+r:"-fluid";return s.a.createElement(d,Object(a.a)({ref:n},f,{className:i()(u,r?""+p+b:p)}))}));d.displayName="Container",d.defaultProps={fluid:!1},n.a=d},Qetd:function(e,n,t){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RjgW:function(e,n,t){"use strict";function a(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}t.d(n,"a",(function(){return a}))},UGbB:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Ae}));var a,o=t("nKUr"),r=t("7vrA"),i=t("3Z9Z"),c=t("JI6e"),s=t("q1tI"),l=t.n(s),d=t("wx14"),u=t("zLVn"),f=t("TSYQ"),p=t.n(f),b=t("2fXS"),h=t("SJxq"),m=t("dZvc"),v=t("Q7zl");function g(e){if((!a&&0!==a||e)&&h.a){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),a=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return a}var O=t("7A6N"),y=t("ZCiN"),j=t("i52p"),E=t("YECM");function w(e){void 0===e&&(e=Object(m.a)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}var x=t("RjgW"),N=t("GEtZ"),C=t("17x9"),T=t.n(C),k=t("i8i4"),R=t.n(k),A=t("XcHJ"),S=t("qvwu");function F(e,n){e.classList?e.classList.add(n):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(e,n)||("string"===typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function P(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function B(e,n){e.classList?e.classList.remove(n):"string"===typeof e.className?e.className=P(e.className,n):e.setAttribute("class",P(e.className&&e.className.baseVal||"",n))}var I=t("7j6X");function D(e){return"window"in e&&e.window===e?e:"nodeType"in(n=e)&&n.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var n}function H(e){var n;return D(e)||(n=e)&&"body"===n.tagName.toLowerCase()?function(e){var n=D(e)?Object(m.a)():Object(m.a)(e),t=D(e)||n.defaultView;return n.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var M=["template","script","style"],_=function(e,n,t){[].forEach.call(e.children,(function(e){-1===n.indexOf(e)&&function(e){var n=e.nodeType,t=e.tagName;return 1===n&&-1===M.indexOf(t.toLowerCase())}(e)&&t(e)}))};function X(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}var L,q=function(){function e(e){var n=void 0===e?{}:e,t=n.hideSiblingNodes,a=void 0===t||t,o=n.handleContainerOverflow,r=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=a,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=g()}var n=e.prototype;return n.isContainerOverflowing=function(e){var n=this.data[this.containerIndexFromModal(e)];return n&&n.overflowing},n.containerIndexFromModal=function(e){return function(e,n){var t=-1;return e.some((function(e,a){return!!n(e,a)&&(t=a,!0)})),t}(this.data,(function(n){return-1!==n.modals.indexOf(e)}))},n.setContainerStyle=function(e,n){var t={overflow:"hidden"};e.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt(Object(I.a)(n,"paddingRight")||"0",10)+this.scrollbarSize+"px"),Object(I.a)(n,t)},n.removeContainerStyle=function(e,n){Object.assign(n.style,e.style)},n.add=function(e,n,t){var a=this.modals.indexOf(e),o=this.containers.indexOf(n);if(-1!==a)return a;if(a=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,n){var t=n.dialog,a=n.backdrop;_(e,[t,a],(function(e){return X(!0,e)}))}(n,e),-1!==o)return this.data[o].modals.push(e),a;var r={modals:[e],classes:t?t.split(/\s+/):[],overflowing:H(n)};return this.handleContainerOverflow&&this.setContainerStyle(r,n),r.classes.forEach(F.bind(null,n)),this.containers.push(n),this.data.push(r),a},n.remove=function(e){var n=this.modals.indexOf(e);if(-1!==n){var t=this.containerIndexFromModal(e),a=this.data[t],o=this.containers[t];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(n,1),0===a.modals.length)a.classes.forEach(B.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(a,o),this.hideSiblingNodes&&function(e,n){var t=n.dialog,a=n.backdrop;_(e,[t,a],(function(e){return X(!1,e)}))}(o,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var r=a.modals[a.modals.length-1],i=r.backdrop;X(!1,r.dialog),X(!1,i)}}},n.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),z=t("knGs");function W(e){var n=e||(L||(L=new q),L),t=Object(s.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(e,a){return n.add(t.current,e,a)},remove:function(){return n.remove(t.current)},isTopModal:function(){return n.isTopModal(t.current)},setDialogRef:Object(s.useCallback)((function(e){t.current.dialog=e}),[]),setBackdropRef:Object(s.useCallback)((function(e){t.current.backdrop=e}),[])})}var J=Object(s.forwardRef)((function(e,n){var t=e.show,a=void 0!==t&&t,o=e.role,r=void 0===o?"dialog":o,i=e.className,c=e.style,f=e.children,p=e.backdrop,b=void 0===p||p,m=e.keyboard,v=void 0===m||m,g=e.onBackdropClick,O=e.onEscapeKeyDown,E=e.transition,C=e.backdropTransition,T=e.autoFocus,k=void 0===T||T,F=e.enforceFocus,P=void 0===F||F,B=e.restoreFocus,I=void 0===B||B,D=e.restoreFocusOptions,H=e.renderDialog,M=e.renderBackdrop,_=void 0===M?function(e){return l.a.createElement("div",e)}:M,X=e.manager,L=e.container,q=e.containerClassName,J=e.onShow,U=e.onHide,K=void 0===U?function(){}:U,V=e.onExit,Z=e.onExited,G=e.onExiting,Q=e.onEnter,Y=e.onEntering,$=e.onEntered,ee=Object(u.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),ne=Object(z.a)(L),te=W(X),ae=Object(A.a)(),oe=Object(S.a)(a),re=Object(s.useState)(!a),ie=re[0],ce=re[1],se=Object(s.useRef)(null);Object(s.useImperativeHandle)(n,(function(){return te}),[te]),h.a&&!oe&&a&&(se.current=w()),E||a||ie?a&&ie&&ce(!1):ce(!0);var le=Object(y.a)((function(){if(te.add(ne,q),he.current=Object(N.a)(document,"keydown",pe),be.current=Object(N.a)(document,"focus",(function(){return setTimeout(ue)}),!0),J&&J(),k){var e=w(document);te.dialog&&e&&!Object(x.a)(te.dialog,e)&&(se.current=e,te.dialog.focus())}})),de=Object(y.a)((function(){var e;(te.remove(),null==he.current||he.current(),null==be.current||be.current(),I)&&(null==(e=se.current)||null==e.focus||e.focus(D),se.current=null)}));Object(s.useEffect)((function(){a&&ne&&le()}),[a,ne,le]),Object(s.useEffect)((function(){ie&&de()}),[ie,de]),Object(j.a)((function(){de()}));var ue=Object(y.a)((function(){if(P&&ae()&&te.isTopModal()){var e=w();te.dialog&&e&&!Object(x.a)(te.dialog,e)&&te.dialog.focus()}})),fe=Object(y.a)((function(e){e.target===e.currentTarget&&(null==g||g(e),!0===b&&K())})),pe=Object(y.a)((function(e){v&&27===e.keyCode&&te.isTopModal()&&(null==O||O(e),e.defaultPrevented||K())})),be=Object(s.useRef)(),he=Object(s.useRef)(),me=E;if(!ne||!(a||me&&!ie))return null;var ve=Object(d.a)({role:r,ref:te.setDialogRef,"aria-modal":"dialog"===r||void 0},ee,{style:c,className:i,tabIndex:-1}),ge=H?H(ve):l.a.createElement("div",ve,l.a.cloneElement(f,{role:"document"}));me&&(ge=l.a.createElement(me,{appear:!0,unmountOnExit:!0,in:!!a,onExit:V,onExiting:G,onExited:function(){ce(!0);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];null==Z||Z.apply(void 0,n)},onEnter:Q,onEntering:Y,onEntered:$},ge));var Oe=null;if(b){var ye=C;Oe=_({ref:te.setBackdropRef,onClick:fe}),ye&&(Oe=l.a.createElement(ye,{appear:!0,in:!!a},Oe))}return l.a.createElement(l.a.Fragment,null,R.a.createPortal(l.a.createElement(l.a.Fragment,null,Oe,ge),ne))})),U={show:T.a.bool,container:T.a.any,onShow:T.a.func,onHide:T.a.func,backdrop:T.a.oneOfType([T.a.bool,T.a.oneOf(["static"])]),renderDialog:T.a.func,renderBackdrop:T.a.func,onEscapeKeyDown:T.a.func,onBackdropClick:T.a.func,containerClassName:T.a.string,keyboard:T.a.bool,transition:T.a.elementType,backdropTransition:T.a.elementType,autoFocus:T.a.bool,enforceFocus:T.a.bool,restoreFocus:T.a.bool,restoreFocusOptions:T.a.shape({preventScroll:T.a.bool}),onEnter:T.a.func,onEntering:T.a.func,onEntered:T.a.func,onExit:T.a.func,onExiting:T.a.func,onExited:T.a.func,manager:T.a.instanceOf(q)};J.displayName="Modal",J.propTypes=U;var K,V=Object.assign(J,{Manager:q}),Z=(t("2W6z"),t("dI71")),G=t("Zeqi"),Q=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Y=".sticky-top",$=".navbar-toggler",ee=function(e){function n(){return e.apply(this,arguments)||this}Object(Z.a)(n,e);var t=n.prototype;return t.adjustAndStore=function(e,n,t){var a,o=n.style[e];n.dataset[e]=o,Object(I.a)(n,((a={})[e]=parseFloat(Object(I.a)(n,e))+t+"px",a))},t.restore=function(e,n){var t,a=n.dataset[e];void 0!==a&&(delete n.dataset[e],Object(I.a)(n,((t={})[e]=a,t)))},t.setContainerStyle=function(n,t){var a=this;if(e.prototype.setContainerStyle.call(this,n,t),n.overflowing){var o=g();Object(G.a)(t,Q).forEach((function(e){return a.adjustAndStore("paddingRight",e,o)})),Object(G.a)(t,Y).forEach((function(e){return a.adjustAndStore("marginRight",e,-o)})),Object(G.a)(t,$).forEach((function(e){return a.adjustAndStore("marginRight",e,o)}))}},t.removeContainerStyle=function(n,t){var a=this;e.prototype.removeContainerStyle.call(this,n,t),Object(G.a)(t,Q).forEach((function(e){return a.restore("paddingRight",e)})),Object(G.a)(t,Y).forEach((function(e){return a.restore("marginRight",e)})),Object(G.a)(t,$).forEach((function(e){return a.restore("marginRight",e)}))},n}(q),ne=t("dRu9"),te=t("z+q/"),ae=((K={})[ne.b]="show",K[ne.a]="show",K),oe=l.a.forwardRef((function(e,n){var t=e.className,a=e.children,o=Object(u.a)(e,["className","children"]),r=Object(s.useCallback)((function(e){Object(te.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return l.a.createElement(ne.e,Object(d.a)({ref:n,addEndListener:E.a},o,{onEnter:r}),(function(e,n){return l.a.cloneElement(a,Object(d.a)({},n,{className:p()("fade",t,a.props.className,ae[e])}))}))}));oe.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},oe.displayName="Fade";var re=oe,ie=t("YdCC"),ce=Object(ie.a)("modal-body"),se=l.a.createContext({onHide:function(){}}),le=t("vUet"),de=l.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,o=e.contentClassName,r=e.centered,i=e.size,c=e.children,s=e.scrollable,f=Object(u.a)(e,["bsPrefix","className","contentClassName","centered","size","children","scrollable"]),b=(t=Object(le.a)(t,"modal"))+"-dialog";return l.a.createElement("div",Object(d.a)({},f,{ref:n,className:p()(b,a,i&&t+"-"+i,r&&b+"-centered",s&&b+"-scrollable")}),l.a.createElement("div",{className:p()(t+"-content",o)},c))}));de.displayName="ModalDialog";var ue=de,fe=Object(ie.a)("modal-footer"),pe={label:T.a.string.isRequired,onClick:T.a.func},be=l.a.forwardRef((function(e,n){var t=e.label,a=e.onClick,o=e.className,r=Object(u.a)(e,["label","onClick","className"]);return l.a.createElement("button",Object(d.a)({ref:n,type:"button",className:p()("close",o),onClick:a},r),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},t))}));be.displayName="CloseButton",be.propTypes=pe,be.defaultProps={label:"Close"};var he=be,me=l.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.closeLabel,o=e.closeButton,r=e.onHide,i=e.className,c=e.children,f=Object(u.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);t=Object(le.a)(t,"modal-header");var b=Object(s.useContext)(se),h=Object(y.a)((function(){b&&b.onHide(),r&&r()}));return l.a.createElement("div",Object(d.a)({ref:n},f,{className:p()(i,t)}),c,o&&l.a.createElement(he,{label:a,onClick:h}))}));me.displayName="ModalHeader",me.defaultProps={closeLabel:"Close",closeButton:!1};var ve,ge,Oe=me,ye=(ve="h4",l.a.forwardRef((function(e,n){return l.a.createElement("div",Object(d.a)({},e,{ref:n,className:p()(e.className,ve)}))}))),je=Object(ie.a)("modal-title",{Component:ye}),Ee={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ue};function we(e){return l.a.createElement(re,e)}function xe(e){return l.a.createElement(re,e)}var Ne=l.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,o=e.style,r=e.dialogClassName,i=e.contentClassName,c=e.children,f=e.dialogAs,w=e["aria-labelledby"],x=e.show,N=e.animation,C=e.backdrop,T=e.keyboard,k=e.onEscapeKeyDown,R=e.onShow,A=e.onHide,S=e.container,F=e.autoFocus,P=e.enforceFocus,B=e.restoreFocus,I=e.restoreFocusOptions,D=e.onEntered,H=e.onExit,M=e.onExiting,_=e.onEnter,X=e.onEntering,L=e.onExited,q=e.backdropClassName,z=e.manager,W=Object(u.a)(e,["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),J=Object(s.useState)({}),U=J[0],K=J[1],Z=Object(s.useState)(!1),G=Z[0],Q=Z[1],Y=Object(s.useRef)(!1),$=Object(s.useRef)(!1),ne=Object(s.useRef)(null),te=Object(O.a)(),ae=te[0],oe=te[1],re=Object(y.a)(A);t=Object(le.a)(t,"modal"),Object(s.useImperativeHandle)(n,(function(){return{get _modal(){return ae}}}),[ae]);var ie=Object(s.useMemo)((function(){return{onHide:re}}),[re]);function ce(){return z||(ge||(ge=new ee),ge)}function de(e){if(h.a){var n=ce().isContainerOverflowing(ae),t=e.scrollHeight>Object(m.a)(e).documentElement.clientHeight;K({paddingRight:n&&!t?g():void 0,paddingLeft:!n&&t?g():void 0})}}var ue=Object(y.a)((function(){ae&&de(ae.dialog)}));Object(j.a)((function(){Object(v.a)(window,"resize",ue),ne.current&&ne.current()}));var fe=function(){Y.current=!0},pe=function(e){Y.current&&ae&&e.target===ae.dialog&&($.current=!0),Y.current=!1},be=function(){Q(!0),ne.current=Object(E.a)(ae.dialog,(function(){Q(!1)}))},he=function(e){"static"!==C?$.current||e.target!==e.currentTarget?$.current=!1:A():function(e){e.target===e.currentTarget&&be()}(e)},me=Object(s.useCallback)((function(e){return l.a.createElement("div",Object(d.a)({},e,{className:p()(t+"-backdrop",q,!N&&"show")}))}),[N,q,t]),ve=Object(d.a)({},o,{},U);N||(ve.display="block");return l.a.createElement(se.Provider,{value:ie},l.a.createElement(V,{show:x,ref:oe,backdrop:C,container:S,keyboard:!0,autoFocus:F,enforceFocus:P,restoreFocus:B,restoreFocusOptions:I,onEscapeKeyDown:function(e){T||"static"!==C?T&&k&&k(e):(e.preventDefault(),be())},onShow:R,onHide:A,onEnter:function(e){e&&(e.style.display="block",de(e));for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];_&&_.apply(void 0,[e].concat(t))},onEntering:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];X&&X.apply(void 0,[e].concat(t)),Object(b.a)(window,"resize",ue)},onEntered:D,onExit:function(e){ne.current&&ne.current();for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];H&&H.apply(void 0,[e].concat(t))},onExiting:M,onExited:function(e){e&&(e.style.display="");for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];L&&L.apply(void 0,t),Object(v.a)(window,"resize",ue)},manager:ce(),containerClassName:t+"-open",transition:N?we:void 0,backdropTransition:N?xe:void 0,renderBackdrop:me,renderDialog:function(e){return l.a.createElement("div",Object(d.a)({role:"dialog"},e,{style:ve,className:p()(a,t,G&&t+"-static"),onClick:C?he:void 0,onMouseUp:pe,"aria-labelledby":w}),l.a.createElement(f,Object(d.a)({},W,{role:"document",onMouseDown:fe,className:r,contentClassName:i}),c))}}))}));Ne.displayName="Modal",Ne.defaultProps=Ee,Ne.Body=ce,Ne.Header=Oe,Ne.Title=je,Ne.Footer=fe,Ne.Dialog=ue,Ne.TRANSITION_DURATION=300,Ne.BACKDROP_TRANSITION_DURATION=150;var Ce=Ne;function Te(e){var n=e.heading,t=e.body,a=e.modalBody,r=Object(s.useState)(!1),i=r[0],c=r[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{style:{flexBasis:"0.7px",border:"1px solid rgb(231, 231, 231)",padding:"2.5rem",borderRadius:"10px",height:"100%",cursor:"pointer"},onClick:function(){return c(!0)},children:[Object(o.jsx)("h4",{children:Object(o.jsx)("p",{children:n})}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:t})})]}),Object(o.jsxs)(Ce,{show:i,onHide:function(){return c(!1)},children:[Object(o.jsx)(Ce.Header,{closeButton:!0,children:Object(o.jsx)(Ce.Title,{children:n})}),Object(o.jsx)(Ce.Body,{style:{whiteSpace:"pre-wrap"},children:Object(o.jsx)("p",{children:a})})]})]})}var ke=[{heading:"Event 1",body:"A surprise event whose details will be disclosed on the spot and participants perform accordingly.",modalBody:"\n    An on the spot photography event on a given topic.\n\n    Classes: IX-X.\n    2 Team(s) per school.\n    1 Participant(s) per team.\n    Teams will compete each other.\n    Topics will be announced on the day of the event.\n    Photos to be submitted in RAW format only.\n    Judgement Criteria:\n        a. Creativity.\n        b. Relevance to Topic.\n        c. Technical Aspects.\n        d. Clarity.\n    "},{heading:"Event 2",body:"A surprise event whose details will be disclosed on the spot and participants perform accordingly.",modalBody:"\n    An on the spot photography event on a given topic.\n\n    Classes: IX-X.\n    2 Team(s) per school.\n    1 Participant(s) per team.\n    Teams will compete each other.\n    Topics will be announced on the day of the event.\n    Photos to be submitted in RAW format only.\n    Judgement Criteria:\n        a. Creativity.\n        b. Relevance to Topic.\n        c. Technical Aspects.\n        d. Clarity.\n    "},{heading:"Event 3",body:"A surprise event whose details will be disclosed on the spot and participants perform accordingly.",modalBody:"\n    An on the spot photography event on a given topic.\n\n    Classes: IX-X.\n    2 Team(s) per school.\n    1 Participant(s) per team.\n    Teams will compete each other.\n    Topics will be announced on the day of the event.\n    Photos to be submitted in RAW format only.\n    Judgement Criteria:\n        a. Creativity.\n        b. Relevance to Topic.\n        c. Technical Aspects.\n        d. Clarity.\n    "},{heading:"Event 4",body:"A surprise event whose details will be disclosed on the spot and participants perform accordingly.",modalBody:"\n    An on the spot photography event on a given topic.\n\n    Classes: IX-X.\n    2 Team(s) per school.\n    1 Participant(s) per team.\n    Teams will compete each other.\n    Topics will be announced on the day of the event.\n    Photos to be submitted in RAW format only.\n    Judgement Criteria:\n        a. Creativity.\n        b. Relevance to Topic.\n        c. Technical Aspects.\n        d. Clarity.\n    "},{heading:"Event 5",body:"A surprise event whose details will be disclosed on the spot and participants perform accordingly.",modalBody:"\n    An on the spot photography event on a given topic.\n\n    Classes: IX-X.\n    2 Team(s) per school.\n    1 Participant(s) per team.\n    Teams will compete each other.\n    Topics will be announced on the day of the event.\n    Photos to be submitted in RAW format only.\n    Judgement Criteria:\n        a. Creativity.\n        b. Relevance to Topic.\n        c. Technical Aspects.\n        d. Clarity.\n    "}];function Re(){return Object(o.jsx)("div",{style:{marginTop:"32px"},children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)("h3",{style:{textAlign:"center"},children:"Main Events"}),Object(o.jsx)(i.a,{style:{marginTop:"32px"},children:ke.map((function(e){return Object(o.jsx)(c.a,{style:{padding:"0 4px",marginBottom:"8px"},sm:12,md:4,children:Object(o.jsx)(Te,{heading:e.heading,body:e.body,modalBody:e.modalBody},ke.indexOf(e))})}))})]})})}function Ae(){return Object(o.jsx)(r.a,{children:Object(o.jsx)(Re,{})})}},XcHJ:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t("q1tI");function o(){var e=Object(a.useRef)(!0),n=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),n.current}},f8ys:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return t("UGbB")}])},i52p:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t("q1tI");function o(e){var n=function(e){var n=Object(a.useRef)(e);return n.current=e,n}(e);Object(a.useEffect)((function(){return function(){return n.current()}}),[])}},knGs:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("dZvc"),o=t("q1tI"),r=function(e){var n;return"undefined"===typeof document?null:null==e?Object(a.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(n=e)?void 0:n.nodeType)&&e||null)};function i(e,n){var t=Object(o.useState)((function(){return r(e)})),a=t[0],i=t[1];if(!a){var c=r(e);c&&i(c)}return Object(o.useEffect)((function(){n&&a&&n(a)}),[n,a]),Object(o.useEffect)((function(){var n=r(e);n!==a&&i(n)}),[e,a]),a}},qvwu:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t("q1tI");function o(e){var n=Object(a.useRef)(null);return Object(a.useEffect)((function(){n.current=e})),n.current}}},[["f8ys",0,1,3]]]);