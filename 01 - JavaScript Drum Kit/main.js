function playSound(e){ //this is a parameter, it is used when creating a function. this is a bucket we are waiting for something -- in this instant it is waiting for the event
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //getting the data-key; data attributes are used to make up any attribute you want. and use them in JS. the reason why they are created bc html is funky and html 5 introduced this attribut so you can create your own attributes the way its meant to be done. key is a variable; audio tag is being used and its using that variable. long way of writing it in the query selector
    const key = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return; // this means if its not audio, stop the function from running all together; this is a short hand way of writing an if else
    audio.currentTime = 0; //rewind to the start
    audio.play(); //this is a method .play means you are adding it an HTML media element such as audio;
    key.classList.add('playing'); //adding the playing class to the elements / the audio, look at CSS and see .playing which has the transform and using it to play
}
function removeTransition(e) { //remove transition might be a css thing -- look up the video
    if(e.propertyName !== 'transorm') return; // CSS property transform; this function is removing the playing class
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('key');
keys.forEach(key => key.addEventListener('transitionEnd', removeTransition)) //forEach is a loop for arrays; it will take back a callback, argument it takes is a callback with a function
window.addEventListener('keydown', playSound); // using the second argument as a function & allows keys to play a sound


// listen for the keydown event; thats why it exists
//e stands for event, an object full of data saying whats happening
//keyCode is the number associated with that key so when it displays, itll give the correspomding number it has
// querySelector vs querySelectorAll means the first is just selecting one vs all of them
//click event is a click event and it fires the sound
//when you have an array of elements you cannot listen to all of them, so listen to them and then attach eventlistener so using key.addeventlistener and the event we are listening for is trransionend
