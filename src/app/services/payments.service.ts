import * as moment from "moment";

import {of} from "rxjs/index";
import {Injectable} from "@angular/core";

import {LocalStorageService} from "ngx-webstorage";

import {PaymentModel} from "../models/payment.model";

@Injectable()
export class PaymentsService {

    static readonly PAYMENTS_STORAGE_KEY = "payments";

    monthNames: string[];

    constructor(
        private localStorageService: LocalStorageService,
    ) {
        moment.locale("ru");
        this.monthNames = moment.monthsShort();
    }

    static calculateSum(items: PaymentModel[], year: number = null): number {
        const weights = PaymentsService.getMonthWeightsOfYear(year);
        let sum = 0;
        for (const item of items) {
            for (const monthNum of Object.keys(item.payments)) {
                if (item.payments[monthNum]) {
                    sum += parseFloat(String(item.amount)) * weights[monthNum];
                }
            }
        }
        return parseFloat(sum.toFixed(2));
    }

    static getMonthWeightsOfYear(year: number = null) {
        const monthWeights = [];
        let daysInYear = 0;
        for (let monthNum = 0; monthNum < 12; monthNum++) {
            const daysInMonth = year === null
                ? moment().month(monthNum).daysInMonth()
                : moment().year(year).month(monthNum).daysInMonth();
            monthWeights.push(daysInMonth);
            daysInYear += daysInMonth;
        }
        for (let monthNum = 0; monthNum < 12; monthNum++) {
            monthWeights[monthNum] = (monthWeights[monthNum] * 12) / daysInYear;
        }
        return monthWeights;
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
