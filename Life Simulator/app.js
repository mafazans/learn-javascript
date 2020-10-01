// declare variable
var health = 100;
var money = 0;
var food = 100;

// function for to do work
function newWork() {
	console.log("Work");
	money = money + 1;
	health = health - 2;
	food = food - 1;
	document.getElementById("health").innerHTML=health;
	document.getElementById("money").innerHTML=money;
	document.getElementById("food").innerHTML=food;
};

// function if click eat
function newEat() {
	console.log("Eat");
	money = money - 1;
	food = food + 2;
	document.getElementById("health").innerHTML=health;
	document.getElementById("money").innerHTML=money;
	document.getElementById("food").innerHTML=food;
};

// function if click sleep
function newSleep() {
	console.log("Sleep");
	health = health + 5;
	food = food - 1;
	document.getElementById("health").innerHTML=health;
	document.getElementById("money").innerHTML=money;
	document.getElementById("food").innerHTML=food;
};

// the time for this simulator
var countdown = setInterval(function(){
  if (health == 0) {
    alert("Game Over!");
    clearInterval(countdown);
  }
  health --;
  document.getElementById("health").innerHTML=health;
}, 1000);

function updateClock() {
                // Gets the current time
                var now = new Date();
 
                // Get the hours, minutes and seconds from the current time
                var hours = now.getHours();
                var minutes = now.getMinutes();
                var seconds = now.getSeconds();
 
                // Format hours, minutes and seconds
                if (hours < 10) {
                    hours = "0" + hours;
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
 
                // Gets the element we want to inject the clock into
                var elem = document.getElementById('clock');
 
                // Sets the elements inner HTML value to our clock data
                elem.innerHTML = hours + ':' + minutes + ':' + seconds;
            }
