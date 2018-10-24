import {TestBed, async} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";

import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";

import {Ng2Webstorage} from "ngx-webstorage";

import {PaymentsService} from "../services/payments.service";
import {PaymentItemComponent} from "../payment-item/payment-item.component";
import {PaymentComponent} from "./payment.component";

describe("PaymentComponent", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PaymentItemComponent,
                PaymentComponent,
            ],
            imports: [
                FormsModule,

                MatCheckboxModule,
                MatIconModule,

                Ng2Webstorage,
            ],
            providers: [
                PaymentsService,
            ],
        }).compileComponents();
    }));
    it("created", async(() => {
        const fixture = TestBed.createComponent(PaymentComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    }));
});
