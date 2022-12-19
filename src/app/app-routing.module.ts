import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'popup',
    pathMatch: "full",
    // pathMatch: ("full") as Route,
    loadChildren: () =>
      import('./modules/popup/popup.module').then(m => m.PopupModule)
  },
  {
    path: 'options',
    pathMatch: "full",
    // pathMatch: ("full") as Route,
    loadChildren: () =>
      import('./modules/options/options.module').then(m => m.OptionsModule)
  },
  {
    path: 'new-tab',
    pathMatch: "full",
    // pathMatch: ("full") as Route,
    loadChildren: () =>
      import('./modules/new-tab/new-tab.module').then(m => m.NewTabModule)
  },
  {
    path: 'content-script',
    loadChildren: () =>
      import('./modules/content-script/content-script.module').then(m => m.ContentScriptModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/popup/popup.module').then(m => m.PopupModule)
  },
];

@NgModule({
  imports: [
    // useHas => https://angular.io/api/common/HashLocationStrategy#description
    // if you call location.go('/foo'), the browser's URL will become example.com#/foo.
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
