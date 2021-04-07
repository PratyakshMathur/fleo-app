(this["webpackJsonpfleo-app"]=this["webpackJsonpfleo-app"]||[]).push([[0],{20:function(e,s,t){},22:function(e,s,t){},26:function(e,s,t){},27:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),i=t(9),n=t.n(i),l=(t(20),t(6)),r=t(7),u=t(10),d=t(11),o=t(14),h=t(13),j=(t(21),t(28)),p=t(29),b=t(30),f=t(31),m=t(32),v=(t(22),t(0));var x=function(e){var s=e.details,t=s.flight_number,a=s.mission_name,c=s.launch_year,i=s.launch_success,n=s.links,l=s.rocket,r=n.mission_patch_small,u=l.first_stage.cores[0].land_success;return Object(v.jsx)(f.a,{className:"Rocket-details-card",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:r,alt:"mission patch img not available on api",className:"Rocket-mission-image"})}),Object(v.jsxs)("div",{className:"Rocket-mission-name-flight-number",children:[a," #",t]}),Object(v.jsxs)("div",{className:"Rocket-detail-label",children:["Launch Year:"," ",Object(v.jsx)("span",{className:"Rocket-detail-value",children:c})]}),Object(v.jsxs)("div",{className:"Rocket-detail-label",children:["Successful Launch:"," ",Object(v.jsx)("span",{className:"Rocket-detail-value",children:i?"True":"False"})]}),Object(v.jsxs)("div",{className:"Rocket-detail-label",children:["Successful Landing:"," ",Object(v.jsx)("span",{className:"Rocket-detail-value",children:u?"True":"False"})]})]},t)})},O=t(12),g=t.n(O),A=(t(26),t.p+"static/media/loadRocket.73425c9f.gif"),N="https://api.spacexdata.com/v3/launches?limit=100",k=function(e){Object(o.a)(t,e);var s=Object(h.a)(t);function t(e){var a;return Object(u.a)(this,t),(a=s.call(this,e)).state={items:[],isLoaded:!1,filters:{limit:150,launch_year:void 0,launch_success:void 0,land_success:void 0}},a}return Object(d.a)(t,[{key:"getUpdatedApiUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return N+g.a.stringify(Object(r.a)({},e))}},{key:"fetchAPI",value:function(e){var s=this,t=this.getUpdatedApiUrl(e);this.setState({isLoaded:!1,filters:e}),fetch(t).then((function(e){return e.json()})).then((function(e){s.setState({isLoaded:!0,data:e})}))}},{key:"componentDidMount",value:function(){this.fetchAPI(this.state.filters)}},{key:"updateApiFilters",value:function(e,s){this.state.filters[e]===s&&(s=void 0);var t=Object(r.a)(Object(r.a)({},this.state.filters),{},Object(l.a)({},e,s));this.fetchAPI(t)}},{key:"render",value:function(){var e=this,s=this.state,t=s.isLoaded,a=s.data,c=new Array(16).fill(0).map((function(e,s){return 2006+s}));return t?Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{className:"App-header ",children:"Spacex Programs"}),Object(v.jsxs)(j.a,{fluid:!0,children:[Object(v.jsxs)(p.a,{children:[Object(v.jsx)(b.a,{xs:12,sm:12,md:6,lg:3,children:Object(v.jsx)(f.a,{className:"App-filter-card",children:Object(v.jsxs)(f.a.Body,{children:[Object(v.jsx)(f.a.Title,{className:"App-filter-header",children:"Filter by:"}),Object(v.jsxs)(f.a.Text,{className:"App-filter-heading-launch-year",children:["Launch Year",Object(v.jsx)("hr",{className:"App-filters-hr"})]}),Object(v.jsx)(p.a,{children:Object(v.jsx)("div",{className:"App-filter-button-container",children:c.map((function(s){return Object(v.jsx)(m.a,{className:"App-filter-button",variant:e.state.filters.launch_year===s.toString()?"success":"outline-success",value:s,onClick:function(s){return e.updateApiFilters("launch_year",s.target.value)},children:s})}))})}),Object(v.jsxs)(f.a.Text,{className:"App-filter-heading",children:["Successful Launch",Object(v.jsx)("hr",{className:"App-filters-hr"})]}),Object(v.jsxs)("div",{className:"App-filter-button-container1",children:[Object(v.jsx)(m.a,{className:"App-filter-button",variant:"true"===this.state.filters.launch_success?"success":"outline-success",onClick:function(s){return e.updateApiFilters("launch_success",s.target.value)},value:"true",children:"True"}),Object(v.jsx)(m.a,{className:"App-filter-button",variant:"false"===this.state.filters.launch_success?"success":"outline-success",onClick:function(s){return e.updateApiFilters("launch_success",s.target.value)},value:"false",children:"False"})]}),Object(v.jsxs)(f.a.Text,{className:"App-filter-heading",children:["Successful Landing",Object(v.jsx)("hr",{className:"App-filters-hr"})]}),Object(v.jsxs)("div",{className:"App-filter-button-container1",children:[Object(v.jsx)(m.a,{className:"App-filter-button",variant:"true"===this.state.filters.land_success?"success":"outline-success",onClick:function(s){return e.updateApiFilters("land_success",s.target.value)},value:"true",children:"True"}),Object(v.jsx)(m.a,{className:"App-filter-button",variant:"false"===this.state.filters.land_success?"success":"outline-success",onClick:function(s){return e.updateApiFilters("land_success",s.target.value)},value:"false",children:"False"})]})]})})}),Object(v.jsx)(b.a,{xs:12,sm:12,md:6,lg:9,children:Object(v.jsx)(p.a,{children:a.map((function(e){return Object(v.jsx)(b.a,{md:12,lg:4,children:Object(v.jsx)(x,{details:e})})}))})})]}),Object(v.jsx)("div",{children:Object(v.jsx)("h5",{className:"App-Developers-name",children:"Developed by : Pratyaksh"})})]})]}):Object(v.jsx)("div",{className:"App-loader-container",children:Object(v.jsx)("div",{className:"App-loader-box",children:Object(v.jsx)("img",{src:A,alt:"loading..."})})})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(k,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.f50307bf.chunk.js.map