function playSong(keyElementAudio){
  document.querySelector(keyElementAudio).play();
}

const keyList = document.querySelectorAll('.tecla');

let counter = 0;

while (counter < keyList.length) {
  keyList[counter].onclick=playSong;

  counter = counter + 1;

  console.log(counter);
}