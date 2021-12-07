var flexbox = document.getElementById("flexbox");
var modal = document.getElementById("myModal");
var filtersicon = document.getElementById("filtersicon");



var numberclick1 = document.getElementById("numberclick");
var numberclick2 = document.getElementById("numberclick2");
var numberclick3 = document.getElementById("numberclick3");
var chevronleft = document.getElementById("chevronleft");
var chevronright = document.getElementById("chevronright");
// rest of the clicks aren't added for the demo until it's deemed necessary


var confirmfilters = document.getElementById("confirmFilters");
var exitfilters = document.getElementById("exitFilters");
var exitModal = document.getElementById("exitModal");
var overlay = document.getElementById("overlay");

filtersicon.onclick = function() {
    modal.style.display = "block";
    overlay.style.display = "block";
}

flexbox.onclick = function() {
    // PUT RESTAURANT PAGE HERE
     window.location.href = "test.html"
}
// can add more buttons below here if we decide to direct them somewhere else, 
// otherwise hitting the flexbox redirects to where we want to go

// unable to hit multiple pages but our implementation does not necessarily need to call for such

confirmfilters.onclick = function() {

    // this function goes to resultspage2, which will contain vietnamese as an additional filter
    window.location.href = "test.html"
    
}
exitfilters.onclick = function() {
    // go to results page here
    modal.style.display = "none";
    overlay.style.display = "none";
    
}

exitModal.onclick = function() {
  
    modal.style.display = "none";
    overlay.style.display = "none";
    
}
numberclick1.onclick = function() {
    // this function goes to resultspage2, which will contain vietnamese as an additional filter
    window.location.href = "test.html"
    
}

numberclick2.onclick = function() {
    // this function goes to resultspage2, which will contain vietnamese as an additional filter
    window.location.href = "test.html"
    
}

numberclick3.onclick = function() {
    // this function goes to resultspage2, which will contain vietnamese as an additional filter
    window.location.href = "test.html"
    
}

chevronleft.onclick = function() {
    // this function goes to resultspage2, which will contain vietnamese as an additional filter
    window.location.href = "test.html"
    
}

chevronright.onclick = function() {
    // this function goes to resultspage2, which will contain vietnamese as an additional filter
    window.location.href = "test.html"
    
}