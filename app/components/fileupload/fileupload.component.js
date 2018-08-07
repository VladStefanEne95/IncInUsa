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
        this.page = page;
        this.selectedIndex = 1;
        this.isSingleMode = true;
        this.imageSelected = false;
        this.thumbSize = 80;
        this.previewSize = 200;
        page.actionBarHidden = true;
        this.items = [];
    }
    FileuploadComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.page.addCss("#step2 {visibility: collapsed}");
        this.items.push("Second");
        this.items.push("Passaport");
    };
    FileuploadComponent.prototype.onchange = function (args) {
        console.log("Drop Down selected index changed\"");
    };
    FileuploadComponent.prototype.onopen = function () {
        console.log("Drop Down opened.");
    };
    FileuploadComponent.prototype.onclose = function () {
        console.log("Drop Down closed.");
    };
    FileuploadComponent.prototype.showOptions = function () {
        this.page.addCss("#step1 {visibility: collapsed}");
        this.page.addCss("#step2 {visibility: visible}");
        this.page.addCss(".hide-border {border-bottom-color: #dedede}");
    };
    FileuploadComponent.prototype.hideOptions = function () {
        this.page.addCss("#step2 {visibility: collapsed}");
        this.page.addCss("#step1 {visibility: visible}");
        this.page.addCss(".hide-border {border-bottom-color: white}");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0Q0FBK0M7QUFHL0MscURBQXVEO0FBQ3ZELHNEQUF3RDtBQUN4RCx3Q0FBMEM7QUFFMUMsZ0NBQTZCO0FBRTdCLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUE7QUFFbEUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFjQyw2QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFadkIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFLekIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDNUIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUt6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUUsc0NBQVEsR0FBUjtRQUNGLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxzQ0FBUSxHQUFmLFVBQWdCLElBQW1DO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW1DLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sb0NBQU0sR0FBYjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJ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QUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUEsS0FBSztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXhIVyxtQkFBbUI7UUFML0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7eUNBZXlCLFdBQUk7T0FkbEIsbUJBQW1CLENBeUgvQjtJQUFELDBCQUFDO0NBQUEsQUF6SEQsSUF5SEM7QUF6SFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIENhbWVyYSAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCB7IEltYWdlRm9ybWF0IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5pbXBvcnQgKiBhcyBGaWxlU3lzdGVtIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XG5jb25zdCBpbWFnZVNvdXJjZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiKVxuXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkZpbGV1cGxvYWRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmlsZXVwbG9hZC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEZpbGV1cGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcblx0cHVibGljIHNlbGVjdGVkSW5kZXggPSAxO1xuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8c3RyaW5nPjtcblxuXG4gICAgaW1hZ2VTcmM6IGFueTtcblx0aXNTaW5nbGVNb2RlOiBib29sZWFuID0gdHJ1ZTtcblx0aW1hZ2VTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHRodW1iU2l6ZTogbnVtYmVyID0gODA7XG5cdHByZXZpZXdTaXplOiBudW1iZXIgPSAyMDA7XG5cdGRvY1R5cGUgOnN0cmluZztcblx0ZG9jTnVtYmVyIDpudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHRcdHRoaXMuaXRlbXMgPSBbXTtcblx0fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMiB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcblx0XHR0aGlzLml0ZW1zLnB1c2goXCJTZWNvbmRcIik7XG5cdFx0dGhpcy5pdGVtcy5wdXNoKFwiUGFzc2Fwb3J0XCIpO1xuXHR9XG5cdFxuXHRwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkXCJgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25vcGVuKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBvcGVuZWQuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbmNsb3NlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBjbG9zZWQuXCIpO1xuXHR9XG5cdFxuXHRwdWJsaWMgc2hvd09wdGlvbnMoKSB7XG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMSB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAyIHt2aXNpYmlsaXR5OiB2aXNpYmxlfVwiKTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiLmhpZGUtYm9yZGVyIHtib3JkZXItYm90dG9tLWNvbG9yOiAjZGVkZWRlfVwiKTtcblx0fVxuXG5cblx0cHVibGljIGhpZGVPcHRpb25zKCkge1xuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjc3RlcDIge3Zpc2liaWxpdHk6IGNvbGxhcHNlZH1cIik7XG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMSB7dmlzaWJpbGl0eTogdmlzaWJsZX1cIik7XG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIi5oaWRlLWJvcmRlciB7Ym9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGV9XCIpO1xuXHR9XG5cdFxuICAgIHB1YmxpYyBvblNlbGVjdFNpbmdsZVRhcCgpIHtcblx0XHR0aGlzLmlzU2luZ2xlTW9kZSA9IHRydWU7XG4gICAgICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZGU6IFwic2luZ2xlXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwic3RyaW5nS2V5XCIsIFwiU3RyaW5nIHZhbHVlXCIpOyAgLy8gV3JpdGluZ1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG5cdFx0bGV0IHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcbiAgICAgICAgY29udGV4dFxuICAgICAgICAuYXV0aG9yaXplKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XG5cdFx0XHR0aGF0LmltYWdlU3JjID0gc2VsZWN0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3Rpb25bMF0gOiBudWxsO1xuXHRcdFx0dGhpcy5pbWFnZVNlbGVjdGVkID0gdHJ1ZTtcblxuXHRcdFx0dGhhdC51cGxvYWQoXCJodHRwOi8vaHR0cGJpbi5vcmcvcG9zdFwiLCB0aGF0LmltYWdlU3JjWydfYW5kcm9pZCddKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcblx0fVxuXHRcblx0cHVibGljIHRha2VQaWN0dXJlKCkge1xuXHRcdGNvbnNvbGUubG9nKFwic3RhcnRcIik7XG5cdFx0Q2FtZXJhLnRha2VQaWN0dXJlKHtzYXZlVG9HYWxsZXJ5OiBmYWxzZSwgd2lkdGg6IDMyMCwgaGVpZ2h0OiAyNDAgfSkudGhlbihwaWN0dXJlID0+IHtcblx0XHRcdGxldCBmb2xkZXIgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcblx0XHRcdGxldCBwYXRoID0gRmlsZVN5c3RlbS5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIChuZXcgRGF0ZSgpKSArIFwiLnBuZ1wiKTtcblx0XHRcdGltYWdlU291cmNlTW9kdWxlLmZyb21Bc3NldChwaWN0dXJlKVxuXHRcdFx0LnRoZW4oaW1hZ2VTb3VyY2UgPT4ge1xuXHRcdFx0XHQgbGV0IHNhdmVkID0gaW1hZ2VTb3VyY2Uuc2F2ZVRvRmlsZShwYXRoLCBcInBuZ1wiKTtcblx0XHRcdFx0IGNvbnNvbGUubG9nKHNhdmVkKTtcblx0XHRcdFx0IHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdCB0aGlzLmltYWdlU3JjID0gcGF0aDtcblx0XHRcdFx0IHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdCB0aGlzLnVwbG9hZChcImh0dHA6Ly9odHRwYmluLm9yZy9wb3N0XCIsIHBhdGgpO1xuXHRcdFx0IH0pO1xuXHRcdH0pO1xuXHR9XG5cdHB1YmxpYyBleHRyYWN0SW1hZ2VOYW1lKGZpbGVVcmkpIHtcblx0XHR2YXIgcGF0dGVybiA9IC9bXi9dKiQvO1xuXHRcdHZhciBpbWFnZU5hbWUgPSBmaWxlVXJpLm1hdGNoKHBhdHRlcm4pO1xuXHRcblx0XHRyZXR1cm4gaW1hZ2VOYW1lO1xuXHR9XG5cdHB1YmxpYyB1cGxvYWQoZGVzdGluYXRpb246IHN0cmluZywgZmlsZXBhdGg6IHN0cmluZykge1xuICAgICAgICAgICAgbGV0IHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcblx0XHRcdGxldCBpbWFnZU5hbWUgPSB0aGlzLmV4dHJhY3RJbWFnZU5hbWUoZmlsZXBhdGgpO1xuXG5cdFx0XHR2YXIgcmVxdWVzdCA9IHtcblx0XHRcdFx0dXJsOiBcImh0dHA6Ly9odHRwYmluLm9yZy9wb3N0XCIsXG5cdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuXHRcdFx0XHRcdFwiRmlsZS1OYW1lXCI6IGltYWdlTmFtZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJ7ICd1cGxvYWRpbmcnOiBcIiArIGltYWdlTmFtZSArIFwiIH1cIlxuXHRcdFx0fTtcblx0XHRcdGxldCB0YXNrID0gc2Vzc2lvbi51cGxvYWRGaWxlKGZpbGVwYXRoLCByZXF1ZXN0KTtcblx0XHRcdHRhc2sub24oXCJjb21wbGV0ZVwiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJjb21wbGV0ZVwiKTtcblx0XHRcdH0pO1xuXHRcdFx0dGFzay5vbihcImVycm9yXCIsIGV2ZW50ID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xuXHRcdFx0fSk7XG5cdH1cbn0iXX0=