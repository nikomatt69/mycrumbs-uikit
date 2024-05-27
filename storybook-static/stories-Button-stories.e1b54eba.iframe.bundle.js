"use strict";(self.webpackChunk_lensshare_ui=self.webpackChunk_lensshare_ui||[]).push([[791],{"./cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/tailwind-merge/dist/bundle-mjs.mjs");const __WEBPACK_DEFAULT_EXPORT__=function(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/stories/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Black:()=>Black,Default:()=>Default,LargePrimary:()=>LargePrimary,OutlineDanger:()=>OutlineDanger,Template:()=>Template,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),cn=__webpack_require__("./cn.ts");const Button=(0,react.forwardRef)((function Button(param,ref){let{className="",size="md",variant="primary",outline,icon,children,...rest}=param;const commonStyles={"border-brand-600 focus:ring-brand-400/50 border":"primary"===variant,"border border-gray-600 focus:ring-gray-400/50":"secondary"===variant,"border border-yellow-600 focus:ring-yellow-400/50":"warning"===variant,"border border-black focus:ring-black":"black"===variant,"border border-red-600 focus:ring-red-400/50":"danger"===variant},nonOutlineStyles={"bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white":!outline&&"primary"===variant,"bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700":!outline&&"secondary"===variant,"bg-yellow-500 text-white hover:bg-yellow-400 active:bg-yellow-700":!outline&&"warning"===variant,"bg-black text-white hover:bg-gray-900 active:bg-black":!outline&&"black"===variant,"bg-red-500 text-white hover:bg-red-400 active:bg-red-700":!outline&&"danger"===variant},outlineStyles={"text-brand hover:bg-brand-50 active:bg-brand-100":outline&&"primary"===variant,"text-gray-500 hover:bg-gray-50 active:bg-gray-100":outline&&"secondary"===variant,"text-yellow-500 hover:bg-yellow-50 active:bg-yellow-100":outline&&"warning"===variant,"text-black hover:bg-gray-50 active:bg-black":outline&&"black"===variant,"text-red-500 hover:bg-red-50 active:bg-red-100":outline&&"danger"===variant},sizeStyles={"px-3 py-0.5 text-sm":"sm"===size,"px-3 py-1":"md"===size,"px-4 py-1.5":"lg"===size};return(0,jsx_runtime.jsxs)("button",{ref,className:(0,cn.A)({...commonStyles,...nonOutlineStyles,...outlineStyles,...sizeStyles,"inline-flex items-center space-x-1.5":icon&&children},"rounded-lg font-bold shadow-sm outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50",className),type:rest.type,...rest,children:[icon||null,(0,jsx_runtime.jsx)("div",{children})]})}));Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'primary'",computed:!1},required:!1}}};const esm_CheckCircleIcon=react.forwardRef((function CheckCircleIcon({title,titleId,...props},svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}));var _Template_parameters,_Template_parameters_docs,_Template_parameters1,_Default_parameters,_Default_parameters_docs,_Default_parameters1,_WithIcon_parameters,_WithIcon_parameters_docs,_WithIcon_parameters1,_LargePrimary_parameters,_LargePrimary_parameters_docs,_LargePrimary_parameters1,_OutlineDanger_parameters,_OutlineDanger_parameters_docs,_OutlineDanger_parameters1,_Black_parameters,_Black_parameters_docs,_Black_parameters1,dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");const Button_stories={title:"Components/Button",component:Button,argTypes:{size:{control:{type:"select",options:["sm","md","lg"]},defaultValue:"md"},variant:{control:{type:"select",options:["primary","secondary","warning","black","danger"]},defaultValue:"primary"},outline:{control:"boolean",defaultValue:!1},icon:{control:"boolean",mapping:{true:(0,jsx_runtime.jsx)(esm_CheckCircleIcon,{className:"h-3 w-3"}),false:null},defaultValue:!1},children:{control:"text",defaultValue:"Click me"},onClick:{action:"clicked"}},args:{onClick:(0,dist.fn)()},tags:["autodocs"]},Template=args=>(0,jsx_runtime.jsx)(Button,{...args}),Default=args=>(0,jsx_runtime.jsx)(Button,{...args});Default.args={variant:"primary",children:"Click Me",outline:!0,size:"md"};const WithIcon=args=>(0,jsx_runtime.jsx)(Button,{...args});WithIcon.args={...Default.args,icon:!0,children:"Confirm"};const LargePrimary=args=>(0,jsx_runtime.jsx)(Button,{...args});LargePrimary.args={...Default.args,size:"lg",variant:"primary"};const OutlineDanger=args=>(0,jsx_runtime.jsx)(Button,{...args});OutlineDanger.args={...Default.args,outline:!0,variant:"danger"};const Black=args=>(0,jsx_runtime.jsx)(Button,{...args});Black.args={...Default.args,outline:!0,variant:"black"},Template.parameters={...Template.parameters,docs:{...null===(_Template_parameters=Template.parameters)||void 0===_Template_parameters?void 0:_Template_parameters.docs,source:{originalSource:"args => <Button {...args} />",...null===(_Template_parameters1=Template.parameters)||void 0===_Template_parameters1||null===(_Template_parameters_docs=_Template_parameters1.docs)||void 0===_Template_parameters_docs?void 0:_Template_parameters_docs.source}}},Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"args => <Button {...args} />",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...null===(_WithIcon_parameters=WithIcon.parameters)||void 0===_WithIcon_parameters?void 0:_WithIcon_parameters.docs,source:{originalSource:"args => <Button {...args} />",...null===(_WithIcon_parameters1=WithIcon.parameters)||void 0===_WithIcon_parameters1||null===(_WithIcon_parameters_docs=_WithIcon_parameters1.docs)||void 0===_WithIcon_parameters_docs?void 0:_WithIcon_parameters_docs.source}}},LargePrimary.parameters={...LargePrimary.parameters,docs:{...null===(_LargePrimary_parameters=LargePrimary.parameters)||void 0===_LargePrimary_parameters?void 0:_LargePrimary_parameters.docs,source:{originalSource:"args => <Button {...args} />",...null===(_LargePrimary_parameters1=LargePrimary.parameters)||void 0===_LargePrimary_parameters1||null===(_LargePrimary_parameters_docs=_LargePrimary_parameters1.docs)||void 0===_LargePrimary_parameters_docs?void 0:_LargePrimary_parameters_docs.source}}},OutlineDanger.parameters={...OutlineDanger.parameters,docs:{...null===(_OutlineDanger_parameters=OutlineDanger.parameters)||void 0===_OutlineDanger_parameters?void 0:_OutlineDanger_parameters.docs,source:{originalSource:"args => <Button {...args} />",...null===(_OutlineDanger_parameters1=OutlineDanger.parameters)||void 0===_OutlineDanger_parameters1||null===(_OutlineDanger_parameters_docs=_OutlineDanger_parameters1.docs)||void 0===_OutlineDanger_parameters_docs?void 0:_OutlineDanger_parameters_docs.source}}},Black.parameters={...Black.parameters,docs:{...null===(_Black_parameters=Black.parameters)||void 0===_Black_parameters?void 0:_Black_parameters.docs,source:{originalSource:"args => <Button {...args} />",...null===(_Black_parameters1=Black.parameters)||void 0===_Black_parameters1||null===(_Black_parameters_docs=_Black_parameters1.docs)||void 0===_Black_parameters_docs?void 0:_Black_parameters_docs.source}}};const __namedExportsOrder=["Template","Default","WithIcon","LargePrimary","OutlineDanger","Black"]}}]);