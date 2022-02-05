from operator import imod
from django.db import models
from authentication.models import User


class Todo(models.Model):
    task = models.CharField(max_length=350, unique=True)
    completed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task
