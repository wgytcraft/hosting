(window.webpackJsonp=window.webpackJsonp||[]).push([[44,7,18,24,33,34,35,36,37],{237:function(t,e,r){"use strict";var n=r(7),o=r(82)(6),c="findIndex",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),n(n.P+n.F*l,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(81)(c)},238:function(t,e,r){"use strict";r.r(e),e.default={render:function(t){return t(!1)}}},239:function(t,e,r){"use strict";r.r(e),e.default={render:function(t){return t(!1)}}},240:function(t,e,r){"use strict";r.r(e);r(33),r(237);var n={props:{toc:{type:Array,default:function(){return[]}}},data:function(){return{activeLink:"",exactActiveLink:"",sections:[]}},computed:{settings:function(){return this.$docus.settings}},beforeMount:function(){history.scrollRestoration="manual"},mounted:function(){var t=this;document.querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]").forEach((function(section){t.sections.push({level:section.tagName.replace(/h/i,""),id:section.getAttribute("id"),top:section.offsetTop})}));var e=window.location.hash.replace("#",""),r=this.sections.findIndex((function(section){return section.id===e}));if(e&&r>=0){var n=document.querySelector(location.hash).offsetTop-110;this.$nextTick().then((function(){scrollTo(0,n),t.setActive(r)}))}else this.onScroll();window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll,!0)},methods:{onScroll:function(){var t=window.pageYOffset,e=window.innerHeight;if(0===t)this.setActive(0);else{if(t+e>=document.body.scrollHeight)return this.setActive(this.sections.length-1);for(var r=t+e/2,n=0,i=0;i<this.sections.length;i++)this.sections[i].top<=r&&(n=i);this.setActive(n)}},setActive:function(t){if(this.sections[t]&&(this.exactActiveLink=this.sections[t].id,this.activeLink=this.sections[t].id,"3"===this.sections[t].level)){for(var e=-1,i=0;i<t;i++)"2"===this.sections[i].level&&(e=i);e>=0&&(this.activeLink=this.sections[e].id)}}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.toc.length?r("div",{staticClass:"flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block "},[r("PageTocTop"),t._v(" "),r("div",{staticClass:"flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) -mt-10 pt-10 pb-4 top-18"},[r("h5",{staticClass:"flex items-center mb-1"},[r("span",{staticClass:"text-sm font-semibold text-gray-900 dark:text-gray-100 "},[t._v(t._s(t.$t("toc.title")))])]),t._v(" "),r("ul",{staticClass:"overflow-x-hidden font-medium"},t._l(t.toc,(function(link){return r("li",{key:link.id,staticClass:"hover:text-gray-900 dark:hover:text-gray-100 ",class:{"text-primary-500 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-400":t.exactActiveLink===link.id||t.activeLink===link.id,"text-gray-700 dark:text-gray-200":!(t.exactActiveLink===link.id||t.activeLink===link.id)}},[r("a",{staticClass:"block py-1 transition-colors duration-100 transform scrollactive-item ",class:{"":2===link.depth,"border-l-2 border-gray-100 dark:border-gray-800 pl-3 text-gray-500 dark:text-gray-400":3===link.depth,"dark:border-primary-500 border-primary-500 text-primary-400":3===link.depth&&(t.exactActiveLink===link.id||t.activeLink===link.id)},attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0),t._v(" "),r("PageTocBottom")],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageTocTop:r(238).default,PageTocBottom:r(239).default})},241:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("path",{attrs:{d:"M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,r){"use strict";r.r(e);r(13),r(33);var n={props:{document:{type:Object,required:!0}},computed:{settings:function(){return this.$docus.settings},link:function(){if(this.settings.github)return[this.$docus.repoUrl,"edit",this.settings.github.branch,this.settings.github.dir,this.$config.contentDir,"".concat(this.document.path).concat(this.document.extension).replace(/^\//g,"")].filter(Boolean).join("/")}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.link?r("div",{staticClass:"flex flex-col justify-between mt-8 mb-4 sm:flex-row"},[r("a",{staticClass:"flex items-center mb-2 text-sm sm:mb-0 font-base hover:underline dark:text-gray-400",attrs:{href:t.link,target:"_blank",rel:"noopener"}},[r("IconEdit",{staticClass:"w-3 h-3 mr-1"}),t._v(" "),r("span",[t._v("\n      "+t._s(t.$t("article.github"))+"\n    ")])],1),t._v(" "),r("span",{staticClass:"flex items-center text-sm text-gray-500 font-base dark:text-gray-400 "},[t._v("\n    "+t._s(t.$t("article.updatedAt"))+" "+t._s(t.$d(Date.parse(t.document.updatedAt),"long"))+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconEdit:r(241).default})},250:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.prev||t.next?r("div",{staticClass:"flex flex-col justify-between py-4 font-medium leading-7 xs:space-x-2 xs:flex-row"},[r("div",{staticClass:"flex justify-start w-full xs:w-1/2"},[t.prev?r("NuxtLink",{staticClass:"inline-flex items-center justify-end w-full px-4 py-4 truncate border border-gray-100 rounded group min-w-1/2 xs:w-auto xs:justify-end dark:text-gray-400 dark:border-gray-800 dark:hover:text-primary-400 hover:text-primary-500 hover:border-primary-400 dark:hover:border-gray-700",attrs:{to:t.$contentLocalePath(t.prev.to)}},[r("span",{staticClass:"relative flex flex-col items-end truncate"},[t.prev.category?r("span",{staticClass:"mb-1 text-xs leading-tight text-gray-400 group-hover:text-primary-400"},[t._v(t._s(t.prev.category))]):t._e(),t._v(" "),r("span",{staticClass:"flex items-center w-full leading-tight"},[r("IconArrowLeft",{staticClass:"flex-shrink-0 w-4 h-4 mr-2 text-primary-500"}),t._v(" "),r("span",{staticClass:"truncate text-primary-500"},[t._v(t._s(t.prev.title))])],1)])]):t._e()],1),t._v(" "),r("div",{staticClass:"flex justify-end order-first w-full xs:order-last xs:w-1/2"},[t.next?r("NuxtLink",{staticClass:"inline-flex items-center justify-start w-full px-4 py-4 mb-2 truncate border border-gray-100 rounded group xs:mb-0 xs:w-auto min-w-1/2 xs:justify-start dark:text-gray-400 dark:border-gray-800 dark:hover:text-primary-400 hover:text-primary-500 hover:border-primary-400 dark:hover:border-gray-700",attrs:{to:t.$contentLocalePath(t.next.to)}},[r("span",{staticClass:"relative flex flex-col items-start truncate"},[t.next.category?r("span",{staticClass:"mb-1 text-xs leading-tight text-gray-400 group-hover:text-primary-400"},[t._v(t._s(t.next.category))]):t._e(),t._v(" "),r("span",{staticClass:"flex items-center w-full leading-tight"},[r("span",{staticClass:"truncate text-primary-500"},[t._v(t._s(t.next.title))]),t._v(" "),r("IconArrowRight",{staticClass:"flex-shrink-0 w-4 h-4 ml-2 text-primary-500"})],1)])]):t._e()],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrowLeft:r(158).default,IconArrowRight:r(242).default})},251:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"inline-flex items-center px-3 py-1 text-base leading-5 tracking-tight rounded-full bg-primary-100 dark:bg-primary-800 text-primary-500 dark:text-primary-400"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,r){"use strict";r.r(e);r(30),r(10),r(15),r(14),r(29),r(23),r(22);var n=r(40),o=r(4),c=r(3),l=(r(18),r(6)),d=r(0),f=r(281);function m(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var x={name:"PageSlug",layout:function(t){return t.$docus.settings.layout},middleware:function(t){var e=t.app,r=t.params,n=t.redirect;"index"===r.pathMatch&&n(e.localePath("/"))},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,d,f,m,h,x,v,y,w,_,k,C,j,A;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.$docus,d=t.app,f=t.params,m=t.error,h=d.i18n.locale,x=Object(l.i)("/".concat(f.pathMatch||"")),v=!(null===(r=c.ui)||void 0===r||!r.draft)&&void 0,e.next=6,n({deep:!0}).where({language:h,to:x,draft:v}).fetch();case 6:if(y=e.sent,w=Object(o.a)(y,1),_=w[0]){e.next=11;break}return e.abrupt("return",m({statusCode:404,message:"Page not found"}));case 11:return e.next=13,n({deep:!0}).where({language:h,draft:v,menu:{$ne:!1}}).only(["title","slug","to","category"]).sortBy("position","asc").surround(_.slug,{before:1,after:1}).fetch();case 13:return k=e.sent,C=Object(o.a)(k,2),j=C[0],A=C[1],e.abrupt("return",{document:_,prev:j,next:A});case 18:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.document.title,meta:[{hid:"og:title",property:"og:title",content:this.document.title},{hid:"twitter:title",name:"twitter:title",content:this.document.title}].concat(Object(n.a)(this.descriptionMeta()))}},computed:{settings:function(){return this.$docus.settings}},mounted:function(){this.document.version&&localStorage.setItem("document-".concat(this.document.slug,"-version"),this.document.version),setTimeout((function(){var t,e=m(document.getElementsByClassName("nuxt-content-highlight"));try{for(e.s();!(t=e.n()).done;){var r=t.value,component=(new(d.a.extend(f.default))).$mount();r.appendChild(component.$el)}}catch(t){e.e(t)}finally{e.f()}}),100)},methods:{descriptionMeta:function(){return this.document.description?[{hid:"description",name:"description",content:this.document.description},{hid:"og:description",property:"og:description",content:this.document.description},{hid:"twitter:description",name:"twitter:description",content:this.document.description}]:[]}}},v=r(2),y=Object(v.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("AppPage",{scopedSlots:t._u([{key:"toc",fn:function(){return[t.document.fullscreen?t._e():r("PageToc",{attrs:{toc:t.document.toc}})]},proxy:!0}])},[r("div",{staticClass:"mb-6",class:{"border-b border-gray-200 dark:border-gray-800 pb-6":t.document.description}},[r("h1",{staticClass:"flex items-center justify-between text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100"},[r("span",{staticClass:"flex-1"},[t._v(t._s(t.document.title))]),t._v(" "),t.document.draft?r("span",{staticClass:"inline-block px-3 py-1 mr-2 text-base font-medium leading-5 tracking-tight text-yellow-500 bg-yellow-100 rounded-full items-flex dark:bg-yellow-800 dark:text-yellow-400"},[t._v("Draft")]):t._e(),t._v(" "),t.document.badge?r("DBadge",{staticClass:"font-medium"},[t._v(t._s(t.document.badge))]):t._e()],1),t._v(" "),t.document.description?r("p",{staticClass:"mt-2 text-lg text-gray-600 dark:text-gray-300"},[t._v(t._s(t.document.description))]):t._e()]),t._v(" "),r("div",{staticClass:"max-w-none"},[r("NuxtContent",{attrs:{document:t.document}})],1),t._v(" "),r("PageBottom",{attrs:{document:t.document}}),t._v(" "),r("hr",{staticClass:"mt-10 mb-4 border-gray-200 dark:border-gray-800"}),t._v(" "),r("PagePrevNext",{attrs:{prev:t.prev,next:t.next}})],1)}),[],!1,null,null,null);e.default=y.exports;installComponents(y,{DBadge:r(251).default,PageBottom:r(249).default,PagePrevNext:r(250).default,PageToc:r(240).default,AppPage:r(157).default})}}]);