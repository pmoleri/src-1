import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { AppBuilderComponent1 } from './app-builder/app-builder.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app-builder', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'app-builder', component: AppBuilderComponent1, data: { text: 'AppBuilder' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
