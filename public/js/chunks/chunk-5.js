(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5OWj":function(n,e,t){"use strict";var r=t("L2JU");function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){o(n,e,t[e])})}return n}function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.a={methods:s({},Object(r.mapActions)("events",["clearForm"])),computed:s({},Object(r.mapState)({events:function(n){return n.events},subEvents:function(n){return n.subEvents},invitations:function(n){return n.invitations}}))}},"5STX":function(n,e,t){var r=t("yd8q");"string"==typeof r&&(r=[[n.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,s);r.locals&&(n.exports=r.locals)},CtO9:function(n,e,t){"use strict";e.a={methods:{can:function(){if(this.environment.user.hasOwnProperty("permissions"))for(var n=0;n<arguments.length;n++){if(JSON.parse(this.environment.user.permissions).hasOwnProperty(arguments[n]))return!0}return!1},cannot:function(n){return!this.can(n)}}}},"N4/z":function(n,e,t){"use strict";var r=t("L2JU");function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){o(n,e,t[e])})}return n}function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.a={methods:s({},Object(r.mapActions)("subEvents",["clearForm"])),computed:s({},Object(r.mapState)({addresses:function(n){return n.addresses},events:function(n){return n.events},subEvents:function(n){return n.subEvents}}))}},lMlO:function(n,e,t){"use strict";t.r(e);var r=t("o0o1"),s=t.n(r),o=t("jx1L"),c=t("CtO9"),a=t("L2JU");function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){u(n,e,t[e])})}return n}function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var d={methods:i({},Object(a.mapActions)("receptive",["clearForm"])),computed:i({},Object(a.mapState)({invitations:function(n){return n.invitations},receptive:function(n){return n.receptive},statistics:function(n){return n.receptive.data.statistics}}))},l=t("5OWj"),p=t("N4/z"),v=t("mj45"),m=t("NAv5");function f(n,e,t,r,s,o,c){try{var a=n[o](c),i=a.value}catch(n){return void t(n)}a.done?e(i):Promise.resolve(i).then(r,s)}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){b(n,e,t[e])})}return n}function b(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var _={name:"receptive",uri:"events/{events.selected.id}/receptive",isForm:!0},C={props:["mode"],mixins:[o.a,d,c.a,l.a,p.a],components:{QrcodeStream:v.QrcodeStream,QrcodeDropZone:v.QrcodeDropZone,QrcodeCapture:v.QrcodeCapture},data:function(){return{service:_,result:"",noStreamApiSupport:!1,inv:"",qrCodeError:null}},computed:h({},Object(a.mapState)({checkedIn:function(n){return n.receptive.checkedIn}})),methods:h({},Object(a.mapActions)(_.name,["selectInvitation"]),{confirmCheckin:function(n){var e=this;null==n.checkin_at?confirm("Deseja realizar o check-in de "+n.person_institution.person.name+"?",this).then(function(t){t&&e.makeCheckin(n.uuid)}):showMessage("Este convidado já fez check-in no evento",this)},makeCheckin:function(n){return this.$store.dispatch("receptive/makeCheckin",n)},onDecode:function(n){return this.makeCheckin(n)},onInit:function(){var n,e=(n=s.a.mark(function n(e){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e;case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),"NotAllowedError"===n.t0.name?this.qrCodeError="ERROR: you need to grant camera access permisson":"NotFoundError"===n.t0.name?this.qrCodeError="ERROR: no camera on this device":"NotSupportedError"===n.t0.name?this.qrCodeError="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===n.t0.name?this.qrCodeError="ERROR: is the camera already in use?":"OverconstrainedError"===n.t0.name?this.qrCodeError="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===n.t0.name&&(this.qrCodeError="ERROR: Stream API is not supported in this browser");case 8:case"end":return n.stop()}},n,this,[[0,5]])}),function(){var e=this,t=arguments;return new Promise(function(r,s){var o=n.apply(e,t);function c(n){f(o,r,s,c,a,"next",n)}function a(n){f(o,r,s,c,a,"throw",n)}c(void 0)})});return function(n){return e.apply(this,arguments)}}(),getCheckedIn:function(){return this.$store.state.receptive.checkedIn},clearCheckedIn:function(){return this.$store.commit("receptive/clearCheckedIn")},getCheckedInTime:function(n){return Object(m.format)(Object(m.parse)(n.checkin_at),"HH[h]mm")},firstLast:function(n){return first_last(n)}}),mounted:function(){this.$store.dispatch("receptive/load")}},g=(t("uGW9"),t("KHd+")),k=Object(g.a)(C,function(){var n=this,e=n.$createElement,t=n._self._c||e;return n.can("receptive")?t("div",[t("div",{staticClass:"py-2 text-center"},[t("h3",[n._v(n._s(n.events.selected.name))])]),n._v(" "),n.getCheckedIn().data?t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[n.getCheckedIn()&&n.getCheckedIn().data?t("div",{staticClass:"text-center"},[t("h4",{staticClass:"text-center"},[n._v("\n                    "+n._s(n.getCheckedIn().data.person_institution.person.name)+"\n                ")]),n._v(" "),t("h6",{staticClass:"text-center"},[n._v("\n                    "+n._s(n.getCheckedIn().data.person_institution.role.name)+"\n                ")]),n._v(" "),t("h6",{staticClass:"text-center"},[n._v("\n                    "+n._s(n.getCheckedIn().data.person_institution.institution.name)+"\n                ")]),n._v(" "),t("br"),n._v(" "),t("span",{staticClass:"badge text-white mb-4 pt-2 pb-3 pl-5 pr-5",style:{"background-color":n.getCheckedIn().data.sub_event.sector?n.getColor(n.getCheckedIn().data.sub_event.sector.color,0):"",color:n.getColor(n.getCheckedIn().data.sub_event.sector.color,1),"text-transform":"uppercase"}},[t("h3",{staticClass:"mb-0"},[n._v("\n                        "+n._s(n.getCheckedIn().data.sub_event.sector?n.getCheckedIn().data.sub_event.sector.name:"")+"\n                    ")]),n._v(" "),t("br"),n._v("\n\n                    "+n._s(n.getCheckedIn().data.sub_event.place)+"\n                ")]),n._v(" "),t("img",{staticClass:"img-thumbnail rounded mx-auto d-block mb-2",attrs:{src:n.getCheckedIn().data.person_institution.person.photoUrl,width:"200",height:"200"}}),n._v(" "),t("h2",{staticClass:"text-center"},[n._v(n._s(n.getCheckedIn().data.code))]),n._v(" "),t("br"),n._v(" "),t("div",{class:"btn btn-lg btn-block "+(n.getCheckedIn().success?"btn-success":"btn-danger"),domProps:{innerHTML:n._s(n.getCheckedIn().errors?n.checkedIn.errors:"Check-in feito com sucesso!")},on:{click:function(e){n.clearCheckedIn()}}})]):n._e()])]):n._e(),n._v(" "),n.getCheckedIn().data?n._e():t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"card card-block bg-faded"},[t("div",{staticClass:"row"},[n.receptive.data.statistics?t("div",{staticClass:"col-6 text-center"},[n._v("\n                        confirmados:\n                        "+n._s(n.receptive.data.statistics.confirmed)+"\n                    ")]):n._e(),n._v(" "),n.receptive.data.statistics?t("div",{staticClass:"col-6 text-center"},[n._v("\n                        ingressaram:\n                        "+n._s(n.receptive.data.statistics.totalcheckedin)+"\n                    ")]):n._e()])])]),n._v(" "),t("div",{staticClass:"col-sm-12 col-md-6"},[t("app-table-panel",{attrs:{title:"Leitura QRCode"}},[t("div",{staticClass:"m-4"},[t("qrcode-drop-zone",{on:{decode:n.onDecode}},[t("qrcode-stream",{on:{decode:n.onDecode,init:n.onInit}})],1),n._v(" "),n.noStreamApiSupport?t("qrcode-capture",{on:{decode:n.onDecode}}):n._e()],1),n._v("\n\n                "+n._s(n.qrCodeError)+"\n            ")])],1),n._v(" "),t("div",{staticClass:"col-sm-12 col-md-6"},[t("app-table-panel",{attrs:{title:"Convidados","per-page":n.perPage,"filter-text":n.filterText},on:{"input-filter-text":function(e){n.filterText=e.target.value},"set-per-page":function(e){n.perPage=e}}},[t("app-table",{attrs:{pagination:n.receptive.data.links.pagination,columns:["Convite",{title:"Setor",trClass:"text-center"},"Convidado",{title:"Check-in",trClass:"text-center"},{title:"Foto",trClass:"text-center"}]},on:{"goto-page":function(e){n.gotoPage(e)}}},n._l(n.receptive.data.rows,function(e){return t("tr",{staticClass:"cursor-pointer",on:{click:function(t){n.confirmCheckin(e)}}},[t("td",{staticClass:"align-middle text-center"},[n._v("\n                            "+n._s(e.code)+"\n                        ")]),n._v(" "),t("td",{staticClass:"align-middle text-center"},[t("span",{staticClass:"badge text-white p-2",style:{"background-color":e.sub_event.sector?n.getColor(e.sub_event.sector.color,0):"",color:n.getColor(e.sub_event.sector.color,1),"text-transform":"uppercase"}},[n._v("\n                                "+n._s(e.sub_event.sector?e.sub_event.sector.name:"")+"\n                            ")])]),n._v(" "),t("td",{staticClass:"align-middle"},[t("strong",[n._v(n._s(e.person_institution.person.name))]),n._v(" "),t("br"),n._v("\n\n                            "+n._s(e.sub_event.name)),t("br")]),n._v(" "),t("td",{staticClass:"align-middle text-center"},[t("h6",{staticClass:"mb-0"},[e.checkin_at?t("div",[t("span",{staticClass:"badge badge-success"},[n._v(n._s(n.getCheckedInTime(e)))]),n._v(" "),t("br"),n._v(" "),t("span",{staticClass:"text-sm"},[t("small",[n._v(n._s(n.firstLast(e.checked_in_by.name)))])])]):n._e(),n._v(" "),e.checkin_at?n._e():t("span",{staticClass:"badge badge-danger"},[n._v("não")])])]),n._v(" "),t("td",{staticClass:"align-middle text-center"},[t("img",{staticClass:"img-thumbnail rounded mx-auto d-block mb-2",attrs:{src:e.person_institution.person.photoUrl,width:"50",height:"50"}})])])}),0)],1)],1)])]):n._e()},[],!1,null,null,null);k.options.__file="Receptive.vue";e.default=k.exports},uGW9:function(n,e,t){"use strict";var r=t("5STX");t.n(r).a},yd8q:function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}}]);