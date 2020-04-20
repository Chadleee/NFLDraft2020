import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProspectListComponent } from './prospect-list.component';



@NgModule({
  declarations: [
    ProspectListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProspectListModule { }
