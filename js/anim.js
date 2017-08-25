function randomizeValues(max, min) {
  return function() {
    return (Math.random() * max) + min;
  }
};
function randomize250to1() {
  return randomizeValues(250,1);
}
function randomize1to250() {
  return randomizeValues(1,250);
}
function randomize20to1() {
  return randomizeValues(20,1);
}
function randomize360to1() {
  return randomizeValues(360,1);
}


$('a[href^=\\#]').on('click', function(event){
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
homeTL.to('#homeSection h1', 1, {top: '0px', opacity: '1', ease:Power2.easeInOut});
homeTL.to('#homeSection a', 1, {opacity: '1', ease:Power2.easeInOut});

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
section3TL2.fromTo('.s3Img1', 0.8, {
  rotation: randomize360to1(),
  left: randomize250to1(),
  top: '0px',
  opacity: 0
}, {
  left: '5px',
  top: '0px',
  rotation: 0,
  opacity: 1,
  delay: 2,
  ease:Back.easeInOut
});
section3TL2.fromTo('.s3Text1', 0.25, {
  rotation: randomize20to1(),
  left: randomize1to250(),
  top: '50px',
  opacity: 0
}, {
  left: '55px',
  top: '10px',
  rotation: 0,
  opacity: 1,
  ease:Back.easeInOut
});
section3TL2.fromTo('.s3Img2', 0.7, {
  rotation: randomize360to1(),
  left: randomize250to1(),
  top: '100px',
  opacity: 0
}, {
  left: '20px',
  top: '50px',
  rotation: 0,
  opacity: 1,
  ease:Back.easeInOut
});
section3TL2.fromTo('.s3Text2', 0.25, {
  rotation: randomize20to1(),
  left: randomize1to250(),
  top: '150px',
  opacity: 0
}, {
  left: '70px',
  top: '60px',
  rotation: 0,
  opacity: 1,
  ease:Back.easeInOut
});
section3TL2.fromTo('.s3Img3', 0.6, {
  rotation: randomize360to1(),
  left: randomize250to1(),
  top: '200px',
  opacity: 0
}, {
  left: '10px',
  top: '100px',
  rotation: 0,
  opacity: 1,
  ease:Back.easeInOut
});
section3TL2.fromTo('.s3Text3', 0.25, {
  rotation: randomize20to1(),
  left: randomize1to250(),
  top: '250px',
  opacity: 0
}, {
  left: '60px',
  top: '110px',
  rotation: 0,
  opacity: 1,
  ease:Back.easeInOut
});
section3TL2.fromTo('.s3Img4', 0.5, {
  rotation: randomize360to1(),
  left: randomize250to1(),
  top: '250px',
  opacity: 0
}, {
  left: '-20px',
  top: '150px',
  rotation: 0,
  opacity: 1,
  ease:Back.easeInOut
});
section3TL2.fromTo('.s3Text4', 0.25, {
  rotation: randomize20to1(),
  left: randomize1to250(),
  top: '250px',
  opacity: 0
}, {
  left: '30px',
  top: '160px',
  rotation: 0,
  opacity: 1,
  ease:Back.easeInOut
});
section3TL2.fromTo('.s3Img5', 0.4, {
  rotation: randomize360to1(),
  left: randomize250to1(),
  top: '250px',
  opacity: 0
}, {
  left: '-5px',
  top: '200px',
  rotation: 0,
  opacity: 1,
  ease:Back.easeInOut
});
section3TL2.fromTo('.s3Text5', 0.25, {
  rotation: randomize20to1(),
  left: randomize1to250(),
  top: '250px',
  opacity: 0
}, {
  left: '45px',
  top: '210px',
  rotation: 0,
  opacity: 1,
  ease:Back.easeInOut
});
section3TL2.fromTo('.s3Img6', 0.3, {
  rotation: randomize360to1(),
  left: randomize250to1(),
  top: '250px',
  opacity: 0
}, {
  left: '20px',
  top: '250px',
  rotation: 0,
  opacity: 1,
  ease:Back.easeInOut
});
section3TL2.fromTo('.s3Text6', 0.25, {
  rotation: randomize20to1(),
  left: randomize1to250(),
  top: '250px',
  opacity: 0
}, {
  left: '70px',
  top: '260px',
  rotation: 0,
  opacity: 1,
  ease:Back.easeInOut
});
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


var allTimelines = [
  buttonTL, section2TL, section2TL2, section2TL3,
  section3TL, section3TL2, section3TL3, section3TL4,
  section4TL
];
for ( i = 0; i < allTimelines.length; i++ ) {
  allTimelines[i].pause();
  allTimelines[i].timeScale(2);
}


var currentItemHovered;

$('.animButton').hover(function() {
  buttonTL.play();
}, function() {
  buttonTL.stop();
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
  if ( section3TL2.time() >= 6.5 ) {
    section3TL3.play().timeScale(4);
  }
}, function() {
  TweenMax.to(currentItemHovered, 0.25, {scale: 0.7, rotation:0, ease:Power2.easeInOut});
  TweenMax.to(this, 0.25, {rotation:0, ease:Power2.easeInOut});
  currentItemHovered.removeClass('s3imgGreen');
  section3TL3.reverse().timeScale(4);
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

$window.scroll(function() {
  if ( $window.scrollTop() >= s2dist ) {
    section2TL.play();
    section2TL2.play();
  } else {
    section2TL.reverse();
    section2TL2.reverse();
  }
  if ( $window.scrollTop() >= s3dist ) {
    section3TL.play();
    section3TL2.play();
  } else {
    section3TL.reverse();
    section3TL2.reverse();
  }
  if ( $window.scrollTop() >= s4dist ) {
    section4TL.play();
  } else {
    section4TL.reverse();
  }
});
