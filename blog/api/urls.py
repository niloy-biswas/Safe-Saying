from django.urls import path

from .views import LikeToggleAPIView

urlpatterns = [
    path('<int:pk>/like/', LikeToggleAPIView.as_view(), name='like_api')
]
