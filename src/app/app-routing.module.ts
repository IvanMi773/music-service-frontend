import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { SignoutComponent } from './views/signout/signout.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UploadComponent } from './views/upload/upload.component';
import { LibraryComponent } from './views/library/library.component';
import { StreamComponent } from './views/stream/stream.component';
import { HomeComponent } from './views/home/home.component';

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
