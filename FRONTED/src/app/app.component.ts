import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HouseDetailComponent } from "./house-detail/house-detail.component"
import { NavbarComponent } from "./navbar/navbar.component";
import { BookingListComponent } from './booking-list/booking-list.component';
import { FooterComponent } from './footer/footer.component';

{
    selector: 'app-root'
    standalone: true
    templateUrl: './app.component.html'
    styleUrl: './app.component.css'
    imports: [RouterOutlet, NavbarComponent,FooterComponent, BookingListComponent]
}   imports: [RouterOutlet, HouseDetailComponent]

export class AppComponent {
  title = 'FRONTED';
}
