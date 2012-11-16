$(document).ready(function() {

	// map the classes for each item into a new array
	classes = $("#links-list li a").map(function(){
		return $(this).attr("class").split(' ');
    });
	
	// create list of distinct items only
	var classList = distinctList(classes);
	
	// generate the list of filter links
	var tagList = '<ul id="tag-list"></ul>';
	tagItem = '<li><a href="#" class="active">all</a></li>';
	$.each(classList, function(index,value){
		var value = value.replace("-", " ");
		tagItem += '<li><a href="#">'+value+'</a></li>';
	});
	
	// add the filter links before the list of items
	$("#links-list").before($(tagList).append(tagItem));
	
	// filter the links list when the filter links are clicked
	$('#tag-list li a').live('click',function(e){

		var getText = $(this).text().replace(" ", "-");
		if(getText == 'all'){
			$("#links-list li a").slideDown();
		} else {
			$("#links-list li a").fadeOut();
			$("#links-list li a."+getText).fadeIn();
		}
		
		// add class "active" to current filter item
		$('#tag-list li a').removeClass('active');
		$(this).addClass('active');
		
		// prevent the page scrolling to the top of the screen
		e.preventDefault();
		
	});		
});
// Function to create a distinct list from array
function distinctList(inputArray){
	var i;
	var length = inputArray.length;
	var outputArray = [];
	var temp = {};
	for (i = 0; i < length; i++) {
		temp[inputArray[i]] = 0;
    }
    for (i in temp) {
        outputArray.push(i);
	}
	return outputArray;
}

