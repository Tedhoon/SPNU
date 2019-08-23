from django.shortcuts import render

from rest_framework import viewsets
from .models import Board
from .serializers import BoardSerializer

from .pagination import Mypagination

#using generic class-based views

class BoardViewSet(viewsets.ModelViewSet): #list, retrieve 
    queryset = Board.objects.all().order_by('id')
    serializer_class = BoardSerializer
    pagination_class = Mypagination
