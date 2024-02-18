import { Routes } from '@angular/router';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
  
    {
        path: 'casas',
        component: HouseListComponent
    },
    {
        path: 'casas/:id/detalles',
        component: HouseDetailComponent
    },
    {
        path: 'reservas',
        component: BookingListComponent
    },
    {
        path: 'reservas/:id/detalles',
        component: BookingDetailComponent
    }
];
