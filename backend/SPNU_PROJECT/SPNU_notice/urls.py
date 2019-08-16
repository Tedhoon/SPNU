from django.urls import path
from .views import *
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('SPNU_notice', BoardList.as_view(), name="notice_board"),
    path('SPNU_notice/<int:pk>', BoardDetail.as_view()),
    ]