import { NgModule } from "@angular/core";
import { DataSetupComponent } from "./data-setup.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: DataSetupComponent
    }
]

@NgModule({
    declarations: [DataSetupComponent],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataSetupModule {}