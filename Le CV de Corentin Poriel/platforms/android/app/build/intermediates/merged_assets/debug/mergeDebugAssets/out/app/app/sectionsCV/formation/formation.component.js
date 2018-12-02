"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var FormationComponent = /** @class */ (function () {
    function FormationComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
    }
    FormationComponent.prototype.naviguerVers = function (page) {
        this.routerExtensions.navigate([page], {
            transition: {
                name: "flip"
            }
        });
    };
    FormationComponent = __decorate([
        core_1.Component({
            selector: "formation",
            moduleId: module.id,
            templateUrl: './formation.component.html',
            styleUrls: ['./css/formation.css'],
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], FormationComponent);
    return FormationComponent;
}());
exports.FormationComponent = FormationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLHNEQUErRDtBQVkvRDtJQUVFLDRCQUFvQixNQUFjLEVBQVUsZ0JBQWtDO1FBQTFELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRTlFLENBQUM7SUFFTSx5Q0FBWSxHQUFuQixVQUFvQixJQUFJO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQyxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFaVSxrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUM7eUNBSTRCLGVBQU0sRUFBNEIseUJBQWdCO09BRm5FLGtCQUFrQixDQWE5QjtJQUFELHlCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJmb3JtYXRpb25cIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nzcy9mb3JtYXRpb24uY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyl7XG5cbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ3VlclZlcnMocGFnZSl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtwYWdlXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiBcImZsaXBcIlxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=