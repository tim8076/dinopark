(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8ad474e"],{"0fbe":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),r={class:"news__page bg-color"},a=Object(n["createVNode"])("div",{class:"loadingio-spinner-rolling-feeb69z48bi"},[Object(n["createVNode"])("div",{class:"ldio-947txsafiul"},[Object(n["createVNode"])("div")])],-1),i={class:"container py-5 mh-100vh"},o={class:"row mb-6"};function s(e,t,c,s,l,d){var u=Object(n["resolveComponent"])("Loading"),f=Object(n["resolveComponent"])("Breadcrumb"),b=Object(n["resolveComponent"])("NewsCard");return Object(n["openBlock"])(),Object(n["createBlock"])("div",r,[Object(n["createVNode"])(u,{active:l.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return l.isLoading=e})},{default:Object(n["withCtx"])((function(){return[a]})),_:1},8,["active"]),Object(n["createVNode"])("div",i,[Object(n["createVNode"])(f,{breadcrumb:{link2:{title:"最新消息",link:"/dino-park/news"},link3:{show:!1}}}),Object(n["createVNode"])("div",o,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(d.news,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{class:"col-md-4",key:e.id},[Object(n["createVNode"])(b,{news:e},null,8,["news"])])})),128))])])])}c("4de4"),c("caad"),c("2532"),c("99af");var l=c("9071"),d={data:function(){return{isLoading:!1,articles:[]}},computed:{news:function(){return this.articles.filter((function(e){return e.tag.includes("公園新聞")}))}},components:{NewsCard:l["a"]},methods:{getArticles:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jurassic","/articles?page=").concat(t);this.$http.get(c).then((function(t){t.data.success?e.articles=t.data.articles:e.swal(t.data.message),e.isLoading=!1})).catch((function(e){return console.log(e)}))}},created:function(){this.getArticles()}};d.render=s;t["default"]=d},2532:function(e,t,c){"use strict";var n=c("23e7"),r=c("5a34"),a=c("1d80"),i=c("ab13");n({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(a(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},"4de4":function(e,t,c){"use strict";var n=c("23e7"),r=c("b727").filter,a=c("1dde"),i=a("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,c){var n=c("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},9071:function(e,t,c){"use strict";var n=c("7a23"),r={class:"news__item"},a={class:"img "},i={class:"txt"},o={class:"d-flex justify-content-end me-3"};function s(e,t,c,s,l,d){var u=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createBlock"])("div",r,[Object(n["createVNode"])(u,{to:"/dino-park/news/".concat(l.aticle.id),class:"link"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("div",a,[Object(n["createVNode"])("img",{src:l.aticle.image,class:"w-100"},null,8,["src"])]),Object(n["createVNode"])("div",i,[Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(e.$dateFormat(l.aticle.create_at)),1),Object(n["createVNode"])("h5",null,Object(n["toDisplayString"])(l.aticle.title),1),Object(n["createVNode"])("div",o,[Object(n["createVNode"])("span",null,Object(n["toDisplayString"])(l.aticle.tag[1]),1)])])]})),_:1},8,["to"])])}var l={props:{news:{type:Object,required:!0}},data:function(){return{aticle:{tag:[]}}},created:function(){this.aticle=this.news}};l.render=s;t["a"]=l},ab13:function(e,t,c){var n=c("b622"),r=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[r]=!1,"/./"[e](t)}catch(n){}}return!1}},b727:function(e,t,c){var n=c("0366"),r=c("44ad"),a=c("7b0b"),i=c("50c4"),o=c("65f0"),s=[].push,l=function(e){var t=1==e,c=2==e,l=3==e,d=4==e,u=6==e,f=7==e,b=5==e||u;return function(p,v,h,g){for(var j,O,w=a(p),m=r(w),k=n(v,h,3),N=i(m.length),V=0,y=g||o,x=t?y(p,N):c||f?y(p,0):void 0;N>V;V++)if((b||V in m)&&(j=m[V],O=k(j,V,w),e))if(t)x[V]=O;else if(O)switch(e){case 3:return!0;case 5:return j;case 6:return V;case 2:s.call(x,j)}else switch(e){case 4:return!1;case 7:s.call(x,j)}return u?-1:l||d?d:x}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},caad:function(e,t,c){"use strict";var n=c("23e7"),r=c("4d64").includes,a=c("44d2");n({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")}}]);
//# sourceMappingURL=chunk-c8ad474e.897261d9.js.map