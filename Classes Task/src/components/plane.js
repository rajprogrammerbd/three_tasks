import Main from './main';

class Plane extends Main {
    constructor() {
        super();
        this.plane = () => {
            return `The Plane has ${this.get_num_of_wheels()} wheels and total ${this.get_num_of_passengers()} passengers`;
        }
    }
}

export default Plane;