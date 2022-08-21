import { appReducer } from './store/app.reducer';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import {counterReducer} from './counter/state/counter.reducer';
import { CustomeCounterInputComponent } from './counter/custome-counter-input/custome-counter-input.component'
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AddPostComponent } from './posts/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonComponent,
    CounterOutputComponent,
    CustomeCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostListComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule, StoreModule.forRoot(appReducer),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
    //  maxAge: 25, // Retains last 25 states
      //logOnly: environme // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
