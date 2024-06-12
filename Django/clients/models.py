from django.db import models

# Create your models here.

class cliente(models.Model):
    nombres = models.CharField(max_length=30)
    apellidos = models.CharField(max_length=60)
    username = models.CharField(max_length=16, primary_key=True)
    email = models.EmailField(unique=True, max_length=100, blank=True, null=True)
    password = models.CharField(max_length=12)
    telefono = models.CharField(max_length=14, blank=True, null=True)
    fecha_cuenta = models.DateTimeField(auto_now_add=True)