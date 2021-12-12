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

function addReview2() {
    let firstPageReview = document.getElementById("first-page-review");

    let review_pop = document.getElementById("start-review2").value;

    let oneStar_pop = document.getElementById("star1_pop").checked;
    let twoStar_pop = document.getElementById("star2_pop").checked;
    let threeStar_pop = document.getElementById("star3_pop").checked;
    let fourStar_pop = document.getElementById("star4_pop").checked;
    let fiveStar_pop = document.getElementById("star5_pop").checked;

    let dt = new Date();

    var numeric = {month: 'numeric', day: 'numeric', year: 'numeric' };

    if (review_pop.length > 0 && (oneStar_pop || twoStar_pop || threeStar_pop || fourStar_pop || fiveStar_pop)) {
        firstPageReview.innerHTML =
        `<div id="done">
            <div id="redirectToSignup">
            <h3 class="pt-2 pl-2 font-weight-bold text-center">Sign up to post your review</h3>
            <p class="text-center">Have an account? <a id="signup_redirect" href="#">Log in here!</a></p>
            <div class="pt-2 pl-3">
                <label class="font-weight-bold d-inline-block">First and Last Name</label><p class="red-text">*</p><br/>
                <div class="mr-3">
                    <input id="email_pop" type="text" placeholder="First and Last Name" class="input-full margin-m-up"/>
                </div>
                <label class="font-weight-bold d-inline-block">Email</label><p class="red-text">*</p><br/>
                <div class="mr-3">
                    <input id="email_pop" type="email" placeholder="Email" class="input-full margin-m-up"/>
                </div>
                <label class="font-weight-bold pt-2 d-inline-block">Password</label><p class="red-text">*</p><br/>
                <div class="mr-3">
                    <input id="password_pop" type="password" placeholder="Password" class="input-full margin-m-up"/>
                </div>
                <label class="font-weight-bold pt-2 d-inline-block">Confirm Password</label><p class="red-text">*</p><br/>
                <div class="mr-3">
                    <input id="password_pop" type="password" placeholder="Confirm Password" class="input-full margin-m-up"/>
                </div>
            </div>
            <input id="posted" type="button" value="Sign up and post" class="search-button-3"/>
            </div>
        </div>`;
    }

    let posted = document.getElementById("posted");





    posted.onclick = function () {
        document.getElementById("done").innerHTML =
        `<h2 class="font-weight-bold text-center pt-4 pl-2 pr-2">Thank you for sharing your experience with us!</h2>
        <p class="text-center">You can now close this pop up.</p>`;

        let loginNav = document.getElementById("loginRestaurant");
        loginNav.href = "./index.html";
        loginNav.innerHTML = "Log out";
    }

    if (review_pop.length > 0 && oneStar_pop) {
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
        <p class="ml-4 mr-4 pt-2"> ` + review_pop +`</p>
    </div>`
    } else if (review_pop.length > 0 && twoStar_pop) {
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
        <p class="ml-4 mr-4 pt-2"> ` + review_pop +`</p>
    </div>`
    } else if (review_pop.length > 0 && threeStar_pop) {
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
        <p class="ml-4 mr-4 pt-2"> ` + review_pop +`</p>
    </div>`
    } else if (review_pop.length > 0 && fourStar_pop) {
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
        <p class="ml-4 mr-4 pt-2"> ` + review_pop +`</p>
    </div>`
    } else if (review_pop.length > 0 && fiveStar_pop) {
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
        <p class="ml-4 mr-4 pt-2"> ` + review_pop +`</p>
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


    if (phone.length == 0 || website.length == 0) {
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