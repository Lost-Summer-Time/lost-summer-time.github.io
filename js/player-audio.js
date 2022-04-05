function functionAudio(thisParentNode) {
	playPause(main = thisParentNode, audio = thisParentNode.querySelector("audio"));
}

function playPause(main, audio) {
	let interval;
	if (audio.attributes.src.value != "") {
		if (audio.duration > 0 && !audio.paused) {
			audio.pause();
			clearInterval(interval);
			main.querySelector(".stop").classList.toggle("play")
			main.querySelector(".stop").textContent = "play";
			main.querySelector(".stop").classList.toggle("stop")
			setIconSVG()
		} else {
			audio.play();
			interval = setInterval(setCurrentTime, 1000, main, audio);
			main.querySelector(".play").classList.toggle("stop")
			main.querySelector(".play").textContent = "stop";
			main.querySelector(".play").classList.toggle("play")
			setIconSVG()
		}
	}
}

function setCurrentTime(main , audio) {
	main.querySelector(".time").textContent = fixTime(time = Math.round(audio.currentTime));
	main.querySelector(".point").style.left = `${Math.round(audio.currentTime) / Math.round(audio.duration) * 100}%`;
}

function fixTime(time) {
	let minutes = parseInt(time / 60);
	let seconds = time - (60 * minutes)
	let result = seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
	return result;
}
/*
function setAudioVolume(audio) {
   if (audio) {
      audio.volume = xxx / 100
   }
}
//setCurrentTime(main = thisParentNode, audio = thisParentNode.querySelector("audio"));
function setAllTime(main) {
	main.querySelector(".all-time").textContent = fixTime(time = Math.round(audio.duration));
}
*/