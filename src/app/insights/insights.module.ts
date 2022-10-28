import { NgModule } from "@angular/core";
import { InsightsComponent } from "./insights.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: InsightsComponent
    }
]

@NgModule({
    declarations: [InsightsComponent],
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class InsightsModule {}