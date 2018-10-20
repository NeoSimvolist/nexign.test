import {TestBed, async} from "@angular/core/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    }));
    it("should create the app", async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    // it(`should have as title 'nexign'`, async(() => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app.title).toEqual("nexign");
    // }));
    // it("should render title in a h1 tag", async(() => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector("h1").textContent).toContain("Welcome to nexign!");
    // }));
});
