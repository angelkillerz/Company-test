/*
    Q3 : Clock angle
    1) Given input time in hh24:mm, cal shortest angle between the hour and minute hands in an analog lclock
    
    Conditions : 
    1) There will always be two sides for the angle shortest & longest angle
    3) Circle has an angle of 360

    Algorithm : 
    1.Convert the 24 => 12 format
    2.Set the break point for 180deg (to find the shortest path possible)
    3.in the clock it will have 12 number in which it can be diveide into 60 each tick in the clocke 
    will be equal to 6deg
    4.The hour arrow move according to the min-arrow when the min pass 10m = 5deg (hour)
    hence that in 1 min hour deg will move 0.5deg

    min will still be min but hour will move

*/

//function to calculate degree of hour
function calHourDeg(hour,min) {
    return ( hour === 0 ? 360 : (hour * 5 * 6) + (min * 0.5));
}
function calMinDeg(min) {
    
    return min === 0 ? 360 : min * 6 ;       
}

//input = string in the ("hh:mm") format
function getClockAngle(time) {
    let minDeg;
    let hourDeg;
    const timeArray = time.split(":");
    //input for 00 == 24 and 0 <= mm < 60 all is non-negative
    if ( Number(timeArray[0] > 24 || Number(timeArray[0]) < 0 || Number(timeArray[1]) > 59 )){
        console.log("Invalid Input");
        throw Error('Invalid input')
    }

    if(Number(timeArray[0]) > 12) {  // 12 % 12 = 0 // 
        timeArray[0] = Number(timeArray[0] - 12);
    }

    const timeObj = {
        "hour": +timeArray[0],
        "minute": +timeArray[1]
    };

    minDeg = calMinDeg(timeObj.minute);
    hourDeg = calHourDeg(timeObj.hour, timeObj.minute);

    /*
        Before refractor
        if (minDeg > hourDeg) {
            return (Math.abs(minDeg - hourDeg))
        } else {
            return (Math.abs(hourDeg - minDeg));
        }
    */
    

    return minDeg > hourDeg ? Math.abs(minDeg - hourDeg) : Math.abs(hourDeg - minDeg);
    

}

//testing output
//const shortestAngle = getClockAngle("09:00");
//console.log("Shortest angle is", shortestAngle,"degree")

