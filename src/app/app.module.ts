import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatBookComponent } from './seat-book/seat-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';
import { DbService } from './seat-book/db.service';

@NgModule({
  declarations: [
    AppComponent,
    SeatBookComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
