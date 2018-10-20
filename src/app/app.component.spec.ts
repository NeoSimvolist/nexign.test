import {Injectable} from "@angular/core";
import {TestBed, async, ComponentFixture} from "@angular/core/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";

import {Ng2Webstorage} from "ngx-webstorage";

import {PaymentModel} from "./models/payment.model";
import {PaymentsService as PaymentsServiceBase} from "./services/payments.service";
import {AppComponent} from "./app.component";
import {PaymentFormComponent} from "./payment-form/payment-form.component";
import {PaymentItemComponent} from "./payment-item/payment-item.component";
import {PaymentComponent} from "./payment/payment.component";

@Injectable()
class PaymentsService extends PaymentsServiceBase {
    /**
     * changing value for independent testing
     * the amount should be 18,480
     */
    getDefault(): PaymentModel[] {
        return [
            {
                name: "Интернет",
                amount: 1000,
                payments: [true, true, false, false, false, false, false, false, false, false, false, false],
            },
            {
                name: "Домашний телефон",
                amount: 4000,
                payments: [true, true, true, false, false, false, true, false, false, false, false, false],
            },
            {
                name: "Мобильный телефон",
                amount: 160,
                payments: [true, false, false, false, false, false, false, true, true, false, false, false],
            },
        ];
    }
}

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
                {
                    provide: PaymentsServiceBase,
                    useClass: PaymentsService,
                },
            ],
        }).compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
    }));

    it("created", async(() => {
        expect(component).toBeDefined();
    }));

    it("calculated sum is correct", async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector(".app-footer-sum").textContent).toEqual("18,480");
    }));
});
