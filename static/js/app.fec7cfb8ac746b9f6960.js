webpackJsonp([2,0],{0:function(e,s,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=t(170),o=a(n),i=t(168),r=a(i);new o.default({el:"#app",template:"<App/>",components:{App:r.default}})},134:function(e,s,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0});var n=t(135),o=a(n),i=t(136),r=a(i),l=t(1),d=a(l),c="allTasks",j="MMMM Do, YYYY";s.default={name:"app",data:function(){return{allTasks:{"December 3rd, 2003":[{name:"hello",done:!1,highlighted:!1}]},showHidden:!1}},created:function(){console.log("Created"),window.app=this,window.moment=d.default,this.load((0,d.default)().format(j)),self=this,window.addEventListener("storage",function(){self.load((0,d.default)().format(j))})},computed:{sortedDates:function(){return this.sortDates(this.allTasks)}},watch:{allTasks:{handler:function(e){this.save()},deep:!0}},methods:{sortDates:function(e){var s=(0,r.default)(e).map(function(e){var s=(0,d.default)(e,j).valueOf();return s});s.sort(),s.reverse(),s=s.map(function(e){var s=(0,d.default)(e),t=s.format(j);return t});var t=[],a=!0;for(var n in s)if(a)a=!1,t.push(s[n]);else{var o=s[n];e[o].length>0&&t.push(o)}return t},taskAdd:function(e){this.allTasks[e].push({name:"",done:!1,highlighted:!1,repeat:!1,hidden:!1})},toggleTaskState:function(e){e.done?(e.done=!1,e.highlighted=!1):e.highlighted?e.done=!0:e.highlighted=!0},toggleTaskRepeat:function(e){e.repeat?e.repeat=!1:e.repeat=!0,console.log(e)},save:function(){var e=(0,o.default)(this.allTasks);localStorage.setItem(c,e)},load:function(e){var s=((0,d.default)(e,j),localStorage.getItem(c)||"null"),t=JSON.parse(s);if(t){if(!t[e]){var a=[],n=this.sortDates(t)[0],o=t[n];for(var i in o)if((!o[i].done||o[i].repeat)&&!o[i].hidden){var r={};r.name=o[i].name,r.done=!1,r.highlighted=!1,r.repeat=o[i].repeat||!1,a.push(r)}t[e]=a}}else t={},t[e]=[];for(var l in t)for(var i in t[l])"highlighted"in t[l][i]||(t[l][i].highlighted=!1),t[l][i].repeat=t[l][i].repeat||!1,t[l][i].hidden=t[l][i].hidden||!1;this.allTasks=t},clear:function(){localStorage.removeItem(c)}}}},163:function(e,s){},164:function(e,s,t){function a(e){return t(n(e))}function n(e){return o[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var o={"./af":11,"./af.js":11,"./ar":18,"./ar-dz":12,"./ar-dz.js":12,"./ar-kw":13,"./ar-kw.js":13,"./ar-ly":14,"./ar-ly.js":14,"./ar-ma":15,"./ar-ma.js":15,"./ar-sa":16,"./ar-sa.js":16,"./ar-tn":17,"./ar-tn.js":17,"./ar.js":18,"./az":19,"./az.js":19,"./be":20,"./be.js":20,"./bg":21,"./bg.js":21,"./bm":22,"./bm.js":22,"./bn":23,"./bn.js":23,"./bo":24,"./bo.js":24,"./br":25,"./br.js":25,"./bs":26,"./bs.js":26,"./ca":27,"./ca.js":27,"./cs":28,"./cs.js":28,"./cv":29,"./cv.js":29,"./cy":30,"./cy.js":30,"./da":31,"./da.js":31,"./de":34,"./de-at":32,"./de-at.js":32,"./de-ch":33,"./de-ch.js":33,"./de.js":34,"./dv":35,"./dv.js":35,"./el":36,"./el.js":36,"./en-au":37,"./en-au.js":37,"./en-ca":38,"./en-ca.js":38,"./en-gb":39,"./en-gb.js":39,"./en-ie":40,"./en-ie.js":40,"./en-il":41,"./en-il.js":41,"./en-nz":42,"./en-nz.js":42,"./eo":43,"./eo.js":43,"./es":46,"./es-do":44,"./es-do.js":44,"./es-us":45,"./es-us.js":45,"./es.js":46,"./et":47,"./et.js":47,"./eu":48,"./eu.js":48,"./fa":49,"./fa.js":49,"./fi":50,"./fi.js":50,"./fo":51,"./fo.js":51,"./fr":54,"./fr-ca":52,"./fr-ca.js":52,"./fr-ch":53,"./fr-ch.js":53,"./fr.js":54,"./fy":55,"./fy.js":55,"./gd":56,"./gd.js":56,"./gl":57,"./gl.js":57,"./gom-latn":58,"./gom-latn.js":58,"./gu":59,"./gu.js":59,"./he":60,"./he.js":60,"./hi":61,"./hi.js":61,"./hr":62,"./hr.js":62,"./hu":63,"./hu.js":63,"./hy-am":64,"./hy-am.js":64,"./id":65,"./id.js":65,"./is":66,"./is.js":66,"./it":67,"./it.js":67,"./ja":68,"./ja.js":68,"./jv":69,"./jv.js":69,"./ka":70,"./ka.js":70,"./kk":71,"./kk.js":71,"./km":72,"./km.js":72,"./kn":73,"./kn.js":73,"./ko":74,"./ko.js":74,"./ky":75,"./ky.js":75,"./lb":76,"./lb.js":76,"./lo":77,"./lo.js":77,"./lt":78,"./lt.js":78,"./lv":79,"./lv.js":79,"./me":80,"./me.js":80,"./mi":81,"./mi.js":81,"./mk":82,"./mk.js":82,"./ml":83,"./ml.js":83,"./mn":84,"./mn.js":84,"./mr":85,"./mr.js":85,"./ms":87,"./ms-my":86,"./ms-my.js":86,"./ms.js":87,"./mt":88,"./mt.js":88,"./my":89,"./my.js":89,"./nb":90,"./nb.js":90,"./ne":91,"./ne.js":91,"./nl":93,"./nl-be":92,"./nl-be.js":92,"./nl.js":93,"./nn":94,"./nn.js":94,"./pa-in":95,"./pa-in.js":95,"./pl":96,"./pl.js":96,"./pt":98,"./pt-br":97,"./pt-br.js":97,"./pt.js":98,"./ro":99,"./ro.js":99,"./ru":100,"./ru.js":100,"./sd":101,"./sd.js":101,"./se":102,"./se.js":102,"./si":103,"./si.js":103,"./sk":104,"./sk.js":104,"./sl":105,"./sl.js":105,"./sq":106,"./sq.js":106,"./sr":108,"./sr-cyrl":107,"./sr-cyrl.js":107,"./sr.js":108,"./ss":109,"./ss.js":109,"./sv":110,"./sv.js":110,"./sw":111,"./sw.js":111,"./ta":112,"./ta.js":112,"./te":113,"./te.js":113,"./tet":114,"./tet.js":114,"./tg":115,"./tg.js":115,"./th":116,"./th.js":116,"./tl-ph":117,"./tl-ph.js":117,"./tlh":118,"./tlh.js":118,"./tr":119,"./tr.js":119,"./tzl":120,"./tzl.js":120,"./tzm":122,"./tzm-latn":121,"./tzm-latn.js":121,"./tzm.js":122,"./ug-cn":123,"./ug-cn.js":123,"./uk":124,"./uk.js":124,"./ur":125,"./ur.js":125,"./uz":127,"./uz-latn":126,"./uz-latn.js":126,"./uz.js":127,"./vi":128,"./vi.js":128,"./x-pseudo":129,"./x-pseudo.js":129,"./yo":130,"./yo.js":130,"./zh-cn":131,"./zh-cn.js":131,"./zh-hk":132,"./zh-hk.js":132,"./zh-tw":133,"./zh-tw.js":133};a.keys=function(){return Object.keys(o)},a.resolve=n,e.exports=a,a.id=164},168:function(e,s,t){var a,n;t(163),a=t(134);var o=t(169);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,e.exports=a},169:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"main-container"},[t("div",[t("button",{staticClass:"toggleHiddenButton",on:{click:function(s){e.showHidden=!e.showHidden}}},[e._v("Show hidden "),t("i",{staticClass:"fa",class:{"fa-toggle-on":e.showHidden,"fa-toggle-off":!e.showHidden}})])]),e._l(e.sortedDates,function(s,a){return t("div",{staticClass:"day",class:{today:0==a}},[t("div",{staticClass:"header"},[t("div",{staticClass:"date"},[e._v(e._s(s))]),t("button",{on:{click:function(t){e.taskAdd(s)}}},[e._v("+")])]),t("div",{staticClass:"boxes"},e._l(e.allTasks[s],function(s,a){return!s.hidden||e.showHidden?t("div",{staticClass:"box",class:{done:s.done,highlighted:s.highlighted&&!s.done}},[t("div",{staticClass:"text"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:s.name,expression:"task.name"}],attrs:{contenteditable:"true"},domProps:{value:s.name},on:{input:function(t){t.target.composing||e.$set(s,"name",t.target.value)}}})]),t("div",{staticClass:"buttons"},[t("i",{staticClass:"button fa fa-check",class:{selected:s.done},on:{click:function(e){s.done=!s.done}}}),t("i",{staticClass:"button fa fa-star",class:{selected:s.highlighted},on:{click:function(e){s.highlighted=!s.highlighted}}}),t("i",{staticClass:"button fa fa-repeat",class:{selected:s.repeat},on:{click:function(e){s.repeat=!s.repeat}}}),t("i",{staticClass:"button fa fa-trash",class:{selected:s.hidden},on:{click:function(e){s.hidden=!s.hidden}}})])]):e._e()}))])}),t("hr"),e._m(0)],2)},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("p",[e._v("Purpose: keep a long running todo list, keep track of what you worked on or completed over time. ")]),t("p",[e._v('Every not "completed" task that you add today will carry over to tomorrow.')]),t("p",[e._v('Only green tasks are "completed".')]),t("p",[e._v("If a task is recurring (the recurring symbol is on), then it will carry over to the next day even if it is completed today.")]),t("p",[e._v("Starring a task (making it blue) is just a visual aid. This can be used for keeping track of things worked on but not completed.")])])}]}}});
//# sourceMappingURL=app.fec7cfb8ac746b9f6960.js.map