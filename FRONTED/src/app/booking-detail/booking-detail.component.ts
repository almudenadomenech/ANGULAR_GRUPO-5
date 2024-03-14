import { Component, OnInit } from '@angular/core';
import { Booking } from '../interfaces/booking.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-detail',
  standalone: true,
  imports: [],
  templateUrl: './booking-detail.component.html',
  styleUrl: './booking-detail.component.css'
})
export class BookingDetailComponent implements OnInit {

  booking: Booking | undefined;

  constructor (private activedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    
  }

}
