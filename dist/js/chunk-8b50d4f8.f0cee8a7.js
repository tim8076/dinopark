(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b50d4f8"],{"07ac":function(e,t,c){var r=c("23e7"),o=c("6f53").values;r({target:"Object",stat:!0},{values:function(e){return o(e)}})},"2cf6":function(e,t,c){"use strict";c.r(t);c("b0c0");var r=c("7a23"),o=Object(r["createVNode"])("div",{class:"loadingio-spinner-rolling-feeb69z48bi"},[Object(r["createVNode"])("div",{class:"ldio-947txsafiul"},[Object(r["createVNode"])("div")])],-1),a={class:"checkout"},s={key:0,class:"container py-6 mh-100vh"},d=Object(r["createStaticVNode"])('<div class="progress__area mb-6 py-6"><div class="progress__bar"><div class="dotbox active"><div class="dot">1</div><span>購物車</span></div><div class="dotbox active"><div class="dot">2</div><span>填寫資料</span></div><div class="dotbox active"><div class="dot">3</div><span>訂單確認</span></div></div></div>',1),n={class:"row flex-column px-2 mb-6"},i={class:"col-md-6 mx-auto border border-3 p-0 mb-6"},l=Object(r["createVNode"])("h2",{class:"cart-title"},"訂單小計",-1),b={class:"p-3 p-md-6"},j={class:"table"},O=Object(r["createVNode"])("thead",null,[Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",{scope:"col"},"編號"),Object(r["createVNode"])("th",{scope:"col"},"商品"),Object(r["createVNode"])("th",{scope:"col"},"數量"),Object(r["createVNode"])("th",{scope:"col"},"小計")])],-1),u={scope:"row"},p={colspan:"4",class:"text-primary fw-bold fs-5 text-end pe-4"},N={class:"col-md-6 mx-auto border border-3 p-0"},V=Object(r["createVNode"])("h2",{class:"cart-title"},"訂購人資訊",-1),f={class:"p-3 p-md-6"},m={class:"table"},h={scope:"row"},v=Object(r["createTextVNode"])("姓名: "),g={class:"ms-3 fw-normal"},y={scope:"row"},k=Object(r["createTextVNode"])("信箱: "),w={class:"ms-3 fw-normal"},x={scope:"row"},S=Object(r["createTextVNode"])("電話: "),B={class:"ms-3 fw-normal"},D={scope:"row"},L=Object(r["createTextVNode"])("地址: "),T={class:"ms-3 fw-normal"},_={scope:"row"},C=Object(r["createTextVNode"])("付款方式: "),F={class:"ms-3 fw-normal"},$={scope:"row"},P=Object(r["createTextVNode"])("付款狀態: "),q={class:"ms-3 fw-normal"},J={key:1,class:"container my-9"},z={class:"row justify-content-center"},I={class:"col-md-8"},M={class:"p-6"},U=Object(r["createVNode"])("h2",{class:"fs-1 fw-bolder text-info d-flex justify-content-center align-items-center"},[Object(r["createVNode"])("span",{class:"material-icons md-48"},"check_circle"),Object(r["createTextVNode"])(" 付款成功 ")],-1),A={class:"info-area border-bottom mb-6"},E=Object(r["createVNode"])("p",{class:"fs-4 text-center"},"感謝您的購買，您訂單將於三日內配送",-1),G=Object(r["createVNode"])("h4",{class:"mb-3 fw-bold"},"購買品項",-1),H={class:"info-area border-bottom mb-6"},K=Object(r["createVNode"])("h4",{class:"mb-3 fw-bold"},"運送地址",-1),Q={class:"mb-2"},R={class:"info-area border-bottom mb-6"},W=Object(r["createVNode"])("h4",{class:"mb-3 fw-bold"},"付款資訊",-1),X={class:"mb-2"},Y={class:"mb-2"},Z={class:"d-flex justify-content-center"},ee=Object(r["createTextVNode"])(" 再去逛逛 ");function te(e,t,c,te,ce,re){var oe=Object(r["resolveComponent"])("Loading"),ae=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(oe,{active:ce.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return ce.isLoading=e})},{default:Object(r["withCtx"])((function(){return[o]})),_:1},8,["active"]),Object(r["createVNode"])("div",a,[ce.isPaid?(Object(r["openBlock"])(),Object(r["createBlock"])("div",J,[Object(r["createVNode"])("div",z,[Object(r["createVNode"])("div",I,[Object(r["createVNode"])("div",M,[U,Object(r["createVNode"])("div",A,[E,G,(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(re.productList,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("p",{key:e.id},[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.product.title)+" ",1),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.productSpecs,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("span",{key:e}," ("+Object(r["toDisplayString"])(e.chosedSpec)+") ",1)})),128)),Object(r["createTextVNode"])(" * "+Object(r["toDisplayString"])(e.qty),1)])})),128))]),Object(r["createVNode"])("div",H,[K,Object(r["createVNode"])("p",Q,Object(r["toDisplayString"])(ce.order.user.address),1)]),Object(r["createVNode"])("div",R,[W,Object(r["createVNode"])("p",X,"地址: "+Object(r["toDisplayString"])(ce.order.user.address),1),Object(r["createVNode"])("p",Y,"姓名: "+Object(r["toDisplayString"])(ce.order.user.name),1),Object(r["createVNode"])("p",null,"付款方式: "+Object(r["toDisplayString"])(ce.order.user.payment_method),1)]),Object(r["createVNode"])("div",Z,[Object(r["createVNode"])(ae,{to:"/dino-park/store",class:"btn btn-primary w-75"},{default:Object(r["withCtx"])((function(){return[ee]})),_:1})])])])])])):(Object(r["openBlock"])(),Object(r["createBlock"])("div",s,[d,Object(r["createVNode"])("div",n,[Object(r["createVNode"])("div",i,[l,Object(r["createVNode"])("div",b,[Object(r["createVNode"])("table",j,[O,Object(r["createVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(re.productList,(function(t,c){return Object(r["openBlock"])(),Object(r["createBlock"])("tr",{key:t.id},[Object(r["createVNode"])("th",u,Object(r["toDisplayString"])(c+1),1),Object(r["createVNode"])("td",null,[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.product.title)+" ",1),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(t.productSpecs,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("span",{key:e}," ("+Object(r["toDisplayString"])(e.chosedSpec)+") ",1)})),128))]),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(t.qty),1),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.$toCurrency(t.total)),1)])})),128)),Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("td",p," 總計: NT$"+Object(r["toDisplayString"])(e.$toCurrency(Math.round(ce.order.total)))+" 元 ",1)])])])])]),Object(r["createVNode"])("div",N,[V,Object(r["createVNode"])("div",f,[Object(r["createVNode"])("table",m,[Object(r["createVNode"])("tbody",null,[Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",h,[v,Object(r["createVNode"])("span",g,Object(r["toDisplayString"])(ce.order.user.name),1)])]),Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",y,[k,Object(r["createVNode"])("span",w,Object(r["toDisplayString"])(ce.order.user.email),1)])]),Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",x,[S,Object(r["createVNode"])("span",B,Object(r["toDisplayString"])(ce.order.user.tel),1)])]),Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",D,[L,Object(r["createVNode"])("span",T,Object(r["toDisplayString"])(ce.order.user.address),1)])]),Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",_,[C,Object(r["createVNode"])("span",F,Object(r["toDisplayString"])(ce.order.user.payment_method),1)])]),Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",$,[P,Object(r["createVNode"])("span",q,Object(r["toDisplayString"])(ce.order.user.is_paid?"已付款":"未付款"),1)])]),Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("td",null,[Object(r["createVNode"])("button",{class:"btn btn-primary d-block ms-auto",onClick:t[2]||(t[2]=function(){return re.checkOut&&re.checkOut.apply(re,arguments)})},"確認付款 ")])])])])])])])]))])],64)}c("07ac"),c("99af");var ce={data:function(){return{isLoading:!1,order:{products:{},user:{}},isPaid:!1}},computed:{productList:function(){return Object.values(this.order.products)}},methods:{getOrder:function(e){var t=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/order/").concat(e);this.$http.get(c).then((function(e){e.data.success?t.order=e.data.order:t.swal(e.data.message,"error"),t.isLoading=!1}))},checkOut:function(){var e=this;this.isLoading=!0;var t=this.order.id,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/pay/").concat(t);this.$http.post(c).then((function(t){t.data.success?e.isPaid=!0:e.swal(t.data.message,"error"),setTimeout((function(){e.isLoading=!1}),500)}))}},created:function(){var e=this.$route.params.orderId;this.getOrder(e)}};ce.render=te;t["default"]=ce},"6f53":function(e,t,c){var r=c("83ab"),o=c("df75"),a=c("fc6a"),s=c("d1e7").f,d=function(e){return function(t){var c,d=a(t),n=o(d),i=n.length,l=0,b=[];while(i>l)c=n[l++],r&&!s.call(d,c)||b.push(e?[c,d[c]]:d[c]);return b}};e.exports={entries:d(!0),values:d(!1)}},b0c0:function(e,t,c){var r=c("83ab"),o=c("9bf2").f,a=Function.prototype,s=a.toString,d=/^\s*function ([^ (]*)/,n="name";r&&!(n in a)&&o(a,n,{configurable:!0,get:function(){try{return s.call(this).match(d)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-8b50d4f8.f0cee8a7.js.map