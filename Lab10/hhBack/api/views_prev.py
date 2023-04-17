from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from api.models import Company, Vacancy
# Create your views here.

def company_list(request):
    return JsonResponse(
        list(Company.objects.values()), safe=False, json_dumps_params={'indent' : 2})

def get_company(request, id):
    try:
        company = Company.objects.get(id = id)
        return JsonResponse(company.to_json(), status=200, json_dumps_params={'indent':2})
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status = 400) 
    

def company_vacancies(reques, id):
    try:
        company_name = Company.objects.get(id = id)
        vacancies = Vacancy.objects.filter(company = company_name)
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent':2})
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status = 400)
    
def vacancies_list(request):
    return JsonResponse(
        list(Vacancy.objects.values()), safe=False, json_dumps_params={'indent' : 2})

def get_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id = id)
        return JsonResponse(vacancy.to_json(), status=200, json_dumps_params={'indent':2})
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status = 400)  

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False, json_dumps_params={'indent':2})  
