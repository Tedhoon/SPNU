from django.db import models
# from django.utils import timezone
from django.conf import settings


class Board(models.Model):
    #방번호는 내부 pk값으로 하면 될듯
    
    title = models.CharField(max_length=200)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE)
    text = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    hits =  models.IntegerField(null=True, blank=True) #조회수

    def __str__(self):
        return self.title