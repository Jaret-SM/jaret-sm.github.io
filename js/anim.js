function randomizeValues(max, min) {
  return function() {
    return (Math.random() * max) + min;
  }
};
function randomizeValuesOnce(max, min) {
  return (Math.random() * max) + min;
};
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function moveImgLeftRan() {
  return randomizeValues(250,1);
};
function moveImgLeftRan2() {
  return (Math.random() * 50) + -20;
};
function moveTextLeftRan() {
  return randomizeValues(1,250);
};
function moveTextRotateRan() {
  return randomizeValues(20,1);
};
function moveImgRotateRan() {
  return randomizeValues(360,1);
};
function checkHover(obj) {
  if ( obj.hasClass('stopHover') ) {
    obj.removeClass('stopHover');
  }
};

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$('a[href^=\\#section]').on('click', function(event){
	event.preventDefault();
	$('html,body').animate({
		scrollTop: $(this.hash).offset().top
	}, 800);
});

function makeSVG(tag, attrs) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (var k in attrs)
    el.setAttribute(k, attrs[k]);
  return el;
};

var homeTL = new TimelineMax({});
homeTL.staggerTo(['.homeSub1','.homeSub2','.homeSub3','.homeSub4','.homeSub5'], 0.5, {
  bottom: '0px',
  opacity: '1',
  ease:Back.easeOut
}, 0.2);
homeTL.to('#section1 h1', 1, {top: '0px', opacity: '1', ease:Power2.easeInOut});
homeTL.to('#section1 a', 1, {opacity: '1', ease:Power2.easeInOut});

var section2TL = new TimelineMax({});
section2TL.to('#section2 h2', 1, {top: '0px', opacity: '1', ease:Power2.easeInOut});
section2TL.to('#section2 p', 1, {bottom: '0px', opacity: '1', ease:Power2.easeInOut});
section2TL.to('#section2 .smDivider', 1, {opacity: '1', ease:Power2.easeInOut});
section2TL.staggerFromTo('#section2 ul li', 1, {
  opacity: 0,
  right: '50px'
}, {
  opacity: 1,
  right: '0px',
  ease:Power2.easeInOut
}, .5)
section2TL.fromTo('#section2 .laptopBG', 1, {
  opacity: 0,
  bottom: '40px'
}, {
  opacity: 1,
  bottom: '20px',
  ease:Power2.easeInOut
});
section2TL.to('#section2 a', 1, {opacity: '1', ease:Power2.easeInOut});


var section3TL = new TimelineMax({});
section3TL.to('#section3 h2', 1, {top: '0px', opacity: '1', ease:Power2.easeInOut});
section3TL.to('#section3 p', 1, {bottom: '0px', opacity: '1', ease:Power2.easeInOut});
section3TL.to('#section3 .smDivider', 1, {opacity: '1', ease:Power2.easeInOut});
section3TL.staggerFromTo('#section3 ul li', 1, {
  opacity: 0,
  right: '50px'
}, {
  opacity: 1,
  right: '0px',
  ease:Power2.easeInOut
}, .5)
section3TL.to('#section3 a', 1, {opacity: '1', ease:Power2.easeInOut});
section3TL.fromTo('#section3 img', 1, {
  opacity: 0,
  bottom: '20px'
}, {
  opacity: 1,
  bottom: '0px',
  ease:Power2.easeInOut
});

var section4TL = new TimelineMax({});
section4TL.to('#section4 h2', 1, {top: '0px', opacity: '1', ease:Power2.easeInOut});
section4TL.to('#section4 p', 1, {bottom: '0px', opacity: '1', ease:Power2.easeInOut});
section4TL.to('#section4 .smDivider', 1, {opacity: '1', ease:Power2.easeInOut});
section4TL.staggerFromTo('#section4 ul li', 1, {
  opacity: 0,
  right: '50px'
}, {
  opacity: 1,
  right: '0px',
  ease:Power2.easeInOut
}, .5)
section4TL.to('#section4 a', 1, {opacity: '1', ease:Power2.easeInOut});
section4TL.staggerFromTo('#section4 .phoneBG', 1, {
  opacity: 0,
  bottom: '20px'
}, {
  opacity: 1,
  bottom: '0px',
  ease:Power2.easeInOut
}, .5);

var section5TL = new TimelineMax({});
section5TL.to('#section5 h2', 1, {top: '0px', opacity: '1', ease:Power2.easeInOut});
section5TL.to('#section5 p', 1, {bottom: '0px', opacity: '1', ease:Power2.easeInOut});
section5TL.to('#section5 .smDivider', 1, {opacity: '1', ease:Power2.easeInOut});
section5TL.staggerFromTo('#section5 ul li', 1, {
  opacity: 0,
  right: '50px'
}, {
  opacity: 1,
  right: '0px',
  ease:Power2.easeInOut
}, .5)
section5TL.to('#section5 a', 1, {opacity: '1', ease:Power2.easeInOut});

var section6TL = new TimelineMax({});
section6TL.to('#section6 h2', 1, {top: '0px', opacity: '1', ease:Power2.easeInOut});
section6TL.to('#section6 p', 1, {bottom: '0px', opacity: '1', ease:Power2.easeInOut});
section6TL.to('#section6 .smDivider', 1, {opacity: '1', ease:Power2.easeInOut});

var allTimelines = [
  section2TL, section3TL,
  section4TL, section5TL, section6TL
];
for ( i = 0; i < allTimelines.length; i++ ) {
  allTimelines[i].pause();
  allTimelines[i].timeScale(2);
};

$('#section1 a').hover(function() {
  TweenMax.to(this, 0.25, {bottom: '5px', ease:Power2.easeInOut});
}, function() {
  TweenMax.to(this, 0.25, {bottom: '0px', ease:Power2.easeInOut});
});

var $window = $(window);
var s2dist = $('#section2').offset().top - 20;
var s3dist = $('#section3').offset().top - 20;
var s4dist = $('#section4').offset().top - 20;
var s5dist = $('#section5').offset().top - 20;
var s6dist = $('#section6').offset().top - 20;

$window.scroll(function() {
  function animateSection(sections, dist) {
    if($window.scrollTop() >= dist) {
      sections.forEach(function(s) { s.play().timeScale(2); });
    } else {
      sections.forEach(function(s) { s.pause(); });
    }
  }
  animateSection([section2TL], s2dist);
  animateSection([section3TL], s3dist);
  animateSection([section4TL], s4dist);
  animateSection([section5TL], s5dist);
  animateSection([section6TL], s6dist);
});
