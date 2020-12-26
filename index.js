snowFall();

function snowFall() {
    let snow = document.getElementsByClassName('snow')[0];
    let pos = 0;
    setInterval(down, 10);
    function down() {
        if (pos === 900) {
        clearInterval();
        } else {
        pos++;
        snow.style.top = pos + 'px';
        }
    }
}
