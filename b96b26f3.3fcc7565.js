(window.webpackJsonp=window.webpackJsonp||[]).push([[677],{1008:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),d=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=d(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=d(t),p=a,h=b["".concat(s,".").concat(p)]||b[p]||u[p]||r;return t?i.a.createElement(h,l(l({ref:n},c),{},{components:t})):i.a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=t[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1009:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},1010:function(e,n,t){"use strict";var a=t(0),i=t(1011);n.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1011:function(e,n,t){"use strict";var a=t(0),i=Object(a.createContext)(void 0);n.a=i},1012:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(1010),s=t(1009),l=t(55),o=t.n(l),c=37,d=39;n.a=function(e){var n=e.block,t=e.children,l=e.defaultValue,b=e.values,u=e.groupId,p=e.className,h=Object(r.a)(),m=h.tabGroupChoices,A=h.setTabGroupChoices,f=Object(a.useState)(l),O=f[0],y=f[1],v=Object(a.useState)(!1),j=v[0],g=v[1];if(null!=u){var C=m[u];null!=C&&C!==O&&b.some((function(e){return e.value===C}))&&y(C)}var E=function(e){y(e),null!=u&&A(u,e)},w=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},B=function(){g(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",B),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",B)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===n}),style:j?{}:{outline:"none"},key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case d:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case c:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e),N(e)},onFocus:function(){return E(n)},onClick:function(){E(n),g(!1)},onPointerDown:function(){return g(!1)}},t)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))}},1013:function(e,n,t){"use strict";var a=t(0),i=t.n(a);n.a=function(e){return i.a.createElement("div",null,e.children)}},1014:function(e,n,t){"use strict";var a=t(6),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),s=i?"ios":"android",l=i?"macos":r?"windows":"linux";n.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:s,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},754:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(2),i=t(7),r=(t(0),t(1008)),s=t(1012),l=t(1013),o=t(1014),c={id:"accessibilityinfo",title:"AccessibilityInfo"},d={unversionedId:"accessibilityinfo",id:"version-0.63/accessibilityinfo",isDocsHomePage:!1,title:"AccessibilityInfo",description:"Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The AccessibilityInfo API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.",source:"@site/versioned_docs/version-0.63/accessibilityinfo.md",slug:"/accessibilityinfo",permalink:"/docs/accessibilityinfo",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/accessibilityinfo.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/api",next:{title:"Alert",permalink:"/docs/alert"}},b=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>isBoldTextEnabled()</code>",id:"isboldtextenabled",children:[]},{value:"<code>isGrayscaleEnabled()</code>",id:"isgrayscaleenabled",children:[]},{value:"<code>isInvertColorsEnabled()</code>",id:"isinvertcolorsenabled",children:[]},{value:"<code>isReduceMotionEnabled()</code>",id:"isreducemotionenabled",children:[]},{value:"<code>isReduceTransparencyEnabled()</code>",id:"isreducetransparencyenabled",children:[]},{value:"<code>isScreenReaderEnabled()</code>",id:"isscreenreaderenabled",children:[]},{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>setAccessibilityFocus()</code>",id:"setaccessibilityfocus",children:[]},{value:"<code>announceForAccessibility()</code>",id:"announceforaccessibility",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]}]}],u={rightToc:b};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The ",Object(r.b)("inlineCode",{parentName:"p"},"AccessibilityInfo")," API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(s.a,{groupId:"syntax",defaultValue:o.a.defaultSyntax,values:o.a.syntax,mdxType:"Tabs"},Object(r.b)(l.a,{value:"functional",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"AccessibilityInfo Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BreduceMotionEnabled%2C%20setReduceMotionEnabled%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BscreenReaderEnabled%2C%20setScreenReaderEnabled%5D%20%3D%20useState(false)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22reduceMotionChanged%22%2C%0A%20%20%20%20%20%20handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22screenReaderChanged%22%2C%0A%20%20%20%20%20%20handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(%0A%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(%0A%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20%20%20%22reduceMotionChanged%22%2C%0A%20%20%20%20%20%20%20%20handleReduceMotionToggled%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20%20%20%22screenReaderChanged%22%2C%0A%20%20%20%20%20%20%20%20handleScreenReaderToggled%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20const%20handleReduceMotionToggled%20%3D%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20handleScreenReaderToggled%20%3D%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%20%7BreduceMotionEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20screen%20reader%20is%20%7BscreenReaderEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20margin%3A%2030%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(r.b)(l.a,{value:"classical",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"AccessibilityInfo Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aclass%20AccessibilityStatusExample%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20reduceMotionEnabled%3A%20false%2C%0A%20%20%20%20screenReaderEnabled%3A%20false%2C%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'reduceMotionChanged'%2C%0A%20%20%20%20%20%20this._handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'screenReaderChanged'%2C%0A%20%20%20%20%20%20this._handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20'reduceMotionChanged'%2C%0A%20%20%20%20%20%20this._handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20'screenReaderChanged'%2C%0A%20%20%20%20%20%20this._handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20_handleReduceMotionToggled%20%3D%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20_handleScreenReaderToggled%20%3D%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bthis.styles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bthis.styles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.reduceMotionEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bthis.styles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20screen%20reader%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.screenReaderEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20%20%20container%3A%20%7B%0A%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20status%3A%20%7B%0A%20%20%20%20%20%20margin%3A%2030%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%7D%0A%0Aexport%20default%20AccessibilityStatusExample%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"isboldtextenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isBoldTextEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isBoldTextEnabled()\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"iOS-Only.")," Query whether a bold text is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when bold text is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("h3",{id:"isgrayscaleenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isGrayscaleEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isGrayscaleEnabled()\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"iOS-Only.")," Query whether grayscale is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when grayscale is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("h3",{id:"isinvertcolorsenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isInvertColorsEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isInvertColorsEnabled()\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"iOS-Only.")," Query whether invert colors is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when invert colors is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("h3",{id:"isreducemotionenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isReduceMotionEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isReduceMotionEnabled()\n")),Object(r.b)("p",null,"Query whether reduce motion is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when reduce motion is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("h3",{id:"isreducetransparencyenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isReduceTransparencyEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isReduceTransparencyEnabled()\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"iOS-Only.")," Query whether reduce transparency is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when a reduce transparency is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("h3",{id:"isscreenreaderenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isScreenReaderEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isScreenReaderEnabled()\n")),Object(r.b)("p",null,"Query whether a screen reader is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when a screen reader is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"addeventlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(eventName, handler)\n")),Object(r.b)("p",null,"Add an event handler. Supported events:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"boldTextChanged"),": iOS-only event. Fires when the state of the bold text toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"li"},"true")," when bold text is enabled and ",Object(r.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"grayscaleChanged"),": iOS-only event. Fires when the state of the gray scale toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"li"},"true")," when a gray scale is enabled and ",Object(r.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"invertColorsChanged"),": iOS-only event. Fires when the state of the invert colors toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"li"},"true")," when invert colors is enabled and ",Object(r.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"reduceMotionChanged"),": Fires when the state of the reduce motion toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"li"},"true"),' when a reduce motion is enabled (or when "Transition Animation Scale" in "Developer options" is "Animation off") and ',Object(r.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"screenReaderChanged"),": Fires when the state of the screen reader changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"li"},"true")," when a screen reader is enabled and ",Object(r.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"reduceTransparencyChanged"),": iOS-only event. Fires when the state of the reduce transparency toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"li"},"true")," when reduce transparency is enabled and ",Object(r.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"announcementFinished"),": iOS-only event. Fires when the screen reader has finished making an announcement. The argument to the event handler is a dictionary with these keys:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"announcement"),": The string announced by the screen reader."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the announcement was successfully made.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setaccessibilityfocus"},Object(r.b)("inlineCode",{parentName:"h3"},"setAccessibilityFocus()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static setAccessibilityFocus(reactTag)\n")),Object(r.b)("p",null,"Set accessibility focus to a React component. On Android, this calls ",Object(r.b)("inlineCode",{parentName:"p"},"UIManager.sendAccessibilityEvent(reactTag, UIManager.AccessibilityEventTypes.typeViewFocused);"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": Make sure that any ",Object(r.b)("inlineCode",{parentName:"p"},"View")," you want to receive the accessibility focus has ",Object(r.b)("inlineCode",{parentName:"p"},"accessible={true}"),".")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"announceforaccessibility"},Object(r.b)("inlineCode",{parentName:"h3"},"announceForAccessibility()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static announceForAccessibility(announcement)\n")),Object(r.b)("p",null,"Post a string to be announced by the screen reader."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"removeeventlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(eventName, handler)\n")),Object(r.b)("p",null,"Remove an event handler."))}p.isMDXComponent=!0}}]);