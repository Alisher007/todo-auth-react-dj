from . import views
from django.urls import path

app_name = 'todo'

urlpatterns = [
    path('', views.TodoList.as_view(), name='list'),
    path('create/', views.TodoCreate.as_view(), name='create'),
    path('delete/<pk>/', views.DeleteTodoView.as_view(), name='delete'),
    path('update/<pk>/', views.UpdateTodoView.as_view(), name='update'),
]
