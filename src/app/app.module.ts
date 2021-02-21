import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignoutComponent } from './components/signout/signout.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UploadComponent } from './components/upload/upload.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
// import { DragAndDropDirective } from './directives/drag-and-drop.directive';

@NgModule({
    declarations: [
		AppComponent,
		LoginComponent,
		RegistrationComponent,
		SignoutComponent,
		NotFoundPageComponent,
		UploadComponent,
		// DragAndDropDirective
	],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
