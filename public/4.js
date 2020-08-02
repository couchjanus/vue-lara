(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Post.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Post.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_AppLayout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/AppLayout.vue */ "./resources/js/components/layouts/AppLayout.vue");
/* harmony import */ var _components_layouts_MainIntro_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/MainIntro.vue */ "./resources/js/components/layouts/MainIntro.vue");
/* harmony import */ var _components_layouts_MainSidebar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/MainSidebar.vue */ "./resources/js/components/layouts/MainSidebar.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Post",
  components: {
    AppLayout: _components_layouts_AppLayout_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MainIntro: _components_layouts_MainIntro_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    MainSidebar: _components_layouts_MainSidebar_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      post: {
        type: Object,
        "default": function _default() {
          return {};
        }
      }
    };
  },
  mounted: function mounted() {
    this.loadPost();
  },
  methods: {
    loadPost: function loadPost() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://127.0.0.1:8000/api/post/".concat(_this.$route.params.id)).then(function (response) {
                  _this.post = response.data.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Post.vue?vue&type=template&id=1833283f&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Post.vue?vue&type=template&id=1833283f& ***!
  \**************************************************************************************************************************************************************************************************/
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
  return _c("app-layout", {
    scopedSlots: _vm._u([
      {
        key: "intro",
        fn: function() {
          return [_c("MainIntro")]
        },
        proxy: true
      },
      {
        key: "default",
        fn: function() {
          return [
            _c("main", { staticClass: "main" }, [
              _c("section", { staticClass: "main-news" }, [
                _c("h2", { staticClass: "title" }, [
                  _vm._v(_vm._s(_vm.post.title))
                ]),
                _vm._v(" "),
                _c("article", [
                  _c("img", {
                    staticClass: "main-news-img",
                    attrs: { src: "" + _vm.post.cover_path, alt: "" }
                  }),
                  _vm._v(" "),
                  _c("h3", { staticClass: "article-title" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v(_vm._s(_vm.post.title))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "info-bar" }, [
                    _c("li", {}, [
                      _c("span", { staticClass: "text-muted" }, [_vm._v("by")]),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "color-black", attrs: { href: "#" } },
                        [_c("b", [_vm._v("Olivia Capzallo,")])]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v(_vm._s(_vm.post.craeted_at))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", { staticClass: "fas fa-bolt text-yellow" }),
                      _vm._v(" 30,190")
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", { staticClass: "fas fa-comments text-yellow" }),
                      _vm._v(" 47")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n                          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "footer-p-margin-20" }, [
                    _vm._v(
                      _vm._s(_vm.post.content) + "\n                      "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "section",
                  { staticClass: "comment-box" },
                  [
                    _c("h3", { staticClass: "comment-box-header" }, [
                      _vm._v(
                        "\n                          John\n                          "
                      ),
                      _c("span", { staticClass: "comment-box-date" }, [
                        _vm._v("Jan 24, 2018")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("comment", [
                      _vm._v(
                        "\n                          Thank's\n                      "
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "section",
                  { staticClass: "comment-box" },
                  [
                    _c("h3", { staticClass: "comment-box-header" }, [
                      _vm._v(
                        "\n                          Ali\n                          "
                      ),
                      _c("span", { staticClass: "comment-box-date" }, [
                        _vm._v("Jan 25, 2018")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("comment", [
                      _vm._v(
                        "\n                          It's great!!!!\n                      "
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "section",
                  { staticClass: "comment-box" },
                  [
                    _c("h3", { staticClass: "comment-box-header" }, [
                      _vm._v(
                        "\n                          mohammad\n                          "
                      ),
                      _c("span", { staticClass: "comment-box-date" }, [
                        _vm._v("Jan 28, 2018")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("comment", [
                      _vm._v(
                        "\n                          It's great!!!!\n                      "
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("form", { attrs: { action: "", method: "post" } }, [
                  _c("input", {
                    attrs: { name: "article_id", type: "hidden", value: "" }
                  }),
                  _vm._v(" "),
                  _c("textarea", {
                    staticClass: "comment",
                    attrs: {
                      name: "comment",
                      rows: "4",
                      required: "",
                      placeholder: "your comment ..."
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "submit",
                    attrs: { type: "submit", value: "store comment" }
                  })
                ])
              ])
            ])
          ]
        },
        proxy: true
      },
      {
        key: "sidebar",
        fn: function() {
          return [_c("MainSidebar")]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Post.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Post.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Post_vue_vue_type_template_id_1833283f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post.vue?vue&type=template&id=1833283f& */ "./resources/js/views/Post.vue?vue&type=template&id=1833283f&");
/* harmony import */ var _Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.vue?vue&type=script&lang=js& */ "./resources/js/views/Post.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Post_vue_vue_type_template_id_1833283f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Post_vue_vue_type_template_id_1833283f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Post.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Post.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Post.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Post.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Post.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Post.vue?vue&type=template&id=1833283f&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Post.vue?vue&type=template&id=1833283f& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_1833283f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Post.vue?vue&type=template&id=1833283f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Post.vue?vue&type=template&id=1833283f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_1833283f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_1833283f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);