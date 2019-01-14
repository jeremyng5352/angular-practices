import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticeIComponent } from './section-1/practice-i/practice-i.component';
import { PracticeLibraryComponent } from './practice-library/practice-library.component';

const routes: Routes = [
  { path: '', redirectTo: 'practice-library', pathMatch: 'full' },
  { path: 'practice-library', component: PracticeLibraryComponent },
  { path: '1-1', component: PracticeIComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
