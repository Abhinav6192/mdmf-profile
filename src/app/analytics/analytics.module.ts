import { NgModule } from "@angular/core";
import { AnalyticsComponent } from "./analytics.component";
import { AnalyticsRoutingModule } from './analytics-routing.module';

@NgModule({
    declarations: [AnalyticsComponent],
    imports: [
        AnalyticsRoutingModule
    ]
})
export class AnalyticsModule {}