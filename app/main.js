"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CreditCardView", function () { return require("nativescript-stripe").CreditCardView; });
var app = require("application");
var platform = require("platform");
app.on(app.launchEvent, function (args) {
    if (platform.isIOS) {
        STPPaymentConfiguration.sharedConfiguration().publishableKey = "yourApiKey";
    }
});
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwR0FBMEc7QUFDMUcsMERBQTRFO0FBRTVFLDJDQUF5QztBQUV6QywwRUFBd0U7QUFDeEUsa0NBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsY0FBYyxFQUE3QyxDQUE2QyxDQUFDLENBQUM7QUFFdkYsaUNBQW1DO0FBQ25DLG1DQUFxQztBQU1yQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBQyxJQUFJO0lBQ3pCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLHVCQUF1QixDQUFDLG1CQUFtQixFQUFFLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQztJQUNoRixDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFHSCxzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXHJcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxucmVnaXN0ZXJFbGVtZW50KFwiQ3JlZGl0Q2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdHJpcGVcIikuQ3JlZGl0Q2FyZFZpZXcpO1xyXG5cclxuaW1wb3J0ICogYXMgYXBwIGZyb20gJ2FwcGxpY2F0aW9uJztcclxuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSBcInBsYXRmb3JtXCI7XHJcblxyXG5kZWNsYXJlIGNvbnN0IFNUUFBheW1lbnRDb25maWd1cmF0aW9uO1xyXG5cclxuXHJcblxyXG5hcHAub24oYXBwLmxhdW5jaEV2ZW50LCAoYXJncykgPT4ge1xyXG4gICAgaWYgKHBsYXRmb3JtLmlzSU9TKSB7XHJcbiAgICAgICAgU1RQUGF5bWVudENvbmZpZ3VyYXRpb24uc2hhcmVkQ29uZmlndXJhdGlvbigpLnB1Ymxpc2hhYmxlS2V5ID0gXCJ5b3VyQXBpS2V5XCI7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG4iXX0=