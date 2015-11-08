var load_path = "./";	// load path.

// get args
function get_args()
{
  var result = {};
  if( 1 < window.location.search.length ) {
    var query = window.location.search.substring( 1 );
    var parameters = query.split( '&' );
    for( var i = 0; i < parameters.length; i++ ) {
       var element = parameters[ i ].split( '=' );
       result[ decodeURIComponent( element[ 0 ] ) ] = decodeURIComponent( element[ 1 ] );
    }
  }
  return result;
}



var md;	// markdown-it.

$(function() {
  md = window.markdownit();

  var args = get_args();
  var header = "header";
  var target = "body";

  if(args.body === undefined) {
    target = 'body';			// latest.
  } else {
    target = args.body;
  }

  $.get(load_path + target + '.md', function(text) {
    var result = md.render(text);
    if(result.length > 0) {
      $('.result-body').html(result);
    }
  });
});

