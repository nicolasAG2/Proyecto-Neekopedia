from django.db import models

# Create your models here.

class cliente(models.Model):
    nombres = models.CharField(max_length=30)
    apellidos = models.CharField(max_length=60)
    username = models.CharField(max_length=16, unique=True, primary_key=True)
    email = models.EmailField(unique=True, max_length=100)
    password = models.CharField(max_length=12)
    telefono = models.CharField(max_length=14, blank=True, null=True)

    def __str__(self):
        return self.username