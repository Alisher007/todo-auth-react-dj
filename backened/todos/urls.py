from . import views
from django.urls import path

app_name = 'todo'

urlpatterns = [
    path('', views.TodoList.as_view(), name='list'),
    path('create/', views.TodoCreate.as_view(), name='create'),
    path('<id>/', views.TodoDetail.as_view(), name='detail'),
    path('toggle/<pk>/', views.ToggleTodoCompletion.as_view(), name='toggle'),
    path('delete/<pk>/', views.DeleteTodoView.as_view(), name='delete'),
]
