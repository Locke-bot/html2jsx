(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3149],{66288:function(e,t,r){"use strict";r.d(t,{u:function(){return n}});var o={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function n(e){return e?o[e]:o.trunc}},50357:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});Math.pow(10,8);var o=36e5,n=r(89154),a=r(85902),s=r(66288);function c(e,t,r){(0,a.Z)(2,arguments);var c=(0,n.Z)(e,t)/o;return(0,s.u)(null===r||void 0===r?void 0:r.roundingMethod)(c)}},89154:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var o=r(32825),n=r(85902);function a(e,t){return(0,n.Z)(2,arguments),(0,o.Z)(e).getTime()-(0,o.Z)(t).getTime()}},26992:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var o=r(32825),n=r(85902);function a(e,t){(0,n.Z)(2,arguments);var r=(0,o.Z)(e),a=(0,o.Z)(t);return r.getTime()>a.getTime()}},90104:function(e,t,r){var o=r(20186),n=r(3533),a=r(2900),s=r(19785),c=r(80068),i=r(43854),l=r(56016),u=r(48519),d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(c(e)&&(s(e)||"string"==typeof e||"function"==typeof e.splice||i(e)||u(e)||a(e)))return!e.length;var t=n(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(l(e))return!o(e).length;for(var r in e)if(d.call(e,r))return!1;return!0}},93144:function(e,t,r){"use strict";t.default=void 0;var o,n=(o=r(50581))&&o.__esModule?o:{default:o},a=r(67378),s=r(5477),c=r(55708);const i={};function l(e,t,r,o){if(!e)return;if(!a.isLocalURL(t))return;e.prefetch(t,r,o).catch((e=>{0}));const n=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;i[t+"%"+r+(n?"%"+n:"")]=!0}var u=function(e){const t=!1!==e.prefetch,r=s.useRouter(),{href:o,as:u}=n.default.useMemo((()=>{const[t,o]=a.resolveHref(r,e.href,!0);return{href:t,as:e.as?a.resolveHref(r,e.as):o||t}}),[r,e.href,e.as]);let d,{children:f,replace:h,shallow:p,scroll:_,locale:g}=e;"string"===typeof f&&(f=n.default.createElement("a",null,f)),d=n.default.Children.only(f);const m=d&&"object"===typeof d&&d.ref,[E,b]=c.useIntersection({rootMargin:"200px"}),y=n.default.useCallback((e=>{E(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,E]);n.default.useEffect((()=>{const e=b&&t&&a.isLocalURL(o),n="undefined"!==typeof g?g:r&&r.locale,s=i[o+"%"+u+(n?"%"+n:"")];e&&!s&&l(r,o,u,{locale:n})}),[u,o,b,g,t,r]);const N={ref:y,onClick:e=>{d.props&&"function"===typeof d.props.onClick&&d.props.onClick(e),e.defaultPrevented||function(e,t,r,o,n,s,c,i){const{nodeName:l}=e.currentTarget;("A"!==l.toUpperCase()||!function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),t[n?"replace":"push"](r,o,{shallow:s,locale:i,scroll:c}))}(e,r,o,u,h,p,_,g)},onMouseEnter:e=>{d.props&&"function"===typeof d.props.onMouseEnter&&d.props.onMouseEnter(e),a.isLocalURL(o)&&l(r,o,u,{priority:!0})}};if(e.passHref||"a"===d.type&&!("href"in d.props)){const e="undefined"!==typeof g?g:r&&r.locale,t=r&&r.isLocaleDomain&&a.getDomainLocale(u,e,r&&r.locales,r&&r.domainLocales);N.href=t||a.addBasePath(a.addLocale(u,e,r&&r.defaultLocale))}return n.default.cloneElement(d,N)};t.default=u},55708:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function({rootRef:e,rootMargin:t,disabled:r}){const i=r||!a,l=o.useRef(),[u,d]=o.useState(!1),[f,h]=o.useState(e?e.current:null),p=o.useCallback((e=>{l.current&&(l.current(),l.current=void 0),i||u||e&&e.tagName&&(l.current=function(e,t,r){const{id:o,observer:n,elements:a}=function(e){const t={root:e.root||null,margin:e.rootMargin||""};let r,o=c.find((e=>e.root===t.root&&e.margin===t.margin));o?r=s.get(o):(r=s.get(t),c.push(t));if(r)return r;const n=new Map,a=new IntersectionObserver((e=>{e.forEach((e=>{const t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:a,elements:n}),r}(r);return a.set(e,t),n.observe(e),function(){if(a.delete(e),n.unobserve(e),0===a.size){n.disconnect(),s.delete(o);let e=c.findIndex((e=>e.root===o.root&&e.margin===o.margin));e>-1&&c.splice(e,1)}}}(e,(e=>e&&d(e)),{root:f,rootMargin:t}))}),[i,f,t,u]);return o.useEffect((()=>{if(!a&&!u){const e=n.requestIdleCallback((()=>d(!0)));return()=>n.cancelIdleCallback(e)}}),[u]),o.useEffect((()=>{e&&h(e.current)}),[e]),[p,u]};var o=r(50581),n=r(23261);const a="undefined"!==typeof IntersectionObserver;const s=new Map,c=[]},44782:function(e,t,r){"use strict";var o=r(79892),n=r.n(o),a=(r(50581),r(44847)),s=r(17182);const c={success:{className:"alert-success",backgroundColor:"var(--brand-light)",textColor:a.O9.brand.default},info:{className:"alert-info",backgroundColor:"var(--purple-light)",textColor:a.O9.purple.default},warning:{className:"alert-warning",backgroundColor:"var(--orange-light)",textColor:a.O9.orange.default},danger:{className:"alert-danger",backgroundColor:"var(--red-light)",textColor:a.O9.red.default}};t.Z=({type:e,full:t=!1,children:r})=>{const o=c[e];return(0,s.BX)("div",{className:n().dynamic([["1829180629",[a.fL.label.default.size,o.textColor,o.backgroundColor,o.borderColor,o.borderColor]]]),children:[(0,s.tZ)("div",{className:n().dynamic([["1829180629",[a.fL.label.default.size,o.textColor,o.backgroundColor,o.borderColor,o.borderColor]]])+" "+"alert ".concat(o.className," ").concat(t?"full":""),children:r}),(0,s.tZ)(n(),{id:"1829180629",dynamic:[a.fL.label.default.size,o.textColor,o.backgroundColor,o.borderColor,o.borderColor],children:[".alert.__jsx-style-dynamic-selector{font-size:".concat(a.fL.label.default.size,";padding:15px;margin-top:20px;margin-bottom:20px;border-radius:4px;color:").concat(o.textColor,";background-color:").concat(o.backgroundColor,";}"),".alert.__jsx-style-dynamic-selector hr.__jsx-style-dynamic-selector{border-top-color:".concat(o.borderColor,";}"),".alert.__jsx-style-dynamic-selector .alert-link.__jsx-style-dynamic-selector{color:".concat(o.borderColor,";}")]})]})}},35030:function(e,t,r){"use strict";var o=r(50581),n=r(44782),a=r(40511),s=r(17182);t.Z=({message:e,code:t,field:r,details:c})=>{const{0:i,1:l}=(0,o.useState)(!1);return e||t?(0,s.BX)(n.Z,{type:"danger",full:!0,children:[(0,s.tZ)(a.Z,{message:e,code:t,field:r}),i?(0,s.BX)("div",{style:{wordBreak:"break-all",marginTop:10,fontWeight:600},children:[(0,s.tZ)("div",{children:c}),(0,s.tZ)("div",{style:{marginTop:10},children:"Please email us at admin@diffchecker.com with this error if you would like help."})]}):(0,s.tZ)("a",{href:"#",style:{marginTop:10},onClick:e=>{e.preventDefault(),l(!0)},children:"Show details"})]}):null}},34343:function(e,t,r){"use strict";var o=r(79892),n=r.n(o),a=(r(50581),r(44847)),s=r(17182);t.Z=({children:e})=>(0,s.BX)("div",{className:n().dynamic([["320923421",[a.ce.borderRadius]]])+" floating",children:[e,(0,s.tZ)(n(),{id:"320923421",dynamic:[a.ce.borderRadius],children:[".floating.__jsx-style-dynamic-selector{margin:50px auto 0px auto;padding:45px 60px 50px;max-width:370px;border-radius:".concat(a.ce.borderRadius,";background-color:var(--back-stronger);}"),".floating.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{padding-top:0;}"]})]})},40511:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var o=r(90849),n=r(50581),a=r(17182);class s extends n.default.Component{constructor(...e){super(...e),(0,o.Z)(this,"errors",(()=>({DIFF_DOES_NOT_EXIST:"This diff does not exist. It may have expired.",FEEDBACK_DOES_NOT_EXIST:"This piece of feedback does not exist.",USER_DOES_NOT_EXIST:"This user does not exist.",EMAIL_PASSWORD_INCORRECT:"Email/password combination is not correct. Please try again.",PASSWORD_INCORRECT:"The password you entered is incorrect",JWT_EXPIRED:"Your session has expired. Please login again.",NO_USERNAME:"Please enter a username.",USERNAME_NOT_ALPHANUMERIC:"You can only enter letters and numbers in your username.",USERNAME_NOT_RIGHT_LENGTH:"Your username has to be between 4 and 32 characters.",NO_EMAIL:"Please enter an email.",EMAIL_NOT_VALID:"Please enter a valid email.",INVALID_EMAIL:"Please enter a valid email.",EMAIL_NOT_RIGHT_LENGTH:"Your email has to be between 5 and 255 characters.",NO_PASSWORD:"Please enter a password.",PASSWORD_NOT_LONG_ENOUGH:"Your password has to be between 4 and 255 characters.",INVALID_PASSWORD:"Your password has to be between 4 and 255 characters.",UNIQUE_VIOLATION:["There is already an account with this ",this.props.field,"."],EMAIL_AND_PASSWORD_REQUIRED:"Please enter both email and password",SIGNED_UP:"You are now signed up.",NOT_LOGGED_IN:"You must be logged in to do this action.",PASSWORD_RESET_EMAIL_SENT:"If an account exists, you will get an email with instructions on resetting your password. If it doesn't arrive, be sure to check your spam folder.",EMAIL_DOES_NOT_EXIST:"We couldn't find an account with that email address.",INVALID_RESET_TOKEN:"We were not able to reset your password, possibly because your request has expired. Please make another password reset request.",UNKNOWN_ERROR:"An unknown error occured. Please check your internet connection.",LICENSE_KEY_NOT_VALID:"License key is not valid.",LICENSE_KEY_REQUIRED:"Please provide license key.",LICENSE_NOT_FOUND:"License with the given key does not exist.",LICENSE_FORMAT_INCORRECT:"License format seems to be incorrect. Your license should be of the format XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",LICENSE_EXPIRED:"Your license has expired. Visit diffchecker.com in order to extend it.",LICENSE_REVOKED:"Your license has been revoked. Contact us at diffchecker.com/contact for details.",LICENSE_PRO_ONLY:"Your license is only for the web version of Diffchecker Pro. View our plans at https://www.diffchecker.com/pricing/. You can receive a refund to get the correct plan by contacting admin@diffchecker.com.",TRYING_TO_DOUBLE_UP_ON_TRIALS:"This computer cannot be used for free trials anymore. Please purchase Diffchecker Desktop at www.diffchecker.com/desktop",CALL_FOR_AUTHORIZATION:"Call your bank to authorize this transaction. There seems to be a hold on your account.",ONLY_SSO:'This account can only be logged into with Google or Apple, or by resetting the password with "Forgot password".',SSO_MISSING_EMAIL:"An email address is required to continue.",SSO_UNKNOWN:"Something went wrong."}))),(0,o.Z)(this,"getError",(e=>this.errors()[e]||"Error encountered: ".concat(e)))}render(){return(0,a.tZ)("div",{children:this.props.message||this.getError(this.props.code)})}}},18528:function(e,t){"use strict";t.Z=e=>"".concat(e," - Diff Checker")},79894:function(e,t,r){e.exports=r(93144)}}]);