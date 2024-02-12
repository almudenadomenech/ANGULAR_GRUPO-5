import { Pago } from "./pago.mdel";
import { User } from "./user.model";

export interface Booking {
        id: string;
        fechaEntrada: Date;
        fechaSalida: Date,
        personas: {
            adultos: number;
            menores: number;
        },
        disponibilidad: boolean;
        pago: Pago;
        Mascotas: boolean;
        destino: string;
        user: User;
}