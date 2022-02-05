from unicodedata import name
from django.urls import path

from todos import views

urlpatterns = [
    path('', views.TodoListCreateView.as_view(), name="todo-list-create-view"),
    path('<int:pk>/', views.TodoDetailView.as_view(), name="todo-detail"),
]
