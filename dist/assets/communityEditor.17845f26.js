import{h as b,i as C}from"./element-plus.ee89351e.js";import{K as D,r as I,h,av as k,a5 as x,E as M,o as E,c as _,a as l,_ as S,al as T,u as i,P as A,R as w,F as H,a7 as L,S as V,at as $,au as q}from"./@vue.2fd64882.js";import{u as z,g as N,T as O,w as R,e as U,s as K,c as j,p as P,_ as G}from"./index.f566ca83.js";import{u as J,b as Q}from"./vue-router.ab991b3b.js";import{u as W,p as X,b as Y}from"./community.0762bd88.js";import{c as Z}from"./@textbus.3f548f0c.js";import{e as tt}from"./@vueuse.c6387afd.js";import"./lodash-es.32a32d0b.js";import"./async-validator.fb49d0f5.js";import"./@element-plus.f8f1d436.js";import"./dayjs.f53c2448.js";import"./aos.e37f4dc9.js";import"./@popperjs.36402333.js";import"./@ctrl.b082b0c1.js";import"./jspdf.0b42b4d1.js";import"./@babel.e46629ed.js";import"./fflate.fca59393.js";import"./pinia.ea4e5e56.js";import"./picture-verification-code.e81ffd11.js";import"./axios.05d3747b.js";import"./nprogress.8e3ae131.js";import"./reflect-metadata.e8f3e0d5.js";import"./@tanbo.8b148e0a.js";import"./immer.8df5addb.js";import"./prismjs.531aa5ad.js";import"./classnames.4fb4381a.js";function et(){const e=D({professional:"",title:""}),a=I(),c=J(),n=Q(),s=h(()=>n.query.articleId);let t,r;async function p(){var y;const{loginState:u,loginModelToggle:v,userInfo:B}=z();if(!u.logined||!N(O)){v();return}if(!e.professional||!e.title.trim()||t.getHTML()=="<br>"){R("\u5185\u5BB9\u586B\u5199\u5B8C\u6574\u624D\u80FD\u8BA9\u5176\u4ED6\u540C\u5B66\u770B\u660E\u767D\uFF5E");return}if(e.title.length>20){U("\u6807\u9898\u8FC7\u957F \u8BF7\u7F29\u51CF\u523020\u5B57\u4EE5\u5185\uFF5E");return}const m=document.createElement("div");m.innerHTML=t.getHTML();const g={...e,content:t.getHTML(),introduce:((y=m.textContent)==null?void 0:y.slice(0,255))||"\u7B80\u4ECB",authorId:B.uid};m.remove();let d=0;if(s.value!=null){const f=Object.assign(g,{articleId:r.articleId}),{code:F}=await W(f);d=F}else{const{code:f}=await X(g);d=f}d==200&&(c.back(),K("\u53D1\u5E03\u6210\u529F\uFF01"))}async function o(){s.value!=null&&(r=(await Y({articleId:parseInt(s.value)})).data,e.title=r.title,e.professional=r.professional,t.replaceContent(r.content))}return k(()=>{t=Z({autoFocus:!0,zenCoding:!0,theme:"dark",autoHeight:!0,minHeight:"400px",uploader:j,styleSheets:[".tb-list-item { margin-left: 20px } .tb-pre { margin: 10px 0;}"],placeholder:"\u5185\u5BB9\u5C3D\u60C5\u53D1\u6325\uFF5E"}),setTimeout(()=>{const u=document.querySelector(".textbus-ui-top");u.style.position="sticky",u.style.top="60px",u.style.zIndex="99"}),t.mount(a.value),o()}),x(()=>{e.professional="",e.title="",t==null||t.destroy()}),{article:e,publishArticle:tt(p,1e3),articleEditor:a}}const ot=e=>($("data-v-ad460444"),e=e(),q(),e),ut={class:"article-editor content-card","data-aos":"zoom-out"},at=ot(()=>l("br",null,null,-1)),rt=M({__name:"communityEditor",setup(e){const{article:a,articleEditor:c,publishArticle:n}=et();return(s,t)=>{const r=b,p=C;return E(),_("div",ut,[l("span",{class:"pointer back",onClick:t[0]||(t[0]=o=>s.$router.back())},"\u8FD4\u56DE"),S(l("input",{class:"title",type:"text","onUpdate:modelValue":t[1]||(t[1]=o=>i(a).title=o),placeholder:"\u8BF7\u586B\u5199\u4E8C\u5341\u5B57\u4EE5\u5185\u7684\u6807\u9898~",maxlength:"20"},null,512),[[T,i(a).title]]),l("div",{class:"editor",ref_key:"articleEditor",ref:c},null,512),A(p,{placeholder:"\u5C97\u4F4D\u65B9\u5411",class:"item",modelValue:i(a).professional,"onUpdate:modelValue":t[2]||(t[2]=o=>i(a).professional=o)},{default:w(()=>[(E(!0),_(H,null,L(i(P),(o,u)=>(E(),V(r,{key:u,value:o,label:o},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),at,l("button",{class:"item primary btn",onClick:t[3]||(t[3]=(...o)=>i(n)&&i(n)(...o))},"\u53D1\u5E03"),l("button",{class:"item plain btn",onClick:t[4]||(t[4]=o=>s.$router.back())},"\u8FD4\u56DE")])}}});const At=G(rt,[["__scopeId","data-v-ad460444"]]);export{At as default};
