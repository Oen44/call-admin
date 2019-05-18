import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { PanelComponent } from './panel/panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsComponent } from './settings/settings.component';
import { PanelHomeComponent } from './panel-home/panel-home.component';
import { ServersComponent } from './servers/servers.component';
import { AdminsComponent } from './admins/admins.component';
import { PaymentComponent } from './payment/payment.component';
import { NotifyService } from './notify.service';
import { ChartComponent } from './chart/chart.component';
import { ServerEditComponent } from './server-edit/server-edit.component';
import { ServerDeleteComponent } from './server-delete/server-delete.component';
import { DesktopComponent } from './desktop/desktop.component';
import { ScrollNavDirective } from './scroll-nav.directive';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'desktop',
    component: DesktopComponent
  },
  {
    path: 'panel',
    component: PanelComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: PanelHomeComponent
      },
      {
        path: 'servers',
        component: ServersComponent
      },
      {
        path: 'servers/edit/:id',
        component: ServerEditComponent
      },
      {
        path: 'servers/delete/:id',
        component: ServerDeleteComponent
      },
      {
        path: 'admins',
        component: AdminsComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    RegisterComponent,
    PanelComponent,
    PageNotFoundComponent,
    SettingsComponent,
    PanelHomeComponent,
    ServersComponent,
    AdminsComponent,
    PaymentComponent,
    ChartComponent,
    ServerEditComponent,
    ServerDeleteComponent,
    DesktopComponent,
    ScrollNavDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    SweetAlert2Module.forRoot({
      confirmButtonClass: 'btn-alert btn-success',
      cancelButtonClass: 'btn-alert btn-danger',
      buttonsStyling: false
    }),
    RouterModule.forRoot(appRoutes),
    ScrollToModule.forRoot()
  ],
  providers: [AuthGuard, AuthService, UserService, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
