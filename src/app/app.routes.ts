import { Routes } from '@angular/router';
import { ClientContainerComponent } from './components/clients/client-container/client-container.component';
import { ServiceContainerComponent } from './components/services/service-container/service-container.component';
import { AgreementContainerComponent } from './components/agreements/agreement-container/agreement-container.component';

export const routes: Routes = [
    // { path: 'dashboard', component: DashboardComponent },
    { path: 'clients', component: ClientContainerComponent },
    { path: 'services', component: ServiceContainerComponent },
    {path: 'agreements', component: AgreementContainerComponent},
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
