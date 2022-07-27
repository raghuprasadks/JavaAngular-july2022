import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { CustompipeComponent } from './components/custompipe/custompipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    CustompipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
