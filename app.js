$(function() {

	var gridSize   = 16;
		containerWidth = 960;

	//Create default Grid
	function createSketch() {
		for (var y = 1; y <= gridSize; y++) {
			for (var x = 1; x <= gridSize; x++) {
				$('<div></div>').appendTo('#grid').css({
					"background-color": "#3c0954",
					//"border": "1px solid #000",
					"float": "left",
					"height": containerWidth / gridSize + "px",
					"width": containerWidth / gridSize + "px"
				});
			}
			$('#grid').append('<br/>');
		}
		//Sketch animation
		$('#grid div').hover(raiseOpacity);
	}

	function raiseOpacity() {
		$(this).css({
		'background-color': '#24fb02',
		'opacity': 0.1
		});
		$(this).hover(function() {
			var value = parseFloat($(this).css('opacity'));
			if (value < 1) {
				value += 0.1;
				$(this).css('opacity', value);
				console.log(value);
			}
		});
	}

	createSketch();

	//Create New Sketch
	$('#btn').on('click', function() {
		$('#grid').empty();
		var user = prompt('Type a number from 16 - 60 to create sketch.');
		if (user) {
			gridSize = user;
			createSketch();
		}
	});
});