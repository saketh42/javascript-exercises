const sumAll = function(start, end) {
    let startInt = Number.isInteger(start);
    let endInt = Number.isInteger(end);
    let startPos = start >= 0;``
    let endPos = end >= 0;

    if (!startInt || !endInt || !startPos || !endPos) {
        return "ERROR";
    }

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
