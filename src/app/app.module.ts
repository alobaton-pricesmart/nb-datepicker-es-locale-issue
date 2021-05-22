import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  NbThemeModule,
  NbDatepickerModule,
  NbLayoutModule,
  NbCardModule,
  NbInputModule
} from '@nebular/theme';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } // If you remove this, it works fine.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
