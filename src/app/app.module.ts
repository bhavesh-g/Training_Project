import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { CareeersComponent } from './careeers/careeers.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { TrainsearchComponent } from './trainsearch/trainsearch.component';
import { StncodeComponent } from './stncode/stncode.component';
import { TrainfareComponent } from './trainfare/trainfare.component';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { LoggedoutComponent } from './loggedout/loggedout.component';
import { PnrComponent } from './pnr/pnr.component';
import { LivetrainComponent } from './livetrain/livetrain.component';
import { LivetrainknowmoreComponent } from './livetrainknowmore/livetrainknowmore.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    CareeersComponent,
    ContactComponent,
    RegisterComponent,
    AboutComponent,
    LoginComponent,
    TrainsearchComponent,
    StncodeComponent,
    TrainfareComponent,
    LogindashboardComponent,
    LoggedoutComponent,
    PnrComponent,
    LivetrainComponent,
    LivetrainknowmoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path:'service',
          component:ServiceComponent
        },
        {
          path:'contact',
          component:ContactComponent
        },

        {
          path:'login',
          component:LoginComponent
        },

        {
          path:'register',
          component:RegisterComponent
        },

        {
          path:'',
          component:HomeComponent
        },

        {
          path:'about',
          component:AboutComponent
        },
        {
          path:'trainsearch',
          component:TrainsearchComponent
        },

        {
          path:'stncode',
          component:StncodeComponent
        },

        {
          path:'trainfare',
          component:TrainfareComponent
        },
        {
          path:'logindashboard',
          component:LogindashboardComponent
        },
        {
          path:'loggedout',
          component:LoggedoutComponent
        },
        {
          path:'pnr',
          component:PnrComponent
        },
        {
          path:'livetrainknowmore',
          component:LivetrainknowmoreComponent
        },
        {
          path:'livetrain',
          component:LivetrainComponent
        },

      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
