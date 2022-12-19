import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentScriptRoutingModule } from './content-script-routing.module';
import { ContentScriptComponent } from './content-script/content-script.component';


@NgModule({
  declarations: [
    ContentScriptComponent
  ],
  imports: [
    CommonModule,
    ContentScriptRoutingModule
  ]
})
export class ContentScriptModule { }
