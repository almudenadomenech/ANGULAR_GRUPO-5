import { Pago } from "./pago.mdel";

export interface Booking {

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
}