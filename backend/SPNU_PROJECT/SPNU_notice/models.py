from django.db import models
from django.utils import timezone


class Board(models.Model):
    #방번호는 내부 pk값으로 하면 될듯
    
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=20, blank=True)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    hits =  models.IntegerField(null=True, blank=True) #조회수

    def __str__(self):
        return self.title