import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';

export const routes: Routes = [
    { path: "", redirectTo: "", pathMatch: "full" },
    { path: "", component: AuthenticationComponent }
];
