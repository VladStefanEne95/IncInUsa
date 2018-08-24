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
var dialogs = require("ui/dialogs");
var appSettings = require("application-settings");
var FileuploadComponent = /** @class */ (function () {
    function FileuploadComponent(page, UploadService) {
        this.page = page;
        this.UploadService = UploadService;
        this.selectedIndex = 1;
        this.isSingleMode = true;
        this.imageSelected = false;
        this.thumbSize = 80;
        this.previewSize = 250;
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
        var _this = this;
        dialogs.action({
            message: "Upload ID",
            cancelButtonText: "Cancel",
            actions: ["Take Photo", "Chose from Library"]
        }).then(function (result) {
            if (result == "Take Photo") {
                _this.takePicture();
            }
            else if (result == "Chose from Library") {
                _this.onSelectSingleTap();
            }
        });
    };
    FileuploadComponent.prototype.hideOptions = function () {
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
            _this.upload(_this.imageSrc['_android']);
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
                _this.upload(path);
            });
        });
    };
    FileuploadComponent.prototype.upload = function (filepath) {
        this.UploadService.uploadImage(filepath);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0Q0FBK0M7QUFHL0MscURBQXVEO0FBQ3ZELHNEQUF3RDtBQUN4RCx3Q0FBMEM7QUFFMUMsZ0NBQTZCO0FBRTdCLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFDbkUseUVBQXVFO0FBQ3ZFLG9DQUFxQztBQUVyQyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQU9sRDtJQWVDLDZCQUFvQixJQUFVLEVBQVUsYUFBNEI7UUFBaEQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBYjdELGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBS3pCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDMUIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFNekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVFLHNDQUFRLEdBQVI7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENB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SyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ00sb0NBQU0sR0FBYixVQUFjLFFBQWdCO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFuR1csbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO3lDQWdCeUIsV0FBSSxFQUF5Qiw4QkFBYTtPQWZ4RCxtQkFBbUIsQ0FvRy9CO0lBQUQsMEJBQUM7Q0FBQSxBQXBHRCxJQW9HQztBQXBHWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIENhbWVyYSAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcclxuaW1wb3J0IHsgSW1hZ2VGb3JtYXQgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcclxuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0ICogYXMgRmlsZVN5c3RlbSBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5jb25zdCBpbWFnZVNvdXJjZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiKTtcclxuaW1wb3J0IHsgVXBsb2FkU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdXBsb2FkL3VwbG9hZC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiXHJcblxyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkZpbGV1cGxvYWRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZpbGV1cGxvYWQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZXVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcblx0cHVibGljIHNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuXHJcbiAgICBpbWFnZVNyYzogYW55O1xyXG5cdGlzU2luZ2xlTW9kZTogYm9vbGVhbiA9IHRydWU7XHJcblx0aW1hZ2VTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdGh1bWJTaXplOiBudW1iZXIgPSA4MDtcclxuXHRwcmV2aWV3U2l6ZTogbnVtYmVyID0gMjUwO1xyXG5cdGRvY1R5cGUgOnN0cmluZztcclxuXHRkb2NOdW1iZXIgOm51bWJlcjtcclxuXHR1dWlkIDpzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBVcGxvYWRTZXJ2aWNlOiBVcGxvYWRTZXJ2aWNlKSB7XHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLml0ZW1zID0gW107XHJcblx0fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMiB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuXHRcdHRoaXMuaXRlbXMucHVzaChcIlNlY29uZFwiKTtcclxuXHRcdHRoaXMuaXRlbXMucHVzaChcIlBhc3NhcG9ydFwiKTtcclxuXHRcdHRoaXMudXVpZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInV1aWRcIiwgXCJcIik7XHJcblx0XHRDYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbmNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZFwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9ub3BlbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBvcGVuZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbmNsb3NlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIGNsb3NlZC5cIik7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBzaG93T3B0aW9ucygpIHtcclxuXHRcdGRpYWxvZ3MuYWN0aW9uKHtcclxuXHRcdFx0bWVzc2FnZTogXCJVcGxvYWQgSURcIixcclxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuXHRcdFx0YWN0aW9uczogW1wiVGFrZSBQaG90b1wiLCBcIkNob3NlIGZyb20gTGlicmFyeVwiXVxyXG5cdFx0fSkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHRpZiAocmVzdWx0ID09IFwiVGFrZSBQaG90b1wiKXtcclxuXHRcdFx0XHR0aGlzLnRha2VQaWN0dXJlKCk7XHJcblx0XHRcdH0gZWxzZSBpZihyZXN1bHQgPT0gXCJDaG9zZSBmcm9tIExpYnJhcnlcIil7XHJcblx0XHRcdFx0dGhpcy5vblNlbGVjdFNpbmdsZVRhcCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHRwdWJsaWMgaGlkZU9wdGlvbnMoKSB7XHJcblx0fVxyXG5cdFxyXG4gICAgcHVibGljIG9uU2VsZWN0U2luZ2xlVGFwKCkge1xyXG5cdFx0dGhpcy5pc1NpbmdsZU1vZGUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XHJcblx0XHRsZXQgc2Vzc2lvbiA9IGJnaHR0cC5zZXNzaW9uKFwiaW1hZ2UtdXBsb2FkXCIpO1xyXG4gICAgICAgIGNvbnRleHRcclxuICAgICAgICAuYXV0aG9yaXplKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChzZWxlY3Rpb24pID0+IHtcclxuXHRcdFx0dGhpcy5pbWFnZVNyYyA9IHNlbGVjdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0aW9uWzBdIDogbnVsbDtcclxuXHRcdFx0dGhpcy5pbWFnZVNlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0Ly9jaGVjayBmb3IgaW9zXHJcblx0XHRcdHRoaXMudXBsb2FkKHRoaXMuaW1hZ2VTcmNbJ19hbmRyb2lkJ10pO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgdGFrZVBpY3R1cmUoKSB7XHJcblx0XHRDYW1lcmEudGFrZVBpY3R1cmUoe3NhdmVUb0dhbGxlcnk6IGZhbHNlLCB3aWR0aDogMzIwLCBoZWlnaHQ6IDI0MCB9KS50aGVuKHBpY3R1cmUgPT4ge1xyXG5cdFx0XHRsZXQgZm9sZGVyID0gRmlsZVN5c3RlbS5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XHJcblx0XHRcdGxldCBwYXRoID0gRmlsZVN5c3RlbS5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIChuZXcgRGF0ZSgpKSArIFwiLnBuZ1wiKTtcclxuXHRcdFx0aW1hZ2VTb3VyY2VNb2R1bGUuZnJvbUFzc2V0KHBpY3R1cmUpXHJcblx0XHRcdC50aGVuKGltYWdlU291cmNlID0+IHtcclxuXHRcdFx0XHQgbGV0IHNhdmVkID0gaW1hZ2VTb3VyY2Uuc2F2ZVRvRmlsZShwYXRoLCBcInBuZ1wiKTtcclxuXHRcdFx0XHQgdGhpcy5pbWFnZVNlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHQgdGhpcy5pbWFnZVNyYyA9IHBhdGg7XHJcblx0XHRcdFx0IHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdFx0IHRoaXMudXBsb2FkKHBhdGgpO1xyXG5cdFx0XHQgfSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cHVibGljIHVwbG9hZChmaWxlcGF0aDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLlVwbG9hZFNlcnZpY2UudXBsb2FkSW1hZ2UoZmlsZXBhdGgpO1xyXG5cdH1cclxufSJdfQ==