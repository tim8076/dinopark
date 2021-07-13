(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a2ee816"],{8970:function(t,e,c){"use strict";var a=c("7a23"),o={class:"cart"},s={class:"table__head"},r=Object(a["createVNode"])("th",{scope:"col",class:"column__1"},"商品",-1),n=Object(a["createVNode"])("th",{scope:"col",class:"column__2"},"數量",-1),i=Object(a["createVNode"])("th",{scope:"col",class:"column__3"},"價格",-1),d=Object(a["createVNode"])("th",{scope:"col",class:"column__4"},null,-1),l={scope:"row",class:"cart__title"},u={class:"text"},b={key:0,class:"spinner-border text-primary spinner-border-sm",role:"status"},p=Object(a["createVNode"])("span",{class:"visually-hidden delete__icon"},"Loading...",-1),h={key:1,class:"material-icons delete__icon"},j={class:"qty__rows"},O={class:"input-group input-group-sm qty__buttons"},m=Object(a["createVNode"])("span",{class:"material-icons text-white"},"remove",-1),v=Object(a["createVNode"])("span",{class:"material-icons text-white"},"add",-1),f={class:"price__row"},g={class:"delete-cell"},V={key:0,class:"spinner-border text-primary spinner-border-sm",role:"status"},k=Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...",-1),N={key:1,class:"material-icons"},C={key:0},w={colspan:"4"},y={class:"input-group mt-2 coupon__inputs"},_={class:"total__row"},x={colspan:"4"},B={class:"buttons "},L=Object(a["createTextVNode"])(" 結帳去 "),T=Object(a["createTextVNode"])("來去逛逛吧 ");function I(t,e,c,I,S,$){var P=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])("div",null,[Object(a["createVNode"])("table",{class:["table",{border:"lg"===c.size}]},[Object(a["createVNode"])("thead",s,[Object(a["createVNode"])("tr",{class:{"fs-5":"lg"===c.size}},[r,n,i,d],2)]),Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(S.cartList,(function(e,o){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e.id},[Object(a["createVNode"])("th",l,["lg"===c.size?(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:0,src:e.product.imageUrl},null,8,["src"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("div",u,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.product.title)+" ",1),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.productSpecs,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("span",{key:t}," ("+Object(a["toDisplayString"])(t.chosedSpec)+") ",1)})),128))]),Object(a["createVNode"])("a",{href:"#",onClick:Object(a["withModifiers"])((function(t){return $.deleteCartItem(e.id,o)}),["prevent"]),class:"hide-for-pad"},[S.loadingIndex===o?(Object(a["openBlock"])(),Object(a["createBlock"])("div",b,[p])):(Object(a["openBlock"])(),Object(a["createBlock"])("span",h,"delete"))],8,["onClick"])]),Object(a["createVNode"])("td",j,[Object(a["createVNode"])("div",O,[Object(a["createVNode"])("button",{class:["btn btn-primary-light",{disabled:1===e.qty}],type:"button",id:"button-addon1",onClick:function(t){return $.updateCart(e,e.qty-1,o)}},[m],10,["onClick"]),Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control cart__num","onUpdate:modelValue":function(t){return e.qty=t},onChange:function(t){return $.updateCart(e,e.qty,o)}},null,40,["onUpdate:modelValue","onChange"]),[[a["vModelText"],e.qty,void 0,{number:!0}]]),Object(a["createVNode"])("button",{class:"btn btn-primary-light",type:"button",id:"button-addon1",onClick:function(t){return $.updateCart(e,e.qty+1,o)}},[v],8,["onClick"])])]),Object(a["createVNode"])("td",f,"NT$ "+Object(a["toDisplayString"])(t.$toCurrency(Math.round(e.final_total))),1),Object(a["createVNode"])("td",g,[Object(a["createVNode"])("a",{href:"#",onClick:Object(a["withModifiers"])((function(t){return $.deleteCartItem(e.id,o)}),["prevent"])},[S.loadingIndex===o?(Object(a["openBlock"])(),Object(a["createBlock"])("div",V,[k])):(Object(a["openBlock"])(),Object(a["createBlock"])("span",N,"delete"))],8,["onClick"])])])})),128)),"lg"===c.size?(Object(a["openBlock"])(),Object(a["createBlock"])("tr",C,[Object(a["createVNode"])("td",w,[Object(a["withDirectives"])(Object(a["createVNode"])("a",{href:"#",onClick:e[1]||(e[1]=Object(a["withModifiers"])((function(t){return S.useCoupon=!S.useCoupon}),["prevent"]))}," 使用優惠代碼 ",512),[[a["vShow"],!S.useCoupon]]),Object(a["withDirectives"])(Object(a["createVNode"])("div",y,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control w-25",placeholder:"輸入優惠券代碼","onUpdate:modelValue":e[2]||(e[2]=function(t){return S.couponCode=t})},null,512),[[a["vModelText"],S.couponCode]]),Object(a["createVNode"])("button",{class:"btn btn-outline-primary",type:"button",id:"button-addon2",onClick:e[3]||(e[3]=function(){return $.addCoupon&&$.addCoupon.apply($,arguments)})}," 套用 ")],512),[[a["vShow"],S.useCoupon]])])])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("tr",_,[Object(a["createVNode"])("td",x,[Object(a["createVNode"])("button",{class:["btn btn-outline-primary",{disabled:0===S.cartList.length}],onClick:e[4]||(e[4]=function(){return $.deleteAllCartItems&&$.deleteAllCartItems.apply($,arguments)})}," 清空購物車 ",2)])])])],2)]),Object(a["createVNode"])("div",B,[0!==S.cartList.length&&"lg"!==c.size?(Object(a["openBlock"])(),Object(a["createBlock"])(P,{key:0,class:"btn btn-primary w-100 fw-bolder",to:"/dino-park/cart/list"},{default:Object(a["withCtx"])((function(){return[L]})),_:1})):0===S.cartList.length&&"sm"===c.size?(Object(a["openBlock"])(),Object(a["createBlock"])(P,{key:1,class:"btn btn-primary w-100 fw-bolder",to:"/dino-park/store"},{default:Object(a["withCtx"])((function(){return[T]})),_:1})):Object(a["createCommentVNode"])("",!0)])])}c("99af");var S={props:{size:{type:String,default:"sm"}},emits:["update-num","send-total"],data:function(){return{cartList:[],finalTotal:0,loadingIndex:null,couponCode:"",useCoupon:!1}},methods:{getCartList:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/cart");this.$http.get(e).then((function(e){e.data.success?(t.cartList=e.data.data.carts,t.finalTotal=e.data.data.final_total,t.$emit("update-num",t.cartList.length),t.sendTotal()):t.swal(e.data.message,"error")}))},deleteCartItem:function(t,e){var c=this;this.loadingIndex=e;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/cart/").concat(t);this.$http.delete(a).then((function(t){t.data.success?(c.swal(t.data.message),c.emitter.emit("add-cart")):c.swal(t.data.message,"error"),c.loadingIndex=null}))},deleteAllCartItems:function(){var t=this;this.swalComfirm("確定清空購物車?").then((function(e){if(e.isConfirmed){var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/carts");t.$http.delete(c).then((function(e){e.data.success?(t.swal(e.data.message),t.emitter.emit("add-cart")):t.swal(e.data.message,"error")}))}}))},updateCart:function(t,e,c){var a=this;e<1&&(this.swal("商品數量小於1","error"),e=1),this.loadingIndex=c;var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/cart/").concat(t.id);this.$http.put(o,{data:{product_id:t.product.id,qty:e}}).then((function(t){t.data.success?(a.swal(t.data.message),a.emitter.emit("add-cart")):a.swal(t.data.message,"error"),a.loadingIndex=null}))},addCoupon:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/coupon");this.$http.post(e,{data:{code:this.couponCode}}).then((function(e){e.data.success?(t.getCartList(),t.swal(e.data.message)):t.swal(e.data.message,"error")}))},sendTotal:function(){this.$emit("send-total",this.finalTotal,this.cartList.length)}},created:function(){var t=this;this.getCartList(),this.emitter.on("add-cart",(function(){t.getCartList()}))}};S.render=I;e["a"]=S},"925b":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),o={class:"cart_list py-6"},s=Object(a["createVNode"])("div",{class:"loadingio-spinner-rolling-feeb69z48bi"},[Object(a["createVNode"])("div",{class:"ldio-947txsafiul"},[Object(a["createVNode"])("div")])],-1),r={class:"container"},n=Object(a["createStaticVNode"])('<div class="progress__area mb-6 py-6"><div class="progress__bar"><div class="dotbox active"><div class="dot">1</div><span>購物車</span></div><div class="dotbox"><div class="dot">2</div><span>填寫資料</span></div><div class="dotbox"><div class="dot">3</div><span>訂單確認</span></div></div></div>',1),i={key:0,class:"subtotal__area"},d={class:"row"},l=Object(a["createStaticVNode"])('<div class="col-md-7"><div class="coupon"><h4 class="cart-title">可使用優惠券</h4><div class="coupon__list py-1 px-3 border "><table class="table"><thead class="coupon__head"><tr><th scope="col" class="p-1">名稱</th><th scope="col" class="p-1">代碼</th></tr></thead><tbody><tr><td>盛大開幕好禮大放送</td><td>opening</td></tr><tr><td>全站88折</td><td>888</td></tr></tbody></table></div></div></div>',1),u={class:"col-md-5"},b={class:"subtotal"},p=Object(a["createVNode"])("h4",{class:"cart-title"},"訂單小計",-1),h={class:"subtotal__list py-1 px-3 border"},j={class:"table"},O=Object(a["createVNode"])("td",null,"小計",-1),m={class:"text-end"},v=Object(a["createTextVNode"])(" 前往結帳 "),f={key:1,class:"no__product"},g={class:"icon text-center"},V=Object(a["createVNode"])("span",{class:"material-icons shop__icon"},"shopping_cart",-1),k=Object(a["createVNode"])("p",{class:"fw-bold"},"您的購物車是空的",-1),N=Object(a["createVNode"])("p",null,"加點商品進來吧",-1),C=Object(a["createTextVNode"])(" 來去逛逛 "),w={class:"mb-6"},y=Object(a["createVNode"])("h4",{class:"border-bottom border-2 pb-2 fw-bold mb-6 text-primary"},"推薦商品",-1);function _(t,e,c,_,x,B){var L=Object(a["resolveComponent"])("Loading"),T=Object(a["resolveComponent"])("Cart"),I=Object(a["resolveComponent"])("router-link"),S=Object(a["resolveComponent"])("Card"),$=Object(a["resolveComponent"])("swiper-slide"),P=Object(a["resolveComponent"])("swiper");return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])(L,{active:x.isLoading,"onUpdate:active":e[1]||(e[1]=function(t){return x.isLoading=t})},{default:Object(a["withCtx"])((function(){return[s]})),_:1},8,["active"]),Object(a["createVNode"])("div",r,[n,x.cartLength?(Object(a["openBlock"])(),Object(a["createBlock"])("div",i,[Object(a["createVNode"])(T,{size:"lg",class:"mb-6",onSendTotal:B.updateTotal},null,8,["onSendTotal"]),Object(a["createVNode"])("div",d,[l,Object(a["createVNode"])("div",u,[Object(a["createVNode"])("div",b,[p,Object(a["createVNode"])("div",h,[Object(a["createVNode"])("table",j,[Object(a["createVNode"])("tbody",null,[Object(a["createVNode"])("tr",null,[O,Object(a["createVNode"])("td",m," NT$ "+Object(a["toDisplayString"])(t.$toCurrency(Math.round(this.finalTotal)))+"元 ",1)])])]),Object(a["createVNode"])(I,{to:"/dino-park/cart/order",class:"btn btn-lg btn-primary d-block w-75 mx-auto text-white my-3"},{default:Object(a["withCtx"])((function(){return[v]})),_:1})])])])])])):(Object(a["openBlock"])(),Object(a["createBlock"])("div",f,[Object(a["createVNode"])("div",g,[V,k,N,Object(a["createVNode"])(I,{to:"/dino-park/store",class:"btn btn-lg btn-primary d-block w-25 mx-auto text-white my-3"},{default:Object(a["withCtx"])((function(){return[C]})),_:1})])])),Object(a["createVNode"])("div",w,[y,Object(a["createVNode"])(P,{"slides-per-view":1,"space-between":30,loop:!0,scrollbar:{draggable:!0},breakpoints:x.swiperOption,class:"mb-6"},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(x.recommendProducts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])($,{key:t.id},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(S,{"product-data":t,onAddCart:B.addToCart},null,8,["product-data","onAddCart"])]})),_:2},1024)})),128))]})),_:1},8,["breakpoints"])])])])}c("99af"),c("d3b7"),c("6062"),c("3ca3"),c("ddb0"),c("159b");var x=c("8970"),B=c("7d91"),L={data:function(){return{isLoading:!1,allProducts:[],recommendProducts:[],finalTotal:0,cartLength:0,swiperOption:{768:{slidesPerView:2,spaceBetween:30},1025:{slidesPerView:4,spaceBetween:30}}}},components:{Cart:x["a"],Card:B["a"]},methods:{getCartList:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/cart");this.$http.get(e).then((function(e){e.data.success?(t.cartLength=e.data.data.carts.length,t.finalTotal=e.data.data.final_total):t.swal(e.data.message,"error")}))},getAllProducts:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/products/all");this.$http.get(e).then((function(e){e.data.success?(t.allProducts=e.data.products,t.getRecommends()):t.swal(e.data.message,"error"),t.isLoading=!1}))},getRandomInt:function(t){return Math.floor(Math.random()*t)},getRecommends:function(){for(var t=this,e=new Set([]),c=0;e.size<4;c++){var a=this.getRandomInt(this.allProducts.length);e.add(a)}e.forEach((function(e){t.recommendProducts.push(t.allProducts[e])}))},addToCart:function(t){var e=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/cart");this.$http.post(c,{data:{product_id:t,qty:1}}).then((function(t){t.data.success?(e.swal(t.data.message),e.emitter.emit("add-cart")):e.swal(t.data.message,"error"),e.isLoading=!1}))},updateTotal:function(t,e){this.finalTotal=t,this.cartLength=e}},created:function(){this.getAllProducts(),this.getCartList()}};L.render=_;e["default"]=L}}]);
//# sourceMappingURL=chunk-3a2ee816.c50cb0bc.js.map