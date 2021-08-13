import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { lista_nombre } from './components/lista/lista_nombre.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, lista_nombre],
  bootstrap: [AppComponent]
})
export class AppModule {}
