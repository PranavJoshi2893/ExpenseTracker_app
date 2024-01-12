import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { authGuard } from './authentication/shared/guard/auth.guard';
import { TrackerComponent } from './dashboard/tracker/tracker.component';

export const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    {
        path: "dashboard", component: DashboardComponent, canActivate: [authGuard], children: [
            { path: "tracker", component: TrackerComponent }
        ]
    },
    { path: "login", component: AuthenticationComponent }
];
