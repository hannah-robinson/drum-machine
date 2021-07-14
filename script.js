$(function(){
 // Properties that will change based on user interaction
  const drumPadDetails = [
    {
      id: "Q",
      border: "popsicle",
      display: "Clap"
    },
    {
      id: "W",
      border: "sunshine",
      display: "Open High Hat"
    },
    { id: "E",
      border: "sea",
      display: "Kick"
    },
    {
      id: "A",
      border: "smurf",
      display: "Closed High Hat"
    },
    {
      id: "S",
      border: "leaf",
      display: "Kick 'n' Hat"
    },
    {
      id: "D",
      border: "peach",
      display: "Shaker"
    },
    {
      id: "Z",
      border: "lagoon",
      display: "Punchy Kick"
    },
    {
      id: "X",
      border: "bubble-gum",
      display: "Side Stick"
    },
    {
      id: "C",
      border: "violet-sky",
      display: "Snare"
    }
  ]
 
  const drumBeatHandler = (e) => {
    // Get data for user-selected drum pad, based either on user clicks or key strokes
    let audioID = "";
    if(e.key == undefined) {
      audioID = e.target.innerText;
    } else {
      audioID = e.key.toUpperCase();
    }

    let drumPad = drumPadDetails.find(pad => pad.id === audioID);
   
    // Update UI
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


