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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0Q0FBK0M7QUFHL0MscURBQXVEO0FBQ3ZELHNEQUF3RDtBQUN4RCx3Q0FBMEM7QUFFMUMsZ0NBQTZCO0FBRTdCLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUE7QUFDbEUseUVBQXNFO0FBRXRFLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBT2xEO0lBZUMsNkJBQW9CLElBQVUsRUFBVSxhQUE0QjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFiN0Qsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFLekIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDNUIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQU16QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUUsc0NBQVEsR0FBUjtRQUNGLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHNDQUFRLEdBQWYsVUFBZ0IsSUFBbUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBbUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxvQ0FBTSxHQUFiO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxxQ0FBTyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSx5Q0FBVyxHQUFsQjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFHTSx5Q0FBVyxHQUFsQjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFUywrQ0FBaUIsR0FBeEI7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQUksRUFBRSxRQUFRO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLDRDQUFjLEdBQXRCLFVBQXVCLE9BQU87UUFBOUIsaUJBZUY7UUFkQSxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU87YUFDTixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLFNBQVM7WUFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDM0QsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsZUFBZTtZQUNmLEtBQUksQ0FBQyxNQUFNLENBQUMsaUNBQWlDLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTSx5Q0FBVyxHQUFsQjtRQUFBLGlCQWFDO1FBWkEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ2hGLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakQsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUNwRSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO2lCQUNuQyxJQUFJLENBQUMsVUFBQSxXQUFXO2dCQUNmLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ00sb0NBQU0sR0FBYixVQUFjLFdBQW1CLEVBQUUsUUFBZ0I7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUEvRlcsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO3lDQWdCeUIsV0FBSSxFQUF5Qiw4QkFBYTtPQWZ4RCxtQkFBbUIsQ0FnRy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWhHRCxJQWdHQztBQWhHWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIENhbWVyYSAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcclxuaW1wb3J0IHsgSW1hZ2VGb3JtYXQgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcclxuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0ICogYXMgRmlsZVN5c3RlbSBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5jb25zdCBpbWFnZVNvdXJjZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiKVxyXG5pbXBvcnQgeyBVcGxvYWRTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy91cGxvYWQvdXBsb2FkLnNlcnZpY2UnXHJcblxyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkZpbGV1cGxvYWRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZpbGV1cGxvYWQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZXVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcblx0cHVibGljIHNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuXHJcbiAgICBpbWFnZVNyYzogYW55O1xyXG5cdGlzU2luZ2xlTW9kZTogYm9vbGVhbiA9IHRydWU7XHJcblx0aW1hZ2VTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdGh1bWJTaXplOiBudW1iZXIgPSA4MDtcclxuXHRwcmV2aWV3U2l6ZTogbnVtYmVyID0gMjAwO1xyXG5cdGRvY1R5cGUgOnN0cmluZztcclxuXHRkb2NOdW1iZXIgOm51bWJlcjtcclxuXHR1dWlkIDpzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBVcGxvYWRTZXJ2aWNlOiBVcGxvYWRTZXJ2aWNlKSB7XHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLml0ZW1zID0gW107XHJcblx0fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAyIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xyXG5cdFx0dGhpcy5pdGVtcy5wdXNoKFwiU2Vjb25kXCIpO1xyXG5cdFx0dGhpcy5pdGVtcy5wdXNoKFwiUGFzc2Fwb3J0XCIpO1xyXG5cdFx0dGhpcy51dWlkID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXVpZFwiLCBcIlwiKTtcclxuXHRcdENhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkXCJgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25vcGVuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIG9wZW5lZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uY2xvc2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEcm9wIERvd24gY2xvc2VkLlwiKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIHNob3dPcHRpb25zKCkge1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMSB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjc3RlcDIge3Zpc2liaWxpdHk6IHZpc2libGV9XCIpO1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIi5oaWRlLWJvcmRlciB7Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2RlZGVkZX1cIik7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIGhpZGVPcHRpb25zKCkge1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMiB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjc3RlcDEge3Zpc2liaWxpdHk6IHZpc2libGV9XCIpO1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIi5oaWRlLWJvcmRlciB7Ym9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGV9XCIpO1xyXG5cdH1cclxuXHRcclxuICAgIHB1YmxpYyBvblNlbGVjdFNpbmdsZVRhcCgpIHtcclxuXHRcdHRoaXMuaXNTaW5nbGVNb2RlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIG1vZGU6IFwic2luZ2xlXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRTZWxlY3Rpb24oY29udGV4dCkge1xyXG5cdFx0bGV0IHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKTtcclxuICAgICAgICBjb250ZXh0XHJcbiAgICAgICAgLmF1dGhvcml6ZSgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XHJcblx0XHRcdHRoaXMuaW1hZ2VTcmMgPSBzZWxlY3Rpb24ubGVuZ3RoID4gMCA/IHNlbGVjdGlvblswXSA6IG51bGw7XHJcblx0XHRcdHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdC8vY2hlY2sgZm9yIGlvc1xyXG5cdFx0XHR0aGlzLnVwbG9hZChcImh0dHA6Ly9hZjJiNGY2ZC5uZ3Jvay5pby91cGxvYWRcIiwgdGhpcy5pbWFnZVNyY1snX2FuZHJvaWQnXSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyB0YWtlUGljdHVyZSgpIHtcclxuXHRcdENhbWVyYS50YWtlUGljdHVyZSh7c2F2ZVRvR2FsbGVyeTogZmFsc2UsIHdpZHRoOiAzMjAsIGhlaWdodDogMjQwIH0pLnRoZW4ocGljdHVyZSA9PiB7XHJcblx0XHRcdGxldCBmb2xkZXIgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcclxuXHRcdFx0bGV0IHBhdGggPSBGaWxlU3lzdGVtLnBhdGguam9pbihmb2xkZXIucGF0aCwgKG5ldyBEYXRlKCkpICsgXCIucG5nXCIpO1xyXG5cdFx0XHRpbWFnZVNvdXJjZU1vZHVsZS5mcm9tQXNzZXQocGljdHVyZSlcclxuXHRcdFx0LnRoZW4oaW1hZ2VTb3VyY2UgPT4ge1xyXG5cdFx0XHRcdCBsZXQgc2F2ZWQgPSBpbWFnZVNvdXJjZS5zYXZlVG9GaWxlKHBhdGgsIFwicG5nXCIpO1xyXG5cdFx0XHRcdCB0aGlzLmltYWdlU2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdCB0aGlzLmltYWdlU3JjID0gcGF0aDtcclxuXHRcdFx0XHQgdGhpcy5pbWFnZVNlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHQgdGhpcy51cGxvYWQoXCJodHRwOi8vYWYyYjRmNmQubmdyb2suaW8vdXBsb2FkXCIsIHBhdGgpO1xyXG5cdFx0XHQgfSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cHVibGljIHVwbG9hZChkZXN0aW5hdGlvbjogc3RyaW5nLCBmaWxlcGF0aDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLlVwbG9hZFNlcnZpY2UudXBsb2FkSW1hZ2UoZGVzdGluYXRpb24sIGZpbGVwYXRoKTtcclxuXHR9XHJcbn0iXX0=