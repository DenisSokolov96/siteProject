from django.contrib import admin
from .models import Task


# Регистрация таблички в панели админа
admin.site.register(Task)

