var heigh = 0;
var width = 0;
var lifes = 1;
var time = 15;

var setFlyTime = 1500

var level = window.location.search
level = level.replace('?', '')

if(level === 'normal'){
    // 1500
    setFlyTime = 1500;
}else if(level === 'hard'){
    //1000
    setFlyTime = 1000;
}else if(level === 'impossible') {
    // 750
    setFlyTime = 750;
}
function fixScreenSize(){
    heigh = window.innerHeight;
    width = window.innerWidth;

    console.log(heigh, width)
}

fixScreenSize()

var stopwatch = setInterval(function(){

    time -=1;
    if (time < 0) {
        clearInterval(stopwatch);
        clearInterval(setFly);
        window.location.href = 'victory.html'

    }else {
    document.getElementById('stopwatch').innerHTML = time;
    }
}, 1000)

function ramdomPosition() {

    // remove the fly 
    if(document.getElementById('fly')) {
        document.getElementById('fly').remove();
        if (lifes > 3) {
            window.location.href = 'end-game.html'
        } else {
        document.getElementById('l' + lifes).src = "img/empty.png";
        lifes++
        }
    }

var positionX = Math.floor(Math.random() * width) - 90;
var positionY = Math.floor(Math.random() * heigh) - 90;

positionX = positionX < 0 ? 0 : positionX;
positionY = positionY < 0 ? 0 : positionY; 

console.log(positionX, positionY)

// Creating HTML element

var fly = document.createElement('img');
fly.src = 'img/mosca.png'
fly.className = randomSize() + ' ' + randomSide();
fly.style.left = positionX + 'px';
fly.style.top = positionY + 'px';
fly.style.position = 'absolute';
fly.id = 'fly'
fly.onclick = function() {
    this.remove()
}

document.body.appendChild(fly);


}

function randomSize() {
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'fly1';
        case 1:
            return 'fly2';
        case 2:
            return 'fly3';
    }
}

function randomSide(){
        var classe = Math.floor(Math.random() * 2);
    
        switch (classe) {
            case 0:
                return 'sideA';
            case 1:
                return 'sideB';

        }
    }

