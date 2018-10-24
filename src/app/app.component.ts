import * as moment from "moment";

import {takeUntil} from "rxjs/internal/operators";
import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from "@angular/core";

import {BaseComponent} from "./classes/base-component";
import {PaymentsService} from "./services/payments.service";
import {PaymentModel} from "./models/payment.model";
import {RemoveEvent, ChangeEvent} from "./payment/payment.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy {

    items: PaymentModel[] = [];
    sum: number = 0;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private paymentsService: PaymentsService,
    ) {
        super();
    }

    ngOnInit() {
        this.paymentsService.getAll()
            .pipe(
                takeUntil(this.destroy$),
            )
            .subscribe(items => {
                this.items = items || this.paymentsService.getDefault();
                this.calculateSum();
            });
    }

    addEvent(model: PaymentModel) {
        this.items.push(model);
        this.calculateSum();
        this.changeDetectorRef.detectChanges();
        this.paymentsService.putAll(this.items);
    }

    changeEvent(event: ChangeEvent) {
        this.calculateSum();
        this.paymentsService.putAll(this.items);
    }

    removeEvent(event: RemoveEvent) {
        this.items.splice(event.index, 1);
        this.calculateSum();
        this.paymentsService.putAll(this.items);
    }

    private calculateSum() {
        this.sum = PaymentsService.calculateSum(this.items);
    }
}
