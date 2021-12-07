function addReview() {
    console.log("clicked");
    let review = document.getElementById("start-review").value;

    let dt = new Date();
    document.getElementById('time').innerHTML=dt.toLocaleDateString();;

    var numeric = { day: 'numeric', month: 'numeric', year: 'numeric' };

    if (review.length > 0) {
        document.getElementById("added-review").innerHTML +=
        `<div class="review-box-user">
        <p class="pl-4 pt-3 fa fa-user fa-2x d-inline-block"></p>
        <p class="d-inline-block font-weight-bold">You</p>
        <p class="d-inline-block text-small"> • ` + dt.toLocaleDateString('en-GB', numeric) + `</p>
        <div class="margin-up pl-4 pt-2">
            <span class="fa fa-star white-star unchecked-grey"></span>
            <span class="fa fa-star white-star unchecked-grey"></span>
            <span class="fa fa-star white-star unchecked-grey"></span>
            <span class="fa fa-star white-star unchecked-grey"></span>
            <span class="fa fa-star white-star unchecked-grey"></span><br/>
        </div>
        <p class="ml-4 mr-4 pt-2"> ` + review +`</p>
    </div>`
    }
}

function loginAdmin() {
    // e.preventDefault();
    let login = document.getElementById("login").value;

    if (login === "kevin@tidbits.com") {
        // console.log("redirect");
        location.href = "./adminHomePage.html"
    } 
}

function toPage2() {
    let restaurantName = document.getElementById("restaurantName").value;  
    let country = document.getElementById("country").value;
    let restaurantAddress = document.getElementById("restaurantAddress").value;
    let zipCode = document.getElementById("restaurantZipCode").value;
    let state = document.getElementById("state").value;
    let error = document.getElementById("error");

    if (restaurantName.length == 0 || country.length == 0 || restaurantAddress.length == 0 || zipCode.length == 0
        || state.length == 0) {
            error.innerHTML = "Please fill out every field before continuing.";
        } else {
            location.href = "./add-restaurant-2.html"
        }
}

function toPage3() {
    let phone = document.getElementById("phone").value;
    let website = document.getElementById("website").value;
    let detailErrors = document.getElementById("detailErrors");


    if (phone.length == 0 || website.length == 0) {
        detailErrors.innerHTML = "Please fill out every field before continuing.";
    } else {
        location.href = "./add-restaurant-3.html"
    }
}

function toPage4() {
    let allergyFriendly = document.getElementById("allergyFriendly").value;
    let disability = document.getElementById("disability").value;
    let covid = document.getElementById("covid").value;
    let categories = document.getElementById("categories").value;
    let filtersError = document.getElementById("filtersError");


    if (allergyFriendly.length == 0 || disability.length == 0 || covid.length == 0 || categories.length == 0) {
        filtersError.innerHTML = "Please fill out every field before continuing.";
    } else {
        location.href = "./add-restaurant-4.html"
    }

}