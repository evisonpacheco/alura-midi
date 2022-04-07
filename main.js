function playSongPom(){
  document.querySelector('#som_tecla_pom').play();
}

const keyList = document.querySelectorAll('.tecla');

let counter = 0;

while (counter < keyList.length) {
  keyList[counter].onclick=playSongPom;

  counter = counter + 1;

  console.log(counter);
}