(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[13],{841:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return bn}));var c=t(30),r=t(43),a=t(0),o=t.n(a),s=t(45),i=t(78),l=t(27),b=t.n(l),j=t(93),d=t(71),u=t(813);u.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new u.a(1);var x,O,p=new u.a(10512e3),m=t(84),h=t(3),f=h.e.div(x||(x=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]))),k=t(224),g=t(133),v=t(163),y=t(162),w=t(55),S=t(805),C=t(32),T=h.e.div(O||(O=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),A=function(e){var n=e.onClick,t=e.expanded;return Object(C.jsxs)(T,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(C.jsx)(d.B,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(C.jsx)(d.k,{}):Object(C.jsx)(d.j,{})]})};A.defaultProps={expanded:!1};var B,L,I,P,q,D,z,F,N,E,G,R,M,Q,H,W,U,V,X,J,$,_,K,Y,Z,ee,ne,te,ce=A,re=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===t?"ETH":n[43114],a=c[43114];return"".concat(r,"/").concat(a)},ae=h.e.div(B||(B=Object(m.a)(["\n  margin-top: 24px;\n"]))),oe=Object(h.e)(d.r)(L||(L=Object(m.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),se=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,c=e.removed,r=e.totalValueFormated,a=e.lpLabel,o=e.quoteTokenAdresses,s=e.quoteTokenSymbol,i=e.tokenAddresses,l=Object(S.a)(),b=re({quoteTokenAdresses:o,quoteTokenSymbol:s,tokenAddresses:i});return Object(C.jsxs)(ae,{children:[Object(C.jsxs)(d.m,{justifyContent:"space-between",children:[Object(C.jsxs)(d.B,{children:[l(316,"Stake"),":"]}),Object(C.jsx)(oe,{href:n?"https://exchange.goosedefi.com/#/swap/".concat(i[43114]):"https://exchange.goosedefi.com/#/add/".concat(b),children:a})]}),!c&&Object(C.jsxs)(d.m,{justifyContent:"space-between",children:[Object(C.jsxs)(d.B,{children:[l(23,"Total Liquidity"),":"]}),Object(C.jsx)(d.B,{children:r})]}),Object(C.jsx)(d.m,{justifyContent:"flex-start",children:Object(C.jsx)(d.q,{external:!0,href:t,bold:!1,children:l(356,"View on Oklink")})})]})},ie=function(){return Object(C.jsx)(d.A,{variant:"success",outline:!0,startIcon:Object(C.jsx)(d.D,{}),children:"No Fees"})},le=Object(h.e)(d.m)(I||(I=Object(m.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),be=Object(h.e)(d.A)(P||(P=Object(m.a)(["\n  margin-left: 4px;\n"]))),je=function(e){var n=e.lpLabel,t=e.multiplier,c=(e.risk,e.farmImage),r=e.tokenSymbol,a=e.depositFee;return Object(C.jsxs)(le,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(C.jsx)(d.p,{src:"/images/farms/".concat(c,".png"),alt:r,width:64,height:64}),Object(C.jsxs)(d.m,{flexDirection:"column",alignItems:"flex-end",children:[Object(C.jsx)(d.n,{mb:"4px",children:n}),Object(C.jsxs)(d.m,{justifyContent:"center",children:[0===a?Object(C.jsx)(ie,{}):null,Object(C.jsx)(be,{variant:"secondary",children:t})]})]})]})},de=t(4),ue=t.n(de),xe=t(29),Oe=t(818),pe=t(817),me=(t(812),t(810)),he=t(811),fe=function(e){var n=Object(i.b)(),t=Object(j.m)().account,c=Object(he.c)();return{onStake:Object(a.useCallback)(function(){var r=Object(xe.a)(ue.a.mark((function r(a){var o;return ue.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(me.i)(c,e,a,t);case 2:o=r.sent,n(Object(y.a)(t)),console.info(o);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[t,n,c,e])}},ke=function(e){var n=Object(i.b)(),t=Object(j.m)().account,c=Object(he.c)();return{onUnstake:Object(a.useCallback)(function(){var r=Object(xe.a)(ue.a.mark((function r(a){var o;return ue.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(me.j)(c,e,a,t);case 2:o=r.sent,n(Object(y.a)(t)),console.info(o);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[t,n,c,e])}},ge=t(806),ve=h.e.div(q||(q=Object(m.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),ye=function(e){var n,t=e.size,c=void 0===t?"md":t,r=Object(a.useContext)(h.a).spacing;switch(c){case"lg":n=r[6];break;case"sm":n=r[2];break;case"md":default:n=r[4]}return Object(C.jsx)(ve,{size:n})},we=h.e.div(D||(D=Object(m.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),Se=h.e.div(z||(z=Object(m.a)(["\n  flex: 1;\n  text-align: center;\n"]))),Ce=function(e){var n=e.children,t=o.a.Children.toArray(n).length;return Object(C.jsx)(we,{children:o.a.Children.map(n,(function(e,n){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Se,{children:e}),n<t-1&&Object(C.jsx)(ye,{})]})}))})},Te=h.e.div(F||(F=Object(m.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),Ae=h.e.input(N||(N=Object(m.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.colors.primary})),Be=function(e){var n=e.endAdornment,t=e.onChange,c=e.placeholder,r=e.startAdornment,a=e.value;return Object(C.jsxs)(Te,{children:[!!r&&r,Object(C.jsx)(Ae,{placeholder:c,value:a,onChange:t}),!!n&&n]})},Le=h.e.div(E||(E=Object(m.a)([""]))),Ie=h.e.div(G||(G=Object(m.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),Pe=h.e.div(R||(R=Object(m.a)(["\n  align-items: center;\n  display: flex;\n"]))),qe=h.e.div(M||(M=Object(m.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),De=h.e.span(Q||(Q=Object(m.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),ze=function(e){var n=e.max,t=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,o=e.depositFeeBP,s=void 0===o?0:o,i=Object(S.a)();return Object(C.jsxs)(Le,{children:[Object(C.jsxs)(qe,{children:[n.toLocaleString()," ",t," ",i(526,"Available")]}),Object(C.jsx)(Be,{endAdornment:Object(C.jsxs)(Pe,{children:[Object(C.jsx)(De,{children:t}),Object(C.jsx)(Ie,{}),Object(C.jsx)("div",{children:Object(C.jsx)(d.d,{size:"sm",onClick:r,children:i(452,"Max")})})]}),onChange:c,placeholder:"0",value:a}),s>0?Object(C.jsxs)(qe,{children:[i(10001,"Deposit Fee"),": ",new u.a(a||0).times(s/1e4).toString()," ",t]}):null]})},Fe=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,o=e.tokenName,s=void 0===o?"":o,i=e.depositFeeBP,l=void 0===i?0:i,b=Object(a.useState)(""),j=Object(r.a)(b,2),u=j[0],x=j[1],O=Object(a.useState)(!1),p=Object(r.a)(O,2),m=p[0],h=p[1],f=Object(S.a)(),k=Object(a.useMemo)((function(){return Object(ge.b)(n)}),[n]),g=Object(a.useCallback)((function(e){x(e.currentTarget.value)}),[x]),v=Object(a.useCallback)((function(){x(k)}),[k,x]);return Object(C.jsxs)(d.v,{title:"".concat(f(316,"Deposit")," ").concat(s," Tokens"),onDismiss:c,children:[Object(C.jsx)(ze,{value:u,onSelectMax:v,onChange:g,max:k,symbol:s,depositFeeBP:l}),Object(C.jsxs)(Ce,{children:[Object(C.jsx)(d.d,{variant:"secondary",onClick:c,children:f(462,"Cancel")}),Object(C.jsx)(d.d,{disabled:m,onClick:Object(xe.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,t(u);case 3:h(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:m?f(488,"Pending Confirmation"):f(464,"Confirm")})]})]})},Ne=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,o=e.tokenName,s=void 0===o?"":o,i=Object(a.useState)(""),l=Object(r.a)(i,2),b=l[0],j=l[1],u=Object(a.useState)(!1),x=Object(r.a)(u,2),O=x[0],p=x[1],m=Object(S.a)(),h=Object(a.useMemo)((function(){return Object(ge.b)(c)}),[c]),f=Object(a.useCallback)((function(e){j(e.currentTarget.value)}),[j]),k=Object(a.useCallback)((function(){j(h)}),[h,j]);return Object(C.jsxs)(d.v,{title:"Withdraw ".concat(s),onDismiss:t,children:[Object(C.jsx)(ze,{onSelectMax:k,onChange:f,value:b,max:h,symbol:s}),Object(C.jsxs)(Ce,{children:[Object(C.jsx)(d.d,{variant:"secondary",onClick:t,children:m(462,"Cancel")}),Object(C.jsx)(d.d,{disabled:O,onClick:Object(xe.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,n(b);case 3:p(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:O?m(488,"Pending Confirmation"):m(464,"Confirm")})]})]})},Ee=h.e.div(H||(H=Object(m.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),Ge=function(e){var n=e.stakedBalance,t=e.tokenBalance,c=e.tokenName,a=e.pid,o=e.depositFeeBP,s=Object(S.a)(),i=fe(a).onStake,l=ke(a).onUnstake,b=Object(ge.a)(n),j=b.toLocaleString(),u=Object(d.G)(Object(C.jsx)(Fe,{max:t,onConfirm:i,tokenName:c,depositFeeBP:o})),x=Object(r.a)(u,1)[0],O=Object(d.G)(Object(C.jsx)(Ne,{max:n,onConfirm:l,tokenName:c})),p=Object(r.a)(O,1)[0];return Object(C.jsxs)(d.m,{justifyContent:"space-between",alignItems:"center",children:[Object(C.jsx)(d.n,{color:0===b?"textDisabled":"text",children:j}),0===b?Object(C.jsx)(d.d,{onClick:x,children:s(999,"Stake")}):Object(C.jsxs)(Ee,{children:[Object(C.jsx)(d.o,{variant:"tertiary",onClick:p,mr:"6px",children:Object(C.jsx)(d.u,{color:"primary"})}),Object(C.jsx)(d.o,{variant:"tertiary",onClick:x,children:Object(C.jsx)(d.a,{color:"primary"})})]})]})},Re=t(816),Me=h.e.div(W||(W=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),Qe=function(e){var n=e.earnings,t=e.pid,c=Object(S.a)(),o=Object(a.useState)(!1),s=Object(r.a)(o,2),i=s[0],l=s[1],b=Object(Re.b)(t).onReward,j=fe(t).onStake,u=Object(ge.a)(n),x=u.toLocaleString();return Object(C.jsxs)(d.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(C.jsx)(d.n,{color:0===u?"textDisabled":"text",children:x}),Object(C.jsxs)(Me,{children:[12===t?Object(C.jsx)(d.d,{disabled:0===u||i,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(xe.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,j(u.toString());case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(C.jsx)(d.d,{disabled:0===u||i,onClick:Object(xe.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,b();case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})},He=h.e.div(U||(U=Object(m.a)(["\n  padding-top: 16px;\n"]))),We=function(e){var n=e.farm,t=e.ethereum,c=e.account,o=Object(S.a)(),s=Object(a.useState)(!1),l=Object(r.a)(s,2),b=l[0],u=l[1],x=Object(g.a)(n.pid),O=x.pid,p=x.lpAddresses,m=x.tokenAddresses,h=x.isTokenOnly,f=x.depositFeeBP,k=Object(g.b)(O),v=k.allowance,w=k.tokenBalance,T=k.stakedBalance,A=k.earnings,B=p[43114],L=m[43114],I=n.lpSymbol.toUpperCase(),P=c&&v&&v.isGreaterThan(0),q=function(e){var n=Object(i.b)(),t=Object(j.m)().account,c=Object(he.c)();return{onApprove:Object(a.useCallback)(Object(xe.a)(ue.a.mark((function r(){var a;return ue.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(me.a)(e,c,t);case 3:return a=r.sent,n(Object(y.a)(t)),r.abrupt("return",a);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",!1);case 11:case"end":return r.stop()}}),r,null,[[0,8]])}))),[t,n,e,c])}}(Object(a.useMemo)((function(){return h?Object(Oe.a)(t,L):Object(Oe.a)(t,B)}),[t,B,L,h])).onApprove,D=Object(a.useCallback)(Object(xe.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,q();case 4:u(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[q]);return Object(C.jsxs)(He,{children:[Object(C.jsxs)(d.m,{children:[Object(C.jsx)(d.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"GORILLA"}),Object(C.jsx)(d.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:o(999,"Earned")})]}),Object(C.jsx)(Qe,{earnings:A,pid:O}),Object(C.jsxs)(d.m,{children:[Object(C.jsx)(d.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:I}),Object(C.jsx)(d.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:o(999,"Staked")})]}),c?P?Object(C.jsx)(Ge,{stakedBalance:T,tokenBalance:w,tokenName:I,pid:O,depositFeeBP:f}):Object(C.jsx)(d.d,{mt:"8px",fullWidth:!0,disabled:b,onClick:D,children:o(999,"Approve Contract")}):Object(C.jsx)(pe.a,{mt:"8px",fullWidth:!0})]})},Ue=function(e){var n,t=e.numberOfDays,c=e.farmApy/100,r=t/365,a=1e3/e.cakePrice,o=a*Math.pow(1+c/365,365*r);return n=o-a,Math.round(100*n)/100},Ve=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},Xe=h.e.div(V||(V=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),Je=h.e.div(X||(X=Object(m.a)(["\n  margin-bottom: '10px';\n"]))),$e=Object(h.e)(d.B)(J||(J=Object(m.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),_e=function(e){var n=e.onDismiss,t=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,o=e.cakePrice,s=e.apy,i=Object(S.a)(),l=re({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),j=s.times(new b.a(100)).toNumber(),u=1e3/o.toNumber(),x=Ue({numberOfDays:1,farmApy:j,cakePrice:o}),O=Ue({numberOfDays:7,farmApy:j,cakePrice:o}),p=Ue({numberOfDays:30,farmApy:j,cakePrice:o}),m=Ue({numberOfDays:365,farmApy:j,cakePrice:o});return Object(C.jsxs)(d.v,{title:"ROI",onDismiss:n,children:[Object(C.jsxs)(Xe,{children:[Object(C.jsx)(Je,{children:Object(C.jsx)(d.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Timeframe")})}),Object(C.jsx)(Je,{children:Object(C.jsx)(d.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"ROI")})}),Object(C.jsx)(Je,{children:Object(C.jsx)(d.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"GORILLA per $1000")})}),Object(C.jsx)(Je,{children:Object(C.jsx)(d.B,{children:"1d"})}),Object(C.jsx)(Je,{children:Object(C.jsxs)(d.B,{children:[Ve({amountEarned:x,amountInvested:u}),"%"]})}),Object(C.jsx)(Je,{children:Object(C.jsx)(d.B,{children:x})}),Object(C.jsx)(Je,{children:Object(C.jsx)(d.B,{children:"7d"})}),Object(C.jsx)(Je,{children:Object(C.jsxs)(d.B,{children:[Ve({amountEarned:O,amountInvested:u}),"%"]})}),Object(C.jsx)(Je,{children:Object(C.jsx)(d.B,{children:O})}),Object(C.jsx)(Je,{children:Object(C.jsx)(d.B,{children:"30d"})}),Object(C.jsx)(Je,{children:Object(C.jsxs)(d.B,{children:[Ve({amountEarned:p,amountInvested:u}),"%"]})}),Object(C.jsx)(Je,{children:Object(C.jsx)(d.B,{children:p})}),Object(C.jsx)(Je,{children:Object(C.jsx)(d.B,{children:"365d(APY)"})}),Object(C.jsx)(Je,{children:Object(C.jsxs)(d.B,{children:[Ve({amountEarned:m,amountInvested:u}),"%"]})}),Object(C.jsx)(Je,{children:Object(C.jsx)(d.B,{children:m})})]}),Object(C.jsx)($e,{fontSize:"12px",color:"textSubtle",children:i(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(C.jsx)(d.m,{justifyContent:"center",children:Object(C.jsxs)(d.r,{href:"https://exchange.pancakeswap.finance/#/add/".concat(l),children:[i(999,"Get")," ",t]})})]})},Ke=function(e){var n=e.lpLabel,t=e.quoteTokenAdresses,c=e.quoteTokenSymbol,a=e.tokenAddresses,o=e.cakePrice,s=e.apy,i=Object(d.G)(Object(C.jsx)(_e,{lpLabel:n,quoteTokenAdresses:t,quoteTokenSymbol:c,tokenAddresses:a,cakePrice:o,apy:s})),l=Object(r.a)(i,1)[0];return Object(C.jsx)(d.o,{onClick:l,variant:"text",size:"sm",ml:"4px",children:Object(C.jsx)(d.g,{})})},Ye=Object(h.f)($||($=Object(m.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),Ze=h.e.div(_||(_=Object(m.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),Ye),en=h.e.div(K||(K=Object(m.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),nn=h.e.div(Y||(Y=Object(m.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),tn=h.e.div(Z||(Z=Object(m.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),cn=function(e){var n=e.farm,t=e.removed,c=e.cakePrice,o=e.bnbPrice,s=e.ethereum,i=e.account,l=Object(S.a)(),j=Object(a.useState)(!1),u=Object(r.a)(j,2),x=u[0],O=u[1],p=n.isTokenOnly?n.tokenSymbol.toLowerCase():"".concat(n.tokenSymbol.toLowerCase(),"-").concat(n.quoteTokenSymbol.toLowerCase()),m=Object(a.useMemo)((function(){return n.lpTotalInQuoteToken?n.quoteTokenSymbol===w.b.BNB?o.times(n.lpTotalInQuoteToken):n.quoteTokenSymbol===w.b.CAKE?c.times(n.lpTotalInQuoteToken):n.lpTotalInQuoteToken:null}),[o,c,n.lpTotalInQuoteToken,n.quoteTokenSymbol]),h=m?"$".concat(Number(m).toLocaleString(void 0,{maximumFractionDigits:0})):"-",f=n.lpSymbol,k=n.apy&&n.apy.times(new b.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),g=n.quoteTokenAdresses,v=n.quoteTokenSymbol,y=n.tokenAddresses,T=n.risk;return Object(C.jsxs)(en,{children:["GORILLA"===n.tokenSymbol&&Object(C.jsx)(Ze,{}),Object(C.jsx)(je,{lpLabel:f,multiplier:n.multiplier,risk:T,depositFee:n.depositFeeBP,farmImage:p,tokenSymbol:n.tokenSymbol}),!t&&Object(C.jsxs)(d.m,{justifyContent:"space-between",alignItems:"center",children:[Object(C.jsxs)(d.B,{children:[l(352,"APR"),":"]}),Object(C.jsx)(d.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Ke,{lpLabel:f,quoteTokenAdresses:g,quoteTokenSymbol:v,tokenAddresses:y,cakePrice:c,apy:n.apy}),k,"%"]}):Object(C.jsx)(d.y,{height:24,width:80})})]}),Object(C.jsxs)(d.m,{justifyContent:"space-between",children:[Object(C.jsxs)(d.B,{children:[l(318,"Earn"),":"]}),Object(C.jsx)(d.B,{bold:!0,children:"GORILLA"})]}),Object(C.jsxs)(d.m,{justifyContent:"space-between",children:[Object(C.jsxs)(d.B,{style:{fontSize:"24px"},children:[l(10001,"Deposit Fee"),":"]}),Object(C.jsxs)(d.B,{bold:!0,style:{fontSize:"24px"},children:[n.depositFeeBP/100,"%"]})]}),Object(C.jsx)(We,{farm:n,ethereum:s,account:i}),Object(C.jsx)(nn,{}),Object(C.jsx)(ce,{onClick:function(){return O(!x)},expanded:x}),Object(C.jsx)(tn,{expanded:x,children:Object(C.jsx)(se,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://cchain.explorer.avax.network/address/".concat(n.tokenAddresses[43114]):"https://cchain.explorer.avax.network/address/".concat(n.lpAddresses[43114]),totalValueFormated:h,lpLabel:f,quoteTokenAdresses:g,quoteTokenSymbol:v,tokenAddresses:y})})]})},rn=t(104),an=function(e){var n=e.stakedOnly,t=e.setStakedOnly,c=Object(s.g)(),r=c.url,a=c.isExact,o=Object(S.a)();return Object(C.jsxs)(on,{children:[Object(C.jsxs)(sn,{children:[Object(C.jsx)(d.C,{checked:n,onChange:function(){return t(!n)}}),Object(C.jsxs)(d.B,{children:[" ",o(699,"Staked only")]})]}),Object(C.jsxs)(d.e,{activeIndex:a?0:1,size:"sm",variant:"subtle",children:[Object(C.jsx)(d.f,{as:rn.b,to:"".concat(r),children:o(698,"Active")}),Object(C.jsx)(d.f,{as:rn.b,to:"".concat(r,"/history"),children:o(700,"Inactive")})]})]})},on=h.e.div(ee||(ee=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),sn=h.e.div(ne||(ne=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),d.B),ln=h.e.div(te||(te=Object(m.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),bn=function(e){var n=Object(s.g)().path,t=Object(S.a)(),o=Object(g.c)(),l=Object(g.f)(),u=Object(g.e)(),x=Object(j.m)(),O=x.account,m=x.ethereum,h=e.tokenMode,T=Object(i.b)(),A=Object(v.a)().fastRefresh;Object(a.useEffect)((function(){O&&T(Object(y.a)(O))}),[O,T,A]);var B=Object(a.useState)(!1),L=Object(r.a)(B,2),I=L[0],P=L[1],q=o.filter((function(e){return!!e.isTokenOnly===!!h&&"0X"!==e.multiplier})),D=o.filter((function(e){return!!e.isTokenOnly===!!h&&"0X"===e.multiplier})),z=q.filter((function(e){return e.userData&&new b.a(e.userData.stakedBalance).isGreaterThan(0)})),F=Object(a.useCallback)((function(e,n){return e.map((function(e){var n=new b.a(e.eggPerBlock||1).times(new b.a(e.poolWeight)).div(new b.a(10).pow(18)).times(p),t=l.times(n),r=new b.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===w.b.BNB&&(r=r.times(u)),r.comparedTo(0)>0&&(t=t.div(r)),Object(c.a)(Object(c.a)({},e),{},{apy:t})})).map((function(e){return Object(C.jsx)(cn,{farm:e,removed:n,bnbPrice:u,cakePrice:l,ethereum:m,account:O},e.pid)}))}),[u,O,l,m]);return Object(C.jsxs)(k.a,{children:[Object(C.jsx)(d.n,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:h?t(10002,"Stake tokens to earn GORILLA"):t(320,"Stake LP tokens to earn GORILLA")}),Object(C.jsx)(d.n,{as:"h2",color:"secondary",mb:"50px",style:{textAlign:"center"},children:t(1e4,"Deposit Fee will be used to buyback GORILLA")}),Object(C.jsx)(an,{stakedOnly:I,setStakedOnly:P}),Object(C.jsxs)("div",{children:[Object(C.jsx)(ln,{}),Object(C.jsxs)(f,{children:[Object(C.jsx)(s.a,{exact:!0,path:"".concat(n),children:F(I?z:q,!1)}),Object(C.jsx)(s.a,{exact:!0,path:"".concat(n,"/history"),children:F(D,!0)})]})]}),Object(C.jsx)(d.p,{src:"/images/egg/8.png",alt:"illustration",width:1352,height:587,responsive:!0})]})}}}]);
//# sourceMappingURL=13.da830aef.chunk.js.map