import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent {
// Propiedades y métodos para el componente
}
export interface Booking {
  id: number;
  customerName: string;
  date: Date;
  startTime: string; // Hora de inicio de la reserva
  endTime: string; // Hora de fin de la reserva
  status: 'pending' | 'confirmed' | 'cancelled'; // Estado de la reserva
  roomNumber: number; // Número de la habitación reservada
  totalPrice: number; // Precio total de la reserva
  phoneNumber: string; // Número de teléfono del cliente
  email: string; // Correo electrónico del cliente
  notes: string; // Notas adicionales sobre la reserva
  // Otros campos relevantes
}
