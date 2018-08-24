"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var bghttp = require("nativescript-background-http");
var UploadService = /** @class */ (function () {
    function UploadService(http, router) {
        this.http = http;
        this.router = router;
        this.submitUrl = "http://7409d3fd.ngrok.io/upload";
    }
    UploadService.prototype.extractImageName = function (fileUri) {
        var pattern = /[^/]*$/;
        var imageName = fileUri.match(pattern);
        return imageName;
    };
    UploadService.prototype.uploadImage = function (filepath, uuid) {
        var session = bghttp.session("image-upload");
        var imageName = this.extractImageName(filepath);
        var request = {
            url: this.submitUrl,
            method: "POST",
            headers: {
                "File-Name": imageName
            },
            description: "{ 'uploading': " + imageName + " }"
        };
        request.headers['uuid'] = uuid;
        var task = session.uploadFile(filepath, request);
        task.on("complete", function (event) {
            console.log("complete");
        });
        task.on("error", function (event) {
            console.log(event);
        });
    };
    UploadService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCw2Q0FBZ0U7QUFDaEUsMENBQXlDO0FBRXpDLHFEQUF1RDtBQUl2RDtJQUlFLHVCQUFvQixJQUFnQixFQUFVLE1BQWM7UUFBeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGcEQsY0FBUyxHQUFHLGlDQUFpQyxDQUFDO0lBRVUsQ0FBQztJQUUxRCx3Q0FBZ0IsR0FBdkIsVUFBd0IsT0FBTztRQUNoQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2xCLENBQUM7SUFHUSxtQ0FBVyxHQUFsQixVQUFtQixRQUFRLEVBQUUsSUFBSTtRQUNsQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoRCxJQUFJLE9BQU8sR0FBRztZQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUztZQUNuQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRTtnQkFDUixXQUFXLEVBQUUsU0FBUzthQUN0QjtZQUNELFdBQVcsRUFBRSxpQkFBaUIsR0FBRyxTQUFTLEdBQUcsSUFBSTtTQUNqRCxDQUFDO1FBQ0YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLEtBQUs7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNGLENBQUM7SUFsQ1UsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUtlLGlCQUFVLEVBQWtCLGVBQU07T0FKakQsYUFBYSxDQW1DekI7SUFBRCxvQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXBsb2FkU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc3VibWl0VXJsID0gXCJodHRwOi8vNzQwOWQzZmQubmdyb2suaW8vdXBsb2FkXCI7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuIFxyXG4gIHB1YmxpYyBleHRyYWN0SW1hZ2VOYW1lKGZpbGVVcmkpIHtcclxuXHR2YXIgcGF0dGVybiA9IC9bXi9dKiQvO1xyXG5cdHZhciBpbWFnZU5hbWUgPSBmaWxlVXJpLm1hdGNoKHBhdHRlcm4pO1xyXG5cclxuXHRyZXR1cm4gaW1hZ2VOYW1lO1xyXG59XHJcblxyXG5cclxuICBwdWJsaWMgdXBsb2FkSW1hZ2UoZmlsZXBhdGgsIHV1aWQpIHtcclxuXHRsZXQgc2Vzc2lvbiA9IGJnaHR0cC5zZXNzaW9uKFwiaW1hZ2UtdXBsb2FkXCIpO1xyXG5cdGxldCBpbWFnZU5hbWUgPSB0aGlzLmV4dHJhY3RJbWFnZU5hbWUoZmlsZXBhdGgpO1xyXG5cclxuXHR2YXIgcmVxdWVzdCA9IHtcclxuXHRcdHVybDogdGhpcy5zdWJtaXRVcmwsXHJcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcIkZpbGUtTmFtZVwiOiBpbWFnZU5hbWVcclxuXHRcdH0sXHJcblx0XHRkZXNjcmlwdGlvbjogXCJ7ICd1cGxvYWRpbmcnOiBcIiArIGltYWdlTmFtZSArIFwiIH1cIlxyXG5cdH07XHJcblx0cmVxdWVzdC5oZWFkZXJzWyd1dWlkJ10gPSB1dWlkO1xyXG5cdGxldCB0YXNrID0gc2Vzc2lvbi51cGxvYWRGaWxlKGZpbGVwYXRoLCByZXF1ZXN0KTtcclxuXHR0YXNrLm9uKFwiY29tcGxldGVcIiwgKGV2ZW50KSA9PiB7IFxyXG5cdFx0Y29uc29sZS5sb2coXCJjb21wbGV0ZVwiKTtcclxuXHR9KTtcclxuXHR0YXNrLm9uKFwiZXJyb3JcIiwgZXZlbnQgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZXZlbnQpO1xyXG5cdH0pO1x0XHJcbiAgfVxyXG59Il19