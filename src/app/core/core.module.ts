import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ProspectsRepositoryService } from './prospects-repository.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [NgbModule],
  providers: [
    ProspectsRepositoryService
  ]
})
export class CoreModule { }
