(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3757],{45841:function(e,t,i){"use strict";i.d(t,{b:function(){return x},O:function(){return v}});var a=i(90849),o=i(50581),n=i(14206),r=i.n(n),l=i(76163),s=i.n(l),c=i(28218),d=i(44847),f=i(25727),m=i(96855),p=i(17182);function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach((function(t){(0,a.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}const x=o.default.createContext([{},()=>{}]),h={active:"1",backgroundColor:d.O9.grey.lighter,backgroundHoverColor:"#FFFFFF",callToAction:"Get Desktop",company:"Diffchecker",ctaBackgroundColor:"#41bf92",ctaBackgroundHoverColor:"#41bf92",ctaTextColor:"#FFFFFF",ctaTextColorHover:"#FFFFFF",description:"The most secure way to run Diffchecker. Get the Diffchecker Desktop app: your diffs never leave your computer!",evenodd:"0",height:"0",image:"/static/images/logo-medium.png",rendering:"default",statlink:"https://www.diffchecker.com/desktop",textColor:"#00B3E6",textColorHover:"#00B3E6",title:"",disableNofollow:!0},g={active:"1",backgroundColor:d.O9.grey.lighter,backgroundHoverColor:"#FFFFFF",callToAction:"Get Pro",company:"Diffchecker",ctaBackgroundColor:"#41bf92",ctaBackgroundHoverColor:"#41bf92",ctaTextColor:"#FFFFFF",ctaTextColorHover:"#FFFFFF",description:"Unlock all of Diffchecker's advanced features with Diffchecker Pro! Real-time diff, syntax highlighting, private diffs, export as PDF, and more.",evenodd:"0",height:"0",image:"/static/images/logo-medium.png",rendering:"default",statlink:"https://www.diffchecker.com/pro-features",textColor:"#00B3E6",textColorHover:"#00B3E6",title:"",disableNofollow:!0},y=e=>!!e.statlink,w=async(e,t)=>{const i=t||6e3;return await r()({url:"https://srv.buysellads.com/ads/".concat(e,".json?forcenads=3"),adapter:s(),timeout:i})},v=e=>{const t=(0,f.CG)((e=>(0,c.ad)(e).left)),i=(0,f.CG)((e=>(0,c.ad)(e).right)),a=(0,f.CG)(m.i$),{0:n,1:r}=(0,o.useState)({aboveForm:{},aboveSubmit:{},belowSubmit:{}}),l="text"===e.type?"CE7DC2Q7":"CKYIEK7L",s="text"===e.type?"CKYI62JI":"CESI423M";return o.default.useEffect((()=>{a||(async()=>{let a,o,c=n;if("text"===e.type)try{if(a=await w(s,1500),o=a.data.ads.filter(y),3!==o.length)throw new Error;c=u(u({},c),{},{aboveForm:{platform:"native",ads:[o[0]]},aboveSubmit:{platform:"native",ads:[o[1],o[2]]},belowSubmit:{platform:"carbon",ids:[l]}})}catch(d){try{if(!o||0===o.length)throw new Error;1===o.length?c=u(u({},c),{},t||i?{aboveForm:{platform:"native",ads:[o[0]]},aboveSubmit:{platform:"native",ads:[o[0],h]},belowSubmit:{platform:"carbon",ids:[l]}}:{aboveForm:{platform:"native",ads:[o[0]]},aboveSubmit:{platform:"native",ads:[g,h]},belowSubmit:{platform:"carbon",ids:[l]}}):2===o.length&&(c=u(u({},c),{},{aboveForm:{platform:"native",ads:[o[0]]},aboveSubmit:{platform:"native",ads:[o[1],h]},belowSubmit:{platform:"carbon",ids:[l]}}))}catch(d){const e=Math.floor(4*Math.random());c=u(u({},c),{},0===e?{aboveForm:{platform:"carbon",ids:[l]},aboveSubmit:{platform:"native",ads:[h,g]},belowSubmit:{}}:{aboveForm:{},aboveSubmit:{platform:"native",ads:[h,g]},belowSubmit:{platform:"carbon",ids:[l]}})}}else try{a=await w(s,1500),o=a.data.ads.filter(y),c=2===o.length||3===o.length?u(u({},c),{},{aboveSubmit:{platform:"native",ads:[o[0],o[1]]}}):u(u({},c),{},{aboveSubmit:{platform:"carbon",ids:[l]}})}catch(d){}r(c)})()}),[t,i,a]),(0,p.tZ)(x.Provider,{value:[n,r],children:e.children})}},31524:function(e,t,i){"use strict";i.d(t,{Z:function(){return z}});var a=i(50581),o=i(45841),n=i(28218),r=i(79892),l=i.n(r),s=i(52689),c=i(25727),d=i(17182);const f=()=>{s.Z.trackEvent("Clicked ad",{type:"carbon",position:"under submit"})};var m=e=>{const t=(0,c.CG)((e=>(0,n.ad)(e).left)),i=(0,c.CG)((e=>(0,n.ad)(e).right)),o=a.useRef();a.useEffect((()=>(r(o),()=>{window&&o.current&&o.current&&0!==o.current.childNodes.length&&(o.current.removeChild(o.current.childNodes[0]),window._carbonads=void 0)})),[]),a.useEffect((()=>{window._carbonads&&window._carbonads.refresh()}),[t,i]);const r=async t=>{const i=document.createElement("script");i.async=!0,i.src="//cdn.carbonads.com/carbon.js?serve=".concat(e.id,"&placement=wwwdiffcheckercom"),i.id="_carbonads_js",t.current.appendChild(i)};return(0,d.BX)("div",{className:"jsx-2060360429 "+l().dynamic([["3497924116",["aboveForm"===e.position?"start":"center","aboveForm"===e.position?0:"6px"]]])+" "+(("aboveForm"===e.position?"wide-note-container":"normal-note-container")||""),children:[(0,d.tZ)("div",{role:"button",tabIndex:0,onClick:f,onKeyPress:e=>{"Enter"===e.key&&f()},ref:o,className:"jsx-2060360429 "+l().dynamic([["3497924116",["aboveForm"===e.position?"start":"center","aboveForm"===e.position?0:"6px"]]])+" "+(("aboveForm"===e.position?"wide-note":"normal-note")||"")}),(0,d.tZ)(l(),{id:"3497924116",dynamic:["aboveForm"===e.position?"start":"center","aboveForm"===e.position?0:"6px"],children:[".normal-note-container.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:".concat("aboveForm"===e.position?"start":"center",";-webkit-justify-content:").concat("aboveForm"===e.position?"start":"center",";-ms-flex-pack:").concat("aboveForm"===e.position?"start":"center",";justify-content:").concat("aboveForm"===e.position?"start":"center",";-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}"),".normal-note.__jsx-style-dynamic-selector{margin:6px;margin-bottom:".concat("aboveForm"===e.position?0:"6px",";}")]}),(0,d.tZ)(l(),{id:"1094304141",children:[".normal-note-container{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}",".normal-note{width:330px;padding:15px;border-radius:4px;}",".normal-note .carbon-img{float:left;margin-right:15px;}",".normal-note .carbon-text{font-size:14px;display:block;line-height:17px;}",".normal-note .carbon-poweredby{color:#bbb;font-weight:100;display:block;font-size:11px;margin-top:18px;}"]}),(0,d.tZ)(l(),{id:"511002665",children:[".wide-note-container{font-family:-apple-system,BlinkMacSystemFont,segoe ui,Roboto, Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,Helvetica,Arial, sans-serif;}",".wide-note-container{display:block;overflow:hidden;max-width:728px;position:relative;background-color:#fcfcfc;border:solid 1px #eee;font-size:22px;box-sizing:content-box;}",".wide-note-container>span{display:block;}",".wide-note-container a{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",".wide-note-container a:hover{color:inherit;}",".wide-note-container .carbon-wrap{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".wide-note-container .carbon-img{display:block;margin:0;line-height:1;}",".wide-note-container .carbon-img img{display:block;height:90px;width:auto;}",".wide-note-container .carbon-text{display:block;min-height:90px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1em;line-height:1.35;text-align:left;}",".wide-note-container .carbon-poweredby{position:absolute;bottom:0;right:0;padding:6px 10px;background:repeating-linear-gradient( -45deg, transparent, transparent 5px, hsla(0,0%,0%,0.025) 5px, hsla(0,0%,0%,0.025) 10px ) hsla(203,11%,95%,0.8);text-align:center;text-transform:uppercase;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;font-weight:600;font-size:8px;border-top-left-radius:4px;line-height:1;}","@media only screen and (min-width:320px) and (max-width:759px){.wide-note-container .carbon-text{font-size:14px;}}"]})]})},p=i(1149);var b=e=>((0,a.useEffect)((()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){p.Tb("Could not show ads")}}),[]),(0,d.tZ)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-3974199854461620","data-ad-slot":e.id,"data-ad-format":"horizontal","data-full-width-responsive":"true"})),u=i(86677),x=i(49435),h=i.n(x);const g=e=>e.split("||"),y=e=>t=>t.replace("[timestamp]",e),w=e=>(0,d.tZ)("img",{src:e,alt:"pixel source",width:"0",height:"0",style:{display:"none"}},e);var v=({ad:{image:e,companyTagline:t,description:i,statlink:a,pixel:o,timestamp:n,backgroundColor:r,ctaBackgroundColor:s,ctaBackgroundHoverColor:c,ctaTextColor:f,ctaTextColorHover:m,callToAction:p,disableNofollow:b},position:u,onClick:x})=>(0,d.BX)("a",{onClick:x,href:a,target:"_blank",rel:b?void 0:"nofollow noopener",className:l().dynamic([["1843608845",["aboveForm"===u?"flex":"block","aboveForm"===u?"800px":"auto","aboveForm"===u?"#fcfcfc":"var(--back-stronger)","aboveForm"===u?"1.35":"1.5","aboveForm"===u?"solid 1px #eee":"none","aboveForm"===u?"#161B1D":"var(--front-strong)",r,"aboveForm"===u?"48px":"36px","aboveForm"===u?"48px":"36px","aboveForm"===u?"22px":"0.9em",s,f,m,c,"aboveForm"===u?"14px":"0.9em"]]])+" banner",children:[(0,d.tZ)("span",{className:l().dynamic([["1843608845",["aboveForm"===u?"flex":"block","aboveForm"===u?"800px":"auto","aboveForm"===u?"#fcfcfc":"var(--back-stronger)","aboveForm"===u?"1.35":"1.5","aboveForm"===u?"solid 1px #eee":"none","aboveForm"===u?"#161B1D":"var(--front-strong)",r,"aboveForm"===u?"48px":"36px","aboveForm"===u?"48px":"36px","aboveForm"===u?"22px":"0.9em",s,f,m,c,"aboveForm"===u?"14px":"0.9em"]]])+" img-container",children:(0,d.tZ)("img",{src:e,alt:"ad",className:l().dynamic([["1843608845",["aboveForm"===u?"flex":"block","aboveForm"===u?"800px":"auto","aboveForm"===u?"#fcfcfc":"var(--back-stronger)","aboveForm"===u?"1.35":"1.5","aboveForm"===u?"solid 1px #eee":"none","aboveForm"===u?"#161B1D":"var(--front-strong)",r,"aboveForm"===u?"48px":"36px","aboveForm"===u?"48px":"36px","aboveForm"===u?"22px":"0.9em",s,f,m,c,"aboveForm"===u?"14px":"0.9em"]]])})}),(0,d.BX)("span",{className:l().dynamic([["1843608845",["aboveForm"===u?"flex":"block","aboveForm"===u?"800px":"auto","aboveForm"===u?"#fcfcfc":"var(--back-stronger)","aboveForm"===u?"1.35":"1.5","aboveForm"===u?"solid 1px #eee":"none","aboveForm"===u?"#161B1D":"var(--front-strong)",r,"aboveForm"===u?"48px":"36px","aboveForm"===u?"48px":"36px","aboveForm"===u?"22px":"0.9em",s,f,m,c,"aboveForm"===u?"14px":"0.9em"]]])+" banner-content",children:[(0,d.BX)("span",{className:l().dynamic([["1843608845",["aboveForm"===u?"flex":"block","aboveForm"===u?"800px":"auto","aboveForm"===u?"#fcfcfc":"var(--back-stronger)","aboveForm"===u?"1.35":"1.5","aboveForm"===u?"solid 1px #eee":"none","aboveForm"===u?"#161B1D":"var(--front-strong)",r,"aboveForm"===u?"48px":"36px","aboveForm"===u?"48px":"36px","aboveForm"===u?"22px":"0.9em",s,f,m,c,"aboveForm"===u?"14px":"0.9em"]]])+" banner-title-and-description",children:["aboveForm"!==u&&(0,d.tZ)("span",{className:l().dynamic([["1843608845",["aboveForm"===u?"flex":"block","aboveForm"===u?"800px":"auto","aboveForm"===u?"#fcfcfc":"var(--back-stronger)","aboveForm"===u?"1.35":"1.5","aboveForm"===u?"solid 1px #eee":"none","aboveForm"===u?"#161B1D":"var(--front-strong)",r,"aboveForm"===u?"48px":"36px","aboveForm"===u?"48px":"36px","aboveForm"===u?"22px":"0.9em",s,f,m,c,"aboveForm"===u?"14px":"0.9em"]]])+" banner-title",children:t}),(0,d.tZ)("span",{className:l().dynamic([["1843608845",["aboveForm"===u?"flex":"block","aboveForm"===u?"800px":"auto","aboveForm"===u?"#fcfcfc":"var(--back-stronger)","aboveForm"===u?"1.35":"1.5","aboveForm"===u?"solid 1px #eee":"none","aboveForm"===u?"#161B1D":"var(--front-strong)",r,"aboveForm"===u?"48px":"36px","aboveForm"===u?"48px":"36px","aboveForm"===u?"22px":"0.9em",s,f,m,c,"aboveForm"===u?"14px":"0.9em"]]])+" banner-description",children:h()(i)})]}),(0,d.tZ)("span",{className:l().dynamic([["1843608845",["aboveForm"===u?"flex":"block","aboveForm"===u?"800px":"auto","aboveForm"===u?"#fcfcfc":"var(--back-stronger)","aboveForm"===u?"1.35":"1.5","aboveForm"===u?"solid 1px #eee":"none","aboveForm"===u?"#161B1D":"var(--front-strong)",r,"aboveForm"===u?"48px":"36px","aboveForm"===u?"48px":"36px","aboveForm"===u?"22px":"0.9em",s,f,m,c,"aboveForm"===u?"14px":"0.9em"]]])+" banner-cta",children:p})]}),o&&n&&g(o).map(y(n)).map(w),(0,d.tZ)(l(),{id:"1843608845",dynamic:["aboveForm"===u?"flex":"block","aboveForm"===u?"800px":"auto","aboveForm"===u?"#fcfcfc":"var(--back-stronger)","aboveForm"===u?"1.35":"1.5","aboveForm"===u?"solid 1px #eee":"none","aboveForm"===u?"#161B1D":"var(--front-strong)",r,"aboveForm"===u?"48px":"36px","aboveForm"===u?"48px":"36px","aboveForm"===u?"22px":"0.9em",s,f,m,c,"aboveForm"===u?"14px":"0.9em"],children:[".banner.__jsx-style-dynamic-selector{position:relative;height:100%;width:100%;display:".concat("aboveForm"===u?"flex":"block",";max-width:").concat("aboveForm"===u?"800px":"auto",";-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1em;background:").concat("aboveForm"===u?"#fcfcfc":"var(--back-stronger)",";line-height:").concat("aboveForm"===u?"1.35":"1.5",";border:").concat("aboveForm"===u?"solid 1px #eee":"none",";color:").concat("aboveForm"===u?"#161B1D":"var(--front-strong)",";-webkit-text-decoration:none;text-decoration:none;font-weight:400;-webkit-transition:background-color 0.25s ease-in-out;transition:background-color 0.25s ease-in-out;}"),".banner.__jsx-style-dynamic-selector:hover{background-color:var(--back-strong);}",".banner.__jsx-style-dynamic-selector .img-container.__jsx-style-dynamic-selector{border-radius:3px;background:".concat(r,";padding:5px;display:block;float:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:10px;}"),".banner.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:".concat("aboveForm"===u?"48px":"36px",";height:").concat("aboveForm"===u?"48px":"36px",";border-radius:7.5%;}"),".banner-content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".banner-title-and-description.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-left:6px;}",".banner-description.__jsx-style-dynamic-selector{display:block;max-width:calc(100% - 46px);}",".banner-title.__jsx-style-dynamic-selector{font-weight:600;}",".banner-description.__jsx-style-dynamic-selector{font-size:".concat("aboveForm"===u?"22px":"0.9em",";}"),".banner-cta.__jsx-style-dynamic-selector{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;padding:6px 8px 5px;background:".concat(s,";color:").concat(f,";border:solid 1px currentColor;border-radius:3px;text-align:center;text-transform:uppercase;white-space:nowrap;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;font-size:12px;}"),".banner-cta.__jsx-style-dynamic-selector:hover{color:".concat(m,";background:").concat(c,";}"),"@media screen and (max-width:1124px){.banner-content.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.banner-description.__jsx-style-dynamic-selector{max-width:100%;margin-right:10px;}.banner-cta.__jsx-style-dynamic-selector{margin-top:10px;width:calc(100% - 20px);}}","@media only screen and (min-width:320px) and (max-width:759px){.banner-description.__jsx-style-dynamic-selector{font-size:".concat("aboveForm"===u?"14px":"0.9em",";}}")]})]}),k=i(60042),F=i.n(k);function L(e){let t=e.length,i=0;for(;0!==t;)i=Math.floor(Math.random()*t),t--,[e[t],e[i]]=[e[i],e[t]];return e}const _=a.memo((e=>{const t=(0,u.useRouter)();return(0,d.BX)("div",{className:l().dynamic([["348499388",["aboveForm"===e.position?"auto":"50%"]]])+" "+(F()("bottom-banner","aboveSubmit"===e.position&&1!==e.ads.length?"text"===e.diffInputType?"bottom-banner-textbox":"bottom-banner-other":"bottom-banner")||""),children:[L(e.ads).map(((i,a)=>(0,d.tZ)("div",{className:l().dynamic([["348499388",["aboveForm"===e.position?"auto":"50%"]]])+" banner-container",children:(0,d.tZ)(v,{ad:i,position:e.position,onClick:()=>{return e=a,o=i.company,void s.Z.trackEvent("Clicked native ad",{type:"bsa",pathname:t.asPath,index:e,company:o});var e,o}})},a))),(0,d.tZ)(l(),{id:"348499388",dynamic:["aboveForm"===e.position?"auto":"50%"],children:[".bottom-banner-textbox.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0px 10px 10px 10px;gap:10px;}",".bottom-banner-other.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0px;gap:15px;}",".banner-container.__jsx-style-dynamic-selector{width:".concat("aboveForm"===e.position?"auto":"50%",";-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;}"),"@media screen and (max-width:500px){.bottom-banner.__jsx-style-dynamic-selector{display:none;}}"]})]})}));_.displayName="NativeAd";var j=_;var z=e=>{const{0:t}=(0,a.useContext)(o.b),i=(0,c.CG)((e=>(0,n.ad)(e).left)),r=(0,c.CG)((e=>(0,n.ad)(e).right)),{0:l,1:s}=(0,a.useState)(1);a.default.useEffect((()=>{"undefined"!==typeof i&&"undefined"!==typeof r&&s(l+1)}),[i,r]);const f=t[e.position];return f?"google"===f.platform?(0,d.tZ)(b,{position:e.position,id:f.ids[0]},"google-ad-".concat(l)):"carbon"===f.platform?(0,d.tZ)(m,{position:e.position,id:f.ids[0]}):"native"===f.platform?(0,d.tZ)(j,{diffInputType:e.diffInputType,position:e.position,ads:f.ads}):(0,d.tZ)("span",{}):(0,d.tZ)("span",{})}},93994:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var a=i(90849),o=i(79892),n=i.n(o),r=i(50581),l=i(44847),s=i(52689),c=i(48645),d=i(86889),f=i(17182);var m=e=>{const t=e.preferredDiffType+"-diff",i="pdf"===e.preferredDiffType||"excel"===e.preferredDiffType||"image"===e.preferredDiffType;return(0,f.BX)(c.Z,{isOpen:e.isOpen,closeModal:e.closeModal,styles:{content:{maxWidth:"350px",textAlign:"center"}},children:[i?(0,f.BX)(f.HY,{children:[(0,f.BX)("p",{className:n().dynamic([["4124852070",[l.fL.title.medium.size,l.fL.title.weight,l.fL.label.default.size]]]),children:["Text comparison does not support this file type. Please use"," ",(0,f.BX)("em",{className:n().dynamic([["4124852070",[l.fL.title.medium.size,l.fL.title.weight,l.fL.label.default.size]]]),children:[e.preferredDiffType," diff"]}),"."]}),(0,f.tZ)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},className:n().dynamic([["4124852070",[l.fL.title.medium.size,l.fL.title.weight,l.fL.label.default.size]]]),children:(0,f.tZ)("div",{className:n().dynamic([["4124852070",[l.fL.title.medium.size,l.fL.title.weight,l.fL.label.default.size]]])+" modal-footer",children:(0,f.tZ)("div",{className:n().dynamic([["4124852070",[l.fL.title.medium.size,l.fL.title.weight,l.fL.label.default.size]]])+" button-container",children:(0,f.BX)(d.Z,{href:"/".concat(t,"/"),fullWidth:!0,type:"brand",style:{margin:"0 auto"},children:["Continue to ",e.preferredDiffType," diff"]})})})})]}):(0,f.tZ)(f.HY,{children:"docxUnsupported"===e.preferredDiffType?(0,f.tZ)("p",{className:n().dynamic([["4124852070",[l.fL.title.medium.size,l.fL.title.weight,l.fL.label.default.size]]]),children:"Unsupported Word Document type. Please copy and paste the contents into the text boxes below, or upload a .docx file."}):(0,f.tZ)(f.HY,{children:"docxSupported"===e.preferredDiffType?(0,f.tZ)("p",{className:n().dynamic([["4124852070",[l.fL.title.medium.size,l.fL.title.weight,l.fL.label.default.size]]]),children:"Error uploading Word Document. Please copy and paste the contents into the text boxes below"}):(0,f.tZ)("p",{className:n().dynamic([["4124852070",[l.fL.title.medium.size,l.fL.title.weight,l.fL.label.default.size]]]),children:" Diffchecker does not support the uploaded file type."})})}),(0,f.tZ)(n(),{id:"4124852070",dynamic:[l.fL.title.medium.size,l.fL.title.weight,l.fL.label.default.size],children:["h3.__jsx-style-dynamic-selector{padding:0.25em;font-size:".concat(l.fL.title.medium.size,";font-weight:").concat(l.fL.title.weight,";}"),"em.__jsx-style-dynamic-selector{font-style:italic;}","p.__jsx-style-dynamic-selector{padding:0.25em;font-size:".concat(l.fL.label.default.size,";}"),".button-container.__jsx-style-dynamic-selector{width:200px;margin:20px 5px 30px;}",".modal-footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:var(--back-strongest);-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"]})]})};const p={image:[/image\//],pdf:[/application\/pdf/],excel:[/application\/vnd.ms-excel/,/application\/vnd.openxmlformats-officedocument.spreadsheetml.sheet/,/application\/vnd.oasis.opendocument.spreadsheet/],docxUnsupported:[/application\/msword/,/application\/vnd.oasis.opendocument.text/],docxSupported:[/application\/vnd.openxmlformats-officedocument.wordprocessingml.document/],other:[/audio\//,/\/ebook\//,/application\/zip/,/application\/vnd.rar/,/application\/x-shockwave-flash/,/application\/x-tar/,/application\/vnd.visio/,/application\/x-7z-compressed/,/application\/epub/,/application\/x-mobipocket-ebook/]};function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach((function(t){(0,a.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var x=function(e){return(0,f.tZ)("svg",u(u({},e),{},{children:(0,f.tZ)("path",{d:"M7 6V4H6v2H4v1h2v2h1V7h2V6zM6 2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z",fill:"#8197a2",fillRule:"evenodd"})}))};x.defaultProps={height:"11",width:"13",xmlns:"http://www.w3.org/2000/svg"};var h=e=>{const{0:t,1:a}=(0,r.useState)(!1),{0:o,1:c}=(0,r.useState)(""),d=(0,r.useRef)(null),b=async t=>{if("folder"===e.type){const i=t.target.files[0].path;let a=i.lastIndexOf("/");-1===a&&(a=i.lastIndexOf("\\")),e.onChange(i.substr(0,a))}else{const n=t.target.files;if(n&&n.length>0){const t=n[0],r=new FileReader;if(r.onload=()=>{e.onChange({file:n[0],data:r.result})},"text"===e.type){const e=(await i.e(2839).then(i.t.bind(i,72839,19))).lookup(t.name);s.Z.trackEvent("Uploaded file to text diff",{mimeType:e});const n=(e=>{if("string"===typeof e){const t=Object.keys(p);for(let i=0;i<t.length;i++)if(p[t[i]].some((t=>t.test(e))))return t[i];return""}return""})(e);if(""===n)r.readAsText(t,"UTF-8");else if("docxSupported"===n){const e=await Promise.all([i.e(816),i.e(667)]).then(i.t.bind(i,20667,19)),l=await t.arrayBuffer();try{const t=await e.extractRawText({arrayBuffer:l}),i=new Blob([t.value]);r.readAsText(i)}catch(o){c(n),a(!0)}}else c(n),a(!0)}else r.readAsDataURL(t)}else console.error("No files uploaded!")}};(0,r.useEffect)((()=>(d.current&&d.current.addEventListener("change",b),()=>{d.current&&d.current.removeEventListener("change",b)})),[]);const u="file".concat(e.label.replace(" ","-"));return(0,f.BX)("div",{className:n().dynamic([["150913188",["text"===e.type?"1px solid var(--border-default)":"0","15px 10px 10px","0",l.fL.label.default.size,l.fL.label.bold.weight,l.ce.borderRadius,l.ce.animationTime,l.fL.label.large.size,l.fL.label.bold.weight,l.ce.borderRadius,l.ce.animationTime,l.ce.focusOutline,l.AV.web.small]]])+" diff-input-header",children:[t&&(0,f.tZ)(m,{isOpen:t,closeModal:()=>{a(!1)},preferredDiffType:o}),(0,f.tZ)("input",{type:"file",webkitdirectory:"folder"===e.type?"true":void 0,id:u,ref:d,accept:e.acceptedFileTypes.join(","),onClick:e=>{e.target.value=""},className:n().dynamic([["150913188",["text"===e.type?"1px solid var(--border-default)":"0","15px 10px 10px","0",l.fL.label.default.size,l.fL.label.bold.weight,l.ce.borderRadius,l.ce.animationTime,l.fL.label.large.size,l.fL.label.bold.weight,l.ce.borderRadius,l.ce.animationTime,l.ce.focusOutline,l.AV.web.small]]])+" file-input"}),(0,f.BX)("label",{title:e.label,htmlFor:u,className:n().dynamic([["150913188",["text"===e.type?"1px solid var(--border-default)":"0","15px 10px 10px","0",l.fL.label.default.size,l.fL.label.bold.weight,l.ce.borderRadius,l.ce.animationTime,l.fL.label.large.size,l.fL.label.bold.weight,l.ce.borderRadius,l.ce.animationTime,l.ce.focusOutline,l.AV.web.small]]])+" label file-label",children:[e.label,(0,f.tZ)(x,{style:{position:"absolute",right:"0.5rem",top:"7px"}})]}),(0,f.tZ)(n(),{id:"150913188",dynamic:["text"===e.type?"1px solid var(--border-default)":"0","15px 10px 10px","0",l.fL.label.default.size,l.fL.label.bold.weight,l.ce.borderRadius,l.ce.animationTime,l.fL.label.large.size,l.fL.label.bold.weight,l.ce.borderRadius,l.ce.animationTime,l.ce.focusOutline,l.AV.web.small],children:[".diff-input-header.__jsx-style-dynamic-selector{text-align:center;z-index:5;background:var(--back-strongest);border-bottom:".concat("text"===e.type?"1px solid var(--border-default)":"0",";padding:").concat("15px 10px 10px",";position:-webkit-sticky;position:sticky;top:").concat("0",";right:0;width:100%;}"),".file-input.__jsx-style-dynamic-selector{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1;}",".label.__jsx-style-dynamic-selector{font-size:".concat(l.fL.label.default.size,";font-weight:").concat(l.fL.label.bold.weight,";padding:0.3rem 1.6rem 0.3rem 0.6rem;border-radius:").concat(l.ce.borderRadius,";display:inline-block;-webkit-transition:").concat(l.ce.animationTime,";transition:").concat(l.ce.animationTime,";white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:300px;position:relative;}"),".label-alt.__jsx-style-dynamic-selector{font-size:".concat(l.fL.label.large.size,";font-weight:").concat(l.fL.label.bold.weight,";padding:0.3rem 1.7rem 0.3rem 0.6rem;border-radius:").concat(l.ce.borderRadius,";display:inline-block;-webkit-transition:").concat(l.ce.animationTime,";transition:").concat(l.ce.animationTime,";white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:300px;position:relative;}"),".file-label.__jsx-style-dynamic-selector{cursor:pointer;}",".file-label.__jsx-style-dynamic-selector:hover{background:var(--hover-strong);}",".file-label.__jsx-style-dynamic-selector:focus{outline:".concat(l.ce.focusOutline,";}"),"@media (max-width:".concat(l.AV.web.small,"){.label.__jsx-style-dynamic-selector{max-width:100%;}}")]})]})}},90377:function(e,t,i){"use strict";var a=i(79892),o=i.n(a),n=(i(50581),i(86889)),r=i(52689),l=i(44847),s=i(23597),c=i(17182);const d=()=>{r.Z.trackEvent("Clicked Diffchecker Desktop link",{position:"hero"})};t.Z=({children:e,backgroundColor:t,image:i="text",header:a="Compare text"})=>(0,c.BX)("div",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]])+" hero",children:[(0,c.BX)("div",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]])+" main",children:[(0,c.tZ)("div",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]])+" main-icon",children:(0,c.tZ)("img",{src:"/static/images/".concat(i,".svg"),alt:"".concat(i," diff icon"),className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]])})}),(0,c.BX)("div",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]])+" main-content",children:[(0,c.tZ)("h2",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]]),children:a}),(0,c.tZ)("p",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]]),children:e||(0,c.BX)("span",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]]),children:["Diffchecker will compare text to find the difference between two text files.",(0,c.tZ)("br",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]])}),"Just paste your files and click Find Difference"]})})]})]}),(0,c.BX)("div",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]])+" desktop",children:[(0,c.BX)("div",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]])+" content",children:[(0,c.tZ)("h2",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]]),children:"Try our desktop app"}),(0,c.tZ)("p",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]]),children:"Offline diffing, advanced features and more"})]}),(0,c.tZ)(s.Z,{children:(0,c.tZ)("a",{className:o().dynamic([["3280945445",[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium]]]),children:(0,c.tZ)(n.Z,{type:"brand",fullWidth:!0,onClick:d,children:"Check out Diffchecker Desktop"})})})]}),(0,c.tZ)(o(),{id:"3280945445",dynamic:[t||l.O9.brand.lightest,l.ce.borderRadius,l.fL.title.weight,l.fL.title.medium.size,l.fL.paragraph.default.size,l.ce.borderRadius,l.fL.title.weight,l.fL.title.default.size,l.fL.label.default.size,l.AV.web.small,l.AV.web.medium],children:[".hero.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 20px 20px;}",".main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:".concat(t||l.O9.brand.lightest,";border-radius:").concat(l.ce.borderRadius,";-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:20px;margin-right:20px;}"),".main.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{font-weight:".concat(l.fL.title.weight,";font-size:").concat(l.fL.title.medium.size,";}"),".main.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:".concat(l.fL.paragraph.default.size,";}"),".main-icon.__jsx-style-dynamic-selector{background:var(--back-strongest);border-radius:50%;padding:25px;margin-right:20px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}",".main-icon.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:101px;width:100px;}",".desktop.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:var(--back-stronger);border-radius:".concat(l.ce.borderRadius,";padding:45px;}"),".desktop.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{font-weight:".concat(l.fL.title.weight,";font-size:").concat(l.fL.title.default.size,";padding-top:0;}"),".desktop.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:".concat(l.fL.label.default.size,";}"),".desktop.full-width.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:20px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".desktop.full-width.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;}","@media (max-width:".concat(l.AV.web.small,"){.desktop.__jsx-style-dynamic-selector{display:none;}}"),"@media (max-width:".concat(l.AV.web.medium,"){.hero.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main.__jsx-style-dynamic-selector{margin:0;}.desktop.__jsx-style-dynamic-selector{margin:20px 0 0 0;}}"),"@media (max-width:920px){.main-icon.__jsx-style-dynamic-selector{display:none;}}"]})]})},82571:function(e){const t=e=>e.map((e=>encodeURIComponent(e))).join("?"),i="--dc-",a=e=>Object.entries(e).map((([e,t])=>"".concat(i).concat(e,"=").concat(t))),o="additionalArgs";e.exports={objectToAdditionalArgs:a,objectFromAdditionalArgs:e=>e.filter((e=>e.startsWith(i))).reduce(((e,t)=>{const[a,o]=t.split("="),[,n]=a.split(i);return e[n]=o,e}),{}),encodeAdditionalArgs:t,decodeAdditionalArgs:e=>e.split("?").map(decodeURIComponent),objectToEncodedAdditionalArgs:e=>t(a(e)),additionalArgs:()=>window.additionalArgs||{},clearAdditionalArgs:()=>{delete window.additionalArgs},additionalArgsWindowKey:o}},18528:function(e,t){"use strict";t.Z=e=>"".concat(e," - Diff Checker")},28218:function(e,t,i){"use strict";i.d(t,{XK:function(){return p},ad:function(){return m},gu:function(){return b},U4:function(){return u}});var a=i(17663),o=i(37359),n=i(90849);function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var s=e=>{let t=[],i=[],a=[];for(let o=0;o<e.length;o++){const n=e[o];n.left.chunks.every((e=>"equal"===e.type))&&n.right.chunks.every((e=>"equal"===e.type))?t.push(n):n.insideChanged&&!n.end?(i.push(l(l({},n),{},{right:void 0})),a.push(l(l({},n),{},{left:void 0}))):n.insideChanged&&n.end?(i.push(l(l({},n),{},{right:void 0})),a.push(l(l({},n),{},{left:void 0})),t=t.concat(i),t=t.concat(a),i=[],a=[]):0===n.right.chunks.length?t.push(l(l({},n),{},{right:void 0})):0===n.left.chunks.length?t.push(l(l({},n),{},{left:void 0})):t.push(n)}return t},c=i(90104),d=i.n(c);const f=({diff:e})=>e.diffs,m=(0,a.P1)([f,({diff:e})=>e.diffIndex],((e,t)=>-1===t?o.jD:e[t])),p=(0,a.P1)([m,({user:e})=>e.diffType],((e,t)=>e.rows?"unified"===t?s(e.rows).filter((e=>e.left&&!d()(e.left.chunks)||e.right&&!d()(e.right.chunks))):e.rows:[])),b=(0,a.P1)([f],(e=>e)),u=(0,a.P1)([({user:e})=>e.diffs],((e,t=5)=>e.slice(0,t)))},49500:function(e,t,i){"use strict";let a;i.d(t,{e:function(){return a}}),function(e){e.EXCEL="excel",e.PDF="pdf",e.TEXT="text",e.IMAGE="image"}(a||(a={}))}}]);