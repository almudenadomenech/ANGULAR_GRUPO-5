import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HouseDetailComponent } from "./house-detail/house-detail.componen
import { NavbarComponent } from "./navbar/navbar.component";t";

{
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BookingListModule, NavbarComponent]
}   imports: [RouterOutlet, HouseDetailComponent]
})
export class AppComponent {
  title = 'FRONTED';
}
