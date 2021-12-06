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
        location.href = "./restaurant-page.html"
    } else {
        location.href = "./landing.html"
    }
}