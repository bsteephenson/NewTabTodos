webpackJsonp([2,0],{0:function(s,t,e){"use strict";function a(s){return s&&s.__esModule?s:{default:s}}var n=e(152),r=a(n),o=e(150),i=a(o);new r.default({el:"#app",template:"<App/>",components:{App:i.default}})},118:function(s,t,e){"use strict";function a(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(t,"__esModule",{value:!0});var n=e(119),r=a(n),o=e(120),i=a(o),l=e(1),j=a(l),d="allTasks",u="MMMM Do, YYYY";t.default={name:"app",data:function(){return{allTasks:{"December 3rd, 2003":[{name:"hello",done:!1,highlighted:!1}]}}},created:function(){console.log("Created"),window.app=this,window.moment=j.default,this.load((0,j.default)().format(u)),self=this,window.addEventListener("storage",function(){self.load((0,j.default)().format(u))})},computed:{sortedDates:function(){return this.sortDates(this.allTasks)}},watch:{allTasks:{handler:function(s){this.save()},deep:!0}},methods:{sortDates:function(s){var t=(0,i.default)(s).map(function(s){var t=(0,j.default)(s,u).valueOf();return t});t.sort(),t.reverse(),t=t.map(function(s){var t=(0,j.default)(s),e=t.format(u);return e});var e=[],a=!0;for(var n in t)if(a)a=!1,e.push(t[n]);else{var r=t[n];s[r].length>0&&e.push(r)}return e},taskAdd:function(s){this.allTasks[s].push({name:"",done:!1})},save:function(){var s=(0,r.default)(this.allTasks);localStorage.setItem(d,s)},load:function(s){var t=((0,j.default)(s,u),localStorage.getItem(d)||"null"),e=JSON.parse(t);if(e){if(!e[s]){var a=[],n=this.sortDates(e)[0],r=e[n];for(var o in r)if(!r[o].done){var i={};i.name=r[o].name,i.done=!1,a.push(i)}e[s]=a}}else e={},e[s]=[];for(var l in e)for(var o in e[l])"highlighted"in e[l][o]||(e[l][o].highlighted=!1);this.allTasks=e},clear:function(){localStorage.removeItem(d)}}}},148:function(s,t){},149:function(s,t,e){function a(s){return e(n(s))}function n(s){return r[s]||function(){throw new Error("Cannot find module '"+s+"'.")}()}var r={"./af":10,"./af.js":10,"./ar":16,"./ar-dz":11,"./ar-dz.js":11,"./ar-ly":12,"./ar-ly.js":12,"./ar-ma":13,"./ar-ma.js":13,"./ar-sa":14,"./ar-sa.js":14,"./ar-tn":15,"./ar-tn.js":15,"./ar.js":16,"./az":17,"./az.js":17,"./be":18,"./be.js":18,"./bg":20,"./bg-x":19,"./bg-x.js":19,"./bg.js":20,"./bn":21,"./bn.js":21,"./bo":22,"./bo.js":22,"./br":23,"./br.js":23,"./bs":24,"./bs.js":24,"./ca":25,"./ca.js":25,"./cs":26,"./cs.js":26,"./cv":27,"./cv.js":27,"./cy":28,"./cy.js":28,"./da":29,"./da.js":29,"./de":31,"./de-at":30,"./de-at.js":30,"./de.js":31,"./dv":32,"./dv.js":32,"./el":33,"./el.js":33,"./en-au":34,"./en-au.js":34,"./en-ca":35,"./en-ca.js":35,"./en-gb":36,"./en-gb.js":36,"./en-ie":37,"./en-ie.js":37,"./en-nz":38,"./en-nz.js":38,"./eo":39,"./eo.js":39,"./es":41,"./es-do":40,"./es-do.js":40,"./es.js":41,"./et":42,"./et.js":42,"./eu":43,"./eu.js":43,"./fa":44,"./fa.js":44,"./fi":45,"./fi.js":45,"./fo":46,"./fo.js":46,"./fr":49,"./fr-ca":47,"./fr-ca.js":47,"./fr-ch":48,"./fr-ch.js":48,"./fr.js":49,"./fy":50,"./fy.js":50,"./gd":51,"./gd.js":51,"./gl":52,"./gl.js":52,"./he":53,"./he.js":53,"./hi":54,"./hi.js":54,"./hr":55,"./hr.js":55,"./hu":56,"./hu.js":56,"./hy-am":57,"./hy-am.js":57,"./id":58,"./id.js":58,"./is":59,"./is.js":59,"./it":60,"./it.js":60,"./ja":61,"./ja.js":61,"./jv":62,"./jv.js":62,"./ka":63,"./ka.js":63,"./kk":64,"./kk.js":64,"./km":65,"./km.js":65,"./ko":66,"./ko.js":66,"./ky":67,"./ky.js":67,"./lb":68,"./lb.js":68,"./lo":69,"./lo.js":69,"./lt":70,"./lt.js":70,"./lv":71,"./lv.js":71,"./me":72,"./me.js":72,"./mi":73,"./mi.js":73,"./mk":74,"./mk.js":74,"./ml":75,"./ml.js":75,"./mr":76,"./mr.js":76,"./ms":78,"./ms-my":77,"./ms-my.js":77,"./ms.js":78,"./my":79,"./my.js":79,"./nb":80,"./nb.js":80,"./ne":81,"./ne.js":81,"./nl":83,"./nl-be":82,"./nl-be.js":82,"./nl.js":83,"./nn":84,"./nn.js":84,"./pa-in":85,"./pa-in.js":85,"./pl":86,"./pl.js":86,"./pt":88,"./pt-br":87,"./pt-br.js":87,"./pt.js":88,"./ro":89,"./ro.js":89,"./ru":90,"./ru.js":90,"./se":91,"./se.js":91,"./si":92,"./si.js":92,"./sk":93,"./sk.js":93,"./sl":94,"./sl.js":94,"./sq":95,"./sq.js":95,"./sr":97,"./sr-cyrl":96,"./sr-cyrl.js":96,"./sr.js":97,"./ss":98,"./ss.js":98,"./sv":99,"./sv.js":99,"./sw":100,"./sw.js":100,"./ta":101,"./ta.js":101,"./te":102,"./te.js":102,"./tet":103,"./tet.js":103,"./th":104,"./th.js":104,"./tl-ph":105,"./tl-ph.js":105,"./tlh":106,"./tlh.js":106,"./tr":107,"./tr.js":107,"./tzl":108,"./tzl.js":108,"./tzm":110,"./tzm-latn":109,"./tzm-latn.js":109,"./tzm.js":110,"./uk":111,"./uk.js":111,"./uz":112,"./uz.js":112,"./vi":113,"./vi.js":113,"./x-pseudo":114,"./x-pseudo.js":114,"./zh-cn":115,"./zh-cn.js":115,"./zh-hk":116,"./zh-hk.js":116,"./zh-tw":117,"./zh-tw.js":117};a.keys=function(){return Object.keys(r)},a.resolve=n,s.exports=a,a.id=149},150:function(s,t,e){var a,n;e(148),a=e(118);var r=e(151);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,s.exports=a},151:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"main-container"},[_l(sortedDates,function(s,t){return _h("div",{staticClass:"day"},[_h("div",{staticClass:"header"},[_h("div",{staticClass:"date"},[_s(s)]),_h("button",{on:{click:function(t){taskAdd(s)}}},["+"])]),_h("div",{staticClass:"boxes"},[_l(allTasks[s],function(e,a){return _h("div",{staticClass:"box",class:{done:e.done,highlighted:e.highlighted&&!e.done&&0==t}},[_h("div",{staticClass:"text"},[_h("textarea",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"task.name"}],attrs:{contenteditable:"true"},domProps:{value:_s(e.name)},on:{input:function(s){s.target.composing||(e.name=s.target.value)}}})]),_h("div",{staticClass:"buttons"},[_h("div",{staticClass:"button",on:{click:function(s){e.done=!e.done}}},["Done"]),0==t?_h("div",{staticClass:"button",on:{click:function(s){e.highlighted=!e.highlighted}}},["Select"]):_e(),_h("div",{staticClass:"button",on:{click:function(t){allTasks[s].splice(a,1)}}},["Delete"])])])})])])})])},staticRenderFns:[]}}});
//# sourceMappingURL=app.cb6cd8e5136dc1185e64.js.map