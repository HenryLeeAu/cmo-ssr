exports.ids = [0];
exports.modules = {

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LatestArticles = __webpack_require__(54);

var _LatestArticles2 = _interopRequireDefault(_LatestArticles);

var _Blogs = __webpack_require__(55);

var _Blogs2 = _interopRequireDefault(_Blogs);

var _LatestMultimedia = __webpack_require__(56);

var _LatestMultimedia2 = _interopRequireDefault(_LatestMultimedia);

var _Trendsetting = __webpack_require__(57);

var _Trendsetting2 = _interopRequireDefault(_Trendsetting);

var _SiteWrapperWithRHS = __webpack_require__(46);

var _SiteWrapperWithRHS2 = _interopRequireDefault(_SiteWrapperWithRHS);

var _reactRedux = __webpack_require__(4);

var _actions = __webpack_require__(2);

var _reactHelmet = __webpack_require__(10);

var _SiteTitlePrefix = __webpack_require__(52);

var _SiteTitlePrefix2 = _interopRequireDefault(_SiteTitlePrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.mainContent.InitialSSR) this.props.fetchHome();
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
    key: 'show',
    value: function show() {
      console.log('home');
      var response = this.props.mainContent.response;
      // const { latestArticles, blogs, latestMultimedia, trendSettings } = this.props.mainContent.response.main;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement('meta', { charSet: 'utf-8' }),
          _react2.default.createElement(
            'title',
            null,
            (0, _SiteTitlePrefix2.default)('Home')
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-6' },
            response.main !== undefined && _react2.default.createElement(_LatestArticles2.default, response.main.latestArticles),
            response.main !== undefined && _react2.default.createElement(_Blogs2.default, response.main.blogs),
            response.main !== undefined && _react2.default.createElement(_LatestMultimedia2.default, response.main.latestMultimedia)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-6' },
            response.main !== undefined && _react2.default.createElement(_Trendsetting2.default, response.main.trendSettings)
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('scscs')
      // console.log(this.props.mainContent.response)
      if (this.props.mainContent.response !== undefined) {
        return this.show();
      }
    }
  }]);

  return HomePage;
}(_react.Component);

function mapStateToProps(_ref) {
  var mainContent = _ref.mainContent;

  return {
    mainContent: mainContent
  };
}
/*
export default {
  loadData,
  component: SiteWrapperWithRHS(connect(mapStateToProps, { fetchHome, clearData })(HomePage))

};
*/
exports.default = (0, _SiteWrapperWithRHS2.default)((0, _reactRedux.connect)(mapStateToProps, { fetchHome: _actions.fetchHome, clearData: _actions.clearData })(HomePage));

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
  displayName: 'SectionBase__Header'
})(['border-bottom:1px solid #c22b70;color:#c22b70;text-transform:', ';font-size:', ';letter-spacing:0;font-weight:700;margin:0 0 20px 0;text-align:left;padding:0 0 5px;'], function (_ref) {
  var headerUpperCase = _ref.headerUpperCase;
  return headerUpperCase ? 'uppercase' : 'lowercase';
}, function (_ref2) {
  var headerSizeLg = _ref2.headerSizeLg;
  return headerSizeLg ? '28px' : '12px';
});
var Warp = _styledComponents2.default.div.withConfig({
  displayName: 'SectionBase__Warp'
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
  displayName: "SiteWrapperWithRHS__LHR"
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
  displayName: 'Popular__Ul'
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
  displayName: 'FeaturedWhitepaper__Con'
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
  displayName: 'WebEvents__Con'
})(['display:inline-block;width:74%;vertical-align:middle;']);
var A = _styledComponents2.default.a.withConfig({
  displayName: 'WebEvents__A'
})(['display:inline-block;width:25%;vertical-align:middle;img{width:80%;}']);
var Li = _styledComponents2.default.li.withConfig({
  displayName: 'WebEvents__Li'
})(['vertical-align:middle;']);
var Img = _styledComponents2.default.img.withConfig({
  displayName: 'WebEvents__Img'
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

/***/ 54:
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

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _SectionBase2.default,
    {
      header: 'latest articles',
      headerUpperCase: true
    },
    _react2.default.createElement(
      'ul',
      { className: 'disc' },
      props.list && props.list.map(function (article, index) {
        var title = article.title,
            id = article.id,
            slug = article.slug;

        return _react2.default.createElement(
          'li',
          { key: '' + index + slug },
          _react2.default.createElement(
            _reactRouterDom.Link,
            {
              to: '/' + props.category + '/' + id,
              title: title },
            title
          )
        );
      })
    ),
    _react2.default.createElement(
      'a',
      { className: 'btn-more', href: '#' },
      ' More \u203A '
    )
  );
};

/***/ }),

/***/ 55:
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

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Con = _styledComponents2.default.div.withConfig({
  displayName: 'Blogs__Con'
})(['margin-left:75px;']);

exports.default = function (props) {

  return _react2.default.createElement(
    _SectionBase2.default,
    {
      header: 'blogs',
      headerUpperCase: true,
      sectionBorder: true },
    _react2.default.createElement(
      'ul',
      null,
      props.list && props.list.map(function (article, index) {
        var subCategory = article.subCategory,
            publishedDate = article.publishedDate,
            imageUrl = article.imageUrl,
            title = article.title,
            description = article.description,
            slug = article.slug,
            author = article.author;

        var articleLink = '/' + props.category + '/' + subCategory + '/' + publishedDate.year + '/' + publishedDate.month + '/' + publishedDate.date + '/' + slug;
        return _react2.default.createElement(
          'li',
          { className: 'cf', key: '' + index + slug },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: articleLink },
            _react2.default.createElement('img', { className: 'float-left', src: imageUrl })
          ),
          _react2.default.createElement(
            Con,
            null,
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'a',
                { href: articleLink },
                title
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              description
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'https://www.cmo.com.au/' + props.category + '/' + author.subCategory + '/' + author.slug,
                  className: 'author' },
                author.name
              )
            )
          )
        );
      })
    ),
    _react2.default.createElement(
      'a',
      { className: 'btn-more', href: '#' },
      ' More \u203A '
    )
  );
};

/***/ }),

/***/ 56:
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
  displayName: 'LatestMultimedia__Con'
})(['margin-left:116px;']);
var Img = _styledComponents2.default.img.withConfig({
  displayName: 'LatestMultimedia__Img'
})(['']);

exports.default = function (props) {
  return _react2.default.createElement(
    _SectionBase2.default,
    {
      header: 'Latest Multimedia',
      headerUpperCase: true },
    _react2.default.createElement(
      'ul',
      null,
      props.list && props.list.map(function (article, index) {
        var title = article.title,
            id = article.id,
            slug = article.slug,
            category = article.category,
            imgUrl = article.imgUrl;

        var articleLink = 'https://www.cmo.com.au/' + category + '/' + id + '/' + slug + '/';
        var alt = category + '-' + title;
        return _react2.default.createElement(
          'li',
          { className: 'cf', key: '' + index + slug },
          _react2.default.createElement(
            'a',
            { href: articleLink, title: alt },
            _react2.default.createElement(Img, { className: 'float-left', src: imgUrl, alt: alt })
          ),
          _react2.default.createElement(
            Con,
            null,
            _react2.default.createElement(
              'h3',
              { className: 'small' },
              _react2.default.createElement(
                'a',
                { href: articleLink, title: alt },
                _react2.default.createElement(
                  'span',
                  { className: 'tag' },
                  category
                ),
                title
              )
            )
          )
        );
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'inline-block col-6' },
        _react2.default.createElement(
          'a',
          { className: 'btn-more', href: '#' },
          ' More Slideshows \u203A '
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'inline-block col-6' },
        _react2.default.createElement(
          'a',
          { className: 'btn-more', href: '#' },
          ' More Videos \u203A '
        )
      )
    )
  );
};

/***/ }),

/***/ 57:
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

exports.default = function (props) {
  return _react2.default.createElement(
    _SectionBase2.default,
    {
      header: 'Trendsetting',
      headerUpperCase: true },
    _react2.default.createElement(
      'ul',
      null,
      props.list && props.list.map(function (article, index) {
        var title = article.title,
            id = article.id,
            slug = article.slug,
            description = article.description;

        return _react2.default.createElement(
          'li',
          { key: '' + index + slug },
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              'a',
              {
                href: 'https://www.cmo.com.au/' + props.category + '/' + id + '/' + slug,
                title: title },
              title
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            description
          )
        );
      })
    )
  );
};

/***/ })

};;