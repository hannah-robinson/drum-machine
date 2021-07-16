import drumPadDetails from './modules/drumPadDetails.js'

$(function(){
 
  const drumBeatHandler = (e) => {
    // Get the id for a given drum pad when the user selects it either by clicking on it or pressing its keyboard shortcut
    let audioID = "";
    if(e.key == undefined) {
      audioID = e.target.innerText;
    } else {
      audioID = e.key.toUpperCase();
    }

    // Use the object id to select the chosen drum pad object
    let drumPad = drumPadDetails.find(pad => pad.id === audioID);
   
    // Update UI using properties from the drum pad object
    $("#display")
      .removeClass("border-popsicle border-sunshine border-smurf border-peach border-violet-sky border-bubble-gum border-leaf border-lagoon border-sea")
      .addClass(`border-${drumPad.border}`)
      .text(drumPad.display)
    $(`#${drumPad.id}`).trigger("play");
  }

  // Event listeners
  $(".drum-pad").click(drumBeatHandler);
  $(document).keypress(drumBeatHandler);
}); 


