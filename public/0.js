(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AppLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/AppLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainHeader */ "./resources/js/components/layouts/MainHeader.vue");
/* harmony import */ var _MainFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainFooter */ "./resources/js/components/layouts/MainFooter.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppLayout",
  components: {
    MainHeader: _MainHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    MainFooter: _MainFooter__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Categories.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Categories.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Categories",
  data: function data() {
    return {
      categories: [],
      posts: [],
      category_id: null
    };
  },
  created: function created() {
    var _this = this;

    this.GET_CATEGORIES_API().then(function () {
      _this.categories = _this.CATEGORIES;
    });
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['CATEGORIES'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['GET_CATEGORIES_API']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainFooter.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/MainFooter.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MainFooter",
  data: function data() {
    return {
      year: new Date().getFullYear()
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/MainHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MainHeader",
  data: function data() {
    return {
      year: new Date().getFullYear()
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['IS_LOGGED'])),
  methods: {
    logout: function logout() {
      this.$store.dispatch('LOGOUT');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainSidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/MainSidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue */ "./resources/js/components/layouts/Categories.vue");
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MainSidebar",
  data: function data() {
    return {
      year: new Date().getFullYear()
    };
  },
  components: {
    Categories: _Categories_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AppLayout.vue?vue&type=template&id=fcf6a16c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/AppLayout.vue?vue&type=template&id=fcf6a16c& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "section",
        { staticClass: "app" },
        [
          _c("main-header"),
          _vm._v(" "),
          _c(
            "section",
            { staticClass: "content" },
            [
              _vm._t("intro"),
              _vm._v(" "),
              _c(
                "section",
                { staticClass: "container" },
                [
                  _vm._t("default"),
                  _vm._v(" "),
                  _vm._t("sidebar"),
                  _vm._v(" "),
                  _c("section", { staticClass: "clear-fix" })
                ],
                2
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("main-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Categories.vue?vue&type=template&id=8f9913e6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Categories.vue?vue&type=template&id=8f9913e6& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "sidebar-list" },
    _vm._l(_vm.categories, function(category) {
      return _c(
        "li",
        { key: category.id },
        [
          _c("router-link", { attrs: { to: "/category/" + category.id } }, [
            _vm._v(_vm._s(category.name))
          ])
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainFooter.vue?vue&type=template&id=0300dca5&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/MainFooter.vue?vue&type=template&id=0300dca5& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "footer" }, [
      _c("section", { staticClass: "app bg-map" }, [
        _c("section", { staticClass: "footer-row" }, [
          _c("section", { staticClass: "footer-col" }, [
            _c("img", {
              staticClass: "footer-logo",
              attrs: { src: "/images/logo-white.png", alt: "" }
            }),
            _vm._v(" "),
            _c("section", { staticClass: "clear-fix" }),
            _vm._v(" "),
            _c("p", { staticClass: "footer-p" }, [
              _vm._v(
                "Bit coin is an open-source, peer-to-peer, digital decentralized cryptocurrency. Powered by blockchain technology, its defining characteristic is"
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "footer-p footer-p-margin-20" }, [
              _vm._v(
                "\n                    Copyright 2019 All rights reserved | This template is made with "
              ),
              _c("i", {
                staticClass: "ion-heart",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" by "),
              _c("a", { attrs: { href: "#", target: "_blank" } }, [
                _vm._v("Colorlib")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("section", { staticClass: "footer-col" }, [
            _c("h3", { staticClass: "footer-section-title" }, [
              _vm._v("MOST POPULAR")
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "footer-section-link-item" }, [
              _c("a", { attrs: { href: "#" } }, [
                _vm._v("Its Make or Break Time for Bitcoin")
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Jan 25, 2018")])
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "footer-line" }),
            _vm._v(" "),
            _c("section", { staticClass: "footer-section-link-item" }, [
              _c("a", { attrs: { href: "#" } }, [
                _vm._v("Its Make or Break Time for Bitcoin")
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Jan 25, 2018")])
            ])
          ]),
          _vm._v(" "),
          _c("section", { staticClass: "footer-col" }, [
            _c("h3", { staticClass: "footer-section-title" }, [
              _vm._v("MOST POPULAR")
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "footer-section-link-item" }, [
              _c("a", { attrs: { href: "#" } }, [
                _vm._v("Its Make or Break Time for Bitcoin")
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Jan 25, 2018")])
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "footer-line" }),
            _vm._v(" "),
            _c("section", { staticClass: "footer-section-link-item" }, [
              _c("a", { attrs: { href: "#" } }, [
                _vm._v("Its Make or Break Time for Bitcoin")
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Jan 25, 2018")])
            ])
          ]),
          _vm._v(" "),
          _c("section", { staticClass: "clear-fix" })
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "footer-line" }),
        _vm._v(" "),
        _c("section", { staticClass: "footer-row" }, [
          _c("ul", { staticClass: "footer-menu" }, [
            _c("li", [
              _c("a", { attrs: { href: "" } }, [_vm._v("Terms & Conditions")])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "" } }, [_vm._v("Privacy policy")])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "" } }, [_vm._v("Jobs advertising")])
            ]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("Contact us")])])
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "footer-social-network" }, [
            _c("li", [
              _c("a", { attrs: { href: "" } }, [
                _c("i", { staticClass: "fab fa-facebook" })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "" } }, [
                _c("i", { staticClass: "fab fa-twitter" })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "" } }, [
                _c("i", { staticClass: "fab fa-google-plus-g" })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "" } }, [
                _c("i", { staticClass: "fab fa-instagram" })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "" } }, [
                _c("i", { staticClass: "fab fa-bitcoin" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("section", { staticClass: "clear-fix" })
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "clear-fix" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainHeader.vue?vue&type=template&id=24334097&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/MainHeader.vue?vue&type=template&id=24334097& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", [
    _c("nav", { staticClass: "header" }, [
      _c("img", {
        staticClass: "header-logo",
        attrs: { src: "/images/logo-black.png", alt: "" }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("ul", { staticClass: "header-menu", attrs: { id: "menu" } }, [
        _c(
          "li",
          { staticClass: "header-menu-item" },
          [
            _c(
              "router-link",
              { staticClass: "header-menu-item-link", attrs: { to: "/" } },
              [_vm._v("Home")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "header-menu-item" },
          [
            _c(
              "router-link",
              { staticClass: "header-menu-item-link", attrs: { to: "/about" } },
              [_vm._v("About")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "header-menu-item" },
          [
            _vm.IS_LOGGED
              ? _c(
                  "router-link",
                  {
                    staticClass: "header-menu-item-link",
                    attrs: { to: "/profile" }
                  },
                  [_vm._v("Profile")]
                )
              : _c(
                  "router-link",
                  {
                    staticClass: "header-menu-item-link",
                    attrs: { to: "/signin" }
                  },
                  [_vm._v("Login")]
                )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "header-menu-item" },
          [
            !_vm.IS_LOGGED
              ? _c(
                  "router-link",
                  {
                    staticClass: "header-menu-item-link",
                    attrs: { to: { name: "Register" } }
                  },
                  [_vm._v("Register")]
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "header-menu-item" }, [
          _vm.IS_LOGGED
            ? _c(
                "button",
                {
                  staticClass: "header-menu-item-link",
                  on: {
                    click: function($event) {
                      return _vm.logout()
                    }
                  }
                },
                [_vm._v("Logout")]
              )
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "clear-fix" })
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "header-menu-burger",
        attrs: { onclick: "showMenu()", type: "button" }
      },
      [_c("i", { staticClass: "fas fa-bars" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "header-menu-item" }, [
      _c("a", { staticClass: "header-menu-item-link", attrs: { href: "" } }, [
        _vm._v("NEWS")
      ]),
      _vm._v(" "),
      _c("span", [
        _c("a", { attrs: { href: "#" } }, [_vm._v("sub menu 1")]),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [_vm._v("sub menu 2")]),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [_vm._v("sub menu 3")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "header-menu-item" }, [
      _c("a", { staticClass: "header-menu-item-link", attrs: { href: "" } }, [
        _vm._v("EVENTS")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainSidebar.vue?vue&type=template&id=05c53442&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/MainSidebar.vue?vue&type=template&id=05c53442& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", { staticClass: "sidebar" }, [
    _c("section", { staticClass: "sidebar-item" }, [_c("Categories")], 1),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "sidebar-item" }, [
      _c("h2", { staticClass: "title" }, [_vm._v("POPULAR POSTS")]),
      _vm._v(" "),
      _c("section", { staticClass: "popular-post" }, [
        _c("img", {
          staticClass: "popular-post-img",
          attrs: { src: "/images/polular-1-100x100.jpg", alt: "" }
        }),
        _vm._v(" "),
        _c("section", { staticClass: "popular-post-title" }, [
          _c("h3", [
            _c("a", { attrs: { href: "#" } }, [
              _c("b", [_vm._v("Bitcoin Billionares Hidding in Plain Sight")])
            ])
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "info-bar" }, [
            _c("li", {}, [
              _c("span", { staticClass: "text-muted" }, [_vm._v("by")]),
              _vm._v(" "),
              _c("a", { staticClass: "color-black", attrs: { href: "#" } }, [
                _c("b", [_vm._v("Olivia Capzallo,")])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text-muted" }, [
                _vm._v("Jan 25, 2018")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "clear-fix" })
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "popular-post" }, [
        _c("img", {
          staticClass: "popular-post-img",
          attrs: { src: "/images/polular-2-100x100.jpg", alt: "" }
        }),
        _vm._v(" "),
        _c("section", { staticClass: "popular-post-title" }, [
          _c("h3", [
            _c("a", { attrs: { href: "#" } }, [
              _c("b", [_vm._v("Bitcoin Billionares Hidding in Plain Sight")])
            ])
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "info-bar" }, [
            _c("li", {}, [
              _c("span", { staticClass: "text-muted" }, [_vm._v("by")]),
              _vm._v(" "),
              _c("a", { staticClass: "color-black", attrs: { href: "#" } }, [
                _c("b", [_vm._v("Olivia Capzallo,")])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text-muted" }, [
                _vm._v("Jan 25, 2018")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "clear-fix" })
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "popular-post" }, [
        _c("img", {
          staticClass: "popular-post-img",
          attrs: { src: "/images/polular-3-100x100.jpg", alt: "" }
        }),
        _vm._v(" "),
        _c("section", { staticClass: "popular-post-title" }, [
          _c("h3", [
            _c("a", { attrs: { href: "#" } }, [
              _c("b", [_vm._v("Bitcoin Billionares Hidding in Plain Sight")])
            ])
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "info-bar" }, [
            _c("li", {}, [
              _c("span", { staticClass: "text-muted" }, [_vm._v("by")]),
              _vm._v(" "),
              _c("a", { staticClass: "color-black", attrs: { href: "#" } }, [
                _c("b", [_vm._v("Olivia Capzallo,")])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text-muted" }, [
                _vm._v("Jan 25, 2018")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "clear-fix" })
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "popular-post" }, [
        _c("img", {
          staticClass: "popular-post-img",
          attrs: { src: "/images/polular-4-100x100.jpg", alt: "" }
        }),
        _vm._v(" "),
        _c("section", { staticClass: "popular-post-title" }, [
          _c("h3", [
            _c("a", { attrs: { href: "#" } }, [
              _c("b", [_vm._v("Bitcoin Billionares Hidding in Plain Sight")])
            ])
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "info-bar" }, [
            _c("li", {}, [
              _c("span", { staticClass: "text-muted" }, [_vm._v("by")]),
              _vm._v(" "),
              _c("a", { staticClass: "color-black", attrs: { href: "#" } }, [
                _c("b", [_vm._v("Olivia Capzallo,")])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text-muted" }, [
                _vm._v("Jan 25, 2018")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "clear-fix" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "sidebar-item" }, [
      _c("h2", { staticClass: "title" }, [_vm._v("NEWSLETTER")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Subscribe to our newsletter to get notification about new updates,\n                    information, discount, etc.."
        )
      ]),
      _vm._v(" "),
      _c("form", { staticClass: "subscribe-form" }, [
        _c("input", {
          staticClass: "subscribe-form-text",
          attrs: { type: "text", placeholder: "Your email" }
        }),
        _vm._v(" "),
        _c("button", { attrs: { type: "button" } }, [_vm._v("b")]),
        _vm._v(" "),
        _c("section", { staticClass: "clear-fix" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/AppLayout.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/layouts/AppLayout.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLayout_vue_vue_type_template_id_fcf6a16c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=template&id=fcf6a16c& */ "./resources/js/components/layouts/AppLayout.vue?vue&type=template&id=fcf6a16c&");
/* harmony import */ var _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/AppLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLayout_vue_vue_type_template_id_fcf6a16c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppLayout_vue_vue_type_template_id_fcf6a16c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/AppLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/AppLayout.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/layouts/AppLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AppLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/AppLayout.vue?vue&type=template&id=fcf6a16c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/layouts/AppLayout.vue?vue&type=template&id=fcf6a16c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_fcf6a16c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppLayout.vue?vue&type=template&id=fcf6a16c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AppLayout.vue?vue&type=template&id=fcf6a16c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_fcf6a16c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_fcf6a16c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Categories.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/layouts/Categories.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_8f9913e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=8f9913e6& */ "./resources/js/components/layouts/Categories.vue?vue&type=template&id=8f9913e6&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_8f9913e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_8f9913e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Categories.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/layouts/Categories.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Categories.vue?vue&type=template&id=8f9913e6&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/layouts/Categories.vue?vue&type=template&id=8f9913e6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_8f9913e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=8f9913e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Categories.vue?vue&type=template&id=8f9913e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_8f9913e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_8f9913e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/MainFooter.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/layouts/MainFooter.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainFooter_vue_vue_type_template_id_0300dca5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainFooter.vue?vue&type=template&id=0300dca5& */ "./resources/js/components/layouts/MainFooter.vue?vue&type=template&id=0300dca5&");
/* harmony import */ var _MainFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/MainFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainFooter_vue_vue_type_template_id_0300dca5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainFooter_vue_vue_type_template_id_0300dca5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/MainFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/MainFooter.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/layouts/MainFooter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/MainFooter.vue?vue&type=template&id=0300dca5&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/layouts/MainFooter.vue?vue&type=template&id=0300dca5& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainFooter_vue_vue_type_template_id_0300dca5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainFooter.vue?vue&type=template&id=0300dca5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainFooter.vue?vue&type=template&id=0300dca5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainFooter_vue_vue_type_template_id_0300dca5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainFooter_vue_vue_type_template_id_0300dca5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/MainHeader.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/layouts/MainHeader.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainHeader_vue_vue_type_template_id_24334097___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainHeader.vue?vue&type=template&id=24334097& */ "./resources/js/components/layouts/MainHeader.vue?vue&type=template&id=24334097&");
/* harmony import */ var _MainHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/MainHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainHeader_vue_vue_type_template_id_24334097___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainHeader_vue_vue_type_template_id_24334097___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/MainHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/MainHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/layouts/MainHeader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/MainHeader.vue?vue&type=template&id=24334097&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/layouts/MainHeader.vue?vue&type=template&id=24334097& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_template_id_24334097___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainHeader.vue?vue&type=template&id=24334097& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainHeader.vue?vue&type=template&id=24334097&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_template_id_24334097___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_template_id_24334097___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/MainSidebar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/layouts/MainSidebar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainSidebar_vue_vue_type_template_id_05c53442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainSidebar.vue?vue&type=template&id=05c53442& */ "./resources/js/components/layouts/MainSidebar.vue?vue&type=template&id=05c53442&");
/* harmony import */ var _MainSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainSidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/MainSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainSidebar_vue_vue_type_template_id_05c53442___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainSidebar_vue_vue_type_template_id_05c53442___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/MainSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/MainSidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/layouts/MainSidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/MainSidebar.vue?vue&type=template&id=05c53442&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/layouts/MainSidebar.vue?vue&type=template&id=05c53442& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSidebar_vue_vue_type_template_id_05c53442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainSidebar.vue?vue&type=template&id=05c53442& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/MainSidebar.vue?vue&type=template&id=05c53442&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSidebar_vue_vue_type_template_id_05c53442___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSidebar_vue_vue_type_template_id_05c53442___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);