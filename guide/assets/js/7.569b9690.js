(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{310:function(e,n,t){"use strict";var r=t(1),a=t(32).find,s=t(97),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),s("find")},311:function(e,n,t){"use strict";var r=t(0);n.a=new r.a},314:function(e,n,t){"use strict";var r=t(168),a=t(6),s=t(14),i=t(25),c=t(169),l=t(170);r("match",(function(e,n,t){return[function(n){var t=i(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,t):new RegExp(n)[e](String(t))},function(e){var r=t(n,this,e);if(r.done)return r.value;var i=a(this),o=String(e);if(!i.global)return l(i,o);var u=i.unicode;i.lastIndex=0;for(var h,v=[],d=0;null!==(h=l(i,o));){var f=String(h[0]);v[d]=f,""===f&&(i.lastIndex=c(o,s(i.lastIndex),u)),d++}return 0===d?null:v}]}))},315:function(e,n,t){"use strict";t(310),t(95),t(96);var r=[{label:"v4 (stable)",version:"4.x",aliases:["4","stable"]},{label:"v3",version:"3.x",aliases:["3"]},{label:"v2",version:"2.x",aliases:["2"]}],a=r[0];n.a={data:function(){return{branches:r,defaultBranch:a,selectedBranch:a.version}},mounted:function(){this.selectedBranch=localStorage.getItem("branch-version")||a.version},methods:{getBranch:function(e){return this.branches.find((function(n){return n.aliases.includes(e)||n.version===e}))},updateBranch:function(e){this.selectedBranch=e}}}},355:function(e,n,t){},387:function(e,n,t){"use strict";t(355)},397:function(e,n,t){"use strict";t.r(n);t(46),t(314);var r=t(311);var a={name:"BranchSelector",mixins:[t(315).a],mounted:function(){var e,n,t,r,a=this.getBranch((e={query:this.$route.query,hash:this.$route.hash},n=e.query,t=e.hash,r=/\?(?:v|version)=(.*)/,n.v||n.version||(t.length&&r.test(t)?t.match(r)[1]:null)));if(a)return this.selectedBranch=a.version,this.updateBranch()},methods:{updateBranch:function(){localStorage.setItem("branch-version",this.selectedBranch),r.a.$emit("branch-update",this.selectedBranch)}}},s=(t(387),t(45)),i=Object(s.a)(a,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"branch-selector-wrapper"},[t("label",{staticClass:"branch-selector-label",attrs:{for:"branch-selector"}},[e._v("GCommands Version:")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedBranch,expression:"selectedBranch"}],attrs:{id:"branch-selector"},on:{change:[function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedBranch=n.target.multiple?t:t[0]},e.updateBranch]}},e._l(e.branches,(function(n){return t("option",{key:n.version,domProps:{value:n.version}},[e._v("\n\t\t\t"+e._s(n.label)+"\n\t\t")])})),0)])}),[],!1,null,null,null);n.default=i.exports}}]);