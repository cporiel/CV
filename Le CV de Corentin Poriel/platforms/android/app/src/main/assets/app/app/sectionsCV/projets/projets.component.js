"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var ProjetsComponent = /** @class */ (function () {
    function ProjetsComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
    }
    ProjetsComponent.prototype.naviguerVers = function (page) {
        this.routerExtensions.navigate([page], {
            transition: {
                name: "flip"
            }
        });
    };
    ProjetsComponent = __decorate([
        core_1.Component({
            selector: "projets",
            moduleId: module.id,
            templateUrl: './projets.component.html',
            styleUrls: ['./css/projets.css',],
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], ProjetsComponent);
    return ProjetsComponent;
}());
exports.ProjetsComponent = ProjetsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9qZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsc0RBQStEO0FBWS9EO0lBRUUsMEJBQW9CLE1BQWMsRUFBVSxnQkFBa0M7UUFBMUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFOUUsQ0FBQztJQUVNLHVDQUFZLEdBQW5CLFVBQW9CLElBQUk7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9CLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNmO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVpRLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUU7U0FDbEMsQ0FBQzt5Q0FJNEIsZUFBTSxFQUE0Qix5QkFBZ0I7T0FGbkUsZ0JBQWdCLENBYTVCO0lBQUQsdUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInByb2pldHNcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2pldHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jc3MvcHJvamV0cy5jc3MnLF0sXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvamV0c0NvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpe1xuXG4gIH1cblxuICBwdWJsaWMgbmF2aWd1ZXJWZXJzKHBhZ2Upe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbcGFnZV0sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZsaXBcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=