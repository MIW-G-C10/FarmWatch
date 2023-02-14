import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AddAnimalComponent } from './component/add-animal/add-animal.component';
import { AnimalDetailComponent } from './component/animal-detail/animal-detail.component';
import { AnimalOverviewComponent } from './component/animal-overview/animal-overview.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './security/_auth/auth.guard';
import { UpdateAnimalComponent } from './component/update-animal/update-animal.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { CreateTicketComponent } from './component/create-ticket/create-ticket.component';
import { AdminUserDetailComponent } from './component/admin-user-detail/admin-user-detail.component';
import { AdminUpdateUserComponent } from './component/admin-update-user/admin-update-user-component';
import { TicketDetailComponent } from './component/ticket-detail/ticket-detail.component';
import { UserUpdateComponent } from './component/user-update/user-update.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: AnimalOverviewComponent },
  { path: 'animal/:id', component: AnimalDetailComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'animal', component: AddAnimalComponent, canActivate: [AuthGuard], data: {role: ['ADMIN']}},
  { path: 'animal/update/:id', component: UpdateAnimalComponent},
  { path: 'admindashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], data: {role: ['ADMIN']}},
  { path: 'user/update',component: UserUpdateComponent, canActivate: [AuthGuard], data: {role: ['ADMIN','USER', 'CARETAKER']}},
  { path: 'user/details',component: UserDetailComponent, canActivate: [AuthGuard], data: {role: ['ADMIN','USER', 'CARETAKER']}},
  { path: 'user/:id', component: AdminUserDetailComponent, canActivate: [AuthGuard], data: {role: ['ADMIN']}},
  { path: 'ticket/new', component: CreateTicketComponent, canActivate: [AuthGuard], data: {role: ['ADMIN', 'USER', 'CARETAKER']}},
  { path: 'user/update/:id', component: AdminUpdateUserComponent, canActivate: [AuthGuard], data: {role: ['ADMIN']}},
  { path: 'ticket/:id', component: TicketDetailComponent}
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
