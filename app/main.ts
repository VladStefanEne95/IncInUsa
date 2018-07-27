// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("CreditCardView", () => require("nativescript-stripe").CreditCardView);

import * as app from 'application';
import * as platform from "platform";

declare const STPPaymentConfiguration;



app.on(app.launchEvent, (args) => {
    if (platform.isIOS) {
        STPPaymentConfiguration.sharedConfiguration().publishableKey = "yourApiKey";
    }
});


platformNativeScriptDynamic().bootstrapModule(AppModule);
