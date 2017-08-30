function randomizeValues(max, min) {
  return function() {
    return (Math.random() * max) + min;
  }
};
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
  else {
    obj.addClass('stopHover');
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


var homeTL = new TimelineMax({});
homeTL.staggerTo(['.homeSub1','.homeSub2','.homeSub3','.homeSub4'], 0.5, {
  bottom: '0px',
  opacity: '1',
  ease:Back.easeOut
}, 0.2);
homeTL.to('#section1 h1', 1, {top: '0px', opacity: '1', ease:Power2.easeInOut});
homeTL.to('#section1 a', 1, {opacity: '1', ease:Power2.easeInOut});

var buttonTL = new TimelineMax({repeat: -1});
buttonTL.to('.animButton', 0.5, {width: '10%', ease:Power2.easeInOut});

var section2TL = new TimelineMax({});
section2TL.to('#section2 h2', 1, {top: '0px', opacity: '1', ease:Power2.easeInOut});
section2TL.to('#section2 p', 1, {bottom: '0px', opacity: '1', ease:Power2.easeInOut});
section2TL.to('#section2 .smDivider', 1, {opacity: '1', ease:Power2.easeInOut});
section2TL.to('#section2 a', 1, {opacity: '1', ease:Power2.easeInOut});
var section2TL2 = new TimelineMax({});
section2TL2.to('.s2Img1', 1, {
  left: randomizeValues(100,95),
  opacity: '1',
  rotation: randomizeValues(40,-10),
  delay: 2, ease:Back.easeInOut
});
section2TL2.to('.s2Img2', 1, {
  left: randomizeValues(100,50),
  top: '25px',
  rotation: randomizeValues(10,-20),
  opacity: '1',
  ease:Back.easeInOut
});
section2TL2.to('.s2Img3', 1, {
  left: randomizeValues(100,25),
  top: '50px',
  rotation: randomizeValues(30,-10),
  opacity: '1',
  ease:Back.easeInOut
});
var section2TL3 = new TimelineMax({});
section2TL3.to('.s2Img1', 1, {left: '0px', top: '0px', rotation:0, ease:Back.easeInOut});
section2TL3.to('.s2Img2', 0.5, {left: '100px', top: '25px', rotation:0, ease:Back.easeInOut});
section2TL3.to('.s2Img3', 0.5, {left: '200px', top: '50px', rotation:0, ease:Back.easeInOut});

var section3TL = new TimelineMax({});
section3TL.to('#section3 h2', 1, {top: '0px', opacity: '1', ease:Power2.easeInOut});
section3TL.to('.s3SubText', 1, {bottom: '0px', opacity: '1', ease:Power2.easeInOut});
section3TL.to('#section3 .smDivider', 1, {opacity: '1', ease:Power2.easeInOut});
section3TL.to('#section3 a, .section3Reload', 1, {opacity: '1', ease:Power2.easeInOut});
var section3TL2 = new TimelineMax({});
section3TL2.to('.s3Img1', 2, { delay: 2 });
for (var i = 1; i <= 6; i++) {
  var s3randomValue = moveImgLeftRan2();
	section3TL2.fromTo('.s3Img'+i, 0.8 - ((i-1) * 0.1), {
		rotation: moveImgRotateRan(),
		left: moveImgLeftRan(),
		top: ((i-1)*50)+'px',
		opacity: 0
	}, {
		left: s3randomValue,
		top: ((i-1)*50)+'px',
		rotation: 0,
		opacity: 1,
		ease:Back.easeInOut
	});
	section3TL2.fromTo('.s3Text'+i, 0.25, {
    rotation: moveTextRotateRan(),
		left: moveTextLeftRan(),
		top: ((i-1)*50)+'px',
		opacity: 0
	}, {
		left: s3randomValue + 50 + 'px',
		top: ((i-1)*50+8)+'px',
		rotation: 0,
		opacity: 1,
		ease:Back.easeInOut
	});
};
var section3TL3 = new TimelineMax({});
function setSpeedLeftEasing(speed,start,end,easing) {
  section3TL3.to('.s3Img1', speed, {left: start, ease:easing});
  section3TL3.to('.s3Text1', speed, {left: end, ease:easing});
  section3TL3.to('.s3Img2', speed, {left: start, ease:easing});
  section3TL3.to('.s3Text2', speed, {left: end, ease:easing});
  section3TL3.to('.s3Img3', speed, {left: start, ease:easing});
  section3TL3.to('.s3Text3', speed, {left: end, ease:easing});
  section3TL3.to('.s3Img4', speed, {left: start, ease:easing});
  section3TL3.to('.s3Text4', speed, {left: end, ease:easing});
  section3TL3.to('.s3Img5', speed, {left: start, ease:easing});
  section3TL3.to('.s3Text5', speed, {left: end, ease:easing});
  section3TL3.to('.s3Img6', speed, {left: start, ease:easing});
  section3TL3.to('.s3Text6', speed, {left: end, ease:easing});
}
setSpeedLeftEasing(0.5,'0px','50px',Back.easeInOut);
var section3TL4 = new TimelineMax({});
section3TL4.to('#section3 h2', 0.5, {left: '50px', opacity: '0', ease:Power2.easeInOut});
section3TL4.to('.s3SubText', 0.5, {left: '50px', opacity: '0', onComplete:replaceText, ease:Power2.easeInOut});
section3TL4.to('#section3 h2', 0.5, {left: '0px', opacity: '1', ease:Power2.easeInOut});
section3TL4.to('.s3SubText', 0.5, {left: '0px', opacity: '1', ease:Power2.easeInOut});

var section4TL = new TimelineMax({});
section4TL.to('#section4 h2', 1, {top: '0px', opacity: '1', ease:Power2.easeInOut});
section4TL.to('.s4SubText', 1, {bottom: '0px', opacity: '1', ease:Power2.easeInOut});
section4TL.to('#section4 .smDivider', 1, {opacity: '1', ease:Power2.easeInOut});
section4TL.to('#section4 a, .section3Reload', 1, {opacity: '1', ease:Power2.easeInOut});
var section4TL2 = new TimelineMax({delay: 2, onComplete:checkHover, onCompleteParams:[$('.s4box')]});
for (var i = 1; i <= 4; i++) {
	section4TL2.fromTo('.s4icon'+i, 0.5, {
		top: '-80px',
		opacity: 0,
    rotation: moveImgRotateRan()
	}, {
    top: '0px',
		opacity: 1,
    rotation: 0,
		ease:Back.easeInOut
	});
	section4TL2.fromTo('.s4text'+i, 1, {
    top: '-20px',
		opacity: 0
	}, {
    top: '0px',
		opacity: 1,
		ease:Back.easeInOut
	});
};
var section4TL3 = new TimelineMax({delay: 2});
section4TL3.fromTo('.s4icon1', 3, {rotation: 360}, {rotation: 0, yoyo: true, repeat: -1, ease:Back.easeInOut});
section4TL3.fromTo('.s4icon2', 1, {scaleX: 1}, {scaleX: 1.25, yoyo: true, repeat: -1, ease:Back.easeInOut});
section4TL3.fromTo('.s4icon3', 1.5, {color: '#5bc6cc'}, {color: '#21c92d', scale:1.1, yoyo: true, repeat: -1, ease:Back.easeInOut});
section4TL3.fromTo('.s4icon4', 2, {rotationY:0}, {rotationY:360, repeat: -1, ease:Linear.easeNone});

var section5TL = new TimelineMax({});
section5TL.to('#section5 h2', 1, {top: '0px', opacity: '1', ease:Power2.easeInOut});
section5TL.to('#section5 p', 1, {bottom: '0px', opacity: '1', ease:Power2.easeInOut});
section5TL.to('#section5 .smDivider', 1, {opacity: '1', ease:Power2.easeInOut});
section5TL.to('#section5 a', 1, {opacity: '1', ease:Power2.easeInOut});

var allTimelines = [
  buttonTL, section2TL, section2TL2, section2TL3,
  section3TL, section3TL2, section3TL3, section3TL4,
  section4TL, section4TL2, section4TL3, section5TL
];
for ( i = 0; i < allTimelines.length; i++ ) {
  allTimelines[i].pause();
  allTimelines[i].timeScale(2);
};


var currentItemHovered;

$('#section1 a').hover(function() {
  TweenMax.to(this, 0.25, {bottom: '5px', ease:Power2.easeInOut});
}, function() {
  TweenMax.to(this, 0.25, {bottom: '0px', ease:Power2.easeInOut});
});
$('.animButton').hover(function() {
  buttonTL.resume();
}, function() {
  buttonTL.pause();
});
$('.s2ImgContainer').hover(function() {
  if ( section2TL2.time() >= 3 ) {
    section2TL3.play().timeScale(2);
  }
}, function() {
  section2TL3.reverse();
});
$('.s3ImgContainer p').hover(function() {
  currentItemHovered = $(this).prev('img');
  TweenMax.to(currentItemHovered, 0.25, {scale: 1, rotation:randomizeValues(20,-10), ease:Power2.easeInOut});
  TweenMax.to(this, 0.25, {rotation:randomizeValues(10,-5), ease:Power2.easeInOut});
  currentItemHovered.addClass('s3imgGreen');
  if ( section3TL2.time() >= 4 ) {
    section3TL3.play().timeScale(4);
  }
}, function() {
  TweenMax.to(currentItemHovered, 0.25, {scale: 0.7, rotation:0, ease:Power2.easeInOut});
  TweenMax.to(this, 0.25, {rotation:0, ease:Power2.easeInOut});
  currentItemHovered.removeClass('s3imgGreen');
  section3TL3.reverse().timeScale(4);
});
$('.s4box').hover(function() {
  section4TL3.timeScale(0.5);
  TweenMax.to($(this).find('p'), 0.5, {scale: 1.2, ease:Power2.easeInOut});
}, function() {
  section4TL3.timeScale(2);
  TweenMax.to($(this).find('p'), 0.5, {scale: 1, ease:Power2.easeInOut});

});


var section3HoverText = {
  'newText1': 'We make it a breeze to request different types of documentation from previous schools. Our transcript entry tool saves time on data entry and reduces human error by automatically populating entry fields based on probability by school.',
  'newText2': 'Automatically suggest course schedules based on student and teacher data as well as graduation requirements for specific diploma types, and make individual changes when needed.',
  'newText3': 'Empower faculty with the necessary information to provide individualized support and timely intervention. Formative and summative assessments with fair, valid and reliable questions developed at the appropriate depth of knowledge (DOK) are used to provide reliable data on student performance.',
  'newText4': 'Search and filter capabilities allow teachers and staff to quickly find a student and view basic stats, current course progress, photo and contact information, all in a static header.',
  'newText5': 'GPA trending displays academic progress in real time for the opportunity to intervene before a temporary setback becomes a long-term issue. A transcript evaluation section gives both high level and detailed views in a student’s progress toward graduation.',
  'newText6': 'Going on autopilot is a good thing when you can automatically generate tasks such as a staff member calling a family — even when an application has not been completed.',
}
var newHeader;
var newSubText;
var ogHeader = 'Student Information System';
var ogText = 'The SIS is configurable, reliable and intuitive with a robust selection of reporting features. It eliminates redundancies in the enrollment process while increasing efficiency in monitoring student and teacher progress and state compliance.';

$('.s3ImgContainer p').click(function() {
  newHeader = $(this).text();
  newSubText = section3HoverText[$(this).data('s3-text')];
  section3TL4.restart();
})
function replaceText() {
  $('#section3 h2').text(newHeader);
  $('.s3SubText').text(newSubText);
}
$('.section3Reload').click(function() {
  section3TL4.restart();
  setTimeout(function() {
    newHeader = ogHeader;
    newSubText = ogText;
    replaceText();
  }, 400);
});


var $window = $(window);
var s2dist = $('#section2').offset().top - 20;
var s3dist = $('#section3').offset().top - 20;
var s4dist = $('#section4').offset().top - 20;
var s5dist = $('#section5').offset().top - 20;

$window.scroll(function() {
  function animateSection(sections, dist) {
    if($window.scrollTop() >= dist) {
      sections.forEach(function(s) { s.play(); });
    } else {
      sections.forEach(function(s) { s.reverse(); });
    }
  }
  animateSection([section2TL, section2TL2], s2dist);
  animateSection([section3TL, section3TL2], s3dist);
  animateSection([section4TL, section4TL2, section4TL3], s4dist);
  animateSection([section5TL], s5dist);
});
