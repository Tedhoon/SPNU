from .models import Board
from rest_framework import serializers

class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = '__all__'
        
        read_only_fields = ('author','created_date','hits',)