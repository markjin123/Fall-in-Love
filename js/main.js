$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#80bfff','#b30086','#ff4d4d','#cca300','#00cc99','#008ae6','#cc3399','#0066ff'
,'#ff4d94','#8585ad','#ff80ff','#1bbc9b', '#4BBFC3', '#7BAABE', '#80bfff','#b30086','#ff4d4d','#cca300','#00cc99','#008ae6','#cc3399','#0066ff'
,'#ff4d94','#8585ad','#ff80ff','#1bbc9b', '#4BBFC3', '#7BAABE', '#80bfff','#b30086','#ff4d4d','#cca300','#00cc99','#008ae6','#cc3399','#0066ff'
,'#ff4d94','#8585ad','#ff80ff',],

		anchors: ['introduction','instruction','question1','question2','question3','question4','question5','question6','question7','question8','question9',
		'question10','question12','question13','question14','question15','question16','question17','question18','question19','question20'
		,'question21','question22','question23','question24','question25','question26','question27','question28','question29','question30'
		,'question31','question32','question33','question34','question35','question36','Contact'],

       	css3: true,
       	scrollingSpeed:700,
       	keyboardScrolling:true,
       	touchSensitivity:15,
       	controlArrow:true,
       	verticalCentered:false,
       	paddingTop: '10px',
       	paddingBottom: '10px',
       	fixedElements: '#share, .footer',

       	//nav
       	navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Main Page','Instuctions', 'Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6', 'Question 7', 'Question 8', 'Question 9'
		, 'Question 10', 'Question 11', 'Question 12', 'Question 13', 'Question 14', 'Question 15', 'Question 16', 'Question 17', 'Question 18', 'Question 19'
		, 'Question 20', 'Question 21', 'Question 22', 'Question 23', 'Question 24', 'Question 25', 'Question 26', 'Question 27', 'Question 28', 'Question 29'
		, 'Question 30', 'Question 31', 'Question 32', 'Question 33', 'Question 34','Question 35','Question 36','Contact'],
    });

	$("#click").click(function(){
		$.fn.fullpage.moveSectionDown();

	});
	//all the timers on the page
	$("#startButton").click(function(){
		var fiveMinutes = 119,
		display = $('#time');
		display.text("2:00");
		$('#startButton').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton2").click(function(){
		var fiveMinutes = 119,
		display = $('#time2');
		display.text("2:00");
		$('#startButton2').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton3").click(function(){
		var fiveMinutes = 119,
		display = $('#time3');
		display.text("2:00");
		$('#startButton3').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton4").click(function(){
		var fiveMinutes = 119,
		display = $('#time4');
		display.text("2:00");
		$('#startButton4').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton5").click(function(){
		var fiveMinutes = 119,
		display = $('#time5');
		display.text("2:00");
		$('#startButton5').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton6").click(function(){
		var fiveMinutes = 119,
		display = $('#time6');
		display.text("2:00");
		$('#startButton6').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton7").click(function(){
		var fiveMinutes = 119,
		display = $('#time7');
		display.text("2:00");
		$('#startButton7').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton8").click(function(){
		var fiveMinutes = 119,
		display = $('#time8');
		display.text("2:00");
		$('#startButton8').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton9").click(function(){
		var fiveMinutes = 119,
		display = $('#time9');
		display.text("2:00");
		$('#startButton9').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton10").click(function(){
		var fiveMinutes = 119,
		display = $('#time10');
		display.text("2:00");
		$('#startButton10').text("Restart")
		startTimer(fiveMinutes, display);
	});	
	$("#startButton11").click(function(){
		var fiveMinutes = 119,
		display = $('#time11');
		display.text("2:00");
		$('#startButton11').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton12").click(function(){
		var fiveMinutes = 119,
		display = $('#time12');
		display.text("2:00");
		$('#startButton12').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton13").click(function(){
		var fiveMinutes = 119,
		display = $('#time13');
		display.text("2:00");
		$('#startButton13').text("Restart")
		startTimer(fiveMinutes, display);
	});
		$("#startButton14").click(function(){
		var fiveMinutes = 119,
		display = $('#time14');
		display.text("2:00");
		$('#startButton14').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton").click(function(){
		var fiveMinutes = 119,
		display = $('#time');
		display.text("2:00");
		$('#startButton').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton15").click(function(){
		var fiveMinutes = 119,
		display = $('#time15');
		display.text("2:00");
		$('#startButton15').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton16").click(function(){
		var fiveMinutes = 119,
		display = $('#time16');
		display.text("2:00");
		$('#startButton16').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton17").click(function(){
		var fiveMinutes = 119,
		display = $('#time17');
		display.text("2:00");
		$('#startButton17').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton18").click(function(){
		var fiveMinutes = 119,
		display = $('#time18');
		display.text("2:00");
		$('#startButton19').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton19").click(function(){
		var fiveMinutes = 119,
		display = $('#time19');
		display.text("2:00");
		$('#startButton19').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton20").click(function(){
		var fiveMinutes = 119,
		display = $('#time20');
		display.text("2:00");
		$('#startButton20').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton21").click(function(){
		var fiveMinutes = 119,
		display = $('#time21');
		display.text("2:00");
		$('#startButton21').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton22").click(function(){
		var fiveMinutes = 119,
		display = $('#time22');
		display.text("2:00");
		$('#startButton22').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton23").click(function(){
		var fiveMinutes = 119,
		display = $('#time23');
		display.text("2:00");
		$('#startButton23').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton24").click(function(){
		var fiveMinutes = 119,
		display = $('#time24');
		display.text("2:00");
		$('#startButton24').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton25").click(function(){
		var fiveMinutes = 119,
		display = $('#time25');
		display.text("2:00");
		$('#startButton25').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton26").click(function(){
		var fiveMinutes = 119,
		display = $('#time26');
		display.text("2:00");
		$('#startButton26').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton27").click(function(){
		var fiveMinutes = 119,
		display = $('#time27');
		display.text("2:00");
		$('#startButton27').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton28").click(function(){
		var fiveMinutes = 119,
		display = $('#time28');
		display.text("2:00");
		$('#startButton28').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton29").click(function(){
		var fiveMinutes = 119,
		display = $('#time29');
		display.text("2:00");
		$('#startButton29').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton30").click(function(){
		var fiveMinutes = 119,
		display = $('#time30');
		display.text("2:00");
		$('#startButton30').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton31").click(function(){
		var fiveMinutes = 119,
		display = $('#time31');
		display.text("2:00");
		$('#startButton31').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton32").click(function(){
		var fiveMinutes = 119,
		display = $('#time32');
		display.text("2:00");
		$('#startButton32').text("Restart")
		startTimer(fiveMinutes, display);
	});
	$("#startButton33").click(function(){
		var fiveMinutes = 119,
		display = $('#time33');
		display.text("2:00");
		$('#startButton33').text("Restart")
		startTimer(fiveMinutes, display);
	});
	
	$("#startButton34").click(function(){
		var fiveMinutes = 119,
		display = $('#time34');
		display.text("2:00");
		$('#startButton34').text("Restart")
		startTimer(fiveMinutes, display);
	});

	$("#startButton35").click(function(){
		var fiveMinutes = 119,
		display = $('#time35');
		display.text("2:00");
		$('#startButton35').text("Restart")
		startTimer(fiveMinutes, display);
	});

	$("#startButton36").click(function(){
		var fiveMinutes = 119,
		display = $('#time36');
		display.text("2:00");
		$('#startButton36').text("Restart")
		startTimer(fiveMinutes, display);
	});


});

 function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ?  + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');



