import { Component, OnInit } from '@angular/core';
import { House } from '../interfaces/house.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-house-detail',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './house-detail.component.html',
  styleUrl: './house-detail.component.css'
})
export class HouseDetailComponent implements OnInit {
  // atributos
  /*
    houses: House[] = [];   
house: any;
    
  // constructor con httpClient
    constructor(private http: HttpClient) {};

  // métodos SIN SERVICIO
    ngOnInit(): void {
      this.http.get<House[]>('http://localhost:3000/houses').subscribe(houses => this.houses = houses);

    }
*/
  house: House | undefined;

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.http.get<any>(`http://localhost:3000/houses/${id}`).subscribe(house => this.house = house);
    }
    );
  }

 

}
// NOS HEMOS ENCONTRADO CON EL PROBLEMA DE DUPLICAR EL <APP ROUTER> EN EL APP.COMPONENT.HTML
// SALIA UNDEFINED Y NO MOSTRABA EL ID

/**
 *       this.houses = [
        {
          id: 1,
          nombre: "Hershel",
          habitaciones: 2,
          banos: 1,
          precio: 138.66,
          m2: 303,
          petFriendly: true,
          piscina: true,
          jardin: false,
          terraza: false,
          wifi: false,
          aireAcondicionado: false,
          descripcion: "Casa muy bonita en el mar ",
          fotoUrls: ["https://placehold.co/600x400"] 
        },
        {
          id: 2,
          nombre: "Coop",
          habitaciones: 5,
          banos: 3,
          precio: 167.35,
          m2: 217,
          petFriendly: false,
          piscina: false,
          jardin: true,
          terraza: true,
          wifi: false,
          aireAcondicionado: true,
          descripcion: "Casa muy bonita en el mar ",
          fotoUrls: ["https://placehold.co/600x400"] 
        },
        {
          id: 3,
          nombre: "Virgil",
          habitaciones: 1,
          banos: 3,
          precio: 283.43,
          m2: 230,
          petFriendly: true,
          piscina: false,
          jardin: false,
          terraza: false,
          wifi: false,
          aireAcondicionado: false,
          descripcion: "Casa muy bonita en el mar ",
          fotoUrls: ["https://placehold.co/600x400"] 
        },
        {
          id: 4,
          nombre: "Harriet",
          habitaciones: 5,
          banos: 3,
          precio: 270.11,
          m2: 81,
          petFriendly: false,
          piscina: false,
          jardin: false,
          terraza: true,
          wifi: true,
          aireAcondicionado: true,
          descripcion: "Casa muy bonita en el mar ",
          fotoUrls: ["https://placehold.co/600x400"]
        },
        {
          id: 5,
          nombre: "Lanny",
          habitaciones: 2,
          banos: 2,
          precio: 75.89,
          m2: 154,
          petFriendly: true,
          piscina: true,
          jardin: true,
          terraza: true,
          wifi: false,
          aireAcondicionado: true,
          descripcion: "Casa muy bonita en el mar ",
          fotoUrls: ["https://placehold.co/600x400"] 
        }
      ];
 */
