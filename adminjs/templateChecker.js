var trueCount = 1;
var falseCount = 1;

var checkDeclinedPressed = false;
var checkApprovedPressed = false;

function checkDeclineFunction() {
    if(checkDeclinedPressed == false){
        document.getElementById("incomingNameDecline").style.backgroundColor = "rgb(201, 0, 0)";
        document.getElementById("incomingNameDecline").style.color = "white";
        document.getElementById("incomingNameApprove").style.backgroundColor = "";
        document.getElementById("incomingNameApprove").style.color = "gray";
        document.getElementById("finalApproveButton").disabled = true;
        document.getElementById("finalDeclineButton").disabled = false;

        if(trueCount == 1){
            falseCount +=1;
        }else{
            falseCount +=1;
            trueCount -=1;  
        }

        checkDeclinedPressed = true;
        checkApprovedPressed = false;
        return true;
    }
}

function checkApproveFunction() {
    if(checkApprovedPressed == false){
        document.getElementById("incomingNameApprove").style.backgroundColor = "green";
        document.getElementById("incomingNameApprove").style.color = "white";
        document.getElementById("incomingNameDecline").style.backgroundColor = "";
        document.getElementById("incomingNameDecline").style.color = "gray"

        if(falseCount == 1){
            trueCount +=1;
        }else{
            trueCount +=1;  
            falseCount -=1;
        }

        checkDeclinedPressed = false;
        checkApprovedPressed = true;

        if(falseCount<2 && checkApprovedPressed == true){
            document.getElementById("finalApproveButton").disabled = false;
            document.getElementById("finalDeclineButton").disabled = false;
        }else if(falseCount>1){
            document.getElementById("finalApproveButton").disabled = true;
        }
        return true;
    }
}

var checkDeclinedPressed1 = false;
var checkApprovedPressed1 = false;

function checkDeclineFunction1() {
    if(checkDeclinedPressed1 == false){
        document.getElementById("incomingCountryDecline").style.backgroundColor = "rgb(201, 0, 0)";
        document.getElementById("incomingCountryDecline").style.color = "white";
        document.getElementById("incomingCountryApprove").style.backgroundColor = "";
        document.getElementById("incomingCountryApprove").style.color = "gray";
        document.getElementById("finalApproveButton").disabled = true;
        document.getElementById("finalDeclineButton").disabled = false;

        if(trueCount == 1){
            falseCount +=1;
        }else{
            falseCount +=1;
            trueCount -=1;  
        }
        checkDeclinedPressed1 = true;
        checkApprovedPressed1 = false;
        return true;
    }
}

function checkApproveFunction1() {
    if(checkApprovedPressed1 == false){
        document.getElementById("incomingCountryApprove").style.backgroundColor = "green";
        document.getElementById("incomingCountryApprove").style.color = "white";
        document.getElementById("incomingCountryDecline").style.backgroundColor = "";
        document.getElementById("incomingCountryDecline").style.color = "gray"
        
        if(falseCount == 1){
            trueCount +=1;
        }else{
            trueCount +=1;  
            falseCount -=1;
        }
        checkDeclinedPressed1 = false;
        checkApprovedPressed1 = true;
        if(falseCount<2 && checkApprovedPressed1 == true){
            document.getElementById("finalApproveButton").disabled = false;
            document.getElementById("finalDeclineButton").disabled = false;
        }else if(falseCount>1){
            document.getElementById("finalApproveButton").disabled = true;
        }
        
        return true;
    }
}

var checkDeclinedPressed2 = false;
var checkApprovedPressed2 = false;

function checkDeclineFunction2() {
    if(checkDeclinedPressed2 == false){
        document.getElementById("incomingAddressDecline").style.backgroundColor = "rgb(201, 0, 0)";
        document.getElementById("incomingAddressDecline").style.color = "white";
        document.getElementById("incomingAddressApprove").style.backgroundColor = "";
        document.getElementById("incomingAddressApprove").style.color = "gray";
        document.getElementById("finalApproveButton").disabled = true;
        document.getElementById("finalDeclineButton").disabled = false;
        
        if(trueCount == 1){
            falseCount +=1;
        }else{
            falseCount +=1;
            trueCount -=1;  
        }
        checkDeclinedPressed2 = true;
        checkApprovedPressed2 = false;
        return true;
    }
}

function checkApproveFunction2() {
    if(checkApprovedPressed2 == false){
        document.getElementById("incomingAddressApprove").style.backgroundColor = "green";
        document.getElementById("incomingAddressApprove").style.color = "white";
        document.getElementById("incomingAddressDecline").style.backgroundColor = "";
        document.getElementById("incomingAddressDecline").style.color = "gray"
        
        if(falseCount == 1){
            trueCount +=1;
        }else{
            trueCount +=1;  
            falseCount -=1;
        }

        checkDeclinedPressed2 = false;
        checkApprovedPressed2 = true;
        if(falseCount<2 && checkApprovedPressed2 == true){
            document.getElementById("finalApproveButton").disabled = false;
            document.getElementById("finalDeclineButton").disabled = false;
        }else if(falseCount>1){
            document.getElementById("finalApproveButton").disabled = true;
        }
        
        return true;
    }    
}

var checkDeclinedPressed3 = false;
var checkApprovedPressed3 = false;

function checkDeclineFunction3() {
    if(checkDeclinedPressed3 == false){
        document.getElementById("incomingStateDecline").style.backgroundColor = "rgb(201, 0, 0)";
        document.getElementById("incomingStateDecline").style.color = "white";
        document.getElementById("incomingStateApprove").style.backgroundColor = "";
        document.getElementById("incomingStateApprove").style.color = "gray";
        document.getElementById("finalApproveButton").disabled = true;
        document.getElementById("finalDeclineButton").disabled = false;
        
        if(trueCount == 1){
            falseCount +=1;
        }else{
            falseCount +=1;
            trueCount -=1;  
        }
        checkDeclinedPressed3 = true;
        checkApprovedPressed3 = false;
        return true;
    }
}

function checkApproveFunction3() {
    if(checkApprovedPressed3 == false){
        document.getElementById("incomingStateApprove").style.backgroundColor = "green";
        document.getElementById("incomingStateApprove").style.color = "white";
        document.getElementById("incomingStateDecline").style.backgroundColor = "";
        document.getElementById("incomingStateDecline").style.color = "gray"
        
        if(falseCount == 1){
            trueCount +=1;
        }else{
            trueCount +=1;  
            falseCount -=1;
        }

        checkDeclinedPressed3 = false;
        checkApprovedPressed3 = true;
        if(falseCount<2 && checkApprovedPressed3 == true){
            document.getElementById("finalApproveButton").disabled = false;
            document.getElementById("finalDeclineButton").disabled = false;
        }else if(falseCount>1){
            document.getElementById("finalApproveButton").disabled = true;
        }
        
        return true;
    }   
}

var checkDeclinedPressed4 = false;
var checkApprovedPressed4 = false;

function checkDeclineFunction4() {
    if(checkDeclinedPressed4 == false){
        document.getElementById("incomingZipDecline").style.backgroundColor = "rgb(201, 0, 0)";
        document.getElementById("incomingZipDecline").style.color = "white";
        document.getElementById("incomingZipApprove").style.backgroundColor = "";
        document.getElementById("incomingZipApprove").style.color = "gray";
        document.getElementById("finalApproveButton").disabled = true;
        document.getElementById("finalDeclineButton").disabled = false;
        
        if(trueCount == 1){
            falseCount +=1;
        }else{
            falseCount +=1;
            trueCount -=1;  
        }

        checkDeclinedPressed4 = true;
        checkApprovedPressed4 = false;
        return true;
    }
}

function checkApproveFunction4() {
    if(checkApprovedPressed4 == false){
        document.getElementById("incomingZipApprove").style.backgroundColor = "green";
        document.getElementById("incomingZipApprove").style.color = "white";
        document.getElementById("incomingZipDecline").style.backgroundColor = "";
        document.getElementById("incomingZipDecline").style.color = "gray"
        
        if(falseCount == 1){
            trueCount +=1;
        }else{
            trueCount +=1;  
            falseCount -=1;
        }
        
        checkDeclinedPressed4 = false;
        checkApprovedPressed4 = true;
        if(falseCount<2 && checkApprovedPressed4 == true){
            document.getElementById("finalApproveButton").disabled = false;
            document.getElementById("finalDeclineButton").disabled = false;
        }else if(falseCount>1){
            document.getElementById("finalApproveButton").disabled = true;
        }
        
        return true;
    }    
}

var checkDeclinedPressed5 = false;
var checkApprovedPressed5 = false;

function checkDeclineFunction5() {
    if(checkDeclinedPressed5 == false){
        document.getElementById("incomingPhoneDecline").style.backgroundColor = "rgb(201, 0, 0)";
        document.getElementById("incomingPhoneDecline").style.color = "white";
        document.getElementById("incomingPhoneApprove").style.backgroundColor = "";
        document.getElementById("incomingPhoneApprove").style.color = "gray";
        document.getElementById("finalApproveButton").disabled = true;
        document.getElementById("finalDeclineButton").disabled = false;
        
        if(trueCount == 1){
            falseCount +=1;
        }else{
            falseCount +=1;
            trueCount -=1;  
        }
        checkDeclinedPressed5 = true;
        checkApprovedPressed5 = false;
        return true;
    }
}

function checkApproveFunction5() {
    if(checkApprovedPressed5 == false){
        document.getElementById("incomingPhoneApprove").style.backgroundColor = "green";
        document.getElementById("incomingPhoneApprove").style.color = "white";
        document.getElementById("incomingPhoneDecline").style.backgroundColor = "";
        document.getElementById("incomingPhoneDecline").style.color = "gray"
        
        if(falseCount == 1){
            trueCount +=1;
        }else{
            trueCount +=1;  
            falseCount -=1;
        }

        checkDeclinedPressed5 = false;
        checkApprovedPressed5 = true;
        if(falseCount<2 && checkApprovedPressed5 == true){
            document.getElementById("finalApproveButton").disabled = false;
            document.getElementById("finalDeclineButton").disabled = false;
        }else if(falseCount>1){
            document.getElementById("finalApproveButton").disabled = true;
        }
        
        return true;
    }    
}

var checkDeclinedPressed6 = false;
var checkApprovedPressed6 = false;

function checkDeclineFunction6() {
    if(checkDeclinedPressed6 == false){
        document.getElementById("incomingWebsiteDecline").style.backgroundColor = "rgb(201, 0, 0)";
        document.getElementById("incomingWebsiteDecline").style.color = "white";
        document.getElementById("incomingWebsiteApprove").style.backgroundColor = "";
        document.getElementById("incomingWebsiteApprove").style.color = "gray";
        document.getElementById("finalApproveButton").disabled = true;
        document.getElementById("finalDeclineButton").disabled = false;
        
        if(trueCount == 1){
            falseCount +=1;
        }else{
            falseCount +=1;
            trueCount -=1;  
        } 
        checkDeclinedPressed6 = true;
        checkApprovedPressed6 = false;
        return true;
    }
}

function checkApproveFunction6() {
    if(checkApprovedPressed6 == false){
        document.getElementById("incomingWebsiteApprove").style.backgroundColor = "green";
        document.getElementById("incomingWebsiteApprove").style.color = "white";
        document.getElementById("incomingWebsiteDecline").style.backgroundColor = "";
        document.getElementById("incomingWebsiteDecline").style.color = "gray"
        
        if(falseCount == 1){
            trueCount +=1;
        }else{
            trueCount +=1;  
            falseCount -=1;
        }

        checkDeclinedPressed6 = false;
        checkApprovedPressed6 = true;
        if(falseCount<2 && checkApprovedPressed6 == true){
            document.getElementById("finalApproveButton").disabled = false;
            document.getElementById("finalDeclineButton").disabled = false;
        }else if(falseCount>1){
            document.getElementById("finalApproveButton").disabled = true;
        }
        
        return true;
    }    
}

var checkDeclinedPressed7 = false;
var checkApprovedPressed7 = false;

function checkDeclineFunction7() {
    if(checkDeclinedPressed7 == false){
        document.getElementById("incomingHoursDecline").style.backgroundColor = "rgb(201, 0, 0)";
        document.getElementById("incomingHoursDecline").style.color = "white";
        document.getElementById("incomingHoursApprove").style.backgroundColor = "";
        document.getElementById("incomingHoursApprove").style.color = "gray";
        document.getElementById("finalApproveButton").disabled = true;
        document.getElementById("finalDeclineButton").disabled = false;
        
        if(trueCount == 1){
            falseCount +=1;
        }else{
            falseCount +=1;
            trueCount -=1;  
        }
        checkDeclinedPressed7 = true;
        checkApprovedPressed7 = false;
        return true;
    }
}

function checkApproveFunction7() {
    if(checkApprovedPressed7 == false){
        document.getElementById("incomingHoursApprove").style.backgroundColor = "green";
        document.getElementById("incomingHoursApprove").style.color = "white";
        document.getElementById("incomingHoursDecline").style.backgroundColor = "";
        document.getElementById("incomingHoursDecline").style.color = "gray"
        
        if(falseCount == 1){
            trueCount +=1;
        }else{
            trueCount +=1;  
            falseCount -=1;
        }

        checkDeclinedPressed7 = false;
        checkApprovedPressed7 = true;
        if(falseCount<2 && checkApprovedPressed7 == true){
            document.getElementById("finalApproveButton").disabled = false;
            document.getElementById("finalDeclineButton").disabled = false;
        }else if(falseCount>1){
            document.getElementById("finalApproveButton").disabled = true;
        }
        
        return true;
    }    
}

var checkDeclinedPressed8 = false;
var checkApprovedPressed8 = false;

function checkDeclineFunction8() {
    if(checkDeclinedPressed8 == false){
        document.getElementById("incomingAllergyDecline").style.backgroundColor = "rgb(201, 0, 0)";
        document.getElementById("incomingAllergyDecline").style.color = "white";
        document.getElementById("incomingAllergyApprove").style.backgroundColor = "";
        document.getElementById("incomingAllergyApprove").style.color = "gray";
        document.getElementById("finalApproveButton").disabled = true;
        document.getElementById("finalDeclineButton").disabled = false;
    
        if(trueCount == 1){
            falseCount +=1;
        }else{
            falseCount +=1;
            trueCount -=1;  
        }
        checkDeclinedPressed8 = true;
        checkApprovedPressed8 = false;
        return true;
    }
}

function checkApproveFunction8() {
    if(checkApprovedPressed8 == false){
        document.getElementById("incomingAllergyApprove").style.backgroundColor = "green";
        document.getElementById("incomingAllergyApprove").style.color = "white";
        document.getElementById("incomingAllergyDecline").style.backgroundColor = "";
        document.getElementById("incomingAllergyDecline").style.color = "gray"
        
        if(falseCount == 1){
            trueCount +=1;
        }else{
            trueCount +=1;  
            falseCount -=1;
        }

        checkDeclinedPressed8 = false;
        checkApprovedPressed8 = true;
        if(falseCount<2 && checkApprovedPressed8 == true){
            document.getElementById("finalApproveButton").disabled = false;
            document.getElementById("finalDeclineButton").disabled = false;
        }else if(falseCount>1){
            document.getElementById("finalApproveButton").disabled = true;
        }
        
        return true;
    }    
}

var checkDeclinedPressed9 = false;
var checkApprovedPressed9 = false;

function checkDeclineFunction9() {
    if(checkDeclinedPressed9 == false){
        document.getElementById("incomingDisabilityDecline").style.backgroundColor = "rgb(201, 0, 0)";
        document.getElementById("incomingDisabilityDecline").style.color = "white";
        document.getElementById("incomingDisabilityApprove").style.backgroundColor = "";
        document.getElementById("incomingDisabilityApprove").style.color = "gray";
        document.getElementById("finalApproveButton").disabled = true;
        document.getElementById("finalDeclineButton").disabled = false;
    
        if(trueCount == 1){
            falseCount +=1;
        }else{
            falseCount +=1;
            trueCount -=1;  
        }
        checkDeclinedPressed9 = true;
        checkApprovedPressed9 = false;
        return true;
    }
}

function checkApproveFunction9() {
    if(checkApprovedPressed9 == false){
        document.getElementById("incomingDisabilityApprove").style.backgroundColor = "green";
        document.getElementById("incomingDisabilityApprove").style.color = "white";
        document.getElementById("incomingDisabilityDecline").style.backgroundColor = "";
        document.getElementById("incomingDisabilityDecline").style.color = "gray"
        
        if(falseCount == 1){
            trueCount +=1;
        }else{
            trueCount +=1;  
            falseCount -=1;
        }

        checkDeclinedPressed9 = false;
        checkApprovedPressed9 = true;
        if(falseCount<2 && checkApprovedPressed9 == true){
            document.getElementById("finalApproveButton").disabled = false;
            document.getElementById("finalDeclineButton").disabled = false;
        }else if(falseCount>1){
            document.getElementById("finalApproveButton").disabled = true;
        }
        
        return true;
    }    
}


var checkDeclinedPressed10 = false;
var checkApprovedPressed10 = false;

function checkDeclineFunction10() {
    if(checkDeclinedPressed10 == false){
        document.getElementById("incomingCategoryDecline").style.backgroundColor = "rgb(201, 0, 0)";
        document.getElementById("incomingCategoryDecline").style.color = "white";
        document.getElementById("incomingCategoryApprove").style.backgroundColor = "";
        document.getElementById("incomingCategoryApprove").style.color = "gray";
        document.getElementById("finalApproveButton").disabled = true;
        document.getElementById("finalDeclineButton").disabled = false;
        
        if(trueCount == 1){
            falseCount +=1;
        }else{
            falseCount +=1;
            trueCount -=1;  
        }
        checkDeclinedPressed10 = true;
        checkApprovedPressed10 = false;
        return true;
    }
}

function checkApproveFunction10() {
    if(checkApprovedPressed10 == false){
        document.getElementById("incomingCategoryApprove").style.backgroundColor = "green";
        document.getElementById("incomingCategoryApprove").style.color = "white";
        document.getElementById("incomingCategoryDecline").style.backgroundColor = "";
        document.getElementById("incomingCategoryDecline").style.color = "gray"
        
        if(falseCount == 1){
            trueCount +=1;
        }else{
            trueCount +=1;  
            falseCount -=1;
        }

        checkDeclinedPressed10 = false;
        checkApprovedPressed10 = true;
        if(falseCount<2 && checkApprovedPressed10 == true){
            document.getElementById("finalApproveButton").disabled = false;
            document.getElementById("finalDeclineButton").disabled = false;
        }else if(falseCount>1){
            document.getElementById("finalApproveButton").disabled = true;
        }
        return true;
    }
}

var checkDeclinedPressed11 = false;
var checkApprovedPressed11= false;

function checkDeclineFunction11() {
    if(checkDeclinedPressed11 == false){
        document.getElementById("incomingImageDecline").style.backgroundColor = "rgb(201, 0, 0)";
        document.getElementById("incomingImageDecline").style.color = "white";
        document.getElementById("incomingImageApprove").style.backgroundColor = "";
        document.getElementById("incomingImageApprove").style.color = "gray";
        document.getElementById("finalApproveButton").disabled = true;
        document.getElementById("finalDeclineButton").disabled = false;
        
        if(trueCount == 1){
            falseCount +=1;
        }else{
            falseCount +=1;
            trueCount -=1;  
        }
        checkDeclinedPressed11 = true;
        checkApprovedPressed11 = false;
        return true;
    }
}

function checkApproveFunction11() {
    if(checkApprovedPressed11 == false){
        document.getElementById("incomingImageApprove").style.backgroundColor = "green";
        document.getElementById("incomingImageApprove").style.color = "white";
        document.getElementById("incomingImageDecline").style.backgroundColor = "";
        document.getElementById("incomingImageDecline").style.color = "gray"
    
        if(falseCount == 1){
            trueCount +=1;
        }else{
            trueCount +=1;  
            falseCount -=1;
        }

        checkDeclinedPressed11 = false;
        checkApprovedPressed11 = true;
        if(falseCount<2 && checkApprovedPressed11 == true){
            document.getElementById("finalApproveButton").disabled = false;
            document.getElementById("finalDeclineButton").disabled = false;
        }else if(falseCount>1){
            document.getElementById("finalApproveButton").disabled = true;
        }
        
        return true;
    }
}


function check(){
    if(falseCount == 1 && checkApprovedPressed == true && checkApprovedPressed1 == true && checkApprovedPressed2 == true 
        && checkApprovedPressed3 == true && checkApprovedPressed4 == true && checkApprovedPressed5 == true 
        && checkApprovedPressed6 == true && checkApprovedPressed7 == true && checkApprovedPressed8 == true
        && checkApprovedPressed9 == true && checkApprovedPressed10 == true && checkApprovedPressed11 == true){
            document.getElementById("finalDeclineButton").disabled = true;
            document.getElementById("finalApproveButton").disabled = false;
        }
    else if(checkDeclinedPressed == true || checkDeclinedPressed1 == true || checkDeclinedPressed2 == true 
        || checkDeclinedPressed3 == true || checkDeclinedPressed4 == true || checkDeclinedPressed5 == true 
        || checkDeclinedPressed6 == true || checkDeclinedPressed7 == true || checkDeclinedPressed8 == true
        || checkDeclinedPressed9 == true || checkDeclinedPressed10 == true || checkDeclinedPressed11 == true){
        document.getElementById("finalDeclineButton").disabled = false;
        document.getElementById("finalApproveButton").disabled = true;

    }else if(falseCount==1 || trueCount==1 || trueCount<13){
        document.getElementById("finalDeclineButton").disabled = true;
        document.getElementById("finalApproveButton").disabled = true;
        alert("Please finish reviewing the restaurant before continuing!")
    }

}