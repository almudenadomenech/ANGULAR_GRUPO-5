import { Routes } from '@angular/router';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { HomeComponent } from './home/home.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HouseFormComponent } from './house-form/house-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'home',
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
        path: 'booking/:id/form',
        component: BookingFormComponent
    },
    {
        path: 'houses/create',
        component: HouseFormComponent
    },
    {
        path: 'houses/:id/update',
        component: HouseFormComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'user',
        component: UserListComponent
    },
    {
        path: 'user/profile',
        component: UserProfileComponent
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
