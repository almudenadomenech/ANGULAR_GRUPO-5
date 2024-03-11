import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HouseDetailComponent } from "./house-detail/house-detail.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from "./user-list/user-list.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HouseDetailComponent, RouterLink,
       NavbarComponent, FooterComponent, UserListComponent]
})
export class AppComponent {
  title = 'FRONTED';
}