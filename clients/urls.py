from django.urls import path
from . import views
from administrador import urls

urlpatterns = [
    path('addUser', views.addUser, name='addUser'),
    path('', views.index, name='index'),
    path('champs', views.champs, name='champs'),
    path('champType', views.champType, name='champType'),
    path('regions', views.regions, name='regions'),
    path('profile/', views.edit_profile, name='edit_profile'),
    path('profile/change-password/', views.change_password, name='change_password'),
    
]