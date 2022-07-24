import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gameboard',
    pathMatch: 'full',
  },
  {
    path: 'gameboard',
    loadChildren: () =>
      import('./pages/gameboard/gameboard.module').then(
        (m) => m.GameboardPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
