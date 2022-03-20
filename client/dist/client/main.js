(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+VUo":
/*!********************************************************!*\
  !*** ./src/app/component/restock/restock.component.ts ***!
  \********************************************************/
/*! exports provided: RestockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestockComponent", function() { return RestockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product/products.service */ "L0fj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function RestockComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.err);
} }
class RestockComponent {
    constructor(bsModalRef, productServ) {
        this.bsModalRef = bsModalRef;
        this.productServ = productServ;
        this.id = null;
        this.stocknumber = 0;
        this.sucess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.err = null;
        this.disabled = false;
    }
    ngOnInit() {
    }
    restock(f) {
        for (const control in f.controls) {
            f.controls[control].markAsDirty();
            f.controls[control].markAsTouched();
        }
        if (f.valid) {
            this.disabled = true;
            this.productServ.editproductamount(this.id, this.stocknumber).subscribe((res) => {
                this.disabled = false;
                this.sucess.emit("Success");
                this.bsModalRef.hide();
            }, err => {
                var _a;
                this.disabled = false;
                console.log(err);
                this.err = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.err) || "Something went wrong";
            });
        }
    }
}
RestockComponent.ɵfac = function RestockComponent_Factory(t) { return new (t || RestockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"])); };
RestockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RestockComponent, selectors: [["app-restock"]], inputs: { id: "id", stocknumber: "stocknumber" }, outputs: { sucess: "sucess" }, decls: 15, vars: 3, consts: [[1, "modal-header"], [1, "modal-title", "pull-left", "mb-0"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body", "p-4"], ["class", "error", 4, "ngIf"], [1, "", 3, "ngSubmit"], ["f", "ngForm"], ["type", "Number", "placeholder", "Enter new quanity", "name", "stock", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mt-4", 3, "disabled"], [1, "error"]], template: function RestockComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Restock Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RestockComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RestockComponent_p_7_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RestockComponent_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.restock(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " New Stock Quanity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RestockComponent_Template_input_ngModelChange_12_listener($event) { return ctx.stocknumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Restock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.err);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stocknumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n\n.close[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: red;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background: white;\n  color: #F56A00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXN0b2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7O0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDUTs7RUFDSSwwQ0FBQTtBQUVaOztBQUdBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6InJlc3RvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEycHggI2VlZTtcclxuICAgICYubmctdG91Y2hlZCB7XHJcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODUsIDQwLCA0MCwgMC4zODQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNsb3NlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjRjU2QTAwO1xyXG59Il19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\samir\others\mong2\MongezWebsite\client\src\main.ts */"zUnb");


/***/ }),

/***/ "0jbg":
/*!******************************************************!*\
  !*** ./src/app/pages/payement/payement.component.ts ***!
  \******************************************************/
/*! exports provided: PayementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayementComponent", function() { return PayementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PayementComponent {
    constructor() { }
    ngOnInit() {
    }
}
PayementComponent.ɵfac = function PayementComponent_Factory(t) { return new (t || PayementComponent)(); };
PayementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PayementComponent, selectors: [["app-payement"]], decls: 78, vars: 0, consts: [[1, "container", "mt-5", "px-5"], [1, "mb-4"], [1, "row"], [1, "col-md-8"], [1, "card", "p-3"], [1, "text-uppercase"], [1, "inputbox", "mt-3"], ["type", "text", "name", "name", "required", "required", 1, "form-control"], [1, "col-md-6"], [1, "inputbox", "mt-3", "mr-2"], [1, "fa", "fa-credit-card"], [1, "d-flex", "flex-row"], [1, "mt-4", "mb-4"], [1, "row", "mt-3"], [1, "row", "mt-2"], [1, "mt-4", "mb-4", "d-flex", "justify-content-between"], [1, "btn", "btn-success", "px-3"], [1, "col-md-4"], [1, "card", "card-blue", "p-3", "text-white", "mb-3"], [1, "d-flex", "flex-row", "align-items-end", "mb-3"], [1, "mb-0", "yellow"], ["href", "#", 1, "yellow", "decoration"], [1, "hightlight"]], template: function PayementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirm order and pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "please make the payment, after that you can enjoy all the features and benefits.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Payment details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name on card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Expiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "CVV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Street Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "State/Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Zip code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Previous step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Pay $840");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "You have to pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "$549");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ".99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Enjoy all the features and perk after you complete the payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Know all the features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "100% Guaranteed support and update for the next 5 years.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: #eee\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    height: 100vh\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    border: none\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    border-bottom: 2px solid #eee !important;\r\n    border: none;\r\n    font-weight: 600\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border-color: #8bbafe;\r\n    outline: 0;\r\n    box-shadow: none;\r\n    border-radius: 0px;\r\n    border-bottom: 2px solid blue !important\r\n}\r\n\r\n.inputbox[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n    width: 100%\r\n}\r\n\r\n.inputbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 11px;\r\n    transition: 0.5s\r\n}\r\n\r\n.inputbox[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 13px;\r\n    right: 8px;\r\n    transition: 0.5s;\r\n    color: #3F51B5\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0\r\n}\r\n\r\n.inputbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ span[_ngcontent-%COMP%] {\r\n    transform: translateX(-0px) translateY(-15px);\r\n    font-size: 12px\r\n}\r\n\r\n.inputbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid ~ span[_ngcontent-%COMP%] {\r\n    transform: translateX(-0px) translateY(-15px);\r\n    font-size: 12px\r\n}\r\n\r\n.card-blue[_ngcontent-%COMP%] {\r\n    background-color: #492bc4\r\n}\r\n\r\n.hightlight[_ngcontent-%COMP%] {\r\n    background-color: #5737d9;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    margin-top: 15px;\r\n    font-size: 14px\r\n}\r\n\r\n.yellow[_ngcontent-%COMP%] {\r\n    color: #fdcc49\r\n}\r\n\r\n.decoration[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size: 14px\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: #492bc4;\r\n    border-color: #492bc4\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n    background-color: #492bc4;\r\n    border-color: #492bc4\r\n}\r\n\r\n.decoration[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    color: #fdcc49\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheWVtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDO0FBQ0o7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0M7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQjtBQUNKIiwiZmlsZSI6InBheWVtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWVlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOGJiYWZlO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmx1ZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5pbnB1dGJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmlucHV0Ym94IHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICBsZWZ0OiAxMXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41c1xyXG59XHJcblxyXG4uaW5wdXRib3ggaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICByaWdodDogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGNvbG9yOiAjM0Y1MUI1XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDBcclxufVxyXG5cclxuLmlucHV0Ym94IGlucHV0OmZvY3VzfnNwYW4ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wcHgpIHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbn1cclxuXHJcbi5pbnB1dGJveCBpbnB1dDp2YWxpZH5zcGFuIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMHB4KSB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweFxyXG59XHJcblxyXG4uY2FyZC1ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTJiYzRcclxufVxyXG5cclxuLmhpZ2h0bGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU3MzdkOTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweFxyXG59XHJcblxyXG4ueWVsbG93IHtcclxuICAgIGNvbG9yOiAjZmRjYzQ5XHJcbn1cclxuXHJcbi5kZWNvcmF0aW9uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweFxyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDkyYmM0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDkyYmM0XHJcbn1cclxuXHJcbi5idG4tc3VjY2Vzczpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTJiYzQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM0OTJiYzRcclxufVxyXG5cclxuLmRlY29yYXRpb246aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZGNjNDlcclxufSJdfQ== */"] });


/***/ }),

/***/ "0w1T":
/*!**********************************************************!*\
  !*** ./src/app/pages/categories/categories.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { backgroundImage: a0 }; };
function CategoriesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const category_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.NavigatetoSubCategory(category_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + category_r1.img + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.label);
} }
class CategoriesComponent {
    constructor(router) {
        this.router = router;
        this.categories = [];
        this.Mechanicalsubcategories = [];
        this.ELectricalsubcategories = [];
    }
    ngOnInit() {
    }
    NavigatetoSubCategory(category) {
        this.router.navigateByUrl(category.route || "/products");
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], inputs: { categories: "categories", Mechanicalsubcategories: "Mechanicalsubcategories", ELectricalsubcategories: "ELectricalsubcategories" }, decls: 2, vars: 1, consts: [[1, "row", "categories"], ["class", "category_holder col-md-4 col-6", 3, "click", 4, "ngFor", "ngForOf"], [1, "category_holder", "col-md-4", "col-6", 3, "click"], [1, "category", 3, "ngStyle"], [1, "overlay"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoriesComponent_div_1_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".categories[_ngcontent-%COMP%] {\n  margin: 40px 0;\n}\n.categories[_ngcontent-%COMP%]   .category_holder[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.categories[_ngcontent-%COMP%]   .category_holder[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  color: #FFF;\n  font-weight: bold;\n  font-size: 25px;\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.categories[_ngcontent-%COMP%]   .category_holder[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  background: #000;\n  opacity: 0.4;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.categories[_ngcontent-%COMP%]   .category_holder[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n}\n.categories[_ngcontent-%COMP%]   .category_holder[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  background-color: #FE5000;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0FBRVI7QUFEUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFHWjtBQUZZO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSWhCO0FBRlk7RUFDSSxrQkFBQTtBQUloQjtBQURnQjtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUdwQiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3JpZXMge1xyXG4gICAgbWFyZ2luOiA0MHB4IDA7XHJcbiAgICAuY2F0ZWdvcnlfaG9sZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTUwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities/utilities */ "Y7hm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../categories/categories.component */ "0w1T");






function HomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.GoToProducts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Shop Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_9_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Big Orders? No Problem. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " No matter the size of your projects, our expert team has you covered, without the expensive price tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Create Bid (Comming Soon)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
} }
function HomeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Order in Minutes & Get Same-Day Delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Over 17,000+ products from brands you know and trust ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " & hundreds more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-categories", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.GoToProducts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Shop Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_div_9_div_13_Template, 12, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("categories", ctx_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.type != "supplier");
} }
class HomeComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.categories = _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__["categories"];
        this.mechanichalsubcategories = _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__["Mechanicalsubcategories"];
        this.electricalsubcategories = _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__["Electricalsubcategories"];
        this.user = null;
        this.type = "";
    }
    ngOnInit() {
        this.user = this.auth.checkUser();
        this.type = localStorage.getItem("type");
        if (this.router.url.indexOf('logout') != -1) {
            this.auth.logout(localStorage.getItem("type"));
        }
        this.auth.authState.subscribe(state => {
            this.user = this.auth.checkUser();
            this.type = localStorage.getItem("type");
        });
    }
    GoToProducts() {
        this.router.navigateByUrl('/products');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 2, consts: [[1, "row", "position-relative", "poster", "m-0"], [1, "bgimg"], [1, "col-md-7", "position-relative", "font"], ["class", "mt-5 mb-5 pt-5", 4, "ngIf"], [1, "col-md-5"], ["class", "container", 4, "ngIf"], [1, "mt-5", "mb-5", "pt-5"], [1, "btn", "btn-primary", "btn-lg", "mt-5", 3, "click"], [1, "container"], [1, "categories", "mt-5", "text-center"], [1, "logos"], [3, "categories"], [1, "mb-5"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], ["class", "row bigdeals", 4, "ngIf"], [1, "row", "bigdeals"], [1, "col-md-7"], [1, "mt-5", "ml-5"], [1, "btn", "btn-primary", "btn-lg", "mt-5", 3, "disabled"], [1, "img-container", "mt-5", "mr-5"], ["src", "/assets/images/bigorder.jpg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Building Materials, Exactly When You Need Them Save time and money with Mongez\u2019s online store and fast delivery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Save time and money with Mongez\u2019s online store and fast delivery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 14, 2, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type != "supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type != "supplier");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"]], styles: [".bgimg[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/truck.jpg\");\n  filter: brightness(50%);\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: white;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.poster[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaURBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFBSTtFQUNJLFdBQUE7QUFFUjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdpbWcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy90cnVjay5qcGcnKTtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5mb250IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3N0ZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "1hLT":
/*!*******************************************************!*\
  !*** ./src/app/services/supplier/supplier.service.ts ***!
  \*******************************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SupplierService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl}/supplier`;
        this.baseorderUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl}/order`;
    }
    getSupplier(id) {
        return this.http.get(this.baseUrl + '/viewsupplier/' + id);
    }
    getSuppliers(search) {
        return this.http.get(this.baseUrl + `/allsuppliers${search ? `?search=${search}` : ''}`);
    }
    createSupplier(firstname, lastname, username, email, password, mobileNumber, dateOfBirth, nationalID, companyName, taxNumber, image, address) {
        const url = `${this.baseUrl}/register`;
        return this.http.post(url, {
            firstname,
            lastname,
            username,
            email,
            password,
            mobileNumber,
            dateOfBirth,
            nationalID,
            companyName,
            taxNumber,
            image,
            address
        });
    }
    updateInfo(id, firstname, lastname, password, mobileNumber, dateOfBirth, email, address) {
        const url = `${this.baseUrl}/updatemyinfo/`;
        this.supplier = this.http.get(this.baseUrl + '/viewsupplier/' + id);
        ;
        if (firstname == "")
            firstname = this.supplier.firstname;
        if (lastname == "")
            lastname = this.supplier.lastname;
        if (password == "")
            password = this.supplier.password;
        if (mobileNumber == "")
            mobileNumber = this.supplier.mobileNumber;
        if (dateOfBirth == "")
            dateOfBirth = this.supplier.dateOfBirth;
        if (email == "")
            email = this.supplier.email;
        if (address == "")
            address = this.supplier.address;
        // if(logo=="")
        // logo = this.supplier.logo;
        return this.http.patch(url, {
            firstname,
            lastname,
            password,
            mobileNumber,
            dateOfBirth,
            email
            // logo,
        });
    }
    getmyorders(query = null) {
        const url = `${this.baseorderUrl}/myorderssupplier${query ? `?query=${JSON.stringify(query)}` : ''}`;
        return this.http.get(url);
    }
}
SupplierService.ɵfac = function SupplierService_Factory(t) { return new (t || SupplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SupplierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SupplierService, factory: SupplierService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2Ham":
/*!**************************************************************!*\
  !*** ./src/app/pages/viewsupplier/viewsupplier.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewsupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsupplierComponent", function() { return ViewsupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/supplier/supplier.service */ "1hLT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ViewsupplierComponent_div_5_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date Of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewsupplierComponent_div_5_input_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 13);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r3.Supplier.dateOfBirth);
} }
function ViewsupplierComponent_div_5_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "National ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewsupplierComponent_div_5_input_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 6);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r5.Supplier.nationalID);
} }
function ViewsupplierComponent_div_5_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tax Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewsupplierComponent_div_5_input_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 6);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r7.Supplier.taxNumber);
} }
function ViewsupplierComponent_div_5_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Official Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewsupplierComponent_div_5_input_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 14);
} }
function ViewsupplierComponent_div_5_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewsupplierComponent_div_5_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.saveInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewsupplierComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ViewsupplierComponent_div_5_label_19_Template, 2, 0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ViewsupplierComponent_div_5_input_20_Template, 1, 1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewsupplierComponent_div_5_label_21_Template, 2, 0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ViewsupplierComponent_div_5_input_22_Template, 1, 1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ViewsupplierComponent_div_5_label_26_Template, 2, 0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ViewsupplierComponent_div_5_input_27_Template, 1, 1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViewsupplierComponent_div_5_label_28_Template, 2, 0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ViewsupplierComponent_div_5_input_29_Template, 1, 0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ViewsupplierComponent_div_5_button_30_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.Supplier.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.Supplier.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.Supplier.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.Supplier.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.Supplier.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.Supplier.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "Admin" || ctx_r0.viewedit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "Admin" || ctx_r0.viewedit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "Admin" || ctx_r0.viewedit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "Admin" || ctx_r0.viewedit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.Supplier.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "Admin" || ctx_r0.viewedit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "Admin" || ctx_r0.viewedit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "Admin" || ctx_r0.viewedit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "Admin" || ctx_r0.viewedit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.viewedit == true);
} }
function ViewsupplierComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsupplierComponent_div_6_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.firstname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsupplierComponent_div_6_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.lastname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsupplierComponent_div_6_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsupplierComponent_div_6_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Enter New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsupplierComponent_div_6_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsupplierComponent_div_6_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsupplierComponent_div_6_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.mobileNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Date Of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsupplierComponent_div_6_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.dateOfBirth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Official Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewsupplierComponent_div_6_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.saveInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Update Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Supplier.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Supplier.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Supplier.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Supplier.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Supplier.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Supplier.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Supplier.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Supplier.dateOfBirth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.dateOfBirth);
} }
class ViewsupplierComponent {
    constructor(router, activerouter, SupplierSer) {
        this.router = router;
        this.activerouter = activerouter;
        this.SupplierSer = SupplierSer;
        this.Supplier = {};
        this.edit = false;
        this.email = "";
        this.firstname = "";
        this.lastname = "";
        this.username = "";
        this.password = "";
        this.address = "";
        this.mobileNumber = "";
        this.dateOfBirth = "";
        this.nationalID = "";
        this.viewedit = true;
        // companyName="";
        this.taxNumber = "";
    }
    ngOnInit() {
        this.activerouter.paramMap.subscribe((res) => {
            // console.log(res)
            this.getSupplier(res.params.id);
        });
    }
    getSupplier(id) {
        this.loggedinuser = JSON.parse(localStorage.getItem("currentuser")).user;
        if (this.loggedinuser == null) {
            this.loggedinuser = JSON.parse(localStorage.getItem("currentuser")).supplier;
        }
        // console.log(this.loggedinuser)
        if (this.loggedinuser._id == id) {
            this.viewedit = true;
        }
        else {
            this.viewedit = false;
        }
        this.SupplierSer.getSupplier(id).subscribe((res) => {
            // console.log(res);
            this.Supplier = res;
        });
    }
    saveInfo(id) {
        this.edit = !this.edit;
        // console.log(this.edit);
        if (this.edit != true) {
            this.activerouter.paramMap.subscribe((res) => {
                // console.log(res)
                this.SupplierSer.updateInfo(res.params.id, this.firstname, this.lastname, this.password, this.mobileNumber, this.dateOfBirth, this.email, this.address).subscribe((res) => {
                    // console.log(res);
                    this.Supplier = res;
                    this.router.navigateByUrl(''); // In implementation navigation goes to users page
                });
            });
        }
    }
}
ViewsupplierComponent.ɵfac = function ViewsupplierComponent_Factory(t) { return new (t || ViewsupplierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"])); };
ViewsupplierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewsupplierComponent, selectors: [["app-viewsupplier"]], decls: 7, vars: 2, consts: [[1, "container", "pb-5"], [1, "row"], [1, "img-container", "col-md-2", "mb-5"], ["src", "/assets/images/supplier.jpg", "alt", "Avatar"], [1, ""], [4, "ngIf"], ["type", "text", "readonly", "", 1, "mb-2", 3, "value"], ["type", "email", "readonly", "", 1, "mb-2", 3, "value"], ["type", "tel", "readonly", "", 1, "mb-2", 3, "value"], ["class", "mb-2", "type", "date", "readonly", "", 3, "value", 4, "ngIf"], ["class", "mb-2", "type", "text", "readonly", "", 3, "value", 4, "ngIf"], ["class", "mb-2", "type", "text", "placeholder", "Official Documents", "readonly", "", 4, "ngIf"], ["class", "btn btn-primary w-100 mt-4", 3, "click", 4, "ngIf"], ["type", "date", "readonly", "", 1, "mb-2", 3, "value"], ["type", "text", "placeholder", "Official Documents", "readonly", "", 1, "mb-2"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"], ["type", "text", "name", "firstname", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "name", "lastname", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "name", "username", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "email", "name", "email", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "password", "name", "password", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "name", "address", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "tel", "name", "mobileNumber", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "date", "name", "dateOfBirth", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Official Documents", 1, "mb-2"]], template: function ViewsupplierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewsupplierComponent_div_5_Template, 31, 16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewsupplierComponent_div_6_Template, 30, 16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Supplier != null && ctx.edit == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Supplier != null && ctx.edit == true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n  cursor: pointer;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3c3VwcGxpZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTs7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDUTs7RUFDSSwwQ0FBQTtBQUVaOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDUiIsImZpbGUiOiJ2aWV3c3VwcGxpZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEycHggI2VlZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICYubmctdG91Y2hlZCB7XHJcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODUsIDQwLCA0MCwgMC4zODQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmltZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "5UBU":
/*!****************************************************************!*\
  !*** ./src/app/pages/viewcompanies/viewcompanies.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewcompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcompaniesComponent", function() { return ViewcompaniesComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company/company.service */ "fyic");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ViewcompaniesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewcompaniesComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const company_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.viewCompany(company_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Name: ", company_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Email: ", company_r1.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mobile Number: ", company_r1.companyNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Address: ", company_r1.address, "");
} }
class ViewcompaniesComponent {
    constructor(router, activerouter, CompanySer) {
        this.router = router;
        this.activerouter = activerouter;
        this.CompanySer = CompanySer;
        this.companies = [];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
        this.companyusername = "";
    }
    ngOnInit() {
        this.getCompanies();
    }
    getCompanies(search = null) {
        this.CompanySer.getCompanies(search).subscribe((res) => {
            this.companies = res;
            // console.log(res);
            // console.log("USERS",this.companies)
        });
    }
    search() {
        this.getCompanies(this.companyusername);
    }
    viewCompany(id) {
        this.router.navigateByUrl('/viewcompany/' + id + "");
    }
}
ViewcompaniesComponent.ɵfac = function ViewcompaniesComponent_Factory(t) { return new (t || ViewcompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"])); };
ViewcompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewcompaniesComponent, selectors: [["app-viewcompanies"]], decls: 10, vars: 3, consts: [[1, "container"], [1, "text-center"], [1, "search", "mb-4"], [1, "d-flex"], [1, "w-100"], ["placeholder", "Search by company name", "type", "search", "id", "form1", 1, "form-control", "text-center", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "no-btn", 3, "click"], [3, "icon"], ["class", "card mb-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "mb-2", 3, "click"], [1, "card-body"], [1, "row"], [1, "img-container", "col-md-3"], ["src", "/assets/images/employee.jpg", "alt", "Avatar"], [1, "info", "col-md-9"], [1, "card-title"]], template: function ViewcompaniesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Current Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewcompaniesComponent_Template_input_ngModelChange_6_listener($event) { return ctx.companyusername = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewcompaniesComponent_Template_button_click_7_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ViewcompaniesComponent_div_9_Template, 14, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.companyusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companies);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".search[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 100%;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  align-self: center;\n  height: 100%;\n}\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.users[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 15px;\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3Y29tcGFuaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVSO0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFFSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUlBO0VBQ0ksZUFBQTtBQURKO0FBSUE7RUFDSSxVQUFBO0FBREo7QUFJQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURKO0FBRUk7RUFDSSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUFSO0FBQ1E7RUFDSSwyQ0FBQTtBQUNaO0FBSUE7O0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUdROztFQUNJLDBDQUFBO0FBQVoiLCJmaWxlIjoidmlld2NvbXBhbmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udXNlcnMge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDEwJSkgMHB4IDFweCA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDFweCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMnB4ICNlZWU7XHJcbiAgICAmLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTg1LCA0MCwgNDAsIDAuMzg0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "7pvJ":
/*!******************************************************************!*\
  !*** ./src/app/pages/vieworderstome/vieworderstome.component.ts ***!
  \******************************************************************/
/*! exports provided: VieworderstomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VieworderstomeComponent", function() { return VieworderstomeComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/supplier/supplier.service */ "1hLT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product/products.service */ "L0fj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_multiselect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap-multiselect */ "qdTh");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");











function VieworderstomeComponent_fa_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 14);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faMinus);
} }
function VieworderstomeComponent_fa_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 14);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faPlus);
} }
function VieworderstomeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VieworderstomeComponent_div_11_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.filterData.date.from = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VieworderstomeComponent_div_11_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.filterData.date.to = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.filterData.date.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.filterData.date.to);
} }
function VieworderstomeComponent_fa_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 14);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faMinus);
} }
function VieworderstomeComponent_fa_icon_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 14);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r4.faPlus);
} }
function VieworderstomeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-bootstrap-multiselect", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VieworderstomeComponent_div_17_Template_ngx_bootstrap_multiselect_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.filterData.products = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r5.products)("texts", ctx_r5.myTexts)("settings", ctx_r5.mySettings)("ngModel", ctx_r5.filterData.products);
} }
function VieworderstomeComponent_fa_icon_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 14);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r6.faMinus);
} }
function VieworderstomeComponent_fa_icon_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 14);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r7.faPlus);
} }
function VieworderstomeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VieworderstomeComponent_div_23_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.filterData.status.Pending = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VieworderstomeComponent_div_23_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r17.filterData.status["On Delivery"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " On Delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VieworderstomeComponent_div_23_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.filterData.status.Delivered = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Delivered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VieworderstomeComponent_div_23_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.filterData.status.Cancelled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VieworderstomeComponent_div_23_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.filterData.status.Confirmed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Confirmed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.filterData.status.Pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.filterData.status["On Delivery"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.filterData.status.Delivered);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.filterData.status.Cancelled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.filterData.status.Confirmed);
} }
function VieworderstomeComponent_ng_container_29_ng_template_5_div_1_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VieworderstomeComponent_ng_container_29_ng_template_5_div_1_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const product_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const order_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.changestatus("Confirmed", order_r21._id, product_r25.product._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Confirm Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VieworderstomeComponent_ng_container_29_ng_template_5_div_1_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VieworderstomeComponent_ng_container_29_ng_template_5_div_1_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const product_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const order_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.changestatus("Cancelled", order_r21._id, product_r25.product._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancel Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VieworderstomeComponent_ng_container_29_ng_template_5_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VieworderstomeComponent_ng_container_29_ng_template_5_div_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const product_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const order_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.changestatus("On Delivery", order_r21._id, product_r25.product._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "On Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VieworderstomeComponent_ng_container_29_ng_template_5_div_1_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VieworderstomeComponent_ng_container_29_ng_template_5_div_1_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const product_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const order_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.changestatus("Delivered", order_r21._id, product_r25.product._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VieworderstomeComponent_ng_container_29_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VieworderstomeComponent_ng_container_29_ng_template_5_div_1_Template_p_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const product_r25 = ctx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r46.viewproduct(product_r25.product._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Product Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Product Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, VieworderstomeComponent_ng_container_29_ng_template_5_div_1_button_13_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, VieworderstomeComponent_ng_container_29_ng_template_5_div_1_button_14_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, VieworderstomeComponent_ng_container_29_ng_template_5_div_1_button_15_Template, 2, 0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, VieworderstomeComponent_ng_container_29_ng_template_5_div_1_button_16_Template, 2, 0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Date Of Purchase:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VieworderstomeComponent_ng_container_29_ng_template_5_div_1_Template_p_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const order_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.viewuser(order_r21.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "User:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r25 = ctx.$implicit;
    const order_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r25.product.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r25.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r25.status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r25.status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r25.status == "Confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r25.status == "On Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r25.dateOfPurchase, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", order_r21.user.firstname, " ", order_r21.user.lastname, "");
} }
function VieworderstomeComponent_ng_container_29_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VieworderstomeComponent_ng_container_29_ng_template_5_div_1_Template, 25, 9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", order_r21.products);
} }
function VieworderstomeComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ngb-accordion", null, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-panel", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, VieworderstomeComponent_ng_container_29_ng_template_5_Template, 2, 1, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const order_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("title", "Order#: ", order_r21.ordernumber, "");
} }
class VieworderstomeComponent {
    constructor(SupplierServ, router, UserSer, ProductSer) {
        this.SupplierServ = SupplierServ;
        this.router = router;
        this.UserSer = UserSer;
        this.ProductSer = ProductSer;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
        this.users = [];
        this.products = [];
        this.filters = { purchasedate: false, user: false, product: false, status: false };
        // ["products.dateOfPurchase"]
        // ["products.product"]
        // ["products.status"]
        this.filterData = {
            date: {
                from: null,
                to: null
            },
            products: null,
            status: {
                Pending: true,
                Confirmed: true,
                Cancelled: true,
                Delivered: true,
                ["On Delivery"]: true,
            }
        };
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"];
        this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faMinus"];
        this.orders = [];
        // Settings configuration
        this.mySettings = {
            enableSearch: true,
            showCheckAll: true,
            showUncheckAll: true,
            maintainSelectionOrderInTitle: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-primary',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        };
        // Text configuration
        this.myTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            searchEmptyResult: 'Nothing found...',
            searchNoRenderText: 'Type in search box to see results...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
    }
    ngOnInit() {
        this.ViewOrder();
        this.viewproducts();
    }
    viewproducts() {
        this.ProductSer.getmyProducts().subscribe((res) => {
            this.products = res.map(el => ({
                id: el._id,
                name: el.productName
            }));
        });
    }
    viewuser(id) {
        this.router.navigateByUrl('viewuser/' + id);
    }
    applyFilter() {
        var _a;
        const query = {
            ["products.dateOfPurchase"]: this.filterData.date.from && this.filterData.date.to && {
                $gte: this.filterData.date.from || null,
                $lte: this.filterData.date.to || null
            },
            ["products.product"]: {
                $in: ((_a = this.filterData.products) === null || _a === void 0 ? void 0 : _a.map(product => product)) || null
            },
            $or: Object.keys(this.filterData.status).map(el => ({ ['products.status']: this.filterData.status[el] ? el : null })).filter(el => el['products.status']) || null
        };
        if (!query["products.product"].$in || query["products.product"].$in.length == 0)
            delete query["products.product"];
        if (!query.$or)
            delete query.$or;
        Object.keys(query).forEach(el => {
            if (!query[el])
                delete query[el];
        });
        this.ViewOrder(query);
    }
    clearFilter() {
        this.filterData = {
            date: {
                from: null,
                to: null
            },
            products: null,
            status: {
                Pending: true,
                Confirmed: true,
                Cancelled: true,
                Delivered: true,
                ["On Delivery"]: true,
            }
        };
        this.applyFilter();
    }
    ViewOrder(query = null) {
        this.SupplierServ.getmyorders(query).subscribe(res => {
            this.orders = res;
            // console.log(this.orders)
        });
    }
    togglefilter(type) {
        this.filters[type] = !this.filters[type];
    }
    viewproduct(id) {
        this.router.navigateByUrl('/viewproduct/' + id);
    }
    changestatus(status, orderid, productid) {
        this.UserSer.changeorderstatus(status, orderid, productid).subscribe(res => this.ViewOrder());
    }
}
VieworderstomeComponent.ɵfac = function VieworderstomeComponent_Factory(t) { return new (t || VieworderstomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"])); };
VieworderstomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VieworderstomeComponent, selectors: [["app-vieworderstome"]], decls: 30, vars: 10, consts: [[1, "container"], [1, "text-center"], [1, "search", "mb-4"], [1, "row"], [1, "col-md-4", "filter"], [1, "header", "d-flex", "align-items-center", "justify-content-between", "mb-2", 3, "click"], [3, "icon", 4, "ngIf"], ["class", "mb-4 flex-col", 4, "ngIf"], ["class", "info mb-4", 4, "ngIf"], ["class", "mb-2 pl-4", 4, "ngIf"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"], [1, "btn", "btn-primary", "w-100", "mt-3", 3, "click"], [1, "col-md-8"], [4, "ngFor", "ngForOf"], [3, "icon"], [1, "mb-4", "flex-col"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mr-2"], ["type", "date", "placeholder", "From", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "date", "placeholder", "To", 1, "mb-2", 3, "ngModel", "ngModelChange"], [1, "info", "mb-4"], [3, "options", "texts", "settings", "ngModel", "ngModelChange"], [1, "mb-2", "pl-4"], [1, "mb-2"], ["type", "checkbox", "value", "", "id", "pending", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "pending", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "Ondelivery", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "Ondelivery", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "Delivered", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "Delivered", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "Cancelled", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "Cancelled", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "Confirmed", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "Confirmed", 1, "form-check-label"], [1, "card", "mb-4", "orders", "text-center"], ["acc", "ngbAccordion"], ["id", "toggle-1", 3, "title"], ["ngbPanelContent", ""], [1, "product"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "col-md-4", "img-container"], ["src", "/assets/images/nails.png"], [1, "col-md-8", "text-left"], [1, "card-text", "text-left", "text_link", 3, "click"], [1, "card-text", "text-left"], ["class", " btn btn-primary text-right mx-2", 3, "click", 4, "ngIf"], ["class", " btn btn-primary text-right ", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "text-right", "mx-2", 3, "click"], [1, "btn", "btn-primary", "text-right", 3, "click"]], template: function VieworderstomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Your Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VieworderstomeComponent_Template_div_click_6_listener() { return ctx.togglefilter("purchasedate"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Purchase Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, VieworderstomeComponent_fa_icon_9_Template, 1, 1, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, VieworderstomeComponent_fa_icon_10_Template, 1, 1, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, VieworderstomeComponent_div_11_Template, 9, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VieworderstomeComponent_Template_div_click_12_listener() { return ctx.togglefilter("product"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, VieworderstomeComponent_fa_icon_15_Template, 1, 1, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, VieworderstomeComponent_fa_icon_16_Template, 1, 1, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, VieworderstomeComponent_div_17_Template, 2, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VieworderstomeComponent_Template_div_click_18_listener() { return ctx.togglefilter("status"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, VieworderstomeComponent_fa_icon_21_Template, 1, 1, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, VieworderstomeComponent_fa_icon_22_Template, 1, 1, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, VieworderstomeComponent_div_23_Template, 21, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VieworderstomeComponent_Template_button_click_24_listener() { return ctx.applyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Apply Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VieworderstomeComponent_Template_button_click_26_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Clear Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, VieworderstomeComponent_ng_container_29_Template, 7, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filters.purchasedate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.filters.purchasedate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filters.purchasedate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filters.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.filters.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filters.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filters.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.filters.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filters.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ngx_bootstrap_multiselect__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPanelContent"]], styles: [".orders[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\n.orders.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n.text_link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.text_link[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.search[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 100%;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  align-self: center;\n  height: 100%;\n}\n.orders[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.filter[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3b3JkZXJzdG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQ0o7QUFDUTtFQUNJLDBDQUFBO0FBQ1o7QUFJQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtBQURKO0FBRUk7RUFDSSxZQUFBO0FBQVI7QUFJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBREo7QUFFSTtFQUNJLFdBQUE7QUFBUjtBQUlBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFESjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFSO0FBSUE7RUFDSSxlQUFBO0FBREo7QUFJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQURKO0FBSUE7RUFDSSxlQUFBO0FBREo7QUFJQTs7RUFHSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBRko7QUFJUTs7RUFDSSwwQ0FBQTtBQURaIiwiZmlsZSI6InZpZXdvcmRlcnN0b21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVycyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMnB4ICNlZWU7XHJcbiAgICAmLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTg1LCA0MCwgNDAsIDAuMzg0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0X2xpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ub3JkZXJzIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0LFxyXG5zZWxlY3Qge1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTJweCAjZWVlO1xyXG4gICAgJi5uZy10b3VjaGVkIHtcclxuICAgICAgICAmLm5nLWludmFsaWQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NSwgNDAsIDQwLCAwLjM4NCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "8HFH":
/*!****************************************************************!*\
  !*** ./src/app/pages/createcompany/createcompany.component.ts ***!
  \****************************************************************/
/*! exports provided: CreatecompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecompanyComponent", function() { return CreatecompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/company/company.service */ "fyic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class CreatecompanyComponent {
    constructor(CompanyServ, router) {
        this.CompanyServ = CompanyServ;
        this.router = router;
        this.name = "";
        this.email = "";
        this.address = "";
        this.number = "";
        this.taxNumber = "";
        this.logo = "";
        this.err = null;
    }
    ngOnInit() {
    }
    createCompany() {
        this.CompanyServ.createCompany(this.name, this.email, this.address, this.number, this.taxNumber, this.logo).subscribe((res) => {
            // console.log(res)
            this.router.navigateByUrl('');
        }, err => {
            var _a;
            this.err = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.err) || "Something went wrong";
        });
    }
}
CreatecompanyComponent.ɵfac = function CreatecompanyComponent_Factory(t) { return new (t || CreatecompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CreatecompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatecompanyComponent, selectors: [["app-createcompany"]], decls: 22, vars: 6, consts: [[1, "container", "pb-5"], [1, ""], ["type", "text", "placeholder", "Name", "name", "name", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Company Email", "name", "email", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Company Address", "name", "address", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "tel", "placeholder", "Company Number", "name", "number", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Tax Number", "name", "taxNumber", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Company Logo", "name", "logo", 1, "mb-2", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"]], template: function CreatecompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyComponent_Template_input_ngModelChange_4_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Company Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyComponent_Template_input_ngModelChange_7_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Company Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyComponent_Template_input_ngModelChange_10_listener($event) { return ctx.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Company Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyComponent_Template_input_ngModelChange_13_listener($event) { return ctx.number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tax Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyComponent_Template_input_ngModelChange_16_listener($event) { return ctx.taxNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Company Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyComponent_Template_input_ngModelChange_19_listener($event) { return ctx.logo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatecompanyComponent_Template_button_click_20_listener() { return ctx.createCompany(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Create Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.taxNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.logo);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGVjb21wYW55LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7O0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDUTs7RUFDSSwwQ0FBQTtBQUVaIiwiZmlsZSI6ImNyZWF0ZWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEycHggI2VlZTtcclxuICAgICYubmctdG91Y2hlZCB7XHJcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODUsIDQwLCA0MCwgMC4zODQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthService {
    constructor(http, Router) {
        this.http = http;
        this.Router = Router;
        this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}`;
        this.authState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    getToken() {
        var _a;
        const token = localStorage.getItem("currentuser") && ((_a = JSON.parse(localStorage.getItem("currentuser"))) === null || _a === void 0 ? void 0 : _a.token);
        return token ? `Bearer ${token}` : null;
    }
    checkUser() {
        return localStorage.getItem("currentuser");
    }
    login(email, password, type = "user") {
        const url = `${this.baseUrl}/${type}/login`;
        return this.http.post(url, {
            email,
            password
        });
    }
    setToken(data) {
        localStorage.setItem("currentuser", JSON.stringify(data));
    }
    logout(type) {
        const url = `${this.baseUrl}/${type}/logout`;
        // console.log(url)
        return this.http.post(url, {}).subscribe(res => {
            localStorage.removeItem("currentuser");
            localStorage.removeItem("type");
            this.authState.emit("Logout");
            this.Router.navigateByUrl('/');
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: "http://localhost:8080/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BGs2":
/*!*************************************************!*\
  !*** ./src/app/interciptors/jwt.interceptor.ts ***!
  \*************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class JwtInterceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isRefreshingToken = false;
        this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    intercept(request, next) {
        // const headersInfo = {
        //   'Content-Type': 'application/json',
        //   'Authorization': token
        // }
        // if(!headersInfo.Authorization) delete headersInfo.Authorization;
        // const headers = new Headers(headersInfo);
        const token = this.authService.getToken();
        return next.handle(request.clone({
            headers: request.headers.set("Authorization", `${token}`)
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                switch (err.status) {
                    case 401:
                        this.authService.logout(localStorage.getItem("type"));
                        this.router.navigate(['/']);
                    default:
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
                }
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }
        }));
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ "BIsl":
/*!**********************************************************!*\
  !*** ./src/app/pages/createuser/createuser.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateuserComponent", function() { return CreateuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class CreateuserComponent {
    constructor(UserServ, router) {
        this.UserServ = UserServ;
        this.router = router;
        this.firstname = "";
        this.lastname = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.mobileNumber = "";
        this.dateOfBirth = "";
        this.nationalID = "";
        this.employeeLevel = "";
        this.limit = 0;
        this.wallet = 0;
        this.image = "";
        this.err = null;
    }
    ngOnInit() {
    }
    createUser() {
        this.UserServ.createUser(this.firstname, this.lastname, this.username, this.email, this.password, this.mobileNumber, this.dateOfBirth, this.nationalID, "Employee", this.limit, this.wallet, this.image).subscribe((res) => {
            // console.log(res)
            this.router.navigateByUrl('');
        }, err => {
            var _a;
            this.err = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.err) || "Something went wrong";
        });
    }
}
CreateuserComponent.ɵfac = function CreateuserComponent_Factory(t) { return new (t || CreateuserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CreateuserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateuserComponent, selectors: [["app-createuser"]], decls: 37, vars: 10, consts: [[1, "container", "pb-5"], [1, ""], ["type", "text", "placeholder", "First Name", "name", "firstname", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last Name", "name", "lastname", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Username", "name", "username", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "User Email", "name", "email", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "name", "password", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "tel", "placeholder", "Moble Number", "name", "mobileNumber", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "date", "placeholder", "Date Of Birth", "name", "dateOfBirth", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "National ID", "name", "nationalID", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Employee Level", "value", "Employee", "readonly", "", 1, "mb-2"], ["type", "number", "placeholder", "Employee Limit", "name", "wallet", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Personal Image", "name", "image", 1, "mb-2", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"]], template: function CreateuserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateuserComponent_Template_input_ngModelChange_4_listener($event) { return ctx.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateuserComponent_Template_input_ngModelChange_7_listener($event) { return ctx.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateuserComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateuserComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateuserComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mobile Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateuserComponent_Template_input_ngModelChange_19_listener($event) { return ctx.mobileNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateuserComponent_Template_input_ngModelChange_22_listener($event) { return ctx.dateOfBirth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "National ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateuserComponent_Template_input_ngModelChange_25_listener($event) { return ctx.nationalID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "User Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Employee Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateuserComponent_Template_input_ngModelChange_31_listener($event) { return ctx.wallet = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Personal Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateuserComponent_Template_input_ngModelChange_34_listener($event) { return ctx.image = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateuserComponent_Template_button_click_35_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Create Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateOfBirth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nationalID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.wallet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.image);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGV1c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7O0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDUTs7RUFDSSwwQ0FBQTtBQUVaIiwiZmlsZSI6ImNyZWF0ZXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEycHggI2VlZTtcclxuICAgICYubmctdG91Y2hlZCB7XHJcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODUsIDQwLCA0MCwgMC4zODQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "CFL1":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl}/user`;
        this.baseorderUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl}/order`;
        this.baseproductUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl}/product`;
    }
    getUser(id) {
        return this.http.get(this.baseUrl + '/viewuser/' + id);
    }
    getUsers(search = null) {
        return this.http.get(this.baseUrl + `/users${search ? `?search=${search}` : ''}`);
    }
    getallUsers(search = null, query = null) {
        return this.http.get(this.baseUrl + `/allusers${search ? `?search=${search}` : ''}${query ? (`${search ? '&' : '?'}query=${JSON.stringify(query)}`) : ''}`);
    }
    createUser(firstname, lastname, username, email, password, mobileNumber, dateOfBirth, nationalID, employeeLevel, limit, wallet, image) {
        const url = `${this.baseUrl}/registeremployee`;
        return this.http.post(url, {
            firstname,
            lastname,
            username,
            email,
            password,
            mobileNumber,
            dateOfBirth,
            nationalID,
            employeeLevel,
            limit,
            wallet,
            image
        });
    }
    createManager(firstname, lastname, username, email, password, mobileNumber, dateOfBirth, nationalID, employeeLevel, image) {
        const url = `${this.baseUrl}/registermanager`;
        return this.http.post(url, {
            firstname,
            lastname,
            username,
            email,
            password,
            mobileNumber,
            dateOfBirth,
            nationalID,
            employeeLevel,
            image
        });
    }
    createCompanyAdmin(firstname, lastname, username, email, password, mobileNumber, dateOfBirth, nationalID, employeeLevel, image, company) {
        const url = `${this.baseUrl}/registerCompanyAdmin`;
        return this.http.post(url, {
            firstname,
            lastname,
            username,
            email,
            password,
            mobileNumber,
            dateOfBirth,
            nationalID,
            employeeLevel,
            image,
            company
        });
    }
    createAdmin(firstname, lastname, username, email, password, mobileNumber, dateOfBirth, nationalID, employeeLevel, image) {
        const url = `${this.baseUrl}/registerAdmin`;
        return this.http.post(url, {
            firstname,
            lastname,
            username,
            email,
            password,
            mobileNumber,
            dateOfBirth,
            nationalID,
            employeeLevel,
            image
        });
    }
    editLimit(userid, limit) {
        const url = `${this.baseUrl}/setemployeelimit/` + userid;
        return this.http.patch(url, {
            limit
        });
    }
    increasewallet(userid, wallet) {
        const url = `${this.baseUrl}/setemployeewallet/` + userid;
        return this.http.patch(url, {
            wallet
        });
    }
    setmywallet(amount) {
        const url = `${this.baseUrl}/setmywallet`;
        return this.http.patch(url, {
            amount
        });
    }
    delete(userid) {
        const url = `${this.baseUrl}/removeEmployee/` + userid;
        return this.http.patch(url, {});
    }
    updateInfo(id, firstname, lastname, password, mobileNumber, dateOfBirth, email) {
        const url = `${this.baseUrl}/updatemyinfo/`;
        this.user = this.http.get(this.baseUrl + '/viewuser/' + id);
        ;
        if (firstname == "")
            firstname = this.user.firstname;
        if (lastname == "")
            lastname = this.user.lastname;
        if (password == "")
            password = this.user.password;
        if (mobileNumber == "")
            mobileNumber = this.user.mobileNumber;
        if (dateOfBirth == "")
            dateOfBirth = this.user.dateOfBirth;
        if (email == "")
            email = this.user.email;
        // if(logo=="")
        // logo = this.user.logo;
        return this.http.patch(url, {
            firstname,
            lastname,
            password,
            mobileNumber,
            dateOfBirth,
            email
            // logo,
        });
    }
    AddtoCart(productid, quantity, name, price, logo, supplier) {
        const url = `${this.baseUrl}/addtocart`;
        return this.http.patch(url, {
            productid,
            quantity,
            name,
            price,
            logo,
            supplier
        });
    }
    checkout(order) {
        const url = `${this.baseorderUrl}/createorder`;
        return this.http.post(url, Object.assign(Object.assign({}, order), { dateOfPurchase: new Date().toISOString() }));
    }
    clearcart() {
        const url = `${this.baseUrl}/updatemyinfo/`;
        return this.http.patch(url, {
            cart: []
            // logo,
        });
    }
    getmyorders(query = null) {
        const url = `${this.baseorderUrl}/myordersemployee${query ? `?query=${JSON.stringify(query)}` : ''}`;
        return this.http.get(url);
    }
    changeorderstatus(status, orderid, productid) {
        // console.log("CHANGE ORDER to ",status)
        const url = `${this.baseorderUrl}/changepartialorderstatus/` + orderid;
        return this.http.patch(url, {
            status,
            product: productid
            // logo,
        });
    }
    decreaseproductquantity(products) {
        const url = `${this.baseproductUrl}/decreaseproductsquantity`;
        return this.http.patch(url, {
            products
        });
    }
    decreasewalletandproductquantity(orderprice, products) {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setmywallet(orderprice).subscribe(res => {
            this.decreaseproductquantity(products).subscribe(res => {
                subject.next(res);
            });
        });
        return subject;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "F0TP":
/*!************************************************************!*\
  !*** ./src/app/pages/viewproduct/viewproduct.component.ts ***!
  \************************************************************/
/*! exports provided: ViewproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewproductComponent", function() { return ViewproductComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product/products.service */ "L0fj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function ViewproductComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewproductComponent_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.decrementQuanity(ctx_r2.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewproductComponent_div_22_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.product.customerquantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewproductComponent_div_22_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.incrementQuanity(ctx_r5.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faMinus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.product.customerquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faPlus);
} }
function ViewproductComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewproductComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.addtoCart(ctx_r6.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
class ViewproductComponent {
    constructor(router, auth, UserSer, activerouter, ProductSer) {
        this.router = router;
        this.auth = auth;
        this.UserSer = UserSer;
        this.activerouter = activerouter;
        this.ProductSer = ProductSer;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"];
        this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faMinus"];
        this.err = null;
        this.user = null;
        this.type = "";
    }
    ngOnInit() {
        this.activerouter.paramMap.subscribe((res) => {
            // console.log(res)
            this.ProductSer.viewProduct(res.params.id).subscribe((res) => {
                // console.log(res)
                this.product = Object.assign(Object.assign({}, res), { customerquantity: 1 });
            }, err => {
                var _a;
                this.err = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.err) || "Something went wrong";
            });
        });
        this.user = this.auth.checkUser();
        this.type = localStorage.getItem("type") ? JSON.parse(localStorage.getItem("type")) : null;
        this.auth.authState.subscribe(state => {
            this.user = this.auth.checkUser();
            this.type = localStorage.getItem("type") ? JSON.parse(localStorage.getItem("type")) : null;
        });
    }
    addtoCart(product) {
        if (product.customerquantity <= product.quantity && product.customerquantity > 0) {
            const price = this.getprice();
            this.UserSer.AddtoCart(product._id, product.customerquantity, product.productName, price, product.productLogo, product.supplier).subscribe(res => {
                alert("Product added to cart");
            }, err => {
                alert("Something went wrong");
            });
        }
        if (product.customerquantity > product.quantity) {
            alert("You've exceeded the available quanity fro this product");
        }
        if (product.customerquantity <= 0) {
            alert("You can't order for 0 or less");
        }
    }
    incrementQuanity(product) {
        if (!product.customerquantity) {
            product.customerquantity = 0;
        }
        if (product.customerquantity < product.quantity)
            product.customerquantity += 1;
    }
    decrementQuanity(product) {
        if (!product.customerquantity) {
            product.customerquantity = 0;
        }
        if (product.customerquantity > 0)
            product.customerquantity -= 1;
    }
    getprice() {
        var _a, _b, _c;
        let price = 0;
        (_a = this.product) === null || _a === void 0 ? void 0 : _a.priceRange.forEach((element, index) => {
            var _a, _b, _c, _d;
            if (index == ((_a = this.product) === null || _a === void 0 ? void 0 : _a.priceRange.length) - 1 && ((_b = this.product) === null || _b === void 0 ? void 0 : _b.customerquantity) >= element.minquantity) {
                price = element.priceofRange;
                return price;
            }
            else {
                if (((_c = this.product) === null || _c === void 0 ? void 0 : _c.customerquantity) >= element.minquantity && ((_d = this.product) === null || _d === void 0 ? void 0 : _d.customerquantity) <= element.maxquantity) {
                    price = element.priceofRange;
                    return price;
                }
            }
        });
        if (price == 0 && ((_b = this.product) === null || _b === void 0 ? void 0 : _b.priceRange.length) > 0) {
            price = (_c = this.product) === null || _c === void 0 ? void 0 : _c.priceRange[0].priceofRange;
        }
        return price;
    }
}
ViewproductComponent.ɵfac = function ViewproductComponent_Factory(t) { return new (t || ViewproductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"])); };
ViewproductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewproductComponent, selectors: [["app-viewproduct"]], decls: 24, vars: 8, consts: [[1, "container"], [1, "row"], [1, "col-md-6"], [1, "img-container"], ["src", "/assets/images/nails.png"], [1, "col-md-6", "description"], [1, "text-muted", "mt-3"], [1, "mb-2"], [1, "mb-5"], [1, "mb-3"], ["class", "quanity mb-2", 4, "ngIf"], ["class", "btn btn-primary w-100 mb-5", 3, "click", 4, "ngIf"], [1, "quanity", "mb-2"], [1, "minus", 3, "click"], [3, "icon"], ["type", "number", "min", "1", "value", "0", 3, "ngModel", "ngModelChange"], [1, "plus", 3, "click"], [1, "btn", "btn-primary", "w-100", "mb-5", 3, "click"]], template: function ViewproductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Product Specs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ViewproductComponent_div_22_Template, 6, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ViewproductComponent_button_23_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.product == null ? null : ctx.product.specs, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.getprice(), " EGP/Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user != null && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.type) == "user" && (ctx.user == null ? null : ctx.user.user == null ? null : ctx.user.user.employeeLevel) != "Admin");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: [".img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n  width: 40px;\n  background-color: #F0F3F5;\n  color: #F56A00;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  padding: 10px;\n}\nbutton.plus[_ngcontent-%COMP%] {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\nbutton.minus[_ngcontent-%COMP%] {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #DADEE1;\n  color: #F56A00;\n}\n.quanity[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  border-radius: 4px;\n  display: flex;\n}\n.quanity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  text-align: center;\n  width: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n}\n.quanity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .quanity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n}\n.description[_ngcontent-%COMP%] {\n  background-color: #FAFBFC;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3cHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7QUFFUjtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUVKO0FBREk7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0FBR1I7QUFESTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUFHUjtBQURJO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBR1I7QUFBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBR0o7QUFGSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0FBSVI7QUFIUTtFQUVJLHdCQUFBO0VBQ0EsMEJBQUE7QUFJWjtBQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUdBIiwiZmlsZSI6InZpZXdwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjNGNTtcclxuICAgIGNvbG9yOiAjRjU2QTAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgICYucGx1cyB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgJi5taW51cyB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEQURFRTE7XHJcbiAgICAgICAgY29sb3I6ICNGNTZBMDA7XHJcbiAgICB9XHJcbn1cclxuLnF1YW5pdHkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgICAgICAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICAgICAgICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmRlc2NyaXB0aW9ue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNGQUZCRkM7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "JZky":
/*!****************************************************************!*\
  !*** ./src/app/pages/viewsuppliers/viewsuppliers.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewsuppliersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsuppliersComponent", function() { return ViewsuppliersComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/supplier/supplier.service */ "1hLT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ViewsuppliersComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewsuppliersComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const supplier_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.viewSupplier(supplier_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplier_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Name: ", supplier_r1.firstname, " ", supplier_r1.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Username: ", supplier_r1.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Email: ", supplier_r1.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mobile Number: ", supplier_r1.mobileNumber, "");
} }
class ViewsuppliersComponent {
    constructor(router, activerouter, SupplierSer) {
        this.router = router;
        this.activerouter = activerouter;
        this.SupplierSer = SupplierSer;
        this.suppliers = [];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
        this.supplierusername = "";
    }
    ngOnInit() {
        this.getSuppliers();
    }
    getSuppliers(search = null) {
        this.SupplierSer.getSuppliers(search).subscribe((res) => {
            this.suppliers = res;
            // console.log(res);
            // console.log("SUPPLIERS", this.suppliers)
        });
    }
    viewSupplier(id) {
        this.router.navigateByUrl('/viewsupplier/' + id + "");
    }
    search() {
        this.getSuppliers(this.supplierusername);
    }
}
ViewsuppliersComponent.ɵfac = function ViewsuppliersComponent_Factory(t) { return new (t || ViewsuppliersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"])); };
ViewsuppliersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewsuppliersComponent, selectors: [["app-viewsuppliers"]], decls: 10, vars: 3, consts: [[1, "container"], [1, "text-center"], [1, "search", "mb-4"], [1, "d-flex"], [1, "w-100"], ["placeholder", "Search by username", "type", "search", "id", "form1", 1, "form-control", "text-center", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "no-btn", 3, "click"], [3, "icon"], ["class", "card mb-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "mb-2", 3, "click"], [1, "card-body"], [1, "row"], [1, "img-container", "col-md-3"], ["src", "/assets/images/employee.jpg", "alt", "Avatar"], [1, "info", "col-md-9"], [1, "card-title"]], template: function ViewsuppliersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Current Suppliers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewsuppliersComponent_Template_input_ngModelChange_6_listener($event) { return ctx.supplierusername = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewsuppliersComponent_Template_button_click_7_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ViewsuppliersComponent_div_9_Template, 14, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.supplierusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.suppliers);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n}\n.search[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 100%;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  align-self: center;\n  height: 100%;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.users[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 15px;\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3c3VwcGxpZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFKO0FBRUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQVI7QUFJQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBREo7QUFFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUlBO0VBQ0ksZUFBQTtBQURKO0FBSUE7RUFDSSxVQUFBO0FBREo7QUFJQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURKO0FBRUk7RUFDSSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUFSO0FBQ1E7RUFDSSwyQ0FBQTtBQUNaO0FBSUE7O0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUdROztFQUNJLDBDQUFBO0FBQVoiLCJmaWxlIjoidmlld3N1cHBsaWVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udXNlcnMge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDEwJSkgMHB4IDFweCA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDFweCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMnB4ICNlZWU7XHJcbiAgICAmLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTg1LCA0MCwgNDAsIDAuMzg0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Jlyp":
/*!**********************************************************!*\
  !*** ./src/app/pages/vieworders/vieworders.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewordersComponent", function() { return ViewordersComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/supplier/supplier.service */ "1hLT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap-multiselect */ "qdTh");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");










function ViewordersComponent_fa_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faMinus);
} }
function ViewordersComponent_fa_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faPlus);
} }
function ViewordersComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewordersComponent_div_10_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.filterData.date.from = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewordersComponent_div_10_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.filterData.date.to = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.filterData.date.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.filterData.date.to);
} }
function ViewordersComponent_fa_icon_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faMinus);
} }
function ViewordersComponent_fa_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r4.faPlus);
} }
function ViewordersComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-bootstrap-multiselect", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewordersComponent_div_16_Template_ngx_bootstrap_multiselect_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.filterData.suppliers = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r5.suppliers)("texts", ctx_r5.myTexts)("settings", ctx_r5.mySettings)("ngModel", ctx_r5.filterData.suppliers);
} }
function ViewordersComponent_fa_icon_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r6.faMinus);
} }
function ViewordersComponent_fa_icon_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r7.faPlus);
} }
function ViewordersComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewordersComponent_div_22_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.filterData.status.Pending = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewordersComponent_div_22_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r17.filterData.status["On Delivery"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " On Delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewordersComponent_div_22_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.filterData.status.Delivered = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Delivered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewordersComponent_div_22_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.filterData.status.Cancelled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewordersComponent_div_22_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.filterData.status.Confirmed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Confirmed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.filterData.status.Pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.filterData.status["On Delivery"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.filterData.status.Delivered);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.filterData.status.Cancelled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.filterData.status.Confirmed);
} }
function ViewordersComponent_ng_container_28_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewordersComponent_ng_container_28_ng_template_5_div_1_Template_p_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const product_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r26.viewproduct(product_r25.product._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Product Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Product Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Date Of Purchase:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewordersComponent_ng_container_28_ng_template_5_div_1_Template_p_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const product_r25 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r28.viewsupplier(product_r25.supplier._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Supplier:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r25.product.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r25.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r25.dateOfPurchase, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", product_r25.supplier.firstname, " ", product_r25.supplier.lastname, "");
} }
function ViewordersComponent_ng_container_28_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewordersComponent_ng_container_28_ng_template_5_div_1_Template, 21, 5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", order_r21.products);
} }
function ViewordersComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ngb-accordion", null, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-panel", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ViewordersComponent_ng_container_28_ng_template_5_Template, 2, 1, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const order_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("title", "Order#: ", order_r21.ordernumber, "");
} }
class ViewordersComponent {
    constructor(UserServ, SupllierServ, router) {
        this.UserServ = UserServ;
        this.SupllierServ = SupllierServ;
        this.router = router;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
        this.suppliers = [];
        this.categories = [];
        this.filters = { purchasedate: false, supplier: false, category: false, status: false };
        this.filterData = {
            date: {
                from: null,
                to: null
            },
            suppliers: null,
            status: {
                Pending: true,
                Confirmed: true,
                Cancelled: true,
                Delivered: true,
                ["On Delivery"]: true,
            }
        };
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"];
        this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faMinus"];
        this.orders = [];
        // Settings configuration
        this.mySettings = {
            enableSearch: true,
            showCheckAll: true,
            showUncheckAll: true,
            maintainSelectionOrderInTitle: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-primary',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        };
        // Text configuration
        this.myTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            searchEmptyResult: 'Nothing found...',
            searchNoRenderText: 'Type in search box to see results...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
    }
    ngOnInit() {
        this.ViewOrder();
        this.ViewSuppliers();
        this.categories = [
            { id: 1, name: 'Mechanical' },
            { id: 2, name: 'Electrical' },
            { id: 3, name: 'Hardware' },
        ];
    }
    applyFilter() {
        var _a;
        const query = {
            ["products.dateOfPurchase"]: this.filterData.date.from && this.filterData.date.to && {
                $gte: this.filterData.date.from || null,
                $lte: this.filterData.date.to || null
            },
            ["products.supplier"]: {
                $in: ((_a = this.filterData.suppliers) === null || _a === void 0 ? void 0 : _a.map(product => product)) || null
            },
            $or: Object.keys(this.filterData.status).map(el => ({ ['products.status']: this.filterData.status[el] ? el : null })).filter(el => el['products.status']) || null
        };
        if (!query["products.supplier"].$in || query["products.supplier"].$in.length == 0)
            delete query["products.supplier"];
        if (!query.$or)
            delete query.$or;
        Object.keys(query).forEach(el => {
            if (!query[el])
                delete query[el];
        });
        this.ViewOrder(query);
    }
    clearFilter() {
        this.filterData = {
            date: {
                from: null,
                to: null
            },
            suppliers: null,
            status: {
                Pending: true,
                Confirmed: true,
                Cancelled: true,
                Delivered: true,
                ["On Delivery"]: true,
            }
        };
        this.applyFilter();
    }
    ViewSuppliers() {
        this.SupllierServ.getSuppliers(null).subscribe((res) => {
            this.suppliers = res.map(el => ({
                id: el._id,
                name: el.companyName
            }));
        });
    }
    viewproduct(id) {
        this.router.navigateByUrl('viewproduct/' + id);
    }
    viewsupplier(id) {
        this.router.navigateByUrl('viewsupplier/' + id);
    }
    ViewOrder(query = null) {
        this.UserServ.getmyorders(query).subscribe(res => {
            this.orders = res;
        });
    }
    togglefilter(type) {
        this.filters[type] = !this.filters[type];
    }
}
ViewordersComponent.ɵfac = function ViewordersComponent_Factory(t) { return new (t || ViewordersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ViewordersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewordersComponent, selectors: [["app-vieworders"]], decls: 29, vars: 10, consts: [[1, "container"], [1, "text-center"], [1, "row"], [1, "col-md-4", "filter"], [1, "header", "d-flex", "align-items-center", "justify-content-between", "mb-2", 3, "click"], [3, "icon", 4, "ngIf"], ["class", "mb-4 flex-col", 4, "ngIf"], ["class", "info mb-4", 4, "ngIf"], ["class", "mb-2 pl-4", 4, "ngIf"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"], [1, "btn", "btn-primary", "w-100", "mt-3", 3, "click"], [1, "col-md-8"], [4, "ngFor", "ngForOf"], [3, "icon"], [1, "mb-4", "flex-col"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mr-2"], ["type", "date", "placeholder", "From", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "date", "placeholder", "To", 1, "mb-2", 3, "ngModel", "ngModelChange"], [1, "info", "mb-4"], [3, "options", "texts", "settings", "ngModel", "ngModelChange"], [1, "mb-2", "pl-4"], [1, "mb-2"], ["type", "checkbox", "value", "", "id", "pending", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "pending", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "Ondelivery", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "Ondelivery", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "Delivered", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "Delivered", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "Cancelled", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "Cancelled", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "Confirmed", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "Confirmed", 1, "form-check-label"], [1, "card", "mb-4", "orders", "text-center"], ["acc", "ngbAccordion"], ["id", "toggle-1", 3, "title"], ["ngbPanelContent", ""], [1, "product"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "col-md-4", "img-container"], ["src", "/assets/images/nails.png"], [1, "card-text", "text-left", "text_link", 3, "click"], [1, "card-text", "text-left"]], template: function ViewordersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Your Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewordersComponent_Template_div_click_5_listener() { return ctx.togglefilter("purchasedate"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Purchase Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ViewordersComponent_fa_icon_8_Template, 1, 1, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ViewordersComponent_fa_icon_9_Template, 1, 1, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ViewordersComponent_div_10_Template, 9, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewordersComponent_Template_div_click_11_listener() { return ctx.togglefilter("supplier"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ViewordersComponent_fa_icon_14_Template, 1, 1, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ViewordersComponent_fa_icon_15_Template, 1, 1, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ViewordersComponent_div_16_Template, 2, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewordersComponent_Template_div_click_17_listener() { return ctx.togglefilter("status"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ViewordersComponent_fa_icon_20_Template, 1, 1, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ViewordersComponent_fa_icon_21_Template, 1, 1, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ViewordersComponent_div_22_Template, 21, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewordersComponent_Template_button_click_23_listener() { return ctx.applyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Apply Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewordersComponent_Template_button_click_25_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Clear Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ViewordersComponent_ng_container_28_Template, 7, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filters.purchasedate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.filters.purchasedate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filters.purchasedate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filters.supplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.filters.supplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filters.supplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filters.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.filters.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filters.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_bootstrap_multiselect__WEBPACK_IMPORTED_MODULE_8__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPanelContent"]], styles: [".orders[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\n.orders.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n.text_link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.text_link[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.search[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 100%;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  align-self: center;\n  height: 100%;\n}\n.orders[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.filter[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3b3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUNRO0VBQ0ksMENBQUE7QUFDWjtBQUlBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FBREo7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUlBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFESjtBQUVJO0VBQ0ksV0FBQTtBQUFSO0FBSUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQURKO0FBRUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQVI7QUFJQTtFQUNJLGVBQUE7QUFESjtBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBREo7QUFJQTtFQUNJLGVBQUE7QUFESjtBQUlBOztFQUdJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFGSjtBQUlROztFQUNJLDBDQUFBO0FBRFoiLCJmaWxlIjoidmlld29yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlcnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTJweCAjZWVlO1xyXG4gICAgJi5uZy10b3VjaGVkIHtcclxuICAgICAgICAmLm5nLWludmFsaWQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NSwgNDAsIDQwLCAwLjM4NCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dF9saW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLm9yZGVycyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0IHtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEycHggI2VlZTtcclxuICAgICYubmctdG91Y2hlZCB7XHJcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODUsIDQwLCA0MCwgMC4zODQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "L0fj":
/*!******************************************************!*\
  !*** ./src/app/services/product/products.service.ts ***!
  \******************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl}/product`;
    }
    getProducts(query = {}) {
        return this.http.post(this.baseUrl + "/getall", query);
    }
    getmyProducts() {
        return this.http.get(this.baseUrl + '/viewmyproducts');
    }
    createProduct(supplier, productName, description, specs, priceRange, quantity, category, photoLinks, Subcategory) {
        const url = `${this.baseUrl}/create`;
        // console.log("supplier")
        // console.log(supplier)
        return this.http.post(url, {
            supplier,
            productName,
            description,
            specs,
            priceRange,
            quantity,
            category,
            photoLinks,
            Subcategory
        });
    }
    viewProduct(id) {
        return this.http.get(this.baseUrl + '/viewproduct/' + id);
    }
    removeproduct(id) {
        const url = `${this.baseUrl}/removeProduct/` + id;
        return this.http.patch(url, {});
    }
    editproductamount(id, amount) {
        const url = `${this.baseUrl}/editmyproduct/` + id;
        return this.http.patch(url, {
            quantity: amount
        });
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ObfR":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ "g8H4");
/* harmony import */ var ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-simple-sidebar */ "0EGK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");











function NavbarComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.toggleSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r0.faBars);
} }
function NavbarComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Start Shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.Login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.ViewProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r3.faUser);
} }
function NavbarComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.viewCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { opacity: a0 }; };
const _c1 = function (a0) { return [a0]; };
class NavbarComponent {
    constructor(router, modalService, authServ, ngSimpleSidebarService) {
        this.router = router;
        this.modalService = modalService;
        this.authServ = authServ;
        this.ngSimpleSidebarService = ngSimpleSidebarService;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
        this.faCartPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCartPlus"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUser"];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBars"];
        this.user = null;
        this.level = "";
        this.productname = "";
        this.currentuser = null;
        this.type = "";
        this.sidebarItems = [];
        this.sidebarOpened = false;
    }
    ngOnInit() {
        this.user = this.authServ.checkUser();
        this.type = localStorage.getItem("type");
        // console.log(this.type)
        this.authServ.authState.subscribe(state => {
            this.user = this.authServ.checkUser();
            this.type = localStorage.getItem("type");
            this.initSideNav();
        });
        // init side nav when logged in
        this.initSideNav();
    }
    initSideNav() {
        var _a, _b;
        // console.log("INNN")
        if (this.type == "user" && ((_a = JSON.parse(this.user)) === null || _a === void 0 ? void 0 : _a.user)) {
            this.currentuser = JSON.parse(this.user).user;
            this.level = this.currentuser.employeeLevel;
            if (this.level == "Admin") {
                this.sidebarItems = [
                    {
                        name: 'Welcome',
                        icon: 'las la-home',
                        routerLink: [''],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'About',
                        icon: 'las la-address-book',
                        routerLink: ['/about'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View Users',
                        icon: 'las la-users',
                        routerLink: ['/viewusers'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View Suppliers',
                        icon: 'las la-users',
                        routerLink: ['/viewsuppliers'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View Companies',
                        icon: 'las la-building',
                        routerLink: ['/viewcompanies'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'Create Company Admin',
                        icon: 'las la-plus-circle',
                        routerLink: ['/createcompanyadmin'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'Create Admin',
                        icon: 'las la-plus-circle',
                        routerLink: ['/createadmin'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'Create Supplier',
                        icon: 'las la-plus-circle',
                        routerLink: ['/createsupplier'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'Create Company',
                        icon: 'las la-plus-circle',
                        routerLink: ['/createcompany'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'Logout',
                        icon: 'las la-external-link-alt',
                        // url: 'https://secanis.ch',
                        // target: '_blank',
                        routerLink: ['/logout'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].bottom
                    }
                ];
            }
            if (this.level == "CompanyAdmin") {
                this.sidebarItems = [
                    {
                        name: 'Welcome',
                        icon: 'las la-home',
                        routerLink: [''],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'About',
                        icon: 'las la-address-book',
                        routerLink: ['/about'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View My Orders',
                        icon: 'las la-shopping-bag',
                        routerLink: ['/viewmyorders'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View Users',
                        icon: 'las la-users',
                        routerLink: ['/viewusers'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View Suppliers',
                        icon: 'las la-users',
                        routerLink: ['/viewsuppliers'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View Companies',
                        icon: 'las la-building',
                        routerLink: ['/viewcompanies'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'Create Employee',
                        icon: 'las la-plus-circle',
                        routerLink: ['/createemployee'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'Create Manager',
                        icon: 'las la-plus-circle',
                        routerLink: ['/createmanager'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'Create Company Admin',
                        icon: 'las la-plus-circle',
                        routerLink: ['/createcompanyadmin'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'Logout',
                        icon: 'las la-external-link-alt',
                        // url: 'https://secanis.ch',
                        // target: '_blank',
                        routerLink: ['/logout'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].bottom
                    }
                ];
            }
            if (this.level == "Manager") {
                this.sidebarItems = [
                    {
                        name: 'Welcome',
                        icon: 'las la-home',
                        routerLink: [''],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'About',
                        icon: 'las la-address-book',
                        routerLink: ['/about'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View My Orders',
                        icon: 'las la-shopping-bag',
                        routerLink: ['/viewmyorders'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View Users',
                        icon: 'las la-users',
                        routerLink: ['/viewusers'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View Suppliers',
                        icon: 'las la-users',
                        routerLink: ['/viewsuppliers'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View Companies',
                        icon: 'las la-building',
                        routerLink: ['/viewcompanies'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'Logout',
                        icon: 'las la-external-link-alt',
                        // url: 'https://secanis.ch',
                        // target: '_blank',
                        routerLink: ['/logout'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].bottom
                    }
                ];
            }
            if (this.level == "Employee") {
                this.sidebarItems = [
                    {
                        name: 'Welcome',
                        icon: 'las la-home',
                        routerLink: [''],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'About',
                        icon: 'las la-address-book',
                        routerLink: ['/about'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View My Orders',
                        icon: 'las la-shopping-bag',
                        routerLink: ['/viewmyorders'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View Users',
                        icon: 'las la-users',
                        routerLink: ['/viewusers'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View Suppliers',
                        icon: 'las la-users',
                        routerLink: ['/viewsuppliers'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'View Companies',
                        icon: 'las la-building',
                        routerLink: ['/viewcompanies'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                    },
                    {
                        name: 'Logout',
                        icon: 'las la-external-link-alt',
                        // url: 'https://secanis.ch',
                        // target: '_blank',
                        routerLink: ['/logout'],
                        position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].bottom
                    }
                ];
            }
        }
        else if ((_b = JSON.parse(this.user)) === null || _b === void 0 ? void 0 : _b.supplier) {
            const userdata = JSON.parse(this.user);
            this.sidebarItems = [
                {
                    name: 'Welcome',
                    icon: 'las la-home',
                    routerLink: [''],
                    position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                },
                {
                    name: 'About',
                    icon: 'las la-address-book',
                    routerLink: ['/about'],
                    position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                },
                // {
                //   name: 'View Users',
                //   icon: 'las la-users',
                //   routerLink: ['/viewusers'],
                //   position: SimpleSidebarPosition.top
                // },
                // {
                //   name: 'View Suppliers',
                //   icon: 'las la-users',
                //   routerLink: ['/viewsuppliers'],
                //   position: SimpleSidebarPosition.top
                // },
                // {
                //   name: 'View Companies',
                //   icon: 'las la-building',
                //   routerLink: ['/viewcompanies'],
                //   position: SimpleSidebarPosition.top
                // },
                {
                    name: 'Create Product',
                    icon: 'las la-plus-circle',
                    routerLink: ['/createproduct/' + userdata.supplier._id],
                    position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                },
                {
                    name: 'View my Products',
                    icon: 'las la-shopping-bag',
                    routerLink: ['/viewmyproducts/' + userdata.supplier._id],
                    position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                },
                {
                    name: 'View Orders Sent to me',
                    icon: 'las la-shopping-bag',
                    routerLink: ['/vieworderstome'],
                    position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].top
                },
                {
                    name: 'Logout',
                    icon: 'las la-external-link-alt',
                    // url: 'https://secanis.ch',
                    // target: '_blank',
                    routerLink: ['/logout'],
                    position: ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["SimpleSidebarPosition"].bottom
                }
            ];
        }
        // required, configure items
        // console.log(this.sidebarItems)
        this.ngSimpleSidebarService.addItems(this.sidebarItems);
        // required, configure icons
        this.ngSimpleSidebarService.configure({
            openIcon: 'las la-bars',
            closeIcon: 'las la-times',
            colors: {
                darkMode: false,
                background: "#f8f9fa",
                font: "#F56A00",
            },
            closeAfterClick: true,
            mobile: false,
        });
        // optional, access states
        // sidebarConfig$ = this.ngSimpleSidebarService.getConfiguration();
        this.isOpen$ = this.ngSimpleSidebarService.isOpen();
        // getTopsideItems$ = this.ngSimpleSidebarService.getTopsideItems();
        // getBotsideItems$ = this.ngSimpleSidebarService.getBotsideItems();
        this.isOpen$.subscribe(res => {
            // console.log(res);
            this.sidebarOpened = res;
        });
    }
    openSideNav() {
        this.ngSimpleSidebarService.open();
    }
    closeSideNav() {
        this.ngSimpleSidebarService.close();
    }
    toggleSideNav() {
        if (this.sidebarOpened) {
            this.closeSideNav();
        }
        else {
            this.openSideNav();
        }
    }
    GoToProducts() {
        this.router.navigateByUrl('/products');
    }
    ViewProfile() {
        // console.log(this.user);
        // console.log(userdata);
        const userdata = JSON.parse(this.user);
        this.type = localStorage.getItem("type");
        if (this.type == "user")
            this.router.navigateByUrl('/viewuser/' + userdata.user._id);
        if (this.type == "supplier")
            this.router.navigateByUrl('/viewsupplier/' + userdata.supplier._id);
    }
    GoToHome() {
        this.router.navigateByUrl('/');
    }
    viewCart() {
        if (this.type == "user") {
            const userdata = JSON.parse(this.user);
            this.router.navigateByUrl('/cart/' + userdata.user._id);
        }
    }
    search() {
        this.router.navigateByUrl('/products?search=' + this.productname);
    }
    Login() {
        const initialState = {};
        this.modalService.show(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], {
            animated: true,
            initialState
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_2__["NgSimpleSidebarService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 31, vars: 13, consts: [[1, "app-navbar"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "no-btn"], [1, "d-flex", "no_list", "mb-0", "p-0"], [1, "searchbar", "pt-3", "pb-3"], [1, "d-flex", "align-items-center", "n_holder"], ["class", "btn btn-primary btn-lg ml-3 mr-4", 3, "click", 4, "ngIf"], [1, "logo"], ["src", "/assets/images/logo.png", "alt", "logo", 3, "click"], ["href", "products", 4, "ngIf"], [1, "search", "ml-3", "mr-3", 3, "ngStyle"], [1, "d-flex"], [1, "w-100"], ["placeholder", "What do you need?", "type", "search", "id", "form1", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "no-btn", 3, "click"], [3, "icon"], ["class", "btn btn-primary btn-lg ml-3 mr-3", 3, "click", 4, "ngIf"], ["class", " no-btn ml-3 mr-3 ", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "btn-lg", "ml-3", "mr-4", 3, "click"], ["href", "products"], [1, "btn", "btn-primary", "btn-lg", "ml-3", "mr-3", 3, "click"], [1, "no-btn", "ml-3", "mr-3", 3, "click"], ["height", "24 ", "width", "24 "], ["clip-rule", "evenodd ", "d", "M5 5H3V3h4v10a1 1 0 001 1h13v2H7a2 2 0 01-2-2V5zm6 14a2 2 0 11-4 0 2 2 0 014 0zm8 2a2 2 0 100-4 2 2 0 000 4z ", "fill-rule", "evenodd "]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " En ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Feed Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, NavbarComponent_button_18_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_img_click_20_listener() { return ctx.GoToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, NavbarComponent_a_21_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_25_listener($event) { return ctx.productname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_26_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, NavbarComponent_button_28_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, NavbarComponent_button_29_Template, 2, 1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, NavbarComponent_button_30_Template, 3, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.type != "supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx.type != "supplier" ? 1 : 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.type == "supplier")("ngModel", ctx.productname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user != null && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c1, ctx.type) == "user" && ctx.level != "Admin");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"]], styles: [".app-navbar[_ngcontent-%COMP%] {\n  background-color: #F0F3F5;\n}\n\n.no_list[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.no_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  padding: 5px;\n}\n\n.search[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 50%;\n}\n\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  align-self: center;\n  height: 100%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-right: 15px;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 700px) {\n  .n_holder[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    margin-bottom: 10px;\n  }\n  .n_holder[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFBSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRVI7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUFJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUFDTjtFQUFNO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VBRVY7QUFDRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGM0Y1O1xyXG59XHJcblxyXG4ubm9fbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dvIGltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5uX2hvbGRlciB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "P7TQ":
/*!****************************************************************!*\
  !*** ./src/app/pages/editusermoney/editusermoney.component.ts ***!
  \****************************************************************/
/*! exports provided: EditusermoneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditusermoneyComponent", function() { return EditusermoneyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function EditusermoneyComponent_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Added Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditusermoneyComponent_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EditusermoneyComponent {
    constructor(bsModalRef, UserSer) {
        this.bsModalRef = bsModalRef;
        this.UserSer = UserSer;
        this.title = "Edit User Money";
        this.type = "Wallet";
        this.userid = null;
        this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.amount = 0;
        this.disabled = false;
    }
    ngOnInit() {
    }
    submit(f) {
        for (const control in f.controls) {
            f.controls[control].markAsDirty();
            f.controls[control].markAsTouched();
        }
        if (f.valid) {
            this.disabled = true;
            if (this.type == "Wallet") {
                this.UserSer.increasewallet(this.userid, this.amount).subscribe((res) => {
                    this.bsModalRef.hide();
                    this.render.emit("");
                    alert("Amount added successfully. New wallet amount is " + res.updateduser.wallet);
                });
            }
            else if (this.type == "Limit") {
                this.UserSer.editLimit(this.userid, this.amount).subscribe((res) => {
                    this.bsModalRef.hide();
                    this.render.emit("");
                    alert("Limit edited successfully. New limit is " + res.updateduser.limit);
                });
            }
        }
    }
}
EditusermoneyComponent.ɵfac = function EditusermoneyComponent_Factory(t) { return new (t || EditusermoneyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
EditusermoneyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditusermoneyComponent, selectors: [["app-editusermoney"]], inputs: { title: "title", type: "type", userid: "userid" }, outputs: { render: "render" }, decls: 14, vars: 6, consts: [[1, "modal-header"], [1, "modal-title", "pull-left", "mb-0"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body", "p-4"], [1, "", 3, "ngSubmit"], ["f", "ngForm"], ["class", "m-3", 4, "ngIf"], ["type", "Number", "placeholder", "Enter Amount", "name", "Number", 1, "m-3", 3, "min", "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "m-3", 3, "disabled"], [1, "m-3"]], template: function EditusermoneyComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditusermoneyComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditusermoneyComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.submit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditusermoneyComponent_label_9_Template, 2, 0, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditusermoneyComponent_label_10_Template, 2, 0, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditusermoneyComponent_Template_input_ngModelChange_11_listener($event) { return ctx.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("ngModel", ctx.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlZGl0dXNlcm1vbmV5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7O0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDUTs7RUFDSSwwQ0FBQTtBQUVaIiwiZmlsZSI6ImVkaXR1c2VybW9uZXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEycHggI2VlZTtcclxuICAgICYubmctdG91Y2hlZCB7XHJcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODUsIDQwLCA0MCwgMC4zODQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-simple-sidebar */ "0EGK");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "ObfR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Mongez Web app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "content-wrapper"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-ng-simple-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_1__["NgSimpleSidebarComponent"], _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Y7hm":
/*!****************************************!*\
  !*** ./src/app/Utilities/utilities.ts ***!
  \****************************************/
/*! exports provided: categories, Mechanicalsubcategories, Electricalsubcategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mechanicalsubcategories", function() { return Mechanicalsubcategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Electricalsubcategories", function() { return Electricalsubcategories; });
const categories = [
    { img: "/assets/images/mechanical.jpg", label: "Mechanical", route: "/products/mechanical" },
    { img: "/assets/images/electrical.jpg", label: "Electrical", route: "/products/electrical" },
    { img: "/assets/images/hardware.jpg", label: "Hardware and Tools", route: "/products/hardware" },
];
const Mechanicalsubcategories = [
    { img: "/assets/images/hvac.jpg", label: "HVAC", route: "/products/mechanical/hvac" },
    { img: "/assets/images/firefighting.jpg", label: "FireFighting", route: "/products/mechanical/firefighting" },
    { img: "/assets/images/plumbing.jpg", label: "Plumbing", route: "/products/mechanical/plumbing" },
];
const Electricalsubcategories = [
    { img: "/assets/images/mechanical.jpg", label: "Light Current", route: "/products/electrical/lightcurrent" },
    { img: "/assets/images/electrical.jpg", label: "High Voltage", route: "/products/electrical/highvoltage" },
    { img: "/assets/images/hardware.jpg", label: "Low Voltage", route: "/products/electrical/lowvoltage" },
];


/***/ }),

/***/ "YXFk":
/*!******************************************************************!*\
  !*** ./src/app/pages/viewmyproducts/viewmyproducts.component.ts ***!
  \******************************************************************/
/*! exports provided: ViewmyproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewmyproductsComponent", function() { return ViewmyproductsComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_component_restock_restock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/restock/restock.component */ "+VUo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product/products.service */ "L0fj");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ViewmyproductsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewmyproductsComponent_div_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const product_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.restock(product_r1._id, product_r1.quantity); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Restock Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewmyproductsComponent_div_3_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const product_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.viewProduct(product_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "View Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewmyproductsComponent_div_3_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const product_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.deleteProduct(product_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Delete Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Product Name: ", product_r1 == null ? null : product_r1.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Quanity: ", product_r1.quantity, "");
} }
class ViewmyproductsComponent {
    constructor(router, activerouter, ProductSer, ModalServ) {
        this.router = router;
        this.activerouter = activerouter;
        this.ProductSer = ProductSer;
        this.ModalServ = ModalServ;
        this.products = [];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
    }
    ngOnInit() {
        this.activerouter.paramMap.subscribe((res) => {
            // console.log(res)
            this.getmyProducts();
        });
    }
    getmyProducts() {
        this.ProductSer.getmyProducts().subscribe((res) => {
            // console.log(res);
            this.products = res;
            // console.log("Products", this.products)
        });
    }
    viewProduct(id) {
        this.router.navigateByUrl('/viewproduct/' + id + "");
    }
    deleteProduct(id) {
        this.ProductSer.removeproduct(id).subscribe(res => {
            alert("Product Successfully Deleted");
            this.getmyProducts();
        });
    }
    restock(id, stocknumber) {
        this.ModalServ.show(src_app_component_restock_restock_component__WEBPACK_IMPORTED_MODULE_1__["RestockComponent"], {
            initialState: {
                id,
                stocknumber
            }
        }).content.sucess.subscribe(res => {
            alert("Product Restocked Successfully");
            this.getmyProducts();
        });
    }
}
ViewmyproductsComponent.ɵfac = function ViewmyproductsComponent_Factory(t) { return new (t || ViewmyproductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"])); };
ViewmyproductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewmyproductsComponent, selectors: [["app-viewmyproducts"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "text-center"], ["class", "card mb-2", 4, "ngFor", "ngForOf"], [1, "card", "mb-2"], [1, "card-body"], [1, "row"], [1, "img-container", "col-md-4"], ["src", "/assets/images/employee.jpg"], [1, "info", "col-md-8"], [1, "card-title"], [1, "col-12", "d-flex", "justify-content-end", "flex-wrap"], [1, "btn", "btn-primary", "mx-3", 3, "click"]], template: function ViewmyproductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "My Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ViewmyproductsComponent_div_3_Template, 17, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".search[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 100%;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  align-self: center;\n  height: 100%;\n}\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.users[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 15px;\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3bXlwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFUjtBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRUE7RUFDSSxlQUFBO0FBQ0o7QUFFQTtFQUNJLFVBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNJLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBRVI7QUFEUTtFQUNJLDJDQUFBO0FBR1o7QUFFQTs7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ1E7O0VBQ0ksMENBQUE7QUFFWiIsImZpbGUiOiJ2aWV3bXlwcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udXNlcnMge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDEwJSkgMHB4IDFweCA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDFweCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMnB4ICNlZWU7XHJcbiAgICAmLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTg1LCA0MCwgNDAsIDAuMzg0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/admin/admin.component */ "sS4B");
/* harmony import */ var _pages_supplier_supplier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/supplier/supplier.component */ "l2i1");
/* harmony import */ var _pages_customer_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/customer/customer.component */ "aKbR");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing.module */ "lm+D");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "ObfR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/products/products.component */ "fdtU");
/* harmony import */ var _pages_categories_categories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/categories/categories.component */ "0w1T");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/login/login.component */ "g8H4");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _pages_createcompany_createcompany_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/createcompany/createcompany.component */ "8HFH");
/* harmony import */ var _pages_createuser_createuser_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/createuser/createuser.component */ "BIsl");
/* harmony import */ var _pages_createsupplier_createsupplier_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/createsupplier/createsupplier.component */ "cp0p");
/* harmony import */ var _pages_createproduct_createproduct_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/createproduct/createproduct.component */ "wqbR");
/* harmony import */ var _pages_viewcompany_viewcompany_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/viewcompany/viewcompany.component */ "mRdz");
/* harmony import */ var _pages_viewuser_viewuser_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/viewuser/viewuser.component */ "vRcg");
/* harmony import */ var _pages_viewsupplier_viewsupplier_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/viewsupplier/viewsupplier.component */ "2Ham");
/* harmony import */ var _pages_viewproduct_viewproduct_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/viewproduct/viewproduct.component */ "F0TP");
/* harmony import */ var ngx_bootstrap_multiselect__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap-multiselect */ "qdTh");
/* harmony import */ var _pages_vieworders_vieworders_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/vieworders/vieworders.component */ "Jlyp");
/* harmony import */ var _pages_viewusers_viewusers_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/viewusers/viewusers.component */ "Zjyl");
/* harmony import */ var _pages_viewsuppliers_viewsuppliers_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/viewsuppliers/viewsuppliers.component */ "JZky");
/* harmony import */ var _pages_viewcompanies_viewcompanies_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/viewcompanies/viewcompanies.component */ "5UBU");
/* harmony import */ var ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-simple-sidebar */ "0EGK");
/* harmony import */ var _pages_viewmywallet_viewmywallet_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/viewmywallet/viewmywallet.component */ "wa37");
/* harmony import */ var _pages_viewmyproducts_viewmyproducts_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/viewmyproducts/viewmyproducts.component */ "YXFk");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/cart/cart.component */ "sHrM");
/* harmony import */ var _pages_payement_payement_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/payement/payement.component */ "0jbg");
/* harmony import */ var _interciptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./interciptors/jwt.interceptor */ "BGs2");
/* harmony import */ var _pages_createmanager_createmanager_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/createmanager/createmanager.component */ "jK2D");
/* harmony import */ var _pages_createcompanyadmin_createcompanyadmin_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/createcompanyadmin/createcompanyadmin.component */ "qwFz");
/* harmony import */ var _pages_createadmin_createadmin_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/createadmin/createadmin.component */ "ccBt");
/* harmony import */ var _pages_editusermoney_editusermoney_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/editusermoney/editusermoney.component */ "P7TQ");
/* harmony import */ var _pages_vieworderstome_vieworderstome_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/vieworderstome/vieworderstome.component */ "7pvJ");
/* harmony import */ var _component_restock_restock_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./component/restock/restock.component */ "+VUo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/core */ "fXoL");






// import { RouterModule } from '@angular/router';




// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';


































// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineInjector"]({ providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _interciptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_35__["JwtInterceptor"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(),
            ngx_bootstrap_multiselect__WEBPACK_IMPORTED_MODULE_24__["NgxBootstrapMultiselectModule"],
            ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_29__["NgSimpleSidebarModule"]
            //   TranslateModule.forRoot({
            //     defaultLanguage: 'en',
            //     loader: {
            //       provide: TranslateLoader,
            //       useFactory: (createTranslateLoader),
            //       deps: [HttpClient]
            //     }
            //   })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        _pages_supplier_supplier_component__WEBPACK_IMPORTED_MODULE_3__["SupplierComponent"],
        _pages_customer_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"],
        _pages_categories_categories_component__WEBPACK_IMPORTED_MODULE_13__["CategoriesComponent"],
        _component_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _pages_createcompany_createcompany_component__WEBPACK_IMPORTED_MODULE_16__["CreatecompanyComponent"],
        _pages_createuser_createuser_component__WEBPACK_IMPORTED_MODULE_17__["CreateuserComponent"],
        _pages_createsupplier_createsupplier_component__WEBPACK_IMPORTED_MODULE_18__["CreatesupplierComponent"],
        _pages_createproduct_createproduct_component__WEBPACK_IMPORTED_MODULE_19__["CreateproductComponent"],
        _pages_viewcompany_viewcompany_component__WEBPACK_IMPORTED_MODULE_20__["ViewcompanyComponent"],
        _pages_viewuser_viewuser_component__WEBPACK_IMPORTED_MODULE_21__["ViewuserComponent"],
        _pages_viewsupplier_viewsupplier_component__WEBPACK_IMPORTED_MODULE_22__["ViewsupplierComponent"],
        _pages_viewproduct_viewproduct_component__WEBPACK_IMPORTED_MODULE_23__["ViewproductComponent"],
        _pages_vieworders_vieworders_component__WEBPACK_IMPORTED_MODULE_25__["ViewordersComponent"],
        _pages_viewusers_viewusers_component__WEBPACK_IMPORTED_MODULE_26__["ViewusersComponent"],
        _pages_viewsuppliers_viewsuppliers_component__WEBPACK_IMPORTED_MODULE_27__["ViewsuppliersComponent"],
        _pages_viewcompanies_viewcompanies_component__WEBPACK_IMPORTED_MODULE_28__["ViewcompaniesComponent"],
        _pages_viewmywallet_viewmywallet_component__WEBPACK_IMPORTED_MODULE_30__["ViewmywalletComponent"],
        _pages_viewmyproducts_viewmyproducts_component__WEBPACK_IMPORTED_MODULE_31__["ViewmyproductsComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_32__["AboutComponent"],
        _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_33__["CartComponent"],
        _pages_payement_payement_component__WEBPACK_IMPORTED_MODULE_34__["PayementComponent"],
        _pages_createmanager_createmanager_component__WEBPACK_IMPORTED_MODULE_36__["CreatemanagerComponent"],
        _pages_createcompanyadmin_createcompanyadmin_component__WEBPACK_IMPORTED_MODULE_37__["CreatecompanyadminComponent"],
        _pages_createadmin_createadmin_component__WEBPACK_IMPORTED_MODULE_38__["CreateadminComponent"],
        _pages_editusermoney_editusermoney_component__WEBPACK_IMPORTED_MODULE_39__["EditusermoneyComponent"],
        _pages_vieworderstome_vieworderstome_component__WEBPACK_IMPORTED_MODULE_40__["VieworderstomeComponent"],
        _component_restock_restock_component__WEBPACK_IMPORTED_MODULE_41__["RestockComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"], ngx_bootstrap_multiselect__WEBPACK_IMPORTED_MODULE_24__["NgxBootstrapMultiselectModule"],
        ng_simple_sidebar__WEBPACK_IMPORTED_MODULE_29__["NgSimpleSidebarModule"]
        //   TranslateModule.forRoot({
        //     defaultLanguage: 'en',
        //     loader: {
        //       provide: TranslateLoader,
        //       useFactory: (createTranslateLoader),
        //       deps: [HttpClient]
        //     }
        //   })
    ] }); })();


/***/ }),

/***/ "Zjyl":
/*!********************************************************!*\
  !*** ./src/app/pages/viewusers/viewusers.component.ts ***!
  \********************************************************/
/*! exports provided: ViewusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewusersComponent", function() { return ViewusersComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _editusermoney_editusermoney_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editusermoney/editusermoney.component */ "P7TQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/company/company.service */ "fyic");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_multiselect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap-multiselect */ "qdTh");











function ViewusersComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ngx-bootstrap-multiselect", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ViewusersComponent_div_9_Template_ngx_bootstrap_multiselect_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.selectedRoles = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ngx-bootstrap-multiselect", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ViewusersComponent_div_9_Template_ngx_bootstrap_multiselect_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.selectedCompanies = $event; })("ngModelChange", function ViewusersComponent_div_9_Template_ngx_bootstrap_multiselect_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onChangeCompanies($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewusersComponent_div_9_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Apply Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.roles)("texts", ctx_r0.myTextsRoles)("settings", ctx_r0.mySettingsRoles)("ngModel", ctx_r0.selectedRoles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.companies)("texts", ctx_r0.myTexts)("settings", ctx_r0.mySettings)("ngModel", ctx_r0.selectedCompanies);
} }
function ViewusersComponent_div_10_h5_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("User Wallet: ", user_r7.wallet, " EGP");
} }
function ViewusersComponent_div_10_div_17_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewusersComponent_div_10_div_17_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.deleteUser(user_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewusersComponent_div_10_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ViewusersComponent_div_10_div_17_button_1_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewusersComponent_div_10_div_17_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.increaseWallet(user_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.signedinuser.employeeLevel == "CompanyAdmin");
} }
function ViewusersComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewusersComponent_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const user_r7 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.viewUser(user_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ViewusersComponent_div_10_h5_16_Template, 2, 1, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ViewusersComponent_div_10_div_17_Template, 4, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Name: ", user_r7.firstname, " ", user_r7.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Username: ", user_r7.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Email: ", user_r7.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Mobile Number: ", user_r7.mobileNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Level: ", user_r7.employeeLevel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.signedinuser.employeeLevel != "Employee" && user_r7.employeeLevel == "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r7.employeeLevel == "Employee" && ctx_r1.signedinuser.employeeLevel != "Employee" && ctx_r1.signedinuser.employeeLevel != "Admin");
} }
class ViewusersComponent {
    constructor(router, UserSer, CompanySer, modalService, activerouter) {
        this.router = router;
        this.UserSer = UserSer;
        this.CompanySer = CompanySer;
        this.modalService = modalService;
        this.activerouter = activerouter;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
        this.users = [];
        this.searchusername = "";
        this.roles = [
            {
                id: "Admin",
                name: "Admin"
            },
            {
                id: "CompanyAdmin",
                name: "Company Admin"
            },
            {
                id: "Manager",
                name: "Manager"
            },
            {
                id: "Employee",
                name: "Employee"
            }
        ];
        this.selectedCompanies = null;
        this.selectedRoles = null;
        // Settings configuration
        this.mySettings = {
            enableSearch: true,
            showCheckAll: true,
            showUncheckAll: true,
            maintainSelectionOrderInTitle: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-primary',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        };
        // Text configuration
        this.myTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            searchEmptyResult: 'Nothing found...',
            searchNoRenderText: 'Type in search box to see results...',
            defaultTitle: 'Select Company/ies',
            allSelected: 'All sected',
        };
        // Settings configuration
        this.mySettingsRoles = {
            enableSearch: true,
            showCheckAll: true,
            showUncheckAll: true,
            maintainSelectionOrderInTitle: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-primary',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        };
        // Text configuration
        this.myTextsRoles = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            searchEmptyResult: 'Nothing found...',
            searchNoRenderText: 'Type in search box to see results...',
            defaultTitle: 'Select Role/s',
            allSelected: 'All sected',
        };
    }
    ngOnInit() {
        this.getUsers();
        this.getCompanies();
        this.signedinuser = JSON.parse(localStorage.getItem("currentuser")).user;
        // console.log(this.signedinuser.employeeLevel)
    }
    getCompanies() {
        this.CompanySer.getCompanies(null).subscribe((res) => {
            var _a;
            this.companies = (_a = res === null || res === void 0 ? void 0 : res.map) === null || _a === void 0 ? void 0 : _a.call(res, el => ({
                id: el._id,
                name: `${el.name}`
            }));
        });
    }
    onChangeCompanies(e) { }
    applyFilter(e) {
        var _a, _b, _c, _d, _e, _f;
        const query = {
            employeeLevel: {
                $in: ((_a = this.selectedRoles) === null || _a === void 0 ? void 0 : _a.map(role => role)) || null,
            },
            $or: ((_b = this.selectedCompanies) === null || _b === void 0 ? void 0 : _b.map(company => ({ company }))) || null,
        };
        if (!((_c = query.employeeLevel) === null || _c === void 0 ? void 0 : _c.$in) || ((_e = (_d = query.employeeLevel) === null || _d === void 0 ? void 0 : _d.$in) === null || _e === void 0 ? void 0 : _e.length) == 0)
            delete query.employeeLevel;
        if (!this.selectedCompanies || ((_f = this.selectedCompanies) === null || _f === void 0 ? void 0 : _f.length) == 0)
            delete query.$or;
        this.getUsers(this.searchusername, query || null);
    }
    getUsers(search = null, query = null) {
        var _a;
        this.signedinuser = JSON.parse(localStorage.getItem("currentuser")).user;
        if (((_a = this.signedinuser) === null || _a === void 0 ? void 0 : _a.employeeLevel) == 'Admin') {
            this.UserSer.getallUsers(search, query).subscribe((res) => {
                this.users = res;
            });
        }
        else {
            this.UserSer.getUsers(search).subscribe((res) => {
                this.users = res;
            });
        }
    }
    search() {
        this.getUsers(this.searchusername);
    }
    editLimit(userid) {
        const initialState = {
            title: "Edit Employee limit",
            type: "Limit",
            userid: userid
        };
        this.modalService.show(_editusermoney_editusermoney_component__WEBPACK_IMPORTED_MODULE_1__["EditusermoneyComponent"], {
            animated: true,
            initialState
        }).content.render.subscribe(res => this.getUsers());
    }
    increaseWallet(userid) {
        const initialState = {
            title: "Add to Employee Wallet",
            type: "Wallet",
            userid: userid
        };
        this.modalService.show(_editusermoney_editusermoney_component__WEBPACK_IMPORTED_MODULE_1__["EditusermoneyComponent"], {
            animated: true,
            initialState
        }).content.render.subscribe(res => this.getUsers());
    }
    deleteUser(userid) {
        this.UserSer.delete(userid).subscribe(res => {
            alert("Deleted Successfully");
            this.getUsers();
        });
    }
    viewUser(id) {
        this.router.navigateByUrl('/viewuser/' + id + "");
    }
}
ViewusersComponent.ɵfac = function ViewusersComponent_Factory(t) { return new (t || ViewusersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ViewusersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewusersComponent, selectors: [["app-viewusers"]], decls: 11, vars: 4, consts: [[1, "container"], [1, "text-center"], [1, "search", "mb-4"], [1, "d-flex"], [1, "w-100"], ["placeholder", "Search by username", "type", "search", "id", "form1", 1, "form-control", "text-center", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "no-btn", 3, "click"], [3, "icon"], ["class", "filter d-flex align-items-center justify-content-between my-3", 4, "ngIf"], ["class", "card mb-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "filter", "d-flex", "align-items-center", "justify-content-between", "my-3"], [1, "header", "d-flex", "align-items-center", "justify-content-between"], [1, "f_info"], ["name", "roles", 3, "options", "texts", "settings", "ngModel", "ngModelChange"], ["name", "companies", 1, "ml-3", 3, "options", "texts", "settings", "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "ml-3", 3, "click"], [1, "card", "mb-2", 3, "click"], [1, "card-body"], [1, "row", "align-items-center"], [1, "img-container", "col-md-3"], ["src", "/assets/images/employee.jpg", "alt", "Avatar"], [1, "info", "col-md-9"], [1, "card-title"], ["class", "card-title", 4, "ngIf"], ["class", "col-12 d-flex justify-content-end flex-wrap", 4, "ngIf"], [1, "col-12", "d-flex", "justify-content-end", "flex-wrap"], ["class", "btn btn-primary mx-3", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "mx-3", 3, "click"]], template: function ViewusersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Current Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ViewusersComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchusername = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewusersComponent_Template_button_click_7_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ViewusersComponent_div_9_Template, 9, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ViewusersComponent_div_10_Template, 18, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.signedinuser == null ? null : ctx.signedinuser.employeeLevel) == "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_bootstrap_multiselect__WEBPACK_IMPORTED_MODULE_10__["ɵa"]], styles: [".img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n}\n.search[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 100%;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  align-self: center;\n  height: 100%;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.users[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 15px;\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n  min-width: 40px;\n  background-color: #F0F3F5;\n  color: #F56A00;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  padding: 10px;\n}\nbutton.plus[_ngcontent-%COMP%] {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\nbutton.minus[_ngcontent-%COMP%] {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #DADEE1;\n}\nbutton.btn-primary[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-size: 16px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n.f_info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n.f_info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3dXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFFSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUlBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFESjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFSO0FBSUE7RUFDSSxlQUFBO0FBREo7QUFJQTtFQUNJLFVBQUE7QUFESjtBQUlBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBREo7QUFFSTtFQUNJLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQVI7QUFDUTtFQUNJLDJDQUFBO0FBQ1o7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFESjtBQUVJO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtBQUFSO0FBRUk7RUFDSSwyQkFBQTtFQUNBLDhCQUFBO0FBQVI7QUFFSTtFQUNJLHlCQUFBO0FBQVI7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUE7O0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUdROztFQUNJLDBDQUFBO0FBQVo7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBSUk7RUFDSSxjQUFBO0FBRlIiLCJmaWxlIjoidmlld3VzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi51c2VycyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTAlKSAwcHggMXB4IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMXB4IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYzRjU7XHJcbiAgICBjb2xvcjogI0Y1NkEwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAmLnBsdXMge1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgICYubWludXMge1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFERUUxO1xyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b24uYnRuLXByaW1hcnkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEycHggI2VlZTtcclxuICAgICYubmctdG91Y2hlZCB7XHJcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODUsIDQwLCA0MCwgMC4zODQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZfaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "aKbR":
/*!******************************************************!*\
  !*** ./src/app/pages/customer/customer.component.ts ***!
  \******************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CustomerComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(); };
CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], decls: 2, vars: 0, template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "customer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ccBt":
/*!************************************************************!*\
  !*** ./src/app/pages/createadmin/createadmin.component.ts ***!
  \************************************************************/
/*! exports provided: CreateadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateadminComponent", function() { return CreateadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class CreateadminComponent {
    constructor(UserServ, router) {
        this.UserServ = UserServ;
        this.router = router;
        this.firstname = "";
        this.lastname = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.mobileNumber = "";
        this.dateOfBirth = "";
        this.nationalID = "";
        this.employeeLevel = "";
        this.image = "";
        this.err = null;
    }
    ngOnInit() {
    }
    createUser() {
        this.UserServ.createAdmin(this.firstname, this.lastname, this.username, this.email, this.password, this.mobileNumber, this.dateOfBirth, this.nationalID, "Admin", this.image).subscribe((res) => {
            // console.log(res)
            this.router.navigateByUrl('');
        }, err => {
            var _a;
            this.err = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.err) || "Something went wrong";
        });
    }
}
CreateadminComponent.ɵfac = function CreateadminComponent_Factory(t) { return new (t || CreateadminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CreateadminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateadminComponent, selectors: [["app-createadmin"]], decls: 34, vars: 9, consts: [[1, "container", "pb-5"], [1, ""], ["type", "text", "placeholder", "First Name", "name", "firstname", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last Name", "name", "lastname", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Username", "name", "username", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "User Email", "name", "email", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "name", "password", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "tel", "placeholder", "Moble Number", "name", "mobileNumber", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "date", "placeholder", "Date Of Birth", "name", "dateOfBirth", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "National ID", "name", "nationalID", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Employee Level", "value", "Admin", "readonly", "", 1, "mb-2"], ["type", "text", "placeholder", "Personal Image", "name", "image", 1, "mb-2", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"]], template: function CreateadminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateadminComponent_Template_input_ngModelChange_4_listener($event) { return ctx.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateadminComponent_Template_input_ngModelChange_7_listener($event) { return ctx.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateadminComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateadminComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateadminComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mobile Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateadminComponent_Template_input_ngModelChange_19_listener($event) { return ctx.mobileNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateadminComponent_Template_input_ngModelChange_22_listener($event) { return ctx.dateOfBirth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "National ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateadminComponent_Template_input_ngModelChange_25_listener($event) { return ctx.nationalID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "User Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Personal Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateadminComponent_Template_input_ngModelChange_31_listener($event) { return ctx.image = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateadminComponent_Template_button_click_32_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Create Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateOfBirth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nationalID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.image);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGVhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBOztFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ1E7O0VBQ0ksMENBQUE7QUFFWiIsImZpbGUiOiJjcmVhdGVhZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlucHV0LFxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTJweCAjZWVlO1xyXG4gICAgJi5uZy10b3VjaGVkIHtcclxuICAgICAgICAmLm5nLWludmFsaWQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NSwgNDAsIDQwLCAwLjM4NCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "cp0p":
/*!******************************************************************!*\
  !*** ./src/app/pages/createsupplier/createsupplier.component.ts ***!
  \******************************************************************/
/*! exports provided: CreatesupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatesupplierComponent", function() { return CreatesupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/supplier/supplier.service */ "1hLT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class CreatesupplierComponent {
    constructor(SupplierServ, router) {
        this.SupplierServ = SupplierServ;
        this.router = router;
        this.firstname = "";
        this.lastname = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.mobileNumber = "";
        this.dateOfBirth = "";
        this.nationalID = "";
        this.companyName = "";
        this.taxNumber = "";
        this.image = "";
        this.address = "";
        this.err = null;
    }
    ngOnInit() {
    }
    createSupplier() {
        this.SupplierServ.createSupplier(this.firstname, this.lastname, this.username, this.email, this.password, this.mobileNumber, this.dateOfBirth, this.nationalID, this.companyName, this.taxNumber, this.image, this.address).subscribe((res) => {
            // console.log(res)
            this.router.navigateByUrl('');
        }, err => {
            var _a;
            this.err = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.err) || "Something went wrong";
        });
    }
}
CreatesupplierComponent.ɵfac = function CreatesupplierComponent_Factory(t) { return new (t || CreatesupplierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_1__["SupplierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CreatesupplierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatesupplierComponent, selectors: [["app-createsupplier"]], decls: 43, vars: 11, consts: [[1, "container", "pb-5"], [1, ""], ["type", "text", "placeholder", "First Name", "name", "firstname", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last Name", "name", "lastname", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Username", "name", "username", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "User Email", "name", "email", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Password", "name", "password", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Address", "name", "address", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "tel", "placeholder", "Moble Number", "name", "mobileNumber", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "date", "placeholder", "Date Of Birth", "name", "dateOfBirth", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "National ID", "name", "nationalID", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Company Name", "name", "companyName", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Tax Number", "name", "taxNumber", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Official Documents", 1, "mb-2"], ["type", "text", "placeholder", "Personal Image", 1, "mb-2"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"]], template: function CreatesupplierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatesupplierComponent_Template_input_ngModelChange_4_listener($event) { return ctx.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatesupplierComponent_Template_input_ngModelChange_7_listener($event) { return ctx.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatesupplierComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatesupplierComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatesupplierComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatesupplierComponent_Template_input_ngModelChange_19_listener($event) { return ctx.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mobile Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatesupplierComponent_Template_input_ngModelChange_22_listener($event) { return ctx.mobileNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatesupplierComponent_Template_input_ngModelChange_25_listener($event) { return ctx.dateOfBirth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "National ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatesupplierComponent_Template_input_ngModelChange_28_listener($event) { return ctx.nationalID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatesupplierComponent_Template_input_ngModelChange_31_listener($event) { return ctx.companyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Tax Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatesupplierComponent_Template_input_ngModelChange_34_listener($event) { return ctx.taxNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Official Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Personal Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatesupplierComponent_Template_button_click_41_listener() { return ctx.createSupplier(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Create Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateOfBirth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nationalID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.taxNumber);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGVzdXBwbGllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBOztFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ1E7O0VBQ0ksMENBQUE7QUFFWiIsImZpbGUiOiJjcmVhdGVzdXBwbGllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlucHV0LFxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTJweCAjZWVlO1xyXG4gICAgJi5uZy10b3VjaGVkIHtcclxuICAgICAgICAmLm5nLWludmFsaWQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NSwgNDAsIDQwLCAwLjM4NCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "fdtU":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities/utilities */ "Y7hm");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product/products.service */ "L0fj");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/supplier/supplier.service */ "1hLT");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../categories/categories.component */ "0w1T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_multiselect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap-multiselect */ "qdTh");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");














function ProductsComponent_fa_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r0.faMinus);
} }
function ProductsComponent_fa_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faPlus);
} }
function ProductsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_div_12_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.filterData["priceRange.priceofRange"].from = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_div_12_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.filterData["priceRange.priceofRange"].to = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.filterData["priceRange.priceofRange"].from);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.filterData["priceRange.priceofRange"].to);
} }
function ProductsComponent_fa_icon_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r3.faMinus);
} }
function ProductsComponent_fa_icon_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r4.faPlus);
} }
function ProductsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_div_19_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.filterData.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.filterData.description);
} }
function ProductsComponent_div_20_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r16.faMinus);
} }
function ProductsComponent_div_20_fa_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r17.faPlus);
} }
function ProductsComponent_div_20_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngx-bootstrap-multiselect", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_div_20_div_6_Template_ngx_bootstrap_multiselect_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.filterData.supplier = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r18.suppliers)("texts", ctx_r18.myTexts)("settings", ctx_r18.mySettings)("ngModel", ctx_r18.filterData.supplier);
} }
function ProductsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_div_20_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.togglefilter("supplier"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductsComponent_div_20_fa_icon_4_Template, 1, 1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductsComponent_div_20_fa_icon_5_Template, 1, 1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProductsComponent_div_20_div_6_Template, 2, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.filters.supplier);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r6.filters.supplier);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.filters.supplier);
} }
function ProductsComponent_fa_icon_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r7.faMinus);
} }
function ProductsComponent_fa_icon_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 13);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r8.faPlus);
} }
function ProductsComponent_div_27_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fill_r24 = ctx.fill;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("filled", fill_r24 === 100);
} }
function ProductsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngb-rating", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("rateChange", function ProductsComponent_div_27_Template_ngb_rating_rateChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.filterData.productrating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductsComponent_div_27_ng_template_2_Template, 2, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rate", ctx_r9.filterData.productrating)("max", 5);
} }
function ProductsComponent_div_33_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_div_33_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const product_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.addToCart(product_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_div_33_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const product_r28 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.ViewProduct(product_r28._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_div_33_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const product_r28 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.ViewProduct(product_r28._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_div_33_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const product_r28 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r36.decrementQuanity(product_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_div_33_Template_input_ngModelChange_17_listener($event) { const product_r28 = ctx.$implicit; return product_r28.customerquantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_div_33_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const product_r28 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.incrementQuanity(product_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ProductsComponent_div_33_button_20_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r28 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r28.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r28.specs);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r10.getprice(product_r28), " EGP/Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r10.faMinus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", product_r28.quanity)("ngModel", product_r28.customerquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r10.faPlus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.user != null && ctx_r10.type == "user" && (ctx_r10.user == null ? null : ctx_r10.user.user == null ? null : ctx_r10.user.user.employeeLevel) != "Admin");
} }
class ProductsComponent {
    constructor(router, auth, ActiveRoute, ProductSer, UserSer, SupplierSer) {
        this.router = router;
        this.auth = auth;
        this.ActiveRoute = ActiveRoute;
        this.ProductSer = ProductSer;
        this.UserSer = UserSer;
        this.SupplierSer = SupplierSer;
        this.categories = _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__["categories"];
        this.mechanicalsubcategories = _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__["Mechanicalsubcategories"];
        this.electricalsubcategories = _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__["Electricalsubcategories"];
        this.selectedcategory = [];
        this.category = null;
        this.subcategory = null;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.products = [];
        this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMinus"];
        this.currentsupplierRate = 0;
        this.currentproductRate = 0;
        this.filters = { price: false, description: false, supplier: false, productrating: false, supplierrating: false };
        this.filterData = {
            ["priceRange.priceofRange"]: {
                from: null,
                to: null
            },
            description: null,
            supplier: null,
            productrating: null,
            supplierrating: null,
        };
        this.fetchInfo = {
            count: null,
            page: 1,
            limit: 9
        };
        this.user = null;
        this.type = "";
        // Settings configuration
        this.mySettings = {
            enableSearch: true,
            showCheckAll: true,
            showUncheckAll: true,
            maintainSelectionOrderInTitle: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-primary',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        };
        // Text configuration
        this.myTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            searchEmptyResult: 'Nothing found...',
            searchNoRenderText: 'Type in search box to see results...',
            defaultTitle: 'Select Suppliers',
            allSelected: 'All sected',
        };
        this.filterParsed = {};
    }
    ngOnInit() {
        const url = this.router.url.replace("/products", "").split("/");
        if (url.length == 1) {
            this.selectedcategory = _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__["categories"];
            this.category = null;
            this.subcategory = null;
        }
        else if (url.length == 2) {
            switch (url[1]) {
                case "electrical":
                    this.selectedcategory = this.electricalsubcategories;
                    break;
                case "mechanical":
                    this.selectedcategory = this.mechanicalsubcategories;
                    break;
            }
            this.category = url[1];
            this.subcategory = null;
        }
        else {
            this.category = url[1];
            this.subcategory = url[2];
        }
        this.getProducts();
        this.ActiveRoute.queryParams.subscribe(res => {
            // console.log(res)
            res.search && this.getProducts(this.filterParsed, res.search);
        });
        this.user = this.auth.checkUser() ? JSON.parse(this.auth.checkUser()) : null;
        this.type = localStorage.getItem("type");
        this.auth.authState.subscribe(state => {
            this.user = this.auth.checkUser() ? JSON.parse(this.auth.checkUser()) : null;
            this.type = localStorage.getItem("type");
        });
        this.getSuppliers();
    }
    getSuppliers() {
        if (this.user) {
            this.SupplierSer.getSuppliers(null).subscribe((res) => {
                var _a;
                // console.log(res);
                this.suppliers = (_a = res === null || res === void 0 ? void 0 : res.map) === null || _a === void 0 ? void 0 : _a.call(res, el => ({
                    id: el._id,
                    name: `${el.firstname} ${el.lastname}`
                }));
            });
        }
    }
    applyFilter() {
        var _a;
        // console.log(this.filterData);
        this.filterParsed = {
            ["priceRange.priceofRange"]: this.filterData["priceRange.priceofRange"].from && this.filterData["priceRange.priceofRange"].to && {
                $gte: this.filterData["priceRange.priceofRange"].from || null,
                $lte: this.filterData["priceRange.priceofRange"].to || null
            },
            description: this.filterData.description && {
                $regex: this.filterData.description,
                $options: "i"
            },
            $or: ((_a = this.filterData.supplier) === null || _a === void 0 ? void 0 : _a.map(supplier => ({ supplier }))) || null,
            rating: this.filterData.productrating || null
        };
        Object.keys(this.filterParsed).forEach(el => {
            if (!this.filterParsed[el])
                delete this.filterParsed[el];
        });
        // console.log(this.filterParsed);
        this.getProducts(this.filterParsed);
    }
    clearFilter() {
        this.filterData = {
            ["priceRange.priceofRange"]: {
                from: null,
                to: null
            },
            description: null,
            supplier: null,
            productrating: null,
            supplierrating: null,
        };
        this.applyFilter();
    }
    getProducts(filters = null, search = null) {
        const queryBody = Object.assign(Object.assign({}, (filters || this.filterParsed)), { category: this.category, Subcategory: this.subcategory });
        if (!queryBody.category)
            delete queryBody.category;
        if (!queryBody.Subcategory)
            delete queryBody.Subcategory;
        this.ProductSer.getProducts({
            search,
            queryBody,
            page: this.fetchInfo.page,
            limit: this.fetchInfo.limit
        }).subscribe((res) => {
            // console.log(res);
            this.products = res.products.map(element => (Object.assign(Object.assign({}, element), { customerquantity: 1 }))); // Add this attribute to the object product
        });
    }
    ViewProduct(id) {
        this.router.navigateByUrl('/viewproduct/' + id);
    }
    togglefilter(type) {
        this.filters[type] = !this.filters[type];
    }
    onChange() {
        // console.log(this.optionsModel);
    }
    addToCart(product) {
        if (product.customerquantity <= product.quantity && product.customerquantity > 0) {
            const price = this.getprice(product);
            this.UserSer.AddtoCart(product._id, product.customerquantity, product.productName, price, product.productLogo, product.supplier).subscribe(res => {
                alert("Product added to cart");
            }, err => {
                alert("Something went wrong");
            });
        }
        if (product.customerquantity > product.quantity) {
            alert("You've exceeded the available quanity fro this product");
        }
        if (product.customerquantity <= 0) {
            alert("You can't order for 0 or less");
        }
    }
    incrementQuanity(product) {
        if (!product.customerquantity) {
            product.customerquantity = 0;
        }
        if (product.customerquantity < product.quantity)
            product.customerquantity += 1;
    }
    decrementQuanity(product) {
        if (!product.customerquantity) {
            product.customerquantity = 0;
        }
        if (product.customerquantity > 0)
            product.customerquantity -= 1;
    }
    getprice(product) {
        let price = 0;
        product.priceRange.forEach((element, index) => {
            if (index == product.priceRange.length - 1 && product.customerquantity >= element.minquantity) {
                price = element.priceofRange;
                return price;
            }
            else {
                if (product.customerquantity >= element.minquantity && product.customerquantity <= element.maxquantity) {
                    price = element.priceofRange;
                    return price;
                }
            }
        });
        if (price == 0 && product.priceRange.length > 0) {
            price = product.priceRange[0].priceofRange;
        }
        return price;
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_7__["SupplierService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 34, vars: 12, consts: [[1, "container"], [3, "categories"], [1, "productsarea", "row"], [1, "filters", "col-md-4"], [1, "filter"], [1, "header", "d-flex", "align-items-center", "justify-content-between", 3, "click"], [3, "icon", 4, "ngIf"], ["class", "info", 4, "ngIf"], ["class", "filter", 4, "ngIf"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"], [1, "btn", "btn-primary", "w-100", "mt-3", 3, "click"], [1, "products", "row", "col-md-8"], ["class", "card col-md-4 ", 4, "ngFor", "ngForOf"], [3, "icon"], [1, "info"], ["type", "number", "placeholder", "From Price", "name", "price_from", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "To Price", "name", "price_to", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Product Description", "name", "desc", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["name", "suppliers", 3, "options", "texts", "settings", "ngModel", "ngModelChange"], ["name", "productrating", 3, "rate", "max", "rateChange"], [1, "star"], [1, "card", "col-md-4"], [1, "card-body"], [1, "img-container", 3, "click"], ["src", "/assets/images/nails.png"], [3, "click"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], [1, "quanity", "mb-2", "mt-3"], [1, "minus", 3, "click"], ["type", "number", "min", "1 ", 3, "max", "ngModel", "ngModelChange"], [1, "plus", 3, "click"], ["class", "btn btn-primary w-100 ", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "w-100", 3, "click"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-categories", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_7_listener() { return ctx.togglefilter("price"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProductsComponent_fa_icon_10_Template, 1, 1, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProductsComponent_fa_icon_11_Template, 1, 1, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProductsComponent_div_12_Template, 7, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_14_listener() { return ctx.togglefilter("description"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProductsComponent_fa_icon_17_Template, 1, 1, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ProductsComponent_fa_icon_18_Template, 1, 1, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProductsComponent_div_19_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ProductsComponent_div_20_Template, 7, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_22_listener() { return ctx.togglefilter("productrating"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Product Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ProductsComponent_fa_icon_25_Template, 1, 1, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ProductsComponent_fa_icon_26_Template, 1, 1, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ProductsComponent_div_27_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_28_listener() { return ctx.applyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Apply Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_30_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Clear Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProductsComponent_div_33_Template, 21, 8, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("categories", ctx.selectedcategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filters.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.filters.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filters.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filters.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.filters.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filters.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.suppliers == null ? null : ctx.suppliers.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filters.productrating);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.filters.productrating);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filters.productrating);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_categories_categories_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], ngx_bootstrap_multiselect__WEBPACK_IMPORTED_MODULE_12__["ɵa"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbRating"]], styles: [".img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 15px;\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px;\n}\n.quanity[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  border-radius: 4px;\n  display: flex;\n}\n.quanity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  text-align: center;\n  width: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n}\n.quanity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .quanity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n}\n.quanity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0;\n  width: 40px;\n  background-color: #F0F3F5;\n  color: #F56A00;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  padding: 10px;\n}\n.quanity[_ngcontent-%COMP%]   button.plus[_ngcontent-%COMP%] {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.quanity[_ngcontent-%COMP%]   button.minus[_ngcontent-%COMP%] {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.quanity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #DADEE1;\n}\n.products[_ngcontent-%COMP%] {\n  display: flex;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n.star[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n.filled[_ngcontent-%COMP%] {\n  color: #F56A00;\n}\n.filter[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFFUjtBQUVBO0VBQ0ksZUFBQTtBQUNKO0FBRUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksdUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFFUjtBQURRO0VBQ0ksMkNBQUE7QUFHWjtBQUVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUFFUjtBQURRO0VBRUksd0JBQUE7RUFDQSwwQkFBQTtBQUVaO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ1I7QUFBUTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUFFWjtBQUFRO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBQUVaO0FBQVE7RUFDSSx5QkFBQTtBQUVaO0FBR0E7RUFDSSxhQUFBO0FBQUo7QUFHQTs7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUFKO0FBRVE7O0VBQ0ksMENBQUE7QUFDWjtBQUlBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJQTtFQUNJLGNBQUE7QUFESjtBQUlBO0VBQ0ksZUFBQTtBQURKIiwiZmlsZSI6InByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTAlKSAwcHggMXB4IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMXB4IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucXVhbml0eSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICAgICAgICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gICAgICAgICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGM0Y1O1xyXG4gICAgICAgIGNvbG9yOiAjRjU2QTAwO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgJi5wbHVzIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5taW51cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RBREVFMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEycHggI2VlZTtcclxuICAgICYubmctdG91Y2hlZCB7XHJcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODUsIDQwLCA0MCwgMC4zODQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnN0YXIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogI2IwYzRkZTtcclxufVxyXG5cclxuLmZpbGxlZCB7XHJcbiAgICBjb2xvcjogI0Y1NkEwMDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "fyic":
/*!*****************************************************!*\
  !*** ./src/app/services/company/company.service.ts ***!
  \*****************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CompanyService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl}/company`;
    }
    getCompany(id) {
        return this.http.get(this.baseUrl + '/viewcompany/' + id);
    }
    getCompanies(search = null) {
        return this.http.get(this.baseUrl + `/allcompanies${search ? `?search=${search}` : ''}`);
    }
    createCompany(name, email, address, companyNumber, taxNumber, logo) {
        const url = `${this.baseUrl}/createcompany`;
        return this.http.post(url, {
            name,
            email,
            address,
            companyNumber,
            taxNumber,
            logo,
        });
    }
    updateInfo(id, name, email, address, companyNumber, taxNumber) {
        const url = `${this.baseUrl}/updatebyCompanyadmin`;
        const info = {
            name,
            email,
            address,
            companyNumber,
            taxNumber
        };
        Object.keys(info).forEach(el => {
            var _a, _b, _c;
            if (!info[el] || ((_c = (_b = (_a = info[el]) === null || _a === void 0 ? void 0 : _a.trim) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.length) == 0)
                delete info[el];
        });
        return this.http.patch(url, info);
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "g8H4":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function LoginComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.err);
} }
const _c0 = function (a0) { return { "selected": a0 }; };
class LoginComponent {
    constructor(bsModalRef, authSer) {
        this.bsModalRef = bsModalRef;
        this.authSer = authSer;
        this.faWindowClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faWindowClose"];
        this.selected = "user";
        this.err = null;
        this.disabled = false;
        this.email = null;
        this.password = null;
    }
    ngOnInit() {
    }
    handleselect(type) {
        this.selected = type;
    }
    login(f) {
        for (const control in f.controls) {
            f.controls[control].markAsDirty();
            f.controls[control].markAsTouched();
        }
        if (f.valid) {
            this.disabled = true;
            this.authSer.login(this.email, this.password, this.selected).subscribe((res) => {
                localStorage.setItem("type", this.selected);
                this.disabled = false;
                this.authSer.setToken(res);
                this.authSer.authState.emit("Login");
                this.bsModalRef.hide();
            }, err => {
                var _a;
                this.disabled = false;
                console.log(err);
                this.err = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.err) || "Something went wrong";
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 14, consts: [[1, "modal-body", "p-4"], [1, "close", 3, "click"], [3, "icon"], [1, "mb-4"], [1, "d-flex", "mb-2"], [1, "btn", "btn-primary", "w-100", "mt-4", "mr-1", 3, "ngClass", "click"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "ngClass", "click"], ["class", "error", 4, "ngIf"], [1, "", 3, "ngSubmit"], ["f", "ngForm"], ["type", "email", "placeholder", "Enter your email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Enter your password", "name", "password", "required", "", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mt-4", 3, "disabled"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_1_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_7_listener() { return ctx.handleselect("user"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "I am a User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_9_listener() { return ctx.handleselect("supplier"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "I am a Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_p_11_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); return ctx.login(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faWindowClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, ctx.selected), " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.selected != "user"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.selected != "supplier"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.err);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n\n.close[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: red;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background: white;\n  color: #F56A00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBOztFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ1E7O0VBQ0ksMENBQUE7QUFFWjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFBSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlucHV0LFxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTJweCAjZWVlO1xyXG4gICAgJi5uZy10b3VjaGVkIHtcclxuICAgICAgICAmLm5nLWludmFsaWQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NSwgNDAsIDQwLCAwLjM4NCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICNGNTZBMDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "jK2D":
/*!****************************************************************!*\
  !*** ./src/app/pages/createmanager/createmanager.component.ts ***!
  \****************************************************************/
/*! exports provided: CreatemanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatemanagerComponent", function() { return CreatemanagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class CreatemanagerComponent {
    constructor(UserServ, router) {
        this.UserServ = UserServ;
        this.router = router;
        this.firstname = "";
        this.lastname = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.mobileNumber = "";
        this.dateOfBirth = "";
        this.nationalID = "";
        this.employeeLevel = "";
        this.image = "";
        this.err = null;
    }
    ngOnInit() {
    }
    createUser() {
        this.UserServ.createManager(this.firstname, this.lastname, this.username, this.email, this.password, this.mobileNumber, this.dateOfBirth, this.nationalID, "Manager", this.image).subscribe((res) => {
            // console.log(res)
            this.router.navigateByUrl('');
        }, err => {
            var _a;
            this.err = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.err) || "Something went wrong";
        });
    }
}
CreatemanagerComponent.ɵfac = function CreatemanagerComponent_Factory(t) { return new (t || CreatemanagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CreatemanagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatemanagerComponent, selectors: [["app-createmanager"]], decls: 34, vars: 9, consts: [[1, "container", "pb-5"], [1, ""], ["type", "text", "placeholder", "First Name", "name", "firstname", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last Name", "name", "lastname", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Username", "name", "username", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "User Email", "name", "email", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "name", "password", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "tel", "placeholder", "Moble Number", "name", "mobileNumber", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "date", "placeholder", "Date Of Birth", "name", "dateOfBirth", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "National ID", "name", "nationalID", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Employee Level", "value", "Manager", "readonly", "", 1, "mb-2"], ["type", "text", "placeholder", "Personal Image", "name", "image", 1, "mb-2", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"]], template: function CreatemanagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatemanagerComponent_Template_input_ngModelChange_4_listener($event) { return ctx.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatemanagerComponent_Template_input_ngModelChange_7_listener($event) { return ctx.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatemanagerComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatemanagerComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatemanagerComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mobile Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatemanagerComponent_Template_input_ngModelChange_19_listener($event) { return ctx.mobileNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatemanagerComponent_Template_input_ngModelChange_22_listener($event) { return ctx.dateOfBirth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "National ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatemanagerComponent_Template_input_ngModelChange_25_listener($event) { return ctx.nationalID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "User Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Personal Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatemanagerComponent_Template_input_ngModelChange_31_listener($event) { return ctx.image = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatemanagerComponent_Template_button_click_32_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Create Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateOfBirth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nationalID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.image);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGVtYW5hZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7O0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDUTs7RUFDSSwwQ0FBQTtBQUVaIiwiZmlsZSI6ImNyZWF0ZW1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEycHggI2VlZTtcclxuICAgICYubmctdG91Y2hlZCB7XHJcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODUsIDQwLCA0MCwgMC4zODQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "l2i1":
/*!******************************************************!*\
  !*** ./src/app/pages/supplier/supplier.component.ts ***!
  \******************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SupplierComponent {
    constructor() { }
    ngOnInit() {
    }
}
SupplierComponent.ɵfac = function SupplierComponent_Factory(t) { return new (t || SupplierComponent)(); };
SupplierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupplierComponent, selectors: [["app-supplier"]], decls: 2, vars: 0, template: function SupplierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "supplier works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "lm+D":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cart/cart.component */ "sHrM");
/* harmony import */ var _pages_createadmin_createadmin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/createadmin/createadmin.component */ "ccBt");
/* harmony import */ var _pages_createcompany_createcompany_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/createcompany/createcompany.component */ "8HFH");
/* harmony import */ var _pages_createcompanyadmin_createcompanyadmin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/createcompanyadmin/createcompanyadmin.component */ "qwFz");
/* harmony import */ var _pages_createmanager_createmanager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/createmanager/createmanager.component */ "jK2D");
/* harmony import */ var _pages_createproduct_createproduct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/createproduct/createproduct.component */ "wqbR");
/* harmony import */ var _pages_createsupplier_createsupplier_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/createsupplier/createsupplier.component */ "cp0p");
/* harmony import */ var _pages_createuser_createuser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/createuser/createuser.component */ "BIsl");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_payement_payement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/payement/payement.component */ "0jbg");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/products/products.component */ "fdtU");
/* harmony import */ var _pages_viewcompanies_viewcompanies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/viewcompanies/viewcompanies.component */ "5UBU");
/* harmony import */ var _pages_viewcompany_viewcompany_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/viewcompany/viewcompany.component */ "mRdz");
/* harmony import */ var _pages_viewmyproducts_viewmyproducts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/viewmyproducts/viewmyproducts.component */ "YXFk");
/* harmony import */ var _pages_viewmywallet_viewmywallet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/viewmywallet/viewmywallet.component */ "wa37");
/* harmony import */ var _pages_vieworders_vieworders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/vieworders/vieworders.component */ "Jlyp");
/* harmony import */ var _pages_vieworderstome_vieworderstome_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/vieworderstome/vieworderstome.component */ "7pvJ");
/* harmony import */ var _pages_viewproduct_viewproduct_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/viewproduct/viewproduct.component */ "F0TP");
/* harmony import */ var _pages_viewsupplier_viewsupplier_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/viewsupplier/viewsupplier.component */ "2Ham");
/* harmony import */ var _pages_viewsuppliers_viewsuppliers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/viewsuppliers/viewsuppliers.component */ "JZky");
/* harmony import */ var _pages_viewuser_viewuser_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/viewuser/viewuser.component */ "vRcg");
/* harmony import */ var _pages_viewusers_viewusers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/viewusers/viewusers.component */ "Zjyl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");


























const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'logout', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'products', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"] },
    { path: 'products/mechanical', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"] },
    { path: 'products/mechanical/hvac', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"] },
    { path: 'products/mechanical/firefighting', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"] },
    { path: 'products/mechanical/plumbing', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"] },
    { path: 'products/electrical', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"] },
    { path: 'products/electrical/lightcurrent', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"] },
    { path: 'products/electrical/highvoltage', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"] },
    { path: 'products/electrical/lowvoltage', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"] },
    { path: 'products/hardware', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"] },
    { path: 'viewproduct/:id', component: _pages_viewproduct_viewproduct_component__WEBPACK_IMPORTED_MODULE_19__["ViewproductComponent"] },
    { path: 'createcompany', component: _pages_createcompany_createcompany_component__WEBPACK_IMPORTED_MODULE_4__["CreatecompanyComponent"] },
    { path: 'createemployee', component: _pages_createuser_createuser_component__WEBPACK_IMPORTED_MODULE_9__["CreateuserComponent"] },
    { path: 'createmanager', component: _pages_createmanager_createmanager_component__WEBPACK_IMPORTED_MODULE_6__["CreatemanagerComponent"] },
    { path: 'createadmin', component: _pages_createadmin_createadmin_component__WEBPACK_IMPORTED_MODULE_3__["CreateadminComponent"] },
    { path: 'createcompanyadmin', component: _pages_createcompanyadmin_createcompanyadmin_component__WEBPACK_IMPORTED_MODULE_5__["CreatecompanyadminComponent"] },
    { path: 'createsupplier', component: _pages_createsupplier_createsupplier_component__WEBPACK_IMPORTED_MODULE_8__["CreatesupplierComponent"] },
    { path: 'createproduct/:id', component: _pages_createproduct_createproduct_component__WEBPACK_IMPORTED_MODULE_7__["CreateproductComponent"] },
    { path: 'viewuser/:id', component: _pages_viewuser_viewuser_component__WEBPACK_IMPORTED_MODULE_22__["ViewuserComponent"] },
    { path: 'viewcompany/:id', component: _pages_viewcompany_viewcompany_component__WEBPACK_IMPORTED_MODULE_14__["ViewcompanyComponent"] },
    { path: 'viewsupplier/:id', component: _pages_viewsupplier_viewsupplier_component__WEBPACK_IMPORTED_MODULE_20__["ViewsupplierComponent"] },
    { path: 'viewmyorders', component: _pages_vieworders_vieworders_component__WEBPACK_IMPORTED_MODULE_17__["ViewordersComponent"] },
    { path: 'viewusers', component: _pages_viewusers_viewusers_component__WEBPACK_IMPORTED_MODULE_23__["ViewusersComponent"] },
    { path: 'viewsuppliers', component: _pages_viewsuppliers_viewsuppliers_component__WEBPACK_IMPORTED_MODULE_21__["ViewsuppliersComponent"] },
    { path: 'viewcompanies', component: _pages_viewcompanies_viewcompanies_component__WEBPACK_IMPORTED_MODULE_13__["ViewcompaniesComponent"] },
    { path: 'viewmywallet', component: _pages_viewmywallet_viewmywallet_component__WEBPACK_IMPORTED_MODULE_16__["ViewmywalletComponent"] },
    { path: 'viewmyproducts/:id', component: _pages_viewmyproducts_viewmyproducts_component__WEBPACK_IMPORTED_MODULE_15__["ViewmyproductsComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'cart/:id', component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"] },
    { path: 'payement', component: _pages_payement_payement_component__WEBPACK_IMPORTED_MODULE_11__["PayementComponent"] },
    { path: 'vieworderstome', component: _pages_vieworderstome_vieworderstome_component__WEBPACK_IMPORTED_MODULE_18__["VieworderstomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                useHash: true
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "mRdz":
/*!************************************************************!*\
  !*** ./src/app/pages/viewcompany/viewcompany.component.ts ***!
  \************************************************************/
/*! exports provided: ViewcompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcompanyComponent", function() { return ViewcompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company/company.service */ "fyic");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ViewcompanyComponent_div_5_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewcompanyComponent_div_5_input_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r3.Company.companyNumber);
} }
function ViewcompanyComponent_div_5_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tax Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewcompanyComponent_div_5_input_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 6);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r5.Company.taxNumber);
} }
function ViewcompanyComponent_div_5_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewcompanyComponent_div_5_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.saveInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewcompanyComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewcompanyComponent_div_5_label_10_Template, 2, 0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewcompanyComponent_div_5_input_11_Template, 1, 1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewcompanyComponent_div_5_label_12_Template, 2, 0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ViewcompanyComponent_div_5_input_13_Template, 1, 1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ViewcompanyComponent_div_5_button_14_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.Company.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.Company.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.Company.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "Admin" || !ctx_r0.supplier && ctx_r0.loggedinuser.company == (ctx_r0.Company == null ? null : ctx_r0.Company._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "Admin" || !ctx_r0.supplier && ctx_r0.loggedinuser.company == (ctx_r0.Company == null ? null : ctx_r0.Company._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "Admin" || !ctx_r0.supplier && ctx_r0.loggedinuser.company == (ctx_r0.Company == null ? null : ctx_r0.Company._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "Admin" || !ctx_r0.supplier && ctx_r0.loggedinuser.company == (ctx_r0.Company == null ? null : ctx_r0.Company._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.supplier && (ctx_r0.loggedinuser == null ? null : ctx_r0.loggedinuser.employeeLevel) == "CompanyAdmin" && ctx_r0.loggedinuser.company == (ctx_r0.Company == null ? null : ctx_r0.Company._id));
} }
function ViewcompanyComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewcompanyComponent_div_6_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewcompanyComponent_div_6_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewcompanyComponent_div_6_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Company Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewcompanyComponent_div_6_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.companyNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tax Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewcompanyComponent_div_6_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.taxNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewcompanyComponent_div_6_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.saveInfo(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Update Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Company.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Company.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Company.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Company.companyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.companyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.Company.taxNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.taxNumber);
} }
class ViewcompanyComponent {
    constructor(router, activerouter, CompanySer) {
        this.router = router;
        this.activerouter = activerouter;
        this.CompanySer = CompanySer;
        this.Company = {};
        this.edit = false;
        this.name = "";
        this.email = "";
        this.address = "";
        this.companynumber = "";
        this.taxNumber = "";
        this.logo = "";
        this.supplier = false;
    }
    ngOnInit() {
        this.loggedinuser = JSON.parse(localStorage.getItem("currentuser")).user;
        if (this.loggedinuser == null) {
            this.supplier = true;
            this.loggedinuser = JSON.parse(localStorage.getItem("currentuser")).supplier;
        }
        this.activerouter.paramMap.subscribe((res) => {
            // console.log(res)
            this.getCompany(res.params.id);
        });
    }
    saveInfo(id) {
        this.edit = !this.edit;
        // console.log(this.edit);
        if (this.edit != true) {
            this.activerouter.paramMap.subscribe((res) => {
                // console.log(res)
                this.CompanySer.updateInfo(res.params.id, this.name, this.email, this.address, this.companynumber, this.taxNumber).subscribe((res) => {
                    // console.log(res);
                    this.Company = res;
                    this.router.navigateByUrl('viewcompanies'); // In implementation navigation goes to users page
                });
            });
        }
    }
    getCompany(id) {
        this.CompanySer.getCompany(id).subscribe((res) => {
            // console.log(res);
            this.Company = res;
        });
    }
}
ViewcompanyComponent.ɵfac = function ViewcompanyComponent_Factory(t) { return new (t || ViewcompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"])); };
ViewcompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewcompanyComponent, selectors: [["app-viewcompany"]], decls: 7, vars: 2, consts: [[1, "container", "pb-5"], [1, "row"], [1, "img-container", "col-md-2", "mb-5"], ["src", "/assets/images/orascom.png", "alt", "Avatar"], [1, ""], [4, "ngIf"], ["type", "text", "readonly", "", 1, "mb-2", 3, "value"], ["type", "email", "readonly", "", 1, "mb-2", 3, "value"], ["class", "mb-2", "type", "tel", "readonly", "", 3, "value", 4, "ngIf"], ["class", "mb-2", "type", "text", "readonly", "", 3, "value", 4, "ngIf"], ["class", "btn btn-primary w-100 mt-4", 3, "click", 4, "ngIf"], ["type", "tel", "readonly", "", 1, "mb-2", 3, "value"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"], ["type", "text", "name", "name", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "email", "name", "email", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "name", "address", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "tel", "name", "companyNumber", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "name", "taxNumber", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"]], template: function ViewcompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewcompanyComponent_div_5_Template, 15, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewcompanyComponent_div_6_Template, 18, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Company != null && ctx.edit == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Company != null && ctx.edit == true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n  cursor: pointer;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3Y29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBOztFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNROztFQUNJLDBDQUFBO0FBRVo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNSIiwiZmlsZSI6InZpZXdjb21wYW55LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMnB4ICNlZWU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTg1LCA0MCwgNDAsIDAuMzg0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "qwFz":
/*!**************************************************************************!*\
  !*** ./src/app/pages/createcompanyadmin/createcompanyadmin.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreatecompanyadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecompanyadminComponent", function() { return CreatecompanyadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company/company.service */ "fyic");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CreatecompanyadminComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", company_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", company_r1.name, " ");
} }
class CreatecompanyadminComponent {
    constructor(UserServ, router, companyServ) {
        this.UserServ = UserServ;
        this.router = router;
        this.companyServ = companyServ;
        this.firstname = "";
        this.lastname = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.mobileNumber = "";
        this.dateOfBirth = "";
        this.nationalID = "";
        this.employeeLevel = "";
        this.companies = [];
        this.company = "";
        this.image = "";
        this.err = null;
    }
    ngOnInit() {
        this.companyServ.getCompanies().subscribe((res) => {
            // console.log(res);
            this.companies = res;
        });
    }
    createUser() {
        this.UserServ.createCompanyAdmin(this.firstname, this.lastname, this.username, this.email, this.password, this.mobileNumber, this.dateOfBirth, this.nationalID, "CompanyAdmin", this.image, this.company).subscribe((res) => {
            // console.log(res)
            this.router.navigateByUrl('');
        }, err => {
            var _a;
            this.err = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.err) || "Something went wrong";
        });
    }
}
CreatecompanyadminComponent.ɵfac = function CreatecompanyadminComponent_Factory(t) { return new (t || CreatecompanyadminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"])); };
CreatecompanyadminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatecompanyadminComponent, selectors: [["app-createcompanyadmin"]], decls: 38, vars: 11, consts: [[1, "container", "pb-5"], [1, ""], ["type", "text", "placeholder", "First Name", "name", "firstname", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last Name", "name", "lastname", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Username", "name", "username", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "User Email", "name", "email", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "name", "password", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "tel", "placeholder", "Moble Number", "name", "mobileNumber", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "date", "placeholder", "Date Of Birth", "name", "dateOfBirth", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "National ID", "name", "nationalID", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["placeholder", "Company", "name", "company", 1, "mb-2", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Employee Level", "value", "Company Admin", "readonly", "", 1, "mb-2"], ["type", "text", "placeholder", "Personal Image", "name", "image", 1, "mb-2", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"], [3, "ngValue"]], template: function CreatecompanyadminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyadminComponent_Template_input_ngModelChange_4_listener($event) { return ctx.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyadminComponent_Template_input_ngModelChange_7_listener($event) { return ctx.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyadminComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyadminComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyadminComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mobile Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyadminComponent_Template_input_ngModelChange_19_listener($event) { return ctx.mobileNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyadminComponent_Template_input_ngModelChange_22_listener($event) { return ctx.dateOfBirth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "National ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyadminComponent_Template_input_ngModelChange_25_listener($event) { return ctx.nationalID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyadminComponent_Template_select_ngModelChange_28_listener($event) { return ctx.company = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CreatecompanyadminComponent_option_29_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "User Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Personal Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecompanyadminComponent_Template_input_ngModelChange_35_listener($event) { return ctx.image = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatecompanyadminComponent_Template_button_click_36_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Create Company Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateOfBirth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nationalID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.image);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGVjb21wYW55YWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTs7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNROztFQUNJLDBDQUFBO0FBRVoiLCJmaWxlIjoiY3JlYXRlY29tcGFueWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMnB4ICNlZWU7XHJcbiAgICAmLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTg1LCA0MCwgNDAsIDAuMzg0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 0, vars: 0, template: function AboutComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "sHrM":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CartComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Product Name: ", product_r4.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Price per unit: ", product_r4.productPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total price: ", product_r4.productPrice * product_r4.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Quanitity: ", product_r4.quantity, "");
} }
function CartComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.checkout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Place Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.loading);
} }
function CartComponent_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nothing in the cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CartComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Let's Shop Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/products");
} }
class CartComponent {
    constructor(router, activerouter, UserSer) {
        this.router = router;
        this.activerouter = activerouter;
        this.UserSer = UserSer;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
        this.err = null;
        this.loading = false;
    }
    ngOnInit() {
        this.activerouter.paramMap.subscribe((res) => {
            // console.log(res)
            this.UserSer.getUser(res.params.id).subscribe((res) => {
                this.cart = res.cart;
                // console.log(res)
                // console.log("cart")
                // console.log(this.cart)
            }, err => {
                var _a;
                this.err = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.err) || "Something went wrong";
            });
        });
    }
    checkout() {
        const products = this.cart.map((cart) => ({
            product: cart.product,
            quantity: cart.quantity,
            priceatPurchase: cart.quantity * cart.productPrice,
            supplier: cart.supplier
        }));
        const order = {
            products,
            price: products.map(element => element.priceatPurchase).reduce((a, b) => a + b)
        };
        this.loading = true;
        this.UserSer.checkout(order).subscribe((res) => {
            this.UserSer.decreasewalletandproductquantity(-order.price, order.products.map(element => ({ quantity: -element.quantity, product: element.product }))).subscribe(res => {
                // console.log(res)
                this.UserSer.clearcart().subscribe(orderres => {
                    this.router.navigateByUrl('viewmyorders');
                });
            });
        }, err => {
            var _a;
            this.err = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.err) || "Something went wrong";
            this.loading = false;
            alert(this.err);
        });
        //  this.router.navigateByUrl('payement')
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 7, vars: 4, consts: [[1, "container", "text-center"], [1, "text-center"], ["class", "card mb-2", 4, "ngFor", "ngForOf"], ["class", "btn btn-primary w-50 mt-4", 3, "disabled", "click", 4, "ngIf"], ["class", "pt-5 mt-5", 4, "ngIf"], ["style", "font-size: 20px; color: #F56A00;", 3, "routerLink", 4, "ngIf"], [1, "card", "mb-2"], [1, "card-body"], [1, "row"], [1, "img-container", "col-md-4"], ["src", "/assets/images/employee.jpg"], [1, "info", "col-md-8", "text-left"], [1, "card-title"], [1, "btn", "btn-primary", "w-50", "mt-4", 3, "disabled", "click"], [1, "pt-5", "mt-5"], [2, "font-size", "20px", "color", "#F56A00", 3, "routerLink"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CartComponent_div_3_Template, 14, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CartComponent_button_4_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CartComponent_h2_5_Template, 2, 0, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CartComponent_a_6_Template, 2, 1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.cart == null ? null : ctx.cart.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.cart || (ctx.cart == null ? null : ctx.cart.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.cart || (ctx.cart == null ? null : ctx.cart.length) == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.users[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 15px;\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n  width: 40px;\n  background-color: #F0F3F5;\n  color: #F56A00;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  padding: 10px;\n}\nbutton.plus[_ngcontent-%COMP%] {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\nbutton.minus[_ngcontent-%COMP%] {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #DADEE1;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRUE7RUFDSSxlQUFBO0FBQ0o7QUFFQTtFQUNJLFVBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNJLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBRVI7QUFEUTtFQUNJLDJDQUFBO0FBR1o7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtBQUVSO0FBQUk7RUFDSSwyQkFBQTtFQUNBLDhCQUFBO0FBRVI7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFFQTs7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ1E7O0VBQ0ksMENBQUE7QUFFWiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnVzZXJzIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxMCUpIDBweCAxcHggNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAxcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGM0Y1O1xyXG4gICAgY29sb3I6ICNGNTZBMDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgJi5wbHVzIHtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgICAmLm1pbnVzIHtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RBREVFMTtcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMnB4ICNlZWU7XHJcbiAgICAmLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTg1LCA0MCwgNDAsIDAuMzg0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "sS4B":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 2, vars: 0, template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vRcg":
/*!******************************************************!*\
  !*** ./src/app/pages/viewuser/viewuser.component.ts ***!
  \******************************************************/
/*! exports provided: ViewuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewuserComponent", function() { return ViewuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ViewuserComponent_div_6_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.User.employeeLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.User.wallet);
} }
function ViewuserComponent_div_6_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewuserComponent_div_6_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.saveInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewuserComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Date of birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "National ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ViewuserComponent_div_6_div_23_Template, 7, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ViewuserComponent_div_6_button_24_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.User.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.User.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.User.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.User.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.User.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 9, ctx_r0.User.dateOfBirth, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.User.nationalID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.User.employeeLevel == "Employee" && !ctx_r0.supplier && ctx_r0.loggedinuser.company == ctx_r0.User.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.viewedit == true);
} }
function ViewuserComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewuserComponent_div_7_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.firstname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewuserComponent_div_7_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.lastname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewuserComponent_div_7_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewuserComponent_div_7_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Enter New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewuserComponent_div_7_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewuserComponent_div_7_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.mobileNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Date of birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewuserComponent_div_7_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.dateOfBirth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewuserComponent_div_7_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.saveInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Update Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.User.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.User.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.User.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.User.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.User.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.User.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.User.dateOfBirth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.dateOfBirth);
} }
class ViewuserComponent {
    constructor(router, activerouter, UserSer) {
        this.router = router;
        this.activerouter = activerouter;
        this.UserSer = UserSer;
        this.User = {};
        this.email = "";
        this.limit = "";
        this.wallet = "";
        this.edit = false;
        this.lastname = "";
        this.username = "";
        this.password = "";
        this.firstname = "";
        this.nationalID = "";
        this.viewedit = true;
        this.supplier = false;
        this.dateOfBirth = "";
        this.mobileNumber = "";
    }
    ngOnInit() {
        this.activerouter.paramMap.subscribe((res) => {
            // console.log(res)
            this.getUser(res.params.id);
        });
    }
    saveInfo(id) {
        this.edit = !this.edit;
        // console.log(this.edit);
        if (this.edit != true) {
            this.activerouter.paramMap.subscribe((res) => {
                // console.log(res)
                this.UserSer.updateInfo(res.params.id, this.firstname, this.lastname, this.password, this.mobileNumber, this.dateOfBirth, this.email).subscribe((res) => {
                    // console.log(res);
                    this.User = res;
                    this.router.navigateByUrl(''); // In implementation navigation goes to users page
                });
            });
        }
    }
    getUser(id) {
        this.loggedinuser = JSON.parse(localStorage.getItem("currentuser")).user;
        if (this.loggedinuser == null) {
            this.supplier = true;
            this.loggedinuser = JSON.parse(localStorage.getItem("currentuser")).supplier;
        }
        // console.log(this.loggedinuser)
        if (this.loggedinuser._id == id) {
            this.viewedit = true;
        }
        else {
            this.viewedit = false;
        }
        this.UserSer.getUser(id).subscribe((res) => {
            this.User = res;
            // console.log(res);
            // console.log("USER", this.User)
        });
    }
}
ViewuserComponent.ɵfac = function ViewuserComponent_Factory(t) { return new (t || ViewuserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
ViewuserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewuserComponent, selectors: [["app-viewuser"]], decls: 8, vars: 2, consts: [[1, "container", "pb-5"], [1, "row"], [1, "img-container", "col-md-2", "mb-5"], ["src", "/assets/images/employee.jpg", "alt", "Avatar"], [1, ""], [4, "ngIf"], ["type", "text", "readonly", "", 1, "mb-2", 3, "value"], ["type", "email", "readonly", "", 1, "mb-2", 3, "value"], ["type", "tel", "readonly", "", 1, "mb-2", 3, "value"], ["class", "btn btn-primary w-100 mt-4", 3, "click", 4, "ngIf"], ["type", "number", "readonly", "", 1, "mb-2", 3, "value"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"], ["type", "text", "name", "firstname", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "name", "lastname", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "name", "username", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "email", "name", "email", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "password", "name", "password", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "tel", "name", "mobileNumber", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "date", "name", "dateOfBirth", 1, "mb-2", 3, "placeholder", "ngModel", "ngModelChange"]], template: function ViewuserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewuserComponent_div_6_Template, 25, 12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewuserComponent_div_7_Template, 24, 14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.User != null && ctx.edit == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.User != null && ctx.edit == true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n  cursor: pointer;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3dXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBOztFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNROztFQUNJLDBDQUFBO0FBRVo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNSIiwiZmlsZSI6InZpZXd1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMnB4ICNlZWU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTg1LCA0MCwgNDAsIDAuMzg0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "wa37":
/*!**************************************************************!*\
  !*** ./src/app/pages/viewmywallet/viewmywallet.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewmywalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewmywalletComponent", function() { return ViewmywalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ViewmywalletComponent {
    constructor() { }
    ngOnInit() {
    }
}
ViewmywalletComponent.ɵfac = function ViewmywalletComponent_Factory(t) { return new (t || ViewmywalletComponent)(); };
ViewmywalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewmywalletComponent, selectors: [["app-viewmywallet"]], decls: 2, vars: 0, template: function ViewmywalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "viewmywallet works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3bXl3YWxsZXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "wqbR":
/*!****************************************************************!*\
  !*** ./src/app/pages/createproduct/createproduct.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateproductComponent", function() { return CreateproductComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product/products.service */ "L0fj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







function CreateproductComponent_div_13_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateproductComponent_div_13_div_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.deletePriceRange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r5.faMinus);
} }
function CreateproductComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateproductComponent_div_13_Template_input_ngModelChange_4_listener($event) { const price_r3 = ctx.$implicit; return price_r3.minquantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateproductComponent_div_13_Template_input_ngModelChange_8_listener($event) { const price_r3 = ctx.$implicit; return price_r3.maxquantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Price in EGP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateproductComponent_div_13_Template_input_ngModelChange_12_listener($event) { const price_r3 = ctx.$implicit; return price_r3.priceofRange = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CreateproductComponent_div_13_div_13_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const price_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "startrange" + i_r4)("ngModel", price_r3.minquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "endrange" + i_r4)("ngModel", price_r3.maxquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "pricerange" + i_r4)("ngModel", price_r3.priceofRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.pricerange.length > 1);
} }
function CreateproductComponent_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "SubCategory");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateproductComponent_select_29_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", option_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r12.name, " ");
} }
function CreateproductComponent_select_29_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateproductComponent_select_29_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.subcategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateproductComponent_select_29_option_1_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.subcategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.SubCategorydata[ctx_r2.category]);
} }
class CreateproductComponent {
    constructor(router, activerouter, ProductSer) {
        this.router = router;
        this.activerouter = activerouter;
        this.ProductSer = ProductSer;
        this.name = "";
        this.description = "";
        this.specs = "";
        this.pricerange = [{ minquantity: 1, maxquantity: 10, priceofRange: 1000 }];
        this.quantity = "";
        this.category = "";
        this.photos = "";
        this.subcategory = "";
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"];
        this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faMinus"];
        this.SubCategorydata = {
            Mechanical: [{ name: "HVAC", value: "HVAC" }, { name: "FireFighting", value: "FireFighting" }, { name: "Plumbing", value: "Plumbing" }],
            Electrical: [{ name: "Light Current", value: "lightcurrent" }, { name: "High Voltage", value: "highvoltage" }, { name: "Low Voltage", value: "lowvoltage" }]
        };
        this.err = null;
    }
    ngOnInit() {
    }
    createProduct() {
        this.activerouter.paramMap.subscribe((res) => {
            // console.log(res)
            this.ProductSer.createProduct(res.params.id, this.name, this.description, this.specs, this.pricerange, this.quantity, this.category, this.photos, this.subcategory).subscribe((res) => {
                // console.log(res)
                this.router.navigateByUrl('');
            }, err => {
                var _a;
                this.err = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.err) || "Something went wrong";
            });
        });
    }
    addPriceRange() {
        this.pricerange.push({ minquantity: 0, maxquantity: 0, priceofRange: 0 });
    }
    deletePriceRange(index) {
        this.pricerange.splice(index, 1);
    }
}
CreateproductComponent.ɵfac = function CreateproductComponent_Factory(t) { return new (t || CreateproductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"])); };
CreateproductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateproductComponent, selectors: [["app-createproduct"]], decls: 35, vars: 12, consts: [[1, "container", "pb-5"], [1, ""], ["type", "text", "placeholder", "Product Name", "name", "name", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Product Description", "name", "description", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Product Specs", "name", "specs", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["class", "row m-0", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "mt-3"], ["type", "number", "placeholder", "Quantity", "name", "quantity", 1, "mb-2", 3, "ngModel", "ngModelChange"], ["placeholder", "Category", "name", "category", 1, "mb-2", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [4, "ngIf"], ["class", "mb-2", "placeholder", "SubCategory", "name", "subcategory", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "placeholder", "Product Photos", "name", "photos", 1, "mb-2", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"], [1, "row", "m-0"], [1, "mb-2", "col-12", "col-md-4", "px-1"], ["type", "number", "placeholder", "Start Of Range", 3, "name", "ngModel", "ngModelChange"], ["type", "number", "placeholder", "End of Range", 3, "name", "ngModel", "ngModelChange"], [1, "mb-2", "col-10", "col-md-3", "px-1"], ["type", "number", "placeholder", "Price", 3, "name", "ngModel", "ngModelChange"], ["class", " mb-2 col-2 col-md-1 ", 4, "ngIf"], [1, "mb-2", "col-2", "col-md-1"], [1, "minus", 3, "click"], [3, "icon"], ["placeholder", "SubCategory", "name", "subcategory", 1, "mb-2", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"]], template: function CreateproductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateproductComponent_Template_input_ngModelChange_4_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateproductComponent_Template_input_ngModelChange_7_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Products Specs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateproductComponent_Template_input_ngModelChange_10_listener($event) { return ctx.specs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Price Rang/se");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CreateproductComponent_div_13_Template, 14, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateproductComponent_Template_button_click_14_listener() { return ctx.addPriceRange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Add Price Range ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateproductComponent_Template_input_ngModelChange_18_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateproductComponent_Template_select_ngModelChange_21_listener($event) { return ctx.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Mechanical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Electrical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Hard Ware and Tools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CreateproductComponent_label_28_Template, 2, 0, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CreateproductComponent_select_29_Template, 2, 2, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Product Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateproductComponent_Template_input_ngModelChange_32_listener($event) { return ctx.photos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateproductComponent_Template_button_click_33_listener() { return ctx.createProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Create Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.specs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pricerange);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", "Mechanical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", "Electrical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", "HardWare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.category && ctx.SubCategorydata[ctx.category]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.category && ctx.SubCategorydata[ctx.category]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.photos);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  box-shadow: 0px 5px 12px #eee;\n}\n\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid rgba(185, 40, 40, 0.384);\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n  width: 40px;\n  background-color: #F0F3F5;\n  color: #F56A00;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  padding: 10px;\n}\n\nbutton.plus[_ngcontent-%COMP%] {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\nbutton.minus[_ngcontent-%COMP%] {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #DADEE1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGVwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7O0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDUTs7RUFDSSwwQ0FBQTtBQUVaOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUNJO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtBQUNSOztBQUNJO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBQUNSOztBQUNJO0VBQ0kseUJBQUE7QUFDUiIsImZpbGUiOiJjcmVhdGVwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMnB4ICNlZWU7XHJcbiAgICAmLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTg1LCA0MCwgNDAsIDAuMzg0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGM0Y1O1xyXG4gICAgY29sb3I6ICNGNTZBMDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgJi5wbHVzIHtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgICAmLm1pbnVzIHtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RBREVFMTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map