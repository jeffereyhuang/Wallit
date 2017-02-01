$(function(){

	// initializes money spent
  var $spent = 0;
  var $total = document.getElementById("total");
  var $displaySpent = '$' + $spent
  $total.innerHTML = $displaySpent;
  var $started = false;
  var $itemCount = 0;

	// Define function to add transactions/update money
	function logTransaction(){
    var $input = document.getElementById("money");
    $money = parseMoney($input.value);

    // adds money
    $spent = $money + $spent;

    // displays a string
    $displaySpent = decimalCheck($spent);
    $total.innerHTML = $displaySpent;

		// Create new list item
    var $moneyFormatted = decimalCheck($money);
		var $newListItem = $('<li class="transactions" id=' + $itemCount + '>' +
      $moneyFormatted + ' </li>');


		// Add list item to end of list
		var $addListItem = $('ul').append($newListItem);

    // Clear field
    $input.value = '';

		// Hide list item before fading it into view
		$newListItem.hide().fadeIn(100);

    switchRow();
	};




  function logText() {
    var $input = document.getElementById("description");
    var $allListItems = document.getElementsByClassName("transactions");
    var $listItem = $allListItems[$itemCount];
    alert($listItem.innerHTML);
    $listItem.innerHTML += $input.value;

    // Clear field
    $input.value = '';

    switchRow();
  };


  function abortTransaction() {
    if ($started) {
      switchRow();
      // delete text
      var $listItem = document.getElementById($itemCount);
      // $listItem.value = '';
      delete $listItem;
      return;
    }
    else {
      logTransaction();
    }
  }

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



  // Hides current prompt and shows other
  function switchRow() {
    hideRow(+$started);
    $started = !$started;
    showRow(+$started);
  }


	// Call function when enter key is pressed
	$(document).on('keypress', function(e){
		if(e.which == 13) {
      if ($started == true) {
		    logText();
      }
      else
        logTransaction();
		}
	});


});
