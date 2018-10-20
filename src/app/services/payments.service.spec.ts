import {map} from "rxjs/operators";
import {async, TestBed} from "@angular/core/testing";

import {Ng2Webstorage} from "ngx-webstorage";

import {PaymentsService} from "./payments.service";

describe("PaymentsService", () => {
    let paymentsService: PaymentsService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                Ng2Webstorage,
            ],
            providers: [
                PaymentsService,
            ],
        });
        paymentsService = TestBed.get(PaymentsService);
    }));

    it("created", () => {
        expect(paymentsService).toBeDefined();
    });

    it("putAll & getAll work fine", () => {

        const TEST_DATA = [
            {
                name: "Мобильный телефон",
                amount: 160,
                payments: [true, false, false, false, false, false, false, true, true, false, false, false],
            },
        ];

        paymentsService.putAll(TEST_DATA);
        paymentsService
            .getAll()
            .pipe(map(data => JSON.stringify(data)))
            .subscribe(data => expect(data).toBe(JSON.stringify(TEST_DATA)));
        paymentsService.putAll(null);
    });
});
