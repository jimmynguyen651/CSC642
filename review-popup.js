// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let lazyRegistration = document.getElementById("lazyRegistration");

lazyRegistration.onclick = function () {
    let firstPageReview = document.getElementById("first-page-review");
    console.log("clicked")

    let review_pop = document.getElementById("start-review2").value;

    let oneStar_pop = document.getElementById("star1_pop").checked;
    let twoStar_pop = document.getElementById("star2_pop").checked;
    let threeStar_pop = document.getElementById("star3_pop").checked;
    let fourStar_pop = document.getElementById("star4_pop").checked;
    let fiveStar_pop = document.getElementById("star5_pop").checked;

    let password_pop = document.getElementById("password_pop").value;
    let email_pop = document.getElementById("email_pop").value;


    firstPageReview.innerHTML = 
        `<div>
            <h1 class="pt-3 text-center">Your review has been posted!</h1>
            <h3 class="text-center>You can now exit this pop up.</h3>
        </div>`

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
