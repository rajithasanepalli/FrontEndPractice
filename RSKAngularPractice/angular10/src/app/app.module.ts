import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, myRoutings } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ChangeColorDirective } from './change-color.directive';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { PromisesObservablesComponent } from './promises-observables/promises-observables.component';
import { SearchCountryPromiseComponent } from './search-country-promise/search-country-promise.component';
import { SearchCountryObesrvableComponent } from './search-country-obesrvable/search-country-obesrvable.component';
import { MulticatingObservableComponent } from './multicating-observable/multicating-observable.component';
import { SubjectBehaviouralsubjectComponent } from './subject-behaviouralsubject/subject-behaviouralsubject.component';
import { ChartsComponent } from './charts/charts.component';
import { BarchartComponent } from './barchart/barchart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    myRoutings,
    AdminHomeComponent,
    TdfComponent,
    ReactiveFormComponent,
    ChangeColorDirective,
    LifecycleHooksComponent,
    PromisesObservablesComponent,
    SearchCountryPromiseComponent,
    SearchCountryObesrvableComponent,
    MulticatingObservableComponent,
    SubjectBehaviouralsubjectComponent,
    ChartsComponent,
    BarchartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule,





  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
