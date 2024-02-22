import { User } from "./user.model";

export interface Payment {

    creditCard: boolean;
    biZum: boolean;
    payPal: boolean;
    user: User;
}