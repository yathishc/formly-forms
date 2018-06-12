
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DobComponent } from './dob/dob.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { DatasetComponent } from './dataset/dataset.component'
import {MsgLayoutComponent } from './msg-layout/msg-layout.component';

const routes: Routes = [    
    
    {path: '', component: DashboardComponent},
    {path: 'dob', component: DobComponent},
    {path: 'dataset', component: DatasetComponent},
    {path: 'ml', component: MsgLayoutComponent}
];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes,
    {
        useHash: true,
        // enableTracing: true,
        // preloadingStrategy: PreloadSelectedModulesList
    }
);


@NgModule({
    imports: [ROUTING],
    exports: [RouterModule]
})

export class AppRoutingModule {
}


