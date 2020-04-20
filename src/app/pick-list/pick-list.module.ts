import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PickListComponent } from './pick-list.component';



@NgModule({
  declarations: [
    PickListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PickListModule { }
