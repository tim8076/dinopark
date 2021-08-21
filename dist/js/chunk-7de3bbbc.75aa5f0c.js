(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7de3bbbc"],{"07ac":function(e,t,a){var o=a("23e7"),r=a("6f53").values;o({target:"Object",stat:!0},{values:function(e){return r(e)}})},"6f53":function(e,t,a){var o=a("83ab"),r=a("df75"),c=a("fc6a"),n=a("d1e7").f,d=function(e){return function(t){var a,d=c(t),s=r(d),l=s.length,i=0,u=[];while(l>i)a=s[i++],o&&!n.call(d,a)||u.push(e?[a,d[a]]:d[a]);return u}};e.exports={entries:d(!0),values:d(!1)}},7307:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),r={class:"order__list"},c=Object(o["createVNode"])("div",{class:"outter-spinner"},[Object(o["createVNode"])("div",{class:"inner-spinner"},[Object(o["createVNode"])("div")])],-1),n={class:"container p-5 border border-primary"},d={class:"d-flex justify-content-end align-items-center mb-3"},s={class:"table-responsive fw-bold"},l={class:"table"},i=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",{class:"table-light"},[Object(o["createVNode"])("th",{scope:"col",width:"240"},"訂單編號"),Object(o["createVNode"])("th",{scope:"col",width:"120"},"訂單日期"),Object(o["createVNode"])("th",{scope:"col",width:"120"},"訂單金額"),Object(o["createVNode"])("th",{scope:"col",width:"120"},"是否付款"),Object(o["createVNode"])("th",{scope:"col",width:"120"},"操作")])],-1),u={key:0},b={key:1,class:"text-primary"},p={class:"btn-group",role:"group","aria-label":"Basic example"};function m(e,t,a,m,O,j){var f=Object(o["resolveComponent"])("Loading"),h=Object(o["resolveComponent"])("OrderModal"),V=Object(o["resolveComponent"])("Alert"),g=Object(o["resolveComponent"])("Pagination");return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])(f,{active:O.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return O.isLoading=e})},{default:Object(o["withCtx"])((function(){return[c]})),_:1},8,["active"]),Object(o["createVNode"])(h,{ref:"orderModal","temp-order":O.tempOrder,onModifyOrder:j.modifyOrder},null,8,["temp-order","onModifyOrder"]),Object(o["createVNode"])("div",n,[Object(o["createVNode"])(V,{text:"刪除全部訂單，須經由園區主任簽核!!",color:"primary"}),Object(o["createVNode"])("div",d,[Object(o["createVNode"])("button",{class:["btn btn-outline-primary",{disabled:!O.orders.length}],type:"button",onClick:t[2]||(t[2]=function(){return j.deleteAllOrders&&j.deleteAllOrders.apply(j,arguments)})}," 刪除全部訂單 ",2)]),Object(o["createVNode"])("div",s,[Object(o["createVNode"])("table",l,[i,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(O.orders,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:t.id},[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.id),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.$dateFormat(t.create_at)),1),Object(o["createVNode"])("td",null,"NT$ "+Object(o["toDisplayString"])(e.$toCurrency(Math.round(t.total))),1),Object(o["createVNode"])("td",null,[t.is_paid?(Object(o["openBlock"])(),Object(o["createBlock"])("p",u,"已付款")):(Object(o["openBlock"])(),Object(o["createBlock"])("p",b,"未付款"))]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("div",p,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-info",onClick:function(e){return j.openModal(t)}}," 查看 ",8,["onClick"]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return j.deleteOrder(t.id)}}," 刪除 ",8,["onClick"])])])])})),128))])])]),Object(o["createVNode"])(g,{pagination:O.pagination,onChangePage:j.getOrders},null,8,["pagination","onChangePage"])])])}a("99af");var O=a("1799"),j=(a("b0c0"),{class:"modal fade",id:"orderModal",ref:"modal",tabindex:"-1"}),f={class:"modal-dialog modal-lg"},h={class:"modal-content"},V=Object(o["createVNode"])("div",{class:"modal-header bg-secondary"},[Object(o["createVNode"])("h5",{class:"modal-title",id:"orderModalLabel"},"修改訂單資訊"),Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},v={class:"container-fluid"},N={class:"row"},y={class:"mb-3"},k=Object(o["createTextVNode"])("訂單日期: "),w={class:"ms-3"},C={class:"d-flex"},x=Object(o["createVNode"])("span",null,"訂購商品:",-1),M={class:"p-0 ms-3 mb-0"},B=Object(o["createTextVNode"])("訂單金額: "),L={class:"ms-3"},_={class:"form-check mb-3"},$=Object(o["createVNode"])("label",{class:"form-check-label",for:"is_paid"}," 是否付款 ",-1),S={class:"col-md-6 mb-3"},D=Object(o["createVNode"])("label",{for:"name",class:"form-label"},"訂購人姓名",-1),F={class:"col-md-6 mb-3"},U=Object(o["createVNode"])("label",{for:"tel",class:"form-label"},"電話",-1),q={class:"mb-3"},T=Object(o["createVNode"])("label",{for:"email",class:"form-label"},"Email",-1),A={class:"mb-3"},J=Object(o["createVNode"])("label",{for:"address",class:"form-label"},"地址",-1),P={class:"mb-3"},E=Object(o["createVNode"])("label",{for:"comment",class:"form-label"},"留言",-1),z=Object(o["createVNode"])("div",{class:"modal-footer"},[Object(o["createVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消"),Object(o["createVNode"])("button",{type:"submit",class:"btn btn-info"},"確認")],-1);function G(e,t,a,r,c,n){var d=Object(o["resolveComponent"])("Field"),s=Object(o["resolveComponent"])("ErrorMessage"),l=Object(o["resolveComponent"])("Form");return Object(o["openBlock"])(),Object(o["createBlock"])("div",j,[Object(o["createVNode"])("div",f,[Object(o["createVNode"])("div",h,[V,Object(o["createVNode"])(l,{onSubmit:n.sendOder},{default:Object(o["withCtx"])((function(a){var r=a.errors;return[Object(o["createVNode"])("div",g,[Object(o["createVNode"])("div",v,[Object(o["createVNode"])("div",N,[Object(o["createVNode"])("div",y,[Object(o["createVNode"])("p",null,[k,Object(o["createVNode"])("span",w,Object(o["toDisplayString"])(e.$dateFormat(c.order.create_at)),1)]),Object(o["createVNode"])("p",C,[x,Object(o["createVNode"])("ol",M,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(n.products,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{key:e.id},Object(o["toDisplayString"])(e.product.title)+" * "+Object(o["toDisplayString"])(e.qty),1)})),128))])]),Object(o["createVNode"])("p",null,[B,Object(o["createVNode"])("span",L,"NT$ "+Object(o["toDisplayString"])(e.$toCurrency(Math.round(c.order.total))),1)]),Object(o["createVNode"])("div",_,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.order.is_paid=e}),value:c.order.is_paid,id:"is_paid"},null,8,["value"]),[[o["vModelCheckbox"],c.order.is_paid]]),$])]),Object(o["createVNode"])("div",S,[D,Object(o["createVNode"])(d,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":r["姓名"]}],placeholder:"請輸入 訂購人姓名",rules:"required",modelValue:c.order.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.order.user.name=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(s,{name:"姓名",class:"invalid-feedback"})]),Object(o["createVNode"])("div",F,[U,Object(o["createVNode"])(d,{id:"tel",name:"電話",type:"tel",class:["form-control",{"is-invalid":r["電話"]}],placeholder:"請輸入電話",rules:"min:9|required",modelValue:c.order.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.order.user.tel=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(s,{name:"電話",class:"invalid-feedback"})]),Object(o["createVNode"])("div",q,[T,Object(o["createVNode"])(d,{id:"email",name:"信箱",type:"email",class:["form-control",{"is-invalid":r["信箱"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:c.order.user.email,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.order.user.email=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(s,{name:"信箱",class:"invalid-feedback"})]),Object(o["createVNode"])("div",A,[J,Object(o["createVNode"])(d,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":r["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:c.order.user.address,"onUpdate:modelValue":t[5]||(t[5]=function(e){return c.order.user.address=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(s,{name:"地址",class:"invalid-feedback"})]),Object(o["createVNode"])("div",P,[E,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{class:"form-control",id:"comment",rows:"3","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.order.message=e})},"\r\n                            ",512),[[o["vModelText"],c.order.message,void 0,{trim:!0}]])])])])]),z]})),_:1},8,["onSubmit"])])])],512)}a("07ac");var H=a("8a62"),I={props:{tempOrder:{type:Object,required:!0}},emits:["modify-order"],data:function(){return{order:{products:{},user:{}}}},mixins:[H["a"]],computed:{products:function(){return Object.values(this.order.products)}},watch:{tempOrder:function(){this.order=this.tempOrder}},methods:{sendOder:function(){this.order.products=this.products,this.$emit("modify-order",this.order)}}};I.render=G;var K=I,Q={data:function(){return{isLoading:!1,orders:[],pagination:{},tempOrder:{}}},components:{Pagination:O["a"],OrderModal:K},methods:{openModal:function(e){this.tempOrder=JSON.parse(JSON.stringify(e)),this.$refs.orderModal.openModal()},getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/admin/orders?page=").concat(t);this.$http.get(a).then((function(t){if(t.data.success){var a=t.data,o=a.orders,r=a.pagination;e.orders=o,e.pagination=r}else e.swal(t.data.message,"error");e.isLoading=!1})).catch((function(e){return console.log(e)}))},modifyOrder:function(e){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/admin/order/").concat(e.id);this.$http.put(a,{data:e}).then((function(e){e.data.success?(t.getOrders(t.pagination.current_page),t.swal(e.data.message)):t.swal(e.data.message,"error"),t.isLoading=!1,t.$refs.orderModal.hideModal()})).catch((function(e){return console.log(e)}))},deleteOrder:function(e){var t=this,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/admin/order/").concat(e);this.swalComfirm("確認刪除訂單?").then((function(e){e.isConfirmed&&(t.isLoading=!0,t.$http.delete(a).then((function(e){e.data.success?(t.getOrders(t.pagination.current_page),t.swal(e.data.message)):t.swal(e.data.message,"error"),t.isLoading=!1})).catch((function(e){return console.log(e)})))}))},deleteAllOrders:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/admin/orders/all");this.swalComfirm("確認刪除全部訂單?").then((function(a){a.isConfirmed&&(e.isLoading=!0,e.$http.delete(t).then((function(t){t.data.success?(e.getOrders(e.pagination.current_page),e.swal(t.data.message)):e.swal(t.data.message,"error"),e.isLoading=!1})).catch((function(e){return console.log(e)})))}))}},created:function(){this.getOrders()}};Q.render=m;t["default"]=Q},b0c0:function(e,t,a){var o=a("83ab"),r=a("9bf2").f,c=Function.prototype,n=c.toString,d=/^\s*function ([^ (]*)/,s="name";o&&!(s in c)&&r(c,s,{configurable:!0,get:function(){try{return n.call(this).match(d)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-7de3bbbc.75aa5f0c.js.map