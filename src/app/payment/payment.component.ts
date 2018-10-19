import {Component, Input, Output, EventEmitter} from "@angular/core";

import {PaymentModel} from "../models/payment.model";
import {BaseComponent} from "../classes/base-component";
import {MONTHS_RUS} from "../classes/months";

export interface RemoveEvent {
    index: number;
}

export interface ChangeEvent {
    index: number;
    model: PaymentModel;
}

@Component({
    selector: "app-payment",
    templateUrl: "./payment.component.html",
    styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent extends BaseComponent {

    @Input()
    items: PaymentModel[];

    @Output()
    removeEvent = new EventEmitter<RemoveEvent>();

    @Output()
    changeEvent = new EventEmitter<ChangeEvent>();

    get monthNames() {
        return MONTHS_RUS;
    }

    itemChange(model: PaymentModel, index: number) {
        this.changeEvent.emit({model, index});
    }

    itemRemove(index: number) {
        this.removeEvent.emit({index});
    }

    trackByFn(index, item) {
        return index;
    }
}
