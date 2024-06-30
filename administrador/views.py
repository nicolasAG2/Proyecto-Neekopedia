from django.shortcuts import render, get_object_or_404, redirect
from clients.models import cliente
from django.contrib.auth.models import User


# Create your views here.
def adminPage(request):
    clients= cliente.objects.all()
    context={"clients":clients}
    return render(request, 'administrador/admin_view.html', context)




def delete_client(request, nombre_user):
    client = get_object_or_404(cliente, nombre_user=nombre_user)
    user = get_object_or_404(User, username=nombre_user)
    if request.method == 'POST':
        client.delete()
        user.delete()
        return redirect('adminPage')