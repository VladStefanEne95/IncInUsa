"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
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
    function FileuploadComponent(page, UploadService, router) {
        this.page = page;
        this.UploadService = UploadService;
        this.router = router;
        this.selectedIndex = 1;
        this.isSingleMode = true;
        this.imageSelected = false;
        this.thumbSize = 80;
        this.previewSize = 250;
        page.actionBarHidden = true;
        this.items = [];
    }
    FileuploadComponent.prototype.ngOnInit = function () {
        this.uploadPath = "";
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
            //this.upload(this.imageSrc['_android']);
            _this.uploadPath = _this.imageSrc['_android'];
        }).catch(function (e) {
            console.log(e);
        });
    };
    FileuploadComponent.prototype.takePicture = function () {
        var _this = this;
        Camera.takePicture({ saveToGallery: false, width: 320, height: 240 }).then(function (picture) {
            var folder = FileSystem.knownFolders.documents();
            var path = FileSystem.path.join(folder.path, (".png"));
            imageSourceModule.fromAsset(picture)
                .then(function (imageSource) {
                var saved = imageSource.saveToFile(path, "png");
                _this.imageSelected = true;
                _this.imageSrc = path;
                _this.imageSelected = true;
                //this.upload(path);
                _this.uploadPath = path;
            });
        });
    };
    FileuploadComponent.prototype.next = function () {
        if (this.docNumber && this.uploadPath != "") {
            this.UploadService.uploadImage(this.uploadPath, this.uuid);
            this.router.navigate(["/review"]);
        }
        else {
            alert("Please upload a photo and type in the document number");
        }
    };
    FileuploadComponent = __decorate([
        core_1.Component({
            selector: "Fileupload",
            moduleId: module.id,
            templateUrl: "./fileupload.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, upload_service_1.UploadService, router_1.Router])
    ], FileuploadComponent);
    return FileuploadComponent;
}());
exports.FileuploadComponent = FileuploadComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFDekMsNENBQStDO0FBRy9DLHFEQUF1RDtBQUN2RCxzREFBd0Q7QUFDeEQsd0NBQTBDO0FBRTFDLGdDQUE2QjtBQUU3QixJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQ25FLHlFQUF1RTtBQUN2RSxvQ0FBcUM7QUFFckMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFnQkMsNkJBQW9CLElBQVUsRUFBVSxhQUE0QixFQUFVLE1BQWM7UUFBeEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWRyRixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUt6QixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUM1QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBT3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRSxzQ0FBUSxHQUFSO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMs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IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBDYW1lcmEgIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmltcG9ydCB7IEltYWdlRm9ybWF0IH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XHJcbmltcG9ydCAqIGFzIGJnaHR0cCBmcm9tIFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtaHR0cFwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcbmltcG9ydCAqIGFzIEZpbGVTeXN0ZW0gZnJvbSBcImZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuY29uc3QgaW1hZ2VTb3VyY2VNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIik7XHJcbmltcG9ydCB7IFVwbG9hZFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3VwbG9hZC91cGxvYWQuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIlxyXG5cclxudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJGaWxldXBsb2FkXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9maWxldXBsb2FkLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGV1cGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG5cdHB1YmxpYyBzZWxlY3RlZEluZGV4ID0gMTtcclxuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8c3RyaW5nPjtcclxuXHJcblxyXG4gICAgaW1hZ2VTcmM6IGFueTtcclxuXHRpc1NpbmdsZU1vZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdGltYWdlU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHRodW1iU2l6ZTogbnVtYmVyID0gODA7XHJcblx0cHJldmlld1NpemU6IG51bWJlciA9IDI1MDtcclxuXHRkb2NUeXBlIDpzdHJpbmc7XHJcblx0ZG9jTnVtYmVyIDpudW1iZXI7XHJcblx0dXVpZCA6c3RyaW5nO1xyXG5cdHVwbG9hZFBhdGggOnN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIFVwbG9hZFNlcnZpY2U6IFVwbG9hZFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHRcdHRoaXMuaXRlbXMgPSBbXTtcclxuXHR9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLnVwbG9hZFBhdGggPSBcIlwiO1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMiB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuXHRcdHRoaXMuaXRlbXMucHVzaChcIlNlY29uZFwiKTtcclxuXHRcdHRoaXMuaXRlbXMucHVzaChcIlBhc3NhcG9ydFwiKTtcclxuXHRcdHRoaXMudXVpZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInV1aWRcIiwgXCJcIik7XHJcblx0XHRDYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbmNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZFwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9ub3BlbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBvcGVuZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbmNsb3NlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIGNsb3NlZC5cIik7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBzaG93T3B0aW9ucygpIHtcclxuXHRcdGRpYWxvZ3MuYWN0aW9uKHtcclxuXHRcdFx0bWVzc2FnZTogXCJVcGxvYWQgSURcIixcclxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuXHRcdFx0YWN0aW9uczogW1wiVGFrZSBQaG90b1wiLCBcIkNob3NlIGZyb20gTGlicmFyeVwiXVxyXG5cdFx0fSkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHRpZiAocmVzdWx0ID09IFwiVGFrZSBQaG90b1wiKXtcclxuXHRcdFx0XHR0aGlzLnRha2VQaWN0dXJlKCk7XHJcblx0XHRcdH0gZWxzZSBpZihyZXN1bHQgPT0gXCJDaG9zZSBmcm9tIExpYnJhcnlcIil7XHJcblx0XHRcdFx0dGhpcy5vblNlbGVjdFNpbmdsZVRhcCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHRwdWJsaWMgaGlkZU9wdGlvbnMoKSB7XHJcblx0fVxyXG5cdFxyXG4gICAgcHVibGljIG9uU2VsZWN0U2luZ2xlVGFwKCkge1xyXG5cdFx0dGhpcy5pc1NpbmdsZU1vZGUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XHJcblx0XHRsZXQgc2Vzc2lvbiA9IGJnaHR0cC5zZXNzaW9uKFwiaW1hZ2UtdXBsb2FkXCIpO1xyXG4gICAgICAgIGNvbnRleHRcclxuICAgICAgICAuYXV0aG9yaXplKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChzZWxlY3Rpb24pID0+IHtcclxuXHRcdFx0dGhpcy5pbWFnZVNyYyA9IHNlbGVjdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0aW9uWzBdIDogbnVsbDtcclxuXHRcdFx0dGhpcy5pbWFnZVNlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0Ly9jaGVjayBmb3IgaW9zXHJcblx0XHRcdC8vdGhpcy51cGxvYWQodGhpcy5pbWFnZVNyY1snX2FuZHJvaWQnXSk7XHJcblx0XHRcdHRoaXMudXBsb2FkUGF0aCA9IHRoaXMuaW1hZ2VTcmNbJ19hbmRyb2lkJ107XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyB0YWtlUGljdHVyZSgpIHtcclxuXHRcdENhbWVyYS50YWtlUGljdHVyZSh7c2F2ZVRvR2FsbGVyeTogZmFsc2UsIHdpZHRoOiAzMjAsIGhlaWdodDogMjQwIH0pLnRoZW4ocGljdHVyZSA9PiB7XHJcblx0XHRcdGxldCBmb2xkZXIgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcclxuXHRcdFx0bGV0IHBhdGggPSBGaWxlU3lzdGVtLnBhdGguam9pbihmb2xkZXIucGF0aCwgKFwiLnBuZ1wiKSk7XHJcblx0XHRcdGltYWdlU291cmNlTW9kdWxlLmZyb21Bc3NldChwaWN0dXJlKVxyXG5cdFx0XHQudGhlbihpbWFnZVNvdXJjZSA9PiB7XHJcblx0XHRcdFx0IGxldCBzYXZlZCA9IGltYWdlU291cmNlLnNhdmVUb0ZpbGUocGF0aCwgXCJwbmdcIik7XHJcblx0XHRcdFx0IHRoaXMuaW1hZ2VTZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdFx0IHRoaXMuaW1hZ2VTcmMgPSBwYXRoO1xyXG5cdFx0XHRcdCB0aGlzLmltYWdlU2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdCAvL3RoaXMudXBsb2FkKHBhdGgpO1xyXG5cdFx0XHRcdCB0aGlzLnVwbG9hZFBhdGggPSBwYXRoO1xyXG5cdFx0XHQgfSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZXh0KCkge1xyXG5cdFx0aWYgKHRoaXMuZG9jTnVtYmVyICYmIHRoaXMudXBsb2FkUGF0aCAhPSBcIlwiKSB7XHJcblx0XHRcdHRoaXMuVXBsb2FkU2VydmljZS51cGxvYWRJbWFnZSh0aGlzLnVwbG9hZFBhdGgsIHRoaXMudXVpZCk7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZXZpZXdcIl0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YWxlcnQoXCJQbGVhc2UgdXBsb2FkIGEgcGhvdG8gYW5kIHR5cGUgaW4gdGhlIGRvY3VtZW50IG51bWJlclwiKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iXX0=