(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{1008:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1009:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1010:function(e,t,n){"use strict";var a=n(0),r=n(1011);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1011:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},1012:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1010),o=n(1009),l=n(55),s=n.n(l),c=37,b=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,d=e.values,p=e.groupId,u=e.className,m=Object(i.a)(),O=m.tabGroupChoices,j=m.setTabGroupChoices,A=Object(a.useState)(l),N=A[0],h=A[1],g=Object(a.useState)(!1),C=g[0],f=g[1];if(null!=p){var E=O[p];null!=E&&E!==N&&d.some((function(e){return e.value===E}))&&h(E)}var v=function(e){h(e),null!=p&&j(p,e)},y=[],D=function(e){e.metaKey||e.altKey||e.ctrlKey||f(!0)},w=function(){f(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",D),window.addEventListener("mousedown",w),function(){window.removeEventListener("keydown",D),window.removeEventListener("mousedown",w)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},u)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":N===t}),style:C?{}:{outline:"none"},key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e),D(e)},onFocus:function(){return v(t)},onClick:function(){v(t),f(!1)},onPointerDown:function(){return f(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===N}))[0]))}},1013:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},1014:function(e,t,n){"use strict";var a=n(6),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",l=r?"macos":i?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},268:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(7),i=(n(0),n(1008)),o=n(1012),l=n(1013),s=n(1014),c={id:"permissionsandroid",title:"PermissionsAndroid"},b={unversionedId:"permissionsandroid",id:"version-0.62/permissionsandroid",isDocsHomePage:!1,title:"PermissionsAndroid",description:"Project with Native Code Required",source:"@site/versioned_docs/version-0.62/permissionsandroid.md",slug:"/permissionsandroid",permalink:"/docs/0.62/permissionsandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/permissionsandroid.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/api",previous:{title:"BackHandler",permalink:"/docs/0.62/backhandler"},next:{title:"ToastAndroid",permalink:"/docs/0.62/toastandroid"}},d=[{value:"Example",id:"example",children:[]},{value:"Permissions that require prompting the user",id:"permissions-that-require-prompting-the-user",children:[]},{value:"Result strings for requesting permissions",id:"result-strings-for-requesting-permissions",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>constructor()</code>",id:"constructor",children:[]},{value:"<code>check()</code>",id:"check",children:[]},{value:"<code>request()</code>",id:"request",children:[]},{value:"<code>requestMultiple()</code>",id:"requestmultiple",children:[]}]}],p={rightToc:d};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{class:"banner-native-code-required"},Object(i.b)("h3",null,"Project with Native Code Required"),Object(i.b)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",Object(i.b)("code",null,"expo-cli")," workflow, see the guide on ",Object(i.b)("a",{href:"https://docs.expo.io/versions/latest/sdk/permissions/"},"Permissions")," in the Expo documentation for the appropriate alternative.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid"),' provides access to Android M\'s new permissions model. The so-called "normal" permissions are granted by default when the application is installed as long as they appear in ',Object(i.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),'. However, "dangerous" permissions require a dialog prompt. You should use this module for those permissions.'),Object(i.b)("p",null,"On devices before SDK version 23, the permissions are automatically granted if they appear in the manifest, so ",Object(i.b)("inlineCode",{parentName:"p"},"check")," should always result to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," and ",Object(i.b)("inlineCode",{parentName:"p"},"request")," should always resolve to ",Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS.GRANTED"),"."),Object(i.b)("p",null,"If a user has previously turned off a permission that you prompt for, the OS will advise your app to show a rationale for needing the permission. The optional ",Object(i.b)("inlineCode",{parentName:"p"},"rationale")," argument will show a dialog prompt only if necessary - otherwise the normal permission prompt will appear."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)(o.a,{groupId:"syntax",defaultValue:s.a.defaultSyntax,values:s.a.syntax,mdxType:"Tabs"},Object(i.b)(l.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"PermissionsAndroid Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20SafeAreaView%2C%20PermissionsAndroid%2C%20Button%20%7D%20from%20%22react-native%22%3B%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20requestCameraPermission%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20try%20%7B%0A%20%20%20%20const%20granted%20%3D%20await%20PermissionsAndroid.request(%0A%20%20%20%20%20%20PermissionsAndroid.PERMISSIONS.CAMERA%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20%22Cool%20Photo%20App%20Camera%20Permission%22%2C%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20%22Cool%20Photo%20App%20needs%20access%20to%20your%20camera%20%22%20%2B%0A%20%20%20%20%20%20%20%20%20%20%22so%20you%20can%20take%20awesome%20pictures.%22%2C%0A%20%20%20%20%20%20%20%20buttonNeutral%3A%20%22Ask%20Me%20Later%22%2C%0A%20%20%20%20%20%20%20%20buttonNegative%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20buttonPositive%3A%20%22OK%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20if%20(granted%20%3D%3D%3D%20PermissionsAndroid.RESULTS.GRANTED)%20%7B%0A%20%20%20%20%20%20console.log(%22You%20can%20use%20the%20camera%22)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20console.log(%22Camera%20permission%20denied%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D%20catch%20(err)%20%7B%0A%20%20%20%20console.warn(err)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.item%7D%3ETry%20permissions%3C%2FText%3E%0A%20%20%20%20%3CButton%20title%3D%22request%20permissions%22%20onPress%3D%7BrequestCameraPermission%7D%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aexport%20default%20App%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(i.b)(l.a,{value:"classical",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"PermissionsAndroid Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20SafeAreaView%2C%20PermissionsAndroid%2C%20Button%20%7D%20from%20%22react-native%22%3B%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20requestCameraPermission%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20try%20%7B%0A%20%20%20%20const%20granted%20%3D%20await%20PermissionsAndroid.request(%0A%20%20%20%20%20%20PermissionsAndroid.PERMISSIONS.CAMERA%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20%22Cool%20Photo%20App%20Camera%20Permission%22%2C%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20%22Cool%20Photo%20App%20needs%20access%20to%20your%20camera%20%22%20%2B%0A%20%20%20%20%20%20%20%20%20%20%22so%20you%20can%20take%20awesome%20pictures.%22%2C%0A%20%20%20%20%20%20%20%20buttonNeutral%3A%20%22Ask%20Me%20Later%22%2C%0A%20%20%20%20%20%20%20%20buttonNegative%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20buttonPositive%3A%20%22OK%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20if%20(granted%20%3D%3D%3D%20PermissionsAndroid.RESULTS.GRANTED)%20%7B%0A%20%20%20%20%20%20console.log(%22You%20can%20use%20the%20camera%22)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20console.log(%22Camera%20permission%20denied%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D%20catch%20(err)%20%7B%0A%20%20%20%20console.warn(err)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.item%7D%3ETry%20permissions%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22request%20permissions%22%20onPress%3D%7BrequestCameraPermission%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(i.b)("h3",{id:"permissions-that-require-prompting-the-user"},"Permissions that require prompting the user"),Object(i.b)("p",null,"Available as constants under ",Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid.PERMISSIONS"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_CALENDAR"),": 'android.permission.READ_CALENDAR'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WRITE_CALENDAR"),": 'android.permission.WRITE_CALENDAR'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CAMERA"),": 'android.permission.CAMERA'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_CONTACTS"),": 'android.permission.READ_CONTACTS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WRITE_CONTACTS"),": 'android.permission.WRITE_CONTACTS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET_ACCOUNTS"),": 'android.permission.GET_ACCOUNTS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ACCESS_FINE_LOCATION"),": 'android.permission.ACCESS_FINE_LOCATION'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ACCESS_COARSE_LOCATION"),": 'android.permission.ACCESS_COARSE_LOCATION'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RECORD_AUDIO"),": 'android.permission.RECORD_AUDIO'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_PHONE_STATE"),": 'android.permission.READ_PHONE_STATE'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CALL_PHONE"),": 'android.permission.CALL_PHONE'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_CALL_LOG"),": 'android.permission.READ_CALL_LOG'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WRITE_CALL_LOG"),": 'android.permission.WRITE_CALL_LOG'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ADD_VOICEMAIL"),": 'com.android.voicemail.permission.ADD_VOICEMAIL'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"USE_SIP"),": 'android.permission.USE_SIP'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PROCESS_OUTGOING_CALLS"),": 'android.permission.PROCESS_OUTGOING_CALLS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BODY_SENSORS"),": 'android.permission.BODY_SENSORS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SEND_SMS"),": 'android.permission.SEND_SMS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RECEIVE_SMS"),": 'android.permission.RECEIVE_SMS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_SMS"),": 'android.permission.READ_SMS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RECEIVE_WAP_PUSH"),": 'android.permission.RECEIVE_WAP_PUSH'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RECEIVE_MMS"),": 'android.permission.RECEIVE_MMS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_EXTERNAL_STORAGE"),": 'android.permission.READ_EXTERNAL_STORAGE'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WRITE_EXTERNAL_STORAGE"),": 'android.permission.WRITE_EXTERNAL_STORAGE'")),Object(i.b)("h3",{id:"result-strings-for-requesting-permissions"},"Result strings for requesting permissions"),Object(i.b)("p",null,"Available as constants under ",Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GRANTED"),": 'granted'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DENIED"),": 'denied'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NEVER_ASK_AGAIN"),": 'never_ask_again'")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"constructor"},Object(i.b)("inlineCode",{parentName:"h3"},"constructor()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"constructor();\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"check"},Object(i.b)("inlineCode",{parentName:"h3"},"check()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"check(permission);\n")),Object(i.b)("p",null,"Returns a promise resolving to a boolean value as to whether the specified permissions has been granted."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"permission"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The permission to check for.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"request"},Object(i.b)("inlineCode",{parentName:"h3"},"request()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"request(permission, [rationale]);\n")),Object(i.b)("p",null,"Prompts the user to enable a permission and returns a promise resolving to a string value (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again."),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"rationale")," is provided, this function checks with the OS whether it is necessary to show a dialog explaining why the permission is needed (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/training/permissions/requesting.html#explain"}),"https://developer.android.com/training/permissions/requesting.html#explain"),") and then shows the system permission dialog."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"permission"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The permission to request.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"rationale"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"object"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"See ",Object(i.b)("inlineCode",{parentName:"td"},"rationale")," below.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Rationale:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"title"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The title of the dialog.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"message"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The message of the dialog.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonPositive"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The text of the positive button.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonNegative"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The text of the negative button.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonNeutral"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The text of the neutral button.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"requestmultiple"},Object(i.b)("inlineCode",{parentName:"h3"},"requestMultiple()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"requestMultiple(permissions);\n")),Object(i.b)("p",null,"Prompts the user to enable multiple permissions in the same dialog and returns an object with the permissions as keys and strings as values (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"permissions"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"array"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array of permissions to request.")))))}u.isMDXComponent=!0}}]);