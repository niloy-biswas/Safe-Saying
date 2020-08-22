from .models import Post

def posts(request):
    return {
        'all_posts': Post.objects.order_by('posted'),
    }