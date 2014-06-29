
// window.onload=alert('in js file');
console.log('in js file');

function doFirst(){
    var barSize=600; 
    var myMovie = document.getElementById ('myMovie');
    var playButton = document.getElementById ('playButton');
    var defaultBar = document.getElementById ('defaultBar');
    var progressBar = document.getElementById ('progressBar');

    playButton.addEventListener('click', playOrPause, false);
    defaultBar.addEventListener('click', clickedBar, false);
    //playButton.addEventListener('click', playOrPause, false);

}

function playOrPause (){

    if (!myMovie.paused && !myMovie.ended){
        myMovie.pause();
        playButton.innerHTML="Play";
        window.clearInterval(updateBar);
        
    }
    else{
        myMovie.play();
        playButton.innerHTML="Pause"
    }


    ;
}

function clickedBar (){
    ;
}

