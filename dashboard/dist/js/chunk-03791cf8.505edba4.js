(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03791cf8"],{"0dd2":function(t,e,a){"use strict";a.r(e);var s=a("8336"),i=a("b0af"),l=a("99d9"),r=a("a523"),c=a("8fea"),n=a("169a"),o=a("0e8f"),d=a("132d"),u=a("a722"),_=a("8e36"),g=a("2db4"),h=a("2fa4"),m=a("8654"),w=function(){var t=this,e=t._self._c;return e("div",[t.loading?e(_["a"],{attrs:{indeterminate:!0}}):e(r["a"],{staticClass:"my-2"},[e("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.addCities.apply(null,arguments)}}},[e(u["a"],{attrs:{row:"",wrap:""}},[e(o["a"],{attrs:{xs12:"",lg2:"",xl2:"",md3:"",sm4:""}},[e(m["a"],{staticClass:"mx-1",attrs:{type:"text",label:t.$store.getters.language.data.cities.city_name,dense:"",filled:"",required:""},model:{value:t.cities.city_name,callback:function(e){t.$set(t.cities,"city_name",e)},expression:"cities.city_name"}})],1),e(o["a"],{attrs:{xs12:"",lg2:"",xl2:"",md2:"",sm4:""}},[e(s["a"],{attrs:{color:"primary",loading:t.loading_btn,type:"submit","x-large":""}},[t._v(t._s(t.$store.getters.language.data.cities.add_btn))])],1)],1)],1),e(u["a"],{attrs:{row:"",wrap:"","mt-5":""}},[e(o["a"],{attrs:{xs12:""}},[e(i["a"],[e(l["b"],[e(c["a"],{staticClass:"elevation-0",attrs:{headers:t.headers,"show-select":"",search:t.search,items:t.rows,"item-key":"city_id"},scopedSlots:t._u([{key:"item.city_id",fn:function({item:a}){return[e("div",[e(s["a"],{staticClass:"mx-1",attrs:{icon:"",to:"/cities-list/"+a.city_id,color:"teal"}},[e(d["a"],[t._v(" mdi-pencil-outline ")])],1),e(s["a"],{staticClass:"mx-1",attrs:{color:"error",icon:""},on:{click:function(e){return t.selectCities(a)}}},[e(d["a"],[t._v(" mdi-delete-outline ")])],1)],1)]}}],null,!0),model:{value:t.selected_rows,callback:function(e){t.selected_rows=e},expression:"selected_rows"}})],1),t.selected_rows.length>0?e(l["a"],[e(s["a"],{attrs:{color:"error"},on:{click:t.deleteCitiesList}},[t._v(t._s(t.$store.getters.language.data.cities.delete_list_btn))])],1):t._e()],1)],1)],1)],1),e(n["a"],{attrs:{persistent:"","max-width":"400"},model:{value:t.delete_dialog,callback:function(e){t.delete_dialog=e},expression:"delete_dialog"}},[e(i["a"],[e(l["c"],[t._v(" "+t._s(t.$store.getters.language.data.cities.delete_question)+" ")]),e(l["a"],[e(h["a"]),e(s["a"],{staticClass:"elevation-0",attrs:{text:""},on:{click:function(e){t.delete_dialog=!1}}},[t._v(" "+t._s(t.$store.getters.language.data.cities.cancel_btn)+" ")]),e(s["a"],{staticClass:"elevation-0",attrs:{color:"error"},on:{click:function(e){return t.deleteCities(t.selected_cities.city_id)}}},[t._v(" "+t._s(t.$store.getters.language.data.cities.yes_btn)+" ")])],1)],1)],1),e(g["a"],{attrs:{color:t.snackbar.color},model:{value:t.snackbar.value,callback:function(e){t.$set(t.snackbar,"value",e)},expression:"snackbar.value"}},[t._v(" "+t._s(t.snackbar.text)+" ")])],1)},C=[],b=(a("14d9"),a("6dad")),v={data(){return{cities:{},search:"",loading:!0,loading_btn:!1,selected_rows:[],snackbar:{value:!1,text:"",color:""},rows:[],selected_cities:{},delete_dialog:!1,headers:[{text:this.$store.getters.language.data.cities.city_name,align:"start",sortable:!0,value:"city_name"},{text:this.$store.getters.language.data.actions,align:"start",sortable:!0,value:"city_id"}]}},computed:{},mounted(){this.readCities()},methods:{addCities(){this.loading_btn=!0,b["a"].createCities(this.cities).then(t=>{200==t.status?(this.cities={},this.rows.push(t.data.new_data),this.snackbar={value:!0,text:"Cities Added",color:"success"}):this.snackbar={value:!0,text:"Fail to add Cities",color:"error"}}).finally(()=>{this.loading_btn=!1})},deleteCities(t){b["a"].deleteCities(t).then(e=>{this.delete_dialog=!1,200==e.status?(this.rows=this.rows.filter(e=>e.city_id!=t),this.snackbar={value:!0,text:"Cities Deleted",color:"success"}):this.snackbar={value:!0,text:"Delete Faild",color:"error"}})},deleteCitiesList(){let t=this.selected_rows.map(t=>t.city_id);b["a"].deleteCitiesList(t).then(e=>{200==e.status?(this.rows=this.rows.filter(e=>-1==t.indexOf(e.city_id)),this.snackbar={value:!0,text:this.selected_rows.length+" Cities Deleted",color:"success"}):this.snackbar={value:!0,text:"Delete Faild",color:"error"}})},readCities(){this.loading=!0,b["a"].getAllCities().then(t=>{200==t.status?(this.rows=t.data.rows,this.loading=!1):this.snackbar={value:!0,text:"Fail to read Cities",color:"error"}}).catch(t=>{this.snackbar={value:!0,text:"Fail to read Cities",color:"error"}}).finally(()=>{this.loading=!1})},selectCities(t){this.selected_cities=t,this.delete_dialog=!0}}},p=v,y=a("2877"),f=Object(y["a"])(p,w,C,!1,null,null,null);e["default"]=f.exports},"6dad":function(t,e,a){"use strict";var s=a("bc3a"),i=a.n(s);e["a"]={async createCities(t){return await i.a.post("cities/create",t)},async createCitiesList(t){return await i.a.post("cities/create/list",t)},async updateCitiesColumn(t,e,a){return await i.a.put(`cities/update_list?${t}=${e}`,a)},async deleteCitiesList(t){return await i.a.delete("cities/delete_list",{data:{list:t}})},async reportCities(t,e){return await i.a.get(`cities/report?${t}=${e}`)},async getAllCities(){return await i.a.get("cities/all")},async getOneCities(t){return await i.a.get("cities/all/"+t)},async getCitiesByColumn(t,e){return await i.a.get(`cities/filter?column=${t}&value=${e}`)},async deleteCities(t){return await i.a.delete("cities/delete/"+t)},async updateCities(t,e){return await i.a.put("cities/update/"+t,e)}}}}]);
//# sourceMappingURL=chunk-03791cf8.505edba4.js.map