(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4597)}])},4597:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var r=a(5893),n=a(7294),s=a(381),i=a.n(s),l=a(44);let o=[{name:"Domain",selector:e=>e.domain,sortable:!0},{name:"Traffic Share",selector:e=>e.traffic_share,sortable:!0,cell:e=>(100*e.traffic_share).toFixed(2)+"%"},{name:"Position",selector:e=>e.position,sortable:!0},{name:"Destination URL",selector:e=>e.destination_url,sortable:!0,cell:e=>(0,r.jsx)("a",{href:e.destination_url,children:e.destination_url})},{name:"Website Categories",selector:e=>e.website_categories,sortable:!0}],c=e=>{let{data:t}=e;return(0,r.jsx)(l.ZP,{id:"my-table",title:"",columns:o,data:t,pagination:!0,highlightOnHover:!0})},u=e=>{let{id:t,min:a,max:s,value:i,onChange:l}=e;return(0,n.useEffect)(()=>{let e=document.getElementById(t);a&&e.setAttribute("min",a),s&&e.setAttribute("max",s)},[t,a,s]),(0,r.jsx)("input",{type:"month",id:t,value:i||"",onChange:l})};function d(){let[e,t]=(0,n.useState)([]),[a,s]=(0,n.useState)(null),[l,o]=(0,n.useState)(null),[d,f]=(0,n.useState)(""),[m,b]=(0,n.useState)(""),[h,x]=(0,n.useState)("");(0,n.useEffect)(()=>{let e=i()(),t=e.clone().subtract(12,"months").format("YYYY-MM"),a=e.format("YYYY-MM");f(t),b(a),s(null),o(null)},[]);let j=async()=>{if(""===h){alert("錯誤！請輸入查詢關鍵字！");return}if(!a||!l){alert("錯誤！請輸入開始或結束的月份");return}let e="https://api.similarweb.com/v4/keywords/keyword/analysis/organic-competitors?api_key=".concat("81aa3fc0ace24fdcbf5ebcf73f79a8ff","&keyword=").concat(h,"&start_date=").concat(a,"&end_date=").concat(l,"&country=tw&metrics=traffic,organic-vs-paid,volume,cpc&format=json&limit=30&sort=traffic_share");try{let a=await fetch(e),r=await a.json();t(r.traffic_breakdown)}catch(e){console.error(e)}};return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{children:["Similarweb",(0,r.jsx)("br",{}),"關鍵字各網站流量查詢"]}),(0,r.jsxs)("p",{className:"comment",children:["#選擇年、月。",(0,r.jsx)("br",{}),"#可選區間為本月至12個月之前。",(0,r.jsx)("br",{}),"#數量上限30，按照Traffic Share排序。"]}),(0,r.jsx)("label",{children:"輸入關鍵字："}),(0,r.jsx)("input",{id:"query",value:h,onChange:e=>x(e.target.value)}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("label",{htmlFor:"start-date",children:"開始日期："}),(0,r.jsx)(u,{id:"start-date",min:d,max:m,value:a,onChange:e=>s(e.target.value)}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("label",{htmlFor:"end-date",children:"結束日期："}),(0,r.jsx)(u,{id:"end-date",min:d,max:m,value:l,onChange:e=>o(e.target.value)}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{onClick:j,children:"查詢"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(c,{data:e})]})}}},function(e){e.O(0,[885,44,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);