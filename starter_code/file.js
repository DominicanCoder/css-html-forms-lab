console.log("Am i knots?");

	$("form").on("submit", function(event){
		console.log("the submit button is click");
		event.preventDefault();
		makeResults();
	    //append.results();
});

function makeResults(){
	//use jquery to get all of the input elements
	var inputs = $("form input,textarea");
	//use the for loop to get our index values.
	for(var i=0; i < inputs.length; i++){
	//console.log test our function
    console.log(inputs[i].value);
    //use jquerry selector to append the values of our form to a pagragrah at the bottom of the page
    $("#resultsOfTheForm").append(inputs[i].value);

	}

}
