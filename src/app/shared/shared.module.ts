import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { ConvertToFeetPipe } from './convert-to-feet.pipe';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ConvertToFeetPipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    ConvertToFeetPipe,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
