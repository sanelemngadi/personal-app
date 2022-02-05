from django.urls import path
from authentication.views import RegistrationView, LoginVeiw, LoggedInUserView

urlpatterns = [
    path('', RegistrationView.as_view(), name="registration-view"),
    path('login/', LoginVeiw.as_view(), name="login-view"),
    path('user/', LoggedInUserView.as_view(), name="login_in-user"),
]
