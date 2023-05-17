from django.urls import path
from .views import home, login, registro, nosotros, carro

urlpatterns = [
    path('',home, name="home"),
    path('login',login, name="login"),
    path('registro',registro, name="registro"),
    path('nosotros',nosotros, name="nosotros"),
    path('carro',carro, name="carro")
]
