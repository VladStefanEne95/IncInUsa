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
        // Init your component properties here.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0Q0FBK0M7QUFHL0MscURBQXVEO0FBQ3ZELHNEQUF3RDtBQUN4RCx3Q0FBMEM7QUFFMUMsZ0NBQTZCO0FBRTdCLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUE7QUFDbEUseUVBQXNFO0FBRXRFLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBT2xEO0lBZUMsNkJBQW9CLElBQVUsRUFBVSxhQUE0QjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFiN0Qsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFLekIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDNUIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQU16QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUUsc0NBQVEsR0FBUjtRQUNGLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENB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QUFDO2dCQUNoRCxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ00sb0NBQU0sR0FBYixVQUFjLFdBQW1CLEVBQUUsUUFBZ0I7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUEvRlcsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO3lDQWdCeUIsV0FBSSxFQUF5Qiw4QkFBYTtPQWZ4RCxtQkFBbUIsQ0FnRy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWhHRCxJQWdHQztBQWhHWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgQ2FtZXJhICBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuaW1wb3J0IHsgSW1hZ2VGb3JtYXQgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQgKiBhcyBiZ2h0dHAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIjtcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCAqIGFzIEZpbGVTeXN0ZW0gZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcbmNvbnN0IGltYWdlU291cmNlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCIpXG5pbXBvcnQgeyBVcGxvYWRTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy91cGxvYWQvdXBsb2FkLnNlcnZpY2UnXG5cbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiRmlsZXVwbG9hZFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9maWxldXBsb2FkLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgRmlsZXVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuXHRwdWJsaWMgc2VsZWN0ZWRJbmRleCA9IDE7XG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxzdHJpbmc+O1xuXG5cbiAgICBpbWFnZVNyYzogYW55O1xuXHRpc1NpbmdsZU1vZGU6IGJvb2xlYW4gPSB0cnVlO1xuXHRpbWFnZVNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGh1bWJTaXplOiBudW1iZXIgPSA4MDtcblx0cHJldmlld1NpemU6IG51bWJlciA9IDIwMDtcblx0ZG9jVHlwZSA6c3RyaW5nO1xuXHRkb2NOdW1iZXIgOm51bWJlcjtcblx0dXVpZCA6c3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBVcGxvYWRTZXJ2aWNlOiBVcGxvYWRTZXJ2aWNlKSB7XG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHRcdHRoaXMuaXRlbXMgPSBbXTtcblx0fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMiB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcblx0XHR0aGlzLml0ZW1zLnB1c2goXCJTZWNvbmRcIik7XG5cdFx0dGhpcy5pdGVtcy5wdXNoKFwiUGFzc2Fwb3J0XCIpO1xuXHRcdHRoaXMudXVpZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInV1aWRcIiwgXCJcIik7XG5cdFx0Q2FtZXJhLnJlcXVlc3RQZXJtaXNzaW9ucygpO1xuXHR9XG5cdFxuXHRwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkXCJgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25vcGVuKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBvcGVuZWQuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbmNsb3NlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBjbG9zZWQuXCIpO1xuXHR9XG5cdFxuXHRwdWJsaWMgc2hvd09wdGlvbnMoKSB7XG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMSB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAyIHt2aXNpYmlsaXR5OiB2aXNpYmxlfVwiKTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiLmhpZGUtYm9yZGVyIHtib3JkZXItYm90dG9tLWNvbG9yOiAjZGVkZWRlfVwiKTtcblx0fVxuXG5cblx0cHVibGljIGhpZGVPcHRpb25zKCkge1xuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjc3RlcDIge3Zpc2liaWxpdHk6IGNvbGxhcHNlZH1cIik7XG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMSB7dmlzaWJpbGl0eTogdmlzaWJsZX1cIik7XG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIi5oaWRlLWJvcmRlciB7Ym9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGV9XCIpO1xuXHR9XG5cdFxuICAgIHB1YmxpYyBvblNlbGVjdFNpbmdsZVRhcCgpIHtcblx0XHR0aGlzLmlzU2luZ2xlTW9kZSA9IHRydWU7XG4gICAgICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZGU6IFwic2luZ2xlXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XG5cdFx0bGV0IHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcbiAgICAgICAgY29udGV4dFxuICAgICAgICAuYXV0aG9yaXplKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XG5cdFx0XHR0aGlzLmltYWdlU3JjID0gc2VsZWN0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3Rpb25bMF0gOiBudWxsO1xuXHRcdFx0dGhpcy5pbWFnZVNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdC8vY2hlY2sgZm9yIGlvc1xuXHRcdFx0dGhpcy51cGxvYWQoXCJodHRwOi8vYWYyYjRmNmQubmdyb2suaW8vdXBsb2FkXCIsIHRoaXMuaW1hZ2VTcmNbJ19hbmRyb2lkJ10pO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuXHR9XG5cdFxuXHRwdWJsaWMgdGFrZVBpY3R1cmUoKSB7XG5cdFx0Q2FtZXJhLnRha2VQaWN0dXJlKHtzYXZlVG9HYWxsZXJ5OiBmYWxzZSwgd2lkdGg6IDMyMCwgaGVpZ2h0OiAyNDAgfSkudGhlbihwaWN0dXJlID0+IHtcblx0XHRcdGxldCBmb2xkZXIgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcblx0XHRcdGxldCBwYXRoID0gRmlsZVN5c3RlbS5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIChuZXcgRGF0ZSgpKSArIFwiLnBuZ1wiKTtcblx0XHRcdGltYWdlU291cmNlTW9kdWxlLmZyb21Bc3NldChwaWN0dXJlKVxuXHRcdFx0LnRoZW4oaW1hZ2VTb3VyY2UgPT4ge1xuXHRcdFx0XHQgbGV0IHNhdmVkID0gaW1hZ2VTb3VyY2Uuc2F2ZVRvRmlsZShwYXRoLCBcInBuZ1wiKTtcblx0XHRcdFx0IHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdCB0aGlzLmltYWdlU3JjID0gcGF0aDtcblx0XHRcdFx0IHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdCB0aGlzLnVwbG9hZChcImh0dHA6Ly9hZjJiNGY2ZC5uZ3Jvay5pby91cGxvYWRcIiwgcGF0aCk7XG5cdFx0XHQgfSk7XG5cdFx0fSk7XG5cdH1cblx0cHVibGljIHVwbG9hZChkZXN0aW5hdGlvbjogc3RyaW5nLCBmaWxlcGF0aDogc3RyaW5nKSB7XG5cdFx0dGhpcy5VcGxvYWRTZXJ2aWNlLnVwbG9hZEltYWdlKGRlc3RpbmF0aW9uLCBmaWxlcGF0aCk7XG5cdH1cbn0iXX0=