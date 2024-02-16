import { Routes } from '@angular/router';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';

export const routes: Routes = [
    {
        path: 'house',
        component: HouseListComponent
    },
    {
        path: 'house/:id',
        component: HouseDetailComponent
    }
];
