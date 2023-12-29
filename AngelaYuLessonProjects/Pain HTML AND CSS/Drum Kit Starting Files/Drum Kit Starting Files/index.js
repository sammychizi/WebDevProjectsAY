document.querySelector("button").addEventListener("click", playSound);
var numberDrums = document.querySelectorAll(".drum").length;

for(i=0; i < numberDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", 
        function(){
            this.style.color = "white";
        }
    )
}


function playSound(){
    var sound = new Audio('sounds/tom-1.mp3');
    sound.play();
}