import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
