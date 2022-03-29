let x = null;
let xx = null;
let xxx = null;

let isDown_volumeSlider = null;
let isDown_timeline = null;

let document_volumeSlider = document.getElementById("volumeSlider");
let document_timeline =  document.getElementById("timeline");

document_volumeSlider.addEventListener("mousedown", e => {
   x = e.pageX;
   xx = document_volumeSlider.offsetLeft;
   xxx = x - xx;
   document.getElementById("volumeSliderPoint").style.left = xxx + "%";
   isDown_volumeSlider = true;
   setAudioVolume();
})

document_timeline.addEventListener("mousedown", e => {
   x = e.pageX;
   xx = document_timeline.offsetLeft;
   xxx = x - xx;
   let fix = document_timeline.offsetWidth;
   document.getElementById("timelinePoint").style.left = xxx + "px";
   isDown_timeline = true;
   if (audio) {
      audio.currentTime = ( xxx / fix ) * audio.duration;
      setCurrentTime();
   }
})

document.addEventListener("mousemove", e => {
   if (isDown_volumeSlider) {
      x = e.pageX;
      xxx = x - xx;
      if (xxx <= 100 && xxx >= 0) {
         document.getElementById("volumeSliderPoint").style.left = xxx + "%";
         setAudioVolume();
      }
   }
   if (isDown_timeline) {
      x = e.pageX;
      xxx = x - xx;
      let fix = document_timeline.offsetWidth;
      if (xxx <= fix && xxx >= 0) {
         document.getElementById("timelinePoint").style.left = xxx + "px";
         if (audio) {
            audio.currentTime = ( xxx / fix ) * audio.duration;
            setCurrentTime();
         }
      }
   }
})

document.addEventListener("mouseup", e => {
   isDown_volumeSlider = false;
   isDown_timeline = false;
})
