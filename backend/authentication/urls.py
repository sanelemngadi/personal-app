from django.urls import path
from authentication.views import RegistrationView, LoginVeiw

urlpatterns = [
    path('', RegistrationView.as_view(), name="registration-view"),
    path('login/', LoginVeiw.as_view(), name="login-view"),
]
