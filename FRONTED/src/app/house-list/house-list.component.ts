import { Component, OnInit } from '@angular/core';
import { House } from '../interfaces/house.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css'
})
export class HouseListComponent implements OnInit{

  houses: House [] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<House[]>('http://localhost:3000/houses')
    .subscribe(houses => this.houses = houses);
  }

}
