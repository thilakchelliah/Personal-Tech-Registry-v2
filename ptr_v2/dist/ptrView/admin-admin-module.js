(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/@angular/forms/fesm5/forms.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/forms/fesm5/forms.js ***!
  \****************************************************/
/*! exports provided: ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_z, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_bh, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_bg, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_t, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, RadioControlValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function() { return InternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function() { return NG_FORM_SELECTOR_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bh", function() { return NgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bg", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function() { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function() { return NgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function() { return REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormSelectorWarning", function() { return NgFormSelectorWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v7.0.4
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * Base class for control directives.
 *
 * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
 *
 * @publicApi
 */
var AbstractControlDirective = /** @class */ (function () {
    function AbstractControlDirective() {
    }
    Object.defineProperty(AbstractControlDirective.prototype, "value", {
        /**
         * @description
         * Reports the value of the control if it is present, otherwise null.
         */
        get: function () { return this.control ? this.control.value : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
        /**
         * @description
         * Reports whether the control is valid. A control is considered valid if no
         * validation errors exist with the current value.
         * If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.valid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
        /**
         * @description
         * Reports whether the control is invalid, meaning that an error exists in the input value.
         * If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.invalid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
        /**
         * @description
         * Reports whether a control is pending, meaning that that async validation is occurring and
         * errors are not yet available for the input value. If the control is not present, null is
         * returned.
         */
        get: function () { return this.control ? this.control.pending : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
        /**
         * @description
         * Reports whether the control is disabled, meaning that the control is disabled
         * in the UI and is exempt from validation checks and excluded from aggregate
         * values of ancestor controls. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.disabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
        /**
         * @description
         * Reports whether the control is enabled, meaning that the control is included in ancestor
         * calculations of validity or value. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.enabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
        /**
         * @description
         * Reports the control's validation errors. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.errors : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
        /**
         * @description
         * Reports whether the control is pristine, meaning that the user has not yet changed
         * the value in the UI. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.pristine : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
        /**
         * @description
         * Reports whether the control is dirty, meaning that the user has changed
         * the value in the UI. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.dirty : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
        /**
         * @description
         * Reports whether the control is touched, meaning that the user has triggered
         * a `blur` event on it. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.touched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "status", {
        /**
         * @description
         * Reports the validation status of the control. Possible values include:
         * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
         * If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.status : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
        /**
         * @description
         * Reports whether the control is untouched, meaning that the user has not yet triggered
         * a `blur` event on it. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.untouched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
        /**
         * @description
         * Returns a multicasting observable that emits a validation status whenever it is
         * calculated for the control. If the control is not present, null is returned.
         */
        get: function () {
            return this.control ? this.control.statusChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
        /**
         * @description
         * Returns a multicasting observable of value changes for the control that emits every time the
         * value of the control changes in the UI or programmatically.
         * If the control is not present, null is returned.
         */
        get: function () {
            return this.control ? this.control.valueChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Resets the control with the provided value if the control is present.
     */
    AbstractControlDirective.prototype.reset = function (value) {
        if (value === void 0) { value = undefined; }
        if (this.control)
            this.control.reset(value);
    };
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     * If no path is given, it checks for the error on the present control.
     * If the control is not present, false is returned.
     */
    AbstractControlDirective.prototype.hasError = function (errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
    };
    /**
     * @description
     * Reports error data for the control with the given path.
     * If the control is not present, null is returned.
     */
    AbstractControlDirective.prototype.getError = function (errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
    };
    return AbstractControlDirective;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * @publicApi
 */
var ControlContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ControlContainer, _super);
    function ControlContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlContainer.prototype, "formDirective", {
        /**
         * @description
         * The top-level form directive for the control.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
        /**
         * @description
         * The path to this group.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    return ControlContainer;
}(AbstractControlDirective));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * @description
 * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
 *
 * @see `NG_ASYNC_VALIDATORS`
 *
 * @usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * @Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 * @publicApi
 */
var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgValidators');
/**
 * @description
 * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 * @publicApi
 */
var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgAsyncValidators');
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 * @publicApi
 */
var Validators = /** @class */ (function () {
    function Validators() {
    }
    /**
     * @description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     */
    Validators.min = function (min) {
        return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                return null; // don't validate empty values to allow optional controls
            }
            var value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
            return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
        };
    };
    /**
     * @description
     * Validator that requires the control's value to be less than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     */
    Validators.max = function (max) {
        return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                return null; // don't validate empty values to allow optional controls
            }
            var value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
            return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
        };
    };
    /**
     * @description
     * Validator that requires the control have a non-empty value.
     *
     * @usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.required = function (control) {
        return isEmptyInputValue(control.value) ? { 'required': true } : null;
    };
    /**
     * @description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * @usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     */
    Validators.requiredTrue = function (control) {
        return control.value === true ? null : { 'required': true };
    };
    /**
     * @description
     * Validator that requires the control's value pass an email validation test.
     *
     * @usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.email = function (control) {
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    /**
     * @description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     */
    Validators.minLength = function (minLength) {
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * @description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     */
    Validators.maxLength = function (maxLength) {
        return function (control) {
            var length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * @description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided
     * by default if you use the HTML5 `pattern` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     */
    Validators.pattern = function (pattern) {
        if (!pattern)
            return Validators.nullValidator;
        var regex;
        var regexStr;
        if (typeof pattern === 'string') {
            regexStr = '';
            if (pattern.charAt(0) !== '^')
                regexStr += '^';
            regexStr += pattern;
            if (pattern.charAt(pattern.length - 1) !== '$')
                regexStr += '$';
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var value = control.value;
            return regex.test(value) ? null :
                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
        };
    };
    /**
     * @description
     * Validator that performs no operation.
     */
    Validators.nullValidator = function (control) { return null; };
    Validators.compose = function (validators) {
        if (!validators)
            return null;
        var presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
    */
    Validators.composeAsync = function (validators) {
        if (!validators)
            return null;
        var presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
        };
    };
    return Validators;
}());
function isPresent(o) {
    return o != null;
}
function toObservable(r) {
    var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;
    if (!(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵisObservable"])(obs))) {
        throw new Error("Expected validator to return Promise or Observable.");
    }
    return obs;
}
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
function _mergeErrors(arrayOfErrors) {
    var res = arrayOfErrors.reduce(function (res, errors) {
        return errors != null ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, res, errors) : res;
    }, {});
    return Object.keys(res).length === 0 ? null : res;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * @publicApi
 */
var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgValueAccessor');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxControlValueAccessor; }),
    multi: true,
};
/**
 * @description
 * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
 * element.
 *
 * @usageNotes
 *
 * ### Using a checkbox with a reactive form.
 *
 * The following example shows how to use a checkbox with a reactive form.
 *
 * ```ts
 * const rememberLoginControl = new FormControl();
 * ```
 *
 * ```
 * <input type="checkbox" [formControl]="rememberLoginControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var CheckboxControlValueAccessor = /** @class */ (function () {
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = function (_) { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
    }
    /**
     * Sets the "checked" property on the input element.
     *
     * @param value The checked value
     */
    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
    };
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param isDisabled The disabled value
     */
    CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    CheckboxControlValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
            host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
            providers: [CHECKBOX_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CheckboxControlValueAccessor);
    return CheckboxControlValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DefaultValueAccessor; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    var userAgent = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["ɵgetDOM"])() ? Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["ɵgetDOM"])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * Turn this mode on if you want form directives to buffer IME input until compositionend
 * @publicApi
 */
var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('CompositionEventMode');
/**
 * @description
 * The default `ControlValueAccessor` for writing a value and listening to changes on input
 * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using the default value accessor
 *
 * The following example shows how to use an input element that activates the default value accessor
 * (in this case, a text field).
 *
 * ```ts
 * const firstNameControl = new FormControl();
 * ```
 *
 * ```
 * <input type="text" [formControl]="firstNameControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var DefaultValueAccessor = /** @class */ (function () {
    function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        /**
         * @description
         * The registered callback function called when an input event occurs on the input element.
         */
        this.onChange = function (_) { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param value The checked value
     */
    DefaultValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param isDisabled The disabled value
     */
    DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    DefaultValueAccessor.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    };
    /** @internal */
    DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
    /** @internal */
    DefaultValueAccessor.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    };
    DefaultValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
            // TODO: vsavkin replace the above selector with the one below it once
            // https://github.com/angular/angular/issues/3011 is implemented
            // selector: '[ngModel],[formControl],[formControlName]',
            host: {
                '(input)': '$any(this)._handleInput($event.target.value)',
                '(blur)': 'onTouched()',
                '(compositionstart)': '$any(this)._compositionStart()',
                '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
            },
            providers: [DEFAULT_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(COMPOSITION_BUFFER_MODE)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Boolean])
    ], DefaultValueAccessor);
    return DefaultValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeValidator(validator) {
    if (validator.validate) {
        return function (c) { return validator.validate(c); };
    }
    else {
        return validator;
    }
}
function normalizeAsyncValidator(validator) {
    if (validator.validate) {
        return function (c) { return validator.validate(c); };
    }
    else {
        return validator;
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NumberValueAccessor; }),
    multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a number value and listening to number input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a number input with a reactive form.
 *
 * The following example shows how to use a number input with a reactive form.
 *
 * ```ts
 * const totalCountControl = new FormControl();
 * ```
 *
 * ```
 * <input type="number" [formControl]="totalCountControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */
var NumberValueAccessor = /** @class */ (function () {
    function NumberValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */
        this.onChange = function (_) { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param value The checked value
     */
    NumberValueAccessor.prototype.writeValue = function (value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    NumberValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param isDisabled The disabled value
     */
    NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    NumberValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
            host: {
                '(change)': 'onChange($event.target.value)',
                '(input)': 'onChange($event.target.value)',
                '(blur)': 'onTouched()'
            },
            providers: [NUMBER_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NumberValueAccessor);
    return NumberValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * @description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * @publicApi
 */
var NgControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgControl, _super);
    function NgControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @description
         * The parent form for the control.
         *
         * @internal
         */
        _this._parent = null;
        /**
         * @description
         * The name for the control
         */
        _this.name = null;
        /**
         * @description
         * The value accessor for the control
         */
        _this.valueAccessor = null;
        /**
         * @description
         * The uncomposed array of synchronous validators for the control
         *
         * @internal
         */
        _this._rawValidators = [];
        /**
         * @description
         * The uncomposed array of async validators for the control
         *
         * @internal
         */
        _this._rawAsyncValidators = [];
        return _this;
    }
    Object.defineProperty(NgControl.prototype, "validator", {
        /**
         * @description
         * The registered synchronous validator function for the control
         *
         * @throws An exception that this method is not implemented
         */
        get: function () { return unimplemented(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgControl.prototype, "asyncValidator", {
        /**
         * @description
         * The registered async validator function for the control
         *
         * @throws An exception that this method is not implemented
         */
        get: function () { return unimplemented(); },
        enumerable: true,
        configurable: true
    });
    return NgControl;
}(AbstractControlDirective));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RadioControlValueAccessor; }),
    multi: true
};
/**
 * @description
 * Class used by Angular to track radio buttons. For internal use only.
 */
var RadioControlRegistry = /** @class */ (function () {
    function RadioControlRegistry() {
        this._accessors = [];
    }
    /**
     * @description
     * Adds a control to the internal registry. For internal use only.
     */
    RadioControlRegistry.prototype.add = function (control, accessor) {
        this._accessors.push([control, accessor]);
    };
    /**
     * @description
     * Removes a control from the internal registry. For internal use only.
     */
    RadioControlRegistry.prototype.remove = function (accessor) {
        for (var i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    };
    /**
     * @description
     * Selects a radio button. For internal use only.
     */
    RadioControlRegistry.prototype.select = function (accessor) {
        var _this = this;
        this._accessors.forEach(function (c) {
            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        });
    };
    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    };
    RadioControlRegistry = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RadioControlRegistry);
    return RadioControlRegistry;
}());
/**
 * @description
 * The `ControlValueAccessor` for writing radio control values and listening to radio control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using radio buttons with reactive form directives
 *
 * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
 * a reactive form, radio buttons in the same group should have the same `formControlName`.
 * Providing a `name` attribute is optional.
 *
 * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var RadioControlValueAccessor = /** @class */ (function () {
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = function () { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
    }
    /**
     * @description
     * A lifecycle method called when the directive is initialized. For internal use only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    RadioControlValueAccessor.prototype.ngOnInit = function () {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    };
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
    /**
     * @description
     * Sets the "checked" property value on the radio input element.
     *
     * @param value The checked value
     */
    RadioControlValueAccessor.prototype.writeValue = function (value) {
        this._state = value === this.value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
    };
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function () {
            fn(_this.value);
            _this._registry.select(_this);
        };
    };
    /**
     * Sets the "value" on the radio input element and unchecks it.
     *
     * @param value
     */
    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param isDisabled The disabled value
     */
    RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    RadioControlValueAccessor.prototype._checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    };
    RadioControlValueAccessor.prototype._throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RadioControlValueAccessor.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RadioControlValueAccessor.prototype, "formControlName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RadioControlValueAccessor.prototype, "value", void 0);
    RadioControlValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
            host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
            providers: [RADIO_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            RadioControlRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], RadioControlValueAccessor);
    return RadioControlValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RangeValueAccessor; }),
    multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a range value and listening to range input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a range input with a reactive form
 *
 * The following example shows how to use a range input with a reactive form.
 *
 * ```ts
 * const ageControl = new FormControl();
 * ```
 *
 * ```
 * <input type="range" [formControl]="ageControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */
var RangeValueAccessor = /** @class */ (function () {
    function RangeValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */
        this.onChange = function (_) { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param value The checked value
     */
    RangeValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    };
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    RangeValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the range input element.
     *
     * @param isDisabled The disabled value
     */
    RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    RangeValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
            host: {
                '(change)': 'onChange($event.target.value)',
                '(input)': 'onChange($event.target.value)',
                '(blur)': 'onTouched()'
            },
            providers: [RANGE_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], RangeValueAccessor);
    return RangeValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var FormErrorExamples = {
    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ReactiveErrors = /** @class */ (function () {
    function ReactiveErrors() {
    }
    ReactiveErrors.controlParentException = function () {
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
    };
    ReactiveErrors.ngModelGroupException = function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
    };
    ReactiveErrors.missingFormException = function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
    };
    ReactiveErrors.groupParentException = function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
    };
    ReactiveErrors.arrayParentException = function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
    };
    ReactiveErrors.disabledAttrWarning = function () {
        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    };
    ReactiveErrors.ngModelWarning = function (directiveName) {
        console.warn("\n    It looks like you're using ngModel on the same form field as " + directiveName + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + (directiveName === 'formControl' ? 'FormControlDirective'
            : 'FormControlName') + "#use-with-ngmodel\n    ");
    };
    return ReactiveErrors;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SelectControlValueAccessor; }),
    multi: true
};
function _buildValueString(id, value) {
    if (id == null)
        return "" + value;
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * @description
 * The `ControlValueAccessor` for writing select control values and listening to select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using select controls in a reactive form
 *
 * The following examples show how to use a select control in a reactive form.
 *
 * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Using select controls in a template-driven form
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * ### Customizing option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * ```ts
 * const selectedCountriesControl = new FormControl();
 * ```
 *
 * ```
 * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * **Note:** We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var SelectControlValueAccessor = /** @class */ (function () {
    function SelectControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = function (_) { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the "value" property on the input element. The "selectedIndex"
     * property is also set if an ID is provided on the option element.
     *
     * @param value The checked value
     */
    SelectControlValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
        var id = this._getOptionId(value);
        if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        var valueString = _buildValueString(id, value);
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
    };
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */
    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (valueString) {
            _this.value = _this._getOptionValue(valueString);
            fn(_this.value);
        };
    };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the select input element.
     *
     * @param isDisabled The disabled value
     */
    SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
    /** @internal */
    SelectControlValueAccessor.prototype._getOptionId = function (value) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                if (this._compareWith(this._optionMap.get(id), value))
                    return id;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /** @internal */
    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Function])
    ], SelectControlValueAccessor.prototype, "compareWith", null);
    SelectControlValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
            host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
            providers: [SELECT_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SelectControlValueAccessor);
    return SelectControlValueAccessor;
}());
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var NgSelectOption = /** @class */ (function () {
    function NgSelectOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._select._optionMap.set(this.id, value);
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectOption.prototype, "value", {
        /**
         * @description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         */
        set: function (value) {
            this._setElementValue(value);
            if (this._select)
                this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgSelectOption.prototype._setElementValue = function (value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     */
    NgSelectOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngValue'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgSelectOption.prototype, "ngValue", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgSelectOption.prototype, "value", null);
    NgSelectOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'option' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            SelectControlValueAccessor])
    ], NgSelectOption);
    return NgSelectOption;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SelectMultipleControlValueAccessor; }),
    multi: true
};
function _buildValueString$1(id, value) {
    if (id == null)
        return "" + value;
    if (typeof value === 'string')
        value = "'" + value + "'";
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * @description
 * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
 * directives.
 *
 * @see `SelectControlValueAccessor`
 *
 * @usageNotes
 *
 * ### Using a multi-select control
 *
 * The follow example shows you how to use a multi-select control with a reactive form.
 *
 * ```ts
 * const countryControl = new FormControl();
 * ```
 *
 * ```
 * <select multiple name="countries" [formControl]="countryControl">
 *   <option *ngFor="let country of countries" [ngValue]="country">
 *     {{ country.name }}
 *   </option>
 * </select>
 * ```
 *
 * ### Customizing option selection
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * See the `SelectControlValueAccessor` for usage.
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var SelectMultipleControlValueAccessor = /** @class */ (function () {
    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = function (_) { };
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = function () { };
        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Sets the "value" property on one or of more
     * of the select's options.
     *
     * @param value The value
     */
    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
        var _this = this;
        this.value = value;
        var optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            var ids_1 = value.map(function (v) { return _this._getOptionId(v); });
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
        }
        else {
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    };
    /**
     * @description
     * Registers a function called when the control value changes
     * and writes an array of the selected options.
     *
     * @param fn The callback function
     */
    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (_) {
            var selected = [];
            if (_.hasOwnProperty('selectedOptions')) {
                var options = _.selectedOptions;
                for (var i = 0; i < options.length; i++) {
                    var opt = options.item(i);
                    var val = _this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            // Degrade on IE
            else {
                var options = _.options;
                for (var i = 0; i < options.length; i++) {
                    var opt = options.item(i);
                    if (opt.selected) {
                        var val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            _this.value = selected;
            fn(selected);
        };
    };
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */
    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * Sets the "disabled" property on the select input element.
     *
     * @param isDisabled The disabled value
     */
    SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
        var id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    };
    /** @internal */
    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                if (this._compareWith(this._optionMap.get(id)._value, value))
                    return id;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /** @internal */
    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Function])
    ], SelectMultipleControlValueAccessor.prototype, "compareWith", null);
    SelectMultipleControlValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
            host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SelectMultipleControlValueAccessor);
    return SelectMultipleControlValueAccessor;
}());
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectMultipleControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
var NgSelectMultipleOption = /** @class */ (function () {
    function NgSelectMultipleOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
        /**
         * @description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         */
        set: function (value) {
            if (this._select) {
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            }
            else {
                this._setElementValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgSelectMultipleOption.prototype._setElementValue = function (value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    };
    /** @internal */
    NgSelectMultipleOption.prototype._setSelected = function (selected) {
        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    };
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     */
    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngValue'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgSelectMultipleOption.prototype, "ngValue", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgSelectMultipleOption.prototype, "value", null);
    NgSelectMultipleOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'option' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            SelectMultipleControlValueAccessor])
    ], NgSelectMultipleOption);
    return NgSelectMultipleOption;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function controlPath(name, parent) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(parent.path, [name]);
}
function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    dir.valueAccessor.writeValue(control.value);
    setUpViewChangePipeline(control, dir);
    setUpModelChangePipeline(control, dir);
    setUpBlurPipeline(control, dir);
    if (dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange)
            validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange)
            validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
}
function cleanUpControl(control, dir) {
    dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
    dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    if (control)
        control._clearChangeFns();
}
function setUpViewChangePipeline(control, dir) {
    dir.valueAccessor.registerOnChange(function (newValue) {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change')
            updateControl(control, dir);
    });
}
function setUpBlurPipeline(control, dir) {
    dir.valueAccessor.registerOnTouched(function () {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange)
            updateControl(control, dir);
        if (control.updateOn !== 'submit')
            control.markAsTouched();
    });
}
function updateControl(control, dir) {
    if (control._pendingDirty)
        control.markAsDirty();
    control.setValue(control._pendingValue, { emitModelToViewChange: false });
    dir.viewToModelUpdate(control._pendingValue);
    control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
    control.registerOnChange(function (newValue, emitModelEvent) {
        // control -> view
        dir.valueAccessor.writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    });
}
function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
function _throwError(dir, message) {
    var messageEnd;
    if (dir.path.length > 1) {
        messageEnd = "path: '" + dir.path.join(' -> ') + "'";
    }
    else if (dir.path[0]) {
        messageEnd = "name: '" + dir.path + "'";
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(message + " " + messageEnd);
}
function composeValidators(validators) {
    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
}
function composeAsyncValidators(validators) {
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    var change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵlooseIdentical"])(viewModel, change.currentValue);
}
var BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
}
function syncPendingControls(form, directives) {
    form._syncPendingControls();
    directives.forEach(function (dir) {
        var control = dir.control;
        if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
        }
    });
}
// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    if (!Array.isArray(valueAccessors))
        _throwError(dir, 'Value accessor was not provided as an array for form control with');
    var defaultAccessor = undefined;
    var builtinAccessor = undefined;
    var customAccessor = undefined;
    valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}
function removeDir(list, el) {
    var index = list.indexOf(el);
    if (index > -1)
        list.splice(index, 1);
}
// TODO(kara): remove after deprecation period
function _ngModelWarning(name, type, instance, warningConfig) {
    if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() || warningConfig === 'never')
        return;
    if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
        (warningConfig === 'always' && !instance._ngModelWarningSent)) {
        ReactiveErrors.ngModelWarning(name);
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
 *
 * @publicApi
 */
var AbstractFormGroupDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AbstractFormGroupDirective, _super);
    function AbstractFormGroupDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description
     * An internal callback method triggered on the instance after the inputs are set.
     * Registers the group with its parent group.
     */
    AbstractFormGroupDirective.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
    };
    /**
     * @description
     * An internal callback method triggered before the instance is destroyed.
     * Removes the group from its parent group.
     */
    AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    };
    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
        /**
         * @description
         * The `FormGroup` bound to this directive.
         */
        get: function () { return this.formDirective.getFormGroup(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
        /**
         * @description
         * The path to this group from the top-level directive.
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
        /**
         * @description
         * The synchronous validators registered with this group.
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
        /**
         * @description
         * The async validators registered with this group.
         */
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    AbstractFormGroupDirective.prototype._checkParentType = function () { };
    return AbstractFormGroupDirective;
}(ControlContainer));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AbstractControlStatus = /** @class */ (function () {
    function AbstractControlStatus(cd) {
        this._cd = cd;
    }
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
        get: function () { return this._cd.control ? this._cd.control.untouched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
        get: function () { return this._cd.control ? this._cd.control.touched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
        get: function () { return this._cd.control ? this._cd.control.pristine : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
        get: function () { return this._cd.control ? this._cd.control.dirty : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
        get: function () { return this._cd.control ? this._cd.control.valid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
        get: function () { return this._cd.control ? this._cd.control.invalid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
        get: function () { return this._cd.control ? this._cd.control.pending : false; },
        enumerable: true,
        configurable: true
    });
    return AbstractControlStatus;
}());
var ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending',
};
/**
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status. The following classes are applied as the properties
 * become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var NgControlStatus = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgControlStatus, _super);
    function NgControlStatus(cd) {
        return _super.call(this, cd) || this;
    }
    NgControlStatus = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgControl])
    ], NgControlStatus);
    return NgControlStatus;
}(AbstractControlStatus));
/**
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var NgControlStatusGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgControlStatusGroup, _super);
    function NgControlStatusGroup(cd) {
        return _super.call(this, cd) || this;
    }
    NgControlStatusGroup = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
            host: ngControlStatusHost
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer])
    ], NgControlStatusGroup);
    return NgControlStatusGroup;
}(AbstractControlStatus));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 */
var VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 */
var INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 */
var PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 */
var DISABLED = 'DISABLED';
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!(path instanceof Array)) {
        path = path.split(delimiter);
    }
    if (path instanceof Array && (path.length === 0))
        return null;
    return path.reduce(function (v, name) {
        if (v instanceof FormGroup) {
            return v.controls.hasOwnProperty(name) ? v.controls[name] : null;
        }
        if (v instanceof FormArray) {
            return v.at(name) || null;
        }
        return null;
    }, control);
}
function coerceToValidator(validatorOrOpts) {
    var validator = (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators :
        validatorOrOpts);
    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
    var origAsyncValidator = (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators :
        asyncValidator);
    return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
        origAsyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
    return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
        typeof validatorOrOpts === 'object';
}
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 * @publicApi
 */
var AbstractControl = /** @class */ (function () {
    /**
     * Initialize the AbstractControl instance.
     *
     * @param validator The function that determines the synchronous validity of this control.
     * @param asyncValidator The function that determines the asynchronous validity of this
     * control.
     */
    function AbstractControl(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /** @internal */
        this._onCollectionChange = function () { };
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        this.touched = false;
        /** @internal */
        this._onDisabledChange = [];
    }
    Object.defineProperty(AbstractControl.prototype, "parent", {
        /**
         * The parent control.
         */
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valid", {
        /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see `status`
         *
         * @returns True if the control has passed all of its validation tests,
         * false otherwise.
         */
        get: function () { return this.status === VALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see `status`
         *
         * @returns True if this control has failed one or more of its validation checks,
         * false otherwise.
         */
        get: function () { return this.status === INVALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pending", {
        /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see `status`
         *
         * @returns True if this control is in the process of conducting a validation check,
         * false otherwise.
         */
        get: function () { return this.status == PENDING; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status` is `DISABLED`.
         *
         * @see `status`
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         *
         * @returns True if the control is disabled, false otherwise.
         */
        get: function () { return this.status === DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @see `status`
         *
         * @returns True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         */
        get: function () { return this.status !== DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        get: function () { return !this.pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "untouched", {
        /**
         * True if the control has not been marked as touched
         *
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         */
        get: function () { return !this.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "updateOn", {
        /**
         * Reports the update strategy of the `AbstractControl` (meaning
         * the event on which the control updates itself).
         * Possible values: `'change'` | `'blur'` | `'submit'`
         * Default value: `'change'`
         */
        get: function () {
            return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing sync validators.
     */
    AbstractControl.prototype.setValidators = function (newValidator) {
        this.validator = coerceToValidator(newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     */
    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
        this.asyncValidator = coerceToAsyncValidator(newValidator);
    };
    /**
     * Empties out the sync validator list.
     */
    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
    /**
     * Empties out the async validator list.
     */
    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    AbstractControl.prototype.markAsTouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.touched = true;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
        }
    };
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    AbstractControl.prototype.markAsUntouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.touched = false;
        this._pendingTouched = false;
        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    };
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's is changed through the UI; compare `markAsTouched`.
     *
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    AbstractControl.prototype.markAsDirty = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.pristine = false;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
        }
    };
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     *  @param opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     */
    AbstractControl.prototype.markAsPristine = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.pristine = true;
        this._pendingDirty = false;
        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    };
    /**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     *  @param opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     */
    AbstractControl.prototype.markAsPending = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.status = PENDING;
        if (opts.emitEvent !== false) {
            this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
        }
    };
    /**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     *  @param opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     */
    AbstractControl.prototype.disable = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.status = DISABLED;
        this.errors = null;
        this._forEachChild(function (control) { control.disable(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opts, { onlySelf: true })); });
        this._updateValue();
        if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
        }
        this._updateAncestors(opts);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
    };
    /**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     *  @param opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     */
    AbstractControl.prototype.enable = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.status = VALID;
        this._forEachChild(function (control) { control.enable(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opts, { onlySelf: true })); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(opts);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
    };
    AbstractControl.prototype._updateAncestors = function (opts) {
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
            this._parent._updatePristine();
            this._parent._updateTouched();
        }
    };
    /**
     * @param parent Sets the parent of the control
     */
    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     */
    AbstractControl.prototype.updateValueAndValidity = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            this.errors = this._runValidator();
            this.status = this._calculateStatus();
            if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
        }
    };
    /** @internal */
    AbstractControl.prototype._updateTreeValidity = function (opts) {
        if (opts === void 0) { opts = { emitEvent: true }; }
        this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity(opts); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
    };
    AbstractControl.prototype._setInitialStatus = function () {
        this.status = this._allControlsDisabled() ? DISABLED : VALID;
    };
    AbstractControl.prototype._runValidator = function () {
        return this.validator ? this.validator(this) : null;
    };
    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
        var _this = this;
        if (this.asyncValidator) {
            this.status = PENDING;
            var obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
        }
    };
    AbstractControl.prototype._cancelExistingSubscription = function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * @usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    AbstractControl.prototype.setErrors = function (errors, opts) {
        if (opts === void 0) { opts = {}; }
        this.errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    };
    /**
     * Retrieves a child control given the control's name or path.
     *
     * @param path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     */
    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
    /**
     * Reports error data for a specific error occurring in this control or in another control.
     *
     * @param errorCode The error code for which to retrieve data
     * @param path The path to a control to check. If not supplied, checks for the error in this
     * control.
     *
     * @returns The error data if the control with the given path has the given error, otherwise null
     * or undefined.
     */
    AbstractControl.prototype.getError = function (errorCode, path) {
        var control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
    };
    /**
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The error code for which to retrieve data
     * @param path The path to a control to check. If not supplied, checks for the error in this
     * control.
     * @returns True when the control with the given path has the error, otherwise false.
     */
    AbstractControl.prototype.hasError = function (errorCode, path) { return !!this.getError(errorCode, path); };
    Object.defineProperty(AbstractControl.prototype, "root", {
        /**
         * Retrieves the top-level ancestor of this control.
         */
        get: function () {
            var x = this;
            while (x._parent) {
                x = x._parent;
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
        this.status = this._calculateStatus();
        if (emitEvent) {
            this.statusChanges.emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    };
    /** @internal */
    AbstractControl.prototype._initObservables = function () {
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };
    AbstractControl.prototype._calculateStatus = function () {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    };
    /** @internal */
    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
        return this._anyControls(function (control) { return control.status === status; });
    };
    /** @internal */
    AbstractControl.prototype._anyControlsDirty = function () {
        return this._anyControls(function (control) { return control.dirty; });
    };
    /** @internal */
    AbstractControl.prototype._anyControlsTouched = function () {
        return this._anyControls(function (control) { return control.touched; });
    };
    /** @internal */
    AbstractControl.prototype._updatePristine = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.pristine = !this._anyControlsDirty();
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    };
    /** @internal */
    AbstractControl.prototype._updateTouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.touched = this._anyControlsTouched();
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    };
    /** @internal */
    AbstractControl.prototype._isBoxedValue = function (formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    };
    /** @internal */
    AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
    /** @internal */
    AbstractControl.prototype._setUpdateStrategy = function (opts) {
        if (isOptionsObj(opts) && opts.updateOn != null) {
            this._updateOn = opts.updateOn;
        }
    };
    return AbstractControl;
}());
/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events.
 *
 * @see `AbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * @usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 *```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 *
 * @publicApi
 */
var FormControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControl, _super);
    /**
    * Creates a new `FormControl` instance.
    *
    * @param formState Initializes the control with an initial value,
    * or an object that defines the initial value and disabled state.
    *
    * @param validatorOrOpts A synchronous validator function, or an array of
    * such functions, or an `AbstractControlOptions` object that contains validation functions
    * and a validation trigger.
    *
    * @param asyncValidator A single async validator or array of async validator functions
    *
    */
    function FormControl(formState, validatorOrOpts, asyncValidator) {
        if (formState === void 0) { formState = null; }
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        /** @internal */
        _this._onChange = [];
        _this._applyFormState(formState);
        _this._setUpdateStrategy(validatorOrOpts);
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this._initObservables();
        return _this;
    }
    /**
     * Sets a new value for the form control.
     *
     * @param value The new value for the control.
     * @param options Configuration options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     */
    FormControl.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach(function (changeFn) { return changeFn(_this.value, options.emitViewToModelChange !== false); });
        }
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * @see `setValue` for options
     */
    FormControl.prototype.patchValue = function (value, options) {
        if (options === void 0) { options = {}; }
        this.setValue(value, options);
    };
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     */
    FormControl.prototype.reset = function (formState, options) {
        if (formState === void 0) { formState = null; }
        if (options === void 0) { options = {}; }
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
    };
    /**
     * @internal
     */
    FormControl.prototype._updateValue = function () { };
    /**
     * @internal
     */
    FormControl.prototype._anyControls = function (condition) { return false; };
    /**
     * @internal
     */
    FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
    /**
     * Register a listener for change events.
     *
     * @param fn The method that is called when the value changes
     */
    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
    /**
     * @internal
     */
    FormControl.prototype._clearChangeFns = function () {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = function () { };
    };
    /**
     * Register a listener for disabled events.
     *
     * @param fn The method that is called when the disabled status changes.
     */
    FormControl.prototype.registerOnDisabledChange = function (fn) {
        this._onDisabledChange.push(fn);
    };
    /**
     * @internal
     */
    FormControl.prototype._forEachChild = function (cb) { };
    /** @internal */
    FormControl.prototype._syncPendingControls = function () {
        if (this.updateOn === 'submit') {
            if (this._pendingDirty)
                this.markAsDirty();
            if (this._pendingTouched)
                this.markAsTouched();
            if (this._pendingChange) {
                this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                return true;
            }
        }
        return false;
    };
    FormControl.prototype._applyFormState = function (formState) {
        if (this._isBoxedValue(formState)) {
            this.value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            this.value = this._pendingValue = formState;
        }
    };
    return FormControl;
}(AbstractControl));
/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * @usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * @publicApi
 */
var FormGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroup, _super);
    /**
    * Creates a new `FormGroup` instance.
    *
    * @param controls A collection of child controls. The key for each child is the name
    * under which it is registered.
    *
    * @param validatorOrOpts A synchronous validator function, or an array of
    * such functions, or an `AbstractControlOptions` object that contains validation functions
    * and a validation trigger.
    *
    * @param asyncValidator A single async validator or array of async validator functions
    *
    */
    function FormGroup(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpdateStrategy(validatorOrOpts);
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {@link FormGroup#addControl addControl} instead.
     *
     * @param name The control name to register in the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.registerControl = function (name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    };
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to add to the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.addControl = function (name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove a control from this group.
     *
     * @param name The control name to remove from the collection
     */
    FormGroup.prototype.removeControl = function (name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     *
     * @param name The control name to replace in the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.setControl = function (name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use {@link AbstractControl#get get} instead.
     *
     * @param name The control name to check for existence in the collection
     *
     * @returns false for disabled controls, true otherwise.
     */
    FormGroup.prototype.contains = function (controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    };
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * @usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you excluding the value of a control.
     *
     * @param value The new value for the control that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     */
    FormGroup.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach(function (name) {
            _this._throwIfControlMissing(name);
            _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * @usageNotes
     * ### Patch the value for a form group
     *
     * ```
     * const form = new FormGroup({
     *    first: new FormControl(),
     *    last: new FormControl()
     * });
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.patchValue({first: 'Nancy'});
     * console.log(form.value);   // {first: 'Nancy', last: null}
     * ```
     *
     * @param value The object that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormGroup.prototype.patchValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        Object.keys(value).forEach(function (name) {
            if (_this.controls[name]) {
                _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */
    FormGroup.prototype.reset = function (value, options) {
        if (value === void 0) { value = {}; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, name) {
            control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     */
    FormGroup.prototype.getRawValue = function () {
        return this._reduceChildren({}, function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
            return acc;
        });
    };
    /** @internal */
    FormGroup.prototype._syncPendingControls = function () {
        var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
            return child._syncPendingControls() ? true : updated;
        });
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    };
    /** @internal */
    FormGroup.prototype._throwIfControlMissing = function (name) {
        if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    /** @internal */
    FormGroup.prototype._forEachChild = function (cb) {
        var _this = this;
        Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
    };
    /** @internal */
    FormGroup.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) {
            control.setParent(_this);
            control._registerOnCollectionChange(_this._onCollectionChange);
        });
    };
    /** @internal */
    FormGroup.prototype._updateValue = function () { this.value = this._reduceValue(); };
    /** @internal */
    FormGroup.prototype._anyControls = function (condition) {
        var _this = this;
        var res = false;
        this._forEachChild(function (control, name) {
            res = res || (_this.contains(name) && condition(control));
        });
        return res;
    };
    /** @internal */
    FormGroup.prototype._reduceValue = function () {
        var _this = this;
        return this._reduceChildren({}, function (acc, control, name) {
            if (control.enabled || _this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        });
    };
    /** @internal */
    FormGroup.prototype._reduceChildren = function (initValue, fn) {
        var res = initValue;
        this._forEachChild(function (control, name) { res = fn(res, control, name); });
        return res;
    };
    /** @internal */
    FormGroup.prototype._allControlsDisabled = function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(this.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var controlName = _c.value;
                if (this.controls[controlName].enabled) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    };
    /** @internal */
    FormGroup.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, name) {
            if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '" + name + "'.");
            }
        });
    };
    return FormGroup;
}(AbstractControl));
/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * @usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
  * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * @publicApi
 */
var FormArray = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormArray, _super);
    /**
    * Creates a new `FormArray` instance.
    *
    * @param controls An array of child controls. Each child control is given an index
    * where it is registered.
    *
    * @param validatorOrOpts A synchronous validator function, or an array of
    * such functions, or an `AbstractControlOptions` object that contains validation functions
    * and a validation trigger.
    *
    * @param asyncValidator A single async validator or array of async validator functions
    *
    */
    function FormArray(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpdateStrategy(validatorOrOpts);
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to retrieve the control
     */
    FormArray.prototype.at = function (index) { return this.controls[index]; };
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param control Form control to be inserted
     */
    FormArray.prototype.push = function (control) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to insert the control
     * @param control Form control to be inserted
     */
    FormArray.prototype.insert = function (index, control) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity();
    };
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param index Index in the array to remove the control
     */
    FormArray.prototype.removeAt = function (index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        this.updateValueAndValidity();
    };
    /**
     * Replace an existing control.
     *
     * @param index Index in the array to replace the control
     * @param control The `AbstractControl` control to replace the existing control
     */
    FormArray.prototype.setControl = function (index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    Object.defineProperty(FormArray.prototype, "length", {
        /**
         * Length of the control array.
         */
        get: function () { return this.controls.length; },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * @usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormArray.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        value.forEach(function (newValue, index) {
            _this._throwIfControlMissing(index);
            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * @usageNotes
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param value Array of latest values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormArray.prototype.patchValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        value.forEach(function (newValue, index) {
            if (_this.at(index)) {
                _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * @usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormArray.prototype.reset = function (value, options) {
        if (value === void 0) { value = []; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, index) {
            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     */
    FormArray.prototype.getRawValue = function () {
        return this.controls.map(function (control) {
            return control instanceof FormControl ? control.value : control.getRawValue();
        });
    };
    /** @internal */
    FormArray.prototype._syncPendingControls = function () {
        var subtreeUpdated = this.controls.reduce(function (updated, child) {
            return child._syncPendingControls() ? true : updated;
        }, false);
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    };
    /** @internal */
    FormArray.prototype._throwIfControlMissing = function (index) {
        if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.at(index)) {
            throw new Error("Cannot find form control at index " + index);
        }
    };
    /** @internal */
    FormArray.prototype._forEachChild = function (cb) {
        this.controls.forEach(function (control, index) { cb(control, index); });
    };
    /** @internal */
    FormArray.prototype._updateValue = function () {
        var _this = this;
        this.value =
            this.controls.filter(function (control) { return control.enabled || _this.disabled; })
                .map(function (control) { return control.value; });
    };
    /** @internal */
    FormArray.prototype._anyControls = function (condition) {
        return this.controls.some(function (control) { return control.enabled && condition(control); });
    };
    /** @internal */
    FormArray.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) { return _this._registerControl(control); });
    };
    /** @internal */
    FormArray.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, i) {
            if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: " + i + ".");
            }
        });
    };
    /** @internal */
    FormArray.prototype._allControlsDisabled = function () {
        var e_2, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                if (control.enabled)
                    return false;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this.controls.length > 0 || this.disabled;
    };
    FormArray.prototype._registerControl = function (control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    };
    return FormArray;
}(AbstractControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgForm; })
};
var resolvedPromise = Promise.resolve(null);
/**
 * @description
 *
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You can export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * will give you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, you'll want to use `NgModel` with a
 * `name` attribute.  You can also use `NgModelGroup` if you'd like to create
 * sub-groups within the form.
 *
 * You can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * If you want to import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, you can add `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
 * in Angular v9.
 *
 * This has been deprecated to keep selectors consistent with other core Angular selectors,
 * as element selectors are typically written in kebab-case.
 *
 * Now deprecated:
 * ```html
 * <ngForm #myForm="ngForm">
 * ```
 *
 * After:
 * ```html
 * <ng-form #myForm="ngForm">
 * ```
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * @ngModule FormsModule
 * @publicApi
 */
var NgForm = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgForm, _super);
    function NgForm(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this.submitted = false;
        _this._directives = [];
        _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this;
    }
    NgForm.prototype.ngAfterViewInit = function () { this._setUpdateStrategy(); };
    Object.defineProperty(NgForm.prototype, "formDirective", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "control", {
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "path", {
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "controls", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    NgForm.prototype.addControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            dir.control =
                container.registerControl(dir.name, dir.control);
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
            _this._directives.push(dir);
        });
    };
    NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
    NgForm.prototype.removeControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
            removeDir(_this._directives, dir);
        });
    };
    NgForm.prototype.addFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            var group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        });
    };
    NgForm.prototype.removeFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
    NgForm.prototype.updateModel = function (dir, value) {
        var _this = this;
        resolvedPromise.then(function () {
            var ctrl = _this.form.get(dir.path);
            ctrl.setValue(value);
        });
    };
    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
    NgForm.prototype.onSubmit = function ($event) {
        this.submitted = true;
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        return false;
    };
    NgForm.prototype.onReset = function () { this.resetForm(); };
    NgForm.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this.submitted = false;
    };
    NgForm.prototype._setUpdateStrategy = function () {
        if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
        }
    };
    /** @internal */
    NgForm.prototype._findContainer = function (path) {
        path.pop();
        return path.length ? this.form.get(path) : this.form;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngFormOptions'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgForm.prototype, "options", void 0);
    NgForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
            providers: [formDirectiveProvider],
            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
            outputs: ['ngSubmit'],
            exportAs: 'ngForm'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array, Array])
    ], NgForm);
    return NgForm;
}(ControlContainer));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var TemplateDrivenErrors = /** @class */ (function () {
    function TemplateDrivenErrors() {
    }
    TemplateDrivenErrors.modelParentException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
    };
    TemplateDrivenErrors.formGroupNameException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    TemplateDrivenErrors.missingNameException = function () {
        throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    };
    TemplateDrivenErrors.modelGroupParentException = function () {
        throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    TemplateDrivenErrors.ngFormWarning = function () {
        console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ");
    };
    return TemplateDrivenErrors;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Token to provide to turn off the warning when using 'ngForm' deprecated selector.
 */
var NG_FORM_SELECTOR_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgFormSelectorWarning');
/**
 * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
 *
 * @deprecated in Angular v6 and will be removed in Angular v9.
 * @ngModule FormsModule
 * @publicApi
 */
var NgFormSelectorWarning = /** @class */ (function () {
    function NgFormSelectorWarning(ngFormWarning) {
        if (((!ngFormWarning || ngFormWarning === 'once') && !NgFormSelectorWarning_1._ngFormWarning) ||
            ngFormWarning === 'always') {
            TemplateDrivenErrors.ngFormWarning();
            NgFormSelectorWarning_1._ngFormWarning = true;
        }
    }
    NgFormSelectorWarning_1 = NgFormSelectorWarning;
    var NgFormSelectorWarning_1;
    /**
     * Static property used to track whether the deprecation warning for this selector has been sent.
     * Used to support warning config of "once".
     *
     * @internal
     */
    NgFormSelectorWarning._ngFormWarning = false;
    NgFormSelectorWarning = NgFormSelectorWarning_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'ngForm' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_FORM_SELECTOR_WARNING)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgFormSelectorWarning);
    return NgFormSelectorWarning;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var modelGroupProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgModelGroup; })
};
/**
 * @description
 *
 * Creates and binds a `FormGroup` instance to a DOM element.
 *
 * This directive can only be used as a child of `NgForm` (or in other words,
 * within `<form>` tags).
 *
 * Use this directive if you'd like to create a sub-group within a form. This can
 * come in handy if you want to validate a sub-group of your form separately from
 * the rest of your form, or if some values in your domain model make more sense to
 * consume together in a nested object.
 *
 * Pass in the name you'd like this sub-group to have and it will become the key
 * for the sub-group in the form's full value. You can also export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * @ngModule FormsModule
 * @publicApi
 */
var NgModelGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgModelGroup, _super);
    function NgModelGroup(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    NgModelGroup_1 = NgModelGroup;
    /** @internal */
    NgModelGroup.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup_1) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
        }
    };
    var NgModelGroup_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModelGroup'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgModelGroup.prototype, "name", void 0);
    NgModelGroup = NgModelGroup_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer, Array, Array])
    ], NgModelGroup);
    return NgModelGroup;
}(AbstractFormGroupDirective));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgModel; })
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
var resolvedPromise$1 = Promise.resolve(null);
/**
 * @description
 *
 * Creates a `FormControl` instance from a domain model and binds it
 * to a form control element.
 *
 * The `FormControl` instance will track the value, user interaction, and
 * validation status of the control and keep the view synced with the model. If used
 * within a parent form, the directive will also register itself with the form as a child
 * control.
 *
 * This directive can be used by itself or as part of a larger form. All you need is the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional `Input`. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class will set the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
 * the domain model in your class as well.
 *
 * If you wish to inspect the properties of the associated `FormControl` (like
 * validity state), you can also export the directive into a local template variable using
 * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
 * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
 * will fall through to the control anyway, so you can access them directly. You can see a
 * full list of properties directly available in `AbstractControlDirective`.
 *
 * The following is an example of a simple standalone control using `ngModel`:
 *
 * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * It's worth noting that in the context of a parent form, you often can skip one-way or
 * two-way binding because the parent form will sync the value for you. You can access
 * its properties by exporting it into a local template variable using `ngForm` (ex:
 * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * Take a look at an example of using `ngModel` within a form:
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * To see `ngModel` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * @ngModule FormsModule
 * @publicApi
 */
var NgModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgModel, _super);
    function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this.control = new FormControl();
        /** @internal */
        _this._registered = false;
        _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    NgModel.prototype.ngOnChanges = function (changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    };
    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
    Object.defineProperty(NgModel.prototype, "path", {
        get: function () {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "formDirective", {
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "validator", {
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "asyncValidator", {
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    NgModel.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    NgModel.prototype._setUpControl = function () {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() :
            this.formDirective.addControl(this);
        this._registered = true;
    };
    NgModel.prototype._setUpdateStrategy = function () {
        if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
        }
    };
    NgModel.prototype._isStandalone = function () {
        return !this._parent || !!(this.options && this.options.standalone);
    };
    NgModel.prototype._setUpStandalone = function () {
        setUpControl(this.control, this);
        this.control.updateValueAndValidity({ emitEvent: false });
    };
    NgModel.prototype._checkForErrors = function () {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    };
    NgModel.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) &&
            this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
        }
        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
        }
    };
    NgModel.prototype._checkName = function () {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
        }
    };
    NgModel.prototype._updateValue = function (value) {
        var _this = this;
        resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
    };
    NgModel.prototype._updateDisabled = function (changes) {
        var _this = this;
        var disabledValue = changes['isDisabled'].currentValue;
        var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then(function () {
            if (isDisabled && !_this.control.disabled) {
                _this.control.disable();
            }
            else if (!isDisabled && _this.control.disabled) {
                _this.control.enable();
            }
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgModel.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgModel.prototype, "isDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModel'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgModel.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModelOptions'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgModel.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('ngModelChange'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgModel.prototype, "update", void 0);
    NgModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngModel]:not([formControlName]):not([formControl])',
            providers: [formControlBinding],
            exportAs: 'ngModel'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALUE_ACCESSOR)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer,
            Array,
            Array, Array])
    ], NgModel);
    return NgModel;
}(NgControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 */
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgModelWithFormControlWarning');
var formControlBinding$1 = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormControlDirective; })
};
/**
 * @description
 * * Syncs a standalone `FormControl` instance to a form control element.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Registering a single form control
 *
 * The following examples shows how to register a standalone control and set its value.
 *
 * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 *
 * ```html
 * <input [formControl]="control" [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <input [formControl]="control">
 * ```
 *
 * ```ts
 * this.control.setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var FormControlDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControlDirective, _super);
    function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this = _super.call(this) || this;
        _this._ngModelWarningConfig = _ngModelWarningConfig;
        /** @deprecated as of v6 */
        _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * @internal
         */
        _this._ngModelWarningSent = false;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    FormControlDirective_1 = FormControlDirective;
    Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
        /**
         * @description
         * Triggers a warning that this input should not be used with reactive forms.
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    FormControlDirective.prototype.ngOnChanges = function (changes) {
        if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControl', FormControlDirective_1, this, this._ngModelWarningConfig);
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    };
    Object.defineProperty(FormControlDirective.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "validator", {
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
        /**
         * @description
         * Async validator function composed of all the async validators registered with this
         * directive.
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        /**
         * @description
         * The `FormControl` bound to this directive.
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */
    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    FormControlDirective.prototype._isControlChanged = function (changes) {
        return changes.hasOwnProperty('form');
    };
    var FormControlDirective_1;
    /**
     * @description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlDirective. Used to support warning config of "once".
     *
     * @internal
     */
    FormControlDirective._ngModelWarningSentOnce = false;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formControl'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", FormControl)
    ], FormControlDirective.prototype, "form", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
    ], FormControlDirective.prototype, "isDisabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModel'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormControlDirective.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('ngModelChange'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormControlDirective.prototype, "update", void 0);
    FormControlDirective = FormControlDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALUE_ACCESSOR)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_MODEL_WITH_FORM_CONTROL_WARNING)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array,
            Array, Array, Object])
    ], FormControlDirective);
    return FormControlDirective;
}(NgControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormGroupDirective; })
};
/**
 * @description
 *
 * Binds an existing `FormGroup` to a DOM element.
 *
 * This directive accepts an existing `FormGroup` instance. It will then use this
 * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
 * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
 * and `FormArrayName` directives.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * ### Register Form Group
 *
 * The following example registers a `FormGroup` with first name and last name controls,
 * and listens for the *ngSubmit* event when the button is clicked.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var FormGroupDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroupDirective, _super);
    function FormGroupDirective(_validators, _asyncValidators) {
        var _this = _super.call(this) || this;
        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        /**
         * @description
         * Reports whether the form submission has been triggered.
         */
        _this.submitted = false;
        /**
         * @description
         * Tracks the list of added `FormControlName` instances
         */
        _this.directives = [];
        /**
         * @description
         * Tracks the `FormGroup` bound to this directive.
         */
        _this.form = null;
        /**
         * @description
         * Emits an event when the form submission has been triggered.
         */
        _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    /**
     * @description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    FormGroupDirective.prototype.ngOnChanges = function (changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
        }
    };
    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
        /**
         * @description
         * Returns this directive's instance.
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "control", {
        /**
         * @description
         * Returns the `FormGroup` bound to this directive.
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "path", {
        /**
         * @description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it always an empty array.
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `FormControlName` directive instance.
     */
    FormGroupDirective.prototype.addControl = function (dir) {
        var ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    };
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `FormControlName` directive
     *
     * @param dir The `FormControlName` directive instance.
     */
    FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
    /**
     * @description
     * Removes the `FormControlName` instance from the internal list of directives
     *
     * @param dir The `FormControlName` directive instance.
     */
    FormGroupDirective.prototype.removeControl = function (dir) { removeDir(this.directives, dir); };
    /**
     * Adds a new `FormGroupName` directive instance to the form.
     *
     * @param dir The `FormGroupName` directive instance.
     */
    FormGroupDirective.prototype.addFormGroup = function (dir) {
        var ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * No-op method to remove the form group.
     *
     * @param dir The `FormGroupName` directive instance.
     */
    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
     *
     * @param dir The `FormGroupName` directive instance.
     */
    FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
    /**
     * Adds a new `FormArrayName` directive instance to the form.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    FormGroupDirective.prototype.addFormArray = function (dir) {
        var ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * No-op method to remove the form array.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    FormGroupDirective.prototype.removeFormArray = function (dir) { };
    /**
     * @description
     * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
    /**
     * Sets the new value for the provided `FormControlName` directive.
     *
     * @param dir The `FormControlName` directive instance.
     * @param value The new value for the directive's control.
     */
    FormGroupDirective.prototype.updateModel = function (dir, value) {
        var ctrl = this.form.get(dir.path);
        ctrl.setValue(value);
    };
    /**
     * @description
     * Method called with the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */
    FormGroupDirective.prototype.onSubmit = function ($event) {
        this.submitted = true;
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */
    FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */
    FormGroupDirective.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this.submitted = false;
    };
    /** @internal */
    FormGroupDirective.prototype._updateDomValue = function () {
        var _this = this;
        this.directives.forEach(function (dir) {
            var newCtrl = _this.form.get(dir.path);
            if (dir.control !== newCtrl) {
                cleanUpControl(dir.control, dir);
                if (newCtrl)
                    setUpControl(newCtrl, dir);
                dir.control = newCtrl;
            }
        });
        this.form._updateTreeValidity({ emitEvent: false });
    };
    FormGroupDirective.prototype._updateRegistrations = function () {
        var _this = this;
        this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
        if (this._oldForm)
            this._oldForm._registerOnCollectionChange(function () { });
        this._oldForm = this.form;
    };
    FormGroupDirective.prototype._updateValidators = function () {
        var sync = composeValidators(this._validators);
        this.form.validator = Validators.compose([this.form.validator, sync]);
        var async = composeAsyncValidators(this._asyncValidators);
        this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
    };
    FormGroupDirective.prototype._checkFormPresent = function () {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formGroup'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", FormGroup)
    ], FormGroupDirective.prototype, "form", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormGroupDirective.prototype, "ngSubmit", void 0);
    FormGroupDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[formGroup]',
            providers: [formDirectiveProvider$1],
            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
            exportAs: 'ngForm'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array, Array])
    ], FormGroupDirective);
    return FormGroupDirective;
}(ControlContainer));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormGroupName; })
};
/**
 * @description
 *
 * Syncs a nested `FormGroup` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective`.
 *
 * It accepts the string name of the nested `FormGroup` to link, and
 * looks for a `FormGroup` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Use nested form groups to validate a sub-group of a
 * form separately from the rest or to group the values of certain
 * controls into their own nested object.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @usageNotes
 *
 * ### Access the group by name
 *
 * The following example uses the {@link AbstractControl#get get} method to access the
 * associated `FormGroup`
 *
 * ```ts
 *   this.form.get('name');
 * ```
 *
 * ### Access individual controls in the group
 *
 * The following example uses the {@link AbstractControl#get get} method to access
 * individual controls within the group using dot syntax.
 *
 * ```ts
 *   this.form.get('name.first');
 * ```
 *
 * ### Register a nested `FormGroup`.
 *
 * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
 * and provides methods to retrieve the nested `FormGroup` and individual controls.
 *
 * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var FormGroupName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroupName, _super);
    function FormGroupName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /** @internal */
    FormGroupName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formGroupName'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], FormGroupName.prototype, "name", void 0);
    FormGroupName = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formGroupName]', providers: [formGroupNameProvider] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer, Array, Array])
    ], FormGroupName);
    return FormGroupName;
}(AbstractFormGroupDirective));
var formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormArrayName; })
};
/**
 * @description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var FormArrayName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormArrayName, _super);
    function FormArrayName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * @description
     * A lifecycle method called when the directive's inputs are initialized. For internal use only.
     *
     * @throws If the directive does not have a valid parent.
     */
    FormArrayName.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormArray(this);
    };
    /**
     * @description
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     */
    FormArrayName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    };
    Object.defineProperty(FormArrayName.prototype, "control", {
        /**
         * @description
         * The `FormArray` bound to this directive.
         */
        get: function () { return this.formDirective.getFormArray(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "formDirective", {
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */
        get: function () {
            return this._parent ? this._parent.formDirective : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "validator", {
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators registered with this
         * directive.
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
        /**
         * @description
         * Async validator function composed of all the async validators registered with this directive.
         */
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    FormArrayName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formArrayName'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], FormArrayName.prototype, "name", void 0);
    FormArrayName = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formArrayName]', providers: [formArrayNameProvider] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer, Array, Array])
    ], FormArrayName);
    return FormArrayName;
}(ControlContainer));
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var controlNameBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormControlName; })
};
/**
 * @description
 * Syncs a `FormControl` in an existing `FormGroup` to a form control
 * element by name.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Register `FormControl` within a group
 *
 * The following example shows how to register multiple form controls within a form group
 * and set their value.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first" [(ngModel)]="value">
 * </form>
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first">
 * </form>
 * ```
 *
 * ```ts
 * this.form.get('first').setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var FormControlName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControlName, _super);
    function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this = _super.call(this) || this;
        _this._ngModelWarningConfig = _ngModelWarningConfig;
        _this._added = false;
        /** @deprecated as of v6 */
        _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * @internal
         */
        _this._ngModelWarningSent = false;
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    FormControlName_1 = FormControlName;
    Object.defineProperty(FormControlName.prototype, "isDisabled", {
        /**
         * @description
         * Triggers a warning that this input should not be used with reactive forms.
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    FormControlName.prototype.ngOnChanges = function (changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControlName', FormControlName_1, this, this._ngModelWarningConfig);
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    };
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */
    FormControlName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    };
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */
    FormControlName.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    Object.defineProperty(FormControlName.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "formDirective", {
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "validator", {
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
        /**
         * @description
         * Async validator function composed of all the async validators registered with this
         * directive.
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    FormControlName.prototype._checkParentType = function () {
        if (!(this._parent instanceof FormGroupName) &&
            this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
        }
        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
            !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
        }
    };
    FormControlName.prototype._setUpControl = function () {
        this._checkParentType();
        this.control = this.formDirective.addControl(this);
        if (this.control.disabled && this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(true);
        }
        this._added = true;
    };
    var FormControlName_1;
    /**
     * @description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlName. Used to support warning config of "once".
     *
     * @internal
     */
    FormControlName._ngModelWarningSentOnce = false;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formControlName'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], FormControlName.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
    ], FormControlName.prototype, "isDisabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModel'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormControlName.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('ngModelChange'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormControlName.prototype, "update", void 0);
    FormControlName = FormControlName_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formControlName]', providers: [controlNameBinding] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALUE_ACCESSOR)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_MODEL_WITH_FORM_CONTROL_WARNING)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer,
            Array,
            Array, Array, Object])
    ], FormControlName);
    return FormControlName;
}(NgControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RequiredValidator; }),
    multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxRequiredValidator; }),
    multi: true
};
/**
 * A Directive that adds the `required` validator to any controls marked with the
 * `required` attribute, via the `NG_VALIDATORS` binding.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var RequiredValidator = /** @class */ (function () {
    function RequiredValidator() {
    }
    Object.defineProperty(RequiredValidator.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) {
            this._required = value != null && value !== false && "" + value !== 'false';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    RequiredValidator.prototype.validate = function (control) {
        return this.required ? Validators.required(control) : null;
    };
    RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], RequiredValidator.prototype, "required", null);
    RequiredValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
            providers: [REQUIRED_VALIDATOR],
            host: { '[attr.required]': 'required ? "" : null' }
        })
    ], RequiredValidator);
    return RequiredValidator;
}());
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute, via the `NG_VALIDATORS` binding.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var CheckboxRequiredValidator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CheckboxRequiredValidator, _super);
    function CheckboxRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxRequiredValidator.prototype.validate = function (control) {
        return this.required ? Validators.requiredTrue(control) : null;
    };
    CheckboxRequiredValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
            providers: [CHECKBOX_REQUIRED_VALIDATOR],
            host: { '[attr.required]': 'required ? "" : null' }
        })
    ], CheckboxRequiredValidator);
    return CheckboxRequiredValidator;
}(RequiredValidator));
/**
 * Provider which adds `EmailValidator` to `NG_VALIDATORS`.
 */
var EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EmailValidator; }),
    multi: true
};
/**
 * A Directive that adds the `email` validator to controls marked with the
 * `email` attribute, via the `NG_VALIDATORS` binding.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    Object.defineProperty(EmailValidator.prototype, "email", {
        set: function (value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    EmailValidator.prototype.validate = function (control) {
        return this._enabled ? Validators.email(control) : null;
    };
    EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], EmailValidator.prototype, "email", null);
    EmailValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
            providers: [EMAIL_VALIDATOR]
        })
    ], EmailValidator);
    return EmailValidator;
}());
/**
 * Provider which adds `MinLengthValidator` to `NG_VALIDATORS`.
 *
 * @usageNotes
 * ### Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='min'}
 */
var MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MinLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the `MinLengthValidator` for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var MinLengthValidator = /** @class */ (function () {
    function MinLengthValidator() {
    }
    MinLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    MinLengthValidator.prototype.validate = function (control) {
        return this.minlength == null ? null : this._validator(control);
    };
    MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    MinLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.minLength(parseInt(this.minlength, 10));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], MinLengthValidator.prototype, "minlength", void 0);
    MinLengthValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
            providers: [MIN_LENGTH_VALIDATOR],
            host: { '[attr.minlength]': 'minlength ? minlength : null' }
        })
    ], MinLengthValidator);
    return MinLengthValidator;
}());
/**
 * Provider which adds `MaxLengthValidator` to `NG_VALIDATORS`.
 *
 * @usageNotes
 * ### Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='max'}
 */
var MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MaxLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the `MaxLengthValidator` for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `maxlength` attribute.
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var MaxLengthValidator = /** @class */ (function () {
    function MaxLengthValidator() {
    }
    MaxLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    MaxLengthValidator.prototype.validate = function (control) {
        return this.maxlength != null ? this._validator(control) : null;
    };
    MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    MaxLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], MaxLengthValidator.prototype, "maxlength", void 0);
    MaxLengthValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
            providers: [MAX_LENGTH_VALIDATOR],
            host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
        })
    ], MaxLengthValidator);
    return MaxLengthValidator;
}());
var PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return PatternValidator; }),
    multi: true
};
/**
 * A Directive that adds the `pattern` validator to any controls marked with the
 * `pattern` attribute, via the `NG_VALIDATORS` binding. Uses attribute value
 * as the regex to validate Control value against.  Follows pattern attribute
 * semantics; i.e. regex must match entire Control value.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var PatternValidator = /** @class */ (function () {
    function PatternValidator() {
    }
    PatternValidator.prototype.ngOnChanges = function (changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    PatternValidator.prototype.validate = function (control) { return this._validator(control); };
    PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], PatternValidator.prototype, "pattern", void 0);
    PatternValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
            providers: [PATTERN_VALIDATOR],
            host: { '[attr.pattern]': 'pattern ? pattern : null' }
        })
    ], PatternValidator);
    return PatternValidator;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
 * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
 * forms.
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * @publicApi
 */
var FormBuilder = /** @class */ (function () {
    function FormBuilder() {
    }
    /**
     * @description
     * Construct a new `FormGroup` instance.
     *
     * @param controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param extra An object of configuration options for the `FormGroup`.
     * * `validator`: A synchronous validator function, or an array of validator functions
     * * `asyncValidator`: A single async validator or array of async validator functions
     *
     */
    FormBuilder.prototype.group = function (controlsConfig, extra) {
        if (extra === void 0) { extra = null; }
        var controls = this._reduceControls(controlsConfig);
        var validator = extra != null ? extra['validator'] : null;
        var asyncValidator = extra != null ? extra['asyncValidator'] : null;
        return new FormGroup(controls, validator, asyncValidator);
    };
    /**
     * @description
     * Construct a new `FormControl` instance.
     *
     * @param formState Initializes the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param validator A synchronous validator function, or an array of synchronous validator
     * functions.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts"
     *   linenums="false" region="disabled-control">
     * </code-example>
     *
     */
    FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
        return new FormControl(formState, validator, asyncValidator);
    };
    /**
     * @description
     * Construct a new `FormArray` instance.
     *
     * @param controlsConfig An array of child controls. The key for each child control is its index
     * in the array.
     *
     * @param validator A synchronous validator function, or an array of synchronous validator
     * functions.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     */
    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
        var _this = this;
        var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
        return new FormArray(controls, validator, asyncValidator);
    };
    /** @internal */
    FormBuilder.prototype._reduceControls = function (controlsConfig) {
        var _this = this;
        var controls = {};
        Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this._createControl(controlsConfig[controlName]);
        });
        return controls;
    };
    /** @internal */
    FormBuilder.prototype._createControl = function (controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            var value = controlConfig[0];
            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    };
    FormBuilder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FormBuilder);
    return FormBuilder;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @publicApi
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('7.0.4');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * @publicApi
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */
var NgNoValidate = /** @class */ (function () {
    function NgNoValidate() {
    }
    NgNoValidate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
            host: { 'novalidate': '' },
        })
    ], NgNoValidate);
    return NgNoValidate;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SHARED_FORM_DIRECTIVES = [
    NgNoValidate,
    NgSelectOption,
    NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgFormSelectorWarning];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
var InternalFormsSharedModule = /** @class */ (function () {
    function InternalFormsSharedModule() {
    }
    InternalFormsSharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: SHARED_FORM_DIRECTIVES,
            exports: SHARED_FORM_DIRECTIVES,
        })
    ], InternalFormsSharedModule);
    return InternalFormsSharedModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Exports the required providers and directives for template-driven forms,
 * making them available for import by NgModules that import this module.
 * @see [Forms](guide/forms)
 *
 * @see [Forms Guide](/guide/forms)
 *
 * @publicApi
 */
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule_1 = FormsModule;
    /**
     * @description
     * Provides options for configuring the template-driven forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
     * `ngForm` selector is used.
     */
    FormsModule.withConfig = function (opts) {
        return {
            ngModule: FormsModule_1,
            providers: [{ provide: NG_FORM_SELECTOR_WARNING, useValue: opts.warnOnDeprecatedNgFormSelector }]
        };
    };
    var FormsModule_1;
    FormsModule = FormsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
            providers: [RadioControlRegistry],
            exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
        })
    ], FormsModule);
    return FormsModule;
}());
/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 * @see [Forms](guide/reactive-forms)
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * @publicApi
 */
var ReactiveFormsModule = /** @class */ (function () {
    function ReactiveFormsModule() {
    }
    ReactiveFormsModule_1 = ReactiveFormsModule;
    /**
     * @description
     * Provides options for configuring the reactive forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     */
    ReactiveFormsModule.withConfig = function (opts) {
        return {
            ngModule: ReactiveFormsModule_1,
            providers: [{
                    provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                    useValue: opts.warnOnNgModelWithFormControl
                }]
        };
    };
    var ReactiveFormsModule_1;
    ReactiveFormsModule = ReactiveFormsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
            providers: [FormBuilder, RadioControlRegistry],
            exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
        })
    ], ReactiveFormsModule);
    return ReactiveFormsModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=forms.js.map


/***/ }),

/***/ "./node_modules/@angular/http/fesm5/http.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/http/fesm5/http.js ***!
  \**************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v7.0.4
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated see https://angular.io/guide/http
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(v.split(','))); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * @usageNotes
     * ### Example
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseResponseOptions);
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 **/
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (key) { return standardEncoding(key); };
    QueryEncoder.prototype.encodeValue = function (value) { return standardEncoding(value); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Response = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BrowserJsonp);
    return BrowserJsonp;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    JSONPConnection.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserJsonp, ResponseOptions])
    ], JSONPBackend);
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserXhr, ResponseOptions,
            XSRFStrategy])
    ], XHRBackend);
    return XHRBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseRequestOptions);
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Request = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
function urlEncodeParams(params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w /** TODO #9100 */['FormData'] || noop;
var Blob$1 = w /** TODO #9100 */['Blob'] || noop;
var ArrayBuffer$1 = w /** TODO #9100 */['ArrayBuffer'] || noop;

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new RequestOptions({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Http);
    return Http;
}());
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Jsonp = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Jsonp);
    return Jsonp;
}(Http));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                BrowserXhr,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                XHRBackend,
                { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
            ],
        })
    ], HttpModule);
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                BrowserJsonp,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                JSONPBackend,
            ],
        })
    ], JsonpModule);
    return JsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('7.0.4');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _widgets_blog_manager_blog_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/blog-manager/blog-manager.component */ "./src/app/admin/widgets/blog-manager/blog-manager.component.ts");
/* harmony import */ var _widgets_tut_manager_tut_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/tut-manager/tut-manager.component */ "./src/app/admin/widgets/tut-manager/tut-manager.component.ts");
/* harmony import */ var _widgets_user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/user-manager/user-manager.component */ "./src/app/admin/widgets/user-manager/user-manager.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/admin/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            {
                path: 'blogManager',
                component: _widgets_blog_manager_blog_manager_component__WEBPACK_IMPORTED_MODULE_4__["BlogManagerComponent"],
            },
            {
                path: 'tutManager',
                component: _widgets_tut_manager_tut_manager_component__WEBPACK_IMPORTED_MODULE_5__["TutManagerComponent"],
            },
            {
                path: 'userManager',
                component: _widgets_user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_6__["UserManagerComponent"],
            }
        ]
    },
    {}
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*      light colors - used for select dropdown         */\r\n.ct-blue {\r\n    stroke: #7A9E9F !important;\r\n  }\r\n.ct-azure {\r\n    stroke: #68B3C8 !important;\r\n  }\r\n.ct-green {\r\n    stroke: #7AC29A !important;\r\n  }\r\n.ct-orange {\r\n    stroke: #F3BB45 !important;\r\n  }\r\n.ct-red {\r\n    stroke: #EB5E28 !important;\r\n  }\r\nh1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, p, .navbar, .brand, a, .td-name, td {\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    font-family: 'Muli', \"Helvetica\", Arial, sans-serif;\r\n  }\r\nh1, .h1, h2, .h2, h3, .h3, h4, .h4 {\r\n    font-weight: 400;\r\n    margin: 30px 0 15px;\r\n  }\r\nh1, .h1 {\r\n    font-size: 3.2em;\r\n  }\r\nh2, .h2 {\r\n    font-size: 2.6em;\r\n  }\r\nh3, .h3 {\r\n    font-size: 1.825em;\r\n    line-height: 1.4;\r\n    margin: 20px 0 10px;\r\n  }\r\nh4, .h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 600;\r\n    line-height: 1.2em;\r\n  }\r\nh5, .h5 {\r\n    font-size: 1.25em;\r\n    font-weight: 400;\r\n    line-height: 1.4em;\r\n    margin-bottom: 15px;\r\n  }\r\nh6, .h6 {\r\n    font-size: 0.9em;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n  }\r\np {\r\n    font-size: 16px;\r\n    line-height: 1.4em;\r\n  }\r\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1 .small, h2 .small, h3 .small, h4 .small, h5 .small, h6 .small, .h1 .small, .h2 .small, .h3 .small, .h4 .small, .h5 .small, .h6 .small {\r\n    color: #9A9A9A;\r\n    font-weight: 300;\r\n    line-height: 1.4em;\r\n  }\r\nh1 small, h2 small, h3 small, h1 .small, h2 .small, h3 .small {\r\n    font-size: 60%;\r\n  }\r\n.title-uppercase {\r\n    text-transform: uppercase;\r\n  }\r\nblockquote {\r\n    font-style: italic;\r\n  }\r\nblockquote small {\r\n    font-style: normal;\r\n  }\r\n.text-muted {\r\n    color: #DDDDDD;\r\n  }\r\n.text-primary, .text-primary:hover {\r\n    color: #427C89;\r\n  }\r\n.text-info, .text-info:hover {\r\n    color: #3091B2;\r\n  }\r\n.text-success, .text-success:hover {\r\n    color: #42A084;\r\n  }\r\n.text-warning, .text-warning:hover {\r\n    color: #BB992F;\r\n  }\r\n.text-danger, .text-danger:hover {\r\n    color: #B33C12;\r\n  }\r\n.glyphicon {\r\n    line-height: 1;\r\n  }\r\nstrong {\r\n    color: #403D39;\r\n  }\r\n.icon-primary {\r\n    color: #7A9E9F;\r\n  }\r\n.icon-info {\r\n    color: #68B3C8;\r\n  }\r\n.icon-success {\r\n    color: #7AC29A;\r\n  }\r\n.icon-warning {\r\n    color: #F3BB45;\r\n  }\r\n.icon-danger {\r\n    color: #EB5E28;\r\n  }\r\n.chart-legend .text-primary, .chart-legend .text-primary:hover {\r\n    color: #7A9E9F;\r\n  }\r\n.chart-legend .text-info, .chart-legend .text-info:hover {\r\n    color: #68B3C8;\r\n  }\r\n.chart-legend .text-success, .chart-legend .text-success:hover {\r\n    color: #7AC29A;\r\n  }\r\n.chart-legend .text-warning, .chart-legend .text-warning:hover {\r\n    color: #F3BB45;\r\n  }\r\n.chart-legend .text-danger, .chart-legend .text-danger:hover {\r\n    color: #EB5E28;\r\n  }\r\n/*     General overwrite     */\r\nbody {\r\n    color: #66615b;\r\n    font-size: 14px;\r\n    font-family: 'Muli', Arial, sans-serif;\r\n  }\r\nbody .wrapper {\r\n    min-height: 100vh;\r\n    position: relative;\r\n  }\r\na {\r\n    color: #68B3C8;\r\n  }\r\na:hover, a:focus {\r\n    color: #3091B2;\r\n    text-decoration: none;\r\n  }\r\na:focus, a:active,\r\n  button::-moz-focus-inner,\r\n  input::-moz-focus-inner,\r\n  select::-moz-focus-inner,\r\n  input[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\r\n    outline: 0 !important;\r\n  }\r\n.ui-slider-handle:focus,\r\n  .navbar-toggle,\r\n  input:focus,\r\n  button:focus {\r\n    outline: 0 !important;\r\n  }\r\n/*           Animations              */\r\n.form-control,\r\n  .input-group-addon,\r\n  .tagsinput,\r\n  .navbar,\r\n  .navbar .alert {\r\n    transition: all 300ms linear;\r\n  }\r\n.sidebar .nav a,\r\n  .table > tbody > tr .td-actions .btn {\r\n    transition: all 150ms ease-in;\r\n  }\r\n.btn {\r\n    transition: all 100ms ease-in;\r\n  }\r\n.fa {\r\n    width: 21px;\r\n    text-align: center;\r\n  }\r\n.fa-base {\r\n    font-size: 1.25em !important;\r\n  }\r\n.margin-top {\r\n    margin-top: 50px;\r\n  }\r\nhr {\r\n    border-color: #F1EAE0;\r\n  }\r\n.wrapper {\r\n    position: relative;\r\n    top: 0;\r\n    height: 100vh;\r\n  }\r\n.sidebar {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    background-size: cover;\r\n    background-position: center center;\r\n  }\r\n.sidebar .sidebar-wrapper {\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 260px;\r\n    z-index: 4;\r\n    box-shadow: inset -1px 0px 0px 0px #DDDDDD;\r\n  }\r\n.sidebar .sidebar-background {\r\n    position: absolute;\r\n    z-index: 1;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: block;\r\n    top: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center center;\r\n  }\r\n.sidebar,\r\n  .off-canvas-sidebar {\r\n    width: 260px;\r\n    display: block;\r\n    font-weight: 200;\r\n  }\r\n.sidebar .logo,\r\n  .off-canvas-sidebar .logo {\r\n    padding: 18px 0px;\r\n    margin: 0 20px;\r\n  }\r\n.sidebar .logo p,\r\n  .off-canvas-sidebar .logo p {\r\n    float: left;\r\n    font-size: 20px;\r\n    margin: 10px 10px;\r\n    line-height: 20px;\r\n  }\r\n.sidebar .logo .simple-text,\r\n  .off-canvas-sidebar .logo .simple-text {\r\n    text-transform: uppercase;\r\n    padding: 4px 0px;\r\n    display: block;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    line-height: 30px;\r\n  }\r\n.sidebar .nav,\r\n  .off-canvas-sidebar .nav {\r\n    margin-top: 20px;\r\n  }\r\n.sidebar .nav li > a,\r\n  .off-canvas-sidebar .nav li > a {\r\n    margin: 10px 0px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    opacity: .7;\r\n  }\r\n.sidebar .nav li:hover > a,\r\n  .off-canvas-sidebar .nav li:hover > a {\r\n    opacity: 1;\r\n  }\r\n.sidebar .nav li.active > a,\r\n  .off-canvas-sidebar .nav li.active > a {\r\n    color: #7A9E9F;\r\n    opacity: 1;\r\n  }\r\n.sidebar .nav li.active > a:before,\r\n  .off-canvas-sidebar .nav li.active > a:before {\r\n    border-right: 17px solid #DDDDDD;\r\n    border-top: 17px solid transparent;\r\n    border-bottom: 17px solid transparent;\r\n    content: \"\";\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 8px;\r\n  }\r\n.sidebar .nav li.active > a:after,\r\n  .off-canvas-sidebar .nav li.active > a:after {\r\n    border-right: 17px solid #f4f3ef;\r\n    border-top: 17px solid transparent;\r\n    border-bottom: 17px solid transparent;\r\n    content: \"\";\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: -1px;\r\n    top: 8px;\r\n  }\r\n.sidebar .nav p,\r\n  .off-canvas-sidebar .nav p {\r\n    margin: 0;\r\n    line-height: 30px;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n  }\r\n.sidebar .nav i,\r\n  .off-canvas-sidebar .nav i {\r\n    font-size: 24px;\r\n    float: left;\r\n    margin-right: 15px;\r\n    line-height: 30px;\r\n    width: 30px;\r\n    text-align: center;\r\n    margin-top:16px;\r\n  }\r\n.sidebar:after, .sidebar:before,\r\n  .off-canvas-sidebar:after,\r\n  .off-canvas-sidebar:before {\r\n    display: block;\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n    background: #FFFFFF;\r\n  }\r\n.sidebar:after, .sidebar:before, .sidebar[data-background-color=\"white\"]:after, .sidebar[data-background-color=\"white\"]:before,\r\n  .off-canvas-sidebar:after,\r\n  .off-canvas-sidebar:before,\r\n  .off-canvas-sidebar[data-background-color=\"white\"]:after,\r\n  .off-canvas-sidebar[data-background-color=\"white\"]:before {\r\n    background-color: #FFFFFF;\r\n  }\r\n.sidebar .logo, .sidebar[data-background-color=\"white\"] .logo,\r\n  .off-canvas-sidebar .logo,\r\n  .off-canvas-sidebar[data-background-color=\"white\"] .logo {\r\n    border-bottom: 1px solid rgba(102, 97, 91, 0.3);\r\n  }\r\n.sidebar .logo p, .sidebar[data-background-color=\"white\"] .logo p,\r\n  .off-canvas-sidebar .logo p,\r\n  .off-canvas-sidebar[data-background-color=\"white\"] .logo p {\r\n    color: #66615B;\r\n  }\r\n.sidebar .logo .simple-text, .sidebar[data-background-color=\"white\"] .logo .simple-text,\r\n  .off-canvas-sidebar .logo .simple-text,\r\n  .off-canvas-sidebar[data-background-color=\"white\"] .logo .simple-text {\r\n    color: #66615B;\r\n  }\r\n.sidebar .nav li:not(.active) > a, .sidebar[data-background-color=\"white\"] .nav li:not(.active) > a,\r\n  .off-canvas-sidebar .nav li:not(.active) > a,\r\n  .off-canvas-sidebar[data-background-color=\"white\"] .nav li:not(.active) > a {\r\n    color: #66615B;\r\n  }\r\n.sidebar .nav .divider, .sidebar[data-background-color=\"white\"] .nav .divider,\r\n  .off-canvas-sidebar .nav .divider,\r\n  .off-canvas-sidebar[data-background-color=\"white\"] .nav .divider {\r\n    background-color: rgba(102, 97, 91, 0.2);\r\n  }\r\n.sidebar[data-background-color=\"black\"]:after, .sidebar[data-background-color=\"black\"]:before,\r\n  .off-canvas-sidebar[data-background-color=\"black\"]:after,\r\n  .off-canvas-sidebar[data-background-color=\"black\"]:before {\r\n    background-color: #212120;\r\n  }\r\n.sidebar[data-background-color=\"black\"] .logo,\r\n  .off-canvas-sidebar[data-background-color=\"black\"] .logo {\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n  }\r\n.sidebar[data-background-color=\"black\"] .logo p,\r\n  .off-canvas-sidebar[data-background-color=\"black\"] .logo p {\r\n    color: #FFFFFF;\r\n  }\r\n.sidebar[data-background-color=\"black\"] .logo .simple-text,\r\n  .off-canvas-sidebar[data-background-color=\"black\"] .logo .simple-text {\r\n    color: #FFFFFF;\r\n  }\r\n.sidebar[data-background-color=\"black\"] .nav li:not(.active) > a,\r\n  .off-canvas-sidebar[data-background-color=\"black\"] .nav li:not(.active) > a {\r\n    color: #FFFFFF;\r\n  }\r\n.sidebar[data-background-color=\"black\"] .nav .divider,\r\n  .off-canvas-sidebar[data-background-color=\"black\"] .nav .divider {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n  }\r\n.sidebar[data-active-color=\"primary\"] .nav li.active > a,\r\n  .off-canvas-sidebar[data-active-color=\"primary\"] .nav li.active > a {\r\n    color: #7A9E9F;\r\n    opacity: 1;\r\n  }\r\n.sidebar[data-active-color=\"info\"] .nav li.active > a,\r\n  .off-canvas-sidebar[data-active-color=\"info\"] .nav li.active > a {\r\n    color: #68B3C8;\r\n    opacity: 1;\r\n  }\r\n.sidebar[data-active-color=\"success\"] .nav li.active > a,\r\n  .off-canvas-sidebar[data-active-color=\"success\"] .nav li.active > a {\r\n    color: #7AC29A;\r\n    opacity: 1;\r\n  }\r\n.sidebar[data-active-color=\"warning\"] .nav li.active > a,\r\n  .off-canvas-sidebar[data-active-color=\"warning\"] .nav li.active > a {\r\n    color: #F3BB45;\r\n    opacity: 1;\r\n  }\r\n.sidebar[data-active-color=\"danger\"] .nav li.active > a,\r\n  .off-canvas-sidebar[data-active-color=\"danger\"] .nav li.active > a {\r\n    color: #EB5E28;\r\n    opacity: 1;\r\n  }\r\n.main-panel {\r\n    background-color: #f4f3ef;\r\n    position: relative;\r\n    z-index: 2;\r\n    float: right;\r\n    width: calc(100% - 260px);\r\n    min-height: 100%;\r\n  }\r\n.main-panel > .content {\r\n    padding: 30px 15px;\r\n    min-height: calc(100% - 123px);\r\n  }\r\n.main-panel > .footer {\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n.main-panel .navbar {\r\n    margin-bottom: 0;\r\n  }\r\n.sidebar{\r\n    overflow-x: hidden;\r\n    max-height: 100%;\r\n    height: 100%;\r\n    transition-property: top,bottom;\r\n    transition-duration: .2s,.2s;\r\n    transition-timing-function: linear,linear;\r\n    -webkit-overflow-scrolling: touch;\r\n  }\r\n.main-panel {\r\n    overflow: auto;\r\n    max-height: 100%;\r\n    height: 100%;\r\n    transition-property: top,bottom;\r\n    transition-duration: .2s,.2s;\r\n    transition-timing-function: linear,linear;\r\n    -webkit-overflow-scrolling: touch;\r\n  }\r\n.btn,\r\n  .navbar .navbar-nav > li > a.btn {\r\n    border-radius: 20px;\r\n    box-sizing: border-box;\r\n    border-width: 2px;\r\n    background-color: transparent;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    padding: 7px 18px;\r\n    border-color: #66615B;\r\n    color: #66615B;\r\n    transition: all 150ms linear;\r\n  }\r\n.nav > li > a:hover,\r\n  .nav > li > a:focus {\r\n    background-color: transparent;\r\n  }\r\n.navbar {\r\n    border: 0;\r\n    border-radius: 0;\r\n    font-size: 16px;\r\n    z-index: 3;\r\n  }\r\n.navbar .navbar-brand {\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n  }\r\n.navbar .navbar-nav > li > a {\r\n    line-height: 1.42857;\r\n    margin: 15px 0px;\r\n    padding: 10px 15px;\r\n  }\r\n.navbar .navbar-nav > li > a i,\r\n  .navbar .navbar-nav > li > a p {\r\n    display: inline-block;\r\n    margin: 0;\r\n  }\r\n.navbar .navbar-nav > li > a i {\r\n    position: relative;\r\n    top: 1px;\r\n  }\r\n.navbar .navbar-nav > li > a.btn {\r\n    margin: 15px 3px;\r\n    padding: 7px 18px;\r\n  }\r\n.navbar .btn {\r\n    margin: 15px 3px;\r\n    font-size: 14px;\r\n  }\r\n.navbar .btn-simple {\r\n    font-size: 16px;\r\n  }\r\n.navbar-nav > li > .dropdown-menu {\r\n    border-radius: 6px;\r\n    margin-top: -5px;\r\n  }\r\n.navbar-default {\r\n    background-color: #f4f3ef;\r\n    border-bottom: 1px solid #DDDDDD;\r\n  }\r\n.navbar-default .brand {\r\n    color: #66615b !important;\r\n  }\r\n.navbar-default .navbar-nav > li > a:not(.btn) {\r\n    color: #9A9A9A;\r\n  }\r\n.navbar-default .navbar-nav > .active > a,\r\n  .navbar-default .navbar-nav > .active > a:not(.btn):hover,\r\n  .navbar-default .navbar-nav > .active > a:not(.btn):focus,\r\n  .navbar-default .navbar-nav > li > a:not(.btn):hover,\r\n  .navbar-default .navbar-nav > li > a:not(.btn):focus {\r\n    background-color: transparent;\r\n    border-radius: 3px;\r\n    color: #68B3C8;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n  }\r\n.navbar-default .navbar-nav > .dropdown > a:hover .caret,\r\n  .navbar-default .navbar-nav > .dropdown > a:focus .caret {\r\n    border-bottom-color: #68B3C8;\r\n    border-top-color: #68B3C8;\r\n  }\r\n.navbar-default .navbar-nav > .open > a,\r\n  .navbar-default .navbar-nav > .open > a:hover,\r\n  .navbar-default .navbar-nav > .open > a:focus {\r\n    background-color: transparent;\r\n    color: #68B3C8;\r\n  }\r\n.navbar-default .navbar-nav .navbar-toggle:hover, .navbar-default .navbar-nav .navbar-toggle:focus {\r\n    background-color: transparent;\r\n  }\r\n.navbar-default:not(.navbar-transparent) .btn-default:hover {\r\n    color: #68B3C8;\r\n    border-color: #68B3C8;\r\n  }\r\n.navbar-default:not(.navbar-transparent) .btn-neutral, .navbar-default:not(.navbar-transparent) .btn-neutral:hover, .navbar-default:not(.navbar-transparent) .btn-neutral:active {\r\n    color: #9A9A9A;\r\n  }\r\n.navbar-form {\r\n    box-shadow: none;\r\n  }\r\n.navbar-form .form-control {\r\n    border-radius: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    height: 22px;\r\n    font-size: 16px;\r\n    line-height: 1.4em;\r\n    color: #E3E3E3;\r\n  }\r\n.navbar-transparent .navbar-form .form-control, [class*=\"navbar-ct\"] .navbar-form .form-control {\r\n    color: #FFFFFF;\r\n    border: 0;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.6);\r\n  }\r\n.navbar-ct-primary {\r\n    background-color: #8ECFD5;\r\n  }\r\n.navbar-ct-info {\r\n    background-color: #7CE4FE;\r\n  }\r\n.navbar-ct-success {\r\n    background-color: #8EF3C5;\r\n  }\r\n.navbar-ct-warning {\r\n    background-color: #FFE28C;\r\n  }\r\n.navbar-ct-danger {\r\n    background-color: #FF8F5E;\r\n  }\r\n.navbar-transparent {\r\n    padding-top: 15px;\r\n    background-color: transparent;\r\n    border-bottom: 1px solid transparent;\r\n  }\r\n.navbar-toggle {\r\n    margin-top: 19px;\r\n    margin-bottom: 19px;\r\n    border: 0;\r\n  }\r\n.navbar-toggle .icon-bar {\r\n    background-color: #FFFFFF;\r\n  }\r\n.navbar-toggle .navbar-collapse,\r\n  .navbar-toggle .navbar-form {\r\n    border-color: transparent;\r\n  }\r\n.navbar-toggle.navbar-default .navbar-toggle:hover, .navbar-toggle.navbar-default .navbar-toggle:focus {\r\n    background-color: transparent;\r\n  }\r\n.dropdown-menu {\r\n    background-color: #FFFCF5;\r\n    border: 0 none;\r\n    border-radius: 6px;\r\n    display: block;\r\n    margin-top: 10px;\r\n    padding: 0px;\r\n    position: absolute;\r\n    visibility: hidden;\r\n    z-index: 9000;\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    box-shadow: 0 2px rgba(17, 16, 15, 0.1), 0 2px 10px rgba(17, 16, 15, 0.1);\r\n  }\r\n.open .dropdown-menu {\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n    visibility: visible;\r\n  }\r\n.dropdown-menu .divider {\r\n    background-color: #F1EAE0;\r\n    margin: 0px;\r\n  }\r\n.dropdown-menu .dropdown-header {\r\n    color: #9A9A9A;\r\n    font-size: 12px;\r\n    padding: 10px 15px;\r\n  }\r\n.select .dropdown-menu {\r\n    border-radius: 0 0 10px 10px;\r\n    box-shadow: none;\r\n    -webkit-transform-origin: 50% -40px;\r\n    transform-origin: 50% -40px;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    transition: all 150ms linear;\r\n    margin-top: -20px;\r\n  }\r\n.select.open .dropdown-menu {\r\n    margin-top: -1px;\r\n  }\r\n.dropdown-menu > li > a {\r\n    color: #66615b;\r\n    font-size: 14px;\r\n    padding: 10px 15px;\r\n    transition: none;\r\n  }\r\n.dropdown-menu > li > a img {\r\n    margin-top: -3px;\r\n  }\r\n.dropdown-menu > li > a:focus {\r\n    outline: 0 !important;\r\n  }\r\n.btn-group.select .dropdown-menu {\r\n    min-width: 100%;\r\n  }\r\n.dropdown-menu > li:first-child > a {\r\n    border-top-left-radius: 6px;\r\n    border-top-right-radius: 6px;\r\n  }\r\n.dropdown-menu > li:last-child > a {\r\n    border-bottom-left-radius: 6px;\r\n    border-bottom-right-radius: 6px;\r\n  }\r\n.select .dropdown-menu > li:first-child > a {\r\n    border-radius: 0;\r\n    border-bottom: 0 none;\r\n  }\r\n.dropdown-menu > li > a:hover,\r\n  .dropdown-menu > li > a:focus {\r\n    background-color: #66615B;\r\n    color: rgba(255, 255, 255, 0.7);\r\n    opacity: 1;\r\n    text-decoration: none;\r\n  }\r\n.dropdown-menu.dropdown-primary > li > a:hover, .dropdown-menu.dropdown-primary > li > a:focus {\r\n    background-color: #7A9E9F;\r\n  }\r\n.dropdown-menu.dropdown-info > li > a:hover, .dropdown-menu.dropdown-info > li > a:focus {\r\n    background-color: #68B3C8;\r\n  }\r\n.dropdown-menu.dropdown-success > li > a:hover, .dropdown-menu.dropdown-success > li > a:focus {\r\n    background-color: #7AC29A;\r\n  }\r\n.dropdown-menu.dropdown-warning > li > a:hover, .dropdown-menu.dropdown-warning > li > a:focus {\r\n    background-color: #F3BB45;\r\n  }\r\n.dropdown-menu.dropdown-danger > li > a:hover, .dropdown-menu.dropdown-danger > li > a:focus {\r\n    background-color: #EB5E28;\r\n  }\r\n.btn-group.select {\r\n    overflow: hidden;\r\n  }\r\n.btn-group.select.open {\r\n    overflow: visible;\r\n  }\r\n.card {\r\n    border-radius: 6px;\r\n    box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);\r\n    background-color: #FFFFFF;\r\n    color: #252422;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n.card .image {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    height: 260px;\r\n    border-radius: 6px 6px 0 0;\r\n    position: relative;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n  }\r\n.card .image img {\r\n    width: 100%;\r\n  }\r\n.card .content {\r\n    padding: 15px 15px 10px 15px;\r\n  }\r\n.card .header {\r\n    padding: 20px 20px 0;\r\n  }\r\n.card .description {\r\n    font-size: 16px;\r\n    color: #66615b;\r\n  }\r\n.card h6 {\r\n    font-size: 12px;\r\n    margin: 0;\r\n  }\r\n.card .category,\r\n  .card label {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #9A9A9A;\r\n    margin-bottom: 0px;\r\n  }\r\n.card .category i,\r\n  .card label i {\r\n    font-size: 16px;\r\n  }\r\n.card label {\r\n    font-size: 15px;\r\n    margin-bottom: 5px;\r\n  }\r\n.card .title {\r\n    margin: 0;\r\n    color: #252422;\r\n    font-weight: 300;\r\n  }\r\n.card .avatar {\r\n    width: 50px;\r\n    height: 50px;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    margin-right: 5px;\r\n  }\r\n.card .footer {\r\n    padding: 0;\r\n    line-height: 30px;\r\n  }\r\n.card .footer .legend {\r\n    padding: 5px 0;\r\n  }\r\n.card .footer hr {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n  }\r\n.card .stats {\r\n    color: #a9a9a9;\r\n    font-weight: 300;\r\n  }\r\n.card .stats i {\r\n    margin-right: 2px;\r\n    min-width: 15px;\r\n    display: inline-block;\r\n  }\r\n.card .footer div {\r\n    display: inline-block;\r\n  }\r\n.card .author {\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n  }\r\n.card .author i {\r\n    font-size: 14px;\r\n  }\r\n.card.card-separator:after {\r\n    height: 100%;\r\n    right: -15px;\r\n    top: 0;\r\n    width: 1px;\r\n    background-color: #DDDDDD;\r\n    content: \"\";\r\n    position: absolute;\r\n  }\r\n.card .ct-chart {\r\n    margin: 30px 0 30px;\r\n    height: 245px;\r\n  }\r\n.card .table tbody td:first-child,\r\n  .card .table thead th:first-child {\r\n    padding-left: 15px;\r\n  }\r\n.card .table tbody td:last-child,\r\n  .card .table thead th:last-child {\r\n    padding-right: 15px;\r\n  }\r\n.card .alert {\r\n    border-radius: 4px;\r\n    position: relative;\r\n  }\r\n.card .alert.alert-with-icon {\r\n    padding-left: 65px;\r\n  }\r\n.card .icon-big {\r\n    font-size: 3em;\r\n    min-height: 64px;\r\n  }\r\n.card .numbers {\r\n    font-size: 2em;\r\n    text-align: right;\r\n  }\r\n.card .numbers p {\r\n    margin: 0;\r\n  }\r\n.card ul.team-members li {\r\n    padding: 10px 0px;\r\n  }\r\n.card ul.team-members li:not(:last-child) {\r\n    border-bottom: 1px solid #F1EAE0;\r\n  }\r\n.card-user .image {\r\n    border-radius: 8px 8px 0 0;\r\n    height: 150px;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n.card-user .image img {\r\n    width: 100%;\r\n  }\r\n.card-user .image-plain {\r\n    height: 0;\r\n    margin-top: 110px;\r\n  }\r\n.card-user .author {\r\n    text-align: center;\r\n    text-transform: none;\r\n    margin-top: -65px;\r\n  }\r\n.card-user .author .title {\r\n    color: #403D39;\r\n  }\r\n.card-user .author .title small {\r\n    color: #ccc5b9;\r\n  }\r\n.card-user .avatar {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    margin-bottom: 15px;\r\n  }\r\n.card-user .avatar.border-white {\r\n    border: 5px solid #FFFFFF;\r\n  }\r\n.card-user .avatar.border-gray {\r\n    border: 5px solid #ccc5b9;\r\n  }\r\n.card-user .title {\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n  }\r\n.card-user .description {\r\n    margin-top: 10px;\r\n  }\r\n.card-user .content {\r\n    min-height: 200px;\r\n  }\r\n.card-user.card-plain .avatar {\r\n    height: 190px;\r\n    width: 190px;\r\n  }\r\n.card-map .map {\r\n    height: 500px;\r\n    padding-top: 20px;\r\n  }\r\n.card-map .map > div {\r\n    height: 100%;\r\n  }\r\n.card-user .footer,\r\n  .card-price .footer {\r\n    padding: 5px 15px 10px;\r\n  }\r\n.card-user hr,\r\n  .card-price hr {\r\n    margin: 5px 15px;\r\n  }\r\n.card-plain {\r\n    background-color: transparent;\r\n    box-shadow: none;\r\n    border-radius: 0;\r\n  }\r\n.card-plain .image {\r\n    border-radius: 4px;\r\n  }\r\n.ct-label {\r\n    fill: rgba(0, 0, 0, 0.4);\r\n    color: rgba(0, 0, 0, 0.4);\r\n    font-size: 0.9em;\r\n    line-height: 1;\r\n  }\r\n.ct-chart-line .ct-label,\r\n  .ct-chart-bar .ct-label {\r\n    display: block;\r\n    display: flex;\r\n  }\r\n.ct-label.ct-horizontal.ct-start {\r\n    align-items: flex-end;\r\n    justify-content: flex-start;\r\n    text-align: left;\r\n    text-anchor: start;\r\n  }\r\n.ct-label.ct-horizontal.ct-end {\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    text-align: left;\r\n    text-anchor: start;\r\n  }\r\n.ct-label.ct-vertical.ct-start {\r\n    align-items: flex-end;\r\n    justify-content: flex-end;\r\n    text-align: right;\r\n    text-anchor: end;\r\n  }\r\n.ct-label.ct-vertical.ct-end {\r\n    align-items: flex-end;\r\n    justify-content: flex-start;\r\n    text-align: left;\r\n    text-anchor: start;\r\n  }\r\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\r\n    align-items: flex-end;\r\n    justify-content: center;\r\n    text-align: center;\r\n    text-anchor: start;\r\n  }\r\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n    text-align: center;\r\n    text-anchor: start;\r\n  }\r\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\r\n    align-items: flex-end;\r\n    justify-content: flex-start;\r\n    text-align: left;\r\n    text-anchor: start;\r\n  }\r\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    text-align: left;\r\n    text-anchor: start;\r\n  }\r\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    text-align: right;\r\n    text-anchor: end;\r\n  }\r\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    text-align: left;\r\n    text-anchor: end;\r\n  }\r\n.ct-grid {\r\n    stroke: rgba(0, 0, 0, 0.2);\r\n    stroke-width: 1px;\r\n    stroke-dasharray: 2px;\r\n  }\r\n.ct-point {\r\n    stroke-width: 10px;\r\n    stroke-linecap: round;\r\n  }\r\n.ct-line {\r\n    fill: none;\r\n    stroke-width: 4px;\r\n  }\r\n.ct-area {\r\n    stroke: none;\r\n    fill-opacity: 0.7;\r\n  }\r\n.ct-bar {\r\n    fill: none;\r\n    stroke-width: 10px;\r\n  }\r\n.ct-slice-donut {\r\n    fill: none;\r\n    stroke-width: 60px;\r\n  }\r\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\r\n    stroke: #68B3C8;\r\n  }\r\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\r\n    fill: #68B3C8;\r\n  }\r\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\r\n    stroke: #F3BB45;\r\n  }\r\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\r\n    fill: #F3BB45;\r\n  }\r\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\r\n    stroke: #EB5E28;\r\n  }\r\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\r\n    fill: #EB5E28;\r\n  }\r\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\r\n    stroke: #7AC29A;\r\n  }\r\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\r\n    fill: #7AC29A;\r\n  }\r\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\r\n    stroke: #7A9E9F;\r\n  }\r\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\r\n    fill: #7A9E9F;\r\n  }\r\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\r\n    stroke: rgba(104, 179, 200, 0.8);\r\n  }\r\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\r\n    fill: rgba(104, 179, 200, 0.8);\r\n  }\r\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\r\n    stroke: rgba(122, 194, 154, 0.8);\r\n  }\r\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\r\n    fill: rgba(122, 194, 154, 0.8);\r\n  }\r\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\r\n    stroke: rgba(243, 187, 69, 0.8);\r\n  }\r\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\r\n    fill: rgba(243, 187, 69, 0.8);\r\n  }\r\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\r\n    stroke: rgba(235, 94, 40, 0.8);\r\n  }\r\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\r\n    fill: rgba(235, 94, 40, 0.8);\r\n  }\r\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\r\n    stroke: rgba(122, 158, 159, 0.8);\r\n  }\r\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\r\n    fill: rgba(122, 158, 159, 0.8);\r\n  }\r\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\r\n    stroke: rgba(104, 179, 200, 0.6);\r\n  }\r\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\r\n    fill: rgba(104, 179, 200, 0.6);\r\n  }\r\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\r\n    stroke: rgba(122, 194, 154, 0.6);\r\n  }\r\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\r\n    fill: rgba(122, 194, 154, 0.6);\r\n  }\r\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\r\n    stroke: rgba(243, 187, 69, 0.6);\r\n  }\r\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\r\n    fill: rgba(243, 187, 69, 0.6);\r\n  }\r\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\r\n    stroke: rgba(235, 94, 40, 0.6);\r\n  }\r\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\r\n    fill: rgba(235, 94, 40, 0.6);\r\n  }\r\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\r\n    stroke: rgba(122, 158, 159, 0.6);\r\n  }\r\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\r\n    fill: rgba(122, 158, 159, 0.6);\r\n  }\r\n.ct-square {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-square:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 100%;\r\n  }\r\n.ct-square:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-square > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-minor-second {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-minor-second:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 93.75%;\r\n  }\r\n.ct-minor-second:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-minor-second > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-major-second {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-major-second:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 88.88889%;\r\n  }\r\n.ct-major-second:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-major-second > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-minor-third {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-minor-third:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 83.33333%;\r\n  }\r\n.ct-minor-third:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-minor-third > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-major-third {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-major-third:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 80%;\r\n  }\r\n.ct-major-third:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-major-third > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-perfect-fourth {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-perfect-fourth:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 75%;\r\n  }\r\n.ct-perfect-fourth:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-perfect-fourth > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-perfect-fifth {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-perfect-fifth:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 66.66667%;\r\n  }\r\n.ct-perfect-fifth:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-perfect-fifth > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-minor-sixth {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-minor-sixth:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 62.5%;\r\n  }\r\n.ct-minor-sixth:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-minor-sixth > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-golden-section {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-golden-section:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 61.8047%;\r\n  }\r\n.ct-golden-section:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-golden-section > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-major-sixth {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-major-sixth:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 60%;\r\n  }\r\n.ct-major-sixth:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-major-sixth > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-minor-seventh {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-minor-seventh:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 56.25%;\r\n  }\r\n.ct-minor-seventh:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-minor-seventh > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-major-seventh {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-major-seventh:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 53.33333%;\r\n  }\r\n.ct-major-seventh:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-major-seventh > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-octave {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-octave:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 50%;\r\n  }\r\n.ct-octave:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-octave > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-major-tenth {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-major-tenth:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 40%;\r\n  }\r\n.ct-major-tenth:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-major-tenth > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-major-eleventh {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-major-eleventh:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 37.5%;\r\n  }\r\n.ct-major-eleventh:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-major-eleventh > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-major-twelfth {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-major-twelfth:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 33.33333%;\r\n  }\r\n.ct-major-twelfth:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-major-twelfth > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n.ct-double-octave {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n.ct-double-octave:before {\r\n    display: block;\r\n    float: left;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    padding-bottom: 25%;\r\n  }\r\n.ct-double-octave:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n.ct-double-octave > svg {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n@media (min-width: 992px) {\r\n    .navbar {\r\n      min-height: 75px;\r\n    }\r\n  \r\n    .navbar-form {\r\n      margin-top: 21px;\r\n      margin-bottom: 21px;\r\n      padding-left: 5px;\r\n      padding-right: 5px;\r\n    }\r\n  \r\n    .navbar-search-form {\r\n      display: none;\r\n    }\r\n  \r\n    .navbar-nav > li > .dropdown-menu,\r\n    .dropdown .dropdown-menu {\r\n      -webkit-transform: translate3d(0px, -40px, 0px);\r\n              transform: translate3d(0px, -40px, 0px);\r\n      transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, opacity 0.3s ease 0s, height 0s linear 0.35s;\r\n    }\r\n  \r\n    .navbar-nav > li.open > .dropdown-menu, .dropdown.open .dropdown-menu {\r\n      -webkit-transform: translate3d(0px, 0px, 0px);\r\n              transform: translate3d(0px, 0px, 0px);\r\n    }\r\n  \r\n    .navbar-nav > li > .dropdown-menu:before {\r\n      border-bottom: 11px solid #F1EAE0;\r\n      border-left: 11px solid transparent;\r\n      border-right: 11px solid transparent;\r\n      content: \"\";\r\n      display: inline-block;\r\n      position: absolute;\r\n      right: 12px;\r\n      top: -11px;\r\n    }\r\n  \r\n    .navbar-nav > li > .dropdown-menu:after {\r\n      border-bottom: 11px solid #FFFCF5;\r\n      border-left: 11px solid transparent;\r\n      border-right: 11px solid transparent;\r\n      content: \"\";\r\n      display: inline-block;\r\n      position: absolute;\r\n      right: 12px;\r\n      top: -10px;\r\n    }\r\n  \r\n    .navbar-nav.navbar-left > li > .dropdown-menu:before {\r\n      right: auto;\r\n      left: 12px;\r\n    }\r\n  \r\n    .navbar-nav.navbar-left > li > .dropdown-menu:after {\r\n      right: auto;\r\n      left: 12px;\r\n    }\r\n  \r\n    .navbar .navbar-header {\r\n      margin-left: 10px;\r\n    }\r\n  \r\n    .footer:not(.footer-big) nav > ul li:first-child {\r\n      margin-left: 0;\r\n    }\r\n  \r\n    body > .navbar-collapse.collapse {\r\n      display: none !important;\r\n    }\r\n  \r\n    .card form [class*=\"col-\"] {\r\n      padding: 6px;\r\n    }\r\n    .card form [class*=\"col-\"]:first-child {\r\n      padding-left: 15px;\r\n    }\r\n    .card form [class*=\"col-\"]:last-child {\r\n      padding-right: 15px;\r\n    }\r\n  }\r\n/*          Changes for small display      */\r\n@media (max-width: 991px) {\r\n    .sidebar {\r\n      display: none;\r\n    }\r\n  \r\n    .main-panel {\r\n      width: 100%;\r\n    }\r\n  \r\n    .navbar-transparent {\r\n      padding-top: 15px;\r\n      background-color: rgba(0, 0, 0, 0.45);\r\n    }\r\n  \r\n    body {\r\n      position: relative;\r\n    }\r\n  \r\n    h6 {\r\n      font-size: 1em;\r\n    }\r\n  \r\n    .wrapper {\r\n      -webkit-transform: translate3d(0px, 0, 0);\r\n      transform: translate3d(0px, 0, 0);\r\n      transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\r\n      left: 0;\r\n      background-color: white;\r\n    }\r\n  \r\n    .navbar .container {\r\n      left: 0;\r\n      width: 100%;\r\n      transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\r\n      position: relative;\r\n    }\r\n  \r\n    .navbar .navbar-collapse.collapse,\r\n    .navbar .navbar-collapse.collapse.in,\r\n    .navbar .navbar-collapse.collapsing {\r\n      display: none !important;\r\n    }\r\n  \r\n    .navbar-nav > li {\r\n      float: none;\r\n      position: relative;\r\n      display: block;\r\n    }\r\n  \r\n    .off-canvas-sidebar {\r\n      position: fixed;\r\n      display: block;\r\n      top: 0;\r\n      height: 100%;\r\n      width: 230px;\r\n      right: 0;\r\n      z-index: 1032;\r\n      visibility: visible;\r\n      background-color: #999;\r\n      overflow-y: visible;\r\n      border-top: none;\r\n      text-align: left;\r\n      padding-right: 0px;\r\n      padding-left: 0;\r\n      -webkit-transform: translate3d(230px, 0, 0);\r\n      transform: translate3d(230px, 0, 0);\r\n      transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\r\n    }\r\n    .off-canvas-sidebar .sidebar-wrapper {\r\n      position: relative;\r\n      z-index: 3;\r\n      overflow-y: scroll;\r\n      height: 100%;\r\n      box-shadow: inset 1px 0px 0px 0px #DDDDDD;\r\n    }\r\n    .off-canvas-sidebar .nav {\r\n      margin-top: 0;\r\n      padding: 10px 15px 0;\r\n    }\r\n    .off-canvas-sidebar .nav > li > a {\r\n      margin: 0px 0px;\r\n      color: #66615B;\r\n      text-transform: uppercase;\r\n      font-weight: 600;\r\n      font-size: 12px;\r\n      line-height: 1.4em;\r\n      padding: 10px 0;\r\n    }\r\n    .off-canvas-sidebar .nav > li > a:hover, .off-canvas-sidebar .nav > li > a.active {\r\n      color: #403D39;\r\n    }\r\n    .off-canvas-sidebar .nav > li > a p,\r\n    .off-canvas-sidebar .nav > li > a .notification,\r\n    .off-canvas-sidebar .nav > li > a .caret {\r\n      display: inline-block;\r\n    }\r\n    .off-canvas-sidebar .nav > li > a .caret {\r\n      float: right;\r\n      position: relative;\r\n      top: 12px;\r\n    }\r\n    .off-canvas-sidebar .nav > li > a i {\r\n      font-size: 18px;\r\n      margin-right: 10px;\r\n      line-height: 26px;\r\n    }\r\n    .off-canvas-sidebar .nav > li.active > a:before {\r\n      border-right: none;\r\n      border-left: 12px solid #DDDDDD;\r\n      border-top: 12px solid transparent;\r\n      border-bottom: 12px solid transparent;\r\n      right: auto;\r\n      margin-left: -15px;\r\n      left: 0px;\r\n      top: 10px;\r\n    }\r\n    .off-canvas-sidebar .nav > li.active > a:after {\r\n      border-right: none;\r\n      border-left: 12px solid #f4f3ef;\r\n      border-top: 12px solid transparent;\r\n      border-bottom: 12px solid transparent;\r\n      right: auto;\r\n      margin-left: -15px;\r\n      left: -1px;\r\n      top: 10px;\r\n    }\r\n    .off-canvas-sidebar::after {\r\n      top: 0;\r\n      left: 0;\r\n      height: 100%;\r\n      width: 100%;\r\n      position: absolute;\r\n      background-color: #f4f3ef;\r\n      background-image: linear-gradient(to bottom, transparent 0%, rgba(112, 112, 112, 0) 60%, rgba(186, 186, 186, 0.15) 100%);\r\n      display: block;\r\n      content: \"\";\r\n      z-index: 1;\r\n    }\r\n    .off-canvas-sidebar.has-image::after {\r\n      top: 0;\r\n      left: 0;\r\n      height: 100%;\r\n      width: 100%;\r\n      position: absolute;\r\n      background-color: rgba(17, 17, 17, 0.8);\r\n      display: block;\r\n      content: \"\";\r\n      z-index: 1;\r\n    }\r\n    .off-canvas-sidebar .logo {\r\n      position: relative;\r\n      z-index: 4;\r\n      padding-top: 11px;\r\n      padding-bottom: 11px;\r\n    }\r\n    .off-canvas-sidebar .divider {\r\n      height: 1px;\r\n      margin: 10px 0;\r\n    }\r\n  \r\n    .nav-open .navbar-collapse {\r\n      -webkit-transform: translate3d(0px, 0, 0);\r\n      transform: translate3d(0px, 0, 0);\r\n    }\r\n  \r\n    .nav-open .navbar .container {\r\n      left: -230px;\r\n    }\r\n  \r\n    .nav-open .wrapper {\r\n      left: 0;\r\n      -webkit-transform: translate3d(-230px, 0, 0);\r\n      transform: translate3d(-230px, 0, 0);\r\n    }\r\n  \r\n    .navbar-toggle .icon-bar {\r\n      display: block;\r\n      position: relative;\r\n      background: #fff;\r\n      width: 24px;\r\n      height: 2px;\r\n      border-radius: 1px;\r\n      margin: 0 auto;\r\n    }\r\n  \r\n    .navbar-header .navbar-toggle {\r\n      margin: 10px 15px 10px 0;\r\n      width: 40px;\r\n      height: 40px;\r\n    }\r\n  \r\n    .bar1,\r\n    .bar2,\r\n    .bar3 {\r\n      outline: 1px solid transparent;\r\n    }\r\n  \r\n    .bar1 {\r\n      top: 0px;\r\n      -webkit-animation: topbar-back 500ms linear 0s;\r\n      animation: topbar-back 500ms 0s;\r\n      -webkit-animation-fill-mode: forwards;\r\n      animation-fill-mode: forwards;\r\n    }\r\n  \r\n    .bar2 {\r\n      opacity: 1;\r\n    }\r\n  \r\n    .bar3 {\r\n      bottom: 0px;\r\n      -webkit-animation: bottombar-back 500ms linear 0s;\r\n      animation: bottombar-back 500ms 0s;\r\n      -webkit-animation-fill-mode: forwards;\r\n      animation-fill-mode: forwards;\r\n    }\r\n  \r\n    .toggled .bar1 {\r\n      top: 6px;\r\n      -webkit-animation: topbar-x 500ms linear 0s;\r\n      animation: topbar-x 500ms 0s;\r\n      -webkit-animation-fill-mode: forwards;\r\n      animation-fill-mode: forwards;\r\n    }\r\n  \r\n    .toggled .bar2 {\r\n      opacity: 0;\r\n    }\r\n  \r\n    .toggled .bar3 {\r\n      bottom: 6px;\r\n      -webkit-animation: bottombar-x 500ms linear 0s;\r\n      animation: bottombar-x 500ms 0s;\r\n      -webkit-animation-fill-mode: forwards;\r\n      animation-fill-mode: forwards;\r\n    }\r\n  \r\n    @keyframes topbar-x {\r\n      0% {\r\n        top: 0px;\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n      }\r\n      45% {\r\n        top: 6px;\r\n        -webkit-transform: rotate(145deg);\r\n                transform: rotate(145deg);\r\n      }\r\n      75% {\r\n        -webkit-transform: rotate(130deg);\r\n                transform: rotate(130deg);\r\n      }\r\n      100% {\r\n        -webkit-transform: rotate(135deg);\r\n                transform: rotate(135deg);\r\n      }\r\n    }\r\n    @-webkit-keyframes topbar-x {\r\n      0% {\r\n        top: 0px;\r\n        -webkit-transform: rotate(0deg);\r\n      }\r\n      45% {\r\n        top: 6px;\r\n        -webkit-transform: rotate(145deg);\r\n      }\r\n      75% {\r\n        -webkit-transform: rotate(130deg);\r\n      }\r\n      100% {\r\n        -webkit-transform: rotate(135deg);\r\n      }\r\n    }\r\n    @keyframes topbar-back {\r\n      0% {\r\n        top: 6px;\r\n        -webkit-transform: rotate(135deg);\r\n                transform: rotate(135deg);\r\n      }\r\n      45% {\r\n        -webkit-transform: rotate(-10deg);\r\n                transform: rotate(-10deg);\r\n      }\r\n      75% {\r\n        -webkit-transform: rotate(5deg);\r\n                transform: rotate(5deg);\r\n      }\r\n      100% {\r\n        top: 0px;\r\n        -webkit-transform: rotate(0);\r\n                transform: rotate(0);\r\n      }\r\n    }\r\n    @-webkit-keyframes topbar-back {\r\n      0% {\r\n        top: 6px;\r\n        -webkit-transform: rotate(135deg);\r\n      }\r\n      45% {\r\n        -webkit-transform: rotate(-10deg);\r\n      }\r\n      75% {\r\n        -webkit-transform: rotate(5deg);\r\n      }\r\n      100% {\r\n        top: 0px;\r\n        -webkit-transform: rotate(0);\r\n      }\r\n    }\r\n    @keyframes bottombar-x {\r\n      0% {\r\n        bottom: 0px;\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n      }\r\n      45% {\r\n        bottom: 6px;\r\n        -webkit-transform: rotate(-145deg);\r\n                transform: rotate(-145deg);\r\n      }\r\n      75% {\r\n        -webkit-transform: rotate(-130deg);\r\n                transform: rotate(-130deg);\r\n      }\r\n      100% {\r\n        -webkit-transform: rotate(-135deg);\r\n                transform: rotate(-135deg);\r\n      }\r\n    }\r\n    @-webkit-keyframes bottombar-x {\r\n      0% {\r\n        bottom: 0px;\r\n        -webkit-transform: rotate(0deg);\r\n      }\r\n      45% {\r\n        bottom: 6px;\r\n        -webkit-transform: rotate(-145deg);\r\n      }\r\n      75% {\r\n        -webkit-transform: rotate(-130deg);\r\n      }\r\n      100% {\r\n        -webkit-transform: rotate(-135deg);\r\n      }\r\n    }\r\n    @keyframes bottombar-back {\r\n      0% {\r\n        bottom: 6px;\r\n        -webkit-transform: rotate(-135deg);\r\n                transform: rotate(-135deg);\r\n      }\r\n      45% {\r\n        -webkit-transform: rotate(10deg);\r\n                transform: rotate(10deg);\r\n      }\r\n      75% {\r\n        -webkit-transform: rotate(-5deg);\r\n                transform: rotate(-5deg);\r\n      }\r\n      100% {\r\n        bottom: 0px;\r\n        -webkit-transform: rotate(0);\r\n                transform: rotate(0);\r\n      }\r\n    }\r\n    @-webkit-keyframes bottombar-back {\r\n      0% {\r\n        bottom: 6px;\r\n        -webkit-transform: rotate(-135deg);\r\n      }\r\n      45% {\r\n        -webkit-transform: rotate(10deg);\r\n      }\r\n      75% {\r\n        -webkit-transform: rotate(-5deg);\r\n      }\r\n      100% {\r\n        bottom: 0px;\r\n        -webkit-transform: rotate(0);\r\n      }\r\n    }\r\n    @-webkit-keyframes fadeIn {\r\n      0% {\r\n        opacity: 0;\r\n      }\r\n      100% {\r\n        opacity: 1;\r\n      }\r\n    }\r\n    @keyframes fadeIn {\r\n      0% {\r\n        opacity: 0;\r\n      }\r\n      100% {\r\n        opacity: 1;\r\n      }\r\n    }\r\n    .dropdown-menu .divider {\r\n      background-color: rgba(229, 229, 229, 0.15);\r\n    }\r\n  \r\n    .navbar-nav {\r\n      margin: 1px 0;\r\n    }\r\n  \r\n    .dropdown-menu {\r\n      display: none;\r\n    }\r\n    .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\r\n      background-color: transparent;\r\n    }\r\n  \r\n    .navbar-fixed-top {\r\n      -webkit-backface-visibility: hidden;\r\n    }\r\n  \r\n    #bodyClick {\r\n      height: 100%;\r\n      width: 100%;\r\n      position: fixed;\r\n      opacity: 0;\r\n      top: 0;\r\n      left: auto;\r\n      right: 230px;\r\n      content: \"\";\r\n      z-index: 9999;\r\n      overflow-x: hidden;\r\n    }\r\n  \r\n    .form-control + .form-control-feedback {\r\n      margin-top: -8px;\r\n    }\r\n  \r\n    .navbar-toggle:hover, .navbar-toggle:focus {\r\n      background-color: transparent !important;\r\n    }\r\n  \r\n    .btn.dropdown-toggle {\r\n      margin-bottom: 0;\r\n    }\r\n  \r\n    .media-post .author {\r\n      width: 20%;\r\n      float: none !important;\r\n      display: block;\r\n      margin: 0 auto 10px;\r\n    }\r\n  \r\n    .media-post .media-body {\r\n      width: 100%;\r\n    }\r\n  \r\n    .navbar-collapse.collapse {\r\n      height: 100% !important;\r\n    }\r\n  \r\n    .navbar-collapse.collapse.in {\r\n      display: block;\r\n    }\r\n  \r\n    .navbar-header .collapse, .navbar-toggle {\r\n      display: block !important;\r\n    }\r\n  \r\n    .navbar-header {\r\n      float: none;\r\n    }\r\n  \r\n    .navbar-nav .open .dropdown-menu {\r\n      position: static;\r\n      float: none;\r\n      width: auto;\r\n      margin-top: 0;\r\n      background-color: transparent;\r\n      border: 0;\r\n      box-shadow: none;\r\n    }\r\n  \r\n    .main-panel > .content {\r\n      padding-left: 0;\r\n      padding-right: 0;\r\n    }\r\n  \r\n    .nav .open > a, .nav .open > a:focus, .nav .open > a:hover {\r\n      background-color: transparent;\r\n    }\r\n  \r\n    .footer .copyright {\r\n      padding: 0px 15px;\r\n      width: 100%;\r\n    }\r\n  }\r\n@media (min-width: 992px) {\r\n    .table-full-width {\r\n      margin-left: -15px;\r\n      margin-right: -15px;\r\n    }\r\n  \r\n    .table-responsive {\r\n      overflow: visible;\r\n    }\r\n  }\r\n@media (max-width: 991px) {\r\n    .table-responsive {\r\n      width: 100%;\r\n      margin-bottom: 15px;\r\n      border: 1px solid #dddddd;\r\n      overflow-x: scroll;\r\n      overflow-y: hidden;\r\n      -ms-overflow-style: -ms-autohiding-scrollbar;\r\n      -webkit-overflow-scrolling: touch;\r\n    }\r\n  }\r\n/*----------------my styles----------------*/\r\n.dashboardNav {\r\n    display: list-item !important;\r\n    padding-left: 40px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQ7QUFDMUQ7SUFDSSwyQkFBMkI7R0FDNUI7QUFFRDtJQUNFLDJCQUEyQjtHQUM1QjtBQUVEO0lBQ0UsMkJBQTJCO0dBQzVCO0FBRUQ7SUFDRSwyQkFBMkI7R0FDNUI7QUFFRDtJQUNFLDJCQUEyQjtHQUM1QjtBQUVEO0lBQ0UsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxvREFBb0Q7R0FDckQ7QUFFRDtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7R0FDckI7QUFFRDtJQUNFLGlCQUFpQjtHQUNsQjtBQUVEO0lBQ0UsaUJBQWlCO0dBQ2xCO0FBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtHQUNyQjtBQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7R0FDcEI7QUFFRDtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtHQUNyQjtBQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwwQkFBMEI7R0FDM0I7QUFFRDtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7QUFFRDtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0dBQ3BCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSwwQkFBMEI7R0FDM0I7QUFFRDtJQUNFLG1CQUFtQjtHQUNwQjtBQUVEO0lBQ0UsbUJBQW1CO0dBQ3BCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxlQUFlO0dBQ2hCO0FBQ0Q7SUFDRSxlQUFlO0dBQ2hCO0FBQ0Q7SUFDRSxlQUFlO0dBQ2hCO0FBQ0Q7SUFDRSxlQUFlO0dBQ2hCO0FBQ0Q7SUFDRSxlQUFlO0dBQ2hCO0FBRUQsK0JBQStCO0FBQy9CO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1Q0FBdUM7R0FDeEM7QUFDRDtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7R0FDcEI7QUFFRDtJQUNFLGVBQWU7R0FDaEI7QUFDRDtJQUNFLGVBQWU7SUFDZixzQkFBc0I7R0FDdkI7QUFFRDs7Ozs7SUFLRSxzQkFBc0I7R0FDdkI7QUFFRDs7OztJQUlFLHNCQUFzQjtHQUN2QjtBQUVELHVDQUF1QztBQUN2Qzs7Ozs7SUFTRSw2QkFBNkI7R0FDOUI7QUFFRDs7SUFNRSw4QkFBOEI7R0FDL0I7QUFFRDtJQUtFLDhCQUE4QjtHQUMvQjtBQUVEO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtHQUNwQjtBQUVEO0lBQ0UsNkJBQTZCO0dBQzlCO0FBRUQ7SUFDRSxpQkFBaUI7R0FDbEI7QUFFRDtJQUNFLHNCQUFzQjtHQUN2QjtBQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxjQUFjO0dBQ2Y7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFFBQVE7SUFDUixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1DQUFtQztHQUNwQztBQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztJQUNYLDJDQUEyQztHQUM1QztBQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixPQUFPO0lBQ1AsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixtQ0FBbUM7R0FDcEM7QUFFRDs7SUFFRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtHQUNsQjtBQUNEOztJQUVFLGtCQUFrQjtJQUNsQixlQUFlO0dBQ2hCO0FBQ0Q7O0lBRUUsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0dBQ25CO0FBQ0Q7O0lBRUUsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0dBQ25CO0FBQ0Q7O0lBRUUsaUJBQWlCO0dBQ2xCO0FBQ0Q7O0lBRUUsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtHQUNiO0FBQ0Q7O0lBRUUsV0FBVztHQUNaO0FBQ0Q7O0lBRUUsZUFBZTtJQUNmLFdBQVc7R0FDWjtBQUNEOztJQUVFLGlDQUFpQztJQUNqQyxtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxTQUFTO0dBQ1Y7QUFDRDs7SUFFRSxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osU0FBUztHQUNWO0FBQ0Q7O0lBRUUsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtHQUMzQjtBQUNEOztJQUVFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtHQUNqQjtBQUNEOzs7SUFHRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLG9CQUFvQjtHQUNyQjtBQUNEOzs7OztJQUtFLDBCQUEwQjtHQUMzQjtBQUNEOzs7SUFHRSxnREFBZ0Q7R0FDakQ7QUFDRDs7O0lBR0UsZUFBZTtHQUNoQjtBQUNEOzs7SUFHRSxlQUFlO0dBQ2hCO0FBQ0Q7OztJQUdFLGVBQWU7R0FDaEI7QUFDRDs7O0lBR0UseUNBQXlDO0dBQzFDO0FBQ0Q7OztJQUdFLDBCQUEwQjtHQUMzQjtBQUNEOztJQUVFLGtEQUFrRDtHQUNuRDtBQUNEOztJQUVFLGVBQWU7R0FDaEI7QUFDRDs7SUFFRSxlQUFlO0dBQ2hCO0FBQ0Q7O0lBRUUsZUFBZTtHQUNoQjtBQUNEOztJQUVFLDJDQUEyQztHQUM1QztBQUNEOztJQUVFLGVBQWU7SUFDZixXQUFXO0dBQ1o7QUFDRDs7SUFFRSxlQUFlO0lBQ2YsV0FBVztHQUNaO0FBQ0Q7O0lBRUUsZUFBZTtJQUNmLFdBQVc7R0FDWjtBQUNEOztJQUVFLGVBQWU7SUFDZixXQUFXO0dBQ1o7QUFDRDs7SUFFRSxlQUFlO0lBQ2YsV0FBVztHQUNaO0FBRUQ7SUFDRSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGlCQUFpQjtHQUNsQjtBQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLCtCQUErQjtHQUNoQztBQUNEO0lBQ0UseUNBQXlDO0dBQzFDO0FBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUViLGdDQUFnQztJQUVoQyw2QkFBNkI7SUFFN0IsMENBQTBDO0lBQzFDLGtDQUFrQztHQUNuQztBQUdEO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBRWIsZ0NBQWdDO0lBRWhDLDZCQUE2QjtJQUU3QiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0dBQ25DO0FBRUQ7O0lBRUUsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBS2YsNkJBQTZCO0dBQzlCO0FBQ0Q7O0lBRUUsOEJBQThCO0dBQy9CO0FBRUQ7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0dBQ1o7QUFDRDtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7R0FDakI7QUFDRDtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0dBQ3BCO0FBQ0Q7O0lBRUUsc0JBQXNCO0lBQ3RCLFVBQVU7R0FDWDtBQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLFNBQVM7R0FDVjtBQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtHQUNuQjtBQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtHQUNqQjtBQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0FBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0dBQ2xCO0FBRUQ7SUFDRSwwQkFBMEI7SUFDMUIsaUNBQWlDO0dBQ2xDO0FBQ0Q7SUFDRSwwQkFBMEI7R0FDM0I7QUFDRDtJQUNFLGVBQWU7R0FDaEI7QUFDRDs7Ozs7SUFLRSw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsMkJBQTJCO0dBQzVCO0FBQ0Q7O0lBRUUsNkJBQTZCO0lBQzdCLDBCQUEwQjtHQUMzQjtBQUNEOzs7SUFHRSw4QkFBOEI7SUFDOUIsZUFBZTtHQUNoQjtBQUNEO0lBQ0UsOEJBQThCO0dBQy9CO0FBQ0Q7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0dBQ3ZCO0FBQ0Q7SUFDRSxlQUFlO0dBQ2hCO0FBRUQ7SUFFRSxpQkFBaUI7R0FDbEI7QUFDRDtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0dBQ2hCO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtEQUFrRDtHQUNuRDtBQUVEO0lBQ0UsMEJBQTBCO0dBQzNCO0FBRUQ7SUFDRSwwQkFBMEI7R0FDM0I7QUFFRDtJQUNFLDBCQUEwQjtHQUMzQjtBQUVEO0lBQ0UsMEJBQTBCO0dBQzNCO0FBRUQ7SUFDRSwwQkFBMEI7R0FDM0I7QUFFRDtJQUNFLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIscUNBQXFDO0dBQ3RDO0FBRUQ7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFVBQVU7R0FDWDtBQUNEO0lBQ0UsMEJBQTBCO0dBQzNCO0FBQ0Q7O0lBRUUsMEJBQTBCO0dBQzNCO0FBQ0Q7SUFDRSw4QkFBOEI7R0FDL0I7QUFFRDtJQUNFLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7SUFDWCx5QkFBeUI7SUFFekIsMEVBQTBFO0dBQzNFO0FBQ0Q7SUFDRSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLG9CQUFvQjtHQUNyQjtBQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7QUFDRDtJQUNFLDZCQUE2QjtJQUU3QixpQkFBaUI7SUFDakIsb0NBQW9DO0lBSXBDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFJNUIsb0JBQW9CO0lBS3BCLDZCQUE2QjtJQUM3QixrQkFBa0I7R0FDbkI7QUFDRDtJQUNFLGlCQUFpQjtHQUNsQjtBQUNEO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFLbkIsaUJBQWlCO0dBQ2xCO0FBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7QUFDRDtJQUNFLHNCQUFzQjtHQUN2QjtBQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0FBQ0Q7SUFDRSw0QkFBNEI7SUFDNUIsNkJBQTZCO0dBQzlCO0FBQ0Q7SUFDRSwrQkFBK0I7SUFDL0IsZ0NBQWdDO0dBQ2pDO0FBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsc0JBQXNCO0dBQ3ZCO0FBQ0Q7O0lBRUUsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsc0JBQXNCO0dBQ3ZCO0FBQ0Q7SUFDRSwwQkFBMEI7R0FDM0I7QUFDRDtJQUNFLDBCQUEwQjtHQUMzQjtBQUNEO0lBQ0UsMEJBQTBCO0dBQzNCO0FBQ0Q7SUFDRSwwQkFBMEI7R0FDM0I7QUFDRDtJQUNFLDBCQUEwQjtHQUMzQjtBQUVEO0lBQ0UsaUJBQWlCO0dBQ2xCO0FBRUQ7SUFDRSxrQkFBa0I7R0FDbkI7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQiwrQ0FBK0M7SUFDL0MsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFdBQVc7R0FDWjtBQUNEO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFFckMsNkJBQTZCO0dBQzlCO0FBQ0Q7SUFDRSxZQUFZO0dBQ2I7QUFDRDtJQUNFLDZCQUE2QjtHQUM5QjtBQUNEO0lBQ0UscUJBQXFCO0dBQ3RCO0FBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtHQUNoQjtBQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7R0FDWDtBQUNEOztJQUVFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtHQUNwQjtBQUNEOztJQUVFLGdCQUFnQjtHQUNqQjtBQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjtBQUNEO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7R0FDbEI7QUFDRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7R0FDbkI7QUFDRDtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7R0FDbkI7QUFDRDtJQUNFLGVBQWU7R0FDaEI7QUFDRDtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7QUFDRDtJQUNFLGVBQWU7SUFDZixpQkFBaUI7R0FDbEI7QUFDRDtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0dBQ3ZCO0FBQ0Q7SUFDRSxzQkFBc0I7R0FDdkI7QUFDRDtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0dBQzNCO0FBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7QUFDRDtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsT0FBTztJQUNQLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLG1CQUFtQjtHQUNwQjtBQUNEO0lBQ0Usb0JBQW9CO0lBQ3BCLGNBQWM7R0FDZjtBQUNEOztJQUVFLG1CQUFtQjtHQUNwQjtBQUNEOztJQUVFLG9CQUFvQjtHQUNyQjtBQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtHQUNwQjtBQUNEO0lBQ0UsbUJBQW1CO0dBQ3BCO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0dBQ2xCO0FBQ0Q7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0dBQ25CO0FBQ0Q7SUFDRSxVQUFVO0dBQ1g7QUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtBQUNEO0lBQ0UsaUNBQWlDO0dBQ2xDO0FBRUQ7SUFDRSwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7R0FDbEI7QUFDRDtJQUNFLFlBQVk7R0FDYjtBQUNEO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtHQUNuQjtBQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7R0FDbkI7QUFDRDtJQUNFLGVBQWU7R0FDaEI7QUFDRDtJQUNFLGVBQWU7R0FDaEI7QUFDRDtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7R0FDckI7QUFDRDtJQUNFLDBCQUEwQjtHQUMzQjtBQUNEO0lBQ0UsMEJBQTBCO0dBQzNCO0FBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0dBQ25CO0FBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7QUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtBQUNEO0lBQ0UsY0FBYztJQUNkLGFBQWE7R0FDZDtBQUVEO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtHQUNuQjtBQUNEO0lBQ0UsYUFBYTtHQUNkO0FBRUQ7O0lBRUUsdUJBQXVCO0dBQ3hCO0FBQ0Q7O0lBRUUsaUJBQWlCO0dBQ2xCO0FBRUQ7SUFDRSw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtHQUNsQjtBQUNEO0lBQ0UsbUJBQW1CO0dBQ3BCO0FBRUQ7SUFDRSx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixlQUFlO0dBQ2hCO0FBRUQ7O0lBRUUsZUFBZTtJQUtmLGNBQWM7R0FDZjtBQUVEO0lBSUUsc0JBQXNCO0lBSXRCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsbUJBQW1CO0dBQ3BCO0FBRUQ7SUFJRSx3QkFBd0I7SUFJeEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixtQkFBbUI7R0FDcEI7QUFFRDtJQUlFLHNCQUFzQjtJQUl0QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtHQUNsQjtBQUVEO0lBSUUsc0JBQXNCO0lBSXRCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsbUJBQW1CO0dBQ3BCO0FBRUQ7SUFJRSxzQkFBc0I7SUFJdEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixtQkFBbUI7R0FDcEI7QUFFRDtJQUlFLHdCQUF3QjtJQUl4Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtHQUNwQjtBQUVEO0lBSUUsc0JBQXNCO0lBSXRCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsbUJBQW1CO0dBQ3BCO0FBRUQ7SUFJRSx3QkFBd0I7SUFJeEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixtQkFBbUI7R0FDcEI7QUFFRDtJQUlFLG9CQUFvQjtJQUlwQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtHQUNsQjtBQUVEO0lBSUUsb0JBQW9CO0lBSXBCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUJBQWlCO0dBQ2xCO0FBRUQ7SUFDRSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtHQUN2QjtBQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjtHQUN2QjtBQUVEO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtHQUNuQjtBQUVEO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtHQUNuQjtBQUVEO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtHQUNwQjtBQUVEO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtHQUNwQjtBQUVEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0FBQ0Q7SUFDRSxjQUFjO0dBQ2Y7QUFFRDtJQUNFLGdCQUFnQjtHQUNqQjtBQUNEO0lBQ0UsY0FBYztHQUNmO0FBRUQ7SUFDRSxnQkFBZ0I7R0FDakI7QUFDRDtJQUNFLGNBQWM7R0FDZjtBQUVEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0FBQ0Q7SUFDRSxjQUFjO0dBQ2Y7QUFFRDtJQUNFLGdCQUFnQjtHQUNqQjtBQUNEO0lBQ0UsY0FBYztHQUNmO0FBRUQ7SUFDRSxpQ0FBaUM7R0FDbEM7QUFDRDtJQUNFLCtCQUErQjtHQUNoQztBQUVEO0lBQ0UsaUNBQWlDO0dBQ2xDO0FBQ0Q7SUFDRSwrQkFBK0I7R0FDaEM7QUFFRDtJQUNFLGdDQUFnQztHQUNqQztBQUNEO0lBQ0UsOEJBQThCO0dBQy9CO0FBRUQ7SUFDRSwrQkFBK0I7R0FDaEM7QUFDRDtJQUNFLDZCQUE2QjtHQUM5QjtBQUVEO0lBQ0UsaUNBQWlDO0dBQ2xDO0FBQ0Q7SUFDRSwrQkFBK0I7R0FDaEM7QUFFRDtJQUNFLGlDQUFpQztHQUNsQztBQUNEO0lBQ0UsK0JBQStCO0dBQ2hDO0FBRUQ7SUFDRSxpQ0FBaUM7R0FDbEM7QUFDRDtJQUNFLCtCQUErQjtHQUNoQztBQUVEO0lBQ0UsZ0NBQWdDO0dBQ2pDO0FBQ0Q7SUFDRSw4QkFBOEI7R0FDL0I7QUFFRDtJQUNFLCtCQUErQjtHQUNoQztBQUNEO0lBQ0UsNkJBQTZCO0dBQzlCO0FBRUQ7SUFDRSxpQ0FBaUM7R0FDbEM7QUFDRDtJQUNFLCtCQUErQjtHQUNoQztBQUVEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0dBQ2I7QUFDRDtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUJBQXFCO0dBQ3RCO0FBQ0Q7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtHQUNUO0FBRUQ7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7R0FDeEI7QUFDRDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0dBQ1Q7QUFFRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLDBCQUEwQjtHQUMzQjtBQUNEO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0dBQ2I7QUFDRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7R0FDVDtBQUVEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0dBQ2I7QUFDRDtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMEJBQTBCO0dBQzNCO0FBQ0Q7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtHQUNUO0FBRUQ7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixvQkFBb0I7R0FDckI7QUFDRDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0dBQ1Q7QUFFRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLG9CQUFvQjtHQUNyQjtBQUNEO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0dBQ2I7QUFDRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7R0FDVDtBQUVEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0dBQ2I7QUFDRDtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMEJBQTBCO0dBQzNCO0FBQ0Q7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtHQUNUO0FBRUQ7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7R0FDdkI7QUFDRDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0dBQ1Q7QUFFRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtHQUMxQjtBQUNEO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0dBQ2I7QUFDRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7R0FDVDtBQUVEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0dBQ2I7QUFDRDtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0JBQW9CO0dBQ3JCO0FBQ0Q7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtHQUNUO0FBRUQ7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7R0FDeEI7QUFDRDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0dBQ1Q7QUFFRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLDBCQUEwQjtHQUMzQjtBQUNEO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0dBQ2I7QUFDRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7R0FDVDtBQUVEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0dBQ2I7QUFDRDtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0JBQW9CO0dBQ3JCO0FBQ0Q7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtHQUNUO0FBRUQ7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixvQkFBb0I7R0FDckI7QUFDRDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0dBQ1Q7QUFFRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtHQUN2QjtBQUNEO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0dBQ2I7QUFDRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7R0FDVDtBQUVEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0dBQ2I7QUFDRDtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMEJBQTBCO0dBQzNCO0FBQ0Q7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtHQUNUO0FBRUQ7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixvQkFBb0I7R0FDckI7QUFDRDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0dBQ1Q7QUFFRDtJQUNFO01BQ0UsaUJBQWlCO0tBQ2xCOztJQUVEO01BQ0UsaUJBQWlCO01BQ2pCLG9CQUFvQjtNQUNwQixrQkFBa0I7TUFDbEIsbUJBQW1CO0tBQ3BCOztJQUVEO01BQ0UsY0FBYztLQUNmOztJQUVEOztNQUVFLGdEQUF3QztjQUF4Qyx3Q0FBd0M7TUFDeEMsMEdBQTBHO0tBQzNHOztJQUVEO01BQ0UsOENBQXNDO2NBQXRDLHNDQUFzQztLQUN2Qzs7SUFFRDtNQUNFLGtDQUFrQztNQUNsQyxvQ0FBb0M7TUFDcEMscUNBQXFDO01BQ3JDLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLFlBQVk7TUFDWixXQUFXO0tBQ1o7O0lBRUQ7TUFDRSxrQ0FBa0M7TUFDbEMsb0NBQW9DO01BQ3BDLHFDQUFxQztNQUNyQyxZQUFZO01BQ1osc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osV0FBVztLQUNaOztJQUVEO01BQ0UsWUFBWTtNQUNaLFdBQVc7S0FDWjs7SUFFRDtNQUNFLFlBQVk7TUFDWixXQUFXO0tBQ1o7O0lBRUQ7TUFDRSxrQkFBa0I7S0FDbkI7O0lBRUQ7TUFDRSxlQUFlO0tBQ2hCOztJQUVEO01BQ0UseUJBQXlCO0tBQzFCOztJQUVEO01BQ0UsYUFBYTtLQUNkO0lBQ0Q7TUFDRSxtQkFBbUI7S0FDcEI7SUFDRDtNQUNFLG9CQUFvQjtLQUNyQjtHQUNGO0FBQ0QsNkNBQTZDO0FBQzdDO0lBQ0U7TUFDRSxjQUFjO0tBQ2Y7O0lBRUQ7TUFDRSxZQUFZO0tBQ2I7O0lBRUQ7TUFDRSxrQkFBa0I7TUFDbEIsc0NBQXNDO0tBQ3ZDOztJQUVEO01BQ0UsbUJBQW1CO0tBQ3BCOztJQUVEO01BQ0UsZUFBZTtLQUNoQjs7SUFFRDtNQUNFLDBDQUEwQztNQUkxQyxrQ0FBa0M7TUFLbEMsNERBQTREO01BQzVELFFBQVE7TUFDUix3QkFBd0I7S0FDekI7O0lBRUQ7TUFDRSxRQUFRO01BQ1IsWUFBWTtNQUtaLDREQUE0RDtNQUM1RCxtQkFBbUI7S0FDcEI7O0lBRUQ7OztNQUdFLHlCQUF5QjtLQUMxQjs7SUFFRDtNQUNFLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsZUFBZTtLQUNoQjs7SUFFRDtNQUNFLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsT0FBTztNQUNQLGFBQWE7TUFDYixhQUFhO01BQ2IsU0FBUztNQUNULGNBQWM7TUFDZCxvQkFBb0I7TUFDcEIsdUJBQXVCO01BQ3ZCLG9CQUFvQjtNQUNwQixpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsNENBQTRDO01BSTVDLG9DQUFvQztNQUtwQyw0REFBNEQ7S0FDN0Q7SUFDRDtNQUNFLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsbUJBQW1CO01BQ25CLGFBQWE7TUFDYiwwQ0FBMEM7S0FDM0M7SUFDRDtNQUNFLGNBQWM7TUFDZCxxQkFBcUI7S0FDdEI7SUFDRDtNQUNFLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsMEJBQTBCO01BQzFCLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGdCQUFnQjtLQUNqQjtJQUNEO01BQ0UsZUFBZTtLQUNoQjtJQUNEOzs7TUFHRSxzQkFBc0I7S0FDdkI7SUFDRDtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsVUFBVTtLQUNYO0lBQ0Q7TUFDRSxnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGtCQUFrQjtLQUNuQjtJQUNEO01BQ0UsbUJBQW1CO01BQ25CLGdDQUFnQztNQUNoQyxtQ0FBbUM7TUFDbkMsc0NBQXNDO01BQ3RDLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsVUFBVTtNQUNWLFVBQVU7S0FDWDtJQUNEO01BQ0UsbUJBQW1CO01BQ25CLGdDQUFnQztNQUNoQyxtQ0FBbUM7TUFDbkMsc0NBQXNDO01BQ3RDLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLFVBQVU7S0FDWDtJQUNEO01BQ0UsT0FBTztNQUNQLFFBQVE7TUFDUixhQUFhO01BQ2IsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQiwwQkFBMEI7TUFDMUIseUhBQXlIO01BQ3pILGVBQWU7TUFDZixZQUFZO01BQ1osV0FBVztLQUNaO0lBQ0Q7TUFDRSxPQUFPO01BQ1AsUUFBUTtNQUNSLGFBQWE7TUFDYixZQUFZO01BQ1osbUJBQW1CO01BQ25CLHdDQUF3QztNQUN4QyxlQUFlO01BQ2YsWUFBWTtNQUNaLFdBQVc7S0FDWjtJQUNEO01BQ0UsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIscUJBQXFCO0tBQ3RCO0lBQ0Q7TUFDRSxZQUFZO01BQ1osZUFBZTtLQUNoQjs7SUFFRDtNQUNFLDBDQUEwQztNQUkxQyxrQ0FBa0M7S0FDbkM7O0lBRUQ7TUFDRSxhQUFhO0tBQ2Q7O0lBRUQ7TUFDRSxRQUFRO01BQ1IsNkNBQTZDO01BSTdDLHFDQUFxQztLQUN0Qzs7SUFFRDtNQUNFLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixZQUFZO01BQ1osbUJBQW1CO01BQ25CLGVBQWU7S0FDaEI7O0lBRUQ7TUFDRSx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLGFBQWE7S0FDZDs7SUFFRDs7O01BR0UsK0JBQStCO0tBQ2hDOztJQUVEO01BQ0UsU0FBUztNQUNULCtDQUErQztNQUUvQyxnQ0FBZ0M7TUFDaEMsc0NBQXNDO01BRXRDLDhCQUE4QjtLQUMvQjs7SUFFRDtNQUNFLFdBQVc7S0FDWjs7SUFFRDtNQUNFLFlBQVk7TUFDWixrREFBa0Q7TUFFbEQsbUNBQW1DO01BQ25DLHNDQUFzQztNQUV0Qyw4QkFBOEI7S0FDL0I7O0lBRUQ7TUFDRSxTQUFTO01BQ1QsNENBQTRDO01BRTVDLDZCQUE2QjtNQUM3QixzQ0FBc0M7TUFFdEMsOEJBQThCO0tBQy9COztJQUVEO01BQ0UsV0FBVztLQUNaOztJQUVEO01BQ0UsWUFBWTtNQUNaLCtDQUErQztNQUUvQyxnQ0FBZ0M7TUFDaEMsc0NBQXNDO01BRXRDLDhCQUE4QjtLQUMvQjs7SUFFRDtNQUNFO1FBQ0UsU0FBUztRQUNULGdDQUF3QjtnQkFBeEIsd0JBQXdCO09BQ3pCO01BQ0Q7UUFDRSxTQUFTO1FBQ1Qsa0NBQTBCO2dCQUExQiwwQkFBMEI7T0FDM0I7TUFDRDtRQUNFLGtDQUEwQjtnQkFBMUIsMEJBQTBCO09BQzNCO01BQ0Q7UUFDRSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtPQUMzQjtLQUNGO0lBQ0Q7TUFDRTtRQUNFLFNBQVM7UUFDVCxnQ0FBZ0M7T0FDakM7TUFDRDtRQUNFLFNBQVM7UUFDVCxrQ0FBa0M7T0FDbkM7TUFDRDtRQUNFLGtDQUFrQztPQUNuQztNQUNEO1FBQ0Usa0NBQWtDO09BQ25DO0tBQ0Y7SUFpQkQ7TUFDRTtRQUNFLFNBQVM7UUFDVCxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtPQUMzQjtNQUNEO1FBQ0Usa0NBQTBCO2dCQUExQiwwQkFBMEI7T0FDM0I7TUFDRDtRQUNFLGdDQUF3QjtnQkFBeEIsd0JBQXdCO09BQ3pCO01BQ0Q7UUFDRSxTQUFTO1FBQ1QsNkJBQXFCO2dCQUFyQixxQkFBcUI7T0FDdEI7S0FDRjtJQUNEO01BQ0U7UUFDRSxTQUFTO1FBQ1Qsa0NBQWtDO09BQ25DO01BQ0Q7UUFDRSxrQ0FBa0M7T0FDbkM7TUFDRDtRQUNFLGdDQUFnQztPQUNqQztNQUNEO1FBQ0UsU0FBUztRQUNULDZCQUE2QjtPQUM5QjtLQUNGO0lBaUJEO01BQ0U7UUFDRSxZQUFZO1FBQ1osZ0NBQXdCO2dCQUF4Qix3QkFBd0I7T0FDekI7TUFDRDtRQUNFLFlBQVk7UUFDWixtQ0FBMkI7Z0JBQTNCLDJCQUEyQjtPQUM1QjtNQUNEO1FBQ0UsbUNBQTJCO2dCQUEzQiwyQkFBMkI7T0FDNUI7TUFDRDtRQUNFLG1DQUEyQjtnQkFBM0IsMkJBQTJCO09BQzVCO0tBQ0Y7SUFDRDtNQUNFO1FBQ0UsWUFBWTtRQUNaLGdDQUFnQztPQUNqQztNQUNEO1FBQ0UsWUFBWTtRQUNaLG1DQUFtQztPQUNwQztNQUNEO1FBQ0UsbUNBQW1DO09BQ3BDO01BQ0Q7UUFDRSxtQ0FBbUM7T0FDcEM7S0FDRjtJQWlCRDtNQUNFO1FBQ0UsWUFBWTtRQUNaLG1DQUEyQjtnQkFBM0IsMkJBQTJCO09BQzVCO01BQ0Q7UUFDRSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtPQUMxQjtNQUNEO1FBQ0UsaUNBQXlCO2dCQUF6Qix5QkFBeUI7T0FDMUI7TUFDRDtRQUNFLFlBQVk7UUFDWiw2QkFBcUI7Z0JBQXJCLHFCQUFxQjtPQUN0QjtLQUNGO0lBQ0Q7TUFDRTtRQUNFLFlBQVk7UUFDWixtQ0FBbUM7T0FDcEM7TUFDRDtRQUNFLGlDQUFpQztPQUNsQztNQUNEO1FBQ0UsaUNBQWlDO09BQ2xDO01BQ0Q7UUFDRSxZQUFZO1FBQ1osNkJBQTZCO09BQzlCO0tBQ0Y7SUFpQkQ7TUFDRTtRQUNFLFdBQVc7T0FDWjtNQUNEO1FBQ0UsV0FBVztPQUNaO0tBQ0Y7SUFTRDtNQUNFO1FBQ0UsV0FBVztPQUNaO01BQ0Q7UUFDRSxXQUFXO09BQ1o7S0FDRjtJQUNEO01BQ0UsNENBQTRDO0tBQzdDOztJQUVEO01BQ0UsY0FBYztLQUNmOztJQUVEO01BQ0UsY0FBYztLQUNmO0lBQ0Q7TUFDRSw4QkFBOEI7S0FDL0I7O0lBRUQ7TUFDRSxvQ0FBb0M7S0FDckM7O0lBRUQ7TUFDRSxhQUFhO01BQ2IsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsT0FBTztNQUNQLFdBQVc7TUFDWCxhQUFhO01BQ2IsWUFBWTtNQUNaLGNBQWM7TUFDZCxtQkFBbUI7S0FDcEI7O0lBRUQ7TUFDRSxpQkFBaUI7S0FDbEI7O0lBRUQ7TUFDRSx5Q0FBeUM7S0FDMUM7O0lBRUQ7TUFDRSxpQkFBaUI7S0FDbEI7O0lBRUQ7TUFDRSxXQUFXO01BQ1gsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixvQkFBb0I7S0FDckI7O0lBRUQ7TUFDRSxZQUFZO0tBQ2I7O0lBRUQ7TUFDRSx3QkFBd0I7S0FDekI7O0lBRUQ7TUFDRSxlQUFlO0tBQ2hCOztJQUVEO01BQ0UsMEJBQTBCO0tBQzNCOztJQUVEO01BQ0UsWUFBWTtLQUNiOztJQUVEO01BQ0UsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixZQUFZO01BQ1osY0FBYztNQUNkLDhCQUE4QjtNQUM5QixVQUFVO01BRVYsaUJBQWlCO0tBQ2xCOztJQUVEO01BQ0UsZ0JBQWdCO01BQ2hCLGlCQUFpQjtLQUNsQjs7SUFFRDtNQUNFLDhCQUE4QjtLQUMvQjs7SUFFRDtNQUNFLGtCQUFrQjtNQUNsQixZQUFZO0tBQ2I7R0FDRjtBQUNEO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsb0JBQW9CO0tBQ3JCOztJQUVEO01BQ0Usa0JBQWtCO0tBQ25CO0dBQ0Y7QUFDRDtJQUNFO01BQ0UsWUFBWTtNQUNaLG9CQUFvQjtNQUNwQiwwQkFBMEI7TUFDMUIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQiw2Q0FBNkM7TUFDN0Msa0NBQWtDO0tBQ25DO0dBQ0Y7QUFHRCw2Q0FBNkM7QUFDN0M7SUFDRSw4QkFBOEI7SUFDOUIsOEJBQThCO0NBQ2pDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICAgICAgbGlnaHQgY29sb3JzIC0gdXNlZCBmb3Igc2VsZWN0IGRyb3Bkb3duICAgICAgICAgKi9cclxuLmN0LWJsdWUge1xyXG4gICAgc3Ryb2tlOiAjN0E5RTlGICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1henVyZSB7XHJcbiAgICBzdHJva2U6ICM2OEIzQzggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmN0LWdyZWVuIHtcclxuICAgIHN0cm9rZTogIzdBQzI5QSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3Qtb3JhbmdlIHtcclxuICAgIHN0cm9rZTogI0YzQkI0NSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3QtcmVkIHtcclxuICAgIHN0cm9rZTogI0VCNUUyOCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBoMSwgLmgxLCBoMiwgLmgyLCBoMywgLmgzLCBoNCwgLmg0LCBoNSwgLmg1LCBoNiwgLmg2LCBwLCAubmF2YmFyLCAuYnJhbmQsIGEsIC50ZC1uYW1lLCB0ZCB7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICBmb250LWZhbWlseTogJ011bGknLCBcIkhlbHZldGljYVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgaDEsIC5oMSwgaDIsIC5oMiwgaDMsIC5oMywgaDQsIC5oNCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgMTVweDtcclxuICB9XHJcbiAgXHJcbiAgaDEsIC5oMSB7XHJcbiAgICBmb250LXNpemU6IDMuMmVtO1xyXG4gIH1cclxuICBcclxuICBoMiwgLmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMi42ZW07XHJcbiAgfVxyXG4gIFxyXG4gIGgzLCAuaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjgyNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIG1hcmdpbjogMjBweCAwIDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGg0LCAuaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgfVxyXG4gIFxyXG4gIGg1LCAuaDUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgaDYsIC5oNiB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gIH1cclxuICBcclxuICBoMSBzbWFsbCwgaDIgc21hbGwsIGgzIHNtYWxsLCBoNCBzbWFsbCwgaDUgc21hbGwsIGg2IHNtYWxsLCAuaDEgc21hbGwsIC5oMiBzbWFsbCwgLmgzIHNtYWxsLCAuaDQgc21hbGwsIC5oNSBzbWFsbCwgLmg2IHNtYWxsLCBoMSAuc21hbGwsIGgyIC5zbWFsbCwgaDMgLnNtYWxsLCBoNCAuc21hbGwsIGg1IC5zbWFsbCwgaDYgLnNtYWxsLCAuaDEgLnNtYWxsLCAuaDIgLnNtYWxsLCAuaDMgLnNtYWxsLCAuaDQgLnNtYWxsLCAuaDUgLnNtYWxsLCAuaDYgLnNtYWxsIHtcclxuICAgIGNvbG9yOiAjOUE5QTlBO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICB9XHJcbiAgXHJcbiAgaDEgc21hbGwsIGgyIHNtYWxsLCBoMyBzbWFsbCwgaDEgLnNtYWxsLCBoMiAuc21hbGwsIGgzIC5zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDYwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLXVwcGVyY2FzZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICBibG9ja3F1b3RlIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbiAgXHJcbiAgYmxvY2txdW90ZSBzbWFsbCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LW11dGVkIHtcclxuICAgIGNvbG9yOiAjREREREREO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1wcmltYXJ5LCAudGV4dC1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNDI3Qzg5O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbmZvLCAudGV4dC1pbmZvOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzA5MUIyO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1zdWNjZXNzLCAudGV4dC1zdWNjZXNzOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNDJBMDg0O1xyXG4gIH1cclxuICBcclxuICAudGV4dC13YXJuaW5nLCAudGV4dC13YXJuaW5nOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjQkI5OTJGO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1kYW5nZXIsIC50ZXh0LWRhbmdlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogI0IzM0MxMjtcclxuICB9XHJcbiAgXHJcbiAgLmdseXBoaWNvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbiAgXHJcbiAgc3Ryb25nIHtcclxuICAgIGNvbG9yOiAjNDAzRDM5O1xyXG4gIH1cclxuICBcclxuICAuaWNvbi1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjN0E5RTlGO1xyXG4gIH1cclxuICBcclxuICAuaWNvbi1pbmZvIHtcclxuICAgIGNvbG9yOiAjNjhCM0M4O1xyXG4gIH1cclxuICBcclxuICAuaWNvbi1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjN0FDMjlBO1xyXG4gIH1cclxuICBcclxuICAuaWNvbi13YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjRjNCQjQ1O1xyXG4gIH1cclxuICBcclxuICAuaWNvbi1kYW5nZXIge1xyXG4gICAgY29sb3I6ICNFQjVFMjg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFydC1sZWdlbmQgLnRleHQtcHJpbWFyeSwgLmNoYXJ0LWxlZ2VuZCAudGV4dC1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjN0E5RTlGO1xyXG4gIH1cclxuICAuY2hhcnQtbGVnZW5kIC50ZXh0LWluZm8sIC5jaGFydC1sZWdlbmQgLnRleHQtaW5mbzpob3ZlciB7XHJcbiAgICBjb2xvcjogIzY4QjNDODtcclxuICB9XHJcbiAgLmNoYXJ0LWxlZ2VuZCAudGV4dC1zdWNjZXNzLCAuY2hhcnQtbGVnZW5kIC50ZXh0LXN1Y2Nlc3M6aG92ZXIge1xyXG4gICAgY29sb3I6ICM3QUMyOUE7XHJcbiAgfVxyXG4gIC5jaGFydC1sZWdlbmQgLnRleHQtd2FybmluZywgLmNoYXJ0LWxlZ2VuZCAudGV4dC13YXJuaW5nOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjRjNCQjQ1O1xyXG4gIH1cclxuICAuY2hhcnQtbGVnZW5kIC50ZXh0LWRhbmdlciwgLmNoYXJ0LWxlZ2VuZCAudGV4dC1kYW5nZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICNFQjVFMjg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qICAgICBHZW5lcmFsIG92ZXJ3cml0ZSAgICAgKi9cclxuICBib2R5IHtcclxuICAgIGNvbG9yOiAjNjY2MTViO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNdWxpJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIGJvZHkgLndyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM2OEIzQzg7XHJcbiAgfVxyXG4gIGE6aG92ZXIsIGE6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMzMDkxQjI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGE6Zm9jdXMsIGE6YWN0aXZlLFxyXG4gIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcclxuICBpbnB1dDo6LW1vei1mb2N1cy1pbm5lcixcclxuICBzZWxlY3Q6Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0gPiBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyIHtcclxuICAgIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnVpLXNsaWRlci1oYW5kbGU6Zm9jdXMsXHJcbiAgLm5hdmJhci10b2dnbGUsXHJcbiAgaW5wdXQ6Zm9jdXMsXHJcbiAgYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogICAgICAgICAgIEFuaW1hdGlvbnMgICAgICAgICAgICAgICovXHJcbiAgLmZvcm0tY29udHJvbCxcclxuICAuaW5wdXQtZ3JvdXAtYWRkb24sXHJcbiAgLnRhZ3NpbnB1dCxcclxuICAubmF2YmFyLFxyXG4gIC5uYXZiYXIgLmFsZXJ0IHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYgYSxcclxuICAudGFibGUgPiB0Ym9keSA+IHRyIC50ZC1hY3Rpb25zIC5idG4ge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW47XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbjtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluO1xyXG4gIH1cclxuICBcclxuICAuYnRuIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcclxuICB9XHJcbiAgXHJcbiAgLmZhIHtcclxuICAgIHdpZHRoOiAyMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZmEtYmFzZSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubWFyZ2luLXRvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICBociB7XHJcbiAgICBib3JkZXItY29sb3I6ICNGMUVBRTA7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDBweCAwcHggMHB4ICNEREREREQ7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXIge1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gIH1cclxuICAuc2lkZWJhciAubG9nbyxcclxuICAub2ZmLWNhbnZhcy1zaWRlYmFyIC5sb2dvIHtcclxuICAgIHBhZGRpbmc6IDE4cHggMHB4O1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5sb2dvIHAsXHJcbiAgLm9mZi1jYW52YXMtc2lkZWJhciAubG9nbyBwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgLnNpZGViYXIgLmxvZ28gLnNpbXBsZS10ZXh0LFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXIgLmxvZ28gLnNpbXBsZS10ZXh0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYsXHJcbiAgLm9mZi1jYW52YXMtc2lkZWJhciAubmF2IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYgbGkgPiBhLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXIgLm5hdiBsaSA+IGEge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICB9XHJcbiAgLnNpZGViYXIgLm5hdiBsaTpob3ZlciA+IGEsXHJcbiAgLm9mZi1jYW52YXMtc2lkZWJhciAubmF2IGxpOmhvdmVyID4gYSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuc2lkZWJhciAubmF2IGxpLmFjdGl2ZSA+IGEsXHJcbiAgLm9mZi1jYW52YXMtc2lkZWJhciAubmF2IGxpLmFjdGl2ZSA+IGEge1xyXG4gICAgY29sb3I6ICM3QTlFOUY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuc2lkZWJhciAubmF2IGxpLmFjdGl2ZSA+IGE6YmVmb3JlLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXIgLm5hdiBsaS5hY3RpdmUgPiBhOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDE3cHggc29saWQgI0RERERERDtcclxuICAgIGJvcmRlci10b3A6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYgbGkuYWN0aXZlID4gYTphZnRlcixcclxuICAub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXYgbGkuYWN0aXZlID4gYTphZnRlciB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDE3cHggc29saWQgI2Y0ZjNlZjtcclxuICAgIGJvcmRlci10b3A6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYgcCxcclxuICAub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXYgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAuc2lkZWJhciAubmF2IGksXHJcbiAgLm9mZi1jYW52YXMtc2lkZWJhciAubmF2IGkge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDoxNnB4O1xyXG4gIH1cclxuICAuc2lkZWJhcjphZnRlciwgLnNpZGViYXI6YmVmb3JlLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXI6YWZ0ZXIsXHJcbiAgLm9mZi1jYW52YXMtc2lkZWJhcjpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5zaWRlYmFyOmFmdGVyLCAuc2lkZWJhcjpiZWZvcmUsIC5zaWRlYmFyW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cIndoaXRlXCJdOmFmdGVyLCAuc2lkZWJhcltkYXRhLWJhY2tncm91bmQtY29sb3I9XCJ3aGl0ZVwiXTpiZWZvcmUsXHJcbiAgLm9mZi1jYW52YXMtc2lkZWJhcjphZnRlcixcclxuICAub2ZmLWNhbnZhcy1zaWRlYmFyOmJlZm9yZSxcclxuICAub2ZmLWNhbnZhcy1zaWRlYmFyW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cIndoaXRlXCJdOmFmdGVyLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwid2hpdGVcIl06YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5sb2dvLCAuc2lkZWJhcltkYXRhLWJhY2tncm91bmQtY29sb3I9XCJ3aGl0ZVwiXSAubG9nbyxcclxuICAub2ZmLWNhbnZhcy1zaWRlYmFyIC5sb2dvLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwid2hpdGVcIl0gLmxvZ28ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTAyLCA5NywgOTEsIDAuMyk7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5sb2dvIHAsIC5zaWRlYmFyW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cIndoaXRlXCJdIC5sb2dvIHAsXHJcbiAgLm9mZi1jYW52YXMtc2lkZWJhciAubG9nbyBwLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwid2hpdGVcIl0gLmxvZ28gcCB7XHJcbiAgICBjb2xvcjogIzY2NjE1QjtcclxuICB9XHJcbiAgLnNpZGViYXIgLmxvZ28gLnNpbXBsZS10ZXh0LCAuc2lkZWJhcltkYXRhLWJhY2tncm91bmQtY29sb3I9XCJ3aGl0ZVwiXSAubG9nbyAuc2ltcGxlLXRleHQsXHJcbiAgLm9mZi1jYW52YXMtc2lkZWJhciAubG9nbyAuc2ltcGxlLXRleHQsXHJcbiAgLm9mZi1jYW52YXMtc2lkZWJhcltkYXRhLWJhY2tncm91bmQtY29sb3I9XCJ3aGl0ZVwiXSAubG9nbyAuc2ltcGxlLXRleHQge1xyXG4gICAgY29sb3I6ICM2NjYxNUI7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYgbGk6bm90KC5hY3RpdmUpID4gYSwgLnNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwid2hpdGVcIl0gLm5hdiBsaTpub3QoLmFjdGl2ZSkgPiBhLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXIgLm5hdiBsaTpub3QoLmFjdGl2ZSkgPiBhLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwid2hpdGVcIl0gLm5hdiBsaTpub3QoLmFjdGl2ZSkgPiBhIHtcclxuICAgIGNvbG9yOiAjNjY2MTVCO1xyXG4gIH1cclxuICAuc2lkZWJhciAubmF2IC5kaXZpZGVyLCAuc2lkZWJhcltkYXRhLWJhY2tncm91bmQtY29sb3I9XCJ3aGl0ZVwiXSAubmF2IC5kaXZpZGVyLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXIgLm5hdiAuZGl2aWRlcixcclxuICAub2ZmLWNhbnZhcy1zaWRlYmFyW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cIndoaXRlXCJdIC5uYXYgLmRpdmlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDk3LCA5MSwgMC4yKTtcclxuICB9XHJcbiAgLnNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwiYmxhY2tcIl06YWZ0ZXIsIC5zaWRlYmFyW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cImJsYWNrXCJdOmJlZm9yZSxcclxuICAub2ZmLWNhbnZhcy1zaWRlYmFyW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cImJsYWNrXCJdOmFmdGVyLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwiYmxhY2tcIl06YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjA7XHJcbiAgfVxyXG4gIC5zaWRlYmFyW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cImJsYWNrXCJdIC5sb2dvLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwiYmxhY2tcIl0gLmxvZ28ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICB9XHJcbiAgLnNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwiYmxhY2tcIl0gLmxvZ28gcCxcclxuICAub2ZmLWNhbnZhcy1zaWRlYmFyW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cImJsYWNrXCJdIC5sb2dvIHAge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5zaWRlYmFyW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cImJsYWNrXCJdIC5sb2dvIC5zaW1wbGUtdGV4dCxcclxuICAub2ZmLWNhbnZhcy1zaWRlYmFyW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cImJsYWNrXCJdIC5sb2dvIC5zaW1wbGUtdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcbiAgLnNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwiYmxhY2tcIl0gLm5hdiBsaTpub3QoLmFjdGl2ZSkgPiBhLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwiYmxhY2tcIl0gLm5hdiBsaTpub3QoLmFjdGl2ZSkgPiBhIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuICAuc2lkZWJhcltkYXRhLWJhY2tncm91bmQtY29sb3I9XCJibGFja1wiXSAubmF2IC5kaXZpZGVyLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwiYmxhY2tcIl0gLm5hdiAuZGl2aWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgfVxyXG4gIC5zaWRlYmFyW2RhdGEtYWN0aXZlLWNvbG9yPVwicHJpbWFyeVwiXSAubmF2IGxpLmFjdGl2ZSA+IGEsXHJcbiAgLm9mZi1jYW52YXMtc2lkZWJhcltkYXRhLWFjdGl2ZS1jb2xvcj1cInByaW1hcnlcIl0gLm5hdiBsaS5hY3RpdmUgPiBhIHtcclxuICAgIGNvbG9yOiAjN0E5RTlGO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLnNpZGViYXJbZGF0YS1hY3RpdmUtY29sb3I9XCJpbmZvXCJdIC5uYXYgbGkuYWN0aXZlID4gYSxcclxuICAub2ZmLWNhbnZhcy1zaWRlYmFyW2RhdGEtYWN0aXZlLWNvbG9yPVwiaW5mb1wiXSAubmF2IGxpLmFjdGl2ZSA+IGEge1xyXG4gICAgY29sb3I6ICM2OEIzQzg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuc2lkZWJhcltkYXRhLWFjdGl2ZS1jb2xvcj1cInN1Y2Nlc3NcIl0gLm5hdiBsaS5hY3RpdmUgPiBhLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXJbZGF0YS1hY3RpdmUtY29sb3I9XCJzdWNjZXNzXCJdIC5uYXYgbGkuYWN0aXZlID4gYSB7XHJcbiAgICBjb2xvcjogIzdBQzI5QTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC5zaWRlYmFyW2RhdGEtYWN0aXZlLWNvbG9yPVwid2FybmluZ1wiXSAubmF2IGxpLmFjdGl2ZSA+IGEsXHJcbiAgLm9mZi1jYW52YXMtc2lkZWJhcltkYXRhLWFjdGl2ZS1jb2xvcj1cIndhcm5pbmdcIl0gLm5hdiBsaS5hY3RpdmUgPiBhIHtcclxuICAgIGNvbG9yOiAjRjNCQjQ1O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLnNpZGViYXJbZGF0YS1hY3RpdmUtY29sb3I9XCJkYW5nZXJcIl0gLm5hdiBsaS5hY3RpdmUgPiBhLFxyXG4gIC5vZmYtY2FudmFzLXNpZGViYXJbZGF0YS1hY3RpdmUtY29sb3I9XCJkYW5nZXJcIl0gLm5hdiBsaS5hY3RpdmUgPiBhIHtcclxuICAgIGNvbG9yOiAjRUI1RTI4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4tcGFuZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjNlZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLm1haW4tcGFuZWwgPiAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjNweCk7XHJcbiAgfVxyXG4gIC5tYWluLXBhbmVsID4gLmZvb3RlciB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAubWFpbi1wYW5lbCAubmF2YmFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFye1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLGJvdHRvbTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCxib3R0b207XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4ycywuMnM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnMsLjJzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyLGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIsbGluZWFyO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIH1cclxuICBcclxuICBcclxuICAubWFpbi1wYW5lbCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCxib3R0b207XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsYm90dG9tO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnMsLjJzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzLC4ycztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcixsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyLGxpbmVhcjtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bixcclxuICAubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogN3B4IDE4cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NjYxNUI7XHJcbiAgICBjb2xvcjogIzY2NjE1QjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGxpbmVhcjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXI7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXI7XHJcbiAgfVxyXG4gIC5uYXYgPiBsaSA+IGE6aG92ZXIsXHJcbiAgLm5hdiA+IGxpID4gYTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhciB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgei1pbmRleDogMztcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhIGksXHJcbiAgLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYSBwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYSBpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0biB7XHJcbiAgICBtYXJnaW46IDE1cHggM3B4O1xyXG4gICAgcGFkZGluZzogN3B4IDE4cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLmJ0biB7XHJcbiAgICBtYXJnaW46IDE1cHggM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5idG4tc2ltcGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXItZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmM2VmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREREREQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAuYnJhbmQge1xyXG4gICAgY29sb3I6ICM2NjYxNWIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiBhOm5vdCguYnRuKSB7XHJcbiAgICBjb2xvcjogIzlBOUE5QTtcclxuICB9XHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGEsXHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6bm90KC5idG4pOmhvdmVyLFxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOm5vdCguYnRuKTpmb2N1cyxcclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGE6bm90KC5idG4pOmhvdmVyLFxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpub3QoLmJ0bik6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjb2xvcjogIzY4QjNDODtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcclxuICB9XHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmRyb3Bkb3duID4gYTpob3ZlciAuY2FyZXQsXHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmRyb3Bkb3duID4gYTpmb2N1cyAuY2FyZXQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzY4QjNDODtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICM2OEIzQzg7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYSxcclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGE6aG92ZXIsXHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM2OEIzQzg7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAubmF2YmFyLXRvZ2dsZTpob3ZlciwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5uYXZiYXItdG9nZ2xlOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQ6bm90KC5uYXZiYXItdHJhbnNwYXJlbnQpIC5idG4tZGVmYXVsdDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzY4QjNDODtcclxuICAgIGJvcmRlci1jb2xvcjogIzY4QjNDODtcclxuICB9XHJcbiAgLm5hdmJhci1kZWZhdWx0Om5vdCgubmF2YmFyLXRyYW5zcGFyZW50KSAuYnRuLW5ldXRyYWwsIC5uYXZiYXItZGVmYXVsdDpub3QoLm5hdmJhci10cmFuc3BhcmVudCkgLmJ0bi1uZXV0cmFsOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQ6bm90KC5uYXZiYXItdHJhbnNwYXJlbnQpIC5idG4tbmV1dHJhbDphY3RpdmUge1xyXG4gICAgY29sb3I6ICM5QTlBOUE7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXItZm9ybSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAubmF2YmFyLWZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gICAgY29sb3I6ICNFM0UzRTM7XHJcbiAgfVxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLm5hdmJhci1mb3JtIC5mb3JtLWNvbnRyb2wsIFtjbGFzcyo9XCJuYXZiYXItY3RcIl0gLm5hdmJhci1mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLWN0LXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhFQ0ZENTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1jdC1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Q0U0RkU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXItY3Qtc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVGM0M1O1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLWN0LXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTI4QztcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1jdC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOEY1RTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci10cmFuc3BhcmVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTlweDtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgLm5hdmJhci10b2dnbGUgLmljb24tYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5uYXZiYXItdG9nZ2xlIC5uYXZiYXItY29sbGFwc2UsXHJcbiAgLm5hdmJhci10b2dnbGUgLm5hdmJhci1mb3JtIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItdG9nZ2xlLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlOmhvdmVyLCAubmF2YmFyLXRvZ2dsZS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkNGNTtcclxuICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgei1pbmRleDogOTAwMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IHJnYmEoMTcsIDE2LCAxNSwgMC4xKSwgMCAycHggMTBweCByZ2JhKDE3LCAxNiwgMTUsIDAuMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCByZ2JhKDE3LCAxNiwgMTUsIDAuMSksIDAgMnB4IDEwcHggcmdiYSgxNywgMTYsIDE1LCAwLjEpO1xyXG4gIH1cclxuICAub3BlbiAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICAuZHJvcGRvd24tbWVudSAuZGl2aWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFFQUUwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1oZWFkZXIge1xyXG4gICAgY29sb3I6ICM5QTlBOUE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgfVxyXG4gIC5zZWxlY3QgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAtNDBweDtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIC00MHB4O1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogNTAlIC00MHB4O1xyXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSAtNDBweDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAtNDBweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMTUwbXMgbGluZWFyO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgbGluZWFyO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgfVxyXG4gIC5zZWxlY3Qub3BlbiAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIH1cclxuICAuZHJvcGRvd24tbWVudSA+IGxpID4gYSB7XHJcbiAgICBjb2xvcjogIzY2NjE1YjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIC1vLXRyYW5zaXRpb246IG5vbmU7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gIH1cclxuICAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG4tZ3JvdXAuc2VsZWN0IC5kcm9wZG93bi1tZW51IHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmRyb3Bkb3duLW1lbnUgPiBsaTpmaXJzdC1jaGlsZCA+IGEge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcclxuICB9XHJcbiAgLmRyb3Bkb3duLW1lbnUgPiBsaTpsYXN0LWNoaWxkID4gYSB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xyXG4gIH1cclxuICAuc2VsZWN0IC5kcm9wZG93bi1tZW51ID4gbGk6Zmlyc3QtY2hpbGQgPiBhIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAwIG5vbmU7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyLFxyXG4gIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjYxNUI7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tcHJpbWFyeSA+IGxpID4gYTpob3ZlciwgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tcHJpbWFyeSA+IGxpID4gYTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0E5RTlGO1xyXG4gIH1cclxuICAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1pbmZvID4gbGkgPiBhOmhvdmVyLCAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1pbmZvID4gbGkgPiBhOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OEIzQzg7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLXN1Y2Nlc3MgPiBsaSA+IGE6aG92ZXIsIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLXN1Y2Nlc3MgPiBsaSA+IGE6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdBQzI5QTtcclxuICB9XHJcbiAgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24td2FybmluZyA+IGxpID4gYTpob3ZlciwgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24td2FybmluZyA+IGxpID4gYTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNCQjQ1O1xyXG4gIH1cclxuICAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1kYW5nZXIgPiBsaSA+IGE6aG92ZXIsIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWRhbmdlciA+IGxpID4gYTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUI1RTI4O1xyXG4gIH1cclxuICBcclxuICAuYnRuLWdyb3VwLnNlbGVjdCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWdyb3VwLnNlbGVjdC5vcGVuIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgyMDQsIDE5NywgMTg1LCAwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGNvbG9yOiAjMjUyNDIyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5jYXJkIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIH1cclxuICAuY2FyZCAuaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY2FyZCAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweCAxNXB4O1xyXG4gIH1cclxuICAuY2FyZCAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAwO1xyXG4gIH1cclxuICAuY2FyZCAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2NjYxNWI7XHJcbiAgfVxyXG4gIC5jYXJkIGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLmNhcmQgLmNhdGVnb3J5LFxyXG4gIC5jYXJkIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzlBOUE5QTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgLmNhcmQgLmNhdGVnb3J5IGksXHJcbiAgLmNhcmQgbGFiZWwgaSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5jYXJkIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLmNhcmQgLnRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjMjUyNDIyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgLmNhcmQgLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmNhcmQgLmZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5jYXJkIC5mb290ZXIgLmxlZ2VuZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICB9XHJcbiAgLmNhcmQgLmZvb3RlciBociB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5jYXJkIC5zdGF0cyB7XHJcbiAgICBjb2xvcjogI2E5YTlhOTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5jYXJkIC5zdGF0cyBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgbWluLXdpZHRoOiAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAuY2FyZCAuZm9vdGVyIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5jYXJkIC5hdXRob3Ige1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5jYXJkIC5hdXRob3IgaSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5jYXJkLmNhcmQtc2VwYXJhdG9yOmFmdGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHJpZ2h0OiAtMTVweDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgLmNhcmQgLmN0LWNoYXJ0IHtcclxuICAgIG1hcmdpbjogMzBweCAwIDMwcHg7XHJcbiAgICBoZWlnaHQ6IDI0NXB4O1xyXG4gIH1cclxuICAuY2FyZCAudGFibGUgdGJvZHkgdGQ6Zmlyc3QtY2hpbGQsXHJcbiAgLmNhcmQgLnRhYmxlIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB9XHJcbiAgLmNhcmQgLnRhYmxlIHRib2R5IHRkOmxhc3QtY2hpbGQsXHJcbiAgLmNhcmQgLnRhYmxlIHRoZWFkIHRoOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgLmNhcmQgLmFsZXJ0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmNhcmQgLmFsZXJ0LmFsZXJ0LXdpdGgtaWNvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XHJcbiAgfVxyXG4gIC5jYXJkIC5pY29uLWJpZyB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgfVxyXG4gIC5jYXJkIC5udW1iZXJzIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5jYXJkIC5udW1iZXJzIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAuY2FyZCB1bC50ZWFtLW1lbWJlcnMgbGkge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgfVxyXG4gIC5jYXJkIHVsLnRlYW0tbWVtYmVycyBsaTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjFFQUUwO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC11c2VyIC5pbWFnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuY2FyZC11c2VyIC5pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jYXJkLXVzZXIgLmltYWdlLXBsYWluIHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDExMHB4O1xyXG4gIH1cclxuICAuY2FyZC11c2VyIC5hdXRob3Ige1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjVweDtcclxuICB9XHJcbiAgLmNhcmQtdXNlciAuYXV0aG9yIC50aXRsZSB7XHJcbiAgICBjb2xvcjogIzQwM0QzOTtcclxuICB9XHJcbiAgLmNhcmQtdXNlciAuYXV0aG9yIC50aXRsZSBzbWFsbCB7XHJcbiAgICBjb2xvcjogI2NjYzViOTtcclxuICB9XHJcbiAgLmNhcmQtdXNlciAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAuY2FyZC11c2VyIC5hdmF0YXIuYm9yZGVyLXdoaXRlIHtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5jYXJkLXVzZXIgLmF2YXRhci5ib3JkZXItZ3JheSB7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjY2NjNWI5O1xyXG4gIH1cclxuICAuY2FyZC11c2VyIC50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIC5jYXJkLXVzZXIgLmRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5jYXJkLXVzZXIgLmNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIC5jYXJkLXVzZXIuY2FyZC1wbGFpbiAuYXZhdGFyIHtcclxuICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLW1hcCAubWFwIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmNhcmQtbWFwIC5tYXAgPiBkaXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC11c2VyIC5mb290ZXIsXHJcbiAgLmNhcmQtcHJpY2UgLmZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweCAxMHB4O1xyXG4gIH1cclxuICAuY2FyZC11c2VyIGhyLFxyXG4gIC5jYXJkLXByaWNlIGhyIHtcclxuICAgIG1hcmdpbjogNXB4IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXBsYWluIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC5jYXJkLXBsYWluIC5pbWFnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1sYWJlbCB7XHJcbiAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuICBcclxuICAuY3QtY2hhcnQtbGluZSAuY3QtbGFiZWwsXHJcbiAgLmN0LWNoYXJ0LWJhciAuY3QtbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuY3QtbGFiZWwuY3QtaG9yaXpvbnRhbC5jdC1zdGFydCB7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZmxleC1lbmQ7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGZsZXgtc3RhcnQ7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xyXG4gIH1cclxuICBcclxuICAuY3QtbGFiZWwuY3QtaG9yaXpvbnRhbC5jdC1lbmQge1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtc3RhcnQ7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGZsZXgtc3RhcnQ7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xyXG4gIH1cclxuICBcclxuICAuY3QtbGFiZWwuY3QtdmVydGljYWwuY3Qtc3RhcnQge1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtZW5kO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBmbGV4LWVuZDtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgdGV4dC1hbmNob3I6IGVuZDtcclxuICB9XHJcbiAgXHJcbiAgLmN0LWxhYmVsLmN0LXZlcnRpY2FsLmN0LWVuZCB7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZmxleC1lbmQ7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGZsZXgtc3RhcnQ7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xyXG4gIH1cclxuICBcclxuICAuY3QtY2hhcnQtYmFyIC5jdC1sYWJlbC5jdC1ob3Jpem9udGFsLmN0LXN0YXJ0IHtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBmbGV4LWVuZDtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xyXG4gIH1cclxuICBcclxuICAuY3QtY2hhcnQtYmFyIC5jdC1sYWJlbC5jdC1ob3Jpem9udGFsLmN0LWVuZCB7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZmxleC1zdGFydDtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xyXG4gIH1cclxuICBcclxuICAuY3QtY2hhcnQtYmFyLmN0LWhvcml6b250YWwtYmFycyAuY3QtbGFiZWwuY3QtaG9yaXpvbnRhbC5jdC1zdGFydCB7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZmxleC1lbmQ7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGZsZXgtc3RhcnQ7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xyXG4gIH1cclxuICBcclxuICAuY3QtY2hhcnQtYmFyLmN0LWhvcml6b250YWwtYmFycyAuY3QtbGFiZWwuY3QtaG9yaXpvbnRhbC5jdC1lbmQge1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtc3RhcnQ7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGZsZXgtc3RhcnQ7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xyXG4gIH1cclxuICBcclxuICAuY3QtY2hhcnQtYmFyLmN0LWhvcml6b250YWwtYmFycyAuY3QtbGFiZWwuY3QtdmVydGljYWwuY3Qtc3RhcnQge1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1lbmQ7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRleHQtYW5jaG9yOiBlbmQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1jaGFydC1iYXIuY3QtaG9yaXpvbnRhbC1iYXJzIC5jdC1sYWJlbC5jdC12ZXJ0aWNhbC5jdC1lbmQge1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1zdGFydDtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgLW1zLWZsZXgtcGFjazogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0ZXh0LWFuY2hvcjogZW5kO1xyXG4gIH1cclxuICBcclxuICAuY3QtZ3JpZCB7XHJcbiAgICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHN0cm9rZS13aWR0aDogMXB4O1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMnB4O1xyXG4gIH1cclxuICBcclxuICAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xyXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gIH1cclxuICBcclxuICAuY3QtbGluZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1hcmVhIHtcclxuICAgIHN0cm9rZTogbm9uZTtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICBcclxuICAuY3QtYmFyIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUsIC5jdC1zZXJpZXMtYSAuY3QtYmFyLCAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzY4QjNDODtcclxuICB9XHJcbiAgLmN0LXNlcmllcy1hIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiAjNjhCM0M4O1xyXG4gIH1cclxuICBcclxuICAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWIgLmN0LWxpbmUsIC5jdC1zZXJpZXMtYiAuY3QtYmFyLCAuY3Qtc2VyaWVzLWIgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogI0YzQkI0NTtcclxuICB9XHJcbiAgLmN0LXNlcmllcy1iIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiAjRjNCQjQ1O1xyXG4gIH1cclxuICBcclxuICAuY3Qtc2VyaWVzLWMgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWMgLmN0LWxpbmUsIC5jdC1zZXJpZXMtYyAuY3QtYmFyLCAuY3Qtc2VyaWVzLWMgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogI0VCNUUyODtcclxuICB9XHJcbiAgLmN0LXNlcmllcy1jIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtYyAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiAjRUI1RTI4O1xyXG4gIH1cclxuICBcclxuICAuY3Qtc2VyaWVzLWQgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWQgLmN0LWxpbmUsIC5jdC1zZXJpZXMtZCAuY3QtYmFyLCAuY3Qtc2VyaWVzLWQgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzdBQzI5QTtcclxuICB9XHJcbiAgLmN0LXNlcmllcy1kIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtZCAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiAjN0FDMjlBO1xyXG4gIH1cclxuICBcclxuICAuY3Qtc2VyaWVzLWUgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWUgLmN0LWxpbmUsIC5jdC1zZXJpZXMtZSAuY3QtYmFyLCAuY3Qtc2VyaWVzLWUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzdBOUU5RjtcclxuICB9XHJcbiAgLmN0LXNlcmllcy1lIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtZSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiAjN0E5RTlGO1xyXG4gIH1cclxuICBcclxuICAuY3Qtc2VyaWVzLWYgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWYgLmN0LWxpbmUsIC5jdC1zZXJpZXMtZiAuY3QtYmFyLCAuY3Qtc2VyaWVzLWYgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogcmdiYSgxMDQsIDE3OSwgMjAwLCAwLjgpO1xyXG4gIH1cclxuICAuY3Qtc2VyaWVzLWYgLmN0LXNsaWNlLXBpZSwgLmN0LXNlcmllcy1mIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHJnYmEoMTA0LCAxNzksIDIwMCwgMC44KTtcclxuICB9XHJcbiAgXHJcbiAgLmN0LXNlcmllcy1nIC5jdC1wb2ludCwgLmN0LXNlcmllcy1nIC5jdC1saW5lLCAuY3Qtc2VyaWVzLWcgLmN0LWJhciwgLmN0LXNlcmllcy1nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6IHJnYmEoMTIyLCAxOTQsIDE1NCwgMC44KTtcclxuICB9XHJcbiAgLmN0LXNlcmllcy1nIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtZyAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiByZ2JhKDEyMiwgMTk0LCAxNTQsIDAuOCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1zZXJpZXMtaCAuY3QtcG9pbnQsIC5jdC1zZXJpZXMtaCAuY3QtbGluZSwgLmN0LXNlcmllcy1oIC5jdC1iYXIsIC5jdC1zZXJpZXMtaCAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiByZ2JhKDI0MywgMTg3LCA2OSwgMC44KTtcclxuICB9XHJcbiAgLmN0LXNlcmllcy1oIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtaCAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiByZ2JhKDI0MywgMTg3LCA2OSwgMC44KTtcclxuICB9XHJcbiAgXHJcbiAgLmN0LXNlcmllcy1pIC5jdC1wb2ludCwgLmN0LXNlcmllcy1pIC5jdC1saW5lLCAuY3Qtc2VyaWVzLWkgLmN0LWJhciwgLmN0LXNlcmllcy1pIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6IHJnYmEoMjM1LCA5NCwgNDAsIDAuOCk7XHJcbiAgfVxyXG4gIC5jdC1zZXJpZXMtaSAuY3Qtc2xpY2UtcGllLCAuY3Qtc2VyaWVzLWkgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogcmdiYSgyMzUsIDk0LCA0MCwgMC44KTtcclxuICB9XHJcbiAgXHJcbiAgLmN0LXNlcmllcy1qIC5jdC1wb2ludCwgLmN0LXNlcmllcy1qIC5jdC1saW5lLCAuY3Qtc2VyaWVzLWogLmN0LWJhciwgLmN0LXNlcmllcy1qIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6IHJnYmEoMTIyLCAxNTgsIDE1OSwgMC44KTtcclxuICB9XHJcbiAgLmN0LXNlcmllcy1qIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtaiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiByZ2JhKDEyMiwgMTU4LCAxNTksIDAuOCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1zZXJpZXMtayAuY3QtcG9pbnQsIC5jdC1zZXJpZXMtayAuY3QtbGluZSwgLmN0LXNlcmllcy1rIC5jdC1iYXIsIC5jdC1zZXJpZXMtayAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiByZ2JhKDEwNCwgMTc5LCAyMDAsIDAuNik7XHJcbiAgfVxyXG4gIC5jdC1zZXJpZXMtayAuY3Qtc2xpY2UtcGllLCAuY3Qtc2VyaWVzLWsgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogcmdiYSgxMDQsIDE3OSwgMjAwLCAwLjYpO1xyXG4gIH1cclxuICBcclxuICAuY3Qtc2VyaWVzLWwgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWwgLmN0LWxpbmUsIC5jdC1zZXJpZXMtbCAuY3QtYmFyLCAuY3Qtc2VyaWVzLWwgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogcmdiYSgxMjIsIDE5NCwgMTU0LCAwLjYpO1xyXG4gIH1cclxuICAuY3Qtc2VyaWVzLWwgLmN0LXNsaWNlLXBpZSwgLmN0LXNlcmllcy1sIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHJnYmEoMTIyLCAxOTQsIDE1NCwgMC42KTtcclxuICB9XHJcbiAgXHJcbiAgLmN0LXNlcmllcy1tIC5jdC1wb2ludCwgLmN0LXNlcmllcy1tIC5jdC1saW5lLCAuY3Qtc2VyaWVzLW0gLmN0LWJhciwgLmN0LXNlcmllcy1tIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6IHJnYmEoMjQzLCAxODcsIDY5LCAwLjYpO1xyXG4gIH1cclxuICAuY3Qtc2VyaWVzLW0gLmN0LXNsaWNlLXBpZSwgLmN0LXNlcmllcy1tIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHJnYmEoMjQzLCAxODcsIDY5LCAwLjYpO1xyXG4gIH1cclxuICBcclxuICAuY3Qtc2VyaWVzLW4gLmN0LXBvaW50LCAuY3Qtc2VyaWVzLW4gLmN0LWxpbmUsIC5jdC1zZXJpZXMtbiAuY3QtYmFyLCAuY3Qtc2VyaWVzLW4gLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogcmdiYSgyMzUsIDk0LCA0MCwgMC42KTtcclxuICB9XHJcbiAgLmN0LXNlcmllcy1uIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtbiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiByZ2JhKDIzNSwgOTQsIDQwLCAwLjYpO1xyXG4gIH1cclxuICBcclxuICAuY3Qtc2VyaWVzLW8gLmN0LXBvaW50LCAuY3Qtc2VyaWVzLW8gLmN0LWxpbmUsIC5jdC1zZXJpZXMtbyAuY3QtYmFyLCAuY3Qtc2VyaWVzLW8gLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogcmdiYSgxMjIsIDE1OCwgMTU5LCAwLjYpO1xyXG4gIH1cclxuICAuY3Qtc2VyaWVzLW8gLmN0LXNsaWNlLXBpZSwgLmN0LXNlcmllcy1vIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHJnYmEoMTIyLCAxNTgsIDE1OSwgMC42KTtcclxuICB9XHJcbiAgXHJcbiAgLmN0LXNxdWFyZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY3Qtc3F1YXJlOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgfVxyXG4gIC5jdC1zcXVhcmU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5jdC1zcXVhcmUgPiBzdmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAuY3QtbWlub3Itc2Vjb25kIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jdC1taW5vci1zZWNvbmQ6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOTMuNzUlO1xyXG4gIH1cclxuICAuY3QtbWlub3Itc2Vjb25kOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICAuY3QtbWlub3Itc2Vjb25kID4gc3ZnIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmN0LW1ham9yLXNlY29uZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY3QtbWFqb3Itc2Vjb25kOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDg4Ljg4ODg5JTtcclxuICB9XHJcbiAgLmN0LW1ham9yLXNlY29uZDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgLmN0LW1ham9yLXNlY29uZCA+IHN2ZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1taW5vci10aGlyZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY3QtbWlub3ItdGhpcmQ6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODMuMzMzMzMlO1xyXG4gIH1cclxuICAuY3QtbWlub3ItdGhpcmQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5jdC1taW5vci10aGlyZCA+IHN2ZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1tYWpvci10aGlyZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY3QtbWFqb3ItdGhpcmQ6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODAlO1xyXG4gIH1cclxuICAuY3QtbWFqb3ItdGhpcmQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5jdC1tYWpvci10aGlyZCA+IHN2ZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1wZXJmZWN0LWZvdXJ0aCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY3QtcGVyZmVjdC1mb3VydGg6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzUlO1xyXG4gIH1cclxuICAuY3QtcGVyZmVjdC1mb3VydGg6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5jdC1wZXJmZWN0LWZvdXJ0aCA+IHN2ZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1wZXJmZWN0LWZpZnRoIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jdC1wZXJmZWN0LWZpZnRoOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDY2LjY2NjY3JTtcclxuICB9XHJcbiAgLmN0LXBlcmZlY3QtZmlmdGg6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5jdC1wZXJmZWN0LWZpZnRoID4gc3ZnIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmN0LW1pbm9yLXNpeHRoIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jdC1taW5vci1zaXh0aDpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2Mi41JTtcclxuICB9XHJcbiAgLmN0LW1pbm9yLXNpeHRoOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICAuY3QtbWlub3Itc2l4dGggPiBzdmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAuY3QtZ29sZGVuLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmN0LWdvbGRlbi1zZWN0aW9uOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYxLjgwNDclO1xyXG4gIH1cclxuICAuY3QtZ29sZGVuLXNlY3Rpb246YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5jdC1nb2xkZW4tc2VjdGlvbiA+IHN2ZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1tYWpvci1zaXh0aCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY3QtbWFqb3Itc2l4dGg6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjAlO1xyXG4gIH1cclxuICAuY3QtbWFqb3Itc2l4dGg6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5jdC1tYWpvci1zaXh0aCA+IHN2ZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1taW5vci1zZXZlbnRoIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jdC1taW5vci1zZXZlbnRoOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxuICB9XHJcbiAgLmN0LW1pbm9yLXNldmVudGg6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5jdC1taW5vci1zZXZlbnRoID4gc3ZnIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmN0LW1ham9yLXNldmVudGgge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmN0LW1ham9yLXNldmVudGg6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTMuMzMzMzMlO1xyXG4gIH1cclxuICAuY3QtbWFqb3Itc2V2ZW50aDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgLmN0LW1ham9yLXNldmVudGggPiBzdmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAuY3Qtb2N0YXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jdC1vY3RhdmU6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTAlO1xyXG4gIH1cclxuICAuY3Qtb2N0YXZlOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICAuY3Qtb2N0YXZlID4gc3ZnIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmN0LW1ham9yLXRlbnRoIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jdC1tYWpvci10ZW50aDpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MCU7XHJcbiAgfVxyXG4gIC5jdC1tYWpvci10ZW50aDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgLmN0LW1ham9yLXRlbnRoID4gc3ZnIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmN0LW1ham9yLWVsZXZlbnRoIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jdC1tYWpvci1lbGV2ZW50aDpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzNy41JTtcclxuICB9XHJcbiAgLmN0LW1ham9yLWVsZXZlbnRoOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICAuY3QtbWFqb3ItZWxldmVudGggPiBzdmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAuY3QtbWFqb3ItdHdlbGZ0aCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY3QtbWFqb3ItdHdlbGZ0aDpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMy4zMzMzMyU7XHJcbiAgfVxyXG4gIC5jdC1tYWpvci10d2VsZnRoOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICAuY3QtbWFqb3ItdHdlbGZ0aCA+IHN2ZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC1kb3VibGUtb2N0YXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jdC1kb3VibGUtb2N0YXZlOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1JTtcclxuICB9XHJcbiAgLmN0LWRvdWJsZS1vY3RhdmU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5jdC1kb3VibGUtb2N0YXZlID4gc3ZnIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgbWluLWhlaWdodDogNzVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5uYXZiYXItZm9ybSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIxcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIxcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyLXNlYXJjaC1mb3JtIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudSxcclxuICAgIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtNDBweCwgMHB4KTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSkgMHMsIG9wYWNpdHkgMC4zcyBlYXNlIDBzLCBoZWlnaHQgMHMgbGluZWFyIDAuMzVzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1uYXYgPiBsaS5vcGVuID4gLmRyb3Bkb3duLW1lbnUsIC5kcm9wZG93bi5vcGVuIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcclxuICAgIH1cclxuICBcclxuICAgIC5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudTpiZWZvcmUge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxMXB4IHNvbGlkICNGMUVBRTA7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTJweDtcclxuICAgICAgdG9wOiAtMTFweDtcclxuICAgIH1cclxuICBcclxuICAgIC5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudTphZnRlciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDExcHggc29saWQgI0ZGRkNGNTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgICB0b3A6IC0xMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1uYXYubmF2YmFyLWxlZnQgPiBsaSA+IC5kcm9wZG93bi1tZW51OmJlZm9yZSB7XHJcbiAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1uYXYubmF2YmFyLWxlZnQgPiBsaSA+IC5kcm9wZG93bi1tZW51OmFmdGVyIHtcclxuICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyIC5uYXZiYXItaGVhZGVyIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9vdGVyOm5vdCguZm9vdGVyLWJpZykgbmF2ID4gdWwgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICBcclxuICAgIGJvZHkgPiAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlIHtcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNhcmQgZm9ybSBbY2xhc3MqPVwiY29sLVwiXSB7XHJcbiAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgIH1cclxuICAgIC5jYXJkIGZvcm0gW2NsYXNzKj1cImNvbC1cIl06Zmlyc3QtY2hpbGQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZCBmb3JtIFtjbGFzcyo9XCJjb2wtXCJdOmxhc3QtY2hpbGQge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiAgICAgICAgICBDaGFuZ2VzIGZvciBzbWFsbCBkaXNwbGF5ICAgICAgKi9cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC5tYWluLXBhbmVsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyLXRyYW5zcGFyZW50IHtcclxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBib2R5IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaDYge1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICBcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhciAuY29udGFpbmVyIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xyXG4gICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2UsXHJcbiAgICAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2UuaW4sXHJcbiAgICAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2luZyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5uYXZiYXItbmF2ID4gbGkge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBcclxuICAgIC5vZmYtY2FudmFzLXNpZGViYXIge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgei1pbmRleDogMTAzMjtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcclxuICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMzBweCwgMCwgMCk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMzBweCwgMCwgMCk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjMwcHgsIDAsIDApO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMzBweCwgMCwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjMwcHgsIDAsIDApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xyXG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxuICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxuICAgIH1cclxuICAgIC5vZmYtY2FudmFzLXNpZGViYXIgLnNpZGViYXItd3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogMztcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwcHggMHB4IDBweCAjREREREREO1xyXG4gICAgfVxyXG4gICAgLm9mZi1jYW52YXMtc2lkZWJhciAubmF2IHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgcGFkZGluZzogMTBweCAxNXB4IDA7XHJcbiAgICB9XHJcbiAgICAub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXYgPiBsaSA+IGEge1xyXG4gICAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICAgIGNvbG9yOiAjNjY2MTVCO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgLm9mZi1jYW52YXMtc2lkZWJhciAubmF2ID4gbGkgPiBhOmhvdmVyLCAub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXYgPiBsaSA+IGEuYWN0aXZlIHtcclxuICAgICAgY29sb3I6ICM0MDNEMzk7XHJcbiAgICB9XHJcbiAgICAub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXYgPiBsaSA+IGEgcCxcclxuICAgIC5vZmYtY2FudmFzLXNpZGViYXIgLm5hdiA+IGxpID4gYSAubm90aWZpY2F0aW9uLFxyXG4gICAgLm9mZi1jYW52YXMtc2lkZWJhciAubmF2ID4gbGkgPiBhIC5jYXJldCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5vZmYtY2FudmFzLXNpZGViYXIgLm5hdiA+IGxpID4gYSAuY2FyZXQge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLm9mZi1jYW52YXMtc2lkZWJhciAubmF2ID4gbGkgPiBhIGkge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgICAub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXYgPiBsaS5hY3RpdmUgPiBhOmJlZm9yZSB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDEycHggc29saWQgI0RERERERDtcclxuICAgICAgYm9yZGVyLXRvcDogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXYgPiBsaS5hY3RpdmUgPiBhOmFmdGVyIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICBib3JkZXItbGVmdDogMTJweCBzb2xpZCAjZjRmM2VmO1xyXG4gICAgICBib3JkZXItdG9wOiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICByaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAub2ZmLWNhbnZhcy1zaWRlYmFyOjphZnRlciB7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmM2VmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgcmdiYSgxMTIsIDExMiwgMTEyLCAwKSA2MCUsIHJnYmEoMTg2LCAxODYsIDE4NiwgMC4xNSkgMTAwJSk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLm9mZi1jYW52YXMtc2lkZWJhci5oYXMtaW1hZ2U6OmFmdGVyIHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE3LCAxNywgMC44KTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAub2ZmLWNhbnZhcy1zaWRlYmFyIC5sb2dvIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiA0O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTFweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDExcHg7XHJcbiAgICB9XHJcbiAgICAub2ZmLWNhbnZhcy1zaWRlYmFyIC5kaXZpZGVyIHtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdi1vcGVuIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdi1vcGVuIC5uYXZiYXIgLmNvbnRhaW5lciB7XHJcbiAgICAgIGxlZnQ6IC0yMzBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5uYXYtb3BlbiAud3JhcHBlciB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjMwcHgsIDAsIDApO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjMwcHgsIDAsIDApO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjMwcHgsIDAsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMzBweCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyLWhlYWRlciAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICAgIG1hcmdpbjogMTBweCAxNXB4IDEwcHggMDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5iYXIxLFxyXG4gICAgLmJhcjIsXHJcbiAgICAuYmFyMyB7XHJcbiAgICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICBcclxuICAgIC5iYXIxIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0b3BiYXItYmFjayA1MDBtcyBsaW5lYXIgMHM7XHJcbiAgICAgIC1tb3otYW5pbWF0aW9uOiB0b3BiYXItYmFjayA1MDBtcyBsaW5lYXIgMHM7XHJcbiAgICAgIGFuaW1hdGlvbjogdG9wYmFyLWJhY2sgNTAwbXMgMHM7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJhcjIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJhcjMge1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGJvdHRvbWJhci1iYWNrIDUwMG1zIGxpbmVhciAwcztcclxuICAgICAgLW1vei1hbmltYXRpb246IGJvdHRvbWJhci1iYWNrIDUwMG1zIGxpbmVhciAwcztcclxuICAgICAgYW5pbWF0aW9uOiBib3R0b21iYXItYmFjayA1MDBtcyAwcztcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudG9nZ2xlZCAuYmFyMSB7XHJcbiAgICAgIHRvcDogNnB4O1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogdG9wYmFyLXggNTAwbXMgbGluZWFyIDBzO1xyXG4gICAgICAtbW96LWFuaW1hdGlvbjogdG9wYmFyLXggNTAwbXMgbGluZWFyIDBzO1xyXG4gICAgICBhbmltYXRpb246IHRvcGJhci14IDUwMG1zIDBzO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIH1cclxuICBcclxuICAgIC50b2dnbGVkIC5iYXIyIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICBcclxuICAgIC50b2dnbGVkIC5iYXIzIHtcclxuICAgICAgYm90dG9tOiA2cHg7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib3R0b21iYXIteCA1MDBtcyBsaW5lYXIgMHM7XHJcbiAgICAgIC1tb3otYW5pbWF0aW9uOiBib3R0b21iYXIteCA1MDBtcyBsaW5lYXIgMHM7XHJcbiAgICAgIGFuaW1hdGlvbjogYm90dG9tYmFyLXggNTAwbXMgMHM7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgQGtleWZyYW1lcyB0b3BiYXIteCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICA0NSUge1xyXG4gICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE0NWRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNzUlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyB0b3BiYXIteCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDQ1JSB7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNDVkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDc1JSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzIHRvcGJhci14IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNDUlIHtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE0NWRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNzUlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHRvcGJhci1iYWNrIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNDUlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDc1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyB0b3BiYXItYmFjayB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNDUlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNzUlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEAtbW96LWtleWZyYW1lcyB0b3BiYXItYmFjayB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNDUlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNzUlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgYm90dG9tYmFyLXgge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNDUlIHtcclxuICAgICAgICBib3R0b206IDZweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTQ1ZGVnKTtcclxuICAgICAgfVxyXG4gICAgICA3NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgYm90dG9tYmFyLXgge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICA0NSUge1xyXG4gICAgICAgIGJvdHRvbTogNnB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE0NWRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNzUlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEAtbW96LWtleWZyYW1lcyBib3R0b21iYXIteCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDQ1JSB7XHJcbiAgICAgICAgYm90dG9tOiA2cHg7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTQ1ZGVnKTtcclxuICAgICAgfVxyXG4gICAgICA3NSUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBib3R0b21iYXItYmFjayB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBib3R0b206IDZweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAgICAgfVxyXG4gICAgICA0NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICA3NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGJvdHRvbWJhci1iYWNrIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIGJvdHRvbTogNnB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNDUlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICA3NSUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEAtbW96LWtleWZyYW1lcyBib3R0b21iYXItYmFjayB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBib3R0b206IDZweDtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDQ1JSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgNzUlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLW1lbnUgLmRpdmlkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwgMjI5LCAyMjksIDAuMTUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICBtYXJnaW46IDFweCAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyLWZpeGVkLXRvcCB7XHJcbiAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI2JvZHlDbGljayB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICByaWdodDogMjMwcHg7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIH1cclxuICBcclxuICAgIC5mb3JtLWNvbnRyb2wgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuICAgICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgIH1cclxuICBcclxuICAgIC5uYXZiYXItdG9nZ2xlOmhvdmVyLCAubmF2YmFyLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYnRuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWVkaWEtcG9zdCAuYXV0aG9yIHtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWVkaWEtcG9zdCAubWVkaWEtYm9keSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZSB7XHJcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZS5pbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1oZWFkZXIgLmNvbGxhcHNlLCAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC5tYWluLXBhbmVsID4gLmNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2IC5vcGVuID4gYSwgLm5hdiAub3BlbiA+IGE6Zm9jdXMsIC5uYXYgLm9wZW4gPiBhOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9vdGVyIC5jb3B5cmlnaHQge1xyXG4gICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnRhYmxlLWZ1bGwtd2lkdGgge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxuICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tbXkgc3R5bGVzLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmRhc2hib2FyZE5hdiB7XHJcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\r\n\r\n   \r\n\r\n    \t<div class=\"sidebar-wrapper\">\r\n            <div class=\"logo\">\r\n                <a  class=\"simple-text\">\r\n                    Dashboard\r\n                </a>\r\n            </div>\r\n\r\n            <ul class=\"dashboardNav nav\">\r\n                <li>\r\n                    <a ui-sref=\"home.admin\">\r\n                       <i class=\"fa fa-sliders\" aria-hidden=\"true\"></i>\r\n                        <p>Dashboard</p>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/admin/dashboard/userManager\">\r\n                       <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\r\n                        <p>User Controller</p>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/admin/dashboard/blogManager\">\r\n                        <i class=\"fa fa-rss-square\" aria-hidden=\"true\"></i>\r\n                        <p>Blog Manager</p>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/admin/dashboard/tutManager\">\r\n                        <i class=\"fa fa-book\" aria-hidden=\"true\"></i>\r\n                        <p>Tutorial Controller</p>\r\n                    </a>\r\n                </li>\r\n               \r\n                <li>\r\n                    <a ui-sref=\"home.trackers\">\r\n                        <i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>\r\n                        <p>Trackers</p>\r\n                    </a>\r\n                </li>\r\n\t\t\t\t<li class=\"home.notification\">\r\n                    <a href=\"http://demos.creative-tim.com/paper-dashboard/upgrade.html\">\r\n                       <i class=\"fa fa-commenting\" aria-hidden=\"true\"></i>\r\n                        <p>Notification</p>\r\n                    </a>\r\n                </li>\r\n                \t<li class=\"active-pro\">\r\n                    <a id=\"logoutBtn\"  (click)=\"logout()\">\r\n                        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r\n                        <p>Logout</p>\r\n                    </a>\r\n                </li>\r\n                \r\n            </ul>\r\n    \t</div>.\r\n    </div>\r\n\r\n    <div class=\"main-panel\">\r\n        <nav class=\"navbar navbar-default\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"navbar-header\">\r\n                    <a class=\"navbar-brand\" href=\"javascript:;\">{{dashBoardTitle}}</a>\r\n                </div>\r\n                <div class=\"collapse navbar-collapse\">\r\n                    <ul class=\"nav navbar-nav navbar-right\">\r\n                        <li>\r\n                            <a href=\"http://demos.creative-tim.com/paper-dashboard/dashboard.html#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                <i class=\"ti-panel\"></i>\r\n\t\t\t\t\t\t\t\t<p>Stats</p>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"dropdown\">\r\n                              <a href=\"http://demos.creative-tim.com/paper-dashboard/dashboard.html#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                    <i class=\"ti-bell\"></i>\r\n                                    <p class=\"notification\">5</p>\r\n\t\t\t\t\t\t\t\t\t<p>Notifications</p>\r\n\t\t\t\t\t\t\t\t\t<b class=\"caret\"></b>\r\n                              </a>\r\n                              <ul class=\"dropdown-menu\">\r\n                                <li><a href=\"http://demos.creative-tim.com/paper-dashboard/dashboard.html#\">Notification 1</a></li>\r\n                                <li><a href=\"http://demos.creative-tim.com/paper-dashboard/dashboard.html#\">Notification 2</a></li>\r\n                                <li><a href=\"http://demos.creative-tim.com/paper-dashboard/dashboard.html#\">Notification 3</a></li>\r\n                                <li><a href=\"http://demos.creative-tim.com/paper-dashboard/dashboard.html#\">Notification 4</a></li>\r\n                                <li><a href=\"http://demos.creative-tim.com/paper-dashboard/dashboard.html#\">Another notification</a></li>\r\n                              </ul>\r\n                        </li>\r\n\t\t\t\t\t\t<li>\r\n                            <a href=\"http://demos.creative-tim.com/paper-dashboard/dashboard.html#\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-settings\"></i>\r\n\t\t\t\t\t\t\t\t<p>Settings</p>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n\r\n                </div>\r\n            </div>\r\n        </nav>\r\n\r\n\r\n        <div class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <router-outlet></router-outlet>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n       \r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n<script>\r\n    $(\"#logoutBtn\").click(function() {\r\n        window.localStorage.clear();\r\n        window.location.assign(\"/\")\r\n    });\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(router) {
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/admin/login']);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptor_api_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptor/api-interceptor.service */ "./src/app/admin/interceptor/api-interceptor.service.ts");
/* harmony import */ var _widgets_blog_manager_blog_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/blog-manager/blog-manager.component */ "./src/app/admin/widgets/blog-manager/blog-manager.component.ts");
/* harmony import */ var _widgets_tut_manager_tut_manager_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/tut-manager/tut-manager.component */ "./src/app/admin/widgets/tut-manager/tut-manager.component.ts");
/* harmony import */ var _widgets_user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets/user-manager/user-manager.component */ "./src/app/admin/widgets/user-manager/user-manager.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _widgets_blog_manager_blog_manager_component__WEBPACK_IMPORTED_MODULE_9__["BlogManagerComponent"], _widgets_tut_manager_tut_manager_component__WEBPACK_IMPORTED_MODULE_10__["TutManagerComponent"], _widgets_user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_11__["UserManagerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_api_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["ApiInterceptorService"],
                    multi: true
                }
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/admin/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.redirectToLoginPage();
        return false;
    };
    AuthGuard.prototype.redirectToLoginPage = function () {
        this.router.navigate(['/admin/login']);
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/admin/interceptor/api-interceptor.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/interceptor/api-interceptor.service.ts ***!
  \**************************************************************/
/*! exports provided: ApiInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptorService", function() { return ApiInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/admin/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiInterceptorService = /** @class */ (function () {
    function ApiInterceptorService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ApiInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        // Get the auth token from the service.
        var authToken = localStorage.getItem('currentUser');
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        var authReq = req.clone({
            headers: req.headers.set('Authorization', 'Token ' + authToken)
        });
        // send cloned request with header to the next handler.
        return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // this.auth.
                localStorage.setItem('currentUser', null);
                _this.router.navigate(['/admin/login']);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ApiInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApiInterceptorService);
    return ApiInterceptorService;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width:27%;margin: 50px auto;\">\r\n    <div class=\"card-header\">\r\n        <span>Please Log In, or\r\n            <a>Sign Up</a>\r\n        </span>\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"main\" style=\"width:100%;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                            <a href=\"#\" class=\"btn btn-primary btn-block\">Facebook</a>\r\n                        </div>\r\n                        <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                            <a href=\"#\" class=\"btn btn-info btn-block\">Google</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"login-or\">\r\n                        <hr class=\"hr-or\">\r\n                        <span class=\"span-or\">or</span>\r\n                    </div>\r\n                    <form role=\"form\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputUsernameEmail\">Username</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"inputUsername\" name=\"username\" [(ngModel)]=\"username\"\r\n                                required=\"required\" (focus)=\"toggleInvUser(false)\"/>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <a class=\"pull-right\" href=\"#\">Forgot password?</a>\r\n                            <label for=\"inputPassword\">Password</label>\r\n                            <input type=\"password\" class=\"form-control\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"password\"\r\n                                required=\"required\" (focus)=\"toggleInvUser(false)\"\r\n                                (keydown)=\"keyCheck($event)\" />\r\n                        </div>\r\n                        <div class=\"checkbox pull-right\">\r\n                            <label>\r\n                                <input type=\"checkbox\"> Remember me </label>\r\n                        </div>\r\n                        <span class=\"btn btn btn-primary\" (click)=\"ValidateAndLogin()\">\r\n                            Log In\r\n                        </span>\r\n                      \r\n                        <div class=\"alert alert-danger alert-dismissable fade show\" *ngIf=\"invalidUser\">\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n                            <span>Invalid User.</span>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/login.service */ "./src/app/admin/service/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.invalidUser = false;
        this.username = "";
        this.password = "";
    }
    ;
    LoginComponent.prototype.toggleInvUser = function (curVal) {
        this.invalidUser = curVal;
    };
    ;
    LoginComponent.prototype.keyCheck = function (e) {
        if (e.keyCode === 13) {
            this.ValidateAndLogin();
        }
    };
    LoginComponent.prototype.ValidateAndLogin = function () {
        var _this = this;
        var username = this.username;
        var password = this.password;
        this.loginService.validateAndLogin(username, password).subscribe(function (response) {
            console.log(response);
            var temp = response.result;
            if (response.token) {
                var userObj = {
                    username: username,
                    token: response.token,
                    expiryTime: response.expirytime,
                    userId: response.userDataId
                };
                localStorage.setItem('currentUser', JSON.stringify(userObj));
                _this.router.navigate(['/admin/dashboard']);
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/admin/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/service/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/service/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serviceURL;
    }
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/admin/service/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/service/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serviceURL;
    }
    LoginService.prototype.createUser = function (data) {
        return this.httpClient.post(this.apiUrl + 'api/User/Create', data);
    };
    ;
    LoginService.prototype.checkValidUserName = function (userName) {
        return this.httpClient.get(this.apiUrl + 'api/User/checkUser?userName=' + userName);
    };
    ;
    LoginService.prototype.checkValidEmail = function (email) {
        return this.httpClient.get(this.apiUrl + 'api/User/CheckEmail?email=' + email);
    };
    ;
    LoginService.prototype.validateAndLogin = function (userName, password) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: 'username=' + userName + '&password=' + password });
        return this.httpClient.get(this.apiUrl + 'api/User/CheckSignUpCred', { responseType: "json", params: params });
    };
    ;
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/admin/widgets/blog-manager/blog-manager.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/widgets/blog-manager/blog-manager.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3dpZGdldHMvYmxvZy1tYW5hZ2VyL2Jsb2ctbWFuYWdlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/widgets/blog-manager/blog-manager.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/widgets/blog-manager/blog-manager.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n      <ul class=\"nav nav-tabs card-header-tabs\">\n          <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"tab\" data-target=\"#blogData\" role=\"tab\">Blog Data </a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" data-target=\"#blogManager\" role=\"tab\">Blog Manager</a>\n          </li>\n\n      </ul>\n  </div>\n  <div class=\"tab-content\">\n      <div class=\"card-block tab-pane fade show active\" id=\"blogData\">\n          <h4 class=\"card-title\">New Blog Data</h4>\n\n          <!-- <blog-post-manager-directive function-type=\"add\"></blog-post-manager-directive> -->\n\n      </div>\n      <div class=\"card-block tab-pane fade\" id=\"blogManager\">\n          <h4 class=\"card-title\">Blog Manager</h4>\n          <div class=\"table-responsive\">\n              <!-- <grid-directive id=\"blogGridWrapDir\" gd-id=\"blogGrid\" grid-data=\"'/apiS/Blog/FetchAll'\" gd-type=\"'URL'\" coloumn-data=\"blogGrid\" ver=\"1\">\n                  <thead>\n                      <tr>\n                          <th>username</th>\n                          <th>email</th>\n                      </tr>\n                  </thead>\n              </grid-directive> -->\n          </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/widgets/blog-manager/blog-manager.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/widgets/blog-manager/blog-manager.component.ts ***!
  \**********************************************************************/
/*! exports provided: BlogManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogManagerComponent", function() { return BlogManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogManagerComponent = /** @class */ (function () {
    function BlogManagerComponent() {
    }
    BlogManagerComponent.prototype.ngOnInit = function () {
    };
    BlogManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-manager',
            template: __webpack_require__(/*! ./blog-manager.component.html */ "./src/app/admin/widgets/blog-manager/blog-manager.component.html"),
            styles: [__webpack_require__(/*! ./blog-manager.component.css */ "./src/app/admin/widgets/blog-manager/blog-manager.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogManagerComponent);
    return BlogManagerComponent;
}());



/***/ }),

/***/ "./src/app/admin/widgets/tut-manager/tut-manager.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/widgets/tut-manager/tut-manager.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3dpZGdldHMvdHV0LW1hbmFnZXIvdHV0LW1hbmFnZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/widgets/tut-manager/tut-manager.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/widgets/tut-manager/tut-manager.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n      <ul class=\"nav nav-tabs card-header-tabs\">\n          <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"tab\" data-target=\"#tutorialData\" role=\"tab\">Tutorial Data </a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" data-target=\"#tutorialManager\" role=\"tab\">Tutorial Manager</a>\n          </li>\n\n      </ul>\n  </div>\n  <div class=\"tab-content\">\n      <div class=\"card-block tab-pane fade show active\" id=\"tutorialData\">\n          <h4 class=\"card-title\">New Tutorial Data</h4>\n\n          <!-- <tutorial-manager-directive></tutorial-manager-directive> -->\n\n      </div>\n      <div class=\"card-block tab-pane fade\" id=\"tutorialManager\">\n          <h4 class=\"card-title\">Blog Manager</h4>\n          <div class=\"table-responsive\">\n              <!-- <grid-directive id=\"tutorialGridWrapDir\" gd-id=\"tutorialGrid\" grid-data=\"'/apiS/Tutorial/FetchAll'\" gd-type=\"'URL'\" coloumn-data=\"tutorialGrid\" ver=\"1\">\n                  \n              </grid-directive> -->\n          </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/widgets/tut-manager/tut-manager.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/widgets/tut-manager/tut-manager.component.ts ***!
  \********************************************************************/
/*! exports provided: TutManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutManagerComponent", function() { return TutManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutManagerComponent = /** @class */ (function () {
    function TutManagerComponent() {
    }
    TutManagerComponent.prototype.ngOnInit = function () {
    };
    TutManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tut-manager',
            template: __webpack_require__(/*! ./tut-manager.component.html */ "./src/app/admin/widgets/tut-manager/tut-manager.component.html"),
            styles: [__webpack_require__(/*! ./tut-manager.component.css */ "./src/app/admin/widgets/tut-manager/tut-manager.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutManagerComponent);
    return TutManagerComponent;
}());



/***/ }),

/***/ "./src/app/admin/widgets/user-manager/user-manager.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/widgets/user-manager/user-manager.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3dpZGdldHMvdXNlci1tYW5hZ2VyL3VzZXItbWFuYWdlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/widgets/user-manager/user-manager.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/widgets/user-manager/user-manager.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n    <div class=\"card-deck\">\r\n        <div class=\"card col-lg-12 px-0 mb-4\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">User List</h5>\r\n                <div class=\"table-responsive\">\r\n                    <!--<grid-directive gd-id=\"userGrid\" grid-data=\"'/apiS/User/FetchAll'\" gd-type=\"'URL'\" coloumn-data=\"userGrid\">-->\r\n                    <!--    <thead>-->\r\n                    <!--        <tr>-->\r\n                    <!--            <th>username</th>-->\r\n                    <!--            <th>email</th>-->\r\n                    <!--        </tr>-->\r\n                    <!--    </thead>-->\r\n                    <!--</grid-directive>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/widgets/user-manager/user-manager.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/widgets/user-manager/user-manager.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerComponent", function() { return UserManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserManagerComponent = /** @class */ (function () {
    function UserManagerComponent() {
    }
    UserManagerComponent.prototype.ngOnInit = function () {
    };
    UserManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-manager',
            template: __webpack_require__(/*! ./user-manager.component.html */ "./src/app/admin/widgets/user-manager/user-manager.component.html"),
            styles: [__webpack_require__(/*! ./user-manager.component.css */ "./src/app/admin/widgets/user-manager/user-manager.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserManagerComponent);
    return UserManagerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map