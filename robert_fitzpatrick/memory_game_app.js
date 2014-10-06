//Define Array
var bands = ["The Saints", "Husker Du", "Poison Idea", "Celtic Frost",
			"Killing Joke", "Wire", "The Saints", "Husker Du", "Poison Idea", "Celtic Frost",
			"Killing Joke", "Wire"];

//Populate table
var cells = document.querySelectorAll("table div");

for(var i = 0 ; i < bands.length ; i++) {

	//cells[i].setAttribute("style", "display:none");
	cells[i].setAttribute("class", "unmatched");
	cells[i].innerHTML = bands[i];

}

// Show band when I click a cell

var elements = document.querySelectorAll("td");
var count = 1;
var itemOne, itemTwo;
var element1, element2;
var timeoutID;

for(var i = 0; i < elements.length; i ++) {

	elements[i].addEventListener("click", function(){
		
		// var element1, element2;
		var divShowing = this.querySelector("div");

		if(divShowing.className === "unmatched"){

			divShowing.setAttribute("class", "matched");
			console.log(divShowing.class);

			if(count === 1){			
				itemOne = divShowing.innerHTML;
				element1 = divShowing;
				count++;
			} else {					
				itemTwo = divShowing.innerHTML;
				element2 = divShowing;
				count = 1;

				if(itemOne === itemTwo) {
				} else {
					setTimeout(function(){
					element1.setAttribute("class", "unmatched");
					element2.setAttribute("class", "unmatched");
					},1000);
				}
			}
			
		}

	});
}