function House(property) {
    this.length = ++ this.length || 1;
    if(property) this.property = property;
    this.buildHouse();
}

House.prototype.property = {
    'type': 'HOUSE',
    'color': 'DEFAULT',
    'position': {
        'left': '0%',
        'top': '0%'
    }
};

var trainContainer = document.getElementsByClassName('train-container')[0];
House.prototype.buildHouse = function() {
    var house = document.createElement('div');
    house.classList.add('house');
    house.classList.add(this.property.color.toLowerCase());
    house.style.top = this.property.position.top;
    house.style.left = this.property.position.left;
    house.style.right = this.property.position.right;
    house.style.bottom = this.property.position.bottom;
    trainContainer.appendChild(house);
}

House.prototype.detectTrains = function() {
    this.
}

function Train(property) {
    if(property) {
        this.property['color'] = property['color'];
    }
    this.buildTrain();
}

Train.prototype.buildTrain = function() {
    var train = document.createElement('div');
    train.classList.add('train');
    train.classList.add(this.property.color.toLowerCase() + '-train');
    train.style.top = this.property.position.top;
    train.style.left = this.property.position.left;
    train.style.right = this.property.position.right;
    train.style.bottom = this.property.position.bottom;
    trainContainer.appendChild(train);
}

Train.prototype.property = {
    'type': 'TRAIN',
    'position': {
        'left': '0',
        'top': '0'
    }
};

function Game(houses, trains) {
    this.houses = houses;
    this.trains = trains;
    var defaultHouse = new House();
    var orangeHouse = new House({
        'type': 'House',
        'color': 'ORANGE',
        'position': {
            'left': 'unset',
            'top': '0%',
            'bottom': 'unset',
            'right': '0%'
        }
    });

    var orangeTrain = new Train({
        'color': 'ORANGE'
    });
}

Game.prototype.start = function() {
    var trains = document.getElementsByClassName('train');
    var len = trains.length;
    for (var i = 0; i < len; ++ i) {
        (function (i) {
            var timeout = setInterval(() => {
                console.log(i);
                trains[i].style.left = Number(trains[i].style.left.split('px')[0]) + 10 + 'px'
            }, 100);
        })(i);
    }
}

var game = new Game(2, 1);
// game.start();