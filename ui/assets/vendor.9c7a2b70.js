function E(){}function v(t){return t()}function j(){return Object.create(null)}function d(t){t.forEach(v)}function N(t){return typeof t=="function"}function K(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function O(t){return Object.keys(t).length===0}function L(t,n){t.appendChild(n)}function Q(t,n,e){t.insertBefore(n,e||null)}function M(t){t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function U(){return T(" ")}function V(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function z(t){return Array.from(t.childNodes)}function W(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let f;function a(t){f=t}function B(){if(!f)throw new Error("Function called outside component initialization");return f}function X(t){B().$$.on_mount.push(t)}const l=[],A=[],h=[],S=[],F=Promise.resolve();let g=!1;function P(){g||(g=!0,F.then(C))}function $(t){h.push(t)}const b=new Set;let _=0;function C(){const t=f;do{for(;_<l.length;){const n=l[_];_++,a(n),q(n.$$)}for(a(null),l.length=0,_=0;A.length;)A.pop()();for(let n=0;n<h.length;n+=1){const e=h[n];b.has(e)||(b.add(e),e())}h.length=0}while(l.length);for(;S.length;)S.pop()();g=!1,b.clear(),a(t)}function q(t){if(t.fragment!==null){t.update(),d(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach($)}}const D=new Set;function G(t,n){t&&t.i&&(D.delete(t),t.i(n))}function H(t,n,e,r){const{fragment:c,on_mount:m,on_destroy:s,after_update:p}=t.$$;c&&c.m(n,e),r||$(()=>{const i=m.map(v).filter(N);s?s.push(...i):d(i),t.$$.on_mount=[]}),p.forEach($)}function I(t,n){const e=t.$$;e.fragment!==null&&(d(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function J(t,n){t.$$.dirty[0]===-1&&(l.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Y(t,n,e,r,c,m,s,p=[-1]){const i=f;a(t);const o=t.$$={fragment:null,ctx:null,props:m,update:E,not_equal:c,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:j(),dirty:p,skip_bound:!1,root:n.target||i.$$.root};s&&s(o.root);let y=!1;if(o.ctx=e?e(t,n.props||{},(u,x,...k)=>{const w=k.length?k[0]:x;return o.ctx&&c(o.ctx[u],o.ctx[u]=w)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](w),y&&J(t,u)),x}):[],o.update(),y=!0,d(o.before_update),o.fragment=r?r(o.ctx):!1,n.target){if(n.hydrate){const u=z(n.target);o.fragment&&o.fragment.l(u),u.forEach(M)}else o.fragment&&o.fragment.c();n.intro&&G(t.$$.fragment),H(t,n.target,n.anchor,n.customElement),C()}a(i)}class Z{$destroy(){I(this,1),this.$destroy=E}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!O(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Z as S,U as a,V as b,Q as c,L as d,R as e,W as f,M as g,Y as i,E as n,X as o,K as s,T as t};
