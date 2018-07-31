"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Camera = require("nativescript-camera");
var bghttp = require("nativescript-background-http");
var imagepicker = require("nativescript-imagepicker");
var FileSystem = require("file-system");
var page_1 = require("ui/page");
var imageSourceModule = require("tns-core-modules/image-source");
var appSettings = require("application-settings");
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
        appSettings.setString("stringKey", "String value"); // Writing
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
            that.upload("http://httpbin.org/post", that.imageSrc['_android']);
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
                _this.upload("http://httpbin.org/post", path);
            });
        });
    };
    FileuploadComponent.prototype.extractImageName = function (fileUri) {
        var pattern = /[^/]*$/;
        var imageName = fileUri.match(pattern);
        return imageName;
    };
    FileuploadComponent.prototype.upload = function (destination, filepath) {
        var session = bghttp.session("image-upload");
        var imageName = this.extractImageName(filepath);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0Q0FBK0M7QUFHL0MscURBQXVEO0FBQ3ZELHNEQUF3RDtBQUN4RCx3Q0FBMEM7QUFFMUMsZ0NBQTZCO0FBQzdCLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUE7QUFFbEUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFRQyw2QkFBWSxJQUFVO1FBTHRCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFHNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVFLHNDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDOUMsQ0FBQztJQUdTLCtDQUFpQixHQUF4QjtRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sNENBQWMsR0FBdEIsVUFBdUIsT0FBTztRQUE5QixpQkFpQkY7UUFoQkEsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBRSxVQUFVO1FBQ3pELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU87YUFD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LE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLEtBQUs7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF0RlcsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO3lDQVNpQixXQUFJO09BUlYsbUJBQW1CLENBdUYvQjtJQUFELDBCQUFDO0NBQUEsQUF2RkQsSUF1RkM7QUF2Rlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIENhbWVyYSAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCB7IEltYWdlRm9ybWF0IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5pbXBvcnQgKiBhcyBGaWxlU3lzdGVtIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5jb25zdCBpbWFnZVNvdXJjZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiKVxuXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkZpbGV1cGxvYWRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmlsZXVwbG9hZC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEZpbGV1cGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaW1hZ2VTcmM6IGFueTtcblx0aXNTaW5nbGVNb2RlOiBib29sZWFuID0gdHJ1ZTtcblx0aW1hZ2VTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHRodW1iU2l6ZTogbnVtYmVyID0gODA7XG4gICAgcHJldmlld1NpemU6IG51bWJlciA9IDMwMDtcblxuXHRjb25zdHJ1Y3RvcihwYWdlOiBQYWdlKSB7XG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHR9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG5cdH1cblx0XG5cdFxuICAgIHB1YmxpYyBvblNlbGVjdFNpbmdsZVRhcCgpIHtcblx0XHR0aGlzLmlzU2luZ2xlTW9kZSA9IHRydWU7XG4gICAgICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZGU6IFwic2luZ2xlXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwic3RyaW5nS2V5XCIsIFwiU3RyaW5nIHZhbHVlXCIpOyAgLy8gV3JpdGluZ1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG5cdFx0bGV0IHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcbiAgICAgICAgY29udGV4dFxuICAgICAgICAuYXV0aG9yaXplKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XG5cdFx0XHR0aGF0LmltYWdlU3JjID0gc2VsZWN0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3Rpb25bMF0gOiBudWxsO1xuXHRcdFx0dGhpcy5pbWFnZVNlbGVjdGVkID0gdHJ1ZTtcblxuXHRcdFx0dGhhdC51cGxvYWQoXCJodHRwOi8vaHR0cGJpbi5vcmcvcG9zdFwiLCB0aGF0LmltYWdlU3JjWydfYW5kcm9pZCddKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcblx0fVxuXHRcblx0cHVibGljIHRha2VQaWN0dXJlKCkge1xuXHRcdGNvbnNvbGUubG9nKFwic3RhcnRcIik7XG5cdFx0Q2FtZXJhLnRha2VQaWN0dXJlKHtzYXZlVG9HYWxsZXJ5OiBmYWxzZSwgd2lkdGg6IDMyMCwgaGVpZ2h0OiAyNDAgfSkudGhlbihwaWN0dXJlID0+IHtcblx0XHRcdGxldCBmb2xkZXIgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcblx0XHRcdGxldCBwYXRoID0gRmlsZVN5c3RlbS5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIChuZXcgRGF0ZSgpKSArIFwiLnBuZ1wiKTtcblx0XHRcdGltYWdlU291cmNlTW9kdWxlLmZyb21Bc3NldChwaWN0dXJlKVxuXHRcdFx0LnRoZW4oaW1hZ2VTb3VyY2UgPT4ge1xuXHRcdFx0XHQgbGV0IHNhdmVkID0gaW1hZ2VTb3VyY2Uuc2F2ZVRvRmlsZShwYXRoLCBcInBuZ1wiKTtcblx0XHRcdFx0IGNvbnNvbGUubG9nKHNhdmVkKTtcblx0XHRcdFx0IHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdCB0aGlzLmltYWdlU3JjID0gcGF0aDtcblx0XHRcdFx0IHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdCB0aGlzLnVwbG9hZChcImh0dHA6Ly9odHRwYmluLm9yZy9wb3N0XCIsIHBhdGgpO1xuXHRcdFx0IH0pO1xuXHRcdH0pO1xuXHR9XG5cdHB1YmxpYyBleHRyYWN0SW1hZ2VOYW1lKGZpbGVVcmkpIHtcblx0XHR2YXIgcGF0dGVybiA9IC9bXi9dKiQvO1xuXHRcdHZhciBpbWFnZU5hbWUgPSBmaWxlVXJpLm1hdGNoKHBhdHRlcm4pO1xuXHRcblx0XHRyZXR1cm4gaW1hZ2VOYW1lO1xuXHR9XG5cdHB1YmxpYyB1cGxvYWQoZGVzdGluYXRpb246IHN0cmluZywgZmlsZXBhdGg6IHN0cmluZykge1xuICAgICAgICAgICAgbGV0IHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcblx0XHRcdGxldCBpbWFnZU5hbWUgPSB0aGlzLmV4dHJhY3RJbWFnZU5hbWUoZmlsZXBhdGgpO1xuXG5cdFx0XHR2YXIgcmVxdWVzdCA9IHtcblx0XHRcdFx0dXJsOiBcImh0dHA6Ly9odHRwYmluLm9yZy9wb3N0XCIsXG5cdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuXHRcdFx0XHRcdFwiRmlsZS1OYW1lXCI6IGltYWdlTmFtZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJ7ICd1cGxvYWRpbmcnOiBcIiArIGltYWdlTmFtZSArIFwiIH1cIlxuXHRcdFx0fTtcblx0XHRcdGxldCB0YXNrID0gc2Vzc2lvbi51cGxvYWRGaWxlKGZpbGVwYXRoLCByZXF1ZXN0KTtcblx0XHRcdHRhc2sub24oXCJjb21wbGV0ZVwiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJjb21wbGV0ZVwiKTtcblx0XHRcdH0pO1xuXHRcdFx0dGFzay5vbihcImVycm9yXCIsIGV2ZW50ID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xuXHRcdFx0fSk7XG5cdH1cbn0iXX0=