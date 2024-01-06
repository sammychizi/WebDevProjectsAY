
var numberDrums = document.querySelectorAll(".drum").length;
var keyPressed;

function checkKeyPressed(){
    document.addEventListener("keypress", function(event){
        keyPressed = event.key;
    })
}
checkKeyPressed();


//code to listen for button clicks
for(var i=0; i < numberDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", 
        function(){
            
            var buttonClicked = this.innerHTML;
            makeSound(buttonClicked);
        }
    )
}

//code to listen for key presses
for(var i=0; i < numberDrums; i++){
    document.addEventListener("keypress", 
        function(event){
            makeSound(event.key);
        }
    )
}

//Function to make sound

function makeSound(key){

    switch(key){
        case "w":
                    var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                break; 
        case "a":
                    var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                break;
                case "s":
                    var audio =  new Audio("sounds/tom-1.mp3");
                    audio.play();
                break;
                case "d":
                    var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                break;
                case "j":
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                break;
                case "k":
                    var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                break;
                case "l":
                    var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                break;
                default:
                    console.log(buttonClicked)
                break;
    }
}