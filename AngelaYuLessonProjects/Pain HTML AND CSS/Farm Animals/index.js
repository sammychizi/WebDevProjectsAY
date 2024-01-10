//Make it a kids spelling game such that when a child spells an animal correct, it makes a sound
//The game starts when the picture lights up at random then the kid has to spell the animal that lit up
//If they spell it correctly, it makes a sound
var animalNum = document.querySelectorAll(".images").length;
var sound


//code that listens for button press
for(i = 0; i < animalNum; i++){

    document.querySelectorAll(".images")[i].addEventListener("click",
        function(){
            var pressedAnimal = this.querySelector("img").getAttribute("id");
            makeSound(pressedAnimal);
            animateButtons(pressedAnimal);
            
        }
    )
}

//function that makes sound
function makeSound(keyboardKey){
    switch(keyboardKey){
        case "cow":
            sound = new Audio("sounds/cow.wav");
            sound.play();
        break;
        case "cat":
            sound = new Audio("sounds/cat.wav");
            sound.play();
        break;
        case "dog":
            sound = new Audio("sounds/dog.wav");
            sound.play();
        break;
        case "goat":
            new Audio("sounds/goat.wav").play();
        break;
        case "pig":
            new Audio("sounds/pig.wav").play();
        break;
        case "rooster":
            new Audio("sounds/rooster.wav").play();
        break;
        default: console.log(pressedAnimal);
    }
}

//function to animate pressed buttons
function animateButtons(keyPressed){
    var activeKey = document.querySelector("#"+keyPressed);
    
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },1000);

}