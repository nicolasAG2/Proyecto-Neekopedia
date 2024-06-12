from django.shortcuts import render

# Create your views here.

def index(request):
    context={}
    return render(request, 'clients/index.html', context)

def login(request):
    context={}
    return render(request, 'clients/inicioSesion.html', context)

def register(request):
    context={}
    return render(request, 'clients/registro.html', context)

def champs(request):
    context={}
    return render(request, 'clients/Campeones.html', context)

def champType(request):
    context={}
    return render(request, 'clients/tipo.html', context)

def regions(request):
    context={}
    return render(request, 'clients/region.html', context)