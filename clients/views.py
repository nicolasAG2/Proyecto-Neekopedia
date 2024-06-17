from django.shortcuts import render,redirect
from .models import cliente

# Create your views here.

def index(request):
    context={}
    return render(request, 'clients/index.html', context)

def login(request):
    context={}
    return render(request, 'clients/inicioSesion.html', context)

""" def register(request):
    context={}
    return render(request, 'clients/registro.html', context) """

def champs(request):
    context={}
    return render(request, 'clients/Campeones.html', context)

def champType(request):
    context={}
    return render(request, 'clients/tipo.html', context)

def regions(request):
    context={}
    return render(request, 'clients/region.html', context)

def addUser(request):
    if request.method == "POST":
        context = {'mensaje':"Cliente guardado..."}
        nombre = request.POST["nombre"]
        apellido = request.POST["apellido"]
        usuario = request.POST["usuario"]
        correo = request.POST["correo"]
        contraseña = request.POST["password"]
        telefono = request.POST["telefono"]
        cli = cliente.objects.create(nombres = nombre,
                                    apellidos = apellido,
                                    username = usuario,
                                    email = correo,
                                    password = contraseña,
                                    telefono = telefono, 
                                    )
        cli.save()
        return render(request, 'clients/registro.html', context)
    else:
        context = {}
    return render(request, 'clients/registro.html', context)
