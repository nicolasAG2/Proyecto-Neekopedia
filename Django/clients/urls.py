from django.urls import path
from . import views


urlpatterns = [
    path('login', views.login , name='login'),
    path('register', views.addUser, name='addUser'),
    path('', views.index, name='index'),
    path('champs', views.champs, name='champs'),
    path('champType', views.champType, name='champType'),
    path('regions', views.regions, name='regions')
]