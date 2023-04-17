import { Component } from '@angular/core';
import { Vacancy } from '../models';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent {

    vacancies: Vacancy[] = [];
  
  
    constructor(private route: ActivatedRoute, private vacancyServive: VacancyService) {
      this.vacancies = [];
    }
  
    ngOnInit(){
      this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
        const id = Number(params.get('company_id'));
        this.vacancyServive.getVacancies(id).subscribe((vacancies: Vacancy[]) => {
          this.vacancies = vacancies;
        })
      })
    }
  
}
