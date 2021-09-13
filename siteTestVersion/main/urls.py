from django.urls import path
from . import views

urlpatterns = [
    path('', views.mainPage, name='mainPage'),

    path('login', views.index, name='login'),
    path('reg', views.reg, name='reg'),
    path('pas', views.pas, name='pas'),

    path('create', views.create, name='create')
]
