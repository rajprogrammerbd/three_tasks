import Main from './main';

// Car class
class Car extends Main {
    constructor() {
        super();
        this.car = () => {
            return `The Car has ${this.get_num_of_wheels()} wheels and total ${this.get_num_of_passengers()} passengers`;
        }
    }
}

export default Car;