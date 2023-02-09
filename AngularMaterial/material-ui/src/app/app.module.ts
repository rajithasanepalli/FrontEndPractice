import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { PopupComponent } from './popup/popup.component';
import { MatTablesComponent } from './mat-tables/mat-tables.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MultiDropdownComponent } from './multi-dropdown/multi-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ProfileComponent,
    FormsComponent,
    PopupComponent,
    MatTablesComponent,
    MultiDropdownComponent,
  ],
  entryComponents: [
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
