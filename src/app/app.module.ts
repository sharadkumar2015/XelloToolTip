import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SampleComponent } from 'src/xello/sample.component';
import { ToolTipComponent } from 'src/shared/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ToolTipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
