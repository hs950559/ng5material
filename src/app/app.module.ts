import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './dialogs/edit/edit.component';
import { MatComponentsModule } from './mat.components.module';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent
  ],
  entryComponents: [EditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
