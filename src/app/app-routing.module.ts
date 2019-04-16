import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',loadChildren: './tab-master/tab-master.module#TabMasterPageModule', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tab-agenda', loadChildren: './tab-agenda/tab-agenda.module#TabAgendaPageModule' },
  { path: 'tab-master', loadChildren: './tab-master/tab-master.module#TabMasterPageModule' },
  { path: 'tab-principal', loadChildren: './tab-principal/tab-principal.module#TabPrincipalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
