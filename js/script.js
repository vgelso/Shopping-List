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
	    		var html = "<p class=\"added\"><img class=\"delete-img\" src=\"images/delete-image.png\" alt=\"Delete image\"/>" +
	    				   str + "<img class=\"checked-img\" src=\"images/checked-image.png\" alt=\"Checked image\"/></p>"
	    		$( "#add-item" ).after(html);
	    		$("#add-item").val(""); // clear input after item is added
	    	}
	    }
	});

	$("#add-item").on("click", function(e) {
		alert(e);
	});

});
	