function Movie(title, year, url){
	this.title = title;
	this.year = year;
	this.url = url;

} 


	let year = 0;
	let title = "";
	let movieNum = 16;
	let movie2 = new Movie("The Green Knight", 2021);
	let MovieArr = [movie2];
	let url = "https://www.omdbapi.com/?apikey=94677657";

	for(let k = 0; k < movieNum; k++){
	url = "https://www.omdbapi.com/?apikey=94677657";	
	if(k == 0){
		title = "Avengers";
		year = 2012;
		}
	else if(k == 1){
		title = "Marvin's Room";
		year = 1996;}
	else if(k == 2){
		title = "Tucker and Dale vs Evil";
		year = 2010;}
		else if(k == 3){
		title = "Quils";
		year = 2000;}
	else if(k == 4){
		title = "Paper Man";
		year = 2009;}
	else if(k == 5){
		title = "Bernie";
		year = 2011;}
	else if(k == 6){
		title = "The Thing";
		year = 1982;}
	else if(k == 7){
		title = "The Quest";
		year = 1996;}
	else if(k == 8){
		title = "The Nine Lives of Fritz the Cat";
		year = 1974;}
	else if(k == 9){
		title = "Airport";
		year = 1970;}
	else if(k == 10){
		title = "Butter";
		year = 2011;}
	else if(k == 11){
		title = "Bottle Shock";
		year = 2008;}
	else if(k == 12){
		title = "Ghost";
		year = 1990;}
	else if(k == 13){
		title = "Mermaids";
		year = 1990;}
	else if(k == 14){
		title = "Dutch";
		year = 1991;}
	else if(k== 15){
		title = "Free Guy";
		year = 2021;
	}
	url = url + "&t=" + title + "&y=" + year;
	let movie = new Movie(title, year, url);
	MovieArr.push(movie);	
}
 
function displayResults(data) {	
 let array = data.Ratings;
  for (let p = 0; p < array.length; p++) {
  	if (array[p].Source === "Rotten Tomatoes") {
    	theRating = array[p].Value;
    }
	
  }	
		    
}


function submit() {

let index = Math.floor(Math.random() * 16);

	url = MovieArr[index].url;
	$("#resultTitle").html(MovieArr[index].title);
    $("#resultYear").html(MovieArr[index].year);

$.get(url, function(data){
  			//document.getElementById("demo").innerHTML = JSON.stringify(data);
			displayResults(data);
  }); 
}






function guess(){
	let guess = $("#scoreGuess").val();
	let actual = parseInt(theRating);
		
if(guess<0 || guess>100 || guess === ""){
	alert("Invalid Score! Please try again.");
}
else if(guess == actual){
	alert("Congrats, you win! You got the answer perfectly! Did you look it up? ;) Your answer was " + guess + "%, and the actual score is " + actual + "%");
	$("#resultTitle1").html(actual+"%");
}
else if(guess < actual+5 && guess > actual-5){
	alert("Congrats, you win! You were within 5 percent!!! Your answer was " + guess + "%, while the actual score is " + actual + "%");
	$("#resultTitle1").html(actual+"%");
}
else{
	alert("Oh no, you lost! :(  Your answer was " + guess + "%, while the actual score is " + actual + "% Wanna load a new movie and try again?");
	$("#resultTitle1").html(actual+"%");
}

}
	
	

		
