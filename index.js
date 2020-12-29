setInterval(snowGenerator, 150);
let weather = document.querySelectorAll('.snow').length;

function snowGenerator (){
    const sky = document.body;
    const clouds = sky.children;
    const droplets = clouds[(Math.round(18*Math.random()))];
    const snowFlakes = droplets.cloneNode(true);
    sky.appendChild(snowFlakes);
    let pos = 0;
    
    setInterval(down, 12+(Math.floor(5+Math.random())));
    
    function down() {
        if (pos === 917) {
            clearInterval();
        } else {
            pos++;
            snowFlakes.style.top = pos + 'px';
        }
    }
}

for (let i = 0; i < weather; i++) {
    let snow = document.getElementsByClassName('snow')[i];
    let pos = 0;
    setInterval(down, 12+(Math.round(5*Math.random())));
    
    function down() {
        if (pos === 917) {
            clearInterval();
        } else {
            pos++;
            snow.style.top = pos + 'px';
        }
    }
}




// snowFlakes.style.animationDirection = 'alternate';
// snowFlakes.style.animationTimingFunction = 'ease-in-out';
// snowFlakes.style.animationName = 'moveLeftRight';

// snow.style.animationDuration = '2s';
// snow.style.animationDirection = 'alternate';
// snow.style.animationIterationCount = 'infinite';
// snow.style.animationTimingFunction = 'ease-in-out';
// snow.style.animationName = 'moveLeftRight';
// (Math.round(8*Math.random()))