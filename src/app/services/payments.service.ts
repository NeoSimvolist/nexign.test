import {of} from "rxjs/index";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";

import {LocalStorageService} from "ngx-webstorage";

@Injectable()
export class PaymentsService {

    static readonly PAYMENTS_STORAGE_KEY = "payments";

    constructor(
        private localStorageService: LocalStorageService,
    ) {

    }

    getDefault() {
        return [
            {
                name: "Test",
                amount: 1000.5,
                payments: [false, false, false, false, false, false, false, false, false, false, false, false],
            },
            {
                name: "Магнит",
                amount: 4000.5,
                payments: [false, false, false, false, false, false, false, false, false, false, false, false],
            },
            {
                name: "Арбуз",
                amount: 160.5,
                payments: [false, false, false, false, false, false, false, false, false, false, false, false],
            },
        ];
    }

    getAll() {
        return of(this.localStorageService.retrieve(PaymentsService.PAYMENTS_STORAGE_KEY))
            .pipe(
                map(value => value || [])
            );
    }

    putAll(payments) {
        this.localStorageService.store(PaymentsService.PAYMENTS_STORAGE_KEY, payments || []);
    }
}
