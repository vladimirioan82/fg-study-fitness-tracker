// Adding angular elements
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Adding my elements
import { MaterialModule } from './../material/material.module';
import { RootComponent } from '../../components/root/root.component';
import { SignupComponent } from '../../components/auth/signup/signup.component';
import { LoginComponent } from '../../components/auth/login/login.component';
import { TrainingComponent } from '../../components/training/training.component';
import { CurrentTrainingComponent } from '../../components/training/current-training/current-training.component';
import { NewTrainingComponent } from '../../components/training/new-training/new-training.component';
import { PastTrainingsComponent } from '../../components/training/past-trainings/past-trainings.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { RoutingModule } from './../routing/routing.module';
import { HeaderComponent } from '../../components/navigation/header/header.component';
import { SidenavListComponent } from '../../components/navigation/sidenav-list/sidenav-list.component';



@NgModule({
  declarations: [
    RootComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule { }
