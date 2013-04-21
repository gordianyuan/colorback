var elements = $("html").add("body").add("body>div:first");
elements.each(function(){
	var filter = $(this).css("-webkit-filter");
	if(filter && filter != "none"){
		if(filter.match(/^grayscale/)){
			$(this).css("-webkit-filter", "grayscale(0)");
		}
	}
});
