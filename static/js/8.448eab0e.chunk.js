(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[8],{811:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var c,r,a,o=n(84),s=n(0),i=n.n(s),b=n(3),l=n(32),j=b.e.div(c||(c=Object(o.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),u=function(e){var t,n=e.size,c=void 0===n?"md":n,r=Object(s.useContext)(b.a).spacing;switch(c){case"lg":t=r[6];break;case"sm":t=r[2];break;case"md":default:t=r[4]}return Object(l.jsx)(j,{size:t})},d=b.e.div(r||(r=Object(o.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),x=b.e.div(a||(a=Object(o.a)(["\n  flex: 1;\n  text-align: center;\n"]))),O=function(e){var t=e.children,n=i.a.Children.toArray(t).length;return Object(l.jsx)(d,{children:i.a.Children.map(t,(function(e,t){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{children:e}),t<n-1&&Object(l.jsx)(u,{})]})}))})}},814:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var c,r,a,o,s,i,b,l=n(84),j=(n(0),n(3)),u=n(812),d=n(72),x=n(806),O=n(32),p=j.e.div(c||(c=Object(l.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),m=j.e.input(r||(r=Object(l.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.colors.primary})),f=function(e){var t=e.endAdornment,n=e.onChange,c=e.placeholder,r=e.startAdornment,a=e.value;return Object(O.jsxs)(p,{children:[!!r&&r,Object(O.jsx)(m,{placeholder:c,value:a,onChange:n}),!!t&&t]})},h=j.e.div(a||(a=Object(l.a)([""]))),k=j.e.div(o||(o=Object(l.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),v=j.e.div(s||(s=Object(l.a)(["\n  align-items: center;\n  display: flex;\n"]))),g=j.e.div(i||(i=Object(l.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),y=j.e.span(b||(b=Object(l.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),w=function(e){var t=e.max,n=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,o=e.depositFeeBP,s=void 0===o?0:o,i=Object(x.a)();return Object(O.jsxs)(h,{children:[Object(O.jsxs)(g,{children:[t.toLocaleString()," ",n," ",i(526,"Available")]}),Object(O.jsx)(f,{endAdornment:Object(O.jsxs)(v,{children:[Object(O.jsx)(y,{children:n}),Object(O.jsx)(k,{}),Object(O.jsx)("div",{children:Object(O.jsx)(d.d,{size:"sm",onClick:r,children:i(452,"Max")})})]}),onChange:c,placeholder:"0",value:a}),s>0?Object(O.jsxs)(g,{children:[i(10001,"Deposit Fee"),": ",new u.a(a||0).times(s/1e4).toString()," ",n]}):null]})}},817:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return a}));n(0);var c=n(72),r=n(32),a=function(){return Object(r.jsx)(c.A,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"No Fees"})},o=function(){return Object(r.jsx)(c.A,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"Core"})},s=function(){return Object(r.jsx)(c.A,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.l,{}),children:"Community"})},i=function(){return Object(r.jsx)(c.A,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.c,{}),children:"Binance"})}},818:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var c=n(4),r=n.n(c),a=n(29),o=n(0),s=n(93),i=n(78),b=n(162),l=n(809),j=n(808),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(i.b)(),c=Object(s.m)(),u=c.account,d=Object(j.d)(),x=Object(j.e)(e),O=Object(o.useCallback)(function(){var c=Object(a.a)(r.a.mark((function c(a){return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==e){c.next=5;break}return c.next=3,Object(l.i)(d,0,a,u);case 3:c.next=12;break;case 5:if(!t){c.next=10;break}return c.next=8,Object(l.e)(x,a,u);case 8:c.next=12;break;case 10:return c.next=12,Object(l.d)(x,a,u);case 12:n(Object(b.g)(e,u)),n(Object(b.e)(e,u));case 14:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),[u,n,t,d,x,e]);return{onStake:O}};t.a=function(e){var t=Object(i.b)(),n=Object(s.m)().account,c=Object(j.d)();return{onStake:Object(o.useCallback)(function(){var o=Object(a.a)(r.a.mark((function a(o){var s;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(l.i)(c,e,o,n);case 2:s=r.sent,t(Object(b.a)(n)),console.info(s);case 5:case"end":return r.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[n,t,c,e])}}},824:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return l}));var c=n(4),r=n.n(c),a=n(29),o=n(167),s=n.n(o),i=n(89),b=function(e,t){return new(new s.a(e).eth.Contract)(i,t)},l=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return o=e.sent,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},825:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(812);c.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new c.a(1);var r=new c.a(10512e3)},826:function(e,t,n){"use strict";var c,r=n(84),a=n(3).e.div(c||(c=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));t.a=a},827:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var c=n(4),r=n.n(c),a=n(29),o=n(0),s=n(93),i=(n(816),n(78)),b=n(162),l=n(809),j=n(808),u=function(e){var t=Object(i.b)(),n=Object(s.m)().account,c=Object(j.d)();return{onApprove:Object(o.useCallback)(Object(a.a)(r.a.mark((function a(){var o;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(l.a)(e,c,n);case 3:return o=r.sent,t(Object(b.a)(n)),r.abrupt("return",o);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",!1);case 11:case"end":return r.stop()}}),a,null,[[0,8]])}))),[n,t,e,c])}},d=function(e,t){var n=Object(i.b)(),c=Object(s.m)().account,u=Object(j.e)(t);return{onApprove:Object(o.useCallback)(Object(a.a)(r.a.mark((function a(){var o;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(l.a)(e,u,c);case 3:return o=r.sent,n(Object(b.d)(t,c)),r.abrupt("return",o);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",!1);case 11:case"end":return r.stop()}}),a,null,[[0,8]])}))),[c,n,e,u,t])}}},828:function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));var c=n(4),r=n.n(c),a=n(29),o=n(0),s=n(93),i=n(78),b=n(162),l=n(809),j=n(808),u=[5,6,3,1,22,23],d=function(e){var t=Object(i.b)(),n=Object(s.m)().account,c=Object(j.d)(),d=Object(j.e)(e),x=u.includes(e);return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(r.a.mark((function a(o){var s,i,j;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==e){r.next=7;break}return r.next=3,Object(l.j)(c,0,o,n);case 3:s=r.sent,console.info(s),r.next=18;break;case 7:if(!x){r.next=14;break}return r.next=10,Object(l.c)(d,o,n);case 10:i=r.sent,console.info(i),r.next=18;break;case 14:return r.next=16,Object(l.f)(d,o,n);case 16:j=r.sent,console.info(j);case 18:t(Object(b.g)(e,n)),t(Object(b.e)(e,n)),t(Object(b.f)(e,n));case 21:case"end":return r.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[n,t,x,c,d,e])}};t.a=function(e){var t=Object(i.b)(),n=Object(s.m)().account,c=Object(j.d)();return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(r.a.mark((function a(o){var s;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(l.j)(c,e,o,n);case 2:s=r.sent,t(Object(b.a)(n)),console.info(s);case 5:case"end":return r.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[n,t,c,e])}}},927:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ee}));var c,r=n(30),a=n(42),o=n(0),s=n(46),i=n(78),b=n(27),l=n.n(b),j=n(93),u=n(72),d=n(825),x=n(826),O=n(226),p=n(133),m=n(164),f=n(162),h=n(44),k=n(806),v=n(84),g=n(3),y=n(32),w=g.e.div(c||(c=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),C=function(e){var t=e.onClick,n=e.expanded;return Object(y.jsxs)(w,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(y.jsx)(u.B,{color:"primary",bold:!0,children:n?"Hide":"Details"}),n?Object(y.jsx)(u.k,{}):Object(y.jsx)(u.j,{})]})};C.defaultProps={expanded:!1};var S,A,T,B,L,I,P,D,q,z,F,E,N,G,R,M,Q,H,U=C,V=function(e){var t=e.quoteTokenAdresses,n=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===n?"ETH":t[43114],a=c[43114];return"".concat(r,"/").concat(a)},W=g.e.div(S||(S=Object(v.a)(["\n  margin-top: 24px;\n"]))),X=Object(g.e)(u.r)(A||(A=Object(v.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),J=function(e){var t=e.isTokenOnly,n=e.bscScanAddress,c=e.removed,r=e.totalValueFormated,a=e.lpLabel,o=e.quoteTokenAdresses,s=e.quoteTokenSymbol,i=e.tokenAddresses,b=Object(k.a)(),l=V({quoteTokenAdresses:o,quoteTokenSymbol:s,tokenAddresses:i});return Object(y.jsxs)(W,{children:[Object(y.jsxs)(u.m,{justifyContent:"space-between",children:[Object(y.jsxs)(u.B,{children:[b(316,"Stake"),":"]}),Object(y.jsx)(X,{href:t?"https://traderjoexyz.com/#/trade/".concat(i[43114]):"https://traderjoexyz.com/#/pool/".concat(l),children:a})]}),!c&&Object(y.jsxs)(u.m,{justifyContent:"space-between",children:[Object(y.jsxs)(u.B,{children:[b(23,"Total Liquidity"),":"]}),Object(y.jsx)(u.B,{children:r})]}),Object(y.jsx)(u.m,{justifyContent:"flex-start",children:Object(y.jsx)(u.q,{external:!0,href:n,bold:!1,children:b(356,"View on AVAX Explorer")})})]})},$=n(817),_=Object(g.e)(u.m)(T||(T=Object(v.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),K=Object(g.e)(u.A)(B||(B=Object(v.a)(["\n  margin-left: 4px;\n"]))),Y=function(e){var t=e.lpLabel,n=e.multiplier,c=(e.risk,e.farmImage),r=e.tokenSymbol,a=e.depositFee;return Object(y.jsxs)(_,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(y.jsx)(u.p,{src:"/images/farms/".concat(c,".png"),alt:r,width:64,height:64}),Object(y.jsxs)(u.m,{flexDirection:"column",alignItems:"flex-end",children:[Object(y.jsx)(u.n,{mb:"4px",children:t}),Object(y.jsxs)(u.m,{justifyContent:"center",children:[0===a?Object(y.jsx)($.d,{}):null,Object(y.jsx)(K,{variant:"secondary",children:n})]})]})]})},Z=n(4),ee=n.n(Z),te=n(29),ne=n(824),ce=n(820),re=n(827),ae=n(818),oe=n(828),se=n(807),ie=n(811),be=n(814),le=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,s=void 0===r?"":r,i=e.depositFeeBP,b=void 0===i?0:i,l=Object(o.useState)(""),j=Object(a.a)(l,2),d=j[0],x=j[1],O=Object(o.useState)(!1),p=Object(a.a)(O,2),m=p[0],f=p[1],h=Object(k.a)(),v=Object(se.c)(s.toLowerCase()),g=Object(o.useMemo)((function(){return Object(se.d)(t,v)}),[t,v]),w=Object(o.useCallback)((function(e){x(e.currentTarget.value)}),[x]),C=Object(o.useCallback)((function(){x(g)}),[g,x]);return Object(y.jsxs)(u.v,{title:"".concat(h(316,"Deposit")," ").concat(s," Tokens"),onDismiss:c,children:[Object(y.jsx)(be.a,{value:d,onSelectMax:C,onChange:w,max:g,symbol:s,depositFeeBP:b}),Object(y.jsxs)(ie.a,{children:[Object(y.jsx)(u.d,{variant:"secondary",onClick:c,children:h(462,"Cancel")}),Object(y.jsx)(u.d,{disabled:m,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,n(d);case 3:f(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:m?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})},je=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,s=void 0===r?"":r,i=Object(o.useState)(""),b=Object(a.a)(i,2),l=b[0],j=b[1],d=Object(o.useState)(!1),x=Object(a.a)(d,2),O=x[0],p=x[1],m=Object(k.a)(),f=Object(se.c)(s.toLowerCase()),h=Object(o.useMemo)((function(){return Object(se.d)(c,f)}),[c,f]),v=Object(o.useCallback)((function(e){j(e.currentTarget.value)}),[j]),g=Object(o.useCallback)((function(){j(h)}),[h,j]);return Object(y.jsxs)(u.v,{title:"Withdraw ".concat(s),onDismiss:n,children:[Object(y.jsx)(be.a,{onSelectMax:g,onChange:v,value:l,max:h,symbol:s}),Object(y.jsxs)(ie.a,{children:[Object(y.jsx)(u.d,{variant:"secondary",onClick:n,children:m(462,"Cancel")}),Object(y.jsx)(u.d,{disabled:O,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,t(l);case 3:p(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:O?m(488,"Pending Confirmation"):m(464,"Confirm")})]})]})},ue=g.e.div(L||(L=Object(v.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),de=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,o=e.depositFeeBP,s=Object(k.a)(),i=Object(ae.a)(r).onStake,b=Object(oe.a)(r).onUnstake,l=Object(se.a)(t),j=l.toLocaleString(),d=Object(u.G)(Object(y.jsx)(le,{max:n,onConfirm:i,tokenName:c,depositFeeBP:o})),x=Object(a.a)(d,1)[0],O=Object(u.G)(Object(y.jsx)(je,{max:t,onConfirm:b,tokenName:c})),p=Object(a.a)(O,1)[0];return Object(y.jsxs)(u.m,{justifyContent:"space-between",alignItems:"center",children:[Object(y.jsx)(u.n,{color:0===l?"textDisabled":"text",children:j}),0===l?Object(y.jsx)(u.d,{onClick:x,children:s(999,"Stake")}):Object(y.jsxs)(ue,{children:[Object(y.jsx)(u.o,{variant:"tertiary",onClick:p,mr:"6px",children:Object(y.jsx)(u.u,{color:"primary"})}),Object(y.jsx)(u.o,{variant:"tertiary",onClick:x,children:Object(y.jsx)(u.a,{color:"primary"})})]})]})},xe=n(819),Oe=g.e.div(I||(I=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),pe=function(e){var t=e.earnings,n=e.pid,c=Object(k.a)(),r=Object(o.useState)(!1),s=Object(a.a)(r,2),i=s[0],b=s[1],l=Object(xe.b)(n).onReward,j=Object(ae.a)(n).onStake,d=Object(se.a)(t),x=d.toLocaleString();return Object(y.jsxs)(u.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(y.jsx)(u.n,{color:0===d?"textDisabled":"text",children:x}),Object(y.jsxs)(Oe,{children:[12===n?Object(y.jsx)(u.d,{disabled:0===d||i,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,j(d.toString());case 3:b(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(y.jsx)(u.d,{disabled:0===d||i,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,l();case 3:b(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})},me=g.e.div(P||(P=Object(v.a)(["\n  padding-top: 16px;\n"]))),fe=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=Object(k.a)(),s=Object(o.useState)(!1),i=Object(a.a)(s,2),b=i[0],l=i[1],j=Object(p.a)(t.pid),d=j.pid,x=j.lpAddresses,O=j.tokenAddresses,m=j.isTokenOnly,f=j.depositFeeBP,h=Object(p.b)(d),v=h.allowance,g=h.tokenBalance,w=h.stakedBalance,C=h.earnings,S=x[43114],A=O[43114],T=t.lpSymbol.toUpperCase(),B=c&&v&&v.isGreaterThan(0),L=Object(o.useMemo)((function(){return m?Object(ne.a)(n,A):Object(ne.a)(n,S)}),[n,S,A,m]),I=Object(re.a)(L).onApprove,P=Object(o.useCallback)(Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,I();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[I]);return Object(y.jsxs)(me,{children:[Object(y.jsxs)(u.m,{children:[Object(y.jsx)(u.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"GORILLA"}),Object(y.jsx)(u.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Earned")})]}),Object(y.jsx)(pe,{earnings:C,pid:d}),Object(y.jsxs)(u.m,{children:[Object(y.jsx)(u.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:T}),Object(y.jsx)(u.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Staked")})]}),c?B?Object(y.jsx)(de,{stakedBalance:w,tokenBalance:g,tokenName:T,pid:d,depositFeeBP:f}):Object(y.jsx)(u.d,{mt:"8px",fullWidth:!0,disabled:b,onClick:P,children:r(999,"Approve Contract")}):Object(y.jsx)(ce.a,{mt:"8px",fullWidth:!0})]})},he=function(e){var t,n=e.numberOfDays,c=e.farmApy/100,r=n/365,a=1e3/e.cakePrice,o=a*Math.pow(1+c/365,365*r);return t=o-a,Math.round(100*t)/100},ke=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},ve=g.e.div(D||(D=Object(v.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),ge=g.e.div(q||(q=Object(v.a)(["\n  margin-bottom: '10px';\n"]))),ye=Object(g.e)(u.B)(z||(z=Object(v.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),we=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,o=e.cakePrice,s=e.apy,i=Object(k.a)(),b=V({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),j=s.times(new l.a(100)).toNumber(),d=1e3/o.toNumber(),x=he({numberOfDays:1,farmApy:j,cakePrice:o}),O=he({numberOfDays:7,farmApy:j,cakePrice:o}),p=he({numberOfDays:30,farmApy:j,cakePrice:o}),m=he({numberOfDays:365,farmApy:j,cakePrice:o});return Object(y.jsxs)(u.v,{title:"ROI",onDismiss:t,children:[Object(y.jsxs)(ve,{children:[Object(y.jsx)(ge,{children:Object(y.jsx)(u.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Timeframe")})}),Object(y.jsx)(ge,{children:Object(y.jsx)(u.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"ROI")})}),Object(y.jsx)(ge,{children:Object(y.jsx)(u.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"GORILLA per $1000")})}),Object(y.jsx)(ge,{children:Object(y.jsx)(u.B,{children:"1d"})}),Object(y.jsx)(ge,{children:Object(y.jsxs)(u.B,{children:[ke({amountEarned:x,amountInvested:d}),"%"]})}),Object(y.jsx)(ge,{children:Object(y.jsx)(u.B,{children:x})}),Object(y.jsx)(ge,{children:Object(y.jsx)(u.B,{children:"7d"})}),Object(y.jsx)(ge,{children:Object(y.jsxs)(u.B,{children:[ke({amountEarned:O,amountInvested:d}),"%"]})}),Object(y.jsx)(ge,{children:Object(y.jsx)(u.B,{children:O})}),Object(y.jsx)(ge,{children:Object(y.jsx)(u.B,{children:"30d"})}),Object(y.jsx)(ge,{children:Object(y.jsxs)(u.B,{children:[ke({amountEarned:p,amountInvested:d}),"%"]})}),Object(y.jsx)(ge,{children:Object(y.jsx)(u.B,{children:p})}),Object(y.jsx)(ge,{children:Object(y.jsx)(u.B,{children:"365d(APY)"})}),Object(y.jsx)(ge,{children:Object(y.jsxs)(u.B,{children:[ke({amountEarned:m,amountInvested:d}),"%"]})}),Object(y.jsx)(ge,{children:Object(y.jsx)(u.B,{children:m})})]}),Object(y.jsx)(ye,{fontSize:"12px",color:"textSubtle",children:i(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(y.jsx)(u.m,{justifyContent:"center",children:Object(y.jsxs)(u.r,{href:"https://traderjoexyz.com/#/pool/".concat(b),children:[i(999,"Get")," ",n]})})]})},Ce=function(e){var t=e.lpLabel,n=e.quoteTokenAdresses,c=e.quoteTokenSymbol,r=e.tokenAddresses,o=e.cakePrice,s=e.apy,i=Object(u.G)(Object(y.jsx)(we,{lpLabel:t,quoteTokenAdresses:n,quoteTokenSymbol:c,tokenAddresses:r,cakePrice:o,apy:s})),b=Object(a.a)(i,1)[0];return Object(y.jsx)(u.o,{onClick:b,variant:"text",size:"sm",ml:"4px",children:Object(y.jsx)(u.g,{})})},Se=Object(g.f)(F||(F=Object(v.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),Ae=g.e.div(E||(E=Object(v.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),Se),Te=g.e.div(N||(N=Object(v.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),Be=g.e.div(G||(G=Object(v.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Le=g.e.div(R||(R=Object(v.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),Ie=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,s=e.ethereum,i=e.account,b=Object(k.a)(),j=Object(o.useState)(!1),d=Object(a.a)(j,2),x=d[0],O=d[1],p=t.isTokenOnly?t.tokenSymbol.toLowerCase():"".concat(t.tokenSymbol.toLowerCase(),"-").concat(t.quoteTokenSymbol.toLowerCase()),m=Object(o.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===h.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===h.b.CAKE?c.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),f=m?"$".concat(Number(m).toLocaleString(void 0,{maximumFractionDigits:0})):"-",v=t.lpSymbol,g=t.apy&&t.apy.times(new l.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),w=t.quoteTokenAdresses,C=t.quoteTokenSymbol,S=t.tokenAddresses,A=t.risk;return Object(y.jsxs)(Te,{children:["GORILLA"===t.tokenSymbol&&Object(y.jsx)(Ae,{}),Object(y.jsx)(Y,{lpLabel:v,multiplier:t.multiplier,risk:A,depositFee:t.depositFeeBP,farmImage:p,tokenSymbol:t.tokenSymbol}),!n&&Object(y.jsxs)(u.m,{justifyContent:"space-between",alignItems:"center",children:[Object(y.jsxs)(u.B,{children:[b(352,"APR"),":"]}),Object(y.jsx)(u.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Ce,{lpLabel:v,quoteTokenAdresses:w,quoteTokenSymbol:C,tokenAddresses:S,cakePrice:c,apy:t.apy}),g,"%"]}):Object(y.jsx)(u.y,{height:24,width:80})})]}),Object(y.jsxs)(u.m,{justifyContent:"space-between",children:[Object(y.jsxs)(u.B,{children:[b(318,"Earn"),":"]}),Object(y.jsx)(u.B,{bold:!0,children:"GORILLA"})]}),Object(y.jsxs)(u.m,{justifyContent:"space-between",children:[Object(y.jsxs)(u.B,{style:{fontSize:"24px"},children:[b(10001,"Deposit Fee"),":"]}),Object(y.jsxs)(u.B,{bold:!0,style:{fontSize:"24px"},children:[t.depositFeeBP/100,"%"]})]}),Object(y.jsx)(fe,{farm:t,ethereum:s,account:i}),Object(y.jsx)(Be,{}),Object(y.jsx)(U,{onClick:function(){return O(!x)},expanded:x}),Object(y.jsx)(Le,{expanded:x,children:Object(y.jsx)(J,{removed:n,isTokenOnly:t.isTokenOnly,bscScanAddress:t.isTokenOnly?"https://cchain.explorer.avax.network/address/".concat(t.tokenAddresses[43114]):"https://cchain.explorer.avax.network/address/".concat(t.lpAddresses[43114]),totalValueFormated:f,lpLabel:v,quoteTokenAdresses:w,quoteTokenSymbol:C,tokenAddresses:S})})]})},Pe=n(96),De=function(e){var t=e.stakedOnly,n=e.setStakedOnly,c=Object(s.g)(),r=c.url,a=c.isExact,o=Object(k.a)();return Object(y.jsxs)(qe,{children:[Object(y.jsxs)(ze,{children:[Object(y.jsx)(u.C,{checked:t,onChange:function(){return n(!t)}}),Object(y.jsxs)(u.B,{children:[" ",o(699,"Staked only")]})]}),Object(y.jsxs)(u.e,{activeIndex:a?0:1,size:"sm",variant:"subtle",children:[Object(y.jsx)(u.f,{as:Pe.b,to:"".concat(r),children:o(698,"Active")}),Object(y.jsx)(u.f,{as:Pe.b,to:"".concat(r,"/history"),children:o(700,"Inactive")})]})]})},qe=g.e.div(M||(M=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),ze=g.e.div(Q||(Q=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),u.B),Fe=g.e.div(H||(H=Object(v.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),Ee=function(e){var t=Object(s.g)().path,n=Object(k.a)(),c=Object(p.c)(),b=Object(p.g)(),v=Object(p.f)(),g=Object(j.m)(),w=g.account,C=g.ethereum,S=e.tokenMode,A=Object(i.b)(),T=Object(m.a)().fastRefresh;Object(o.useEffect)((function(){w&&A(Object(f.a)(w))}),[w,A,T]);var B=Object(o.useState)(!1),L=Object(a.a)(B,2),I=L[0],P=L[1],D=c.filter((function(e){return!!e.isTokenOnly===!!S&&"0X"!==e.multiplier})),q=c.filter((function(e){return!!e.isTokenOnly===!!S&&"0X"===e.multiplier})),z=D.filter((function(e){return e.userData&&new l.a(e.userData.stakedBalance).isGreaterThan(0)})),F=Object(o.useCallback)((function(e,t){return e.map((function(e){var t=new l.a(e.eggPerBlock||1).times(new l.a(e.poolWeight)).div(new l.a(10).pow(18)).times(d.a),n=b.times(t),c=new l.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===h.b.BNB&&(c=c.times(v)),c.comparedTo(0)>0&&(n=n.div(c)),Object(r.a)(Object(r.a)({},e),{},{apy:n})})).map((function(e){return Object(y.jsx)(Ie,{farm:e,removed:t,bnbPrice:v,cakePrice:b,ethereum:C,account:w},e.pid)}))}),[v,w,b,C]);return Object(y.jsxs)(O.a,{children:[Object(y.jsx)(u.n,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:S?n(10002,"Stake tokens to earn GORILLA"):n(320,"Stake LP tokens to earn GORILLA")}),Object(y.jsx)(u.n,{as:"h2",color:"secondary",mb:"50px",style:{textAlign:"center"},children:n(1e4,"Deposit Fee will be used to buyback GORILLA")}),Object(y.jsx)(De,{stakedOnly:I,setStakedOnly:P}),Object(y.jsxs)("div",{children:[Object(y.jsx)(Fe,{}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(s.a,{exact:!0,path:"".concat(t),children:F(I?z:D,!1)}),Object(y.jsx)(s.a,{exact:!0,path:"".concat(t,"/history"),children:F(q,!0)})]})]}),Object(y.jsx)(u.p,{src:"/images/egg/8.png",alt:"illustration",width:1352,height:587,responsive:!0})]})}}}]);
//# sourceMappingURL=8.448eab0e.chunk.js.map