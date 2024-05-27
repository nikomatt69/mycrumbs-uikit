"use strict";(self.webpackChunk_lensshare_ui=self.webpackChunk_lensshare_ui||[]).push([[373],{"./cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/tailwind-merge/dist/bundle-mjs.mjs");const __WEBPACK_DEFAULT_EXPORT__=function(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/Form.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bg:()=>FieldError});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");__webpack_require__("./cn.ts");const FieldError=param=>{let{name}=param;const{formState:{errors}}=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.xW)();if(!name)return null;const error=errors[name];return error?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-1 text-sm font-bold text-red-500",children:error.message}):null};FieldError.__docgenInfo={description:"",methods:[],displayName:"FieldError",props:{name:{required:!1,tsType:{name:"string"},description:""}}}},"./src/stories/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Template:()=>Template,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_stories});var jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),Form=__webpack_require__("./src/Form.tsx");const TextArea=(0,react.forwardRef)((function TextArea(param,ref){let{label,...props}=param;const id=(0,react.useId)();return(0,jsx_runtime.jsxs)("label",{htmlFor:id,children:[label?(0,jsx_runtime.jsx)("div",{className:"label",children:label}):null,(0,jsx_runtime.jsx)("textarea",{id,className:"focus:border-brand-500 focus:ring-brand-400 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 shadow-sm disabled:bg-gray-500/20 disabled:opacity-60 dark:border-gray-700 dark:bg-gray-900",ref,...props}),props.name?(0,jsx_runtime.jsx)(Form.bg,{name:props.name}):null]})}));var _Template_parameters,_Template_parameters_docs,_Template_parameters1,_Default_parameters,_Default_parameters_docs,_Default_parameters1,_WithLabel_parameters,_WithLabel_parameters_docs,_WithLabel_parameters1,_Disabled_parameters,_Disabled_parameters_docs,_Disabled_parameters1;TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const TextArea_stories={title:"Components/TextArea",component:TextArea,argTypes:{label:{control:"text",defaultValue:"Your Message"},placeholder:{control:"text",defaultValue:"Type your message here..."},disabled:{control:"boolean",defaultValue:!1},name:{control:"text",defaultValue:"message"},onChange:{action:"onChange"},onFocus:{action:"onFocus"},onBlur:{action:"onBlur"}},tags:["autodocs"]},Template=args=>(0,jsx_runtime.jsx)(TextArea,{...args}),Default=args=>(0,jsx_runtime.jsx)(TextArea,{...args});Default.args={};const WithLabel=args=>(0,jsx_runtime.jsx)(TextArea,{...args});WithLabel.args={label:"Your Message",placeholder:"Type something..."};const Disabled=args=>(0,jsx_runtime.jsx)(TextArea,{...args});Disabled.args={label:"Disabled Text Area",placeholder:"This text area is disabled",disabled:!0},Template.parameters={...Template.parameters,docs:{...null===(_Template_parameters=Template.parameters)||void 0===_Template_parameters?void 0:_Template_parameters.docs,source:{originalSource:"args => <TextArea {...args} />",...null===(_Template_parameters1=Template.parameters)||void 0===_Template_parameters1||null===(_Template_parameters_docs=_Template_parameters1.docs)||void 0===_Template_parameters_docs?void 0:_Template_parameters_docs.source}}},Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"args => <TextArea {...args} />",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...null===(_WithLabel_parameters=WithLabel.parameters)||void 0===_WithLabel_parameters?void 0:_WithLabel_parameters.docs,source:{originalSource:"args => <TextArea {...args} />",...null===(_WithLabel_parameters1=WithLabel.parameters)||void 0===_WithLabel_parameters1||null===(_WithLabel_parameters_docs=_WithLabel_parameters1.docs)||void 0===_WithLabel_parameters_docs?void 0:_WithLabel_parameters_docs.source}}},Disabled.parameters={...Disabled.parameters,docs:{...null===(_Disabled_parameters=Disabled.parameters)||void 0===_Disabled_parameters?void 0:_Disabled_parameters.docs,source:{originalSource:"args => <TextArea {...args} />",...null===(_Disabled_parameters1=Disabled.parameters)||void 0===_Disabled_parameters1||null===(_Disabled_parameters_docs=_Disabled_parameters1.docs)||void 0===_Disabled_parameters_docs?void 0:_Disabled_parameters_docs.source}}};const __namedExportsOrder=["Template","Default","WithLabel","Disabled"]}}]);