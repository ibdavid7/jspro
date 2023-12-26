const ringo = {
    name: 'Ringo',
    band: 'Beatles',
    greet: function (greeting) {
        console.log(`this is:`, this)
        return `${this.name} says ${greeting}`
    },
    sing: function () {
        console.log('this is:', this);
        // return `${this.name} sings LA LA LA`;
        console.log(`${this.name} sings LA LA LA`);
    }
}

const greeting = 'yippie kay yeah motherfucker';

const nums = [1, 4, 88, 3, 4, 46];

const maximum = () => {
    console.log(arguments);
}

function max() {
    console.log(arguments);
    return Math.max.apply(null, arguments);
}

const paul = {
    name: 'Paul',
    band: 'Beetles'
}

class Beatle {
    constructor(name) {
        this.name = name;
        this.band = 'Beatles'
    }

    static greet(greeting) {
        console.log(`this is:`, this)
        return `${this.name} says ${greeting}`
    }
}

function applySalesTax(taxRate, price) {
    return price + taxRate * price;
}

const clickMeButton = document.querySelector('#clickButton1');

// clickMeButton.addEventListener('click', function () {
//     console.log('BUTTON CLICKED')
// })

// clickMeButton.addEventListener('click', ringo.sing)
clickMeButton.addEventListener('click', ringo.sing.bind(ringo))

class Counter {
    constructor(start = 0, increment = 1) {
        this.counter = start;
        this.increment = increment;
        this.refreshIntervalId;
    }

    start() {
        this.refreshIntervalId =
            setInterval(
                (function printAndIncrement() {

                    console.log(this.counter);
                    this.counter += this.increment;
                }).bind(this),
                1000
            );

        console.log('START: this is:', this)
        // this.refreshIntervalId = refreshIntervalId;
    }

    bla() {
        console.log('bla bla')
    }

    stop() {
        console.log('STOP: this is', this)
        clearInterval(this.refreshIntervalId);
    }
}

const counter = new Counter();

const startButton = document.querySelector('#startCounterButton');
startButton.addEventListener('click',
    (function () {
        counter.start();
    }).bind(counter)
)

const stopButton = document.querySelector('#stopCounterButton');
stopButton.addEventListener('click',
    (function () {
        counter.stop();
    }).bind(counter)
)

class Kitty {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`#1 I'm ${this.name}`);
        console.log('this is:', this);

        setTimeout(
            (function () {
                console.log(`#2 I'm ${this.name}`);
                console.log('this is:', this);
            }).bind(this),
            1000
        )

        setTimeout(
            () => {
                console.log(`#3 I'm ${this.name}`);
                console.log('this is:', this);
            },
            2000
        )

    }
}

const kitty = new Kitty('Pouch');