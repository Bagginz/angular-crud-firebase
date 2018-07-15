import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: HomeComponent
    },
    {
        path: 'backend',
        loadChildren: './backend/backend.module#BackendModule'
    }
];
