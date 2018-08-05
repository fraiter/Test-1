import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [ 
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent }

];
export const routing = RouterModule.forRoot(appRoutes);
