(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <app-tasks></app-tasks>\n\n</div>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _tasks_tasks_add_tasks_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks-add/tasks-add.component */ "./src/app/tasks/tasks-add/tasks-add.component.ts");
/* harmony import */ var _tasks_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/tasks-list/tasks-list.component */ "./src/app/tasks/tasks-list/tasks-list.component.ts");
/* harmony import */ var _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/tasks.service */ "./src/app/tasks/tasks.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tasks_tasks_find_tasks_find_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasks/tasks-find/tasks-find.component */ "./src/app/tasks/tasks-find/tasks-find.component.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var _tasks_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tasks/countdown/countdown.component */ "./src/app/tasks/countdown/countdown.component.ts");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-push */ "./node_modules/ng-push/ng-push.umd.js");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng_push__WEBPACK_IMPORTED_MODULE_13__);














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"],
                _tasks_tasks_add_tasks_add_component__WEBPACK_IMPORTED_MODULE_5__["TasksAddComponent"],
                _tasks_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_6__["TasksListComponent"],
                _tasks_tasks_find_tasks_find_component__WEBPACK_IMPORTED_MODULE_10__["TasksFindComponent"],
                _tasks_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_12__["CountdownComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_11__["CountdownModule"],
                ng_push__WEBPACK_IMPORTED_MODULE_13__["PushNotificationsModule"]
            ],
            providers: [_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/tasks/countdown/countdown.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tasks/countdown/countdown.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL2NvdW50ZG93bi9jb3VudGRvd24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/tasks/countdown/countdown.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tasks/countdown/countdown.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 d-flex justify-content-center\">\n    <countdown [config]=\"{leftTime: 1500}\" #cd1 (event)=\"onEvent($event)\" (finished)=\"onFinished()\">$!m!:$!s!</countdown>\n  </div>\n  <div class=\"col-md-12 d-flex justify-content-center\">\n    <button (click)=\"cd1.pause()\" class=\"btn btn-link btn-sm\">pause</button>\n    <button (click)=\"cd1.resume()\" class=\"btn btn-link btn-sm\">resume</button>\n    <button (click)=\"cd1.stop()\" class=\"btn btn-link btn-sm\">stop</button>\n    <button (click)=\"cd1.restart()\" class=\"btn btn-link btn-sm\">restart</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tasks/countdown/countdown.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tasks/countdown/countdown.component.ts ***!
  \********************************************************/
/*! exports provided: CountdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownComponent", function() { return CountdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-push */ "./node_modules/ng-push/ng-push.umd.js");
/* harmony import */ var ng_push__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_push__WEBPACK_IMPORTED_MODULE_2__);



var CountdownComponent = /** @class */ (function () {
    function CountdownComponent(_pushNotifications) {
        this._pushNotifications = _pushNotifications;
        this._pushNotifications.requestPermission();
    }
    CountdownComponent.prototype.ngOnInit = function () {
    };
    CountdownComponent.prototype.onFinished = function () {
        console.log("HOla amigo");
        var options = {
            body: "Tomate un descanso amigo!!!"
        };
        this._pushNotifications.create('Iron Man', options).subscribe(//creates a notification
        function (//creates a notification
        res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    CountdownComponent.prototype.onEvent = function ($event) {
    };
    CountdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-countdown',
            template: __webpack_require__(/*! ./countdown.component.html */ "./src/app/tasks/countdown/countdown.component.html"),
            styles: [__webpack_require__(/*! ./countdown.component.css */ "./src/app/tasks/countdown/countdown.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_push__WEBPACK_IMPORTED_MODULE_2__["PushNotificationsService"]])
    ], CountdownComponent);
    return CountdownComponent;
}());



/***/ }),

/***/ "./src/app/tasks/task.model.ts":
/*!*************************************!*\
  !*** ./src/app/tasks/task.model.ts ***!
  \*************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(id, name, completed, dueDate, inProcess) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.dueDate = dueDate;
        this.inProcess = inProcess;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/tasks/tasks-add/tasks-add.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tasks/tasks-add/tasks-add.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLWFkZC90YXNrcy1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/tasks/tasks-add/tasks-add.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tasks/tasks-add/tasks-add.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <input type=\"text\"\n           (keyup.enter)=\"onTaskAdd($event)\"\n           class=\"form-control\"\n           placeholder=\"Add New Task\"\n           [(ngModel)]=\"taskNewValue\"\n    >\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/tasks/tasks-add/tasks-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tasks/tasks-add/tasks-add.component.ts ***!
  \********************************************************/
/*! exports provided: TasksAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksAddComponent", function() { return TasksAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks.service */ "./src/app/tasks/tasks.service.ts");
/* harmony import */ var _task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task.model */ "./src/app/tasks/task.model.ts");




var TasksAddComponent = /** @class */ (function () {
    function TasksAddComponent(taskService) {
        this.taskService = taskService;
        this.taskNewValue = null;
    }
    TasksAddComponent.prototype.ngOnInit = function () {
    };
    TasksAddComponent.prototype.onTaskAdd = function (event) {
        var _this = this;
        var task = new _task_model__WEBPACK_IMPORTED_MODULE_3__["Task"](null, event.target.value, false, this.getTodayAsString(), false);
        this.taskService.addTask(task).subscribe(function (newTask) {
            //clear new task input text
            _this.taskNewValue = ' ';
            _this.taskService.onTaskAdded.emit(newTask);
        });
    };
    TasksAddComponent.prototype.getTodayAsString = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return dd + '/' + mm + '/' + yyyy;
    };
    TasksAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks-add',
            template: __webpack_require__(/*! ./tasks-add.component.html */ "./src/app/tasks/tasks-add/tasks-add.component.html"),
            styles: [__webpack_require__(/*! ./tasks-add.component.css */ "./src/app/tasks/tasks-add/tasks-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]])
    ], TasksAddComponent);
    return TasksAddComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks-find/tasks-find.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tasks/tasks-find/tasks-find.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLWZpbmQvdGFza3MtZmluZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasks/tasks-find/tasks-find.component.html":
/*!************************************************************!*\
  !*** ./src/app/tasks/tasks-find/tasks-find.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-group\">\n    <input type=\"text\"\n           (keyup)=\"onTaskFind($event)\"\n           class=\"form-control\"\n           placeholder=\"Find Task\"\n    >\n</div>\n\n"

/***/ }),

/***/ "./src/app/tasks/tasks-find/tasks-find.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tasks/tasks-find/tasks-find.component.ts ***!
  \**********************************************************/
/*! exports provided: TasksFindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksFindComponent", function() { return TasksFindComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks.service */ "./src/app/tasks/tasks.service.ts");



var TasksFindComponent = /** @class */ (function () {
    function TasksFindComponent(taskService) {
        this.taskService = taskService;
    }
    TasksFindComponent.prototype.ngOnInit = function () {
    };
    TasksFindComponent.prototype.onTaskFind = function (event) {
        var _this = this;
        this.taskService.findTask(event.target.value).subscribe(function (tasksResult) {
            _this.taskService.onTaskFound.emit(tasksResult);
        });
    };
    TasksFindComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks-find',
            template: __webpack_require__(/*! ./tasks-find.component.html */ "./src/app/tasks/tasks-find/tasks-find.component.html"),
            styles: [__webpack_require__(/*! ./tasks-find.component.css */ "./src/app/tasks/tasks-find/tasks-find.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]])
    ], TasksFindComponent);
    return TasksFindComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks-list/tasks-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tasks/tasks-list/tasks-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".completed {\n    text-decoration: line-through;\n}\n.name {\n    margin-left: 5px;\n}\n.date-badge{\n  margin-top: 3px;\n  height: 21px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MtbGlzdC90YXNrcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLWxpc3QvdGFza3MtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBsZXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4ubmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5kYXRlLWJhZGdle1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGhlaWdodDogMjFweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/tasks/tasks-list/tasks-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/tasks/tasks-list/tasks-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n    <li *ngFor=\"let task of tasks\" class=\"list-group-item\">\n        <div class=\"task-checkbox container\">\n          <div class=\"row\">\n            <!--<div class=\"col-md-12\">\n              <input type=\"checkbox\"\n                     (click)=\"onTaskChange($event, task)\"\n                     [checked]=\"task.completed\"/>\n            </div>-->\n            <div class=\"col-sm-12\">\n              <span [ngClass]=\"task.completed ? 'name completed' : 'name'\">{{task.name}}</span>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 d-flex flex-row-reverse\">\n\n              <div *ngIf=\"task.inProcess && !task.completed\" class=\"p-2\">\n                <span class=\"badge date-badge badge-success \">In process</span>\n              </div>\n              <div *ngIf=\"!task.inProcess && !task.completed\" class=\"p-2\">\n                <span class=\" badge date-badge badge-secondary \">Waiting</span>\n              </div>\n              <div class=\"p-2\">\n                <span class=\"badge date-badge {{getCompletedLabel(task)}}\">{{task.dueDate}}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row mt-1\">\n            <div class=\"col-md-12 d-flex flex-row-reverse\">\n              <div class=\"p-2\">\n                <button class=\"btn btn-sm badge badge-warning \" (click)=\"onTaskDelete($event, task)\">Delete</button>\n              </div>\n              <div *ngIf=\"task.inProcess\" class=\"p-2\">\n                <button class=\"btn btn-sm  badge badge-warning\" (click)=\"onTaskStop($event, task)\">Stop</button>\n              </div>\n              <div *ngIf=\"!task.inProcess\" class=\"p-2\">\n                <button class=\"btn btn-sm  badge badge-warning\" (click)=\"onTaskStart($event, task)\">Start</button>\n              </div>\n              <div *ngIf=\"task.completed\" class=\"p-2\">\n                <button class=\"btn btn-sm badge {{getCompletedLabel(task)}}\" (click)=\"onTaskRestart($event, task)\" >Restart</button>\n              </div>\n              <div *ngIf=\"!task.completed\" class=\"p-2\">\n                <button class=\"btn btn-sm badge {{getCompletedLabel(task)}}\" (click)=\"onTaskCompleted($event, task)\" >Completed</button>\n              </div>\n            </div>\n          </div>\n        </div>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/tasks/tasks-list/tasks-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tasks/tasks-list/tasks-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TasksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksListComponent", function() { return TasksListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks.service */ "./src/app/tasks/tasks.service.ts");



var TasksListComponent = /** @class */ (function () {
    function TasksListComponent(taskService) {
        this.taskService = taskService;
        this.tasks = [];
    }
    TasksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (task) { return _this.tasks = task; }, function (error) { return console.log(error); });
        this.taskService.onTaskAdded.subscribe(function (newTask) { return _this.tasks.push(newTask); });
        this.taskService.onTaskFound.subscribe(function (taskResult) {
            _this.tasks = [];
            taskResult.forEach(function (item) { _this.tasks.push(item); });
        });
    };
    TasksListComponent.prototype.getCompletedLabel = function (task) {
        return task.completed ? "badge-success" : "badge-primary";
    };
    TasksListComponent.prototype.onTaskChange = function (event, task) {
        task.completed = event.target.checked;
        this.taskService.saveTasks(task).subscribe();
    };
    TasksListComponent.prototype.onTaskDelete = function (event, task) {
        var _this = this;
        this.taskService.deleteTask(task).subscribe(function (res) {
            _this.tasks = _this.tasks.filter(function (obj) { return obj !== task; });
        });
    };
    TasksListComponent.prototype.onTaskStop = function (event, task) {
        task.inProcess = false;
        this.taskService.saveTasks(task).subscribe();
    };
    TasksListComponent.prototype.onTaskStart = function (event, task) {
        task.inProcess = true;
        this.taskService.saveTasks(task).subscribe();
    };
    TasksListComponent.prototype.onTaskRestart = function (event, task) {
        task.completed = false;
        this.taskService.saveTasks(task).subscribe();
    };
    TasksListComponent.prototype.onTaskCompleted = function (event, task) {
        task.completed = true;
        this.taskService.saveTasks(task).subscribe();
    };
    TasksListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks-list',
            template: __webpack_require__(/*! ./tasks-list.component.html */ "./src/app/tasks/tasks-list/tasks-list.component.html"),
            styles: [__webpack_require__(/*! ./tasks-list.component.css */ "./src/app/tasks/tasks-list/tasks-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]])
    ], TasksListComponent);
    return TasksListComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n    color: royalblue;\n}\n\n#tasksPanel {\n    margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgY29sb3I6IHJveWFsYmx1ZTtcbn1cblxuI3Rhc2tzUGFuZWwge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-2\">&nbsp;</div>\n    <div class=\"col-md-8\">\n        <div id=\"tasksPanel\" class=\"card\">\n            <div class=\"card-header\">\n                <h3 class=\"card-title d-flex justify-content-center\">Simple Time Task</h3>\n            </div>\n            <div class=\"card-header\" >\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <app-countdown></app-countdown>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <app-tasks-find></app-tasks-find>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <app-tasks-add></app-tasks-add>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <app-tasks-list></app-tasks-list>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"col-md-2\">&nbsp;</div>\n</div>\n"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.service.ts":
/*!****************************************!*\
  !*** ./src/app/tasks/tasks.service.ts ***!
  \****************************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TasksService = /** @class */ (function () {
    function TasksService(httpClient) {
        this.httpClient = httpClient;
        this.onTaskAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onTaskFound = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    TasksService.prototype.getTasks = function () {
        return this.httpClient.get("/api/tasks");
    };
    TasksService.prototype.saveTasks = function (task) {
        return this.httpClient.post("/api/tasks/save", task);
    };
    TasksService.prototype.addTask = function (task) {
        return this.httpClient.post("/api/tasks/save", task);
    };
    TasksService.prototype.findTask = function (name) {
        return this.httpClient.get("/api/tasks/find?name=" + name);
    };
    TasksService.prototype.deleteTask = function (task) {
        return this.httpClient.delete("/api/tasks/" + task.id);
    };
    TasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TasksService);
    return TasksService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paco/trabajo/Udemy/AngularAndJava/taskapp/src/main/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map