import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { authGuard } from './authentication/shared/guard/auth.guard';

export const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent, canActivate: [authGuard] },
    { path: "login", component: AuthenticationComponent }
];
