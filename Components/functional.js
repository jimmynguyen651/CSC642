function addReview() {
    let review = document.getElementById("start-review").value;

    let oneStar = document.getElementById("star1").checked;
    let twoStar = document.getElementById("star2").checked;
    let threeStar = document.getElementById("star3").checked;
    let fourStar = document.getElementById("star4").checked;
    let fiveStar = document.getElementById("star5").checked;

    let dt = new Date();

    var numeric = {month: 'numeric', day: 'numeric', year: 'numeric' };

    if (review.length > 0 && oneStar) {
        document.getElementById("added-review").innerHTML +=
        `<div class="review-box-user">
        <p class="pl-4 pt-3 fa fa-user fa-2x d-inline-block"></p>
        <p class="d-inline-block font-weight-bold">You</p>
        <p class="d-inline-block text-small"> • ` + dt.toLocaleDateString('en-US', numeric) + `</p>
        <div class="margin-up pl-4 pt-2">
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star unchecked-grey"></span>
            <span class="fa fa-star white-star unchecked-grey"></span>
            <span class="fa fa-star white-star unchecked-grey"></span>
            <span class="fa fa-star white-star unchecked-grey"></span><br/>
        </div>
        <p class="ml-4 mr-4 pt-2"> ` + review +`</p>
    </div>`
    } else if (review.length > 0 && twoStar) {
        document.getElementById("added-review").innerHTML +=
        `<div class="review-box-user">
        <p class="pl-4 pt-3 fa fa-user fa-2x d-inline-block"></p>
        <p class="d-inline-block font-weight-bold">You</p>
        <p class="d-inline-block text-small"> • ` + dt.toLocaleDateString('en-US', numeric) + `</p>
        <div class="margin-up pl-4 pt-2">
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star unchecked-grey"></span>
            <span class="fa fa-star white-star unchecked-grey"></span>
            <span class="fa fa-star white-star unchecked-grey"></span><br/>
        </div>
        <p class="ml-4 mr-4 pt-2"> ` + review +`</p>
    </div>`
    } else if (review.length > 0 && threeStar) {
        document.getElementById("added-review").innerHTML +=
        `<div class="review-box-user">
        <p class="pl-4 pt-3 fa fa-user fa-2x d-inline-block"></p>
        <p class="d-inline-block font-weight-bold">You</p>
        <p class="d-inline-block text-small"> • ` + dt.toLocaleDateString('en-US', numeric) + `</p>
        <div class="margin-up pl-4 pt-2">
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star unchecked-grey"></span>
            <span class="fa fa-star white-star unchecked-grey"></span><br/>
        </div>
        <p class="ml-4 mr-4 pt-2"> ` + review +`</p>
    </div>`
    } else if (review.length > 0 && fourStar) {
        document.getElementById("added-review").innerHTML +=
        `<div class="review-box-user">
        <p class="pl-4 pt-3 fa fa-user fa-2x d-inline-block"></p>
        <p class="d-inline-block font-weight-bold">You</p>
        <p class="d-inline-block text-small"> • ` + dt.toLocaleDateString('en-US', numeric) + `</p>
        <div class="margin-up pl-4 pt-2">
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star unchecked-grey"></span><br/>
        </div>
        <p class="ml-4 mr-4 pt-2"> ` + review +`</p>
    </div>`
    } else if (review.length > 0 && fiveStar) {
        document.getElementById("added-review").innerHTML +=
        `<div class="review-box-user">
        <p class="pl-4 pt-3 fa fa-user fa-2x d-inline-block"></p>
        <p class="d-inline-block font-weight-bold">You</p>
        <p class="d-inline-block text-small"> • ` + dt.toLocaleDateString('en-US', numeric) + `</p>
        <div class="margin-up pl-4 pt-2">
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star checked-yellow"></span>
            <span class="fa fa-star white-star checked-yellow"></span><br/>
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
    let restaurantPhoto = document.getElementById("restaurantPhoto").value;
    let detailErrors = document.getElementById("detailErrors");


    if (phone.length == 0 || website.length == 0 || restaurantPhotoPhoto.length == 0) {
        detailErrors.innerHTML = "Please fill out every field before continuing.";
    } else {
        location.href = "./add-restaurant-3.html"
    }
}

function toPage4() {
    let yesAllergy = document.getElementById("allergyFriendlyYes").checked;
    let noAllergy = document.getElementById("allergyFriendlyNo").checked;
    let yesDisability = document.getElementById("disabilityYes").checked;
    let noDisability = document.getElementById("disabilityNo").checked;
    let yesCovid = document.getElementById("covidYes").checked;
    let noCovid = document.getElementById("covidNo").checked;
    let categories = document.getElementById("categories").value;
    let filtersError = document.getElementById("filtersError");

    if ((yesAllergy || noAllergy) && (yesDisability || noDisability) && (yesCovid || noCovid) && categories.length !== 0) {
        location.href="./add-restaurant-4.html"
    } else {
        filtersError.innerHTML = "Please fill out every field before continuing.";
    }


}

function addRestSignupComplete() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let termsConditions = document.getElementById("termsConditions").checked;
    let signupError = document.getElementById("signupError");

    if (firstName.length == 0 || lastName.length == 0 || email.length == 0 || password.length == 0 || confirmPassword.length == 0 || !termsConditions) {
        signupError.innerHTML = "Please fill out every field before continuing.";
    } else {
        location.href = "./add-restaurant-complete.html";
    }
}

function addRestLoginComplete() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let loginError = document.getElementById("loginError");

    if (email.length == 0 || password.length == 0) {
        loginError.innerHTML = "Please fill out every field before continuing.";
    } else {
        location.href = "./add-restaurant-complete.html";
    }
}