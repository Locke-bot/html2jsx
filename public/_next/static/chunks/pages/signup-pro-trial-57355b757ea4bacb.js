(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9527],{97638:function(e,t,i){"use strict";function a(e){return Array.isArray(e)?e[0]:e}i.d(t,{Z:function(){return a}})},65135:function(e,t,i){"use strict";i.r(t),i.d(t,{mapStateToProps:function(){return L}});var a=i(90849),l=i(79892),r=i.n(l),n=i(50581),s=i(86677),c=i(18528),d=i(88038),o=i(79894),m=i(78430),p=i(86889),u=i(52819),f=i(35006),h=i(44782),y=i(67545),b=i(35030),g=i(52689),w=i(44847),x=i(34343),Z=i(73792),k=i(97638),O=i(17182);function _(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?_(Object(i),!0).forEach((function(t){(0,a.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var j=function(e){return(0,O.BX)("svg",v(v({},e),{},{children:[(0,O.tZ)("path",{d:"M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z",fill:"#4285f4"}),(0,O.tZ)("path",{d:"M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z",fill:"#34a853"}),(0,O.tZ)("path",{d:"M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z",fill:"#fbbc04"}),(0,O.tZ)("path",{d:"M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z",fill:"#ea4335"})]}))};j.defaultProps={width:"16",height:"16",viewBox:"0 0 533.5 544.3",xmlns:"http://www.w3.org/2000/svg"};class z extends n.Component{constructor(e){super(e),(0,a.Z)(this,"username",void 0),(0,a.Z)(this,"email",void 0),(0,a.Z)(this,"password",void 0),(0,a.Z)(this,"updateEmail",(e=>{this.setState({email:e.target.value})})),(0,a.Z)(this,"updatePassword",(e=>{this.setState({password:e.target.value})})),(0,a.Z)(this,"handleClickDownloadDesktop",(()=>{g.Z.trackEvent("Clicked get diffchecker",{type:"trial",position:"signup-pro-trial"})})),(0,a.Z)(this,"handleSubmit",(e=>{e.preventDefault();const{router:{query:{key:t}}}=this.props;this.setState({signingUp:!0},(()=>{this.props.dispatch(u.IU({email:this.state.email,password:this.state.password})).unwrap().then((e=>{t&&this.props.dispatch(f.cy(t)).unwrap(),g.Z.setUserId(e.user.id),g.Z.trackEvent("Signed up",{id:e.user.id,kind:"creds"}),s.default.push("/create-pro-trial")})).catch((e=>{g.Z.trackEvent("Failed signing up",v(v({},e),{},{kind:"creds"})),this.setState({password:""})}))}))})),(0,a.Z)(this,"renderFormOriginal",(()=>(0,O.BX)(O.HY,{children:[(0,O.tZ)(p.Z,{fullWidth:!0,type:"white",onClick:e=>{e.preventDefault(),g.Z.trackEvent("Clicked continue with google on signup"),s.default.push((0,Z.Z)("/auth/google?flow=signup&next=create-pro-trial"))},children:(0,O.BX)("span",{className:r().dynamic([["3038099495",[w.fL.label.small.size,w.O9.grey.medium,w.O9.brand.default]]])+" button__content",children:[(0,O.tZ)("span",{className:r().dynamic([["3038099495",[w.fL.label.small.size,w.O9.grey.medium,w.O9.brand.default]]])+" button__icon",children:(0,O.tZ)(j,{})}),"Continue with Google"]})}),(0,O.tZ)("div",{style:{marginTop:16,fontSize:14,textAlign:"center",color:w.O9.grey.medium},className:r().dynamic([["3038099495",[w.fL.label.small.size,w.O9.grey.medium,w.O9.brand.default]]]),children:"or"}),(0,O.BX)("form",{onSubmit:this.handleSubmit,className:r().dynamic([["3038099495",[w.fL.label.small.size,w.O9.grey.medium,w.O9.brand.default]]])+" signup-form",children:[(0,O.BX)("label",{className:r().dynamic([["3038099495",[w.fL.label.small.size,w.O9.grey.medium,w.O9.brand.default]]]),children:["Email",(0,O.tZ)("input",{type:"email",ref:e=>this.email=e,value:this.state.email,placeholder:"example@email.com",required:!0,minLength:5,maxLength:255,onChange:this.updateEmail,className:r().dynamic([["3038099495",[w.fL.label.small.size,w.O9.grey.medium,w.O9.brand.default]]])+" email"})]}),(0,O.BX)("label",{className:r().dynamic([["3038099495",[w.fL.label.small.size,w.O9.grey.medium,w.O9.brand.default]]]),children:["Create password",(0,O.tZ)("input",{type:"password",ref:e=>this.password=e,value:this.state.password,placeholder:"Password",minLength:4,maxLength:255,required:!0,onChange:this.updatePassword,className:r().dynamic([["3038099495",[w.fL.label.small.size,w.O9.grey.medium,w.O9.brand.default]]])+" password"})]}),(0,O.tZ)(p.Z,{type:"brand",style:{marginBottom:10,marginTop:10},onClick:this.handleSubmit,fullWidth:!0,children:"Create an account"}),(0,O.BX)("div",{className:r().dynamic([["3038099495",[w.fL.label.small.size,w.O9.grey.medium,w.O9.brand.default]]])+" disclaimer",children:["By signing up, you agree to our"," ",(0,O.tZ)(o.default,{href:"/terms",children:(0,O.tZ)("a",{className:r().dynamic([["3038099495",[w.fL.label.small.size,w.O9.grey.medium,w.O9.brand.default]]]),children:"terms of use"})})," ","and"," ",(0,O.tZ)(o.default,{href:"/privacy-policy",children:(0,O.tZ)("a",{className:r().dynamic([["3038099495",[w.fL.label.small.size,w.O9.grey.medium,w.O9.brand.default]]]),children:"privacy policy"})})]})]}),(0,O.tZ)(r(),{id:"3038099495",dynamic:[w.fL.label.small.size,w.O9.grey.medium,w.O9.brand.default],children:[".signup-form.__jsx-style-dynamic-selector{margin-top:10px;}","label.__jsx-style-dynamic-selector{font-size:".concat(w.fL.label.small.size,";font-weight:500;}"),"input.__jsx-style-dynamic-selector{margin:3px 0 15px;}",".button__content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".button__icon.__jsx-style-dynamic-selector{display:inline-block;margin-right:8px;}",".disclaimer.__jsx-style-dynamic-selector{margin-top:10px;font-size:0.7em;color:".concat(w.O9.grey.medium,";line-height:18px;}"),".disclaimer.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:".concat(w.O9.brand.default,";}")]})]}))),(0,a.Z)(this,"renderAlert",(e=>{const{query:{next:t,key:i}}=this.props.router;return t||i?i?(0,O.BX)(h.Z,{type:"success",children:["Sign up or log in now to connect your Diffchecker Desktop purchase to your account.",(0,O.tZ)("br",{}),(0,O.tZ)("br",{}),"Thanks for buying Diffchecker Desktop :)"]}):t?(0,O.tZ)(h.Z,{type:"warning",children:e&&"/buy-desktop"===t?(0,O.tZ)("div",{children:(0,O.tZ)("p",{style:{marginBottom:0},children:"You need to log in or create an account to purchase Diffchecker Desktop"})}):"You need to login/signup to proceed to the next page"}):void 0:(0,O.tZ)("span",{})})),this.state={error:!1,email:"",errorCode:"",errorField:"",password:"",signingUp:!1}}render(){const{query:e}=this.props.router,t=this.props.errorCode||(0,k.Z)(e.error);return(0,O.BX)(m.Z,{name:"Signup",children:[(0,O.tZ)(d.default,{children:(0,O.tZ)("title",{children:(0,c.Z)("Sign up")})}),(0,O.BX)("div",{className:r().dynamic([["556406434",[w.fL.label.small.size,w.O9.brand.default,w.AV.app.medium]]])+" signup",children:[(0,O.BX)("div",{className:r().dynamic([["556406434",[w.fL.label.small.size,w.O9.brand.default,w.AV.app.medium]]])+" main",children:[(0,O.tZ)("div",{className:r().dynamic([["556406434",[w.fL.label.small.size,w.O9.brand.default,w.AV.app.medium]]]),children:this.props.isLoggedIn&&!this.state.signingUp?(0,O.BX)(x.Z,{children:[(0,O.tZ)("h2",{className:r().dynamic([["556406434",[w.fL.label.small.size,w.O9.brand.default,w.AV.app.medium]]]),children:"Use Diffchecker Pro in the browser"}),(0,O.tZ)(p.Z,{type:"brand",style:{marginBottom:10,marginTop:-10},href:"/create-pro-trial",fullWidth:!0,children:"Continue to Diffchecker Pro"})]}):(0,O.BX)(O.HY,{children:[(0,O.BX)(x.Z,{children:[(0,O.BX)("h2",{className:r().dynamic([["556406434",[w.fL.label.small.size,w.O9.brand.default,w.AV.app.medium]]]),children:["Use Diffchecker Pro",(0,O.tZ)("br",{className:r().dynamic([["556406434",[w.fL.label.small.size,w.O9.brand.default,w.AV.app.medium]]])})," in the browser"]}),this.renderAlert(!0),(0,O.tZ)(b.Z,{code:t,field:this.props.errorField}),this.renderFormOriginal()]}),(0,O.BX)("div",{className:r().dynamic([["556406434",[w.fL.label.small.size,w.O9.brand.default,w.AV.app.medium]]])+" login-link small",children:["Already have an account?"," ",(0,O.tZ)(o.default,{href:"/login?next=create-pro-trial",children:(0,O.tZ)("a",{className:r().dynamic([["556406434",[w.fL.label.small.size,w.O9.brand.default,w.AV.app.medium]]]),children:"Sign in"})})]})]})}),(0,O.tZ)("div",{className:r().dynamic([["556406434",[w.fL.label.small.size,w.O9.brand.default,w.AV.app.medium]]]),children:(0,O.BX)(x.Z,{children:[(0,O.tZ)("h2",{className:r().dynamic([["556406434",[w.fL.label.small.size,w.O9.brand.default,w.AV.app.medium]]]),children:"Use Diffchecker Pro on your Desktop"}),(0,O.tZ)(o.default,{href:"/download-trial",children:(0,O.tZ)("a",{className:r().dynamic([["556406434",[w.fL.label.small.size,w.O9.brand.default,w.AV.app.medium]]]),children:(0,O.tZ)(p.Z,{type:"brand",style:{marginBottom:10,marginTop:-10},onClick:this.handleClickDownloadDesktop,fullWidth:!0,children:"Download Diffchecker Desktop"})})})]})})]}),(0,O.tZ)(r(),{id:"556406434",dynamic:[w.fL.label.small.size,w.O9.brand.default,w.AV.app.medium],children:[".signup.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".signup.__jsx-style-dynamic-selector .main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:50px;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".signup.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{text-align:center;margin-bottom:40px;font-weight:600;}",".signup.__jsx-style-dynamic-selector .login-link.__jsx-style-dynamic-selector{margin-top:30px;text-align:center;}",".small.__jsx-style-dynamic-selector{font-size:".concat(w.fL.label.small.size,";color:var(--front-strong);margin-bottom:0;}"),".small.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:".concat(w.O9.brand.default,";}"),"@media (max-width:".concat(w.AV.app.medium,"){.signup.__jsx-style-dynamic-selector .main.__jsx-style-dynamic-selector{width:100%;}}")]})]})]})}}const L=e=>({errorCode:e.user.signupErrorCode,errorField:e.user.signupErrorField,desktopPath:"/desktop",isLoggedIn:!!e.user.user});t.default=(0,y.$j)(L)((0,s.withRouter)(z))},84278:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup-pro-trial",function(){return i(65135)}])}},function(e){e.O(0,[6660,6031,8430,3149,9774,2888,179],(function(){return t=84278,e(e.s=t);var t}));var t=e.O();_N_E=t}]);