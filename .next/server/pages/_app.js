(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5318:
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ 7544:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* unused reexport */ __webpack_require__(6381)


/***/ }),

/***/ 6031:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": function() { return /* reexport */ context; },
  "Z": function() { return /* binding */ firebase_0; }
});

;// CONCATENATED MODULE: external "firebase/app"
var app_namespaceObject = require("firebase/app");;
var app_default = /*#__PURE__*/__webpack_require__.n(app_namespaceObject);
;// CONCATENATED MODULE: external "firebase/auth"
var auth_namespaceObject = require("firebase/auth");;
;// CONCATENATED MODULE: external "firebase/firestore"
var firestore_namespaceObject = require("firebase/firestore");;
;// CONCATENATED MODULE: external "firebase/storage"
var storage_namespaceObject = require("firebase/storage");;
;// CONCATENATED MODULE: ./firebase/config.js
const firebaseConfig = {
  apiKey: "AIzaSyCyxmI-HnNwXkjTSwkrg9w-r5LMJhldwho",
  authDomain: "product-hunt-ef82c.firebaseapp.com",
  projectId: "product-hunt-ef82c",
  storageBucket: "product-hunt-ef82c.appspot.com",
  messagingSenderId: "422280142131",
  appId: "1:422280142131:web:e685b980d25d11422d3246"
};
/* harmony default export */ var config = (firebaseConfig);
;// CONCATENATED MODULE: ./firebase/firebase.js






class Firebase {
  constructor() {
    if (!(app_default()).apps.length) {
      app_default().initializeApp(config);
    }

    this.auth = app_default().auth();
    this.db = app_default().firestore();
    this.storage = app_default().storage();
  } // Register an user


  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
    return await newUser.user.updateProfile({
      displayName: name
    });
  } // Sign in from user


  async login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  } // Close user session


  async logOut() {
    await this.auth.signOut();
  }

}

const firebase = new Firebase();
/* harmony default export */ var firebase_firebase = (firebase);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./firebase/context.js
// We need all the mothods, data are available on app

const FirebaseContext = /*#__PURE__*/(0,external_react_.createContext)(null);
/* harmony default export */ var context = (FirebaseContext);
;// CONCATENATED MODULE: ./firebase/index.js



/* harmony default export */ var firebase_0 = (firebase_firebase);

/***/ }),

/***/ 6381:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(5318);

__webpack_unused_export__ = true;
__webpack_unused_export__ = Container;
__webpack_unused_export__ = createUrl;
__webpack_unused_export__ = void 0;

var _react = _interopRequireDefault(__webpack_require__(9297));

var _utils = __webpack_require__(7579);

__webpack_unused_export__ = _utils.AppInitialProps;
__webpack_unused_export__ = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

__webpack_unused_export__ = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ 5333:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: ./firebase/index.js + 7 modules
var firebase = __webpack_require__(6031);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./hooks/useAutentication.js


function useAutentication() {
  const {
    0: userAuth,
    1: setUserAuth
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    const unsuscribe = firebase/* default.auth.onAuthStateChanged */.Z.auth.onAuthStateChanged(user => {
      if (user) {
        setUserAuth(user);
      } else {
        setUserAuth(null);
      }
    });
    return () => unsuscribe();
  }, []);
  return userAuth;
}
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
;// CONCATENATED MODULE: ./pages/_app.js





const MyApp = props => {
  const user = useAutentication();
  const {
    Component,
    pageProps
  } = props;
  return (0,react_.jsx)(firebase/* FirebaseContext.Provider */.f.Provider, {
    value: {
      firebase: firebase/* default */.Z,
      user
    }
  }, (0,react_.jsx)(Component, pageProps));
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 7381:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5333));
module.exports = __webpack_exports__;

})();