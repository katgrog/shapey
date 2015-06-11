// alert('hello!');

var player1 = {
	name: 'Katie', 
	score:0
}


var shapes =  ['square', 'circle', 'triangle'];


$(document).on('keydown', function(){

	console.log('currentShape', currentShape);

	// When somebody presses a key - check what key was pressed
	console.log(event.which); 
	if (event.which == 83) {
		console.log('you just pressed S!')

		// Person has just pressed square 


	// Once have key - check if key relates to a shape 
		if ('square' == currentShape) {

			console.log('Hooray!');

			player1.score = player1.score + 1; 

			$('.score').text('score: ' + player1.score);
		} 

	} else if (event.which == 74) {
		console.log('you just pressed J!')

	// Check key against current shape 
		if ('triangle' == currentShape) {

			console.log('Well done, that\'s a triangle!')

			player1.score = player1.score + 1;

			$('.score').text('score: ' + player1.score);
		}


	} else if (event.which == 68) {
		console.log('you just pressed D!')

		if ('circle' == currentShape) {

			console.log('I love circles, well done!')

			player1.score = player1.score + 1;

			$('.score').text('score: ' + player1.score);
		}
	}



	// If correct - score point 
	// Create somewhere to store points  

	
})


$('.circle, .triangle, .square').hide();

var currentShape = 'circle'; 

$('.circle').show();

setInterval( function(){

	var randomNumber = Math.floor(Math.random() * 3);

	// console.log(randomNumber);

	// Hide whatever is in there 
	$('.circle, .triangle, .square').hide();

	// Randomly pick a new shape 
	var newShape = shapes[randomNumber];
	
	// Updating currentShape to match the newShape  
	currentShape = newShape;

	// console.log(currentShape);

	// Show shape
	$('.' + newShape).show();	



}, 1000);






// Player: 
// name and score
// Keys: 
// s, d, j, k - event.which to find out the number that relates to it 


// Step 1: 
// I want the shapes to change randomly:

// I want all shapes to be hidden 
// I want shape 1 to be visible 
// Then shape 1 to disappear after a second and shape 2 to be visible 



// Step 2: 
// I want selected keys on the keyboard to score points only if they're the same as the current shape:

// Store the current shape somewhere 









