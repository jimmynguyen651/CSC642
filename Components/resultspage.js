var flexbox = document.getElementById("flexbox");
var modal = document.getElementById("myModal");
var filtersicon = document.getElementById("filtersicon");



var numberclick1 = document.getElementById("numberclick");
var numberclick2 = document.getElementById("numberclick2");
var numberclick3 = document.getElementById("numberclick3");
var chevronleft = document.getElementById("chevronleft");
var chevronright = document.getElementById("chevronright");
// rest of the clicks aren't added for the demo until it's deemed necessary

// NOTES FROM JIMMY IF YOU'RE CONFUSED:
// - Results Page 2 is a hardcoded example of filters working
// - Results Page 3 is an extra page we swap to when clicking on "2" or the right arrow

// FOR HTML:
// - CHANGE FUNNY SUNGLASSES CAT PIC TO RESTAURANT ON LINES 77 AND 157

// MISC:
// - MAKE SEARCH BAR KEEP "VEGETARIAN" AS SEARCH RESULTS FOR CONSISTENCY

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
     window.location.href = "restaurant-page.html"
}

confirmfilters.onclick = function() {

    // this function goes to resultspage2, which will contain Japanese as an additional filter
    window.location.href = "resultspage2.html"
    
}
exitfilters.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
    
}

exitModal.onclick = function() {
  
    modal.style.display = "none";
    overlay.style.display = "none";
    
}
numberclick1.onclick = function() {
    // goes to FIRST results page (default)
    window.location.href = "resultspage2.html"
    
}

numberclick2.onclick = function() {
    // goes to resultspage2 (second)
    window.location.href = "resultspage3.html"
    
}


chevronleft.onclick = function() {
    // For the sake of the demo, this goes back to the first page with the filter activated 
    window.location.href = "resultspage2.html"
    
}

chevronright.onclick = function() {
    // goes to resultspage2 (second)
    window.location.href = "resultspage3.html"
    
}