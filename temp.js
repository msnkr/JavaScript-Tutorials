const { exec } = require("child_process");


let tempCelcius = "°C"


exec("cat /sys/class/thermal/thermal_zone0/temp", (error, stdout) => {
    if (error) {
        console.log("Command not Found")
    }
    let temp = stdout / 1000
    console.log(`The current Temperature is: ${Math.floor(temp)}${tempCelcius}`);
    
})