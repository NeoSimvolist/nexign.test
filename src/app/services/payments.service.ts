import {of} from "rxjs/index";
import {Injectable} from "@angular/core";

import {LocalStorageService} from "ngx-webstorage";

import {PaymentModel} from "../models/payment.model";

@Injectable()
export class PaymentsService {

    static readonly PAYMENTS_STORAGE_KEY = "payments";

    constructor(
        private localStorageService: LocalStorageService,
    ) {
    }

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
                payments: [true, true, true, false, false, false, false, false, false, false, false, false],
            },
            {
                name: "Мобильный телефон",
                amount: 160,
                payments: [false, false, false, false, false, false, false, true, true, false, false, false],
            },
        ];
    }

    getAll() {
        return of(this.localStorageService.retrieve(PaymentsService.PAYMENTS_STORAGE_KEY));
    }

    putAll(payments) {
        this.localStorageService.store(PaymentsService.PAYMENTS_STORAGE_KEY, payments);
    }
}
