let thisParentNode = null;

let audio = null;
let audioFix = null;
let audioDuration = null;
let isPlay = null;
let interval = null;

let isTpn = null;
let tpn = null; // thisParentNode
let tpnAudio = null;
let tpnAudioCurrentTime = null;
let tpnAudioAllTime = null;
let tpnAudioScrollbarAudio = null;
let tpnTimeline = null;
let tpnVolumeSlider = null;

function startAudio(thisParentNode) {
	if (isTpn == null) {
		tpn = thisParentNode;
		setAll();
		isTpn = "set";
	} else {
		tpn = thisParentNode;
		if (tpn.attributes[1].nodeValue != audioFix) {
			setAll();
		}
	}
	setAllTime();
	playPause();
}

function setAll() {
	tpnAudio = tpn.childNodes[1];
	audio = tpnAudio;
	audioFix = tpn.attributes[1].nodeValue;
	tpnAudioCurrentTime = tpn.querySelector(".currentTime");
	tpnAudioAllTime = tpn.querySelector(".allTime");
	tpnAudioScrollbarAudio = tpn.querySelector(".timeScrollbar");
	tpnTimeline = tpn.querySelector(".timeline");
	tpnVolumeSlider = tpn.querySelector(".volumeSlider");
}

function playPause() {
	if (isPlay) {
		audio.pause();
		tpn.querySelector(".play").classList.toggle("displayNone");
		tpn.querySelector(".pause").classList.toggle("displayNone");
		isPlay = false;
		clearInterval(interval);
	} else {
		audio.play();
		tpn.querySelector(".play").classList.toggle("displayNone");
		tpn.querySelector(".pause").classList.toggle("displayNone");
		isPlay = true;
		interval = setInterval(setCurrentTime, 1000);
	}
}

function setAllTime() {
	let text = tpnAudioAllTime;
	let time = Math.round(audio.duration);
	text.textContent = countingTime(time);
}

function setCurrentTime() {
	let text = tpnAudioCurrentTime;
	let time = Math.round(audio.currentTime);
	text.textContent = countingTime(time);
	tpnAudioScrollbarAudio.style.left = ( time / Math.round(audio.duration) ) * 100 + "%";
}

function countingTime(time) {
	let minutes = parseInt(time / 60);
	let seconds = time - (60 * minutes)
	if (seconds < 10) {
		return minutes + ":0" + seconds;
	} else {
		return minutes + ":" + seconds;
	}
}

function setAudioVolume() {
   if (audio) {
      audio.volume = xxx / 100
   }
}