import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HouseFormComponent } from './house-form/house-form.component';
import { FooterComponent } from './footer/footer.component';
import { BookingFormComponent } from './booking-form/booking-form.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, HouseDetailComponent, 
      NavbarComponent, HouseFormComponent, FooterComponent, 
      BookingFormComponent]
})
export class AppComponent {
  title = 'FRONTED';
}
