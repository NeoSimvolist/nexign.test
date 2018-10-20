import {TestBed, async} from "@angular/core/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

import {PaymentFormComponent} from "./payment-form.component";

describe("PaymentFormComponent", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PaymentFormComponent,
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,

                MatInputModule,
                MatButtonModule,
            ],
        }).compileComponents();
    }));
    it("should create the app", async(() => {
        const fixture = TestBed.createComponent(PaymentFormComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    }));
});
