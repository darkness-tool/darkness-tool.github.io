
$(document).ready(function() {
	$('.container').append("<div id=\"index\"></div>");
	$('#index').load("indexContent.html");
	$('.container').append("<div id=\"banner-index\"></div>");
	$('#banner-index').load("banner.html");
});