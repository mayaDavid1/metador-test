// Global definition
// Consts
var NUM_OF_DRAG = 9;

// Variables
var nNumOfCorrect;

//------------------------------------------------------------------------------------------
// Load function
//------------------------------------------------------------------------------------------
$( function() {
    // Defining all draggables and droppables 
    for (var nDragNum = 1; nDragNum <= NUM_OF_DRAG; nDragNum++) {
        $( "#drag" + nDragNum).draggable();
        $( "#drop" +  nDragNum).droppable({
            drop: function( event, ui ) {
              $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                  .html( "Dropped!" );
            }
        });
    } 
    
    // Add listener to the check button
    $("#check-button").on("click", onClickCheck);
});

//------------------------------------------------------------------------------------------
// When pressing the check button
//------------------------------------------------------------------------------------------
function onClickCheck(event) { 
    // For each of the names chack if the correct name according to the id number
    for (var nDragNum = 1; nDragNum <= NUM_OF_DRAG; nDragNum++) {
        //מה התנאי - איך עושים השוואה בין מספר הנגרר למספר של מה שזה הונח עליו
        if(correct) {
            nNumOfCorrect++;
           // Color the correct green
           
           // Make the correct unable to drag
        } else {
            // Color the wrong red
        }
    }

    // Check if everything is correct
    if(nNumOfCorrect === NUM_OF_DRAG) {
        // Show the correct message
        $(".correct-message").show("fade", 400);

        // Add listener to the return button
        $("#return-button").on("click", onClickReturn);

        // Remove listener from the check button
        $("#check-button").off("click", onClickCheck);
    } else {
        // Show the wrong message for 3 seconds
        $(".wrong-message").show("fade", 400);

        setTimeout(function(){
            $(".wrong-message").hide("fade", 400);
        }, 3000);
    }
}

//------------------------------------------------------------------------------------------
// Return to the subj map page
//------------------------------------------------------------------------------------------
function onClickReturn(event) {
    // Remove the listener
    $("#return-button").off("click", onClickReturn);

    // Save the number of index
    localStorage.setItem("curr_page_num","2");
    window.location.href = "subjects.html";
}