$(document).ready(function() {

	$(".all").delay(1000).fadeOut("slow");

	$(".all").fadeIn("slow");

	$("#one").mouseenter(function() {
		$("#one").fadeTo("fast", 0.5)
	});

	$("#one").mouseleave(function() {
		$("#one").fadeTo("fast",1);
	});

	$("p").click(function() {
		$("p").toggleClass("new");
	});

	$("#box").click(function() {
		$("#window").fadeToggle(500);
	});

	$(".all").animate({width: "1100px", height: "1100px"}, 2000);

	$(".al").click(function() {
		$(".all").animate({left: "+=200px"}, 500);
	});

	slide ();

	function slide() {
	$(".all").animate({left: "200px"}, 2000);
	$(".all").animate({left: "0px"}, 2000, slide);
	}


	
});