function playSong(idElementAudio){
  document.querySelector(idElementAudio).play();
}

const keyList = document.querySelectorAll('.tecla');

for (let counter = 0; counter < keyList.length; counter++) {
  
  const key = keyList[counter];
  const instrumentSong = key.classList[1];
  const idSong = `#som_${ instrumentSong }`;

  key.onclick = () => { playSong(idSong) };
}
