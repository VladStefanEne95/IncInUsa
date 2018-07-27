"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Camera = require("nativescript-camera");
var bghttp = require("nativescript-background-http");
var imagepicker = require("nativescript-imagepicker");
var FileSystem = require("file-system");
var page_1 = require("ui/page");
var imageSourceModule = require("tns-core-modules/image-source");
var FileuploadComponent = /** @class */ (function () {
    function FileuploadComponent(page) {
        this.isSingleMode = true;
        this.imageSelected = false;
        this.thumbSize = 80;
        this.previewSize = 300;
        page.actionBarHidden = true;
    }
    FileuploadComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    FileuploadComponent.prototype.onSelectSingleTap = function () {
        this.isSingleMode = true;
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    FileuploadComponent.prototype.startSelection = function (context) {
        var _this = this;
        var that = this;
        var session = bghttp.session("image-upload");
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            that.imageSrc = selection.length > 0 ? selection[0] : null;
            _this.imageSelected = true;
            that.upload("http://httpbin.org/post", "upload", that.imageSrc['_android']);
        }).catch(function (e) {
            console.log(e);
        });
    };
    FileuploadComponent.prototype.takePicture = function () {
        var _this = this;
        console.log("start");
        Camera.takePicture({ saveToGallery: false, width: 320, height: 240 }).then(function (picture) {
            var folder = FileSystem.knownFolders.documents();
            var path = FileSystem.path.join(folder.path, (new Date()) + ".png");
            imageSourceModule.fromAsset(picture)
                .then(function (imageSource) {
                var saved = imageSource.saveToFile(path, "png");
                console.log(saved);
                _this.imageSelected = true;
                _this.imageSrc = path;
                _this.imageSelected = true;
                _this.upload("http://httpbin.org/post", "upload", path);
            });
        });
    };
    FileuploadComponent.prototype.upload = function (destination, filevar, filepath) {
        var session = bghttp.session("image-upload");
        var imageName = "IMG_20180720_094413.jpg";
        request.headers["Should-Fail"] = true;
        var request = {
            url: "http://httpbin.org/post",
            method: "POST",
            headers: {
                "Content-Type": "application/octet-stream",
                "File-Name": imageName
            },
            description: "{ 'uploading': " + imageName + " }"
        };
        var task = session.uploadFile(filepath, request);
        task.on("complete", function (event) {
            console.log("complete");
        });
        task.on("error", function (event) {
            console.log(event);
        });
    };
    FileuploadComponent = __decorate([
        core_1.Component({
            selector: "Fileupload",
            moduleId: module.id,
            templateUrl: "./fileupload.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], FileuploadComponent);
    return FileuploadComponent;
}());
exports.FileuploadComponent = FileuploadComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0Q0FBK0M7QUFHL0MscURBQXVEO0FBQ3ZELHNEQUF3RDtBQUN4RCx3Q0FBMEM7QUFFMUMsZ0NBQTZCO0FBQzdCLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUE7QUFPbEU7SUFRQyw2QkFBWSxJQUFVO1FBTHRCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFHNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVFLHNDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDOUMsQ0FBQztJQUdTLCtDQUFpQixHQUF4QjtRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sNENBQWMsR0FBdEIsVUFBdUIsT0FBTztRQUE5QixpQkFnQkY7UUFmTSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2QyxPQUFPO2FBQ04sU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDO1lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxTQUFTO1lB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UCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO3lDQVNpQixXQUFJO09BUlYsbUJBQW1CLENBbUYvQjtJQUFELDBCQUFDO0NBQUEsQUFuRkQsSUFtRkM7QUFuRlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIENhbWVyYSAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCB7IEltYWdlRm9ybWF0IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5pbXBvcnQgKiBhcyBGaWxlU3lzdGVtIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5jb25zdCBpbWFnZVNvdXJjZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiKVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJGaWxldXBsb2FkXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZpbGV1cGxvYWQuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBGaWxldXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGltYWdlU3JjOiBhbnk7XG5cdGlzU2luZ2xlTW9kZTogYm9vbGVhbiA9IHRydWU7XG5cdGltYWdlU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB0aHVtYlNpemU6IG51bWJlciA9IDgwO1xuICAgIHByZXZpZXdTaXplOiBudW1iZXIgPSAzMDA7XG5cblx0Y29uc3RydWN0b3IocGFnZTogUGFnZSkge1xuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuXHR9XG5cdFxuXHRcbiAgICBwdWJsaWMgb25TZWxlY3RTaW5nbGVUYXAoKSB7XG5cdFx0dGhpcy5pc1NpbmdsZU1vZGUgPSB0cnVlO1xuICAgICAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBcInNpbmdsZVwiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRTZWxlY3Rpb24oY29udGV4dCkge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG5cdFx0bGV0IHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcbiAgICAgICAgY29udGV4dFxuICAgICAgICAuYXV0aG9yaXplKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XG5cdFx0XHR0aGF0LmltYWdlU3JjID0gc2VsZWN0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3Rpb25bMF0gOiBudWxsO1xuXHRcdFx0dGhpcy5pbWFnZVNlbGVjdGVkID0gdHJ1ZTtcblxuXHRcdFx0dGhhdC51cGxvYWQoXCJodHRwOi8vaHR0cGJpbi5vcmcvcG9zdFwiLCBcInVwbG9hZFwiLCB0aGF0LmltYWdlU3JjWydfYW5kcm9pZCddKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcblx0fVxuXHRcblx0cHVibGljIHRha2VQaWN0dXJlKCkge1xuXHRcdGNvbnNvbGUubG9nKFwic3RhcnRcIik7XG5cdFx0Q2FtZXJhLnRha2VQaWN0dXJlKHtzYXZlVG9HYWxsZXJ5OiBmYWxzZSwgd2lkdGg6IDMyMCwgaGVpZ2h0OiAyNDAgfSkudGhlbihwaWN0dXJlID0+IHtcblx0XHRcdGxldCBmb2xkZXIgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcblx0XHRcdGxldCBwYXRoID0gRmlsZVN5c3RlbS5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIChuZXcgRGF0ZSgpKSArIFwiLnBuZ1wiKTtcblx0XHRcdGltYWdlU291cmNlTW9kdWxlLmZyb21Bc3NldChwaWN0dXJlKVxuXHRcdFx0LnRoZW4oaW1hZ2VTb3VyY2UgPT4ge1xuXHRcdFx0XHQgbGV0IHNhdmVkID0gaW1hZ2VTb3VyY2Uuc2F2ZVRvRmlsZShwYXRoLCBcInBuZ1wiKTtcblx0XHRcdFx0IGNvbnNvbGUubG9nKHNhdmVkKTtcblx0XHRcdFx0IHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdCB0aGlzLmltYWdlU3JjID0gcGF0aDtcblx0XHRcdFx0IHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdCB0aGlzLnVwbG9hZChcImh0dHA6Ly9odHRwYmluLm9yZy9wb3N0XCIsIFwidXBsb2FkXCIsIHBhdGgpO1xuXHRcdFx0IH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIHVwbG9hZChkZXN0aW5hdGlvbjogc3RyaW5nLCBmaWxldmFyOiBzdHJpbmcsIGZpbGVwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGxldCBzZXNzaW9uID0gYmdodHRwLnNlc3Npb24oXCJpbWFnZS11cGxvYWRcIik7XG5cdFx0XHRsZXQgaW1hZ2VOYW1lID0gXCJJTUdfMjAxODA3MjBfMDk0NDEzLmpwZ1wiO1xuXHRcblx0XHRcdHJlcXVlc3QuaGVhZGVyc1tcIlNob3VsZC1GYWlsXCJdID0gdHJ1ZTtcblx0XHRcblx0XHRcdHZhciByZXF1ZXN0ID0ge1xuXHRcdFx0XHR1cmw6IFwiaHR0cDovL2h0dHBiaW4ub3JnL3Bvc3RcIixcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXG5cdFx0XHRcdFx0XCJGaWxlLU5hbWVcIjogaW1hZ2VOYW1lXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcInsgJ3VwbG9hZGluZyc6IFwiICsgaW1hZ2VOYW1lICsgXCIgfVwiXG5cdFx0XHR9O1xuXHRcdFx0bGV0IHRhc2sgPSBzZXNzaW9uLnVwbG9hZEZpbGUoZmlsZXBhdGgsIHJlcXVlc3QpO1xuXHRcdFx0dGFzay5vbihcImNvbXBsZXRlXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpO1xuXHRcdFx0fSk7XG5cdFx0XHR0YXNrLm9uKFwiZXJyb3JcIiwgZXZlbnQgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XG5cdFx0XHR9KTtcblx0fVxufSJdfQ==