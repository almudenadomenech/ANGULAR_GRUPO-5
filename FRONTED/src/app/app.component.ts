import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HouseDetailComponent } from "./house-detail/house-detail.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HouseDetailComponent]
})
export class AppComponent {
  title = 'FRONTED';
}
