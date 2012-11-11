---
layout: default-latex
content_type: md
---

#This is another page
When $a \ne 0$ there are two solutions to $(ax^2 + bx + c = 0)$ 
and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
{% highlight javascript %}
try {

  var print = Loco.console.println;
  var ctx = Loco.ctx;

// command line
  var cmdParam = ctx.cmdLine()[ctx.cmdLine().length - 1];
  var WEBSITE = cmdParam.lastIndexOf( ".js" ) < 0 ?
                cmdParam : "http://www.nyt.com";

// create main window
  var ww = Loco.gui.create( "WebWindow" );
// setup main window
  ww.setAttributes( {DeveloperExtrasEnabled: true,
                     LocalContentCanAccessFileUrls: true,
                     LocalContentCanAccessRemoteUrls: true,
                     AcceleratedCompositingEnabled: true } );
  ww.setEnableContextMenu( true );
  ww.setForwardKeyEvents( true );
  if( !ww.syncLoad( WEBSITE, 5000 ) ) throw "Load failure";
  var elements = ww.findElements( "div" );
  print( elements.length );
  print( elements[ 0 ].attributeNames() );
  print( elements[ 0 ].eval( "this.id" ));
  elements = ww.forEachElement( "*", "this.childNodes.length === 0" );
  print( elements.length );
  elements = ww.forEachElement( "div", "this.style.backgroundColor='yellow'; false;" );
  print( elements.length );
  elements = ww.forEachElement( "div", "this.style['-webkit-transform']='rotate(1deg)'; false;" );
  print( elements.length );
  ww.show();
} catch(e) {
  Loco.console.printerrln(e);
  Loco.ctx.exit( -1 );
}
{% endhighlight %}

{% highlight cpp %}
class Class {
public:
  Class( int i = 0 ) : i_( i ) {}
private:
  int i_;
};
{% endhighlight %}
