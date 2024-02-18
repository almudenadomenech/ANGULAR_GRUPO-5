import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

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
  roomNumber: number; // Número de la cas
  totalPrice: number; // Precio total de la reserva
  phoneNumber: string; // Número de teléfono del cliente
  email: string; // Correo electrónico del cliente
  notes: string; // Notas adicionales sobre la reserva
  // Otros campos relevantes
}
@NgModule({
  imports: [
    CommonModule // Agrega CommonModule aquí
  ],
  declarations: [
    BookingListComponent
  ],
  exports: [
    BookingListComponent
  ]
})
export class BookingListModule { }