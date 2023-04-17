import { Component } from '@angular/core';
import { Company } from './models';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hhFront';
  
  companies: Company[] = [];
  newCompany: string = '';

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
  }

  addCompany() {
    this.companyService.createCompany(this.newCompany).subscribe((company: Company) => {
      this.companies.push(company);
      this.newCompany = '';
    });
  }

  deleteCompany(company_id: number) {
    this.companyService.deleteCompany(company_id).subscribe((data: any) => {
      this.companies = this.companies.filter((company) => company.id !== company_id);
    });
  }
}
