from userpost.models import UserPost
from userpost.serializer import UserSerializer
from rest_framework import viewsets
from rest_framework.filters import SearchFilter

class UserPostViewSet(viewsets.ModelViewSet):
    queryset = UserPost.objects.all()
    # queryset.exclude(author__id=2)
    serializer_class = UserSerializer

    filter_backends = [SearchFilter]
    search_fields = ('title',)

    # search 인자로 httpie 요청 보내면 필터링 된 결과 받아볼 수 있음    
    def get_queryset(self):
        qs = super().get_queryset()
        # qs = qs.filter(author__id = 2)
        qs = qs.filter(author=self.request.user) #  현재 로그인한 유저가 작성한 글만 보겠다
        ## 로그인한 사용자가 없으면 에러가 뜸

        # 만약 사용자가 로그인 되어 있으면 그 사용자가 작성한 글만 띄워주고
        # 로그인한 사용자가 없다면 비어있는 쿼리셋을 던져주기
        if self.request.user.is_authenticated: 
            qs.filter(author=self.request.user)
        else:
            qs = qs.none() 
        return qs
    