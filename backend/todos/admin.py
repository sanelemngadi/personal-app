from django.contrib import admin
from todos.models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ("id", "task", "completed")


admin.site.register(Todo, TodoAdmin)
