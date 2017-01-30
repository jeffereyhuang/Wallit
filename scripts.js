$(function(){

	// initializes money spent
  var $spent = 0;
  var $input = document.getElementById("money");
  var $total = document.getElementById("total");
  var $displaySpent = '$' + $spent
  $total.innerHTML = $displaySpent;

	// Define function to add transactions/update money
	function logTransaction(){
    $money = parseMoney();

    // adds money
    $spent = $money + $spent;

    // displays a string
    $displaySpent = decimalCheck($spent);
    $total.innerHTML = $displaySpent;

		// Create new list item
    var $moneyFormatted = decimalCheck($money);
		var $newListItem = $('<li class="todo">' + $moneyFormatted + '</li>');

		// Add list item to end of list
		var $addListItem = $('ul').append($newListItem);

    // Clear field
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
  };

  // handles decimals
  function decimalCheck($decimal) {
    if (($decimal % 1) != 0)
      return '$' + $decimal.toFixed(2);
    else
      return '$' + $decimal;
  };


	// Call logTransaction function when enter key is pressed
	$(document).on('keypress', function(e){
		if(e.which == 13) {
			logTransaction();
		}
	});

});
