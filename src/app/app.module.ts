import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

import {Ng2Webstorage} from "ngx-webstorage";

import {AppComponent} from "./app.component";
import {PaymentFormComponent} from "./payment-form/payment-form.component";
import {PaymentItemComponent} from "./payment-item/payment-item.component";
import {PaymentComponent} from "./payment/payment.component";
import {PaymentsService} from "./services/payments.service";

@NgModule({
    declarations: [
        AppComponent,
        PaymentFormComponent,
        PaymentItemComponent,
        PaymentComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,

        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,

        Ng2Webstorage,
    ],
    providers: [
        PaymentsService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
