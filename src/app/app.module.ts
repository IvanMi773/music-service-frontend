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
import {MatTabsModule} from '@angular/material/tabs';
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
import { SearchComponent } from './components/search/search.component';
import { SearchViewComponent } from './views/search-view/search-view.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { AdminComponent } from './views/admin/admin.component';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminUsersTableComponent } from './components/admin-users-table/admin-users-table.component';
import { AdminPlaylistsTableComponent } from './components/admin-playlists-table/admin-playlists-table.component';
import { AdminGenresTableComponent } from './components/admin-genres-table/admin-genres-table.component';
import { AdminSongsTableComponent } from './components/admin-songs-table/admin-songs-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

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
		SearchComponent,
		SearchViewComponent,
		UserViewComponent,
		AdminComponent,
		WelcomePageComponent,
        AdminUsersTableComponent,
        AdminPlaylistsTableComponent,
        AdminGenresTableComponent,
        AdminSongsTableComponent,
        NavbarComponent,
	],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxAudioPlayerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
