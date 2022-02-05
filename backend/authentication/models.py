import email
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin


class CustomBaseUserManager(BaseUserManager):
    def create_superuser(self, username, email, first_name, last_name, password, **extra_fields):
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_superuser") is not True:
            raise ValueError(
                "The superuser must be assign is_superuser=True"
            )

        if extra_fields.get("is_staff") is not True:
            raise ValueError(
                "The superuser must be assign is_staff=True"
            )

        return self.create_user(username, email, first_name, last_name, password, **extra_fields)

    def create_user(self, username, email, first_name, last_name, password, **extra_fields):
        if not email:
            raise ValueError(
                "The email field must be provided!"
            )

        email = self.normalize_email(email)
        user = self.model(username=username, email=email, first_name=first_name,
                          last_name=last_name, **extra_fields)

        user.set_password(password)
        user.save()
        return user


class User(AbstractUser, PermissionsMixin):
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=200, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    password = models.CharField(max_length=300)
    is_active = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)

    objects = CustomBaseUserManager()

    def __str__(self):
        return self.username

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']
