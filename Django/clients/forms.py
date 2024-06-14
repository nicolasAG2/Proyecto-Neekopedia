from django import forms
from .models import cliente

class createUser(forms.ModelForm):

    nombres = forms.CharField(widget=forms.TextInput(attrs={'class': 'input'}))
    apellidos = forms.CharField(widget=forms.TextInput(attrs={'class': 'input'}))
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'input'}))
    email = forms.CharField(widget=forms.TextInput(attrs={'class': 'input'}))
    password = forms.CharField(widget=forms.PasswordInput, widget=forms.TextInput(attrs={'class': 'input'}))
    telefono = forms.CharField(widget=forms.TextInput(attrs={'class': 'input'}))

    class Meta:
        model = cliente
        fields = "__all__"