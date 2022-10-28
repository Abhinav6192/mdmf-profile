import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { InsightsModule } from './insights/insights.module';
import { DataSetupModule } from './data-setup/data-setup.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    InsightsModule,
    DataSetupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
