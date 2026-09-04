$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});

	$("h1").click(function() {
		$("p").addClass("bright");
		$("img").addClass("border");
	});

	// Click the 1st paragraph to toggle visibility of the 2nd and 3rd paragraphs
	$("p:first").click(function() {
		$("p:nth-of-type(2), p:nth-of-type(3)").toggle();
	});
});
