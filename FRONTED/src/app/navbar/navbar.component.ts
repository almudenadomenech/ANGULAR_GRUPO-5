import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [FooterComponent]
})
export class NavbarComponent {

}