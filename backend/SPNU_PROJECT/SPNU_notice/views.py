from .models import Board
from .serializer import BoardSerializer
from rest_framework import viewsets 

from rest_framework.permissions import IsAuthenticatedOrReadOnly #permission 관련
from rest_framework.authentication import SessionAuthentication,TokenAuthentication ,BasicAuthentication
from rest_framework.filters import SearchFilter

from rest_framework import serializers


class BoardViewSet(viewsets.ModelViewSet): 
    queryset = Board.objects.all().order_by('id')
    serializer_class = BoardSerializer

    permission_classes = [IsAuthenticatedOrReadOnly]
    authentication_classes = [SessionAuthentication]
    
    filter_backends = [SearchFilter] 
    search_fields = ('title','text',) # 어떤 column을 기반으로 검색을 할건지 (튜플과 ',' 필수!)


    def perform_create(self, serializers):
        serializers.save(author=self.request.user)
