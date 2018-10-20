import {TestBed, async, ComponentFixture} from "@angular/core/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";

import {Ng2Webstorage} from "ngx-webstorage";

import {PaymentsService} from "./services/payments.service";
import {AppComponent} from "./app.component";
import {PaymentFormComponent} from "./payment-form/payment-form.component";
import {PaymentItemComponent} from "./payment-item/payment-item.component";
import {PaymentComponent} from "./payment/payment.component";

describe("AppComponent", () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                PaymentFormComponent,
                PaymentItemComponent,
                PaymentComponent,
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,

                MatInputModule,
                MatCheckboxModule,
                MatButtonModule,
                MatIconModule,

                Ng2Webstorage,
            ],
            providers: [
                PaymentsService,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
    }));
    it("created", async(() => {
        expect(component).toBeTruthy();
    }));
    it("calculated sum is correct", async(() => {
        const paymentsService = TestBed.get(PaymentsService);
        component.items = paymentsService.getDefault();
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector(".app-footer-sum").textContent).toEqual("14,320");
    }));
});
