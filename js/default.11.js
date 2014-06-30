
// window.onload=alert('in js file');
console.log('in js file');

var barSize; 
var myMovie; 
var playButton;
var defaultBar;
var progressBar;


function doFirst(){
    barSize=600; 
    myMovie = document.getElementById ('myMovie');
    playButton = document.getElementById ('playButton');
    defaultBar = document.getElementById ('defaultBar');
    progressBar = document.getElementById ('progressBar');

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
        playButton.innerHTML="Pause";
        var updateBar = setInterval (update, 500); 
    }
}

function update (){
    if (!myMovie.ended){
        var size=parseInt((myMovie.currentTime * barSize/myMovie).duration); 
        progressBar.style.width = size + 'px';
    }
    else {
        progressBar.style.width = '0px';
        playButton.innerHTML="Play";
        window.clearInterval();
    }
}

function clickedBar (e){
    if (!myMovie.paused && !myMovie.ended) {
        var mouseX = e.pageX - defaultBar.offsetLeft;
        var newTime = (mouseX * myMovie.duration)/barSize;
        myMovie.currentTime = newTime;
        progressBar.style.width = mouseX + 'px';
    }
}

window.addEventListener ('load', doFirst, false); 
