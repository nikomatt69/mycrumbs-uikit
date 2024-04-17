"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = exports.FieldError = exports.useZodForm = void 0;
var zod_1 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
var cn_1 = require("../cn");
var useZodForm = function (_a) {
    var schema = _a.schema, formConfig = __rest(_a, ["schema"]);
    return (0, react_hook_form_1.useForm)(__assign(__assign({}, formConfig), { resolver: (0, zod_1.zodResolver)(schema) }));
};
exports.useZodForm = useZodForm;
var FieldError = function (_a) {
    var name = _a.name;
    var errors = (0, react_hook_form_1.useFormContext)().formState.errors;
    if (!name) {
        return null;
    }
    var error = errors[name];
    if (!error) {
        return null;
    }
    return (React.createElement("div", { className: "mt-1 text-sm font-bold text-red-500" }, error.message));
};
exports.FieldError = FieldError;
var Form = function (_a) {
    var form = _a.form, onSubmit = _a.onSubmit, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React.createElement(react_hook_form_1.FormProvider, __assign({}, form),
        React.createElement("form", { onSubmit: form.handleSubmit(onSubmit) },
            React.createElement("fieldset", { className: (0, cn_1.default)('flex flex-col', className), disabled: form.formState.isSubmitting }, children))));
};
exports.Form = Form;
