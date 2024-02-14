import { BookingStatus } from "./booking-status.model";
import { House } from "./house.model";
import { Pago } from "./pago.model";
import { User} from "./user.model";

export interface Booking {
        id: number;

        fechaEntrada: Date;
        fechaSalida: Date,
        personas: number;
        estatus: BookingStatus;
        pago: Pago;
        
        destino: string;
        
        usuario: User;
        casa: House;
}