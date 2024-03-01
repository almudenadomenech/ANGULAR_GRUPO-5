import { Routes } from '@angular/router';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { HomeComponent } from './home/home.component';
import { HouseFormComponent } from './house-form/house-form.component';


export const routes: Routes = [
    
    {
        path: '',
        component: HomeComponent
    },
  
    {
        path: 'houses',
        component: HouseListComponent
    },
    {
        path: 'houses/:id/detail',
        component: HouseDetailComponent
    },
    {
        path: 'booking',
        component: BookingListComponent
    },
    {
        path: 'booking/:id/detail',
        component: BookingDetailComponent
    },
    {
        path: 'houses/create',
        component: HouseFormComponent
    },
    {
        path: 'houses/:id/update',
        component: HouseFormComponent
    }
];
