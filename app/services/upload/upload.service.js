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
        this.submitUrl = "http://bf18aabd.ngrok.io/incorporation-data/refresh/";
    }
    UploadService.prototype.extractImageName = function (fileUri) {
        var pattern = /[^/]*$/;
        var imageName = fileUri.match(pattern);
        return imageName;
    };
    UploadService.prototype.uploadImage = function (destination, filepath) {
        var session = bghttp.session("image-upload");
        var imageName = this.extractImageName(filepath);
        var request = {
            url: destination,
            method: "POST",
            headers: {
                "File-Name": imageName
            },
            description: "{ 'uploading': " + imageName + " }"
        };
        console.log("aici");
        request.headers['uuid'] = "itworks"; // replace with uuid;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCw2Q0FBZ0U7QUFDaEUsMENBQXlDO0FBRXpDLHFEQUF1RDtBQUl2RDtJQUlFLHVCQUFvQixJQUFnQixFQUFVLE1BQWM7UUFBeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGcEQsY0FBUyxHQUFHLHNEQUFzRCxDQUFDO0lBRVgsQ0FBQztJQUUxRCx3Q0FBZ0IsR0FBdkIsVUFBd0IsT0FBTztRQUNoQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2xCLENBQUM7SUFHUSxtQ0FBVyxHQUFsQixVQUFtQixXQUFXLEVBQUUsUUFBUTtRQUN6QyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoRCxJQUFJLE9BQU8sR0FBRztZQUNiLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNSLFdBQVcsRUFBRSxTQUFTO2FBQ3RCO1lBQ0QsV0FBVyxFQUFFLGlCQUFpQixHQUFHLFNBQVMsR0FBRyxJQUFJO1NBQ2pELENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMscUJBQXFCO1FBQzFELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQUMsS0FBSztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQSxLQUFLO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDRixDQUFDO0lBbkNVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FLZSxpQkFBVSxFQUFrQixlQUFNO09BSmpELGFBQWEsQ0FvQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsICBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCAqIGFzIGJnaHR0cCBmcm9tIFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtaHR0cFwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVwbG9hZFNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHN1Ym1pdFVybCA9IFwiaHR0cDovL2JmMThhYWJkLm5ncm9rLmlvL2luY29ycG9yYXRpb24tZGF0YS9yZWZyZXNoL1wiO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcbiBcclxuICBwdWJsaWMgZXh0cmFjdEltYWdlTmFtZShmaWxlVXJpKSB7XHJcblx0dmFyIHBhdHRlcm4gPSAvW14vXSokLztcclxuXHR2YXIgaW1hZ2VOYW1lID0gZmlsZVVyaS5tYXRjaChwYXR0ZXJuKTtcclxuXHJcblx0cmV0dXJuIGltYWdlTmFtZTtcclxufVxyXG5cclxuXHJcbiAgcHVibGljIHVwbG9hZEltYWdlKGRlc3RpbmF0aW9uLCBmaWxlcGF0aCkge1xyXG5cdGxldCBzZXNzaW9uID0gYmdodHRwLnNlc3Npb24oXCJpbWFnZS11cGxvYWRcIik7XHJcblx0bGV0IGltYWdlTmFtZSA9IHRoaXMuZXh0cmFjdEltYWdlTmFtZShmaWxlcGF0aCk7XHJcblxyXG5cdHZhciByZXF1ZXN0ID0ge1xyXG5cdFx0dXJsOiBkZXN0aW5hdGlvbixcclxuXHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFwiRmlsZS1OYW1lXCI6IGltYWdlTmFtZVxyXG5cdFx0fSxcclxuXHRcdGRlc2NyaXB0aW9uOiBcInsgJ3VwbG9hZGluZyc6IFwiICsgaW1hZ2VOYW1lICsgXCIgfVwiXHJcblx0fTtcclxuXHRjb25zb2xlLmxvZyhcImFpY2lcIik7XHJcblx0cmVxdWVzdC5oZWFkZXJzWyd1dWlkJ10gPSBcIml0d29ya3NcIjsgLy8gcmVwbGFjZSB3aXRoIHV1aWQ7XHJcblx0bGV0IHRhc2sgPSBzZXNzaW9uLnVwbG9hZEZpbGUoZmlsZXBhdGgsIHJlcXVlc3QpO1xyXG5cdHRhc2sub24oXCJjb21wbGV0ZVwiLCAoZXZlbnQpID0+IHsgXHJcblx0XHRjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpO1xyXG5cdH0pO1xyXG5cdHRhc2sub24oXCJlcnJvclwiLCBldmVudCA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhldmVudCk7XHJcblx0fSk7XHRcclxuICB9XHJcbn0iXX0=