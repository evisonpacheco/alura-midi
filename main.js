function playSong(keyElementAudio){
  document.querySelector(keyElementAudio).play();
}

const keyList = document.querySelectorAll('.tecla');

let counter = 0;

while (counter < keyList.length) {
  
  const key = keyList[counter];
  const instrumentSong = key.classList[1];
  const idSong = `#som_${instrumentSong}`;

  key.onclick = () => {playSong(idSong);}
  counter++;
}