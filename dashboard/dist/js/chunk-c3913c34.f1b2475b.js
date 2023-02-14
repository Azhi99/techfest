(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3913c34"],{2216:function(t,e,i){"use strict";var s=i("bc3a"),a=i.n(s);e["a"]={async createVisitorCheckIn(t){return await a.a.post("visitor_check_in/create",t)},async createVisitorCheckInByVisitorCode(t){return await a.a.post("visitor_check_in/createByVisitorCode",t)},async createVisitorCheckInList(t){return await a.a.post("visitor_check_in/create/list",t)},async updateVisitorCheckInColumn(t,e,i){return await a.a.put(`visitor_check_in/update_list?${t}=${e}`,i)},async deleteVisitorCheckInList(t){return await a.a.delete("visitor_check_in/delete_list",{data:{list:t}})},async reportVisitorCheckIn(t,e){return await a.a.get(`visitor_check_in/report?${t}=${e}`)},async getAllVisitorCheckIn(){return await a.a.get("visitor_check_in/all")},async getOneVisitorCheckIn(t){return await a.a.get("visitor_check_in/all/"+t)},async getVisitorCheckInByColumn(t,e){return await a.a.get(`visitor_check_in/filter?column=${t}&value=${e}`)},async deleteVisitorCheckIn(t){return await a.a.delete("visitor_check_in/delete/"+t)},async updateVisitorCheckIn(t,e){return await a.a.put("visitor_check_in/update/"+t,e)}}},"8cba":function(t,e,i){"use strict";var s=i("bc3a"),a=i.n(s);e["a"]={async createVisitors(t){return await a.a.post("visitors/create",t)},async createVisitorsAndCheck(t){return await a.a.post("visitors/create_and_check",t)},async createVisitorsList(t){return await a.a.post("visitors/create/list",t)},async updateVisitorsColumn(t,e,i){return await a.a.put(`visitors/update_list?${t}=${e}`,i)},async deleteVisitorsList(t){return await a.a.delete("visitors/delete_list",{data:{list:t}})},async reportVisitors(t,e){return await a.a.get(`visitors/report?${t}=${e}`)},async getAllVisitors(){return await a.a.get("visitors/all")},async getOneVisitors(t){return await a.a.get("visitors/all/"+t)},async getVisitorsByColumn(t,e){return await a.a.get(`visitors/filter?column=${t}&value=${e}`)},async deleteVisitors(t){return await a.a.delete("visitors/delete/"+t)},async updateVisitors(t,e){return await a.a.put("visitors/update/"+t,e)}}},fdb9:function(t,e,i){"use strict";i.r(e);var s=i("8336"),a=i("b0af"),r=i("99d9"),o=i("a523"),c=i("8fea"),n=i("169a"),l=i("0e8f"),d=i("132d"),_=i("a722"),h=i("8e36"),u=i("2db4"),v=i("2fa4"),k=i("8654"),g=function(){var t=this,e=t._self._c;return e("div",[t.loading?e(h["a"],{attrs:{indeterminate:!0}}):e(o["a"],{staticClass:"my-2"},[e("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.addVisitorCheckInByVisitorCode.apply(null,arguments)}}},[e(_["a"],{attrs:{row:"",wrap:""}},[e(l["a"],{staticClass:"px-1",attrs:{xs12:"",lg2:"",xl2:"",md3:"",sm4:""}},[e(k["a"],{attrs:{autofocus:"",label:"Visitor Code",filled:"",dense:"",required:""},model:{value:t.visitor_code,callback:function(e){t.visitor_code=e},expression:"visitor_code"}})],1),e(l["a"],{staticClass:"mx-1",attrs:{xs12:"",lg2:"",xl2:"",md2:"",sm4:""}},[e(s["a"],{attrs:{color:"primary",loading:t.loading_btn,type:"submit","x-large":""}},[t._v(t._s(t.$store.getters.language.data.visitor_check_in.add_btn))])],1)],1)],1),e(_["a"],{attrs:{row:"",wrap:"","mt-5":""}},[e(l["a"],{attrs:{xs12:""}},[e(a["a"],[e(r["b"],[e(k["a"],{attrs:{label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e(c["a"],{staticClass:"elevation-0",attrs:{headers:t.headers,"show-select":"",search:t.search,items:t.rows,"item-key":"visitor_check_in_id"},scopedSlots:t._u([{key:"item.visitor_check_in_id",fn:function({item:i}){return[e("div",[e(s["a"],{staticClass:"mx-1",attrs:{icon:"",to:"/visitor_check_in-list/"+i.visitor_check_in_id,color:"teal"}},[e(d["a"],[t._v(" mdi-pencil-outline ")])],1),e(s["a"],{staticClass:"mx-1",attrs:{color:"error",icon:""},on:{click:function(e){return t.selectVisitorCheckIn(i)}}},[e(d["a"],[t._v(" mdi-delete-outline ")])],1)],1)]}}],null,!0),model:{value:t.selected_rows,callback:function(e){t.selected_rows=e},expression:"selected_rows"}})],1),t.selected_rows.length>0?e(r["a"],[e(s["a"],{attrs:{color:"error"},on:{click:t.deleteVisitorCheckInList}},[t._v(t._s(t.$store.getters.language.data.visitor_check_in.delete_list_btn))])],1):t._e()],1)],1)],1)],1),e(n["a"],{attrs:{persistent:"","max-width":"400"},model:{value:t.delete_dialog,callback:function(e){t.delete_dialog=e},expression:"delete_dialog"}},[e(a["a"],[e(r["c"],[t._v(" "+t._s(t.$store.getters.language.data.visitor_check_in.delete_question)+" ")]),e(r["a"],[e(v["a"]),e(s["a"],{staticClass:"elevation-0",attrs:{text:""},on:{click:function(e){t.delete_dialog=!1}}},[t._v(" "+t._s(t.$store.getters.language.data.visitor_check_in.cancel_btn)+" ")]),e(s["a"],{staticClass:"elevation-0",attrs:{color:"error"},on:{click:function(e){return t.deleteVisitorCheckIn(t.selected_visitor_check_in.visitor_check_in_id)}}},[t._v(" "+t._s(t.$store.getters.language.data.visitor_check_in.yes_btn)+" ")])],1)],1)],1),e(u["a"],{attrs:{color:t.snackbar.color},model:{value:t.snackbar.value,callback:function(e){t.$set(t.snackbar,"value",e)},expression:"snackbar.value"}},[t._v(" "+t._s(t.snackbar.text)+" ")])],1)},w=[],V=(i("14d9"),i("2216")),b=i("8cba"),p={data(){return{visitor_check_in:{},visitor_code:null,search:"",loading:!0,loading_btn:!1,selected_rows:[],snackbar:{value:!1,text:"",color:""},rows:[],visitors:[],selected_visitor_check_in:{},delete_dialog:!1,headers:[{text:this.$store.getters.language.data.visitors.visitor_full_name,align:"start",sortable:!0,value:"visitor_full_name"},{text:this.$store.getters.language.data.visitors.visitor_phone,align:"start",sortable:!0,value:"visitor_phone"},{text:this.$store.getters.language.data.visitors.visitor_code,align:"start",sortable:!0,value:"visitor_code"},{text:this.$store.getters.language.data.visitor_check_in.visitor_check_in_date_time,align:"start",sortable:!0,value:"visitor_check_in_date_time"},{text:this.$store.getters.language.data.users.user_name,align:"start",sortable:!0,value:"user_name"},{text:this.$store.getters.language.data.actions,align:"start",sortable:!0,value:"visitor_check_in_id"}]}},computed:{},mounted(){this.readVisitorCheckIn(),this.readVisitors()},methods:{addVisitorCheckInByVisitorCode(){this.loading_btn=!0;var t=new Date;t.setHours(t.getHours()+3),V["a"].createVisitorCheckInByVisitorCode({visitor_code:this.visitor_code,visitor_check_in_date_time:t}).then(t=>{this.visitor_code=null,this.rows.push(t.data.new_data),this.snackbar={value:!0,text:"Visitors Added",color:"success"}}).catch(t=>{this.snackbar={value:!0,text:t.response.data.message,color:"error"}}).finally(()=>{this.loading_btn=!1})},readVisitors(){b["a"].getAllVisitors().then(t=>{this.visitors=t.data.rows})},addVisitorCheckIn(){this.loading_btn=!0,V["a"].createVisitorCheckIn(this.visitor_check_in).then(t=>{200==t.status?(this.visitor_check_in={},this.rows.push(t.data.new_data),this.snackbar={value:!0,text:"VisitorCheckIn Added",color:"success"}):this.snackbar={value:!0,text:"Fail to add VisitorCheckIn",color:"error"}}).finally(()=>{this.loading_btn=!1})},deleteVisitorCheckIn(t){V["a"].deleteVisitorCheckIn(t).then(e=>{this.delete_dialog=!1,200==e.status?(this.rows=this.rows.filter(e=>e.visitor_check_in_id!=t),this.snackbar={value:!0,text:"VisitorCheckIn Deleted",color:"success"}):this.snackbar={value:!0,text:"Delete Faild",color:"error"}})},deleteVisitorCheckInList(){let t=this.selected_rows.map(t=>t.visitor_check_in_id);V["a"].deleteVisitorCheckInList(t).then(e=>{200==e.status?(this.rows=this.rows.filter(e=>-1==t.indexOf(e.visitor_check_in_id)),this.snackbar={value:!0,text:this.selected_rows.length+" VisitorCheckIn Deleted",color:"success"}):this.snackbar={value:!0,text:"Delete Faild",color:"error"}})},readVisitorCheckIn(){this.loading=!0,V["a"].getAllVisitorCheckIn().then(t=>{200==t.status?(this.rows=t.data.rows,this.loading=!1):this.snackbar={value:!0,text:"Fail to read VisitorCheckIn",color:"error"}}).catch(t=>{this.snackbar={value:!0,text:"Fail to read VisitorCheckIn",color:"error"}}).finally(()=>{this.loading=!1})},selectVisitorCheckIn(t){this.selected_visitor_check_in=t,this.delete_dialog=!0}}},C=p,m=i("2877"),y=Object(m["a"])(C,g,w,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-c3913c34.f1b2475b.js.map