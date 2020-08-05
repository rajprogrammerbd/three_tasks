

function Data() {
    let STARTED = false;
    let PUSHED = null;
    let SCREEN = false

    this.STARTED = function() {
        return STARTED;
    }

    this.SET_STARTED = function ( bool ) {
        if ( typeof bool === "boolean" ) {
            STARTED = bool;
        } else throw new Error("Parameter is can be boolean value");
    }

    this.PUSHED = function() {
        return PUSHED;
    }

    this.SET_PUSHED = function ( bool ) {
        if ( typeof bool === "boolean" ) {
            PUSHED = bool;
        } else throw new Error("Parameter is can be boolean value");
    }

    this.SCREEN = function() {
        return SCREEN;
    }

    this.SET_SCREEN = function( bool ) {
        if ( typeof bool === "boolean" ) {
            SCREEN = bool;
        } else throw new Error("Parameter is can be boolean value");
    }
}

const data = new Data();
export default data;