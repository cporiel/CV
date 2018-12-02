"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.compteur = 0;
    }
    ContactComponent.prototype.naviguerVers = function (page) {
        this.routerExtensions.navigate([page], {
            transition: {
                name: "flip"
            }
        });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: "contact",
            moduleId: module.id,
            templateUrl: './contact.component.html',
            styleUrls: ['./css/contact.css'],
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFFekMsc0RBQStEO0FBVS9EO0lBTUUsMEJBQW9CLE1BQWMsRUFBVSxnQkFBa0M7UUFBMUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGdEUsYUFBUSxHQUFDLENBQUMsQ0FBQztJQUluQixDQUFDO0lBRU0sdUNBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckMsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEJVLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQzt5Q0FRNEIsZUFBTSxFQUE0Qix5QkFBZ0I7T0FObkUsZ0JBQWdCLENBaUI1QjtJQUFELHVCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgZW1haWwgZnJvbSBcIm5hdGl2ZXNjcmlwdC1lbWFpbFwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY29udGFjdFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nzcy9jb250YWN0LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnR7XG4gIHB1YmxpYyBub207XG4gIHB1YmxpYyBwcmVub207XG4gIHByaXZhdGUgbWVzc2FnZTtcbiAgcHJpdmF0ZSBjb21wdGV1cj0wO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyl7XG5cbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ3VlclZlcnMocGFnZSl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtwYWdlXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiBcImZsaXBcIlxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=