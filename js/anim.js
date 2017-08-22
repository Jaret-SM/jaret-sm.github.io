var homeTL = new TimelineMax({});
homeTL.add( TweenMax.staggerTo([".homeSub1",".homeSub2",".homeSub3",".homeSub4"], 0.5, {bottom: "0px", opacity: "1", ease:Back.easeOut}, 0.2) );
homeTL.add( TweenMax.to("#homeSection h1", 1, {top: "0px", opacity: "1", ease:Power2.easeInOut}) );
homeTL.add( TweenMax.to("#homeSection a", 1, {opacity: "1", ease:Power2.easeInOut}) );

var section2TL = new TimelineMax({});
section2TL.add( TweenMax.to("#section2 h2", 1, {top: "0px", opacity: "1", ease:Power2.easeInOut}) );

// Initial animation pause
section2TL.pause();

// Smooth scrolling to anchor links
$('a[href^=\\#]').on('click', function(event){
	event.preventDefault();
	$('html,body').animate({
		scrollTop: $(this.hash).offset().top
	}, 800);
});

// Check for divs hitting the top of screen and start animations
var $window = $(window);
var s2dist = $("#section2").offset().top - 20;

$window.scroll(function() {
  if ( $window.scrollTop() >= s2dist ) {
    //Resume animations now that div is in view
    section2TL.resume();
  } else if ( $window.scrollTop() < s2dist ) {
    section2TL.pause();
  }
});
