//Custom functions
//Randomize values for animation vars
function smRan(max, min) {
  return function() {
    return (Math.random() * max) + min;
  }
};

//Animation timelines
var homeTL = new TimelineMax({});
homeTL.add( TweenMax.staggerTo([".homeSub1",".homeSub2",".homeSub3",".homeSub4"], 0.5, {bottom: "0px", opacity: "1", ease:Back.easeOut}, 0.2) );
homeTL.add( TweenMax.to("#homeSection h1", 1, {top: "0px", opacity: "1", ease:Power2.easeInOut}) );
homeTL.add( TweenMax.to("#homeSection a", 1, {opacity: "1", ease:Power2.easeInOut}) );

var section2TL = new TimelineMax({});
section2TL.add( TweenMax.to("#section2 h2", 1, {top: "0px", opacity: "1", ease:Power2.easeInOut}) );
section2TL.add( TweenMax.to("#section2 p", 1, {bottom: "0px", opacity: "1", ease:Power2.easeInOut}) );
section2TL.add( TweenMax.to("#section2 .smDivider", 1, {opacity: "1", ease:Power2.easeInOut}) );
section2TL.add( TweenMax.to("#section2 a", 1, {opacity: "1", ease:Power2.easeInOut}) );

var section2TL2 = new TimelineMax({});
section2TL2.add( TweenMax.to(".s2Img1", 1, {left:smRan(100,95), opacity: "1", rotation:smRan(40,-10), delay: 2, ease:Back.easeInOut}) );
section2TL2.add( TweenMax.to(".s2Img2", 1, {left:smRan(100,50), top: "25px", rotation:smRan(10,-20), opacity: "1", ease:Back.easeInOut}) );
section2TL2.add( TweenMax.to(".s2Img3", 1, {left:smRan(100,25), top: "50px", rotation:smRan(30,-10), opacity: "1", ease:Back.easeInOut}) );

var section2TL3 = new TimelineMax({});
//section2TL3.add( TweenMax.staggerTo([".s2Img1", ".s2Img2", ".s2Img3"], 0.5, {scale: "+=0.1", rotation:smRan(50,-25), ease:Back.easeInOut}, 0.25) );
section2TL3.add( TweenMax.to(".s2Img1", 1, {left: '0px', top: '0px', rotation:0, ease:Back.easeInOut}) );
section2TL3.add( TweenMax.to(".s2Img2", 0.5, {left: '150px', top: '50px', rotation:0, ease:Back.easeInOut}) );
section2TL3.add( TweenMax.to(".s2Img3", 0.5, {left: '300px', top: '100px', rotation:0, ease:Back.easeInOut}) );

// Initial animation pause
section2TL.pause();
section2TL2.pause();
section2TL3.pause();

$(".s2ImgContainer").hover(function() {
  if ( section2TL2.time() >= 3 ) {
    section2TL3.play().timeScale(2);
  }
}, function() {
  section2TL3.reverse();
});

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
    section2TL.play().timeScale(2);
    section2TL2.play().timeScale(2);
  } else if ( $window.scrollTop() < s2dist ) {
    section2TL.reverse().timeScale(2);
    section2TL2.reverse().timeScale(2);
  }
});
