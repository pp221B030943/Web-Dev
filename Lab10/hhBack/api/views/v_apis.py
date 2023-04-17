import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from api.models import Vacancy, Company


# CRUD - CRATE, READ, UPDATE, DELETE
from api.serializers import CompanySerializer, CompanySerializer2


@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company = Company.objects.create(name=company_name)
        return JsonResponse(company.to_json())


@csrf_exempt
def get_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_company_name = data.get('name', company.name)
        company.name = new_company_name
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})


def vacancies_list(request):
    # select * from auth_product;
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def get_vacancy(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(vacancy.to_json())

def company_vacancies(request, id):
    tmp = []
    for vacancy in Vacancy.objects.values():
        if str(vacancy['company_id']) == str(id):
            tmp.append(vacancy)
    return JsonResponse(tmp, safe=False, json_dumps_params={'indent': 2})

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.values()

    vacancies = sorted(vacancies, key= lambda x: x["salary"], reverse=True)
    return JsonResponse(vacancies[:10], safe=False, json_dumps_params={'indent': 2})