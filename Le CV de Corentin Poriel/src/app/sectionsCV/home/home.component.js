"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var animation_1 = require("tns-core-modules/ui/animation");
var router_2 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, page, routerExtensions) {
        this.router = router;
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.menuOuvert = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var menuContainer = this.menuContainer.nativeElement;
        var infosContainer = this.infosContainer.nativeElement;
        menuContainer.translateX = -100;
        infosContainer.translateX = -45;
    };
    HomeComponent.prototype.afficherMenuGauche = function () {
        var menuContainer = this.menuContainer.nativeElement;
        var photoContainer = this.photoContainer.nativeElement;
        var infosContainer = this.infosContainer.nativeElement;
        if (this.menuOuvert) {
            var anims = new Array();
            anims.push({ target: photoContainer, scale: { x: 0.75, y: 0.75 }, duration: 500 });
            anims.push({ target: menuContainer, translate: { x: 0, y: 0 }, duration: 500 });
            anims.push({ target: infosContainer, translate: { x: 5, y: 0 }, duration: 500 });
            var playSequentially = false;
            var animationSet = new animation_1.Animation(anims, false);
            animationSet.play();
        }
        else {
            var anims = new Array();
            anims.push({ target: photoContainer, scale: { x: 1, y: 1 }, duration: 500 });
            anims.push({ target: menuContainer, translate: { x: -100, y: 0 }, duration: 500 });
            anims.push({ target: infosContainer, translate: { x: -45, y: 0 }, duration: 500 });
            var playSequentially = false;
            var animationSet = new animation_1.Animation(anims, false);
            animationSet.play();
        }
        this.menuOuvert = !this.menuOuvert;
    };
    HomeComponent.prototype.naviguerVers = function (page) {
        this.routerExtensions.navigate([page], {
            transition: {
                name: "flip"
            }
        });
    };
    __decorate([
        core_1.ViewChild('menuContainer'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "menuContainer", void 0);
    __decorate([
        core_1.ViewChild('photoContainer'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "photoContainer", void 0);
    __decorate([
        core_1.ViewChild('infosContainer'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "infosContainer", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./css/home.css',],
        }),
        __metadata("design:paramtypes", [router_2.Router, page_1.Page, router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFFL0QsMkRBQW1GO0FBR25GLDBDQUF5QztBQUN6QyxpREFBZ0Q7QUFhaEQ7SUFNRSx1QkFBb0IsTUFBYyxFQUFVLElBQVUsRUFBVyxnQkFBa0M7UUFBL0UsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTDNGLGVBQVUsR0FBQyxJQUFJLENBQUM7SUFPeEIsQ0FBQztJQUVNLGdDQUFRLEdBQWY7UUFDRSxJQUFNLGFBQWEsR0FBUyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM3RCxJQUFNLGNBQWMsR0FBUyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztRQUMvRCxhQUFhLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2hDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLDBDQUFrQixHQUF6QjtRQUNFLElBQU0sYUFBYSxHQUFTLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzdELElBQU0sY0FBYyxHQUFTLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQy9ELElBQU0sY0FBYyxHQUFTLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBRS9ELElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBQztZQUNqQixJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ25GLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2hGLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2pGLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksWUFBWSxHQUFHLElBQUkscUJBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDL0MsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ3BCO2FBQUk7WUFDSCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDbkYsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNuRixJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLFlBQVksR0FBRyxJQUFJLHFCQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9DLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUNwQjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3BDLENBQUM7SUFFTSxvQ0FBWSxHQUFuQixVQUFvQixJQUFJO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQyxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUE5QzJCO1FBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDO2tDQUFnQixpQkFBVTt3REFBQztJQUN6QjtRQUE1QixnQkFBUyxDQUFDLGdCQUFnQixDQUFDO2tDQUFpQixpQkFBVTt5REFBQztJQUMzQjtRQUE1QixnQkFBUyxDQUFDLGdCQUFnQixDQUFDO2tDQUFpQixpQkFBVTt5REFBQztJQUo3QyxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtTQUMvQixDQUFDO3lDQVE0QixlQUFNLEVBQWdCLFdBQUksRUFBNkIseUJBQWdCO09BTnhGLGFBQWEsQ0FrRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5pbXBvcnQge0FuaW1hdGlvbiwgQW5pbWF0aW9uRGVmaW5pdGlvbiwgUGFpcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9jb2xvcidcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldydcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJob21lXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3NzL2hvbWUuY3NzJyxdLFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHByaXZhdGUgbWVudU91dmVydD10cnVlO1xuICBAVmlld0NoaWxkKCdtZW51Q29udGFpbmVyJykgbWVudUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncGhvdG9Db250YWluZXInKSBwaG90b0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaW5mb3NDb250YWluZXInKSBpbmZvc0NvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UsICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpe1xuXG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKXtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gPFZpZXc+dGhpcy5tZW51Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaW5mb3NDb250YWluZXIgPSA8Vmlldz50aGlzLmluZm9zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbWVudUNvbnRhaW5lci50cmFuc2xhdGVYID0gLTEwMDtcbiAgICBpbmZvc0NvbnRhaW5lci50cmFuc2xhdGVYID0gLTQ1O1xuICB9XG5cbiAgcHVibGljIGFmZmljaGVyTWVudUdhdWNoZSgpe1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSA8Vmlldz50aGlzLm1lbnVDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBwaG90b0NvbnRhaW5lciA9IDxWaWV3PnRoaXMucGhvdG9Db250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpbmZvc0NvbnRhaW5lciA9IDxWaWV3PnRoaXMuaW5mb3NDb250YWluZXIubmF0aXZlRWxlbWVudDtcblxuICAgIGlmKHRoaXMubWVudU91dmVydCl7XG4gICAgICB2YXIgYW5pbXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgIGFuaW1zLnB1c2goeyB0YXJnZXQ6IHBob3RvQ29udGFpbmVyLCBzY2FsZTogeyB4OiAwLjc1LCB5OiAwLjc1IH0sIGR1cmF0aW9uOiA1MDAgfSk7XG4gICAgICBhbmltcy5wdXNoKHsgdGFyZ2V0OiBtZW51Q29udGFpbmVyLCB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LCBkdXJhdGlvbjogNTAwIH0pO1xuICAgICAgYW5pbXMucHVzaCh7IHRhcmdldDogaW5mb3NDb250YWluZXIsIHRyYW5zbGF0ZTogeyB4OiA1LCB5OiAwIH0sIGR1cmF0aW9uOiA1MDAgfSk7XG4gICAgICB2YXIgcGxheVNlcXVlbnRpYWxseSA9IGZhbHNlO1xuICAgICAgdmFyIGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb24oYW5pbXMsIGZhbHNlKTtcbiAgICAgIGFuaW1hdGlvblNldC5wbGF5KClcbiAgICB9ZWxzZXtcbiAgICAgIHZhciBhbmltcyA9IG5ldyBBcnJheSgpO1xuICAgICAgYW5pbXMucHVzaCh7IHRhcmdldDogcGhvdG9Db250YWluZXIsIHNjYWxlOiB7IHg6IDEsIHk6IDEgfSwgZHVyYXRpb246IDUwMCB9KTtcbiAgICAgIGFuaW1zLnB1c2goeyB0YXJnZXQ6IG1lbnVDb250YWluZXIsIHRyYW5zbGF0ZTogeyB4OiAtMTAwLCB5OiAwIH0sIGR1cmF0aW9uOiA1MDAgfSk7XG4gICAgICBhbmltcy5wdXNoKHsgdGFyZ2V0OiBpbmZvc0NvbnRhaW5lciwgdHJhbnNsYXRlOiB7IHg6IC00NSwgeTogMCB9LCBkdXJhdGlvbjogNTAwIH0pO1xuICAgICAgdmFyIHBsYXlTZXF1ZW50aWFsbHkgPSBmYWxzZTtcbiAgICAgIHZhciBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGFuaW1zLCBmYWxzZSk7XG4gICAgICBhbmltYXRpb25TZXQucGxheSgpXG4gICAgfVxuICAgIHRoaXMubWVudU91dmVydD0gIXRoaXMubWVudU91dmVydDtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ3VlclZlcnMocGFnZSl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtwYWdlXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiBcImZsaXBcIlxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==