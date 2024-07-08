from django.db import models

# Create your models here.

class suscripcion(models.Model):
    id_suscripcion = models.CharField(max_length=2, primary_key=True, unique=True)
    descripcion = models.CharField(max_length=30)

    def __str__(self):
        return self.descripcion

class cliente(models.Model):
    nombres = models.CharField(max_length=30)
    apellidos = models.CharField(max_length=60)
    nombre_user = models.CharField(max_length=16, unique=True, primary_key=True)
    email = models.EmailField(unique=True, max_length=100)
    telefono = models.CharField(max_length=14, blank=True, null=True)
    subscription = models.ForeignKey(suscripcion, on_delete=models.CASCADE, default=10)

    def __str__(self):
        return self.nombre_user