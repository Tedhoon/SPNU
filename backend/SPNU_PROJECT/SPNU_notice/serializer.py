from .models import Board
from rest_framework import serializers

class BoardSerializer(serializers.ModelSerializer):

    author_name = serializers.ReadOnlyField(source = 'author.username')

    class Meta:
        model = Board
        fields = '__all__'
        
        read_only_fields = ('author','created_date','hits',)