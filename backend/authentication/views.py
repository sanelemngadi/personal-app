from django.contrib.auth.hashers import check_password
from rest_framework.generics import CreateAPIView
from authentication.serializers import UserSerializer
from authentication.models import User
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status


class RegistrationView(CreateAPIView):
    serializer_class = UserSerializer


class LoginVeiw(APIView):
    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]

        try:
            login_user = User.objects.get(email__iexact=email)
        except User.DoesNotExist:
            return Response({"error": "The user with this email does not exist!"}, status=status.HTTP_403_FORBIDDEN)

        if not check_password(password, login_user.password):
            return Response({"error": "The password is incorrect"}, status=status.HTTP_403_FORBIDDEN)

        # token = RefreshToken.access_token(login_user)
        refresh_token = RefreshToken.for_user(login_user)

        serializer = UserSerializer(login_user)

        if serializer:
            data = {
                "user": serializer.data,
                "access_token": str(refresh_token.access_token),
                "refresh_token": str(refresh_token)
            }
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


{
    "email": "sanele@gmail.com",
    "password": "sanele"
}
