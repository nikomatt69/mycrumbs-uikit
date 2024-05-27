"use strict";(self.webpackChunk_lensshare_ui=self.webpackChunk_lensshare_ui||[]).push([[107],{"./cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/tailwind-merge/dist/bundle-mjs.mjs");const __WEBPACK_DEFAULT_EXPORT__=function(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/stories/Toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Template:()=>Template,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toggle_stories});var jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2);function class_names_t(...r){return Array.from(new Set(r.flatMap((n=>"string"==typeof n?n.split(" "):[])))).filter(Boolean).join(" ")}function match_u(r,n,...a){if(r in n){let e=n[r];return"function"==typeof e?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,match_u),t}var S=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(S||{}),j=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(j||{});function X({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:f}){let o=N(t,r);if(n)return c(o,e,a,f);let u=null!=s?s:0;if(2&u){let{static:l=!1,...p}=o;if(l)return c(p,e,a,f)}if(1&u){let{unmount:l=!0,...p}=o;return match_u(l?0:1,{0:()=>null,1:()=>c({...p,hidden:!0,style:{display:"none"}},e,a,f)})}return c(o,e,a,f)}function c(r,t={},e,a){let{as:s=e,children:n,refName:f="ref",...o}=g(r,["unmount","static"]),u=void 0!==r.ref?{[f]:r.ref}:{},l="function"==typeof n?n(t):n;"className"in o&&o.className&&"function"==typeof o.className&&(o.className=o.className(t));let p={};if(t){let i=!1,m=[];for(let[y,d]of Object.entries(t))"boolean"==typeof d&&(i=!0),!0===d&&m.push(y);i&&(p["data-headlessui-state"]=m.join(" "))}if(s===react.Fragment&&Object.keys(render_R(o)).length>0){if(!(0,react.isValidElement)(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map((d=>`  - ${d}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((d=>`  - ${d}`)).join("\n")].join("\n"));let i=l.props,m="function"==typeof(null==i?void 0:i.className)?(...d)=>class_names_t(null==i?void 0:i.className(...d),o.className):class_names_t(null==i?void 0:i.className,o.className),y=m?{className:m}:{};return(0,react.cloneElement)(l,Object.assign({},N(l.props,render_R(g(o,["ref"]))),p,u,function w(...r){return{ref:r.every((t=>null==t))?void 0:t=>{for(let e of r)null!=e&&("function"==typeof e?e(t):e.current=t)}}}(l.ref,u.ref),y))}return(0,react.createElement)(s,Object.assign({},g(o,["ref"]),s!==react.Fragment&&u,s!==react.Fragment&&p),l)}function N(...r){if(0===r.length)return{};if(1===r.length)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&"function"==typeof s[n]?(null!=e[n]||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map((s=>[s,void 0]))));for(let s in e)Object.assign(t,{[s](n,...f){let o=e[s];for(let u of o){if((n instanceof Event||(null==n?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...f)}}});return t}function D(r){var t;return Object.assign((0,react.forwardRef)(r),{displayName:null!=(t=r.displayName)?t:r.name})}function render_R(r){let t=Object.assign({},r);for(let e in t)void 0===t[e]&&delete t[e];return t}function g(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}var i=Object.defineProperty,r=(t,e,n)=>(((t,e,n)=>{e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n);let s=new class o{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},use_iso_morphic_effect_l=(e,f)=>{s.isServer?(0,react.useEffect)(e,f):(0,react.useLayoutEffect)(e,f)};function l(){let r=function use_server_handoff_complete_s(){let r="undefined"==typeof document;return(o=>o.useSyncExternalStore)(react_namespaceObject)((()=>()=>{}),(()=>!1),(()=>!r))}(),[e,n]=react.useState(s.isHandoffComplete);return e&&!1===s.isHandoffComplete&&n(!1),react.useEffect((()=>{!0!==e&&n(!0)}),[e]),react.useEffect((()=>s.handoff()),[]),!r&&e}var use_id_o;let I=null!=(use_id_o=react.useId)?use_id_o:function(){let n=l(),[e,u]=react.useState(n?()=>s.nextId():null);return use_iso_morphic_effect_l((()=>{null===e&&u(s.nextId())}),[e]),null!=e?""+e:void 0};var keyboard_o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(keyboard_o||{});function bugs_r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=""===(null==e?void 0:e.getAttribute("disabled"));return(!t||!function bugs_i(n){if(!n)return!1;let e=n.previousElementSibling;for(;null!==e;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}(l))&&t}let use_event_o=function(t){let e=function use_latest_value_s(e){let r=(0,react.useRef)(e);return use_iso_morphic_effect_l((()=>{r.current=e}),[e]),r}(t);return react.useCallback(((...r)=>e.current(...r)),[e])},u=Symbol();function y(...t){let n=(0,react.useRef)(t);(0,react.useEffect)((()=>{n.current=t}),[t]);let c=use_event_o((e=>{for(let o of n.current)null!=o&&("function"==typeof o?o(e):o.current=e)}));return t.every((e=>null==e||(null==e?void 0:e[u])))?void 0:c}let label_d=(0,react.createContext)(null);function label_u(){let o=(0,react.useContext)(label_d);if(null===o){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,label_u),t}return o}let v=D((function h(o,t){let i=I(),{id:e=`headlessui-label-${i}`,passive:s=!1,...a}=o,r=label_u(),l=y(t);use_iso_morphic_effect_l((()=>r.register(e)),[e,r.register]);let n={ref:l,...r.props,id:e};return s&&("onClick"in n&&(delete n.htmlFor,delete n.onClick),"onClick"in a&&delete a.onClick),X({ourProps:n,theirProps:a,slot:r.slot||{},defaultTag:"label",name:r.name||"Label"})})),M=Object.assign(v,{}),description_d=(0,react.createContext)(null);function f(){let r=(0,react.useContext)(description_d);if(null===r){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,f),t}return r}let description_y=D((function description_h(r,t){let a=I(),{id:e=`headlessui-description-${a}`,...i}=r,n=f(),s=y(t);return use_iso_morphic_effect_l((()=>n.register(e)),[e,n.register]),X({ourProps:{ref:s,...n.props,id:e},theirProps:i,slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})})),b=Object.assign(description_y,{});function use_resolve_button_type_i(t){var n;if(t.type)return t.type;let e=null!=(n=t.as)?n:"button";return"string"==typeof e&&"button"===e.toLowerCase()?"button":void 0}function use_resolve_button_type_s(t,e){let[n,u]=(0,react.useState)((()=>use_resolve_button_type_i(t)));return use_iso_morphic_effect_l((()=>{u(use_resolve_button_type_i(t))}),[t.type,t.as]),use_iso_morphic_effect_l((()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")}),[n,e]),n}var hidden_p=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(hidden_p||{});let hidden_c=D((function hidden_s(t,o){let{features:n=1,...e}=t;return X({ourProps:{ref:o,"aria-hidden":!(2&~n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...!(4&~n)&&!!(2&~n)&&{display:"none"}}},theirProps:e,slot:{},defaultTag:"div",name:"Hidden"})}));var console=__webpack_require__("../../node_modules/console-browserify/index.js");function disposables_o(){let n=[],r={addEventListener:(e,t,s,a)=>(e.addEventListener(t,s,a),r.add((()=>e.removeEventListener(t,s,a)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>r.requestAnimationFrame((()=>r.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return r.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return function micro_task_t(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((o=>setTimeout((()=>{throw o}))))}((()=>{t.current&&e[0]()})),r.add((()=>{t.current=!1}))},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add((()=>{Object.assign(e.style,{[t]:a})}))},group(e){let t=disposables_o();return e(t),this.add((()=>t.dispose()))},add:e=>(n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}),dispose(){for(let e of n.splice(0))e()}};return r}let switch_y=(0,react.createContext)(null);switch_y.displayName="GroupContext";let Y=react.Fragment;let ne=D((function te(s,n){let p=I(),{id:c=`headlessui-switch-${p}`,checked:f,defaultChecked:r=!1,onChange:h,name:l,value:T,form:b,...d}=s,t=(0,react.useContext)(switch_y),u=(0,react.useRef)(null),D=y(u,n,null===t?null:t.setSwitch),[o,a]=function use_controllable_T(l,r,c){let[i,s]=(0,react.useState)(c),e=void 0!==l,t=(0,react.useRef)(e),u=(0,react.useRef)(!1),d=(0,react.useRef)(!1);return!e||t.current||u.current?!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[e?l:i,use_event_o((n=>(e||s(n),null==r?void 0:r(n))))]}(f,h,r),S=use_event_o((()=>null==a?void 0:a(!o))),C=use_event_o((e=>{if(bugs_r(e.currentTarget))return e.preventDefault();e.preventDefault(),S()})),L=use_event_o((e=>{e.key===keyboard_o.Space?(e.preventDefault(),S()):e.key===keyboard_o.Enter&&function form_p(i){var t,r;let s=null!=(t=null==i?void 0:i.form)?t:i.closest("form");if(s){for(let n of s.elements)if(n!==i&&("INPUT"===n.tagName&&"submit"===n.type||"BUTTON"===n.tagName&&"submit"===n.type||"INPUT"===n.nodeName&&"image"===n.type))return void n.click();null==(r=s.requestSubmit)||r.call(s)}}(e.currentTarget)})),v=use_event_o((e=>e.preventDefault())),G=(0,react.useMemo)((()=>({checked:o})),[o]),R={id:c,ref:D,role:"switch",type:use_resolve_button_type_s(s,u),tabIndex:0,"aria-checked":o,"aria-labelledby":null==t?void 0:t.labelledby,"aria-describedby":null==t?void 0:t.describedby,onClick:C,onKeyUp:L,onKeyPress:v},k=function use_disposables_p(){let[e]=(0,react.useState)(disposables_o);return(0,react.useEffect)((()=>()=>e.dispose()),[e]),e}();return(0,react.useEffect)((()=>{var w;let e=null==(w=u.current)?void 0:w.closest("form");e&&void 0!==r&&k.addEventListener(e,"reset",(()=>{a(r)}))}),[u,a]),react.createElement(react.Fragment,null,null!=l&&o&&react.createElement(hidden_c,{features:hidden_p.Hidden,...render_R({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:b,checked:o,name:l,value:T})}),X({ourProps:R,theirProps:d,slot:G,defaultTag:"button",name:"Switch"}))})),re=function Z(s){var d;let[n,p]=(0,react.useState)(null),[c,f]=function H(){let[o,t]=(0,react.useState)([]);return[o.length>0?o.join(" "):void 0,(0,react.useMemo)((()=>function(e){let s=use_event_o((r=>(t((l=>[...l,r])),()=>t((l=>{let n=l.slice(),p=n.indexOf(r);return-1!==p&&n.splice(p,1),n}))))),a=(0,react.useMemo)((()=>({register:s,slot:e.slot,name:e.name,props:e.props})),[s,e.slot,e.name,e.props]);return react.createElement(label_d.Provider,{value:a},e.children)}),[t])]}(),[r,h]=function description_M(){let[r,t]=(0,react.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react.useMemo)((()=>function(e){let i=use_event_o((s=>(t((o=>[...o,s])),()=>t((o=>{let p=o.slice(),c=p.indexOf(s);return-1!==c&&p.splice(c,1),p}))))),n=(0,react.useMemo)((()=>({register:i,slot:e.slot,name:e.name,props:e.props})),[i,e.slot,e.name,e.props]);return react.createElement(description_d.Provider,{value:n},e.children)}),[t])]}(),l=(0,react.useMemo)((()=>({switch:n,setSwitch:p,labelledby:c,describedby:r})),[n,p,c,r]),b=s;return react.createElement(h,{name:"Switch.Description"},react.createElement(f,{name:"Switch.Label",props:{htmlFor:null==(d=l.switch)?void 0:d.id,onClick(t){n&&("LABEL"===t.currentTarget.tagName&&t.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},react.createElement(switch_y.Provider,{value:l},X({ourProps:{},theirProps:b,defaultTag:Y,name:"Switch.Group"}))))},Ge=Object.assign(ne,{Group:re,Label:M,Description:b});var cn=__webpack_require__("./cn.ts");const Toggle=param=>{let{on,setOn}=param;return(0,jsx_runtime.jsx)(Ge,{checked:on,onChange:()=>{setOn(!on)},className:(0,cn.A)(on?"bg-brand-500":"bg-gray-200 dark:bg-gray-700","inline-flex h-[22px] w-[42.5px] min-w-[42.5px] cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"),children:(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",className:(0,cn.A)(on?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-[18px] w-[18px] rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out")})})};var _Template_parameters,_Template_parameters_docs,_Template_parameters1,_Default_parameters,_Default_parameters_docs,_Default_parameters1,_WithLabel_parameters,_WithLabel_parameters_docs,_WithLabel_parameters1,_Disabled_parameters,_Disabled_parameters_docs,_Disabled_parameters1;Toggle.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{on:{required:!0,tsType:{name:"boolean"},description:""},setOn:{required:!0,tsType:{name:"signature",type:"function",raw:"(on: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"on"}],return:{name:"void"}}},description:""}}};const Toggle_stories={title:"Components/Toggle Switch",component:Toggle,argTypes:{initial:{control:"boolean",defaultValue:!1},onColor:{control:"color",defaultValue:"#4CAF50"},offColor:{control:"color",defaultValue:"#f44336"},padding:{control:"text",defaultValue:"10px"},setOn:{control:"boolean",defaultValue:!1}},tags:["autodocs"]},Template=args=>(0,jsx_runtime.jsx)(Toggle,{...args}),Default=args=>(0,jsx_runtime.jsx)(Toggle,{...args});Default.args={};const WithLabel=args=>(0,jsx_runtime.jsx)(Toggle,{...args});WithLabel.args={on:!1,setOn(on){}};const Disabled=args=>(0,jsx_runtime.jsx)(Toggle,{...args});Disabled.args={on:!0,setOn(on){}},Template.parameters={...Template.parameters,docs:{...null===(_Template_parameters=Template.parameters)||void 0===_Template_parameters?void 0:_Template_parameters.docs,source:{originalSource:"args => <Toggle {...args} />",...null===(_Template_parameters1=Template.parameters)||void 0===_Template_parameters1||null===(_Template_parameters_docs=_Template_parameters1.docs)||void 0===_Template_parameters_docs?void 0:_Template_parameters_docs.source}}},Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"args => <Toggle {...args} />",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...null===(_WithLabel_parameters=WithLabel.parameters)||void 0===_WithLabel_parameters?void 0:_WithLabel_parameters.docs,source:{originalSource:"args => <Toggle {...args} />",...null===(_WithLabel_parameters1=WithLabel.parameters)||void 0===_WithLabel_parameters1||null===(_WithLabel_parameters_docs=_WithLabel_parameters1.docs)||void 0===_WithLabel_parameters_docs?void 0:_WithLabel_parameters_docs.source}}},Disabled.parameters={...Disabled.parameters,docs:{...null===(_Disabled_parameters=Disabled.parameters)||void 0===_Disabled_parameters?void 0:_Disabled_parameters.docs,source:{originalSource:"args => <Toggle {...args} />",...null===(_Disabled_parameters1=Disabled.parameters)||void 0===_Disabled_parameters1||null===(_Disabled_parameters_docs=_Disabled_parameters1.docs)||void 0===_Disabled_parameters_docs?void 0:_Disabled_parameters_docs.source}}};const __namedExportsOrder=["Template","Default","WithLabel","Disabled"]}}]);