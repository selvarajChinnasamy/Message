import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SmsComponent } from './sms/sms.component';

export const router: Routes = [
    { path: '', redirectTo: 'sms', pathMatch: 'full' },
    { path: 'sms', component: SmsComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);