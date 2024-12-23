let hours = prompt("Enter hours:", "0");
let minutes = prompt("Enter minutes:", "0");
let seconds = prompt("Enter seconds:", "0");

hours = parseInt(hours) || 0;
minutes = parseInt(minutes) || 0;
seconds = parseInt(seconds) || 0;

function updateClock() {
    document.getElementById('Hour').textContent = String(hours).padStart(2, '0');
    document.getElementById('Minute').textContent = String(minutes).padStart(2, '0');
    document.getElementById('Second').textContent = String(seconds).padStart(2, '0');

    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        document.querySelectorAll('.time-unit').forEach(unit => unit.classList.add('red'));
        return; 
    }

    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
    }
}

const timerInterval = setInterval(updateClock, 1000);
updateClock();