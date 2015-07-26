var rowNum = 0; // roq number

$(document).ready(function() {

	$(document).keypress(function(event){
		var keycode;

		if (!event.keycode) {
			keycode = event.which;
		} else {
			keycode = event.keycode;
		}

	    //var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == 13) {
	        //alert('You pressed a "enter" key in somewhere');
	        // take the value from the input textbox and place the value
	        // into a new HTML div element (pill elements)
	        //alert($('#add-item').val());
	        var str = $( "#add-item" ).val();
	        if( str.length === 0 ) {
	        	alert('Please enter an Item');
	    	}
	    	else {
	    		var html = "<p class=\"added\" id=\"row_" + rowNum + "\"><img class=\"delete-img\" id=\"delete-img_" + rowNum + "\" src=\"images/delete-image2.png\" alt=\"Delete image\"/>" +
	    				   "<span id=\"word_" + rowNum + "\">" + str + "</span> <img class=\"checked-img\" src=\"images/checked-image2.png\" id=\"checked-img_" + rowNum + "\" alt=\"Checked image\"/></p>"
	    		$(".slider-container").append(html);
	    		$("#add-item").val(""); // clear input after item is added
	    		checkRowCount();

	    		rowNum++; // add one (increment) to current row number rowNum = rowNum + 1
	    	}
	    }
	});

	$("body").on("click", ".delete-img", function(e) {
		var parent = getParent(e);
		alert(parent);
		$(parent).fadeOut("fast", function() { $(this).remove() });
	});

	$("body").on("click", ".checked-img", function(e) {
		var previousElement = "#" + $("#" + e.target.id).prev().attr("id");
		var parent = getParent(e);
		alert(parent);
		$(previousElement).wrap("<strike>");
		$(parent).animate( { backgroundColor: "#99CC99" }, "slow");
		//$(parent).css("background-color", "#006633");	
		$(parent).css("color", "#3D5C5C");	
	});

});

function getParent(e) {
	return "#" + $("#" + e.target.id).parent().attr("id");
}

function checkRowCount() {
	// get current number of rows
	var count = $(".slider-container").children().length;
	if (count > 5) {
		// slide content to left
	}
}