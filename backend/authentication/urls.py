from django.urls import path
from authentication.views import RegistrationView, LoginVeiw, LoggedInUserView, CompleteRegistrationView

urlpatterns = [
    path('', RegistrationView.as_view(), name="registration-view"),
    path('login/', LoginVeiw.as_view(), name="login-view"),
    path('user/', LoggedInUserView.as_view(), name="login_in-user"),
    path('complete-registration/<int:pk>/', CompleteRegistrationView.as_view(),
         name="complete-registration-view"),
]
