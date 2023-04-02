from django.urls import path, re_path
from api import views
urlpatterns = [
    path('products/', views.product_list),
    path('categories/', views.categories_list),
    path('products/<int:id>/',views.product_by_id),
    path('categories/<int:id>/',views.categories_by_id),
    path('categories/<int:id>/products/', views.products_by_category)
]
