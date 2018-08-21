"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Camera = require("nativescript-camera");
var bghttp = require("nativescript-background-http");
var imagepicker = require("nativescript-imagepicker");
var FileSystem = require("file-system");
var page_1 = require("ui/page");
var imageSourceModule = require("tns-core-modules/image-source");
var upload_service_1 = require("./../../services/upload/upload.service");
var appSettings = require("application-settings");
var FileuploadComponent = /** @class */ (function () {
    function FileuploadComponent(page, UploadService) {
        this.page = page;
        this.UploadService = UploadService;
        this.selectedIndex = 1;
        this.isSingleMode = true;
        this.imageSelected = false;
        this.thumbSize = 80;
        this.previewSize = 200;
        page.actionBarHidden = true;
        this.items = [];
    }
    FileuploadComponent.prototype.ngOnInit = function () {
        this.page.addCss("#step2 {visibility: collapsed}");
        this.items.push("Second");
        this.items.push("Passaport");
        this.uuid = appSettings.getString("uuid", "");
        Camera.requestPermissions();
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
        var session = bghttp.session("image-upload");
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            _this.imageSrc = selection.length > 0 ? selection[0] : null;
            _this.imageSelected = true;
            //check for ios
            _this.upload("http://af2b4f6d.ngrok.io/upload", _this.imageSrc['_android']);
        }).catch(function (e) {
            console.log(e);
        });
    };
    FileuploadComponent.prototype.takePicture = function () {
        var _this = this;
        Camera.takePicture({ saveToGallery: false, width: 320, height: 240 }).then(function (picture) {
            var folder = FileSystem.knownFolders.documents();
            var path = FileSystem.path.join(folder.path, (new Date()) + ".png");
            imageSourceModule.fromAsset(picture)
                .then(function (imageSource) {
                var saved = imageSource.saveToFile(path, "png");
                _this.imageSelected = true;
                _this.imageSrc = path;
                _this.imageSelected = true;
                _this.upload("http://af2b4f6d.ngrok.io/upload", path);
            });
        });
    };
    FileuploadComponent.prototype.upload = function (destination, filepath) {
        this.UploadService.uploadImage(destination, filepath);
    };
    FileuploadComponent = __decorate([
        core_1.Component({
            selector: "Fileupload",
            moduleId: module.id,
            templateUrl: "./fileupload.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, upload_service_1.UploadService])
    ], FileuploadComponent);
    return FileuploadComponent;
}());
exports.FileuploadComponent = FileuploadComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0Q0FBK0M7QUFHL0MscURBQXVEO0FBQ3ZELHNEQUF3RDtBQUN4RCx3Q0FBMEM7QUFFMUMsZ0NBQTZCO0FBRTdCLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFDbkUseUVBQXVFO0FBR3ZFLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBT2xEO0lBZUMsNkJBQW9CLElBQVUsRUFBVSxhQUE0QjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFiN0Qsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFLekIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDNUIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQU16QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUUsc0NBQVEsR0FBUjtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM3QixDQUFD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QUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxNQUFNLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDTSxvQ0FBTSxHQUFiLFVBQWMsV0FBbUIsRUFBRSxRQUFnQjtRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQTlGVyxtQkFBbUI7UUFML0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7eUNBZ0J5QixXQUFJLEVBQXlCLDhCQUFhO09BZnhELG1CQUFtQixDQStGL0I7SUFBRCwwQkFBQztDQUFBLEFBL0ZELElBK0ZDO0FBL0ZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgQ2FtZXJhICBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5pbXBvcnQgeyBJbWFnZUZvcm1hdCB9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xyXG5pbXBvcnQgKiBhcyBiZ2h0dHAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBGaWxlU3lzdGVtIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmNvbnN0IGltYWdlU291cmNlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCIpO1xyXG5pbXBvcnQgeyBVcGxvYWRTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy91cGxvYWQvdXBsb2FkLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCJcclxuXHJcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiRmlsZXVwbG9hZFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmlsZXVwbG9hZC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxldXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuXHRwdWJsaWMgc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PHN0cmluZz47XHJcblxyXG5cclxuICAgIGltYWdlU3JjOiBhbnk7XHJcblx0aXNTaW5nbGVNb2RlOiBib29sZWFuID0gdHJ1ZTtcclxuXHRpbWFnZVNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB0aHVtYlNpemU6IG51bWJlciA9IDgwO1xyXG5cdHByZXZpZXdTaXplOiBudW1iZXIgPSAyMDA7XHJcblx0ZG9jVHlwZSA6c3RyaW5nO1xyXG5cdGRvY051bWJlciA6bnVtYmVyO1xyXG5cdHV1aWQgOnN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIFVwbG9hZFNlcnZpY2U6IFVwbG9hZFNlcnZpY2UpIHtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHRcdHRoaXMuaXRlbXMgPSBbXTtcclxuXHR9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAyIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xyXG5cdFx0dGhpcy5pdGVtcy5wdXNoKFwiU2Vjb25kXCIpO1xyXG5cdFx0dGhpcy5pdGVtcy5wdXNoKFwiUGFzc2Fwb3J0XCIpO1xyXG5cdFx0dGhpcy51dWlkID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXVpZFwiLCBcIlwiKTtcclxuXHRcdENhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkXCJgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25vcGVuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIG9wZW5lZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uY2xvc2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEcm9wIERvd24gY2xvc2VkLlwiKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIHNob3dPcHRpb25zKCkge1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMSB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjc3RlcDIge3Zpc2liaWxpdHk6IHZpc2libGV9XCIpO1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIi5oaWRlLWJvcmRlciB7Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2RlZGVkZX1cIik7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIGhpZGVPcHRpb25zKCkge1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMiB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjc3RlcDEge3Zpc2liaWxpdHk6IHZpc2libGV9XCIpO1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIi5oaWRlLWJvcmRlciB7Ym9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGV9XCIpO1xyXG5cdH1cclxuXHRcclxuICAgIHB1YmxpYyBvblNlbGVjdFNpbmdsZVRhcCgpIHtcclxuXHRcdHRoaXMuaXNTaW5nbGVNb2RlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIG1vZGU6IFwic2luZ2xlXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRTZWxlY3Rpb24oY29udGV4dCkge1xyXG5cdFx0bGV0IHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcclxuICAgICAgICBjb250ZXh0XHJcbiAgICAgICAgLmF1dGhvcml6ZSgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XHJcblx0XHRcdHRoaXMuaW1hZ2VTcmMgPSBzZWxlY3Rpb24ubGVuZ3RoID4gMCA/IHNlbGVjdGlvblswXSA6IG51bGw7XHJcblx0XHRcdHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdC8vY2hlY2sgZm9yIGlvc1xyXG5cdFx0XHR0aGlzLnVwbG9hZChcImh0dHA6Ly9hZjJiNGY2ZC5uZ3Jvay5pby91cGxvYWRcIiwgdGhpcy5pbWFnZVNyY1snX2FuZHJvaWQnXSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyB0YWtlUGljdHVyZSgpIHtcclxuXHRcdENhbWVyYS50YWtlUGljdHVyZSh7c2F2ZVRvR2FsbGVyeTogZmFsc2UsIHdpZHRoOiAzMjAsIGhlaWdodDogMjQwIH0pLnRoZW4ocGljdHVyZSA9PiB7XHJcblx0XHRcdGxldCBmb2xkZXIgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcclxuXHRcdFx0bGV0IHBhdGggPSBGaWxlU3lzdGVtLnBhdGguam9pbihmb2xkZXIucGF0aCwgKG5ldyBEYXRlKCkpICsgXCIucG5nXCIpO1xyXG5cdFx0XHRpbWFnZVNvdXJjZU1vZHVsZS5mcm9tQXNzZXQocGljdHVyZSlcclxuXHRcdFx0LnRoZW4oaW1hZ2VTb3VyY2UgPT4ge1xyXG5cdFx0XHRcdCBsZXQgc2F2ZWQgPSBpbWFnZVNvdXJjZS5zYXZlVG9GaWxlKHBhdGgsIFwicG5nXCIpO1xyXG5cdFx0XHRcdCB0aGlzLmltYWdlU2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdCB0aGlzLmltYWdlU3JjID0gcGF0aDtcclxuXHRcdFx0XHQgdGhpcy5pbWFnZVNlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHQgdGhpcy51cGxvYWQoXCJodHRwOi8vYWYyYjRmNmQubmdyb2suaW8vdXBsb2FkXCIsIHBhdGgpO1xyXG5cdFx0XHQgfSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cHVibGljIHVwbG9hZChkZXN0aW5hdGlvbjogc3RyaW5nLCBmaWxlcGF0aDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLlVwbG9hZFNlcnZpY2UudXBsb2FkSW1hZ2UoZGVzdGluYXRpb24sIGZpbGVwYXRoKTtcclxuXHR9XHJcbn0iXX0=