"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var ExperiencesComponent = /** @class */ (function () {
    function ExperiencesComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
    }
    ExperiencesComponent.prototype.naviguerVers = function (page) {
        this.routerExtensions.navigate([page], {
            transition: {
                name: "flip"
            }
        });
    };
    ExperiencesComponent = __decorate([
        core_1.Component({
            selector: "experiences",
            moduleId: module.id,
            templateUrl: './experiences.component.html',
            styleUrls: ['./css/experiences.css',],
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], ExperiencesComponent);
    return ExperiencesComponent;
}());
exports.ExperiencesComponent = ExperiencesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZXJpZW5jZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZXJpZW5jZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxzREFBK0Q7QUFZL0Q7SUFFRSw4QkFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUU5RSxDQUFDO0lBRU0sMkNBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckMsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBWlUsb0JBQW9CO1FBUGhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTtTQUN0QyxDQUFDO3lDQUk0QixlQUFNLEVBQTRCLHlCQUFnQjtPQUZuRSxvQkFBb0IsQ0FhaEM7SUFBRCwyQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZXhwZXJpZW5jZXNcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGVyaWVuY2VzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3NzL2V4cGVyaWVuY2VzLmNzcycsXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBFeHBlcmllbmNlc0NvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpe1xuXG4gIH1cblxuICBwdWJsaWMgbmF2aWd1ZXJWZXJzKHBhZ2Upe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbcGFnZV0sIHtcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgbmFtZTogXCJmbGlwXCJcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19