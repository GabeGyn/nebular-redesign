import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbSidebarModule, NbUserModule, NbContextMenuModule, NbMenuModule, NbCardModule, NbDialogModule, NbIconModule, NbListModule, NbStepperModule, NbToastrModule, NbWindowModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    NbButtonModule,
    NbCardModule,
    NbContextMenuModule,
    NbDialogModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbLayoutModule,
    NbListModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbStepperModule,
    NbThemeModule.forRoot(),
    NbToastrModule.forRoot(),
    NbUserModule,
    NbWindowModule.forRoot(),
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
