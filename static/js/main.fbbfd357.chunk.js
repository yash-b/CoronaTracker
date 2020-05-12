(this.webpackJsonpcoronatracker=this.webpackJsonpcoronatracker||[]).push([[0],{12:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq",card_icon:"Cards_card_icon__16s5l"}},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),u=a(7),s=a.n(u),l=a(11),i=a(34),d=a(35),m=a(38),p=a(40),f=a(39),v=a(53),h=a(41),b=a.n(h),E="https://covid19.mathdro.id/api",g=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E,t&&(a="".concat(E,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=a(83),x=a.n(C),k=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(n.useState)({}),d=Object(f.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=a?r.a.createElement(v.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(164, 204, 52, 1)","rgba(135, 0, 0, 1)","rgba(0, 0, 0, 1)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Country selected: ".concat(u)}}}):null,b=m[0]?r.a.createElement(v.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgba(164, 204, 52, 1)",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"black",backgroundColor:"rgba(0, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:x.a.container},u?h:b)},j=a(239),w=a(238),O=a(84),S=a.n(O),N=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(f.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,_();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(j.a,{className:S.a.formControl},r.a.createElement(w.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},D=a(234),I=a(240),T=a(235),V=a(236),B=a(42),L=a.n(B),U=a(8),A=a.n(U),P=a(12),z=a.n(P),G=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:z.a.container},r.a.createElement(D.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(D.a,{item:!0,xs:12,md:3,component:I.a,className:A()(z.a.card,z.a.infected)},r.a.createElement(T.a,null,r.a.createElement(V.a,{color:"textSecondary",gutterBottom:!0},"Infected",r.a.createElement("img",{className:z.a.card_icon,src:"/CoronaTracker/images/icon_1.png",alt:"infected"})),r.a.createElement(V.a,{variant:"h5",component:"h2"},r.a.createElement(L.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(V.a,{variant:"body2",component:"p"},"Total active cases of the CoronaVirus."),r.a.createElement("br",null),r.a.createElement(V.a,{color:"textSecondary"},"Last updated:",r.a.createElement("br",null),new Date(o).toString()))),r.a.createElement(D.a,{item:!0,xs:12,md:3,component:I.a,className:A()(z.a.card,z.a.recovered)},r.a.createElement(T.a,null,r.a.createElement(V.a,{color:"textSecondary",gutterBottom:!0},"Recovered",r.a.createElement("img",{className:z.a.card_icon,src:"/CoronaTracker/images/icon_2.png",alt:"recovered"})),r.a.createElement(V.a,{variant:"h5",component:"h2"},r.a.createElement(L.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(V.a,{variant:"body2",component:"p"},"Total recoveries from the CoronaVirus."),r.a.createElement("br",null),r.a.createElement(V.a,{color:"textSecondary"},"Last updated:",r.a.createElement("br",null),new Date(o).toString()))),r.a.createElement(D.a,{item:!0,xs:12,md:3,component:I.a,className:A()(z.a.card,z.a.deaths)},r.a.createElement(T.a,null,r.a.createElement(V.a,{color:"textSecondary",gutterBottom:!0},"Deaths",r.a.createElement("img",{className:z.a.card_icon,src:"/CoronaTracker/images/icon_3.png",alt:"infected"})),r.a.createElement(V.a,{variant:"h5",component:"h2"},r.a.createElement(L.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(V.a,{variant:"body2",component:"p"},"Total deaths caused by the CoronaVirus."),r.a.createElement("br",null),r.a.createElement(V.a,{color:"textSecondary"},"Last updated:",r.a.createElement("br",null),new Date(o).toString()))))):"Loading..."},J=a(237),M=(n.Component,a(55)),Q=a.n(M),R=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:Q.a.container},r.a.createElement("img",{className:Q.a.image,src:"/CoronaTracker/images/logo.png",alt:"COVID-19"}),r.a.createElement(N,{handleCountryChange:this.handleCountryChange}),r.a.createElement(G,{data:t}),r.a.createElement(k,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(R,null),document.getElementById("root"))},55:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},83:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},84:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},95:function(e,t,a){e.exports=a(215)}},[[95,1,2]]]);
//# sourceMappingURL=main.fbbfd357.chunk.js.map