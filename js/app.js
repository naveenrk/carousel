// app.js

// direction = boolean value: true or false. If true, go to NEXT slide; otherwise go to PREV slide
function toggleSlide(direction){
    var elements = document.getElementsByClassName('hideable'); // gets all the "slides" in our slideshow
    
    var visibleElementId = getVisibleElement(elements); // Find the LI that's currently displayed
    
    elements[visibleElementId].style.display = "none";
    
    if(!direction){
        var makeVisible = prev(visibleElementId, elements.length); // get the previous slide
    } else {
        var makeVisible = next(visibleElementId, elements.length); // get the next slide
    }
    
    elements[makeVisible].style.display = "block"; // show the previous or next slide
    sn = document.getElementById("slideNumber"); // show the dynamic sliding image count
    sn.innerHTML = (makeVisible + 1);
}

function getVisibleElement(elements){
    var visibleElementId = -1;
    
    for(var i=0; i< elements.length; i++){
        if(elements[i].style.display == 'block'){
            visibleElementId = i;
        }
    }
    
    return visibleElementId;
}

function prev(num, arrayLength) {
    if(num == 0) return arrayLength-1;
    else return num-1;
}

function next(num, arrayLength) {
    if(num == arrayLength-1) return 0;
    else return num+1;
}

var interval = 1000; // You can change this value to your desired speed. The value is in milliseconds, so if you want to advance a slide every 5 seconds, set this to 5000.
var switching = setInterval("toggleSlide(true)", interval);

window.paused = false;

function toggleInterval(){
    var button = document.getElementById('pauseButton');
    if(!window.paused){
        clearInterval(switching);
        button.value = 'Resume';
    } else {
        switching = setInterval("toggleSlide(true)", interval);
        button.value = 'Pause';
    }
    
    window.paused = !(window.paused);
}

function goToEdge(where){
    var elements = document.getElementsByClassName('hideable');
    var visibleId = getVisibleElement(elements);
    var firstButton = document.getElementById("firstButton");
    var lastButton = document.getElementById("lastButton");
    elements[visibleId].style.display = "none";
    if(!where){
        elements[0].style.display = 'block' //shows the first item
        sn.innerHTML = 1;
    } else {
        elements[elements.length-1].style.display = 'block' //shows the last item
        sn.innerHTML = elements.length;
    }
    
}

                    
                    

