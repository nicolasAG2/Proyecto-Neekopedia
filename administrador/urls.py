from django.urls import path
from . import views


urlpatterns = [
    path('adminPage/', views.adminPage, name='adminPage'),
    path('delete_client/<str:nombre_user>/', views.delete_client, name='delete_client'),
]