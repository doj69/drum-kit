var numberOfButtons = document.querySelectorAll(".drum").length;

//Dettecting from click
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonHTML = this.innerHTML;
    makeSound(buttonHTML);
  });
}

//Detecting from keyboard press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      playAudio("sounds/tom-1.mp3");
      buttonAnimation(key);
      break;
    case "a":
      playAudio("sounds/tom-2.mp3");
      buttonAnimation(key);
      break;
    case "s":
      playAudio("sounds/tom-3.mp3");
      buttonAnimation(key);
      break;
    case "d":
      playAudio("sounds/tom-4.mp3");
      buttonAnimation(key);
      break;
    case "j":
      playAudio("sounds/snare.mp3");
      buttonAnimation(key);
      break;
    case "k":
      playAudio("sounds/crash.mp3");
      buttonAnimation(key);
      break;
    case "l":
      playAudio("sounds/kick-bass.mp3");
      buttonAnimation(key);
      break;
    default:
      console.log(key);
  }
}

function playAudio(url) {
  var sound = new Audio(url);
  sound.play();
}

function buttonAnimation(currentKey) {
  var currentButton = document.querySelector(`.${currentKey}`);
  currentButton.classList.add("pressed");
  setTimeout(function() {
    currentButton.classList.remove("pressed")
  }, 100);
}