(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/account/account.module": [
		"./src/app/pages/account/account.module.ts",
		"common",
		"pages-account-account-module"
	],
	"./pages/brands/brands.module": [
		"./src/app/pages/brands/brands.module.ts",
		"default~pages-brands-brands-module~pages-products-products-module",
		"common",
		"pages-brands-brands-module"
	],
	"./pages/cart/cart.module": [
		"./src/app/pages/cart/cart.module.ts",
		"pages-cart-cart-module"
	],
	"./pages/checkout/checkout.module": [
		"./src/app/pages/checkout/checkout.module.ts",
		"pages-checkout-checkout-module"
	],
	"./pages/compare/compare.module": [
		"./src/app/pages/compare/compare.module.ts",
		"pages-compare-compare-module"
	],
	"./pages/contact/contact.module": [
		"./src/app/pages/contact/contact.module.ts",
		"common",
		"pages-contact-contact-module"
	],
	"./pages/home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"pages-home-home-module"
	],
	"./pages/products/products.module": [
		"./src/app/pages/products/products.module.ts",
		"default~pages-brands-brands-module~pages-products-products-module",
		"common",
		"pages-products-products-module"
	],
	"./pages/sign-in/sign-in.module": [
		"./src/app/pages/sign-in/sign-in.module.ts",
		"common",
		"pages-sign-in-sign-in-module"
	],
	"./pages/wishlist/wishlist.module": [
		"./src/app/pages/wishlist/wishlist.module.ts",
		"pages-wishlist-wishlist-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"h-100 app\" [ngClass]=\"settings.theme\"> \r\n    <router-outlet></router-outlet>\r\n    <!--<ngx-spinner [bdOpacity]= \"0.7\" [bdColor] = \"'#333'\" [size] = \"'large'\" [color] = \"'#fff'\" [type] = \"'ball-clip-rotate'\"></ngx-spinner>     -->\r\n    <ngx-spinner bdColor=\"rgba(51,51,51,0.7)\" size=\"large\" color= \"#fff\" type=\"ball-clip-rotate\"></ngx-spinner>     \r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.loading = false;
        this.settings = this.appSettings.settings;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.router.navigate(['']);  //redirect other pages to homepage on browser refresh    
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window.scrollTo(0, 0);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.models.ts":
/*!*******************************!*\
  !*** ./src/app/app.models.ts ***!
  \*******************************/
/*! exports provided: Category, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Category = /** @class */ (function () {
    function Category(id, name, hasSubCategory, parentId) {
        this.id = id;
        this.name = name;
        this.hasSubCategory = hasSubCategory;
        this.parentId = parentId;
    }
    return Category;
}());

var Product = /** @class */ (function () {
    function Product(id, name, images, oldPrice, newPrice, discount, ratingsCount, ratingsValue, description, availibilityCount, cartCount, color, size, weight, categoryId) {
        this.id = id;
        this.name = name;
        this.images = images;
        this.oldPrice = oldPrice;
        this.newPrice = newPrice;
        this.discount = discount;
        this.ratingsCount = ratingsCount;
        this.ratingsValue = ratingsValue;
        this.description = description;
        this.availibilityCount = availibilityCount;
        this.cartCount = cartCount;
        this.color = color;
        this.size = size;
        this.weight = weight;
        this.categoryId = categoryId;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ "./src/app/theme/utils/custom-overlay-container.ts");
/* harmony import */ var _theme_utils_scroll_strategy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/utils/scroll-strategy */ "./src/app/theme/utils/scroll-strategy.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _theme_components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/components/top-menu/top-menu.component */ "./src/app/theme/components/top-menu/top-menu.component.ts");
/* harmony import */ var _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme/components/menu/menu.component */ "./src/app/theme/components/menu/menu.component.ts");
/* harmony import */ var _theme_components_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/components/sidenav-menu/sidenav-menu.component */ "./src/app/theme/components/sidenav-menu/sidenav-menu.component.ts");
/* harmony import */ var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme/components/breadcrumb/breadcrumb.component */ "./src/app/theme/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./theme/utils/app-interceptor */ "./src/app/theme/utils/app-interceptor.ts");
/* harmony import */ var _theme_components_options_options_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./theme/components/options/options.component */ "./src/app/theme/components/options/options.component.ts");
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./theme/components/footer/footer.component */ "./src/app/theme/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0'
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["routing"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _pages_pages_component__WEBPACK_IMPORTED_MODULE_13__["PagesComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _theme_components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_15__["TopMenuComponent"],
                _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
                _theme_components_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_17__["SidenavMenuComponent"],
                _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"],
                _theme_components_options_options_component__WEBPACK_IMPORTED_MODULE_22__["OptionsComponent"],
                _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"]
            ],
            providers: [
                _app_settings__WEBPACK_IMPORTED_MODULE_19__["AppSettings"],
                _app_service__WEBPACK_IMPORTED_MODULE_20__["AppService"],
                { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayContainer"], useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_8__["CustomOverlayContainer"] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_MENU_SCROLL_STRATEGY"], useFactory: _theme_utils_scroll_strategy__WEBPACK_IMPORTED_MODULE_9__["menuScrollStrategy"], deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_21__["AppInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");



var routes = [
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"], children: [
            { path: '', loadChildren: './pages/home/home.module#HomeModule' },
            { path: 'account', loadChildren: './pages/account/account.module#AccountModule', data: { breadcrumb: 'Account Settings' } },
            { path: 'compare', loadChildren: './pages/compare/compare.module#CompareModule', data: { breadcrumb: 'Compare' } },
            { path: 'wishlist', loadChildren: './pages/wishlist/wishlist.module#WishlistModule', data: { breadcrumb: 'Wishlist' } },
            { path: 'cart', loadChildren: './pages/cart/cart.module#CartModule', data: { breadcrumb: 'Cart' } },
            { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutModule', data: { breadcrumb: 'Checkout' } },
            { path: 'contact', loadChildren: './pages/contact/contact.module#ContactModule', data: { breadcrumb: 'Contact' } },
            { path: 'sign-in', loadChildren: './pages/sign-in/sign-in.module#SignInModule', data: { breadcrumb: 'Sign In ' } },
            { path: 'brands', loadChildren: './pages/brands/brands.module#BrandsModule', data: { breadcrumb: 'Brands' } },
            { path: 'products', loadChildren: './pages/products/products.module#ProductsModule', data: { breadcrumb: 'All Products' } }
        ]
    },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"],
});


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: Data, AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Data = /** @class */ (function () {
    function Data(categories, compareList, wishList, cartList, totalPrice, totalCartCount) {
        this.categories = categories;
        this.compareList = compareList;
        this.wishList = wishList;
        this.cartList = cartList;
        this.totalPrice = totalPrice;
        this.totalCartCount = totalCartCount;
    }
    return Data;
}());

var AppService = /** @class */ (function () {
    function AppService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.Data = new Data([], // categories
        [], // compareList
        [], // wishList
        [], // cartList
        null, //totalPrice,
        0 //totalCartCount
        );
        this.url = "assets/data/";
    }
    AppService.prototype.getCategories = function () {
        return this.http.get(this.url + 'categories.json');
    };
    AppService.prototype.getProducts = function (type) {
        return this.http.get(this.url + type + '-products.json');
    };
    AppService.prototype.getProductById = function (id) {
        return this.http.get(this.url + 'product-' + id + '.json');
    };
    AppService.prototype.getBanners = function () {
        return this.http.get(this.url + 'banners.json');
    };
    AppService.prototype.addToCompare = function (product) {
        var message, status;
        if (this.Data.compareList.filter(function (item) { return item.id == product.id; })[0]) {
            message = 'The product ' + product.name + ' already added to comparison list.';
            status = 'error';
        }
        else {
            this.Data.compareList.push(product);
            message = 'The product ' + product.name + ' has been added to comparison list.';
            status = 'success';
        }
        this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
    };
    AppService.prototype.addToWishList = function (product) {
        var message, status;
        if (this.Data.wishList.filter(function (item) { return item.id == product.id; })[0]) {
            message = 'The product ' + product.name + ' already added to wish list.';
            status = 'error';
        }
        else {
            this.Data.wishList.push(product);
            message = 'The product ' + product.name + ' has been added to wish list.';
            status = 'success';
        }
        this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
    };
    // public addToCart(product:Product){
    //     let message, status;
    //     if(this.Data.cartList.filter(item=>item.id == product.id)[0]){
    //         message = 'The product ' + product.name + ' already added to cart.'; 
    //         status = 'error'; 
    //     }
    //     else{
    //         this.Data.totalPrice = null;
    //         this.Data.totalCartCount = null;
    //         this.Data.cartList.push(product);
    //         this.Data.cartList.forEach(product=>{
    //             this.Data.totalPrice = this.Data.totalPrice + (product.cartCount * product.newPrice);
    //             this.Data.totalCartCount = this.Data.totalCartCount + product.cartCount;
    //         })
    //         message = 'The product ' + product.name + ' has been added to cart.'; 
    //         status = 'success';  
    //     }
    //     this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
    // }
    AppService.prototype.addToCart = function (product) {
        var _this = this;
        var message, status;
        this.Data.totalPrice = null;
        this.Data.totalCartCount = null;
        if (this.Data.cartList.filter(function (item) { return item.id == product.id; })[0]) {
            var item = this.Data.cartList.filter(function (item) { return item.id == product.id; })[0];
            item.cartCount = product.cartCount;
        }
        else {
            this.Data.cartList.push(product);
        }
        this.Data.cartList.forEach(function (product) {
            _this.Data.totalPrice = _this.Data.totalPrice + (product.cartCount * product.newPrice);
            _this.Data.totalCartCount = _this.Data.totalCartCount + product.cartCount;
        });
        message = 'The product ' + product.name + ' has been added to cart.';
        status = 'success';
        this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
    };
    AppService.prototype.resetProductCartCount = function (product) {
        product.cartCount = 0;
        var compareProduct = this.Data.compareList.filter(function (item) { return item.id == product.id; })[0];
        if (compareProduct) {
            compareProduct.cartCount = 0;
        }
        ;
        var wishProduct = this.Data.wishList.filter(function (item) { return item.id == product.id; })[0];
        if (wishProduct) {
            wishProduct.cartCount = 0;
        }
        ;
    };
    AppService.prototype.getBrands = function () {
        return [
            { name: 'aloha', image: 'assets/images/brands/aloha.png' },
            { name: 'dream', image: 'assets/images/brands/dream.png' },
            { name: 'congrats', image: 'assets/images/brands/congrats.png' },
            { name: 'best', image: 'assets/images/brands/best.png' },
            { name: 'original', image: 'assets/images/brands/original.png' },
            { name: 'retro', image: 'assets/images/brands/retro.png' },
            { name: 'king', image: 'assets/images/brands/king.png' },
            { name: 'love', image: 'assets/images/brands/love.png' },
            { name: 'the', image: 'assets/images/brands/the.png' },
            { name: 'easter', image: 'assets/images/brands/easter.png' },
            { name: 'with', image: 'assets/images/brands/with.png' },
            { name: 'special', image: 'assets/images/brands/special.png' },
            { name: 'bravo', image: 'assets/images/brands/bravo.png' }
        ];
    };
    AppService.prototype.getCountries = function () {
        return [
            { name: 'Afghanistan', code: 'AF' },
            { name: 'Aland Islands', code: 'AX' },
            { name: 'Albania', code: 'AL' },
            { name: 'Algeria', code: 'DZ' },
            { name: 'American Samoa', code: 'AS' },
            { name: 'AndorrA', code: 'AD' },
            { name: 'Angola', code: 'AO' },
            { name: 'Anguilla', code: 'AI' },
            { name: 'Antarctica', code: 'AQ' },
            { name: 'Antigua and Barbuda', code: 'AG' },
            { name: 'Argentina', code: 'AR' },
            { name: 'Armenia', code: 'AM' },
            { name: 'Aruba', code: 'AW' },
            { name: 'Australia', code: 'AU' },
            { name: 'Austria', code: 'AT' },
            { name: 'Azerbaijan', code: 'AZ' },
            { name: 'Bahamas', code: 'BS' },
            { name: 'Bahrain', code: 'BH' },
            { name: 'Bangladesh', code: 'BD' },
            { name: 'Barbados', code: 'BB' },
            { name: 'Belarus', code: 'BY' },
            { name: 'Belgium', code: 'BE' },
            { name: 'Belize', code: 'BZ' },
            { name: 'Benin', code: 'BJ' },
            { name: 'Bermuda', code: 'BM' },
            { name: 'Bhutan', code: 'BT' },
            { name: 'Bolivia', code: 'BO' },
            { name: 'Bosnia and Herzegovina', code: 'BA' },
            { name: 'Botswana', code: 'BW' },
            { name: 'Bouvet Island', code: 'BV' },
            { name: 'Brazil', code: 'BR' },
            { name: 'British Indian Ocean Territory', code: 'IO' },
            { name: 'Brunei Darussalam', code: 'BN' },
            { name: 'Bulgaria', code: 'BG' },
            { name: 'Burkina Faso', code: 'BF' },
            { name: 'Burundi', code: 'BI' },
            { name: 'Cambodia', code: 'KH' },
            { name: 'Cameroon', code: 'CM' },
            { name: 'Canada', code: 'CA' },
            { name: 'Cape Verde', code: 'CV' },
            { name: 'Cayman Islands', code: 'KY' },
            { name: 'Central African Republic', code: 'CF' },
            { name: 'Chad', code: 'TD' },
            { name: 'Chile', code: 'CL' },
            { name: 'China', code: 'CN' },
            { name: 'Christmas Island', code: 'CX' },
            { name: 'Cocos (Keeling) Islands', code: 'CC' },
            { name: 'Colombia', code: 'CO' },
            { name: 'Comoros', code: 'KM' },
            { name: 'Congo', code: 'CG' },
            { name: 'Congo, The Democratic Republic of the', code: 'CD' },
            { name: 'Cook Islands', code: 'CK' },
            { name: 'Costa Rica', code: 'CR' },
            { name: 'Cote D\'Ivoire', code: 'CI' },
            { name: 'Croatia', code: 'HR' },
            { name: 'Cuba', code: 'CU' },
            { name: 'Cyprus', code: 'CY' },
            { name: 'Czech Republic', code: 'CZ' },
            { name: 'Denmark', code: 'DK' },
            { name: 'Djibouti', code: 'DJ' },
            { name: 'Dominica', code: 'DM' },
            { name: 'Dominican Republic', code: 'DO' },
            { name: 'Ecuador', code: 'EC' },
            { name: 'Egypt', code: 'EG' },
            { name: 'El Salvador', code: 'SV' },
            { name: 'Equatorial Guinea', code: 'GQ' },
            { name: 'Eritrea', code: 'ER' },
            { name: 'Estonia', code: 'EE' },
            { name: 'Ethiopia', code: 'ET' },
            { name: 'Falkland Islands (Malvinas)', code: 'FK' },
            { name: 'Faroe Islands', code: 'FO' },
            { name: 'Fiji', code: 'FJ' },
            { name: 'Finland', code: 'FI' },
            { name: 'France', code: 'FR' },
            { name: 'French Guiana', code: 'GF' },
            { name: 'French Polynesia', code: 'PF' },
            { name: 'French Southern Territories', code: 'TF' },
            { name: 'Gabon', code: 'GA' },
            { name: 'Gambia', code: 'GM' },
            { name: 'Georgia', code: 'GE' },
            { name: 'Germany', code: 'DE' },
            { name: 'Ghana', code: 'GH' },
            { name: 'Gibraltar', code: 'GI' },
            { name: 'Greece', code: 'GR' },
            { name: 'Greenland', code: 'GL' },
            { name: 'Grenada', code: 'GD' },
            { name: 'Guadeloupe', code: 'GP' },
            { name: 'Guam', code: 'GU' },
            { name: 'Guatemala', code: 'GT' },
            { name: 'Guernsey', code: 'GG' },
            { name: 'Guinea', code: 'GN' },
            { name: 'Guinea-Bissau', code: 'GW' },
            { name: 'Guyana', code: 'GY' },
            { name: 'Haiti', code: 'HT' },
            { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
            { name: 'Holy See (Vatican City State)', code: 'VA' },
            { name: 'Honduras', code: 'HN' },
            { name: 'Hong Kong', code: 'HK' },
            { name: 'Hungary', code: 'HU' },
            { name: 'Iceland', code: 'IS' },
            { name: 'India', code: 'IN' },
            { name: 'Indonesia', code: 'ID' },
            { name: 'Iran, Islamic Republic Of', code: 'IR' },
            { name: 'Iraq', code: 'IQ' },
            { name: 'Ireland', code: 'IE' },
            { name: 'Isle of Man', code: 'IM' },
            { name: 'Israel', code: 'IL' },
            { name: 'Italy', code: 'IT' },
            { name: 'Jamaica', code: 'JM' },
            { name: 'Japan', code: 'JP' },
            { name: 'Jersey', code: 'JE' },
            { name: 'Jordan', code: 'JO' },
            { name: 'Kazakhstan', code: 'KZ' },
            { name: 'Kenya', code: 'KE' },
            { name: 'Kiribati', code: 'KI' },
            { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
            { name: 'Korea, Republic of', code: 'KR' },
            { name: 'Kuwait', code: 'KW' },
            { name: 'Kyrgyzstan', code: 'KG' },
            { name: 'Lao People\'S Democratic Republic', code: 'LA' },
            { name: 'Latvia', code: 'LV' },
            { name: 'Lebanon', code: 'LB' },
            { name: 'Lesotho', code: 'LS' },
            { name: 'Liberia', code: 'LR' },
            { name: 'Libyan Arab Jamahiriya', code: 'LY' },
            { name: 'Liechtenstein', code: 'LI' },
            { name: 'Lithuania', code: 'LT' },
            { name: 'Luxembourg', code: 'LU' },
            { name: 'Macao', code: 'MO' },
            { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
            { name: 'Madagascar', code: 'MG' },
            { name: 'Malawi', code: 'MW' },
            { name: 'Malaysia', code: 'MY' },
            { name: 'Maldives', code: 'MV' },
            { name: 'Mali', code: 'ML' },
            { name: 'Malta', code: 'MT' },
            { name: 'Marshall Islands', code: 'MH' },
            { name: 'Martinique', code: 'MQ' },
            { name: 'Mauritania', code: 'MR' },
            { name: 'Mauritius', code: 'MU' },
            { name: 'Mayotte', code: 'YT' },
            { name: 'Mexico', code: 'MX' },
            { name: 'Micronesia, Federated States of', code: 'FM' },
            { name: 'Moldova, Republic of', code: 'MD' },
            { name: 'Monaco', code: 'MC' },
            { name: 'Mongolia', code: 'MN' },
            { name: 'Montserrat', code: 'MS' },
            { name: 'Morocco', code: 'MA' },
            { name: 'Mozambique', code: 'MZ' },
            { name: 'Myanmar', code: 'MM' },
            { name: 'Namibia', code: 'NA' },
            { name: 'Nauru', code: 'NR' },
            { name: 'Nepal', code: 'NP' },
            { name: 'Netherlands', code: 'NL' },
            { name: 'Netherlands Antilles', code: 'AN' },
            { name: 'New Caledonia', code: 'NC' },
            { name: 'New Zealand', code: 'NZ' },
            { name: 'Nicaragua', code: 'NI' },
            { name: 'Niger', code: 'NE' },
            { name: 'Nigeria', code: 'NG' },
            { name: 'Niue', code: 'NU' },
            { name: 'Norfolk Island', code: 'NF' },
            { name: 'Northern Mariana Islands', code: 'MP' },
            { name: 'Norway', code: 'NO' },
            { name: 'Oman', code: 'OM' },
            { name: 'Pakistan', code: 'PK' },
            { name: 'Palau', code: 'PW' },
            { name: 'Palestinian Territory, Occupied', code: 'PS' },
            { name: 'Panama', code: 'PA' },
            { name: 'Papua New Guinea', code: 'PG' },
            { name: 'Paraguay', code: 'PY' },
            { name: 'Peru', code: 'PE' },
            { name: 'Philippines', code: 'PH' },
            { name: 'Pitcairn', code: 'PN' },
            { name: 'Poland', code: 'PL' },
            { name: 'Portugal', code: 'PT' },
            { name: 'Puerto Rico', code: 'PR' },
            { name: 'Qatar', code: 'QA' },
            { name: 'Reunion', code: 'RE' },
            { name: 'Romania', code: 'RO' },
            { name: 'Russian Federation', code: 'RU' },
            { name: 'RWANDA', code: 'RW' },
            { name: 'Saint Helena', code: 'SH' },
            { name: 'Saint Kitts and Nevis', code: 'KN' },
            { name: 'Saint Lucia', code: 'LC' },
            { name: 'Saint Pierre and Miquelon', code: 'PM' },
            { name: 'Saint Vincent and the Grenadines', code: 'VC' },
            { name: 'Samoa', code: 'WS' },
            { name: 'San Marino', code: 'SM' },
            { name: 'Sao Tome and Principe', code: 'ST' },
            { name: 'Saudi Arabia', code: 'SA' },
            { name: 'Senegal', code: 'SN' },
            { name: 'Serbia and Montenegro', code: 'CS' },
            { name: 'Seychelles', code: 'SC' },
            { name: 'Sierra Leone', code: 'SL' },
            { name: 'Singapore', code: 'SG' },
            { name: 'Slovakia', code: 'SK' },
            { name: 'Slovenia', code: 'SI' },
            { name: 'Solomon Islands', code: 'SB' },
            { name: 'Somalia', code: 'SO' },
            { name: 'South Africa', code: 'ZA' },
            { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
            { name: 'Spain', code: 'ES' },
            { name: 'Sri Lanka', code: 'LK' },
            { name: 'Sudan', code: 'SD' },
            { name: 'Suriname', code: 'SR' },
            { name: 'Svalbard and Jan Mayen', code: 'SJ' },
            { name: 'Swaziland', code: 'SZ' },
            { name: 'Sweden', code: 'SE' },
            { name: 'Switzerland', code: 'CH' },
            { name: 'Syrian Arab Republic', code: 'SY' },
            { name: 'Taiwan, Province of China', code: 'TW' },
            { name: 'Tajikistan', code: 'TJ' },
            { name: 'Tanzania, United Republic of', code: 'TZ' },
            { name: 'Thailand', code: 'TH' },
            { name: 'Timor-Leste', code: 'TL' },
            { name: 'Togo', code: 'TG' },
            { name: 'Tokelau', code: 'TK' },
            { name: 'Tonga', code: 'TO' },
            { name: 'Trinidad and Tobago', code: 'TT' },
            { name: 'Tunisia', code: 'TN' },
            { name: 'Turkey', code: 'TR' },
            { name: 'Turkmenistan', code: 'TM' },
            { name: 'Turks and Caicos Islands', code: 'TC' },
            { name: 'Tuvalu', code: 'TV' },
            { name: 'Uganda', code: 'UG' },
            { name: 'Ukraine', code: 'UA' },
            { name: 'United Arab Emirates', code: 'AE' },
            { name: 'United Kingdom', code: 'GB' },
            { name: 'United States', code: 'US' },
            { name: 'United States Minor Outlying Islands', code: 'UM' },
            { name: 'Uruguay', code: 'UY' },
            { name: 'Uzbekistan', code: 'UZ' },
            { name: 'Vanuatu', code: 'VU' },
            { name: 'Venezuela', code: 'VE' },
            { name: 'Viet Nam', code: 'VN' },
            { name: 'Virgin Islands, British', code: 'VG' },
            { name: 'Virgin Islands, U.S.', code: 'VI' },
            { name: 'Wallis and Futuna', code: 'WF' },
            { name: 'Western Sahara', code: 'EH' },
            { name: 'Yemen', code: 'YE' },
            { name: 'Zambia', code: 'ZM' },
            { name: 'Zimbabwe', code: 'ZW' }
        ];
    };
    AppService.prototype.getMonths = function () {
        return [
            { value: '01', name: 'January' },
            { value: '02', name: 'February' },
            { value: '03', name: 'March' },
            { value: '04', name: 'April' },
            { value: '05', name: 'May' },
            { value: '06', name: 'June' },
            { value: '07', name: 'July' },
            { value: '08', name: 'August' },
            { value: '09', name: 'September' },
            { value: '10', name: 'October' },
            { value: '11', name: 'November' },
            { value: '12', name: 'December' }
        ];
    };
    AppService.prototype.getYears = function () {
        return ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];
    };
    AppService.prototype.getDeliveryMethods = function () {
        return [
            { value: 'free', name: 'Free Delivery', desc: '$0.00 / Delivery in 7 to 14 business Days' },
            { value: 'standard', name: 'Standard Delivery', desc: '$7.99 / Delivery in 5 to 7 business Days' },
            { value: 'express', name: 'Express Delivery', desc: '$29.99 / Delivery in 1 business Days' }
        ];
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: Settings, AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Settings = /** @class */ (function () {
    function Settings(name, theme) {
        this.name = name;
        this.theme = theme;
    }
    return Settings;
}());

var AppSettings = /** @class */ (function () {
    function AppSettings() {
        this.settings = new Settings('Emporium', // theme name
        'green' // green, blue, red, pink, purple, grey
        );
    }
    AppSettings = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppSettings);
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n    <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n        <mat-card class=\"p-0 mat-elevation-z6 box\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                <mat-icon class=\"mat-icon-xlg\">error</mat-icon>\r\n                <h1 class=\"error\">404</h1>\r\n            </div>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z8 box-content-inner\">\r\n                    <p class=\"box-text\">Opps, it seems that this page does not exist.</p> \r\n                    <p class=\"box-text\">If you are sure it should, search for it.</p> \r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Enter search keyword...\">\r\n                    </mat-form-field>\r\n                </mat-card>\r\n                <div class=\"box-footer\">\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z8\" type=\"button\" (click)=\"goHome()\">\r\n                        <mat-icon>home</mat-icon>\r\n                    </button>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z8\" type=\"button\" (click)=\"goHome()\">\r\n                        <mat-icon>search</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>          \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  border-radius: 0; }\n  .box .box-header {\n    height: 180px; }\n  .box .box-header .error {\n      font-size: 48px;\n      margin-bottom: 12px; }\n  .box .box-content {\n    position: relative;\n    height: 180px; }\n  .box .box-content .box-content-inner {\n      position: absolute;\n      top: -34px;\n      left: 34px;\n      right: 34px;\n      height: 180px; }\n  .box .box-content .box-content-header {\n      font-size: 16px;\n      text-transform: uppercase;\n      font-weight: 500; }\n  .box .box-content .box-content-header.server-error {\n        margin-bottom: 36px; }\n  .box .box-content .box-text {\n      margin-bottom: 10px;\n      text-align: center; }\n  .box .box-content .box-text::last-child {\n        margin-bottom: 15px; }\n  .box .box-content .box-footer {\n      position: relative;\n      bottom: 16px; }\n  .box .box-content .box-footer button {\n        min-width: 70px;\n        margin: 0 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL0M6XFxhcHBzXFxOZXRzdWl0ZUVjb21tZXJjZS9zcmNcXGFwcFxccGFnZXNcXG5vdC1mb3VuZFxcbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCLEVBMENuQjtFQTNDRDtJQUdRLGNBQWEsRUFLaEI7RUFSTDtNQUtZLGdCQUFlO01BQ2Ysb0JBQW1CLEVBQ3RCO0VBUFQ7SUFVUSxtQkFBa0I7SUFDbEIsY0FBYSxFQStCaEI7RUExQ0w7TUFhWSxtQkFBa0I7TUFDbEIsV0FBVTtNQUNWLFdBQVU7TUFDVixZQUFXO01BQ1gsY0FBYSxFQUNoQjtFQWxCVDtNQW9CWSxnQkFBZTtNQUNmLDBCQUF5QjtNQUN6QixpQkFBZSxFQUlsQjtFQTFCVDtRQXdCZ0Isb0JBQW1CLEVBQ3RCO0VBekJiO01BNEJZLG9CQUFtQjtNQUNuQixtQkFBa0IsRUFJckI7RUFqQ1Q7UUErQmdCLG9CQUFtQixFQUN0QjtFQWhDYjtNQW1DWSxtQkFBa0I7TUFDbEIsYUFBWSxFQUtmO0VBekNUO1FBc0NnQixnQkFBZTtRQUNmLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAuYm94LWhlYWRlcntcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIC5lcnJvcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib3gtY29udGVudHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDsgICAgIFxyXG4gICAgICAgIC5ib3gtY29udGVudC1pbm5lcntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0zNHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAzNHB4O1xyXG4gICAgICAgICAgICByaWdodDogMzRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC1jb250ZW50LWhlYWRlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgICAgICAmLnNlcnZlci1lcnJvcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC10ZXh0e1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICY6Omxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gtZm9vdGVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router) {
        this.router = router;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container> \r\n\r\n    <mat-sidenav [opened]=\"false\" mode=\"over\" #sidenav class=\"sidenav mat-elevation-z6\">\r\n        <button mat-icon-button color=\"warn\" class=\"close\" (click)=\"sidenav.close()\">\r\n           <mat-icon color=\"warn\">close</mat-icon>\r\n        </button>\r\n        <div class=\"divider\"></div>\r\n        <app-sidenav-menu [menuItems]=\"sidenavMenuItems\" [menuParentId]=\"0\"></app-sidenav-menu>\r\n        <div class=\"divider\"></div>\r\n        <div class=\"text-center py-2\">                   \r\n            <svg class=\"social-icon\" viewBox=\"0 0 24 24\">\r\n                <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\r\n            </svg>\r\n            <svg class=\"social-icon\" viewBox=\"0 0 24 24\">\r\n                <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\" />\r\n            </svg>\r\n            <svg class=\"social-icon\" viewBox=\"0 0 24 24\">\r\n                <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M19.5,12H18V10.5H17V12H15.5V13H17V14.5H18V13H19.5V12M9.65,11.36V12.9H12.22C12.09,13.54 11.45,14.83 9.65,14.83C8.11,14.83 6.89,13.54 6.89,12C6.89,10.46 8.11,9.17 9.65,9.17C10.55,9.17 11.13,9.56 11.45,9.88L12.67,8.72C11.9,7.95 10.87,7.5 9.65,7.5C7.14,7.5 5.15,9.5 5.15,12C5.15,14.5 7.14,16.5 9.65,16.5C12.22,16.5 13.96,14.7 13.96,12.13C13.96,11.81 13.96,11.61 13.89,11.36H9.65Z\" />\r\n            </svg>\r\n        </div> \r\n    </mat-sidenav>\r\n\r\n\r\n    <mat-toolbar color=\"primary\">\r\n        <mat-toolbar-row fxLayoutAlign=\"space-between center\" class=\"top-toolbar theme-container\">\r\n            <span fxHide=\"false\" fxHide.gt-sm>\r\n                <button mat-button (click)=\"sidenav.toggle()\" class=\"sidenav-toggle\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button> \r\n            </span>\r\n            <span fxShow=\"false\" fxShow.gt-xs fxLayoutAlign=\"center center\"><mat-icon class=\"mat-icon-sm\">call</mat-icon>  Hotline: (+100) 123 456 7890 </span>\r\n            <span fxShow=\"false\" fxShow.gt-sm>Welcome to our market!</span>\r\n            <app-top-menu></app-top-menu>       \r\n        </mat-toolbar-row>\r\n        <mat-toolbar-row fxLayoutAlign=\"space-between center\" class=\"logo-toolbar theme-container\">\r\n            <a class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">Emporium</a>\r\n            <div fxFlex fxFlexOffset.gt-sm=\"10\" fxShow=\"false\" fxShow.gt-sm>\r\n                <form method=\"get\"  class=\"search-form\" fxLayout=\"row\">\r\n                    <button mat-raised-button [matMenuTriggerFor]=\"categoriesMenu\" #categoriesMenuTrigger=\"matMenuTrigger\" type=\"button\" class=\"mat-elevation-z0 categories text-truncate text-muted\">{{category?.name}}<mat-icon>arrow_drop_down</mat-icon></button>\r\n                    <mat-menu #categoriesMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"categories-dropdown\">\r\n                        <span (mouseleave)=\"categoriesMenuTrigger.closeMenu()\">\r\n                            <app-category-list [categories]=\"categories\" [categoryParentId]=\"0\" (change)=\"changeCategory($event)\"></app-category-list>\r\n                        </span>\r\n                    </mat-menu>\r\n                    <input type=\"text\" placeholder=\"Type to search...\" fxFlex>\r\n                    <button mat-mini-fab (click)=\"search()\" type=\"button\" class=\"search-btn mat-elevation-z0 text-muted\">\r\n                        <mat-icon>search</mat-icon>\r\n                    </button> \r\n                </form>\r\n            </div>\r\n          \r\n           \r\n\r\n            <div fxFlexOffset=\"10\" fxLayout=\"row\" fxLayoutAlign=\"center center\">                \r\n\r\n                <div fxLayoutAlign=\"center center\">\r\n                    <button mat-button [matMenuTriggerFor]=\"cartMenu\" #cartMenuTrigger=\"matMenuTrigger\" class=\"flex-row-button\">\r\n                        <mat-icon class=\"mat-icon-lg\">shopping_cart</mat-icon>\r\n                        <span *ngIf=\"appService.Data.totalCartCount > 0\" class=\"cart-items-count\">{{appService.Data.totalCartCount}}</span>\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxShow=\"false\" fxShow.gt-xs class=\"top-cart\">\r\n                            <span>Shopping Cart</span>\r\n                            <span *ngIf=\"appService.Data.totalCartCount > 0\">{{appService.Data.totalCartCount}} item<span *ngIf=\"appService.Data.totalCartCount > 1\">s</span> - \r\n                                $<span>{{appService.Data.totalPrice | number : '1.2-2'}}</span>\r\n                            </span>\r\n                        </div>\r\n                        <mat-icon class=\"mat-icon-sm\">arrow_drop_down</mat-icon>\r\n                    </button>\r\n                    <mat-menu #cartMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"top-menu-dropdown cart-dropdown\">\r\n                        <span (mouseleave)=\"cartMenuTrigger.closeMenu()\" class=\"d-block\">\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n                                <b><span>{{appService.Data.totalCartCount}} ITEM<span *ngIf=\"appService.Data.totalCartCount > 1\">S</span></span></b>\r\n                                <b><a [routerLink]=\"['/cart']\" class=\"text-muted\">VIEW CART</a></b>\r\n                            </div>\r\n                            <div class=\"divider mt-1\"></div>\r\n                            <div *ngIf=\"appService.Data.totalCartCount == 0\" class=\"py-1 text-muted text-center\">You have no items in your shopping cart.</div>\r\n                            <mat-list>\r\n                                <mat-list-item *ngFor=\"let product of appService.Data.cartList\">                                   \r\n                                    <h3 matLine class=\"text-muted\"> {{product.name}} </h3>\r\n                                    <p matLine class=\"text-muted\">\r\n                                        <span> {{product.cartCount}} x ${{product.newPrice | number : '1.2-2'}} </span>\r\n                                    </p>\r\n                                    <img  [src]=\"product.images[0].small\" alt=\"image\">\r\n                                    <button mat-icon-button color=\"warn\" class=\"remove\" (click)=\"remove(product);stopClickPropagate($event)\" matTooltip=\"Remove\" matTooltipPosition=\"before\">\r\n                                        <mat-icon class=\"mat-icon-sm\">close</mat-icon>\r\n                                    </button>\r\n                                </mat-list-item>\r\n                            </mat-list>\r\n                            <div *ngIf=\"appService.Data.cartList.length > 0\" class=\"cart-dropdown-footer\">\r\n                                <div class=\"divider mt-1\"></div>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted mt-1\">\r\n                                    <b>TOTAL:</b>\r\n                                    <b class=\"new-price\">${{appService.Data.totalPrice | number : '1.2-2'}}</b>\r\n                                </div>\r\n                                <div class=\"divider mt-1\"></div>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-1\">\r\n                                    <button mat-mini-fab color=\"warn\" (click)=\"clear();stopClickPropagate($event)\" matTooltip=\"Clear All\" matTooltipPosition=\"after\">\r\n                                        <mat-icon>remove_shopping_cart</mat-icon>\r\n                                    </button>\r\n                                    <a [routerLink]=\"['/checkout']\" mat-mini-fab color=\"primary\" matTooltip=\"Checkout\" matTooltipPosition=\"before\">\r\n                                        <mat-icon>check</mat-icon>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </span>\r\n                    </mat-menu>\r\n                </div>\r\n\r\n                <div fxLayoutAlign=\"center center\" fxHide=\"false\" fxHide.gt-sm> \r\n                    <button mat-icon-button [matMenuTriggerFor]=\"searchMenu\" #searchMenuTrigger=\"matMenuTrigger\" class=\"search-toggle-btn\">\r\n                        <mat-icon class=\"mat-icon-lg\">search</mat-icon>\r\n                    </button>\r\n                    <mat-menu #searchMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"search-dropdown mat-elevation-z8\">\r\n                        <form method=\"get\" fxFlex class=\"search-form\">\r\n                            <button mat-raised-button [matMenuTriggerFor]=\"categories2Menu\" #categories2MenuTrigger=\"matMenuTrigger\" type=\"button\" class=\"mat-elevation-z0 categories text-muted\" (click)=\"stopClickPropagate($event)\">{{category?.name}}<mat-icon>arrow_drop_down</mat-icon></button>\r\n                            <mat-menu #categories2Menu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"categories-dropdown\">\r\n                                <span (mouseleave)=\"categories2MenuTrigger.closeMenu()\">\r\n                                    <app-category-list [categories]=\"categories\" [categoryParentId]=\"0\" (change)=\"changeCategory($event)\"></app-category-list>\r\n                                </span>\r\n                            </mat-menu>\r\n                            <input type=\"text\" placeholder=\"Type to search...\" fxFlex (click)=\"stopClickPropagate($event)\">\r\n                            <button mat-mini-fab (click)=\"search()\" type=\"button\" class=\"search-btn mat-elevation-z0 text-muted\">\r\n                                <mat-icon>search</mat-icon>\r\n                            </button> \r\n                        </form>\r\n                    </mat-menu>\r\n                </div>\r\n\r\n            </div>\r\n            \r\n        </mat-toolbar-row>\r\n    </mat-toolbar> \r\n\r\n\r\n \r\n    <app-menu fxShow=\"false\" fxShow.gt-sm></app-menu>  \r\n\r\n    \r\n    <div class=\"theme-container main\"> \r\n        <app-breadcrumb></app-breadcrumb>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    \r\n\r\n    <app-options></app-options>\r\n\r\n    <app-footer></app-footer>\r\n\r\n    <div *ngIf=\"showBackToTop\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top transition\" (click)=\"scrollToTop()\">\r\n        <mat-icon>arrow_upward</mat-icon>\r\n    </div>\r\n\r\n\r\n </mat-sidenav-container>"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  min-height: 400px;\n  min-height: calc(100vh - 288px);\n  padding: 16px; }\n\n.sidenav {\n  width: 250px;\n  padding: 8px 16px;\n  position: fixed; }\n\n.sidenav .close {\n    margin-left: 178px; }\n\n.sidenav .divider {\n    margin: 8px 0; }\n\n.cart-items-count {\n  position: absolute;\n  top: -3px;\n  left: 26px;\n  background: #f44336;\n  height: 18px;\n  width: 18px;\n  line-height: 18px;\n  border-radius: 50%;\n  font-size: 11px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQzpcXGFwcHNcXE5ldHN1aXRlRWNvbW1lcmNlL3NyY1xcYXBwXFxwYWdlc1xccGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIsZ0NBQStCO0VBQy9CLGNBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGdCQUFlLEVBT2xCOztBQVZEO0lBS1EsbUJBQWtCLEVBQ3JCOztBQU5MO0lBUVEsY0FBYSxFQUNoQjs7QUFFTDtFQUNJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVTtFQUNWLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osWUFBVztFQUNYLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjg4cHgpO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG4uc2lkZW5hdntcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLmNsb3Nle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNzhweDtcclxuICAgIH1cclxuICAgIC5kaXZpZGVye1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcbn1cclxuLmNhcnQtaXRlbXMtY291bnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgICBsZWZ0OiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/components/sidenav-menu/sidenav-menu.service */ "./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PagesComponent = /** @class */ (function () {
    function PagesComponent(appSettings, appService, sidenavMenuService, router) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.sidenavMenuService = sidenavMenuService;
        this.router = router;
        this.showBackToTop = false;
        this.settings = this.appSettings.settings;
    }
    PagesComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.sidenavMenuItems = this.sidenavMenuService.getSidenavMenuItems();
    };
    PagesComponent.prototype.getCategories = function () {
        var _this = this;
        this.appService.getCategories().subscribe(function (data) {
            _this.categories = data;
            _this.category = data[0];
            _this.appService.Data.categories = data;
        });
    };
    PagesComponent.prototype.changeCategory = function (event) {
        if (event.target) {
            this.category = this.categories.filter(function (category) { return category.name == event.target.innerText; })[0];
        }
        if (window.innerWidth < 960) {
            this.stopClickPropagate(event);
        }
    };
    PagesComponent.prototype.remove = function (product) {
        var index = this.appService.Data.cartList.indexOf(product);
        if (index !== -1) {
            this.appService.Data.cartList.splice(index, 1);
            this.appService.Data.totalPrice = this.appService.Data.totalPrice - product.newPrice * product.cartCount;
            this.appService.Data.totalCartCount = this.appService.Data.totalCartCount - product.cartCount;
            this.appService.resetProductCartCount(product);
        }
    };
    PagesComponent.prototype.clear = function () {
        var _this = this;
        this.appService.Data.cartList.forEach(function (product) {
            _this.appService.resetProductCartCount(product);
        });
        this.appService.Data.cartList.length = 0;
        this.appService.Data.totalPrice = 0;
        this.appService.Data.totalCartCount = 0;
    };
    PagesComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
    };
    PagesComponent.prototype.stopClickPropagate = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    PagesComponent.prototype.search = function () { };
    PagesComponent.prototype.scrollToTop = function () {
        var scrollDuration = 200;
        var scrollStep = -window.pageYOffset / (scrollDuration / 20);
        var scrollInterval = setInterval(function () {
            if (window.pageYOffset != 0) {
                window.scrollBy(0, scrollStep);
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 10);
        if (window.innerWidth <= 768) {
            setTimeout(function () { window.scrollTo(0, 0); });
        }
    };
    PagesComponent.prototype.onWindowScroll = function ($event) {
        ($event.target.documentElement.scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.sidenav.close();
            }
        });
        this.sidenavMenuService.expandActiveSubMenu(this.sidenavMenuService.getSidenavMenuItems());
    };
    PagesComponent.prototype.closeSubMenus = function () {
        if (window.innerWidth < 960) {
            this.sidenavMenuService.closeAllSubMenus();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PagesComponent.prototype, "onWindowScroll", null);
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")],
            providers: [_theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/banners/banners.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/banners/banners.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banners-container\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" *ngIf=\"banners.length > 0\">\r\n    <div fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\">\r\n        <div class=\"banner\" fxFlex=\"50\" fxFlex.gt-sm=\"67\" [ngStyle]=\"getBgImage(0)\">\r\n            <div class=\"info\" fxLayoutAlign=\"start start\">\r\n                <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <h1 class=\"title\">{{getBanner(0).title}}</h1>\r\n                    <h3 class=\"subtitle\">{{getBanner(0).subtitle}}</h3>\r\n                    <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2\">Shop now</a>\r\n                </div> \r\n            </div> \r\n        </div>\r\n        <div fxLayout=\"row\" fxFlex=\"50\" fxFlex.gt-sm=\"33\">\r\n            <div class=\"banner\" fxFlex [ngStyle]=\"getBgImage(1)\">\r\n                <div class=\"info\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"end center\">\r\n                      <h2 class=\"title\">{{getBanner(1).title}}</h2>\r\n                      <h4 class=\"subtitle\">{{getBanner(1).subtitle}}</h4>\r\n                      <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2\">Shop now</a>\r\n                    </div> \r\n                </div> \r\n            </div>\r\n            <div class=\"banner\" fxFlex [ngStyle]=\"getBgImage(2)\">\r\n                <div class=\"info\" fxFlex fxLayoutAlign=\"center center\">\r\n                    <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"end center\">\r\n                      <h2 class=\"title\">{{getBanner(2).title}}</h2>\r\n                      <h4 class=\"subtitle\">{{getBanner(2).subtitle}}</h4>\r\n                      <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2\">Shop now</a>\r\n                    </div> \r\n                </div> \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"60\">\r\n        <div fxLayout=\"row\" fxFlexOrder=\"2\" fxFlexOrder.gt-sm=\"1\" fxFlex=\"50\" fxFlex.gt-sm=\"33\">\r\n            <div class=\"banner\" fxFlex [ngStyle]=\"getBgImage(3)\">\r\n                <div class=\"info\" fxLayoutAlign=\"space-around center\">\r\n                    <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"end center\">\r\n                      <h2 class=\"title\">{{getBanner(3).title}}</h2>\r\n                      <h4 class=\"subtitle\">{{getBanner(3).subtitle}}</h4>\r\n                      <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2\">Shop now</a>\r\n                    </div>                    \r\n                </div>\r\n            </div>\r\n            <div class=\"banner\" fxFlex [ngStyle]=\"getBgImage(4)\">\r\n                <div class=\"info\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"end center\">\r\n                      <h2 class=\"title\">{{getBanner(4).title}}</h2>\r\n                      <h4 class=\"subtitle\">{{getBanner(4).subtitle}}</h4>\r\n                      <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2\">Shop now</a>\r\n                    </div>\r\n                </div> \r\n            </div>\r\n        </div>\r\n        <div class=\"banner\" fxFlexOrder=\"1\" fxFlexOrder.gt-sm=\"2\" fxFlex=\"50\" fxFlex.gt-sm=\"67\" [ngStyle]=\"getBgImage(5)\">\r\n            <div class=\"info\" fxLayout=\"column\" fxLayoutAlign=\"center end\">\r\n                <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                  <h1 class=\"title\">{{getBanner(5).title}}</h1>\r\n                  <h3 class=\"subtitle\">{{getBanner(5).subtitle}}</h3>\r\n                  <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2\">Shop now</a>\r\n                </div>\r\n            </div> \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/banners/banners.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/banners/banners.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banners-container {\n  margin: 22px -8px; }\n  .banners-container .banner {\n    position: relative;\n    margin: 8px;\n    padding: 0;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    overflow: hidden;\n    transition: 0.15s ease-in; }\n  .banners-container .banner .info {\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 0, 0, 0.4);\n      color: #fff;\n      padding: 90px 0;\n      transition: 0.15s ease-in; }\n  .banners-container .banner .info h1 {\n        font-size: 36px; }\n  .banners-container .banner .info .title {\n        font-weight: 500;\n        text-align: center; }\n  .banners-container .banner .info .subtitle {\n        font-weight: normal;\n        font-style: italic;\n        text-align: center; }\n  .banners-container .banner:hover .info {\n      background: rgba(0, 0, 0, 0.7); }\n  @media (max-width: 959px) {\n  .banners-container .banner .info {\n    padding: 30px 0px; }\n    .banners-container .banner .info h1 {\n      font-size: 24px; }\n    .banners-container .banner .info h2 {\n      font-size: 16px; }\n    .banners-container .banner .info h3 {\n      font-size: 14px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhbm5lcnMvQzpcXGFwcHNcXE5ldHN1aXRlRWNvbW1lcmNlL3NyY1xcYXBwXFxzaGFyZWRcXGJhbm5lcnNcXGJhbm5lcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUIsRUFvQ3BCO0VBckNEO0lBR1EsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxXQUFVO0lBQ1YsNkJBQTRCO0lBQzVCLHVCQUFzQjtJQUN0Qiw0QkFBMkI7SUFDM0IsaUJBQWdCO0lBQ2hCLDBCQUF5QixFQTBCNUI7RUFwQ0w7TUFZWSxhQUFZO01BQ1osWUFBVztNQUNYLCtCQUE4QjtNQUM5QixZQUFXO01BQ1gsZ0JBQWU7TUFDZiwwQkFBeUIsRUFhNUI7RUE5QlQ7UUFtQmdCLGdCQUFlLEVBQ2xCO0VBcEJiO1FBc0JnQixpQkFBZ0I7UUFDaEIsbUJBQWtCLEVBQ3JCO0VBeEJiO1FBMEJnQixvQkFBbUI7UUFDbkIsbUJBQWtCO1FBQ2xCLG1CQUFrQixFQUNyQjtFQTdCYjtNQWlDZ0IsK0JBQThCLEVBQ2pDO0VBTWI7RUFDSTtJQUdZLGtCQUFpQixFQVVwQjtJQWJUO01BS2dCLGdCQUFlLEVBQ2xCO0lBTmI7TUFRZ0IsZ0JBQWUsRUFDbEI7SUFUYjtNQVdnQixnQkFBZSxFQUNsQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Jhbm5lcnMvYmFubmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJzLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMjJweCAtOHB4O1xyXG4gICAgLmJhbm5lcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAgICAgICAgXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluO1xyXG4gICAgICAgIC5pbmZve1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyBcclxuICAgICAgICAgICAgcGFkZGluZzogOTBweCAwOyBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3VidGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIC5pbmZve1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OXB4KSB7IFxyXG4gICAgLmJhbm5lcnMtY29udGFpbmVye1xyXG4gICAgICAgIC5iYW5uZXJ7XHJcbiAgICAgICAgICAgIC5pbmZve1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/banners/banners.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/banners/banners.component.ts ***!
  \*****************************************************/
/*! exports provided: BannersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersComponent", function() { return BannersComponent; });
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

var BannersComponent = /** @class */ (function () {
    function BannersComponent() {
        this.banners = [];
    }
    BannersComponent.prototype.ngOnInit = function () { };
    BannersComponent.prototype.getBanner = function (index) {
        return this.banners[index];
    };
    BannersComponent.prototype.getBgImage = function (index) {
        var bgImage = {
            'background-image': index != null ? "url(" + this.banners[index].image + ")" : "url(https://via.placeholder.com/600x400/ff0000/fff/)"
        };
        return bgImage;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('banners'),
        __metadata("design:type", Array)
    ], BannersComponent.prototype, "banners", void 0);
    BannersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banners',
            template: __webpack_require__(/*! ./banners.component.html */ "./src/app/shared/banners/banners.component.html"),
            styles: [__webpack_require__(/*! ./banners.component.scss */ "./src/app/shared/banners/banners.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannersComponent);
    return BannersComponent;
}());



/***/ }),

/***/ "./src/app/shared/brands-carousel/brands-carousel.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/brands-carousel/brands-carousel.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"brands-carousel\">\r\n    <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n        <div class=\"swiper-wrapper h-100\">      \r\n            <div *ngFor=\"let brand of brands\" class=\"swiper-slide\">\r\n                <div class=\"p-0\">\r\n                    <a [routerLink]=\"['/brands', brand.name]\" class=\"brand-item\">\r\n                        <img [attr.data-src]=\"brand.image\" class=\"swiper-lazy\">\r\n                    </a>\r\n                    <div class=\"swiper-lazy-preloader\"></div>\r\n                </div>\r\n            </div>\r\n        </div> \r\n        <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n        <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/brands-carousel/brands-carousel.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/brands-carousel/brands-carousel.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brands-carousel {\n  background: rgba(0, 0, 0, 0.03);\n  position: relative;\n  padding: 8px 0;\n  margin-top: 30px;\n  margin-bottom: 20px; }\n  .brands-carousel .swiper-container {\n    padding: 8px 2px;\n    margin: 0 14px; }\n  .brands-carousel .swiper-container .brand-item {\n      height: 80px;\n      padding: 16px;\n      display: flex;\n      align-items: center; }\n  .brands-carousel .swiper-container .brand-item img {\n        max-width: 100%;\n        max-height: 100%;\n        margin: 0 auto; }\n  .brands-carousel .swiper-button-prev {\n    left: -10px; }\n  .brands-carousel .swiper-button-next {\n    right: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyYW5kcy1jYXJvdXNlbC9DOlxcYXBwc1xcTmV0c3VpdGVFY29tbWVyY2Uvc3JjXFxhcHBcXHNoYXJlZFxcYnJhbmRzLWNhcm91c2VsXFxicmFuZHMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBNEI7RUFDNUIsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBc0J0QjtFQTNCRDtJQU9RLGlCQUFnQjtJQUNoQixlQUFjLEVBWWpCO0VBcEJMO01BVVksYUFBWTtNQUNaLGNBQWE7TUFDYixjQUFhO01BQ2Isb0JBQW1CLEVBTXRCO0VBbkJUO1FBZWdCLGdCQUFlO1FBQ2YsaUJBQWdCO1FBQ2hCLGVBQWMsRUFDakI7RUFsQmI7SUFzQlEsWUFBVyxFQUNkO0VBdkJMO0lBeUJRLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9icmFuZHMtY2Fyb3VzZWwvYnJhbmRzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyYW5kcy1jYXJvdXNlbHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wMyk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLnN3aXBlci1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDJweDtcclxuICAgICAgICBtYXJnaW46IDAgMTRweDtcclxuICAgICAgICAuYnJhbmQtaXRlbXtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLXByZXZ7XHJcbiAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0e1xyXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/brands-carousel/brands-carousel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/brands-carousel/brands-carousel.component.ts ***!
  \*********************************************************************/
/*! exports provided: BrandsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsCarouselComponent", function() { return BrandsCarouselComponent; });
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

var BrandsCarouselComponent = /** @class */ (function () {
    function BrandsCarouselComponent() {
        this.brands = [];
        this.config = {};
    }
    BrandsCarouselComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            slidesPerView: 7,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: "slide",
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3,
                },
                960: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 5,
                },
                1500: {
                    slidesPerView: 6,
                }
            }
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('brands'),
        __metadata("design:type", Array)
    ], BrandsCarouselComponent.prototype, "brands", void 0);
    BrandsCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brands-carousel',
            template: __webpack_require__(/*! ./brands-carousel.component.html */ "./src/app/shared/brands-carousel/brands-carousel.component.html"),
            styles: [__webpack_require__(/*! ./brands-carousel.component.scss */ "./src/app/shared/brands-carousel/brands-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BrandsCarouselComponent);
    return BrandsCarouselComponent;
}());



/***/ }),

/***/ "./src/app/shared/category-list/category-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/category-list/category-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let category of mainCategories\">\r\n    <button mat-menu-item (click)=\"changeCategory($event)\">\r\n        <span>{{category.name}}</span>\r\n    </button>\r\n     <div *ngIf=\"category.hasSubCategory\" class=\"sub-category\">\r\n        <app-category-list [categories]=\"categories\" [categoryParentId]=\"category.id\" (change)=\"changeCategory($event)\"></app-category-list>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/category-list/category-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/category-list/category-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/category-list/category-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/category-list/category-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
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

var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CategoryListComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.categories && !this.mainCategories) {
            this.mainCategories = this.categories.filter(function (category) { return category.parentId == _this.categoryParentId; });
        }
    };
    CategoryListComponent.prototype.stopClickPropagate = function (event) {
        if (window.innerWidth < 960) {
            event.stopPropagation();
            event.preventDefault();
        }
    };
    CategoryListComponent.prototype.changeCategory = function (event) {
        this.change.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoryListComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoryListComponent.prototype, "categoryParentId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CategoryListComponent.prototype, "change", void 0);
    CategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/app/shared/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.scss */ "./src/app/shared/category-list/category-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/shared/controls/controls.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/controls/controls.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" [fxLayoutAlign]=\"align\" class=\"text-muted\">\r\n    <div *ngIf=\"product?.availibilityCount > 0 && (type=='all' || type=='wish')\">\r\n        <span *ngIf=\"type!='wish'\" class=\"fw-500\">Quantity:</span> \r\n        <button mat-icon-button matTooltip=\"Remove\" (click)=\"decrement()\"><mat-icon>remove</mat-icon></button>\r\n        <span> {{count}} </span>\r\n        <button mat-icon-button matTooltip=\"Add\" (click)=\"increment()\"><mat-icon>add</mat-icon></button>\r\n    </div>\r\n    <div *ngIf=\"type!='wish'\">\r\n        <button mat-icon-button matTooltip=\"Add to wishlist\" (click)=\"addToWishList(product)\"><mat-icon>favorite</mat-icon></button>\r\n        <button mat-icon-button matTooltip=\"Add to cart\" *ngIf=\"product?.availibilityCount > 0\" (click)=\"addToCart(product)\"><mat-icon>shopping_cart</mat-icon></button>\r\n        <button mat-icon-button matTooltip=\"Add to compare\" (click)=\"addToCompare(product)\"><mat-icon>compare</mat-icon></button>\r\n        <button *ngIf=\"type!='all'\" mat-icon-button matTooltip=\"Quick view\" (click)=\"openProductDialog(product)\"><mat-icon>remove_red_eye</mat-icon></button>\r\n    </div>\r\n</div> \r\n<div *ngIf=\"product?.availibilityCount == 0 && type=='all'\" class=\"bg-warn p-1 mt-2\">\r\n    Sorry, this item is unavailable. Please choose a different one.\r\n</div>"

/***/ }),

/***/ "./src/app/shared/controls/controls.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/controls/controls.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb250cm9scy9jb250cm9scy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/controls/controls.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/controls/controls.component.ts ***!
  \*******************************************************/
/*! exports provided: ControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.models */ "./src/app/app.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ControlsComponent = /** @class */ (function () {
    function ControlsComponent(appService, snackBar) {
        this.appService = appService;
        this.snackBar = snackBar;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onQuantityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.count = 1;
        this.align = 'center center';
    }
    ControlsComponent.prototype.ngOnInit = function () {
        if (this.product) {
            if (this.product.cartCount > 0) {
                this.count = this.product.cartCount;
            }
        }
        this.layoutAlign();
    };
    ControlsComponent.prototype.layoutAlign = function () {
        if (this.type == 'all') {
            this.align = 'space-between center';
        }
        else if (this.type == 'wish') {
            this.align = 'start center';
        }
        else {
            this.align = 'center center';
        }
    };
    ControlsComponent.prototype.increment = function (count) {
        if (this.count < this.product.availibilityCount) {
            this.count++;
            var obj = {
                productId: this.product.id,
                soldQuantity: this.count,
                total: this.count * this.product.newPrice
            };
            this.changeQuantity(obj);
        }
        else {
            this.snackBar.open('You can not choose more items than available. In stock ' + this.count + ' items.', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        }
    };
    ControlsComponent.prototype.decrement = function (count) {
        if (this.count > 1) {
            this.count--;
            var obj = {
                productId: this.product.id,
                soldQuantity: this.count,
                total: this.count * this.product.newPrice
            };
            this.changeQuantity(obj);
        }
    };
    ControlsComponent.prototype.addToCompare = function (product) {
        this.appService.addToCompare(product);
    };
    ControlsComponent.prototype.addToWishList = function (product) {
        this.appService.addToWishList(product);
    };
    ControlsComponent.prototype.addToCart = function (product) {
        // console.log(product)
        var currentProduct = this.appService.Data.cartList.filter(function (item) { return item.id == product.id; })[0];
        if (currentProduct) {
            if ((currentProduct.cartCount + this.count) <= this.product.availibilityCount) {
                product.cartCount = currentProduct.cartCount + this.count;
            }
            else {
                this.snackBar.open('You can not add more items than available. In stock ' + this.product.availibilityCount + ' items and you already added ' + currentProduct.cartCount + ' item to your cart', '×', { panelClass: 'error', verticalPosition: 'top', duration: 5000 });
                return false;
            }
        }
        else {
            product.cartCount = this.count;
        }
        this.appService.addToCart(product);
    };
    ControlsComponent.prototype.openProductDialog = function (event) {
        this.onOpenProductDialog.emit(event);
    };
    ControlsComponent.prototype.changeQuantity = function (value) {
        this.onQuantityChange.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_models__WEBPACK_IMPORTED_MODULE_3__["Product"])
    ], ControlsComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ControlsComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ControlsComponent.prototype, "onOpenProductDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ControlsComponent.prototype, "onQuantityChange", void 0);
    ControlsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-controls',
            template: __webpack_require__(/*! ./controls.component.html */ "./src/app/shared/controls/controls.component.html"),
            styles: [__webpack_require__(/*! ./controls.component.scss */ "./src/app/shared/controls/controls.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ControlsComponent);
    return ControlsComponent;
}());



/***/ }),

/***/ "./src/app/shared/main-carousel/main-carousel.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/main-carousel/main-carousel.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-slider\">\r\n  <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n    <div class=\"swiper-wrapper h-100\">      \r\n      <div *ngFor=\"let slide of slides\" class=\"swiper-slide\">\r\n        <div [attr.data-background]=\"slide.image\" class=\"slide-item swiper-lazy\">\r\n            <div class=\"swiper-lazy-preloader swiper-lazy-preloader-white\"></div>\r\n            <div class=\"mask\"></div>  \r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"content\">\r\n              <h1>{{slide.title}}</h1>\r\n              <h3>{{slide.subtitle}}</h3>\r\n              <button mat-raised-button color=\"primary\">Shop now</button>\r\n            </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"swiper-pagination white\"></div>\r\n    <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n    <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/main-carousel/main-carousel.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/main-carousel/main-carousel.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-slider {\n  height: 500px;\n  margin-top: 14px; }\n  .main-slider .slide-item {\n    height: 100%;\n    background-size: cover;\n    background-position: center; }\n  .main-slider .slide-item .content {\n      height: 100%;\n      position: relative;\n      z-index: 9; }\n  .main-slider .slide-item .content h1 {\n        font-size: 48px;\n        text-align: center;\n        color: #fff;\n        text-transform: uppercase;\n        letter-spacing: 3px; }\n  .main-slider .slide-item .content h3 {\n        font-size: 36px;\n        text-align: center;\n        color: #fff;\n        margin-bottom: 30px;\n        font-weight: 300;\n        letter-spacing: 2px; }\n  .main-slider .slide-item .mask {\n      opacity: 0.6;\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      z-index: 0;\n      background-color: rgba(0, 0, 0, 0.8); }\n  .main-slider .swiper-lazy-preloader {\n    top: 18%; }\n  @media (max-width: 575px) {\n  .main-slider {\n    height: 280px; }\n    .main-slider .slide-item .content h1 {\n      font-size: 24px;\n      letter-spacing: 3px; }\n    .main-slider .slide-item .content h3 {\n      font-size: 18px;\n      margin-bottom: 10px;\n      letter-spacing: 2px; } }\n  @media (min-width: 576px) and (max-width: 767px) {\n  .main-slider {\n    height: 320px; }\n    .main-slider .slide-item .content h1 {\n      font-size: 36px;\n      letter-spacing: 3px; }\n    .main-slider .slide-item .content h3 {\n      font-size: 24px;\n      margin-bottom: 20px;\n      letter-spacing: 2px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21haW4tY2Fyb3VzZWwvQzpcXGFwcHNcXE5ldHN1aXRlRWNvbW1lcmNlL3NyY1xcYXBwXFxzaGFyZWRcXG1haW4tY2Fyb3VzZWxcXG1haW4tY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsaUJBQWdCLEVBc0NuQjtFQXhDRDtJQUlRLGFBQVk7SUFDWix1QkFBc0I7SUFDdEIsNEJBQTJCLEVBOEI5QjtFQXBDTDtNQVFZLGFBQVk7TUFDWixtQkFBa0I7TUFDbEIsV0FBVSxFQWdCYjtFQTFCVDtRQVlnQixnQkFBZTtRQUNmLG1CQUFrQjtRQUNsQixZQUFXO1FBQ1gsMEJBQXlCO1FBQ3pCLG9CQUFtQixFQUN0QjtFQWpCYjtRQW1CZ0IsZ0JBQWU7UUFDZixtQkFBa0I7UUFDbEIsWUFBVztRQUNYLG9CQUFtQjtRQUNuQixpQkFBZ0I7UUFDaEIsb0JBQW1CLEVBQ3RCO0VBekJiO01BNEJZLGFBQVk7TUFDWixZQUFXO01BQ1gsYUFBWTtNQUNaLG1CQUFrQjtNQUNsQixpQkFBZ0I7TUFDaEIsV0FBVTtNQUNWLHFDQUFpQyxFQUNwQztFQW5DVDtJQXNDUSxTQUFRLEVBQ1g7RUFHTDtFQUNJO0lBQ0ksY0FBYSxFQVloQjtJQWJEO01BSVksZ0JBQWU7TUFDZixvQkFBbUIsRUFDdEI7SUFOVDtNQVFZLGdCQUFlO01BQ2Ysb0JBQW1CO01BQ25CLG9CQUFtQixFQUN0QixFQUFBO0VBSWI7RUFDSTtJQUNJLGNBQWEsRUFZaEI7SUFiRDtNQUlZLGdCQUFlO01BQ2Ysb0JBQW1CLEVBQ3RCO0lBTlQ7TUFRWSxnQkFBZTtNQUNmLG9CQUFtQjtNQUNuQixvQkFBbUIsRUFDdEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYWluLWNhcm91c2VsL21haW4tY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zbGlkZXJ7IFxyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAuc2xpZGUtaXRlbXtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWFza3tcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWxhenktcHJlbG9hZGVye1xyXG4gICAgICAgIHRvcDogMTglO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHsgXHJcbiAgICAubWFpbi1zbGlkZXJ7IFxyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgLnNsaWRlLWl0ZW0gLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5tYWluLXNsaWRlcnsgXHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgICAgICAuc2xpZGUtaXRlbSAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/main-carousel/main-carousel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/main-carousel/main-carousel.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCarouselComponent", function() { return MainCarouselComponent; });
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

var MainCarouselComponent = /** @class */ (function () {
    function MainCarouselComponent() {
        this.slides = [];
        this.config = {};
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true
        };
    }
    MainCarouselComponent.prototype.ngOnInit = function () { };
    MainCarouselComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: "slide"
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('slides'),
        __metadata("design:type", Array)
    ], MainCarouselComponent.prototype, "slides", void 0);
    MainCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-carousel',
            template: __webpack_require__(/*! ./main-carousel.component.html */ "./src/app/shared/main-carousel/main-carousel.component.html"),
            styles: [__webpack_require__(/*! ./main-carousel.component.scss */ "./src/app/shared/main-carousel/main-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainCarouselComponent);
    return MainCarouselComponent;
}());



/***/ }),

/***/ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/products-carousel/product-dialog/product-dialog.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"close-btn-outer\">\r\n    <button mat-mini-fab color=\"warn\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\"> \r\n            <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n                <div class=\"swiper-wrapper\">      \r\n                    <div *ngFor=\"let image of product.images\" class=\"swiper-slide\">\r\n                        <img [attr.data-src]=\"image.medium\" class=\"swiper-lazy\"/>\r\n                        <div class=\"swiper-lazy-preloader\"></div>\r\n                    </div>\r\n                </div>\r\n                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" ngClass.gt-sm=\"px-2 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\"> \r\n            <h2>{{product.name}}</h2>\r\n            <div class=\"py-1 lh\">\r\n                <p><span class=\"text-muted fw-500\">Category: </span><span>{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</span></p>\r\n                <p><span class=\"text-muted fw-500\">Availibility: </span><span>{{ (product.availibilityCount > 0) ? 'In stock':'Unavailable'}}</span></p>\r\n            </div>                 \r\n            <div class=\"py-1\">\r\n                <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'row'\"></app-rating>\r\n            </div>\r\n            <p class=\"py-1 text-muted lh\">{{product.description}}</p>\r\n            <div fxLayoutAlign=\"end center\" class=\"text-muted\">                 \r\n                 <button [mat-dialog-close]=\"product\" mat-icon-button matTooltip=\"View full details\"><mat-icon>arrow_forward</mat-icon></button>               \r\n            </div>              \r\n            <div class=\"divider\"></div>\r\n            <h2 class=\"mt-2 new-price\">${{product.newPrice}}</h2>\r\n            <app-controls [product]=\"product\" [type]=\"'all'\"></app-controls>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/products-carousel/product-dialog/product-dialog.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-dialog .mat-dialog-container {\n  overflow: visible !important; }\n  .product-dialog .mat-dialog-container .close-btn-outer {\n    position: relative; }\n  .product-dialog .mat-dialog-container .close-btn-outer button {\n      position: absolute;\n      right: -44px;\n      top: -44px; }\n  .product-dialog .mat-dialog-container .swiper-slide {\n    text-align: center; }\n  .product-dialog .mat-dialog-container .swiper-slide img {\n      max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2R1Y3RzLWNhcm91c2VsL3Byb2R1Y3QtZGlhbG9nL0M6XFxhcHBzXFxOZXRzdWl0ZUVjb21tZXJjZS9zcmNcXGFwcFxcc2hhcmVkXFxwcm9kdWN0cy1jYXJvdXNlbFxccHJvZHVjdC1kaWFsb2dcXHByb2R1Y3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsNkJBQTRCLEVBZS9CO0VBakJMO0lBSVksbUJBQWtCLEVBTXJCO0VBVlQ7TUFNZ0IsbUJBQWtCO01BQ2xCLGFBQVk7TUFDWixXQUFVLEVBQ2I7RUFUYjtJQVlZLG1CQUFrQixFQUlyQjtFQWhCVDtNQWNnQixnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9kdWN0cy1jYXJvdXNlbC9wcm9kdWN0LWRpYWxvZy9wcm9kdWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWRpYWxvZ3tcclxuICAgIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5jbG9zZS1idG4tb3V0ZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC00NHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtNDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3dpcGVyLXNsaWRle1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDialogComponent", function() { return ProductDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.models */ "./src/app/app.models.ts");
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




var ProductDialogComponent = /** @class */ (function () {
    function ProductDialogComponent(appService, dialogRef, product) {
        this.appService = appService;
        this.dialogRef = dialogRef;
        this.product = product;
        this.config = {};
    }
    ProductDialogComponent.prototype.ngOnInit = function () { };
    ProductDialogComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            }
        };
    };
    ProductDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ProductDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-dialog',
            template: __webpack_require__(/*! ./product-dialog.component.html */ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.html"),
            styles: [__webpack_require__(/*! ./product-dialog.component.scss */ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _app_models__WEBPACK_IMPORTED_MODULE_3__["Product"]])
    ], ProductDialogComponent);
    return ProductDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/products-carousel/products-carousel.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/products-carousel/products-carousel.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"products\" class=\"swiper-container\" [swiper]=\"config\">\r\n    <div class=\"swiper-wrapper h-100\">      \r\n        <div *ngFor=\"let product of products\" class=\"swiper-slide\">\r\n            <mat-card class=\"product-item\">\r\n                <mat-chip-list *ngIf=\"product.discount\">\r\n                    <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                </mat-chip-list>\r\n                <a [routerLink]=\"['/products', product.id, product.name]\" class=\"image-link\">\r\n                    <img [attr.data-src]=\"product.images[0].medium\" class=\"swiper-lazy\"/>\r\n                    <div class=\"swiper-lazy-preloader\"></div>\r\n                </a>\r\n                <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \r\n                <a [routerLink]=\"['/products', product.id, product.name]\" class=\"title text-truncate\">\r\n                    {{product.name}}\r\n                </a>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                        <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                        <p class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                    </div>\r\n                    <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>\r\n                </div>                            \r\n                <div class=\"divider mt-2\"></div>\r\n                <div class=\"icons\">\r\n                    <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n    <button mat-mini-fab class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n    <button mat-mini-fab class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n</div>"

/***/ }),

/***/ "./src/app/shared/products-carousel/products-carousel.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/products-carousel/products-carousel.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-container {\n  padding: 16px 2px 2px 2px; }\n  .swiper-container .swiper-slide {\n    text-align: center; }\n  .swiper-button-next.swiper-button-disabled,\n.swiper-button-prev.swiper-button-disabled {\n  pointer-events: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2R1Y3RzLWNhcm91c2VsL0M6XFxhcHBzXFxOZXRzdWl0ZUVjb21tZXJjZS9zcmNcXGFwcFxcc2hhcmVkXFxwcm9kdWN0cy1jYXJvdXNlbFxccHJvZHVjdHMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUIsRUFJNUI7RUFMRDtJQUdRLG1CQUFrQixFQUNyQjtFQUVMOztFQUVJLHFCQUFvQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9kdWN0cy1jYXJvdXNlbC9wcm9kdWN0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMTZweCAycHggMnB4IDJweDtcclxuICAgIC5zd2lwZXItc2xpZGV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCwgXHJcbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/products-carousel/products-carousel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/products-carousel/products-carousel.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCarouselComponent", function() { return ProductsCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-dialog/product-dialog.component */ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts");
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





var ProductsCarouselComponent = /** @class */ (function () {
    function ProductsCarouselComponent(appService, dialog, router) {
        this.appService = appService;
        this.dialog = dialog;
        this.router = router;
        this.products = [];
        this.config = {};
    }
    ProductsCarouselComponent.prototype.ngOnInit = function () {
    };
    ProductsCarouselComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            observer: true,
            slidesPerView: 6,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                740: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                },
                1500: {
                    slidesPerView: 5,
                }
            }
        };
    };
    ProductsCarouselComponent.prototype.openProductDialog = function (product) {
        var _this = this;
        var dialogRef = this.dialog.open(_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog'
        });
        dialogRef.afterClosed().subscribe(function (product) {
            if (product) {
                _this.router.navigate(['/products', product.id, product.name]);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('products'),
        __metadata("design:type", Array)
    ], ProductsCarouselComponent.prototype, "products", void 0);
    ProductsCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-carousel',
            template: __webpack_require__(/*! ./products-carousel.component.html */ "./src/app/shared/products-carousel/products-carousel.component.html"),
            styles: [__webpack_require__(/*! ./products-carousel.component.scss */ "./src/app/shared/products-carousel/products-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductsCarouselComponent);
    return ProductsCarouselComponent;
}());



/***/ }),

/***/ "./src/app/shared/rating/rating.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/rating/rating.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [fxLayout]=\"direction\" [fxLayoutAlign]=\"(direction == 'row') ? 'start center' : 'center end'\">    \r\n    <div class=\"ratings\">        \r\n         <mat-icon *ngFor=\"let star of stars; let i=index;\" class=\"mat-icon-xs\" (click)=\"rate(i)\">{{star}}</mat-icon>\r\n    </div>\r\n    <p class=\"ratings-count text-muted\">{{ratingsCount}} ratings</p>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/rating/rating.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/rating/rating.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ratings {\n  color: #fbc02d; }\n\n.ratings-count {\n  margin-left: 12px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JhdGluZy9DOlxcYXBwc1xcTmV0c3VpdGVFY29tbWVyY2Uvc3JjXFxhcHBcXHNoYXJlZFxccmF0aW5nXFxyYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFhLEVBQ2hCOztBQUNEO0VBQ0ksa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGluZ3N7XHJcbiAgICBjb2xvcjojZmJjMDJkO1xyXG59XHJcbi5yYXRpbmdzLWNvdW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/rating/rating.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/rating/rating.component.ts ***!
  \***************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
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

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
    }
    RatingComponent.prototype.ngDoCheck = function () {
        if (this.ratingsCount && this.ratingsValue && !this.avg) {
            this.calculateAvgValue();
        }
    };
    RatingComponent.prototype.rate = function (value) {
        // value = (value + 1)*20;
        // this.ratingsCount++;
        // this.ratingsValue = this.ratingsValue + value;
        // this.calculateAvgValue();
    };
    RatingComponent.prototype.calculateAvgValue = function () {
        this.avg = this.ratingsValue / this.ratingsCount;
        switch (true) {
            case this.avg > 0 && this.avg < 20: {
                this.stars = ['star_half', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
            }
            case this.avg == 20: {
                this.stars = ['star', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
            }
            case this.avg > 20 && this.avg < 40: {
                this.stars = ['star', 'star_half', 'star_border', 'star_border', 'star_border'];
                break;
            }
            case this.avg == 40: {
                this.stars = ['star', 'star', 'star_border', 'star_border', 'star_border'];
                break;
            }
            case this.avg > 40 && this.avg < 60: {
                this.stars = ['star', 'star', 'star_half', 'star_border', 'star_border'];
                break;
            }
            case this.avg == 60: {
                this.stars = ['star', 'star', 'star', 'star_border', 'star_border'];
                break;
            }
            case this.avg > 60 && this.avg < 80: {
                this.stars = ['star', 'star', 'star', 'star_half', 'star_border'];
                break;
            }
            case this.avg == 80: {
                this.stars = ['star', 'star', 'star', 'star', 'star_border'];
                break;
            }
            case this.avg > 80 && this.avg < 100: {
                this.stars = ['star', 'star', 'star', 'star', 'star_half'];
                break;
            }
            case this.avg >= 100: {
                this.stars = ['star', 'star', 'star', 'star', 'star'];
                break;
            }
            default: {
                this.stars = ['star_border', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "ratingsCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "ratingsValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "direction", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/shared/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/shared/rating/rating.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/shared/rating/rating.component.ts");
/* harmony import */ var _controls_controls_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/controls.component */ "./src/app/shared/controls/controls.component.ts");
/* harmony import */ var _main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-carousel/main-carousel.component */ "./src/app/shared/main-carousel/main-carousel.component.ts");
/* harmony import */ var _brands_carousel_brands_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./brands-carousel/brands-carousel.component */ "./src/app/shared/brands-carousel/brands-carousel.component.ts");
/* harmony import */ var _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products-carousel/products-carousel.component */ "./src/app/shared/products-carousel/products-carousel.component.ts");
/* harmony import */ var _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products-carousel/product-dialog/product-dialog.component */ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var _banners_banners_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./banners/banners.component */ "./src/app/shared/banners/banners.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/shared/category-list/category-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _rating_rating_component__WEBPACK_IMPORTED_MODULE_8__["RatingComponent"],
                _controls_controls_component__WEBPACK_IMPORTED_MODULE_9__["ControlsComponent"],
                _main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_10__["MainCarouselComponent"],
                _brands_carousel_brands_carousel_component__WEBPACK_IMPORTED_MODULE_11__["BrandsCarouselComponent"],
                _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_12__["ProductsCarouselComponent"],
                _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ProductDialogComponent"],
                _banners_banners_component__WEBPACK_IMPORTED_MODULE_14__["BannersComponent"],
                _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_15__["CategoryListComponent"]
            ],
            declarations: [
                _rating_rating_component__WEBPACK_IMPORTED_MODULE_8__["RatingComponent"],
                _controls_controls_component__WEBPACK_IMPORTED_MODULE_9__["ControlsComponent"],
                _main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_10__["MainCarouselComponent"],
                _brands_carousel_brands_carousel_component__WEBPACK_IMPORTED_MODULE_11__["BrandsCarouselComponent"],
                _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_12__["ProductsCarouselComponent"],
                _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ProductDialogComponent"],
                _banners_banners_component__WEBPACK_IMPORTED_MODULE_14__["BannersComponent"],
                _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_15__["CategoryListComponent"]
            ],
            entryComponents: [
                _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ProductDialogComponent"]
            ],
            providers: [
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/theme/components/breadcrumb/breadcrumb.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" *ngIf=\"router.url != '/'\">\r\n    <div fxFlex=\"100\">\r\n        <mat-card fxLayout=\"row\" class=\"breadcrumb light-block\">\r\n            <a *ngIf=\"router.url != '/'\" routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\r\n                <mat-icon>home</mat-icon>\r\n                <span class=\"breadcrumb-title\">Homepage</span>\r\n            </a>\r\n            <div *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                 \r\n                <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>   \r\n                <span [hidden]=\"i != (breadcrumbs.length - 1)\" class=\"breadcrumb-title active\"><b>{{breadcrumb.name}}</b></span>\r\n            </div> \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/components/breadcrumb/breadcrumb.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.breadcrumb {\n  padding: 8px 0;\n  box-shadow: none;\n  margin-bottom: 16px; }\n.breadcrumb a, .breadcrumb span {\n    font-size: 13px;\n    text-decoration: none;\n    color: inherit; }\n.breadcrumb .mat-icon {\n    font-size: 20px;\n    height: 20px;\n    width: 20px;\n    padding: 0 6px;\n    opacity: 0.7; }\n.breadcrumb .breadcrumb-title.active {\n    text-transform: uppercase; }\n.breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n    display: inline-block;\n    padding-right: .5rem;\n    padding-left: .5rem;\n    content: \"»\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9DOlxcYXBwc1xcTmV0c3VpdGVFY29tbWVyY2Uvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxicmVhZGNydW1iXFxicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0FqQjtFQUNJLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBc0J0QjtBQXpCRDtJQUtRLGdCQUFlO0lBQ2Ysc0JBQXFCO0lBQ3JCLGVBQWMsRUFDakI7QUFSTDtJQVVRLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLFlBQVc7SUFDWCxlQUFjO0lBQ2QsYUFBWSxFQUNmO0FBZkw7SUFpQlEsMEJBQXlCLEVBQzVCO0FBbEJMO0lBb0JRLHNCQUFxQjtJQUNyQixxQkFBb0I7SUFDcEIsb0JBQW1CO0lBQ25CLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJyZWFkY3J1bWIge1xuICBwYWRkaW5nOiA4cHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxuICAuYnJlYWRjcnVtYiBhLCAuYnJlYWRjcnVtYiBzcGFuIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0OyB9XG4gIC5icmVhZGNydW1iIC5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBwYWRkaW5nOiAwIDZweDtcbiAgICBvcGFjaXR5OiAwLjc7IH1cbiAgLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItdGl0bGUuYWN0aXZlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gIC5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOmJlZm9yZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XG4gICAgY29udGVudDogXCLCu1wiOyB9XG4iLCIuYnJlYWRjcnVtYntcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBhLCBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi10aXRsZS5hY3RpdmV7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgIC5icmVhZGNydW1iLWl0ZW0rLmJyZWFkY3J1bWItaXRlbTpiZWZvcmV7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjVyZW07XHJcbiAgICAgICAgY29udGVudDogXCLCu1wiO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/theme/components/breadcrumb/breadcrumb.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/components/sidenav-menu/sidenav-menu.service */ "./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(appSettings, router, activatedRoute, title, sidenavMenuService) {
        var _this = this;
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.sidenavMenuService = sidenavMenuService;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.breadcrumbs = [];
                _this.parseRoute(_this.router.routerState.snapshot.root);
                _this.pageTitle = "";
                _this.breadcrumbs.forEach(function (breadcrumb) {
                    _this.pageTitle += ' > ' + breadcrumb.name;
                });
                _this.title.setTitle(_this.settings.name + _this.pageTitle);
            }
        });
    }
    BreadcrumbComponent.prototype.parseRoute = function (node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                var urlSegments_1 = [];
                node.pathFromRoot.forEach(function (routerState) {
                    urlSegments_1 = urlSegments_1.concat(routerState.url);
                });
                var url = urlSegments_1.map(function (urlSegment) {
                    return urlSegment.path;
                }).join('/');
                if (node.params.name) {
                    this.breadcrumbs.push({
                        name: node.params.name,
                        url: '/' + url
                    });
                }
                else {
                    this.breadcrumbs.push({
                        name: node.data['breadcrumb'],
                        url: '/' + url
                    });
                }
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    };
    BreadcrumbComponent.prototype.closeSubMenus = function () {
        if (window.innerWidth < 960) {
            this.sidenavMenuService.closeAllSubMenus();
        }
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/theme/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/theme/components/breadcrumb/breadcrumb.component.scss")],
            providers: [_theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"bg-primary footer\">\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center center\" class=\"border-bottom-mute subscribe-block theme-container\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" fxLayout=\"column\" fxLayoutAlign=\"center center\"> \r\n            <h1 class=\"fw-500\">Subscribe our Newsletter</h1>\r\n            <h3 class=\"fw-300 secondary-color\">Stay up to date with our latest new and products</h3>\r\n        </div>\r\n        <form method=\"get\" class=\"subscribe-search-form\" fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"42.4\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n            <input type=\"text\" placeholder=\"Your email address...\" fxFlex>\r\n            <button mat-raised-button color=\"accent\" (click)=\"subscribe()\" type=\"button\" class=\"mat-elevation-z0 text-muted\">Subscribe</button>\r\n        </form>\r\n    </div>\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" class=\"py-3 border-bottom-mute theme-container\">        \r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"40\"> \r\n            <h3 class=\"col-title\">USEFUL LINKS</h3>\r\n            <p class=\"mt-2\"><a href=\"javascript:void(0);\" class=\"link secondary-color\">My Account</a></p>\r\n            <p class=\"mt-1\"><a routerLink=\"/contact\" class=\"link secondary-color\">Contact</a></p>\r\n            <p class=\"mt-1\"><a routerLink=\"/compare\" class=\"link secondary-color\">Compare</a></p>\r\n            <p class=\"mt-1\"><a routerLink=\"/wishlist\" class=\"link secondary-color\">Wishlist</a></p>\r\n            <p class=\"mt-1\"><a routerLink=\"/checkout\" class=\"link secondary-color\">Checkout</a></p>\r\n            <p class=\"mt-1\"><a href=\"javascript:void(0);\" class=\"link secondary-color\">FAQ</a></p>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\" ngClass.xs=\"mt-2\"> \r\n            <h3 class=\"col-title\">CONTACT INFORMATION</h3>            \r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-2 secondary-color\">\r\n                <mat-icon class=\"mr-1\">location_on</mat-icon>\r\n                <span>2903 Avenue Z, Brooklyn, NY</span>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 secondary-color\">\r\n                <mat-icon class=\"mr-1\">call</mat-icon>\r\n                <span>(212) 457-2308</span>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 secondary-color\">\r\n                <mat-icon class=\"mr-1\">mail_outline</mat-icon>\r\n                <span>contact@emporium.com</span>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 secondary-color\">\r\n                <mat-icon class=\"mr-1\">schedule</mat-icon>\r\n                <span>Mon - Sun / 9:00AM - 8:00PM</span>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 secondary-color\">\r\n                <mat-icon class=\"mr-1\">directions</mat-icon>\r\n                <a href=\"javascript:void(0);\" class=\"link secondary-color\">Get directions</a>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 secondary-color\">\r\n                <mat-icon class=\"mr-1\">directions_bus</mat-icon>\r\n                <span>Routes to us</span>\r\n            </p>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\"> \r\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\">\r\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\"></agm-marker>\r\n            </agm-map>\r\n        </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"copyright secondary-color theme-container\">\r\n        <p ngClass.xs=\"mt-1\">Copyright © 2018 All Rights Reserved</p>\r\n        <p>Designed & Developed by <a mat-button href=\"http://themeseason.com/\" target=\"_blank\">ThemeSeason</a></p>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  min-height: 100px;\n  padding: 16px 16px 0; }\n  .footer .subscribe-block {\n    padding: 16px 0 32px 0;\n    text-align: center; }\n  .footer .subscribe-block h1, .footer .subscribe-block h3 {\n      line-height: 1; }\n  .footer .subscribe-block h1 {\n      margin-bottom: 6px; }\n  .footer .subscribe-block .subscribe-search-form {\n      height: 50px;\n      padding: 0 16px; }\n  .footer .subscribe-block .subscribe-search-form input[type=text] {\n        border: 0;\n        outline: none;\n        padding: 0 25px;\n        font-size: 16px; }\n  .footer .subscribe-block .subscribe-search-form button {\n        font-size: 16px;\n        padding: 0 24px;\n        border-radius: 0; }\n  .footer .col-title {\n    font-weight: 600; }\n  .footer .mat-icon {\n    height: 21px;\n    line-height: 21px; }\n  .footer .link {\n    text-decoration: none; }\n  .footer .link:hover {\n      text-decoration: underline; }\n  .footer .copyright {\n    font-size: 13px;\n    font-weight: 300; }\n  @media (max-width: 575px) {\n  .footer .subscribe-block .subscribe-search-form {\n    height: 40px;\n    margin-top: 16px; }\n    .footer .subscribe-block .subscribe-search-form input[type=text] {\n      padding: 0 8px;\n      font-size: 14px; }\n    .footer .subscribe-block .subscribe-search-form button {\n      font-size: 14px;\n      padding: 0 16px; } }\n  @media (min-width: 576px) and (max-width: 767px) {\n  .footer .subscribe-block .subscribe-search-form {\n    margin-top: 16px; } }\n  .sebm-google-map-container {\n  height: 220px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mb290ZXIvQzpcXGFwcHNcXE5ldHN1aXRlRWNvbW1lcmNlL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIscUJBQW9CLEVBMkN2QjtFQTdDRDtJQUlRLHVCQUFzQjtJQUN0QixtQkFBa0IsRUFzQnJCO0VBM0JMO01BT1ksZUFBYyxFQUNqQjtFQVJUO01BVVksbUJBQWtCLEVBQ3JCO0VBWFQ7TUFhWSxhQUFZO01BQ1osZ0JBQWUsRUFZbEI7RUExQlQ7UUFnQmdCLFVBQVM7UUFDVCxjQUFhO1FBQ2IsZ0JBQWU7UUFDZixnQkFBZSxFQUNsQjtFQXBCYjtRQXNCZ0IsZ0JBQWU7UUFDZixnQkFBZTtRQUNmLGlCQUFnQixFQUNuQjtFQXpCYjtJQTZCUSxpQkFBZ0IsRUFDbkI7RUE5Qkw7SUFnQ1EsYUFBWTtJQUNaLGtCQUFpQixFQUNwQjtFQWxDTDtJQW9DUSxzQkFBcUIsRUFJeEI7RUF4Q0w7TUFzQ1ksMkJBQTBCLEVBQzdCO0VBdkNUO0lBMENRLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ25CO0VBR0w7RUFDSTtJQUVRLGFBQVk7SUFDWixpQkFBZ0IsRUFTbkI7SUFaTDtNQUtZLGVBQWM7TUFDZCxnQkFBZSxFQUNsQjtJQVBUO01BU1ksZ0JBQWU7TUFDZixnQkFBZSxFQUNsQixFQUFBO0VBS2I7RUFDSTtJQUVRLGlCQUFnQixFQUNuQixFQUFBO0VBSVQ7RUFDSSxjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMTZweCAxNnB4IDA7XHJcbiAgICAuc3Vic2NyaWJlLWJsb2Nre1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMCAzMnB4IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGgxLCBoM3tcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm17XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbC10aXRsZXtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLm1hdC1pY29ue1xyXG4gICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIH1cclxuICAgIC5saW5re1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29weXJpZ2h0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5mb290ZXIgLnN1YnNjcmliZS1ibG9ja3tcclxuICAgICAgICAuc3Vic2NyaWJlLXNlYXJjaC1mb3Jte1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7ICAgIFxyXG4gICAgLmZvb3RlciAuc3Vic2NyaWJlLWJsb2Nre1xyXG4gICAgICAgIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm17XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.prototype.subscribe = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/theme/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/theme/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/menu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/theme/components/menu/menu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"top-navbar mat-elevation-z2\" fxLayoutAlign=\"center center\">\r\n    <a mat-button routerLink=\"/\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\r\n    <a mat-button [matMenuTriggerFor]=\"menu\" (click)=\"openMegaMenu()\">Fashion<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n    <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\" class=\"mega-menu app-dropdown\">\r\n        <div fxLayout=\"row wrap\">\r\n            <div fxFlex=\"20\" fxLayout=\"column\" class=\"p-1\"> \r\n                <a mat-menu-item routerLink=\"/\"><b>WOMEN</b></a>\r\n                <mat-divider></mat-divider> \r\n                <a mat-menu-item routerLink=\"/\">Dresses & Skirts</a>\r\n                <a mat-menu-item routerLink=\"/\">Jackets</a>              \r\n                <a mat-menu-item routerLink=\"/\">Tops & Blouses</a>\r\n                <a mat-menu-item routerLink=\"/\">Shoes & Boots</a>\r\n                <a mat-menu-item routerLink=\"/\">Knitwear</a>                \r\n            </div>\r\n            <div fxFlex=\"20\" class=\"p-1\"> \r\n                <a mat-menu-item routerLink=\"/\"><b>MEN</b></a>\r\n                <mat-divider></mat-divider> \r\n                <button mat-menu-item>T-shirts & Polos</button>\r\n                <button mat-menu-item>Shoes & Boots</button> \r\n                <button mat-menu-item>Jeans</button> \r\n                <button mat-menu-item>Coats</button> \r\n            </div>\r\n            <div fxFlex=\"20\" class=\"p-1\"> \r\n                <a mat-menu-item routerLink=\"/\"><b>KIDS</b></a>\r\n                <mat-divider></mat-divider> \r\n                <button mat-menu-item>Top</button>\r\n                <button mat-menu-item>Pants & Shorts</button>\r\n                <button mat-menu-item>Dresses</button> \r\n                <button mat-menu-item>Skirts</button> \r\n                <button mat-menu-item>Set & Body</button> \r\n            </div>\r\n            <div fxFlex=\"20\" class=\"p-1\"> \r\n                <a mat-menu-item routerLink=\"/\"><b>ACCESSORIES</b></a>\r\n                <mat-divider></mat-divider>                \r\n                <button mat-menu-item>Watches</button>  \r\n                <button mat-menu-item>Bags & Wallet</button>\r\n                <button mat-menu-item>Sunglasses</button> \r\n                <button mat-menu-item>Belts & Hats</button> \r\n            </div>\r\n            <div fxFlex=\"20\" class=\"p-1\"> \r\n                <mat-card class=\"mega-menu-widget p-0\">\r\n                    <mat-chip-list>\r\n                        <mat-chip color=\"warn\" selected=\"true\">50% OFF</mat-chip>\r\n                    </mat-chip-list>\r\n                    <button mat-raised-button color=\"primary\">Shop now</button>\r\n                    <img src=\"assets/images/others/mega_menu_img.png\" alt=\"\" class=\"w-100\"> \r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n           \r\n    </mat-menu>\r\n    \r\n    <a mat-button [routerLink]=\"['/products', 'jewellery']\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Jewellery</a>\r\n    <a mat-button [routerLink]=\"['/products', 'electronics']\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Electronics</a>\r\n    <a mat-button [routerLink]=\"['/products', 'sports']\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Sports</a>\r\n    <a mat-button [routerLink]=\"['/products', 'motors']\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Motors</a>\r\n\r\n    <a mat-button [matMenuTriggerFor]=\"animals\">Pages<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n    <mat-menu #animals=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown\"> \r\n        <a mat-menu-item routerLink=\"/products\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">All products</a> \r\n        <a mat-menu-item [routerLink]=\"['/products', '2', 'PC All-in-One']\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Product detail</a> \r\n        <a mat-menu-item routerLink=\"/contact\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Contact</a>  \r\n        <a mat-menu-item routerLink=\"/sign-in\">Sign in</a>       \r\n        <a mat-menu-item routerLink=\"/404\">404 Error</a>\r\n        <a mat-menu-item [matMenuTriggerFor]=\"others\">Others</a>\r\n    </mat-menu>\r\n\r\n    <mat-menu #others=\"matMenu\" class=\"app-dropdown\">\r\n        <a mat-menu-item href=\"http://themeseason.com\" target=\"_blank\">External Link</a>\r\n        <a mat-menu-item>Menu item</a>\r\n        <a mat-menu-item>Menu item</a>\r\n        <a mat-menu-item>Menu item</a>\r\n    </mat-menu>\r\n    \r\n    <a mat-button routerLink=\"/contact\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Contact</a>\r\n\r\n</mat-toolbar>\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/components/menu/menu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/theme/components/menu/menu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/components/menu/menu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/components/menu/menu.component.ts ***!
  \*********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent.prototype.openMegaMenu = function () {
        var pane = document.getElementsByClassName('cdk-overlay-pane');
        [].forEach.call(pane, function (el) {
            if (el.children.length > 0) {
                if (el.children[0].classList.contains('mega-menu')) {
                    el.classList.add('mega-menu-pane');
                }
            }
        });
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/theme/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/theme/components/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/options/options.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/options/options.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"options transition\" [ngClass]=\"{'show': showOptions}\">\r\n    <button mat-raised-button (click)=\"showOptions = !showOptions\" class=\"options-icon mat-elevation-z0\">\r\n        <mat-icon>palette</mat-icon>\r\n    </button>\r\n    <mat-card fxLayout=\"column\" fxLayoutAlign=\"space-between start\"> \r\n        <span class=\"skin-icon green\" (click)=\"changeTheme('green')\"></span> \r\n        <span class=\"skin-icon blue\" (click)=\"changeTheme('blue')\"></span>\r\n        <span class=\"skin-icon red\" (click)=\"changeTheme('red')\"></span> \r\n        <span class=\"skin-icon pink\" (click)=\"changeTheme('pink')\"></span> \r\n        <span class=\"skin-icon purple\" (click)=\"changeTheme('purple')\"></span>\r\n        <span class=\"skin-icon grey\" (click)=\"changeTheme('grey')\"></span>      \r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/options/options.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/options/options.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".options {\n  width: 60px;\n  height: 250px;\n  position: fixed;\n  top: 100px;\n  right: -62px;\n  z-index: 9999; }\n  .options .options-icon {\n    padding: 0;\n    position: absolute;\n    top: 12px;\n    left: -36px;\n    min-width: 38px;\n    z-index: 1;\n    box-shadow: -2px 3px 1px -2px rgba(0, 0, 0, 0.2), -2px 2px 2px 0 rgba(0, 0, 0, 0.14), -2px 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .options .mat-card {\n    position: absolute;\n    padding: 14px;\n    width: 100%;\n    height: 100%; }\n  .options.show {\n    right: -2px; }\n  .options .skin-icon {\n    width: 32px;\n    height: 32px;\n    cursor: pointer; }\n  .options .skin-icon.green {\n      background-color: #689f38; }\n  .options .skin-icon.blue {\n      background-color: #1976d2; }\n  .options .skin-icon.red {\n      background-color: #d32f2f; }\n  .options .skin-icon.pink {\n      background-color: #c2185b; }\n  .options .skin-icon.purple {\n      background-color: #7b1fa2; }\n  .options .skin-icon.grey {\n      background-color: #455a64; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9vcHRpb25zL0M6XFxhcHBzXFxOZXRzdWl0ZUVjb21tZXJjZS9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXG9wdGlvbnNcXG9wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsY0FBYTtFQUNiLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLGFBQVk7RUFDWixjQUFhLEVBNENoQjtFQWxERDtJQVFRLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsVUFBUztJQUNULFlBQVc7SUFDWCxnQkFBZTtJQUNmLFdBQVU7SUFDVix5SEFFMEMsRUFDN0M7RUFqQkw7SUFtQlEsbUJBQWtCO0lBQ2xCLGNBQWE7SUFDYixZQUFXO0lBQ1gsYUFBWSxFQUNmO0VBdkJMO0lBeUJRLFlBQVcsRUFDZDtFQTFCTDtJQTRCUSxZQUFXO0lBQ1gsYUFBWTtJQUNaLGdCQUFlLEVBbUJsQjtFQWpETDtNQWdDWSwwQkFBeUIsRUFDNUI7RUFqQ1Q7TUFtQ1ksMEJBQXlCLEVBQzVCO0VBcENUO01Bc0NZLDBCQUF5QixFQUM1QjtFQXZDVDtNQXlDWSwwQkFBeUIsRUFDNUI7RUExQ1Q7TUE0Q1ksMEJBQXlCLEVBQzVCO0VBN0NUO01BK0NZLDBCQUF5QixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbnN7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgcmlnaHQ6IC02MnB4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIC5vcHRpb25zLWljb257XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMnB4O1xyXG4gICAgICAgIGxlZnQ6IC0zNnB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMzhweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0ycHggM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCBcclxuICAgICAgICAgICAgICAgICAgICAtMnB4IDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIFxyXG4gICAgICAgICAgICAgICAgICAgIC0ycHggMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIH1cclxuICAgIC5tYXQtY2FyZHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcGFkZGluZzogMTRweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmLnNob3d7XHJcbiAgICAgICAgcmlnaHQ6IC0ycHg7XHJcbiAgICB9XHJcbiAgICAuc2tpbi1pY29ue1xyXG4gICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7ICAgICAgICBcclxuICAgICAgICAmLmdyZWVue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZjM4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmJsdWV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucmVke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnBpbmt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjE4NWI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucHVycGxle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxZmEyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmdyZXl7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTVhNjQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/theme/components/options/options.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/options/options.component.ts ***!
  \***************************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsComponent = /** @class */ (function () {
    function OptionsComponent(appSettings) {
        this.appSettings = appSettings;
        this.showOptions = false;
        this.settings = this.appSettings.settings;
    }
    OptionsComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
    };
    OptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-options',
            template: __webpack_require__(/*! ./options.component.html */ "./src/app/theme/components/options/options.component.html"),
            styles: [__webpack_require__(/*! ./options.component.scss */ "./src/app/theme/components/options/options.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/sidenav-menu/sidenav-menu.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let menu of parentMenu\" class=\"menu-item\">\r\n    <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button\r\n        fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n        [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"        \r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n        fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n        [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"       \r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" fxLayoutAlign=\"start center\"       \r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n        <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n    </a>\r\n\r\n    <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n        <app-sidenav-menu [menuItems]=\"menuItems\" [menuParentId]=\"menu.id\"></app-sidenav-menu>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/sidenav-menu/sidenav-menu.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n\n.menu-item .mat-button {\n  width: 100%;\n  font-weight: 400;\n  text-transform: uppercase; }\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg); }\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px; }\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out; }\n\n.sub-menu .sub-menu .mat-button {\n    padding-left: 56px; }\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 76px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 96px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 116px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 136px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 156px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 176px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 196px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 216px; }\n\n.sub-menu .mat-button {\n    padding-left: 36px; }\n\n.sub-menu.show {\n    max-height: 500px;\n    transition: max-height 0.25s ease-in; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2LW1lbnUvQzpcXGFwcHNcXE5ldHN1aXRlRWNvbW1lcmNlL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcc2lkZW5hdi1tZW51XFxzaWRlbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvc2lkZW5hdi1tZW51L0M6XFxhcHBzXFxOZXRzdWl0ZUVjb21tZXJjZS9zcmNcXGFwcFxcdGhlbWVcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxVQUFTLEVBQ1o7O0FBRUQ7RUFFUSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLDBCQUF5QixFQVE1Qjs7QUFaTDtJQU9nQixrQ0FBaUM7SUFFakMsMEJBQXlCLEVBQzVCOztBQVZiO0VBY1EsbUJBQWtCLEVBQ3JCOztBQUdMO0VBRUksY0FBYTtFQUNiLGlCQUFnQjtFQUdoQixzQ0FBcUMsRUFVeEM7O0FBaEJEO0lDckJZLG1CQUFnQyxFQUNuQzs7QURvQlQ7SUNyQlksbUJBQWdDLEVBQ25DOztBRG9CVDtJQ3JCWSxtQkFBZ0MsRUFDbkM7O0FEb0JUO0lDckJZLG9CQUFnQyxFQUNuQzs7QURvQlQ7SUNyQlksb0JBQWdDLEVBQ25DOztBRG9CVDtJQ3JCWSxvQkFBZ0MsRUFDbkM7O0FEb0JUO0lDckJZLG9CQUFnQyxFQUNuQzs7QURvQlQ7SUNyQlksb0JBQWdDLEVBQ25DOztBRG9CVDtJQ3JCWSxvQkFBZ0MsRUFDbkM7O0FEb0JUO0lBUVEsbUJBQWtCLEVBQ3JCOztBQVRMO0lBV1Esa0JBQWlCO0lBR2pCLHFDQUFvQyxFQUN2QyIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvc2lkZW5hdi1tZW51L3NpZGVuYXYtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zXCI7XHJcblxyXG4ubWVudS1leHBhbmQtaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWVudS1pdGVte1xyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICYuZXhwYW5kZWR7XHJcbiAgICAgICAgICAgIC5tZW51LWV4cGFuZC1pY29ue1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuLnN1Yi1tZW51e1xyXG4gICAgQGluY2x1ZGUgbWVudS1sZXZlbC1wYWRkaW5nKCk7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgICBcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzZweDsgICAgICBcclxuICAgIH0gXHJcbiAgICAmLnNob3d7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgfSAgICBcclxufSIsIkBtaXhpbiBtZW51LWxldmVsLXBhZGRpbmcoKXtcclxuICAgICRlbGVtOiAnJztcclxuICAgIEBmb3IgJGkgZnJvbSAyIHRocm91Z2ggMTAge1xyXG4gICAgICAgICRlbGVtOiBpZigkaSA9PSAyLCBcIi5zdWItbWVudVwiLCBzZWxlY3Rvci1uZXN0KCRlbGVtLCBcIi5zdWItbWVudVwiKSk7ICAgICAgXHJcbiAgICAgICAgI3skZWxlbSArICcgLm1hdC1idXR0b24nfSB7IFxyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHggKyAoMjBweCAqICRpKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/theme/components/sidenav-menu/sidenav-menu.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.component.ts ***!
  \*************************************************************************/
/*! exports provided: SidenavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenuComponent", function() { return SidenavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav-menu.service */ "./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavMenuComponent = /** @class */ (function () {
    function SidenavMenuComponent(sidenavMenuService) {
        this.sidenavMenuService = sidenavMenuService;
    }
    SidenavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentMenu = this.menuItems.filter(function (item) { return item.parentId == _this.menuParentId; });
    };
    SidenavMenuComponent.prototype.onClick = function (menuId) {
        this.sidenavMenuService.toggleMenuItem(menuId);
        this.sidenavMenuService.closeOtherSubMenus(this.menuItems, menuId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuItems'),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "menuParentId", void 0);
    SidenavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav-menu',
            template: __webpack_require__(/*! ./sidenav-menu.component.html */ "./src/app/theme/components/sidenav-menu/sidenav-menu.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-menu.component.scss */ "./src/app/theme/components/sidenav-menu/sidenav-menu.component.scss")],
            providers: [_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"]]
        }),
        __metadata("design:paramtypes", [_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"]])
    ], SidenavMenuComponent);
    return SidenavMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/sidenav-menu/sidenav-menu.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.model.ts ***!
  \*********************************************************************/
/*! exports provided: SidenavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenu", function() { return SidenavMenu; });
var SidenavMenu = /** @class */ (function () {
    function SidenavMenu(id, title, routerLink, href, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
    return SidenavMenu;
}());



/***/ }),

/***/ "./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts ***!
  \***********************************************************************/
/*! exports provided: SidenavMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenuService", function() { return SidenavMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidenav_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav-menu */ "./src/app/theme/components/sidenav-menu/sidenav-menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidenavMenuService = /** @class */ (function () {
    function SidenavMenuService(location, router) {
        this.location = location;
        this.router = router;
    }
    SidenavMenuService.prototype.getSidenavMenuItems = function () {
        return _sidenav_menu__WEBPACK_IMPORTED_MODULE_3__["sidenavMenuItems"];
    };
    SidenavMenuService.prototype.expandActiveSubMenu = function (menu) {
        var url = this.location.path();
        var routerLink = decodeURIComponent(url);
        var activeMenuItem = menu.filter(function (item) { return item.routerLink === routerLink; });
        if (activeMenuItem[0]) {
            var menuItem_1 = activeMenuItem[0];
            while (menuItem_1.parentId != 0) {
                var parentMenuItem = menu.filter(function (item) { return item.id == menuItem_1.parentId; })[0];
                menuItem_1 = parentMenuItem;
                this.toggleMenuItem(menuItem_1.id);
            }
        }
    };
    SidenavMenuService.prototype.toggleMenuItem = function (menuId) {
        var menuItem = document.getElementById('menu-item-' + menuId);
        var subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    };
    SidenavMenuService.prototype.closeOtherSubMenus = function (menu, menuId) {
        var currentMenuItem = menu.filter(function (item) { return item.id == menuId; })[0];
        menu.forEach(function (item) {
            if ((item.id != menuId && item.parentId == currentMenuItem.parentId) || (currentMenuItem.parentId == 0 && item.id != menuId)) {
                var subMenu = document.getElementById('sub-menu-' + item.id);
                var menuItem = document.getElementById('menu-item-' + item.id);
                if (subMenu) {
                    if (subMenu.classList.contains('show')) {
                        subMenu.classList.remove('show');
                        menuItem.classList.remove('expanded');
                    }
                }
            }
        });
    };
    SidenavMenuService.prototype.closeAllSubMenus = function () {
        _sidenav_menu__WEBPACK_IMPORTED_MODULE_3__["sidenavMenuItems"].forEach(function (item) {
            var subMenu = document.getElementById('sub-menu-' + item.id);
            var menuItem = document.getElementById('menu-item-' + item.id);
            if (subMenu) {
                if (subMenu.classList.contains('show')) {
                    subMenu.classList.remove('show');
                    menuItem.classList.remove('expanded');
                }
            }
        });
    };
    SidenavMenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidenavMenuService);
    return SidenavMenuService;
}());



/***/ }),

/***/ "./src/app/theme/components/sidenav-menu/sidenav-menu.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.ts ***!
  \***************************************************************/
/*! exports provided: sidenavMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidenavMenuItems", function() { return sidenavMenuItems; });
/* harmony import */ var _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-menu.model */ "./src/app/theme/components/sidenav-menu/sidenav-menu.model.ts");

var sidenavMenuItems = [
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](1, 'Home', '/', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](2, 'Fashion', null, null, null, true, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](10, 'Women', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](11, 'Dresses & Skirts', '/products/dresses & skirts', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](12, 'Jackets', '/products/jackets', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](13, 'Tops & Blouses', '/products/tops & blouses', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](14, 'Shoes & Boots', '/products/shoes & boots', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](15, 'Knitwear', '/products/knitwear', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](20, 'Men', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](21, 'T-shirts & Polos', '/products/t-shirts & polos', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](22, 'Shoe & Boots', '/products/shoe & boots', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](23, 'Jeans', '/products/jeans', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](24, 'Coats', '/products/coats', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](30, 'Kids', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](31, 'Top', '/products/top', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](32, 'Pants & Shorts', '/products/pants & shorts', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](33, 'Dresses', '/products/dresses', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](34, 'Skirts', '/products/skirts', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](35, 'Set & Body', '/products/set & body', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](40, 'Accessories', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](41, 'Watches', '/products/watches', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](42, 'Bags & Wallet', '/products/bags & wallet', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](43, 'Sunglasses', '/products/sunglasses', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](44, 'Belts & Hats', '/products/belts & hats', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](50, 'Jewellery', '/products/jewellery', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](51, 'Electronics', '/products/electronics', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](52, 'Sports', '/products/sports', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](52, 'Motors', '/products/motors', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](60, 'Pages', null, null, null, true, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](61, 'All products', '/products', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](62, 'Product detail', '/products/2/PC All-in-One', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](63, 'Sign in', '/sign-in', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](64, '404 Error', '/404', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](80, 'Contact', '/contact', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](140, 'Level 1', null, null, null, true, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](141, 'Level 2', null, null, null, true, 140),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](142, 'Level 3', null, null, null, true, 141),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](143, 'Level 4', null, null, null, true, 142),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](144, 'Level 5', null, 'http://themeseason.com', null, false, 143),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](200, 'External Link', null, 'http://themeseason.com', '_blank', false, 0)
];


/***/ }),

/***/ "./src/app/theme/components/top-menu/top-menu.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/top-menu/top-menu.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-menu\">    \r\n\r\n    <a mat-button [matMenuTriggerFor]=\"currencyMenu\" #currencyMenuTrigger=\"matMenuTrigger\">\r\n        {{currency}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n    </a>\r\n    <mat-menu #currencyMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown\">\r\n        <span (mouseleave)=\"currencyMenuTrigger.closeMenu()\">\r\n            <button mat-menu-item *ngFor=\"let cur of currencies\" (click)=\"changeCurrency(cur)\">\r\n                <span>{{cur}}</span>\r\n            </button>\r\n        </span>\r\n    </mat-menu>\r\n\r\n    <a mat-button [matMenuTriggerFor]=\"langMenu\" #langMenuTrigger=\"matMenuTrigger\">\r\n        <img [src]=\"flag.image\" width=\"18\">\r\n        <span fxShow=\"false\" fxShow.gt-sm class=\"flag-menu-title\">{{flag.name}}</span>\r\n        <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n    </a>\r\n    <mat-menu #langMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown\">\r\n        <span (mouseleave)=\"langMenuTrigger.closeMenu()\">\r\n            <button mat-menu-item *ngFor=\"let flag of flags\" (click)=\"changeLang(flag)\">\r\n                <img [src]=\"flag.image\" width=\"18\"> {{flag.name}}\r\n            </button>\r\n        </span>\r\n    </mat-menu>\r\n\r\n    <span fxShow=\"false\" fxShow.gt-sm>\r\n        <a mat-button routerLink=\"/compare\">Compare  ({{appService.Data.compareList.length}})</a>\r\n        <a mat-button routerLink=\"/wishlist\">Wishlist ({{appService.Data.wishList.length}})</a>\r\n    </span>  \r\n\r\n    <a mat-button [matMenuTriggerFor]=\"accountMenu\" #accountMenuTrigger=\"matMenuTrigger\">\r\n        <mat-icon class=\"mat-icon-sm account-icon\">person</mat-icon> <span fxShow=\"false\" fxShow.gt-sm>account</span> <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n    </a>\r\n    <mat-menu #accountMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown account\">\r\n        <span (mouseleave)=\"accountMenuTrigger.closeMenu()\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info\">                   \r\n                <img src=\"assets/images/others/user.jpg\" alt=\"user-image\" width=\"50\">\r\n                <p>Emilio Verdines <br> <small>emilio_v (152<mat-icon class=\"mat-icon-xs\">star</mat-icon>)</small></p>\r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <a mat-menu-item routerLink=\"/account\"> \r\n                <mat-icon class=\"mat-icon-sm\">settings</mat-icon>\r\n                <span>Account Settings</span> \r\n            </a>\r\n            <a mat-menu-item routerLink=\"/compare\" fxHide=\"false\" fxHide.gt-sm>\r\n                <mat-icon class=\"mat-icon-sm\">compare</mat-icon>\r\n                <span>Compare ({{appService.Data.compareList.length}})</span> \r\n            </a>\r\n            <a mat-menu-item routerLink=\"/wishlist\" fxHide=\"false\" fxHide.gt-sm>\r\n                <mat-icon class=\"mat-icon-sm\">favorite</mat-icon>\r\n                <span>Wishlist ({{appService.Data.wishList.length}})</span>\r\n            </a>\r\n            <a mat-menu-item routerLink=\"/\"> \r\n                <mat-icon class=\"mat-icon-sm\">lock</mat-icon>\r\n                <span>Lock screen</span> \r\n            </a>\r\n            <a mat-menu-item routerLink=\"/\"> \r\n                <mat-icon class=\"mat-icon-sm\">help</mat-icon>\r\n                <span>Help</span> \r\n            </a>\r\n            <div class=\"divider\"></div>\r\n            <a mat-menu-item routerLink=\"/sign-in\"> \r\n                <mat-icon class=\"mat-icon-sm\">power_settings_new</mat-icon>\r\n                <span>Sign Out</span> \r\n            </a>\r\n        </span>\r\n    </mat-menu>    \r\n\r\n</div>  "

/***/ }),

/***/ "./src/app/theme/components/top-menu/top-menu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/top-menu/top-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent(appService) {
        this.appService = appService;
        this.currencies = ['USD', 'EUR'];
        this.flags = [
            { name: 'English', image: 'assets/images/flags/gb.svg' },
            { name: 'German', image: 'assets/images/flags/de.svg' },
            { name: 'French', image: 'assets/images/flags/fr.svg' },
            { name: 'Russian', image: 'assets/images/flags/ru.svg' },
            { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
        ];
    }
    TopMenuComponent.prototype.ngOnInit = function () {
        this.currency = this.currencies[0];
        this.flag = this.flags[0];
    };
    TopMenuComponent.prototype.changeCurrency = function (currency) {
        this.currency = currency;
    };
    TopMenuComponent.prototype.changeLang = function (flag) {
        this.flag = flag;
    };
    TopMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-menu',
            template: __webpack_require__(/*! ./top-menu.component.html */ "./src/app/theme/components/top-menu/top-menu.component.html")
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], TopMenuComponent);
    return TopMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/pipes/brand-search.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/pipes/brand-search.pipe.ts ***!
  \**************************************************/
/*! exports provided: BrandSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandSearchPipe", function() { return BrandSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BrandSearchPipe = /** @class */ (function () {
    function BrandSearchPipe() {
    }
    BrandSearchPipe.prototype.transform = function (brands, args) {
        var searchText = new RegExp(args, 'ig');
        if (brands) {
            return brands.filter(function (brand) {
                if (brand.name) {
                    return brand.name.search(searchText) !== -1;
                }
            });
        }
    };
    BrandSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'brandSearchPipe', pure: false })
    ], BrandSearchPipe);
    return BrandSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/filter-brands.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/theme/pipes/filter-brands.pipe.ts ***!
  \***************************************************/
/*! exports provided: FilterBrandsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBrandsPipe", function() { return FilterBrandsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterBrandsPipe = /** @class */ (function () {
    function FilterBrandsPipe() {
    }
    FilterBrandsPipe.prototype.transform = function (brands, firstLetter) {
        if (firstLetter == 'all') {
            return brands;
        }
        else {
            return brands.filter(function (brand) { return brand.name.charAt(0) == firstLetter.toLowerCase(); });
        }
    };
    FilterBrandsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterBrands'
        })
    ], FilterBrandsPipe);
    return FilterBrandsPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/filter-by-id.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/pipes/filter-by-id.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterByIdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByIdPipe", function() { return FilterByIdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByIdPipe = /** @class */ (function () {
    function FilterByIdPipe() {
    }
    FilterByIdPipe.prototype.transform = function (items, id) {
        return items.filter(function (item) { return item.id == id; })[0];
    };
    FilterByIdPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterById'
        })
    ], FilterByIdPipe);
    return FilterByIdPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/pipes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-by-id.pipe */ "./src/app/theme/pipes/filter-by-id.pipe.ts");
/* harmony import */ var _filter_brands_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-brands.pipe */ "./src/app/theme/pipes/filter-brands.pipe.ts");
/* harmony import */ var _brand_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brand-search.pipe */ "./src/app/theme/pipes/brand-search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterByIdPipe"],
                _filter_brands_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterBrandsPipe"],
                _brand_search_pipe__WEBPACK_IMPORTED_MODULE_4__["BrandSearchPipe"]
            ],
            exports: [
                _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterByIdPipe"],
                _filter_brands_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterBrandsPipe"],
                _brand_search_pipe__WEBPACK_IMPORTED_MODULE_4__["BrandSearchPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/theme/utils/app-interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/theme/utils/app-interceptor.ts ***!
  \************************************************/
/*! exports provided: AppInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInterceptor", function() { return AppInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppInterceptor = /** @class */ (function () {
    function AppInterceptor(spinner) {
        this.spinner = spinner;
    }
    AppInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.spinner.show();
        return next.handle(req).do(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.spinner.hide();
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                var started = Date.now();
                var elapsed = Date.now() - started;
                console.log("Request for " + req.urlWithParams + " failed after " + elapsed + " ms.");
                // debugger;
            }
        });
    };
    AppInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], AppInterceptor);
    return AppInterceptor;
}());



/***/ }),

/***/ "./src/app/theme/utils/custom-overlay-container.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/*! exports provided: CustomOverlayContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOverlayContainer", function() { return CustomOverlayContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomOverlayContainer = /** @class */ (function (_super) {
    __extends(CustomOverlayContainer, _super);
    function CustomOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomOverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    };
    CustomOverlayContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CustomOverlayContainer);
    return CustomOverlayContainer;
}(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]));



/***/ }),

/***/ "./src/app/theme/utils/scroll-strategy.ts":
/*!************************************************!*\
  !*** ./src/app/theme/utils/scroll-strategy.ts ***!
  \************************************************/
/*! exports provided: menuScrollStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuScrollStrategy", function() { return menuScrollStrategy; });
function menuScrollStrategy(overlay) {
    return function () { return overlay.scrollStrategies.block(); };
}


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\apps\NetsuiteEcommerce\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map