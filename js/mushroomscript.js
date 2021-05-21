function main() {
	var recipeType = document.getElementById("recipe").value;
	recipeType = parseInt(recipeType)
	if (recipeType === 1) {
		spicyMushroom();
	}
	else if (recipeType === 2) {
		plainMushroom();
	}
}


function spicyMushroom() {
	var mushroom, tomato, bell, chili, garlic, onion, salt, pepper, sugar, oil, vinegar, pot, water;
	mushroom = parseFloat(document.getElementById("mushroomWeight").value);
	
	if (Number.isNaN(mushroom)) {
		document.getElementById("mushroomOutput").innerHTML = "Please input a number.";
		return;
		}
	else if (!mushroom>0) {
		document.getElementById("mushroomOutput").innerHTML = "Please input a number greater than 0.";
		return
	}
	else {
		tomato = mushroom * 125;
		tomato = tomato.toFixed(2);
		bell = mushroom * 50;
		bell = bell.toFixed(2);
		chili = mushroom * 100;
		chili = chili.toFixed(2);
		garlic = mushroom * 250;
		garlic = garlic.toFixed(2);
		onion = garlic;
		salt = mushroom * 80;
		salt = salt.toFixed(2);
		sugar = mushroom * 125;
		pepper = bell;
		oil = mushroom*2*215;
		vinegar = mushroom*215;
		pot = (mushroom*25*150)/1000;
		water = pot*3;

		document.getElementById("mushroomOutput").innerHTML = "You need:<br>" + tomato + " g of Tomato Paste<br>" + bell + " g Bell Pepper<br>" + chili + 
		" g of Chili Flakes<br>" + garlic + " g of Garlic<br>" + onion + " g of Onion<br>" + salt + " g of Salt<br>" + sugar + " g of Sugar<br>"
		+ pepper + " g of Pepper<br>" + oil + " grams of Oil<br>" + vinegar + " grams of Vinegar<br>" + pot + " grams of potassium sorbate with "+ water + " grams water";
		
		}
}	

function plainMushroom() {
	var mushroom, oil, cayenne, paprika, vinegar, sugar, salt, paste, pepper, gar_on, bell;
	mushroom = parseFloat(document.getElementById("mushroomWeight").value);
	
	if (Number.isNaN(mushroom)) {
		document.getElementById("mushroomOutput").innerHTML = "Please input a number.";
		return;
		}
	else if (!mushroom>0) {
		document.getElementById("mushroomOutput").innerHTML = "Please input a number greater than 0.";
		return
	}
	else {
		oil = mushroom*400;
		cayenne = mushroom*12;
		paprika = mushroom*3;
		vinegar = mushroom*180;
		sugar = mushroom*100;
		salt = mushroom*75;
		paste = mushroom*100;
		pepper = mushroom*7.5;
		gar_on = mushroom*250;
		bell = mushroom*50;

		document.getElementById("mushroomOutput").innerHTML = "You need:<br>" + oil + " g of Olive Oil<br>" + cayenne + " g Cayenne<br>" + paprika + 
		" g of Paprika<br>" + vinegar + " g of Vinegar<br>" + sugar + " g of Sugar<br>" + salt + " g of Salt<br>" + paste + " g of Tomato Paste<br>"
		+ pepper + " g of Pepper<br>" + gar_on + " grams of Garlic and Onion<br>" + bell + " grams of Bell Pepper<br>";
		
		}
}	

var time = document.getElementById("date");
function timer() {
	var d = new Date(),
		day = d.getDay(),
		date = d.getDate(),
		year = d.getFullYear(),
		month = d.getMonth(),
		h = d.getHours(),
		m = d.getMinutes(),
		s = d.getSeconds(),
		days = ["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"],
		mons = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
		hs = ["12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11"],
		ms = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20",
		"21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43",
		"44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
	
	
	if (0<=h<=10) {
		var ampm = "PM";
	}
	else {
		ampm = "AM";
	}
		
	var realtime = days[day] + ", " + mons[month] + " " + date + ", " +  year + ", " +  hs[h] + ":" + ms[m] + " " + ampm;
	time.innerHTML = realtime;
}
setInterval(timer, 1000);


