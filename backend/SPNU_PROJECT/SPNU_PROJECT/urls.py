from django.contrib import admin
from django.urls import path, include
# from SPNU_notice import urls
from rest_framework import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('SPNU_notice.urls')),
    path('', include('userpost.urls'), name = "userpost"),

    path('api-auth/' , include('rest_framework.urls')),


]
