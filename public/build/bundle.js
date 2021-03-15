var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function l(){return Object.create(null)}function r(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e){return null==e?"":e}const a="undefined"!=typeof window;let c=a?()=>window.performance.now():()=>Date.now(),u=a?e=>requestAnimationFrame(e):e;const f=new Set;function d(e){f.forEach((t=>{t.c(e)||(f.delete(t),t.f())})),0!==f.size&&u(d)}function h(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function b(){return $(" ")}function k(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function w(e,t,n,l){e.style.setProperty(t,n,l?"important":"")}function x(e,t,n){e.classList[n?"add":"remove"](t)}class T{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=v(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)m(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(p)}}const _=new Set;let q,j=0;function L(e,t,n,l,r,s,i,o=0){const a=16.666/l;let c="{\n";for(let e=0;e<=1;e+=a){const l=t+(n-t)*s(e);c+=100*e+`%{${i(l,1-l)}}\n`}const u=c+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${o}`,d=e.ownerDocument;_.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(v("style")).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[f]||(m[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const p=e.style.animation||"";return e.style.animation=`${p?`${p}, `:""}${f} ${l}ms linear ${r}ms 1 both`,j+=1,f}function R(e,t){const n=(e.style.animation||"").split(", "),l=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-l.length;r&&(e.style.animation=l.join(", "),j-=r,j||u((()=>{j||(_.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),_.clear())})))}function O(e){q=e}function H(e){(function(){if(!q)throw new Error("Function called outside component initialization");return q})().$$.on_mount.push(e)}const D=[],M=[],B=[],E=[],I=Promise.resolve();let A=!1;function C(e){B.push(e)}let U=!1;const S=new Set;function N(){if(!U){U=!0;do{for(let e=0;e<D.length;e+=1){const t=D[e];O(t),P(t.$$)}for(O(null),D.length=0;M.length;)M.pop()();for(let e=0;e<B.length;e+=1){const t=B[e];S.has(t)||(S.add(t),t())}B.length=0}while(D.length);for(;E.length;)E.pop()();A=!1,U=!1,S.clear()}}function P(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}let z;function F(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const V=new Set;let G;function J(){G={r:0,c:[],p:G}}function K(){G.r||r(G.c),G=G.p}function Q(e,t){e&&e.i&&(V.delete(e),e.i(t))}function W(e,t,n,l){if(e&&e.o){if(V.has(e))return;V.add(e),G.c.push((()=>{V.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}}const X={duration:0};function Y(n,l,i,o){let a=l(n,i),h=o?0:1,m=null,p=null,g=null;function v(){g&&R(n,g)}function $(e,t){const n=e.b-h;return t*=Math.abs(n),{a:h,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function b(l){const{delay:s=0,duration:i=300,easing:o=t,tick:b=e,css:k}=a||X,y={start:c()+s,b:l};l||(y.group=G,G.r+=1),m||p?p=y:(k&&(v(),g=L(n,h,l,i,s,o,k)),l&&b(0,1),m=$(y,i),C((()=>F(n,l,"start"))),function(e){let t;0===f.size&&u(d),new Promise((n=>{f.add(t={c:e,f:n})}))}((e=>{if(p&&e>p.start&&(m=$(p,i),p=null,F(n,m.b,"start"),k&&(v(),g=L(n,h,m.b,m.duration,0,o,a.css))),m)if(e>=m.end)b(h=m.b,1-h),F(n,m.b,"end"),p||(m.b?v():--m.group.r||r(m.group.c)),m=null;else if(e>=m.start){const t=e-m.start;h=m.a+m.d*o(t/m.duration),b(h,1-h)}return!(!m&&!p)})))}return{run(e){s(a)?(z||(z=Promise.resolve(),z.then((()=>{z=null}))),z).then((()=>{a=a(),b(e)})):b(e)},end(){v(),m=p=null}}}function Z(e){e&&e.c()}function ee(e,t,l){const{fragment:i,on_mount:o,on_destroy:a,after_update:c}=e.$$;i&&i.m(t,l),C((()=>{const t=o.map(n).filter(s);a?a.push(...t):r(t),e.$$.on_mount=[]})),c.forEach(C)}function te(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){-1===e.$$.dirty[0]&&(D.push(e),A||(A=!0,I.then(N)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(t,n,s,i,o,a,c=[-1]){const u=q;O(t);const f=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:o,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:l(),dirty:c,skip_bound:!1};let d=!1;if(f.ctx=s?s(t,n.props||{},((e,n,...l)=>{const r=l.length?l[0]:n;return f.ctx&&o(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),d&&ne(t,e)),n})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach(p)}else f.fragment&&f.fragment.c();n.intro&&Q(t.$$.fragment),ee(t,n.target,n.anchor),N()}O(u)}class re{$destroy(){te(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function se(t){let n,l,r,s,i,o,a,c,u,f,d,g,w,x;return{c(){n=v("div"),l=v("div"),r=v("div"),s=$(t[0]),i=v("br"),o=b(),a=v("span"),c=$(t[1]),u=v("br"),f=b(),d=v("small"),g=$("Ranked "),w=$(t[2]),x=$(" in the Midwest"),k(a,"class","updating-num svelte-y6xm7i"),k(d,"class","svelte-y6xm7i"),k(r,"class","svelte-y6xm7i"),k(l,"class","numbers svelte-y6xm7i"),k(n,"class","stats svelte-y6xm7i")},m(e,t){m(e,n,t),h(n,l),h(l,r),h(r,s),h(r,i),h(r,o),h(r,a),h(a,c),h(r,u),h(r,f),h(r,d),h(d,g),h(d,w),h(d,x)},p(e,[t]){1&t&&y(s,e[0]),2&t&&y(c,e[1]),4&t&&y(w,e[2])},i:e,o:e,d(e){e&&p(n)}}}function ie(e,t,n){let{stat:l}=t,{number:r}=t,{rank:s}=t;return e.$$set=e=>{"stat"in e&&n(0,l=e.stat),"number"in e&&n(1,r=e.number),"rank"in e&&n(2,s=e.rank)},[l,r,s]}class oe extends re{constructor(e){super(),le(this,e,ie,se,i,{stat:0,number:1,rank:2})}}function ae(t){let n,l,r,s,i,a,c,u,f,d,g,w;return{c(){n=v("div"),l=v("div"),s=v("span"),i=$(t[0]),c=v("br"),u=b(),f=v("div"),d=v("span"),g=$(t[1]),r=new T(s),k(s,"class",a=o(t[3])+" svelte-1tip63s"),k(d,"class","timestamp svelte-1tip63s"),w=new T(null),k(f,"class","phase-group svelte-1tip63s"),k(l,"class","phase svelte-1tip63s"),k(n,"class","phases svelte-1tip63s")},m(e,o){m(e,n,o),h(n,l),r.m(t[4],l),h(l,s),h(s,i),h(l,c),h(l,u),h(l,f),h(f,d),h(d,g),w.m(t[2],f)},p(e,[t]){16&t&&r.p(e[4]),1&t&&y(i,e[0]),8&t&&a!==(a=o(e[3])+" svelte-1tip63s")&&k(s,"class",a),2&t&&y(g,e[1]),4&t&&w.p(e[2])},i:e,o:e,d(e){e&&p(n)}}}function ce(e,t,n){let{phase:l}=t,{rolloutDate:r}=t,{phaseRequirements:s}=t,{status:i}=t,{checkmark:o}=t;return e.$$set=e=>{"phase"in e&&n(0,l=e.phase),"rolloutDate"in e&&n(1,r=e.rolloutDate),"phaseRequirements"in e&&n(2,s=e.phaseRequirements),"status"in e&&n(3,i=e.status),"checkmark"in e&&n(4,o=e.checkmark)},[l,r,s,i,o]}class ue extends re{constructor(e){super(),le(this,e,ce,ae,i,{phase:0,rolloutDate:1,phaseRequirements:2,status:3,checkmark:4})}}function fe(e,{delay:n=0,duration:l=400,easing:r=t}={}){const s=+getComputedStyle(e).opacity;return{delay:n,duration:l,easing:r,css:e=>"opacity: "+e*s}}function de(e){let t,n,l,r,s,i=""!==e[3]&&he(e);return{c(){t=v("div"),l=b(),i&&i.c(),n=new T(l),k(t,"class","voter-answer svelte-2pjlm0")},m(r,o){m(r,t,o),n.m(e[1],t),h(t,l),i&&i.m(t,null),s=!0},p(e,l){(!s||2&l)&&n.p(e[1]),""!==e[3]?i?i.p(e,l):(i=he(e),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},i(e){s||(C((()=>{r||(r=Y(t,fe,{},!0)),r.run(1)})),s=!0)},o(e){r||(r=Y(t,fe,{},!1)),r.run(0),s=!1},d(e){e&&p(t),i&&i.d(),e&&r&&r.end()}}}function he(e){let t,n,l,r,s,i,o,a,c,u,f,d,g,w;return{c(){t=v("ul"),n=v("h4"),n.innerHTML="<u>Related</u>",l=b(),r=v("li"),s=v("a"),i=$(e[2]),o=b(),a=v("li"),c=v("a"),u=$(e[4]),f=b(),d=v("li"),g=v("a"),w=$(e[6]),k(s,"href",e[3]),k(s,"class","svelte-2pjlm0"),k(r,"class","svelte-2pjlm0"),k(c,"href",e[5]),k(c,"class","svelte-2pjlm0"),k(a,"class","svelte-2pjlm0"),k(g,"href",e[7]),k(g,"class","svelte-2pjlm0"),k(d,"class","svelte-2pjlm0"),k(t,"class","related-links svelte-2pjlm0")},m(e,p){m(e,t,p),h(t,n),h(t,l),h(t,r),h(r,s),h(s,i),h(t,o),h(t,a),h(a,c),h(c,u),h(t,f),h(t,d),h(d,g),h(g,w)},p(e,t){4&t&&y(i,e[2]),8&t&&k(s,"href",e[3]),16&t&&y(u,e[4]),32&t&&k(c,"href",e[5]),64&t&&y(w,e[6]),128&t&&k(g,"href",e[7])},d(e){e&&p(t)}}}function me(e){let t,n,l,r,s,i,o,a,c=e[8]&&de(e);return{c(){t=v("div"),n=v("div"),l=v("div"),r=v("h4"),s=b(),c&&c.c(),k(r,"class","voter-question svelte-2pjlm0"),x(r,"active",e[8]),k(l,"class","qa"),k(n,"class","question-box svelte-2pjlm0"),k(t,"class","questions")},m(u,f){var d,p,g,v;m(u,t,f),h(t,n),h(n,l),h(l,r),r.innerHTML=e[0],h(l,s),c&&c.m(l,null),i=!0,o||(d=r,p="click",g=e[9],d.addEventListener(p,g,v),a=()=>d.removeEventListener(p,g,v),o=!0)},p(e,[t]){(!i||1&t)&&(r.innerHTML=e[0]),256&t&&x(r,"active",e[8]),e[8]?c?(c.p(e,t),256&t&&Q(c,1)):(c=de(e),c.c(),Q(c,1),c.m(l,null)):c&&(J(),W(c,1,1,(()=>{c=null})),K())},i(e){i||(Q(c),i=!0)},o(e){W(c),i=!1},d(e){e&&p(t),c&&c.d(),o=!1,a()}}}function pe(e,t,n){let{question:l}=t,{answer:r}=t,{linkOne:s}=t,{urlOne:i}=t,{linkTwo:o}=t,{urlTwo:a}=t,{linkThree:c}=t,{urlThree:u}=t,f=!1;return e.$$set=e=>{"question"in e&&n(0,l=e.question),"answer"in e&&n(1,r=e.answer),"linkOne"in e&&n(2,s=e.linkOne),"urlOne"in e&&n(3,i=e.urlOne),"linkTwo"in e&&n(4,o=e.linkTwo),"urlTwo"in e&&n(5,a=e.urlTwo),"linkThree"in e&&n(6,c=e.linkThree),"urlThree"in e&&n(7,u=e.urlThree)},[l,r,s,i,o,a,c,u,f,function(){n(8,f=!f)}]}class ge extends re{constructor(e){super(),le(this,e,pe,me,i,{question:0,answer:1,linkOne:2,urlOne:3,linkTwo:4,urlTwo:5,linkThree:6,urlThree:7})}}function ve(e,t,n){const l=e.slice();return l[6]=t[n],l[8]=n,l}function $e(e){let t,n;return t=new ge({props:{question:e[6].question,answer:e[6].answer,linkOne:e[6].linkOne,urlOne:e[6].urlOne,linkTwo:e[6].linkTwo,urlTwo:e[6].urlTwo,linkThree:e[6].linkThree,urlThree:e[6].urlThree}}),{c(){Z(t.$$.fragment)},m(e,l){ee(t,e,l),n=!0},p(e,n){const l={};32&n&&(l.question=e[6].question),32&n&&(l.answer=e[6].answer),32&n&&(l.linkOne=e[6].linkOne),32&n&&(l.urlOne=e[6].urlOne),32&n&&(l.linkTwo=e[6].linkTwo),32&n&&(l.urlTwo=e[6].urlTwo),32&n&&(l.linkThree=e[6].linkThree),32&n&&(l.urlThree=e[6].urlThree),t.$set(l)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){W(t.$$.fragment,e),n=!1},d(e){te(t,e)}}}function be(e){let t,n,l,r,s,i,o,a,c,u,f,d,w,x,T,_,q,j=e[5],L=[];for(let t=0;t<j.length;t+=1)L[t]=$e(ve(e,j,t));const R=e=>W(L[e],1,1,(()=>{L[e]=null}));return{c(){t=v("div"),n=v("div"),l=b(),r=v("div"),s=v("h4"),i=$(e[0]),o=b(),a=v("div"),c=b(),u=v("br"),f=b(),d=v("div"),w=v("a"),x=$(e[3]),T=b(),_=v("div");for(let e=0;e<L.length;e+=1)L[e].c();k(n,"class","anchor-position svelte-issmar"),k(n,"id",e[1]),k(s,"class","svelte-issmar"),k(w,"href",e[4]),k(r,"class","category-context svelte-issmar"),k(_,"class","category-group svelte-issmar"),k(t,"class","category svelte-issmar")},m(p,g){m(p,t,g),h(t,n),h(t,l),h(t,r),h(r,s),h(s,i),h(r,o),h(r,a),a.innerHTML=e[2],h(r,c),h(r,u),h(r,f),h(r,d),h(d,w),h(w,x),h(t,T),h(t,_);for(let e=0;e<L.length;e+=1)L[e].m(_,null);q=!0},p(e,[t]){if((!q||2&t)&&k(n,"id",e[1]),(!q||1&t)&&y(i,e[0]),(!q||4&t)&&(a.innerHTML=e[2]),(!q||8&t)&&y(x,e[3]),(!q||16&t)&&k(w,"href",e[4]),32&t){let n;for(j=e[5],n=0;n<j.length;n+=1){const l=ve(e,j,n);L[n]?(L[n].p(l,t),Q(L[n],1)):(L[n]=$e(l),L[n].c(),Q(L[n],1),L[n].m(_,null))}for(J(),n=j.length;n<L.length;n+=1)R(n);K()}},i(e){if(!q){for(let e=0;e<j.length;e+=1)Q(L[e]);q=!0}},o(e){L=L.filter(Boolean);for(let e=0;e<L.length;e+=1)W(L[e]);q=!1},d(e){e&&p(t),g(L,e)}}}function ke(e,t,n){let{category:l}=t,{ID:r}=t,{info:s}=t,{link:i}=t,{url:o}=t,{questions:a}=t;return e.$$set=e=>{"category"in e&&n(0,l=e.category),"ID"in e&&n(1,r=e.ID),"info"in e&&n(2,s=e.info),"link"in e&&n(3,i=e.link),"url"in e&&n(4,o=e.url),"questions"in e&&n(5,a=e.questions)},[l,r,s,i,o,a]}class ye extends re{constructor(e){super(),le(this,e,ke,be,i,{category:0,ID:1,info:2,link:3,url:4,questions:5})}}function we(t){let n,l,r,s,i,o;return{c(){n=v("div"),l=v("div"),r=v("strong"),s=b(),i=v("div"),o=v("p"),k(l,"class","credit-label svelte-rodqgm"),k(o,"class","text svelte-rodqgm"),k(i,"class","credit-info svelte-rodqgm"),k(n,"class","credit-box svelte-rodqgm")},m(e,a){m(e,n,a),h(n,l),h(l,r),r.innerHTML=t[0],h(n,s),h(n,i),h(i,o),o.innerHTML=t[1]},p(e,[t]){1&t&&(r.innerHTML=e[0]),2&t&&(o.innerHTML=e[1])},i:e,o:e,d(e){e&&p(n)}}}function xe(e,t,n){let{label:l}=t,{text:r}=t;return e.$$set=e=>{"label"in e&&n(0,l=e.label),"text"in e&&n(1,r=e.text)},[l,r]}class Te extends re{constructor(e){super(),le(this,e,xe,we,i,{label:0,text:1})}}function _e(e){let t,n;return{c(){t=v("span"),n=$(e[0]),k(t,"class","related--kicker svelte-jcxuy0"),w(t,"margin","0")},m(e,l){m(e,t,l),h(t,n)},p(e,t){1&t&&y(n,e[0])},d(e){e&&p(t)}}}function qe(e){let t;return{c(){t=v("span"),k(t,"class","related--story-image svelte-jcxuy0"),w(t,"background-image","url('"+e[3]+"')")},m(e,n){m(e,t,n)},p(e,n){8&n&&w(t,"background-image","url('"+e[3]+"')")},d(e){e&&p(t)}}}function je(e){let t,n;return{c(){t=v("div"),n=$(e[2]),k(t,"class","related--story-text svelte-jcxuy0")},m(e,l){m(e,t,l),h(t,n)},p(e,t){4&t&&y(n,e[2])},d(e){e&&p(t)}}}function Le(t){let n,l,r,s,i,o,a,c=""!==t[0]&&_e(t),u=""!==t[3]&&qe(t),f=""!==t[2]&&je(t);return{c(){n=v("div"),c&&c.c(),l=b(),r=v("a"),s=v("span"),i=$(t[1]),o=b(),u&&u.c(),a=b(),f&&f.c(),k(s,"class","related--story-hed svelte-jcxuy0"),k(r,"href",t[4]),k(r,"class","svelte-jcxuy0"),k(n,"class","related--story-card svelte-jcxuy0")},m(e,t){m(e,n,t),c&&c.m(n,null),h(n,l),h(n,r),h(r,s),h(s,i),h(r,o),u&&u.m(r,null),h(r,a),f&&f.m(r,null)},p(e,[t]){""!==e[0]?c?c.p(e,t):(c=_e(e),c.c(),c.m(n,l)):c&&(c.d(1),c=null),2&t&&y(i,e[1]),""!==e[3]?u?u.p(e,t):(u=qe(e),u.c(),u.m(r,a)):u&&(u.d(1),u=null),""!==e[2]?f?f.p(e,t):(f=je(e),f.c(),f.m(r,null)):f&&(f.d(1),f=null),16&t&&k(r,"href",e[4])},i:e,o:e,d(e){e&&p(n),c&&c.d(),u&&u.d(),f&&f.d()}}}function Re(e,t,n){let{label:l}=t,{relatedHeadline:r}=t,{relatedBrief:s}=t,{relatedImage:i}=t,{relatedURL:o}=t;return e.$$set=e=>{"label"in e&&n(0,l=e.label),"relatedHeadline"in e&&n(1,r=e.relatedHeadline),"relatedBrief"in e&&n(2,s=e.relatedBrief),"relatedImage"in e&&n(3,i=e.relatedImage),"relatedURL"in e&&n(4,o=e.relatedURL)},[l,r,s,i,o]}class Oe extends re{constructor(e){super(),le(this,e,Re,Le,i,{label:0,relatedHeadline:1,relatedBrief:2,relatedImage:3,relatedURL:4})}}function He(e,t,n){const l=e.slice();return l[4]=t[n],l}function De(e,t,n){const l=e.slice();return l[7]=t[n],l}function Me(e,t,n){const l=e.slice();return l[10]=t[n],l[12]=n,l}function Be(e,t,n){const l=e.slice();return l[13]=t[n],l[12]=n,l}function Ee(e,t,n){const l=e.slice();return l[15]=t[n],l[12]=n,l}function Ie(e){let t,n;return t=new oe({props:{stat:e[15].stat,number:e[15].number,rank:e[15].rank}}),{c(){Z(t.$$.fragment)},m(e,l){ee(t,e,l),n=!0},p(e,n){const l={};4&n&&(l.stat=e[15].stat),4&n&&(l.number=e[15].number),4&n&&(l.rank=e[15].rank),t.$set(l)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){W(t.$$.fragment,e),n=!1},d(e){te(t,e)}}}function Ae(e){let t,n;return t=new ue({props:{phase:e[13].phase,rolloutDate:e[13].rolloutDate,phaseRequirements:e[13].phaseRequirements,status:e[13].status,checkmark:e[13].checkmark}}),{c(){Z(t.$$.fragment)},m(e,l){ee(t,e,l),n=!0},p(e,n){const l={};2&n&&(l.phase=e[13].phase),2&n&&(l.rolloutDate=e[13].rolloutDate),2&n&&(l.phaseRequirements=e[13].phaseRequirements),2&n&&(l.status=e[13].status),2&n&&(l.checkmark=e[13].checkmark),t.$set(l)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){W(t.$$.fragment,e),n=!1},d(e){te(t,e)}}}function Ce(e){let t,n;return t=new ye({props:{category:e[10].category,ID:e[10].ID,info:e[10].info,link:e[10].link,url:e[10].url,questions:e[10].questions}}),{c(){Z(t.$$.fragment)},m(e,l){ee(t,e,l),n=!0},p(e,n){const l={};1&n&&(l.category=e[10].category),1&n&&(l.ID=e[10].ID),1&n&&(l.info=e[10].info),1&n&&(l.link=e[10].link),1&n&&(l.url=e[10].url),1&n&&(l.questions=e[10].questions),t.$set(l)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){W(t.$$.fragment,e),n=!1},d(e){te(t,e)}}}function Ue(e){let t,n;return t=new Te({props:{label:e[7].label,text:e[7].text}}),{c(){Z(t.$$.fragment)},m(e,l){ee(t,e,l),n=!0},p(e,n){const l={};8&n&&(l.label=e[7].label),8&n&&(l.text=e[7].text),t.$set(l)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){W(t.$$.fragment,e),n=!1},d(e){te(t,e)}}}function Se(e){let t,n;return t=new Oe({props:{label:e[4].label,relatedHeadline:e[4].relatedHeadline,relatedBrief:e[4].relatedBrief,relatedImage:e[4].relatedImage,relatedURL:e[4].relatedURL}}),{c(){Z(t.$$.fragment)},m(e,l){ee(t,e,l),n=!0},p(e,n){const l={};16&n&&(l.label=e[4].label),16&n&&(l.relatedHeadline=e[4].relatedHeadline),16&n&&(l.relatedBrief=e[4].relatedBrief),16&n&&(l.relatedImage=e[4].relatedImage),16&n&&(l.relatedURL=e[4].relatedURL),t.$set(l)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){W(t.$$.fragment,e),n=!1},d(e){te(t,e)}}}function Ne(e){let t,n,l,r,s,i,o,a,c,u,f,d,$,y,w,x,T,_,q,j=e[2],L=[];for(let t=0;t<j.length;t+=1)L[t]=Ie(Ee(e,j,t));const R=e=>W(L[e],1,1,(()=>{L[e]=null}));let O=e[1],H=[];for(let t=0;t<O.length;t+=1)H[t]=Ae(Be(e,O,t));const D=e=>W(H[e],1,1,(()=>{H[e]=null}));let M=e[0],B=[];for(let t=0;t<M.length;t+=1)B[t]=Ce(Me(e,M,t));const E=e=>W(B[e],1,1,(()=>{B[e]=null}));let I=e[3],A=[];for(let t=0;t<I.length;t+=1)A[t]=Ue(De(e,I,t));const C=e=>W(A[e],1,1,(()=>{A[e]=null}));let U=e[4],S=[];for(let t=0;t<U.length;t+=1)S[t]=Se(He(e,U,t));const N=e=>W(S[e],1,1,(()=>{S[e]=null}));return{c(){t=v("div"),n=v("div");for(let e=0;e<L.length;e+=1)L[e].c();l=b(),r=v("div"),r.innerHTML='<a href="https://projects.jsonline.com/topics/coronavirus/tracking/covid-19-cases-testing-and-deaths-in-wisconsin.html" class="svelte-p205gv">See more coronavirus and vaccine data →</a>',s=b(),i=v("div");for(let e=0;e<H.length;e+=1)H[e].c();o=b(),a=v("div"),a.innerHTML='<p class="how-to">Answers below are based on questions submitted from readers and information gleaned from previous reporting.</p> \n\t\t<div class="topic-buttons"><ul><li><h4 class="topics">Topics:</h4></li> \n\t\t\t\t<li><div><a href="#eligibility">Eligibility</a></div></li> \n\t\t\t\t<li><div><a href="#availability">Availability</a></div></li> \n\t\t\t\t<li><div><a href="#basics">Vaccine basics</a></div></li></ul></div> \n\t\t<div class="form-cta"><span><a href="https://forms.gle/MkFLvnAduL58rj3B9"><i class="fas fa-question-circle"></i> Ask us a question about vaccine distribution</a></span></div>',c=b();for(let e=0;e<B.length;e+=1)B[e].c();u=b(),f=v("div"),d=v("div"),$=v("h3"),$.textContent="Credits",y=b();for(let e=0;e<A.length;e+=1)A[e].c();w=b(),x=v("div"),T=v("h3"),T.textContent="More coronavirus coverage",_=b();for(let e=0;e<S.length;e+=1)S[e].c();k(n,"class","doses"),k(r,"class","more-data svelte-p205gv"),k(a,"class","topic-menu"),k($,"class","label-block"),k($,"id","credits"),k(d,"class","credits"),k(T,"class","label-block"),k(x,"class","related"),k(f,"class","extra-container"),k(t,"class","flex-container")},m(e,p){m(e,t,p),h(t,n);for(let e=0;e<L.length;e+=1)L[e].m(n,null);h(t,l),h(t,r),h(t,s),h(t,i);for(let e=0;e<H.length;e+=1)H[e].m(i,null);h(t,o),h(t,a),h(t,c);for(let e=0;e<B.length;e+=1)B[e].m(t,null);h(t,u),h(t,f),h(f,d),h(d,$),h(d,y);for(let e=0;e<A.length;e+=1)A[e].m(d,null);h(f,w),h(f,x),h(x,T),h(x,_);for(let e=0;e<S.length;e+=1)S[e].m(x,null);q=!0},p(e,[l]){if(4&l){let t;for(j=e[2],t=0;t<j.length;t+=1){const r=Ee(e,j,t);L[t]?(L[t].p(r,l),Q(L[t],1)):(L[t]=Ie(r),L[t].c(),Q(L[t],1),L[t].m(n,null))}for(J(),t=j.length;t<L.length;t+=1)R(t);K()}if(2&l){let t;for(O=e[1],t=0;t<O.length;t+=1){const n=Be(e,O,t);H[t]?(H[t].p(n,l),Q(H[t],1)):(H[t]=Ae(n),H[t].c(),Q(H[t],1),H[t].m(i,null))}for(J(),t=O.length;t<H.length;t+=1)D(t);K()}if(1&l){let n;for(M=e[0],n=0;n<M.length;n+=1){const r=Me(e,M,n);B[n]?(B[n].p(r,l),Q(B[n],1)):(B[n]=Ce(r),B[n].c(),Q(B[n],1),B[n].m(t,u))}for(J(),n=M.length;n<B.length;n+=1)E(n);K()}if(8&l){let t;for(I=e[3],t=0;t<I.length;t+=1){const n=De(e,I,t);A[t]?(A[t].p(n,l),Q(A[t],1)):(A[t]=Ue(n),A[t].c(),Q(A[t],1),A[t].m(d,null))}for(J(),t=I.length;t<A.length;t+=1)C(t);K()}if(16&l){let t;for(U=e[4],t=0;t<U.length;t+=1){const n=He(e,U,t);S[t]?(S[t].p(n,l),Q(S[t],1)):(S[t]=Se(n),S[t].c(),Q(S[t],1),S[t].m(x,null))}for(J(),t=U.length;t<S.length;t+=1)N(t);K()}},i(e){if(!q){for(let e=0;e<j.length;e+=1)Q(L[e]);for(let e=0;e<O.length;e+=1)Q(H[e]);for(let e=0;e<M.length;e+=1)Q(B[e]);for(let e=0;e<I.length;e+=1)Q(A[e]);for(let e=0;e<U.length;e+=1)Q(S[e]);q=!0}},o(e){L=L.filter(Boolean);for(let e=0;e<L.length;e+=1)W(L[e]);H=H.filter(Boolean);for(let e=0;e<H.length;e+=1)W(H[e]);B=B.filter(Boolean);for(let e=0;e<B.length;e+=1)W(B[e]);A=A.filter(Boolean);for(let e=0;e<A.length;e+=1)W(A[e]);S=S.filter(Boolean);for(let e=0;e<S.length;e+=1)W(S[e]);q=!1},d(e){e&&p(t),g(L,e),g(H,e),g(B,e),g(A,e),g(S,e)}}}function Pe(e,t,n){let l=[],r=[],s=[],i=[],o=[];return H((async()=>{const e=await fetch("data.json"),t=await e.json();n(1,r=t.phases),n(2,s=t.doses),n(0,l=t.categories),n(3,o=t.credits),n(4,i=t.related)})),[l,r,s,o,i]}return new class extends re{constructor(e){super(),le(this,e,Pe,Ne,i,{})}}({target:document.querySelector("#content")})}();
//# sourceMappingURL=bundle.js.map
