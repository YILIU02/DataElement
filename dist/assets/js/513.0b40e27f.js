"use strict";(self["webpackChunkdataelement"]=self["webpackChunkdataelement"]||[]).push([[513],{1570:function(e,a,l){l.d(a,{g:function(){return o}});l(4114);var t=l(5234),n=l(144);const o=(0,t.nY)("allData",(()=>{const e=(0,n.KR)(!0),a=(0,n.KR)(!0),l=(0,n.KR)(!1),t=(0,n.KR)(!1),o=(0,n.KR)(""),u=(0,n.Kh)({china:"",city:""}),r=(0,n.KR)(""),s=(0,n.KR)(["柱状图","折线图"]),d=[e,a,l,t],i=(0,n.KR)([{label:"柱状图",status:e.value},{label:"折线图",status:a.value},{label:"渐变折线图",status:l.value},{label:"横向折线图",status:t.value}]),c=(e,a)=>{i.value[a].status=!e,d[a].value=!e,s.value=[],i.value.forEach((e=>{e.status&&s.value.push(e.label)}))},m=e=>(e=e.replace(/^# (.*?)$/gm,"<h1>$1</h1>"),e=e.replace(/^## (.*?)$/gm,"<h2>$1</h2>"),e=e.replace(/^### (.*?)$/gm,"<h3>$1</h3>"),e=e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/__(.*?)__/g,"<em>$1</em>"),e=e.replace(/^\*(.*?)$/gm,"<li>$1</li>"),e=e.replace(/<li>(.*?)<\/li>/g,"<ul><li>$1</li></ul>"),e=e.replace(/\n/g,"<br>"),e),p=(0,n.KR)(!1),h=(0,n.KR)(""),v=(0,n.KR)(!1),k=()=>{localStorage.setItem("delayedFunction","true"),setTimeout((()=>{"true"===localStorage.getItem("delayedFunction")&&(v.value=!1,localStorage.removeItem("delayedFunction"))}),1e4)};return{result:r,token:o,report:u,Columnar_show:e,lineChart_show:a,Gradient_show:l,horColumnar_show:t,echart:d,types:i,find:p,pathname:h,checkedTypes:s,click:v,delay:k,change:c,markdownToHtml:m}}),{persist:!0})},9513:function(e,a,l){l.r(a),l.d(a,{default:function(){return y}});l(4114);var t=l(6768),n=l(4232),o=l(144),u=l(2851),r=l(7392),s=l(1387),d=l(1570);const i={class:"header"},c={class:"l-content"},m={class:"r-content"};var p={__name:"CommonHeader",setup(e){const a=(0,d.g)(),l=(0,t.EW)((()=>r.A.menuList)),p=(0,t.EW)((()=>l.value.filter((e=>!e.children)))),h=(0,t.EW)((()=>l.value.filter((e=>e.children)))),v=(0,s.rd)(),k=e=>{"find"==e.name|"compare"==e.name?a.find=!0:a.find=!1,a.pathname=e.name,v.push(e.path)},f=()=>{localStorage.removeItem("token"),localStorage.removeItem("allData"),location.reload()};return(e,a)=>{const l=(0,t.g2)("el-dropdown-item"),s=(0,t.g2)("el-dropdown-menu"),d=(0,t.g2)("el-dropdown"),g=(0,t.g2)("el-menu-item"),_=(0,t.g2)("el-menu-item-group"),b=(0,t.g2)("el-sub-menu"),y=(0,t.g2)("el-menu");return(0,t.uX)(),(0,t.CE)("div",i,[(0,t.Lk)("div",c,[(0,t.bF)(d,null,{dropdown:(0,t.k6)((()=>[(0,t.bF)(s,null,{default:(0,t.k6)((()=>[(0,t.bF)(l,{onClick:f},{default:(0,t.k6)((()=>a[1]||(a[1]=[(0,t.eW)("退出登录")]))),_:1})])),_:1})])),default:(0,t.k6)((()=>[a[2]||(a[2]=(0,t.Lk)("img",{src:u,class:"user"},null,-1))])),_:1}),(0,t.Lk)("span",{onClick:a[0]||(a[0]=e=>(0,o.R1)(v).push("/")),style:{cursor:"pointer"}},(0,n.v_)((0,o.R1)(r.A).team_name),1)]),(0,t.Lk)("div",m,[(0,t.bF)(y,{class:"el-menu-demo",mode:"horizontal",ellipsis:!1,"background-color":"#0c3c64","text-color":"aliceblue"},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(p.value,(e=>((0,t.uX)(),(0,t.Wv)(g,{index:e.path,key:e.path,onClick:a=>k(e)},{default:(0,t.k6)((()=>[(0,t.Lk)("span",null,(0,n.v_)(e.label),1)])),_:2},1032,["index","onClick"])))),128)),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(h.value,(e=>((0,t.uX)(),(0,t.Wv)(b,{index:e.path,key:e.path},{title:(0,t.k6)((()=>[((0,t.uX)(),(0,t.Wv)((0,t.$y)(e.icon),{class:"icons"})),(0,t.Lk)("span",null,(0,n.v_)(e.label),1)])),default:(0,t.k6)((()=>[(0,t.bF)(_,null,{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.children,(e=>((0,t.uX)(),(0,t.Wv)(g,{index:e.path,onClick:a=>k(e),key:e.path},{default:(0,t.k6)((()=>[(0,t.Lk)("span",null,(0,n.v_)(e.label),1)])),_:2},1032,["index","onClick"])))),128))])),_:2},1024)])),_:2},1032,["index"])))),128))])),_:1})])])}}},h=l(1241);const v=(0,h.A)(p,[["__scopeId","data-v-5b962172"]]);var k=v;const f={class:"data-flow-background"},g={class:"common-layout"};var _={__name:"myMain",setup(e){const a=(0,o.KR)([]),l=()=>{const e=50,l=["1","0"];for(let t=0;t<e;t++)a.value.push({id:t,data:l[Math.floor(Math.random()*l.length)],top:-100,left:100*Math.random()*window.innerWidth/100,duration:3,delay:5*Math.random()})};return window.addEventListener("resize",(()=>{a.value.forEach((e=>{e.left=100*Math.random()*window.innerWidth/100}))})),(0,t.sV)((()=>{l()})),(e,l)=>{const o=(0,t.g2)("el-header"),u=(0,t.g2)("router-view"),r=(0,t.g2)("el-container");return(0,t.uX)(),(0,t.CE)("div",f,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(a.value,(e=>((0,t.uX)(),(0,t.CE)("div",{key:e.id,class:"data-item",style:(0,n.Tr)({top:e.top+"px",left:e.left+"px",animationDuration:e.duration+"s",animationDelay:e.delay+"s"})},[(0,t.Lk)("span",null,(0,n.v_)(e.data),1)],4)))),128)),(0,t.Lk)("div",g,[(0,t.bF)(r,{class:"lay-container"},{default:(0,t.k6)((()=>[(0,t.bF)(r,null,{default:(0,t.k6)((()=>[(0,t.bF)(o,{class:"el-header"},{default:(0,t.k6)((()=>[(0,t.bF)(k)])),_:1}),(0,t.bF)(u)])),_:1})])),_:1})])])}}};const b=(0,h.A)(_,[["__scopeId","data-v-f406e942"]]);var y=b},2851:function(e,a,l){e.exports=l.p+"assets/img/avater.1efa4916.jpg"}}]);
//# sourceMappingURL=513.0b40e27f.js.map