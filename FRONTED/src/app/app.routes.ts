import { Routes } from '@angular/router';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


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
        path: 'bokking/:id/detail',
        component: BookingDetailComponent
    },
    {
        path: 'not-found-404',
        component: NotFoundComponent

    },    
    {

        path: '**',
        redirectTo: '/not-found-404'

    }
    

    

    
];
