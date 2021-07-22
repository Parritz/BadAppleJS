const fs = require('fs');

// Wait specified amount of seconds
function sleep(seconds) {
    let ms = seconds*1000;
    
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

fs.readFile('./BadApple.txt', 'utf8' , async (err, data) => {
    if (err) return console.log(err);

    let newData = data.replace("%.", " ");
    let split = newData.split('SPLIT');

    for (let i = 0; i < split.length; i++) {
        console.log(split[i]);
        await sleep(0.1);
    }
});