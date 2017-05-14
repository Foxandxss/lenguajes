import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageListComponent } from './languages/language-list.component';
import { LanguageDetailsComponent } from './languages/language-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/languages', pathMatch: 'full' },
  { path: 'languages', component: LanguageListComponent },
  { path: 'languages/:id', component: LanguageDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
