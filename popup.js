// On page load
window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false); //remove listener, no longer needed
    console.log("In page load code.");
    
    var theButton = document.getElementById("clickMe");
    if (theButton) {
        // Add click listener for button
        if (!listeningAlready) {
            listeningAlready = true;
            console.log("Adding button click event listener for the first time.")
            window.debugButton = theButton;
            theButton.addEventListener("click", sendContentMessage, false);
            
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition,errorHandler);
            }
            else {
                console.log("Sorry, your browser does not support geolocation services.");
            }

        } else {
            console.log("Already added button click... skipping.")
        }
    } else {
        console.log("Button not ready yet for event adding.")
    }
},false);
