from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions, status
from .serializers import TodoSerializer
from .models import Todo
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

class DeleteTodoView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Todo.objects.all()

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class ToggleTodoCompletion(generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.completed = not instance.completed
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

class TodoList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoCreate(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoDetail(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TodoSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('id')
        return get_object_or_404(Todo, id=item)
    