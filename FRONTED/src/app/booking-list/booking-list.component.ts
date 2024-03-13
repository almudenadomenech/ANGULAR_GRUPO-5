import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Booking } from '../interfaces/booking.model';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [RouterLink, HttpClientModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent implements OnInit{

  bookings: Booking [] = [];

  constructor(private httCliente: HttpClient){}
  ngOnInit(): void {
    this.httCliente.get<Booking[]>('http://localhost:3000/booking')
    .subscribe(bookings => this.bookings = bookings);
  }

}
