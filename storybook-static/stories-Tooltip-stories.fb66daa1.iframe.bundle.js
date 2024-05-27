"use strict";(self.webpackChunkmycrumbs_uikit=self.webpackChunkmycrumbs_uikit||[]).push([[656],{"./src/stories/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs");__webpack_require__("./node_modules/tippy.js/dist/tippy.css");const Tooltip=param=>{let{children,className="",content,placement="right",withDelay=!1}=param;return(0,jsx_runtime.jsx)(dist.Kq,{delayDuration:withDelay?400:0,children:(0,jsx_runtime.jsxs)(dist.bL,{children:[(0,jsx_runtime.jsx)(dist.l9,{asChild:!0,children:(0,jsx_runtime.jsx)("span",{children})}),(0,jsx_runtime.jsx)(dist.ZL,{children:(0,jsx_runtime.jsxs)(dist.UC,{className:"z-10 hidden !rounded-lg bg-gray-700 px-3 py-0.5 !text-xs !leading-6 tracking-wide text-white sm:block",side:placement,sideOffset:5,children:[(0,jsx_runtime.jsx)("span",{className,children:content}),(0,jsx_runtime.jsx)(dist.i3,{className:"fill-gray-700"})]})})]})})};var _Template_parameters,_Template_parameters_docs,_Template_parameters1;Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{arrow:{required:!1,tsType:{name:"boolean"},description:""},asPopover:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},content:{required:!0,tsType:{name:"ReactNode"},description:""},interactive:{required:!1,tsType:{name:"boolean"},description:"Make the popup content interactive i.e clickable or selectable"},placement:{required:!1,tsType:{name:"union",raw:"'bottom' | 'left' | 'right' | 'top'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},theme:{required:!1,tsType:{name:"string"},description:""},withDelay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Tooltip_stories={title:"Components/Tooltip",component:Tooltip,argTypes:{content:{control:"text",defaultValue:"More info here"},backgroundColor:{control:"color",defaultValue:"#f3f3f3"},borderColor:{control:"color",defaultValue:"#ccc"},padding:{control:"text",defaultValue:"10px"}},tags:["autodocs"]},Template=args=>(0,jsx_runtime.jsx)(Tooltip,{...args,children:(0,jsx_runtime.jsx)("button",{children:"Hover over me"})});Template.parameters={...Template.parameters,docs:{...null===(_Template_parameters=Template.parameters)||void 0===_Template_parameters?void 0:_Template_parameters.docs,source:{originalSource:"args => <Tooltip {...args}>\n        <button>Hover over me</button>\n    </Tooltip>",...null===(_Template_parameters1=Template.parameters)||void 0===_Template_parameters1||null===(_Template_parameters_docs=_Template_parameters1.docs)||void 0===_Template_parameters_docs?void 0:_Template_parameters_docs.source}}};const __namedExportsOrder=["Template"]}}]);