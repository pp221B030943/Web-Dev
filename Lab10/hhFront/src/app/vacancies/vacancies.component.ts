import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit{

  vacancies: Vacancy[] = [];


  constructor(private route: ActivatedRoute, private vacancyServive: VacancyService) {
    this.vacancies = [];
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('company_id'));
      this.vacancyServive.getVacancies(id).subscribe((vacancies) => {
        this.vacancies = vacancies;
      })
    })
  }

}