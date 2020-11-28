(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0d7699"],{

/***/ "7769":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"558b6eed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/DetailRecord.vue?vue&type=template&id=796f6913&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.loading)?_c('Loader'):(_vm.record)?_c('div',[_c('div',{staticClass:"breadcrumb-wrap"},[_c('router-link',{staticClass:"breadcrumb",attrs:{"to":"/history"}},[_vm._v("История")]),(_vm.record.type === 'outcome')?_c('a',{staticClass:"breadcrumb"},[_vm._v(" Расход ")]):_c('a',{staticClass:"breadcrumb"},[_vm._v(" Доход ")])],1),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col s12 m6"},[_c('div',{staticClass:"card",class:{
					'red': _vm.record.type === 'outcome',
					'green': _vm.record.type === 'income',
					}},[_c('div',{staticClass:"card-content white-text"},[_c('p',[_vm._v("Описание: "+_vm._s(_vm.record.description))]),_c('p',[_vm._v("Сумма: "+_vm._s(_vm._f("currencyFilter")(_vm.record.amount)))]),_c('p',[_vm._v("Категория: "+_vm._s(_vm.record.categoryName))]),_c('small',[_vm._v(_vm._s(_vm._f("dateFilter")(_vm.record.date)))])])])])])]):_c('p',[_vm._v("Записи с id="+_vm._s(this.$route.params.id)+" не найдена")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/DetailRecord.vue?vue&type=template&id=796f6913&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/DetailRecord.vue?vue&type=script&lang=js&



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
/* harmony default export */ var DetailRecordvue_type_script_lang_js_ = ({
  name: 'detailRecord',
  data: function data() {
    return {
      loading: true,
      record: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var id, record, category;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = _this.$route.params.id; //получение id текущей записи из адресной строки

              _context.next = 3;
              return _this.$store.dispatch('fetchRecordsById', id);

            case 3:
              record = _context.sent;
              _context.next = 6;
              return _this.$store.dispatch('getCategoryById', record.categoryId);

            case 6:
              category = _context.sent;
              console.log(record);
              _this.record = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, record), {}, {
                categoryName: category.title
              });
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
// CONCATENATED MODULE: ./src/views/DetailRecord.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_DetailRecordvue_type_script_lang_js_ = (DetailRecordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/DetailRecord.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_DetailRecordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DetailRecord = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0d7699.a087da1a.js.map