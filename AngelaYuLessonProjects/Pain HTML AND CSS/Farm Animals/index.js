//Make it a kids spelling game such that when a child spells an animal correct, it makes a sound
//The game starts when the picture lights up at random then the kid has to spell the animal that lit up
//If they spell it correctly, it makes a sound
var animalNum = document.querySelectorAll(".images").length;

for(i = 0; i < animalNum; i++){

    document.querySelectorAll(".images")[i].addEventListener("click",
        function(){
            var pressedAnimal = this.querySelector("img").getAttribute("id");

            switch(pressedAnimal){
                case "cow":
                    var sound = new Audio("sounds/cow.wav");
                    sound.play();
                break;
                case "cat":
                    var sound = new Audio("sounds/cat.wav");
                    sound.play();
                break;
                case "dog":
                    var sound = new Audio("sounds/dog.wav");
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
    )
}