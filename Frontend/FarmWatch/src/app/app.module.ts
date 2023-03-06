import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalOverviewComponent } from './component/animal-overview/animal-overview.component';
import { AnimalDetailComponent } from './component/animal-detail/animal-detail.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { httpInterceptorProviders } from './security/_helpers/http.interceptor';
import { AuthGuard } from './security/_auth/auth.guard';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AddAnimalComponent } from './component/add-animal/add-animal.component';
import { UpdateAnimalComponent } from './component/update-animal/update-animal.component';
import { environment } from '../environments/environment';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateTicketComponent } from './component/create-ticket/create-ticket.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { TicketDetailComponent } from './component/ticket-detail/ticket-detail.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { UserUpdateComponent } from './component/user-update/user-update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { TicketOverviewComponent } from './component/ticket-overview/ticket-overview.component';
import { MatDialogModule} from '@angular/material/dialog';
import { TicketUpdateComponent } from './component/ticket-update/ticket-update.component';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NewTicketMessageComponent } from './component/new-ticket-message/new-ticket-message.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalOverviewComponent,
    AnimalDetailComponent,
    AddAnimalComponent,  
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminDashboardComponent,
    UpdateAnimalComponent,
    CreateTicketComponent,
    TicketDetailComponent,
    UserUpdateComponent,
    TicketDetailComponent,
    NavbarComponent,
    UserDetailComponent,
    TicketOverviewComponent,
    TicketUpdateComponent,
    ConfirmationDialogComponent,
    FileUploadComponent,
    NewTicketMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
      easing: "ease-in",
      easeTime: 750,
      timeOut: 3000
    }),
    MatSlideToggleModule
  ],
  providers: [httpInterceptorProviders, AuthGuard , {
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: environment.recaptcha.siteKey,
    } as RecaptchaSettings,}], 
    bootstrap: [AppComponent]
})
export class AppModule { }