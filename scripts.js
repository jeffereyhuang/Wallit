$(function(){

	// initializes money spent
  var $total = 0;
  document.getElementById("total").innerHTML = $total;

	// Define function to add transactions/update money
	function logTransaction(){
    $money = parseMoney();

    // adds money
    $total = $money + $total;
    document.getElementById("total").innerHTML = $total;

		// Create new list item
		var $newListItem = $('<li class="todo">' + $money + '</li>');

		// Add list item to end of list
		var $addListItem = $('ul').append($newListItem);


		// Hide list item before fading it into view
		$newListItem.hide().fadeIn(100);

	};

  // checks money
  function parseMoney() {
    $money =  parseInt(document.getElementById("money").value, 10);
    if (isNaN($money)) {
       //don't log
       logTransaction();
    }
    return $money;
  }



	// Call logTransaction function when enter key is pressed
	$(document).on('keypress', function(e){
		if(e.which == 13) {
			logTransaction();
		}
	});

});
