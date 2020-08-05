// Import components
import data from './data';
import updateDOM from './updateDOM';

// Getting data from DOM
const wapper = document.getElementById("video_wapper");
const video = document.getElementsByTagName("video")[0];
const seek = document.getElementById("seek");

// Export all custom setting in class
export default class Custom {
    static calculate( val ) {
        if (typeof val === "number") {
            return (1 * val) / 100;
        } else throw new Error("Parameter can be only number");
    }

    static fullScreens() {
        if ( data.SCREEN() ) { 
            document.exitFullscreen();
            data.SET_SCREEN(false);
          } else { 
            wapper.requestFullscreen();
            data.SET_SCREEN(true);
          } 
    }

    static another(e) {
        let value = e.value;
        video.currentTime = value;
        if ( data.STARTED() && ( data.PUSHED() === false ) ) { video.play(); }
        seek.value = value;
        video.addEventListener("timeupdate",  updateDOM );
    }
}