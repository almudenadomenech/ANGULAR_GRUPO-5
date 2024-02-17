import { Routes } from '@angular/router';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

export const routes: Routes = [
    {
        path: 'houses',
        component: HouseListComponent
    },
    {
        path: 'houses/:id',
        component: HouseDetailComponent
    },
    {
        path: 'bookings',
        component: BookingListComponent
    },
    {
        path: 'bookings/:id',
        component: BookingDetailComponent
    }
];
