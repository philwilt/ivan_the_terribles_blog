$(function() {
  if ($('#blog-posts').length > 0) {
    var pageNumber = 2;
    var mainContent = $('#blog-posts');

    $( window ).scroll( function(ev) {

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        mainContent.css('padding-bottom', '100em');

        var url = "/posts/page/" + pageNumber;
        pageNumber++;

        $("<div></div>").load( url, function( response, status, xhr ) {
            var posts = $(response).filter('#blog-posts').html();
            if($.trim(posts) == '') {
              $(window).unbind('scroll');
            }
            mainContent.append(posts);
            mainContent.css('padding-bottom', '5em');
        });
      }
    });
  }

 // TODO: refactor to DRY up
 if ($('#comments').length > 0) {
    var pageNumber = 2;
    var mainContent = $('#comments');

    $( window ).scroll( function(ev) {

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        mainContent.css('padding-bottom', '100em');
        var postNumber = parseInt(document.URL.split('/').pop());
        console.log(postNumber);
        var url = "/posts/" + postNumber + '/page/' + pageNumber;
        pageNumber++;

        $("<div></div>").load( url, function( response, status, xhr ) {
            var posts = $(response).filter('#comments').html();
            if($.trim(posts) == '') {
              $(window).unbind('scroll');
            }
            mainContent.append(posts);
            mainContent.css('padding-bottom', '5em');
        });
      }
    });
  }
});


