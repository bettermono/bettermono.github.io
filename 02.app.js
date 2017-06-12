var $header, $body; $.ioutils.nolog = false;
var page = function( k, $box, donec) { $box.buttonize().onclick( function() { $( 'div[id="body"]').ioanimoutremove( 'fast'); $( 'body').iounder( true).attr( 'id', 'body').css({ position: 'relative', margin: '100px 0px 100px 10%', width: '80%'}).load( k + '.html');}); donec(); }
var pages = function() { $header.ioloop( $.ttl( 'home'), '10ms', function( dom, value, sleep, c) { 
	if ( ! value.length) { $header.iocenterh(); $header.children().first().simulate( 'click'); return c(); }
	var k = value.shift(); $.log( k);
	var $box = $header.ioover({ display: 'relative', 'float': 'right', margin: '0px 20px 2px 20px', 'font-size': $.io.font.huge, color: '#c00000'}).append( k);
	page( k, $box, function() { c( value); });
})}
$( document).ready( function() { 
	$( 'title').first().empty().append( 'bettermono');
	$( 'div').first().ioground( '#fff', 0.95); $header = $( 'div').last().ioover({ position: 'absolute', bottom: '5px', left: '0px', width: 'auto', height: 'auto'}); 
	pages(); 
})