webpackJsonp([1,4],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 112;


/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Home',
        template: __webpack_require__(292),
        styles: [__webpack_require__(275)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=Home.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagement_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Models_AbstractForm__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(userService, fb, _router) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.fb = fb;
        _this._router = _router;
        _this.loginForm = _this.fb.group({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6)]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6)])
        });
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.validateForm(this.loginForm)) {
            var creds = this.mapForm(this.loginForm);
            this.userService.login(creds).subscribe(function (res) {
                console.log(res);
                if (res.success) {
                    _this._router.navigate(["/"]);
                }
                else {
                    _this.message = res.message;
                }
                //this._router.navigate(["/"])
            });
        }
    };
    return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_4_app_Models_AbstractForm__["a" /* AbstractForm */]));
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Login',
        template: __webpack_require__(293),
        styles: [__webpack_require__(276)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagement_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagement_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=Login.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractForm; });
var AbstractForm = (function () {
    function AbstractForm() {
        this.validation = {};
    }
    AbstractForm.prototype.mapForm = function (form) {
        var data = {};
        for (var key in form.controls) {
            var value = form.controls[key].value;
            data[key] = value;
        }
        return data;
    };
    AbstractForm.prototype.validateForm = function (form) {
        // console.log(this.loginForm.controls)
        this.validation = {};
        for (var key in form.controls) {
            var control = form.controls[key];
            if (control.hasError) {
                console.log(key);
                console.log(control.errors);
                for (var errorKey in control.errors) {
                    var error = control.errors[errorKey];
                    var map = {
                        'required': key + " is required",
                        'email': 'Invalid email address',
                        'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
                        'minlength': key + " has a minimum length of " + (error.requiredLength || "")
                    };
                    this.validation[key] = map[errorKey];
                    break;
                }
            }
        }
        console.log(this.validation);
        return Object.keys(this.validation).length === 0;
        //return this.validation == {}
    };
    return AbstractForm;
}());

//# sourceMappingURL=AbstractForm.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagement_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(um) {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Profile',
        template: __webpack_require__(295),
        styles: [__webpack_require__(278)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagement_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagement_service__["a" /* UserManagementService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=Profile.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagement_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.logedIn) {
            return true;
        }
        else {
            this.router.navigateByUrl('/unauthorized');
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagement_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagement_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=AuthGuard.service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnauthorizedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnauthorizedComponent = (function () {
    function UnauthorizedComponent() {
    }
    UnauthorizedComponent.prototype.ngOnInit = function () {
    };
    return UnauthorizedComponent;
}());
UnauthorizedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Unauthorized',
        template: __webpack_require__(297),
        styles: [__webpack_require__(280)]
    }),
    __metadata("design:paramtypes", [])
], UnauthorizedComponent);

//# sourceMappingURL=Unauthorized.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Models_AbstractForm__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_UserManagement_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function (_super) {
    __extends(SignupComponent, _super);
    function SignupComponent(userService, router, fb) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.router = router;
        _this.fb = fb;
        _this.signupForm = _this.fb.group({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6)]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6)])
        });
        return _this;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        if (this.validateForm(this.signupForm)) {
            var newUser = this.mapForm(this.signupForm);
            //console.log(newUser)
            this.userService.signup(newUser).subscribe(function (res) {
                if (res.success) {
                    _this.router.navigate(["/login"]);
                }
                _this.message = res.message;
            });
        }
    };
    return SignupComponent;
}(__WEBPACK_IMPORTED_MODULE_2_app_Models_AbstractForm__["a" /* AbstractForm */]));
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Signup',
        template: __webpack_require__(298),
        styles: [__webpack_require__(281)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_UserManagement_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_UserManagement_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=Signup.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Models_ContentType__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_FileManagement_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = (function () {
    function UploadComponent(fm, zone, route, router) {
        this.fm = fm;
        this.zone = zone;
        this.route = route;
        this.router = router;
        this.type = __WEBPACK_IMPORTED_MODULE_1_app_Models_ContentType__["a" /* ContentType */][__WEBPACK_IMPORTED_MODULE_1_app_Models_ContentType__["a" /* ContentType */].video];
        this.url = "";
    }
    UploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            _this.id = params['id'] || null;
        });
    };
    UploadComponent.prototype.upload = function () {
        var _this = this;
        if (this.file) {
            this.message = null;
            var meta = {
                name: this.file.name,
                type: this.file.type,
                size: this.file.size,
                contentType: __WEBPACK_IMPORTED_MODULE_1_app_Models_ContentType__["a" /* ContentType */][this.type]
            };
            console.log(this.route);
            this.fm.upload(this.file, this.id, this.thumbnail).subscribe(function (res) {
                console.log(res);
                //this.router.navigateByUrl("/profile")
                if (res._id != null) {
                    _this.router.navigate(["/profile"]);
                }
            });
        }
        else {
            this.message = "File is required";
        }
    };
    UploadComponent.prototype.fileChangeEvent = function (e) {
        this.file = e.target.files[0];
        console.log(this.file);
    };
    UploadComponent.prototype.imageChangeEvent = function (e) {
        var _this = this;
        var image = e.target.files[0];
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();
            this.thumbnail = e.target.files[0];
            reader.onload = function (event) {
                console.log(event);
                _this.url = reader.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    Object.defineProperty(UploadComponent.prototype, "hasUrl", {
        get: function () {
            return this.url == "";
        },
        enumerable: true,
        configurable: true
    });
    return UploadComponent;
}());
UploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Upload',
        template: __webpack_require__(299),
        styles: [__webpack_require__(282)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_FileManagement_service__["a" /* FileManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_FileManagement_service__["a" /* FileManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], UploadComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=Upload.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoComponent = (function () {
    function VideoComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            _this.videoId = params['id'] || null;
        });
        console.log(route);
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    return VideoComponent;
}());
VideoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Video',
        template: __webpack_require__(300),
        styles: [__webpack_require__(283)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], VideoComponent);

var _a, _b;
//# sourceMappingURL=Video.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(204);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagement_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChannelComponent = (function () {
    function ChannelComponent(um, san) {
        var _this = this;
        this.san = san;
        this.podcast = [];
        this.videos = [];
        this.channel = {};
        um.getChannel().subscribe(function (c) {
            console.log(c);
            _this.channel = c;
            _this.videos = c.videos;
            _this.podcast = c.podcast;
        });
    }
    ChannelComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ChannelComponent.prototype, "hasVideos", {
        get: function () {
            return this.videos.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    ChannelComponent.prototype.LoadImgage = function (array) {
        var blob = new Blob([array], { 'type': 'image/png' });
        var url = URL.createObjectURL(blob); //
        return this.san.bypassSecurityTrustResourceUrl(url);
    };
    return ChannelComponent;
}());
ChannelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Channel',
        template: __webpack_require__(291),
        styles: [__webpack_require__(274)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagement_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagement_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], ChannelComponent);

var _a, _b;
//# sourceMappingURL=Channel.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentType; });
var ContentType;
(function (ContentType) {
    ContentType[ContentType["podcast"] = 0] = "podcast";
    ContentType[ContentType["video"] = 1] = "video";
})(ContentType || (ContentType = {}));
//# sourceMappingURL=ContentType.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PodcastListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PodcastListComponent = (function () {
    function PodcastListComponent() {
    }
    PodcastListComponent.prototype.ngOnInit = function () {
    };
    return PodcastListComponent;
}());
PodcastListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-PodcastList',
        template: __webpack_require__(294),
        styles: [__webpack_require__(277)]
    }),
    __metadata("design:paramtypes", [])
], PodcastListComponent);

//# sourceMappingURL=PodcastList.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_FileManagement_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentVideosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecentVideosComponent = (function () {
    function RecentVideosComponent(fm) {
        this.fm = fm;
        this.recentVideos = [];
    }
    RecentVideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fm.getRecentVideos().subscribe(function (res) {
            console.log(res);
            _this.recentVideos = res;
        });
    };
    return RecentVideosComponent;
}());
RecentVideosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-RecentVideos',
        template: __webpack_require__(296),
        styles: [__webpack_require__(279)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_FileManagement_service__["a" /* FileManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_FileManagement_service__["a" /* FileManagementService */]) === "function" && _a || Object])
], RecentVideosComponent);

var _a;
//# sourceMappingURL=RecentVideos.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_UserManagement_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AppComponent.prototype, "logedIn", {
        get: function () {
            return this.auth.logedIn;
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(301),
        styles: [__webpack_require__(284)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_UserManagement_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_UserManagement_service__["a" /* UserManagementService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_Services_FileManagement_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_Services_Io_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_app_routes__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_Home_Home_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Login_Login_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_Services_UserManagement_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Signup_Signup_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__RecentVideos_RecentVideos_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__PodcastList_PodcastList_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Profile_Profile_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_Shared_Unauthorized_Unauthorized_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_Services_AuthGuard_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Upload_Upload_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Video_Video_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Channel_Channel_component__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_Home_Home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Login_Login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__Signup_Signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_13__RecentVideos_RecentVideos_component__["a" /* RecentVideosComponent */],
            __WEBPACK_IMPORTED_MODULE_14__PodcastList_PodcastList_component__["a" /* PodcastListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__Profile_Profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16_app_Shared_Unauthorized_Unauthorized_component__["a" /* UnauthorizedComponent */],
            __WEBPACK_IMPORTED_MODULE_18__Upload_Upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_19__Video_Video_component__["a" /* VideoComponent */],
            __WEBPACK_IMPORTED_MODULE_20__Channel_Channel_component__["a" /* ChannelComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8_app_app_routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6_app_Services_FileManagement_service__["a" /* FileManagementService */], __WEBPACK_IMPORTED_MODULE_11_app_Services_UserManagement_service__["a" /* UserManagementService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7_app_Services_Io_service__["a" /* IoService */], __WEBPACK_IMPORTED_MODULE_17_app_Services_AuthGuard_service__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_Home_Home_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Login_Login_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Signup_Signup_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Profile_Profile_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Services_AuthGuard_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_Shared_Unauthorized_Unauthorized_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_Upload_Upload_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_Video_Video_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_Channel_Channel_component__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });









var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_0_app_Home_Home_component__["a" /* HomeComponent */]
    },
    {
        path: "login",
        component: __WEBPACK_IMPORTED_MODULE_1_app_Login_Login_component__["a" /* LoginComponent */]
    },
    {
        path: "signup",
        component: __WEBPACK_IMPORTED_MODULE_2_app_Signup_Signup_component__["a" /* SignupComponent */]
    },
    {
        path: "profile",
        component: __WEBPACK_IMPORTED_MODULE_3_app_Profile_Profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_Services_AuthGuard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: "",
                component: __WEBPACK_IMPORTED_MODULE_8_app_Channel_Channel_component__["a" /* ChannelComponent */]
            },
            {
                path: "upload",
                component: __WEBPACK_IMPORTED_MODULE_6_app_Upload_Upload_component__["a" /* UploadComponent */]
            },
        ]
    },
    {
        path: "unauthorized",
        component: __WEBPACK_IMPORTED_MODULE_5_app_Shared_Unauthorized_Unauthorized_component__["a" /* UnauthorizedComponent */]
    },
    {
        path: "video/:id",
        component: __WEBPACK_IMPORTED_MODULE_7_app_Video_Video_component__["a" /* VideoComponent */]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".error{\n    color: red\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserManagementService = (function () {
    function UserManagementService(http) {
        this.http = http;
    }
    UserManagementService.prototype.login = function (body) {
        return this.http.post("api/user/login", body).map(function (res) {
            var data = res.json();
            if (data.token) {
                localStorage.setItem('id_token', data.token);
            }
            return data;
        });
    };
    UserManagementService.prototype.signup = function (body) {
        return this.http.post("/api/user/signup", body).map(function (res) {
            return res.json();
        });
    };
    Object.defineProperty(UserManagementService.prototype, "logedIn", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])("id_token");
        },
        enumerable: true,
        configurable: true
    });
    UserManagementService.prototype.logout = function () {
        localStorage.removeItem('id_token');
    };
    UserManagementService.prototype.getChannel = function () {
        var token = localStorage.getItem("id_token");
        return this.http.post("/api/channel/getChannel", { token: token }).map(function (res) {
            return res.json();
        });
    };
    return UserManagementService;
}());
UserManagementService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserManagementService);

var _a;
//# sourceMappingURL=UserManagement.service.js.map

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "#login-btn{\n    color:white\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li class=\"active\"><a data-toggle=\"tab\" href=\"#videos\">Videos</a></li>\n      <li><a data-toggle=\"tab\" href=\"#podcast\">Podcast</a></li>\n    </ul>\n    <div class=\"tab-content\">\n      <div id=\"videos\" class=\"tab-pane fade in active\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <a [routerLink]=\"['upload']\" [queryParams]=\"{ id: channel._id }\">upload a video.</a>\n              </div>\n              <div class=\"panel-body\">\n                <div *ngIf=\"this.hasVideos; else noVideos\">\n                  <div *ngFor=\"let v of videos\">\n                    <img [src]='v.thumb' width=\"75\" height=\"75\" /> <br>\n                    <a routerLink=\"/video/{{v.id}}\">{{v.title}}</a>\n                  </div>\n                </div>\n                <ng-template #noVideos>\n                  <p>No videos. To add content, <a [routerLink]=\"['upload']\" [queryParams]=\"{ id: channel._id }\">upload a video.</a></p>\n                </ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"podcast\" class=\"tab-pane fade\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n              </div>\n              <div class=\"panel-body\">\n                <div *ngIf=\"this.hasVideos; else noPodcast\">\n\n                </div>\n                <ng-template #noPodcast>\n                  <p>No Podcast</p>\n                </ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li class=\"active\"><a data-toggle=\"tab\" href=\"#recent\">Recent Videos</a></li>\n      <li><a data-toggle=\"tab\" href=\"#menu1\">Timeline</a></li>\n      <li><a data-toggle=\"tab\" href=\"#menu2\">Podcast</a></li>\n    </ul>\n    <div class=\"tab-content\">\n      <div id=\"recent\" class=\"tab-pane fade in active\">\n        <app-RecentVideos></app-RecentVideos>\n      </div>\n      <div id=\"menu1\" class=\"tab-pane fade\">\n        <h3>Menu 1</h3>\n        <p>Some content in menu 1.</p>\n      </div>\n      <div id=\"menu2\" class=\"tab-pane fade\">\n        <app-PodcastList></app-PodcastList>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 293:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-offset-4 col-md-4\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Login</h3>\n        </div>\n        <div class=\"panel-body\">\n          {{message}}\n          <div class=\"form-group\">\n            <input type=\"text\" name=\"username\" placeholder=\"Username\" class=\"form-control\" formControlName=\"username\">\n            <div class=\"error\">{{validation[\"username\"]}}</div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" formControlName=\"password\">\n            <div class=\"error\">{{validation[\"password\"]}}</div>\n          </div>\n          <br>\n          <a class=\"\" routerLink=\"/signup\">Create Account</a>\n        </div>\n        <div class=\"panel-footer text-center\">\n          <button class=\"btn btn-primary\" type=\"submit\">Log in</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

module.exports = "<p>\n  PodcastList works!\n</p>"

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\n    <img src=\"assets/avi.png\" width=\"75\" height=\"75\">\n  </div>\n\n  <div class=\"col-xs-9 col-sm-9 col-md-9 col-lg-9\" style=\"background:blue; height:auto\">\n    BANNER HERE\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n    <ul>\n      <li>stuff</li>\n      <li>stuff</li>\n      <li>stuff</li>\n      <li>stuff</li>\n      <li>stuff</li>\n      <li>stuff</li>\n      <li>stuff</li>\n      <li>stuff</li>\n    </ul>\n\n  </div>\n\n  <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>"

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

module.exports = "<p>\n  RecentVideos works!\n</p>\n<div>\n  <div *ngFor=\"let v of recentVideos\">\n    <a routerLink=\"/video/{{v._id}}\">{{v.title}}</a>\n  </div>\n</div>"

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

module.exports = "<p>\n  You do not have permision to view this information\n  <a href=\"/\">Home</a>\n</p>"

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-offset-4 col-md-4\">\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Signup</h3>\n        </div>\n        <div class=\"panel-body\">\n          {{message}}\n          <div class=\"form-group\">\n            <input type=\"text\" name=\"username\" placeholder=\"Username\" class=\"form-control\" formControlName=\"username\">\n            <div class=\"error\">{{validation[\"username\"]}}</div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" name=\"email\" placeholder=\"Email\" class=\"form-control\" formControlName=\"email\">\n            <div class=\"error\">{{validation[\"email\"]}}</div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" formControlName=\"password\">\n            <div class=\"error\">{{validation[\"password\"]}}</div>\n          </div>\n          <br>\n          <a class=\"\" href=\"/signup\">Create Account</a>\n        </div>\n        <div class=\"panel-footer text-center\">\n          <button class=\"btn btn-primary\" type=\"submit\">Log in</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n\n      <div class=\"row\">\n        {{message}}\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n          <div class=\"form-group\">\n            <img [src]=\"url\" [hidden]=\"!hasUrl\" class=\"img-responsive\" width=\"150\" height=\"150\">\n            <label class=\"btn btn-primary\" for=\"thumbnail\">\n              <input id=\"thumbnail\" accept=\"image/png,image/jpeg\" (change)=\"imageChangeEvent($event)\" type=\"file\" style=\"display:none;\">\n              Choose Image\n            </label>\n\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n          <div class=\"form-group\">\n            <input class=\"form-control\" type=\"file\" accept=\"video/mp4 ,video/quicktime,audio/mpeg3\" (change)=\"fileChangeEvent($event)\"\n            />\n          </div>\n          <form action=\"\">\n            <input type=\"radio\" [(ngModel)]=\"type\" name=\"type\" value=\"podcast\">Podcast<br>\n            <input type=\"radio\" [(ngModel)]=\"type\" name=\"type\" value=\"video\">Video\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel-footer text-center\">\n      <button class=\"btn btn-primary \" (click)=\"upload()\">Upload</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports = "<p>\n  Video works!\n</p>\n<video width=\"400\" controls>\n  <source src=\"/api/file/watch/{{videoId}}\" type=\"video/mp4\">\n\n</video>"

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\">Brand</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n      <form class=\"navbar-form navbar-left \">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Search</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n\n        <li *ngIf=\"!logedIn; else elseBlock\">\n          <div class=\"form group\">\n            <a id=\"login-btn\" class=\"btn btn-sm btn-primary \" routerLink=\"/login\" routerLinkActive=\"active\">Sign In</a>\n          </div>\n        </li>\n        <ng-template #elseBlock>\n          <li class=\"dropdown\">\n            <img height=\"42\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" width=\"42\" src=\"/assets/avi.png\" />\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"./profile\">Profile</a></li>\n              <li><a (click)=\"this.auth.logout()\">Sign Out</a></li>\n              <li><a href=\"#\">Something else here</a></li>\n            </ul>\n          </li>\n        </ng-template>\n\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n<div class=\"container\">\n\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_Io_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagementService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileManagementService = (function () {
    function FileManagementService(http) {
        this.http = http;
    }
    FileManagementService.prototype.upload = function (file, channel_id, thumbnail) {
        var fd = new FormData();
        fd.append("file", file);
        fd.append("channel_id", channel_id);
        fd.append("file", thumbnail);
        return this.http.post("api/file/upload", fd).map(function (res) {
            return res.json();
        });
    };
    FileManagementService.prototype.upold = function (fileToUpload, meta) {
        meta.token = localStorage.getItem("id_token");
        var stream = __WEBPACK_IMPORTED_MODULE_3_app_Services_Io_service__["b" /* ss */].createStream();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_app_Services_Io_service__["c" /* ss_emit */])('upload', stream, meta);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_app_Services_Io_service__["d" /* on */])("attached").subscribe(function () {
            console.log("attached");
            __WEBPACK_IMPORTED_MODULE_3_app_Services_Io_service__["b" /* ss */].createBlobReadStream(fileToUpload).pipe(stream);
        });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_app_Services_Io_service__["d" /* on */])("finish");
    };
    FileManagementService.prototype.getRecentVideos = function () {
        return this.http.get("/api/file/videos/recent").map(function (res) {
            return res.json();
        });
    };
    FileManagementService.prototype.download = function (id) {
        //let params = new URLSearchParams();
        //params.set('id', id);
        return this.http.get("/api/download/" + id)
            .map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    return FileManagementService;
}());
FileManagementService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], FileManagementService);

var _a;
//# sourceMappingURL=FileManagement.service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_stream__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_stream___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_stream__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* unused harmony export io */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ss; });
/* harmony export (immutable) */ __webpack_exports__["d"] = on;
/* unused harmony export emit */
/* harmony export (immutable) */ __webpack_exports__["c"] = ss_emit;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]("/");
var zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"](true);
var io = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__;
var ss = __WEBPACK_IMPORTED_MODULE_2_socket_io_stream__;
function on(evt) {
    var observable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"](function (observer) {
        socket.on(evt, function (data) {
            observer.next(data);
        });
        return function () {
            // this.socket.disconnect();
        };
    });
    return observable;
    //let subj = new Subject;
    //use ngZone?
    // socket.on(evt, (data) => {
    //   subj.next(data);
    // });
    //return subj;
}
function emit(evt, data) {
    socket.emit(evt, data);
}
function ss_emit(evt, stream, data) {
    ss(socket).emit(evt, stream, data);
}
var IoService = (function () {
    function IoService(http) {
        this.http = http;
        // this.socket= io.connect("/")
    }
    IoService.prototype.uploadFile = function (file, contentType) {
        var meta = {
            name: file.name,
            size: file.size,
            type: file.type,
            contentType: contentType
        };
        var fr = new FileReader();
        var uint8ArrayNew = null;
        var arrayBufferNew = null;
        //fr.onload = function (progressEvent) {
        //arrayBufferNew = this.result;
        //uint8ArrayNew = new Uint8Array(arrayBufferNew);
        //console.log(uint8ArrayNew);
        //}
        //fr.readAsArrayBuffer(file);
        //arrayBufferNew = fr.result;
        uint8ArrayNew = new Uint8Array(arrayBufferNew);
        console.log(uint8ArrayNew);
        return this.http.get("/api/fm/getFiles", uint8ArrayNew).map(function (data) {
            return data;
        });
        //  var stream = ss.createStream();
        // ss(socket).emit('upload', stream, meta);
        //ss.createBlobReadStream(file).pipe(stream);
        // return null;
    };
    IoService.prototype.listFiles = function () {
        console.log("files");
        return this.http.get("/api/getFiles")
            .map(function (res) { return res.json(); });
    };
    return IoService;
}());
IoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _a || Object])
], IoService);

var _a;
//# sourceMappingURL=Io.service.js.map

/***/ })

},[587]);
//# sourceMappingURL=main.bundle.js.map