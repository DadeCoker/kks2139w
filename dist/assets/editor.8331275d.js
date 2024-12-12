import{b as ge,c as ve,d as Fe,e as ye,f as ne,g as Ce,h as he,i as we,j as Ee,k as De,l as be,m as Ae}from"./element-plus.2f7be3b4.js";import{B as A,o as d,c as F,C as ue,H as I,I as Z,a as c,K as D,a5 as R,L as V,S as B,u as s,r as y,a9 as Be,M as x,O as g,Q as m,a2 as M,y as C,ao as z,ap as K,aq as w,ag as xe,w as ee,a1 as $e,T as ae}from"./@vue.430f041f.js";import{s as P,q as b,c as T,r as le,a as oe,w as H,o as ke,H as Se,g as Me,i as Te,b as Oe,e as Ve}from"./index.38edf026.js";import{_ as $}from"./vue-markdown-menu-bar.3f5c015f.js";import{T as ie}from"./vue-codemirror.cdbce272.js";import{F as Le,G as Re}from"./@codemirror.bef71bb9.js";import{g as Pe,a as Ne}from"./config.7341e944.js";import{m as j}from"./markdown-transform-html.09786a4c.js";import{u as Ue,b as Ie}from"./vue-router.b61d3754.js";import"./@vueuse.beeee585.js";import"./@element-plus.6aa0c6b3.js";import"./lodash-es.b61273cf.js";import"./@ctrl.82a509e0.js";import"./jspdf.93f2685e.js";import"./@babel.2898e469.js";import"./fflate.fca59393.js";import"./html2canvas.4d0ab5af.js";import"./codemirror.4711333d.js";import"./@lezer.3d33f011.js";import"./crelt.67277586.js";import"./style-mod.a2e40363.js";import"./w3c-keyname.30cf5eb3.js";const He=[{name:"\u5BFC\u5165/\u5BFC\u51FA",multiple:!0,children:["\u5BFC\u5165MD","\u5BFC\u51FAMD"],icon:"iconfont icon-book nav-icon"},{name:"\u9996\u9875",path:"/home",icon:"iconfont icon-home nav-icon",tooltip:!1},{name:"\u7B80\u5386\u6A21\u677F",path:"/theme",icon:"iconfont icon-template nav-icon",tooltip:!1},{name:"\u5185\u7F6E\u56FE\u6807",icon:"iconfont icon-application nav-icon",tooltip:!0},{name:"\u8BED\u6CD5\u52A9\u624B",path:"/syntax/helper",icon:"iconfont icon-problem nav-icon",tooltip:!1}],je="3737803",qe="markdown-resume",ze="iconfont",Ke="icon-",Ge="",We=[{icon_id:"1176853",name:"card",font_class:"card",unicode:"e6b4",unicode_decimal:59060},{icon_id:"1293134",name:"head",font_class:"head",unicode:"e609",unicode_decimal:58889},{icon_id:"1410620",name:"work",font_class:"work",unicode:"e6fc",unicode_decimal:59132},{icon_id:"3153821",name:"practice",font_class:"practice",unicode:"e60b",unicode_decimal:58891},{icon_id:"7207749",name:"organization",font_class:"organization",unicode:"e60f",unicode_decimal:58895},{icon_id:"7239576",name:"trophy",font_class:"trophy",unicode:"e70d",unicode_decimal:59149},{icon_id:"18125947",name:"book",font_class:"book",unicode:"e862",unicode_decimal:59490},{icon_id:"18592431",name:"city",font_class:"city",unicode:"e687",unicode_decimal:59015},{icon_id:"160001",name:"home",font_class:"home",unicode:"e600",unicode_decimal:58880},{icon_id:"386278",name:"baidu",font_class:"baidu",unicode:"e6b6",unicode_decimal:59062},{icon_id:"4936984",name:"QQ",font_class:"QQ",unicode:"e882",unicode_decimal:59522},{icon_id:"9848172",name:"tencent",font_class:"tencent",unicode:"e620",unicode_decimal:58912},{icon_id:"10506955",name:"wechat",font_class:"wechat",unicode:"e619",unicode_decimal:58905},{icon_id:"10678426",name:"message",font_class:"message",unicode:"e6df",unicode_decimal:59103},{icon_id:"11488144",name:"template",font_class:"template",unicode:"e768",unicode_decimal:59240},{icon_id:"13743903",name:"bytedance",font_class:"bytedance",unicode:"e682",unicode_decimal:59010},{icon_id:"21928403",name:"Exit",font_class:"Exit",unicode:"e60c",unicode_decimal:58892},{icon_id:"22273028",name:"douyin",font_class:"douyin",unicode:"e673",unicode_decimal:58995},{icon_id:"22756072",name:"application",font_class:"application",unicode:"e9f9",unicode_decimal:59897},{icon_id:"29391691",name:"alibaba",font_class:"alibaba",unicode:"e94e",unicode_decimal:59726},{icon_id:"1206932",name:"problem",font_class:"problem",unicode:"e679",unicode_decimal:59001},{icon_id:"1467383",name:"phone",font_class:"phone",unicode:"e69e",unicode_decimal:59038},{icon_id:"4765975",name:"project",font_class:"project",unicode:"e798",unicode_decimal:59288},{icon_id:"4766293",name:"user",font_class:"user",unicode:"e7ae",unicode_decimal:59310},{icon_id:"5821109",name:"technology",font_class:"technology",unicode:"e66b",unicode_decimal:58987},{icon_id:"7206120",name:"profile",font_class:"profile",unicode:"e643",unicode_decimal:58947},{icon_id:"7239590",name:"yuque",font_class:"yuque",unicode:"e713",unicode_decimal:59155},{icon_id:"11488305",name:"product",font_class:"product",unicode:"e788",unicode_decimal:59272},{icon_id:"13743932",name:"gitee",font_class:"gitee",unicode:"e686",unicode_decimal:59014},{icon_id:"18986691",name:"github",font_class:"github",unicode:"e8c6",unicode_decimal:59590},{icon_id:"490590",name:"school",font_class:"school",unicode:"eced",unicode_decimal:60653},{icon_id:"829865",name:"csdn",font_class:"csdn",unicode:"e60a",unicode_decimal:58890},{icon_id:"1444437",name:"email",font_class:"email",unicode:"e712",unicode_decimal:59154}],Qe={id:je,name:qe,font_family:ze,css_prefix_text:Ke,description:Ge,glyphs:We},Ye={id:"toolTip"},Je={class:"render-modal"},Xe=["onClick"],Ze={class:"arrow"},eo=A({__name:"renderModal",props:{toggle:{type:Boolean}},setup(t){const o=e=>{P("\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u7C98\u8D34"),navigator.clipboard.writeText(`icon:${e.name} `)};return(e,u)=>(d(),F("div",Ye,[ue(e.$slots,"default",{},void 0,!0),I(c("div",Je,[(d(!0),F(D,null,R(s(Qe).glyphs,a=>(d(),F("i",{class:V(["iconfont",`icon-${a.name}`]),onClick:l=>o(a)},[c("p",null,B(a.name),1)],10,Xe))),256))],512),[[Z,t.toggle]]),I(c("div",Ze,null,512),[[Z,t.toggle]])]))}});const oo=$(eo,[["__scopeId","data-v-b54a4cec"]]),to={class:"nav"},no={class:"el-dropdown-link"},uo={key:0,for:"import_md"},ao=A({__name:"nav",emits:["export-md","import-md"],setup(t){const o=y(!1);return(e,u)=>{const a=ge,l=ve,i=Fe,r=Be("router-link");return d(),F("ul",to,[(d(!0),F(D,null,R(s(He),n=>(d(),F("li",{class:V({active:e.$route.path===n.path})},[n.children?(d(),x(i,{key:0,class:"el-dropdown"},{dropdown:g(()=>[m(l,null,{default:g(()=>[(d(!0),F(D,null,R(n.children,f=>(d(),x(a,null,{default:g(()=>[f.startsWith("\u5BFC\u5165")?(d(),F("label",uo,[M("\u5BFC\u5165MD "),c("input",{accept:".md",id:"import_md",type:"file",onChange:u[0]||(u[0]=_=>e.$emit("import-md",_))},null,32)])):(d(),F("span",{key:1,onClick:u[1]||(u[1]=_=>e.$emit("export-md"))},B(f),1))]),_:2},1024))),256))]),_:2},1024)]),default:g(()=>[c("div",no,B(n.name),1)]),_:2},1024)):(d(),F(D,{key:1},[n.tooltip?(d(),x(oo,{key:1,toggle:o.value},{default:g(()=>[c("i",{class:V(n.icon)},null,2),c("span",{onClick:u[2]||(u[2]=f=>o.value=!o.value)},B(n.name),1)]),_:2},1032,["toggle"])):(d(),x(r,{key:0,to:n.path||""},{default:g(()=>[c("i",{class:V(n.icon)},null,2),M(B(n.name),1)]),_:2},1032,["to"]))],64))],2))),256))])}}});const lo=$(ao,[["__scopeId","data-v-e6de0695"]]),io=""+new URL("../wechat.jpeg",import.meta.url).href,se=t=>(z("data-v-de944047"),t=t(),K(),t),so=se(()=>c("h2",null,"\u6709\u95EE\u9898\u8BF7\u52A0\u5FAE\u4FE1\u53CD\u9988\uFF0C\u8C22\u8C22\u914D\u5408\uFF01",-1)),ro=se(()=>c("img",{width:"400",src:io,alt:"\u6211\u7684\u5FAE\u4FE1"},null,-1)),co=A({__name:"renderDrawer",props:{flag:{type:Boolean}},setup(t){return(o,e)=>{const u=ye;return d(),x(u,{modelValue:t.flag,"onUpdate:modelValue":e[0]||(e[0]=a=>C(flag)?flag.value=a:null),size:"400","with-header":!1,"close-on-press-escape":""},{default:g(()=>[so,ro]),_:1},8,["modelValue"])}}});const mo=$(co,[["__scopeId","data-v-de944047"]]),po=t=>(z("data-v-068c8fd5"),t=t(),K(),t),_o={id:"header"},fo=po(()=>c("label",{for:"resume-name-input"},"\u7B80\u5386\u540D\u79F0\uFF1A",-1)),go={class:"operator"},vo=A({__name:"header",emits:["download-dynamic","download-native","download-md","import-md"],setup(t,{emit:o}){const e=y(""),u=y(!1);w(()=>e.value=document.title);const a=r=>{document.title=e.value,o(`download-${r}`,e.value)},l=r=>{var n;o("import-md",(n=r==null?void 0:r.target)==null?void 0:n.files[0])},i=function(){window.open("https://github.com/acmenlei/markdown-resume-to-pdf")};return(r,n)=>{const f=ne;return d(),F(D,null,[c("div",_o,[c("button",{class:"back",onClick:n[0]||(n[0]=_=>r.$router.back())},"\u8FD4\u56DE\u4E0A\u4E00\u9875"),fo,I(c("input",{id:"resume-name-input",type:"text","onUpdate:modelValue":n[1]||(n[1]=_=>e.value=_)},null,512),[[xe,e.value]]),m(lo,{onExportMd:n[2]||(n[2]=_=>a("md")),onImportMd:l}),c("div",go,[m(f,{content:"\u7ED9\u9879\u76EE\u8D21\u732E\u4EE3\u7801",placement:"bottom-end"},{default:g(()=>[c("i",{class:"iconfont icon-github github",onClick:i})]),_:1}),m(f,{content:"\u95EE\u9898\u53CD\u9988",placement:"bottom-end"},{default:g(()=>[c("i",{class:"iconfont icon-problem problem",onClick:n[3]||(n[3]=()=>u.value=!u.value)})]),_:1}),c("button",{class:"exportor",onClick:n[4]||(n[4]=_=>a("dynamic"))},"\u52A8\u6001\u5BFC\u51FAPDF"),c("button",{class:"exportor",onClick:n[5]||(n[5]=_=>a("native"))},"\u6253\u5370\u673A\u5BFC\u51FAPDF")])]),m(mo,{flag:u.value},null,8,["flag"])],64)}}});const Fo=$(vo,[["__scopeId","data-v-068c8fd5"]]),yo={class:"dialog-footer"},Co=A({__name:"renderDialog",props:{flag:{type:Boolean},title:{default:"\u6E29\u99A8\u63D0\u793A"},confirmText:null,resetText:null},emits:["cancel","confirm"],setup(t){return(o,e)=>{const u=Ce,a=he;return d(),x(a,{modelValue:t.flag,"onUpdate:modelValue":e[2]||(e[2]=l=>C(flag)?flag.value=l:null),title:t.title,width:"30%","align-center":""},{footer:g(()=>[c("span",yo,[m(u,{type:"primary",onClick:e[0]||(e[0]=l=>o.$emit("confirm"))},{default:g(()=>[M(B(t.confirmText),1)]),_:1}),m(u,{type:"primary",onClick:e[1]||(e[1]=l=>o.$emit("cancel"))},{default:g(()=>[M(B(t.resetText),1)]),_:1})])]),default:g(()=>[ue(o.$slots,"default")]),_:3},8,["modelValue","title"])}}}),ho={0:"0%",10:"10%",20:"20%",30:"30%",40:"40%",50:"50%",60:"60%",70:"70%",80:"80%",90:"90%",100:"100%"};function re(t,o,e=1e3*60*60*3){const u={value:o,expires:Date.now()+e};return localStorage.setItem(t,JSON.stringify(u)),!0}function G(t){let o=Date.now(),e=localStorage.getItem(t);if(!e)return!1;let u=JSON.parse(e);return u.expires<o?(localStorage.removeItem(t),!1):u.value}function wo(t){return G(t)?(localStorage.removeItem(t),!0):!1}const h=G,O=re,Eo="custom-css-style",Do="custom-markdown-primary-color",bo="custom_markdown_primary_bg_color",Ao="markdown-font",Bo="auto-one-page",L=1123,S=y(80);function xo(t){S.value=t}function $o(t){function o(e){let u=e.target.files[0],a=URL.createObjectURL(u);t("upload-avatar",a)}return{setAvatar:o}}function ko(t){let o=y(!1),e=Eo+"-"+t,u=y(h(e)?h(e):"");function a(){o.value=!o.value}function l(){var _;o.value=!1;let r=u.value.trim(),n=b(e),f=n;!u.value||(n||(n=T(),n.setAttribute(e,"true")),n.textContent=r,!f&&((_=document.head)==null||_.appendChild(n)),O(e,r))}function i(){o.value=!1,le(e),wo(e),u.value=""}return w(()=>!b(e)&&setTimeout(l,50)),{cssDialog:o,cssText:u,toggleDialog:a,setStyle:l,removeStyle:i}}function So(t){const o=bo+"-"+t,e=Pe(t),u=y(h(o)?h(o):e);function a(l){l||(u.value=e,l=e);let i=b(o),r=i;i||(i=T(),i.setAttribute(o,"true")),i.textContent=`:root { --markdown-primary-bg-color: ${l}; }`,!r&&document.head.appendChild(i),O(o,l)}return w(()=>!b(o)&&a(u.value)),{primaryColor:u,setPrimaryColor:a}}function Mo(t){const o=Do+"-"+t,e=Ne(t),u=y(h(o)?h(o):e);function a(l){l||(u.value=e,l=e);let i=b(o),r=i;i||(i=T(),i.setAttribute(o,"true")),i.textContent=`:root { --markdown-primary-color: ${l} }`,!r&&document.head.appendChild(i),O(o,l)}return w(()=>!b(o)&&a(u.value)),{color:u,setColor:a}}function To(t){const o=Ao+"-"+t,e=[{value:"\u65B9\u6B63GDC\u4F53",label:"\u65B9\u6B63GDC\u4F53"},{value:"Helvetica Neue",label:"Helvetica Neue"},{value:"Menlo-Regular",label:"Menlo-Regular"},{value:"\u4ED3\u8033\u6E14\u9633\u4F53 W02",label:"\u4ED3\u8033\u6E14\u9633\u4F53 W02"}],u=y(h(o)?h(o):"Helvetica Neue");function a(l){let i=b(o),r=i;i||(i=T(),i.setAttribute(o,"true")),i.textContent=`.jufe { font-family: ${l}; }`,!r&&document.head.appendChild(i),O(o,l)}return w(()=>a(u.value)),{fontOptions:e,font:u,setFont:a}}function q(t){let o=0,e=0,u=t.clientHeight,a=document.querySelector(".re-render");for(a.innerHTML="";u-e>1;){const l=oe(),i=t.cloneNode(!0);l.classList.add("jufe-wrapper-page");let r=Math.min(u-e,L);const n=oe();n.classList.add("jufe-wrapper-page-item"),n.style.height=r+"px",i.style.position="absolute",i.style.top=-o*L+"px",i.style.left=0+"px",n.appendChild(i),l.appendChild(n),e+=L,o++,a==null||a.appendChild(l)}}function Oo(t){const o=Bo+"-"+t,e=y(h(o));async function u(){const a=document.querySelector(".markdown-transform-html");if(e.value){const l=L-(a==null?void 0:a.clientHeight);if(l<0&&l<-200){H("\u4F60\u7684\u5185\u5BB9\u6709\u70B9\u592A\u591A\u5566\uFF01\u538B\u7F29\u6210\u4E00\u9875\u7684\u8BDD\u4E0D\u592A\u7F8E\u89C2\u54E6\uFF5E");return}if(l>0&&l>500){H("\u4F60\u7684\u5185\u5BB9\u6709\u70B9\u592A\u5C11\u4E86\uFF01\u538B\u7F29\u6210\u4E00\u9875\u7684\u8BDD\u4E0D\u592A\u7F8E\u89C2\u54E6\uFF0C\u518D\u586B\u5199\u4E00\u70B9\u5185\u5BB9\u5427\uFF5E");return}const{differenceConfig:i,map:r}=Vo(a);Lo(i,l,r,o)}else le(o);O(o,e.value),q(a)}return w(()=>!b(o)&&setTimeout(u,50)),{autoOnePage:e,setAutoOnePage:u}}function Vo(t){const o=Array.from(t.querySelectorAll("h1,h2,h3,h4,h5,h6,li,p")),e=[],u=new Set,a=new Map;for(let l of o){const i=l.tagName.toLowerCase();if(a.set(i,(a.get(i)||0)+1),u.has(i))continue;u.add(i);const r=+getComputedStyle(l,null).marginTop.slice(0,-2),n={...ke[i],top:r,tag:i};let f=n.top/n.max;n.optimal=f,e.push(n)}return{differenceConfig:e,map:a}}function Lo(t,o,e,u){const a=new Se((n,f)=>o<0?n.optimal>f.optimal:n.optimal<f.optimal);for(let n of t)a.push(n);if(o<0)for(;o++<20;){let n=a.pop();n.top=n.top-1/(e.get(n.tag)||1),n.optimal=n.top/n.max,a.push(n)}else for(;o-- >20;){let n=a.pop();n.top=n.top+1/(e.get(n.tag)||1),n.optimal=n.top/n.max,a.push(n)}const l=T(),i=".jufe ";let r="";l.setAttribute(u,"true");for(let n of a.container)r+=`${i}${n.tag} { margin-top: ${n.top}px; }`;l.textContent=r,document.head.appendChild(l)}const W=t=>(z("data-v-6f7c4650"),t=t(),K(),t),Ro={class:"operator"},Po={class:"operator-level2"},No=W(()=>c("label",{for:"upload-avatar",class:"btn upload_avatar operator-item"},"\u4E0A\u4F20\u8BC1\u4EF6\u7167",-1)),Uo=W(()=>c("label",{for:"primary-color"},"\u5B57\u4F53\u989C\u8272",-1)),Io=W(()=>c("label",{for:"primary-color"},"\u4E3B\u8272\u8C03",-1)),Ho=A({__name:"tabbar",props:{resumeProps:null},emits:["upload-avatar"],setup(t,{emit:o}){const e=t,{autoOnePage:u,setAutoOnePage:a}=Oo(e.resumeProps.resumeType),{cssDialog:l,cssText:i,toggleDialog:r,setStyle:n,removeStyle:f}=ko(e.resumeProps.resumeType),{color:_,setColor:N}=Mo(e.resumeProps.resumeType),{fontOptions:Q,font:E,setFont:k}=To(e.resumeProps.resumeType),{setAvatar:Y}=$o(o),{primaryColor:U,setPrimaryColor:ce}=So(e.resumeProps.resumeType),de=[Le];return(ut,v)=>{const me=we,J=ne,X=Ee,pe=De,_e=be,fe=Ae;return d(),F(D,null,[c("div",Ro,[m(me,{size:"small",class:"slider",marks:s(ho),modelValue:s(S),"onUpdate:modelValue":v[0]||(v[0]=p=>C(S)?S.value=p:null),onChange:s(xo),step:10,"show-stops":""},null,8,["marks","modelValue","onChange"]),c("div",Po,[m(J,{content:"\u4E0A\u4F20\u524D\u8BF7\u786E\u4FDD\u4F60\u60F3\u4E0A\u4F20\u7684\u4F4D\u7F6E\u5728\u7F16\u8F91\u5668\u4E2D\u5B58\u5728 ![\u4E2A\u4EBA\u5934\u50CF](...) \u6B64\u5173\u952E\u5B57"},{default:g(()=>[No]),_:1}),c("input",{type:"file",id:"upload-avatar",accept:".png,.jpg,.jpeg",onChange:v[1]||(v[1]=(...p)=>s(Y)&&s(Y)(...p))},null,32),c("button",{class:"btn custom_css operator-item",onClick:v[2]||(v[2]=(...p)=>s(r)&&s(r)(...p))},"DIY\u7B80\u5386"),Uo,m(X,{id:"primary-color",class:"operator-item",onChange:s(N),size:"small",modelValue:s(_),"onUpdate:modelValue":v[3]||(v[3]=p=>C(_)?_.value=p:null)},null,8,["onChange","modelValue"]),M(" \xA0\xA0 "),Io,m(X,{id:"primary-bg-color",class:"operator-item",onChange:s(ce),size:"small",modelValue:s(U),"onUpdate:modelValue":v[4]||(v[4]=p=>C(U)?U.value=p:null)},null,8,["onChange","modelValue"]),m(J,{content:"\u81EA\u52A8\u4E00\u9875",placement:"bottom"},{default:g(()=>[m(pe,{class:"operator-item",size:"small",onChange:s(a),modelValue:s(u),"onUpdate:modelValue":v[5]||(v[5]=p=>C(u)?u.value=p:null)},null,8,["onChange","modelValue"])]),_:1}),m(fe,{modelValue:s(E),"onUpdate:modelValue":v[6]||(v[6]=p=>C(E)?E.value=p:null),class:"operator-item",onChange:s(k),placement:"bottom",size:"small"},{default:g(()=>[(d(!0),F(D,null,R(s(Q),p=>(d(),x(_e,{key:p.value,label:p.label,value:p.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])])]),m(Co,{"confirm-text":"\u8BBE\u7F6E\u6837\u5F0F","reset-text":"\u91CD\u7F6E\u6837\u5F0F",title:"\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u7F16\u5199CSS\u6837\u5F0F\uFF0C\u8BA9\u5B83\u4F5C\u7528\u5728\u7B80\u5386\u4E0A\uFF01",flag:s(l),onConfirm:s(n),onCancel:s(f)},{default:g(()=>[m(s(ie),{modelValue:s(i),"onUpdate:modelValue":v[7]||(v[7]=p=>C(i)?i.value=p:null),autofocus:!0,style:{height:"500px"},"indent-with-tab":!0,extensions:de,placeholder:"\u683C\u5F0F\u5982.jufe h2 { color: red; }"},null,8,["modelValue"])]),_:1},8,["flag","onConfirm","onCancel"])],64)}}});const jo=$(Ho,[["__scopeId","data-v-6f7c4650"]]),qo="markdown-content",te=G;function zo(t){const o=y(document.body);return w(()=>{Te(t.resumeType),o.value.innerHTML=j(t.content),setTimeout(()=>q(o.value),100)}),ee(()=>t.content,e=>{o.value.innerHTML=j(e),setTimeout(()=>q(o.value),50)}),ee(()=>t.resumeType,()=>{location.reload()}),{renderDOM:o}}function Ko(t){const o=qo+"-"+t.value;let e=y(te(o)?te(o):Me(t.value));function u(a){!a||(e.value=a,re(o,e.value))}return{content:e,setContent:u}}function Go(){const t=Ue(),o=y(t.query.type?String(t.query.type):"front_end");return w(()=>{o.value=t.query.type?String(t.query.type):"front_end"}),{resumeType:o}}function Wo(t,o){const e=Ie();return{downloadMD:()=>{const i=new Blob([o.value]),r=URL.createObjectURL(i),n=document.createElement("a");n.download=document.title+".md",n.href=r,n.click(),URL.revokeObjectURL(r),P("\u5BFC\u51FA\u6210\u529F~")},downloadDynamic:i=>{Oe(i,document.querySelector(".jufe"))},downloadNative:()=>{localStorage.setItem("download",JSON.stringify(j(o.value))),e.push({path:"/download",query:{type:t.value}})}}}function Qo(t){function o(e){const u=new FileReader;u.readAsText(e,"utf-8"),u.onload=function(a){var l;P("\u5BFC\u5165\u6210\u529F~"),t(((l=a.target)==null?void 0:l.result)||"")},u.onerror=function(){Ve("\u5BFC\u5165\u5931\u8D25!")}}return{importMD:o}}function Yo(){let t=y(700),o=!1;function e(l){!o||(t.value=l.clientX)}function u(){o=!0}function a(){o=!1}return w(()=>{window.addEventListener("mouseup",a),window.addEventListener("mousemove",e)}),$e(()=>{window.removeEventListener("mouseup",a),window.removeEventListener("mousemove",e)}),{left:t,move:e,down:u}}function Jo(t,o){const e=/!\[个人头像\]\(.*\)/;function u(a){if(!e.test(t.value)){H("\u4E0A\u4F20\u524D\u8BF7\u786E\u4FDD\u4F60\u60F3\u4E0A\u4F20\u7684\u4F4D\u7F6E\u5728\u7F16\u8F91\u5668\u4E2D\u5B58\u5728 ![\u4E2A\u4EBA\u5934\u50CF](...) \u6B64\u5173\u952E\u5B57");return}const l=t.value.replace(e,`![\u4E2A\u4EBA\u5934\u50CF](${a})`);o(l),P("\u5934\u50CF\u4E0A\u4F20\u6210\u529F\uFF0C\u5982\u679C\u4F60\u60F3\u4FEE\u6539\u4E3A\u7F51\u7EDC\u56FE\u7247\uFF0C\u4F60\u53EF\u76F4\u63A5\u4FEE\u6539\u5BF9\u5E94\u7684\u94FE\u63A5\uFF01")}return{setAvatar:u}}const Xo={class:"outer"},Zo=A({__name:"render",props:{content:null,resumeType:null},emits:["upload-avatar"],setup(t){const o=t,{renderDOM:e}=zo(o);return(u,a)=>(d(),F("div",Xo,[m(jo,{resumeProps:o,onUploadAvatar:a[0]||(a[0]=l=>u.$emit("upload-avatar",l))},null,8,["resumeProps"]),c("div",{ref_key:"renderDOM",ref:e,class:"markdown-transform-html jufe"},null,512),c("div",{class:"re-render",style:ae({transform:`scale(${s(S)/100})`})},null,4)]))}});const et=$(Zo,[["__scopeId","data-v-03fcd7ad"]]),ot={id:"root"},tt={class:"markdown-edit"},nt=A({__name:"editor",setup(t){const{resumeType:o}=Go(),{content:e,setContent:u}=Ko(o),{downloadDynamic:a,downloadNative:l,downloadMD:i}=Wo(o,e),{importMD:r}=Qo(u),{setAvatar:n}=Jo(e,u),{left:f,down:_}=Yo(),N=[Re];return(Q,E)=>(d(),F(D,null,[m(Fo,{onDownloadDynamic:s(a),onDownloadNative:s(l),onDownloadMd:s(i),onImportMd:s(r)},null,8,["onDownloadDynamic","onDownloadNative","onDownloadMd","onImportMd"]),c("div",ot,[c("div",tt,[m(s(ie),{modelValue:s(e),"onUpdate:modelValue":E[0]||(E[0]=k=>C(e)?e.value=k:null),style:ae({height:"100vh",width:`${s(f)}px`}),autofocus:!0,"indent-with-tab":!0,extensions:N,onChange:s(u)},null,8,["modelValue","style","onChange"]),c("div",{class:"move absolute",onMousedown:E[1]||(E[1]=(...k)=>s(_)&&s(_)(...k))},null,32)]),m(et,{class:"markdown-render",resumeType:s(o),content:s(e),onUploadAvatar:s(n)},null,8,["resumeType","content","onUploadAvatar"])])],64))}});const Bt=$(nt,[["__scopeId","data-v-23f57cf2"]]);export{Bt as default};
