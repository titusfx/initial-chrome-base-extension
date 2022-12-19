import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTabRoutingModule } from './new-tab-routing.module';
import { NewTabComponent } from './new-tab/new-tab.component';


@NgModule({
  declarations: [
    NewTabComponent
  ],
  imports: [
    CommonModule,
    NewTabRoutingModule
  ]
})
export class NewTabModule { }
