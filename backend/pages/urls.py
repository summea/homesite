from django.urls import path

from . import views

urlpatterns = [
    path('<int:page_id>/', views.view, name='view'),
    path('', views.index, name='index'),
]
