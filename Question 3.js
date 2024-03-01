function slope(x1, y1, x2, y2) {
    const rise = y2 - y1;
    const run = x2 - x1;
    return rise / run;
}

// Test cases for different lines
const lines = [
    { x1: 1, y1: 2, x2: 3, y2: 4 }, // slope = 1
    { x1: -2, y1: 5, x2: 4, y2: 7 }, // slope = 1/3
    { x1: 0, y1: 0, x2: 0, y2: 5 }   // vertical line, undefined slope
];

console.log("Slope calculation for different lines:");
lines.forEach((line, index) => {
    const slp = slope(line.x1, line.y1, line.x2, line.y2);
    if (isFinite(slp)) {
        console.log(`Line ${index + 1}: slope = ${slp}`);
    } else {
        console.log(`Line ${index + 1}: vertical line, slope is undefined`);
    }
});
