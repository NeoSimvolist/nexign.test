import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";

import {PaymentItemComponent} from "./payment-item.component";

describe("PaymentItemComponent", () => {
    let component: PaymentItemComponent;
    let fixture: ComponentFixture<PaymentItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PaymentItemComponent,
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,

                MatButtonModule,
                MatCheckboxModule,
                MatIconModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("created", () => {
        expect(component).toBeTruthy();
    });
});
