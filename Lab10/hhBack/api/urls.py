from django.urls import path

from . import views

urlpatterns = [
    path('companies/', views.companies_list),
    path('companies/<int:id>/', views.company_by_id),
    path('companies/<int:id>/vacancies/', views.vac_by_company),
    path('vacancies/', views.vacancies_list),
    path('vacancies/<int:id>/', views.vacancy_by_id),
    path('vacancies/top_ten/', views.vac_top_ten),
]