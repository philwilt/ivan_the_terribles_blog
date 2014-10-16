$(function() {
  if ($('#blog-posts').length > 0) {
    var pageNumber = 2;
    var hasPosts = true;
    var mainContent = $('#blog-posts');

    $(window).scroll(infiniteScroll);

    function infiniteScroll() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        mainContent.css('padding-bottom', '100em');

        var url = "/posts?page=" + pageNumber;
        pageNumber++;

        $("<div></div>").load( url, function( response, status, xhr ) {
            var posts = $(response).filter('#blog-posts').html()
            if($(response).filter( '#blog-posts' ).html().trim() == '') {
              $(window).unbind( 'scroll' );
              console.log( pageNumber );
            }

            mainContent.append(posts);
            mainContent.css('padding-bottom', '5em');
        });
      }
    }
  }
});


