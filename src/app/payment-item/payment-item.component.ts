import {Component, OnInit, Input, ChangeDetectorRef, forwardRef} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

import {PaymentModel} from "../models/payment.model";
import {BaseComponent} from "../classes/base-component";

@Component({
    selector: "app-payment-item",
    templateUrl: "./payment-item.component.html",
    styleUrls: ["./payment-item.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PaymentItemComponent),
            multi: true
        }
    ],
})
export class PaymentItemComponent extends BaseComponent implements OnInit {

    model: PaymentModel;

    modelPaymentsKeys: string[];

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
    ) {
        super();
    }

    ngOnInit() {
    }

    change(value: boolean, key: number) {
        this.model.payments[key] = value;
        this.propagateChange(this.model);
    }

    writeValue(value: PaymentModel | null) {
        if (value === this.model) {
            return;
        }
        // clone model for immutable
        this.model = Object.assign(new PaymentModel(), value);
        this.modelPaymentsKeys = this.model ? Object.keys(this.model.payments) : [];
        this.changeDetectorRef.detectChanges();
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

    propagateChange = (_: any) => {
    };
}
