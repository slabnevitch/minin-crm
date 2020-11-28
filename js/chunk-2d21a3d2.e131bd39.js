(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d21a3d2"],{

/***/ "bb51":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"558b6eed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=template&id=5c0a028f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"page-title"},[_c('h3',[_vm._v("Счет")]),_c('button',{staticClass:"btn waves-effect waves-light btn-small",on:{"click":_vm.refresh}},[_c('i',{staticClass:"material-icons"},[_vm._v("refresh")])])]),(_vm.loading)?_c('Loader'):_c('div',{staticClass:"row"},[_c('HomeBill',{attrs:{"rates":_vm.currency.rates}}),_c('HomeCurrency',{attrs:{"currency":_vm.currency}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=template&id=5c0a028f&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"558b6eed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HomeBill.vue?vue&type=template&id=ee65bfb0&
var HomeBillvue_type_template_id_ee65bfb0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col s12 m6 l4"},[_c('div',{staticClass:"card light-blue bill-card"},[_c('div',{staticClass:"card-content white-text"},[_c('span',{staticClass:"card-title"},[_vm._v("Счет в валюте")]),_vm._l((_vm.currencies),function(item){return _c('p',{key:item,staticClass:"currency-line"},[_c('span',[_vm._v(_vm._s(_vm._f("currencyFilter")(_vm.getCurrency(item),item)))])])})],2)])])}
var HomeBillvue_type_template_id_ee65bfb0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/HomeBill.vue?vue&type=template&id=ee65bfb0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HomeBill.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HomeBillvue_type_script_lang_js_ = ({
  props: ['rates'],
  data: function data() {
    return {
      currencies: ['RUB', 'USD', 'EUR']
    };
  },
  mounted: function mounted() {// console.log(currencyFilter(this.$store.getters.info.bill))
  },
  computed: {
    base: function base() {
      return this.$store.getters.info.bill / (this.rates.RUB / this.rates.EUR); //получение количества денег у текущего (зарегистрированного) пользователя
      //преобразованное к рублям
    }
  },
  methods: {
    getCurrency: function getCurrency(currency) {
      // console.log(this.base )
      return Math.floor(this.base * this.rates[currency]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/HomeBill.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeBillvue_type_script_lang_js_ = (HomeBillvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/HomeBill.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeBillvue_type_script_lang_js_,
  HomeBillvue_type_template_id_ee65bfb0_render,
  HomeBillvue_type_template_id_ee65bfb0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HomeBill = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"558b6eed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HomeCurrency.vue?vue&type=template&id=34b73944&
var HomeCurrencyvue_type_template_id_34b73944_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col s12 m6 l8"},[_c('div',{staticClass:"card orange darken-3 bill-card"},[_c('div',{staticClass:"card-content white-text"},[_vm._m(0),_c('table',[_vm._m(1),_c('tbody',_vm._l((_vm.currencies),function(rate){return _c('tr',{key:rate},[_c('td',[_vm._v(_vm._s(rate))]),_c('td',[_vm._v(_vm._s(_vm.currency.rates[rate]))]),_c('td',[_vm._v(_vm._s(_vm.currency.date))])])}),0)])])])])}
var HomeCurrencyvue_type_template_id_34b73944_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('span',{staticClass:"card-title"},[_vm._v("Курс валют")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Валюта")]),_c('th',[_vm._v("Курс")]),_c('th',[_vm._v("Дата")])])])}]


// CONCATENATED MODULE: ./src/components/HomeCurrency.vue?vue&type=template&id=34b73944&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HomeCurrency.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HomeCurrencyvue_type_script_lang_js_ = ({
  props: ['currency'],
  data: function data() {
    return {
      currencies: ['RUB', 'USD', 'EUR'] // currencies: []

    };
  },
  mounted: function mounted() {
    console.log(this.currency.rates);
  }
});
// CONCATENATED MODULE: ./src/components/HomeCurrency.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeCurrencyvue_type_script_lang_js_ = (HomeCurrencyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/HomeCurrency.vue





/* normalize component */

var HomeCurrency_component = Object(componentNormalizer["a" /* default */])(
  components_HomeCurrencyvue_type_script_lang_js_,
  HomeCurrencyvue_type_template_id_34b73944_render,
  HomeCurrencyvue_type_template_id_34b73944_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HomeCurrency = (HomeCurrency_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js&


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


/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  name: 'Home',
  data: function data() {
    return {
      loading: true,
      currency: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch('fetchCurrency');

            case 2:
              _this.currency = _context.sent;
              console.log(_this.currency);
              _this.loading = false;
              console.log(_this.loading);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  components: {
    HomeBill: HomeBill,
    HomeCurrency: HomeCurrency
  },
  methods: {
    refresh: function refresh() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                _context2.next = 3;
                return _this2.$store.dispatch('fetchCurrency');

              case 3:
                _this2.currency = _context2.sent;
                _this2.loading = false;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/Home.vue





/* normalize component */

var Home_component = Object(componentNormalizer["a" /* default */])(
  views_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (Home_component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d21a3d2.e131bd39.js.map