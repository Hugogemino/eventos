(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{LY3I:function(n,t,e){"use strict";var i=e("T9NN");e.n(i).a},"N4/z":function(n,t,e){"use strict";var i=e("L2JU");function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},i=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.forEach(function(t){r(n,t,e[t])})}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}t.a={methods:s({},Object(i.mapActions)("subEvents",["clearForm"])),computed:s({},Object(i.mapState)({addresses:function(n){return n.addresses},events:function(n){return n.events},subEvents:function(n){return n.subEvents}}))}},T9NN:function(n,t,e){var i=e("YuJv");"string"==typeof i&&(i=[[n.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(n.exports=i.locals)},YuJv:function(n,t,e){(n.exports=e("I1BE")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},hsPB:function(n,t,e){"use strict";e.r(t);var i=e("jx1L"),s=e("N4/z"),r=e("L2JU");function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},i=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.forEach(function(t){a(n,t,e[t])})}return n}function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var c={methods:o({},Object(r.mapActions)("invitables",["clearForm"])),computed:o({},Object(r.mapState)({invitables:function(n){return n.invitables}}))};function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var u={name:"invitables",uri:"events/{events.selected.id}/sub-events/{subEvents.selected.id}/invitations/invitables"},d={props:["mode"],mixins:[i.a,c,s.a],data:function(){return this.$store.dispatch("environment/loadSubEvents"),this.$store.dispatch("environment/loadRoles"),this.$store.dispatch("environment/loadInstitutions"),{service:u,checkedPeople:{}}},computed:function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},i=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.forEach(function(t){l(n,t,e[t])})}return n}({},Object(r.mapState)({events:function(n){return n.events},subEvents:function(n){return n.subEvents}}),{notInvited:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.not_invited},set:function(n){n?this.$store.commit("invitables/mutateFilterCheckbox",{field:"not_invited",value:this.subEvents.selected.id}):this.$store.commit("invitables/mutateFilterCheckbox",{field:"not_invited",value:null}),this.$store.dispatch("invitables/load")}},selectedSubEvent:{get:function(){return this.$store.state.invitables.data.filter.selects.sub_event}},recordButtonText:{get:function(){return this.selectedSubEvent?"copiar convidados":"convidar"}},invitablesFilterText:{get:function(){return this.$store.state.invitables.data.filter.text},set:function(n){return this.resetCheckedPeople(),this.$store.dispatch(this.service.name+"/mutateSetQueryFilterText",n)}},invitablesPerPage:{get:function(){return this.$store.state.invitables.data.links.pagination.per_page},set:function(n){return this.resetCheckedPeople(),this.$store.dispatch("invitables/setPerPage",n)}},subEventSelectFilter:{get:function(){var n=this;return _.debounce(function(){n.$store.state.invitables.data.filter.selects.sub_event},650)},set:function(n){return this.resetCheckedPeople(),this.$store.dispatch("invitables/mutateFilterSelect",{field:"sub_event",value:n})}}}),methods:{invitablesGotoPage:function(n){this.gotoPage(n,"invitables",this.invitables.data.links.pagination)},resetCheckedPeople:function(){for(var n in this.checkedPeople)this.checkedPeople.hasOwnProperty(n)&&(this.checkedPeople[n].checked=!1)},isChecked:function(n){return!!this.checkedPeople.hasOwnProperty(n.id)&&this.checkedPeople[n.id].checked},toggleCheck:function(n){this.checkedPeople.hasOwnProperty(n.id)||(this.checkedPeople[n.id]={id:n.id,checked:!1}),this.checkedPeople[n.id].checked=!this.checkedPeople[n.id].checked},invite:function(){var n={eventId:this.events.selected.id,subEventId:this.subEvents.selected.id,invitees:_.filter(this.checkedPeople,function(n){return n.checked})};this.resetCheckedPeople(),this.$store.dispatch("invitables/invite",n)},moveInvitations:function(){var n={eventId:this.events.selected.id,newSubEventId:this.subEvents.selected.id,currentSubEventId:this.selectedSubEvent,invitees:_.filter(this.checkedPeople,function(n){return n.checked})};this.resetCheckedPeople(),this.$store.dispatch("invitables/moveInvitations",n)},except:function(n){function t(t,e){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}(function(n,t){var e=clone(n);return e.rows=except(n.rows,t),e})},beforeDestroy:function(){this.$store.state.invitables.data.filter.text=null,this.$store.commit("invitables/clearFilterSelects")}},v=(e("LY3I"),e("KHd+")),h=Object(v.a)(d,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"py-2 text-center"},[e("h1",[n._v("Convidar pessoas para o sub-evento")]),n._v(" "),e("h2",[n._v(n._s(n.events.selected.name))]),n._v(" "),e("h2",[n._v("\n            "+n._s(n.subEvents.selected.name)+" -\n            "+n._s(n.subEvents.selected.sector?n.subEvents.selected.sector.name:"")+"\n        ")]),n._v(" "),e("h2",[n._v(n._s(n.subEvents.selected.place))])]),n._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-6"},[n.invitables.data.links?e("app-table-panel",{attrs:{title:"Pessoas","per-page":n.invitablesPerPage,"filter-text":n.invitablesFilterText},on:{"set-per-page":function(t){n.invitablesPerPage=t},"input-filter-text":function(t){n.invitablesFilterText=t.target.value}}},[e("template",{slot:"checkboxes"},[e("app-input",{attrs:{name:"not_invited",label:"Somente não convidados",type:"checkbox",required:!0,form:n.form,inline:"true"},model:{value:n.notInvited,callback:function(t){n.notInvited=t},expression:"notInvited"}})],1),n._v(" "),e("template",{slot:"selects"},[e("app-institution-filter-for-invitation",{attrs:{name:"institution_id",label:"Instituição",required:!0,form:n.form,options:n.environment.tables.institutions}}),n._v(" "),e("app-role-filter-for-invitation",{attrs:{name:"role_id",label:"Função",required:!0,form:n.form,options:n.environment.tables.roles}}),n._v(" "),e("app-select",{attrs:{name:"sub_event_id",label:"Filtrar convidados de outro sub-evento",required:!0,form:n.form,options:n.except(this.environment.tables.sub_events,this.subEvents.form.fields.id)},model:{value:n.subEventSelectFilter,callback:function(t){n.subEventSelectFilter=t},expression:"subEventSelectFilter"}})],1),n._v(" "),e("template",{slot:"buttons"},[e("div",{staticClass:"btn btn-primary btn-sm pull-right",on:{click:function(t){n.invite()}}},[n._v("\n                        "+n._s(n.recordButtonText)+"\n                    ")]),n._v(" "),n.selectedSubEvent?e("div",{staticClass:"btn btn-danger btn-sm pull-right",on:{click:function(t){n.moveInvitations()}}},[n._v("\n                        mover convidados\n                    ")]):n._e()]),n._v(" "),e("app-table",{attrs:{pagination:n.invitables.data.links.pagination,columns:["#","Convidar","Tratamento","Nome","Instituição","Cargo","Convidado",""]},on:{"goto-page":function(t){n.invitablesGotoPage(t)}}},n._l(n.invitables.data.rows,function(t){return e("tr",{class:{"cursor-pointer":!0,"bg-primary-lighter text-white":n.isCurrent(t,n.invitables.selected)}},[e("td",{staticClass:"align-middle"},[n._v(n._s(t.id))]),n._v(" "),e("td",{staticClass:"align-middle"},[t.is_invited_to_sub_event?n._e():e("input",{attrs:{type:"checkbox"},domProps:{checked:n.isChecked(t)},on:{input:function(e){n.toggleCheck(t)}}})]),n._v(" "),e("td",{staticClass:"align-middle"},[n._v(n._s(t.title))]),n._v(" "),e("td",{staticClass:"align-middle"},[n._v("\n                            "+n._s(t.person.name)+"\n                        ")]),n._v(" "),e("td",{staticClass:"align-middle"},[n._v("\n                            "+n._s(t.institution.name)+"\n                        ")]),n._v(" "),e("td",{staticClass:"align-middle"},[n._v("\n                            "+n._s(t.role.name)+"\n                        ")]),n._v(" "),e("td",{staticClass:"align-middle text-center"},[e("h6",{staticClass:"mb-0"},[t.is_invited_to_sub_event?e("span",{staticClass:"badge badge-success"},[n._v("Já convidado")]):n._e()])]),n._v(" "),e("td",{staticClass:"align-middle"},[n.can("update")?e("a",{staticClass:"btn btn-danger btn-sm ml-1 pull-right",attrs:{href:"#"},on:{click:function(e){n.invite(t)}}},[e("i",{staticClass:"fa fa-plus"})]):n._e()])])}),0)],2):n._e()],1)])])},[],!1,null,null,null);h.options.__file="InviteForm.vue";t.default=h.exports},jx1L:function(n,t,e){"use strict";t.a={data:function(){return{loading:{environment:!1,table:!1}}},computed:{filterText:{get:function(){return this.$store.state[this.service.name].data.filter.text},set:function(n){return this.$store.dispatch(this.service.name+"/mutateSetQueryFilterText",n)}},emptyForm:function(){return this.$store.state[this.service.name].emptyForm},form:function(){return this.$store.state[this.service.name].form},selected:function(){return this.$store.state[this.service.name].selected},environment:function(){return this.$store.state.environment},pagination:function(){return this.$store.state[this.service.name].data.links?this.$store.state[this.service.name].data.links.pagination:{}},perPage:{get:function(){return this.pagination.per_page},set:function(n){this.$store.dispatch(this.service.name+"/setPerPage",n)}}},methods:{load:function(){return this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page),this.$store.dispatch(this.service.name+"/load")},select:function(n){return this.$store.dispatch(this.service.name+"/select",n)},save:function(n){return this.$store.dispatch(this.service.name+"/save",n)},mutateSetErrors:function(n){this.$store.commit(this.service.name+"/mutateSetErrors",n)},mutateFormData:function(n){this.$store.commit(this.service.name+"/mutateFormData",n)},mutateSetFormField:function(n){this.$store.commit(this.service.name+"/mutateSetFormField",n)},mutateSetService:function(n){this.$store.commit(this.service.name+"/mutateSetService",n)},isLoading:function(){return this.loading.environment||this.loading.table},boot:function(){var n=this;this.mutateSetService(this.service),!this.service.hasOwnProperty("performLoad")||this.service.performLoad?this.load().then(function(){n.fillFormWhenEditing()}):this.fillFormWhenEditing(),this.$store.dispatch(this.service.name+"/subscribeToTableEvents")},fillFormWhenEditing:function(){var n=this,t="update"===this.mode?_.find(this.rows,function(t){return t.id===n.$route.params.id}):this.form?clone(this.emptyForm):{};this.mutateFormData(t),this.mutateSetErrors({}),this.fillAdditionalFormFields()},fillAdditionalFormFields:function(){},back:function(){this.$router.back()},saveModel:function(){var n=this;this.save(this.mode).then(function(){n.back(),n.clearForm()})},can:function(n){return n&&!1},cannot:function(n){return!can(n)},gotoPage:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(e=e||this.pagination).current_page!==n&&(n<1||n>e.last_page||this.$store.dispatch((t||this.service.name)+"/setCurrentPage",n))},isCurrent:function(n,t){return n.id===t.id},setPerPage:function(){this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page)},getDataUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getUpdateStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)}},mounted:function(){this.boot()}}}}]);