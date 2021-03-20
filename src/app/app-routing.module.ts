import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { SignoutComponent } from './views/signout/signout.component';
import { UploadComponent } from './views/upload/upload.component';
import { LibraryComponent } from './views/library/library.component';
import { StreamComponent } from './views/stream/stream.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { CreatePlaylistComponent } from './views/create-playlist/create-playlist.component';
import { PlaylistViewComponent } from './views/playlist-view/playlist-view.component';
import { QueueComponent } from './views/queue/queue.component';

//TODO: not found page
const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: RegistrationComponent },
	{ path: 'signout', component: SignoutComponent },
	{ path: 'upload', component: UploadComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'stream', component: StreamComponent },
    { path: 'profile/:username', component: ProfileComponent },
    { path: 'playlist', component: CreatePlaylistComponent },
    { path: 'playlist/:id', component: PlaylistViewComponent },
    { path: 'queue', component: QueueComponent },
	// { path: '**', component: NotFoundPageComponent },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
