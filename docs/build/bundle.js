var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t){return null==t?"":t}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function m(){return d("")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let y;function v(t){y=t}function x(){if(!y)throw new Error("Function called outside component initialization");return y}const C=[],j=[],$=[],k=[],w=Promise.resolve();let S=!1;function U(t){$.push(t)}let N=!1;const _=new Set;function D(){if(!N){N=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];v(e),O(e.$$)}for(v(null),C.length=0;j.length;)j.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];_.has(e)||(_.add(e),e())}$.length=0}while(C.length);for(;k.length;)k.pop()();S=!1,N=!1,_.clear()}}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const A=new Set;let L;function T(t,e){t&&t.i&&(A.delete(t),t.i(e))}function E(t,e){const n=e.token={};function l(t,l,s,r){if(e.token!==n)return;e.resolved=r;let c=e.ctx;void 0!==s&&(c=c.slice(),c[s]=r);const a=t&&(e.current=t)(c);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==l&&t&&(L={r:0,c:[],p:L},function(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),L.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),L.r||o(L.c),L=L.p)})):e.block.d(1),a.c(),T(a,1),a.m(e.mount(),e.anchor),i=!0),e.block=a,e.blocks&&(e.blocks[l]=a),i&&D()}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){const n=x();if(t.then((t=>{v(n),l(e.then,1,e.value,t),v(null)}),(t=>{if(v(n),l(e.catch,2,e.error,t),v(null),!e.hasCatch)throw t})),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}var s}function H(t,e){-1===t.$$.dirty[0]&&(C.push(t),S||(S=!0,w.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(s,r,c,a,u,p,d=[-1]){const f=y;v(s);const m=s.$$={fragment:null,ctx:null,props:p,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:r.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let h=!1;if(m.ctx=c?c(s,r.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),h&&H(s,t)),e})):[],m.update(),h=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();r.intro&&T(s.$$.fragment),function(t,n,s,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:u}=t.$$;c&&c.m(n,s),r||U((()=>{const n=a.map(e).filter(l);i?i.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(U)}(s,r.target,r.anchor,r.customElement),D()}v(f)}function J(t,e,n){const o=t.slice();return o[3]=e[n],o}function M(t,e,n){const o=t.slice();return o[3]=e[n],o}function P(t){let e,n,o={ctx:t,current:null,token:null,hasCatch:!0,pending:ht,then:B,catch:z,value:2,error:8};return E(n=t[0],o),{c(){e=p("main"),o.block.c(),h(e,"class","svelte-1jb0oof")},m(t,n){a(t,e,n),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null},p(e,l){if(t=e,o.ctx=t,1&l&&n!==(n=t[0])&&E(n,o));else{const e=t.slice();e[2]=e[8]=o.resolved,o.block.p(e,l)}},d(t){t&&i(e),o.block.d(),o.token=null,o=null}}}function I(e){let n;return{c(){n=p("main"),n.innerHTML='<section><form action="/" method="get"><label for="id">Enter your HTLC ID:</label> \n\t\t\t\t<input type="text" size="34" name="id" id="id" required=""/> \n\t\t\t\t<button type="submit" class="svelte-1jb0oof">Search</button></form></section>',h(n,"class","svelte-1jb0oof")},m(t,e){a(t,n,e)},p:t,d(t){t&&i(n)}}}function z(t){let e,n,o,l,s,r,u,m,y=t[8].message+"";return{c(){e=p("section"),n=p("h1"),o=p("code"),l=d(t[1]),s=f(),r=p("section"),u=p("h2"),m=d(y),h(n,"class","htlc-id svelte-1jb0oof"),g(u,"color","crimson")},m(t,i){a(t,e,i),c(e,n),c(n,o),c(o,l),a(t,s,i),a(t,r,i),c(r,u),c(u,m)},p(t,e){2&e&&b(l,t[1]),1&e&&y!==(y=t[8].message+"")&&b(m,y)},d(t){t&&i(e),t&&i(s),t&&i(r)}}}function B(t){let e,n,o,l,s,r,u,m,g,y,v,x,C,j,$,k,w,S,U,N,_,D,O,A,L,T,E,H,F,J,M,P,I,z,B,K,G,V,W,Q,X,Y,Z,tt,et,ot,lt,st,rt,ct,at,ut,pt,ht,bt,yt,vt,xt,Ct,jt,$t,kt,wt,St,Ut,Nt,_t,Dt,Ot,At,Lt,Tt,Et,Ht,Ft,Jt,Mt,Pt,It,zt,Bt,qt,Kt,Rt,Gt,Vt,Wt,Qt,Xt,Yt,Zt,te,ee,ne,oe,le,se,re=t[2].id+"",ce=t[2].status+"",ae=t[2].asset.toUpperCase()+"",ie=t[2].amount.toFixed(2)+"",ue=t[2].asset.toUpperCase()+"",pe=t[2].fee.toFixed(2)+"",de=t[2].id+"",fe=t[2].beneficiary.kty+"",me=t[2].beneficiary.crv+"",he=gt(t[2].beneficiary.x)+"",be=t[2].hash.algorithm.toUpperCase()+"",ge=gt(t[2].hash.value)+"",ye=t[2].preimage.size+"",ve=JSON.stringify(t[2],null,2)+"",xe="settled"!==t[2].status&&q(t),Ce="pending"===t[2].status&&R(t),je="cleared"===t[2].status&&nt(t),$e="settled"===t[2].status&&it(t),ke=t[2].beneficiary.y&&dt(t);function we(t,e){return t[2].preimage.value?mt:ft}let Se=we(t),Ue=Se(t);return{c(){e=p("section"),n=p("header"),o=p("h1"),l=p("code"),s=d(re),r=f(),u=p("big"),m=p("mark"),g=p("b"),y=d(ce),v=d(" HTLC\n\t\t\t\t\t\tfor "),x=p("mark"),C=p("b"),j=d(ae),$=d(" "),k=d(ie),w=d("\n\t\t\t\t\t\t(+ "),S=d(ue),U=d(" "),N=d(pe),_=d(" fee)\n\t\t\t\t\t\t"),xe&&xe.c(),D=f(),Ce&&Ce.c(),O=f(),je&&je.c(),A=f(),$e&&$e.c(),L=f(),T=p("section"),E=p("table"),H=p("thead"),H.innerHTML='<tr><th class="svelte-1jb0oof">Key</th> \n\t\t\t\t\t\t\t<th class="svelte-1jb0oof">Value</th></tr>',F=f(),J=p("tbody"),M=p("tr"),P=p("td"),P.textContent="ID",I=f(),z=p("td"),B=p("b"),K=d(de),G=f(),V=p("tr"),W=p("td"),W.textContent="Beneficiary",Q=f(),X=p("td"),Y=p("small"),Y.textContent="Keytype:",Z=f(),tt=p("code"),et=d(fe),ot=p("br"),lt=f(),st=p("small"),st.textContent="Curve:",rt=f(),ct=p("code"),at=d(me),ut=p("br"),pt=f(),ht=p("small"),ht.textContent="x:",bt=f(),yt=p("code"),vt=d(he),xt=p("br"),Ct=f(),ke&&ke.c(),jt=f(),$t=p("tr"),kt=p("td"),kt.textContent="Hash",wt=f(),St=p("td"),Ut=p("small"),Ut.textContent="Algorithm:",Nt=f(),_t=p("code"),Dt=d(be),Ot=p("br"),At=f(),Lt=p("code"),Tt=d(ge),Et=f(),Ht=p("tr"),Ft=p("td"),Ft.innerHTML="Preimage<br/>(Secret)",Jt=f(),Mt=p("td"),Pt=p("small"),Pt.textContent="Size:",It=f(),zt=p("code"),Bt=d(ye),qt=p("br"),Kt=f(),Ue.c(),Rt=f(),Gt=p("br"),Vt=f(),Wt=p("section"),Qt=p("details"),Xt=p("summary"),Xt.textContent="Plain HTLC Object",Yt=f(),Zt=p("pre"),te=p("code"),ee=d(ve),ne=f(),oe=p("a"),le=d("Source ↗"),h(o,"class","htlc-id svelte-1jb0oof"),h(m,"class","capitalize svelte-1jb0oof"),h(e,"class","svelte-1jb0oof"),h(P,"class","svelte-1jb0oof"),h(z,"class","svelte-1jb0oof"),h(W,"class","svelte-1jb0oof"),h(X,"class","svelte-1jb0oof"),h(kt,"class","svelte-1jb0oof"),h(St,"class","svelte-1jb0oof"),h(Ft,"class","svelte-1jb0oof"),h(Mt,"class","svelte-1jb0oof"),h(E,"class","svelte-1jb0oof"),h(T,"class","svelte-1jb0oof"),h(te,"class","svelte-1jb0oof"),h(Zt,"class","svelte-1jb0oof"),h(oe,"href",se=`https://oasis.ten31.com/v1/htlc/${t[2].id}`)},m(t,i){a(t,e,i),c(e,n),c(n,o),c(o,l),c(l,s),c(n,r),c(n,u),c(u,m),c(m,g),c(g,y),c(u,v),c(u,x),c(x,C),c(C,j),c(C,$),c(C,k),c(u,w),c(u,S),c(u,U),c(u,N),c(u,_),xe&&xe.m(u,null),c(e,D),Ce&&Ce.m(e,null),c(e,O),je&&je.m(e,null),c(e,A),$e&&$e.m(e,null),a(t,L,i),a(t,T,i),c(T,E),c(E,H),c(E,F),c(E,J),c(J,M),c(M,P),c(M,I),c(M,z),c(z,B),c(B,K),c(J,G),c(J,V),c(V,W),c(V,Q),c(V,X),c(X,Y),c(X,Z),c(X,tt),c(tt,et),c(X,ot),c(X,lt),c(X,st),c(X,rt),c(X,ct),c(ct,at),c(X,ut),c(X,pt),c(X,ht),c(X,bt),c(X,yt),c(yt,vt),c(X,xt),c(X,Ct),ke&&ke.m(X,null),c(J,jt),c(J,$t),c($t,kt),c($t,wt),c($t,St),c(St,Ut),c(St,Nt),c(St,_t),c(_t,Dt),c(St,Ot),c(St,At),c(St,Lt),c(Lt,Tt),c(J,Et),c(J,Ht),c(Ht,Ft),c(Ht,Jt),c(Ht,Mt),c(Mt,Pt),c(Mt,It),c(Mt,zt),c(zt,Bt),c(Mt,qt),c(Mt,Kt),Ue.m(Mt,null),a(t,Rt,i),a(t,Gt,i),a(t,Vt,i),a(t,Wt,i),c(Wt,Qt),c(Qt,Xt),c(Qt,Yt),c(Qt,Zt),c(Zt,te),c(te,ee),c(Qt,ne),c(Qt,oe),c(oe,le)},p(t,n){1&n&&re!==(re=t[2].id+"")&&b(s,re),1&n&&ce!==(ce=t[2].status+"")&&b(y,ce),1&n&&ae!==(ae=t[2].asset.toUpperCase()+"")&&b(j,ae),1&n&&ie!==(ie=t[2].amount.toFixed(2)+"")&&b(k,ie),1&n&&ue!==(ue=t[2].asset.toUpperCase()+"")&&b(S,ue),1&n&&pe!==(pe=t[2].fee.toFixed(2)+"")&&b(N,pe),"settled"!==t[2].status?xe?xe.p(t,n):(xe=q(t),xe.c(),xe.m(u,null)):xe&&(xe.d(1),xe=null),"pending"===t[2].status?Ce?Ce.p(t,n):(Ce=R(t),Ce.c(),Ce.m(e,O)):Ce&&(Ce.d(1),Ce=null),"cleared"===t[2].status?je?je.p(t,n):(je=nt(t),je.c(),je.m(e,A)):je&&(je.d(1),je=null),"settled"===t[2].status?$e?$e.p(t,n):($e=it(t),$e.c(),$e.m(e,null)):$e&&($e.d(1),$e=null),1&n&&de!==(de=t[2].id+"")&&b(K,de),1&n&&fe!==(fe=t[2].beneficiary.kty+"")&&b(et,fe),1&n&&me!==(me=t[2].beneficiary.crv+"")&&b(at,me),1&n&&he!==(he=gt(t[2].beneficiary.x)+"")&&b(vt,he),t[2].beneficiary.y?ke?ke.p(t,n):(ke=dt(t),ke.c(),ke.m(X,null)):ke&&(ke.d(1),ke=null),1&n&&be!==(be=t[2].hash.algorithm.toUpperCase()+"")&&b(Dt,be),1&n&&ge!==(ge=gt(t[2].hash.value)+"")&&b(Tt,ge),1&n&&ye!==(ye=t[2].preimage.size+"")&&b(Bt,ye),Se===(Se=we(t))&&Ue?Ue.p(t,n):(Ue.d(1),Ue=Se(t),Ue&&(Ue.c(),Ue.m(Mt,null))),1&n&&ve!==(ve=JSON.stringify(t[2],null,2)+"")&&b(ee,ve),1&n&&se!==(se=`https://oasis.ten31.com/v1/htlc/${t[2].id}`)&&h(oe,"href",se)},d(t){t&&i(e),xe&&xe.d(),Ce&&Ce.d(),je&&je.d(),$e&&$e.d(),t&&i(L),t&&i(T),ke&&ke.d(),Ue.d(),t&&i(Rt),t&&i(Gt),t&&i(Vt),t&&i(Wt)}}}function q(t){let e,n,o,l,s,r,u,m,h,g,y=new Date(t[2].expires)>new Date?"s":"d",v=new Date(t[2].expires).toLocaleString()+"",x=new Date(t[2].expires)>new Date,C=x&&K(t);return{c(){e=p("br"),n=f(),o=p("small"),l=d("expire"),s=d(y),r=f(),u=p("mark"),m=p("b"),h=d(v),g=f(),C&&C.c()},m(t,i){a(t,e,i),a(t,n,i),a(t,o,i),c(o,l),c(o,s),c(o,r),c(o,u),c(u,m),c(m,h),c(o,g),C&&C.m(o,null)},p(t,e){1&e&&y!==(y=new Date(t[2].expires)>new Date?"s":"d")&&b(s,y),1&e&&v!==(v=new Date(t[2].expires).toLocaleString()+"")&&b(h,v),1&e&&(x=new Date(t[2].expires)>new Date),x?C?C.p(t,e):(C=K(t),C.c(),C.m(o,null)):C&&(C.d(1),C=null)},d(t){t&&i(e),t&&i(n),t&&i(o),C&&C.d()}}}function K(t){let e,n,o,l=Math.floor((new Date(t[2].expires)-new Date)/1e3/60)+"";return{c(){e=d("(in "),n=d(l),o=d(" min)")},m(t,l){a(t,e,l),a(t,n,l),a(t,o,l)},p(t,e){1&e&&l!==(l=Math.floor((new Date(t[2].expires)-new Date)/1e3/60)+"")&&b(n,l)},d(t){t&&i(e),t&&i(n),t&&i(o)}}}function R(t){let e,n=t[2].clearing.options,o=[];for(let e=0;e<n.length;e+=1)o[e]=et(M(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=m()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);a(t,e,n)},p(t,l){if(1&l){let s;for(n=t[2].clearing.options,s=0;s<n.length;s+=1){const r=M(t,n,s);o[s]?o[s].p(r,l):(o[s]=et(r),o[s].c(),o[s].m(e.parentNode,e))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(t){u(o,t),t&&i(e)}}}function G(t){let e,n,o,l,s,r,u,g,y=t[3].type.toUpperCase()+"",v=t[2].clearing.status.toUpperCase()+"",x="denied"===t[2].clearing.status&&W(t),C="partial"===t[2].clearing.status&&Q(t);return{c(){e=p("h3"),n=d(y),o=d(" Clearing "),l=p("sup"),s=d(v),r=f(),x&&x.c(),u=f(),C&&C.c(),g=m(),h(e,"class","svelte-1jb0oof")},m(t,i){a(t,e,i),c(e,n),c(e,o),c(e,l),c(l,s),a(t,r,i),x&&x.m(t,i),a(t,u,i),C&&C.m(t,i),a(t,g,i)},p(t,e){1&e&&y!==(y=t[3].type.toUpperCase()+"")&&b(n,y),1&e&&v!==(v=t[2].clearing.status.toUpperCase()+"")&&b(s,v),"denied"===t[2].clearing.status?x?x.p(t,e):(x=W(t),x.c(),x.m(u.parentNode,u)):x&&(x.d(1),x=null),"partial"===t[2].clearing.status?C?C.p(t,e):(C=Q(t),C.c(),C.m(g.parentNode,g)):C&&(C.d(1),C=null)},d(t){t&&i(e),t&&i(r),x&&x.d(t),t&&i(u),C&&C.d(t),t&&i(g)}}}function V(t){let e,n,o,l=t[3].type.toUpperCase()+"";return{c(){e=p("h3"),n=d(l),o=d(" Clearing"),h(e,"class","svelte-1jb0oof")},m(t,l){a(t,e,l),c(e,n),c(e,o)},p(t,e){1&e&&l!==(l=t[3].type.toUpperCase()+"")&&b(n,l)},d(t){t&&i(e)}}}function W(t){let e,n,o,l=t[2].clearing.detail.reason+"";return{c(){e=p("p"),n=p("b"),o=d(l),g(e,"color","red")},m(t,l){a(t,e,l),c(e,n),c(n,o)},p(t,e){1&e&&l!==(l=t[2].clearing.detail.reason+"")&&b(o,l)},d(t){t&&i(e)}}}function Q(t){let e,n,o,l,s,r=t[2].asset.toUpperCase()+"",u=t[2].clearing.detail.amount.toFixed(2)+"";return{c(){e=p("p"),n=d("Already cleared: "),o=d(r),l=f(),s=d(u)},m(t,r){a(t,e,r),c(e,n),c(e,o),c(e,l),c(e,s)},p(t,e){1&e&&r!==(r=t[2].asset.toUpperCase()+"")&&b(o,r),1&e&&u!==(u=t[2].clearing.detail.amount.toFixed(2)+"")&&b(s,u)},d(t){t&&i(e)}}}function X(t){let e,n,o,l=JSON.stringify(t[3],null,2)+"";return{c(){e=p("pre"),n=p("code"),o=d(l),h(n,"class","svelte-1jb0oof"),h(e,"class","svelte-1jb0oof")},m(t,l){a(t,e,l),c(e,n),c(n,o)},p(t,e){1&e&&l!==(l=JSON.stringify(t[3],null,2)+"")&&b(o,l)},d(t){t&&i(e)}}}function Y(t){let e,n=t[3].description+"";return{c(){e=d(n)},m(t,n){a(t,e,n)},p(t,o){1&o&&n!==(n=t[3].description+"")&&b(e,n)},d(t){t&&i(e)}}}function Z(t){let e,n,o,l,s,r,u,m,g,y,v,x,C,j,$,k,w,S,U,N,_,D,O,A,L,T,E,H,F,J,M,P,I,z,B=t[2].asset.toUpperCase()+"",q=(t[3].amount-("partial"===t[2].clearing.status?t[2].clearing.detail.amount:0)).toFixed(2)+"",K=t[3].recipient.name+"",R=yt(t[3].recipient.iban)+"",G=t[3].recipient.bic+"",V=t[3].purpose+"",W="partial"===t[2].clearing.status&&tt();return{c(){e=p("table"),n=p("tbody"),o=p("tr"),l=p("th"),l.textContent="Amount",s=f(),r=p("td"),u=d(B),m=f(),g=d(q),y=f(),W&&W.c(),v=f(),x=p("tr"),C=p("th"),C.textContent="Name",j=f(),$=p("td"),k=d(K),w=f(),S=p("tr"),U=p("th"),U.textContent="IBAN",N=f(),_=p("td"),D=d(R),O=f(),A=p("tr"),L=p("th"),L.textContent="BIC",T=f(),E=p("td"),H=d(G),F=f(),J=p("tr"),M=p("th"),M.textContent="Purpose",P=f(),I=p("td"),z=d(V),h(l,"class","svelte-1jb0oof"),h(r,"class","svelte-1jb0oof"),h(C,"class","svelte-1jb0oof"),h($,"class","svelte-1jb0oof"),h(U,"class","svelte-1jb0oof"),h(_,"class","svelte-1jb0oof"),h(L,"class","svelte-1jb0oof"),h(E,"class","svelte-1jb0oof"),h(M,"class","svelte-1jb0oof"),h(I,"class","svelte-1jb0oof")},m(t,i){a(t,e,i),c(e,n),c(n,o),c(o,l),c(o,s),c(o,r),c(r,u),c(r,m),c(r,g),c(r,y),W&&W.m(r,null),c(n,v),c(n,x),c(x,C),c(x,j),c(x,$),c($,k),c(n,w),c(n,S),c(S,U),c(S,N),c(S,_),c(_,D),c(n,O),c(n,A),c(A,L),c(A,T),c(A,E),c(E,H),c(n,F),c(n,J),c(J,M),c(J,P),c(J,I),c(I,z)},p(t,e){1&e&&B!==(B=t[2].asset.toUpperCase()+"")&&b(u,B),1&e&&q!==(q=(t[3].amount-("partial"===t[2].clearing.status?t[2].clearing.detail.amount:0)).toFixed(2)+"")&&b(g,q),"partial"===t[2].clearing.status?W||(W=tt(),W.c(),W.m(r,null)):W&&(W.d(1),W=null),1&e&&K!==(K=t[3].recipient.name+"")&&b(k,K),1&e&&R!==(R=yt(t[3].recipient.iban)+"")&&b(D,R),1&e&&G!==(G=t[3].recipient.bic+"")&&b(H,G),1&e&&V!==(V=t[3].purpose+"")&&b(z,V)},d(t){t&&i(e),W&&W.d()}}}function tt(t){let e;return{c(){e=d("(remaining)")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function et(t){let e,n,o;function l(t,e){return t[2].clearing.type&&t[2].clearing.type===t[3].type?G:V}let s=l(t),r=s(t);function u(t,e){return"sepa"===t[3].type?Z:"mock"===t[3].type?Y:X}let d=u(t),m=d(t);return{c(){e=p("aside"),r.c(),n=f(),m.c(),o=f(),h(e,"class","svelte-1jb0oof")},m(t,l){a(t,e,l),r.m(e,null),c(e,n),m.m(e,null),c(e,o)},p(t,c){s===(s=l(t))&&r?r.p(t,c):(r.d(1),r=s(t),r&&(r.c(),r.m(e,n))),d===(d=u(t))&&m?m.p(t,c):(m.d(1),m=d(t),m&&(m.c(),m.m(e,o)))},d(t){t&&i(e),r.d(),m.d()}}}function nt(t){let e,n=t[2].settlement.options,o=[];for(let e=0;e<n.length;e+=1)o[e]=at(J(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=m()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);a(t,e,n)},p(t,l){if(1&l){let s;for(n=t[2].settlement.options,s=0;s<n.length;s+=1){const r=J(t,n,s);o[s]?o[s].p(r,l):(o[s]=at(r),o[s].c(),o[s].m(e.parentNode,e))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(t){u(o,t),t&&i(e)}}}function ot(t){let e,n,o,l,s,r,u,g=t[3].type.toUpperCase()+"",y=t[2].settlement.status.toUpperCase()+"",v="denied"===t[2].settlement.status&&st(t);return{c(){e=p("h3"),n=d(g),o=d(" Settlement "),l=p("sup"),s=d(y),r=f(),v&&v.c(),u=m(),h(e,"class","svelte-1jb0oof")},m(t,i){a(t,e,i),c(e,n),c(e,o),c(e,l),c(l,s),a(t,r,i),v&&v.m(t,i),a(t,u,i)},p(t,e){1&e&&g!==(g=t[3].type.toUpperCase()+"")&&b(n,g),1&e&&y!==(y=t[2].settlement.status.toUpperCase()+"")&&b(s,y),"denied"===t[2].settlement.status?v?v.p(t,e):(v=st(t),v.c(),v.m(u.parentNode,u)):v&&(v.d(1),v=null)},d(t){t&&i(e),t&&i(r),v&&v.d(t),t&&i(u)}}}function lt(t){let e,n,o,l=t[3].type.toUpperCase()+"";return{c(){e=p("h3"),n=d(l),o=d(" Settlement"),h(e,"class","svelte-1jb0oof")},m(t,l){a(t,e,l),c(e,n),c(e,o)},p(t,e){1&e&&l!==(l=t[3].type.toUpperCase()+"")&&b(n,l)},d(t){t&&i(e)}}}function st(t){let e,n,o,l=t[2].settlement.detail.reason+"";return{c(){e=p("p"),n=p("b"),o=d(l),g(e,"color","red")},m(t,l){a(t,e,l),c(e,n),c(n,o)},p(t,e){1&e&&l!==(l=t[2].settlement.detail.reason+"")&&b(o,l)},d(t){t&&i(e)}}}function rt(t){let e,n,o,l=JSON.stringify(t[3],null,2)+"";return{c(){e=p("pre"),n=p("code"),o=d(l),h(n,"class","svelte-1jb0oof"),h(e,"class","svelte-1jb0oof")},m(t,l){a(t,e,l),c(e,n),c(n,o)},p(t,e){1&e&&l!==(l=JSON.stringify(t[3],null,2)+"")&&b(o,l)},d(t){t&&i(e)}}}function ct(e){let n,o,l;return{c(){n=p("code"),n.textContent="POST",o=d(" settlement instruction to "),l=p("code"),l.textContent="/htlc/{id}/settle"},m(t,e){a(t,n,e),a(t,o,e),a(t,l,e)},p:t,d(t){t&&i(n),t&&i(o),t&&i(l)}}}function at(t){let e,n,o;function l(t,e){return t[2].settlement.type&&t[2].settlement.type===t[3].type?ot:lt}let s=l(t),r=s(t);function u(t,e){return"sepa"===t[3].type||"mock"===t[3].type?ct:rt}let d=u(t),m=d(t);return{c(){e=p("aside"),r.c(),n=f(),m.c(),o=f(),h(e,"class","svelte-1jb0oof")},m(t,l){a(t,e,l),r.m(e,null),c(e,n),m.m(e,null),c(e,o)},p(t,c){s===(s=l(t))&&r?r.p(t,c):(r.d(1),r=s(t),r&&(r.c(),r.m(e,n))),d===(d=u(t))&&m?m.p(t,c):(m.d(1),m=d(t),m&&(m.c(),m.m(e,o)))},d(t){t&&i(e),r.d(),m.d()}}}function it(t){let e,n,o,l,s,u,m,g,y=(t[2].settlement.type?t[2].settlement.type.toUpperCase():"")+"",v=t[2].settlement.status.toUpperCase()+"";function x(t,e){return"denied"===t[2].settlement.status?pt:t[2].settlement.detail?ut:void 0}let C=x(t),j=C&&C(t);return{c(){e=p("aside"),n=p("h3"),o=d(y),l=d(" Settlement\n\t\t\t\t\t\t"),s=p("sup"),u=d(v),g=f(),j&&j.c(),h(s,"class",m=r(t[2].settlement.status)+" svelte-1jb0oof"),h(n,"class","svelte-1jb0oof"),h(e,"class","svelte-1jb0oof")},m(t,r){a(t,e,r),c(e,n),c(n,o),c(n,l),c(n,s),c(s,u),c(e,g),j&&j.m(e,null)},p(t,n){1&n&&y!==(y=(t[2].settlement.type?t[2].settlement.type.toUpperCase():"")+"")&&b(o,y),1&n&&v!==(v=t[2].settlement.status.toUpperCase()+"")&&b(u,v),1&n&&m!==(m=r(t[2].settlement.status)+" svelte-1jb0oof")&&h(s,"class",m),C===(C=x(t))&&j?j.p(t,n):(j&&j.d(1),j=C&&C(t),j&&(j.c(),j.m(e,null)))},d(t){t&&i(e),j&&j.d()}}}function ut(t){let e,n,o,l=JSON.stringify(t[2].settlement.detail,null,2)+"";return{c(){e=p("pre"),n=p("code"),o=d(l),h(n,"class","svelte-1jb0oof"),h(e,"class","svelte-1jb0oof")},m(t,l){a(t,e,l),c(e,n),c(n,o)},p(t,e){1&e&&l!==(l=JSON.stringify(t[2].settlement.detail,null,2)+"")&&b(o,l)},d(t){t&&i(e)}}}function pt(t){let e,n,o,l=t[2].settlement.detail.reason+"";return{c(){e=p("p"),n=p("b"),o=d(l),g(e,"color","red")},m(t,l){a(t,e,l),c(e,n),c(n,o)},p(t,e){1&e&&l!==(l=t[2].settlement.detail.reason+"")&&b(o,l)},d(t){t&&i(e)}}}function dt(t){let e,n,o,l,s=gt(t[2].beneficiary.y)+"";return{c(){e=p("small"),e.textContent="y:",n=f(),o=p("code"),l=d(s)},m(t,s){a(t,e,s),a(t,n,s),a(t,o,s),c(o,l)},p(t,e){1&e&&s!==(s=gt(t[2].beneficiary.y)+"")&&b(l,s)},d(t){t&&i(e),t&&i(n),t&&i(o)}}}function ft(e){let n;return{c(){n=p("code"),n.textContent="N/A"},m(t,e){a(t,n,e)},p:t,d(t){t&&i(n)}}}function mt(t){let e,n,o=gt(t[2].preimage.value)+"";return{c(){e=p("code"),n=d(o)},m(t,o){a(t,e,o),c(e,n)},p(t,e){1&e&&o!==(o=gt(t[2].preimage.value)+"")&&b(n,o)},d(t){t&&i(e)}}}function ht(e){let n;return{c(){n=p("section"),n.innerHTML='<h2 style="color: gray;">Loading...</h2>'},m(t,e){a(t,n,e)},p:t,d(t){t&&i(n)}}}function bt(e){let n,o,l,s,r,u,d,m;function h(t,e){return t[1]?P:I}let b=h(e),g=b(e);return{c(){n=p("header"),n.innerHTML='<nav class="svelte-1jb0oof"><a href="/">OASIS.WATCH</a> \n\n\t\t<ul><li><a href="https://nimiq.com/oasis">About OASIS</a></li></ul></nav>',o=f(),g.c(),l=f(),s=p("footer"),r=p("hr"),u=f(),d=p("p"),m=p("small"),m.textContent=`Generated ${(new Date).toISOString()}`},m(t,e){a(t,n,e),a(t,o,e),g.m(t,e),a(t,l,e),a(t,s,e),c(s,r),c(s,u),c(s,d),c(d,m)},p(t,[e]){b===(b=h(t))&&g?g.p(t,e):(g.d(1),g=b(t),g&&(g.c(),g.m(l.parentNode,l)))},i:t,o:t,d(t){t&&i(n),t&&i(o),g.d(t),t&&i(l),t&&i(s)}}}function gt(t){const e=atob(t.replace(/_/g,"/").replace(/-/g,"+"));let n="";for(let t=0;t<e.length;t++){const o=e.charCodeAt(t).toString(16);n+=2===o.length?o:"0"+o}return n.toUpperCase()}function yt(t,e=4,n=" ",o){let l="";return o&&(l=t.substr(0,o),t=t.substr(o)),t=t.replace(new RegExp(`.{${e}}`,"g"),`$&${n}`),l&&(t=`${l}${n}${t}`),t.substring(t.length-n.length)===n&&(t=t.substr(0,t.length-n.length)),t}function vt(t,e,n){let o=new Promise((t=>{})),l=new URLSearchParams(window.location.search).get("id");return l&&(l=l.replace(/\s/g,"")),l&&(o=fetch(`https://oasis.ten31.com/v1/htlc/${l}`).then((async t=>{const e=await t.json();if(!t.ok)throw new Error(`${e.status} - ${e.title}`);return e}))),[o,l]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),F(this,t,vt,bt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map