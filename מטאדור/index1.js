// Global definition
// Const
var NUM_OF_DETAILS = 6;

// Variables
var nDetailNum = 1;

//-------------------------------------------------------------------------------
// Load function
//-------------------------------------------------------------------------------
window.addEventListener("load", function(){
    setTimeout(function() {
        addListeners();
    }, 1300);
});

//-------------------------------------------------------------------------------
// Add listeners to the details and the return button
//-------------------------------------------------------------------------------
function addListeners() {
    document.getElementById("all-details").style.visibility = "visible";
    document.getElementById("return-btn1").style.visibility = "visible";

    for (var nDetailIndex = 1; nDetailIndex <= NUM_OF_DETAILS; nDetailIndex++) {
        document.getElementById("detail" + nDetailIndex).addEventListener("click", showDetails);
    }

    document.getElementById("return-btn1").addEventListener("click", onClickReturn);
}

//-------------------------------------------------------------------------------
// Show illustations when choosing a detail to illustrate
//-------------------------------------------------------------------------------
function showDetails(event) {
    // Variable definition
    document.getElementById("illus" + nDetailNum).style.visibility = "hidden";

    nDetailNum = event.currentTarget.id.charAt(6);

    document.getElementById("illus" + nDetailNum).style.visibility = "visible";
}

//-------------------------------------------------------------------------------
// Return to the subj map page
//-------------------------------------------------------------------------------
function onClickReturn(event) {
    // Remove the details and return button listeners
    for (var nDetailIndex = 1; nDetailIndex <= NUM_OF_DETAILS; nDetailIndex++) {
        document.getElementById("detail" + nDetailIndex).removeEventListener("click", showDetails);
    }

    document.getElementById("return-btn1").removeEventListener("click", onClickReturn);

    // Save the number of index
    localStorage.setItem("curr_page_num","1");
    var nNumOfEnter = localStorage.getItem("nNumOfEnter");
    console.log(nNumOfEnter);
    nNumOfEnter++;
    console.log(nNumOfEnter);
    // localStorage.setItem("nNumOfEnter", nNumOfEnter);
    window.location.href = "subjects.html";
}