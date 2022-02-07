from todos.permissions import IsOwnerOrReadOnly
from todos.serializers import TodoSerializer
from todos.models import Todo

from rest_framework import permissions
from rest_framework import generics


class TodoListCreateView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    # The IsOwnerOrReadOnly allow only the owner of the todo modeify or delete the todo
    # The IsAuthenticatedOrReadOnly allows anonymous to only read todos, no modification
    # and no removing because we don't want unknown users to have access to our data
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly
    ]

    # this method perform_create() get called when the user press create to create a todo
    def perform_create(self, serializer):
        # when creating the todo the logged in user is the owner of the todo
        serializer.save(user=self.request.user)

    def get_queryset(self):
        # return todos only for the logined in user
        return self.queryset.filter(user=self.request.user)


class TodoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly
    ]

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)
