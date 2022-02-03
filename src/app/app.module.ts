import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgStackFormsModule } from '@ng-stack/forms';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    NgStackFormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
