from django.urls import path
from .views import home, login, registro

urlpatterns = [
    path('',home, name="home"),
    path('login',login, name="login"),
    path('registro',registro, name="registro")
]
