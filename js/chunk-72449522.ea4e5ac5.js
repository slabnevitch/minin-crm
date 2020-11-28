(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-72449522"],{

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "6859":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"558b6eed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Planning.vue?vue&type=template&id=9cc7d8bc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"page-title"},[_c('h3',[_vm._v("Планирование")]),_c('h4',[_vm._v(_vm._s(_vm._f("currencyFilter")(_vm.info.bill)))])]),(_vm.loading)?_c('Loader'):(!_vm.categories.length)?_c('p',[_vm._v("Категорий пока нет "),_c('router-link',{attrs:{"to":"/categories"}},[_vm._v("Добавить новую категорию")])],1):_c('section',_vm._l((_vm.categories),function(cat){return _c('div',{key:cat.id},[_c('p',[_c('strong',[_vm._v(_vm._s(cat.title)+":")]),_vm._v(" "+_vm._s(_vm._f("currencyFilter")(cat.spend))+" из "+_vm._s(_vm._f("currencyFilter")(cat.limit))+" ")]),_c('div',{directives:[{name:"tooltip",rawName:"v-tooltip",value:(cat.tooltip),expression:"cat.tooltip"}],staticClass:"progress"},[_c('div',{staticClass:"determinate",style:({width: cat.progressPersent + '%', backgroundColor: cat.progressColor})})])])}),0)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Planning.vue?vue&type=template&id=9cc7d8bc&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/filters/currency.filter.js
var currency_filter = __webpack_require__("5bb3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Planning.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //мпорт фильтра для использования не в шаблоне компонента, а в коде (в теге script)

/* harmony default export */ var Planningvue_type_script_lang_js_ = ({
  name: 'planning',
  data: function data() {
    return {
      loading: true,
      categories: []
    };
  },
  computed: Object(vuex_esm["b" /* mapGetters */])(['info']),
  mounted: function mounted() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var records, categories;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch('fetchRecords');

            case 2:
              records = _context.sent;
              _context.next = 5;
              return _this.$store.dispatch('getCategories');

            case 5:
              categories = _context.sent;
              _this.categories = categories.map(function (cat) {
                var spend = records.filter(function (r) {
                  return r.categoryId === cat.id && r.type === "outcome";
                }) // .filter(r => r.type === "outcome")
                .reduce(function (total, record) {
                  return total += +record.amount;
                }, 0);
                var percent = 100 * spend / cat.limit;
                var progressPersent = percent > 100 ? 100 : percent;
                var progressColor = percent < 60 ? 'green' : percent < 100 ? 'yellow' : 'red';
                var tooltipValue = cat.limit - spend;
                var tooltip = tooltipValue < 0 ? "\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u043B\u0438\u043C\u0438\u0442\u0430 \u043D\u0430 ".concat(Object(currency_filter["a" /* default */])(Math.abs(tooltipValue))) : "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ".concat(Object(currency_filter["a" /* default */])(tooltipValue)); //использование фильтра не в хтмл-шаблоне, а в коде

                return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, cat), {}, {
                  spend: spend,
                  progressPersent: progressPersent,
                  progressColor: progressColor,
                  tooltip: tooltip
                });
              }); // const filteredCats = categories.map((cat) => {
              //   const ircom =  records.filter((record) =>{
              //     return record.categoryId === cat.id && record.type === "outcome"
              //   }).reduce((start, rec) => {
              //      // console.log(record)
              //     return start + rec.amount}, 0)
              //   return {
              //     ...cat,
              //     ircom
              //   }
              // })

              console.log(records);
              console.log(categories); // console.log(this.categories )
              // console.log( filteredCats)

              _this.loading = false;

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});
// CONCATENATED MODULE: ./src/views/Planning.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Planningvue_type_script_lang_js_ = (Planningvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Planning.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_Planningvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Planning = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ })

}]);
//# sourceMappingURL=chunk-72449522.ea4e5ac5.js.map