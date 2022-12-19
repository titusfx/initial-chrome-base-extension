import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTabComponent } from './new-tab/new-tab.component';

const routes: Routes = [{ path: '', component: NewTabComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTabRoutingModule { }
