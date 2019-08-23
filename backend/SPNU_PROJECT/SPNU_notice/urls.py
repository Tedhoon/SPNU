from django.urls import path, include
from .views import *
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers


router = routers.DefaultRouter()
router.register('SPNU_notice', BoardViewSet , 'SPNU_notice'),  #첫번 째 인자가 url네이밍

urlpatterns = [
    path('', include(router.urls)),
    ]