import { Pago } from "./pago.mdel";
import { User} from "./user.model";


export interface Booking {
    id: number;
    customerName: string;
    date: Date;
    startTime: string; // Hora de inicio de la reserva
    endTime: string; // Hora de fin de la reserva
    persons: {
        adultos: number;
        menores: number;
    },
    destination:string;
    user: User
    status: 'pending' | 'confirmed' | 'cancelled'; // Estado de la reserva
    roomNumber: number; // Número de la casa reservada
    totalPrice: number; // Precio total de la reserva
    phoneNumber: string; // Número de teléfono del cliente
    email: string; // Correo electrónico del cliente
    notes: string; // Notas adicionales sobre la reserva
    // Otros campos relevantes
  }
  