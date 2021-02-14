import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignoutComponent } from './components/signout/signout.component';

//TODO: not found page
const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: RegistrationComponent },
	{ path: 'signout', component: SignoutComponent },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
