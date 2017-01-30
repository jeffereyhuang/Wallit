$(function(){

	// initializes money spent
  var $total = 0;
  var $input = document.getElementById("money");
  document.getElementById("total").innerHTML = $total;

	// Define function to add transactions/update money
	function logTransaction(){
    $money = parseMoney();

    // adds money
    $total = $money + $total;
    // displays a string
    var $display = $total.toFixed(2);
    document.getElementById("total").innerHTML = $display;

		// Create new list item
    var $moneyFormatted = $money.toFixed(2)
		var $newListItem = $('<li class="todo">' + $moneyFormatted + '</li>');

		// Add list item to end of list
		var $addListItem = $('ul').append($newListItem);

    $input.value = '';
		// Hide list item before fading it into view
		$newListItem.hide().fadeIn(100);

	};

  // checks money
  function parseMoney() {
    $money = parseFloat($input.value);
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
