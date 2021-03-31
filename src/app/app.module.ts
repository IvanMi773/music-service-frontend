import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './views/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationComponent } from './views/registration/registration.component';
import { SignoutComponent } from './views/signout/signout.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UploadComponent } from './views/upload/upload.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LibraryComponent } from './views/library/library.component';
import { StreamComponent } from './views/stream/stream.component';
import { HomeComponent } from './views/home/home.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PlayerComponent } from './components/player/player.component';
import { MusicTrackComponent } from './components/music-track/music-track.component';
import { ProfileComponent } from './views/profile/profile.component';
import { CreatePlaylistComponent } from './views/create-playlist/create-playlist.component';
import { PlaylistViewComponent } from './views/playlist-view/playlist-view.component';
import { QueueComponent } from './views/queue/queue.component';
import { PlaylistSongComponent } from './components/playlist-song/playlist-song.component';
import { SettingsComponent } from './views/settings/settings.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';

@NgModule({
    declarations: [
		AppComponent,
		LoginComponent,
		RegistrationComponent,
		SignoutComponent,
		NotFoundPageComponent,
		UploadComponent,
		LibraryComponent,
		StreamComponent,
		HomeComponent,
		PlayerComponent,
		MusicTrackComponent,
		ProfileComponent,
		CreatePlaylistComponent,
		PlaylistViewComponent,
		QueueComponent,
		PlaylistSongComponent,
		SettingsComponent,
		EditProfileComponent,
	],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxAudioPlayerModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
