$(function(){

	// initializes money spent
  var $spent = 0;
  var $input = document.getElementById("money");
  var $total = document.getElementById("total");
  var $displaySpent = '$' + $spent
  $total.innerHTML = $displaySpent;
  var $started = false;
  var $itemCount = 0;

	// Define function to add transactions/update money
	function logTransaction(){
    $money = parseMoney($input.value);

    // adds money
    $spent = $money + $spent;

    // displays a string
    $displaySpent = decimalCheck($spent);
    $total.innerHTML = $displaySpent;

		// Create new list item
    var $moneyFormatted = decimalCheck($money);
		var $newListItem = $('<li class="transactions">' + $moneyFormatted + ' </li>');
    // ADD ID=$itemCount @4230439048023984092384092309238

		// Add list item to end of list
		var $addListItem = $('ul').append($newListItem);

    // Clear field
    $input.value = '';

		// Hide list item before fading it into view
		$newListItem.hide().fadeIn(100);

    // Hides first prompt and shows second
    switchRow();

    logText();
	};

  function logText() {
    var row = document.getElementById()
    var $addOn = ""
    $input.value

    // Clear field
    $input.value = '';

    // Hides current prompt and shows other
    switchRow();

    logTransaction();
  };

  // checks money
  function parseMoney($moneyReported) {
    $money = parseFloat($moneyReported);
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

  function switchRow() {
    hideRow(+$started);
    $started = !$started;
    showRow(+$started);
  }

  function showRow($id) {
    $id = $id.toString();
    var $selected = document.getElementById($id);
    $selected.className = ''; // hide the other one
    return;
  };

  function hideRow($id) {
    $id = $id.toString();
    var $selected = document.getElementById($id);
    $selected.className += 'hidden';
    return;
  };



	// Call logTransaction function when enter key is pressed
	$(document).on('keypress', function(e){
		if(e.which == 13) {
      if ($started)
		    logText();
      else
        logTransaction();
		}
	});


});
