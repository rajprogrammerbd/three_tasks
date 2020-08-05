// import components
import data from './data';

// getting DOM
const video = document.getElementsByTagName("video")[0];
const seek = document.getElementById("seek");
const pushedBottom = document.getElementsByClassName("pushed")[0];
const btn = document.getElementById("play_button");

export default function updateDOM() {
    seek.defaultValue = Math.floor(video.currentTime);
    seek.value = seek.defaultValue;
    
	if ( Number(seek.max) === Math.floor(video.currentTime)  ) {
		if (video.ended) {
			seek.value = 0;
			pushedBottom.style.display = "none";
			btn.style.display = "block";
            data.SET_STARTED(false);
		}
	}
}