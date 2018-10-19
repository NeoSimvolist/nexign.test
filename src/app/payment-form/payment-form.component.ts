import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

import {PaymentModel} from "../models/payment.model";
import {BaseComponent} from "../classes/base-component";

@Component({
    selector: "app-payment-form",
    templateUrl: "./payment-form.component.html",
    styleUrls: ["./payment-form.component.scss"],
})
export class PaymentFormComponent extends BaseComponent implements OnInit {

    form: FormGroup;

    @Output()
    addEvent = new EventEmitter<PaymentModel>();

    constructor(
        private formBuilder: FormBuilder,
    ) {
        super();
    }

    get nameControl() {
        return this.form.get("name") as FormControl;
    }

    get amountControl() {
        return this.form.get("amount") as FormControl;
    }

    ngOnInit() {
        this.form = this.createForm();
    }

    addSubmit() {
        if (this.form.invalid) {
            return;
        }

        const payment = new PaymentModel();
        payment.name = this.nameControl.value;
        payment.amount = this.amountControl.value;
        this.addEvent.emit(payment);

        // reset
        this.form.reset();
    }

    private createForm() {
        return this.formBuilder.group({
            name: new FormControl(null, [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(40)
            ]),
            amount: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[0-9]+$/),
                Validators.min(0),
            ]),
        });
    }
}
