export class PaymentModel {
    name: string;
    amount: number;
    payments: { [month: number]: boolean } = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
    };
}
