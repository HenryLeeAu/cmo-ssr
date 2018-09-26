exports.ids = [1];
exports.modules = {

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Article = __webpack_require__(53);

var _Article2 = _interopRequireDefault(_Article);

var _SiteWrapperWithRHS = __webpack_require__(46);

var _SiteWrapperWithRHS2 = _interopRequireDefault(_SiteWrapperWithRHS);

var _reactRedux = __webpack_require__(4);

var _actions = __webpack_require__(2);

var _SiteTitlePrefix = __webpack_require__(52);

var _SiteTitlePrefix2 = _interopRequireDefault(_SiteTitlePrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticlePage = function (_Component) {
  _inherits(ArticlePage, _Component);

  function ArticlePage() {
    _classCallCheck(this, ArticlePage);

    return _possibleConstructorReturn(this, (ArticlePage.__proto__ || Object.getPrototypeOf(ArticlePage)).apply(this, arguments));
  }

  _createClass(ArticlePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.mainContent.InitialSSR) this.props.fetchArticle(this.props.match);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.clearData();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.mainContent.InitialSSR === nextProps.mainContent.InitialSSR;
    }
  }, {
    key: 'render',
    value: function render() {

      console.log('article');
      return _react2.default.createElement(_Article2.default, _extends({}, this.props.mainContent.response.main, { SiteTitlePrefix: _SiteTitlePrefix2.default }));
    }
  }]);

  return ArticlePage;
}(_react.Component);

function mapStateToProps(_ref) {
  var mainContent = _ref.mainContent;

  return {
    mainContent: mainContent
  };
}
function loadData(store, match) {
  return store.dispatch((0, _actions.fetchArticle)(match));
}
/*
export default {
  loadData, 
  component: SiteWrapperWithRHS(connect(mapStateToProps, { fetchArticle,clearData })(ArticlePage))

};*/
exports.default = (0, _SiteWrapperWithRHS2.default)((0, _reactRedux.connect)(mapStateToProps, { fetchArticle: _actions.fetchArticle, clearData: _actions.clearData })(ArticlePage));

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--section style---
//headerUpperCase  
//headerSizeLg 
//sectionBorder
//sectionBgGrey

var Header = _styledComponents2.default.h2.withConfig({
  displayName: 'SectionBase__Header',
  componentId: 'sc-24gnx8-0'
})(['border-bottom:1px solid #c22b70;color:#c22b70;text-transform:', ';font-size:', ';letter-spacing:0;font-weight:700;margin:0 0 20px 0;text-align:left;padding:0 0 5px;'], function (_ref) {
  var headerUpperCase = _ref.headerUpperCase;
  return headerUpperCase ? 'uppercase' : 'lowercase';
}, function (_ref2) {
  var headerSizeLg = _ref2.headerSizeLg;
  return headerSizeLg ? '28px' : '12px';
});
var Warp = _styledComponents2.default.div.withConfig({
  displayName: 'SectionBase__Warp',
  componentId: 'sc-24gnx8-1'
})(['border:', ';padding:', ';border-radius:', ';box-shadow:', ';background-color:', ';margin-bottom:20px;ul{list-style:none;margin-bottom:15px;li{margin-bottom:15px;a{color:#000;font-size:13px}h3{font-weight:700;margin:0;line-height:1.3;a{font-size:17px;}&.small{a{font-size:13px;font-weight:normal;}}span{&.tag{font-weight:700;color:#000;&::after{content:\' | \';font-weight:100;color:#555;}}}}p{margin:5px 0;color:#777;font-size:13px;line-height:1.3;}.author{color:#ccc;font-weight:bold;}}&.disc{list-style-type:disc;color:#c22b70;padding-left:25px;li{margin-bottom:8px;}}}'], function (_ref3) {
  var sectionBorder = _ref3.sectionBorder;
  return sectionBorder ? '1px solid #ddd' : false;
}, function (_ref4) {
  var sectionBorder = _ref4.sectionBorder;
  return sectionBorder ? '15px' : false;
}, function (_ref5) {
  var sectionBorder = _ref5.sectionBorder;
  return sectionBorder ? '5px' : false;
}, function (_ref6) {
  var sectionBorder = _ref6.sectionBorder;
  return sectionBorder ? '0 2px 0 rgba(0,0,0,.1)' : false;
}, function (_ref7) {
  var sectionBgGrey = _ref7.sectionBgGrey;
  return sectionBgGrey ? 'rgb(250, 251, 251);' : false;
});

exports.default = function (_ref8) {
  var header = _ref8.header,
      _ref8$headerUpperCase = _ref8.headerUpperCase,
      headerUpperCase = _ref8$headerUpperCase === undefined ? false : _ref8$headerUpperCase,
      _ref8$headerSizeLg = _ref8.headerSizeLg,
      headerSizeLg = _ref8$headerSizeLg === undefined ? false : _ref8$headerSizeLg,
      _ref8$sectionBorder = _ref8.sectionBorder,
      sectionBorder = _ref8$sectionBorder === undefined ? false : _ref8$sectionBorder,
      _ref8$sectionBgGrey = _ref8.sectionBgGrey,
      sectionBgGrey = _ref8$sectionBgGrey === undefined ? false : _ref8$sectionBgGrey,
      children = _ref8.children;

  return _react2.default.createElement(
    Warp,
    { sectionBorder: sectionBorder, sectionBgGrey: sectionBgGrey },
    header && _react2.default.createElement(
      Header,
      { headerUpperCase: headerUpperCase, headerSizeLg: headerSizeLg },
      header
    ),
    children
  );
};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(11);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(13);

var _Footer2 = _interopRequireDefault(_Footer);

var _RHS = __webpack_require__(47);

var _RHS2 = _interopRequireDefault(_RHS);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LHR = _styledComponents2.default.div.withConfig({
  displayName: "SiteWrapperWithRHS__LHR",
  componentId: "bylbeu-0"
})(["min-height:10px;"]);

exports.default = function (MainContent) {
  var SiteWrapperWithRHS = function (_PureComponent) {
    _inherits(SiteWrapperWithRHS, _PureComponent);

    function SiteWrapperWithRHS() {
      _classCallCheck(this, SiteWrapperWithRHS);

      return _possibleConstructorReturn(this, (SiteWrapperWithRHS.__proto__ || Object.getPrototypeOf(SiteWrapperWithRHS)).apply(this, arguments));
    }

    _createClass(SiteWrapperWithRHS, [{
      key: "render",
      value: function render() {

        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "div",
                { className: "col-8" },
                _react2.default.createElement(
                  LHR,
                  null,
                  _react2.default.createElement(MainContent, this.props)
                )
              ),
              _react2.default.createElement(_RHS2.default, null)
            )
          ),
          _react2.default.createElement(_Footer2.default, null)
        );
      }
    }]);

    return SiteWrapperWithRHS;
  }(_react.PureComponent);

  return (0, _index2.default)((0, _reactRouterDom.withRouter)(SiteWrapperWithRHS));
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _Popular = __webpack_require__(48);

var _Popular2 = _interopRequireDefault(_Popular);

var _FeaturedWhitepaper = __webpack_require__(49);

var _FeaturedWhitepaper2 = _interopRequireDefault(_FeaturedWhitepaper);

var _WebEvents = __webpack_require__(50);

var _WebEvents2 = _interopRequireDefault(_WebEvents);

var _Twitter = __webpack_require__(51);

var _Twitter2 = _interopRequireDefault(_Twitter);

var _GoogleAd = __webpack_require__(12);

var _GoogleAd2 = _interopRequireDefault(_GoogleAd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RHS = function (_Component) {
  _inherits(RHS, _Component);

  function RHS() {
    _classCallCheck(this, RHS);

    return _possibleConstructorReturn(this, (RHS.__proto__ || Object.getPrototypeOf(RHS)).apply(this, arguments));
  }

  _createClass(RHS, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.mainContent.InitialSSR === nextProps.mainContent.InitialSSR;
    }
  }, {
    key: 'render',
    value: function render() {
      var response = this.props.mainContent.response;

      return _react2.default.createElement(
        'div',
        { className: 'col-4' },
        _react2.default.createElement(
          'div',
          { className: 'rhs-box' },
          _react2.default.createElement(
            'a',
            { href: '# ', className: 'radius hidden block' },
            _react2.default.createElement('img', { className: 'full-width ', src: 'https://demo.idg.com.au/cmo/cmo50/2018/cmo50_promo2018_0813.jpg' })
          )
        ),
        response.rhs !== undefined && _react2.default.createElement(_Popular2.default, response.rhs.sections.popular),
        response.rhs !== undefined && _react2.default.createElement(_FeaturedWhitepaper2.default, response.rhs.sections.featuredWhitepaper),
        response.rhs !== undefined && _react2.default.createElement(_WebEvents2.default, response.rhs.sections.webEvents),
        _react2.default.createElement(_Twitter2.default, null),
        _react2.default.createElement(_GoogleAd2.default, { adSlot: 17 })
      );
    }
  }]);

  return RHS;
}(_react.Component);

function mapStateToProps(state) {
  return {
    mainContent: state.mainContent
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(RHS);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionBase = __webpack_require__(45);

var _SectionBase2 = _interopRequireDefault(_SectionBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ul = _styledComponents2.default.ul.withConfig({
  displayName: 'Popular__Ul',
  componentId: 'sc-1su28nc-0'
})(['position:relative;li{padding-left:30px;&::before{counter-increment:li;font-style:italic;font-weight:bold;font-size:1.3em;width:22px;line-height:22px;display:inline-block;text-align:center;background:#0089c5;color:#fff;margin-right:5px;border-radius:15px;position:absolute;left:0}&:nth-child(1){&::before{content:\'1\';}}&:nth-child(2){&::before{opacity:0.8;content:\'2\';}}&:nth-child(3){&::before{opacity:0.7;content:\'3\';}}&:nth-child(4){&::before{opacity:0.6;content:\'4\';}}&:nth-child(5){&::before{opacity:0.5;content:\'5\';}}}']);

exports.default = function (props) {

  return _react2.default.createElement(
    _SectionBase2.default,
    {
      header: 'Popular',
      headerUpperCase: true,
      sectionBorder: true,
      sectionBgGrey: true },
    _react2.default.createElement(
      Ul,
      null,
      props.list && props.list.map(function (article, index) {
        var title = article.title,
            id = article.id,
            slug = article.slug;

        return _react2.default.createElement(
          'li',
          { key: '' + index + slug },
          _react2.default.createElement(
            'a',
            {
              href: 'https://www.cmo.com.au/' + props.category + '/' + id + '/' + slug,
              title: title },
            title
          )
        );
      })
    )
  );
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionBase = __webpack_require__(45);

var _SectionBase2 = _interopRequireDefault(_SectionBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Con = _styledComponents2.default.div.withConfig({
  displayName: 'FeaturedWhitepaper__Con',
  componentId: 'y9alda-0'
})(['margin-left:75px;']);

exports.default = function (props) {

  return _react2.default.createElement(
    _SectionBase2.default,
    {
      header: 'Featured Whitepapers',
      headerUpperCase: true,
      sectionBorder: true,
      sectionBgGrey: true },
    _react2.default.createElement(
      'ul',
      null,
      props.list && props.list.map(function (article, index) {
        var title = article.title,
            id = article.id,
            slug = article.slug,
            description = article.description,
            imageUrl = article.imageUrl;

        var articleLink = 'https://www.cmo.com.au/' + props.category + '/' + id + '/' + slug;
        return _react2.default.createElement(
          'li',
          { className: 'cf', key: '' + index + slug },
          _react2.default.createElement(
            'a',
            {
              href: articleLink,
              title: title },
            _react2.default.createElement('img', { className: 'float-left img-shadow', src: imageUrl })
          ),
          _react2.default.createElement(
            Con,
            null,
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: articleLink,
                  title: title },
                title
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              description
            )
          )
        );
      })
    ),
    _react2.default.createElement(
      'a',
      { className: 'btn-more', href: '#' },
      ' More Whitepapers \u203A '
    )
  );
};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SectionBase = __webpack_require__(45);

var _SectionBase2 = _interopRequireDefault(_SectionBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Con = _styledComponents2.default.div.withConfig({
  displayName: 'WebEvents__Con',
  componentId: 'sc-1wa5n4e-0'
})(['display:inline-block;width:74%;vertical-align:middle;']);
var A = _styledComponents2.default.a.withConfig({
  displayName: 'WebEvents__A',
  componentId: 'sc-1wa5n4e-1'
})(['display:inline-block;width:25%;vertical-align:middle;img{width:80%;}']);
var Li = _styledComponents2.default.li.withConfig({
  displayName: 'WebEvents__Li',
  componentId: 'sc-1wa5n4e-2'
})(['vertical-align:middle;']);
var Img = _styledComponents2.default.img.withConfig({
  displayName: 'WebEvents__Img',
  componentId: 'sc-1wa5n4e-3'
})(['']);

exports.default = function (props) {
  return _react2.default.createElement(
    _SectionBase2.default,
    {
      header: 'Web Events',
      headerUpperCase: true,
      sectionBorder: true,
      sectionBgGrey: true },
    _react2.default.createElement(
      'ul',
      null,
      props.list && props.list.map(function (article, index) {
        var title = article.title,
            id = article.id,
            slug = article.slug,
            sponsor = article.sponsor,
            subCategory = article.subCategory,
            imageUrl = article.imageUrl;

        var articleLink = 'https://www.cmo.com.au/' + props.category + '/' + id + '/' + slug + '/' + subCategory;
        return _react2.default.createElement(
          Li,
          { key: '' + index + slug },
          _react2.default.createElement(
            A,
            {
              href: articleLink,
              title: title },
            _react2.default.createElement('img', { className: 'float-left', src: imageUrl, alt: 'Sponsor ' + sponsor })
          ),
          _react2.default.createElement(
            Con,
            null,
            _react2.default.createElement(
              'h3',
              { className: 'small' },
              _react2.default.createElement(
                'a',
                {
                  href: articleLink,
                  title: title },
                title
              )
            )
          )
        );
      })
    )
  );
};

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Twitter = function (_PureComponent) {
  _inherits(Twitter, _PureComponent);

  function Twitter(props) {
    _classCallCheck(this, Twitter);

    return _possibleConstructorReturn(this, (Twitter.__proto__ || Object.getPrototypeOf(Twitter)).call(this, props));
  }

  _createClass(Twitter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var promose = new Promise(function (resolve, reject) {
        var interval = setInterval(function () {
          if (window.twttr) {
            resolve();
            clearInterval(interval);
          }
        }, 0.03);
      });
      promose.then(function () {
        return window.twttr.widgets.load(_this2.twitterElement);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      console.log('call twitter');

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement('script', { async: true, src: 'https://platform.twitter.com/widgets.js', charset: 'utf-8' })
        ),
        _react2.default.createElement(
          'a',
          { className: 'twitter-timeline', ref: function ref(widget) {
              return _this3.twitterElement = widget;
            }, 'data-height': '640', href: 'https://twitter.com/CMOAustralia?ref_src=twsrc%5Etfw' },
          'Tweets by CMOAustralia'
        )
      );
    }
  }]);

  return Twitter;
}(_react.PureComponent);

exports.default = Twitter;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var SiteTitlePrefix = function SiteTitlePrefix(str) {

  return str !== undefined ? "CMO - " + str : "CMO";
};
exports.default = SiteTitlePrefix;

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactHelmet = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _styledComponents2.default.h1.withConfig({
  displayName: 'Article__Header',
  componentId: 'sc-18j0ryw-0'
})(['font-size:39px;font-weight:normal;line-height:1.2;margin:0;']);
var HeaderDescription = _styledComponents2.default.p.withConfig({
  displayName: 'Article__HeaderDescription',
  componentId: 'sc-18j0ryw-1'
})(['font-size:19px;color:#777;margin:0 0 15px;']);
var Author = _styledComponents2.default.p.withConfig({
  displayName: 'Article__Author',
  componentId: 'sc-18j0ryw-2'
})(['list-style-type:none;padding:0;margin:0 0 10px;font-size:13px;border-top:0 solid #ddd;text-transform:uppercase;color:#999;font-weight:400;']);
var ImageWrapper = _styledComponents2.default.figure.withConfig({
  displayName: 'Article__ImageWrapper',
  componentId: 'sc-18j0ryw-3'
})(['padding:0;margin:0;text-align:center;img{max-width:100%;display:inline-block;}figcaption{color:#888;font-weight:normal;font-size:0.85em;padding:5px 20px 5px 20px;text-align:center;border-bottom:1px solid #eee;}']);
var Tags = _styledComponents2.default.aside.withConfig({
  displayName: 'Article__Tags',
  componentId: 'sc-18j0ryw-4'
})(['font-style:italic;ul{list-style:none;margin:0;padding:0;li{display:inline-block;a{display:inline-block;font-size:.85em;background:#f3f3f3;color:#555;padding:5px 10px;margin:0 0 5px 5px;border-radius:15px;transition:all .1s ease-in;&:hover{background:#33a0d1;color:#fff;}}}}']);
var Article = function Article(props) {

  var show = function show() {
    var title = props.title,
        description = props.description,
        featuredImageUrl = props.featuredImageUrl,
        content = props.content,
        featuredImageCaption = props.featuredImageCaption,
        author = props.author,
        publishedTime = props.publishedTime,
        tags = props.tags,
        SiteTitlePrefix = props.SiteTitlePrefix;

    return _react2.default.createElement(
      'article',
      null,
      _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          SiteTitlePrefix(title)
        )
      ),
      _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          Header,
          null,
          title
        ),
        _react2.default.createElement(
          HeaderDescription,
          null,
          description
        ),
        author && _react2.default.createElement(
          Author,
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://www.cmo.com.au/author/' + author.id + '/' + author.slug + '/articles' },
            author.name
          ),
          ' (',
          author.team,
          ')',
          publishedTime,
          ' '
        )
      ),
      _react2.default.createElement(
        ImageWrapper,
        null,
        _react2.default.createElement('img', { src: featuredImageUrl }),
        _react2.default.createElement(
          'figcaption',
          null,
          featuredImageCaption
        )
      ),
      _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: content } }),
      _react2.default.createElement(
        Tags,
        null,
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'span',
            { className: 'inline-block' },
            'Tags:'
          ),
          tags && tags.map(function (item, index) {
            return _react2.default.createElement(
              'li',
              { key: '' + index + item.slug },
              _react2.default.createElement(
                'a',
                { href: '/tag/' + item.slug + '/' },
                item.name
              )
            );
          })
        )
      )
    );
  };
  return show();
};
exports.default = Article;

/***/ })

};;