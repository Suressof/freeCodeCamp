function format(seconds) {
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    // Format seconds as two digits
    const formattedSecs = secs.toString().padStart(2, '0');
    
    // Format minutes - use "0" if duration < 1 minute, otherwise no leading zero
    let formattedMins = minutes.toString();
    if (seconds < 60) {
        formattedMins = "0";
    }
    
    // Include hours only if > 0
    if (hours > 0) {
        return `${hours}:${formattedMins.padStart(2, '0')}:${formattedSecs}`;
    } else {
        return `${formattedMins}:${formattedSecs}`;
    }
}


console.log("1.", format(500))
console.log("2.", format(4000))
console.log("3.", format(1))
console.log("4.", format(5555))
console.log("5.", format(99999))
