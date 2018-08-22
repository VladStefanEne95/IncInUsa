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
            console.log(value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLXVwZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLXVwZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBR3BEO0lBQUE7SUFjQSxDQUFDO0lBYkMsZ0NBQVMsR0FBVCxVQUFVLEtBQVU7UUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDdkMsTUFBTSxDQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNoQixDQUFDO1FBQ0YsQ0FBQztJQUNBLENBQUM7SUFiVSxZQUFZO1FBRHhCLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUMsQ0FBQztPQUNoQixZQUFZLENBY3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtuYW1lOiAnc3RhdHVzVXBkYXRlJ30pXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNVcGRhdGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IHN0cmluZyB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRsZXQgaXNvRGF0ZSA9IGRhdGUudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApO1xyXG5cdFx0aXNvRGF0ZSA9IGlzb0RhdGUucmVwbGFjZSgvLS9nLCAnXFwvJyk7XHJcblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblx0XHRpZiAoaXNvRGF0ZSA9PT0gdmFsdWUuc3Vic3RyaW5nKDAsIDEwKSl7XHJcblx0XHRcdHJldHVybiAgdmFsdWUuc3BsaXQoXCIgXCIpWzFdLnN1YnN0cmluZygwLCA1KSArIFwiIFwiICsgdmFsdWUuc3BsaXQoXCIgXCIpWzJdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGlzb0RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG4gIH1cclxufSJdfQ==