from django.shortcuts import render, get_object_or_404, redirect
from clients.models import cliente
from django.contrib.auth.decorators import login_required, permission_required
from django.contrib.auth.models import User


# Create your views here.
# Create your views here.
@login_required
@permission_required('clients.view_cliente', raise_exception=True)
def adminPage(request):
    clients = cliente.objects.all()
    context = {"clients": clients}
    return render(request, 'administrador/admin_view.html', context)


@login_required
@permission_required('clients.delete_cliente', raise_exception=True)
def delete_client(request, nombre_user):
    client = get_object_or_404(cliente, nombre_user=nombre_user)
    user = get_object_or_404(User, username=nombre_user)
    if request.method == 'POST':
        client.delete()
        user.delete()
        return redirect('adminPage')