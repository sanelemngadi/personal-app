from django.contrib import admin
from authentication.models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "email", "is_admin")


admin.site.register(User, UserAdmin)
