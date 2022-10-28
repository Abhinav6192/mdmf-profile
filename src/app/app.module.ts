import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { InsightsModule } from './insights/insights.module';
import { DataSetupModule } from './data-setup/data-setup.module';
import { SharedContentModule } from '../../shared-lib/src/lib/shared-content.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    InsightsModule,
    DataSetupModule,
    SharedContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
