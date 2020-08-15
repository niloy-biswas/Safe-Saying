$('#like').click(
    function (e) {
        e.preventDefault()
        var this_ = $(this)
        var likedUrl = this_.attr("data-url")
        var likeIcon = $('#like-icon')
        var likeCount = $('#likes_count')

        $.ajax({
            method: "GET",
            url: likedUrl,
            success: function (data) {
                if (data.liked) {
                    likeIcon.removeClass();
                    likeIcon.addClass('fas fa-heart fa-3x');
                    likeCount.text(data.likes_count)
                    
                } else {
                    likeIcon.removeClass();
                    likeIcon.addClass('far fa-heart fa-3x');
                    likeCount.text(data.likes_count)
                }
            },
            error: function (data) {
                console.log("error")
                console.log(data)
            }
        })
        if (likeIcon.attr('class').includes('far')) {
            likeIcon.toggleClass('fas')
        } else {
            likeIcon.toggleClass('far')
        }
    })