import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { materialize } from 'rxjs';

import { AppComponent } from './app.component';
import { MaterialModule } from './app.material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }