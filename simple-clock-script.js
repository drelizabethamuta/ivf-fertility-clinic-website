// Simple Digital Clock Script

function updateClock() {
    const now = new Date();

    // Get time components
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM/PM
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    if (hours > 12) {
        hours -= 12;
    }
    if (hours === 0) {
        hours = 12;
    }

    // Pad with zeros
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Update time display
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('period').textContent = period;

    // Update date display
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateStr;

    // Update day display
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayStr = days[now.getDay()];
    document.getElementById('day').textContent = dayStr;
}

// Update clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
