import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookingListModule } from "./booking-list/booking-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BookingListModule]
})
export class AppComponent {
  title = 'FRONTED';
}
