"use strict";(self["webpackChunkprueba_infofast"]=self["webpackChunkprueba_infofast"]||[]).push([[443],{1272:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var i=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],o=s(1001),n={},r=(0,o.Z)(n,i,a,!1,null,null,null),l=r.exports},5345:function(t,e,s){s.r(e),s.d(e,{default:function(){return G}});var i=s(6570),a=s(433),o=(s(541),s(7658),s(5352)),n=s(144),r=n.ZP.extend({name:"v-data",inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},sortBy:{type:[String,Array]},sortDesc:{type:[Boolean,Array]},customSort:{type:Function,default:o.xl},mustSort:Boolean,multiSort:Boolean,page:{type:Number,default:1},itemsPerPage:{type:Number,default:10},groupBy:{type:[String,Array],default:()=>[]},groupDesc:{type:[Boolean,Array],default:()=>[]},customGroup:{type:Function,default:o.sD},locale:{type:String,default:"en-US"},disableSort:Boolean,disablePagination:Boolean,disableFiltering:Boolean,search:String,customFilter:{type:Function,default:o.KT},serverItemsLength:{type:Number,default:-1}},data(){let t={page:this.page,itemsPerPage:this.itemsPerPage,sortBy:(0,o.TI)(this.sortBy),sortDesc:(0,o.TI)(this.sortDesc),groupBy:(0,o.TI)(this.groupBy),groupDesc:(0,o.TI)(this.groupDesc),mustSort:this.mustSort,multiSort:this.multiSort};this.options&&(t=Object.assign(t,this.options));const{sortBy:e,sortDesc:s,groupBy:i,groupDesc:a}=t,n=e.length-s.length,r=i.length-a.length;return n>0&&t.sortDesc.push(...(0,o.kg)(n,!1)),r>0&&t.groupDesc.push(...(0,o.kg)(r,!1)),{internalOptions:t}},computed:{itemsLength(){return this.serverItemsLength>=0?this.serverItemsLength:this.filteredItems.length},pageCount(){return this.internalOptions.itemsPerPage<=0?1:Math.ceil(this.itemsLength/this.internalOptions.itemsPerPage)},pageStart(){return-1!==this.internalOptions.itemsPerPage&&this.items.length?(this.internalOptions.page-1)*this.internalOptions.itemsPerPage:0},pageStop(){return-1===this.internalOptions.itemsPerPage?this.itemsLength:this.items.length?Math.min(this.itemsLength,this.internalOptions.page*this.internalOptions.itemsPerPage):0},isGrouped(){return!!this.internalOptions.groupBy.length},pagination(){return{page:this.internalOptions.page,itemsPerPage:this.internalOptions.itemsPerPage,pageStart:this.pageStart,pageStop:this.pageStop,pageCount:this.pageCount,itemsLength:this.itemsLength}},filteredItems(){let t=this.items.slice();return!this.disableFiltering&&this.serverItemsLength<=0&&(t=this.customFilter(t,this.search)),t},computedItems(){let t=this.filteredItems.slice();return(!this.disableSort||this.internalOptions.groupBy.length)&&this.serverItemsLength<=0&&(t=this.sortItems(t)),!this.disablePagination&&this.serverItemsLength<=0&&(t=this.paginateItems(t)),t},groupedItems(){return this.isGrouped?this.groupItems(this.computedItems):null},scopedProps(){return{sort:this.sort,sortArray:this.sortArray,group:this.group,items:this.computedItems,options:this.internalOptions,updateOptions:this.updateOptions,pagination:this.pagination,groupedItems:this.groupedItems,originalItemsLength:this.items.length}},computedOptions(){return{...this.options}}},watch:{computedOptions:{handler(t,e){(0,o.vZ)(t,e)||this.updateOptions(t)},deep:!0,immediate:!0},internalOptions:{handler(t,e){(0,o.vZ)(t,e)||this.$emit("update:options",t)},deep:!0,immediate:!0},page(t){this.updateOptions({page:t})},"internalOptions.page"(t){this.$emit("update:page",t)},itemsPerPage(t){this.updateOptions({itemsPerPage:t})},"internalOptions.itemsPerPage"(t){this.$emit("update:items-per-page",t)},sortBy(t){this.updateOptions({sortBy:(0,o.TI)(t)})},"internalOptions.sortBy"(t,e){!(0,o.vZ)(t,e)&&this.$emit("update:sort-by",Array.isArray(this.sortBy)?t:t[0])},sortDesc(t){this.updateOptions({sortDesc:(0,o.TI)(t)})},"internalOptions.sortDesc"(t,e){!(0,o.vZ)(t,e)&&this.$emit("update:sort-desc",Array.isArray(this.sortDesc)?t:t[0])},groupBy(t){this.updateOptions({groupBy:(0,o.TI)(t)})},"internalOptions.groupBy"(t,e){!(0,o.vZ)(t,e)&&this.$emit("update:group-by",Array.isArray(this.groupBy)?t:t[0])},groupDesc(t){this.updateOptions({groupDesc:(0,o.TI)(t)})},"internalOptions.groupDesc"(t,e){!(0,o.vZ)(t,e)&&this.$emit("update:group-desc",Array.isArray(this.groupDesc)?t:t[0])},multiSort(t){this.updateOptions({multiSort:t})},"internalOptions.multiSort"(t){this.$emit("update:multi-sort",t)},mustSort(t){this.updateOptions({mustSort:t})},"internalOptions.mustSort"(t){this.$emit("update:must-sort",t)},pageCount:{handler(t){this.$emit("page-count",t)},immediate:!0},computedItems:{handler(t){this.$emit("current-items",t)},immediate:!0},pagination:{handler(t,e){(0,o.vZ)(t,e)||this.$emit("pagination",this.pagination)},immediate:!0}},methods:{toggle(t,e,s,i,a,n){let r=e.slice(),l=s.slice();const h=r.findIndex((e=>e===t));return h<0?(n||(r=[],l=[]),r.push(t),l.push(!1)):h>=0&&!l[h]?l[h]=!0:a?l[h]=!1:(r.splice(h,1),l.splice(h,1)),(0,o.vZ)(r,e)&&(0,o.vZ)(l,s)||(i=1),{by:r,desc:l,page:i}},group(t){const{by:e,desc:s,page:i}=this.toggle(t,this.internalOptions.groupBy,this.internalOptions.groupDesc,this.internalOptions.page,!0,!1);this.updateOptions({groupBy:e,groupDesc:s,page:i})},sort(t){if(Array.isArray(t))return this.sortArray(t);const{by:e,desc:s,page:i}=this.toggle(t,this.internalOptions.sortBy,this.internalOptions.sortDesc,this.internalOptions.page,this.internalOptions.mustSort,this.internalOptions.multiSort);this.updateOptions({sortBy:e,sortDesc:s,page:i})},sortArray(t){const e=t.map((t=>{const e=this.internalOptions.sortBy.findIndex((e=>e===t));return e>-1&&this.internalOptions.sortDesc[e]}));this.updateOptions({sortBy:t,sortDesc:e})},updateOptions(t){this.internalOptions={...this.internalOptions,...t,page:this.serverItemsLength<0?Math.max(1,Math.min(t.page||this.internalOptions.page,this.pageCount)):t.page||this.internalOptions.page}},sortItems(t){let e=[],s=[];return this.disableSort||(e=this.internalOptions.sortBy,s=this.internalOptions.sortDesc),this.internalOptions.groupBy.length&&(e=[...this.internalOptions.groupBy,...e],s=[...this.internalOptions.groupDesc,...s]),this.customSort(t,e,s,this.locale)},groupItems(t){return this.customGroup(t,this.internalOptions.groupBy,this.internalOptions.groupDesc)},paginateItems(t){return-1===this.serverItemsLength&&t.length<=this.pageStart&&(this.internalOptions.page=Math.max(1,Math.ceil(t.length/this.internalOptions.itemsPerPage))||1),t.slice(this.pageStart,this.pageStop)}},render(){return this.$scopedSlots.default&&this.$scopedSlots.default(this.scopedProps)}}),l=s(994),h=s(2240),p=s(6656),d=n.ZP.extend({name:"v-data-footer",props:{options:{type:Object,required:!0},pagination:{type:Object,required:!0},itemsPerPageOptions:{type:Array,default:()=>[5,10,15,-1]},prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},itemsPerPageAllText:{type:String,default:"$vuetify.dataFooter.itemsPerPageAll"},showFirstLastPage:Boolean,showCurrentPage:Boolean,disablePagination:Boolean,disableItemsPerPage:Boolean,pageText:{type:String,default:"$vuetify.dataFooter.pageText"}},computed:{disableNextPageIcon(){return this.options.itemsPerPage<=0||this.options.page*this.options.itemsPerPage>=this.pagination.itemsLength||this.pagination.pageStop<0},computedDataItemsPerPageOptions(){return this.itemsPerPageOptions.map((t=>"object"===typeof t?t:this.genDataItemsPerPageOption(t)))}},methods:{updateOptions(t){this.$emit("update:options",Object.assign({},this.options,t))},onFirstPage(){this.updateOptions({page:1})},onPreviousPage(){this.updateOptions({page:this.options.page-1})},onNextPage(){this.updateOptions({page:this.options.page+1})},onLastPage(){this.updateOptions({page:this.pagination.pageCount})},onChangeItemsPerPage(t){this.updateOptions({itemsPerPage:t,page:1})},genDataItemsPerPageOption(t){return{text:-1===t?this.$vuetify.lang.t(this.itemsPerPageAllText):String(t),value:t}},genItemsPerPageSelect(){let t=this.options.itemsPerPage;const e=this.computedDataItemsPerPageOptions;return e.length<=1?null:(e.find((e=>e.value===t))||(t=e[0]),this.$createElement("div",{staticClass:"v-data-footer__select"},[this.$vuetify.lang.t(this.itemsPerPageText),this.$createElement(l.Z,{attrs:{"aria-label":this.$vuetify.lang.t(this.itemsPerPageText)},props:{disabled:this.disableItemsPerPage,items:e,value:t,hideDetails:!0,auto:!0,minWidth:"75px"},on:{input:this.onChangeItemsPerPage}})]))},genPaginationInfo(){let t=["–"];const e=this.pagination.itemsLength;let s=this.pagination.pageStart,i=this.pagination.pageStop;return this.pagination.itemsLength&&this.pagination.itemsPerPage?(s=this.pagination.pageStart+1,i=e<this.pagination.pageStop||this.pagination.pageStop<0?e:this.pagination.pageStop,t=this.$scopedSlots["page-text"]?[this.$scopedSlots["page-text"]({pageStart:s,pageStop:i,itemsLength:e})]:[this.$vuetify.lang.t(this.pageText,s,i,e)]):this.$scopedSlots["page-text"]&&(t=[this.$scopedSlots["page-text"]({pageStart:s,pageStop:i,itemsLength:e})]),this.$createElement("div",{class:"v-data-footer__pagination"},t)},genIcon(t,e,s,i){return this.$createElement(p.Z,{props:{disabled:e||this.disablePagination,icon:!0,text:!0},on:{click:t},attrs:{"aria-label":s}},[this.$createElement(h.Z,i)])},genIcons(){const t=[],e=[];return t.push(this.genIcon(this.onPreviousPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.prevPage"),this.$vuetify.rtl?this.nextIcon:this.prevIcon)),e.push(this.genIcon(this.onNextPage,this.disableNextPageIcon,this.$vuetify.lang.t("$vuetify.dataFooter.nextPage"),this.$vuetify.rtl?this.prevIcon:this.nextIcon)),this.showFirstLastPage&&(t.unshift(this.genIcon(this.onFirstPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.firstPage"),this.$vuetify.rtl?this.lastIcon:this.firstIcon)),e.push(this.genIcon(this.onLastPage,this.options.page>=this.pagination.pageCount||-1===this.options.itemsPerPage,this.$vuetify.lang.t("$vuetify.dataFooter.lastPage"),this.$vuetify.rtl?this.firstIcon:this.lastIcon))),[this.$createElement("div",{staticClass:"v-data-footer__icons-before"},t),this.showCurrentPage&&this.$createElement("span",[this.options.page.toString()]),this.$createElement("div",{staticClass:"v-data-footer__icons-after"},e)]}},render(){return this.$createElement("div",{staticClass:"v-data-footer"},[(0,o.z9)(this,"prepend"),this.genItemsPerPageSelect(),this.genPaginationInfo(),this.genIcons()])}}),c=s(4101),u=n.ZP.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:s,mobileBreakpoint:i}=this.$vuetify.breakpoint;if(i===this.mobileBreakpoint)return t;const a=parseInt(this.mobileBreakpoint,10),o=!isNaN(a);return o?e<a:s===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,c.Rn)("mobile-break-point","mobile-breakpoint",this)}}),m=s(6669),g=s(7678),y=(0,g.Z)(u,m.Z).extend({name:"v-data-iterator",props:{...r.options.props,itemKey:{type:String,default:"id"},value:{type:Array,default:()=>[]},singleSelect:Boolean,expanded:{type:Array,default:()=>[]},mobileBreakpoint:{...u.options.props.mobileBreakpoint,default:600},singleExpand:Boolean,loading:[Boolean,String],noResultsText:{type:String,default:"$vuetify.dataIterator.noResultsText"},noDataText:{type:String,default:"$vuetify.noDataText"},loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideDefaultFooter:Boolean,footerProps:Object,selectableKey:{type:String,default:"isSelectable"}},data:()=>({selection:{},expansion:{},internalCurrentItems:[],shiftKeyDown:!1,lastEntry:-1}),computed:{everyItem(){return!!this.selectableItems.length&&this.selectableItems.every((t=>this.isSelected(t)))},someItems(){return this.selectableItems.some((t=>this.isSelected(t)))},sanitizedFooterProps(){return(0,o.$x)(this.footerProps)},selectableItems(){return this.internalCurrentItems.filter((t=>this.isSelectable(t)))}},watch:{value:{handler(t){this.selection=t.reduce(((t,e)=>(t[(0,o.vO)(e,this.itemKey)]=e,t)),{})},immediate:!0},selection(t,e){(0,o.vZ)(Object.keys(t),Object.keys(e))||this.$emit("input",Object.values(t))},expanded:{handler(t){this.expansion=t.reduce(((t,e)=>(t[(0,o.vO)(e,this.itemKey)]=!0,t)),{})},immediate:!0},expansion(t,e){if((0,o.vZ)(t,e))return;const s=Object.keys(t).filter((e=>t[e])),i=s.length?this.items.filter((t=>s.includes(String((0,o.vO)(t,this.itemKey))))):[];this.$emit("update:expanded",i)}},created(){const t=[["disable-initial-sort","sort-by"],["filter","custom-filter"],["pagination","options"],["total-items","server-items-length"],["hide-actions","hide-default-footer"],["rows-per-page-items","footer-props.items-per-page-options"],["rows-per-page-text","footer-props.items-per-page-text"],["prev-icon","footer-props.prev-icon"],["next-icon","footer-props.next-icon"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,c.fK)(t,e,this)}));const e=["expand","content-class","content-props","content-tag"];e.forEach((t=>{this.$attrs.hasOwnProperty(t)&&(0,c.Jk)(t)}))},mounted(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)},beforeDestroy(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)},methods:{onKeyDown(t){t.keyCode===o.Do.shift&&(this.shiftKeyDown=!0)},onKeyUp(t){t.keyCode===o.Do.shift&&(this.shiftKeyDown=!1)},toggleSelectAll(t){const e=Object.assign({},this.selection);for(let s=0;s<this.selectableItems.length;s++){const i=this.selectableItems[s];if(!this.isSelectable(i))continue;const a=(0,o.vO)(i,this.itemKey);t?e[a]=i:delete e[a]}this.selection=e,this.$emit("toggle-select-all",{items:this.internalCurrentItems,value:t})},isSelectable(t){return!1!==(0,o.vO)(t,this.selectableKey)},isSelected(t){return!!this.selection[(0,o.vO)(t,this.itemKey)]||!1},select(t,e=!0,s=!0){if(!this.isSelectable(t))return;const i=this.singleSelect?{}:Object.assign({},this.selection),a=(0,o.vO)(t,this.itemKey);e?i[a]=t:delete i[a];const n=this.selectableItems.findIndex((t=>(0,o.vO)(t,this.itemKey)===a));if(-1===this.lastEntry)this.lastEntry=n;else if(this.shiftKeyDown&&!this.singleSelect&&s){const t=(0,o.vO)(this.selectableItems[this.lastEntry],this.itemKey),e=Object.keys(this.selection).includes(String(t));this.multipleSelect(e,s,i,n)}if(this.lastEntry=n,this.singleSelect&&s){const t=Object.keys(this.selection),e=t.length&&(0,o.vO)(this.selection[t[0]],this.itemKey);e&&e!==a&&this.$emit("item-selected",{item:this.selection[e],value:!1})}this.selection=i,s&&this.$emit("item-selected",{item:t,value:e})},multipleSelect(t=!0,e=!0,s,i){const a=i<this.lastEntry?i:this.lastEntry,n=i<this.lastEntry?this.lastEntry:i;for(let r=a;r<=n;r++){const i=this.selectableItems[r],a=(0,o.vO)(i,this.itemKey);t?s[a]=i:delete s[a],e&&this.$emit("item-selected",{currentItem:i,value:t})}},isExpanded(t){return this.expansion[(0,o.vO)(t,this.itemKey)]||!1},expand(t,e=!0){const s=this.singleExpand?{}:Object.assign({},this.expansion),i=(0,o.vO)(t,this.itemKey);e?s[i]=!0:delete s[i],this.expansion=s,this.$emit("item-expanded",{item:t,value:e})},createItemProps(t,e){return{item:t,index:e,select:e=>this.select(t,e),isSelected:this.isSelected(t),expand:e=>this.expand(t,e),isExpanded:this.isExpanded(t),isMobile:this.isMobile}},genEmptyWrapper(t){return this.$createElement("div",t)},genEmpty(t,e){if(0===t&&this.loading){const t=this.$slots.loading||this.$vuetify.lang.t(this.loadingText);return this.genEmptyWrapper(t)}if(0===t){const t=this.$slots["no-data"]||this.$vuetify.lang.t(this.noDataText);return this.genEmptyWrapper(t)}if(0===e){const t=this.$slots["no-results"]||this.$vuetify.lang.t(this.noResultsText);return this.genEmptyWrapper(t)}return null},genItems(t){const e=this.genEmpty(t.originalItemsLength,t.pagination.itemsLength);return e?[e]:this.$scopedSlots.default?this.$scopedSlots.default({...t,isSelected:this.isSelected,select:this.select,isExpanded:this.isExpanded,isMobile:this.isMobile,expand:this.expand}):this.$scopedSlots.item?t.items.map(((t,e)=>this.$scopedSlots.item(this.createItemProps(t,e)))):[]},genFooter(t){if(this.hideDefaultFooter)return null;const e={props:{...this.sanitizedFooterProps,options:t.options,pagination:t.pagination},on:{"update:options":e=>t.updateOptions(e)}},s=(0,o.FT)("footer.",this.$scopedSlots);return this.$createElement(d,{scopedSlots:s,...e})},genDefaultScopedSlot(t){const e={...t,someItems:this.someItems,everyItem:this.everyItem,toggleSelectAll:this.toggleSelectAll};return this.$createElement("div",{staticClass:"v-data-iterator"},[(0,o.z9)(this,"header",e,!0),this.genItems(t),this.genFooter(t),(0,o.z9)(this,"footer",e,!0)])}},render(){return this.$createElement(r,{props:this.$props,on:{"update:options":(t,e)=>!(0,o.vZ)(t,e)&&this.$emit("update:options",t),"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!(0,o.vZ)(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)},"page-count":t=>this.$emit("page-count",t)},scopedSlots:{default:this.genDefaultScopedSlot}})}}),v=s(9003),b=s(6170),f=s(7069),S=(0,g.Z)().extend({directives:{ripple:f.Z},props:{headers:{type:Array,default:()=>[]},options:{type:Object,default:()=>({page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],groupDesc:[],multiSort:!1,mustSort:!1})},checkboxColor:String,sortIcon:{type:String,default:"$sort"},everyItem:Boolean,someItems:Boolean,showGroupBy:Boolean,singleSelect:Boolean,disableSort:Boolean},methods:{genSelectAll(){var t;const e={props:{value:this.everyItem,indeterminate:!this.everyItem&&this.someItems,color:null!==(t=this.checkboxColor)&&void 0!==t?t:""},on:{input:t=>this.$emit("toggle-select-all",t)}};return this.$scopedSlots["data-table-select"]?this.$scopedSlots["data-table-select"](e):this.$createElement(b.Z,{staticClass:"v-data-table__checkbox",...e})},genSortIcon(){return this.$createElement(h.Z,{staticClass:"v-data-table-header__icon",props:{size:18}},[this.sortIcon])}}}),$=(0,g.Z)(S).extend({name:"v-data-table-header-mobile",props:{sortByText:{type:String,default:"$vuetify.dataTable.sortBy"}},methods:{genSortChip(t){const e=[t.item.text],s=this.options.sortBy.findIndex((e=>e===t.item.value)),i=s>=0,a=this.options.sortDesc[s];return e.push(this.$createElement("div",{staticClass:"v-chip__close",class:{sortable:!0,active:i,asc:i&&!a,desc:i&&a}},[this.genSortIcon()])),this.$createElement(v.Z,{staticClass:"sortable",on:{click:e=>{e.stopPropagation(),this.$emit("sort",t.item.value)}}},e)},genSortSelect(t){return this.$createElement(l.Z,{props:{label:this.$vuetify.lang.t(this.sortByText),items:t,hideDetails:!0,multiple:this.options.multiSort,value:this.options.multiSort?this.options.sortBy:this.options.sortBy[0],menuProps:{closeOnContentClick:!0}},on:{change:t=>this.$emit("sort",t)},scopedSlots:{selection:t=>this.genSortChip(t)}})}},render(t){const e=[],s=this.headers.find((t=>"data-table-select"===t.value));s&&!this.singleSelect&&e.push(this.$createElement("div",{class:["v-data-table-header-mobile__select",...(0,o.TI)(s.class)],attrs:{width:s.width}},[this.genSelectAll()]));const i=this.headers.filter((t=>!1!==t.sortable&&"data-table-select"!==t.value)).map((t=>({text:t.text,value:t.value})));!this.disableSort&&i.length&&e.push(this.genSortSelect(i));const a=e.length?t("th",[t("div",{staticClass:"v-data-table-header-mobile__wrapper"},e)]):void 0,n=t("tr",[a]);return t("thead",{staticClass:"v-data-table-header v-data-table-header-mobile"},[n])}}),x=(0,g.Z)(S).extend({name:"v-data-table-header-desktop",methods:{genGroupByToggle(t){return this.$createElement("span",{on:{click:e=>{e.stopPropagation(),this.$emit("group",t.value)}}},["group"])},getAria(t,e){const s=t=>this.$vuetify.lang.t(`$vuetify.dataTable.ariaLabel.${t}`);let i="none",a=[s("sortNone"),s("activateAscending")];return t?(e?(i="descending",a=[s("sortDescending"),s(this.options.mustSort?"activateAscending":"activateNone")]):(i="ascending",a=[s("sortAscending"),s("activateDescending")]),{ariaSort:i,ariaLabel:a.join(" ")}):{ariaSort:i,ariaLabel:a.join(" ")}},genHeader(t){const e={attrs:{role:"columnheader",scope:"col","aria-label":t.text||""},style:{width:(0,o.kb)(t.width),minWidth:(0,o.kb)(t.width)},class:[`text-${t.align||"start"}`,...(0,o.TI)(t.class),t.divider&&"v-data-table__divider"],on:{}},s=[];if("data-table-select"===t.value&&!this.singleSelect)return this.$createElement("th",e,[this.genSelectAll()]);if(s.push(this.$scopedSlots.hasOwnProperty(t.value)?this.$scopedSlots[t.value]({header:t}):this.$createElement("span",[t.text])),!this.disableSort&&(t.sortable||!t.hasOwnProperty("sortable"))){e.on.click=()=>this.$emit("sort",t.value);const i=this.options.sortBy.findIndex((e=>e===t.value)),a=i>=0,o=this.options.sortDesc[i];e.class.push("sortable");const{ariaLabel:n,ariaSort:r}=this.getAria(a,o);e.attrs["aria-label"]+=`${t.text?": ":""}${n}`,e.attrs["aria-sort"]=r,a&&(e.class.push("active"),e.class.push(o?"desc":"asc")),"end"===t.align?s.unshift(this.genSortIcon()):s.push(this.genSortIcon()),this.options.multiSort&&a&&s.push(this.$createElement("span",{class:"v-data-table-header__sort-badge"},[String(i+1)]))}return this.showGroupBy&&!1!==t.groupable&&s.push(this.genGroupByToggle(t)),this.$createElement("th",e,s)}},render(){return this.$createElement("thead",{staticClass:"v-data-table-header"},[this.$createElement("tr",this.headers.map((t=>this.genHeader(t))))])}});function P(t){if(t.model&&t.on&&t.on.input)if(Array.isArray(t.on.input)){const e=t.on.input.indexOf(t.model.callback);e>-1&&t.on.input.splice(e,1)}else delete t.on.input}var I=s(1767);function O(t,e){const s=[];for(const i in t)t.hasOwnProperty(i)&&s.push(e("template",{slot:i},t[i]));return s}var w=n.ZP.extend({name:"v-data-table-header",functional:!0,props:{...S.options.props,mobile:Boolean},render(t,{props:e,data:s,slots:i}){P(s);const a=O(i(),t);return s=(0,I.ZP)(s,{props:e}),e.mobile?t($,s,a):t(x,s,a)}});function E(t){var e;return 1!==t.length||!["td","th"].includes(null===(e=t[0])||void 0===e?void 0:e.tag)}var B=n.ZP.extend({name:"row",functional:!0,props:{headers:Array,index:Number,item:Object,rtl:Boolean},render(t,{props:e,slots:s,data:i}){const a=s(),n=e.headers.map((s=>{const n=[],r=(0,o.vO)(e.item,s.value),l=s.value,h=i.scopedSlots&&i.scopedSlots.hasOwnProperty(l)&&i.scopedSlots[l],p=a.hasOwnProperty(l)&&a[l];h?n.push(...(0,o.TI)(h({item:e.item,isMobile:!1,header:s,index:e.index,value:r}))):p?n.push(...(0,o.TI)(p)):n.push(null==r?r:String(r));const d=`text-${s.align||"start"}`;return E(n)?t("td",{class:[d,s.cellClass,{"v-data-table__divider":s.divider}]},n):n}));return t("tr",i,n)}}),C=n.ZP.extend({name:"row-group",functional:!0,props:{value:{type:Boolean,default:!0},headerClass:{type:String,default:"v-row-group__header"},contentClass:String,summaryClass:{type:String,default:"v-row-group__summary"}},render(t,{slots:e,props:s}){const i=e(),a=[];return i["column.header"]?a.push(t("tr",{staticClass:s.headerClass},i["column.header"])):i["row.header"]&&a.push(...i["row.header"]),i["row.content"]&&s.value&&a.push(...i["row.content"]),i["column.summary"]?a.push(t("tr",{staticClass:s.summaryClass},i["column.summary"])):i["row.summary"]&&a.push(...i["row.summary"]),a}}),_=(0,g.Z)(m.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,o.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),D=n.ZP.extend({name:"row",functional:!0,props:{headers:Array,hideDefaultHeader:Boolean,index:Number,item:Object,rtl:Boolean},render(t,{props:e,slots:s,data:i}){const a=s(),n=e.headers.map((s=>{const n={"v-data-table__mobile-row":!0},r=[],l=(0,o.vO)(e.item,s.value),h=s.value,p=i.scopedSlots&&i.scopedSlots.hasOwnProperty(h)&&i.scopedSlots[h],d=a.hasOwnProperty(h)&&a[h];p?r.push(p({item:e.item,isMobile:!0,header:s,index:e.index,value:l})):d?r.push(d):r.push(null==l?l:String(l));const c=[t("div",{staticClass:"v-data-table__mobile-row__cell"},r)];return"dataTableSelect"===s.value||e.hideDefaultHeader||c.unshift(t("div",{staticClass:"v-data-table__mobile-row__header"},[s.text])),t("td",{class:n},c)}));return t("tr",{...i,staticClass:"v-data-table__mobile-table-row"},n)}}),k=s(401);function Z(t,e,s){return i=>{const a=(0,o.vO)(t,i.value);return i.filter?i.filter(a,e,t):s(a,e,t)}}function A(t,e,s,i,a){return e="string"===typeof e?e.trim():null,t.filter((t=>{const n=s.every(Z(t,e,o.f9)),r=!e||i.some(Z(t,e,a));return n&&r}))}var F=(0,g.Z)(y,k.Z).extend({name:"v-data-table",directives:{ripple:f.Z},props:{headers:{type:Array,default:()=>[]},showSelect:Boolean,checkboxColor:String,showExpand:Boolean,showGroupBy:Boolean,height:[Number,String],hideDefaultHeader:Boolean,caption:String,dense:Boolean,headerProps:Object,calculateWidths:Boolean,fixedHeader:Boolean,headersLength:Number,expandIcon:{type:String,default:"$expand"},customFilter:{type:Function,default:o.f9},itemClass:{type:[String,Function],default:()=>""},loaderHeight:{type:[Number,String],default:4}},data(){return{internalGroupBy:[],openCache:{},widths:[]}},computed:{computedHeaders(){if(!this.headers)return[];const t=this.headers.filter((t=>void 0===t.value||!this.internalGroupBy.find((e=>e===t.value)))),e={text:"",sortable:!1,width:"1px"};if(this.showSelect){const s=t.findIndex((t=>"data-table-select"===t.value));s<0?t.unshift({...e,value:"data-table-select"}):t.splice(s,1,{...e,...t[s]})}if(this.showExpand){const s=t.findIndex((t=>"data-table-expand"===t.value));s<0?t.unshift({...e,value:"data-table-expand"}):t.splice(s,1,{...e,...t[s]})}return t},colspanAttrs(){return this.isMobile?void 0:{colspan:this.headersLength||this.computedHeaders.length}},columnSorters(){return this.computedHeaders.reduce(((t,e)=>(e.sort&&(t[e.value]=e.sort),t)),{})},headersWithCustomFilters(){return this.headers.filter((t=>t.filter&&(!t.hasOwnProperty("filterable")||!0===t.filterable)))},headersWithoutCustomFilters(){return this.headers.filter((t=>!t.filter&&(!t.hasOwnProperty("filterable")||!0===t.filterable)))},sanitizedHeaderProps(){return(0,o.$x)(this.headerProps)},computedItemsPerPage(){const t=this.options&&this.options.itemsPerPage?this.options.itemsPerPage:this.itemsPerPage,e=this.sanitizedFooterProps.itemsPerPageOptions;if(e&&!e.find((e=>"number"===typeof e?e===t:e.value===t))){const t=e[0];return"object"===typeof t?t.value:t}return t},groupByText(){var t,e,s;return null!==(s=null===(e=null===(t=this.headers)||void 0===t?void 0:t.find((t=>{var e;return t.value===(null===(e=this.internalGroupBy)||void 0===e?void 0:e[0])})))||void 0===e?void 0:e.text)&&void 0!==s?s:""}},created(){const t=[["sort-icon","header-props.sort-icon"],["hide-headers","hide-default-header"],["select-all","show-select"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,c.fK)(t,e,this)}))},mounted(){this.calculateWidths&&(window.addEventListener("resize",this.calcWidths),this.calcWidths())},beforeDestroy(){this.calculateWidths&&window.removeEventListener("resize",this.calcWidths)},methods:{calcWidths(){this.widths=Array.from(this.$el.querySelectorAll("th")).map((t=>t.clientWidth))},customFilterWithColumns(t,e){return A(t,e,this.headersWithCustomFilters,this.headersWithoutCustomFilters,this.customFilter)},customSortWithHeaders(t,e,s,i){return this.customSort(t,e,s,i,this.columnSorters)},createItemProps(t,e){const s=y.options.methods.createItemProps.call(this,t,e);return Object.assign(s,{headers:this.computedHeaders})},genCaption(t){return this.caption?[this.$createElement("caption",[this.caption])]:(0,o.z9)(this,"caption",t,!0)},genColgroup(t){return this.$createElement("colgroup",this.computedHeaders.map((t=>this.$createElement("col",{class:{divider:t.divider}}))))},genLoading(){const t=this.$createElement("th",{staticClass:"column",attrs:this.colspanAttrs},[this.genProgress()]),e=this.$createElement("tr",{staticClass:"v-data-table__progress"},[t]);return this.$createElement("thead",[e])},genHeaders(t){const e={props:{...this.sanitizedHeaderProps,headers:this.computedHeaders,options:t.options,mobile:this.isMobile,showGroupBy:this.showGroupBy,checkboxColor:this.checkboxColor,someItems:this.someItems,everyItem:this.everyItem,singleSelect:this.singleSelect,disableSort:this.disableSort},on:{sort:t.sort,group:t.group,"toggle-select-all":this.toggleSelectAll}},s=[(0,o.z9)(this,"header",{...e,isMobile:this.isMobile})];if(!this.hideDefaultHeader){const t=(0,o.FT)("header.",this.$scopedSlots);s.push(this.$createElement(w,{...e,scopedSlots:t}))}return this.loading&&s.push(this.genLoading()),s},genEmptyWrapper(t){return this.$createElement("tr",{staticClass:"v-data-table__empty-wrapper"},[this.$createElement("td",{attrs:this.colspanAttrs},t)])},genItems(t,e){const s=this.genEmpty(e.originalItemsLength,e.pagination.itemsLength);return s?[s]:e.groupedItems?this.genGroupedRows(e.groupedItems,e):this.genRows(t,e)},genGroupedRows(t,e){return t.map((t=>(this.openCache.hasOwnProperty(t.name)||this.$set(this.openCache,t.name,!0),this.$scopedSlots.group?this.$scopedSlots.group({group:t.name,options:e.options,isMobile:this.isMobile,items:t.items,headers:this.computedHeaders}):this.genDefaultGroupedRow(t.name,t.items,e))))},genDefaultGroupedRow(t,e,s){const i=!!this.openCache[t],a=[this.$createElement("template",{slot:"row.content"},this.genRows(e,s))],o=()=>this.$set(this.openCache,t,!this.openCache[t]),n=()=>s.updateOptions({groupBy:[],groupDesc:[]});if(this.$scopedSlots["group.header"])a.unshift(this.$createElement("template",{slot:"column.header"},[this.$scopedSlots["group.header"]({group:t,groupBy:s.options.groupBy,isMobile:this.isMobile,items:e,headers:this.computedHeaders,isOpen:i,toggle:o,remove:n})]));else{const e=this.$createElement(p.Z,{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:o}},[this.$createElement(h.Z,[i?"$minus":"$plus"])]),s=this.$createElement(p.Z,{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:n}},[this.$createElement(h.Z,["$close"])]),r=this.$createElement("td",{staticClass:"text-start",attrs:this.colspanAttrs},[e,`${this.groupByText}: ${t}`,s]);a.unshift(this.$createElement("template",{slot:"column.header"},[r]))}return this.$scopedSlots["group.summary"]&&a.push(this.$createElement("template",{slot:"column.summary"},[this.$scopedSlots["group.summary"]({group:t,groupBy:s.options.groupBy,isMobile:this.isMobile,items:e,headers:this.computedHeaders,isOpen:i,toggle:o})])),this.$createElement(C,{key:t,props:{value:i}},a)},genRows(t,e){return this.$scopedSlots.item?this.genScopedRows(t,e):this.genDefaultRows(t,e)},genScopedRows(t,e){const s=[];for(let i=0;i<t.length;i++){const e=t[i];s.push(this.$scopedSlots.item({...this.createItemProps(e,i),isMobile:this.isMobile})),this.isExpanded(e)&&s.push(this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,index:i,item:e}))}return s},genDefaultRows(t,e){return this.$scopedSlots["expanded-item"]?t.map(((t,e)=>this.genDefaultExpandedRow(t,e))):t.map(((t,e)=>this.genDefaultSimpleRow(t,e)))},genDefaultExpandedRow(t,e){const s=this.isExpanded(t),i={"v-data-table__expanded v-data-table__expanded__row":s},a=this.genDefaultSimpleRow(t,e,i),o=this.$createElement("tr",{staticClass:"v-data-table__expanded v-data-table__expanded__content"},[this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,item:t})]);return this.$createElement(C,{props:{value:s}},[this.$createElement("template",{slot:"row.header"},[a]),this.$createElement("template",{slot:"row.content"},[o])])},genDefaultSimpleRow(t,e,s={}){const i=(0,o.FT)("item.",this.$scopedSlots),a=this.createItemProps(t,e);if(this.showSelect){const e=i["data-table-select"];i["data-table-select"]=e?()=>e({...a,isMobile:this.isMobile}):()=>{var e;return this.$createElement(b.Z,{staticClass:"v-data-table__checkbox",props:{value:a.isSelected,disabled:!this.isSelectable(t),color:null!==(e=this.checkboxColor)&&void 0!==e?e:""},on:{input:t=>a.select(t)}})}}if(this.showExpand){const t=i["data-table-expand"];i["data-table-expand"]=t?()=>t(a):()=>this.$createElement(h.Z,{staticClass:"v-data-table__expand-icon",class:{"v-data-table__expand-icon--active":a.isExpanded},on:{click:t=>{t.stopPropagation(),a.expand(!a.isExpanded)}}},[this.expandIcon])}return this.$createElement(this.isMobile?D:B,{key:(0,o.vO)(t,this.itemKey),class:(0,I.ze)({...s,"v-data-table__selected":a.isSelected},(0,o.qF)(t,this.itemClass)),props:{headers:this.computedHeaders,hideDefaultHeader:this.hideDefaultHeader,index:e,item:t,rtl:this.$vuetify.rtl},scopedSlots:i,on:{click:e=>this.$emit("click:row",t,a,e),contextmenu:t=>this.$emit("contextmenu:row",t,a),dblclick:t=>this.$emit("dblclick:row",t,a)}})},genBody(t){const e={...t,expand:this.expand,headers:this.computedHeaders,isExpanded:this.isExpanded,isMobile:this.isMobile,isSelected:this.isSelected,select:this.select};return this.$scopedSlots.body?this.$scopedSlots.body(e):this.$createElement("tbody",[(0,o.z9)(this,"body.prepend",e,!0),this.genItems(t.items,t),(0,o.z9)(this,"body.append",e,!0)])},genFoot(t){var e,s;return null===(s=(e=this.$scopedSlots).foot)||void 0===s?void 0:s.call(e,t)},genFooters(t){const e={props:{options:t.options,pagination:t.pagination,itemsPerPageText:"$vuetify.dataTable.itemsPerPageText",...this.sanitizedFooterProps},on:{"update:options":e=>t.updateOptions(e)},widths:this.widths,headers:this.computedHeaders},s=[(0,o.z9)(this,"footer",e,!0)];return this.hideDefaultFooter||s.push(this.$createElement(d,{...e,scopedSlots:(0,o.FT)("footer.",this.$scopedSlots)})),s},genDefaultScopedSlot(t){const e={height:this.height,fixedHeader:this.fixedHeader,dense:this.dense};return this.$createElement(_,{props:e,class:{"v-data-table--mobile":this.isMobile}},[this.proxySlot("top",(0,o.z9)(this,"top",{...t,isMobile:this.isMobile},!0)),this.genCaption(t),this.genColgroup(t),this.genHeaders(t),this.genBody(t),this.genFoot(t),this.proxySlot("bottom",this.genFooters(t))])},proxySlot(t,e){return this.$createElement("template",{slot:t},e)}},render(){return this.$createElement(r,{props:{...this.$props,customFilter:this.customFilterWithColumns,customSort:this.customSortWithHeaders,itemsPerPage:this.computedItemsPerPage},on:{"update:options":(t,e)=>{this.internalGroupBy=t.groupBy||[],!(0,o.vZ)(t,e)&&this.$emit("update:options",t)},"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!(0,o.vZ)(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)},"page-count":t=>this.$emit("page-count",t)},scopedSlots:{default:this.genDefaultScopedSlot}})}}),T=s(5495),L=s(3687),M=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-flex justify-center mb-6 mt-6"},[e(T.Z,{attrs:{src:s(9307),"max-height":"150","max-width":"250"}})],1),e(a.Z,[e("Botones"),e(F,{staticClass:"elevation-1 mt-8",attrs:{headers:t.headers,items:t.clientes,"items-per-page":5},scopedSlots:t._u([{key:"item.actions",fn:function({item:s}){return[e(i.Z,{staticClass:"mt-2",attrs:{small:""}},[t._v(" Editar ")]),e(L.Z),e(i.Z,{staticClass:"mt-2 mb-2",attrs:{small:""}},[t._v(" Eliminar ")])]}}])})],1)],1)},H=[],K=s(3198),j=s(6154),W={components:{Botones:K.Z},name:"VistaClientes",data(){return{headers:[{text:"Cliente",value:"cliente"},{text:"Fecha",value:"date"},{text:"Productos",value:"productos"},{text:"Cantidades",value:"cantidades"},{text:"Fecha de creacion",value:"createdAt"},{text:"Acciones",value:"actions"}],clientes:[]}},created(){this.listarClientes()},methods:{listarClientes(){j.Z.get(this.$url+"/listarClientes").then((t=>{console.log(t.data),this.clientes=t.data})).catch((t=>{console.log(t)}))}}},N=W,R=s(1001),z=(0,R.Z)(N,M,H,!1,null,null,null),G=z.exports}}]);
//# sourceMappingURL=about.c9007658.js.map