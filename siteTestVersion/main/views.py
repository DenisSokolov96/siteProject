from django.shortcuts import render, redirect
from .models import Task
from .forms import TaskForm


def mainPage(request):
    tasks = Task.objects.order_by('title')[:5]
    return render(request, 'main/startPage.html', {'title': 'Главная страница',
                                                   'tasks': tasks})


def create(request):
    error = ''
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('mainPage')
        else:
            error = 'Ошибка формы'

    form = TaskForm()
    context = {
        'form': form,
        'error': error
    }
    return render(request, 'main/create.html', context)


def index(request):
    return render(request, 'main/login.html')


def reg(request):
    return render(request, 'main/lab2reg.html')


def pas(request):
    return render(request, 'main/lab2pas.html')