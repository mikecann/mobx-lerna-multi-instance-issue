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
import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
var MySharedComponent = /** @class */ (function (_super) {
    __extends(MySharedComponent, _super);
    function MySharedComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = 0;
        _this.handleClick = function () { return _this.count++; };
        return _this;
    }
    MySharedComponent.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("div", null,
                "Hello, this is a shared component, passed count is: ",
                this.props.count),
            React.createElement("div", null,
                "my count is ",
                React.createElement("button", { onClick: this.handleClick },
                    "Click Me (",
                    this.count,
                    ")")));
    };
    __decorate([
        observable
    ], MySharedComponent.prototype, "count", void 0);
    __decorate([
        action
    ], MySharedComponent.prototype, "handleClick", void 0);
    MySharedComponent = __decorate([
        observer
    ], MySharedComponent);
    return MySharedComponent;
}(React.Component));
export { MySharedComponent };
//# sourceMappingURL=MySharedComponent.js.map