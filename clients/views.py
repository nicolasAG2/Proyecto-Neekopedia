from .models import cliente
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import update_session_auth_hash
from django.contrib import messages
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import EditProfileForm, PasswordChangingForm
from django.contrib.auth.models import User


# Create your views here.

def index(request):
    context={}
    return render(request, 'clients/index.html', context)

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
        if request.POST['password'] == request.POST['password2']:
            try:
                user = User.objects.create_user(
                                            username=request.POST['usuario'],
                                            password=request.POST['password'],
                                            email=request.POST['correo'],
                                            first_name=request.POST['nombre'],
                                            last_name=request.POST['apellido'])
                user.save()
                context = {'mensaje':"Cliente guardado..."}
                nombre = request.POST["nombre"]
                apellido = request.POST["apellido"]
                usuario = request.POST["usuario"]
                correo = request.POST["correo"]
                telefono = request.POST["telefono"]
                cli = cliente.objects.create(nombres = nombre,
                                            apellidos = apellido,
                                            nombre_user = usuario,
                                            email = correo,
                                            telefono = telefono, 
                                            )
                cli.save()
                return render(request, 'clients/registro.html', context)
            except:
                return render(request, 'clients/registro.html', {
                    'error': 'Nombre de usuario ya existe.'
                })
        else:
            return render(request, 'clients/registro.html', {
                'error': 'Contraseñas no coinciden.'
            })
    else:
        context = {}
    return render(request, 'clients/registro.html', context)

# views.py

@login_required
def edit_profile(request):
    if request.method == 'POST':
        form = EditProfileForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            messages.success(request, 'Tu perfil ha sido actualizado.')
            return redirect('/')
    else:
        form = EditProfileForm(instance=request.user)
    return render(request, 'clients/edit_profile.html', {'form': form})

@login_required
def change_password(request):
    if request.method == 'POST':
        form = PasswordChangingForm(data=request.POST, user=request.user)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)  
            messages.success(request, 'Tu contraseña ha sido actualizada.')
            return redirect('edit_profile')
    else:
        form = PasswordChangingForm(user=request.user)
    return render(request, 'clients/change_password.html', {'form': form})
