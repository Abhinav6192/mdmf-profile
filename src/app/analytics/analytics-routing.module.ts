import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';

const routes: Routes = [
    {
        path: '', 
        component: AnalyticsComponent,
        children: [
            { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
            { path: 'insights', loadChildren: () => import('../insights/insights.module').then(m => m.InsightsModule) },
            { path: 'dataSetup', loadChildren: () => import('../data-setup/data-setup.module').then(m => m.DataSetupModule) }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
