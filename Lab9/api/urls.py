from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>', views.get_company),
    path('companies/<int:id>/vacancies', views.company_vacancies),
    path('vacancies', views.vacancies_list),
    path('vacancies/<int:id>', views.get_vacancy),
    path('vacancies/top_ten', views.top_ten_vacancies)

]
