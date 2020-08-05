// Import Stylesheets
import "./sass_modules/index.scss";

// Import Components
import Custom from "./components/custom";
import data from './components/data';
import updateDOM from './components/updateDOM';

// Getting DOM References
const video = document.getElementsByTagName("video")[0];
const btn = document.getElementById("play_button");
const volumnBottom = document.getElementById("volume-bottom");
const volumnSetting = document.getElementsByClassName("volumn-setting")[0];
const pushedBottom = document.getElementsByClassName("pushed")[0];
const wapper = document.getElementById("video_wapper");
const seek = document.getElementById("seek");
const fullscreen = document.getElementById("full-screen");


video.addEventListener("timeupdate",  updateDOM );

seek.onmouseup = async function(e) {
    let ans = e.target;
    const p = new Promise((resolve, reject) => {
                
        if (  video.paused ) {
            resolve({ success: true });
        } else {
            reject({ sucess: false });
        }
    });
    
    await p.then(obj => {
        if ( obj.success ) {
            Custom.another(ans);
        }
    }).catch(err => {
        throw new Error("video pushed is not successfully done!");
    });
}

seek.onmousedown = function() {
    video.pause();
    video.removeEventListener("timeupdate", updateDOM );
    seek.removeAttribute("value");
}

window.onload = function() {
	document.documentElement.style.setProperty('--length', `${wapper.offsetWidth - (54 + 30) - 64}px`);
    window.setTimeout(() => { seek.setAttribute("max", `${Math.floor(video.duration)}`) }, 700);
    // seek.max = '' + Math.floor(video.duration) + '';
    video.volume = 0.50;
    volumnSetting.value = 50;
	
	if ( video.paused ) {
		pushedBottom.style.display = 'none';
		btn.style.display = "block";
	} else {
		pushedBottom.style.display = 'flex';
		btn.style.display = "none";
	}
}

pushedBottom.addEventListener("click", function() {
	video.pause();
	btn.style.display = "block";
	pushedBottom.style.display = 'none';
    data.SET_PUSHED(true);
});

btn.addEventListener("click", function() {
	video.play();
	btn.style.display = "none";
	pushedBottom.style.display = 'flex';
    data.SET_STARTED(true);
    data.SET_PUSHED(false);
});

volumnBottom.addEventListener("click", function() {
	if ( volumnSetting.style.display == "block" ) {
		volumnSetting.style.display = "none";
	} else {
		volumnSetting.style.display = "block";
	}
});

volumnSetting.onmouseup = function(e) {
    video.volume = Custom.calculate(Number(e.target.value));
}

fullscreen.addEventListener("click", Custom.fullScreens);


wapper.onfullscreenchange = function() {
	document.documentElement.style.setProperty('--length', `${wapper.offsetWidth - (54 + 30) - 64}px`);
}

window.onkeyup = function (e) {
    if ( data.STARTED() ) {
        if ( e.key === "ArrowLeft" && e.keyCode === 37 ) {
            video.currentTime = video.currentTime - 5;
        }
        else if ( e.key === "ArrowRight" && e.keyCode === 39 ) {
            video.currentTime = video.currentTime + 5;
        }
    }
}