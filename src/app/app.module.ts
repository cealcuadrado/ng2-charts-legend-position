import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { PieChartComponent } from './layout/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
