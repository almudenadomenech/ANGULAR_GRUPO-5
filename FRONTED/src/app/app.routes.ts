import { Routes } from '@angular/router';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { HomeComponent } from './home/home.component';
import { BookingFormComponent } from './booking-form/booking-form.component';


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
        path: 'boking/:id/detail',
        component: BookingDetailComponent
    }, 
    {
        path: 'booking/:id/form',
        component: BookingFormComponent
    }
];
