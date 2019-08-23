from django.db import models
# from django.utils import timezone


class Board(models.Model):
    #방번호는 내부 pk값으로 하면 될듯
    
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=20, default = "익명")  #여기서 익명 빼고 blank=True랑... 음... User임포트해서 User.username하면 되려나
    text = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    hits =  models.IntegerField(null=True, blank=True) #조회수

    def __str__(self):
        return self.title