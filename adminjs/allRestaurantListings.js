function checkForRestaurant(){
    var searchRestaurantUserTypes = document.getElementById("searchRestaurant");
    var searchForRestaurant = searchRestaurantUserTypes.value.toLowerCase();

    var cards = document.getElementById("searchThruCards");
    var individualCards = cards.getElementsByClassName("card");

    for(let i = 0; i< individualCards.length; i++){
        let title = individualCards[i].querySelector(".card-body h5");
        let locations = individualCards[i].querySelector(".card-body p");

        if(title.innerHTML.toLowerCase().indexOf(searchForRestaurant) > -1){ // minus one means we got the match else no match
            individualCards[i].style.display ="";
            document.getElementById("bottomPagination").style.display = "";
        }else if(locations.innerHTML.toLowerCase().indexOf(searchForRestaurant) > -1){
            individualCards[i].style.display ="";
            document.getElementById("bottomPagination").style.display = "";
        }
        else{
            document.getElementById("bottomPagination").style.display = "none";
            individualCards[i].style.display ="none";
        }

    }
}