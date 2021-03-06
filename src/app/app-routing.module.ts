import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignoutComponent } from './components/signout/signout.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UploadComponent } from './components/upload/upload.component';
import { LibraryComponent } from './components/library/library.component';
import { StreamComponent } from './components/stream/stream.component';
import { HomeComponent } from './components/home/home.component';

//TODO: not found page
const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: RegistrationComponent },
	{ path: 'signout', component: SignoutComponent },
	{ path: 'upload', component: UploadComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'stream', component: StreamComponent }
	// { path: '**', component: NotFoundPageComponent },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
