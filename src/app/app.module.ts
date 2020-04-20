import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { ProspectListComponent } from './prospect-list/prospect-list.component';
import { CoreModule } from './core/core.module';
import { ProspectListModule } from './prospect-list/prospect-list.module';
import { PickListModule } from './pick-list/pick-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProspectListModule,
    PickListModule,
    RouterModule.forRoot([
      { path: 'prospects', component: ProspectListComponent },
      { path: 'picks', component: PickListComponent },
      { path: '', redirectTo: 'picks', pathMatch: 'full'},
      { path: '**', redirectTo: 'picks', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
