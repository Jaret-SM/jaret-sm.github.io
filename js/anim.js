//Custom functions
//Randomize values for animation vars
function smRan(max, min) {
  return function() {
    return (Math.random() * max) + min;
  }
};

// Smooth scrolling to anchor links
$('a[href^=\\#]').on('click', function(event){
	event.preventDefault();
	$('html,body').animate({
		scrollTop: $(this.hash).offset().top
	}, 800);
});

//Animation timelines
//Section 1
var homeTL = new TimelineMax({});
homeTL.add( TweenMax.staggerTo([".homeSub1",".homeSub2",".homeSub3",".homeSub4"], 0.5, {bottom: "0px", opacity: "1", ease:Back.easeOut}, 0.2) );
homeTL.add( TweenMax.to("#homeSection h1", 1, {top: "0px", opacity: "1", ease:Power2.easeInOut}) );
homeTL.add( TweenMax.to("#homeSection a", 1, {opacity: "1", ease:Power2.easeInOut}) );

var buttonTL = new TimelineMax({repeat: -1});
buttonTL.add( TweenMax.to(".animButton", 0.5, {width: "10%", ease:Power2.easeInOut}) );

//Section 2
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

//Section 3
var section3TL = new TimelineMax({});
section3TL.to("#section3 h2", 1, {top: "0px", opacity: "1", ease:Power2.easeInOut});
section3TL.to(".s3SubText", 1, {bottom: "0px", opacity: "1", ease:Power2.easeInOut});
section3TL.to("#section3 .smDivider", 1, {opacity: "1", ease:Power2.easeInOut});
section3TL.to("#section3 a", 1, {opacity: "1", ease:Power2.easeInOut});
var section3TL2 = new TimelineMax({});
section3TL2.fromTo(".s3Img1", 0.8, {rotation:smRan(360,1), left:smRan(250,1), opacity: 0}, {left: '5px', top: '0px', rotation: 0, opacity: 1, delay: 2, ease:Back.easeInOut});
section3TL2.fromTo(".s3Text1", 0.25, {rotation:smRan(20,1), left:smRan(1,150), opacity: 0}, {left: '55px', top: '10px', rotation: 0, opacity: 1, ease:Back.easeInOut});
section3TL2.fromTo(".s3Img2", 0.7, {rotation:smRan(360,1), left:smRan(250,1), opacity: 0}, {left: '20px', top: '50px', rotation: 0, opacity: 1, ease:Back.easeInOut});
section3TL2.fromTo(".s3Text2", 0.25, {rotation:smRan(20,1), left:smRan(1,150), opacity: 0}, {left: '70px', top: '60px', rotation: 0, opacity: 1, ease:Back.easeInOut});
section3TL2.fromTo(".s3Img3", 0.6, {rotation:smRan(360,1), left:smRan(250,1), opacity: 0}, {left: '10px', top: '100px', rotation: 0, opacity: 1, ease:Back.easeInOut});
section3TL2.fromTo(".s3Text3", 0.25, {rotation:smRan(20,1), left:smRan(1,150), opacity: 0}, {left: '60px', top: '110px', rotation: 0, opacity: 1, ease:Back.easeInOut});
section3TL2.fromTo(".s3Img4", 0.5, {rotation:smRan(360,1), left:smRan(250,1), opacity: 0}, {left: '-20px', top: '150px', rotation: 0, opacity: 1, ease:Back.easeInOut});
section3TL2.fromTo(".s3Text4", 0.25, {rotation:smRan(20,1), left:smRan(1,150), opacity: 0}, {left: '30px', top: '160px', rotation: 0, opacity: 1, ease:Back.easeInOut});
section3TL2.fromTo(".s3Img5", 0.4, {rotation:smRan(360,1), left:smRan(250,1), opacity: 0}, {left: '-5px', top: '200px', rotation: 0, opacity: 1, ease:Back.easeInOut});
section3TL2.fromTo(".s3Text5", 0.25, {rotation:smRan(20,1), left:smRan(1,150), opacity: 0}, {left: '45px', top: '210px', rotation: 0, opacity: 1, ease:Back.easeInOut});
section3TL2.fromTo(".s3Img6", 0.3, {rotation:smRan(360,1), left:smRan(250,1), opacity: 0}, {left: '20px', top: '250px', rotation: 0, opacity: 1, ease:Back.easeInOut});
section3TL2.fromTo(".s3Text6", 0.25, {rotation:smRan(20,1), left:smRan(1,150), opacity: 0}, {left: '70px', top: '260px', rotation: 0, opacity: 1, ease:Back.easeInOut});

var section3TL3 = new TimelineMax({});
section3TL3.to(".s3Img1", 0.8, {left: '0px', top: '0px', ease:Back.easeInOut});
section3TL3.to(".s3Text1", 0.25, {left: '50px', top: '10px', ease:Back.easeInOut});
section3TL3.to(".s3Img2", 0.7, {left: '0px', top: '50px', ease:Back.easeInOut});
section3TL3.to(".s3Text2", 0.25, {left: '50px', top: '60px', ease:Back.easeInOut});
section3TL3.to(".s3Img3", 0.6, {left: '0px', top: '100px', ease:Back.easeInOut});
section3TL3.to(".s3Text3", 0.25, {left: '50px', top: '110px', ease:Back.easeInOut});
section3TL3.to(".s3Img4", 0.5, {left: '0px', top: '150px', ease:Back.easeInOut});
section3TL3.to(".s3Text4", 0.25, {left: '50px', top: '160px', ease:Back.easeInOut});
section3TL3.to(".s3Img5", 0.4, {left: '0px', top: '200px', ease:Back.easeInOut});
section3TL3.to(".s3Text5", 0.25, {left: '50px', top: '210px', ease:Back.easeInOut});
section3TL3.to(".s3Img6", 0.3, {left: '0px', top: '250px', ease:Back.easeInOut});
section3TL3.to(".s3Text6", 0.25, {left: '50px', top: '260px', ease:Back.easeInOut});

// Initial animation pause
buttonTL.pause();
section2TL.pause();
section2TL2.pause();
section2TL3.pause();
section3TL.pause();
section3TL2.pause();
section3TL3.pause();

//Hover animations
$(".animButton").hover(function() {
  buttonTL.play();
}, function() {
  buttonTL.stop();
});
$(".s2ImgContainer").hover(function() {
  if ( section2TL2.time() >= 3 ) {
    section2TL3.play().timeScale(2);
  }
}, function() {
  section2TL3.reverse();
});
var selector;
$(".s3ImgContainer p").hover(function() {
  selector = $(this).prev('img');
  TweenMax.to(selector, 0.25, {scale: 1, rotation:smRan(20,-10), ease:Power2.easeInOut});
  TweenMax.to(this, 0.25, {rotation:smRan(10,-5), ease:Power2.easeInOut});
  selector.addClass('s3imgGreen');
  if ( section3TL2.time() >= 6.5 ) {
    section3TL3.play().timeScale(4);
  }
}, function() {
  TweenMax.to(selector, 0.25, {scale: 0.7, rotation:0, ease:Power2.easeInOut});
  TweenMax.to(this, 0.25, {rotation:0, ease:Power2.easeInOut});
  selector.removeClass('s3imgGreen');
  section3TL3.reverse().timeScale(4);
});
//Section 3 hover animations
var ogHeader = "Student Information System";
var ogText = "The SIS is configurable, reliable and intuitive with a robust selection of reporting features. It eliminates redundancies in the enrollment process while increasing efficiency in monitoring student and teacher progress and state compliance.";
var newText1 = "We make it a breeze to request different types of documentation from previous schools. Our transcript entry tool saves time on data entry and reduces human error by automatically populating entry fields based on probability by school.";
var newText2 = "Automatically suggest course schedules based on student and teacher data as well as graduation requirements for specific diploma types, and make individual changes when needed.";
var newText3 = "Empower faculty with the necessary information to provide individualized support and timely intervention. Formative and summative assessments with fair, valid and reliable questions developed at the appropriate depth of knowledge (DOK) are used to provide reliable data on student performance.";
var newText4 = "Search and filter capabilities allow teachers and staff to quickly find a student and view basic stats, current course progress, photo and contact information, all in a static header.";
var newText5 = "GPA trending displays academic progress in real time for the opportunity to intervene before a temporary setback becomes a long-term issue. A transcript evaluation section gives both high level and detailed views in a student’s progress toward graduation.";
var newText6 = "Going on autopilot is a good thing when you can automatically generate tasks such as a staff member calling a family — even when an application has not been completed.";
$(".s3ImgContainer p").hover(function() {
  var thisHead = $(this).text();
  TweenMax.to("#section3 h2", 1, {text:{value:thisHead}, ease:Linear.easeNone});
  if ( $(this).hasClass("s3Text1") ) {
    TweenMax.to(".s3SubText", 1, {text:{value:newText1}, ease:Linear.easeNone});
  } else if ( $(this).hasClass("s3Text2") ) {
    TweenMax.to(".s3SubText", 1, {text:{value:newText2}, ease:Linear.easeNone});
  } else if ( $(this).hasClass("s3Text3") ) {
    TweenMax.to(".s3SubText", 1, {text:{value:newText3}, ease:Linear.easeNone});
  } else if ( $(this).hasClass("s3Text4") ) {
    TweenMax.to(".s3SubText", 1, {text:{value:newText4}, ease:Linear.easeNone});
  } else if ( $(this).hasClass("s3Text5") ) {
    TweenMax.to(".s3SubText", 1, {text:{value:newText5}, ease:Linear.easeNone});
  } else if ( $(this).hasClass("s3Text6") ) {
    TweenMax.to(".s3SubText", 1, {text:{value:newText6}, ease:Linear.easeNone});
  } else {
    TweenMax.to(".s3SubText", 1, {text:{value:ogText}, ease:Linear.easeNone});
  }
}, function() {
  TweenMax.to("#section3 h2", 1, {text:{value:ogHeader}, ease:Linear.easeNone});
  TweenMax.to(".s3SubText", 1, {text:{value:ogText, padSpace:true}, ease:Linear.easeNone});
});

// Check for divs hitting the top of screen and start animations
var $window = $(window);
var s2dist = $("#section2").offset().top - 20;
var s3dist = $("#section3").offset().top - 20;

$window.scroll(function() {
  if ( $window.scrollTop() >= s2dist ) {
    //Resume animations now that div is in view
    section2TL.play().timeScale(2);
    section2TL2.play().timeScale(2);
  } else if ( $window.scrollTop() < s2dist ) {
    section2TL.reverse().timeScale(2);
    section2TL2.reverse().timeScale(2);
  }
  if ( $window.scrollTop() >= s3dist ) {
    section3TL.play().timeScale(2);
    section3TL2.play().timeScale(1);
  } else if ( $window.scrollTop() < s3dist ) {
    section3TL.reverse().timeScale(2);
    section3TL2.reverse().timeScale(2);
  }
});
