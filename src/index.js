const video = document.querySelector("video");
const button = document.querySelector("button");
// button.onclick = () => video.play();
//for more extensive
function MediaPlayer(config) {
    this.media = config.el
}
//when we use "class" (object as class) we use prototype
MediaPlayer.prototype.play = function(){
    //harcoded (its not reusable) we use config and this to solve
    //video.play();
    this.media.play();
}

MediaPlayer.prototype.pause = function(){
   this.media.pause();
}

const player = new MediaPlayer({el: video});

// video.play();
// button.onclick = () => player.pause();

/*
* asi como creamos prototype.play funciona igual con .pause (manipulamos el video)
* cada vez que se presione el boton play/pause este depende de una funcion donde valide si el video(referenciado anteriormente),
* este pausado (boolean). se le ordena cambiar de estado 
*/
button.onclick = function() {
    (video.paused)
    ? player.play()
    : player.pause();
} ;
