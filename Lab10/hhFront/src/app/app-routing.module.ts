import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VacanciesComponent} from "./vacancies/vacancies.component";

const routes: Routes = [
  {path: ":company_id", component: VacanciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }