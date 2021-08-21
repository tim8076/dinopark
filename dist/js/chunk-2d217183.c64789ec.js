(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217183"],{c4ea:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),r={class:"info__page bg-color"},o=Object(a["createVNode"])("div",{class:"outter-spinner"},[Object(a["createVNode"])("div",{class:"inner-spinner"},[Object(a["createVNode"])("div")])],-1),s={class:"container py-5 mh-100vh"},i=Object(a["createVNode"])("div",{class:"info__title"},[Object(a["createVNode"])("h2",{class:"fs-2"},"遊園資訊"),Object(a["createVNode"])("div",{class:"info__title__line"})],-1),n={class:"info__type py-3 mb-6"},l={class:"items"},b={class:"item"},d=Object(a["createTextVNode"])(" 票價資訊 "),p={class:"item"},f=Object(a["createTextVNode"])(" 營業時間 "),h={class:"item"},j=Object(a["createTextVNode"])(" 交通方式 "),O={class:"info__time"},u=Object(a["createStaticVNode"])('<table class="table table-bordered mb-6"><thead class="bg-primary text-white"><tr><th scope="col">區域</th><th scope="col">週一至週五 <br class="br">(平日) </th><th scope="col">週六及週日 <br class="br">(假日) </th></tr></thead><tbody><tr><th scope="row" class="table__row">肉食恐龍區</th><td>09:00 <br class="br">至 <br class="br"> 16:30 </td><td>09:00 <br class="br">至 <br class="br"> 17:30 </td></tr><tr><th scope="row" class="table__row">草食恐龍區</th><td>09:00 <br class="br">至 <br class="br"> 16:30 </td><td>09:00 <br class="br">至 <br class="br"> 17:30 </td></tr><tr><th scope="row" class="table__row">鳥園</th><td>09:00 <br class="br">至 <br class="br">16:00 </td><td>09:00 <br class="br">至 <br class="br"> 17:00 </td></tr></tbody></table>',1),_={class:"info__ticket"},w=Object(a["createStaticVNode"])('<table class="table table-bordered mb-6"><thead class="bg-primary text-white"><tr><th scope="col">票種</th><th scope="col">票價</th><th scope="col">說明</th></tr></thead><tbody><tr><th scope="row" class="table__row">全票</th><td>NT$ 990</td><td>18歲以上成人</td></tr><tr><th scope="row" class="table__row">學生票</th><td>NT$ 699</td><td>國中(含)以上學生 <br class="br"> 憑學生證購買 </td></tr><tr><th scope="row" class="table__row">軍警票</th><td>NT$ 699</td><td>軍警人士 <br class="br"> 憑工作證購買 </td></tr><tr><th scope="row" class="table__row">幼童票</th><td>NT$ 350</td><td>6歲或 <br class="br"> 120公分以下幼童 </td></tr></tbody></table>',1),m={class:"info_traffic"},y=Object(a["createStaticVNode"])('<table class="table table-bordered mb-6"><thead class="bg-primary text-white"><tr><th scope="col">交通方式</th><th scope="col">說明</th></tr></thead><tbody><tr><th scope="row" class="table__row">直升機</th><td>戴樂恐龍公園位於哥斯大黎加南方的海島， <br class="br"> 前往遊園前，請先向交通組預約遊園接駁直升機 </td></tr><tr><th scope="row" class="table__row">接駁船</th><td>戴樂恐龍公園位於哥斯大黎加南方的海島， <br class="br"> 前往遊園前，請先向交通組預約遊園接駁交通船 </td></tr></tbody></table>',1);function N(t,e,c,N,k,v){var V=Object(a["resolveComponent"])("Loading"),T=Object(a["resolveComponent"])("Breadcrumb"),x=Object(a["resolveComponent"])("router-link"),g=Object(a["resolveComponent"])("Panel");return Object(a["openBlock"])(),Object(a["createBlock"])("div",r,[Object(a["createVNode"])(V,{active:k.isLoading,"onUpdate:active":e[1]||(e[1]=function(t){return k.isLoading=t})},{default:Object(a["withCtx"])((function(){return[o]})),_:1},8,["active"]),Object(a["createVNode"])("div",s,[Object(a["createVNode"])(T,{breadcrumb:{link2:{title:"園區資訊",link:"/dino-park/info/ticket"},link3:{show:!1}}}),i,Object(a["createVNode"])("div",n,[Object(a["createVNode"])("ul",l,[Object(a["createVNode"])("li",b,[Object(a["createVNode"])(x,{to:"/dino-park/info/ticket",class:["btn rounded-pill",{"btn-outline-primary":"ticket"!==k.infoType,"btn-primary":"ticket"===k.infoType}]},{default:Object(a["withCtx"])((function(){return[d]})),_:1},8,["class"])]),Object(a["createVNode"])("li",p,[Object(a["createVNode"])(x,{to:"/dino-park/info/time",class:["btn rounded-pill",{"btn-outline-primary":"time"!==k.infoType,"btn-primary":"time"===k.infoType}]},{default:Object(a["withCtx"])((function(){return[f]})),_:1},8,["class"])]),Object(a["createVNode"])("li",h,[Object(a["createVNode"])(x,{to:"/dino-park/info/traffic",class:["btn rounded-pill",{"btn-outline-primary":"traffic"!==k.infoType,"btn-primary":"traffic"===k.infoType}]},{default:Object(a["withCtx"])((function(){return[j]})),_:1},8,["class"])])])]),Object(a["withDirectives"])(Object(a["createVNode"])("div",O,[u,Object(a["createVNode"])(g,{"panel-info":k.panelTime},null,8,["panel-info"])],512),[[a["vShow"],"time"===k.infoType]]),Object(a["withDirectives"])(Object(a["createVNode"])("div",_,[w,Object(a["createVNode"])(g,{"panel-info":k.panelTicket},null,8,["panel-info"])],512),[[a["vShow"],"ticket"===k.infoType]]),Object(a["withDirectives"])(Object(a["createVNode"])("div",m,[y,Object(a["createVNode"])(g,{"panel-info":k.panelTraffic},null,8,["panel-info"])],512),[[a["vShow"],"traffic"===k.infoType]])])])}var k={class:"panel__header"},v=Object(a["createVNode"])("span",null,"注意事項",-1),V={key:0,class:"material-icons"},T={key:1,class:"material-icons"},x={class:"panel__body"},g={class:"list"};function B(t,e,c,r,o,s){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:["panel",{"w-80":o.info.w_80}]},[Object(a["createVNode"])("div",k,[v,Object(a["createVNode"])("button",{type:"button",class:"btn","data-bs-toggle":"collapse","data-bs-target":"#".concat(o.info.id),onClick:e[1]||(e[1]=function(t){return o.is_expanded=!o.is_expanded})},[o.is_expanded?(Object(a["openBlock"])(),Object(a["createBlock"])("span",V,"expand_more")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",T,"expand_less"))],8,["data-bs-target"])]),Object(a["createVNode"])("div",{class:"collapse show",id:o.info.id},[Object(a["createVNode"])("div",x,[Object(a["createVNode"])("ol",g,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(o.info.listText,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:"list__item",key:t},Object(a["toDisplayString"])(t),1)})),128))])])],8,["id"])],2)}var C={props:{panelInfo:{type:Object,required:!0}},data:function(){return{info:{},is_expanded:!0}},created:function(){this.info=this.panelInfo}};C.render=B;var $=C,S={data:function(){return{isLoading:!1,infoType:"ticket",panelTime:{id:"time",w_80:!0,listText:["09:00開放入園，各項設施09:30起陸續開放，於營運時間結束前30分鐘陸續停止運轉。","連續假期比照假日營運時間辦理。","營業時間如有微幅調整以現場公告為主。","如遇天氣等不可抗力之因素，本園區將另行公告開/關園時間。","30人以上團體預約另有優待，請洽業務專線0312-84596"]},panelTicket:{id:"ticket",w_80:!0,listText:["以上票價如有變動，請以現場公告為主。","門票已含營業稅、娛樂稅及公共意外責任保險。","各項促銷優惠活動恕無法合併使用。","暴龍餵食秀、可愛恐龍區門票需另外購買","30人以上團體票另有優待，請洽業務專線0312-84596"]},panelTraffic:{id:"ticket",w_80:!0,listText:["請於3日前預約交通船或直升機，預約專線: 0312-988745","交通費已算入門票費用內，無另外收費","各項交通保險理賠，已包含在入園門費內"]}}},components:{Panel:$},created:function(){var t=this,e=this.$route.params.type;this.infoType=e,this.$watch((function(){return t.$route.params}),(function(){var e=t.$route.params.type;t.infoType=e}))}};S.render=N;e["default"]=S}}]);
//# sourceMappingURL=chunk-2d217183.c64789ec.js.map