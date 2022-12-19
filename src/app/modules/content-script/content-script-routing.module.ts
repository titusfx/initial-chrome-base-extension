import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentScriptComponent } from './content-script/content-script.component';

const routes: Routes = [{ path: '', component: ContentScriptComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentScriptRoutingModule { }
