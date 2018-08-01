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
        this.previewSize = 300;
        page.actionBarHidden = true;
        this.items = [];
    }
    FileuploadComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        //this.page.addCss("#step2 {visibility: collapsed}");
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
        console.log("ok");
        this.page.addCss("#step1 {visibility: collapsed}");
        this.page.addCss("#step2 {visibility: visible}");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0Q0FBK0M7QUFHL0MscURBQXVEO0FBQ3ZELHNEQUF3RDtBQUN4RCx3Q0FBMEM7QUFFMUMsZ0NBQTZCO0FBRTdCLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUE7QUFFbEUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFjQyw2QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFadkIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFLekIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDNUIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUt6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUUsc0NBQVEsR0FBUjtRQUNGLHVDQUF1QztRQUN2QyxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLHNDQUFRLEdBQWYsVUFBZ0IsSUFBbUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBbUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxvQ0FBTSxHQUFiO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxxQ0FBTyxHQUFkO1FBQ0ksT0FBTyxDQUFD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QWRsQixtQkFBbUIsQ0FrSC9CO0lBQUQsMEJBQUM7Q0FBQSxBQWxIRCxJQWtIQztBQWxIWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgQ2FtZXJhICBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuaW1wb3J0IHsgSW1hZ2VGb3JtYXQgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQgKiBhcyBiZ2h0dHAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIjtcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCAqIGFzIEZpbGVTeXN0ZW0gZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcbmNvbnN0IGltYWdlU291cmNlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCIpXG5cbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiRmlsZXVwbG9hZFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9maWxldXBsb2FkLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgRmlsZXVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuXHRwdWJsaWMgc2VsZWN0ZWRJbmRleCA9IDE7XG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxzdHJpbmc+O1xuXG5cbiAgICBpbWFnZVNyYzogYW55O1xuXHRpc1NpbmdsZU1vZGU6IGJvb2xlYW4gPSB0cnVlO1xuXHRpbWFnZVNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGh1bWJTaXplOiBudW1iZXIgPSA4MDtcblx0cHJldmlld1NpemU6IG51bWJlciA9IDMwMDtcblx0ZG9jVHlwZSA6c3RyaW5nO1xuXHRkb2NOdW1iZXIgOm51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHR9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHQvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cblx0XHQvL3RoaXMucGFnZS5hZGRDc3MoXCIjc3RlcDIge3Zpc2liaWxpdHk6IGNvbGxhcHNlZH1cIik7XG5cdFx0dGhpcy5pdGVtcy5wdXNoKFwiU2Vjb25kXCIpO1xuXHRcdHRoaXMuaXRlbXMucHVzaChcIlBhc3NhcG9ydFwiKTtcblx0fVxuXHRcblx0cHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZFwiYCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9ub3BlbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEcm9wIERvd24gb3BlbmVkLlwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25jbG9zZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEcm9wIERvd24gY2xvc2VkLlwiKTtcblx0fVxuXHRcblx0cHVibGljIHNob3dPcHRpb25zKCkge1xuXHRcdGNvbnNvbGUubG9nKFwib2tcIik7XG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMSB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAyIHt2aXNpYmlsaXR5OiB2aXNpYmxlfVwiKTtcblx0fVxuXHRcbiAgICBwdWJsaWMgb25TZWxlY3RTaW5nbGVUYXAoKSB7XG5cdFx0dGhpcy5pc1NpbmdsZU1vZGUgPSB0cnVlO1xuICAgICAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBcInNpbmdsZVwiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRTZWxlY3Rpb24oY29udGV4dCkge1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInN0cmluZ0tleVwiLCBcIlN0cmluZyB2YWx1ZVwiKTsgIC8vIFdyaXRpbmdcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuXHRcdGxldCBzZXNzaW9uID0gYmdodHRwLnNlc3Npb24oXCJpbWFnZS11cGxvYWRcIik7XG4gICAgICAgIGNvbnRleHRcbiAgICAgICAgLmF1dGhvcml6ZSgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xuXHRcdFx0dGhhdC5pbWFnZVNyYyA9IHNlbGVjdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0aW9uWzBdIDogbnVsbDtcblx0XHRcdHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XG5cblx0XHRcdHRoYXQudXBsb2FkKFwiaHR0cDovL2h0dHBiaW4ub3JnL3Bvc3RcIiwgdGhhdC5pbWFnZVNyY1snX2FuZHJvaWQnXSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG5cdH1cblx0XG5cdHB1YmxpYyB0YWtlUGljdHVyZSgpIHtcblx0XHRjb25zb2xlLmxvZyhcInN0YXJ0XCIpO1xuXHRcdENhbWVyYS50YWtlUGljdHVyZSh7c2F2ZVRvR2FsbGVyeTogZmFsc2UsIHdpZHRoOiAzMjAsIGhlaWdodDogMjQwIH0pLnRoZW4ocGljdHVyZSA9PiB7XG5cdFx0XHRsZXQgZm9sZGVyID0gRmlsZVN5c3RlbS5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG5cdFx0XHRsZXQgcGF0aCA9IEZpbGVTeXN0ZW0ucGF0aC5qb2luKGZvbGRlci5wYXRoLCAobmV3IERhdGUoKSkgKyBcIi5wbmdcIik7XG5cdFx0XHRpbWFnZVNvdXJjZU1vZHVsZS5mcm9tQXNzZXQocGljdHVyZSlcblx0XHRcdC50aGVuKGltYWdlU291cmNlID0+IHtcblx0XHRcdFx0IGxldCBzYXZlZCA9IGltYWdlU291cmNlLnNhdmVUb0ZpbGUocGF0aCwgXCJwbmdcIik7XG5cdFx0XHRcdCBjb25zb2xlLmxvZyhzYXZlZCk7XG5cdFx0XHRcdCB0aGlzLmltYWdlU2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHQgdGhpcy5pbWFnZVNyYyA9IHBhdGg7XG5cdFx0XHRcdCB0aGlzLmltYWdlU2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHQgdGhpcy51cGxvYWQoXCJodHRwOi8vaHR0cGJpbi5vcmcvcG9zdFwiLCBwYXRoKTtcblx0XHRcdCB9KTtcblx0XHR9KTtcblx0fVxuXHRwdWJsaWMgZXh0cmFjdEltYWdlTmFtZShmaWxlVXJpKSB7XG5cdFx0dmFyIHBhdHRlcm4gPSAvW14vXSokLztcblx0XHR2YXIgaW1hZ2VOYW1lID0gZmlsZVVyaS5tYXRjaChwYXR0ZXJuKTtcblx0XG5cdFx0cmV0dXJuIGltYWdlTmFtZTtcblx0fVxuXHRwdWJsaWMgdXBsb2FkKGRlc3RpbmF0aW9uOiBzdHJpbmcsIGZpbGVwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGxldCBzZXNzaW9uID0gYmdodHRwLnNlc3Npb24oXCJpbWFnZS11cGxvYWRcIik7XG5cdFx0XHRsZXQgaW1hZ2VOYW1lID0gdGhpcy5leHRyYWN0SW1hZ2VOYW1lKGZpbGVwYXRoKTtcblxuXHRcdFx0dmFyIHJlcXVlc3QgPSB7XG5cdFx0XHRcdHVybDogXCJodHRwOi8vaHR0cGJpbi5vcmcvcG9zdFwiLFxuXHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcblx0XHRcdFx0XHRcIkZpbGUtTmFtZVwiOiBpbWFnZU5hbWVcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwieyAndXBsb2FkaW5nJzogXCIgKyBpbWFnZU5hbWUgKyBcIiB9XCJcblx0XHRcdH07XG5cdFx0XHRsZXQgdGFzayA9IHNlc3Npb24udXBsb2FkRmlsZShmaWxlcGF0aCwgcmVxdWVzdCk7XG5cdFx0XHR0YXNrLm9uKFwiY29tcGxldGVcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiY29tcGxldGVcIik7XG5cdFx0XHR9KTtcblx0XHRcdHRhc2sub24oXCJlcnJvclwiLCBldmVudCA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcblx0XHRcdH0pO1xuXHR9XG59Il19