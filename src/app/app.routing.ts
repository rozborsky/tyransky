import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { MainComponent } from './main/main.component';
import { ExampleComponent } from './example/example.component';


export const appRoutes: Routes =[
    { path: '', component: MainComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'examples', component: ExampleComponent }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);