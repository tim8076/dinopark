(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8f5f96e"],{"057f":function(e,t,r){var c=r("fc6a"),n=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return n(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?i(e):n(c(e))}},"159b":function(e,t,r){var c=r("da84"),n=r("fdbc"),o=r("17c2"),a=r("9112");for(var i in n){var s=c[i],u=s&&s.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(l){u.forEach=o}}},1799:function(e,t,r){"use strict";var c=r("7a23"),n={class:"d-flex justify-content-center","aria-label":"Page navigation example"},o={class:"pagination"},a=Object(c["createVNode"])("span",{"aria-hidden":"true"},"«",-1),i=Object(c["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function s(e,t,r,s,u,l){return Object(c["openBlock"])(),Object(c["createBlock"])("nav",n,[Object(c["createVNode"])("ul",o,[Object(c["createVNode"])("li",{class:["page-item",{disabled:!u.pages.has_pre}]},[Object(c["createVNode"])("a",{class:"page-link",href:"#",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(e){return l.changePage(u.pages.current_page-1)}),["prevent"])),"aria-label":"Previous"},[a])],2),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(u.pages.total_pages,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:["page-item",{active:e===u.pages.current_page}],key:e},[Object(c["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(c["withModifiers"])((function(t){return l.changePage(e)}),["prevent"])},Object(c["toDisplayString"])(e),9,["onClick"])],2)})),128)),Object(c["createVNode"])("li",{class:["page-item",{disabled:!u.pages.has_next}]},[Object(c["createVNode"])("a",{class:"page-link",href:"#",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(e){return l.changePage(u.pages.current_page+1)}),["prevent"])),"aria-label":"Next"},[i])],2)])])}var u=r("5530"),l={props:{pagination:{type:Object,required:!0}},data:function(){return{pages:{}}},watch:{pagination:function(){this.pages=Object(u["a"])({},this.pagination)}},methods:{changePage:function(e){this.$emit("change-page",e)}},mounted:function(){this.pages=Object(u["a"])({},this.pagination)}};l.render=s;t["a"]=l},"17c2":function(e,t,r){"use strict";var c=r("b727").forEach,n=r("a640"),o=n("forEach");e.exports=o?[].forEach:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}},"2eb6":function(e,t,r){e.exports=r.p+"img/product-image-1.1f9f7ba0.png"},"4de4":function(e,t,r){"use strict";var c=r("23e7"),n=r("b727").filter,o=r("1dde"),a=o("filter");c({target:"Array",proto:!0,forced:!a},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"746f":function(e,t,r){var c=r("428f"),n=r("5135"),o=r("e538"),a=r("9bf2").f;e.exports=function(e){var t=c.Symbol||(c.Symbol={});n(t,e)||a(t,e,{value:o.f(e)})}},"7d91":function(e,t,r){"use strict";var c=r("7a23"),n={class:"store__card h-100"},o={class:"d-flex flex-column justify-content-between h-100"},a={class:"link-area"},i=Object(c["createVNode"])("span",{class:"d-none d-lg-block"},"查看更多",-1),s={class:"img"},u={class:"text p-5 bg-white"},l={class:"mb-3 fw-bolder fs-4 text-dark d-block"},d={class:"m-0 fs-5"},p={key:0,class:"row g-0"},f={class:"col-6"},b={class:"col-6"},g=Object(c["createVNode"])("span",{class:"material-icons me-2"},"shopping_cart",-1),O=Object(c["createTextVNode"])(" 加入購物車 ");function h(e,t,r,h,j,v){var m=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",n,[Object(c["createVNode"])("div",o,[Object(c["createVNode"])("div",a,[Object(c["createVNode"])(m,{to:"/dino-park/store/".concat(j.product.id),class:"link"},{default:Object(c["withCtx"])((function(){return[i]})),_:1},8,["to"]),Object(c["createVNode"])("div",s,[Object(c["createVNode"])("img",{class:"img-fluid",src:j.product.imageUrl,alt:j.product.title},null,8,["src","alt"])]),Object(c["createVNode"])("div",u,[Object(c["createVNode"])("h3",l,Object(c["toDisplayString"])(j.product.title),1),Object(c["createVNode"])("p",d,"NT$ "+Object(c["toDisplayString"])(e.$toCurrency(j.product.price)),1)])]),r.favorite?(Object(c["openBlock"])(),Object(c["createBlock"])("div",p,[Object(c["createVNode"])("div",f,[Object(c["createVNode"])("button",{class:"btn btn-primary py-3 fw-bold w-100",type:"button",onClick:t[1]||(t[1]=function(e){return v.removeFavorite(j.product.id)})}," 取消收藏 ")]),Object(c["createVNode"])("div",b,[Object(c["createVNode"])("button",{class:"btn btn-primary py-3 fw-bold w-100",type:"button",onClick:t[2]||(t[2]=function(t){return e.$emit("add-cart",j.product.id)})}," 加入購物車 ")])])):(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:1,class:"btn btn-primary py-3 fw-bold",type:"button",onClick:t[3]||(t[3]=function(t){return e.$emit("add-cart",j.product.id)})},[g,O]))])])}var j=r("5530"),v={props:{productData:{type:Object,required:!0},favorite:{type:Boolean,default:!1}},emits:["add-cart","removeFavorite"],data:function(){return{product:{}}},watch:{productData:function(){this.product=Object(j["a"])({},this.productData)}},methods:{removeFavorite:function(e){this.$emit("removeFavorite",e)}},created:function(){this.product=Object(j["a"])({},this.productData)}};v.render=h;t["a"]=v},"7edc":function(e,t,r){e.exports=r.p+"img/iguanodon-dinosaur-shape.9c0970eb.png"},"89fd":function(e,t,r){e.exports=r.p+"img/product-image-3.a47d46d5.png"},a4d3:function(e,t,r){"use strict";var c=r("23e7"),n=r("da84"),o=r("d066"),a=r("c430"),i=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),d=r("5135"),p=r("e8b5"),f=r("861d"),b=r("825a"),g=r("7b0b"),O=r("fc6a"),h=r("c04e"),j=r("5c6c"),v=r("7c73"),m=r("df75"),y=r("241c"),w=r("057f"),N=r("7418"),V=r("06cf"),k=r("9bf2"),C=r("d1e7"),x=r("9112"),P=r("6eeb"),S=r("5692"),B=r("f772"),_=r("d012"),T=r("90e3"),D=r("b622"),E=r("e538"),M=r("746f"),I=r("d44e"),L=r("69f3"),F=r("b727").forEach,$=B("hidden"),A="Symbol",q="prototype",J=D("toPrimitive"),U=L.set,W=L.getterFor(A),Z=Object[q],K=n.Symbol,Q=o("JSON","stringify"),Y=V.f,z=k.f,G=w.f,H=C.f,R=S("symbols"),X=S("op-symbols"),ee=S("string-to-symbol-registry"),te=S("symbol-to-string-registry"),re=S("wks"),ce=n.QObject,ne=!ce||!ce[q]||!ce[q].findChild,oe=i&&l((function(){return 7!=v(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(e,t,r){var c=Y(Z,t);c&&delete Z[t],z(e,t,r),c&&e!==Z&&z(Z,t,c)}:z,ae=function(e,t){var r=R[e]=v(K[q]);return U(r,{type:A,tag:e,description:t}),i||(r.description=t),r},ie=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof K},se=function(e,t,r){e===Z&&se(X,t,r),b(e);var c=h(t,!0);return b(r),d(R,c)?(r.enumerable?(d(e,$)&&e[$][c]&&(e[$][c]=!1),r=v(r,{enumerable:j(0,!1)})):(d(e,$)||z(e,$,j(1,{})),e[$][c]=!0),oe(e,c,r)):z(e,c,r)},ue=function(e,t){b(e);var r=O(t),c=m(r).concat(be(r));return F(c,(function(t){i&&!de.call(r,t)||se(e,t,r[t])})),e},le=function(e,t){return void 0===t?v(e):ue(v(e),t)},de=function(e){var t=h(e,!0),r=H.call(this,t);return!(this===Z&&d(R,t)&&!d(X,t))&&(!(r||!d(this,t)||!d(R,t)||d(this,$)&&this[$][t])||r)},pe=function(e,t){var r=O(e),c=h(t,!0);if(r!==Z||!d(R,c)||d(X,c)){var n=Y(r,c);return!n||!d(R,c)||d(r,$)&&r[$][c]||(n.enumerable=!0),n}},fe=function(e){var t=G(O(e)),r=[];return F(t,(function(e){d(R,e)||d(_,e)||r.push(e)})),r},be=function(e){var t=e===Z,r=G(t?X:O(e)),c=[];return F(r,(function(e){!d(R,e)||t&&!d(Z,e)||c.push(R[e])})),c};if(s||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=T(e),r=function(e){this===Z&&r.call(X,e),d(this,$)&&d(this[$],t)&&(this[$][t]=!1),oe(this,t,j(1,e))};return i&&ne&&oe(Z,t,{configurable:!0,set:r}),ae(t,e)},P(K[q],"toString",(function(){return W(this).tag})),P(K,"withoutSetter",(function(e){return ae(T(e),e)})),C.f=de,k.f=se,V.f=pe,y.f=w.f=fe,N.f=be,E.f=function(e){return ae(D(e),e)},i&&(z(K[q],"description",{configurable:!0,get:function(){return W(this).description}}),a||P(Z,"propertyIsEnumerable",de,{unsafe:!0}))),c({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:K}),F(m(re),(function(e){M(e)})),c({target:A,stat:!0,forced:!s},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var r=K(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),c({target:"Object",stat:!0,forced:!s,sham:!i},{create:le,defineProperty:se,defineProperties:ue,getOwnPropertyDescriptor:pe}),c({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:fe,getOwnPropertySymbols:be}),c({target:"Object",stat:!0,forced:l((function(){N.f(1)}))},{getOwnPropertySymbols:function(e){return N.f(g(e))}}),Q){var ge=!s||l((function(){var e=K();return"[null]"!=Q([e])||"{}"!=Q({a:e})||"{}"!=Q(Object(e))}));c({target:"JSON",stat:!0,forced:ge},{stringify:function(e,t,r){var c,n=[e],o=1;while(arguments.length>o)n.push(arguments[o++]);if(c=t,(f(t)||void 0!==e)&&!ie(e))return p(t)||(t=function(e,t){if("function"==typeof c&&(t=c.call(this,e,t)),!ie(t))return t}),n[1]=t,Q.apply(null,n)}})}K[q][J]||x(K[q],J,K[q].valueOf),I(K,A),_[$]=!0},a67d:function(e,t,r){e.exports=r.p+"img/pterodactyl-dinosaur-bird-shape.3dab06fb.png"},ab52:function(e,t,r){e.exports=r.p+"img/product-image-2.d5736580.png"},b627:function(e,t,r){"use strict";r.r(t);var c=r("7a23"),n=r("2eb6"),o=r.n(n),a=r("ab52"),i=r.n(a),s=r("89fd"),u=r.n(s),l=r("d60c"),d=r.n(l),p=r("a67d"),f=r.n(p),b=r("7edc"),g=r.n(b),O=r("c0bd"),h=r.n(O),j={class:"store pb-8"},v=Object(c["createVNode"])("div",{class:"outter-spinner"},[Object(c["createVNode"])("div",{class:"inner-spinner"},[Object(c["createVNode"])("div")])],-1),m={class:"container py-5"},y=Object(c["createVNode"])("img",{class:"w-100 ad-image",src:o.a,alt:"product-image-1"},null,-1),w=Object(c["createVNode"])("img",{class:"w-100 ad-image",src:i.a,alt:"product-image-2"},null,-1),N=Object(c["createVNode"])("img",{class:"w-100 ad-image",src:u.a,alt:"product-image-3"},null,-1),V={class:"row"},k={class:"col-lg-3 mb-6"},C={class:"sticky-top fs-5"},x=Object(c["createVNode"])("h2",{class:"list-group-item bg-dark text-white text-center m-0 py-5 fs-5"},"商品類別",-1),P={class:"list-group border-top-0"},S=Object(c["createVNode"])("img",{src:d.a,alt:"product-menu-icon"},null,-1),B=Object(c["createVNode"])("span",null,"所有商品",-1),_=Object(c["createVNode"])("img",{src:d.a,alt:"product-menu-icon"},null,-1),T=Object(c["createVNode"])("span",null,"恐龍競標",-1),D=Object(c["createVNode"])("img",{src:f.a,alt:"product-menu-icon"},null,-1),E=Object(c["createVNode"])("span",null,"化石",-1),M=Object(c["createVNode"])("img",{src:g.a,alt:"product-menu-icon"},null,-1),I=Object(c["createVNode"])("span",null,"門票",-1),L=Object(c["createVNode"])("img",{src:h.a,alt:"product-menu-icon"},null,-1),F=Object(c["createVNode"])("span",null,"文創商品",-1),$={class:"col-lg-9"},A={class:"row"};function q(e,t,r,n,o,a){var i=Object(c["resolveComponent"])("Loading"),s=Object(c["resolveComponent"])("Breadcrumb"),u=Object(c["resolveComponent"])("router-link"),l=Object(c["resolveComponent"])("swiper-slide"),d=Object(c["resolveComponent"])("swiper"),p=Object(c["resolveComponent"])("Card"),f=Object(c["resolveComponent"])("Pagination");return Object(c["openBlock"])(),Object(c["createBlock"])("div",j,[Object(c["createVNode"])(i,{active:o.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return o.isLoading=e})},{default:Object(c["withCtx"])((function(){return[v]})),_:1},8,["active"]),Object(c["createVNode"])("div",m,[Object(c["createVNode"])(s,{breadcrumb:{link2:{title:"恐龍商店",link:"/dino-park/store"},link3:{show:!1}}}),Object(c["createVNode"])(d,{class:"mb-6","slides-per-view":1,"space-between":20,navigation:"",loop:!0,pagination:o.swiperSetting.pagination,scrollbar:o.swiperSetting.scrollbar,autoplay:o.swiperSetting.autoplay},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{to:"/dino-park/store/-MdC_Y5waZ5yZsDM-2Nu"},{default:Object(c["withCtx"])((function(){return[y]})),_:1})]})),_:1}),Object(c["createVNode"])(l,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{to:"/dino-park/store/-MdCWCKq-3CUE8_S5lEt"},{default:Object(c["withCtx"])((function(){return[w]})),_:1})]})),_:1}),Object(c["createVNode"])(l,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{to:"/dino-park/store/-MeVCkPSo5C_FlTaijOM"},{default:Object(c["withCtx"])((function(){return[N]})),_:1})]})),_:1})]})),_:1},8,["pagination","scrollbar","autoplay"]),Object(c["createVNode"])("div",V,[Object(c["createVNode"])("div",k,[Object(c["createVNode"])("div",C,[x,Object(c["createVNode"])("ul",P,[Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{href:"#",class:["p-lg-3 list-group-item list-group-item-action",{active:1===o.navIndex}],onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(e){return a.setType("",1)}),["prevent"]))},[S,B],2)]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{href:"#",class:["p-lg-3 list-group-item list-group-item-action",{active:2===o.navIndex}],onClick:t[3]||(t[3]=Object(c["withModifiers"])((function(e){return a.setType("活體恐龍",2)}),["prevent"]))},[_,T],2)]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{href:"#",class:["p-lg-3 list-group-item list-group-item-action",{active:3===o.navIndex}],onClick:t[4]||(t[4]=Object(c["withModifiers"])((function(e){return a.setType("化石",3)}),["prevent"]))},[D,E],2)]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{href:"#",class:["p-lg-3 list-group-item list-group-item-action",{active:4===o.navIndex}],onClick:t[5]||(t[5]=Object(c["withModifiers"])((function(e){return a.setType("門票",4)}),["prevent"]))},[M,I],2)]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{href:"#",class:["p-lg-3 list-group-item list-group-item-action",{active:5===o.navIndex}],onClick:t[6]||(t[6]=Object(c["withModifiers"])((function(e){return a.setType("文創商品",5)}),["prevent"]))},[L,F],2)])])])]),Object(c["createVNode"])("div",$,[Object(c["createVNode"])("div",A,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.typeProducts,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"col-md-6 col-lg-4 mb-5",key:e.id},[Object(c["createVNode"])(p,{"product-data":e,onAddCart:a.addToCart},null,8,["product-data","onAddCart"])])})),128)),""===o.productType?(Object(c["openBlock"])(),Object(c["createBlock"])(f,{key:0,pagination:o.pagination,onChangePage:a.getProducts},null,8,["pagination","onChangePage"])):Object(c["createCommentVNode"])("",!0)])])])])])}r("4de4"),r("99af");var J=r("7d91"),U=r("1799"),W={data:function(){return{productType:"",searchText:"",allProducts:[],products:[],pagination:{},isLoading:!1,navIndex:0,swiperSetting:{scrollbar:{draggable:!0},pagination:{clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!1}}}},components:{Card:J["a"],Pagination:U["a"]},computed:{typeProducts:function(){var e=this;return this.productType?this.allProducts.filter((function(t){return t.category===e.productType})):this.products}},methods:{setType:function(e,t){this.serachText="",this.productType=e,this.navIndex=t},getAllProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/products/all");this.$http.get(t).then((function(t){t.data.success?e.allProducts=t.data.products:e.swal(t.data.message,"error")})).catch((function(e){return console.log(e)}))},getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var r="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/products?page=").concat(t);this.$http.get(r).then((function(t){if(t.data.success){var r=t.data,c=r.products,n=r.pagination;e.products=c,e.pagination=n}else e.swal(t.data.message,"error");e.isLoading=!1})).catch((function(e){return console.log(e)}))},addToCart:function(e){var t=this;this.isLoading=!0;var r="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/cart");this.$http.post(r,{data:{product_id:e,qty:1}}).then((function(e){e.data.success?(t.swal(e.data.message),t.emitter.emit("add-cart")):t.swal(e.data.message,"error"),t.isLoading=!1})).catch((function(e){return console.log(e)}))}},mounted:function(){this.getProducts(),this.getAllProducts()}};W.render=q;t["default"]=W},b64b:function(e,t,r){var c=r("23e7"),n=r("7b0b"),o=r("df75"),a=r("d039"),i=a((function(){o(1)}));c({target:"Object",stat:!0,forced:i},{keys:function(e){return o(n(e))}})},b727:function(e,t,r){var c=r("0366"),n=r("44ad"),o=r("7b0b"),a=r("50c4"),i=r("65f0"),s=[].push,u=function(e){var t=1==e,r=2==e,u=3==e,l=4==e,d=6==e,p=7==e,f=5==e||d;return function(b,g,O,h){for(var j,v,m=o(b),y=n(m),w=c(g,O,3),N=a(y.length),V=0,k=h||i,C=t?k(b,N):r||p?k(b,0):void 0;N>V;V++)if((f||V in y)&&(j=y[V],v=w(j,V,m),e))if(t)C[V]=v;else if(v)switch(e){case 3:return!0;case 5:return j;case 6:return V;case 2:s.call(C,j)}else switch(e){case 4:return!1;case 7:s.call(C,j)}return d?-1:u||l?l:C}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},c0bd:function(e,t,r){e.exports=r.p+"img/gorgosaurus-dinosaur-shape.1c0ce378.png"},d60c:function(e,t,r){e.exports=r.p+"img/centrosaurus-dinosaur-shape.4590f34c.png"},dbb4:function(e,t,r){var c=r("23e7"),n=r("83ab"),o=r("56ef"),a=r("fc6a"),i=r("06cf"),s=r("8418");c({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){var t,r,c=a(e),n=i.f,u=o(c),l={},d=0;while(u.length>d)r=n(c,t=u[d++]),void 0!==r&&s(l,t,r);return l}})},e439:function(e,t,r){var c=r("23e7"),n=r("d039"),o=r("fc6a"),a=r("06cf").f,i=r("83ab"),s=n((function(){a(1)})),u=!i||s;c({target:"Object",stat:!0,forced:u,sham:!i},{getOwnPropertyDescriptor:function(e,t){return a(o(e),t)}})},e538:function(e,t,r){var c=r("b622");t.f=c}}]);
//# sourceMappingURL=chunk-f8f5f96e.4e24c7a9.js.map