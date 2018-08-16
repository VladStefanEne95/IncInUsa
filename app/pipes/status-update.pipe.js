"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StatusUpdate = /** @class */ (function () {
    function StatusUpdate() {
    }
    StatusUpdate.prototype.transform = function (value) {
        if (value) {
            var date = new Date();
            var isoDate = date.toISOString().substring(0, 10);
            isoDate = isoDate.replace(/-/g, '\/');
            if (isoDate === value.substring(0, 10)) {
                return value.split(" ")[1].substring(0, 5) + " " + value.split(" ")[2];
            }
            else {
                return isoDate;
            }
        }
    };
    StatusUpdate = __decorate([
        core_1.Pipe({ name: 'statusUpdate' })
    ], StatusUpdate);
    return StatusUpdate;
}());
exports.StatusUpdate = StatusUpdate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLXVwZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLXVwZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBR3BEO0lBQUE7SUFhQSxDQUFDO0lBWkMsZ0NBQVMsR0FBVCxVQUFVLEtBQVU7UUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDaEIsQ0FBQztRQUNGLENBQUM7SUFDQSxDQUFDO0lBWlUsWUFBWTtRQUR4QixXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFDLENBQUM7T0FDaEIsWUFBWSxDQWF4QjtJQUFELG1CQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7bmFtZTogJ3N0YXR1c1VwZGF0ZSd9KVxyXG5leHBvcnQgY2xhc3MgU3RhdHVzVXBkYXRlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0bGV0IGlzb0RhdGUgPSBkYXRlLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcclxuXHRcdGlzb0RhdGUgPSBpc29EYXRlLnJlcGxhY2UoLy0vZywgJ1xcLycpO1xyXG5cdFx0aWYgKGlzb0RhdGUgPT09IHZhbHVlLnN1YnN0cmluZygwLCAxMCkpe1xyXG5cdFx0XHRyZXR1cm4gIHZhbHVlLnNwbGl0KFwiIFwiKVsxXS5zdWJzdHJpbmcoMCwgNSkgKyBcIiBcIiArIHZhbHVlLnNwbGl0KFwiIFwiKVsyXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBpc29EYXRlO1xyXG5cdFx0fVxyXG5cdH1cclxuICB9XHJcbn0iXX0=