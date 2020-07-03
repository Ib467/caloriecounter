function router($route_on){
    var routers = $($route_on + '[data-function="router"]');

    // The router function 
    routers.each(function(){

      var $this = $(this);
      var links = $this.find('a'); // Find a tags
      var route = $this.attr('data-route'); // Get the route via the data-route attribute
`
      // For each links
      links.each(function(){

        var link = $(this);
        link.attr('data-route',route); // Give the route to the links

        var route_url = $(this).attr('href'); // Get the real url

        if("[data-route="+route+"]"){
          link.attr('href',route+'/'+route_url) // Add the route to the URL
          link.attr('text-route', route+'/'+route_url) // Not relevant, but add the route to a text-route attribute.
        }

      });
    });
  }
        
  router('');