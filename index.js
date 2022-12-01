let numberOfDrums = document.querySelectorAll(".drum");


for (let i = 0; i < numberOfDrums.length; i++) {
    numberOfDrums[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    animation(buttonInnerHTML);
    
});}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            let drumW = new Audio("sounds/tom-1.mp3");
            drumW.play();
             break;
        case "a":
            let drumA = new Audio("sounds/tom-2.mp3");
            drumA.play();
            break;
        case "s":
            let drumS = new Audio("sounds/tom-3.mp3");
            drumS.play();
            break;
        case "d":
            let drumD = new Audio("sounds/tom-4.mp3");
            drumD.play();
            break;
        case "j":
            let drumJ = new Audio("./sounds/snare.mp3");
            drumJ.play();
            break;
        case "k":
            let drumK = new Audio("./sounds/kick-bass.mp3");
            drumK.play();
            break;
        case "l":
            let drumL = new Audio("./sounds/crash.mp3");
            drumL.play();
            break;
        default:history.go(0);
    }
}

function animation(currentKey){
let activButton =  document.querySelector("." + currentKey);
activButton.classList.add('pressed');
setTimeout(() => {
    activButton.classList.remove('pressed');
}, 100);

}


