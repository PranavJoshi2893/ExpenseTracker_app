import { Routes } from '@angular/router';
import { authGuard } from './authentication/shared/guard/auth.guard';

export const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    {
        path: "dashboard", loadComponent: () => import('./dashboard/dashboard/dashboard.component').then((c) => c.DashboardComponent), canActivate: [authGuard], children: [
            { path: "tracker", loadComponent: () => import('./dashboard/tracker/tracker.component').then((c) => c.TrackerComponent) }
        ]
    },
    { path: "login", loadComponent: () => import('./authentication/authentication/authentication.component').then((c) => c.AuthenticationComponent) }
];
