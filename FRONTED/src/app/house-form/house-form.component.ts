import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { House } from '../interfaces/house.model';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-house-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, HttpClientModule],
  templateUrl: './house-form.component.html',
  styleUrl: './house-form.component.css'
})
export class HouseFormComponent implements OnInit{

  houses: House [] = [];

  
  houseForm = new FormGroup({

    id: new FormControl(),
    title: new FormControl('', Validators.required),
    places: new FormControl('', [Validators.min(2), Validators.max(20)]),
    bedrooms: new FormControl('', [Validators.min(1), Validators.max(10)]),
    bathrooms: new FormControl('', [Validators.min(1), Validators.max(10)]),
    price: new FormControl('', [Validators.min(0), Validators.max(300)]),
    meters: new FormControl('', [Validators.min(50), Validators.max(1000)]),
    destination: new FormControl('', Validators.required),
    petFriendly: new FormControl(false),
    pool: new FormControl(false),
    garden: new FormControl(false),
    terrace: new FormControl(false),
    wifi: new FormControl(false),
    air: new FormControl(true),
    description: new FormControl('', Validators.required),
    photoUrls: new FormControl ([])
  });
  
  isUpdate: boolean = false;
 


   constructor (
    private httpClient: HttpClient,
    private router: Router
    ) {}


  ngOnInit(): void {
   /*   this.httpClient.get<House[]>('http://localhost:3000/houses')
    .subscribe(houses => this.houses = houses);  */

   /*  const url = 'http://localhost:3000/products';
        this.httpClient.post<House>(url, this.houses).subscribe(data => this.router.navigate(['/']));

        this.isUpdate = true; */

        
  } 

  save(): void {

    console.log('invocando save');

    const houses: House = {
      id: this.houseForm.get('id')?.value ?? 0,
      title: this.houseForm.get('title')?.value ?? '',
      places: this.houseForm.get('places')?.value ?? '',
      bedrooms: parseInt(this.houseForm.get('bedrooms')?.value ?? '0'), 
      bathrooms: parseInt( this.houseForm.get('bathrooms')?.value ?? '0' ),
      price: parseInt(this.houseForm.get('price')?.value ?? '0') ,
      meters: parseInt(this.houseForm.get('meters')?.value ?? '0') ,
      destination: this.houseForm.get('destination')?.value ?? '',
      petFriendly: this.houseForm.get('petFriendly')?.value ?? false,
      pool: this.houseForm.get('pool')?.value ?? false,
      garden: this.houseForm.get('garden')?.value ?? false,
      terrace: this.houseForm.get('terrace')?.value ?? false,
      wifi: this.houseForm.get('wifi')?.value ?? false,
      air: this.houseForm.get('air')?.value ?? false,
      description: this.houseForm.get('description')?.value ?? '',
      photoUrls: this.houseForm.get('photourls')?.value ?? []
    }

    console.log(houses);

     /* if(this.isUpdate){
      const urlForUpdate = 'http://localhost:3000/houses/' + houses.id;
      this.httpClient.put<House>(urlForUpdate, houses).subscribe(data => this.router.navigate(['/']));
    } else {
      const url = 'http://localhost:3000/houses';
        this.httpClient.post<House>(url, houses).subscribe(data => this.router.navigate(['/']));
    }  */
    const url = 'http://localhost:3000/houses'
    this.httpClient.post<House>(url, houses).subscribe(data => console.log(data)); 
    
  }
  compareObjects(o1: any, o2: any): boolean {
    if (o1 && o2) {
      return o1.id === o2.id;
    } else {
      return o1 === o2;
    }
  }
}
