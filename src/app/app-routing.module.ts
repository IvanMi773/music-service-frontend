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
import { SettingsComponent } from './views/settings/settings.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { SearchViewComponent } from './views/search-view/search-view.component';
import { AdminComponent } from './views/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { GateGuard } from './guards/gate.guard';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { SearchSongTitleComponent } from './components/search-song-title/search-song-title.component';
import { SearchSongGenreComponent } from './components/search-song-genre/search-song-genre.component';
import { SearchUserNameComponent } from './components/search-user-name/search-user-name.component';

//TODO: change http://localhost to config.hostname in img src and player list

const ADMIN_ROLE = 'ADMIN'
const USER_ROLE = 'USER'

const routes: Routes = [
    {
        path: '',
        component: WelcomePageComponent,
        canActivate: [GateGuard],
    },

    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [USER_ROLE, ADMIN_ROLE]
        }
    },

    {
        path: 'login',
        component: LoginComponent,
        canActivate: [GateGuard],
    },

    {
        path: 'signup',
        component: RegistrationComponent,
        canActivate: [GateGuard],
    },

    {
        path: 'signout',
        component: SignoutComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [USER_ROLE, ADMIN_ROLE]
        }
    },

    {
        path: 'upload',
        component: UploadComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [USER_ROLE, ADMIN_ROLE]
        }
    },

    {
        path: 'library',
        component: LibraryComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [USER_ROLE, ADMIN_ROLE]
        }
    },

    {
        path: 'stream',
        component: StreamComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [USER_ROLE, ADMIN_ROLE]
        }
    },

    {
        path: 'profile/:username',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [USER_ROLE, ADMIN_ROLE]
        }
    },

    {
        path: 'playlist',
        component: CreatePlaylistComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [USER_ROLE, ADMIN_ROLE]
        }
    },

    {
        path: 'playlist/:id',
        component: PlaylistViewComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [USER_ROLE, ADMIN_ROLE]
        }
    },

    {
        path: 'queue',
        component: QueueComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [USER_ROLE, ADMIN_ROLE]
        }
    },

    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [USER_ROLE, ADMIN_ROLE]
        }
    },

    {
        path: 'edit',
        component: EditProfileComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [USER_ROLE, ADMIN_ROLE]
        }
    },

    {
        path: 'search',
        component: SearchViewComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [USER_ROLE, ADMIN_ROLE]
        },
        children: [
            {
                path: 'song-title/:searchQuery',
                component: SearchSongTitleComponent
            },
            {
                path: 'song-genre/:searchQuery',
                component: SearchSongGenreComponent
            },
            {
                path: 'user-name/:searchQuery',
                component: SearchUserNameComponent
            },
        ]
    },

    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [ ADMIN_ROLE ]
        }
    },

    {
        path: '**',
        component: NotFoundPageComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [ ADMIN_ROLE, USER_ROLE ]
        }
    },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
