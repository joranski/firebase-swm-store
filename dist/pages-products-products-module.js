(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./src/app/pages/products/product/product-zoom/product-zoom.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/products/product/product-zoom/product-zoom.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-in\" (click)=\"zoomIn()\"><mat-icon>zoom_in</mat-icon></button>\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-out\" (click)=\"zoomOut()\"><mat-icon>zoom_out</mat-icon></button>\r\n    <button mat-mini-fab color=\"warn\" class=\"close\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div class=\"viewer\">\r\n        <img [src]=\"image\" #zoomImage>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./src/app/pages/products/product/product-zoom/product-zoom.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/products/product/product-zoom/product-zoom.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoom-dialog .mat-dialog-container {\n  overflow: visible !important; }\n  .zoom-dialog .mat-dialog-container .controls {\n    position: relative; }\n  .zoom-dialog .mat-dialog-container .controls button {\n      position: absolute;\n      top: -44px; }\n  .zoom-dialog .mat-dialog-container .controls .zoom-in {\n      right: 44px; }\n  .zoom-dialog .mat-dialog-container .controls .zoom-out {\n      right: 0; }\n  .zoom-dialog .mat-dialog-container .controls .close {\n      right: -44px; }\n  .zoom-dialog .mat-dialog-container .viewer {\n    width: 100%;\n    text-align: center; }\n  .zoom-dialog .mat-dialog-container .viewer img {\n      max-width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LXpvb20vQzpcXGFwcHNcXE5ldHN1aXRlRWNvbW1lcmNlL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdHNcXHByb2R1Y3RcXHByb2R1Y3Qtem9vbVxccHJvZHVjdC16b29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsNkJBQTRCLEVBd0IvQjtFQTFCTDtJQUlZLG1CQUFrQixFQWNyQjtFQWxCVDtNQU1nQixtQkFBa0I7TUFDbEIsV0FBVSxFQUNiO0VBUmI7TUFVZ0IsWUFBVyxFQUNkO0VBWGI7TUFhZ0IsU0FBUSxFQUNYO0VBZGI7TUFnQmdCLGFBQVksRUFDZjtFQWpCYjtJQW9CWSxZQUFXO0lBQ1gsbUJBQWtCLEVBSXJCO0VBekJUO01BdUJnQixlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LXpvb20vcHJvZHVjdC16b29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnpvb20tZGlhbG9ne1xyXG4gICAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmNvbnRyb2xze1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTQ0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnpvb20taW57XHJcbiAgICAgICAgICAgICAgICByaWdodDogNDRweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnpvb20tb3V0e1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jbG9zZXtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDRweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpZXdlcntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/products/product/product-zoom/product-zoom.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/products/product/product-zoom/product-zoom.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductZoomComponent", function() { return ProductZoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProductZoomComponent = /** @class */ (function () {
    function ProductZoomComponent(dialogRef, image) {
        this.dialogRef = dialogRef;
        this.image = image;
        this.count = 10;
        this.maxWidth = 60;
    }
    ProductZoomComponent.prototype.ngOnInit = function () { };
    ProductZoomComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ProductZoomComponent.prototype.zoomIn = function () {
        if (this.count < 60) {
            this.maxWidth = this.maxWidth + this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
            this.count = this.count + 10;
        }
    };
    ProductZoomComponent.prototype.zoomOut = function () {
        if (this.count > 10) {
            this.count = this.count - 10;
            this.maxWidth = this.maxWidth - this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomImage'),
        __metadata("design:type", Object)
    ], ProductZoomComponent.prototype, "zoomImage", void 0);
    ProductZoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-zoom',
            template: __webpack_require__(/*! ./product-zoom.component.html */ "./src/app/pages/products/product/product-zoom/product-zoom.component.html"),
            styles: [__webpack_require__(/*! ./product-zoom.component.scss */ "./src/app/pages/products/product/product-zoom/product-zoom.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ProductZoomComponent);
    return ProductZoomComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/product/product.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/products/product/product.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"35\" fxFlex.md=\"45\">\r\n        \r\n        <mat-card class=\"product-image\">\r\n            <button mat-icon-button (click)=\"openZoomViewer()\" fxHide=\"false\" fxHide.gt-md><mat-icon>fullscreen</mat-icon></button>\r\n            <img *ngIf=\"image\" [src]=\"image\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\"/>\r\n        </mat-card>       \r\n\r\n        <div class=\"small-carousel\"> \r\n            <div class=\"swiper-container\" [swiper]=\"config\">\r\n                <div class=\"swiper-wrapper\"> \r\n                    <div *ngFor=\"let image of product?.images\" class=\"swiper-slide\">\r\n                        <mat-card (click)=\"selectImage(image)\" class=\"p-1\">\r\n                            <img [attr.data-src]=\"image.small\" class=\"swiper-lazy\"/>\r\n                            <div class=\"swiper-lazy-preloader\"></div>\r\n                        </mat-card>\r\n                    </div>                    \r\n                </div>\r\n                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"45\" fxFlex.md=\"55\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n        \r\n        <div #zoomViewer fxShow=\"false\" fxShow.gt-md>\r\n            <mat-card *ngIf=\"zoomImage\" class=\"zoom-viewer mat-elevation-z18\" [ngStyle]=\"{'background-image': 'url(' + zoomImage + ')'}\"></mat-card>\r\n        </div>\r\n\r\n        <h2>{{product?.name}}</h2>\r\n        <div class=\"py-1 lh\">\r\n            <p><span class=\"text-muted fw-500\">Category: </span><span>{{ ( appService.Data.categories | filterById : product?.categoryId )?.name }}</span></p>\r\n            <p><span class=\"text-muted fw-500\">Availibility: </span><span>{{ (product?.availibilityCount > 0) ? 'In stock':'Unavailable'}}</span></p>\r\n        </div>                 \r\n        <div class=\"py-1\">\r\n            <app-rating [ratingsCount]=\"product?.ratingsCount\" [ratingsValue]=\"product?.ratingsValue\" [direction]=\"'row'\"></app-rating>\r\n        </div>\r\n        <p class=\"py-1 text-muted lh\">{{product?.description}}</p>\r\n\r\n        <div class=\"divider mt-1\"></div>\r\n        <h2 class=\"py-2 new-price\">${{product?.newPrice}}</h2>\r\n\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"details text-muted py-1\">\r\n            <div *ngIf=\"product?.color\" class=\"color\">\r\n                <span class=\"fw-500\">Select Color:</span>\r\n                <button mat-raised-button *ngFor=\"let color of product?.color\" [style.background]=\"color\">&nbsp;</button>              \r\n            </div>\r\n            <div *ngIf=\"product?.size\" class=\"size\" ngClass.xs=\"mt-1\">\r\n                <span class=\"fw-500\">Select Size:</span>\r\n                <button mat-raised-button *ngFor=\"let size of product?.size\">{{size}}</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"py-1\">\r\n            <app-controls [product]=\"product\" [type]=\"'all'\"></app-controls> \r\n        </div>\r\n\r\n        <div class=\"divider\"></div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted py-1\">\r\n            <button mat-button><mat-icon>mail_outline</mat-icon> Email to a Friend</button>\r\n            <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n        </div>\r\n\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"20\" fxHide fxShow.gt-md> \r\n\r\n        <div fxLayout=\"row wrap\" class=\"info-bar\" ngClass.gt-md=\"m-0\">\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\">\r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">card_giftcard</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>BONUS PLUS</p> \r\n                        <span class=\"text-muted m-0\">Make fun of shopping and collect bonuses</span>\r\n                    </div> \r\n                </mat-card> \r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\"> \r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">local_shipping</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>FREE SHIPPING</p> \r\n                        <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n                    </div> \r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\"fxFlex.sm=\"50\" class=\"mt-16\"> \r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">monetization_on</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>MONEY BACK GUARANTEE</p> \r\n                        <span class=\"text-muted m-0\">30 Days money return guarantee</span>\r\n                    </div> \r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\"> \r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">history</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>ONLINE SUPPORT 24/7</p> \r\n                        <span class=\"text-muted m-0\">Call us: (+100) 123 456 7890</span>\r\n                    </div> \r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\" class=\"mt-2\">\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"78\" fxFlex.md=\"74\">\r\n        <mat-card> \r\n            <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"0\">       \r\n                <mat-tab label=\"Description\">\r\n                    <div class=\"full-desc lh\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nulla metus. Maecenas commodo turpis dui, porttitor tincidunt enim mollis a. Curabitur eu velit mi. Nullam congue turpis id metus sollicitudin, id cursus nulla laoreet. Proin commodo eu felis at malesuada. Nulla ac facilisis justo, eget vulputate ex. Nulla nec laoreet nulla. Cras auctor leo at diam congue, quis convallis urna pulvinar. Nunc ut mi nulla. Nunc ligula massa, vulputate sed scelerisque sit amet, dapibus semper est. Sed sed blandit turpis. Vestibulum id porttitor ligula, at iaculis ligula. Pellentesque vel tellus sit amet mauris aliquet bibendum id et lorem.</p>\r\n                        <ul class=\"px-2 mt-1\">\r\n                            <li>Phasellus eu justo dictum, varius eros ut, posuere sapien.</li>\r\n                            <li>Nulla eu erat sit amet enim lobortis rhoncus.</li>\r\n                            <li>Etiam eu mauris in massa convallis ornare non id ex.</li>\r\n                            <li>Nam sagittis augue at pretium pharetra.</li>\r\n                            <li>Sed a sem id massa egestas porta a sit amet felis.</li>\r\n                            <li>Duis aliquam urna in sapien cursus consequat.</li>\r\n                        </ul>\r\n                        <p class=\"mt-1\">Duis eu felis ultricies urna pharetra efficitur nec non elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur posuere eu justo eget mollis. Sed semper accumsan urna vel rutrum. Nulla condimentum quis lacus ut semper. Quisque at massa pretium, porta ligula ut, rutrum elit. Pellentesque et orci sit amet dolor laoreet tempor sed eu sem. Morbi lacinia pellentesque tellus euismod eleifend.</p>\r\n                        <p class=\"mt-1\">Quisque fringilla eros id ligula luctus, a gravida augue sodales. Sed eget augue ut lectus condimentum volutpat. Morbi quis nunc viverra, gravida arcu quis, varius metus. Praesent tincidunt ipsum est, quis molestie ligula efficitur ut. Nunc interdum erat eu tortor maximus suscipit. Vivamus nec laoreet dui. Nullam dignissim laoreet metus quis pretium.</p>\r\n                    </div>\r\n                </mat-tab>\r\n                <mat-tab label=\"Additional information\">\r\n                    <div class=\"full-desc lh\">\r\n                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n                        <ul class=\"px-2 mt-1\">\r\n                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n                            <li>Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                            <li>Donec et elit at nulla congue interdum sit amet varius erat.</li>\r\n                            <li>Nulla sit amet risus pellentesque, dignissim massa ut, dignissim arcu.</li>\r\n                            <li>Morbi dapibus ligula at faucibus tempus. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                            <li>Nunc sodales justo ut nisi euismod, quis condimentum leo varius.</li>\r\n                        </ul>\r\n                        <ul class=\"px-2 mt-1\">\r\n                            <li>Phasellus eu justo dictum, varius eros ut, posuere sapien.</li>\r\n                            <li>Nulla eu erat sit amet enim lobortis rhoncus.</li>\r\n                            <li>Etiam eu mauris in massa convallis ornare non id ex.</li>\r\n                            <li>Nam sagittis augue at pretium pharetra.</li>\r\n                            <li>Sed a sem id massa egestas porta a sit amet felis.</li>\r\n                            <li>Duis aliquam urna in sapien cursus consequat. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                        </ul>\r\n                    </div>\r\n                \r\n\r\n                </mat-tab>\r\n                <mat-tab label=\"Reviews\">\r\n                    <div class=\"full-desc lh\">\r\n                        <mat-list class=\"reviews\">\r\n                            <mat-list-item class=\"h-100 py-1\">\r\n                                <img matListAvatar [src]=\"'assets/images/avatars/avatar-1.png'\" alt=\"image\" class=\"review-author\">\r\n                                <p matLine fxLayoutAlign=\"start center\">\r\n                                    <span class=\"fw-500\">Bruno Vespa</span> \r\n                                    <mat-icon class=\"text-muted px-1\" matTooltip=\"Dissatisfied\" matTooltipPosition=\"after\">sentiment_dissatisfied</mat-icon>\r\n                                </p>\r\n                                <p matLine class=\"text-muted\"><small>13 January, 2018 at 7:09</small></p>\r\n                                <p matLine class=\"text\">Integer id eros et mi fringilla imperdiet. In dictum turpis eget magna viverra condimentum. Ut malesuada interdum ultrices. Proin tristique sem pellentesque, posuere dui in, maximus magna. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna.</p>\r\n                            </mat-list-item>\r\n                            <mat-list-item class=\"h-100 py-1\">\r\n                                <img matListAvatar [src]=\"'assets/images/avatars/avatar-2.png'\" alt=\"image\" class=\"review-author\">\r\n                                <p matLine fxLayoutAlign=\"start center\">\r\n                                    <span class=\"fw-500\">Julia Aniston</span> \r\n                                    <mat-icon class=\"text-muted px-1\" matTooltip=\"Very Satisfied\" matTooltipPosition=\"after\">sentiment_very_satisfied</mat-icon>\r\n                                </p>\r\n                                <p matLine class=\"text-muted\"><small>04 February, 2018 at 10:22</small></p>\r\n                                <p matLine class=\"text\">Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus, in accumsan urna mi vehicula lorem. Pellentesque semper nibh vitae augue placerat finibus. Nulla sed porttitor nunc, quis tristique sem. Quisque in varius nisl. Integer turpis lorem, ultricies sed sem nec, commodo molestie arcu. Nulla finibus ex tortor, et suscipit magna semper consectetur. Cras sit amet metus dui. Maecenas eget dui at ex varius malesuada vel non felis.</p>\r\n                            </mat-list-item>\r\n                            <mat-list-item class=\"h-100 py-1\">\r\n                                <img matListAvatar [src]=\"'assets/images/avatars/avatar-3.png'\" alt=\"image\" class=\"review-author\">\r\n                                <p matLine fxLayoutAlign=\"start center\">\r\n                                    <span class=\"fw-500\">Andy Warhol</span> \r\n                                    <mat-icon class=\"text-muted px-1\" matTooltip=\"Neutral\" matTooltipPosition=\"after\">sentiment_neutral</mat-icon>\r\n                                </p>\r\n                                <p matLine class=\"text-muted\"><small>14 February, 2018 at 11:10</small></p>\r\n                                <p matLine class=\"text\">Pellentesque hendrerit vel turpis aliquam placerat. Suspendisse ullamcorper congue feugiat. Etiam gravida metus ac massa posuere venenatis. Pellentesque vehicula lobortis dolor, ac pretium dolor maximus quis. Fusce vitae iaculis mauris, quis posuere ex. Mauris vitae convallis nibh. Etiam eget enim at orci interdum maximus nec in ante.</p>\r\n                            </mat-list-item>\r\n                        </mat-list>\r\n                        \r\n                        <h3 class=\"mt-2\">LEAVE YOUR REVIEW</h3>\r\n                        <div class=\"divider\"></div>\r\n                        <p class=\"mt-2 text-muted\">Your email address will not be published. Required fields are marked *</p>\r\n                        <h3 fxLayoutAlign=\"start center\" class=\"mt-2\">\r\n                            <span>Your Rating:</span>\r\n                            <button mat-icon-button matTooltip=\"Very Dissatisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_very_dissatisfied</mat-icon></button>\r\n                            <button mat-icon-button matTooltip=\"Dissatisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_dissatisfied</mat-icon></button>\r\n                            <button mat-icon-button matTooltip=\"Neutral\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_neutral</mat-icon></button>\r\n                            <button mat-icon-button matTooltip=\"Satisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_satisfied</mat-icon></button>\r\n                            <button mat-icon-button matTooltip=\"Very Satisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_very_satisfied</mat-icon></button>\r\n                        </h3>\r\n\r\n                        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" fxLayout=\"row wrap\">\r\n                            <div fxFlex=\"100\" class=\"px-1 mt-1\">\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <textarea matInput placeholder=\"Your review\" formControlName=\"review\" required></textarea>\r\n                                    <mat-error *ngIf=\"form.controls.review.errors?.required\">Review is required</mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"Your name\" formControlName=\"name\" required>\r\n                                    <mat-error *ngIf=\"form.controls.name.errors?.required\">Name is required</mat-error>\r\n                                    <mat-error *ngIf=\"form.controls.name.hasError('minlength')\">Name isn't long enough, minimum of 4 characters</mat-error>\r\n                                </mat-form-field> \r\n                            </div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"Your email\" formControlName=\"email\" required>\r\n                                    <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                                    <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                                </mat-form-field> \r\n                            </div>\r\n                            <div fxFlex=\"100\" class=\"mt-2 text-center w-100\">\r\n                                <button mat-raised-button color=\"primary\" type=\"submit\">SUBMIT REVIEW</button>\r\n                            </div>\r\n                        </form>\r\n\r\n                        \r\n                    </div>\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"22\" fxFlex.md=\"26\" ngClass.gt-sm=\"pl-3\" fxHide fxShow.gt-sm>\r\n        <img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%201\" alt=\"\" class=\"mw-100 d-block\">\r\n        <img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%202\" alt=\"\" class=\"mw-100 d-block mt-3\">\r\n        <img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%203\" alt=\"\" class=\"mw-100 d-block mt-3\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"py-2 mt-2\">\r\n    <h2>Related Products</h2>\r\n    <div class=\"divider\"></div>\r\n    <app-products-carousel [products]=\"relatedProducts\"></app-products-carousel>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/products/product/product.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/products/product/product.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n  .mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n  .mat-card.product-image img {\n    max-width: 100%; }\n  .small-carousel {\n  margin-top: 8px; }\n  .small-carousel .swiper-container {\n    padding: 2px; }\n  .small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n  .small-carousel .swiper-container .swiper-slide img {\n        max-width: 100%; }\n  .small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n  .small-carousel .swiper-button-prev {\n    left: -10px; }\n  .small-carousel .swiper-button-next {\n    right: -10px; }\n  .mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n  .mt-16 {\n  margin-top: 16px; }\n  .details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n  .mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n  .mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n  .full-desc {\n  padding: 30px 40px; }\n  @media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9DOlxcYXBwc1xcTmV0c3VpdGVFY29tbWVyY2Uvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0c1xccHJvZHVjdFxccHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFVckI7RUFaRDtJQUlRLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sU0FBUTtJQUNSLFlBQVcsRUFDZDtFQVJMO0lBVVEsZ0JBQWUsRUFDbEI7RUFHTDtFQUNJLGdCQUFlLEVBb0JsQjtFQXJCRDtJQUdRLGFBQVksRUFPZjtFQVZMO01BS1ksbUJBQWtCLEVBSXJCO0VBVFQ7UUFPZ0IsZ0JBQWUsRUFDbEI7RUFSYjs7SUFhUSxXQUFVLEVBQ2I7RUFkTDtJQWdCUSxZQUFXLEVBQ2Q7RUFqQkw7SUFtQlEsYUFBWSxFQUNmO0VBR0w7RUFDSSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLDZCQUE0QjtFQUM1QixhQUFZO0VBQ1osWUFBVyxFQUNkO0VBRUQ7RUFDSSxpQkFBZ0IsRUFDbkI7RUFFRDtFQUNJLFdBQVM7RUFDVCxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjtFQUVEO0VBRVEsWUFBVztFQUNYLGFBQVksRUFDZjtFQUpMO0VBTVEsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixlQUFjLEVBQ2pCO0VBRUw7RUFDSSxtQkFBa0IsRUFDckI7RUFHRDtFQUNJO0lBQ0ksZ0JBQWU7SUFDZix1Q0FBc0UsRUFDekUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnNtYWxsLWNhcm91c2Vse1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgLnN3aXBlci1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIC5zd2lwZXItc2xpZGV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLCBcclxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldntcclxuICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLW5leHR7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWNhcmQuem9vbS12aWV3ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4ubXQtMTZ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uZGV0YWlscyBidXR0b257XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcblxyXG4ubWF0LWxpc3QucmV2aWV3c3tcclxuICAgIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1hdmF0YXIucmV2aWV3LWF1dGhvcntcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUudGV4dHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG59XHJcbi5mdWxsLWRlc2N7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7ICBcclxuICAgIC5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIGltZ3tcclxuICAgICAgICBjdXJzb3I6IHpvb20taW47XHJcbiAgICAgICAgY3Vyc29yOnVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vdGhlcnMvem9vbS5zdmcnKSAxMCAxMCwgem9vbS1pbjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/products/product/product.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/products/product/product.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-zoom/product-zoom.component */ "./src/app/pages/products/product/product-zoom/product-zoom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductComponent = /** @class */ (function () {
    function ProductComponent(appService, activatedRoute, dialog, formBuilder) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.config = {};
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.getProductById(params['id']);
        });
        this.form = this.formBuilder.group({
            'review': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__["emailValidator"]])]
        });
        this.getRelatedProducts();
    };
    ProductComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3,
                }
            }
        };
    };
    ProductComponent.prototype.getProductById = function (id) {
        var _this = this;
        this.appService.getProductById(id).subscribe(function (data) {
            _this.product = data;
            _this.image = data.images[0].medium;
            _this.zoomImage = data.images[0].big;
            setTimeout(function () {
                _this.config.observer = true;
                // this.directiveRef.setIndex(0);
            });
        });
    };
    ProductComponent.prototype.getRelatedProducts = function () {
        var _this = this;
        this.appService.getProducts('related').subscribe(function (data) {
            _this.relatedProducts = data;
        });
    };
    ProductComponent.prototype.selectImage = function (image) {
        this.image = image.medium;
        this.zoomImage = image.big;
    };
    ProductComponent.prototype.onMouseMove = function (e) {
        if (window.innerWidth >= 1280) {
            var image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];
            if (zoomer) {
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = "block";
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    };
    ProductComponent.prototype.onMouseLeave = function (event) {
        this.zoomViewer.nativeElement.children[0].style.display = "none";
    };
    ProductComponent.prototype.openZoomViewer = function () {
        this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_7__["ProductZoomComponent"], {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            //email sent
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomViewer'),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "zoomViewer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"]),
        __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"])
    ], ProductComponent.prototype, "directiveRef", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/pages/products/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/products/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/products.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n    <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"filter-sidenav\" perfectScrollbar>\r\n        \r\n        <mat-accordion displayMode=\"flat\" multi=\"true\">\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Categories</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"categories-wrapper categories-dropdown\" perfectScrollbar>\r\n                    <app-category-list [categories]=\"categories\" [categoryParentId]=\"0\" (change)=\"onChangeCategory($event)\"></app-category-list>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Price</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n                    <span>From: <b>${{priceFrom}}</b></span>\r\n                    <span>To: <b>${{priceTo}}</b></span>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"filter-price\">\r\n                    <mat-slider color=\"primary\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceFrom\"></mat-slider>\r\n                    <mat-slider color=\"warn\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceTo\"></mat-slider>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Color</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-buttons\">\r\n                    <button mat-raised-button *ngFor=\"let color of colors\" [style.background]=\"color\">&nbsp;</button>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Size</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-buttons\">\r\n                    <button mat-raised-button *ngFor=\"let size of sizes\">{{size}}</button>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Condition</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"column\">\r\n                    <mat-checkbox color=\"primary\">New</mat-checkbox>\r\n                    <mat-checkbox color=\"primary\">Used</mat-checkbox>\r\n                    <mat-checkbox color=\"primary\">Not Specified</mat-checkbox>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Brands</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-brands\">                  \r\n                    <button mat-raised-button *ngFor=\"let brand of brands\">\r\n                        <img [src]=\"brand.image\"/>\r\n                    </button>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Now starting at $1379</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n                   <a [routerLink]=\"['/products/electronics']\"><img src=\"assets/images/products/probook/2-medium.png\" alt=\"\" class=\"mw-100\"></a>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n        </mat-accordion>\r\n\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"filter-row mat-elevation-z1 text-muted\">\r\n            <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <div>\r\n                <a mat-button [matMenuTriggerFor]=\"sortMenu\" #sortMenuTrigger=\"matMenuTrigger\">\r\n                    {{sort}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\r\n                            <span>{{sort}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n            </div>\r\n            <div>\r\n                <a mat-button [matMenuTriggerFor]=\"countsMenu\" #countsMenuTrigger=\"matMenuTrigger\">\r\n                    Show {{count}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #countsMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"countsMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let count of counts\" (click)=\"changeCount(count)\">\r\n                            <span>{{count}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n                <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n                    <mat-icon>view_list</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 33.3)\">\r\n                    <mat-icon>view_module</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 25)\">\r\n                    <mat-icon>view_comfy</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div *ngFor=\"let product of products | paginate: { itemsPerPage: count, currentPage: page }\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\" fxFlex.sm=\"50\" class=\"col\">\r\n                <mat-card class=\"product-item text-center\">\r\n                    <mat-chip-list *ngIf=\"product.discount\">\r\n                        <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                    </mat-chip-list>\r\n                    <a [routerLink]=\"['/products', product.id, product.name]\" class=\"image-link\">\r\n                        <img [src]=\"product.images[0].medium\" alt=\"\">\r\n                    </a>\r\n                    <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \r\n                    <a [routerLink]=\"['/products', product.id, product.name]\" class=\"title text-truncate\">\r\n                        {{product.name}}\r\n                    </a>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                            <p class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                        </div>\r\n                        <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>\r\n                    </div>                            \r\n                    <div class=\"divider mt-2\"></div>\r\n                    <div class=\"icons\">\r\n                        <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'list'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div  *ngFor=\"let product of products | paginate: { itemsPerPage: count, currentPage: page }\" fxFlex=\"100\" class=\"col\">\r\n                <mat-card class=\"product-item\">\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"p-2\">\r\n                            <mat-chip-list *ngIf=\"product.discount\" class=\"list-view\">\r\n                                <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                            </mat-chip-list>\r\n                            <a [routerLink]=\"['/products', product.id, product.name]\" class=\"image-link\">\r\n                                <img [src]=\"product.images[0].medium\" alt=\"\">\r\n                            </a>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"p-2\">\r\n                            <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \r\n                            <a [routerLink]=\"['/products', product.id, product.name]\" class=\"title\">\r\n                                {{product.name}}\r\n                            </a>\r\n                            <p class=\"py-1 text-muted lh\">{{product.description}}</p>\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                                <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                    <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                                    <p class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                                </div>\r\n                                <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>\r\n                            </div>                            \r\n                            <div class=\"divider\"></div>\r\n                            <div class=\"icons\">\r\n                                <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"products.length > 0\" fxLayout=\"row wrap\">\r\n            <div fxFlex=\"100\"> \r\n                <mat-card class=\"p-0 text-center\">           \r\n                    <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n        \r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/pages/products/products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-sidenav {\n  width: 280px;\n  border: 0 !important; }\n  .filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n  .filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n  .all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden; }\n  .all-products.p-left {\n    padding-left: 16px; }\n  .products-wrapper {\n  margin: 8px -8px; }\n  .products-wrapper .col {\n    padding: 8px; }\n  .categories-wrapper {\n  position: relative;\n  max-height: 300px; }\n  .filter-buttons button {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0; }\n  .filter-price .mat-slider-horizontal {\n  min-width: 110px; }\n  .filter-brands button {\n  width: 66px;\n  height: 44px;\n  min-width: 66px;\n  margin: 0 6px 10px 0;\n  padding: 0px;\n  overflow: hidden; }\n  .filter-brands button img {\n    width: 66px;\n    height: 44px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvQzpcXGFwcHNcXE5ldHN1aXRlRWNvbW1lcmNlL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLHFCQUFvQixFQUl2QjtFQU5EO0lBSVEsMEJBQXlCLEVBQzVCO0VBRUw7RUFDSSxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ3BCO0VBQ0Q7RUFDSSxrQkFBaUI7RUFDakIsYUFBWTtFQUNaLGlCQUFnQixFQUluQjtFQVBEO0lBS1EsbUJBQWtCLEVBQ3JCO0VBR0w7RUFDSSxpQkFBZ0IsRUFJbkI7RUFMRDtJQUdRLGFBQVksRUFDZjtFQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUNwQjtFQUVEO0VBRVEsZ0JBQWU7RUFDZixxQkFBb0I7RUFDcEIsV0FBVSxFQUNiO0VBR0w7RUFFUSxpQkFBZ0IsRUFDbkI7RUFHTDtFQUVRLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixxQkFBb0I7RUFDcEIsYUFBWTtFQUNaLGlCQUFnQixFQUtuQjtFQVpMO0lBU1ksWUFBVztJQUNYLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1zaWRlbmF2e1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbn1cclxuLmZpbHRlci1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbn1cclxuLmFsbC1wcm9kdWN0c3tcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICYucC1sZWZ0e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2R1Y3RzLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW46IDhweCAtOHB4O1xyXG4gICAgLmNvbHtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmZpbHRlci1idXR0b25ze1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1pbi13aWR0aDogMzZweDtcclxuICAgICAgICBtYXJnaW46IDAgNnB4IDEwcHggMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsdGVyLXByaWNle1xyXG4gICAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbHtcclxuICAgICAgICBtaW4td2lkdGg6IDExMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsdGVyLWJyYW5kc3tcclxuICAgIGJ1dHRvbntcclxuICAgICAgICB3aWR0aDogNjZweDtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2NnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCA2cHggMTBweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDY2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/products-carousel/product-dialog/product-dialog.component */ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(activatedRoute, appService, dialog, router) {
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.dialog = dialog;
        this.router = router;
        this.sidenavOpen = true;
        this.viewType = 'grid';
        this.viewCol = 25;
        this.counts = [12, 24, 36];
        this.sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
        this.products = [];
        this.brands = [];
        this.priceFrom = 750;
        this.priceTo = 1599;
        this.colors = ["#5C6BC0", "#66BB6A", "#EF5350", "#BA68C8", "#FF4081", "#9575CD", "#90CAF9", "#B2DFDB", "#DCE775", "#FFD740", "#00E676", "#FBC02D", "#FF7043", "#F5F5F5", "#000000"];
        this.sizes = ["S", "M", "L", "XL", "2XL", "32", "36", "38", "46", "52", "13.3\"", "15.4\"", "17\"", "21\"", "23.4\""];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.count = this.counts[0];
        this.sort = this.sortings[0];
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            //console.log(params['name']);
        });
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
        this.getCategories();
        this.getBrands();
        this.getAllProducts();
    };
    ProductsComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.appService.getProducts("featured").subscribe(function (data) {
            _this.products = data;
            //for show more product  
            for (var index = 0; index < 3; index++) {
                _this.products = _this.products.concat(_this.products);
            }
        });
    };
    ProductsComponent.prototype.getCategories = function () {
        var _this = this;
        if (this.appService.Data.categories.length == 0) {
            this.appService.getCategories().subscribe(function (data) {
                _this.categories = data;
                _this.appService.Data.categories = data;
            });
        }
        else {
            this.categories = this.appService.Data.categories;
        }
    };
    ProductsComponent.prototype.getBrands = function () {
        this.brands = this.appService.getBrands();
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductsComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    };
    ProductsComponent.prototype.changeCount = function (count) {
        this.count = count;
        this.getAllProducts();
    };
    ProductsComponent.prototype.changeSorting = function (sort) {
        this.sort = sort;
    };
    ProductsComponent.prototype.changeViewType = function (viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    };
    ProductsComponent.prototype.openProductDialog = function (product) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog'
        });
        dialogRef.afterClosed().subscribe(function (product) {
            if (product) {
                _this.router.navigate(['/products', product.id, product.name]);
            }
        });
    };
    ProductsComponent.prototype.onPageChanged = function (event) {
        this.page = event;
        this.getAllProducts();
        window.scrollTo(0, 0);
    };
    ProductsComponent.prototype.onChangeCategory = function (event) {
        if (event.target) {
            this.router.navigate(['/products', event.target.innerText.toLowerCase()]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductsComponent.prototype, "onWindowResize", null);
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/pages/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/pages/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: routes, ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/pages/products/product/product.component.ts");
/* harmony import */ var _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product-zoom/product-zoom.component */ "./src/app/pages/products/product/product-zoom/product-zoom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"], pathMatch: 'full' },
    { path: ':name', component: _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"] },
    { path: ':id/:name', component: _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"] }
];
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
            ],
            declarations: [
                _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
                _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__["ProductZoomComponent"]
            ],
            entryComponents: [
                _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__["ProductZoomComponent"]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-products-products-module.js.map