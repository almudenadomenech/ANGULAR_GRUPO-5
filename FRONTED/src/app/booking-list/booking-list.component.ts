import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para realizar solicitudes HTTP

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {
  // Propiedades y métodos para el componente
  bookings: Booking[] = []; // Inicializamos el array de bookings
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
  declarations: [BookingListComponent],
  imports: [
    CommonModule,
    HttpClientModule // Agregamos HttpClientModule al array de imports
  ],
  exports: [BookingListComponent]
})
export class BookingListModule { }
