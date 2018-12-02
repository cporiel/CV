"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var LoisirsComponent = /** @class */ (function () {
    function LoisirsComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
    }
    LoisirsComponent.prototype.naviguerVers = function (page) {
        this.routerExtensions.navigate([page], {
            transition: {
                name: "flip"
            }
        });
    };
    LoisirsComponent = __decorate([
        core_1.Component({
            selector: "loisirs",
            moduleId: module.id,
            templateUrl: './loisirs.component.html',
            styleUrls: ['./css/loisirs.css',],
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], LoisirsComponent);
    return LoisirsComponent;
}());
exports.LoisirsComponent = LoisirsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9pc2lycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2lzaXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSwwQ0FBeUM7QUFJekMsc0RBQStEO0FBVy9EO0lBQ0UsMEJBQW9CLE1BQWMsRUFBVSxnQkFBa0M7UUFBMUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDOUUsQ0FBQztJQUVNLHVDQUFZLEdBQW5CLFVBQW9CLElBQUk7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JDLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUsTUFBTTthQUNiO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVZVLGdCQUFnQjtRQVI1QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUU7U0FDbEMsQ0FBQzt5Q0FJNEIsZUFBTSxFQUE0Qix5QkFBZ0I7T0FEbkUsZ0JBQWdCLENBVzVCO0lBQUQsdUJBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9jb2xvcidcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldydcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxvaXNpcnNcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvaXNpcnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jc3MvbG9pc2lycy5jc3MnLF0sXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBMb2lzaXJzQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpe1xuICB9XG5cbiAgcHVibGljIG5hdmlndWVyVmVycyhwYWdlKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3BhZ2VdLCB7XG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6IFwiZmxpcFwiXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==