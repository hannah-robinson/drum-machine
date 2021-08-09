import drumPadDetails from './modules/drumPadDetails.js';

$(function () {
  const drumBeatHandler = (e) => {
    const audioID = getAudioID(e);
    // Use the object id to select the chosen drum pad object
    try {
      const drumPad = drumPadDetails.find((pad) => pad.id === audioID);
      updateUI(drumPad);
    } catch (error) {
      console.log(
        'It seems you need a bigger drum machine :) \nChoose a letter that you can see on the drum machine.'
      );
      alert(
        'It seems you need a bigger drum machine 😊 \nChoose a letter that you can see on the drum machine.'
      );
    }
  };

  // Get the id for a given drum pad when the user selects it either by clicking on it or pressing its keyboard shortcut
  function getAudioID(e) {
    let audioID = '';
    if (e.key == undefined) {
      audioID = e.target.innerText;
    } else {
      audioID = e.key.toUpperCase();
    }
    return audioID;
  }

  // Update UI using properties from the drum pad object
  function updateUI(drumPad) {
    $('#display')
      .removeClass(
        'border-popsicle border-sunshine border-smurf border-peach border-violet-sky border-bubble-gum border-leaf border-lagoon border-sea'
      )
      .addClass(`border-${drumPad.border}`)
      .text(drumPad.display);
    $(`#${drumPad.id}`).trigger('play');
  }

  // Event listeners
  $('.drum-pad').click(drumBeatHandler);
  $(document).keypress(drumBeatHandler);
});
