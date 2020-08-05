
// Main Constructor Function

function Main() {
    // Local Properties
    let num_of_wheels = 0;
    let passengers = 0;

    // Has Fuel
    this.hasFuel = type => {
        return "The " + type + " has a fuel.";
    }

    // Getting Data of wheels
    this.get_num_of_wheels = () => {
        return num_of_wheels;
    }

    // Set a number of wheels count
    this.set_num_of_wheels = val => {
        if (typeof val == "number") {
            num_of_wheels = val;
            return true;
        } else throw new Error("Parameter can be number only");
    }

    // Getting Passengers count.
    this.get_num_of_passengers = () => {
        return passengers;
    }

    this.set_num_of_passengers = val => {
        if (typeof val == "number") {
            passengers = val;
            return true;
        } else throw new Error("Parameter can be number only");
    }
}

export default Main;