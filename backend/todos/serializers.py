from rest_framework import serializers
from todos.models import Todo
from authentication.models import User


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    # url = serializers.HyperlinkedRelatedField(
    #     Todo.objects.all(), view_name="user-detail")
    # url = serializers.HyperlinkedIdentityField(
    #     view_name="todo-detail-view")

    user = serializers.SlugRelatedField(
        # queryset=User.objects.all(),
        slug_field='username',
        read_only=True
    )

    class Meta:
        model = Todo
        fields = ("url", "user", "task", "completed", "created")
        extra_kwargs = {'user': {"read_only": True}}
        read_only_fields = ("user",)
