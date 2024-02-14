import { User } from "./user.model";

export interface Pago {

    tarjeta: boolean;
    biZum: boolean;
    payPal: boolean;
    usuario: User;
}