
// window.onload=alert('in js file');
console.log('in js file');

// Using the module pattern to avoid polluting the global scope
// var customVideoTag = ( function () {


// var customVideoTag = {
    // These should be of local scope instead of global but it is such a 
    // simple page ... perhaps namespace them ... 
    var barSize; 
    var myMovie; 
    var playButton;
    var defaultBar;
    var progressBar;
    var volumeDown; 
    var volumeUp; 
    
    function doFirst(){
        barSize = 485; /* Change this to the declared CSS width property */
        myMovie = document.getElementById ('myMovie');
        playButton = document.getElementById ('playButton');
        defaultBar = document.getElementById ('defaultBar');
        progressBar = document.getElementById ('progressBar');
        volumeDown = document.getElementById ('volumeDown');
        volumeUp = document.getElementById ('volumeUp'); 
    
        playButton.addEventListener('click', playOrPause, false);
        defaultBar.addEventListener('click', clickedBar, false);
        playButton.addEventListener('click', playOrPause, false);
        volumeDown.addEventListener('click', volDown, false);
        volumeUp.addEventListener('click', volUp, false);
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
        console.log ('myMovie.ended: ' + myMovie.ended)
        if (!myMovie.ended){
            var size=parseInt((myMovie.currentTime * barSize)/myMovie.duration, 10); 
            // console.log ('size: ' + size);
            progressBar.style.width = size + 'px';
        }
        else {
            progressBar.style.width = '0px';
            playButton.innerHTML="Play";
            window.clearInterval();
        }
    }
    
    function clickedBar (e){
        console.log('myMovie.paused: ' + myMovie.paused + ' myMovie.ended: ' + myMovie.ended);
        
        if (!myMovie.paused && !myMovie.ended) {
            var mouseX = e.pageX - defaultBar.offsetLeft;
            var newTime = (mouseX * myMovie.duration)/barSize;
            myMovie.currentTime = newTime;
            progressBar.style.width = mouseX + 'px';
        }
    }
    
    function volDown (){
        // even if it is not playing ...
        console.log('volDown(): ' + Math.floor(myMovie.volume * 10));
        // prevent rounding errors
        if (Math.floor(myMovie.volume * 10) > 0){
            myMovie.volume -= 0.1;
        }
    }
    
    function volUp (){
        // even if it is not playing ...
        console.log('volUp(): ' + Math.floor(myMovie.volume * 10));
        if (Math.floor(myMovie.volume * 10) < 10){
            myMovie.volume += 0.1;
        }
    }

// }

// window.addEventListener ('load', customVideoTag.doFirst, false); 
window.addEventListener ('load', doFirst, false); 



