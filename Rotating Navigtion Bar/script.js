const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const container = document.querySelector('.container');

openButton.addEventListener('click', () => container.classList.add('show-nav'));
closeButton.addEventListener('click', () => container.classList.remove('show-nav'));



/*function Car(brand, model, engine, transmission, color) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.transmission = transmission;
    this.color = color;

    this.drive = function(boolean) {
        if(boolean) {
            console.log(`driving ${this.brand} model ${this.model}`)
            return;
        }
            console.log(`${this.brand} model ${this.model} is at rest`)
    }

    this.honk = function(bool) {
        if(bool) {
            console.log(`honking ${this.brand} model ${this.model}`)
            return;
        }
            console.log(`${this.brand} model ${this.model} is at silent`)
        
    }

    this.stop = function(booln) {
        if(booln) {
            console.log(`stoping ${this.brand} model ${this.model}`)
            return;
        }
            console.log(`${this.brand} model ${this.model} is at moving`)
    }
}

const newCar = new Car('toyota', '2022 latest', 'V8 engine', 'true', 'red',)
console.log(newCar.engine)
console.log(newCar.drive(true))
*/