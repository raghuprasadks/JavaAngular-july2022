import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { CustompipeComponent } from './components/custompipe/custompipe.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CustomdirectiveComponent } from './components/customdirective/customdirective.component';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    CustompipeComponent,
    HighlightDirective,
    CustomdirectiveComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
