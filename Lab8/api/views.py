from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import *

# Create your views here.

def product_list(request):
    return JsonResponse(
        list(Product.objects.values()), safe=False, json_dumps_params={'indent' : 2}
    )

def categories_list(request):
    return JsonResponse(
        list(Category.objects.values()), safe=False, json_dumps_params={'indent': 2}
    )

def categories_by_id(request,id):
    for category in Category.objects.values():
        if str(category["id"]) == str(id):
            return JsonResponse(category, json_dumps_params={'indent': 2})

    return JsonResponse({'error': 'Product not found'})

def product_by_id(request,id):
    for product in Product.objects.values():
        if str(product["id"]) == str(id):
            return JsonResponse(product, json_dumps_params={'indent': 2})

    return JsonResponse({'error': 'Product not found'})

def products_by_category(request, id):
    tmp = []
    for product in Product.objects.values():
        if str(product['category_id']) == str(id):
            tmp.append(product)

    return JsonResponse(tmp, safe=False, json_dumps_params={'indent': 2})