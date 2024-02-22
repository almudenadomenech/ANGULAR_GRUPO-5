import { BookingStatus } from "./booking-status.model";
import { House } from "./house.model";
import { Payment } from "./pago.model";
import { User} from "./user.model";

export interface Booking {
        id: number;

        entryDate: Date;
        departureDate: Date,
        people: number;
        destination: string;
        
        user: User;
        house: House;
        payment: Payment;
        status: BookingStatus;

}